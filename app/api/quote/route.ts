import { NextResponse } from "next/server";

type Payload=Record<string,unknown>;
const text=(v:unknown)=>typeof v==="string"?v.trim():"";
export async function POST(request:Request){
 try{
  const body=await request.json() as Payload;
  if(text(body.company)) return NextResponse.json({message:"Request rejected."},{status:400});
  const errors:Record<string,string>={};
  if(text(body.name).length<2)errors.name="Please enter your full name.";
  if(text(body.phone).length<7)errors.phone="Please enter a valid phone number.";
  if(!text(body.service))errors.service="Please choose a service.";
  if(text(body.consent)!=="yes")errors.consent="Consent is required so we can reply.";
  const email=text(body.email); if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))errors.email="Please enter a valid email address.";
  if(Object.keys(errors).length)return NextResponse.json({message:"Please check the form fields.",errors},{status:422});
  const requestUrl=new URL(request.url);
  const origin=request.headers.get("origin")||requestUrl.origin;
  const formUrl=`${origin}/contact`;
  const formSubmitPayload={
   _subject:"New cleaning quote request — ASH Cleaning Service",
   _template:"table",
   _captcha:"false",
   _url:formUrl,
   name:text(body.name),
   phone:text(body.phone),
   email:email||"Not provided",
   neighborhood_or_postal_code:text(body.area)||"Not provided",
   service:text(body.service),
   property_type:text(body.propertyType)||"Not provided",
   bedrooms:text(body.bedrooms)||"Not provided",
   bathrooms:text(body.bathrooms)||"Not provided",
   preferred_frequency:text(body.frequency)||"Not sure yet",
   preferred_date:text(body.preferredDate)||"Not provided",
   special_instructions:text(body.message)||"None",
   consent:"Customer agreed to be contacted about this quote request",
   submitted_at:new Date().toISOString(),
   source:"ASH Cleaning Service website",
  };
  const res=await fetch("https://formsubmit.co/ajax/ash.cleaningserviceltd@gmail.com",{
   method:"POST",
   headers:{"Content-Type":"application/json","Accept":"application/json","Origin":origin,"Referer":formUrl},
   body:JSON.stringify(formSubmitPayload),
   cache:"no-store",
  });
  const result=await res.json().catch(()=>null) as {success?:string|boolean;message?:string}|null;
  if((result?.success===false||result?.success==="false")&&result?.message?.toLowerCase().includes("activation")){
   return NextResponse.json({message:"FormSubmit needs one-time activation. Please open ash.cleaningserviceltd@gmail.com and click the Activate Form link, then submit again."},{status:409});
  }
  if(!res.ok||result?.success===false||result?.success==="false")throw new Error(result?.message||"FormSubmit rejected the request");
  return NextResponse.json({message:"Thank you — your quote request has been emailed to ASH Cleaning Service. We’ll be in touch using the details provided."});
 }catch(error){console.error("Quote submission error",error);return NextResponse.json({message:"We couldn’t send your request right now. Please email, WhatsApp or call us instead."},{status:500})}
}
