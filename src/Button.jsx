function Button(){

    const handleClick = () =>{
        alert("Button di-klik");
    }
    
    return (
        <button onClick={handleClick} type="button">Klik saya</button>
    )
}

export default Button