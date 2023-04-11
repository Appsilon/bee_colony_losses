$(() => {

  /* Default installation */
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-FQQZL5V93G');

  /* About Button */
  $('.fa-info-circle').on('click', (event) => {
    gtag('event', 'about_button_clicked');
  });

  /* Let's Talk Button */
  $('#talk-btn').on('click', (event) => {
    gtag('event', 'lets_talk_clicked');
  });

  /* Appsilon Logo */
  $('#appsilon-logo').on('click', (event) => {
    gtag('event', 'appsilon_logo_clicked');
  });

});
