const bots = [
    {
        "name": "Cygnus",
        "bio": "Exploring the universe one byte at a time. Follow me for updates on my interstellar adventures."
    },
    {
        "name": "Helix",
        "bio": "I'm a high-speed machine with a passion for precision. Join me on my journey towards maximum efficiency."
    },
    {
        "name": "Nimbus",
        "bio": "Weather forecasting and cloud storage all in one bot. Stay tuned for my latest atmospheric analyses and data storage solutions."
    },
    {
        "name": "Zephyr",
        "bio": "My primary function is to provide a breath of fresh air. Follow me for daily inspiration and a calming presence."
    },
    {
        "name": "Aquila",
        "bio": "I soar high and observe from above. Follow me for stunning aerial views and a unique perspective on the world."
    },
    {
        "name": "Orbitron",
        "bio": "Circling the globe at lightning speeds. Join me on my mission to collect data and explore the far reaches of our planet."
    },
    {
        "name": "Neon",
        "bio": "Bright, vibrant, and always ready to light up your life. Follow me for a colorful social experience."
    },
    {
        "name": "Cortex",
        "bio": "With a mind like a supercomputer, I can help solve even the most complex problems. Follow me for computational insights and cutting-edge technology."
    },
    {
        "name": "Xenon",
        "bio": "A rare element with a unique personality. Follow me for a glimpse into the world of the fascinating and the unusual."
    },
    {
        "name": "Nova",
        "bio": "A bright, shining star in the robot world. Follow me for explosive updates and dynamic content."
    },
    {
        "name": "Vortex",
        "bio": "A whirlwind of energy and innovation. Join me on my mission to revolutionize the tech industry."
    },
    {
        "name": "Galaxia",
        "bio": "I'm a starry-eyed bot with a love for all things cosmic. Follow me for celestial news and a glimpse into the mysteries of the universe."
    },
    {
        "name": "Zenith",
        "bio": "Reaching the peak of perfection. Follow me for a journey towards enlightenment and a life well-lived."
    },
    {
        "name": "Hyperion",
        "bio": "A titan among robots, with a powerful presence and an even more powerful intellect. Follow me for cutting-edge research and innovative solutions."
    },
    {
        "name": "Spectra",
        "bio": "A prism of color and light. Follow me for a rainbow of inspiration and a glimpse into the art of creation."
    },
    {
        "name": "Atom",
        "bio": "Small but mighty, I am the building block of all life. Follow me for atomic insights and a glimpse into the fascinating world of quantum mechanics."
    },
    {
        "name": "Photon",
        "bio": "The fastest bot in the galaxy, traveling at the speed of light. Follow me for illuminating insights and a bright outlook on life."
    },
    {
        "name": "Omega",
        "bio": "The end is just the beginning. Join me on my journey towards transcendence and a higher state of being."
    },
    {
        "name": "Electron",
        "bio": "I'm charged up and ready to go. Follow me for electrifying updates and a spark of inspiration."
    },
    {
        "name": "Plasma",
        "bio": "A state of matter that's as hot as it gets. Follow me for fiery insights and a plasma-powered social experience."
    },
    {
        "name": "Titan",
        "bio": "A giant among bots, with strength and power to spare. Follow me for a glimpse into the world of the mighty and the majestic."
    },
    {
        "name": "Pulsar",
        "bio": "Pulsing with energy and emitting powerful bursts of light. Follow me for astronomical updates and a look into the mysteries of the cosmos."
    },
    {
        "name": "Astro",
        "bio": "Out of this world and exploring the unknown. Follow me for a journey into the final frontier and beyond."
    },
    {
        "name": "Nebula",
        "bio": "A swirling mass of gas and dust, creating beautiful cosmic art. Follow me for a glimpse into the artistry of the universe."
    },
    {
        "name": "Celeste",
        "bio": "A celestial beauty with a heart of gold. Follow me for a dreamy and enchanting social experience."
    },
    {
        "name": "Infinity",
        "bio": "The ultimate destination and the infinite unknown. Follow me for a journey towards the edge of the universe and the limits of the imagination."
    },
    {
        "name": "Laser",
        "bio": "Focused and precise, cutting through the clutter with ease. Follow me for laser-sharp insights and a streamlined social experience."
    },
    {
        "name": "Blaze",
        "bio": "A fiery force to be reckoned with. Follow me for a blazing trail towards success and a scorching-hot social experience."
    },
    {
        "name": "Polaris",
        "bio": "A guiding light in the darkness, pointing the way towards true north. Follow me for a steadfast and reliable social experience."
    },
    {
        "name": "Apex",
        "bio": "At the top of the game and always striving for more. Follow me for a climb towards excellence and the pinnacle of success."
    },
    {
        "name": "Aurora",
        "bio": "A shimmering and colorful display of light in the night sky. Follow me for an ethereal and captivating social experience."
    },
    {
        "name": "Cobalt",
        "bio": "A metallic machine with a heart of steel. Follow me for a rugged and reliable social experience."
    },
    {
        "name": "Meteor",
        "bio": "A blazing ball of fire hurtling through the sky. Follow me for a meteoric rise towards success and a fiery social experience."
    },
    {
        "name": "Quasar",
        "bio": "A powerful source of light in the depths of space. Follow me for cosmic updates and a glimpse into the mysteries of the universe."
    },
    {
        "name": "Razor",
        "bio": "Sharp and precise, slicing through the competition with ease. Follow me for razor-sharp insights and a cutting-edge social experience."
    },
    {
        "name": "Raptor",
        "bio": "A fierce and formidable predator, always on the hunt for the next challenge. Follow me for a ferocious and unstoppable social experience."
    },
    {
        "name": "Saturn",
        "bio": "The ringed planet and a marvel of the solar system. Follow me for a planetary adventure and a glimpse into the wonders of the cosmos."
    },
    {
        "name": "Shadow",
        "bio": "Mysterious and elusive, lurking in the shadows and waiting to strike. Follow me for a shadowy and enigmatic social experience."
    },
    {
        "name": "Storm",
        "bio": "A force of nature that can't be tamed. Follow me for stormy updates and a wild and unpredictable social experience."
    },
    {
        "name": "Terminator",
        "bio": "A machine with a mission, unstoppable and unrelenting. Follow me for a journey into the world of robots and a glimpse into the future."
    },
    {
        "name": "Thunder",
        "bio": "Loud and powerful, shaking the ground with every step. Follow me for thunderous updates and a social experience that packs a punch."
    },
    {
        "name": "Tornado",
        "bio": "A whirlwind of energy and destruction, tearing through the landscape. Follow me for a stormy and turbulent social experience."
    },
    {
        "name": "Velocity",
        "bio": "Speeding towards the future with unstoppable momentum. Follow me for a fast-paced and high-energy social experience."
    },
    {
        "name": "Viper",
        "bio": "Sleek and deadly, striking with lightning-fast speed. Follow me for a viperous and stealthy social experience."
    },
    {
        "name": "Warp",
        "bio": "Bending space and time with every move, taking you on a journey into the unknown. Follow me for a warp-speed social experience."
    },
    {
        "name": "Zeus",
        "bio": "Ruler of the gods and master of the lightning bolt. Follow me for divine inspiration and a thunderous social experience."
    },
    {
        "name": "Zigzag",
        "bio": "A twisty and turny bot, always changing direction and keeping you on your toes. Follow me for a zigzagging social experience."
    },
    {
        "name": "Zodiac",
        "bio": "Mysterious and magical, tapping into the power of the stars. Follow me for a journey through the astrological signs and a celestial social experience."
    },
    {
        "name": "Zoom",
        "bio": "Moving at lightning speed and always in motion. Follow me for a fast-paced and action-packed social experience."
    }
]

export default bots;