import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
import Hello from './Hello';
function App() {
  return (
    <div className="App">
      <Header/>

      <div style={{display:"flex", justifyContent:"center"}} >
      <div style={{display:"flex" }}>
        {/*Post container*/}
        <div style={{width:"60%"}}>
       <Post postName="شركة التقنية" postBody="Software Development"/>
       <Post postName="Hello World " postBody="this is the hello world "/>
       <Post postName="Post3" postBody="this is the body of post3"/>
       <Post postName="Post3" postBody="this is the body of post3"/>
       <Post postName="Post3" postBody="this is the body of post3"/>
       <Hello name="Fatma" age="25">
       <p>Job:Programmer</p>
       </Hello>
       
       <Hello name="Mohamed" age="26">
       <p>Job:Accountant</p>
       </Hello>
      
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
