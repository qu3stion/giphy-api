import { NavLink } from "react-router-dom";

function Home(){
  return (
    <section>
      <h1>Yurrr, GIFS!</h1>

      <NavLink to="/trending" className="button">
        View Trending GIFS
      </NavLink>

      <NavLink to="/random" className="button">
        Random GIFS
      </NavLink>
    </section>
  )
}

export default Home;
