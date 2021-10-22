import { Home } from "../components/Home/home";
import { Container } from "../styles/pages/Home";
import { Header } from "../components/Header/header";
import { About } from "../components/About/about";

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

  return (
    <Container>
      <Header options={optionsHeader} />
      <Home nameCompany={"RED FLAG"} />
      <About></About>
    </Container>
  );
}
