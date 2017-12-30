import axios from 'axios'
import qs from 'qs'
import * as fn from '@/utils/common'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:9999';

//POST传参序列化
axios.interceptors.request.use((config) => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});

//返回状态判断
// axios.interceptors.response.use((res) =>{
//     if(!res.status.success){
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     return Promise.reject(error);
// });
const fetch = {}
fetch.post = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				console.log(err)
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}
fetch.get = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.get(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				console.log(err)
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}
export default fetch