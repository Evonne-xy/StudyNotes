## 什么是cookie session token oauth JWT?

# Cookie
原来浏览网页时，server不知道你是谁，你的请求和其他人的请求是一样的。
cookie的诞生是为了区分用户，并且显示用户相关的内容
cookie是由web服务器保存在客户端上的文件 （文件包含：用户信息，何时连接到站点）


`cookie的执行流程：`
1. 客户端发送http请求到服务器端
2. 服务器接收请求，返回一个response，这个response就包含了set-cookie的头部，浏览器保存cookie
3. 浏览器第二次访问，将保存的cookie发给后台，后台返回后 更新了cookie并且再次保存。


## Session
浏览器打开以一个网页，用的是HTTP协议，这个协议是无状态的，也就是说上一次请求和这一次是没有关联的.

session是一个会话，他是服务器和客户端建立的一个连接标志。
sessionID是一个unique的标识，他是随机生成的。
服务器保存了session的信息在数据库里，用户只有cookie里的setion Id保存在电脑文件里



`例子:登录银行系统`

1. 用户输入的用户名和密码在bank server上
2. server需要check database，看看是否你的credentials是match的
3. 如果验证成功，页面显示你的账户

background：
1.当服务器验证过credentials，会创建一个entry在database中，这个里面是login event信息（customerId, loginTime,ip sessionId），然后给予一个session id (也就是说你的用户名和密码换了sessionID)
2.当你登录完成后，你访问另外一个页面，浏览器会自动发送包含sessionID的cookie，server会检查是否valid
3.如果你log out了，服务器的数据库里 的login会话，会变成invalid，服务器会让浏览器删除包含session Id 的cookie。 session会过期，当你在一段时间里不操作。

## Token

Token是验证用户身份的，token是无状态的，它不需要保存到服务器中。

简单的token构成：
1.UserId  2. time  3.sign（token的前几位+盐以哈希算法压缩成16进制字符串）



`身份验证流程：`
1.客户端输入密码用户名
2.服务端收到请求，并验证，验证成功，服务器会签发一个token，并发送给客户端
3.客户端收到token，存储起来，放在cookie或者local storage
4.用户每次像服务器端请求资源时， 需要将token发过来，服务器用同样的算法和密钥对数据进行签名与token的签名进行比较，如果相同，服务器就知道用户登录过了，然后向客户端返回请求数据。


`例子`
下载了一个软件可以追踪你的花费，但是你不想将你的用户名和密码给这个软件，这个时候这个app就会redirect去你的bank，输入用户名和密码，然后银行会问你是否给这个软件权限让他能看到你的交易记录，这个软件就收到这个token允许访问交易记录。

这个token就很像是一个临时的密码，但是他又和密码不一样的是：token限制了你可以访问的data，比如这软件仅仅能看到交易记录。

## 对比：
session(cookies)：
1.当使用cookie时候，仅仅有两个party，（客户端和server）
2.可以访问到所有的信息
3.cookie http header

Token
1.会包含很多parties，并且都不信任对方
2.limited lifetime
3.仅仅能访问到一些data
4.authentication http header

session based authentication一般使用在网页中

token based authentication 一般适用于app


## Oauth：
保护用户的密码时安全的，当用户使用google facebook登录的时候，会跳转到auth页面进行登录，而不是在第三方软件上输入Google Facebook的密码和用户名登录。

并且auth好处，比如你向登录Google email，你需要跳转到Google account页面登录，而不是Google Email登录，因为用户在不同的平台输入密码，只要攻破一个，就可以窃取密码。如果只在一个地方输入，那就是只需要这一个team去注意密码防护就好了


## JWT
是目前最流行的跨域认证解决方案，让session持久化
JWT原理是服务器认证后，生成一个JSON对象，发回给用户。 JWT token包含的不仅仅是一个临时的密码，这个也会存储一些customerid, scopes,expires的信息。然后为了防止用户篡改数据，服务器生成的时候这些信息会加上一个新的签名