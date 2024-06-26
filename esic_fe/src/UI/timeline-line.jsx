import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem sx={{ minHeight: '900px' }}>
        <TimelineOppositeContent color="textSecondary">
          
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ minHeight: '90px' }}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ minHeight: '90px' }}>
        <TimelineOppositeContent color="textSecondary">
          
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ minHeight: '90px' }}>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}