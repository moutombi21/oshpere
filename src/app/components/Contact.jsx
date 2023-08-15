"use client"
import Image from 'next/image'
import React,{useRef} from 'react'
import { useFormik} from 'formik'
import { validateYupSchema } from '../utlis/yupValidation'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const {values,handleSubmit,handleChange,handleBlur,errors,touched,isSubmitting}=useFormik({
    initialValues:{
      select:'',
      name:"",
      email:"",
      message:"",
    },
    validationSchema:validateYupSchema,
    validateOnChange:true,
    validateOnBlur:true,
    onSubmit:(values,action)=>{
      sendEmail()
      action.resetForm()
    }
  })
  const form = useRef();
   const sendEmail = () => {
    console.log(form.current)
    emailjs.sendForm('service_ute0sl4', 'template_d3ng2un', form.current, '1DS7HezvNVJC2N6hV')
      .then((result) => {
          if(result.text){
            window.location.href="/"
          }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' className="min-h-screen ">
  <div className="container flex flex-col mt-8 rounded-3xl px-6 py-8 mx-auto bg-[#F3F3F3]">
  <div className='flex flex-col md:flex-row item-center gap-10'>
  <div className='flex justify-center'>

<h1 className="text-xl font-semibold text-gray-800 bg-[#C797FF] px-2 py-1 rounded-lg capitalize lg:text-xl ">Contactez-nous</h1>
</div>
<p className="text-gray-500 text-sm max-w-xl text-center md:text-left">Connectez-vous avec nous : Discutons de vos besoins en matière de marketing numérique
</p>
</div>
    <div className="flex-1 lg:flex lg:item-center lg:-mx-6">
    <div className="mt-8 lg:w-1/2 lg:mx-6">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-xl lg:max-w-xl">
          <form ref={form} onSubmit={handleSubmit} className="mt-4">
            <div className='flex gap-5'>
  <div className="flex items-center mb-4">
    <input id="option1" type="radio" name="select" onChange={handleChange} value="Dites-bonjour" className="h-4 w-4 border-gray-300 focus:ring-2" checked={true} />
    <label htmlFor="option1" className="text-sm font-medium text-gray-900 ml-2 block">
    Dites bonjour
    </label>
  </div>
  <div className="flex items-center mb-4">
    <input id="option2" type="radio" name="select" onChange={handleChange} value="Obtenir-un-devis" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
    <label htmlFor="option2" className="text-sm font-medium text-gray-900 ml-2 block">
    Obtenir un devis gratuit
    </label>
  </div>
{errors.select && touched.select ? (
                      <p className="text-red-500 text-sm">{errors.select}</p>
                    ) : null}
</div>
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-600">Nom complet*</label>
              <input value={values.name} name='name' onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Nom" className={`block w-full px-5 py-3 mt-2 text-black ${errors.name && touched.name ?'bg-[#FF000033] bg-opacity-25':'bg-white'} border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`} />
              {errors.name && touched.name ? (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    ) : null}
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-600">Email address*</label>
              <input value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' type="email" placeholder="johndoe@example.com" className={`block w-full px-5 py-3 mt-2 text-black ${errors.email && touched.email ?'bg-[#FF000033] bg-opacity-25':'bg-white'} border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`} />
              {errors.email && touched.email ? (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    ) : null}
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-600">Message*</label>
              <textarea name='message' onChange={handleChange} onBlur={handleBlur} className={`block w-full h-32 px-5 py-3 mt-2 text-black placeholder-gray-400 ${errors.message && touched.message ?'bg-[#FF000033] bg-opacity-25':'bg-white'} border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`} placeholder="Message" value={values.message} />
              {errors.message && touched.message ? (
                      <p className="text-red-500 text-sm">Veuillez remplir le formulaire pour soumettre votre demande*</p>
                    ) : null}
            </div>
            <button type='submit' disabled={isSubmitting} className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
            Envoyer le message
            </button>
          </form>
        </div>
      </div>
      <div className="text-white lg:w-1/2 lg:flex justify-end items-center hidden">
      <Image 
      src="/v.png" 
      width="0"
      height="0"
      sizes="100vw"
      className="w-96 h-auto -mr-28 overflow-hidden"
      alt='side_image'
       />
      
      </div>
      
    </div>
  </div>
</section>

  )
}

export default Contact