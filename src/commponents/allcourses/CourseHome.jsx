import React from "react";
import Back from "../commen/back/Back";
import CourseCard from "./CourseCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  return (
    <>
      <Back title="explore couses" />
      <CourseCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
