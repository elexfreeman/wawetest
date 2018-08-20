import {rest_server} from './settings';

/*список клиентов*/
export function getList(offset) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", url: rest_server + "Wtest_rest/getList",
            data: JSON.stringify({
                offset: offset
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                resolve(data);
            },
            failure: function(errMsg) {
                reject(errMsg);
            }
        });
    });
}

/*удаляет клиента*/
export function setDeleted(client_id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", url: rest_server + "Wtest_rest/setDeleted",
            data: JSON.stringify({
                client_id: client_id
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                resolve(data);
            },
            failure: function(errMsg) {
                reject(errMsg);
            }
        });
    });
}


/*добавляет клиента*/
export function addClient(client) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", url: rest_server + "Wtest_rest/add",
            data: JSON.stringify(client),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                resolve(data);
            },
            failure: function(errMsg) {
                reject(errMsg);
            }
        });
    });
}

/*добавляет клиента*/
export function updateClient(client) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", url: rest_server + "Wtest_rest/update",
            data: JSON.stringify(client),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                resolve(data);
            },
            failure: function(errMsg) {
                reject(errMsg);
            }
        });
    });
}

/*информация о клиенте по id*/
export function getClient(client_id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", url: rest_server + "Wtest_rest/getClient",
            data: JSON.stringify({
                client_id: client_id
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                resolve(data);
            },
            failure: function(errMsg) {
                reject(errMsg);
            }
        });
    });
}