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
import { useRef } from 'react';

function Home() {
  const executeScroll = () => scrollToRef(myRef);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRef = useRef();

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
                <button>Services</button>
              </li>
              <li>
                <button>Galery</button>
              </li>
              <li>
                <button>Find us</button>
              </li>
            </ul>
          </nav>

          <img src={companyLogo} alt="Company Logo" />

          <p>
            {/* !!!!!!!!!!!CORRIGIR ESTE INGLES MANHOSO!!!!!!!!! */}
            “CS Flowers Design is composed by a new and dynamic team witch main
            goal is centered in turning your dreams becoming real. Creating
            emotions in every moment. Focused on floral art, we work in general
            decoration, fiancee bouquets and weeding accessories".
          </p>
          {/* A CS Flowers Design é composta por uma equipa jovem e dinâmica, cujo objectivo está centrado em TORNAR OS VOSSOS SONHOS REAIS...criando emoções em todos os momentos.
            Colocamos em todos os nossos trabalhos, amor e dedicação, para que o resultado seja simplesmente fantástico.
            Possuímos formação em arte floral, nomeadamente: Decoração em Geral, Ramos de Noivas, Assessoria em Casamentos.”</p> */}
        </div>
        <div className="hero-3"></div>
      </div>

      <div className="services" ref={myRef}>
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
              WE HELP YOU OUT, TROUGHT A SPECIALIZED PLANNING TO YOUR WEDDING.
            </div>
            {/* <h4>AJUDAMOS A REALIZA-LOS, ATRAVÉS DE UM PLANEAMENTO ESPECIALIZADO PARA O SEU CASAMENTO.</h4> */}
            <p>
              From the bouquet selection to your dream wedding party
              organization, CS Flowers takes care of everything. Specialized in
              wedding planning, we take care of all the details.
            </p>
            <p>
              desde a escolha do seu boquet até à organização da sua festa de
              sonho, a cs flowers trata de tudo. especializados no planeamento
              de casamentos, tratamos de todos os pormenores.
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
              even personalize a message. Then? We deliver wherever you want. *
              (consult prizes).
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
