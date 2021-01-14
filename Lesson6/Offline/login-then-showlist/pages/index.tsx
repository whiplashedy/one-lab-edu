import { useAuth } from '../auth/auth';
import Link from 'next/link';
import { firebaseClient } from '../auth/firebaseClient';

export default function Home() {
  const { user } = useAuth();

  return (
      <div className="container d-flex vh-100 vw-100">
          <div className="mx-auto my-auto">
              <p className={"text-center"}>{`Authenticated user email: `} <strong>{ user ? user.email : "no user signed in" }</strong></p>

              <div className="btn-group w-100">

                  <Link href='/list'>
                      <button disabled={ !user } className="btn btn-success w-25">Go to list <span>{ user ? "" : "(disabled)" }</span></button>
                  </Link>
                 <Link href='/login'>
                      <button className="btn btn-warning w-25"><span>{ user ? "Re-" : "" }</span>Login</button>
                  </Link>
                  <button
                      className={"btn btn-sm btn-dark w-25"}
                      type={"button"}
                      disabled={ !user }
                      onClick={async () => {
                          await firebaseClient.auth().signOut();
                          window.location.href = "/";
                      }}
                  >
                      Sign out <span>{ user ? "" : "(disabled)" }</span>
                  </button>
              </div>

          </div>

      </div>
);
}
