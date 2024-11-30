import React from "react";
import "./About.css";
import Breadcrumb from "./../../Component/Breadcrumb/Breadcrumb";
import p1 from "../../assets/images/slider/s3.jpg";
import p2 from "../../assets/images/desserts/d3.jpg";
import p3 from "../../assets/images/pasta/p5.jpg";
import p4 from "../../assets/images/salad/s2.jpg";
import p5 from "../../assets/images/rolls/r4.jpg";


const About = () => {
  return (
    <div>
      <Breadcrumb title="About" bgImg={p1} />
     <div className="about-section pt-5 pb-5">
     <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>
              <b style={{ color: "#70ac11", opacity: ".8" }}>About</b> Us
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dicta aspernatur dolorum et culpa corporis nostrum praesentium minima. Ut nulla omnis quam vel ab ipsam est doloremque quasi officia velit. Ratione ad quis quia, architecto dolorem illo perspiciatis provident. Voluptate, aperiam nesciunt. Dicta fuga dolorem consequatur numquam quo in maxime, consectetur fugiat eaque ab voluptate. Facilis sed illo eligendi eaque aperiam fugiat ipsa deleniti consequuntur pariatur, doloremque, ipsam alias nisi explicabo eum debitis officia asperiores id, tempore voluptas maiores fuga et delectus facere soluta? Illum rem nesciunt sequi, ipsam alias atque mollitia, dignissimos nisi quas aut adipisci sint harum optio, vel voluptates provident quam placeat magnam unde obcaecati saepe beatae cumque rerum cupiditate? Ea fugiat illo ipsam nemo vitae. Quod, sunt laborum amet impedit omnis cupiditate nisi reprehenderit dolorem laboriosam accusantium hic molestias dolores ea, ipsa, voluptas facilis asperiores aliquid. Sequi nemo dolorem eos dolor fugiat quis, explicabo aspernatur voluptatibus, consequatur quos suscipit? Quidem ducimus sapiente quo id animi, corrupti neque accusantium ullam. Suscipit voluptas inventore dolorem commodi eum deserunt maxime porro nobis consequuntur harum, voluptate cupiditate! Cum eligendi amet natus, maiores similique voluptate nobis accusamus nostrum iste adipisci optio? A soluta voluptatum totam eos amet qui itaque. Dolorem, culpa.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="photo-section">
              <div className="row g-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="photo">
                            <img src={p2} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="photo">
                            <img src={p3} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="photo">
                            <img src={p4} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="photo">
                            <img src={p5} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default About;
