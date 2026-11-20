export const id = 348;
export const ids = [348];
export const modules = {
  61156: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      WorldCodeAiDeepSeekNotice: () => mq,
      deepSeekPrivacyPolicyUrl: () => Oq
    });
    var Yq = gq(1183),
      lq = gq(1070);
    const Oq = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function mq() {
      const {
        t: qq
      } = (0, Yq.v)();
      return (0, lq.jsxs)(lq.Fragment, {
        children: [qq("superBotXd:deepSeekNotice"), " ", (0, lq.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Oq,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [qq("superBotXd:deepSeekPrivacyPolicy"), " ", (0, lq.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);