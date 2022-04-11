const renderList = [
  {
    title: 'Bath & Full haircut',
    description: 'For pets like seniors and puppies who need a bath & haircut',
    list: [
      'Oxygen-infused bath with shampoo, & blow dry',
      '15-minutes brushing',
      'Haircut & light dematting',
      'Nail trim',
      'Ear cleaning, hair removal & flushing',
      'Scissoring feet & pad shaving',
      'Sanitary trim',
      'Anal gland cleaning',
    ]
  },
  {
    title: 'Bath & Grooming',
    description: 'For pets like seniors and puppies who need a bath & haircut',
    list: [
      'Oxygen-infused bath with shampoo, & blow dry',
      '15-minutes brushing',
      'Haircut & light dematting',
      'Nail trim',
      'Ear cleaning, hair removal & flushing',
      'Scissoring feet & pad shaving',
      'Sanitary trim',
      'Anal gland cleaning',
    ]
  },
  {
    title: 'Skin & itch solution',
    description: 'For pets like seniors and puppies who need a bath & haircut',
    list: [
      'Oxygen-infused bath with shampoo, & blow dry',
      '15-minutes brushing',
      'Haircut & light dematting',
      'Nail trim',
      'Ear cleaning, hair removal & flushing',
      'Scissoring feet & pad shaving',
      'Sanitary trim',
      'Anal gland cleaning',
    ]
  },

]

const renderServices = document.querySelector('#render-services')

renderList.map(lista => {
  renderServices.innerHTML += `
    <li class="list-services-description">
      <h3>${lista.title}</h3>
      <p class="description">${lista.description}</p>
      <span>Service include:</span>
      <ul class="service-description">
        <li>
          testar renderização
        </li>
      </ul>
      <button class="book-now">Book now</button>
    </li>
  `
})