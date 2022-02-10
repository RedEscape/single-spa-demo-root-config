export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
}

export function nav() {
    // Навигация всегда активна
    return true;
}

export function page1(location) {
    return prefix(location, 'page1');
}

export function page2(location) {
    return prefix(location, 'page2');
}