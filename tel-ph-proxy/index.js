const host = "telegra.ph"

addEventListener("fetch", async event => {
  //url = "https://telegra.ph/file/52d6d57638eca182e2fcf.jpg"
  let url = new URL(event.request.url)
  url.hostname = host
  let request = new Request(url, event.request)
  return event.respondWith(getResponse(request))

})

async function getResponse(request) {
  let html = await fetch(request.url)
  contentType = html.headers.get("content-type")
  console.log("content-type: ", contentType)
  console.log("status: ", html.status)
  //console.log(html)
  //console.log(path)

  const pathname = new URL(request.url).pathname


  if (contentType.includes("image")  /* || html.status == 304*/  ) {
    console.log(html)
    console.log(pathname)
    let { readable, writable } = new TransformStream()
    html.body.pipeTo(writable)
    return new Response(readable, html)

  } else if (html.status == 404 /*|| html.status == 304*/) {//if-modified-since: Sat, 15 May 2021 08:07:50 GMT
    return new Response(GetPage(404, request.url), {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      },
    })
  } else if (pathname == "/") {
    return new Response(GetPage(100, "/"), {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      },
    })
  } else {

//return new Response(await html.text())

    return new Response(await html.text(), {
      headers: {
        "content-type": contentType
      },
    })

  }
  /**/

}


function GetPage(code, url) {
  var page
  if (code == 404)
    page = `<!DOCTYPE html>
<body>
  <h1>404 Not Found</h1>
  <p>未找到页面，请检查网址</p>
  <p>请求URL: `+ url + `</p>
</body>`

  if (code == 100)
    page = `<!DOCTYPE html>
<body>
  <h1>Home</h1>
  <p>这里是主页，以后可能会加一些奇奇怪怪的东西</p>
</body>`
  return page
}
