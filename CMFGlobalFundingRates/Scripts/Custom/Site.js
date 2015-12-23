$(document).ready(function () {
    initializeTorontoTable('api/CMF_TorontoData');
    initializeTorontoTableContacts('api/CMF_ContactsData/Toronto');

    initializeNewYorkTable('api/CMF_NewYorkData');
    initializeNewYorkTableContacts('api/CMF_ContactsData/NewYork');

    initializeLondon1Table('api/CMF_London1Data');
    initializeLondon2Table('api/CMF_London2Data');
    initializeLondonTableContacts('api/CMF_ContactsData/London');

    initializeSingaporeTable('api/CMF_SingaporeData');
    initializeSingaporeTableContacts('api/CMF_ContactsData/Singapore');
});

function initializeTorontoTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              var tableBody = $("#CMF_Toronto_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center'></td>");
                  td6[0].innerHTML = item.twoMonth_Fixed;

                  var td7 = $("<td class='text-center'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center'></td>");
                  td8[0].innerHTML = item.twelveMonth_Fixed;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);
                  tr.append(td5);
                  tr.append(td6);
                  tr.append(td7);
                  tr.append(td8);
                  
                  tableBody.append(tr);
              });
          });
}

function initializeTorontoTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.
              var tableBody = $("#CMF_Toronto_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='2'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='3'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });
          });
}

function initializeNewYorkTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              var tableBody = $("#CMF_NewYork_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center'></td>");
                  td6[0].innerHTML = item.oneMonth_Floating;

                  var td7 = $("<td class='text-center'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center'></td>");
                  td8[0].innerHTML = item.threeMonth_Floating;

                  var td9 = $("<td class='text-center'></td>");
                  td9[0].innerHTML = item.sixMonth_Fixed;

                  var td10 = $("<td class='text-center'></td>");
                  td10[0].innerHTML = item.sixMonth_Floating;

                  var td11 = $("<td class='text-center'></td>");
                  td11[0].innerHTML = item.twelveMonth_Fixed;

                  var td12 = $("<td class='text-center'></td>");
                  td12[0].innerHTML = item.twelveMonth_Floating;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);
                  tr.append(td5);
                  tr.append(td6);
                  tr.append(td7);
                  tr.append(td8);
                  tr.append(td9);
                  tr.append(td10);
                  tr.append(td11);
                  tr.append(td12);

                  tableBody.append(tr);
              });
          });
}

function initializeNewYorkTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.
              var tableBody = $("#CMF_NewYork_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='3'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='6'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });
          });
}

function initializeLondon1Table(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              var tableBody = $("#CMF_London1_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center'></td>");
                  td6[0].innerHTML = item.threeMonth_Fixed;

                  var td7 = $("<td class='text-center'></td>");
                  td7[0].innerHTML = item.sixMonth_Fixed;

                  var td8 = $("<td class='text-center'></td>");
                  td8[0].innerHTML = item.twelveMonth_Fixed;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);
                  tr.append(td5);
                  tr.append(td6);
                  tr.append(td7);
                  tr.append(td8);

                  tableBody.append(tr);
              });
          });
}

function initializeLondon2Table(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.
              var tableBody = $("#CMF_London2_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center'></td>");
                  td4[0].innerHTML = item.on;

                  var td5 = $("<td class='text-center'></td>");
                  td5[0].innerHTML = item.oneMonth_Indexed;

                  var td6 = $("<td class='text-center'></td>");
                  td6[0].innerHTML = item.oneMonth_FixedValue;

                  var td7 = $("<td class='text-center'></td>");
                  td7[0].innerHTML = item.threeMonth_Indexed;

                  var td8 = $("<td class='text-center'></td>");
                  td8[0].innerHTML = item.threeMonth_FixedValue;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);
                  tr.append(td5);
                  tr.append(td6);
                  tr.append(td7);
                  tr.append(td8);
                  
                  tableBody.append(tr);
              });
          });
}

function initializeLondonTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.
              var tableBody = $("#CMF_London_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='3'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='1'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='7'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });
          });
}

function initializeSingaporeTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              var tableBody = $("#CMF_Singapore_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center'></td>");
                  td6[0].innerHTML = item.twoMonth_Fixed;

                  var td7 = $("<td class='text-center'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center'></td>");
                  td8[0].innerHTML = item.fourMonth_Fixed;

                  var td9 = $("<td class='text-center'></td>");
                  td9[0].innerHTML = item.fiveMonth_Fixed;

                  var td10 = $("<td class='text-center'></td>");
                  td10[0].innerHTML = item.sixMonth_Fixed;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);
                  tr.append(td5);
                  tr.append(td6);
                  tr.append(td7);
                  tr.append(td8);
                  tr.append(td9);
                  tr.append(td10);

                  tableBody.append(tr);
              });
          });
}

function initializeSingaporeTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.
              var tableBody = $("#CMF_Singapore_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='2'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='3'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='4'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });
          });
}