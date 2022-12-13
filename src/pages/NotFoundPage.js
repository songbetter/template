import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate(-1), 3000)
  }, [navigate])

  return <div>길을 잃으셨어요 . 3초 후 이전 페이지로 이동합니다.</div>
}

export default NotFoundPage
