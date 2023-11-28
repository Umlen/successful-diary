import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from '../../style/ui/buttons.module.scss';

interface RectangleButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonText: string;
}

const RectangleButton: FunctionComponent<RectangleButtonProps> = ({
  buttonText,
  ...props
}) => {
  return (
    <button {...props} className={styles.rectangleButton}>
      {buttonText}
    </button>
  );
};

export default RectangleButton;
