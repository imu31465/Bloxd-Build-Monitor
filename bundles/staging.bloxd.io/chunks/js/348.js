export const id = 348;
export const ids = [348];
export const modules = {
  60607: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      WorldCodeAiDeepSeekNotice: () => gv,
      deepSeekPrivacyPolicyUrl: () => ev
    });
    var hv = Pv(1175),
      Sv = Pv(1082);
    const ev = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function gv() {
      const {
        t: vv
      } = (0, hv.x)();
      return (0, Sv.jsxs)(Sv.Fragment, {
        children: [vv("superBotXd:deepSeekNotice"), " ", (0, Sv.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: ev,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [vv("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Sv.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);