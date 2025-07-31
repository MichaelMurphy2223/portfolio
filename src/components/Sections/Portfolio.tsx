import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useRef, useState } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

import { Dialog } from '@headlessui/react'

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(({ item: { title, description, content } }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false)
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
        setIsOpen(true);
      }
    },
    [showOverlay],
  );

  return (
    <>
      <div
        className={classNames(
          'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
          'opacity-0 hover:opacity-80',
          showOverlay ? 'opacity-80' : 'opacity-0', 'hover:cursor-pointer',
        )}
        onClick={handleItemClick}
        ref={linkRef}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 text-white border border-1 rounded-lg transition duration-300 ease-out">
        <div className="fixed inset-0 w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel className="max-w-3xl space-y-4 bg-neutral-700 p-12">
              <Dialog.Title className="font-bold">{title}</Dialog.Title>
              {
                content ? content : <p className="text-sm text-white">{description}</p>
              }
            </Dialog.Panel>
          </div>
        </div>
      </Dialog >
    </>
  );
});
