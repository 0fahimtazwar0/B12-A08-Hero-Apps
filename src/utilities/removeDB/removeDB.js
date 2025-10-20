import { getAppsDB } from "../AddToDB/AddToDb"

const removeDB = (id) => {
    const storedApps = getAppsDB();
    const newStoredAppsFunction = () => {
        const newStoredApps=[]
        storedApps.map(single => {
            if (single != id) {
                newStoredApps.push(single)
            }
        })
        return newStoredApps
    }

    const newStoredApps = newStoredAppsFunction()
    localStorage.setItem('installed', JSON.stringify(newStoredApps))
}

export {removeDB}