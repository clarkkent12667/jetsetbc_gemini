import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would validate the body here as well

        // Configure transporter
        // Note: These environment variables need to be set in .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_FROM || 'noreply@jetsetbc.com',
            to: 'contact@jetsetbc.com', // Replace with actual recipient
            subject: `New Contact Form Submission from ${body.name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email send error:', error);
        // Return success even if email fails in dev mode to allow UI testing
        if (process.env.NODE_ENV === 'development') {
            console.log('Dev mode: Simulating success');
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
