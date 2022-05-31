const {numToWord} = require("./index")

describe("test if package is working", () => {
    test("all kind of scenarios", () => {
        expect(numToWord(1)).toBe("Eins")
        expect(numToWord(6)).toBe("Sechs")
        expect(numToWord(12)).toBe("Zwölf")
        expect(numToWord(15)).toBe("Fünfzehn")
        expect(numToWord(17)).toBe("Siebzehn")
        expect(numToWord(19)).toBe("Neunzehn")
        expect(numToWord(13)).toBe("Dreizehn")
        expect(numToWord(23)).toBe("Dreiundzwanzig")
        expect(numToWord(44)).toBe("Vierundvierzig")
        expect(numToWord(100)).toBe("Einhundert")
        expect(numToWord(1000)).toBe("Eintausend")
        expect(numToWord(1234)).toBe("Eintausendzweihundertvierunddreißig")
        expect(numToWord(20000)).toBe("Zwanzigtausend")
        expect(numToWord(22222)).toBe("Zweiundzwanzigtausendzweihundertzweiundzwanzig")
        expect(numToWord(123456)).toBe("Einhundertdreiundzwanzigtausendvierhundertsechsundfünfzig")
        expect(numToWord(1, {uppercase:false})).toBe("eins")
        expect(numToWord(123, {uppercase:false})).toBe("einhundertdreiundzwanzig")
        expect(numToWord(2000, {uppercase:false})).toBe("zweitausend")
        expect(numToWord(2345689, {uppercase:false})).toBe("zwei Millionen dreihundertfünfundvierzigtausendsechshundertneunundachtzig")
        expect(numToWord(12345689, {uppercase:false})).toBe("zwölf Millionen dreihundertfünfundvierzigtausendsechshundertneunundachtzig")
        expect(numToWord(44345567000)).toBe("Vierundvierzig Milliarden dreihundertfünfundvierzig Millionen fünfhundertsiebenundsechzigtausend")
        expect(numToWord(1345567000)).toBe("Eine Milliarde dreihundertfünfundvierzig Millionen fünfhundertsiebenundsechzigtausend")
        expect(numToWord(1, {indefinite_eine:true})).toBe("Eine")
        expect(numToWord(3, {indefinite_eine:true})).toBe("Drei")
        expect(numToWord(1, {indefinite_einer:true})).toBe("Einer")
        expect(numToWord(1, {indefinite_eine:true, uppercase:false})).toBe("eine")
        expect(numToWord(1, {indefinite_eine:true})).toBe("Eine")
        expect(numToWord(2, {indefinite_eine:true})).toBe("Zwei")
        expect(numToWord(1, {indefinite_ein:true})).toBe("Ein")
        expect(numToWord(900000)).toBe("Neunhunderttausend")
        expect(numToWord(100000)).toBe("Einhunderttausend")
        expect(numToWord(1112345567000)).toBe(1112345567000)
    })
})