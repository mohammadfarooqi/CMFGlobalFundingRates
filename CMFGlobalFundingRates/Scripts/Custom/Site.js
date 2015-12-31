$(document).ready(function () {
    //load up json data from server using web api
    initializeTorontoTable('api/CMF_TorontoData');
    initializeTorontoTableContacts('api/CMF_ContactsData/Toronto');

    initializeNewYorkTable('api/CMF_NewYorkData');
    initializeNewYorkTableContacts('api/CMF_ContactsData/NewYork');

    initializeLondon1Table('api/CMF_London1Data');
    initializeLondon2Table('api/CMF_London2Data');
    initializeLondonTableContacts('api/CMF_ContactsData/London');

    initializeSingaporeTable('api/CMF_SingaporeData');
    initializeSingaporeTableContacts('api/CMF_ContactsData/Singapore');

    updatesUnique = $.connection.liveUpdates;
    
    updatesUnique.client.addNewMessageToPage = function (id, value) {
        updateCellById(id, value);
        console.log("received");
    };

    updatesUnique.client.InsRowMessageToPage = function (type, location, iD) {
        if (type == "table") {
            switch (location) {
                case "toronto":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_TorontoData/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = data.id;

                            var td2 = $("<td class='text-center' id='toronto-" + data.id + "-currency'></td>");
                            td2[0].innerHTML = data.currency;

                            var td3 = $("<td class='text-center' id='toronto-" + data.id + "-product'></td>");
                            td3[0].innerHTML = data.product;

                            var td4 = $("<td class='text-center' id='toronto-" + data.id + "-on'></td>");
                            td4[0].innerHTML = data.oN_Repo;

                            var td5 = $("<td class='text-center' id='toronto-" + data.id + "-1m'></td>");
                            td5[0].innerHTML = data.oneMonth_Fixed;

                            var td6 = $("<td class='text-center' id='toronto-" + data.id + "-2m'></td>");
                            td6[0].innerHTML = data.twoMonth_Fixed;

                            var td7 = $("<td class='text-center' id='toronto-" + data.id + "-3m'></td>");
                            td7[0].innerHTML = data.threeMonth_Fixed;

                            var td8 = $("<td class='text-center' id='toronto-" + data.id + "-12m'></td>");
                            td8[0].innerHTML = data.twelveMonth_Fixed;

                            var tr = $("<tr class='live_update_toronto'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);
                            tr.append(td5);
                            tr.append(td6);
                            tr.append(td7);
                            tr.append(td8);

                            //ins row to table
                            ins_row("CMF_Toronto_TableBody", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_Toronto_TableBody");

                            initHub();
                        }
                    });

                    break;
                case "newyork":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_NewYorkData/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = data.id;

                            var td2 = $("<td class='text-center' id='newyork-" + data.id + "-currency'></td>");
                            td2[0].innerHTML = data.currency;

                            var td3 = $("<td class='text-center' id='newyork-" + data.id + "-product'></td>");
                            td3[0].innerHTML = data.product;

                            var td4 = $("<td class='text-center' id='newyork-" + data.id + "-on'></td>");
                            td4[0].innerHTML = data.oN_Repo;

                            var td5 = $("<td class='text-center' id='newyork-" + data.id + "-1m_fixed'></td>");
                            td5[0].innerHTML = data.oneMonth_Fixed;

                            var td6 = $("<td class='text-center' id='newyork-" + data.id + "-1m_floating'></td>");
                            td6[0].innerHTML = data.oneMonth_Floating;

                            var td7 = $("<td class='text-center' id='newyork-" + data.id + "-3m_fixed'></td>");
                            td7[0].innerHTML = data.threeMonth_Fixed;

                            var td8 = $("<td class='text-center' id='newyork-" + data.id + "-3m_floating'></td>");
                            td8[0].innerHTML = data.threeMonth_Floating;

                            var td9 = $("<td class='text-center' id='newyork-" + data.id + "-6m_fixed'></td>");
                            td9[0].innerHTML = data.sixMonth_Fixed;

                            var td10 = $("<td class='text-center' id='newyork-" + data.id + "-6m_floating'></td>");
                            td10[0].innerHTML = data.sixMonth_Floating;

                            var td11 = $("<td class='text-center' id='newyork-" + data.id + "-12m_fixed'></td>");
                            td11[0].innerHTML = data.twelveMonth_Fixed;

                            var td12 = $("<td class='text-center' id='newyork-" + data.id + "-12m_floating'></td>");
                            td12[0].innerHTML = data.twelveMonth_Floating;

                            var tr = $("<tr class='live_update_newyork'></tr>");
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

                            //ins row to table
                            ins_row("CMF_NewYork_TableBody", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_NewYork_TableBody");

                            initHub();
                        }
                    });

                    break;
                case "london1":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_London1Data/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td class='text-center' id='london1-" + item.id + "-currency'></td>");
                            td2[0].innerHTML = item.currency;

                            var td3 = $("<td class='text-center' id='london1-" + item.id + "-product'></td>");
                            td3[0].innerHTML = item.product;

                            var td4 = $("<td class='text-center' id='london1-" + item.id + "-on'></td>");
                            td4[0].innerHTML = item.oN_Repo;

                            var td5 = $("<td class='text-center' id='london1-" + item.id + "-1m_fixed'></td>");
                            td5[0].innerHTML = item.oneMonth_Fixed;

                            var td6 = $("<td class='text-center' id='london1-" + item.id + "-3m_fixed'></td>");
                            td6[0].innerHTML = item.threeMonth_Fixed;

                            var td7 = $("<td class='text-center' id='london1-" + item.id + "-6m_fixed'></td>");
                            td7[0].innerHTML = item.sixMonth_Fixed;

                            var td8 = $("<td class='text-center' id='london1-" + item.id + "-12m_fixed'></td>");
                            td8[0].innerHTML = item.twelveMonth_Fixed;

                            var tr = $("<tr class='live_update_london1'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);
                            tr.append(td5);
                            tr.append(td6);
                            tr.append(td7);
                            tr.append(td8);

                            //ins row to table
                            ins_row("CMF_London1_TableBody", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_London1_TableBody");

                            initHub();
                        }
                    });

                    break;
                case "london2":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_London2Data/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td class='text-center' id='london2-" + item.id + "-currency'></td>");
                            td2[0].innerHTML = item.currency;

                            var td3 = $("<td class='text-center' id='london2-" + item.id + "-product'></td>");
                            td3[0].innerHTML = item.product;

                            var td4 = $("<td class='text-center' id='london2-" + item.id + "-on'></td>");
                            td4[0].innerHTML = item.on;

                            var td5 = $("<td class='text-center' id='london2-" + item.id + "-1m_indexed'></td>");
                            td5[0].innerHTML = item.oneMonth_Indexed;

                            var td6 = $("<td class='text-center' id='london2-" + item.id + "-1m_fixedvalue'></td>");
                            td6[0].innerHTML = item.oneMonth_FixedValue;

                            var td7 = $("<td class='text-center' id='london2-" + item.id + "-3m_indexed'></td>");
                            td7[0].innerHTML = item.threeMonth_Indexed;

                            var td8 = $("<td class='text-center' id='london2-" + item.id + "-3m_fixedvalue'></td>");
                            td8[0].innerHTML = item.threeMonth_FixedValue;

                            var tr = $("<tr class='live_update_london2'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);
                            tr.append(td5);
                            tr.append(td6);
                            tr.append(td7);
                            tr.append(td8);

                            //ins row to table
                            ins_row("CMF_London2_TableBody", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_London2_TableBody");

                            initHub();
                        }
                    });

                    break;
                case "singapore":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_SingaporeData/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td class='text-center' id='singapore-" + item.id + "-currency'></td>");
                            td2[0].innerHTML = item.currency;

                            var td3 = $("<td class='text-center' id='singapore-" + item.id + "-product'></td>");
                            td3[0].innerHTML = item.product;

                            var td4 = $("<td class='text-center' id='singapore-" + item.id + "-on'></td>");
                            td4[0].innerHTML = item.oN_Repo;

                            var td5 = $("<td class='text-center' id='singapore-" + item.id + "-1m_fixed'></td>");
                            td5[0].innerHTML = item.oneMonth_Fixed;

                            var td6 = $("<td class='text-center' id='singapore-" + item.id + "-2m_fixed'></td>");
                            td6[0].innerHTML = item.twoMonth_Fixed;

                            var td7 = $("<td class='text-center' id='singapore-" + item.id + "-3m_fixed'></td>");
                            td7[0].innerHTML = item.threeMonth_Fixed;

                            var td8 = $("<td class='text-center' id='singapore-" + item.id + "-4m_fixed'></td>");
                            td8[0].innerHTML = item.fourMonth_Fixed;

                            var td9 = $("<td class='text-center' id='singapore-" + item.id + "-5m_fixed'></td>");
                            td9[0].innerHTML = item.fiveMonth_Fixed;

                            var td10 = $("<td class='text-center' id='singapore-" + item.id + "-6m_fixed'></td>");
                            td10[0].innerHTML = item.sixMonth_Fixed;

                            var tr = $("<tr class='live_update_singapore'></tr>");
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

                            //ins row to table
                            ins_row("CMF_Singapore_TableBody", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_Singapore_TableBody");

                            initHub();
                        }
                    });

                    break;
            }
        }
        else if (type == "contact") {
            switch (location) {
                case "toronto":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_ContactsData/Toronto/' + iD,
                        data: { },
                        dataType: "json",
                        success: function (data) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = data.id;

                            var td2 = $("<td colspan='2' id='toronto-contact-" + data.id + "-name'></td>");
                            td2[0].innerHTML = data.name;

                            var td3 = $("<td colspan='2' id='toronto-contact-" + data.id + "-phone'></td>");
                            td3[0].innerHTML = data.phone;

                            var td4 = $("<td colspan='3' id='toronto-contact-" + data.id + "-email'></td>");
                            td4[0].innerHTML = data.email;

                            console.log("teset " + data.id + " " + data.name + " " + data.phone + " " + data.email);

                            var tr = $("<tr class='live_update_contacts_toronto'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);

                            //ins row to table
                            ins_row("CMF_Toronto_FooterContacts", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_Toronto_FooterContacts");

                            initHub();
                        }
                    });

                    break;
                case "newyork":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_ContactsData/NewYork/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td colspan='3' id='newyork-contact-" + item.id + "-name'></td>");
                            td2[0].innerHTML = item.name;

                            var td3 = $("<td colspan='2' id='newyork-contact-" + item.id + "-phone'></td>");
                            td3[0].innerHTML = item.phone;

                            var td4 = $("<td colspan='6' id='newyork-contact-" + item.id + "-email'></td>");
                            td4[0].innerHTML = item.email;

                            var tr = $("<tr class='live_update_contacts_newyork'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);

                            //ins row to table
                            ins_row("CMF_NewYork_FooterContacts", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_NewYork_FooterContacts");

                            initHub();
                        }
                    });

                    break;
                case "london":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_ContactsData/London/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td colspan='3' id='london-contact-" + item.id + "-name'></td>");
                            td2[0].innerHTML = item.name;

                            var td3 = $("<td colspan='1' id='london-contact-" + item.id + "-phone'></td>");
                            td3[0].innerHTML = item.phone;

                            var td4 = $("<td colspan='7' id='london-contact-" + item.id + "-email'></td>");
                            td4[0].innerHTML = item.email;

                            var tr = $("<tr class='live_update_contacts_london'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);

                            //ins row to table
                            ins_row("CMF_London_FooterContacts", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_London_FooterContacts");

                            initHub();
                        }
                    });

                    break;
                case "singapore":
                    $.ajax({
                        type: "GET",
                        url: 'api/CMF_ContactsData/Singapore/' + iD,
                        data: {},
                        dataType: "json",
                        success: function (item) {
                            //console.log(data);
                            console.log("success");

                            var td1 = $("<td class='hidden'></td>");
                            td1[0].innerHTML = item.id;

                            var td2 = $("<td colspan='2' id='singapore-contact-" + item.id + "-name'></td>");
                            td2[0].innerHTML = item.name;

                            var td3 = $("<td colspan='3' id='singapore-contact-" + item.id + "-phone'></td>");
                            td3[0].innerHTML = item.phone;

                            var td4 = $("<td colspan='4' id='singapore-contact-" + item.id + "-email'></td>");
                            td4[0].innerHTML = item.email;

                            var tr = $("<tr class='live_update_contacts_singapore'></tr>");
                            tr.append(td1);
                            tr.append(td2);
                            tr.append(td3);
                            tr.append(td4);

                            //ins row to table
                            ins_row("CMF_Singapore_FooterContacts", tr);

                            //add table widget 
                            addEditableTableWidget("CMF_Singapore_FooterContacts");

                            initHub();
                        }
                    });

                    break;
            }
        }

        console.log("received");
    }

    //$.connection.hub.logging = true;

    $.connection.hub.start().done(function () {
        initHub()
    });
});

function initializeTorontoTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_toronto").remove();

              var tableBody = $("#CMF_Toronto_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center' id='toronto-" + item.id + "-currency'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center' id='toronto-" + item.id + "-product'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center' id='toronto-" + item.id + "-on'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center' id='toronto-" + item.id + "-1m'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center' id='toronto-" + item.id + "-2m'></td>");
                  td6[0].innerHTML = item.twoMonth_Fixed;

                  var td7 = $("<td class='text-center' id='toronto-" + item.id + "-3m'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center' id='toronto-" + item.id + "-12m'></td>");
                  td8[0].innerHTML = item.twelveMonth_Fixed;

                  var tr = $("<tr class='live_update_toronto'></tr>");
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

              //add table widget 
              addEditableTableWidget("CMF_Toronto_TableBody");

              //$('#CMF_Toronto_TableBody').find('td').each(function (index, ele) {
              //    console.log(index, ele)
              //});

              $('#CMF_Toronto_TableBody td').on('change', function (evt, newValue) {
                  var rowID = $(this).siblings()[0].innerHTML;
                  var propertyValue = newValue;
                  var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;

                  switch (propertyName.toLowerCase()) {
                      case "o/n":
                          propertyName = "oN_Repo";
                          break;
                      case "1m":
                          propertyName = "oneMonth_Fixed";
                          break;
                      case "2m":
                          propertyName = "twoMonth_Fixed";
                          break;
                      case "3m":
                          propertyName = "threeMonth_Fixed";
                          break;
                      case "12m":
                          propertyName = "twelveMonth_Fixed";
                          break;
                      default:
                          break;
                  }

                  //update db
                  $.ajax({
                      type: "PUT",
                      url: 'api/CMF_TorontoData/Edit/' + rowID,
                      data: {
                          "propertyName": propertyName,
                          "propertyValue": propertyValue
                      },
                      dataType: "json",
                      success: function (data) {
                          //console.log(data);
                          console.log("success");
                      }
                  });
              });
          });
}

function initializeTorontoTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_contacts_toronto").remove();

              var tableBody = $("#CMF_Toronto_FooterContacts");
              
              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='2' id='toronto-contact-" + item.id + "-name'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2' id='toronto-contact-" + item.id + "-phone'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='3' id='toronto-contact-" + item.id + "-email'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_toronto'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              //add table widget 
              addEditableTableWidget("CMF_Toronto_FooterContacts");

              addContactCellChangeListener("CMF_Toronto_FooterContacts");
          });
}

function initializeNewYorkTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_newyork").remove();

              var tableBody = $("#CMF_NewYork_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center' id='newyork-" + item.id + "-currency'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center' id='newyork-" + item.id + "-product'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center' id='newyork-" + item.id + "-on'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center' id='newyork-" + item.id + "-1m_fixed'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center' id='newyork-" + item.id + "-1m_floating'></td>");
                  td6[0].innerHTML = item.oneMonth_Floating;

                  var td7 = $("<td class='text-center' id='newyork-" + item.id + "-3m_fixed'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center' id='newyork-" + item.id + "-3m_floating'></td>");
                  td8[0].innerHTML = item.threeMonth_Floating;

                  var td9 = $("<td class='text-center' id='newyork-" + item.id + "-6m_fixed'></td>");
                  td9[0].innerHTML = item.sixMonth_Fixed;

                  var td10 = $("<td class='text-center' id='newyork-" + item.id + "-6m_floating'></td>");
                  td10[0].innerHTML = item.sixMonth_Floating;

                  var td11 = $("<td class='text-center' id='newyork-" + item.id + "-12m_fixed'></td>");
                  td11[0].innerHTML = item.twelveMonth_Fixed;

                  var td12 = $("<td class='text-center' id='newyork-" + item.id + "-12m_floating'></td>");
                  td12[0].innerHTML = item.twelveMonth_Floating;

                  var tr = $("<tr class='live_update_newyork'></tr>");
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

              //add table widget 
              addEditableTableWidget("CMF_NewYork_TableBody");

              $('#CMF_NewYork_TableBody td').on('change', function (evt, newValue) {
                  var rowID = $(this).siblings()[0].innerHTML;
                  var propertyValue = newValue;
                  //var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;
                  var propertyName;

                  var currentCellIndex = $(this).index();
                  var fixedOrFloating = "";

                  if (currentCellIndex == 4 || currentCellIndex == 5) {
                      fixedOrFloating = (currentCellIndex == 4) ? "fixed" : "floating";
                      currentCellIndex = 4;
                  }
                  else if (currentCellIndex == 6 || currentCellIndex == 7) {
                      fixedOrFloating = (currentCellIndex == 6) ? "fixed" : "floating";
                      currentCellIndex = 5;
                  }
                  else if (currentCellIndex == 8 || currentCellIndex == 9) {
                      fixedOrFloating = (currentCellIndex == 8) ? "fixed" : "floating";
                      currentCellIndex = 6;
                  }
                  else if (currentCellIndex == 10 || currentCellIndex == 11) {
                      fixedOrFloating = (currentCellIndex == 10) ? "fixed" : "floating";
                      currentCellIndex = 7;
                  }

                  propertyName = $(this).closest('table').find('th').eq(currentCellIndex)[0].innerHTML;

                  //console.log(rowID + " " + propertyName + ((fixedOrFloating == "") ? "" : "_" + fixedOrFloating) + " " + propertyValue);
                  
                  switch (propertyName.toLowerCase()) {
                      case "o/n":
                          propertyName = "oN_Repo";
                          break;
                      case "1m":
                          propertyName = "oneMonth" + ((fixedOrFloating == "") ? "" : "_" + fixedOrFloating);
                          break;
                      case "3m":
                          propertyName = "threeMonth" + ((fixedOrFloating == "") ? "" : "_" + fixedOrFloating);
                          break;
                      case "6m":
                          propertyName = "sixMonth" + ((fixedOrFloating == "") ? "" : "_" + fixedOrFloating);
                          break;
                      case "12m":
                          propertyName = "twelveMonth" + ((fixedOrFloating == "") ? "" : "_" + fixedOrFloating);
                          break;
                      default:
                          break;
                  }

                  //update db
                  $.ajax({
                      type: "PUT",
                      url: 'api/CMF_NewYorkData/Edit/' + rowID,
                      data: {
                          "propertyName": propertyName,
                          "propertyValue": propertyValue
                      },
                      dataType: "json",
                      success: function (data) {
                          //console.log(data);
                          console.log("success");
                      }
                  });
              });
          });
}

function initializeNewYorkTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_contacts_newyork").remove();

              var tableBody = $("#CMF_NewYork_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='3' id='newyork-contact-" + item.id + "-name'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2' id='newyork-contact-" + item.id + "-phone'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='6' id='newyork-contact-" + item.id + "-email'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_newyork'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              //add table widget 
              addEditableTableWidget("CMF_NewYork_FooterContacts");

              addContactCellChangeListener("CMF_NewYork_FooterContacts");
          });
}

function initializeLondon1Table(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_london1").remove();

              var tableBody = $("#CMF_London1_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center' id='london1-" + item.id + "-currency'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center' id='london1-" + item.id + "-product'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center' id='london1-" + item.id + "-on'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center' id='london1-" + item.id + "-1m_fixed'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center' id='london1-" + item.id + "-3m_fixed'></td>");
                  td6[0].innerHTML = item.threeMonth_Fixed;

                  var td7 = $("<td class='text-center' id='london1-" + item.id + "-6m_fixed'></td>");
                  td7[0].innerHTML = item.sixMonth_Fixed;

                  var td8 = $("<td class='text-center' id='london1-" + item.id + "-12m_fixed'></td>");
                  td8[0].innerHTML = item.twelveMonth_Fixed;

                  var tr = $("<tr class='live_update_london1'></tr>");
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

              //add table widget 
              addEditableTableWidget("CMF_London1_TableBody");

              $('#CMF_London1_TableBody td').on('change', function (evt, newValue) {
                  var rowID = $(this).siblings()[0].innerHTML;
                  var propertyValue = newValue;
                  var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;
                  //var propertyName;

                  console.log(rowID + " " + propertyName + " " + propertyValue);

                  switch (propertyName.toLowerCase()) {
                      case "o/n":
                          propertyName = "oN_Repo";
                          break;
                      case "1m":
                          propertyName = "oneMonth_fixed";
                          break;
                      case "3m":
                          propertyName = "threeMonth_fixed";
                          break;
                      case "6m":
                          propertyName = "sixMonth_fixed";
                          break;
                      case "12m":
                          propertyName = "twelveMonth_fixed";
                          break;
                      default:
                          break;
                  }

                  //update db
                  $.ajax({
                      type: "PUT",
                      url: 'api/CMF_London1Data/Edit/' + rowID,
                      data: {
                          "propertyName": propertyName,
                          "propertyValue": propertyValue
                      },
                      dataType: "json",
                      success: function (data) {
                          //console.log(data);
                          console.log("success");
                      }
                  });
              });
          });
}

function initializeLondon2Table(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_london2").remove();

              var tableBody = $("#CMF_London2_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center' id='london2-" + item.id + "-currency'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center' id='london2-" + item.id + "-product'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center' id='london2-" + item.id + "-on'></td>");
                  td4[0].innerHTML = item.on;

                  var td5 = $("<td class='text-center' id='london2-" + item.id + "-1m_indexed'></td>");
                  td5[0].innerHTML = item.oneMonth_Indexed;

                  var td6 = $("<td class='text-center' id='london2-" + item.id + "-1m_fixedvalue'></td>");
                  td6[0].innerHTML = item.oneMonth_FixedValue;

                  var td7 = $("<td class='text-center' id='london2-" + item.id + "-3m_indexed'></td>");
                  td7[0].innerHTML = item.threeMonth_Indexed;

                  var td8 = $("<td class='text-center' id='london2-" + item.id + "-3m_fixedvalue'></td>");
                  td8[0].innerHTML = item.threeMonth_FixedValue;

                  var tr = $("<tr class='live_update_london2'></tr>");
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

              //add table widget 
              addEditableTableWidget("CMF_London2_TableBody");

              $('#CMF_London2_TableBody td').on('change', function (evt, newValue) {
                  var rowID = $(this).siblings()[0].innerHTML;
                  var propertyValue = newValue;
                  //var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;
                  var propertyName;

                  var currentCellIndex = $(this).index();
                  var indexedOrFixedValue = "";

                  if (currentCellIndex == 4 || currentCellIndex == 5) {
                      indexedOrFixedValue = (currentCellIndex == 4) ? "indexed" : "fixedvalue";
                      currentCellIndex = 4;
                  }
                  else if (currentCellIndex == 6 || currentCellIndex == 7) {
                      indexedOrFixedValue = (currentCellIndex == 6) ? "indexed" : "fixedvalue";
                      currentCellIndex = 5;
                  }

                  propertyName = $($(this).closest('table').find('thead')[1]).find('th').eq(currentCellIndex)[0].innerHTML;

                  //console.log(rowID + " " + propertyName + ((indexedOrFixedValue == "") ? "" : "_" + indexedOrFixedValue) + " " + propertyValue);

                  switch (propertyName.toLowerCase()) {
                      case "o/n":
                          propertyName = "on";
                          break;
                      case "1m":
                          propertyName = "oneMonth" + ((indexedOrFixedValue == "") ? "" : "_" + indexedOrFixedValue);
                          break;
                      case "3m":
                          propertyName = "threeMonth" + ((indexedOrFixedValue == "") ? "" : "_" + indexedOrFixedValue);
                          break;
                      case "6m":
                          propertyName = "sixMonth" + ((indexedOrFixedValue == "") ? "" : "_" + indexedOrFixedValue);
                          break;
                      case "12m":
                          propertyName = "twelveMonth" + ((indexedOrFixedValue == "") ? "" : "_" + indexedOrFixedValue);
                          break;
                      default:
                          break;
                  }

                  //console.log(rowID + " " + propertyName + " " + propertyValue);

                  //update db
                  $.ajax({
                      type: "PUT",
                      url: 'api/CMF_London2Data/Edit/' + rowID,
                      data: {
                          "propertyName": propertyName,
                          "propertyValue": propertyValue
                      },
                      dataType: "json",
                      success: function (data) {
                          //console.log(data);
                          console.log("success");
                      }
                  });
              });
          });
}

function initializeLondonTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_contacts_london").remove();

              var tableBody = $("#CMF_London_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='3' id='london-contact-" + item.id + "-name'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='1' id='london-contact-" + item.id + "-phone'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='7' id='london-contact-" + item.id + "-email'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_london'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              //add table widget 
              addEditableTableWidget("CMF_London_FooterContacts");

              addContactCellChangeListener("CMF_London_FooterContacts");
          });
}

function initializeSingaporeTable(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_singapore").remove();

              var tableBody = $("#CMF_Singapore_TableBody");

              $.each(data, function (key, item) {
                  //console.log("key = " + key + " item = " + JSON.stringify(item));
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td class='text-center' id='singapore-" + item.id + "-currency'></td>");
                  td2[0].innerHTML = item.currency;

                  var td3 = $("<td class='text-center' id='singapore-" + item.id + "-product'></td>");
                  td3[0].innerHTML = item.product;

                  var td4 = $("<td class='text-center' id='singapore-" + item.id + "-on'></td>");
                  td4[0].innerHTML = item.oN_Repo;

                  var td5 = $("<td class='text-center' id='singapore-" + item.id + "-1m_fixed'></td>");
                  td5[0].innerHTML = item.oneMonth_Fixed;

                  var td6 = $("<td class='text-center' id='singapore-" + item.id + "-2m_fixed'></td>");
                  td6[0].innerHTML = item.twoMonth_Fixed;

                  var td7 = $("<td class='text-center' id='singapore-" + item.id + "-3m_fixed'></td>");
                  td7[0].innerHTML = item.threeMonth_Fixed;

                  var td8 = $("<td class='text-center' id='singapore-" + item.id + "-4m_fixed'></td>");
                  td8[0].innerHTML = item.fourMonth_Fixed;

                  var td9 = $("<td class='text-center' id='singapore-" + item.id + "-5m_fixed'></td>");
                  td9[0].innerHTML = item.fiveMonth_Fixed;

                  var td10 = $("<td class='text-center' id='singapore-" + item.id + "-6m_fixed'></td>");
                  td10[0].innerHTML = item.sixMonth_Fixed;

                  var tr = $("<tr class='live_update_singapore'></tr>");
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

              //add table widget 
              addEditableTableWidget("CMF_Singapore_TableBody");

              $('#CMF_Singapore_TableBody td').on('change', function (evt, newValue) {
                  var rowID = $(this).siblings()[0].innerHTML;
                  var propertyValue = newValue;
                  var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;

                  switch (propertyName.toLowerCase()) {
                      case "o/n":
                          propertyName = "oN_Repo";
                          break;
                      case "1m":
                          propertyName = "oneMonth_Fixed";
                          break;
                      case "2m":
                          propertyName = "twoMonth_Fixed";
                          break;
                      case "3m":
                          propertyName = "threeMonth_Fixed";
                          break;
                      case "4m":
                          propertyName = "fourMonth_Fixed";
                          break;
                      case "5m":
                          propertyName = "fiveMonth_Fixed";
                          break;
                      case "6m":
                          propertyName = "sixMonth_Fixed";
                          break;
                      default:
                          break;
                  }

                  //console.log(rowID + " " + propertyName + " " + propertyValue);

                  //update db
                  $.ajax({
                      type: "PUT",
                      url: 'api/CMF_SingaporeData/Edit/' + rowID,
                      data: {
                          "propertyName": propertyName,
                          "propertyValue": propertyValue
                      },
                      dataType: "json",
                      success: function (data) {
                          //console.log(data);
                          console.log("success");
                      }
                  });
              });
          });
}

