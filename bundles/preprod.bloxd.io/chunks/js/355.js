export const id = 355;
export const ids = [355];
export const modules = {
  60961: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      WorldCodeAiDeepSeekNotice: () => nC,
      deepSeekPrivacyPolicyUrl: () => bC
    });
    var QC = ZC(1143),
      wC = ZC(1056);
    const bC = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function nC() {
      const {
        t: CC
      } = (0, QC.y)();
      return (0, wC.jsxs)(wC.Fragment, {
        children: [CC("superBotXd:deepSeekNotice"), " ", (0, wC.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: bC,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [CC("superBotXd:deepSeekPrivacyPolicy"), " ", (0, wC.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);