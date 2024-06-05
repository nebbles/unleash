/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { NotificationsSchemaItemCreatedBy } from './notificationsSchemaItemCreatedBy';
import type { NotificationsSchemaItemNotificationType } from './notificationsSchemaItemNotificationType';

export type NotificationsSchemaItem = {
    /** The date and time when the notification was created */
    createdAt: string;
    createdBy: NotificationsSchemaItemCreatedBy;
    /** The id of this notification */
    id: number;
    /** The link to change request or feature flag the notification refers to */
    link: string;
    /** The actual notification message */
    message: string;
    /** The type of the notification used e.g. for the graphical hints */
    notificationType: NotificationsSchemaItemNotificationType;
    /**
     * The date and time when the notification was read or marked as read, otherwise `null`
     * @nullable
     */
    readAt: string | null;
};
