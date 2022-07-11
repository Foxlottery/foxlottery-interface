const abbreviatedAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`
}

export default abbreviatedAddress
