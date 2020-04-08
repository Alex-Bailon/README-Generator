# README-Generator
 
## Description

README-Generator takes in user input to generator a readme file. The README-Generator uses axios, dotenv and inquirer as dependencies. With the use of inquirer the user is prompted with a series of questions with the answers being inserted into the readme. 

## Usage

In order for code to work please ensure you do the following:
* That you run `npm install` before running the code
* Create a `.env` file with your access token from GitHub (please see `.env_sample` for an example)
* Generated markdown file will be under `./utils/markdowns`

Below is a demonstration how the code operates  
![gif showing how code works](./utils/image/readme.gif)

## License
MIT License

Copyright (c) 2020 Alex Bailon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.