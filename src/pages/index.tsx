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

export interface Option {
  id: number;
  name: string;
}

export default function Principal() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const optionsHeader: Option[] = [
    { id: 1, name: "Home" },
    { id: 2, name: "Sobre" },
    { id: 3, name: "Serviços" },
    { id: 5, name: "Contatos" },
    { id: 4, name: "PT-BR" },
  ];

  const textAbout = `Desde 1994 no mercado offshore a HIGHBRAS se destaca na prestação de
  serviços de manutenção/inspeção de equipamentos em atendimento a
  embarcações e plataformas. Ministra treinamentos em Movimentação de
  Cargas, Operação de Guindastes Onshore e Offshore, Operador de Ponte
  Rolante, Operador de Empilhadeira, Inspeção e Manutenção em Guindastes,
  Manutenção em Turcos de Baleeira e Inspeção Eletromagnética em Cabos de
  Aço.A HIGHBRAS disponibiliza Consultoria Técnica/Normativa para
  Equipamentos e Acessórios de Içamento de Cargas.A fim de atender os
  novos desafios do mercado Petrolífero Brasileiro, a partir de 2012, a
  HIGHBRAS implementou Sistema de Ensino Próprio baseado nas necessidades
  e deficiências da Mão de Obra local, a fim de qualificar e otimizar a
  performance de Operadores e Técnicos da Indústria em geral.Os
  treinamentos são ministrados In Company com aulas práticas e teóricas ou
  em auditórios com material áudio/visual.HIGHBRAS, qualificando
  profissionais para os desafios do Brasil.`;

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

  //por validação por options do Header, exemplo: Se não retornar Sobre/About no Header Não renderizar o component About
  return (
    <Container>
      <Header options={optionsHeader} />
      <Home nameCompany={"RED FLAG"} slogan={"Soluções para seus problemas "} />

      <About
        data-aos="fade-up"
        nameComponent={"Sobre"}
        aboutRender={aboutRender}
      ></About>

      <ListServices data-aos="fade-up" nameComponent={"Serviços"} />
      <Contacts data-aos="fade-up" nameComponent={"Contato"}></Contacts>
      <Footer></Footer>
    </Container>
  );
}
