describe('API Testing with GoRest', () => {
  const userData = {
    name: "Budi Test",
    gender: "male",
    email: `budi${Date.now()}@mail.com`, // email unik setiap tes
    status: "active"
  };

  const updatedData = {
    name: "Budi Update",
    gender: "male",
    email: `budi_update${Date.now()}@mail.com`,
    status: "active"
  };

  it('GET /users - should return list of users', () => {
    cy.getUsers();
  });

  it('POST /users - should create a new user', () => {
    cy.createUser(userData);
  });

  it('PUT /users/:id - should update the created user', () => {
    cy.updateUser(updatedData);
  });

  it('DELETE /users/:id - should delete the user', () => {
    cy.deleteUser();
  });
});
