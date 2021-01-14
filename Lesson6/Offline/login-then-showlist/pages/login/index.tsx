import { useState } from 'react';
import { firebaseClient } from '../../auth/firebaseClient';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div>
        <div className="background"></div>
        <div className="fade-in container d-flex vh-100 vw-100">
            <div className="authform authform--transpgray authform--shadow mx-auto my-auto">
                <form className="form-group">
                    <h3 className="authform__title text-center my-3">Login</h3>
                    <input value={email}
                           type={"email"}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder={'Email'}
                           className="form-control authform--text-input d-block w-75 mt-1 mx-auto p-2"/>
                    <input type={'password'}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={'Password'}
                           className="form-control authform--text-input d-block w-75 mt-1 mx-auto p-2"/>
                    <button
                        type={"button"}
                        className="btn btn-primary text-truncate d-block w-75 p-1 mt-3 mb-1 mx-auto"
                        onClick={async () => {
                            await firebaseClient.auth().signInWithEmailAndPassword(email, password)
                                .then(() => window.location.href = '/list')
                                .catch(error => alert(error.message));
                        }}>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    </div>
}
