


export function createPageUrl(pageName: string) {
    const key = pageName.toLowerCase().replace(/[\s_-]/g, '');
    const overrides: Record<string, string> = {
        retailhub: '/catalog/retail-hub',
    };
    if (overrides[key]) {
        return overrides[key];
    }
    return '/' + pageName.toLowerCase().replace(/ /g, '-');
}