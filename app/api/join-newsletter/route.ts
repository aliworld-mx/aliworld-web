import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY ?? "", // API Key pública de Mailjet
  process.env.MAILJET_SECRET_KEY ?? "", // API Key privada de Mailjet
);

const newsLetterEmail = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a Aliworld</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #0284c7;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .body {
      padding: 20px;
      color: #333333;
      line-height: 1.6;
    }
    .body p {
      margin: 0 0 10px;
    }
    .cta {
      text-align: center;
      margin: 32px 0;
    }
    .cta a {
      text-decoration: none;
      background-color: #0284c7;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
    }
    .cta a:hover {
      background-color: #0284c7;
    }
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 10px;
      font-size: 14px;
      color: #777777;
    }
    .footer a {
      color: #0284c7;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div>
            <img src="https://www.aliworld.mx/aliword-blanco.png" alt="Aliworld Logo" style="width: 180px; height: auto;">
        </div>
      <h1>¡Gracias por unirte a Aliworld!</h1>
    </div>
    <div class="body">
      <p>Hola,</p>
      <p>Estamos emocionados de tenerte en nuestra comunidad de viajeros apasionados. Ahora recibirás las últimas noticias, promociones exclusivas y los mejores consejos para tus próximas aventuras.</p>
      <p>¿Listo para tu próximo viaje? ¡Explora los destinos más increíbles que hemos seleccionado para ti!</p>
      <div class="cta">
        <a href="https://www.aliworld.mx/paquetes" target="_blank">Descubre paquetes de viaje</a>
      </div>
      <div class="cta">
        <a href="https://reservas.aliworld.mx" target="_blank">Reserva hoteles y vuelos</a>
      </div>
      <p>Gracias por confiar en <strong>Aliworld</strong>. Estamos aquí para ayudarte a planificar experiencias inolvidables.</p>
      <p>¡Buen viaje!</p>
      <p><strong>El equipo de Aliworld</strong></p>
    </div>
    <div class="footer">
      <p>¿Tienes preguntas? <a href="https://www.aliworld.mx/contacto" target="_blank">Contáctanos</a></p>
      <p>&copy; 2025 Aliworld. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    });
  }

  if (!email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });
  }

  try {
    // Configuración del correo
    const requestMail = mailjet
      .post('send')
      .request({
        FromEmail: 'info@aliworld.mx',
        FromName: 'Aliworld',
        Subject: "¡Bienvenido a Aliworld!",
        'Html-part': newsLetterEmail,
        Recipients: [{ Email: email }],
      });

    const result = await requestMail;

    mailjet
      .post('send')
      .request({
        FromEmail: 'info@aliworld.mx',
        FromName: 'Aliworld',
        Subject: "¡Bienvenido a Aliworld!",
        Recipients: [{ Email: 'contacto@aliworld.mx' }],
        'Html-part': `<p>Nuevo suscriptor a la newsletter: ${email}</p>`,
      });

    return new Response(JSON.stringify(result.body), {
      status: 200,
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
