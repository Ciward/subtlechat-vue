let proxyObj={};
proxyObj['/ws']={
  ws:true,
  target:"ws://10.102.33.6:8082"
};
proxyObj['/']={
  ws:false,
  target:'http://10.102.33.6:8082',
  changeOrigin: true,
  pathRewrite:{
    '^/':''
  }
}
module.exports={
  devServer:{
    disableHostCheck: true,
    port:8080,
    proxy:proxyObj
  }
}
