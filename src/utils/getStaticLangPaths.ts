export function getStaticPaths() {
    return [
        { params: { lang: "pt" }},
        { params: { lang: "en" }},
    ];
}
