import type { JSX } from 'react';

interface topProps {
  city: string;
}

const Top = ({ city }: topProps): JSX.Element => {
  return <div>Top: {city}</div>;
};

export default Top;
