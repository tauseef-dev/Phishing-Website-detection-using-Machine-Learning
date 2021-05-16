# Phishing-Website-detection-using-Machine-Learning

We have Build a chrome extension which can detect Phishing or Malecious website which user visits in chrome browser.

This Extension is made as a MINI PROJECT for 3rd yr Engineering 

*Steps to install the chrome extension:

-Google Chrome -> More Tools -> Extensions

-Click 'Load unpacked extension..'

-Open the 'Engineering Module' directory

-Phishing Detection extension ready to monitor all the sites loaded on the Chrome browser

The Phishing Detection Chrome Extension aims to classify, every browsed URL, under phished and non-phished category(on page load). thereby, alerting the user of
any malicious activity and prevent intrusion.

1. manifest.json: It provides Chrome with the basic information about the extension like name, permissions, associated scripts and files.

2.content.js: It runs in separate unprivileged javscript environment and has complete access to the DOM. Here, the trained 'SVM model' (weights calculated in ./ML Algorithm Evaluation/run_algorithms.py) has been used as a persistent model to classify websites. Below functions compute feature vector for the portal under analysis:

isIPInURL()

isLongURL()

isTinyURL()

isAlphaNumericURL()

isRedirectingURL()

isHypenURL()

isMultiDomainURL()

isFaviconDomainUnidentical()

isIllegalHttpsURL()

isImgFromDifferentDomain()

isAnchorFromDifferentDomain()

isScLnkFromDifferentDomain()

isFormActionInvalid()

isMailToAvailable()

isStatusBarTampered()

isIframePresent()

The evaluated feature vector, further, passed to predict(data) function reckons the prediction for the website.

3. background.js: In case, we need access to external extensions or APIs, it is a requisite to create means of communication between the content.js and privileged parts of the our extension, and this interaction is termed as message passing. Message passing allows different components of our extension to collabrate.

NOTE: The extension validates every URL call, i.e. in case of URL redirection, it will assess every intermittent URL hit as well.

Chrome WebStore Link: https://chrome.google.com/webstore/detail/phalicious-shield/ecgjimkbgeddefdiijcinpddnnedcnbb/related?hl=en-GB

ABOUT US: https://phalicious-shield-aboutus.netlify.app/

How To Use Video: https://www.youtube.com/watch?v=NQGRY5XFU-M&t=3s
