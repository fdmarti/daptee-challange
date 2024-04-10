export const useInterfaceStore = defineStore('interface', {
	state: () => ({
		hasMessage: false,
		message: '' as string,
		messageType: '' as string,
	}),

	actions: {
		setMessage(message: string, messageType?: string) {
			this.hasMessage = true;
			this.message = message;

			switch (messageType) {
				case 'error':
					this.messageType = 'red';
					break;
				case 'success':
					this.messageType = 'green';
					break;
				case 'warning':
					this.messageType = 'amber';
					break;
				default:
					this.messageType = 'teal';
					break;
			}

			setTimeout(() => {
				this.cleanMessageStatus();
			}, 3000);
		},

		cleanMessageStatus() {
			this.message = '';
			this.hasMessage = false;
			this.messageType = '';
		},
	},
});
