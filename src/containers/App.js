import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

function AboutMe() {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12} sm={6} className="align-middle">
          <img
            height='250vh'
            className="align-self-center rounded-circle"
            src="./images/anirud-samala.jpg"
            alt="Anirud Samala"
          />
        </Col>
        <Col xs={12} sm={6} className="d-flex">
          <div className="align-self-center">
            <h1>Anirud Samala</h1>
            <h3>Rubrik | PayPal | BITS Pilani Hyderabad</h3>
            <br />
            <p>
              anirud.samala@gmail.com <br /><br />
              Hey there, I am Anirud Samala, and this is my Resume Website! <br />
              I love sleeping, anime and more sleeping. <br />
              Oh, and sometimes, I write code.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function MinimiseToggle(props) {
  const {
    isMinimised,
    setMinimised
  } = props

  const label = isMinimised ? 'Switch to Full View' : 'Switch to Minimal View'

  return (
    <Container>
      <Row>
        <Col xs={3} md={8}></Col>
        <Col xs={9} md={4}>
          <Form.Switch
            id="minimise-toggle"
            label={label}
            checked={!isMinimised}
            onChange={() => setMinimised(!isMinimised)}
          />
        </Col>
      </Row>
      
    </Container>
  )

}

function SocialMedia() {
  const media = [
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwHaHa%26pid%3DApi&f=1',
      href: 'https://github.com/eragon512/',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.u2sC-2MIF2yTRz2dN9flTAHaHa%26pid%3DApi&f=1',
      href: 'https://www.linkedin.com/in/anirudsamala/',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.642fsdn5O69xRRNQdHaCJwHaHa%26pid%3DApi&f=1',
      href: 'https://www.facebook.com/anirud.samala.9/',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jMgVcg68z6NMrL90xT1lfgHaHa%26pid%3DApi&f=1',
      href: 'https://wa.me/917660992289',
    },
  ]
  return (
    <div className="text-center">
      {
        media.map(m => (
          <a
            href={m.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              height='40vh'
              width='auto'
              className="ml-2 mr-2"
              src={m.image_url}
              alt=""
            />
          </a>
        ))
      }
    </div>
  )
}

