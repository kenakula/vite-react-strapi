import { notifications } from '@mantine/notifications';
import { ErrorMessagesTranslation } from '@shared/constants';
import { INotification } from '@shared/interfaces';

interface IHookValue {
  showNotification: (data: INotification) => void;
}

export const useNotification = (): IHookValue => {
  const showNotification = ({ title, message: rawMessage, severity }: INotification): void => {
    let color = 'green';
    const message = rawMessage ? ErrorMessagesTranslation[rawMessage] : rawMessage;

    switch (severity) {
      case 'warning':
        color = 'yellow';
        break;
      case 'danger':
        color = 'red';
        break;
      default:
        break;
    }

    notifications.show({
      title,
      message,
      withCloseButton: true,
      color,
    });
  };

  return {
    showNotification
  };
};
