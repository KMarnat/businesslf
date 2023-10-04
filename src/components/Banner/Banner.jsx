function Banner({ source }) {
  return (
    <div className="adaptive banner" data-scroll-section>
      <div className="adaptive-photo" data-scroll-speed="0.5">
        <img src={source} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
