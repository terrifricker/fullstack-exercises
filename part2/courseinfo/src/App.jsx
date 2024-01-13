const Header = ({ name }) => 
  <h1>{name}</h1>

const Part = ({ part }) => 
  <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
  parts.map(part => <Part key={part.id} part={part} />)

const Total = ({parts}) => {
  let total = parts.map(part => part.exercises).reduce((acc, val) => acc + val)
  return (
    <>
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )
}
const Courses = ({ courses }) =>
  courses.map(course => 
    <Course key={course.id} course={course} />)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App