export const id = 96;
export const ids = [96];
export const modules = {
  5509: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      c: () => Xd,
      e: () => yd,
      h: () => Hd,
      k: () => Kd,
      l: () => Fd,
      m: () => Rd,
      q: () => qd,
      r: () => Nd,
      s: () => od
    });
    const Wd = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Fd(dd) {
      try {
        return decodeURIComponent(dd.slice(1))
      } catch {
        return dd.slice(1)
      }
    }

    function Rd(dd) {
      return dd.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Xd = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Wd.source}`, "g");

    function Kd(dd, Od) {
      return 2 === dd.length ? Od.replace(/^ (.*) $/, "$1") : Od
    }

    function hd(dd) {
      return "" === dd.trim()
    }

    function vd(dd) {
      const Od = [];
      for (const md of dd.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Od.length > 0 && Od[Od.length - 1].endsWith("\\") ? Od[Od.length - 1] += `|${md}` : Od.push(md);
      return Od.map((dd => dd.trim().replaceAll("\\|", "|")))
    }
    const Qd = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function td(dd) {
      const Od = [],
        md = [{
          indent: -1,
          items: Od
        }];
      let Wd = null;
      for (const Fd of dd) {
        const dd = Fd.match(Qd);
        if (!dd) {
          Wd && (Wd.text += ` ${Fd.trim()}`);
          continue
        }
        const Od = dd[1].replace(/\t/g, "  ").length;
        for (; Od <= md[md.length - 1].indent;) md.pop();
        Wd = {
          text: dd[3].trim(),
          children: []
        }, md[md.length - 1].items.push(Wd), md.push({
          indent: Od,
          items: Wd.children
        })
      }
      return Od
    }

    function od(dd) {
      const Od = dd.replace(/\r\n/g, "\n").split("\n"),
        md = [];
      let Wd = 0;
      for (; Wd < Od.length;) {
        const dd = Od[Wd];
        if (hd(dd)) {
          Wd++;
          continue
        }
        const Fd = dd.match(/^\s*```\s*(\w*)\s*$/);
        if (Fd) {
          const dd = [];
          for (Wd++; Wd < Od.length && !/^\s*```\s*$/.test(Od[Wd]);) dd.push(Od[Wd]), Wd++;
          Wd++, md.push({
            kind: "code",
            lang: Fd[1] || "text",
            code: dd.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Xd = dd.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Xd) {
          const dd = Xd[2].trim();
          md.push({
            kind: "heading",
            level: Xd[1].length,
            text: dd,
            anchor: Rd(dd)
          }), Wd++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(dd)) {
          md.push({
            kind: "rule"
          }), Wd++;
          continue
        }
        if (dd.trim().startsWith("|") && Wd + 1 < Od.length && /^\s*\|[\s:|-]+\|\s*$/.test(Od[Wd + 1])) {
          const Fd = vd(dd),
            Rd = [];
          for (Wd += 2; Wd < Od.length && Od[Wd].trim().startsWith("|");) Rd.push(vd(Od[Wd])), Wd++;
          md.push({
            kind: "table",
            header: Fd,
            rows: Rd
          });
          continue
        }
        if (dd.startsWith(">")) {
          const dd = [];
          for (; Wd < Od.length && Od[Wd].startsWith(">");) dd.push(Od[Wd].replace(/^>\s?/, "")), Wd++;
          md.push({
            kind: "quote",
            blocks: od(dd.join("\n"))
          });
          continue
        }
        if (Qd.test(dd)) {
          const Fd = [],
            Rd = /^\s*\d+\./.test(dd);
          for (; Wd < Od.length && !hd(Od[Wd]) && (Qd.test(Od[Wd]) || /^\s+\S/.test(Od[Wd]));) Fd.push(Od[Wd]), Wd++;
          md.push({
            kind: "list",
            ordered: Rd,
            items: td(Fd)
          });
          continue
        }
        const Kd = [];
        for (; Wd < Od.length && !hd(Od[Wd]) && !/^\s*```/.test(Od[Wd]) && !/^#{1,6}\s/.test(Od[Wd]) && !Od[Wd].startsWith(">") && !Qd.test(Od[Wd]) && (!Od[Wd].trim().startsWith("|") || 0 !== Kd.length);) Kd.push(Od[Wd].trim()), Wd++;
        0 === Kd.length && (Kd.push(Od[Wd].trim()), Wd++), md.push({
          kind: "paragraph",
          text: Kd.join(" ")
        })
      }
      return md
    }

    function Nd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const md = od(dd);
      let Wd = "";
      const Fd = [],
        Rd = [],
        Xd = new Map;
      for (const vd of md) {
        if ("heading" === vd.kind) {
          var Kd;
          const dd = (null !== (Kd = Xd.get(vd.anchor)) && void 0 !== Kd ? Kd : 0) + 1;
          Xd.set(vd.anchor, dd), dd > 1 && (vd.anchor = `${vd.anchor}-${dd}`)
        }
        if ("heading" === vd.kind && 1 === vd.level && !Wd) {
          Wd = vd.text;
          continue
        }
        if ("heading" === vd.kind && vd.level <= Od) {
          Rd.push({
            heading: vd,
            blocks: []
          });
          continue
        }
        const dd = Rd.at(-1);
        dd ? dd.blocks.push(vd) : Fd.push(vd)
      }
      const hd = dd => {
        for (;
          "rule" === (null === (Od = dd.at(-1)) || void 0 === Od ? void 0 : Od.kind);) {
          var Od;
          dd.pop()
        }
      };
      hd(Fd);
      for (const vd of Rd) hd(vd.blocks);
      return {
        title: Wd,
        intro: Fd,
        sections: Rd
      }
    }

    function qd(dd) {
      return [{
        heading: null,
        blocks: dd.intro
      }, ...dd.sections.map((dd => ({
        heading: dd.heading,
        blocks: dd.blocks
      })))]
    }

    function Hd(dd) {
      return dd.flatMap((dd => "code" === dd.kind ? [dd] : "quote" === dd.kind ? Hd(dd.blocks) : []))
    }

    function yd(dd) {
      switch (dd.kind) {
        case "heading":
        case "paragraph":
          return dd.text;
        case "code":
          return dd.code;
        case "table":
          return [dd.header, ...dd.rows].map((dd => dd.join(" "))).join(" ");
        case "list": {
          const Od = dd => dd.map((dd => `${dd.text} ${Od(dd.children)}`)).join(" ");
          return Od(dd.items)
        }
        case "quote":
          return dd.blocks.map(yd).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7435: (dd, Od, md) => {
    md.d(Od, {
      e: () => td,
      h: () => Xd,
      j: () => Kd
    });
    md(7429);
    var Wd = md(66),
      Fd = md(5509),
      Rd = md(1341);
    const Xd = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Kd(dd, Od) {
      return dd === Od ? dd : `${dd} (${Od})`
    }

    function hd(dd) {
      const Od = [];
      let md = 0;
      for (const Wd of dd.matchAll(Xd)) {
        Wd.index > md && Od.push(dd.slice(md, Wd.index));
        const [, Fd, Xd, hd, vd, Qd, td] = Wd;
        void 0 !== Fd ? Od.push(Kd(Fd, Xd)) : void 0 !== hd || void 0 !== vd ? Od.push((0, Rd.jsx)("strong", {
          children: null !== hd && void 0 !== hd ? hd : vd
        }, Wd.index)) : void 0 !== Qd ? Od.push((0, Rd.jsx)("em", {
          children: Qd
        }, Wd.index)) : Od.push((0, Rd.jsx)("code", {
          children: td
        }, Wd.index)), md = Wd.index + Wd[0].length
      }
      return md < dd.length && Od.push(dd.slice(md)), Od
    }

    function vd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Wd = dd.map(((dd, Od) => (0, Rd.jsxs)("li", {
        children: [hd(dd.text), dd.children.length > 0 && vd(dd.children, !1)]
      }, Od)));
      return Od ? (0, Rd.jsx)("ol", {
        start: md,
        children: Wd
      }) : (0, Rd.jsx)("ul", {
        children: Wd
      })
    }

    function Qd(dd, Od) {
      switch (dd.kind) {
        case "heading":
          return dd.level <= 2 ? (0, Rd.jsx)("h3", {
            children: hd(dd.text)
          }, Od) : (0, Rd.jsx)("h4", {
            children: hd(dd.text)
          }, Od);
        case "paragraph":
          return (0, Rd.jsx)("p", {
            children: hd(dd.text)
          }, Od);
        case "list":
          return (0, Rd.jsx)(Wd.Fragment, {
            children: vd(dd.items, dd.ordered)
          }, Od);
        case "quote":
          return (0, Rd.jsx)("blockquote", {
            children: dd.blocks.map(((dd, Od) => Qd(dd, Od)))
          }, Od);
        case "code":
          return (0, Rd.jsx)("pre", {
            children: (0, Rd.jsx)("code", {
              children: dd.code
            })
          }, Od);
        case "table":
          return (0, Rd.jsxs)("table", {
            children: [(0, Rd.jsx)("thead", {
              children: (0, Rd.jsx)("tr", {
                children: dd.header.map(((dd, Od) => (0, Rd.jsx)("th", {
                  children: hd(dd)
                }, Od)))
              })
            }), (0, Rd.jsx)("tbody", {
              children: dd.rows.map(((dd, Od) => (0, Rd.jsx)("tr", {
                children: dd.map(((dd, Od) => (0, Rd.jsx)("td", {
                  children: hd(dd)
                }, Od)))
              }, Od)))
            })]
          }, Od);
        case "rule":
          return (0, Rd.jsx)("hr", {}, Od)
      }
    }

    function td(dd) {
      let {
        markdown: Od
      } = dd, md = 0;
      return (0, Rd.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Fd.s)(Od).map(((dd, Od) => {
          if ("list" !== dd.kind || !dd.ordered) return md = 0, Qd(dd, Od);
          const Fd = md + 1;
          return md += dd.items.length, (0, Rd.jsx)(Wd.Fragment, {
            children: vd(dd.items, !0, Fd)
          }, Od)
        }))
      })
    }
  },
  7420: (dd, Od, md) => {
    md.d(Od, {
      e: () => Td,
      i: () => pd,
      h: () => gd,
      j: () => qd
    });
    var Wd = md(1268),
      Fd = md(7374),
      Rd = md(5656);
    const Xd = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Kd(dd) {
      return (0, Rd.g)(dd, Xd, (Od => !/^my/i.test(Od[0]) || !/follow $/i.test(dd.slice(0, Od.index)))).length > 0
    }
    const hd = /\byou(?:r|'re|'ll)?\b/i,
      vd = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Qd = 2;

    function td(dd) {
      return function(dd) {
        const Od = [];
        let md = !1;
        for (const Wd of dd.split("\n")) {
          if (/^\s*(```|~~~)/.test(Wd)) {
            md = !md;
            continue
          }
          if (md || /^\s*>/.test(Wd)) continue;
          const dd = Wd.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Od.push(...(0, Fd.q)(dd))
        }
        return Od
      }(dd).filter((dd => Kd(dd) || vd.test(dd) && !hd.test(dd)))
    }
    const od = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Nd = [{
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

    function qd(dd) {
      const Od = Nd.findIndex((Od => Od.name === dd));
      return -1 === Od ? Nd.length : Od
    }
    const Hd = 2500,
      yd = 12e4;
    class bd extends Error {
      constructor(dd) {
        super(`Studio AI chat ${dd}`), this.reason = dd
      }
    }

    function Td(dd, Od) {
      const md = new AbortController,
        Wd = () => {
          md.abort()
        },
        Fd = setTimeout(Wd, dd);
      return null !== Od && void 0 !== Od && Od.aborted && Wd(), null === Od || void 0 === Od || Od.addEventListener("abort", Wd, {
        once: !0
      }), {
        signal: md.signal,
        clear: () => {
          clearTimeout(Fd), null === Od || void 0 === Od || Od.removeEventListener("abort", Wd)
        }
      }
    }

    function pd(dd, Od, md) {
      return new Promise(((Fd, Rd) => {
        const Xd = new AbortController,
          Kd = () => {
            Xd.abort(), Rd((0, Wd.e)(md))
          };
        if (null !== md && void 0 !== md && md.aborted) return void Kd();
        null === md || void 0 === md || md.addEventListener("abort", Kd, {
          once: !0
        });
        const hd = Nd.map((() => !1));
        let vd = null;
        const Qd = Nd.map((() => !1)),
          td = Nd.map((() => !1));
        Nd.forEach(((Wd, od) => {
          const qd = Td(yd, Xd.signal);
          wd(Wd, [{
            role: "user",
            content: dd
          }], qd.signal).then((dd => {
            Xd.signal.aborted || ("busy" === dd || "failed" === dd ? (Qd[od] = "busy" === dd, td[od] = !0) : null !== dd && (null === vd || od < vd.rank) && (vd = {
              rank: od,
              answer: {
                text: dd.text,
                model: Wd.name
              }
            }, Od(vd.answer)))
          }), (dd => {
            Xd.signal.aborted || (td[od] = !0, console.warn(`Studio AI: ${Wd.name} couldn't be reached`, dd))
          })).finally((() => {
            qd.clear(), hd[od] = !0, Xd.signal.aborted || (() => {
              var dd, Od;
              const Wd = null !== (dd = null === (Od = vd) || void 0 === Od ? void 0 : Od.rank) && void 0 !== dd ? dd : Nd.length;
              hd.slice(0, Wd).includes(!1) || (null === md || void 0 === md || md.removeEventListener("abort", Kd), Xd.abort(), null !== vd ? Fd({
                ...vd.answer,
                isFinal: !td.slice(0, vd.rank).includes(!0)
              }) : Rd(new bd(Qd.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((dd => {
            console.error("Studio AI: showing an answer failed", dd)
          }))
        }))
      }))
    }

    function Yd(dd) {
      var Od, md;
      return "length" === (null === dd || void 0 === dd || null === (Od = dd.choices) || void 0 === Od || null === (md = Od[0]) || void 0 === md ? void 0 : md.finish_reason)
    }
    async function gd(dd, Od, md) {
      const Wd = Nd.find((Od => Od.name === dd));
      if (void 0 === Wd) return "failed";
      const Fd = Td(yd, md);
      try {
        const dd = await wd(Wd, Od, Fd.signal);
        return null !== dd && "object" === typeof dd ? dd.isCutOff ? (console.warn(`Studio AI: ${Wd.name}'s answer was cut off at the token limit`), null) : {
          text: dd.text
        } : dd
      } finally {
        Fd.clear()
      }
    }
    async function wd(dd, Od, md) {
      const Wd = await fetch(od, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: dd.name,
          messages: Od,
          max_tokens: Hd,
          temperature: dd.temperature,
          reasoning_effort: dd.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: md
      });
      if (429 === Wd.status) return "busy";
      if (!Wd.ok) return console.warn(`Studio AI: ${dd.name} answered ${Wd.status}`), "failed";
      const Fd = await Wd.json().catch((() => null)),
        Rd = function(dd) {
          var Od, md, Wd;
          const Fd = null === dd || void 0 === dd || null === (Od = dd.choices) || void 0 === Od || null === (md = Od[0]) || void 0 === md || null === (Wd = md.message) || void 0 === Wd ? void 0 : Wd.content;
          if ("string" !== typeof Fd) return null;
          const Rd = Fd.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Rd ? null : Rd
        }(Fd);
      return null !== Rd && function(dd) {
        const Od = td(dd);
        return Od.length >= Qd || Od.some((dd => Kd(dd)))
      }(Rd) ? (console.warn(`Studio AI: ${dd.name} thought out loud instead of answering`), "failed") : null === Rd ? null : {
        text: Rd,
        isCutOff: Yd(Fd)
      }
    }
  },
  7374: (dd, Od, md) => {
    md.d(Od, {
      A: () => yd,
      B: () => pd,
      D: () => gd,
      E: () => Td,
      G: () => td,
      J: () => vd,
      K: () => Nd,
      c: () => qd,
      e: () => Kd,
      i: () => Xd,
      m: () => Hd,
      o: () => od,
      q: () => Qd,
      r: () => Rd,
      t: () => Fd,
      v: () => Yd,
      x: () => wd
    });
    var Wd = md(5656);
    const Fd = 2e3,
      Rd = 2e4;

    function Xd(dd) {
      return dd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Kd(dd) {
      return dd.replace(/\$/g, "\\$")
    }
    const hd = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function vd(dd, Od) {
      hd.lastIndex = Od;
      const md = hd.exec(dd);
      return md.index + md[0].length
    }

    function Qd(dd) {
      return (0, Wd.w)(dd, /\s+/g, (0, Wd.s)(".!?")).flatMap((dd => dd.split("\n")))
    }

    function td(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od;
      const Wd = [...dd.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((dd => dd.index)),
        Fd = Wd.filter((dd => dd < Od)),
        Rd = Wd.find((dd => dd >= md));
      return [0 === Fd.length ? 0 : Fd.at(-1) + 1, void 0 === Rd ? dd.length : Rd + 1]
    }

    function od(dd, Od) {
      const md = dd.charCodeAt(Od - 1);
      return dd.slice(0, Od > 0 && Od < dd.length && md >= 55296 && md <= 56319 ? Od - 1 : Od)
    }

    function Nd(dd, Od) {
      return `${Od}${dd.replace(/\\/g,"\\\\").split(Od).join(`\\${Od}`)}${Od}`
    }

    function qd(dd) {
      return dd.charAt(0).toUpperCase() + dd.slice(1)
    }

    function Hd(dd) {
      return Math.round(dd).toLocaleString("en-US")
    }

    function yd(dd) {
      return dd.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((dd => "" !== dd))
    }
    const bd = 3;

    function Td(dd, Od) {
      return yd(dd).filter((dd => dd.length >= bd && !/\d/.test(dd))).map((dd => `${dd} ${Od}`))
    }

    function pd(dd) {
      return dd.split(/[\s:_]+/).filter((dd => "" !== dd)).map(Xd).join("[`:_\\s]+")
    }

    function Yd(dd) {
      return yd(dd.split(".").pop())
    }

    function gd(dd) {
      return dd.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function wd(dd) {
      let Od = null;
      return () => {
        const md = Od ??= dd();
        return md.catch((() => {
          Od === md && (Od = null)
        })), md
      }
    }
  },
  5656: (dd, Od, md) => {
    function Wd(dd) {
      return {
        notAfter: dd
      }
    }
    md.d(Od, {
      d: () => hd,
      g: () => vd,
      h: () => Kd,
      l: () => Wd,
      o: () => Fd,
      q: () => Rd,
      s: () => Xd,
      v: () => Qd,
      w: () => td
    });
    const Fd = Wd("\\w$."),
      Rd = Wd("\\w.,");

    function Xd(dd) {
      return Od => hd(Od, dd)
    }

    function Kd(dd) {
      return Od => !dd.test(Od.input.slice(0, Od.index))
    }

    function hd(dd, Od) {
      return dd.index > 0 && new RegExp(`[${Od}]`).test(dd.input[dd.index - 1])
    }

    function vd(dd, Od, md) {
      return function(dd) {
        return void 0 !== dd && "function" !== typeof dd
      }(md) ? function(dd, Od, md) {
        const Wd = Od.flags.replace(/[gy]/g, ""),
          Fd = new RegExp(`[^${md}](?:${Od.source})`, `${Wd}g`),
          Rd = [],
          Xd = md => {
            const Wd = md.index + md[0].length;
            return ("" === md[0] ? od(dd, Od, Wd) : Wd) - 1
          },
          Kd = new RegExp(`(?:${Od.source})`, `${Wd}y`).exec(dd);
        if (Kd) {
          if (Rd.push(Kd), !Od.global) return Rd;
          Fd.lastIndex = Xd(Kd)
        }
        for (let hd = Fd.exec(dd); hd; hd = Fd.exec(dd)) {
          const md = od(dd, Od, hd.index) - hd.index;
          if (hd[0] = hd[0].slice(md), hd.index += md, Rd.push(hd), !Od.global) break;
          Fd.lastIndex = Xd(hd)
        }
        return Rd
      }(dd, Od, md.notAfter) : function(dd, Od, md) {
        const Wd = new RegExp(Od.source, `${Od.flags.replace(/[gy]/g,"")}g`),
          Fd = [];
        for (let Rd = Wd.exec(dd); Rd; Rd = Wd.exec(dd))
          if (!md || md(Rd)) {
            if (Fd.push(Rd), !Od.global) break;
            "" === Rd[0] && (Wd.lastIndex = od(dd, Od, Wd.lastIndex))
          } else Wd.lastIndex = od(dd, Od, Rd.index);
        return Fd
      }(dd, Od, md)
    }

    function Qd(dd, Od, md, Wd) {
      let Fd = "",
        Rd = 0;
      for (const Xd of vd(dd, Od, md)) Fd += dd.slice(Rd, Xd.index) + Wd(Xd), Rd = Xd.index + Xd[0].length;
      return Fd + dd.slice(Rd)
    }

    function td(dd, Od, md) {
      const Wd = [];
      let Fd = 0;
      for (const Rd of vd(dd, Od, md)) Wd.push(dd.slice(Fd, Rd.index)), Fd = Rd.index + Rd[0].length;
      return [...Wd, dd.slice(Fd)]
    }

    function od(dd, Od, md) {
      var Wd;
      return md + (Od.unicode && (null !== (Wd = dd.codePointAt(md)) && void 0 !== Wd ? Wd : 0) > 65535 ? 2 : 1)
    }
  },
  7429: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);