'use client';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

export interface RadarPoint {
  stage: number;
  q3Actual: number;
  q3Desired: number | null;
}

const STAGE_SHORT = {
  en: {
    1: 'Framing', 2: 'Literature', 3: 'Design', 4: 'Infrastructure', 5: 'Ethics',
    6: 'Data', 7: 'Analysis', 8: 'Writing', 9: 'Peer Review', 10: 'Dissemination',
  },
  zh: {
    1: '界定', 2: '文献', 3: '设计', 4: '工具', 5: '伦理',
    6: '采集', 7: '分析', 8: '写作', 9: '评审', 10: '传播',
  },
} as const;

function axisLabel(stage: number, locale: 'en' | 'zh'): string {
  const map = STAGE_SHORT[locale];
  const short = map[stage as keyof typeof map];
  return `Stage ${stage} / ${short}`;
}

interface ArchetypeRadarProps {
  stages: RadarPoint[];
  locale: 'en' | 'zh';
}

export default function ArchetypeRadar({ stages, locale }: ArchetypeRadarProps) {
  const data = [...stages]
    .sort((a, b) => a.stage - b.stage)
    .map(s => ({
      axis: axisLabel(s.stage, locale),
      actual: s.q3Actual,
      desired: s.q3Desired ?? 0,
    }));

  return (
    <div className="w-full h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">
          <PolarGrid stroke="#D3D1C7" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: '#4B5563', fontSize: 11 }}
          />
          <PolarRadiusAxis
            domain={[0, 100]}
            tick={false}
            axisLine={false}
            tickCount={5}
          />
          <Radar
            name="Actual"
            dataKey="actual"
            stroke="#1F4BA3"
            fill="#1F4BA3"
            fillOpacity={0.12}
            strokeWidth={2}
          />
          <Radar
            name="Desired"
            dataKey="desired"
            stroke="#D97706"
            fill="none"
            strokeWidth={2}
            strokeDasharray="5 4"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
