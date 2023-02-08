import Carousel from 'react-bootstrap/Carousel';
import datas from '../listofprojects.json';

function CarouselFadeExample({ recentRef }) {

  const freshProjects = datas.slice(0, 3);

  /* console.log(freshProjects) */


  return (
    <>
      <div ref={recentRef}></div>
      <Carousel fade touch>
        {
          freshProjects.map((project) => (
            <Carousel.Item key={project.id} >
              <img
                className="d-block frontImg"
                src={project.imgURL}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>{project.name}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;