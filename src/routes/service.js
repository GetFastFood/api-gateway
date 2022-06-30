const router = require('express').Router();
const nodemailer = require('nodemailer');
const tokenReceiver = require('../utils/tokenReceiver');
const { checkTokenMiddleware } = require('../middleware/auth');
const { io } = require('socket.io');

// GET /api/v1/service/download
router.get('/download',function(req, res){
    const file = `./logs/server.log`;
    res.download(file); // Set disposition and send it.
});

router.post('/parainage', function(req, res){
    const email = req.body.to;
    console.log(email);
    const output = `<!DOCTYPE html>

    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          .menu_block.desktop_hide .menu-links span {
            mso-hide: all;
          }
    
          @media (max-width: 620px) {
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #b4d2cb;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #b4d2cb;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 600px;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="25%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                      "
                                    >
                                      <div align="right" style="line-height: 10px">
                                        <a
                                          href="http://164.132.202.169:3000/"
                                          style="outline: none"
                                          tabindex="-1"
                                          target="_blank"
                                          ><img
                                            alt="Store Logo"
                                            src="https://media.discordapp.net/attachments/990555087728410675/991367803066122250/97c65597-63dc-43e5-a436-0f806452998d.png?width=1260&height=630"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              width: 143px;
                                              max-width: 100%;
                                            "
                                            title="Store Logo"
                                            width="143"
                                        /></a>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="75%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="menu_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        color: #11166f;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        font-size: 18px;
                                        letter-spacing: 0px;
                                        padding-left: 20px;
                                        padding-top: 9px;
                                        text-align: right;
                                        padding-bottom: 5px;
                                      "
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              text-align: right;
                                              font-size: 0px;
                                            "
                                          >
                                            <div class="menu-links"></div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            background-image: url('');
                            background-position: top center;
                            background-repeat: repeat;
                            width: 600px;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 40px;
                                  padding-bottom: 40px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="text-align: center; width: 100%">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #11166f;
                                          direction: ltr;
                                          font-family: Tahoma, Verdana, Segoe,
                                            sans-serif;
                                          font-size: 32px;
                                          font-weight: 700;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        On vous souhaite vous parrainer !
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="20"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          alt="Mother and daughter"
                                          class="big"
                                          src="https://media.discordapp.net/attachments/990555087728410675/991367804102127686/logo_dark_blue.png?width=651&height=651"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 406px;
                                            max-width: 100%;
                                          "
                                          title="Mother and daughter"
                                          width="406"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="padding-bottom: 5px">
                                      <div
                                        style="
                                          font-family: Tahoma, Verdana, sans-serif;
                                        "
                                      >
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #212021;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              letter-spacing: 1px;
                                            "
                                          >
                                            <span style="font-size: 42px"
                                              ><span style="font-size: 34px"
                                                >Recevez
                                                <span
                                                  style="
                                                    font-size: 58px;
                                                    color: #ff7000;
                                                    background-color: #ffffff;
                                                  "
                                                  >25%</span
                                                >
                                                de réduction</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="padding-bottom: 5px">
                                      <div style="font-family: Verdana, sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: 'Lucida Sans Unicode',
                                              'Lucida Grande', 'Lucida Sans', Geneva,
                                              Verdana, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #212021;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 22px"
                                              ><strong>Votre code:</strong>
                                              <span
                                                style="
                                                  color: #ff7000;
                                                  background-color: #ffffff;
                                                "
                                                ><strong>CODE1</strong></span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="button_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 5px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                        text-align: center;
                                      "
                                    >
                                      <div align="center">
                                        <a
                                          href="http://164.132.202.169:3000/"
                                          style="
                                            text-decoration: none;
                                            display: block;
                                            color: #ffffff;
                                            background-color: #11166f;
                                            border-radius: 5px;
                                            width: 65%;
                                            width: 65%;
                                            border-top: 0px solid #93005f;
                                            font-weight: 400;
                                            border-right: 0px solid #93005f;
                                            border-bottom: 0px solid #93005f;
                                            border-left: 0px solid #93005f;
                                            padding-top: 0px;
                                            padding-bottom: 0px;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            text-align: center;
                                            mso-border-alt: none;
                                            word-break: keep-all;
                                          "
                                          target="_blank"
                                          ><span
                                            style="
                                              padding-left: 40px;
                                              padding-right: 40px;
                                              font-size: 22px;
                                              display: inline-block;
                                              letter-spacing: normal;
                                            "
                                            ><span
                                              style="
                                                font-size: 16px;
                                                line-height: 2;
                                                word-break: break-word;
                                                mso-line-height-alt: 32px;
                                              "
                                              ><span
                                                data-mce-style="font-size: 22px; line-height: 44px;"
                                                style="
                                                  font-size: 22px;
                                                  line-height: 44px;
                                                "
                                                >Commandez maintenant</span
                                              ></span
                                            ></span
                                          ></a
                                        >
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 600px;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 30px;
                                  padding-right: 30px;
                                  padding-top: 20px;
                                  padding-bottom: 20px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 15px;
                                        padding-right: 10px;
                                        padding-top: 15px;
                                        text-align: center;
                                        padding-left: 0px;
                                      "
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="208px"
                                      ></table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 600px;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        vertical-align: middle;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        color: #9d9d9d;
                                        font-family: inherit;
                                        font-size: 25px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                      >
                                        <tr>
                                          <td
                                            style="
                                              vertical-align: middle;
                                              text-align: center;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 5px;
                                              padding-right: 6px;
                                            "
                                          >
                                            <img
                                              align="center"
                                              alt=""
                                              class="icon"
                                              height="32"
                                              src="https://media.discordapp.net/attachments/990555087728410675/991367803066122250/97c65597-63dc-43e5-a436-0f806452998d.png?width=1260&height=630"
                                              style="
                                                display: block;
                                                height: auto;
                                                margin: 0 auto;
                                                border: 0;
                                              "
                                              width="64"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false,
        auth: {
            user: 'notifications@greenbee44.fr', // generated ethereal user
            pass: '!jG8NMk&cP6Smq$e'  // generated ethereal password
        }
      });

        // setup email data with unicode symbols
  let mailOptions = {
    from: '"GetFast Notifications" <notifications@greenbee44.fr>', // sender address
    to: email, // list of receivers
    subject: 'On vous souhaite vous parrainer sur GetFast ! ', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
    };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.send(info);
    });
});

router.post('/recuperation', function(req, res){
  const email = req.body.to;
  const urlbutton = 'http://164.132.202.169:3000/motdepasse/recuperation/' + email;
  console.log(urlbutton);
  console.log(email);
  const output = `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style>
      * {
        box-sizing: border-box;
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
  
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
  
      p {
        line-height: inherit
      }
  
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }
  
      @media (max-width:670px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }
  
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
  
        .image_block img.big,
        .row-content {
          width: 100% !important;
        }
  
        .mobile_hide {
          display: none;
        }
  
        .stack .column {
          width: 100%;
          display: block;
        }
  
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body style="background-color: #000000; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3e6f8;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" style="line-height:10px"><img alt="Logo Getfast" src="https://media.discordapp.net/attachments/990555087728410675/991444973247537262/text.png" style="display: block; height: auto; border: 0; width: 195px; max-width: 100%;" title="your logo" width="195"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3e6f8;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('images/f707d360-1f1b-4ebf-a7a8-243551d764ea.png'); background-position: center top; background-repeat: no-repeat; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 45px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="20" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td>
  <div align="center">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="20" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td>
  <div align="center" style="line-height:10px"><img alt="Forgot your password?" class="big" src="https://media.discordapp.net/attachments/990555087728410675/991444973021052978/lock5.png?width=1061&height=651" style="display: block; height: auto; border: 0; width: 358px; max-width: 100%;" title="Forgot your password?" width="358"/></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td style="padding-top:35px;text-align:center;width:100%;">
  <h1 style="margin: 0; color: #8412c0; direction: ltr; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 28px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">Mot de passe oublié?</h1>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td style="padding-left:45px;padding-right:45px;padding-top:10px;">
  <div style="font-family: Arial, sans-serif">
  <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5;">
  <p style="margin: 0; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;color:#aa67cf;">Nous avons reçu une demande de réinitialisation de votre mot de passe.</span></p>
  <p style="margin: 0; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;color:#aa67cf;">Si vous n'avez pas fait cette demande, ignorez simplement cet e-mail.</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="20" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td>
  <div align="center">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="80%">
  <tr>
  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #E1B4FC;"><span> </span></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td style="padding-bottom:10px;padding-left:45px;padding-right:45px;padding-top:10px;">
  <div style="font-family: Arial, sans-serif">
  <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif; text-align: center; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5;">
  <p style="margin: 0; mso-line-height-alt: 19.5px;"><span style="font-size:13px;color:#8412c0;">Si vous avez fait cette demande, cliquez simplement sur le bouton ci-dessous :</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td>
  <div align="center">
  <a href="${urlbutton}" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#8412c0;border-radius:0px;width:auto;border-top:1px solid #8412c0;font-weight:400;border-right:1px solid #8412c0;border-bottom:1px solid #8412c0;border-left:1px solid #8412c0;padding-top:10px;padding-bottom:10px;font-family:'Cabin', Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:40px;padding-right:40px;font-size:14px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 14px; line-height: 28px;" style="font-size: 14px; line-height: 28px;">RÉINITIALISER MON MOT DE PASSE</span></span></span></a>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3e6f8;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="5" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td>
  <div align="center">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td>
  <div style="font-family: sans-serif">
  <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #8412c0; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 587,
      secure: false,
      auth: {
          user: 'notifications@greenbee44.fr', // generated ethereal user
          pass: '!jG8NMk&cP6Smq$e'  // generated ethereal password
      }
    });

      // setup email data with unicode symbols
let mailOptions = {
  from: '"GetFast Security" <notifications@greenbee44.fr>', // sender address
  to: email, // list of receivers
  subject: 'Mots de passe oublié ? ', // Subject line
  text: 'Hello world?', // plain text body
  html: output // html body
  };

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);   
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  res.send(info);
  });
});

/* router.post('/testnotif', function(req, res) {
    console.log(req.body);
    //req.app.httpsIo.emit('order', {update: true})
    io.to('clock-room').emit('order', new Date());
    res.send('ok');
  }); */

module.exports = router;