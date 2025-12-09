export default async function createBreif(day) {
  const div = document.createElement("div");
  const dateDiv = document.createElement("div");
  const iconDiv = document.createElement("div");
  const iconImg = document.createElement("img");
  const tempertureDiv = document.createElement("div");
  const max_tempDiv = document.createElement("div");
  const min_tempDiv = document.createElement("div");

  div.classList.add("breif_component");
  dateDiv.classList.add("breif_date");
  iconDiv.classList.add("breif_icon");
  tempertureDiv.classList.add("breif_temperture");
  max_tempDiv.classList.add("breif_max_temp");
  min_tempDiv.classList.add("breif_min_temp");
  iconImg.classList.add("breif_icon_img");

  const { datetime, tempmax, tempmin, icon } = day;
  dateDiv.textContent = datetime;
  max_tempDiv.textContent = `${tempmax}°`;
  min_tempDiv.textContent = `${tempmin}°`;
  iconDiv.append(iconImg);
  const { default: iconSrc } = await import(
    `../asset/resource/icon/${icon}.png`
  );
  iconImg.src = iconSrc;

  tempertureDiv.append(max_tempDiv, min_tempDiv);
  div.append(dateDiv, iconDiv, tempertureDiv);
  return div;
}
