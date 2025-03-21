import { Role } from "@prisma/client";

export const users = [
  {
    firstName: "Andrew",
    lastName: "Smith",
    email: "andrew@example.com",
    dateOfBirth: new Date("1990-01-01"),
    role: Role.USER,
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily@example.com",
    dateOfBirth: new Date("1995-05-15"),
    role: Role.ADMIN,
  },
  {
    firstName: "Grace",
    lastName: "Johnson",
    email: "grace@example.com",
    dateOfBirth: new Date("1992-02-18"),
    role: Role.ADMIN,
  },
  {
    firstName: "Oliver",
    lastName: "Brown",
    email: "oliver@example.com",
    dateOfBirth: new Date("1989-04-20"),
    role: Role.USER,
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    email: "sophia@example.com",
    dateOfBirth: new Date("2000-07-10"),
    role: Role.USER,
  },
  {
    firstName: "James",
    lastName: "Martinez",
    email: "james@example.com",
    dateOfBirth: new Date("1997-11-22"),
    role: Role.USER,
  },
  {
    firstName: "Mia",
    lastName: "Hernandez",
    email: "mia@example.com",
    dateOfBirth: new Date("1998-03-15"),
    role: Role.ADMIN,
  },
  {
    firstName: "Liam",
    lastName: "Lopez",
    email: "liam@example.com",
    dateOfBirth: new Date("1992-09-09"),
    role: Role.USER,
  },
  {
    firstName: "Amelia",
    lastName: "Gonzalez",
    email: "amelia@example.com",
    dateOfBirth: new Date("1995-06-25"),
    role: Role.USER,
  },
  {
    firstName: "Lucas",
    lastName: "Rodriguez",
    email: "lucas@example.com",
    dateOfBirth: new Date("1994-12-05"),
    role: Role.ADMIN,
  },
];
