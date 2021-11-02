import { useEffect } from "react";
import { Home } from "../components/Home/home";
import { Container } from "../styles/pages/Home";
import { Header } from "../components/Header/header";
import { About } from "../components/About/about";
import { ListServices } from "./../components/ListServices/listservices";
import { Contacts } from "../components/Contacts/contacts";
import { Footer } from "../components/Footer/footer";
import Aos from "aos";

import "aos/dist/aos.css";
import { i18n } from "../translate/i18n";

export interface Option {
  id: number;
  name: string;
}
interface Service {
  id: string;
  image: string;
  message: string;
  title: string;
}

export interface resultApi {
  nameCompany: string;
  slogan: string;
  logo: string;
  aboutRender: string;
  services: Service[];
  endereco: string;
  email: string;
  numero: string;
  api: string;
}

export default function Principal() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  const optionsHeader: Option[] = [
    { id: 1, name: i18n.t("titles.home") },
    { id: 2, name: i18n.t("titles.about") },
    { id: 3, name: i18n.t("titles.services") },
    { id: 4, name: i18n.t("titles.contacts") },
  ];

  const aboutRender = `<p><audio class="audio-for-speech"></audio></p>
  <div class="translate-tooltip-mtz hidden_translate" style="left: 0px; top: 767px;">
  <div class="header">
  <div class="header-controls">&nbsp;</div>
  <div class="translate-icons"><img class="from" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/flags/pt@2x.png" /> <img class="arrow" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/right-arrow.png" /> <img class="to" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/flags/pt@2x.png" /></div>
  </div>
  <div class="translated-text">
  <div id="words" class="words" style="height: 0px; padding: 0px;"></div>
  <div class="sentences">&nbsp;</div>
  </div>
  <div class="trans_controls">
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
   <span class="trans_controls__description"> Fast translate </span></div>
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
   <span class="trans_controls__description"> Icon translate </span></div>
  </div>
  </div>
  <p>&nbsp;</p>
  <p><audio class="audio-for-speech"></audio></p>
  <div class="translate-tooltip-mtz hidden_translate">
  <div class="header">
  <div class="header-controls">&nbsp;</div>
  <div class="translate-icons"><img class="from" /> <img class="arrow" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/right-arrow.png" /> <img class="to" /></div>
  </div>
  <div class="translated-text">
  <div id="words" class="words" style="height: 0px; padding: 0px;"></div>
  <div class="sentences">&nbsp;</div>
  </div>
  <div class="trans_controls">
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Fast translate </span></div>
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Icon translate </span></div>
  </div>
  </div>
  <p>&nbsp;</p>
  <p><audio class="audio-for-speech"></audio></p>
  <div class="translate-tooltip-mtz hidden_translate">
  <div class="header">
  <div class="header-controls">&nbsp;</div>
  <div class="translate-icons"><img class="from" /> <img class="arrow" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/right-arrow.png" /> <img class="to" /></div>
  </div>
  <div class="translated-text">
  <div id="words" class="words" style="height: 0px; padding: 0px;"></div>
  <div class="sentences">&nbsp;</div>
  </div>
  <div class="trans_controls">
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Fast translate </span></div>
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Icon translate </span></div>
  </div>
  </div>
  <p>&nbsp;</p>
  <p><audio class="audio-for-speech"></audio></p>
  <div class="translate-tooltip-mtz hidden_translate">
  <div class="header">
  <div class="header-controls">&nbsp;</div>
  <div class="translate-icons"><img class="from" /> <img class="arrow" src="chrome-extension://ibppednjgooiepmkgdcoppnmbhmieefh/images/right-arrow.png" /> <img class="to" /></div>
  </div>
  <div class="translated-text">
  <div id="words" class="words" style="height: 0px; padding: 0px;"></div>
  <div class="sentences">&nbsp;</div>
  </div>
  <div class="trans_controls">
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Fast translate </span></div>
  <div class="trans_controls__control-wrapper">
  <div class="trans_controls__inner-circle">&nbsp;</div>
  <span class="trans_controls__description"> Icon translate </span></div>
  </div>
  </div>
  <p><span style="font-size: 12pt; font-family: verdana, geneva, sans-serif;"><img style="font-family: sans-serif; font-size: medium; display: block; margin-left: auto; margin-right: auto;" src="http://etm.ltda/media/images/1627060002.png" alt="" /></span></p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p style="text-align: justify;"><span style="font-size: 12pt; font-family: verdana, geneva, sans-serif;">&nbsp; &nbsp; &nbsp;Desde 1994 no mercado offshore a HIGHBRAS se destaca na presta&ccedil;&atilde;o de servi&ccedil;os de manuten&ccedil;&atilde;o/inspe&ccedil;&atilde;o de equipamentos em atendimento a embarca&ccedil;&otilde;es e plataformas. Ministra treinamentos em Movimenta&ccedil;&atilde;o de Cargas, Opera&ccedil;&atilde;o de Guindastes Onshore e Offshore, Operador de Ponte Rolante, Operador de Empilhadeira, Inspe&ccedil;&atilde;o e Manuten&ccedil;&atilde;o em Guindastes, Manuten&ccedil;&atilde;o em Turcos de Baleeira e Inspe&ccedil;&atilde;o Eletromagn&eacute;tica em Cabos de A&ccedil;o.A HIGHBRAS disponibiliza Consultoria T&eacute;cnica/Normativa para Equipamentos e Acess&oacute;rios de I&ccedil;amento de Cargas.A fim de atender os novos desafios do mercado Petrol&iacute;fero Brasileiro, a partir de 2012, a HIGHBRAS implementou Sistema de Ensino Pr&oacute;prio baseado nas necessidades e defici&ecirc;ncias da M&atilde;o de Obra local, a fim de qualificar e otimizar a performance de Operadores e T&eacute;cnicos da Ind&uacute;stria em geral.Os treinamentos s&atilde;o ministrados In Company com aulas pr&aacute;ticas e te&oacute;ricas ou em audit&oacute;rios com material &aacute;udio/visual.HIGHBRAS, qualificando profissionais para os desafios do Brasil.</span></p>
  <p style="text-align: justify;">&nbsp;</p>
  <p style="text-align: justify;">&nbsp;</p>
  <table style="border-collapse: collapse; width: 100%;" border="0">
  <tbody>
  <tr>
  <td style="width: 33.0049%;">
  <p style="text-align: center;"><span style="color: #169179;"><strong><span style="font-family: verdana, geneva, sans-serif;">MISS&Atilde;O</span></strong></span></p>
  <p><span style="font-family: verdana, geneva, sans-serif;">Treinar Profissionais e executar atividades com excel&ecirc;ncia e seguran&ccedil;a.</span></p>
  </td>
  <td style="width: 33.0049%;">
  <p style="text-align: center;"><span style="color: #169179;"><strong><span style="font-family: verdana, geneva, sans-serif;">VIS&Atilde;O</span></strong></span></p>
  <p><span style="font-family: verdana, geneva, sans-serif;">Ser refer&ecirc;ncia em Capacita&ccedil;&atilde;o Profissional e Servi&ccedil;os para ind&uacute;stria de &Oacute;leo e G&aacute;s.</span></p>
  </td>
  <td style="width: 33.0049%;">
  <p style="text-align: center;"><span style="color: #169179;"><strong><span style="font-family: verdana, geneva, sans-serif;">VALORES</span></strong></span></p>
  <p><span style="font-family: verdana, geneva, sans-serif;">&Eacute;tica, Respeito, Dignidade, Coopera&ccedil;&atilde;o e Profissionalismo.</span></p>
  </td>
  </tr>
  </tbody>
  </table>`;

  const result: resultApi = {
    nameCompany: "Red Flag",
    slogan: "Solução para seus problemas",
    logo: "https://www.redflag.com.br/images/logo-wide@2x.png",
    aboutRender: aboutRender,
    services: [
      {
        id: "1",
        image:
          "https://labprototipando.com.br/wp-content/uploads/2020/05/mulmimetro_teste_tutorial_bateria.jpg",
        message:
          "esde 1994 no mercado offshore a HIGHBRAS se destaca na prestação de serviços de manutenção/inspeção de equipamentos em atendimento a embarcações e plataformas. ",
        title:
          "Serviço de manutenção de tratores intereistelares sem função de retorno",
      },
      {
        id: "2",
        image:
          "https://i.pinimg.com/originals/b3/45/e4/b345e46becdaeaaa9dcf6ea6144c91a9.jpg",
        message: "lorem ipsum dolor sit amet, consectetur adip",
        title: "Serviço 2",
      },
      {
        id: "3",
        image:
          "https://labprototipando.com.br/wp-content/uploads/2020/05/mulmimetro_teste_tutorial_bateria.jpg",
        message: `<p><span style="font-family: verdana, geneva, sans-serif;">A Highbras possui equipamentos para realizar Inspe&ccedil;&atilde;o eletromagn&eacute;tica em cabos de a&ccedil;o ferromagn&eacute;ticos em diversos tipos de equipamentos, tais como: guindastes, pontes rolantes, guinchos, elevadores de carga, telef&eacute;ricos. Atendendo os requisitos das normas: ABNT NBR ISO 4309, ABNT NBR 16073, ASTM E 1571, API RP 2I.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A inspe&ccedil;&atilde;o eletromagn&eacute;tica possibilita definir a integridade interna e externa dos cabos de a&ccedil;o inspecionados, gerando confian&ccedil;a e seguran&ccedil;a em sua utiliza&ccedil;&atilde;o.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A partir desta inspe&ccedil;&atilde;o &eacute; poss&iacute;vel manter um hist&oacute;rico de acompanhamento de descontinuidades encontradas, possibilitando garantir a rastreabilidade nas pr&oacute;ximas inspe&ccedil;&otilde;es.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">Essa condi&ccedil;&atilde;o elimina substitui&ccedil;&otilde;es prematuras, reduzindo custos e garantindo a seguran&ccedil;a.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p>&nbsp;</p>`,
        title: "Serviço 2",
      },
      {
        id: "4",
        image:
          "https://labprototipando.com.br/wp-content/uploads/2020/05/mulmimetro_teste_tutorial_bateria.jpg",
        message: `<p><span style="font-family: verdana, geneva, sans-serif;">A Highbras possui equipamentos para realizar Inspe&ccedil;&atilde;o eletromagn&eacute;tica em cabos de a&ccedil;o ferromagn&eacute;ticos em diversos tipos de equipamentos, tais como: guindastes, pontes rolantes, guinchos, elevadores de carga, telef&eacute;ricos. Atendendo os requisitos das normas: ABNT NBR ISO 4309, ABNT NBR 16073, ASTM E 1571, API RP 2I.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A inspe&ccedil;&atilde;o eletromagn&eacute;tica possibilita definir a integridade interna e externa dos cabos de a&ccedil;o inspecionados, gerando confian&ccedil;a e seguran&ccedil;a em sua utiliza&ccedil;&atilde;o.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A partir desta inspe&ccedil;&atilde;o &eacute; poss&iacute;vel manter um hist&oacute;rico de acompanhamento de descontinuidades encontradas, possibilitando garantir a rastreabilidade nas pr&oacute;ximas inspe&ccedil;&otilde;es.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">Essa condi&ccedil;&atilde;o elimina substitui&ccedil;&otilde;es prematuras, reduzindo custos e garantindo a seguran&ccedil;a.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p>&nbsp;</p>`,
        title: "Serviço 2",
      },
      {
        id: "5",
        image:
          "https://labprototipando.com.br/wp-content/uploads/2020/05/mulmimetro_teste_tutorial_bateria.jpg",
        message: `<p><span style="font-family: verdana, geneva, sans-serif;">A Highbras possui equipamentos para realizar Inspe&ccedil;&atilde;o eletromagn&eacute;tica em cabos de a&ccedil;o ferromagn&eacute;ticos em diversos tipos de equipamentos, tais como: guindastes, pontes rolantes, guinchos, elevadores de carga, telef&eacute;ricos. Atendendo os requisitos das normas: ABNT NBR ISO 4309, ABNT NBR 16073, ASTM E 1571, API RP 2I.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A inspe&ccedil;&atilde;o eletromagn&eacute;tica possibilita definir a integridade interna e externa dos cabos de a&ccedil;o inspecionados, gerando confian&ccedil;a e seguran&ccedil;a em sua utiliza&ccedil;&atilde;o.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">A partir desta inspe&ccedil;&atilde;o &eacute; poss&iacute;vel manter um hist&oacute;rico de acompanhamento de descontinuidades encontradas, possibilitando garantir a rastreabilidade nas pr&oacute;ximas inspe&ccedil;&otilde;es.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">Essa condi&ccedil;&atilde;o elimina substitui&ccedil;&otilde;es prematuras, reduzindo custos e garantindo a seguran&ccedil;a.</span></p>
        <p><span style="font-family: verdana, geneva, sans-serif;">&nbsp;</span></p>
        <p>&nbsp;</p>`,
        title: "Serviço 2",
      },
    ],
    endereco: "Rua Quintino Bocaiuva 88502190",
    email: "contanto@etm.srv.br",
    numero: "22 998474022",
    api: "",
  };

  return (
    <Container>
      <Header logo={result.logo} options={optionsHeader} />
      <Home nameCompany={result.nameCompany} slogan={result.slogan} />
      <About
        data-aos="fade-up"
        nameComponent={i18n.t("titles.about")}
        aboutRender={result.aboutRender}
      ></About>
      <ListServices
        data-aos="fade-up"
        services={result.services}
        nameComponent={ i18n.t("titles.services")}
      />
      <Contacts
        data-aos="fade-up"
        number={result.numero}
        email={result.email}
        endereco={result.endereco}
        nameComponent={i18n.t("titles.contacts")}
      ></Contacts>
      <Footer></Footer>
    </Container>
  );
}
