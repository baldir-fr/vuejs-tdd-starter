const { mount } = require("@vue/test-utils");
import Counter from "@/components/Counter";

describe("Counter", () => {
  it("somke test to verify framework works", () => {
    expect(true).toBe(true);
    // TODO: delete me
  });
// Laisser le premier test tel quel
  // Ligne 16 : sur le 2eme test. Le resultat du text dans une méthode doit valoir 1
  it("Should component return 0",()=>{
    expect(mount(Counter).text()).toBe("0");
  });

  it.skip("Should component return 1",()=>{
    expect(mount(Counter).text()).toBe("1");
  });
});
