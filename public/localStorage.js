export const getFavoritesFromLs = () => {
  // 5.8 check the key "favorites" is present
  const getFavorites = localStorage.getItem("favorites");
  //   5.9 if present it will convert to object
  if (getFavorites) return JSON.parse(getFavorites);
  // 5.10 if not present it will return empty array
  return [];
};

// 5.2 set the selected phones in localStorage by receive the phone from phoneDetails
export const addFavorites = (phone) => {
  console.log(phone);
  //   5.6 take an empty array and push the phone
  //   const favorites = [];
  //   5.11 call the getFavoritesFromLs and set in upper favorites variables
  const favorites = getFavoritesFromLs();
  //   favorites.push(phone); this push will done conditionally upon isExist that's why commented.
  console.log(favorites);

  //   5.12 but there is problem that same item is stored multiple times. but my requirement is item will be saved for onetime if second time added it will a show message. so we use find method because we need a single item
  const isExist = favorites.find((favorite) => favorite.id === phone.id);
  console.log(isExist);
  //   if (isExist) return console.log("Items already added");
  if (isExist) return alert("Items already added");
  favorites.push(phone);
  //   5.7 convert the favorites to stringify
  localStorage.setItem("favorites", JSON.stringify(favorites));
  //   Note: But problem is when we add another phone it replace the previous one for this we have to save the both phone take getFavoritesFromLs function. which will save previous phones.
};
