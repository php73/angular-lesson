import { ToastPosition } from "./toast-position.model";

export interface Toast {
    type: string|'default'|'success'|'danger'|'warning'|'info'|'primary';
    text: string;
    position: ToastPosition;
    title?: string;
    timeout?: number;
    hideClose?: boolean;
}