/**
 * Created by primos on 14-8-21.
 */

function extractor(evt) {
    var json = toJson(evt.data);
    if (json.e) {
        if (json.e.c == "200002") {
            if (window.confirm('您的账号已经再其他地方登陆,重新登陆?')) {
                window.location.href = "index.html";
            }
        }

    }
    else if (json.h) {
        if (json.h["p0"] == "setting") {
            if (json.h["p1"] == "socketInit") {
                if (json.h["m"].auto = true)
                    bindFn();
            }
        } else if (json.h["p0"] == "accounts") {
            if (json.h["p1"] == "bind") {
            }
        }
    }
}