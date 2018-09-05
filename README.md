# Execute/Debug Serverless on Local

This is a project what created by me when I was first starting with serverless. Serverless sounded really awesome with all its benefits, but as a developer before starting the most important aspects like local execution and debugging was not straight forward.

This project is an attempt to help new developers adopting serverless. This project conatins all the necessary tools to help you with local hosting of the APIs and the debugging.

The project is written on Visual Studio Code, and the application can be debugged on the same.

## Dependencies

I have added the following dev dependencies:
1. **serverless** (*npm install serverless --save-dev*)
2. **serverless-offline** (*npm install serverless-offline --save-dev*)

## Important Steps

1. Add the *serverless-offline* plugin in your *serverless.yaml* file.
2. For every function create a Run Configuration in the *launch.json* file.

## References

1. https://www.npmjs.com/package/serverless-offline
2. https://hackernoon.com/running-and-debugging-aws-lambda-functions-locally-with-the-serverless-framework-and-vs-code-a254e2011010
3. https://serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/
