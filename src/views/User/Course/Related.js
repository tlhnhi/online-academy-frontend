import React, { memo, useState } from 'react'

const Related = memo(() => {
  const relatedCourses = [
    { 
        image: require('./../../../images/related/micro.jpg').default, 
        title: "Microfrontends with React: A Complete Developer's Guide",
        rating: '4.8',
        students: '6,297',
        price: '129.99$' 
    },
    { 
        image: require('./../../../images/related/complete.jpg').default, 
        title: "Complete React Developer in 2021 (Redux, Hooks, GraphQL)",
        rating: '4.7',
        students: '56,788',
        price: '129.99$' 
    },
    { 
        image: require('./../../../images/related/modern.jpg').default, 
        title: "Modern React with Redux [2020 Update]",
        rating: '4.7',
        students: '217,223',
        price: '129.99$' 
    },
    { 
        image: require('./../../../images/related/advanced.jpg').default, 
        title: "Advanced React and Redux",
        rating: '4.6',
        students: '68,713',
        price: '129.99$' 
    },
    { 
        image: require('./../../../images/related/graphql.jpg').default, 
        title: "GraphQL with React: The Complete Developers Guide",
        rating: '4.6',
        students: '42,228',
        price: '129.99$' 
    }
  ]
  const [courses] = useState(relatedCourses)
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
        <h4 className="card-title text-fiord-blue">Course Content</h4>
        <table className="table">
          <tbody style={{ fontSize: `16px` }}>
          {courses.map((item, idx) => (
            <tr key={idx}>           
              <td><img
                  className="rounded"
                  src={item.image}
                  alt=""
                  width="100"
                  style={{ width: `50px`, height: `50px`, objectFit: `cover` }}
                /></td>
              <td>{item.title}</td>
              <td className="text-center text-warning">
                {item.rating}<i className="material-icons">&#xe838;</i>
              </td>
              <td className="text-center">
              {item.students}<i className="material-icons">&#xe7fb;</i>
              </td>
              <td className="text-center">{item.price}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
  )
})
export default Related
