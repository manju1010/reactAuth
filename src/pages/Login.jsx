import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { app, database } from '../firebaseConfig';
import googleLogo from '../assests/google-logo.svg';
import githubLogo from '../assests/github-logo.svg';

const auth = getAuth(app);
const collectionRef = collection(database, 'users');

const Login = () => {
  const location = useLocation();
  const initialState = location.state?.pageState || 'sign up'; 
  const [state, setState] = useState(initialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'sign up') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response.user);
          addDoc(collectionRef, { email, password })
            .then(() => alert('Data added successfully'))
            .catch((err) => alert(err.message));
        })
        .catch((err) => console.log(err.message));
    } else {
      console.log('Login credentials:', { email, password });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign-in Successful: ', result.user);
    } catch (error) {
      console.error('Google Sign-in Error: ', error);
    }
  };

  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub Sign-in Successful: ', result.user);
    } catch (error) {
      console.error('GitHub Sign-in Error: ', error);
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </p>
        <p>Please {state === 'sign up' ? 'sign up' : 'login'} below</p>
        {state === 'sign up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </button>

        <div className="flex items-center justify-center gap-4 w-full mt-4">
          <div className="border-t border-gray-300 flex-grow" />
          <p className="text-sm">Or continue with</p>
          <div className="border-t border-gray-300 flex-grow" />
        </div>

        <div className="flex gap-4 w-full mt-2">
          <button
            type="button"
            className="flex items-center justify-center bg-white border border-gray-300 rounded-md w-full py-2 gap-2"
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center bg-gray-800 text-white rounded-md w-full py-2 gap-2"
            onClick={handleGitHubSignIn}
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </button>
        </div>

        {state === 'sign up' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('login')}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span
              onClick={() => setState('sign up')}
              className="text-primary underline cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
