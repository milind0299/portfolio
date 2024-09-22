import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message, subject, toEmail } = await req.json();
  try {
    const from = name + "<" + email + ">";
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [toEmail],
      subject: subject,
      react: EmailTemplate({
        message: message,
        from: from,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
