export const id = 125;
export const ids = [125];
export const modules = {
  6474: (BB, jB, zB) => {
    zB.d(jB, {
      WorldCodeAiChatGptNotice: () => aB,
      WorldCodeAiDeepSeekNotice: () => UB,
      e: () => IB,
      g: () => uB,
      j: () => NB
    });
    var QB = zB(1240),
      nB = zB(6479),
      dB = zB(1148);
    const IB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      NB = "https://openai.com/policies/terms-of-use/",
      uB = "https://openai.com/policies/privacy-policy/";

    function UB() {
      const {
        t: BB
      } = (0, QB.D)();
      return (0, dB.jsxs)(dB.Fragment, {
        children: [BB("superBotXd:deepSeekNotice"), " ", (0, dB.jsx)(nB.c, {
          href: IB,
          children: BB("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function aB() {
      const {
        t: BB
      } = (0, QB.D)();
      return (0, dB.jsxs)(dB.Fragment, {
        children: [BB("aiHelperChatGpt:notice"), " ", (0, dB.jsx)(nB.c, {
          href: NB,
          children: BB("aiHelperChatGpt:terms")
        }), " ", (0, dB.jsx)(nB.c, {
          href: uB,
          children: BB("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);