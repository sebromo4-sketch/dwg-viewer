#!/usr/bin/env node
import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);
import yi from"node:fs";import Tn from"node:path";import Zd from"node:zlib";import{fileURLToPath as Qy}from"node:url";async function jh(i={}){var e,t=i,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,a=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(a){let{createRequire:s}=await import("node:module");var l=s(import.meta.url)}var c=[],u="./this.program",f=(s,o)=>{throw o},m=import.meta.url,g="";function x(s){return t.locateFile?t.locateFile(s,g):g+s}var E,S;if(a){var w=l("node:fs");m.startsWith("file:")&&(g=l("node:path").dirname(l("node:url").fileURLToPath(m))+"/"),S=s=>{s=C(s)?new URL(s):s;var o=w.readFileSync(s);return o},E=async(s,o=!0)=>{s=C(s)?new URL(s):s;var d=w.readFileSync(s,o?void 0:"utf8");return d},process.argv.length>1&&(u=process.argv[1].replace(/\\/g,"/")),c=process.argv.slice(2),f=(s,o)=>{throw process.exitCode=s,o}}else if(n||r){try{g=new URL(".",m).href}catch{}r&&(S=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),E=async s=>{if(C(s))return new Promise((d,p)=>{var v=new XMLHttpRequest;v.open("GET",s,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){d(v.response);return}p(v.status)},v.onerror=p,v.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}var b=console.log.bind(console),I=console.error.bind(console),L,P=!1,C=s=>s.startsWith("file://");class F{}class q extends F{}var J,ue,me=!1;function te(){var s=_s.buffer;Fe=new Int8Array(s),He=new Int16Array(s),Ge=new Uint8Array(s),kt=new Uint16Array(s),he=new Int32Array(s),le=new Uint32Array(s),Ut=new Float32Array(s),Bt=new Float64Array(s),Xe=new BigInt64Array(s),ze=new BigUint64Array(s)}function fe(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)ut(t.preRun.shift());we(Ct)}function Me(){me=!0,!t.noFSInit&&!_.initialized&&_.init(),mt.init(),Ti.__wasm_call_ctors(),_.ignorePermissions=!1}function ye(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)on(t.postRun.shift());we(Ae)}function _e(s){t.onAbort?.(s),s=`Aborted(${s})`,I(s),P=!0,s+=". Build with -sASSERTIONS for more info.";var o=new WebAssembly.RuntimeError(s);throw ue?.(o),o}var ve;function Ve(){return t.locateFile?x("libredwg-web.wasm"):new URL("libredwg-web.wasm",import.meta.url).href}function ke(s){if(s==ve&&L)return new Uint8Array(L);if(S)return S(s);throw"both async and sync fetching of the wasm failed"}async function De(s){if(!L)try{var o=await E(s);return new Uint8Array(o)}catch{}return ke(s)}async function Ye(s,o){try{var d=await De(s),p=await WebAssembly.instantiate(d,o);return p}catch(v){I(`failed to asynchronously prepare wasm: ${v}`),_e(v)}}async function Je(s,o,d){if(!s&&!C(o)&&!a)try{var p=fetch(o,{credentials:"same-origin"}),v=await WebAssembly.instantiateStreaming(p,d);return v}catch(M){I(`wasm streaming compile failed: ${M}`),I("falling back to ArrayBuffer instantiation")}return Ye(o,d)}function it(){var s={env:Pl,wasi_snapshot_preview1:Pl};return s}async function an(){function s(M,T){return Ti=M.exports,Ti=Qh(Ti),Jh(Ti),te(),Ti}function o(M){return s(M.instance)}var d=it();if(t.instantiateWasm)return new Promise((M,T)=>{t.instantiateWasm(d,(R,N)=>{M(s(R,N))})});ve??=Ve();var p=await Je(L,ve,d),v=o(p);return v}class ai{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var He,he,Xe,Fe,Ut,Bt,kt,le,ze,Ge,we=s=>{for(;s.length>0;)s.shift()(t)},Ae=[],on=s=>Ae.push(s),Ct=[],ut=s=>Ct.push(s),zt=!0;function Ue(s,o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":Fe[s>>>0]=o;break;case"i8":Fe[s>>>0]=o;break;case"i16":He[s>>>1>>>0]=o;break;case"i32":he[s>>>2>>>0]=o;break;case"i64":Xe[s>>>3>>>0]=BigInt(o);break;case"float":Ut[s>>>2>>>0]=o;break;case"double":Bt[s>>>3>>>0]=o;break;case"*":le[s>>>2>>>0]=o;break;default:_e(`invalid type for setValue: ${d}`)}}var Lt=s=>Tl(s),tt=()=>Cl();class Qe{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){le[this.ptr+4>>>2>>>0]=o}get_type(){return le[this.ptr+4>>>2>>>0]}set_destructor(o){le[this.ptr+8>>>2>>>0]=o}get_destructor(){return le[this.ptr+8>>>2>>>0]}set_caught(o){o=o?1:0,Fe[this.ptr+12>>>0]=o}get_caught(){return Fe[this.ptr+12>>>0]!=0}set_rethrown(o){o=o?1:0,Fe[this.ptr+13>>>0]=o}get_rethrown(){return Fe[this.ptr+13>>>0]!=0}init(o,d){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(d)}set_adjusted_ptr(o){le[this.ptr+16>>>2>>>0]=o}get_adjusted_ptr(){return le[this.ptr+16>>>2>>>0]}}var vi=0,oi=9007199254740992,li=-9007199254740992,In=s=>s<li||s>oi?NaN:Number(s);function xi(s,o,d){s>>>=0,o>>>=0,d>>>=0;var p=new Qe(s);p.init(o,d),vi++,_e()}var gn=()=>{var s=he[+oe.varargs>>>2>>>0];return oe.varargs+=4,s},ln=gn,Ie={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var d=0,p=s.length-1;p>=0;p--){var v=s[p];v==="."?s.splice(p,1):v===".."?(s.splice(p,1),d++):d&&(s.splice(p,1),d--)}if(o)for(;d;d--)s.unshift("..");return s},normalize:s=>{var o=Ie.isAbs(s),d=s.slice(-1)==="/";return s=Ie.normalizeArray(s.split("/").filter(p=>!!p),!o).join("/"),!s&&!o&&(s="."),s&&d&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=Ie.splitPath(s),d=o[0],p=o[1];return!d&&!p?".":(p&&(p=p.slice(0,-1)),d+p)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Ie.normalize(s.join("/")),join2:(s,o)=>Ie.normalize(s+"/"+o)},wn=()=>{if(a){var s=l("node:crypto");return o=>s.randomFillSync(o)}return o=>(crypto.getRandomValues(o),0)},yn=s=>(yn=wn())(s),Vt={resolve:(...s)=>{for(var o="",d=!1,p=s.length-1;p>=-1&&!d;p--){var v=p>=0?s[p]:_.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";o=v+"/"+o,d=Ie.isAbs(v)}return o=Ie.normalizeArray(o.split("/").filter(M=>!!M),!d).join("/"),(d?"/":"")+o||"."},relative:(s,o)=>{s=Vt.resolve(s).slice(1),o=Vt.resolve(o).slice(1);function d(H){for(var K=0;K<H.length&&H[K]==="";K++);for(var pe=H.length-1;pe>=0&&H[pe]==="";pe--);return K>pe?[]:H.slice(K,pe-K+1)}for(var p=d(s.split("/")),v=d(o.split("/")),M=Math.min(p.length,v.length),T=M,R=0;R<M;R++)if(p[R]!==v[R]){T=R;break}for(var N=[],R=T;R<p.length;R++)N.push("..");return N=N.concat(v.slice(T)),N.join("/")}},Pn=globalThis.TextDecoder&&new TextDecoder,Rn=(s,o,d,p)=>{var v=o+d;if(p)return v;for(;s[o]&&!(o>=v);)++o;return o},pt=(s,o=0,d,p)=>{o>>>=0;var v=Rn(s,o,d,p);if(v-o>16&&s.buffer&&Pn)return Pn.decode(s.subarray(o,v));for(var M="";o<v;){var T=s[o++];if(!(T&128)){M+=String.fromCharCode(T);continue}var R=s[o++]&63;if((T&224)==192){M+=String.fromCharCode((T&31)<<6|R);continue}var N=s[o++]&63;if((T&240)==224?T=(T&15)<<12|R<<6|N:T=(T&7)<<18|R<<12|N<<6|s[o++]&63,T<65536)M+=String.fromCharCode(T);else{var H=T-65536;M+=String.fromCharCode(55296|H>>10,56320|H&1023)}}return M},Ln=[],cn=s=>{for(var o=0,d=0;d<s.length;++d){var p=s.charCodeAt(d);p<=127?o++:p<=2047?o+=2:p>=55296&&p<=57343?(o+=4,++d):o+=3}return o},Yt=(s,o,d,p)=>{if(d>>>=0,!(p>0))return 0;for(var v=d,M=d+p-1,T=0;T<s.length;++T){var R=s.codePointAt(T);if(R<=127){if(d>=M)break;o[d++>>>0]=R}else if(R<=2047){if(d+1>=M)break;o[d++>>>0]=192|R>>6,o[d++>>>0]=128|R&63}else if(R<=65535){if(d+2>=M)break;o[d++>>>0]=224|R>>12,o[d++>>>0]=128|R>>6&63,o[d++>>>0]=128|R&63}else{if(d+3>=M)break;o[d++>>>0]=240|R>>18,o[d++>>>0]=128|R>>12&63,o[d++>>>0]=128|R>>6&63,o[d++>>>0]=128|R&63,T++}}return o[d>>>0]=0,d-v},Ht=(s,o,d)=>{var p=d>0?d:cn(s)+1,v=new Array(p),M=Yt(s,v,0,v.length);return o&&(v.length=M),v},Dn=()=>{if(!Ln.length){var s=null;if(a){var o=256,d=Buffer.alloc(o),p=0,v=process.stdin.fd;try{p=w.readSync(v,d,0,o)}catch(M){if(M.toString().includes("EOF"))p=0;else throw M}p>0&&(s=d.slice(0,p).toString("utf-8"))}else globalThis.window?.prompt&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Ln=Ht(s,!0)}return Ln.shift()},mt={ttys:[],init(){},shutdown(){},register(s,o){mt.ttys[s]={input:[],output:[],ops:o},_.registerDevice(s,mt.stream_ops)},stream_ops:{open(s){var o=mt.ttys[s.node.rdev];if(!o)throw new _.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,d,p,v){if(!s.tty||!s.tty.ops.get_char)throw new _.ErrnoError(60);for(var M=0,T=0;T<p;T++){var R;try{R=s.tty.ops.get_char(s.tty)}catch{throw new _.ErrnoError(29)}if(R===void 0&&M===0)throw new _.ErrnoError(6);if(R==null)break;M++,o[d+T]=R}return M&&(s.node.atime=Date.now()),M},write(s,o,d,p,v){if(!s.tty||!s.tty.ops.put_char)throw new _.ErrnoError(60);try{for(var M=0;M<p;M++)s.tty.ops.put_char(s.tty,o[d+M])}catch{throw new _.ErrnoError(29)}return p&&(s.node.mtime=s.node.ctime=Date.now()),M}},default_tty_ops:{get_char(s){return Dn()},put_char(s,o){o===null||o===10?(b(pt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(b(pt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,d){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(I(pt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(I(pt(s.output)),s.output=[])}}},y=s=>{_e()},A={ops_table:null,mount(s){return A.createNode(null,"/",16895,0)},createNode(s,o,d,p){if(_.isBlkdev(d)||_.isFIFO(d))throw new _.ErrnoError(63);A.ops_table||={dir:{node:{getattr:A.node_ops.getattr,setattr:A.node_ops.setattr,lookup:A.node_ops.lookup,mknod:A.node_ops.mknod,rename:A.node_ops.rename,unlink:A.node_ops.unlink,rmdir:A.node_ops.rmdir,readdir:A.node_ops.readdir,symlink:A.node_ops.symlink},stream:{llseek:A.stream_ops.llseek}},file:{node:{getattr:A.node_ops.getattr,setattr:A.node_ops.setattr},stream:{llseek:A.stream_ops.llseek,read:A.stream_ops.read,write:A.stream_ops.write,mmap:A.stream_ops.mmap,msync:A.stream_ops.msync}},link:{node:{getattr:A.node_ops.getattr,setattr:A.node_ops.setattr,readlink:A.node_ops.readlink},stream:{}},chrdev:{node:{getattr:A.node_ops.getattr,setattr:A.node_ops.setattr},stream:_.chrdev_stream_ops}};var v=_.createNode(s,o,d,p);return _.isDir(v.mode)?(v.node_ops=A.ops_table.dir.node,v.stream_ops=A.ops_table.dir.stream,v.contents={}):_.isFile(v.mode)?(v.node_ops=A.ops_table.file.node,v.stream_ops=A.ops_table.file.stream,v.usedBytes=0,v.contents=A.emptyFileContents??=new Uint8Array(0)):_.isLink(v.mode)?(v.node_ops=A.ops_table.link.node,v.stream_ops=A.ops_table.link.stream):_.isChrdev(v.mode)&&(v.node_ops=A.ops_table.chrdev.node,v.stream_ops=A.ops_table.chrdev.stream),v.atime=v.mtime=v.ctime=Date.now(),s&&(s.contents[o]=v,s.atime=s.mtime=s.ctime=v.atime),v},getFileDataAsTypedArray(s){return s.contents.subarray(0,s.usedBytes)},expandFileStorage(s,o){var d=s.contents.length;if(!(d>=o)){var p=1024*1024;o=Math.max(o,d*(d<p?2:1.125)>>>0),d&&(o=Math.max(o,256));var v=A.getFileDataAsTypedArray(s);s.contents=new Uint8Array(o),s.contents.set(v)}},resizeFileStorage(s,o){if(s.usedBytes!=o){var d=s.contents;s.contents=new Uint8Array(o),s.contents.set(d.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=_.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,_.isDir(s.mode)?o.size=4096:_.isFile(s.mode)?o.size=s.usedBytes:_.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(let d of["mode","atime","mtime","ctime"])o[d]!=null&&(s[d]=o[d]);o.size!==void 0&&A.resizeFileStorage(s,o.size)},lookup(s,o){throw A.doesNotExistError||(A.doesNotExistError=new _.ErrnoError(44),A.doesNotExistError.stack="<generic error, no stack>"),A.doesNotExistError},mknod(s,o,d,p){return A.createNode(s,o,d,p)},rename(s,o,d){var p;try{p=_.lookupNode(o,d)}catch{}if(p){if(_.isDir(s.mode))for(var v in p.contents)throw new _.ErrnoError(55);_.hashRemoveNode(p)}delete s.parent.contents[s.name],o.contents[d]=s,s.name=d,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var d=_.lookupNode(s,o);for(var p in d.contents)throw new _.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,d){var p=A.createNode(s,o,41471,0);return p.link=d,p},readlink(s){if(!_.isLink(s.mode))throw new _.ErrnoError(28);return s.link}},stream_ops:{read(s,o,d,p,v){var M=s.node.contents;if(v>=s.node.usedBytes)return 0;var T=Math.min(s.node.usedBytes-v,p);return o.set(M.subarray(v,v+T),d),T},write(s,o,d,p,v,M){if(o.buffer===Fe.buffer&&(M=!1),!p)return 0;var T=s.node;return T.mtime=T.ctime=Date.now(),M?(T.contents=o.subarray(d,d+p),T.usedBytes=p):T.usedBytes===0&&v===0?(T.contents=o.slice(d,d+p),T.usedBytes=p):(A.expandFileStorage(T,v+p),T.contents.set(o.subarray(d,d+p),v),T.usedBytes=Math.max(T.usedBytes,v+p)),p},llseek(s,o,d){var p=o;if(d===1?p+=s.position:d===2&&_.isFile(s.node.mode)&&(p+=s.node.usedBytes),p<0)throw new _.ErrnoError(28);return p},mmap(s,o,d,p,v){if(!_.isFile(s.node.mode))throw new _.ErrnoError(43);var M,T,R=s.node.contents;if(!(v&2)&&R.buffer===Fe.buffer)T=!1,M=R.byteOffset;else{if(T=!0,M=y(o),!M)throw new _.ErrnoError(48);R&&((d>0||d+o<R.length)&&(R.subarray?R=R.subarray(d,d+o):R=Array.prototype.slice.call(R,d,d+o)),Fe.set(R,M>>>0))}return{ptr:M,allocated:T}},msync(s,o,d,p,v){return A.stream_ops.write(s,o,0,p,d,!1),0}}},Z=s=>{if(typeof s!="string")return s;var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},d=o[s];if(typeof d>"u")throw new Error(`Unknown file open mode: ${s}`);return d},G=s=>(typeof s=="string"&&(s=Ht(s,!0)),s.subarray||(s=new Uint8Array(s)),s),U=(s,o)=>{var d=0;return s&&(d|=365),o&&(d|=146),d},k=async s=>{var o=await E(s);return new Uint8Array(o)},O=(...s)=>_.createDataFile(...s),W=s=>s,Y=0,V=null,Q=s=>{if(Y--,t.monitorRunDependencies?.(Y),Y==0&&V){var o=V;V=null,o()}},z=s=>{Y++,t.monitorRunDependencies?.(Y)},X=[],re=async(s,o)=>{typeof Browser<"u"&&Browser.init();for(var d of X)if(d.canHandle(o))return d.handle(s,o);return s},$=async(s,o,d,p,v,M,T,R)=>{var N=o?Vt.resolve(Ie.join2(s,o)):s,H=W(`cp ${N}`);z(H);try{var K=d;typeof d=="string"&&(K=await k(d)),K=await re(K,N),R?.(),M||O(s,o,K,p,v,T)}finally{Q(H)}},j=(s,o,d,p,v,M,T,R,N,H)=>{$(s,o,d,p,v,R,N,H).then(M).catch(T)},_={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(s){this.errno=s}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,d,p){s||(s=this),this.parent=s,this.mount=s.mount,this.id=_.nextInode++,this.name=o,this.mode=d,this.rdev=p,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return _.isDir(this.mode)}get isDevice(){return _.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new _.ErrnoError(44);o.follow_mount??=!0,Ie.isAbs(s)||(s=_.cwd()+"/"+s);e:for(var d=0;d<40;d++){for(var p=s.split("/").filter(H=>!!H),v=_.root,M="/",T=0;T<p.length;T++){var R=T===p.length-1;if(R&&o.parent)break;if(p[T]!=="."){if(p[T]===".."){if(M=Ie.dirname(M),_.isRoot(v)){s=M+"/"+p.slice(T+1).join("/"),d--;continue e}else v=v.parent;continue}M=Ie.join2(M,p[T]);try{v=_.lookupNode(v,p[T])}catch(H){if(H?.errno===44&&R&&o.noent_okay)return{path:M};throw H}if(_.isMountpoint(v)&&(!R||o.follow_mount)&&(v=v.mounted.root),_.isLink(v.mode)&&(!R||o.follow)){if(!v.node_ops.readlink)throw new _.ErrnoError(52);var N=v.node_ops.readlink(v);Ie.isAbs(N)||(N=Ie.dirname(M)+"/"+N),s=N+"/"+p.slice(T+1).join("/");continue e}}}return{path:M,node:v}}throw new _.ErrnoError(32)},getPath(s){for(var o;;){if(_.isRoot(s)){var d=s.mount.mountpoint;return o?d[d.length-1]!=="/"?`${d}/${o}`:d+o:d}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var d=0,p=0;p<o.length;p++)d=(d<<5)-d+o.charCodeAt(p)|0;return(s+d>>>0)%_.nameTable.length},hashAddNode(s){var o=_.hashName(s.parent.id,s.name);s.name_next=_.nameTable[o],_.nameTable[o]=s},hashRemoveNode(s){var o=_.hashName(s.parent.id,s.name);if(_.nameTable[o]===s)_.nameTable[o]=s.name_next;else for(var d=_.nameTable[o];d;){if(d.name_next===s){d.name_next=s.name_next;break}d=d.name_next}},lookupNode(s,o){var d=_.mayLookup(s);if(d)throw new _.ErrnoError(d);for(var p=_.hashName(s.id,o),v=_.nameTable[p];v;v=v.name_next){var M=v.name;if(v.parent.id===s.id&&M===o)return v}return _.lookup(s,o)},createNode(s,o,d,p){var v=new _.FSNode(s,o,d,p);return _.hashAddNode(v),v},destroyNode(s){_.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return _.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!_.isDir(s.mode))return 54;var o=_.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!_.isDir(s.mode))return 54;try{var d=_.lookupNode(s,o);return 20}catch{}return _.nodePermissions(s,"wx")},mayDelete(s,o,d){var p;try{p=_.lookupNode(s,o)}catch(M){return M.errno}var v=_.nodePermissions(s,"wx");if(v)return v;if(d){if(!_.isDir(p.mode))return 54;if(_.isRoot(p)||_.getPath(p)===_.cwd())return 10}else if(_.isDir(p.mode))return 31;return 0},mayOpen(s,o){if(!s)return 44;if(_.isLink(s.mode))return 32;var d=_.flagsToPermissionString(o);return _.isDir(s.mode)&&(d!=="r"||o&576)?31:_.nodePermissions(s,d)},checkOpExists(s,o){if(!s)throw new _.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=_.MAX_OPEN_FDS;s++)if(!_.streams[s])return s;throw new _.ErrnoError(33)},getStreamChecked(s){var o=_.getStream(s);if(!o)throw new _.ErrnoError(8);return o},getStream:s=>_.streams[s],createStream(s,o=-1){return s=Object.assign(new _.FSStream,s),o==-1&&(o=_.nextfd()),s.fd=o,_.streams[o]=s,s},closeStream(s){_.streams[s]=null},dupStream(s,o=-1){var d=_.createStream(s,o);return d.stream_ops?.dup?.(d),d},doSetAttr(s,o,d){var p=s?.stream_ops.setattr,v=p?s:o;p??=o.node_ops.setattr,_.checkOpExists(p,63);try{p(v,d)}catch(M){throw M instanceof RangeError?new _.ErrnoError(22):M}},chrdev_stream_ops:{open(s){var o=_.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new _.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){_.devices[s]={stream_ops:o}},getDevice:s=>_.devices[s],getMounts(s){for(var o=[],d=[s];d.length;){var p=d.pop();o.push(p),d.push(...p.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),_.syncFSRequests++,_.syncFSRequests>1&&I(`warning: ${_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var d=_.getMounts(_.root.mount),p=0;function v(R){return _.syncFSRequests--,o(R)}function M(R){if(R)return M.errored?void 0:(M.errored=!0,v(R));++p>=d.length&&v(null)}for(var T of d)T.type.syncfs?T.type.syncfs(T,s,M):M(null)},mount(s,o,d){var p=d==="/",v=!d,M;if(p&&_.root)throw new _.ErrnoError(10);if(!p&&!v){var T=_.lookupPath(d,{follow_mount:!1});if(d=T.path,M=T.node,_.isMountpoint(M))throw new _.ErrnoError(10);if(!_.isDir(M.mode))throw new _.ErrnoError(54)}var R={type:s,opts:o,mountpoint:d,mounts:[]},N=s.mount(R);return N.mount=R,R.root=N,p?_.root=N:M&&(M.mounted=R,M.mount&&M.mount.mounts.push(R)),N},unmount(s){var o=_.lookupPath(s,{follow_mount:!1});if(!_.isMountpoint(o.node))throw new _.ErrnoError(28);var d=o.node,p=d.mounted,v=_.getMounts(p);for(var[M,T]of Object.entries(_.nameTable))for(;T;){var R=T.name_next;v.includes(T.mount)&&_.destroyNode(T),T=R}d.mounted=null;var N=d.mount.mounts.indexOf(p);d.mount.mounts.splice(N,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,d){var p=_.lookupPath(s,{parent:!0}),v=p.node,M=Ie.basename(s);if(!M)throw new _.ErrnoError(28);if(M==="."||M==="..")throw new _.ErrnoError(20);var T=_.mayCreate(v,M);if(T)throw new _.ErrnoError(T);if(!v.node_ops.mknod)throw new _.ErrnoError(63);return v.node_ops.mknod(v,M,o,d)},statfs(s){return _.statfsNode(_.lookupPath(s,{follow:!0}).node)},statfsStream(s){return _.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:_.nextInode,ffree:_.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,_.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,_.mknod(s,o,0)},mkdirTree(s,o){var d=s.split("/"),p="";for(var v of d)if(v){(p||Ie.isAbs(s))&&(p+="/"),p+=v;try{_.mkdir(p,o)}catch(M){if(M.errno!=20)throw M}}},mkdev(s,o,d){return typeof d>"u"&&(d=o,o=438),o|=8192,_.mknod(s,o,d)},symlink(s,o){if(!Vt.resolve(s))throw new _.ErrnoError(44);var d=_.lookupPath(o,{parent:!0}),p=d.node;if(!p)throw new _.ErrnoError(44);var v=Ie.basename(o),M=_.mayCreate(p,v);if(M)throw new _.ErrnoError(M);if(!p.node_ops.symlink)throw new _.ErrnoError(63);return p.node_ops.symlink(p,v,s)},rename(s,o){var d=Ie.dirname(s),p=Ie.dirname(o),v=Ie.basename(s),M=Ie.basename(o),T,R,N;if(T=_.lookupPath(s,{parent:!0}),R=T.node,T=_.lookupPath(o,{parent:!0}),N=T.node,!R||!N)throw new _.ErrnoError(44);if(R.mount!==N.mount)throw new _.ErrnoError(75);var H=_.lookupNode(R,v),K=Vt.relative(s,p);if(K.charAt(0)!==".")throw new _.ErrnoError(28);if(K=Vt.relative(o,d),K.charAt(0)!==".")throw new _.ErrnoError(55);var pe;try{pe=_.lookupNode(N,M)}catch{}if(H!==pe){var se=_.isDir(H.mode),ne=_.mayDelete(R,v,se);if(ne)throw new _.ErrnoError(ne);if(ne=pe?_.mayDelete(N,M,se):_.mayCreate(N,M),ne)throw new _.ErrnoError(ne);if(!R.node_ops.rename)throw new _.ErrnoError(63);if(_.isMountpoint(H)||pe&&_.isMountpoint(pe))throw new _.ErrnoError(10);if(N!==R&&(ne=_.nodePermissions(R,"w"),ne))throw new _.ErrnoError(ne);_.hashRemoveNode(H);try{R.node_ops.rename(H,N,M),H.parent=N}catch(ge){throw ge}finally{_.hashAddNode(H)}}},rmdir(s){var o=_.lookupPath(s,{parent:!0}),d=o.node,p=Ie.basename(s),v=_.lookupNode(d,p),M=_.mayDelete(d,p,!0);if(M)throw new _.ErrnoError(M);if(!d.node_ops.rmdir)throw new _.ErrnoError(63);if(_.isMountpoint(v))throw new _.ErrnoError(10);d.node_ops.rmdir(d,p),_.destroyNode(v)},readdir(s){var o=_.lookupPath(s,{follow:!0}),d=o.node,p=_.checkOpExists(d.node_ops.readdir,54);return p(d)},unlink(s){var o=_.lookupPath(s,{parent:!0}),d=o.node;if(!d)throw new _.ErrnoError(44);var p=Ie.basename(s),v=_.lookupNode(d,p),M=_.mayDelete(d,p,!1);if(M)throw new _.ErrnoError(M);if(!d.node_ops.unlink)throw new _.ErrnoError(63);if(_.isMountpoint(v))throw new _.ErrnoError(10);d.node_ops.unlink(d,p),_.destroyNode(v)},readlink(s){var o=_.lookupPath(s),d=o.node;if(!d)throw new _.ErrnoError(44);if(!d.node_ops.readlink)throw new _.ErrnoError(28);return d.node_ops.readlink(d)},stat(s,o){var d=_.lookupPath(s,{follow:!o}),p=d.node,v=_.checkOpExists(p.node_ops.getattr,63);return v(p)},fstat(s){var o=_.getStreamChecked(s),d=o.node,p=o.stream_ops.getattr,v=p?o:d;return p??=d.node_ops.getattr,_.checkOpExists(p,63),p(v)},lstat(s){return _.stat(s,!0)},doChmod(s,o,d,p){_.doSetAttr(s,o,{mode:d&4095|o.mode&-4096,ctime:Date.now(),dontFollow:p})},chmod(s,o,d){var p;if(typeof s=="string"){var v=_.lookupPath(s,{follow:!d});p=v.node}else p=s;_.doChmod(null,p,o,d)},lchmod(s,o){_.chmod(s,o,!0)},fchmod(s,o){var d=_.getStreamChecked(s);_.doChmod(d,d.node,o,!1)},doChown(s,o,d){_.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:d})},chown(s,o,d,p){var v;if(typeof s=="string"){var M=_.lookupPath(s,{follow:!p});v=M.node}else v=s;_.doChown(null,v,p)},lchown(s,o,d){_.chown(s,o,d,!0)},fchown(s,o,d){var p=_.getStreamChecked(s);_.doChown(p,p.node,!1)},doTruncate(s,o,d){if(_.isDir(o.mode))throw new _.ErrnoError(31);if(!_.isFile(o.mode))throw new _.ErrnoError(28);var p=_.nodePermissions(o,"w");if(p)throw new _.ErrnoError(p);_.doSetAttr(s,o,{size:d,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new _.ErrnoError(28);var d;if(typeof s=="string"){var p=_.lookupPath(s,{follow:!0});d=p.node}else d=s;_.doTruncate(null,d,o)},ftruncate(s,o){var d=_.getStreamChecked(s);if(o<0||(d.flags&2097155)===0)throw new _.ErrnoError(28);_.doTruncate(d,d.node,o)},utime(s,o,d){var p=_.lookupPath(s,{follow:!0}),v=p.node,M=_.checkOpExists(v.node_ops.setattr,63);M(v,{atime:o,mtime:d})},open(s,o,d=438){if(s==="")throw new _.ErrnoError(44);o=Z(o),o&64?d=d&4095|32768:d=0;var p,v;if(typeof s=="object")p=s;else{v=s.endsWith("/");var M=_.lookupPath(s,{follow:!(o&131072),noent_okay:!0});p=M.node,s=M.path}var T=!1;if(o&64)if(p){if(o&128)throw new _.ErrnoError(20)}else{if(v)throw new _.ErrnoError(31);p=_.mknod(s,d|511,0),T=!0}if(!p)throw new _.ErrnoError(44);if(_.isChrdev(p.mode)&&(o&=-513),o&65536&&!_.isDir(p.mode))throw new _.ErrnoError(54);if(!T){var R=_.mayOpen(p,o);if(R)throw new _.ErrnoError(R)}o&512&&!T&&_.truncate(p,0),o&=-131713;var N=_.createStream({node:p,path:_.getPath(p),flags:o,seekable:!0,position:0,stream_ops:p.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),T&&_.chmod(p,d&511),N},close(s){if(_.isClosed(s))throw new _.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{_.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,d){if(_.isClosed(s))throw new _.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new _.ErrnoError(70);if(d!=0&&d!=1&&d!=2)throw new _.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,d),s.ungotten=[],s.position},read(s,o,d,p,v){if(p<0||v<0)throw new _.ErrnoError(28);if(_.isClosed(s))throw new _.ErrnoError(8);if((s.flags&2097155)===1)throw new _.ErrnoError(8);if(_.isDir(s.node.mode))throw new _.ErrnoError(31);if(!s.stream_ops.read)throw new _.ErrnoError(28);var M=typeof v<"u";if(!M)v=s.position;else if(!s.seekable)throw new _.ErrnoError(70);var T=s.stream_ops.read(s,o,d,p,v);return M||(s.position+=T),T},write(s,o,d,p,v,M){if(p<0||v<0)throw new _.ErrnoError(28);if(_.isClosed(s))throw new _.ErrnoError(8);if((s.flags&2097155)===0)throw new _.ErrnoError(8);if(_.isDir(s.node.mode))throw new _.ErrnoError(31);if(!s.stream_ops.write)throw new _.ErrnoError(28);s.seekable&&s.flags&1024&&_.llseek(s,0,2);var T=typeof v<"u";if(!T)v=s.position;else if(!s.seekable)throw new _.ErrnoError(70);var R=s.stream_ops.write(s,o,d,p,v,M);return T||(s.position+=R),R},mmap(s,o,d,p,v){if((p&2)!==0&&(v&2)===0&&(s.flags&2097155)!==2)throw new _.ErrnoError(2);if((s.flags&2097155)===1)throw new _.ErrnoError(2);if(!s.stream_ops.mmap)throw new _.ErrnoError(43);if(!o)throw new _.ErrnoError(28);return s.stream_ops.mmap(s,o,d,p,v)},msync(s,o,d,p,v){return s.stream_ops.msync?s.stream_ops.msync(s,o,d,p,v):0},ioctl(s,o,d){if(!s.stream_ops.ioctl)throw new _.ErrnoError(59);return s.stream_ops.ioctl(s,o,d)},readFile(s,o={}){o.flags=o.flags??0,o.encoding=o.encoding??"binary",o.encoding!=="utf8"&&o.encoding!=="binary"&&_e(`Invalid encoding type "${o.encoding}"`);var d=_.open(s,o.flags),p=_.stat(s),v=p.size,M=new Uint8Array(v);return _.read(d,M,0,v,0),o.encoding==="utf8"&&(M=pt(M)),_.close(d),M},writeFile(s,o,d={}){d.flags=d.flags??577;var p=_.open(s,d.flags,d.mode);o=G(o),_.write(p,o,0,o.byteLength,void 0,d.canOwn),_.close(p)},cwd:()=>_.currentPath,chdir(s){var o=_.lookupPath(s,{follow:!0});if(o.node===null)throw new _.ErrnoError(44);if(!_.isDir(o.node.mode))throw new _.ErrnoError(54);var d=_.nodePermissions(o.node,"x");if(d)throw new _.ErrnoError(d);_.currentPath=o.path},createDefaultDirectories(){_.mkdir("/tmp"),_.mkdir("/home"),_.mkdir("/home/web_user")},createDefaultDevices(){_.mkdir("/dev"),_.registerDevice(_.makedev(1,3),{read:()=>0,write:(p,v,M,T,R)=>T,llseek:()=>0}),_.mkdev("/dev/null",_.makedev(1,3)),mt.register(_.makedev(5,0),mt.default_tty_ops),mt.register(_.makedev(6,0),mt.default_tty1_ops),_.mkdev("/dev/tty",_.makedev(5,0)),_.mkdev("/dev/tty1",_.makedev(6,0));var s=new Uint8Array(1024),o=0,d=()=>(o===0&&(yn(s),o=s.byteLength),s[--o]);_.createDevice("/dev","random",d),_.createDevice("/dev","urandom",d),_.mkdir("/dev/shm"),_.mkdir("/dev/shm/tmp")},createSpecialDirectories(){_.mkdir("/proc");var s=_.mkdir("/proc/self");_.mkdir("/proc/self/fd"),_.mount({mount(){var o=_.createNode(s,"fd",16895,73);return o.stream_ops={llseek:A.stream_ops.llseek},o.node_ops={lookup(d,p){var v=+p,M=_.getStreamChecked(v),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:v+1};return T.parent=T,T},readdir(){return Array.from(_.streams.entries()).filter(([d,p])=>p).map(([d,p])=>d.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,d){s?_.createDevice("/dev","stdin",s):_.symlink("/dev/tty","/dev/stdin"),o?_.createDevice("/dev","stdout",null,o):_.symlink("/dev/tty","/dev/stdout"),d?_.createDevice("/dev","stderr",null,d):_.symlink("/dev/tty1","/dev/stderr");var p=_.open("/dev/stdin",0),v=_.open("/dev/stdout",1),M=_.open("/dev/stderr",1)},staticInit(){_.nameTable=new Array(4096),_.mount(A,{},"/"),_.createDefaultDirectories(),_.createDefaultDevices(),_.createSpecialDirectories(),_.filesystems={MEMFS:A}},init(s,o,d){_.initialized=!0,s??=t.stdin,o??=t.stdout,d??=t.stderr,_.createStandardStreams(s,o,d)},quit(){_.initialized=!1;for(var s of _.streams)s&&_.close(s)},findObject(s,o){var d=_.analyzePath(s,o);return d.exists?d.object:null},analyzePath(s,o){try{var d=_.lookupPath(s,{follow:!o});s=d.path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var d=_.lookupPath(s,{parent:!0});p.parentExists=!0,p.parentPath=d.path,p.parentObject=d.node,p.name=Ie.basename(s),d=_.lookupPath(s,{follow:!o}),p.exists=!0,p.path=d.path,p.object=d.node,p.name=d.node.name,p.isRoot=d.path==="/"}catch(v){p.error=v.errno}return p},createPath(s,o,d,p){s=typeof s=="string"?s:_.getPath(s);for(var v=o.split("/").reverse();v.length;){var M=v.pop();if(M){var T=Ie.join2(s,M);try{_.mkdir(T)}catch(R){if(R.errno!=20)throw R}s=T}}return T},createFile(s,o,d,p,v){var M=Ie.join2(typeof s=="string"?s:_.getPath(s),o),T=U(p,v);return _.create(M,T)},createDataFile(s,o,d,p,v,M){var T=o;s&&(s=typeof s=="string"?s:_.getPath(s),T=o?Ie.join2(s,o):s);var R=U(p,v),N=_.create(T,R);if(d){d=G(d),_.chmod(N,R|146);var H=_.open(N,577);_.write(H,d,0,d.length,0,M),_.close(H),_.chmod(N,R)}},createDevice(s,o,d,p){var v=Ie.join2(typeof s=="string"?s:_.getPath(s),o),M=U(!!d,!!p);_.createDevice.major??=64;var T=_.makedev(_.createDevice.major++,0);return _.registerDevice(T,{open(R){R.seekable=!1},close(R){p?.buffer?.length&&p(10)},read(R,N,H,K,pe){for(var se=0,ne=0;ne<K;ne++){var ge;try{ge=d()}catch{throw new _.ErrnoError(29)}if(ge===void 0&&se===0)throw new _.ErrnoError(6);if(ge==null)break;se++,N[H+ne]=ge}return se&&(R.node.atime=Date.now()),se},write(R,N,H,K,pe){for(var se=0;se<K;se++)try{p(N[H+se])}catch{throw new _.ErrnoError(29)}return K&&(R.node.mtime=R.node.ctime=Date.now()),se}}),_.mkdev(v,M,T)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(globalThis.XMLHttpRequest)_e("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");else try{s.contents=S(s.url)}catch{throw new _.ErrnoError(29)}},createLazyFile(s,o,d,p,v){class M{lengthKnown=!1;chunks=[];get(se){if(!(se>this.length-1||se<0)){var ne=se%this.chunkSize,ge=se/this.chunkSize|0;return this.getter(ge)[ne]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;se.open("HEAD",d,!1),se.send(null),se.status>=200&&se.status<300||se.status===304||_e("Couldn't load "+d+". Status: "+se.status);var ne=Number(se.getResponseHeader("Content-length")),ge,Be=(ge=se.getResponseHeader("Accept-Ranges"))&&ge==="bytes",at=(ge=se.getResponseHeader("Content-Encoding"))&&ge==="gzip",nt=1024*1024;Be||(nt=ne);var St=(un,Un)=>{un>Un&&_e(`invalid range (${un}, ${Un}) or no bytes requested!`),Un>ne-1&&_e(`only ${ne} bytes available! programmer error!`);var dt=new XMLHttpRequest;return dt.open("GET",d,!1),ne!==nt&&dt.setRequestHeader("Range","bytes="+un+"-"+Un),dt.responseType="arraybuffer",dt.overrideMimeType&&dt.overrideMimeType("text/plain; charset=x-user-defined"),dt.send(null),dt.status>=200&&dt.status<300||dt.status===304||_e("Couldn't load "+d+". Status: "+dt.status),dt.response!==void 0?new Uint8Array(dt.response||[]):Ht(dt.responseText??"",!0)},ht=this;ht.setDataGetter(un=>{var Un=un*nt,dt=(un+1)*nt-1;return dt=Math.min(dt,ne-1),typeof ht.chunks[un]>"u"&&(ht.chunks[un]=St(Un,dt)),typeof ht.chunks[un]>"u"&&_e("doXHR failed!"),ht.chunks[un]}),(at||!ne)&&(nt=ne=1,ne=this.getter(0).length,nt=ne,b("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ne,this._chunkSize=nt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(globalThis.XMLHttpRequest){r||_e("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var T=new M,R={isDevice:!1,contents:T}}else var R={isDevice:!1,url:d};var N=_.createFile(s,o,R,p,v);R.contents?N.contents=R.contents:R.url&&(N.contents=null,N.url=R.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var H={};for(let[pe,se]of Object.entries(N.stream_ops))H[pe]=(...ne)=>(_.forceLoadFile(N),se(...ne));function K(pe,se,ne,ge,Be){var at=pe.node.contents;if(Be>=at.length)return 0;var nt=Math.min(at.length-Be,ge);if(at.slice)for(var St=0;St<nt;St++)se[ne+St]=at[Be+St];else for(var St=0;St<nt;St++)se[ne+St]=at.get(Be+St);return nt}return H.read=(pe,se,ne,ge,Be)=>(_.forceLoadFile(N),K(pe,se,ne,ge,Be)),H.mmap=(pe,se,ne,ge,Be)=>{_.forceLoadFile(N);var at=y(se);if(!at)throw new _.ErrnoError(48);return K(pe,Fe,at,se,ne),{ptr:at,allocated:!0}},N.stream_ops=H,N}},ae=(s,o,d)=>(s>>>=0,s?pt(Ge,s,o,d):""),oe={currentUmask:18,calculateAt(s,o,d){if(Ie.isAbs(o))return o;var p;if(s===-100)p=_.cwd();else{var v=oe.getStreamFromFD(s);p=v.path}if(o.length==0){if(!d)throw new _.ErrnoError(44);return p}return p+"/"+o},writeStat(s,o){le[s>>>2>>>0]=o.dev,le[s+4>>>2>>>0]=o.mode,le[s+8>>>2>>>0]=o.nlink,le[s+12>>>2>>>0]=o.uid,le[s+16>>>2>>>0]=o.gid,le[s+20>>>2>>>0]=o.rdev,Xe[s+24>>>3>>>0]=BigInt(o.size),he[s+32>>>2>>>0]=4096,he[s+36>>>2>>>0]=o.blocks;var d=o.atime.getTime(),p=o.mtime.getTime(),v=o.ctime.getTime();return Xe[s+40>>>3>>>0]=BigInt(Math.floor(d/1e3)),le[s+48>>>2>>>0]=d%1e3*1e3*1e3,Xe[s+56>>>3>>>0]=BigInt(Math.floor(p/1e3)),le[s+64>>>2>>>0]=p%1e3*1e3*1e3,Xe[s+72>>>3>>>0]=BigInt(Math.floor(v/1e3)),le[s+80>>>2>>>0]=v%1e3*1e3*1e3,Xe[s+88>>>3>>>0]=BigInt(o.ino),0},writeStatFs(s,o){le[s+4>>>2>>>0]=o.bsize,le[s+60>>>2>>>0]=o.bsize,Xe[s+8>>>3>>>0]=BigInt(o.blocks),Xe[s+16>>>3>>>0]=BigInt(o.bfree),Xe[s+24>>>3>>>0]=BigInt(o.bavail),Xe[s+32>>>3>>>0]=BigInt(o.files),Xe[s+40>>>3>>>0]=BigInt(o.ffree),le[s+48>>>2>>>0]=o.fsid,le[s+64>>>2>>>0]=o.flags,le[s+56>>>2>>>0]=o.namelen},doMsync(s,o,d,p,v){if(!_.isFile(o.node.mode))throw new _.ErrnoError(43);if(p&2)return 0;var M=Ge.slice(s,s+d);_.msync(o,M,v,d,p)},getStreamFromFD(s){var o=_.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=ae(s);return o}};function Re(s,o,d){d>>>=0,oe.varargs=d;try{var p=oe.getStreamFromFD(s);switch(o){case 0:{var v=gn();if(v<0)return-28;for(;_.streams[v];)v++;var M;return M=_.dupStream(p,v),M.fd}case 1:case 2:return 0;case 3:return p.flags;case 4:{var v=gn(),T=289792;return p.flags=p.flags&~T|v&T,0}case 12:{var v=ln(),R=0;return He[v+R>>>1>>>0]=2,0}case 13:case 14:return 0}return-28}catch(N){if(typeof _>"u"||N.name!=="ErrnoError")throw N;return-N.errno}}function Ne(s,o){o>>>=0;try{return oe.writeStat(o,_.fstat(s))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Et(s,o,d){d>>>=0,oe.varargs=d;try{var p=oe.getStreamFromFD(s);switch(o){case 21509:return p.tty?0:-59;case 21505:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcgets){var v=p.tty.ops.ioctl_tcgets(p),M=ln();he[M>>>2>>>0]=v.c_iflag||0,he[M+4>>>2>>>0]=v.c_oflag||0,he[M+8>>>2>>>0]=v.c_cflag||0,he[M+12>>>2>>>0]=v.c_lflag||0;for(var T=0;T<32;T++)Fe[M+T+17>>>0]=v.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return p.tty?0:-59;case 21506:case 21507:case 21508:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcsets){for(var M=ln(),R=he[M>>>2>>>0],N=he[M+4>>>2>>>0],H=he[M+8>>>2>>>0],K=he[M+12>>>2>>>0],pe=[],T=0;T<32;T++)pe.push(Fe[M+T+17>>>0]);return p.tty.ops.ioctl_tcsets(p.tty,o,{c_iflag:R,c_oflag:N,c_cflag:H,c_lflag:K,c_cc:pe})}return 0}case 21519:{if(!p.tty)return-59;var M=ln();return he[M>>>2>>>0]=0,0}case 21520:return p.tty?-28:-59;case 21537:case 21531:{var M=ln();return _.ioctl(p,o,M)}case 21523:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tiocgwinsz){var se=p.tty.ops.ioctl_tiocgwinsz(p.tty),M=ln();He[M>>>1>>>0]=se[0],He[M+2>>>1>>>0]=se[1]}return 0}case 21524:return p.tty?0:-59;case 21515:return p.tty?0:-59;default:return-28}}catch(ne){if(typeof _>"u"||ne.name!=="ErrnoError")throw ne;return-ne.errno}}function We(s,o){s>>>=0,o>>>=0;try{return s=oe.getStr(s),oe.writeStat(o,_.lstat(s))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function rt(s,o,d,p){o>>>=0,d>>>=0;try{o=oe.getStr(o);var v=p&256,M=p&4096;return p=p&-6401,o=oe.calculateAt(s,o,M),oe.writeStat(d,v?_.lstat(o):_.stat(o))}catch(T){if(typeof _>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function _t(s,o,d,p){o>>>=0,p>>>=0,oe.varargs=p;try{o=oe.getStr(o),o=oe.calculateAt(s,o);var v=p?gn():0;return d&64&&(v&=~oe.currentUmask),_.open(o,d,v).fd}catch(M){if(typeof _>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function gt(s,o){s>>>=0,o>>>=0;try{return s=oe.getStr(s),oe.writeStat(o,_.stat(s))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}var st=()=>_e(""),Le=s=>{s>>>=0;for(var o="";;){var d=Ge[s++>>>0];if(!d)return o;o+=String.fromCharCode(d)}},lt={},Xt={},Nn={},Gt=class extends Error{constructor(o){super(o),this.name="BindingError"}},xe=s=>{throw new Gt(s)};function vn(s,o,d={}){var p=o.name;if(s||xe(`type "${p}" must have a positive integer typeid pointer`),Xt.hasOwnProperty(s)){if(d.ignoreDuplicateRegistrations)return;xe(`Cannot register type '${p}' twice`)}if(Xt[s]=o,delete Nn[s],lt.hasOwnProperty(s)){var v=lt[s];delete lt[s],v.forEach(M=>M())}}function $e(s,o,d={}){return vn(s,o,d)}var ct=(s,o,d)=>{switch(o){case 1:return d?p=>Fe[p>>>0]:p=>Ge[p>>>0];case 2:return d?p=>He[p>>>1>>>0]:p=>kt[p>>>1>>>0];case 4:return d?p=>he[p>>>2>>>0]:p=>le[p>>>2>>>0];case 8:return d?p=>Xe[p>>>3>>>0]:p=>ze[p>>>3>>>0];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},$t=function(s,o,d,p,v){s>>>=0,o>>>=0,d>>>=0,o=Le(o);let M=p===0n,T=R=>R;if(M){let R=d*8;T=N=>BigInt.asUintN(R,N),v=T(v)}$e(s,{name:o,fromWireType:T,toWireType:(R,N)=>(typeof N=="number"&&(N=BigInt(N)),N),readValueFromPointer:ct(o,d,!M),destructorFunction:null})};function Wt(s,o,d,p){s>>>=0,o>>>=0,o=Le(o),$e(s,{name:o,fromWireType:function(v){return!!v},toWireType:function(v,M){return M?d:p},readValueFromPointer:function(v){return this.fromWireType(Ge[v>>>0])},destructorFunction:null})}var ns=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Ei=s=>{function o(d){return d.$$.ptrType.registeredClass.name}xe(o(s)+" instance already deleted")},Si=!1,pr=s=>{},is=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Mi=s=>{s.count.value-=1;var o=s.count.value===0;o&&is(s)},On=s=>globalThis.FinalizationRegistry?(Si=new FinalizationRegistry(o=>{Mi(o.$$)}),On=o=>{var d=o.$$,p=!!d.smartPtr;if(p){var v={$$:d};Si.register(o,v,o)}return o},pr=o=>Si.unregister(o),On(s)):(On=o=>o,s),bi=[],Na=()=>{for(;bi.length;){var s=bi.pop();s.$$.deleteScheduled=!1,s.delete()}},rs,Qd=()=>{let s=ss.prototype;Object.assign(s,{isAliasOf(d){if(!(this instanceof ss)||!(d instanceof ss))return!1;var p=this.$$.ptrType.registeredClass,v=this.$$.ptr;d.$$=d.$$;for(var M=d.$$.ptrType.registeredClass,T=d.$$.ptr;p.baseClass;)v=p.upcast(v),p=p.baseClass;for(;M.baseClass;)T=M.upcast(T),M=M.baseClass;return p===M&&v===T},clone(){if(this.$$.ptr||Ei(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=On(Object.create(Object.getPrototypeOf(this),{$$:{value:ns(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d},delete(){this.$$.ptr||Ei(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xe("Object already scheduled for deletion"),pr(this),Mi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ei(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xe("Object already scheduled for deletion"),bi.push(this),bi.length===1&&rs&&rs(Na),this.$$.deleteScheduled=!0,this}});let o=Symbol.dispose;o&&(s[o]=s.delete)};function ss(){}var as=(s,o)=>Object.defineProperty(o,"name",{value:s}),dl={},jd=(s,o,d)=>{if(s[o].overloadTable===void 0){var p=s[o];s[o]=function(...v){return s[o].overloadTable.hasOwnProperty(v.length)||xe(`Function '${d}' called with an invalid number of arguments (${v.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[v.length].apply(this,v)},s[o].overloadTable=[],s[o].overloadTable[p.argCount]=p}},mr=(s,o,d)=>{t.hasOwnProperty(s)?((d===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[d]!==void 0)&&xe(`Cannot register public name '${s}' twice`),jd(t,s,s),t[s].overloadTable.hasOwnProperty(d)&&xe(`Cannot register multiple overloads of a function with the same number of arguments (${d})!`),t[s].overloadTable[d]=o):(t[s]=o,t[s].argCount=d)},eu=48,tu=57,nu=s=>{s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=eu&&o<=tu?`_${s}`:s};function iu(s,o,d,p,v,M,T,R){this.name=s,this.constructor=o,this.instancePrototype=d,this.rawDestructor=p,this.baseClass=v,this.getActualType=M,this.upcast=T,this.downcast=R,this.pureVirtualFunctions=[]}var os=(s,o,d)=>{for(;o!==d;)o.upcast||xe(`Expected null or instance of ${d.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s},Oa=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s};function ru(s,o){if(o===null)return this.isReference&&xe(`null is not a valid ${this.name}`),0;o.$$||xe(`Cannot pass "${Oa(o)}" as a ${this.name}`),o.$$.ptr||xe(`Cannot pass deleted object as a pointer of type ${this.name}`);var d=o.$$.ptrType.registeredClass,p=os(o.$$.ptr,d,this.registeredClass);return p}function su(s,o){var d;if(o===null)return this.isReference&&xe(`null is not a valid ${this.name}`),this.isSmartPointer?(d=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,d),d):0;(!o||!o.$$)&&xe(`Cannot pass "${Oa(o)}" as a ${this.name}`),o.$$.ptr||xe(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&xe(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var p=o.$$.ptrType.registeredClass;if(d=os(o.$$.ptr,p,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&xe("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?d=o.$$.smartPtr:xe(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:d=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)d=o.$$.smartPtr;else{var v=o.clone();d=this.rawShare(d,dn.toHandle(()=>v.delete())),s!==null&&s.push(this.rawDestructor,d)}break;default:xe("Unsupported sharing policy")}return d}function au(s,o){if(o===null)return this.isReference&&xe(`null is not a valid ${this.name}`),0;o.$$||xe(`Cannot pass "${Oa(o)}" as a ${this.name}`),o.$$.ptr||xe(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&xe(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var d=o.$$.ptrType.registeredClass,p=os(o.$$.ptr,d,this.registeredClass);return p}function ls(s){return this.fromWireType(le[s>>>2>>>0])}var ul=(s,o,d)=>{if(o===d)return s;if(d.baseClass===void 0)return null;var p=ul(s,o,d.baseClass);return p===null?null:d.downcast(p)},ou={},lu=(s,o)=>{for(o===void 0&&xe("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},cu=(s,o)=>(o=lu(s,o),ou[o]),du=class extends Error{constructor(o){super(o),this.name="InternalError"}},cs=s=>{throw new du(s)},ds=(s,o)=>{(!o.ptrType||!o.ptr)&&cs("makeClassHandle requires ptr and ptrType");var d=!!o.smartPtrType,p=!!o.smartPtr;return d!==p&&cs("Both smartPtrType and smartPtr must be specified"),o.count={value:1},On(Object.create(s,{$$:{value:o,writable:!0}}))};function uu(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var d=cu(this.registeredClass,o);if(d!==void 0){if(d.$$.count.value===0)return d.$$.ptr=o,d.$$.smartPtr=s,d.clone();var p=d.clone();return this.destructor(s),p}function v(){return this.isSmartPointer?ds(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):ds(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var M=this.registeredClass.getActualType(o),T=dl[M];if(!T)return v.call(this);var R;this.isConst?R=T.constPointerType:R=T.pointerType;var N=ul(o,this.registeredClass,R.registeredClass);return N===null?v.call(this):this.isSmartPointer?ds(R.registeredClass.instancePrototype,{ptrType:R,ptr:N,smartPtrType:this,smartPtr:s}):ds(R.registeredClass.instancePrototype,{ptrType:R,ptr:N})}var hu=()=>{Object.assign(us.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},readValueFromPointer:ls,fromWireType:uu})};function us(s,o,d,p,v,M,T,R,N,H,K){this.name=s,this.registeredClass=o,this.isReference=d,this.isConst=p,this.isSmartPointer=v,this.pointeeType=M,this.sharingPolicy=T,this.rawGetPointee=R,this.rawConstructor=N,this.rawShare=H,this.rawDestructor=K,!v&&o.baseClass===void 0?p?(this.toWireType=ru,this.destructorFunction=null):(this.toWireType=au,this.destructorFunction=null):this.toWireType=su}var hl=(s,o,d)=>{t.hasOwnProperty(s)||cs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&d!==void 0?t[s].overloadTable[d]=o:(t[s]=o,t[s].argCount=d)},fl=[],pl=s=>{var o=fl[s];return o||(fl[s]=o=Il.get(s)),o},fu=(s,o,d=[],p=!1)=>{var v=pl(o),M=v(...d);function T(R){return s[0]=="p"?R>>>0:R}return T(M)},pu=(s,o,d=!1)=>(...p)=>fu(s,o,p,d),Ai=(s,o,d=!1)=>{s=Le(s);function p(){if(s.includes("p"))return pu(s,o,d);var M=pl(o);return M}var v=p();return typeof v!="function"&&xe(`unknown function pointer with signature ${s}: ${o}`),v};class mu extends Error{}var ml=s=>{var o=Al(s),d=Le(o);return Fn(o),d},hs=(s,o)=>{var d=[],p={};function v(M){if(!p[M]&&!Xt[M]){if(Nn[M]){Nn[M].forEach(v);return}d.push(M),p[M]=!0}}throw o.forEach(v),new mu(`${s}: `+d.map(ml).join([", "]))},fs=(s,o,d)=>{s.forEach(R=>Nn[R]=o);function p(R){var N=d(R);N.length!==s.length&&cs("Mismatched type converter count");for(var H=0;H<s.length;++H)$e(s[H],N[H])}var v=new Array(o.length),M=[],T=0;for(let[R,N]of o.entries())Xt.hasOwnProperty(N)?v[R]=Xt[N]:(M.push(N),lt.hasOwnProperty(N)||(lt[N]=[]),lt[N].push(()=>{v[R]=Xt[N],++T,T===M.length&&p(v)}));M.length===0&&p(v)};function _u(s,o,d,p,v,M,T,R,N,H,K,pe,se){s>>>=0,o>>>=0,d>>>=0,p>>>=0,v>>>=0,M>>>=0,T>>>=0,R>>>=0,N>>>=0,H>>>=0,K>>>=0,pe>>>=0,se>>>=0,K=Le(K),M=Ai(v,M),R&&=Ai(T,R),H&&=Ai(N,H),se=Ai(pe,se);var ne=nu(K);mr(ne,function(){hs(`Cannot construct ${K} due to unbound types`,[p])}),fs([s,o,d],p?[p]:[],ge=>{ge=ge[0];var Be,at;p?(Be=ge.registeredClass,at=Be.instancePrototype):at=ss.prototype;var nt=as(K,function(...Wa){if(Object.getPrototypeOf(this)!==St)throw new Gt(`Use 'new' to construct ${K}`);if(ht.constructor_body===void 0)throw new Gt(`${K} has no accessible constructor`);var Rl=ht.constructor_body[Wa.length];if(Rl===void 0)throw new Gt(`Tried to invoke ctor of ${K} with invalid number of parameters (${Wa.length}) - expected (${Object.keys(ht.constructor_body).toString()}) parameters instead!`);return Rl.apply(this,Wa)}),St=Object.create(at,{constructor:{value:nt}});nt.prototype=St;var ht=new iu(K,nt,St,se,Be,M,R,H);ht.baseClass&&(ht.baseClass.__derivedClasses??=[],ht.baseClass.__derivedClasses.push(ht));var un=new us(K,ht,!0,!1,!1),Un=new us(K+"*",ht,!1,!1,!1),dt=new us(K+" const*",ht,!1,!0,!1);return dl[s]={pointerType:Un,constPointerType:dt},hl(ne,nt),[un,Un,dt]})}var Fa=s=>{for(;s.length;){var o=s.pop(),d=s.pop();d(o)}},_l=(s,o,d)=>(s instanceof Object||xe(`${d} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||xe(`${d} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||xe(`cannot call emscripten binding method ${d} on deleted object`),os(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),gu=function(s,o,d,p,v,M,T,R,N,H){s>>>=0,o>>>=0,d>>>=0,p>>>=0,v>>>=0,M>>>=0,T>>>=0,R>>>=0,N>>>=0,H>>>=0,o=Le(o),v=Ai(p,v),fs([],[s],K=>{K=K[0];var pe=`${K.name}.${o}`,se={get(){hs(`Cannot access ${pe} due to unbound types`,[d,T])},enumerable:!0,configurable:!0};return N?se.set=()=>hs(`Cannot access ${pe} due to unbound types`,[d,T]):se.set=ne=>xe(pe+" is a read-only property"),Object.defineProperty(K.registeredClass.instancePrototype,o,se),fs([],N?[d,T]:[d],ne=>{var ge=ne[0],Be={get(){var nt=_l(this,K,pe+" getter");return ge.fromWireType(v(M,nt))},enumerable:!0};if(N){N=Ai(R,N);var at=ne[1];Be.set=function(nt){var St=_l(this,K,pe+" setter"),ht=[];N(H,St,at.toWireType(ht,nt)),Fa(ht)}}return Object.defineProperty(K.registeredClass.instancePrototype,o,Be),[]}),[]})},gl=[],ci=[0,1,,1,null,1,!0,1,!1,1];function Ua(s){if(s>>>=0,s>9&&--ci[s+1]===0){var o=ci[s];ci[s]=void 0,gl.push(s)}}var dn={toValue:s=>(s||xe(`Cannot use deleted val. handle = ${s}`),ci[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let o=gl.pop()||ci.length;return ci[o]=s,ci[o+1]=1,o}}}},yu={name:"emscripten::val",fromWireType:s=>{var o=dn.toValue(s);return Ua(s),o},toWireType:(s,o)=>dn.toHandle(o),readValueFromPointer:ls,destructorFunction:null};function vu(s){return s>>>=0,$e(s,yu)}var Ba=(s,o,d)=>{switch(o){case 1:return d?function(p){return this.fromWireType(Fe[p>>>0])}:function(p){return this.fromWireType(Ge[p>>>0])};case 2:return d?function(p){return this.fromWireType(He[p>>>1>>>0])}:function(p){return this.fromWireType(kt[p>>>1>>>0])};case 4:return d?function(p){return this.fromWireType(he[p>>>2>>>0])}:function(p){return this.fromWireType(le[p>>>2>>>0])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}};function xu(s){return s===0?"object":s===1?"number":"string"}function Eu(s,o,d,p,v){s>>>=0,o>>>=0,d>>>=0,o=Le(o);let M=xu(v);switch(M){case"object":{let H=function(){};H.values={},$e(s,{name:o,constructor:H,valueType:M,fromWireType:function(K){return this.constructor.values[K]},toWireType:(K,pe)=>pe.value,readValueFromPointer:Ba(o,d,p),destructorFunction:null}),mr(o,H);break}case"number":{var T={};$e(s,{name:o,keysMap:T,valueType:M,fromWireType:H=>H,toWireType:(H,K)=>K,readValueFromPointer:Ba(o,d,p),destructorFunction:null}),mr(o,T),delete t[o].argCount;break}case"string":{var R={},N={},T={};$e(s,{name:o,valuesMap:R,reverseMap:N,keysMap:T,valueType:M,fromWireType:function(K){return this.reverseMap[K]},toWireType:function(K,pe){return this.valuesMap[pe]},readValueFromPointer:Ba(o,d,p),destructorFunction:null}),mr(o,T),delete t[o].argCount;break}}}var yl=(s,o)=>{var d=Xt[s];return d===void 0&&xe(`${o} has unknown type ${ml(s)}`),d};function Su(s,o,d){s>>>=0,o>>>=0;var p=yl(s,"enum");switch(o=Le(o),p.valueType){case"object":{var v=p.constructor,M=Object.create(p.constructor.prototype,{value:{value:d},constructor:{value:as(`${p.name}_${o}`,function(){})}});v.values[d]=M,v[o]=M;break}case"number":{p.keysMap[o]=d;break}case"string":{p.valuesMap[o]=d,p.reverseMap[d]=o,p.keysMap[o]=o;break}}}var Mu=(s,o)=>{switch(o){case 4:return function(d){return this.fromWireType(Ut[d>>>2>>>0])};case 8:return function(d){return this.fromWireType(Bt[d>>>3>>>0])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},bu=function(s,o,d){s>>>=0,o>>>=0,d>>>=0,o=Le(o),$e(s,{name:o,fromWireType:p=>p,toWireType:(p,v)=>v,readValueFromPointer:Mu(o,d),destructorFunction:null})};function vl(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function Au(s,o,d,p){var v=vl(s),M=s.length-2,T=[],R=["fn"];o&&R.push("thisWired");for(var N=0;N<M;++N)T.push(`arg${N}`),R.push(`arg${N}Wired`);T=T.join(","),R=R.join(",");var H=`return function (${T}) {
`;v&&(H+=`var destructors = [];
`);var K=v?"destructors":"null",pe=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];o&&(H+=`var thisWired = toClassParamWire(${K}, this);
`);for(var N=0;N<M;++N){var se=`toArg${N}Wire`;H+=`var arg${N}Wired = ${se}(${K}, arg${N});
`,pe.push(se)}if(H+=(d||p?"var rv = ":"")+`invoker(${R});
`,v)H+=`runDestructors(destructors);
`;else for(var N=o?1:2;N<s.length;++N){var ne=N===1?"thisWired":"arg"+(N-2)+"Wired";s[N].destructorFunction!==null&&(H+=`${ne}_dtor(${ne});
`,pe.push(`${ne}_dtor`))}return d&&(H+=`var ret = fromRetWire(rv);
return ret;
`),H+=`}
`,new Function(pe,H)}function Tu(s,o,d,p,v,M){var T=o.length;T<2&&xe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var R=o[1]!==null&&d!==null,N=vl(o),H=!o[0].isVoid,K=o[0],pe=o[1],se=[s,xe,p,v,Fa,K.fromWireType.bind(K),pe?.toWireType.bind(pe)],ne=2;ne<T;++ne){var ge=o[ne];se.push(ge.toWireType.bind(ge))}if(!N)for(var ne=R?1:2;ne<o.length;++ne)o[ne].destructorFunction!==null&&se.push(o[ne].destructorFunction);var at=Au(o,R,H,M)(...se);return as(s,at)}var wu=(s,o)=>{for(var d=[],p=0;p<s;p++)d.push(le[o+p*4>>>2>>>0]);return d},Cu=s=>{s=s.trim();let o=s.indexOf("(");return o===-1?s:s.slice(0,o)};function Iu(s,o,d,p,v,M,T,R){s>>>=0,d>>>=0,p>>>=0,v>>>=0,M>>>=0;var N=wu(o,d);s=Le(s),s=Cu(s),v=Ai(p,v,T),mr(s,function(){hs(`Cannot call ${s} due to unbound types`,N)},o-1),fs([],N,H=>{var K=[H[0],null].concat(H.slice(1));return hl(s,Tu(s,K,null,v,M,T),o-1),[]})}var Pu=function(s,o,d,p,v){s>>>=0,o>>>=0,d>>>=0,o=Le(o);let M=p===0,T=N=>N;if(M){var R=32-8*d;T=N=>N<<R>>>R,v=T(v)}$e(s,{name:o,fromWireType:T,toWireType:(N,H)=>H,readValueFromPointer:ct(o,d,p!==0),destructorFunction:null})};function Ru(s,o,d){s>>>=0,d>>>=0;var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],v=p[o];function M(T){var R=le[T>>>2>>>0],N=le[T+4>>>2>>>0];return new v(Fe.buffer,N,R)}d=Le(d),$e(s,{name:d,fromWireType:M,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})}var di=(s,o,d)=>Yt(s,Ge,o,d);function Lu(s,o){s>>>=0,o>>>=0,o=Le(o);var d=!0;$e(s,{name:o,fromWireType(p){var v=le[p>>>2>>>0],M=p+4,T;if(d)T=ae(M,v,!0);else{T="";for(var R=0;R<v;++R)T+=String.fromCharCode(Ge[M+R>>>0])}return Fn(p),T},toWireType(p,v){v instanceof ArrayBuffer&&(v=new Uint8Array(v));var M,T=typeof v=="string";T||ArrayBuffer.isView(v)&&v.BYTES_PER_ELEMENT==1||xe("Cannot pass non-string to std::string"),d&&T?M=cn(v):M=v.length;var R=ms(4+M+1),N=R+4;if(le[R>>>2>>>0]=M,T)if(d)di(v,N,M+1);else for(var H=0;H<M;++H){var K=v.charCodeAt(H);K>255&&(Fn(R),xe("String has UTF-16 code units that do not fit in 8 bits")),Ge[N+H>>>0]=K}else Ge.set(v,N>>>0);return p!==null&&p.push(Fn,R),R},readValueFromPointer:ls,destructorFunction(p){Fn(p)}})}var xl=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Du=(s,o,d)=>{var p=s>>>1,v=Rn(kt,p,o/2,d);if(v-p>16&&xl)return xl.decode(kt.subarray(p>>>0,v>>>0));for(var M="",T=p;T<v;++T){var R=kt[T>>>0];M+=String.fromCharCode(R)}return M},Nu=(s,o,d)=>{if(d??=2147483647,d<2)return 0;d-=2;for(var p=o,v=d<s.length*2?d/2:s.length,M=0;M<v;++M){var T=s.charCodeAt(M);He[o>>>1>>>0]=T,o+=2}return He[o>>>1>>>0]=0,o-p},Ou=s=>s.length*2,Fu=(s,o,d)=>{for(var p="",v=s>>>2,M=0;!(M>=o/4);M++){var T=le[v+M>>>0];if(!T&&!d)break;p+=String.fromCodePoint(T)}return p},Uu=(s,o,d)=>{if(o>>>=0,d??=2147483647,d<4)return 0;for(var p=o,v=p+d-4,M=0;M<s.length;++M){var T=s.codePointAt(M);if(T>65535&&M++,he[o>>>2>>>0]=T,o+=4,o+4>v)break}return he[o>>>2>>>0]=0,o-p},Bu=s=>{for(var o=0,d=0;d<s.length;++d){var p=s.codePointAt(d);p>65535&&d++,o+=4}return o};function ku(s,o,d){s>>>=0,o>>>=0,d>>>=0,d=Le(d);var p,v,M;o===2?(p=Du,v=Nu,M=Ou):(p=Fu,v=Uu,M=Bu),$e(s,{name:d,fromWireType:T=>{var R=le[T>>>2>>>0],N=p(T+4,R*o,!0);return Fn(T),N},toWireType:(T,R)=>{typeof R!="string"&&xe(`Cannot pass non-string to C++ string type ${d}`);var N=M(R),H=ms(4+N+o);return le[H>>>2>>>0]=N/o,v(R,H+4,N+o),T!==null&&T.push(Fn,H),H},readValueFromPointer:ls,destructorFunction(T){Fn(T)}})}var Gu=function(s,o){s>>>=0,o>>>=0,o=Le(o),$e(s,{isVoid:!0,name:o,fromWireType:()=>{},toWireType:(d,p)=>{}})},ka=[],Wu=s=>{var o=ka.length;return ka.push(s),o},zu=(s,o)=>{for(var d=new Array(s),p=0;p<s;++p)d[p]=yl(le[o+p*4>>>2>>>0],`parameter ${p}`);return d},Vu=(s,o,d)=>{var p=[],v=s(p,d);return p.length&&(le[o>>>2>>>0]=dn.toHandle(p)),v},Yu={},El=s=>{var o=Yu[s];return o===void 0?Le(s):o},Hu=function(s,o,d){o>>>=0;var p=8,[v,...M]=zu(s,o),T=v.toWireType.bind(v),R=M.map(ne=>ne.readValueFromPointer.bind(ne));s--;var N={toValue:dn.toValue},H=R.map((ne,ge)=>{var Be=`argFromPtr${ge}`;return N[Be]=ne,`${Be}(args${ge?"+"+ge*p:""})`}),K;switch(d){case 0:K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:N.getStringOrSymbol=El,K="toValue(handle)[getStringOrSymbol(methodName)]";break}K+=`(${H})`,v.isVoid||(N.toReturnWire=T,N.emval_returnValue=Vu,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
${K}
}`;var pe=new Function(Object.keys(N),K)(...Object.values(N)),se=`methodCaller<(${M.map(ne=>ne.name)}) => ${v.name}>`;return Wu(as(se,pe))};function Xu(s){s>>>=0,s>9&&(ci[s+1]+=1)}function $u(s,o,d,p,v){return s>>>=0,o>>>=0,d>>>=0,p>>>=0,v>>>=0,ka[s](o,d,p,v)}function qu(){return dn.toHandle([])}function Ku(s){return s>>>=0,dn.toHandle(El(s))}function Zu(){return dn.toHandle({})}function Ju(s){s>>>=0;var o=dn.toValue(s);Fa(o),Ua(s)}function Qu(s,o,d){s>>>=0,o>>>=0,d>>>=0,s=dn.toValue(s),o=dn.toValue(o),d=dn.toValue(d),s[o]=d}function ju(s,o){s=In(s),o>>>=0;var d=new Date(s*1e3);he[o>>>2>>>0]=d.getUTCSeconds(),he[o+4>>>2>>>0]=d.getUTCMinutes(),he[o+8>>>2>>>0]=d.getUTCHours(),he[o+12>>>2>>>0]=d.getUTCDate(),he[o+16>>>2>>>0]=d.getUTCMonth(),he[o+20>>>2>>>0]=d.getUTCFullYear()-1900,he[o+24>>>2>>>0]=d.getUTCDay();var p=Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0),v=(d.getTime()-p)/(1e3*60*60*24)|0;he[o+28>>>2>>>0]=v}var eh=s=>s%4===0&&(s%100!==0||s%400===0),th=[0,31,60,91,121,152,182,213,244,274,305,335],nh=[0,31,59,90,120,151,181,212,243,273,304,334],ih=s=>{var o=eh(s.getFullYear()),d=o?th:nh,p=d[s.getMonth()]+s.getDate()-1;return p},rh=function(s){s>>>=0;var o=(()=>{var d=new Date(he[s+20>>>2>>>0]+1900,he[s+16>>>2>>>0],he[s+12>>>2>>>0],he[s+8>>>2>>>0],he[s+4>>>2>>>0],he[s>>>2>>>0],0);if(isNaN(d.getTime()))return-1;var p=he[s+32>>>2>>>0],v=d.getTimezoneOffset(),M=new Date(d.getFullYear(),0,1),T=new Date(d.getFullYear(),6,1).getTimezoneOffset(),R=M.getTimezoneOffset(),N=Math.min(R,T);if(p<0)he[s+32>>>2>>>0]=+(T!=R&&N==v);else if(p>0!=(N==v)){var H=Math.max(R,T),K=p>0?N:H;d.setTime(d.getTime()+(K-v)*6e4)}he[s+24>>>2>>>0]=d.getDay();var pe=ih(d)|0;return he[s+28>>>2>>>0]=pe,he[s>>>2>>>0]=d.getSeconds(),he[s+4>>>2>>>0]=d.getMinutes(),he[s+8>>>2>>>0]=d.getHours(),he[s+12>>>2>>>0]=d.getDate(),he[s+16>>>2>>>0]=d.getMonth(),he[s+20>>>2>>>0]=d.getYear(),d.getTime()/1e3})();return BigInt(o)},sh=function(s,o,d,p){s>>>=0,o>>>=0,d>>>=0,p>>>=0;var v=new Date().getFullYear(),M=new Date(v,0,1),T=new Date(v,6,1),R=M.getTimezoneOffset(),N=T.getTimezoneOffset(),H=Math.max(R,N);le[s>>>2>>>0]=H*60,he[o>>>2>>>0]=+(R!=N);var K=ne=>{var ge=ne>=0?"-":"+",Be=Math.abs(ne),at=String(Math.floor(Be/60)).padStart(2,"0"),nt=String(Be%60).padStart(2,"0");return`UTC${ge}${at}${nt}`},pe=K(R),se=K(N);N<R?(di(pe,d,17),di(se,p,17)):(di(pe,p,17),di(se,d,17))},ah=()=>Date.now();function oh(s){return s>>>=0,I(ae(s))}var lh=()=>performance.now(),ch=()=>4294901760,dh=(s,o)=>Math.ceil(s/o)*o,uh=s=>{var o=_s.buffer.byteLength,d=(s-o+65535)/65536|0;try{return _s.grow(d),te(),1}catch{}};function hh(s){s>>>=0;var o=Ge.length,d=ch();if(s>d)return!1;for(var p=1;p<=4;p*=2){var v=o*(1+.2/p);v=Math.min(v,s+100663296);var M=Math.min(d,dh(Math.max(s,v),65536)),T=uh(M);if(T)return!0}return!1}var ps={},fh=()=>u,_r=()=>{if(!_r.strings){var s=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:fh()};for(var d in ps)ps[d]===void 0?delete o[d]:o[d]=ps[d];var p=[];for(var d in o)p.push(`${d}=${o[d]}`);_r.strings=p}return _r.strings};function ph(s,o){s>>>=0,o>>>=0;var d=0,p=0;for(var v of _r()){var M=o+d;le[s+p>>>2>>>0]=M,d+=di(v,M,1/0)+1,p+=4}return 0}function mh(s,o){s>>>=0,o>>>=0;var d=_r();le[s>>>2>>>0]=d.length;var p=0;for(var v of d)p+=cn(v)+1;return le[o>>>2>>>0]=p,0}function _h(s){try{var o=oe.getStreamFromFD(s);return _.close(o),0}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return d.errno}}var gh=(s,o,d,p)=>{for(var v=0,M=0;M<d;M++){var T=le[o>>>2>>>0],R=le[o+4>>>2>>>0];o+=8;var N=_.read(s,Fe,T,R,p);if(N<0)return-1;if(v+=N,N<R)break;typeof p<"u"&&(p+=N)}return v};function yh(s,o,d,p){o>>>=0,d>>>=0,p>>>=0;try{var v=oe.getStreamFromFD(s),M=gh(v,o,d);return le[p>>>2>>>0]=M,0}catch(T){if(typeof _>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function vh(s,o,d,p){o=In(o),p>>>=0;try{if(isNaN(o))return 22;var v=oe.getStreamFromFD(s);return _.llseek(v,o,d),Xe[p>>>3>>>0]=BigInt(v.position),v.getdents&&o===0&&d===0&&(v.getdents=null),0}catch(M){if(typeof _>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var xh=(s,o,d,p)=>{for(var v=0,M=0;M<d;M++){var T=le[o>>>2>>>0],R=le[o+4>>>2>>>0];o+=8;var N=_.write(s,Fe,T,R,p);if(N<0)return-1;if(v+=N,N<R)break;typeof p<"u"&&(p+=N)}return v};function Eh(s,o,d,p){o>>>=0,d>>>=0,p>>>=0;try{var v=oe.getStreamFromFD(s),M=xh(v,o,d);return le[p>>>2>>>0]=M,0}catch(T){if(typeof _>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Sh(s,o){return s>>>=0,o>>>=0,yn(Ge.subarray(s>>>0,s+o>>>0))}var Sl=s=>{var o=t["_"+s];return o},Mh=(s,o)=>{Fe.set(s,o>>>0)},Ml=s=>wl(s),bh=s=>{var o=cn(s)+1,d=Ml(o);return di(s,d,o),d},bl=(s,o,d,p,v)=>{var M={string:ge=>{var Be=0;return ge!=null&&ge!==0&&(Be=bh(ge)),Be},array:ge=>{var Be=Ml(ge.length);return Mh(ge,Be),Be}};function T(ge){return o==="string"?ae(ge):o==="pointer"?ge>>>0:o==="boolean"?!!ge:ge}var R=Sl(s),N=[],H=0;if(p)for(var K=0;K<p.length;K++){var pe=M[d[K]];pe?(H===0&&(H=tt()),N[K]=pe(p[K])):N[K]=p[K]}var se=R(...N);function ne(ge){return H!==0&&Lt(H),T(ge)}return se=ne(se),se},Ah=(s,o,d,p)=>{var v=!d||d.every(T=>T==="number"||T==="boolean"),M=o!=="string";return M&&v&&!p?Sl(s):(...T)=>bl(s,o,d,T,p)},Th=s=>{var o=cn(s)+1,d=ms(o);return d&&di(s,d,o),d};if(_.createPreloadedFile=j,_.preloadFile=$,_.staticInit(),Qd(),hu(),t.noExitRuntime&&(zt=t.noExitRuntime),t.preloadPlugins&&(X=t.preloadPlugins),t.print&&(b=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(L=t.wasmBinary),t.arguments&&(c=t.arguments),t.thisProgram&&(u=t.thisProgram),t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();t.ENV=ps,t.ccall=bl,t.cwrap=Ah,t.setValue=Ue,t.UTF8ToString=ae,t.stringToNewUTF8=Th,t.FS=_;var wh,Ch,Fn,ms,Ih,Ph,Al,Rh,Lh,Dh,Nh,Oh,Fh,Uh,Bh,kh,Gh,Wh,zh,Vh,Yh,Hh,Xh,$h,qh,Tl,wl,Cl,Kh,Zh,_s,Il;function Jh(s){wh=t.__Znwm=s._Znwm,Ch=t.__ZdlPvm=s._ZdlPvm,Fn=s.free,ms=s.malloc,Ih=s.calloc,Ph=s.realloc,Al=s.__getTypeName,Rh=t._strndup=s.strndup,Lh=t.__ZdaPv=s._ZdaPv,Dh=t.__ZdaPvm=s._ZdaPvm,Nh=t.__ZdlPv=s._ZdlPv,Oh=t._emscripten_builtin_malloc=s.emscripten_builtin_malloc,Fh=t.__Znam=s._Znam,Uh=t.__ZnamSt11align_val_t=s._ZnamSt11align_val_t,Bh=t.__ZnwmSt11align_val_t=s._ZnwmSt11align_val_t,kh=t.___libc_calloc=s.__libc_calloc,Gh=t.___libc_free=s.__libc_free,Wh=t.___libc_malloc=s.__libc_malloc,zh=t.___libc_realloc=s.__libc_realloc,Vh=t._emscripten_builtin_calloc=s.emscripten_builtin_calloc,Yh=t._emscripten_builtin_free=s.emscripten_builtin_free,Hh=t._emscripten_builtin_realloc=s.emscripten_builtin_realloc,Xh=t._malloc_size=s.malloc_size,$h=t._malloc_usable_size=s.malloc_usable_size,qh=t._reallocf=s.reallocf,Tl=s._emscripten_stack_restore,wl=s._emscripten_stack_alloc,Cl=s.emscripten_stack_get_current,Kh=_s=s.memory,Zh=Il=s.__indirect_function_table}var Pl={__cxa_throw:xi,__syscall_fcntl64:Re,__syscall_fstat64:Ne,__syscall_ioctl:Et,__syscall_lstat64:We,__syscall_newfstatat:rt,__syscall_openat:_t,__syscall_stat64:gt,_abort_js:st,_embind_register_bigint:$t,_embind_register_bool:Wt,_embind_register_class:_u,_embind_register_class_property:gu,_embind_register_emval:vu,_embind_register_enum:Eu,_embind_register_enum_value:Su,_embind_register_float:bu,_embind_register_function:Iu,_embind_register_integer:Pu,_embind_register_memory_view:Ru,_embind_register_std_string:Lu,_embind_register_std_wstring:ku,_embind_register_void:Gu,_emval_create_invoker:Hu,_emval_decref:Ua,_emval_incref:Xu,_emval_invoke:$u,_emval_new_array:qu,_emval_new_cstring:Ku,_emval_new_object:Zu,_emval_run_destructors:Ju,_emval_set_property:Qu,_gmtime_js:ju,_mktime_js:rh,_tzset_js:sh,emscripten_date_now:ah,emscripten_err:oh,emscripten_get_now:lh,emscripten_resize_heap:hh,environ_get:ph,environ_sizes_get:mh,fd_close:_h,fd_read:yh,fd_seek:vh,fd_write:Eh,random_get:Sh};function Qh(s){s=Object.assign({},s);var o=v=>M=>v(M)>>>0,d=v=>(M,T)=>v(M,T)>>>0,p=v=>()=>v()>>>0;return s.malloc=o(s.malloc),s.calloc=d(s.calloc),s.realloc=d(s.realloc),s.__getTypeName=o(s.__getTypeName),s.emscripten_builtin_malloc=o(s.emscripten_builtin_malloc),s.emscripten_builtin_calloc=d(s.emscripten_builtin_calloc),s._emscripten_stack_alloc=o(s._emscripten_stack_alloc),s.emscripten_stack_get_current=p(s.emscripten_stack_get_current),s}function Ga(){if(Y>0){V=Ga;return}if(fe(),Y>0){V=Ga;return}function s(){t.calledRun=!0,!P&&(Me(),J?.(t),t.onRuntimeInitialized?.(),ye())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s()}var Ti;return Ti=await an(),Ga(),me?e=t:e=new Promise((s,o)=>{J=s,ue=o}),e}var Ki=jh;var ef=Object.defineProperty,tf=(i,e,t)=>e in i?ef(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,je=(i,e,t)=>tf(i,typeof e!="symbol"?e+"":e,t);var nf=["utf-8","utf-8","iso-8859-1","iso-8859-2","iso-8859-3","iso-8859-4","iso-8859-5","iso-8859-6","iso-8859-7","iso-8859-8","iso-8859-9","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","utf-8","shift-jis","macintosh","big5","euc-kr","utf-8","ibm866","windows-1250","windows-1251","windows-1252","gbk","windows-1253","windows-1254","windows-1255","windows-1256","windows-1257","windows-874","shift-jis","gbk","euc-kr","big5","utf-8","utf-16le","windows-1258"],Ll=i=>nf[i];var wi=(i=>(i[i.TopLeft=1]="TopLeft",i[i.TopCenter=2]="TopCenter",i[i.TopRight=3]="TopRight",i[i.MiddleLeft=4]="MiddleLeft",i[i.MiddleCenter=5]="MiddleCenter",i[i.MiddleRight=6]="MiddleRight",i[i.BottomLeft=7]="BottomLeft",i[i.BottomCenter=8]="BottomCenter",i[i.BottomRight=9]="BottomRight",i))(wi||{});var Ya=(i=>(i[i.PatternFill=0]="PatternFill",i[i.SolidFill=1]="SolidFill",i))(Ya||{}),Ha=(i=>(i[i.NonAssociative=0]="NonAssociative",i[i.Associative=1]="Associative",i))(Ha||{});var Ul=(i=>(i[i.Solid=0]="Solid",i[i.Gradient=1]="Gradient",i))(Ul||{}),Xa=(i=>(i[i.TwoColor=0]="TwoColor",i[i.OneColor=1]="OneColor",i))(Xa||{});var yr=(i=>(i[i.Line=1]="Line",i[i.Circular=2]="Circular",i[i.Elliptic=3]="Elliptic",i[i.Spline=4]="Spline",i))(yr||{});var $a=(i=>(i[i.LEFT=0]="LEFT",i[i.CENTER=1]="CENTER",i[i.RIGHT=2]="RIGHT",i[i.ALIGNED=3]="ALIGNED",i[i.MIDDLE=4]="MIDDLE",i[i.FIT=5]="FIT",i))($a||{});var rf=Object.freeze(["ACADMAINTVER","ACADVER","ANGBASE","ANGDIR","ATTMODE","AUNITS","AUPREC","CECOLOR","CELTSCALE","CELTYPE","CELWEIGHT","CEPSNID","CEPSNTYPE","CHAMFERA","CHAMFERB","CHAMFERC","CHAMFERD","CLAYER","CMLJUST","CMLSCALE","CMLSTYLE","CSHADOW","DIMADEC","DIMALT","DIMALTD","DIMALTF","DIMALTRND","DIMALTTD","DIMALTTZ","DIMALTU","DIMALTZ","DIMAPOST","DIMASO","DIMASSOC","DIMASZ","DIMATFIT","DIMAUNIT","DIMAZIN","DIMBLK","DIMBLK1","DIMBLK2","DIMCEN","DIMCLRD","DIMCLRE","DIMCLRT","DIMDEC","DIMDLE","DIMDLI","DIMDSEP","DIMEXE","DIMEXO","DIMFAC","DIMGAP","DIMJUST","DIMLDRBLK","DIMLFAC","DIMLIM","DIMLUNIT","DIMLWD","DIMLWE","DIMPOST","DIMRND","DIMSAH","DIMSCALE","DIMSD1","DIMSD2","DIMSE1","DIMSE2","DIMSHO","DIMSOXD","DIMSTYLE","DIMTAD","DIMTDEC","DIMTFAC","DIMTIH","DIMTIX","DIMTM","DIMTMOVE","DIMTOFL","DIMTOH","DIMTOL","DIMTOLJ","DIMTP","DIMTSZ","DIMTVP","DIMTXSTY","DIMTXT","DIMTZIN","DIMUPT","DIMZIN","DISPSILH","DRAGVS","DWGCODEPAGE","ELEVATION","ENDCAPS","EXTMAX","EXTMIN","EXTNAMES","FILLETRAD","FILLMODE","FINGERPRINTGUID","HALOGAP","HANDSEED","HIDETEXT","HYPERLINKBASE","INDEXCTL","INSBASE","INSUNITS","INTERFERECOLOR","INTERFEREOBJVS","INTERFEREVPVS","INTERSECTIONCOLOR","INTERSECTIONDISPLAY","JOINSTYLE","LIMCHECK","LIMMAX","LIMMIN","LTSCALE","LUNITS","LUPREC","LWDISPLAY","MAXACTVP","MEASUREMENT","MENU","MIRRTEXT","OBSCOLOR","OBSLTYPE","ORTHOMODE","PDMODE","PDSIZE","PELEVATION","PEXTMAX","PEXTMIN","PINSBASE","PLIMCHECK","PLIMMAX","PLIMMIN","PLINEGEN","PLINEWID","PROJECTNAME","PROXYGRAPHICS","PSLTSCALE","PSTYLEMODE","PSVPSCALE","PUCSBASE","PUCSNAME","PUCSORG","PUCSORGBACK","PUCSORGBOTTOM","PUCSORGFRONT","PUCSORGLEFT","PUCSORGRIGHT","PUCSORGTOP","PUCSORTHOREF","PUCSORTHOVIEW","PUCSXDIR","PUCSYDIR","QTEXTMODE","REGENMODE","SHADEDGE","SHADEDIF","SHADOWPLANELOCATION","SKETCHINC","SKPOLY","SORTENTS","SPLINESEGS","SPLINETYPE","SURFTAB1","SURFTAB2","SURFTYPE","SURFU","SURFV","TDCREATE","TDINDWG","TDUCREATE","TDUPDATE","TDUSRTIMER","TDUUPDATE","TEXTSIZE","TEXTSTYLE","THICKNESS","TILEMODE","TRACEWID","TREEDEPTH","UCSBASE","UCSNAME","UCSORG","UCSORGBACK","UCSORGBOTTOM","UCSORGFRONT","UCSORGLEFT","UCSORGRIGHT","UCSORGTOP","UCSORTHOREF","UCSORTHOVIEW","UCSXDIR","UCSYDIR","UNITMODE","USERI1","USERI2","USERI3","USERI4","USERI5","USERR1","USERR2","USERR3","USERR4","USERR5","USRTIMER","VERSIONGUID","VISRETAIN","WORLDVIEW","XCLIPFRAME","XEDIT"]);var sf=/\\U\+([0-9A-Fa-f]{4})/g;function Dl(i){return!i||!i.includes("\\U+")?i:i.replace(sf,(e,t)=>String.fromCharCode(parseInt(t,16)))}var af=[{type:"invalid",hdr:"INVALI",description:"No DWG",version:0},{type:"r1.1",hdr:"MC0.0",description:"MicroCAD Release 1.1",version:0},{type:"r1.2",hdr:"AC1.2",description:"AutoCAD Release 1.2",version:0},{type:"r1.3",hdr:"AC1.3",description:"AutoCAD Release 1.3",version:1},{type:"r1.4",hdr:"AC1.40",description:"AutoCAD Release 1.4",version:2},{type:"r2.0b",hdr:"AC1.50",description:"AutoCAD 2.0 beta",version:3},{type:"r2.0",hdr:"AC1.50",description:"AutoCAD Release 2.0",version:4},{type:"r2.10",hdr:"AC2.10",description:"AutoCAD Release 2.10",version:5},{type:"r2.21",hdr:"AC2.21",description:"AutoCAD Release 2.21",version:6},{type:"r2.22",hdr:"AC2.22",description:"AutoCAD Release 2.22",version:7},{type:"r2.4",hdr:"AC1001",description:"AutoCAD Release 2.4",version:8},{type:"r2.5",hdr:"AC1002",description:"AutoCAD Release 2.5",version:9},{type:"r2.6",hdr:"AC1003",description:"AutoCAD Release 2.6",version:10},{type:"r9",hdr:"AC1004",description:"AutoCAD Release 9",version:11},{type:"r9c1",hdr:"AC1005",description:"AutoCAD Release 9c1",version:12},{type:"r10",hdr:"AC1006",description:"AutoCAD Release 10",version:13},{type:"r11b1",hdr:"AC1007",description:"AutoCAD 11 beta 1",version:14},{type:"r11b2",hdr:"AC1008",description:"AutoCAD 11 beta 2",version:15},{type:"r11",hdr:"AC1009",description:"AutoCAD Release 11/12 (LT R1/R2)",version:16},{type:"r13b1",hdr:"AC1010",description:"AutoCAD pre-R13 a",version:17},{type:"r13b2",hdr:"AC1011",description:"AutoCAD pre-R13 b",version:18},{type:"r13",hdr:"AC1012",description:"AutoCAD Release 13",version:19},{type:"r13c3",hdr:"AC1013",description:"AutoCAD Release 13c3",version:20},{type:"r14",hdr:"AC1014",description:"AutoCAD Release 14",version:21},{type:"r2000b",hdr:"AC1500",description:"AutoCAD 2000 beta",version:22},{type:"r2000",hdr:"AC1015",description:"AutoCAD Release 2000",version:23},{type:"r2000i",hdr:"AC1016",description:"AutoCAD Release 2000i",version:23},{type:"r2002",hdr:"AC1017",description:"AutoCAD Release 2002",version:23},{type:"r2004a",hdr:"AC402a",description:"AutoCAD 2004 alpha a",version:24},{type:"r2004b",hdr:"AC402b",description:"AutoCAD 2004 alpha b",version:24},{type:"r2004c",hdr:"AC1018",description:"AutoCAD 2004 beta",version:24},{type:"r2004",hdr:"AC1018",description:"AutoCAD Release 2004",version:25},{type:"r2007a",hdr:"AC701a",description:"AutoCAD 2007 alpha",version:26},{type:"r2007b",hdr:"AC1021",description:"AutoCAD 2007 beta",version:26},{type:"r2007",hdr:"AC1021",description:"AutoCAD Release 2007",version:27},{type:"r2010b",hdr:"AC1024",description:"AutoCAD 2010 beta",version:28},{type:"r2010",hdr:"AC1024",description:"AutoCAD Release 2010",version:29},{type:"r2013b",hdr:"AC1027",description:"AutoCAD 2013 beta",version:30},{type:"r2013",hdr:"AC1027",description:"AutoCAD Release 2013",version:31},{type:"r2018b",hdr:"AC1032",description:"AutoCAD 2018 beta",version:32},{type:"r2018",hdr:"AC1032",description:"AutoCAD Release 2018",version:33},{type:"r2022b",hdr:"AC103-4",description:"AutoCAD 2022 beta",version:36},{type:"r>2022",hdr:"",description:"AutoCAD Release >2022",version:0}],qa=(i=>(i[i.DWG_SUPERTYPE_ENTITY=0]="DWG_SUPERTYPE_ENTITY",i[i.DWG_SUPERTYPE_OBJECT=1]="DWG_SUPERTYPE_OBJECT",i))(qa||{}),Bl=(i=>(i[i.WRONGCRC=1]="WRONGCRC",i[i.NOTYETSUPPORTED=2]="NOTYETSUPPORTED",i[i.UNHANDLEDCLASS=4]="UNHANDLEDCLASS",i[i.INVALIDTYPE=8]="INVALIDTYPE",i[i.INVALIDHANDLE=16]="INVALIDHANDLE",i[i.INVALIDEED=32]="INVALIDEED",i[i.VALUEOUTOFBOUNDS=64]="VALUEOUTOFBOUNDS",i[i.CLASSESNOTFOUND=128]="CLASSESNOTFOUND",i[i.SECTIONNOTFOUND=256]="SECTIONNOTFOUND",i[i.PAGENOTFOUND=512]="PAGENOTFOUND",i[i.INTERNALERROR=1024]="INTERNALERROR",i[i.INVALIDDWG=2048]="INVALIDDWG",i[i.IOERROR=4096]="IOERROR",i[i.OUTOFMEM=8192]="OUTOFMEM",i))(Bl||{}),ee=(i=>(i[i.DWG_TYPE_UNUSED=0]="DWG_TYPE_UNUSED",i[i.DWG_TYPE_TEXT=1]="DWG_TYPE_TEXT",i[i.DWG_TYPE_ATTRIB=2]="DWG_TYPE_ATTRIB",i[i.DWG_TYPE_ATTDEF=3]="DWG_TYPE_ATTDEF",i[i.DWG_TYPE_BLOCK=4]="DWG_TYPE_BLOCK",i[i.DWG_TYPE_ENDBLK=5]="DWG_TYPE_ENDBLK",i[i.DWG_TYPE_SEQEND=6]="DWG_TYPE_SEQEND",i[i.DWG_TYPE_INSERT=7]="DWG_TYPE_INSERT",i[i.DWG_TYPE_MINSERT=8]="DWG_TYPE_MINSERT",i[i.DWG_TYPE_VERTEX_2D=10]="DWG_TYPE_VERTEX_2D",i[i.DWG_TYPE_VERTEX_3D=11]="DWG_TYPE_VERTEX_3D",i[i.DWG_TYPE_VERTEX_MESH=12]="DWG_TYPE_VERTEX_MESH",i[i.DWG_TYPE_VERTEX_PFACE=13]="DWG_TYPE_VERTEX_PFACE",i[i.DWG_TYPE_VERTEX_PFACE_FACE=14]="DWG_TYPE_VERTEX_PFACE_FACE",i[i.DWG_TYPE_POLYLINE_2D=15]="DWG_TYPE_POLYLINE_2D",i[i.DWG_TYPE_POLYLINE_3D=16]="DWG_TYPE_POLYLINE_3D",i[i.DWG_TYPE_ARC=17]="DWG_TYPE_ARC",i[i.DWG_TYPE_CIRCLE=18]="DWG_TYPE_CIRCLE",i[i.DWG_TYPE_LINE=19]="DWG_TYPE_LINE",i[i.DWG_TYPE_DIMENSION_ORDINATE=20]="DWG_TYPE_DIMENSION_ORDINATE",i[i.DWG_TYPE_DIMENSION_LINEAR=21]="DWG_TYPE_DIMENSION_LINEAR",i[i.DWG_TYPE_DIMENSION_ALIGNED=22]="DWG_TYPE_DIMENSION_ALIGNED",i[i.DWG_TYPE_DIMENSION_ANG3PT=23]="DWG_TYPE_DIMENSION_ANG3PT",i[i.DWG_TYPE_DIMENSION_ANG2LN=24]="DWG_TYPE_DIMENSION_ANG2LN",i[i.DWG_TYPE_DIMENSION_RADIUS=25]="DWG_TYPE_DIMENSION_RADIUS",i[i.DWG_TYPE_DIMENSION_DIAMETER=26]="DWG_TYPE_DIMENSION_DIAMETER",i[i.DWG_TYPE_POINT=27]="DWG_TYPE_POINT",i[i.DWG_TYPE_3DFACE=28]="DWG_TYPE_3DFACE",i[i.DWG_TYPE_POLYLINE_PFACE=29]="DWG_TYPE_POLYLINE_PFACE",i[i.DWG_TYPE_POLYLINE_MESH=30]="DWG_TYPE_POLYLINE_MESH",i[i.DWG_TYPE_SOLID=31]="DWG_TYPE_SOLID",i[i.DWG_TYPE_TRACE=32]="DWG_TYPE_TRACE",i[i.DWG_TYPE_SHAPE=33]="DWG_TYPE_SHAPE",i[i.DWG_TYPE_VIEWPORT=34]="DWG_TYPE_VIEWPORT",i[i.DWG_TYPE_ELLIPSE=35]="DWG_TYPE_ELLIPSE",i[i.DWG_TYPE_SPLINE=36]="DWG_TYPE_SPLINE",i[i.DWG_TYPE_REGION=37]="DWG_TYPE_REGION",i[i.DWG_TYPE_3DSOLID=38]="DWG_TYPE_3DSOLID",i[i.DWG_TYPE_BODY=39]="DWG_TYPE_BODY",i[i.DWG_TYPE_RAY=40]="DWG_TYPE_RAY",i[i.DWG_TYPE_XLINE=41]="DWG_TYPE_XLINE",i[i.DWG_TYPE_DICTIONARY=42]="DWG_TYPE_DICTIONARY",i[i.DWG_TYPE_OLEFRAME=43]="DWG_TYPE_OLEFRAME",i[i.DWG_TYPE_MTEXT=44]="DWG_TYPE_MTEXT",i[i.DWG_TYPE_LEADER=45]="DWG_TYPE_LEADER",i[i.DWG_TYPE_TOLERANCE=46]="DWG_TYPE_TOLERANCE",i[i.DWG_TYPE_MLINE=47]="DWG_TYPE_MLINE",i[i.DWG_TYPE_BLOCK_CONTROL=48]="DWG_TYPE_BLOCK_CONTROL",i[i.DWG_TYPE_BLOCK_HEADER=49]="DWG_TYPE_BLOCK_HEADER",i[i.DWG_TYPE_LAYER_CONTROL=50]="DWG_TYPE_LAYER_CONTROL",i[i.DWG_TYPE_LAYER=51]="DWG_TYPE_LAYER",i[i.DWG_TYPE_STYLE_CONTROL=52]="DWG_TYPE_STYLE_CONTROL",i[i.DWG_TYPE_STYLE=53]="DWG_TYPE_STYLE",i[i.DWG_TYPE_LTYPE_CONTROL=56]="DWG_TYPE_LTYPE_CONTROL",i[i.DWG_TYPE_LTYPE=57]="DWG_TYPE_LTYPE",i[i.DWG_TYPE_VIEW_CONTROL=60]="DWG_TYPE_VIEW_CONTROL",i[i.DWG_TYPE_VIEW=61]="DWG_TYPE_VIEW",i[i.DWG_TYPE_UCS_CONTROL=62]="DWG_TYPE_UCS_CONTROL",i[i.DWG_TYPE_UCS=63]="DWG_TYPE_UCS",i[i.DWG_TYPE_VPORT_CONTROL=64]="DWG_TYPE_VPORT_CONTROL",i[i.DWG_TYPE_VPORT=65]="DWG_TYPE_VPORT",i[i.DWG_TYPE_APPID_CONTROL=66]="DWG_TYPE_APPID_CONTROL",i[i.DWG_TYPE_APPID=67]="DWG_TYPE_APPID",i[i.DWG_TYPE_DIMSTYLE_CONTROL=68]="DWG_TYPE_DIMSTYLE_CONTROL",i[i.DWG_TYPE_DIMSTYLE=69]="DWG_TYPE_DIMSTYLE",i[i.DWG_TYPE_VX_CONTROL=70]="DWG_TYPE_VX_CONTROL",i[i.DWG_TYPE_VX_TABLE_RECORD=71]="DWG_TYPE_VX_TABLE_RECORD",i[i.DWG_TYPE_GROUP=72]="DWG_TYPE_GROUP",i[i.DWG_TYPE_MLINESTYLE=73]="DWG_TYPE_MLINESTYLE",i[i.DWG_TYPE_OLE2FRAME=74]="DWG_TYPE_OLE2FRAME",i[i.DWG_TYPE_DUMMY=75]="DWG_TYPE_DUMMY",i[i.DWG_TYPE_LONG_TRANSACTION=76]="DWG_TYPE_LONG_TRANSACTION",i[i.DWG_TYPE_LWPOLYLINE=77]="DWG_TYPE_LWPOLYLINE",i[i.DWG_TYPE_HATCH=78]="DWG_TYPE_HATCH",i[i.DWG_TYPE_XRECORD=79]="DWG_TYPE_XRECORD",i[i.DWG_TYPE_PLACEHOLDER=80]="DWG_TYPE_PLACEHOLDER",i[i.DWG_TYPE_VBA_PROJECT=81]="DWG_TYPE_VBA_PROJECT",i[i.DWG_TYPE_LAYOUT=82]="DWG_TYPE_LAYOUT",i[i.DWG_TYPE_PROXY_ENTITY=498]="DWG_TYPE_PROXY_ENTITY",i[i.DWG_TYPE_PROXY_OBJECT=499]="DWG_TYPE_PROXY_OBJECT",i[i.DWG_TYPE_ACDSRECORD=500]="DWG_TYPE_ACDSRECORD",i[i.DWG_TYPE_ACDSSCHEMA=501]="DWG_TYPE_ACDSSCHEMA",i[i.DWG_TYPE_ACMECOMMANDHISTORY=502]="DWG_TYPE_ACMECOMMANDHISTORY",i[i.DWG_TYPE_ACMESCOPE=503]="DWG_TYPE_ACMESCOPE",i[i.DWG_TYPE_ACMESTATEMGR=504]="DWG_TYPE_ACMESTATEMGR",i[i.DWG_TYPE_ACSH_BOOLEAN_CLASS=505]="DWG_TYPE_ACSH_BOOLEAN_CLASS",i[i.DWG_TYPE_ACSH_BOX_CLASS=506]="DWG_TYPE_ACSH_BOX_CLASS",i[i.DWG_TYPE_ACSH_BREP_CLASS=507]="DWG_TYPE_ACSH_BREP_CLASS",i[i.DWG_TYPE_ACSH_CHAMFER_CLASS=508]="DWG_TYPE_ACSH_CHAMFER_CLASS",i[i.DWG_TYPE_ACSH_CONE_CLASS=509]="DWG_TYPE_ACSH_CONE_CLASS",i[i.DWG_TYPE_ACSH_CYLINDER_CLASS=510]="DWG_TYPE_ACSH_CYLINDER_CLASS",i[i.DWG_TYPE_ACSH_EXTRUSION_CLASS=511]="DWG_TYPE_ACSH_EXTRUSION_CLASS",i[i.DWG_TYPE_ACSH_FILLET_CLASS=512]="DWG_TYPE_ACSH_FILLET_CLASS",i[i.DWG_TYPE_ACSH_HISTORY_CLASS=513]="DWG_TYPE_ACSH_HISTORY_CLASS",i[i.DWG_TYPE_ACSH_LOFT_CLASS=514]="DWG_TYPE_ACSH_LOFT_CLASS",i[i.DWG_TYPE_ACSH_PYRAMID_CLASS=515]="DWG_TYPE_ACSH_PYRAMID_CLASS",i[i.DWG_TYPE_ACSH_REVOLVE_CLASS=516]="DWG_TYPE_ACSH_REVOLVE_CLASS",i[i.DWG_TYPE_ACSH_SPHERE_CLASS=517]="DWG_TYPE_ACSH_SPHERE_CLASS",i[i.DWG_TYPE_ACSH_SWEEP_CLASS=518]="DWG_TYPE_ACSH_SWEEP_CLASS",i[i.DWG_TYPE_ACSH_TORUS_CLASS=519]="DWG_TYPE_ACSH_TORUS_CLASS",i[i.DWG_TYPE_ACSH_WEDGE_CLASS=520]="DWG_TYPE_ACSH_WEDGE_CLASS",i[i.DWG_TYPE_ALDIMOBJECTCONTEXTDATA=521]="DWG_TYPE_ALDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_ALIGNMENTPARAMETERENTITY=522]="DWG_TYPE_ALIGNMENTPARAMETERENTITY",i[i.DWG_TYPE_ANGDIMOBJECTCONTEXTDATA=523]="DWG_TYPE_ANGDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_ANNOTSCALEOBJECTCONTEXTDATA=524]="DWG_TYPE_ANNOTSCALEOBJECTCONTEXTDATA",i[i.DWG_TYPE_ARCALIGNEDTEXT=525]="DWG_TYPE_ARCALIGNEDTEXT",i[i.DWG_TYPE_ARC_DIMENSION=526]="DWG_TYPE_ARC_DIMENSION",i[i.DWG_TYPE_ASSOC2DCONSTRAINTGROUP=527]="DWG_TYPE_ASSOC2DCONSTRAINTGROUP",i[i.DWG_TYPE_ASSOC3POINTANGULARDIMACTIONBODY=528]="DWG_TYPE_ASSOC3POINTANGULARDIMACTIONBODY",i[i.DWG_TYPE_ASSOCACTION=529]="DWG_TYPE_ASSOCACTION",i[i.DWG_TYPE_ASSOCACTIONPARAM=530]="DWG_TYPE_ASSOCACTIONPARAM",i[i.DWG_TYPE_ASSOCALIGNEDDIMACTIONBODY=531]="DWG_TYPE_ASSOCALIGNEDDIMACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYACTIONBODY=532]="DWG_TYPE_ASSOCARRAYACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYMODIFYACTIONBODY=533]="DWG_TYPE_ASSOCARRAYMODIFYACTIONBODY",i[i.DWG_TYPE_ASSOCARRAYMODIFYPARAMETERS=534]="DWG_TYPE_ASSOCARRAYMODIFYPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYPATHPARAMETERS=535]="DWG_TYPE_ASSOCARRAYPATHPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYPOLARPARAMETERS=536]="DWG_TYPE_ASSOCARRAYPOLARPARAMETERS",i[i.DWG_TYPE_ASSOCARRAYRECTANGULARPARAMETERS=537]="DWG_TYPE_ASSOCARRAYRECTANGULARPARAMETERS",i[i.DWG_TYPE_ASSOCASMBODYACTIONPARAM=538]="DWG_TYPE_ASSOCASMBODYACTIONPARAM",i[i.DWG_TYPE_ASSOCBLENDSURFACEACTIONBODY=539]="DWG_TYPE_ASSOCBLENDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCCOMPOUNDACTIONPARAM=540]="DWG_TYPE_ASSOCCOMPOUNDACTIONPARAM",i[i.DWG_TYPE_ASSOCDEPENDENCY=541]="DWG_TYPE_ASSOCDEPENDENCY",i[i.DWG_TYPE_ASSOCDIMDEPENDENCYBODY=542]="DWG_TYPE_ASSOCDIMDEPENDENCYBODY",i[i.DWG_TYPE_ASSOCEDGEACTIONPARAM=543]="DWG_TYPE_ASSOCEDGEACTIONPARAM",i[i.DWG_TYPE_ASSOCEDGECHAMFERACTIONBODY=544]="DWG_TYPE_ASSOCEDGECHAMFERACTIONBODY",i[i.DWG_TYPE_ASSOCEDGEFILLETACTIONBODY=545]="DWG_TYPE_ASSOCEDGEFILLETACTIONBODY",i[i.DWG_TYPE_ASSOCEXTENDSURFACEACTIONBODY=546]="DWG_TYPE_ASSOCEXTENDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCEXTRUDEDSURFACEACTIONBODY=547]="DWG_TYPE_ASSOCEXTRUDEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCFACEACTIONPARAM=548]="DWG_TYPE_ASSOCFACEACTIONPARAM",i[i.DWG_TYPE_ASSOCFILLETSURFACEACTIONBODY=549]="DWG_TYPE_ASSOCFILLETSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCGEOMDEPENDENCY=550]="DWG_TYPE_ASSOCGEOMDEPENDENCY",i[i.DWG_TYPE_ASSOCLOFTEDSURFACEACTIONBODY=551]="DWG_TYPE_ASSOCLOFTEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCMLEADERACTIONBODY=552]="DWG_TYPE_ASSOCMLEADERACTIONBODY",i[i.DWG_TYPE_ASSOCNETWORK=553]="DWG_TYPE_ASSOCNETWORK",i[i.DWG_TYPE_ASSOCNETWORKSURFACEACTIONBODY=554]="DWG_TYPE_ASSOCNETWORKSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCOBJECTACTIONPARAM=555]="DWG_TYPE_ASSOCOBJECTACTIONPARAM",i[i.DWG_TYPE_ASSOCOFFSETSURFACEACTIONBODY=556]="DWG_TYPE_ASSOCOFFSETSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCORDINATEDIMACTIONBODY=557]="DWG_TYPE_ASSOCORDINATEDIMACTIONBODY",i[i.DWG_TYPE_ASSOCOSNAPPOINTREFACTIONPARAM=558]="DWG_TYPE_ASSOCOSNAPPOINTREFACTIONPARAM",i[i.DWG_TYPE_ASSOCPATCHSURFACEACTIONBODY=559]="DWG_TYPE_ASSOCPATCHSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCPATHACTIONPARAM=560]="DWG_TYPE_ASSOCPATHACTIONPARAM",i[i.DWG_TYPE_ASSOCPERSSUBENTMANAGER=561]="DWG_TYPE_ASSOCPERSSUBENTMANAGER",i[i.DWG_TYPE_ASSOCPLANESURFACEACTIONBODY=562]="DWG_TYPE_ASSOCPLANESURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCPOINTREFACTIONPARAM=563]="DWG_TYPE_ASSOCPOINTREFACTIONPARAM",i[i.DWG_TYPE_ASSOCRESTOREENTITYSTATEACTIONBODY=564]="DWG_TYPE_ASSOCRESTOREENTITYSTATEACTIONBODY",i[i.DWG_TYPE_ASSOCREVOLVEDSURFACEACTIONBODY=565]="DWG_TYPE_ASSOCREVOLVEDSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCROTATEDDIMACTIONBODY=566]="DWG_TYPE_ASSOCROTATEDDIMACTIONBODY",i[i.DWG_TYPE_ASSOCSWEPTSURFACEACTIONBODY=567]="DWG_TYPE_ASSOCSWEPTSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCTRIMSURFACEACTIONBODY=568]="DWG_TYPE_ASSOCTRIMSURFACEACTIONBODY",i[i.DWG_TYPE_ASSOCVALUEDEPENDENCY=569]="DWG_TYPE_ASSOCVALUEDEPENDENCY",i[i.DWG_TYPE_ASSOCVARIABLE=570]="DWG_TYPE_ASSOCVARIABLE",i[i.DWG_TYPE_ASSOCVERTEXACTIONPARAM=571]="DWG_TYPE_ASSOCVERTEXACTIONPARAM",i[i.DWG_TYPE_BASEPOINTPARAMETERENTITY=572]="DWG_TYPE_BASEPOINTPARAMETERENTITY",i[i.DWG_TYPE_BLKREFOBJECTCONTEXTDATA=573]="DWG_TYPE_BLKREFOBJECTCONTEXTDATA",i[i.DWG_TYPE_BLOCKALIGNEDCONSTRAINTPARAMETER=574]="DWG_TYPE_BLOCKALIGNEDCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKALIGNMENTGRIP=575]="DWG_TYPE_BLOCKALIGNMENTGRIP",i[i.DWG_TYPE_BLOCKALIGNMENTPARAMETER=576]="DWG_TYPE_BLOCKALIGNMENTPARAMETER",i[i.DWG_TYPE_BLOCKANGULARCONSTRAINTPARAMETER=577]="DWG_TYPE_BLOCKANGULARCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKARRAYACTION=578]="DWG_TYPE_BLOCKARRAYACTION",i[i.DWG_TYPE_BLOCKBASEPOINTPARAMETER=579]="DWG_TYPE_BLOCKBASEPOINTPARAMETER",i[i.DWG_TYPE_BLOCKDIAMETRICCONSTRAINTPARAMETER=580]="DWG_TYPE_BLOCKDIAMETRICCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKFLIPACTION=581]="DWG_TYPE_BLOCKFLIPACTION",i[i.DWG_TYPE_BLOCKFLIPGRIP=582]="DWG_TYPE_BLOCKFLIPGRIP",i[i.DWG_TYPE_BLOCKFLIPPARAMETER=583]="DWG_TYPE_BLOCKFLIPPARAMETER",i[i.DWG_TYPE_BLOCKGRIPLOCATIONCOMPONENT=584]="DWG_TYPE_BLOCKGRIPLOCATIONCOMPONENT",i[i.DWG_TYPE_BLOCKHORIZONTALCONSTRAINTPARAMETER=585]="DWG_TYPE_BLOCKHORIZONTALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKLINEARCONSTRAINTPARAMETER=586]="DWG_TYPE_BLOCKLINEARCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKLINEARGRIP=587]="DWG_TYPE_BLOCKLINEARGRIP",i[i.DWG_TYPE_BLOCKLINEARPARAMETER=588]="DWG_TYPE_BLOCKLINEARPARAMETER",i[i.DWG_TYPE_BLOCKLOOKUPACTION=589]="DWG_TYPE_BLOCKLOOKUPACTION",i[i.DWG_TYPE_BLOCKLOOKUPGRIP=590]="DWG_TYPE_BLOCKLOOKUPGRIP",i[i.DWG_TYPE_BLOCKLOOKUPPARAMETER=591]="DWG_TYPE_BLOCKLOOKUPPARAMETER",i[i.DWG_TYPE_BLOCKMOVEACTION=592]="DWG_TYPE_BLOCKMOVEACTION",i[i.DWG_TYPE_BLOCKPARAMDEPENDENCYBODY=593]="DWG_TYPE_BLOCKPARAMDEPENDENCYBODY",i[i.DWG_TYPE_BLOCKPOINTPARAMETER=594]="DWG_TYPE_BLOCKPOINTPARAMETER",i[i.DWG_TYPE_BLOCKPOLARGRIP=595]="DWG_TYPE_BLOCKPOLARGRIP",i[i.DWG_TYPE_BLOCKPOLARPARAMETER=596]="DWG_TYPE_BLOCKPOLARPARAMETER",i[i.DWG_TYPE_BLOCKPOLARSTRETCHACTION=597]="DWG_TYPE_BLOCKPOLARSTRETCHACTION",i[i.DWG_TYPE_BLOCKPROPERTIESTABLE=598]="DWG_TYPE_BLOCKPROPERTIESTABLE",i[i.DWG_TYPE_BLOCKPROPERTIESTABLEGRIP=599]="DWG_TYPE_BLOCKPROPERTIESTABLEGRIP",i[i.DWG_TYPE_BLOCKRADIALCONSTRAINTPARAMETER=600]="DWG_TYPE_BLOCKRADIALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKREPRESENTATION=601]="DWG_TYPE_BLOCKREPRESENTATION",i[i.DWG_TYPE_BLOCKROTATEACTION=602]="DWG_TYPE_BLOCKROTATEACTION",i[i.DWG_TYPE_BLOCKROTATIONGRIP=603]="DWG_TYPE_BLOCKROTATIONGRIP",i[i.DWG_TYPE_BLOCKROTATIONPARAMETER=604]="DWG_TYPE_BLOCKROTATIONPARAMETER",i[i.DWG_TYPE_BLOCKSCALEACTION=605]="DWG_TYPE_BLOCKSCALEACTION",i[i.DWG_TYPE_BLOCKSTRETCHACTION=606]="DWG_TYPE_BLOCKSTRETCHACTION",i[i.DWG_TYPE_BLOCKUSERPARAMETER=607]="DWG_TYPE_BLOCKUSERPARAMETER",i[i.DWG_TYPE_BLOCKVERTICALCONSTRAINTPARAMETER=608]="DWG_TYPE_BLOCKVERTICALCONSTRAINTPARAMETER",i[i.DWG_TYPE_BLOCKVISIBILITYGRIP=609]="DWG_TYPE_BLOCKVISIBILITYGRIP",i[i.DWG_TYPE_BLOCKVISIBILITYPARAMETER=610]="DWG_TYPE_BLOCKVISIBILITYPARAMETER",i[i.DWG_TYPE_BLOCKXYGRIP=611]="DWG_TYPE_BLOCKXYGRIP",i[i.DWG_TYPE_BLOCKXYPARAMETER=612]="DWG_TYPE_BLOCKXYPARAMETER",i[i.DWG_TYPE_CAMERA=613]="DWG_TYPE_CAMERA",i[i.DWG_TYPE_CELLSTYLEMAP=614]="DWG_TYPE_CELLSTYLEMAP",i[i.DWG_TYPE_CONTEXTDATAMANAGER=615]="DWG_TYPE_CONTEXTDATAMANAGER",i[i.DWG_TYPE_CSACDOCUMENTOPTIONS=616]="DWG_TYPE_CSACDOCUMENTOPTIONS",i[i.DWG_TYPE_CURVEPATH=617]="DWG_TYPE_CURVEPATH",i[i.DWG_TYPE_DATALINK=618]="DWG_TYPE_DATALINK",i[i.DWG_TYPE_DATATABLE=619]="DWG_TYPE_DATATABLE",i[i.DWG_TYPE_DBCOLOR=620]="DWG_TYPE_DBCOLOR",i[i.DWG_TYPE_DETAILVIEWSTYLE=621]="DWG_TYPE_DETAILVIEWSTYLE",i[i.DWG_TYPE_DGNDEFINITION=622]="DWG_TYPE_DGNDEFINITION",i[i.DWG_TYPE_DGNUNDERLAY=623]="DWG_TYPE_DGNUNDERLAY",i[i.DWG_TYPE_DICTIONARYVAR=624]="DWG_TYPE_DICTIONARYVAR",i[i.DWG_TYPE_DICTIONARYWDFLT=625]="DWG_TYPE_DICTIONARYWDFLT",i[i.DWG_TYPE_DIMASSOC=626]="DWG_TYPE_DIMASSOC",i[i.DWG_TYPE_DMDIMOBJECTCONTEXTDATA=627]="DWG_TYPE_DMDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_DWFDEFINITION=628]="DWG_TYPE_DWFDEFINITION",i[i.DWG_TYPE_DWFUNDERLAY=629]="DWG_TYPE_DWFUNDERLAY",i[i.DWG_TYPE_DYNAMICBLOCKPROXYNODE=630]="DWG_TYPE_DYNAMICBLOCKPROXYNODE",i[i.DWG_TYPE_DYNAMICBLOCKPURGEPREVENTER=631]="DWG_TYPE_DYNAMICBLOCKPURGEPREVENTER",i[i.DWG_TYPE_EVALUATION_GRAPH=632]="DWG_TYPE_EVALUATION_GRAPH",i[i.DWG_TYPE_EXTRUDEDSURFACE=633]="DWG_TYPE_EXTRUDEDSURFACE",i[i.DWG_TYPE_FCFOBJECTCONTEXTDATA=634]="DWG_TYPE_FCFOBJECTCONTEXTDATA",i[i.DWG_TYPE_FIELD=635]="DWG_TYPE_FIELD",i[i.DWG_TYPE_FIELDLIST=636]="DWG_TYPE_FIELDLIST",i[i.DWG_TYPE_FLIPPARAMETERENTITY=637]="DWG_TYPE_FLIPPARAMETERENTITY",i[i.DWG_TYPE_FLIPACTIONENTITY=638]="DWG_TYPE_FLIPACTIONENTITY",i[i.DWG_TYPE_GEODATA=639]="DWG_TYPE_GEODATA",i[i.DWG_TYPE_GEOMAPIMAGE=640]="DWG_TYPE_GEOMAPIMAGE",i[i.DWG_TYPE_GEOPOSITIONMARKER=641]="DWG_TYPE_GEOPOSITIONMARKER",i[i.DWG_TYPE_GRADIENT_BACKGROUND=642]="DWG_TYPE_GRADIENT_BACKGROUND",i[i.DWG_TYPE_GROUND_PLANE_BACKGROUND=643]="DWG_TYPE_GROUND_PLANE_BACKGROUND",i[i.DWG_TYPE_HELIX=644]="DWG_TYPE_HELIX",i[i.DWG_TYPE_IBL_BACKGROUND=645]="DWG_TYPE_IBL_BACKGROUND",i[i.DWG_TYPE_IDBUFFER=646]="DWG_TYPE_IDBUFFER",i[i.DWG_TYPE_IMAGE=647]="DWG_TYPE_IMAGE",i[i.DWG_TYPE_IMAGEDEF=648]="DWG_TYPE_IMAGEDEF",i[i.DWG_TYPE_IMAGEDEF_REACTOR=649]="DWG_TYPE_IMAGEDEF_REACTOR",i[i.DWG_TYPE_IMAGE_BACKGROUND=650]="DWG_TYPE_IMAGE_BACKGROUND",i[i.DWG_TYPE_INDEX=651]="DWG_TYPE_INDEX",i[i.DWG_TYPE_LARGE_RADIAL_DIMENSION=652]="DWG_TYPE_LARGE_RADIAL_DIMENSION",i[i.DWG_TYPE_LAYERFILTER=653]="DWG_TYPE_LAYERFILTER",i[i.DWG_TYPE_LAYER_INDEX=654]="DWG_TYPE_LAYER_INDEX",i[i.DWG_TYPE_LAYOUTPRINTCONFIG=655]="DWG_TYPE_LAYOUTPRINTCONFIG",i[i.DWG_TYPE_LEADEROBJECTCONTEXTDATA=656]="DWG_TYPE_LEADEROBJECTCONTEXTDATA",i[i.DWG_TYPE_LIGHT=657]="DWG_TYPE_LIGHT",i[i.DWG_TYPE_LIGHTLIST=658]="DWG_TYPE_LIGHTLIST",i[i.DWG_TYPE_LINEARPARAMETERENTITY=659]="DWG_TYPE_LINEARPARAMETERENTITY",i[i.DWG_TYPE_LOFTEDSURFACE=660]="DWG_TYPE_LOFTEDSURFACE",i[i.DWG_TYPE_MATERIAL=661]="DWG_TYPE_MATERIAL",i[i.DWG_TYPE_MENTALRAYRENDERSETTINGS=662]="DWG_TYPE_MENTALRAYRENDERSETTINGS",i[i.DWG_TYPE_MESH=663]="DWG_TYPE_MESH",i[i.DWG_TYPE_MLEADEROBJECTCONTEXTDATA=664]="DWG_TYPE_MLEADEROBJECTCONTEXTDATA",i[i.DWG_TYPE_MLEADERSTYLE=665]="DWG_TYPE_MLEADERSTYLE",i[i.DWG_TYPE_MOVEACTIONENTITY=666]="DWG_TYPE_MOVEACTIONENTITY",i[i.DWG_TYPE_MOTIONPATH=667]="DWG_TYPE_MOTIONPATH",i[i.DWG_TYPE_MPOLYGON=668]="DWG_TYPE_MPOLYGON",i[i.DWG_TYPE_MTEXTATTRIBUTEOBJECTCONTEXTDATA=669]="DWG_TYPE_MTEXTATTRIBUTEOBJECTCONTEXTDATA",i[i.DWG_TYPE_MTEXTOBJECTCONTEXTDATA=670]="DWG_TYPE_MTEXTOBJECTCONTEXTDATA",i[i.DWG_TYPE_MULTILEADER=671]="DWG_TYPE_MULTILEADER",i[i.DWG_TYPE_NAVISWORKSMODEL=672]="DWG_TYPE_NAVISWORKSMODEL",i[i.DWG_TYPE_NAVISWORKSMODELDEF=673]="DWG_TYPE_NAVISWORKSMODELDEF",i[i.DWG_TYPE_NPOCOLLECTION=674]="DWG_TYPE_NPOCOLLECTION",i[i.DWG_TYPE_NURBSURFACE=675]="DWG_TYPE_NURBSURFACE",i[i.DWG_TYPE_OBJECT_PTR=676]="DWG_TYPE_OBJECT_PTR",i[i.DWG_TYPE_ORDDIMOBJECTCONTEXTDATA=677]="DWG_TYPE_ORDDIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_PARTIAL_VIEWING_INDEX=678]="DWG_TYPE_PARTIAL_VIEWING_INDEX",i[i.DWG_TYPE_PDFDEFINITION=679]="DWG_TYPE_PDFDEFINITION",i[i.DWG_TYPE_PDFUNDERLAY=680]="DWG_TYPE_PDFUNDERLAY",i[i.DWG_TYPE_PERSUBENTMGR=681]="DWG_TYPE_PERSUBENTMGR",i[i.DWG_TYPE_PLANESURFACE=682]="DWG_TYPE_PLANESURFACE",i[i.DWG_TYPE_PLOTSETTINGS=683]="DWG_TYPE_PLOTSETTINGS",i[i.DWG_TYPE_POINTCLOUD=684]="DWG_TYPE_POINTCLOUD",i[i.DWG_TYPE_POINTCLOUDCOLORMAP=685]="DWG_TYPE_POINTCLOUDCOLORMAP",i[i.DWG_TYPE_POINTCLOUDDEF=686]="DWG_TYPE_POINTCLOUDDEF",i[i.DWG_TYPE_POINTCLOUDDEFEX=687]="DWG_TYPE_POINTCLOUDDEFEX",i[i.DWG_TYPE_POINTCLOUDDEF_REACTOR=688]="DWG_TYPE_POINTCLOUDDEF_REACTOR",i[i.DWG_TYPE_POINTCLOUDDEF_REACTOR_EX=689]="DWG_TYPE_POINTCLOUDDEF_REACTOR_EX",i[i.DWG_TYPE_POINTCLOUDEX=690]="DWG_TYPE_POINTCLOUDEX",i[i.DWG_TYPE_POINTPARAMETERENTITY=691]="DWG_TYPE_POINTPARAMETERENTITY",i[i.DWG_TYPE_POINTPATH=692]="DWG_TYPE_POINTPATH",i[i.DWG_TYPE_POLARGRIPENTITY=693]="DWG_TYPE_POLARGRIPENTITY",i[i.DWG_TYPE_RADIMLGOBJECTCONTEXTDATA=694]="DWG_TYPE_RADIMLGOBJECTCONTEXTDATA",i[i.DWG_TYPE_RADIMOBJECTCONTEXTDATA=695]="DWG_TYPE_RADIMOBJECTCONTEXTDATA",i[i.DWG_TYPE_RAPIDRTRENDERSETTINGS=696]="DWG_TYPE_RAPIDRTRENDERSETTINGS",i[i.DWG_TYPE_RASTERVARIABLES=697]="DWG_TYPE_RASTERVARIABLES",i[i.DWG_TYPE_RENDERENTRY=698]="DWG_TYPE_RENDERENTRY",i[i.DWG_TYPE_RENDERENVIRONMENT=699]="DWG_TYPE_RENDERENVIRONMENT",i[i.DWG_TYPE_RENDERGLOBAL=700]="DWG_TYPE_RENDERGLOBAL",i[i.DWG_TYPE_RENDERSETTINGS=701]="DWG_TYPE_RENDERSETTINGS",i[i.DWG_TYPE_REVOLVEDSURFACE=702]="DWG_TYPE_REVOLVEDSURFACE",i[i.DWG_TYPE_ROTATIONPARAMETERENTITY=703]="DWG_TYPE_ROTATIONPARAMETERENTITY",i[i.DWG_TYPE_ROTATEACTIONENTITY=704]="DWG_TYPE_ROTATEACTIONENTITY",i[i.DWG_TYPE_RTEXT=705]="DWG_TYPE_RTEXT",i[i.DWG_TYPE_SCALE=706]="DWG_TYPE_SCALE",i[i.DWG_TYPE_SCALEACTIONENTITY=707]="DWG_TYPE_SCALEACTIONENTITY",i[i.DWG_TYPE_SECTIONOBJECT=708]="DWG_TYPE_SECTIONOBJECT",i[i.DWG_TYPE_SECTIONVIEWSTYLE=709]="DWG_TYPE_SECTIONVIEWSTYLE",i[i.DWG_TYPE_SECTION_MANAGER=710]="DWG_TYPE_SECTION_MANAGER",i[i.DWG_TYPE_SECTION_SETTINGS=711]="DWG_TYPE_SECTION_SETTINGS",i[i.DWG_TYPE_SKYLIGHT_BACKGROUND=712]="DWG_TYPE_SKYLIGHT_BACKGROUND",i[i.DWG_TYPE_SOLID_BACKGROUND=713]="DWG_TYPE_SOLID_BACKGROUND",i[i.DWG_TYPE_SORTENTSTABLE=714]="DWG_TYPE_SORTENTSTABLE",i[i.DWG_TYPE_SPATIAL_FILTER=715]="DWG_TYPE_SPATIAL_FILTER",i[i.DWG_TYPE_SPATIAL_INDEX=716]="DWG_TYPE_SPATIAL_INDEX",i[i.DWG_TYPE_STRETCHACTIONENTITY=717]="DWG_TYPE_STRETCHACTIONENTITY",i[i.DWG_TYPE_SUN=718]="DWG_TYPE_SUN",i[i.DWG_TYPE_SUNSTUDY=719]="DWG_TYPE_SUNSTUDY",i[i.DWG_TYPE_SWEPTSURFACE=720]="DWG_TYPE_SWEPTSURFACE",i[i.DWG_TYPE_TABLE=721]="DWG_TYPE_TABLE",i[i.DWG_TYPE_TABLECONTENT=722]="DWG_TYPE_TABLECONTENT",i[i.DWG_TYPE_TABLEGEOMETRY=723]="DWG_TYPE_TABLEGEOMETRY",i[i.DWG_TYPE_TABLESTYLE=724]="DWG_TYPE_TABLESTYLE",i[i.DWG_TYPE_TEXTOBJECTCONTEXTDATA=725]="DWG_TYPE_TEXTOBJECTCONTEXTDATA",i[i.DWG_TYPE_TVDEVICEPROPERTIES=726]="DWG_TYPE_TVDEVICEPROPERTIES",i[i.DWG_TYPE_VISIBILITYGRIPENTITY=727]="DWG_TYPE_VISIBILITYGRIPENTITY",i[i.DWG_TYPE_VISIBILITYPARAMETERENTITY=728]="DWG_TYPE_VISIBILITYPARAMETERENTITY",i[i.DWG_TYPE_VISUALSTYLE=729]="DWG_TYPE_VISUALSTYLE",i[i.DWG_TYPE_WIPEOUT=730]="DWG_TYPE_WIPEOUT",i[i.DWG_TYPE_WIPEOUTVARIABLES=731]="DWG_TYPE_WIPEOUTVARIABLES",i[i.DWG_TYPE_XREFPANELOBJECT=732]="DWG_TYPE_XREFPANELOBJECT",i[i.DWG_TYPE_XYPARAMETERENTITY=733]="DWG_TYPE_XYPARAMETERENTITY",i[i.DWG_TYPE_BREAKDATA=734]="DWG_TYPE_BREAKDATA",i[i.DWG_TYPE_BREAKPOINTREF=735]="DWG_TYPE_BREAKPOINTREF",i[i.DWG_TYPE_FLIPGRIPENTITY=736]="DWG_TYPE_FLIPGRIPENTITY",i[i.DWG_TYPE_LINEARGRIPENTITY=737]="DWG_TYPE_LINEARGRIPENTITY",i[i.DWG_TYPE_ROTATIONGRIPENTITY=738]="DWG_TYPE_ROTATIONGRIPENTITY",i[i.DWG_TYPE_XYGRIPENTITY=739]="DWG_TYPE_XYGRIPENTITY",i[i.DWG_TYPE__3DLINE=740]="DWG_TYPE__3DLINE",i[i.DWG_TYPE_REPEAT=741]="DWG_TYPE_REPEAT",i[i.DWG_TYPE_ENDREP=742]="DWG_TYPE_ENDREP",i[i.DWG_TYPE_JUMP=743]="DWG_TYPE_JUMP",i[i.DWG_TYPE_LOAD=744]="DWG_TYPE_LOAD",i[i.DWG_TYPE_FREED=65533]="DWG_TYPE_FREED",i[i.DWG_TYPE_UNKNOWN_ENT=65534]="DWG_TYPE_UNKNOWN_ENT",i[i.DWG_TYPE_UNKNOWN_OBJ=65535]="DWG_TYPE_UNKNOWN_OBJ",i))(ee||{}),_v=Object.fromEntries(Object.entries(ee).map(([i,e])=>[e,i])),vs=(i=>(i[i.DWG=0]="DWG",i[i.DXF=1]="DXF",i))(vs||{}),vr=(i=>(i[i.Line=1]="Line",i[i.CircularArc=2]="CircularArc",i[i.EllipticArc=3]="EllipticArc",i[i.Spline=4]="Spline",i))(vr||{}),Ci=(i=>(i[i.ByLayer=192]="ByLayer",i[i.ByBlock=193]="ByBlock",i[i.Entities=194]="Entities",i[i.TrueColor=195]="TrueColor",i[i.ForegroundColor=197]="ForegroundColor",i[i.None=200]="None",i))(Ci||{}),Nl=192,Ol=193,of=194,za=195,Fl=200;function kl(i){if(i==null)return;let e=i.method,t=i.method!=null&&e!==0?e:i.rgb>>>24&255,n=i.index;if(i.rgb!=null&&t>=Nl&&t<=Fl&&(i.rgb>>>24&255)===t)return i.rgb>>0;if(t===Ci.ByLayer||n===256)return Nl<<24>>0;if(t===Ci.ByBlock||n===0)return Ol<<24>>0;if(t===Ci.None)return Fl<<24>>0;if(t===Ci.TrueColor){let r=i.rgb!=null?i.rgb&16777215:void 0;if(r!=null)return(of<<24|r)>>0}return t===Ci.ForegroundColor?(za<<24|7)>>0:t===Ci.Entities&&n>0&&n<256||n>0&&n<256?(za<<24|n&255)>>0:Ol<<24>>0}var lf="*MODEL_SPACE",cf="*PAPER_SPACE",Ka=i=>i&&i.toUpperCase()==lf,df=i=>i&&i.toUpperCase().startsWith(cf),fn=i=>i.toString(16).toUpperCase(),xr=i=>{let e=new Array(i.length);for(let t=0;t<i.length;t++)e[t]=i[t].toString(16).toUpperCase().padStart(2,"0");return e.join("")},uf=i=>{if(!i||i.length<98)return null;let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=a=>({x:e.getFloat64(a,!0),y:e.getFloat64(a+8,!0),z:e.getFloat64(a+16,!0)}),n=t(2),r=t(50);return[n.x,n.y,n.z,r.x,r.y,r.z].every(Number.isFinite)?{upperLeft:n,lowerRight:r}:null},Za=class{constructor(e){je(this,"libredwg"),je(this,"layers",new Map),je(this,"ltypes",new Map),je(this,"classes",[]),je(this,"unknownEntityCount"),this.libredwg=e,this.unknownEntityCount=0}prepare(e,t=!1){(t||this.layers.size==0)&&(this.layers.clear(),e.tables.LAYER.entries.forEach(n=>{this.layers.set(n.handle,n.name)})),(t||this.ltypes.size==0)&&(this.ltypes.clear(),e.tables.LTYPE.entries.forEach(n=>{this.ltypes.set(n.handle,n.name)})),this.classes=e.classes,this.unknownEntityCount=0}setClasses(e){this.classes=e}clear(){this.layers.clear(),this.ltypes.clear(),this.classes=[],this.unknownEntityCount=0}convert(e){let t=this.libredwg,n=t.dwg_object_to_entity(e),r=t.dwg_object_to_entity_tio(e);if(n&&r){let a=this.getCommonAttrs(n),l=t.dwg_object_get_fixedtype(e);if(l==ee.DWG_TYPE_3DFACE)return this.convert3dFace(r,a);if(l==ee.DWG_TYPE_3DSOLID)return this.convert3dSolid(r,a);if(l==ee.DWG_TYPE_ARC)return this.convertArc(r,a);if(l==ee.DWG_TYPE_ARCALIGNEDTEXT)return this.convertArcAlignedText(r,a);if(l==ee.DWG_TYPE_ATTDEF)return this.convertAttdef(r,a);if(l==ee.DWG_TYPE_CIRCLE)return this.convertCircle(r,a);if(l==ee.DWG_TYPE_DIMENSION_ALIGNED||l==ee.DWG_TYPE_DIMENSION_LINEAR)return this.convertAlignedDimension(r,a);if(l==ee.DWG_TYPE_DIMENSION_ANG3PT)return this.convert3PointAngularDimension(r,a);if(l==ee.DWG_TYPE_DIMENSION_ANG2LN)return this.convert2LineAngularDimension(r,a);if(l==ee.DWG_TYPE_DIMENSION_DIAMETER)return this.convertDiameterDimension(r,a);if(l==ee.DWG_TYPE_DIMENSION_ORDINATE)return this.convertOrdinateDimension(r,a);if(l==ee.DWG_TYPE_DIMENSION_RADIUS)return this.convertRadiusDimension(r,a);if(l==ee.DWG_TYPE_ELLIPSE)return this.convertEllise(r,a);if(l==ee.DWG_TYPE_HATCH)return this.convertHatch(r,a);if(l==ee.DWG_TYPE_IMAGE)return this.convertImage(r,a);if(l==ee.DWG_TYPE_INSERT)return this.convertInsert(r,a);if(l==ee.DWG_TYPE_LEADER)return this.convertLeader(r,a);if(l==ee.DWG_TYPE_LINE)return this.convertLine(r,a);if(l==ee.DWG_TYPE_LWPOLYLINE)return this.convertLWPolyline(r,a);if(l==ee.DWG_TYPE_MLINE)return this.convertMLine(r,a);if(l==ee.DWG_TYPE_MULTILEADER)return this.convertMultiLeader(r,a);if(l==ee.DWG_TYPE_MTEXT)return this.convertMText(r,a);if(l==ee.DWG_TYPE_OLE2FRAME)return this.convertOle2Frame(r,a);if(l==ee.DWG_TYPE_OLEFRAME)return this.convertOleFrame(r,a);if(l==ee.DWG_TYPE_POINT)return this.convertPoint(r,a);if(l==ee.DWG_TYPE_POLYLINE_2D)return this.convertPolyline2d(r,a,e);if(l==ee.DWG_TYPE_POLYLINE_3D)return this.convertPolyline3d(r,a,e);if(l==ee.DWG_TYPE_PROXY_ENTITY)return this.convertProxyEntity(r,a,e);if(l==ee.DWG_TYPE_RAY)return this.convertRay(r,a);if(l==ee.DWG_TYPE_SECTIONOBJECT)return this.convertSection(r,a);if(l==ee.DWG_TYPE_SHAPE)return this.convertShape(r,a);if(l==ee.DWG_TYPE_SOLID)return this.convertSolid(r,a);if(l==ee.DWG_TYPE_TRACE)return this.convertTrace(r,a);if(l==ee.DWG_TYPE_SPLINE)return this.convertSpline(r,a);if(l==ee.DWG_TYPE_TABLE)return this.convertTable(r,a);if(l==ee.DWG_TYPE_TEXT)return this.convertText(r,a);if(l==ee.DWG_TYPE_TOLERANCE)return this.convertTolerance(r,a);if(l==ee.DWG_TYPE_VIEWPORT)return this.convertViewport(r,a);if(l==ee.DWG_TYPE_WIPEOUT)return this.convertWipeout(r,a);if(l==ee.DWG_TYPE_XLINE)return this.convertXline(r,a);l===ee.DWG_TYPE_UNKNOWN_ENT&&this.unknownEntityCount++}}convert3dFace(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"corner1"),a=n.dwg_dynapi_entity_data(e,"corner2"),l=n.dwg_dynapi_entity_data(e,"corner3"),c=n.dwg_dynapi_entity_data(e,"corner4"),u=n.dwg_dynapi_entity_data(e,"invis_flags");return{type:"3DFACE",...t,corner1:r,corner2:a,corner3:l,corner4:c,flag:u}}convert3dSolid(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"version"),a=n.dwg_dynapi_entity_data(e,"acis_empty"),l=n.dwg_dynapi_entity_data(e,"acis_data"),c=n.dwg_dynapi_entity_data(e,"has_revision_guid"),u=n.dwg_dynapi_entity_data(e,"history_id"),f=n.dwg_ref_get_id(u),m={type:"3DSOLID",subclassMarker:"AcDb3dSolid",...t};if(r&&(m.version=r),m.satCache=a,l&&(m.data=l),c){let g=n.dwg_dynapi_entity_field_offset(e,"revision_guid");if(g>=0){let x=n.UTF8ToString(e+g,38);x&&(m.guid=x)}}return f&&(m.historyObjectSoftId=f),m}convertArc(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"radius"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion"),u=n.dwg_dynapi_entity_data(e,"start_angle"),f=n.dwg_dynapi_entity_data(e,"end_angle");return{type:"ARC",...t,thickness:l,center:r,radius:a,startAngle:u,endAngle:f,extrusionDirection:c}}convertArcAlignedText(e,t){let n=this.libredwg,r=(f,m=0)=>{let g=n.dwg_dynapi_entity_data(e,f);if(typeof g=="number"&&Number.isFinite(g))return g;if(typeof g=="string"&&g.trim()!==""){let x=Number(g);if(Number.isFinite(x))return x}return m},a=n.dwg_dynapi_entity_data(e,"center"),l=n.dwg_dynapi_entity_data(e,"extrusion"),c=n.dwg_dynapi_entity_data(e,"arc_handle"),u=r("xscale",1);return{type:"ARCALIGNEDTEXT",...t,text:n.dwg_dynapi_entity_data(e,"text_value")??"",textSize:r("text_size"),xScale:u>0?u:1,characterSpacing:r("char_spacing"),styleName:n.dwg_dynapi_entity_data(e,"style")??"",fontName:n.dwg_dynapi_entity_data(e,"font_name")??"",bigFontName:n.dwg_dynapi_entity_data(e,"bigfont_name")??"",offsetFromArc:r("offset_from_arc"),rightOffset:r("right_offset"),leftOffset:r("left_offset"),center:a??{x:0,y:0,z:0},radius:n.dwg_dynapi_entity_data(e,"radius")??0,startAngle:n.dwg_dynapi_entity_data(e,"start_angle")??0,endAngle:n.dwg_dynapi_entity_data(e,"end_angle")??0,extrusionDirection:l??{x:0,y:0,z:1},rawTextColor:n.dwg_dynapi_entity_data(e,"color")??256,characterSet:n.dwg_dynapi_entity_data(e,"character_set")??0,pitchAndFamily:n.dwg_dynapi_entity_data(e,"pitch_and_family")??0,isShx:(n.dwg_dynapi_entity_data(e,"is_shx")??0)!==0,isBold:(n.dwg_dynapi_entity_data(e,"is_bold")??0)!==0,isItalic:(n.dwg_dynapi_entity_data(e,"is_italic")??0)!==0,isUnderlined:(n.dwg_dynapi_entity_data(e,"is_underlined")??0)!==0,alignment:n.dwg_dynapi_entity_data(e,"alignment")??0,isReverse:(n.dwg_dynapi_entity_data(e,"is_reverse")??0)!==0,wizardFlag:n.dwg_dynapi_entity_data(e,"wizard_flag")??0,textPosition:n.dwg_dynapi_entity_data(e,"text_position")??1,textDirection:n.dwg_dynapi_entity_data(e,"text_direction")??1,arcHandle:c?n.dwg_ref_get_id(c)??"":""}}convertEmbeddedMText(e,t){let n=this.libredwg,r=n.dwg_dynapi_subclass_data(e,t,"attachment"),a=n.dwg_dynapi_subclass_data(e,t,"ins_pt"),l=n.dwg_dynapi_subclass_data(e,t,"x_axis_dir"),c=n.dwg_dynapi_subclass_data(e,t,"rect_height"),u=n.dwg_dynapi_subclass_data(e,t,"rect_width"),f=n.dwg_dynapi_subclass_data(e,t,"extents_height"),m=n.dwg_dynapi_subclass_data(e,t,"extents_width");return{insertionPoint:a,rectHeight:c,rectWidth:u,extentsHeight:f,extentsWidth:m,attachmentPoint:r,direction:l}}convertAttdef(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"default_value"),a=this.convertTextBase(e);a.text=r;let l=n.dwg_dynapi_entity_data(e,"prompt"),c=n.dwg_dynapi_entity_data(e,"tag"),u=n.dwg_dynapi_entity_data(e,"flags"),f=n.dwg_dynapi_entity_data(e,"field_length"),m=n.dwg_dynapi_entity_data(e,"lock_position_flag"),g=n.dwg_dynapi_entity_data(e,"keep_duplicate_records"),x=n.dwg_dynapi_entity_data(e,"is_really_locked"),E=n.dwg_dynapi_entity_data(e,"mtext_type"),S=n.dwg_dynapi_entity_data(e,"alignment_pt");return{type:"ATTDEF",...t,text:this.convertTextBase(e),prompt:l,tag:c,flags:u,fieldLength:f,lockPositionFlag:m>0,duplicateRecordCloningFlag:g>0,mtextFlag:E,isReallyLocked:x>0,alignmentPoint:S,annotationScale:1,attrTag:"",mtext:this.convertEmbeddedMText(e,"ATTDEF_mtext")}}convertAttrib(e,t){let n=this.libredwg,r=this.convertTextBase(e),a=n.dwg_dynapi_entity_data(e,"tag"),l=n.dwg_dynapi_entity_data(e,"flags"),c=n.dwg_dynapi_entity_data(e,"field_length"),u=n.dwg_dynapi_entity_data(e,"lock_position_flag"),f=n.dwg_dynapi_entity_data(e,"keep_duplicate_records"),m=n.dwg_dynapi_entity_data(e,"mtext_type"),g=n.dwg_dynapi_entity_data(e,"is_really_locked"),x=n.dwg_dynapi_entity_data(e,"alignment_pt");return{type:"ATTRIB",...t,text:r,tag:a,flags:l,fieldLength:c,lockPositionFlag:!!u,duplicateRecordCloningFlag:!!f,mtextFlag:m,isReallyLocked:!!g,numberOfSecondaryAttrs:0,secondaryAttrsHardId:"0",alignmentPoint:{...x,z:0},annotationScale:1,attrTag:"",mtext:this.convertEmbeddedMText(e,"ATTDEF_mtext")}}convertCircle(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"radius"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"CIRCLE",...t,thickness:l,center:r,radius:a,extrusionDirection:c}}convertAlignedDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"clone_ins_pt"),l=n.dwg_dynapi_entity_data(e,"xline1_pt"),c=n.dwg_dynapi_entity_data(e,"xline2_pt"),u=n.dwg_dynapi_entity_data(e,"ins_rotation"),f=n.dwg_dynapi_entity_data(e,"oblique_angle");return{subclassMarker:"AcDbAlignedDimension",...t,...r,insertionPoint:a,subDefinitionPoint1:l,subDefinitionPoint2:c,rotationAngle:u??0,obliqueAngle:f}}convert3PointAngularDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"xline1_pt"),l=n.dwg_dynapi_entity_data(e,"xline2_pt"),c=n.dwg_dynapi_entity_data(e,"center_pt"),u=n.dwg_dynapi_entity_data(e,"xline2end_pt");return{subclassMarker:"AcDb3PointAngularDimension",...t,...r,subDefinitionPoint1:a,subDefinitionPoint2:l,centerPoint:c,arcPoint:u}}convert2LineAngularDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"xline1start_pt"),l=n.dwg_dynapi_entity_data(e,"xline1end_pt"),c=n.dwg_dynapi_entity_data(e,"xline2start_pt"),u=n.dwg_dynapi_entity_data(e,"xline2end_pt"),f=n.dwg_dynapi_entity_data(e,"def_pt");return u&&(r.definitionPoint=u),{subclassMarker:"AcDb2LineAngularDimension",...t,...r,subDefinitionPoint1:a??l??f??u,subDefinitionPoint2:c??u??f??l,centerPoint:f??c??l??u,arcPoint:u??r.definitionPoint}}convertDiameterDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"first_arc_pt"),l=n.dwg_dynapi_entity_data(e,"leader_len");return{subclassMarker:"AcDbDiametricDimension",...t,...r,centerPoint:a,leaderLength:l}}convertOrdinateDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"feature_location_pt"),l=n.dwg_dynapi_entity_data(e,"leader_endpt");return{subclassMarker:"AcDbOrdinateDimension",...t,...r,subDefinitionPoint1:a,subDefinitionPoint2:l}}convertRadiusDimension(e,t){let n=this.libredwg,r=this.getDimensionCommonAttrs(e),a=n.dwg_dynapi_entity_data(e,"first_arc_pt"),l=n.dwg_dynapi_entity_data(e,"leader_len");return{subclassMarker:"AcDbRadialDimension",...t,...r,centerPoint:a,leaderLength:l}}convertEllise(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"sm_axis"),l=n.dwg_dynapi_entity_data(e,"extrusion"),c=n.dwg_dynapi_entity_data(e,"axis_ratio"),u=n.dwg_dynapi_entity_data(e,"start_angle"),f=n.dwg_dynapi_entity_data(e,"end_angle");return{type:"ELLIPSE",...t,center:r,majorAxisEndPoint:a,extrusionDirection:l,axisRatio:c,startAngle:u,endAngle:f}}convertHatch(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"extrusion"),a=n.dwg_dynapi_entity_data(e,"name"),l=n.dwg_dynapi_entity_data(e,"is_solid_fill"),c=n.dwg_dynapi_entity_data(e,"is_associative"),u=n.dwg_dynapi_entity_data(e,"num_paths"),f=n.dwg_dynapi_entity_data(e,"paths"),m=n.dwg_ptr_to_hatch_path_array(f,u),g=n.dwg_dynapi_entity_data(e,"style"),x=n.dwg_dynapi_entity_data(e,"pattern_type"),E=n.dwg_dynapi_entity_data(e,"angle"),S=n.dwg_dynapi_entity_data(e,"scale_spacing"),w=n.dwg_dynapi_entity_data(e,"num_deflines"),b=n.dwg_dynapi_entity_data(e,"deflines"),I=n.dwg_ptr_to_hatch_defline_array(b,w),L=n.dwg_dynapi_entity_data(e,"pixel_size"),P=n.dwg_dynapi_entity_data(e,"num_seeds"),C=n.dwg_dynapi_entity_data(e,"seeds"),F=n.dwg_ptr_to_point2d_array(C,P),q={...t,extrusionDirection:r,patternName:a,solidFill:l?Ya.SolidFill:Ya.PatternFill,associativity:c?Ha.Associative:Ha.NonAssociative,numberOfBoundaryPaths:u,boundaryPaths:this.convertHatchBoundaryPaths(m),hatchStyle:g,patternType:x,patternAngle:E,patternScale:S,numberOfDefinitionLines:w,definitionLines:I.map(ue=>({angle:ue.angle,base:ue.pt0,offset:ue.offset,numberOfDashLengths:ue.dashes.length,dashLengths:ue.dashes})),pixelSize:L,numberOfSeedPoints:P,seedPoints:F};if(n.dwg_dynapi_entity_data(e,"is_gradient_fill")>0){let ue=n.dwg_dynapi_entity_data(e,"gradient_name"),me=n.dwg_dynapi_entity_data(e,"gradient_angle"),te=n.dwg_dynapi_entity_data(e,"gradient_shift"),fe=n.dwg_dynapi_entity_data(e,"gradient_tint"),Me=n.dwg_dynapi_entity_data(e,"single_color_gradient"),ye=n.dwg_dynapi_entity_data(e,"colors"),_e=n.dwg_ptr_to_hatch_gradient_color_array(ye,Me==1?1:2);return{type:"HATCH",...q,gradientFlag:Ul.Gradient,gradientColorFlag:Me==1?Xa.OneColor:Xa.TwoColor,gradientName:ue,gradientRotation:me,gradientDefinition:te,colorTint:fe,gradientColors:_e}}else return{type:"HATCH",...q}}convertHatchBoundaryPaths(e){return e.filter(n=>n.num_segs_or_paths>0).map(n=>{let r={boundaryPathTypeFlag:n.flag};if(n.flag&2)return{...r,hasBulge:n.bulges_present,isClosed:n.closed,numberOfVertices:n.num_segs_or_paths,vertices:n.polyline_paths.map(a=>({x:a.point.x,y:a.point.y,bulge:a.bulge}))};{let a=n.segs.map(l=>{if(l.curve_type==vr.Line)return{type:yr.Line,start:l.first_endpoint,end:l.second_endpoint};if(l.curve_type==vr.CircularArc)return{type:yr.Circular,center:l.center,radius:l.radius,startAngle:l.start_angle,endAngle:l.end_angle,isCCW:l.is_ccw};if(l.curve_type==vr.EllipticArc)return{type:yr.Elliptic,center:l.center,end:l.endpoint,lengthOfMinorAxis:l.minor_major_ratio,startAngle:l.start_angle,endAngle:l.end_angle,isCCW:l.is_ccw};if(l.curve_type==vr.Spline)return{type:yr.Spline,degree:l.degree,isRational:l.is_rational,isPeriodic:l.is_periodic,numberOfKnots:l.num_knots,numberOfControlPoints:l.num_control_points,knots:l.knots,controlPoints:l.control_points,numberOfFitData:l.num_fitpts,fitDatum:l.fitpts,startTangent:l.start_tangent,endTangent:l.end_tangent}}).filter(l=>l!=null);return{...r,numberOfEdges:a.length,edges:a}}})}convertImage(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"class_version"),a=n.dwg_dynapi_entity_data(e,"pt0"),l=n.dwg_dynapi_entity_data(e,"uvec"),c=n.dwg_dynapi_entity_data(e,"vvec"),u=n.dwg_dynapi_entity_data(e,"image_size"),f=n.dwg_dynapi_entity_data(e,"display_props"),m=n.dwg_dynapi_entity_data(e,"clipping"),g=n.dwg_dynapi_entity_data(e,"brightness"),x=n.dwg_dynapi_entity_data(e,"contrast"),E=n.dwg_dynapi_entity_data(e,"fade"),S=n.dwg_dynapi_entity_data(e,"clip_mode"),w=n.dwg_dynapi_entity_data(e,"clip_boundary_type"),b=n.dwg_dynapi_entity_data(e,"num_clip_verts"),I=n.dwg_dynapi_entity_data(e,"clip_verts"),L=n.dwg_ptr_to_point3d_array(I,b),P=n.dwg_dynapi_entity_data(e,"imagedef"),C=n.dwg_ref_get_id(P)??"",F=n.dwg_dynapi_entity_data(e,"imagedefreactor"),q=n.dwg_ref_get_id(F)??"";return{type:"IMAGE",...t,version:r,position:a,uPixel:l,vPixel:c,imageSize:u,imageDefHandle:C,flags:f,clipping:m,brightness:g,contrast:x,fade:E,imageDefReactorHandle:q,clippingBoundaryType:w,countBoundaryPoints:b,clippingBoundaryPath:L,clipMode:S}}convertInsert(e,t){let n=this.libredwg,r="",a=n.dwg_dynapi_entity_data(e,"block_header");if(a){let b=n.dwg_ref_get_object(a);if(b){let I=n.dwg_object_to_object_tio(b);I&&(r=n.dwg_entity_block_header_get_block(I).name)}}r||(r=n.dwg_dynapi_entity_data(e,"block_name"));let l=n.dwg_dynapi_entity_data(e,"ins_pt"),c=n.dwg_dynapi_entity_data(e,"scale"),u=n.dwg_dynapi_entity_data(e,"rotation"),f=n.dwg_dynapi_entity_data(e,"num_cols"),m=n.dwg_dynapi_entity_data(e,"num_rows"),g=n.dwg_dynapi_entity_data(e,"col_spacing"),x=n.dwg_dynapi_entity_data(e,"row_spacing"),E=n.dwg_dynapi_entity_data(e,"extrusion"),S=n.dwg_entity_insert_get_attribs(e),w=[];return S.forEach(b=>{let I=n.dwg_object_to_entity(b),L=n.dwg_object_to_entity_tio(b);if(I&&L){let P=this.getCommonAttrs(I);n.dwg_object_get_fixedtype(b)==ee.DWG_TYPE_ATTRIB&&w.push(this.convertAttrib(L,P))}}),{type:"INSERT",...t,name:r,insertionPoint:l,xScale:c?c.x:1,yScale:c?c.y:1,zScale:c?c.z:1,rotation:u,columnCount:f,rowCount:m,columnSpacing:g,rowSpacing:x,extrusionDirection:E,attribs:w}}convertLeader(e,t){let n=this.libredwg,r=n.dwg_entity_mtext_get_style_name(e),a=n.dwg_dynapi_entity_data(e,"arrowhead_type"),l=n.dwg_dynapi_entity_data(e,"path_type"),c=n.dwg_dynapi_entity_data(e,"annot_type"),u=n.dwg_dynapi_entity_data(e,"hookline_dir"),f=n.dwg_dynapi_entity_data(e,"hookline_on"),m=n.dwg_dynapi_entity_data(e,"box_height"),g=n.dwg_dynapi_entity_data(e,"box_width"),x=n.dwg_dynapi_entity_data(e,"num_points"),E=n.dwg_dynapi_entity_data(e,"points"),S=x>0?n.dwg_ptr_to_point3d_array(E,x):[],w=n.dwg_dynapi_entity_data(e,"byblock_color"),b=n.dwg_dynapi_entity_data(e,"extrusion"),I=n.dwg_dynapi_entity_data(e,"x_direction"),L=n.dwg_dynapi_entity_data(e,"inspt_offset"),P=n.dwg_dynapi_entity_data(e,"endptproj");return{type:"LEADER",...t,styleName:r,isArrowheadEnabled:a>0,isSpline:l>0,leaderCreationFlag:c,isHooklineSameDirection:u>0,isHooklineExists:f>0,textHeight:m,textWidth:g,numberOfVertices:x,vertices:S,byBlockColor:w,normal:b,horizontalDirection:I,offsetFromBlock:L,offsetFromAnnotation:P}}convertLine(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"start"),a=n.dwg_dynapi_entity_data(e,"end"),l=n.dwg_dynapi_entity_data(e,"thickness"),c=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"LINE",...t,thickness:l,startPoint:r,endPoint:a,extrusionDirection:c}}convertLWPolyline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"num_points"),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"const_width"),c=n.dwg_dynapi_entity_data(e,"elevation"),u=n.dwg_dynapi_entity_data(e,"thickness"),f=n.dwg_dynapi_entity_data(e,"extrusion"),m=[],g=n.dwg_dynapi_entity_data(e,"num_points"),x=n.dwg_dynapi_entity_data(e,"points"),E=n.dwg_ptr_to_point2d_array(x,g),S=n.dwg_dynapi_entity_data(e,"num_bulges"),w=n.dwg_dynapi_entity_data(e,"bulges"),b=n.dwg_ptr_to_double_array(w,S),I=n.dwg_dynapi_entity_data(e,"num_widths")??0,L=n.dwg_dynapi_entity_data(e,"widths"),P=I>0&&L?n.dwg_ptr_to_double_array(L,I*2):[];return E.forEach((C,F)=>{let q={id:F,x:C.x,y:C.y,bulge:b.length>F?b[F]:0};F<I&&P.length>=(F+1)*2&&(q.startWidth=P[F*2],q.endWidth=P[F*2+1]),m.push(q)}),{type:"LWPOLYLINE",...t,numberOfVertices:r,flag:a,constantWidth:l,elevation:c,thickness:u,extrusionDirection:f,vertices:m}}convertMLine(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"scale"),a=n.dwg_dynapi_entity_data(e,"flags"),l=n.dwg_dynapi_entity_data(e,"justification"),c=n.dwg_dynapi_entity_data(e,"base_point"),u=n.dwg_dynapi_entity_data(e,"extrusion"),f=n.dwg_dynapi_entity_data(e,"num_lines"),m=n.dwg_dynapi_entity_data(e,"num_verts"),g=n.dwg_dynapi_entity_data(e,"verts"),x=n.dwg_ptr_to_mline_vertex_array(g,m),E=[];return x.forEach(S=>{E.push({vertex:S.vertex,vertexDirection:S.vertex_direction,miterDirection:S.miter_direction,numberOfLines:S.num_lines,lines:S.lines.map(w=>({numberOfSegmentParams:w.num_segparms,segmentParams:w.segparms,numberOfAreaFillParams:w.num_areafillparms,areaFillParams:w.areafillparms}))})}),{type:"MLINE",...t,scale:r,flags:a,justification:l,startPoint:c,extrusionDirection:u,numberOfLines:f,numberOfVertices:m,vertices:E,mlineStyle:""}}convertMultiLeader(e,t){let n=this.libredwg,r=_=>n.dwg_dynapi_entity_data(e,_),a=(_,ae,oe)=>n.dwg_dynapi_subclass_data(_,ae,oe),l=_=>n.dwg_ref_get_id(_),c=_=>_>0,u=_=>_!=null?kl(_):void 0,f=r("class_version"),m=l(r("mleaderstyle")),g=r("flags"),x=r("type"),E=u(r("line_color")),S=l(r("line_ltype")),w=r("line_linewt"),b=c(r("has_landing")),I=c(r("has_dogleg")),L=r("landing_dist"),P=l(r("arrow_handle")),C=r("arrow_size"),F=r("style_content"),q=l(r("text_style")),J=r("text_left"),ue=r("text_right"),me=r("text_angletype"),te=r("text_alignment"),fe=u(r("text_color")),Me=c(r("has_text_frame")),ye=l(r("block_style")),_e=u(r("block_color")),ve=r("block_scale"),Ve=r("block_rotation"),ke=r("style_attachment"),De=c(r("is_annotative")),Ye=c(r("is_neg_textdir")),Je=r("ipe_alignment"),it=r("justification"),an=r("attach_dir"),ai=r("attach_bottom"),He=r("attach_top"),he=r("scale_factor"),Xe=r("num_arrowheads"),Fe=r("arrowheads"),Ut=n.dwg_dynapi_subclass_size("LEADER_ArrowHead"),Bt=[];for(let _=0;_<Xe;_++){let ae=Fe+_*Ut;Bt.push({index:a(ae,"LEADER_ArrowHead","is_default"),handle:l(a(ae,"LEADER_ArrowHead","arrowhead"))??""})}let kt=r("num_blocklabels"),le=r("blocklabels"),ze=n.dwg_dynapi_subclass_size("LEADER_BlockLabel"),Ge=[];for(let _=0;_<kt;_++){let ae=le+_*ze;Ge.push({id:l(a(ae,"LEADER_BlockLabel","attdef")),index:a(ae,"LEADER_BlockLabel","ui_index"),width:a(ae,"LEADER_BlockLabel","width"),text:a(ae,"LEADER_BlockLabel","label_text")})}let we=e+n.dwg_dynapi_entity_field_offset(e,"ctx"),Ae=we+n.dwg_dynapi_subclass_field_offset("MLEADER_AnnotContext","content"),on=a(we,"MLEADER_AnnotContext","scale_factor"),Ct=a(we,"MLEADER_AnnotContext","content_base"),ut=a(we,"MLEADER_AnnotContext","landing_gap"),zt=a(we,"MLEADER_AnnotContext","attach_dir"),Ue=a(we,"MLEADER_AnnotContext","text_height"),Lt=a(we,"MLEADER_AnnotContext","arrow_size"),tt=a(we,"MLEADER_AnnotContext","text_left"),Qe=a(we,"MLEADER_AnnotContext","text_right"),vi=a(we,"MLEADER_AnnotContext","text_angletype"),oi=a(we,"MLEADER_AnnotContext","text_alignment"),li=c(a(we,"MLEADER_AnnotContext","has_content_txt")),In=c(a(we,"MLEADER_AnnotContext","has_content_blk")),xi=a(we,"MLEADER_AnnotContext","base"),gn=a(we,"MLEADER_AnnotContext","base_dir"),ln=a(we,"MLEADER_AnnotContext","base_vert"),Ie=c(a(we,"MLEADER_AnnotContext","is_normal_reversed")),wn,yn,Vt,Pn,Rn,pt,Ln,cn,Yt,Ht,Dn,mt,y,A,Z,G,U,k,O,W,Y;if(li){let _=a(Ae,"MLEADER_Content_MText","alignment");_!=null&&_!==0&&(it=_),yn=a(Ae,"MLEADER_Content_MText","normal"),Ln=a(Ae,"MLEADER_Content_MText","location"),Vt=a(Ae,"MLEADER_Content_MText","rotation"),cn=a(Ae,"MLEADER_Content_MText","direction"),Pn=a(Ae,"MLEADER_Content_MText","width"),Rn=a(Ae,"MLEADER_Content_MText","line_spacing_factor"),pt=a(Ae,"MLEADER_Content_MText","line_spacing_style"),wn=a(Ae,"MLEADER_Content_MText","flow"),Yt=u(a(Ae,"MLEADER_Content_MText","bg_color")),Ht=a(Ae,"MLEADER_Content_MText","bg_scale"),Dn=a(Ae,"MLEADER_Content_MText","bg_transparency"),y=c(a(Ae,"MLEADER_Content_MText","is_bg_fill")),mt=c(a(Ae,"MLEADER_Content_MText","is_bg_mask_fill")),A=a(Ae,"MLEADER_Content_MText","col_type"),Z=c(a(Ae,"MLEADER_Content_MText","is_height_auto")),G=a(Ae,"MLEADER_Content_MText","col_width"),U=a(Ae,"MLEADER_Content_MText","col_gutter"),k=c(a(Ae,"MLEADER_Content_MText","is_col_flow_reversed"));let ae=a(Ae,"MLEADER_Content_MText","num_col_sizes"),oe=a(Ae,"MLEADER_Content_MText","col_sizes");ae>0&&(O=n.dwg_ptr_to_double_array(oe,ae)[0]),W=c(a(Ae,"MLEADER_Content_MText","word_break")),Y=a(Ae,"MLEADER_Content_MText","default_text")}let V;if(In){let _=a(Ae,"MLEADER_Content_Block","transform");V={blockContentId:l(a(Ae,"MLEADER_Content_Block","block_table")),normal:a(Ae,"MLEADER_Content_Block","normal"),position:a(Ae,"MLEADER_Content_Block","location"),scale:a(Ae,"MLEADER_Content_Block","scale"),rotation:a(Ae,"MLEADER_Content_Block","rotation"),color:u(a(Ae,"MLEADER_Content_Block","color")),transformationMatrix:_?n.dwg_ptr_to_double_array(_,16):void 0}}let Q=a(we,"MLEADER_AnnotContext","num_leaders"),z=a(we,"MLEADER_AnnotContext","leaders"),X=n.dwg_dynapi_subclass_size("LEADER_Node"),re=n.dwg_dynapi_subclass_size("LEADER_Line"),$=n.dwg_dynapi_subclass_size("LEADER_Break"),j=[];for(let _=0;_<Q;_++){let ae=z+_*X,oe=c(a(ae,"LEADER_Node","has_lastleaderlinepoint")),Re=c(a(ae,"LEADER_Node","has_dogleg")),Ne=a(ae,"LEADER_Node","num_breaks"),Et=a(ae,"LEADER_Node","breaks"),We=[];for(let st=0;st<Ne;st++){let Le=Et+st*$;We.push({start:a(Le,"LEADER_Break","start"),end:a(Le,"LEADER_Break","end")})}let rt=a(ae,"LEADER_Node","num_lines"),_t=a(ae,"LEADER_Node","lines"),gt=[];for(let st=0;st<rt;st++){let Le=_t+st*re,lt=a(Le,"LEADER_Line","num_points"),Xt=a(Le,"LEADER_Line","points"),Nn=lt>0?n.dwg_ptr_to_point3d_array(Xt,lt):[],Gt=a(Le,"LEADER_Line","num_breaks"),xe=a(Le,"LEADER_Line","breaks"),vn=[];for(let $e=0;$e<Gt;$e++){let ct=xe+$e*$;vn.push({start:a(ct,"LEADER_Break","start"),end:a(ct,"LEADER_Break","end")})}gt.push({vertices:Nn,leaderLineIndex:a(Le,"LEADER_Line","line_index"),breaks:vn.length>0?vn:void 0})}j.push({lastLeaderLinePoint:oe?a(ae,"LEADER_Node","lastleaderlinepoint"):void 0,lastLeaderLinePointSet:oe,doglegVector:Re?a(ae,"LEADER_Node","dogleg_vector"):void 0,doglegVectorSet:Re,doglegLength:a(ae,"LEADER_Node","dogleg_length"),breaks:We.length>0?We:void 0,leaderBranchIndex:a(ae,"LEADER_Node","branch_index"),leaderLines:gt})}return{type:"MULTILEADER",...t,subclassMarker:"AcDbMLeader",version:f,leaderStyleId:m,propertyOverrideFlag:g,leaderLineType:x,leaderLineColor:E,leaderLineTypeId:S,leaderLineWeight:w,landingEnabled:b,doglegEnabled:I,doglegLength:L,arrowheadId:P,arrowheadSize:C||Lt,contentType:F,textStyleId:q,textLeftAttachmentType:J||tt,textRightAttachmentType:ue||Qe,textAngleType:me||vi,textAlignmentType:te||oi,textColor:fe,textFrameEnabled:Me,landingGap:ut,textAttachment:zt,textFlowDirection:wn,blockContentId:ye,blockContentColor:_e,blockContentScale:ve,blockContentRotation:Ve,blockContentConnectionType:ke,annotativeScaleEnabled:De,arrowheadOverrides:Bt.length>0?Bt:void 0,blockAttributes:Ge.length>0?Ge:void 0,textDirectionNegative:Ye,textAlignInIPE:Je,textAttachmentPoint:it,textAttachmentDirection:an,bottomTextAttachmentDirection:ai,topTextAttachmentDirection:He,contentScale:he||on,contentBasePosition:Ct,normal:yn,textHeight:Ue,textRotation:Vt,textWidth:Pn,textLineSpacingFactor:Rn,textLineSpacingStyle:pt,textAnchor:Ln,textDirection:cn,textBackgroundColor:Yt,textBackgroundScaleFactor:Ht,textBackgroundTransparency:Dn,textBackgroundColorOn:mt,textFillOn:y,textColumnType:A,textUseAutoHeight:Z,textColumnWidth:G,textColumnGutterWidth:U,textColumnFlowReversed:k,textColumnHeight:O,textUseWordBreak:W,textContent:Y,hasMText:li,hasBlock:In,blockContent:V,planeOrigin:xi,planeXAxisDirection:gn,planeYAxisDirection:ln,planeNormalReversed:Ie,leaderSections:j.length>0?j:void 0}}convertOle2Frame(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"oleversion"),a=n.dwg_dynapi_entity_data(e,"oleclient"),l=n.dwg_dynapi_entity_data(e,"data_size"),c=n.dwg_dynapi_entity_data(e,"pt1"),u=n.dwg_dynapi_entity_data(e,"pt2"),f=n.dwg_dynapi_entity_data(e,"lock_aspect"),m=n.dwg_dynapi_entity_data(e,"type"),g=n.dwg_dynapi_entity_data(e,"mode"),x=n.dwg_entity_ole2frame_get_data(e),E=x?xr(x):"";if(x){let S=uf(x);S&&(c=S.upperLeft,u=S.lowerRight)}return{type:"OLE2FRAME",...t,oleVersion:r,oleClient:a,dataSize:l,leftUpPoint:c,rightDownPoint:u,lockAspect:f,oleObjectType:m,tileModeDescriptor:g,binaryData:E}}convertOleFrame(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"flag"),a=n.dwg_dynapi_entity_data(e,"mode"),l=n.dwg_dynapi_entity_data(e,"data_size"),c=n.dwg_entity_oleframe_get_data(e),u=c?xr(c):"";return{type:"OLEFRAME",...t,flag:r,mode:a,dataSize:l,binaryData:u}}convertMText(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"text_height"),l=n.dwg_dynapi_entity_data(e,"rect_height"),c=n.dwg_dynapi_entity_data(e,"rect_width"),u=n.dwg_dynapi_entity_data(e,"extents_width"),f=n.dwg_dynapi_entity_data(e,"extents_height"),m=n.dwg_dynapi_entity_data(e,"attachment"),g=n.dwg_dynapi_entity_data(e,"flow_dir"),x=n.dwg_dynapi_entity_data(e,"text"),E=n.dwg_entity_mtext_get_style_name(e),S=n.dwg_dynapi_entity_data(e,"extrusion"),w=n.dwg_dynapi_entity_data(e,"x_axis_dir"),b=n.dwg_dynapi_entity_data(e,"linespace_style"),I=n.dwg_dynapi_entity_data(e,"linespace_factor"),L=n.dwg_dynapi_entity_data(e,"bg_fill_flag"),P=n.dwg_dynapi_entity_data(e,"bg_fill_scale"),C=n.dwg_dynapi_entity_data(e,"bg_fill_color"),F=n.dwg_dynapi_entity_data(e,"bg_fill_trans"),q=n.dwg_dynapi_entity_data(e,"column_type"),J=n.dwg_dynapi_entity_data(e,"flow_reversed"),ue=n.dwg_dynapi_entity_data(e,"auto_height"),me=n.dwg_dynapi_entity_data(e,"column_width"),te=n.dwg_dynapi_entity_data(e,"gutter"),fe=n.dwg_dynapi_entity_data(e,"num_column_heights"),Me=n.dwg_dynapi_entity_data(e,"column_heights"),ye=n.dwg_ptr_to_double_array(Me,fe);return{type:"MTEXT",...t,insertionPoint:r,textHeight:a,rectHeight:l,rectWidth:c,extentsHeight:f,extentsWidth:u,attachmentPoint:m,drawingDirection:g,text:x,styleName:E,extrusionDirection:S,direction:w,rotation:0,lineSpacingStyle:b,lineSpacing:I,backgroundFill:L,fillBoxScale:P,backgroundFillColor:C.rgb,backgroundFillTransparency:F,columnType:q,columnFlowReversed:J,columnAutoHeight:ue,columnWidth:me,columnGutter:te,columnHeightCount:fe,columnHeights:ye}}convertPoint(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"x"),a=n.dwg_dynapi_entity_data(e,"y"),l=n.dwg_dynapi_entity_data(e,"z"),c=n.dwg_dynapi_entity_data(e,"thickness"),u=n.dwg_dynapi_entity_data(e,"extrusion"),f=n.dwg_dynapi_entity_data(e,"x_ang");return{type:"POINT",...t,position:{x:r,y:a,z:l},thickness:c,extrusionDirection:u,angle:f}}convertPolyline2d(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"flag"),l=r.dwg_dynapi_entity_data(e,"curve_type"),c=r.dwg_dynapi_entity_data(e,"start_width"),u=r.dwg_dynapi_entity_data(e,"end_width"),f=r.dwg_dynapi_entity_data(e,"elevation"),m=r.dwg_dynapi_entity_data(e,"thickness"),g=r.dwg_dynapi_entity_data(e,"extrusion"),x=r.dwg_entity_polyline_2d_get_vertices(n)??[];return{type:"POLYLINE2D",...t,flag:a,smoothType:l,startWidth:c,endWidth:u,elevation:f,thickness:m,extrusionDirection:g,vertices:x.map(E=>({x:E.point.x,y:E.point.y,z:E.point.z,startWidth:E.start_width,endWidth:E.end_width,bulge:E.bulge,flag:E.flag,tangentDirection:E.tangent_dir})),meshMVertexCount:0,meshNVertexCount:0,surfaceMDensity:0,surfaceNDensity:0}}convertPolyline3d(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"flag"),l=r.dwg_dynapi_entity_data(e,"curve_type"),c=r.dwg_dynapi_entity_data(e,"start_width"),u=r.dwg_dynapi_entity_data(e,"end_width"),f=r.dwg_dynapi_entity_data(e,"extrusion"),m=r.dwg_entity_polyline_3d_get_vertices(n)??[];return{type:"POLYLINE3D",...t,flag:a,smoothType:l,startWidth:c,endWidth:u,extrusionDirection:f,vertices:m.map(g=>({x:g.point.x,y:g.point.y,z:g.point.z,flag:g.flag}))}}convertProxyEntity(e,t,n){let r=this.libredwg,a=r.dwg_dynapi_entity_data(e,"proxy_id"),l=r.dwg_dynapi_entity_data(e,"class_id"),c=r.dwg_dynapi_entity_data(e,"data_numbits"),u=r.dwg_dynapi_entity_data(e,"version"),f=r.dwg_dynapi_entity_data(e,"from_dxf"),m=r.dwg_dynapi_entity_data(e,"num_objids"),g=r.dwg_entity_get_preview(n),x=g?.length??0,E=r.dwg_entity_proxy_entity_get_entity_data(e),S=g?xr(g):void 0,w=E?xr(E):void 0,b;if(m>0){let P=r.dwg_dynapi_entity_data(e,"objids");P&&(b=r.dwg_ptr_to_object_ref_array(P,m).map(F=>fn(F.absolute_ref)))}let I=this.getOriginalDxfName(l),L={type:"ACAD_PROXY_ENTITY",subclassMarker:"AcDbProxyEntity",...t,proxyEntityClassId:a||498,applicationEntityClassId:l};return I&&(L.originalDxfName=I),x>0&&(L.graphicsDataSize=x),S&&(L.graphicsData=S),c>0&&(L.entityDataSize=c),w&&(L.entityData=w),b&&b.length>0&&(L.linkedObjectIds=b),u&&(L.objectDrawingFormat=u),(f===0||f===1)&&(L.originalDataFormat=f),L}getOriginalDxfName(e){if(this.classes.length===0||e<0)return;let t=e>=500?e-500:e;if(t>=0&&t<this.classes.length)return this.classes[t].dxfName}convertRay(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"point"),a=n.dwg_dynapi_entity_data(e,"vector");return{type:"RAY",...t,firstPoint:r,unitDirection:a}}convertSection(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"state"),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"name"),c=n.dwg_dynapi_entity_data(e,"vert_dir"),u=n.dwg_dynapi_entity_data(e,"top_height"),f=n.dwg_dynapi_entity_data(e,"bottom_height"),m=n.dwg_dynapi_entity_data(e,"indicator_alpha"),g=n.dwg_dynapi_entity_data(e,"indicator_color"),x=n.dwg_dynapi_entity_data(e,"num_verts"),E=n.dwg_dynapi_entity_data(e,"verts"),S=x>0?n.dwg_ptr_to_point3d_array(E,x):[],w=n.dwg_dynapi_entity_data(e,"num_blverts"),b=n.dwg_dynapi_entity_data(e,"blverts"),I=w>0?n.dwg_ptr_to_point3d_array(b,w):[],L=n.dwg_dynapi_entity_data(e,"geometrySettingHardId"),P=n.dwg_ref_get_handle_absolute_ref(L)??0n;return{type:"SECTION",...t,state:r,flags:a,name:l,verticalDirection:c,topHeight:u,bottomHeight:f,indicatorTransparency:m,indicatorColor:g.rgb,numberOfVertices:x,vertices:S,numberOfBackLineVertices:w,backLineVertices:I,geometrySettingHardId:P}}convertShape(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"scale"),l=n.dwg_dynapi_entity_data(e,"rotation"),c=n.dwg_dynapi_entity_data(e,"width_factor"),u=n.dwg_dynapi_entity_data(e,"oblique_angle"),f=n.dwg_dynapi_entity_data(e,"thickness"),m=n.dwg_dynapi_entity_data(e,"extrusion"),g=n.dwg_dynapi_entity_data(e,"style_id"),x=n.dwg_entity_text_get_style_name(e);return{type:"SHAPE",subclassMarker:"AcDbShape",...t,thickness:f,insertionPoint:r,size:a,shapeNumber:g,styleName:x,rotation:l,xScale:c,obliqueAngle:u,extrusionDirection:m}}convertSolid(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"corner1"),a=n.dwg_dynapi_entity_data(e,"corner2"),l=n.dwg_dynapi_entity_data(e,"corner3"),c=n.dwg_dynapi_entity_data(e,"corner4"),u=n.dwg_dynapi_entity_data(e,"thickness"),f=n.dwg_dynapi_entity_data(e,"extrusion");return{type:"SOLID",...t,corner1:r,corner2:a,corner3:l,corner4:c,thickness:u,extrusionDirection:f}}convertTrace(e,t){return{...this.convertSolid(e,t),type:"TRACE"}}convertSpline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"splineflags"),a=n.dwg_dynapi_entity_data(e,"degree"),l=n.dwg_dynapi_entity_data(e,"knot_tol"),c=n.dwg_dynapi_entity_data(e,"num_knots"),u=n.dwg_dynapi_entity_data(e,"knots"),f=n.dwg_ptr_to_double_array(u,c),m=n.dwg_dynapi_entity_data(e,"fit_tol"),g=n.dwg_dynapi_entity_data(e,"num_fit_pts"),x=n.dwg_dynapi_entity_data(e,"fit_pts"),E=n.dwg_ptr_to_point3d_array(x,g),S=n.dwg_dynapi_entity_data(e,"weighted"),w=n.dwg_dynapi_entity_data(e,"ctrl_tol"),b=n.dwg_dynapi_entity_data(e,"num_ctrl_pts"),I=n.dwg_dynapi_entity_data(e,"ctrl_pts"),L=n.dwg_ptr_to_point4d_array(I,b),P=n.dwg_dynapi_entity_data(e,"beg_tan_vec"),C=n.dwg_dynapi_entity_data(e,"end_tan_vec");return{type:"SPLINE",...t,flag:r,degree:a,numberOfKnots:c,numberOfControlPoints:b,numberOfFitPoints:g,knotTolerance:l,controlTolerance:w,fitTolerance:m,startTangent:P,endTangent:C,knots:f,weights:S?L.map(F=>F.w):void 0,controlPoints:L.map(F=>({x:F.x,y:F.y,z:F.z})),fitPoints:E}}convertTable(e,t){let n=this.libredwg,r=n.dwg_dynapi_subclass_data(e,"ldata","name"),a=n.dwg_dynapi_entity_data(e,"ins_pt"),l=n.dwg_dynapi_entity_data(e,"horiz_direction"),c=n.dwg_dynapi_entity_data(e,"flag_for_table_value"),u=n.dwg_dynapi_entity_data(e,"num_rows"),f=n.dwg_dynapi_entity_data(e,"num_cols"),m=n.dwg_dynapi_entity_data(e,"row_heights"),g=n.dwg_ptr_to_double_array(m,u),x=n.dwg_dynapi_entity_data(e,"col_widths"),E=n.dwg_ptr_to_double_array(x,f),S=n.dwg_dynapi_entity_data(e,"tablestyle"),w=n.dwg_ref_get_id(S)??"",b=n.dwg_dynapi_entity_data(e,"block_header"),I=n.dwg_ref_get_id(b)??"",L=n.dwg_dynapi_entity_data(e,"table_flag_override"),P=n.dwg_dynapi_entity_data(e,"border_color_overrides_flag"),C=n.dwg_dynapi_entity_data(e,"border_lineweight_overrides_flag"),F=n.dwg_dynapi_entity_data(e,"border_visibility_overrides_flag"),q=n.dwg_dynapi_entity_data(e,"num_cells"),J=n.dwg_dynapi_entity_data(e,"cells"),ue=n.dwg_ptr_to_table_cell_array(J,q);return{type:"ACAD_TABLE",...t,name:r,startPoint:a,directionVector:l,tableValue:c,rowCount:u,columnCount:f,overrideFlag:L,borderColorOverrideFlag:P,borderLineWeightOverrideFlag:C,borderVisibilityOverrideFlag:F,rowHeightArr:g,columnWidthArr:E,tableStyleId:w,blockRecordHandle:I,cells:this.convertTableCells(ue),bmpPreview:""}}convertTableCells(e){return e.map(t=>{var n,r;return{text:t.text_value,attachmentPoint:t.cell_alignment,textStyle:t.text_style?String(t.text_style):void 0,rotation:t.rotation,cellType:t.type,flagValue:t.flags,mergedValue:t.is_merged_value,autoFit:t.is_autofit_flag,topBorderVisibility:!!t.top_visibility,bottomBorderVisibility:!!t.bottom_visibility,leftBorderVisibility:!!t.left_visibility,rightBorderVisibility:!!t.right_visibility,overrideFlag:t.cell_flag_override,virtualEdgeFlag:t.virtual_edge_flag,blockTableRecordId:t.block_handle?String(t.block_handle.absolute_ref??""):void 0,blockScale:t.block_scale,blockAttrNum:((n=t.attr_defs)==null?void 0:n.length)??0,attrDefineId:(r=t.attr_defs)==null?void 0:r.map(a=>{var l;return String(((l=a.attdef)==null?void 0:l.absolute_ref)??"")}),textHeight:t.text_height??0,extendedCellFlags:t.additional_data_flag}})}convertTextBase(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"text_value"),r=t.dwg_dynapi_entity_data(e,"thickness"),a=t.dwg_dynapi_entity_data(e,"ins_pt"),l=t.dwg_dynapi_entity_data(e,"alignment_pt"),c=t.dwg_dynapi_entity_data(e,"rotation"),u=t.dwg_dynapi_entity_data(e,"height"),f=t.dwg_dynapi_entity_data(e,"width_factor"),m=t.dwg_dynapi_entity_data(e,"oblique_angle"),g=t.dwg_entity_text_get_style_name(e),x=t.dwg_dynapi_entity_data(e,"generation"),E=t.dwg_dynapi_entity_data(e,"horiz_alignment"),S=t.dwg_dynapi_entity_data(e,"vert_alignment"),w=t.dwg_dynapi_entity_data(e,"extrusion");return{text:n,thickness:r,startPoint:a,endPoint:l,textHeight:u,rotation:c,xScale:f,obliqueAngle:m,styleName:g,generationFlag:x,halign:E,valign:S,extrusionDirection:w}}convertText(e,t){return{type:"TEXT",...t,...this.convertTextBase(e)}}convertTolerance(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"ins_pt"),a=n.dwg_dynapi_entity_data(e,"text_value"),l=n.dwg_dynapi_entity_data(e,"x_direction"),c=n.dwg_dynapi_entity_data(e,"extrusion"),u=n.dwg_entity_get_dimstyle_name(e);return{type:"TOLERANCE",...t,styleName:u,insertionPoint:r,text:a,extrusionDirection:c,xAxisDirection:l}}convertViewport(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"center"),a=n.dwg_dynapi_entity_data(e,"width"),l=n.dwg_dynapi_entity_data(e,"height"),c=n.dwg_dynapi_entity_data(e,"on_off"),u=n.dwg_dynapi_entity_data(e,"VIEWCTR"),f=n.dwg_dynapi_entity_data(e,"SNAPBASE"),m=n.dwg_dynapi_entity_data(e,"SNAPUNIT"),g=n.dwg_dynapi_entity_data(e,"GRIDUNIT"),x=n.dwg_dynapi_entity_data(e,"VIEWDIR"),E=n.dwg_dynapi_entity_data(e,"view_target"),S=n.dwg_dynapi_entity_data(e,"lens_length"),w=n.dwg_dynapi_entity_data(e,"front_clip_z"),b=n.dwg_dynapi_entity_data(e,"back_clip_z"),I=n.dwg_dynapi_entity_data(e,"VIEWSIZE"),L=n.dwg_dynapi_entity_data(e,"SNAPANG"),P=n.dwg_dynapi_entity_data(e,"twist_angle"),C=n.dwg_dynapi_entity_data(e,"circle_zoom"),F=n.dwg_dynapi_entity_data(e,"num_frozen_layers"),q;if(F>0){let on=n.dwg_dynapi_entity_data(e,"frozen_layers");on&&(q=n.dwg_ptr_to_object_ref_ptr_array(on,F).map(ut=>n.dwg_ref_get_id(ut)).filter(ut=>!!ut))}let J=n.dwg_dynapi_entity_data(e,"status_flag"),ue=n.dwg_dynapi_entity_data(e,"clip_boundary"),me=n.dwg_ref_get_id(ue),te=n.dwg_dynapi_entity_data(e,"style_sheet"),fe=n.dwg_dynapi_entity_data(e,"render_mode"),Me=n.dwg_dynapi_entity_data(e,"UCSVP"),ye=n.dwg_dynapi_entity_data(e,"ucsorg"),_e=n.dwg_dynapi_entity_data(e,"ucsxdir"),ve=n.dwg_dynapi_entity_data(e,"ucsydir"),Ve=n.dwg_dynapi_entity_data(e,"named_ucs"),ke=n.dwg_ref_get_id(Ve),De=n.dwg_dynapi_entity_data(e,"base_ucs"),Ye=n.dwg_ref_get_id(De),Je=n.dwg_dynapi_entity_data(e,"UCSORTHOVIEW"),it=n.dwg_dynapi_entity_data(e,"ucs_elevation"),an=n.dwg_dynapi_entity_data(e,"shadeplot_mode"),ai=n.dwg_dynapi_entity_data(e,"use_default_lights"),He=n.dwg_dynapi_entity_data(e,"default_lighting_type"),he=n.dwg_dynapi_entity_data(e,"brightness"),Xe=n.dwg_dynapi_entity_data(e,"contrast"),Fe=n.dwg_dynapi_entity_data(e,"grid_major"),Ut=n.dwg_dynapi_entity_data(e,"background"),Bt=n.dwg_ref_get_id(Ut),kt=n.dwg_dynapi_entity_data(e,"shadeplot"),le=n.dwg_ref_get_id(kt),ze=n.dwg_dynapi_entity_data(e,"visualstyle"),Ge=n.dwg_ref_get_id(ze),we=n.dwg_dynapi_entity_data(e,"sun"),Ae=n.dwg_ref_get_id(we);return{type:"VIEWPORT",...t,viewportCenter:r,width:a,height:l,status:c,viewportId:0,displayCenter:u,snapBase:f,snapSpacing:m,gridSpacing:g,viewDirection:x,targetPoint:E,perspectiveLensLength:S,frontClipZ:w,backClipZ:b,viewHeight:I,snapAngle:L,viewTwistAngle:P,circleZoomPercent:C,frozenLayerIds:q,statusBitFlags:J,clippingBoundaryId:me,sheetName:te,renderMode:fe,ucsPerViewport:Me,ucsOrigin:ye,ucsXAxis:_e,ucsYAxis:ve,ucsId:ke??"",ucsBaseId:Ye??"",orthographicType:Je,elevation:it,shadePlotMode:an,majorGridFrequency:Fe,backgroundId:Bt??"",shadePlotId:le??"",visualStyleId:Ge??"",isDefaultLighting:!!ai,defaultLightingType:He,brightness:he,contrast:Xe,sunId:Ae??""}}convertWipeout(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"class_version"),a=n.dwg_dynapi_entity_data(e,"pt0"),l=n.dwg_dynapi_entity_data(e,"uvec"),c=n.dwg_dynapi_entity_data(e,"vvec"),u=n.dwg_dynapi_entity_data(e,"image_size"),f=n.dwg_dynapi_entity_data(e,"display_props"),m=n.dwg_dynapi_entity_data(e,"clipping"),g=n.dwg_dynapi_entity_data(e,"brightness"),x=n.dwg_dynapi_entity_data(e,"contrast"),E=n.dwg_dynapi_entity_data(e,"fade"),S=n.dwg_dynapi_entity_data(e,"clip_mode"),w=n.dwg_dynapi_entity_data(e,"clip_boundary_type"),b=n.dwg_dynapi_entity_data(e,"num_clip_verts"),I=n.dwg_dynapi_entity_data(e,"clip_verts"),L=n.dwg_ptr_to_point2d_array(I,b),P=n.dwg_dynapi_entity_data(e,"imagedef"),C=n.dwg_ref_get_absref(P)??0,F=n.dwg_dynapi_entity_data(e,"imagedefreactor"),q=n.dwg_ref_get_absref(F)??0;return{type:"WIPEOUT",...t,version:r,position:a,uPixel:l,vPixel:c,imageSize:u,imageDefHandle:C,flags:f,clipping:m,brightness:g,contrast:x,fade:E,imageDefReactorHandle:q,clippingBoundaryType:w,countBoundaryPoints:b,clippingBoundaryPath:L,clipMode:S}}convertXline(e,t){let n=this.libredwg,r=n.dwg_dynapi_entity_data(e,"point"),a=n.dwg_dynapi_entity_data(e,"vector");return{type:"XLINE",...t,firstPoint:r,unitDirection:a}}getDimensionCommonAttrs(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"class_version"),r=t.dwg_entity_get_block_name(e,"block"),a=t.dwg_dynapi_entity_data(e,"def_pt"),l=t.dwg_dynapi_entity_data(e,"text_midpt"),c=t.dwg_dynapi_entity_data(e,"attachmentPoint"),u=t.dwg_dynapi_entity_data(e,"flag"),f=t.dwg_dynapi_entity_data(e,"lspace_factor"),m=t.dwg_dynapi_entity_data(e,"lspace_factor"),g=t.dwg_dynapi_entity_data(e,"act_measurement"),x=t.dwg_dynapi_entity_data(e,"user_text"),E=t.dwg_dynapi_entity_data(e,"text_rotation"),S=t.dwg_dynapi_entity_data(e,"ins_rotation"),w=t.dwg_dynapi_entity_data(e,"extrusion"),b=t.dwg_entity_get_dimstyle_name(e);return{type:"DIMENSION",version:n,name:r,definitionPoint:a,textPoint:l,dimensionType:u,attachmentPoint:c,textLineSpacingStyle:f,textLineSpacingFactor:m||1,measurement:g,text:x,textRotation:E,ocsRotation:S,extrusionDirection:w,styleName:b}}getCommonAttrs(e){let t=this.libredwg,n=t.dwg_object_entity_get_color_object(e),r=n.method,a=n.index,l;(r==194||(n.rgb>>>24&255)===194)&&(l=n.rgb&16777215);let c=this.getLayerName(e),u=t.dwg_object_entity_get_handle_object(e),f=t.dwg_object_entity_get_ownerhandle_object(e),m=t.dwg_object_entity_get_xdicobjhandle_object(e),g=this.getLtypeName(e),x=t.dwg_object_entity_get_line_weight(e),E=t.dwg_object_entity_get_ltype_scale(e),S=!t.dwg_object_entity_get_invisible(e),w=t.dwg_object_entity_get_xdata(e);return{handle:fn(u.value),ownerDictionaryHardId:fn(m.absolute_ref),ownerBlockRecordSoftId:fn(f.absolute_ref),layer:c,color:l,colorIndex:a,colorName:n.name,lineType:g,lineweight:x,lineTypeScale:E,isVisible:S,transparency:n.alpha,transparencyType:n.alpha_type,xdata:w}}getLayerName(e){let n=this.libredwg.dwg_object_entity_get_layer_object_ref(e);return this.layers.get(fn(n.handleref.value))??"0"}getLtypeName(e){let n=this.libredwg.dwg_object_entity_get_ltype_object_ref(e);return this.ltypes.get(fn(n.handleref.value))??""}},ys=class{constructor(e){je(this,"libredwg"),je(this,"entityConverter"),je(this,"orphanEntitiesByBlock",null),je(this,"ownerlessOrphanIndices",null),je(this,"orphanIndexDataPtr",null),this.libredwg=e,this.entityConverter=new Za(e)}convert(e){var t;this.entityConverter.clear(),this.orphanEntitiesByBlock=null,this.ownerlessOrphanIndices=null,this.orphanIndexDataPtr=e;let n={tables:{APPID:{entries:[]},BLOCK_RECORD:{entries:[]},DIMSTYLE:{entries:[]},LAYER:{entries:[]},LTYPE:{entries:[]},STYLE:{entries:[]},VPORT:{entries:[]}},objects:{DICTIONARY:[],IMAGEDEF:[],LAYER_FILTER:[],LAYER_INDEX:[],LAYOUT:[],MLEADERSTYLE:[],SPATIAL_FILTER:[],XRECORD:[]},header:{},entities:[],classes:[]},r=this.libredwg;this.convertHeader(e,n.header),this.convertClasses(e,n.classes),this.entityConverter.setClasses(n.classes);let a=r.dwg_get_num_objects(e);for(let u=0;u<a;u++){let f=r.dwg_get_object(e,u);if(f){let m=this.safeObjectTio(f);if(m)switch(r.dwg_object_get_fixedtype(f)){case ee.DWG_TYPE_LAYER:{let x=this.convertLayer(m,f);n.tables.LAYER.entries.push(x),this.entityConverter.layers.set(x.handle,x.name)}break;case ee.DWG_TYPE_LTYPE:{let x=this.convertLineType(m,f);n.tables.LTYPE.entries.push(x),this.entityConverter.ltypes.set(x.handle,x.name)}break}}}for(let u=0;u<a;u++){let f=r.dwg_get_object(e,u);if(f){let m=this.safeObjectTio(f);if(m)switch(r.dwg_object_get_fixedtype(f)){case ee.DWG_TYPE_APPID:n.tables.APPID.entries.push(this.convertAppId(m));break;case ee.DWG_TYPE_BLOCK_HEADER:{let x=this.convertBlockRecord(m,f);n.tables.BLOCK_RECORD.entries.push(x),(Ka(x.name)||df(x.name))&&x.entities.forEach(E=>{n.entities.push(E),E.type==="INSERT"&&E.attribs.forEach(S=>{n.entities.push(S)})})}break;case ee.DWG_TYPE_DIMSTYLE:n.tables.DIMSTYLE.entries.push(this.convertDimStyle(m,f));break;case ee.DWG_TYPE_STYLE:n.tables.STYLE.entries.push(this.convertStyle(m,f));break;case ee.DWG_TYPE_VPORT:n.tables.VPORT.entries.push(this.convertViewport(m,f));break;case ee.DWG_TYPE_DICTIONARY:n.objects.DICTIONARY.push(this.convertDictionary(m,f));break;case ee.DWG_TYPE_IMAGEDEF:n.objects.IMAGEDEF.push(this.convertImageDef(m,f));break;case ee.DWG_TYPE_LAYERFILTER:n.objects.LAYER_FILTER.push(this.convertLayerFilter(m,f));break;case ee.DWG_TYPE_LAYER_INDEX:n.objects.LAYER_INDEX.push(this.convertLayerIndex(m,f));break;case ee.DWG_TYPE_LAYOUT:n.objects.LAYOUT.push(this.convertLayout(m,f));break;case ee.DWG_TYPE_MLEADERSTYLE:n.objects.MLEADERSTYLE.push(this.convertMLeaderStyle(m,f));break;case ee.DWG_TYPE_SPATIAL_FILTER:n.objects.SPATIAL_FILTER.push(this.convertSpatialFilter(m,f));break;case ee.DWG_TYPE_XRECORD:n.objects.XRECORD.push(this.convertXRecord(m,f));break}}}let l=n.entities.filter(u=>u.type==="VIEWPORT");l.sort((u,f)=>{let m=parseInt(u.handle,16),g=parseInt(f.handle,16);return m-g}),l.forEach((u,f)=>{u.viewportId=f+1});let c=r.dwg_bmp(e);return(t=c?.data)!=null&&t.length&&(n.thumbnailImage=c.data),n}getConversionStats(){return{unknownEntityCount:this.entityConverter.unknownEntityCount}}safeObjectTio(e){let t=this.libredwg;try{if(t.dwg_object_get_supertype(e)!=qa.DWG_SUPERTYPE_OBJECT)return null;let n=t.dwg_object_to_object_tio(e);return n||null}catch{return null}}convertHeader(e,t){let n=this.libredwg;rf.forEach(r=>{let a=r;(r=="DIMBLK"||r=="DIMBLK1"||r=="DIMBLK2")&&(a=a+"_T");let l=n.dwg_dynapi_header_data(e,a);r=="CELTYPE"||r=="CLAYER"||r=="CLAYER"||r=="DIMSTYLE"||r=="DIMTXSTY"||r=="TEXTSTYLE"?l=l?n.dwg_ref_get_object_name(l):"":r=="DRAGVS"&&(l=l?n.dwg_ref_get_absref(l)??2:2),t[r]=l})}convertClasses(e,t){let n=this.libredwg,r=n.dwg_get_num_classes(e);for(let a=0;a<r;a++){let l=n.dwg_get_class(e,a);t.push({dxfName:l.dxfname,cppName:l.cppname,appName:l.appname,capabilitiesFlag:l.proxyflag,instanceCount:l.num_instances,wasAProxyFlag:l.s_zombie,isAnEntityFlag:l.item_class_id===498})}}convertAppId(e){let t=this.libredwg,n=t.dwg_dynapi_entity_data(e,"name"),r=t.dwg_dynapi_entity_data(e,"flag");return{name:n,standardFlag:r}}convertBlockRecord(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_entity_block_header_get_block(e);a.name&&(r.name=a.name);let l=n.dwg_dynapi_entity_data(e,"num_owned"),c=n.dwg_dynapi_entity_data(e,"flag"),u=n.dwg_dynapi_entity_data(e,"description"),f=n.dwg_dynapi_entity_data(e,"base_pt"),m=n.dwg_dynapi_entity_data(e,"insert_units"),g=n.dwg_dynapi_entity_data(e,"explodable"),x=n.dwg_dynapi_entity_data(e,"block_scaling"),E=n.dwg_dynapi_entity_data(e,"layout"),S=n.dwg_ref_get_id(E)??"",w,b=n.dwg_entity_block_header_get_preview(e);b&&b.length>0&&(w=xr(b));let I=this.convertEntities(t,r.handle);if(!I||I.length==0){I=[];let L=n.dwg_dynapi_entity_data(e,"entities");if(L){let P=n.dwg_ptr_to_object_ref_ptr_array(L,l),C=this.entityConverter;for(let F=0;F<l;F++){let q=n.dwg_ref_get_object(P[F]),J=C.convert(q);J&&(J.ownerBlockRecordSoftId=r.handle,I.push(J))}}}if(this.orphanIndexDataPtr!=null){let L=this.convertOrphanOwnedEntities(this.orphanIndexDataPtr,t,r.handle,Ka(r.name)===!0);if(L.length)if(I.length===0)I=L;else{let P=new Set(I.map(C=>C.handle));for(let C of L)P.has(C.handle)||I.push(C)}}return{...r,flags:c,description:u,basePoint:f,layout:S,insertionUnits:m,explodability:g,scalability:x,bmpPreview:w,entities:I}}convertEntities(e,t){let n=this.libredwg,r=this.entityConverter,a=[],l=n.get_first_owned_entity(e);for(;l;){let c=r.convert(l);c&&(c.ownerBlockRecordSoftId=t,a.push(c)),l=n.get_next_owned_entity(e,l)}return a}convertOrphanOwnedEntities(e,t,n,r){this.ensureOrphanEntityIndex(e);let l=(this.orphanEntitiesByBlock??new Map).get(t)??[],c=r&&this.ownerlessOrphanIndices?this.ownerlessOrphanIndices:[],u=l.length&&c.length?l.concat(c):l.length?l:c;if(u.length===0)return[];let f=this.libredwg,m=this.entityConverter,g=[];for(let x of u){let E=f.dwg_get_object(e,x),S=m.convert(E);S&&(S.ownerBlockRecordSoftId=n,g.push(S))}return g}ensureOrphanEntityIndex(e){if(this.orphanEntitiesByBlock)return;let t=this.libredwg,n=t.dwg_get_num_objects(e),r=new Map,a=[],l=[],c=new Map;for(let g=0;g<n;g++){let x=t.dwg_get_object(e,g);if(x){if(t.dwg_object_get_supertype(x)===qa.DWG_SUPERTYPE_ENTITY)a.push(g),r.set(x,g);else if(t.dwg_object_get_fixedtype(x)===ee.DWG_TYPE_BLOCK_HEADER){l.push(x);let E=t.dwg_object_to_object_tio(x);E&&c.set(E,x)}}}let u=new Set;for(let g of l){let x=t.get_first_owned_entity(g),E=0;for(;x&&E++<=a.length;){let S=r.get(x);if(S===void 0||u.has(S))break;u.add(S),x=t.get_next_owned_entity(g,x)}}let f=new Map,m=[];for(let g of a){if(u.has(g))continue;let x=t.dwg_get_object(e,g),E=x?t.dwg_object_to_entity_tio(x):0,S=E?t.dwg_entity_owner(E):0,w=S?c.get(S)??0:0;if(w){let b=f.get(w);b?b.push(g):f.set(w,[g])}else m.push(g)}this.orphanEntitiesByBlock=f,this.ownerlessOrphanIndices=m}convertDimStyle(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"DIMTOL"),l=n.dwg_dynapi_entity_data(e,"DIMLIM"),c=n.dwg_dynapi_entity_data(e,"DIMTIH"),u=n.dwg_dynapi_entity_data(e,"DIMTOH"),f=n.dwg_dynapi_entity_data(e,"DIMSE1"),m=n.dwg_dynapi_entity_data(e,"DIMSE2"),g=n.dwg_dynapi_entity_data(e,"DIMALT"),x=n.dwg_dynapi_entity_data(e,"DIMTOFL"),E=n.dwg_dynapi_entity_data(e,"DIMSAH"),S=n.dwg_dynapi_entity_data(e,"DIMTIX"),w=n.dwg_dynapi_entity_data(e,"DIMSOXD"),b=n.dwg_dynapi_entity_data(e,"DIMALTD"),I=n.dwg_dynapi_entity_data(e,"DIMZIN"),L=n.dwg_dynapi_entity_data(e,"DIMSD1"),P=n.dwg_dynapi_entity_data(e,"DIMSD2"),C=n.dwg_dynapi_entity_data(e,"DIMTOLJ"),F=n.dwg_dynapi_entity_data(e,"DIMJUST"),q=n.dwg_dynapi_entity_data(e,"DIMFIT"),J=n.dwg_dynapi_entity_data(e,"DIMUPT"),ue=n.dwg_dynapi_entity_data(e,"DIMTZIN"),me=n.dwg_dynapi_entity_data(e,"DIMALTZ"),te=n.dwg_dynapi_entity_data(e,"DIMALTTZ"),fe=n.dwg_dynapi_entity_data(e,"DIMTAD"),Me=n.dwg_dynapi_entity_data(e,"DIMUNIT"),ye=n.dwg_dynapi_entity_data(e,"DIMAUNIT"),_e=n.dwg_dynapi_entity_data(e,"DIMDEC"),ve=n.dwg_dynapi_entity_data(e,"DIMTDEC"),Ve=n.dwg_dynapi_entity_data(e,"DIMALTU"),ke=n.dwg_dynapi_entity_data(e,"DIMALTTD"),De=n.dwg_dynapi_entity_data(e,"DIMSCALE"),Ye=n.dwg_dynapi_entity_data(e,"DIMASZ"),Je=n.dwg_dynapi_entity_data(e,"DIMEXO"),it=n.dwg_dynapi_entity_data(e,"DIMDLI"),an=n.dwg_dynapi_entity_data(e,"DIMEXE"),ai=n.dwg_dynapi_entity_data(e,"DIMRND"),He=n.dwg_dynapi_entity_data(e,"DIMDLE"),he=n.dwg_dynapi_entity_data(e,"DIMTP"),Xe=n.dwg_dynapi_entity_data(e,"DIMTM"),Fe=n.dwg_dynapi_entity_data(e,"DIMFXL"),Ut=n.dwg_dynapi_entity_data(e,"DIMJOGANG"),Bt=n.dwg_dynapi_entity_data(e,"DIMTFILL"),kt=n.dwg_dynapi_entity_data(e,"DIMTFILLCLR"),le=n.dwg_dynapi_entity_data(e,"DIMAZIN"),ze=n.dwg_dynapi_entity_data(e,"DIMARCSYM"),Ge=n.dwg_dynapi_entity_data(e,"DIMTXT"),we=n.dwg_dynapi_entity_data(e,"DIMCEN"),Ae=n.dwg_dynapi_entity_data(e,"DIMTSZ"),on=n.dwg_dynapi_entity_data(e,"DIMALTF"),Ct=n.dwg_dynapi_entity_data(e,"DIMLFAC"),ut=n.dwg_dynapi_entity_data(e,"DIMTVP"),zt=n.dwg_dynapi_entity_data(e,"DIMTFAC"),Ue=n.dwg_dynapi_entity_data(e,"DIMGAP"),Lt=n.dwg_dynapi_entity_data(e,"DIMPOST"),tt=n.dwg_dynapi_entity_data(e,"DIMAPOST"),Qe=n.dwg_dynapi_entity_data(e,"DIMBLK_T"),vi=n.dwg_dynapi_entity_data(e,"DIMBLK1_T"),oi=n.dwg_dynapi_entity_data(e,"DIMBLK2_T"),li=n.dwg_dynapi_entity_data(e,"DIMALTRND"),In=n.dwg_dynapi_entity_data(e,"DIMCLRD_N"),xi=n.dwg_dynapi_entity_data(e,"DIMCLRE_N"),gn=n.dwg_dynapi_entity_data(e,"DIMCLRT_N"),ln=n.dwg_dynapi_entity_data(e,"DIMCLRD"),Ie=n.dwg_dynapi_entity_data(e,"DIMCLRE"),wn=n.dwg_dynapi_entity_data(e,"DIMCLRT"),yn=n.dwg_dynapi_entity_data(e,"DIMADEC"),Vt=n.dwg_dynapi_entity_data(e,"DIMFRAC"),Pn=n.dwg_dynapi_entity_data(e,"DIMLUNIT"),Rn=n.dwg_dynapi_entity_data(e,"DIMDSEP"),pt=n.dwg_dynapi_entity_data(e,"DIMTMOVE"),Ln=n.dwg_dynapi_entity_data(e,"DIMATFIT"),cn=n.dwg_dynapi_entity_data(e,"DIMFXLON"),Yt=n.dwg_dynapi_entity_data(e,"DIMTXTDIRECTION"),Ht=n.dwg_dynapi_entity_data(e,"DIMALTMZF"),Dn=n.dwg_dynapi_entity_data(e,"DIMALTMZS"),mt=n.dwg_dynapi_entity_data(e,"DIMMZF"),y=n.dwg_dynapi_entity_data(e,"DIMMZS"),A=n.dwg_dynapi_entity_data(e,"DIMLWD"),Z=n.dwg_dynapi_entity_data(e,"DIMLWE"),G=n.dwg_dynapi_entity_data(e,"DIMTXSTY"),U=n.dwg_ref_get_absref(G)??void 0,k=n.dwg_dynapi_entity_data(e,"DIMLDRBLK"),O=n.dwg_ref_get_absref(k)??void 0;return{...r,DIMPOST:Lt,DIMAPOST:tt,DIMBLK:Qe,DIMBLK1:vi,DIMBLK2:oi,DIMSCALE:De,DIMASZ:Ye,DIMEXO:Je,DIMDLI:it,DIMEXE:an,DIMRND:ai,DIMDLE:He,DIMTP:he,DIMTM:Xe,DIMTXT:Ge,DIMCEN:we,DIMTSZ:Ae,DIMALTF:on,DIMLFAC:Ct,DIMTVP:ut,DIMTFAC:zt,DIMGAP:Ue,DIMALTRND:li,DIMTOL:a,DIMLIM:l,DIMTIH:c,DIMTOH:u,DIMSE1:f,DIMSE2:m,DIMTAD:fe,DIMZIN:I,DIMAZIN:le,DIMALT:g,DIMALTD:b,DIMTOFL:x,DIMSAH:E,DIMTIX:S,DIMSOXD:w,DIMCLRD:ln,DIMCLRE:Ie,DIMCLRT:wn,DIMADEC:yn,DIMUNIT:Me,DIMDEC:_e,DIMTDEC:ve,DIMALTU:Ve,DIMALTTD:ke,DIMAUNIT:ye,DIMFRAC:Vt,DIMLUNIT:Pn,DIMDSEP:String.fromCharCode(Rn),DIMTMOVE:pt,DIMJUST:F,DIMSD1:L,DIMSD2:P,DIMTOLJ:C,DIMTZIN:ue,DIMALTZ:me,DIMALTTZ:te,DIMFIT:q,DIMUPT:J,DIMATFIT:Ln,DIMTXSTY:U,DIMLDRBLK:O,DIMLWD:A,DIMLWE:Z,DIMFXL:Fe,DIMJOGANG:Ut,DIMTFILL:Bt,DIMTFILLCLR:kt,DIMARCSYM:ze,DIMCLRD_N:In,DIMCLRE_N:xi,DIMCLRT_N:gn,DIMFXLON:cn,DIMTXTDIRECTION:Yt,DIMALTMZF:Ht,DIMALTMZS:Dn,DIMMZF:mt,DIMMZS:y}}convertLayer(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"frozen"),c=n.dwg_dynapi_entity_data(e,"off"),u=n.dwg_dynapi_entity_data(e,"frozen_in_new"),f=n.dwg_dynapi_entity_data(e,"plotflockedlag"),m=n.dwg_dynapi_entity_data(e,"plotflag"),g=n.dwg_dynapi_entity_data(e,"linewt"),x=n.dwg_dynapi_entity_data(e,"color"),E=n.dwg_dynapi_entity_data(e,"ltype"),S="Continuous";if(E)try{S=n.dwg_ref_get_object_name(E)}catch{}let w=x.method,b=256,I=16777215;return w===195||(x.rgb>>>24&255)===195?b=x.rgb&255:w==194||(x.rgb>>>24&255)===194?I=x.rgb&16777215:x.index>=1&&x.index<=255&&(b=x.index),{...r,standardFlag:a,colorIndex:b,color:I,colorName:x.name,transparency:x.alpha,lineType:S,frozen:l!=0,off:c!=0,frozenInNew:u!=0,locked:f!=0,plotFlag:m,lineweight:g,plotStyleNameObjectId:"",materialObjectId:""}}convertLineType(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"description"),c=n.dwg_dynapi_entity_data(e,"numdashes"),u=n.dwg_dynapi_entity_data(e,"pattern_len"),f=n.dwg_dynapi_entity_data(e,"dashes"),m=f?n.dwg_ptr_to_ltype_dash_array(f,c):[];return{...r,description:l,standardFlag:a,numberOfLineTypes:c,totalPatternLength:u,pattern:this.convertLineTypePattern(m)}}convertLineTypePattern(e){let t=[];return e.forEach(n=>{t.push({elementLength:n.length||0,elementTypeFlag:n.shape_flag||0,shapeNumber:n.complex_shapecode,scale:n.scale,rotation:n.rotation,offsetX:n.x_offset,offsetY:n.y_offset,text:n.text})}),t}convertStyle(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"width_factor"),c=n.dwg_dynapi_entity_data(e,"oblique_angle"),u=n.dwg_dynapi_entity_data(e,"generation"),f=n.dwg_dynapi_entity_data(e,"last_height"),m=n.dwg_dynapi_entity_data(e,"font_file"),g=n.dwg_dynapi_entity_data(e,"bigfont_file");return{...r,standardFlag:a,fixedTextHeight:0,widthFactor:l,obliqueAngle:c,textGenerationFlag:u,lastHeight:f,font:m,bigFont:g}}convertViewport(e,t){let n=this.libredwg,r=this.getCommonTableEntryAttrs(e,t),a=n.dwg_dynapi_entity_data(e,"flag"),l=n.dwg_dynapi_entity_data(e,"VIEWSIZE"),c=n.dwg_dynapi_entity_data(e,"aspect_ratio"),u=n.dwg_dynapi_entity_data(e,"VIEWCTR"),f=n.dwg_dynapi_entity_data(e,"view_target"),m=n.dwg_dynapi_entity_data(e,"VIEWDIR"),g=n.dwg_dynapi_entity_data(e,"view_twist"),x=n.dwg_dynapi_entity_data(e,"lens_length"),E=n.dwg_dynapi_entity_data(e,"front_clip_z"),S=n.dwg_dynapi_entity_data(e,"back_clip_z"),w=n.dwg_dynapi_entity_data(e,"VIEWMODE"),b=n.dwg_dynapi_entity_data(e,"render_mode"),I=n.dwg_dynapi_entity_data(e,"use_default_lights")!=0,L=n.dwg_dynapi_entity_data(e,"default_lightning_type"),P=n.dwg_dynapi_entity_data(e,"brightness"),C=n.dwg_dynapi_entity_data(e,"contrast"),F=n.dwg_dynapi_entity_data(e,"ambient_color"),q=n.dwg_dynapi_entity_data(e,"lower_left"),J=n.dwg_dynapi_entity_data(e,"upper_right"),ue=n.dwg_dynapi_entity_data(e,"circle_zoom"),me=n.dwg_dynapi_entity_data(e,"UCSICON"),te=n.dwg_dynapi_entity_data(e,"GRIDUNIT"),fe=n.dwg_dynapi_entity_data(e,"SNAPANG"),Me=n.dwg_dynapi_entity_data(e,"SNAPBASE"),ye=n.dwg_dynapi_entity_data(e,"SNAPUNIT"),_e=n.dwg_dynapi_entity_data(e,"ucsorg"),ve=n.dwg_dynapi_entity_data(e,"ucsxdir"),Ve=n.dwg_dynapi_entity_data(e,"ucsydir"),ke=n.dwg_dynapi_entity_data(e,"ucs_elevation"),De=n.dwg_dynapi_entity_data(e,"grid_major"),Ye=n.dwg_dynapi_entity_data(e,"background"),Je=Ye?n.dwg_ref_get_id(Ye)??"":void 0,it=n.dwg_dynapi_entity_data(e,"visualstyle"),an=it?n.dwg_ref_get_id(it)??"":void 0;return{...r,standardFlag:a,lowerLeftCorner:q,upperRightCorner:J,center:u,snapBasePoint:Me,snapSpacing:ye,gridSpacing:te,viewDirectionFromTarget:m,viewTarget:f,lensLength:x,frontClippingPlane:E,backClippingPlane:S,viewHeight:l,aspectRatio:c,snapRotationAngle:fe,viewTwistAngle:g,circleSides:ue,frozenLayers:[],styleSheet:"",renderMode:b,viewMode:w,ucsIconSetting:me,ucsOrigin:_e,ucsXAxis:ve,ucsYAxis:Ve,orthographicType:0,elevation:ke,shadePlotSetting:0,majorGridLines:De,backgroundObjectId:Je,visualStyleObjectId:an,isDefaultLightingOn:I,defaultLightingType:L,brightness:P,contrast:C,ambientColor:F.index}}getCommonTableEntryAttrs(e,t){let n=this.libredwg,r=n.dwg_object_get_tio(t),a=n.dwg_object_object_get_ownerhandle_object(r),l=n.dwg_object_get_handle_object(t);return{handle:fn(l.value),ownerHandle:fn(a.absolute_ref),name:n.dwg_dynapi_entity_data(e,"name")}}convertDictionary(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"is_hardowner"),l=n.dwg_dynapi_entity_data(e,"cloning"),c=n.dwg_dynapi_entity_data(e,"numitems"),u=n.dwg_dynapi_entity_data(e,"itemhandles"),f=n.dwg_ptr_to_object_ref_array(u,c),m=n.dwg_object_dictionary_get_texts(t),g={};return f.forEach((x,E)=>g[m[E]]=fn(x.absolute_ref)),{...r,isHardOwner:!!a,cloningFlag:l,entries:g}}convertImageDef(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"image_size"),l=n.dwg_dynapi_entity_data(e,"file_path"),c=n.dwg_dynapi_entity_data(e,"is_loaded"),u=n.dwg_dynapi_entity_data(e,"pixel_size"),f=n.dwg_dynapi_entity_data(e,"resunits");return{...r,fileName:l,size:a,sizeOfOnePixel:u,isLoaded:c,resolutionUnits:f}}convertLayerFilter(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"num_names")??0,l=n.dwg_dynapi_entity_data(e,"names"),c=l&&a>0?n.dwg_ptr_to_wchar_string_array(l,a).filter(u=>u!=null&&u!==""):[];return{...r,...c.length?{layerNames:c}:{}}}convertLayerIndex(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"last_updated"),l=n.dwg_dynapi_entity_data(e,"num_entries")??0,c=n.dwg_dynapi_entity_data(e,"entries"),u=n.dwg_dynapi_subclass_size("LAYER_entry"),f=[],m=[],g=[];if(c&&u>0)for(let x=0;x<l;x++){let E=c+x*u,S=n.dwg_dynapi_subclass_data(E,"LAYER_entry","name");f.push(S??"");let w=n.dwg_dynapi_subclass_data(E,"LAYER_entry","handle");m.push(w?n.dwg_ref_get_id(w)??"":""),g.push(n.dwg_dynapi_subclass_data(E,"LAYER_entry","numlayers")??0)}return{...r,...a!=null?{timeStamp:a}:{},...f.length?{layerNames:f}:{},...m.length?{idBufferIds:m}:{},...g.length?{idBufferEntryCounts:g}:{}}}convertLayout(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"layout_name"),l=n.dwg_dynapi_entity_data(e,"tab_order"),c=n.dwg_dynapi_entity_data(e,"layout_flags"),u=n.dwg_dynapi_entity_data(e,"INSBASE"),f=n.dwg_dynapi_entity_data(e,"LIMMIN"),m=n.dwg_dynapi_entity_data(e,"LIMMAX"),g=n.dwg_dynapi_entity_data(e,"UCSORG"),x=n.dwg_dynapi_entity_data(e,"UCSXDIR"),E=n.dwg_dynapi_entity_data(e,"UCSYDIR"),S=n.dwg_dynapi_entity_data(e,"UCSORTHOVIEW"),w=n.dwg_dynapi_entity_data(e,"EXTMIN"),b=n.dwg_dynapi_entity_data(e,"EXTMAX"),I=n.dwg_dynapi_entity_data(e,"ucs_elevation"),L=n.dwg_dynapi_entity_data(e,"block_header"),P=n.dwg_ref_get_id(L)??"",C=n.dwg_dynapi_entity_data(e,"active_viewport"),F=n.dwg_ref_get_id(C)??"",q=n.dwg_dynapi_entity_data(e,"named_ucs"),J=q?n.dwg_ref_get_id(q)??"":void 0;return{...r,layoutName:a,controlFlag:c,tabOrder:l,minLimit:f,maxLimit:m,insertionPoint:u,minExtent:w,maxExtent:b,elevation:I,ucsOrigin:g,ucsXAxis:x,ucsYAxis:E,orthographicType:S,paperSpaceTableId:P,viewportId:F,namedUcsId:J,shadePlotId:""}}convertMLeaderStyle(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=f=>n.dwg_dynapi_entity_data(e,f),l=f=>n.dwg_ref_get_id(f),c=f=>f>0,u=f=>f!=null?kl(f):void 0;return{...r,subclassMarker:"AcDbMLeaderStyle",unknown1:a("class_version"),contentType:a("content_type"),drawMLeaderOrderType:a("mleader_order"),drawLeaderOrderType:a("leader_order"),maxLeaderSegmentPoints:a("max_points"),firstSegmentAngleConstraint:a("first_seg_angle"),secondSegmentAngleConstraint:a("second_seg_angle"),leaderLineType:a("type"),leaderLineColor:u(a("line_color")),leaderLineTypeId:l(a("line_type")),leaderLineWeight:a("linewt"),landingEnabled:c(a("has_landing")),landingGap:a("landing_gap"),doglegEnabled:c(a("has_dogleg")),doglegLength:a("landing_dist"),description:a("description"),arrowheadId:l(a("arrow_head")),arrowheadSize:a("arrow_head_size"),defaultMTextContents:a("text_default"),textStyleId:l(a("text_style")),textLeftAttachmentType:a("attach_left"),textAngleType:a("text_angle_type"),textAlignmentType:a("text_align_type"),textRightAttachmentType:a("attach_right"),textColor:u(a("text_color")),textHeight:a("text_height"),textFrameEnabled:c(a("has_text_frame")),textAlignAlwaysLeft:c(a("text_always_left")),alignSpace:a("align_space"),blockContentId:l(a("block")),blockContentColor:u(a("block_color")),blockContentScale:a("block_scale"),blockContentScaleEnabled:c(a("use_block_scale")),blockContentRotation:a("block_rotation"),blockContentRotationEnabled:c(a("use_block_rotation")),blockContentConnectionType:a("block_connection"),scale:a("scale"),overwritePropertyValue:c(a("is_changed")),annotative:c(a("is_annotative")),breakGapSize:a("break_size"),textAttachmentDirection:a("attach_dir"),bottomTextAttachmentDirection:a("attach_bottom"),topTextAttachmentDirection:a("attach_top"),unknown2:c(a("text_extended"))}}convertSpatialFilter(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"origin"),l=n.dwg_dynapi_entity_data(e,"num_clip_verts"),c=n.dwg_dynapi_entity_data(e,"clip_verts"),u=n.dwg_ptr_to_point2d_array(c,l),f=n.dwg_dynapi_entity_data(e,"extrusion"),m=n.dwg_dynapi_entity_data(e,"display_boundary_on"),g=n.dwg_dynapi_entity_data(e,"front_clip_on"),x=n.dwg_dynapi_entity_data(e,"front_clip_z"),E=n.dwg_dynapi_entity_data(e,"back_clip_on"),S=n.dwg_dynapi_entity_data(e,"back_clip_z"),w=n.dwg_dynapi_entity_data(e,"transform"),b=n.dwg_ptr_to_double_array(w,12),I=n.dwg_dynapi_entity_data(e,"inverse_transform"),L=n.dwg_ptr_to_double_array(I,12);return{...r,origin:a,numberOfPointsOnClipBoundary:l,vertices:u,extrusionDirection:f,clipBoundaryVisible:!!m,frontClippingPlaneFlag:!!g,frontClippingPlaneDistance:x,backClippingPlaneFlag:!!E,backClippingPlaneDistance:S,matrix:b,invertBlockMatrix:L}}convertXRecord(e,t){let n=this.libredwg,r=this.getCommonObjectAttrs(t),a=n.dwg_dynapi_entity_data(e,"cloning"),l=n.dwg_object_xrecord_get_xdata(e)??[],c=n.dwg_object_get_tio(t),u=c?n.dwg_object_object_get_xdicobjhandle_object(c):null,f=u&&u.absolute_ref?fn(u.absolute_ref):void 0;return{...r,...a!=null?{cloning:a}:{},...f?{extensionDictionary:f}:{},data:l}}getCommonObjectAttrs(e){let t=this.libredwg,n=t.dwg_object_get_tio(e),r=t.dwg_object_object_get_ownerhandle_object(n),a=t.dwg_object_get_handle_object(e);return{handle:fn(a.value),ownerHandle:fn(r.absolute_ref)}}},hn=class i{constructor(){je(this,"min"),je(this,"max"),je(this,"valid"),this.min={x:1/0,y:1/0},this.max={x:-1/0,y:-1/0},this.valid=!1}expandByPoint(e){return this.min.x=Math.min(this.min.x,e.x),this.min.y=Math.min(this.min.y,e.y),this.max.x=Math.max(this.max.x,e.x),this.max.y=Math.max(this.max.y,e.y),this.valid=!0,this}transform(e,t){let n=this.getCorners().map(r=>({x:r.x*e.x+t.x,y:r.y*e.y+t.y}));this.reset();for(let r of n)this.expandByPoint(r);return this}rotate(e,t){let n=Math.cos(e),r=Math.sin(e),a=this.getCorners().map(l=>{let c=l.x-t.x,u=l.y-t.y;return{x:t.x+c*n-u*r,y:t.y+c*r+u*n}});this.reset();for(let l of a)this.expandByPoint(l);return this}clone(){let e=new i;return e.min={x:this.min.x,y:this.min.y},e.max={x:this.max.x,y:this.max.y},e.valid=this.valid,e}reset(){this.min={x:1/0,y:1/0},this.max={x:-1/0,y:-1/0},this.valid=!1}getCorners(){return[{x:this.min.x,y:this.min.y},{x:this.min.x,y:this.max.y},{x:this.max.x,y:this.min.y},{x:this.max.x,y:this.max.y}]}};function hf(i,e,t,n,r){let a=t.length;if(a===0)throw new Error("points must not be empty");let l=t[0].length;if(i<0||i>1)throw new Error(`t out of bounds [0,1]: ${i}`);if(e<1)throw new Error("degree must be at least 1 (linear)");if(e>a-1)throw new Error("degree must be less than or equal to point count - 1");let c=r??new Array(a).fill(1),u=n??(()=>{let w=[];for(let b=0;b<a+e+1;b++)w.push(b);return w})();if(u.length!==a+e+1)throw new Error("bad knot vector length");let f=[e,u.length-1-e],m=u[f[0]],g=u[f[1]];i=i*(g-m)+m,i=Math.max(i,m),i=Math.min(i,g);let x=f[0];for(;x<f[1]&&!(i>=u[x]&&i<=u[x+1]);x++);let E=new Array(a);for(let w=0;w<a;w++){E[w]=new Array(l+1);for(let b=0;b<l;b++)E[w][b]=t[w][b]*c[w];E[w][l]=c[w]}for(let w=1;w<=e+1;w++)for(let b=x;b>x-e-1+w;b--){let I=u[b+e+1-w]-u[b],L=I===0?0:(i-u[b])/I;for(let P=0;P<l+1;P++)E[b][P]=(1-L)*E[b-1][P]+L*E[b][P]}let S=new Array(l);for(let w=0;w<l;w++)S[w]=ff(E[x][w]/E[x][l],-9);return S}function ff(i,e){if(isNaN(i)||!Number.isInteger(e))return NaN;let[t,n="0"]=i.toString().split("e"),r=Math.round(+`${t}e${+n-e}`),[a,l="0"]=r.toString().split("e");return+`${a}e${+l+e}`}var gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215,0];function gr(i,e,t){return Math.max(e,Math.min(t,i))}var Gl=class Wl{constructor(){je(this,"_colorIndex"),je(this,"_color"),je(this,"_colorName"),this._colorIndex=256,this._color=null,this._colorName=null}get color(){return this._color}set color(e){e==null?this._color=null:(this._color=Math.round(gr(e,0,256*256*256-1)),this._colorIndex=this.getColorIndexByValue(this._color),this._colorName=this.getColorNameByValue(this._color))}get hexColor(){if(this._color&&this._color>0&&this._color<=16777215){let e=this._color.toString(16).toUpperCase();for(;e.length<6;)e="0"+e;return`0x${e}`}return""}get cssColor(){return`rgb(${this.red},${this.green},${this.blue})`}get red(){return this.color!=null?this.color>>16&255:null}get green(){return this.color!=null?this.color>>8&255:null}get blue(){return this.color!=null?this.color&255:null}get colorIndex(){return this._colorIndex}set colorIndex(e){e==null?this._colorIndex=null:(this._colorIndex=gr(e,0,256),this._color=Va[e],this._colorName=this.getColorNameByValue(this._color))}get colorName(){return this._colorName}set colorName(e){if(e){let t=gs[e.toLowerCase()];t!==void 0?(this._colorName=e,this._color=t,this._colorIndex=this.getColorIndexByValue(this._color)):console.warn("Unknown color: "+e)}else this._colorName=null}get hasColorName(){return this._colorName==null}get hasColorIndex(){return this._colorIndex==null}get isByLayer(){return this.colorIndex==256}setByLayer(){return this.colorIndex=256,this}get isByBlock(){return this.colorIndex==0}setByBlock(){return this.colorIndex=0,this}setScalar(e){return this.setRGB(e,e,e),this}setRGB(e,t,n){let r=Math.round(gr(e,0,255)),a=Math.round(gr(t,0,255)),l=Math.round(gr(n,0,255));return this.color=(r<<16)+(a<<8)+l,this}setColorName(e){let t=gs[e.toLowerCase()];return t!==void 0?this.color=t:console.warn("Unknown color "+e),this}clone(){let e=new Wl;return e.colorIndex=this.colorIndex,e.color=this.color,e._colorName=this._colorName,this}copy(e){return this.colorIndex=e.colorIndex,this.color=e.color,this._colorName=e._colorName,this}equals(e){return e.color==this.color&&e.colorIndex==this.colorIndex&&e._colorName==this._colorName}toString(){return this.isByLayer?"ByLayer":this.isByBlock?"ByBlock":this.colorName?this.colorName:this.hexColor}getColorNameByValue(e){for(let[t,n]of Object.entries(gs))if(n===e)return t;return null}getColorIndexByValue(e){let t=Va.length-1;for(let n=1;n<t;++n)if(Va[n]===e)return n;return null}};je(Gl,"NAMES",gs);var pf=Gl,ui=class i{constructor(e,t){je(this,"x"),je(this,"y"),this.x=e,this.y=t}add(e){return new i(this.x+e.x,this.y+e.y)}sub(e){return new i(this.x-e.x,this.y-e.y)}multiply(e){return new i(this.x*e,this.y*e)}length(){return Math.sqrt(this.x**2+this.y**2)}norm(){let e=this.length();return e===0?new i(0,0):new i(this.x/e,this.y/e)}};function mf(i,e,t,n=5){let r,a,l;t<0?(r=Math.atan(-t)*4,a=new ui(i.x,i.y),l=new ui(e.x,e.y)):(r=Math.atan(t)*4,a=new ui(e.x,e.y),l=new ui(i.x,i.y));let c=l.sub(a),u=c.length(),f=a.add(c.multiply(.5)),m=Math.abs(u/2/Math.tan(r/2)),g=c.norm(),x=new ui(g.x*Math.cos(Math.PI/2)-g.y*Math.sin(Math.PI/2),g.y*Math.cos(Math.PI/2)+g.x*Math.sin(Math.PI/2)),E=r<Math.PI?f.add(x.multiply(-m)):f.add(x.multiply(m)),S=Math.atan2(l.y-E.y,l.x-E.x)/Math.PI*180,w=Math.atan2(a.y-E.y,a.x-E.x)/Math.PI*180;w<S&&(w+=360);let b=l.sub(E).length(),I=Math.floor(S/n)*n+n,L=Math.ceil(w/n)*n-n,P=[];for(let C=I;C<=L;C+=n){let F=C/180*Math.PI,q=E.add(new ui(Math.cos(F)*b,Math.sin(F)*b));P.push(q)}return t<0&&P.reverse(),P}function _f(i,e=!1){let t=[],n=i.vertices.map(r=>({x:r.x,y:r.y,bulge:r.bulge}));e&&n.push(n[0]);for(let r=0,a=n.length;r<a-1;++r){let l=n[r],c=n[r+1];t.push(l),n[r].bulge&&(t=t.concat(mf(l,c,i.vertices[r].bulge))),r===a-2&&t.push(c)}return t}var Ja=class{constructor(){je(this,"blockMap",new Map)}rotate(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.y*r,y:e.x*r+e.y*n}}interpolateBSpline(e,t,n,r=25,a){let l=[],c=e.map(m=>[m.x,m.y]),u=[n[t]],f=[n[t],n[n.length-1-t]];for(let m=t+1;m<n.length-t;++m)u[u.length-1]!==n[m]&&u.push(n[m]);for(let m=1;m<u.length;++m){let g=u[m-1],x=u[m];for(let E=0;E<=r;++E){let w=(E/r*(x-g)+g-f[0])/(f[1]-f[0]);w=Math.max(0,Math.min(1,w));let b=hf(w,t,c,n,a);l.push({x:b[0],y:b[1]})}}return l}addFlipXIfApplicable(e,{bbox:t,element:n}){return"extrusionDirection"in e&&e.extrusionDirection.z===-1?{bbox:new hn().expandByPoint({x:-t.min.x,y:t.min.y}).expandByPoint({x:-t.max.x,y:t.max.y}),element:`<g transform="matrix(-1 0 0 1 0 0)">${n}</g>`}:{bbox:t,element:n}}line(e){let t=new hn().expandByPoint({x:e.startPoint.x,y:e.startPoint.y}).expandByPoint({x:e.endPoint.x,y:e.endPoint.y}),n=`<line x1="${e.startPoint.x}" y1="${e.startPoint.y}" x2="${e.endPoint.x}" y2="${e.endPoint.y}" />`;return{bbox:t,element:n}}ray(e){let n=e.firstPoint,r={x:n.x+e.unitDirection.x*1e4,y:n.y+e.unitDirection.y*1e4},a=new hn().expandByPoint(n).expandByPoint(r),l=`<line x1="${n.x}" y1="${n.y}" x2="${r.x}" y2="${r.y}" />`;return{bbox:a,element:l}}xline(e){let n={x:e.firstPoint.x-e.unitDirection.x*1e4,y:e.firstPoint.y-e.unitDirection.y*1e4},r={x:e.firstPoint.x+e.unitDirection.x*1e4,y:e.firstPoint.y+e.unitDirection.y*1e4},a=new hn().expandByPoint(n).expandByPoint(r),l=`<line x1="${n.x}" y1="${n.y}" x2="${r.x}" y2="${r.y}" />`;return{bbox:a,element:l}}extractMTextLines(e){return e.replace(/\\U\+([0-9A-Fa-f]{4})/g,(t,n)=>String.fromCharCode(parseInt(n,16))).replace(/\\P/g,`
`).replace(/\\[LOlo]/g,"").replace(/\\[Ff][^;\\]*?(?:\|[^;\\]*)*;/g,"").replace(/\\[KkCcHhWwTtAa][^;\\]*;?/g,"").replace(/\\[a-zA-Z]+;?/g,"").replace(/%%(d|p|c|%)/gi,"").replace(/\\\\/g,"\\").replace(/\\~/g,"\xA0").replace(/[{}]/g,"").split(`
`).map(t=>t.trim()).filter(t=>t.length>0)}lines(e,t,n,r,a="start"){let l=new hn().expandByPoint({x:n.x,y:n.y}).expandByPoint({x:n.x+r,y:n.y-e.length*t*1.5}),c=e.map((u,f)=>{let m=n.x,g=n.y-f*t*1.5,x=`translate(${m},${g}) scale(1,-1) translate(${-m},${-g})`;return`<text x="${m}" y="${g}" font-size="${t}" text-anchor="${a}" transform="${x}">${u}</text>`});return{bbox:l,element:c.join(`
`)}}mtext(e){let t=e.textHeight,n=e.insertionPoint,r=this.extractMTextLines(e.text),a=e.attachmentPoint,l="start";return a==wi.BottomCenter||a==wi.MiddleCenter||a==wi.TopCenter?l="middle":(a==wi.BottomRight||a==wi.MiddleRight||a==wi.TopRight)&&(l="end"),this.lines(r,t,n,e.extentsWidth,l)}table(e){let{rowCount:t,columnCount:n,rowHeightArr:r,columnWidthArr:a,startPoint:l,cells:c}=e,u=l.x,f=l.y,m=[];for(let b=0,I=f;b<t;b++){let L=r[b],P=u;for(let C=0;C<n;C++){let F=b*n+C,q=c[F],J=a[C];m.push({x:P,y:I,width:J,height:L,cell:q,row:b,col:C}),P+=J}I+=L}let g=m.map(({x:b,y:I,width:L,height:P,cell:C})=>{let F=[];C.topBorderVisibility&&F.push(`<line x1="${b}" y1="${I}" x2="${b+L}" y2="${I}" stroke="black" />`),C.bottomBorderVisibility&&F.push(`<line x1="${b}" y1="${I+P}" x2="${b+L}" y2="${I+P}" stroke="black" />`),C.leftBorderVisibility&&F.push(`<line x1="${b}" y1="${I}" x2="${b}" y2="${I+P}" stroke="black" />`),C.rightBorderVisibility&&F.push(`<line x1="${b+L}" y1="${I}" x2="${b+L}" y2="${I+P}" stroke="black" />`);let q=b+L/2,J=I+P/2+C.textHeight/3,ue=`<text x="${q}" y="${J}" font-size="${C.textHeight}" text-anchor="middle" dominant-baseline="middle">${C.text}</text>`;return[...F,ue].join(`
`)}).join(`
`),x=a.reduce((b,I)=>b+I,0),E=r.reduce((b,I)=>b+I,0),S=new hn().expandByPoint({x:u,y:f}).expandByPoint({x:u+x,y:f+E}),w=`
  <svg xmlns="http://www.w3.org/2000/svg" width="${x}" height="${E}" viewBox="${u} ${f} ${x} ${E}">
  ${g}
  </svg>
    `.trim();return{bbox:S,element:w}}text(e){let t=e.textHeight,n=e.startPoint,r=[e.text],a=e.endPoint.x-e.endPoint.x;e.halign==0&&(a=e.text.length*t+e.startPoint.x);let l="start";return e.halign==$a.CENTER?l="middle":e.halign==$a.RIGHT&&(l="end"),this.lines(r,t,n,a,l)}vertices(e,t=!1){let n=e.reduce((a,l)=>a.expandByPoint(l),new hn),r=e.reduce((a,l,c)=>(a+=c===0?"M":"L",a+=l.x+","+l.y,a),"");return t&&(r+="Z"),{bbox:n,element:`<path d="${r}" />`}}circle(e){let t=new hn().expandByPoint({x:e.center.x+e.radius,y:e.center.y+e.radius}).expandByPoint({x:e.center.x-e.radius,y:e.center.y-e.radius}),n=`<circle cx="${e.center.x}" cy="${e.center.y}" r="${e.radius}" />`;return{bbox:t,element:n}}ellipseOrArc(e,t,n,r,a,l,c){let u=Math.sqrt(n*n+r*r),f=a*u,m=-Math.atan2(-r,n),g=this.bboxEllipseOrArc(e,t,n,r,a,l,c);if(Math.abs(l-c)<1e-9||Math.abs(l-c+Math.PI*2)<1e-9){let x=`<g transform="rotate(${m/Math.PI*180} ${e}, ${t})"><ellipse cx="${e}" cy="${t}" rx="${u}" ry="${f}" /></g>`;return{bbox:g,element:x}}else{let x=this.rotate({x:Math.cos(l)*u,y:Math.sin(l)*f},m),E={x:e+x.x,y:t+x.y},S=this.rotate({x:Math.cos(c)*u,y:Math.sin(c)*f},m),w={x:e+S.x,y:t+S.y},I=(c<l?c+Math.PI*2:c)-l<Math.PI?0:1,P=`<path d="${`M ${E.x} ${E.y} A ${u} ${f} ${m/Math.PI*180} ${I} 1 ${w.x} ${w.y}`}" />`;return{bbox:g,element:P}}}bboxEllipseOrArc(e,t,n,r,a,l,c){for(;l<0;)l+=Math.PI*2;for(;c<=l;)c+=Math.PI*2;let u=[];if(Math.abs(n)<1e-12||Math.abs(r)<1e-12)for(let E=0;E<4;E++)u.push(E/2*Math.PI);else u[0]=Math.atan(-r*a/n)-Math.PI,u[1]=Math.atan(n*a/r)-Math.PI,u[2]=u[0]-Math.PI,u[3]=u[1]-Math.PI;for(let E=4;E>=0;E--){for(;u[E]<l;)u[E]+=Math.PI*2;u[E]>c&&u.splice(E,1)}u.push(l),u.push(c);let f=u.map(E=>({x:Math.cos(E),y:Math.sin(E)})),m=[[n,-r*a],[r,n*a]];return f.map(E=>({x:E.x*m[0][0]+E.y*m[0][1]+e,y:E.x*m[1][0]+E.y*m[1][1]+t})).reduce((E,S)=>(E.expandByPoint(S),E),new hn)}ellipse(e){let{bbox:t,element:n}=this.ellipseOrArc(e.center.x,e.center.y,e.majorAxisEndPoint.x,e.majorAxisEndPoint.y,e.axisRatio,e.startAngle,e.endAngle);return{bbox:t,element:n}}arc(e){let{bbox:t,element:n}=this.ellipseOrArc(e.center.x,e.center.y,e.radius,0,1,e.startAngle,e.endAngle);return{bbox:t,element:n}}dimension(e){let t=this.blockMap.get(e.name);return t?{bbox:t.bbox,element:`<use href="#${e.name}" />`}:null}insert(e){let t=this.blockMap.get(e.name);if(t){let n=e.insertionPoint,r=e.rotation*(180/Math.PI),a=`translate(${n.x},${n.y}) rotate(${r}) scale(${e.xScale},${e.yScale})`;return{bbox:t.bbox.clone().transform({x:e.xScale,y:e.yScale},{x:n.x,y:n.y}).rotate(e.rotation,n),element:`<use href="#${e.name}" transform="${a}" />`}}return null}block(e,t){let n=e.entities,{bbox:r,elements:a}=n.reduce((l,c)=>{let u=this.entityToBoundsAndElement(c);if(u){let{bbox:f,element:m}=u;f.valid&&(l.bbox.expandByPoint(f.min),l.bbox.expandByPoint(f.max));let g=this.getEntityColor(t.tables.LAYER.entries,c),x=c.type=="TEXT"||c.type=="MTEXT"?g.cssColor:"none";g.isByBlock?l.elements.push(`<g id="${c.handle}">${m}</g>`):l.elements.push(`<g id="${c.handle}" stroke="${g.cssColor}" fill="${x}">${m}</g>`)}return l},{bbox:new hn,elements:[]});return r.valid?{bbox:r,element:`<g id="${e.name}">${a.join(`
`)}</g>`}:null}entityToBoundsAndElement(e){let t=null;switch(e.type){case"ARC":t=this.arc(e);break;case"CIRCLE":t=this.circle(e);break;case"DIMENSION":t=this.dimension(e);break;case"ELLIPSE":t=this.ellipse(e);break;case"INSERT":t=this.insert(e);break;case"LINE":t=this.line(e);break;case"LWPOLYLINE":{let n=e,r=!!(n.flag&512),a=_f(n,r);t=this.vertices(a,r);break}case"MTEXT":t=this.mtext(e);break;case"SPLINE":{let n=e;t=this.vertices(this.interpolateBSpline(n.controlPoints,n.degree,n.knots,25,n.weights));break}case"POLYLINE":break;case"RAY":t=this.ray(e);break;case"TABLE":case"ACAD_TABLE":t=this.table(e);break;case"TEXT":t=this.text(e);break;case"XLINE":t=this.xline(e);break;default:t=null;break}return t?this.addFlipXIfApplicable(e,t):null}getEntityColor(e,t){let n=new pf;if(t.colorIndex!=null?n.colorIndex=t.colorIndex:t.colorName?n.colorName=t.colorName:t.color!=null&&(n.color=t.color),n.colorIndex==7&&(n.colorIndex=256),n.isByLayer){let r=e.find(a=>a.name===t.layer);r!=null&&(n.colorIndex=r.colorIndex)}return n.color==null&&(n.color=16777215),n}convert(e){let t=null;this.blockMap.clear();let n="";e.tables.BLOCK_RECORD.entries.forEach(l=>{if(Ka(l.name))t=l;else{let c=this.block(l,e);c&&(n+=c.element,this.blockMap.set(l.name,c))}});let r=this.block(t,e),a=r&&r.bbox.valid?{x:r.bbox.min.x,y:-r.bbox.max.y,width:r.bbox.max.x-r.bbox.min.x,height:r.bbox.max.y-r.bbox.min.y}:{x:0,y:0,width:0,height:0};return`<?xml version="1.0"?>
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
</svg>`}};var zl=class Vl{constructor(e){return je(this,"wasmInstance"),je(this,"decoder"),this.wasmInstance=e,new Proxy(this,{get:(t,n,r)=>n in t?Reflect.get(t,n,r):Reflect.get(t.wasmInstance,n,r)})}dwg_read_data(e,t){if(t==vs.DWG){let n="tmp.dwg";try{this.wasmInstance.FS.writeFile(n,new Uint8Array(e));let r=this.wasmInstance.dwg_read_file(n);if(r.error&Bl.OUTOFMEM)throw this.wasmInstance.dwg_abandon(r.data),new Error("Failed to decode DWG: out of WASM memory. Rebuild with pnpm build:wasm (INITIAL_MEMORY=1GB) or use a smaller file.");return r.error!=0&&console.warn("Open dwg file with error code:",r.error),r.data}finally{this.wasmInstance.FS.analyzePath(n,!1).exists&&this.wasmInstance.FS.unlink(n)}}}dwg_write_dxf(e){let t="tmp.dwg",n="tmp.dxf";try{this.wasmInstance.FS.writeFile(t,new Uint8Array(e));let r=this.wasmInstance.dwg_write_dxf(t,n);return r!=0?(console.log("Convert dwg to dxf with error code: ",r),null):this.wasmInstance.FS.readFile(n)}finally{this.wasmInstance.FS.analyzePath(t,!1).exists&&this.wasmInstance.FS.unlink(t),this.wasmInstance.FS.analyzePath(n,!1).exists&&this.wasmInstance.FS.unlink(n)}}dwg_get_version_type(e){let t=this.wasmInstance.dwg_get_version_type(e);return af[t]}dwg_get_codepage(e){return this.wasmInstance.dwg_get_codepage(e)}dwg_bmp(e){return this.wasmInstance.dwg_bmp(e)}dwg_get_num_classes(e){return this.wasmInstance.dwg_get_num_classes(e)}dwg_get_class(e,t){return this.wasmInstance.dwg_get_class(e,t)}convert(e){let t=this.dwg_get_codepage(e),n=Ll(t);return this.decoder=new TextDecoder(n),new ys(this).convert(e)}convertEx(e){let t=this.dwg_get_codepage(e),n=Ll(t);this.decoder=new TextDecoder(n);let r=new ys(this);return{database:r.convert(e),stats:r.getConversionStats()}}dwg_to_svg(e){return new Ja().convert(e)}dwg_free(e){if(e)try{this.wasmInstance.dwg_free(e)}catch{try{this.wasmInstance.dwg_abandon(e)}catch{}}}dwg_free_object(e){this.wasmInstance.dwg_free_object(e)}dwg_ref_object(e,t){return this.wasmInstance.dwg_ref_object(e,t)}dwg_ref_object_silent(e,t){return this.wasmInstance.dwg_ref_object_silent(e,t)}dwg_ref_object_relative(e,t,n){return this.wasmInstance.dwg_ref_object_relative(e,t,n)}dwg_resolve_handle(e,t){return this.wasmInstance.dwg_resolve_handle(e,t)}dwg_resolve_handle_silent(e,t){return this.wasmInstance.dwg_resolve_handle_silent(e,t)}dwg_resolve_handleref(e,t){return this.wasmInstance.dwg_resolve_handleref(e,t)}dwg_ref_get_absref(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_absref(e);return t===0?null:t}dwg_ref_get_handle_value(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_handle_value(e);return t===0n?null:t}dwg_ref_get_handle_absolute_ref(e){if(!e)return null;let t=this.wasmInstance.dwg_ref_get_handle_absolute_ref(e);return t===0n?null:t}dwg_obj_get_handle_value(e){if(!e)return null;let t=this.wasmInstance.dwg_obj_get_handle_value(e);return t===0n?null:t}dwg_ref_get_id(e){let t=this.dwg_ref_get_absref(e);return t?.toString(16).toUpperCase()}dwg_ref_get_object_name(e){let t=this.wasmInstance,n=t.dwg_ref_get_object(e),r=t.dwg_object_to_object_tio(n);return this.dwg_dynapi_entity_data(r,"name")}dwg_obj_obj_to_object(e){return this.wasmInstance.dwg_obj_obj_to_object(e)}dwg_obj_generic_to_object(e){return this.wasmInstance.dwg_obj_generic_to_object(e)}dwg_object_to_object(e){return this.wasmInstance.dwg_object_to_object(e)}dwg_object_to_object_tio(e){return this.wasmInstance.dwg_object_to_object_tio(e)}dwg_object_to_entity(e){return this.wasmInstance.dwg_object_to_entity(e)}dwg_object_to_entity_tio(e){return this.wasmInstance.dwg_object_to_entity_tio(e)}dwg_getall_entities_in_model_space(e){let t=this.wasmInstance,n=t.dwg_model_space_object(e),r=[],a=t.get_first_owned_entity(n);for(;a;)r.push(a),a=t.get_next_owned_entity(n,a);return r}dwg_getall_object_by_type(e,t){let n=this.wasmInstance,r=n.dwg_get_num_objects(e),a=[];for(let l=0;l<r;l++){let c=n.dwg_get_object(e,l),u=n.dwg_object_to_object_tio(c);u&&n.dwg_object_get_fixedtype(c)==t&&a.push(u)}return a}dwg_getall_entity_by_type(e,t){let n=this.wasmInstance,r=n.dwg_get_num_objects(e),a=[];for(let l=0;l<r;l++){let c=n.dwg_get_object(e,l),u=n.dwg_object_to_entity_tio(c);u&&n.dwg_object_get_fixedtype(c)==t&&a.push(u)}return a}dwg_getall_LAYER(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_LAYER)}dwg_getall_LTYPE(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_LTYPE)}dwg_getall_STYLE(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_STYLE)}dwg_getall_DIMSTYLE(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_DIMSTYLE)}dwg_getall_VPORT(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_VPORT)}dwg_getall_LAYOUT(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_LAYOUT)}dwg_getall_BLOCK(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_BLOCK)}dwg_getall_BLOCK_HEADER(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_BLOCK_HEADER)}dwg_getall_IMAGEDEF(e){return this.dwg_getall_object_by_type(e,ee.DWG_TYPE_IMAGEDEF)}dwg_getall_VERTEX_2D(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_VERTEX_2D)}dwg_getall_VERTEX_3D(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_VERTEX_3D)}dwg_getall_POLYLINE_2D(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_POLYLINE_2D)}dwg_getall_POLYLINE_3D(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_POLYLINE_3D)}dwg_getall_IMAGE(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_IMAGE)}dwg_getall_LWPOLYLINE(e){return this.dwg_getall_entity_by_type(e,ee.DWG_TYPE_LWPOLYLINE)}dwg_ptr_to_object_ref_array(e,t){return this.wasmInstance.dwg_ptr_to_object_ref_array(e,t)}dwg_ptr_to_object_ref_ptr_array(e,t){return this.wasmInstance.dwg_ptr_to_object_ref_ptr_array(e,t)}dwg_ptr_to_wchar_string_array(e,t){return this.wasmInstance.dwg_ptr_to_wchar_string_array(e,t)}dwg_ptr_to_unsigned_char_array(e,t){return this.wasmInstance.dwg_ptr_to_unsigned_char_array(e,t)}dwg_ptr_to_signed_char_array(e,t){return this.wasmInstance.dwg_ptr_to_signed_char_array(e,t)}dwg_ptr_to_uint16_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint16_t_array(e,t)}dwg_ptr_to_int16_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int16_t_array(e,t)}dwg_ptr_to_uint32_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint32_t_array(e,t)}dwg_ptr_to_int32_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int32_t_array(e,t)}dwg_ptr_to_uint64_t_array(e,t){return this.wasmInstance.dwg_ptr_to_uint64_t_array(e,t)}dwg_ptr_to_int64_t_array(e,t){return this.wasmInstance.dwg_ptr_to_int64_t_array(e,t)}dwg_ptr_to_double_array(e,t){return this.wasmInstance.dwg_ptr_to_double_array(e,t)}dwg_ptr_to_point2d_array(e,t){return this.wasmInstance.dwg_ptr_to_point2d_array(e,t)}dwg_ptr_to_point3d_array(e,t){return this.wasmInstance.dwg_ptr_to_point3d_array(e,t)}dwg_ptr_to_point4d_array(e,t){return this.wasmInstance.dwg_ptr_to_point4d_array(e,t)}dwg_ptr_to_ltype_dash_array(e,t){return this.wasmInstance.dwg_ptr_to_ltype_dash_array(e,t)}dwg_ptr_to_table_cell_array(e,t){return this.wasmInstance.dwg_ptr_to_table_cell_array(e,t)}dwg_ptr_to_hatch_defline_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_defline_array(e,t)}dwg_ptr_to_hatch_path_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_path_array(e,t)}dwg_ptr_to_hatch_gradient_color_array(e,t){return this.wasmInstance.dwg_ptr_to_hatch_gradient_color_array(e,t)}dwg_ptr_to_mline_vertex_array(e,t){return this.wasmInstance.dwg_ptr_to_mline_vertex_array(e,t)}dwg_dynapi_entity_value(e,t){let n=this.wasmInstance.dwg_dynapi_entity_value(e,t);return n.bin&&this.decoder&&(n.data=this.decoder.decode(n.bin)),typeof n.data=="string"&&(n.data=Dl(n.data)),n}dwg_dynapi_entity_data(e,t){return this.dwg_dynapi_entity_value(e,t).data}dwg_dynapi_header_value(e,t){return this.wasmInstance.dwg_dynapi_header_value(e,t)}dwg_dynapi_header_data(e,t){return this.dwg_dynapi_header_value(e,t).data}dwg_dynapi_common_value(e,t){return this.wasmInstance.dwg_dynapi_common_value(e,t)}dwg_dynapi_common_data(e,t){return this.dwg_dynapi_common_value(e,t).data}dwg_dynapi_subclass_value(e,t,n){let r=this.wasmInstance.dwg_dynapi_subclass_value(e,t,n);return r.bin&&this.decoder&&(r.data=this.decoder.decode(r.bin)),typeof r.data=="string"&&(r.data=Dl(r.data)),r}dwg_dynapi_subclass_data(e,t,n){return this.dwg_dynapi_subclass_value(e,t,n).data}dwg_dynapi_subclass_size(e){return this.wasmInstance.dwg_dynapi_subclass_size(e)}dwg_dynapi_entity_field_offset(e,t){return this.wasmInstance.dwg_dynapi_entity_field_offset(e,t)}dwg_dynapi_subclass_field_offset(e,t){return this.wasmInstance.dwg_dynapi_subclass_field_offset(e,t)}dwg_object_get_handle_object(e){return this.wasmInstance.dwg_object_get_handle_object(e)}dwg_object_object_get_handle_object(e){return this.wasmInstance.dwg_object_object_get_handle_object(e)}dwg_object_object_get_ownerhandle_object(e){return this.wasmInstance.dwg_object_object_get_ownerhandle_object(e)}dwg_object_entity_get_handle_object(e){return this.wasmInstance.dwg_object_entity_get_handle_object(e)}dwg_object_entity_get_ownerhandle_object(e){return this.wasmInstance.dwg_object_entity_get_ownerhandle_object(e)}dwg_object_entity_get_xdicobjhandle_object(e){return this.wasmInstance.dwg_object_entity_get_xdicobjhandle_object(e)}dwg_object_entity_get_layer_object_ref(e){return this.wasmInstance.dwg_object_entity_get_layer_object_ref(e)}dwg_object_entity_get_ltype_object_ref(e){return this.wasmInstance.dwg_object_entity_get_ltype_object_ref(e)}dwg_object_entity_get_color_object(e){return this.wasmInstance.dwg_object_entity_get_color_object(e)}dwg_object_entity_get_xdata(e){return this.wasmInstance.dwg_object_entity_get_xdata(e)}dwg_object_object_get_xdicobjhandle_object(e){return this.wasmInstance.dwg_object_object_get_xdicobjhandle_object(e)}dwg_object_xrecord_get_xdata(e){return this.wasmInstance.dwg_object_xrecord_get_xdata(e)??[]}dwg_entity_owner(e){return this.wasmInstance.dwg_entity_owner(e)}dwg_entity_get_block_name(e,t){let n=this.wasmInstance,r=this.dwg_dynapi_entity_data(e,t),a=n.dwg_ref_get_object(r),l=n.dwg_object_to_object_tio(a);return this.dwg_entity_block_header_get_block(l).name}dwg_entity_get_dimstyle_name(e,t="dimstyle"){let n=this.wasmInstance,r=this.dwg_dynapi_entity_data(e,t),a=n.dwg_ref_get_object(r),l=n.dwg_object_to_object_tio(a);return this.dwg_dynapi_entity_data(l,"name")}dwg_entity_block_header_get_block(e){let t=this.wasmInstance,n=this.dwg_dynapi_entity_data(e,"block_entity"),r=t.dwg_ref_get_object(n),a=t.dwg_object_to_entity_tio(r),l=this.dwg_dynapi_entity_data(a,"name"),c=this.dwg_dynapi_entity_data(a,"base_pt");return{name:l,base_pt:c}}dwg_entity_block_header_get_preview(e){let t=this.wasmInstance;if(typeof t.dwg_entity_block_header_get_preview!="function")return null;let n=t.dwg_entity_block_header_get_preview(e);return n?.data??null}dwg_entity_get_preview(e){let t=this.wasmInstance;if(typeof t.dwg_entity_get_preview!="function")return null;let n=t.dwg_entity_get_preview(e);return n?.data??null}dwg_entity_proxy_entity_get_entity_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_proxy_entity_get_entity_data!="function")return null;let n=t.dwg_entity_proxy_entity_get_entity_data(e);return n?.data??null}dwg_entity_ole2frame_get_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_ole2frame_get_data!="function")return null;let n=t.dwg_entity_ole2frame_get_data(e);return n?.data??null}dwg_entity_oleframe_get_data(e){let t=this.wasmInstance;if(typeof t.dwg_entity_oleframe_get_data!="function")return null;let n=t.dwg_entity_oleframe_get_data(e);return n?.data??null}get_first_owned_entity(e){return this.wasmInstance.get_first_owned_entity(e)}get_next_owned_entity(e,t){return this.wasmInstance.get_next_owned_entity(e,t)}dwg_entity_mtext_get_style_name(e){let t=this.wasmInstance,n=this.dwg_dynapi_entity_data(e,"style"),r=t.dwg_ref_get_object(n),a=t.dwg_object_to_object_tio(r);return this.dwg_dynapi_entity_data(a,"name")}dwg_entity_text_get_style_name(e){return this.dwg_entity_mtext_get_style_name(e)}dwg_entity_polyline_2d_get_numpoints(e){return this.wasmInstance.dwg_entity_polyline_2d_get_numpoints(e).data}dwg_entity_polyline_2d_get_points(e){return this.wasmInstance.dwg_entity_polyline_2d_get_points(e).data}dwg_entity_polyline_2d_get_vertices(e){return this.wasmInstance.dwg_entity_polyline_2d_get_vertices(e).data}dwg_entity_polyline_3d_get_numpoints(e){return this.wasmInstance.dwg_entity_polyline_3d_get_numpoints(e).data}dwg_entity_polyline_3d_get_points(e){return this.wasmInstance.dwg_entity_polyline_3d_get_points(e).data}dwg_entity_polyline_3d_get_vertices(e){return this.wasmInstance.dwg_entity_polyline_3d_get_vertices(e).data}dwg_entity_insert_get_attribs(e){return this.wasmInstance.dwg_entity_insert_get_attribs(e).data}dwg_object_dictionary_get_texts(e){return this.wasmInstance.dwg_object_dictionary_get_texts(e).data}static createByWasmInstance(e){return this.instance==null?new Vl(e):this.instance}static async create(e){let t=e==null?await Ki():await Ki({locateFile:n=>`${e}/${n}`});return this.createByWasmInstance(t)}};je(zl,"instance");var Yl=zl;var Mt,Er,ot,ft,Sr,xn,Ii,Bn,Dt,kn,En,Pi,Ri,Li,qt,Gn,Mr,br,Di,Ni,Ar,Tr,wr,Kt,Wn,qe,Oi,Cr,Se,Nt,Ir,Ot,Pr,zn,Oe,Rr,Qa,ja,Lr,Vn,Fi,eo,to,Sn,Dr,Ui,Zt,Yn,Hn,Xn,Nr,Or,$n,Bi,ki,no,Fr,Gi,qn,Wi,zi,Ur,bt,Kn,Jt,io,At,ro,Zn,Qt,Vi,Br,Yi,jt,Jn,en,Qn,so,Hi,tn,yv=((Mt={})[Mt.None=0]="None",Mt[Mt.Anonymous=1]="Anonymous",Mt[Mt.NonConstant=2]="NonConstant",Mt[Mt.Xref=4]="Xref",Mt[Mt.XrefOverlay=8]="XrefOverlay",Mt[Mt.ExternallyDependent=16]="ExternallyDependent",Mt[Mt.ResolvedOrDependent=32]="ResolvedOrDependent",Mt[Mt.ReferencedXref=64]="ReferencedXref",Mt),vv=((Er={})[Er.BYBLOCK=0]="BYBLOCK",Er[Er.BYLAYER=256]="BYLAYER",Er);var xv=Math.PI/24,Ev=((ot={})[ot.Rotated=0]="Rotated",ot[ot.Aligned=1]="Aligned",ot[ot.Angular=2]="Angular",ot[ot.Diameter=3]="Diameter",ot[ot.Radius=4]="Radius",ot[ot.Angular3Point=5]="Angular3Point",ot[ot.Ordinate=6]="Ordinate",ot[ot.ReferenceIsExclusive=32]="ReferenceIsExclusive",ot[ot.IsOrdinateXTypeFlag=64]="IsOrdinateXTypeFlag",ot[ot.IsCustomTextPositionFlag=128]="IsCustomTextPositionFlag",ot),Sv=((ft={})[ft.TopLeft=1]="TopLeft",ft[ft.TopCenter=2]="TopCenter",ft[ft.TopRight=3]="TopRight",ft[ft.MiddleLeft=4]="MiddleLeft",ft[ft.MiddleCenter=5]="MiddleCenter",ft[ft.MiddleRight=6]="MiddleRight",ft[ft.BottomLeft=7]="BottomLeft",ft[ft.BottomCenter=8]="BottomCenter",ft[ft.BottomRight=9]="BottomRight",ft),Mv=((Sr={})[Sr.AtLeast=1]="AtLeast",Sr[Sr.Exact=2]="Exact",Sr),Hl=((xn={})[xn.Center=0]="Center",xn[xn.Above=1]="Above",xn[xn.Outside=2]="Outside",xn[xn.JIS=3]="JIS",xn[xn.Below=4]="Below",xn),bv=((Ii={})[Ii.WithDimension=0]="WithDimension",Ii[Ii.AddLeader=1]="AddLeader",Ii[Ii.Independent=2]="Independent",Ii),Av=((Bn={})[Bn.BothOutside=0]="BothOutside",Bn[Bn.ArrowFirst=1]="ArrowFirst",Bn[Bn.TextFirst=2]="TextFirst",Bn[Bn.Auto=3]="Auto",Bn),Zi=((Dt={})[Dt.Feet=0]="Feet",Dt[Dt.None=1]="None",Dt[Dt.Inch=2]="Inch",Dt[Dt.FeetAndInch=3]="FeetAndInch",Dt[Dt.Leading=4]="Leading",Dt[Dt.Trailing=8]="Trailing",Dt[Dt.LeadingAndTrailing=12]="LeadingAndTrailing",Dt),gf=((kn={})[kn.None=0]="None",kn[kn.Leading=1]="Leading",kn[kn.Trailing=2]="Trailing",kn[kn.LeadingAndTrailing=3]="LeadingAndTrailing",kn),yf=((En={})[En.Center=0]="Center",En[En.First=1]="First",En[En.Second=2]="Second",En[En.OverFirst=3]="OverFirst",En[En.OverSecond=4]="OverSecond",En),vf=((Pi={})[Pi.Bottom=0]="Bottom",Pi[Pi.Center=1]="Center",Pi[Pi.Top=2]="Top",Pi),Tv=((Ri={})[Ri.None=0]="None",Ri[Ri.UseDrawingBackground=1]="UseDrawingBackground",Ri[Ri.Custom=2]="Custom",Ri),wv=((Li={})[Li.Horizontal=0]="Horizontal",Li[Li.Diagonal=1]="Diagonal",Li[Li.NotStacked=2]="NotStacked",Li),Cv=((qt={})[qt.Scientific=1]="Scientific",qt[qt.Decimal=2]="Decimal",qt[qt.Engineering=3]="Engineering",qt[qt.Architectural=4]="Architectural",qt[qt.Fractional=5]="Fractional",qt[qt.WindowDesktop=6]="WindowDesktop",qt),Iv=((Gn={})[Gn.Decimal=0]="Decimal",Gn[Gn.DegreesMinutesSecond=1]="DegreesMinutesSecond",Gn[Gn.Gradian=2]="Gradian",Gn[Gn.Radian=3]="Radian",Gn),Pv=((Mr={})[Mr.PatternFill=0]="PatternFill",Mr[Mr.SolidFill=1]="SolidFill",Mr),Rv=((br={})[br.NonAssociative=0]="NonAssociative",br[br.Associative=1]="Associative",br),Lv=((Di={})[Di.Normal=0]="Normal",Di[Di.Outer=1]="Outer",Di[Di.Ignore=2]="Ignore",Di),Dv=((Ni={})[Ni.UserDefined=0]="UserDefined",Ni[Ni.Predefined=1]="Predefined",Ni[Ni.Custom=2]="Custom",Ni),Nv=((Ar={})[Ar.NotAnnotated=0]="NotAnnotated",Ar[Ar.Annotated=1]="Annotated",Ar),Ov=((Tr={})[Tr.Solid=0]="Solid",Tr[Tr.Gradient=1]="Gradient",Tr),Fv=((wr={})[wr.TwoColor=0]="TwoColor",wr[wr.OneColor=1]="OneColor",wr),xf=((Kt={})[Kt.Default=0]="Default",Kt[Kt.External=1]="External",Kt[Kt.Polyline=2]="Polyline",Kt[Kt.Derived=4]="Derived",Kt[Kt.Textbox=8]="Textbox",Kt[Kt.Outermost=16]="Outermost",Kt),xs=((Wn={})[Wn.Line=1]="Line",Wn[Wn.Circular=2]="Circular",Wn[Wn.Elliptic=3]="Elliptic",Wn[Wn.Spline=4]="Spline",Wn),Ef=((qe={})[qe.Off=0]="Off",qe[qe.Solid=1]="Solid",qe[qe.Dashed=2]="Dashed",qe[qe.Dotted=3]="Dotted",qe[qe.ShotDash=4]="ShotDash",qe[qe.MediumDash=5]="MediumDash",qe[qe.LongDash=6]="LongDash",qe[qe.DoubleShortDash=7]="DoubleShortDash",qe[qe.DoubleMediumDash=8]="DoubleMediumDash",qe[qe.DoubleLongDash=9]="DoubleLongDash",qe[qe.DoubleMediumLongDash=10]="DoubleMediumLongDash",qe[qe.SparseDot=11]="SparseDot",qe),Uv={DRAGVS:"NULL",INTERFERECOLOR:1,INTERFEREOBJVS:"Conceptual",INTERFEREVPVS:"3d Wireframe",OBSLTYPE:Ef.Off,SHADEDIF:70},Bv=((Oi={})[Oi.Standard=-3]="Standard",Oi[Oi.ByLayer=-2]="ByLayer",Oi[Oi.ByBlock=-1]="ByBlock",Oi),kv=((Cr={})[Cr.English=0]="English",Cr[Cr.Metric=1]="Metric",Cr),Gv=((Se={})[Se.PERSPECTIVE_MODE=1]="PERSPECTIVE_MODE",Se[Se.FRONT_CLIPPING=2]="FRONT_CLIPPING",Se[Se.BACK_CLIPPING=4]="BACK_CLIPPING",Se[Se.UCS_FOLLOW=8]="UCS_FOLLOW",Se[Se.FRONT_CLIP_NOT_AT_EYE=16]="FRONT_CLIP_NOT_AT_EYE",Se[Se.UCS_ICON_VISIBILITY=32]="UCS_ICON_VISIBILITY",Se[Se.UCS_ICON_AT_ORIGIN=64]="UCS_ICON_AT_ORIGIN",Se[Se.FAST_ZOOM=128]="FAST_ZOOM",Se[Se.SNAP_MODE=256]="SNAP_MODE",Se[Se.GRID_MODE=512]="GRID_MODE",Se[Se.ISOMETRIC_SNAP_STYLE=1024]="ISOMETRIC_SNAP_STYLE",Se[Se.HIDE_PLOT_MODE=2048]="HIDE_PLOT_MODE",Se[Se.K_ISO_PAIR_TOP=4096]="K_ISO_PAIR_TOP",Se[Se.K_ISO_PAIR_RIGHT=8192]="K_ISO_PAIR_RIGHT",Se[Se.VIEWPORT_ZOOM_LOCKING=16384]="VIEWPORT_ZOOM_LOCKING",Se[Se.UNUSED=32768]="UNUSED",Se[Se.NON_RECTANGULAR_CLIPPING=65536]="NON_RECTANGULAR_CLIPPING",Se[Se.VIEWPORT_OFF=131072]="VIEWPORT_OFF",Se[Se.GRID_BEYOND_DRAWING_LIMITS=262144]="GRID_BEYOND_DRAWING_LIMITS",Se[Se.ADAPTIVE_GRID_DISPLAY=524288]="ADAPTIVE_GRID_DISPLAY",Se[Se.SUBDIVISION_BELOW_SPACING=1048576]="SUBDIVISION_BELOW_SPACING",Se[Se.GRID_FOLLOWS_WORKPLANE=2097152]="GRID_FOLLOWS_WORKPLANE",Se),Wv=((Nt={})[Nt.OPTIMIZED_2D=0]="OPTIMIZED_2D",Nt[Nt.WIREFRAME=1]="WIREFRAME",Nt[Nt.HIDDEN_LINE=2]="HIDDEN_LINE",Nt[Nt.FLAT_SHADED=3]="FLAT_SHADED",Nt[Nt.GOURAUD_SHADED=4]="GOURAUD_SHADED",Nt[Nt.FLAT_SHADED_WITH_WIREFRAME=5]="FLAT_SHADED_WITH_WIREFRAME",Nt[Nt.GOURAUD_SHADED_WITH_WIREFRAME=6]="GOURAUD_SHADED_WITH_WIREFRAME",Nt),zv=((Ir={})[Ir.UCS_UNCHANGED=0]="UCS_UNCHANGED",Ir[Ir.HAS_OWN_UCS=1]="HAS_OWN_UCS",Ir),Vv=((Ot={})[Ot.NON_ORTHOGRAPHIC=0]="NON_ORTHOGRAPHIC",Ot[Ot.TOP=1]="TOP",Ot[Ot.BOTTOM=2]="BOTTOM",Ot[Ot.FRONT=3]="FRONT",Ot[Ot.BACK=4]="BACK",Ot[Ot.LEFT=5]="LEFT",Ot[Ot.RIGHT=6]="RIGHT",Ot),Yv=((Pr={})[Pr.ONE_DISTANT_LIGHT=0]="ONE_DISTANT_LIGHT",Pr[Pr.TWO_DISTANT_LIGHTS=1]="TWO_DISTANT_LIGHTS",Pr),Hv=((zn={})[zn.ByLayer=0]="ByLayer",zn[zn.ByBlock=1]="ByBlock",zn[zn.ByDictionaryDefault=2]="ByDictionaryDefault",zn[zn.ByObject=3]="ByObject",zn),Xv=((Oe={})[Oe.NotAllowed=0]="NotAllowed",Oe[Oe.AllowErase=1]="AllowErase",Oe[Oe.AllowTransform=2]="AllowTransform",Oe[Oe.AllowChangeColor=4]="AllowChangeColor",Oe[Oe.AllowChangeLayer=8]="AllowChangeLayer",Oe[Oe.AllowChangeLinetype=16]="AllowChangeLinetype",Oe[Oe.AllowChangeLinetypeScale=32]="AllowChangeLinetypeScale",Oe[Oe.AllowChangeVisibility=64]="AllowChangeVisibility",Oe[Oe.AllowClone=128]="AllowClone",Oe[Oe.AllowChangeLineweight=256]="AllowChangeLineweight",Oe[Oe.AllowChangePlotStyleName=512]="AllowChangePlotStyleName",Oe[Oe.AllowAllExceptClone=895]="AllowAllExceptClone",Oe[Oe.AllowAll=1023]="AllowAll",Oe[Oe.DisableProxyWarning=1024]="DisableProxyWarning",Oe[Oe.R13FormatProxy=32768]="R13FormatProxy",Oe);function Ee(i,e,t){return i.code===e&&(t==null||i.value===t)}function hi(i){let e={};i.rewind();let t=i.next(),n=t.code;if(e.x=t.value,(t=i.next()).code!==n+10)throw Error("Expected code for point value to be 20 but got "+t.code+".");return e.y=t.value,(t=i.next()).code!==n+20?i.rewind():e.z=t.value,e}var Wr=Symbol();function ce(i,e){return(t,n,r)=>{let a=(function(u,f=!1){return u.reduce((m,g)=>{g.pushContext&&m.push({});let x=m[m.length-1];for(let E of typeof g.code=="number"?[g.code]:g.code){let S=x[E]??(x[E]=[]);g.isMultiple&&S.length&&f&&console.warn(`Snippet ${S[S.length-1].name} for code(${E}) is shadowed by ${g.name}`),S.push(g)}return m},[{}])})(i,n.debug),l=!1,c=a.length-1;for(;!Ee(t,0,"EOF");){let u=(function(b,I,L){return b.find((P,C)=>C>=L&&P[I]?.length)})(a,t.code,c),f=u?.[t.code],m=f?.[f.length-1];if(!u||!m){n.rewind();break}m.isMultiple||u[t.code].pop();let{name:g,parser:x,isMultiple:E,isReducible:S}=m,w=x?.(t,n,r);if(w===Wr){n.rewind();break}if(g){let[b,I]=Sf(r,g);E&&!S?(Object.prototype.hasOwnProperty.call(b,I)||(b[I]=[]),b[I].push(w)):b[I]=w}m.pushContext&&(c-=1),l=!0,t=n.next()}return e&&Object.setPrototypeOf(r,e),l}}function Sf(i,e){let t=e.split(".");if(!t.length)throw Error("[parserGenerator::getObjectByPath] Invalid empty path");let n=i;for(let r=0;r<t.length-1;++r){let a=ao(t[r]),l=ao(t[r+1]);Object.prototype.hasOwnProperty.call(n,a)||(typeof l=="number"?n[a]=[]:n[a]={}),n=n[a]}return[n,ao(t[t.length-1])]}function ao(i){let e=Number.parseInt(i);return Number.isNaN(e)?i:e}function h({value:i}){return i}function B(i,e){return hi(e)}function de({value:i}){return!!i}function Mf({value:i}){return i.trim()}var bf=[{code:281,name:"isEntity",parser:de},{code:280,name:"wasProxy",parser:de},{code:91,name:"instanceCount",parser:h},{code:90,name:"proxyFlag",parser:h},{code:3,name:"appName",parser:h},{code:2,name:"cppClassName",parser:h},{code:1,name:"name",parser:h}],Af=ce(bf),Tf=[{code:0,name:"classes",isMultiple:!0,parser(i,e){if(i.value!=="CLASS")return Wr;i=e.next();let t={};return Af(i,e,t),t}}],wf=ce(Tf),$v=((Rr={})[Rr.RayTrace=0]="RayTrace",Rr[Rr.ShadowMap=1]="ShadowMap",Rr);function Mn(i,e,t){for(;Ee(i,102);){var n;let r=i.value;if(i=e.next(),!r.startsWith("{")){e.debug&&console.warn(`Invalid application group, expected to start with "{" but received: ${r}`),(function(l,c){for(;!Ee(l,102)&&!Ee(l,0,"EOF")&&l.code!==0;)l=c.next()})(i,e),i=e.next();continue}let a=r.slice(1).trim();t.extensions??(t.extensions={}),(n=t.extensions)[a]??(n[a]=[]),(function(l,c,u){for(;!Ee(l,102,"}")&&!Ee(l,0,"EOF")&&l.code!==0;)u.push(l),l=c.next()})(i,e,t.extensions[a]),i=e.next()}e.rewind()}var Cf=[{code:1001,name:"xdata",isMultiple:!0,parser:po}],If=new Set([1010,1011,1012,1013]);function po(i,e){if(!Ee(i,1001))throw Error("XData must starts with code 1001");let t={appName:i.value,value:[]};i=e.next();let n=[t.value];for(;!Ee(i,0,"EOF")&&!Ee(i,1001)&&i.code>=1e3;){let r=n[n.length-1];if(i.code===1002){i.value==="{"?n.push([]):(n.pop(),n[n.length-1]?.push(r)),i=e.next();continue}If.has(i.code)?r.push(hi(e)):r.push(i.value),i=e.next()}return e.rewind(),t}var Ji=class{parseEntity(e,t){let n={},r="none",a=!1;for(;!Ee(t,0,"EOF");){switch(t.code){case 100:t.value==="AcDbProxyEntity"&&(n.subclassMarker="AcDbProxyEntity",a=!0);break;case 90:n.proxyEntityClassId=t.value,r="none";break;case 91:n.applicationEntityClassId=t.value,r="none";break;case 1:a&&(n.originalDxfName=String(t.value));break;case 92:case 160:n.graphicsDataSize=t.value,r="graphics";break;case 93:case 161:n.entityDataSize=t.value,r="entity";break;case 96:case 162:n.unknownDataSize=t.value,r="unknown";break;case 310:r==="graphics"?n.graphicsData=(n.graphicsData??"")+t.value:r==="entity"&&(n.entityData=(n.entityData??"")+t.value);break;case 311:r==="unknown"&&(n.unknownData=(n.unknownData??"")+t.value);break;case 330:case 340:case 350:case 360:r="none",a?(n.linkedObjectIds??(n.linkedObjectIds=[])).push(String(t.value)):t.code===330&&(n.ownerBlockRecordSoftId=String(t.value));break;case 94:r="none";break;case 95:n.objectDrawingFormat=t.value;break;case 70:n.originalDataFormat=t.value;break;case 5:n.handle=String(t.value);break;case 102:Mn(t,e,n);break;case 67:n.isInPaperSpace=!!t.value;break;case 8:n.layer=String(t.value);break;case 6:n.lineType=String(t.value);break;case 347:n.materialObjectHardId=String(t.value);break;case 62:n.colorIndex=t.value;break;case 370:n.lineweight=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.isVisible=!!t.value;break;case 420:n.color=t.value;break;case 430:n.colorName=String(t.value);break;case 440:n.transparency=t.value;break;case 380:n.plotStyleType=t.value;break;case 390:n.plotStyleHardId=String(t.value);break;case 284:n.shadowMode=t.value;break;case 410:n.layoutTabName=String(t.value);break;case 1001:(n.xdata??(n.xdata=[])).push(po(t,e));break;default:return e.rewind(),n}t=e.next()}return e.rewind(),n}};(Qa="ForEntityName")in Ji?Object.defineProperty(Ji,Qa,{value:"ACAD_PROXY_ENTITY",enumerable:!0,configurable:!0,writable:!0}):Ji[Qa]="ACAD_PROXY_ENTITY";var qv=((ja={})[ja.ProxyEntity=498]="ProxyEntity",ja),Kv=((Lr={})[Lr.Dwg=0]="Dwg",Lr[Lr.Dxf=1]="Dxf",Lr),Zv=((Vn={})[Vn.CAST_AND_RECEIVE=0]="CAST_AND_RECEIVE",Vn[Vn.CAST=1]="CAST",Vn[Vn.RECEIVE=2]="RECEIVE",Vn[Vn.IGNORE=3]="IGNORE",Vn),Te=[...Cf,{code:284,name:"shadowMode",parser:h},{code:390,name:"plotStyleHardId",parser:h},{code:380,name:"plotStyleType",parser:h},{code:440,name:"transparency",parser:h},{code:430,name:"colorName",parser:h},{code:420,name:"color",parser:h},{code:310,name:"proxyEntity",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.proxyEntity??"")+i.value},{code:[92,160],name:"proxyByte",parser:h},{code:60,name:"isVisible",parser:de},{code:48,name:"lineTypeScale",parser:h},{code:370,name:"lineweight",parser:h},{code:62,name:"colorIndex",parser:h},{code:347,name:"materialObjectHardId",parser:h},{code:6,name:"lineType",parser:h},{code:8,name:"layer",parser:h},{code:410,name:"layoutTabName",parser:h},{code:67,name:"isInPaperSpace",parser:de},{code:100},{code:330,name:"ownerBlockRecordSoftId",parser:h},{code:102,parser:Mn},{code:102,parser:Mn},{code:102,parser:Mn},{code:5,name:"handle",parser:h}];function Pf(i){return[{code:3,name:i,parser:(e,t,n)=>(n._code3text=(n._code3text??"")+e.value,n._code3text+(n._code1text??"")),isMultiple:!0,isReducible:!0},{code:1,name:i,parser:(e,t,n)=>(n._code1text=e.value,(n._code3text??"")+n._code1text)}]}function jl(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Rf={extrusionDirection:{x:0,y:0,z:1}},Lf=[{code:210,name:"extrusionDirection",parser:B},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:100,name:"subclassMarker",parser:h},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B},{code:39,name:"thickness",parser:h},{code:100},...Te],ws=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){jl(this,"parser",ce(Lf,Rf))}};jl(ws,"ForEntityName","ARC");var Jv=((Fi={})[Fi.BeforeText=0]="BeforeText",Fi[Fi.AboveText=1]="AboveText",Fi[Fi.None=2]="None",Fi),mo=[{name:"DIMPOST",code:3},{name:"DIMAPOST",code:4,defaultValue:""},{name:"DIMBLK_OBSOLETE",code:5},{name:"DIMBLK1_OBSOLETE",code:6},{name:"DIMBLK2_OBSOLETE",code:7},{name:"DIMSCALE",code:40,defaultValue:1},{name:"DIMASZ",code:41,defaultValue:.25},{name:"DIMEXO",code:42,defaultValue:.625,defaultValueImperial:.0625},{name:"DIMDLI",code:43,defaultValue:3.75,defaultValueImperial:.38},{name:"DIMEXE",code:44,defaultValue:2.25,defaultValueImperial:.28},{name:"DIMRND",code:45,defaultValue:0},{name:"DIMDLE",code:46,defaultValue:0},{name:"DIMTP",code:47,defaultValue:0},{name:"DIMTM",code:48,defaultValue:0},{name:"DIMFXL",code:49,defaultValue:1},{name:"DIMJOGANG",code:50,defaultValue:45},{name:"DIMTFILL",code:69,defaultValue:0},{name:"DIMTFILLCLR",code:70,defaultValue:0},{name:"DIMTOL",code:71,defaultValue:0,defaultValueImperial:1},{name:"DIMLIM",code:72,defaultValue:0},{name:"DIMTIH",code:73,defaultValue:0,defaultValueImperial:1},{name:"DIMTOH",code:74,defaultValue:0,defaultValueImperial:1},{name:"DIMSE1",code:75,defaultValue:0},{name:"DIMSE2",code:76,defaultValue:0},{name:"DIMTAD",code:77,defaultValue:Hl.Above,defaultValueImperial:Hl.Center},{name:"DIMZIN",code:78,defaultValue:Zi.Trailing,defaultValueImperial:Zi.Feet},{name:"DIMAZIN",code:79,defaultValue:gf.None},{name:"DIMARCSYM",code:90,defaultValue:0},{name:"DIMTXT",code:140,defaultValue:2.5,defaultValueImperial:.28},{name:"DIMCEN",code:141,defaultValue:2.5,defaultValueImperial:.09},{name:"DIMTSZ",code:142,defaultValue:0},{name:"DIMALTF",code:143,defaultValue:25.4},{name:"DIMLFAC",code:144,defaultValue:1},{name:"DIMTVP",code:145,defaultValue:0},{name:"DIMTFAC",code:146,defaultValue:1},{name:"DIMGAP",code:147,defaultValue:.625,defaultValueImperial:.09},{name:"DIMALTRND",code:148,defaultValue:0},{name:"DIMALT",code:170,defaultValue:0},{name:"DIMALTD",code:171,defaultValue:3,defaultValueImperial:2},{name:"DIMTOFL",code:172,defaultValue:1,defaultValueImperial:0},{name:"DIMSAH",code:173,defaultValue:0},{name:"DIMTIX",code:174,defaultValue:0},{name:"DIMSOXD",code:175,defaultValue:0},{name:"DIMCLRD",code:176,defaultValue:0},{name:"DIMCLRE",code:177,defaultValue:0},{name:"DIMCLRT",code:178,defaultValue:0},{name:"DIMADEC",code:179,defaultValue:0},{name:"DIMUNIT",code:270},{name:"DIMDEC",code:271,defaultValue:2,defaultValueImperial:4},{name:"DIMTDEC",code:272,defaultValue:2,defaultValueImperial:4},{name:"DIMALTU",code:273,defaultValue:2},{name:"DIMALTTD",code:274,defaultValue:3,defaultValueImperial:2},{name:"DIMAUNIT",code:275,defaultValue:0},{name:"DIMFRAC",code:276,defaultValue:0},{name:"DIMLUNIT",code:277,defaultValue:2},{name:"DIMDSEP",code:278,defaultValue:44,defaultValueImperial:46},{name:"DIMTMOVE",code:279,defaultValue:0},{name:"DIMJUST",code:280,defaultValue:yf.Center},{name:"DIMSD1",code:281,defaultValue:0},{name:"DIMSD2",code:282,defaultValue:0},{name:"DIMTOLJ",code:283,defaultValue:vf.Center},{name:"DIMTZIN",code:284,defaultValue:Zi.Trailing,defaultValueImperial:Zi.Feet},{name:"DIMALTZ",code:285,defaultValue:Zi.Trailing},{name:"DIMALTTZ",code:286,defaultValue:Zi.Trailing},{name:"DIMFIT",code:287},{name:"DIMUPT",code:288,defaultValue:0},{name:"DIMATFIT",code:289,defaultValue:3},{name:"DIMFXLON",code:290,defaultValue:0},{name:"DIMTXTDIRECTION",code:294,defaultValue:0},{name:"DIMTXSTY",code:340,defaultValue:"Standard"},{name:"DIMLDRBLK",code:341,defaultValue:""},{name:"DIMBLK",code:342,defaultValue:""},{name:"DIMBLK1",code:343,defaultValue:""},{name:"DIMBLK2",code:344,defaultValue:""},{name:"DIMLTYPE",code:345,defaultValue:""},{name:"DIMLTEX1",code:346,defaultValue:""},{name:"DIMLTEX2",code:347,defaultValue:""},{name:"DIMLWD",code:371,defaultValue:-2},{name:"DIMLWE",code:372,defaultValue:-2}],ec=[{code:3,name:"styleName",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:51,name:"ocsRotation",parser:h},{code:53,name:"textRotation",parser:h},{code:1,name:"text",parser:h},{code:42,name:"measurement",parser:h},{code:72,name:"textLineSpacingStyle",parser:h},{code:71,name:"attachmentPoint",parser:h},{code:70,name:"dimensionType",parser:h},{code:11,name:"textPoint",parser:B},{code:10,name:"definitionPoint",parser:B},{code:2,name:"name",parser:h},{code:280,name:"version",parser:h},{code:100}],Df=[{code:100},{code:52,name:"obliqueAngle",parser:h},{code:50,name:"rotationAngle",parser:h},{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:12,name:"insertionPoint",parser:B},{code:100,name:"subclassMarker",parser:h}],Nf=[{code:16,name:"arcPoint",parser:B},{code:15,name:"centerPoint",parser:B},{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:100,name:"subclassMarker",parser:h}],Of=[{code:14,name:"subDefinitionPoint2",parser:B},{code:13,name:"subDefinitionPoint1",parser:B},{code:100,name:"subclassMarker",parser:h}],Ff=[{code:40,name:"leaderLength",parser:h},{code:15,name:"subDefinitionPoint",parser:B},{code:100,name:"subclassMarker",parser:h}],Uf=[{code:100,parser(i,e,t){let n=(function(r){switch(r){case"AcDbAlignedDimension":return ce(Df);case"AcDb3PointAngularDimension":case"AcDb2LineAngularDimension":return ce(Nf);case"AcDbOrdinateDimension":return ce(Of);case"AcDbRadialDimension":case"AcDbDiametricDimension":return ce(Ff)}return null})(i.value);if(!n)return Wr;n(i,e,t)},pushContext:!0},...mo.map(i=>({...i,parser:h})),...ec,...Te],Qi=class{parseEntity(e,t){let n={};return ce(Uf)(t,e,n),n}};(eo="ForEntityName")in Qi?Object.defineProperty(Qi,eo,{value:"DIMENSION",enumerable:!0,configurable:!0,writable:!0}):Qi[eo]="DIMENSION";var Bf=[{code:73},{code:17,name:"leaderEnd",parser:B},{code:16,name:"leaderStart",parser:B},{code:71,name:"hasLeader",parser:de},{code:41,name:"endAngle",parser:h},{code:40,name:"startAngle",parser:h},{code:70,name:"isPartial",parser:de},{code:15,name:"centerPoint",parser:B},{code:14,name:"xline2Point",parser:B},{code:13,name:"xline1Point",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...mo.map(i=>({...i,parser:h})),...ec,...Te],ji=class{parseEntity(e,t){let n={};return ce(Bf)(t,e,n),n}};(to="ForEntityName")in ji?Object.defineProperty(ji,to,{value:"ARC_DIMENSION",enumerable:!0,configurable:!0,writable:!0}):ji[to]="ARC_DIMENSION";var Qv=((Sn={})[Sn.NONE=0]="NONE",Sn[Sn.INVISIBLE=1]="INVISIBLE",Sn[Sn.CONSTANT=2]="CONSTANT",Sn[Sn.VERIFICATION_REQUIRED=4]="VERIFICATION_REQUIRED",Sn[Sn.PRESET=8]="PRESET",Sn),jv=((Dr={})[Dr.MULTILINE=2]="MULTILINE",Dr[Dr.CONSTANT_MULTILINE=4]="CONSTANT_MULTILINE",Dr),ex=((Ui={})[Ui.NONE=0]="NONE",Ui[Ui.MIRRORED_X=2]="MIRRORED_X",Ui[Ui.MIRRORED_Y=4]="MIRRORED_Y",Ui),kf=((Zt={})[Zt.LEFT=0]="LEFT",Zt[Zt.CENTER=1]="CENTER",Zt[Zt.RIGHT=2]="RIGHT",Zt[Zt.ALIGNED=3]="ALIGNED",Zt[Zt.MIDDLE=4]="MIDDLE",Zt[Zt.FIT=5]="FIT",Zt),Gf=((Yn={})[Yn.BASELINE=0]="BASELINE",Yn[Yn.BOTTOM=1]="BOTTOM",Yn[Yn.MIDDLE=2]="MIDDLE",Yn[Yn.TOP=3]="TOP",Yn);function tc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var nc={thickness:0,rotation:0,xScale:1,obliqueAngle:0,styleName:"STANDARD",generationFlag:0,halign:kf.LEFT,valign:Gf.BASELINE,extrusionDirection:{x:0,y:0,z:1}},ic=[{code:73,name:"valign",parser:h},{code:100},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"endPoint",parser:B},{code:72,name:"valign",parser:h},{code:72,name:"halign",parser:h},{code:71,name:"generationFlag",parser:h},{code:7,name:"styleName",parser:h},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"xScale",parser:h},{code:50,name:"rotation",parser:h},{code:1,name:"text",parser:h},{code:40,name:"textHeight",parser:h},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Cs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){tc(this,"parser",ce(ic,nc))}};function rc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}tc(Cs,"ForEntityName","TEXT");var Wf={...nc},zf=[{code:2},{code:40,name:"annotationScale",parser:h},{code:10,name:"alignmentPoint",parser:B},{code:340,name:"secondaryAttributesHardIds",isMultiple:!0,parser:h},{code:70,name:"numberOfSecondaryAttributes",parser:h},{code:70,name:"isReallyLocked",parser:de},{code:70,name:"mtextFlag",parser:h},{code:280,name:"isDuplicatedRecord",parser:de},{code:100},{code:280,name:"isLocked",parser:de},{code:74,name:"valign",parser:h},{code:73},{code:70,name:"attributeFlag",parser:h},{code:2,name:"tag",parser:h},{code:3,name:"prompt",parser:h},{code:280},{code:100,name:"subclassMarker",parser:h},...ic.slice(2)],Is=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){rc(this,"parser",ce(zf,Wf))}};function Vf(i,e){let t={};for(let n of i){let r=e(n);r!=null&&(t[r]??(t[r]=[]),t[r].push(n))}return t}function*Ps(i,e=1/0,t=1){for(let n=i;n!==e;n+=t)yield n}function co(i){return{x:i.x??0,y:i.y??0,z:i.z??0}}rc(Is,"ForEntityName","ATTDEF");var Yf=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function Hf(i){return Yf[i]}function Xf(i){i.rewind();let e=i.next();if(e.code!==101)throw Error("Bad call for skipEmbeddedObject()");do e=i.next();while(e.code!==0);i.rewind()}function $f(i,e,t){if(Ee(e,102))return Mn(e,t,i),!0;switch(e.code){case 0:i.type=e.value;break;case 5:i.handle=e.value;break;case 330:i.ownerBlockRecordSoftId=e.value;break;case 67:i.isInPaperSpace=!!e.value;break;case 8:i.layer=e.value;break;case 6:i.lineType=e.value;break;case 347:i.materialObjectHardId=e.value;break;case 62:i.colorIndex=e.value,i.color=Hf(Math.abs(e.value));break;case 370:i.lineweight=e.value;break;case 48:i.lineTypeScale=e.value;break;case 60:i.isVisible=!!e.value;break;case 92:i.proxyByte=e.value;break;case 310:i.proxyEntity=e.value;break;case 100:break;case 420:i.color=e.value;break;case 430:i.transparency=e.value;break;case 390:i.plotStyleHardId=e.value;break;case 284:i.shadowMode=e.value;break;case 1001:(i.xdata??(i.xdata=[])).push(po(e,t));break;default:return!1}return!0}function sc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var qf={textStyle:"STANDARD",extrusionDirection:{x:0,y:0,z:1},rotation:0},As=[{code:46,name:"annotationHeight",parser:h},{code:101,parser(i,e){Xf(e)}},{code:50,name:"columnHeight",parser:h},{code:49,name:"columnGutter",parser:h},{code:48,name:"columnWidth",parser:h},{code:79,name:"columnAutoHeight",parser:h},{code:78,name:"columnFlowReversed",parser:h},{code:76,name:"columnCount",parser:h},{code:75,name:"columnType",parser:h},{code:441,name:"backgroundFillTransparency",parser:h},{code:63,name:"backgroundFillColor",parser:h},{code:45,name:"fillBoxScale",parser:h},{code:[...Ps(430,440)],name:"backgroundColor",parser:h},{code:[...Ps(420,430)],name:"backgroundColor",parser:h},{code:90,name:"backgroundFill",parser:h},{code:44,name:"lineSpacing",parser:h},{code:73,name:"lineSpacingStyle",parser:h},{code:50,name:"rotation",parser:h},{code:43},{code:42},{code:11,name:"direction",parser:B},{code:210,name:"extrusionDirection",parser:B},{code:7,name:"styleName",parser:h},...Pf("text"),{code:72,name:"drawingDirection",parser:h},{code:71,name:"attachmentPoint",parser:h},{code:41,name:"width",parser:h},{code:40,name:"height",parser:h},{code:10,name:"insertionPoint",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],Rs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){sc(this,"parser",ce(As,qf))}};function ac(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}sc(Rs,"ForEntityName","MTEXT");var Kf={thickness:0,rotation:0,scale:1,obliqueAngle:0,textStyle:"STANDARD",textGenerationFlag:0,horizontalJustification:0,verticalJustification:0,extrusionDirection:{x:0,y:0,z:1}},Zf=[...As.slice(As.findIndex(({name:i})=>i==="columnType"),As.findIndex(({name:i})=>i==="subclassMarker")+1),{code:100},{code:0,parser(i){if(!Ee(i,0,"MTEXT"))return Wr}},{code:2,name:"definitionTag",parser:h},{code:40,name:"annotationScale",parser:h},{code:10,name:"alignmentPoint",parser:B},{code:340,name:"secondaryAttributesHardId",parser:h},{code:70,name:"numberOfSecondaryAttributes",parser:h},{code:70,name:"isReallyLocked",parser:de},{code:70,name:"mtextFlag",parser:h},{code:280,name:"isDuplicatedEntriesKeep",parser:de},{code:100},{code:280,name:"lockPositionFlag",parser:de},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"alignmentPoint",parser:B},{code:74,name:"verticalJustification",parser:h},{code:72,name:"horizontalJustification",parser:h},{code:71,name:"textGenerationFlag",parser:h},{code:7,name:"textStyle",parser:h},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"scale",parser:h},{code:50,name:"rotation",parser:h},{code:73},{code:70,name:"attributeFlag",parser:h},{code:2,name:"tag",parser:h},{code:280},{code:100,name:"subclassMarker",parser:h},{code:1,name:"text",parser:h},{code:40,name:"textHeight",parser:h},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100},...Te],Ls=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){ac(this,"parser",ce(Zf,Kf))}};function Jf(i){let e="";for(let t=0;t<i.length;t++){let n=i.charCodeAt(t);e+=n<=32?i[t]:String.fromCharCode(159-n)}return e}function Qf(i){let e=i.trimStart();return!(!e||/^\d/.test(e)||/^ACIS/i.test(e)||/^ASM/i.test(e)||/^(body|point|plane|cone|cylinder|sphere|torus|lump|shell|face|edge|wire|transform)\b/i.test(e)||/\b(body|point|straight-curve|ellipse-curve)\s+\$/.test(e))}function oc(i){return i&&Qf(i)?Jf(i):i}function Xl(i){return i.length===0?"":i.map(e=>oc(e)).join(`
`)}function $l(i,e,t){if(e===1||i.length===0)return void i.push(t);i[i.length-1]+=t}function jf(i){return i.length===0?"":oc(i.join(""))}function _o(i){return[{code:3,name:i,parser(e,t,n){let r=n._acisPayloadLines??(n._acisPayloadLines=[]);return $l(r,3,String(e.value)),n[i]=Xl(r),n[i]},isMultiple:!0,isReducible:!0},{code:1,name:i,parser(e,t,n){let r=n._acisPayloadLines??(n._acisPayloadLines=[]);return $l(r,1,String(e.value)),n[i]=Xl(r),n[i]},isMultiple:!0,isReducible:!0}]}function lc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}ac(Ls,"ForEntityName","ATTRIB");var ep=[..._o("data"),{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Ds=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){lc(this,"parser",ce(ep))}};function cc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}lc(Ds,"ForEntityName","BODY");var tp={thickness:0,extrusionDirection:{x:0,y:0,z:1}},np=[{code:210,name:"extrusionDirection",parser:B},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Ns=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){cc(this,"parser",ce(np,tp))}};function dc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}cc(Ns,"ForEntityName","CIRCLE");var ip={extrusionDirection:{x:0,y:0,z:1}},rp=[{code:42,name:"endAngle",parser:h},{code:41,name:"startAngle",parser:h},{code:40,name:"axisRatio",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:11,name:"majorAxisEndPoint",parser:B},{code:10,name:"center",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],Os=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){dc(this,"parser",ce(rp,ip))}};function uc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}dc(Os,"ForEntityName","ELLIPSE");var sp=[{code:70,name:"invisibleEdgeFlags",parser:h},{code:13,name:"vertices.3",parser:B},{code:12,name:"vertices.2",parser:B},{code:11,name:"vertices.1",parser:B},{code:10,name:"vertices.0",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],Fs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){uc(this,"parser",ce(sp))}};uc(Fs,"ForEntityName","3DFACE");var tx=((Hn={})[Hn.First=1]="First",Hn[Hn.Second=2]="Second",Hn[Hn.Third=4]="Third",Hn[Hn.Fourth=8]="Fourth",Hn);function kr(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var uo=class{getReadIndex(){return this._pointer}getLines(){return this._data}next(){if(!this.hasNext())return this._eof?this.debug&&console.warn("Cannot call 'next' after EOF group has been read"):this.debug&&console.warn("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]),{code:0,value:"EOF"};let e=this._data[this._pointer++],t=parseInt(e,10);Number.isNaN(t)&&ql(e);let n=ho(t,this._data[this._pointer++],this.debug),r={code:t,value:n};return Ee(r,0,"EOF")&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?Error("Cannot call 'next' after EOF group has been read"):Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e=this._data[this._pointer],t=parseInt(e,10);Number.isNaN(t)&&ql(e);let n={code:t,value:0};return n.value=ho(n.code,this._data[this._pointer+1],this.debug),n}rewind(e){e=e||1,this._pointer=this._pointer-2*e}hasNext(){return!this._eof&&!(this._pointer>this._data.length-2)}isEOF(){return this._eof}constructor(e,t=!1){kr(this,"_data",void 0),kr(this,"debug",void 0),kr(this,"_pointer",void 0),kr(this,"_eof",void 0),kr(this,"lastReadGroup",void 0),this._data=e,this.debug=t,this.lastReadGroup={code:0,value:0},this._pointer=0,this._eof=!1}};function ho(i,e,t=!1){var n;let r=(n=e).endsWith("\r")?n.slice(0,-1):n;return i<=9?r:i>=10&&i<=59?parseFloat(e.trim()):i>=60&&i<=99?parseInt(e.trim()):i>=100&&i<=109?r:i>=110&&i<=149?parseFloat(e.trim()):i>=160&&i<=179?parseInt(e.trim()):i>=210&&i<=239?parseFloat(e.trim()):i>=270&&i<=289?parseInt(e.trim()):i>=290&&i<=299?(function(a){let l=a.trim().toLowerCase();if(l===""||l==="0"||l==="false"||l==="f"||l==="no")return!1;if(l==="1"||l==="true"||l==="t"||l==="yes")return!0;let c=Number.parseFloat(l);if(!Number.isNaN(c))return c!==0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")})(e.trim()):i>=300&&i<=369?r:i>=370&&i<=389?parseInt(e.trim()):i>=390&&i<=399?r:i>=400&&i<=409?parseInt(e.trim()):i>=410&&i<=419?r:i>=420&&i<=429?parseInt(e.trim()):i>=430&&i<=439?r:i>=440&&i<=459?parseInt(e.trim()):i>=460&&i<=469?parseFloat(e.trim()):i>=470&&i<=481||i===999||i>=1e3&&i<=1009?r:i>=1010&&i<=1059?parseFloat(e.trim()):i>=1060&&i<=1071?parseInt(e.trim()):(t&&console.warn("WARNING: Group code does not have a defined type: %j",{code:i,value:e}),r)}function ql(i){let e=i.length>120?`${i.slice(0,120)}\u2026`:i;throw Error(`Invalid DXF group code line: "${e}". Expected a numeric group code (often caused by binary DXF, UTF-16-encoded DXF, or stray blank lines). Use ASCII/text DXF or remove blank lines between code/value pairs.`)}var hc=[{code:330,name:"sourceBoundaryObjects",parser:h,isMultiple:!0},{code:97,name:"numberOfSourceBoundaryObjects",parser:h}],ap=[{code:11,name:"end",parser:B},{code:10,name:"start",parser:B}],op=[{code:73,name:"isCCW",parser:de},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:40,name:"radius",parser:h},{code:10,name:"center",parser:B}],lp=[{code:73,name:"isCCW",parser:de},{code:51,name:"endAngle",parser:h},{code:50,name:"startAngle",parser:h},{code:40,name:"lengthOfMinorAxis",parser:h},{code:11,name:"end",parser:B},{code:10,name:"center",parser:B}],cp=[{code:13,name:"endTangent",parser:B},{code:12,name:"startTangent",parser:B},{code:11,name:"fitDatum",isMultiple:!0,parser:B},{code:97,name:"numberOfFitData",parser:h},{code:10,name:"controlPoints",isMultiple:!0,parser(i,e){let t={...hi(e),weight:1};return(i=e.next()).code===42?t.weight=i.value:e.rewind(),t}},{code:40,name:"knots",isMultiple:!0,parser:h},{code:96,name:"numberOfControlPoints",parser:h},{code:95,name:"numberOfKnots",parser:h},{code:74,name:"isPeriodic",parser:de},{code:73,name:"splineFlag",parser:h},{code:94,name:"degree",parser:h}],dp={[xs.Line]:ap,[xs.Circular]:op,[xs.Elliptic]:lp,[xs.Spline]:cp},up=[...hc,{code:72,name:"edges",parser(i,e){let t={type:i.value},n=dp[t.type];if(n==null)throw Error(`Unsupported HATCH boundary edge type: ${t.type} (expected 1\u20134: line, arc, elliptic arc, spline). This often happens when a polyline hatch boundary is parsed as edge segments (e.g. group 92 boundary flag missing the polyline bit). Try re-saving as ASCII DXF or simplifying hatch boundaries in CAD.`);return ce(n)(i=e.next(),e,t),t},isMultiple:!0},{code:93,name:"numberOfEdges",parser:h}],hp=[...hc,{code:10,name:"vertices",parser(i,e){let t={...hi(e),bulge:0};return(i=e.next()).code===42?t.bulge=i.value:e.rewind(),t},isMultiple:!0},{code:93,name:"numberOfVertices",parser:h},{code:73,name:"isClosed",parser:de},{code:72,name:"hasBulge",parser:de}];function fp(i,e){let t={boundaryPathTypeFlag:i.value},n=!!(t.boundaryPathTypeFlag&xf.Polyline),r=e.getReadIndex();return i=e.next(),!n&&(function(a,l){let c=Math.min(a.length,l+120),u=l;for(;u<c-1;){let f=parseInt(a[u],10);if(Number.isNaN(f))break;if(f===93){if(u+3>=a.length||parseInt(a[u+2],10)!==72)return!1;let m=ho(72,a[u+3]);if(m===0)return!0;if(m===1){if(u+5<a.length&&parseInt(a[u+4],10)===73)return!0;if(u+8<a.length&&parseInt(a[u+4],10)===10){let g=parseInt(a[u+8],10);if(g===10||g===42)return!0}}break}if(f===0)break;u+=2}return!1})(e.getLines(),r)&&(n=!0),n?ce(hp)(i,e,t):ce(up)(i,e,t),t}var pp=[{code:49,name:"dashLengths",parser:h,isMultiple:!0},{code:79,name:"numberOfDashLengths",parser:h},{code:45,name:"offset",parser:Kl},{code:43,name:"base",parser:Kl},{code:53,name:"angle",parser:h}];function Kl(i,e){let t=i.code+1,n={x:i.value,y:1};return(i=e.next()).code===t?n.y=i.value:e.rewind(),n}function mp(i,e){let t={};return ce(pp)(i,e,t),t}function _p(i,e){let t=[];for(;i.code===463;){let n={reservedField:i.value};if((i=e.next()).code===63&&(n.colorIndex=i.value,i=e.next()),i.code===421)n.rgb=i.value,t.push(n),i=e.next();else{e.rewind();break}}return i.code!==463&&t.length>0&&e.rewind(),t}function fc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var gp={extrusionDirection:{x:0,y:0,z:1},gradientRotation:0,colorTint:0},yp=[{code:470,name:"gradientName",parser:h},{code:463,name:"gradientColors",parser:_p},{code:462,name:"colorTint",parser:h},{code:461,name:"gradientDefinition",parser:h},{code:460,name:"gradientRotation",parser:h},{code:453,name:"numberOfColors",parser:h},{code:452,name:"gradientColorFlag",parser:h},{code:451},{code:450,name:"gradientFlag",parser:h},{code:10,name:"seedPoints",parser:B,isMultiple:!0},{code:99},{code:11,name:"offsetVector",parser:B},{code:98,name:"numberOfSeedPoints",parser:h},{code:47,name:"pixelSize",parser:h},{code:53,name:"definitionLines",parser:mp,isMultiple:!0},{code:78,name:"numberOfDefinitionLines",parser:h},{code:77,name:"isDouble",parser:de},{code:73,name:"isAnnotated",parser:de},{code:41,name:"patternScale",parser:h},{code:52,name:"patternAngle",parser:h},{code:76,name:"patternType",parser:h},{code:75,name:"hatchStyle",parser:h},{code:92,name:"boundaryPaths",parser:fp,isMultiple:!0},{code:91,name:"numberOfBoundaryPaths",parser:h},{code:71,name:"associativity",parser:h},{code:63,name:"patternFillColor",parser:h},{code:70,name:"solidFill",parser:h},{code:2,name:"patternName",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:10,name:"elevationPoint",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Te],Us=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){fc(this,"parser",ce(yp,gp))}};function pc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}fc(Us,"ForEntityName","HATCH");var vp={brightness:50,contrast:50,fade:0,clippingBoundaryPath:[]},xp=[{code:290,name:"clipMode",parser:h},{code:14,name:"clippingBoundaryPath",isMultiple:!0,parser:B},{code:91,name:"countBoundaryPoints",parser:h},{code:71,name:"clippingBoundaryType",parser:h},{code:360,name:"imageDefReactorHandle",parser:h},{code:283,name:"fade",parser:h},{code:282,name:"contrast",parser:h},{code:281,name:"brightness",parser:h},{code:280,name:"isClipped",parser:de},{code:70,name:"flags",parser:h},{code:340,name:"imageDefHandle",parser:h},{code:13,name:"imageSize",parser:B},{code:12,name:"vPixel",parser:B},{code:11,name:"uPixel",parser:B},{code:10,name:"position",parser:B},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Bs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){pc(this,"parser",ce(xp,vp))}};pc(Bs,"ForEntityName","IMAGE");var nx=((Xn={})[Xn.ShowImage=1]="ShowImage",Xn[Xn.ShowImageWhenNotAlignedWithScreen=2]="ShowImageWhenNotAlignedWithScreen",Xn[Xn.UseClippingBoundary=4]="UseClippingBoundary",Xn[Xn.TransparencyIsOn=8]="TransparencyIsOn",Xn),ix=((Nr={})[Nr.Rectangular=1]="Rectangular",Nr[Nr.Polygonal=2]="Polygonal",Nr),rx=((Or={})[Or.Outside=0]="Outside",Or[Or.Inside=1]="Inside",Or);function mc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Ep={xScale:1,yScale:1,zScale:1,rotation:0,columnCount:0,rowCount:0,columnSpacing:0,rowSpacing:0,extrusionDirection:{x:0,y:0,z:1}},Sp=[{code:210,name:"extrusionDirection",parser:B},{code:45,name:"rowSpacing",parser:h},{code:44,name:"columnSpacing",parser:h},{code:71,name:"rowCount",parser:h},{code:70,name:"columnCount",parser:h},{code:50,name:"rotation",parser:h},{code:43,name:"zScale",parser:h},{code:42,name:"yScale",parser:h},{code:41,name:"xScale",parser:h},{code:10,name:"insertionPoint",parser:B},{code:2,name:"name",parser:h},{code:66,name:"isVariableAttributes",parser:de},{code:100,name:"subclassMarker",parser:h},...Te],ks=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){mc(this,"parser",ce(Sp,Ep))}};function _c(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}mc(ks,"ForEntityName","INSERT");var Mp={isArrowheadEnabled:!0},bp=[{code:213,name:"offsetFromAnnotation",parser:B},{code:212,name:"offsetFromBlock",parser:B},{code:211,name:"horizontalDirection",parser:B},{code:210,name:"normal",parser:B},{code:340,name:"associatedAnnotation",parser:h},{code:77,name:"byBlockColor",parser:h},{code:10,name:"vertices",parser:B,isMultiple:!0},{code:76,name:"numberOfVertices",parser:h},{code:41,name:"textWidth",parser:h},{code:40,name:"textHeight",parser:h},{code:75,name:"isHooklineExists",parser:de},{code:74,name:"isHooklineSameDirection",parser:de},{code:73,name:"leaderCreationFlag",parser:h},{code:72,name:"isSpline",parser:de},{code:71,name:"isArrowheadEnabled",parser:de},{code:3,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Gs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){_c(this,"parser",ce(bp,Mp))}};_c(Gs,"ForEntityName","LEADER");var sx=(($n={})[$n.TextAnnotation=0]="TextAnnotation",$n[$n.ToleranceAnnotation=1]="ToleranceAnnotation",$n[$n.BlockReferenceAnnotation=2]="BlockReferenceAnnotation",$n[$n.NoAnnotation=3]="NoAnnotation",$n);function gc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Ap={thickness:0,extrusionDirection:{x:0,y:0,z:1}},Tp=[{code:210,name:"extrusionDirection",parser:B},{code:11,name:"endPoint",parser:B},{code:10,name:"startPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Ws=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){gc(this,"parser",ce(Tp,Ap))}};function yc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}gc(Ws,"ForEntityName","LINE");var wp=[{code:280,name:"shadowMapSoftness",parser:h},{code:91,name:"shadowMapSize",parser:h},{code:73,name:"shadowType",parser:h},{code:293,name:"isShadowCast",parser:de},{code:51,name:"falloffAngle",parser:h},{code:50,name:"hotspotAngle",parser:h},{code:42,name:"limitEnd",parser:h},{code:41,name:"limitStart",parser:h},{code:292,name:"isAttenuationLimited",parser:de},{code:72,name:"attenuationType",parser:h},{code:11,name:"target",parser:B},{code:10,name:"position",parser:B},{code:40,name:"intensity",parser:h},{code:291,name:"isPlotGlyph",parser:de},{code:290,name:"isOn",parser:de},{code:421,name:"lightColorInstance",parser:h},{code:63,name:"lightColorIndex",parser:h},{code:70,name:"lightType",parser:h},{code:1,name:"name",parser:h},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],zs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){yc(this,"parser",ce(wp))}};yc(zs,"ForEntityName","LIGHT");var ax=((Bi={})[Bi.Distant=1]="Distant",Bi[Bi.Point=2]="Point",Bi[Bi.Spot=3]="Spot",Bi),ox=((ki={})[ki.None=0]="None",ki[ki.InverseLinear=1]="InverseLinear",ki[ki.InverseSquare=2]="InverseSquare",ki),Cp={flag:0,elevation:0,thickness:0,extrusionDirection:{x:0,y:0,z:1},vertices:[]},Ip={bulge:0},Pp=[{code:42,name:"bulge",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:91,name:"id",parser:h},{code:20,name:"y",parser:h},{code:10,name:"x",parser:h}],Rp=[{code:210,name:"extrusionDirection",parser:B},{code:10,name:"vertices",isMultiple:!0,parser(i,e){let t={};return ce(Pp,Ip)(i,e,t),t}},{code:39,name:"thickness",parser:h},{code:38,name:"elevation",parser:h},{code:43,name:"constantWidth",parser:h},{code:70,name:"flag",parser:h},{code:90,name:"numberOfVertices",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],er=class{parseEntity(e,t){let n={};return ce(Rp,Cp)(t,e,n),n}};(no="ForEntityName")in er?Object.defineProperty(er,no,{value:"LWPOLYLINE",enumerable:!0,configurable:!0,writable:!0}):er[no]="LWPOLYLINE";var lx=((Fr={})[Fr.IS_CLOSED=1]="IS_CLOSED",Fr[Fr.PLINE_GEN=128]="PLINE_GEN",Fr);function vc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Lp=[{code:90,name:"overridenSubEntityCount",parser:h},{code:140,name:"edgeCreaseWeights",parser:h,isMultiple:!0},{code:95,name:"edgeCreaseCount",parser:h},{code:94,parser(i,e,t){t.edgeCount=i.value,t.edgeIndices=[];for(let n=0;n<t.edgeCount;++n){let r=[];i=e.next(),r[0]=i.value,i=e.next(),r[1]=i.value,t.edgeIndices.push(r)}}},{code:93,parser(i,e,t){t.totalFaceIndices=i.value,t.faceIndices=[];let n=[];for(let a=0;a<t.totalFaceIndices&&!Ee(i,0);++a)i=e.next(),n.push(i.value);let r=0;for(;r<n.length;){let a=n[r++],l=[];for(let c=0;c<a;++c)l.push(n[r++]);t.faceIndices.push(l)}}},{code:10,name:"vertices",parser:B,isMultiple:!0},{code:92,name:"verticesCount",parser:h},{code:91,name:"subdivisionLevel",parser:h},{code:40,name:"blendCrease",parser:h},{code:72,name:"isBlendCreased",parser:de},{code:71,name:"version",parser:h},{code:100,name:"subclassMarker",parser:Mf,pushContext:!0},...Te],Vs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){vc(this,"parser",ce(Lp))}};function xc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}vc(Vs,"ForEntityName","MESH");var Dp=[{code:42,name:"fillParameters",parser:h,isMultiple:!0},{code:75,name:"fillCount",parser:h},{code:41,name:"parameters",parser:h,isMultiple:!0},{code:74,name:"parameterCount",parser:h}],Np=[{code:[74,41,75,42],name:"elements",parser(i,e){let t=ce(Dp),n={};return t(i,e,n),n},isMultiple:!0},{code:13,name:"miterDirection",parser:B},{code:12,name:"direction",parser:B},{code:11,name:"position",parser:B}],Op=[{code:[11,12,13],name:"segments",parser(i,e){let t=ce(Np),n={};return t(i,e,n),n},isMultiple:!0},{code:210,name:"extrusionDirection",parser:B},{code:10,name:"startPosition",parser:B},{code:73,name:"styleCount",parser:h},{code:72,name:"vertexCount",parser:h},{code:71,name:"flags",parser:h},{code:70,name:"justification",parser:h},{code:40,name:"scale",parser:h},{code:340,name:"styleObjectHandle",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Te],Ys=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){xc(this,"parser",ce(Op))}};xc(Ys,"ForEntityName","MLINE");var cx=((Gi={})[Gi.Top=0]="Top",Gi[Gi.Zero=1]="Zero",Gi[Gi.Bottom=2]="Bottom",Gi),dx=((qn={})[qn.HasVertex=1]="HasVertex",qn[qn.Closed=2]="Closed",qn[qn.SuppressStartCaps=4]="SuppressStartCaps",qn[qn.SuppressEndCaps=8]="SuppressEndCaps",qn),ux=((Wi={})[Wi.LEFT_TO_RIGHT=1]="LEFT_TO_RIGHT",Wi[Wi.TOP_TO_BOTTOM=3]="TOP_TO_BOTTOM",Wi[Wi.BY_STYLE=5]="BY_STYLE",Wi);function Ec(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Fp={},Up=[{code:300,parser:function(i,e,t){let n;if(i.value==="CONTEXT_DATA{")for(;e.hasNext();){var r;if((n=e.next()).code===301)break;switch(n.code){case 10:t.contentBasePosition=Tt(n,e);break;case 11:t.normal=Tt(n,e);break;case 12:t.textAnchor=Tt(n,e);break;case 13:t.textDirection=Tt(n,e);break;case 14:jn(t).normal=Tt(n,e);break;case 15:jn(t).position=Tt(n,e);break;case 16:jn(t).scale=Tt(n,e);break;case 40:t.contentScale=n.value;break;case 41:case 44:t.textHeight=n.value;break;case 42:t.textRotation=n.value;break;case 43:t.textWidth=n.value;break;case 45:t.textLineSpacingFactor=n.value;break;case 46:jn(t).rotation=n.value;break;case 47:(r=jn(t)).transformationMatrix??(r.transformationMatrix=[]),jn(t).transformationMatrix?.push(n.value);break;case 90:t.textColor=n.value;break;case 91:t.textBackgroundColor=n.value;break;case 92:t.textBackgroundTransparency=n.value;break;case 93:jn(t).color=n.value;break;case 110:t.planeOrigin=Tt(n,e);break;case 111:t.planeXAxisDirection=Tt(n,e);break;case 112:t.planeYAxisDirection=Tt(n,e);break;case 140:t.arrowheadSize=n.value;break;case 141:t.textBackgroundScaleFactor=n.value;break;case 142:t.textColumnWidth=n.value;break;case 143:t.textColumnGutterWidth=n.value;break;case 144:t.textColumnHeight=n.value;break;case 145:t.landingGap=n.value;break;case 170:t.textLineSpacingStyle=n.value;break;case 171:t.textAttachment=n.value;break;case 172:t.textFlowDirection=n.value;break;case 173:t.textColumnType=n.value;break;case 290:t.hasMText=n.value;break;case 291:t.textBackgroundColorOn=n.value;break;case 292:t.textFillOn=n.value;break;case 293:t.textUseAutoHeight=n.value;break;case 294:t.textColumnFlowReversed=n.value;break;case 295:t.textUseWordBreak=n.value;break;case 296:t.hasBlock=n.value;break;case 297:t.planeNormalReversed=n.value;break;case 302:n.value==="LEADER{"&&(t.leaderSections??(t.leaderSections=[]),t.leaderSections.push((function(a,l){let c,u;if(a.value!=="LEADER{")return{leaderLines:[]};let f={leaderLines:[]};for(;l.hasNext();){if((u=l.next()).code===303){Es(f,c);break}switch(u.code){case 290:f.lastLeaderLinePointSet=u.value;break;case 291:f.doglegVectorSet=u.value;break;case 10:f.lastLeaderLinePoint=Tt(u,l);break;case 11:f.doglegVector=Tt(u,l);break;case 12:c??(c={}),c.start=Tt(u,l);break;case 13:c??(c={}),c.end=Tt(u,l),Es(f,c),c=void 0;break;case 90:f.leaderBranchIndex=u.value;break;case 40:f.doglegLength=u.value;break;case 304:u.value==="LEADER_LINE{"&&f.leaderLines.push((function(m,g){let x,E;if(m.value!=="LEADER_LINE{")return{vertices:[]};let S={vertices:[]};for(;g.hasNext();){if((E=g.next()).code===305){Es(S,x);break}switch(E.code){case 10:S.vertices.push(Tt(E,g));break;case 11:x??(x={}),x.start=Tt(E,g);break;case 12:x??(x={}),x.end=Tt(E,g),Es(S,x),x=void 0;break;case 90:S.breakPointIndexes??(S.breakPointIndexes=[]),S.breakPointIndexes.push(E.value),x??(x={}),x.index=E.value;break;case 91:S.leaderLineIndex=E.value}}return S})(u,l))}}return f})(n,e)));break;case 304:n.value!=="LEADER_LINE{"&&(t.textContent=n.value,t.contentType??(t.contentType=2));break;case 340:t.textStyleId=n.value;break;case 341:t.blockContentId=n.value,jn(t).blockContentId=n.value}}}},{code:270,name:"version",parser:h},{code:340,name:"leaderStyleId",parser:h},{code:90,name:"propertyOverrideFlag",parser:h},{code:170,name:"leaderLineType",parser:h},{code:91,name:"leaderLineColor",parser:h},{code:341,name:"leaderLineTypeId",parser:h},{code:171,name:"leaderLineWeight",parser:h},{code:290,name:"landingEnabled",parser:de},{code:291,name:"doglegEnabled",parser:de},{code:[40,41],name:"doglegLength",parser:h},{code:342,name:"arrowheadId",parser:h},{code:42,name:"arrowheadSize",parser:h},{code:172,name:"contentType",parser:h},{code:343,name:"textStyleId",parser:h},{code:173,name:"textLeftAttachmentType",parser:h},{code:95,name:"textRightAttachmentType",parser:h},{code:174,name:"textAngleType",parser:h},{code:175,name:"textAlignmentType",parser:h},{code:92,name:"textColor",parser:h},{code:292,name:"textFrameEnabled",parser:de},{code:344,parser:function(i,e,t){t.blockContentId=i.value,jn(t).blockContentId=i.value}},{code:93,name:"blockContentColor",parser:h},{code:10,name:"blockContentScale",parser:B},{code:43,name:"blockContentRotation",parser:h},{code:176,name:"blockContentConnectionType",parser:h},{code:293,name:"annotativeScaleEnabled",parser:de},{code:94,parser:function(i,e,t){t.arrowheadOverrides??(t.arrowheadOverrides=[]),t.arrowheadOverrides.push({index:i.value})},isMultiple:!0},{code:345,parser:function(i,e,t){var n;((n=t).arrowheadOverrides??(n.arrowheadOverrides=[]),n.arrowheadOverrides.length||n.arrowheadOverrides.push({}),n.arrowheadOverrides[n.arrowheadOverrides.length-1]).handle=i.value},isMultiple:!0},{code:330,parser:function(i,e,t){t.blockAttributes??(t.blockAttributes=[]),t.blockAttributes.push({id:i.value})},isMultiple:!0},{code:177,parser:function(i,e,t){oo(t).index=i.value},isMultiple:!0},{code:44,parser:function(i,e,t){oo(t).width=i.value},isMultiple:!0},{code:302,parser:function(i,e,t){oo(t).text=i.value},isMultiple:!0},{code:294,name:"textDirectionNegative",parser:de},{code:178,name:"textAlignInIPE",parser:h},{code:179,name:"textAttachmentPoint",parser:h},{code:271,name:"textAttachmentDirection",parser:h},{code:272,name:"bottomTextAttachmentDirection",parser:h},{code:273,name:"topTextAttachmentDirection",parser:h},{code:100,name:"subclassMarker",parser:h},...Te];function Tt(i,e){return co(B(i,e))}function Es(i,e){(e?.start||e?.end)&&(i.breaks??(i.breaks=[]),i.breaks.push(e))}function jn(i){return i.blockContent??(i.blockContent={})}function oo(i){return i.blockAttributes??(i.blockAttributes=[]),i.blockAttributes.length||i.blockAttributes.push({}),i.blockAttributes[i.blockAttributes.length-1]}var Hs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ec(this,"parser",ce(Up,Fp))}};function Sc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ec(Hs,"ForEntityName","MULTILEADER");var Bp={data:""},kp=[{code:1},{code:90,name:"dataSize",parser:h},{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te,{code:310,name:"data",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.data??"")+i.value}],Xs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Sc(this,"parser",ce(kp,Bp))}};function Mc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Sc(Xs,"ForEntityName","OLEFRAME");var Gp={data:""},Wp=[{code:1},{code:90,name:"dataSize",parser:h},{code:73,name:"quality",parser:h},{code:72,name:"tileMode",parser:h},{code:71,name:"oleObjectType",parser:h},{code:11,name:"lowerRightCorner",parser:B},{code:10,name:"upperLeftCorner",parser:B},{code:3,name:"name",parser:h},{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te,{code:310,name:"data",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.data??"")+i.value}],$s=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Mc(this,"parser",ce(Wp,Gp))}};Mc($s,"ForEntityName","OLE2FRAME");var hx=((zi={})[zi.Link=1]="Link",zi[zi.Embedded=2]="Embedded",zi[zi.Static=3]="Static",zi),fx=((Ur={})[Ur.ModelSpace=0]="ModelSpace",Ur[Ur.PaperSpace=1]="PaperSpace",Ur);function bc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var zp={thickness:0,extrusionDirection:{x:0,y:0,z:1},angle:0},Vp=[{code:50,name:"angle",parser:h},{code:210,name:"extrusionDirection",parser:B},{code:39,name:"thickness",parser:h},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],qs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){bc(this,"parser",ce(Vp,zp))}};function Ac(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}bc(qs,"ForEntityName","POINT");var Yp={startWidth:0,endWidth:0,bulge:0},Hp=[{code:91,name:"id",parser:h},{code:[...Ps(71,75)],name:"faces",isMultiple:!0,parser:h},{code:50,name:"tangentDirection",parser:h},{code:70,name:"flag",parser:h},{code:42,name:"bulge",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:30,name:"z",parser:h},{code:20,name:"y",parser:h},{code:10,name:"x",parser:h},{code:100,name:"subclassMarker",parser:h},{code:100},...Te],Gr=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ac(this,"parser",ce(Hp,Yp))}};function Tc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ac(Gr,"ForEntityName","VERTEX");var Xp={thickness:0,flag:0,startWidth:0,endWidth:0,meshMVertexCount:0,meshNVertexCount:0,surfaceMDensity:0,surfaceNDensity:0,smoothType:0,extrusionDirection:{x:0,y:0,z:1},vertices:[]},$p=[{code:0,name:"vertices",isMultiple:!0,parser:(i,e)=>Ee(i,0,"VERTEX")?(i=e.next(),new Gr().parseEntity(e,i)):Wr},{code:210,name:"extrusionDirection",parser:B},{code:75,name:"smoothType",parser:h},{code:74,name:"surfaceNDensity",parser:h},{code:73,name:"surfaceMDensity",parser:h},{code:72,name:"meshNVertexCount",parser:h},{code:71,name:"meshMVertexCount",parser:h},{code:41,name:"endWidth",parser:h},{code:40,name:"startWidth",parser:h},{code:70,name:"flag",parser:h},{code:39,name:"thickness",parser:h},{code:30,name:"elevation",parser:h},{code:20},{code:10},{code:66},{code:100,name:"subclassMarker",parser:h},...Te],Ks=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Tc(this,"parser",ce($p,Xp))}};Tc(Ks,"ForEntityName","POLYLINE");var px=((bt={})[bt.CLOSED_POLYLINE=1]="CLOSED_POLYLINE",bt[bt.CURVE_FIT=2]="CURVE_FIT",bt[bt.SPLINE_FIT=4]="SPLINE_FIT",bt[bt.POLYLINE_3D=8]="POLYLINE_3D",bt[bt.POLYGON_3D=16]="POLYGON_3D",bt[bt.CLOSED_POLYGON=32]="CLOSED_POLYGON",bt[bt.POLYFACE=64]="POLYFACE",bt[bt.CONTINUOUS=128]="CONTINUOUS",bt),mx=((Kn={})[Kn.NONE=0]="NONE",Kn[Kn.QUADRATIC=5]="QUADRATIC",Kn[Kn.CUBIC=6]="CUBIC",Kn[Kn.BEZIER=8]="BEZIER",Kn);function wc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var qp=[{code:11,name:"direction",parser:B},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],Zs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){wc(this,"parser",ce(qp))}};function Cc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}wc(Zs,"ForEntityName","RAY");var Kp=[..._o("data"),{code:70,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Js=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Cc(this,"parser",ce(Kp))}};function Ic(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Cc(Js,"ForEntityName","REGION");var Zp={vertices:[],backLineVertices:[]},Jp=[{code:360,name:"geometrySettingHardId",parser:h},{code:12,name:"backLineVertices",isMultiple:!0,parser:B},{code:93,name:"numberOfBackLineVertices",parser:h},{code:11,name:"vertices",isMultiple:!0,parser:B},{code:92,name:"verticesCount",parser:h},{code:[63,411],name:"indicatorColor",parser:h},{code:70,name:"indicatorTransparency",parser:h},{code:41,name:"bottomHeight",parser:h},{code:40,name:"topHeight",parser:h},{code:10,name:"verticalDirection",parser:B},{code:1,name:"name",parser:h},{code:91,name:"flag",parser:h},{code:90,name:"state",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],Qs=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Ic(this,"parser",ce(Jp,Zp))}};function Pc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Ic(Qs,"ForEntityName","SECTION");var Qp={thickness:0,rotation:0,xScale:1,obliqueAngle:0,extrusionDirection:{x:0,y:0,z:1}},jp=[{code:210,name:"extrusionDirection",parser:B},{code:51,name:"obliqueAngle",parser:h},{code:41,name:"xScale",parser:h},{code:50,name:"rotation",parser:h},{code:2,name:"shapeName",parser:h},{code:40,name:"size",parser:h},{code:10,name:"insertionPoint",parser:B},{code:39,name:"thickness",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],js=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Pc(this,"parser",ce(jp,Qp))}};function Rc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Pc(js,"ForEntityName","SHAPE");var em={points:[],thickness:0,extrusionDirection:{x:0,y:0,z:1}},tm=[{code:210,name:"extrusionDirection",parser:B},{code:39,name:"thickness",parser:h},{code:[...Ps(10,14)],name:"points",isMultiple:!0,parser:B},{code:100,name:"subclassMarker",parser:h},...Te],ea=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Rc(this,"parser",ce(tm,em))}};function Lc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Rc(ea,"ForEntityName","SOLID");var nm=[{code:350,name:"historyObjectSoftId",parser:h},{code:100,name:"subclassMarker",parser:h},{code:2,name:"guid",parser:h},{code:290,name:"satCache",parser:h},..._o("data"),{code:70,name:"version",parser:h},{code:100},...Te],ta=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Lc(this,"parser",ce(nm))}};function Dc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Lc(ta,"ForEntityName","3DSOLID");var im={knotTolerance:1e-6,controlTolerance:1e-6,fitTolerance:1e-9,knotValues:[],controlPoints:[],fitPoints:[]},rm=[{code:11,name:"fitPoints",isMultiple:!0,parser:B},{code:10,name:"controlPoints",isMultiple:!0,parser:B},{code:41,name:"weights",isMultiple:!0,parser:h},{code:40,name:"knots",isMultiple:!0,parser:h},{code:13,name:"endTangent",parser:B},{code:12,name:"startTangent",parser:B},{code:44,name:"fitTolerance",parser:h},{code:43,name:"controlTolerance",parser:h},{code:42,name:"knotTolerance",parser:h},{code:74,name:"numberOfFitPoints",parser:h},{code:73,name:"numberOfControlPoints",parser:h},{code:72,name:"numberOfKnots",parser:h},{code:71,name:"degree",parser:h},{code:70,name:"flag",parser:h},{code:210,name:"normal",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],na=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Dc(this,"parser",ce(rm,im))}};Dc(na,"ForEntityName","SPLINE");var _x=((Jt={})[Jt.NONE=0]="NONE",Jt[Jt.CLOSED=1]="CLOSED",Jt[Jt.PERIODIC=2]="PERIODIC",Jt[Jt.RATIONAL=4]="RATIONAL",Jt[Jt.PLANAR=8]="PLANAR",Jt[Jt.LINEAR=16]="LINEAR",Jt);function Nc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var sm=[{code:280,name:"shadowMapSoftness",parser:h},{code:71,name:"shadowMapSize",parser:h},{code:70,name:"shadowType",parser:h},{code:292,name:"isSummerTime",parser:de},{code:92,name:"time",parser:h},{code:91,name:"julianDay",parser:h},{code:291,name:"hasShadow",parser:de},{code:40,name:"intensity",parser:h},{code:421,name:"lightColorInstance",parser:h},{code:63,name:"lightColorIndex",parser:h},{code:290,name:"isOn",parser:de},{code:90,name:"version",parser:h},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Te.filter(i=>i.code!==100)],ia=class{parseEntity(e,t){let n={layer:""};return this.parser(t,e,n),n}constructor(){Nc(this,"parser",ce(sm))}};Nc(ia,"ForEntityName","SUN");var tr=class{parseEntity(e,t){let n={};for(;!e.isEOF();){if(t.code===0){e.rewind();break}switch(t.code){case 100:n.subclassMarker=t.value,t=e.next();break;case 2:n.name=t.value,t=e.next();break;case 5:n.handle=t.value,t=e.next();break;case 10:n.startPoint=co(hi(e)),t=e.lastReadGroup;break;case 11:n.directionVector=co(hi(e)),t=e.lastReadGroup;break;case 90:n.tableValue=t.value,t=e.next();break;case 91:n.rowCount=t.value,t=e.next();break;case 92:n.columnCount=t.value,t=e.next();break;case 93:n.overrideFlag=t.value,t=e.next();break;case 94:n.borderColorOverrideFlag=t.value,t=e.next();break;case 95:n.borderLineWeightOverrideFlag=t.value,t=e.next();break;case 96:n.borderVisibilityOverrideFlag=t.value,t=e.next();break;case 141:n.rowHeightArr??(n.rowHeightArr=[]),n.rowHeightArr.push(t.value),t=e.next();break;case 142:n.columnWidthArr??(n.columnWidthArr=[]),n.columnWidthArr.push(t.value),t=e.next();break;case 280:n.version=t.value,t=e.next();break;case 310:n.bmpPreview??(n.bmpPreview=""),n.bmpPreview+=t.value,t=e.next();break;case 330:n.ownerBlockRecordSoftId=t.value,t=e.next();break;case 342:n.tableStyleId=t.value,t=e.next();break;case 343:n.blockRecordHandle=t.value,t=e.next();break;case 170:n.attachmentPoint=t.value,t=e.next();break;case 171:n.cells??(n.cells=[]),n.cells.push((function(r,a){let l=!1,c=!1,u={};for(;!r.isEOF()&&a.code!==0&&!c;)switch(a.code){case 171:if(l){c=!0;continue}u.cellType=a.value,l=!0,a=r.next();break;case 172:u.flagValue=a.value,a=r.next();break;case 173:u.mergedValue=a.value,a=r.next();break;case 174:u.autoFit=a.value,a=r.next();break;case 175:u.borderWidth=a.value,a=r.next();break;case 176:u.borderHeight=a.value,a=r.next();break;case 91:u.overrideFlag=a.value,a=r.next();break;case 178:u.virtualEdgeFlag=a.value,a=r.next();break;case 145:u.rotation=a.value,a=r.next();break;case 345:u.fieldObjetId=a.value,a=r.next();break;case 340:u.blockTableRecordId=a.value,a=r.next();break;case 146:u.blockScale=a.value,a=r.next();break;case 177:u.blockAttrNum=a.value,a=r.next();break;case 7:u.textStyle=a.value,a=r.next();break;case 140:u.textHeight=a.value,a=r.next();break;case 170:u.attachmentPoint=a.value,a=r.next();break;case 92:u.extendedCellFlags=a.value,a=r.next();break;case 285:u.rightBorderVisibility=!!(a.value??!0),a=r.next();break;case 286:u.bottomBorderVisibility=!!(a.value??!0),a=r.next();break;case 288:u.leftBorderVisibility=!!(a.value??!0),a=r.next();break;case 289:u.topBorderVisibility=!!(a.value??!0),a=r.next();break;case 301:(function(f,m,g){for(;g.code!==304;)switch(g.code){case 301:case 93:case 90:case 94:g=m.next();break;case 1:f.text=g.value,g=m.next();break;case 300:f.attrText=g.value,g=m.next();break;case 302:f.text=g.value?g.value:f.text,g=m.next();break;default:m.debug&&console.warn(`parserCellValue: Ignore code: ${g.code}, value: ${g.value}`),g=m.next()}})(u,r,a),a=r.next();break;default:return u}return l=!1,c=!1,u})(e,t)),t=e.lastReadGroup;break;default:$f(n,t,e),t=e.next()}}return n}};function Oc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}(io="ForEntityName")in tr?Object.defineProperty(tr,io,{value:"ACAD_TABLE",enumerable:!0,configurable:!0,writable:!0}):tr[io]="ACAD_TABLE";var am=[{code:11,name:"xAxisDirection",parser:B},{code:210,name:"extrusionDirection",parser:B},{code:1,name:"text",parser:h},{code:10,name:"position",parser:B},{code:3,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],ra=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Oc(this,"parser",ce(am))}};Oc(ra,"ForEntityName","TOLERANCE");var gx=((At={})[At.CREATED_BY_CURVE_FIT=1]="CREATED_BY_CURVE_FIT",At[At.TANGENT_DEFINED=2]="TANGENT_DEFINED",At[At.NOT_USED=4]="NOT_USED",At[At.CREATED_BY_SPLINE_FIT=8]="CREATED_BY_SPLINE_FIT",At[At.SPLINE_CONTROL_POINT=16]="SPLINE_CONTROL_POINT",At[At.FOR_POLYLINE=32]="FOR_POLYLINE",At[At.FOR_POLYGON=64]="FOR_POLYGON",At[At.POLYFACE=128]="POLYFACE",At),om=[{code:[335,343,344,91],name:"softPointers",isMultiple:!0,parser:h},{code:361,name:"sunId",parser:h},{code:431,name:"ambientLightColorName",parser:h},{code:421,name:"ambientLightColorInstance",parser:h},{code:63,name:"ambientLightColorIndex",parser:h},{code:142,name:"contrast",parser:h},{code:141,name:"brightness",parser:h},{code:282,name:"defaultLightingType",parser:h},{code:292,name:"isDefaultLighting",parser:de},{code:348,name:"visualStyleId",parser:h},{code:333,name:"shadePlotId",parser:h},{code:332,name:"backgroundId",parser:h},{code:61,name:"majorGridFrequency",parser:h},{code:170,name:"shadePlotMode",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:346,name:"ucsBaseId",parser:h},{code:345,name:"ucsId",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:74,name:"iconFlag",parser:h},{code:71,name:"ucsPerViewport",parser:h},{code:281,name:"renderMode",parser:h},{code:1,name:"sheetName",parser:h},{code:340,name:"clippingBoundaryId",parser:h},{code:90,name:"statusBitFlags",parser:h},{code:331,name:"frozenLayerIds",isMultiple:!0,parser:h},{code:72,name:"circleZoomPercent",parser:h},{code:51,name:"viewTwistAngle",parser:h},{code:50,name:"snapAngle",parser:h},{code:45,name:"viewHeight",parser:h},{code:44,name:"backClipZ",parser:h},{code:43,name:"frontClipZ",parser:h},{code:42,name:"perspectiveLensLength",parser:h},{code:17,name:"targetPoint",parser:B},{code:16,name:"viewDirection",parser:B},{code:15,name:"gridSpacing",parser:B},{code:14,name:"snapSpacing",parser:B},{code:13,name:"snapBase",parser:B},{code:12,name:"displayCenter",parser:B},{code:69,name:"viewportId",parser:h},{code:68,name:"status",parser:h},{code:41,name:"height",parser:h},{code:40,name:"width",parser:h},{code:10,name:"viewportCenter",parser:B},{code:100,name:"subclassMarker",parser:h,pushContext:!0},...Te],nr=class{parseEntity(e,t){let n={};return ce(om)(t,e,n),n}};function Fc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}(ro="ForEntityName")in nr?Object.defineProperty(nr,ro,{value:"VIEWPORT",enumerable:!0,configurable:!0,writable:!0}):nr[ro]="VIEWPORT";var lm={brightness:50,constrast:50,fade:0},cm=[{code:14,name:"boundary",isMultiple:!0,parser:B},{code:91,name:"numberOfVertices",parser:h},{code:71,name:"boundaryType",parser:h},{code:360,name:"imageDefReactorHardId",parser:h},{code:283,name:"fade",parser:h},{code:282,name:"contrast",parser:h},{code:281,name:"brightness",parser:h},{code:280,name:"isClipping",parser:de},{code:70,name:"displayFlag",parser:h},{code:340,name:"imageDefHardId",parser:h},{code:13,name:"imageSize",parser:B},{code:12,name:"vDirection",parser:B},{code:11,name:"uDirection",parser:B},{code:10,name:"position",parser:B},{code:90,name:"classVersion",parser:h},{code:100,name:"subclassMarker",parser:h},...Te],sa=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Fc(this,"parser",ce(cm,lm))}};Fc(sa,"ForEntityName","WIPEOUT");var yx=((Zn={})[Zn.ShowImage=1]="ShowImage",Zn[Zn.ShowImageWhenNotAligned=2]="ShowImageWhenNotAligned",Zn[Zn.UseClippingBoundary=4]="UseClippingBoundary",Zn[Zn.Transparency=8]="Transparency",Zn);function Uc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var dm=[{code:11,name:"direction",parser:B},{code:10,name:"position",parser:B},{code:100,name:"subclassMarker",parser:h},...Te],aa=class{parseEntity(e,t){let n={};return this.parser(t,e,n),n}constructor(){Uc(this,"parser",ce(dm))}};Uc(aa,"ForEntityName","XLINE");var um=0;function Bc(i){if(!i)throw TypeError("entity cannot be undefined or null");i.handle||(i.handle=um++)}var hm=Object.fromEntries([Ji,ws,ji,Is,Ls,Ds,Ns,Qi,Os,Fs,Bs,ks,Gs,Ws,zs,er,Vs,Ys,Rs,Hs,Xs,$s,qs,Ks,Zs,Js,Qs,js,ea,ta,na,ia,tr,Cs,ra,Us,Gr,nr,sa,aa].map(i=>[i.ForEntityName,new i]));function kc(i,e){let t=[];for(;!Ee(i,0,"EOF");){if(i.code===0){if(i.value==="ENDBLK"||i.value==="ENDSEC"){e.rewind();break}let n=hm[i.value];if(n){let r=i.value;i=e.next();let a=n.parseEntity(e,i);a.type=r,Bc(a),t.push(a)}else e.debug&&console.warn(`Unsupported ENTITY type: ${i.value}`)}i=e.next()}return t}function fm(i,e){let t=null,n={};for(;!Ee(i,0,"EOF")&&!Ee(i,0,"ENDSEC");)i.code===9?t=typeof i.value=="string"?i.value:null:t!=null&&(i.code===10?n[t]=hi(e):n[t]=i.value),i=e.next();return n}var ei=[{code:100,name:"subclassMarker",parser:h},{code:330,name:"ownerObjectId",parser:h},{code:102,isMultiple:!0,parser(i,e){for(;!Ee(i,0,"EOF")&&!Ee(i,102,"}");)i=e.next()}},{code:5,name:"handle",parser:h}],pm=[{code:70,name:"flag",parser:h},{code:2,name:"appName",parser:h},{code:100,name:"subclassMarker",parser:h},...ei],mm=ce(pm),_m=ce([{code:310,name:"bmpPreview",isMultiple:!0,isReducible:!0,parser:(i,e,t)=>(t.bmpPreview??"")+i.value},{code:281,name:"scalability",parser:h},{code:280,name:"explodability",parser:h},{code:70,name:"insertionUnits",parser:h},{code:340,name:"layoutObjects",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei]),gm=ce([...mo.map(i=>({...i,parser:h})),{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},{code:105,name:"handle",parser:h},...ei.filter(i=>i.code!==5)]),ym=ce([{code:347,name:"materialObjectId",parser:h},{code:390,name:"plotStyleNameObjectId",parser:h},{code:370,name:"lineweight",parser:h},{code:290,name:"isPlotting",parser:de},{code:6,name:"lineType",parser:h},{code:62,name:"colorIndex",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei]),vm=ce([{code:9,name:"text",parser:h},{code:45,name:"offsetY",parser:h},{code:44,name:"offsetX",parser:h},{code:50,name:"rotation",parser:h},{code:46,name:"scale",parser:h},{code:340,name:"styleObjectId",parser:h},{code:75,name:"shapeNumber",parser:h},{code:74,name:"elementTypeFlag",parser:h},{code:49,name:"elementLength",parser:h}],{elementTypeFlag:0,elementLength:0}),xm=ce([{code:49,name:"pattern",parser(i,e){let t={};return vm(i,e,t),t},isMultiple:!0},{code:40,name:"totalPatternLength",parser:h},{code:73,name:"numberOfLineTypes",parser:h},{code:72,parser:h},{code:3,name:"description",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei]),Em=ce([{code:1e3,name:"extendedFont",parser:h},{code:1001},{code:4,name:"bigFont",parser:h},{code:3,name:"font",parser:h},{code:42,name:"lastHeight",parser:h},{code:71,name:"textGenerationFlag",parser:h},{code:50,name:"obliqueAngle",parser:h},{code:41,name:"widthFactor",parser:h},{code:40,name:"fixedTextHeight",parser:h},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei]),Sm=[{code:13,name:"orthographicOrigin",parser:B},{code:71,name:"orthographicType",parser:h},{code:346,name:"baseUcsHandle",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"isOrthographic",parser:de},{code:12,name:"yAxis",parser:B},{code:11,name:"xAxis",parser:B},{code:10,name:"origin",parser:B},{code:70,name:"flag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei],Mm=ce(Sm),bm=[{code:346,name:"baseUcsId",parser:h},{code:345,name:"ucsId",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:361,name:"sunHardId",parser:h},{code:348,name:"styleHardId",parser:h},{code:334,name:"liveSectionSoftId",parser:h},{code:332,name:"backgroundSoftId",parser:h},{code:73,name:"isPlottable",parser:de},{code:72,name:"isUcsAssociated",parser:de},{code:281,name:"renderMode",parser:h},{code:71,name:"viewMode",parser:h},{code:50,name:"twistAngle",parser:h},{code:44,name:"backClippingPlane",parser:h},{code:43,name:"frontClippingPlane",parser:h},{code:42,name:"lensLength",parser:h},{code:12,name:"target",parser:B},{code:11,name:"direction",parser:B},{code:10,name:"center",parser:B},{code:41,name:"width",parser:h},{code:40,name:"height",parser:h},{code:70,name:"flag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei],Am=ce(bm),Tm=ce([{code:[63,421,431],name:"ambientColor",parser:h},{code:142,name:"contrast",parser:h},{code:141,name:"brightness",parser:h},{code:282,name:"defaultLightingType",parser:h},{code:292,name:"isDefaultLightingOn",parser:de},{code:348,name:"visualStyleObjectId",parser:h},{code:333,name:"shadePlotObjectId",parser:h},{code:332,name:"backgroundObjectId",parser:h},{code:61,name:"majorGridLines",parser:h},{code:170,name:"shadePlotSetting",parser:h},{code:146,name:"elevation",parser:h},{code:79,name:"orthographicType",parser:h},{code:112,name:"ucsYAxis",parser:B},{code:111,name:"ucsXAxis",parser:B},{code:110,name:"ucsOrigin",parser:B},{code:74,name:"ucsIconSetting",parser:h},{code:71,name:"viewMode",parser:h},{code:281,name:"renderMode",parser:h},{code:1,name:"styleSheet",parser:h},{code:[331,441],name:"frozenLayers",parser:h,isMultiple:!0},{code:72,name:"circleSides",parser:h},{code:51,name:"viewTwistAngle",parser:h},{code:50,name:"snapRotationAngle",parser:h},{code:45,name:"viewHeight",parser:h},{code:44,name:"backClippingPlane",parser:h},{code:43,name:"frontClippingPlane",parser:h},{code:42,name:"lensLength",parser:h},{code:41,name:"aspectRatio",parser:h},{code:40,name:"viewHeight",parser:h},{code:17,name:"viewTarget",parser:B},{code:16,name:"viewDirectionFromTarget",parser:B},{code:15,name:"gridSpacing",parser:B},{code:14,name:"snapSpacing",parser:B},{code:13,name:"snapBasePoint",parser:B},{code:12,name:"center",parser:B},{code:11,name:"upperRightCorner",parser:B},{code:10,name:"lowerLeftCorner",parser:B},{code:70,name:"standardFlag",parser:h},{code:2,name:"name",parser:h},{code:100,name:"subclassMarker",parser:h},...ei]),wm={APPID:mm,BLOCK_RECORD:_m,DIMSTYLE:gm,LAYER:ym,LTYPE:xm,STYLE:Em,UCS:Mm,VIEW:Am,VPORT:Tm},Cm=ce([{code:70,name:"maxNumberOfEntries",parser:h},{code:100,name:"subclassMarker",parser:h},{code:330,name:"ownerObjectId",parser:h},{code:102,parser:Mn},{code:102,parser:Mn},{code:102,parser:Mn},{code:360,isMultiple:!0},{code:5,name:"handle",parser:h},{code:2,name:"name",parser:h}]);function Im(i,e){let t={};for(;!Ee(i,0,"EOF")&&!Ee(i,0,"ENDSEC");){if(Ee(i,0,"TABLE")){i=e.next();let n={entries:[]};Cm(i,e,n),t[n.name]=n}if(Ee(i,0)&&!Ee(i,0,"ENDTAB")){let n=i.value;i=e.next();let r=wm[n];if(!r){e.debug&&console.warn(`parseTable: Invalid table name '${n}'`),i=e.next();continue}let a={};r(i,e,a),n==="VPORT"&&(a.lowerLeftCorner==null&&(a.lowerLeftCorner={x:0,y:0}),a.upperRightCorner==null&&(a.upperRightCorner={x:1,y:1}),a.center==null&&(a.center={x:0,y:0}),a.snapBasePoint==null&&(a.snapBasePoint={x:0,y:0}),a.snapSpacing==null&&(a.snapSpacing={x:0,y:0}),a.gridSpacing==null&&(a.gridSpacing={x:0,y:0}),a.viewDirectionFromTarget==null&&(a.viewDirectionFromTarget={x:0,y:0,z:1}),a.viewTarget==null&&(a.viewTarget={x:0,y:0,z:0})),t[n]?.entries.push(a)}i=e.next()}return t}function Pm(i,e){let t={};for(;!Ee(i,0,"EOF")&&!Ee(i,0,"ENDSEC");){if(Ee(i,0,"BLOCK")){let n=Rm(i=e.next(),e);Bc(n),n.name&&(t[n.name]=n)}i=e.next()}return t}function Rm(i,e){let t={};for(;!Ee(i,0,"EOF");){if(Ee(i,0,"ENDBLK")){for(i=e.next();!Ee(i,0,"EOF");){if(Ee(i,100,"AcDbBlockEnd"))return t;i=e.next()}break}switch(i.code){case 1:t.xrefPath=i.value;break;case 2:t.name=i.value;break;case 3:t.name2=i.value;break;case 5:t.handle=i.value;break;case 8:t.layer=i.value;break;case 10:t.position=hi(e);break;case 67:t.paperSpace=!!i.value&&i.value==1;break;case 70:i.value!==0&&(t.type=i.value);break;case 100:break;case 330:t.ownerHandle=i.value;break;case 0:t.entities=kc(i,e)}i=e.next()}return t}function Lm(i,e){let t={name:"ACAD_EVALUATION_GRAPH",handle:"",ownerObjectId:"0",nodeObjectHardIds:[]};for(i=e.next();i.code!==0;){switch(i.code){case 5:t.handle=String(i.value);break;case 330:t.ownerObjectId=String(i.value);break;case 360:t.nodeObjectHardIds.push(String(i.value));break;case 100:i.value==="AcDbEvalGraph"&&(t.subclassMarker="AcDbEvalGraph")}i=e.next()}return t}function Dm(i,e){let t={name:"ACSH_HISTORY_CLASS",handle:"",ownerObjectId:"0"};for(i=e.next();i.code!==0;){switch(i.code){case 5:t.handle=String(i.value);break;case 330:t.ownerObjectId=String(i.value);break;case 360:t.evalGraphHardId=String(i.value);break;case 100:i.value==="AcDbShHistory"&&(t.subclassMarker="AcDbShHistory")}i=e.next()}return t}function bn(i,e,t,n,r=!1,a){let l=t(),c="header",u=[],f=[];for(i=e.next();i.code!==0;){switch(i.code){case 5:l.handle=String(i.value);break;case 330:l.ownerObjectId=String(i.value);break;case 100:i.value==="AcDbShHistoryNode"?c="matrix":typeof i.value=="string"&&i.value.startsWith("AcDbSh")&&i.value!=="AcDbShHistoryNode"&&(c="primitive",a?.(i.value));break;case 1:r&&(c="acis",f.push(String(i.value)));break;case 3:r&&f.push(String(i.value));break;default:if(c==="matrix"&&i.code>=40&&i.code<=55){let m=Number(i.value);Number.isFinite(m)&&u.push(m)}else if(c==="primitive"&&i.code>=40&&i.code<=99){let m=Number(i.value);Number.isFinite(m)&&n?.(i.code,m,l)}}i=e.next()}return u.length===16&&(l.transform=u),f.length>0&&(l.acisData=jf(f)),l}function Nm(i){let e={};for(let t of Object.values(i))for(let n of t)n.handle&&(e[String(n.handle).toUpperCase()]=n);return e}function Om(i,e,t){i===40?t.length=e:i===41?t.width=e:i===42&&(t.height=e)}function Gc(i,e,t){i===40?t.majorRadius=e:i===41?t.minorRadius=e:i===42?t.height=e:i===43&&(t.topMajorRadius=e)}function Fm(i,e,t){Gc(i,e,t)}function Um(i,e,t){i===40?t.length=e:i===41?t.width=e:i===42&&(t.height=e)}function Bm(i,e,t){i===41&&(t.radius=e)}function km(i,e){return bn(i,e,()=>({name:"ACSH_BOX_CLASS",handle:"",ownerObjectId:"0"}),Om)}function Gm(i,e){return bn(i,e,()=>({name:"ACSH_CYLINDER_CLASS",handle:"",ownerObjectId:"0"}),Fm)}function Wm(i,e){let t=!1;return bn(i,e,()=>({name:"ACSH_CONE_CLASS",handle:"",ownerObjectId:"0"}),(n,r,a)=>{t?n===40?a.topRadius=r:n===41?a.baseRadius=r:n===42?a.height=r:n===43&&(a.minorRadius=r):Gc(n,r,a)},!1,n=>{n==="AcDbShCone"&&(t=!0)})}function zm(i,e){return bn(i,e,()=>({name:"ACSH_WEDGE_CLASS",handle:"",ownerObjectId:"0"}),Um)}function Vm(i,e){return bn(i,e,()=>({name:"ACSH_SWEEP_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function Ym(i,e){return bn(i,e,()=>({name:"ACSH_BREP_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function Hm(i,e){return bn(i,e,()=>({name:"ACSH_EXTRUSION_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function Xm(i,e){return bn(i,e,()=>({name:"ACSH_BOOLEAN_CLASS",handle:"",ownerObjectId:"0"}))}function $m(i,e){return bn(i,e,()=>({name:"ACSH_FILLET_CLASS",handle:"",ownerObjectId:"0"}),Bm)}function qm(i,e){return bn(i,e,()=>({name:"ACSH_REVOLVE_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}function Km(i,e){return bn(i,e,()=>({name:"ACSH_LOFT_CLASS",handle:"",ownerObjectId:"0"}),void 0,!0)}var Zm={ACSH_HISTORY_CLASS:Dm,ACAD_EVALUATION_GRAPH:Lm,ACSH_BOX_CLASS:km,ACSH_CYLINDER_CLASS:Gm,ACSH_CONE_CLASS:Wm,ACSH_WEDGE_CLASS:zm,ACSH_SWEEP_CLASS:Vm,ACSH_BREP_CLASS:Ym,ACSH_EXTRUSION_CLASS:Hm,ACSH_BOOLEAN_CLASS:Xm,ACSH_FILLET_CLASS:$m,ACSH_REVOLVE_CLASS:qm,ACSH_LOFT_CLASS:Km},Cn=[{code:330,name:"ownerObjectId",parser:h},{code:102,parser:Mn},{code:102,parser:Mn},{code:102,parser:Mn},{code:5,name:"handle",parser:h}],Jm=[{code:75,name:"hasLastPointRef",parser:de},{code:1,name:"pointRefs",parser:function(i,e){let t={className:i.value};for(;;)switch((i=e.next()).code){case 72:t.objectOsnapType=i.value;continue;case 331:t.mainObjectId=i.value;continue;case 73:t.mainObjectSubentityType=i.value;continue;case 91:t.mainObjectGsMarker=i.value;continue;case 301:t.mainObjectXrefHandle=i.value;continue;case 40:t.nearOsnapGeometryParameter=i.value;continue;case 10:{let n=B(i,e);t.osnapPoint="z"in n?n:{...n,z:0}}continue;case 332:t.intersectionObjectId=i.value;continue;case 74:t.intersectionObjectSubentityType=i.value;continue;case 92:t.intersectionObjectGsMarker=i.value;continue;case 302:t.intersectionObjectXrefHandle=i.value;continue;default:return e.rewind(),t}},isMultiple:!0},{code:71,name:"rotatedDimensionType",parser:h},{code:70,name:"transSpaceFlag",parser:de},{code:90,name:"associativityFlag",parser:h},{code:330,name:"dimensionObjectId",parser:h},{code:100,name:"subclassMarker",parser:h},...Cn],Qm=[{code:3,name:"entries",parser:(i,e)=>{let t={name:i.value};return(i=e.next()).code===350?t.objectSoftId=i.value:i.code===360?t.objectHardId=i.value:e.rewind(),t},isMultiple:!0},{code:281,name:"recordCloneFlag",parser:h},{code:280,name:"isHardOwned",parser:de},{code:100,name:"subclassMarker",parser:h},...Cn],jm=[{code:340,name:"entityIds",parser:h,isMultiple:!0},{code:71,name:"isSelectable",parser:de},{code:70,name:"isUnnamed",parser:de},{code:300,name:"description",parser:h},{code:100,name:"subclassMarker",parser:h},...Cn],e_=[{code:330,name:"imageDefReactorIdSoft",isMultiple:!0,parser:h},{code:90,name:"version",parser:h},{code:1,name:"fileName",parser:h},{code:10,name:"size",parser:B},{code:11,name:"sizeOfOnePixel",parser:B},{code:280,name:"isLoaded",parser:h},{code:281,name:"resolutionUnits",parser:h},{code:100,name:"subclassMarker",parser:h}],t_=[{code:8,name:"layerNames",parser:h,isMultiple:!0},{code:100,name:"subclassMarker",parser:h},{code:100,name:"filterSubclassMarker",parser:h},...Cn],n_=[{code:90,name:"idBufferEntryCounts",parser:h,isMultiple:!0},{code:360,name:"idBufferIds",parser:h,isMultiple:!0},{code:8,name:"layerNames",parser:h,isMultiple:!0},{code:100,name:"subclassMarker",parser:h},{code:40,name:"timeStamp",parser:h},{code:100,name:"indexSubclassMarker",parser:h},...Cn],Wc=[{code:333,name:"shadePlotId",parser:h},{code:149,name:"imageOriginY",parser:h},{code:148,name:"imageOriginX",parser:h},{code:147,name:"scaleFactor",parser:h},{code:78,name:"shadePlotCustomDPI",parser:h},{code:77,name:"shadePlotResolution",parser:h},{code:76,name:"shadePlotMode",parser:h},{code:75,name:"standardScaleType",parser:h},{code:7,name:"currentStyleSheet",parser:h},{code:74,name:"plotType",parser:h},{code:73,name:"plotRotation",parser:h},{code:72,name:"plotPaperUnit",parser:h},{code:70,name:"layoutFlag",parser:h},{code:143,name:"printScaleDenominator",parser:h},{code:142,name:"printScaleNumerator",parser:h},{code:141,name:"windowAreaYMax",parser:h},{code:140,name:"windowAreaXMax",parser:h},{code:49,name:"windowAreaYMin",parser:h},{code:48,name:"windowAreaXMin",parser:h},{code:47,name:"plotOriginY",parser:h},{code:46,name:"plotOriginX",parser:h},{code:45,name:"paperHeight",parser:h},{code:44,name:"paperWidth",parser:h},{code:43,name:"marginTop",parser:h},{code:42,name:"marginRight",parser:h},{code:41,name:"marginBottom",parser:h},{code:40,name:"marginLeft",parser:h},{code:6,name:"plotViewName",parser:h},{code:4,name:"paperSize",parser:h},{code:2,name:"configName",parser:h},{code:1,name:"pageSetupName",parser:h},{code:100,name:"subclassMarker",parser:h},...Cn],i_=[{code:346,name:"orthographicUcsId",parser:h},{code:345,name:"namedUcsId",parser:h},{code:331,name:"viewportId",parser:h},{code:330,name:"paperSpaceTableId",parser:h},{code:76,name:"orthographicType",parser:h},{code:17,name:"ucsYAxis",parser:B},{code:16,name:"ucsXAxis",parser:B},{code:13,name:"ucsOrigin",parser:B},{code:146,name:"elevation",parser:h},{code:15,name:"maxExtent",parser:B},{code:14,name:"minExtent",parser:B},{code:12,name:"insertionPoint",parser:B},{code:11,name:"maxLimit",parser:B},{code:10,name:"minLimit",parser:B},{code:71,name:"tabOrder",parser:h},{code:70,name:"controlFlag",parser:h},{code:1,name:"layoutName",parser:h},{code:100,name:"subclassMarker",parser:h},...Wc],r_=[{code:179,name:"unknown1",parser:h},{code:170,name:"contentType",parser:h},{code:171,name:"drawMLeaderOrderType",parser:h},{code:172,name:"drawLeaderOrderType",parser:h},{code:90,name:"maxLeaderSegmentPoints",parser:h},{code:40,name:"firstSegmentAngleConstraint",parser:h},{code:41,name:"secondSegmentAngleConstraint",parser:h},{code:173,name:"leaderLineType",parser:h},{code:91,name:"leaderLineColor",parser:h},{code:340,name:"leaderLineTypeId",parser:h},{code:92,name:"leaderLineWeight",parser:h},{code:290,name:"landingEnabled",parser:de},{code:42,name:"landingGap",parser:h},{code:291,name:"doglegEnabled",parser:de},{code:43,name:"doglegLength",parser:h},{code:3,name:"description",parser:h},{code:341,name:"arrowheadId",parser:h},{code:44,name:"arrowheadSize",parser:h},{code:300,name:"defaultMTextContents",parser:h},{code:342,name:"textStyleId",parser:h},{code:174,name:"textLeftAttachmentType",parser:h},{code:175,name:"textAngleType",parser:h},{code:176,name:"textAlignmentType",parser:h},{code:178,name:"textRightAttachmentType",parser:h},{code:93,name:"textColor",parser:h},{code:45,name:"textHeight",parser:h},{code:292,name:"textFrameEnabled",parser:de},{code:297,name:"textAlignAlwaysLeft",parser:de},{code:46,name:"alignSpace",parser:h},{code:343,name:"blockContentId",parser:h},{code:94,name:"blockContentColor",parser:h},{code:47,name:"blockContentScale.x",parser:h},{code:49,name:"blockContentScale.y",parser:h},{code:140,name:"blockContentScale.z",parser:h},{code:293,name:"blockContentScaleEnabled",parser:de},{code:141,name:"blockContentRotation",parser:h},{code:294,name:"blockContentRotationEnabled",parser:de},{code:177,name:"blockContentConnectionType",parser:h},{code:142,name:"scale",parser:h},{code:295,name:"overwritePropertyValue",parser:de},{code:296,name:"annotative",parser:de},{code:143,name:"breakGapSize",parser:h},{code:271,name:"textAttachmentDirection",parser:h},{code:272,name:"bottomTextAttachmentDirection",parser:h},{code:273,name:"topTextAttachmentDirection",parser:h},{code:298,name:"unknown2",parser:h},{code:100,name:"subclassMarker",parser:h},...Cn];function Ss(i,e,t){i.elements||(i.elements=[]);let n=i.elements.find(r=>r[e]===void 0);if(n){n[e]=t;return}i.elements.push({[e]:t})}var s_=[{code:6,parser:function({value:i},e,t){Ss(t,"lineType",i)},isMultiple:!0},{code:62,parser:function({value:i},e,t){if(t.fillColorIndex===void 0&&!t.elements?.length){t.fillColorIndex=i;return}Ss(t,"colorIndex",i)},isMultiple:!0},{code:420,parser:function({value:i},e,t){if(t.fillColor===void 0&&!t.elements?.length){t.fillColor=i;return}Ss(t,"color",i)},isMultiple:!0},{code:49,parser:function({value:i},e,t){Ss(t,"offset",i)},isMultiple:!0},{code:71,name:"elementCount",parser:h},{code:52,name:"endAngle",parser:h},{code:51,name:"startAngle",parser:h},{code:3,name:"description",parser:h},{code:70,name:"flags",parser:h},{code:2,name:"styleName",parser:h},{code:100,name:"subclassMarker",parser:h},...Cn],a_=[{code:40,name:"wcsToOCSTransform",parser:Zl},{code:40,name:"ocsToWCSTransform",parser:Zl},{code:41,name:"backClippingDistance",parser:h},{code:73,name:"isBackClipping",parser:de,pushContext:!0},{code:40,name:"frontClippingDistance",parser:h},{code:72,name:"isFrontClipping",parser:de,pushContext:!0},{code:71,name:"isClipBoundaryDisplayed",parser:de},{code:11,name:"position",parser:B},{code:210,name:"normal",parser:B},{code:10,name:"boundaryVertices",parser:B,isMultiple:!0},{code:70,name:"boundaryCount",parser:h},{code:100,name:"subclassMarker",parser:h},{code:100},...Cn];function Zl(i,e){let t=[];for(let n=0;n<3&&Ee(i,40);++n){let r=[];for(let a=0;a<4&&Ee(i,40);++a)r.push(i.value),i=e.next();t.push(r)}return e.rewind(),t}var o_=[{code:280,name:"cloneFlag",parser(i,e,t){var n,r;let a=i.value;for(i=e.next(),t.data=[];1<=(n=i.code)&&n<=369&&n!==5&&n!==105;)t.data.push(310<=(r=i).code&&r.code<=319&&typeof r.value=="string"?{...r,value:r.value.toUpperCase()}:r),i=e.next();return e.rewind(),a}},{code:100,name:"subclassMarker",parser:h},...Cn],l_={LAYOUT:i_,PLOTSETTINGS:Wc,DICTIONARY:Qm,SPATIAL_FILTER:a_,IMAGEDEF:e_,MLEADERSTYLE:r_,MLINESTYLE:s_,GROUP:jm,LAYER_FILTER:t_,LAYER_INDEX:n_,DIMASSOC:Jm,XRECORD:o_};function c_(i,e){let t=[];for(;i.code!==0||!["EOF","ENDSEC"].includes(String(i.value));){let r=String(i.value),a=l_[r],l=Zm[r];if(i.code===0&&l)t.push(l(i,e)),i=e.lastReadGroup;else if(i.code===0&&a?.length){let c=ce(a),u={name:r};c(i=e.next(),e,u)?(t.push(u),i=e.peek()):i=e.next()}else i=i.code===0?(function(c,u){let f=u.next();for(;f.code!==0;)f=u.next();return f})(0,e):e.next()}let n=Vf(t,({name:r})=>r);return{byName:n,byHandle:Nm(n)}}var lo="ASM_Data";function d_(i){return String(i).trim().toUpperCase()}function u_(i,e){let t={};for(;i.code!==0||!["EOF","ENDSEC"].includes(String(i.value));)if(i.code===0&&i.value==="ACDSRECORD"){let n=(function(r){let a,l,c={},u=r.next();for(;u.code!==0;){switch(u.code){case 320:a=d_(String(u.value));break;case 2:var f;c[f=l=String(u.value)]??(c[f]=[]);break;case 310:l&&c[l].push(String(u.value))}u=r.next()}let m=c[lo]??[];return{ownerHandle:a,dataType:m.length>0?lo:void 0,hexChunks:m}})(e);if(n.ownerHandle&&n.dataType===lo&&n.hexChunks.length>0){let r=(function(a){let l=a.replace(/\s+/g,"");if(l.length===0)return new Uint8Array(0);if(l.length%2!=0)return;let c=l.length/2,u=new Uint8Array(c);for(let f=0;f<c;f++){let m=Number.parseInt(l.slice(2*f,2*f+2),16);if(m<0||m>255)return;u[f]=m}return u})(n.hexChunks.join(""));r&&(t[n.ownerHandle]=r)}i=e.lastReadGroup}else i.code,i=e.next();return{byOwnerHandle:t}}var ir=new Uint8Array([...new TextEncoder().encode(`AutoCAD Binary DXF\r
`),26,0]),h_=new Set(wt(290,300)),f_=new Set([...wt(60,80),...wt(170,180),...wt(270,290),...wt(370,390),...wt(400,410),...wt(1060,1071)]),p_=new Set([...wt(90,100),...wt(420,430),...wt(440,460),1071]),m_=new Set(wt(160,170)),__=new Set([...wt(10,60),...wt(110,150),...wt(210,240),...wt(460,470),...wt(1010,1060)]),g_=new Set([...wt(310,320),1004]);function zc(i){if(i.length<ir.length)return!1;for(let e=0;e<ir.length;e++)if(i[e]!==ir[e])return!1;return!0}function y_(i){return(i.charCodeAt(0)===65279?i.slice(1):i).startsWith("AutoCAD Binary DXF")}function v_(i,e={}){if(!zc(i))throw Error("Not a binary DXF file.");let{dxfVersion:t,encoding:n,r12:r}=(function(f,m,g){let x,E=!(function(C){let F=ir.length;return C.length<F+9||(C[F]===0&&C[F+1]===0?Ql(C.subarray(F+2,F+9))==="SECTION":C[F]!==0||Ql(C.subarray(F+1,F+8))!=="SECTION")})(f),S=new DataView(f.buffer,f.byteOffset,f.byteLength),w=Jl(g),b="AC1009",I=m,L=ir.length,P=Math.min(f.length,L+8192);for(;L<P;){let[C,F]=Ms(f,L,E),[q,J]=bs(f,S,F,C,I,w);if(C===9&&q==="$ACADVER"){let[ue,me]=Ms(f,J,E),[te,fe]=bs(f,S,me,ue,"utf-8",w);ue===1&&(b=te),L=fe;continue}if(C===9&&q==="$DWGCODEPAGE"){let[ue,me]=Ms(f,J,E),[te,fe]=bs(f,S,me,ue,"ascii",w);(ue===3||ue===1)&&(x=te),L=fe;continue}if(L=J,C===0&&(q==="ENDSEC"||q==="EOF"))break}return b>="AC1021"?I="utf-8":x&&(I=(function(C){let F=/^ANSI_(\d+)$/i.exec(C);if(!F)return;let q=F[1];return q==="1252"?"windows-1252":q==="949"?"euc-kr":`windows-${q}`})(x)??m),{dxfVersion:b,encoding:I,r12:E}})(i,e.encoding??"windows-1252",e.encodingFailureFatal??!1),a=[],l=new DataView(i.buffer,i.byteOffset,i.byteLength),c=Jl(e.encodingFailureFatal??!1),u=ir.length;for(;u<i.length;){let[f,m]=Ms(i,u,r),[g,x]=bs(i,l,u=m,f,n,c);if(u=x,a.push(String(f),g),f===0&&g==="EOF")break}if(a.length<2||a[a.length-1]!=="EOF")throw Error(`Binary DXF ended without EOF group (version ${t}, offset ${u}).`);return a}function Ms(i,e,t){if(t){let n=i[e];return e+=1,n===255&&(n=i[e]|i[e+1]<<8,e+=2),[n,e]}return[i[e]|i[e+1]<<8,e+2]}function bs(i,e,t,n,r,a){var l,c;let u;if(g_.has(n)){let g=i[t];t+=1;let x=i.subarray(t,t+g);return t+=g,[(function(E){let S="";for(let w=0;w<E.length;w++)S+=E[w].toString(16).padStart(2,"0");return S})(x),t]}if(h_.has(n))return[i[t]!==0?"1":"0",t+1];if(f_.has(n))return[String(e.getInt16(t,!0)),t+2];if(p_.has(n))return[String(e.getInt32(t,!0)),t+4];if(m_.has(n))return[String(Number(e.getBigInt64(t,!0))),t+8];if(__.has(n))return[String(e.getFloat64(t,!0)),t+8];let f=t,m=f;for(;m<i.length&&i[m]!==0;)m++;return[(l=a,c=r,(u=l.byEncoding.get(c))||(u=new TextDecoder(c,{fatal:l.fatal}),l.byEncoding.set(c,u)),u).decode(i.subarray(f,m)),m+1]}function Jl(i){return{fatal:i,byEncoding:new Map}}function wt(i,e){let t=[];for(let n=i;n<e;n++)t.push(n);return t}function Ql(i){return new TextDecoder("ascii").decode(i)}function Vc(i){if(y_(i.charCodeAt(0)===65279?i.slice(1):i))throw Error("Binary DXF cannot be parsed from a text string. Read the file as ArrayBuffer/Uint8Array and use DxfParser.parseBuffer() instead.");return(i.charCodeAt(0)===65279?i.slice(1):i).split(/\r\n|\r|\n/g)}function x_(i,e={}){return zc(i)?v_(i,{encoding:e.encoding,encodingFailureFatal:e.encodingFailureFatal}):Vc(new TextDecoder(e.encoding??"utf-8",{fatal:e.encodingFailureFatal??!1}).decode(i))}function Ts(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var fo=class{constructor(){Ts(this,"encoding","utf-8"),Ts(this,"encodingFailureFatal",!1),Ts(this,"thumbnailImageFormat","base64")}},oa=class extends EventTarget{parseSync(e,t=!1){return this.parseLines(Vc(e),t)}parseBuffer(e,t=!1){return this.parseLines(x_(e,{encoding:this._options.encoding,encodingFailureFatal:this._options.encodingFailureFatal}),t)}parseStream(e){let t=[],n=this;return new Promise((r,a)=>{e.on("data",l=>{typeof l=="string"?t.push(new TextEncoder().encode(l)):t.push(l)}),e.on("end",()=>{try{let l=t.reduce((f,m)=>f+m.length,0),c=new Uint8Array(l),u=0;for(let f of t)c.set(f,u),u+=f.length;r(n.parseBuffer(c))}catch(l){a(l)}}),e.on("error",l=>{a(l)})})}async parseFromUrl(e,t){let n=await fetch(e,t);if(!n.ok)throw Error(`Failed to fetch DXF: ${n.status} ${n.statusText}`);let r=await n.arrayBuffer();if(r.byteLength===0)throw Error(`Failed to fetch DXF: empty response body from ${e}`);return this.parseBuffer(new Uint8Array(r))}parseLines(e,t=!1){let n=new uo(e,t);if(!n.hasNext())throw Error("Empty file");return this.parseAll(n)}parseAll(e){let t={header:{},blocks:{},entities:[],tables:{},objects:{byName:{},byHandle:{},byTree:void 0},acdsData:{byOwnerHandle:{}}},n=e.next();for(;!Ee(n,0,"EOF");)Ee(n,0,"SECTION")&&(Ee(n=e.next(),2,"HEADER")?t.header=fm(n=e.next(),e):Ee(n,2,"CLASSES")?wf(n=e.next(),e,t):Ee(n,2,"BLOCKS")?t.blocks=Pm(n=e.next(),e):Ee(n,2,"ENTITIES")?t.entities=kc(n=e.next(),e):Ee(n,2,"TABLES")?t.tables=Im(n=e.next(),e):Ee(n,2,"OBJECTS")?t.objects=c_(n=e.next(),e):Ee(n,2,"THUMBNAILIMAGE")?t.thumbnailImage=(function(r,a,l="base64"){let c,u="",f=0;for(;!Ee(r,0,"EOF")&&!Ee(r,0,"ENDSEC");)r.code===90?f=r.value:r.code===310&&(u+=r.value),r=a.next();if(l==="hex")c=u;else{let m=(function(g){let x=g.length/2,E=new Uint8Array(x);for(let S=0;S<x;S++)E[S]=parseInt(g.substr(2*S,2),16);return E})(u);c=l==="buffer"?m:(function(g){let x="";for(let E=0;E<g.length;E++)x+=String.fromCharCode(g[E]);return btoa(x)})(m)}return{size:f,data:c}})(n=e.next(),e,this._options.thumbnailImageFormat):Ee(n,2,"ACDSDATA")&&(t.acdsData=u_(n=e.next(),e))),n=e.next();return t}constructor(e={}){super(),Ts(this,"_options",void 0);let t=new fo;this._options=Object.assign(t,e)}},vx=((Qt={})[Qt.NOT_APPLICABLE=0]="NOT_APPLICABLE",Qt[Qt.KEEP_EXISTING=1]="KEEP_EXISTING",Qt[Qt.USE_CLONE=2]="USE_CLONE",Qt[Qt.XREF_VALUE_NAME=3]="XREF_VALUE_NAME",Qt[Qt.VALUE_NAME=4]="VALUE_NAME",Qt[Qt.UNMANGLE_NAME=5]="UNMANGLE_NAME",Qt),xx=((Vi={})[Vi.NOUNIT=0]="NOUNIT",Vi[Vi.CENTIMETERS=2]="CENTIMETERS",Vi[Vi.INCH=5]="INCH",Vi),Ex=((Br={})[Br.PSLTSCALE=1]="PSLTSCALE",Br[Br.LIMCHECK=2]="LIMCHECK",Br),Sx=((Yi={})[Yi.INCHES=0]="INCHES",Yi[Yi.MILLIMETERS=1]="MILLIMETERS",Yi[Yi.PIXELS=2]="PIXELS",Yi),Mx=((jt={})[jt.LAST_SCREEN_DISPLAY=0]="LAST_SCREEN_DISPLAY",jt[jt.DRAWING_EXTENTS=1]="DRAWING_EXTENTS",jt[jt.DRAWING_LIMITS=2]="DRAWING_LIMITS",jt[jt.VIEW_SPECIFIED=3]="VIEW_SPECIFIED",jt[jt.WINDOW_SPECIFIED=4]="WINDOW_SPECIFIED",jt[jt.LAYOUT_INFORMATION=5]="LAYOUT_INFORMATION",jt),bx=((Jn={})[Jn.AS_DISPLAYED=0]="AS_DISPLAYED",Jn[Jn.WIREFRAME=1]="WIREFRAME",Jn[Jn.HIDDEN=2]="HIDDEN",Jn[Jn.RENDERED=3]="RENDERED",Jn),Ax=((en={})[en.DRAFT=0]="DRAFT",en[en.PREVIEW=1]="PREVIEW",en[en.NORMAL=2]="NORMAL",en[en.PRESENTATION=3]="PRESENTATION",en[en.MAXIMUM=4]="MAXIMUM",en[en.CUSTOM=5]="CUSTOM",en),Tx=((Qn={})[Qn.NONE=0]="NONE",Qn[Qn.AbsoluteRotation=1]="AbsoluteRotation",Qn[Qn.TextEmbedded=2]="TextEmbedded",Qn[Qn.ShapeEmbedded=4]="ShapeEmbedded",Qn),wx=((so={})[so.PaperSpace=1]="PaperSpace",so),Cx=((Hi={})[Hi.XrefDependent=16]="XrefDependent",Hi[Hi.XrefResolved=32]="XrefResolved",Hi[Hi.Referenced=64]="Referenced",Hi),Ix=((tn={})[tn.Off=0]="Off",tn[tn.Perspective=1]="Perspective",tn[tn.ClipFront=2]="ClipFront",tn[tn.ClipBack=4]="ClipBack",tn[tn.UcsFollow=8]="UcsFollow",tn[tn.ClipFrontByFrontZ=16]="ClipFrontByFrontZ",tn);var Hc=i=>typeof i=="string"&&i.toLowerCase()==="*model_space";function Xc(i,e){let t=i.colorIndex,n=!1,r=!1,a=null,l=null;return e==="dxf"?(typeof t=="number"&&(t<0&&(n=!0),t=Math.abs(t)),r=((i.standardFlag??0)&1)===1,typeof i.color=="number"&&i.color>0&&(l=i.color&16777215),typeof t=="number"&&t>=1&&t<=255&&(a=t)):(n=!!i.off,r=!!i.frozen,typeof t=="number"&&t>=1&&t<=255?a=t:typeof i.color=="number"&&(l=i.color&16777215)),{name:i.name,aci:a,rgb:l,off:n,frozen:r,ltype:i.lineType||"Continuous"}}function $c(i){let e=new Map;for(let t of i||[]){let n=(t.pattern||[]).map(r=>r.elementLength??0);e.set(String(t.name).toUpperCase(),n)}return e}var E_=/[\u0080-\u00ff]/,S_=/[^\u0000-\u00ff]/,Yc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{fatal:!0}):null;function M_(i){if(!Yc||!E_.test(i)||S_.test(i))return i;try{let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return Yc.decode(e)}catch{return i}}function qc(i,e=new WeakSet){if(!(!i||typeof i!="object"||e.has(i))){e.add(i);for(let t of Object.keys(i)){let n=i[t];if(typeof n=="string"){let r=M_(n);r!==n&&(i[t]=r)}else n&&typeof n=="object"&&qc(n,e)}}}function Kc(i){qc(i);let e=new Map;for(let r of i.tables?.LAYER?.entries||[])e.set(r.name,Xc(r,"dwg"));let t=new Map,n=null;for(let r of i.tables?.BLOCK_RECORD?.entries||[]){if(Hc(r.name)){n=r.entities||[];continue}typeof r.name=="string"&&r.name.toLowerCase().startsWith("*paper_space")||t.set(r.name,{name:r.name,base:r.basePoint||{x:0,y:0,z:0},entities:r.entities||[]})}return n===null&&(n=i.entities||[]),{source:"dwg",angleUnit:"rad",layers:e,ltypes:$c(i.tables?.LTYPE?.entries),blocks:t,entities:n,ltscale:i.header?.LTSCALE??1,insUnits:i.header?.INSUNITS}}function Zc(i){let e=new Map;for(let n of i.tables?.LAYER?.entries||[])e.set(n.name,Xc(n,"dxf"));let t=new Map;for(let[n,r]of Object.entries(i.blocks||{}))Hc(n)||n.toLowerCase().startsWith("*paper_space")||t.set(n,{name:n,base:r.position||{x:0,y:0,z:0},entities:r.entities||[]});return{source:"dxf",angleUnit:"deg",layers:e,ltypes:$c(i.tables?.LTYPE?.entries),blocks:t,entities:i.entities||[],ltscale:i.header?.$LTSCALE??1,insUnits:i.header?.$INSUNITS}}var fd=1;var pd=3;var Ao=0,To=1,wo=2,Co=3,Io=4,Po=5,Ro=6,Lo=7,md=0,_d=1,gd=2;var Ko=1,Zo=2,Jo=3,Qo=4,jo=5,el=6,tl=7;var nl=300,yd=301,il=302;var vd=306,Do=1e3,Vr=1001,No=1002;var xd=1006;var Ed=1008;var Sd=1009;var Md=1023;var Xr=2300,ma=2301,fa=2302,Oo=2303,Fo=2400,Uo=2401,Bo=2402;var rl="",mn="srgb",ko="srgb-linear",Go="linear",pa="srgb";var Yr=2e3,Wo=2001;function b_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}var Jc={},_a=null;function bd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=bd(i);let e="THREE."+i.shift();if(_a)_a("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function yt(...i){i=bd(i);let e="THREE."+i.shift();if(_a)_a("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cr(...i){let e=i.join(" ");e in Jc||(Jc[e]=!0,Rt(...i))}var A_={[Ao]:To,[wo]:Ro,[Io]:Lo,[Co]:Po,[To]:Ao,[Ro]:wo,[Lo]:Io,[Po]:Co},$r=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lx=Math.PI/180,T_=180/Math.PI;function sl(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Pe(i,e,t){return Math.max(e,Math.min(t,i))}function w_(i,e){return(i%e+e)%e}function go(i,e,t){return(1-t)*i+t*e}var rn=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ii=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let u=n[r+0],f=n[r+1],m=n[r+2],g=n[r+3],x=a[l+0],E=a[l+1],S=a[l+2],w=a[l+3];if(g!==w||u!==x||f!==E||m!==S){let b=u*x+f*E+m*S+g*w;b<0&&(x=-x,E=-E,S=-S,w=-w,b=-b);let I=1-c;if(b<.9995){let L=Math.acos(b),P=Math.sin(L);I=Math.sin(I*L)/P,c=Math.sin(c*L)/P,u=u*I+x*c,f=f*I+E*c,m=m*I+S*c,g=g*I+w*c}else{u=u*I+x*c,f=f*I+E*c,m=m*I+S*c,g=g*I+w*c;let L=1/Math.sqrt(u*u+f*f+m*m+g*g);u*=L,f*=L,m*=L,g*=L}}e[t]=u,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){let c=n[r],u=n[r+1],f=n[r+2],m=n[r+3],g=a[l],x=a[l+1],E=a[l+2],S=a[l+3];return e[t]=c*S+m*g+u*E-f*x,e[t+1]=u*S+m*x+f*g-c*E,e[t+2]=f*S+m*E+c*x-u*g,e[t+3]=m*S-c*g-u*x-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,u=Math.sin,f=c(n/2),m=c(r/2),g=c(a/2),x=u(n/2),E=u(r/2),S=u(a/2);switch(l){case"XYZ":this._x=x*m*g+f*E*S,this._y=f*E*g-x*m*S,this._z=f*m*S+x*E*g,this._w=f*m*g-x*E*S;break;case"YXZ":this._x=x*m*g+f*E*S,this._y=f*E*g-x*m*S,this._z=f*m*S-x*E*g,this._w=f*m*g+x*E*S;break;case"ZXY":this._x=x*m*g-f*E*S,this._y=f*E*g+x*m*S,this._z=f*m*S+x*E*g,this._w=f*m*g-x*E*S;break;case"ZYX":this._x=x*m*g-f*E*S,this._y=f*E*g+x*m*S,this._z=f*m*S-x*E*g,this._w=f*m*g+x*E*S;break;case"YZX":this._x=x*m*g+f*E*S,this._y=f*E*g+x*m*S,this._z=f*m*S-x*E*g,this._w=f*m*g-x*E*S;break;case"XZY":this._x=x*m*g-f*E*S,this._y=f*E*g-x*m*S,this._z=f*m*S+x*E*g,this._w=f*m*g+x*E*S;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],u=t[9],f=t[2],m=t[6],g=t[10],x=n+c+g;if(x>0){let E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(m-u)*E,this._y=(a-f)*E,this._z=(l-r)*E}else if(n>c&&n>g){let E=2*Math.sqrt(1+n-c-g);this._w=(m-u)/E,this._x=.25*E,this._y=(r+l)/E,this._z=(a+f)/E}else if(c>g){let E=2*Math.sqrt(1+c-n-g);this._w=(a-f)/E,this._x=(r+l)/E,this._y=.25*E,this._z=(u+m)/E}else{let E=2*Math.sqrt(1+g-n-c);this._w=(l-r)/E,this._x=(a+f)/E,this._y=(u+m)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,u=t._y,f=t._z,m=t._w;return this._x=n*m+l*c+r*f-a*u,this._y=r*m+l*u+a*c-n*f,this._z=a*m+l*f+n*u-r*c,this._w=l*m-n*c-r*u-a*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let u=1-t;if(c<.9995){let f=Math.acos(c),m=Math.sin(f);u=Math.sin(u*f)/m,t=Math.sin(t*f)/m,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+l*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ze=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,u=e.w,f=2*(l*r-c*n),m=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+u*f+l*g-c*m,this.y=n+u*m+c*f-a*g,this.z=r+u*g+a*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,u=t.z;return this.x=r*u-a*c,this.y=a*l-n*u,this.z=n*c-r*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yo=new Ze,Qc=new ii,be=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,a,l,c,u,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,f)}set(e,t,n,r,a,l,c,u,f){let m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=a,m[5]=u,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],m=n[4],g=n[7],x=n[2],E=n[5],S=n[8],w=r[0],b=r[3],I=r[6],L=r[1],P=r[4],C=r[7],F=r[2],q=r[5],J=r[8];return a[0]=l*w+c*L+u*F,a[3]=l*b+c*P+u*q,a[6]=l*I+c*C+u*J,a[1]=f*w+m*L+g*F,a[4]=f*b+m*P+g*q,a[7]=f*I+m*C+g*J,a[2]=x*w+E*L+S*F,a[5]=x*b+E*P+S*q,a[8]=x*I+E*C+S*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],m=e[8];return t*l*m-t*c*f-n*a*m+n*c*u+r*a*f-r*l*u}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],m=e[8],g=m*l-c*f,x=c*u-m*a,E=f*a-l*u,S=t*g+n*x+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=g*w,e[1]=(r*f-m*n)*w,e[2]=(c*n-r*l)*w,e[3]=x*w,e[4]=(m*t-r*u)*w,e[5]=(r*a-c*t)*w,e[6]=E*w,e[7]=(n*u-f*t)*w,e[8]=(l*t-n*a)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){let u=Math.cos(a),f=Math.sin(a);return this.set(n*u,n*f,-n*(u*l+f*c)+l+e,-r*f,r*u,-r*(-f*l+u*c)+c+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vo=new be,jc=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C_(){let i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===pa&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===pa&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rl?Go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ko]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:jc,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:jc,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var pn=C_();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=zo("canvas")),rr.width=e.width,rr.height=e.height;let r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=ni(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I_=0,ya=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(xo(r[l].image)):a.push(xo(r[l]))}else a=xo(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var P_=0,Eo=new Ze,ur=class i extends $r{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vr,r=Vr,a=xd,l=Ed,c=Md,u=Sd,f=i.DEFAULT_ANISOTROPY,m=rl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=sl(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new rn(0,0),this.repeat=new rn(1,1),this.center=new rn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Rt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ur.DEFAULT_IMAGE=null;ur.DEFAULT_MAPPING=nl;ur.DEFAULT_ANISOTROPY=1;var Vo=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,u=e.elements,f=u[0],m=u[4],g=u[8],x=u[1],E=u[5],S=u[9],w=u[2],b=u[6],I=u[10];if(Math.abs(m-x)<.01&&Math.abs(g-w)<.01&&Math.abs(S-b)<.01){if(Math.abs(m+x)<.1&&Math.abs(g+w)<.1&&Math.abs(S+b)<.1&&Math.abs(f+E+I-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(f+1)/2,C=(E+1)/2,F=(I+1)/2,q=(m+x)/4,J=(g+w)/4,ue=(S+b)/4;return P>C&&P>F?P<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(P),r=q/n,a=J/n):C>F?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=q/r,a=ue/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=J/a,r=ue/a),this.set(n,r,a,t),this}let L=Math.sqrt((b-S)*(b-S)+(g-w)*(g-w)+(x-m)*(x-m));return Math.abs(L)<.001&&(L=1),this.x=(b-S)/L,this.y=(g-w)/L,this.z=(x-m)/L,this.w=Math.acos((f+E+I-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this.w=Pe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this.w=Pe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var vt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,a,l,c,u,f,m,g,x,E,S,w,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,f,m,g,x,E,S,w,b)}set(e,t,n,r,a,l,c,u,f,m,g,x,E,S,w,b){let I=this.elements;return I[0]=e,I[4]=t,I[8]=n,I[12]=r,I[1]=a,I[5]=l,I[9]=c,I[13]=u,I[2]=f,I[6]=m,I[10]=g,I[14]=x,I[3]=E,I[7]=S,I[11]=w,I[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),a=1/sr.setFromMatrixColumn(e,1).length(),l=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){let x=l*m,E=l*g,S=c*m,w=c*g;t[0]=u*m,t[4]=-u*g,t[8]=f,t[1]=E+S*f,t[5]=x-w*f,t[9]=-c*u,t[2]=w-x*f,t[6]=S+E*f,t[10]=l*u}else if(e.order==="YXZ"){let x=u*m,E=u*g,S=f*m,w=f*g;t[0]=x+w*c,t[4]=S*c-E,t[8]=l*f,t[1]=l*g,t[5]=l*m,t[9]=-c,t[2]=E*c-S,t[6]=w+x*c,t[10]=l*u}else if(e.order==="ZXY"){let x=u*m,E=u*g,S=f*m,w=f*g;t[0]=x-w*c,t[4]=-l*g,t[8]=S+E*c,t[1]=E+S*c,t[5]=l*m,t[9]=w-x*c,t[2]=-l*f,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){let x=l*m,E=l*g,S=c*m,w=c*g;t[0]=u*m,t[4]=S*f-E,t[8]=x*f+w,t[1]=u*g,t[5]=w*f+x,t[9]=E*f-S,t[2]=-f,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){let x=l*u,E=l*f,S=c*u,w=c*f;t[0]=u*m,t[4]=w-x*g,t[8]=S*g+E,t[1]=g,t[5]=l*m,t[9]=-c*m,t[2]=-f*m,t[6]=E*g+S,t[10]=x-w*g}else if(e.order==="XZY"){let x=l*u,E=l*f,S=c*u,w=c*f;t[0]=u*m,t[4]=-g,t[8]=f*m,t[1]=x*g+w,t[5]=l*m,t[9]=E*g-S,t[2]=S*g-E,t[6]=c*m,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,L_)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),fi.crossVectors(n,nn),fi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),fi.crossVectors(n,nn)),fi.normalize(),la.crossVectors(nn,fi),r[0]=fi.x,r[4]=la.x,r[8]=nn.x,r[1]=fi.y,r[5]=la.y,r[9]=nn.y,r[2]=fi.z,r[6]=la.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],m=n[1],g=n[5],x=n[9],E=n[13],S=n[2],w=n[6],b=n[10],I=n[14],L=n[3],P=n[7],C=n[11],F=n[15],q=r[0],J=r[4],ue=r[8],me=r[12],te=r[1],fe=r[5],Me=r[9],ye=r[13],_e=r[2],ve=r[6],Ve=r[10],ke=r[14],De=r[3],Ye=r[7],Je=r[11],it=r[15];return a[0]=l*q+c*te+u*_e+f*De,a[4]=l*J+c*fe+u*ve+f*Ye,a[8]=l*ue+c*Me+u*Ve+f*Je,a[12]=l*me+c*ye+u*ke+f*it,a[1]=m*q+g*te+x*_e+E*De,a[5]=m*J+g*fe+x*ve+E*Ye,a[9]=m*ue+g*Me+x*Ve+E*Je,a[13]=m*me+g*ye+x*ke+E*it,a[2]=S*q+w*te+b*_e+I*De,a[6]=S*J+w*fe+b*ve+I*Ye,a[10]=S*ue+w*Me+b*Ve+I*Je,a[14]=S*me+w*ye+b*ke+I*it,a[3]=L*q+P*te+C*_e+F*De,a[7]=L*J+P*fe+C*ve+F*Ye,a[11]=L*ue+P*Me+C*Ve+F*Je,a[15]=L*me+P*ye+C*ke+F*it,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],u=e[9],f=e[13],m=e[2],g=e[6],x=e[10],E=e[14],S=e[3],w=e[7],b=e[11],I=e[15],L=u*E-f*x,P=c*E-f*g,C=c*x-u*g,F=l*E-f*m,q=l*x-u*m,J=l*g-c*m;return t*(w*L-b*P+I*C)-n*(S*L-b*F+I*q)+r*(S*P-w*F+I*J)-a*(S*C-w*q+b*J)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],u=e[2],f=e[6],m=e[10];return t*(l*m-c*f)-n*(a*m-c*u)+r*(a*f-l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],m=e[8],g=e[9],x=e[10],E=e[11],S=e[12],w=e[13],b=e[14],I=e[15],L=t*c-n*l,P=t*u-r*l,C=t*f-a*l,F=n*u-r*c,q=n*f-a*c,J=r*f-a*u,ue=m*w-g*S,me=m*b-x*S,te=m*I-E*S,fe=g*b-x*w,Me=g*I-E*w,ye=x*I-E*b,_e=L*ye-P*Me+C*fe+F*te-q*me+J*ue;if(_e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ve=1/_e;return e[0]=(c*ye-u*Me+f*fe)*ve,e[1]=(r*Me-n*ye-a*fe)*ve,e[2]=(w*J-b*q+I*F)*ve,e[3]=(x*q-g*J-E*F)*ve,e[4]=(u*te-l*ye-f*me)*ve,e[5]=(t*ye-r*te+a*me)*ve,e[6]=(b*C-S*J-I*P)*ve,e[7]=(m*J-x*C+E*P)*ve,e[8]=(l*Me-c*te+f*ue)*ve,e[9]=(n*te-t*Me-a*ue)*ve,e[10]=(S*q-w*C+I*L)*ve,e[11]=(g*C-m*q-E*L)*ve,e[12]=(c*me-l*fe-u*ue)*ve,e[13]=(t*fe-n*me+r*ue)*ve,e[14]=(w*P-S*F-b*L)*ve,e[15]=(m*F-g*P+x*L)*ve,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,u=e.z,f=a*l,m=a*c;return this.set(f*l+n,f*c-r*u,f*u+r*c,0,f*c+r*u,m*c+n,m*u-r*l,0,f*u-r*c,m*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,l=t._y,c=t._z,u=t._w,f=a+a,m=l+l,g=c+c,x=a*f,E=a*m,S=a*g,w=l*m,b=l*g,I=c*g,L=u*f,P=u*m,C=u*g,F=n.x,q=n.y,J=n.z;return r[0]=(1-(w+I))*F,r[1]=(E+C)*F,r[2]=(S-P)*F,r[3]=0,r[4]=(E-C)*q,r[5]=(1-(x+I))*q,r[6]=(b+L)*q,r[7]=0,r[8]=(S+P)*J,r[9]=(b-L)*J,r[10]=(1-(x+w))*J,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=sr.set(r[0],r[1],r[2]).length(),c=sr.set(r[4],r[5],r[6]).length(),u=sr.set(r[8],r[9],r[10]).length();a<0&&(l=-l),An.copy(this);let f=1/l,m=1/c,g=1/u;return An.elements[0]*=f,An.elements[1]*=f,An.elements[2]*=f,An.elements[4]*=m,An.elements[5]*=m,An.elements[6]*=m,An.elements[8]*=g,An.elements[9]*=g,An.elements[10]*=g,t.setFromRotationMatrix(An),n.x=l,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,l,c=Yr,u=!1){let f=this.elements,m=2*a/(t-e),g=2*a/(n-r),x=(t+e)/(t-e),E=(n+r)/(n-r),S,w;if(u)S=a/(l-a),w=l*a/(l-a);else if(c===Yr)S=-(l+a)/(l-a),w=-2*l*a/(l-a);else if(c===Wo)S=-l/(l-a),w=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=m,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=g,f[9]=E,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=Yr,u=!1){let f=this.elements,m=2/(t-e),g=2/(n-r),x=-(t+e)/(t-e),E=-(n+r)/(n-r),S,w;if(u)S=1/(l-a),w=l/(l-a);else if(c===Yr)S=-2/(l-a),w=-(l+a)/(l-a);else if(c===Wo)S=-1/(l-a),w=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=m,f[4]=0,f[8]=0,f[12]=x,f[1]=0,f[5]=g,f[9]=0,f[13]=E,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sr=new Ze,An=new vt,R_=new Ze(0,0,0),L_=new Ze(1,1,1),fi=new Ze,la=new Ze,nn=new Ze,td=new vt,nd=new ii,qr=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],l=r[4],c=r[8],u=r[1],f=r[5],m=r[9],g=r[2],x=r[6],E=r[10];switch(t){case"XYZ":this._y=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,E),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,E),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Pe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,E));break;case"XZY":this._z=Math.asin(-Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,E),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qr.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D_=0,id=new Ze,ar=new ii,ti=new vt,ca=new Ze,zr=new Ze,N_=new Ze,O_=new ii,rd=new Ze(1,0,0),sd=new Ze(0,1,0),ad=new Ze(0,0,1),od={type:"added"},F_={type:"removed"},or={type:"childadded",child:null},So={type:"childremoved",child:null},hr=class i extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Ze,t=new qr,n=new ii,r=new Ze(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(zr,ca,this.up):ti.lookAt(ca,zr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(ti),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),or.child=e,this.dispatchEvent(or),or.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let f=0,m=u.length;f<m;f++){let g=u[f];a(e.shapes,g)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(a(e.materials,this.material[u]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];r.animations.push(a(e.animations,u))}}if(t){let c=l(e.geometries),u=l(e.materials),f=l(e.textures),m=l(e.images),g=l(e.shapes),x=l(e.skeletons),E=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){let u=[];for(let f in c){let m=c[f];delete m.metadata,u.push(m)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hr.DEFAULT_UP=new Ze(0,1,0);hr.DEFAULT_MATRIX_AUTO_UPDATE=!0;hr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pn.workingColorSpace){return this.r=e,this.g=t,this.b=n,pn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pn.workingColorSpace){if(e=w_(e,1),t=Pe(t,0,1),n=Pe(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Mo(l,a,e+1/3),this.g=Mo(l,a,e),this.b=Mo(l,a,e-1/3)}return pn.colorSpaceToWorking(this,r),this}setStyle(e,t=mn){function n(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Rt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);Rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let n=Ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return pn.workingToColorSpace(Pt.copy(this),e),Math.round(Pe(Pt.r*255,0,255))*65536+Math.round(Pe(Pt.g*255,0,255))*256+Math.round(Pe(Pt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pn.workingColorSpace){pn.workingToColorSpace(Pt.copy(this),t);let n=Pt.r,r=Pt.g,a=Pt.b,l=Math.max(n,r,a),c=Math.min(n,r,a),u,f,m=(c+l)/2;if(c===l)u=0,f=0;else{let g=l-c;switch(f=m<=.5?g/(l+c):g/(2-l-c),l){case n:u=(r-a)/g+(r<a?6:0);break;case r:u=(a-n)/g+2;break;case a:u=(n-r)/g+4;break}u/=6}return e.h=u,e.s=f,e.l=m,e}getRGB(e,t=pn.workingColorSpace){return pn.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=mn){pn.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,r=Pt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(da);let n=go(pi.h,da.h,t),r=go(pi.s,da.s,t),a=go(pi.l,da.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new xt;xt.NAMES=Ad;function U_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,a=Td(i,0,r,t,!0),l=[];if(!a||a.next===a.prev)return l;let c,u,f;if(n&&(a=z_(i,e,a,t)),i.length>80*t){c=i[0],u=i[1];let m=c,g=u;for(let x=t;x<r;x+=t){let E=i[x],S=i[x+1];E<c&&(c=E),S<u&&(u=S),E>m&&(m=E),S>g&&(g=S)}f=Math.max(m-c,g-u),f=f!==0?32767/f:0}return Kr(a,l,t,c,u,f,0),l}function Td(i,e,t,n,r){let a;if(r===j_(i,e,t,n)>0)for(let l=e;l<t;l+=n)a=ld(l/n|0,i[l],i[l+1],a);else for(let l=t-n;l>=e;l-=n)a=ld(l/n|0,i[l],i[l+1],a);return a&&fr(a,a.next)&&(Jr(a),a=a.next),a}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fr(t,t.next)||et(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(i,e,t,n,r,a,l){if(!i)return;!l&&a&&$_(i,n,r,a);let c=i;for(;i.prev!==i.next;){let u=i.prev,f=i.next;if(a?k_(i,n,r,a):B_(i)){e.push(u.i,i.i,f.i),Jr(i),i=f.next,c=f.next;continue}if(i=f,i===c){l?l===1?(i=G_(Xi(i),e),Kr(i,e,t,n,r,a,2)):l===2&&W_(i,e,t,n,r,a):Kr(Xi(i),e,t,n,r,a,1);break}}}function B_(i){let e=i.prev,t=i,n=i.next;if(et(e,t,n)>=0)return!1;let r=e.x,a=t.x,l=n.x,c=e.y,u=t.y,f=n.y,m=Math.min(r,a,l),g=Math.min(c,u,f),x=Math.max(r,a,l),E=Math.max(c,u,f),S=n.next;for(;S!==e;){if(S.x>=m&&S.x<=x&&S.y>=g&&S.y<=E&&Hr(r,c,a,u,l,f,S.x,S.y)&&et(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function k_(i,e,t,n){let r=i.prev,a=i,l=i.next;if(et(r,a,l)>=0)return!1;let c=r.x,u=a.x,f=l.x,m=r.y,g=a.y,x=l.y,E=Math.min(c,u,f),S=Math.min(m,g,x),w=Math.max(c,u,f),b=Math.max(m,g,x),I=Yo(E,S,e,t,n),L=Yo(w,b,e,t,n),P=i.prevZ,C=i.nextZ;for(;P&&P.z>=I&&C&&C.z<=L;){if(P.x>=E&&P.x<=w&&P.y>=S&&P.y<=b&&P!==r&&P!==l&&Hr(c,m,u,g,f,x,P.x,P.y)&&et(P.prev,P,P.next)>=0||(P=P.prevZ,C.x>=E&&C.x<=w&&C.y>=S&&C.y<=b&&C!==r&&C!==l&&Hr(c,m,u,g,f,x,C.x,C.y)&&et(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;P&&P.z>=I;){if(P.x>=E&&P.x<=w&&P.y>=S&&P.y<=b&&P!==r&&P!==l&&Hr(c,m,u,g,f,x,P.x,P.y)&&et(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;C&&C.z<=L;){if(C.x>=E&&C.x<=w&&C.y>=S&&C.y<=b&&C!==r&&C!==l&&Hr(c,m,u,g,f,x,C.x,C.y)&&et(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function G_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!fr(n,r)&&Cd(n,t,t.next,r)&&Zr(n,r)&&Zr(r,n)&&(e.push(n.i,t.i,r.i),Jr(t),Jr(t.next),t=i=r),t=t.next}while(t!==i);return Xi(t)}function W_(i,e,t,n,r,a){let l=i;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&Z_(l,c)){let u=Id(l,c);l=Xi(l,l.next),u=Xi(u,u.next),Kr(l,e,t,n,r,a,0),Kr(u,e,t,n,r,a,0);return}c=c.next}l=l.next}while(l!==i)}function z_(i,e,t,n){let r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a]*n,u=a<l-1?e[a+1]*n:i.length,f=Td(i,c,u,n,!1);f===f.next&&(f.steiner=!0),r.push(K_(f))}r.sort(V_);for(let a=0;a<r.length;a++)t=Y_(r[a],t);return t}function V_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Y_(i,e){let t=H_(i,e);if(!t)return e;let n=Id(t,i);return Xi(n,n.next),Xi(t,t.next)}function H_(i,e){let t=e,n=i.x,r=i.y,a=-1/0,l;if(fr(i,t))return t;do{if(fr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let g=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>a&&(a=g,l=t.x<t.next.x?t:t.next,g===n))return l}t=t.next}while(t!==e);if(!l)return null;let c=l,u=l.x,f=l.y,m=1/0;t=l;do{if(n>=t.x&&t.x>=u&&n!==t.x&&wd(r<f?n:a,r,u,f,r<f?a:n,r,t.x,t.y)){let g=Math.abs(r-t.y)/(n-t.x);Zr(t,i)&&(g<m||g===m&&(t.x>l.x||t.x===l.x&&X_(l,t)))&&(l=t,m=g)}t=t.next}while(t!==c);return l}function X_(i,e){return et(i.prev,i,e.prev)<0&&et(e.next,i,i.next)<0}function $_(i,e,t,n){let r=i;do r.z===0&&(r.z=Yo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,q_(r)}function q_(i){let e,t=1;do{let n=i,r;i=null;let a=null;for(e=0;n;){e++;let l=n,c=0;for(let f=0;f<t&&(c++,l=l.nextZ,!!l);f++);let u=t;for(;c>0||u>0&&l;)c!==0&&(u===0||!l||n.z<=l.z)?(r=n,n=n.nextZ,c--):(r=l,l=l.nextZ,u--),a?a.nextZ=r:i=r,r.prevZ=a,a=r;n=l}a.nextZ=null,t*=2}while(e>1);return i}function Yo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function K_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wd(i,e,t,n,r,a,l,c){return(r-l)*(e-c)>=(i-l)*(a-c)&&(i-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(a-c)>=(r-l)*(n-c)}function Hr(i,e,t,n,r,a,l,c){return!(i===l&&e===c)&&wd(i,e,t,n,r,a,l,c)}function Z_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!J_(i,e)&&(Zr(i,e)&&Zr(e,i)&&Q_(i,e)&&(et(i.prev,i,e.prev)||et(i,e.prev,e))||fr(i,e)&&et(i.prev,i,i.next)>0&&et(e.prev,e,e.next)>0)}function et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fr(i,e){return i.x===e.x&&i.y===e.y}function Cd(i,e,t,n){let r=ha(et(i,e,t)),a=ha(et(i,e,n)),l=ha(et(t,n,i)),c=ha(et(t,n,e));return!!(r!==a&&l!==c||r===0&&ua(i,t,e)||a===0&&ua(i,n,e)||l===0&&ua(t,i,n)||c===0&&ua(t,e,n))}function ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ha(i){return i>0?1:i<0?-1:0}function J_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return et(i.prev,i,i.next)<0?et(i,e,i.next)>=0&&et(i,i.prev,e)>=0:et(i,e,i.prev)<0||et(i,i.next,e)<0}function Q_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Id(i,e){let t=Ho(i.i,i.x,i.y),n=Ho(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function ld(i,e,t,n){let r=Ho(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ho(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j_(i,e,t,n){let r=0;for(let a=e,l=t-n;a<t;a+=n)r+=(i[l]-i[a])*(i[a+1]+i[l+1]),l=a;return r}var Xo=class{static triangulate(e,t,n=2){return U_(e,t,n)}},Qr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],a=[];cd(e),dd(n,e);let l=e.length;t.forEach(cd);for(let u=0;u<t.length;u++)r.push(l),l+=t[u].length,dd(n,t[u]);let c=Xo.triangulate(n,r);for(let u=0;u<c.length;u+=3)a.push(c.slice(u,u+3));return a}};function cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Pd(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(ud(r))r.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ud(r[0])){let a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=Pd(i[t]);for(let r in n)e[r]=n[r]}return e}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=r,r=t[++n],e<r)break t}l=t.length;break n}if(!(e>=a)){let c=t[1];e<c&&(n=2,a=c);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){let c=n+l>>>1;e<t[c]?l=c:n=c+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let l=0;l!==r;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends mi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fo,endingEnd:Fo}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,l=e+1,c=r[a],u=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Uo:a=e,c=2*t-n;break;case Bo:a=r.length-2,c=t+r[a]-r[a+1];break;default:a=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Uo:l=e,u=2*n-t;break;case Bo:l=1,u=n+r[1]-r[0];break;default:l=e-1,u=t}let f=(n-t)*.5,m=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(u-n),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,m=this._offsetPrev,g=this._offsetNext,x=this._weightPrev,E=this._weightNext,S=(n-t)/(r-t),w=S*S,b=w*S,I=-x*b+2*x*w-x*S,L=(1+x)*b+(-1.5-2*x)*w+(-.5+x)*S+1,P=(-1-E)*b+(1.5+E)*w+.5*S,C=E*b-E*w;for(let F=0;F!==c;++F)a[F]=I*l[m+F]+L*l[f+F]+P*l[u+F]+C*l[g+F];return a}},Ea=class extends mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,m=(n-t)/(r-t),g=1-m;for(let x=0;x!==c;++x)a[x]=l[f+x]*g+l[u+x]*m;return a}},Sa=class extends mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends mi{interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,m=this.inTangents,g=this.outTangents;if(!m||!g){let S=(n-t)/(r-t),w=1-S;for(let b=0;b!==c;++b)a[b]=l[f+b]*w+l[u+b]*S;return a}let x=c*2,E=e-1;for(let S=0;S!==c;++S){let w=l[f+S],b=l[u+S],I=E*x+S*2,L=g[I],P=g[I+1],C=e*x+S*2,F=m[C],q=m[C+1],J=tg(n,t,L,F,r);a[S]=Rd(J,w,P,q,b)}return a}};function Rd(i,e,t,n,r){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*r}function eg(i,e,t,n,r){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(r-n)}function tg(i,e,t,n,r){let a=(i-e)/(r-e);for(let l=0;l<8;l++){let c=Rd(a,e,t,n,r)-i;if(Math.abs(c)<1e-10)break;let u=eg(a,e,t,n,r);if(Math.abs(u)<1e-10)break;a=Math.max(0,Math.min(1,a-c/u))}return a}var sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),bo(e.settings)&&(n.settings={inTangents:lr(e.settings.inTangents,Array),outTangents:lr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break;case Oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;bo(this.settings)&&(hd(this.settings.inTangents,e),hd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,a=0,l=r-1;for(;a!==r&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(yt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(yt("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){yt("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){yt("KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(r!==void 0&&b_(r))for(let c=0,u=r.length;c!==u;++c){let f=r[c];if(isNaN(f)){yt("KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fa,a=e.length-1,l=1;for(let c=1;c<a;++c){let u=!1,f=e[c],m=e[c+1];if(f!==m&&(c!==1||f!==e[0]))if(r)u=!0;else{let g=c*n,x=g-n,E=g+n;for(let S=0;S!==n;++S){let w=t[g+S];if(w!==t[x+S]||w!==t[E+S]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];let g=c*n,x=l*n;for(let E=0;E!==n;++E)t[x+E]=t[g+E]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,u=l*n,f=0;f!==n;++f)t[u+f]=t[c+f];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,bo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=ma;var _i=class extends sn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Xr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName="color";var Aa=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName="number";var Ta=class extends mi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(r-t),f=e*c;for(let m=f+c;f!==m;f+=4)ii.slerpFlat(a,0,l,f-c,l,f,u);return a}},jr=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends sn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Xr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName="vector";var Ca=class{constructor(e,t,n){let r=this,a=!1,l=0,c=0,u,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){let g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,x=f.length;g<x;g+=2){let E=f[g],S=f[g+1];if(E.global&&(E.lastIndex=0),E.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new Ca,Ia=class{constructor(e){this.manager=e!==void 0?e:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var al="\\[\\]\\.:\\/",ng=new RegExp("["+al+"]","g"),ol="[^"+al+"]",ig="[^"+al.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",ol),sg=/(WCOD+)?/.source.replace("WCOD",ig),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),lg=new RegExp("^"+rg+sg+ag+og+"$"),cg=["material","materials","bones","map"],$o=class{constructor(e,t,n){let r=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ke=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){let t=lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);cg.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let l=0;l<a.length;l++){let c=a[l];if(c.name===t||c.uuid===t)return c;let u=n(c.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let l=e[r];if(l===void 0){let f=t.nodeName;yt("PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=$o;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var qo=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Og=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,c0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,vy=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,wy=`#define LAMBERT
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
}`,Cy=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Py=`#define NORMAL
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
}`,Ry=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Dy=`#define PHONG
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
}`,Ny=`#define STANDARD
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
}`,Oy=`#define STANDARD
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
}`,Fy=`#define TOON
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
}`,Uy=`#define TOON
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
}`,By=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:dg,alphahash_pars_fragment:ug,alphamap_fragment:hg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:_g,aomap_pars_fragment:gg,batching_pars_vertex:yg,batching_vertex:vg,begin_vertex:xg,beginnormal_vertex:Eg,bsdfs:Sg,iridescence_fragment:Mg,bumpmap_pars_fragment:bg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Cg,color_fragment:Ig,color_pars_fragment:Pg,color_pars_vertex:Rg,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Og,displacementmap_pars_vertex:Fg,displacementmap_vertex:Ug,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:zg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Yg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:n0,envmap_vertex:Xg,fog_vertex:$g,fog_pars_vertex:qg,fog_fragment:Kg,fog_pars_fragment:Zg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Qg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:r0,lights_phong_fragment:s0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:d0,lights_fragment_end:u0,lightprobes_pars_fragment:h0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:_0,map_fragment:g0,map_pars_fragment:y0,map_particle_fragment:v0,map_particle_pars_fragment:x0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:S0,morphinstance_vertex:M0,morphcolor_vertex:b0,morphnormal_vertex:A0,morphtarget_pars_vertex:T0,morphtarget_vertex:w0,normal_fragment_begin:C0,normal_fragment_maps:I0,normal_pars_fragment:P0,normal_pars_vertex:R0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:U0,opaque_fragment:B0,packing:k0,premultiplied_alpha_fragment:G0,project_vertex:W0,dithering_fragment:z0,dithering_pars_fragment:V0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:$0,shadowmap_vertex:q0,shadowmask_pars_fragment:K0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:j0,specularmap_fragment:ey,specularmap_pars_fragment:ty,tonemapping_fragment:ny,tonemapping_pars_fragment:iy,transmission_fragment:ry,transmission_pars_fragment:sy,uv_pars_fragment:ay,uv_pars_vertex:oy,uv_vertex:ly,worldpos_vertex:cy,background_vert:dy,background_frag:uy,backgroundCube_vert:hy,backgroundCube_frag:fy,cube_vert:py,cube_frag:my,depth_vert:_y,depth_frag:gy,distance_vert:yy,distance_frag:vy,equirect_vert:xy,equirect_frag:Ey,linedashed_vert:Sy,linedashed_frag:My,meshbasic_vert:by,meshbasic_frag:Ay,meshlambert_vert:Ty,meshlambert_frag:wy,meshmatcap_vert:Cy,meshmatcap_frag:Iy,meshnormal_vert:Py,meshnormal_frag:Ry,meshphong_vert:Ly,meshphong_frag:Dy,meshphysical_vert:Ny,meshphysical_frag:Oy,meshtoon_vert:Fy,meshtoon_frag:Uy,points_vert:By,points_frag:ky,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:zy,sprite_frag:Vy},ie={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new rn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ze},probesMax:{value:new Ze},probesResolution:{value:new Ze}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new rn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Dd={basic:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Ft([ie.points,ie.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Ft([ie.common,ie.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Ft([ie.sprite,ie.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:Ft([ie.common,ie.displacementmap,{referencePosition:{value:new Ze},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:Ft([ie.lights,ie.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Dd.physical={uniforms:Ft([Dd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new rn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new rn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new rn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};var Yy=new be;Yy.set(-1,0,0,0,1,0,0,0,1);var _T={[Ko]:"LINEAR_TONE_MAPPING",[Zo]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[el]:"AGX_TONE_MAPPING",[tl]:"NEUTRAL_TONE_MAPPING",[jo]:"CUSTOM_TONE_MAPPING"};var gT=new Float32Array(16),yT=new Float32Array(9),vT=new Float32Array(4);var xT={[Ko]:"Linear",[Zo]:"Reinhard",[Jo]:"Cineon",[Qo]:"ACESFilmic",[el]:"AgX",[tl]:"Neutral",[jo]:"Custom"};var ET={[fd]:"SHADOWMAP_TYPE_PCF",[pd]:"SHADOWMAP_TYPE_VSM"};var ST={[yd]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE",[vd]:"ENVMAP_TYPE_CUBE_UV"};var MT={[il]:"ENVMAP_MODE_REFRACTION"};var bT={[md]:"ENVMAP_BLENDING_MULTIPLY",[_d]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};var Hy=new be;Hy.set(-1,0,0,0,1,0,0,0,1);var AT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var ri=Math.PI*2;function Xy(i,e,t){let n=t*e,r=i%360/60,a=n*(1-Math.abs(r%2-1)),l=0,c=0,u=0;r<1?[l,c,u]=[n,a,0]:r<2?[l,c,u]=[a,n,0]:r<3?[l,c,u]=[0,n,a]:r<4?[l,c,u]=[0,a,n]:r<5?[l,c,u]=[a,0,n]:[l,c,u]=[n,0,a];let f=t-n;return[Math.round(l+f),Math.round(c+f),Math.round(u+f)]}var Nd=(()=>{let i=new Array(256).fill(null).map(()=>[255,255,255]);[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,255,255],[128,128,128],[192,192,192]].forEach((n,r)=>i[r+1]=n);let t=[255,204,153,127,76];for(let n=0;n<240;n++){let r=Math.floor(n/10)*15,a=n%10,l=t[a>>1],c=a%2===0?1:.5;i[10+n]=Xy(r,c,l)}return[[51,51,51],[91,91,91],[132,132,132],[173,173,173],[214,214,214],[255,255,255]].forEach((n,r)=>i[250+r]=n),i})(),$y=i=>i[0]<<16|i[1]<<8|i[2],$i=class{constructor(e){this.T=e,this.a=new e(4096),this.n=0}ensure(e){if(this.n+e>this.a.length){let t=this.a.length*2;for(;t<this.n+e;)t*=2;let n=new this.T(t);n.set(this.a.subarray(0,this.n)),this.a=n}}done(){return this.a.slice(0,this.n)}},es=()=>({p:new $i(Float32Array),c:new $i(Uint8Array),e:new $i(Uint32Array)}),D=(i,e=0)=>typeof i=="number"&&Number.isFinite(i)?i:e,_n=i=>i?[D(i.x),D(i.y),D(i.z)]:[0,0,0];function qy(i){let e=D(i?.x),t=D(i?.y),n=i&&i.z!==void 0?D(i.z,1):1,r=Math.hypot(e,t,n)||1;e/=r,t/=r,n/=r;let a,l,c;Math.abs(e)<1/64&&Math.abs(t)<1/64?(a=n,l=0,c=-e):(a=-t,l=e,c=0);let u=Math.hypot(a,l,c)||1;a/=u,l/=u,c/=u;let f=t*c-n*l,m=n*a-e*c,g=e*l-t*a,x=new vt;return x.set(a,f,e,0,l,m,t,0,c,g,n,0,0,0,0,1),x}var Pa=i=>!i||Math.hypot(D(i.x),D(i.y),D(i.z))<1e-9||Math.abs(D(i.x))<1e-12&&Math.abs(D(i.y))<1e-12&&(i.z===void 0||D(i.z,1)>0),Od=new vt,Fd=new vt;function si(i,e){return Od.fromArray(i),Fd.fromArray(e),Od.multiply(Fd).elements.slice()}var Ky=new vt().elements.slice(),Ra=(i,e,t)=>new vt().makeTranslation(i,e,t).elements.slice(),Ud=i=>new vt().makeRotationZ(i).elements.slice(),Zy=(i,e,t)=>new vt().makeScale(i,e,t).elements.slice();function Bd(i,e,t,n,r,a,l){let c=t-i,u=n-e,f=Math.hypot(c,u);if(f<1e-12)return;let m=4*Math.atan(r),g=f/2/Math.tan(m/2),x=(i+t)/2+-u/f*g,E=(e+n)/2+c/f*g,S=Math.hypot(i-x,e-E),w=Math.atan2(e-E,i-x),b=Math.max(2,Math.ceil(Math.abs(m)/l));for(let I=1;I<b;I++){let L=w+m*I/b;a.push(x+S*Math.cos(L),E+S*Math.sin(L))}}function kd(i,e,t){let n=!1,r=t.length/2;for(let a=0,l=r-1;a<r;l=a++){let c=t[2*a],u=t[2*a+1],f=t[2*l],m=t[2*l+1];u>e!=m>e&&i<(f-c)*(e-u)/(m-u)+c&&(n=!n)}return n}function Jy(i){let e=0,t=i.length/2;for(let n=0,r=t-1;n<t;r=n++)e+=i[2*r]*i[2*n+1]-i[2*n]*i[2*r+1];return e/2}function Gd(i,e,t,n,r){let a=t.length,l=e[i],c=e[a],u=[],f=new Array(i+1),m=new Array(i+1),g=new Array(i+1);for(let x=0;x<=r;x++){let E=l+(c-l)*x/r;x===r&&(E=c-1e-9*(c-l));let S=i;for(;S<a-1&&E>=e[S+1];)S++;f[0]=1;for(let P=1;P<=i;P++){m[P]=E-e[S+1-P],g[P]=e[S+P]-E;let C=0;for(let F=0;F<P;F++){let q=g[F+1]+m[P-F],J=q===0?0:f[F]/q;f[F]=C+g[F+1]*J,C=m[P-F]*J}f[P]=C}let w=0,b=0,I=0,L=0;for(let P=0;P<=i;P++){let C=S-i+P,F=n?D(n[C],1):1,q=f[P]*F;w+=q*t[C][0],b+=q*t[C][1],I+=q*t[C][2],L+=q}L!==0&&u.push(w/L,b/L,I/L)}return u}function Wd(i,e){let t=[],n=i.length,r=l=>i[Math.max(0,Math.min(n-1,l))];for(let l=0;l<n-1;l++){let c=r(l-1),u=r(l),f=r(l+1),m=r(l+2);for(let g=0;g<e;g++){let x=g/e,E=x*x,S=E*x,w=[];for(let b=0;b<3;b++)w.push(.5*(2*u[b]+(-c[b]+f[b])*x+(2*c[b]-5*u[b]+4*f[b]-m[b])*E+(-c[b]+3*u[b]-3*f[b]+m[b])*S));t.push(w[0],w[1],w[2])}}let a=i[n-1];return t.push(a[0],a[1],a[2]),t}function zd(i,e){if(i==null)return"";let t=String(i);return t=t.replace(/%%[cC]/g,"\xD8").replace(/%%[dD]/g,"\xB0").replace(/%%[pP]/g,"\xB1").replace(/%%%/g,"%").replace(/%%[uUoO]/g,""),e?(t=t.replace(/\\U\+([0-9A-Fa-f]{4})/g,(n,r)=>String.fromCharCode(parseInt(r,16))),t=t.replace(/\\S([^;^#\\]*)[\^#/]([^;]*);/g,"$1/$2"),t=t.replace(/\\[fFCcHhWwTtQqAaXx][^;]*;/g,""),t=t.replace(/\\[LlOoKk]/g,""),t=t.replace(/\\P/g,`
`).replace(/\\~/g," "),t=t.replace(/\\\\/g,"").replace(/\\\{/g,"").replace(/\\\}/g,""),t=t.replace(/[{}]/g,""),t=t.replace(/\u0001/g,"\\").replace(/\u0002/g,"{").replace(/\u0003/g,"}")):t=t.replace(/\\U\+([0-9A-Fa-f]{4})/g,(n,r)=>String.fromCharCode(parseInt(r,16))),t}function Vd(i,e={}){let t=!!e.light,n=(e.arcStepDeg??5)*Math.PI/180,r=12,a=e.segCap??6e6,l=e.triCap??4e6,c=i.angleUnit==="deg"?y=>D(y)*Math.PI/180:y=>D(y),u=0,f=new Map,m=(y,A=1)=>f.set(y,(f.get(y)||0)+A),g=[],x=[],E=[],S=1,w=0,b=(y,A,Z,G)=>{if(!(w++%S)&&(g.push(y),x.push(A),G&&E.push(Z),g.length>3e5)){S*=2;for(let U of[g,x,E]){let k=0;for(let O=0;O<U.length;O+=2)U[k++]=U[O];U.length=k}}};for(let y of i.entities)switch(y.type){case"LINE":b(D(y.startPoint?.x),D(y.startPoint?.y),D(y.startPoint?.z),!0);break;case"CIRCLE":case"ARC":case"ELLIPSE":b(D(y.center?.x),D(y.center?.y),D(y.center?.z),!0);break;case"LWPOLYLINE":y.vertices?.length&&b(D(y.vertices[0].x),D(y.vertices[0].y),D(y.elevation),!0);break;case"POLYLINE":case"POLYLINE2D":case"POLYLINE3D":y.vertices?.length&&b(D(y.vertices[0].x),D(y.vertices[0].y),D(y.vertices[0].z),!0);break;case"3DFACE":{let A=y.corner1||y.vertices?.[0];A&&b(D(A.x),D(A.y),D(A.z),!0);break}case"INSERT":b(D(y.insertionPoint?.x),D(y.insertionPoint?.y),D(y.insertionPoint?.z),!0);break;case"POINT":b(D(y.position?.x),D(y.position?.y),D(y.position?.z)<=-99999?0:D(y.position?.z),!0);break;case"TEXT":b(D(y.startPoint?.x),D(y.startPoint?.y),0,!1);break;case"MTEXT":b(D(y.insertionPoint?.x),D(y.insertionPoint?.y),0,!1);break;case"SPLINE":{let A=y.controlPoints?.[0]||y.fitPoints?.[0];A&&b(D(A.x),D(A.y),D(A.z),!0);break}default:break}let I=y=>y<=-99999||y>=1e8?0:y,L=y=>{if(!y.length)return 0;let A=Float64Array.from(y).sort();return A[A.length>>1]},P=Math.round(L(g)),C=Math.round(L(x)),F=Math.round(L(E)),q=L(E),J=i.source==="dwg"?q:null,ue=new Map,me=y=>{let A=ue.get(y);return A||(A={name:y,idx:ue.size,lines:es(),tris:es(),fills:es(),pfills:es(),pts:es(),texts:[],count:0},ue.set(y,A)),A};for(let y of i.layers.keys())me(y);let te={aci:7,rgb:null,off:!1,frozen:!1,ltype:"Continuous"},fe=y=>i.layers.get(y)||te,Me=t?0:16777215,ye=y=>y===7?Me:$y(Nd[y]||Nd[7]),_e=y=>{let A=fe(y);return A.rgb!=null?A.rgb:ye(A.aci??7)},ve=[],Ve=0,ke=0,De=0,Ye=!1,Je=new $i(Float32Array),it=new $i(Uint32Array),an=0,ai=15e5*3,He=[1/0,1/0,1/0],he=[-1/0,-1/0,-1/0],Xe=[],Fe=[],Ut=[],Bt=1,kt=0,le=(y,A,Z)=>{if(y<He[0]&&(He[0]=y),A<He[1]&&(He[1]=A),Z<He[2]&&(He[2]=Z),y>he[0]&&(he[0]=y),A>he[1]&&(he[1]=A),Z>he[2]&&(he[2]=Z),kt++%Bt===0&&(Xe.push(y),Fe.push(A),Ut.push(Z),Xe.length>4e5)){Bt*=2;for(let G of[Xe,Fe,Ut]){let U=0;for(let k=0;k<G.length;k+=2)G[U++]=G[k];G.length=U}}},ze=(y,A,Z)=>{Je.n>=ai||(Je.ensure(3),it.ensure(1),Je.a[Je.n++]=y-P,Je.a[Je.n++]=A-C,Je.a[Je.n++]=Z-F,it.a[it.n++]=an)},Ge=(y,A,Z,G,U,k,O,W,Y)=>{if(Ve>=a){Ye=!0;return}let V=y.lines;V.p.ensure(6),V.c.ensure(6),V.e.ensure(1);let Q=V.p.a,z=V.p.n;Q[z]=A-P,Q[z+1]=Z-C,Q[z+2]=G-F,Q[z+3]=U-P,Q[z+4]=k-C,Q[z+5]=O-F,V.p.n=z+6;let X=V.c.a;z=V.c.n;let re=W>>16&255,$=W>>8&255,j=W&255;X[z]=re,X[z+1]=$,X[z+2]=j,X[z+3]=re,X[z+4]=$,X[z+5]=j,V.c.n=z+6,V.e.a[V.e.n++]=Y,Ve++},we=(y,A,Z,G,U,k,O)=>{if(ke>=l){Ye=!0;return}let W=y[A];W.p.ensure(9),W.c.ensure(9),W.e.ensure(1);let Y=W.p.a,V=W.p.n;Y[V]=Z[0]-P,Y[V+1]=Z[1]-C,Y[V+2]=Z[2]-F,Y[V+3]=G[0]-P,Y[V+4]=G[1]-C,Y[V+5]=G[2]-F,Y[V+6]=U[0]-P,Y[V+7]=U[1]-C,Y[V+8]=U[2]-F,W.p.n=V+9;let Q=W.c.a;V=W.c.n;let z=k>>16&255,X=k>>8&255,re=k&255;for(let $=0;$<3;$++)Q[V+3*$]=z,Q[V+3*$+1]=X,Q[V+3*$+2]=re;W.c.n=V+9,W.e.a[W.e.n++]=O,ke++},Ae=(y,A,Z,G,U,k)=>{let O=y.pts;O.p.ensure(3),O.c.ensure(3),O.e.ensure(1),O.p.a[O.p.n++]=A-P,O.p.a[O.p.n++]=Z-C,O.p.a[O.p.n++]=G-F,O.c.a[O.c.n++]=U>>16&255,O.c.a[O.c.n++]=U>>8&255,O.c.a[O.c.n++]=U&255,O.e.a[O.e.n++]=k},on=new Map,Ct=(y,A)=>{if(!y)return null;let Z=y.toUpperCase()+"|"+A;if(on.has(Z))return on.get(Z);let G=i.ltypes.get(y.toUpperCase()),U=null;if(G&&G.length>=2){let k=D(i.ltscale,1)*A,O=G.map(Y=>Y*k),W=O.reduce((Y,V)=>Y+Math.abs(V),0);W>1e-9&&(U={el:O,total:W})}return on.set(Z,U),U},ut=(y,A,Z,G,U,k)=>{let O=A.length/3;for(let $=0;$<O;$++)le(A[3*$],A[3*$+1],A[3*$+2]);let W=Z?O:O-1,Y=0;if(k){for(let $=0;$<W;$++){let j=($+1)%O;Y+=Math.hypot(A[3*j]-A[3*$],A[3*j+1]-A[3*$+1],A[3*j+2]-A[3*$+2])}Y/k.total>3e4&&(k=null)}if(!k){for(let $=0;$<W;$++){let j=($+1)%O;Ge(y,A[3*$],A[3*$+1],A[3*$+2],A[3*j],A[3*j+1],A[3*j+2],G,U)}return}let V=k.el,Q=k.total*.03,z=0,X=V[0]>=0,re=V[0]===0?Q:Math.abs(V[0]);for(let $=0;$<W;$++){let j=($+1)%O,_=A[3*$],ae=A[3*$+1],oe=A[3*$+2],Re=A[3*j]-_,Ne=A[3*j+1]-ae,Et=A[3*j+2]-oe,We=Math.hypot(Re,Ne,Et);if(We<1e-12)continue;let rt=0;for(;We-rt>1e-9;){let _t=Math.min(re,We-rt);if(X){let gt=rt/We,st=(rt+_t)/We;Ge(y,_+Re*gt,ae+Ne*gt,oe+Et*gt,_+Re*st,ae+Ne*st,oe+Et*st,G,U)}if(rt+=_t,re-=_t,re<=1e-12){z=(z+1)%V.length;let gt=V[z];X=gt>=0,re=gt===0?Q:Math.abs(gt),gt===0&&(X=!0)}}}},zt=(y,A)=>{let Z=A.length/3,G=new Float64Array(A.length);for(let U=0;U<Z;U++){let k=A[3*U],O=A[3*U+1],W=A[3*U+2];G[3*U]=y[0]*k+y[4]*O+y[8]*W+y[12],G[3*U+1]=y[1]*k+y[5]*O+y[9]*W+y[13],G[3*U+2]=y[2]*k+y[6]*O+y[10]*W+y[14]}return G},Ue=(y,A,Z,G)=>[y[0]*A+y[4]*Z+y[8]*G+y[12],y[1]*A+y[5]*Z+y[9]*G+y[13],y[2]*A+y[6]*Z+y[10]*G+y[14]],Lt=(y,A)=>Pa(A)?y.m:si(y.m,qy(A).elements),tt=(y,A)=>{let Z=y.layer??"0";Z==="0"&&A.layer&&(Z=A.layer);let G=me(A.force||Z);an=G.idx;let U;if(typeof y.color=="number")U=y.color&16777215;else{let O=y.colorIndex;O==null||O===256||O<0?U=_e(Z):O===0?U=A.blockRgb??Me:U=ye(O)}let k=y.lineType;return!k||String(k).toUpperCase()==="BYLAYER"?k=fe(Z).ltype:String(k).toUpperCase()==="BYBLOCK"&&(k=A.ltype||"Continuous"),{ld:G,rgb:U,lt:k,ln:Z}},Qe=(y,A)=>(ve.push({s:y,v:A}),ve.length-1),vi=(y,A,Z,G,U,k,O)=>{let W=k-U;for(;W<=0;)W+=ri;let Y=Math.max(4,Math.ceil(W/n));for(let V=0;V<=Y;V++){let Q=U+W*V/Y;O.push(y+G*Math.cos(Q),A+G*Math.sin(Q),Z)}},oi=(y,A,Z)=>{let G=[],U=y.length;for(let k=0;k<U;k++){let O=y[k];G.push(D(O.x),D(O.y),Z);let W=D(O.bulge);if(Math.abs(W)>1e-9&&(k<U-1||A)){let Y=y[(k+1)%U],V=[];Bd(D(O.x),D(O.y),D(Y.x),D(Y.y),W,V,n);for(let Q=0;Q<V.length;Q+=2)G.push(V[Q],V[Q+1],Z)}}return G},li=y=>{let A=[],Z=y.type;if(Z===1||y.start&&y.end&&y.radius===void 0&&y.lengthOfMinorAxis===void 0&&!y.center)A.push(D(y.start.x),D(y.start.y),D(y.end.x),D(y.end.y));else if(Z===2||y.center&&y.radius!==void 0){let G=c(y.startAngle),U=c(y.endAngle),k=y.isCCW!==!1,O=k?U-G:G-U;for(;O<=0;)O+=ri;k||(O=-O);let W=Math.max(4,Math.ceil(Math.abs(O)/n));for(let Y=0;Y<=W;Y++){let V=G+O*Y/W;A.push(D(y.center.x)+y.radius*Math.cos(V),D(y.center.y)+y.radius*Math.sin(V))}}else if(Z===3||y.lengthOfMinorAxis!==void 0){let G=D(y.end.x),U=D(y.end.y),k=D(y.lengthOfMinorAxis,1),O=c(y.startAngle),W=c(y.endAngle),Y=y.isCCW!==!1,V=Y?W-O:O-W;for(;V<=0;)V+=ri;Y||(V=-V);let Q=Math.max(8,Math.ceil(Math.abs(V)/n));for(let z=0;z<=Q;z++){let X=O+V*z/Q;A.push(D(y.center.x)+Math.cos(X)*G-Math.sin(X)*U*k,D(y.center.y)+Math.cos(X)*U+Math.sin(X)*G*k)}}else if(y.controlPoints||y.fitDatum){let G=(y.controlPoints||[]).map(U=>[D(U.x),D(U.y),0]);if(G.length>D(y.degree,3)&&y.knots?.length===G.length+D(y.degree,3)+1){let U=y.controlPoints.map(O=>D(O.weight,1)),k=Gd(D(y.degree,3),y.knots,G,U,Math.max(16,G.length*8));for(let O=0;O<k.length;O+=3)A.push(k[O],k[O+1])}else if(y.fitDatum?.length){let U=Wd(y.fitDatum.map(k=>[D(k.x),D(k.y),0]),8);for(let k=0;k<U.length;k+=3)A.push(U[k],U[k+1])}else for(let U of G)A.push(U[0],U[1])}return A},In=y=>{let A=[];for(let Z of y.boundaryPaths||[]){let G=[];if(Z.vertices){let U=Z.vertices,k=U.length,O=Z.isClosed!==!1;for(let W=0;W<k;W++){let Y=U[W];G.push(D(Y.x),D(Y.y));let V=D(Y.bulge);if(Math.abs(V)>1e-9&&(W<k-1||O)){let Q=U[(W+1)%k];Bd(D(Y.x),D(Y.y),D(Q.x),D(Q.y),V,G,n)}}}else if(Z.edges){let U=[];for(let k of Z.edges){let O=li(k);if(!(O.length<4))if(U.length){let W=U[U.length-2],Y=U[U.length-1],V=Math.hypot(O[0]-W,O[1]-Y);if(Math.hypot(O[O.length-2]-W,O[O.length-1]-Y)<V){let z=[];for(let X=O.length-2;X>=0;X-=2)z.push(O[X],O[X+1]);O=z}U.push(...O.slice(2))}else U=O.slice()}G=U}G.length>=6&&A.push(G)}return A},xi=(y,A)=>{let Z=y.map((k,O)=>({i:O,pts:k,area:Math.abs(Jy(k)),depth:0,parent:-1}));for(let k of Z)for(let O of Z)k!==O&&O.area>k.area&&kd(k.pts[0],k.pts[1],O.pts)&&k.depth++;let G=[],U=A===0||A===void 0?Z.filter(k=>k.depth%2===0):Z.filter(k=>k.depth===0);for(let k of U){let O=[];if(A!==2)for(let W of Z)W.depth===k.depth+1&&kd(W.pts[0],W.pts[1],k.pts)&&O.push(W.pts);G.push({outer:k.pts,holes:O})}return G},gn=(y,A,Z,G,U,k,O)=>{let W=X=>{let re=[];for(let $=0;$<X.length;$+=2)re.push(new rn(X[$],X[$+1]));return re},Y=W(y.outer),V=y.holes.map(W),Q;try{Q=Qr.triangulateShape(Y,V)}catch{return}let z=[...Y];for(let X of V)z.push(...X);for(let X of Q){let re=X.map($=>Ue(Z,z[$].x,z[$].y,A));for(let $ of re)le($[0],$[1],$[2]);we(G,U,re[0],re[1],re[2],k,O)}},ln=(y,A,Z,G,U,k,O)=>{let W=G.definitionLines||[];if(!W.length)return;let Y=[y.outer,...y.holes],V=1/0,Q=1/0,z=-1/0,X=-1/0;for(let j=0;j<y.outer.length;j+=2)V=Math.min(V,y.outer[j]),z=Math.max(z,y.outer[j]),Q=Math.min(Q,y.outer[j+1]),X=Math.max(X,y.outer[j+1]);let re=[[V,Q],[z,Q],[z,X],[V,X]],$=6e3;for(let j of W){let _=c(j.angle),ae=Math.cos(_),oe=Math.sin(_),Re=-oe,Ne=ae,Et=D(j.offset?.x),We=D(j.offset?.y),rt=D(j.base?.x),_t=D(j.base?.y);if(Math.abs(Et*Re+We*Ne)<1e-9)continue;let st=1/0,Le=-1/0;for(let Gt of re){let xe=((Gt[0]-rt)*Re+(Gt[1]-_t)*Ne)/(Et*Re+We*Ne);st=Math.min(st,xe),Le=Math.max(Le,xe)}let lt=Math.floor(st),Xt=Math.ceil(Le),Nn=1;Xt-lt>$&&(Nn=Math.ceil((Xt-lt)/$));for(let Gt=lt;Gt<=Xt;Gt+=Nn){let xe=rt+Gt*Et,vn=_t+Gt*We,$e=[];for(let ct of Y){let $t=ct.length/2;for(let Wt=0;Wt<$t;Wt++){let ns=(Wt+1)%$t,Ei=ct[2*Wt],Si=ct[2*Wt+1],pr=ct[2*ns],is=ct[2*ns+1],Mi=(Ei-xe)*Re+(Si-vn)*Ne,On=(pr-xe)*Re+(is-vn)*Ne;if(Mi<0&&On>=0||On<0&&Mi>=0){let bi=Mi/(Mi-On),Na=Ei+(pr-Ei)*bi,rs=Si+(is-Si)*bi;$e.push((Na-xe)*ae+(rs-vn)*oe)}}}$e.sort((ct,$t)=>ct-$t);for(let ct=0;ct+1<$e.length;ct+=2){let $t=Ue(Z,xe+ae*$e[ct],vn+oe*$e[ct],A),Wt=Ue(Z,xe+ae*$e[ct+1],vn+oe*$e[ct+1],A);le($t[0],$t[1],$t[2]),le(Wt[0],Wt[1],Wt[2]),Ge(U,$t[0],$t[1],$t[2],Wt[0],Wt[1],Wt[2],k,O)}}}},Ie=(y,A)=>{y.texts.push(A),De++},wn=(y,A)=>{for(let Z of y)yn(Z,A)};function yn(y,A){if(!y||y.isVisible===!1)return;let Z=y.type;switch(Z){case"LINE":{let{ld:G,rgb:U,lt:k}=tt(y,A),O=Qe(y,A.via);G.count++;let W=Ue(A.m,..._n(y.startPoint)),Y=Ue(A.m,..._n(y.endPoint));ut(G,Float64Array.from([...W,...Y]),!1,U,O,Ct(k,D(y.lineTypeScale,1))),ze(...W),ze(...Y);break}case"CIRCLE":{let{ld:G,rgb:U,lt:k}=tt(y,A),O=Qe(y,A.via);G.count++;let W=Lt(A,y.extrusionDirection),[Y,V,Q]=_n(y.center),z=D(y.radius),X=[],re=Math.max(24,Math.ceil(ri/n));for(let $=0;$<re;$++){let j=ri*$/re;X.push(Y+z*Math.cos(j),V+z*Math.sin(j),Q)}ut(G,zt(W,X),!0,U,O,Ct(k,D(y.lineTypeScale,1))),ze(...Ue(W,Y,V,Q));for(let $=0;$<4;$++)ze(...Ue(W,Y+z*Math.cos($*Math.PI/2),V+z*Math.sin($*Math.PI/2),Q));break}case"ARC":{let{ld:G,rgb:U,lt:k}=tt(y,A),O=Qe(y,A.via);G.count++;let W=Lt(A,y.extrusionDirection),[Y,V,Q]=_n(y.center),z=D(y.radius),X=c(y.startAngle),re=c(y.endAngle),$=[];vi(Y,V,Q,z,X,re,$),ut(G,zt(W,$),!1,U,O,Ct(k,D(y.lineTypeScale,1))),ze(...Ue(W,Y,V,Q)),ze(...Ue(W,$[0],$[1],$[2])),ze(...Ue(W,$[$.length-3],$[$.length-2],$[$.length-1]));break}case"ELLIPSE":{let{ld:G,rgb:U,lt:k}=tt(y,A),O=Qe(y,A.via);G.count++;let[W,Y,V]=_n(y.center),[Q,z,X]=_n(y.majorAxisEndPoint),re=0,$=0,j=1;y.extrusionDirection&&(re=D(y.extrusionDirection.x),$=D(y.extrusionDirection.y),j=D(y.extrusionDirection.z,1));let _=D(y.axisRatio,1),ae=$*X-j*z,oe=j*Q-re*X,Re=re*z-$*Q,Ne=D(y.startAngle),We=D(y.endAngle)-Ne;for((Math.abs(We)<1e-9||Math.abs(We-ri)<1e-6)&&(Ne=0,We=ri);We<=0;)We+=ri;let rt=Math.abs(We-ri)<1e-6,_t=Math.max(16,Math.ceil(We/n)),gt=[],st=rt?_t-1:_t;for(let Le=0;Le<=st;Le++){let lt=Ne+We*Le/_t;gt.push(W+Math.cos(lt)*Q+Math.sin(lt)*ae*_,Y+Math.cos(lt)*z+Math.sin(lt)*oe*_,V+Math.cos(lt)*X+Math.sin(lt)*Re*_)}ut(G,zt(A.m,gt),rt,U,O,Ct(k,D(y.lineTypeScale,1))),ze(...Ue(A.m,W,Y,V));break}case"LWPOLYLINE":{if(!y.vertices?.length)break;let{ld:G,rgb:U,lt:k}=tt(y,A),O=Qe(y,A.via);G.count++;let W=Lt(A,y.extrusionDirection),Y=i.source==="dwg"?(D(y.flag)&512)!==0:(D(y.flag)&1)===1,V=oi(y.vertices,Y,D(y.elevation));ut(G,zt(W,V),Y,U,O,Ct(k,D(y.lineTypeScale,1)));for(let Q of y.vertices)ze(...Ue(W,D(Q.x),D(Q.y),D(y.elevation)));break}case"POLYLINE":case"POLYLINE2D":case"POLYLINE3D":Vt(y,A);break;case"SPLINE":{let G=(y.controlPoints||[]).map(X=>[D(X.x),D(X.y),D(X.z)]),U=(y.fitPoints||[]).map(X=>[D(X.x),D(X.y),D(X.z)]),k=D(y.degree,3),O=null;if(G.length>k&&y.knots?.length===G.length+k+1){let X=y.weights&&y.weights.length===G.length?y.weights:null;O=Gd(k,y.knots,G,X,Math.min(4e3,Math.max(24,G.length*10)))}else U.length>=2?O=Wd(U,10):G.length>=2&&(O=G.flat());if(!O||O.length<6){m("SPLINE (no data)");break}let{ld:W,rgb:Y,lt:V}=tt(y,A),Q=Qe(y,A.via);W.count++,ut(W,zt(A.m,O),!1,Y,Q,Ct(V,D(y.lineTypeScale,1)));let z=U.length?U:G;for(let X of z)ze(...Ue(A.m,...X));break}case"3DFACE":{let U=(y.vertices||[y.corner1,y.corner2,y.corner3,y.corner4]).filter(Boolean).map(z=>Ue(A.m,..._n(z)));if(U.length<3)break;let{ld:k,rgb:O}=tt(y,A),W=Qe(y,A.via);k.count++;let Y=U.length>=4&&!(U[3][0]===U[2][0]&&U[3][1]===U[2][1]&&U[3][2]===U[2][2]);we(k,"tris",U[0],U[1],U[2],O,W),Y&&we(k,"tris",U[0],U[2],U[3],O,W);let V=D(y.flag),Q=Y?4:3;for(let z=0;z<Q;z++){if(V&1<<z)continue;let X=U[z],re=U[(z+1)%Q];le(X[0],X[1],X[2]),Ge(k,X[0],X[1],X[2],re[0],re[1],re[2],O,W)}ze(...U[0]);for(let z=1;z<Q;z++)ze(...U[z]);break}case"SOLID":case"TRACE":{let U=(y.points||[y.corner1,y.corner2,y.corner3,y.corner4]).filter(Boolean);if(U.length<3)break;let{ld:k,rgb:O}=tt(y,A),W=Qe(y,A.via);k.count++;let Y=Lt(A,y.extrusionDirection),V=y.elevation!==void 0?D(y.elevation):J!==null&&A.depth===0&&Pa(y.extrusionDirection)?J:0,Q=U.map(z=>Ue(Y,D(z.x),D(z.y),z.z!==void 0?D(z.z):V));we(k,"fills",Q[0],Q[1],Q[2],O,W),Q.length>=4&&we(k,"fills",Q[1],Q[3],Q[2],O,W);for(let z of Q)le(z[0],z[1],z[2]);break}case"POINT":{let{ld:G,rgb:U}=tt(y,A),k=Qe(y,A.via);G.count++;let O=_n(y.position);(O[2]<=-99999||O[2]>=1e8)&&(O[2]=0,u++);let W=Ue(A.m,...O);le(...W),Ae(G,W[0],W[1],W[2],U,k),ze(...W);break}case"LEADER":{let G=(y.vertices||[]).map(Y=>Ue(A.m,..._n(Y)));if(G.length<2)break;let{ld:U,rgb:k,lt:O}=tt(y,A),W=Qe(y,A.via);U.count++,ut(U,Float64Array.from(G.flat()),!1,k,W,Ct(O,1));break}case"HATCH":{let G=In(y);if(!G.length){m("HATCH (no boundary)");break}let{ld:U,rgb:k}=tt(y,A),O=Qe(y,A.via);U.count++;let W=Lt(A,y.extrusionDirection),Y=y.elevation??y.elevationPoint?.z,V=Y!==void 0?D(Y):J!==null&&A.depth===0&&Pa(y.extrusionDirection)?J:0,Q=xi(G,D(y.hatchStyle)),z=k;y.gradientColors?.length&&typeof y.gradientColors[0].rgb=="number"&&(z=y.gradientColors[0].rgb&16777215);let X=D(y.solidFill)===1||y.gradientFlag===1||y.gradientName;for(let re of Q)X?gn(re,V,W,U,"fills",z,O):y.definitionLines?.length?ln(re,V,W,y,U,k,O):gn(re,V,W,U,"pfills",k,O);break}case"TEXT":case"ATTRIB":{if(Z==="ATTRIB"&&(D(y.flag)&1||y.isInvisible))break;y.text&&typeof y.text=="object"&&(y={...y,...y.text,text:y.text.text,flag:y.flag});let G=zd(y.text,!1);if(!G.trim())break;let{ld:U,rgb:k}=tt(y,A),O=Qe(y,A.via);U.count++;let W=Lt(A,y.extrusionDirection),Y=D(y.halign??y.horizontalJustification),V=D(y.valign??y.verticalJustification),Q=Y!==0||V!==0,z=Q&&y.endPoint&&(D(y.endPoint.x)!==0||D(y.endPoint.y)!==0)?y.endPoint:y.startPoint,X=D(z?.x),re=D(z?.y),$=y.startPoint&&y.startPoint.z!==void 0?D(y.startPoint.z):y.elevation!==void 0?D(y.elevation):J!==null&&A.depth===0&&Pa(y.extrusionDirection)?J:0,j=si(W,si(Ra(X,re,$),Ud(c(y.rotation))));Ie(U,{kind:"TEXT",str:G,T:j,h:D(y.textHeight??y.height,1)||1,wf:D(y.xScale??y.widthFactor,1)||1,obl:c(y.obliqueAngle),hal:Y,val:V,rgb:k,id:O,w:0,endX:Q?D(y.startPoint?.x)-D(y.endPoint?.x):0});let _=Ue(j,0,0,0);le(..._),ze(..._);break}case"MTEXT":{let G=zd(y.text,!0);if(!G.trim())break;let{ld:U,rgb:k}=tt(y,A),O=Qe(y,A.via);U.count++;let W=_n(y.insertionPoint),Y=y.direction||y.directionVector,V=y.extrusionDirection,Q=Lt(A,null),z;if(Y&&Math.hypot(D(Y.x),D(Y.y),D(Y.z))>1e-9)z=[D(Y.x),D(Y.y),D(Y.z)];else{let Ne=c(y.rotation);z=[Math.cos(Ne),Math.sin(Ne),0]}let X=Math.hypot(...z)||1;z=z.map(Ne=>Ne/X);let re=V?[D(V.x),D(V.y),V.z!==void 0?D(V.z,1):1]:[0,0,1],$=Math.hypot(...re)||1,j=re.map(Ne=>Ne/$),_=[j[1]*z[2]-j[2]*z[1],j[2]*z[0]-j[0]*z[2],j[0]*z[1]-j[1]*z[0]],ae=new vt().set(z[0],_[0],j[0],W[0],z[1],_[1],j[1],W[1],z[2],_[2],j[2],W[2],0,0,0,1).elements.slice(),oe=si(Q,ae);Ie(U,{kind:"MTEXT",str:G,T:oe,h:D(y.textHeight??y.height,1)||1,wf:1,obl:0,hal:0,val:0,att:D(y.attachmentPoint,1)||1,rgb:k,id:O,w:D(y.rectWidth??y.width),endX:0});let Re=Ue(oe,0,0,0);le(...Re),ze(...Re);break}case"INSERT":Pn(y,A);break;case"DIMENSION":{let G=y.name?i.blocks.get(y.name):null;if(!G||!G.entities.length){m("DIMENSION (no block)");break}if(A.depth>=r)break;let{ln:U,rgb:k,lt:O}=tt(y,A),W={m:A.m,layer:U,blockRgb:k,ltype:O,force:A.force||null,via:A.via>=0?A.via:Qe(y,-1),depth:A.depth+1};wn(G.entities,W);break}case"ATTDEF":case"VERTEX":case"SEQEND":case"ENDBLK":case"BLOCK":break;default:m(Z||"(sin tipo)")}}function Vt(y,A){let Z=D(y.flag),G=y.vertices||[];if(!G.length)return;let U;y.type==="POLYLINE3D"||y.type==="POLYLINE"&&Z&8?U="3d":y.type==="POLYLINE"&&Z&64?U="pface":y.type==="POLYLINE"&&Z&16?U="mesh":U="2d";let{ld:k,rgb:O,lt:W}=tt(y,A),Y=Ct(W,D(y.lineTypeScale,1));if(U==="pface"){let z=G.filter(j=>D(j.flag)&64).map(j=>Ue(A.m,D(j.x),D(j.y),D(j.z))),X=G.filter(j=>!(D(j.flag)&64)&&D(j.flag)&128),re=!1,$=Qe(y,A.via);k.count++;for(let j of X){let _=[j.polyfaceIndex0??j.faceA,j.polyfaceIndex1??j.faceB,j.polyfaceIndex2??j.faceC,j.polyfaceIndex3??j.faceD].filter(oe=>typeof oe=="number"&&oe!==0);if(_.length<3)continue;let ae=_.map(oe=>z[Math.abs(oe)-1]).filter(Boolean);if(!(ae.length<3)){re=!0,we(k,"tris",ae[0],ae[1],ae[2],O,$),ae.length>=4&&we(k,"tris",ae[0],ae[2],ae[3],O,$);for(let oe=0;oe<ae.length;oe++){let Re=ae[oe],Ne=ae[(oe+1)%ae.length];le(...Re),Ge(k,...Re,...Ne,O,$)}}}re||(m("POLYLINE polyface mesh (no indices)"),k.count--);return}if(U==="mesh"){let z=D(y.meshMVertexCount),X=D(y.meshNVertexCount);if(z<2||X<2||z*X>G.length){m("POLYLINE 3D mesh (no dimensions)");return}let re=Qe(y,A.via);k.count++;let $=(ae,oe)=>{let Re=G[ae%z*X+oe%X];return Ue(A.m,D(Re.x),D(Re.y),D(Re.z))},j=Z&1?z:z-1,_=Z&32?X:X-1;for(let ae=0;ae<j;ae++)for(let oe=0;oe<_;oe++){let Re=$(ae,oe),Ne=$(ae+1,oe),Et=$(ae+1,oe+1),We=$(ae,oe+1);we(k,"tris",Re,Ne,Et,O,re),we(k,"tris",Re,Et,We,O,re),le(...Re),Ge(k,...Re,...Ne,O,re),Ge(k,...Re,...We,O,re)}return}let V=Qe(y,A.via);k.count++;let Q=(Z&1)===1;if(U==="3d"){let z=G.filter(re=>!(D(re.flag)&16)),X=[];for(let re of z)X.push(D(re.x),D(re.y),D(re.z));ut(k,zt(A.m,X),Q,O,V,Y);for(let re of z)ze(...Ue(A.m,D(re.x),D(re.y),D(re.z)))}else{let z=Lt(A,y.extrusionDirection),X=G;X.some(_=>D(_.flag)&8)&&(X=X.filter(_=>!(D(_.flag)&16)));let re=D(y.elevation),$=_=>re!==0?re:D(_.z),j=oi(X.map(_=>({x:_.x,y:_.y,bulge:_.bulge})),Q,X.length?$(X[0]):0);ut(k,zt(z,j),Q,O,V,Y);for(let _ of X)ze(...Ue(z,D(_.x),D(_.y),$(_)))}}function Pn(y,A){let Z=i.blocks.get(y.name);if(!Z){m("INSERT (block not found)");return}if(A.depth>=r){m("INSERT (nesting > "+r+")");return}let{ln:G,rgb:U,lt:k}=tt(y,A),O=fe(G),W=A.via>=0?A.via:Qe(y,-1),Y=y.xScale??1,V=y.yScale??1,Q=y.zScale??1,z=_n(Z.base),X=_n(y.insertionPoint),re=Lt(A,y.extrusionDirection),$=c(y.rotation),j=Math.max(1,D(y.columnCount,1)),_=Math.max(1,D(y.rowCount,1)),ae=D(y.columnSpacing),oe=D(y.rowSpacing),Re=A.force||(O.off||O.frozen?G:null),Ne=si(re,si(Ra(X[0],X[1],X[2]),Ud($))),Et=si(Zy(D(Y,1),D(V,1),D(Q,1)),Ra(-z[0],-z[1],-z[2]));for(let rt=0;rt<_;rt++)for(let _t=0;_t<j;_t++){let st={m:si(Ne,si(Ra(_t*ae,rt*oe,0),Et)),layer:G,blockRgb:U,ltype:k,force:Re,via:W,depth:A.depth+1};wn(Z.entities,st)}if(y.attribs?.length)for(let rt of y.attribs)yn({...rt,type:"ATTRIB"},{...A,via:W});let We=Ue(re,...X);ze(...We)}let Rn={m:Ky,layer:null,blockRgb:null,ltype:null,force:null,via:-1,depth:0};wn(i.entities,Rn);let pt=(y,A)=>{if(!y.length)return 0;let Z=Float64Array.from(y).sort();return Z[Math.min(Z.length-1,Math.max(0,Math.floor(A*(Z.length-1))))]},cn=He[0]!==1/0?{min:[He[0]-P,He[1]-C,He[2]-F],max:[he[0]-P,he[1]-C,he[2]-F],rmin:[pt(Xe,.005)-P,pt(Fe,.005)-C,pt(Ut,.005)-F],rmax:[pt(Xe,.995)-P,pt(Fe,.995)-C,pt(Ut,.995)-F]}:{min:[-1,-1,-1],max:[1,1,1],rmin:[-1,-1,-1],rmax:[1,1,1]},Yt=y=>({p:y.p.done(),c:y.c.done(),e:y.e.done()}),Ht=[];for(let y of ue.values()){let A=fe(y.name);Ht.push({name:y.name,color:A.rgb!=null?A.rgb:ye(A.aci??7),hidden:!!(A.off||A.frozen),count:y.count,lines:Yt(y.lines),tris:Yt(y.tris),fills:Yt(y.fills),pfills:Yt(y.pfills),pts:Yt(y.pts),texts:y.texts})}Ht.sort((y,A)=>y.name==="0"?-1:A.name==="0"?1:y.name.localeCompare(A.name,"es",{numeric:!0}));let Dn=new Uint32Array(ue.size);Ht.forEach((y,A)=>{Dn[ue.get(y.name).idx]=A});let mt=it.done();for(let y=0;y<mt.length;y++)mt[y]=Dn[mt[y]];return{origin:[P,C,F],layers:Ht,reg:ve,snap:Je.done(),snapLayer:mt,bounds:cn,stats:{source:i.source,entities:ve.length,topLevel:i.entities.length,segments:Ve,triangles:ke,texts:De,truncated:Ye,unsupported:Object.fromEntries([...f.entries()].sort((y,A)=>A[1]-y[1])),textZ:J,noZ:u}}}var ts=i=>Number.isFinite(i)?i:0;function Yd(i,e){let[t,n,r]=i.origin,a=[],l=1/0,c=-1/0,u=0;for(let b of i.layers){let I=1/0,L=-1/0,P=0,C=0,F=(q,J)=>{let ue=q.p;if(ue)for(let me=2;me<ue.length;me+=3){let te=ue[me]+r;C++,te<I&&(I=te),te>L&&(L=te),Math.abs(te)>1e-6&&P++}};F(b.lines),F(b.tris),F(b.fills),F(b.pfills),F(b.pts);for(let q of b.texts){let J=q.T[14];C++,J<I&&(I=J),J>L&&(L=J),Math.abs(J)>1e-6&&P++}C&&a.push({name:b.name,zmin:I,zmax:L,nonZero:P,total:C,count:b.count}),P&&(u+=P,I<l&&(l=I),L>c&&(c=L))}let f=new Map;for(let b of i.layers){let I=b.lines;if(I.p)for(let P=0;P<I.e.length;P++){let C=I.p[6*P+2]+r,F=I.p[6*P+5]+r;if(Math.abs(C)>1e-6||Math.abs(F)>1e-6){let q=b.name+"|"+C.toFixed(2)+(Math.abs(F-C)>.005?"~"+F.toFixed(2):""),J=f.get(q)||{layer:b.name,z:C,z1:F,n:0,ids:new Set};J.n++,J.ids.add(I.e[P]),f.set(q,J)}}let L=b.pts;if(L.p)for(let P=0;P<L.e.length;P++){let C=L.p[3*P+2]+r;if(Math.abs(C)>1e-6){let F=b.name+"|"+C.toFixed(2)+"|pt",q=f.get(F)||{layer:b.name,z:C,z1:C,n:0,ids:new Set,pt:!0};q.n++,q.ids.add(L.e[P]),f.set(F,q)}}}let m=[...f.values()].map(b=>({layer:b.layer,z:b.z,z1:b.z1,n:b.n,pt:!!b.pt,id:[...b.ids][0]})),g=new Map;for(let b of m){let I=b.layer+"|"+b.pt;(g.get(I)||g.set(I,[]).get(I)).push(b)}let x=[];for(let b of g.values())if(b.length<=8)x.push(...b);else{let I=1/0,L=-1/0,P=0;for(let C of b)I=Math.min(I,C.z,C.z1),L=Math.max(L,C.z,C.z1),P+=C.n;x.push({layer:b[0].layer,z:I,z1:L,n:P,pt:b[0].pt,id:b[0].id,range:!0})}x.sort((b,I)=>b.z-I.z);let E=[];i.reg.forEach((b,I)=>{let L=b.s;if(L.type==="INSERT"&&L.attribs?.length&&b.v<0){let P={};for(let C of L.attribs){let F=typeof C.text=="object"?C.text?.text:C.text;C.tag&&(P[C.tag]=F)}if(E.some(C=>C.name===(P.NAME||P.Name||L.name)&&Math.hypot(C.x-ts(L.insertionPoint?.x),C.y-ts(L.insertionPoint?.y))<.01))return;E.push({id:I,x:ts(L.insertionPoint?.x),y:ts(L.insertionPoint?.y),z:ts(L.insertionPoint?.z),attrs:P,name:P.NAME||P.Name||L.name})}});let S=[];if(i.layers.forEach((b,I)=>{let L=b.pts;for(let P=0;P<L.e.length;P++)S.push({layer:b.name,li:I,id:L.e[P],x:L.p[3*P]+t,y:L.p[3*P+1]+n,z:L.p[3*P+2]+r,name:""})}),E.length)for(let b of S){let I=null,L=1.5;for(let P of E){let C=Math.hypot(P.x-b.x,P.y-b.y);C<L&&(L=C,I=P)}I&&(b.name=I.name)}let w=!x.length;return{layers:a,withZ:x,inserts:E,points:S,flat:w,zmin:u?l:0,zmax:u?c:0,noZ:i.stats.noZ||0}}function Hd(i){let e=t=>'"'+String(t).replace(/"/g,'""')+'"';return["layer,name,east,north,elevation",...i.map(t=>[e(t.layer),e(t.name),t.x.toFixed(4),t.y.toFixed(4),t.z.toFixed(4)].join(","))].join(`\r
`)}var La=(i,e,t)=>"#"+(16777216|i<<16|e<<8|t).toString(16).slice(1),Xd=i=>String(i).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]);function $d(i,e={}){let t=!!e.light,n=e.width||1600,r=e.maxTexts??4e3,a=e.maxFillTris??6e4,{rmin:l,rmax:c}=i.bounds,u=l[0],f=c[0],m=l[1],g=c[1],x=(f-u)*.04||1,E=(g-m)*.04||1;u-=x,f+=x,m-=E,g+=E;let S=f-u,w=g-m,b=S/n,I=t?"#ffffff":"#101418",L=t?"#000000":"#ffffff",P=me=>{let te=(me[0]*299+me[1]*587+me[2]*114)/1e3;return t&&te>215?[0,0,0]:!t&&te<40?[255,255,255]:me},C=me=>(Math.round(me*1e3)/1e3).toString(),F=[];F.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${C(u)} ${C(-g)} ${C(S)} ${C(w)}" width="${n}" height="${Math.round(n*w/S)}">`),F.push(`<title>Plan view (local coords, origin E=${i.origin[0]} N=${i.origin[1]})</title>`),F.push(`<rect x="${C(u)}" y="${C(-g)}" width="${C(S)}" height="${C(w)}" fill="${I}"/>`);let q=b*1.1,J=0;for(let me=0;me<i.layers.length;me++){let te=i.layers[me];if(!(te.hidden||e.visible&&e.visible[me]===!1)){F.push(`<g id="${Xd(te.name)}">`);for(let[fe,Me]of[[te.fills,1],[te.tris,.55],[te.pfills,.9]]){if(!fe||!fe.p||!fe.p.length)continue;let ye=new Map;for(let _e=0;_e<fe.p.length/9&&J<a;_e++,J++){let ve=P([fe.c[9*_e],fe.c[9*_e+1],fe.c[9*_e+2]]),Ve=La(...ve),ke=ye.get(Ve);ke||ye.set(Ve,ke=[]);let De=fe.p,Ye=9*_e;ke.push(`M${C(De[Ye])} ${C(-De[Ye+1])}L${C(De[Ye+3])} ${C(-De[Ye+4])}L${C(De[Ye+6])} ${C(-De[Ye+7])}Z`)}for(let[_e,ve]of ye)F.push(`<path d="${ve.join("")}" fill="${_e}" fill-opacity="${Me}" stroke="none"/>`)}if(te.lines.p&&te.lines.p.length){let fe=new Map,Me=te.lines.p.length/6;for(let ye=0;ye<Me;ye++){let _e=P([te.lines.c[6*ye],te.lines.c[6*ye+1],te.lines.c[6*ye+2]]),ve=La(..._e),Ve=fe.get(ve);Ve||fe.set(ve,Ve=[]);let ke=te.lines.p,De=6*ye;Ve.push(`M${C(ke[De])} ${C(-ke[De+1])}L${C(ke[De+3])} ${C(-ke[De+4])}`)}for(let[ye,_e]of fe)F.push(`<path d="${_e.join("")}" fill="none" stroke="${ye}" stroke-width="${C(q)}" stroke-linecap="round"/>`)}if(te.pts.p&&te.pts.p.length){let fe=La(...P([te.pts.c[0],te.pts.c[1],te.pts.c[2]])),Me=b*3;F.push(`<g fill="${fe}">${Array.from({length:te.pts.p.length/3},(ye,_e)=>`<circle cx="${C(te.pts.p[3*_e])}" cy="${C(-te.pts.p[3*_e+1])}" r="${C(Me)}"/>`).join("")}</g>`)}F.push("</g>")}}let ue=0;F.push('<g font-family="Arial, Helvetica, sans-serif">');for(let me of i.layers)if(!me.hidden)for(let te of me.texts){if(ue>=r)break;let fe=te.h||1;if(fe/b<2.2)continue;let Me=te.T,ye=Math.atan2(Me[1],Me[0])*180/Math.PI,_e=La(...P([te.rgb>>16&255,te.rgb>>8&255,te.rgb&255])),ve=te.hal===1||te.hal===4?"middle":te.hal===2?"end":"start";String(te.str).split(`
`).slice(0,6).forEach((ke,De)=>{F.push(`<text transform="translate(${C(Me[12]-i.origin[0])} ${C(-(Me[13]-i.origin[1])+De*fe*1.5)}) rotate(${C(-ye)})" font-size="${C(fe)}" fill="${_e}" text-anchor="${ve}">${Xd(ke)}</text>`)}),ue++}if(F.push("</g>"),e.scaleBar!==!1){let me=[1,2,5,10,20,50,100,200,500,1e3,2e3,5e3],te=S*.2,fe=me.filter(_e=>_e<=te).pop()||me[0],Me=u+S*.03,ye=-(m+w*.03);F.push(`<g stroke="${L}" stroke-width="${C(b*2)}" fill="${L}"><path d="M${C(Me)} ${C(ye)}h${C(fe)}"/><text x="${C(Me)}" y="${C(ye-b*6)}" font-size="${C(b*14)}" stroke="none">${fe} u</text></g>`)}return F.push("</svg>"),F.join(`
`)}var qi=Tn.dirname(Qy(import.meta.url)),ll={AC1006:"R10",AC1009:"R11/R12",AC1012:"R13",AC1014:"R14",AC1015:"AutoCAD 2000",AC1018:"AutoCAD 2004",AC1021:"AutoCAD 2007",AC1024:"AutoCAD 2010",AC1027:"AutoCAD 2013",AC1032:"AutoCAD 2018+"};function Jd(i){let e=[qi,Tn.join(qi,".."),Tn.join(qi,"..","assets"),Tn.join(qi,"..","dist"),Tn.join(qi,"..","skills","dwg-viewer","assets"),Tn.join(qi,"..","skills","dwg-viewer","scripts")];for(let t of e)for(let n of i){let r=Tn.join(t,n);if(yi.existsSync(r))return r}return null}async function jy(){let i=Jd(["libredwg-web.wasm.gz"]);if(i)return new Uint8Array(Zd.gunzipSync(yi.readFileSync(i)));try{let e=Tn.join(qi,"..","node_modules","@mlightcad","libredwg-web","wasm","libredwg-web.wasm");return new Uint8Array(yi.readFileSync(e))}catch{throw new Error("libredwg-web.wasm(.gz) not found")}}async function ev(i){let e=yi.readFileSync(i),t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength),n=e.subarray(0,6).toString("latin1"),r=Tn.extname(i).toLowerCase(),a=[];if(/^AC\d{4}$/.test(n)){let f=await jy(),m=Yl.createByWasmInstance(await Ki({wasmBinary:f})),g=console.warn;console.warn=(...E)=>a.push(E.join(" "));let x;try{let E=m.dwg_read_data(t,vs.DWG);if(!E)throw new Error("LibreDWG could not open the file (damaged or unsupported version).");x=m.convert(E);try{m.dwg_free(E)}catch{}}finally{console.warn=g}return{model:Kc(x),meta:{format:"DWG",version:`${ll[n]||"?"} (${n})`,warnings:a,bytes:e.length,buf:e}}}if(r===".dwg")throw new Error("Not a valid DWG (missing AC10xx signature). If it is a DXF, rename it to .dxf.");let l=e.toString("utf8");if(l.includes("\uFFFD")&&(l=e.toString("latin1")),/^AutoCAD Binary DXF/.test(l))throw new Error("Binary DXF is not supported; save it as ASCII DXF or use the DWG.");let c=new oa().parseSync(l),u=c.header?.$ACADVER||"";return{model:Zc(c),meta:{format:"DXF",version:ll[u]?`${ll[u]} (${u})`:u,warnings:a,bytes:e.length,buf:e}}}var tv={0:"unitless",1:"in",2:"ft",3:"mi",4:"mm",5:"cm",6:"m",7:"km",10:"yd",14:"dm"};function nv(i,e){let t=e.origin,n=i.insUnits,r=Math.abs(t[0])>1e5&&Math.abs(t[1])>1e6,a=tv[n]||"unitless";return r&&[0,1,4,5,void 0].includes(n)?{declared:a,effective:"m",note:"Coordinates look like UTM; assuming meters"}:{declared:a,effective:a==="unitless"?"u":a,note:""}}function iv(i){let e={};for(let t of i.entities)e[t.type]=(e[t.type]||0)+1;return Object.fromEntries(Object.entries(e).sort((t,n)=>n[1]-t[1]))}function rv(i,e,t,n){let r=t.origin,a=t.bounds,l=nv(e.model,t),c=f=>[f[0]+r[0],f[1]+r[1],f[2]+r[2]],u=[];for(let f of t.layers){let m=new Set;for(let g of f.texts){let x=String(g.str).replace(/\s+/g," ").trim();!x||m.has(x)||(m.add(x),u.push({layer:f.name,text:x.slice(0,120),x:+g.T[12].toFixed(3),y:+g.T[13].toFixed(3)}))}}return{file:Tn.basename(i),format:e.meta.format,version:e.meta.version,bytes:e.meta.bytes,units:l,stats:t.stats,entityTypes:iv(e.model),blocks:[...e.model.blocks.keys()].filter(f=>!/^\*[DUdu]/.test(f)).slice(0,60),extents:{robustMin:c(a.rmin).map(f=>+f.toFixed(3)),robustMax:c(a.rmax).map(f=>+f.toFixed(3)),fullMin:c(a.min).map(f=>+f.toFixed(3)),fullMax:c(a.max).map(f=>+f.toFixed(3))},elevation:{flat:n.flat,objectsWithNonZeroZ:n.withZ.slice(0,50),noElevationMarkers:n.noZ},layers:t.layers.map(f=>{let m=n.layers.find(g=>g.name===f.name);return{name:f.name,objects:f.count,hidden:f.hidden,color:"#"+f.color.toString(16).padStart(6,"0"),zMin:m?+m.zmin.toFixed(3):null,zMax:m?+m.zmax.toFixed(3):null}}),points:n.points.length,blockAttributes:n.inserts.map(f=>({name:f.name,x:+f.x.toFixed(3),y:+f.y.toFixed(3),z:+f.z.toFixed(3),attributes:f.attrs})),texts:u.slice(0,400),warnings:e.meta.warnings.slice(0,5)}}function sv(i){let e=[];e.push(`# ${i.file}`),e.push(`${i.format} ${i.version} \xB7 ${(i.bytes/1048576).toFixed(2)} MB \xB7 units: ${i.units.declared}${i.units.note?" \u2192 "+i.units.effective+" ("+i.units.note+")":""}`),e.push(`Objects drawn: ${i.stats.entities} \xB7 segments ${i.stats.segments} \xB7 triangles ${i.stats.triangles} \xB7 texts ${i.stats.texts} \xB7 points ${i.points}`),e.push(`Entity types: ${Object.entries(i.entityTypes).map(([r,a])=>`${r} ${a}`).join(", ")}`);let t=i.extents;e.push(`
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
`)}var cl=`dwg-tool \u2014 read DWG/DXF offline

  node dwg-tool.mjs info    <file> [--json]                 summary: layers, extents, elevations, objects not drawn
  node dwg-tool.mjs points  <file> [--layer NAME] [--out points.csv]
  node dwg-tool.mjs texts   <file> [--layer NAME] [--out texts.csv]
  node dwg-tool.mjs plan    <file> --out plan.svg [--light] [--width 1600]
  node dwg-tool.mjs viewer  <file> --out viewer.html [--lang en|es]   standalone 3D viewer with the file embedded
  node dwg-tool.mjs viewer  --out viewer.html                          empty viewer (drag & drop a file)
`;function av(i){let e={_:[]};for(let t=0;t<i.length;t++){let n=i[t];if(n.startsWith("--")){let r=n.slice(2),a=i[t+1];a===void 0||a.startsWith("--")?e[r]=!0:(e[r]=a,t++)}else e._.push(n)}return e}var qd=i=>'"'+String(i).replace(/"/g,'""')+'"',Da=(i,e)=>{i&&i!==!0?(yi.writeFileSync(i,e),console.error("wrote "+i)):process.stdout.write(e+`
`)};async function ov(){let[i,...e]=process.argv.slice(2),t=av(e);if(!i||i==="help"||i==="--help"){console.log(cl);return}if(i==="viewer"&&!t._[0])return Kd(null,t);let n=t._[0];if(!n||!yi.existsSync(n))throw new Error(`File not found: ${n||"(none)"}
${cl}`);let r=await ev(n);if(i==="viewer")return Kd(r,t,n);let a=Vd(r.model,{light:!!t.light}),l=Yd(a,r.model);if(i==="info"){let c=rv(n,r,a,l);Da(t.out,t.json?JSON.stringify(c,null,2):sv(c))}else if(i==="points"){let c=l.points.filter(u=>!t.layer||u.layer===t.layer);Da(t.out,Hd(c))}else if(i==="texts"){let c=[];for(let u of a.layers)if(!t.layer||u.name===t.layer)for(let f of u.texts)c.push([qd(u.name),qd(String(f.str).replace(/\s+/g," ")),f.T[12].toFixed(4),f.T[13].toFixed(4),f.T[14].toFixed(4)].join(","));Da(t.out,["layer,text,east,north,elevation",...c].join(`\r
`))}else if(i==="plan"){if(!t.out)throw new Error("plan needs --out plan.svg");Da(t.out,$d(a,{light:!!t.light,width:Number(t.width)||1600}))}else throw new Error("Unknown command: "+i+`
`+cl)}function Kd(i,e,t){if(!e.out)throw new Error("viewer needs --out viewer.html");let n=e.lang==="es"?"es":"en",r=Jd([n==="es"?"viewer-template.es.html":"viewer-template.html",n==="es"?"dwg-viewer-es.html":"dwg-viewer.html"]);if(!r)throw new Error("Viewer template not found (run `npm run build` or use the packaged skill).");let a=yi.readFileSync(r,"utf8"),l=/<script id="embed-b64" type="application\/octet-stream" data-name="[^"]*">[^<]*<\/script>/;if(!l.test(a))throw new Error("Viewer template has no embed slot.");let c=t?Tn.basename(t):"",u=i?Zd.gzipSync(i.meta.buf,{level:9}).toString("base64"):"";a=a.replace(l,()=>`<script id="embed-b64" type="application/octet-stream" data-name="${c.replace(/"/g,"")}">${u}</script>`),yi.writeFileSync(e.out,a),console.error(`wrote ${e.out} (${(a.length/1048576).toFixed(1)} MB)${c?" with "+c+" embedded":""}`)}ov().catch(i=>{console.error("Error: "+(i.message||i)),process.exit(1)});export{ev as readFile};
