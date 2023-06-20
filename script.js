document.getElementById('plagiarismForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var codeInput = document.getElementById('codeInput').value;

  var similarityPercentage = checkPlagiarism(codeInput);

  var resultDiv = document.getElementById('result');
  resultDiv.innerText = 'Plagiarism Result: ' + similarityPercentage + '%';
});

function checkPlagiarism(codeInput) {
  // Assume there is a reference code against which plagiarism is checked
  var referenceCode = 'Some reference code goes here';

  var commonCharacters = getCommonCharacters(codeInput, referenceCode);

  var similarityPercentage = (commonCharacters.length / referenceCode.length) * 100;

  return similarityPercentage.toFixed(2); // Fixed to 2 decimal places
}

function getCommonCharacters(str1, str2) {
  var commonChars = '';

  for (var i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1 && commonChars.indexOf(str1[i]) === -1) {
      commonChars += str1[i];
    }
  }

  return commonChars;
}
