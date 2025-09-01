import { type Stream } from '../types/Movie';
import { XMarkIcon } from '@heroicons/react/24/solid';

type PropsType = {
  isOpen: boolean,
  streams: Stream[] | undefined,
  onClickStream: () => void
  onClose: () => void
}

export const StreamModal = ({ isOpen, streams, onClickStream, onClose } : PropsType) => {

  const classModalOpen = isOpen ? '' : 'hidden';

  return (
    <div className={`${classModalOpen} fixed inset-0 flex items-center justify-center bg-black/[.5]`}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-end pb-2">
          <XMarkIcon className='size-8 cursor-pointer' onClick={onClose} />
        </div>
        <div className="flex flex-col gap-2">
          { (streams || []).map(stream =>
            <a className={`px-4 py-2 bg-white hover:text-black font-semibold rounded ${buttonClassName(stream.name)}`}
               href={stream.link} target='_blank' onClick={onClickStream}>Assistir em {stream.name}</a>) }

        </div>
      </div>
    </div>
  )

}


function buttonClassName(streamName: string) : string {

  let classname = '';

  if (streamName === 'Netflix')
    classname = 'color-netflix';

  if (streamName === 'Disney')
    classname = 'color-disney';

  if (streamName === 'Amazon Prime' || streamName === 'Prime Video')
    classname = 'color-amazon';

  if (streamName === 'Max')
    classname = 'color-max';

  if (streamName === 'Youtube')
    classname = 'color-youtube';

  return classname;
}
