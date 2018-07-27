import { getWebtoons, getWebtoon, deleteWebtoon, addWebtoon, getSameTypeWebtoons } from './db';

const resolvers = {
    Query: {
        webtoon: (_, { uid }) => getWebtoon(uid),
        webtoons: (_, { limit }) => getWebtoons(limit),
        sameTypeWebtoons: (_, { uid }) => getSameTypeWebtoons(uid)
    },
    Mutation: {
        deleteWebtoon: (_, { uid} ) => deleteWebtoon(uid), 
        addWebtoon: (_, { title, author }) => addWebtoon(title, author)
    }
}
export default resolvers;