type Word = {
    word: string;
    def: string;
};

type Words = Word[];

class Dict {
    public dict: Word[];
    constructor(dict: Word[]) {
        this.dict = dict;
    }

    // 단어를 추가함
    public add(item: Word): Word[] {
        this.dict.push(item);
        return this.dict;
    }

    // 단어의 정의를 리턴함
    public get(item: Word): string {
        return item.def;
    }

    // 단어를 삭제함
    public delete(item: Word): Word[] {
        const deletedDict = this.dict.filter((e) => e.word !== item.word);
        this.dict = deletedDict;
        return this.dict;
    }

    // 단어를 업데이트함
    public update(item: Word): Word[] {
        const updateDict = this.dict.map((origin) => {
            return origin.word === item.word ? item : origin;
        });

        if (!updateDict) throw new Error();

        this.dict = updateDict;
        return this.dict;
    }

    // dictionary의 단어를 모두 프린트함
    public showAll() {
        this.dict.map((item) => {
            if (!item) {
                console.log(item);
            }
        });
        return;
    }

    // dict 단어들의 총 count를 리턴함
    public count(): number {
        return this.dict.length;
    }
}

const ORIGIN_ITEM: Word = { word: "water", def: "물" };
const NEW_ITEM: Word = { word: "fire", def: "불" };
const UPDATE_ITEM: Word = { word: "nomad", def: "노마드" };

const nomadDict = new Dict([
    { word: "nomad", def: "coder" },
    { word: "water", def: "물" }
]);

console.log(nomadDict.add(NEW_ITEM));
console.log(nomadDict.get(ORIGIN_ITEM));
console.log(nomadDict.delete(ORIGIN_ITEM));
console.log(nomadDict.update(UPDATE_ITEM));
console.log(nomadDict.showAll());
console.log(nomadDict.count());
