import React from 'react';
import News from './News';
import Comments from './Comments';
import Add from './Add';


var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В  четверг,  четвертого  числа...',
    bigText:  'в  четыре  с четвертью часа  четыре  чёрненьких  чумазеньких чертёнка  чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю,  что $ должен  стоить  35  рублей!',
    bigText:  'А  евро  42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать.  Лучший  сайт  - http://localhost:3000',
    bigText:  'На самом деле  платно, просто  нужно прочитать очень длинное лицензионное  соглашение'
  }
];

var App = React.createClass({
  render: function()  {
    return  (
      <div  className="app">
        <h3>News</h3>
        <Add />
        <News data={my_news} />
      </div>
    );
  }
});

export default App
