import { SMTPClient } from 'emailjs';
require('dotenv').config();

export async function sendEmail({name, email, messageBody}) {

const client = new SMTPClient({
	user: process.env.USER,
	password: process.env.email.PASSWORD,
	host: 'smtp.gmail.com',
	ssl: true,
});

try {
	const message = await client.sendAsync({
		text: `Hi Melissa, 
            ${name} left you the following message: 
            ${messageBody}
            You can reply to them at ${email}`,
		from: `Message Notification <${process.env.email.USER}>`,
		to: 'aKMAN <superangieman@gmail.com',
		subject: `New message from ${name} ${email}`,
	});
	console.log(message);
} catch (err) {
	console.error(err);
}

}
