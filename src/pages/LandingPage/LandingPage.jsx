import React from 'react';
import './LandingPage.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {
  Grid,
  Transition,
  Header,
  Button,
  Icon,
  Container,
  Image,
} from 'semantic-ui-react';
import { Component } from 'react';

export default class LandingPage extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({ open: true });
  }

  visitLink = (url) => {
    window.open(url, '_blank');
  };

  render() {
    var icons = [
      // {
      //   icon: (
      //     <Icon size={'huge'} name="file pdf" style={{ color: '#0077B5' }} />
      //   ),
      //   background: 'white',
      //   url:
      //     'https://drive.google.com/file/d/10x1PxPh9_1WUFocRLxZYRYZ4b-LuFuoZ/view',
      // },

      {
        icon: (
          <Icon size={'huge'} name="linkedin" style={{ color: '#0077B5' }} />
        ),
        background: 'white',
        url: 'https://www.linkedin.com/in/sagarvadalia',
      },

      {
        icon: (
          <Icon
            size={'huge'}
            name="github alternate"
            style={{ color: 'black' }}
          />
        ),
        background: 'white',
        url: 'https://github.com/sagarvadalia',
      },
    ];
    let aboutMe =
      "Hi, I am Sagar Vadalia, a software engineering intern currently at Zebra Technologies. I am graduating in December with a Bachelor's Degree from the Computer Science department at Suny Old Westbury. In my free time, I love to read, cook, and play ultimate frisbee. I also love tech! If you'd like to chat about tech, reach out to me at my email sv344@cornell.edu! I'd love to chat about new innovations, fun side projects, user interface design, or anything else!";
    var iconsMobile = [
      // {
      //   icon: (
      //     <Icon size={'big'} name="file pdf" style={{ color: '#0077B5' }} />
      //   ),
      //   background: 'white',
      //   url: 'https://www.scribd.com/document/467575505/Sagar-Va-Dalia-Resume',
      // },
      {
        icon: <Icon size={'big'} name="fa-file" style={{ color: '#0077B5' }} />,
        background: 'white',
        url: 'https://www.linkedin.com/in/sagarvadalia',
      },

      {
        icon: (
          <Icon
            size={'big'}
            name="github alternate"
            style={{ color: 'black' }}
          />
        ),
        background: 'white',
        url: 'https://github.com/sagarvadalia',
      },
    ];

    var iconsArray = icons.map((data) => {
      return (
        <Button
          onClick={() => this.visitLink(data.url)}
          className="socialButton"
          icon
          circular
          style={{ backgroundColor: data.background }}
        >
          {data.icon}
        </Button>
      );
    });

    var iconsMobileArray = iconsMobile.map((data) => {
      return (
        <Button
          onClick={() => this.visitLink(data.url)}
          className="socialButton"
          icon
          circular
          style={{ backgroundColor: data.background }}
        >
          {data.icon}
        </Button>
      );
    });

    return (
      <Grid padded={'vertically'} className="landingPageGrid">
        <SiteHeader></SiteHeader>
        <Grid.Row className="landingPageMainRow">
          <Grid.Column
            only={'tablet computer'}
            textAlign={'center'}
            verticalAlign={'top'}
            width={16}
            style={{ 'margin-top': '25px' }}
          >
            <Transition
              animation="fade down"
              duration={500}
              visible={this.state.open}
            >
              <Image
                className="profile"
                centered
                size={'medium'}
                src={require('./assets/Sagar.jpg')}
                style={{ 'border-radius': '50%' }}
              />
            </Transition>

            <Transition
              animation="fade down"
              duration={500}
              visible={this.state.open}
            >
              <Header className="nameHeader">Sagar Vadalia</Header>
            </Transition>

            <Transition
              animation="fade down"
              duration={700}
              visible={this.state.open}
            >
              <Header as="h3" className="titleHeader">
                Aspiring Full Stack Engineer
              </Header>
            </Transition>
            <Transition
              animation="fade down"
              duration={500}
              visible={this.state.open}
            >
              <Container className="aboutMe" text>
                {aboutMe}
              </Container>
            </Transition>
            <Transition
              animation="zoom"
              duration={500}
              visible={this.state.open}
            >
              <Container>{iconsArray}</Container>
            </Transition>
          </Grid.Column>

          <Grid.Column
            only={'mobile'}
            textAlign={'center'}
            verticalAlign={'top'}
            width={16}
            style={{ 'margin-top': '25px' }}
          >
            <Transition
              animation="fade down"
              duration={500}
              visible={this.state.open}
            >
              <Image
                className="profile"
                centered
                size={'medium'}
                src={require('./assets/Sagar.jpg')}
                style={{ 'border-radius': '50%' }}
              />
            </Transition>

            <Transition
              animation="fade down"
              duration={500}
              visible={this.state.open}
            >
              <Header className="nameHeader">Sagar Vadalia</Header>
            </Transition>

            <Transition
              animation="fade down"
              duration={700}
              visible={this.state.open}
            >
              <Header as="h3" className="titleHeader">
                Aspiring Software Engineer
              </Header>
            </Transition>

            <Transition
              animation="zoom"
              duration={500}
              visible={this.state.open}
            >
              <Container>{iconsMobileArray}</Container>
            </Transition>
          </Grid.Column>
        </Grid.Row>
        <Footer></Footer>
      </Grid>
    );
  }
}
