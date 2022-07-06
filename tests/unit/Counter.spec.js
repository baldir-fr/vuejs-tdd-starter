const { mount } = require("@vue/test-utils");
import Counter from "@/components/Counter";

describe("Counter", () => {
  it("somke test to verify framework works", () => {
    expect(true).toBe(true);
    // TODO: delete me
  });

  it("Should component return 0",()=>{
    expect(mount(Counter).text()).toBe("0");
  });

  it("Should component return 1",()=>{
    expect(mount(Counter).text()).toBe("1");
  });
});
