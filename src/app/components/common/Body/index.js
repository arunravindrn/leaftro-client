import React from 'react';


class CustomBody extends React.PureComponent {

  componentDidMount() {
    document.body.classList.add('skin-blue', 'sidebar-mini', 'hold-transition');
  }

  render() {
    return this.props.children;
  }
}

export default CustomBody;
