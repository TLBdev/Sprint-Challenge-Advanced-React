import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CardList from './components/cardlist'

class App extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.mounted = true
    if (this.mounted) {
      axios.get(`http://localhost:5000/api/players`)
        .then(res => {
          console.log(res)
          this.setState({
            data: res.data
          })
        }
        )
    }
  }
  componentWillUnmount() {
    this.mounted = false
  }
  render() {
    return (
      <div>
        <CardList data={this.state.data} />
      </div>
    )
  }

}

export default App;
