// contiene la funcionalidad para obtener, procesar y manipular datos
export const orderDataUp = (data) => data.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});

export const orderDataDown = (data) => data.sort(function (a, b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  } else {
    return 0;
  }
});