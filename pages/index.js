import Head from 'next/head'
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import React from "react";
import { Alert } from '../components/alert.jsx';
import { FaRocket } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router'

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/swap')
  }

  return (
    <div className="min-h-screen" data-theme="wireframe">
      <Head>
        <title>Swap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Alert />

      <div className="mt-40 min-h-screen">
        <div className="m-auto hero-content text-center flex flex-col">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Trading Infrastructure for the Internet</h1>
            <p className="py-6 text-xl font-normal leading-normal mt-0 mb-2">Trade crypto on a next-generation decentralized exchange</p>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <div className="not-prose grid grid-cols-3 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              <div className="stats shadow">

                <div className="stat">
                  <div className="stat-title">Total Volume</div>
                  <div className="stat-value">$46,491,297</div>
                </div>

              </div>

              <div className="stats shadow">

                <div className="stat">
                  <div className="stat-title">Total Value Locked</div>
                  <div className="stat-value">$849,677</div>
                </div>

              </div>

              <div className="stats shadow">

                <div className="stat">
                  <div className="stat-title">Unique Users</div>
                  <div className="stat-value">263,126</div>
                </div>

              </div>

            </div>
          </div>

          <div>
            <button className="btn rounded-lg normal-case mt-20" onClick={handleClick}>
              Lanch App &nbsp;
              <FaRocket size="1rem" />
            </button>
          </div>

        </div>


      </div>

      <Footer />
    </div >
  )
}
