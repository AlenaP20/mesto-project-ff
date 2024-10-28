// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;

  deleteButton.addEventListener('click', deleteCard);
  cardList.append(cardElement);
};

// @todo: Функция удаления карточки
  function deleteCard(event) {
    event.target.closest('.card').remove()
};

// @todo: Вывести карточки на страницу
initialCards.forEach(addCard);
