$((function(){{const t=document.querySelector("#container"),n=document.querySelector("#header"),c=document.querySelector("#footer");window.fitContainer({$target:t,excepts:[n,c]})}{const r=document.querySelector(".btn-code"),s=document.querySelector(".form-text__label"),o=document.querySelector(".form-text__watch"),a=document.getElementById("timeoutTxt");r.addEventListener("click",(function(){a.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),o.classList.remove("visually-hidden"),r.innerHTML="코드 재전송"}))}{const i=document.getElementById("code_input"),l=document.querySelector(".btn-login");function e(){$.modal({className:"alert",message:'<p class="text-center">2단계 인증에 실패하였습니다.<br> 다시 시도해주세요.</p>'})}i.onkeyup=function(){this.value.length>=6&&(l.removeAttribute("disabled"),l.removeEventListener("click",e),l.addEventListener("click",e),this.getAttribute("data-number")==this.value&&(this.parentElement.classList.add("success"),this.setAttribute("readonly",""),l.removeAttribute("disabled"),l.addEventListener("click",(function(){location.href="../../leaders"}))))},i.oninput=function(){this.value.length>6&&(this.value=this.value.substr(0,6))}}{const d=new URLSearchParams(location.search).get("preview"),u=document.querySelector(".btn-login"),m=document.querySelector('.form-row[data-row="certification"]'),b=document.querySelector(".btn-code"),v=document.getElementById("timeoutTxt");switch(d){case"timeout":v.classList.remove("visually-hidden"),b.innerHTML="코드 재전송";break;case"fail":$.modal({className:"alert",message:'<p class="text-center">2단계 인증에 실패하였습니다.<br>다시 시도해주세요.</p>'});break;case"logout":$.modal({className:"confirm",message:'<p class="text-center">동일 아이디 사용자가 존재합니다.<br>기존 사용자를 강제 로그아웃 후 로그인하시겠습니까?</p>',btnAgree:"로그인",on:{complete({...e}){e.$modal[0].querySelector(".btn-agree").addEventListener("click",(()=>{location.href="../../leaders"}))}}});break;case"success":let h=document.getElementById("code_input");m.classList.add("success"),u.removeAttribute("disabled"),h.value=h.getAttribute("data-number"),h.setAttribute("readonly",""),u.addEventListener("click",(function(){location.href="../../leaders"}))}}}));