export const id = 138;
export const ids = [138];
export const modules = {
  7160: (ee, ie, He) => {
    He.d(ie, {
      WorldCodeAiChatGptNotice: () => oe,
      WorldCodeAiDeepSeekNotice: () => Je,
      b: () => Ke,
      f: () => Fe,
      h: () => Ue
    });
    var ye = He(1127),
      be = He(7169),
      Me = He(1228);
    const Ke = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      Ue = "https://openai.com/policies/terms-of-use/",
      Fe = "https://openai.com/policies/privacy-policy/";

    function Je() {
      const {
        t: ee
      } = (0, ye.v)();
      return (0, Me.jsxs)(Me.Fragment, {
        children: [ee("superBotXd:deepSeekNotice"), " ", (0, Me.jsx)(be.b, {
          href: Ke,
          children: ee("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function oe() {
      const {
        t: ee
      } = (0, ye.v)();
      return (0, Me.jsxs)(Me.Fragment, {
        children: [ee("aiHelperChatGpt:notice"), " ", (0, Me.jsx)(be.b, {
          href: Ue,
          children: ee("aiHelperChatGpt:terms")
        }), " ", (0, Me.jsx)(be.b, {
          href: Fe,
          children: ee("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);