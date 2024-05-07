export const momentsTmpl = (moments) => `
<div>
  <img src="${moments.picture}" />

  <h3>${moments.title}</h3>

  ${moments.pictures
    .map((picture) => `<img src="${picture.picture}" />`)
    .join("")}
</div>
`;
