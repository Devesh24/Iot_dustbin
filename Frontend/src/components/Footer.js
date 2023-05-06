import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer_img">
                <img src="/assets/footerimg.jpg" alt="" />
            </div>
            <div className="footer_content">
                <div className="footer_links">
                    <a href="https://swachhbharatmission.gov.in/">Swacch Bharat Mission - Grameen</a>
                    <a href="https://www.pmindia.gov.in/en/major_initiatives/swachh-bharat-abhiyan/">PMIndia</a>
                    <a href="https://timesofindia.indiatimes.com/citizen-reporter/stories/garbagebinsoverflowing/articleshow/71950054.cms">Times Of India</a>
                    <a href="https://www.thebetterindia.com/188065/chennai-iit-madras-smart-garbage-bins-antariksh-waste-india/">The Better India</a>
                    <a href="https://swachhbharat.mygov.in/">Swacch Bharat - India</a>
                    <a href="https://sbmurban.org/">Swacch Bharat Mission - Urban</a>
                </div>
                <div className="footer_bottom">
                    copyright @ 2023 | Waste Watchers | All Rights Reserved | Designed By Devesh Raghuvanshi
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer