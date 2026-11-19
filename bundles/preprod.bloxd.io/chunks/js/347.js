export const id = 347;
export const ids = [347];
export const modules = {
  60356: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      WorldCodeAiDeepSeekNotice: () => lz,
      deepSeekPrivacyPolicyUrl: () => iz
    });
    var Ez = bz(1181),
      nz = bz(1089);
    const iz = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";

    function lz() {
      const {
        t: zz
      } = (0, Ez.F)();
      return (0, nz.jsxs)(nz.Fragment, {
        children: [zz("superBotXd:deepSeekNotice"), " ", (0, nz.jsxs)("a", {
          className: "WorldCodeAiDeepSeekPolicyLink",
          href: iz,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [zz("superBotXd:deepSeekPrivacyPolicy"), " ", (0, nz.jsx)("span", {
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