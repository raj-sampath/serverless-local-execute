# Execute/Debug Serverless(NodeJS) on Local

This is a project what created by me when I was first starting with serverless. Serverless sounded really awesome with all its benefits. But, as a developer before starting the most important aspects like local execution and debugging were not straight forward.

This project is an attempt to help new developers adopting serverless. This project conatins all the necessary tools to help you with local hosting of the APIs and the debugging.

The project is written on Visual Studio Code, and the application can be debugged on the same.

## Dependencies

I have added the following dev dependencies:
1. **serverless** (*npm install serverless --save-dev*)
2. **serverless-offline** (*npm install serverless-offline --save-dev*)

## Important Steps

1. Add the *serverless-offline* plugin in your *serverless.yaml* file.
2. For every function create a Run Configuration in the *launch.json* file.

## Run APIs Locally

`serverless offline start`

## Debug Specific Functions

1. Open Project in VS Code.
2. In the Debug Section Add a New Connfiguration
3. Create a new run configuration as show in *.vscode/launch.json* file. This is the same as *sls local invoke*, but the execution will now be done by VS Code so now the function will be debuggable. 

## References

1. https://www.npmjs.com/package/serverless-offline
2. https://hackernoon.com/running-and-debugging-aws-lambda-functions-locally-with-the-serverless-framework-and-vs-code-a254e2011010
3. https://serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/
