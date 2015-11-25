$.get('../template/kendoTemplate.tmpl.html', function(templates) {
  // Inject all those templates at the end of the document.
  $('body').append(templates);
  console.log("template homeBG:"+$('#temp_home').html());
  // Select the newly injected invoiceTemplate and use it
  //  render the invoice data.
  //$('#invoiceTemplate').tmpl(invoice).appendTo('body');
});
$.get('../template/navbar.tmpl.html', function(templates) {
  $('body').append(templates);
  //$('nav').html($('#temp_navbar').html());
});