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
    //return new Response(ttt)

	const link = "https://" + "yande.re" + path + requestURL.search
	const html = await fetch(link)

	const text = (await html.text())
		.replaceAll("files.yande.re", file_url)
		.replaceAll("assets.yande.re", assets_url)
    
	return new Response(text, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    })
}
