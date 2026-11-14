export const id = 327;
export const ids = [327];
export const modules = {
  58923: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      WorldCodeAiDeepSeekNotice: () => hF,
      deepSeekPrivacyPolicyUrl: () => uF
    });
    var CF = SF(1046),
      AF = SF(971);
    const uF = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function hF() {
      const {
        t: FF
      } = (0, CF.B)();
      return (0, AF.jsxs)(AF.Fragment, {
        children: [FF("superBotXd:deepSeekNotice"), " ", (0, AF.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: uF,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [FF("superBotXd:deepSeekPrivacyPolicy"), " ", (0, AF.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);