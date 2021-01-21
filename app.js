if('serviceWorker' in navigator){
  window.onload=function(){
    navigator.serviceWorker.register('/sw.js').then(res=>{
      console.warn('service-worker is ready' + res.scope)
    }).catch(e=>console.warn(e))
  }
}