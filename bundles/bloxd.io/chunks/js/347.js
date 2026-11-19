export const id = 347;
export const ids = [347];
export const modules = {
  60239: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      WorldCodeAiDeepSeekNotice: () => RY,
      deepSeekPrivacyPolicyUrl: () => IY
    });
    var FY = DY(1211),
      AY = DY(1125);
    const IY = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function RY() {
      const {
        t: YY
      } = (0, FY.C)();
      return (0, AY.jsxs)(AY.Fragment, {
        children: [YY("superBotXd:deepSeekNotice"), " ", (0, AY.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: IY,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [YY("superBotXd:deepSeekPrivacyPolicy"), " ", (0, AY.jsx)("span", {
            "aria-hidden": "true",
            children: "\u2197"
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);