import React from 'react'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <MobileNavbar/>
   <section className="bg-white">
  
  <div className="container px-6 py-16 mx-auto">
    <div className="max-w-5xl mx-auto">
   <div className="mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">POLITIQUE DE CONFIDENTIALITÉ</h1>
  <p className="mb-8">
    Chez Osphère, nous prenons la protection de vos données personnelles très au sérieux. Cette politique de confidentialité décrit les types de données que nous collectons ainsi que les moyens que nous utilisons pour les protéger.
  </p>
  <h2 className="text-xl font-semibold mb-4">Les données que nous collectons :</h2>
  <p className="mb-6">
    Les informations que vous nous fournissez volontairement, comme votre nom, votre adresse e-mail, votre numéro de téléphone et vos informations de compte lorsque vous vous inscrivez sur notre site ou que vous effectuez une transaction. Les informations de navigation, comme votre adresse IP, le type de navigateur que vous utilisez et les pages que vous visitez sur notre site.
  </p>
  <h2 className="text-xl font-semibold mb-4">Comment nous utilisons vos données :</h2>
  <p className="mb-6">
    Pour vous fournir les produits et services que vous avez demandés, comme la création de votre compte, la gestion de vos commandes et la communication avec vous. Pour améliorer notre site et nos produits en analysant les données de navigation et les informations de compte. Pour vous envoyer des courriers électroniques d’information ou de promotion, si vous avez choisi de recevoir ces communications.
  </p>
  <h2 className="text-xl font-semibold mb-4">Comment nous protégeons vos données :</h2>
  <p className="mb-6">
    Nous utilisons des mesures de sécurité techniques et administratives pour protéger vos données contre la perte, l’utilisation abusive, l’accès non autorisé, la divulgation, la modification et la destruction. Nous ne partageons pas vos données avec des tiers, sauf dans les cas où cela est nécessaire pour fournir les produits et services que vous avez demandés ou lorsque cela est requis par la loi.
  </p>
  <h2 className="text-xl font-semibold mb-4">Vos choix en matière de données :</h2>
  <p className="mb-6">
    Vous pouvez demander à accéder, corriger ou supprimer vos données personnelles en nous contactant à l’adresse email suivante : <a href="mailto:hello@osphere.be" className="text-blue-500">hello@osphere.be</a>. Vous pouvez également choisir de ne plus recevoir de courriers électroniques d’information ou de promotion en cliquant sur le lien de désabonnement inclus dans ces courriers électroniques.
  </p>
  <p className="mb-8">
    Cette politique de confidentialité peut être modifiée de temps à autre. Nous vous encourageons à consulter régulièrement cette page pour vous tenir informé de tout changement apporté.
  </p>
  <p>
    Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n’hésitez pas à nous contacter à <a href="mailto:hello@osphere.be" className="text-blue-500">hello@osphere.be</a>.
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