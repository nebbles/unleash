/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type ExportQuerySchemaAnyOfThree = {
    /** Whether to return a downloadable file */
    downloadFile?: boolean;
    /** The environment to export from */
    environment: string;
    /** Selects project to export the features from. Used when no tags or features are provided. */
    project: string;
};