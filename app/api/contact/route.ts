import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// EMAIL TEST (email đăng ký Resend)
const TEST_EMAIL = "duyquy04102006@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    /* =========================
       1️⃣ MAIL GỬI VỀ BẠN (TEST)
    ========================= */
    const companyMail = await resend.emails.send({
      from: "Masflo <onboarding@resend.dev>",
      to: [TEST_EMAIL],
      subject: subject || "New contact from website (TEST)",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email (customer):</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (companyMail.error) {
      console.error("Company mail error:", companyMail.error);
      throw new Error("Failed to send company mail");
    }

    /* =========================
       2️⃣ AUTO REPLY (TEST)
    ========================= */
    const autoReply = await resend.emails.send({
      from: "Masflo <onboarding@resend.dev>",
      to: [TEST_EMAIL], // ⚠️ test gửi về bạn
      subject: "Auto reply (TEST)",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <img
            src="https://masflo.vercel.app/images/banners/logo.jpg"
            width="140"
            alt="Masflo Logo"
            style="margin-bottom:16px"
          />

          <p>Dear ${name},</p>

          <p>
            This is a <strong>TEST auto-reply</strong> from Masflo Contact Form.
          </p>

          <p>
            Customer email entered: ${email}
          </p>

          <p>
            Masflo Team<br/>
            masflo.vercel.app
          </p>
        </div>
      `,
    });

    if (autoReply.error) {
      console.error("Auto reply error:", autoReply.error);
      throw new Error("Failed to send auto reply");
    }

    console.log("Company mail sent:", companyMail.data);
    console.log("Auto reply sent:", autoReply.data);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
