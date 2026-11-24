export const id = 125;
export const ids = [125];
export const modules = {
  6589: (TT, UT, mT) => {
    mT.d(UT, {
      WorldCodeAiChatGptNotice: () => jT,
      WorldCodeAiDeepSeekNotice: () => kT,
      b: () => gT,
      d: () => HT,
      f: () => nT
    });
    var WT = mT(1288),
      zT = mT(6591),
      MT = mT(1188);
    const gT = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      nT = "https://openai.com/policies/terms-of-use/",
      HT = "https://openai.com/policies/privacy-policy/";

    function kT() {
      const {
        t: TT
      } = (0, WT.z)();
      return (0, MT.jsxs)(MT.Fragment, {
        children: [TT("superBotXd:deepSeekNotice"), " ", (0, MT.jsx)(zT.b, {
          href: gT,
          children: TT("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function jT() {
      const {
        t: TT
      } = (0, WT.z)();
      return (0, MT.jsxs)(MT.Fragment, {
        children: [TT("aiHelperChatGpt:notice"), " ", (0, MT.jsx)(zT.b, {
          href: nT,
          children: TT("aiHelperChatGpt:terms")
        }), " ", (0, MT.jsx)(zT.b, {
          href: HT,
          children: TT("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);