import { useState } from "react";
import '../index.css';

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onHandling = (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            alert("Input tidak boleh kosong!");
            return;
        }

        setIsLoading(true);

    setTimeout(function () {
      setIsLoading(false);
      alert(`Hallo, ${username}!`);
    }, 2000);
        console.log("Username :", username);
        console.log("Password :", password);
    };

    return (
        <div className="container"> 
            <div className="card">
                <h2 className="title">Form Login</h2>
                <form onSubmit={onHandling} className="form">
                    <div className="inputGroup">
                        <label className="label">Username</label>
                        <input 
                            type="text" 
                            placeholder="Masukkan username..." 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                            className="input"
                        />
                    </div>

                    <div className="inputGroup">
                        <label className="label">Password</label>
                        <input 
                            type="password" 
                            placeholder="Masukkan password..." 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                            className="input"
                        />
                    </div>
                     {isLoading && <p style={{textAlign: "center"}}>Loading ...</p>}

                   <button type="submit" disabled={isLoading} className="button">
    Login
</button>
                </form>
            </div>
        </div>
    );
}

export default Form;