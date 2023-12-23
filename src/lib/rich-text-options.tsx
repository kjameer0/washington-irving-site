import { Options } from '@contentful/rich-text-react-renderer';
import { INLINES, Inline } from '@contentful/rich-text-types';
import { ReactNode } from 'react';


export const richTextLinkOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }: Inline, children: ReactNode) => (
      <a href={data.uri} target={`'_blank'`} rel={`'noopener noreferrer'`}>
        {children}
      </a>
    ),
  },
} as Options;
