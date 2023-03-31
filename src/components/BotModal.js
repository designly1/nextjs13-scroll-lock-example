// @/components/BotModal.js
import React from 'react'
import Image from 'next/image'
import DisableBodyScroll from './DisableBodyScroll'

import { FaTimesCircle } from 'react-icons/fa'

export default function BotModal({ bot, setCurrentBot }) {
    return (
        <>
            <DisableBodyScroll />
            <button
                className="fixed top-6 right-6 text-white text-4xl z-40"
                onClick={() => setCurrentBot(false)}
            >
                <FaTimesCircle />
            </button>
            <div
                className="fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/90 flex"
                onClick={() => setCurrentBot(false)}
            >
                <div
                    className="m-auto w-full md:w-[600px] flex flex-col gap-6 [&>*]:mx-auto border-2 border-lime-500 p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        className="group-hover:scale-125 z-10 transition-all ease-in-out duration-500"
                        src={`https://robohash.org/${bot.name}`}
                        alt={bot.name}
                        width={300}
                        height={300}
                    />
                    <p className="text-lime-500 text-center">{bot.bio}</p>
                </div>
            </div>
        </>
    )
}
