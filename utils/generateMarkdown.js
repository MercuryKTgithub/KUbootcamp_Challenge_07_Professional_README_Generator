const githubDomainURL = "https://github.com/";
const OPEN_PAREN = '(';
const CLOSE_PAREN = ')';
const OPEN_SQUARED_BRT = '[';
const CLOSE_SQUARED_BRT = ']';
const EXCLAIMATION = '!';
const NEW_LINE = '\n';
const HTML_NEW_LINE = '</br>';
let softlicenses = [];
const infoICSLicense = {
  terminology : "[License: ISC]",
  badgeImgURL: 'https://img.shields.io/badge/License-ISC-blue.svg',
  URLinfo: 'https://opensource.org/licenses/ISC'
}

const infoMITLicense = {
   terminology : "[License: MIT]",
   badgeImgURL: 'https://img.shields.io/badge/License-MIT-yellow.svg',
   URLinfo: 'https://opensource.org/licenses/MIT'
  
  }
  
const infoApatch2p0License = {
  terminology : "[License]",
  badgeImgURL: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  URLinfo: 'https://opensource.org/licenses/Apache-2.0'
}

const infoGNUGPLv3License = {
  terminology : "[License: GPL v3]",
  badgeImgURL: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  URLinfo: 'https://www.gnu.org/licenses/gpl-3.0'
}

softlicenses.push(infoApatch2p0License);
softlicenses.push(infoGNUGPLv3License);
softlicenses.push(infoICSLicense);
softlicenses.push(infoMITLicense);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  console.log('++++++++++++++++++++++++++++++++++++++++');
  console.log(license);
  let badgelistResult = '';
  let licenseArr = [];
  var licenseString = `${license.join(', ')}` ;
  licenseArr = licenseString.split(",");

  for (var j = 0; j < licenseArr.length; j++)
  {
    if(licenseArr[j].trim().includes('MIT')){
      badgelistResult += NEW_LINE + OPEN_SQUARED_BRT + EXCLAIMATION + infoMITLicense.terminology 
      + OPEN_PAREN + infoMITLicense.badgeImgURL + CLOSE_PAREN + CLOSE_SQUARED_BRT
      + renderLicenseLink(licenseArr[j]) + NEW_LINE;
    }
    else if(licenseArr[j].trim().includes('Apache')){
      badgelistResult += NEW_LINE + OPEN_SQUARED_BRT + EXCLAIMATION + infoApatch2p0License.terminology 
      + OPEN_PAREN + infoApatch2p0License.badgeImgURL + CLOSE_PAREN + CLOSE_SQUARED_BRT
      + renderLicenseLink(licenseArr[j]) + NEW_LINE;
       
    }
    else if(licenseArr[j].trim().includes('ISC')){
      badgelistResult += NEW_LINE + OPEN_SQUARED_BRT + EXCLAIMATION + infoICSLicense.terminology 
      + OPEN_PAREN + infoICSLicense.badgeImgURL + CLOSE_PAREN + CLOSE_SQUARED_BRT
      + renderLicenseLink(licenseArr[j]) + NEW_LINE;
      
    }
    else if(licenseArr[j].trim().includes('GNU GPLv3')){
      badgelistResult += NEW_LINE + OPEN_SQUARED_BRT + EXCLAIMATION + infoGNUGPLv3License.terminology 
      + OPEN_PAREN + infoGNUGPLv3License.badgeImgURL + CLOSE_PAREN + CLOSE_SQUARED_BRT
      + renderLicenseLink(licenseArr[j]) + NEW_LINE;
    }
  } // end of for loop
  return badgelistResult;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  console.log('******inside license*********');
  console.log(license);
  let urlResult = '';
   
  if(license.trim().includes('MIT')){
    urlResult = OPEN_PAREN + infoMITLicense.URLinfo + CLOSE_PAREN;
  }
  else if(license.trim().includes('Apache')){
    urlResult = OPEN_PAREN + infoApatch2p0License.URLinfo  + CLOSE_PAREN;
  }
  else if(license.trim().includes('ISC')){
    urlResult = OPEN_PAREN + infoICSLicense.URLinfo  + CLOSE_PAREN;
  }
  //GNU GPLv3
  else if(license.trim().includes('GNU GPLv3')){
    urlResult = OPEN_PAREN + infoGNUGPLv3License.URLinfo  + CLOSE_PAREN;
  }
  else{
    urlResult = '';
  }
   
  return urlResult;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if(!license){
    // console.log('--------section license 1-------');
    // console.log(license);
    return '';
  }
  // console.log('--------section license 2-------');
  // console.log(license);
  let bulletedResult = '';
  let licenseArr = [];
  var licenseString = `${license.join(', ')}` ;
  licenseArr = licenseString.split(",");
  for (var j = 0; j < licenseArr.length; j++)
  {
    if(licenseArr[j].trim() != '')
    {
      bulletedResult += "* " + licenseArr[j].trim() + NEW_LINE;
    }
    else{
      bulletedResult += HTML_NEW_LINE;
    }
  }
  return bulletedResult; 
}

