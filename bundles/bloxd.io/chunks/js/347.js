export const id = 347;
export const ids = [347];
export const modules = {
  60606: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      WorldCodeAiDeepSeekNotice: () => Tb,
      deepSeekPrivacyPolicyUrl: () => ab
    });
    var kb = sb(1197),
      Wb = sb(1087);
    const ab = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Tb() {
      const {
        t: bb
      } = (0, kb.E)();
      return (0, Wb.jsxs)(Wb.Fragment, {
        children: [bb("superBotXd:deepSeekNotice"), " ", (0, Wb.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: ab,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [bb("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Wb.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);