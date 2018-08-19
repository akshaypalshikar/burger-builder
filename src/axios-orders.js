import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-aks.firebaseio.com/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default instance;