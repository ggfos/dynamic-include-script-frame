/**
 * 添加新活动
 * */
function addNewEventFn(name, pier, desc, loc, startTime, lastTime, roles, distance, picture, banners, longitude, latitude) {
    if ("" == name || name == undefined) {
        name = getValueById("events_newEvent_name");
    }
    if ("" == pier || pier == undefined) {
        pier = getValueById("events_newEvent_pier");
    }
    if ("" == desc || desc == undefined) {
        desc = getValueById("events_newEvent_desc");
    }
    if ("" == loc || loc == undefined) {
        loc = getValueById("events_newEvent_loc");
    }
    if ("" == startTime || startTime == undefined) {
        startTime = Number(getValueById("events_newEvent_startTime"));
    }
    if ("" == lastTime || lastTime == undefined) {
        lastTime = parseInt(getValueById("events_newEvent_lastTime"));
    }
    if ("" == roles || roles == undefined) {
        roles = getValueById("events_newEvent_roles").split(",");
    }
    if ("" == distance || distance == undefined) {
        distance = getValueById("events_newEvent_distance");
    }
    if ("" == picture || picture == undefined) {
        picture = getValueById("events_newEvent_picture");
    }
    if ("" == banners || banners == undefined) {
        banners = getValueById("events_newEvent_banners").split(",");
    }
    if ("" == longitude || longitude == undefined) {
        longitude = getValueById("events_newEvent_longitude");
    }
    if ("" == latitude || latitude == undefined) {
        latitude = getValueById("events_newEvent_latitude");
    }
    wsp.createNewEvent2(name, pier, desc, loc, startTime, lastTime, roles, distance, picture, banners, longitude, latitude, {
            auto: false,
            m: "添加活动"
        }
    )
    ;
}

/**
 * 参加活动
 * */
function joinEventFn(eventId, otherUid, role) {
    if ("" == eventId || eventId == undefined) {
        eventId = getValueById("joinEventShow_eventId");
    }
    if ("" == otherUid || otherUid == undefined) {
        otherUid = getValueById("joinEventShow_otherUid");
    }
    if ("" == role || role == undefined) {
        role = parseInt(getValueById("joinEventShow_role"));
    }
    wsp.joinEvent(eventId, otherUid, role, {
        auto: false,
        m: "参加活动"
    });

}

/**
 * 获取线上正在进行的活动
 * */
function getEventByDistanceFn(limit, distance, filter) {
    if ("" == limit || limit == undefined) {
        limit = parseInt(getValueById("getEventByDistanceShow_input1"));
    }
    if ("" == distance || distance == undefined) {
        distance = parseFloat(getValueById("getEventByDistanceShow_input2"));
    }
    if ("" == filter || filter == undefined) {
        filter = getValueById("getEventByDistanceShow_input3");
    }
    wsp.getEventByDistance(limit, distance, filter, "getEventByDistance");

}

/**
 * 获取参加活动的人
 * */
function getParticipantsFn() {
    var eventId = getValueById("events_getParticipants_eventId");
    var limit = getValueById("events_getParticipants_limit");
    var timestamp = getValueById("events_getParticipants_timestamp");
    wsp.getParticipants(eventId, limit, timestamp, "查看参加活动人员");
}

/**
 * 添加参展商
 * */
function addExhibitorFn() {
    var baseId = "addExhibitorShow_";
    var eventId = getValueById(baseId + "eventId");
    var name = getValueById(baseId + "name");
    var logo = getValueById(baseId + "logo");
    var desc = getValueById(baseId + "desc");
    var location = getValueById(baseId + "location");
    var category = getValueById(baseId + "category");
    wsp.addExhibitor(eventId, name, logo, desc, location, category, "添加展商");

}

/**
 * 创建参展商
 * */
function createExhibitorFn() {
    var baseId = "createExhibitorShow_";
    var eventId = getValueById(baseId + "eventId");
    var otherUid = getValueById(baseId + "otherUid");
    var name = getValueById(baseId + "name");
    var logo = getValueById(baseId + "logo");
    var desc = getValueById(baseId + "desc");
    var location = getValueById(baseId + "location");
    var category = getValueById(baseId + "category");
    wsp.createExhibitor(eventId, otherUid, name, logo, desc, location, category, "创建展商");
}

/**
 * 获取参展商列表
 * */
function getExhibitorListFn() {
    var eventId = getValueById("getExhibitorListShow_input1");
    wsp.getExhibitorList(eventId, "获取参展商列表")
}

/**
 * 获取参展商信息
 * */
function getExhibitorInfoFn() {
    var exhibitorId = getValueById("events_getExhibitorInfo_exhibitorId");
    wsp.getExhibitorInfo(exhibitorId, "获取参展商信息")
}

/**
 * 更新参展商信息
 * */
function updateExhibitorFn() {
    var baseId = "updateExhibitorShow_";
    var otherUid = getValueById(baseId + "otherUid");
    var exhibitorId = getValueById(baseId + "exhibitorId");
    var name = getValueById(baseId + "name");
    var logo = getValueById(baseId + "logo");
    var desc = getValueById(baseId + "desc");
    var location = getValueById(baseId + "location");
    var category = getValueById(baseId + "category");
    wsp.updateExhibitor(otherUid, exhibitorId, name, logo, desc, location, category, "更新展商信息")
}

/**
 * 添加展商成员
 * */
function addExhibitorMemberFn() {
    var otherUid = getValueById("addExhibitorMemberShow_input1")
    var exhibitorId = getValueById("addExhibitorMemberShow_input2")
    var otherIds = getValueById("addExhibitorMemberShow_input3")
    wsp.addExhibitorMember(otherUid, exhibitorId, strToArr(otherIds), "添加展商成员");
}

/**
 * 删除展商成员
 * */
function fireExhibitorMemberFn() {
    var otherUid = getValueById("fireExhibitorMemberShow_input1")
    var exhibitorId = getValueById("fireExhibitorMemberShow_input2")
    var otherIds = getValueById("fireExhibitorMemberShow_input3")
    wsp.fireExhibitorMember(otherUid, exhibitorId, strToArr(otherIds), "删除展商成员");
}

/**
 * 加入展商
 * */
function joinExhibitorFn() {
    var exhibitorId = getValueById("events_joinExhibitor_exhibitorId")
    var otherId = getValueById("events_joinExhibitor_otherId")
    var role = getValueById("events_joinExhibitor_role")
    var eventId = getValueById("events_joinExhibitor_eventId")
    wsp.joinExhibitor(exhibitorId, otherId, role, eventId, "加入展商");
}

/**
 *  * */
function quitEventFn() {
    var otherId = getValueById("events_quitEvent_otherUid")
    var eventId = getValueById("events_quitEvent_eventId")
    wsp.quitEvent(eventId, otherId, "加入展商");
}

/**
 * 退出展商
 * */
function quitExhibitorFn() {
    var exhibitorId = getValueById("quitExhibitorShow_input1")
    var otherId = getValueById("quitExhibitorShow_input2")
    wsp.quitExhibitor(exhibitorId, otherId, "退出展商");
}