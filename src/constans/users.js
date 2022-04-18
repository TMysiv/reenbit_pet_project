import dayjs  from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
const date = dayjs().utc().format('MMMM DD, YYYY');



export const users = [
    {id:1, name:'Taras ', photo: '',lastMessage:1, messages:[{text:'hello',date:'April 18, 2022'},{text:'how are you?',date:'April 18, 2022'}]},
    {id:2, name:'Ivan Ivanov', photo:'../../images/чол2.jpg',lastMessage:5, messages:[{text:'hi',date:'April 17, 2022'}]},
    {id:3, name:'Volodymyr ', photo:'../../images/чол3.jpg',lastMessage:8, messages:[{text:'good morning',date:'April 16, 2022'},{text: 'very good',date}]},
    {id:4, name:'Katya Mudra', photo:'../../images/дів1.jpg',lastMessage:5, messages:[{text:'good evening',date:'April 15, 2022'}]},
    {id:5, name:'Olena Lisova', photo:'../../images/дів2.jpg',lastMessage:3, messages:[{text:'love',date:'April 23, 2022'}]},
    {id:6, name:'Alina Smuk', photo:'../../images/дів3.jpg',lastMessage:4, messages:[{text:'hate',date:'April 22, 2022'}]},
    {id:7, name:'Olga Bilets', photo:'../../images/дів4.jpg',lastMessage:12, messages:[{text:'dsa',date:'April 28, 2022'}]},
    {id:8, name:'Olena  ', photo:'../../images/дів5.jpg',lastMessage:2, messages:[{text:'das',date:'April 12, 2022'}]},
    {id:9, name:'Ivan Mazepa', photo:'../../images/чол4.jpg',lastMessage:20, messages:[{text:'das',date:'April 30, 2022'}]},
    {id:10,name:'Victoria ', photo:'../../images/чол5.jpg',lastMessage:6, messages:[{text:'das',date:'May 18, 2022'}]},
];


