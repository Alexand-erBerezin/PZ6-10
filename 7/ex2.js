let arrayOfEmails = new Array();
let blackList = new Array();

arrayOfEmails = [ 'Alexander_Berezin@gmail.com', 'yuipororpmcjpj@mail.ru', 'panfilow@mail.ru', 'andreygrozny@mail.ru', 'grom@mail.ru', 'bakal@mail.ru'];
blackList = ['panfilow@mail.ru', 'bakal@mail.ru'];


console.log("Все электронные адреса:\n" + arrayOfEmails.join("|") );
console.log("Чёрный список:\n" + blackList.join("|") );
filter(arrayOfEmails, blackList);
function filter(allEmails, blackList) {
  for (let i = 0; i < allEmails.length; ++i) {
    for (let n = 0; n < blackList.length; n++) {
      if (allEmails[i] == blackList[n]) {
        allEmails.splice(i, 1);
        --i;
      }
    }
  }
  console.log("Адреса которые не внесены в чёрный список:\n" + allEmails.join("|") + "\n__");
}