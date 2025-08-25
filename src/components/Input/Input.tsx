import type { JSX } from 'react';

interface inputProps {
  city: string;
}

const Input = ({ city }: inputProps): JSX.Element => {
  return <div>Input: {city}</div>;
};

export default Input;
