const github: unknown = 'https://github.com';
const google: unknown = 'https://google.com';

const bookmarks: string[] = [];

bookmarks.push(github as string);
bookmarks.push(<string>google);

console.log(bookmarks);
