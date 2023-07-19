import React from 'react';
import { StatusTag } from './StatusTag';
import { enumDemoStatus } from '@configs';
import { APP_COLORS } from '@theme';

interface IProps {
  status: enumDemoStatus;
}

export const DemoStatus: React.FC<IProps> = (props) => {
  const { status } = props;

  const genBackgroundColor = new Map([
    [enumDemoStatus.DRAFT, APP_COLORS.cyan300],
    [enumDemoStatus.NOT_ACTIVE, APP_COLORS.green600],
    [enumDemoStatus.ACTIVE, APP_COLORS.primary],
    [enumDemoStatus.END, APP_COLORS.teal300],
    [enumDemoStatus.CANCELED, APP_COLORS.red300],
    [enumDemoStatus.OVERDUE, APP_COLORS.orange600],
  ]);
  const genLabel = new Map([
    [enumDemoStatus.DRAFT, 'DRAFT'],
    [enumDemoStatus.NOT_ACTIVE, 'NOT_ACTIVE'],
    [enumDemoStatus.ACTIVE, 'ACTIVE'],
    [enumDemoStatus.END, 'END'],
    [enumDemoStatus.CANCELED, 'CANCELED'],
    [enumDemoStatus.OVERDUE, 'OVERDUE'],
  ]);
  if (!status) return <></>;
  return (
    <StatusTag label={genLabel.get(status)} backgroundColor={genBackgroundColor.get(status)} />
  );
};
