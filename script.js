function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

    const viDateTimeFormatter = new Intl.DateTimeFormat('vi-VN', options);
    const currentDateTime = viDateTimeFormatter.format(new Date());

    datetimeElement.textContent = currentDateTime;
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
