# Caesar cipher CLI tool
Implementation of RS NodeJS 2021q2 task - Caesar cipher CLI tool

## What is Caesar cipher?
[Wiki](https://en.wikipedia.org/wiki/Caesar_cipher)

## What does this cli-tool exatly does?
It takes input .txt file and creating encoded or decoded version of it in output .txt file using Caesar cipher and shift value.

## How to launch
1. For downloading needed packages run `npm i`
2. Launch tool with command  
```
node caesar-cipher-cli-tool.js -s [integer] -i [path] -o [path] -a [action]   
```
### Where
- `-s (--shift)` : shift (integer)
- `-i (--input)` : input path (should be realtive (./...) or absolute) to .txt file
- `-o (--output)` : output path (should be realtive (./...) or absolute) to .txt file
- `-a (--action)` : 'encode' or 'decode'
  
if input was not sent stin will launched - to leave it use `Ctrl + C` keyboard combination.
if out was not sent encode or decode message will sent to command line.

