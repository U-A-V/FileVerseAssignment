import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const router=useRouter();
  const handleConnect=()=>{
      if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'})
        .then((res:string)=>{

                router.push({
                    pathname:"/dashboard",
                    query:{
                      address:res
                    }
                  }
                )
        })
      }else{
        alert("install metamask extension")
      }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Connect| Meta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button 
          className={styles.connect}
          onClick={handleConnect}
        >
          Connect
        </button>
      </main>
    </div>
  )
}
