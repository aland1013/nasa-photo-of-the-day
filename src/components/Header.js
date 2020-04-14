import React from 'react';

const Header = (props) => {
  return (
    <>
      <div className="ui hidden divider"></div>
      <h1 className="ui block header">
        <i className="rocket icon"></i>
        <div className="content">
          NASA Astronomy Picture of the Day: {props.date}
        </div>
      </h1>
    </>
  );
}

export default Header;