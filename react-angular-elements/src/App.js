import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
    };
  }

  componentDidMount() {
    this.ngElement = this.refs.elem;
    // we need to bind the event listener this way, since we can't get the custom event past react's synthetic event system
    // more on this at: https://github.com/facebook/react/issues/7901
    this.ngElement.addEventListener('ratingChange', data => {
      this.setState({ rating: data.detail });
    });
  }

  setMaxRating = () => {
    this.setState({ rating: 2 });
  };

  render() {
    const { rating } = this.state;
    return (
      <div className="App">
        <h1>Some react app, with some react stuff in it...</h1>
        <h3>
          My awesome rating is
          <span id="rating"> {parseInt(rating, 10) + 1}</span>
        </h3>
        <hr />
        {/* pass the rating, and hold a ref to register the event */}
        <my-rating ref="elem" rating={rating} />
        <hr />
        <button onClick={this.setMaxRating}>Give max rating</button>
      </div>
    );
  }
}

export default App;
