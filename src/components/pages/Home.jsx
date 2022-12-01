import React from 'react';
import request from '../../../RequestEndPoint';
import Row from '../Row';
import Main from './Main';

function Home() {
  return (
    <div>
      <Main />
      <Row rowId="1" title="UpComing" fetchUrl={request.upcoming} />
      <Row rowId="2" title="Popular" fetchUrl={request.popular} />
      <Row rowId="3" title="Trending" fetchUrl={request.trending} />
      <Row rowId="4" title="TopRated" fetchUrl={request.topRated} />
    </div>
  );
}

export default Home;
