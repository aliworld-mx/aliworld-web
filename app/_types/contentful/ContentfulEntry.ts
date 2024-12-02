import { AssetFields } from "contentful";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentfulFields = Record<string, any>;

type ContentfulEntrySkeletonType = {
    fields: ContentfulFields;
}

export interface ContentfulEntry<EntrySkeleton extends ContentfulEntrySkeletonType = ContentfulEntrySkeletonType> {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
        contentType: {
            sys: {
                id: string;
            };
        };
    };
    fields: {
        [FieldName in keyof EntrySkeleton['fields']]: EntrySkeleton['fields'][FieldName];
    };
}

export interface ContentfulAsset extends ContentfulEntry {
    fields: AssetFields;
}