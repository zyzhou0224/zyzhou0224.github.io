(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"mongodb入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb入门","aria-hidden":"true"}},[a._v("#")]),a._v(" mongodb入门")]),a._v(" "),e("p",[a._v("时间："),e("code",[a._v("2018-09-12")])]),a._v(" "),e("p",[a._v("标签："),e("code",[a._v("mongodb")])]),a._v(" "),e("h2",{attrs:{id:"_1-安装mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.安装mongodb")]),a._v(" "),e("blockquote",[e("p",[a._v("本文除了1.2节的环境为centos外，其余操作均在Mac中进行")])]),a._v(" "),e("h3",{attrs:{id:"_1-1-mac环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mac环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 Mac环境")]),a._v(" "),e("p",[a._v("打开终端，使用homebrew直接安装")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ brew install mongodb\n")])])]),e("p",[a._v("安装完成后，创建数据库存储目录，mac默认以下路径")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ sudo mkdir -p /data/db\n")])])]),e("p",[a._v("给予该目录权限，不然用权限方式启动时会报错")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ sudo chown -R 你的用户名 /data/db\n")])])]),e("h3",{attrs:{id:"_1-2-centos环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-centos环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 centos环境")]),a._v(" "),e("p",[a._v("下载安装包")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.12.tgz\n")])])]),e("p",[a._v("解压")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tar -zxvf mongodb-linux-x86_64-3.2.12.tgz\n")])])]),e("p",[a._v("移动到指定位置")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mv  mongodb-linux-x86_64-3.2.12/ /usr/local/mongodb\n")])])]),e("p",[a._v("在/usr/local/mongodb下创建文件夹")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir -p /data/db\nmkdir  /logs\n")])])]),e("p",[a._v("在/usr/local/mongodb/bin下新建配置")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vi mongodb.conf\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("dbpath=/usr/local/mongodb/data/db #数据文件存放目录\nlogpath=/usr/local/mongodb/logs/mongodb.log #日志文件存放目录\nport=27017 #端口\nfork=true #以守护程序的方式启用，即在后台运行\nnohttpinterface=true\nauth=true\nbind_ip=0.0.0.0\n")])])]),e("p",[a._v("环境变量配置")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vi /etc/profile\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("export MONGODB_HOME=/usr/local/mongodb\nexport PATH=$PATH:$MONGODB_HOME/bin\n")])])]),e("p",[a._v("保存后，重启系统配置")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("source /etc/profile\n")])])]),e("h2",{attrs:{id:"_2-初次启动mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-初次启动mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.初次启动mongodb")]),a._v(" "),e("p",[a._v("启动mongodb")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mongod\n")])])]),e("p",[a._v("值得注意的是，如果没有为mongodb创建环境变量，则需进入mongodb的bin文件夹下，执行./mongod")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ cd /usr/local/Cellar/mongodb/3.6.3/bin\n$ ./mongod\n")])])]),e("p",[a._v("第一次启动后会报一些警告，例如")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("018-04-02T19:53:37.674+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.\n")])])]),e("p",[a._v("这是因为新版本的MongDB增加了安全性设计，推荐用户创建使用数据库时进行验证")]),a._v(" "),e("p",[a._v("如果用户想建立简单连接，则会提示警告信息")]),a._v(" "),e("h2",{attrs:{id:"_3-添加管理用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加管理用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.添加管理用户")]),a._v(" "),e("p",[a._v("首先进入交互界面")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mongo\nMongoDB shell version v3.6.3\nconnecting to: mongodb://127.0.0.1:27017\nMongoDB server version: 3.6.3\n")])])]),e("p",[a._v("切换到admin数据库")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> use admin\n")])])]),e("p",[a._v("设置管理用户")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> db.createUser({user:"admin",pwd:"123456",roles:[{role: "userAdminAnyDatabase", db:"admin"}]})\n')])])]),e("h2",{attrs:{id:"_4-使用权限方式启动mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用权限方式启动mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.使用权限方式启动mongodb")]),a._v(" "),e("p",[a._v("添加完管理用户后，可以使用db.shutdownServer()关闭MongoDB")]),a._v(" "),e("p",[a._v("这里注意不要使用kill直接去杀掉mongodb进程，否则请去data/db目录下删除mongo.lock文件")]),a._v(" "),e("p",[a._v("然后用权限方式启动mongodb，注意日志路径需要指定到一个文件，而不是文件夹")]),a._v(" "),e("p",[a._v("输入命令后提示以下信息则表示正常")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mongod --dbpath=/data/db --logpath=/data/logs/db.log --fork --auth\nabout to fork child process, waiting until server is ready for connections.\nforked process: 10005\nchild process started successfully, parent exiting\n")])])]),e("p",[a._v("再次使用mongo进入交互界面，这时候不会有警告了")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mongo\nMongoDB shell version v3.6.3\nconnecting to: mongodb://127.0.0.1:27017\nMongoDB server version: 3.6.3\n")])])]),e("p",[a._v("仍然切换到admin数据库，并用刚才创建的账户来验证，成功的话会显示1")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> use admin\nswitched to db admin\n> db.auth("admin","123456")\n1\n')])])]),e("h2",{attrs:{id:"_5-创建操作用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建操作用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.创建操作用户")]),a._v(" "),e("p",[a._v("验证之后还是做不了操作，因为admin只有用户管理权限，还需创建操作用户")]),a._v(" "),e("p",[a._v("新建一个数据库nodedb，创建操作用户node")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> use nodedb\nswitched to db nodedb\n> db\nnodedb\n> db.createUser({user:"node",pwd:"123456",roles:[{role:"readWrite",db:"nodedb"}]})\nSuccessfully added user: {\n\t"user" : "node",\n\t"roles" : [\n\t\t{\n\t\t\t"role" : "readWrite",\n\t\t\t"db" : "nodedb"\n\t\t}\n\t]\n}\n')])])]),e("p",[a._v("然后进行验证，成功同样返回1")]),a._v(" "),e("div",{staticClass:"language-zsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> db.auth("node","123456")\n1\n')])])])])}],!1,null,null,null);n.options.__file="mongodb-study.md";s.default=n.exports}}]);