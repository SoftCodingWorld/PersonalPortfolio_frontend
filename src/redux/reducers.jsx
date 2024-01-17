const initialState={
    currentPage: 'home',
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};