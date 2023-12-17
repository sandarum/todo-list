(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var d=c.length-1;d>-1&&!t;)t=c[d--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class t{static tasks=[];getTasks(){return t.tasks}addTask(e){t.tasks.push(e)}removeTask(e){t.tasks.splice(e,1)}}const n=e.p+"7838b275ce7caeb0a26e.svg",c=e.p+"83b4018a1f8c5cf87f50.svg",d=e.p+"184b2da50bd4922b3638.svg";class o{constructor(e,t="",n="No Due Date"){this.title=e,this.description=t,this.dueDate=n,this.isCompleted=!1}getTaskInfo(){return{title:this.title,description:this.description,dueDate:this.dueDate,isCompleted:this.isCompleted}}updateTaskStatus(e){this.isCompleted=e}updateTaskDetails(e,t,n="No Due Date"){this.title=e,this.description=t,this.dueDate=n}}function s(){document.querySelector(".model-parent").style.display="block"}function a(){m()}function i(){document.querySelector(".task-details-model-parent").style.display="none"}function r(){p()}function l(){!function(){const e=(new t).getTasks(),o=document.querySelector(".taskList");o.appendChild(function(e){const t=new DocumentFragment;return e.forEach(((e,o)=>{const s=document.createElement("li");s.appendChild(function(e,t){const o=document.createElement("div"),s=document.createElement("input");s.setAttribute("type","checkbox");const a=document.createElement("p"),i=document.createElement("p");o.classList.add("task");const r=new Image;r.src=n,r.classList.add("delete");const l=new Image;l.src=c,l.classList.add("viewBtn");const u=new Image;u.src=d,u.classList.add("editBtn");const m=e.getTaskInfo().isCompleted;return s.checked=m,a.textContent=e.getTaskInfo().title,i.textContent=e.getTaskInfo().dueDate,s.classList.add("status"),!0===m?a.classList.add("completed"):a.classList.remove("completed"),!0===m?i.classList.add("completed"):i.classList.remove("completed"),a.dataset.index=t,i.dataset.index=t,s.dataset.index=t,r.dataset.index=t,l.dataset.index=t,u.dataset.index=t,o.appendChild(s),o.appendChild(a),o.appendChild(i),o.appendChild(l),o.appendChild(u),o.appendChild(r),o}(e,o)),t.appendChild(s)})),t}(e)),o.appendChild(function(){const e=document.createElement("button");return e.textContent="＋ Add Task",e.classList.add("add-ui-btn"),e}())}(),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(()=>{var n;n=e.dataset.index,(new t).removeTask(n),u(),l()}))})),document.querySelector(".add-ui-btn").addEventListener("click",s),document.querySelector(".close-icon").addEventListener("click",a),document.querySelector(".model-parent").addEventListener("click",(e=>{"model-parent"===e.target.className&&a()})),function(){const e=document.querySelectorAll(".status");null!==e&&e.forEach((e=>{e.addEventListener("change",(()=>{var n,c;n=e.checked,c=e.dataset.index,(new t).getTasks()[c].updateTaskStatus(n),function(e,t){const n=`p[data-index="${t}"]`;document.querySelectorAll(n).forEach((t=>{!0===e?t.classList.add("completed"):t.classList.remove("completed")}))}(n,c)}))}))}(),document.querySelectorAll(".viewBtn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const n=(new t).getTasks()[e].getTaskInfo();!function(e,t,n,c){const d=document.querySelector(".view-title"),o=document.querySelector(".view-description"),s=document.querySelector(".view-date"),a=document.querySelector(".view-status"),i=document.querySelector(".task-details-model-parent");d.textContent=e,o.textContent=t,s.textContent=n,a.textContent=!0===c?"Completed":"Incomplete",i.style.display="block"}(n.title,n.description,n.dueDate,n.isCompleted)}(e.dataset.index)}))})),document.querySelector(".view-close-icon").addEventListener("click",i),document.querySelector(".task-details-model-parent").addEventListener("click",(e=>{"task-details-model-parent"===e.target.className&&i()})),document.querySelectorAll(".editBtn").forEach((e=>{e.addEventListener("click",(()=>{console.log(e.dataset.index),function(e){const n=(new t).getTasks()[e].getTaskInfo();!function(e,t,n,c){const d=document.querySelector("#edit-title"),o=document.querySelector("#edit-description"),s=document.querySelector("#edit-due-date"),a=document.querySelector(".index"),i=document.querySelector(".edit-model-parent");d.value=e,o.value=t,s.value=n,a.textContent=c,i.style.display="block"}(n.title,n.description,n.dueDate,e)}(e.dataset.index)}))})),document.querySelector(".edit-close-icon").addEventListener("click",r),document.querySelector(".edit-model-parent").addEventListener("click",(e=>{"edit-model-parent"===e.target.className&&r()}))}function u(){const e=document.querySelector(".taskList");for(;e.firstChild;)e.removeChild(e.firstChild)}function m(){document.querySelector(".model-parent").style.display="none"}function p(){document.querySelector(".edit-model-parent").style.display="none"}l(),function(){const e=document.querySelector(".add-btn"),n=document.querySelector("#title"),c=document.querySelector("#description"),d=document.querySelector("#due-date"),s=document.querySelector("#task-form");e.addEventListener("click",(e=>{e.preventDefault(),function(e,n,c){const d=new t;""===c?d.addTask(new o(e,n)):d.addTask(new o(e,n,c)),m(),u(),l()}(n.value,c.value,d.value),s.reset()}))}(),function(){const e=document.querySelector(".edit-btn"),n=document.querySelector("#edit-title"),c=document.querySelector("#edit-description"),d=document.querySelector("#edit-due-date"),o=document.querySelector(".index"),s=document.querySelector("#edit-form");e.addEventListener("click",(e=>{e.preventDefault(),function(e,n,c,d){const o=(new t).getTasks()[d];""===c?o.updateTaskDetails(e,n):o.updateTaskDetails(e,n,c),p(),u(),l()}(n.value,c.value,d.value,o.textContent),s.reset()}))}()})();