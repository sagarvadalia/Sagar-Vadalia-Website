import {
  faPython,
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faChrome,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import { Icon } from 'semantic-ui-react';
import React from 'react';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

var colors = {
  python: '#306998',

  html: '#F16529',
  css: '#264de4',
  java: '#f89820',
  react: '#659DBD',
  android: '#3DDC84',
  javascript: '#F0DB4F',

  sql: '#812878',
};
export const projectData = [
  {
    projectTitle: 'Capstone project for System Design',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
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

    ],
    projectDescription:
      'Full stack university portal.\n Worked with - React, TypeScript, Javascript, Express, TypeORM and Material UI',
    projectURL: 'https://github.com/sagarvadalia/SystemDesignTypescript',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
      status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'Reddit Clone',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
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
    ],
    projectDescription:
      'Full stack reddit clone.\n Worked with - React, TypeScript, GraphQL, URQL/Apollo, PostgreSQL, MikroORM/TypeORM, Redis, Next.js, TypeGraphQL, Chakra',
    projectURL: 'https://github.com/sagarvadalia/reddit-graphql',
    type: (
      <span>
        <Icon name="user" color={'black'} style={{ 'margin-right': '5px' }} />
        Solo Project
      </span>
    ),
    status: (
      <span>
        <Icon name="cog" color={'yellow'} style={{ 'margin-right': '5px' }} />
        Work in Progress
      </span>
    ),
  },

  {
    projectTitle: 'Snipt',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
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
    ],
    projectDescription:
      'Capstone project for Fullstack Academy. Website designed for lifelong learners.',
    projectURL: 'https://github.com/pitsprotectors/snipt',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'Snipt Chrome Extension',
    projectIcons: [
      {
        icon: faChrome,
        color: colors.python,
      },
      {
        icon: faReact,
        color: colors.react,
      },
      { icon: faHtml5, color: colors.html },
      { icon: faCss3, color: colors.css },
      { icon: faJs, color: colors.javascript },
    ],
    projectDescription:
      'Capstone project for Full Stack Academy. Chrome Learning Extension.',
    projectURL: 'https://github.com/pitsprotectors/sniptChromeExt',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'Superlike',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faCss3,
        color: colors.css,
      },
      { icon: faHtml5, color: colors.html },
      { icon: faJs, color: colors.javascript },
      {
        icon: faDatabase,
        color: colors.sql,
      },
    ],
    projectDescription:
      'Eccomerce website built as a demonstration of full stack development capabilities',
    projectURL: 'https://github.com/barrysmagnificantfireflies/Superlike',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'sagarvadalia.com',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
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
    ],
    projectDescription: 'My personal website. Feel free to use this!',
    projectURL: 'https://github.com/Sagar-Vadalia/Sagar-Vadalia-website',
    type: (
      <span>
        <Icon name="user" color={'black'} style={{ 'margin-right': '5px' }} />
        Solo Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="cog"
          loading
          color={'yellow'}
          style={{ 'margin-right': '5px' }}
        />
        Work in Progress
      </span>
    ),
  },
  {
    projectTitle: 'Stock Calculator',
    projectIcons: [
      {
        icon: faReact,
        color: colors.react,
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
    ],
    projectDescription:
      'Stock analyzer Full Stack Application that returns top stocks based on cap-size, price/earnings ratio, and return on capital invested.',
    projectURL: 'https://github.com/sagarvadalia/StockCalculator',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="cog"
          loading
          color={'yellow'}
          style={{ 'margin-right': '5px' }}
        />
        Work in Progress
      </span>
    ),
  },
  {
    projectTitle: 'Learning Django',
    projectIcons: [
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
    ],
    projectDescription:
      'Website built using Django. Primarily used for learning.',
    projectURL: 'https://github.com/sagarvadalia/learningDjango',
    type: (
      <span>
        <Icon name="user" color={'black'} style={{ 'margin-right': '5px' }} />
        Solo Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'Machine Learning Introduction',
    projectIcons: [
      {
        icon: faPython,
        color: colors.python,
      },
    ],
    projectDescription:
      'Project that analyzes basic data from excel spreadsheats and uses machine learning to make basic inferences. Primarily used for learning.',
    projectURL: 'https://github.com/sagarvadalia/MachineLearningIntro',
    type: (
      <span>
        <Icon name="user" color={'black'} style={{ 'margin-right': '5px' }} />
        Solo Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
  {
    projectTitle: 'Instagram Clone',
    projectIcons: [{ icon: faAndroid, color: colors.android }],
    projectDescription:
      'A basic implementation of the UI of Instagram. Primarily used as a learning experience.',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },

  {
    projectTitle: 'Dodge',
    projectIcons: [
      {
        icon: faJava,
        color: colors.java,
      },
    ],
    projectDescription: 'A basic game where the user avoids enemy objects.',
    projectURL: 'https://github.com/imtiazrayman/Dodge',
    type: (
      <span>
        <Icon name="users" color={'black'} style={{ 'margin-right': '5px' }} />
        Collaborative Project
      </span>
    ),
    status: (
      <span>
        <Icon
          name="thumbs up outline"
          color={'green'}
          style={{ 'margin-right': '5px' }}
        />
        Completed
      </span>
    ),
  },
];
