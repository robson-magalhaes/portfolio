import { useEffect, useRef } from 'react';
import * as C from './styled';

function MouseLuz() {
  const luzRef = useRef(null);

  useEffect(()=>{
    const handleMousePosicao = (e) =>{
        const luz = luzRef.current;
        if(luz){
            luz.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
        }
    }
    window.addEventListener('mousemove',handleMousePosicao);
    return ()=>{
        window.removeEventListener('mousemove', handleMousePosicao);
    }
    
  }, []);

  return (
    <C.Luz ref={luzRef}/>
  );
}

export default MouseLuz;
