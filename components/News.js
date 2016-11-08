import React from 'react';
import Article from './Articles';

var News  = React.createClass({
  propTypes:  {
    data: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return { counter: 0 };
  },
  onTotalNewsClick: function(e) {
    e.preventDefault();
    this.setState({counter: ++this.state.counter});
  },
  render: function()  {
    var data    = this.props.data;
    var counter = this.state.counter;
    var newsTemplate;

    if(data.length > 0) {
      newsTemplate = data.map(function(item, index)  {
        return  (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей  нет</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong
          className={data.length  > 0 ? '':'none'}
          onClick={this.onTotalNewsClick}>
          Всего новостей: {data.length}
        </strong>
      </div>
    );
  }
});

export default News
