const { mount } = require("@vue/test-utils");

describe("Counter", () => {
  it("somke test to verify framework works", () => {
    expect(true).toBe(true);
    // TODO: delete me
  });

  it("Should component return 0",()=>{
    expect(mount(Counter).text()).toBe("0");

  });
});
