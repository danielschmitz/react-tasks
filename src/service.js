import config from "./config"

const service = {
    getAll: () => {
        return fetch(`${config.api}/tasks/`)
    }
}

export default service;