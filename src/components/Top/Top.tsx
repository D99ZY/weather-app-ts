interface TopProps {
  city: string | null;
}

const Top = ({ city }: TopProps) => {
  return <div>Top: {city}</div>;
};

export default Top;
