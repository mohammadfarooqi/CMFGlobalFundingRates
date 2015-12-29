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

    //var updates = $.connection.liveUpdates;
    
    //$.connection.hub.start().done(function () {

    //});
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

              $('#CMF_Toronto_TableBody').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                          console.log(data);
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

                  var td2 = $("<td colspan='2'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='3'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_toronto'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              $('#CMF_Toronto_FooterContacts').editableTableWidget({
                  disableClass: "no-change-text"
              });

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

              $('#CMF_NewYork_TableBody').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                          console.log(data);
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

                  var td2 = $("<td colspan='3'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='2'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='6'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_newyork'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              $('#CMF_NewYork_FooterContacts').editableTableWidget({
                  disableClass: "no-change-text"
              });

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

              $('#CMF_London1_TableBody').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                          console.log(data);
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

              $('#CMF_London2_TableBody').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                          console.log(data);
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

                  var td2 = $("<td colspan='3'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='1'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='7'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_london'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              $('#CMF_London_FooterContacts').editableTableWidget({
                  disableClass: "no-change-text"
              });

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

              $('#CMF_Singapore_TableBody').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                          console.log(data);
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

                  var td2 = $("<td colspan='2'></td>");
                  td2[0].innerHTML = item.name;

                  var td3 = $("<td colspan='3'></td>");
                  td3[0].innerHTML = item.phone;

                  var td4 = $("<td colspan='4'></td>");
                  td4[0].innerHTML = item.email;

                  var tr = $("<tr class='live_update_contacts_singapore'></tr>");
                  tr.append(td1);
                  tr.append(td2);
                  tr.append(td3);
                  tr.append(td4);

                  tableBody.append(tr);
              });

              $('#CMF_Singapore_FooterContacts').editableTableWidget({
                  disableClass: "no-change-text"
              });

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
                console.log(data);
            }
        });
    });
}