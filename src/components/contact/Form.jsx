import {useState} from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import about from '../../assets/about0.jpg'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [inquires, setInquires] = useState('')

    const handlSubmit = (e) =>{
        e.preventDefault();

        if(!name || !email || !inquires){
            Swal.fire({
                icon: "error",
                title: "Erorr",
                text: "Failed to send message. Please try again",
            });

            return;
        }

        const serviceId = 'service_j4kvpqo';
        const templateId = 'template_5bzzkbr';
        const publicKey = 'JpPiRGUU0pI9GsfR0';

        const templateParam = {
            from_name: name,
            from_email: email,
            message: inquires
        } 

        emailjs.send(serviceId, templateId, templateParam, publicKey)
        .then((res) =>{
            console.log("Email send successully!:", res);
            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Your message has been sent successfully",
            });
            setName('');
            setEmail('');
            setInquires('');
        })
        .catch((error) =>{
            console.log("Error send email:", error);
        })
    }

  return (
    <div className='max-w-6xl mx-auto mb-16 px-4 md:px-10 mt-20 md:mt-30 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div>
        <h1 
         className='text-3xl md:text-4xl font-bold text-cyan-600 mb-4'
         data-aos="fade-up" data-aos-delay="100"
        >Contact Us</h1>
        <p className='text-justify' data-aos="fade-up" data-aos-delay="100">
            We are a leading freight forwarding company in Cambodia, 
            specializing in the import and export of various goods. 
            The company is well-trained and has become a renowned and 
            reputable logistics and transportation provider.
        </p>
        <p 
         className='lg:flex gap-10 mt-5 text-cyan-600 font-semibold'
         data-aos="fade-up" data-aos-delay="100"
        > 
            <a 
             href={`mailto:dl@pnh.dolphin-gp.com`}
             className='flex gap-2'
            >
                <MdOutlineMarkEmailUnread className='mt-1' /> kingkongavs@pnh.kingkong-gp.com
            </a>
            <p className='flex gap-2'>
                <FiPhoneCall className='mt-1'/> +855 67777444
            </p>
        </p> 

        <form 
            className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-6"
            onSubmit={handlSubmit}
        >
            <div className="relative">
                <input
                    type="text"
                    id="name"
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-cyan-600 focus:outline-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label
                    htmlFor="name"
                    className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-600"
                >
                    Name
                </label>
            </div>

            <div className="relative">
                <input
                    type="email"
                    id="eail"
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-cyan-600 focus:outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label
                    htmlFor="email"
                    className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-600"
                >
                    Your Email
                </label>
            </div>

            <div className="relative">
                <textarea
                    type="text"
                    id="inquires"
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-cyan-600 focus:outline-none"
                    placeholder="Inquires"
                    value={inquires}
                    onChange={(e) => setInquires(e.target.value)}
                />
            </div>

            {/* Button */}
            <button 
                className="w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700 transition cursor-pointer"
                type='submit'
            >
                Submit
            </button>
        </form>  
      </div>
      <div 
       className='flex justify-end items-end'
       data-aos="fade-left" data-aos-delay="100"
      >
        <img src={about} alt="Image loading" className='w-full lg:w-100 rounded-lg'/>
      </div>
    </div>
  )
}

export default Form
