export const id = 355;
export const ids = [355];
export const modules = {
  61356: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      WorldCodeAiDeepSeekNotice: () => xS,
      deepSeekPrivacyPolicyUrl: () => XS
    });
    var tS = gS(1281),
      bS = gS(1181);
    const XS = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function xS() {
      const {
        t: SS
      } = (0, tS.F)();
      return (0, bS.jsxs)(bS.Fragment, {
        children: [SS("superBotXd:deepSeekNotice"), " ", (0, bS.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: XS,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [SS("superBotXd:deepSeekPrivacyPolicy"), " ", (0, bS.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);