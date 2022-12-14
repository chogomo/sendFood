/*
使用mockjs提供mock數據接口
*/

import Mock from 'mockjs'
import data from './data.json'

//返回goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//返回info的接口
Mock.mock('/info',{code:0,data:data.info})

//不需要向外暴露任何數據,只需要保存能執行即可