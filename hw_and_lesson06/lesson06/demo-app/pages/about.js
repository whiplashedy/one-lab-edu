import { useRouter } from 'next/router'

export default function About() {
    const router =  useRouter();
    const {about} = router.query;
    return <h1> About: {about} </h1>
}
