function graduate(credentials) {
  return function (fullName) {
    console.log(fullName, credentials);
  }
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Kevin Liang');
lawSchool('Kevin Liang');
