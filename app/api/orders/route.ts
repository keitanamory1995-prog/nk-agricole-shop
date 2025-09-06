import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}))
  // Ici tu peux connecter ton back (Airtable, Google Sheets, ERP, email, etc.)
  console.log('Nouvelle commande:', JSON.stringify(data, null, 2))
  return NextResponse.json({ ok: true })
}
