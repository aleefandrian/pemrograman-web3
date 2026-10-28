import { useState } from "react";

function NamaLengkap() {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(function () {
      setIsLoading(false);
      alert(`Hallo, ${namaDepan + " " + namaBelakang}!, Tinggal di ${alamat}`);
    }, 3000);

    // alert('Hallo, ' + namaDepan + ' ' + namaBelakang + '!');
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        placeholder="Masukkan Nama Depan ..."
        onChange={(e) => setNamaDepan(e.target.value)}
        value={namaDepan}
      />
      <br />
      <input
        type="text"
        placeholder="Masukkan Nama Belakang ..."
        onChange={(e) => setNamaBelakang(e.target.value)}
        value={namaBelakang}
      />
      <hr />
      <textarea
        name=""
        id=""
        onChange={(e) => setAlamat(e.target.value)}
        value={alamat}
      ></textarea>
      <hr />
      {isLoading && <p>Loading ...</p>}
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}

export default NamaLengkap;
