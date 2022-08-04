# Everything is Class!

---

-   This is a two day challenge!

-   오늘의 강의: Typescript로 블록체인 만들기: From #4.5
-   오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
-   제출기간: 48시간! 목요일 오전 6시까지
-

## Challenge goals:

classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

-   LocalStorage API
-   Geolocation API

## LocalStorage API:

Use abstract classes and generics.

Usage:

```
localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
```

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

Geolocation API:
Use overloading.

```
geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);
```

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

## 제출방법

-   오늘의 템플릿: 위의 Today's Blueprint 버튼을 클릭하세요!
-   코딩을 마치면 'Share' 를 클릭하세요.
-   https://huchu.link/ 이동하여 URL 을 단축하세요.
-   단축된 URL 을 제출하면 됩니다.
-   제출기간: 48시간! 목요일 오전 6시까지

## solution

```jsx
// LocalStorage Interface
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}
interface Items<T> {
  [key: string]: T;
}
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super();
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}

// Geolocation Interface
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};

type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}

```
