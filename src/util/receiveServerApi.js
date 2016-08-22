import {
  ToastAndroid,
} from 'react-native';

export const receiveServerByFetch = (url, parmas, sucessCb, failCb) => {

	let parmas_str = '';
	for (key in parmas){
		parmas_str += '&' + key + '=' + parmas[key];
	}
	let url_parmas = url +'?'+ parmas_str.substring(1);
	
	fetch(url_parmas, {
	  	method: 'GET',
	  	headers: {
	    	'Accept': 'application/json',
	    	'Content-Type': 'application/json',
	  	},
	})
	.then((data) => data.json())
    .then((dataJson) => {
    	if (dataJson.code == 0){
    		sucessCb && sucessCb(dataJson);
    	} else {
    		ToastAndroid.show(dataJson.msg + '('+ dataJson.code +')', ToastAndroid.LONG);
    		failCb && failCb(dataJson);
    	}
        
    })
    .catch((error) => {
        ToastAndroid.show('网络错误', ToastAndroid.SHORT);
        console.log(error);
    });
}