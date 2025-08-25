import type { JSX } from 'react';

interface InputProps {
  city: string;
}

const Input = ({ city }: InputProps): JSX.Element => {
  return <div>Input: {city}</div>;
};

export default Input;
