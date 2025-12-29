// import { NextResponse } from "next/server";
// import { getSheet } from "../../lib/google";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { empId, empName, morningWork, afternoonWork } = body;

//     const sheets = await getSheet();

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "Sheet1!A:D",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [[empId, empName, morningWork, afternoonWork]],
//       },
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.log("Error:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { getSheet } from "../../lib/google";

export async function POST(req) {
  try {
    const body = await req.json();
    const sheets = await getSheet();

    let range = "";

    // Work Report Sheet
    if (body.sheet === "Work") {
      range = "Work!A:D";
      const { empId, empName, morningWork, afternoonWork } = body;
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [[empId, empName, morningWork, afternoonWork]] },
      });
    }

    // Leave Sheet
    if (body.sheet === "Leaves") {
      range = "Leaves!A:C";
      const { empName, reason, emergency } = body;
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [[empName, reason, emergency ? "Emergency" : "Normal"]] },
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
