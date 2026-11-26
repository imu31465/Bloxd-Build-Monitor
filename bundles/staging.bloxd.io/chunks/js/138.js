export const id = 138;
export const ids = [138];
export const modules = {
  7062: (BB, OB, GB) => {
    GB.d(OB, {
      WorldCodeAiChatGptNotice: () => MB,
      WorldCodeAiDeepSeekNotice: () => JB,
      e: () => oB,
      h: () => yB,
      j: () => jB
    });
    var YB = GB(1175),
      DB = GB(7067),
      QB = GB(1282);
    const oB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      jB = "https://openai.com/policies/terms-of-use/",
      yB = "https://openai.com/policies/privacy-policy/";

    function JB() {
      const {
        t: BB
      } = (0, YB.H)();
      return (0, QB.jsxs)(QB.Fragment, {
        children: [BB("superBotXd:deepSeekNotice"), " ", (0, QB.jsx)(DB.c, {
          href: oB,
          children: BB("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function MB() {
      const {
        t: BB
      } = (0, YB.H)();
      return (0, QB.jsxs)(QB.Fragment, {
        children: [BB("aiHelperChatGpt:notice"), " ", (0, QB.jsx)(DB.c, {
          href: jB,
          children: BB("aiHelperChatGpt:terms")
        }), " ", (0, QB.jsx)(DB.c, {
          href: yB,
          children: BB("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);