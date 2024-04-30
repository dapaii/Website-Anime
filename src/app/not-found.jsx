"use client"

import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-3 flex-col">
            <FileSearch size={52} className="text-color-accent"/>
        <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        <Link href="/" className="text-color-primary hover:text-color-accent transition-all text-xl">Kembali</Link>
        </div>
    </div>
  )
}

export default Page