import {wxHttp} from '@/utils/wxHttp';
 const publicUrl = 'http://192.168.3.206/';

// 微信登录
const sellerLogin =  'mini/store/sellerLogin';

//商家资料认证
const sellerAuth =  'mini/store/edit';

//商家每周的利润
const sellerMoney = 'mini/order/sellerMoney';


//配置商户平台
const queryMchByStoreId = "mini/merchant/queryMchByStoreId";
const merchantAdd = "mini/merchant/add";
const merchantEdit = "mini/merchant/edit";

//商品分类
const typeList = "mini/type/list";
const typeAdd = "mini/type/add";
const selectTypeById = "mini/type/selectTypeById";
const typeModify = "mini/type/edit";
const typeDel = "mini/type/remove";

//金币兑换
const getGoldRule = "mini/goldRule/getGoldRule";
const goldRuleAdd = "mini/goldRule/add";
const goldRuleEdit = "mini/goldRule/edit";

//订单
const sellerOrder = "mini/order/sellerOrder";

//商品
const addGoods = "mini/goods/add";
const getGoodsByPage = "mini/goods/getGoodsByPage";
const getSellerGoodsSingel = "mini/goods/getSellerGoodsSingel";
const removegoods = "mini/goods/remove";
const editGoods = "mini/goods/edit";
module.exports = {
    sellerLogin,
    sellerAuth,
    sellerMoney,
    queryMchByStoreId,
    merchantAdd,
    merchantEdit,
    getGoldRule,
    goldRuleAdd,
    goldRuleEdit,

    typeList,
    typeAdd,
    selectTypeById,
    typeModify,
    typeDel,
    sellerOrder,

    addGoods,
    getGoodsByPage,
    removegoods,
    getSellerGoodsSingel,
    editGoods,
}
