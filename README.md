This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies and then run the development server:

```bash
npm install
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## This repository

This repository was created to test and study the functions of custom components and its behavior.

So far we have the [Navbar](https://github.com/FernandoOliveeira/react-components/blob/main/components/Navbar.tsx) and [Button](https://github.com/FernandoOliveeira/react-components/blob/main/components/Button.tsx) components.

The navbar is receiving data from Nav_Links, whitch is a external file with all the constant information on the website. You can see this file [here](https://github.com/FernandoOliveeira/react-components/blob/main/constants/index.ts).
On the ```<ul>``` tag has a ```.map``` function to organize all the information from the Nav_Links.
