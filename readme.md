# webtoon graphql server

# What is graphql

apollo 팀에서의 graphql에 대한 지원
facebook에서의 사용

over-fetching
-> rest : /company/ GET
-> graqphql : only company name

under-fetching
-> rest : /company/, /service/, /user/, /notifications/
-> grqphql query {
    company {
        name
    },
    notificatios [
        {
            noti
        }
    ],
    user {
        username
    }
}

URL 존재 X
/graphql

#Setup

mkdir webtoonql
git init .
git remote add origin https://github.com/apJammanbo/webtoonql.git

nodemon 설치 : yarn global add nodemon
"start": "nodemon"

graphql-yoga : https://github.com/prismagraphql/graphql-yoga
그래프큐엘 기본설정 및 기초코드 제공 : 빠르게 그래프큐엘 서버를 개발할 수 있게해준다.

babel 설치 : yarn add babel-cli --dev
.babelrc 추가
{
    "presets": ["env", "stage-3"]
}
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

"start": "nodemon --exec babel-node index.js"

#Create GraphQL Server
- index.js
const server = new GraphQLServer({
});

server.start(() => console.log('graphql server running!'));

#Schema & Resolver
- Scheme
어떤 데이터를 받을지에 대한 부분(형식)
graphql/schema

- resolver
데이터를 어떻게 조작할지(액션)
메모리, 파일, 데이터베이스

#Graphql Playground

- Scheme 정의
name: String! -> 데이터 형식, 필수값
kim 타입, Resover 정의

type Kim {
    title: String!,
    read_count: Int!,
    type: String!,
}

webtoons 로 변경