export const id = 355;
export const ids = [355];
export const modules = {
  61302: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      WorldCodeAiDeepSeekNotice: () => yk,
      deepSeekPrivacyPolicyUrl: () => ik
    });
    var Xk = Ik(1179),
      Tk = Ik(1096);
    const ik = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function yk() {
      const {
        t: kk
      } = (0, Xk.y)();
      return (0, Tk.jsxs)(Tk.Fragment, {
        children: [kk("superBotXd:deepSeekNotice"), " ", (0, Tk.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: ik,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [kk("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Tk.jsx)("span", {
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