function initializeSingaporeTableContacts(path) {
    var uri = path;

    $.getJSON(uri)
          .done(function (data) {
              // On success, 'data' contains a list.

              $(".live_update_contacts_singapore").remove();

              var tableBody = $("#CMF_Singapore_FooterContacts");

              $.each(data, function (key, item) {
                  var td1 = $("<td class='hidden'></td>");
                  td1[0].innerHTML = item.id;

                  var td2 = $("<td colspan='2' id='singapore-contact-" + item.id + "-name'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='3' id='singapore-contact-" + item.id + "-phone'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='4' id='singapore-contact-" + item.id + "-email'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_singapore'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              //add table widget 
              addEditableTableWidget("CMF_Singapore_FooterContacts");

              addContactCellChangeListener("CMF_Singapore_FooterContacts");
          });
}

function addContactCellChangeListener(uniqueId) {
    $('#' + uniqueId + ' td').on('change', function (evt, newValue) {
        var rowID = $(this).siblings()[0].innerHTML;
        var propertyValue = newValue;
        //var propertyName = $(this).closest('table').find('th').eq($(this).index())[0].innerHTML;
        var propertyName = $(this).closest('table').find('tfoot').find('th').eq($(this).index())[0].innerHTML;

        switch (propertyName.toLowerCase()) {
            case "contact":
                propertyName = "name";
                break;
            case "phone":
                propertyName = "phone";
                break;
            case "email":
                propertyName = "email";
                break;
            default:
                break;
        }

        //update db
        $.ajax({
            type: "PUT",
            url: 'api/CMF_ContactsData/Edit/' + rowID,
            data: {
                "propertyName": propertyName,
                "propertyValue": propertyValue
            },
            dataType: "json",
            success: function (data) {
                //console.log(data);
                console.log("success");
            }
        });
    });
}

function updateCellById(id, value) {
    $("#" + id).text(value);
}

function ins_toronto_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_TorontoData/Add',
        data: {
            "currency": $("#ins_toronto_currency").val(),
            "product": $("#ins_toronto_product").val(),
            "on_repo": $("#ins_toronto_on").val(),
            "onemonth_fixed": $("#ins_toronto_1m_fixed").val(),
            "twomonth_fixed": $("#ins_toronto_2m_fixed").val(),
            "threemonth_fixed": $("#ins_toronto_3m_fixed").val(),
            "twelvemonth_fixed": $("#ins_toronto_12m_fixed").val()
        },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = data.id;

            var td2 = $("<td class='text-center' id='toronto-" + data.id + "-currency'></td>");
            td2[0].innerHTML = data.currency;

            var td3 = $("<td class='text-center' id='toronto-" + data.id + "-product'></td>");
            td3[0].innerHTML = data.product;

            var td4 = $("<td class='text-center' id='toronto-" + data.id + "-on'></td>");
            td4[0].innerHTML = data.oN_Repo;

            var td5 = $("<td class='text-center' id='toronto-" + data.id + "-1m'></td>");
            td5[0].innerHTML = data.oneMonth_Fixed;

            var td6 = $("<td class='text-center' id='toronto-" + data.id + "-2m'></td>");
            td6[0].innerHTML = data.twoMonth_Fixed;

            var td7 = $("<td class='text-center' id='toronto-" + data.id + "-3m'></td>");
            td7[0].innerHTML = data.threeMonth_Fixed;

            var td8 = $("<td class='text-center' id='toronto-" + data.id + "-12m'></td>");
            td8[0].innerHTML = data.twelveMonth_Fixed;

            var tr = $("<tr class='live_update_toronto'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
            tr.append(td8);

            //ins row to table
            ins_row("CMF_Toronto_TableBody", tr);

            //add table widget 
            addEditableTableWidget("CMF_Toronto_TableBody");

            initHub();
            hubInsRow("table", "toronto", data.id);
        }
    });

    //clear form
    $("#toronto_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalToronto').modal('toggle');
}

function ins_toronto_contact_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_ContactsData/Add',
        data: {
            "name": $("#ins_toronto_contact_contact").val(),
            "phone": $("#ins_toronto_contact_phone").val(),
            "email": $("#ins_toronto_contact_email").val(),
            "location": "Toronto",
        },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = data.id;

            var td2 = $("<td colspan='2' id='toronto-contact-" + data.id + "-name'></td>");
            td2[0].innerHTML = data.name;

            var td3 = $("<td colspan='2' id='toronto-contact-" + data.id + "-phone'></td>");
            td3[0].innerHTML = data.phone;

            var td4 = $("<td colspan='3' id='toronto-contact-" + data.id + "-email'></td>");
            td4[0].innerHTML = data.email;

            var tr = $("<tr class='live_update_contacts_toronto'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            //ins row to table
            ins_row("CMF_Toronto_FooterContacts", tr);

            //add table widget 
            addEditableTableWidget("CMF_Toronto_FooterContacts");

            initHub();
            hubInsRow("contact", "toronto", data.id);
        }
    });

    //clear form
    $("#toronto_contact_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalTorontoContact').modal('toggle');
}

function ins_newyork_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_NewYorkData/Add',
        data: {
            "currency": $("#ins_newyork_currency").val(),
            "product": $("#ins_newyork_product").val(),
            "on_repo": $("#ins_newyork_on").val(),
            "onemonth_fixed": $("#ins_newyork_1m_fixed").val(),
            "onemonth_floating": $("#ins_newyork_1m_floating").val(),
            "threemonth_fixed": $("#ins_newyork_3m_fixed").val(),
            "threemonth_floating": $("#ins_newyork_3m_floating").val(),
            "sixmonth_fixed": $("#ins_newyork_6m_fixed").val(),
            "sixmonth_floating": $("#ins_newyork_6m_floating").val(),
            "twelvemonth_fixed": $("#ins_newyork_12m_fixed").val(),
            "twelvemonth_floating": $("#ins_newyork_12m_floating").val()
        },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = data.id;

            var td2 = $("<td class='text-center' id='newyork-" + data.id + "-currency'></td>");
            td2[0].innerHTML = data.currency;

            var td3 = $("<td class='text-center' id='newyork-" + data.id + "-product'></td>");
            td3[0].innerHTML = data.product;

            var td4 = $("<td class='text-center' id='newyork-" + data.id + "-on'></td>");
            td4[0].innerHTML = data.oN_Repo;

            var td5 = $("<td class='text-center' id='newyork-" + data.id + "-1m_fixed'></td>");
            td5[0].innerHTML = data.oneMonth_Fixed;

            var td6 = $("<td class='text-center' id='newyork-" + data.id + "-1m_floating'></td>");
            td6[0].innerHTML = data.oneMonth_Floating;

            var td7 = $("<td class='text-center' id='newyork-" + data.id + "-3m_fixed'></td>");
            td7[0].innerHTML = data.threeMonth_Fixed;

            var td8 = $("<td class='text-center' id='newyork-" + data.id + "-3m_floating'></td>");
            td8[0].innerHTML = data.threeMonth_Floating;

            var td9 = $("<td class='text-center' id='newyork-" + data.id + "-6m_fixed'></td>");
            td9[0].innerHTML = data.sixMonth_Fixed;

            var td10 = $("<td class='text-center' id='newyork-" + data.id + "-6m_floating'></td>");
            td10[0].innerHTML = data.sixMonth_Floating;

            var td11 = $("<td class='text-center' id='newyork-" + data.id + "-12m_fixed'></td>");
            td11[0].innerHTML = data.twelveMonth_Fixed;

            var td12 = $("<td class='text-center' id='newyork-" + data.id + "-12m_floating'></td>");
            td12[0].innerHTML = data.twelveMonth_Floating;

            var tr = $("<tr class='live_update_newyork'></tr>");
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

            //ins row to table
            ins_row("CMF_NewYork_TableBody", tr);

            //add table widget 
            addEditableTableWidget("CMF_NewYork_TableBody");

            initHub();
            hubInsRow("table", "newyork", data.id);
        }
    });

    //clear form
    $("#newyork_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalNewYork').modal('toggle');
}

