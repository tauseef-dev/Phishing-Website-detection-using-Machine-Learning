chrome.extension.onRequest.addListener(function(prediction){
    if (prediction==1){
        alert("Suspected Phishing or Malicious Content !! \n\nBased on content review, this page is supposed to be a phishing attack or may not safe for brwosing. \nPlease be careful if you have to submit your Sensetive Information. ");
    }
    // else if (prediction==-1){
    //     alert("Website is SAFE");
    // }
});