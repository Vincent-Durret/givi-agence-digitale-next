import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const itemsService = [
  {
    id: 1,
    title: 'Stratégie digitale',
    text: 'Ensemble, établissons une stratégie digitale pertinente pour optimiser votre ROI. Chaque canal a ses spécificités, identifions la meilleure approche pour votre secteur.',
  },
  {
    id: 2,
    title: 'Community management',
    text: 'Dans le paysage dynamique des médias sociaux, une gestion efficace de votre communauté est essentielle. Sur des plateformes comme Instagram, TikTok, et LinkedIn, notre équipe veillera à engager fidèlement vos audiences.',
  },
  {
    id: 3,
    title: 'Création de contenu',
    text: 'Le contenu visuel est souvent le premier point de contact avec votre audience. Nous nous assurons de produire du contenu de haute qualité, photo ou vidéo, pour établir une impression durable et positive auprès de vos prospects.',
  },
  {
    id: 4,
    title: 'Site web et application',
    text: "Votre présence en ligne est votre principal outil de communication. Nous concevons et optimisons des sites web et applications pour répondre aux besoins spécifiques de votre audience tout en mettant en avant l'essence de votre marque.",
  },
  {
    id: 5,
    title: 'Rédaction',
    text: "Les mots ont un pouvoir. Qu'il s'agisse d'emails, d'articles de blog ou de fiches produits, ajustons votre ton et contenu pour séduire et informer votre audience.",
  },
  {
    id: 6,
    title: 'Référencement naturel (SEO)',
    text: 'Augmentez la visibilité de votre site avec une stratégie SEO efficace. Définissons ensemble les mots-clés cibles, et laissez-nous optimiser votre contenu pour les moteurs de recherche.',
  },
];
const HomeOurServices = () => {
  return (
    <section className='my-12 h-auto max-w-[100%]'>
      <div className='flex items-center justify-center'>
        <h1 className='text-7xl font-bold'>Nos Services</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 p-[4rem]'>
        {itemsService.map((item) => (
          <div key={item.id} className='p-[20px] text-[2rem]'>
            <div>
              <div className=' mb-4  flex items-center '>
                <FontAwesomeIcon
                  className=' pr-4 text-[0.5rem] text-pink'
                  icon={faCircle}
                />
                <h3 className='text-[1.5rem]  font-bold text-pink'>
                  {item.title}
                </h3>
              </div>
              <p className='text-[1.3rem] font-[500]'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <Link
          href='#'
          className='rounded-[calc(4rem/4)] bg-dark-light px-4 py-2 text-4xl text-white transition duration-500 hover:bg-pink'
        >
          en savoir plus
        </Link>
      </div>
    </section>
  );
};

export default HomeOurServices;
