# Payment

Fastest way to inbuilt the **Payment Box** inside any website.

## How to Setup

### 1st Step
Place this `stylesheet` url
```
<link rel="stylesheet" href="./rajpay.css">
```
### 2nd Step
Place this `javascript` url
```
<script src="./rajpay.js"></script>
```
### 3rd Step
Add `id='rajPbtn'` in any tag like eg. span, button, a etc..
```
<button id='rajPbtn'>Buy this</button>
```

### 4th Step
Place this `config` and edit it
```
<script>
const rajdata = {
    productTitle: 'PRODUCT_NAME',
    productPrice: 'PRODUCT_PRICE',
    productInfo: 'PRODUCT_INFO',
    productLink: 'PRODUCT_DETAIL_LINK',
    productLinkText: 'PRODUCT_DETAIL',
    paymentLink: 'PAYMENT_LINK',
    paymentMethodName: 'PAYMENT_METHOD',
    paymentLogo: "PAYMENT_LOGO",
    paymentConfirmLink: 'CONTACT_LINK',
    tocLink: 'TERMS_LINK,
    privacyLink: 'PRIVACYPOLICY_LINK'
};
</script>
```

#### Example Config
This is only **sample config** don't use this.
```
<script>
const rajdata = {
    productTitle: 'Sample Product',
    productPrice: '$19.99',
    productInfo: 'Learn more about this product',
    productLink: 'https://example.com/product',
    productLinkText: 'here',
    paymentLink: '',
    paymentMethodName: 'Pay using UPI App',
    paymentLogo: "<svg viewBox='0 0 38 18' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='0.00390625' y='0.557281' width='37.9922' height='16.8854' rx='4.22135' fill='white'/><path d='M4.31512 4.77863H6.04467L4.06145 11.5328H11.1411L13.0782 4.77863H14.8538L12.6631 12.4091C12.5247 12.9434 12.0635 13.2213 11.2794 13.2213C10.4723 13.2213 7.63586 13.2213 2.77005 13.2213C2.14742 13.2213 1.96293 12.7724 2.23966 11.8534C2.47027 10.9343 3.18515 8.58317 4.31512 4.77863Z' fill='#101010'/><path d='M15.9599 4.79926C21.1255 4.79926 24.1465 4.79926 25.0228 4.79926C25.8991 4.79926 26.3142 5.03437 26.268 5.52597C25.7838 7.32137 25.4609 8.47556 25.2764 8.98853C25.0919 9.52288 24.746 9.82211 24.1926 9.88623H16.1675L15.222 13.2206H13.4924L14.9914 8.21907H23.7083L24.2156 6.38092H15.4526L15.9599 4.79926Z' fill='#101010'/><path d='M27.884 4.77866H29.5674L27.1691 13.2213H25.4165L27.884 4.77866Z' fill='#101010'/><path fill-rule='evenodd' clip-rule='evenodd' d='M33.6954 4.86523L31.2971 13.2224L35.8862 9.03313L33.6954 4.86523Z' fill='#008B44'/><path fill-rule='evenodd' clip-rule='evenodd' d='M32.1271 4.86523L29.7288 13.2224L34.3178 9.03313L32.1271 4.86523Z' fill='#F37820'/></svg>",
    paymentConfirmLink: 'https://example.com/confirm',
    tocLink: 'https://example.com/toc',
    privacyLink: 'https://example.com/privacy'
};
</script>
```


### That's it