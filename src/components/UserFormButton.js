import React, { Component } from 'react';

class UserFormButton extends Component {

  static defaultProps = {
    onSubmitUser: () => {}, // 클릭하면 유저 정보를 보내는
  }

  render() {
    const {onSubmitUser} = this.props;
    return (
      <button onClick={onSubmitUser}>Login</button>
    );
  }
}

export default UserFormButton;