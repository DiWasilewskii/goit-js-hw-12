import{S as L,a as w,i as u}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function m(){s.loader.classList.remove("is-hidden")}function h(){s.loader.classList.add("is-hidden")}function g(){s.loadMoreBtn.classList.remove("is-hidden")}function l(){s.loadMoreBtn.classList.add("is-hidden")}function p(r){return r.map(({webformatURL:a,largeImageURL:n,tags:o,likes:e,views:t,comments:c,downloads:b})=>`
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
              <p class="discribe-text">${b}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function M(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(r*2),left:Math.ceil(r*2),behavior:"smooth"})}const i={key:"44856492-1c75259359e870db5bcbdf4ec",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};async function y(){return(await w.get("https://pixabay.com/api/",{params:i})).data}i.page=1;i.per_page=20;h();l();s.searchForm.addEventListener("submit",q);s.loadMoreBtn.addEventListener("click",x);async function q(r){r.preventDefault(),s.gallery.innerHTML="";const a=r.currentTarget;if(i.q=a.elements.searchtext.value.trim(),i.page=1,!i.q){P(),l();return}m();try{const{totalHits:n,hits:o}=await y();h(),i.maxPage=Math.ceil(n/i.per_page),s.gallery.insertAdjacentHTML("beforeend",p(o)),f.refresh(),o.length>0&&o.length!==n?g():o.length===0&&d()}catch{d()}finally{s.searchForm.reset()}}async function x(){i.page+=1,l(),m();try{const{hits:r}=await y();g(),h(),s.gallery.insertAdjacentHTML("beforeend",p(r)),f.refresh(),M()}catch{d()}finally{i.page===i.maxPage&&(l(),v())}}function d(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function P(){u.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function v(){u.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
