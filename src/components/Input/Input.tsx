import { useRef, useState } from 'react';
import type { InputProps } from '../../types/input.ts';
import styles from './Input.module.css';

const Input = ({ handleSearch }: InputProps) => {
  const [value, setValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter City"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleSearch(value);
            setValue('');
            e.currentTarget.blur();
          }
        }}
      />
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
