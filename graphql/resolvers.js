import { getWebtoons, getWebtoon, deleteWebtoon, addWebtoon } from './db';

const resolvers = {
    Query: {
        webtoon: (_, { uid }) => getWebtoon(uid),
        webtoons: (_, { limit }) => {
            return getWebtoons(limit);
        },
    },
    Mutation: {
        deleteWebtoon: (_, { uid} ) => deleteWebtoon(uid), 
        addWebtoon: (_, { title, author }) => addWebtoon(title, author)
    }
}
export default resolvers;