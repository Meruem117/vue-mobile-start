export interface reviewItem {
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

interface videoItem {
  name: string,
  length: string,
  src: string
}

export interface activityItem {
  id: number,
  area: string,
  type: string,
  title: string,
  location: string,
  start: string,
  end: string,
  total: number,
  restrict: number,
  unit: string,
  content: string,
  images: string[],
  video: videoItem
}

export interface personItem {
  id: number,
  name: string,
  title: string,
  description: string,
  images: string[],
  video: videoItem
}

export interface collectionItem {
  id: number,
  title: string,
  time: string,
  images: string[]
}

interface baseCommentItem {
  id: number,
  name: string,
  avatar: string,
  like: number,
  content: string,
  time: string

}

export interface commentItem {
  id: number,
  name: string,
  avatar: string,
  like: number,
  content: string,
  time: string,
  children?: baseCommentItem[]
}