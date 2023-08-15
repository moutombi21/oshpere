import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'

const page = () => {
  return (
    <>
           <Navbar/>
    <MobileNavbar/>
   <section className="bg-white">
  
  <div className="container px-6 py-16 mx-auto">
    <div className="max-w-5xl mx-auto">
   <div className="mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">MENTIONS LÉGALES</h1>
  <p className="mb-6">
    Les informations contenues dans ce site sont fournies à titre informatif uniquement et ne doivent pas être considérées comme un conseil juridique, fiscal, comptable ou de quelque autre nature.
  </p>
  <p className="mb-6">
    Bien que nous nous efforcions de garantir l&lsquo;exactitude des informations contenues sur ce site, nous ne pouvons pas garantir qu&lsquo;elles sont à jour, exemptes d&lsquo;erreurs ou d&lsquo;omissions.
  </p>
  <p className="mb-6">
    Le contenu de ce site est protégé par les lois sur le droit d&lsquo;auteur et ne peut être reproduit ou utilisé à des fins commerciales sans notre autorisation écrite préalable.
  </p>
  <p className="mb-6">
    Les liens vers d&lsquo;autres sites sont fournis uniquement à titre de commodité et ne signifient pas que nous approuvons le contenu de ces sites. Nous déclinons toute responsabilité quant au contenu de ces sites et n&lsquo;assumons aucune responsabilité pour les dommages ou pertes résultant de leur utilisation.
  </p>
  <p className="mb-6">
    Toutes les informations soumises sur ce site seront traitées conformément à notre politique de confidentialité.
  </p>
  <p>
    Les termes et conditions de ce site sont régis et interprétés conformément aux lois de la Belgique, et toute réclamation ou action découlant de ou liée à ce site doit être soumise à la juridiction exclusive des tribunaux belges.
  </p>
</div>

   </div>
   </div>
   </section>
   <Footer/>
    </>
  )
}

export default page