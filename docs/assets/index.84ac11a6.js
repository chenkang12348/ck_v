import{C as p,G as c,D as m,F as f,H as u,I as v,J as b}from"./index.11553ad2.js";let l;const y=()=>{l=p.service({fullscreen:!0,lock:!0,text:"Loading...",background:"rgba(0, 0, 0, 0.7)"})},h=()=>{l.close()};let o=0;const x=()=>{o===0&&y(),o++},r=()=>{o<=0||(o--,o===0&&h())},n=new b,w=c(),d={baseURL:"",timeout:1e4},k=["/login"],_=["contractCreate","payOffline"],s=m.create(d);s.interceptors.request.use(e=>{n.addPending(e),e.headers=e.headers||{};const{url:a,method:g}=e;k.some(i=>(a==null?void 0:a.indexOf(i))!==-1)&&x(),_.some(i=>(a==null?void 0:a.indexOf(i))!==-1)&&(e.headers["Content-Type"]="application/x-www-form-urlencoded"),g==="get"&&(e.params.t=new Date().getTime());const{token:t}=w;return t&&(e.headers.accessToken=t),e},e=>Promise.reject(e));s.interceptors.response.use(e=>{r(),n.removePending(d);const{data:a}=e;return a.status?e:(f.error(a.message||"\u672A\u77E5\u9519\u8BEF"),a.code===401&&(u(),v.replace({path:"/login"})),Promise.reject(new Error(a.message||"\u672A\u77E5\u9519\u8BEF")))},e=>(r(),Promise.reject(e)));export{s};
