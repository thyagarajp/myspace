
// Example 1: Extract JSON URL from data attribute
const jsonUrl1 = document.querySelector('.json-link').getAttribute('data-url');
console.log("JSON URL from data attribute:", jsonUrl1);

// Example 2: Extract JSON URL from text content
const jsonUrl2 = document.querySelector('#json-url').textContent.trim();
console.log("JSON URL from text content:", jsonUrl2);

// Example 3: Extract JSON URL from script content
const scriptContent = document.querySelector('#json-script').textContent;
const urlMatch = scriptContent.match(/https?:\/\/[^\s"']+/);
if (urlMatch) {
    const jsonUrl3 = urlMatch[0];
    console.log("JSON URL from script content:", jsonUrl3);
}

// Example 4: Extract JSON URL from anchor href
const jsonUrl4 = document.querySelector('.json-anchor').href;
console.log("JSON URL from anchor href:", jsonUrl4);

// Example 5: Extract JSON URL from img src
const jsonUrl5 = document.querySelector('.json-source').src;
console.log("JSON URL from img src:", jsonUrl5); 