import React, { useEffect } from 'react'
import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import WhyChoosePOS from '../Assets/Images/why-choose-pos-software.avif';
import Benefits from '../Assets/Images/inner-page-about-header.avif'
import Testimonials from './Testimonials';

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Clients from './Clients';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  Get To Know{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    About CapoBiz
                  </span>{" "}
                  Software
                </h1>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-4">
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-heading">
                <h2 className="subtitle" style={{ color: "var(--secondary-color)" }}>
                  Smart POS, Your Business Ally
                </h2>
                <h3
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Elevate Efficiency with Our Point of Sale Software
                </h3>
              </div>
              <p>
                Step into a new era of business management with our cutting-edge
                Point of Sale (POS) system. We're not just redefining
                transactions; we're retail software innovators, revolutionizing the way you run your
                business. Say goodbye to complexity, and welcome streamlined
                operations and unmatched efficiency. Explore the future of POS
                solutions with us, where innovation meets seamless
                functionality, and success becomes your everyday companion.
              </p>
              <hr />

              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Tailored POS adapting to your business needs.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Informed decisions with instant business insights.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Swift on-the-go business management with mobile access.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Grow confidently with a POS system that scales to your
                      business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <img
                className="img-fluid"
                src={AboutPointOfSale}
                alt="about-pos"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefits our-pos-benefits" style={{ backgroundImage: `url(${Benefits})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <div className="benefits-overlay">
          <div className="container p-5">
            <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas fa-users mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Unlimited Account Openings</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas fa-cogs mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Customized Product Defining</p>
                </div>
              </div>
              <div className="col-md-3 col-6 culprit">
                <div className="icon-box text-center">
                  <i className="fas fa-box mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Min Stock Management Feature</p>
                </div>
              </div>
              <div className="col-md-3 col-6 culprit">
                <div className="icon-box text-center">
                  <i className="fas fa-undo mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Product Purchase Return Option</p>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-arrow-circle-left mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Requirements and Sale Return</p>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fas fa-sync mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Auto Stock Updating Feature</p>
                </div>
              </div>

              <div className="col-md-3 col-6 culprit faster-billing">
                <div className="icon-box text-center">
                  <i className="fas  fa-money-check-alt mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Faster Retail Billing Functionality</p>
                </div>
              </div>



            </div>

            <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-chart-bar mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Detailed Sales Reports</p>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-lock mb-4"></i>
                  <p className="" style={{ fontSize: '16px' }}>Secure Data Encryption</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us pt-5" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className='mt-4'>
                <h2 className="subtitle">Discover the Difference</h2>
                <h3 className="main-heading mb-4" style={{
                  fontSize: "32px",
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}>Compelling Reasons to Choose CapoBiz For Your Business
                </h3>
                <p>choosing the right Point-of-Sale (POS) software is crucial for success. CapoBiz stands out as a game-changer, providing a host of innovative features that redefine your business transactions. Get to know more about CapoBiz POS Software!</p>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Effortless operation with a user-friendly interface for quick adoption.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Optimize stock levels with precision and prevent overstock or stockouts.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Access business data securely anytime, anywhere for enhanced flexibility.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Make informed decisions with customizable reports and analytics.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Effortlessly integrate with other applications for streamlined operations.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Consistent customer experience across various devices and platforms.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      State-of-the-art features to safeguard sensitive data and ensure compliance.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Dedicated customer support team available round the clock for peace of mind.
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <img src={WhyChoosePOS} alt="why-choose-pos-software" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ start */}
      <section id="faq" className="faq section-bg py-4">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
            <h2 className="subtitle text-center">F.A.Q</h2>
            <p className='text-center'> Frequently Asked <span>Questions</span> </p>
            <p className='text-center'>
              Our curated list of the most frequently asked questions about us.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq19"
                    className="collapsed question text-start"
                  >
                    What is CapoBiz and how does it assist businesses in managing their operations?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq19"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz is a robust software solution designed to help businesses manage stock/inventory, sales, purchases, production, manufacturing, and more. It offers tools for inventory tracking, sales reporting, order management, and production planning, among other features.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq20"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for businesses in specific industries?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq20"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz is designed to cater to a wide range of industries including retail shops, supermarkets, pharmacies, mobile shops, garment stores, shoe shops, fertilizers industry, tiles industry, and more. Its customizable features make it adaptable to the unique needs of various businesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq21"
                    className="collapsed question text-start"
                  >
                    What are the key features of CapoBiz for restaurant management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq21"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz offers restaurant management software designed to streamline operations, manage inventory, track sales, handle reservations, and improve customer service. It includes features such as menu management, table booking, kitchen order management, and billing.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq22"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz offer solutions for real estate management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq22"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, CapoBiz provides a comprehensive real estate management software solution to streamline property management tasks such as listings management, tenant tracking, lease management, maintenance scheduling, and financial reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq23"
                    className="collapsed question text-start"
                  >
                    How can CapoBiz benefit gyms and fitness centers?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq23"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz gym management software helps fitness centers streamline membership management, class scheduling, trainer scheduling, billing, and attendance tracking. It enables gym owners to efficiently run their operations and enhance member satisfaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq24"
                    className="collapsed question text-start"
                  >
                    Can CapoBiz be customized for tailor shops?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq24"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely! CapoBiz offers tailor shop management software tailored to the unique needs of tailoring businesses. It includes features for measuring, order management, fabric tracking, invoicing, and customer management..
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq25"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz cater to trading businesses?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq25"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, CapoBiz offers trading software solutions to manage trading operations efficiently. It includes features for order processing, inventory management, sales analysis, purchase management, and reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq26"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for office management tasks?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq26"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz provides office management software solutions to streamline administrative tasks, enhance productivity, and improve communication within the office environment. It offers features for task management, document sharing, employee scheduling, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="site-buttons">
            <Link to="/faqs" style={{ color: "var(--primary-color)" }}>
              View More <span>&rarr;</span>
            </Link>
          </button>
        </div>
      </section>
      {/* FAQ end */}


      <Clients />

      <Testimonials />

    </div>
  )
}

export default About
