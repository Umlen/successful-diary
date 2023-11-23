import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import styles from '../../style/ui/inputs.module.scss';

const TextArea: FunctionComponent<ComponentPropsWithoutRef<'textarea'>> = ({
  ...props
}) => {
  return <textarea {...props} className={styles.textArea} />;
};

export default TextArea;
