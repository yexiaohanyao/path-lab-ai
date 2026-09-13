
window.SiteIcons = Object.fromEntries(Object.entries({
 mechanical:'<circle cx="12" cy="12" r="4"></circle><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"></path><circle cx="12" cy="12" r="8"></circle>',
 materials:'<path d="m12 3 9 6v7l-9 5-9-5V9l9-6Zm0 0v18M3 9l9 6 9-6"></path>',
 medical:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"></path>',
 environment:'<path d="M3 7c3-5 6 5 9 0s6 5 9 0M3 12c3-5 6 5 9 0s6 5 9 0M3 17c3-5 6 5 9 0s6 5 9 0"></path>',
 business:'<path d="M4 20V12h4v8m2 0V8h4v12m2 0V4h4v16M2 20h20"></path>',
 biology:'<path d="M7 2c0 9 10 11 10 20M17 2C17 11 7 13 7 22M8 5h8M10 9h4M10 15h4M8 19h8"></path>'
}).map(([id,body])=>[id,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+body+'</svg>']));

