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

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  nameComponent:string;
  services:Service[];
  subText:string;
}
export function ListServices({nameComponent, services,subText, ...rest}:Props) {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState<Service>();
  return (
    <div {...rest} className={styles.layout1ContainerListServices} >
      <h2 id={`${nameComponent}`}>{nameComponent}</h2>
      <h1>{subText}</h1>
      <ul>
        {services.map((x) => (
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
