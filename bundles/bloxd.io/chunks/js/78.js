export const id = 78;
export const ids = [78];
export const modules = {
  4612: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => Pd,
      h: () => ed,
      k: () => Od,
      m: () => Zd,
      q: () => Nd,
      r: () => Wd,
      t: () => Ld,
      v: () => Qd,
      y: () => ld
    });
    const pd = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Nd(dd) {
      try {
        return decodeURIComponent(dd.slice(1))
      } catch {
        return dd.slice(1)
      }
    }

    function Wd(dd) {
      return dd.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Pd = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${pd.source}`, "g");

    function Zd(dd, Jd) {
      return 2 === dd.length ? Jd.replace(/^ (.*) $/, "$1") : Jd
    }

    function gd(dd) {
      return "" === dd.trim()
    }

    function Cd(dd) {
      const Jd = [];
      for (const kd of dd.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Jd.length > 0 && Jd[Jd.length - 1].endsWith("\\") ? Jd[Jd.length - 1] += `|${kd}` : Jd.push(kd);
      return Jd.map((dd => dd.trim().replaceAll("\\|", "|")))
    }
    const Kd = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function od(dd) {
      const Jd = [],
        kd = [{
          indent: -1,
          items: Jd
        }];
      let pd = null;
      for (const Nd of dd) {
        const dd = Nd.match(Kd);
        if (!dd) {
          pd && (pd.text += ` ${Nd.trim()}`);
          continue
        }
        const Jd = dd[1].replace(/\t/g, "  ").length;
        for (; Jd <= kd[kd.length - 1].indent;) kd.pop();
        pd = {
          text: dd[3].trim(),
          children: []
        }, kd[kd.length - 1].items.push(pd), kd.push({
          indent: Jd,
          items: pd.children
        })
      }
      return Jd
    }

    function ld(dd) {
      const Jd = dd.replace(/\r\n/g, "\n").split("\n"),
        kd = [];
      let pd = 0;
      for (; pd < Jd.length;) {
        const dd = Jd[pd];
        if (gd(dd)) {
          pd++;
          continue
        }
        const Nd = dd.match(/^\s*```\s*(\w*)\s*$/);
        if (Nd) {
          const dd = [];
          for (pd++; pd < Jd.length && !/^\s*```\s*$/.test(Jd[pd]);) dd.push(Jd[pd]), pd++;
          pd++, kd.push({
            kind: "code",
            lang: Nd[1] || "text",
            code: dd.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Pd = dd.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Pd) {
          const dd = Pd[2].trim();
          kd.push({
            kind: "heading",
            level: Pd[1].length,
            text: dd,
            anchor: Wd(dd)
          }), pd++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(dd)) {
          kd.push({
            kind: "rule"
          }), pd++;
          continue
        }
        if (dd.trim().startsWith("|") && pd + 1 < Jd.length && /^\s*\|[\s:|-]+\|\s*$/.test(Jd[pd + 1])) {
          const Nd = Cd(dd),
            Wd = [];
          for (pd += 2; pd < Jd.length && Jd[pd].trim().startsWith("|");) Wd.push(Cd(Jd[pd])), pd++;
          kd.push({
            kind: "table",
            header: Nd,
            rows: Wd
          });
          continue
        }
        if (dd.startsWith(">")) {
          const dd = [];
          for (; pd < Jd.length && Jd[pd].startsWith(">");) dd.push(Jd[pd].replace(/^>\s?/, "")), pd++;
          kd.push({
            kind: "quote",
            blocks: ld(dd.join("\n"))
          });
          continue
        }
        if (Kd.test(dd)) {
          const Nd = [],
            Wd = /^\s*\d+\./.test(dd);
          for (; pd < Jd.length && !gd(Jd[pd]) && (Kd.test(Jd[pd]) || /^\s+\S/.test(Jd[pd]));) Nd.push(Jd[pd]), pd++;
          kd.push({
            kind: "list",
            ordered: Wd,
            items: od(Nd)
          });
          continue
        }
        const Zd = [];
        for (; pd < Jd.length && !gd(Jd[pd]) && !/^\s*```/.test(Jd[pd]) && !/^#{1,6}\s/.test(Jd[pd]) && !Jd[pd].startsWith(">") && !Kd.test(Jd[pd]) && (!Jd[pd].trim().startsWith("|") || 0 !== Zd.length);) Zd.push(Jd[pd].trim()), pd++;
        0 === Zd.length && (Zd.push(Jd[pd].trim()), pd++), kd.push({
          kind: "paragraph",
          text: Zd.join(" ")
        })
      }
      return kd
    }

    function Qd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const kd = ld(dd);
      let pd = "";
      const Nd = [],
        Wd = [],
        Pd = new Map;
      for (const Cd of kd) {
        if ("heading" === Cd.kind) {
          var Zd;
          const dd = (null !== (Zd = Pd.get(Cd.anchor)) && void 0 !== Zd ? Zd : 0) + 1;
          Pd.set(Cd.anchor, dd), dd > 1 && (Cd.anchor = `${Cd.anchor}-${dd}`)
        }
        if ("heading" === Cd.kind && 1 === Cd.level && !pd) {
          pd = Cd.text;
          continue
        }
        if ("heading" === Cd.kind && Cd.level <= Jd) {
          Wd.push({
            heading: Cd,
            blocks: []
          });
          continue
        }
        const dd = Wd.at(-1);
        dd ? dd.blocks.push(Cd) : Nd.push(Cd)
      }
      const gd = dd => {
        for (;
          "rule" === (null === (Jd = dd.at(-1)) || void 0 === Jd ? void 0 : Jd.kind);) {
          var Jd;
          dd.pop()
        }
      };
      gd(Nd);
      for (const Cd of Wd) gd(Cd.blocks);
      return {
        title: pd,
        intro: Nd,
        sections: Wd
      }
    }

    function Ld(dd) {
      return [{
        heading: null,
        blocks: dd.intro
      }, ...dd.sections.map((dd => ({
        heading: dd.heading,
        blocks: dd.blocks
      })))]
    }

    function Od(dd) {
      return dd.flatMap((dd => "code" === dd.kind ? [dd] : "quote" === dd.kind ? Od(dd.blocks) : []))
    }

    function ed(dd) {
      switch (dd.kind) {
        case "heading":
        case "paragraph":
          return dd.text;
        case "code":
          return dd.code;
        case "table":
          return [dd.header, ...dd.rows].map((dd => dd.join(" "))).join(" ");
        case "list": {
          const Jd = dd => dd.map((dd => `${dd.text} ${Jd(dd.children)}`)).join(" ");
          return Jd(dd.items)
        }
        case "quote":
          return dd.blocks.map(ed).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6368: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      f: () => Pd,
      g: () => Zd
    });
    kd(6365);
    var pd = kd(56),
      Nd = kd(4612),
      Wd = kd(1103);
    const Pd = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Zd(dd, Jd) {
      return dd === Jd ? dd : `${dd} (${Jd})`
    }

    function gd(dd) {
      const Jd = [];
      let kd = 0;
      for (const pd of dd.matchAll(Pd)) {
        pd.index > kd && Jd.push(dd.slice(kd, pd.index));
        const [, Nd, Pd, gd, Cd, Kd, od] = pd;
        void 0 !== Nd ? Jd.push(Zd(Nd, Pd)) : void 0 !== gd || void 0 !== Cd ? Jd.push((0, Wd.jsx)("strong", {
          children: null !== gd && void 0 !== gd ? gd : Cd
        }, pd.index)) : void 0 !== Kd ? Jd.push((0, Wd.jsx)("em", {
          children: Kd
        }, pd.index)) : Jd.push((0, Wd.jsx)("code", {
          children: od
        }, pd.index)), kd = pd.index + pd[0].length
      }
      return kd < dd.length && Jd.push(dd.slice(kd)), Jd
    }

    function Cd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const pd = dd.map(((dd, Jd) => (0, Wd.jsxs)("li", {
        children: [gd(dd.text), dd.children.length > 0 && Cd(dd.children, !1)]
      }, Jd)));
      return Jd ? (0, Wd.jsx)("ol", {
        start: kd,
        children: pd
      }) : (0, Wd.jsx)("ul", {
        children: pd
      })
    }

    function Kd(dd, Jd) {
      switch (dd.kind) {
        case "heading":
          return dd.level <= 2 ? (0, Wd.jsx)("h3", {
            children: gd(dd.text)
          }, Jd) : (0, Wd.jsx)("h4", {
            children: gd(dd.text)
          }, Jd);
        case "paragraph":
          return (0, Wd.jsx)("p", {
            children: gd(dd.text)
          }, Jd);
        case "list":
          return (0, Wd.jsx)(pd.Fragment, {
            children: Cd(dd.items, dd.ordered)
          }, Jd);
        case "quote":
          return (0, Wd.jsx)("blockquote", {
            children: dd.blocks.map(((dd, Jd) => Kd(dd, Jd)))
          }, Jd);
        case "code":
          return (0, Wd.jsx)("pre", {
            children: (0, Wd.jsx)("code", {
              children: dd.code
            })
          }, Jd);
        case "table":
          return (0, Wd.jsxs)("table", {
            children: [(0, Wd.jsx)("thead", {
              children: (0, Wd.jsx)("tr", {
                children: dd.header.map(((dd, Jd) => (0, Wd.jsx)("th", {
                  children: gd(dd)
                }, Jd)))
              })
            }), (0, Wd.jsx)("tbody", {
              children: dd.rows.map(((dd, Jd) => (0, Wd.jsx)("tr", {
                children: dd.map(((dd, Jd) => (0, Wd.jsx)("td", {
                  children: gd(dd)
                }, Jd)))
              }, Jd)))
            })]
          }, Jd);
        case "rule":
          return (0, Wd.jsx)("hr", {}, Jd)
      }
    }

    function od(dd) {
      let {
        markdown: Jd
      } = dd, kd = 0;
      return (0, Wd.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Nd.y)(Jd).map(((dd, Jd) => {
          if ("list" !== dd.kind || !dd.ordered) return kd = 0, Kd(dd, Jd);
          const Nd = kd + 1;
          return kd += dd.items.length, (0, Wd.jsx)(pd.Fragment, {
            children: Cd(dd.items, !0, Nd)
          }, Jd)
        }))
      })
    }
  },
  6357: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id,
      f: () => Gd,
      e: () => xd,
      i: () => Ld
    });
    var pd = kd(1827),
      Nd = kd(6316),
      Wd = kd(4752);
    const Pd = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Zd(dd) {
      return (0, Wd.f)(dd, Pd, (Jd => !/^my/i.test(Jd[0]) || !/follow $/i.test(dd.slice(0, Jd.index)))).length > 0
    }
    const gd = /\byou(?:r|'re|'ll)?\b/i,
      Cd = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Kd = 2;

    function od(dd) {
      return function(dd) {
        const Jd = [];
        let kd = !1;
        for (const pd of dd.split("\n")) {
          if (/^\s*(```|~~~)/.test(pd)) {
            kd = !kd;
            continue
          }
          if (kd || /^\s*>/.test(pd)) continue;
          const dd = pd.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Jd.push(...(0, Nd.q)(dd))
        }
        return Jd
      }(dd).filter((dd => Zd(dd) || Cd.test(dd) && !gd.test(dd)))
    }
    const ld = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Qd = [{
        name: "Qwen3.6-27B",
        temperature: .7,
        reasoningEffort: "none"
      }, {
        name: "Qwen3.5-397B-A17B",
        temperature: .7,
        reasoningEffort: "none"
      }, {
        name: "Mistral-Small-3.2-24B-Instruct-2506",
        temperature: .15
      }];

    function Ld(dd) {
      const Jd = Qd.findIndex((Jd => Jd.name === dd));
      return -1 === Jd ? Qd.length : Jd
    }
    const Od = 2500,
      ed = 12e4;
    class Rd extends Error {
      constructor(dd) {
        super(`Studio AI chat ${dd}`), this.reason = dd
      }
    }

    function Id(dd, Jd) {
      const kd = new AbortController,
        pd = () => {
          kd.abort()
        },
        Nd = setTimeout(pd, dd);
      return null !== Jd && void 0 !== Jd && Jd.aborted && pd(), null === Jd || void 0 === Jd || Jd.addEventListener("abort", pd, {
        once: !0
      }), {
        signal: kd.signal,
        clear: () => {
          clearTimeout(Nd), null === Jd || void 0 === Jd || Jd.removeEventListener("abort", pd)
        }
      }
    }

    function Gd(dd, Jd, kd) {
      return new Promise(((Nd, Wd) => {
        const Pd = new AbortController,
          Zd = () => {
            Pd.abort(), Wd((0, pd.c)(kd))
          };
        if (null !== kd && void 0 !== kd && kd.aborted) return void Zd();
        null === kd || void 0 === kd || kd.addEventListener("abort", Zd, {
          once: !0
        });
        const gd = Qd.map((() => !1));
        let Cd = null;
        const Kd = Qd.map((() => !1)),
          od = Qd.map((() => !1));
        Qd.forEach(((pd, ld) => {
          const Ld = Id(ed, Pd.signal);
          qd(pd, [{
            role: "user",
            content: dd
          }], Ld.signal).then((dd => {
            Pd.signal.aborted || ("busy" === dd || "failed" === dd ? (Kd[ld] = "busy" === dd, od[ld] = !0) : null !== dd && (null === Cd || ld < Cd.rank) && (Cd = {
              rank: ld,
              answer: {
                text: dd.text,
                model: pd.name
              }
            }, Jd(Cd.answer)))
          }), (dd => {
            Pd.signal.aborted || (od[ld] = !0, console.warn(`Studio AI: ${pd.name} couldn't be reached`, dd))
          })).finally((() => {
            Ld.clear(), gd[ld] = !0, Pd.signal.aborted || (() => {
              var dd, Jd;
              const pd = null !== (dd = null === (Jd = Cd) || void 0 === Jd ? void 0 : Jd.rank) && void 0 !== dd ? dd : Qd.length;
              gd.slice(0, pd).includes(!1) || (null === kd || void 0 === kd || kd.removeEventListener("abort", Zd), Pd.abort(), null !== Cd ? Nd({
                ...Cd.answer,
                isFinal: !od.slice(0, Cd.rank).includes(!0)
              }) : Wd(new Rd(Kd.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((dd => {
            console.error("Studio AI: showing an answer failed", dd)
          }))
        }))
      }))
    }

    function vd(dd) {
      var Jd, kd;
      return "length" === (null === dd || void 0 === dd || null === (Jd = dd.choices) || void 0 === Jd || null === (kd = Jd[0]) || void 0 === kd ? void 0 : kd.finish_reason)
    }
    async function xd(dd, Jd, kd) {
      const pd = Qd.find((Jd => Jd.name === dd));
      if (void 0 === pd) return "failed";
      const Nd = Id(ed, kd);
      try {
        const dd = await qd(pd, Jd, Nd.signal);
        return null !== dd && "object" === typeof dd ? dd.isCutOff ? (console.warn(`Studio AI: ${pd.name}'s answer was cut off at the token limit`), null) : {
          text: dd.text
        } : dd
      } finally {
        Nd.clear()
      }
    }
    async function qd(dd, Jd, kd) {
      const pd = await fetch(ld, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: dd.name,
          messages: Jd,
          max_tokens: Od,
          temperature: dd.temperature,
          reasoning_effort: dd.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: kd
      });
      if (429 === pd.status) return "busy";
      if (!pd.ok) return console.warn(`Studio AI: ${dd.name} answered ${pd.status}`), "failed";
      const Nd = await pd.json().catch((() => null)),
        Wd = function(dd) {
          var Jd, kd, pd;
          const Nd = null === dd || void 0 === dd || null === (Jd = dd.choices) || void 0 === Jd || null === (kd = Jd[0]) || void 0 === kd || null === (pd = kd.message) || void 0 === pd ? void 0 : pd.content;
          if ("string" !== typeof Nd) return null;
          const Wd = Nd.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Wd ? null : Wd
        }(Nd);
      return null !== Wd && function(dd) {
        const Jd = od(dd);
        return Jd.length >= Kd || Jd.some((dd => Zd(dd)))
      }(Wd) ? (console.warn(`Studio AI: ${dd.name} thought out loud instead of answering`), "failed") : null === Wd ? null : {
        text: Wd,
        isCutOff: vd(Nd)
      }
    }
  },
  6316: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => qd,
      E: () => ed,
      G: () => Gd,
      I: () => xd,
      L: () => Id,
      M: () => od,
      O: () => Cd,
      R: () => Qd,
      d: () => Ld,
      e: () => Zd,
      h: () => Pd,
      l: () => Od,
      o: () => ld,
      q: () => Kd,
      r: () => Wd,
      u: () => Nd,
      x: () => vd
    });
    var pd = kd(4752);
    const Nd = 2e3,
      Wd = 2e4;

    function Pd(dd) {
      return dd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Zd(dd) {
      return dd.replace(/\$/g, "\\$")
    }
    const gd = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Cd(dd, Jd) {
      gd.lastIndex = Jd;
      const kd = gd.exec(dd);
      return kd.index + kd[0].length
    }

    function Kd(dd) {
      return (0, pd.u)(dd, /\s+/g, (0, pd.r)(".!?")).flatMap((dd => dd.split("\n")))
    }

    function od(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd;
      const pd = [...dd.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((dd => dd.index)),
        Nd = pd.filter((dd => dd < Jd)),
        Wd = pd.find((dd => dd >= kd));
      return [0 === Nd.length ? 0 : Nd.at(-1) + 1, void 0 === Wd ? dd.length : Wd + 1]
    }

    function ld(dd, Jd) {
      const kd = dd.charCodeAt(Jd - 1);
      return dd.slice(0, Jd > 0 && Jd < dd.length && kd >= 55296 && kd <= 56319 ? Jd - 1 : Jd)
    }

    function Qd(dd, Jd) {
      return `${Jd}${dd.replace(/\\/g,"\\\\").split(Jd).join(`\\${Jd}`)}${Jd}`
    }

    function Ld(dd) {
      return dd.charAt(0).toUpperCase() + dd.slice(1)
    }

    function Od(dd) {
      return Math.round(dd).toLocaleString("en-US")
    }

    function ed(dd) {
      return dd.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((dd => "" !== dd))
    }
    const Rd = 3;

    function Id(dd, Jd) {
      return ed(dd).filter((dd => dd.length >= Rd && !/\d/.test(dd))).map((dd => `${dd} ${Jd}`))
    }

    function Gd(dd) {
      return dd.split(/[\s:_]+/).filter((dd => "" !== dd)).map(Pd).join("[`:_\\s]+")
    }

    function vd(dd) {
      return ed(dd.split(".").pop())
    }

    function xd(dd) {
      return dd.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function qd(dd) {
      let Jd = null;
      return () => {
        const kd = Jd ??= dd();
        return kd.catch((() => {
          Jd === kd && (Jd = null)
        })), kd
      }
    }
  },
  4752: (dd, Jd, kd) => {
    function pd(dd) {
      return {
        notAfter: dd
      }
    }
    kd.d(Jd, {
      e: () => gd,
      f: () => Cd,
      i: () => Zd,
      k: () => pd,
      m: () => Nd,
      q: () => Wd,
      r: () => Pd,
      s: () => Kd,
      u: () => od
    });
    const Nd = pd("\\w$."),
      Wd = pd("\\w.,");

    function Pd(dd) {
      return Jd => gd(Jd, dd)
    }

    function Zd(dd) {
      return Jd => !dd.test(Jd.input.slice(0, Jd.index))
    }

    function gd(dd, Jd) {
      return dd.index > 0 && new RegExp(`[${Jd}]`).test(dd.input[dd.index - 1])
    }

    function Cd(dd, Jd, kd) {
      return function(dd) {
        return void 0 !== dd && "function" !== typeof dd
      }(kd) ? function(dd, Jd, kd) {
        const pd = Jd.flags.replace(/[gy]/g, ""),
          Nd = new RegExp(`[^${kd}](?:${Jd.source})`, `${pd}g`),
          Wd = [],
          Pd = kd => {
            const pd = kd.index + kd[0].length;
            return ("" === kd[0] ? ld(dd, Jd, pd) : pd) - 1
          },
          Zd = new RegExp(`(?:${Jd.source})`, `${pd}y`).exec(dd);
        if (Zd) {
          if (Wd.push(Zd), !Jd.global) return Wd;
          Nd.lastIndex = Pd(Zd)
        }
        for (let gd = Nd.exec(dd); gd; gd = Nd.exec(dd)) {
          const kd = ld(dd, Jd, gd.index) - gd.index;
          if (gd[0] = gd[0].slice(kd), gd.index += kd, Wd.push(gd), !Jd.global) break;
          Nd.lastIndex = Pd(gd)
        }
        return Wd
      }(dd, Jd, kd.notAfter) : function(dd, Jd, kd) {
        const pd = new RegExp(Jd.source, `${Jd.flags.replace(/[gy]/g,"")}g`),
          Nd = [];
        for (let Wd = pd.exec(dd); Wd; Wd = pd.exec(dd))
          if (!kd || kd(Wd)) {
            if (Nd.push(Wd), !Jd.global) break;
            "" === Wd[0] && (pd.lastIndex = ld(dd, Jd, pd.lastIndex))
          } else pd.lastIndex = ld(dd, Jd, Wd.index);
        return Nd
      }(dd, Jd, kd)
    }

    function Kd(dd, Jd, kd, pd) {
      let Nd = "",
        Wd = 0;
      for (const Pd of Cd(dd, Jd, kd)) Nd += dd.slice(Wd, Pd.index) + pd(Pd), Wd = Pd.index + Pd[0].length;
      return Nd + dd.slice(Wd)
    }

    function od(dd, Jd, kd) {
      const pd = [];
      let Nd = 0;
      for (const Wd of Cd(dd, Jd, kd)) pd.push(dd.slice(Nd, Wd.index)), Nd = Wd.index + Wd[0].length;
      return [...pd, dd.slice(Nd)]
    }

    function ld(dd, Jd, kd) {
      var pd;
      return kd + (Jd.unicode && (null !== (pd = dd.codePointAt(kd)) && void 0 !== pd ? pd : 0) > 65535 ? 2 : 1)
    }
  },
  6365: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);