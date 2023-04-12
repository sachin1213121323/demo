const Sresult = (props: any) => {
  const url = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`;
  return (
    <>
      <div className="flex justify-center mt-10">
        <img src={url} alt="..." />
      </div>
    </>
  );
};

export default Sresult;
