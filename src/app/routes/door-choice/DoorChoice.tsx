import { useNavigate } from 'react-router-dom';
import { FullScreenCard } from '@/shared/ui/FullScreenCard/FullScreenCard'; 
import { ChoiceButton } from '@/shared/ui/ChoiceButton/ChoiceButton';
import Door_choice from '@/shared/assets/images/Door_choice_2.png'

import styles from './DoorChoice.module.scss'

export default function DoorChoice() {
    const navigate = useNavigate();
    
    return(
    <div className={styles.wrapper}>
      <FullScreenCard>
        <div className={styles.content}>
            <img src={Door_choice} alt="Door" className={styles.picture} />
            <div className={styles.text}>
                <p>Впереди ты видишь дверь, сквозь которую в комнату пробивается яркий свет. Ты хочешь узнать, что за свет, но тебе страшно.</p>
                <p>Что же делать?</p>  
            </div>
            <div className={styles.buttons_choice}>
                <ChoiceButton label="Подойти" onClick={() => navigate('/light')} />
                <ChoiceButton label="Остаться" onClick={() => navigate('/corner')} />
            </div>
        </div>
      </FullScreenCard>
    </div>
    )
}