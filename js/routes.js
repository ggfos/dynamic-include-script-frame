/**
 * Created by primos on 14-8-20.
 */

/**
 * 加载网页的时候连接socket,做相关初始化
 */
function connect() {
    if (autoBind)
        wsp = makeWSProxy(wsUrl, function (evt) {
                extractor(evt);
            },
            function () {
                socketInit(true);
            }
        )
        ;
    else
        wsp = makeWSProxy(wsUrl, function (evt) {
            extractor(evt);
        })
}
/**
 * 获得url重连socket
 * @param wsUrl
 */
function reconnect(wsUrl) {
    var wsUrl = $("#system_wsUrl_url").val()
    wsp = makeWSProxy(wsUrl);
}

function polling() {
    setInterval(function () {
        pollingForward();
    }, 20000);
}


/**
 * 初始化数据
 */
function init() {
    connect();
    registerMachine();
    polling();
}
/**
 * 注册机,其实这里主要是注册其他模块的一些模板,具体的模块注册再每一个注册机里面
 */
function registerMachine() {
    register();
}
