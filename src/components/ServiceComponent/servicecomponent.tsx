import styles from "./ServiceComponent.module.scss";

export interface Service {
  id?: string;
  image: string;
  title: string;
  message: string;
  openModal(): void;
}

export function ServiceComponent({ image, title, message, openModal }: Service) {
  return (
    <button onClick={openModal} id={styles.layout1ContainerService}>
      <img src={image} />
      <p> {title} </p>
    </button>
  );
}
