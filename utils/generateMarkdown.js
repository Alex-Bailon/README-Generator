function generateMarkdown(data, user) {
  return `
# ${ data.title }

## Description

${ data.description }

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${ data.installation }

## Usage

${ data.usage }

## License 

${ data.license }

## Contributing

${ data.contributors }

## Tests

${ data.test}

## Questions 

If you have any further questions feel free to contact me at ${ user.userEmail }  
![User image](${ user.userImg })
`;
}

module.exports = {generateMarkdown: generateMarkdown}
