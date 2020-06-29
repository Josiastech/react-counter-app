import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../base/05-funciones";

describe('05-fuincioens', () => {
  test('getUser debe retonar un objeto', () => {
    const userTest = {
      uid: 'AVB123',
      username: 'josias'
    }

    const user = getUser()
    expect(user).toEqual(userTest);
  })


  test('getUsuarioActivo con parametro', () => {
    const nombre = 'Josias';
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: 'ABC567',
      username: nombre
    });
  })


  test('getUsuarioActivo sin parametro', () => {
    const activo = getUsuarioActivo();

    expect(activo).toEqual({
      uid: 'ABC567',
      username: 'Emanuel'
    });
  })
})