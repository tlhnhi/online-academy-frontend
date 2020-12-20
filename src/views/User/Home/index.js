import React, { useCallback, useRef, useState } from 'react'
import RBCarousel from 'react-bootstrap-carousel'
import { Button, ButtonGroup, Col, Row } from 'shards-react'

const listTopCourses = [
  {
    backgroundImage: require('../../../images/top_courses/python.jpg').default,
    category: 'IT',
    categoryTheme: 'dark',
    author: 'Ardit Sulce',
    authorAvatar: require('../../../images/avatars/1.jpg'),
    title: 'The Python Mega Course: Build 10 Real World Applications',
    body:
      'A complete practical Python course for both beginners & intermediates. Master Python 3 by making 10 amazing Python apps.',
    date: '28 February 2019'
  },
  {
    backgroundImage: require('../../../images/top_courses/react.png'),
    category: 'Web Development',
    categoryTheme: 'info',
    author: 'Maximilian Schwarzmüller',
    authorAvatar: require('../../../images/avatars/2.jpg'),
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    body:
      'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    date: '29 February 2019'
  },
  {
    backgroundImage: require('../../../images/top_courses/postman.png'),
    category: 'Web Development',
    categoryTheme: 'royal-blue',
    author: 'Valentin Despa',
    authorAvatar: require('../../../images/avatars/3.jpg'),
    title: 'Postman: The Complete Guide - REST API Testing',
    body:
      'Postman API testing for manual and automated tests. Automate with Newman, Jenkins or any other CI tool.',
    date: '29 February 2019'
  },
  {
    backgroundImage: require('../../../images/top_courses/react-native.png'),
    category: 'Mobile App Development',
    categoryTheme: 'warning',
    author: 'Maximilian Schwarzmüller',
    authorAvatar: require('../../../images/avatars/2.jpg'),
    title: 'React Native - The Practical Guide [2020 Edition]',
    body:
      'Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux',
    date: '29 February 2019'
  }
]
const listTopViewed = [
  {
    backgroundImage: require('../../../images/top_viewed/leadership.jpg'),
    category: 'Management',
    categoryTheme: 'dark',
    author: 'Lawrence M. Miller',
    authorAvatar: require('../../../images/avatars/1.jpg'),
    title: 'Lean Leadership Skills, Lean Culture & Lean Management',
    body:
      'Leading Change: Lean Culture, Lean Manufacturing, Continuous Improvement & Toyota Production System',
    date: '29 February 2019'
  },
  {
    backgroundImage: require('../../../images/top_viewed/sales.jpg'),
    category: 'Sales',
    categoryTheme: 'info',
    author: 'Lawrence M. Miller',
    authorAvatar: require('../../../images/avatars/1.jpg'),
    title: 'Sales Skills Training: Consultative Selling Master Class',
    body:
      'Sales Training - Professional B2B Selling Skills for Consultants, Entrepreneurs and all Who Bring in the Business!',
    date: '29 February 2019'
  }
]

// bên dưới là source bê nguyên si từ hook-v4 của package này và tạch
// xoá sạch là hết

const styles = { height: 400, width: '100%' }
const icon_glass = <span className="fa fa-glass" />
const icon_music = <span className="fa fa-music" />

function Home() {
  const [autoplay, setAutoplay] = useState(true)
  const [icon, setIcon] = useState({})
  const slider_ref = useRef(null)
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), [])
  const _visiableOnSelect = useCallback(active => {
    console.log(`visiable onSelect active=${active}`)
  }, [])
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`)
  }, [])
  const _changeIcon = useCallback(() => {
    // Icon Switch
    setIcon(({ leftIcon, rightIcon }) => {
      leftIcon = leftIcon ? undefined : icon_glass
      rightIcon = rightIcon ? undefined : icon_music
      return { leftIcon: leftIcon, rightIcon: rightIcon }
    })
  }, [])
  const _slidePrev = useCallback(() => slider_ref.current.slidePrev(), [])
  const _slideNext = useCallback(() => slider_ref.current.slideNext(), [])
  const _goToSlide = useCallback(() => slider_ref.current.goToSlide(1), [])

  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }}>
      <Row>
        <Col span={12} style={{ paddingTop: '20px' }}>
          <ButtonGroup>
            <Button bsStyle="primary" onClick={_slidePrev}>
              Slider prev
            </Button>
            <Button bsStyle="primary" onClick={_slideNext}>
              Slider next
            </Button>
            <Button bsStyle="primary" onClick={_goToSlide}>
              Go to slide 2
            </Button>
          </ButtonGroup>
        </Col>
        <Col span={12} style={{ paddingTop: '20px' }}>
          <ButtonGroup>
            <Button bsStyle="primary" onClick={_changeIcon}>
              Change Icon
            </Button>
            <Button bsStyle="primary" onClick={_autoplay}>
              {autoplay ? 'Stop Autoplay' : 'Start Autoplay'}
            </Button>
          </ButtonGroup>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel
            animation={true}
            autoplay={autoplay}
            slideshowSpeed={2000}
            defaultActiveIndex={0}
            leftIcon={icon.leftIcon}
            rightIcon={icon.rightIcon}
            onSelect={_onSelect}
            ref={slider_ref}
            version={4}
          >
            <div style={{ height: 400 }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://www.w3schools.com/bootstrap/ny.jpg"
                alt=""
              />
              <div className="carousel-caption">Image</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'aqua' }}>
              <video
                className="carousel-center"
                controls
                style={{ width: '75%' }}
                height="250"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption">Video</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'lightpink' }}>
              <div className="carousel-center">center Text</div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'lightblue' }}>
              <span>text</span>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'lightblue' }}>
              <div className="carousel-center">
                <iframe
                  style={{ width: 500 }}
                  height="250"
                  src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                  title="embed"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="carousel-caption">Youtube</div>
            </div>
          </RBCarousel>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel
            autoplay={autoplay}
            pauseOnVisibility={true}
            onSelect={_visiableOnSelect}
            slideshowSpeed={2000}
            version={4}
          >
            <div style={{ ...styles, backgroundColor: 'lightblue' }}>
              <div className="carousel-center">
                <div>This carsouel won't change if invisiable</div>
                <div>pauseOnVisibility = true</div>
              </div>
              <div className="carousel-center"> </div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'lightblue' }}>
              <div className="carousel-center">
                <div>This carsouel won't change if invisiable</div>
                <div>pauseOnVisibility = true</div>
              </div>
              <div className="carousel-caption">Text</div>
            </div>
          </RBCarousel>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel className="carousel-fade" version={4}>
            <div style={{ ...styles, backgroundColor: 'darkcyan' }}>
              <div className="carousel-center">
                This carsouel transition is fade
              </div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: 'yellowgreen' }}>
              <span className="carousel-center">
                This carsouel transition is fade
              </span>
              <div className="carousel-caption">Text</div>
            </div>
          </RBCarousel>
        </Col>
      </Row>
    </div>
  )
}

export default Home
