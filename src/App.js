import * as React from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         hello
//       </div>
//     );
//   }
// }

const App = () => {
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        </div>
}

export default App;
