export function formatTime(datetime: Date): string {
  const year = datetime.getFullYear()
  const month = datetime.getMonth() > 9 ? datetime.getMonth() : '0' + datetime.getMonth()
  const day = datetime.getDay() > 9 ? datetime.getDay() : '0' + datetime.getDay()
  const hour = datetime.getHours() > 9 ? datetime.getHours() : '0' + datetime.getHours()
  const minute = datetime.getMinutes() > 9 ? datetime.getMinutes() : '0' + datetime.getMinutes()
  const second = datetime.getSeconds() > 9 ? datetime.getSeconds() : '0' + datetime.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}

export function getGender(gender: string): number {
  if (gender === '女') {
    return 0
  } else if (gender === '男') {
    return 1
  } else {
    return 2
  }
}

export function roundFun(value: number, n: number): number {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n)
}

export function convertNumber(play: number): string | number {
  return play > 10000 ? roundFun(play /= 10000, 1) + '万' : play
}

export function convertTime(tm: number): string {
  const d: Date = new Date(tm * 1000 + 2626560000)
  const y: number = new Date().getFullYear()
  const year: number = d.getFullYear()
  const month: number = d.getMonth()
  const date: number = d.getDate()
  return d.getFullYear() === y ? month + '-' + date : year + '-' + month + '-' + date
}