import React from 'react';
import axios from 'axios';

const Feed = (props) => {
  //   const feed = Object.keys(props.info);
  //   const viewing = 20;
  //     // console.log(props.info);
  //   const items = [];
  //   for (let i = 1; i < viewing; i += 1) {
  //     axios.get(`https://hacker-news.firebaseio.com/v0/item/${feed[i]}.json?print=pretty`)
  //       .then((res) => {
  //         // console.log(res.data);
  //         items.push(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   console.log(items);
  //    console.log(typeof props.info, 'this is props info')
  const toServerA = (ref) => {
    // this.state.stored.push(ref)
    axios.post('http://localhost:3000/save', ref)
      .then((res) => ref)
      .catch((error) => {
        console.log(error);
      });
    console.log(ref);
  };

  return (
    <div>
      <h1>HACKER NEWS FEED</h1>
      {props.info.map((ref) => {
      //   console.log(ref, 'this is ref')
        return (
          <li key={ref.id}>
            {' '}
            ID:
            {' '}
            {ref.id}
            {' '}
            TITLE:
{' '}
            {ref.title}
            {' '}
            BY:
{' '}
            {ref.by}
            {' '}
            <a href={ref.url}>LINK</a>
            <button id={ref.id} onClick={() => toServerA(ref)}>SAVE</button>
          </li>
        );
      })}
    </div>
  );
};

export default Feed;
