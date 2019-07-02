{const t=t=>{const e=document.createElement("div");return e.classList.add("dinamicContent"),e.innerHTML=`<section class="dinamicContent__section l-flex">\n    <img class="dinamicContent__img" src="${t.img}"\n          alt="">\n        <div class="dinamicContent__boxDesc l-flex">\n          <div class="dinamicContent__boxDesc__text l-flex">\n            <h3 class="dinamicContent__title">${t.title}</h3>\n            <h4 class="dinamicContent__category">${t.category}</h4>\n            <span class="dinamicContent__date">${t.date}</span>\n            <div class="dinamicContent__badge">\n              <span class="${t.badgeClass}">${t.badgeName}</span>\n            </div>\n          </div>\n          <div class="dinamicContent__boxDesc__btn l-flex">\n            <button class="btn-select">\n              <input type="checkbox" id="${t.checkItem}">\n              <label for="${t.checkItem}"></label>\n            </button>\n          </div>\n        </div>\n    </section>`,e};async function conteudoDinamico(e){const a=await fetch(e),c=await a.json(),s=document.querySelector(".dinamicContent-box");c.forEach(e=>{const a=t(e);s.appendChild(a)})}conteudoDinamico("./dinamicContent.json")}function calcMainWidth(t,e,a,c){const s=document.querySelector('[data-content="main"]');t.classList.contains(a)?s.setAttribute("data-leftSidebar","active"):t.classList.contains(c)&&s.setAttribute("data-leftSidebar","inactive"),e.classList.contains(a)?s.setAttribute("data-rightSidebar","active"):e.classList.contains(c)&&s.setAttribute("data-rightSidebar","inactive")}function debounce(t,e){let a;return(...c)=>{a&&clearTimeout(a),a=setTimeout(()=>{t(...c)},e)}}function outsideEvent(t,e,a){const c=document.documentElement,s="data-outside";function n(i){t.contains(i.target)||(t.removeAttribute(s,""),e.forEach(t=>{c.removeEventListener(t,n)}),a())}t.hasAttribute(s)||(e.forEach(t=>{setTimeout(()=>c.addEventListener(t,n))}),t.setAttribute(s,""))}{const t=document.querySelector('[data-bell="button"]'),e=document.querySelector('[data-bell="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";e.classList.add(s);const n=t=>{t.preventDefault(),e.classList.replace(s,c),outsideEvent(e,a,()=>{e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}{const t=document.querySelector('[data-change="showBtn"]'),e=document.querySelectorAll('[data-change="btn"]'),a=document.querySelector('[data-change="list-btn"]'),c=["touchstart","click"],{body:s}=document,n=t=>{const a=t.target.classList,c=["red","blue","purple","orange","green"],n=["t-light","t-dark"],i=Array.from(a),d=i[0],o=i[1];c.includes(o)&&n.includes(d)&&(c.forEach(t=>{s.classList.remove(t)}),n.forEach(t=>{s.classList.remove(t)}),s.classList.add(d,o),e.forEach(t=>{t.classList.remove("active")}),a.add("active"))},i=s=>{s.preventDefault(),t.classList.add("is-show"),a.classList.add("is-show"),outsideEvent(a,c,()=>{t.classList.remove("is-show"),a.classList.remove("is-show")}),c.forEach(t=>{e.forEach(e=>{e.addEventListener(t,n)})})};c.forEach(e=>{t.addEventListener(e,i)})}{const t=document.querySelector('[data-lang="button"]'),e=document.querySelector('[data-lang="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";t.classList.add(s),e.classList.add(s);const n=n=>{n.preventDefault(),t.classList.replace(s,c),e.classList.replace(s,c),outsideEvent(e,a,()=>{t.classList.replace(c,s),e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}{const t=document.querySelector('[data-grid="button"]'),e=document.querySelector('[data-grid="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";e.classList.add(s);const n=t=>{t.preventDefault(),e.classList.replace(s,c),outsideEvent(e,a,()=>{e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}{const t=document.querySelector('[data-maxItems="button"]'),e=document.querySelector('[data-maxItems="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";t.classList.add(s),e.classList.add(s);const n=n=>{n.preventDefault(),t.classList.replace(s,c),e.classList.replace(s,c),outsideEvent(e,a,()=>{t.classList.replace(c,s),e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}{const t=document.querySelector('[data-sidebar="button"]'),e=document.querySelector('[data-sidebar="sidebarLeft"]'),a=document.querySelector('[data-sidebar="sidebarRight"]'),c=["tuchstart","click"],s="is-active",n="is-inactive",i=a.classList,d=e.classList,o=t=>{const c=t.currentTarget.innerWidth;return c>1440?(i.add(s),i.replace(n,s)):c<1440&&(i.add(n),i.replace(s,n)),c>768?(d.add(s),d.replace(n,s)):c<768&&(d.add(n),d.replace(s,n)),calcMainWidth(e,a,s,n),i.value&&d.value},r=()=>{i.contains(s)?(i.replace(s,n),a.setAttribute("data-off","")):d.contains(s)&&a.hasAttribute("data-off")?(d.replace(s,n),a.removeAttribute("data-off")):d.contains(n)?d.replace(n,s):d.contains(s)&&!a.hasAttribute("data-off")&&i.replace(n,s),calcMainWidth(e,a,s,n)};c.forEach(e=>{t.addEventListener(e,r)}),window.addEventListener("resize",debounce(o,50)),window.addEventListener("pageshow",()=>{window.innerWidth<1440?i.add(n):window.innerWidth>1440&&i.add(s),window.innerWidth<768?d.add(n):window.innerWidth>768&&d.add(s),calcMainWidth(e,a,s,n)})}{const t=document.querySelector('[data-order="button"]'),e=document.querySelector('[data-order="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";t.classList.add(s),e.classList.add(s);const n=n=>{n.preventDefault(),t.classList.replace(s,c),e.classList.replace(s,c),outsideEvent(e,a,()=>{t.classList.replace(c,s),e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}{const t=document.querySelector('[data-user="button"]'),e=document.querySelector('[data-user="content"]'),a=["touchstart","click"],c="is-active",s="is-inactive";e.classList.add(s);const n=t=>{t.preventDefault(),e.classList.replace(s,c),outsideEvent(e,a,()=>{e.classList.replace(c,s)})};a.forEach(e=>{t.addEventListener(e,n)})}