const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = fs.promises;
const Shape = require('./assets/shapes');

// Function to prompt user for input
const askQuestions = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'Enter text to be set within Logo (3 characters maximum): ',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color would you like your text to be?(Keyword or Hexadecimal): ',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Which Shape would you like your logo to be: ',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                message: 'What color would you like your Logo to be?(Keyword or Hexadecimal): ',
                name: 'logoColor',
            },
        ]);
        return answers;
    } catch (error) {
        console.error('Error while asking questions:', error);
        throw error;
    }
};

// Function to generate SVG based on user input
const generateSVG = ({ text, textColor, shape, logoColor }) => {
    try {
        let renderedShape;

        if (shape === 'circle') {
            renderedShape = new Shape.Circle(text, textColor, logoColor).render();
        } else if (shape === 'triangle') {
            renderedShape = new Shape.Triangle(text, textColor, logoColor).render();
        } else {
            renderedShape = new Shape.Square(text, textColor, logoColor).render();
        }

        return renderedShape;
    } catch (error) {
        console.error('Error while generating SVG:', error);
        throw error;
    }
};

// Main function to initialize the application
const init = async () => {
    try {
        const answers = await askQuestions();
        const svgContent = generateSVG(answers);
        await writeFile('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
};

// Start the application
init();