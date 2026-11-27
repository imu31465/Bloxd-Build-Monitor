export const id = 147;
export const ids = [147];
export const modules = {
  7490: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      WorldCodeAiChatGptNotice: () => pr,
      WorldCodeAiDeepSeekNotice: () => Er,
      b: () => jr,
      c: () => fr,
      f: () => Ir
    });
    var Zr = Qr(1251),
      Wr = Qr(7494),
      ar = Qr(1338);
    const jr = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      Ir = "https://openai.com/policies/terms-of-use/",
      fr = "https://openai.com/policies/privacy-policy/";

    function Er() {
      const {
        t: rr
      } = (0, Zr.E)();
      return (0, ar.jsxs)(ar.Fragment, {
        children: [rr("superBotXd:deepSeekNotice"), " ", (0, ar.jsx)(Wr.e, {
          href: jr,
          children: rr("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function pr() {
      const {
        t: rr
      } = (0, Zr.E)();
      return (0, ar.jsxs)(ar.Fragment, {
        children: [rr("aiHelperChatGpt:notice"), " ", (0, ar.jsx)(Wr.e, {
          href: Ir,
          children: rr("aiHelperChatGpt:terms")
        }), " ", (0, ar.jsx)(Wr.e, {
          href: fr,
          children: rr("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);