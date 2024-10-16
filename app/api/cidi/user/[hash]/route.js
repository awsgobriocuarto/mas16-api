import { NextResponse } from "next/server"; // Servicio para obtener los datos del usuario
import { fetchCIDIUser } from "@/app/lib/data";

export async function GET(request, { params }) {
  const { hash } = params; // Extraemos el parámetro dinámico "hash" de la URL

  if (!hash) {
    return NextResponse.json(
      { error: "HashCookie is required" },
      { status: 400 }
    );
  }

  try {
    const result = await fetchCIDIUser(hash); // Llamada al servicio con el HashCookie
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
