export const id = 347;
export const ids = [347];
export const modules = {
  60341: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      WorldCodeAiDeepSeekNotice: () => Oz,
      deepSeekPrivacyPolicyUrl: () => Xz
    });
    var Fz = sz(1173),
      Wz = sz(1087);
    const Xz = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Oz() {
      const {
        t: zz
      } = (0, Fz.B)();
      return (0, Wz.jsxs)(Wz.Fragment, {
        children: [zz("superBotXd:deepSeekNotice"), " ", (0, Wz.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Xz,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [zz("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Wz.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);