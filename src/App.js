import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./App.css";
import axios from 'axios';

import Header from './components/HeaderComponent/Header';
import Photo from './components/PhotoComponent/Photo';
import Info from './components/InfoComponent/Info';


import "./App.css";
function App() {
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=TUeuPhD5Bd1hMUIYSEMy4FM1INKxYgKWMKvLTq15')
     .then(response => {
       console.log(response);
       setPhoto(response.data.url);
       setTitle(response.data.title);
       setDate(response.data.date);
       setExplanation(response.data.explanation);
     })
     .catch(error => console.log(error))
  }, []);
  const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

  return (
    <WrapperDiv>
       <Header />
      <Photo url = {photo} />
      <Info title = {title} date = {date} explanation = {explanation} />
    </WrapperDiv>
  );
}

export default App;
