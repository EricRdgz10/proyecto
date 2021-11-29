importScrips("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");
if (workbox) {
	console.log("ajua! workbox esta cargado! :)");
	workbox.precacheAndRoute([]);

	/*cahache de imgenes en la carapeta, por "ejemplo otos", editamos a otras crapetas que se obtuvieron y configuramos en el archivo sw-config.js */
	workbox.routing.registerRoute(
		/(.*)others(.*)\.(?:png|gif|jpg)/,
		new workbox.strategies.CacheFirst({
			cacheName: "images",
			plugins:[
				new workbox.expiration.plugins({
					maxEntries: 50,
					maxAgeSeconds:30 * 24 * 60 * 60,
				})

			]
		})
	);
/*hacemos que el contenido en js y css sean rapidos devolviendo los "assts de la cache, mientras se asegura de que se actualizan en segundo plano para su proximo uso.*/
workbox.routing.registerRoute(
	//cache de js,css y scc
	/.*\.(?:css|js|scss|)/,
		//usamos el cache pero actulizamos en segundo plano de manera posible.
		new workbox.strategies.StaleWhileRevalidate({
			//usamos el nombre de un cache personalizado.
			cacheName"assets",
		})
);


//cache de fuentes de google
workbox.routing.registerRoute(
	new RegExp(https://fonts.(?:googleapis|gstatic).com/(.*)),
		new workbox.strategies.CacheFirst({
			cacheName: "google-fonts",
			plugins:[
				new workbox.cachebleResponse.Plugins({
					statuses: [0,200],
				}),
			],
		})
	


	);
	//agregar analisisi offiline
	workbox.googleAnalytics.initialize();

	/*instalar un nuevo service worker y hacer que actualize y controle la pagina wreb lo antes posible*/
	workbox.core.skipWaiting();
	workbox.core.clientsClaim();
else{
	console.log("fallo! workbox no esta cragado");
}






















}