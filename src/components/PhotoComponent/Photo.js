import React from 'react';
import styled from 'styled-components';

const PhotoDiv = styled.div`
    border: 10px solid white;
`;
const Photo = (props) => {
    console.log(props);
    return (
        <PhotoDiv>
            <img src = {props.url} alt = 'NASA Pic' />
        </PhotoDiv>
    )
}

export default Photo;