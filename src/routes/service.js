const router = require('express').Router();
const nodemailer = require('nodemailer');
const tokenReceiver = require('../utils/tokenReceiver');
const { checkTokenMiddleware } = require('../middleware/auth');


// GET /api/v1/service/download
router.get('/download', checkTokenMiddleware, function(req, res){
  const tokenLoad = tokenReceiver(req);
  if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_commercial'){
    const file = `./logs/server.log`;
    res.download(file); // Set disposition and send it.
  }else{
    res.status(403).json({ message: 'Error. Forbidden' });
  }
});

router.post('/mail', checkTokenMiddleware, function(req, res){
    const output = `,
    <h1>GETFAST EMAIL</h1>
    <h3>Message</h3>
    <p>${req.body.message}</p>
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
    from: '"Nodemailer Contact" <notifications@greenbee44.fr>', // sender address
    to: "victor.massotte@viacesi.fr", // list of receivers
    subject: 'Node Contact Request', // Subject line
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

module.exports = router;