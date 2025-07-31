import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'K Designs <onboarding@resend.dev>',
      to: 'info@kdesign-interiors.com',
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    await resend.emails.send({
      from: 'K Designs <onboarding@resend.dev>',
      to: email,
      subject: `Thanks for contacting K Designs`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for getting in touch with <strong>K Designs</strong>. We've received your message and will respond shortly.</p>
        <p><em>Your Message:</em></p>
        <blockquote style="color: #555; border-left: 4px solid #ccc; padding-left: 12px;">
          ${message}
        </blockquote>
        <p>Warm regards,<br/>K Designs Team</p>
      `,
    })

    return NextResponse.json({ message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error sending emails:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
