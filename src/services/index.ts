import type { applyItem } from '@/models'

export async function getApplyList(): Promise<applyItem[]> {
    return [{
        id: 1,
        name: 'XXX',
        attend: 'XX',
        tel: '1908234750',
        gender: 0,
        age: 28,
        location: 'xxxxxxx101x',
        time: 'xxxx-xx-xx xx:xx:xx',
        clock: 'xxxx-xx-xx xx:xx:xx'
    }, {
        id: 2,
        name: 'XXX',
        attend: 'XX',
        tel: '1908234750',
        gender: 0,
        age: 28,
        location: 'xxxxxxx101x',
        time: 'xxxx-xx-xx xx:xx:xx',
        clock: 'xxxx-xx-xx xx:xx:xx'
    }, {
        id: 3,
        name: 'XXX',
        attend: 'XX',
        tel: '1908234750',
        gender: 0,
        age: 28,
        location: 'xxxxxxx101x',
        time: 'xxxx-xx-xx xx:xx:xx',
        clock: 'xxxx-xx-xx xx:xx:xx'
    }]
}