const { musicians, dontPlays, plays } = require("../_data.json");
const createMessage = require("../src/createMessage");

describe("Tests the createMessage function", () => {
  it("should return a string", () => {
    const message = createMessage();
    expect(typeof message).toBe("string");
  });
  it("should contain a musician", () => {
    const message = createMessage();
    expect(musicians.some((musician) => message.indexOf(musician) >= 0)).toBe(
      true
    );
  });
  it("should contain something not to play", () => {
    const message = createMessage();
    expect(dontPlays.some((dontPlay) => message.indexOf(dontPlay) >= 0)).toBe(
      true
    );
  });
  it("should contain something to play", () => {
    const message = createMessage();
    expect(plays.some((play) => message.indexOf(play) >= 0)).toBe(true);
  });
});
