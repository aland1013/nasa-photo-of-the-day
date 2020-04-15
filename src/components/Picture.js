import React from 'react';

const Picture = (props) => {
  const { title, url, explanation } = props;

  return (
    <>
      <div className="ui horizontal divider"><h3>{title}</h3></div>
      <img className="ui centered huge rounded image" src={url} alt="" />
      <div className="ui segment">
        <p>{explanation}</p>
      </div>
    </>
  );
}

export default Picture;