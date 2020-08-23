export const randomIndex = array => Math.floor(Math.random() * array.length)

export const randomElement = array => array[randomIndex(array)]

export const contains = (array, element) => array.indexOf(element) > -1
