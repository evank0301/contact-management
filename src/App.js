import './App.css';

//App is the root component that contains all of the others

//Functional components and class components:
//Fucntional components are js functions that return html to describe
//the ui
//
//Class Components are things that extend the component class
//These have to use the render method 
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
