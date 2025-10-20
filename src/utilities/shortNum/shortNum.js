const shortNum = (downloads) => {
    if (String(downloads).length > 6) {
        downloads = (downloads / 1000000) + 'M'
    }
    else if (String(downloads).length > 3) {
        downloads = (downloads / 1000) + 'K'
    }
    return downloads
};

export {shortNum};