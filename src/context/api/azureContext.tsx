import createDataContext from '../CreateDataContext';

const nullFunction = () => {};

const DEFAULT_KEY = "NULL";
const DEFAULT_REGION = "NULL";

enum AZURE_STATUS {
    "CORRECT",
    "PENDING",
    "NULL"
}

const azureReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_AZURE_OPTIONS':
        return {...state, ...action.payload};
    case 'CHANGE_AZURE_STATUS':
        return {...state, ...action.payload};
    default:
      return state;
  }
};

const saveAzureOptions = (dispatch) => {
    return (azureKey: string, azureRegion: string) => {
        if (azureKey !== DEFAULT_KEY) {
            localStorage.setItem('azure_subscription_key', azureKey);
        }
        if (azureRegion !== DEFAULT_REGION) {
            localStorage.setItem('azure_region', azureRegion);
        }
        dispatch({type: 'SAVE_AZURE_OPTIONS', payload: {azureKey: azureKey, azureRegion: azureRegion}})
    }
}

const changeAzureStatus = (dispatch) => {
    return (status) => { 
        dispatch({type: 'CHANGE_AZURE_STATUS', payload: {azureStatus: status}});
    }
}




export const { Context, Provider } = createDataContext(
  azureReducer,
  { saveAzureOptions, changeAzureStatus },
  { azureKey: DEFAULT_KEY, azureStatus: AZURE_STATUS.NULL, azureRegion: DEFAULT_REGION}
);






