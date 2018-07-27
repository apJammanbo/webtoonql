import { getWebtoons } from './db';

const resolvers = {
    Query: {
        webtoons: () => getWebtoons(),
    }
}
export default resolvers;