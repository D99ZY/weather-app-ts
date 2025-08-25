import type { JSX } from 'react';

interface TopProps {
  city: string;
}

const Top = ({ city }: TopProps): JSX.Element => {
  return <div>Top: {city}</div>;
};

export default Top;
