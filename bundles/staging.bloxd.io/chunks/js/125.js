export const id = 125;
export const ids = [125];
export const modules = {
  6524: (GG, bG, ZG) => {
    ZG.d(bG, {
      WorldCodeAiChatGptNotice: () => VG,
      WorldCodeAiDeepSeekNotice: () => YG,
      e: () => yG,
      g: () => UG,
      h: () => kG
    });
    var wG = ZG(1151),
      SG = ZG(6533),
      LG = ZG(1067);
    const yG = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      kG = "https://openai.com/policies/terms-of-use/",
      UG = "https://openai.com/policies/privacy-policy/";

    function YG() {
      const {
        t: GG
      } = (0, wG.w)();
      return (0, LG.jsxs)(LG.Fragment, {
        children: [GG("superBotXd:deepSeekNotice"), " ", (0, LG.jsx)(SG.d, {
          href: yG,
          children: GG("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function VG() {
      const {
        t: GG
      } = (0, wG.w)();
      return (0, LG.jsxs)(LG.Fragment, {
        children: [GG("aiHelperChatGpt:notice"), " ", (0, LG.jsx)(SG.d, {
          href: kG,
          children: GG("aiHelperChatGpt:terms")
        }), " ", (0, LG.jsx)(SG.d, {
          href: UG,
          children: GG("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);