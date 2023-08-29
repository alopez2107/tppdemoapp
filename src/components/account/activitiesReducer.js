export default function activitiesReducer(state, action) {
    console.log(`Inside the activities reducer: ${JSON.stringify(action.payload.activities)}`);
    switch(action.type) {
        case 'init-activities': return action.payload.activities;
        default: return null;
    }
}