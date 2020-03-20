import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thales/clear')
}
// -------------------------------- Mostrar o perfil na tela --------------------------------
export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thales/person')
	dispatch(storeProfile(response.data.profile) )
}

export const storeProfile = profileToSwipe => ({
	type: 'STORE_PROFILE',
	payload: {
		profileToSwipe
	}
})
//-------------------------------------------------------------------------------------------

//----------------------------------- dar o like e deslike ----------------------------------
export const chooseProfile = (id, option) => async (dispatch) => {
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thales/choose-person', {
		id: id,
		choice: option
	})
	dispatch(getProfileToSwipe())
}
//-------------------------------------------------------------------------------------------

export const getMatches = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thales/matches')
	dispatch(getMatchProfiles(response.data.matches))
}

export const getMatchProfiles = matches =>({
	type:'MATCHES',
	payload: {
		matches
	}
})