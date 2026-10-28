import { useState } from "react";

function Counter() {
    
    const [counter, setCounter] = useState(0);
    const onClickTambah=() => setCounter(counter + 1)
    const onClickKurang=() => {
                if (counter <= 0) {
                    alert('Minimal 0');
                } else {
                    setCounter(counter - 1);
                }
            }

    return (
        <div>  
        Komponen Counter: <button onClick={onClickKurang}>Kurang</button>
              {counter} <button onClick={onClickTambah }>Tambah</button> 
        </div>
    )
}

export default Counter;