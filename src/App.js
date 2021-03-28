import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import Carousel from "./components/carousel/carousel.component";
import CarouselMessage from "./components/carousel-message/carousel-message.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import About from "./pages/about/about.component";
import ParallaxBG from "./assets/img/parallax/background.webp";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <CarouselMessage></CarouselMessage>

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={ParallaxBG}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
