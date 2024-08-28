import {React, useEffect} from "react";
import posTerminals from "../Assets/Images/pos-terminals.avif";
import BarcodeScanner from "../Assets/Images/barcode-scanners-img.avif";
import ReceiptPrinter from "../Assets/Images/reciept-printers-img.avif";
import CashDrawer from "../Assets/Images/cash-drawers-img.avif";
import CustomerDisplays from "../Assets/Images/customer-displays-img.avif";
import CardReaders from "../Assets/Images/card-readers-img.avif";
import LabelPrinters from "../Assets/Images/label-printers.avif";
import POSTablets from "../Assets/Images/pos-tablets.avif";
import HandheldScanner from "../Assets/Images/handheld-scanners.avif";
import DigitalScales from "../Assets/Images/digital-scales-img.avif";
import BiometricAttendance from "../Assets/Images/biometric-attendance-system.avif";
import FacialRecognition from "../Assets/Images/facial-recognition.avif";
import CTA from './CTA'
import AOS from "aos";
import "aos/dist/aos.css";

function Hardware() {

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
                <h2 className="slider-heading">
                  Essential Hardware For{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Optimal POS System
                  </span>{" "}
                  Performance
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hardware-intro py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Essential Hardware For Seamless POS</h6>
              <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Comprehensive POS Hardware Integration
              </h2>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-6">
              <div className="hardware-box d-flex ">
                <div className="hardware-img ">
                  <img
                    src={posTerminals}
                    alt="pos-terminals"
                    className="img-fluid"
                    style={{ height: "auto", width: "100%" }}
                  />
                </div>
                <div className="content">
                  <h5 className="fw-bold">POS Terminals</h5>
                  <p>
                    POS terminals are the main interface for the software,
                    allowing cashiers to input sales data and process
                    transactions. These devices are equipped with touch screens
                    and often include additional features like customer displays
                    and integrated card readers.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={posTerminals}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">POS Terminals</h5>
                  <p>
                  POS terminals are the main interface for the software, allowing cashiers to input sales data and process transactions. These devices are equipped with touch screens and often include additional features like customer displays and integrated card readers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={HandheldScanner}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Barcode Scanners</h5>
                  <p>
                    Barcode scanners are essential for quickly and accurately
                    entering product information at checkout. They improve
                    efficiency by reducing manual entry errors and speeding up
                    the transaction process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={ReceiptPrinter}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Receipt Printers</h5>
                  <p>
                    Receipt printers provide customers with printed records of
                    their purchases. These devices can print quickly and
                    reliably, often using thermal printing technology to ensure
                    clear and durable receipts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CashDrawer}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Cash Drawers</h5>
                  <p>
                    Cash drawers store cash securely and can be integrated with
                    POS systems to open automatically during transactions. They
                    are designed with compartments for bills and coins,
                    facilitating organized cash handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CustomerDisplays}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Customer Displays</h5>
                  <p>
                  Customer displays show transaction details to customers in real-time. These displays can be standalone units or integrated with POS terminals, enhancing transparency and trust at the point of sale.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CardReaders}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Card Readers</h5>
                  <p>
                  Card readers allow for the processing of credit and debit card transactions. Modern card readers support a variety of payment methods, including chip cards, contactless payments, and mobile wallets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={LabelPrinters}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Label Printers</h5>
                  <p>
                  Label printers are used for printing product labels and price tags. They are vital for inventory management and ensuring products are properly tagged and priced on the shelves.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={POSTablets}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">POS Tablets</h5>
                  <p>
                  POS tablets offer a portable solution for sales transactions, ideal for businesses with mobile sales needs or limited counter space. These devices can run the same POS software as traditional terminals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={BarcodeScanner}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Handheld Scanners</h5>
                  <p>
                  Handheld scanners are versatile devices used for inventory management, price checks, and mobile transactions. They offer mobility and convenience, making them ideal for busy retail environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={DigitalScales}
                    alt="pos-terminals"
                    className="img-fluid"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Digital Scales</h5>
                  <p>
                  Digital scales are essential for businesses that sell products by weight, such as grocery stores and delis. They integrate with POS systems to ensure accurate pricing based on weight measurements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={BiometricAttendance}
                    alt="pos-terminals"
                    className="img-fluid"
                    data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Biometric Attendance System</h5>
                  <p>
                  Biometric attendance systems use fingerprint or facial recognition to accurately track employee attendance and ensure secure access. These systems enhance security and streamline workforce management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={FacialRecognition}
                    alt="pos-terminals"
                    className="img-fluid"
                  />
                </div>
                <div className="content" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h5 className="fw-bold">Face Recognition System</h5>
                  <p>
                  Facial recognition systems offer advanced security and efficiency by identifying individuals through unique facial features. Ideal for both attendance tracking and customer interactions, these systems enhance overall operational security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />


    </div>
  );
}

export default Hardware;
