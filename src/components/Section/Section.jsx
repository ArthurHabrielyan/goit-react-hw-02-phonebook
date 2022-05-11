export const Section = ({ children, title }) => {
  return (
    <>
      <div className="section" title={title}>
        {children}
      </div>
    </>
  );
};
