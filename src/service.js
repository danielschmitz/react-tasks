import config from "./config"

const service = {
    getAll: () => {
        return fetch(`${config.api}/tasks?_sort=id&_order=desc`)
    },
    getTask: (id) => {
        return fetch(`${config.api}/tasks/${id}`)
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
    },
    delete: (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        return fetch(`${config.api}/tasks/${id}`, requestOptions)
    }
}

export default service;