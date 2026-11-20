export const id = 348;
export const ids = [348];
export const modules = {
  60585: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      WorldCodeAiDeepSeekNotice: () => OT,
      deepSeekPrivacyPolicyUrl: () => KT
    });
    var lT = cT(1195),
      MT = cT(1099);
    const KT = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function OT() {
      const {
        t: TT
      } = (0, lT.B)();
      return (0, MT.jsxs)(MT.Fragment, {
        children: [TT("superBotXd:deepSeekNotice"), " ", (0, MT.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: KT,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [TT("superBotXd:deepSeekPrivacyPolicy"), " ", (0, MT.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);