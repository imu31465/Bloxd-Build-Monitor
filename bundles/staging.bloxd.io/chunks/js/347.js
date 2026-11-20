export const id = 347;
export const ids = [347];
export const modules = {
  60559: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      WorldCodeAiDeepSeekNotice: () => PU,
      deepSeekPrivacyPolicyUrl: () => EU
    });
    var tU = gU(1181),
      pU = gU(1090);
    const EU = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function PU() {
      const {
        t: UU
      } = (0, tU.B)();
      return (0, pU.jsxs)(pU.Fragment, {
        children: [UU("superBotXd:deepSeekNotice"), " ", (0, pU.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: EU,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [UU("superBotXd:deepSeekPrivacyPolicy"), " ", (0, pU.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);