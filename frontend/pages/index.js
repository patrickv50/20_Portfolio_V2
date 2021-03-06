// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'

import Profile from '../public/patrick.json'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default function Home({ isLightTheme, setTheme }) {
  return (
    <>
      {/* HEADER || MAIN || FOOTER */}
      <Header isLightTheme={isLightTheme} setTheme={setTheme} />
      <Main profile={Profile} />
      <Footer />
    </>

  )
}
