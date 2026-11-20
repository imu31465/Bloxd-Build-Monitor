export const id = 347;
export const ids = [347];
export const modules = {
  60277: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      WorldCodeAiDeepSeekNotice: () => Eb,
      deepSeekPrivacyPolicyUrl: () => Tb
    });
    var Ab = Ub(1134),
      Mb = Ub(1023);
    const Tb = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function Eb() {
      const {
        t: bb
      } = (0, Ab.A)();
      return (0, Mb.jsxs)(Mb.Fragment, {
        children: [bb("superBotXd:deepSeekNotice"), " ", (0, Mb.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: Tb,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [bb("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Mb.jsx)("span", {
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