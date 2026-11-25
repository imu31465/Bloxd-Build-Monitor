export const id = 138;
export const ids = [138];
export const modules = {
  7023: (MM, rM, iM) => {
    iM.d(rM, {
      WorldCodeAiChatGptNotice: () => zM,
      WorldCodeAiDeepSeekNotice: () => QM,
      e: () => aM,
      g: () => nM,
      j: () => PM
    });
    var OM = iM(1188),
      SM = iM(7031),
      jM = iM(1303);
    const aM = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      PM = "https://openai.com/policies/terms-of-use/",
      nM = "https://openai.com/policies/privacy-policy/";

    function QM() {
      const {
        t: MM
      } = (0, OM.A)();
      return (0, jM.jsxs)(jM.Fragment, {
        children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
          href: aM,
          children: MM("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function zM() {
      const {
        t: MM
      } = (0, OM.A)();
      return (0, jM.jsxs)(jM.Fragment, {
        children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
          href: PM,
          children: MM("aiHelperChatGpt:terms")
        }), " ", (0, jM.jsx)(SM.b, {
          href: nM,
          children: MM("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);