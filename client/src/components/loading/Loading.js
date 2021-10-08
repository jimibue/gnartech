import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    const main = document.querySelector('#root main');
    const htmlTag = document.documentElement;
    if (!main) {
      htmlTag.setAttribute('data-show', 'false');
    } else {
      main.style = 'opacity:0';
    }
    return () => {
      setTimeout(() => {
        if (!main) {
          htmlTag.setAttribute('data-show', 'true');
        } else {
          main.style = 'opacity:1';
        }
      }, 1);
    };
  }, []);

  return <></>;
};

export default Loading;
