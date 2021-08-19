addEventListener("fetch", async event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	console.log(request)

	const requestURL = new URL(request.url)
	const path = requestURL.pathname
	console.log(path)

	const link = "https://" + "yande.re" + path
	const html = await fetch(link)

	const text = (await html.text())
		.replaceAll("files.yande.re", "yandefile.feilongproject.workers.dev")
		.replaceAll("assets.yande.re", "yandeass.feilongproject.workers.dev")
    
	return new Response(text, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    })

}
