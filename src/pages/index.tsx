import { useRef } from "react";
import { Home } from "../components/Home/home";
import { Container } from "../styles/pages/Home";
import { Header } from "../components/Header/header";
import { About, ResponseAbout } from "../components/About/about";
import { ListServices } from "./../components/ListServices/listservices";

export interface Option {
  id: number;
  name: string;
}

export default function Principal() {
  const optionsHeader: Option[] = [
    { id: 1, name: "Home" },
    { id: 2, name: "Sobre" },
    { id: 3, name: "Serviços" },
    { id: 5, name: "Contatos" },
    { id: 4, name: "PT-BR" },
  ];

  const homeRef = useRef(null) as React.RefObject<HTMLDivElement>;
  const servicesRef = useRef(null);

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

  const arrayResponseAbout: ResponseAbout[] = [
    {
      id: "1",
      title: "Missão",
      message: `Treinar Profissionais e executar atividades com excelência e segurança.`,
    },
    {
      id: "2",
      title: "Visão",
      message:
        "Treinar Profissionais e executar atividades com excelência e segurança.",
    },
    {
      id: "3",
      title: "Valores",
      message:
        "Treinar Profissionais e executar atividades com excelência e segurança.",
    },
  ];

  return (
    <Container>
      <Header options={optionsHeader} />
      <Home nameCompany={"RED FLAG"} slogan={"Soluções para seus problemas "} />
      <About
        nameComponent={"Sobre"}
        aboutText={textAbout}
        imgText={"http://etm.ltda/media/images/1627060002.png"}
        arrayResponse={arrayResponseAbout}
      ></About>
      <ListServices nameComponent={"Serviços"} />
    </Container>
  );
}
