## Tracer Tool
- Tracer Tool is a visualization utility built using React, designed to help users visualize and understand the evaluation traces.
- The tool focuses specifically on the Faithfulness metric, which measures the presence of hallucinations in generated answers.

## Features
- **Interactive Graphs**: Visualize the structure of evaluation logs with expandable branches and nodes.
- **Side Panel Display**: Click on the last node in the graph to reveal detailed information about the entire LLM run in a side panel.
- **User-Friendly Interface**: Clean and intuitive UI designed for ease of use.

## Technologies Used
- React: For building the dynamic user interface.
- Tailwind CSS: For styling the application.

## Installation

1. Clone the repository:
`git clone https://github.com/yashjk/tracer-tool.git`

2. Navigate to the project directory:
`cd tracer-tool`

3. Install the required dependencies:
`npm install`
or
`yarn add`

4. Start the development server:
`npm start`
or
`yarn start`

## Usage

Once the development server is running, you can explore by opening the app in your browser at http://localhost:3000.

- **Upload Evaluation Logs**: Use the file uploader to load your evaluation logs into the app.
- **Explore the Graph**: The graph visually represents different runs as nodes. Click on any node to reveal its child nodes and delve deeper into the evaluation hierarchy.
- **View Run Details**: Click on the last node in any branch to display detailed information about that specific run in the side panel.

