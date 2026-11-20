export const id = 347;
export const ids = [347];
export const modules = {
  61036: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      WorldCodeAiDeepSeekNotice: () => mu,
      deepSeekPrivacyPolicyUrl: () => Qu
    });
    var Eu = yu(1170),
      Ku = yu(1079);
    const Qu = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function mu() {
      const {
        t: uu
      } = (0, Eu.E)();
      return (0, Ku.jsxs)(Ku.Fragment, {
        children: [uu("superBotXd:deepSeekNotice"), " ", (0, Ku.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Qu,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [uu("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Ku.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);