describe('Webpage tests', function() {

  it('Visits homepage', function() {
    cy.visit('http://localhost:3000')
  })

  it('finds the content "button"', function() {
    cy.visit('http://localhost:3000')

    cy.get('button').contains('Give me a task!')
  })

  it('gives you a task', function() {
    cy.visit('http://localhost:3000')

    cy.get('button').click()
    cy.contains('You should try doing the Airport challenge')
  })
})
