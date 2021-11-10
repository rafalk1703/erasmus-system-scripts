function autoFillGoogleDocFromForm(e) {
  //e.values is an array of form values
 
  var imie = e.values[1];
  var nazwisko = e.values[2];
  var wydzial = e.values[3];
  var rokStudiow = e.values[4];
  var kierunek = e.values[5];
  var adres = e.values[6];
  var telefon = e.values[7];
  var mail = e.values[8];
  var czyZaliczonySemestr = e.values[9];
  var srednia = e.values[10];
  var jezykObcy = e.values[11];
  var poziomEgzaminu = e.values[12];

  var ocena = e.values[13];
  var koordynatorWydzialowy = e.values[14];

  var rodzajCertyfikatu = e.values[15];
  var czyMiejsceUdostepnione = e.values[16];
  var umowa1 = e.values[17];
  var umowa2 = e.values[18]==="brak" ? "" : e.values[18];
  var umowa3 = e.values[19]==="brak" ? "" : e.values[19];
  var planowaneDatyPobytu = e.values[20];
  var rodzajWyjazdu = e.values[21];
  var czyUczestniczylWErasmus = e.values[22];
  var czyOtrzymujeStupendium = e.values[23];
  var czyNiepelnosprawny = e.values[24];

  
  var file = DriveApp.getFileById("1p9hXDqc_l58Lb1WQwf4ovStjEppOq-ddrv7py3j41qU"); 
  
  var folder = DriveApp.getFolderById("1BV5yqlRjcFD9Fr83zyqcw9zsj4Hzvlkd")
  var copy = file.makeCopy(nazwisko + ',' + imie, folder); 
  
  var doc = DocumentApp.openById(copy.getId()); 
  
  var body = doc.getBody(); 
  
  
  body.replaceText('{{Imię}}', imie); 
  body.replaceText('{{Nazwisko}}', nazwisko);
  body.replaceText('{{Wydział}}', wydzial);  
  body.replaceText('{{Rok studiów}}', rokStudiow); 
  body.replaceText('{{Kierunek}}', kierunek); 
  body.replaceText('{{Adres}}', adres);
  body.replaceText('{{Telefon}}', telefon);
  body.replaceText('{{Mail}}', mail); 
  body.replaceText('{{Zaliczony}}', czyZaliczonySemestr); 
  body.replaceText('{{Średnia}}', srednia); 
  body.replaceText('{{Język obcy}}', jezykObcy);
  body.replaceText('{{Poziom}}', poziomEgzaminu); 
  body.replaceText('{{Ocena}}', ocena);  
  body.replaceText('{{Rodzaj certyfikatu}}', rodzajCertyfikatu); 
  body.replaceText('{{Koordynator wydziałowy}}', koordynatorWydzialowy);
  body.replaceText('{{Czy miejsce udostępnione}}', czyMiejsceUdostepnione); 
  body.replaceText('{{Umowa1}}', umowa1); 
  body.replaceText('{{Umowa2}}', umowa2); 
  body.replaceText('{{Umowa3}}', umowa3); 
  body.replaceText('{{Planowane daty pobytu}}', planowaneDatyPobytu); 
  body.replaceText('{{Rodzaj wyjazdu}}', rodzajWyjazdu); 
  body.replaceText('{{Czy uczesticzył}}', czyUczestniczylWErasmus);
  body.replaceText('{{Czy otrzymuje stypendium}}', czyOtrzymujeStupendium); 
  body.replaceText('{{Czy student niepełnosprawny}}', czyNiepelnosprawny);  

  
  doc.saveAndClose();
  var pdfDoc = doc.getAs('application/pdf'); 

  // TODO zmienić adres maila 
  var body = "Formularz do odesłania plików: https://docs.google.com/forms/d/e/1FAIpQLSergiCLyjNHwDM7zS0pykXzxj6OlUGlryynTmrrHBBje9oyeQ/viewform?usp=sf_link"
  GmailApp.sendEmail("rafalk1703@gmail.com", "Rekrutacja Erasmus", body, {
    attachments: [pdfDoc.getAs(MimeType.PDF)], 
    });
}