import config from "./config"

const service = {
    getAll: () => {
        return fetch(`${config.api}/tasks/`)
    },
    update: task => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        return fetch(`${config.api}/tasks/${task.id}`, requestOptions)
    },
    create: task => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        return fetch(`${config.api}/tasks`, requestOptions)
    }
}

export default service;