const INITIAL_STATE = {
  articles: [
    { id: '0', title: 'NODEJS SECURE ENDPOINT WITH JWT TOKEN', url: 'https://www.codementor.io/mohdraheem06/securing-node-js-restful-apis-with-json-web-tokens-jwt-using-async-await-lji074q5p' },
    { id: '1', title: 'AWS IOT PART 2', url: 'https://www.codementor.io/mohdraheem06/nodejs-connect-aws-iot-device-with-js-sdk-part-2-jyaq16ipw' },
    { id: '2', title: 'AWS IOT Part 1', url: 'https://www.codementor.io/mohdraheem06/nodejs-connect-aws-iot-device-with-js-sdk-jevizuihr' },
  
    { id: '3', title: 'LOGIN WITH EB AND GOOGLE', url: 'https://github.com/Abdurraheem/SocialLoginApp/' },
    { id: '4', title: 'SMART CHAT', url: 'https://github.com/Abdurraheem/SmartChat' },
    { id: '5', title: 'REAL TIME TYPEWRITTER', url: 'https://github.com/Abdurraheem/Real-Time-Typewritter' },
    { id: '6', title: 'NODEJS SECURE ENDPOINT WITH JWT TOKEN', url: 'https://www.codementor.io/mohdraheem06/securing-node-js-restful-apis-with-json-web-tokens-jwt-using-async-await-lji074q5p' },
    { id: '7', title: 'AWS IOT PART 2', url:'https://www.codementor.io/mohdraheem06/nodejs-connect-aws-iot-device-with-js-sdk-part-2-jyaq16ipw' },
    { id: '8', title: 'AWS IOT Part 1', url: 'https://www.codementor.io/mohdraheem06/nodejs-connect-aws-iot-device-with-js-sdk-jevizuihr' },
  ],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default articleReducer;
