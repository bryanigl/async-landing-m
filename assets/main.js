const api = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCAMFai9WmngXRmb5BLvfEuQ&part=snippet%2Cid&order=date&maxResults=2';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6adbb370f0msh3c0f7f2ab4bf547p1d486ajsn60df332b36c3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fecthdata(urlapi)
{
    const response = await fetch(urlapi, options);
    const data=await response.json();
    return data;
}
(async ()=>
{
try
{
    const videos = await fecthdata(api);
    let view = `
	${videos.items.map(video => `
	<div class="group relative">
		<div
			class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
			</h3>
		</div>
	</div>
	`)}
				
	`;
	content.innerHTML=view;
}catch(error)
{
	console.log(error);
}
})();