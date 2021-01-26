fetch('/api/getName', {
  headers: {
    'X-LYJ': 'LinYingJie'
  }
})
  .then(res => {
    return res.json()
  })
  .then(res => {
    console.log(res);
  })


document.getElementById('btn').onclick = function () {
  fetch('/api/getName', {
    headers: {
      'X-LYJ': 'LinYingJie'
    }
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res);
    })
}
document.getElementById('btn2').onclick = function () {
  fetch('/api/getTotal')
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res);
    })
}
