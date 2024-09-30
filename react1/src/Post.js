export default function Post({postName,postBody}){
    return(
        <>
        <div style={{
            border:"solid 5px teal",
            padding:"10px",
            margin:"25px"
        }}>
          <h2>{postName}</h2>
          <hr/>
          <p>{postBody}</p>
        </div>
        </>
    );

}