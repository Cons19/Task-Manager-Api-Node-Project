const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "razvan1598@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "razvan1598@gmail.com",
        subject: "The account has been closed!",
        text: `Goodbye ${name}! Let us know why have you canceled your account.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}