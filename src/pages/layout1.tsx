import { Home } from "../components/Layout1/home";
import { Container } from "../styles/pages/Home";
import { Header } from "./../components/Layout1/Header/header";

export interface Option {
  id: number;
  name: string;
}

export default function Home1() {
  const optionsHeader: Option[] = [
    { id: 1, name: "Home" },
    { id: 2, name: "Sobre" },
    { id: 3, name: "Serviços" },
    { id: 4, name: "PT-BR" },
  ];

  return (
    <Container>
      <Header options={optionsHeader} />
      <Home />
    </Container>
  );
}
