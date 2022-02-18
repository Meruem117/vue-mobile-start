import type { reviewItem, activityItem, personItem, collectionitem, commentItem } from '@/models'

export async function getReviewList(): Promise<reviewItem[]> {
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
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
        video: {
            name: 'xxxxx',
            length: 'xxxx',
            src: 'xxxxxxxxxxx'
        }
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
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
        video: {
            name: 'xxxxx',
            length: 'xxxx',
            src: 'xxxxxxxxxxx'
        }
    }]
}

export async function getPersonList(): Promise<personItem[]> {
    return [{
        id: 1,
        name: 'XXX',
        title: 'xxxxx xxxxx',
        description: 'xxxxxxxxxxxxxxxxxxxx',
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
        video: {
            name: 'xxxxx',
            length: 'xxxx',
            src: 'xxxxxxxxxxx'
        }
    }, {
        id: 2,
        name: 'XXX',
        title: 'xxxxx xxxxx',
        description: 'xxxxxxxxxxxxxxxxxxxx',
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
        video: {
            name: 'xxxxx',
            length: 'xxxx',
            src: 'xxxxxxxxxxx'
        }
    }]
}

export async function getCollectionList(): Promise<collectionitem[]> {
    return [{
        id: 1,
        title: 'XXXXXX',
        time: 'xxxx-xx-xx xx:xx:xx',
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
    }, {
        id: 2,
        title: 'XXXXXX',
        time: 'xxxx-xx-xx xx:xx:xx',
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
    }]
}

export async function getAcitivityById(id: number): Promise<activityItem> {
    console.log(id)
    return {
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
        images: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
        ],
        video: {
            name: 'xxxxx',
            length: 'xxxx',
            src: 'xxxxxxxxxxx'
        }
    }
}

export async function getRecordById(id: number): Promise<reviewItem> {
    console.log(id)
    return {
        id: 1,
        name: 'XXX',
        attend: 'XX',
        tel: '1908234750',
        gender: 0,
        age: 28,
        location: 'xxxxxxx101x',
        time: 'xxxx-xx-xx xx:xx:xx',
        clock: 'xxxx-xx-xx xx:xx:xx'
    }
}

export async function getCommentListByActivityId(id: number): Promise<commentItem[]> {
    console.log(id)
    return [{
        id: 1,
        name: 'xxxx',
        like: 35,
        content: 'xxxxxxxxxx',
        time: 'xxxx-xx-xx',
        children: [{
            id: 3,
            name: 'xxxx',
            like: 35,
            content: 'xxxxxxxxxx',
            time: 'xxxx-xx-xx'
        }, {
            id: 4,
            name: 'xxxx',
            like: 35,
            content: 'xxxxxxxxxx',
            time: 'xxxx-xx-xx'
        }]
    }, {
        id: 2,
        name: 'xxxx',
        like: 35,
        content: 'xxxxxxxxxx',
        time: 'xxxx-xx-xx'
    }]
}