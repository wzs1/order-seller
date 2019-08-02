
import wepy from 'wepy';
import util from './utils';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = ''
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
//const publicUrl = 'https://order.yuzhiculture.com/';
const publicUrl = 'http://192.168.3.206/';

const wxHttp = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    // data.sign = SIGN;
    // data.time = TIMESTAMP;
    let res = await wepy.request({
        url:url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    tip.loaded();
    return res;
};

const wxHttp2 = (method,data,url)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:publicUrl+url,
            data,
            method,
            header:{
                'content-type': 'application/x-www-form-urlencoded' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
            },
            success:function(res){
                resolve(res.data);
            },
            fail:function(){
                reject('数据加载异常');
            }
        })
    })
}


module.exports = {
    wxHttp,
    wxHttp2
}