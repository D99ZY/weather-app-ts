interface TopProps {
  city: string;
}

const Top = ({ city }: TopProps) => {
  return <div>Top: {city}</div>;
};

export default Top;
