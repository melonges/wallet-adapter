(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2303:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3303)}])},3140:function(e,n,t){"use strict";t.d(n,{d:function(){return h}});var r=t(9980),s=t(9644),a=t(749),c=t(6563),o=t(628),l=t(2363),i=(0,c.ZP)("span")((function(){return{display:"flex",alignItems:"center"}})),u=(0,c.ZP)(a.Z)((function(){return{color:"#ffffff",display:"flex",alignItems:"center",marginLeft:16,textDecoration:"underline","&:hover":{color:"#000000"}}})),d=(0,c.ZP)(s.Z)((function(){return{fontSize:20,marginLeft:8}}));function h(){var e=(0,o.Ds)().enqueueSnackbar;return(0,l.useCallback)((function(n,t,s){e((0,r.jsxs)(i,{children:[t,s&&(0,r.jsxs)(u,{href:"https://explorer.solana.com/tx/".concat(s,"?cluster=devnet"),target:"_blank",children:["Transaction",(0,r.jsx)(d,{})]})]}),{variant:n})}),[e])}},3303:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(7891),s=t(7838),a=t(9980),c=t(7114),o=t(5946),l=t(9733),i=t(9787),u=t(5567),d=t(2971),h=t(9474),f=t(646),b=t(747),x=t.n(b),p=t(2363),Z=JSON.parse('{"i8":"0.18.15-rc.0"}'),j=t(2329),g=t(8301),w=t(8833),k=t(5593),v=t(4833),_=t(3140),m=function(){var e=(0,w.R)().connection,n=(0,k.O)().publicKey,t=(0,_.d)(),c=(0,p.useCallback)((0,r.Z)((function(){var r,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(!n)return t("error","Wallet not connected!"),[2];r="",s.label=1;case 1:return s.trys.push([1,4,,5]),[4,e.requestAirdrop(n,v.LAMPORTS_PER_SOL)];case 2:return r=s.sent(),t("info","Airdrop requested:",r),[4,e.confirmTransaction(r,"processed")];case 3:return s.sent(),t("success","Airdrop successful!",r),[3,5];case 4:return a=s.sent(),t("error","Airdrop failed! ".concat(null===a||void 0===a?void 0:a.message),r),[3,5];case 5:return[2]}}))})),[n,t,e]);return(0,a.jsx)(g.Z,{variant:"contained",color:"secondary",onClick:c,disabled:!n,children:"Request Airdrop"})},y=t(778).Buffer,T=function(){var e=(0,w.R)().connection,n=(0,k.O)(),t=n.publicKey,c=n.sendTransaction,o=n.wallet,l=(0,_.d)(),i=null===o||void 0===o?void 0:o.adapter.supportedTransactionVersions,u=(0,p.useCallback)((0,r.Z)((function(){var n,r,a,o,u,d,h,f,b,x;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(!t)return l("error","Wallet not connected!"),[2];if(!i)return l("error","Wallet doesn't support versioned transactions!"),[2];if(!i.has("legacy"))return l("error","Wallet doesn't support legacy transactions!"),[2];n="",s.label=1;case 1:return s.trys.push([1,5,,6]),[4,e.getLatestBlockhashAndContext()];case 2:return r=s.sent(),a=r.context,o=a.slot,u=r.value,d=u.blockhash,h=u.lastValidBlockHeight,f=new v.TransactionMessage({payerKey:t,instructions:[{data:y.from("Hello, from the Solana Wallet Adapter example app!"),keys:[],programId:new v.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr")}],recentBlockhash:d}),b=new v.VersionedTransaction(f.compileToLegacyMessage()),[4,c(b,e,{minContextSlot:o})];case 3:return n=s.sent(),l("info","Transaction sent:",n),[4,e.confirmTransaction({blockhash:d,lastValidBlockHeight:h,signature:n})];case 4:return s.sent(),l("success","Transaction successful!",n),[3,6];case 5:return x=s.sent(),l("error","Transaction failed! ".concat(null===x||void 0===x?void 0:x.message),n),[2];case 6:return[2]}}))})),[t,l,e,c,i]);return(0,a.jsx)(g.Z,{variant:"contained",color:"secondary",onClick:u,disabled:!t||!(null===i||void 0===i?void 0:i.has("legacy")),children:"Send Legacy Transaction (devnet)"})},B=t(778).Buffer,C=function(){var e=(0,w.R)().connection,n=(0,k.O)(),t=n.publicKey,c=n.sendTransaction,o=(0,_.d)(),l=(0,p.useCallback)((0,r.Z)((function(){var n,r,a,l,i,u,d,h,f;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(!t)return o("error","Wallet not connected!"),[2];n="",s.label=1;case 1:return s.trys.push([1,5,,6]),r=(new v.Transaction).add(new v.TransactionInstruction({data:B.from("Hello, from the Solana Wallet Adapter example app!"),keys:[],programId:new v.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr")})),[4,e.getLatestBlockhashAndContext()];case 2:return a=s.sent(),l=a.context,i=l.slot,u=a.value,d=u.blockhash,h=u.lastValidBlockHeight,[4,c(r,e,{minContextSlot:i})];case 3:return n=s.sent(),o("info","Transaction sent:",n),[4,e.confirmTransaction({blockhash:d,lastValidBlockHeight:h,signature:n})];case 4:return s.sent(),o("success","Transaction successful!",n),[3,6];case 5:return f=s.sent(),o("error","Transaction failed! ".concat(null===f||void 0===f?void 0:f.message),n),[2];case 6:return[2]}}))})),[t,o,e,c]);return(0,a.jsx)(g.Z,{variant:"contained",color:"secondary",onClick:l,disabled:!t,children:"Send Transaction (devnet)"})},W=t(778).Buffer,A=function(){var e=(0,w.R)().connection,n=(0,k.O)(),t=n.publicKey,c=n.sendTransaction,o=n.wallet,l=(0,_.d)(),i=null===o||void 0===o?void 0:o.adapter.supportedTransactionVersions,u=(0,p.useCallback)((0,r.Z)((function(){var n,r,a,o,u,d,h,f,b,x,p,Z,j;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(!t)return l("error","Wallet not connected!"),[2];if(!i)return l("error","Wallet doesn't support versioned transactions!"),[2];if(!i.has(0))return l("error","Wallet doesn't support v0 transactions!"),[2];n="",s.label=1;case 1:return s.trys.push([1,6,,7]),[4,e.getAddressLookupTable(new v.PublicKey("F3MfgEJe1TApJiA14nN2m4uAH4EBVrqdBnHeGeSXvQ7B"))];case 2:return r=s.sent(),(a=r.value)?[4,e.getLatestBlockhashAndContext()]:(l("error","Address lookup table wasn't found!"),[2]);case 3:return o=s.sent(),u=o.context,d=u.slot,h=o.value,f=h.blockhash,b=h.lastValidBlockHeight,x=new v.TransactionMessage({payerKey:t,instructions:[{data:W.from("Hello, from the Solana Wallet Adapter example app!"),keys:a.state.addresses.map((function(e,n){return{pubkey:e,isWritable:n%2==0,isSigner:!1}})),programId:new v.PublicKey("Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo")}],recentBlockhash:f}),p=[a],Z=new v.VersionedTransaction(x.compileToV0Message(p)),[4,c(Z,e,{minContextSlot:d})];case 4:return n=s.sent(),l("info","Transaction sent:",n),[4,e.confirmTransaction({blockhash:f,lastValidBlockHeight:b,signature:n})];case 5:return s.sent(),l("success","Transaction successful!",n),[3,7];case 6:return j=s.sent(),l("error","Transaction failed! ".concat(null===j||void 0===j?void 0:j.message),n),[2];case 7:return[2]}}))})),[t,l,e,c,i]);return(0,a.jsx)(g.Z,{variant:"contained",color:"secondary",onClick:u,disabled:!t||!(null===i||void 0===i?void 0:i.has(0)),children:"Send V0 Transaction using Address Lookup Table (devnet)"})},M=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(634).then(t.bind(t,8634))];case 1:return[2,e.sent().WalletConnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),S=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(634).then(t.bind(t,8634))];case 1:return[2,e.sent().WalletDisconnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),G=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(634).then(t.bind(t,8634))];case 1:return[2,e.sent().WalletMultiButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),H=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(634).then(t.bind(t,8634))];case 1:return[2,e.sent().WalletModalButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),P=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(965),t.e(791)]).then(t.bind(t,1791))];case 1:return[2,e.sent().WalletConnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),D=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(965),t.e(791)]).then(t.bind(t,1791))];case 1:return[2,e.sent().WalletDisconnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),V=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(965),t.e(791)]).then(t.bind(t,1791))];case 1:return[2,e.sent().WalletDialogButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),q=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(965),t.e(791)]).then(t.bind(t,1791))];case 1:return[2,e.sent().WalletMultiButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),L=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(279).then(t.bind(t,4279))];case 1:return[2,e.sent().WalletConnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),K=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(279).then(t.bind(t,4279))];case 1:return[2,e.sent().WalletDisconnectButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),E=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(279).then(t.bind(t,4279))];case 1:return[2,e.sent().WalletMultiButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),N=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.e(279).then(t.bind(t,4279))];case 1:return[2,e.sent().WalletModalButton]}}))})),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}),O=x()((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,Promise.all([t.e(52),t.e(867)]).then(t.bind(t,4380))];case 1:return[2,e.sent().SignMessage]}}))})),{loadableGenerated:{webpack:function(){return[4380]}},ssr:!1}),R=function(){var e=(0,j.vl)(),n=e.autoConnect,t=e.setAutoConnect;return(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(o.Z,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{width:240,children:"Component"}),(0,a.jsx)(i.Z,{width:240,children:"Material UI"}),(0,a.jsx)(i.Z,{width:240,children:"Ant Design"}),(0,a.jsx)(i.Z,{width:240,children:"React UI"}),(0,a.jsxs)(i.Z,{children:["Example v",Z.i8]})]})}),(0,a.jsxs)(u.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{children:"Connect Button"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(P,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(M,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(L,{})}),(0,a.jsx)(i.Z,{})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{children:"Disconnect Button"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(D,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(S,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(K,{})}),(0,a.jsx)(i.Z,{})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{children:"Dialog/Modal Button"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(V,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(H,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(N,{})}),(0,a.jsx)(i.Z,{})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{children:"Multi Button"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(q,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(G,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(E,{})}),(0,a.jsx)(i.Z,{})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(d.Z,{title:"Only runs if the wallet is ready to connect",placement:"left",children:(0,a.jsx)(h.Z,{control:(0,a.jsx)(f.Z,{name:"autoConnect",color:"secondary",checked:n,onChange:function(e,n){return t(n)}}),label:"AutoConnect"})})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(m,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(C,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(O,{})})]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(T,{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(A,{})}),(0,a.jsx)(i.Z,{})]})]})]})}}},function(e){e.O(0,[264,774,888,179],(function(){return n=2303,e(e.s=n);var n}));var n=e.O();_N_E=n}]);