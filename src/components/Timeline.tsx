const timelineData: PointProps[] = [
  {
    year: 1820,
    text: "Test 1",
  },
  {
    year: 1930,
    text: "Test 2",
  },
  {
    year: 1945,
    text: "Test 3",
  },
  {
    year: 2000,
    text: "Test 4",
  },
  {
    year: 2002,
    text: "Test 5",
  },
  {
    year: 2006,
    text: "Test 6",
  }
];

type PointProps = {
  year?: number;
  text?: string;
};

type DrawPointsProp = {
  pointers: PointProps[];
};

const Point = (props: PointProps) => {
  const { year = 0, text = "" } = props;
  return (
    <div className={`container-${year}`} style={{ display: "inline-block" }}>
      <span>{text}</span>
      <svg viewBox="0 0 50 50">
        <line x1={25} y1={0} x2={25} y2={39} stroke="white" />
        <circle cx={25} cy={44} r={5} stroke="white" fill="#242424" />
      </svg>
      <span>{year}</span>
    </div>
  );
};

const DrawPoints = (props: DrawPointsProp) => {
  const { pointers } = props;
  if (pointers.length === 0) {
    return <></>;
  }
  return (
    <>
      <Point {...pointers[0]} />
      {<DrawPoints pointers={pointers.slice(1)} />}
    </>
  );
};

const Line = () => {
  return (
    <div
      className="container-line"
      style={{ position: "absolute", width: "100%", top: -70, zIndex: -10 }}
    >
      <svg viewBox="0 0 100 20">
        <line x1={0} y1="90%" x2="100%" y2="90%" stroke="white" />
      </svg>
    </div>
  );
};

const Timeline = () => {
  return (
    <div style={{ position: "relative" }}>
      <DrawPoints pointers={timelineData} />
      <Line />
    </div>
  );
};

export default Timeline;
