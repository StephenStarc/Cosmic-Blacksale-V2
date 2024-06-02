import React, { useState } from "react";
import { Button, Input, Label, Google } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import { auth } from "../firebase/FirebaseConnect";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


export default function SignUp(props){



  const {
    loginText,
    loginLink,
    title,
    signUpButton,
    signUpWithGoogleButton,
  } = {
    ...Signup1Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    toast.success('Account Created Successfully')
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
  };
  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col items-stretch justify-center overflow-auto py-24 lg:pb-24 lg:pt-16">
        <div className="absolute bottom-auto left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18">
          <div>
          <Link to='/'>
        <h1 className=' text-3xl font-bold font-playfair text-black text-black-600 '>
          Cosmic <span className='bg-black text-white'>BlackSale</span>
          </h1>
          </Link>
          </div>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block">{loginText}</p>
            <Link
              to={loginLink.url}
              className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              {loginLink.text}
            </Link>
          </div>
        </div>
        <div className="container max-w-sm">
          <div className="mb-6 text-center md:mb-8">
            <h1 className="mb-2 text-4xl font-bold md:mb-3 md:text-5xl lg:text-6xl">{title}</h1>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email*
              </Label>
              <Input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="password" className="mb-2">
                Password*
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid-col-1 grid gap-4">
              <Button
                variant={signUpButton.variant}
                size={signUpButton.size}
                iconLeft={signUpButton.iconLeft}
                iconRight={signUpButton.iconRight}
              >
                {signUpButton.title}
              </Button>
              <Button
                variant={signUpWithGoogleButton.variant}
                size={signUpWithGoogleButton.size}
                iconLeft={signUpWithGoogleButton.iconLeft}
                iconRight={signUpWithGoogleButton.iconRight}
                className="gap-x-3"
              >
                {signUpWithGoogleButton.title}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Signup1Defaults = {
  loginText: "Already have an account?",
  loginLink: {
    text: "Log In",
    url: "/login",
  },
  title: "Sign Up",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <Google className="size-6" />,
  }
};

