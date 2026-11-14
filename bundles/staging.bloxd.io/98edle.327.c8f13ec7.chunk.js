export const id = 327;
export const ids = [327];
export const modules = {
  58610: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      WorldCodeAiDeepSeekNotice: () => AW,
      deepSeekPrivacyPolicyUrl: () => zR
    });
    var wW = MW(1027),
      CW = MW(940);
    const zR = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function AW() {
      const {
        t: WW
      } = (0, wW.C)();
      return (0, CW.jsxs)(CW.Fragment, {
        children: [WW("superBotXd:deepSeekNotice"), " ", (0, CW.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: zR,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [WW("superBotXd:deepSeekPrivacyPolicy"), " ", (0, CW.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);