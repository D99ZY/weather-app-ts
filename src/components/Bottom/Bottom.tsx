interface BottomProps {
  country: string | null;
}

const Bottom = ({ country }: BottomProps) => {
  return <div>Bottom: {country}</div>;
};
export default Bottom;
