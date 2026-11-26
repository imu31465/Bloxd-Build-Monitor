export const id = 136;
export const ids = [136];
export const modules = {
  7123: (UU, XU, zU) => {
    zU.d(XU, {
      WorldCodeAiChatGptNotice: () => EU,
      WorldCodeAiDeepSeekNotice: () => DU,
      e: () => AU,
      h: () => oU,
      k: () => FU
    });
    var cU = zU(1193),
      yU = zU(7126),
      QU = zU(1305);
    const AU = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      FU = "https://openai.com/policies/terms-of-use/",
      oU = "https://openai.com/policies/privacy-policy/";

    function DU() {
      const {
        t: UU
      } = (0, cU.I)();
      return (0, QU.jsxs)(QU.Fragment, {
        children: [UU("superBotXd:deepSeekNotice"), " ", (0, QU.jsx)(yU.c, {
          href: AU,
          children: UU("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function EU() {
      const {
        t: UU
      } = (0, cU.I)();
      return (0, QU.jsxs)(QU.Fragment, {
        children: [UU("aiHelperChatGpt:notice"), " ", (0, QU.jsx)(yU.c, {
          href: FU,
          children: UU("aiHelperChatGpt:terms")
        }), " ", (0, QU.jsx)(yU.c, {
          href: oU,
          children: UU("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);