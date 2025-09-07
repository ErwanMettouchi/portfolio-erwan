import emailjs from '@emailjs/browser';
import { Mail, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [isValidationCorrect, setIsValidationCorrect] = useState<
    boolean | null
  >(null);
  useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (formData: FormData) => {
    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsValidationCorrect(false);
      return;
    }

    setIsValidationCorrect(null);
    setIsSubmiting(true);
    try {
      await emailjs.sendForm(
        'service_5a9amz7',
        'template_jgc2osg',
        form.current,
        {
          publicKey: 'YaiIujxuXvB4LIyn2',
        },
      );
      alert('Email envoyé avec succès!');
      setIsSubmiting(false);
    } catch (e: unknown) {
      alert("Echec de l'envoi! ");
      console.log(e);
    }
  };

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <explanation>
    <div
      className="mt-40 flex flex-col items-center justify-center"
      id="contact"
    >
      <form
        ref={form}
        action={(formData) => {
          sendEmail(formData);
        }}
        className={`${isDarkMode ? 'bg-[#050a18dc] text-[#FFEDCF]' : 'bg-white text-black'} w-auto flex flex-col p-6 rounded-2xl shadow-md`}
      >
        <h3 className="text-center font-bold text-4xl">CONTACTEZ-MOI</h3>
        <p className="text-center text-lg mt-6 mb-6">
          N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
          délais.
        </p>
        <label htmlFor="name" className="mt-5">
          {' '}
          Nom *
        </label>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <input
          type="text"
          name="name"
          id="name"
          className={`${isDarkMode ? 'border-[#bbbbbb7a] focus:border-[#cacaca] placeholder-[#ffffffc0]' : 'border-[#0c0c0c7a] focus:border-[#000000] placeholder-[#1b1a1ac0]'} border-2 rounded-md outline-0 py-2 px-3`}
          placeholder="Votre nom"
          minLength={1}
          maxLength={40}
        />
        <label htmlFor="firstname" className="mt-8">
          Prénom
        </label>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <input
          type="text"
          name="firstname"
          id="firstname"
          className={`${isDarkMode ? 'border-[#bbbbbb7a] focus:border-[#cacaca] placeholder-[#ffffffc0]' : 'border-[#0c0c0c7a] focus:border-[#000000] placeholder-[#1b1a1ac0]'} border-2 rounded-md outline-0 py-2 px-3`}
          placeholder="Votre prénom"
        />
        <label htmlFor="email" className="mt-8">
          Email *
        </label>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <input
          type="text"
          name="email"
          id="email"
          className={`${isDarkMode ? 'border-[#bbbbbb7a] focus:border-[#cacaca] placeholder-[#ffffffc0]' : 'border-[#0c0c0c7a] focus:border-[#000000] placeholder-[#1b1a1ac0]'} border-2 rounded-md outline-0 py-2 px-3`}
          placeholder="Votre email"
        />
        <label htmlFor="message" className="mt-8">
          {' '}
          Message *
        </label>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <textarea
          name="message"
          id="message"
          className={`${isDarkMode ? 'border-[#bbbbbb7a] focus:border-[#cacaca] placeholder-[#ffffffc0]' : 'border-[#0c0c0c7a] focus:border-[#000000] placeholder-[#1b1a1ac0]'} border-2 rounded-md outline-0 py-2 px-3`}
          placeholder="Votre message"
          minLength={5}
        />
        <div className="flex sm:flex-row sm:justify-between items-center mt-8">
          <input
            type="submit"
            value={isSubmiting ? 'Envoi...' : 'Envoyer'}
            className={`px-6 py-2 cursor-pointer rounded-lg font-semibold ${isDarkMode ? 'bg-white text-[#060D1B] hover:bg-[#bdbcbc] hover:text-[#001338]' : 'bg-[#060D1B] text-white hover:bg-[#15274b]'} transition-all duration-200`}
          />
          {isValidationCorrect === false && (
            <p className="text-red-600">
              Veuillez remplir tous les champs obligatoires
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row mt-15">
          <Phone /> &nbsp; &nbsp; 06.25.00.62.44
        </div>
        <div className="flex flex-col md:flex-row mt-5">
          <Mail /> &nbsp; &nbsp; erwanmettouchi@gmail.com
        </div>
      </form>
    </div>
  );
};
export default Contact;
