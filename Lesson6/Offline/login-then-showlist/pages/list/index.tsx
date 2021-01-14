import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { firebaseClient } from '../../auth/firebaseClient';
import { firebaseAdmin } from '../../auth/firebaseAdmin';
import nookies from 'nookies';
import isOverflowing from 'react-overlays/isOverflowing';
import Link from 'next/link';

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
        console.log("failed to auth", err);
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
    return <div className={"container overflow-auto py-2"}>
        <div className={"text-truncate w-100 mb-5"}>
            { message }
            <div className="btn-group float-right">
                <Link href='/'>
                    <button className="btn btn-sm btn-info">Home page</button>
                </Link>
                <button
                    className={"btn btn-sm btn-dark"}
                    type={"button"}
                    onClick={async () => {
                        await firebaseClient.auth().signOut();
                        window.location.href = "/";
                    }}
                >
                    Sign out
                </button>
            </div>
        </div>
        <h4 className="text-center mb-3">Список юзеров</h4>
        <table className={"table"}>
            <thead className={"thead-light"}>
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
