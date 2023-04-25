const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			idElements: {}
		},
		actions: {

			selectElement: (element) => {

				setStore({ idElements: element })

				console.log(getStore().idElements);

			},

			addFavoritos: () => {
				const store = getStore();
				const newFavourites = store.idElements;
				if (!store.favoritos.includes(newFavourites)) {
					setStore({ favoritos: [...store.favoritos, newFavourites] });
				}
				console.log(store.favoritos);
			},
			removeFavorite: (fav) => {
				const store = getStore();
				const updatedArray = store.favoritos.filter((favorito) => favorito !== fav);
				setStore({ favoritos: updatedArray });
			},

		}
	};
};

export default getState;
