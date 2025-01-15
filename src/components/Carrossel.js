import React , { useState} from "react";
import foto1 from '../images/mercado1.jpg'
import foto2 from '../images/mercado2.jpg'
import foto3 from '../images/mercado3.jpg'
import styles from './Carrossel.module.css'
const Carrossel = () => {
    const imagens = [foto1,foto2,foto3];
    const [indice,setIndice] = useState(0);

    const proxImagem = () => {
        setIndice((prevIndice) => (prevIndice + 1) % imagens.length)
    };

    const imagemAnterior = () => {
        setIndice((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

    return (
        <div  className={styles.carrossel}>
            <button className={styles.btn} onClick={imagemAnterior}>❮</button>
            <img src={imagens[indice]} alt={`Imagem ${indice + 1}`} width={1000} height={500}/>
            <button className={styles.btn} onClick={proxImagem}>❯</button>
        </div>
    )
}
export default Carrossel;
