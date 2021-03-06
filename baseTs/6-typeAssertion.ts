function getCacheData(key: string): any {
    return (window as any).cache[key]
}

interface Cat {
    name: string
    run(): void
}

const tom1 = getCacheData('tom') as Cat
tom1.run()