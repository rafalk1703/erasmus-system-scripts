var ssID = "14bNfNy8D7PVqyk_khZNu8-9W-motFMwuZ_UQBKReMZM";
var formID = "1uGamlzobyIuP1nDbCjQn0-QhGkfDutj2GxA_e2wSh-k";

var wsData = SpreadsheetApp.openById(ssID).getSheetByName("Arkusz1");
var form = FormApp.openById(formID);


function onOpen() {
  var menu = SpreadsheetApp.getUi().createMenu('Forms');
  menu.addItem('CREATE FORM', 'createNewForm').addToUi();
  menu.addItem('UPDATE FORM', 'updateForm').addToUi();

}

function updateForm() {

  var labels = wsData.getRange(1, 1, 1, wsData.getLastColumn()).getValues()[0];
  var titles = wsData.getRange(2, 1, 1, wsData.getLastColumn()).getValues()[0];

  for (var i = 0; i < labels.length; i++) {
    Logger.log(labels[i]);
    if (labels[i] == 'CHOICE') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      updateChoiceUsingTitle(titles[i], options);
    } else if (labels[i] == 'CHECKBOX') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      updateCheckboxUsingTitle(titles[i], options);
    } else if (labels[i] == 'DROPDOWN') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      updateDropdownUsingTitle(titles[i], options);
    }
  }


}

function createNewForm() {
  clearForm();

  var labels = wsData.getRange(1, 1, 1, wsData.getLastColumn()).getValues()[0];
  var titles = wsData.getRange(2, 1, 1, wsData.getLastColumn()).getValues()[0];

  for (var i = 0; i < labels.length; i++) {
    Logger.log(labels[i]);
    if (labels[i] == 'TEXT') {
      addTextItemUsingTitle(titles[i]);

    } else if (labels[i] == 'CHOICE') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      addChoiceUsingTitle(titles[i], options);
    } else if (labels[i] == 'CHECKBOX') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      addCheckboxUsingTitle(titles[i], options);
    } else if (labels[i] == 'DROPDOWN') {
      var options = wsData
        .getRange(3, i + 1, wsData.getLastRow() - 2, 1)
        .getValues()
        .map(function (o) { return o[0] })
        .filter(function (o) { return o != "" });
      addDropdownUsingTitle(titles[i], options);
    }
  }


}

function addDropdownUsingTitle(title, values) {
  form.addListItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(true);
}

function addChoiceUsingTitle(title, values) {
  form.addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(true);
}

function addCheckboxUsingTitle(title, values) {
  form.addCheckboxItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(true);
}

function addTextItemUsingTitle(title) {
  form.addTextItem()
        .setTitle(title)
        .setRequired(true);
}

function updateCheckboxUsingTitle(title, values) {
  var items = form.getItems();
  var titles = items.map(function (item) {
    return item.getTitle();
  });
  var pos = titles.indexOf(title);
  var item = items[pos];
  var itemID = item.getId();

  updateCheckbox(itemID, values);
}

function updateCheckbox(id, values) {
  var item = form.getItemById(id);
  item.asCheckboxItem()
  .setChoiceValues(values)
  .setRequired(true);

}

function updateChoiceUsingTitle(title, values) {
  var items = form.getItems();
  var titles = items.map(function (item) {
    return item.getTitle();
  });
  var pos = titles.indexOf(title);
  var item = items[pos];
  var itemID = item.getId();

  updateChoice(itemID, values);
}

function updateChoice(id, values) {
  var item = form.getItemById(id);
  item.asMultipleChoiceItem()
  .setChoiceValues(values)
  .setRequired(true);

}

function updateDropdownUsingTitle(title, values) {
  var items = form.getItems();
  var titles = items.map(function (item) {
    return item.getTitle();
  });
  var pos = titles.indexOf(title);
  var item = items[pos];
  var itemID = item.getId();

  updateDropdown(itemID, values);
}

function updateDropdown(id, values) {
  var item = form.getItemById(id);
  item.asListItem()
  .setChoiceValues(values)
  .setRequired(true);

}

function clearForm(){
  var items = form.getItems();
  while(items.length > 0){
    form.deleteItem(items.pop());
  }
}