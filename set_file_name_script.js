function myFunction() {
    var form=FormApp.getActiveForm();
    var length=form.getResponses().length;
    var name = form.getResponses()[length-1].getItemResponses()[0].getResponse();
    var surname = form.getResponses()[length-1].getItemResponses()[1].getResponse();
    var id=form.getResponses()[length-1].getItemResponses()[2].getResponse();
    var file=DriveApp.getFileById(id);
    var fileName = name + " " +  surname
    file.setName(fileName);
  }