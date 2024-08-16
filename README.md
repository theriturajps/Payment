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
    productPrice: '$1.99 / 299 Rs',
    productInfo: 'Learn more about this product',
    productLink: 'https://example.com/product',
    productLinkText: 'here',
    paymentLink: '',
    paymentMethodName: 'Pay using UPI App',
    paymentLogo: '//indiadesignsystem.bombaydc.com/assets/india-designs/display/UPI/black.svg',
    paymentConfirmLink: 'https://example.com/confirm',
    tocLink: 'https://example.com/toc',
    privacyLink: 'https://example.com/privacy'
};
</script>
```


### That's it
