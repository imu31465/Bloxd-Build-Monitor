export const id = 127;
export const ids = [127];
export const modules = {
  6917: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      WorldCodeAiChatGptNotice: () => gQ,
      WorldCodeAiDeepSeekNotice: () => PQ,
      d: () => zQ,
      f: () => FQ,
      j: () => sQ
    });
    var wQ = XQ(1226),
      qQ = XQ(6923),
      TQ = XQ(1145);
    const zQ = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      sQ = "https://openai.com/policies/terms-of-use/",
      FQ = "https://openai.com/policies/privacy-policy/";

    function PQ() {
      const {
        t: QQ
      } = (0, wQ.C)();
      return (0, TQ.jsxs)(TQ.Fragment, {
        children: [QQ("superBotXd:deepSeekNotice"), " ", (0, TQ.jsx)(qQ.c, {
          href: zQ,
          children: QQ("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function gQ() {
      const {
        t: QQ
      } = (0, wQ.C)();
      return (0, TQ.jsxs)(TQ.Fragment, {
        children: [QQ("aiHelperChatGpt:notice"), " ", (0, TQ.jsx)(qQ.c, {
          href: sQ,
          children: QQ("aiHelperChatGpt:terms")
        }), " ", (0, TQ.jsx)(qQ.c, {
          href: FQ,
          children: QQ("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);