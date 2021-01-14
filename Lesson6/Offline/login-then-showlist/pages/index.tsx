import { useAuth } from '../auth/auth';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();

  return (
      <div style={{ padding: '40px' }}>
          <p>{`Authenticated user email: `} <strong>{ user ? user.email : "no user signed in" }</strong></p>

          <p>
              <Link href='/list'>
                  <button disabled={ !user }>Go to list</button>
              </Link>
          </p>
          <p>
              <Link href='/login'>
                  <button>Login</button>
              </Link>
          </p>
      </div>
);
}
