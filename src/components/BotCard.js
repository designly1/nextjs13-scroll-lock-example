// @/components/BotCard.js
import React from 'react'
import Image from 'next/image'

export default function BotCard({ bot, setCurrentBot }) {
    return (
        <button
            className="flex flex-col group overflow-hidden"
            onClick={() => setCurrentBot(bot)}
        >
            <Image
                className="group-hover:scale-125 z-10 transition-all ease-in-out duration-500"
                src={`https://robohash.org/${bot.name}`}
                alt={bot.name}
                width={300}
                height={300}
            />
            <h2 className="text-4xl text-center bg-black/60 z-20">{bot.name}</h2>
        </button>
    )
}
