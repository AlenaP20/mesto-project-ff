// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
};

function addCard(cardData) {
  const card = createCard(cardData);

  cardsContainer.append(card);
}

// @todo: Функция удаления карточки
  function deleteCard(event) {
    event.target.closest('.card').remove()
};

// @todo: Вывести карточки на страницу
initialCards.forEach(addCard);
