import React from 'react'
import { render } from '@testing-library/react'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSidebar : true, 
      activeMenu : "home",
    }
  };

handleHide = () => {
  this.setState({showSidebar : true});
};
handleShow = () => {
  this.setState({hideSidebar : false});
};


render() {
  if(this.state.showSidebar) {
    return (
      <>
        <sidebar />
          <Button click= { this.handleHide }>Hide</Button>
      </>
    )
  } else {
    return (
      <>
        <sidebar />
          <Button click= { this.handleShow}>Show</Button>
      </>
    )
  }
}
}