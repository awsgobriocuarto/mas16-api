export async function fetchCIDIUser(hashCookie) {
  const url =
    "https://cuentacidi.cba.gov.ar/api/Usuario/Obtener_Usuario_Aplicacion";

  const body = {
    idAplicacion: 578,
    Contrasenia: "LYQHNZkkhj12570",
    HashCookie: hashCookie, // Usamos el HashCookie pasado como argumento
    TokenValue: "B80B167C97D131E02A3EB28BEB1E261595257EB3",
    TimeStamp: "20241016111456000",
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from CIDI");
  }

  const data = await response.json();
  return data;
}
