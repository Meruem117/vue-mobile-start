import axios from 'axios'
import type { userDetailItem, userLoginItem } from '@/models/user'

export async function loginUser(user: userLoginItem): Promise<userDetailItem> {
  const response = await axios.post('/api/user/login', user)
  return response.data
}
