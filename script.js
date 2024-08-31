const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');

const result = document.getElementById('result');


button.addEventListener('click', () => {
  let text = input.value;
  let cleanText = text.replace(/[^a-zA-Z0-9]|[A-Z]/g, (match) => {
  if (/[A-Z]/.test(match)) {
    return match.toLowerCase();
  }
  return '';
});

  console.log(cleanText);
 let reverseInput = cleanText.split("").reverse().join("");
console.log(reverseInput)
  if(text == "") {
    alert("Please input a value")
  } else if(reverseInput == cleanText) {
    result.innerHTML = `${input.value} is a palindrome`
  } else {
    result.innerHTML = `${input.value} is not a palindrome`
  }
})
