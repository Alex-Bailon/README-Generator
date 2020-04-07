//function to generate readme file and exported out
function generateMarkdown(data, user) {
  return `
# ${ data.title }

## Description

${ data.description }

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation

${ data.installation }

## Usage

${ data.usage }


## Contributing

${ data.contributors }

## Tests

${ data.test}

## Questions 

If you have any further questions feel free to contact me at ${ user.userEmail }  
![User image](${ user.userImg })  
![Followers icon](https://img.shields.io/github/followers/${ data.username }?style=social)
  
## License 

${ data.license }
`;
}

module.exports = {generateMarkdown}
