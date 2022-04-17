import dayjs  from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
const date = dayjs().utc().format('MMMM DD, YYYY');

export const urls = '../../images/чол1.jpg';

export const users = [
    {id:1, name:'Taras ', photo: 'чол1.jpg', messages:[{text:'hello',date},{text:'how are you?',date}]},
    {id:2, name:'Ivan Ivanov', photo:'../../images/чол2.jpg', messages:[{text:'hi',date}]},
    {id:3, name:'Volodymyr ', photo:'../../images/чол3.jpg', messages:[{text:'good morning',date}]},
    {id:4, name:'Katya Mudra', photo:'../../images/дів1.jpg', messages:[{text:'good evening',date}]},
    {id:5, name:'Olena Lisova', photo:'../../images/дів2.jpg', messages:[{text:'love',date}]},
    {id:6, name:'Alina Smuk', photo:'../../images/дів3.jpg', messages:[{text:'hate',date}]},
    {id:7, name:'Olga Bilets', photo:'../../images/дів4.jpg', messages:[{text:'',date}]},
    {id:8, name:'Olena  ', photo:'../../images/дів5.jpg', messages:[{text:'',date}]},
    {id:9, name:'Ivan Mazepa', photo:'../../images/чол4.jpg', messages:[{text:'',date}]},
    {id:10,name:'Victoria ', photo:'../../images/чол5.jpg', messages:[{text:'',date}]},
];


