import React, { memo, useState } from 'react'
import { Card, CardBody, CardHeader } from 'shards-react'

const Feedback = memo(() => {
  const feedbackList = [
    {
      name: 'Yulia Lantzberg',
      avatar: require('../../../../images/avatars/1.jpg').default,
      date: '2 months ago',
      fullStar: 5,
      halfStar: 0,
      review:
        "This is a third course I've taken from Max and again amazing. Everything is explained in depth and clear. Through out a course we build interesting project where implement all concepts that are explained in theory."
    },
    {
      name: 'Rob Arbittier',
      avatar: require('../../../../images/avatars/3.jpg').default,
      date: '4 months ago',
      fullStar: 4,
      halfStar: 1,
      review:
        "It was great. Occasionally got overly complicated and seemed to show a way to do things that weren't the simplest, most logical way. But great overall."
    },
    {
      name: 'Fachreza Ghifary',
      avatar: require('../../../../images/avatars/0.jpg').default,
      date: '2 months ago',
      fullStar: 5,
      halfStar: 0,
      review:
        'Seriously this course is next level, i ve seen several instructors structuring and styling there codes. but not like max. i often uses this course as my notes if i forgetting some. but overall this course really covers react very very deep that could makes you an expert in react'
    },
    {
      name: 'Nathan Reidy',
      avatar: require('../../../../images/avatars/2.jpg').default,
      date: '4 months ago',
      fullStar: 1,
      halfStar: 0,
      review:
        "This is a very terrible course for learning React. I have no idea how/why it has received the ratings it has. The lecturer tries hard, but he makes the same errors that all coders who try to teach inevitably make - they have no idea how students actually learn, and they suck at actually teaching. All this guy does is write a bunch of code, without even explaining what he's about to do before he does it. He never even explains why he's doing it, and there are practically no exercises for students to practice by themselves. There's simply no way for students to adequately learn react by completing this course. You will get to the end of the course and realise you've learned nothing and just wasted 40 hours listening to this guy speak/code by himself. He provides no context for doing what he's doing, and in effect you just watch him code the whole time - it's crap. To make things worse, the lecturer explains every single way under the sun to accomplish one thing. This is a terrible way to teach react. Students have a difficult enough time learning one thing - they don't need to know 10 ways to do the same thing. What he should have done is explain the BEST way of doing it, then append the other ways in bonus modules at the end of the course so as to not confuse students. Instead, he lumps everything in at the same time. The value of having a teacher is supposed to be to iron out all this crap and curate it nicely, which this guy fails to do. To make things worse, it is impossible to follow along on your own computer, because he comments out and in again all the different ways you can write this stupid code. He doesn't even bother to explain why he's doing this. It's such a massive waste of time. The projects he chooses also suck. Why would you chose a blog post that looks literally like a 5 year old made it? None of your students would be interested in such a project, nor do they care about a burger builder. Everything this guy does can be learned for free elsewhere on the internet, much better. Disappointed, but pretty typical coding course by Udemy's poor standards."
    },
    {
      name: 'Charles',
      avatar: require('../../../../images/avatars/4.jpg').default,
      date: 'a months ago',
      fullStar: 4,
      halfStar: 0,
      review:
        "Lots of great content, unfortunately there's almost TOO much distracting bonus content, making the course much harder to get through the core concepts. Also heavy use of class based components and only hooks used at the end, making a lot of the content out of date. That being said, if you get through it all, you will learn a ton about React."
    }
  ]
  const [feedback] = useState(feedbackList)
  return (
    <div className="mt-3 mx-auto" style={{ width: `800px` }}>
      <h4 className="card-title text-fiord-blue">Feedback</h4>
      <Card small className="card-post mb-4">
        {feedback.map((item, idx) => (
          <div>
            <CardHeader className="border-bottom border-top d-flex">
              <div className="card-post__author d-flex">
                <span
                  className="card-post__author-avatar card-post__author-avatar--small"
                  style={{
                    backgroundImage: `url(${item.avatar})`,
                }}
                > </span>
                <div className="d-flex flex-column justify-content-center ml-3">
                  <span className="card-post__author-name">{item.name}</span>
                  <small className="text-muted">{item.date}</small>
                </div>
              </div>
              <div className="my-auto ml-auto text-warning">
                {[...Array(item.fullStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe838;
                  </i>
                ))}
                {[...Array(item.halfStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe839;
                  </i>
                ))}
                {[...Array(5 - item.fullStar- item.halfStar)].map((_, idx) => (
                  <i className="material-icons" key={idx}>
                    &#xe83a;
                  </i>
                ))}
              </div>
            </CardHeader>
            <CardBody className="border-bottom">
              <p className="card-text text-muted">
                {item.review}
              </p>
            </CardBody>
          </div>
        ))}
      </Card>
    </div>
  )
})
export default Feedback
