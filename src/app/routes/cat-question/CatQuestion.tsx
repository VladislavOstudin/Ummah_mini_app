import { useNavigate } from 'react-router-dom';
import { FullScreenCard } from '@/shared/ui/FullScreenCard/FullScreenCard'; 
import { ChoiceButton } from '@/shared/ui/ChoiceButton/ChoiceButton';
import Door_close from '@/shared/assets/images/Hello_cat.png';

import styles from './CatQuestion.module.scss';

export default function CatQuestion() {
    const navigate = useNavigate();

    return(
    <div className={styles.wrapper}>
      <FullScreenCard>
        <div className={styles.content}>
            <img src={Door_close} alt="Door" className={styles.picture} />
            <div className={styles.text}>
                <p>Перед тобой появляется милый котёнок, от которого исходит тот самый яркий свет. Котёнок кажется дружелюбным. Ты задаёшь вопрос...</p>
            </div>
            <div className={styles.buttons_choice}>
                <ChoiceButton label="Кто ты?" onClick={() => navigate('/')} />
            </div>
        </div>
      </FullScreenCard>
    </div>
    )
}