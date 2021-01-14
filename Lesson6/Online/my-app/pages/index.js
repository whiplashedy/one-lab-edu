import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href='/post'>
        <button>Go to post</button>
      </Link>
    </div>
  )
}
