import { PrismaClient, Weather, Temperature, Severity } from "@prisma/client";

import { users } from "./users";
import { logs } from "./logs";
import { conditions } from "./healthConditions";

const prisma = new PrismaClient();

async function seed() {
  await prisma.$executeRaw`TRUNCATE TABLE "Log", "User", "HealthCondition" RESTART IDENTITY CASCADE;`;

  await prisma.user.createMany({
    data: users,
  });

  const createdUsers = await prisma.user.findMany();

  if (createdUsers.length === 0) {
    console.error("No users found");
    return;
  }

  async function createLog(
    title: string,
    severity: Severity,
    userId: number,
    weather: Weather,
    temperature: Temperature,
    eatenToday: string[],
    drankToday: string[],
    toiletriesUsed: string[]
  ) {
    await prisma.log.create({
      data: {
        title,
        severity,
        userId,
        weather,
        temperature,
        eatenToday: eatenToday,
        drankToday: drankToday,
        toiletriesUsed: toiletriesUsed,
      },
    });
  }

  await Promise.all([
    logs.map((log) =>
      createLog(
        log.title,
        log.severity,
        createdUsers[0].id,
        log.weather,
        log.temperature,
        log.eatenToday,
        log.drankToday,
        log.toiletriesUsed
      )
    ),
  ]);

  async function createMedications(
    name: string,
    dosage: string,
    userId: number
  ) {
    await prisma.medication.create({
      data: {
        name,
        dosage,
        userId,
      },
    });
  }

  await Promise.all([
    createMedications("Montelukast", "100mg", createdUsers[0].id),
    createMedications("Citalopram", "5mg", createdUsers[0].id),
    createMedications("Inhaler", "2 puffs, daily", createdUsers[1].id),
    createMedications("Naproxen", "10mg", createdUsers[2].id),
  ]);

  async function createHealthConditions(
    name: string,
    description: string,
    userId: number
  ) {
    await prisma.healthCondition.create({
      data: {
        name,
        description,
        userId,
      },
    });
  }

  await Promise.all(
    conditions.map((condition) =>
      createHealthConditions(
        condition.name,
        condition.description,
        condition.userId
      )
    )
  );

  console.log("Seeding complete");
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
