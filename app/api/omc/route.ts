import { NextRequest, userAgent, NextResponse } from 'next/server';
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // e.g. `/api/search?query=hello`
  const { os } = userAgent(request); 

  switch(os.name){
    case 'Android':
         return NextResponse.redirect("https://play.google.com/store/apps/details?id=com.ohmycard.app&hl=en_IN&gl=US")
    break;
    case 'iOS':
        return NextResponse.redirect('https://apps.apple.com/us/app/ohhmycard/id6748347756')
    break;
    default:
        return NextResponse.redirect('https://ulink.com/ulinkapp/')  
  }

  
 
//   return new Response(
//     JSON.stringify({ result: `You searched for: ${os.name}` }),
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   );
}