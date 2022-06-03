import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
    event.locals.user = jwt ? JSON.parse(jwt) : null;
    return await resolve(event);
}

export function getSession(event) {
    return event.locals.user ? {
        user: {
            // only include properties needed client-side —
            // exclude anything else attached to the user
            // like access tokens etc
            name: event.locals.user.name,
            email: event.locals.user.email,
            avatar: event.locals.user.avatar
        }
    } : {};
}