import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Navbar />  
      <div className="about_main_cont">
        <div className="abt_top">
          <h1>WANT TO KNOW MORE ABOUT US?</h1>
        </div>
        <div className="one">
          <div className="one_img_cont">
            <img src="/assets/abt1.jpg" alt="" />
          </div>
          <div className="one_content">
            <p>Our mission is to revolutionize the way we manage garbage by leveraging the power of the Internet of Things (IoT). By using cutting-edge technology and smart sensors, we are able to provide real-time monitoring of garbage bins, optimizing collection schedules and reducing costs.
            </p>
          </div>
        </div>
        <div className="two">
          <div className="two_content">
            <p>At the heart of our system is our state-of-the-art IoT platform, which connects our smart sensors to the cloud, providing a wealth of data on garbage bin fill levels, temperature, and location. With this data, we can provide customized reports to our customers, allowing them to make informed decisions about waste management.
            </p>
          </div>
          <div className="two_img_cont">
            <img src="/assets/abt2.jpg" alt="" />
          </div>
        </div>
        <div className="one">
        <div className="one_img_cont">
            <img src="/assets/abt3.jpg" alt="" />
          </div>
          <div className="one_content">
            <p>Our IoT-enabled garbage bins are equipped with ultrasonic sensors that measure fill levels and transmit data in real-time to our cloud platform. This allows us to optimize garbage collection schedules, reducing the number of trips required and the associated costs.
            </p>
          </div>
        </div>
        <div className="two">
        <div className="two_content">
            <p>In addition, our system provides alerts when bins are full or approaching capacity, ensuring that they are emptied promptly, avoiding unpleasant odors and overflowing bins.
            </p>
          </div>
          <div className="two_img_cont">
            <img src="/assets/abt4.jpg" alt="" />
          </div>
        </div>
        <div className="one">
        <div className="one_img_cont">
            <img src="/assets/abt5.jpg" alt="" />
          </div>
          <div className="one_content">
            <p>Our IoT garbage management solution is scalable, flexible and customizable to meet the specific needs of our customers. Our team of experts will work with you to design a solution that meets your unique requirements.
            </p>
          </div>
        </div>
        <div className="two">
        <div className="two_content">
            <p>Thank you for visiting our website, and we look forward to the opportunity to work with you to revolutionize the way we manage garbage!
            </p>
          </div>
          <div className="two_img_cont">
            <img src="/assets/abt6.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About