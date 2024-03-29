import axios from 'axios'
import type { upItem, upDetailItem } from '@/models/up'
import { BASE_LIST_SIZE } from '@/constant'

export async function getUps(start: number, size: number = BASE_LIST_SIZE): Promise<upItem[]> {
    const response = await axios.get('/api/up/get', { params: { start, size } })
    return response.data
}

export async function getUpDetail(mid: string): Promise<upDetailItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data
}
