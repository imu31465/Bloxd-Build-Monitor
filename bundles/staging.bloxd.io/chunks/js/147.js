export const id = 147;
export const ids = [147];
export const modules = {
  7525: (WW, iW, OW) => {
    OW.d(iW, {
      WorldCodeAiChatGptNotice: () => tW,
      WorldCodeAiDeepSeekNotice: () => wW,
      d: () => PW,
      f: () => cW,
      i: () => LW
    });
    var mW = OW(1172),
      EW = OW(7532),
      NW = OW(1283);
    const PW = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      LW = "https://openai.com/policies/terms-of-use/",
      cW = "https://openai.com/policies/privacy-policy/";

    function wW() {
      const {
        t: WW
      } = (0, mW.B)();
      return (0, NW.jsxs)(NW.Fragment, {
        children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
          href: PW,
          children: WW("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function tW() {
      const {
        t: WW
      } = (0, mW.B)();
      return (0, NW.jsxs)(NW.Fragment, {
        children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
          href: LW,
          children: WW("aiHelperChatGpt:terms")
        }), " ", (0, NW.jsx)(EW.d, {
          href: cW,
          children: WW("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);