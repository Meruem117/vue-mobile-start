export interface upItem {
    id: number,
    mid: string,
    name: string
}

export interface upDetailItem {
    card: {
        mid: string,
        name: string,
        sex: string,
        face: string,
        sign: string,
        fans: number,
        attention: number,
        Official: {
            title: string
        }
    },
    archive_count: number,
    follower: number,
    like_num: number
}
