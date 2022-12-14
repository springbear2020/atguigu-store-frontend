import request from './request'
import mock from './mock'

// 三级联动菜单列表
export const reqCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
})
// 轮播图数据
export const reqBannerList = () => mock.get('/banner')
// floor 数据
export const reqFloorList = () => mock.get('/floor')
// 搜索商品信息
export const reqCommoditySearch = (conditions) => request({
    url: '/list',
    method: 'post',
    data: conditions
})
// 查看商品详情
export const reqGoodDetail = (skuId) => request({
    url: `/item/${skuId}`,
    method: 'get'
})
// 将商品加入购物车或更新购物车中商品数量
export const reqAddOrUpdateCart = (skuId, skuNum) => request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})
// 获取购物车列表数据
export const reqCartList = () => request({
    url: '/cart/cartList',
    method: 'get'
})
// 删除购物车商品
export const reqDeleteCartItem = (skuId) => request({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})
// 修改购物车商品选中状态
export const reqUpdateCartCheckStatus = (skuId, isChecked) => request({
    url: `cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})
// 获取注册验证码
export const reqGetVerifyCode = (phone) => request({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})
// 用户注册
export const reqUserRegister = (user) => request({
    url: `/user/passport/register`,
    data: user,
    method: 'post'
})
// 用户登录
export const reqUserLogin = (user) => request({
    url: `/user/passport/login`,
    data: user,
    method: 'post'
})
// 获取用户信息
export const reqUserInfo = () => request({
    url: `/user/passport/auth/getUserInfo`,
    method: 'get'
})
// 退出登录
export const reqLogout = () => request({
    url: `/user/passport/logout`,
    method: 'get'
})
// 获取用户收获地址信息
export const reqUserAddress = () => request({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})
// 获取用户订单交易信息
export const reqGoodsList = () => request({
    url: '/order/auth/trade',
    method: 'get'
})
// 提交订单
export const reqSubmitOrder = (tradeNo, data) => request({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data: data
})
// 获取订单支付信息
export const reqPayInfo = (orderId) => request({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
})
// 查询订单支付状态
export const reqPayStatus = (orderId) => request({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
})
// 查询个人订单列表
export const reqOrderList = (current, size) => request({
    url: `/order/auth/${current}/${size}`,
    method: 'get'
})