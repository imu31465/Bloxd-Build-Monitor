export const id = 125;
export const ids = [125];
export const modules = {
  6732: (uu, Eu, ju) => {
    ju.d(Eu, {
      WorldCodeAiChatGptNotice: () => Cu,
      WorldCodeAiDeepSeekNotice: () => fu,
      c: () => Xu,
      d: () => qu,
      f: () => lu
    });
    var su = ju(1244),
      Uu = ju(6737),
      Zu = ju(1154);
    const Xu = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      lu = "https://openai.com/policies/terms-of-use/",
      qu = "https://openai.com/policies/privacy-policy/";

    function fu() {
      const {
        t: uu
      } = (0, su.A)();
      return (0, Zu.jsxs)(Zu.Fragment, {
        children: [uu("superBotXd:deepSeekNotice"), " ", (0, Zu.jsx)(Uu.c, {
          href: Xu,
          children: uu("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function Cu() {
      const {
        t: uu
      } = (0, su.A)();
      return (0, Zu.jsxs)(Zu.Fragment, {
        children: [uu("aiHelperChatGpt:notice"), " ", (0, Zu.jsx)(Uu.c, {
          href: lu,
          children: uu("aiHelperChatGpt:terms")
        }), " ", (0, Zu.jsx)(Uu.c, {
          href: qu,
          children: uu("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);