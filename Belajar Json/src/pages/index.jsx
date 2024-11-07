import postData from "../post.json";
import Article from "../component/Article";
import { useState, useEffect } from 'react';
import Search from "../component/Search";

function Homepage() {
    const [posts, setPosts] = useState(postData);
    const [totalPost, setTotalpost] = useState(0);


    const onSearchChange = (value) => {
        const filteredPosts = postData.filter((item) =>
            item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalpost(filteredPosts.length);
    };


    useEffect(() => {
        console.log('render');
    }, []);

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPost={totalPost} />
            {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))}
        </>
    );
}

export default Homepage;


// const [jumlahCokie, setJumlahCocie] = useState(10);

// const makanCokie = () => {
//     setJumlahCocie(jumlahCokie - 1);
// }
// const tambahCokie = () => {
//     setJumlahCocie(jumlahCokie + 1)
// }

// if (jumlahCokie > 15) {
//     alert('toples penuh!!');
// } else if (jumlahCokie < 1) {
//     alert('cookie habis, mohon isi lagi')
// }
// return (
//     <>
//         <div>
//             <h1>jumlah cookie :{jumlahCokie}</h1>
//             <button onClick={makanCokie}>Makan satu cokie</button>
//             <button onClick={tambahCokie}>tambah cookie</button>
//         </div>

//     </>

// )

//     const [jumlahSuka, setJumlahSuka] = useState(0);
//     const [sudahSuka, setSudahSuka] = useState(false);

//     const tambahSuka = () => {
//         // if (!sudahSuka) {
//         setJumlahSuka(jumlahSuka + 1);
//         setSudahSuka(true);


//     }

//     const kurangSuka = () => {
//         if (jumlahSuka > 1) setJumlahSuka(jumlahSuka - 1);
//         setSudahSuka(false);
//     }


//     return (
//         <>
//             {jumlahSuka > 10 && <marquee>love youu ❤️❤️❤️❤️</marquee>}
//             <br />
//             <h1>❤️ {jumlahSuka}</h1>
//             <button onClick={tambahSuka}>👍</button>
//             <button onClick={kurangSuka}>👎</button>
//         </>
//     )


