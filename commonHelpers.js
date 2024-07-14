import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){return t.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:r,comments:c,downloads:u})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${s}" 
            alt="${i}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${r}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${c}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${u}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const n={key:"44856492-1c75259359e870db5bcbdf4ec",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function h(t){return n.q=t,`https://pixabay.com/api/?${new URLSearchParams(n).toString()}`}function g(t){return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const p=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),a={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};a.searchForm.addEventListener("submit",y);function y(t){t.preventDefault();const o=t.currentTarget.elements.searchtext.value.toLowerCase().trim();a.gallery.innerHTML="",a.loader.classList.add("loader"),g(h(o)).then(i=>{a.loader.classList.remove("loader");const e=i.hits;e.length===0&&d(),a.gallery.insertAdjacentHTML("beforeend",m(e)),p.refresh()}).catch(d).finally(a.searchForm.reset())}function d(t){switch(t){case"outdata":l.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":l.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break}}
//# sourceMappingURL=commonHelpers.js.map
