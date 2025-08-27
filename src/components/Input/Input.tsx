import { forwardRef } from 'react';
import type { InputProps } from '../../types/input.ts';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(({ handleSearch }, ref) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter City"
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
