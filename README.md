# React Board

make board for React practice

### Commit message reference

+ PC: Presentational Component
+ CC: Container Component

### Report

| 일자 | 수정/문제해결/목표 로그 |
| :---: | --- |
| 180622 | **[수정]** **PostList와 Post Context분리** <br> 원래는 PostList와 Post Context로 분리하지 않고 Post Context 하나로 모든 상태를 같이 관리하려고 했는데, 강사님이 보여주신 코드를 보니 list와 view에서 쓸 수 있는 Context를 따로 나누셨다. 왜 그렇게 하셨을까 생각을 해보니 나는 어차피 post를 모두 불러오니까 그걸로 filter메소드 등을 써서 특정 id의 post를 찾으면 되지 않을까라고 생각했는데(뷰페이지는 그렇게 만들기까지 했었다.), 새 글 작성은 몰라도 글을 수정하는 페이지를 어떻게 처리할 건가 생각해보니 따로 서버에 요청을 하도록 context를 분리하는 게 더 관리하기 편할 것 같아서 수정했다.<br> **[문제해결]** **주소를 '/post, /post/write, /post/1'로 지정해 라우터 관리할 때 페이지 렌더링 문제**<br> router 사용시 '/post'(리스트) '/post/write'(새 글 작성), '/post/1'(뷰페이지) 이렇게 주소가 표시되도록 하려고 했는데, write 페이지가 렌더링 되지 않았다. 이유는 '/post/write역시 '/post/:postId' Route에 걸리기 때문이었다. '/post/write' Route에 exact를 추가하고 위로 올리니 해결되었다. 그 다음 문제는 write페이지에서 `GET https://{server}/posts/write?_expand=user 404 ()`이런식으로 404에러를 던지고 있는데, 왜 저런식으로 요청을 보내나했더니 처음에는 `<Route>`를 `<Switch>`로 둘러줬다가 exact를 쓰니까 제거해도 되지 않을까 했는데, 그렇게 되면 write일때도 걸리고 post의 params로도 걸려서 뷰페이지도 렌더링 되고 있었다. 다시 `<Switch>`로 둘러줘서 하나의 Route만 걸리도록 했더니 해결되었다.<br> **[문제해결]** **스토리북에서 테스트하는 컴포넌트에 react router의 컴포넌트 사용으로 발생하는 오류** <br><ul><li>[story book 이슈참고](https://github.com/storybooks/storybook/issues/769)</li><li>[react router docs TESTING 참고](https://reacttraining.com/react-router/web/guides/testing)</li><li>[storybook - Using Decorators](https://storybook.js.org/basics/writing-stories/#using-decorators)</li></li></ul> **[목표]** React router를 잘못 사용해 오류가 생기면 찾기 너무 어려워서 테스트 하는 방법을 찾아봐야겠다.(일단 뭔가 렌더링 되지 않는다하면 라우터를 의심해보게 되었지만;;) |
|  |  |