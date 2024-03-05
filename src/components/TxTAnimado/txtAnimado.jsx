import style from './TxtAnimado.module.css';

export const TxtAnimado = () => {
    return (
        <div className={style.box_digitando}>
            <span>Ola Mundo</span>
            <span className={style.txt_digitando}></span>
        </div>
    );
}

export default TxtAnimado;