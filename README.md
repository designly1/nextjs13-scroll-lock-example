In my last article, *[Create a Responsive Animated Sidebar Using React / Next.js and Tailwind CSS](https://designly.biz/blog/post/create-a-responsive-animated-sidebar-using-react-next-js-and-tailwind-css)*, I showed you how to circumvent the need for a resource-wasting design system like MaterialUI or Ant Design with the power of Tailwind CSS. Once again, I'd like to share with you another case where dependencies can be eliminated.

In this tutorial, I'll show you how to create a modal dialog overlay and disable the body scroll bars when it is open using Next.js 13 / React. This tutorial assumes you already have an existing project and that you're using Tailwind CSS. You don't need Tailwind, though. You can do straight CSS, but you're on your own then!

Ok, let's begin by creating a special component that doesn't render anything, but does all the magic for us:

```jsx
// @/components/DisableBodyScroll.js
import React, { Component } from 'react';

class DisableBodyScroll extends Component {
    componentDidMount() {
        document.body.classList.add('overflow-y-hidden');
    }

    componentWillUnmount() {
        document.body.classList.remove('overflow-y-hidden');
    }

    render() {
        return false;
    }
}

export default DisableBodyScroll;
```

It's really quite simple, we create a React class that uses `ComponentDidMount` and `ComponentWillUnmount`. When the component mounts, we add the `overflow-y-hidden` class. And then we remove it when the component unmounts. So anytime you render this component within any other component, the body scroll bars will be locked! 😁

And here's our modal component:

```jsx
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
```

That's it! Pretty easy, huh? And you can avoid hundreds, maybe thousands of needless lines of dependency code!

If you're interested in the demo site I create for this tutorial:

[Demo Site](https://botbazaar.vercel.app/)
[GitHub Repo](https://github.com/designly1/nextjs13-scroll-lock-example)

---

Thank you for taking the time to read my article and I hope you found it useful (or at the very least, mildly entertaining). For more great information about web dev, systems administration and cloud computing, please read the [Designly Blog](https://designly.biz/blog). Also, please leave your comments! I love to hear thoughts from my readers.

Looking for a web developer? I'm available for hire! To inquire, please fill out a [contact form](https://designly.biz/contact).