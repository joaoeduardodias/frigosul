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
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
        datasets: [
          {
            data: [100, 120, 115, 134, 168, 132, 120, 115, 134, 168, 132, 150],
            backgroundColor: '#0076F5',
          },
        ],
      }}
    />
  )
}
