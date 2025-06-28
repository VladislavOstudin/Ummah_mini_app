import type { ButtonHTMLAttributes } from 'react';

import styles from './ChoiceButton.module.scss';

interface ChoiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: string;
}

export function ChoiceButton({ label, theme = 'dark', ...props }: ChoiceButtonProps) {

  return (
    <button {...props} className={theme === 'light' ? `${styles.button} ${styles.button__light}` : `${styles.button} ${styles.button__dark}`}>
      {label}
    </button>
  );
}