let word = "madam";
let reversed = word.split("").reverse("").join("");

if (word === reversed)
{
    console.log( word  + " is a Palindrome");
}
else
{
    console.log(word + "is not a Palindrome");
}

