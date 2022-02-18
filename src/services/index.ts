import type { applyItem, activityItem } from '@/models'

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

export async function getActivityList(): Promise<activityItem[]> {
    return [{
        id: 1,
        area: 'xxxxx',
        type: '其他',
        title: 'XXXXX',
        location: 'xxxxxx110',
        start: 'xxxx-xx-xx xx:xx:xx',
        end: 'xxxx-xx-xx xx:xx:xx',
        total: 2,
        restrict: 10,
        unit: 'xxxxxx',
        content: 'xxxxxxxxxxxxxxxxxxxx',
        images: [],
        video: ''
    }, {
        id: 2,
        area: 'xxxxx',
        type: '其他',
        title: 'XXXXX',
        location: 'xxxxxx110',
        start: 'xxxx-xx-xx xx:xx:xx',
        end: 'xxxx-xx-xx xx:xx:xx',
        total: 2,
        restrict: 10,
        unit: 'xxxxxx',
        content: 'xxxxxxxxxxxxxxxxxxxx',
        images: [],
        video: ''
    }]
}