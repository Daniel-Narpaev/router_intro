import React from "react";
import { Route, Routes } from "react-router-dom";
import Materials from "../pages/materials/Materials";
import MaterialsDetails from "../pages/materials/MaterialsDetails";
import Rating from "../pages/rating/Rating";
import Student from "../pages/students/Student";
import StudentDetails from "../pages/students/StudentDetail";
import Anouncements from "../sidebar/Anouncements";
import Courses from "../sidebar/Courses";
import Notification from "../sidebar/Notifications";
import Schedule from "../sidebar/Schedule";

const Routers = () => {
  return (
    <Routes>
      <Route path="/courses/" element={<Courses />}>
        <Route path="materials" element={<Materials />} />

        <Route path="materials/:id/details/" element={<MaterialsDetails />}>
          <Route path="submitted" element={<p>Submitted Page</p>} />
          <Route path="waiting" element={<p>Waiting Page</p>} />
          <Route path="late" element={<p>Late Page</p>} />
        </Route>
        <Route path="student" element={<Student />} />
        <Route path='student/:id/detail/' element={<StudentDetails/>}/>

        <Route path="rating" element={<Rating />} />
      </Route>
      <Route path="/anouncements" element={<Anouncements />} />
      <Route path="/notifications" element={<Notification/> } />
      <Route path="/schedule" element={<Schedule/> } />
    </Routes>
  );
};

export default Routers;
