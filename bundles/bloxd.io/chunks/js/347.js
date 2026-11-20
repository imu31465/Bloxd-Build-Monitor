export const id = 347;
export const ids = [347];
export const modules = {
  60940: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      WorldCodeAiDeepSeekNotice: () => Xk,
      deepSeekPrivacyPolicyUrl: () => ak
    });
    var Rk = Bk(1149),
      tk = Bk(1069);
    const ak = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Xk() {
      const {
        t: kk
      } = (0, Rk.x)();
      return (0, tk.jsxs)(tk.Fragment, {
        children: [kk("superBotXd:deepSeekNotice"), " ", (0, tk.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: ak,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [kk("superBotXd:deepSeekPrivacyPolicy"), " ", (0, tk.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);