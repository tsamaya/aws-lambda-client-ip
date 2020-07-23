module.exports.myIP = async (event) => {
  if (!event.requestContext && event.requestContext.identity) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          sourceIp: 'unknown',
          event,
        },
        null,
        2
      ),
    };
  }

  const clientIP = event.requestContext.identity.sourceIp;
  console.log(`SourceIP is ${clientIP}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        sourceIp: clientIP,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
