import type { ReactNode } from 'react';

import styles from './FullScreenCard.module.scss'

interface FullScreenCardProps {
  children: ReactNode;
  backgroundColor?: string;
}

export function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className={styles.card_container}>
      {children}
    </div>
  );
}