// import axios from 'axios'
import axios from 'axios'
import { Cookies } from 'react-cookie'

export const login = async (nickname: string) => {
  //닉네임으로 요청을 보낸 후, id르 받아 쿠키에 저장한다.
  const res = await axios({
    url: 'http://13.209.76.209/users',
    method: 'POST',
    data: {
      nickname,
    },
  })

  const cookies = new Cookies()
  cookies.set('userId', 'asd', { path: '/' })
}

const userService = {
  login,
}
export default userService
