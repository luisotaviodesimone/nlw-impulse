import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect } from 'react';

export function MessageList() {
  useEffect(() => {
    api.get('messages').then((response: any) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/luisotaviodesimone.png"
                alt="Luís Otávio"
              />
            </div>
            <span>Luís Otávio De Simone</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/luisotaviodesimone.png"
                alt="Luís Otávio"
              />
            </div>
            <span>Luís Otávio De Simone</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/luisotaviodesimone.png"
                alt="Luís Otávio"
              />
            </div>
            <span>Luís Otávio De Simone</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
