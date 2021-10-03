const initState = {
    isPlaying: false
}

// 相当于大厨
export default function audioReducer(state = initState, action) {
    const { type } = action;
    switch (type) {
        case "isPlaying":
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        default:
            return state;
    }
}