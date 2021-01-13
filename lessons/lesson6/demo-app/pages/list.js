import React from 'react';

const lst=(props) =>{
    let count=1
    return (
        <div >
            <p>hello {localStorage.getItem('user')}</p>
            <ul className="flexxx">
            {props.data.map((post) => (
        <li>{count++}) Login: {post.login}
        <br></br>
        ID: {post.id}
        </li>
      ))}
    </ul>
        </div>
    )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/repos/vercel/next.js/stargazers`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default lst