# 🧑‍⚖️ 중고거래 + 실시간 채팅을 이용한 경매 서비스
<a href="http://43.203.118.59" target="_blank"><img src="https://github.com/user-attachments/assets/62576e21-f0d1-4d46-87ca-2c7222049010" width="150" height="150"></a>

<br>

## ❓ 프로젝트 소개
- 높아지는 물가로 인해 중고 거래가 활발해지는 점에 주목했습니다.
- 단순한 재판매를 넘어 경매 시스템을 도입하여 사용자 만족도를 높이고 차별화된 경험을 제공합니다.

<br>

## 💻 개발환경
- 기술 스택 : HTML, CSS, JavaScript, Node.js, MySQL
- 버전 관리 : GitHub
- 툴 : Slack, Figma
- 배포 : AWS

<br>

## 👤 팀원 소개
| 🦖 최재혁(PL) | 🐬 주승현 | 🐥 한송이 | 🦄 윤석찬 |
| ------------ | ------ | ------ | ------ |
| <a href="https://github.com/scn2930" target="_blank"><img src="https://github.com/user-attachments/assets/611de94d-0c84-47b7-b396-1a8ad2793544" width="150" height="150"></a> | <a href="https://github.com/bsyjsh88" target="_blank"><img src="https://github.com/user-attachments/assets/b4ffd7b0-08ed-4448-8914-d9072b346853" width="150" height="150"></a> | <a href="https://github.com/songyiiii" target="_blank"><img src="https://github.com/user-attachments/assets/30ad17c1-da2b-4565-ae70-0f7b5dd83195" width="150" height="150"></a> | <a href="https://github.com/YoonSeokChan98" target="_blank"><img src="https://github.com/user-attachments/assets/6f044736-e90e-4f9d-bc2f-e41cea9d8588" width="150" height="150"></a> |

<br>

## 📅 프로젝트 일정
- 전체 프로젝트 일정 : 2024-07-25 ~ 2024-08-14
- UI 설계 : 2024-07-25 ~ 2024-07-26
- 기능 구현 : 2024-07-27 ~ 2024-08-13
- 발표 및 시연 : 2024-08-14

<br>
  
## 🔗 링크
http://43.203.118.59

<br>

## 💻 구현 사항

### 메인페이지
<a><img src="https://github.com/user-attachments/assets/f06c0089-a671-4acb-a94c-50c886e5be02" width="900" alt="메인_경매예정"></a>
<a><img src="https://github.com/user-attachments/assets/b0b9ab8c-7391-4751-b85d-559f38f7749e" width="900" alt="메인_경매"></a>
<a><img src="https://github.com/user-attachments/assets/9cb94ee8-2a4b-40b6-bbe5-fd6c7d1e646d" width="900" alt="메인_중고"></a>

<br>

- 경매예정 상품과 경매상품, 중고상품을 제한된 갯수 내에서 출력

<br>

### 회원가입
<a><img src="https://github.com/user-attachments/assets/bd9f579f-3afb-47fc-9887-ddc316443021" alt="회원가입"></a>

<br>

- 이메일 형식, 비밀번호 형식, 비밀번호 일치 등의 유효성 검사

<br>

### 로그인
<a><img src="https://github.com/user-attachments/assets/6557245c-39a9-49b7-a70f-34773dce57b9" alt="로그인"></a>

<br>

- 입력한 이메일의 유무와 비밀번호를 확인하고, 성공 시 사용자 정보를 로컬 및 세션 스토리지에 저장

<br>


### 상품등록
<a><img src="https://github.com/user-attachments/assets/7126d97f-e2c7-4875-8bcb-cd158b78bd8c" alt="상품등록"></a>

<br>

- 상품 정보들은 필수 입력 항목, 경매 시작일은 경매 종료일보다 과거 날짜 
- 상품 이미지와 정보를 FormData로 서버에 전송
- AWS S3에 이미지 저장
- 데이터베이스에 상품 정보 저장

<br>

### 검색
<a><img src="https://github.com/user-attachments/assets/c9b1fedb-ca4b-42c8-97d6-a5201f9acfb9" alt="검색"></a>

<br>

- 검색한 내용을 경매상품, 중고상품 별로 검색

<br>

### 쪽지 전송
<a><img src="https://github.com/user-attachments/assets/50ee261f-8436-4902-9bbb-306fc508d74b" alt="쪽지 발송"></a>

<br>

- 중고상품 상세페이지의 1:1 문의 버튼 클릭시 상대방에게 쪽지 전송 가능
- 쪽지 데이터 데이터베이스에 저장

<br>

### 쪽지 확인 및 답장
<a><img src="https://github.com/user-attachments/assets/97427fc8-16df-40f0-a905-4046fbc4616f" alt="쪽지 확인 및 답장"></a>

<br>

- 미니 프로필에서 받은 쪽지 확인 가능
- 모달 형태로 답장 작성 후 전송 가능

<br>

### 경매 상품 확인
<a><img src="https://github.com/user-attachments/assets/c0f06851-d0bd-42db-b7c2-61fd73f153ee" alt="경매 상품"></a>

<br>

- 경매가 진행중인 상품에서 입찰하기 버튼 클릭시 경매 채팅방으로 입장 가능

<br>

### 경매 입장 및 진행
<a><img src="https://github.com/user-attachments/assets/69814f6b-5d0e-4ec7-a1ff-9db6a6467735" width="700" alt="경매 입장"></a>

<br>

- 판매자만 ‘경매 종료’ 버튼이 있고, 구매자는 입찰 화면이 있는 화면 구성
- Socket.io의 채팅을 통해 실시간으로 입찰 금액을 갱신하며, 클라이언트와 데이터베이스에 반영
- 판매자가 경매종료를 시키면 입찰가와 입찰자의 정보를 채팅창에 표시

<br>

### 경매 종료
<a><img src="https://github.com/user-attachments/assets/5ec6dc9a-72a0-405e-b3b6-c22da8fafb31" width="400" alt="경매 종료"></a>

<br>

- 경매가 종료되면 경매 채팅방에 입장 불가





