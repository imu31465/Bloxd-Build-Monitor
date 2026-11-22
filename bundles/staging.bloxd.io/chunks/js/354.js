export const id = 354;
export const ids = [354];
export const modules = {
  60701: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      WorldCodeAiDeepSeekNotice: () => bk,
      deepSeekPrivacyPolicyUrl: () => Sk
    });
    var Dk = ik(1172),
      fk = ik(1066);
    const Sk = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function bk() {
      const {
        t: kk
      } = (0, Dk.D)();
      return (0, fk.jsxs)(fk.Fragment, {
        children: [kk("superBotXd:deepSeekNotice"), " ", (0, fk.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Sk,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [kk("superBotXd:deepSeekPrivacyPolicy"), " ", (0, fk.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);