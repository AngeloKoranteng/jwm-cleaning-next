import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration early so errors show in logs
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nieuwe aanvraag: ${service} - ${name}`,
      text: `
        NAAM: ${name}
        EMAIL: ${email}
        DIENST: ${service}
        
        BERICHT:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .header { background-color: #476833; color: #ffffff; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px; }
            .header span { color: #d9e5bc; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #888; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #333; font-weight: 500; }
            .message-box { background-color: #f8f9fa; border-left: 4px solid #7f9b45; padding: 15px; margin-top: 10px; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eaeaea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>J.W.M <span>CLEANING</span></h1>
            </div>
            <div class="content">
              <h2 style="margin-top:0; color: #476833; font-size: 20px;">Nieuwe Offerte Aanvraag</h2>
              <p style="color: #666; margin-bottom: 25px;">Er is een nieuw bericht binnengekomen via de website.</p>
              
              <div class="field">
                <span class="label">Naam</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}" style="color: #476833; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Gekozen Dienst</span>
                <div class="value" style="color: #476833; font-weight: 700;">${service}</div>
              </div>
              
              <div class="field">
                <span class="label">Bericht</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} J.W.M Cleaning Services<br>
              Dit is een geautomatiseerd bericht van uw website.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    // Include the error message in the JSON when not in production to help debugging
    const isProd = process.env.NODE_ENV === 'production';
    const body: any = { message: 'Failed to send email' };
    if (!isProd && error instanceof Error) body.error = error.message;
    return NextResponse.json(body, { status: 500 });
  }
}
