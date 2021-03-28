import React from 'react';
import './Home.css';
import companyLogo from './logo-principal.svg';
import img1 from './img1.jpg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';
import img4 from './img-4.png';
import Navlogo from './logo1.png';
// import premio1 from './premio1.png';
// import premio2 from './premio2016.png';
// import premio3 from './premio2017.jpg';
// import premio4 from './premio2018.png';
// import premio5 from './premio2019.jpg';
// import premio6 from './premioultimo.jpg';
import { Link } from "react-router-dom";




function Home() {

    function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
      function handleScrollTwo() {
    window.scroll({
      top: 900,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <header>
        <img src={Navlogo} alt="" className="nav-logo" />
      </header>
      <div className="hero">
        <div className="hero-1"></div>
        <div className="hero-2">
          <nav>
            <ul>
              <li>
                <button onClick={handleScrollTwo}>Services</button>
              </li>
              <li>
                < Link to="./gallery"><button>
                  Gallery
                  </button>
                  </ Link>
              </li>
              <li>
                <button onClick={handleScroll}>Find us</button>
              </li>
            </ul>
          </nav>

          <img src={companyLogo} alt="Company Logo" />

          <p>
            {/* !!!!!!!!!!!CORRIGIR ESTE INGLES MANHOSO!!!!!!!!! */}
            “CS Flowers Design is composed by a new and dynamic team witch main
            goal is centered in turning your dreams come true. Focused on floral art, our work is focused on general
            decoration, fiancee bouquets and weeding accessories. We strive to create emotions in every moment!".
          </p>
          {/* A CS Flowers Design é composta por uma equipa jovem e dinâmica, cujo objectivo está centrado em TORNAR OS VOSSOS SONHOS REAIS...criando emoções em todos os momentos.
            Colocamos em todos os nossos trabalhos, amor e dedicação, para que o resultado seja simplesmente fantástico.
            Possuímos formação em arte floral, nomeadamente: Decoração em Geral, Ramos de Noivas, Assessoria em Casamentos.”</p> */}
        </div>
        <div className="hero-3"></div>
      </div>

      <div className="services" >
        <div>
          <div className="service-text">
            <div>WE GET YOUR BACK, ALWAYS FOCUSED ON YOUR DREAMS.</div>
            {/* ACOMPANHAMO-LO, SEMPRE FOCADO NOS SEUS SONHOS */}
            <p>
              {' '}
              During all the process with us, you'll have all the support, in
              every stage of your experience with our team.
            </p>
            {/* <p>Durante todo o seu percurso conosco, terá todo o acompanhamento em todas as fases da sua experiência</p> */}
          </div>
          <div className="service-img">
            <img src={img1} alt="" />
          </div>
        </div>

        <div>
          <div className="service-text">
            <div>
              WE HELP YOU OUT TROUGHT A SPECIALIZED PLANNING FOR YOUR WEDDING.
            </div>
            {/* <h4>AJUDAMOS A REALIZA-LOS, ATRAVÉS DE UM PLANEAMENTO ESPECIALIZADO PARA O SEU CASAMENTO.</h4> */}
            <p>
              From the bouquet selection to your dream wedding party
              organization, CS Flowers takes care of everything to meet your expectations.
            </p>

          </div>
          <div className="service-img">
            <img src={img2} alt="" />
          </div>
        </div>

        <div>
          <div className="service-text">
            <div>WE GO ALONG WITH YOU, ALWAYS FOCUSED ON YOUR DREAMS.</div>
            <p>
              WE CREATE YOUR GIFT, SPECIALY DEVELOPED TO THE OCCASION, IN ALL
              OCASIONS.
            </p>
          </div>
          <div className="service-img">
            <img src={img3} alt="" />
          </div>
        </div>

        <div>
          <div className="service-text">
            <div>DONT LET YOUR LOVED ONES WAITING!.</div>
            {/* <h4>NÃO DEIXE DE SURPREENDER QUEM AMA POR FALTA DE TEMPO.</h4> */}
            <p>
              Want to surprise someone that you love but dont have time? Dont
              worry! Our team takes care of everything. We idialize, create and
              write down your message. Then? We deliver wherever you want. *
              (consult prizes at store).
            </p>
            {/* <p>Quer surpreender alguem que ama mas não tem tempo? não se preocupe! A nossa equipa trata de tudo.
              Idealizamos, criamos e até personalizamos a sua mensagem. Depois? Entregamos na morada que desejar! * (preço consoante (varia) a localização</p> */}
          </div>
          <div className="service-img">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
