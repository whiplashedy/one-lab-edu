const list = (props: { token: any[] }) =>{
    return (
        <div >
            <div>
                {props.token.map((user) => (
                    <div> 
                        LOGIN: {user.login}
                        <br></br>
                        ID: {user.id}
                        <br></br>
                        TYPE: {user.type}
                    </div>
                ))}
            </div>
        </div>
    )
}
export async function getServerSideProps() {
    const res = await fetch(`https://api.github.com/repos/vercel/next.js/stargazers`)
    const token = await res.json()
    return { props: { token } }
  }
export default list