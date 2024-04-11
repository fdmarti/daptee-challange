import { useInterfaceStore } from '../store';
export const handleAlerts = () => {
	const interfaceStore = useInterfaceStore();

	const { setMessage } = interfaceStore;
	const { message, hasMessage, messageType } = storeToRefs(interfaceStore);

	return {
		setMessage,

		message,
		hasMessage,
		messageType,
	};
};
