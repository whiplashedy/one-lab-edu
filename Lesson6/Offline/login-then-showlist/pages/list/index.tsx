import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { firebaseClient } from '../../auth/firebaseClient';
import { firebaseAdmin } from '../../auth/firebaseAdmin';
import nookies from 'nookies';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        const { uid, email } = token;

        const res = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = (await res.json()).map((user: User) => {
            return ({
                id: user.id as unknown as string,
                name: user.name as unknown as string,
                username: user.username as unknown as string,
                email: user.email as unknown as string,
                phone: user.phone as unknown as string,
                website: user.website as unknown as string
            });
        }) as Array<User>

        return {
            props: {
                data: data,
                message: `Your email is ${email} and your UID is ${uid}.`
            },
        }

    } catch (err) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
            props: {} as never,
        };
    }
}

function Page({ data, message }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <div>
        <p>{ message }</p>
        <button
            onClick={async () => {
                await firebaseClient.auth().signOut();
                window.location.href = "/";
            }}
        >
            Sign out
        </button>
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(data[0] || []).map((ky) => <th scope="col" key={ ky }> { ky } </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((elem: User) => {
                        return <tr key={ elem.id }>
                            {
                                Object.keys(elem).map((elemKey: string) => {
                                    return <td scope="row" key={ elem.id.toString() + elemKey }> { elem[elemKey as keyof User] } </td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Page;
