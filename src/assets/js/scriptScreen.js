import { useEffect } from 'react';

useEffect(() => {
    const handleScroll = () => {
      const sessoes = document.querySelectorAll('.sessaoScroll');
      sessoes.forEach(element => {
        const rect = element.getBoundingClientRect();
        var viewport = window.innerHeight + 200;
        if (rect.top >= 0 && rect.bottom <= viewport) {
          element.classList.add('sessaoVisivel');
        } else {
          element.style.opacity = 0;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
