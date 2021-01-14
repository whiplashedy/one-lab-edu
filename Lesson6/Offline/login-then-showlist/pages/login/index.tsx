import { useState } from 'react';
import { firebaseClient } from '../../auth/firebaseClient';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div>
        <input value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder={'Email'}/>
        <input type={'password'}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder={'Password'}/>
        <button
            onClick={async () => {
                await firebaseClient.auth().signInWithEmailAndPassword(email, password)
                    .then(() => window.location.href = '/list')
                    .catch(error => alert(error.message));
            }}>
            Log in
        </button>

    </div>
}
