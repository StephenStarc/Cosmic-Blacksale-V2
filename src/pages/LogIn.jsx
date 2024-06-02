import React, { useState } from "react";
import { Button, Input, Label, Google } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export default function LogIn(props){
  const {
    signUpText,
    signUpLink,
    title,
    logInButton,
    logInWithGoogleButton,
    forgotPassword,
  } = {
    ...Login1Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col items-stretch justify-center overflow-auto py-24 lg:py-20">
        <div className="absolute bottom-auto left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18">
          <div>
          <Link to='/'>
        <h1 className=' text-3xl font-bold font-playfair text-black text-black-600 '>
          Cosmic <span className='bg-black text-white'>BlackSale</span>
          </h1>
          </Link>
          </div>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block">{signUpText}</p>
            <Link
              to={signUpLink.url}
              className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              {signUpLink.text}
            </Link>
          </div>
        </div>
        <div className="container max-w-sm">
          <div className="mb-4 text-center md:mb-6">
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">{title}</h1>
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
                variant={logInButton.variant}
                size={logInButton.size}
                iconLeft={logInButton.iconLeft}
                iconRight={logInButton.iconRight}
              >
                {logInButton.title}
              </Button>
              <Button
                variant={logInWithGoogleButton.variant}
                size={logInWithGoogleButton.size}
                iconLeft={logInWithGoogleButton.iconLeft}
                iconRight={logInWithGoogleButton.iconRight}
                className="gap-x-3"
              >
                {logInWithGoogleButton.title}
              </Button>
            </div>
          </form>
          <div className="mt-5 w-full text-center md:mt-6">
            <a
              href={forgotPassword.url}
              className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              {forgotPassword.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Login1Defaults = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "/signup",
  },
  title: "Log In",
  logInButton: {
    title: "Log in",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in with Google",
    iconLeft: <Google className="size-6" />,
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  }
};

