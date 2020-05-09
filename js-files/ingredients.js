// $(document).ready(function () {

//     // $.ajax({
//     //     url: 'https://api.kroger.com/v1/connect/oauth2/token',
//     //     crossDomain: true,
//     //     dataType: "jsonp",
//     //     headers: {
//     //         'Authorization': 'Basic {{base64(cXVhcmFudGluaWFwcDMtNjU2MzQ3ZTM3YmFkN2Q4OGY4ODE5M2U3N2Q4NDY2Y2E5MDQzMDMwNDUxNDg5NDI1NjkxOmVkZ3JVejcyNDdjejNtd1RSVExFT2xWR1Rod0V0RlZkdWM5bm4xeTY=)}}',
//     //         'grant_type': 'client_credentials',
//     //         'Content-Type': 'application/x-www-form-urlencoded',

//     //     },
//     //     method: 'POST',

//     // quarantiniapp3-656347e37bad7d88f88193e77d8466ca9043030451489425691
//     // edgrUz7247cz3mwTRTLEOlVGThwEtFVduc9nn1y6

//     // })
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.kroger.com/v1/connect/oauth2/token",
//         "method": "POST",
//         "headers": {
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/x-www-form-urlencoded",
//             "Authorization": "cXVhcmFudGluaWFwcDMtNjU2MzQ3ZTM3YmFkN2Q4OGY4ODE5M2U3N2Q4NDY2Y2E5MDQzMDMwNDUxNDg5NDI1NjkxOmVkZ3JVejcyNDdjejNtd1RSVExFT2xWR1Rod0V0RlZkdWM5bm4xeTY="
//         },
//         "data": {
//             "grant_type": "client_credentials",
//             "scope": "product.compact"

//         }
//     }
//     console.log('loaded')
//     $.ajax(settings).then(function (response) {
//         console.log('lkasjdflkjasdf', response);
//         get(response.access_token)
//     }).catch(err => {
//         console.log(err)
//     });

//     // Then you need to pass that token when you make an api request.

//     function get(token) {
//         var settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": "https://api.kroger.com/v1/products?filter.brand={{BRAND}}&filter.term={{TERM}}&filter.locationId={{LOCATION_ID}}",
//             "method": "GET",
//             "headers": {
//                 "Accept": "application/json",
//                 "Authorization": `Bearer ${token}`
//             }
//         }
//         $.ajax(settings).done(function (response) {
//             console.log('test', response);
//         });

//     }
// })
