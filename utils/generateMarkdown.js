const githubDomainURL = "https://github.com/";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if(!license){
    return '';
  }
  console.log(license);
  let bulletedResult = '';
  let licenseArr = [];
  licenseString = `${license.join(', ')}` ;
  licenseArr = licenseString.split(",");
  for (var j = 0; j < licenseArr.length; j++)
  {
    bulletedResult += "* " + licenseArr[j].trim()+ "\n";
  }
  return bulletedResult;
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ` + 
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
  \n### Contributing\n${data.contributing} 
  \n### Tests\n#### ${data.testing}  
  \n### Questions\n* Please contact the developer with additional questions at ${renderEmailForQuestions(data.email)} 
                 \n* More info about the developer: ${renderGitHubURLForQuestions(data.username)} 

`;
}

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



// // function generateMarkdown(data) {
// //   authorProfileURL = githubDomainURL + `${data.username}` 
// //   anchorMark = "#";
// //   return `# ${data.title} ` + 
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
// //   `\n### Installation\n&nbsp;&nbsp;&nbsp;&nbsp;#### ${data.installation}
// //   \n### Usage\n#### ${data.usage}
// //   \n### License\n#### ${data.licenses.join(', ')} 
// //   \n### Contributing\n${data.contributing} 
// //   \n### Tests\n#### ${data.testing} 
// //   \n### Questions\n* Please contact the developer at <${data.email}> with additional questions 
// //                 \n* More info about developer: ${authorProfileURL} 
// // 
// // `;
// // }

module.exports = generateMarkdown;
