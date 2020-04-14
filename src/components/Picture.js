import React from 'react';

const Picture = (props) => {
  const { title, url, explanation } = props;

  return (
    <>
      <h2 className="ui inverted center aligned segment blue">{title}</h2>
        <img className="ui fluid rounded image" src={url} />
      <div className="ui segment">
        <p>{explanation}</p>
      </div>
    </>
  );
}

export default Picture;