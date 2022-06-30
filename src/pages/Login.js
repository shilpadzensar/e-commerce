import homeData from "../assets/home.json";


const Home = () => {
  const contentPos = homeData.login.contentPosition === 'left' ? 'content-start' : homeData.login.contentPosition === 'right' ? 'content-end' : '';
  return <div className="login-wrapper">
  <img src={homeData.login.imageSrc} alt={homeData.login.imageAltText} />
  <div className={`content-wrapper ${contentPos}`}>
    <div className="container mt-5 px-0 py-5 d-flex">
      <div className="form-wrapper py-5 px-md-5 px-4">
      <div className="mb-4">
        <h2>{homeData.login.title}</h2>
        <p>{homeData.login.description}</p>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-4">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <button className="btn btn-primary mb-3 me-3">Log In</button>
        <a href="#" className="link">Sign Up</a>
        <br/>
        <a href="#" className="link">Forgot password?</a>
        <hr />
        <div className="d-grid gap-3">
          <button className="btn btn-outline-primary full-width" type="button">Log in using Google</button>
          <button className="btn btn-outline-primary full-width" type="button">Log in using Facebook</button>
        </div>
      </div>
    </div>
  </div>
</div>;
};

export default Home;