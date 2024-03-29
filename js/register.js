/**
 * Created by primos on 14-8-21.
 */

/**
 * 注册机使用规范
 * 1,定义唯一id,避免id重复,也命名跟随模块
 * 2,定义navigator
 * 3,定义pane
 * 4,load模块
 */


/**
 * 系统的第一个,通常情况下这里只有一个,因为他是活动的
 */
function acviteRegistor(registerId, registerName) {
    addActiveNavigator(registerId, registerName)//定义navigator
    addActivePane(registerId);//定义pane
    loadHtml(registerId, "modules/" + registerId + ".html")//load模块
}

/**
 * 可见的,他是直接展示在导航栏的
 */
function visiableRegistor(registerId, registerName) {
    addNavigator(registerId, registerName)//定义navigator
    appendPane(registerId);//定义pane
    loadHtml(registerId, "modules/" + registerId + ".html")//load模块
}

/**
 * 更多里面展示的导航
 */
function foldRegistor(registerId, registerName) {
    appendNavigator(registerId, registerName)//定义navigator
    appendPane(registerId);//定义pane
    loadHtml(registerId, "modules/" + registerId + ".html")//load模块
}


function register() {
    visiableRegistor("mobile", "手机")
    visiableRegistor("accounts", "账号");

    //FIXME:新添加的在下面依次添加
    foldRegistor("system", "系统");
    foldRegistor("relationship", "关系");
    foldRegistor("moments", "朋友圈")
    foldRegistor("chat", "会话")
    foldRegistor("sns", "社交")
    foldRegistor("discover", "广场")
    foldRegistor("localinfo", "本站资料")
    acviteRegistor("events", "活动")

}
