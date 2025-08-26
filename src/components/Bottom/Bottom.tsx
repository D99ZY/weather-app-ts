interface BottomProps {
  city: string;
}

const Bottom = ({ city }: BottomProps) => {
  return <div>Bottom: {city}</div>;
};
export default Bottom;
