import type { JSX } from 'react';

interface bottomProps {
  city: string;
}

const Bottom = ({ city }: bottomProps): JSX.Element => {
  return <div>Bottom: {city}</div>;
};
export default Bottom;
