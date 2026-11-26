export const id = 138;
export const ids = [138];
export const modules = {
  7083: (HH, BH, LH) => {
    LH.d(BH, {
      WorldCodeAiChatGptNotice: () => EH,
      WorldCodeAiDeepSeekNotice: () => CH,
      c: () => hH,
      f: () => zH,
      i: () => tH
    });
    var AH = LH(1123),
      rH = LH(7088),
      SH = LH(1225);
    const hH = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      tH = "https://openai.com/policies/terms-of-use/",
      zH = "https://openai.com/policies/privacy-policy/";

    function CH() {
      const {
        t: HH
      } = (0, AH.B)();
      return (0, SH.jsxs)(SH.Fragment, {
        children: [HH("superBotXd:deepSeekNotice"), " ", (0, SH.jsx)(rH.e, {
          href: hH,
          children: HH("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function EH() {
      const {
        t: HH
      } = (0, AH.B)();
      return (0, SH.jsxs)(SH.Fragment, {
        children: [HH("aiHelperChatGpt:notice"), " ", (0, SH.jsx)(rH.e, {
          href: tH,
          children: HH("aiHelperChatGpt:terms")
        }), " ", (0, SH.jsx)(rH.e, {
          href: zH,
          children: HH("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);