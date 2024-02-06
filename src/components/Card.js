import React from 'react'

export default function Card({course}) {
  return (
    <div>
        <div>
            <img src={course.image.url} alt={course.image.alt}  />
            <div>
                <button>

                </button>
            </div>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
    </div>
  )
}
