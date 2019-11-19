import React from 'react';

function LoginNav(props) {
  const logged_out_nav = (
    <div>
      <button className="login_nav" onClick={() => props.display_form('login')}>
        login
      </button>
      <button className="login_nav" onClick={() => props.display_form('signup')}>
        signup
      </button>
    </div>
  );

  const logged_in_nav = (
    <div>
      <span onClick={props.handle_logout}>log out</span>
    </div>
  );

  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default LoginNav;
