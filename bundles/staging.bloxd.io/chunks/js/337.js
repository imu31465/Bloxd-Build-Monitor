export const id = 337;
export const ids = [337];
export const modules = {
  59752: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      WorldCodeAiDeepSeekNotice: () => lB,
      deepSeekPrivacyPolicyUrl: () => pB
    });
    var VB = dB(1078),
      yB = dB(980);
    const pB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function lB() {
      const {
        t: BB
      } = (0, VB.z)();
      return (0, yB.jsxs)(yB.Fragment, {
        children: [BB("superBotXd:deepSeekNotice"), " ", (0, yB.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: pB,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [BB("superBotXd:deepSeekPrivacyPolicy"), " ", (0, yB.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);