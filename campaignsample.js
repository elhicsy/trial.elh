function showPopup(memberId) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');

    // Set the popup image source based on the member clicked
    popupImage.src = memberId + '-fullsize.jpg';

    // Display the popup
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
}