Cypress.Commands.add('getUsers', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });
  
  Cypress.Commands.add('createUser', (userData) => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: Cypress.env('GOREST_TOKEN')
      },
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(userData.name);
      expect(response.body.email).to.eq(userData.email);
      Cypress.env('userId', response.body.id); // simpan ID untuk PUT & DELETE
    });
  });
  
  Cypress.Commands.add('updateUser', (updatedData) => {
    const userId = Cypress.env('userId');
    cy.request({
      method: 'PUT',
      url: `https://gorest.co.in/public/v2/users/${userId}`,
      headers: {
        Authorization: Cypress.env('GOREST_TOKEN')
      },
      body: updatedData
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedData.name);
    });
  });
  
  Cypress.Commands.add('deleteUser', () => {
    const userId = Cypress.env('userId');
    cy.request({
      method: 'DELETE',
      url: `https://gorest.co.in/public/v2/users/${userId}`,
      headers: {
        Authorization: Cypress.env('GOREST_TOKEN')
      }
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
  