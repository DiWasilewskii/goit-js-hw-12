import{S as v,a as M,i as h}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=new v(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function g(){s.loader.classList.remove("is-hidden")}function f(){s.loader.classList.add("is-hidden")}function p(){s.loadMoreBtn.classList.remove("is-hidden")}function l(){s.loadMoreBtn.classList.add("is-hidden")}function y(i){return i.map(({webformatURL:a,largeImageURL:n,tags:o,likes:e,views:t,comments:c,downloads:L})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}" 
            alt="${o}" 
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
              <p class="discribe-text">${c}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${L}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function w(){const i=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(i*2),left:Math.ceil(i*2),behavior:"smooth"})}const r={key:"44856492-1c75259359e870db5bcbdf4ec",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};async function b(){return(await M.get("https://pixabay.com/api/",{params:r})).data}f();l();s.searchForm.addEventListener("submit",x);async function x(i){i.preventDefault(),s.gallery.innerHTML="";const a=i.currentTarget;if(r.q=a.elements.searchtext.value.trim(),r.page=1,!r.q){P(),l();return}g();try{const{totalHits:n,hits:o}=await b(r);f(),r.maxPage=Math.ceil(n/r.per_page),s.gallery.insertAdjacentHTML("beforeend",y(o)),m.refresh(),o.length>0&&r.page<r.maxPage?(p(),s.loadMoreBtn.removeEventListener("click",d),s.loadMoreBtn.addEventListener("click",d)):o.length===0&&u()}catch{u()}finally{s.searchForm.reset()}}async function d(){r.page+=1,l(),g();try{const{hits:i}=await b(r);p(),f(),s.gallery.insertAdjacentHTML("beforeend",y(i)),m.refresh(),w(),r.page>=r.maxPage&&(l(),q(),s.loadMoreBtn.removeEventListener("click",d))}catch{u()}}function u(){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function P(){h.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function q(){h.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
