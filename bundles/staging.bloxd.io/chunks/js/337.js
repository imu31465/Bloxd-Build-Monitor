export const id = 337;
export const ids = [337];
export const modules = {
  59425: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      WorldCodeAiDeepSeekNotice: () => XJ,
      deepSeekPrivacyPolicyUrl: () => eJ
    });
    var FJ = ZJ(1086),
      UJ = ZJ(990);
    const eJ = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function XJ() {
      const {
        t: JJ
      } = (0, FJ.F)();
      return (0, UJ.jsxs)(UJ.Fragment, {
        children: [JJ("superBotXd:deepSeekNotice"), " ", (0, UJ.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: eJ,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [JJ("superBotXd:deepSeekPrivacyPolicy"), " ", (0, UJ.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);