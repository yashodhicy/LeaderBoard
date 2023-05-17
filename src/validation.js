const validateForm = (score) => {
  if (score < 10 || score > 200) {
    document.getElementById('error').innerText = 'Please enter a score between 0 and 200.';
    return false;
  }

  return true;
};

export default validateForm;