## SEED Project

SEED Project는 탬플릿 프로젝트로, 최소한의 개발 가이드 역할을 할 프로젝트입니다.

### 디렉토리 구조

```
public
├─locales (번역파일)
src
├─common
│ ├── config
│ ├── layout
│ └── ui (외부 데이터 의존성이 없는 재사용 UI)
│     ├── counter
│     └── modal (portal)
├─feature (상태에 따른 UI, config, queryKey, api, useQuery, recoil)
│ ├── auth
│ ├── cart
│ └── locales
├─pages
└─services (storage, format 등 util 함수)
  └── format (number, date ...)
```
### 프로젝트 전체 구조
<img src="https://user-images.githubusercontent.com/75013112/207221806-e0862e03-47c3-4738-98eb-f19efe412d1d.png" width=80%/>

- queryKey: 전역에서 key를 공유+업데이트+캐싱하는 서버 데이터
- atom: 전역에서 key를 공유+업데이트+캐싱하는 클라이언트 데이터
- intl: 번역 파일에 의해 언어를 변환해주는 intl-wrapper
- route: 프로젝트 내 경로, page
- feature: 하나의 위젯 역할을 하는 도메인 단위의 기능
- ui: 공통으로 사용하는 ui와 feature 내부에서 데이터에 맞게 사용하는 ui
- Errorboundary와 Suspense 무엇을 보여줄 것인지 결과에만 집중하기 위해 로딩과 에러처리를 위임한 컴포넌트

### Feature
- [1. 언어변경](https://github.com/songbetter/template/tree/main/src/feature/locales)
- [2. 장바구니](https://github.com/songbetter/template/tree/main/src/feature/cart)
- [3. 로그인](https://github.com/songbetter/template/tree/main/src/feature/auth)
