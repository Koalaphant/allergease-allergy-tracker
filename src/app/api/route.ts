export async function GET() {
  const responseData = { hello: "Andrew" };

  // Log the response
  console.log(responseData);

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
