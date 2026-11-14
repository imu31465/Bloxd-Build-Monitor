export const id = 332;
export const ids = [332];
export const modules = {
  59120: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      WorldCodeAiDeepSeekNotice: () => uc,
      deepSeekPrivacyPolicyUrl: () => rB
    });
    var Vc = nc(1051),
      Ic = nc(957);
    const rB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function uc() {
      const {
        t: cB
      } = (0, Vc.x)();
      return (0, Ic.jsxs)(Ic.Fragment, {
        children: [cB("superBotXd:deepSeekNotice"), " ", (0, Ic.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: rB,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [cB("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Ic.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);