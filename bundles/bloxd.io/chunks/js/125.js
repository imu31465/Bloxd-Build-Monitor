export const id = 125;
export const ids = [125];
export const modules = {
  6685: (BB, IB, ZB) => {
    ZB.d(IB, {
      WorldCodeAiChatGptNotice: () => nB,
      WorldCodeAiDeepSeekNotice: () => cB,
      b: () => GB,
      e: () => kB,
      f: () => vB
    });
    var TB = ZB(1248),
      JB = ZB(6694),
      oB = ZB(1153);
    const GB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      vB = "https://openai.com/policies/terms-of-use/",
      kB = "https://openai.com/policies/privacy-policy/";

    function cB() {
      const {
        t: BB
      } = (0, TB.G)();
      return (0, oB.jsxs)(oB.Fragment, {
        children: [BB("superBotXd:deepSeekNotice"), " ", (0, oB.jsx)(JB.e, {
          href: GB,
          children: BB("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function nB() {
      const {
        t: BB
      } = (0, TB.G)();
      return (0, oB.jsxs)(oB.Fragment, {
        children: [BB("aiHelperChatGpt:notice"), " ", (0, oB.jsx)(JB.e, {
          href: vB,
          children: BB("aiHelperChatGpt:terms")
        }), " ", (0, oB.jsx)(JB.e, {
          href: kB,
          children: BB("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);