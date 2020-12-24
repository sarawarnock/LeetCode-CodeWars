const arr = N => {
    if (!N) {
      return []
    }
    return [...Array(N).keys()];
}