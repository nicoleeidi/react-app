export const initGrid = (grid) => {
    return {
        type: 'NEW_BOARD',
        grid: grid,
    }
}

export const changeGrid = (newVal, index) => {
    return {
        type: 'CHANGE_GRID' ,
        newVal : newVal,
        index: index
    }
}

export const startTimer = (time) => {
    return {
        type: 'START_TIMER',
        time: time
    }
}

export const stopTimer = (time) => {
    return {
        type: 'STOP_TIMER',
        time: time
    }
}
export const addLike = (index) => {
  return {
    type: 'LIKE',
    s_and_l: s_and_l,
    newVal: newVal,
    index: index

  }
}
