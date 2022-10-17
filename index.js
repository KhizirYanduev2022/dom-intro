const body = document.body;
const wrapper = document.createElement('div')
const text = document.createElement('p')




const links = document.createElement('ul')
const items_1 = document.createElement('a')
const items_2 = document.createElement('a')
const items_3 = document.createElement('a')

text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
items_1.textContent = "intocode"
items_2.textContent = "Google"
items_3.textContent = "instagram"

links.append(items_1)
links.append(items_2)
links.append(items_3)
wrapper.append(text)
wrapper.append(links)
body.append(wrapper)



wrapper.style.maxWidth = '500px'
wrapper.style.margin = 'auto'
text.style.border = '2px solid red'
text.style.borderRadius = '10px'

text.style.padding = '15px'
links.style.display = 'flex'
links.style.justifyContent = 'space-between'  
links.style.maxWidth = '200px'  
links.style.margin = 'auto'


items_1.href = "https://intocode.ru/"
items_2.href = "https://www.google.ru/"
items_3.href = "https://dzen.ru/?yredirect=true"