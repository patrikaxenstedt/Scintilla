const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <body className="bg-black light:bg-white transition-all">{children}</body>
  );
};

export default Background;
