export const convertToDate = (date: string | undefined) => {
  if (!date) return ''

  return new Date(date).toISOString().split('T')[0]
}
