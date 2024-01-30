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

const Timeline = () => {
  return (
    <div>
      <DrawPoints pointers={timelineData} />
    </div>
  );
};

export default Timeline;
