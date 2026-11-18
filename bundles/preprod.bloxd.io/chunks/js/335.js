export const id = 335;
export const ids = [335];
export const modules = {
  59724: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      WorldCodeAiDeepSeekNotice: () => Zy,
      deepSeekPrivacyPolicyUrl: () => fy
    });
    var Uy = Wy(1042),
      hy = Wy(952);
    const fy = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Zy() {
      const {
        t: yb
      } = (0, Uy.D)();
      return (0, hy.jsxs)(hy.Fragment, {
        children: [yb("superBotXd:deepSeekNotice"), " ", (0, hy.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: fy,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [yb("superBotXd:deepSeekPrivacyPolicy"), " ", (0, hy.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);