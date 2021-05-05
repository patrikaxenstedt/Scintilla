const Screen = (props) => {
  return (
    <div
      className="flex flex-col h-auto justify-between bg-black"
      style={{
        marginBottom: '0px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Screen;
