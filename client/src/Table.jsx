import React from 'react';
import axios from 'axios';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [{id: 1}]
    };
  }

  componentDidMount() {
    const feed = Object.keys(this.props.info);
    const viewing = 20;
    // this.setState({ stories: [] });
    //   console.log(props.info);
    // const items = [];
    for (let i = 1; i < viewing; i += 1) {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${feed[i]}.json?print=pretty`)
        .then((res) => {
          // console.log(res.data);
          this.state.stories.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(this.state.stories)
  }

  render() {
    return (
      <div>
        <h1 id="title" />
        {this.state.stories.map((ref) => {
          <tr key={ref.id}>
            <td>{ref.id}</td>
          </tr>;
        })}
      </div>
    );
  }
}
export default Table;
