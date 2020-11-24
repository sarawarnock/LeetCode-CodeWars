function rotLeft(a, d) {
    return [...a.slice(d),...a.slice(0,d)]
}