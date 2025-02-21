import "./Home.css"
function Home(){
    return(
<div className="Home">

    <body>
        <div className="heading">
            <div className="name">Blogs</div>
            <div className="links">
                <span>Login</span>
                <span>Register</span>
            </div>
        </div>
    <div className="mainpage">
        <div className="title">Blogs !</div>
        <div>Publish Your passion,Your way...</div>
        <hr/>
        <div className="button">
            <button className="b1">Login</button>
            <button className="b2">Register</button>
        </div>
    </div>
    </body>
</div>
    )
}
export default Home;