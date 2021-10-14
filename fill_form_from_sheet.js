function autoFillGoogleDocFromForm(e) {
    //e.values is an array of form values
    var rokStudiow = e.values[2];
    var wydzial = e.values[3];
    var imie = e.values[4];
    var nazwisko = e.values[5];
    var adres = e.values[6];
    var mail = e.values[7];
    var zaliczony = e.values[8];
    var srednia = e.values[9];
    var jezykObcy = e.values[10];
    var poziom = e.values[11];
    var ocena = e.values[12];
    var rodzajCertyfikatu = e.values[13];
    var koordynatorWydzialowy = e.values[14];
    var koordynatorUmowy = e.values[15];
    var czyMiejsceUdostepnione = e.values[16];
    var erasmusKod = e.values[17];
    var okresStudiow = e.values[18];
    var stopien = e.values[19];
    var miesiace = e.values[20];
  
    
    var file = DriveApp.getFileById("1p9hXDqc_l58Lb1WQwf4ovStjEppOq-ddrv7py3j41qU"); 
    
    var folder = DriveApp.getFolderById("1BV5yqlRjcFD9Fr83zyqcw9zsj4Hzvlkd")
    var copy = file.makeCopy(nazwisko + ',' + imie, folder); 
    
    var doc = DocumentApp.openById(copy.getId()); 
    
    var body = doc.getBody(); 
    
    body.replaceText('{{Rok studiów}}', rokStudiow); 
    body.replaceText('{{Wydział}}', wydzial);  
    body.replaceText('{{Imię}}', imie); 
    body.replaceText('{{Nazwisko}}', nazwisko); 
    body.replaceText('{{Adres}}', adres); 
    body.replaceText('{{Kontakt}}', mail); 
    body.replaceText('{{Zaliczony}}', zaliczony); 
    body.replaceText('{{Średnia}}', srednia); 
    body.replaceText('{{Język obcy}}', jezykObcy); 
    body.replaceText('{{Poziom}}', poziom); 
    body.replaceText('{{Ocena}}', ocena); 
    body.replaceText('{{Rodzaj certyfikatu}}', rodzajCertyfikatu); 
    body.replaceText('{{Koordynator wydziałowy}}', koordynatorWydzialowy); 
    body.replaceText('{{Koordynator umowy}}', koordynatorUmowy); 
    body.replaceText('{{Czy miejsce udostępnione}}', czyMiejsceUdostepnione);
    body.replaceText('{{Erasmus kod}}', erasmusKod);
    body.replaceText('{{Okres studiów}}', okresStudiow);
    body.replaceText('{{stopien}}', stopien);
    body.replaceText('{{miesiace}}', miesiace);
  
  
    
    
    doc.saveAndClose();
    var pdfDoc = doc.getAs('application/pdf'); 
  
    // TODO zmienić adres maila i temat
    var body = "Formularz do odesłania plików: https://docs.google.com/forms/d/e/1FAIpQLSergiCLyjNHwDM7zS0pykXzxj6OlUGlryynTmrrHBBje9oyeQ/viewform?usp=sf_link"
    GmailApp.sendEmail("rafalk1703@gmail.com", "TematTestMail", body, {
      attachments: [pdfDoc.getAs(MimeType.PDF)], 
      });
  }