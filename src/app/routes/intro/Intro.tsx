import { useNavigate } from 'react-router-dom';
import { FullScreenCard } from '@/shared/ui/FullScreenCard/FullScreenCard'; 
import { ChoiceButton } from '@/shared/ui/ChoiceButton/ChoiceButton';

import styles from './Intro.module.scss'
import catVideo from '@/shared/assets/images/cat animation 1.mp4'

export default function Intro() {
  const navigate = useNavigate();

 return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={catVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <FullScreenCard>
        <div className={styles.content}>
          <h1 className={styles.title}>UmmahApp</h1>
          <p className={styles.text}>Ас-саляму алейкум! Готов начать свой путь?</p>
          <ChoiceButton label="Начать" theme='light' onClick={() => navigate('/door-choice')} />
        </div>
      </FullScreenCard>
    </div>
  );
}