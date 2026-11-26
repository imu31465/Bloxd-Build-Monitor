export const id = 138;
export const ids = [138];
export const modules = {
  7095: (VV, eV, xV) => {
    xV.d(eV, {
      WorldCodeAiChatGptNotice: () => wV,
      WorldCodeAiDeepSeekNotice: () => nV,
      e: () => yV,
      i: () => QV,
      l: () => pV
    });
    var JV = xV(1220),
      YV = xV(7101),
      UV = xV(1321);
    const yV = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      pV = "https://openai.com/policies/terms-of-use/",
      QV = "https://openai.com/policies/privacy-policy/";

    function nV() {
      const {
        t: VV
      } = (0, JV.A)();
      return (0, UV.jsxs)(UV.Fragment, {
        children: [VV("superBotXd:deepSeekNotice"), " ", (0, UV.jsx)(YV.d, {
          href: yV,
          children: VV("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function wV() {
      const {
        t: VV
      } = (0, JV.A)();
      return (0, UV.jsxs)(UV.Fragment, {
        children: [VV("aiHelperChatGpt:notice"), " ", (0, UV.jsx)(YV.d, {
          href: pV,
          children: VV("aiHelperChatGpt:terms")
        }), " ", (0, UV.jsx)(YV.d, {
          href: QV,
          children: VV("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);