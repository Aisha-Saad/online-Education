import React from "react";
import "./footer.css";
import { blog } from "../../../dummydata";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newletter -stay tun and get the lated update</h1>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ea,
              ad tenetur magnam laudantium fugiat nihil corrupti, delectus
              excepturi odit optio soluta.
            </span>
          </div>

          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className=" fa fa-paper-plane"></i>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Academia</h1>
            <span>online education & learning</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              necessitatibus odit consectetur quas, aut architecto vero
              adipisci! Laboriosam ducimus, fugiat iusto sequi consequatur
              voluptate consequuntur eos ex eum illum mollitia vel quis
              cupiditate incidunt error laborum doloremque dolores in. Officiis.
            </p>
            <i class="fa-brands fa-facebook icon"></i>
          <i class="fa-brands fa-instagram icon"></i>
          <i class="fa-brands fa-x-twitter icon"></i>
          <i class="fa-brands fa-whatsapp icon"></i>
          </div>

          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick links</h3>
            <ul>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0,3).map((val)=>{
              return(
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="box last">
            <h3>Have a qustion</h3>
            <ul>
              <li>
                <i className=" fa fa-map"></i>
                203 fake address ,Jeedah
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                05555550000
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2024 reserved</p>
      </div>
    </>
  );
};

export default Footer;
