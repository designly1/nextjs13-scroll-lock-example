// @/pages/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import BotCard from '@/components/BotCard'
import BotModal from '@/components/BotModal'

import bots from '@/data/bots'
import { AiFillRobot } from 'react-icons/ai'

export default function HomePage() {
  const [currentBot, setCurrentBot] = useState(false);

  return (
    <>
      <Head>
        <title>BotBazaar</title>
      </Head>
      {currentBot ? <BotModal bot={currentBot} setCurrentBot={setCurrentBot} /> : <></>}

      <div className="min-h-screen bg-indigo-800 text-white px-4 py-10">
        <h1 className="text-4xl flex gap-2 [&>*]:my-auto border-b-2 border-white/60 border-dotted mb-6">
          <AiFillRobot />
          <div>BotBazaar</div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {bots.map((b) => <BotCard bot={b} key={b.name} setCurrentBot={setCurrentBot} />)}
        </div>
      </div>
    </>
  )
}