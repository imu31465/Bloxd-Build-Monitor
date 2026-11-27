export const id = 147;
export const ids = [147];
export const modules = {
  7659: (RR, JR, GR) => {
    GR.d(JR, {
      WorldCodeAiChatGptNotice: () => VR,
      WorldCodeAiDeepSeekNotice: () => fR,
      c: () => ZR,
      g: () => iR,
      i: () => qR
    });
    var yR = GR(1270),
      tR = GR(7668),
      uR = GR(1378);
    const ZR = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      qR = "https://openai.com/policies/terms-of-use/",
      iR = "https://openai.com/policies/privacy-policy/";

    function fR() {
      const {
        t: RR
      } = (0, yR.A)();
      return (0, uR.jsxs)(uR.Fragment, {
        children: [RR("superBotXd:deepSeekNotice"), " ", (0, uR.jsx)(tR.e, {
          href: ZR,
          children: RR("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function VR() {
      const {
        t: RR
      } = (0, yR.A)();
      return (0, uR.jsxs)(uR.Fragment, {
        children: [RR("aiHelperChatGpt:notice"), " ", (0, uR.jsx)(tR.e, {
          href: qR,
          children: RR("aiHelperChatGpt:terms")
        }), " ", (0, uR.jsx)(tR.e, {
          href: iR,
          children: RR("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);