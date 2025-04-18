import React from "react";
import '../styles/home.css'

import { Container, Row, Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SeachBar";
import ServiceList from "../services/ServiceList";
import FeaturedCaligraphyList from "../components/Featured-caligraphy/FeaturedCaligraphyList";

const Home = () =>  {
  return <>
   
   {/* ========hero section start========= */}
   <section>
     <Container>
        <Row>
          <Col lg='6' >
             <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                     <Subtitle subtitle={"Calligraphy is the art of the soul in ink"} />
                     <img src={worldImg} alt=""/>
                  </div>
                  <h1>
                  Calligraphy connects hearts beyond borders – where ink speaks a universal language.{" "}
                    <span className="highlight">memories</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa cumque laudantium voluptatum vitae. Laborum sint doloribus ex repellendus odit quidem perferendis amet perspiciatis cumque magnam, numquam maxime dolore. Facilis!
                  </p>
             </div>
          </Col>
 
         <Col lg='2'>
            <div className="hero__img-box">
               <img src={heroImg} alt=""/>
            </div>
         </Col>
         <Col lg='2'>
            <div className="hero__img-box mt-4">
               <video src={heroVideo} alt="" controls/>
            </div>
         </Col>
         <Col lg='2'>
            <div className="hero__img-box mt-5">
               <img src={heroImg02} alt=""/>
            </div>
         </Col>
         
         <SearchBar/>
        </Row>
     </Container>
   </section>
   {/* ==========hero section start======== */}
   <section>
      <Container>
         <Row>
            <Col lg='3'>
               <h5 className="services__subtitle">What we serve</h5>
               <h2 className="services__title">We offer our best sevicse</h2>
            </Col>
            <ServiceList/>
         </Row>
      </Container>
   </section>
   {/* ========= featured caligraphy section start =========== */}
    <section>
      <Container>
         <Row>
            <Col lg='12' className="mb-5">
               <Subtitle subtitle={"Explore"}/>
               <h2 className="featured__caligraphy-title">Our featured caligraphy works</h2>
            </Col>
            <FeaturedCaligraphyList/>
         </Row>
      </Container>
    </section>
   {/* ========= featured caligraphy section end =========== */}
  </>
};

export default Home;