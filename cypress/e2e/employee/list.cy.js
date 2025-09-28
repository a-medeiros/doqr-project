describe('Employee List', () => {
  context('When API returns data', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('show a list of employees', () => {
      cy.get('h1').should('have.text', 'Controle de Funcionários')
      cy.get('button').should('have.text', 'Novo Funcionário')
      cy.get('input').should('have.attr', 'placeholder', 'Buscar Funcionário...')

      cy.get('[data-cy=employees-table] tbody tr').should('have.length', 2)

      cy.contains('[data-cy=employees-table] tbody tr', 'Ana').within(() => {
        cy.contains('ana@example.com').should('exist')
        cy.contains('12345678901').should('exist')
        cy.contains('20/09/2000').should('exist')
        cy.contains('CLT').should('exist')
        cy.contains('Ativo').should('exist')
      })

      cy.contains('[data-cy=employees-table] tbody tr', 'João').within(() => {
        cy.contains('joao@example.com').should('exist')
        cy.contains('12345678901').should('exist')
        cy.contains('01/10/1980').should('exist')
        cy.contains('PJ').should('exist')
        cy.contains('Inativo').should('exist')
      })

      cy.get('[data-cy=empty-state]').should('not.exist')
    })

    it('redirects to edit page when edit button is clicked', () => {
      cy.contains('[data-cy=employees-table] tbody tr', 'Ana').within(() => {
        cy.get('[data-cy=edit-employee-button]').click()
      })

      cy.url().should('include', '/employee/edit/1')
    })

    it('redirects to correct edit page for different employees', () => {
      cy.contains('[data-cy=employees-table] tbody tr', 'João').within(() => {
        cy.get('[data-cy=edit-employee-button]').click()
      })

      cy.url().should('include', '/employee/edit/2')
    })
  })
})
