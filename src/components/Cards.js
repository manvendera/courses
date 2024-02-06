import React from 'react'
import Card from './Card';
export default function Cards({ courses }) {
  let allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((coursesCategory) => {
      coursesCategory.forEach((course) => {
        allCourses.push(course)
      })
    });
    return allCourses
  }

  return (
    <div>
      {!courses ? (
        <div>
          <p>
            No data Found
          </p>
        </div>

      ) : (getCourses().map((course) => {
        return (
          <Card key={course.id} course={course}></Card>

        )
      }))}

    </div>
  )
}
