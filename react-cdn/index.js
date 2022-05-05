function NavBar() {
    return (
        <nav>My Nav Bar</nav>
    )
}

function MainContent() {
    return (
        <p>My main content.</p>
    )
}


ReactDOM.render(
<div>
    <NavBar/>
    <MainContent/>
</div>, 
document.getElementById("root")
)