function ins_newyork_contact_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_ContactsData/Add',
        data: {
            "name": $("#ins_newyork_contact_contact").val(),
            "phone": $("#ins_newyork_contact_phone").val(),
            "email": $("#ins_newyork_contact_email").val(),
            "location": "NewYork",
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td colspan='3' id='newyork-contact-" + item.id + "-name'></td>");
            td2[0].innerHTML = item.name;

            var td3 = $("<td colspan='2' id='newyork-contact-" + item.id + "-phone'></td>");
            td3[0].innerHTML = item.phone;

            var td4 = $("<td colspan='6' id='newyork-contact-" + item.id + "-email'></td>");
            td4[0].innerHTML = item.email;

            var tr = $("<tr class='live_update_contacts_newyork'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            //ins row to table
            ins_row("CMF_NewYork_FooterContacts", tr);

            //add table widget 
            addEditableTableWidget("CMF_NewYork_FooterContacts");

            initHub();
            hubInsRow("contact", "newyork", item.id);
        }
    });

    //clear form
    $("#newyork_contact_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalNewYorkContact').modal('toggle');
}

function ins_london1_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_London1Data/Add',
        data: {
            "currency": $("#ins_london1_currency").val(),
            "product": $("#ins_london1_product").val(),
            "on_repo": $("#ins_london1_on").val(),
            "onemonth_fixed": $("#ins_london1_1m_fixed").val(),
            "threemonth_fixed": $("#ins_london1_3m_fixed").val(),
            "sixmonth_fixed": $("#ins_london1_6m_fixed").val(),
            "twelvemonth_fixed": $("#ins_london1_12m_fixed").val()
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td class='text-center' id='london1-" + item.id + "-currency'></td>");
            td2[0].innerHTML = item.currency;

            var td3 = $("<td class='text-center' id='london1-" + item.id + "-product'></td>");
            td3[0].innerHTML = item.product;

            var td4 = $("<td class='text-center' id='london1-" + item.id + "-on'></td>");
            td4[0].innerHTML = item.oN_Repo;

            var td5 = $("<td class='text-center' id='london1-" + item.id + "-1m_fixed'></td>");
            td5[0].innerHTML = item.oneMonth_Fixed;

            var td6 = $("<td class='text-center' id='london1-" + item.id + "-3m_fixed'></td>");
            td6[0].innerHTML = item.threeMonth_Fixed;

            var td7 = $("<td class='text-center' id='london1-" + item.id + "-6m_fixed'></td>");
            td7[0].innerHTML = item.sixMonth_Fixed;

            var td8 = $("<td class='text-center' id='london1-" + item.id + "-12m_fixed'></td>");
            td8[0].innerHTML = item.twelveMonth_Fixed;

            var tr = $("<tr class='live_update_london1'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
            tr.append(td8);

            //ins row to table
            ins_row("CMF_London1_TableBody", tr);

            //add table widget 
            addEditableTableWidget("CMF_London1_TableBody");

            initHub();
            hubInsRow("table", "london1", item.id);
        }
    });

    //clear form
    $("#london1_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalLondon1').modal('toggle');
}

function ins_london2_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_London2Data/Add',
        data: {
            "currency": $("#ins_london2_currency").val(),
            "product": $("#ins_london2_product").val(),
            "on_repo": $("#ins_london2_on").val(),
            "onemonth_indexed": $("#ins_london2_1m_indexed").val(),
            "onemonth_fixedvalue": $("#ins_london2_1m_fixedvalue").val(),
            "threemonth_indexed": $("#ins_london2_3m_indexed").val(),
            "threemonth_fixedvalue": $("#ins_london2_3m_fixedvalue").val()
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td class='text-center' id='london2-" + item.id + "-currency'></td>");
            td2[0].innerHTML = item.currency;

            var td3 = $("<td class='text-center' id='london2-" + item.id + "-product'></td>");
            td3[0].innerHTML = item.product;

            var td4 = $("<td class='text-center' id='london2-" + item.id + "-on'></td>");
            td4[0].innerHTML = item.on;

            var td5 = $("<td class='text-center' id='london2-" + item.id + "-1m_indexed'></td>");
            td5[0].innerHTML = item.oneMonth_Indexed;

            var td6 = $("<td class='text-center' id='london2-" + item.id + "-1m_fixedvalue'></td>");
            td6[0].innerHTML = item.oneMonth_FixedValue;

            var td7 = $("<td class='text-center' id='london2-" + item.id + "-3m_indexed'></td>");
            td7[0].innerHTML = item.threeMonth_Indexed;

            var td8 = $("<td class='text-center' id='london2-" + item.id + "-3m_fixedvalue'></td>");
            td8[0].innerHTML = item.threeMonth_FixedValue;

            var tr = $("<tr class='live_update_london2'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
            tr.append(td8);

            //ins row to table
            ins_row("CMF_London2_TableBody", tr);

            //add table widget 
            addEditableTableWidget("CMF_London2_TableBody");

            initHub();
            hubInsRow("table", "london2", item.id);
        }
    });

    //clear form
    $("#london2_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalLondon2').modal('toggle');
}

