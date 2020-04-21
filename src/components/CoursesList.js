import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteCourse } from "../actions/courseActions";

function CoursesList(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={"/course/" + course.id}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CoursesList.prototype = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default CoursesList;
