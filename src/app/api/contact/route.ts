import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, vehicle, service, message } = body

    // Send email notification
    await resend.emails.send({
      from: 'Diamond Tints <noreply@diamondtints.ca>',
      to: ['sukhnoor@diamondtints.ca'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'Diamond Tints <noreply@diamondtints.ca>',
      to: [email],
      subject: 'Thank you for contacting Diamond Tints',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${name},</p>
        <p>We've received your quote request and will contact you within 1 hour during business hours.</p>
        <p>If you need immediate assistance, please call us at (647) 335-0079.</p>
        <br>
        <p>Best regards,<br>Diamond Tints Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}