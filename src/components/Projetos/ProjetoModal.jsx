import { useEffect } from 'react';
import styles from './ProjetoModal.module.css';

export default function ProjetoModal({ projeto, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.conteudo}>
        <span className={styles.fechar} onClick={onClose}>&times;</span>
        <p>{projeto.detalhes}</p>
        <a href={projeto.linkDemo} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-link"></i> Visualizar projeto
        </a>
        <a href={projeto.linkCodigo} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i> Visualizar código
        </a>
      </div>
    </div>
  );
}