function ins_london_contact_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_ContactsData/Add',
        data: {
            "name": $("#ins_london_contact_contact").val(),
            "phone": $("#ins_london_contact_phone").val(),
            "email": $("#ins_london_contact_email").val(),
            "location": "London",
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td colspan='3' id='london-contact-" + item.id + "-name'></td>");
            td2[0].innerHTML = item.name;

            var td3 = $("<td colspan='1' id='london-contact-" + item.id + "-phone'></td>");
            td3[0].innerHTML = item.phone;

            var td4 = $("<td colspan='7' id='london-contact-" + item.id + "-email'></td>");
            td4[0].innerHTML = item.email;

            var tr = $("<tr class='live_update_contacts_london'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            //ins row to table
            ins_row("CMF_London_FooterContacts", tr);

            //add table widget 
            addEditableTableWidget("CMF_London_FooterContacts");

            initHub();
            hubInsRow("contact", "london", item.id);
        }
    });

    //clear form
    $("#london_contact_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalLondonContact').modal('toggle');
}

function ins_singapore_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_SingaporeData/Add',
        data: {
            "currency": $("#ins_singapore_currency").val(),
            "product": $("#ins_singapore_product").val(),
            "on_repo": $("#ins_singapore_on").val(),
            "onemonth_fixed": $("#ins_singapore_1m_fixed").val(),
            "twomonth_fixed": $("#ins_singapore_2m_fixed").val(),
            "threemonth_fixed": $("#ins_singapore_3m_fixed").val(),
            "fourmonth_fixed": $("#ins_singapore_4m_fixed").val(),
            "fivemonth_fixed": $("#ins_singapore_5m_fixed").val(),
            "sixmonth_fixed": $("#ins_singapore_6m_fixed").val()
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td class='text-center' id='singapore-" + item.id + "-currency'></td>");
            td2[0].innerHTML = item.currency;

            var td3 = $("<td class='text-center' id='singapore-" + item.id + "-product'></td>");
            td3[0].innerHTML = item.product;

            var td4 = $("<td class='text-center' id='singapore-" + item.id + "-on'></td>");
            td4[0].innerHTML = item.oN_Repo;

            var td5 = $("<td class='text-center' id='singapore-" + item.id + "-1m_fixed'></td>");
            td5[0].innerHTML = item.oneMonth_Fixed;

            var td6 = $("<td class='text-center' id='singapore-" + item.id + "-2m_fixed'></td>");
            td6[0].innerHTML = item.twoMonth_Fixed;

            var td7 = $("<td class='text-center' id='singapore-" + item.id + "-3m_fixed'></td>");
            td7[0].innerHTML = item.threeMonth_Fixed;

            var td8 = $("<td class='text-center' id='singapore-" + item.id + "-4m_fixed'></td>");
            td8[0].innerHTML = item.fourMonth_Fixed;

            var td9 = $("<td class='text-center' id='singapore-" + item.id + "-5m_fixed'></td>");
            td9[0].innerHTML = item.fiveMonth_Fixed;

            var td10 = $("<td class='text-center' id='singapore-" + item.id + "-6m_fixed'></td>");
            td10[0].innerHTML = item.sixMonth_Fixed;

            var tr = $("<tr class='live_update_singapore'></tr>");
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

            //ins row to table
            ins_row("CMF_Singapore_TableBody", tr);

            //add table widget 
            addEditableTableWidget("CMF_Singapore_TableBody");

            initHub();
            hubInsRow("table", "singapore", item.id);
        }
    });

    //clear form
    $("#singapore_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalSingapore').modal('toggle');
}

function ins_singapore_contact_row() {
    //ins row
    $.ajax({
        type: "POST",
        url: 'api/CMF_ContactsData/Add',
        data: {
            "name": $("#ins_singapore_contact_contact").val(),
            "phone": $("#ins_singapore_contact_phone").val(),
            "email": $("#ins_singapore_contact_email").val(),
            "location": "Singapore",
        },
        dataType: "json",
        success: function (item) {
            //console.log(data);
            console.log("success");

            var td1 = $("<td class='hidden'></td>");
            td1[0].innerHTML = item.id;

            var td2 = $("<td colspan='2' id='singapore-contact-" + item.id + "-name'></td>");
            td2[0].innerHTML = item.name;

            var td3 = $("<td colspan='3' id='singapore-contact-" + item.id + "-phone'></td>");
            td3[0].innerHTML = item.phone;

            var td4 = $("<td colspan='4' id='singapore-contact-" + item.id + "-email'></td>");
            td4[0].innerHTML = item.email;

            var tr = $("<tr class='live_update_contacts_singapore'></tr>");
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            //ins row to table
            ins_row("CMF_Singapore_FooterContacts", tr);

            //add table widget 
            addEditableTableWidget("CMF_Singapore_FooterContacts");

            initHub();
            hubInsRow("contact", "singapore", item.id);
        }
    });

    //clear form
    $("#singapore_contact_form_modal input").each(function (index, value) { $(value).val("") });

    $('#myModalSingaporeContact').modal('toggle');
}

function ins_row(tableSectionId, tr) {
    var tableBody = $("#" + tableSectionId);
    tableBody.append(tr);
}

function addEditableTableWidget(tableSectionId) {
    $('#' + tableSectionId).editableTableWidget({
        disableClass: "no-change-text"
    });
}

function initHub() {
    $("td").on("change", function () {
        updatesUnique.server.send($(this).attr('id'), $(this).text());
        console.log("sent");
    });
}

function hubInsRow(type, location, id) {
    updatesUnique.server.insRow(type, location, id);
    console.log("sent");
}