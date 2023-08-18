"use client"
import React from 'react'

const faq = [
    {
        id:1,
        Question:'Consultations',
        Ans:`En tant qu’experts en marketing, nous comprenons que chaque client a des besoins uniques. Nous offrons des consultations personnalisées pour discuter des objectifs, des défis et des aspirations de nos clients. Cette étape initiale nous permet de concevoir des stratégies sur mesure qui répondent précisément à leurs besoins. Nous sommes là pour guider nos clients à chaque étape de leur parcours marketing.`,
        active:true
    },
    {
        id:2,
        Question:'Recherche et développement stratégique',
        Ans:`Le paysage du marketing numérique est en constante évolution. Notre équipe reste à la pointe des dernières tendances, technologies et pratiques exemplaires. Nous investissons dans la recherche et le développement pour anticiper les nouvelles opportunités et offrir à nos clients des stratégies innovantes. Cette approche proactive garantit que nos campagnes restent compétitives et pertinentes.`,
        active:false
    },
    {
        id:3,
        Question:'Mise en œuvre',
        Ans:`Une stratégie solide ne peut être efficace que si elle est correctement mise en œuvre. Notre équipe expérimentée assure la mise en place fluide et précise de chaque aspect de la campagne, des publicités aux canaux de marketing choisis. Nous nous assurons que chaque détail est pris en compte, de la conception créative à la planification du calendrier, pour garantir une exécution sans faille.`,
        active:false
    },
    {
      id:4,
      Question:'Suivi et optimisation',
      Ans:`Nous accordons une grande importance au suivi rigoureux des performances de chaque campagne. Grâce à une analyse approfondie des données, nous identifions les opportunités d’optimisation. Que ce soit en ajustant les paramètres des publicités, en affinant les audiences cibles ou en adaptant les messages, notre objectif est de garantir que chaque euro investi génère le meilleur retour sur investissement possible.`,
      active:false
  },
  {
    id:5,
    Question:'Rapport et communication',
    Ans:`La transparence et la communication sont essentielles pour nous. Nous fournissons régulièrement des rapports détaillés à nos clients, mettant en évidence les performances, les tendances et les réalisations de leurs campagnes. Notre équipe est toujours disponible pour discuter des résultats, répondre aux questions et ajuster la stratégie en fonction des commentaires et des besoins de nos clients.`,
    active:false
},
{
  id:6,
  Question:'Amélioration continue',
  Ans:`Notre approche repose sur le principe de l’amélioration continue. Nous restons constamment à l’écoute des besoins de nos clients et surveillons de près les performances de nos campagnes. En analysant les données en temps réel, nous identifions les domaines qui nécessitent des ajustements et des améliorations. Cette approche proactive nous permet de maximiser les résultats tout en restant flexibles et adaptatifs aux évolutions du marché.`,
  active:false
},
]

const Faqs = () => {
    const [items,setItems] = React.useState(faq)

    const Toggle = (id)=>{
        setItems((item)=>item.map((i)=>(
            i.id==id ? {...i, active:!i.active} : i
        )))
    }

  return (
    <section id='faqs' className="bg-white">
  <div className="container px-6 lg:w-[80%] md:w-[90%] w-[98%] py-16 mx-auto">
  <div className='flex md:flex-row flex-col item-center gap-10'>
    <div className='flex md:block justify-center'>

    <h1 className="text-xl text-center md:text-left block md:block font-semibold text-gray-800 bg-[#C797FF] px-2 py-1 rounded-lg capitalize lg:text-xl ">Notre méthodologie</h1>
    </div>
    <p className="text-black text-sm text-center md:text-left max-w-xl">
    Un guide pas à pas pour atteindre vos objectifs 
    </p>
  </div>
    <div className="mt-8 space-y-8 lg:mt-12">
    {items.map((item,index)=>{
 return (
      <div key={item.Question} className={`p-8 ${item.active?'bg-[#C797FF]':'bg-[#F3F3F3]'} rounded-3xl shadow-[0px_2px_1px_1px_black]`} >
        <button onClick={()=>Toggle(item.id)} className="flex items-center justify-between w-full">
        <div className='flex gap-5 items-center'>

          <h3 className=' text-3xl font-extrabold'>0{item.id}</h3>
          <h1 className="font-semibold text-gray-700 text-left">{item.Question}</h1>
        </div>
          {item.active ? (
          <span className="text-gray-400 bg-gray-200 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 58 59" fill="none">
  <circle cx={29} cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
  <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
</svg>

          </span>
          ):(

          <span className="text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 58 59" fill="none">
  <circle cx={29} cy="29.5001" r="28.5" fill="#F3F3F3" stroke="#191A23" />
  <path d="M25.6 41.5801V31.8601H16V26.2201H25.6V16.5001H31.48V26.2201H41.08V31.8601H31.48V41.5801H25.6Z" fill="#191A23" />
</svg>

                    </span>
          )}
        </button>
        {item.active && (
        <p className="mt-6 text-sm text-black text-left">
          {item.Ans}
        </p>
        )}
      </div>
      )
    })}
     
    </div>
  </div>
</section>
  )
}

export default Faqs