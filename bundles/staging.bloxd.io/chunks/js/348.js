export const id = 348;
export const ids = [348];
export const modules = {
  60674: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      WorldCodeAiDeepSeekNotice: () => DQ,
      deepSeekPrivacyPolicyUrl: () => oQ
    });
    var LQ = wQ(1207),
      qQ = wQ(1107);
    const oQ = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function DQ() {
      const {
        t: QQ
      } = (0, LQ.y)();
      return (0, qQ.jsxs)(qQ.Fragment, {
        children: [QQ("superBotXd:deepSeekNotice"), " ", (0, qQ.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: oQ,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [QQ("superBotXd:deepSeekPrivacyPolicy"), " ", (0, qQ.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);