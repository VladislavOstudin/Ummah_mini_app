import { useNavigate } from 'react-router-dom';
import { FullScreenCard } from '@/shared/ui/FullScreenCard/FullScreenCard'; 
import { ChoiceButton } from '@/shared/ui/ChoiceButton/ChoiceButton';
import Door_light from '@/shared/assets/images/Light.png';

import styles from './Light.module.scss';

export default function Light() {
    const navigate = useNavigate();

    return(
    <div className={styles.wrapper}>
      <FullScreenCard>
        <div className={styles.content}>
            <img src={Door_light} alt="Door" className={styles.picture} />
            <div className={styles.text}>
                <p>Ты осмелился подойти! Яркий свет бьет в глаза все сильнее, но тебя уже не остановить. Ты слышишь, как из-за двери до тебя доносится тихий, приятный голос, который добавляет тебе уверенности. Ты распахиваешь дверь и...</p>
            </div>
            <div className={styles.buttons_choice}>
                <ChoiceButton label="Что же там?" onClick={() => navigate('/cat-question')} />
            </div>
        </div>
      </FullScreenCard>
    </div>
    )
}