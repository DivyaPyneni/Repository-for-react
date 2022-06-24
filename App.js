
import './App.css';
import {SignIn} from'./sign-in/signIn';
import {SignUp} from'./sign-up/signUp';
import {Books} from './books-management/books'
//import {Navbar} from './Navigation/navbar';
function App() {
  return (
    <>
    {/*<header><Navbar/></header>*/}
    <div>
      <a href="#Home">Home   </a>
      <a href="#SignUp">SignUp   </a>
      <a href="#SignIn">SignIn   </a>
      <a href="#Books">Books     </a>
    </div>
    <main>
    <SignUp/>
    
    </main>
    
    </>
    
    
  );
}

export default App;
