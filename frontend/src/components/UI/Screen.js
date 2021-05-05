const Screen = (props) => {
  return (
    <div
      className="flex flex-col h-auto justify-between bg-darkOne"
      style={{
        marginBottom: '0px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Screen;
