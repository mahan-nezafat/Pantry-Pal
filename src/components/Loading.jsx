import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ spin, color }) => (
    <ReactLoading type={spin} color={color} height={1000} width={1000} />
);
 
export default Loading;