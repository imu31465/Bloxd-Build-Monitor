export const id = 355;
export const ids = [355];
export const modules = {
  61060: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      WorldCodeAiDeepSeekNotice: () => rD,
      deepSeekPrivacyPolicyUrl: () => KD
    });
    var pD = wD(1200),
      sD = wD(1096);
    const KD = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function rD() {
      const {
        t: DD
      } = (0, pD.E)();
      return (0, sD.jsxs)(sD.Fragment, {
        children: [DD("superBotXd:deepSeekNotice"), " ", (0, sD.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: KD,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [DD("superBotXd:deepSeekPrivacyPolicy"), " ", (0, sD.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);