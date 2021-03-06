const initialState = {
    grid: [],
    startTime: null,
    stopTime: null,
    solution: null
}

const reducer = (state= {initialState}, action) => {
    switch (action.type) {
    case 'NEW_BOARD':
        return {
            ...state,
            grid: action.grid
        }
    case 'CHANGE_GRID':
        const newGrid = JSON.parse(JSON.stringify(state.grid)) //need newGrid because
        const index = action.index.split(' ')
        newGrid[index[1]][index[0]] = action.newVal
        return {
            ...state,
            grid: newGrid
        }
    case 'START_TIMER' :
        return {
            ...state,
            startTime: action.time
        }
    case 'STOP_TIMER' :
        return {
            ...state,
            stopTime: action.time
        }
      case 'STORE_SOLUTION' :
        return {
          ...state,
          solution: action.solution
        }
    default:
        return state;
    }
}

export default reducer
export initialState
