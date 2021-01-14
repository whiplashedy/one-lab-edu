import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    if (isNaN(Number(id))) {
        return <p><strong>{id}</strong> is not a number</p>;
    } else {
        return <p><strong>{id}</strong> is a number</p>;
    }
}

export default Post