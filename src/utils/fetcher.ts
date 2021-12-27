export default (url: string, body: {}) =>
  fetch(url, body).then((res: Response) => res.json());
