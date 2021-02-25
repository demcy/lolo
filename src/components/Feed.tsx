import React from 'react';
import { FeedApi } from '../services/FeedApi';

export default class User extends React.Component {
    async componentDidMount() {

        //let xhr = new XMLHttpRequest();
        
        //xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss')
        //xhr.withCredentials = true;
        //xhr.open("GET", "https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss", true)
        //xhr.setRequestHeader('Access-Control-Allow-Origin','http://localhost:3000/');
        

        // try {
        //     xhr.send();
        //     if (xhr.status != 200) {
        //       alert(`Error ${xhr.status}: ${xhr.statusText}`);
        //     } else {
        //       alert(xhr.response);
        //     }
        //   } catch(err) { // instead of onerror
        //     alert("Request failed");
        //   }
        
        //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // xhr.onreadystatechange = function(e) {
        //     if (xhr.readyState === 4) console.log("got result: ", xhr.responseText);
        //   };
        //xhr.send();
        // xhr.onload = function() {
        //     if (xhr.status !== 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        //       alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        //     } else { // если всё прошло гладко, выводим результат
        //       alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        //     }
        //   };

        const RSS_URL = 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss';

//         fetch(RSS_URL)
// .then(x => console.log(x.text()))


        fetch(RSS_URL, {mode:'no-cors'})
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => console.log(data))

        // const data = await FeedApi.getAll();
        // console.log(data)

        

    }
    render() {
        return (
            <p>Feed</p>
        )
    }
}