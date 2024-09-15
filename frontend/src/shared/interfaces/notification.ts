export interface INotification {
  title: string;
  message?: string;
  severity?: 'success' | 'warning' | 'danger';
}
