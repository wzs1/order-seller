/**
 * 阿里云相关信息配置
 */
var fileHost="https://jiutan.oss-cn-shenzhen.aliyuncs.com"
var config = {
  //aliyun OSS config
  uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改
  AccessKeySecret: 'yvqIpgKTFW72OmIOVWfNp0aHISj56U',
  OSSAccessKeyId: 'LTAI8d3Hbaufuv1l',
  timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config