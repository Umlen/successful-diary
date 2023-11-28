import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from '../../style/ui/buttons.module.scss';

interface RectangleButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: JSX.Element | string;
}

const RectangleButton: FunctionComponent<RectangleButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.rectangleButton}>
      {children}
    </button>
  );
};

export default RectangleButton;
