export default function acctsReducer(state, action) {
    switch(action.type) {
        case 'init-accts': return action.payload.accts;
        default: return [];
    }
}