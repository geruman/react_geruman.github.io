import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Title extends React.Component{
	render(){
		return(
			<div class="container-fluid p-5 bg-primary text-white text-center">
				<h1>My First Bootstrap Page</h1>
				<p>Resize this responsive page to see the effect!</p> 
			</div>
		);
	}
}
class Column extends React.Component{
	render() {
		return(
			<div class="col-sm-4">
				<h3>Column 3</h3>        
				<img src="images/yinyang3.gif"/>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
				<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
			</div>
		);
	}
  
}


class Game extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <div class="container mt-5">
          <div class="row">
            <Column />
            <Column />
            <Column />
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
