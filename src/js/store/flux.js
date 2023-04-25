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
				const newFavourites = store.idElements
				setStore({ favoritos: [...store.favoritos, newFavourites] })

				console.log(store.favoritos);

			}

		}
	};
};

export default getState;
