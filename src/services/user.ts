import axios from 'axios'
import type { userDetailItem, userCheckItem } from '@/models/user'

export async function getUserById(id: number): Promise<userDetailItem> {
  const response = await axios.get('/api/user/getById', { params: { id } })
  return response.data
}

export async function checkUser(user: userCheckItem): Promise<boolean> {
  const response = await axios.post('/api/user/check', user)
  return response.data
}