function generateMarkdown(data) {
  let credits = data.contributing;
  let italicCreditInfo = "_" + credits.trim() + "_";
  return `# ${data.title} ` + 
  `${renderLicenseBadge(data.licenses)}` +
  `\n---` +
  `\n###### Repository: ${data.repository} ` + 
  `\n---` +
  `\n`  +
  `\n## Description\n#### ${data.description}` +
  `<br>`  +
  `\n## Table Of Content\n#### 
  \n### 1. [` + "Installation" + `](#installation) 
  \n### 2. [` + "Usage" + `](#usage) 
  \n### 3. [` + "Contributing" + `](#contributing) 
  \n### 4. [` + "License" + `](#license) 
  \n### 5. [` + "Tests" + `](#tests) 
  \n### 6. [` + "Questions" + `](#questions) `
  
  +
  `<br><br>` +
  `\n### Installation\n#### ${data.installation} 
  \n### Usage\n#### ${data.usage} 
  \n### License\n${renderLicenseSection(data.licenses)}
  \n### Contributing\n` + italicCreditInfo +
  `\n### Tests\n#### ${data.testing}  
  \n### Questions\n* Please contact the developer with additional questions at ${renderEmailForQuestions(data.email)} 
                 \n* More info about the developer: ${renderGitHubURLForQuestions(data.username)} 

`;
}

// TODO: Create a function to generate markdown for README
// // function generateMarkdown(data) {
// //   return `# ${data.title} ` + 
// //   `${renderLicenseBadge(data.licenses)}` +
// //   `\n---` +
// //   `\n###### Repository: ${data.repository} ` + 
// //   `\n---` +
// //   `\n`  +
// //   `\n## Description\n#### ${data.description}` +
// //   `<br>`  +
// //   `\n## Table Of Content\n#### 
// //   \n### 1. [` + "Installation" + `](#installation) 
// //   \n### 2. [` + "Usage" + `](#usage) 
// //   \n### 3. [` + "Contributing" + `](#contributing) 
// //   \n### 4. [` + "License" + `](#license) 
// //   \n### 5. [` + "Tests" + `](#tests) 
// //   \n### 6. [` + "Questions" + `](#questions) `
// //   
// //   +
// //   `<br><br>` +
// //   `\n### Installation\n#### ${data.installation} 
// //   \n### Usage\n#### ${data.usage} 
// //   \n### License\n${renderLicenseSection(data.licenses)}
// //   \n### Contributing\n${data.contributing} 
// //   \n### Tests\n#### ${data.testing}  
// //   \n### Questions\n* Please contact the developer with additional questions at ${renderEmailForQuestions(data.email)} 
// //                  \n* More info about the developer: ${renderGitHubURLForQuestions(data.username)} 
// // 
// // `;
// // }

const renderEmailForQuestions = email => {
  if(!email){
    return '[ Not Available ]';
  }
  return "<" + email + ">";
}

const renderGitHubURLForQuestions = username => {
  if(!username){
    return '[ Not Available ]';
  }
  authorProfileURL = githubDomainURL + username
  return authorProfileURL;
}

module.exports = generateMarkdown;
