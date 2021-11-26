import { VscGithubInverted } from 'react-icons/vsc';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import styles from './styles.module.scss';

export function LoginBox() {

  const { signInUrl} = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe suas mensagens</strong>
      <a href={signInUrl} className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" /> Entrar com github
      </a>
    </div>
  );
}
