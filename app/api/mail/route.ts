import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Validate API key exists
if (!process.env.RESEND_API) {
  console.error('RESEND_API environment variable is not set')
}

const resend = new Resend(process.env.RESEND_API)

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(req: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API) {
      console.error('RESEND_API environment variable is not set')
      return NextResponse.json(
        { message: 'Email service is not configured' }, 
        { status: 500 }
      )
    }

    const { name, email, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, and message are required' }, 
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' }, 
        { status: 400 }
      )
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { message: 'Message must be at least 10 characters long' }, 
        { status: 400 }
      )
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'K Designs <info@kdesign-interiors.com>', // Using verified domain
      to: 'arpitkukrety27@gmail.com', // Admin email for inquiries
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p><small>Sent from K Designs contact form</small></p>
      `,
    })

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'K Designs <info@kdesign-interiors.com>', // Using verified domain
      to: email,
      subject: `Thanks for contacting K Designs`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for getting in touch with <strong>K Designs</strong>. We've received your message and will respond shortly.</p>
        <p><em>Your Message:</em></p>
        <blockquote style="color: #555; border-left: 4px solid #ccc; padding-left: 12px;">
          ${message.replace(/\n/g, '<br/>')}
        </blockquote>
        <p>Warm regards,<br/>K Designs Team</p>
        <hr/>
        <p><small>This is an automated confirmation email</small></p>
      `,
    })

    console.log('Emails sent successfully:', {
      adminEmail: adminEmailResult,
      userEmail: userEmailResult
    })

    return NextResponse.json({ message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error sending emails:', error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { message: 'Email service configuration error' }, 
          { status: 500 }
        )
      }
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { message: 'Too many requests. Please try again later.' }, 
          { status: 429 }
        )
      }
    }
    
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' }, 
      { status: 500 }
    )
  }
}
