import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import issueImg from "../Assets/Images/help-img.avif"

export default function Help() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Help Center
                </h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row help-card justify-content-between">
          <div className="col-md-3">
            <i className='fas mb-3 fa-ticket-alt'></i>
            <h5>Streamlined Ticketing</h5>
            <p> Easily log and track issues for swift resolution and seamless communication.</p>
          </div>
          <div className="col-md-3">
            <i className='fas mb-3 fa-headset'></i>
            <h5>Tailored Support</h5>
            <p>Get tailored assistance for your school's unique challenges.</p>

          </div>
          <div className="col-md-3">
            <i className='fas mb-3 fa-chart-line'></i>
            <h5>Continuous Improvements</h5>
            <p> Share your experiences and suggestions for continuous software improvement.</p>

          </div>
        </div>
      </div >

      <div style={{ backgroundColor: "rgb(241, 243, 251)" }}>
        <div className="container py-4">
          <div className="row help-card align-items-center justify-content-between">
            <div className="col-md-6 help_points">
              <h1>Uh Oh! Having An Issue?</h1>
              <p>  Let us know if you run into any glitches while using our software. Your feedback helps us fix issues and make things smoother for everyone!</p>
              <h5> How to report an issue:</h5>
              <li>Briefly explain what went wrong.</li>
              <li>If you can, show us how to make the bug happen again (step-by-step).</li>
              <li>Copy and paste any error messages that pop up.</li>

              <h5 className='mt-3'> How to Report:</h5>
              Still need guidance? <Link to="/userLogin" className='geneTicketLink'> Generate a ticket</Link> of your problem and our support team will take you through the process to resolve your issue.
            </div>
            <div className="col-md-5">
              <img src={issueImg} alt="" className='img-fluid' />
            </div>
          </div>
        </div >
      </div>
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
    </div >
  )
}
