export async function GET(request) {
  let data = {
    name: "Gor",
    surname: "Arestakesyan",
    id: "010349",
    age: 21,
  };
  return new Response(JSON.stringify(data));
}
