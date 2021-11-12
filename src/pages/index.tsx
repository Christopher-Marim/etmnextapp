import { useEffect } from "react";
import { Home } from "../components/Home/home";
import  styles  from "../styles/pages/Home.module.scss";
import { Header } from "../components/Header/header";
import { About } from "../components/About/about";
import { ListServices } from "./../components/ListServices/listservices";
import { Contacts } from "../components/Contacts/contacts";
import { Footer } from "../components/Footer/footer";
import { useRouter } from "next/router";
import Aos from "aos";

import "aos/dist/aos.css";
import { i18n } from "../translate/i18n";
import api from "../service/api";
import { GetStaticProps } from "next";

export interface Option {
  id: number;
  name: string;
}
interface Service {
  id: string;
  title: string;
  image: string;
  message: string;
}

export interface resultMaybe {
  api: string;
  logo: string;
  email: string;
  slogan: string;
  numero: string;
  endereco: string;
  nameCompany: string;
  aboutRender: string;
  imagemPrincipal: string;
  subTitleContacts: string;
  subTitleServices: string;
  coresSecundarias: string;
}
interface resultApi {
  id: string;
  name: string;
  cnpj: string;
  domain: string;
  contato: string;
  email: string;
  phone: string;
  maps: string;
  address: string;
  district: string;
  zipcode: string;
  city: string;
  state: string;
  status: string;
  registration_date: string;
  expiration_date: string;
}
export interface resultLanguages {
  id: string;
  company_id: string;
  language_id: string;
  status: string;
  abreviation: string;
}

interface resultPage {
  id: string;
  slug: string;
  body: string;
  title: string;
  titlePage: string;
  clientTitle: string;
  more: string;
  about: string;
  aboutContent: string;
  theme: string;
  contactTitle: string;
}
interface resultImages {
  logo: string;
  banner: string;
}
export interface resultServices {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
}
interface Props {
  resposta: resultApi;
  languages: resultLanguages[];
  page: resultPage;
  images: resultImages;
  services: resultServices[];
}

export default function Principal({
  resposta,
  languages,
  page,
  images,
  services,
}: Props) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  const optionsHeader: Option[] = [
    { id: 1, name: "Home" },
    { id: 2, name: "Sobre" },
    { id: 3, name: "Serviços" },
    { id: 4, name: "Contatos" },
  ];

  if (typeof window !== "undefined") {
    console.log("AAAA" + window.location.hostname);
  }

  return (
    <div id={styles.home}>
      <Header
        logo={images.logo}
        languages={languages}
        options={optionsHeader}
      />
      <Home
        imagemPrincipal={images.banner}
        nameCompany={resposta.name}
        slogan={page.slug}
      />
      <About
        data-aos="fade-up"
        nameComponent={"Sobre"}
        aboutRender={page.aboutContent}
      ></About>
      <ListServices
        data-aos="fade-up"
        subText={"Serviços"}
        services={services}
        nameComponent={"Serviços"}
      />
      <Contacts
        data-aos="fade-up"
        subText={page.contactTitle}
        number={resposta.phone}
        email={resposta.email}
        endereco={resposta.address}
        nameComponent={"Contatos"}
      ></Contacts>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps:GetStaticProps = async ({params}) => {
  const responseCompanyInfos = await api.get(
    `/company?method=getCompanyById&domain=${process.env.REACT_APP_HOST_NAME}`
  );

  const responseLanguage = await api.get(
    `/language?method=byCompanyId&companyId=${responseCompanyInfos.data.data[0].id}`
  );
  const responseTextPage = await api.get(
    `/page?method=byCompanyLanguageId&companyId=${responseCompanyInfos.data.data[0].id}&languageId=1`
  );

  const responseImages = await api.get(
    `/imageSettings?method=byCompanyLanguageId&companyId=${responseCompanyInfos.data.data[0].id}&languageId=1`
  );
  const responseServices = await api.get(
    `/services?method=byCompanyLanguageId&companyId=${responseCompanyInfos.data.data[0].id}&languageId=1`
  );


  let images = {
    logo: ``,
    banner: ``,
  };
  if(responseImages?.data.data){
     images = {
      logo: `${responseImages?.data?.data[0]?.hostprincipal}${responseImages?.data?.data[0]?.logo}`,
      banner: `${responseImages?.data?.data[0]?.hostprincipal}${responseImages?.data?.data[0]?.banner}`,
    };
  }

  const serviceaux = responseServices?.data.data;

  const services = serviceaux?.map((sv:any) => {
    const service = {
      id: sv.id,
      title: sv.title,
      subtitle: sv.subtitle,
      content: sv.content,
      image: `${sv.hostprincipal}${sv.image}`,
    };
    return service;
  });

  return {
    props: {
      resposta: responseCompanyInfos.data.data[0],
      languages: responseLanguage.data.data,
      page: responseTextPage.data.data[0],
      images: images,
      services: services?services:[],
    },
    revalidate:10
  };
};
