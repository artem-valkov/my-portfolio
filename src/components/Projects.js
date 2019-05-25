import React from 'react';
import Background from './styled/ProjectsBackground'
import Case from './styled/ProjectCase';

const cases = [
  {
    id: "1",
    title: "Tic-Tac-Toe VanillaJS",
    technologies: "Javascript, HTML, CSS",
    sourceLink: "https://github.com/artem-valkov/tic-tac-toe",
    ghLink: "https://artem-valkov.github.io/tic-tac-toe"
  },
  {
    id: "2",
    title: "Tic-Tac-Toe VanillaJS",
    technologies: "Javascript, HTML, CSS",
    sourceLink: "https://github.com/artem-valkov/tic-tac-toe",
    ghLink: "https://artem-valkov.github.io/tic-tac-toe"
  },
  {id: "3",
    title: "Tic-Tac-Toe ReactJS",
    technologies: "React",
    sourceLink: "https://github.com/artem-valkov/tic-tac-toe-react",
    ghLink: "https://artem-valkov.github.io/tic-tac-toe-react"
  },
  {
    id: "4",
    title: "TODO-List VanillaJS",
    technologies: "Javascript, HTML, CSS",
    sourceLink: "https://github.com/artem-valkov/todo-list",
    ghLink: "https://artem-valkov.github.io/todo-list"
  },
]

export default class Projects extends React.Component {
  render() {
    return (
      <Background>
        {
          cases.map(item => {
            return <Case key={item.id}> <br/>  <h3> {item.title} </h3> <div> Technologies: {item.technologies}</div> <br /> <li> <a href={item.sourceLink} target="_blank"  rel="noopener noreferrer"> Source code </a></li> <br /> <li> <a href={item.ghLink}> Git-hub page </a></li> </Case>
        })
        }
      </Background>
    );
  }
}

