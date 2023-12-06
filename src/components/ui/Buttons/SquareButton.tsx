import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from './buttons.module.scss';

interface SquareButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: JSX.Element | string;
}

const SquareButton: FunctionComponent<SquareButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.squareButton}>
      {children}
    </button>
  );
};

export default SquareButton;
