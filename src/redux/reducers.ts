import Actions from "./actions.names";

const initialState = {
    feedbackArray: [],
    favMovies: [],
}

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SET_FEEDBACK: {
            const { feedbackArray } = state
            const { title, feedback } = action.payload
            console.log(feedbackArray);

            return {
                ...state,
                feedbackArray: [...feedbackArray, { title, feedback }]
            }
        }
        case Actions.SET_FAVOREIST: {
            const { favMovies } = state
            const { movies } = action.payload
            console.log(favMovies);

            return {
                ...state,
                feedbackArray: [...favMovies, { movies }]
            }
        }
        default: {
            return state;
        }
    }
}
