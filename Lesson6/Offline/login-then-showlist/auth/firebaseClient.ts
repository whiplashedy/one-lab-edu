import firebaseClient from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCv37DNngtlQRBlXLeXsuBN2F6DCmTk7PE",
    authDomain: "authentification-one-lab.firebaseapp.com",
    projectId: "authentification-one-lab",
    storageBucket: "authentification-one-lab.appspot.com",
    messagingSenderId: "272919582902",
    appId: "1:272919582902:web:c893d6befd40a798556e17"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
    firebaseClient.initializeApp(firebaseConfig);
    firebaseClient
        .auth()
        .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
    (window as any).firebase = firebaseClient;
}

export { firebaseClient };