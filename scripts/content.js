console.log('The URL of this webpage is:', document.URL);

const nlp_compute_request = new XMLHttpRequest();

console.log('Calling Server URL for computing NLP Statistics:', "http://127.0.0.1:2024/?usagemode=extension&url=" + document.URL);
nlp_compute_request.open("GET", "http://127.0.0.1:2024/?usagemode=extension&url=" + document.URL);
nlp_compute_request.responseType = "text";
nlp_compute_request.send();
nlp_compute_request.onload = () => {
  if (nlp_compute_request.readyState == 4 && nlp_compute_request.status == 200) {    
    console.log(nlp_compute_request.response);
    const nlp_compute_info_para = document.createElement("p");
    const nlp_compute_info = document.createElement("PRE");
    nlp_compute_info_para.appendChild(nlp_compute_info);
    nlp_compute_info.textContent = nlp_compute_request.response
    console.log(nlp_compute_info)
    const contentSub = document.getElementById('contentSub');
    console.log(contentSub)
    contentSub.insertAdjacentElement("afterend", nlp_compute_info_para);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
