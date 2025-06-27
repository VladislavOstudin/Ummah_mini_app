import { useNavigate } from 'react-router-dom';
import { FullScreenCard } from '@/shared/ui/FullScreenCard/FullScreenCard'; 
import { ChoiceButton } from '@/shared/ui/ChoiceButton/ChoiceButton';
import Door_close from '@/shared/assets/images/Door_close.png';

import styles from './Corner.module.scss';

export default function Corner() {
    const navigate = useNavigate();

    return(
    <div className={styles.wrapper}>
      <FullScreenCard>
        <div className={styles.content}>
            <img src={Door_close} alt="Door" className={styles.door} />
            <div className={styles.text}>
                <p>Ты забился в дальний угол. Ты всегда бежал от опасности, потому что тебя так научили. И в этот раз ты поступил так</p>
            </div>
            <div className={styles.buttons_choice}>
                <ChoiceButton label="Что же там?" onClick={() => navigate('/cat-question')} />
            </div>
        </div>
      </FullScreenCard>
    </div>
    )
}