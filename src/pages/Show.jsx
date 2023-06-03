import React from 'react';
import Row from '../components/row/Row';
import api from '../components/api/Api';
import Banner from '../components/banner/Banner';

const Show = () => {
  return (
    <div>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={api.fetchTrending} />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
      <Row title="Documentry Movies" fetchUrl={api.fetchDocumentaries} />
    </div>
  )
}

export default Show;