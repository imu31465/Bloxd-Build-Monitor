export const id = 125;
export const ids = [125];
export const modules = {
  6716: (tt, et, Vt) => {
    Vt.d(et, {
      WorldCodeAiChatGptNotice: () => Xt,
      WorldCodeAiDeepSeekNotice: () => Ht,
      d: () => mt,
      h: () => jt,
      l: () => dt
    });
    var Ot = Vt(1286),
      qt = Vt(6723),
      Dt = Vt(1188);
    const mt = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      dt = "https://openai.com/policies/terms-of-use/",
      jt = "https://openai.com/policies/privacy-policy/";

    function Ht() {
      const {
        t: tt
      } = (0, Ot.H)();
      return (0, Dt.jsxs)(Dt.Fragment, {
        children: [tt("superBotXd:deepSeekNotice"), " ", (0, Dt.jsx)(qt.b, {
          href: mt,
          children: tt("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function Xt() {
      const {
        t: tt
      } = (0, Ot.H)();
      return (0, Dt.jsxs)(Dt.Fragment, {
        children: [tt("aiHelperChatGpt:notice"), " ", (0, Dt.jsx)(qt.b, {
          href: dt,
          children: tt("aiHelperChatGpt:terms")
        }), " ", (0, Dt.jsx)(qt.b, {
          href: jt,
          children: tt("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);