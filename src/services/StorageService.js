const StorageService = {

    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
    },

    clear: () => {
        localStorage.clear();
        
    },

    getUser : () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    getToken : () => {
        return localStorage.getItem('token');
    },
    
    tokenExist : () => {
        return localStorage.getItem('token') ? true : false;
    }

};

export default StorageService;