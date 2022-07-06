const { mount } = require("@vue/test-utils");
import Counter from "@/components/Counter";

describe("Counter", () => {
  it("somke test to verify framework works", () => {
    expect(true).toBe(true);
    // TODO: delete me
  });
  // Laisser le premier test tel quel
  // Ligne 16 : sur le 2eme test. Le resultat du text dans une méthode doit valoir 1
  it("Should component return 0", () => {
    const wrapper = mount(Counter);
    const countValue = wrapper.find("span");
    expect(countValue.text()).toBe("0");
  });

  it("Should button exist", () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("button");
    expect(button.text()).toBe("+");
  });

  it.skip("Should component return 1", () => {
    const wrapper = mount(Counter);
    wrapper.find("button").click();
    expect(wrapper.text()).toBe("1");
  });
});
