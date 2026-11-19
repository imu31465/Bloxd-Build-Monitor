export const id = 347;
export const ids = [347];
export const modules = {
  60419: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      WorldCodeAiDeepSeekNotice: () => fD,
      deepSeekPrivacyPolicyUrl: () => iD
    });
    var ID = cD(1192),
      pD = cD(1093);
    const iD = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function fD() {
      const {
        t: DD
      } = (0, ID.F)();
      return (0, pD.jsxs)(pD.Fragment, {
        children: [DD("superBotXd:deepSeekNotice"), " ", (0, pD.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: iD,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [DD("superBotXd:deepSeekPrivacyPolicy"), " ", (0, pD.jsx)("span", {
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