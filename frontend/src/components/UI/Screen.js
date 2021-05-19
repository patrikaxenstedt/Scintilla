// The main div that holds everything else.
const Screen = (props) => {
  return (
    <div
      className="flex flex-col h-auto justify-between bg-white dark:bg-black"
      style={{
        marginBottom: '0px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Screen;
