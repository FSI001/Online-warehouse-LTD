if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Redirect mobile users to a mobile version or a blocked page
    window.location.href = '505.html';
}