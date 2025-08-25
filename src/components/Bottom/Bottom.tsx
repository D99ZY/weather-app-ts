import type { JSX } from 'react';

interface BottomProps {
  city: string;
}

const Bottom = ({ city }: BottomProps): JSX.Element => {
  return <div>Bottom: {city}</div>;
};
export default Bottom;
