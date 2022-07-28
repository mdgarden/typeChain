// Using what you have learned so far, write the call signatures for two functions:
type NomadItem = {
    <T>(arr: T[]): T;
};

type Item = <T>(arr: T[], item: T) => T[];

// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.

const last: NomadItem = (arr) => {
    return arr[-1];
};

// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
const prepend: Item = (arr, item) => {
    arr.push(item);
    return arr;
};
