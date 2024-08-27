/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'


const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: 'Frog Frame',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => { 
  return c.res({
    action: '/picker',
    image: "https://azure-ready-parakeet-471.mypinata.cloud/ipfs/Qmf49x46eVFePzwqT39tNjdCghfsXQEAj1aqMRs4kCpyQC",
    imageAspectRatio: '1:1',
    intents: [
      <Button value="1">1</Button>,
      <Button value="10">10</Button>,
      <Button value="69">69</Button>,
    ],
  })
})




app.frame('/picker', (c) => { 
  console.log('c',c)
  const { buttonValue } = c

  if (buttonValue === '1') {

    return c.res({
      action: '/',
      image: "https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmPanvet46EwhDJQ85X3uf9ntmue99rjDBVViRKNeEaPjh",
      imageAspectRatio: '1:1',
      intents: [
       <Button >Start Over 🔄</Button>,
       <Button.Link href="https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmPanvet46EwhDJQ85X3uf9ntmue99rjDBVViRKNeEaPjh">Image</Button.Link>,
       <Button.Link href="https://ham-likes.vercel.app/">Meditate</Button.Link>,
    ],
  })


  }

  if (buttonValue === '69') {
    return c.res({
      action: '/',
      image: "https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmRdMBCDnxjnw6SJ2farcPY63gER6yVjTVRF2o7nS4deBP",
      imageAspectRatio: '1:1',
      intents: [
       <Button >Start Over 🔄</Button>,
       <Button.Link href="https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmRdMBCDnxjnw6SJ2farcPY63gER6yVjTVRF2o7nS4deBP/">Image</Button.Link>,
       <Button.Link href="https://ham-likes.vercel.app/">Meditate</Button.Link>,
    ],
  })



  }

  return c.res({
    action: '/',
    image: "https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmceJbhTcyJtdWeqGbKqxoC2J9JmY9EpE5wa5yaBM13UHT",
    imageAspectRatio: '1:1',
    intents: [
     <Button >Start Over 🔄</Button>,
     <Button.Link href="https://azure-ready-parakeet-471.mypinata.cloud/ipfs/QmceJbhTcyJtdWeqGbKqxoC2J9JmY9EpE5wa5yaBM13UHT">Image</Button.Link>,
     <Button.Link href="https://ham-likes.vercel.app/">Meditate</Button.Link>,
  ],
})


})



 

  







devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
