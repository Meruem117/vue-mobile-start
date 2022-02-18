export interface applyItem {
    id: number,
    name: string,
    attend: string,
    tel: string,
    gender: number,
    age: number,
    location: string,
    time: string,
    clock: string,
    pass?: boolean,
    reason?: string
}

export interface activityItem {
    id: number,
    area: string,
    type: string,
    title: string,
    location: string,
    start: string,
    end: string,
    restrict: number,
    unit: string,
    content: string,
    images: string[],
    video: string
}

export interface personItem {
    id: number,
    name: string,
    title: string,
    description: string,
    images: string[],
    video: string
}

export interface collectionitem {
    id: number,
    title: string,
    images: string[]
}

interface baseCommentItem {
    id: number,
    name: string,
    like: number,
    content: string,
    time: string

}

export interface commentItem {
    id: number,
    name: string,
    like: number,
    content: string,
    time: string,
    children: baseCommentItem[]
}