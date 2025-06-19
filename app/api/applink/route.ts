import { NextRequest, userAgent, NextResponse } from 'next/server';
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // e.g. `/api/search?query=hello`
  const { os } = userAgent(request); 

  switch(os.name){
    case 'Android':
         return NextResponse.redirect("https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.app.uniteller")
    break;
    case 'iOS':
        return NextResponse.redirect('https://apps.apple.com/us/app/ulink-money-transfer-superapp/id964443352?l=en-US')
    break;
    default:
        return NextResponse.redirect('https://ulink.com')  
  }

  
 
//   return new Response(
//     JSON.stringify({ result: `You searched for: ${os.name}` }),
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   );
}