{const t=t=>{const e=document.createElement("div");return e.classList.add("dinamicContent"),e.innerHTML=`<section class="dinamicContent__section l-flex">\n    <img class="dinamicContent__img" src="${t.img}"\n          alt="">\n        <div class="dinamicContent__boxDesc l-flex">\n          <div class="dinamicContent__boxDesc__text l-flex">\n            <h3 class="dinamicContent__title">${t.title}</h3>\n            <h4 class="dinamicContent__category">${t.category}</h4>\n            <span class="dinamicContent__date">${t.date}</span>\n            <div class="dinamicContent__badge">\n              <span class="${t.badgeClass}">${t.badgeName}</span>\n            </div>\n          </div>\n          <div class="dinamicContent__boxDesc__btn l-flex">\n            <button class="btn-select">\n              <input type="checkbox" id="${t.checkItem}">\n              <label for="${t.checkItem}"></label>\n            </button>\n          </div>\n        </div>\n    </section>`,e};async function conteudoDinamico(e){const a=await fetch(e),n=await a.json(),i=document.querySelector(".dinamicContent-box");n.forEach(e=>{const a=t(e);i.appendChild(a)})}conteudoDinamico("./dinamicContent.json")}function calcMainWidth(t,e,a,n){const i=document.querySelector('[data-content="main"]');t.classList.contains(a)?i.setAttribute("data-leftSidebar","active"):t.classList.contains(n)&&i.setAttribute("data-leftSidebar","inactive"),e.classList.contains(a)?i.setAttribute("data-rightSidebar","active"):e.classList.contains(n)&&i.setAttribute("data-rightSidebar","inactive")}function debounce(t,e){let a;return(...n)=>{a&&clearTimeout(a),a=setTimeout(()=>{t(...n)},e)}}function outsideEvent(t,e,a){const n=document.documentElement,i="data-outside";function c(s){t.contains(s.target)||(t.removeAttribute(i,""),e.forEach(t=>{n.removeEventListener(t,c)}),a())}t.hasAttribute(i)||(e.forEach(t=>{setTimeout(()=>n.addEventListener(t,c))}),t.setAttribute(i,""))}{const t=document.querySelector('[data-change="showBtn"]'),e=document.querySelectorAll('[data-change="btn"]'),a=document.querySelector('[data-change="list-btn"]'),n=["touchstart","click"],{body:i}=document,c=t=>{const a=t.target.classList,n=["t-light-red","t-light-purple","t-light-orange","t-light-green","t-light-blue","t-dark-red","t-dark-purple","t-dark-orange","t-dark-green","t-dark-blue"];["light-purple","light-blue","light-green","light-orange","light-red","dark-purple","dark-blue","dark-green","dark-orange","dark-red"].includes(a.value)&&(n.forEach(t=>{i.classList.remove(t)}),i.classList.add(`t-${a.value}`),e.forEach(t=>{t.classList.remove("active")}),a.add("active"))},s=i=>{i.preventDefault(),t.classList.add("is-show"),a.classList.add("is-show"),outsideEvent(a,n,()=>{t.classList.remove("is-show"),a.classList.remove("is-show")}),n.forEach(t=>{e.forEach(e=>{e.addEventListener(t,c)})})};n.forEach(e=>{t.addEventListener(e,s)})}{const t=document.querySelector('[data-lang="button"]'),e=document.querySelector('[data-lang="content"]'),a=["touchstart","click"],n="is-active",i="is-inactive";t.classList.add(i),e.classList.add(i);const c=c=>{c.preventDefault(),t.classList.replace(i,n),e.classList.replace(i,n),outsideEvent(e,a,()=>{t.classList.replace(n,i),e.classList.replace(n,i)})};a.forEach(e=>{t.addEventListener(e,c)})}{const t=document.querySelector('[data-sidebar="button"]'),e=document.querySelector('[data-sidebar="sidebarLeft"]'),a=document.querySelector('[data-sidebar="sidebarRight"]'),n=["tuchstart","click"],i="is-active",c="is-inactive",s=a.classList,d=e.classList,o=t=>{const n=t.currentTarget.innerWidth;return n>1440?(s.add(i),s.replace(c,i)):n<1440&&(s.add(c),s.replace(i,c)),n>768?(d.add(i),d.replace(c,i)):n<768&&(d.add(c),d.replace(i,c)),calcMainWidth(e,a,i,c),s.value&&d.value},r=()=>{s.contains(i)?(s.replace(i,c),a.setAttribute("data-off","")):d.contains(i)&&a.hasAttribute("data-off")?(d.replace(i,c),a.removeAttribute("data-off")):d.contains(c)?d.replace(c,i):d.contains(i)&&!a.hasAttribute("data-off")&&s.replace(c,i),calcMainWidth(e,a,i,c)};n.forEach(e=>{t.addEventListener(e,r)}),window.addEventListener("resize",debounce(o,50)),window.addEventListener("pageshow",()=>{window.innerWidth<1440?s.add(c):window.innerWidth>1440&&s.add(i),window.innerWidth<768?d.add(c):window.innerWidth>768&&d.add(i),calcMainWidth(e,a,i,c)})}