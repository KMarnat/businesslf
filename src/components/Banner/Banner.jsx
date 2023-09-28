function Banner({ source }) {
  return (
    <div className="adaptive banner">
      <div className="adaptive-photo">
        <img src={source} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
