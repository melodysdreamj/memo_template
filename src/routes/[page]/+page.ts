export function load(app: any) {
    const url = app.url;

    // URL 변수 추출
    const href = url.href;
    const pathname = url.pathname;
    const search = url.search;
    const searchParams = url.searchParams;
    const origin = url.origin;
    const protocol = url.protocol;
    const host = url.host;
    const hostname = url.hostname;
    const port = url.port;


    console.log(`Href: ${href}`);
    console.log(`Pathname: ${pathname}`);
    console.log(`Search: ${search}`);
    console.log(`Origin: ${origin}`);
    console.log(`Protocol: ${protocol}`);
    console.log(`Host: ${host}`);
    console.log(`Hostname: ${hostname}`);
    console.log(`Port: ${port}`);

    // 필요한 작업 해준후
    return {
        pathname: getLastPathnameFromUrl(href) ,
    };
}


function getLastPathnameFromUrl(url: string): string | null {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment.length > 0);

    return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : null;
}
