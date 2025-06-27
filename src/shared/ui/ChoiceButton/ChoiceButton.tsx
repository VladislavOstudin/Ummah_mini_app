import type { ButtonHTMLAttributes } from 'react';

import styles from './ChoiceButton.module.scss';

interface ChoiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function ChoiceButton({ label, ...props }: ChoiceButtonProps) {

  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  );
}