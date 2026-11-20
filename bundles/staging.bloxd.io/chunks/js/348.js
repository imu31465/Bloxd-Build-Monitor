export const id = 348;
export const ids = [348];
export const modules = {
  60617: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      WorldCodeAiDeepSeekNotice: () => Ub,
      deepSeekPrivacyPolicyUrl: () => Gb
    });
    var Bb = hb(1095),
      Ob = hb(1007);
    const Gb = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Ub() {
      const {
        t: bb
      } = (0, Bb.K)();
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [bb("superBotXd:deepSeekNotice"), " ", (0, Ob.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Gb,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [bb("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Ob.jsx)("span", {
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