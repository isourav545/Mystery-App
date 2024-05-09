import { resend } from "@/lib/resend";



import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/apiResponse";
import { Verification } from "next/dist/lib/metadata/types/metadata-types";

export async function sendVerificationEmail(
  email: string,
  username: string,
  otp: string,
  verifyCode: string
) :Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'email',
            subject: 'Mystery Message Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
    });
        return{
            success: true,
            message: `Verification Email sent successfully`,
           
         }
    }
    catch(emailError){
     console.log(`Error sending verification email`, emailError);
     return{
        success: false,
        message: `Failed to send verification email`,
       
     }
    }
}
