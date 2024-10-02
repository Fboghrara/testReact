import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
import Hello from './Hello';
const showCategories =true;
function App() {
  const posts=[
    {
      id:1,
      postName:"شركة التقنية",
      postBody:"Software Development"
    },
    {
      id:2,
      postName:"Hello World ",
      postBody:"this is the hello world"
    },
    {
      id:3,
      postName:" Post3",
      postBody:"this is the body of post3"
    },
    {
      id:4,
      postName:" Post3",
      postBody:"this is the body of post3"
    },
    {
      id:5,
      postName:" Post3",
      postBody:"this is the body of post3"
    },
  ];


  const postList=posts.map((post)=>{
    return <Post key={post.id} postName={post.postName} postBody={post.postBody}/>
  });
 

  
  return (
    <div className="App">
      <Header/>

      <div style={{display:"flex", justifyContent:"center"}} >
      <div style={{display:"flex" }}>
        {/*Post container*/}
        <div style={{width:"60%"}}>
         {postList}
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
        <AppSideMenue/>
       </div>
       {/*==SideMenu container==*/}
       
      </div>
      </div>
     
    </div>
  );
}
function AppSideMenue(){
  
    if(showCategories== true){
    return (<SideMenu/>)
    }else{ return null
    }
  
}

export default App;
