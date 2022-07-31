# Classes!

-   오늘의 강의: Typescript로 블록체인 만들기: From #4.0 to #4.1
-   오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
-   제출기간: 48시간! 일요일 오전 6시까지

## Challenge goals:

-   Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

-   add: 단어를 추가함.
-   get: 단어의 정의를 리턴함.
-   delete: 단어를 삭제함.
-   update: 단어를 업데이트 함.
-   showAll: dictionary 의 단어를 모두 프린트함.
-   count: dict 단어들의 총 count 를 리턴함.

## 제출방법

-   오늘의 템플릿: 위의 Today's Blueprint 버튼을 클릭하세요!
-   코딩을 마치면 'Share' 를 클릭하세요.
-   https://huchu.link/ 이동하여 URL 을 단축하세요.
-   단축된 URL 을 제출하면 됩니다.
-   제출기간: 48시간! 일요일 오전 6시까지
-   일요일은 휴일입니다 Yay!

## solution

```jsx
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.words[term]) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.words[term]) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((term) =>
      console.log(`${term}: ${this.words[term]}`)
    );
  }
  count() {
    return Object.keys(this.words).length;
  }
}

const dictionary = new Dict();

dictionary.add("김치", "밋있는 한국 음식");
dictionary.showAll();
console.log(dictionary.count());
dictionary.update("김치", "밋있는 한국 음식!!!");
console.log(dictionary.get("김치"));
dictionary.delete("김치");
console.log(dictionary.count());

```
