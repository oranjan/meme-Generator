import TrollFace from "../assets/Troll Face.png"

const Header=()=>{

    return(
        
        <header>
        <img src={TrollFace} alt="troll logo" />   
        <h2>Meme Generator <span>by ranjan</span></h2>
        <h3>React Mini Project </h3>
        </header>

    )
    
}

export default Header