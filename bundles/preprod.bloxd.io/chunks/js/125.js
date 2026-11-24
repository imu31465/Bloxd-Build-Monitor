export const id = 125;
export const ids = [125];
export const modules = {
  6660: (pp, ip, cp) => {
    cp.d(ip, {
      WorldCodeAiChatGptNotice: () => Dp,
      WorldCodeAiDeepSeekNotice: () => Yp,
      c: () => Sp,
      f: () => Lp,
      i: () => xp
    });
    var Op = cp(1201),
      op = cp(6666),
      Ip = cp(1112);
    const Sp = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      xp = "https://openai.com/policies/terms-of-use/",
      Lp = "https://openai.com/policies/privacy-policy/";

    function Yp() {
      const {
        t: pp
      } = (0, Op.H)();
      return (0, Ip.jsxs)(Ip.Fragment, {
        children: [pp("superBotXd:deepSeekNotice"), " ", (0, Ip.jsx)(op.c, {
          href: Sp,
          children: pp("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function Dp() {
      const {
        t: pp
      } = (0, Op.H)();
      return (0, Ip.jsxs)(Ip.Fragment, {
        children: [pp("aiHelperChatGpt:notice"), " ", (0, Ip.jsx)(op.c, {
          href: xp,
          children: pp("aiHelperChatGpt:terms")
        }), " ", (0, Ip.jsx)(op.c, {
          href: Lp,
          children: pp("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);