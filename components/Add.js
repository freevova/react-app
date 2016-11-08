import React from 'react';
import ReactDOM from 'react-dom';

var Add = React.createClass({
  componentDidMount: function()  {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  onBtnClickHandler: function(e)  {
    e.preventDefault();
    alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
  },
  render: function()  {
    console.log('HELLO')
    return  (
      <form className='add  cf'>
        <input
          type='text'
          className='add__author'
          defaultValue=''
          placeholder='Ваше имя'
          ref='author'
        />
        <textarea
          className='add__text'
          defaultValue=''
          placeholder='Текст  новости'
          ref='text'
        >
        </textarea>
        <label className='add__checkrule'>
            <input  type='checkbox' defaultChecked={false}  ref='checkrule' />Я согласен  с правилами
        </label>
        <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            ref='alert_button'>
            Показать  alert
        </button>
      </form>
    );
  }
});

export default Add
