import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from './buttons.module.scss';

interface TransparentButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: JSX.Element | string;
}

const TransparentButton: FunctionComponent<TransparentButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.transparentButton}>
      {children}
    </button>
  );
};

export default TransparentButton;
