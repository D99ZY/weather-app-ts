import { useRef } from 'react';
import type { InputProps } from '../../types/input.ts';
import styles from './Input.module.css';

const Input = ({ handleSearch }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter City"
        ref={inputRef}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
            e.currentTarget.value = '';
            e.currentTarget.blur();
          }
        }}
      />
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
