const getAppsDB = () =>{
    const storedAppsSTR = localStorage.getItem('installed')

    if (storedAppsSTR) {
        const storedApps = JSON.parse(storedAppsSTR)
        return storedApps;
    }
    else {
        return []
    }
}

const addToDB = (id) => {
   const storedApps = getAppsDB();
    console.log(storedApps)
    if (storedApps.includes(id)) {
        alert('already ache')
    }
    else {
        storedApps.push(id)
        localStorage.setItem('installed', JSON.stringify(storedApps))
    }
}

export {addToDB, getAppsDB}