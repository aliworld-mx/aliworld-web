import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY ?? "", // API Key pública de Mailjet
  process.env.MAILJET_SECRET_KEY ?? "", // API Key privada de Mailjet
);

export async function POST(request: Request) {
  const { to, subject, text, html } = await request.json();

    console.log(to, subject, text, html);

  try {
    // Configuración del correo
    const requestMail = mailjet
      .post('send')
      .request({
        FromEmail: 'noreply@aliworld.mx',
        FromName: 'Aliworld',
        Subject: subject,
        'Text-part': text,
        'Html-part': html,
        Recipients: [{ Email: to }],
      });

    const result = await requestMail;

    return new Response(JSON.stringify(result.body), {
      status: 200,
    });
   
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
