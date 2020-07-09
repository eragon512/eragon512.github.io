import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import Media from 'react-bootstrap/Media'

function AboutMe() {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12} sm={6} className="align-middle">
          <img
            height='300rem'
            className="align-self-center rounded-circle"
            src="./images/anirud-samala.jpg"
          />
        </Col>
        <Col xs={12} sm={6} className="d-flex">
          <div className="align-self-center">
            <h1>Anirud Samala</h1>
            <br />
            <h3>PayPal | BITS Pilani Hyderabad</h3>
            <br />
            <p>
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
    {
      image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JFHOMDeVtpCmSAYKPULZJQHaHa%26pid%3DApi&f=1',
      href: 'https://twitter.com/eragon5121',
    },
  ]
  return (
    <div className="text-center">
      {
        media.map(m => (
          <a
            href={m.href}
            target='_blank'
            rel='noopener'
          >
            <img
              height='40vh'
              width='auto'
              className="ml-2 mr-2"
              src={m.image_url}
            />
          </a>
        ))
      }
    </div>
  )
}

function Languages() {
  const decks = [
    {
      cards: [
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
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fqrwtknLZGtLUY_NgPcQmgHaHa%26pid%3DApi&f=1',
          title: 'HTML',
          text: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yUIb5S_kj98Eg5tT-Onx1AHaHa%26pid%3DApi&f=1',
          title: 'CSS',
          text: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML',
        },
      ]
    },
    {
      cards: [
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

        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rlbtbFMlApJ1BvCnA3_aGgHaHa%26pid%3DApi&f=1',
          title: 'PHP',
          text: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages',
        },
      ]
    }
  ]

  return (
    <Container>
      <h2 className="text-center">Languages</h2>
      {
        decks.map(deck => (
          <React.Fragment>
            <br />
            <CardDeck>
              {
                deck.cards.map(card => (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={card.image_url}
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }
            </CardDeck>
          </React.Fragment>
          
        ))
      }
    </Container>
  )
}

function TechStack() {
  const decks = [
    {
      header: 'Modern Web Frameworks',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dE4ObnWQ46TFJp-QbPAkMAHaHa%26pid%3DApi&f=1',
          title: 'React',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
          title: 'Redux',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xQCjgB2DVqhtqGoGw9E6TQHaHa%26pid%3DApi&f=1',
          title: 'Webpack',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDWII8irjJOA__z8bUCsRtI18uxbuSyxMXig&usqp=CAU',
          title: 'Babel',
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
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KVp8XeJoFIqcJ6ZAXr9hVQHaHa%26pid%3DApi&f=1',
          title: 'Material Design',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eCdWRfAuLvNtiqMZb2265QHaHa%26pid%3DApi&f=1',
          title: 'Semantic UI',
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
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FhBSE4-nkTbAR0UhkGtV4gHaHa%26pid%3DApi&f=1',
          title: 'Express.js',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.-YdW3nxMI92DzqzAM2jWowHaHa%26pid%3DApi&f=1',
          title: 'Gulp.js',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      header: 'Testing with JS',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y56JFu8TJrYLUoRFH9_fLQHaHa%26pid%3DApi&f=1',
          title: 'Jest',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gVaDsN0DWqmxMMXfKhh0WAAAAA%26pid%3DApi&f=1',
          title: 'Enzyme',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1heqrUd20J17z8h0hr_QJwAAAA%26pid%3DApi&f=1',
          title: 'Nightwatch.js',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y-t_IajNlbNuX_CAOYsz8gAAAA%26pid%3DApi&f=1',
          title: 'Selenium',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      header: 'Python Libraries/Frameworks',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3HgSI9fFykV9W7bWiDwa0AHaHa%26pid%3DApi&f=1',
          title: 'Django',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tZKxFU0lwHLBBNMxk53WfAHaJh%26pid%3DApi&f=1',
          title: 'Flask',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1uK05cooiYAa0i7OUD3HoQHaDL%26pid%3DApi&f=1',
          title: 'Beautiful Soup 4',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      
      header: 'Java Technologies',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gTqHSIO2_Eu3hn7uafDEoQHaHa%26pid%3DApi&f=1',
          title: 'Spring',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JhbSW67lyfvoZhs3lIosGAHaHa%26pid%3DApi&f=1',
          title: 'Spring Boot',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I4tj14v07do3TYrukBqpugHaHa%26pid%3DApi&f=1',
          title: 'Hibernate',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9E6M5c_9MBN3XWnSn9KEMgAAAA%26pid%3DApi&f=1',
          title: 'Maven',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    },
    {
      header: 'Misc.',
      cards: [
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EawqrtoMDmLsUZKA8_wLSgHaHa%26pid%3DApi&f=1',
          title: 'Git',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwHaHa%26pid%3DApi&f=1',
          title: 'GitHub',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t7fUu4Fb0-0KGLuz4sM7nwHaHa%26pid%3DApi&f=1',
          title: 'Docker',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
        {
          image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iPu26AWD0RxC0Z8rtpEliAHaHa%26pid%3DApi&f=1',
          title: 'Jenkins',
          text: 'This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        },
      ]
    }
  ]
  return (
    <Container>
      <h2 className="text-center">Tech Stack</h2>
      <br />
      {
        decks.map(deck => (
          <React.Fragment>
            <h3 className="text-center">{deck.header}</h3>
            <br />
            <CardDeck>
              {
                deck.cards.map(card => (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={card.image_url}
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }
            </CardDeck>
            <br /><br />
          </React.Fragment>
        ))
      }
    </Container>
  )
}

function OpenSourceContributions() {
  return (
    <Container>
      <h2 className="text-center">Open-Source Contributions</h2>
      <br />
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://camo.githubusercontent.com/0ded3b0835a4ace4664a6833985affbde783ed47/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f303631663041326e3142304833703054317031662f72656163742d7374796c65677569646973742d6c6f676f2e706e67"
          />
          <Card.Body>
            <Card.Title>React Styleguidist</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="bg-dark"
            src="https://probablyup.com/markdown-to-jsx/images/logo.svg"
          />
          <Card.Body>
            <Card.Title>Markdown To JSX</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://camo.githubusercontent.com/e7a14b9a151d9b1d23a0d05dac1af86b0e972714/68747470733a2f2f692e696d6775722e636f6d2f4a497942744b572e706e67"
          />
          <Card.Body>
            <Card.Title>React Native Firebase</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

function WorkExperience() {
  return (
    <Container>
      <h2 className="text-center">Work Experience</h2>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-4"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1"
          alt="PayPal"
        />
        <Media.Body>
          <h4>PayPal</h4>
          <h5>Software Engineer II</h5>
          <h6>2020 - Current</h6>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-4"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1"
          alt="PayPal"
        />
        <Media.Body>
          <h4>PayPal</h4>
          <h5>Software Engineer I</h5>
          <h6>2018 - 2020</h6>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-4"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TBvJQM0YORRyOAY6RwAQkwHaHa%26pid%3DApi&f=1"
          alt="PayPal"
        />
        <Media.Body>
          <h4>PayPal</h4>
          <h5>Software Intern</h5>
          <h6>2018 - 2018</h6>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <img
          height='100rem'
          width='auto'
          className="align-self-center mr-4"
          src="https://m.iotone.com/files/vendor/neebal-technologies-pvt-ltd_1.jpg"
          alt="PayPal"
        />
        <Media.Body>
          <h4>Neebal Technologies</h4>
          <h5>Summer Intern</h5>
          <h6>2017 - 2017</h6>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <img
          height='40rem'
          width='auto'
          className="align-self-center mr-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Sterlite_Technologies_Limited.png"
          alt="PayPal"
        />
        <Media.Body>
          <h4>Sterlite Technologies</h4>
          <h5>Summer Intern</h5>
          <h6>2016 - 2016</h6>
        </Media.Body>
      </Media>
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
  return (
    <Container fluid>
      <br /><br />
      <AboutMe />
      <br /><br />
      <SocialMedia />
      <br /><br />
      <Languages />
      <br /><br />
      <TechStack />
      <br /><br />
      <OpenSourceContributions />
      <br /><br />
      <WorkExperience />
      <br /><br />
      <Education />
    </Container>
    
  )
}

export default App;
