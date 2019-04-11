# bookingProject
[2019-04-08]
mysql을 사용<br/>
mysql에서 es6을 사용.<br/>
mysql을 모듈화해서 적용을 했는데 오류가 계속 생겼다.<br/>
1. 오류1 : config에 DB정보를 작성해서 host : config.host이런 식으로 작성을 했음<br/>
       이러한 경우에는<br/>
       <pre><code>
       code: 'ER_ACCESS_DENIED_ERROR',
        errno: 1045,
        sqlMessage:
        'Access denied for user \'\'@\'localhost\' (using password: NO)',
        sqlState: '28000',
         fatal: true 
        </code></pre><br/>
        라고 에러 코드가 나옴<br/>
    그래서 config에 작성한것을 그냥 app에다가 작성을 했다.<br/>
    <br/>
    일단 모듈화하는 것은 천천히 다시 생각해보는 걸로<br/>
    <br/>
    <br/>
1. 오류 2 : app에다가 작성을 다하면서 host 까지 작성을 같이 했다 3307<br/>
        이러한 경우에는<br/>
      <pre><code>
      { Error: connect ECONNREFUSED 127.0.0.1:3307
         at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1117:14)
         --------------------
         at Protocol._enqueue (C:\Users\almon\OneDrive\바탕 화면\bookingProject\node_modules\mysql\lib\protocol\Protocol.js:144:48)
         at Protocol.handshake (C:\Users\almon\OneDrive\바탕 화면\bookingProject\node_modules\mysql\lib\protocol\Protocol.js:51:23)
        at Connection.connect (C:\Users\almon\OneDrive\바탕 화면\bookingProject\node_modules\mysql\lib\Connection.js:118:18)
        at Object.<anonymous> (C:\Users\almon\OneDrive\바탕 화면\bookingProject\server\app.js:45:12)
        at Module._compile (internal/modules/cjs/loader.js:689:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
        at Module.load (internal/modules/cjs/loader.js:599:32)
         at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
         at Function.Module._load (internal/modules/cjs/loader.js:530:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
        errno: 'ECONNREFUSED',
        code: 'ECONNREFUSED',
        syscall: 'connect',
        address: 'localhost',
         port: 3307,
        fatal: true }</code></pre> <br/>
 라고 오류메세지가 나왔는데<br/>
 host 작성한 것을 지워주니 사라졌다.<br/>
 결과적으로 node.js와 mariadb와 연결 완료!<br/>
 
        
