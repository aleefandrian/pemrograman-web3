function LoggedIn({login, admin}) {
    return (
        <>
        {login ? (
            admin ? <p>Kamu adalah Admin</p> : <p>Kamu adalah User</p>
        ) : 
            <p>Please Login First</p>
        }
        </>
    )
}

export default LoggedIn