import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, grade, message } = await request.json();

  if (!name || !email || !grade || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'The Math Catalysts <onboarding@resend.dev>',
    to: 'funekongobeni53@gmail.com',
    subject: `New contact from ${name} (${grade})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Grade:</strong> ${grade}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return Response.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return Response.json({ success: true });
}