function Languages(props) {
  const cards = [
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Dk_c6Kwi4JaIxYDlvE3NfQHaHa%26pid%3DApi&f=1',
      title: 'JavaScript',
      text: [
        "JavaScript® (often shortened to JS) is a",
        "lightweight, interpreted, object-oriented language with first-class functions.\n",
        "It is best known as the scripting language for Web pages",
      ].join(' '),
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Ftypescript-1174965.png&f=1&nofb=1',
      title: 'TypeScript',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fqrwtknLZGtLUY_NgPcQmgHaHa%26pid%3DApi&f=1',
      title: 'HTML',
      text: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yUIb5S_kj98Eg5tT-Onx1AHaHa%26pid%3DApi&f=1',
      title: 'CSS',
      text: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wpCkQ7PyQHMiUqgT1KbPZQHaHa%26pid%3DApi&f=1',
      title: 'Python',
      text: 'Python is an interpreted, high-level, general-purpose programming language.',
    },
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.q-jmfnoGUSAJVTwsvuZ3dQHaHa%26pid%3DApi&f=1',
      title: 'Java',
      text: 'Java is a high-level programming language, which runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX.',
    },
  ]

  const {
    isMinimised,
  } = props

  if(isMinimised) {
    return (
      <Container className='text-center'>
        <h2 className="text-center">Languages</h2>
        <br />
        <ListGroup horizontal='md' className='justify-content-center'>
          {
            cards.map(card => (
              <ListGroup.Item>
                <img
                  height='50vw'
                  width='auto'
                  src={card.image_url}
                  alt={card.title}
                /> &nbsp;
                {card.title}
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </Container>
    )
  }

  return (
    <Container>
      <h2 className="text-center">Languages</h2>
      <br />
      <Row>
        {
          cards.map(card => (
            <Col xs={12} sm={4} lg={2}>
              <div className='text-center'>
                <img
                  height='150vh'
                  width='auto'
                  className=''
                  src={card.image_url}
                  alt={card.title}
                />
              </div>
              <br />
              <h5 className='text-center'>{card.title}</h5>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

function TechStack(props) {
  const decks = [
    {
      header: 'Modern Web Frameworks',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dE4ObnWQ46TFJp-QbPAkMAHaHa%26pid%3DApi&f=1',
          title: 'React',
          tags: ['ui', 'frontend', 'component', 'javascript'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5_MqPhxTjvOHsqv1pV1UaAHaHa%26pid%3DApi&f=1',
          title: 'GraphQL',
          tags: ['api'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xQCjgB2DVqhtqGoGw9E6TQHaHa%26pid%3DApi&f=1',
          title: 'Webpack',
          tags: ['bundler', 'build-tool'],
        },
        {
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDWII8irjJOA__z8bUCsRtI18uxbuSyxMXig&usqp=CAU',
          title: 'Babel',
          tags: ['es6', 'javascript'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      header: 'Responsive Styling Libraries',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vtMN36XUNOgnx3WsmjsNOAHaHa%26pid%3DApi&f=1',
          title: 'Bootstrap 4',
          tags: ['responsive-ui', 'css-framework'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KVp8XeJoFIqcJ6ZAXr9hVQHaHa%26pid%3DApi&f=1',
          title: 'Material Design',
          tags: ['design-system', 'responsive-ui', 'android'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eCdWRfAuLvNtiqMZb2265QHaHa%26pid%3DApi&f=1',
          title: 'Semantic UI',
          tags: ['ui-components', 'responsive-ui', 'css-framework'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      header: 'Server-side JS Frameworks',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HF4H8zCH00t3ulbke_6GlgHaHa%26pid%3DApi&f=1',
          title: 'Node.js',
          tags: ['server-side', 'javascript'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FhBSE4-nkTbAR0UhkGtV4gHaHa%26pid%3DApi&f=1',
          title: 'Express.js',
          tags: ['api', 'REST', 'node', 'javascript'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.-YdW3nxMI92DzqzAM2jWowHaHa%26pid%3DApi&f=1',
          title: 'Gulp.js',
          tags: ['task-runner', 'build-tool'],
        },
      ]
    },
    {
      header: 'Testing with JS',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y56JFu8TJrYLUoRFH9_fLQHaHa%26pid%3DApi&f=1',
          title: 'Jest',
          tags: ['testing', 'test-runner', 'browser'],
        },
        {
          image_url: 'https://testing-library.com/img/logo-large.png',
          title: 'React Testing Library',
          tags: ['unit-testing', 'browser', 'react-components', ],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1heqrUd20J17z8h0hr_QJwAAAA%26pid%3DApi&f=1',
          title: 'Nightwatch.js',
          tags: ['end-to-end-testing', 'selenium'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y-t_IajNlbNuX_CAOYsz8gAAAA%26pid%3DApi&f=1',
          title: 'Selenium',
          tags: ['browser', 'automation'],
        },
      ]
    },
    {
      header: 'Python Libraries/Frameworks',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3HgSI9fFykV9W7bWiDwa0AHaHa%26pid%3DApi&f=1',
          title: 'Django',
          tags: ['webapp', 'python'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://www.pegasusone.com/wp-content/uploads/2019/04/flask-2.png',
          title: 'Flask',
          tags: ['lightweight', 'REST', 'api'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1uK05cooiYAa0i7OUD3HoQHaDL%26pid%3DApi&f=1',
          title: 'BeautifulSoup',
          tags: ['scraping', 'parser', 'data', 'web'],
        },
      ]
    },
    {
      header: 'Java Technologies',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gTqHSIO2_Eu3hn7uafDEoQHaHa%26pid%3DApi&f=1',
          title: 'Spring',
          tags: ['inversion-control', 'IOC', 'beans', 'java'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JhbSW67lyfvoZhs3lIosGAHaHa%26pid%3DApi&f=1',
          title: 'Spring Boot',
          tags: ['REST', 'api', 'spring'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I4tj14v07do3TYrukBqpugHaHa%26pid%3DApi&f=1',
          title: 'Hibernate',
          tags: ['ORM', 'database', 'jdbc'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9E6M5c_9MBN3XWnSn9KEMgAAAA%26pid%3DApi&f=1',
          title: 'Maven',
          tags: ['dependency-manager', 'java'],
        },
      ]
    },
    {
      header: 'Database Systems',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JVt34lGxmm0GAGNNL_mwBgHaHa%26pid%3DApi&f=1',
          title: 'MySQL',
          tags: ['open-source', 'relational', 'sql'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pCy4LUtFSpZ_EDl56TKYPADtEH%26pid%3DApi&f=1',
          title: 'PostgreSQL',
          tags: ['relational', 'sql'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ug9uYXOWDxE6JM8x7qr8ZQAAAA%26pid%3DApi&f=1',
          title: 'MongoDB',
          tags: ['nosql', 'json'],
        }
      ]
    },
    {
      header: 'Misc.',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EawqrtoMDmLsUZKA8_wLSgHaHa%26pid%3DApi&f=1',
          title: 'Git',
          tags: ['version-control', 'open-source'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sV7tva-728oySeOUL0-vOwHaHa%26pid%3DApi&f=1',
          title: 'GitHub',
          tags: ['open-source', 'git', 'cloud'],
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t7fUu4Fb0-0KGLuz4sM7nwHaHa%26pid%3DApi&f=1',
          title: 'Docker',
          tags: ['container', 'deploy', 'virtualised'],
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iPu26AWD0RxC0Z8rtpEliAHaHa%26pid%3DApi&f=1',
          title: 'Jenkins',
          tags: ['ci', 'build'],
        },
      ]
    }
  ]

  const {
    isMinimised,
  } = props

  if(isMinimised) {
    return (
      <Container>
        <h2 className="text-center">Tech Stack</h2>
        <br />
        <Row>
          {
              decks.map(deck => (
                <Col xs={6} sm={4} md={3}>
                  <ListGroup>
                    {
                      deck.cards.map(card => (
                        <ListGroup.Item>
                          <img
                            height='40vw'
                            width='auto'
                            src={card.image_url}
                            alt={card.title}
                          /> &nbsp;
                          {card.title}
                        </ListGroup.Item>
                      ))
                    }
                  </ListGroup>
                  <br />
                </Col>
              ))
            }
        </Row>
        
      </Container>
    )
  }


  return (
    <Container className="text-center">
      <h2 className="text-center">Tech Stack</h2>
      <br />
      {
        decks.map(deck => (
          <React.Fragment>
            <Row>
              {
                deck.cards.map(card => (
                  <Col
                    xs={12}
                    sm={12 / deck.cards.length}
                    className='text-center'
                    height='100vh'
                  >
                    <img
                      height='150vw'
                      width='auto'
                      className='mb-2'
                      src={card.image_url}
                      alt={card.title}
                    />
                    <h5 className='text-center'>{card.title}</h5>
                    {
                      [].concat(card.tags).filter(tag => tag).map(tag => (
                        <Button
                          variant='dark'
                          size='sm'
                          className='mb-3 mr-2 bg-transparent text-dark rounded-pill'
                        >
                          {tag}
                        </Button>
                      ))
                    }
                    <br />
                  </Col>
                ))
              }
            </Row>
            <br />
          </React.Fragment>
        ))
      }
    </Container>
  )
}

function OpenSourceContributions(props) {
  const cards = [
    {
      image_url: 'https://camo.githubusercontent.com/0ded3b0835a4ace4664a6833985affbde783ed47/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f303631663041326e3142304833703054317031662f72656163742d7374796c65677569646973742d6c6f676f2e706e67',
      title: 'React Styleguidist',
      tags: ['react', 'styleguide', 'documentation'],
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
    },
    {
      image_url: 'https://probablyup.com/markdown-to-jsx/images/logo.svg',
      class: 'bg-dark',
      title: 'Markdown To JSX',
      tags: ['markdown', 'jsx', 'react'],
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
    },
    {
      image_url: 'https://camo.githubusercontent.com/e7a14b9a151d9b1d23a0d05dac1af86b0e972714/68747470733a2f2f692e696d6775722e636f6d2f4a497942744b572e706e67',
      title: 'React Native Firebase',
      tags: ['analytics', 'react-native', 'firebase'],
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
    },
  ]

  const {
    isMinimised,
  } = props

  if (isMinimised) {
    return (
      <Container className='text-center'>
        <h2 className="text-center">Languages</h2>
        <br />
        <ListGroup horizontal='sm' className='justify-content-center'>
          {
            cards.map(card => (
              <ListGroup.Item>
                <img
                  height='100vw'
                  width='auto'
                  className={card.class}
                  src={card.image_url}
                  alt={card.title}
                /> &nbsp;
                {card.title}
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </Container>
    )
  }

  return (
    <Container>
      <h2 className="text-center">Open-Source Contributions</h2>
      <br />
      <Row>
        {
          cards.map(card => (
            <Col xs={12} sm={4} className='text-center'>
              <div >
                <img
                  height='200rem'
                  width='auto'
                  className={['align-self-center'].concat(card.class).join(' ')}
                  src={card.image_url}
                  alt={card.title}
                />
              </div>
              <br />
              <h4 className='text-center'>
                {card.title} <br />
              </h4>
              {
              card.tags.map(tag => (
                <Button
                  variant='dark'
                  size='sm'
                  className='mb-3 mr-2 bg-transparent text-dark rounded-pill'
                >
                  {tag}
                </Button>
              ))
            }
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

function WorkExperienceItem({companyLogoUrl, companyName, role, duration}) {
  return (
    <Media>
      <img
        height='100rem'
        width='auto'
        className="align-self-center mr-4"
        src={companyLogoUrl}
        alt={companyName}
      />
      <Media.Body>
        <h4>{companyName}</h4>
        <h5>{role}</h5>
        <h6>{duration}</h6>
      </Media.Body>
    </Media>
  )
}

function WorkExperience() {
  return (
    <Container>
      <h2 className="text-center">Work Experience</h2>
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Pt0dcASj_JupozaC7rK6DwHaHa%26pid%3DApi&f=1'
        companyName='Rubrik'
        role='Frontend Engineer'
        duration='2021 - Current'
      />
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1'
        companyName='PayPal'
        role='Software Engineer II'
        duration='2020 - 2021'
      />
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1'
        companyName='PayPal'
        role='Software Engineer II'
        duration='2020 - 2021'
      />
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1'
        companyName='PayPal'
        role='Software Engineer I'
        duration='2018 - 2020'
      />
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1'
        companyName='PayPal'
        role='Software Engineer Intern'
        duration='2018 - 2018'
      />
      <br />
      <WorkExperienceItem
        companyLogoUrl='https://m.iotone.com/files/vendor/neebal-technologies-pvt-ltd_1.jpg'
        companyName='Neebal'
        role='Summer Intern'
        duration='2017 - 2017'
      />
    </Container>
  )
}

function Education() {
  return (
    <Container>
      <h2 className="text-center">Education</h2>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-5"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yOwW75YvSLLzLOuGKmZSRwHaHa%26pid%3DApi&f=1"
          alt="BITS Pilani Hyderabad Campus"
        />
        <Media.Body>
          <h4>BITS Pilani Hyderabad Campus</h4>
          <h5>Bachelor of Engineering (B.E. Hons.), Computer Science</h5>
          <h6>2014 - 2018</h6>
          <p>CGPA: 8.2</p>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-5"
          src="./images/apeejay-kharghar.jpg"
          alt="Apeejay School, Kharghar"
        />
        <Media.Body>
          <h4>Apeejay School, Kharghar</h4>
          <h6>2010 - 2014</h6>
          <p>
            Class XII Percentage: 96.4% <br />
            Class X CGPA: 10.0
          </p>
        </Media.Body>
      </Media>
    </Container>
  )
}

function App() {

  const [isMinimised, setMinimised] = useState(false)
  
  return (
    <Container fluid>
      <br />
      <MinimiseToggle
        isMinimised={isMinimised}
        setMinimised={setMinimised}
      />
      <br />
      <AboutMe />
      <br /><br />
      <SocialMedia />
      <br /><br />
      <Languages isMinimised={isMinimised} />
      <br /><br />
      <TechStack isMinimised={isMinimised} />
      <br /><br />
      <OpenSourceContributions isMinimised={isMinimised} />
      <br /><br />
      <WorkExperience />
      <br /><br />
      <Education />
    </Container>
  )
}

export default App;
