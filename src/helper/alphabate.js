  //Check for alphbates validation
  export default (username) => {
    const alphabetRegex = /^[a-zA-Z ]*$/;
    return username.match(alphabetRegex);
  };