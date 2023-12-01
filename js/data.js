import {getRandomInteger, getRandomArrayElement} from './util.js';
const names = ['Сергей','Иван','Кирилл','Батырхан','Егор'];

const message = ['Всё отлично!', ' В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function createComments(){
  return {
    id:getRandomInteger(0,10000000),
    avatar:`img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getRandomArrayElement(message),
    name: getRandomArrayElement(names)
  };
}

function createPhotoDescription (){
  let photoID = 0;
  return function () {
    photoID++;
    return {
      id: photoID,
      url:`photos/${photoID}.jpg`,
      description:`Фото №${photoID}`,
      likes:getRandomInteger(15,200),
      comments: Array.from({length: getRandomInteger(0,30)}, createComments)
    };
  };
}

export {createPhotoDescription};