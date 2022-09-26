import  Image from "next/image";
import styles from "../style/image.module.css";
// Custom image component
export default function invertedImage(props: { src: string; alt: string, width: number, height: number}) {
    return <div style={{width: `${props.height}px`, height: `${props.width}px`}} className={styles.invertedImage}><Image src={props.src} alt={props.alt} layout="fill" objectFit="cover"/></div>;
}