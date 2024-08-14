document.addEventListener('DOMContentLoaded', function () {
    const rajPbtn = document.getElementById('rajPbtn');
    let popupBox;

    function loadPopup() {
        fetch('./paymentTemp.html')
            .then(response => response.text())
            .then(html => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                const placeholders = {
                    '{Product_Title}': rajdata.productTitle,
                    '{Product_Price}': rajdata.productPrice,
                    '{Product_Info}': rajdata.productInfo,
                    '{Product_Link}': rajdata.productLink || 'javascript:;',
                    '{Product_Link_Text}': rajdata.productLinkText,
                    '{Payment_Link}': rajdata.paymentLink || 'javascript:;',
                    '{Payment_Method_Name}': rajdata.paymentMethodName,
                    '{payment_Logo}': rajdata.paymentLogo,
                    '{Payment_Confirm_Link}': rajdata.paymentConfirmLink || 'javascript:;',
                    '{ToC_Link}': rajdata.tocLink || 'javascript:;',
                    '{Privacy_Link}': rajdata.privacyLink || 'javascript:;'
                };

                Object.keys(placeholders).forEach(key => {
                    tempDiv.innerHTML = tempDiv.innerHTML.split(key).join(placeholders[key]);
                });                

                document.body.appendChild(tempDiv.firstChild);
                popupBox = document.getElementById('popupBox');
                
                // Add event listeners
                const closeBtn = document.getElementById('closeBtn');
                closeBtn.addEventListener('click', hidePopup);
                window.addEventListener('click', outsideClick);

                // Show the popup immediately after loading
                showPopup();
            });
    }

    function showPopup() {
        if (popupBox) {
            popupBox.style.display = 'flex';
        }
    }

    function hidePopup() {
        if (popupBox) {
            popupBox.style.display = 'none';
        }
    }

    function outsideClick(event) {
        if (popupBox && event.target === popupBox) {
            hidePopup();
        }
    }

    function handleRajPbtnClick(event) {
        event.preventDefault(); // Prevent any default button behavior
        if (!popupBox) {
            loadPopup();
        } else {
            showPopup();
        }
    }

    // Use addEventListener instead of onclick
    rajPbtn.addEventListener('click', handleRajPbtnClick);
});
