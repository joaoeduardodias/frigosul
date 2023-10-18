export function formatNumberPhone(number: string): string {
  const numberClear = number.replace(/\D/g, '')

  if (numberClear.length < 10) {
    return 'Invalid number phone'
  }

  const numberFormatted = `(${numberClear.slice(0, 2)}) ${numberClear.slice(
    2,
    7,
  )}-${numberClear.slice(7)}`

  return numberFormatted
}
