import LoggedIn from "./LoggedIn.jsx";
import UserProfiles from "./UserProfiles.jsx";
import Counter from "./Counter.jsx";

function HalamanJsx () {
    const nama = "Wok";
    const isLoggedIn = true;
    const isAdmin = true;

    const karyawan = [
        {
            nama: 'Prabowo',
            jabatan: 'Presiden',
            divisi: 'Kepresidenan'
        },
         {
            nama: 'Gibran',
            jabatan: 'Wakil Presiden',
            divisi: 'Kepresidenan'
        },
         {
            nama: 'Rocky Girang',
            jabatan: 'Wantimpres',
            divisi: 'Penasihat'
        },
         {
            nama: 'Bahlil',
            jabatan: 'Menteri',
            divisi: 'ESDM'
        },
    ];

    return (
        <>
        <p style={{
            marginTop: '100px'
        }}>Hello, {nama}</p>

        <p>Total: {10 + 5}</p>

        <LoggedIn login={isLoggedIn} admin={isAdmin} />

{karyawan.map((kr, i) => (
        <UserProfiles key={i} nama={kr.nama} jabatan={kr.jabatan} divisi={kr.divisi}/>
 ))}

<Counter />
 ===
        </>

    )
}

export default HalamanJsx;