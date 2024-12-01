document.addEventListener("DOMContentLoaded", function() {

           let viewerCounts = [342, 278, 196, 145, 89];
    function updateViewerCount() {
      let randomCount = viewerCounts[Math.floor(Math.random() * viewerCounts.length)];
      document.querySelector('.viewer-count').textContent = randomCount;
    }
    setInterval(updateViewerCount, 10000);
 fetch('https://raw.githubusercontent.com/bazaarteech/hourediscounte/main/hourediscounte.json')
      .then(response => response.json())
      .then(data => {
        fetch('https://ipinfo.io/json?token=7026faa1150bfd')
          .then(response => response.json())
          .then(ipData => {
            var userCountry = ipData.country;
            var userLang = 'en'; // افتراض اللغة الإنجليزية

            if (['SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'DZ', 'TN', 'EG', 'MA', 'AR'].includes(userCountry)) {
              userLang = 'ar';
            } else if (['US', 'GB', 'CA', 'AU', 'IE', 'NZ', 'ZA', 'IN', 'NG', 'PK', 'PH', 'SG', 'JM', 'MT', 'BB', 'TT', 'GH', 'ZM', 'BS', 'BZ', 'GD', 'HN', 'KN', 'LC', 'VC', 'SL', 'MW', 'ZW', 'KE', 'UG', 'SS', 'MU', 'MV', 'FJ', 'MM', 'NP', 'KR', 'JP', 'IL', 'HK', 'ET', 'ER', 'CY', 'BN', 'AO', 'BD', 'VU', 'TZ', 'LK', 'SC', 'WS', 'LC', 'KN', 'RW', 'DK', 'NO', 'RU', 'TR', 'IT', 'DE', 'NL', 'TH', 'BY', 'HR', 'AT', 'BG', 'RO', 'FI', 'IS', 'KZ', 'DM', 'GY', 'VG', 'TV'].includes(userCountry)) {
              userLang = 'en';
            } else if (['FR', 'CD', 'BE', 'CH', 'LU', 'CI', 'SN', 'CM', 'GN', 'BF', 'NE', 'TD', 'CF', 'RW', 'NC', 'CK', 'BJ', 'BI', 'KM', 'CG', 'ML', 'SC'].includes(userCountry)) {
                userLang = 'fr'; 
            } else if (['CR', 'MX', 'AR', 'CL', 'CO', 'PE', 'VE', 'GT', 'EC', 'BO', 'PY', 'UY', 'CU', 'DO', 'SV', 'NI', 'HN', 'PR', 'GQ', 'PA', 'ES'].includes(userCountry)) {
                   userLang = 'es';
             } 

            // تحديث النصوص بناءً على اللغة
            document.getElementById('offerMessage').textContent = data[userLang].offerMessage;

document.getElementById('viewersText').textContent = data[userLang].viewersText;

document.getElementById('daysUnit').textContent = data[userLang].daysUnit;

document.getElementById('hoursUnit').textContent = data[userLang].hoursUnit;

document.getElementById('minutesUnit').textContent = data[userLang].minutesUnit;

document.getElementById('secondsUnit').textContent = data[userLang].secondsUnit;
          })

          .catch(error => console.error('Error fetching IP data:', error));
      })
      .catch(error => console.error('Error fetching translation data:', error));
  });

  // تحديث العد التنازلي
  let countdownTime = 3360;
  function updateCountdown() {
    countdownTime--;
    let days = Math.floor(countdownTime / (60 * 60 * 24));
    let hours = Math.floor((countdownTime % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((countdownTime % (60 * 60)) / 60);
    let seconds = Math.floor(countdownTime % 60);

   document.querySelector('.days').textContent = String(days).padStart(2, '0');
    document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
    document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
    document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
  }
  setInterval(updateCountdown, 1000);
