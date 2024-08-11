let proxyObj={};
proxyObj['/ws']={
  ws:true,
  target:"ws://localhost:8082"
};
proxyObj['/']={
  ws:false,
  target:'http://localhost:8082',
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
