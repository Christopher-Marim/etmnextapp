import styles from './Footer.module.scss'

interface propsFooter {
  message: string
}

export function Footer({ message }: propsFooter) {
  
  return (
    <div id={styles.layout1ContainerFooter}>
      <p dangerouslySetInnerHTML={{ __html: message }}></p>
    </div>
  )
}
