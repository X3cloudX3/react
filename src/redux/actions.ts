import Actions from "./actions.names"

export const setFeedback = (feedback: any, title: any) => {
    return {
        type: Actions.SET_FEEDBACK,
        payload: { feedback, title }
    }
}

export const setFavMovies = (movies: any) => {
    return {
        type: Actions.SET_FAVOREIST,
        payload: { movies }
    }
}