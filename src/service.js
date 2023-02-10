import config from "./config"

const service = {
    getAll: () => {
        return fetch(`${config.api}/tasks/`)
    },
    update: async task => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        const data = await fetch(`${config.api}/tasks/${task.id}`, requestOptions)
        return data.json()
    }
}

export default service;