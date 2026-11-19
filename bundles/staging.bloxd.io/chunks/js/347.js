export const id = 347;
export const ids = [347];
export const modules = {
  60037: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      WorldCodeAiDeepSeekNotice: () => WT,
      deepSeekPrivacyPolicyUrl: () => kT
    });
    var iT = IT(1171),
      zT = IT(1083);
    const kT = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function WT() {
      const {
        t: TT
      } = (0, iT.t)();
      return (0, zT.jsxs)(zT.Fragment, {
        children: [TT("superBotXd:deepSeekNotice"), " ", (0, zT.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: kT,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [TT("superBotXd:deepSeekPrivacyPolicy"), " ", (0, zT.jsx)("span", {
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