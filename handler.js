module.exports.getHello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello !!!!!'
    }),
  };
}

module.exports.postHello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Wazzup !!!!!',
      postData: event.body
    }),
  };
};