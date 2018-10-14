//1)Все элементы label внутри таблицы. Должно быть 3 элемента.
var elem = document.getElementById('age-table').getElementsByTagName('label');
alert('label'+" : "+ elem.length);

//2)Первую ячейку таблицы (со словом " Возраст "). 

// Первый вариант
var element = document.getElementById('age-table').getElementsByTagName('td')[0];
element.style.color = 'red';

// Второй вариант (в современных браузерах можно одним запросом):
document.querySelector('#age-table td');
element.style.background = 'yellow';

// 3) Вторую форму в документе.
var form = document.getElementsByTagName('form')[1];
form.style.background = 'blue';

//  4) Форму с именем search, без использования её позиции в документе. 
document.querySelector('form[name="search"]');

//5) Элемент input в форме с именем search. Если их несколько, то нужен первый. 
document.querySelector('form[name="search"]input')

// 6. Элемент с именем info[0], без точного знания его позиции в документе. 	var input = elements[i]
document.getElementsByName("info[0]")[0];

//7. Элемент с именем info[0], внутри формы с именем search-person.
document.querySelector('form[name="search-person] [name="info[0]"]');
