import{S as d}from"./assets/vendor-5af972a3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:l,downloads:n})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}" 
            alt="${s}" 
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
              <p class="discribe-text">${t}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${l}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${n}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const a={key:"44856492-1c75259359e870db5bcbdf4ec",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function f(i){return a.q=i,`https://pixabay.com/api/?${new URLSearchParams(a).toString()}`}function h(i){return fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const m=new d(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),c={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};c.searchForm.addEventListener("submit",p);function p(i){i.preventDefault();const o=i.currentTarget.elements.searchtext.value.toLowerCase().trim();c.gallery.innerHTML="",c.loader.classList.add("loader"),h(f(o)).then(s=>{c.loader.classList.remove("loader");const e=s.hits;e.length===0&&fetchError(),c.gallery.insertAdjacentHTML("beforeend",u(e)),m.refresh()}).catch(fetchError).finally(c.searchForm.reset())}
//# sourceMappingURL=commonHelpers.js.map
