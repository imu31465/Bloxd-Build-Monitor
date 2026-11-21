export const id = 348;
export const ids = [348];
export const modules = {
  60904: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      WorldCodeAiDeepSeekNotice: () => Pd,
      deepSeekPrivacyPolicyUrl: () => Wd
    });
    var pd = kd(1211),
      Nd = kd(1103);
    const Wd = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Pd() {
      const {
        t: dd
      } = (0, pd.B)();
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [dd("superBotXd:deepSeekNotice"), " ", (0, Nd.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Wd,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [dd("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Nd.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);