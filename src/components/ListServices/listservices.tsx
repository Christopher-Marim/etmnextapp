import { useState } from "react";
import { ModalComponent } from "../Modal/modal";
import { ServiceComponent } from "../ServiceComponent/servicecomponent";
import styles from "./ListServices.module.scss";

interface Service {
  id: string;
  image: string;
  message: string;
  title: string;
}

export function ListServices() {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState<Service>();

  const array = [
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
      message: "lorem ipsum dolor sit amet, consectetur adip",
      title: "Serviço 2",
    },
  ];

  return (
    <div id={styles.layout1ContainerListServices}>
      <h2>Serviços</h2>
      <h1>CONFIRA NOSSOS SERVIÇOS</h1>
      <ul>
        {array.map((x) => (
          <li key={x.id}>
            <ServiceComponent
              title={x.title}
              message={x.message}
              image={x.image}
              openModal={() => {
                setShowModal(true), setCurrentService(x);
              }}
            />
          </li>
        ))}
      </ul>
      {currentService && (
        <ModalComponent
          title={currentService?.title}
          message={currentService?.message}
          image={currentService?.image}
          onClose={() => setShowModal(false)}
          show={showModal}
        ></ModalComponent>
      )}
    </div>
  );
}
