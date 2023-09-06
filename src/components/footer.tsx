// import React from 'react';
import '../styles/footer.scss'
// import Item from '../models/items'
// import TODOS from '../models/items-data';
import { useState } from 'react';
// import icon from '../assets/icons/icon.png';
import fb from "../assets/icons/fb.png";
import inst from "../assets/icons/inst.png";
import twit from "../assets/icons/twit.png";

// type items = {
//     todos:Item[];
// }

function Footer() {
  
// const [items]=useState<Item[]>(TODOS);

  return (
    <div className='footer'>
      <div className='news-letters'>
        <div className='mission'>
          <h3>Mission de CHWID</h3>
          <p>La mission générale est d’améliorer la qualité de vie et l’avenir des enfants, des femmes et autres personnes vulnérables. Présent au Canada, en France, en Afrique, en Europe et dans le reste du monde</p>
        </div>

        <div className='domain'>
          <h3>Nos domaines d'intervention</h3>
          <p>-Environment Energie Renouvelable</p>
          <p>-La formation andragogique</p>
          <p>-Santé, Prévention et Information</p>
          <p>-Développement, Entreprenariat</p>
          <p>-Parrainage des enfants</p>
          <p>-Education</p>
          <p>-Formation et les Nouvelles Technologies de l’information et de Communication</p>
          <p>-Aménagement et reconstruction</p>
          <p>-Sécurité alimentaire</p>
          <p>-Assistance Humanitaire</p>
          <p>-Protection</p>
        </div>
     
        <div className='mailing'>
            <h4>Restez informer de chwid</h4>
            <p>En nous soumettant votre adresse mail, Merci </p>
            <div className='control'>
                <label htmlFor="">Votre adresse mail</label>
                <input 
                  type="email" 
                  name="" 
                  id="" 
                  placeholder='Email'
                />
                <div className='checkbox'>
                    <input 
                    type="checkbox" 
                    />
                    <p>Je désire recevoir plus de mails de votre part</p>
                </div>
               
                <button>Soumettre</button>

                <span> 
                  Contactez CHWID dès aujourd'hui ! 
                  <br />
                  contact@chwid.org
                </span>
            </div>
        </div>
      </div>

      <div className='foot'>
        {/* <img src={icon} alt="icon" /> */}
        <div className='links'>
            <img src={fb} alt="fg" />
            <img src={inst} alt="inst" />
            <img src={twit} alt="twit" />
        </div>
        <p>CHWID ORG © 2023 | <a href="https://mail12.lwspanel.com/rainloop/">ACCÉDER A NOTRE WEBMAIL</a></p>
        
      </div>
    </div>
  );
}

export default Footer;
