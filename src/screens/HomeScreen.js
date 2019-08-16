import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        colorList : ["red", "blue", "black", "green"],
        colorTextBottom: "",
        colorTextTop: "",
        colorBottom: "",
        score: 0,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
      this.handleColorChange();
  }

  handleSubmit(userResponse) {
    const { colorTextTop, colorBottom } = this.state;
    if ( colorTextTop === colorBottom ) {
        if(userResponse === "yes") {
            this.setState({
                score : this.state.score+2
            });
            this.handleColorChange();
        } else {
            if( this.state.score !== 0){
                this.setState({
                    score : this.state.score-1
                }) ;
                this.handleColorChange();
            }
        }
    } else {
        if(userResponse === "no") {
            this.setState({
                score : this.state.score+2
            })
            this.handleColorChange();

        } else {
            if( this.state.score !== 0){
                this.setState({
                    score : this.state.score-1
                }) ;
                this.handleColorChange();
            }
        }
    }
  }

  handleColorChange() {
    let { colorList} = this.state;
    this.setState({
        colorTextTop : colorList[Math.floor(Math.random() * colorList.length)],
        colorTextBottom : colorList[Math.floor(Math.random() * colorList.length)],
        colorBottom : colorList[Math.floor(Math.random() * colorList.length)],
    });
  }

  render() {
    const { colorBottom, colorTextBottom, colorTextTop} = this.state;

    return (
      <div className="main">
          <div class="login">
            <div>
                <h1>{colorTextTop}</h1>
            </div>
            <div>
                <h1 style={{ color: colorBottom}}>{colorTextBottom}</h1>
            </div>
            </div>
            <div>
            <button 
                class="ui button primary" 
                style={{marginTop: 40}}
                onClick={this.handleSubmit("yes")}
                >
                YES
            </button>
            <button 
                class="ui button secondary" 
                style={{marginTop: 40}}
                onClick={this.handleSubmit()}
                >
                NO
            </button>
            </div>
      </div>
    );
  }
}

export { HomeScreen };
