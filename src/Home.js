import React from 'react';
import './Home.css';
import companyLogo from './logo-principal.svg';
import img1 from './img1.jpg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';
import img4 from './img-4.png';
import Navlogo from './logo1.png';
import premio1 from './premio1.png';
import premio2 from './premio2016.png';
import premio3 from './premio2017.jpg';
import premio4 from './premio2018.png';
import premio5 from './premio2019.jpg';
import premio6 from './premioultimo.jpg';
import { useRef } from 'react';

function Home() {
  const executeScroll = () => scrollToRef(myRef);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRef = useRef();

  return (
    <div>
      <div className="header">
        <img src={Navlogo} alt="" className="nav-logo" />
        <nav>
          <ul className="nav-items">
            <button className="w3-btn w3-round-xxlarge" onClick={executeScroll}>
              Services{' '}
            </button>
            <button className="w3-btn w3-round-xxlarge">Galery</button>
            <button className="w3-btn w3-round-xxlarge">Find us</button>
          </ul>
        </nav>
      </div>
      <div>
        <div className="green-background">
          <svg width="700" height="1000">
            <rect width="700" height="1000" />
          </svg>
          <img src={companyLogo} alt="" className="logo-background" />
          <p className="text-properties">
            “CS Flowers Design is composed by a new and dynamic team witch main
            goal is centered in turning your dreams becoming real. Creating
            emotions in every moment. Focused on floral art, we work in general
            decoration, fiancee bouquets and weeding accessories".
          </p>
          {/* !!!!!!!!!!!CORRIGIR ESTE INGLES MANHOSO!!!!!!!!! */}

          {/* A CS Flowers Design é composta por uma equipa jovem e dinâmica, cujo objectivo está centrado em TORNAR OS VOSSOS SONHOS REAIS...criando emoções em todos os momentos.
          Colocamos em todos os nossos trabalhos, amor e dedicação, para que o resultado seja simplesmente fantástico.
      Possuímos formação em arte floral, nomeadamente: Decoração em Geral, Ramos de Noivas, Assessoria em Casamentos.”</p> */}
        </div>
      </div>
      {/* <div className="items-container"> */}
      {/* <ul className="items-row"> */}
      {/* <li className="fb-item"><i className="fa fa-facebook"></i></li>
          <li className="ig-item"><i className="fa fa-instagram"></i></li>
          <li className="ph-item"><i className="fa fa-phone"></i></li> */}
      {/* <li><img src={premio1} alt='' className="premio-1" /></li>
          <li><img src={premio2} alt='' className="premio-1" /></li>
          <li><img src={premio3} alt='' className="premio-1" /></li>
          <li><img src={premio4} alt='' className="premio-1" /></li>
          <li><img src={premio5} alt='' className="premio-1" /></li>
          <li><img src={premio6} alt='' className="premio-1" /></li>
        </ul> */}
      {/* </div> */}
      <div className="services" ref={myRef}>
        <div className="section-1">
          <div className="section-1-text">
            <h4>WE GET YOUR BACK, ALWAYS FOCUSED ON YOUR DREAMS.</h4>
            {/* ACOMPANHAMO-LO, SEMPRE FOCADO NOS SEUS SONHOS */}
            <p>
              {' '}
              During all the process with us, you'll have all the support, in
              every stage of your experience with our team.
            </p>
            {/* <p>Durante todo o seu percurso conosco, terá todo o acompanhamento em todas as fases da sua experiência</p> */}
          </div>
          <div className="section-1-img">
            <img src={img1} className="img-left img-mobile-1" />
          </div>
        </div>

        <div className="section-2">
          <div className="section-2-text">
            <h4>
              WE HELP YOU OUT, TROUGHT A SPECIALIZED PLANNING TO YOUR WEDDING.
            </h4>
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
          <div className="section-2-img">
            <img src={img2} className="img-right" alt="" />
          </div>
        </div>

        <div>
          <div className="section-3-text">
            <h4>WE GO ALONG WITH YOU, ALWAYS FOCUSED ON YOUR DREAMS.</h4>
            <p>
              WE CREATE YOUR GIFT, SPECIALY DEVELOPED TO THE OCCASION, IN ALL
              OCASIONS.
            </p>
          </div>
          <div className="section-3-img">
            <img src={img3} className="img-left" alt="" />
          </div>
        </div>

        <div>
          <div className="section-3-text">
            <h4>DONT LET YOUR LOVED ONES WAITING!.</h4>
            {/* <h4>NÃO DEIXE DE SURPREENDER QUEM AMA POR FALTA DE TEMPO.</h4> */}
            <p>
              Want to surprise someone that you love but dont have time? Dont
              worry! Our team takes care of everything. We idialize, create and
              even personalize a message. Then? We deliver wherever you want. *
              (consult prizes).
            </p>
          </div>
          {/* <p>Quer surpreender alguem que ama mas não tem tempo? não se preocupe! A nossa equipa trata de tudo.
              Idealizamos, criamos e até personalizamos a sua mensagem. Depois? Entregamos na morada que desejar! * (preço consoante (varia) a localização</p> */}
          <div className="section-4-img"></div>
          <img src={img4} alt="" className="img-right" />
        </div>
      </div>

      <svg width="fill" height="450" className="footer">
        <rect width="10000" height="700" style={{ fill: '#343434' }} />
      </svg>
    </div>
  );
}

export default Home;
