import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs3 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="extra wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-20 playfont fz-50">Our Vision</h2>
              <p>
                Our vision is to position Japan as a major investment market and
                bring short and long term benefits to our clients. Through its
                deep expertise and extensive network, Kanroku provides valuable
                support to meet our customer needs.
              </p>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="specialty wow fadeInUp" data-wow-delay=".5s">
              <ul>
                <li>
                  <span>01.</span>Integrity
                </li>
                <li>
                  <span>02.</span>Flexibility
                </li>
                <li>
                  <span>03.</span>Game changer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img pat valign text-center"
        style={{ backgroundImage: `url(/assets/img/two_nobg.png)` }}></div>
    </section>
  );
};

export default AboutUs3;
