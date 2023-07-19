import { useOnClickOutside } from '@utils';
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { XCloseIcon } from './Icon';
import { Divider } from 'antd';

interface IProps {
  children?: JSX.Element | JSX.Element[] | string;
  modalClassName?: string;
  title?: string;
  closeIcon?: React.ReactNode;
  haveCloseIcon?: boolean;
  overlay?: boolean;
  innerModal?: boolean;
  borderRadius?: number;
  disabledOutsideScroll?: boolean;
  open?: boolean;
  avoidClickOutside?: boolean;
  popupPosition?: 'top' | 'center';
  modalTitlePosition?: 'left' | 'center' | 'right';
  headActionStyle?: boolean;
  isOpenFirst?: boolean; // not available before open
  onClose?: () => void;
}

export const AppModal = (props: IProps) => {
  const modal = useRef<HTMLDivElement>(null);

  //page props
  const {
    children,
    title,
    modalClassName,
    closeIcon,
    haveCloseIcon,
    overlay,
    innerModal,
    borderRadius,
    disabledOutsideScroll = true,
    onClose,
    avoidClickOutside = false,
    open,
    modalTitlePosition = 'center',
    popupPosition = 'center',
    headActionStyle,
    isOpenFirst = true,
  } = props;
  useOnClickOutside(modal, (e: any) => {
    if (!avoidClickOutside) !!onClose && onClose();
  });
  useEffect(() => {
    const page = document.documentElement;
    if (disabledOutsideScroll && open) {
      page.style.overflowY = 'hidden';
    }
    return () => {
      page.style.overflowY = 'auto';
    };
  }, []);

  if (isOpenFirst && !open) return <></>;

  return (
    <StyledModal
      className={modalClassName ? `${modalClassName} app-modal` : 'app-modal'}
      $overlay={overlay}
      $innerModal={innerModal}
      $borderRadius={borderRadius}
      $popupPosition={popupPosition}
      $modalTitlePosition={modalTitlePosition}
      $open={open}
      $isOpenFirst={open}
      $headActionStyle={headActionStyle}
    >
      <div className="content" ref={modal}>
        {haveCloseIcon && (
          <div
            className="modal__close"
            onClick={() => {
              onClose && onClose();
              const page = document.documentElement;
              page.style.overflowY = 'auto';
            }}
          >
            {closeIcon || <XCloseIcon width={16} height={16} />}
          </div>
        )}
        {title && <h2 className="modal__title">{title}</h2>}
        {headActionStyle ? (
          <>
            <Divider />
            <div className="modal-content">{children}</div>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div<{
  $overlay?: boolean;
  $innerModal?: boolean;
  $borderRadius?: number;
  $popupPosition?: 'top' | 'center';
  $modalTitlePosition?: 'left' | 'center' | 'right';
  $open?: boolean;
  $headActionStyle?: boolean;
  $isOpenFirst?: boolean;
}>`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: ${(p) => (p?.$popupPosition === 'top' ? 'flex-start' : 'center')};
  z-index: 100;
  ${(p) =>
    p.$open
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  ${(p) =>
    p.$overlay &&
    css`
      background: rgba(0, 0, 0, 0.1);
    `}
  ${(p) =>
    p.$innerModal &&
    css`
      position: absolute;
    `}
    @keyframes slideIn {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  .content {
    width: fit-content;
    height: fit-content;
    /* max-height: 90vh; */
    overflow-y: auto;
    padding: 2.6rem 3.2rem;
    justify-content: center;
    align-items: center;
    background: ${(p) => p.theme.colors.bgSection};
    box-shadow: 0.2rem 0.2rem 1rem 0.4rem rgba(208, 208, 208, 0.25);
    ${(p) =>
      p.$open
        ? css`
            margin-top: ${p?.$popupPosition === 'top' ? '2.3rem' : '0'};
          `
        : css`
            margin-top: -100vh;
          `}
    ${(p) =>
      p?.$isOpenFirst &&
      css`
        animation: 0.4s ease-out 0s 1 slideIn;
      `}
    position: relative;
    min-width: 18rem;
    transition: all 0.4s;
    border-radius: ${(p) => (!p.$borderRadius ? '0.6rem' : `${p.$borderRadius}px`)};
    .modal__close {
      cursor: pointer;
      position: absolute;
      top: 2.6rem;
      right: 2.6rem;
      z-index: 10;
      &:hover {
        opacity: 0.6;
      }
    }

    .modal__title {
      color: ${(p) => p.theme.colors.textColor};
      font-weight: 500;
      text-align: ${(p) => p?.$modalTitlePosition};
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  ${(p) =>
    p.$headActionStyle &&
    css`
      .modal-content {
        padding: 0.3rem 0rem;
        max-height: 80vh;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background-color: #fafafa;
        }
        &::-webkit-scrollbar {
          cursor: pointer;
          width: 5px;
          background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 12px;
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
          background-color: #c7c7c7;
        }
      }
    `}
`;
