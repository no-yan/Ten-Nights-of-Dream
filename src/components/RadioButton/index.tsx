import { Dispatch, SetStateAction } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ContentState } from 'draft-js';

type Content = {
  title: string;
  body: ContentState;
};
type Props = {
  contents: Content[];
  handleSelect: Dispatch<SetStateAction<Content>>;
  selected: Content;
};

export default function ArticleTab({
  contents,
  handleSelect,
  selected,
}: Props) {
  return (
    <div className="px-4 py-2 w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={handleSelect}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-1">
            {contents.map((content) => (
              <RadioGroup.Option
                key={content.title}
                value={content}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 text-gray-600 ring-offset-light-blue-300 ring-white ring-opacity-60 opacity-95'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-light-blue-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="max-h-12 text-base overflow-hidden">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold  ${
                              checked ? 'text-white' : 'text-gray-600'
                            }`}
                          >
                            {content.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-light-blue-100' : 'text-gray-800'
                            }`}
                          >
                            <span>
                              {' '}
                              {content.body
                                .getPlainText()
                                .slice(0, 200)
                                .split('　')}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
