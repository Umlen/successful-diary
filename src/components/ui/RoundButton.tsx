import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from '../../style/ui/buttons.module.scss';

interface RoundButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: JSX.Element | string;
}

const RoundButton: FunctionComponent<RoundButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.roundButton}>
      {children}
    </button>
  );
};

export default RoundButton;
