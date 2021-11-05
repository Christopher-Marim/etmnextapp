import { useState } from "react";
import { resultServices } from "../../pages";
import { ModalComponent } from "../Modal/modal";
import { ServiceComponent } from "../ServiceComponent/servicecomponent";
import styles from "./ListServices.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  nameComponent:string;
  services:resultServices[];
  subText:string;
}
export function ListServices({nameComponent, services,subText, ...rest}:Props) {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState<resultServices>();
  return (
    <div {...rest} className={styles.layout1ContainerListServices} >
      <h2 id={`${nameComponent}`}>{nameComponent}</h2>
      <h1>{subText}</h1>
      <ul>
        {services.map((x) => (
          <li key={x.id}>
            <ServiceComponent
              title={x.title}
              message={x.content}
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
          message={currentService?.content}
          image={currentService?.image}
          onClose={() => setShowModal(false)}
          show={showModal}
        ></ModalComponent>
      )}
    </div>
  );
}
