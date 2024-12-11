"use client";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href="..\components\Landing\Landing.tsx">
        Go to Homepage
      </Link>
      <h1>Page 2</h1>
      <p>This is Page 2.</p>
      <Link href="my-app\src\components\Menu\StartMenu.tsx">Go to Page 3
      </Link>
      <Link href="/page/4">Go to Page 4
      </Link>
      <Link href="/page/5">Go to Page 5
      </Link>
      <Link href="/page/6">
        Go to Page 6
      </Link>
      <Link href="/page/7">
        Go to Page 7
      </Link>
      <Link href="/page/8">
        Go to Page 8
      </Link>
    </div>
  )
}

export default page
