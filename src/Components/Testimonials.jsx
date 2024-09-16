import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User from '../Assets/Images/user.avif'


function Testimonials() {

  var settingsTest = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <section className="clients-testimonials">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 col-12 animation" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="content">
                <h2 className="subtitle">Echoes of Delight </h2>
                <h3 className="main-heading" style={{ fontSize: '26px' }}>Listen To The Whispers of Praise</h3>
                <p>Dive into compelling narratives that resonate with our commitment to excellence. Join the harmonious chorus of content clients, where success stories unfold with every testimonial.</p>
              </div>
              <div className="testimonials"></div>
            </div>
            <div className="col-md-9 col-12 py-7" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <Slider {...settingsTest}>
                <div className=''>
                  <div className="card testimonial-cards">
                    <div className="card-content testimonials-content ">
                      <div className="p-3">
                        <p className="test-heading" style={{ margin: "0", fontSize: "23px" }}>Flexible Services</p>
                        <p>Our experience with this software has been outstanding. It adapts to our diverse needs effortlessly and allows us to manage our operations seamlessly. The solution has proven invaluable for our daily tasks and strategic planning.</p>
                        <div className="container-fluid">
                          <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-3 col-3">
                              <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{ width: '50px ', height: '50px' }} />
                            </div>
                            <div className="col-md-9 col-9">
                              <p style={{ fontSize: '13px' }}>Zaheer Ahmed</p>
                              <p style={{ fontSize: '9px' }}>CEO Go Green Fertilizers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className="card testimonial-cards ">
                    <div className="card-content testimonials-content">
                      <div className="p-3">
                        <p className="test-heading" style={{ margin: "0", fontSize: "23px" }}>Transaction Ease</p>
                        <p>Processing transactions has never been simpler. The system provides a smooth, intuitive interface that minimizes errors and speeds up every transaction. It's made managing sales both efficient and stress-free.</p>
                        <div className="container-fluid">
                          <div className="row d-flex test-img justify-content-center align-items-center">
                            <div className="col-md-3 col-3">
                              <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{ width: '50px ', height: '50px' }} />
                            </div>
                            <div className="col-md-9 col-9">
                              <p style={{ fontSize: '13px' }}>Danish Janjua</p>
                              <p style={{ fontSize: '9px' }}>CEO DAnish Group Of Companies</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className="card testimonial-cards">
                    <div className="card-content testimonials-content">
                      <div className='p-3'>
                        <p className="test-heading" style={{ margin: "0", fontSize: "23px" }}>Inventory Control</p>
                        <p>This system has been instrumental in our expansion efforts. It offers the insights and tools needed to drive our progress and adapt to new challenges. It's like having a dedicated team member focused on our success.</p>
                        <div className="container-fluid">
                          <div className="row d-flex">
                            <div className="col-md-3 col-3">
                              <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{ width: '50px ', height: '50px' }} />
                            </div>
                            <div className="col-md-9 col-9">
                              <p style={{ fontSize: '13px' }}>Haris Gulzar</p>
                              <p style={{ fontSize: '9px' }}>Director Sabir Stores</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=''>
                  <div className="card testimonial-cards ">
                    <div className="card-content testimonials-content">
                      <div className='p-3'>
                        <p className="test-heading" style={{ margin: "0", fontSize: "23px" }}>Growth Partner</p>
                        <p>Managing our stock has become incredibly streamlined with this tool. It offers real-time updates and detailed analytics, ensuring we maintain optimal inventory levels without the usual headaches. It’s a game-changer for our operations.</p>
                        <div className="container-fluid">
                          <div className="row d-flex test-img justify-content-center align-items-center">
                            <div className="col-md-3 col-3">
                              <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{ width: '50px ', height: '50px' }} />
                            </div>
                            <div className="col-md-9 col-9">
                              <p style={{ fontSize: '13px' }}>Khan Muhammad</p>
                              <p style={{ fontSize: '9px' }}>CEO Mobilfiksern</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Testimonials
