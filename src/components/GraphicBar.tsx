'use client'
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJs.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip)

export function GraphicBar() {
  return (
    <Bar
      data={{
        labels: [
          '2023-01',
          '2023-02',
          '2023-03',
          '2023-04',
          '2023-05',
          '2023-06',
          '2023-07',
        ],
        datasets: [
          {
            data: [100, 120, 115, 134, 168, 132, 120],
            backgroundColor: 'purple',
          },
        ],
      }}
    />
  )
}
