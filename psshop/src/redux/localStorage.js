export const loadState = () => {
    try {
        const serState = localStorage.getItem("psstate");
        if (serState === null) {
            return undefined;
        }
        return JSON.parse(serState);
    } catch (e) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serState = JSON.stringify(state);
        localStorage.setItem("psstate", serState);
    } catch (e) {
        console.log(e);
    }
}