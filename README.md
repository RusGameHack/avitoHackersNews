### `yarn add all`

Установить все необходимые модули

### `yarn start`

Открыть проект [http://localhost:3000](http://localhost:3000) в браузере.

### `index.js`

В index.js открываем компоненты App.js, Footer.js ("/components/footer/Footer.js")

### `App.js`

В App.js используем роутинг. Из этого компонента открывается 1 из 2-х компонентов: ViewPosts ("/components/createPosts/ViewPosts.js"), Post ("/components/aboutPost/Post.js")


### `Папка components/createPosts:<br>ViewPosts.js`

В ViewPosts.js выводим блоки с новостными постами компонентом IdPosts и кнопку для перезагрузки контента(функция, обновляющая контент - ClickBtn(). В ViewPosts также обновляется контент раз в минуту через setInterval). 

### `IdPosts.js`

IdPosts возвращает компонент CreateNews, в которую передаем id поста, полученный через fetch. CreateNews вызываем через map() и передаем по очереди id, т.к. изначально у нас массив.

### `CreateNews.js`

CreateNews возвращает верстку поста, данные о посте вызываются через fetch() по ссылке, где используется id из IdPosts. 

### `Папка components/AboutPost:<br>Post.js`

В Post.js выводим блок поста компонентом CreatePost, отправляя в него id, полученный при переходе по ссылке, в которую вложен id. 

### `CreatePost.js`

CreatePost возвращает верстку поста, данные о посте вызываются через fetch() по ссылке, где используется id. После верстки вызываем компонент CreateComment, куда отправляем kids - id комментариев к посту через map().

### `CreateComment.js`

CreateComment возвращает верстку комментария, данные о комментарии вызываются через fetch() по ссылке, где используется kids из IdPosts. Для создания дерева комментариев используем кнопку ".Ccomments", при нажатии на нее вызываем функцию btn(), которая имеет 2 варианта работы: 
1) Если у блока New-comment есть дочерние элементы, он удаляет дочерние комментарии
2) Если у блока New-comment нет дочерних элементов, он вызывает CreateComment(т.е. сам себя) для создания комментариев к комментарию через map().