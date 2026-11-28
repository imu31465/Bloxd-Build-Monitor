export const id = 147;
export const ids = [147];
export const modules = {
  7717: (bb, wb, Mb) => {
    Mb.d(wb, {
      WorldCodeAiChatGptNotice: () => Ib,
      WorldCodeAiDeepSeekNotice: () => Lb,
      e: () => Vb,
      h: () => lb,
      j: () => gb
    });
    var eb = Mb(1259),
      Hb = Mb(7724),
      pb = Mb(1364);
    const Vb = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      gb = "https://openai.com/policies/terms-of-use/",
      lb = "https://openai.com/policies/privacy-policy/";

    function Lb() {
      const {
        t: bb
      } = (0, eb.C)();
      return (0, pb.jsxs)(pb.Fragment, {
        children: [bb("superBotXd:deepSeekNotice"), " ", (0, pb.jsx)(Hb.c, {
          href: Vb,
          children: bb("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function Ib() {
      const {
        t: bb
      } = (0, eb.C)();
      return (0, pb.jsxs)(pb.Fragment, {
        children: [bb("aiHelperChatGpt:notice"), " ", (0, pb.jsx)(Hb.c, {
          href: gb,
          children: bb("aiHelperChatGpt:terms")
        }), " ", (0, pb.jsx)(Hb.c, {
          href: lb,
          children: bb("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);