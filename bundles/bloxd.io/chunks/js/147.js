export const id = 147;
export const ids = [147];
export const modules = {
  7483: (dd, Od, md) => {
    md.d(Od, {
      WorldCodeAiChatGptNotice: () => Qd,
      WorldCodeAiDeepSeekNotice: () => vd,
      e: () => Xd,
      h: () => hd,
      i: () => Kd
    });
    var Wd = md(1238),
      Fd = md(7486),
      Rd = md(1341);
    const Xd = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      Kd = "https://openai.com/policies/terms-of-use/",
      hd = "https://openai.com/policies/privacy-policy/";

    function vd() {
      const {
        t: dd
      } = (0, Wd.G)();
      return (0, Rd.jsxs)(Rd.Fragment, {
        children: [dd("superBotXd:deepSeekNotice"), " ", (0, Rd.jsx)(Fd.e, {
          href: Xd,
          children: dd("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function Qd() {
      const {
        t: dd
      } = (0, Wd.G)();
      return (0, Rd.jsxs)(Rd.Fragment, {
        children: [dd("aiHelperChatGpt:notice"), " ", (0, Rd.jsx)(Fd.e, {
          href: Kd,
          children: dd("aiHelperChatGpt:terms")
        }), " ", (0, Rd.jsx)(Fd.e, {
          href: hd,
          children: dd("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);