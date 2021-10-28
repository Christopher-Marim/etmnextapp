import styles from "./Contacts.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

interface Props {
  nameComponent: string;
}

export function Contacts({ nameComponent }: Props) {
  const endereco = `Rua quintino bacaiuva 227 88502190`;

  const x = endereco.replace(/\s/g, "+");

  return (
    <>
      {nameComponent && (
        <div
          className={styles.layout1ContainerContacts}
          id={`${nameComponent}`}
        >
          <h2>{nameComponent}</h2>
          <h1>Fale conosco</h1>
          <div id={styles.wrapper}>
            <div id={styles.sectionContatos}>
              <div style={{ width: "100%" }}>
                <HiOutlineLocationMarker size={30} />
                <p>Endereço</p>
                <a target="_blank" href={`https://www.google.com.br/maps/place/${x}`}>
                  {endereco}
                </a>
              </div>
              <div>
                <AiOutlineMail size={30} />
                <p>Email</p>
                <a>contato@etm.ltda</a>
              </div>
              <div>
                <BiPhoneCall size={30} />
                <p>Telefone</p>
                <a>22-2142-5200</a>
              </div>
            </div>
            <div id={styles.section}>
              <div>
              <input id={styles.inputSmall} placeholder='Seu nome'></input>
              <input id={styles.inputSmall}  placeholder='Seu email' style={{marginLeft:15}}></input>
              </div>
              <input id={styles.inputMedio}  placeholder='Assunto'></input>
              <textarea id={styles.inputLarge}  placeholder='Mensagem'></textarea>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
