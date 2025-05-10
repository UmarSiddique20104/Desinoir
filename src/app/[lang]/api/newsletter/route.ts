import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';


mailchimp.setConfig({
  apiKey: "ca7ae69de6dcc80aa8b14a5c601cf4ef-us14",
  server: "us14",
});

export async function POST(request: NextRequest, response:NextResponse) {
 
  const {Email}= await  request.json()


  if (!Email) {
    return NextResponse.json({
      success: false,
      message: "Email required",
    }, { status: 422 });
  }

  try {
    const response = await mailchimp.lists.addListMember(
      "5d6c5ec890",
      {
        email_address: Email,
        status: 'subscribed'
      }
    );
    if(response){
      return NextResponse.json(
        {
      success: true,
      message: "Newsletter subscribed successfully",
    },
     { status: 200 });
  }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    }, { status: 400 });
  }
}
