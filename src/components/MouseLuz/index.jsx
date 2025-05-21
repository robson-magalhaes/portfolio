import { useEffect, useRef } from 'react';
import * as C from './styled';

export default () => {
  const luzRef = useRef(null);

  useEffect(() => {
    const handleMousePosicao = (e) => {
      const luz = luzRef.current;
      if (luz) {
        luz.style.transform = `translate(${e.clientX + 5}px, ${e.clientY + 7}px)`;
      }
    };

    window.addEventListener('mousemove', handleMousePosicao);
    return () => {
      window.removeEventListener('mousemove', handleMousePosicao);
    };
  }, []);

  return (
    <C.ModalContainer>
      <C.Luz ref={luzRef} />
    </C.ModalContainer>
  );
};
