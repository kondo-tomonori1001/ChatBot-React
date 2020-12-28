import React from 'react';
import defaultDataset from './dataset'
import './assets/styles/style.css';
import {AnswersList, Chats,FormDialog} from './components';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers:[],
      chats:[],
      currentId:"init",
      dataSet:defaultDataset,
      open:false,
    }
    // クラスコンポーネントで関数を使う際はbindが必要
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text:this.state.dataSet[nextQuestionId].question,
      type:'question',
    });
    this.setState({
      answers:this.state.dataSet[nextQuestionId].answers,
      chats:chats,
      currentId:nextQuestionId,
    })
  }

  selectAnswer = (selectedAnswer,nextQuestionId) => {
    switch(true){
      case (nextQuestionId === 'init'):
        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId);
        },500)
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      case (nextQuestionId === "contact"):
        this.handleClickOpen();
        break;
      default:
        const chat = {
          text:selectedAnswer,
          type:'answer',
        }
        const chats = this.state.chats;
        chats.push(chat);
        this.setState({
          chats:chats,
        })
        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId);
        },500)
        break;
    }
  }

  handleClickOpen = () => {
    this.setState({
      open:true,
    })
  }; 
  handleClose = () => {
    this.setState({
      open:false,
    })
  };

  componentDidMount(){
    const initAnswer = "";
    this.selectAnswer(initAnswer,this.state.currentId);
  }

  componentDidUpdate(){
    const scrollArea = document.getElementById('scroll-area');
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render(){
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats = {this.state.chats} />
          <AnswersList answers = {this.state.answers} select = {this.selectAnswer}/>
          <FormDialog open = {this.state.open} handleClose = {this.handleClose} />
        </div>
      </section>
    );
  }
}

