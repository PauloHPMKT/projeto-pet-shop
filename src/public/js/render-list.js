const serviceList = [
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


let renderList = ''

for(let service of serviceList) {

  let listServices = ''

  for(let item of service.list) {
    listServices += `<li>${item}</li>`
  }
  
  renderList += `
  <li class="list-services-description">
    <h3>${service.title}</h3>
    <p class="description">${service.description}</p>
    <span>Service include:</span>
    <ul class="service-description">
      ${listServices}
    </ul>
    <button class="book-now">Book now</button>
  </li>
  `
}

document.querySelector('#render-services').innerHTML = renderList




