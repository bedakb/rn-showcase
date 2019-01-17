import { NativeModules } from 'react-native';

const { RNWebtrekk } = NativeModules;

export default {
    ...RNWebtrekk,
    getVersion: () => {
        return RNWebtrekk.getVersion()
            .catch(error => console.error(error));
    },
    getEverId: () => {
        return RNWebtrekk.getEverId()
            .catch(error => console.error(error))
    },
    addTrackingParameter: (parameter, index, value) => {
        return RNWebtrekk.addTrackingParameter(parameter, index, value)
            .catch(error => console.error(error));
    }
}