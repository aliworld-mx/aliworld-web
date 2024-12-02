import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface RichTextProps {
    content: any;
}

export default function RichTextRenderer({ content }: RichTextProps) {
    return <div>{documentToReactComponents(content)}</div>;
}
