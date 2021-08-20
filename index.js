const file_url = "yandefile.feilongproject.workers.dev"
const assets_url = "yandeass.feilongproject.workers.dev"


addEventListener("fetch", async event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	console.log(request)

	const requestURL = new URL(request.url)
	const path = requestURL.pathname

    //const ttt = path + " " + requestURL + " 2 " + requestURL.search;

	const link = "https://" + "yande.re" + path + requestURL.search
	const html = await fetch(link)

	const contentType = html.headers.get("content-type")

	//return new Response(contentType)

	const text = (await html.text())
		.replaceAll("files.yande.re", file_url)
		.replaceAll("assets.yande.re", assets_url)
		.replaceAll("/favicon.ico", "https://cdn.jsdelivr.net/gh/feilongproject/yande-proxy/favicon.ico")
    
	return new Response(text, {
        headers: {
            "content-type": contentType,
        },
    })
}
