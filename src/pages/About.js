import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About({ data }) {
  if (data) {
    var bachelorSchool = data.bachelorSchool;
    var bachelorTitle = data.bachelorTitle;
    var masterSchool = data.masterSchool;
    var masterTitle = data.masterTitle;
    var bachelorSchoolImage = `images/${data.bachelorSchoolImage}`;
    var masterSchoolImage = "images/" + data.masterSchoolImage;
  }

  return (
    <section
      id="about"
      className="flex justify-center items-center pt-5 pb-5 h-screen bg-gray-300"
    >
      <div className="flex h-4/5 ml-32">
        <h1 className=" font-bold text-4xl ">About me</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimeline></VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          icon={
            <img className="rounded-full" src={bachelorSchoolImage} alt="" />
          }
        >
          <h3 className="vertical-timeline-element-title">{bachelorTitle}</h3>
          <p> {bachelorSchool}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Now"
          icon={<img className="rounded-full" src={masterSchoolImage} alt="" />}
        >
          <h4 className="vertical-timeline-element-subtitle">{masterTitle}</h4>
          <p>{masterSchool}</p>
        </VerticalTimelineElement>

        <VerticalTimeline></VerticalTimeline>
      </VerticalTimeline>

      {/* <div className="flex text-black flex-col w-1/3 text-lg">
        <div className="text-4xl">
          <h1 className="">About me</h1>
        </div>
        <p>{bio}</p>
        <div>
          <h1 className="text-4xl text-bold">Education</h1>
          <li>{masterSchool}</li>
          <li className="list-none">{masterTitle}</li>
          <li>{bachelorSchool}</li>
          <li className="list-none">{bachelorTitle}</li>
        </div>
      </div> */}
    </section>
  );
}

export default About;
