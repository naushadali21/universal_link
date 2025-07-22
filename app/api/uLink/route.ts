import { NextRequest, userAgent, NextResponse } from 'next/server';
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const authcode = searchParams.get('authcode'); 
  const requestId = searchParams.get('requestId'); // e.g. `/api/search?query=hello`

  // e.g. `/api/search?query=hello`
  const { os } = userAgent(request); 
  const url = (authcode && requestId) ? `https://send.uniteller.com${request.url}` : 'https://ulink.com/ulinkapp/';

  switch(os.name){
    case 'Android':
         return NextResponse.redirect("https://play.google.com/store/apps/details?id=com.app.uniteller")
    break;
    case 'iOS':
        return NextResponse.redirect('https://apps.apple.com/us/app/ulink-money-transfer-superapp/id964443352?l=en-US')
    break;
    default:
        return NextResponse.redirect(url)  
  }

  
 
//   return new Response(
//     JSON.stringify({ result: `You searched for: ${os.name}` }),
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   );
}