#!/usr/bin/env node
import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);
import vi from"node:fs";import yn from"node:path";import ou from"node:zlib";import{fileURLToPath as gv}from"node:url";async function hf(i={}){var e,t=i,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,a=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(a){let{createRequire:s}=await import("node:module");var l=s(import.meta.url)}var c=[],d="./this.program",f=(s,o)=>{throw o},m=import.meta.url,g="";function v(s){return t.locateFile?t.locateFile(s,g):g+s}var E,S;if(a){var C=l("node:fs");m.startsWith("file:")&&(g=l("node:path").dirname(l("node:url").fileURLToPath(m))+"/"),S=s=>{s=P(s)?new URL(s):s;var o=C.readFileSync(s);return o},E=async(s,o=!0)=>{s=P(s)?new URL(s):s;var u=C.readFileSync(s,o?void 0:"utf8");return u},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),c=process.argv.slice(2),f=(s,o)=>{throw process.exitCode=s,o}}else if(n||r){try{g=new URL(".",m).href}catch{}r&&(S=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),E=async s=>{if(P(s))return new Promise((u,p)=>{var x=new XMLHttpRequest;x.open("GET",s,!0),x.responseType="arraybuffer",x.onload=()=>{if(x.status==200||x.status==0&&x.response){u(x.response);return}p(x.status)},x.onerror=p,x.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}var b=console.log.bind(console),A=console.error.bind(console),L,I=!1,P=s=>s.startsWith("file://");class U{}class H extends U{}var j,de,Re=!1;function Ee(){var s=xs.buffer;Ae=new Int8Array(s),oe=new Int16Array(s),We=new Uint8Array(s),rt=new Uint16Array(s),Q=new Int32Array(s),le=new Uint32Array(s),He=new Float32Array(s),Qe=new Float64Array(s),ge=new BigInt64Array(s),Xe=new BigUint64Array(s)}function Le(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)_t(t.preRun.shift());Ue(Dt)}function Te(){Re=!0,!t.noFSInit&&!_.initialized&&_.init(),xt.init(),wi.__wasm_call_ctors(),_.ignorePermissions=!1}function pe(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ln(t.postRun.shift());Ue(Ne)}function Se(s){t.onAbort?.(s),s=`Aborted(${s})`,A(s),I=!0,s+=". Build with -sASSERTIONS for more info.";var o=new WebAssembly.RuntimeError(s);throw de?.(o),o}var ie;function Oe(){return t.locateFile?v("libredwg-web.wasm"):new URL("libredwg-web.wasm",import.meta.url).href}function Pe(s){if(s==ie&&L)return new Uint8Array(L);if(S)return S(s);throw"both async and sync fetching of the wasm failed"}async function be(s){if(!L)try{var o=await E(s);return new Uint8Array(o)}catch{}return Pe(s)}async function _e(s,o){try{var u=await be(s),p=await WebAssembly.instantiate(u,o);return p}catch(x){A(`failed to asynchronously prepare wasm: ${x}`),Se(x)}}async function ve(s,o,u){if(!s&&!P(o)&&!a)try{var p=fetch(o,{credentials:"same-origin"}),x=await WebAssembly.instantiateStreaming(p,u);return x}catch(M){A(`wasm streaming compile failed: ${M}`),A("falling back to ArrayBuffer instantiation")}return _e(o,u)}function Ye(){var s={env:Bl,wasi_snapshot_preview1:Bl};return s}async function Y(){function s(M,w){return wi=M.exports,wi=uf(wi),df(wi),Ee(),wi}function o(M){return s(M.instance)}var u=Ye();if(t.instantiateWasm)return new Promise((M,w)=>{t.instantiateWasm(u,(R,N)=>{M(s(R,N))})});ie??=Oe();var p=await ve(L,ie,u),x=o(p);return x}class re{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var oe,Q,ge,Ae,He,Qe,rt,le,Xe,We,Ue=s=>{for(;s.length>0;)s.shift()(t)},Ne=[],ln=s=>Ne.push(s),Dt=[],_t=s=>Dt.push(s),Yt=!0;function Ke(s,o,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":Ae[s>>>0]=o;break;case"i8":Ae[s>>>0]=o;break;case"i16":oe[s>>>1>>>0]=o;break;case"i32":Q[s>>>2>>>0]=o;break;case"i64":ge[s>>>3>>>0]=BigInt(o);break;case"float":He[s>>>2>>>0]=o;break;case"double":Qe[s>>>3>>>0]=o;break;case"*":le[s>>>2>>>0]=o;break;default:Se(`invalid type for setValue: ${u}`)}}var Ut=s=>Nl(s),ot=()=>Fl();class it{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){le[this.ptr+4>>>2>>>0]=o}get_type(){return le[this.ptr+4>>>2>>>0]}set_destructor(o){le[this.ptr+8>>>2>>>0]=o}get_destructor(){return le[this.ptr+8>>>2>>>0]}set_caught(o){o=o?1:0,Ae[this.ptr+12>>>0]=o}get_caught(){return Ae[this.ptr+12>>>0]!=0}set_rethrown(o){o=o?1:0,Ae[this.ptr+13>>>0]=o}get_rethrown(){return Ae[this.ptr+13>>>0]!=0}init(o,u){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(u)}set_adjusted_ptr(o){le[this.ptr+16>>>2>>>0]=o}get_adjusted_ptr(){return le[this.ptr+16>>>2>>>0]}}var xi=0,li=9007199254740992,ci=-9007199254740992,Rn=s=>s<ci||s>li?NaN:Number(s);function Ei(s,o,u){s>>>=0,o>>>=0,u>>>=0;var p=new it(s);p.init(o,u),xi++,Se()}var vn=()=>{var s=Q[+fe.varargs>>>2>>>0];return fe.varargs+=4,s},cn=vn,ke={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,p=s.length-1;p>=0;p--){var x=s[p];x==="."?s.splice(p,1):x===".."?(s.splice(p,1),u++):u&&(s.splice(p,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=ke.isAbs(s),u=s.slice(-1)==="/";return s=ke.normalizeArray(s.split("/").filter(p=>!!p),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=ke.splitPath(s),u=o[0],p=o[1];return!u&&!p?".":(p&&(p=p.slice(0,-1)),u+p)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>ke.normalize(s.join("/")),join2:(s,o)=>ke.normalize(s+"/"+o)},Cn=()=>{if(a){var s=l("node:crypto");return o=>s.randomFillSync(o)}return o=>(crypto.getRandomValues(o),0)},xn=s=>(xn=Cn())(s),Ht={resolve:(...s)=>{for(var o="",u=!1,p=s.length-1;p>=-1&&!u;p--){var x=p>=0?s[p]:_.cwd();if(typeof x!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!x)return"";o=x+"/"+o,u=ke.isAbs(x)}return o=ke.normalizeArray(o.split("/").filter(M=>!!M),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=Ht.resolve(s).slice(1),o=Ht.resolve(o).slice(1);function u($){for(var Z=0;Z<$.length&&$[Z]==="";Z++);for(var xe=$.length-1;xe>=0&&$[xe]==="";xe--);return Z>xe?[]:$.slice(Z,xe-Z+1)}for(var p=u(s.split("/")),x=u(o.split("/")),M=Math.min(p.length,x.length),w=M,R=0;R<M;R++)if(p[R]!==x[R]){w=R;break}for(var N=[],R=w;R<p.length;R++)N.push("..");return N=N.concat(x.slice(w)),N.join("/")}},Ln=globalThis.TextDecoder&&new TextDecoder,Dn=(s,o,u,p)=>{var x=o+u;if(p)return x;for(;s[o]&&!(o>=x);)++o;return o},vt=(s,o=0,u,p)=>{o>>>=0;var x=Dn(s,o,u,p);if(x-o>16&&s.buffer&&Ln)return Ln.decode(s.subarray(o,x));for(var M="";o<x;){var w=s[o++];if(!(w&128)){M+=String.fromCharCode(w);continue}var R=s[o++]&63;if((w&224)==192){M+=String.fromCharCode((w&31)<<6|R);continue}var N=s[o++]&63;if((w&240)==224?w=(w&15)<<12|R<<6|N:w=(w&7)<<18|R<<12|N<<6|s[o++]&63,w<65536)M+=String.fromCharCode(w);else{var $=w-65536;M+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return M},Nn=[],dn=s=>{for(var o=0,u=0;u<s.length;++u){var p=s.charCodeAt(u);p<=127?o++:p<=2047?o+=2:p>=55296&&p<=57343?(o+=4,++u):o+=3}return o},Xt=(s,o,u,p)=>{if(u>>>=0,!(p>0))return 0;for(var x=u,M=u+p-1,w=0;w<s.length;++w){var R=s.codePointAt(w);if(R<=127){if(u>=M)break;o[u++>>>0]=R}else if(R<=2047){if(u+1>=M)break;o[u++>>>0]=192|R>>6,o[u++>>>0]=128|R&63}else if(R<=65535){if(u+2>=M)break;o[u++>>>0]=224|R>>12,o[u++>>>0]=128|R>>6&63,o[u++>>>0]=128|R&63}else{if(u+3>=M)break;o[u++>>>0]=240|R>>18,o[u++>>>0]=128|R>>12&63,o[u++>>>0]=128|R>>6&63,o[u++>>>0]=128|R&63,w++}}return o[u>>>0]=0,u-x},$t=(s,o,u)=>{var p=u>0?u:dn(s)+1,x=new Array(p),M=Xt(s,x,0,x.length);return o&&(x.length=M),x},On=()=>{if(!Nn.length){var s=null;if(a){var o=256,u=Buffer.alloc(o),p=0,x=process.stdin.fd;try{p=C.readSync(x,u,0,o)}catch(M){if(M.toString().includes("EOF"))p=0;else throw M}p>0&&(s=u.slice(0,p).toString("utf-8"))}else globalThis.window?.prompt&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Nn=$t(s,!0)}return Nn.shift()},xt={ttys:[],init(){},shutdown(){},register(s,o){xt.ttys[s]={input:[],output:[],ops:o},_.registerDevice(s,xt.stream_ops)},stream_ops:{open(s){var o=xt.ttys[s.node.rdev];if(!o)throw new _.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,p,x){if(!s.tty||!s.tty.ops.get_char)throw new _.ErrnoError(60);for(var M=0,w=0;w<p;w++){var R;try{R=s.tty.ops.get_char(s.tty)}catch{throw new _.ErrnoError(29)}if(R===void 0&&M===0)throw new _.ErrnoError(6);if(R==null)break;M++,o[u+w]=R}return M&&(s.node.atime=Date.now()),M},write(s,o,u,p,x){if(!s.tty||!s.tty.ops.put_char)throw new _.ErrnoError(60);try{for(var M=0;M<p;M++)s.tty.ops.put_char(s.tty,o[u+M])}catch{throw new _.ErrnoError(29)}return p&&(s.node.mtime=s.node.ctime=Date.now()),M}},default_tty_ops:{get_char(s){return On()},put_char(s,o){o===null||o===10?(b(vt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(b(vt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(A(vt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(A(vt(s.output)),s.output=[])}}},y=s=>{Se()},T={ops_table:null,mount(s){return T.createNode(null,"/",16895,0)},createNode(s,o,u,p){if(_.isBlkdev(u)||_.isFIFO(u))throw new _.ErrnoError(63);T.ops_table||={dir:{node:{getattr:T.node_ops.getattr,setattr:T.node_ops.setattr,lookup:T.node_ops.lookup,mknod:T.node_ops.mknod,rename:T.node_ops.rename,unlink:T.node_ops.unlink,rmdir:T.node_ops.rmdir,readdir:T.node_ops.readdir,symlink:T.node_ops.symlink},stream:{llseek:T.stream_ops.llseek}},file:{node:{getattr:T.node_ops.getattr,setattr:T.node_ops.setattr},stream:{llseek:T.stream_ops.llseek,read:T.stream_ops.read,write:T.stream_ops.write,mmap:T.stream_ops.mmap,msync:T.stream_ops.msync}},link:{node:{getattr:T.node_ops.getattr,setattr:T.node_ops.setattr,readlink:T.node_ops.readlink},stream:{}},chrdev:{node:{getattr:T.node_ops.getattr,setattr:T.node_ops.setattr},stream:_.chrdev_stream_ops}};var x=_.createNode(s,o,u,p);return _.isDir(x.mode)?(x.node_ops=T.ops_table.dir.node,x.stream_ops=T.ops_table.dir.stream,x.contents={}):_.isFile(x.mode)?(x.node_ops=T.ops_table.file.node,x.stream_ops=T.ops_table.file.stream,x.usedBytes=0,x.contents=T.emptyFileContents??=new Uint8Array(0)):_.isLink(x.mode)?(x.node_ops=T.ops_table.link.node,x.stream_ops=T.ops_table.link.stream):_.isChrdev(x.mode)&&(x.node_ops=T.ops_table.chrdev.node,x.stream_ops=T.ops_table.chrdev.stream),x.atime=x.mtime=x.ctime=Date.now(),s&&(s.contents[o]=x,s.atime=s.mtime=s.ctime=x.atime),x},getFileDataAsTypedArray(s){return s.contents.subarray(0,s.usedBytes)},expandFileStorage(s,o){var u=s.contents.length;if(!(u>=o)){var p=1024*1024;o=Math.max(o,u*(u<p?2:1.125)>>>0),u&&(o=Math.max(o,256));var x=T.getFileDataAsTypedArray(s);s.contents=new Uint8Array(o),s.contents.set(x)}},resizeFileStorage(s,o){if(s.usedBytes!=o){var u=s.contents;s.contents=new Uint8Array(o),s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=_.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,_.isDir(s.mode)?o.size=4096:_.isFile(s.mode)?o.size=s.usedBytes:_.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(let u of["mode","atime","mtime","ctime"])o[u]!=null&&(s[u]=o[u]);o.size!==void 0&&T.resizeFileStorage(s,o.size)},lookup(s,o){throw T.doesNotExistError||(T.doesNotExistError=new _.ErrnoError(44),T.doesNotExistError.stack="<generic error, no stack>"),T.doesNotExistError},mknod(s,o,u,p){return T.createNode(s,o,u,p)},rename(s,o,u){var p;try{p=_.lookupNode(o,u)}catch{}if(p){if(_.isDir(s.mode))for(var x in p.contents)throw new _.ErrnoError(55);_.hashRemoveNode(p)}delete s.parent.contents[s.name],o.contents[u]=s,s.name=u,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var u=_.lookupNode(s,o);for(var p in u.contents)throw new _.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,u){var p=T.createNode(s,o,41471,0);return p.link=u,p},readlink(s){if(!_.isLink(s.mode))throw new _.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,p,x){var M=s.node.contents;if(x>=s.node.usedBytes)return 0;var w=Math.min(s.node.usedBytes-x,p);return o.set(M.subarray(x,x+w),u),w},write(s,o,u,p,x,M){if(o.buffer===Ae.buffer&&(M=!1),!p)return 0;var w=s.node;return w.mtime=w.ctime=Date.now(),M?(w.contents=o.subarray(u,u+p),w.usedBytes=p):w.usedBytes===0&&x===0?(w.contents=o.slice(u,u+p),w.usedBytes=p):(T.expandFileStorage(w,x+p),w.contents.set(o.subarray(u,u+p),x),w.usedBytes=Math.max(w.usedBytes,x+p)),p},llseek(s,o,u){var p=o;if(u===1?p+=s.position:u===2&&_.isFile(s.node.mode)&&(p+=s.node.usedBytes),p<0)throw new _.ErrnoError(28);return p},mmap(s,o,u,p,x){if(!_.isFile(s.node.mode))throw new _.ErrnoError(43);var M,w,R=s.node.contents;if(!(x&2)&&R.buffer===Ae.buffer)w=!1,M=R.byteOffset;else{if(w=!0,M=y(o),!M)throw new _.ErrnoError(48);R&&((u>0||u+o<R.length)&&(R.subarray?R=R.subarray(u,u+o):R=Array.prototype.slice.call(R,u,u+o)),Ae.set(R,M>>>0))}return{ptr:M,allocated:w}},msync(s,o,u,p,x){return T.stream_ops.write(s,o,0,p,u,!1),0}}},J=s=>{if(typeof s!="string")return s;var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},G=s=>(typeof s=="string"&&(s=$t(s,!0)),s.subarray||(s=new Uint8Array(s)),s),F=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},k=async s=>{var o=await E(s);return new Uint8Array(o)},O=(...s)=>_.createDataFile(...s),W=s=>s,X=0,V=null,ee=s=>{if(X--,t.monitorRunDependencies?.(X),X==0&&V){var o=V;V=null,o()}},z=s=>{X++,t.monitorRunDependencies?.(X)},q=[],ce=async(s,o)=>{typeof Browser<"u"&&Browser.init();for(var u of q)if(u.canHandle(o))return u.handle(s,o);return s},K=async(s,o,u,p,x,M,w,R)=>{var N=o?Ht.resolve(ke.join2(s,o)):s,$=W(`cp ${N}`);z($);try{var Z=u;typeof u=="string"&&(Z=await k(u)),Z=await ce(Z,N),R?.(),M||O(s,o,Z,p,x,w)}finally{ee($)}},te=(s,o,u,p,x,M,w,R,N,$)=>{K(s,o,u,p,x,R,N,$).then(M).catch(w)},_={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(s){this.errno=s}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,u,p){s||(s=this),this.parent=s,this.mount=s.mount,this.id=_.nextInode++,this.name=o,this.mode=u,this.rdev=p,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return _.isDir(this.mode)}get isDevice(){return _.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new _.ErrnoError(44);o.follow_mount??=!0,ke.isAbs(s)||(s=_.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var p=s.split("/").filter($=>!!$),x=_.root,M="/",w=0;w<p.length;w++){var R=w===p.length-1;if(R&&o.parent)break;if(p[w]!=="."){if(p[w]===".."){if(M=ke.dirname(M),_.isRoot(x)){s=M+"/"+p.slice(w+1).join("/"),u--;continue e}else x=x.parent;continue}M=ke.join2(M,p[w]);try{x=_.lookupNode(x,p[w])}catch($){if($?.errno===44&&R&&o.noent_okay)return{path:M};throw $}if(_.isMountpoint(x)&&(!R||o.follow_mount)&&(x=x.mounted.root),_.isLink(x.mode)&&(!R||o.follow)){if(!x.node_ops.readlink)throw new _.ErrnoError(52);var N=x.node_ops.readlink(x);ke.isAbs(N)||(N=ke.dirname(M)+"/"+N),s=N+"/"+p.slice(w+1).join("/");continue e}}}return{path:M,node:x}}throw new _.ErrnoError(32)},getPath(s){for(var o;;){if(_.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,p=0;p<o.length;p++)u=(u<<5)-u+o.charCodeAt(p)|0;return(s+u>>>0)%_.nameTable.length},hashAddNode(s){var o=_.hashName(s.parent.id,s.name);s.name_next=_.nameTable[o],_.nameTable[o]=s},hashRemoveNode(s){var o=_.hashName(s.parent.id,s.name);if(_.nameTable[o]===s)_.nameTable[o]=s.name_next;else for(var u=_.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=_.mayLookup(s);if(u)throw new _.ErrnoError(u);for(var p=_.hashName(s.id,o),x=_.nameTable[p];x;x=x.name_next){var M=x.name;if(x.parent.id===s.id&&M===o)return x}return _.lookup(s,o)},createNode(s,o,u,p){var x=new _.FSNode(s,o,u,p);return _.hashAddNode(x),x},destroyNode(s){_.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return _.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!_.isDir(s.mode))return 54;var o=_.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!_.isDir(s.mode))return 54;try{var u=_.lookupNode(s,o);return 20}catch{}return _.nodePermissions(s,"wx")},mayDelete(s,o,u){var p;try{p=_.lookupNode(s,o)}catch(M){return M.errno}var x=_.nodePermissions(s,"wx");if(x)return x;if(u){if(!_.isDir(p.mode))return 54;if(_.isRoot(p)||_.getPath(p)===_.cwd())return 10}else if(_.isDir(p.mode))return 31;return 0},mayOpen(s,o){if(!s)return 44;if(_.isLink(s.mode))return 32;var u=_.flagsToPermissionString(o);return _.isDir(s.mode)&&(u!=="r"||o&576)?31:_.nodePermissions(s,u)},checkOpExists(s,o){if(!s)throw new _.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=_.MAX_OPEN_FDS;s++)if(!_.streams[s])return s;throw new _.ErrnoError(33)},getStreamChecked(s){var o=_.getStream(s);if(!o)throw new _.ErrnoError(8);return o},getStream:s=>_.streams[s],createStream(s,o=-1){return s=Object.assign(new _.FSStream,s),o==-1&&(o=_.nextfd()),s.fd=o,_.streams[o]=s,s},closeStream(s){_.streams[s]=null},dupStream(s,o=-1){var u=_.createStream(s,o);return u.stream_ops?.dup?.(u),u},doSetAttr(s,o,u){var p=s?.stream_ops.setattr,x=p?s:o;p??=o.node_ops.setattr,_.checkOpExists(p,63);try{p(x,u)}catch(M){throw M instanceof RangeError?new _.ErrnoError(22):M}},chrdev_stream_ops:{open(s){var o=_.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new _.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){_.devices[s]={stream_ops:o}},getDevice:s=>_.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var p=u.pop();o.push(p),u.push(...p.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),_.syncFSRequests++,_.syncFSRequests>1&&A(`warning: ${_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=_.getMounts(_.root.mount),p=0;function x(R){return _.syncFSRequests--,o(R)}function M(R){if(R)return M.errored?void 0:(M.errored=!0,x(R));++p>=u.length&&x(null)}for(var w of u)w.type.syncfs?w.type.syncfs(w,s,M):M(null)},mount(s,o,u){var p=u==="/",x=!u,M;if(p&&_.root)throw new _.ErrnoError(10);if(!p&&!x){var w=_.lookupPath(u,{follow_mount:!1});if(u=w.path,M=w.node,_.isMountpoint(M))throw new _.ErrnoError(10);if(!_.isDir(M.mode))throw new _.ErrnoError(54)}var R={type:s,opts:o,mountpoint:u,mounts:[]},N=s.mount(R);return N.mount=R,R.root=N,p?_.root=N:M&&(M.mounted=R,M.mount&&M.mount.mounts.push(R)),N},unmount(s){var o=_.lookupPath(s,{follow_mount:!1});if(!_.isMountpoint(o.node))throw new _.ErrnoError(28);var u=o.node,p=u.mounted,x=_.getMounts(p);for(var[M,w]of Object.entries(_.nameTable))for(;w;){var R=w.name_next;x.includes(w.mount)&&_.destroyNode(w),w=R}u.mounted=null;var N=u.mount.mounts.indexOf(p);u.mount.mounts.splice(N,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var p=_.lookupPath(s,{parent:!0}),x=p.node,M=ke.basename(s);if(!M)throw new _.ErrnoError(28);if(M==="."||M==="..")throw new _.ErrnoError(20);var w=_.mayCreate(x,M);if(w)throw new _.ErrnoError(w);if(!x.node_ops.mknod)throw new _.ErrnoError(63);return x.node_ops.mknod(x,M,o,u)},statfs(s){return _.statfsNode(_.lookupPath(s,{follow:!0}).node)},statfsStream(s){return _.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:_.nextInode,ffree:_.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,_.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,_.mknod(s,o,0)},mkdirTree(s,o){var u=s.split("/"),p="";for(var x of u)if(x){(p||ke.isAbs(s))&&(p+="/"),p+=x;try{_.mkdir(p,o)}catch(M){if(M.errno!=20)throw M}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,_.mknod(s,o,u)},symlink(s,o){if(!Ht.resolve(s))throw new _.ErrnoError(44);var u=_.lookupPath(o,{parent:!0}),p=u.node;if(!p)throw new _.ErrnoError(44);var x=ke.basename(o),M=_.mayCreate(p,x);if(M)throw new _.ErrnoError(M);if(!p.node_ops.symlink)throw new _.ErrnoError(63);return p.node_ops.symlink(p,x,s)},rename(s,o){var u=ke.dirname(s),p=ke.dirname(o),x=ke.basename(s),M=ke.basename(o),w,R,N;if(w=_.lookupPath(s,{parent:!0}),R=w.node,w=_.lookupPath(o,{parent:!0}),N=w.node,!R||!N)throw new _.ErrnoError(44);if(R.mount!==N.mount)throw new _.ErrnoError(75);var $=_.lookupNode(R,x),Z=Ht.relative(s,p);if(Z.charAt(0)!==".")throw new _.ErrnoError(28);if(Z=Ht.relative(o,u),Z.charAt(0)!==".")throw new _.ErrnoError(55);var xe;try{xe=_.lookupNode(N,M)}catch{}if($!==xe){var ue=_.isDir($.mode),se=_.mayDelete(R,x,ue);if(se)throw new _.ErrnoError(se);if(se=xe?_.mayDelete(N,M,ue):_.mayCreate(N,M),se)throw new _.ErrnoError(se);if(!R.node_ops.rename)throw new _.ErrnoError(63);if(_.isMountpoint($)||xe&&_.isMountpoint(xe))throw new _.ErrnoError(10);if(N!==R&&(se=_.nodePermissions(R,"w"),se))throw new _.ErrnoError(se);_.hashRemoveNode($);try{R.node_ops.rename($,N,M),$.parent=N}catch(Me){throw Me}finally{_.hashAddNode($)}}},rmdir(s){var o=_.lookupPath(s,{parent:!0}),u=o.node,p=ke.basename(s),x=_.lookupNode(u,p),M=_.mayDelete(u,p,!0);if(M)throw new _.ErrnoError(M);if(!u.node_ops.rmdir)throw new _.ErrnoError(63);if(_.isMountpoint(x))throw new _.ErrnoError(10);u.node_ops.rmdir(u,p),_.destroyNode(x)},readdir(s){var o=_.lookupPath(s,{follow:!0}),u=o.node,p=_.checkOpExists(u.node_ops.readdir,54);return p(u)},unlink(s){var o=_.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new _.ErrnoError(44);var p=ke.basename(s),x=_.lookupNode(u,p),M=_.mayDelete(u,p,!1);if(M)throw new _.ErrnoError(M);if(!u.node_ops.unlink)throw new _.ErrnoError(63);if(_.isMountpoint(x))throw new _.ErrnoError(10);u.node_ops.unlink(u,p),_.destroyNode(x)},readlink(s){var o=_.lookupPath(s),u=o.node;if(!u)throw new _.ErrnoError(44);if(!u.node_ops.readlink)throw new _.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,o){var u=_.lookupPath(s,{follow:!o}),p=u.node,x=_.checkOpExists(p.node_ops.getattr,63);return x(p)},fstat(s){var o=_.getStreamChecked(s),u=o.node,p=o.stream_ops.getattr,x=p?o:u;return p??=u.node_ops.getattr,_.checkOpExists(p,63),p(x)},lstat(s){return _.stat(s,!0)},doChmod(s,o,u,p){_.doSetAttr(s,o,{mode:u&4095|o.mode&-4096,ctime:Date.now(),dontFollow:p})},chmod(s,o,u){var p;if(typeof s=="string"){var x=_.lookupPath(s,{follow:!u});p=x.node}else p=s;_.doChmod(null,p,o,u)},lchmod(s,o){_.chmod(s,o,!0)},fchmod(s,o){var u=_.getStreamChecked(s);_.doChmod(u,u.node,o,!1)},doChown(s,o,u){_.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:u})},chown(s,o,u,p){var x;if(typeof s=="string"){var M=_.lookupPath(s,{follow:!p});x=M.node}else x=s;_.doChown(null,x,p)},lchown(s,o,u){_.chown(s,o,u,!0)},fchown(s,o,u){var p=_.getStreamChecked(s);_.doChown(p,p.node,!1)},doTruncate(s,o,u){if(_.isDir(o.mode))throw new _.ErrnoError(31);if(!_.isFile(o.mode))throw new _.ErrnoError(28);var p=_.nodePermissions(o,"w");if(p)throw new _.ErrnoError(p);_.doSetAttr(s,o,{size:u,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new _.ErrnoError(28);var u;if(typeof s=="string"){var p=_.lookupPath(s,{follow:!0});u=p.node}else u=s;_.doTruncate(null,u,o)},ftruncate(s,o){var u=_.getStreamChecked(s);if(o<0||(u.flags&2097155)===0)throw new _.ErrnoError(28);_.doTruncate(u,u.node,o)},utime(s,o,u){var p=_.lookupPath(s,{follow:!0}),x=p.node,M=_.checkOpExists(x.node_ops.setattr,63);M(x,{atime:o,mtime:u})},open(s,o,u=438){if(s==="")throw new _.ErrnoError(44);o=J(o),o&64?u=u&4095|32768:u=0;var p,x;if(typeof s=="object")p=s;else{x=s.endsWith("/");var M=_.lookupPath(s,{follow:!(o&131072),noent_okay:!0});p=M.node,s=M.path}var w=!1;if(o&64)if(p){if(o&128)throw new _.ErrnoError(20)}else{if(x)throw new _.ErrnoError(31);p=_.mknod(s,u|511,0),w=!0}if(!p)throw new _.ErrnoError(44);if(_.isChrdev(p.mode)&&(o&=-513),o&65536&&!_.isDir(p.mode))throw new _.ErrnoError(54);if(!w){var R=_.mayOpen(p,o);if(R)throw new _.ErrnoError(R)}o&512&&!w&&_.truncate(p,0),o&=-131713;var N=_.createStream({node:p,path:_.getPath(p),flags:o,seekable:!0,position:0,stream_ops:p.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),w&&_.chmod(p,u&511),N},close(s){if(_.isClosed(s))throw new _.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{_.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(_.isClosed(s))throw new _.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new _.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new _.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,p,x){if(p<0||x<0)throw new _.ErrnoError(28);if(_.isClosed(s))throw new _.ErrnoError(8);if((s.flags&2097155)===1)throw new _.ErrnoError(8);if(_.isDir(s.node.mode))throw new _.ErrnoError(31);if(!s.stream_ops.read)throw new _.ErrnoError(28);var M=typeof x<"u";if(!M)x=s.position;else if(!s.seekable)throw new _.ErrnoError(70);var w=s.stream_ops.read(s,o,u,p,x);return M||(s.position+=w),w},write(s,o,u,p,x,M){if(p<0||x<0)throw new _.ErrnoError(28);if(_.isClosed(s))throw new _.ErrnoError(8);if((s.flags&2097155)===0)throw new _.ErrnoError(8);if(_.isDir(s.node.mode))throw new _.ErrnoError(31);if(!s.stream_ops.write)throw new _.ErrnoError(28);s.seekable&&s.flags&1024&&_.llseek(s,0,2);var w=typeof x<"u";if(!w)x=s.position;else if(!s.seekable)throw new _.ErrnoError(70);var R=s.stream_ops.write(s,o,u,p,x,M);return w||(s.position+=R),R},mmap(s,o,u,p,x){if((p&2)!==0&&(x&2)===0&&(s.flags&2097155)!==2)throw new _.ErrnoError(2);if((s.flags&2097155)===1)throw new _.ErrnoError(2);if(!s.stream_ops.mmap)throw new _.ErrnoError(43);if(!o)throw new _.ErrnoError(28);return s.stream_ops.mmap(s,o,u,p,x)},msync(s,o,u,p,x){return s.stream_ops.msync?s.stream_ops.msync(s,o,u,p,x):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new _.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){o.flags=o.flags??0,o.encoding=o.encoding??"binary",o.encoding!=="utf8"&&o.encoding!=="binary"&&Se(`Invalid encoding type "${o.encoding}"`);var u=_.open(s,o.flags),p=_.stat(s),x=p.size,M=new Uint8Array(x);return _.read(u,M,0,x,0),o.encoding==="utf8"&&(M=vt(M)),_.close(u),M},writeFile(s,o,u={}){u.flags=u.flags??577;var p=_.open(s,u.flags,u.mode);o=G(o),_.write(p,o,0,o.byteLength,void 0,u.canOwn),_.close(p)},cwd:()=>_.currentPath,chdir(s){var o=_.lookupPath(s,{follow:!0});if(o.node===null)throw new _.ErrnoError(44);if(!_.isDir(o.node.mode))throw new _.ErrnoError(54);var u=_.nodePermissions(o.node,"x");if(u)throw new _.ErrnoError(u);_.currentPath=o.path},createDefaultDirectories(){_.mkdir("/tmp"),_.mkdir("/home"),_.mkdir("/home/web_user")},createDefaultDevices(){_.mkdir("/dev"),_.registerDevice(_.makedev(1,3),{read:()=>0,write:(p,x,M,w,R)=>w,llseek:()=>0}),_.mkdev("/dev/null",_.makedev(1,3)),xt.register(_.makedev(5,0),xt.default_tty_ops),xt.register(_.makedev(6,0),xt.default_tty1_ops),_.mkdev("/dev/tty",_.makedev(5,0)),_.mkdev("/dev/tty1",_.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(xn(s),o=s.byteLength),s[--o]);_.createDevice("/dev","random",u),_.createDevice("/dev","urandom",u),_.mkdir("/dev/shm"),_.mkdir("/dev/shm/tmp")},createSpecialDirectories(){_.mkdir("/proc");var s=_.mkdir("/proc/self");_.mkdir("/proc/self/fd"),_.mount({mount(){var o=_.createNode(s,"fd",16895,73);return o.stream_ops={llseek:T.stream_ops.llseek},o.node_ops={lookup(u,p){var x=+p,M=_.getStreamChecked(x),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:x+1};return w.parent=w,w},readdir(){return Array.from(_.streams.entries()).filter(([u,p])=>p).map(([u,p])=>u.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?_.createDevice("/dev","stdin",s):_.symlink("/dev/tty","/dev/stdin"),o?_.createDevice("/dev","stdout",null,o):_.symlink("/dev/tty","/dev/stdout"),u?_.createDevice("/dev","stderr",null,u):_.symlink("/dev/tty1","/dev/stderr");var p=_.open("/dev/stdin",0),x=_.open("/dev/stdout",1),M=_.open("/dev/stderr",1)},staticInit(){_.nameTable=new Array(4096),_.mount(T,{},"/"),_.createDefaultDirectories(),_.createDefaultDevices(),_.createSpecialDirectories(),_.filesystems={MEMFS:T}},init(s,o,u){_.initialized=!0,s??=t.stdin,o??=t.stdout,u??=t.stderr,_.createStandardStreams(s,o,u)},quit(){_.initialized=!1;for(var s of _.streams)s&&_.close(s)},findObject(s,o){var u=_.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=_.lookupPath(s,{follow:!o});s=u.path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=_.lookupPath(s,{parent:!0});p.parentExists=!0,p.parentPath=u.path,p.parentObject=u.node,p.name=ke.basename(s),u=_.lookupPath(s,{follow:!o}),p.exists=!0,p.path=u.path,p.object=u.node,p.name=u.node.name,p.isRoot=u.path==="/"}catch(x){p.error=x.errno}return p},createPath(s,o,u,p){s=typeof s=="string"?s:_.getPath(s);for(var x=o.split("/").reverse();x.length;){var M=x.pop();if(M){var w=ke.join2(s,M);try{_.mkdir(w)}catch(R){if(R.errno!=20)throw R}s=w}}return w},createFile(s,o,u,p,x){var M=ke.join2(typeof s=="string"?s:_.getPath(s),o),w=F(p,x);return _.create(M,w)},createDataFile(s,o,u,p,x,M){var w=o;s&&(s=typeof s=="string"?s:_.getPath(s),w=o?ke.join2(s,o):s);var R=F(p,x),N=_.create(w,R);if(u){u=G(u),_.chmod(N,R|146);var $=_.open(N,577);_.write($,u,0,u.length,0,M),_.close($),_.chmod(N,R)}},createDevice(s,o,u,p){var x=ke.join2(typeof s=="string"?s:_.getPath(s),o),M=F(!!u,!!p);_.createDevice.major??=64;var w=_.makedev(_.createDevice.major++,0);return _.registerDevice(w,{open(R){R.seekable=!1},close(R){p?.buffer?.length&&p(10)},read(R,N,$,Z,xe){for(var ue=0,se=0;se<Z;se++){var Me;try{Me=u()}catch{throw new _.ErrnoError(29)}if(Me===void 0&&ue===0)throw new _.ErrnoError(6);if(Me==null)break;ue++,N[$+se]=Me}return ue&&(R.node.atime=Date.now()),ue},write(R,N,$,Z,xe){for(var ue=0;ue<Z;ue++)try{p(N[$+ue])}catch{throw new _.ErrnoError(29)}return Z&&(R.node.mtime=R.node.ctime=Date.now()),ue}}),_.mkdev(x,M,w)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(globalThis.XMLHttpRequest)Se("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");else try{s.contents=S(s.url)}catch{throw new _.ErrnoError(29)}},createLazyFile(s,o,u,p,x){class M{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var se=ue%this.chunkSize,Me=ue/this.chunkSize|0;return this.getter(Me)[se]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;ue.open("HEAD",u,!1),ue.send(null),ue.status>=200&&ue.status<300||ue.status===304||Se("Couldn't load "+u+". Status: "+ue.status);var se=Number(ue.getResponseHeader("Content-length")),Me,Ze=(Me=ue.getResponseHeader("Accept-Ranges"))&&Me==="bytes",ut=(Me=ue.getResponseHeader("Content-Encoding"))&&Me==="gzip",lt=1024*1024;Ze||(lt=se);var wt=(hn,kn)=>{hn>kn&&Se(`invalid range (${hn}, ${kn}) or no bytes requested!`),kn>se-1&&Se(`only ${se} bytes available! programmer error!`);var mt=new XMLHttpRequest;return mt.open("GET",u,!1),se!==lt&&mt.setRequestHeader("Range","bytes="+hn+"-"+kn),mt.responseType="arraybuffer",mt.overrideMimeType&&mt.overrideMimeType("text/plain; charset=x-user-defined"),mt.send(null),mt.status>=200&&mt.status<300||mt.status===304||Se("Couldn't load "+u+". Status: "+mt.status),mt.response!==void 0?new Uint8Array(mt.response||[]):$t(mt.responseText??"",!0)},gt=this;gt.setDataGetter(hn=>{var kn=hn*lt,mt=(hn+1)*lt-1;return mt=Math.min(mt,se-1),typeof gt.chunks[hn]>"u"&&(gt.chunks[hn]=wt(kn,mt)),typeof gt.chunks[hn]>"u"&&Se("doXHR failed!"),gt.chunks[hn]}),(ut||!se)&&(lt=se=1,se=this.getter(0).length,lt=se,b("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=se,this._chunkSize=lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(globalThis.XMLHttpRequest){r||Se("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var w=new M,R={isDevice:!1,contents:w}}else var R={isDevice:!1,url:u};var N=_.createFile(s,o,R,p,x);R.contents?N.contents=R.contents:R.url&&(N.contents=null,N.url=R.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var $={};for(let[xe,ue]of Object.entries(N.stream_ops))$[xe]=(...se)=>(_.forceLoadFile(N),ue(...se));function Z(xe,ue,se,Me,Ze){var ut=xe.node.contents;if(Ze>=ut.length)return 0;var lt=Math.min(ut.length-Ze,Me);if(ut.slice)for(var wt=0;wt<lt;wt++)ue[se+wt]=ut[Ze+wt];else for(var wt=0;wt<lt;wt++)ue[se+wt]=ut.get(Ze+wt);return lt}return $.read=(xe,ue,se,Me,Ze)=>(_.forceLoadFile(N),Z(xe,ue,se,Me,Ze)),$.mmap=(xe,ue,se,Me,Ze)=>{_.forceLoadFile(N);var ut=y(ue);if(!ut)throw new _.ErrnoError(48);return Z(xe,Ae,ut,ue,se),{ptr:ut,allocated:!0}},N.stream_ops=$,N}},he=(s,o,u)=>(s>>>=0,s?vt(We,s,o,u):""),fe={currentUmask:18,calculateAt(s,o,u){if(ke.isAbs(o))return o;var p;if(s===-100)p=_.cwd();else{var x=fe.getStreamFromFD(s);p=x.path}if(o.length==0){if(!u)throw new _.ErrnoError(44);return p}return p+"/"+o},writeStat(s,o){le[s>>>2>>>0]=o.dev,le[s+4>>>2>>>0]=o.mode,le[s+8>>>2>>>0]=o.nlink,le[s+12>>>2>>>0]=o.uid,le[s+16>>>2>>>0]=o.gid,le[s+20>>>2>>>0]=o.rdev,ge[s+24>>>3>>>0]=BigInt(o.size),Q[s+32>>>2>>>0]=4096,Q[s+36>>>2>>>0]=o.blocks;var u=o.atime.getTime(),p=o.mtime.getTime(),x=o.ctime.getTime();return ge[s+40>>>3>>>0]=BigInt(Math.floor(u/1e3)),le[s+48>>>2>>>0]=u%1e3*1e3*1e3,ge[s+56>>>3>>>0]=BigInt(Math.floor(p/1e3)),le[s+64>>>2>>>0]=p%1e3*1e3*1e3,ge[s+72>>>3>>>0]=BigInt(Math.floor(x/1e3)),le[s+80>>>2>>>0]=x%1e3*1e3*1e3,ge[s+88>>>3>>>0]=BigInt(o.ino),0},writeStatFs(s,o){le[s+4>>>2>>>0]=o.bsize,le[s+60>>>2>>>0]=o.bsize,ge[s+8>>>3>>>0]=BigInt(o.blocks),ge[s+16>>>3>>>0]=BigInt(o.bfree),ge[s+24>>>3>>>0]=BigInt(o.bavail),ge[s+32>>>3>>>0]=BigInt(o.files),ge[s+40>>>3>>>0]=BigInt(o.ffree),le[s+48>>>2>>>0]=o.fsid,le[s+64>>>2>>>0]=o.flags,le[s+56>>>2>>>0]=o.namelen},doMsync(s,o,u,p,x){if(!_.isFile(o.node.mode))throw new _.ErrnoError(43);if(p&2)return 0;var M=We.slice(s,s+u);_.msync(o,M,x,u,p)},getStreamFromFD(s){var o=_.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=he(s);return o}};function ze(s,o,u){u>>>=0,fe.varargs=u;try{var p=fe.getStreamFromFD(s);switch(o){case 0:{var x=vn();if(x<0)return-28;for(;_.streams[x];)x++;var M;return M=_.dupStream(p,x),M.fd}case 1:case 2:return 0;case 3:return p.flags;case 4:{var x=vn(),w=289792;return p.flags=p.flags&~w|x&w,0}case 12:{var x=cn(),R=0;return oe[x+R>>>1>>>0]=2,0}case 13:case 14:return 0}return-28}catch(N){if(typeof _>"u"||N.name!=="ErrnoError")throw N;return-N.errno}}function $e(s,o){o>>>=0;try{return fe.writeStat(o,_.fstat(s))}catch(u){if(typeof _>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Tt(s,o,u){u>>>=0,fe.varargs=u;try{var p=fe.getStreamFromFD(s);switch(o){case 21509:return p.tty?0:-59;case 21505:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcgets){var x=p.tty.ops.ioctl_tcgets(p),M=cn();Q[M>>>2>>>0]=x.c_iflag||0,Q[M+4>>>2>>>0]=x.c_oflag||0,Q[M+8>>>2>>>0]=x.c_cflag||0,Q[M+12>>>2>>>0]=x.c_lflag||0;for(var w=0;w<32;w++)Ae[M+w+17>>>0]=x.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return p.tty?0:-59;case 21506:case 21507:case 21508:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcsets){for(var M=cn(),R=Q[M>>>2>>>0],N=Q[M+4>>>2>>>0],$=Q[M+8>>>2>>>0],Z=Q[M+12>>>2>>>0],xe=[],w=0;w<32;w++)xe.push(Ae[M+w+17>>>0]);return p.tty.ops.ioctl_tcsets(p.tty,o,{c_iflag:R,c_oflag:N,c_cflag:$,c_lflag:Z,c_cc:xe})}return 0}case 21519:{if(!p.tty)return-59;var M=cn();return Q[M>>>2>>>0]=0,0}case 21520:return p.tty?-28:-59;case 21537:case 21531:{var M=cn();return _.ioctl(p,o,M)}case 21523:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tiocgwinsz){var ue=p.tty.ops.ioctl_tiocgwinsz(p.tty),M=cn();oe[M>>>1>>>0]=ue[0],oe[M+2>>>1>>>0]=ue[1]}return 0}case 21524:return p.tty?0:-59;case 21515:return p.tty?0:-59;default:return-28}}catch(se){if(typeof _>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Je(s,o){s>>>=0,o>>>=0;try{return s=fe.getStr(s),fe.writeStat(o,_.lstat(s))}catch(u){if(typeof _>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function ct(s,o,u,p){o>>>=0,u>>>=0;try{o=fe.getStr(o);var x=p&256,M=p&4096;return p=p&-6401,o=fe.calculateAt(s,o,M),fe.writeStat(u,x?_.lstat(o):_.stat(o))}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Et(s,o,u,p){o>>>=0,p>>>=0,fe.varargs=p;try{o=fe.getStr(o),o=fe.calculateAt(s,o);var x=p?vn():0;return u&64&&(x&=~fe.currentUmask),_.open(o,u,x).fd}catch(M){if(typeof _>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function St(s,o){s>>>=0,o>>>=0;try{return s=fe.getStr(s),fe.writeStat(o,_.stat(s))}catch(u){if(typeof _>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var dt=()=>Se(""),Ve=s=>{s>>>=0;for(var o="";;){var u=We[s++>>>0];if(!u)return o;o+=String.fromCharCode(u)}},ft={},qt={},Fn={},zt=class extends Error{constructor(o){super(o),this.name="BindingError"}},we=s=>{throw new zt(s)};function En(s,o,u={}){var p=o.name;if(s||we(`type "${p}" must have a positive integer typeid pointer`),qt.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;we(`Cannot register type '${p}' twice`)}if(qt[s]=o,delete Fn[s],ft.hasOwnProperty(s)){var x=ft[s];delete ft[s],x.forEach(M=>M())}}function je(s,o,u={}){return En(s,o,u)}var pt=(s,o,u)=>{switch(o){case 1:return u?p=>Ae[p>>>0]:p=>We[p>>>0];case 2:return u?p=>oe[p>>>1>>>0]:p=>rt[p>>>1>>>0];case 4:return u?p=>Q[p>>>2>>>0]:p=>le[p>>>2>>>0];case 8:return u?p=>ge[p>>>3>>>0]:p=>Xe[p>>>3>>>0];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Kt=function(s,o,u,p,x){s>>>=0,o>>>=0,u>>>=0,o=Ve(o);let M=p===0n,w=R=>R;if(M){let R=u*8;w=N=>BigInt.asUintN(R,N),x=w(x)}je(s,{name:o,fromWireType:w,toWireType:(R,N)=>(typeof N=="number"&&(N=BigInt(N)),N),readValueFromPointer:pt(o,u,!M),destructorFunction:null})};function Vt(s,o,u,p){s>>>=0,o>>>=0,o=Ve(o),je(s,{name:o,fromWireType:function(x){return!!x},toWireType:function(x,M){return M?u:p},readValueFromPointer:function(x){return this.fromWireType(We[x>>>0])},destructorFunction:null})}var as=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Si=s=>{function o(u){return u.$$.ptrType.registeredClass.name}we(o(s)+" instance already deleted")},Mi=!1,_r=s=>{},os=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},bi=s=>{s.count.value-=1;var o=s.count.value===0;o&&os(s)},Un=s=>globalThis.FinalizationRegistry?(Mi=new FinalizationRegistry(o=>{bi(o.$$)}),Un=o=>{var u=o.$$,p=!!u.smartPtr;if(p){var x={$$:u};Mi.register(o,x,o)}return o},_r=o=>Mi.unregister(o),Un(s)):(Un=o=>o,s),Ai=[],Ua=()=>{for(;Ai.length;){var s=Ai.pop();s.$$.deleteScheduled=!1,s.delete()}},ls,du=()=>{let s=cs.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof cs)||!(u instanceof cs))return!1;var p=this.$$.ptrType.registeredClass,x=this.$$.ptr;u.$$=u.$$;for(var M=u.$$.ptrType.registeredClass,w=u.$$.ptr;p.baseClass;)x=p.upcast(x),p=p.baseClass;for(;M.baseClass;)w=M.upcast(w),M=M.baseClass;return p===M&&x===w},clone(){if(this.$$.ptr||Si(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Un(Object.create(Object.getPrototypeOf(this),{$$:{value:as(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Si(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&we("Object already scheduled for deletion"),_r(this),bi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Si(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&we("Object already scheduled for deletion"),Ai.push(this),Ai.length===1&&ls&&ls(Ua),this.$$.deleteScheduled=!0,this}});let o=Symbol.dispose;o&&(s[o]=s.delete)};function cs(){}var ds=(s,o)=>Object.defineProperty(o,"name",{value:s}),yl={},uu=(s,o,u)=>{if(s[o].overloadTable===void 0){var p=s[o];s[o]=function(...x){return s[o].overloadTable.hasOwnProperty(x.length)||we(`Function '${u}' called with an invalid number of arguments (${x.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[x.length].apply(this,x)},s[o].overloadTable=[],s[o].overloadTable[p.argCount]=p}},gr=(s,o,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&we(`Cannot register public name '${s}' twice`),uu(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&we(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=o):(t[s]=o,t[s].argCount=u)},hu=48,fu=57,pu=s=>{s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=hu&&o<=fu?`_${s}`:s};function mu(s,o,u,p,x,M,w,R){this.name=s,this.constructor=o,this.instancePrototype=u,this.rawDestructor=p,this.baseClass=x,this.getActualType=M,this.upcast=w,this.downcast=R,this.pureVirtualFunctions=[]}var us=(s,o,u)=>{for(;o!==u;)o.upcast||we(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s},Ba=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s};function _u(s,o){if(o===null)return this.isReference&&we(`null is not a valid ${this.name}`),0;o.$$||we(`Cannot pass "${Ba(o)}" as a ${this.name}`),o.$$.ptr||we(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=o.$$.ptrType.registeredClass,p=us(o.$$.ptr,u,this.registeredClass);return p}function gu(s,o){var u;if(o===null)return this.isReference&&we(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!o||!o.$$)&&we(`Cannot pass "${Ba(o)}" as a ${this.name}`),o.$$.ptr||we(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&we(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var p=o.$$.ptrType.registeredClass;if(u=us(o.$$.ptr,p,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&we("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?u=o.$$.smartPtr:we(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)u=o.$$.smartPtr;else{var x=o.clone();u=this.rawShare(u,un.toHandle(()=>x.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:we("Unsupported sharing policy")}return u}function yu(s,o){if(o===null)return this.isReference&&we(`null is not a valid ${this.name}`),0;o.$$||we(`Cannot pass "${Ba(o)}" as a ${this.name}`),o.$$.ptr||we(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&we(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var u=o.$$.ptrType.registeredClass,p=us(o.$$.ptr,u,this.registeredClass);return p}function hs(s){return this.fromWireType(le[s>>>2>>>0])}var vl=(s,o,u)=>{if(o===u)return s;if(u.baseClass===void 0)return null;var p=vl(s,o,u.baseClass);return p===null?null:u.downcast(p)},vu={},xu=(s,o)=>{for(o===void 0&&we("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},Eu=(s,o)=>(o=xu(s,o),vu[o]),Su=class extends Error{constructor(o){super(o),this.name="InternalError"}},fs=s=>{throw new Su(s)},ps=(s,o)=>{(!o.ptrType||!o.ptr)&&fs("makeClassHandle requires ptr and ptrType");var u=!!o.smartPtrType,p=!!o.smartPtr;return u!==p&&fs("Both smartPtrType and smartPtr must be specified"),o.count={value:1},Un(Object.create(s,{$$:{value:o,writable:!0}}))};function Mu(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var u=Eu(this.registeredClass,o);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=o,u.$$.smartPtr=s,u.clone();var p=u.clone();return this.destructor(s),p}function x(){return this.isSmartPointer?ps(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):ps(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var M=this.registeredClass.getActualType(o),w=yl[M];if(!w)return x.call(this);var R;this.isConst?R=w.constPointerType:R=w.pointerType;var N=vl(o,this.registeredClass,R.registeredClass);return N===null?x.call(this):this.isSmartPointer?ps(R.registeredClass.instancePrototype,{ptrType:R,ptr:N,smartPtrType:this,smartPtr:s}):ps(R.registeredClass.instancePrototype,{ptrType:R,ptr:N})}var bu=()=>{Object.assign(ms.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},readValueFromPointer:hs,fromWireType:Mu})};function ms(s,o,u,p,x,M,w,R,N,$,Z){this.name=s,this.registeredClass=o,this.isReference=u,this.isConst=p,this.isSmartPointer=x,this.pointeeType=M,this.sharingPolicy=w,this.rawGetPointee=R,this.rawConstructor=N,this.rawShare=$,this.rawDestructor=Z,!x&&o.baseClass===void 0?p?(this.toWireType=_u,this.destructorFunction=null):(this.toWireType=yu,this.destructorFunction=null):this.toWireType=gu}var xl=(s,o,u)=>{t.hasOwnProperty(s)||fs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=o:(t[s]=o,t[s].argCount=u)},El=[],Sl=s=>{var o=El[s];return o||(El[s]=o=Ul.get(s)),o},Au=(s,o,u=[],p=!1)=>{var x=Sl(o),M=x(...u);function w(R){return s[0]=="p"?R>>>0:R}return w(M)},Tu=(s,o,u=!1)=>(...p)=>Au(s,o,p,u),Ti=(s,o,u=!1)=>{s=Ve(s);function p(){if(s.includes("p"))return Tu(s,o,u);var M=Sl(o);return M}var x=p();return typeof x!="function"&&we(`unknown function pointer with signature ${s}: ${o}`),x};class wu extends Error{}var Ml=s=>{var o=Dl(s),u=Ve(o);return Bn(o),u},_s=(s,o)=>{var u=[],p={};function x(M){if(!p[M]&&!qt[M]){if(Fn[M]){Fn[M].forEach(x);return}u.push(M),p[M]=!0}}throw o.forEach(x),new wu(`${s}: `+u.map(Ml).join([", "]))},gs=(s,o,u)=>{s.forEach(R=>Fn[R]=o);function p(R){var N=u(R);N.length!==s.length&&fs("Mismatched type converter count");for(var $=0;$<s.length;++$)je(s[$],N[$])}var x=new Array(o.length),M=[],w=0;for(let[R,N]of o.entries())qt.hasOwnProperty(N)?x[R]=qt[N]:(M.push(N),ft.hasOwnProperty(N)||(ft[N]=[]),ft[N].push(()=>{x[R]=qt[N],++w,w===M.length&&p(x)}));M.length===0&&p(x)};function Cu(s,o,u,p,x,M,w,R,N,$,Z,xe,ue){s>>>=0,o>>>=0,u>>>=0,p>>>=0,x>>>=0,M>>>=0,w>>>=0,R>>>=0,N>>>=0,$>>>=0,Z>>>=0,xe>>>=0,ue>>>=0,Z=Ve(Z),M=Ti(x,M),R&&=Ti(w,R),$&&=Ti(N,$),ue=Ti(xe,ue);var se=pu(Z);gr(se,function(){_s(`Cannot construct ${Z} due to unbound types`,[p])}),gs([s,o,u],p?[p]:[],Me=>{Me=Me[0];var Ze,ut;p?(Ze=Me.registeredClass,ut=Ze.instancePrototype):ut=cs.prototype;var lt=ds(Z,function(...Ya){if(Object.getPrototypeOf(this)!==wt)throw new zt(`Use 'new' to construct ${Z}`);if(gt.constructor_body===void 0)throw new zt(`${Z} has no accessible constructor`);var kl=gt.constructor_body[Ya.length];if(kl===void 0)throw new zt(`Tried to invoke ctor of ${Z} with invalid number of parameters (${Ya.length}) - expected (${Object.keys(gt.constructor_body).toString()}) parameters instead!`);return kl.apply(this,Ya)}),wt=Object.create(ut,{constructor:{value:lt}});lt.prototype=wt;var gt=new mu(Z,lt,wt,ue,Ze,M,R,$);gt.baseClass&&(gt.baseClass.__derivedClasses??=[],gt.baseClass.__derivedClasses.push(gt));var hn=new ms(Z,gt,!0,!1,!1),kn=new ms(Z+"*",gt,!1,!1,!1),mt=new ms(Z+" const*",gt,!1,!0,!1);return yl[s]={pointerType:kn,constPointerType:mt},xl(se,lt),[hn,kn,mt]})}var ka=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}},bl=(s,o,u)=>(s instanceof Object||we(`${u} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||we(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||we(`cannot call emscripten binding method ${u} on deleted object`),us(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),Iu=function(s,o,u,p,x,M,w,R,N,$){s>>>=0,o>>>=0,u>>>=0,p>>>=0,x>>>=0,M>>>=0,w>>>=0,R>>>=0,N>>>=0,$>>>=0,o=Ve(o),x=Ti(p,x),gs([],[s],Z=>{Z=Z[0];var xe=`${Z.name}.${o}`,ue={get(){_s(`Cannot access ${xe} due to unbound types`,[u,w])},enumerable:!0,configurable:!0};return N?ue.set=()=>_s(`Cannot access ${xe} due to unbound types`,[u,w]):ue.set=se=>we(xe+" is a read-only property"),Object.defineProperty(Z.registeredClass.instancePrototype,o,ue),gs([],N?[u,w]:[u],se=>{var Me=se[0],Ze={get(){var lt=bl(this,Z,xe+" getter");return Me.fromWireType(x(M,lt))},enumerable:!0};if(N){N=Ti(R,N);var ut=se[1];Ze.set=function(lt){var wt=bl(this,Z,xe+" setter"),gt=[];N($,wt,ut.toWireType(gt,lt)),ka(gt)}}return Object.defineProperty(Z.registeredClass.instancePrototype,o,Ze),[]}),[]})},Al=[],di=[0,1,,1,null,1,!0,1,!1,1];function Ga(s){if(s>>>=0,s>9&&--di[s+1]===0){var o=di[s];di[s]=void 0,Al.push(s)}}var un={toValue:s=>(s||we(`Cannot use deleted val. handle = ${s}`),di[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let o=Al.pop()||di.length;return di[o]=s,di[o+1]=1,o}}}},Pu={name:"emscripten::val",fromWireType:s=>{var o=un.toValue(s);return Ga(s),o},toWireType:(s,o)=>un.toHandle(o),readValueFromPointer:hs,destructorFunction:null};function Ru(s){return s>>>=0,je(s,Pu)}var Wa=(s,o,u)=>{switch(o){case 1:return u?function(p){return this.fromWireType(Ae[p>>>0])}:function(p){return this.fromWireType(We[p>>>0])};case 2:return u?function(p){return this.fromWireType(oe[p>>>1>>>0])}:function(p){return this.fromWireType(rt[p>>>1>>>0])};case 4:return u?function(p){return this.fromWireType(Q[p>>>2>>>0])}:function(p){return this.fromWireType(le[p>>>2>>>0])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}};function Lu(s){return s===0?"object":s===1?"number":"string"}function Du(s,o,u,p,x){s>>>=0,o>>>=0,u>>>=0,o=Ve(o);let M=Lu(x);switch(M){case"object":{let $=function(){};$.values={},je(s,{name:o,constructor:$,valueType:M,fromWireType:function(Z){return this.constructor.values[Z]},toWireType:(Z,xe)=>xe.value,readValueFromPointer:Wa(o,u,p),destructorFunction:null}),gr(o,$);break}case"number":{var w={};je(s,{name:o,keysMap:w,valueType:M,fromWireType:$=>$,toWireType:($,Z)=>Z,readValueFromPointer:Wa(o,u,p),destructorFunction:null}),gr(o,w),delete t[o].argCount;break}case"string":{var R={},N={},w={};je(s,{name:o,valuesMap:R,reverseMap:N,keysMap:w,valueType:M,fromWireType:function(Z){return this.reverseMap[Z]},toWireType:function(Z,xe){return this.valuesMap[xe]},readValueFromPointer:Wa(o,u,p),destructorFunction:null}),gr(o,w),delete t[o].argCount;break}}}var Tl=(s,o)=>{var u=qt[s];return u===void 0&&we(`${o} has unknown type ${Ml(s)}`),u};function Nu(s,o,u){s>>>=0,o>>>=0;var p=Tl(s,"enum");switch(o=Ve(o),p.valueType){case"object":{var x=p.constructor,M=Object.create(p.constructor.prototype,{value:{value:u},constructor:{value:ds(`${p.name}_${o}`,function(){})}});x.values[u]=M,x[o]=M;break}case"number":{p.keysMap[o]=u;break}case"string":{p.valuesMap[o]=u,p.reverseMap[u]=o,p.keysMap[o]=o;break}}}var Ou=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(He[u>>>2>>>0])};case 8:return function(u){return this.fromWireType(Qe[u>>>3>>>0])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},Fu=function(s,o,u){s>>>=0,o>>>=0,u>>>=0,o=Ve(o),je(s,{name:o,fromWireType:p=>p,toWireType:(p,x)=>x,readValueFromPointer:Ou(o,u),destructorFunction:null})};function wl(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function Uu(s,o,u,p){var x=wl(s),M=s.length-2,w=[],R=["fn"];o&&R.push("thisWired");for(var N=0;N<M;++N)w.push(`arg${N}`),R.push(`arg${N}Wired`);w=w.join(","),R=R.join(",");var $=`return function (${w}) {
`;x&&($+=`var destructors = [];
`);var Z=x?"destructors":"null",xe=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];o&&($+=`var thisWired = toClassParamWire(${Z}, this);
`);for(var N=0;N<M;++N){var ue=`toArg${N}Wire`;$+=`var arg${N}Wired = ${ue}(${Z}, arg${N});
`,xe.push(ue)}if($+=(u||p?"var rv = ":"")+`invoker(${R});
`,x)$+=`runDestructors(destructors);
`;else for(var N=o?1:2;N<s.length;++N){var se=N===1?"thisWired":"arg"+(N-2)+"Wired";s[N].destructorFunction!==null&&($+=`${se}_dtor(${se});
`,xe.push(`${se}_dtor`))}return u&&($+=`var ret = fromRetWire(rv);
return ret;
`),$+=`}
`,new Function(xe,$)}function Bu(s,o,u,p,x,M){var w=o.length;w<2&&we("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var R=o[1]!==null&&u!==null,N=wl(o),$=!o[0].isVoid,Z=o[0],xe=o[1],ue=[s,we,p,x,ka,Z.fromWireType.bind(Z),xe?.toWireType.bind(xe)],se=2;se<w;++se){var Me=o[se];ue.push(Me.toWireType.bind(Me))}if(!N)for(var se=R?1:2;se<o.length;++se)o[se].destructorFunction!==null&&ue.push(o[se].destructorFunction);var ut=Uu(o,R,$,M)(...ue);return ds(s,ut)}var ku=(s,o)=>{for(var u=[],p=0;p<s;p++)u.push(le[o+p*4>>>2>>>0]);return u},Gu=s=>{s=s.trim();let o=s.indexOf("(");return o===-1?s:s.slice(0,o)};function Wu(s,o,u,p,x,M,w,R){s>>>=0,u>>>=0,p>>>=0,x>>>=0,M>>>=0;var N=ku(o,u);s=Ve(s),s=Gu(s),x=Ti(p,x,w),gr(s,function(){_s(`Cannot call ${s} due to unbound types`,N)},o-1),gs([],N,$=>{var Z=[$[0],null].concat($.slice(1));return xl(s,Bu(s,Z,null,x,M,w),o-1),[]})}var zu=function(s,o,u,p,x){s>>>=0,o>>>=0,u>>>=0,o=Ve(o);let M=p===0,w=N=>N;if(M){var R=32-8*u;w=N=>N<<R>>>R,x=w(x)}je(s,{name:o,fromWireType:w,toWireType:(N,$)=>$,readValueFromPointer:pt(o,u,p!==0),destructorFunction:null})};function Vu(s,o,u){s>>>=0,u>>>=0;var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],x=p[o];function M(w){var R=le[w>>>2>>>0],N=le[w+4>>>2>>>0];return new x(Ae.buffer,N,R)}u=Ve(u),je(s,{name:u,fromWireType:M,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})}var ui=(s,o,u)=>Xt(s,We,o,u);function Yu(s,o){s>>>=0,o>>>=0,o=Ve(o);var u=!0;je(s,{name:o,fromWireType(p){var x=le[p>>>2>>>0],M=p+4,w;if(u)w=he(M,x,!0);else{w="";for(var R=0;R<x;++R)w+=String.fromCharCode(We[M+R>>>0])}return Bn(p),w},toWireType(p,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var M,w=typeof x=="string";w||ArrayBuffer.isView(x)&&x.BYTES_PER_ELEMENT==1||we("Cannot pass non-string to std::string"),u&&w?M=dn(x):M=x.length;var R=vs(4+M+1),N=R+4;if(le[R>>>2>>>0]=M,w)if(u)ui(x,N,M+1);else for(var $=0;$<M;++$){var Z=x.charCodeAt($);Z>255&&(Bn(R),we("String has UTF-16 code units that do not fit in 8 bits")),We[N+$>>>0]=Z}else We.set(x,N>>>0);return p!==null&&p.push(Bn,R),R},readValueFromPointer:hs,destructorFunction(p){Bn(p)}})}var Cl=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Hu=(s,o,u)=>{var p=s>>>1,x=Dn(rt,p,o/2,u);if(x-p>16&&Cl)return Cl.decode(rt.subarray(p>>>0,x>>>0));for(var M="",w=p;w<x;++w){var R=rt[w>>>0];M+=String.fromCharCode(R)}return M},Xu=(s,o,u)=>{if(u??=2147483647,u<2)return 0;u-=2;for(var p=o,x=u<s.length*2?u/2:s.length,M=0;M<x;++M){var w=s.charCodeAt(M);oe[o>>>1>>>0]=w,o+=2}return oe[o>>>1>>>0]=0,o-p},$u=s=>s.length*2,qu=(s,o,u)=>{for(var p="",x=s>>>2,M=0;!(M>=o/4);M++){var w=le[x+M>>>0];if(!w&&!u)break;p+=String.fromCodePoint(w)}return p},Ku=(s,o,u)=>{if(o>>>=0,u??=2147483647,u<4)return 0;for(var p=o,x=p+u-4,M=0;M<s.length;++M){var w=s.codePointAt(M);if(w>65535&&M++,Q[o>>>2>>>0]=w,o+=4,o+4>x)break}return Q[o>>>2>>>0]=0,o-p},Zu=s=>{for(var o=0,u=0;u<s.length;++u){var p=s.codePointAt(u);p>65535&&u++,o+=4}return o};function Ju(s,o,u){s>>>=0,o>>>=0,u>>>=0,u=Ve(u);var p,x,M;o===2?(p=Hu,x=Xu,M=$u):(p=qu,x=Ku,M=Zu),je(s,{name:u,fromWireType:w=>{var R=le[w>>>2>>>0],N=p(w+4,R*o,!0);return Bn(w),N},toWireType:(w,R)=>{typeof R!="string"&&we(`Cannot pass non-string to C++ string type ${u}`);var N=M(R),$=vs(4+N+o);return le[$>>>2>>>0]=N/o,x(R,$+4,N+o),w!==null&&w.push(Bn,$),$},readValueFromPointer:hs,destructorFunction(w){Bn(w)}})}var Qu=function(s,o){s>>>=0,o>>>=0,o=Ve(o),je(s,{isVoid:!0,name:o,fromWireType:()=>{},toWireType:(u,p)=>{}})},za=[],ju=s=>{var o=za.length;return za.push(s),o},eh=(s,o)=>{for(var u=new Array(s),p=0;p<s;++p)u[p]=Tl(le[o+p*4>>>2>>>0],`parameter ${p}`);return u},th=(s,o,u)=>{var p=[],x=s(p,u);return p.length&&(le[o>>>2>>>0]=un.toHandle(p)),x},nh={},Il=s=>{var o=nh[s];return o===void 0?Ve(s):o},ih=function(s,o,u){o>>>=0;var p=8,[x,...M]=eh(s,o),w=x.toWireType.bind(x),R=M.map(se=>se.readValueFromPointer.bind(se));s--;var N={toValue:un.toValue},$=R.map((se,Me)=>{var Ze=`argFromPtr${Me}`;return N[Ze]=se,`${Ze}(args${Me?"+"+Me*p:""})`}),Z;switch(u){case 0:Z="toValue(handle)";break;case 2:Z="new (toValue(handle))";break;case 3:Z="";break;case 1:N.getStringOrSymbol=Il,Z="toValue(handle)[getStringOrSymbol(methodName)]";break}Z+=`(${$})`,x.isVoid||(N.toReturnWire=w,N.emval_returnValue=th,Z=`return emval_returnValue(toReturnWire, destructorsRef, ${Z})`),Z=`return function (handle, methodName, destructorsRef, args) {
${Z}
}`;var xe=new Function(Object.keys(N),Z)(...Object.values(N)),ue=`methodCaller<(${M.map(se=>se.name)}) => ${x.name}>`;return ju(ds(ue,xe))};function rh(s){s>>>=0,s>9&&(di[s+1]+=1)}function sh(s,o,u,p,x){return s>>>=0,o>>>=0,u>>>=0,p>>>=0,x>>>=0,za[s](o,u,p,x)}function ah(){return un.toHandle([])}function oh(s){return s>>>=0,un.toHandle(Il(s))}function lh(){return un.toHandle({})}function ch(s){s>>>=0;var o=un.toValue(s);ka(o),Ga(s)}function dh(s,o,u){s>>>=0,o>>>=0,u>>>=0,s=un.toValue(s),o=un.toValue(o),u=un.toValue(u),s[o]=u}function uh(s,o){s=Rn(s),o>>>=0;var u=new Date(s*1e3);Q[o>>>2>>>0]=u.getUTCSeconds(),Q[o+4>>>2>>>0]=u.getUTCMinutes(),Q[o+8>>>2>>>0]=u.getUTCHours(),Q[o+12>>>2>>>0]=u.getUTCDate(),Q[o+16>>>2>>>0]=u.getUTCMonth(),Q[o+20>>>2>>>0]=u.getUTCFullYear()-1900,Q[o+24>>>2>>>0]=u.getUTCDay();var p=Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0),x=(u.getTime()-p)/(1e3*60*60*24)|0;Q[o+28>>>2>>>0]=x}var hh=s=>s%4===0&&(s%100!==0||s%400===0),fh=[0,31,60,91,121,152,182,213,244,274,305,335],ph=[0,31,59,90,120,151,181,212,243,273,304,334],mh=s=>{var o=hh(s.getFullYear()),u=o?fh:ph,p=u[s.getMonth()]+s.getDate()-1;return p},_h=function(s){s>>>=0;var o=(()=>{var u=new Date(Q[s+20>>>2>>>0]+1900,Q[s+16>>>2>>>0],Q[s+12>>>2>>>0],Q[s+8>>>2>>>0],Q[s+4>>>2>>>0],Q[s>>>2>>>0],0);if(isNaN(u.getTime()))return-1;var p=Q[s+32>>>2>>>0],x=u.getTimezoneOffset(),M=new Date(u.getFullYear(),0,1),w=new Date(u.getFullYear(),6,1).getTimezoneOffset(),R=M.getTimezoneOffset(),N=Math.min(R,w);if(p<0)Q[s+32>>>2>>>0]=+(w!=R&&N==x);else if(p>0!=(N==x)){var $=Math.max(R,w),Z=p>0?N:$;u.setTime(u.getTime()+(Z-x)*6e4)}Q[s+24>>>2>>>0]=u.getDay();var xe=mh(u)|0;return Q[s+28>>>2>>>0]=xe,Q[s>>>2>>>0]=u.getSeconds(),Q[s+4>>>2>>>0]=u.getMinutes(),Q[s+8>>>2>>>0]=u.getHours(),Q[s+12>>>2>>>0]=u.getDate(),Q[s+16>>>2>>>0]=u.getMonth(),Q[s+20>>>2>>>0]=u.getYear(),u.getTime()/1e3})();return BigInt(o)},gh=function(s,o,u,p){s>>>=0,o>>>=0,u>>>=0,p>>>=0;var x=new Date().getFullYear(),M=new Date(x,0,1),w=new Date(x,6,1),R=M.getTimezoneOffset(),N=w.getTimezoneOffset(),$=Math.max(R,N);le[s>>>2>>>0]=$*60,Q[o>>>2>>>0]=+(R!=N);var Z=se=>{var Me=se>=0?"-":"+",Ze=Math.abs(se),ut=String(Math.floor(Ze/60)).padStart(2,"0"),lt=String(Ze%60).padStart(2,"0");return`UTC${Me}${ut}${lt}`},xe=Z(R),ue=Z(N);N<R?(ui(xe,u,17),ui(ue,p,17)):(ui(xe,p,17),ui(ue,u,17))},yh=()=>Date.now();function vh(s){return s>>>=0,A(he(s))}var xh=()=>performance.now(),Eh=()=>4294901760,Sh=(s,o)=>Math.ceil(s/o)*o,Mh=s=>{var o=xs.buffer.byteLength,u=(s-o+65535)/65536|0;try{return xs.grow(u),Ee(),1}catch{}};function bh(s){s>>>=0;var o=We.length,u=Eh();if(s>u)return!1;for(var p=1;p<=4;p*=2){var x=o*(1+.2/p);x=Math.min(x,s+100663296);var M=Math.min(u,Sh(Math.max(s,x),65536)),w=Mh(M);if(w)return!0}return!1}var ys={},Ah=()=>d,yr=()=>{if(!yr.strings){var s=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Ah()};for(var u in ys)ys[u]===void 0?delete o[u]:o[u]=ys[u];var p=[];for(var u in o)p.push(`${u}=${o[u]}`);yr.strings=p}return yr.strings};function Th(s,o){s>>>=0,o>>>=0;var u=0,p=0;for(var x of yr()){var M=o+u;le[s+p>>>2>>>0]=M,u+=ui(x,M,1/0)+1,p+=4}return 0}function wh(s,o){s>>>=0,o>>>=0;var u=yr();le[s>>>2>>>0]=u.length;var p=0;for(var x of u)p+=dn(x)+1;return le[o>>>2>>>0]=p,0}function Ch(s){try{var o=fe.getStreamFromFD(s);return _.close(o),0}catch(u){if(typeof _>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Ih=(s,o,u,p)=>{for(var x=0,M=0;M<u;M++){var w=le[o>>>2>>>0],R=le[o+4>>>2>>>0];o+=8;var N=_.read(s,Ae,w,R,p);if(N<0)return-1;if(x+=N,N<R)break;typeof p<"u"&&(p+=N)}return x};function Ph(s,o,u,p){o>>>=0,u>>>=0,p>>>=0;try{var x=fe.getStreamFromFD(s),M=Ih(x,o,u);return le[p>>>2>>>0]=M,0}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Rh(s,o,u,p){o=Rn(o),p>>>=0;try{if(isNaN(o))return 22;var x=fe.getStreamFromFD(s);return _.llseek(x,o,u),ge[p>>>3>>>0]=BigInt(x.position),x.getdents&&o===0&&u===0&&(x.getdents=null),0}catch(M){if(typeof _>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Lh=(s,o,u,p)=>{for(var x=0,M=0;M<u;M++){var w=le[o>>>2>>>0],R=le[o+4>>>2>>>0];o+=8;var N=_.write(s,Ae,w,R,p);if(N<0)return-1;if(x+=N,N<R)break;typeof p<"u"&&(p+=N)}return x};function Dh(s,o,u,p){o>>>=0,u>>>=0,p>>>=0;try{var x=fe.getStreamFromFD(s),M=Lh(x,o,u);return le[p>>>2>>>0]=M,0}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Nh(s,o){return s>>>=0,o>>>=0,xn(We.subarray(s>>>0,s+o>>>0))}var Pl=s=>{var o=t["_"+s];return o},Oh=(s,o)=>{Ae.set(s,o>>>0)},Rl=s=>Ol(s),Fh=s=>{var o=dn(s)+1,u=Rl(o);return ui(s,u,o),u},Ll=(s,o,u,p,x)=>{var M={string:Me=>{var Ze=0;return Me!=null&&Me!==0&&(Ze=Fh(Me)),Ze},array:Me=>{var Ze=Rl(Me.length);return Oh(Me,Ze),Ze}};function w(Me){return o==="string"?he(Me):o==="pointer"?Me>>>0:o==="boolean"?!!Me:Me}var R=Pl(s),N=[],$=0;if(p)for(var Z=0;Z<p.length;Z++){var xe=M[u[Z]];xe?($===0&&($=ot()),N[Z]=xe(p[Z])):N[Z]=p[Z]}var ue=R(...N);function se(Me){return $!==0&&Ut($),w(Me)}return ue=se(ue),ue},Uh=(s,o,u,p)=>{var x=!u||u.every(w=>w==="number"||w==="boolean"),M=o!=="string";return M&&x&&!p?Pl(s):(...w)=>Ll(s,o,u,w,p)},Bh=s=>{var o=dn(s)+1,u=vs(o);return u&&ui(s,u,o),u};if(_.createPreloadedFile=te,_.preloadFile=K,_.staticInit(),du(),bu(),t.noExitRuntime&&(Yt=t.noExitRuntime),t.preloadPlugins&&(q=t.preloadPlugins),t.print&&(b=t.print),t.printErr&&(A=t.printErr),t.wasmBinary&&(L=t.wasmBinary),t.arguments&&(c=t.arguments),t.thisProgram&&(d=t.thisProgram),t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();t.ENV=ys,t.ccall=Ll,t.cwrap=Uh,t.setValue=Ke,t.UTF8ToString=he,t.stringToNewUTF8=Bh,t.FS=_;var kh,Gh,Bn,vs,Wh,zh,Dl,Vh,Yh,Hh,Xh,$h,qh,Kh,Zh,Jh,Qh,jh,ef,tf,nf,rf,sf,af,of,Nl,Ol,Fl,lf,cf,xs,Ul;function df(s){kh=t.__Znwm=s._Znwm,Gh=t.__ZdlPvm=s._ZdlPvm,Bn=s.free,vs=s.malloc,Wh=s.calloc,zh=s.realloc,Dl=s.__getTypeName,Vh=t._strndup=s.strndup,Yh=t.__ZdaPv=s._ZdaPv,Hh=t.__ZdaPvm=s._ZdaPvm,Xh=t.__ZdlPv=s._ZdlPv,$h=t._emscripten_builtin_malloc=s.emscripten_builtin_malloc,qh=t.__Znam=s._Znam,Kh=t.__ZnamSt11align_val_t=s._ZnamSt11align_val_t,Zh=t.__ZnwmSt11align_val_t=s._ZnwmSt11align_val_t,Jh=t.___libc_calloc=s.__libc_calloc,Qh=t.___libc_free=s.__libc_free,jh=t.___libc_malloc=s.__libc_malloc,ef=t.___libc_realloc=s.__libc_realloc,tf=t._emscripten_builtin_calloc=s.emscripten_builtin_calloc,nf=t._emscripten_builtin_free=s.emscripten_builtin_free,rf=t._emscripten_builtin_realloc=s.emscripten_builtin_realloc,sf=t._malloc_size=s.malloc_size,af=t._malloc_usable_size=s.malloc_usable_size,of=t._reallocf=s.reallocf,Nl=s._emscripten_stack_restore,Ol=s._emscripten_stack_alloc,Fl=s.emscripten_stack_get_current,lf=xs=s.memory,cf=Ul=s.__indirect_function_table}var Bl={__cxa_throw:Ei,__syscall_fcntl64:ze,__syscall_fstat64:$e,__syscall_ioctl:Tt,__syscall_lstat64:Je,__syscall_newfstatat:ct,__syscall_openat:Et,__syscall_stat64:St,_abort_js:dt,_embind_register_bigint:Kt,_embind_register_bool:Vt,_embind_register_class:Cu,_embind_register_class_property:Iu,_embind_register_emval:Ru,_embind_register_enum:Du,_embind_register_enum_value:Nu,_embind_register_float:Fu,_embind_register_function:Wu,_embind_register_integer:zu,_embind_register_memory_view:Vu,_embind_register_std_string:Yu,_embind_register_std_wstring:Ju,_embind_register_void:Qu,_emval_create_invoker:ih,_emval_decref:Ga,_emval_incref:rh,_emval_invoke:sh,_emval_new_array:ah,_emval_new_cstring:oh,_emval_new_object:lh,_emval_run_destructors:ch,_emval_set_property:dh,_gmtime_js:uh,_mktime_js:_h,_tzset_js:gh,emscripten_date_now:yh,emscripten_err:vh,emscripten_get_now:xh,emscripten_resize_heap:bh,environ_get:Th,environ_sizes_get:wh,fd_close:Ch,fd_read:Ph,fd_seek:Rh,fd_write:Dh,random_get:Nh};function uf(s){s=Object.assign({},s);var o=x=>M=>x(M)>>>0,u=x=>(M,w)=>x(M,w)>>>0,p=x=>()=>x()>>>0;return s.malloc=o(s.malloc),s.calloc=u(s.calloc),s.realloc=u(s.realloc),s.__getTypeName=o(s.__getTypeName),s.emscripten_builtin_malloc=o(s.emscripten_builtin_malloc),s.emscripten_builtin_calloc=u(s.emscripten_builtin_calloc),s._emscripten_stack_alloc=o(s._emscripten_stack_alloc),s.emscripten_stack_get_current=p(s.emscripten_stack_get_current),s}function Va(){if(X>0){V=Va;return}if(Le(),X>0){V=Va;return}function s(){t.calledRun=!0,!I&&(Te(),j?.(t),t.onRuntimeInitialized?.(),pe())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s()}var wi;return wi=await Y(),Va(),Re?e=t:e=new Promise((s,o)=>{j=s,de=o}),e}var Zi=hf;var ff=Object.defineProperty,pf=(i,e,t)=>e in i?ff(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,st=(i,e,t)=>pf(i,typeof e!="symbol"?e+"":e,t);var mf=["utf-8","utf-8","iso-8859-1","iso-8859-2","iso-8859-3","iso-8859-4","iso-8859-5","iso-8859-6","iso-8859-7","iso-8859-8","iso-8859-9","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","shift-jis","macintosh","big5","euc-kr","utf-8","ibm866","windows-1250","windows-1251","windows-1252","gbk","windows-1253","windows-1254","windows-1255","windows-1256","windows-1257","windows-874","shift-jis","gbk","euc-kr","big5","utf-8","utf-16le","windows-1258"],Gl=i=>mf[i];var Ci=(i=>(i[i.TopLeft=1]="TopLeft",i[i.TopCenter=2]="TopCenter",i[i.TopRight=3]="TopRight",i[i.MiddleLeft=4]="MiddleLeft",i[i.MiddleCenter=5]="MiddleCenter",i[i.MiddleRight=6]="MiddleRight",i[i.BottomLeft=7]="BottomLeft",i[i.BottomCenter=8]="BottomCenter",i[i.BottomRight=9]="BottomRight",i))(Ci||{});var $a=(i=>(i[i.PatternFill=0]="PatternFill",i[i.SolidFill=1]="SolidFill",i))($a||{}),qa=(i=>(i[i.NonAssociative=0]="NonAssociative",i[i.Associative=1]="Associative",i))(qa||{});var Hl=(i=>(i[i.Solid=0]="Solid",i[i.Gradient=1]="Gradient",i))(Hl||{}),Ka=(i=>(i[i.TwoColor=0]="TwoColor",i[i.OneColor=1]="OneColor",i))(Ka||{});var xr=(i=>(i[i.Line=1]="Line",i[i.Circular=2]="Circular",i[i.Elliptic=3]="Elliptic",i[i.Spline=4]="Spline",i))(xr||{});var Za=(i=>(i[i.LEFT=0]="LEFT",i[i.CENTER=1]="CENTER",i[i.RIGHT=2]="RIGHT",i[i.ALIGNED=3]="ALIGNED",i[i.MIDDLE=4]="MIDDLE",i[i.FIT=5]="FIT",i))(Za||{});var _f=Object.freeze(["ACADMAINTVER","ACADVER","ANGBASE","ANGDIR","ATTMODE","AUNITS","AUPREC","CECOLOR","CELTSCALE","CELTYPE","CELWEIGHT","CEPSNID","CEPSNTYPE","CHAMFERA","CHAMFERB","CHAMFERC","CHAMFERD","CLAYER","CMLJUST","CMLSCALE","CMLSTYLE","CSHADOW","DIMADEC","DIMALT","DIMALTD","DIMALTF","DIMALTRND","DIMALTTD","DIMALTTZ","DIMALTU","DIMALTZ","DIMAPOST","DIMASO","DIMASSOC","DIMASZ","DIMATFIT","DIMAUNIT","DIMAZIN","DIMBLK","DIMBLK1","DIMBLK2","DIMCEN","DIMCLRD","DIMCLRE","DIMCLRT","DIMDEC","DIMDLE","DIMDLI","DIMDSEP","DIMEXE","DIMEXO","DIMFAC","DIMGAP","DIMJUST","DIMLDRBLK","DIMLFAC","DIMLIM","DIMLUNIT","DIMLWD","DIMLWE","DIMPOST","DIMRND","DIMSAH","DIMSCALE","DIMSD1","DIMSD2","DIMSE1","DIMSE2","DIMSHO","DIMSOXD","DIMSTYLE","DIMTAD","DIMTDEC","DIMTFAC","DIMTIH","DIMTIX","DIMTM","DIMTMOVE","DIMTOFL","DIMTOH","DIMTOL","DIMTOLJ","DIMTP","DIMTSZ","DIMTVP","DIMTXSTY","DIMTXT","DIMTZIN","DIMUPT","DIMZIN","DISPSILH","DRAGVS","DWGCODEPAGE","ELEVATION","ENDCAPS","EXTMAX","EXTMIN","EXTNAMES","FILLETRAD","FILLMODE","FINGERPRINTGUID","HALOGAP","HANDSEED","HIDETEXT","HYPERLINKBASE","INDEXCTL","INSBASE","INSUNITS","INTERFERECOLOR","INTERFEREOBJVS","INTERFEREVPVS","INTERSECTIONCOLOR","INTERSECTIONDISPLAY","JOINSTYLE","LIMCHECK","LIMMAX","LIMMIN","LTSCALE","LUNITS","LUPREC","LWDISPLAY","MAXACTVP","MEASUREMENT","MENU","MIRRTEXT","OBSCOLOR","OBSLTYPE","ORTHOMODE","PDMODE","PDSIZE","PELEVATION","PEXTMAX","PEXTMIN","PINSBASE","PLIMCHECK","PLIMMAX","PLIMMIN","PLINEGEN","PLINEWID","PROJECTNAME","PROXYGRAPHICS","PSLTSCALE","PSTYLEMODE","PSVPSCALE","PUCSBASE","PUCSNAME","PUCSORG","PUCSORGBACK","PUCSORGBOTTOM","PUCSORGFRONT","PUCSORGLEFT","PUCSORGRIGHT","PUCSORGTOP","PUCSORTHOREF","PUCSORTHOVIEW","PUCSXDIR","PUCSYDIR","QTEXTMODE","REGENMODE","SHADEDGE","SHADEDIF","SHADOWPLANELOCATION","SKETCHINC","SKPOLY","SORTENTS","SPLINESEGS","SPLINETYPE","SURFTAB1","SURFTAB2","SURFTYPE","SURFU","SURFV","TDCREATE","TDINDWG","TDUCREATE","TDUPDATE","TDUSRTIMER","TDUUPDATE","TEXTSIZE","TEXTSTYLE","THICKNESS","TILEMODE","TRACEWID","TREEDEPTH","UCSBASE","UCSNAME","UCSORG","UCSORGBACK","UCSORGBOTTOM","UCSORGFRONT","UCSORGLEFT","UCSORGRIGHT","UCSORGTOP","UCSORTHOREF","UCSORTHOVIEW","UCSXDIR","UCSYDIR","UNITMODE","USERI1","USERI2","USERI3","USERI4","USERI5","USERR1","USERR2","USERR3","USERR4","USERR5","USRTIMER","VERSIONGUID","VISRETAIN","WORLDVIEW","XCLIPFRAME","XEDIT"]);var gf=/\\U\+([0-9A-Fa-f]{4})/g;function Wl(i){return!i||!i.includes("\\U+")?i:i.replace(gf,(e,t)=>String.fromCharCode(parseInt(t,16)))}var yf=[{type:"invalid",hdr:"INVALI",description:"No DWG",version:0},{type:"r1.1",hdr:"MC0.0",description:"MicroCAD Release 1.1",version:0},{type:"r1.2",hdr:"AC1.2",description:"AutoCAD Release 1.2",version:0},{type:"r1.3",hdr:"AC1.3",description:"AutoCAD Release 1.3",version:1},{type:"r1.4",hdr:"AC1.40",description:"AutoCAD Release 1.4",version:2},{type:"r2.0b",hdr:"AC1.50",description:"AutoCAD 2.0 beta",version:3},{type:"r2.0",hdr:"AC1.50",description:"AutoCAD Release 2.0",version:4},{type:"r2.10",hdr:"AC2.10",description:"AutoCAD Release 2.10",version:5},{type:"r2.21",hdr:"AC2.21",description:"AutoCAD Release 2.21",version:6},{type:"r2.22",hdr:"AC2.22",description:"AutoCAD Release 2.22",version:7},{type:"r2.4",hdr:"AC1001",description:"AutoCAD Release 2.4",version:8},{type:"r2.5",hdr:"AC1002",description:"AutoCAD Release 2.5",version:9},{type:"r2.6",hdr:"AC1003",description:"AutoCAD Release 2.6",version:10},{type:"r9",hdr:"AC1004",description:"AutoCAD Release 9",version:11},{type:"r9c1",hdr:"AC1005",description:"AutoCAD Release 9c1",version:12},{type:"r10",hdr:"AC1006",description:"AutoCAD Release 10",version:13},{type:"r11b1",hdr:"AC1007",description:"AutoCAD 11 beta 1",version:14},{type:"r11b2",hdr:"AC1008",description:"AutoCAD 11 beta 2",version:15},{type:"r11",hdr:"AC1009",description:"AutoCAD Release 11/12 (LT R1/R2)",version:16},{type:"r13b1",hdr:"AC1010",description:"AutoCAD pre-R13 a",version:17},{type:"r13b2",hdr:"AC1011",description:"AutoCAD pre-R13 b",version:18},{type:"r13",hdr:"AC1012",description:"AutoCAD Release 13",version:19},{type:"r13c3",hdr:"AC1013",description:"AutoCAD Release 13c3",version:20},{type:"r14",hdr:"AC1014",description:"AutoCAD Release 14",version:21},{type:"r2000b",hdr:"AC1500",description:"AutoCAD 2000 beta",version:22},{type:"r2000",hdr:"AC1015",description:"AutoCAD Release 2000",version:23},{type:"r2000i",hdr:"AC1016",description:"AutoCAD Release 2000i",version:23},{type:"r2002",hdr:"AC1017",description:"AutoCAD Release 2002",version:23},{type:"r2004a",hdr:"AC402a",description:"AutoCAD 2004 alpha a",version:24},{type:"r2004b",hdr:"AC402b",description:"AutoCAD 2004 alpha b",version:24},{type:"r2004c",hdr:"AC1018",description:"AutoCAD 2004 beta",version:24},{type:"r2004",hdr:"AC1018",description:"AutoCAD Release 2004",version:25},{type:"r2007a",hdr:"AC701a",description:"AutoCAD 2007 alpha",version:26},{type:"r2007b",hdr:"AC1021",description:"AutoCAD 2007 beta",version:26},{type:"r2007",hdr:"AC1021",description:"AutoCAD Release 2007",version:27},{type:"r2010b",hdr:"AC1024",description:"AutoCAD 2010 beta",version:28},{type:"r2010",hdr:"AC1024",description:"AutoCAD Release 2010",version:29},{type:"r2013b",hdr:"AC1027",description:"AutoCAD 2013 beta",version:30},{type:"r2013",hdr:"AC1027",description:"AutoCAD Release 2013",version:31},{type:"r2018b",hdr:"AC1032",description:"AutoCAD 2018 beta",version:32},{type:"r2018",hdr:"AC1032",description:"AutoCAD Release 2018",version:33},{type:"r2022b",hdr:"AC103-4",description:"AutoCAD 2022 beta",version:36},{type:"r>2022",hdr:"",description:"AutoCAD Release >2022",version:0}],Ja=(i=>(i[i.DWG_SUPERTYPE_ENTITY=0]="DWG_SUPERTYPE_ENTITY",i[i.DWG_SUPERTYPE_OBJECT=1]="DWG_SUPERTYPE_OBJECT",i))(Ja||{}),Xl=(i=>(i[i.WRONGCRC=1]="WRONGCRC",i[i.NOTYETSUPPORTED=2]="NOTYETSUPPORTED",i[i.UNHANDLEDCLASS=4]="UNHANDLEDCLASS",i[i.INVALIDTYPE=8]="INVALIDTYPE",i[i.INVALIDHANDLE=16]="INVALIDHANDLE",i[i.INVALIDEED=32]="INVALIDEED",i[i.VALUEOUTOFBOUNDS=64]="VALUEOUTOFBOUNDS",i[i.CLASSESNOTFOUND=128]="CLASSESNOTFOUND",i[i.SECTIONNOTFOUND=256]="SECTIONNOTFOUND",i[i.PAGENOTFOUND=512]="PAGENOTFOUND",i[i.INTERNALERROR=1024]="INTERNALERROR",i[i.INVALIDDWG=2048]="INVALIDDWG",i[i.IOERROR=4096]="IOERROR",i[i.OUTOFMEM=8192]="OUTOFMEM",i))(Xl||{}),ne=(i=>(i[i.DWG_TYPE_UNUSED=0]="DWG_TYPE_UNUSED",i[i.DWG_TYPE_TEXT=1]="DWG_TYPE_TEXT",i[i.DWG_TYPE_ATTRIB=2]="DWG_TYPE_ATTRIB",i[i.DWG_TYPE_ATTDEF=3]="DWG_TYPE_ATTDEF",i[i.DWG_TYPE_BLOCK=4]="DWG_TYPE_BLOCK",i[i.DWG_TYPE_ENDBLK=5]="DWG_TYPE_ENDBLK",i[i.DWG_TYPE_SEQEND=6]="DWG_TYPE_SEQEND",i[i.DWG_TYPE_INSERT=7]="DWG_TYPE_INSERT",i[i.DWG_TYPE_MINSERT=8]="DWG_TYPE_MINSERT",i[i.DWG_TYPE_VERTEX_2D=10]="DWG_TYPE_VERTEX_2D",i[i.DWG_TYPE_VERTEX_3D=11]="DWG_TYPE_VERTEX_3D",i[i.DWG_TYPE_VERTEX_MESH=12]="DWG_TYPE_VERTEX_MESH",i[i.DWG_TYPE_VERTEX_PFACE=13]="DWG_TYPE_VERTEX_PFACE",i[i.DWG_TYPE_VERTEX_PFACE_FACE=14]="DWG_TYPE_VERTEX_PFACE_FACE",i[i.DWG_TYPE_POLYLINE_2D=15]="DWG_TYPE_POLYLINE_2D",i[i.DWG_TYPE_POLYLINE_3D=16]="DWG_TYPE_POLYLINE_3D",i[i.DWG_TYPE_ARC=17]="DWG_TYPE_ARC",i[i.DWG_TYPE_CIRCLE=18]="DWG_TYPE_CIRCLE",i[i.DWG_TYPE_LINE=19]="DWG_TYPE_LINE",i[i.DWG_TYPE_DIMENSION_ORDINATE=20]="DWG_TYPE_DIMENSION_ORDINATE",i[i.DWG_TYPE_DIMENSION_LINEAR=21]="DWG_TYPE_DIMENSION_LINEAR",i[i.DWG_TYPE_DIMENSION_ALIGNED=22]="DWG_TYPE_DIMENSION_ALIGNED",i[i.DWG_TYPE_DIMENSION_ANG3PT=23]="DWG_TYPE_DIMENSION_ANG3PT",i[i.DWG_TYPE_DIMENSION_ANG2LN=24]="DWG_TYPE_DIMENSION_ANG2LN",i[i.DWG_TYPE_DIMENSION_RADIUS=25]="DWG_TYPE_DIMENSION_RADIUS",i[i.DWG_TYPE_DIMENSION_DIAMETER=26]="DWG_TYPE_DIMENSION_DIAMETER",i[i.DWG_TYPE_POINT=27]="DWG_TYPE_POINT",i[i.DWG_TYPE_3DFACE=28]="DWG_TYPE_3DFACE",i[i.DWG_TYPE_POLYLINE_PFACE=29]="DWG_TYPE_POLYLINE_PFACE",i[i.DWG_TYPE_POLYLINE_MESH=30]="DWG_TYPE_POLYLINE_MESH",i[i.DWG_TYPE_SOLID=31]="DWG_TYPE_SOLID",i[i.DWG_TYPE_TRACE=32]="DWG_TYPE_TRACE",i[i.DWG_TYPE_SHAPE=33]="DWG_TYPE_SHAPE",i[i.DWG_TYPE_VIEWPORT=34]="DWG_TYPE_VIEWPORT",i[i.DWG_TYPE_ELLIPSE=35]="DWG_TYPE_ELLIPSE",i[i.DWG_TYPE_SPLINE=36]="DWG_TYPE_SPLINE",i[i.DWG_TYPE_REGION=37]="DWG_TYPE_REGION",i[i.DWG_TYPE_3DSOLID=38]="DWG_TYPE_3DSOLID",i[i.DWG_TYPE_BODY=39]="DWG_TYPE_BODY",i[i.DWG_TYPE_RAY=40]="DWG_TYPE_RAY",i[i.DWG_TYPE_XLINE=41]="DWG_TYPE_XLINE",i[i.DWG_TYPE_DICTIONARY=42]="DWG_TYPE_DICTIONARY",i[i.DWG_TYPE_OLEFRAME=43]="DWG_TYPE_OLEFRAME",i[i.DWG_TYPE_MTEXT=44]="DWG_TYPE_MTEXT",i[i.DWG_TYPE_LEADER=45]="DWG_TYPE_LEADER",i[i.DWG_TYPE_TOLERANCE=46]="DWG_TYPE_TOLERANCE",i[i.DWG_TYPE_MLINE=47]="DWG_TYPE_MLINE",i[i.DWG_TYPE_BLOCK_CONTROL=48]="DWG_TYPE_BLOCK_CONTROL",i[i.DWG_TYPE_BLOCK_HEADER=49]="DWG_TYPE_BLOCK_HEADER",i[i.DWG_TYPE_LAYER_CONTROL=50]="DWG_TYPE_LAYER_CONTROL",i[i.DWG_TYPE_LAYER=51]="DWG_TYPE_LAYER",i[i.DWG_TYPE_STYLE_CONTROL=52]="DWG_TYPE_STYLE_CONTROL",i[i.DWG_TYPE_STYLE=53]="DWG_TYPE_STYLE",i[i.DWG_TYPE_LTYPE_CONTROL=56]="DWG_TYPE_LTYPE_CONTROL",i[i.DWG_TYPE_LTYPE=57]="DWG_TYPE_LTYPE",i[i.DWG_TYPE_VIEW_CONTROL=60]="DWG_TYPE_VIEW_CONTROL",i[i.DWG_TYPE_VIEW=61]="DWG_TYPE_VIEW",i[i.DWG_TYPE_UCS_CONTROL=62]="DWG_TYPE_UCS_CONTROL",i[i.DWG_TYPE_UCS=63]="DWG_TYPE_UCS",i[i.DWG_TYPE_VPORT_CONTROL=64]="DWG_TYPE_VPORT_CONTROL",i[i.DWG_TYPE_VPORT=65]="DWG_TYPE_VPORT",i[i.DWG_TYPE_APPID_CONTROL=66]="DWG_TYPE_APPID_CONTROL",i[i.DWG_TYPE_APPID=67]="DWG_TYPE_APPID",i[i.DWG_TYPE_DIMSTYLE_CONTROL=68]="DWG_TYPE_DIMSTYLE_CONTROL",i[i.DWG_TYPE_DIMSTYLE=69]="DWG_TYPE_DIMSTYLE",i[i.DWG_TYPE_VX_CONTROL=70]="DWG_TYPE_VX_CONTROL",i[i.DWG_TYPE_VX_TABLE_RECORD=71]="DWG_TYPE_VX_TABLE_RECORD",i[i.DWG_TYPE_GROUP=72]="DWG_TYPE_GROUP",i[i.DWG_TYPE_MLINESTYLE=73]="DWG_TYPE_MLINESTYLE",i[i.DWG_TYPE_OLE2FRAME=74]="DWG_TYPE_OLE2FRAME",i[i.DWG_TYPE_DUMMY=75]="DWG_TYPE_DUMMY",i[i.DWG_TYPE_LONG_TRANSACTION=76]="DWG_TYPE_LONG_TRANSACTION",i[i.DWG_TYPE_LWPOLYLINE=77]="DWG_TYPE_LWPOLYLINE",i[i.DWG_TYPE_HATCH=78]="DWG_TYPE_HATCH",i[i.DWG_TYPE_XRECORD=79]="DWG_TYPE_XRECORD",i[i.DWG_TYPE_PLACEHOLDER=80]="DWG_TYPE_PLACEHOLDER",i[i.DWG_TYPE_VBA_PROJECT=81]="DWG_TYPE_VBA_PROJECT",i[i.DWG_TYPE_LAYOUT=82]="DWG_TYPE_LAYOUT",i[i.DWG_TYPE_PROXY_ENTITY=498]="DWG_TYPE_PROXY_ENTITY",i[i.DWG_TYPE_PROXY_OBJECT=499]="DWG_TYPE_PROXY_OBJECT",i[i.DWG_TYPE_ACDSRECORD=500]="DWG_TYPE_ACDSRECORD",i[i.DWG_TYPE_ACDSSCHEMA=501]="DWG_TYPE_ACDSSCHEMA",i[i.DWG_TYPE_ACMECOMMANDHISTORY=502]="DWG_TYPE_ACMECOMMANDHISTORY",i[i.DWG_TYPE_ACMESCOPE=503]="DWG_TYPE_ACMESCOPE",i[i.DWG_TYPE_ACMESTATEMGR=504]="DWG_TYPE_ACMESTATEMGR",i[i.DWG_TYPE_ACSH_BOOLEAN_CLASS=505]="DWG_TYPE_ACSH_BOOLEAN_CLASS",i[i.DWG_TYPE_ACSH_BOX_CLASS=506]="DWG_TYPE_ACSH_BOX_CLASS",i[i.DWG_TYPE_ACSH_BREP_CLASS=507]="DWG_TYPE_ACSH_BREP_CLASS",i[i.DWG_TYPE_ACSH_CHAMFER_CLASS=508]="DWG_TYPE_ACSH_CHAMFER_CLASS",i[i.DWG_TYPE_ACSH_CONE_CLASS=509]="DWG_TYPE_ACSH_CONE_CLASS",i[i.DWG_TYPE_ACSH_CYLINDER_CLASS=510]="DWG_TYPE_ACSH_CYLINDER_CLASS",i[i.DWG_TYPE_ACSH_EXTRUSION_CLASS=511]="DWG_TYPE_ACSH_EXTRUSION_CLASS",i[i.DWG_TYPE_ACSH_FILLET_CLASS=512]="DWG_TYPE_ACSH_FILLET_CLASS",i[i.DWG_TYPE_ACSH_HISTORY_CLASS=513]="DWG_TYPE_ACSH_HISTORY_CLASS",i[i.DWG_TYPE_ACSH_LOFT_CLASS=514]="DWG_TYPE_ACSH_LOFT_CLASS",i[i.DWG_TYPE_ACSH_PYRAMID_CLASS=515]="DWG_TYPE_ACSH_PYRAMID_CLASS",i[i.DWG_TYPE_ACSH_REVOLVE_CLASS=516]="DWG_TYPE_ACSH_REVOLVE_CLASS",i[i.DWG_TYPE_ACSH_SPHERE_CLASS=517]="DWG_TYPE_ACSH_SPHERE_CLASS",i[i.DWG_TYPE_ACSH_SWEEP_CLASS=518]="DWG_TYPE_ACSH_SWEEP_CLASS",i[i.DWG_TYPE_ACSH_TORUS_CLASS=519]="DWG_TYPE_ACSH_TORUS_CLASS",i[i.DWG_TYPE_ACSH_WEDGE_CLASS=520]="DWG_TYPE_ACSH_WEDGE_CLASS",i[i.DWG_TYPE_ALDIMOBJECTCONTEXTDATA=521]="DWG_TYPE_ALDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_ALIGNMENTPARAMETERENTITY=522]="DWG_TYPE_ALIGNMENTPARAMETERENTITY",i[i.DWG_TYPE_ANGDIMOBJECTCONTEXTDATA=523]="DWG_TYPE_ANGDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_ANNOTSCALEOBJECTCONTEXTDATA=524]="DWG_TYPE_ANNOTSCALEOBJECTCONTEXTDATA",i[i.DWG_TYPE_ARCALIGNEDTEXT=525]="DWG_TYPE_ARCALIGNEDTEXT",i[i.DWG_TYPE_ARC_DIMENSION=526]="DWG_TYPE_ARC_DIMENSION",i[i.DWG_TYPE_ASSOC2DCONSTRAINTGROUP=527]="DWG_TYPE_ASSOC2DCONSTRAINTGROUP",i[i.DWG_TYPE_ASSOC3POINTANGULARDIMACTIONBODY=528]="DWG_TYPE_ASSOC3POINTANGULARDIMACTIONBODY",i[i.DWG_TYPE_ASSOCACTION=529]="DWG_TYPE_ASSOCACTION",i[i.DWG_TYPE_ASSOCACTIONPARAM=530]="DWG_TYPE_ASSOCACTIONPARAM",i[i.DWG_TYPE_ASSOCALIGNEDDIMACTIONBODY=531]="DWG_TYPE_ASSOCALIGNEDDIMACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYACTIONBODY=532]="DWG_TYPE_ASSOCARRAYACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYMODIFYACTIONBODY=533]="DWG_TYPE_ASSOCARRAYMODIFYACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYMODIFYPARAMETERS=534]="DWG_TYPE_ASSOCARRAYMODIFYPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYPATHPARAMETERS=535]="DWG_TYPE_ASSOCARRAYPATHPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYPOLARPARAMETERS=536]="DWG_TYPE_ASSOCARRAYPOLARPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYRECTANGULARPARAMETERS=537]="DWG_TYPE_ASSOCARRAYRECTANGULARPARAMETERS",i[i.DWG_TYPE_ASSOCASMBODYACTIONPARAM=538]="DWG_TYPE_ASSOCASMBODYACTIONPARAM",i[i.DWG_TYPE_ASSOCBLENDSURFACEACTIONBODY=539]="DWG_TYPE_ASSOCBLENDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCCOMPOUNDACTIONPARAM=540]="DWG_TYPE_ASSOCCOMPOUNDACTIONPARAM",i[i.DWG_TYPE_ASSOCDEPENDENCY=541]="DWG_TYPE_ASSOCDEPENDENCY",i[i.DWG_TYPE_ASSOCDIMDEPENDENCYBODY=542]="DWG_TYPE_ASSOCDIMDEPENDENCYBODY",i[i.DWG_TYPE_ASSOCEDGEACTIONPARAM=543]="DWG_TYPE_ASSOCEDGEACTIONPARAM",i[i.DWG_TYPE_ASSOCEDGECHAMFERACTIONBODY=544]="DWG_TYPE_ASSOCEDGECHAMFERACTIONBODY",i[i.DWG_TYPE_ASSOCEDGEFILLETACTIONBODY=545]="DWG_TYPE_ASSOCEDGEFILLETACTIONBODY",i[i.DWG_TYPE_ASSOCEXTENDSURFACEACTIONBODY=546]="DWG_TYPE_ASSOCEXTENDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCEXTRUDEDSURFACEACTIONBODY=547]="DWG_TYPE_ASSOCEXTRUDEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCFACEACTIONPARAM=548]="DWG_TYPE_ASSOCFACEACTIONPARAM",i[i.DWG_TYPE_ASSOCFILLETSURFACEACTIONBODY=549]="DWG_TYPE_ASSOCFILLETSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCGEOMDEPENDENCY=550]="DWG_TYPE_ASSOCGEOMDEPENDENCY",i[i.DWG_TYPE_ASSOCLOFTEDSURFACEACTIONBODY=551]="DWG_TYPE_ASSOCLOFTEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCMLEADERACTIONBODY=552]="DWG_TYPE_ASSOCMLEADERACTIONBODY",i[i.DWG_TYPE_ASSOCNETWORK=553]="DWG_TYPE_ASSOCNETWORK",i[i.DWG_TYPE_ASSOCNETWORKSURFACEACTIONBODY=554]="DWG_TYPE_ASSOCNETWORKSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCOBJECTACTIONPARAM=555]="DWG_TYPE_ASSOCOBJECTACTIONPARAM",i[i.DWG_TYPE_ASSOCOFFSETSURFACEACTIONBODY=556]="DWG_TYPE_ASSOCOFFSETSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCORDINATEDIMACTIONBODY=557]="DWG_TYPE_ASSOCORDINATEDIMACTIONBODY",i[i.DWG_TYPE_ASSOCOSNAPPOINTREFACTIONPARAM=558]="DWG_TYPE_ASSOCOSNAPPOINTREFACTIONPARAM",i[i.DWG_TYPE_ASSOCPATCHSURFACEACTIONBODY=559]="DWG_TYPE_ASSOCPATCHSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCPATHACTIONPARAM=560]="DWG_TYPE_ASSOCPATHACTIONPARAM",i[i.DWG_TYPE_ASSOCPERSSUBENTMANAGER=561]="DWG_TYPE_ASSOCPERSSUBENTMANAGER",i[i.DWG_TYPE_ASSOCPLANESURFACEACTIONBODY=562]="DWG_TYPE_ASSOCPLANESURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCPOINTREFACTIONPARAM=563]="DWG_TYPE_ASSOCPOINTREFACTIONPARAM",i[i.DWG_TYPE_ASSOCRESTOREENTITYSTATEACTIONBODY=564]="DWG_TYPE_ASSOCRESTOREENTITYSTATEACTIONBODY",i[i.DWG_TYPE_ASSOCREVOLVEDSURFACEACTIONBODY=565]="DWG_TYPE_ASSOCREVOLVEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCROTATEDDIMACTIONBODY=566]="DWG_TYPE_ASSOCROTATEDDIMACTIONBODY",i[i.DWG_TYPE_ASSOCSWEPTSURFACEACTIONBODY=567]="DWG_TYPE_ASSOCSWEPTSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCTRIMSURFACEACTIONBODY=568]="DWG_TYPE_ASSOCTRIMSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCVALUEDEPENDENCY=569]="DWG_TYPE_ASSOCVALUEDEPENDENCY",i[i.DWG_TYPE_ASSOCVARIABLE=570]="DWG_TYPE_ASSOCVARIABLE",i[i.DWG_TYPE_ASSOCVERTEXACTIONPARAM=571]="DWG_TYPE_ASSOCVERTEXACTIONPARAM",i[i.DWG_TYPE_BASEPOINTPARAMETERENTITY=572]="DWG_TYPE_BASEPOINTPARAMETERENTITY",i[i.DWG_TYPE_BLKREFOBJECTCONTEXTDATA=573]="DWG_TYPE_BLKREFOBJECTCONTEXTDATA",i[i.DWG_TYPE_BLOCKALIGNEDCONSTRAINTPARAMETER=574]="DWG_TYPE_BLOCKALIGNEDCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKALIGNMENTGRIP=575]="DWG_TYPE_BLOCKALIGNMENTGRIP",i[i.DWG_TYPE_BLOCKALIGNMENTPARAMETER=576]="DWG_TYPE_BLOCKALIGNMENTPARAMETER",i[i.DWG_TYPE_BLOCKANGULARCONSTRAINTPARAMETER=577]="DWG_TYPE_BLOCKANGULARCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKARRAYACTION=578]="DWG_TYPE_BLOCKARRAYACTION",i[i.DWG_TYPE_BLOCKBASEPOINTPARAMETER=579]="DWG_TYPE_BLOCKBASEPOINTPARAMETER",i[i.DWG_TYPE_BLOCKDIAMETRICCONSTRAINTPARAMETER=580]="DWG_TYPE_BLOCKDIAMETRICCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKFLIPACTION=581]="DWG_TYPE_BLOCKFLIPACTION",i[i.DWG_TYPE_BLOCKFLIPGRIP=582]="DWG_TYPE_BLOCKFLIPGRIP",i[i.DWG_TYPE_BLOCKFLIPPARAMETER=583]="DWG_TYPE_BLOCKFLIPPARAMETER",i[i.DWG_TYPE_BLOCKGRIPLOCATIONCOMPONENT=584]="DWG_TYPE_BLOCKGRIPLOCATIONCOMPONENT",i[i.DWG_TYPE_BLOCKHORIZONTALCONSTRAINTPARAMETER=585]="DWG_TYPE_BLOCKHORIZONTALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKLINEARCONSTRAINTPARAMETER=586]="DWG_TYPE_BLOCKLINEARCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKLINEARGRIP=587]="DWG_TYPE_BLOCKLINEARGRIP",i[i.DWG_TYPE_BLOCKLINEARPARAMETER=588]="DWG_TYPE_BLOCKLINEARPARAMETER",i[i.DWG_TYPE_BLOCKLOOKUPACTION=589]="DWG_TYPE_BLOCKLOOKUPACTION",i[i.DWG_TYPE_BLOCKLOOKUPGRIP=590]="DWG_TYPE_BLOCKLOOKUPGRIP",i[i.DWG_TYPE_BLOCKLOOKUPPARAMETER=591]="DWG_TYPE_BLOCKLOOKUPPARAMETER",i[i.DWG_TYPE_BLOCKMOVEACTION=592]="DWG_TYPE_BLOCKMOVEACTION",i[i.DWG_TYPE_BLOCKPARAMDEPENDENCYBODY=593]="DWG_TYPE_BLOCKPARAMDEPENDENCYBODY",i[i.DWG_TYPE_BLOCKPOINTPARAMETER=594]="DWG_TYPE_BLOCKPOINTPARAMETER",i[i.DWG_TYPE_BLOCKPOLARGRIP=595]="DWG_TYPE_BLOCKPOLARGRIP",i[i.DWG_TYPE_BLOCKPOLARPARAMETER=596]="DWG_TYPE_BLOCKPOLARPARAMETER",i[i.DWG_TYPE_BLOCKPOLARSTRETCHACTION=597]="DWG_TYPE_BLOCKPOLARSTRETCHACTION",i[i.DWG_TYPE_BLOCKPROPERTIESTABLE=598]="DWG_TYPE_BLOCKPROPERTIESTABLE",i[i.DWG_TYPE_BLOCKPROPERTIESTABLEGRIP=599]="DWG_TYPE_BLOCKPROPERTIESTABLEGRIP",i[i.DWG_TYPE_BLOCKRADIALCONSTRAINTPARAMETER=600]="DWG_TYPE_BLOCKRADIALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKREPRESENTATION=601]="DWG_TYPE_BLOCKREPRESENTATION",i[i.DWG_TYPE_BLOCKROTATEACTION=602]="DWG_TYPE_BLOCKROTATEACTION",i[i.DWG_TYPE_BLOCKROTATIONGRIP=603]="DWG_TYPE_BLOCKROTATIONGRIP",i[i.DWG_TYPE_BLOCKROTATIONPARAMETER=604]="DWG_TYPE_BLOCKROTATIONPARAMETER",i[i.DWG_TYPE_BLOCKSCALEACTION=605]="DWG_TYPE_BLOCKSCALEACTION",i[i.DWG_TYPE_BLOCKSTRETCHACTION=606]="DWG_TYPE_BLOCKSTRETCHACTION",i[i.DWG_TYPE_BLOCKUSERPARAMETER=607]="DWG_TYPE_BLOCKUSERPARAMETER",i[i.DWG_TYPE_BLOCKVERTICALCONSTRAINTPARAMETER=608]="DWG_TYPE_BLOCKVERTICALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKVISIBILITYGRIP=609]="DWG_TYPE_BLOCKVISIBILITYGRIP",i[i.DWG_TYPE_BLOCKVISIBILITYPARAMETER=610]="DWG_TYPE_BLOCKVISIBILITYPARAMETER",i[i.DWG_TYPE_BLOCKXYGRIP=611]="DWG_TYPE_BLOCKXYGRIP",i[i.DWG_TYPE_BLOCKXYPARAMETER=612]="DWG_TYPE_BLOCKXYPARAMETER",i[i.DWG_TYPE_CAMERA=613]="DWG_TYPE_CAMERA",i[i.DWG_TYPE_CELLSTYLEMAP=614]="DWG_TYPE_CELLSTYLEMAP",i[i.DWG_TYPE_CONTEXTDATAMANAGER=615]="DWG_TYPE_CONTEXTDATAMANAGER",i[i.DWG_TYPE_CSACDOCUMENTOPTIONS=616]="DWG_TYPE_CSACDOCUMENTOPTIONS",i[i.DWG_TYPE_CURVEPATH=617]="DWG_TYPE_CURVEPATH",i[i.DWG_TYPE_DATALINK=618]="DWG_TYPE_DATALINK",i[i.DWG_TYPE_DATATABLE=619]="DWG_TYPE_DATATABLE",i[i.DWG_TYPE_DBCOLOR=620]="DWG_TYPE_DBCOLOR",i[i.DWG_TYPE_DETAILVIEWSTYLE=621]="DWG_TYPE_DETAILVIEWSTYLE",i[i.DWG_TYPE_DGNDEFINITION=622]="DWG_TYPE_DGNDEFINITION",i[i.DWG_TYPE_DGNUNDERLAY=623]="DWG_TYPE_DGNUNDERLAY",i[i.DWG_TYPE_DICTIONARYVAR=624]="DWG_TYPE_DICTIONARYVAR",i[i.DWG_TYPE_DICTIONARYWDFLT=625]="DWG_TYPE_DICTIONARYWDFLT",i[i.DWG_TYPE_DIMASSOC=626]="DWG_TYPE_DIMASSOC",i[i.DWG_TYPE_DMDIMOBJECTCONTEXTDATA=627]="DWG_TYPE_DMDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_DWFDEFINITION=628]="DWG_TYPE_DWFDEFINITION",i[i.DWG_TYPE_DWFUNDERLAY=629]="DWG_TYPE_DWFUNDERLAY",i[i.DWG_TYPE_DYNAMICBLOCKPROXYNODE=630]="DWG_TYPE_DYNAMICBLOCKPROXYNODE",i[i.DWG_TYPE_DYNAMICBLOCKPURGEPREVENTER=631]="DWG_TYPE_DYNAMICBLOCKPURGEPREVENTER",i[i.DWG_TYPE_EVALUATION_GRAPH=632]="DWG_TYPE_EVALUATION_GRAPH",i[i.DWG_TYPE_EXTRUDEDSURFACE=633]="DWG_TYPE_EXTRUDEDSURFACE",i[i.DWG_TYPE_FCFOBJECTCONTEXTDATA=634]="DWG_TYPE_FCFOBJECTCONTEXTDATA",i[i.DWG_TYPE_FIELD=635]="DWG_TYPE_FIELD",i[i.DWG_TYPE_FIELDLIST=636]="DWG_TYPE_FIELDLIST",i[i.DWG_TYPE_FLIPPARAMETERENTITY=637]="DWG_TYPE_FLIPPARAMETERENTITY",i[i.DWG_TYPE_FLIPACTIONENTITY=638]="DWG_TYPE_FLIPACTIONENTITY",i[i.DWG_TYPE_GEODATA=639]="DWG_TYPE_GEODATA",i[i.DWG_TYPE_GEOMAPIMAGE=640]="DWG_TYPE_GEOMAPIMAGE",i[i.DWG_TYPE_GEOPOSITIONMARKER=641]="DWG_TYPE_GEOPOSITIONMARKER",i[i.DWG_TYPE_GRADIENT_BACKGROUND=642]="DWG_TYPE_GRADIENT_BACKGROUND",i[i.DWG_TYPE_GROUND_PLANE_BACKGROUND=643]="DWG_TYPE_GROUND_PLANE_BACKGROUND",i[i.DWG_TYPE_HELIX=644]="DWG_TYPE_HELIX",i[i.DWG_TYPE_IBL_BACKGROUND=645]="DWG_TYPE_IBL_BACKGROUND",i[i.DWG_TYPE_IDBUFFER=646]="DWG_TYPE_IDBUFFER",i[i.DWG_TYPE_IMAGE=647]="DWG_TYPE_IMAGE",i[i.DWG_TYPE_IMAGEDEF=648]="DWG_TYPE_IMAGEDEF",i[i.DWG_TYPE_IMAGEDEF_REACTOR=649]="DWG_TYPE_IMAGEDEF_REACTOR",i[i.DWG_TYPE_IMAGE_BACKGROUND=650]="DWG_TYPE_IMAGE_BACKGROUND",i[i.DWG_TYPE_INDEX=651]="DWG_TYPE_INDEX",i[i.DWG_TYPE_LARGE_RADIAL_DIMENSION=652]="DWG_TYPE_LARGE_RADIAL_DIMENSION",i[i.DWG_TYPE_LAYERFILTER=653]="DWG_TYPE_LAYERFILTER",i[i.DWG_TYPE_LAYER_INDEX=654]="DWG_TYPE_LAYER_INDEX",i[i.DWG_TYPE_LAYOUTPRINTCONFIG=655]="DWG_TYPE_LAYOUTPRINTCONFIG",i[i.DWG_TYPE_LEADEROBJECTCONTEXTDATA=656]="DWG_TYPE_LEADEROBJECTCONTEXTDATA",i[i.DWG_TYPE_LIGHT=657]="DWG_TYPE_LIGHT",i[i.DWG_TYPE_LIGHTLIST=658]="DWG_TYPE_LIGHTLIST",i[i.DWG_TYPE_LINEARPARAMETERENTITY=659]="DWG_TYPE_LINEARPARAMETERENTITY",i[i.DWG_TYPE_LOFTEDSURFACE=660]="DWG_TYPE_LOFTEDSURFACE",i[i.DWG_TYPE_MATERIAL=661]="DWG_TYPE_MATERIAL",i[i.DWG_TYPE_MENTALRAYRENDERSETTINGS=662]="DWG_TYPE_MENTALRAYRENDERSETTINGS",i[i.DWG_TYPE_MESH=663]="DWG_TYPE_MESH",i[i.DWG_TYPE_MLEADEROBJECTCONTEXTDATA=664]="DWG_TYPE_MLEADEROBJECTCONTEXTDATA",i[i.DWG_TYPE_MLEADERSTYLE=665]="DWG_TYPE_MLEADERSTYLE",i[i.DWG_TYPE_MOVEACTIONENTITY=666]="DWG_TYPE_MOVEACTIONENTITY",i[i.DWG_TYPE_MOTIONPATH=667]="DWG_TYPE_MOTIONPATH",i[i.DWG_TYPE_MPOLYGON=668]="DWG_TYPE_MPOLYGON",i[i.DWG_TYPE_MTEXTATTRIBUTEOBJECTCONTEXTDATA=669]="DWG_TYPE_MTEXTATTRIBUTEOBJECTCONTEXTDATA",i[i.DWG_TYPE_MTEXTOBJECTCONTEXTDATA=670]="DWG_TYPE_MTEXTOBJECTCONTEXTDATA",i[i.DWG_TYPE_MULTILEADER=671]="DWG_TYPE_MULTILEADER",i[i.DWG_TYPE_NAVISWORKSMODEL=672]="DWG_TYPE_NAVISWORKSMODEL",i[i.DWG_TYPE_NAVISWORKSMODELDEF=673]="DWG_TYPE_NAVISWORKSMODELDEF",i[i.DWG_TYPE_NPOCOLLECTION=674]="DWG_TYPE_NPOCOLLECTION",i[i.DWG_TYPE_NURBSURFACE=675]="DWG_TYPE_NURBSURFACE",i[i.DWG_TYPE_OBJECT_PTR=676]="DWG_TYPE_OBJECT_PTR",i[i.DWG_TYPE_ORDDIMOBJECTCONTEXTDATA=677]="DWG_TYPE_ORDDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_PARTIAL_VIEWING_INDEX=678]="DWG_TYPE_PARTIAL_VIEWING_INDEX",i[i.DWG_TYPE_PDFDEFINITION=679]="DWG_TYPE_PDFDEFINITION",i[i.DWG_TYPE_PDFUNDERLAY=680]="DWG_TYPE_PDFUNDERLAY",i[i.DWG_TYPE_PERSUBENTMGR=681]="DWG_TYPE_PERSUBENTMGR",i[i.DWG_TYPE_PLANESURFACE=682]="DWG_TYPE_PLANESURFACE",i[i.DWG_TYPE_PLOTSETTINGS=683]="DWG_TYPE_PLOTSETTINGS",i[i.DWG_TYPE_POINTCLOUD=684]="DWG_TYPE_POINTCLOUD",i[i.DWG_TYPE_POINTCLOUDCOLORMAP=685]="DWG_TYPE_POINTCLOUDCOLORMAP",i[i.DWG_TYPE_POINTCLOUDDEF=686]="DWG_TYPE_POINTCLOUDDEF",i[i.DWG_TYPE_POINTCLOUDDEFEX=687]="DWG_TYPE_POINTCLOUDDEFEX",i[i.DWG_TYPE_POINTCLOUDDEF_REACTOR=688]="DWG_TYPE_POINTCLOUDDEF_REACTOR",i[i.DWG_TYPE_POINTCLOUDDEF_REACTOR_EX=689]="DWG_TYPE_POINTCLOUDDEF_REACTOR_EX",i[i.DWG_TYPE_POINTCLOUDEX=690]="DWG_TYPE_POINTCLOUDEX",i[i.DWG_TYPE_POINTPARAMETERENTITY=691]="DWG_TYPE_POINTPARAMETERENTITY",i[i.DWG_TYPE_POINTPATH=692]="DWG_TYPE_POINTPATH",i[i.DWG_TYPE_POLARGRIPENTITY=693]="DWG_TYPE_POLARGRIPENTITY",i[i.DWG_TYPE_RADIMLGOBJECTCONTEXTDATA=694]="DWG_TYPE_RADIMLGOBJECTCONTEXTDATA",i[i.DWG_TYPE_RADIMOBJECTCONTEXTDATA=695]="DWG_TYPE_RADIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_RAPIDRTRENDERSETTINGS=696]="DWG_TYPE_RAPIDRTRENDERSETTINGS",i[i.DWG_TYPE_RASTERVARIABLES=697]="DWG_TYPE_RASTERVARIABLES",i[i.DWG_TYPE_RENDERENTRY=698]="DWG_TYPE_RENDERENTRY",i[i.DWG_TYPE_RENDERENVIRONMENT=699]="DWG_TYPE_RENDERENVIRONMENT",i[i.DWG_TYPE_RENDERGLOBAL=700]="DWG_TYPE_RENDERGLOBAL",i[i.DWG_TYPE_RENDERSETTINGS=701]="DWG_TYPE_RENDERSETTINGS",i[i.DWG_TYPE_REVOLVEDSURFACE=702]="DWG_TYPE_REVOLVEDSURFACE",i[i.DWG_TYPE_ROTATIONPARAMETERENTITY=703]="DWG_TYPE_ROTATIONPARAMETERENTITY",i[i.DWG_TYPE_ROTATEACTIONENTITY=704]="DWG_TYPE_ROTATEACTIONENTITY",i[i.DWG_TYPE_RTEXT=705]="DWG_TYPE_RTEXT",i[i.DWG_TYPE_SCALE=706]="DWG_TYPE_SCALE",i[i.DWG_TYPE_SCALEACTIONENTITY=707]="DWG_TYPE_SCALEACTIONENTITY",i[i.DWG_TYPE_SECTIONOBJECT=708]="DWG_TYPE_SECTIONOBJECT",i[i.DWG_TYPE_SECTIONVIEWSTYLE=709]="DWG_TYPE_SECTIONVIEWSTYLE",i[i.DWG_TYPE_SECTION_MANAGER=710]="DWG_TYPE_SECTION_MANAGER",i[i.DWG_TYPE_SECTION_SETTINGS=711]="DWG_TYPE_SECTION_SETTINGS",i[i.DWG_TYPE_SKYLIGHT_BACKGROUND=712]="DWG_TYPE_SKYLIGHT_BACKGROUND",i[i.DWG_TYPE_SOLID_BACKGROUND=713]="DWG_TYPE_SOLID_BACKGROUND",i[i.DWG_TYPE_SORTENTSTABLE=714]="DWG_TYPE_SORTENTSTABLE",i[i.DWG_TYPE_SPATIAL_FILTER=715]="DWG_TYPE_SPATIAL_FILTER",i[i.DWG_TYPE_SPATIAL_INDEX=716]="DWG_TYPE_SPATIAL_INDEX",i[i.DWG_TYPE_STRETCHACTIONENTITY=717]="DWG_TYPE_STRETCHACTIONENTITY",i[i.DWG_TYPE_SUN=718]="DWG_TYPE_SUN",i[i.DWG_TYPE_SUNSTUDY=719]="DWG_TYPE_SUNSTUDY",i[i.DWG_TYPE_SWEPTSURFACE=720]="DWG_TYPE_SWEPTSURFACE",i[i.DWG_TYPE_TABLE=721]="DWG_TYPE_TABLE",i[i.DWG_TYPE_TABLECONTENT=722]="DWG_TYPE_TABLECONTENT",i[i.DWG_TYPE_TABLEGEOMETRY=723]="DWG_TYPE_TABLEGEOMETRY",i[i.DWG_TYPE_TABLESTYLE=724]="DWG_TYPE_TABLESTYLE",i[i.DWG_TYPE_TEXTOBJECTCONTEXTDATA=725]="DWG_TYPE_TEXTOBJECTCONTEXTDATA",i[i.DWG_TYPE_TVDEVICEPROPERTIES=726]="DWG_TYPE_TVDEVICEPROPERTIES",i[i.DWG_TYPE_VISIBILITYGRIPENTITY=727]="DWG_TYPE_VISIBILITYGRIPENTITY",i[i.DWG_TYPE_VISIBILITYPARAMETERENTITY=728]="DWG_TYPE_VISIBILITYPARAMETERENTITY",i[i.DWG_TYPE_VISUALSTYLE=729]="DWG_TYPE_VISUALSTYLE",i[i.DWG_TYPE_WIPEOUT=730]="DWG_TYPE_WIPEOUT",i[i.DWG_TYPE_WIPEOUTVARIABLES=731]="DWG_TYPE_WIPEOUTVARIABLES",i[i.DWG_TYPE_XREFPANELOBJECT=732]="DWG_TYPE_XREFPANELOBJECT",i[i.DWG_TYPE_XYPARAMETERENTITY=733]="DWG_TYPE_XYPARAMETERENTITY",i[i.DWG_TYPE_BREAKDATA=734]="DWG_TYPE_BREAKDATA",i[i.DWG_TYPE_BREAKPOINTREF=735]="DWG_TYPE_BREAKPOINTREF",i[i.DWG_TYPE_FLIPGRIPENTITY=736]="DWG_TYPE_FLIPGRIPENTITY",i[i.DWG_TYPE_LINEARGRIPENTITY=737]="DWG_TYPE_LINEARGRIPENTITY",i[i.DWG_TYPE_ROTATIONGRIPENTITY=738]="DWG_TYPE_ROTATIONGRIPENTITY",i[i.DWG_TYPE_XYGRIPENTITY=739]="DWG_TYPE_XYGRIPENTITY",i[i.DWG_TYPE__3DLINE=740]="DWG_TYPE__3DLINE",i[i.DWG_TYPE_REPEAT=741]="DWG_TYPE_REPEAT",i[i.DWG_TYPE_ENDREP=742]="DWG_TYPE_ENDREP",i[i.DWG_TYPE_JUMP=743]="DWG_TYPE_JUMP",i[i.DWG_TYPE_LOAD=744]="DWG_TYPE_LOAD",i[i.DWG_TYPE_FREED=65533]="DWG_TYPE_FREED",i[i.DWG_TYPE_UNKNOWN_ENT=65534]="DWG_TYPE_UNKNOWN_ENT",i[i.DWG_TYPE_UNKNOWN_OBJ=65535]="DWG_TYPE_UNKNOWN_OBJ",i))(ne||{}),Nv=Object.fromEntries(Object.entries(ne).map(([i,e])=>[e,i])),Ms=(i=>(i[i.DWG=0]="DWG",i[i.DXF=1]="DXF",i))(Ms||{}),Er=(i=>(i[i.Line=1]="Line",i[i.CircularArc=2]="CircularArc",i[i.EllipticArc=3]="EllipticArc",i[i.Spline=4]="Spline",i))(Er||{}),Ii=(i=>(i[i.ByLayer=192]="ByLayer",i[i.ByBlock=193]="ByBlock",i[i.Entities=194]="Entities",i[i.TrueColor=195]="TrueColor",i[i.ForegroundColor=197]="ForegroundColor",i[i.None=200]="None",i))(Ii||{}),zl=192,Vl=193,vf=194,Ha=195,Yl=200;function $l(i){if(i==null)return;let e=i.method,t=i.method!=null&&e!==0?e:i.rgb>>>24&255,n=i.index;if(i.rgb!=null&&t>=zl&&t<=Yl&&(i.rgb>>>24&255)===t)return i.rgb>>0;if(t===Ii.ByLayer||n===256)return zl<<24>>0;if(t===Ii.ByBlock||n===0)return Vl<<24>>0;if(t===Ii.None)return Yl<<24>>0;if(t===Ii.TrueColor){let r=i.rgb!=null?i.rgb&16777215:void 0;if(r!=null)return(vf<<24|r)>>0}return t===Ii.ForegroundColor?(Ha<<24|7)>>0:t===Ii.Entities&&n>0&&n<256||n>0&&n<256?(Ha<<24|n&255)>>0:Vl<<24>>0}var xf="*MODEL_SPACE",Ef="*PAPER_SPACE",Qa=i=>i&&i.toUpperCase()==xf,Sf=i=>i&&i.toUpperCase().startsWith(Ef),pn=i=>i.toString(16).toUpperCase(),Sr=i=>{let e=new Array(i.length);for(let t=0;t<i.length;t++)e[t]=i[t].toString(16).toUpperCase().padStart(2,"0");return e.join("")},Mf=i=>{if(!i||i.length<98)return null;let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=a=>({x:e.getFloat64(a,!0),y:e.getFloat64(a+8,!0),z:e.getFloat64(a+16,!0)}),n=t(2),r=t(50);return[n.x,n.y,n.z,r.x,r.y,r.z].every(Number.isFinite)?{upperLeft:n,lowerRight:r}:null},ja=class{constructor(e){st(this,"libredwg"),st(this,"layers",new Map),st(this,"ltypes",new Map),st(this,"classes",[]),st(this,"unknownEntityCount"),this.libredwg=e,this.unknownEntityCount=0}prepare(e,t=!1){(t||this.layers.size==0)&&(this.layers.clear(),e.tables.LAYER.entries.forEach(n=>{this.layers.set(n.handle,n.name)})),(t||this.ltypes.size==0)&&(this.ltypes.clear(),e.tables.LTYPE.entries.forEach(n=>{this.ltypes.set(n.handle,n.name)})),this.classes=e.classes,this.unknownEntityCount=0}setClasses(e){this.classes=e}clear(){this.layers.clear(),this.ltypes.clear(),this.classes=[],this.unknownEntityCount=0}convert(e){let t=this.libredwg,n=t.dwg_object_to_entity(e),r=t.dwg_object_to_entity_tio(e);if(n&&r){let a=this.getCommonAttrs(n),l=t.dwg_object_get_fixedtype(e);if(l==ne.DWG_TYPE_3DFACE)return this.convert3dFace(r,a);if(l==ne.DWG_TYPE_3DSOLID)return this.convert3dSolid(r,a);if(l==ne.DWG_TYPE_ARC)return this.convertArc(r,a);if(l==ne.DWG_TYPE_ARCALIGNEDTEXT)return this.convertArcAlignedText(r,a);if(l==ne.DWG_TYPE_ATTDEF)return this.convertAttdef(r,a);if(l==ne.DWG_TYPE_CIRCLE)return this.convertCircle(r,a);if(l==ne.DWG_TYPE_DIMENSION_ALIGNED||l==ne.DWG_TYPE_DIMENSION_LINEAR)return this.convertAlignedDimension(r,a);if(l==ne.DWG_TYPE_DIMENSION_ANG3PT)return this.convert3PointAngularDimension(r,a);if(l==ne.DWG_TYPE_DIMENSION_ANG2LN)return this.convert2LineAngularDimension(r,a);if(l==ne.DWG_TYPE_DIMENSION_DIAMETER)return this.convertDiameterDimension(r,a);if(l==ne.DWG_TYPE_DIMENSION_ORDINATE)return this.convertOrdinateDimension(r,a);if(l==ne.DWG_TYPE_DIMENSION_RADIUS)return this.convertRadiusDimension(r,a);if(l==ne.DWG_TYPE_ELLIPSE)return this.convertEllise(r,a);if(l==ne.DWG_TYPE_HATCH)return this.convertHatch(r,a);if(l==ne.DWG_TYPE_IMAGE)return this.convertImage(r,a);if(l==ne.DWG_TYPE_INSERT)return this.convertInsert(r,a);if(l==ne.DWG_TYPE_LEADER)return this.convertLeader(r,a);if(l==ne.DWG_TYPE_LINE)return this.convertLine(r,a);if(l==ne.DWG_TYPE_LWPOLYLINE)return this.convertLWPolyline(r,a);if(l==ne.DWG_TYPE_MLINE)return this.convertMLine(r,a);if(l==ne.DWG_TYPE_MULTILEADER)return this.convertMultiLeader(r,a);if(l==ne.DWG_TYPE_MTEXT)return this.convertMText(r,a);if(l==ne.DWG_TYPE_OLE2FRAME)return this.convertOle2Frame(r,a);if(l==ne.DWG_TYPE_OLEFRAME)return this.convertOleFrame(r,a);if(l==ne.DWG_TYPE_POINT)return this.convertPoint(r,a);if(l==ne.DWG_TYPE_POLYLINE_2D)return this.convertPolyline2d(r,a,e);if(l==ne.DWG_TYPE_POLYLINE_3D)return this.convertPolyline3d(r,a,e);if(l==ne.DWG_TYPE_PROXY_ENTITY)return this.convertProxyEntity(r,a,e);if(l==ne.DWG_TYPE_RAY)return this.convertRay(r,a);if(l==ne.DWG_TYPE_SECTIONOBJECT)return this.convertSection(r,a);if(l==ne.DWG_TYPE_SHAPE)return this.convertShape(r,a);if(l==ne.DWG_TYPE_SOLID)return this.convertSolid(r,a);if(l==ne.DWG_TYPE_TRACE)return this.convertTrace(r,a);if(l==ne.DWG_TYPE_SPLINE)return this.convertSpline(r,a);if(l==ne.DWG_TYPE_TABLE)return this.convertTable(r,a);if(l==ne.DWG_TYPE_TEXT)return this.convertText(r,a);if(l==ne.DWG_TYPE_TOLERANCE)return this.convertTolerance(r,a);if(l==ne.DWG_TYPE_VIEWPORT)return this.convertViewport(r,a);if(l==ne.DWG_TYPE_WIPEOUT)return this.convertWipeout(r,a);if(l==ne.DWG_TYPE_XLINE)return this.convertXline(r,a);l===ne.DWG_TYPE_UNKNOWN_ENT&&this.unknownEntityCount++}}convert3dFace(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"corner1"),a=n.dwg_dynapi_entity_data(e,"corner2"),l=n.dwg_dynapi_entity_data(e,"corner3"),c=n.dwg_dynapi_entity_data(e,"corner4"),d=n.dwg_dynapi_entity_data(e,"invis_flags");return{type:"3DFACE",...t,corner1:r,corner2:a,corner3:l,corner4:c,flag:d}}convert3dSolid(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"version"),a=n.dwg_dynapi_entity_data(e,"acis_empty"),l=n.dwg_dynapi_entity_data(e,"acis_data"),c=n.dwg_dynapi_entity_data(e,"has_revision_guid"),d=n.dwg_dynapi_entity_data(e,"history_id"),f=n.dwg_ref_get_id(d),m={type:"3DSOLID",subclassMarker:"AcDb3dSolid",...t};if(r&&(m.version=r),m.satCache=a,l&&(m.data=l),c){let g=n.dwg_dynapi_entity_field_offset(e,"revision_guid");if(g>=0){let v=n.UTF8ToString(e+g,38);v&&(m.guid=v)}}return f&&(m.historyObjectSoftId=f),m}convertArc(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"radius"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion"),d=n.dwg_dynapi_entity_data(e,"start_angle"),f=n.dwg_dynapi_entity_data(e,"end_angle");return{type:"ARC",...t,thickness:l,center:r,radius:a,startAngle:d,endAngle:f,extrusionDirection:c}}convertArcAlignedText(e,t){let n=this.libredwg,r=(f,m=0)=>{let g=n.dwg_dynapi_entity_data(e,f);if(typeof g=="number"&&Number.isFinite(g))return g;if(typeof g=="string"&&g.trim()!==""){let v=Number(g);if(Number.isFinite(v))return v}return m},a=n.dwg_dynapi_entity_data(e,"center"),l=n.dwg_dynapi_entity_data(e,"extrusion"),c=n.dwg_dynapi_entity_data(e,"arc_handle"),d=r("xscale",1);return{type:"ARCALIGNEDTEXT",...t,text:n.dwg_dynapi_entity_data(e,"text_value")??"",textSize:r("text_size"),xScale:d>0?d:1,characterSpacing:r("char_spacing"),styleName:n.dwg_dynapi_entity_data(e,"style")??"",fontName:n.dwg_dynapi_entity_data(e,"font_name")??"",bigFontName:n.dwg_dynapi_entity_data(e,"bigfont_name")??"",offsetFromArc:r("offset_from_arc"),rightOffset:r("right_offset"),leftOffset:r("left_offset"),center:a??{x:0,y:0,z:0},radius:n.dwg_dynapi_entity_data(e,"radius")??0,startAngle:n.dwg_dynapi_entity_data(e,"start_angle")??0,endAngle:n.dwg_dynapi_entity_data(e,"end_angle")??0,extrusionDirection:l??{x:0,y:0,z:1},rawTextColor:n.dwg_dynapi_entity_data(e,"color")??256,characterSet:n.dwg_dynapi_entity_data(e,"character_set")??0,pitchAndFamily:n.dwg_dynapi_entity_data(e,"pitch_and_family")??0,isShx:(n.dwg_dynapi_entity_data(e,"is_shx")??0)!==0,isBold:(n.dwg_dynapi_entity_data(e,"is_bold")??0)!==0,isItalic:(n.dwg_dynapi_entity_data(e,"is_italic")??0)!==0,isUnderlined:(n.dwg_dynapi_entity_data(e,"is_underlined")??0)!==0,alignment:n.dwg_dynapi_entity_data(e,"alignment")??0,isReverse:(n.dwg_dynapi_entity_data(e,"is_reverse")??0)!==0,wizardFlag:n.dwg_dynapi_entity_data(e,"wizard_flag")??0,textPosition:n.dwg_dynapi_entity_data(e,"text_position")??1,textDirection:n.dwg_dynapi_entity_data(e,"text_direction")??1,arcHandle:c?n.dwg_ref_get_id(c)??"":""}}convertEmbeddedMText(e,t){let n=this.libredwg,r=n.dwg_dynapi_subclass_data(e,t,"attachment"),a=n.dwg_dynapi_subclass_data(e,t,"ins_pt"),l=n.dwg_dynapi_subclass_data(e,t,"x_axis_dir"),c=n.dwg_dynapi_subclass_data(e,t,"rect_height"),d=n.dwg_dynapi_subclass_data(e,t,"rect_width"),f=n.dwg_dynapi_subclass_data(e,t,"extents_height"),m=n.dwg_dynapi_subclass_data(e,t,"extents_width");return{insertionPoint:a,rectHeight:c,rectWidth:d,extentsHeight:f,extentsWidth:m,attachmentPoint:r,direction:l}}convertAttdef(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"default_value"),a=this.convertTextBase(e);a.text=r;let l=n.dwg_dynapi_entity_data(e,"prompt"),c=n.dwg_dynapi_entity_data(e,"tag"),d=n.dwg_dynapi_entity_data(e,"flags"),f=n.dwg_dynapi_entity_data(e,"field_length"),m=n.dwg_dynapi_entity_data(e,"lock_position_flag"),g=n.dwg_dynapi_entity_data(e,"keep_duplicate_records"),v=n.dwg_dynapi_entity_data(e,"is_really_locked"),E=n.dwg_dynapi_entity_data(e,"mtext_type"),S=n.dwg_dynapi_entity_data(e,"alignment_pt");return{type:"ATTDEF",...t,text:this.convertTextBase(e),prompt:l,tag:c,flags:d,fieldLength:f,lockPositionFlag:m>0,duplicateRecordCloningFlag:g>0,mtextFlag:E,isReallyLocked:v>0,alignmentPoint:S,annotationScale:1,attrTag:"",mtext:this.convertEmbeddedMText(e,"ATTDEF_mtext")}}convertAttrib(e,t){let n=this.libredwg,r=this.convertTextBase(e),a=n.dwg_dynapi_entity_data(e,"tag"),l=n.dwg_dynapi_entity_data(e,"flags"),c=n.dwg_dynapi_entity_data(e,"field_length"),d=n.dwg_dynapi_entity_data(e,"lock_position_flag"),f=n.dwg_dynapi_entity_data(e,"keep_duplicate_records"),m=n.dwg_dynapi_entity_data(e,"mtext_type"),g=n.dwg_dynapi_entity_data(e,"is_really_locked"),v=n.dwg_dynapi_entity_data(e,"alignment_pt");return{type:"ATTRIB",...t,text:r,tag:a,flags:l,fieldLength:c,lockPositionFlag:!!d,duplicateRecordCloningFlag:!!f,mtextFlag:m,isReallyLocked:!!g,numberOfSecondaryAttrs:0,secondaryAttrsHardId:"0",alignmentPoint:{...v,z:0},annotationScale:1,attrTag:"",mtext:this.convertEmbeddedMText(e,"ATTDEF_mtext")}}convertCircle(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"radius"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"CIRCLE",...t,thickness:l,center:r,radius:a,extrusionDirection:c}}convertAlignedDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"clone_ins_pt"),l=n.dwg_dynapi_entity_data(e,"xline1_pt"),c=n.dwg_dynapi_entity_data(e,"xline2_pt"),d=n.dwg_dynapi_entity_data(e,"ins_rotation"),f=n.dwg_dynapi_entity_data(e,"oblique_angle");return{subclassMarker:"AcDbAlignedDimension",...t,...r,insertionPoint:a,subDefinitionPoint1:l,subDefinitionPoint2:c,rotationAngle:d??0,obliqueAngle:f}}convert3PointAngularDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"xline1_pt"),l=n.dwg_dynapi_entity_data(e,"xline2_pt"),c=n.dwg_dynapi_entity_data(e,"center_pt"),d=n.dwg_dynapi_entity_data(e,"xline2end_pt");return{subclassMarker:"AcDb3PointAngularDimension",...t,...r,subDefinitionPoint1:a,subDefinitionPoint2:l,centerPoint:c,arcPoint:d}}convert2LineAngularDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"xline1start_pt"),l=n.dwg_dynapi_entity_data(e,"xline1end_pt"),c=n.dwg_dynapi_entity_data(e,"xline2start_pt"),d=n.dwg_dynapi_entity_data(e,"xline2end_pt"),f=n.dwg_dynapi_entity_data(e,"def_pt");return d&&(r.definitionPoint=d),{subclassMarker:"AcDb2LineAngularDimension",...t,...r,subDefinitionPoint1:a??l??f??d,subDefinitionPoint2:c??d??f??l,centerPoint:f??c??l??d,arcPoint:d??r.definitionPoint}}convertDiameterDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"first_arc_pt"),l=n.dwg_dynapi_entity_data(e,"leader_len");return{subclassMarker:"AcDbDiametricDimension",...t,...r,centerPoint:a,leaderLength:l}}convertOrdinateDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"feature_location_pt"),l=n.dwg_dynapi_entity_data(e,"leader_endpt");return{subclassMarker:"AcDbOrdinateDimension",...t,...r,subDefinitionPoint1:a,subDefinitionPoint2:l}}convertRadiusDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"first_arc_pt"),l=n.dwg_dynapi_entity_data(e,"leader_len");return{subclassMarker:"AcDbRadialDimension",...t,...r,centerPoint:a,leaderLength:l}}convertEllise(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"sm_axis"),l=n.dwg_dynapi_entity_data(e,"extrusion"),c=n.dwg_dynapi_entity_data(e,"axis_ratio"),d=n.dwg_dynapi_entity_data(e,"start_angle"),f=n.dwg_dynapi_entity_data(e,"end_angle");return{type:"ELLIPSE",...t,center:r,majorAxisEndPoint:a,extrusionDirection:l,axisRatio:c,startAngle:d,endAngle:f}}convertHatch(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"extrusion"),a=n.dwg_dynapi_entity_data(e,"name"),l=n.dwg_dynapi_entity_data(e,"is_solid_fill"),c=n.dwg_dynapi_entity_data(e,"is_associative"),d=n.dwg_dynapi_entity_data(e,"num_paths"),f=n.dwg_dynapi_entity_data(e,"paths"),m=n.dwg_ptr_to_hatch_path_array(f,d),g=n.dwg_dynapi_entity_data(e,"style"),v=n.dwg_dynapi_entity_data(e,"pattern_type"),E=n.dwg_dynapi_entity_data(e,"angle"),S=n.dwg_dynapi_entity_data(e,"scale_spacing"),C=n.dwg_dynapi_entity_data(e,"num_deflines"),b=n.dwg_dynapi_entity_data(e,"deflines"),A=n.dwg_ptr_to_hatch_defline_array(b,C),L=n.dwg_dynapi_entity_data(e,"pixel_size"),I=n.dwg_dynapi_entity_data(e,"num_seeds"),P=n.dwg_dynapi_entity_data(e,"seeds"),U=n.dwg_ptr_to_point2d_array(P,I),H={...t,extrusionDirection:r,patternName:a,solidFill:l?$a.SolidFill:$a.PatternFill,associativity:c?qa.Associative:qa.NonAssociative,numberOfBoundaryPaths:d,boundaryPaths:this.convertHatchBoundaryPaths(m),hatchStyle:g,patternType:v,patternAngle:E,patternScale:S,numberOfDefinitionLines:C,definitionLines:A.map(de=>({angle:de.angle,base:de.pt0,offset:de.offset,numberOfDashLengths:de.dashes.length,dashLengths:de.dashes})),pixelSize:L,numberOfSeedPoints:I,seedPoints:U};if(n.dwg_dynapi_entity_data(e,"is_gradient_fill")>0){let de=n.dwg_dynapi_entity_data(e,"gradient_name"),Re=n.dwg_dynapi_entity_data(e,"gradient_angle"),Ee=n.dwg_dynapi_entity_data(e,"gradient_shift"),Le=n.dwg_dynapi_entity_data(e,"gradient_tint"),Te=n.dwg_dynapi_entity_data(e,"single_color_gradient"),pe=n.dwg_dynapi_entity_data(e,"colors"),Se=n.dwg_ptr_to_hatch_gradient_color_array(pe,Te==1?1:2);return{type:"HATCH",...H,gradientFlag:Hl.Gradient,gradientColorFlag:Te==1?Ka.OneColor:Ka.TwoColor,gradientName:de,gradientRotation:Re,gradientDefinition:Ee,colorTint:Le,gradientColors:Se}}else return{type:"HATCH",...H}}convertHatchBoundaryPaths(e){return e.filter(n=>n.num_segs_or_paths>0).map(n=>{let r={boundaryPathTypeFlag:n.flag};if(n.flag&2)return{...r,hasBulge:n.bulges_present,isClosed:n.closed,numberOfVertices:n.num_segs_or_paths,vertices:n.polyline_paths.map(a=>({x:a.point.x,y:a.point.y,bulge:a.bulge}))};{let a=n.segs.map(l=>{if(l.curve_type==Er.Line)return{type:xr.Line,start:l.first_endpoint,end:l.second_endpoint};if(l.curve_type==Er.CircularArc)return{type:xr.Circular,center:l.center,radius:l.radius,startAngle:l.start_angle,endAngle:l.end_angle,isCCW:l.is_ccw};if(l.curve_type==Er.EllipticArc)return{type:xr.Elliptic,center:l.center,end:l.endpoint,lengthOfMinorAxis:l.minor_major_ratio,startAngle:l.start_angle,endAngle:l.end_angle,isCCW:l.is_ccw};if(l.curve_type==Er.Spline)return{type:xr.Spline,degree:l.degree,isRational:l.is_rational,isPeriodic:l.is_periodic,numberOfKnots:l.num_knots,numberOfControlPoints:l.num_control_points,knots:l.knots,controlPoints:l.control_points,numberOfFitData:l.num_fitpts,fitDatum:l.fitpts,startTangent:l.start_tangent,endTangent:l.end_tangent}}).filter(l=>l!=null);return{...r,numberOfEdges:a.length,edges:a}}})}convertImage(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"class_version"),a=n.dwg_dynapi_entity_data(e,"pt0"),l=n.dwg_dynapi_entity_data(e,"uvec"),c=n.dwg_dynapi_entity_data(e,"vvec"),d=n.dwg_dynapi_entity_data(e,"image_size"),f=n.dwg_dynapi_entity_data(e,"display_props"),m=n.dwg_dynapi_entity_data(e,"clipping"),g=n.dwg_dynapi_entity_data(e,"brightness"),v=n.dwg_dynapi_entity_data(e,"contrast"),E=n.dwg_dynapi_entity_data(e,"fade"),S=n.dwg_dynapi_entity_data(e,"clip_mode"),C=n.dwg_dynapi_entity_data(e,"clip_boundary_type"),b=n.dwg_dynapi_entity_data(e,"num_clip_verts"),A=n.dwg_dynapi_entity_data(e,"clip_verts"),L=n.dwg_ptr_to_point3d_array(A,b),I=n.dwg_dynapi_entity_data(e,"imagedef"),P=n.dwg_ref_get_id(I)??"",U=n.dwg_dynapi_entity_data(e,"imagedefreactor"),H=n.dwg_ref_get_id(U)??"";return{type:"IMAGE",...t,version:r,position:a,uPixel:l,vPixel:c,imageSize:d,imageDefHandle:P,flags:f,clipping:m,brightness:g,contrast:v,fade:E,imageDefReactorHandle:H,clippingBoundaryType:C,countBoundaryPoints:b,clippingBoundaryPath:L,clipMode:S}}convertInsert(e,t){let n=this.libredwg,r="",a=n.dwg_dynapi_entity_data(e,"block_header");if(a){let b=n.dwg_ref_get_object(a);if(b){let A=n.dwg_object_to_object_tio(b);A&&(r=n.dwg_entity_block_header_get_block(A).name)}}r||(r=n.dwg_dynapi_entity_data(e,"block_name"));let l=n.dwg_dynapi_entity_data(e,"ins_pt"),c=n.dwg_dynapi_entity_data(e,"scale"),d=n.dwg_dynapi_entity_data(e,"rotation"),f=n.dwg_dynapi_entity_data(e,"num_cols"),m=n.dwg_dynapi_entity_data(e,"num_rows"),g=n.dwg_dynapi_entity_data(e,"col_spacing"),v=n.dwg_dynapi_entity_data(e,"row_spacing"),E=n.dwg_dynapi_entity_data(e,"extrusion"),S=n.dwg_entity_insert_get_attribs(e),C=[];return S.forEach(b=>{let A=n.dwg_object_to_entity(b),L=n.dwg_object_to_entity_tio(b);if(A&&L){let I=this.getCommonAttrs(A);n.dwg_object_get_fixedtype(b)==ne.DWG_TYPE_ATTRIB&&C.push(this.convertAttrib(L,I))}}),{type:"INSERT",...t,name:r,insertionPoint:l,xScale:c?c.x:1,yScale:c?c.y:1,zScale:c?c.z:1,rotation:d,columnCount:f,rowCount:m,columnSpacing:g,rowSpacing:v,extrusionDirection:E,attribs:C}}convertLeader(e,t){let n=this.libredwg,r=n.dwg_entity_mtext_get_style_name(e),a=n.dwg_dynapi_entity_data(e,"arrowhead_type"),l=n.dwg_dynapi_entity_data(e,"path_type"),c=n.dwg_dynapi_entity_data(e,"annot_type"),d=n.dwg_dynapi_entity_data(e,"hookline_dir"),f=n.dwg_dynapi_entity_data(e,"hookline_on"),m=n.dwg_dynapi_entity_data(e,"box_height"),g=n.dwg_dynapi_entity_data(e,"box_width"),v=n.dwg_dynapi_entity_data(e,"num_points"),E=n.dwg_dynapi_entity_data(e,"points"),S=v>0?n.dwg_ptr_to_point3d_array(E,v):[],C=n.dwg_dynapi_entity_data(e,"byblock_color"),b=n.dwg_dynapi_entity_data(e,"extrusion"),A=n.dwg_dynapi_entity_data(e,"x_direction"),L=n.dwg_dynapi_entity_data(e,"inspt_offset"),I=n.dwg_dynapi_entity_data(e,"endptproj");return{type:"LEADER",...t,styleName:r,isArrowheadEnabled:a>0,isSpline:l>0,leaderCreationFlag:c,isHooklineSameDirection:d>0,isHooklineExists:f>0,textHeight:m,textWidth:g,numberOfVertices:v,vertices:S,byBlockColor:C,normal:b,horizontalDirection:A,offsetFromBlock:L,offsetFromAnnotation:I}}convertLine(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"start"),a=n.dwg_dynapi_entity_data(e,"end"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"LINE",...t,thickness:l,startPoint:r,endPoint:a,extrusionDirection:c}}convertLWPolyline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"num_points"),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"const_width"),c=n.dwg_dynapi_entity_data(e,"elevation"),d=n.dwg_dynapi_entity_data(e,"thickness"),f=n.dwg_dynapi_entity_data(e,"extrusion"),m=[],g=n.dwg_dynapi_entity_data(e,"num_points"),v=n.dwg_dynapi_entity_data(e,"points"),E=n.dwg_ptr_to_point2d_array(v,g),S=n.dwg_dynapi_entity_data(e,"num_bulges"),C=n.dwg_dynapi_entity_data(e,"bulges"),b=n.dwg_ptr_to_double_array(C,S),A=n.dwg_dynapi_entity_data(e,"num_widths")??0,L=n.dwg_dynapi_entity_data(e,"widths"),I=A>0&&L?n.dwg_ptr_to_double_array(L,A*2):[];return E.forEach((P,U)=>{let H={id:U,x:P.x,y:P.y,bulge:b.length>U?b[U]:0};U<A&&I.length>=(U+1)*2&&(H.startWidth=I[U*2],H.endWidth=I[U*2+1]),m.push(H)}),{type:"LWPOLYLINE",...t,numberOfVertices:r,flag:a,constantWidth:l,elevation:c,thickness:d,extrusionDirection:f,vertices:m}}convertMLine(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"scale"),a=n.dwg_dynapi_entity_data(e,"flags"),l=n.dwg_dynapi_entity_data(e,"justification"),c=n.dwg_dynapi_entity_data(e,"base_point"),d=n.dwg_dynapi_entity_data(e,"extrusion"),f=n.dwg_dynapi_entity_data(e,"num_lines"),m=n.dwg_dynapi_entity_data(e,"num_verts"),g=n.dwg_dynapi_entity_data(e,"verts"),v=n.dwg_ptr_to_mline_vertex_array(g,m),E=[];return v.forEach(S=>{E.push({vertex:S.vertex,vertexDirection:S.vertex_direction,miterDirection:S.miter_direction,numberOfLines:S.num_lines,lines:S.lines.map(C=>({numberOfSegmentParams:C.num_segparms,segmentParams:C.segparms,numberOfAreaFillParams:C.num_areafillparms,areaFillParams:C.areafillparms}))})}),{type:"MLINE",...t,scale:r,flags:a,justification:l,startPoint:c,extrusionDirection:d,numberOfLines:f,numberOfVertices:m,vertices:E,mlineStyle:""}}convertMultiLeader(e,t){let n=this.libredwg,r=_=>n.dwg_dynapi_entity_data(e,_),a=(_,he,fe)=>n.dwg_dynapi_subclass_data(_,he,fe),l=_=>n.dwg_ref_get_id(_),c=_=>_>0,d=_=>_!=null?$l(_):void 0,f=r("class_version"),m=l(r("mleaderstyle")),g=r("flags"),v=r("type"),E=d(r("line_color")),S=l(r("line_ltype")),C=r("line_linewt"),b=c(r("has_landing")),A=c(r("has_dogleg")),L=r("landing_dist"),I=l(r("arrow_handle")),P=r("arrow_size"),U=r("style_content"),H=l(r("text_style")),j=r("text_left"),de=r("text_right"),Re=r("text_angletype"),Ee=r("text_alignment"),Le=d(r("text_color")),Te=c(r("has_text_frame")),pe=l(r("block_style")),Se=d(r("block_color")),ie=r("block_scale"),Oe=r("block_rotation"),Pe=r("style_attachment"),be=c(r("is_annotative")),_e=c(r("is_neg_textdir")),ve=r("ipe_alignment"),Ye=r("justification"),Y=r("attach_dir"),re=r("attach_bottom"),oe=r("attach_top"),Q=r("scale_factor"),ge=r("num_arrowheads"),Ae=r("arrowheads"),He=n.dwg_dynapi_subclass_size("LEADER_ArrowHead"),Qe=[];for(let _=0;_<ge;_++){let he=Ae+_*He;Qe.push({index:a(he,"LEADER_ArrowHead","is_default"),handle:l(a(he,"LEADER_ArrowHead","arrowhead"))??""})}let rt=r("num_blocklabels"),le=r("blocklabels"),Xe=n.dwg_dynapi_subclass_size("LEADER_BlockLabel"),We=[];for(let _=0;_<rt;_++){let he=le+_*Xe;We.push({id:l(a(he,"LEADER_BlockLabel","attdef")),index:a(he,"LEADER_BlockLabel","ui_index"),width:a(he,"LEADER_BlockLabel","width"),text:a(he,"LEADER_BlockLabel","label_text")})}let Ue=e+n.dwg_dynapi_entity_field_offset(e,"ctx"),Ne=Ue+n.dwg_dynapi_subclass_field_offset("MLEADER_AnnotContext","content"),ln=a(Ue,"MLEADER_AnnotContext","scale_factor"),Dt=a(Ue,"MLEADER_AnnotContext","content_base"),_t=a(Ue,"MLEADER_AnnotContext","landing_gap"),Yt=a(Ue,"MLEADER_AnnotContext","attach_dir"),Ke=a(Ue,"MLEADER_AnnotContext","text_height"),Ut=a(Ue,"MLEADER_AnnotContext","arrow_size"),ot=a(Ue,"MLEADER_AnnotContext","text_left"),it=a(Ue,"MLEADER_AnnotContext","text_right"),xi=a(Ue,"MLEADER_AnnotContext","text_angletype"),li=a(Ue,"MLEADER_AnnotContext","text_alignment"),ci=c(a(Ue,"MLEADER_AnnotContext","has_content_txt")),Rn=c(a(Ue,"MLEADER_AnnotContext","has_content_blk")),Ei=a(Ue,"MLEADER_AnnotContext","base"),vn=a(Ue,"MLEADER_AnnotContext","base_dir"),cn=a(Ue,"MLEADER_AnnotContext","base_vert"),ke=c(a(Ue,"MLEADER_AnnotContext","is_normal_reversed")),Cn,xn,Ht,Ln,Dn,vt,Nn,dn,Xt,$t,On,xt,y,T,J,G,F,k,O,W,X;if(ci){let _=a(Ne,"MLEADER_Content_MText","alignment");_!=null&&_!==0&&(Ye=_),xn=a(Ne,"MLEADER_Content_MText","normal"),Nn=a(Ne,"MLEADER_Content_MText","location"),Ht=a(Ne,"MLEADER_Content_MText","rotation"),dn=a(Ne,"MLEADER_Content_MText","direction"),Ln=a(Ne,"MLEADER_Content_MText","width"),Dn=a(Ne,"MLEADER_Content_MText","line_spacing_factor"),vt=a(Ne,"MLEADER_Content_MText","line_spacing_style"),Cn=a(Ne,"MLEADER_Content_MText","flow"),Xt=d(a(Ne,"MLEADER_Content_MText","bg_color")),$t=a(Ne,"MLEADER_Content_MText","bg_scale"),On=a(Ne,"MLEADER_Content_MText","bg_transparency"),y=c(a(Ne,"MLEADER_Content_MText","is_bg_fill")),xt=c(a(Ne,"MLEADER_Content_MText","is_bg_mask_fill")),T=a(Ne,"MLEADER_Content_MText","col_type"),J=c(a(Ne,"MLEADER_Content_MText","is_height_auto")),G=a(Ne,"MLEADER_Content_MText","col_width"),F=a(Ne,"MLEADER_Content_MText","col_gutter"),k=c(a(Ne,"MLEADER_Content_MText","is_col_flow_reversed"));let he=a(Ne,"MLEADER_Content_MText","num_col_sizes"),fe=a(Ne,"MLEADER_Content_MText","col_sizes");he>0&&(O=n.dwg_ptr_to_double_array(fe,he)[0]),W=c(a(Ne,"MLEADER_Content_MText","word_break")),X=a(Ne,"MLEADER_Content_MText","default_text")}let V;if(Rn){let _=a(Ne,"MLEADER_Content_Block","transform");V={blockContentId:l(a(Ne,"MLEADER_Content_Block","block_table")),normal:a(Ne,"MLEADER_Content_Block","normal"),position:a(Ne,"MLEADER_Content_Block","location"),scale:a(Ne,"MLEADER_Content_Block","scale"),rotation:a(Ne,"MLEADER_Content_Block","rotation"),color:d(a(Ne,"MLEADER_Content_Block","color")),transformationMatrix:_?n.dwg_ptr_to_double_array(_,16):void 0}}let ee=a(Ue,"MLEADER_AnnotContext","num_leaders"),z=a(Ue,"MLEADER_AnnotContext","leaders"),q=n.dwg_dynapi_subclass_size("LEADER_Node"),ce=n.dwg_dynapi_subclass_size("LEADER_Line"),K=n.dwg_dynapi_subclass_size("LEADER_Break"),te=[];for(let _=0;_<ee;_++){let he=z+_*q,fe=c(a(he,"LEADER_Node","has_lastleaderlinepoint")),ze=c(a(he,"LEADER_Node","has_dogleg")),$e=a(he,"LEADER_Node","num_breaks"),Tt=a(he,"LEADER_Node","breaks"),Je=[];for(let dt=0;dt<$e;dt++){let Ve=Tt+dt*K;Je.push({start:a(Ve,"LEADER_Break","start"),end:a(Ve,"LEADER_Break","end")})}let ct=a(he,"LEADER_Node","num_lines"),Et=a(he,"LEADER_Node","lines"),St=[];for(let dt=0;dt<ct;dt++){let Ve=Et+dt*ce,ft=a(Ve,"LEADER_Line","num_points"),qt=a(Ve,"LEADER_Line","points"),Fn=ft>0?n.dwg_ptr_to_point3d_array(qt,ft):[],zt=a(Ve,"LEADER_Line","num_breaks"),we=a(Ve,"LEADER_Line","breaks"),En=[];for(let je=0;je<zt;je++){let pt=we+je*K;En.push({start:a(pt,"LEADER_Break","start"),end:a(pt,"LEADER_Break","end")})}St.push({vertices:Fn,leaderLineIndex:a(Ve,"LEADER_Line","line_index"),breaks:En.length>0?En:void 0})}te.push({lastLeaderLinePoint:fe?a(he,"LEADER_Node","lastleaderlinepoint"):void 0,lastLeaderLinePointSet:fe,doglegVector:ze?a(he,"LEADER_Node","dogleg_vector"):void 0,doglegVectorSet:ze,doglegLength:a(he,"LEADER_Node","dogleg_length"),breaks:Je.length>0?Je:void 0,leaderBranchIndex:a(he,"LEADER_Node","branch_index"),leaderLines:St})}return{type:"MULTILEADER",...t,subclassMarker:"AcDbMLeader",version:f,leaderStyleId:m,propertyOverrideFlag:g,leaderLineType:v,leaderLineColor:E,leaderLineTypeId:S,leaderLineWeight:C,landingEnabled:b,doglegEnabled:A,doglegLength:L,arrowheadId:I,arrowheadSize:P||Ut,contentType:U,textStyleId:H,textLeftAttachmentType:j||ot,textRightAttachmentType:de||it,textAngleType:Re||xi,textAlignmentType:Ee||li,textColor:Le,textFrameEnabled:Te,landingGap:_t,textAttachment:Yt,textFlowDirection:Cn,blockContentId:pe,blockContentColor:Se,blockContentScale:ie,blockContentRotation:Oe,blockContentConnectionType:Pe,annotativeScaleEnabled:be,arrowheadOverrides:Qe.length>0?Qe:void 0,blockAttributes:We.length>0?We:void 0,textDirectionNegative:_e,textAlignInIPE:ve,textAttachmentPoint:Ye,textAttachmentDirection:Y,bottomTextAttachmentDirection:re,topTextAttachmentDirection:oe,contentScale:Q||ln,contentBasePosition:Dt,normal:xn,textHeight:Ke,textRotation:Ht,textWidth:Ln,textLineSpacingFactor:Dn,textLineSpacingStyle:vt,textAnchor:Nn,textDirection:dn,textBackgroundColor:Xt,textBackgroundScaleFactor:$t,textBackgroundTransparency:On,textBackgroundColorOn:xt,textFillOn:y,textColumnType:T,textUseAutoHeight:J,textColumnWidth:G,textColumnGutterWidth:F,textColumnFlowReversed:k,textColumnHeight:O,textUseWordBreak:W,textContent:X,hasMText:ci,hasBlock:Rn,blockContent:V,planeOrigin:Ei,planeXAxisDirection:vn,planeYAxisDirection:cn,planeNormalReversed:ke,leaderSections:te.length>0?te:void 0}}convertOle2Frame(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"oleversion"),a=n.dwg_dynapi_entity_data(e,"oleclient"),l=n.dwg_dynapi_entity_data(e,"data_size"),c=n.dwg_dynapi_entity_data(e,"pt1"),d=n.dwg_dynapi_entity_data(e,"pt2"),f=n.dwg_dynapi_entity_data(e,"lock_aspect"),m=n.dwg_dynapi_entity_data(e,"type"),g=n.dwg_dynapi_entity_data(e,"mode"),v=n.dwg_entity_ole2frame_get_data(e),E=v?Sr(v):"";if(v){let S=Mf(v);S&&(c=S.upperLeft,d=S.lowerRight)}return{type:"OLE2FRAME",...t,oleVersion:r,oleClient:a,dataSize:l,leftUpPoint:c,rightDownPoint:d,lockAspect:f,oleObjectType:m,tileModeDescriptor:g,binaryData:E}}convertOleFrame(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"flag"),a=n.dwg_dynapi_entity_data(e,"mode"),l=n.dwg_dynapi_entity_data(e,"data_size"),c=n.dwg_entity_oleframe_get_data(e),d=c?Sr(c):"";return{type:"OLEFRAME",...t,flag:r,mode:a,dataSize:l,binaryData:d}}convertMText(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"text_height"),l=n.dwg_dynapi_entity_data(e,"rect_height"),c=n.dwg_dynapi_entity_data(e,"rect_width"),d=n.dwg_dynapi_entity_data(e,"extents_width"),f=n.dwg_dynapi_entity_data(e,"extents_height"),m=n.dwg_dynapi_entity_data(e,"attachment"),g=n.dwg_dynapi_entity_data(e,"flow_dir"),v=n.dwg_dynapi_entity_data(e,"text"),E=n.dwg_entity_mtext_get_style_name(e),S=n.dwg_dynapi_entity_data(e,"extrusion"),C=n.dwg_dynapi_entity_data(e,"x_axis_dir"),b=n.dwg_dynapi_entity_data(e,"linespace_style"),A=n.dwg_dynapi_entity_data(e,"linespace_factor"),L=n.dwg_dynapi_entity_data(e,"bg_fill_flag"),I=n.dwg_dynapi_entity_data(e,"bg_fill_scale"),P=n.dwg_dynapi_entity_data(e,"bg_fill_color"),U=n.dwg_dynapi_entity_data(e,"bg_fill_trans"),H=n.dwg_dynapi_entity_data(e,"column_type"),j=n.dwg_dynapi_entity_data(e,"flow_reversed"),de=n.dwg_dynapi_entity_data(e,"auto_height"),Re=n.dwg_dynapi_entity_data(e,"column_width"),Ee=n.dwg_dynapi_entity_data(e,"gutter"),Le=n.dwg_dynapi_entity_data(e,"num_column_heights"),Te=n.dwg_dynapi_entity_data(e,"column_heights"),pe=n.dwg_ptr_to_double_array(Te,Le);return{type:"MTEXT",...t,insertionPoint:r,textHeight:a,rectHeight:l,rectWidth:c,extentsHeight:f,extentsWidth:d,attachmentPoint:m,drawingDirection:g,text:v,styleName:E,extrusionDirection:S,direction:C,rotation:0,lineSpacingStyle:b,lineSpacing:A,backgroundFill:L,fillBoxScale:I,backgroundFillColor:P.rgb,backgroundFillTransparency:U,columnType:H,columnFlowReversed:j,columnAutoHeight:de,columnWidth:Re,columnGutter:Ee,columnHeightCount:Le,columnHeights:pe}}convertPoint(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"x"),a=n.dwg_dynapi_entity_data(e,"y"),l=n.dwg_dynapi_entity_data(e,"z"),c=n.dwg_dynapi_entity_data(e,"thickness"),d=n.dwg_dynapi_entity_data(e,"extrusion"),f=n.dwg_dynapi_entity_data(e,"x_ang");return{type:"POINT",...t,position:{x:r,y:a,z:l},thickness:c,extrusionDirection:d,angle:f}}convertPolyline2d(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"flag"),l=r.dwg_dynapi_entity_data(e,"curve_type"),c=r.dwg_dynapi_entity_data(e,"start_width"),d=r.dwg_dynapi_entity_data(e,"end_width"),f=r.dwg_dynapi_entity_data(e,"elevation"),m=r.dwg_dynapi_entity_data(e,"thickness"),g=r.dwg_dynapi_entity_data(e,"extrusion"),v=r.dwg_entity_polyline_2d_get_vertices(n)??[];return{type:"POLYLINE2D",...t,flag:a,smoothType:l,startWidth:c,endWidth:d,elevation:f,thickness:m,extrusionDirection:g,vertices:v.map(E=>({x:E.point.x,y:E.point.y,z:E.point.z,startWidth:E.start_width,endWidth:E.end_width,bulge:E.bulge,flag:E.flag,tangentDirection:E.tangent_dir})),meshMVertexCount:0,meshNVertexCount:0,surfaceMDensity:0,surfaceNDensity:0}}convertPolyline3d(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"flag"),l=r.dwg_dynapi_entity_data(e,"curve_type"),c=r.dwg_dynapi_entity_data(e,"start_width"),d=r.dwg_dynapi_entity_data(e,"end_width"),f=r.dwg_dynapi_entity_data(e,"extrusion"),m=r.dwg_entity_polyline_3d_get_vertices(n)??[];return{type:"POLYLINE3D",...t,flag:a,smoothType:l,startWidth:c,endWidth:d,extrusionDirection:f,vertices:m.map(g=>({x:g.point.x,y:g.point.y,z:g.point.z,flag:g.flag}))}}convertProxyEntity(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"proxy_id"),l=r.dwg_dynapi_entity_data(e,"class_id"),c=r.dwg_dynapi_entity_data(e,"data_numbits"),d=r.dwg_dynapi_entity_data(e,"version"),f=r.dwg_dynapi_entity_data(e,"from_dxf"),m=r.dwg_dynapi_entity_data(e,"num_objids"),g=r.dwg_entity_get_preview(n),v=g?.length??0,E=r.dwg_entity_proxy_entity_get_entity_data(e),S=g?Sr(g):void 0,C=E?Sr(E):void 0,b;if(m>0){let I=r.dwg_dynapi_entity_data(e,"objids");I&&(b=r.dwg_ptr_to_object_ref_array(I,m).map(U=>pn(U.absolute_ref)))}let A=this.getOriginalDxfName(l),L={type:"ACAD_PROXY_ENTITY",subclassMarker:"AcDbProxyEntity",...t,proxyEntityClassId:a||498,applicationEntityClassId:l};return A&&(L.originalDxfName=A),v>0&&(L.graphicsDataSize=v),S&&(L.graphicsData=S),c>0&&(L.entityDataSize=c),C&&(L.entityData=C),b&&b.length>0&&(L.linkedObjectIds=b),d&&(L.objectDrawingFormat=d),(f===0||f===1)&&(L.originalDataFormat=f),L}getOriginalDxfName(e){if(this.classes.length===0||e<0)return;let t=e>=500?e-500:e;if(t>=0&&t<this.classes.length)return this.classes[t].dxfName}convertRay(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"point"),a=n.dwg_dynapi_entity_data(e,"vector");return{type:"RAY",...t,firstPoint:r,unitDirection:a}}convertSection(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"state"),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"name"),c=n.dwg_dynapi_entity_data(e,"vert_dir"),d=n.dwg_dynapi_entity_data(e,"top_height"),f=n.dwg_dynapi_entity_data(e,"bottom_height"),m=n.dwg_dynapi_entity_data(e,"indicator_alpha"),g=n.dwg_dynapi_entity_data(e,"indicator_color"),v=n.dwg_dynapi_entity_data(e,"num_verts"),E=n.dwg_dynapi_entity_data(e,"verts"),S=v>0?n.dwg_ptr_to_point3d_array(E,v):[],C=n.dwg_dynapi_entity_data(e,"num_blverts"),b=n.dwg_dynapi_entity_data(e,"blverts"),A=C>0?n.dwg_ptr_to_point3d_array(b,C):[],L=n.dwg_dynapi_entity_data(e,"geometrySettingHardId"),I=n.dwg_ref_get_handle_absolute_ref(L)??0n;return{type:"SECTION",...t,state:r,flags:a,name:l,verticalDirection:c,topHeight:d,bottomHeight:f,indicatorTransparency:m,indicatorColor:g.rgb,numberOfVertices:v,vertices:S,numberOfBackLineVertices:C,backLineVertices:A,geometrySettingHardId:I}}convertShape(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"scale"),l=n.dwg_dynapi_entity_data(e,"rotation"),c=n.dwg_dynapi_entity_data(e,"width_factor"),d=n.dwg_dynapi_entity_data(e,"oblique_angle"),f=n.dwg_dynapi_entity_data(e,"thickness"),m=n.dwg_dynapi_entity_data(e,"extrusion"),g=n.dwg_dynapi_entity_data(e,"style_id"),v=n.dwg_entity_text_get_style_name(e);return{type:"SHAPE",subclassMarker:"AcDbShape",...t,thickness:f,insertionPoint:r,size:a,shapeNumber:g,styleName:v,rotation:l,xScale:c,obliqueAngle:d,extrusionDirection:m}}convertSolid(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"corner1"),a=n.dwg_dynapi_entity_data(e,"corner2"),l=n.dwg_dynapi_entity_data(e,"corner3"),c=n.dwg_dynapi_entity_data(e,"corner4"),d=n.dwg_dynapi_entity_data(e,"thickness"),f=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"SOLID",...t,corner1:r,corner2:a,corner3:l,corner4:c,thickness:d,extrusionDirection:f}}convertTrace(e,t){return{...this.convertSolid(e,t),type:"TRACE"}}convertSpline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"splineflags"),a=n.dwg_dynapi_entity_data(e,"degree"),l=n.dwg_dynapi_entity_data(e,"knot_tol"),c=n.dwg_dynapi_entity_data(e,"num_knots"),d=n.dwg_dynapi_entity_data(e,"knots"),f=n.dwg_ptr_to_double_array(d,c),m=n.dwg_dynapi_entity_data(e,"fit_tol"),g=n.dwg_dynapi_entity_data(e,"num_fit_pts"),v=n.dwg_dynapi_entity_data(e,"fit_pts"),E=n.dwg_ptr_to_point3d_array(v,g),S=n.dwg_dynapi_entity_data(e,"weighted"),C=n.dwg_dynapi_entity_data(e,"ctrl_tol"),b=n.dwg_dynapi_entity_data(e,"num_ctrl_pts"),A=n.dwg_dynapi_entity_data(e,"ctrl_pts"),L=n.dwg_ptr_to_point4d_array(A,b),I=n.dwg_dynapi_entity_data(e,"beg_tan_vec"),P=n.dwg_dynapi_entity_data(e,"end_tan_vec");return{type:"SPLINE",...t,flag:r,degree:a,numberOfKnots:c,numberOfControlPoints:b,numberOfFitPoints:g,knotTolerance:l,controlTolerance:C,fitTolerance:m,startTangent:I,endTangent:P,knots:f,weights:S?L.map(U=>U.w):void 0,controlPoints:L.map(U=>({x:U.x,y:U.y,z:U.z})),fitPoints:E}}convertTable(e,t){let n=this.libredwg,r=n.dwg_dynapi_subclass_data(e,"ldata","name"),a=n.dwg_dynapi_entity_data(e,"ins_pt"),l=n.dwg_dynapi_entity_data(e,"horiz_direction"),c=n.dwg_dynapi_entity_data(e,"flag_for_table_value"),d=n.dwg_dynapi_entity_data(e,"num_rows"),f=n.dwg_dynapi_entity_data(e,"num_cols"),m=n.dwg_dynapi_entity_data(e,"row_heights"),g=n.dwg_ptr_to_double_array(m,d),v=n.dwg_dynapi_entity_data(e,"col_widths"),E=n.dwg_ptr_to_double_array(v,f),S=n.dwg_dynapi_entity_data(e,"tablestyle"),C=n.dwg_ref_get_id(S)??"",b=n.dwg_dynapi_entity_data(e,"block_header"),A=n.dwg_ref_get_id(b)??"",L=n.dwg_dynapi_entity_data(e,"table_flag_override"),I=n.dwg_dynapi_entity_data(e,"border_color_overrides_flag"),P=n.dwg_dynapi_entity_data(e,"border_lineweight_overrides_flag"),U=n.dwg_dynapi_entity_data(e,"border_visibility_overrides_flag"),H=n.dwg_dynapi_entity_data(e,"num_cells"),j=n.dwg_dynapi_entity_data(e,"cells"),de=n.dwg_ptr_to_table_cell_array(j,H);return{type:"ACAD_TABLE",...t,name:r,startPoint:a,directionVector:l,tableValue:c,rowCount:d,columnCount:f,overrideFlag:L,borderColorOverrideFlag:I,borderLineWeightOverrideFlag:P,borderVisibilityOverrideFlag:U,rowHeightArr:g,columnWidthArr:E,tableStyleId:C,blockRecordHandle:A,cells:this.convertTableCells(de),bmpPreview:""}}convertTableCells(e){return e.map(t=>{var n,r;return{text:t.text_value,attachmentPoint:t.cell_alignment,textStyle:t.text_style?String(t.text_style):void 0,rotation:t.rotation,cellType:t.type,flagValue:t.flags,mergedValue:t.is_merged_value,autoFit:t.is_autofit_flag,topBorderVisibility:!!t.top_visibility,bottomBorderVisibility:!!t.bottom_visibility,leftBorderVisibility:!!t.left_visibility,rightBorderVisibility:!!t.right_visibility,overrideFlag:t.cell_flag_override,virtualEdgeFlag:t.virtual_edge_flag,blockTableRecordId:t.block_handle?String(t.block_handle.absolute_ref??""):void 0,blockScale:t.block_scale,blockAttrNum:((n=t.attr_defs)==null?void 0:n.length)??0,attrDefineId:(r=t.attr_defs)==null?void 0:r.map(a=>{var l;return String(((l=a.attdef)==null?void 0:l.absolute_ref)??"")}),textHeight:t.text_height??0,extendedCellFlags:t.additional_data_flag}})}convertTextBase(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"text_value"),r=t.dwg_dynapi_entity_data(e,"thickness"),a=t.dwg_dynapi_entity_data(e,"ins_pt"),l=t.dwg_dynapi_entity_data(e,"alignment_pt"),c=t.dwg_dynapi_entity_data(e,"rotation"),d=t.dwg_dynapi_entity_data(e,"height"),f=t.dwg_dynapi_entity_data(e,"width_factor"),m=t.dwg_dynapi_entity_data(e,"oblique_angle"),g=t.dwg_entity_text_get_style_name(e),v=t.dwg_dynapi_entity_data(e,"generation"),E=t.dwg_dynapi_entity_data(e,"horiz_alignment"),S=t.dwg_dynapi_entity_data(e,"vert_alignment"),C=t.dwg_dynapi_entity_data(e,"extrusion");return{text:n,thickness:r,startPoint:a,endPoint:l,textHeight:d,rotation:c,xScale:f,obliqueAngle:m,styleName:g,generationFlag:v,halign:E,valign:S,extrusionDirection:C}}convertText(e,t){return{type:"TEXT",...t,...this.convertTextBase(e)}}convertTolerance(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"text_value"),l=n.dwg_dynapi_entity_data(e,"x_direction"),c=n.dwg_dynapi_entity_data(e,"extrusion"),d=n.dwg_entity_get_dimstyle_name(e);return{type:"TOLERANCE",...t,styleName:d,insertionPoint:r,text:a,extrusionDirection:c,xAxisDirection:l}}convertViewport(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"width"),l=n.dwg_dynapi_entity_data(e,"height"),c=n.dwg_dynapi_entity_data(e,"on_off"),d=n.dwg_dynapi_entity_data(e,"VIEWCTR"),f=n.dwg_dynapi_entity_data(e,"SNAPBASE"),m=n.dwg_dynapi_entity_data(e,"SNAPUNIT"),g=n.dwg_dynapi_entity_data(e,"GRIDUNIT"),v=n.dwg_dynapi_entity_data(e,"VIEWDIR"),E=n.dwg_dynapi_entity_data(e,"view_target"),S=n.dwg_dynapi_entity_data(e,"lens_length"),C=n.dwg_dynapi_entity_data(e,"front_clip_z"),b=n.dwg_dynapi_entity_data(e,"back_clip_z"),A=n.dwg_dynapi_entity_data(e,"VIEWSIZE"),L=n.dwg_dynapi_entity_data(e,"SNAPANG"),I=n.dwg_dynapi_entity_data(e,"twist_angle"),P=n.dwg_dynapi_entity_data(e,"circle_zoom"),U=n.dwg_dynapi_entity_data(e,"num_frozen_layers"),H;if(U>0){let ln=n.dwg_dynapi_entity_data(e,"frozen_layers");ln&&(H=n.dwg_ptr_to_object_ref_ptr_array(ln,U).map(_t=>n.dwg_ref_get_id(_t)).filter(_t=>!!_t))}let j=n.dwg_dynapi_entity_data(e,"status_flag"),de=n.dwg_dynapi_entity_data(e,"clip_boundary"),Re=n.dwg_ref_get_id(de),Ee=n.dwg_dynapi_entity_data(e,"style_sheet"),Le=n.dwg_dynapi_entity_data(e,"render_mode"),Te=n.dwg_dynapi_entity_data(e,"UCSVP"),pe=n.dwg_dynapi_entity_data(e,"ucsorg"),Se=n.dwg_dynapi_entity_data(e,"ucsxdir"),ie=n.dwg_dynapi_entity_data(e,"ucsydir"),Oe=n.dwg_dynapi_entity_data(e,"named_ucs"),Pe=n.dwg_ref_get_id(Oe),be=n.dwg_dynapi_entity_data(e,"base_ucs"),_e=n.dwg_ref_get_id(be),ve=n.dwg_dynapi_entity_data(e,"UCSORTHOVIEW"),Ye=n.dwg_dynapi_entity_data(e,"ucs_elevation"),Y=n.dwg_dynapi_entity_data(e,"shadeplot_mode"),re=n.dwg_dynapi_entity_data(e,"use_default_lights"),oe=n.dwg_dynapi_entity_data(e,"default_lighting_type"),Q=n.dwg_dynapi_entity_data(e,"brightness"),ge=n.dwg_dynapi_entity_data(e,"contrast"),Ae=n.dwg_dynapi_entity_data(e,"grid_major"),He=n.dwg_dynapi_entity_data(e,"background"),Qe=n.dwg_ref_get_id(He),rt=n.dwg_dynapi_entity_data(e,"shadeplot"),le=n.dwg_ref_get_id(rt),Xe=n.dwg_dynapi_entity_data(e,"visualstyle"),We=n.dwg_ref_get_id(Xe),Ue=n.dwg_dynapi_entity_data(e,"sun"),Ne=n.dwg_ref_get_id(Ue);return{type:"VIEWPORT",...t,viewportCenter:r,width:a,height:l,status:c,viewportId:0,displayCenter:d,snapBase:f,snapSpacing:m,gridSpacing:g,viewDirection:v,targetPoint:E,perspectiveLensLength:S,frontClipZ:C,backClipZ:b,viewHeight:A,snapAngle:L,viewTwistAngle:I,circleZoomPercent:P,frozenLayerIds:H,statusBitFlags:j,clippingBoundaryId:Re,sheetName:Ee,renderMode:Le,ucsPerViewport:Te,ucsOrigin:pe,ucsXAxis:Se,ucsYAxis:ie,ucsId:Pe??"",ucsBaseId:_e??"",orthographicType:ve,elevation:Ye,shadePlotMode:Y,majorGridFrequency:Ae,backgroundId:Qe??"",shadePlotId:le??"",visualStyleId:We??"",isDefaultLighting:!!re,defaultLightingType:oe,brightness:Q,contrast:ge,sunId:Ne??""}}convertWipeout(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"class_version"),a=n.dwg_dynapi_entity_data(e,"pt0"),l=n.dwg_dynapi_entity_data(e,"uvec"),c=n.dwg_dynapi_entity_data(e,"vvec"),d=n.dwg_dynapi_entity_data(e,"image_size"),f=n.dwg_dynapi_entity_data(e,"display_props"),m=n.dwg_dynapi_entity_data(e,"clipping"),g=n.dwg_dynapi_entity_data(e,"brightness"),v=n.dwg_dynapi_entity_data(e,"contrast"),E=n.dwg_dynapi_entity_data(e,"fade"),S=n.dwg_dynapi_entity_data(e,"clip_mode"),C=n.dwg_dynapi_entity_data(e,"clip_boundary_type"),b=n.dwg_dynapi_entity_data(e,"num_clip_verts"),A=n.dwg_dynapi_entity_data(e,"clip_verts"),L=n.dwg_ptr_to_point2d_array(A,b),I=n.dwg_dynapi_entity_data(e,"imagedef"),P=n.dwg_ref_get_absref(I)??0,U=n.dwg_dynapi_entity_data(e,"imagedefreactor"),H=n.dwg_ref_get_absref(U)??0;return{type:"WIPEOUT",...t,version:r,position:a,uPixel:l,vPixel:c,imageSize:d,imageDefHandle:P,flags:f,clipping:m,brightness:g,contrast:v,fade:E,imageDefReactorHandle:H,clippingBoundaryType:C,countBoundaryPoints:b,clippingBoundaryPath:L,clipMode:S}}convertXline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"point"),a=n.dwg_dynapi_entity_data(e,"vector");return{type:"XLINE",...t,firstPoint:r,unitDirection:a}}getDimensionCommonAttrs(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"class_version"),r=t.dwg_entity_get_block_name(e,"block"),a=t.dwg_dynapi_entity_data(e,"def_pt"),l=t.dwg_dynapi_entity_data(e,"text_midpt"),c=t.dwg_dynapi_entity_data(e,"attachmentPoint"),d=t.dwg_dynapi_entity_data(e,"flag"),f=t.dwg_dynapi_entity_data(e,"lspace_factor"),m=t.dwg_dynapi_entity_data(e,"lspace_factor"),g=t.dwg_dynapi_entity_data(e,"act_measurement"),v=t.dwg_dynapi_entity_data(e,"user_text"),E=t.dwg_dynapi_entity_data(e,"text_rotation"),S=t.dwg_dynapi_entity_data(e,"ins_rotation"),C=t.dwg_dynapi_entity_data(e,"extrusion"),b=t.dwg_entity_get_dimstyle_name(e);return{type:"DIMENSION",version:n,name:r,definitionPoint:a,textPoint:l,dimensionType:d,attachmentPoint:c,textLineSpacingStyle:f,textLineSpacingFactor:m||1,measurement:g,text:v,textRotation:E,ocsRotation:S,extrusionDirection:C,styleName:b}}getCommonAttrs(e){let t=this.libredwg,n=t.dwg_object_entity_get_color_object(e),r=n.method,a=n.index,l;(r==194||(n.rgb>>>24&255)===194)&&(l=n.rgb&16777215);let c=this.getLayerName(e),d=t.dwg_object_entity_get_handle_object(e),f=t.dwg_object_entity_get_ownerhandle_object(e),m=t.dwg_object_entity_get_xdicobjhandle_object(e),g=this.getLtypeName(e),v=t.dwg_object_entity_get_line_weight(e),E=t.dwg_object_entity_get_ltype_scale(e),S=!t.dwg_object_entity_get_invisible(e),C=t.dwg_object_entity_get_xdata(e);return{handle:pn(d.value),ownerDictionaryHardId:pn(m.absolute_ref),ownerBlockRecordSoftId:pn(f.absolute_ref),layer:c,color:l,colorIndex:a,colorName:n.name,lineType:g,lineweight:v,lineTypeScale:E,isVisible:S,transparency:n.alpha,transparencyType:n.alpha_type,xdata:C}}getLayerName(e){let n=this.libredwg.dwg_object_entity_get_layer_object_ref(e);return this.layers.get(pn(n.handleref.value))??"0"}getLtypeName(e){let n=this.libredwg.dwg_object_entity_get_ltype_object_ref(e);return this.ltypes.get(pn(n.handleref.value))??""}},Ss=class{constructor(e){st(this,"libredwg"),st(this,"entityConverter"),st(this,"orphanEntitiesByBlock",null),st(this,"ownerlessOrphanIndices",null),st(this,"orphanIndexDataPtr",null),this.libredwg=e,this.entityConverter=new ja(e)}convert(e){var t;this.entityConverter.clear(),this.orphanEntitiesByBlock=null,this.ownerlessOrphanIndices=null,this.orphanIndexDataPtr=e;let n={tables:{APPID:{entries:[]},BLOCK_RECORD:{entries:[]},DIMSTYLE:{entries:[]},LAYER:{entries:[]},LTYPE:{entries:[]},STYLE:{entries:[]},VPORT:{entries:[]}},objects:{DICTIONARY:[],IMAGEDEF:[],LAYER_FILTER:[],LAYER_INDEX:[],LAYOUT:[],MLEADERSTYLE:[],SPATIAL_FILTER:[],XRECORD:[]},header:{},entities:[],classes:[]},r=this.libredwg;this.convertHeader(e,n.header),this.convertClasses(e,n.classes),this.entityConverter.setClasses(n.classes);let a=r.dwg_get_num_objects(e);for(let d=0;d<a;d++){let f=r.dwg_get_object(e,d);if(f){let m=this.safeObjectTio(f);if(m)switch(r.dwg_object_get_fixedtype(f)){case ne.DWG_TYPE_LAYER:{let v=this.convertLayer(m,f);n.tables.LAYER.entries.push(v),this.entityConverter.layers.set(v.handle,v.name)}break;case ne.DWG_TYPE_LTYPE:{let v=this.convertLineType(m,f);n.tables.LTYPE.entries.push(v),this.entityConverter.ltypes.set(v.handle,v.name)}break}}}for(let d=0;d<a;d++){let f=r.dwg_get_object(e,d);if(f){let m=this.safeObjectTio(f);if(m)switch(r.dwg_object_get_fixedtype(f)){case ne.DWG_TYPE_APPID:n.tables.APPID.entries.push(this.convertAppId(m));break;case ne.DWG_TYPE_BLOCK_HEADER:{let v=this.convertBlockRecord(m,f);n.tables.BLOCK_RECORD.entries.push(v),(Qa(v.name)||Sf(v.name))&&v.entities.forEach(E=>{n.entities.push(E),E.type==="INSERT"&&E.attribs.forEach(S=>{n.entities.push(S)})})}break;case ne.DWG_TYPE_DIMSTYLE:n.tables.DIMSTYLE.entries.push(this.convertDimStyle(m,f));break;case ne.DWG_TYPE_STYLE:n.tables.STYLE.entries.push(this.convertStyle(m,f));break;case ne.DWG_TYPE_VPORT:n.tables.VPORT.entries.push(this.convertViewport(m,f));break;case ne.DWG_TYPE_DICTIONARY:n.objects.DICTIONARY.push(this.convertDictionary(m,f));break;case ne.DWG_TYPE_IMAGEDEF:n.objects.IMAGEDEF.push(this.convertImageDef(m,f));break;case ne.DWG_TYPE_LAYERFILTER:n.objects.LAYER_FILTER.push(this.convertLayerFilter(m,f));break;case ne.DWG_TYPE_LAYER_INDEX:n.objects.LAYER_INDEX.push(this.convertLayerIndex(m,f));break;case ne.DWG_TYPE_LAYOUT:n.objects.LAYOUT.push(this.convertLayout(m,f));break;case ne.DWG_TYPE_MLEADERSTYLE:n.objects.MLEADERSTYLE.push(this.convertMLeaderStyle(m,f));break;case ne.DWG_TYPE_SPATIAL_FILTER:n.objects.SPATIAL_FILTER.push(this.convertSpatialFilter(m,f));break;case ne.DWG_TYPE_XRECORD:n.objects.XRECORD.push(this.convertXRecord(m,f));break}}}let l=n.entities.filter(d=>d.type==="VIEWPORT");l.sort((d,f)=>{let m=parseInt(d.handle,16),g=parseInt(f.handle,16);return m-g}),l.forEach((d,f)=>{d.viewportId=f+1});let c=r.dwg_bmp(e);return(t=c?.data)!=null&&t.length&&(n.thumbnailImage=c.data),n}getConversionStats(){return{unknownEntityCount:this.entityConverter.unknownEntityCount}}safeObjectTio(e){let t=this.libredwg;try{if(t.dwg_object_get_supertype(e)!=Ja.DWG_SUPERTYPE_OBJECT)return null;let n=t.dwg_object_to_object_tio(e);return n||null}catch{return null}}convertHeader(e,t){let n=this.libredwg;_f.forEach(r=>{let a=r;(r=="DIMBLK"||r=="DIMBLK1"||r=="DIMBLK2")&&(a=a+"_T");let l=n.dwg_dynapi_header_data(e,a);r=="CELTYPE"||r=="CLAYER"||r=="CLAYER"||r=="DIMSTYLE"||r=="DIMTXSTY"||r=="TEXTSTYLE"?l=l?n.dwg_ref_get_object_name(l):"":r=="DRAGVS"&&(l=l?n.dwg_ref_get_absref(l)??2:2),t[r]=l})}convertClasses(e,t){let n=this.libredwg,r=n.dwg_get_num_classes(e);for(let a=0;a<r;a++){let l=n.dwg_get_class(e,a);t.push({dxfName:l.dxfname,cppName:l.cppname,appName:l.appname,capabilitiesFlag:l.proxyflag,instanceCount:l.num_instances,wasAProxyFlag:l.s_zombie,isAnEntityFlag:l.item_class_id===498})}}convertAppId(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"name"),r=t.dwg_dynapi_entity_data(e,"flag");return{name:n,standardFlag:r}}convertBlockRecord(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_entity_block_header_get_block(e);a.name&&(r.name=a.name);let l=n.dwg_dynapi_entity_data(e,"num_owned"),c=n.dwg_dynapi_entity_data(e,"flag"),d=n.dwg_dynapi_entity_data(e,"description"),f=n.dwg_dynapi_entity_data(e,"base_pt"),m=n.dwg_dynapi_entity_data(e,"insert_units"),g=n.dwg_dynapi_entity_data(e,"explodable"),v=n.dwg_dynapi_entity_data(e,"block_scaling"),E=n.dwg_dynapi_entity_data(e,"layout"),S=n.dwg_ref_get_id(E)??"",C,b=n.dwg_entity_block_header_get_preview(e);b&&b.length>0&&(C=Sr(b));let A=this.convertEntities(t,r.handle);if(!A||A.length==0){A=[];let L=n.dwg_dynapi_entity_data(e,"entities");if(L){let I=n.dwg_ptr_to_object_ref_ptr_array(L,l),P=this.entityConverter;for(let U=0;U<l;U++){let H=n.dwg_ref_get_object(I[U]),j=P.convert(H);j&&(j.ownerBlockRecordSoftId=r.handle,A.push(j))}}}if(this.orphanIndexDataPtr!=null){let L=this.convertOrphanOwnedEntities(this.orphanIndexDataPtr,t,r.handle,Qa(r.name)===!0);if(L.length)if(A.length===0)A=L;else{let I=new Set(A.map(P=>P.handle));for(let P of L)I.has(P.handle)||A.push(P)}}return{...r,flags:c,description:d,basePoint:f,layout:S,insertionUnits:m,explodability:g,scalability:v,bmpPreview:C,entities:A}}convertEntities(e,t){let n=this.libredwg,r=this.entityConverter,a=[],l=n.get_first_owned_entity(e);for(;l;){let c=r.convert(l);c&&(c.ownerBlockRecordSoftId=t,a.push(c)),l=n.get_next_owned_entity(e,l)}return a}convertOrphanOwnedEntities(e,t,n,r){this.ensureOrphanEntityIndex(e);let l=(this.orphanEntitiesByBlock??new Map).get(t)??[],c=r&&this.ownerlessOrphanIndices?this.ownerlessOrphanIndices:[],d=l.length&&c.length?l.concat(c):l.length?l:c;if(d.length===0)return[];let f=this.libredwg,m=this.entityConverter,g=[];for(let v of d){let E=f.dwg_get_object(e,v),S=m.convert(E);S&&(S.ownerBlockRecordSoftId=n,g.push(S))}return g}ensureOrphanEntityIndex(e){if(this.orphanEntitiesByBlock)return;let t=this.libredwg,n=t.dwg_get_num_objects(e),r=new Map,a=[],l=[],c=new Map;for(let g=0;g<n;g++){let v=t.dwg_get_object(e,g);if(v){if(t.dwg_object_get_supertype(v)===Ja.DWG_SUPERTYPE_ENTITY)a.push(g),r.set(v,g);else if(t.dwg_object_get_fixedtype(v)===ne.DWG_TYPE_BLOCK_HEADER){l.push(v);let E=t.dwg_object_to_object_tio(v);E&&c.set(E,v)}}}let d=new Set;for(let g of l){let v=t.get_first_owned_entity(g),E=0;for(;v&&E++<=a.length;){let S=r.get(v);if(S===void 0||d.has(S))break;d.add(S),v=t.get_next_owned_entity(g,v)}}let f=new Map,m=[];for(let g of a){if(d.has(g))continue;let v=t.dwg_get_object(e,g),E=v?t.dwg_object_to_entity_tio(v):0,S=E?t.dwg_entity_owner(E):0,C=S?c.get(S)??0:0;if(C){let b=f.get(C);b?b.push(g):f.set(C,[g])}else m.push(g)}this.orphanEntitiesByBlock=f,this.ownerlessOrphanIndices=m}convertDimStyle(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"DIMTOL"),l=n.dwg_dynapi_entity_data(e,"DIMLIM"),c=n.dwg_dynapi_entity_data(e,"DIMTIH"),d=n.dwg_dynapi_entity_data(e,"DIMTOH"),f=n.dwg_dynapi_entity_data(e,"DIMSE1"),m=n.dwg_dynapi_entity_data(e,"DIMSE2"),g=n.dwg_dynapi_entity_data(e,"DIMALT"),v=n.dwg_dynapi_entity_data(e,"DIMTOFL"),E=n.dwg_dynapi_entity_data(e,"DIMSAH"),S=n.dwg_dynapi_entity_data(e,"DIMTIX"),C=n.dwg_dynapi_entity_data(e,"DIMSOXD"),b=n.dwg_dynapi_entity_data(e,"DIMALTD"),A=n.dwg_dynapi_entity_data(e,"DIMZIN"),L=n.dwg_dynapi_entity_data(e,"DIMSD1"),I=n.dwg_dynapi_entity_data(e,"DIMSD2"),P=n.dwg_dynapi_entity_data(e,"DIMTOLJ"),U=n.dwg_dynapi_entity_data(e,"DIMJUST"),H=n.dwg_dynapi_entity_data(e,"DIMFIT"),j=n.dwg_dynapi_entity_data(e,"DIMUPT"),de=n.dwg_dynapi_entity_data(e,"DIMTZIN"),Re=n.dwg_dynapi_entity_data(e,"DIMALTZ"),Ee=n.dwg_dynapi_entity_data(e,"DIMALTTZ"),Le=n.dwg_dynapi_entity_data(e,"DIMTAD"),Te=n.dwg_dynapi_entity_data(e,"DIMUNIT"),pe=n.dwg_dynapi_entity_data(e,"DIMAUNIT"),Se=n.dwg_dynapi_entity_data(e,"DIMDEC"),ie=n.dwg_dynapi_entity_data(e,"DIMTDEC"),Oe=n.dwg_dynapi_entity_data(e,"DIMALTU"),Pe=n.dwg_dynapi_entity_data(e,"DIMALTTD"),be=n.dwg_dynapi_entity_data(e,"DIMSCALE"),_e=n.dwg_dynapi_entity_data(e,"DIMASZ"),ve=n.dwg_dynapi_entity_data(e,"DIMEXO"),Ye=n.dwg_dynapi_entity_data(e,"DIMDLI"),Y=n.dwg_dynapi_entity_data(e,"DIMEXE"),re=n.dwg_dynapi_entity_data(e,"DIMRND"),oe=n.dwg_dynapi_entity_data(e,"DIMDLE"),Q=n.dwg_dynapi_entity_data(e,"DIMTP"),ge=n.dwg_dynapi_entity_data(e,"DIMTM"),Ae=n.dwg_dynapi_entity_data(e,"DIMFXL"),He=n.dwg_dynapi_entity_data(e,"DIMJOGANG"),Qe=n.dwg_dynapi_entity_data(e,"DIMTFILL"),rt=n.dwg_dynapi_entity_data(e,"DIMTFILLCLR"),le=n.dwg_dynapi_entity_data(e,"DIMAZIN"),Xe=n.dwg_dynapi_entity_data(e,"DIMARCSYM"),We=n.dwg_dynapi_entity_data(e,"DIMTXT"),Ue=n.dwg_dynapi_entity_data(e,"DIMCEN"),Ne=n.dwg_dynapi_entity_data(e,"DIMTSZ"),ln=n.dwg_dynapi_entity_data(e,"DIMALTF"),Dt=n.dwg_dynapi_entity_data(e,"DIMLFAC"),_t=n.dwg_dynapi_entity_data(e,"DIMTVP"),Yt=n.dwg_dynapi_entity_data(e,"DIMTFAC"),Ke=n.dwg_dynapi_entity_data(e,"DIMGAP"),Ut=n.dwg_dynapi_entity_data(e,"DIMPOST"),ot=n.dwg_dynapi_entity_data(e,"DIMAPOST"),it=n.dwg_dynapi_entity_data(e,"DIMBLK_T"),xi=n.dwg_dynapi_entity_data(e,"DIMBLK1_T"),li=n.dwg_dynapi_entity_data(e,"DIMBLK2_T"),ci=n.dwg_dynapi_entity_data(e,"DIMALTRND"),Rn=n.dwg_dynapi_entity_data(e,"DIMCLRD_N"),Ei=n.dwg_dynapi_entity_data(e,"DIMCLRE_N"),vn=n.dwg_dynapi_entity_data(e,"DIMCLRT_N"),cn=n.dwg_dynapi_entity_data(e,"DIMCLRD"),ke=n.dwg_dynapi_entity_data(e,"DIMCLRE"),Cn=n.dwg_dynapi_entity_data(e,"DIMCLRT"),xn=n.dwg_dynapi_entity_data(e,"DIMADEC"),Ht=n.dwg_dynapi_entity_data(e,"DIMFRAC"),Ln=n.dwg_dynapi_entity_data(e,"DIMLUNIT"),Dn=n.dwg_dynapi_entity_data(e,"DIMDSEP"),vt=n.dwg_dynapi_entity_data(e,"DIMTMOVE"),Nn=n.dwg_dynapi_entity_data(e,"DIMATFIT"),dn=n.dwg_dynapi_entity_data(e,"DIMFXLON"),Xt=n.dwg_dynapi_entity_data(e,"DIMTXTDIRECTION"),$t=n.dwg_dynapi_entity_data(e,"DIMALTMZF"),On=n.dwg_dynapi_entity_data(e,"DIMALTMZS"),xt=n.dwg_dynapi_entity_data(e,"DIMMZF"),y=n.dwg_dynapi_entity_data(e,"DIMMZS"),T=n.dwg_dynapi_entity_data(e,"DIMLWD"),J=n.dwg_dynapi_entity_data(e,"DIMLWE"),G=n.dwg_dynapi_entity_data(e,"DIMTXSTY"),F=n.dwg_ref_get_absref(G)??void 0,k=n.dwg_dynapi_entity_data(e,"DIMLDRBLK"),O=n.dwg_ref_get_absref(k)??void 0;return{...r,DIMPOST:Ut,DIMAPOST:ot,DIMBLK:it,DIMBLK1:xi,DIMBLK2:li,DIMSCALE:be,DIMASZ:_e,DIMEXO:ve,DIMDLI:Ye,DIMEXE:Y,DIMRND:re,DIMDLE:oe,DIMTP:Q,DIMTM:ge,DIMTXT:We,DIMCEN:Ue,DIMTSZ:Ne,DIMALTF:ln,DIMLFAC:Dt,DIMTVP:_t,DIMTFAC:Yt,DIMGAP:Ke,DIMALTRND:ci,DIMTOL:a,DIMLIM:l,DIMTIH:c,DIMTOH:d,DIMSE1:f,DIMSE2:m,DIMTAD:Le,DIMZIN:A,DIMAZIN:le,DIMALT:g,DIMALTD:b,DIMTOFL:v,DIMSAH:E,DIMTIX:S,DIMSOXD:C,DIMCLRD:cn,DIMCLRE:ke,DIMCLRT:Cn,DIMADEC:xn,DIMUNIT:Te,DIMDEC:Se,DIMTDEC:ie,DIMALTU:Oe,DIMALTTD:Pe,DIMAUNIT:pe,DIMFRAC:Ht,DIMLUNIT:Ln,DIMDSEP:String.fromCharCode(Dn),DIMTMOVE:vt,DIMJUST:U,DIMSD1:L,DIMSD2:I,DIMTOLJ:P,DIMTZIN:de,DIMALTZ:Re,DIMALTTZ:Ee,DIMFIT:H,DIMUPT:j,DIMATFIT:Nn,DIMTXSTY:F,DIMLDRBLK:O,DIMLWD:T,DIMLWE:J,DIMFXL:Ae,DIMJOGANG:He,DIMTFILL:Qe,DIMTFILLCLR:rt,DIMARCSYM:Xe,DIMCLRD_N:Rn,DIMCLRE_N:Ei,DIMCLRT_N:vn,DIMFXLON:dn,DIMTXTDIRECTION:Xt,DIMALTMZF:$t,DIMALTMZS:On,DIMMZF:xt,DIMMZS:y}}convertLayer(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"frozen"),c=n.dwg_dynapi_entity_data(e,"off"),d=n.dwg_dynapi_entity_data(e,"frozen_in_new"),f=n.dwg_dynapi_entity_data(e,"plotflockedlag"),m=n.dwg_dynapi_entity_data(e,"plotflag"),g=n.dwg_dynapi_entity_data(e,"linewt"),v=n.dwg_dynapi_entity_data(e,"color"),E=n.dwg_dynapi_entity_data(e,"ltype"),S="Continuous";if(E)try{S=n.dwg_ref_get_object_name(E)}catch{}let C=v.method,b=256,A=16777215;return C===195||(v.rgb>>>24&255)===195?b=v.rgb&255:C==194||(v.rgb>>>24&255)===194?A=v.rgb&16777215:v.index>=1&&v.index<=255&&(b=v.index),{...r,standardFlag:a,colorIndex:b,color:A,colorName:v.name,transparency:v.alpha,lineType:S,frozen:l!=0,off:c!=0,frozenInNew:d!=0,locked:f!=0,plotFlag:m,lineweight:g,plotStyleNameObjectId:"",materialObjectId:""}}convertLineType(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"description"),c=n.dwg_dynapi_entity_data(e,"numdashes"),d=n.dwg_dynapi_entity_data(e,"pattern_len"),f=n.dwg_dynapi_entity_data(e,"dashes"),m=f?n.dwg_ptr_to_ltype_dash_array(f,c):[];return{...r,description:l,standardFlag:a,numberOfLineTypes:c,totalPatternLength:d,pattern:this.convertLineTypePattern(m)}}convertLineTypePattern(e){let t=[];return e.forEach(n=>{t.push({elementLength:n.length||0,elementTypeFlag:n.shape_flag||0,shapeNumber:n.complex_shapecode,scale:n.scale,rotation:n.rotation,offsetX:n.x_offset,offsetY:n.y_offset,text:n.text})}),t}convertStyle(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"width_factor"),c=n.dwg_dynapi_entity_data(e,"oblique_angle"),d=n.dwg_dynapi_entity_data(e,"generation"),f=n.dwg_dynapi_entity_data(e,"last_height"),m=n.dwg_dynapi_entity_data(e,"font_file"),g=n.dwg_dynapi_entity_data(e,"bigfont_file");return{...r,standardFlag:a,fixedTextHeight:0,widthFactor:l,obliqueAngle:c,textGenerationFlag:d,lastHeight:f,font:m,bigFont:g}}convertViewport(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"VIEWSIZE"),c=n.dwg_dynapi_entity_data(e,"aspect_ratio"),d=n.dwg_dynapi_entity_data(e,"VIEWCTR"),f=n.dwg_dynapi_entity_data(e,"view_target"),m=n.dwg_dynapi_entity_data(e,"VIEWDIR"),g=n.dwg_dynapi_entity_data(e,"view_twist"),v=n.dwg_dynapi_entity_data(e,"lens_length"),E=n.dwg_dynapi_entity_data(e,"front_clip_z"),S=n.dwg_dynapi_entity_data(e,"back_clip_z"),C=n.dwg_dynapi_entity_data(e,"VIEWMODE"),b=n.dwg_dynapi_entity_data(e,"render_mode"),A=n.dwg_dynapi_entity_data(e,"use_default_lights")!=0,L=n.dwg_dynapi_entity_data(e,"default_lightning_type"),I=n.dwg_dynapi_entity_data(e,"brightness"),P=n.dwg_dynapi_entity_data(e,"contrast"),U=n.dwg_dynapi_entity_data(e,"ambient_color"),H=n.dwg_dynapi_entity_data(e,"lower_left"),j=n.dwg_dynapi_entity_data(e,"upper_right"),de=n.dwg_dynapi_entity_data(e,"circle_zoom"),Re=n.dwg_dynapi_entity_data(e,"UCSICON"),Ee=n.dwg_dynapi_entity_data(e,"GRIDUNIT"),Le=n.dwg_dynapi_entity_data(e,"SNAPANG"),Te=n.dwg_dynapi_entity_data(e,"SNAPBASE"),pe=n.dwg_dynapi_entity_data(e,"SNAPUNIT"),Se=n.dwg_dynapi_entity_data(e,"ucsorg"),ie=n.dwg_dynapi_entity_data(e,"ucsxdir"),Oe=n.dwg_dynapi_entity_data(e,"ucsydir"),Pe=n.dwg_dynapi_entity_data(e,"ucs_elevation"),be=n.dwg_dynapi_entity_data(e,"grid_major"),_e=n.dwg_dynapi_entity_data(e,"background"),ve=_e?n.dwg_ref_get_id(_e)??"":void 0,Ye=n.dwg_dynapi_entity_data(e,"visualstyle"),Y=Ye?n.dwg_ref_get_id(Ye)??"":void 0;return{...r,standardFlag:a,lowerLeftCorner:H,upperRightCorner:j,center:d,snapBasePoint:Te,snapSpacing:pe,gridSpacing:Ee,viewDirectionFromTarget:m,viewTarget:f,lensLength:v,frontClippingPlane:E,backClippingPlane:S,viewHeight:l,aspectRatio:c,snapRotationAngle:Le,viewTwistAngle:g,circleSides:de,frozenLayers:[],styleSheet:"",renderMode:b,viewMode:C,ucsIconSetting:Re,ucsOrigin:Se,ucsXAxis:ie,ucsYAxis:Oe,orthographicType:0,elevation:Pe,shadePlotSetting:0,majorGridLines:be,backgroundObjectId:ve,visualStyleObjectId:Y,isDefaultLightingOn:A,defaultLightingType:L,brightness:I,contrast:P,ambientColor:U.index}}getCommonTableEntryAttrs(e,t){let n=this.libredwg,r=n.dwg_object_get_tio(t),a=n.dwg_object_object_get_ownerhandle_object(r),l=n.dwg_object_get_handle_object(t);return{handle:pn(l.value),ownerHandle:pn(a.absolute_ref),name:n.dwg_dynapi_entity_data(e,"name")}}convertDictionary(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"is_hardowner"),l=n.dwg_dynapi_entity_data(e,"cloning"),c=n.dwg_dynapi_entity_data(e,"numitems"),d=n.dwg_dynapi_entity_data(e,"itemhandles"),f=n.dwg_ptr_to_object_ref_array(d,c),m=n.dwg_object_dictionary_get_texts(t),g={};return f.forEach((v,E)=>g[m[E]]=pn(v.absolute_ref)),{...r,isHardOwner:!!a,cloningFlag:l,entries:g}}convertImageDef(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"image_size"),l=n.dwg_dynapi_entity_data(e,"file_path"),c=n.dwg_dynapi_entity_data(e,"is_loaded"),d=n.dwg_dynapi_entity_data(e,"pixel_size"),f=n.dwg_dynapi_entity_data(e,"resunits");return{...r,fileName:l,size:a,sizeOfOnePixel:d,isLoaded:c,resolutionUnits:f}}convertLayerFilter(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"num_names")??0,l=n.dwg_dynapi_entity_data(e,"names"),c=l&&a>0?n.dwg_ptr_to_wchar_string_array(l,a).filter(d=>d!=null&&d!==""):[];return{...r,...c.length?{layerNames:c}:{}}}convertLayerIndex(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"last_updated"),l=n.dwg_dynapi_entity_data(e,"num_entries")??0,c=n.dwg_dynapi_entity_data(e,"entries"),d=n.dwg_dynapi_subclass_size("LAYER_entry"),f=[],m=[],g=[];if(c&&d>0)for(let v=0;v<l;v++){let E=c+v*d,S=n.dwg_dynapi_subclass_data(E,"LAYER_entry","name");f.push(S??"");let C=n.dwg_dynapi_subclass_data(E,"LAYER_entry","handle");m.push(C?n.dwg_ref_get_id(C)??"":""),g.push(n.dwg_dynapi_subclass_data(E,"LAYER_entry","numlayers")??0)}return{...r,...a!=null?{timeStamp:a}:{},...f.length?{layerNames:f}:{},...m.length?{idBufferIds:m}:{},...g.length?{idBufferEntryCounts:g}:{}}}convertLayout(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"layout_name"),l=n.dwg_dynapi_entity_data(e,"tab_order"),c=n.dwg_dynapi_entity_data(e,"layout_flags"),d=n.dwg_dynapi_entity_data(e,"INSBASE"),f=n.dwg_dynapi_entity_data(e,"LIMMIN"),m=n.dwg_dynapi_entity_data(e,"LIMMAX"),g=n.dwg_dynapi_entity_data(e,"UCSORG"),v=n.dwg_dynapi_entity_data(e,"UCSXDIR"),E=n.dwg_dynapi_entity_data(e,"UCSYDIR"),S=n.dwg_dynapi_entity_data(e,"UCSORTHOVIEW"),C=n.dwg_dynapi_entity_data(e,"EXTMIN"),b=n.dwg_dynapi_entity_data(e,"EXTMAX"),A=n.dwg_dynapi_entity_data(e,"ucs_elevation"),L=n.dwg_dynapi_entity_data(e,"block_header"),I=n.dwg_ref_get_id(L)??"",P=n.dwg_dynapi_entity_data(e,"active_viewport"),U=n.dwg_ref_get_id(P)??"",H=n.dwg_dynapi_entity_data(e,"named_ucs"),j=H?n.dwg_ref_get_id(H)??"":void 0;return{...r,layoutName:a,controlFlag:c,tabOrder:l,minLimit:f,maxLimit:m,insertionPoint:d,minExtent:C,maxExtent:b,elevation:A,ucsOrigin:g,ucsXAxis:v,ucsYAxis:E,orthographicType:S,paperSpaceTableId:I,viewportId:U,namedUcsId:j,shadePlotId:""}}convertMLeaderStyle(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=f=>n.dwg_dynapi_entity_data(e,f),l=f=>n.dwg_ref_get_id(f),c=f=>f>0,d=f=>f!=null?$l(f):void 0;return{...r,subclassMarker:"AcDbMLeaderStyle",unknown1:a("class_version"),contentType:a("content_type"),drawMLeaderOrderType:a("mleader_order"),drawLeaderOrderType:a("leader_order"),maxLeaderSegmentPoints:a("max_points"),firstSegmentAngleConstraint:a("first_seg_angle"),secondSegmentAngleConstraint:a("second_seg_angle"),leaderLineType:a("type"),leaderLineColor:d(a("line_color")),leaderLineTypeId:l(a("line_type")),leaderLineWeight:a("linewt"),landingEnabled:c(a("has_landing")),landingGap:a("landing_gap"),doglegEnabled:c(a("has_dogleg")),doglegLength:a("landing_dist"),description:a("description"),arrowheadId:l(a("arrow_head")),arrowheadSize:a("arrow_head_size"),defaultMTextContents:a("text_default"),textStyleId:l(a("text_style")),textLeftAttachmentType:a("attach_left"),textAngleType:a("text_angle_type"),textAlignmentType:a("text_align_type"),textRightAttachmentType:a("attach_right"),textColor:d(a("text_color")),textHeight:a("text_height"),textFrameEnabled:c(a("has_text_frame")),textAlignAlwaysLeft:c(a("text_always_left")),alignSpace:a("align_space"),blockContentId:l(a("block")),blockContentColor:d(a("block_color")),blockContentScale:a("block_scale"),blockContentScaleEnabled:c(a("use_block_scale")),blockContentRotation:a("block_rotation"),blockContentRotationEnabled:c(a("use_block_rotation")),blockContentConnectionType:a("block_connection"),scale:a("scale"),overwritePropertyValue:c(a("is_changed")),annotative:c(a("is_annotative")),breakGapSize:a("break_size"),textAttachmentDirection:a("attach_dir"),bottomTextAttachmentDirection:a("attach_bottom"),topTextAttachmentDirection:a("attach_top"),unknown2:c(a("text_extended"))}}convertSpatialFilter(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"origin"),l=n.dwg_dynapi_entity_data(e,"num_clip_verts"),c=n.dwg_dynapi_entity_data(e,"clip_verts"),d=n.dwg_ptr_to_point2d_array(c,l),f=n.dwg_dynapi_entity_data(e,"extrusion"),m=n.dwg_dynapi_entity_data(e,"display_boundary_on"),g=n.dwg_dynapi_entity_data(e,"front_clip_on"),v=n.dwg_dynapi_entity_data(e,"front_clip_z"),E=n.dwg_dynapi_entity_data(e,"back_clip_on"),S=n.dwg_dynapi_entity_data(e,"back_clip_z"),C=n.dwg_dynapi_entity_data(e,"transform"),b=n.dwg_ptr_to_double_array(C,12),A=n.dwg_dynapi_entity_data(e,"inverse_transform"),L=n.dwg_ptr_to_double_array(A,12);return{...r,origin:a,numberOfPointsOnClipBoundary:l,vertices:d,extrusionDirection:f,clipBoundaryVisible:!!m,frontClippingPlaneFlag:!!g,frontClippingPlaneDistance:v,backClippingPlaneFlag:!!E,backClippingPlaneDistance:S,matrix:b,invertBlockMatrix:L}}convertXRecord(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"cloning"),l=n.dwg_object_xrecord_get_xdata(e)??[],c=n.dwg_object_get_tio(t),d=c?n.dwg_object_object_get_xdicobjhandle_object(c):null,f=d&&d.absolute_ref?pn(d.absolute_ref):void 0;return{...r,...a!=null?{cloning:a}:{},...f?{extensionDictionary:f}:{},data:l}}getCommonObjectAttrs(e){let t=this.libredwg,n=t.dwg_object_get_tio(e),r=t.dwg_object_object_get_ownerhandle_object(n),a=t.dwg_object_get_handle_object(e);return{handle:pn(a.value),ownerHandle:pn(r.absolute_ref)}}},fn=class i{constructor(){st(this,"min"),st(this,"max"),st(this,"valid"),this.min={x:1/0,y:1/0},this.max={x:-1/0,y:-1/0},this.valid=!1}expandByPoint(e){return this.min.x=Math.min(this.min.x,e.x),this.min.y=Math.min(this.min.y,e.y),this.max.x=Math.max(this.max.x,e.x),this.max.y=Math.max(this.max.y,e.y),this.valid=!0,this}transform(e,t){let n=this.getCorners().map(r=>({x:r.x*e.x+t.x,y:r.y*e.y+t.y}));this.reset();for(let r of n)this.expandByPoint(r);return this}rotate(e,t){let n=Math.cos(e),r=Math.sin(e),a=this.getCorners().map(l=>{let c=l.x-t.x,d=l.y-t.y;return{x:t.x+c*n-d*r,y:t.y+c*r+d*n}});this.reset();for(let l of a)this.expandByPoint(l);return this}clone(){let e=new i;return e.min={x:this.min.x,y:this.min.y},e.max={x:this.max.x,y:this.max.y},e.valid=this.valid,e}reset(){this.min={x:1/0,y:1/0},this.max={x:-1/0,y:-1/0},this.valid=!1}getCorners(){return[{x:this.min.x,y:this.min.y},{x:this.min.x,y:this.max.y},{x:this.max.x,y:this.min.y},{x:this.max.x,y:this.max.y}]}};function bf(i,e,t,n,r){let a=t.length;if(a===0)throw new Error("points must not be empty");let l=t[0].length;if(i<0||i>1)throw new Error(`t out of bounds [0,1]: ${i}`);if(e<1)throw new Error("degree must be at least 1 (linear)");if(e>a-1)throw new Error("degree must be less than or equal to point count - 1");let c=r??new Array(a).fill(1),d=n??(()=>{let C=[];for(let b=0;b<a+e+1;b++)C.push(b);return C})();if(d.length!==a+e+1)throw new Error("bad knot vector length");let f=[e,d.length-1-e],m=d[f[0]],g=d[f[1]];i=i*(g-m)+m,i=Math.max(i,m),i=Math.min(i,g);let v=f[0];for(;v<f[1]&&!(i>=d[v]&&i<=d[v+1]);v++);let E=new Array(a);for(let C=0;C<a;C++){E[C]=new Array(l+1);for(let b=0;b<l;b++)E[C][b]=t[C][b]*c[C];E[C][l]=c[C]}for(let C=1;C<=e+1;C++)for(let b=v;b>v-e-1+C;b--){let A=d[b+e+1-C]-d[b],L=A===0?0:(i-d[b])/A;for(let I=0;I<l+1;I++)E[b][I]=(1-L)*E[b-1][I]+L*E[b][I]}let S=new Array(l);for(let C=0;C<l;C++)S[C]=Af(E[v][C]/E[v][l],-9);return S}function Af(i,e){if(isNaN(i)||!Number.isInteger(e))return NaN;let[t,n="0"]=i.toString().split("e"),r=Math.round(+`${t}e${+n-e}`),[a,l="0"]=r.toString().split("e");return+`${a}e${+l+e}`}var Es={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215,0];function vr(i,e,t){return Math.max(e,Math.min(t,i))}var ql=class Kl{constructor(){st(this,"_colorIndex"),st(this,"_color"),st(this,"_colorName"),this._colorIndex=256,this._color=null,this._colorName=null}get color(){return this._color}set color(e){e==null?this._color=null:(this._color=Math.round(vr(e,0,256*256*256-1)),this._colorIndex=this.getColorIndexByValue(this._color),this._colorName=this.getColorNameByValue(this._color))}get hexColor(){if(this._color&&this._color>0&&this._color<=16777215){let e=this._color.toString(16).toUpperCase();for(;e.length<6;)e="0"+e;return`0x${e}`}return""}get cssColor(){return`rgb(${this.red},${this.green},${this.blue})`}get red(){return this.color!=null?this.color>>16&255:null}get green(){return this.color!=null?this.color>>8&255:null}get blue(){return this.color!=null?this.color&255:null}get colorIndex(){return this._colorIndex}set colorIndex(e){e==null?this._colorIndex=null:(this._colorIndex=vr(e,0,256),this._color=Xa[e],this._colorName=this.getColorNameByValue(this._color))}get colorName(){return this._colorName}set colorName(e){if(e){let t=Es[e.toLowerCase()];t!==void 0?(this._colorName=e,this._color=t,this._colorIndex=this.getColorIndexByValue(this._color)):console.warn("Unknown color: "+e)}else this._colorName=null}get hasColorName(){return this._colorName==null}get hasColorIndex(){return this._colorIndex==null}get isByLayer(){return this.colorIndex==256}setByLayer(){return this.colorIndex=256,this}get isByBlock(){return this.colorIndex==0}setByBlock(){return this.colorIndex=0,this}setScalar(e){return this.setRGB(e,e,e),this}setRGB(e,t,n){let r=Math.round(vr(e,0,255)),a=Math.round(vr(t,0,255)),l=Math.round(vr(n,0,255));return this.color=(r<<16)+(a<<8)+l,this}setColorName(e){let t=Es[e.toLowerCase()];return t!==void 0?this.color=t:console.warn("Unknown color "+e),this}clone(){let e=new Kl;return e.colorIndex=this.colorIndex,e.color=this.color,e._colorName=this._colorName,this}copy(e){return this.colorIndex=e.colorIndex,this.color=e.color,this._colorName=e._colorName,this}equals(e){return e.color==this.color&&e.colorIndex==this.colorIndex&&e._colorName==this._colorName}toString(){return this.isByLayer?"ByLayer":this.isByBlock?"ByBlock":this.colorName?this.colorName:this.hexColor}getColorNameByValue(e){for(let[t,n]of Object.entries(Es))if(n===e)return t;return null}getColorIndexByValue(e){let t=Xa.length-1;for(let n=1;n<t;++n)if(Xa[n]===e)return n;return null}};st(ql,"NAMES",Es);var Tf=ql,hi=class i{constructor(e,t){st(this,"x"),st(this,"y"),this.x=e,this.y=t}add(e){return new i(this.x+e.x,this.y+e.y)}sub(e){return new i(this.x-e.x,this.y-e.y)}multiply(e){return new i(this.x*e,this.y*e)}length(){return Math.sqrt(this.x**2+this.y**2)}norm(){let e=this.length();return e===0?new i(0,0):new i(this.x/e,this.y/e)}};function wf(i,e,t,n=5){let r,a,l;t<0?(r=Math.atan(-t)*4,a=new hi(i.x,i.y),l=new hi(e.x,e.y)):(r=Math.atan(t)*4,a=new hi(e.x,e.y),l=new hi(i.x,i.y));let c=l.sub(a),d=c.length(),f=a.add(c.multiply(.5)),m=Math.abs(d/2/Math.tan(r/2)),g=c.norm(),v=new hi(g.x*Math.cos(Math.PI/2)-g.y*Math.sin(Math.PI/2),g.y*Math.cos(Math.PI/2)+g.x*Math.sin(Math.PI/2)),E=r<Math.PI?f.add(v.multiply(-m)):f.add(v.multiply(m)),S=Math.atan2(l.y-E.y,l.x-E.x)/Math.PI*180,C=Math.atan2(a.y-E.y,a.x-E.x)/Math.PI*180;C<S&&(C+=360);let b=l.sub(E).length(),A=Math.floor(S/n)*n+n,L=Math.ceil(C/n)*n-n,I=[];for(let P=A;P<=L;P+=n){let U=P/180*Math.PI,H=E.add(new hi(Math.cos(U)*b,Math.sin(U)*b));I.push(H)}return t<0&&I.reverse(),I}function Cf(i,e=!1){let t=[],n=i.vertices.map(r=>({x:r.x,y:r.y,bulge:r.bulge}));e&&n.push(n[0]);for(let r=0,a=n.length;r<a-1;++r){let l=n[r],c=n[r+1];t.push(l),n[r].bulge&&(t=t.concat(wf(l,c,i.vertices[r].bulge))),r===a-2&&t.push(c)}return t}var eo=class{constructor(){st(this,"blockMap",new Map)}rotate(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.y*r,y:e.x*r+e.y*n}}interpolateBSpline(e,t,n,r=25,a){let l=[],c=e.map(m=>[m.x,m.y]),d=[n[t]],f=[n[t],n[n.length-1-t]];for(let m=t+1;m<n.length-t;++m)d[d.length-1]!==n[m]&&d.push(n[m]);for(let m=1;m<d.length;++m){let g=d[m-1],v=d[m];for(let E=0;E<=r;++E){let C=(E/r*(v-g)+g-f[0])/(f[1]-f[0]);C=Math.max(0,Math.min(1,C));let b=bf(C,t,c,n,a);l.push({x:b[0],y:b[1]})}}return l}addFlipXIfApplicable(e,{bbox:t,element:n}){return"extrusionDirection"in e&&e.extrusionDirection.z===-1?{bbox:new fn().expandByPoint({x:-t.min.x,y:t.min.y}).expandByPoint({x:-t.max.x,y:t.max.y}),element:`<g transform="matrix(-1 0 0 1 0 0)">${n}</g>`}:{bbox:t,element:n}}line(e){let t=new fn().expandByPoint({x:e.startPoint.x,y:e.startPoint.y}).expandByPoint({x:e.endPoint.x,y:e.endPoint.y}),n=`<line x1="${e.startPoint.x}" y1="${e.startPoint.y}" x2="${e.endPoint.x}" y2="${e.endPoint.y}" />`;return{bbox:t,element:n}}ray(e){let n=e.firstPoint,r={x:n.x+e.unitDirection.x*1e4,y:n.y+e.unitDirection.y*1e4},a=new fn().expandByPoint(n).expandByPoint(r),l=`<line x1="${n.x}" y1="${n.y}" x2="${r.x}" y2="${r.y}" />`;return{bbox:a,element:l}}xline(e){let n={x:e.firstPoint.x-e.unitDirection.x*1e4,y:e.firstPoint.y-e.unitDirection.y*1e4},r={x:e.firstPoint.x+e.unitDirection.x*1e4,y:e.firstPoint.y+e.unitDirection.y*1e4},a=new fn().expandByPoint(n).expandByPoint(r),l=`<line x1="${n.x}" y1="${n.y}" x2="${r.x}" y2="${r.y}" />`;return{bbox:a,element:l}}extractMTextLines(e){return e.replace(/\\U\+([0-9A-Fa-f]{4})/g,(t,n)=>String.fromCharCode(parseInt(n,16))).replace(/\\P/g,`
`).replace(/\\[LOlo]/g,"").replace(/\\[Ff][^;\\]*?(?:\|[^;\\]*)*;/g,"").replace(/\\[KkCcHhWwTtAa][^;\\]*;?/g,"").replace(/\\[a-zA-Z]+;?/g,"").replace(/%%(d|p|c|%)/gi,"").replace(/\\\\/g,"\\").replace(/\\~/g,"\xA0").replace(/[{}]/g,"").split(`
`).map(t=>t.trim()).filter(t=>t.length>0)}lines(e,t,n,r,a="start"){let l=new fn().expandByPoint({x:n.x,y:n.y}).expandByPoint({x:n.x+r,y:n.y-e.length*t*1.5}),c=e.map((d,f)=>{let m=n.x,g=n.y-f*t*1.5,v=`translate(${m},${g}) scale(1,-1) translate(${-m},${-g})`;return`<text x="${m}" y="${g}" font-size="${t}" text-anchor="${a}" transform="${v}">${d}</text>`});return{bbox:l,element:c.join(`
`)}}mtext(e){let t=e.textHeight,n=e.insertionPoint,r=this.extractMTextLines(e.text),a=e.attachmentPoint,l="start";return a==Ci.BottomCenter||a==Ci.MiddleCenter||a==Ci.TopCenter?l="middle":(a==Ci.BottomRight||a==Ci.MiddleRight||a==Ci.TopRight)&&(l="end"),this.lines(r,t,n,e.extentsWidth,l)}table(e){let{rowCount:t,columnCount:n,rowHeightArr:r,columnWidthArr:a,startPoint:l,cells:c}=e,d=l.x,f=l.y,m=[];for(let b=0,A=f;b<t;b++){let L=r[b],I=d;for(let P=0;P<n;P++){let U=b*n+P,H=c[U],j=a[P];m.push({x:I,y:A,width:j,height:L,cell:H,row:b,col:P}),I+=j}A+=L}let g=m.map(({x:b,y:A,width:L,height:I,cell:P})=>{let U=[];P.topBorderVisibility&&U.push(`<line x1="${b}" y1="${A}" x2="${b+L}" y2="${A}" stroke="black" />`),P.bottomBorderVisibility&&U.push(`<line x1="${b}" y1="${A+I}" x2="${b+L}" y2="${A+I}" stroke="black" />`),P.leftBorderVisibility&&U.push(`<line x1="${b}" y1="${A}" x2="${b}" y2="${A+I}" stroke="black" />`),P.rightBorderVisibility&&U.push(`<line x1="${b+L}" y1="${A}" x2="${b+L}" y2="${A+I}" stroke="black" />`);let H=b+L/2,j=A+I/2+P.textHeight/3,de=`<text x="${H}" y="${j}" font-size="${P.textHeight}" text-anchor="middle" dominant-baseline="middle">${P.text}</text>`;return[...U,de].join(`
`)}).join(`
`),v=a.reduce((b,A)=>b+A,0),E=r.reduce((b,A)=>b+A,0),S=new fn().expandByPoint({x:d,y:f}).expandByPoint({x:d+v,y:f+E}),C=`
  <svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${E}" viewBox="${d} ${f} ${v} ${E}">
  ${g}
  </svg>
    `.trim();return{bbox:S,element:C}}text(e){let t=e.textHeight,n=e.startPoint,r=[e.text],a=e.endPoint.x-e.endPoint.x;e.halign==0&&(a=e.text.length*t+e.startPoint.x);let l="start";return e.halign==Za.CENTER?l="middle":e.halign==Za.RIGHT&&(l="end"),this.lines(r,t,n,a,l)}vertices(e,t=!1){let n=e.reduce((a,l)=>a.expandByPoint(l),new fn),r=e.reduce((a,l,c)=>(a+=c===0?"M":"L",a+=l.x+","+l.y,a),"");return t&&(r+="Z"),{bbox:n,element:`<path d="${r}" />`}}circle(e){let t=new fn().expandByPoint({x:e.center.x+e.radius,y:e.center.y+e.radius}).expandByPoint({x:e.center.x-e.radius,y:e.center.y-e.radius}),n=`<circle cx="${e.center.x}" cy="${e.center.y}" r="${e.radius}" />`;return{bbox:t,element:n}}ellipseOrArc(e,t,n,r,a,l,c){let d=Math.sqrt(n*n+r*r),f=a*d,m=-Math.atan2(-r,n),g=this.bboxEllipseOrArc(e,t,n,r,a,l,c);if(Math.abs(l-c)<1e-9||Math.abs(l-c+Math.PI*2)<1e-9){let v=`<g transform="rotate(${m/Math.PI*180} ${e}, ${t})"><ellipse cx="${e}" cy="${t}" rx="${d}" ry="${f}" /></g>`;return{bbox:g,element:v}}else{let v=this.rotate({x:Math.cos(l)*d,y:Math.sin(l)*f},m),E={x:e+v.x,y:t+v.y},S=this.rotate({x:Math.cos(c)*d,y:Math.sin(c)*f},m),C={x:e+S.x,y:t+S.y},A=(c<l?c+Math.PI*2:c)-l<Math.PI?0:1,I=`<path d="${`M ${E.x} ${E.y} A ${d} ${f} ${m/Math.PI*180} ${A} 1 ${C.x} ${C.y}`}" />`;return{bbox:g,element:I}}}bboxEllipseOrArc(e,t,n,r,a,l,c){for(;l<0;)l+=Math.PI*2;for(;c<=l;)c+=Math.PI*2;let d=[];if(Math.abs(n)<1e-12||Math.abs(r)<1e-12)for(let E=0;E<4;E++)d.push(E/2*Math.PI);else d[0]=Math.atan(-r*a/n)-Math.PI,d[1]=Math.atan(n*a/r)-Math.PI,d[2]=d[0]-Math.PI,d[3]=d[1]-Math.PI;for(let E=4;E>=0;E--){for(;d[E]<l;)d[E]+=Math.PI*2;d[E]>c&&d.splice(E,1)}d.push(l),d.push(c);let f=d.map(E=>({x:Math.cos(E),y:Math.sin(E)})),m=[[n,-r*a],[r,n*a]];return f.map(E=>({x:E.x*m[0][0]+E.y*m[0][1]+e,y:E.x*m[1][0]+E.y*m[1][1]+t})).reduce((E,S)=>(E.expandByPoint(S),E),new fn)}ellipse(e){let{bbox:t,element:n}=this.ellipseOrArc(e.center.x,e.center.y,e.majorAxisEndPoint.x,e.majorAxisEndPoint.y,e.axisRatio,e.startAngle,e.endAngle);return{bbox:t,element:n}}arc(e){let{bbox:t,element:n}=this.ellipseOrArc(e.center.x,e.center.y,e.radius,0,1,e.startAngle,e.endAngle);return{bbox:t,element:n}}dimension(e){let t=this.blockMap.get(e.name);return t?{bbox:t.bbox,element:`<use href="#${e.name}" />`}:null}insert(e){let t=this.blockMap.get(e.name);if(t){let n=e.insertionPoint,r=e.rotation*(180/Math.PI),a=`translate(${n.x},${n.y}) rotate(${r}) scale(${e.xScale},${e.yScale})`;return{bbox:t.bbox.clone().transform({x:e.xScale,y:e.yScale},{x:n.x,y:n.y}).rotate(e.rotation,n),element:`<use href="#${e.name}" transform="${a}" />`}}return null}block(e,t){let n=e.entities,{bbox:r,elements:a}=n.reduce((l,c)=>{let d=this.entityToBoundsAndElement(c);if(d){let{bbox:f,element:m}=d;f.valid&&(l.bbox.expandByPoint(f.min),l.bbox.expandByPoint(f.max));let g=this.getEntityColor(t.tables.LAYER.entries,c),v=c.type=="TEXT"||c.type=="MTEXT"?g.cssColor:"none";g.isByBlock?l.elements.push(`<g id="${c.handle}">${m}</g>`):l.elements.push(`<g id="${c.handle}" stroke="${g.cssColor}" fill="${v}">${m}</g>`)}return l},{bbox:new fn,elements:[]});return r.valid?{bbox:r,element:`<g id="${e.name}">${a.join(`
`)}</g>`}:null}entityToBoundsAndElement(e){let t=null;switch(e.type){case"ARC":t=this.arc(e);break;case"CIRCLE":t=this.circle(e);break;case"DIMENSION":t=this.dimension(e);break;case"ELLIPSE":t=this.ellipse(e);break;case"INSERT":t=this.insert(e);break;case"LINE":t=this.line(e);break;case"LWPOLYLINE":{let n=e,r=!!(n.flag&512),a=Cf(n,r);t=this.vertices(a,r);break}case"MTEXT":t=this.mtext(e);break;case"SPLINE":{let n=e;t=this.vertices(this.interpolateBSpline(n.controlPoints,n.degree,n.knots,25,n.weights));break}case"POLYLINE":break;case"RAY":t=this.ray(e);break;case"TABLE":case"ACAD_TABLE":t=this.table(e);break;case"TEXT":t=this.text(e);break;case"XLINE":t=this.xline(e);break;default:t=null;break}return t?this.addFlipXIfApplicable(e,t):null}getEntityColor(e,t){let n=new Tf;if(t.colorIndex!=null?n.colorIndex=t.colorIndex:t.colorName?n.colorName=t.colorName:t.color!=null&&(n.color=t.color),n.colorIndex==7&&(n.colorIndex=256),n.isByLayer){let r=e.find(a=>a.name===t.layer);r!=null&&(n.colorIndex=r.colorIndex)}return n.color==null&&(n.color=16777215),n}convert(e){let t=null;this.blockMap.clear();let n="";e.tables.BLOCK_RECORD.entries.forEach(l=>{if(Qa(l.name))t=l;else{let c=this.block(l,e);c&&(n+=c.element,this.blockMap.set(l.name,c))}});let r=this.block(t,e),a=r&&r.bbox.valid?{x:r.bbox.min.x,y:-r.bbox.max.y,width:r.bbox.max.x-r.bbox.min.x,height:r.bbox.max.y-r.bbox.min.y}:{x:0,y:0,width:0,height:0};return`<?xml version="1.0"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
  preserveAspectRatio="xMinYMin meet"
  viewBox="${a.x} ${a.y} ${a.width} ${a.height}"
  width="100%" height="100%"
>
  <defs>${n}</defs>
  <g stroke="#000000" stroke-width="0.1%" fill="none" transform="matrix(1,0,0,-1,0,0)">
    ${r?r.element:""}
  </g>
</svg>`}};var Zl=class Jl{constructor(e){return st(this,"wasmInstance"),st(this,"decoder"),this.wasmInstance=e,new Proxy(this,{get:(t,n,r)=>n in t?Reflect.get(t,n,r):Reflect.get(t.wasmInstance,n,r)})}dwg_read_data(e,t){if(t==Ms.DWG){let n="tmp.dwg";try{this.wasmInstance.FS.writeFile(n,new Uint8Array(e));let r=this.wasmInstance.dwg_read_file(n);if(r.error&Xl.OUTOFMEM)throw this.wasmInstance.dwg_abandon(r.data),new Error("Failed to decode DWG: out of WASM memory. Rebuild with pnpm build:wasm (INITIAL_MEMORY=1GB) or use a smaller file.");return r.error!=0&&console.warn("Open dwg file with error code:",r.error),r.data}finally{this.wasmInstance.FS.analyzePath(n,!1).exists&&this.wasmInstance.FS.unlink(n)}}}dwg_write_dxf(e){let t="tmp.dwg",n="tmp.dxf";try{this.wasmInstance.FS.writeFile(t,new Uint8Array(e));let r=this.wasmInstance.dwg_write_dxf(t,n);return r!=0?(console.log("Convert dwg to dxf with error code: ",r),null):this.wasmInstance.FS.readFile(n)}finally{this.wasmInstance.FS.analyzePath(t,!1).exists&&this.wasmInstance.FS.unlink(t),this.wasmInstance.FS.analyzePath(n,!1).exists&&this.wasmInstance.FS.unlink(n)}}dwg_get_version_type(e){let t=this.wasmInstance.dwg_get_version_type(e);return yf[t]}dwg_get_codepage(e){return this.wasmInstance.dwg_get_codepage(e)}dwg_bmp(e){return this.wasmInstance.dwg_bmp(e)}dwg_get_num_classes(e){return this.wasmInstance.dwg_get_num_classes(e)}dwg_get_class(e,t){return this.wasmInstance.dwg_get_class(e,t)}convert(e){let t=this.dwg_get_codepage(e),n=Gl(t);return this.decoder=new TextDecoder(n),new Ss(this).convert(e)}convertEx(e){let t=this.dwg_get_codepage(e),n=Gl(t);this.decoder=new TextDecoder(n);let r=new Ss(this);return{database:r.convert(e),stats:r.getConversionStats()}}dwg_to_svg(e){return new eo().convert(e)}dwg_free(e){if(e)try{this.wasmInstance.dwg_free(e)}catch{try{this.wasmInstance.dwg_abandon(e)}catch{}}}dwg_free_object(e){this.wasmInstance.dwg_free_object(e)}dwg_ref_object(e,t){return this.wasmInstance.dwg_ref_object(e,t)}dwg_ref_object_silent(e,t){return this.wasmInstance.dwg_ref_object_silent(e,t)}dwg_ref_object_relative(e,t,n){return this.wasmInstance.dwg_ref_object_relative(e,t,n)}dwg_resolve_handle(e,t){return this.wasmInstance.dwg_resolve_handle(e,t)}dwg_resolve_handle_silent(e,t){return this.wasmInstance.dwg_resolve_handle_silent(e,t)}dwg_resolve_handleref(e,t){return this.wasmInstance.dwg_resolve_handleref(e,t)}dwg_ref_get_absref(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_absref(e);return t===0?null:t}dwg_ref_get_handle_value(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_handle_value(e);return t===0n?null:t}dwg_ref_get_handle_absolute_ref(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_handle_absolute_ref(e);return t===0n?null:t}dwg_obj_get_handle_value(e){if(!e)return null;let t=this.wasmInstance.dwg_obj_get_handle_value(e);return t===0n?null:t}dwg_ref_get_id(e){let t=this.dwg_ref_get_absref(e);return t?.toString(16).toUpperCase()}dwg_ref_get_object_name(e){let t=this.wasmInstance,n=t.dwg_ref_get_object(e),r=t.dwg_object_to_object_tio(n);return this.dwg_dynapi_entity_data(r,"name")}dwg_obj_obj_to_object(e){return this.wasmInstance.dwg_obj_obj_to_object(e)}dwg_obj_generic_to_object(e){return this.wasmInstance.dwg_obj_generic_to_object(e)}dwg_object_to_object(e){return this.wasmInstance.dwg_object_to_object(e)}dwg_object_to_object_tio(e){return this.wasmInstance.dwg_object_to_object_tio(e)}dwg_object_to_entity(e){return this.wasmInstance.dwg_object_to_entity(e)}dwg_object_to_entity_tio(e){return this.wasmInstance.dwg_object_to_entity_tio(e)}dwg_getall_entities_in_model_space(e){let t=this.wasmInstance,n=t.dwg_model_space_object(e),r=[],a=t.get_first_owned_entity(n);for(;a;)r.push(a),a=t.get_next_owned_entity(n,a);return r}dwg_getall_object_by_type(e,t){let n=this.wasmInstance,r=n.dwg_get_num_objects(e),a=[];for(let l=0;l<r;l++){let c=n.dwg_get_object(e,l),d=n.dwg_object_to_object_tio(c);d&&n.dwg_object_get_fixedtype(c)==t&&a.push(d)}return a}dwg_getall_entity_by_type(e,t){let n=this.wasmInstance,r=n.dwg_get_num_objects(e),a=[];for(let l=0;l<r;l++){let c=n.dwg_get_object(e,l),d=n.dwg_object_to_entity_tio(c);d&&n.dwg_object_get_fixedtype(c)==t&&a.push(d)}return a}dwg_getall_LAYER(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_LAYER)}dwg_getall_LTYPE(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_LTYPE)}dwg_getall_STYLE(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_STYLE)}dwg_getall_DIMSTYLE(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_DIMSTYLE)}dwg_getall_VPORT(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_VPORT)}dwg_getall_LAYOUT(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_LAYOUT)}dwg_getall_BLOCK(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_BLOCK)}dwg_getall_BLOCK_HEADER(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_BLOCK_HEADER)}dwg_getall_IMAGEDEF(e){return this.dwg_getall_object_by_type(e,ne.DWG_TYPE_IMAGEDEF)}dwg_getall_VERTEX_2D(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_VERTEX_2D)}dwg_getall_VERTEX_3D(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_VERTEX_3D)}dwg_getall_POLYLINE_2D(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_POLYLINE_2D)}dwg_getall_POLYLINE_3D(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_POLYLINE_3D)}dwg_getall_IMAGE(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_IMAGE)}dwg_getall_LWPOLYLINE(e){return this.dwg_getall_entity_by_type(e,ne.DWG_TYPE_LWPOLYLINE)}dwg_ptr_to_object_ref_array(e,t){return this.wasmInstance.dwg_ptr_to_object_ref_array(e,t)}dwg_ptr_to_object_ref_ptr_array(e,t){return this.wasmInstance.dwg_ptr_to_object_ref_ptr_array(e,t)}dwg_ptr_to_wchar_string_array(e,t){return this.wasmInstance.dwg_ptr_to_wchar_string_array(e,t)}dwg_ptr_to_unsigned_char_array(e,t){return this.wasmInstance.dwg_ptr_to_unsigned_char_array(e,t)}dwg_ptr_to_signed_char_array(e,t){return this.wasmInstance.dwg_ptr_to_signed_char_array(e,t)}dwg_ptr_to_uint16_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint16_t_array(e,t)}dwg_ptr_to_int16_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int16_t_array(e,t)}dwg_ptr_to_uint32_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint32_t_array(e,t)}dwg_ptr_to_int32_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int32_t_array(e,t)}dwg_ptr_to_uint64_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint64_t_array(e,t)}dwg_ptr_to_int64_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int64_t_array(e,t)}dwg_ptr_to_double_array(e,t){return this.wasmInstance.dwg_ptr_to_double_array(e,t)}dwg_ptr_to_point2d_array(e,t){return this.wasmInstance.dwg_ptr_to_point2d_array(e,t)}dwg_ptr_to_point3d_array(e,t){return this.wasmInstance.dwg_ptr_to_point3d_array(e,t)}dwg_ptr_to_point4d_array(e,t){return this.wasmInstance.dwg_ptr_to_point4d_array(e,t)}dwg_ptr_to_ltype_dash_array(e,t){return this.wasmInstance.dwg_ptr_to_ltype_dash_array(e,t)}dwg_ptr_to_table_cell_array(e,t){return this.wasmInstance.dwg_ptr_to_table_cell_array(e,t)}dwg_ptr_to_hatch_defline_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_defline_array(e,t)}dwg_ptr_to_hatch_path_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_path_array(e,t)}dwg_ptr_to_hatch_gradient_color_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_gradient_color_array(e,t)}dwg_ptr_to_mline_vertex_array(e,t){return this.wasmInstance.dwg_ptr_to_mline_vertex_array(e,t)}dwg_dynapi_entity_value(e,t){let n=this.wasmInstance.dwg_dynapi_entity_value(e,t);return n.bin&&this.decoder&&(n.data=this.decoder.decode(n.bin)),typeof n.data=="string"&&(n.data=Wl(n.data)),n}dwg_dynapi_entity_data(e,t){return this.dwg_dynapi_entity_value(e,t).data}dwg_dynapi_header_value(e,t){return this.wasmInstance.dwg_dynapi_header_value(e,t)}dwg_dynapi_header_data(e,t){return this.dwg_dynapi_header_value(e,t).data}dwg_dynapi_common_value(e,t){return this.wasmInstance.dwg_dynapi_common_value(e,t)}dwg_dynapi_common_data(e,t){return this.dwg_dynapi_common_value(e,t).data}dwg_dynapi_subclass_value(e,t,n){let r=this.wasmInstance.dwg_dynapi_subclass_value(e,t,n);return r.bin&&this.decoder&&(r.data=this.decoder.decode(r.bin)),typeof r.data=="string"&&(r.data=Wl(r.data)),r}dwg_dynapi_subclass_data(e,t,n){return this.dwg_dynapi_subclass_value(e,t,n).data}dwg_dynapi_subclass_size(e){return this.wasmInstance.dwg_dynapi_subclass_size(e)}dwg_dynapi_entity_field_offset(e,t){return this.wasmInstance.dwg_dynapi_entity_field_offset(e,t)}dwg_dynapi_subclass_field_offset(e,t){return this.wasmInstance.dwg_dynapi_subclass_field_offset(e,t)}dwg_object_get_handle_object(e){return this.wasmInstance.dwg_object_get_handle_object(e)}dwg_object_object_get_handle_object(e){return this.wasmInstance.dwg_object_object_get_handle_object(e)}dwg_object_object_get_ownerhandle_object(e){return this.wasmInstance.dwg_object_object_get_ownerhandle_object(e)}dwg_object_entity_get_handle_object(e){return this.wasmInstance.dwg_object_entity_get_handle_object(e)}dwg_object_entity_get_ownerhandle_object(e){return this.wasmInstance.dwg_object_entity_get_ownerhandle_object(e)}dwg_object_entity_get_xdicobjhandle_object(e){return this.wasmInstance.dwg_object_entity_get_xdicobjhandle_object(e)}dwg_object_entity_get_layer_object_ref(e){return this.wasmInstance.dwg_object_entity_get_layer_object_ref(e)}dwg_object_entity_get_ltype_object_ref(e){return this.wasmInstance.dwg_object_entity_get_ltype_object_ref(e)}dwg_object_entity_get_color_object(e){return this.wasmInstance.dwg_object_entity_get_color_object(e)}dwg_object_entity_get_xdata(e){return this.wasmInstance.dwg_object_entity_get_xdata(e)}dwg_object_object_get_xdicobjhandle_object(e){return this.wasmInstance.dwg_object_object_get_xdicobjhandle_object(e)}dwg_object_xrecord_get_xdata(e){return this.wasmInstance.dwg_object_xrecord_get_xdata(e)??[]}dwg_entity_owner(e){return this.wasmInstance.dwg_entity_owner(e)}dwg_entity_get_block_name(e,t){let n=this.wasmInstance,r=this.dwg_dynapi_entity_data(e,t),a=n.dwg_ref_get_object(r),l=n.dwg_object_to_object_tio(a);return this.dwg_entity_block_header_get_block(l).name}dwg_entity_get_dimstyle_name(e,t="dimstyle"){let n=this.wasmInstance,r=this.dwg_dynapi_entity_data(e,t),a=n.dwg_ref_get_object(r),l=n.dwg_object_to_object_tio(a);return this.dwg_dynapi_entity_data(l,"name")}dwg_entity_block_header_get_block(e){let t=this.wasmInstance,n=this.dwg_dynapi_entity_data(e,"block_entity"),r=t.dwg_ref_get_object(n),a=t.dwg_object_to_entity_tio(r),l=this.dwg_dynapi_entity_data(a,"name"),c=this.dwg_dynapi_entity_data(a,"base_pt");return{name:l,base_pt:c}}dwg_entity_block_header_get_preview(e){let t=this.wasmInstance;if(typeof t.dwg_entity_block_header_get_preview!="function")return null;let n=t.dwg_entity_block_header_get_preview(e);return n?.data??null}dwg_entity_get_preview(e){let t=this.wasmInstance;if(typeof t.dwg_entity_get_preview!="function")return null;let n=t.dwg_entity_get_preview(e);return n?.data??null}dwg_entity_proxy_entity_get_entity_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_proxy_entity_get_entity_data!="function")return null;let n=t.dwg_entity_proxy_entity_get_entity_data(e);return n?.data??null}dwg_entity_ole2frame_get_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_ole2frame_get_data!="function")return null;let n=t.dwg_entity_ole2frame_get_data(e);return n?.data??null}dwg_entity_oleframe_get_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_oleframe_get_data!="function")return null;let n=t.dwg_entity_oleframe_get_data(e);return n?.data??null}get_first_owned_entity(e){return this.wasmInstance.get_first_owned_entity(e)}get_next_owned_entity(e,t){return this.wasmInstance.get_next_owned_entity(e,t)}dwg_entity_mtext_get_style_name(e){let t=this.wasmInstance,n=this.dwg_dynapi_entity_data(e,"style"),r=t.dwg_ref_get_object(n),a=t.dwg_object_to_object_tio(r);return this.dwg_dynapi_entity_data(a,"name")}dwg_entity_text_get_style_name(e){return this.dwg_entity_mtext_get_style_name(e)}dwg_entity_polyline_2d_get_numpoints(e){return this.wasmInstance.dwg_entity_polyline_2d_get_numpoints(e).data}dwg_entity_polyline_2d_get_points(e){return this.wasmInstance.dwg_entity_polyline_2d_get_points(e).data}dwg_entity_polyline_2d_get_vertices(e){return this.wasmInstance.dwg_entity_polyline_2d_get_vertices(e).data}dwg_entity_polyline_3d_get_numpoints(e){return this.wasmInstance.dwg_entity_polyline_3d_get_numpoints(e).data}dwg_entity_polyline_3d_get_points(e){return this.wasmInstance.dwg_entity_polyline_3d_get_points(e).data}dwg_entity_polyline_3d_get_vertices(e){return this.wasmInstance.dwg_entity_polyline_3d_get_vertices(e).data}dwg_entity_insert_get_attribs(e){return this.wasmInstance.dwg_entity_insert_get_attribs(e).data}dwg_object_dictionary_get_texts(e){return this.wasmInstance.dwg_object_dictionary_get_texts(e).data}static createByWasmInstance(e){return this.instance==null?new Jl(e):this.instance}static async create(e){let t=e==null?await Zi():await Zi({locateFile:n=>`${e}/${n}`});return this.createByWasmInstance(t)}};st(Zl,"instance");var Ql=Zl;var Ct,Mr,ht,yt,br,Sn,Pi,Gn,Bt,Wn,Mn,Ri,Li,Di,Zt,zn,Ar,Tr,Ni,Oi,wr,Cr,Ir,Jt,Vn,et,Fi,Pr,Ie,kt,Rr,Gt,Lr,Yn,qe,Dr,to,no,Nr,Hn,Ui,io,ro,bn,Or,Bi,Qt,Xn,$n,qn,Fr,Ur,Kn,ki,Gi,so,Br,Wi,Zn,zi,Vi,kr,It,Jn,jt,ao,Pt,oo,Qn,en,Yi,Gr,Hi,tn,jn,nn,ei,lo,Xi,rn,Fv=((Ct={})[Ct.None=0]="None",Ct[Ct.Anonymous=1]="Anonymous",Ct[Ct.NonConstant=2]="NonConstant",Ct[Ct.Xref=4]="Xref",Ct[Ct.XrefOverlay=8]="XrefOverlay",Ct[Ct.ExternallyDependent=16]="ExternallyDependent",Ct[Ct.ResolvedOrDependent=32]="ResolvedOrDependent",Ct[Ct.ReferencedXref=64]="ReferencedXref",Ct),Uv=((Mr={})[Mr.BYBLOCK=0]="BYBLOCK",Mr[Mr.BYLAYER=256]="BYLAYER",Mr);var Bv=Math.PI/24,kv=((ht={})[ht.Rotated=0]="Rotated",ht[ht.Aligned=1]="Aligned",ht[ht.Angular=2]="Angular",ht[ht.Diameter=3]="Diameter",ht[ht.Radius=4]="Radius",ht[ht.Angular3Point=5]="Angular3Point",ht[ht.Ordinate=6]="Ordinate",ht[ht.ReferenceIsExclusive=32]="ReferenceIsExclusive",ht[ht.IsOrdinateXTypeFlag=64]="IsOrdinateXTypeFlag",ht[ht.IsCustomTextPositionFlag=128]="IsCustomTextPositionFlag",ht),Gv=((yt={})[yt.TopLeft=1]="TopLeft",yt[yt.TopCenter=2]="TopCenter",yt[yt.TopRight=3]="TopRight",yt[yt.MiddleLeft=4]="MiddleLeft",yt[yt.MiddleCenter=5]="MiddleCenter",yt[yt.MiddleRight=6]="MiddleRight",yt[yt.BottomLeft=7]="BottomLeft",yt[yt.BottomCenter=8]="BottomCenter",yt[yt.BottomRight=9]="BottomRight",yt),Wv=((br={})[br.AtLeast=1]="AtLeast",br[br.Exact=2]="Exact",br),jl=((Sn={})[Sn.Center=0]="Center",Sn[Sn.Above=1]="Above",Sn[Sn.Outside=2]="Outside",Sn[Sn.JIS=3]="JIS",Sn[Sn.Below=4]="Below",Sn),zv=((Pi={})[Pi.WithDimension=0]="WithDimension",Pi[Pi.AddLeader=1]="AddLeader",Pi[Pi.Independent=2]="Independent",Pi),Vv=((Gn={})[Gn.BothOutside=0]="BothOutside",Gn[Gn.ArrowFirst=1]="ArrowFirst",Gn[Gn.TextFirst=2]="TextFirst",Gn[Gn.Auto=3]="Auto",Gn),Ji=((Bt={})[Bt.Feet=0]="Feet",Bt[Bt.None=1]="None",Bt[Bt.Inch=2]="Inch",Bt[Bt.FeetAndInch=3]="FeetAndInch",Bt[Bt.Leading=4]="Leading",Bt[Bt.Trailing=8]="Trailing",Bt[Bt.LeadingAndTrailing=12]="LeadingAndTrailing",Bt),If=((Wn={})[Wn.None=0]="None",Wn[Wn.Leading=1]="Leading",Wn[Wn.Trailing=2]="Trailing",Wn[Wn.LeadingAndTrailing=3]="LeadingAndTrailing",Wn),Pf=((Mn={})[Mn.Center=0]="Center",Mn[Mn.First=1]="First",Mn[Mn.Second=2]="Second",Mn[Mn.OverFirst=3]="OverFirst",Mn[Mn.OverSecond=4]="OverSecond",Mn),Rf=((Ri={})[Ri.Bottom=0]="Bottom",Ri[Ri.Center=1]="Center",Ri[Ri.Top=2]="Top",Ri),Yv=((Li={})[Li.None=0]="None",Li[Li.UseDrawingBackground=1]="UseDrawingBackground",Li[Li.Custom=2]="Custom",Li),Hv=((Di={})[Di.Horizontal=0]="Horizontal",Di[Di.Diagonal=1]="Diagonal",Di[Di.NotStacked=2]="NotStacked",Di),Xv=((Zt={})[Zt.Scientific=1]="Scientific",Zt[Zt.Decimal=2]="Decimal",Zt[Zt.Engineering=3]="Engineering",Zt[Zt.Architectural=4]="Architectural",Zt[Zt.Fractional=5]="Fractional",Zt[Zt.WindowDesktop=6]="WindowDesktop",Zt),$v=((zn={})[zn.Decimal=0]="Decimal",zn[zn.DegreesMinutesSecond=1]="DegreesMinutesSecond",zn[zn.Gradian=2]="Gradian",zn[zn.Radian=3]="Radian",zn),qv=((Ar={})[Ar.PatternFill=0]="PatternFill",Ar[Ar.SolidFill=1]="SolidFill",Ar),Kv=((Tr={})[Tr.NonAssociative=0]="NonAssociative",Tr[Tr.Associative=1]="Associative",Tr),Zv=((Ni={})[Ni.Normal=0]="Normal",Ni[Ni.Outer=1]="Outer",Ni[Ni.Ignore=2]="Ignore",Ni),Jv=((Oi={})[Oi.UserDefined=0]="UserDefined",Oi[Oi.Predefined=1]="Predefined",Oi[Oi.Custom=2]="Custom",Oi),Qv=((wr={})[wr.NotAnnotated=0]="NotAnnotated",wr[wr.Annotated=1]="Annotated",wr),jv=((Cr={})[Cr.Solid=0]="Solid",Cr[Cr.Gradient=1]="Gradient",Cr),ex=((Ir={})[Ir.TwoColor=0]="TwoColor",Ir[Ir.OneColor=1]="OneColor",Ir),Lf=((Jt={})[Jt.Default=0]="Default",Jt[Jt.External=1]="External",Jt[Jt.Polyline=2]="Polyline",Jt[Jt.Derived=4]="Derived",Jt[Jt.Textbox=8]="Textbox",Jt[Jt.Outermost=16]="Outermost",Jt),bs=((Vn={})[Vn.Line=1]="Line",Vn[Vn.Circular=2]="Circular",Vn[Vn.Elliptic=3]="Elliptic",Vn[Vn.Spline=4]="Spline",Vn),Df=((et={})[et.Off=0]="Off",et[et.Solid=1]="Solid",et[et.Dashed=2]="Dashed",et[et.Dotted=3]="Dotted",et[et.ShotDash=4]="ShotDash",et[et.MediumDash=5]="MediumDash",et[et.LongDash=6]="LongDash",et[et.DoubleShortDash=7]="DoubleShortDash",et[et.DoubleMediumDash=8]="DoubleMediumDash",et[et.DoubleLongDash=9]="DoubleLongDash",et[et.DoubleMediumLongDash=10]="DoubleMediumLongDash",et[et.SparseDot=11]="SparseDot",et),tx={DRAGVS:"NULL",INTERFERECOLOR:1,INTERFEREOBJVS:"Conceptual",INTERFEREVPVS:"3d Wireframe",OBSLTYPE:Df.Off,SHADEDIF:70},nx=((Fi={})[Fi.Standard=-3]="Standard",Fi[Fi.ByLayer=-2]="ByLayer",Fi[Fi.ByBlock=-1]="ByBlock",Fi),ix=((Pr={})[Pr.English=0]="English",Pr[Pr.Metric=1]="Metric",Pr),rx=((Ie={})[Ie.PERSPECTIVE_MODE=1]="PERSPECTIVE_MODE",Ie[Ie.FRONT_CLIPPING=2]="FRONT_CLIPPING",Ie[Ie.BACK_CLIPPING=4]="BACK_CLIPPING",Ie[Ie.UCS_FOLLOW=8]="UCS_FOLLOW",Ie[Ie.FRONT_CLIP_NOT_AT_EYE=16]="FRONT_CLIP_NOT_AT_EYE",Ie[Ie.UCS_ICON_VISIBILITY=32]="UCS_ICON_VISIBILITY",Ie[Ie.UCS_ICON_AT_ORIGIN=64]="UCS_ICON_AT_ORIGIN",Ie[Ie.FAST_ZOOM=128]="FAST_ZOOM",Ie[Ie.SNAP_MODE=256]="SNAP_MODE",Ie[Ie.GRID_MODE=512]="GRID_MODE",Ie[Ie.ISOMETRIC_SNAP_STYLE=1024]="ISOMETRIC_SNAP_STYLE",Ie[Ie.HIDE_PLOT_MODE=2048]="HIDE_PLOT_MODE",Ie[Ie.K_ISO_PAIR_TOP=4096]="K_ISO_PAIR_TOP",Ie[Ie.K_ISO_PAIR_RIGHT=8192]="K_ISO_PAIR_RIGHT",Ie[Ie.VIEWPORT_ZOOM_LOCKING=16384]="VIEWPORT_ZOOM_LOCKING",Ie[Ie.UNUSED=32768]="UNUSED",Ie[Ie.NON_RECTANGULAR_CLIPPING=65536]="NON_RECTANGULAR_CLIPPING",Ie[Ie.VIEWPORT_OFF=131072]="VIEWPORT_OFF",Ie[Ie.GRID_BEYOND_DRAWING_LIMITS=262144]="GRID_BEYOND_DRAWING_LIMITS",Ie[Ie.ADAPTIVE_GRID_DISPLAY=524288]="ADAPTIVE_GRID_DISPLAY",Ie[Ie.SUBDIVISION_BELOW_SPACING=1048576]="SUBDIVISION_BELOW_SPACING",Ie[Ie.GRID_FOLLOWS_WORKPLANE=2097152]="GRID_FOLLOWS_WORKPLANE",Ie),sx=((kt={})[kt.OPTIMIZED_2D=0]="OPTIMIZED_2D",kt[kt.WIREFRAME=1]="WIREFRAME",kt[kt.HIDDEN_LINE=2]="HIDDEN_LINE",kt[kt.FLAT_SHADED=3]="FLAT_SHADED",kt[kt.GOURAUD_SHADED=4]="GOURAUD_SHADED",kt[kt.FLAT_SHADED_WITH_WIREFRAME=5]="FLAT_SHADED_WITH_WIREFRAME",kt[kt.GOURAUD_SHADED_WITH_WIREFRAME=6]="GOURAUD_SHADED_WITH_WIREFRAME",kt),ax=((Rr={})[Rr.UCS_UNCHANGED=0]="UCS_UNCHANGED",Rr[Rr.HAS_OWN_UCS=1]="HAS_OWN_UCS",Rr),ox=((Gt={})[Gt.NON_ORTHOGRAPHIC=0]="NON_ORTHOGRAPHIC",Gt[Gt.TOP=1]="TOP",Gt[Gt.BOTTOM=2]="BOTTOM",Gt[Gt.FRONT=3]="FRONT",Gt[Gt.BACK=4]="BACK",Gt[Gt.LEFT=5]="LEFT",Gt[Gt.RIGHT=6]="RIGHT",Gt),lx=((Lr={})[Lr.ONE_DISTANT_LIGHT=0]="ONE_DISTANT_LIGHT",Lr[Lr.TWO_DISTANT_LIGHTS=1]="TWO_DISTANT_LIGHTS",Lr),cx=((Yn={})[Yn.ByLayer=0]="ByLayer",Yn[Yn.ByBlock=1]="ByBlock",Yn[Yn.ByDictionaryDefault=2]="ByDictionaryDefault",Yn[Yn.ByObject=3]="ByObject",Yn),dx=((qe={})[qe.NotAllowed=0]="NotAllowed",qe[qe.AllowErase=1]="AllowErase",qe[qe.AllowTransform=2]="AllowTransform",qe[qe.AllowChangeColor=4]="AllowChangeColor",qe[qe.AllowChangeLayer=8]="AllowChangeLayer",qe[qe.AllowChangeLinetype=16]="AllowChangeLinetype",qe[qe.AllowChangeLinetypeScale=32]="AllowChangeLinetypeScale",qe[qe.AllowChangeVisibility=64]="AllowChangeVisibility",qe[qe.AllowClone=128]="AllowClone",qe[qe.AllowChangeLineweight=256]="AllowChangeLineweight",qe[qe.AllowChangePlotStyleName=512]="AllowChangePlotStyleName",qe[qe.AllowAllExceptClone=895]="AllowAllExceptClone",qe[qe.AllowAll=1023]="AllowAll",qe[qe.DisableProxyWarning=1024]="DisableProxyWarning",qe[qe.R13FormatProxy=32768]="R13FormatProxy",qe);function Ce(i,e,t){return i.code===e&&(t==null||i.value===t)}function fi(i){let e={};i.rewind();let t=i.next(),n=t.code;if(e.x=t.value,(t=i.next()).code!==n+10)throw Error("Expected code for point value to be 20 but got "+t.code+".");return e.y=t.value,(t=i.next()).code!==n+20?i.rewind():e.z=t.value,e}var Vr=Symbol();function me(i,e){return(t,n,r)=>{let a=(function(d,f=!1){return d.reduce((m,g)=>{g.pushContext&&m.push({});let v=m[m.length-1];for(let E of typeof g.code=="number"?[g.code]:g.code){let S=v[E]??(v[E]=[]);g.isMultiple&&S.length&&f&&console.warn(`Snippet ${S[S.length-1].name} for code(${E}) is shadowed by ${g.name}`),S.push(g)}return m},[{}])})(i,n.debug),l=!1,c=a.length-1;for(;!Ce(t,0,"EOF");){let d=(function(b,A,L){return b.find((I,P)=>P>=L&&I[A]?.length)})(a,t.code,c),f=d?.[t.code],m=f?.[f.length-1];if(!d||!m){n.rewind();break}m.isMultiple||d[t.code].pop();let{name:g,parser:v,isMultiple:E,isReducible:S}=m,C=v?.(t,n,r);if(C===Vr){n.rewind();break}if(g){let[b,A]=Nf(r,g);E&&!S?(Object.prototype.hasOwnProperty.call(b,A)||(b[A]=[]),b[A].push(C)):b[A]=C}m.pushContext&&(c-=1),l=!0,t=n.next()}return e&&Object.setPrototypeOf(r,e),l}}function Nf(i,e){let t=e.split(".");if(!t.length)throw Error("[parserGenerator::getObjectByPath] Invalid empty path");let n=i;for(let r=0;r<t.length-1;++r){let a=co(t[r]),l=co(t[r+1]);Object.prototype.hasOwnProperty.call(n,a)||(typeof l=="number"?n[a]=[]:n[a]={}),n=n[a]}return[n,co(t[t.length-1])]}function co(i){let e=Number.parseInt(i);return Number.isNaN(e)?i:e}function h({value:i}){return i}function B(i,e){return fi(e)}function ye({value:i}){return!!i}function Of({value:i}){return i.trim()}var Ff=[{code:281,name:"isEntity",parser:ye},{code:280,name:"wasProxy",parser:ye},{code:91,name:"instanceCount",parser:h},{code:90,name:"proxyFlag",parser:h},{code:3,name:"appName",parser:h},{code:2,name:"cppClassName",parser:h},{code:1,name:"name",parser:h}],Uf=me(Ff),Bf=[{code:0,name:"classes",isMultiple:!0,parser(i,e){if(i.value!=="CLASS")return Vr;i=e.next();let t={};return Uf(i,e,t),t}}],kf=me(Bf),ux=((Dr={})[Dr.RayTrace=0]="RayTrace",Dr[Dr.ShadowMap=1]="ShadowMap",Dr);function An(i,e,t){for(;Ce(i,102);){var n;let r=i.value;if(i=e.next(),!r.startsWith("{")){e.debug&&console.warn(`Invalid application group, expected to start with "{" but received: ${r}`),(function(l,c){for(;!Ce(l,102)&&!Ce(l,0,"EOF")&&l.code!==0;)l=c.next()})(i,e),i=e.next();continue}let a=r.slice(1).trim();t.extensions??(t.extensions={}),(n=t.extensions)[a]??(n[a]=[]),(function(l,c,d){for(;!Ce(l,102,"}")&&!Ce(l,0,"EOF")&&l.code!==0;)d.push(l),l=c.next()})(i,e,t.extensions[a]),i=e.next()}e.rewind()}var Gf=[{code:1001,name:"xdata",isMultiple:!0,parser:go}],Wf=new Set([1010,1011,1012,1013]);function go(i,e){if(!Ce(i,1001))throw Error("XData must starts with code 1001");let t={appName:i.value,value:[]};i=e.next();let n=[t.value];for(;!Ce(i,0,"EOF")&&!Ce(i,1001)&&i.code>=1e3;){let r=n[n.length-1];if(i.code===1002){i.value==="{"?n.push([]):(n.pop(),n[n.length-1]?.push(r)),i=e.next();continue}Wf.has(i.code)?r.push(fi(e)):r.push(i.value),i=e.next()}return e.rewind(),t}var Qi=class{parseEntity(e,t){let n={},r="none",a=!1;for(;!Ce(t,0,"EOF");){switch(t.code){case 100:t.value==="AcDbProxyEntity"&&(n.subclassMarker="AcDbProxyEntity",a=!0);break;case 90:n.proxyEntityClassId=t.value,r="none";break;case 91:n.applicationEntityClassId=t.value,r="none";break;case 1:a&&(n.originalDxfName=String(t.value));break;case 92:case 160:n.graphicsDataSize=t.value,r="graphics";break;case 93:case 161:n.entityDataSize=t.value,r="entity";break;case 96:case 162:n.unknownDataSize=t.value,r="unknown";break;case 310:r==="graphics"?n.graphicsData=(n.graphicsData??"")+t.value:r==="entity"&&(n.entityData=(n.entityData??"")+t.value);break;case 311:r==="unknown"&&(n.unknownData=(n.unknownData??"")+t.value);break;case 330:case 340:case 350:case 360:r="none",a?(n.linkedObjectIds??(n.linkedObjectIds=[])).push(String(t.value)):t.code===330&&(n.ownerBlockRecordSoftId=String(t.value));break;case 94:r="none";break;case 95:n.objectDrawingFormat=t.value;break;case 70:n.originalDataFormat=t.value;break;case 5:n.handle=String(t.value);break;case 102:An(t,e,n);break;case 67:n.isInPaperSpace=!!t.value;break;case 8:n.layer=String(t.value);break;case 6:n.lineType=String(t.value);break;case 347:n.materialObjectHardId=String(t.value);break;case 62:n.colorIndex=t.value;break;case 370:n.lineweight=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.isVisible=!!t.value;break;case 420:n.color=t.value;break;case 430:n.colorName=String(t.value);break;case 440:n.transparency=t.value;break;case 380:n.plotStyleType=t.value;break;case 390:n.plotStyleHardId=String(t.value);break;case 284:n.shadowMode=t.value;break;case 410:n.layoutTabName=String(t.value);break;case 1001:(n.xdata??(n.xdata=[])).push(go(t,e));break;default:return e.rewind(),n}t=e.next()}return e.rewind(),n}};(to="ForEntityName")in Qi?Object.defineProperty(Qi,to,{value:"ACAD_PROXY_ENTITY",enumerable:!0,configurable:!0,writable:!0}):Qi[to]="ACAD_PROXY_ENTITY";var hx=((no={})[no.ProxyEntity=498]="ProxyEntity",no),fx=((Nr={})[Nr.Dwg=0]="Dwg",Nr[Nr.Dxf=1]="Dxf",Nr),px=((Hn={})[Hn.CAST_AND_RECEIVE=0]="CAST_AND_RECEIVE",Hn[Hn.CAST=1]="CAST",Hn[Hn.RECEIVE=2]="RECEIVE",Hn[Hn.IGNORE=3]="IGNORE",Hn),Fe=[...Gf,{code:284,name:"shadowMode",parser:h},{code:390,name:"plotStyleHardId",parser:h},{code:380,name:"plotStyleType",parser:h},{code:440,name:"transparency",parser:h},{code:430,name:"colorName",parser:h},{code:420,name:"color",parser:h},{code:310,name:"proxyEntity",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.proxyEntity??"")+i.value},{code:[92,160],name:"proxyByte",parser:h},{code:60,name:"isVisible",parser:ye},{code:48,name:"lineTypeScale",parser:h},{code:370,name:"lineweight",parser:h},{code:62,name:"colorIndex",parser:h},{code:347,name:"materialObjectHardId",parser:h},{code:6,name:"lineType",parser:h},{code:8,name:"layer",parser:h},{code:410,name:"layoutTabName",parser:h},{code:67,name:"isInPaperSpace",parser:ye},{code:100},{code:330,name:"ownerBlockRecordSoftId",parser:h},{code:102,parser:An},{code:102,parser:An},{code:102,parser:An},{code:5,name:"handle",parser:h}];function zf(i){return[{code:3,name:i,parser:(e,t,n)=>(n._code3text=(n._code3text??"")+e.value,n._code3text+(n._code1text??"")),isMultiple:!0,isReducible:!0},{code:1,name:i,parser:(e,t,n)=>(n._code1text=e.value,(n._code3text??"")+n._code1text)}]}function oc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Vf={extrusionDirection:{x:0,y:0,z:1}},Yf=[{code:210,name:"extrusionDirection",parser:B},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:100,name:"subclassMarker",parser:h},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B},{code:39,name:"thickness",parser:h},{code:100},...Fe],Rs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){oc(this,"parser",me(Yf,Vf))}};oc(Rs,"ForEntityName","ARC");var mx=((Ui={})[Ui.BeforeText=0]="BeforeText",Ui[Ui.AboveText=1]="AboveText",Ui[Ui.None=2]="None",Ui),yo=[{name:"DIMPOST",code:3},{name:"DIMAPOST",code:4,defaultValue:""},{name:"DIMBLK_OBSOLETE",code:5},{name:"DIMBLK1_OBSOLETE",code:6},{name:"DIMBLK2_OBSOLETE",code:7},{name:"DIMSCALE",code:40,defaultValue:1},{name:"DIMASZ",code:41,defaultValue:.25},{name:"DIMEXO",code:42,defaultValue:.625,defaultValueImperial:.0625},{name:"DIMDLI",code:43,defaultValue:3.75,defaultValueImperial:.38},{name:"DIMEXE",code:44,defaultValue:2.25,defaultValueImperial:.28},{name:"DIMRND",code:45,defaultValue:0},{name:"DIMDLE",code:46,defaultValue:0},{name:"DIMTP",code:47,defaultValue:0},{name:"DIMTM",code:48,defaultValue:0},{name:"DIMFXL",code:49,defaultValue:1},{name:"DIMJOGANG",code:50,defaultValue:45},{name:"DIMTFILL",code:69,defaultValue:0},{name:"DIMTFILLCLR",code:70,defaultValue:0},{name:"DIMTOL",code:71,defaultValue:0,defaultValueImperial:1},{name:"DIMLIM",code:72,defaultValue:0},{name:"DIMTIH",code:73,defaultValue:0,defaultValueImperial:1},{name:"DIMTOH",code:74,defaultValue:0,defaultValueImperial:1},{name:"DIMSE1",code:75,defaultValue:0},{name:"DIMSE2",code:76,defaultValue:0},{name:"DIMTAD",code:77,defaultValue:jl.Above,defaultValueImperial:jl.Center},{name:"DIMZIN",code:78,defaultValue:Ji.Trailing,defaultValueImperial:Ji.Feet},{name:"DIMAZIN",code:79,defaultValue:If.None},{name:"DIMARCSYM",code:90,defaultValue:0},{name:"DIMTXT",code:140,defaultValue:2.5,defaultValueImperial:.28},{name:"DIMCEN",code:141,defaultValue:2.5,defaultValueImperial:.09},{name:"DIMTSZ",code:142,defaultValue:0},{name:"DIMALTF",code:143,defaultValue:25.4},{name:"DIMLFAC",code:144,defaultValue:1},{name:"DIMTVP",code:145,defaultValue:0},{name:"DIMTFAC",code:146,defaultValue:1},{name:"DIMGAP",code:147,defaultValue:.625,defaultValueImperial:.09},{name:"DIMALTRND",code:148,defaultValue:0},{name:"DIMALT",code:170,defaultValue:0},{name:"DIMALTD",code:171,defaultValue:3,defaultValueImperial:2},{name:"DIMTOFL",code:172,defaultValue:1,defaultValueImperial:0},{name:"DIMSAH",code:173,defaultValue:0},{name:"DIMTIX",code:174,defaultValue:0},{name:"DIMSOXD",code:175,defaultValue:0},{name:"DIMCLRD",code:176,defaultValue:0},{name:"DIMCLRE",code:177,defaultValue:0},{name:"DIMCLRT",code:178,defaultValue:0},{name:"DIMADEC",code:179,defaultValue:0},{name:"DIMUNIT",code:270},{name:"DIMDEC",code:271,defaultValue:2,defaultValueImperial:4},{name:"DIMTDEC",code:272,defaultValue:2,defaultValueImperial:4},{name:"DIMALTU",code:273,defaultValue:2},{name:"DIMALTTD",code:274,defaultValue:3,defaultValueImperial:2},{name:"DIMAUNIT",code:275,defaultValue:0},{name:"DIMFRAC",code:276,defaultValue:0},{name:"DIMLUNIT",code:277,defaultValue:2},{name:"DIMDSEP",code:278,defaultValue:44,defaultValueImperial:46},{name:"DIMTMOVE",code:279,defaultValue:0},{name:"DIMJUST",code:280,defaultValue:Pf.Center},{name:"DIMSD1",code:281,defaultValue:0},{name:"DIMSD2",code:282,defaultValue:0},{name:"DIMTOLJ",code:283,defaultValue:Rf.Center},{name:"DIMTZIN",code:284,defaultValue:Ji.Trailing,defaultValueImperial:Ji.Feet},{name:"DIMALTZ",code:285,defaultValue:Ji.Trailing},{name:"DIMALTTZ",code:286,defaultValue:Ji.Trailing},{name:"DIMFIT",code:287},{name:"DIMUPT",code:288,defaultValue:0},{name:"DIMATFIT",code:289,defaultValue:3},{name:"DIMFXLON",code:290,defaultValue:0},{name:"DIMTXTDIRECTION",code:294,defaultValue:0},{name:"DIMTXSTY",code:340,defaultValue:"Standard"},{name:"DIMLDRBLK",code:341,defaultValue:""},{name:"DIMBLK",code:342,defaultValue:""},{name:"DIMBLK1",code:343,defaultValue:""},{name:"DIMBLK2",code:344,defaultValue:""},{name:"DIMLTYPE",code:345,defaultValue:""},{name:"DIMLTEX1",code:346,defaultValue:""},{name:"DIMLTEX2",code:347,defaultValue:""},{name:"DIMLWD",code:371,defaultValue:-2},{name:"DIMLWE",code:372,defaultValue:-2}],lc=[{code:3,name:"styleName",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:51,name:"ocsRotation",parser:h},{code:53,name:"textRotation",parser:h},{code:1,name:"text",parser:h},{code:42,name:"measurement",parser:h},{code:72,name:"textLineSpacingStyle",parser:h},{code:71,name:"attachmentPoint",parser:h},{code:70,name:"dimensionType",parser:h},{code:11,name:"textPoint",parser:B},{code:10,name:"definitionPoint",parser:B},{code:2,name:"name",parser:h},{code:280,name:"version",parser:h},{code:100}],Hf=[{code:100},{code:52,name:"obliqueAngle",parser:h},{code:50,name:"rotationAngle",parser:h},{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:12,name:"insertionPoint",parser:B},{code:100,name:"subclassMarker",parser:h}],Xf=[{code:16,name:"arcPoint",parser:B},{code:15,name:"centerPoint",parser:B},{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:100,name:"subclassMarker",parser:h}],$f=[{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:100,name:"subclassMarker",parser:h}],qf=[{code:40,name:"leaderLength",parser:h},{code:15,name:"subDefinitionPoint",parser:B},{code:100,name:"subclassMarker",parser:h}],Kf=[{code:100,parser(i,e,t){let n=(function(r){switch(r){case"AcDbAlignedDimension":return me(Hf);case"AcDb3PointAngularDimension":case"AcDb2LineAngularDimension":return me(Xf);case"AcDbOrdinateDimension":return me($f);case"AcDbRadialDimension":case"AcDbDiametricDimension":return me(qf)}return null})(i.value);if(!n)return Vr;n(i,e,t)},pushContext:!0},...yo.map(i=>({...i,parser:h})),...lc,...Fe],ji=class{parseEntity(e,t){let n={};return me(Kf)(t,e,n),n}};(io="ForEntityName")in ji?Object.defineProperty(ji,io,{value:"DIMENSION",enumerable:!0,configurable:!0,writable:!0}):ji[io]="DIMENSION";var Zf=[{code:73},{code:17,name:"leaderEnd",parser:B},{code:16,name:"leaderStart",parser:B},{code:71,name:"hasLeader",parser:ye},{code:41,name:"endAngle",parser:h},{code:40,name:"startAngle",parser:h},{code:70,name:"isPartial",parser:ye},{code:15,name:"centerPoint",parser:B},{code:14,name:"xline2Point",parser:B},{code:13,name:"xline1Point",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...yo.map(i=>({...i,parser:h})),...lc,...Fe],er=class{parseEntity(e,t){let n={};return me(Zf)(t,e,n),n}};(ro="ForEntityName")in er?Object.defineProperty(er,ro,{value:"ARC_DIMENSION",enumerable:!0,configurable:!0,writable:!0}):er[ro]="ARC_DIMENSION";var _x=((bn={})[bn.NONE=0]="NONE",bn[bn.INVISIBLE=1]="INVISIBLE",bn[bn.CONSTANT=2]="CONSTANT",bn[bn.VERIFICATION_REQUIRED=4]="VERIFICATION_REQUIRED",bn[bn.PRESET=8]="PRESET",bn),gx=((Or={})[Or.MULTILINE=2]="MULTILINE",Or[Or.CONSTANT_MULTILINE=4]="CONSTANT_MULTILINE",Or),yx=((Bi={})[Bi.NONE=0]="NONE",Bi[Bi.MIRRORED_X=2]="MIRRORED_X",Bi[Bi.MIRRORED_Y=4]="MIRRORED_Y",Bi),Jf=((Qt={})[Qt.LEFT=0]="LEFT",Qt[Qt.CENTER=1]="CENTER",Qt[Qt.RIGHT=2]="RIGHT",Qt[Qt.ALIGNED=3]="ALIGNED",Qt[Qt.MIDDLE=4]="MIDDLE",Qt[Qt.FIT=5]="FIT",Qt),Qf=((Xn={})[Xn.BASELINE=0]="BASELINE",Xn[Xn.BOTTOM=1]="BOTTOM",Xn[Xn.MIDDLE=2]="MIDDLE",Xn[Xn.TOP=3]="TOP",Xn);function cc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var dc={thickness:0,rotation:0,xScale:1,obliqueAngle:0,styleName:"STANDARD",generationFlag:0,halign:Jf.LEFT,valign:Qf.BASELINE,extrusionDirection:{x:0,y:0,z:1}},uc=[{code:73,name:"valign",parser:h},{code:100},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"endPoint",parser:B},{code:72,name:"valign",parser:h},{code:72,name:"halign",parser:h},{code:71,name:"generationFlag",parser:h},{code:7,name:"styleName",parser:h},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"xScale",parser:h},{code:50,name:"rotation",parser:h},{code:1,name:"text",parser:h},{code:40,name:"textHeight",parser:h},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Ls=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){cc(this,"parser",me(uc,dc))}};function hc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}cc(Ls,"ForEntityName","TEXT");var jf={...dc},ep=[{code:2},{code:40,name:"annotationScale",parser:h},{code:10,name:"alignmentPoint",parser:B},{code:340,name:"secondaryAttributesHardIds",isMultiple:!0,parser:h},{code:70,name:"numberOfSecondaryAttributes",parser:h},{code:70,name:"isReallyLocked",parser:ye},{code:70,name:"mtextFlag",parser:h},{code:280,name:"isDuplicatedRecord",parser:ye},{code:100},{code:280,name:"isLocked",parser:ye},{code:74,name:"valign",parser:h},{code:73},{code:70,name:"attributeFlag",parser:h},{code:2,name:"tag",parser:h},{code:3,name:"prompt",parser:h},{code:280},{code:100,name:"subclassMarker",parser:h},...uc.slice(2)],Ds=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){hc(this,"parser",me(ep,jf))}};function tp(i,e){let t={};for(let n of i){let r=e(n);r!=null&&(t[r]??(t[r]=[]),t[r].push(n))}return t}function*Ns(i,e=1/0,t=1){for(let n=i;n!==e;n+=t)yield n}function fo(i){return{x:i.x??0,y:i.y??0,z:i.z??0}}hc(Ds,"ForEntityName","ATTDEF");var np=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function ip(i){return np[i]}function rp(i){i.rewind();let e=i.next();if(e.code!==101)throw Error("Bad call for skipEmbeddedObject()");do e=i.next();while(e.code!==0);i.rewind()}function sp(i,e,t){if(Ce(e,102))return An(e,t,i),!0;switch(e.code){case 0:i.type=e.value;break;case 5:i.handle=e.value;break;case 330:i.ownerBlockRecordSoftId=e.value;break;case 67:i.isInPaperSpace=!!e.value;break;case 8:i.layer=e.value;break;case 6:i.lineType=e.value;break;case 347:i.materialObjectHardId=e.value;break;case 62:i.colorIndex=e.value,i.color=ip(Math.abs(e.value));break;case 370:i.lineweight=e.value;break;case 48:i.lineTypeScale=e.value;break;case 60:i.isVisible=!!e.value;break;case 92:i.proxyByte=e.value;break;case 310:i.proxyEntity=e.value;break;case 100:break;case 420:i.color=e.value;break;case 430:i.transparency=e.value;break;case 390:i.plotStyleHardId=e.value;break;case 284:i.shadowMode=e.value;break;case 1001:(i.xdata??(i.xdata=[])).push(go(e,t));break;default:return!1}return!0}function fc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var ap={textStyle:"STANDARD",extrusionDirection:{x:0,y:0,z:1},rotation:0},Is=[{code:46,name:"annotationHeight",parser:h},{code:101,parser(i,e){rp(e)}},{code:50,name:"columnHeight",parser:h},{code:49,name:"columnGutter",parser:h},{code:48,name:"columnWidth",parser:h},{code:79,name:"columnAutoHeight",parser:h},{code:78,name:"columnFlowReversed",parser:h},{code:76,name:"columnCount",parser:h},{code:75,name:"columnType",parser:h},{code:441,name:"backgroundFillTransparency",parser:h},{code:63,name:"backgroundFillColor",parser:h},{code:45,name:"fillBoxScale",parser:h},{code:[...Ns(430,440)],name:"backgroundColor",parser:h},{code:[...Ns(420,430)],name:"backgroundColor",parser:h},{code:90,name:"backgroundFill",parser:h},{code:44,name:"lineSpacing",parser:h},{code:73,name:"lineSpacingStyle",parser:h},{code:50,name:"rotation",parser:h},{code:43},{code:42},{code:11,name:"direction",parser:B},{code:210,name:"extrusionDirection",parser:B},{code:7,name:"styleName",parser:h},...zf("text"),{code:72,name:"drawingDirection",parser:h},{code:71,name:"attachmentPoint",parser:h},{code:41,name:"width",parser:h},{code:40,name:"height",parser:h},{code:10,name:"insertionPoint",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],Os=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){fc(this,"parser",me(Is,ap))}};function pc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}fc(Os,"ForEntityName","MTEXT");var op={thickness:0,rotation:0,scale:1,obliqueAngle:0,textStyle:"STANDARD",textGenerationFlag:0,horizontalJustification:0,verticalJustification:0,extrusionDirection:{x:0,y:0,z:1}},lp=[...Is.slice(Is.findIndex(({name:i})=>i==="columnType"),Is.findIndex(({name:i})=>i==="subclassMarker")+1),{code:100},{code:0,parser(i){if(!Ce(i,0,"MTEXT"))return Vr}},{code:2,name:"definitionTag",parser:h},{code:40,name:"annotationScale",parser:h},{code:10,name:"alignmentPoint",parser:B},{code:340,name:"secondaryAttributesHardId",parser:h},{code:70,name:"numberOfSecondaryAttributes",parser:h},{code:70,name:"isReallyLocked",parser:ye},{code:70,name:"mtextFlag",parser:h},{code:280,name:"isDuplicatedEntriesKeep",parser:ye},{code:100},{code:280,name:"lockPositionFlag",parser:ye},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"alignmentPoint",parser:B},{code:74,name:"verticalJustification",parser:h},{code:72,name:"horizontalJustification",parser:h},{code:71,name:"textGenerationFlag",parser:h},{code:7,name:"textStyle",parser:h},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"scale",parser:h},{code:50,name:"rotation",parser:h},{code:73},{code:70,name:"attributeFlag",parser:h},{code:2,name:"tag",parser:h},{code:280},{code:100,name:"subclassMarker",parser:h},{code:1,name:"text",parser:h},{code:40,name:"textHeight",parser:h},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100},...Fe],Fs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){pc(this,"parser",me(lp,op))}};function cp(i){let e="";for(let t=0;t<i.length;t++){let n=i.charCodeAt(t);e+=n<=32?i[t]:String.fromCharCode(159-n)}return e}function dp(i){let e=i.trimStart();return!(!e||/^\d/.test(e)||/^ACIS/i.test(e)||/^ASM/i.test(e)||/^(body|point|plane|cone|cylinder|sphere|torus|lump|shell|face|edge|wire|transform)\b/i.test(e)||/\b(body|point|straight-curve|ellipse-curve)\s+\$/.test(e))}function mc(i){return i&&dp(i)?cp(i):i}function ec(i){return i.length===0?"":i.map(e=>mc(e)).join(`
`)}function tc(i,e,t){if(e===1||i.length===0)return void i.push(t);i[i.length-1]+=t}function up(i){return i.length===0?"":mc(i.join(""))}function vo(i){return[{code:3,name:i,parser(e,t,n){let r=n._acisPayloadLines??(n._acisPayloadLines=[]);return tc(r,3,String(e.value)),n[i]=ec(r),n[i]},isMultiple:!0,isReducible:!0},{code:1,name:i,parser(e,t,n){let r=n._acisPayloadLines??(n._acisPayloadLines=[]);return tc(r,1,String(e.value)),n[i]=ec(r),n[i]},isMultiple:!0,isReducible:!0}]}function _c(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}pc(Fs,"ForEntityName","ATTRIB");var hp=[...vo("data"),{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Us=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){_c(this,"parser",me(hp))}};function gc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}_c(Us,"ForEntityName","BODY");var fp={thickness:0,extrusionDirection:{x:0,y:0,z:1}},pp=[{code:210,name:"extrusionDirection",parser:B},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Bs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){gc(this,"parser",me(pp,fp))}};function yc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}gc(Bs,"ForEntityName","CIRCLE");var mp={extrusionDirection:{x:0,y:0,z:1}},_p=[{code:42,name:"endAngle",parser:h},{code:41,name:"startAngle",parser:h},{code:40,name:"axisRatio",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"majorAxisEndPoint",parser:B},{code:10,name:"center",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],ks=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){yc(this,"parser",me(_p,mp))}};function vc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}yc(ks,"ForEntityName","ELLIPSE");var gp=[{code:70,name:"invisibleEdgeFlags",parser:h},{code:13,name:"vertices.3",parser:B},{code:12,name:"vertices.2",parser:B},{code:11,name:"vertices.1",parser:B},{code:10,name:"vertices.0",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],Gs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){vc(this,"parser",me(gp))}};vc(Gs,"ForEntityName","3DFACE");var vx=(($n={})[$n.First=1]="First",$n[$n.Second=2]="Second",$n[$n.Third=4]="Third",$n[$n.Fourth=8]="Fourth",$n);function Wr(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var po=class{getReadIndex(){return this._pointer}getLines(){return this._data}next(){if(!this.hasNext())return this._eof?this.debug&&console.warn("Cannot call 'next' after EOF group has been read"):this.debug&&console.warn("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]),{code:0,value:"EOF"};let e=this._data[this._pointer++],t=parseInt(e,10);Number.isNaN(t)&&nc(e);let n=mo(t,this._data[this._pointer++],this.debug),r={code:t,value:n};return Ce(r,0,"EOF")&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?Error("Cannot call 'next' after EOF group has been read"):Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e=this._data[this._pointer],t=parseInt(e,10);Number.isNaN(t)&&nc(e);let n={code:t,value:0};return n.value=mo(n.code,this._data[this._pointer+1],this.debug),n}rewind(e){e=e||1,this._pointer=this._pointer-2*e}hasNext(){return!this._eof&&!(this._pointer>this._data.length-2)}isEOF(){return this._eof}constructor(e,t=!1){Wr(this,"_data",void 0),Wr(this,"debug",void 0),Wr(this,"_pointer",void 0),Wr(this,"_eof",void 0),Wr(this,"lastReadGroup",void 0),this._data=e,this.debug=t,this.lastReadGroup={code:0,value:0},this._pointer=0,this._eof=!1}};function mo(i,e,t=!1){var n;let r=(n=e).endsWith("\r")?n.slice(0,-1):n;return i<=9?r:i>=10&&i<=59?parseFloat(e.trim()):i>=60&&i<=99?parseInt(e.trim()):i>=100&&i<=109?r:i>=110&&i<=149?parseFloat(e.trim()):i>=160&&i<=179?parseInt(e.trim()):i>=210&&i<=239?parseFloat(e.trim()):i>=270&&i<=289?parseInt(e.trim()):i>=290&&i<=299?(function(a){let l=a.trim().toLowerCase();if(l===""||l==="0"||l==="false"||l==="f"||l==="no")return!1;if(l==="1"||l==="true"||l==="t"||l==="yes")return!0;let c=Number.parseFloat(l);if(!Number.isNaN(c))return c!==0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")})(e.trim()):i>=300&&i<=369?r:i>=370&&i<=389?parseInt(e.trim()):i>=390&&i<=399?r:i>=400&&i<=409?parseInt(e.trim()):i>=410&&i<=419?r:i>=420&&i<=429?parseInt(e.trim()):i>=430&&i<=439?r:i>=440&&i<=459?parseInt(e.trim()):i>=460&&i<=469?parseFloat(e.trim()):i>=470&&i<=481||i===999||i>=1e3&&i<=1009?r:i>=1010&&i<=1059?parseFloat(e.trim()):i>=1060&&i<=1071?parseInt(e.trim()):(t&&console.warn("WARNING: Group code does not have a defined type: %j",{code:i,value:e}),r)}function nc(i){let e=i.length>120?`${i.slice(0,120)}\u2026`:i;throw Error(`Invalid DXF group code line: "${e}". Expected a numeric group code (often caused by binary DXF, UTF-16-encoded DXF, or stray blank lines). Use ASCII/text DXF or remove blank lines between code/value pairs.`)}var xc=[{code:330,name:"sourceBoundaryObjects",parser:h,isMultiple:!0},{code:97,name:"numberOfSourceBoundaryObjects",parser:h}],yp=[{code:11,name:"end",parser:B},{code:10,name:"start",parser:B}],vp=[{code:73,name:"isCCW",parser:ye},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B}],xp=[{code:73,name:"isCCW",parser:ye},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:40,name:"lengthOfMinorAxis",parser:h},{code:11,name:"end",parser:B},{code:10,name:"center",parser:B}],Ep=[{code:13,name:"endTangent",parser:B},{code:12,name:"startTangent",parser:B},{code:11,name:"fitDatum",isMultiple:!0,parser:B},{code:97,name:"numberOfFitData",parser:h},{code:10,name:"controlPoints",isMultiple:!0,parser(i,e){let t={...fi(e),weight:1};return(i=e.next()).code===42?t.weight=i.value:e.rewind(),t}},{code:40,name:"knots",isMultiple:!0,parser:h},{code:96,name:"numberOfControlPoints",parser:h},{code:95,name:"numberOfKnots",parser:h},{code:74,name:"isPeriodic",parser:ye},{code:73,name:"splineFlag",parser:h},{code:94,name:"degree",parser:h}],Sp={[bs.Line]:yp,[bs.Circular]:vp,[bs.Elliptic]:xp,[bs.Spline]:Ep},Mp=[...xc,{code:72,name:"edges",parser(i,e){let t={type:i.value},n=Sp[t.type];if(n==null)throw Error(`Unsupported HATCH boundary edge type: ${t.type} (expected 1\u20134: line, arc, elliptic arc, spline). This often happens when a polyline hatch boundary is parsed as edge segments (e.g. group 92 boundary flag missing the polyline bit). Try re-saving as ASCII DXF or simplifying hatch boundaries in CAD.`);return me(n)(i=e.next(),e,t),t},isMultiple:!0},{code:93,name:"numberOfEdges",parser:h}],bp=[...xc,{code:10,name:"vertices",parser(i,e){let t={...fi(e),bulge:0};return(i=e.next()).code===42?t.bulge=i.value:e.rewind(),t},isMultiple:!0},{code:93,name:"numberOfVertices",parser:h},{code:73,name:"isClosed",parser:ye},{code:72,name:"hasBulge",parser:ye}];function Ap(i,e){let t={boundaryPathTypeFlag:i.value},n=!!(t.boundaryPathTypeFlag&Lf.Polyline),r=e.getReadIndex();return i=e.next(),!n&&(function(a,l){let c=Math.min(a.length,l+120),d=l;for(;d<c-1;){let f=parseInt(a[d],10);if(Number.isNaN(f))break;if(f===93){if(d+3>=a.length||parseInt(a[d+2],10)!==72)return!1;let m=mo(72,a[d+3]);if(m===0)return!0;if(m===1){if(d+5<a.length&&parseInt(a[d+4],10)===73)return!0;if(d+8<a.length&&parseInt(a[d+4],10)===10){let g=parseInt(a[d+8],10);if(g===10||g===42)return!0}}break}if(f===0)break;d+=2}return!1})(e.getLines(),r)&&(n=!0),n?me(bp)(i,e,t):me(Mp)(i,e,t),t}var Tp=[{code:49,name:"dashLengths",parser:h,isMultiple:!0},{code:79,name:"numberOfDashLengths",parser:h},{code:45,name:"offset",parser:ic},{code:43,name:"base",parser:ic},{code:53,name:"angle",parser:h}];function ic(i,e){let t=i.code+1,n={x:i.value,y:1};return(i=e.next()).code===t?n.y=i.value:e.rewind(),n}function wp(i,e){let t={};return me(Tp)(i,e,t),t}function Cp(i,e){let t=[];for(;i.code===463;){let n={reservedField:i.value};if((i=e.next()).code===63&&(n.colorIndex=i.value,i=e.next()),i.code===421)n.rgb=i.value,t.push(n),i=e.next();else{e.rewind();break}}return i.code!==463&&t.length>0&&e.rewind(),t}function Ec(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Ip={extrusionDirection:{x:0,y:0,z:1},gradientRotation:0,colorTint:0},Pp=[{code:470,name:"gradientName",parser:h},{code:463,name:"gradientColors",parser:Cp},{code:462,name:"colorTint",parser:h},{code:461,name:"gradientDefinition",parser:h},{code:460,name:"gradientRotation",parser:h},{code:453,name:"numberOfColors",parser:h},{code:452,name:"gradientColorFlag",parser:h},{code:451},{code:450,name:"gradientFlag",parser:h},{code:10,name:"seedPoints",parser:B,isMultiple:!0},{code:99},{code:11,name:"offsetVector",parser:B},{code:98,name:"numberOfSeedPoints",parser:h},{code:47,name:"pixelSize",parser:h},{code:53,name:"definitionLines",parser:wp,isMultiple:!0},{code:78,name:"numberOfDefinitionLines",parser:h},{code:77,name:"isDouble",parser:ye},{code:73,name:"isAnnotated",parser:ye},{code:41,name:"patternScale",parser:h},{code:52,name:"patternAngle",parser:h},{code:76,name:"patternType",parser:h},{code:75,name:"hatchStyle",parser:h},{code:92,name:"boundaryPaths",parser:Ap,isMultiple:!0},{code:91,name:"numberOfBoundaryPaths",parser:h},{code:71,name:"associativity",parser:h},{code:63,name:"patternFillColor",parser:h},{code:70,name:"solidFill",parser:h},{code:2,name:"patternName",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:10,name:"elevationPoint",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Fe],Ws=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ec(this,"parser",me(Pp,Ip))}};function Sc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ec(Ws,"ForEntityName","HATCH");var Rp={brightness:50,contrast:50,fade:0,clippingBoundaryPath:[]},Lp=[{code:290,name:"clipMode",parser:h},{code:14,name:"clippingBoundaryPath",isMultiple:!0,parser:B},{code:91,name:"countBoundaryPoints",parser:h},{code:71,name:"clippingBoundaryType",parser:h},{code:360,name:"imageDefReactorHandle",parser:h},{code:283,name:"fade",parser:h},{code:282,name:"contrast",parser:h},{code:281,name:"brightness",parser:h},{code:280,name:"isClipped",parser:ye},{code:70,name:"flags",parser:h},{code:340,name:"imageDefHandle",parser:h},{code:13,name:"imageSize",parser:B},{code:12,name:"vPixel",parser:B},{code:11,name:"uPixel",parser:B},{code:10,name:"position",parser:B},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],zs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Sc(this,"parser",me(Lp,Rp))}};Sc(zs,"ForEntityName","IMAGE");var xx=((qn={})[qn.ShowImage=1]="ShowImage",qn[qn.ShowImageWhenNotAlignedWithScreen=2]="ShowImageWhenNotAlignedWithScreen",qn[qn.UseClippingBoundary=4]="UseClippingBoundary",qn[qn.TransparencyIsOn=8]="TransparencyIsOn",qn),Ex=((Fr={})[Fr.Rectangular=1]="Rectangular",Fr[Fr.Polygonal=2]="Polygonal",Fr),Sx=((Ur={})[Ur.Outside=0]="Outside",Ur[Ur.Inside=1]="Inside",Ur);function Mc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Dp={xScale:1,yScale:1,zScale:1,rotation:0,columnCount:0,rowCount:0,columnSpacing:0,rowSpacing:0,extrusionDirection:{x:0,y:0,z:1}},Np=[{code:210,name:"extrusionDirection",parser:B},{code:45,name:"rowSpacing",parser:h},{code:44,name:"columnSpacing",parser:h},{code:71,name:"rowCount",parser:h},{code:70,name:"columnCount",parser:h},{code:50,name:"rotation",parser:h},{code:43,name:"zScale",parser:h},{code:42,name:"yScale",parser:h},{code:41,name:"xScale",parser:h},{code:10,name:"insertionPoint",parser:B},{code:2,name:"name",parser:h},{code:66,name:"isVariableAttributes",parser:ye},{code:100,name:"subclassMarker",parser:h},...Fe],Vs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Mc(this,"parser",me(Np,Dp))}};function bc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Mc(Vs,"ForEntityName","INSERT");var Op={isArrowheadEnabled:!0},Fp=[{code:213,name:"offsetFromAnnotation",parser:B},{code:212,name:"offsetFromBlock",parser:B},{code:211,name:"horizontalDirection",parser:B},{code:210,name:"normal",parser:B},{code:340,name:"associatedAnnotation",parser:h},{code:77,name:"byBlockColor",parser:h},{code:10,name:"vertices",parser:B,isMultiple:!0},{code:76,name:"numberOfVertices",parser:h},{code:41,name:"textWidth",parser:h},{code:40,name:"textHeight",parser:h},{code:75,name:"isHooklineExists",parser:ye},{code:74,name:"isHooklineSameDirection",parser:ye},{code:73,name:"leaderCreationFlag",parser:h},{code:72,name:"isSpline",parser:ye},{code:71,name:"isArrowheadEnabled",parser:ye},{code:3,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Ys=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){bc(this,"parser",me(Fp,Op))}};bc(Ys,"ForEntityName","LEADER");var Mx=((Kn={})[Kn.TextAnnotation=0]="TextAnnotation",Kn[Kn.ToleranceAnnotation=1]="ToleranceAnnotation",Kn[Kn.BlockReferenceAnnotation=2]="BlockReferenceAnnotation",Kn[Kn.NoAnnotation=3]="NoAnnotation",Kn);function Ac(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Up={thickness:0,extrusionDirection:{x:0,y:0,z:1}},Bp=[{code:210,name:"extrusionDirection",parser:B},{code:11,name:"endPoint",parser:B},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Hs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ac(this,"parser",me(Bp,Up))}};function Tc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ac(Hs,"ForEntityName","LINE");var kp=[{code:280,name:"shadowMapSoftness",parser:h},{code:91,name:"shadowMapSize",parser:h},{code:73,name:"shadowType",parser:h},{code:293,name:"isShadowCast",parser:ye},{code:51,name:"falloffAngle",parser:h},{code:50,name:"hotspotAngle",parser:h},{code:42,name:"limitEnd",parser:h},{code:41,name:"limitStart",parser:h},{code:292,name:"isAttenuationLimited",parser:ye},{code:72,name:"attenuationType",parser:h},{code:11,name:"target",parser:B},{code:10,name:"position",parser:B},{code:40,name:"intensity",parser:h},{code:291,name:"isPlotGlyph",parser:ye},{code:290,name:"isOn",parser:ye},{code:421,name:"lightColorInstance",parser:h},{code:63,name:"lightColorIndex",parser:h},{code:70,name:"lightType",parser:h},{code:1,name:"name",parser:h},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],Xs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Tc(this,"parser",me(kp))}};Tc(Xs,"ForEntityName","LIGHT");var bx=((ki={})[ki.Distant=1]="Distant",ki[ki.Point=2]="Point",ki[ki.Spot=3]="Spot",ki),Ax=((Gi={})[Gi.None=0]="None",Gi[Gi.InverseLinear=1]="InverseLinear",Gi[Gi.InverseSquare=2]="InverseSquare",Gi),Gp={flag:0,elevation:0,thickness:0,extrusionDirection:{x:0,y:0,z:1},vertices:[]},Wp={bulge:0},zp=[{code:42,name:"bulge",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:91,name:"id",parser:h},{code:20,name:"y",parser:h},{code:10,name:"x",parser:h}],Vp=[{code:210,name:"extrusionDirection",parser:B},{code:10,name:"vertices",isMultiple:!0,parser(i,e){let t={};return me(zp,Wp)(i,e,t),t}},{code:39,name:"thickness",parser:h},{code:38,name:"elevation",parser:h},{code:43,name:"constantWidth",parser:h},{code:70,name:"flag",parser:h},{code:90,name:"numberOfVertices",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],tr=class{parseEntity(e,t){let n={};return me(Vp,Gp)(t,e,n),n}};(so="ForEntityName")in tr?Object.defineProperty(tr,so,{value:"LWPOLYLINE",enumerable:!0,configurable:!0,writable:!0}):tr[so]="LWPOLYLINE";var Tx=((Br={})[Br.IS_CLOSED=1]="IS_CLOSED",Br[Br.PLINE_GEN=128]="PLINE_GEN",Br);function wc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Yp=[{code:90,name:"overridenSubEntityCount",parser:h},{code:140,name:"edgeCreaseWeights",parser:h,isMultiple:!0},{code:95,name:"edgeCreaseCount",parser:h},{code:94,parser(i,e,t){t.edgeCount=i.value,t.edgeIndices=[];for(let n=0;n<t.edgeCount;++n){let r=[];i=e.next(),r[0]=i.value,i=e.next(),r[1]=i.value,t.edgeIndices.push(r)}}},{code:93,parser(i,e,t){t.totalFaceIndices=i.value,t.faceIndices=[];let n=[];for(let a=0;a<t.totalFaceIndices&&!Ce(i,0);++a)i=e.next(),n.push(i.value);let r=0;for(;r<n.length;){let a=n[r++],l=[];for(let c=0;c<a;++c)l.push(n[r++]);t.faceIndices.push(l)}}},{code:10,name:"vertices",parser:B,isMultiple:!0},{code:92,name:"verticesCount",parser:h},{code:91,name:"subdivisionLevel",parser:h},{code:40,name:"blendCrease",parser:h},{code:72,name:"isBlendCreased",parser:ye},{code:71,name:"version",parser:h},{code:100,name:"subclassMarker",parser:Of,pushContext:!0},...Fe],$s=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){wc(this,"parser",me(Yp))}};function Cc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}wc($s,"ForEntityName","MESH");var Hp=[{code:42,name:"fillParameters",parser:h,isMultiple:!0},{code:75,name:"fillCount",parser:h},{code:41,name:"parameters",parser:h,isMultiple:!0},{code:74,name:"parameterCount",parser:h}],Xp=[{code:[74,41,75,42],name:"elements",parser(i,e){let t=me(Hp),n={};return t(i,e,n),n},isMultiple:!0},{code:13,name:"miterDirection",parser:B},{code:12,name:"direction",parser:B},{code:11,name:"position",parser:B}],$p=[{code:[11,12,13],name:"segments",parser(i,e){let t=me(Xp),n={};return t(i,e,n),n},isMultiple:!0},{code:210,name:"extrusionDirection",parser:B},{code:10,name:"startPosition",parser:B},{code:73,name:"styleCount",parser:h},{code:72,name:"vertexCount",parser:h},{code:71,name:"flags",parser:h},{code:70,name:"justification",parser:h},{code:40,name:"scale",parser:h},{code:340,name:"styleObjectHandle",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Fe],qs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Cc(this,"parser",me($p))}};Cc(qs,"ForEntityName","MLINE");var wx=((Wi={})[Wi.Top=0]="Top",Wi[Wi.Zero=1]="Zero",Wi[Wi.Bottom=2]="Bottom",Wi),Cx=((Zn={})[Zn.HasVertex=1]="HasVertex",Zn[Zn.Closed=2]="Closed",Zn[Zn.SuppressStartCaps=4]="SuppressStartCaps",Zn[Zn.SuppressEndCaps=8]="SuppressEndCaps",Zn),Ix=((zi={})[zi.LEFT_TO_RIGHT=1]="LEFT_TO_RIGHT",zi[zi.TOP_TO_BOTTOM=3]="TOP_TO_BOTTOM",zi[zi.BY_STYLE=5]="BY_STYLE",zi);function Ic(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var qp={},Kp=[{code:300,parser:function(i,e,t){let n;if(i.value==="CONTEXT_DATA{")for(;e.hasNext();){var r;if((n=e.next()).code===301)break;switch(n.code){case 10:t.contentBasePosition=Rt(n,e);break;case 11:t.normal=Rt(n,e);break;case 12:t.textAnchor=Rt(n,e);break;case 13:t.textDirection=Rt(n,e);break;case 14:ti(t).normal=Rt(n,e);break;case 15:ti(t).position=Rt(n,e);break;case 16:ti(t).scale=Rt(n,e);break;case 40:t.contentScale=n.value;break;case 41:case 44:t.textHeight=n.value;break;case 42:t.textRotation=n.value;break;case 43:t.textWidth=n.value;break;case 45:t.textLineSpacingFactor=n.value;break;case 46:ti(t).rotation=n.value;break;case 47:(r=ti(t)).transformationMatrix??(r.transformationMatrix=[]),ti(t).transformationMatrix?.push(n.value);break;case 90:t.textColor=n.value;break;case 91:t.textBackgroundColor=n.value;break;case 92:t.textBackgroundTransparency=n.value;break;case 93:ti(t).color=n.value;break;case 110:t.planeOrigin=Rt(n,e);break;case 111:t.planeXAxisDirection=Rt(n,e);break;case 112:t.planeYAxisDirection=Rt(n,e);break;case 140:t.arrowheadSize=n.value;break;case 141:t.textBackgroundScaleFactor=n.value;break;case 142:t.textColumnWidth=n.value;break;case 143:t.textColumnGutterWidth=n.value;break;case 144:t.textColumnHeight=n.value;break;case 145:t.landingGap=n.value;break;case 170:t.textLineSpacingStyle=n.value;break;case 171:t.textAttachment=n.value;break;case 172:t.textFlowDirection=n.value;break;case 173:t.textColumnType=n.value;break;case 290:t.hasMText=n.value;break;case 291:t.textBackgroundColorOn=n.value;break;case 292:t.textFillOn=n.value;break;case 293:t.textUseAutoHeight=n.value;break;case 294:t.textColumnFlowReversed=n.value;break;case 295:t.textUseWordBreak=n.value;break;case 296:t.hasBlock=n.value;break;case 297:t.planeNormalReversed=n.value;break;case 302:n.value==="LEADER{"&&(t.leaderSections??(t.leaderSections=[]),t.leaderSections.push((function(a,l){let c,d;if(a.value!=="LEADER{")return{leaderLines:[]};let f={leaderLines:[]};for(;l.hasNext();){if((d=l.next()).code===303){As(f,c);break}switch(d.code){case 290:f.lastLeaderLinePointSet=d.value;break;case 291:f.doglegVectorSet=d.value;break;case 10:f.lastLeaderLinePoint=Rt(d,l);break;case 11:f.doglegVector=Rt(d,l);break;case 12:c??(c={}),c.start=Rt(d,l);break;case 13:c??(c={}),c.end=Rt(d,l),As(f,c),c=void 0;break;case 90:f.leaderBranchIndex=d.value;break;case 40:f.doglegLength=d.value;break;case 304:d.value==="LEADER_LINE{"&&f.leaderLines.push((function(m,g){let v,E;if(m.value!=="LEADER_LINE{")return{vertices:[]};let S={vertices:[]};for(;g.hasNext();){if((E=g.next()).code===305){As(S,v);break}switch(E.code){case 10:S.vertices.push(Rt(E,g));break;case 11:v??(v={}),v.start=Rt(E,g);break;case 12:v??(v={}),v.end=Rt(E,g),As(S,v),v=void 0;break;case 90:S.breakPointIndexes??(S.breakPointIndexes=[]),S.breakPointIndexes.push(E.value),v??(v={}),v.index=E.value;break;case 91:S.leaderLineIndex=E.value}}return S})(d,l))}}return f})(n,e)));break;case 304:n.value!=="LEADER_LINE{"&&(t.textContent=n.value,t.contentType??(t.contentType=2));break;case 340:t.textStyleId=n.value;break;case 341:t.blockContentId=n.value,ti(t).blockContentId=n.value}}}},{code:270,name:"version",parser:h},{code:340,name:"leaderStyleId",parser:h},{code:90,name:"propertyOverrideFlag",parser:h},{code:170,name:"leaderLineType",parser:h},{code:91,name:"leaderLineColor",parser:h},{code:341,name:"leaderLineTypeId",parser:h},{code:171,name:"leaderLineWeight",parser:h},{code:290,name:"landingEnabled",parser:ye},{code:291,name:"doglegEnabled",parser:ye},{code:[40,41],name:"doglegLength",parser:h},{code:342,name:"arrowheadId",parser:h},{code:42,name:"arrowheadSize",parser:h},{code:172,name:"contentType",parser:h},{code:343,name:"textStyleId",parser:h},{code:173,name:"textLeftAttachmentType",parser:h},{code:95,name:"textRightAttachmentType",parser:h},{code:174,name:"textAngleType",parser:h},{code:175,name:"textAlignmentType",parser:h},{code:92,name:"textColor",parser:h},{code:292,name:"textFrameEnabled",parser:ye},{code:344,parser:function(i,e,t){t.blockContentId=i.value,ti(t).blockContentId=i.value}},{code:93,name:"blockContentColor",parser:h},{code:10,name:"blockContentScale",parser:B},{code:43,name:"blockContentRotation",parser:h},{code:176,name:"blockContentConnectionType",parser:h},{code:293,name:"annotativeScaleEnabled",parser:ye},{code:94,parser:function(i,e,t){t.arrowheadOverrides??(t.arrowheadOverrides=[]),t.arrowheadOverrides.push({index:i.value})},isMultiple:!0},{code:345,parser:function(i,e,t){var n;((n=t).arrowheadOverrides??(n.arrowheadOverrides=[]),n.arrowheadOverrides.length||n.arrowheadOverrides.push({}),n.arrowheadOverrides[n.arrowheadOverrides.length-1]).handle=i.value},isMultiple:!0},{code:330,parser:function(i,e,t){t.blockAttributes??(t.blockAttributes=[]),t.blockAttributes.push({id:i.value})},isMultiple:!0},{code:177,parser:function(i,e,t){uo(t).index=i.value},isMultiple:!0},{code:44,parser:function(i,e,t){uo(t).width=i.value},isMultiple:!0},{code:302,parser:function(i,e,t){uo(t).text=i.value},isMultiple:!0},{code:294,name:"textDirectionNegative",parser:ye},{code:178,name:"textAlignInIPE",parser:h},{code:179,name:"textAttachmentPoint",parser:h},{code:271,name:"textAttachmentDirection",parser:h},{code:272,name:"bottomTextAttachmentDirection",parser:h},{code:273,name:"topTextAttachmentDirection",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe];function Rt(i,e){return fo(B(i,e))}function As(i,e){(e?.start||e?.end)&&(i.breaks??(i.breaks=[]),i.breaks.push(e))}function ti(i){return i.blockContent??(i.blockContent={})}function uo(i){return i.blockAttributes??(i.blockAttributes=[]),i.blockAttributes.length||i.blockAttributes.push({}),i.blockAttributes[i.blockAttributes.length-1]}var Ks=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ic(this,"parser",me(Kp,qp))}};function Pc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ic(Ks,"ForEntityName","MULTILEADER");var Zp={data:""},Jp=[{code:1},{code:90,name:"dataSize",parser:h},{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe,{code:310,name:"data",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.data??"")+i.value}],Zs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Pc(this,"parser",me(Jp,Zp))}};function Rc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Pc(Zs,"ForEntityName","OLEFRAME");var Qp={data:""},jp=[{code:1},{code:90,name:"dataSize",parser:h},{code:73,name:"quality",parser:h},{code:72,name:"tileMode",parser:h},{code:71,name:"oleObjectType",parser:h},{code:11,name:"lowerRightCorner",parser:B},{code:10,name:"upperLeftCorner",parser:B},{code:3,name:"name",parser:h},{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe,{code:310,name:"data",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.data??"")+i.value}],Js=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Rc(this,"parser",me(jp,Qp))}};Rc(Js,"ForEntityName","OLE2FRAME");var Px=((Vi={})[Vi.Link=1]="Link",Vi[Vi.Embedded=2]="Embedded",Vi[Vi.Static=3]="Static",Vi),Rx=((kr={})[kr.ModelSpace=0]="ModelSpace",kr[kr.PaperSpace=1]="PaperSpace",kr);function Lc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var em={thickness:0,extrusionDirection:{x:0,y:0,z:1},angle:0},tm=[{code:50,name:"angle",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:39,name:"thickness",parser:h},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],Qs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Lc(this,"parser",me(tm,em))}};function Dc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Lc(Qs,"ForEntityName","POINT");var nm={startWidth:0,endWidth:0,bulge:0},im=[{code:91,name:"id",parser:h},{code:[...Ns(71,75)],name:"faces",isMultiple:!0,parser:h},{code:50,name:"tangentDirection",parser:h},{code:70,name:"flag",parser:h},{code:42,name:"bulge",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:30,name:"z",parser:h},{code:20,name:"y",parser:h},{code:10,name:"x",parser:h},{code:100,name:"subclassMarker",parser:h},{code:100},...Fe],zr=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Dc(this,"parser",me(im,nm))}};function Nc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Dc(zr,"ForEntityName","VERTEX");var rm={thickness:0,flag:0,startWidth:0,endWidth:0,meshMVertexCount:0,meshNVertexCount:0,surfaceMDensity:0,surfaceNDensity:0,smoothType:0,extrusionDirection:{x:0,y:0,z:1},vertices:[]},sm=[{code:0,name:"vertices",isMultiple:!0,parser:(i,e)=>Ce(i,0,"VERTEX")?(i=e.next(),new zr().parseEntity(e,i)):Vr},{code:210,name:"extrusionDirection",parser:B},{code:75,name:"smoothType",parser:h},{code:74,name:"surfaceNDensity",parser:h},{code:73,name:"surfaceMDensity",parser:h},{code:72,name:"meshNVertexCount",parser:h},{code:71,name:"meshMVertexCount",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:70,name:"flag",parser:h},{code:39,name:"thickness",parser:h},{code:30,name:"elevation",parser:h},{code:20},{code:10},{code:66},{code:100,name:"subclassMarker",parser:h},...Fe],js=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Nc(this,"parser",me(sm,rm))}};Nc(js,"ForEntityName","POLYLINE");var Lx=((It={})[It.CLOSED_POLYLINE=1]="CLOSED_POLYLINE",It[It.CURVE_FIT=2]="CURVE_FIT",It[It.SPLINE_FIT=4]="SPLINE_FIT",It[It.POLYLINE_3D=8]="POLYLINE_3D",It[It.POLYGON_3D=16]="POLYGON_3D",It[It.CLOSED_POLYGON=32]="CLOSED_POLYGON",It[It.POLYFACE=64]="POLYFACE",It[It.CONTINUOUS=128]="CONTINUOUS",It),Dx=((Jn={})[Jn.NONE=0]="NONE",Jn[Jn.QUADRATIC=5]="QUADRATIC",Jn[Jn.CUBIC=6]="CUBIC",Jn[Jn.BEZIER=8]="BEZIER",Jn);function Oc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var am=[{code:11,name:"direction",parser:B},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],ea=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Oc(this,"parser",me(am))}};function Fc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Oc(ea,"ForEntityName","RAY");var om=[...vo("data"),{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],ta=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Fc(this,"parser",me(om))}};function Uc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Fc(ta,"ForEntityName","REGION");var lm={vertices:[],backLineVertices:[]},cm=[{code:360,name:"geometrySettingHardId",parser:h},{code:12,name:"backLineVertices",isMultiple:!0,parser:B},{code:93,name:"numberOfBackLineVertices",parser:h},{code:11,name:"vertices",isMultiple:!0,parser:B},{code:92,name:"verticesCount",parser:h},{code:[63,411],name:"indicatorColor",parser:h},{code:70,name:"indicatorTransparency",parser:h},{code:41,name:"bottomHeight",parser:h},{code:40,name:"topHeight",parser:h},{code:10,name:"verticalDirection",parser:B},{code:1,name:"name",parser:h},{code:91,name:"flag",parser:h},{code:90,name:"state",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],na=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Uc(this,"parser",me(cm,lm))}};function Bc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Uc(na,"ForEntityName","SECTION");var dm={thickness:0,rotation:0,xScale:1,obliqueAngle:0,extrusionDirection:{x:0,y:0,z:1}},um=[{code:210,name:"extrusionDirection",parser:B},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"xScale",parser:h},{code:50,name:"rotation",parser:h},{code:2,name:"shapeName",parser:h},{code:40,name:"size",parser:h},{code:10,name:"insertionPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],ia=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Bc(this,"parser",me(um,dm))}};function kc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Bc(ia,"ForEntityName","SHAPE");var hm={points:[],thickness:0,extrusionDirection:{x:0,y:0,z:1}},fm=[{code:210,name:"extrusionDirection",parser:B},{code:39,name:"thickness",parser:h},{code:[...Ns(10,14)],name:"points",isMultiple:!0,parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],ra=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){kc(this,"parser",me(fm,hm))}};function Gc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}kc(ra,"ForEntityName","SOLID");var pm=[{code:350,name:"historyObjectSoftId",parser:h},{code:100,name:"subclassMarker",parser:h},{code:2,name:"guid",parser:h},{code:290,name:"satCache",parser:h},...vo("data"),{code:70,name:"version",parser:h},{code:100},...Fe],sa=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Gc(this,"parser",me(pm))}};function Wc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Gc(sa,"ForEntityName","3DSOLID");var mm={knotTolerance:1e-6,controlTolerance:1e-6,fitTolerance:1e-9,knotValues:[],controlPoints:[],fitPoints:[]},_m=[{code:11,name:"fitPoints",isMultiple:!0,parser:B},{code:10,name:"controlPoints",isMultiple:!0,parser:B},{code:41,name:"weights",isMultiple:!0,parser:h},{code:40,name:"knots",isMultiple:!0,parser:h},{code:13,name:"endTangent",parser:B},{code:12,name:"startTangent",parser:B},{code:44,name:"fitTolerance",parser:h},{code:43,name:"controlTolerance",parser:h},{code:42,name:"knotTolerance",parser:h},{code:74,name:"numberOfFitPoints",parser:h},{code:73,name:"numberOfControlPoints",parser:h},{code:72,name:"numberOfKnots",parser:h},{code:71,name:"degree",parser:h},{code:70,name:"flag",parser:h},{code:210,name:"normal",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],aa=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Wc(this,"parser",me(_m,mm))}};Wc(aa,"ForEntityName","SPLINE");var Nx=((jt={})[jt.NONE=0]="NONE",jt[jt.CLOSED=1]="CLOSED",jt[jt.PERIODIC=2]="PERIODIC",jt[jt.RATIONAL=4]="RATIONAL",jt[jt.PLANAR=8]="PLANAR",jt[jt.LINEAR=16]="LINEAR",jt);function zc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var gm=[{code:280,name:"shadowMapSoftness",parser:h},{code:71,name:"shadowMapSize",parser:h},{code:70,name:"shadowType",parser:h},{code:292,name:"isSummerTime",parser:ye},{code:92,name:"time",parser:h},{code:91,name:"julianDay",parser:h},{code:291,name:"hasShadow",parser:ye},{code:40,name:"intensity",parser:h},{code:421,name:"lightColorInstance",parser:h},{code:63,name:"lightColorIndex",parser:h},{code:290,name:"isOn",parser:ye},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Fe.filter(i=>i.code!==100)],oa=class{parseEntity(e,t){let n={layer:""};return this.parser(t,e,n),n}constructor(){zc(this,"parser",me(gm))}};zc(oa,"ForEntityName","SUN");var nr=class{parseEntity(e,t){let n={};for(;!e.isEOF();){if(t.code===0){e.rewind();break}switch(t.code){case 100:n.subclassMarker=t.value,t=e.next();break;case 2:n.name=t.value,t=e.next();break;case 5:n.handle=t.value,t=e.next();break;case 10:n.startPoint=fo(fi(e)),t=e.lastReadGroup;break;case 11:n.directionVector=fo(fi(e)),t=e.lastReadGroup;break;case 90:n.tableValue=t.value,t=e.next();break;case 91:n.rowCount=t.value,t=e.next();break;case 92:n.columnCount=t.value,t=e.next();break;case 93:n.overrideFlag=t.value,t=e.next();break;case 94:n.borderColorOverrideFlag=t.value,t=e.next();break;case 95:n.borderLineWeightOverrideFlag=t.value,t=e.next();break;case 96:n.borderVisibilityOverrideFlag=t.value,t=e.next();break;case 141:n.rowHeightArr??(n.rowHeightArr=[]),n.rowHeightArr.push(t.value),t=e.next();break;case 142:n.columnWidthArr??(n.columnWidthArr=[]),n.columnWidthArr.push(t.value),t=e.next();break;case 280:n.version=t.value,t=e.next();break;case 310:n.bmpPreview??(n.bmpPreview=""),n.bmpPreview+=t.value,t=e.next();break;case 330:n.ownerBlockRecordSoftId=t.value,t=e.next();break;case 342:n.tableStyleId=t.value,t=e.next();break;case 343:n.blockRecordHandle=t.value,t=e.next();break;case 170:n.attachmentPoint=t.value,t=e.next();break;case 171:n.cells??(n.cells=[]),n.cells.push((function(r,a){let l=!1,c=!1,d={};for(;!r.isEOF()&&a.code!==0&&!c;)switch(a.code){case 171:if(l){c=!0;continue}d.cellType=a.value,l=!0,a=r.next();break;case 172:d.flagValue=a.value,a=r.next();break;case 173:d.mergedValue=a.value,a=r.next();break;case 174:d.autoFit=a.value,a=r.next();break;case 175:d.borderWidth=a.value,a=r.next();break;case 176:d.borderHeight=a.value,a=r.next();break;case 91:d.overrideFlag=a.value,a=r.next();break;case 178:d.virtualEdgeFlag=a.value,a=r.next();break;case 145:d.rotation=a.value,a=r.next();break;case 345:d.fieldObjetId=a.value,a=r.next();break;case 340:d.blockTableRecordId=a.value,a=r.next();break;case 146:d.blockScale=a.value,a=r.next();break;case 177:d.blockAttrNum=a.value,a=r.next();break;case 7:d.textStyle=a.value,a=r.next();break;case 140:d.textHeight=a.value,a=r.next();break;case 170:d.attachmentPoint=a.value,a=r.next();break;case 92:d.extendedCellFlags=a.value,a=r.next();break;case 285:d.rightBorderVisibility=!!(a.value??!0),a=r.next();break;case 286:d.bottomBorderVisibility=!!(a.value??!0),a=r.next();break;case 288:d.leftBorderVisibility=!!(a.value??!0),a=r.next();break;case 289:d.topBorderVisibility=!!(a.value??!0),a=r.next();break;case 301:(function(f,m,g){for(;g.code!==304;)switch(g.code){case 301:case 93:case 90:case 94:g=m.next();break;case 1:f.text=g.value,g=m.next();break;case 300:f.attrText=g.value,g=m.next();break;case 302:f.text=g.value?g.value:f.text,g=m.next();break;default:m.debug&&console.warn(`parserCellValue: Ignore code: ${g.code}, value: ${g.value}`),g=m.next()}})(d,r,a),a=r.next();break;default:return d}return l=!1,c=!1,d})(e,t)),t=e.lastReadGroup;break;default:sp(n,t,e),t=e.next()}}return n}};function Vc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}(ao="ForEntityName")in nr?Object.defineProperty(nr,ao,{value:"ACAD_TABLE",enumerable:!0,configurable:!0,writable:!0}):nr[ao]="ACAD_TABLE";var ym=[{code:11,name:"xAxisDirection",parser:B},{code:210,name:"extrusionDirection",parser:B},{code:1,name:"text",parser:h},{code:10,name:"position",parser:B},{code:3,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],la=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Vc(this,"parser",me(ym))}};Vc(la,"ForEntityName","TOLERANCE");var Ox=((Pt={})[Pt.CREATED_BY_CURVE_FIT=1]="CREATED_BY_CURVE_FIT",Pt[Pt.TANGENT_DEFINED=2]="TANGENT_DEFINED",Pt[Pt.NOT_USED=4]="NOT_USED",Pt[Pt.CREATED_BY_SPLINE_FIT=8]="CREATED_BY_SPLINE_FIT",Pt[Pt.SPLINE_CONTROL_POINT=16]="SPLINE_CONTROL_POINT",Pt[Pt.FOR_POLYLINE=32]="FOR_POLYLINE",Pt[Pt.FOR_POLYGON=64]="FOR_POLYGON",Pt[Pt.POLYFACE=128]="POLYFACE",Pt),vm=[{code:[335,343,344,91],name:"softPointers",isMultiple:!0,parser:h},{code:361,name:"sunId",parser:h},{code:431,name:"ambientLightColorName",parser:h},{code:421,name:"ambientLightColorInstance",parser:h},{code:63,name:"ambientLightColorIndex",parser:h},{code:142,name:"contrast",parser:h},{code:141,name:"brightness",parser:h},{code:282,name:"defaultLightingType",parser:h},{code:292,name:"isDefaultLighting",parser:ye},{code:348,name:"visualStyleId",parser:h},{code:333,name:"shadePlotId",parser:h},{code:332,name:"backgroundId",parser:h},{code:61,name:"majorGridFrequency",parser:h},{code:170,name:"shadePlotMode",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:346,name:"ucsBaseId",parser:h},{code:345,name:"ucsId",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:74,name:"iconFlag",parser:h},{code:71,name:"ucsPerViewport",parser:h},{code:281,name:"renderMode",parser:h},{code:1,name:"sheetName",parser:h},{code:340,name:"clippingBoundaryId",parser:h},{code:90,name:"statusBitFlags",parser:h},{code:331,name:"frozenLayerIds",isMultiple:!0,parser:h},{code:72,name:"circleZoomPercent",parser:h},{code:51,name:"viewTwistAngle",parser:h},{code:50,name:"snapAngle",parser:h},{code:45,name:"viewHeight",parser:h},{code:44,name:"backClipZ",parser:h},{code:43,name:"frontClipZ",parser:h},{code:42,name:"perspectiveLensLength",parser:h},{code:17,name:"targetPoint",parser:B},{code:16,name:"viewDirection",parser:B},{code:15,name:"gridSpacing",parser:B},{code:14,name:"snapSpacing",parser:B},{code:13,name:"snapBase",parser:B},{code:12,name:"displayCenter",parser:B},{code:69,name:"viewportId",parser:h},{code:68,name:"status",parser:h},{code:41,name:"height",parser:h},{code:40,name:"width",parser:h},{code:10,name:"viewportCenter",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Fe],ir=class{parseEntity(e,t){let n={};return me(vm)(t,e,n),n}};function Yc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}(oo="ForEntityName")in ir?Object.defineProperty(ir,oo,{value:"VIEWPORT",enumerable:!0,configurable:!0,writable:!0}):ir[oo]="VIEWPORT";var xm={brightness:50,constrast:50,fade:0},Em=[{code:14,name:"boundary",isMultiple:!0,parser:B},{code:91,name:"numberOfVertices",parser:h},{code:71,name:"boundaryType",parser:h},{code:360,name:"imageDefReactorHardId",parser:h},{code:283,name:"fade",parser:h},{code:282,name:"contrast",parser:h},{code:281,name:"brightness",parser:h},{code:280,name:"isClipping",parser:ye},{code:70,name:"displayFlag",parser:h},{code:340,name:"imageDefHardId",parser:h},{code:13,name:"imageSize",parser:B},{code:12,name:"vDirection",parser:B},{code:11,name:"uDirection",parser:B},{code:10,name:"position",parser:B},{code:90,name:"classVersion",parser:h},{code:100,name:"subclassMarker",parser:h},...Fe],ca=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Yc(this,"parser",me(Em,xm))}};Yc(ca,"ForEntityName","WIPEOUT");var Fx=((Qn={})[Qn.ShowImage=1]="ShowImage",Qn[Qn.ShowImageWhenNotAligned=2]="ShowImageWhenNotAligned",Qn[Qn.UseClippingBoundary=4]="UseClippingBoundary",Qn[Qn.Transparency=8]="Transparency",Qn);function Hc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Sm=[{code:11,name:"direction",parser:B},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Fe],da=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Hc(this,"parser",me(Sm))}};Hc(da,"ForEntityName","XLINE");var Mm=0;function Xc(i){if(!i)throw TypeError("entity cannot be undefined or null");i.handle||(i.handle=Mm++)}var bm=Object.fromEntries([Qi,Rs,er,Ds,Fs,Us,Bs,ji,ks,Gs,zs,Vs,Ys,Hs,Xs,tr,$s,qs,Os,Ks,Zs,Js,Qs,js,ea,ta,na,ia,ra,sa,aa,oa,nr,Ls,la,Ws,zr,ir,ca,da].map(i=>[i.ForEntityName,new i]));function $c(i,e){let t=[];for(;!Ce(i,0,"EOF");){if(i.code===0){if(i.value==="ENDBLK"||i.value==="ENDSEC"){e.rewind();break}let n=bm[i.value];if(n){let r=i.value;i=e.next();let a=n.parseEntity(e,i);a.type=r,Xc(a),t.push(a)}else e.debug&&console.warn(`Unsupported ENTITY type: ${i.value}`)}i=e.next()}return t}function Am(i,e){let t=null,n={};for(;!Ce(i,0,"EOF")&&!Ce(i,0,"ENDSEC");)i.code===9?t=typeof i.value=="string"?i.value:null:t!=null&&(i.code===10?n[t]=fi(e):n[t]=i.value),i=e.next();return n}var ni=[{code:100,name:"subclassMarker",parser:h},{code:330,name:"ownerObjectId",parser:h},{code:102,isMultiple:!0,parser(i,e){for(;!Ce(i,0,"EOF")&&!Ce(i,102,"}");)i=e.next()}},{code:5,name:"handle",parser:h}],Tm=[{code:70,name:"flag",parser:h},{code:2,name:"appName",parser:h},{code:100,name:"subclassMarker",parser:h},...ni],wm=me(Tm),Cm=me([{code:310,name:"bmpPreview",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.bmpPreview??"")+i.value},{code:281,name:"scalability",parser:h},{code:280,name:"explodability",parser:h},{code:70,name:"insertionUnits",parser:h},{code:340,name:"layoutObjects",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni]),Im=me([...yo.map(i=>({...i,parser:h})),{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},{code:105,name:"handle",parser:h},...ni.filter(i=>i.code!==5)]),Pm=me([{code:347,name:"materialObjectId",parser:h},{code:390,name:"plotStyleNameObjectId",parser:h},{code:370,name:"lineweight",parser:h},{code:290,name:"isPlotting",parser:ye},{code:6,name:"lineType",parser:h},{code:62,name:"colorIndex",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni]),Rm=me([{code:9,name:"text",parser:h},{code:45,name:"offsetY",parser:h},{code:44,name:"offsetX",parser:h},{code:50,name:"rotation",parser:h},{code:46,name:"scale",parser:h},{code:340,name:"styleObjectId",parser:h},{code:75,name:"shapeNumber",parser:h},{code:74,name:"elementTypeFlag",parser:h},{code:49,name:"elementLength",parser:h}],{elementTypeFlag:0,elementLength:0}),Lm=me([{code:49,name:"pattern",parser(i,e){let t={};return Rm(i,e,t),t},isMultiple:!0},{code:40,name:"totalPatternLength",parser:h},{code:73,name:"numberOfLineTypes",parser:h},{code:72,parser:h},{code:3,name:"description",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni]),Dm=me([{code:1e3,name:"extendedFont",parser:h},{code:1001},{code:4,name:"bigFont",parser:h},{code:3,name:"font",parser:h},{code:42,name:"lastHeight",parser:h},{code:71,name:"textGenerationFlag",parser:h},{code:50,name:"obliqueAngle",parser:h},{code:41,name:"widthFactor",parser:h},{code:40,name:"fixedTextHeight",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni]),Nm=[{code:13,name:"orthographicOrigin",parser:B},{code:71,name:"orthographicType",parser:h},{code:346,name:"baseUcsHandle",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"isOrthographic",parser:ye},{code:12,name:"yAxis",parser:B},{code:11,name:"xAxis",parser:B},{code:10,name:"origin",parser:B},{code:70,name:"flag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni],Om=me(Nm),Fm=[{code:346,name:"baseUcsId",parser:h},{code:345,name:"ucsId",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:361,name:"sunHardId",parser:h},{code:348,name:"styleHardId",parser:h},{code:334,name:"liveSectionSoftId",parser:h},{code:332,name:"backgroundSoftId",parser:h},{code:73,name:"isPlottable",parser:ye},{code:72,name:"isUcsAssociated",parser:ye},{code:281,name:"renderMode",parser:h},{code:71,name:"viewMode",parser:h},{code:50,name:"twistAngle",parser:h},{code:44,name:"backClippingPlane",parser:h},{code:43,name:"frontClippingPlane",parser:h},{code:42,name:"lensLength",parser:h},{code:12,name:"target",parser:B},{code:11,name:"direction",parser:B},{code:10,name:"center",parser:B},{code:41,name:"width",parser:h},{code:40,name:"height",parser:h},{code:70,name:"flag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni],Um=me(Fm),Bm=me([{code:[63,421,431],name:"ambientColor",parser:h},{code:142,name:"contrast",parser:h},{code:141,name:"brightness",parser:h},{code:282,name:"defaultLightingType",parser:h},{code:292,name:"isDefaultLightingOn",parser:ye},{code:348,name:"visualStyleObjectId",parser:h},{code:333,name:"shadePlotObjectId",parser:h},{code:332,name:"backgroundObjectId",parser:h},{code:61,name:"majorGridLines",parser:h},{code:170,name:"shadePlotSetting",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:74,name:"ucsIconSetting",parser:h},{code:71,name:"viewMode",parser:h},{code:281,name:"renderMode",parser:h},{code:1,name:"styleSheet",parser:h},{code:[331,441],name:"frozenLayers",parser:h,isMultiple:!0},{code:72,name:"circleSides",parser:h},{code:51,name:"viewTwistAngle",parser:h},{code:50,name:"snapRotationAngle",parser:h},{code:45,name:"viewHeight",parser:h},{code:44,name:"backClippingPlane",parser:h},{code:43,name:"frontClippingPlane",parser:h},{code:42,name:"lensLength",parser:h},{code:41,name:"aspectRatio",parser:h},{code:40,name:"viewHeight",parser:h},{code:17,name:"viewTarget",parser:B},{code:16,name:"viewDirectionFromTarget",parser:B},{code:15,name:"gridSpacing",parser:B},{code:14,name:"snapSpacing",parser:B},{code:13,name:"snapBasePoint",parser:B},{code:12,name:"center",parser:B},{code:11,name:"upperRightCorner",parser:B},{code:10,name:"lowerLeftCorner",parser:B},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ni]),km={APPID:wm,BLOCK_RECORD:Cm,DIMSTYLE:Im,LAYER:Pm,LTYPE:Lm,STYLE:Dm,UCS:Om,VIEW:Um,VPORT:Bm},Gm=me([{code:70,name:"maxNumberOfEntries",parser:h},{code:100,name:"subclassMarker",parser:h},{code:330,name:"ownerObjectId",parser:h},{code:102,parser:An},{code:102,parser:An},{code:102,parser:An},{code:360,isMultiple:!0},{code:5,name:"handle",parser:h},{code:2,name:"name",parser:h}]);function Wm(i,e){let t={};for(;!Ce(i,0,"EOF")&&!Ce(i,0,"ENDSEC");){if(Ce(i,0,"TABLE")){i=e.next();let n={entries:[]};Gm(i,e,n),t[n.name]=n}if(Ce(i,0)&&!Ce(i,0,"ENDTAB")){let n=i.value;i=e.next();let r=km[n];if(!r){e.debug&&console.warn(`parseTable: Invalid table name '${n}'`),i=e.next();continue}let a={};r(i,e,a),n==="VPORT"&&(a.lowerLeftCorner==null&&(a.lowerLeftCorner={x:0,y:0}),a.upperRightCorner==null&&(a.upperRightCorner={x:1,y:1}),a.center==null&&(a.center={x:0,y:0}),a.snapBasePoint==null&&(a.snapBasePoint={x:0,y:0}),a.snapSpacing==null&&(a.snapSpacing={x:0,y:0}),a.gridSpacing==null&&(a.gridSpacing={x:0,y:0}),a.viewDirectionFromTarget==null&&(a.viewDirectionFromTarget={x:0,y:0,z:1}),a.viewTarget==null&&(a.viewTarget={x:0,y:0,z:0})),t[n]?.entries.push(a)}i=e.next()}return t}function zm(i,e){let t={};for(;!Ce(i,0,"EOF")&&!Ce(i,0,"ENDSEC");){if(Ce(i,0,"BLOCK")){let n=Vm(i=e.next(),e);Xc(n),n.name&&(t[n.name]=n)}i=e.next()}return t}function Vm(i,e){let t={};for(;!Ce(i,0,"EOF");){if(Ce(i,0,"ENDBLK")){for(i=e.next();!Ce(i,0,"EOF");){if(Ce(i,100,"AcDbBlockEnd"))return t;i=e.next()}break}switch(i.code){case 1:t.xrefPath=i.value;break;case 2:t.name=i.value;break;case 3:t.name2=i.value;break;case 5:t.handle=i.value;break;case 8:t.layer=i.value;break;case 10:t.position=fi(e);break;case 67:t.paperSpace=!!i.value&&i.value==1;break;case 70:i.value!==0&&(t.type=i.value);break;case 100:break;case 330:t.ownerHandle=i.value;break;case 0:t.entities=$c(i,e)}i=e.next()}return t}function Ym(i,e){let t={name:"ACAD_EVALUATION_GRAPH",handle:"",ownerObjectId:"0",nodeObjectHardIds:[]};for(i=e.next();i.code!==0;){switch(i.code){case 5:t.handle=String(i.value);break;case 330:t.ownerObjectId=String(i.value);break;case 360:t.nodeObjectHardIds.push(String(i.value));break;case 100:i.value==="AcDbEvalGraph"&&(t.subclassMarker="AcDbEvalGraph")}i=e.next()}return t}function Hm(i,e){let t={name:"ACSH_HISTORY_CLASS",handle:"",ownerObjectId:"0"};for(i=e.next();i.code!==0;){switch(i.code){case 5:t.handle=String(i.value);break;case 330:t.ownerObjectId=String(i.value);break;case 360:t.evalGraphHardId=String(i.value);break;case 100:i.value==="AcDbShHistory"&&(t.subclassMarker="AcDbShHistory")}i=e.next()}return t}function Tn(i,e,t,n,r=!1,a){let l=t(),c="header",d=[],f=[];for(i=e.next();i.code!==0;){switch(i.code){case 5:l.handle=String(i.value);break;case 330:l.ownerObjectId=String(i.value);break;case 100:i.value==="AcDbShHistoryNode"?c="matrix":typeof i.value=="string"&&i.value.startsWith("AcDbSh")&&i.value!=="AcDbShHistoryNode"&&(c="primitive",a?.(i.value));break;case 1:r&&(c="acis",f.push(String(i.value)));break;case 3:r&&f.push(String(i.value));break;default:if(c==="matrix"&&i.code>=40&&i.code<=55){let m=Number(i.value);Number.isFinite(m)&&d.push(m)}else if(c==="primitive"&&i.code>=40&&i.code<=99){let m=Number(i.value);Number.isFinite(m)&&n?.(i.code,m,l)}}i=e.next()}return d.length===16&&(l.transform=d),f.length>0&&(l.acisData=up(f)),l}function Xm(i){let e={};for(let t of Object.values(i))for(let n of t)n.handle&&(e[String(n.handle).toUpperCase()]=n);return e}function $m(i,e,t){i===40?t.length=e:i===41?t.width=e:i===42&&(t.height=e)}function qc(i,e,t){i===40?t.majorRadius=e:i===41?t.minorRadius=e:i===42?t.height=e:i===43&&(t.topMajorRadius=e)}function qm(i,e,t){qc(i,e,t)}function Km(i,e,t){i===40?t.length=e:i===41?t.width=e:i===42&&(t.height=e)}function Zm(i,e,t){i===41&&(t.radius=e)}function Jm(i,e){return Tn(i,e,()=>({name:"ACSH_BOX_CLASS",handle:"",ownerObjectId:"0"}),$m)}function Qm(i,e){return Tn(i,e,()=>({name:"ACSH_CYLINDER_CLASS",handle:"",ownerObjectId:"0"}),qm)}function jm(i,e){let t=!1;return Tn(i,e,()=>({name:"ACSH_CONE_CLASS",handle:"",ownerObjectId:"0"}),(n,r,a)=>{t?n===40?a.topRadius=r:n===41?a.baseRadius=r:n===42?a.height=r:n===43&&(a.minorRadius=r):qc(n,r,a)},!1,n=>{n==="AcDbShCone"&&(t=!0)})}function e_(i,e){return Tn(i,e,()=>({name:"ACSH_WEDGE_CLASS",handle:"",ownerObjectId:"0"}),Km)}function t_(i,e){return Tn(i,e,()=>({name:"ACSH_SWEEP_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function n_(i,e){return Tn(i,e,()=>({name:"ACSH_BREP_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function i_(i,e){return Tn(i,e,()=>({name:"ACSH_EXTRUSION_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function r_(i,e){return Tn(i,e,()=>({name:"ACSH_BOOLEAN_CLASS",handle:"",ownerObjectId:"0"}))}function s_(i,e){return Tn(i,e,()=>({name:"ACSH_FILLET_CLASS",handle:"",ownerObjectId:"0"}),Zm)}function a_(i,e){return Tn(i,e,()=>({name:"ACSH_REVOLVE_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function o_(i,e){return Tn(i,e,()=>({name:"ACSH_LOFT_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}var l_={ACSH_HISTORY_CLASS:Hm,ACAD_EVALUATION_GRAPH:Ym,ACSH_BOX_CLASS:Jm,ACSH_CYLINDER_CLASS:Qm,ACSH_CONE_CLASS:jm,ACSH_WEDGE_CLASS:e_,ACSH_SWEEP_CLASS:t_,ACSH_BREP_CLASS:n_,ACSH_EXTRUSION_CLASS:i_,ACSH_BOOLEAN_CLASS:r_,ACSH_FILLET_CLASS:s_,ACSH_REVOLVE_CLASS:a_,ACSH_LOFT_CLASS:o_},In=[{code:330,name:"ownerObjectId",parser:h},{code:102,parser:An},{code:102,parser:An},{code:102,parser:An},{code:5,name:"handle",parser:h}],c_=[{code:75,name:"hasLastPointRef",parser:ye},{code:1,name:"pointRefs",parser:function(i,e){let t={className:i.value};for(;;)switch((i=e.next()).code){case 72:t.objectOsnapType=i.value;continue;case 331:t.mainObjectId=i.value;continue;case 73:t.mainObjectSubentityType=i.value;continue;case 91:t.mainObjectGsMarker=i.value;continue;case 301:t.mainObjectXrefHandle=i.value;continue;case 40:t.nearOsnapGeometryParameter=i.value;continue;case 10:{let n=B(i,e);t.osnapPoint="z"in n?n:{...n,z:0}}continue;case 332:t.intersectionObjectId=i.value;continue;case 74:t.intersectionObjectSubentityType=i.value;continue;case 92:t.intersectionObjectGsMarker=i.value;continue;case 302:t.intersectionObjectXrefHandle=i.value;continue;default:return e.rewind(),t}},isMultiple:!0},{code:71,name:"rotatedDimensionType",parser:h},{code:70,name:"transSpaceFlag",parser:ye},{code:90,name:"associativityFlag",parser:h},{code:330,name:"dimensionObjectId",parser:h},{code:100,name:"subclassMarker",parser:h},...In],d_=[{code:3,name:"entries",parser:(i,e)=>{let t={name:i.value};return(i=e.next()).code===350?t.objectSoftId=i.value:i.code===360?t.objectHardId=i.value:e.rewind(),t},isMultiple:!0},{code:281,name:"recordCloneFlag",parser:h},{code:280,name:"isHardOwned",parser:ye},{code:100,name:"subclassMarker",parser:h},...In],u_=[{code:340,name:"entityIds",parser:h,isMultiple:!0},{code:71,name:"isSelectable",parser:ye},{code:70,name:"isUnnamed",parser:ye},{code:300,name:"description",parser:h},{code:100,name:"subclassMarker",parser:h},...In],h_=[{code:330,name:"imageDefReactorIdSoft",isMultiple:!0,parser:h},{code:90,name:"version",parser:h},{code:1,name:"fileName",parser:h},{code:10,name:"size",parser:B},{code:11,name:"sizeOfOnePixel",parser:B},{code:280,name:"isLoaded",parser:h},{code:281,name:"resolutionUnits",parser:h},{code:100,name:"subclassMarker",parser:h}],f_=[{code:8,name:"layerNames",parser:h,isMultiple:!0},{code:100,name:"subclassMarker",parser:h},{code:100,name:"filterSubclassMarker",parser:h},...In],p_=[{code:90,name:"idBufferEntryCounts",parser:h,isMultiple:!0},{code:360,name:"idBufferIds",parser:h,isMultiple:!0},{code:8,name:"layerNames",parser:h,isMultiple:!0},{code:100,name:"subclassMarker",parser:h},{code:40,name:"timeStamp",parser:h},{code:100,name:"indexSubclassMarker",parser:h},...In],Kc=[{code:333,name:"shadePlotId",parser:h},{code:149,name:"imageOriginY",parser:h},{code:148,name:"imageOriginX",parser:h},{code:147,name:"scaleFactor",parser:h},{code:78,name:"shadePlotCustomDPI",parser:h},{code:77,name:"shadePlotResolution",parser:h},{code:76,name:"shadePlotMode",parser:h},{code:75,name:"standardScaleType",parser:h},{code:7,name:"currentStyleSheet",parser:h},{code:74,name:"plotType",parser:h},{code:73,name:"plotRotation",parser:h},{code:72,name:"plotPaperUnit",parser:h},{code:70,name:"layoutFlag",parser:h},{code:143,name:"printScaleDenominator",parser:h},{code:142,name:"printScaleNumerator",parser:h},{code:141,name:"windowAreaYMax",parser:h},{code:140,name:"windowAreaXMax",parser:h},{code:49,name:"windowAreaYMin",parser:h},{code:48,name:"windowAreaXMin",parser:h},{code:47,name:"plotOriginY",parser:h},{code:46,name:"plotOriginX",parser:h},{code:45,name:"paperHeight",parser:h},{code:44,name:"paperWidth",parser:h},{code:43,name:"marginTop",parser:h},{code:42,name:"marginRight",parser:h},{code:41,name:"marginBottom",parser:h},{code:40,name:"marginLeft",parser:h},{code:6,name:"plotViewName",parser:h},{code:4,name:"paperSize",parser:h},{code:2,name:"configName",parser:h},{code:1,name:"pageSetupName",parser:h},{code:100,name:"subclassMarker",parser:h},...In],m_=[{code:346,name:"orthographicUcsId",parser:h},{code:345,name:"namedUcsId",parser:h},{code:331,name:"viewportId",parser:h},{code:330,name:"paperSpaceTableId",parser:h},{code:76,name:"orthographicType",parser:h},{code:17,name:"ucsYAxis",parser:B},{code:16,name:"ucsXAxis",parser:B},{code:13,name:"ucsOrigin",parser:B},{code:146,name:"elevation",parser:h},{code:15,name:"maxExtent",parser:B},{code:14,name:"minExtent",parser:B},{code:12,name:"insertionPoint",parser:B},{code:11,name:"maxLimit",parser:B},{code:10,name:"minLimit",parser:B},{code:71,name:"tabOrder",parser:h},{code:70,name:"controlFlag",parser:h},{code:1,name:"layoutName",parser:h},{code:100,name:"subclassMarker",parser:h},...Kc],__=[{code:179,name:"unknown1",parser:h},{code:170,name:"contentType",parser:h},{code:171,name:"drawMLeaderOrderType",parser:h},{code:172,name:"drawLeaderOrderType",parser:h},{code:90,name:"maxLeaderSegmentPoints",parser:h},{code:40,name:"firstSegmentAngleConstraint",parser:h},{code:41,name:"secondSegmentAngleConstraint",parser:h},{code:173,name:"leaderLineType",parser:h},{code:91,name:"leaderLineColor",parser:h},{code:340,name:"leaderLineTypeId",parser:h},{code:92,name:"leaderLineWeight",parser:h},{code:290,name:"landingEnabled",parser:ye},{code:42,name:"landingGap",parser:h},{code:291,name:"doglegEnabled",parser:ye},{code:43,name:"doglegLength",parser:h},{code:3,name:"description",parser:h},{code:341,name:"arrowheadId",parser:h},{code:44,name:"arrowheadSize",parser:h},{code:300,name:"defaultMTextContents",parser:h},{code:342,name:"textStyleId",parser:h},{code:174,name:"textLeftAttachmentType",parser:h},{code:175,name:"textAngleType",parser:h},{code:176,name:"textAlignmentType",parser:h},{code:178,name:"textRightAttachmentType",parser:h},{code:93,name:"textColor",parser:h},{code:45,name:"textHeight",parser:h},{code:292,name:"textFrameEnabled",parser:ye},{code:297,name:"textAlignAlwaysLeft",parser:ye},{code:46,name:"alignSpace",parser:h},{code:343,name:"blockContentId",parser:h},{code:94,name:"blockContentColor",parser:h},{code:47,name:"blockContentScale.x",parser:h},{code:49,name:"blockContentScale.y",parser:h},{code:140,name:"blockContentScale.z",parser:h},{code:293,name:"blockContentScaleEnabled",parser:ye},{code:141,name:"blockContentRotation",parser:h},{code:294,name:"blockContentRotationEnabled",parser:ye},{code:177,name:"blockContentConnectionType",parser:h},{code:142,name:"scale",parser:h},{code:295,name:"overwritePropertyValue",parser:ye},{code:296,name:"annotative",parser:ye},{code:143,name:"breakGapSize",parser:h},{code:271,name:"textAttachmentDirection",parser:h},{code:272,name:"bottomTextAttachmentDirection",parser:h},{code:273,name:"topTextAttachmentDirection",parser:h},{code:298,name:"unknown2",parser:h},{code:100,name:"subclassMarker",parser:h},...In];function Ts(i,e,t){i.elements||(i.elements=[]);let n=i.elements.find(r=>r[e]===void 0);if(n){n[e]=t;return}i.elements.push({[e]:t})}var g_=[{code:6,parser:function({value:i},e,t){Ts(t,"lineType",i)},isMultiple:!0},{code:62,parser:function({value:i},e,t){if(t.fillColorIndex===void 0&&!t.elements?.length){t.fillColorIndex=i;return}Ts(t,"colorIndex",i)},isMultiple:!0},{code:420,parser:function({value:i},e,t){if(t.fillColor===void 0&&!t.elements?.length){t.fillColor=i;return}Ts(t,"color",i)},isMultiple:!0},{code:49,parser:function({value:i},e,t){Ts(t,"offset",i)},isMultiple:!0},{code:71,name:"elementCount",parser:h},{code:52,name:"endAngle",parser:h},{code:51,name:"startAngle",parser:h},{code:3,name:"description",parser:h},{code:70,name:"flags",parser:h},{code:2,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...In],y_=[{code:40,name:"wcsToOCSTransform",parser:rc},{code:40,name:"ocsToWCSTransform",parser:rc},{code:41,name:"backClippingDistance",parser:h},{code:73,name:"isBackClipping",parser:ye,pushContext:!0},{code:40,name:"frontClippingDistance",parser:h},{code:72,name:"isFrontClipping",parser:ye,pushContext:!0},{code:71,name:"isClipBoundaryDisplayed",parser:ye},{code:11,name:"position",parser:B},{code:210,name:"normal",parser:B},{code:10,name:"boundaryVertices",parser:B,isMultiple:!0},{code:70,name:"boundaryCount",parser:h},{code:100,name:"subclassMarker",parser:h},{code:100},...In];function rc(i,e){let t=[];for(let n=0;n<3&&Ce(i,40);++n){let r=[];for(let a=0;a<4&&Ce(i,40);++a)r.push(i.value),i=e.next();t.push(r)}return e.rewind(),t}var v_=[{code:280,name:"cloneFlag",parser(i,e,t){var n,r;let a=i.value;for(i=e.next(),t.data=[];1<=(n=i.code)&&n<=369&&n!==5&&n!==105;)t.data.push(310<=(r=i).code&&r.code<=319&&typeof r.value=="string"?{...r,value:r.value.toUpperCase()}:r),i=e.next();return e.rewind(),a}},{code:100,name:"subclassMarker",parser:h},...In],x_={LAYOUT:m_,PLOTSETTINGS:Kc,DICTIONARY:d_,SPATIAL_FILTER:y_,IMAGEDEF:h_,MLEADERSTYLE:__,MLINESTYLE:g_,GROUP:u_,LAYER_FILTER:f_,LAYER_INDEX:p_,DIMASSOC:c_,XRECORD:v_};function E_(i,e){let t=[];for(;i.code!==0||!["EOF","ENDSEC"].includes(String(i.value));){let r=String(i.value),a=x_[r],l=l_[r];if(i.code===0&&l)t.push(l(i,e)),i=e.lastReadGroup;else if(i.code===0&&a?.length){let c=me(a),d={name:r};c(i=e.next(),e,d)?(t.push(d),i=e.peek()):i=e.next()}else i=i.code===0?(function(c,d){let f=d.next();for(;f.code!==0;)f=d.next();return f})(0,e):e.next()}let n=tp(t,({name:r})=>r);return{byName:n,byHandle:Xm(n)}}var ho="ASM_Data";function S_(i){return String(i).trim().toUpperCase()}function M_(i,e){let t={};for(;i.code!==0||!["EOF","ENDSEC"].includes(String(i.value));)if(i.code===0&&i.value==="ACDSRECORD"){let n=(function(r){let a,l,c={},d=r.next();for(;d.code!==0;){switch(d.code){case 320:a=S_(String(d.value));break;case 2:var f;c[f=l=String(d.value)]??(c[f]=[]);break;case 310:l&&c[l].push(String(d.value))}d=r.next()}let m=c[ho]??[];return{ownerHandle:a,dataType:m.length>0?ho:void 0,hexChunks:m}})(e);if(n.ownerHandle&&n.dataType===ho&&n.hexChunks.length>0){let r=(function(a){let l=a.replace(/\s+/g,"");if(l.length===0)return new Uint8Array(0);if(l.length%2!=0)return;let c=l.length/2,d=new Uint8Array(c);for(let f=0;f<c;f++){let m=Number.parseInt(l.slice(2*f,2*f+2),16);if(m<0||m>255)return;d[f]=m}return d})(n.hexChunks.join(""));r&&(t[n.ownerHandle]=r)}i=e.lastReadGroup}else i.code,i=e.next();return{byOwnerHandle:t}}var rr=new Uint8Array([...new TextEncoder().encode(`AutoCAD Binary DXF\r
`),26,0]),b_=new Set(Lt(290,300)),A_=new Set([...Lt(60,80),...Lt(170,180),...Lt(270,290),...Lt(370,390),...Lt(400,410),...Lt(1060,1071)]),T_=new Set([...Lt(90,100),...Lt(420,430),...Lt(440,460),1071]),w_=new Set(Lt(160,170)),C_=new Set([...Lt(10,60),...Lt(110,150),...Lt(210,240),...Lt(460,470),...Lt(1010,1060)]),I_=new Set([...Lt(310,320),1004]);function Zc(i){if(i.length<rr.length)return!1;for(let e=0;e<rr.length;e++)if(i[e]!==rr[e])return!1;return!0}function P_(i){return(i.charCodeAt(0)===65279?i.slice(1):i).startsWith("AutoCAD Binary DXF")}function R_(i,e={}){if(!Zc(i))throw Error("Not a binary DXF file.");let{dxfVersion:t,encoding:n,r12:r}=(function(f,m,g){let v,E=!(function(P){let U=rr.length;return P.length<U+9||(P[U]===0&&P[U+1]===0?ac(P.subarray(U+2,U+9))==="SECTION":P[U]!==0||ac(P.subarray(U+1,U+8))!=="SECTION")})(f),S=new DataView(f.buffer,f.byteOffset,f.byteLength),C=sc(g),b="AC1009",A=m,L=rr.length,I=Math.min(f.length,L+8192);for(;L<I;){let[P,U]=ws(f,L,E),[H,j]=Cs(f,S,U,P,A,C);if(P===9&&H==="$ACADVER"){let[de,Re]=ws(f,j,E),[Ee,Le]=Cs(f,S,Re,de,"utf-8",C);de===1&&(b=Ee),L=Le;continue}if(P===9&&H==="$DWGCODEPAGE"){let[de,Re]=ws(f,j,E),[Ee,Le]=Cs(f,S,Re,de,"ascii",C);(de===3||de===1)&&(v=Ee),L=Le;continue}if(L=j,P===0&&(H==="ENDSEC"||H==="EOF"))break}return b>="AC1021"?A="utf-8":v&&(A=(function(P){let U=/^ANSI_(\d+)$/i.exec(P);if(!U)return;let H=U[1];return H==="1252"?"windows-1252":H==="949"?"euc-kr":`windows-${H}`})(v)??m),{dxfVersion:b,encoding:A,r12:E}})(i,e.encoding??"windows-1252",e.encodingFailureFatal??!1),a=[],l=new DataView(i.buffer,i.byteOffset,i.byteLength),c=sc(e.encodingFailureFatal??!1),d=rr.length;for(;d<i.length;){let[f,m]=ws(i,d,r),[g,v]=Cs(i,l,d=m,f,n,c);if(d=v,a.push(String(f),g),f===0&&g==="EOF")break}if(a.length<2||a[a.length-1]!=="EOF")throw Error(`Binary DXF ended without EOF group (version ${t}, offset ${d}).`);return a}function ws(i,e,t){if(t){let n=i[e];return e+=1,n===255&&(n=i[e]|i[e+1]<<8,e+=2),[n,e]}return[i[e]|i[e+1]<<8,e+2]}function Cs(i,e,t,n,r,a){var l,c;let d;if(I_.has(n)){let g=i[t];t+=1;let v=i.subarray(t,t+g);return t+=g,[(function(E){let S="";for(let C=0;C<E.length;C++)S+=E[C].toString(16).padStart(2,"0");return S})(v),t]}if(b_.has(n))return[i[t]!==0?"1":"0",t+1];if(A_.has(n))return[String(e.getInt16(t,!0)),t+2];if(T_.has(n))return[String(e.getInt32(t,!0)),t+4];if(w_.has(n))return[String(Number(e.getBigInt64(t,!0))),t+8];if(C_.has(n))return[String(e.getFloat64(t,!0)),t+8];let f=t,m=f;for(;m<i.length&&i[m]!==0;)m++;return[(l=a,c=r,(d=l.byEncoding.get(c))||(d=new TextDecoder(c,{fatal:l.fatal}),l.byEncoding.set(c,d)),d).decode(i.subarray(f,m)),m+1]}function sc(i){return{fatal:i,byEncoding:new Map}}function Lt(i,e){let t=[];for(let n=i;n<e;n++)t.push(n);return t}function ac(i){return new TextDecoder("ascii").decode(i)}function Jc(i){if(P_(i.charCodeAt(0)===65279?i.slice(1):i))throw Error("Binary DXF cannot be parsed from a text string. Read the file as ArrayBuffer/Uint8Array and use DxfParser.parseBuffer() instead.");return(i.charCodeAt(0)===65279?i.slice(1):i).split(/\r\n|\r|\n/g)}function L_(i,e={}){return Zc(i)?R_(i,{encoding:e.encoding,encodingFailureFatal:e.encodingFailureFatal}):Jc(new TextDecoder(e.encoding??"utf-8",{fatal:e.encodingFailureFatal??!1}).decode(i))}function Ps(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var _o=class{constructor(){Ps(this,"encoding","utf-8"),Ps(this,"encodingFailureFatal",!1),Ps(this,"thumbnailImageFormat","base64")}},ua=class extends EventTarget{parseSync(e,t=!1){return this.parseLines(Jc(e),t)}parseBuffer(e,t=!1){return this.parseLines(L_(e,{encoding:this._options.encoding,encodingFailureFatal:this._options.encodingFailureFatal}),t)}parseStream(e){let t=[],n=this;return new Promise((r,a)=>{e.on("data",l=>{typeof l=="string"?t.push(new TextEncoder().encode(l)):t.push(l)}),e.on("end",()=>{try{let l=t.reduce((f,m)=>f+m.length,0),c=new Uint8Array(l),d=0;for(let f of t)c.set(f,d),d+=f.length;r(n.parseBuffer(c))}catch(l){a(l)}}),e.on("error",l=>{a(l)})})}async parseFromUrl(e,t){let n=await fetch(e,t);if(!n.ok)throw Error(`Failed to fetch DXF: ${n.status} ${n.statusText}`);let r=await n.arrayBuffer();if(r.byteLength===0)throw Error(`Failed to fetch DXF: empty response body from ${e}`);return this.parseBuffer(new Uint8Array(r))}parseLines(e,t=!1){let n=new po(e,t);if(!n.hasNext())throw Error("Empty file");return this.parseAll(n)}parseAll(e){let t={header:{},blocks:{},entities:[],tables:{},objects:{byName:{},byHandle:{},byTree:void 0},acdsData:{byOwnerHandle:{}}},n=e.next();for(;!Ce(n,0,"EOF");)Ce(n,0,"SECTION")&&(Ce(n=e.next(),2,"HEADER")?t.header=Am(n=e.next(),e):Ce(n,2,"CLASSES")?kf(n=e.next(),e,t):Ce(n,2,"BLOCKS")?t.blocks=zm(n=e.next(),e):Ce(n,2,"ENTITIES")?t.entities=$c(n=e.next(),e):Ce(n,2,"TABLES")?t.tables=Wm(n=e.next(),e):Ce(n,2,"OBJECTS")?t.objects=E_(n=e.next(),e):Ce(n,2,"THUMBNAILIMAGE")?t.thumbnailImage=(function(r,a,l="base64"){let c,d="",f=0;for(;!Ce(r,0,"EOF")&&!Ce(r,0,"ENDSEC");)r.code===90?f=r.value:r.code===310&&(d+=r.value),r=a.next();if(l==="hex")c=d;else{let m=(function(g){let v=g.length/2,E=new Uint8Array(v);for(let S=0;S<v;S++)E[S]=parseInt(g.substr(2*S,2),16);return E})(d);c=l==="buffer"?m:(function(g){let v="";for(let E=0;E<g.length;E++)v+=String.fromCharCode(g[E]);return btoa(v)})(m)}return{size:f,data:c}})(n=e.next(),e,this._options.thumbnailImageFormat):Ce(n,2,"ACDSDATA")&&(t.acdsData=M_(n=e.next(),e))),n=e.next();return t}constructor(e={}){super(),Ps(this,"_options",void 0);let t=new _o;this._options=Object.assign(t,e)}},Ux=((en={})[en.NOT_APPLICABLE=0]="NOT_APPLICABLE",en[en.KEEP_EXISTING=1]="KEEP_EXISTING",en[en.USE_CLONE=2]="USE_CLONE",en[en.XREF_VALUE_NAME=3]="XREF_VALUE_NAME",en[en.VALUE_NAME=4]="VALUE_NAME",en[en.UNMANGLE_NAME=5]="UNMANGLE_NAME",en),Bx=((Yi={})[Yi.NOUNIT=0]="NOUNIT",Yi[Yi.CENTIMETERS=2]="CENTIMETERS",Yi[Yi.INCH=5]="INCH",Yi),kx=((Gr={})[Gr.PSLTSCALE=1]="PSLTSCALE",Gr[Gr.LIMCHECK=2]="LIMCHECK",Gr),Gx=((Hi={})[Hi.INCHES=0]="INCHES",Hi[Hi.MILLIMETERS=1]="MILLIMETERS",Hi[Hi.PIXELS=2]="PIXELS",Hi),Wx=((tn={})[tn.LAST_SCREEN_DISPLAY=0]="LAST_SCREEN_DISPLAY",tn[tn.DRAWING_EXTENTS=1]="DRAWING_EXTENTS",tn[tn.DRAWING_LIMITS=2]="DRAWING_LIMITS",tn[tn.VIEW_SPECIFIED=3]="VIEW_SPECIFIED",tn[tn.WINDOW_SPECIFIED=4]="WINDOW_SPECIFIED",tn[tn.LAYOUT_INFORMATION=5]="LAYOUT_INFORMATION",tn),zx=((jn={})[jn.AS_DISPLAYED=0]="AS_DISPLAYED",jn[jn.WIREFRAME=1]="WIREFRAME",jn[jn.HIDDEN=2]="HIDDEN",jn[jn.RENDERED=3]="RENDERED",jn),Vx=((nn={})[nn.DRAFT=0]="DRAFT",nn[nn.PREVIEW=1]="PREVIEW",nn[nn.NORMAL=2]="NORMAL",nn[nn.PRESENTATION=3]="PRESENTATION",nn[nn.MAXIMUM=4]="MAXIMUM",nn[nn.CUSTOM=5]="CUSTOM",nn),Yx=((ei={})[ei.NONE=0]="NONE",ei[ei.AbsoluteRotation=1]="AbsoluteRotation",ei[ei.TextEmbedded=2]="TextEmbedded",ei[ei.ShapeEmbedded=4]="ShapeEmbedded",ei),Hx=((lo={})[lo.PaperSpace=1]="PaperSpace",lo),Xx=((Xi={})[Xi.XrefDependent=16]="XrefDependent",Xi[Xi.XrefResolved=32]="XrefResolved",Xi[Xi.Referenced=64]="Referenced",Xi),$x=((rn={})[rn.Off=0]="Off",rn[rn.Perspective=1]="Perspective",rn[rn.ClipFront=2]="ClipFront",rn[rn.ClipBack=4]="ClipBack",rn[rn.UcsFollow=8]="UcsFollow",rn[rn.ClipFrontByFrontZ=16]="ClipFrontByFrontZ",rn);var jc=i=>typeof i=="string"&&i.toLowerCase()==="*model_space";function ed(i,e){let t=i.colorIndex,n=!1,r=!1,a=null,l=null;return e==="dxf"?(typeof t=="number"&&(t<0&&(n=!0),t=Math.abs(t)),r=((i.standardFlag??0)&1)===1,typeof i.color=="number"&&i.color>0&&(l=i.color&16777215),typeof t=="number"&&t>=1&&t<=255&&(a=t)):(n=!!i.off,r=!!i.frozen,typeof t=="number"&&t>=1&&t<=255?a=t:typeof i.color=="number"&&(l=i.color&16777215)),{name:i.name,aci:a,rgb:l,off:n,frozen:r,ltype:i.lineType||"Continuous"}}function td(i){let e=new Map;for(let t of i||[]){let n=(t.pattern||[]).map(r=>r.elementLength??0);e.set(String(t.name).toUpperCase(),n)}return e}var D_=/[\u0080-\u00ff]/,N_=/[^\u0000-\u00ff]/,Qc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{fatal:!0}):null;function O_(i){if(!Qc||!D_.test(i)||N_.test(i))return i;try{let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return Qc.decode(e)}catch{return i}}function nd(i,e=new WeakSet){if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(let t of Object.keys(i)){let n=i[t];if(typeof n=="string"){let r=O_(n);r!==n&&(i[t]=r)}else n&&typeof n=="object"&&nd(n,e)}}}function id(i){nd(i);let e=new Map;for(let r of i.tables?.LAYER?.entries||[])e.set(r.name,ed(r,"dwg"));let t=new Map,n=null;for(let r of i.tables?.BLOCK_RECORD?.entries||[]){if(jc(r.name)){n=r.entities||[];continue}typeof r.name=="string"&&r.name.toLowerCase().startsWith("*paper_space")||t.set(r.name,{name:r.name,base:r.basePoint||{x:0,y:0,z:0},entities:r.entities||[]})}return n===null&&(n=i.entities||[]),{source:"dwg",angleUnit:"rad",layers:e,ltypes:td(i.tables?.LTYPE?.entries),blocks:t,entities:n,ltscale:i.header?.LTSCALE??1,insUnits:i.header?.INSUNITS}}function rd(i){let e=new Map;for(let n of i.tables?.LAYER?.entries||[])e.set(n.name,ed(n,"dxf"));let t=new Map;for(let[n,r]of Object.entries(i.blocks||{}))jc(n)||n.toLowerCase().startsWith("*paper_space")||t.set(n,{name:n,base:r.position||{x:0,y:0,z:0},entities:r.entities||[]});return{source:"dxf",angleUnit:"deg",layers:e,ltypes:td(i.tables?.LTYPE?.entries),blocks:t,entities:i.entities||[],ltscale:i.header?.$LTSCALE??1,insUnits:i.header?.$INSUNITS}}var Ed=1;var Sd=3;var Co=0,Io=1,Po=2,Ro=3,Lo=4,Do=5,No=6,Oo=7,Md=0,bd=1,Ad=2;var Qo=1,jo=2,el=3,tl=4,nl=5,il=6,rl=7;var sl=300,Td=301,al=302;var wd=306,Fo=1e3,Hr=1001,Uo=1002;var Cd=1006;var Id=1008;var Pd=1009;var Rd=1023;var qr=2300,va=2301,ga=2302,Bo=2303,ko=2400,Go=2401,Wo=2402;var ol="",_n="srgb",zo="srgb-linear",Vo="linear",ya="srgb";var Xr=2e3,Yo=2001;function F_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}var sd={},xa=null;function Ld(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Ld(i);let e="THREE."+i.shift();if(xa)xa("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Mt(...i){i=Ld(i);let e="THREE."+i.shift();if(xa)xa("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function dr(...i){let e=i.join(" ");e in sd||(sd[e]=!0,Ft(...i))}var U_={[Co]:Io,[Po]:No,[Lo]:Oo,[Ro]:Do,[Io]:Co,[No]:Po,[Oo]:Lo,[Do]:Ro},Kr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zx=Math.PI/180,B_=180/Math.PI;function ll(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function k_(i,e){return(i%e+e)%e}function xo(i,e,t){return(1-t)*i+t*e}var an=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},si=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let d=n[r+0],f=n[r+1],m=n[r+2],g=n[r+3],v=a[l+0],E=a[l+1],S=a[l+2],C=a[l+3];if(g!==C||d!==v||f!==E||m!==S){let b=d*v+f*E+m*S+g*C;b<0&&(v=-v,E=-E,S=-S,C=-C,b=-b);let A=1-c;if(b<.9995){let L=Math.acos(b),I=Math.sin(L);A=Math.sin(A*L)/I,c=Math.sin(c*L)/I,d=d*A+v*c,f=f*A+E*c,m=m*A+S*c,g=g*A+C*c}else{d=d*A+v*c,f=f*A+E*c,m=m*A+S*c,g=g*A+C*c;let L=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=L,f*=L,m*=L,g*=L}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){let c=n[r],d=n[r+1],f=n[r+2],m=n[r+3],g=a[l],v=a[l+1],E=a[l+2],S=a[l+3];return e[t]=c*S+m*g+d*E-f*v,e[t+1]=d*S+m*v+f*g-c*E,e[t+2]=f*S+m*E+c*v-d*g,e[t+3]=m*S-c*g-d*v-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,f=c(n/2),m=c(r/2),g=c(a/2),v=d(n/2),E=d(r/2),S=d(a/2);switch(l){case"XYZ":this._x=v*m*g+f*E*S,this._y=f*E*g-v*m*S,this._z=f*m*S+v*E*g,this._w=f*m*g-v*E*S;break;case"YXZ":this._x=v*m*g+f*E*S,this._y=f*E*g-v*m*S,this._z=f*m*S-v*E*g,this._w=f*m*g+v*E*S;break;case"ZXY":this._x=v*m*g-f*E*S,this._y=f*E*g+v*m*S,this._z=f*m*S+v*E*g,this._w=f*m*g-v*E*S;break;case"ZYX":this._x=v*m*g-f*E*S,this._y=f*E*g+v*m*S,this._z=f*m*S-v*E*g,this._w=f*m*g+v*E*S;break;case"YZX":this._x=v*m*g+f*E*S,this._y=f*E*g+v*m*S,this._z=f*m*S-v*E*g,this._w=f*m*g-v*E*S;break;case"XZY":this._x=v*m*g-f*E*S,this._y=f*E*g-v*m*S,this._z=f*m*S+v*E*g,this._w=f*m*g+v*E*S;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],d=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){let E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(m-d)*E,this._y=(a-f)*E,this._z=(l-r)*E}else if(n>c&&n>g){let E=2*Math.sqrt(1+n-c-g);this._w=(m-d)/E,this._x=.25*E,this._y=(r+l)/E,this._z=(a+f)/E}else if(c>g){let E=2*Math.sqrt(1+c-n-g);this._w=(a-f)/E,this._x=(r+l)/E,this._y=.25*E,this._z=(d+m)/E}else{let E=2*Math.sqrt(1+g-n-c);this._w=(l-r)/E,this._x=(a+f)/E,this._y=(d+m)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+l*c+r*f-a*d,this._y=r*m+l*d+a*c-n*f,this._z=a*m+l*f+n*d-r*c,this._w=l*m-n*c-r*d-a*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let d=1-t;if(c<.9995){let f=Math.acos(c),m=Math.sin(f);d=Math.sin(d*f)/m,t=Math.sin(t*f)/m,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nt=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,d=e.w,f=2*(l*r-c*n),m=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+d*f+l*g-c*m,this.y=n+d*m+c*f-a*g,this.z=r+d*g+a*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*l-n*d,this.z=n*c-r*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new nt,ad=new si,De=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,a,l,c,d,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,f)}set(e,t,n,r,a,l,c,d,f){let m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],f=n[1],m=n[4],g=n[7],v=n[2],E=n[5],S=n[8],C=r[0],b=r[3],A=r[6],L=r[1],I=r[4],P=r[7],U=r[2],H=r[5],j=r[8];return a[0]=l*C+c*L+d*U,a[3]=l*b+c*I+d*H,a[6]=l*A+c*P+d*j,a[1]=f*C+m*L+g*U,a[4]=f*b+m*I+g*H,a[7]=f*A+m*P+g*j,a[2]=v*C+E*L+S*U,a[5]=v*b+E*I+S*H,a[8]=v*A+E*P+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],f=e[7],m=e[8];return t*l*m-t*c*f-n*a*m+n*c*d+r*a*f-r*l*d}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],f=e[7],m=e[8],g=m*l-c*f,v=c*d-m*a,E=f*a-l*d,S=t*g+n*v+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/S;return e[0]=g*C,e[1]=(r*f-m*n)*C,e[2]=(c*n-r*l)*C,e[3]=v*C,e[4]=(m*t-r*d)*C,e[5]=(r*a-c*t)*C,e[6]=E*C,e[7]=(n*d-f*t)*C,e[8]=(l*t-n*a)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){let d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*l+f*c)+l+e,-r*f,r*d,-r*(-f*l+d*c)+c+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},So=new De,od=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){let i={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===ya&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===ya&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ol?Vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zo]:{primaries:e,whitePoint:n,transfer:Vo,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}var mn=G_();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr,Ea=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=Ho("canvas")),sr.width=e.width,sr.height=e.height;let r=sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=ri(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},W_=0,Sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Mo(r[l].image)):a.push(Mo(r[l]))}else a=Mo(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var z_=0,bo=new nt,hr=class i extends Kr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hr,r=Hr,a=Cd,l=Id,c=Rd,d=Pd,f=i.DEFAULT_ANISOTROPY,m=ol){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ll(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new an(0,0),this.repeat=new an(1,1),this.center=new an(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ft(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hr.DEFAULT_IMAGE=null;hr.DEFAULT_MAPPING=sl;hr.DEFAULT_ANISOTROPY=1;var Xo=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,d=e.elements,f=d[0],m=d[4],g=d[8],v=d[1],E=d[5],S=d[9],C=d[2],b=d[6],A=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-C)<.01&&Math.abs(S-b)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+C)<.1&&Math.abs(S+b)<.1&&Math.abs(f+E+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(f+1)/2,P=(E+1)/2,U=(A+1)/2,H=(m+v)/4,j=(g+C)/4,de=(S+b)/4;return I>P&&I>U?I<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(I),r=H/n,a=j/n):P>U?P<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(P),n=H/r,a=de/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=j/a,r=de/a),this.set(n,r,a,t),this}let L=Math.sqrt((b-S)*(b-S)+(g-C)*(g-C)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(b-S)/L,this.y=(g-C)/L,this.z=(v-m)/L,this.w=Math.acos((f+E+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var bt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,a,l,c,d,f,m,g,v,E,S,C,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,f,m,g,v,E,S,C,b)}set(e,t,n,r,a,l,c,d,f,m,g,v,E,S,C,b){let A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=r,A[1]=a,A[5]=l,A[9]=c,A[13]=d,A[2]=f,A[6]=m,A[10]=g,A[14]=v,A[3]=E,A[7]=S,A[11]=C,A[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),a=1/ar.setFromMatrixColumn(e,1).length(),l=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),f=Math.sin(r),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){let v=l*m,E=l*g,S=c*m,C=c*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=E+S*f,t[5]=v-C*f,t[9]=-c*d,t[2]=C-v*f,t[6]=S+E*f,t[10]=l*d}else if(e.order==="YXZ"){let v=d*m,E=d*g,S=f*m,C=f*g;t[0]=v+C*c,t[4]=S*c-E,t[8]=l*f,t[1]=l*g,t[5]=l*m,t[9]=-c,t[2]=E*c-S,t[6]=C+v*c,t[10]=l*d}else if(e.order==="ZXY"){let v=d*m,E=d*g,S=f*m,C=f*g;t[0]=v-C*c,t[4]=-l*g,t[8]=S+E*c,t[1]=E+S*c,t[5]=l*m,t[9]=C-v*c,t[2]=-l*f,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){let v=l*m,E=l*g,S=c*m,C=c*g;t[0]=d*m,t[4]=S*f-E,t[8]=v*f+C,t[1]=d*g,t[5]=C*f+v,t[9]=E*f-S,t[2]=-f,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){let v=l*d,E=l*f,S=c*d,C=c*f;t[0]=d*m,t[4]=C-v*g,t[8]=S*g+E,t[1]=g,t[5]=l*m,t[9]=-c*m,t[2]=-f*m,t[6]=E*g+S,t[10]=v-C*g}else if(e.order==="XZY"){let v=l*d,E=l*f,S=c*d,C=c*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=v*g+C,t[5]=l*m,t[9]=E*g-S,t[2]=S*g-E,t[6]=c*m,t[10]=C*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,Y_)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),pi.crossVectors(n,sn),pi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),pi.crossVectors(n,sn)),pi.normalize(),ha.crossVectors(sn,pi),r[0]=pi.x,r[4]=ha.x,r[8]=sn.x,r[1]=pi.y,r[5]=ha.y,r[9]=sn.y,r[2]=pi.z,r[6]=ha.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],f=n[12],m=n[1],g=n[5],v=n[9],E=n[13],S=n[2],C=n[6],b=n[10],A=n[14],L=n[3],I=n[7],P=n[11],U=n[15],H=r[0],j=r[4],de=r[8],Re=r[12],Ee=r[1],Le=r[5],Te=r[9],pe=r[13],Se=r[2],ie=r[6],Oe=r[10],Pe=r[14],be=r[3],_e=r[7],ve=r[11],Ye=r[15];return a[0]=l*H+c*Ee+d*Se+f*be,a[4]=l*j+c*Le+d*ie+f*_e,a[8]=l*de+c*Te+d*Oe+f*ve,a[12]=l*Re+c*pe+d*Pe+f*Ye,a[1]=m*H+g*Ee+v*Se+E*be,a[5]=m*j+g*Le+v*ie+E*_e,a[9]=m*de+g*Te+v*Oe+E*ve,a[13]=m*Re+g*pe+v*Pe+E*Ye,a[2]=S*H+C*Ee+b*Se+A*be,a[6]=S*j+C*Le+b*ie+A*_e,a[10]=S*de+C*Te+b*Oe+A*ve,a[14]=S*Re+C*pe+b*Pe+A*Ye,a[3]=L*H+I*Ee+P*Se+U*be,a[7]=L*j+I*Le+P*ie+U*_e,a[11]=L*de+I*Te+P*Oe+U*ve,a[15]=L*Re+I*pe+P*Pe+U*Ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],d=e[9],f=e[13],m=e[2],g=e[6],v=e[10],E=e[14],S=e[3],C=e[7],b=e[11],A=e[15],L=d*E-f*v,I=c*E-f*g,P=c*v-d*g,U=l*E-f*m,H=l*v-d*m,j=l*g-c*m;return t*(C*L-b*I+A*P)-n*(S*L-b*U+A*H)+r*(S*I-C*U+A*j)-a*(S*P-C*H+b*j)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],d=e[2],f=e[6],m=e[10];return t*(l*m-c*f)-n*(a*m-c*d)+r*(a*f-l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],f=e[7],m=e[8],g=e[9],v=e[10],E=e[11],S=e[12],C=e[13],b=e[14],A=e[15],L=t*c-n*l,I=t*d-r*l,P=t*f-a*l,U=n*d-r*c,H=n*f-a*c,j=r*f-a*d,de=m*C-g*S,Re=m*b-v*S,Ee=m*A-E*S,Le=g*b-v*C,Te=g*A-E*C,pe=v*A-E*b,Se=L*pe-I*Te+P*Le+U*Ee-H*Re+j*de;if(Se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ie=1/Se;return e[0]=(c*pe-d*Te+f*Le)*ie,e[1]=(r*Te-n*pe-a*Le)*ie,e[2]=(C*j-b*H+A*U)*ie,e[3]=(v*H-g*j-E*U)*ie,e[4]=(d*Ee-l*pe-f*Re)*ie,e[5]=(t*pe-r*Ee+a*Re)*ie,e[6]=(b*P-S*j-A*I)*ie,e[7]=(m*j-v*P+E*I)*ie,e[8]=(l*Te-c*Ee+f*de)*ie,e[9]=(n*Ee-t*Te-a*de)*ie,e[10]=(S*H-C*P+A*L)*ie,e[11]=(g*P-m*H-E*L)*ie,e[12]=(c*Re-l*Le-d*de)*ie,e[13]=(t*Le-n*Re+r*de)*ie,e[14]=(C*I-S*U-b*L)*ie,e[15]=(m*U-g*I+v*L)*ie,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,f=a*l,m=a*c;return this.set(f*l+n,f*c-r*d,f*d+r*c,0,f*c+r*d,m*c+n,m*d-r*l,0,f*d-r*c,m*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,f=a+a,m=l+l,g=c+c,v=a*f,E=a*m,S=a*g,C=l*m,b=l*g,A=c*g,L=d*f,I=d*m,P=d*g,U=n.x,H=n.y,j=n.z;return r[0]=(1-(C+A))*U,r[1]=(E+P)*U,r[2]=(S-I)*U,r[3]=0,r[4]=(E-P)*H,r[5]=(1-(v+A))*H,r[6]=(b+L)*H,r[7]=0,r[8]=(S+I)*j,r[9]=(b-L)*j,r[10]=(1-(v+C))*j,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=ar.set(r[0],r[1],r[2]).length(),c=ar.set(r[4],r[5],r[6]).length(),d=ar.set(r[8],r[9],r[10]).length();a<0&&(l=-l),wn.copy(this);let f=1/l,m=1/c,g=1/d;return wn.elements[0]*=f,wn.elements[1]*=f,wn.elements[2]*=f,wn.elements[4]*=m,wn.elements[5]*=m,wn.elements[6]*=m,wn.elements[8]*=g,wn.elements[9]*=g,wn.elements[10]*=g,t.setFromRotationMatrix(wn),n.x=l,n.y=c,n.z=d,this}makePerspective(e,t,n,r,a,l,c=Xr,d=!1){let f=this.elements,m=2*a/(t-e),g=2*a/(n-r),v=(t+e)/(t-e),E=(n+r)/(n-r),S,C;if(d)S=a/(l-a),C=l*a/(l-a);else if(c===Xr)S=-(l+a)/(l-a),C=-2*l*a/(l-a);else if(c===Yo)S=-l/(l-a),C=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=m,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=E,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=C,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=Xr,d=!1){let f=this.elements,m=2/(t-e),g=2/(n-r),v=-(t+e)/(t-e),E=-(n+r)/(n-r),S,C;if(d)S=1/(l-a),C=l/(l-a);else if(c===Xr)S=-2/(l-a),C=-(l+a)/(l-a);else if(c===Yo)S=-1/(l-a),C=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=m,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=g,f[9]=0,f[13]=E,f[2]=0,f[6]=0,f[10]=S,f[14]=C,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new nt,wn=new bt,V_=new nt(0,0,0),Y_=new nt(1,1,1),pi=new nt,ha=new nt,sn=new nt,cd=new bt,dd=new si,Zr=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],l=r[4],c=r[8],d=r[1],f=r[5],m=r[9],g=r[2],v=r[6],E=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,E),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,E),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,E));break;case"XZY":this._z=Math.asin(-Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,E),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zr.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H_=0,ud=new nt,or=new si,ii=new bt,fa=new nt,Yr=new nt,X_=new nt,$_=new si,hd=new nt(1,0,0),fd=new nt(0,1,0),pd=new nt(0,0,1),md={type:"added"},q_={type:"removed"},lr={type:"childadded",child:null},Ao={type:"childremoved",child:null},fr=class i extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new nt,t=new Zr,n=new si,r=new nt(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new De}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Yr,fa,this.up):ii.lookAt(fa,Yr,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),or.setFromRotationMatrix(ii),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),lr.child=e,this.dispatchEvent(lr),lr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let d=c.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){let g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){let c=l(e.geometries),d=l(e.materials),f=l(e.textures),m=l(e.images),g=l(e.shapes),v=l(e.skeletons),E=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),E.length>0&&(n.animations=E),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){let d=[];for(let f in c){let m=c[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fr.DEFAULT_UP=new nt(0,1,0);fr.DEFAULT_MATRIX_AUTO_UPDATE=!0;fr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function To(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var At=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,mn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mn.workingColorSpace){if(e=k_(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=To(l,a,e+1/3),this.g=To(l,a,e),this.b=To(l,a,e-1/3)}return mn.colorSpaceToWorking(this,r),this}setStyle(e,t=_n){function n(a){a!==void 0&&parseFloat(a)<1&&Ft("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ft("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);Ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return mn.workingToColorSpace(Ot.copy(this),e),Math.round(Ge(Ot.r*255,0,255))*65536+Math.round(Ge(Ot.g*255,0,255))*256+Math.round(Ge(Ot.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mn.workingColorSpace){mn.workingToColorSpace(Ot.copy(this),t);let n=Ot.r,r=Ot.g,a=Ot.b,l=Math.max(n,r,a),c=Math.min(n,r,a),d,f,m=(c+l)/2;if(c===l)d=0,f=0;else{let g=l-c;switch(f=m<=.5?g/(l+c):g/(2-l-c),l){case n:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-n)/g+2;break;case a:d=(n-r)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=mn.workingColorSpace){return mn.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=_n){mn.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,r=Ot.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(pa);let n=xo(mi.h,pa.h,t),r=xo(mi.s,pa.s,t),a=xo(mi.l,pa.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new At;At.NAMES=Dd;function K_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,a=Nd(i,0,r,t,!0),l=[];if(!a||a.next===a.prev)return l;let c,d,f;if(n&&(a=eg(i,e,a,t)),i.length>80*t){c=i[0],d=i[1];let m=c,g=d;for(let v=t;v<r;v+=t){let E=i[v],S=i[v+1];E<c&&(c=E),S<d&&(d=S),E>m&&(m=E),S>g&&(g=S)}f=Math.max(m-c,g-d),f=f!==0?32767/f:0}return Jr(a,l,t,c,d,f,0),l}function Nd(i,e,t,n,r){let a;if(r===ug(i,e,t,n)>0)for(let l=e;l<t;l+=n)a=_d(l/n|0,i[l],i[l+1],a);else for(let l=t-n;l>=e;l-=n)a=_d(l/n|0,i[l],i[l+1],a);return a&&pr(a,a.next)&&(jr(a),a=a.next),a}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||at(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,r,a,l){if(!i)return;!l&&a&&sg(i,n,r,a);let c=i;for(;i.prev!==i.next;){let d=i.prev,f=i.next;if(a?J_(i,n,r,a):Z_(i)){e.push(d.i,i.i,f.i),jr(i),i=f.next,c=f.next;continue}if(i=f,i===c){l?l===1?(i=Q_($i(i),e),Jr(i,e,t,n,r,a,2)):l===2&&j_(i,e,t,n,r,a):Jr($i(i),e,t,n,r,a,1);break}}}function Z_(i){let e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;let r=e.x,a=t.x,l=n.x,c=e.y,d=t.y,f=n.y,m=Math.min(r,a,l),g=Math.min(c,d,f),v=Math.max(r,a,l),E=Math.max(c,d,f),S=n.next;for(;S!==e;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=E&&$r(r,c,a,d,l,f,S.x,S.y)&&at(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function J_(i,e,t,n){let r=i.prev,a=i,l=i.next;if(at(r,a,l)>=0)return!1;let c=r.x,d=a.x,f=l.x,m=r.y,g=a.y,v=l.y,E=Math.min(c,d,f),S=Math.min(m,g,v),C=Math.max(c,d,f),b=Math.max(m,g,v),A=$o(E,S,e,t,n),L=$o(C,b,e,t,n),I=i.prevZ,P=i.nextZ;for(;I&&I.z>=A&&P&&P.z<=L;){if(I.x>=E&&I.x<=C&&I.y>=S&&I.y<=b&&I!==r&&I!==l&&$r(c,m,d,g,f,v,I.x,I.y)&&at(I.prev,I,I.next)>=0||(I=I.prevZ,P.x>=E&&P.x<=C&&P.y>=S&&P.y<=b&&P!==r&&P!==l&&$r(c,m,d,g,f,v,P.x,P.y)&&at(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;I&&I.z>=A;){if(I.x>=E&&I.x<=C&&I.y>=S&&I.y<=b&&I!==r&&I!==l&&$r(c,m,d,g,f,v,I.x,I.y)&&at(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;P&&P.z<=L;){if(P.x>=E&&P.x<=C&&P.y>=S&&P.y<=b&&P!==r&&P!==l&&$r(c,m,d,g,f,v,P.x,P.y)&&at(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Q_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!pr(n,r)&&Fd(n,t,t.next,r)&&Qr(n,r)&&Qr(r,n)&&(e.push(n.i,t.i,r.i),jr(t),jr(t.next),t=i=r),t=t.next}while(t!==i);return $i(t)}function j_(i,e,t,n,r,a){let l=i;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&lg(l,c)){let d=Ud(l,c);l=$i(l,l.next),d=$i(d,d.next),Jr(l,e,t,n,r,a,0),Jr(d,e,t,n,r,a,0);return}c=c.next}l=l.next}while(l!==i)}function eg(i,e,t,n){let r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a]*n,d=a<l-1?e[a+1]*n:i.length,f=Nd(i,c,d,n,!1);f===f.next&&(f.steiner=!0),r.push(og(f))}r.sort(tg);for(let a=0;a<r.length;a++)t=ng(r[a],t);return t}function tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function ng(i,e){let t=ig(i,e);if(!t)return e;let n=Ud(t,i);return $i(n,n.next),$i(t,t.next)}function ig(i,e){let t=e,n=i.x,r=i.y,a=-1/0,l;if(pr(i,t))return t;do{if(pr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let g=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>a&&(a=g,l=t.x<t.next.x?t:t.next,g===n))return l}t=t.next}while(t!==e);if(!l)return null;let c=l,d=l.x,f=l.y,m=1/0;t=l;do{if(n>=t.x&&t.x>=d&&n!==t.x&&Od(r<f?n:a,r,d,f,r<f?a:n,r,t.x,t.y)){let g=Math.abs(r-t.y)/(n-t.x);Qr(t,i)&&(g<m||g===m&&(t.x>l.x||t.x===l.x&&rg(l,t)))&&(l=t,m=g)}t=t.next}while(t!==c);return l}function rg(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function sg(i,e,t,n){let r=i;do r.z===0&&(r.z=$o(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ag(r)}function ag(i){let e,t=1;do{let n=i,r;i=null;let a=null;for(e=0;n;){e++;let l=n,c=0;for(let f=0;f<t&&(c++,l=l.nextZ,!!l);f++);let d=t;for(;c>0||d>0&&l;)c!==0&&(d===0||!l||n.z<=l.z)?(r=n,n=n.nextZ,c--):(r=l,l=l.nextZ,d--),a?a.nextZ=r:i=r,r.prevZ=a,a=r;n=l}a.nextZ=null,t*=2}while(e>1);return i}function $o(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function og(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Od(i,e,t,n,r,a,l,c){return(r-l)*(e-c)>=(i-l)*(a-c)&&(i-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(a-c)>=(r-l)*(n-c)}function $r(i,e,t,n,r,a,l,c){return!(i===l&&e===c)&&Od(i,e,t,n,r,a,l,c)}function lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cg(i,e)&&(Qr(i,e)&&Qr(e,i)&&dg(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||pr(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pr(i,e){return i.x===e.x&&i.y===e.y}function Fd(i,e,t,n){let r=_a(at(i,e,t)),a=_a(at(i,e,n)),l=_a(at(t,n,i)),c=_a(at(t,n,e));return!!(r!==a&&l!==c||r===0&&ma(i,t,e)||a===0&&ma(i,n,e)||l===0&&ma(t,i,n)||c===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function cg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function dg(i,e){let t=i,n=!1,r=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=qo(i.i,i.x,i.y),n=qo(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function _d(i,e,t,n){let r=qo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ug(i,e,t,n){let r=0;for(let a=e,l=t-n;a<t;a+=n)r+=(i[l]-i[a])*(i[a+1]+i[l+1]),l=a;return r}var Ko=class{static triangulate(e,t,n=2){return K_(e,t,n)}},es=class i{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],a=[];gd(e),yd(n,e);let l=e.length;t.forEach(gd);for(let d=0;d<t.length;d++)r.push(l),l+=t[d].length,yd(n,t[d]);let c=Ko.triangulate(n,r);for(let d=0;d<c.length;d+=3)a.push(c.slice(d,d+3));return a}};function gd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Bd(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(vd(r))r.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(vd(r[0])){let a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Bd(i[t]);for(let r in n)e[r]=n[r]}return e}function vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=r,r=t[++n],e<r)break t}l=t.length;break n}if(!(e>=a)){let c=t[1];e<c&&(n=2,a=c);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(r=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){let c=n+l>>>1;e<t[c]?l=c:n=c+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let l=0;l!==r;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ba=class extends _i{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ko,endingEnd:ko}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,l=e+1,c=r[a],d=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Go:a=e,c=2*t-n;break;case Wo:a=r.length-2,c=t+r[a]-r[a+1];break;default:a=e,c=n}if(d===void 0)switch(this.getSettings_().endingEnd){case Go:l=e,d=2*n-t;break;case Wo:l=1,d=n+r[1]-r[0];break;default:l=e-1,d=t}let f=(n-t)*.5,m=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(d-n),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,f=d-c,m=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,E=this._weightNext,S=(n-t)/(r-t),C=S*S,b=C*S,A=-v*b+2*v*C-v*S,L=(1+v)*b+(-1.5-2*v)*C+(-.5+v)*S+1,I=(-1-E)*b+(1.5+E)*C+.5*S,P=E*b-E*C;for(let U=0;U!==c;++U)a[U]=A*l[m+U]+L*l[f+U]+I*l[d+U]+P*l[g+U];return a}},Aa=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,f=d-c,m=(n-t)/(r-t),g=1-m;for(let v=0;v!==c;++v)a[v]=l[f+v]*g+l[d+v]*m;return a}},Ta=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},wa=class extends _i{interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,f=d-c,m=this.inTangents,g=this.outTangents;if(!m||!g){let S=(n-t)/(r-t),C=1-S;for(let b=0;b!==c;++b)a[b]=l[f+b]*C+l[d+b]*S;return a}let v=c*2,E=e-1;for(let S=0;S!==c;++S){let C=l[f+S],b=l[d+S],A=E*v+S*2,L=g[A],I=g[A+1],P=e*v+S*2,U=m[P],H=m[P+1],j=fg(n,t,L,U,r);a[S]=kd(j,C,I,H,b)}return a}};function kd(i,e,t,n,r){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*r}function hg(i,e,t,n,r){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(r-n)}function fg(i,e,t,n,r){let a=(i-e)/(r-e);for(let l=0;l<8;l++){let c=kd(a,e,t,n,r)-i;if(Math.abs(c)<1e-10)break;let d=hg(a,e,t,n,r);if(Math.abs(d)<1e-10)break;a=Math.max(0,Math.min(1,a-c/d))}return a}var on=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),wo(e.settings)&&(n.settings={inTangents:cr(e.settings.inTangents,Array),outTangents:cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break;case Bo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;wo(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,a=0,l=r-1;for(;a!==r&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(Mt("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){let d=n[c];if(typeof d=="number"&&isNaN(d)){Mt("KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(l!==null&&l>d){Mt("KeyframeTrack: Out of order keys.",this,c,d,l),e=!1;break}l=d}if(r!==void 0&&F_(r))for(let c=0,d=r.length;c!==d;++c){let f=r[c];if(isNaN(f)){Mt("KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ga,a=e.length-1,l=1;for(let c=1;c<a;++c){let d=!1,f=e[c],m=e[c+1];if(f!==m&&(c!==1||f!==e[0]))if(r)d=!0;else{let g=c*n,v=g-n,E=g+n;for(let S=0;S!==n;++S){let C=t[g+S];if(C!==t[v+S]||C!==t[E+S]){d=!0;break}}}if(d){if(c!==l){e[l]=e[c];let g=c*n,v=l*n;for(let E=0;E!==n;++E)t[v+E]=t[g+E]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,d=l*n,f=0;f!==n;++f)t[d+f]=t[c+f];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,wo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function xd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=va;var gi=class extends on{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=qr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends on{constructor(e,t,n,r){super(e,t,n,r)}};Ca.prototype.ValueTypeName="color";var Ia=class extends on{constructor(e,t,n,r){super(e,t,n,r)}};Ia.prototype.ValueTypeName="number";var Pa=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=(n-t)/(r-t),f=e*c;for(let m=f+c;f!==m;f+=4)si.slerpFlat(a,0,l,f-c,l,f,d);return a}},ts=class extends on{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends on{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=qr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends on{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName="vector";var La=class{constructor(e,t,n){let r=this,a=!1,l=0,c=0,d,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){let g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=f.length;g<v;g+=2){let E=f[g],S=f[g+1];if(E.global&&(E.lastIndex=0),E.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gd=new La,Da=class{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var cl="\\[\\]\\.:\\/",pg=new RegExp("["+cl+"]","g"),dl="[^"+cl+"]",mg="[^"+cl.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",dl),gg=/(WCOD+)?/.source.replace("WCOD",mg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),xg=new RegExp("^"+_g+gg+yg+vg+"$"),Eg=["material","materials","bones","map"],Zo=class{constructor(e,t,n){let r=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){let t=xg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);Eg.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let l=0;l<a.length;l++){let c=a[l];if(c.name===t||c.uuid===t)return c;let d=n(c.children);if(d)return d}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){Mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let l=e[r];if(l===void 0){let f=t.nodeName;Mt("PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=Zo;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var Jo=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Og=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,p0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Sg,alphahash_pars_fragment:Mg,alphamap_fragment:bg,alphamap_pars_fragment:Ag,alphatest_fragment:Tg,alphatest_pars_fragment:wg,aomap_fragment:Cg,aomap_pars_fragment:Ig,batching_pars_vertex:Pg,batching_vertex:Rg,begin_vertex:Lg,beginnormal_vertex:Dg,bsdfs:Ng,iridescence_fragment:Og,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:zg,color_pars_vertex:Vg,color_vertex:Yg,common:Hg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:$g,displacementmap_pars_vertex:qg,displacementmap_vertex:Kg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:Qg,colorspace_pars_fragment:jg,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:d0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:h0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:_0,lights_phong_fragment:g0,lights_phong_pars_fragment:y0,lights_physical_fragment:v0,lights_physical_pars_fragment:x0,lights_fragment_begin:E0,lights_fragment_maps:S0,lights_fragment_end:M0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:C0,map_fragment:I0,map_pars_fragment:P0,map_particle_fragment:R0,map_particle_pars_fragment:L0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:N0,morphinstance_vertex:O0,morphcolor_vertex:F0,morphnormal_vertex:U0,morphtarget_pars_vertex:B0,morphtarget_vertex:k0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:z0,normal_pars_vertex:V0,normal_vertex:Y0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:K0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:Q0,project_vertex:j0,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:dy,skinnormal_vertex:uy,specularmap_fragment:hy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:_y,transmission_pars_fragment:gy,uv_pars_fragment:yy,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:Ey,background_vert:Sy,background_frag:My,backgroundCube_vert:by,backgroundCube_frag:Ay,cube_vert:Ty,cube_frag:wy,depth_vert:Cy,depth_frag:Iy,distance_vert:Py,distance_frag:Ry,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Ny,linedashed_frag:Oy,meshbasic_vert:Fy,meshbasic_frag:Uy,meshlambert_vert:By,meshlambert_frag:ky,meshmatcap_vert:Gy,meshmatcap_frag:Wy,meshnormal_vert:zy,meshnormal_frag:Vy,meshphong_vert:Yy,meshphong_frag:Hy,meshphysical_vert:Xy,meshphysical_frag:$y,meshtoon_vert:qy,meshtoon_frag:Ky,points_vert:Zy,points_frag:Jy,shadow_vert:Qy,shadow_frag:jy,sprite_vert:ev,sprite_frag:tv},ae={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new an(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new nt},probesMax:{value:new nt},probesResolution:{value:new nt}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new an(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Wd={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new At(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wd.physical={uniforms:Wt([Wd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new an(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new an},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new an},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var nv=new De;nv.set(-1,0,0,0,1,0,0,0,1);var NT={[Qo]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[el]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};var OT=new Float32Array(16),FT=new Float32Array(9),UT=new Float32Array(4);var BT={[Qo]:"Linear",[jo]:"Reinhard",[el]:"Cineon",[tl]:"ACESFilmic",[il]:"AgX",[rl]:"Neutral",[nl]:"Custom"};var kT={[Ed]:"SHADOWMAP_TYPE_PCF",[Sd]:"SHADOWMAP_TYPE_VSM"};var GT={[Td]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE",[wd]:"ENVMAP_TYPE_CUBE_UV"};var WT={[al]:"ENVMAP_MODE_REFRACTION"};var zT={[Md]:"ENVMAP_BLENDING_MULTIPLY",[bd]:"ENVMAP_BLENDING_MIX",[Ad]:"ENVMAP_BLENDING_ADD"};var iv=new De;iv.set(-1,0,0,0,1,0,0,0,1);var VT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var ai=Math.PI*2;function rv(i,e,t){let n=t*e,r=i%360/60,a=n*(1-Math.abs(r%2-1)),l=0,c=0,d=0;r<1?[l,c,d]=[n,a,0]:r<2?[l,c,d]=[a,n,0]:r<3?[l,c,d]=[0,n,a]:r<4?[l,c,d]=[0,a,n]:r<5?[l,c,d]=[a,0,n]:[l,c,d]=[n,0,a];let f=t-n;return[Math.round(l+f),Math.round(c+f),Math.round(d+f)]}var zd=(()=>{let i=new Array(256).fill(null).map(()=>[255,255,255]);[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,255,255],[128,128,128],[192,192,192]].forEach((n,r)=>i[r+1]=n);let t=[255,204,153,127,76];for(let n=0;n<240;n++){let r=Math.floor(n/10)*15,a=n%10,l=t[a>>1],c=a%2===0?1:.5;i[10+n]=rv(r,c,l)}return[[51,51,51],[91,91,91],[132,132,132],[173,173,173],[214,214,214],[255,255,255]].forEach((n,r)=>i[250+r]=n),i})(),sv=i=>i[0]<<16|i[1]<<8|i[2],qi=class{constructor(e){this.T=e,this.a=new e(4096),this.n=0}ensure(e){if(this.n+e>this.a.length){let t=this.a.length*2;for(;t<this.n+e;)t*=2;let n=new this.T(t);n.set(this.a.subarray(0,this.n)),this.a=n}}done(){return this.a.slice(0,this.n)}},ns=()=>({p:new qi(Float32Array),c:new qi(Uint8Array),e:new qi(Uint32Array)}),D=(i,e=0)=>typeof i=="number"&&Number.isFinite(i)?i:e,gn=i=>i?[D(i.x),D(i.y),D(i.z)]:[0,0,0];function av(i){let e=D(i?.x),t=D(i?.y),n=i&&i.z!==void 0?D(i.z,1):1,r=Math.hypot(e,t,n)||1;e/=r,t/=r,n/=r;let a,l,c;Math.abs(e)<1/64&&Math.abs(t)<1/64?(a=n,l=0,c=-e):(a=-t,l=e,c=0);let d=Math.hypot(a,l,c)||1;a/=d,l/=d,c/=d;let f=t*c-n*l,m=n*a-e*c,g=e*l-t*a,v=new bt;return v.set(a,f,e,0,l,m,t,0,c,g,n,0,0,0,0,1),v}var Na=i=>!i||Math.hypot(D(i.x),D(i.y),D(i.z))<1e-9||Math.abs(D(i.x))<1e-12&&Math.abs(D(i.y))<1e-12&&(i.z===void 0||D(i.z,1)>0),Vd=new bt,Yd=new bt;function oi(i,e){return Vd.fromArray(i),Yd.fromArray(e),Vd.multiply(Yd).elements.slice()}var ov=new bt().elements.slice(),Oa=(i,e,t)=>new bt().makeTranslation(i,e,t).elements.slice(),Hd=i=>new bt().makeRotationZ(i).elements.slice(),lv=(i,e,t)=>new bt().makeScale(i,e,t).elements.slice();function Xd(i,e,t,n,r,a,l){let c=t-i,d=n-e,f=Math.hypot(c,d);if(f<1e-12)return;let m=4*Math.atan(r),g=f/2/Math.tan(m/2),v=(i+t)/2+-d/f*g,E=(e+n)/2+c/f*g,S=Math.hypot(i-v,e-E),C=Math.atan2(e-E,i-v),b=Math.max(2,Math.ceil(Math.abs(m)/l));for(let A=1;A<b;A++){let L=C+m*A/b;a.push(v+S*Math.cos(L),E+S*Math.sin(L))}}function $d(i,e,t){let n=!1,r=t.length/2;for(let a=0,l=r-1;a<r;l=a++){let c=t[2*a],d=t[2*a+1],f=t[2*l],m=t[2*l+1];d>e!=m>e&&i<(f-c)*(e-d)/(m-d)+c&&(n=!n)}return n}function cv(i){let e=0,t=i.length/2;for(let n=0,r=t-1;n<t;r=n++)e+=i[2*r]*i[2*n+1]-i[2*n]*i[2*r+1];return e/2}function qd(i,e,t,n,r){let a=t.length,l=e[i],c=e[a],d=[],f=new Array(i+1),m=new Array(i+1),g=new Array(i+1);for(let v=0;v<=r;v++){let E=l+(c-l)*v/r;v===r&&(E=c-1e-9*(c-l));let S=i;for(;S<a-1&&E>=e[S+1];)S++;f[0]=1;for(let I=1;I<=i;I++){m[I]=E-e[S+1-I],g[I]=e[S+I]-E;let P=0;for(let U=0;U<I;U++){let H=g[U+1]+m[I-U],j=H===0?0:f[U]/H;f[U]=P+g[U+1]*j,P=m[I-U]*j}f[I]=P}let C=0,b=0,A=0,L=0;for(let I=0;I<=i;I++){let P=S-i+I,U=n?D(n[P],1):1,H=f[I]*U;C+=H*t[P][0],b+=H*t[P][1],A+=H*t[P][2],L+=H}L!==0&&d.push(C/L,b/L,A/L)}return d}function Kd(i,e){let t=[],n=i.length,r=l=>i[Math.max(0,Math.min(n-1,l))];for(let l=0;l<n-1;l++){let c=r(l-1),d=r(l),f=r(l+1),m=r(l+2);for(let g=0;g<e;g++){let v=g/e,E=v*v,S=E*v,C=[];for(let b=0;b<3;b++)C.push(.5*(2*d[b]+(-c[b]+f[b])*v+(2*c[b]-5*d[b]+4*f[b]-m[b])*E+(-c[b]+3*d[b]-3*f[b]+m[b])*S));t.push(C[0],C[1],C[2])}}let a=i[n-1];return t.push(a[0],a[1],a[2]),t}function Zd(i,e){if(i==null)return"";let t=String(i);return t=t.replace(/\\[pP][^;]*;/g,""),t=t.replace(/%%[cC]/g,"\xD8").replace(/%%[dD]/g,"\xB0").replace(/%%[pP]/g,"\xB1").replace(/%%%/g,"%").replace(/%%[uUoO]/g,""),e?(t=t.replace(/\\U\+([0-9A-Fa-f]{4})/g,(n,r)=>String.fromCharCode(parseInt(r,16))),t=t.replace(/\\S([^;^#\\]*)[\^#/]([^;]*);/g,"$1/$2"),t=t.replace(/\\[fFCcHhWwTtQqAaXx][^;]*;/g,""),t=t.replace(/\\[LlOoKk]/g,""),t=t.replace(/\\P/g,`
`).replace(/\\~/g," "),t=t.replace(/\\\\/g,"").replace(/\\\{/g,"").replace(/\\\}/g,""),t=t.replace(/[{}]/g,""),t=t.replace(/\u0001/g,"\\").replace(/\u0002/g,"{").replace(/\u0003/g,"}")):t=t.replace(/\\U\+([0-9A-Fa-f]{4})/g,(n,r)=>String.fromCharCode(parseInt(r,16))),t}function Jd(i,e={}){let t=!!e.light,n=(e.arcStepDeg??5)*Math.PI/180,r=12,a=e.segCap??6e6,l=e.triCap??4e6,c=i.angleUnit==="deg"?y=>D(y)*Math.PI/180:y=>D(y),d=0,f=new Map,m=(y,T=1)=>f.set(y,(f.get(y)||0)+T),g=[],v=[],E=[],S=1,C=0,b=(y,T,J,G)=>{if(!(C++%S)&&(g.push(y),v.push(T),G&&E.push(J),g.length>3e5)){S*=2;for(let F of[g,v,E]){let k=0;for(let O=0;O<F.length;O+=2)F[k++]=F[O];F.length=k}}};for(let y of i.entities)switch(y.type){case"LINE":b(D(y.startPoint?.x),D(y.startPoint?.y),D(y.startPoint?.z),!0);break;case"CIRCLE":case"ARC":case"ELLIPSE":b(D(y.center?.x),D(y.center?.y),D(y.center?.z),!0);break;case"LWPOLYLINE":y.vertices?.length&&b(D(y.vertices[0].x),D(y.vertices[0].y),D(y.elevation),!0);break;case"POLYLINE":case"POLYLINE2D":case"POLYLINE3D":y.vertices?.length&&b(D(y.vertices[0].x),D(y.vertices[0].y),D(y.vertices[0].z),!0);break;case"3DFACE":{let T=y.corner1||y.vertices?.[0];T&&b(D(T.x),D(T.y),D(T.z),!0);break}case"INSERT":b(D(y.insertionPoint?.x),D(y.insertionPoint?.y),D(y.insertionPoint?.z),!0);break;case"POINT":b(D(y.position?.x),D(y.position?.y),D(y.position?.z)<=-99999?0:D(y.position?.z),!0);break;case"TEXT":b(D(y.startPoint?.x),D(y.startPoint?.y),0,!1);break;case"MTEXT":b(D(y.insertionPoint?.x),D(y.insertionPoint?.y),0,!1);break;case"SPLINE":{let T=y.controlPoints?.[0]||y.fitPoints?.[0];T&&b(D(T.x),D(T.y),D(T.z),!0);break}default:break}let A=y=>y<=-99999||y>=1e8?0:y,L=y=>{if(!y.length)return 0;let T=Float64Array.from(y).sort();return T[T.length>>1]},I=Math.round(L(g)),P=Math.round(L(v)),U=Math.round(L(E)),H=L(E),j=i.source==="dwg"?H:null,de=new Map,Re=y=>{let T=de.get(y);return T||(T={name:y,idx:de.size,lines:ns(),tris:ns(),fills:ns(),pfills:ns(),pts:ns(),texts:[],count:0},de.set(y,T)),T};for(let y of i.layers.keys())Re(y);let Ee={aci:7,rgb:null,off:!1,frozen:!1,ltype:"Continuous"},Le=y=>i.layers.get(y)||Ee,Te=t?0:16777215,pe=y=>y===7?Te:sv(zd[y]||zd[7]),Se=y=>{let T=Le(y);return T.rgb!=null?T.rgb:pe(T.aci??7)},ie=[],Oe=0,Pe=0,be=0,_e=!1,ve=new qi(Float32Array),Ye=new qi(Uint32Array),Y=0,re=15e5*3,oe=[1/0,1/0,1/0],Q=[-1/0,-1/0,-1/0],ge=[],Ae=[],He=[],Qe=1,rt=0,le=(y,T,J)=>{if(y<oe[0]&&(oe[0]=y),T<oe[1]&&(oe[1]=T),J<oe[2]&&(oe[2]=J),y>Q[0]&&(Q[0]=y),T>Q[1]&&(Q[1]=T),J>Q[2]&&(Q[2]=J),rt++%Qe===0&&(ge.push(y),Ae.push(T),He.push(J),ge.length>4e5)){Qe*=2;for(let G of[ge,Ae,He]){let F=0;for(let k=0;k<G.length;k+=2)G[F++]=G[k];G.length=F}}},Xe=(y,T,J)=>{ve.n>=re||(ve.ensure(3),Ye.ensure(1),ve.a[ve.n++]=y-I,ve.a[ve.n++]=T-P,ve.a[ve.n++]=J-U,Ye.a[Ye.n++]=Y)},We=(y,T,J,G,F,k,O,W,X)=>{if(Oe>=a){_e=!0;return}let V=y.lines;V.p.ensure(6),V.c.ensure(6),V.e.ensure(1);let ee=V.p.a,z=V.p.n;ee[z]=T-I,ee[z+1]=J-P,ee[z+2]=G-U,ee[z+3]=F-I,ee[z+4]=k-P,ee[z+5]=O-U,V.p.n=z+6;let q=V.c.a;z=V.c.n;let ce=W>>16&255,K=W>>8&255,te=W&255;q[z]=ce,q[z+1]=K,q[z+2]=te,q[z+3]=ce,q[z+4]=K,q[z+5]=te,V.c.n=z+6,V.e.a[V.e.n++]=X,Oe++},Ue=(y,T,J,G,F,k,O)=>{if(Pe>=l){_e=!0;return}let W=y[T];W.p.ensure(9),W.c.ensure(9),W.e.ensure(1);let X=W.p.a,V=W.p.n;X[V]=J[0]-I,X[V+1]=J[1]-P,X[V+2]=J[2]-U,X[V+3]=G[0]-I,X[V+4]=G[1]-P,X[V+5]=G[2]-U,X[V+6]=F[0]-I,X[V+7]=F[1]-P,X[V+8]=F[2]-U,W.p.n=V+9;let ee=W.c.a;V=W.c.n;let z=k>>16&255,q=k>>8&255,ce=k&255;for(let K=0;K<3;K++)ee[V+3*K]=z,ee[V+3*K+1]=q,ee[V+3*K+2]=ce;W.c.n=V+9,W.e.a[W.e.n++]=O,Pe++},Ne=(y,T,J,G,F,k)=>{let O=y.pts;O.p.ensure(3),O.c.ensure(3),O.e.ensure(1),O.p.a[O.p.n++]=T-I,O.p.a[O.p.n++]=J-P,O.p.a[O.p.n++]=G-U,O.c.a[O.c.n++]=F>>16&255,O.c.a[O.c.n++]=F>>8&255,O.c.a[O.c.n++]=F&255,O.e.a[O.e.n++]=k},ln=new Map,Dt=(y,T)=>{if(!y)return null;let J=y.toUpperCase()+"|"+T;if(ln.has(J))return ln.get(J);let G=i.ltypes.get(y.toUpperCase()),F=null;if(G&&G.length>=2){let k=D(i.ltscale,1)*T,O=G.map(X=>X*k),W=O.reduce((X,V)=>X+Math.abs(V),0);W>1e-9&&(F={el:O,total:W})}return ln.set(J,F),F},_t=(y,T,J,G,F,k)=>{let O=T.length/3;for(let K=0;K<O;K++)le(T[3*K],T[3*K+1],T[3*K+2]);let W=J?O:O-1,X=0;if(k){for(let K=0;K<W;K++){let te=(K+1)%O;X+=Math.hypot(T[3*te]-T[3*K],T[3*te+1]-T[3*K+1],T[3*te+2]-T[3*K+2])}X/k.total>3e4&&(k=null)}if(!k){for(let K=0;K<W;K++){let te=(K+1)%O;We(y,T[3*K],T[3*K+1],T[3*K+2],T[3*te],T[3*te+1],T[3*te+2],G,F)}return}let V=k.el,ee=k.total*.03,z=0,q=V[0]>=0,ce=V[0]===0?ee:Math.abs(V[0]);for(let K=0;K<W;K++){let te=(K+1)%O,_=T[3*K],he=T[3*K+1],fe=T[3*K+2],ze=T[3*te]-_,$e=T[3*te+1]-he,Tt=T[3*te+2]-fe,Je=Math.hypot(ze,$e,Tt);if(Je<1e-12)continue;let ct=0;for(;Je-ct>1e-9;){let Et=Math.min(ce,Je-ct);if(q){let St=ct/Je,dt=(ct+Et)/Je;We(y,_+ze*St,he+$e*St,fe+Tt*St,_+ze*dt,he+$e*dt,fe+Tt*dt,G,F)}if(ct+=Et,ce-=Et,ce<=1e-12){z=(z+1)%V.length;let St=V[z];q=St>=0,ce=St===0?ee:Math.abs(St),St===0&&(q=!0)}}}},Yt=(y,T)=>{let J=T.length/3,G=new Float64Array(T.length);for(let F=0;F<J;F++){let k=T[3*F],O=T[3*F+1],W=T[3*F+2];G[3*F]=y[0]*k+y[4]*O+y[8]*W+y[12],G[3*F+1]=y[1]*k+y[5]*O+y[9]*W+y[13],G[3*F+2]=y[2]*k+y[6]*O+y[10]*W+y[14]}return G},Ke=(y,T,J,G)=>[y[0]*T+y[4]*J+y[8]*G+y[12],y[1]*T+y[5]*J+y[9]*G+y[13],y[2]*T+y[6]*J+y[10]*G+y[14]],Ut=(y,T)=>Na(T)?y.m:oi(y.m,av(T).elements),ot=(y,T)=>{let J=y.layer??"0";J==="0"&&T.layer&&(J=T.layer);let G=Re(T.force||J);Y=G.idx;let F;if(typeof y.color=="number")F=y.color&16777215;else{let O=y.colorIndex;O==null||O===256||O<0?F=Se(J):O===0?F=T.blockRgb??Te:F=pe(O)}let k=y.lineType;return!k||String(k).toUpperCase()==="BYLAYER"?k=Le(J).ltype:String(k).toUpperCase()==="BYBLOCK"&&(k=T.ltype||"Continuous"),{ld:G,rgb:F,lt:k,ln:J}},it=(y,T)=>(ie.push({s:y,v:T}),ie.length-1),xi=(y,T,J,G,F,k,O)=>{let W=k-F;for(;W<=0;)W+=ai;let X=Math.max(4,Math.ceil(W/n));for(let V=0;V<=X;V++){let ee=F+W*V/X;O.push(y+G*Math.cos(ee),T+G*Math.sin(ee),J)}},li=(y,T,J)=>{let G=[],F=y.length;for(let k=0;k<F;k++){let O=y[k];G.push(D(O.x),D(O.y),J);let W=D(O.bulge);if(Math.abs(W)>1e-9&&(k<F-1||T)){let X=y[(k+1)%F],V=[];Xd(D(O.x),D(O.y),D(X.x),D(X.y),W,V,n);for(let ee=0;ee<V.length;ee+=2)G.push(V[ee],V[ee+1],J)}}return G},ci=y=>{let T=[],J=y.type;if(J===1||y.start&&y.end&&y.radius===void 0&&y.lengthOfMinorAxis===void 0&&!y.center)T.push(D(y.start.x),D(y.start.y),D(y.end.x),D(y.end.y));else if(J===2||y.center&&y.radius!==void 0){let G=c(y.startAngle),F=c(y.endAngle),k=y.isCCW!==!1,O=k?F-G:G-F;for(;O<=0;)O+=ai;k||(O=-O);let W=Math.max(4,Math.ceil(Math.abs(O)/n));for(let X=0;X<=W;X++){let V=G+O*X/W;T.push(D(y.center.x)+y.radius*Math.cos(V),D(y.center.y)+y.radius*Math.sin(V))}}else if(J===3||y.lengthOfMinorAxis!==void 0){let G=D(y.end.x),F=D(y.end.y),k=D(y.lengthOfMinorAxis,1),O=c(y.startAngle),W=c(y.endAngle),X=y.isCCW!==!1,V=X?W-O:O-W;for(;V<=0;)V+=ai;X||(V=-V);let ee=Math.max(8,Math.ceil(Math.abs(V)/n));for(let z=0;z<=ee;z++){let q=O+V*z/ee;T.push(D(y.center.x)+Math.cos(q)*G-Math.sin(q)*F*k,D(y.center.y)+Math.cos(q)*F+Math.sin(q)*G*k)}}else if(y.controlPoints||y.fitDatum){let G=(y.controlPoints||[]).map(F=>[D(F.x),D(F.y),0]);if(G.length>D(y.degree,3)&&y.knots?.length===G.length+D(y.degree,3)+1){let F=y.controlPoints.map(O=>D(O.weight,1)),k=qd(D(y.degree,3),y.knots,G,F,Math.max(16,G.length*8));for(let O=0;O<k.length;O+=3)T.push(k[O],k[O+1])}else if(y.fitDatum?.length){let F=Kd(y.fitDatum.map(k=>[D(k.x),D(k.y),0]),8);for(let k=0;k<F.length;k+=3)T.push(F[k],F[k+1])}else for(let F of G)T.push(F[0],F[1])}return T},Rn=y=>{let T=[];for(let J of y.boundaryPaths||[]){let G=[];if(J.vertices){let F=J.vertices,k=F.length,O=J.isClosed!==!1;for(let W=0;W<k;W++){let X=F[W];G.push(D(X.x),D(X.y));let V=D(X.bulge);if(Math.abs(V)>1e-9&&(W<k-1||O)){let ee=F[(W+1)%k];Xd(D(X.x),D(X.y),D(ee.x),D(ee.y),V,G,n)}}}else if(J.edges){let F=[];for(let k of J.edges){let O=ci(k);if(!(O.length<4))if(F.length){let W=F[F.length-2],X=F[F.length-1],V=Math.hypot(O[0]-W,O[1]-X);if(Math.hypot(O[O.length-2]-W,O[O.length-1]-X)<V){let z=[];for(let q=O.length-2;q>=0;q-=2)z.push(O[q],O[q+1]);O=z}F.push(...O.slice(2))}else F=O.slice()}G=F}G.length>=6&&T.push(G)}return T},Ei=(y,T)=>{let J=y.map((k,O)=>({i:O,pts:k,area:Math.abs(cv(k)),depth:0,parent:-1}));for(let k of J)for(let O of J)k!==O&&O.area>k.area&&$d(k.pts[0],k.pts[1],O.pts)&&k.depth++;let G=[],F=T===0||T===void 0?J.filter(k=>k.depth%2===0):J.filter(k=>k.depth===0);for(let k of F){let O=[];if(T!==2)for(let W of J)W.depth===k.depth+1&&$d(W.pts[0],W.pts[1],k.pts)&&O.push(W.pts);G.push({outer:k.pts,holes:O})}return G},vn=(y,T,J,G,F,k,O)=>{let W=q=>{let ce=[];for(let K=0;K<q.length;K+=2)ce.push(new an(q[K],q[K+1]));return ce},X=W(y.outer),V=y.holes.map(W),ee;try{ee=es.triangulateShape(X,V)}catch{return}let z=[...X];for(let q of V)z.push(...q);for(let q of ee){let ce=q.map(K=>Ke(J,z[K].x,z[K].y,T));for(let K of ce)le(K[0],K[1],K[2]);Ue(G,F,ce[0],ce[1],ce[2],k,O)}},cn=(y,T,J,G,F,k,O)=>{let W=G.definitionLines||[];if(!W.length)return;let X=[y.outer,...y.holes],V=1/0,ee=1/0,z=-1/0,q=-1/0;for(let te=0;te<y.outer.length;te+=2)V=Math.min(V,y.outer[te]),z=Math.max(z,y.outer[te]),ee=Math.min(ee,y.outer[te+1]),q=Math.max(q,y.outer[te+1]);let ce=[[V,ee],[z,ee],[z,q],[V,q]],K=6e3;for(let te of W){let _=c(te.angle),he=Math.cos(_),fe=Math.sin(_),ze=-fe,$e=he,Tt=D(te.offset?.x),Je=D(te.offset?.y),ct=D(te.base?.x),Et=D(te.base?.y);if(Math.abs(Tt*ze+Je*$e)<1e-9)continue;let dt=1/0,Ve=-1/0;for(let zt of ce){let we=((zt[0]-ct)*ze+(zt[1]-Et)*$e)/(Tt*ze+Je*$e);dt=Math.min(dt,we),Ve=Math.max(Ve,we)}let ft=Math.floor(dt),qt=Math.ceil(Ve),Fn=1;qt-ft>K&&(Fn=Math.ceil((qt-ft)/K));for(let zt=ft;zt<=qt;zt+=Fn){let we=ct+zt*Tt,En=Et+zt*Je,je=[];for(let pt of X){let Kt=pt.length/2;for(let Vt=0;Vt<Kt;Vt++){let as=(Vt+1)%Kt,Si=pt[2*Vt],Mi=pt[2*Vt+1],_r=pt[2*as],os=pt[2*as+1],bi=(Si-we)*ze+(Mi-En)*$e,Un=(_r-we)*ze+(os-En)*$e;if(bi<0&&Un>=0||Un<0&&bi>=0){let Ai=bi/(bi-Un),Ua=Si+(_r-Si)*Ai,ls=Mi+(os-Mi)*Ai;je.push((Ua-we)*he+(ls-En)*fe)}}}je.sort((pt,Kt)=>pt-Kt);for(let pt=0;pt+1<je.length;pt+=2){let Kt=Ke(J,we+he*je[pt],En+fe*je[pt],T),Vt=Ke(J,we+he*je[pt+1],En+fe*je[pt+1],T);le(Kt[0],Kt[1],Kt[2]),le(Vt[0],Vt[1],Vt[2]),We(F,Kt[0],Kt[1],Kt[2],Vt[0],Vt[1],Vt[2],k,O)}}}},ke=(y,T)=>{y.texts.push(T),be++},Cn=(y,T)=>{for(let J of y)xn(J,T)};function xn(y,T){if(!y||y.isVisible===!1)return;let J=y.type;switch(J){case"LINE":{let{ld:G,rgb:F,lt:k}=ot(y,T),O=it(y,T.via);G.count++;let W=Ke(T.m,...gn(y.startPoint)),X=Ke(T.m,...gn(y.endPoint));_t(G,Float64Array.from([...W,...X]),!1,F,O,Dt(k,D(y.lineTypeScale,1))),Xe(...W),Xe(...X);break}case"CIRCLE":{let{ld:G,rgb:F,lt:k}=ot(y,T),O=it(y,T.via);G.count++;let W=Ut(T,y.extrusionDirection),[X,V,ee]=gn(y.center),z=D(y.radius),q=[],ce=Math.max(24,Math.ceil(ai/n));for(let K=0;K<ce;K++){let te=ai*K/ce;q.push(X+z*Math.cos(te),V+z*Math.sin(te),ee)}_t(G,Yt(W,q),!0,F,O,Dt(k,D(y.lineTypeScale,1))),Xe(...Ke(W,X,V,ee));for(let K=0;K<4;K++)Xe(...Ke(W,X+z*Math.cos(K*Math.PI/2),V+z*Math.sin(K*Math.PI/2),ee));break}case"ARC":{let{ld:G,rgb:F,lt:k}=ot(y,T),O=it(y,T.via);G.count++;let W=Ut(T,y.extrusionDirection),[X,V,ee]=gn(y.center),z=D(y.radius),q=c(y.startAngle),ce=c(y.endAngle),K=[];xi(X,V,ee,z,q,ce,K),_t(G,Yt(W,K),!1,F,O,Dt(k,D(y.lineTypeScale,1))),Xe(...Ke(W,X,V,ee)),Xe(...Ke(W,K[0],K[1],K[2])),Xe(...Ke(W,K[K.length-3],K[K.length-2],K[K.length-1]));break}case"ELLIPSE":{let{ld:G,rgb:F,lt:k}=ot(y,T),O=it(y,T.via);G.count++;let[W,X,V]=gn(y.center),[ee,z,q]=gn(y.majorAxisEndPoint),ce=0,K=0,te=1;y.extrusionDirection&&(ce=D(y.extrusionDirection.x),K=D(y.extrusionDirection.y),te=D(y.extrusionDirection.z,1));let _=D(y.axisRatio,1),he=K*q-te*z,fe=te*ee-ce*q,ze=ce*z-K*ee,$e=D(y.startAngle),Je=D(y.endAngle)-$e;for((Math.abs(Je)<1e-9||Math.abs(Je-ai)<1e-6)&&($e=0,Je=ai);Je<=0;)Je+=ai;let ct=Math.abs(Je-ai)<1e-6,Et=Math.max(16,Math.ceil(Je/n)),St=[],dt=ct?Et-1:Et;for(let Ve=0;Ve<=dt;Ve++){let ft=$e+Je*Ve/Et;St.push(W+Math.cos(ft)*ee+Math.sin(ft)*he*_,X+Math.cos(ft)*z+Math.sin(ft)*fe*_,V+Math.cos(ft)*q+Math.sin(ft)*ze*_)}_t(G,Yt(T.m,St),ct,F,O,Dt(k,D(y.lineTypeScale,1))),Xe(...Ke(T.m,W,X,V));break}case"LWPOLYLINE":{if(!y.vertices?.length)break;let{ld:G,rgb:F,lt:k}=ot(y,T),O=it(y,T.via);G.count++;let W=Ut(T,y.extrusionDirection),X=i.source==="dwg"?(D(y.flag)&512)!==0:(D(y.flag)&1)===1,V=li(y.vertices,X,D(y.elevation));_t(G,Yt(W,V),X,F,O,Dt(k,D(y.lineTypeScale,1)));for(let ee of y.vertices)Xe(...Ke(W,D(ee.x),D(ee.y),D(y.elevation)));break}case"POLYLINE":case"POLYLINE2D":case"POLYLINE3D":Ht(y,T);break;case"SPLINE":{let G=(y.controlPoints||[]).map(q=>[D(q.x),D(q.y),D(q.z)]),F=(y.fitPoints||[]).map(q=>[D(q.x),D(q.y),D(q.z)]),k=D(y.degree,3),O=null;if(G.length>k&&y.knots?.length===G.length+k+1){let q=y.weights&&y.weights.length===G.length?y.weights:null;O=qd(k,y.knots,G,q,Math.min(4e3,Math.max(24,G.length*10)))}else F.length>=2?O=Kd(F,10):G.length>=2&&(O=G.flat());if(!O||O.length<6){m("SPLINE (no data)");break}let{ld:W,rgb:X,lt:V}=ot(y,T),ee=it(y,T.via);W.count++,_t(W,Yt(T.m,O),!1,X,ee,Dt(V,D(y.lineTypeScale,1)));let z=F.length?F:G;for(let q of z)Xe(...Ke(T.m,...q));break}case"3DFACE":{let F=(y.vertices||[y.corner1,y.corner2,y.corner3,y.corner4]).filter(Boolean).map(z=>Ke(T.m,...gn(z)));if(F.length<3)break;let{ld:k,rgb:O}=ot(y,T),W=it(y,T.via);k.count++;let X=F.length>=4&&!(F[3][0]===F[2][0]&&F[3][1]===F[2][1]&&F[3][2]===F[2][2]);Ue(k,"tris",F[0],F[1],F[2],O,W),X&&Ue(k,"tris",F[0],F[2],F[3],O,W);let V=D(y.flag),ee=X?4:3;for(let z=0;z<ee;z++){if(V&1<<z)continue;let q=F[z],ce=F[(z+1)%ee];le(q[0],q[1],q[2]),We(k,q[0],q[1],q[2],ce[0],ce[1],ce[2],O,W)}Xe(...F[0]);for(let z=1;z<ee;z++)Xe(...F[z]);break}case"SOLID":case"TRACE":{let F=(y.points||[y.corner1,y.corner2,y.corner3,y.corner4]).filter(Boolean);if(F.length<3)break;let{ld:k,rgb:O}=ot(y,T),W=it(y,T.via);k.count++;let X=Ut(T,y.extrusionDirection),V=y.elevation!==void 0?D(y.elevation):j!==null&&T.depth===0&&Na(y.extrusionDirection)?j:0,ee=F.map(z=>Ke(X,D(z.x),D(z.y),z.z!==void 0?D(z.z):V));Ue(k,"fills",ee[0],ee[1],ee[2],O,W),ee.length>=4&&Ue(k,"fills",ee[1],ee[3],ee[2],O,W);for(let z of ee)le(z[0],z[1],z[2]);break}case"POINT":{let{ld:G,rgb:F}=ot(y,T),k=it(y,T.via);G.count++;let O=gn(y.position);(O[2]<=-99999||O[2]>=1e8)&&(O[2]=0,d++);let W=Ke(T.m,...O);le(...W),Ne(G,W[0],W[1],W[2],F,k),Xe(...W);break}case"LEADER":{let G=(y.vertices||[]).map(X=>Ke(T.m,...gn(X)));if(G.length<2)break;let{ld:F,rgb:k,lt:O}=ot(y,T),W=it(y,T.via);F.count++,_t(F,Float64Array.from(G.flat()),!1,k,W,Dt(O,1));break}case"HATCH":{let G=Rn(y);if(!G.length){m("HATCH (no boundary)");break}let{ld:F,rgb:k}=ot(y,T),O=it(y,T.via);F.count++;let W=Ut(T,y.extrusionDirection),X=y.elevation??y.elevationPoint?.z,V=X!==void 0?D(X):j!==null&&T.depth===0&&Na(y.extrusionDirection)?j:0,ee=Ei(G,D(y.hatchStyle)),z=k;y.gradientColors?.length&&typeof y.gradientColors[0].rgb=="number"&&(z=y.gradientColors[0].rgb&16777215);let q=D(y.solidFill)===1||y.gradientFlag===1||y.gradientName;for(let ce of ee)q?vn(ce,V,W,F,"fills",z,O):y.definitionLines?.length?cn(ce,V,W,y,F,k,O):vn(ce,V,W,F,"pfills",k,O);break}case"TEXT":case"ATTRIB":{if(J==="ATTRIB"&&(D(y.flag)&1||y.isInvisible))break;y.text&&typeof y.text=="object"&&(y={...y,...y.text,text:y.text.text,flag:y.flag});let G=Zd(y.text,!1);if(!G.trim())break;let{ld:F,rgb:k}=ot(y,T),O=it(y,T.via);F.count++;let W=Ut(T,y.extrusionDirection),X=D(y.halign??y.horizontalJustification),V=D(y.valign??y.verticalJustification),ee=X!==0||V!==0,z=ee&&y.endPoint&&(D(y.endPoint.x)!==0||D(y.endPoint.y)!==0)?y.endPoint:y.startPoint,q=D(z?.x),ce=D(z?.y),K=y.startPoint&&y.startPoint.z!==void 0?D(y.startPoint.z):y.elevation!==void 0?D(y.elevation):j!==null&&T.depth===0&&Na(y.extrusionDirection)?j:0,te=oi(W,oi(Oa(q,ce,K),Hd(c(y.rotation))));ke(F,{kind:"TEXT",str:G,T:te,h:D(y.textHeight??y.height,1)||1,wf:D(y.xScale??y.widthFactor,1)||1,obl:c(y.obliqueAngle),hal:X,val:V,rgb:k,id:O,w:0,endX:ee?D(y.startPoint?.x)-D(y.endPoint?.x):0});let _=Ke(te,0,0,0);le(..._),Xe(..._);break}case"MTEXT":{let G=Zd(y.text,!0);if(!G.trim())break;let{ld:F,rgb:k}=ot(y,T),O=it(y,T.via);F.count++;let W=gn(y.insertionPoint),X=y.direction||y.directionVector,V=y.extrusionDirection,ee=Ut(T,null),z;if(X&&Math.hypot(D(X.x),D(X.y),D(X.z))>1e-9)z=[D(X.x),D(X.y),D(X.z)];else{let $e=c(y.rotation);z=[Math.cos($e),Math.sin($e),0]}let q=Math.hypot(...z)||1;z=z.map($e=>$e/q);let ce=V?[D(V.x),D(V.y),V.z!==void 0?D(V.z,1):1]:[0,0,1],K=Math.hypot(...ce)||1,te=ce.map($e=>$e/K),_=[te[1]*z[2]-te[2]*z[1],te[2]*z[0]-te[0]*z[2],te[0]*z[1]-te[1]*z[0]],he=new bt().set(z[0],_[0],te[0],W[0],z[1],_[1],te[1],W[1],z[2],_[2],te[2],W[2],0,0,0,1).elements.slice(),fe=oi(ee,he);ke(F,{kind:"MTEXT",str:G,T:fe,h:D(y.textHeight??y.height,1)||1,wf:1,obl:0,hal:0,val:0,att:D(y.attachmentPoint,1)||1,rgb:k,id:O,w:D(y.rectWidth??y.width),endX:0});let ze=Ke(fe,0,0,0);le(...ze),Xe(...ze);break}case"INSERT":Ln(y,T);break;case"DIMENSION":{let G=y.name?i.blocks.get(y.name):null;if(!G||!G.entities.length){m("DIMENSION (no block)");break}if(T.depth>=r)break;let{ln:F,rgb:k,lt:O}=ot(y,T),W={m:T.m,layer:F,blockRgb:k,ltype:O,force:T.force||null,via:T.via>=0?T.via:it(y,-1),depth:T.depth+1};Cn(G.entities,W);break}case"ATTDEF":case"VERTEX":case"SEQEND":case"ENDBLK":case"BLOCK":break;default:m(J||"(sin tipo)")}}function Ht(y,T){let J=D(y.flag),G=y.vertices||[];if(!G.length)return;let F;y.type==="POLYLINE3D"||y.type==="POLYLINE"&&J&8?F="3d":y.type==="POLYLINE"&&J&64?F="pface":y.type==="POLYLINE"&&J&16?F="mesh":F="2d";let{ld:k,rgb:O,lt:W}=ot(y,T),X=Dt(W,D(y.lineTypeScale,1));if(F==="pface"){let z=G.filter(te=>D(te.flag)&64).map(te=>Ke(T.m,D(te.x),D(te.y),D(te.z))),q=G.filter(te=>!(D(te.flag)&64)&&D(te.flag)&128),ce=!1,K=it(y,T.via);k.count++;for(let te of q){let _=[te.polyfaceIndex0??te.faceA,te.polyfaceIndex1??te.faceB,te.polyfaceIndex2??te.faceC,te.polyfaceIndex3??te.faceD].filter(fe=>typeof fe=="number"&&fe!==0);if(_.length<3)continue;let he=_.map(fe=>z[Math.abs(fe)-1]).filter(Boolean);if(!(he.length<3)){ce=!0,Ue(k,"tris",he[0],he[1],he[2],O,K),he.length>=4&&Ue(k,"tris",he[0],he[2],he[3],O,K);for(let fe=0;fe<he.length;fe++){let ze=he[fe],$e=he[(fe+1)%he.length];le(...ze),We(k,...ze,...$e,O,K)}}}ce||(m("POLYLINE polyface mesh (no indices)"),k.count--);return}if(F==="mesh"){let z=D(y.meshMVertexCount),q=D(y.meshNVertexCount);if(z<2||q<2||z*q>G.length){m("POLYLINE 3D mesh (no dimensions)");return}let ce=it(y,T.via);k.count++;let K=(he,fe)=>{let ze=G[he%z*q+fe%q];return Ke(T.m,D(ze.x),D(ze.y),D(ze.z))},te=J&1?z:z-1,_=J&32?q:q-1;for(let he=0;he<te;he++)for(let fe=0;fe<_;fe++){let ze=K(he,fe),$e=K(he+1,fe),Tt=K(he+1,fe+1),Je=K(he,fe+1);Ue(k,"tris",ze,$e,Tt,O,ce),Ue(k,"tris",ze,Tt,Je,O,ce),le(...ze),We(k,...ze,...$e,O,ce),We(k,...ze,...Je,O,ce)}return}let V=it(y,T.via);k.count++;let ee=(J&1)===1;if(F==="3d"){let z=G.filter(ce=>!(D(ce.flag)&16)),q=[];for(let ce of z)q.push(D(ce.x),D(ce.y),D(ce.z));_t(k,Yt(T.m,q),ee,O,V,X);for(let ce of z)Xe(...Ke(T.m,D(ce.x),D(ce.y),D(ce.z)))}else{let z=Ut(T,y.extrusionDirection),q=G;q.some(_=>D(_.flag)&8)&&(q=q.filter(_=>!(D(_.flag)&16)));let ce=D(y.elevation),K=_=>ce!==0?ce:D(_.z),te=li(q.map(_=>({x:_.x,y:_.y,bulge:_.bulge})),ee,q.length?K(q[0]):0);_t(k,Yt(z,te),ee,O,V,X);for(let _ of q)Xe(...Ke(z,D(_.x),D(_.y),K(_)))}}function Ln(y,T){let J=i.blocks.get(y.name);if(!J){m("INSERT (block not found)");return}if(T.depth>=r){m("INSERT (nesting > "+r+")");return}let{ln:G,rgb:F,lt:k}=ot(y,T),O=Le(G),W=T.via>=0?T.via:it(y,-1),X=y.xScale??1,V=y.yScale??1,ee=y.zScale??1,z=gn(J.base),q=gn(y.insertionPoint),ce=Ut(T,y.extrusionDirection),K=c(y.rotation),te=Math.max(1,D(y.columnCount,1)),_=Math.max(1,D(y.rowCount,1)),he=D(y.columnSpacing),fe=D(y.rowSpacing),ze=T.force||(O.off||O.frozen?G:null),$e=oi(ce,oi(Oa(q[0],q[1],q[2]),Hd(K))),Tt=oi(lv(D(X,1),D(V,1),D(ee,1)),Oa(-z[0],-z[1],-z[2]));for(let ct=0;ct<_;ct++)for(let Et=0;Et<te;Et++){let dt={m:oi($e,oi(Oa(Et*he,ct*fe,0),Tt)),layer:G,blockRgb:F,ltype:k,force:ze,via:W,depth:T.depth+1};Cn(J.entities,dt)}if(y.attribs?.length)for(let ct of y.attribs)xn({...ct,type:"ATTRIB"},{...T,via:W});let Je=Ke(ce,...q);Xe(...Je)}let Dn={m:ov,layer:null,blockRgb:null,ltype:null,force:null,via:-1,depth:0};Cn(i.entities,Dn);let vt=(y,T)=>{if(!y.length)return 0;let J=Float64Array.from(y).sort();return J[Math.min(J.length-1,Math.max(0,Math.floor(T*(J.length-1))))]},dn=oe[0]!==1/0?{min:[oe[0]-I,oe[1]-P,oe[2]-U],max:[Q[0]-I,Q[1]-P,Q[2]-U],rmin:[vt(ge,.005)-I,vt(Ae,.005)-P,vt(He,.005)-U],rmax:[vt(ge,.995)-I,vt(Ae,.995)-P,vt(He,.995)-U]}:{min:[-1,-1,-1],max:[1,1,1],rmin:[-1,-1,-1],rmax:[1,1,1]},Xt=y=>({p:y.p.done(),c:y.c.done(),e:y.e.done()}),$t=[];for(let y of de.values()){let T=Le(y.name);$t.push({name:y.name,color:T.rgb!=null?T.rgb:pe(T.aci??7),hidden:!!(T.off||T.frozen),count:y.count,lines:Xt(y.lines),tris:Xt(y.tris),fills:Xt(y.fills),pfills:Xt(y.pfills),pts:Xt(y.pts),texts:y.texts})}$t.sort((y,T)=>y.name==="0"?-1:T.name==="0"?1:y.name.localeCompare(T.name,"es",{numeric:!0}));let On=new Uint32Array(de.size);$t.forEach((y,T)=>{On[de.get(y.name).idx]=T});let xt=Ye.done();for(let y=0;y<xt.length;y++)xt[y]=On[xt[y]];return{origin:[I,P,U],layers:$t,reg:ie,snap:ve.done(),snapLayer:xt,bounds:dn,stats:{source:i.source,entities:ie.length,topLevel:i.entities.length,segments:Oe,triangles:Pe,texts:be,truncated:_e,unsupported:Object.fromEntries([...f.entries()].sort((y,T)=>T[1]-y[1])),textZ:j,noZ:d}}}var is=i=>Number.isFinite(i)?i:0;function Qd(i,e){let[t,n,r]=i.origin,a=[],l=1/0,c=-1/0,d=0;for(let b of i.layers){let A=1/0,L=-1/0,I=0,P=0,U=(H,j)=>{let de=H.p;if(de)for(let Re=2;Re<de.length;Re+=3){let Ee=de[Re]+r;P++,Ee<A&&(A=Ee),Ee>L&&(L=Ee),Math.abs(Ee)>1e-6&&I++}};U(b.lines),U(b.tris),U(b.fills),U(b.pfills),U(b.pts);for(let H of b.texts){let j=H.T[14];P++,j<A&&(A=j),j>L&&(L=j),Math.abs(j)>1e-6&&I++}P&&a.push({name:b.name,zmin:A,zmax:L,nonZero:I,total:P,count:b.count}),I&&(d+=I,A<l&&(l=A),L>c&&(c=L))}let f=new Map;for(let b of i.layers){let A=b.lines;if(A.p)for(let I=0;I<A.e.length;I++){let P=A.p[6*I+2]+r,U=A.p[6*I+5]+r;if(Math.abs(P)>1e-6||Math.abs(U)>1e-6){let H=b.name+"|"+P.toFixed(2)+(Math.abs(U-P)>.005?"~"+U.toFixed(2):""),j=f.get(H)||{layer:b.name,z:P,z1:U,n:0,ids:new Set};j.n++,j.ids.add(A.e[I]),f.set(H,j)}}let L=b.pts;if(L.p)for(let I=0;I<L.e.length;I++){let P=L.p[3*I+2]+r;if(Math.abs(P)>1e-6){let U=b.name+"|"+P.toFixed(2)+"|pt",H=f.get(U)||{layer:b.name,z:P,z1:P,n:0,ids:new Set,pt:!0};H.n++,H.ids.add(L.e[I]),f.set(U,H)}}}let m=[...f.values()].map(b=>({layer:b.layer,z:b.z,z1:b.z1,n:b.n,pt:!!b.pt,id:[...b.ids][0]})),g=new Map;for(let b of m){let A=b.layer+"|"+b.pt;(g.get(A)||g.set(A,[]).get(A)).push(b)}let v=[];for(let b of g.values())if(b.length<=8)v.push(...b);else{let A=1/0,L=-1/0,I=0;for(let P of b)A=Math.min(A,P.z,P.z1),L=Math.max(L,P.z,P.z1),I+=P.n;v.push({layer:b[0].layer,z:A,z1:L,n:I,pt:b[0].pt,id:b[0].id,range:!0})}v.sort((b,A)=>b.z-A.z);let E=[];i.reg.forEach((b,A)=>{let L=b.s;if(L.type==="INSERT"&&L.attribs?.length&&b.v<0){let I={};for(let P of L.attribs){let U=typeof P.text=="object"?P.text?.text:P.text;P.tag&&(I[P.tag]=U)}if(E.some(P=>P.name===(I.NAME||I.Name||L.name)&&Math.hypot(P.x-is(L.insertionPoint?.x),P.y-is(L.insertionPoint?.y))<.01))return;E.push({id:A,x:is(L.insertionPoint?.x),y:is(L.insertionPoint?.y),z:is(L.insertionPoint?.z),attrs:I,name:I.NAME||I.Name||L.name})}});let S=[];if(i.layers.forEach((b,A)=>{let L=b.pts;for(let I=0;I<L.e.length;I++)S.push({layer:b.name,li:A,id:L.e[I],x:L.p[3*I]+t,y:L.p[3*I+1]+n,z:L.p[3*I+2]+r,name:""})}),E.length)for(let b of S){let A=null,L=1.5;for(let I of E){let P=Math.hypot(I.x-b.x,I.y-b.y);P<L&&(L=P,A=I)}A&&(b.name=A.name)}let C=!v.length;return{layers:a,withZ:v,inserts:E,points:S,flat:C,zmin:d?l:0,zmax:d?c:0,noZ:i.stats.noZ||0}}function jd(i){let e=t=>'"'+String(t).replace(/"/g,'""')+'"';return["layer,name,east,north,elevation",...i.map(t=>[e(t.layer),e(t.name),t.x.toFixed(4),t.y.toFixed(4),t.z.toFixed(4)].join(","))].join(`\r
`)}var rs=(i,e,t)=>"#"+(16777216|i<<16|e<<8|t).toString(16).slice(1),ul=i=>String(i).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),eu=i=>(i[0]*299+i[1]*587+i[2]*114)/1e3,hl={cad:{bg:"#212830",stroke:[255,255,255]},bw:{bg:"#ffffff",stroke:[0,0,0]},color:{bg:"#ffffff",stroke:[0,0,0]}};function fl(i,e){let t=eu(e);if(i==="bw")return[0,0,0];if(i==="color"){if(t>215||t<25)return[0,0,0];if(t>125){let n=125/t;return[Math.round(e[0]*n),Math.round(e[1]*n),Math.round(e[2]*n)]}return e}return t<40?[255,255,255]:e}function dv(i,e){let t=eu(e);if(i==="bw")return t<110?[70,70,70]:[200,200,200];if(i==="color"){if(t>235)return[225,225,225];if(t<25)return[60,60,60];if(t>150){let n=150/t;return[Math.round(e[0]*n),Math.round(e[1]*n),Math.round(e[2]*n)]}return e}return t<40?[255,255,255]:e}function uv(i){let{min:e,max:t,rmin:n,rmax:r}=i.bounds,a=Math.hypot(r[0]-n[0],r[1]-n[1])||1,l=Math.hypot(t[0]-e[0],t[1]-e[1]),[c,d]=l<6*a?[e,t]:[n,r],f=(d[0]-c[0])*.02||1,m=(d[1]-c[1])*.02||1;return{cx:(c[0]+d[0])/2,cy:(c[1]+d[1])/2,w:d[0]-c[0]+2*f,h:d[1]-c[1]+2*m,a:0}}function tu(i,e=0,t=.02){let n=(i[0]+i[2])/2,r=(i[1]+i[3])/2,a=e*Math.PI/180,l=Math.cos(a),c=Math.sin(a),d=0,f=0;for(let[g,v]of[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]]){let E=g-n,S=v-r;d=Math.max(d,Math.abs(E*l+S*c)),f=Math.max(f,Math.abs(-E*c+S*l))}d*=2,f*=2;let m=Math.max(d,f)*t;return{cx:n,cy:r,w:d+2*m,h:f+2*m,a:e,clip:i}}function nu(i,e={}){let t=hl[e.style]?e.style:e.light?"color":"cad",n=e.width||1600,r=!!e.preview,a=e.maxTexts??(r?1500:2e4),l=e.maxFillTris??(r?4e4:4e5),c=e.region||uv(i),d=c.a||0,f=d*Math.PI/180,m=Math.cos(f),g=Math.sin(f),v=c.w,E=c.h,S=v/n,C=hl[t].bg,b=(e.lineScale??1)*S*(t==="cad"?1.1:1.25),A=Te=>(Math.round(Te*1e3)/1e3).toString(),L=(Math.abs(v*m)+Math.abs(E*g))/2,I=(Math.abs(v*g)+Math.abs(E*m))/2,P=c.cx-L,U=c.cx+L,H=c.cy-I,j=c.cy+I,de=(Te,pe,Se,ie)=>Math.max(Te,Se)<P||Math.min(Te,Se)>U||Math.max(pe,ie)<H||Math.min(pe,ie)>j,Re=r?S*.35:0,Ee=[];Ee.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${A(-v/2)} ${A(-E/2)} ${A(v)} ${A(E)}" width="${n}" height="${Math.round(n*E/v)}">`),Ee.push(`<title>Plan view (local coords, origin E=${i.origin[0]} N=${i.origin[1]})</title>`),e.transparent||Ee.push(`<rect x="${A(-v/2)}" y="${A(-E/2)}" width="${A(v)}" height="${A(E)}" fill="${C}"/>`),Ee.push(`<g transform="rotate(${A(d)}) translate(${A(-c.cx)} ${A(c.cy)})"${c.clip?' clip-path="url(#rc)"':""}>`),c.clip&&Ee.push(`<defs><clipPath id="rc"><rect x="${A(c.clip[0])}" y="${A(-c.clip[3])}" width="${A(c.clip[2]-c.clip[0])}" height="${A(c.clip[3]-c.clip[1])}"/></clipPath></defs>`);let Le=0;for(let Te=0;Te<i.layers.length;Te++){let pe=i.layers[Te];if(pe.hidden||e.visible&&e.visible[Te]===!1)continue;let Se=[];for(let[ie,Oe]of[[pe.fills,1],[pe.tris,.55],[pe.pfills,.9]]){if(!ie||!ie.p||!ie.p.length)continue;let Pe=new Map;for(let be=0;be<ie.p.length/9&&Le<l;be++){let _e=ie.p,ve=9*be;if(de(Math.min(_e[ve],_e[ve+3],_e[ve+6]),Math.min(_e[ve+1],_e[ve+4],_e[ve+7]),Math.max(_e[ve],_e[ve+3],_e[ve+6]),Math.max(_e[ve+1],_e[ve+4],_e[ve+7])))continue;Le++;let Ye=rs(...dv(t,[ie.c[ve],ie.c[ve+1],ie.c[ve+2]])),Y=Pe.get(Ye);Y||Pe.set(Ye,Y=[]),Y.push(`M${A(_e[ve])} ${A(-_e[ve+1])}L${A(_e[ve+3])} ${A(-_e[ve+4])}L${A(_e[ve+6])} ${A(-_e[ve+7])}Z`)}for(let[be,_e]of Pe)Se.push(`<path d="${_e.join("")}" fill="${be}" fill-opacity="${Oe}" stroke="none"/>`)}if(pe.lines.p&&pe.lines.p.length){let ie=new Map,Oe=pe.lines.p.length/6;for(let Pe=0;Pe<Oe;Pe++){let be=pe.lines.p,_e=6*Pe,ve=be[_e],Ye=be[_e+1],Y=be[_e+3],re=be[_e+4];if(de(ve,Ye,Y,re)||Re&&Math.abs(Y-ve)<Re&&Math.abs(re-Ye)<Re)continue;let oe=rs(...fl(t,[pe.lines.c[_e],pe.lines.c[_e+1],pe.lines.c[_e+2]])),Q=ie.get(oe);Q||ie.set(oe,Q=[]),Q.push(`M${A(ve)} ${A(-Ye)}L${A(Y)} ${A(-re)}`)}for(let[Pe,be]of ie)Se.push(`<path d="${be.join("")}" fill="none" stroke="${Pe}" stroke-width="${A(b)}" stroke-linecap="round"/>`)}if(pe.pts.p&&pe.pts.p.length){let ie=rs(...fl(t,[pe.pts.c[0],pe.pts.c[1],pe.pts.c[2]])),Oe=S*3,Pe=[];for(let be=0;be<pe.pts.p.length/3;be++){let _e=pe.pts.p[3*be],ve=pe.pts.p[3*be+1];de(_e,ve,_e,ve)||Pe.push(`<circle cx="${A(_e)}" cy="${A(-ve)}" r="${A(Oe)}"/>`)}Pe.length&&Se.push(`<g fill="${ie}">${Pe.join("")}</g>`)}Se.length&&Ee.push(`<g id="${ul(pe.name)}">`,...Se,"</g>")}if(e.texts!==!1){let Te=0;Ee.push('<g font-family="Arial, Helvetica, sans-serif">');for(let pe=0;pe<i.layers.length;pe++){let Se=i.layers[pe];if(!(Se.hidden||e.visible&&e.visible[pe]===!1))for(let ie of Se.texts){if(Te>=a)break;let Oe=ie.h||1;if(Oe/S<2.2)continue;let Pe=ie.T,be=Pe[12]-i.origin[0],_e=Pe[13]-i.origin[1];if(de(be-Oe*20,_e-Oe*20,be+Oe*20,_e+Oe*20)&&de(be,_e,be,_e))continue;let ve=Math.atan2(Pe[1],Pe[0])*180/Math.PI,Ye=rs(...fl(t,[ie.rgb>>16&255,ie.rgb>>8&255,ie.rgb&255])),Y=ie.hal===1||ie.hal===4?"middle":ie.hal===2?"end":"start";String(ie.str).split(`
`).slice(0,8).forEach((oe,Q)=>{Ee.push(`<text transform="translate(${A(be)} ${A(-_e+Q*Oe*1.5)}) rotate(${A(-ve)})" font-size="${A(Oe)}" fill="${Ye}" text-anchor="${Y}">${ul(oe)}</text>`)}),Te++}}Ee.push("</g>")}if(Ee.push("</g>"),e.scaleBar!==!1){let Te=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3],pe=v*.2,Se=Te.filter(be=>be<=pe).pop()||Te[0],ie=-v/2+v*.03,Oe=E/2-E*.03,Pe=rs(...hl[t].stroke);Ee.push(`<g stroke="${Pe}" stroke-width="${A(S*1.6)}" fill="${Pe}"><path d="M${A(ie)} ${A(Oe)}h${A(Se)}M${A(ie)} ${A(Oe-S*4)}v${A(S*8)}M${A(ie+Se)} ${A(Oe-S*4)}v${A(S*8)}"/><text x="${A(ie)}" y="${A(Oe-S*9)}" font-size="${A(S*13)}" stroke="none" font-family="Arial, Helvetica, sans-serif">${Se} ${ul(e.unit||"u")}</text></g>`)}return Ee.push("</svg>"),Ee.join(`
`)}var mr=i=>typeof i=="number"&&Number.isFinite(i)?i:0,Pn=i=>(i[2]-i[0])*(i[3]-i[1]),pl=(i,e,t)=>e>=i[0]&&e<=i[2]&&t>=i[1]&&t<=i[3],iu=(i,e,t=0)=>e[0]>=i[0]-t&&e[1]>=i[1]-t&&e[2]<=i[2]+t&&e[3]<=i[3]+t,hv=(i,e)=>i[0]<=e[2]&&e[0]<=i[2]&&i[1]<=e[3]&&e[1]<=i[3],Fa=(i,e)=>[Math.min(i[0],e[0]),Math.min(i[1],e[1]),Math.max(i[2],e[2]),Math.max(i[3],e[3])];function fv(i,e,t){let[n,r]=e.origin,a=[];for(let l of i.entities){if(l.type!=="LWPOLYLINE"&&l.type!=="POLYLINE"&&l.type!=="POLYLINE2D")continue;let c=l.vertices;if(!c||c.length<4||c.length>6)continue;let d=c.map(L=>mr(L.x)),f=c.map(L=>mr(L.y)),m=Math.min(...d),g=Math.max(...d),v=Math.min(...f),E=Math.max(...f),S=g-m,C=E-v;if(Math.min(S,C)<.012*t)continue;let b=1e-6*Math.max(S,C)+1e-9,A=!0;for(let L=0;L<c.length;L++){let I=c[L],P=c[(L+1)%c.length],U=Math.abs(mr(I.x)-mr(P.x)),H=Math.abs(mr(I.y)-mr(P.y));if(U>b&&H>b){A=!1;break}}A&&a.push([m-n,v-r,g-n,E-r])}return a}var pv=/(CUADRO|CORTE|DETALLE|LOCALIZ|PLANTA|SECCI|PERFIL|CROQUIS|TABLA|SCHEDULE|SECTION|DETAIL|PLAN\b|PROFILE|TABLE|NOTAS|NOTES)/i,mv=i=>i.replace(/\\[pP][^;]*;/g,"").replace(/\\[fFCcHhWwTtQqAaXx][^;]*;/g,"").replace(/\s+/g," ").trim();function ru(i){let e=null;for(let t of i){let n=mv(String(t.str||""));if(n.length<3||!/[A-Za-zÁÉÍÓÚÑáéíóúñ]{3}/.test(n))continue;let r=(t.h||1)*Math.min(1,n.length/12)*(pv.test(n)?4:1);(!e||r>e.score)&&(e={s:n,score:r})}return e?e.s.length>46?e.s.slice(0,44)+"\u2026":e.s:null}function _v(i,e){let t=Math.hypot(e[2]-e[0],e[3]-e[1])||1,n=new Float64Array(90),r=0;for(let g of i.layers){if(g.hidden)continue;let v=g.lines.p;for(let E=0;E+5<v.length;E+=6){let S=v[E],C=v[E+1],b=v[E+3],A=v[E+4],L=b-S,I=A-C,P=Math.hypot(L,I);if(P<.02*t||P>2*t||!pl(e,(S+b)/2,(C+A)/2))continue;let U=Math.atan2(I,L)*180/Math.PI;U=(U%90+90)%90,n[Math.floor(U)%90]+=P*P,r+=P*P}}if(r===0)return 0;let a=0,l=-1;for(let g=0;g<90;g++){let v=n[(g+89)%90]+2*n[g]+n[(g+1)%90];v>l&&(l=v,a=g)}let c=0,d=0;for(let g=-1;g<=1;g++){let v=(a+g+90)%90;c+=n[v],d+=n[v]*(a+g+.5)}let m=(((c?d/c:a+.5)+45)%90+90)%90-45;return Math.round(m*10)/10}function ml(i,e){let t=e.bounds,n=[t.min[0],t.min[1],t.max[0],t.max[1]],r=[t.rmin[0],t.rmin[1],t.rmax[0],t.rmax[1]],a=Math.hypot(n[2]-n[0],n[3]-n[1]),l=Math.hypot(r[2]-r[0],r[3]-r[1]),c=a<6*l?n:r,d=Math.hypot(c[2]-c[0],c[3]-c[1])||1,f=fv(i,e,d).filter(Y=>iu([c[0]-d*.05,c[1]-d*.05,c[2]+d*.05,c[3]+d*.05],Y));f.sort((Y,re)=>Pn(re)-Pn(Y));let m=null;f.length&&Pn(f[0])>.55*Pn(c)&&(m=f.shift(),f=f.filter(Y=>Pn(Y)<.5*Pn(m)));let g=[];for(let Y of f)g.some(re=>iu(re,Y,.002*d))||g.push(Y);let v=[],E=[];for(let Y of e.layers)if(!Y.hidden)for(let re of Y.texts)E.push(re);let S=Y=>E.filter(re=>pl(Y,re.T[12]-e.origin[0],re.T[13]-e.origin[1]));for(let Y of g){let re=S(Y);for(let oe of re){let Q=oe.T[12]-e.origin[0],ge=oe.T[13]-e.origin[1],Ae=oe.h||1,He=String(oe.str||"").length*Ae*.62,Qe=oe.hal===1||oe.hal===4?Q-He/2:oe.hal===2?Q-He:Q,rt=Qe+He;Y=Fa(Y,[Qe,ge-Ae*.3,rt,ge+Ae*1.2])}Y=[Y[0]-.004*d,Y[1]-.004*d,Y[2]+.004*d,Y[3]+.004*d],v.push({rect:Y,name:ru(re)||`Frame ${v.length+1}`,kind:"frame",texts:re.length})}let C=220,b=c[0],A=c[1],L=(c[2]-c[0])/C||1,I=(c[3]-c[1])/C||1,P=(Y,re)=>[Math.floor((Y-b)/L),Math.floor((re-A)/I)],U=new Map,H=(Y,re,oe)=>{if(Y<c[0]||Y>c[2]||re<c[1]||re>c[3]||g.some(Qe=>pl(Qe,Y,re)))return;let[Q,ge]=P(Y,re),Ae=ge*(C+2)+Q,He=U.get(Ae);He?(He.n+=oe,He.r=Fa(He.r,[Y,re,Y,re])):U.set(Ae,{i:Q,j:ge,n:oe,r:[Y,re,Y,re]})},j=.2*d;for(let Y of e.layers){if(Y.hidden)continue;let re=Y.lines.p;for(let ge=0;ge+5<re.length;ge+=6){let Ae=re[ge],He=re[ge+1],Qe=re[ge+3],rt=re[ge+4],le=Math.hypot(Qe-Ae,rt-He);if(le>j)continue;let Xe=Math.min(8,Math.ceil(le/Math.min(L,I)));for(let We=0;We<=Xe;We++)H(Ae+(Qe-Ae)*We/(Xe||1),He+(rt-He)*We/(Xe||1),1)}let oe=Y.fills.p;for(let ge=0;ge+8<oe.length;ge+=9)H((oe[ge]+oe[ge+3]+oe[ge+6])/3,(oe[ge+1]+oe[ge+4]+oe[ge+7])/3,1);let Q=Y.pts.p;for(let ge=0;ge+2<Q.length;ge+=3)H(Q[ge],Q[ge+1],1)}for(let Y of E)H(Y.T[12]-e.origin[0],Y.T[13]-e.origin[1],2);let de=Math.max(2,Math.round(.03*d/Math.max(L,I))),Re=[...U.values()],Ee=new Map;for(let Y of Re)Ee.set(Y.j*(C+2)+Y.i,Y);let Le=new Set,Te=[];for(let Y of Re){let re=Y.j*(C+2)+Y.i;if(Le.has(re))continue;let oe=[Y];Le.add(re);let Q=Y.r.slice(),ge=0;for(;oe.length;){let Ae=oe.pop();Q=Fa(Q,Ae.r),ge+=Ae.n;for(let He=-de;He<=de;He++)for(let Qe=-de;Qe<=de;Qe++){let rt=(Ae.j+He)*(C+2)+(Ae.i+Qe),le=Ee.get(rt);le&&!Le.has(rt)&&(Le.add(rt),oe.push(le))}}Te.push({rect:Q,n:ge})}let pe=Te;for(let Y=0;Y<10;Y++){let re=!1,oe=[];for(let Q of pe){let ge=oe.find(Ae=>hv(Ae.rect,Q.rect));ge?(ge.rect=Fa(ge.rect,Q.rect),ge.n+=Q.n,re=!0):oe.push({rect:Q.rect.slice(),n:Q.n})}if(pe=oe,!re)break}let Se=c[2]-c[0],ie=c[3]-c[1],Pe=pe.filter(Y=>{let re=Y.rect[2]-Y.rect[0],oe=Y.rect[3]-Y.rect[1];return!(Math.max(re,oe)<.045*d||Y.n<40||re>.9*Se||oe>.9*ie||Math.max(re,oe)>5*Math.min(re,oe)&&Math.max(re,oe)>.5*Math.max(Se,ie))}).sort((Y,re)=>Pn(re.rect)-Pn(Y.rect)).slice(0,10).map(Y=>{let re=.006*d,oe=[Y.rect[0]-re,Y.rect[1]-re,Y.rect[2]+re,Y.rect[3]+re];return{r:oe,c:Y,angle:_v(e,oe)}}),be=-1,_e=0;Pe.forEach((Y,re)=>{Math.abs(Y.angle)>3&&Pn(Y.r)>_e&&(_e=Pn(Y.r),be=re)}),be<0&&Pe.length&&(be=0);let ve=0;return Pe.forEach((Y,re)=>{let oe=S(Y.r),Q=re===be;v.push({rect:Y.r,name:Q?"Plan":ru(oe)||`Detail ${++ve}`,kind:Q?"plan":"detail",texts:oe.length,weight:Y.c.n,angle:Y.angle})}),v.sort((Y,re)=>(Y.kind==="plan"?-1:re.kind==="plan"?1:0)||(re.rect[3]+re.rect[1])/2-(Y.rect[3]+Y.rect[1])/2||Y.rect[0]-re.rect[0]),v.forEach((Y,re)=>{Y.id=re,Y.angle==null&&(Y.angle=0)}),{sheet:{rect:m||c,found:!!m},views:v}}var Ki=yn.dirname(gv(import.meta.url)),_l={AC1006:"R10",AC1009:"R11/R12",AC1012:"R13",AC1014:"R14",AC1015:"AutoCAD 2000",AC1018:"AutoCAD 2004",AC1021:"AutoCAD 2007",AC1024:"AutoCAD 2010",AC1027:"AutoCAD 2013",AC1032:"AutoCAD 2018+"};function lu(i){let e=[Ki,yn.join(Ki,".."),yn.join(Ki,"..","assets"),yn.join(Ki,"..","dist"),yn.join(Ki,"..","skills","dwg-viewer","assets"),yn.join(Ki,"..","skills","dwg-viewer","scripts")];for(let t of e)for(let n of i){let r=yn.join(t,n);if(vi.existsSync(r))return r}return null}async function yv(){let i=lu(["libredwg-web.wasm.gz"]);if(i)return new Uint8Array(ou.gunzipSync(vi.readFileSync(i)));try{let e=yn.join(Ki,"..","node_modules","@mlightcad","libredwg-web","wasm","libredwg-web.wasm");return new Uint8Array(vi.readFileSync(e))}catch{throw new Error("libredwg-web.wasm(.gz) not found")}}async function vv(i){let e=vi.readFileSync(i),t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength),n=e.subarray(0,6).toString("latin1"),r=yn.extname(i).toLowerCase(),a=[];if(/^AC\d{4}$/.test(n)){let f=await yv(),m=Ql.createByWasmInstance(await Zi({wasmBinary:f})),g=console.warn;console.warn=(...E)=>a.push(E.join(" "));let v;try{let E=m.dwg_read_data(t,Ms.DWG);if(!E)throw new Error("LibreDWG could not open the file (damaged or unsupported version).");v=m.convert(E);try{m.dwg_free(E)}catch{}}finally{console.warn=g}return{model:id(v),meta:{format:"DWG",version:`${_l[n]||"?"} (${n})`,warnings:a,bytes:e.length,buf:e}}}if(r===".dwg")throw new Error("Not a valid DWG (missing AC10xx signature). If it is a DXF, rename it to .dxf.");let l=e.toString("utf8");if(l.includes("\uFFFD")&&(l=e.toString("latin1")),/^AutoCAD Binary DXF/.test(l))throw new Error("Binary DXF is not supported; save it as ASCII DXF or use the DWG.");let c=new ua().parseSync(l),d=c.header?.$ACADVER||"";return{model:rd(c),meta:{format:"DXF",version:_l[d]?`${_l[d]} (${d})`:d,warnings:a,bytes:e.length,buf:e}}}var xv={0:"unitless",1:"in",2:"ft",3:"mi",4:"mm",5:"cm",6:"m",7:"km",10:"yd",14:"dm"};function cu(i,e){let t=e.origin,n=i.insUnits,r=Math.abs(t[0])>1e5&&Math.abs(t[1])>1e6,a=xv[n]||"unitless";return r&&[0,1,4,5,void 0].includes(n)?{declared:a,effective:"m",note:"Coordinates look like UTM; assuming meters"}:{declared:a,effective:a==="unitless"?"u":a,note:""}}function Ev(i){let e={};for(let t of i.entities)e[t.type]=(e[t.type]||0)+1;return Object.fromEntries(Object.entries(e).sort((t,n)=>n[1]-t[1]))}function Sv(i,e,t,n){let r=t.origin,a=t.bounds,l=cu(e.model,t),c=f=>[f[0]+r[0],f[1]+r[1],f[2]+r[2]],d=[];for(let f of t.layers){let m=new Set;for(let g of f.texts){let v=String(g.str).replace(/\s+/g," ").trim();!v||m.has(v)||(m.add(v),d.push({layer:f.name,text:v.slice(0,120),x:+g.T[12].toFixed(3),y:+g.T[13].toFixed(3)}))}}return{file:yn.basename(i),format:e.meta.format,version:e.meta.version,bytes:e.meta.bytes,units:l,stats:t.stats,entityTypes:Ev(e.model),blocks:[...e.model.blocks.keys()].filter(f=>!/^\*[DUdu]/.test(f)).slice(0,60),extents:{robustMin:c(a.rmin).map(f=>+f.toFixed(3)),robustMax:c(a.rmax).map(f=>+f.toFixed(3)),fullMin:c(a.min).map(f=>+f.toFixed(3)),fullMax:c(a.max).map(f=>+f.toFixed(3))},elevation:{flat:n.flat,objectsWithNonZeroZ:n.withZ.slice(0,50),noElevationMarkers:n.noZ},layers:t.layers.map(f=>{let m=n.layers.find(g=>g.name===f.name);return{name:f.name,objects:f.count,hidden:f.hidden,color:"#"+f.color.toString(16).padStart(6,"0"),zMin:m?+m.zmin.toFixed(3):null,zMax:m?+m.zmax.toFixed(3):null}}),points:n.points.length,blockAttributes:n.inserts.map(f=>({name:f.name,x:+f.x.toFixed(3),y:+f.y.toFixed(3),z:+f.z.toFixed(3),attributes:f.attrs})),texts:d.slice(0,400),warnings:e.meta.warnings.slice(0,5)}}function Mv(i){let e=[];e.push(`# ${i.file}`),e.push(`${i.format} ${i.version} \xB7 ${(i.bytes/1048576).toFixed(2)} MB \xB7 units: ${i.units.declared}${i.units.note?" \u2192 "+i.units.effective+" ("+i.units.note+")":""}`),e.push(`Objects drawn: ${i.stats.entities} \xB7 segments ${i.stats.segments} \xB7 triangles ${i.stats.triangles} \xB7 texts ${i.stats.texts} \xB7 points ${i.points}`),e.push(`Entity types: ${Object.entries(i.entityTypes).map(([r,a])=>`${r} ${a}`).join(", ")}`);let t=i.extents;e.push(`
## Extents (real coordinates)
Main area: X ${t.robustMin[0]} \u2026 ${t.robustMax[0]} \xB7 Y ${t.robustMin[1]} \u2026 ${t.robustMax[1]} \xB7 Z ${t.robustMin[2]} \u2026 ${t.robustMax[2]}`),e.push(`
## Elevation
${i.elevation.flat?"FLAT DRAWING: every object has Z = 0 (or no elevation).":"Objects with Z \u2260 0:"}`);for(let r of i.elevation.objectsWithNonZeroZ)e.push(`- layer "${r.layer}" ${r.pt?"point":"line"} Z=${r.z.toFixed(3)}${Math.abs(r.z1-r.z)>.005?"\u2192"+r.z1.toFixed(3):""} (\xD7${r.n})`);i.elevation.noElevationMarkers&&e.push(`(${i.elevation.noElevationMarkers} points carried Z=-999999, a "no elevation" marker; treated as 0)`),e.push(`
## Layers
| layer | objects | Z min | Z max | hidden |
|---|---|---|---|---|`);for(let r of i.layers)e.push(`| ${r.name} | ${r.objects} | ${r.zMin} | ${r.zMax} | ${r.hidden?"yes":""} |`);if(i.blockAttributes.length){e.push(`
## Blocks with attributes`);for(let r of i.blockAttributes.slice(0,40))e.push(`- ${r.name} @ (${r.x}, ${r.y}, ${r.z}) ${JSON.stringify(r.attributes)}`)}let n=Object.entries(i.stats.unsupported||{});return e.push(`
## Not drawn
${n.length?n.map(([r,a])=>`${r} \xD7${a}`).join(", "):"Nothing: every object type was drawn."}`),i.warnings.length&&e.push(`
Reader warnings: ${i.warnings.join(" | ")}`),e.join(`
`)}var gl=`dwg-tool \u2014 read DWG/DXF offline

  node dwg-tool.mjs info    <file> [--json]                 summary: layers, extents, elevations, objects not drawn
  node dwg-tool.mjs points  <file> [--layer NAME] [--out points.csv]
  node dwg-tool.mjs texts   <file> [--layer NAME] [--out texts.csv]
  node dwg-tool.mjs plan    <file> --out plan.svg [--style bw|color|cad] [--view N|sheet] [--no-straighten] [--width 2400]
  node dwg-tool.mjs views   <file>                          list the blocks of a sheet (plan, tables, details) with their tilt
  node dwg-tool.mjs viewer  <file> --out viewer.html [--lang en|es]   standalone 3D viewer with the file embedded
  node dwg-tool.mjs viewer  --out viewer.html                          empty viewer (drag & drop a file)
`;function bv(i){let e={_:[]};for(let t=0;t<i.length;t++){let n=i[t];if(n.startsWith("--")){let r=n.slice(2),a=i[t+1];a===void 0||a.startsWith("--")?e[r]=!0:(e[r]=a,t++)}else e._.push(n)}return e}var su=i=>'"'+String(i).replace(/"/g,'""')+'"',ss=(i,e)=>{i&&i!==!0?(vi.writeFileSync(i,e),console.error("wrote "+i)):process.stdout.write(e+`
`)};async function Av(){let[i,...e]=process.argv.slice(2),t=bv(e);if(!i||i==="help"||i==="--help"){console.log(gl);return}if(i==="viewer"&&!t._[0])return au(null,t);let n=t._[0];if(!n||!vi.existsSync(n))throw new Error(`File not found: ${n||"(none)"}
${gl}`);let r=await vv(n);if(i==="viewer")return au(r,t,n);let a=Jd(r.model,{light:!!t.light}),l=Qd(a,r.model);if(i==="info"){let c=Sv(n,r,a,l);ss(t.out,t.json?JSON.stringify(c,null,2):Mv(c))}else if(i==="points"){let c=l.points.filter(d=>!t.layer||d.layer===t.layer);ss(t.out,jd(c))}else if(i==="texts"){let c=[];for(let d of a.layers)if(!t.layer||d.name===t.layer)for(let f of d.texts)c.push([su(d.name),su(String(f.str).replace(/\s+/g," ")),f.T[12].toFixed(4),f.T[13].toFixed(4),f.T[14].toFixed(4)].join(","));ss(t.out,["layer,text,east,north,elevation",...c].join(`\r
`))}else if(i==="views"){let c=ml(r.model,a),d=m=>Math.round((m+0)*10)/10,f=[`# ${yn.basename(n)}: ${c.views.length} views detected`,`Sheet: ${c.sheet.found?"border found":"no border; using extents"} E ${d(c.sheet.rect[0]+a.origin[0])}\u2026${d(c.sheet.rect[2]+a.origin[0])} N ${d(c.sheet.rect[1]+a.origin[1])}\u2026${d(c.sheet.rect[3]+a.origin[1])}`,""];for(let m of c.views)f.push(`${m.id}. [${m.kind}] ${m.name} \u2014 ${d(m.rect[2]-m.rect[0])} \xD7 ${d(m.rect[3]-m.rect[1])} m, tilt ${m.angle}\xB0`);ss(t.out,f.join(`
`))}else if(i==="plan"){if(!t.out)throw new Error("plan needs --out plan.svg");let c;if(t.view!==void 0){let d=ml(r.model,a),f=t.view==="sheet"?{rect:d.sheet.rect,angle:0}:d.views[Number(t.view)];if(!f)throw new Error(`No view "${t.view}". Run the views command to list them.`);c=tu(f.rect,t.straighten===!1||t["no-straighten"]?0:f.angle)}ss(t.out,nu(a,{style:t.style||(t.light?"color":"bw"),region:c,width:Number(t.width)||2400,unit:cu(r.model,a).effective}))}else throw new Error("Unknown command: "+i+`
`+gl)}function au(i,e,t){if(!e.out)throw new Error("viewer needs --out viewer.html");let n=e.lang==="es"?"es":"en",r=lu([n==="es"?"viewer-template.es.html":"viewer-template.html",n==="es"?"dwg-viewer-es.html":"dwg-viewer.html"]);if(!r)throw new Error("Viewer template not found (run `npm run build` or use the packaged skill).");let a=vi.readFileSync(r,"utf8"),l=/<script id="embed-b64" type="application\/octet-stream" data-name="[^"]*">[^<]*<\/script>/;if(!l.test(a))throw new Error("Viewer template has no embed slot.");let c=t?yn.basename(t):"",d=i?ou.gzipSync(i.meta.buf,{level:9}).toString("base64"):"";a=a.replace(l,()=>`<script id="embed-b64" type="application/octet-stream" data-name="${c.replace(/"/g,"")}">${d}</script>`),vi.writeFileSync(e.out,a),console.error(`wrote ${e.out} (${(a.length/1048576).toFixed(1)} MB)${c?" with "+c+" embedded":""}`)}Av().catch(i=>{console.error("Error: "+(i.message||i)),process.exit(1)});export{vv as readFile};
