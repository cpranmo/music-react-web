// 将一维数组转化为二维数组
export function groups(array, length) {
    const newArray = []
    for (let i = 0; i < array.length; i + length) {
        newArray.push(array.slice(i, i += length))
    }
    return newArray
}