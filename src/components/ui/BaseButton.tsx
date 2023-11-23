import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from '../../style/ui/buttons.module.scss';

interface BaseButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonText: string;
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  buttonText,
  ...props
}) => {
  return (
    <button {...props} className={styles.baseButton}>
      {buttonText}
    </button>
  );
};

export default BaseButton;
