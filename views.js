(async () => {
    var show = document.getElementById(window.views)
    if (show !== null) {
      var url = document.location.toString()
      var arrUrl = url.split('//')
      var start = arrUrl[1].indexOf('/')
      var relUrl = arrUrl[1].substring(start)
      if (relUrl.indexOf('?') != -1) {
        relUrl = relUrl.split('?')[0]
      }
      const json = await fetch(`${window.post_views_api}?page=${relUrl}`).then(res => res.json())
      const hit = json[0].hit
      if (hit !== undefined) {
        show.innerHTML = `${hit}`
      }
    }
  })()
  