import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <Header/>


      <div style={{display:"flex", justifyContent:"center"}} >
      <div style={{display:"flex" }}>
        {/*Post container*/}
        <div style={{width:"60%"}}>
       <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
        </div>
       {/*==Post container==*/}

       {/*SideMenu container*/}
       <div style={{width:"30%"}}>
        <SideMenu/>
       </div>
       {/*==SideMenu container==*/}
      </div>
      </div>
    
      
     
    </div>
  );
}

export default App;
