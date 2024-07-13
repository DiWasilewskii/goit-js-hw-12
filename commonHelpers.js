import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();i.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});const s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")};function h(r){return r.map(e=>`<li class="card">
            <a href="${e.largeImageURL}" class="big gallery-link">
              <img
                src="${e.previewURL}"
                alt="${e.tags}"
                title="${e.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${e.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${e.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${e.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${e.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function c(r){switch(r){case"outdata":i.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":i.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:i.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}const d={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};function m(r){return d.q=r,`https://pixabay.com/api/?${new URLSearchParams(d)}`}function g(r){return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}s.searchForm.addEventListener("submit",p);function p(r){r.preventDefault();const e=r.target.searchtext.value;if(!e){c("outdata");return}s.gallery.innerHTML="",s.loader.classList.add("loader"),g(m(e)).then(o=>{if(s.loader.classList.remove("loader"),o.totalHits===0){c("nodata");return}s.gallery.insertAdjacentHTML("beforeend",h(o.hits)),u.refresh()}).catch(o=>{s.loader.classList.remove("loader"),c(o)}).finally(s.searchForm.reset())}const u=new f(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});u.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
