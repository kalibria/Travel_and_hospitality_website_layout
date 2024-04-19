const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const buttons = [button1, button2, button3]

const content1 = document.querySelector('#content1');
const content2 = document.querySelector('#content2');
const content3 = document.querySelector('#content3');
const contents = [content1, content2, content3];

const object = {
  'button1' : content1,
  'button2': content2,
  'button3': content3
}


const updateContent = (event) => {
  const targetButton = event.target;
  const clickedButtonId = targetButton.id;

  buttons.forEach(button => button.classList.remove('smallButton_active'));
  contents.forEach(contentObj => contentObj.classList.remove('invisible'));


  const contentsToBeMadeInvisible = Object.entries(object).reduce((acc, [buttonId, contentObj]) => {
    if (buttonId === clickedButtonId) {
      return acc;
    }

    acc.push(contentObj)

    return acc;
  }, [])

  contentsToBeMadeInvisible.forEach((contentObj ) => {
    contentObj.classList.add('invisible')
  })
}

button1.addEventListener('click', updateContent)
button2.addEventListener('click', updateContent)
button3.addEventListener('click', updateContent)


