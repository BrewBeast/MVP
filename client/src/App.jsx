import React from 'react';
import axios from 'axios';
import Feed from './Feed.jsx';
import Saved from './Saved.jsx';
import Table from './Table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      info: [],
      storage: {},
      stored: [],
    };
  }


  componentDidMount() {
    //GETTING ARTICLES FROM HACKER NEWS
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((res) => {
      // console.log(res.data);
        this.setState({ list: res.data });
        const feed = Object.keys(this.state.list);
        // console.log(feed);
        const viewing = 20;
        //   console.log(props.info);
        const items = [];
        for (let i = 1; i < viewing; i += 1) {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${feed[i]}.json?print=pretty`)
            .then((res) => {
              // console.log(res.data);
              items.push(res.data);
              this.setState({ info: items });
            //   console.log(items)
            //   console.log(this.state.info, 'this is info');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
      //SAVED LIST
      axios.get('/saved')
      .then((res) => {
      console.log(res.data);
      this.setState({ stored: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  refresh() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((res) => {
      // console.log(res.data);
        this.setState({ list: res.data });
        const feed = Object.keys(this.state.list);
        // console.log(feed);
        const viewing = 20;
        //   console.log(props.info);
        const items = [];
        for (let i = 1; i < viewing; i += 1) {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${feed[i]}.json?print=pretty`)
            .then((res) => {
            //   console.log(res.data);
              items.push(res.data);
              this.setState({ info: items });
            //   console.log(items)
            //   console.log(this.state.info, 'this is info');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

  render() {
    return (
      <div>
        <Feed info={this.state.info} />
        <button type="button" onClick={() => this.refresh()}>REFRESH</button>
        <Saved info={this.state.stored}/>
        {/* <Table info={this.state.info}></Table> */}
      </div>
    );
  }
}
export default App;
