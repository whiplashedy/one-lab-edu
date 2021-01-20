import './App.css';
import {Component} from "react";
import {Table} from "./Table"

class App extends Component {
  state = {
    characters: [
      {
        name: 'Arystan',
        job: 'Intern'
      },
      {
        name: 'Kalimovasdasdasd',
        job: 'Janitorasdasdasdasdasd'
      },
      {
        name: 'Kalimovqweqweqqweqweqewqqwe',
        job: 'Janitorqweqweqweqweqweqweqweqewqweqwe'
      },
      {
        name: 'Kalimovzxczxczxczxczxczxczzxczxczxczxczxczxczxc',
        job: 'Janitorzxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczcx'
      }
    ],
  }
  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  render() {
    const { characters } = this.state

    return (
        <div className="full-container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
    )
  }
}

export default App;
