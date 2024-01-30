type PointProps = {
  pointText?: string;
  endText?: string;
};

const Point = (props: PointProps) => {
  const { pointText = "", endText = "" } = props;
  return (
    <div
      className={`container-${pointText}`}
      style={{ display: "inline-block" }}
    >
      <span>{endText}</span>
      <svg viewBox="0 0 50 50">
        <line x1={25} y1={0} x2={25} y2={39} stroke="white" />
        <circle cx={25} cy={44} r={5} stroke="white" fill="#242424" />
      </svg>
      <span>{pointText}</span>
    </div>
  );
};

const Timeline = () => {
  return (
    <div>
      <Point endText="Hola" pointText="1924" />
      <Point endText="Hola" pointText="1924" />
      <Point endText="Hola" pointText="1924" />
      <Point endText="Hola" pointText="1924" />
    </div>
  );
};

export default Timeline;
