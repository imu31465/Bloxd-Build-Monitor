export const id = 355;
export const ids = [355];
export const modules = {
  61361: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      WorldCodeAiDeepSeekNotice: () => xm,
      deepSeekPrivacyPolicyUrl: () => am
    });
    var hm = fm(1208),
      Am = fm(1135);
    const am = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function xm() {
      const {
        t: mm
      } = (0, hm.A)();
      return (0, Am.jsxs)(Am.Fragment, {
        children: [mm("superBotXd:deepSeekNotice"), " ", (0, Am.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: am,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [mm("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Am.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);