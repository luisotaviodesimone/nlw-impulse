import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe suas mensagens</strong>
      <a href="#" className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" /> Entrar com github
      </a>
    </div>
  );
}
