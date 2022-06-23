import { ResponsiveContainer, BarChart, Bar, XAxis, LabelList } from 'recharts'
export default function BarGraph({data}) {

  return (
    <ResponsiveContainer width="100%" height="30%">
      <BarChart width={350} height={100} data={data}>
        <XAxis dataKey="name" />
        <Bar dataKey="uv" fill="#8884d8" isAnimationActive={false}>
          <LabelList dataKey="uv" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
