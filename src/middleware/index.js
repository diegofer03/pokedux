export const logger = (store) => (next) => (action) => {
    next(action)
    console.log(store)
}

export const addNew = (store) => (next) => (action) => {
    action.action.payload.unshift({name: 'elmo', url: ''})
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    actionInfo.action.payload.map(poke => 
        poke.url = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/01/ditto-pokemon-go.jpg?tf=3840x'
    )
    next(actionInfo)
}