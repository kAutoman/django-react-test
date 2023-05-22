import emailjs from '@emailjs/browser';

const API_KEY:any  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY


const sendEmail = async (templateParams:any) => 
{
    emailjs.init(API_KEY)
    var result = ''
    await emailjs.send('service_ydmyheu', 'template_biir24i', templateParams)
    .then( function(response:any) {
       console.log('SUCCESS!', response.status, response.text);
       result = 'Success';
    }, function(error:any) {
       console.log('FAILED...', error);
       result = 'Fail';
    });
    return result;
};

export default sendEmail;