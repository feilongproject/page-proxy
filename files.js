addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname="files.yande.re";
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)
