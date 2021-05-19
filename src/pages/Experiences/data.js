import React from 'react';

import {
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faReact,
  faAndroid,
  faJava,
  faNodeJs,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faMapMarkerAlt,
  faCalendarAlt,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var colors = {
  python: '#306998',
  html: '#F16529',
  css: '#264de4',
  java: '#f89820',
  javascript: '#F0DB4F',
  sql: '#812878',
  angular: '#b52e31',
  react: '#61dbfb',
  android: '#3DDC84',
  git: '#F1502F',
};

export const experiencesData = [
  {
    company: 'Zebra Technologies',
    image: 'ZebraTechnologies.png',
    title: 'Software Engineer',
    summary:
      `• Developed a Full Stack website for Zebra's test automation engineers to display, analyze, and catagorize device testing data.\n
• Applied React, Express, and PostgreSQL to create a scalable, responsive, and performant solution.\n
• Decreased load time when compared to the previous tool by over 90%.\n
• Maintaned the device farm of 40 test beds and 400 devices by updating test devices, running robot test files, and running weekly stability tests and build upgrades`,
    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Long Island,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> December 2020 - Present{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faPython,
        color: colors.python,
      },
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faCss3,
        color: colors.css,
      },
      {
        icon: faJs,
        color: colors.javascript,
      },
      {
        icon: faDatabase,
        color: colors.sql,
      },
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faFlask,
        color: colors.flask,
      },

    ],
  },
  {
    company: 'Zebra Technologies',
    image: 'ZebraTechnologies.png',
    title: 'Software Engineering Intern',
    summary:
      'Developed a React Dashboard used for analyzing autonomous tests and graphing failure rate, test history, and stack trace data.',
    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Long Island,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> Summer 2020{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faPython,
        color: colors.python,
      },
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faCss3,
        color: colors.css,
      },
      {
        icon: faJs,
        color: colors.javascript,
      },
      {
        icon: faDatabase,
        color: colors.sql,
      },
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faFlask,
        color: colors.flask,
      },
    ],
  },
  {
    company: 'Logos News LLC',
    title: 'Full Stack Developer',
    image: 'LogosNews.svg',

    summary:
      'Completed full stack solutions such as main feed redesign, sharing and reporting articles, endorsing and subscribing to users, displaying user profiles, etc.',
    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Manhattan,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> October 2019 - May 2020{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faAngular,
        color: colors.angular,
      },
      {
        icon: faGitlab,
        color: colors.git,
      },
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faCss3,
        color: colors.css,
      },
      {
        icon: faJs,
        color: colors.javascript,
      },
      {
        icon: faDatabase,
        color: colors.sql,
      },
    ],
  },
  {
    company: 'Yorango',
    image: 'Yorango.png',
    title: 'Full Stack Developer Intern',
    summary:
      'Refactored front end pages by integrating React and React-Redux. Reduced loading time of optimized web-pages by approximately 700%.',
    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Ithaca,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> Summer 2016{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faJava,
        color: colors.html,
      },
      {
        icon: faDatabase,
        color: colors.sql,
      },
      {
        icon: faGithub,
        color: colors.git,
      },
    ],
  },
  {
    company: 'Nibbly',
    image: 'Nibbly.png',
    title: 'Android Developer Intern',
    summary:
      'Designed and implemented features for porting the Nibbly IPhone app over to Android. ',
    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Manhattan,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> Summer 2015{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faAndroid,
        color: colors.react,
      },
      {
        icon: faJava,
        color: colors.java,
      },

      {
        icon: faDatabase,
        color: colors.sql,
      },
    ],
  },
  {
    company: 'Full Stack Academy',
    image: 'FullStackAcademy.png',
    title: 'Full Stack Immersive Boot Camp Student',

    location: (
      <span>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Manhattan,NY
      </span>
    ),
    term: (
      <span>
        {' '}
        <FontAwesomeIcon icon={faCalendarAlt} /> Summer 2019{' '}
      </span>
    ),
    fontColor: '#0061aa',
    technologies: [
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faNodeJs,
        color: colors.java,
      },

      {
        icon: faDatabase,
        color: colors.sql,
      },
      {
        icon: faJs,
        color: colors.javascript,
      },
      {
        icon: faGithub,
        color: colors.git,
      },
      { icon: faCss3, color: colors.css },
      { icon: faHtml5, color: colors.html },
    ],
  },
];
