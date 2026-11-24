export const id = 81;
export const ids = [81];
export const modules = {
  4844: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      g: () => Sp,
      k: () => wp,
      n: () => Up,
      q: () => xp,
      r: () => op,
      s: () => Ip,
      t: () => yp,
      w: () => Wp,
      x: () => Pp
    });
    const Op = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function op(pp) {
      try {
        return decodeURIComponent(pp.slice(1))
      } catch {
        return pp.slice(1)
      }
    }

    function Ip(pp) {
      return pp.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Sp = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Op.source}`, "g");

    function xp(pp, ip) {
      return 2 === pp.length ? ip.replace(/^ (.*) $/, "$1") : ip
    }

    function Lp(pp) {
      return "" === pp.trim()
    }

    function Yp(pp) {
      const ip = [];
      for (const cp of pp.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ip.length > 0 && ip[ip.length - 1].endsWith("\\") ? ip[ip.length - 1] += `|${cp}` : ip.push(cp);
      return ip.map((pp => pp.trim().replaceAll("\\|", "|")))
    }
    const Dp = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Ap(pp) {
      const ip = [],
        cp = [{
          indent: -1,
          items: ip
        }];
      let Op = null;
      for (const op of pp) {
        const pp = op.match(Dp);
        if (!pp) {
          Op && (Op.text += ` ${op.trim()}`);
          continue
        }
        const ip = pp[1].replace(/\t/g, "  ").length;
        for (; ip <= cp[cp.length - 1].indent;) cp.pop();
        Op = {
          text: pp[3].trim(),
          children: []
        }, cp[cp.length - 1].items.push(Op), cp.push({
          indent: ip,
          items: Op.children
        })
      }
      return ip
    }

    function Pp(pp) {
      const ip = pp.replace(/\r\n/g, "\n").split("\n"),
        cp = [];
      let Op = 0;
      for (; Op < ip.length;) {
        const pp = ip[Op];
        if (Lp(pp)) {
          Op++;
          continue
        }
        const op = pp.match(/^\s*```\s*(\w*)\s*$/);
        if (op) {
          const pp = [];
          for (Op++; Op < ip.length && !/^\s*```\s*$/.test(ip[Op]);) pp.push(ip[Op]), Op++;
          Op++, cp.push({
            kind: "code",
            lang: op[1] || "text",
            code: pp.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Sp = pp.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Sp) {
          const pp = Sp[2].trim();
          cp.push({
            kind: "heading",
            level: Sp[1].length,
            text: pp,
            anchor: Ip(pp)
          }), Op++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(pp)) {
          cp.push({
            kind: "rule"
          }), Op++;
          continue
        }
        if (pp.trim().startsWith("|") && Op + 1 < ip.length && /^\s*\|[\s:|-]+\|\s*$/.test(ip[Op + 1])) {
          const op = Yp(pp),
            Ip = [];
          for (Op += 2; Op < ip.length && ip[Op].trim().startsWith("|");) Ip.push(Yp(ip[Op])), Op++;
          cp.push({
            kind: "table",
            header: op,
            rows: Ip
          });
          continue
        }
        if (pp.startsWith(">")) {
          const pp = [];
          for (; Op < ip.length && ip[Op].startsWith(">");) pp.push(ip[Op].replace(/^>\s?/, "")), Op++;
          cp.push({
            kind: "quote",
            blocks: Pp(pp.join("\n"))
          });
          continue
        }
        if (Dp.test(pp)) {
          const op = [],
            Ip = /^\s*\d+\./.test(pp);
          for (; Op < ip.length && !Lp(ip[Op]) && (Dp.test(ip[Op]) || /^\s+\S/.test(ip[Op]));) op.push(ip[Op]), Op++;
          cp.push({
            kind: "list",
            ordered: Ip,
            items: Ap(op)
          });
          continue
        }
        const xp = [];
        for (; Op < ip.length && !Lp(ip[Op]) && !/^\s*```/.test(ip[Op]) && !/^#{1,6}\s/.test(ip[Op]) && !ip[Op].startsWith(">") && !Dp.test(ip[Op]) && (!ip[Op].trim().startsWith("|") || 0 !== xp.length);) xp.push(ip[Op].trim()), Op++;
        0 === xp.length && (xp.push(ip[Op].trim()), Op++), cp.push({
          kind: "paragraph",
          text: xp.join(" ")
        })
      }
      return cp
    }

    function Wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cp = Pp(pp);
      let Op = "";
      const op = [],
        Ip = [],
        Sp = new Map;
      for (const Yp of cp) {
        if ("heading" === Yp.kind) {
          var xp;
          const pp = (null !== (xp = Sp.get(Yp.anchor)) && void 0 !== xp ? xp : 0) + 1;
          Sp.set(Yp.anchor, pp), pp > 1 && (Yp.anchor = `${Yp.anchor}-${pp}`)
        }
        if ("heading" === Yp.kind && 1 === Yp.level && !Op) {
          Op = Yp.text;
          continue
        }
        if ("heading" === Yp.kind && Yp.level <= ip) {
          Ip.push({
            heading: Yp,
            blocks: []
          });
          continue
        }
        const pp = Ip.at(-1);
        pp ? pp.blocks.push(Yp) : op.push(Yp)
      }
      const Lp = pp => {
        for (;
          "rule" === (null === (ip = pp.at(-1)) || void 0 === ip ? void 0 : ip.kind);) {
          var ip;
          pp.pop()
        }
      };
      Lp(op);
      for (const Yp of Ip) Lp(Yp.blocks);
      return {
        title: Op,
        intro: op,
        sections: Ip
      }
    }

    function yp(pp) {
      return [{
        heading: null,
        blocks: pp.intro
      }, ...pp.sections.map((pp => ({
        heading: pp.heading,
        blocks: pp.blocks
      })))]
    }

    function Up(pp) {
      return pp.flatMap((pp => "code" === pp.kind ? [pp] : "quote" === pp.kind ? Up(pp.blocks) : []))
    }

    function wp(pp) {
      switch (pp.kind) {
        case "heading":
        case "paragraph":
          return pp.text;
        case "code":
          return pp.code;
        case "table":
          return [pp.header, ...pp.rows].map((pp => pp.join(" "))).join(" ");
        case "list": {
          const ip = pp => pp.map((pp => `${pp.text} ${ip(pp.children)}`)).join(" ");
          return ip(pp.items)
        }
        case "quote":
          return pp.blocks.map(wp).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6637: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ap,
      c: () => Sp,
      d: () => xp
    });
    cp(6630);
    var Op = cp(62),
      op = cp(4844),
      Ip = cp(1112);
    const Sp = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function xp(pp, ip) {
      return pp === ip ? pp : `${pp} (${ip})`
    }

    function Lp(pp) {
      const ip = [];
      let cp = 0;
      for (const Op of pp.matchAll(Sp)) {
        Op.index > cp && ip.push(pp.slice(cp, Op.index));
        const [, op, Sp, Lp, Yp, Dp, Ap] = Op;
        void 0 !== op ? ip.push(xp(op, Sp)) : void 0 !== Lp || void 0 !== Yp ? ip.push((0, Ip.jsx)("strong", {
          children: null !== Lp && void 0 !== Lp ? Lp : Yp
        }, Op.index)) : void 0 !== Dp ? ip.push((0, Ip.jsx)("em", {
          children: Dp
        }, Op.index)) : ip.push((0, Ip.jsx)("code", {
          children: Ap
        }, Op.index)), cp = Op.index + Op[0].length
      }
      return cp < pp.length && ip.push(pp.slice(cp)), ip
    }

    function Yp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Op = pp.map(((pp, ip) => (0, Ip.jsxs)("li", {
        children: [Lp(pp.text), pp.children.length > 0 && Yp(pp.children, !1)]
      }, ip)));
      return ip ? (0, Ip.jsx)("ol", {
        start: cp,
        children: Op
      }) : (0, Ip.jsx)("ul", {
        children: Op
      })
    }

    function Dp(pp, ip) {
      switch (pp.kind) {
        case "heading":
          return pp.level <= 2 ? (0, Ip.jsx)("h3", {
            children: Lp(pp.text)
          }, ip) : (0, Ip.jsx)("h4", {
            children: Lp(pp.text)
          }, ip);
        case "paragraph":
          return (0, Ip.jsx)("p", {
            children: Lp(pp.text)
          }, ip);
        case "list":
          return (0, Ip.jsx)(Op.Fragment, {
            children: Yp(pp.items, pp.ordered)
          }, ip);
        case "quote":
          return (0, Ip.jsx)("blockquote", {
            children: pp.blocks.map(((pp, ip) => Dp(pp, ip)))
          }, ip);
        case "code":
          return (0, Ip.jsx)("pre", {
            children: (0, Ip.jsx)("code", {
              children: pp.code
            })
          }, ip);
        case "table":
          return (0, Ip.jsxs)("table", {
            children: [(0, Ip.jsx)("thead", {
              children: (0, Ip.jsx)("tr", {
                children: pp.header.map(((pp, ip) => (0, Ip.jsx)("th", {
                  children: Lp(pp)
                }, ip)))
              })
            }), (0, Ip.jsx)("tbody", {
              children: pp.rows.map(((pp, ip) => (0, Ip.jsx)("tr", {
                children: pp.map(((pp, ip) => (0, Ip.jsx)("td", {
                  children: Lp(pp)
                }, ip)))
              }, ip)))
            })]
          }, ip);
        case "rule":
          return (0, Ip.jsx)("hr", {}, ip)
      }
    }

    function Ap(pp) {
      let {
        markdown: ip
      } = pp, cp = 0;
      return (0, Ip.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, op.x)(ip).map(((pp, ip) => {
          if ("list" !== pp.kind || !pp.ordered) return cp = 0, Dp(pp, ip);
          const op = cp + 1;
          return cp += pp.items.length, (0, Ip.jsx)(Op.Fragment, {
            children: Yp(pp.items, !0, op)
          }, ip)
        }))
      })
    }
  },
  6621: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => tp,
      d: () => Hp,
      c: () => ep,
      f: () => yp
    });
    var Op = cp(1216),
      op = cp(6575),
      Ip = cp(4984);
    const Sp = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function xp(pp) {
      return (0, Ip.f)(pp, Sp, (ip => !/^my/i.test(ip[0]) || !/follow $/i.test(pp.slice(0, ip.index)))).length > 0
    }
    const Lp = /\byou(?:r|'re|'ll)?\b/i,
      Yp = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Dp = 2;

    function Ap(pp) {
      return function(pp) {
        const ip = [];
        let cp = !1;
        for (const Op of pp.split("\n")) {
          if (/^\s*(```|~~~)/.test(Op)) {
            cp = !cp;
            continue
          }
          if (cp || /^\s*>/.test(Op)) continue;
          const pp = Op.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          ip.push(...(0, op.r)(pp))
        }
        return ip
      }(pp).filter((pp => xp(pp) || Yp.test(pp) && !Lp.test(pp)))
    }
    const Pp = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Wp = [{
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

    function yp(pp) {
      const ip = Wp.findIndex((ip => ip.name === pp));
      return -1 === ip ? Wp.length : ip
    }
    const Up = 2500,
      wp = 12e4;
    class vp extends Error {
      constructor(pp) {
        super(`Studio AI chat ${pp}`), this.reason = pp
      }
    }

    function tp(pp, ip) {
      const cp = new AbortController,
        Op = () => {
          cp.abort()
        },
        op = setTimeout(Op, pp);
      return null !== ip && void 0 !== ip && ip.aborted && Op(), null === ip || void 0 === ip || ip.addEventListener("abort", Op, {
        once: !0
      }), {
        signal: cp.signal,
        clear: () => {
          clearTimeout(op), null === ip || void 0 === ip || ip.removeEventListener("abort", Op)
        }
      }
    }

    function Hp(pp, ip, cp) {
      return new Promise(((op, Ip) => {
        const Sp = new AbortController,
          xp = () => {
            Sp.abort(), Ip((0, Op.e)(cp))
          };
        if (null !== cp && void 0 !== cp && cp.aborted) return void xp();
        null === cp || void 0 === cp || cp.addEventListener("abort", xp, {
          once: !0
        });
        const Lp = Wp.map((() => !1));
        let Yp = null;
        const Dp = Wp.map((() => !1)),
          Ap = Wp.map((() => !1));
        Wp.forEach(((Op, Pp) => {
          const yp = tp(wp, Sp.signal);
          jp(Op, [{
            role: "user",
            content: pp
          }], yp.signal).then((pp => {
            Sp.signal.aborted || ("busy" === pp || "failed" === pp ? (Dp[Pp] = "busy" === pp, Ap[Pp] = !0) : null !== pp && (null === Yp || Pp < Yp.rank) && (Yp = {
              rank: Pp,
              answer: {
                text: pp.text,
                model: Op.name
              }
            }, ip(Yp.answer)))
          }), (pp => {
            Sp.signal.aborted || (Ap[Pp] = !0, console.warn(`Studio AI: ${Op.name} couldn't be reached`, pp))
          })).finally((() => {
            yp.clear(), Lp[Pp] = !0, Sp.signal.aborted || (() => {
              var pp, ip;
              const Op = null !== (pp = null === (ip = Yp) || void 0 === ip ? void 0 : ip.rank) && void 0 !== pp ? pp : Wp.length;
              Lp.slice(0, Op).includes(!1) || (null === cp || void 0 === cp || cp.removeEventListener("abort", xp), Sp.abort(), null !== Yp ? op({
                ...Yp.answer,
                isFinal: !Ap.slice(0, Yp.rank).includes(!0)
              }) : Ip(new vp(Dp.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((pp => {
            console.error("Studio AI: showing an answer failed", pp)
          }))
        }))
      }))
    }

    function dp(pp) {
      var ip, cp;
      return "length" === (null === pp || void 0 === pp || null === (ip = pp.choices) || void 0 === ip || null === (cp = ip[0]) || void 0 === cp ? void 0 : cp.finish_reason)
    }
    async function ep(pp, ip, cp) {
      const Op = Wp.find((ip => ip.name === pp));
      if (void 0 === Op) return "failed";
      const op = tp(wp, cp);
      try {
        const pp = await jp(Op, ip, op.signal);
        return null !== pp && "object" === typeof pp ? pp.isCutOff ? (console.warn(`Studio AI: ${Op.name}'s answer was cut off at the token limit`), null) : {
          text: pp.text
        } : pp
      } finally {
        op.clear()
      }
    }
    async function jp(pp, ip, cp) {
      const Op = await fetch(Pp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: pp.name,
          messages: ip,
          max_tokens: Up,
          temperature: pp.temperature,
          reasoning_effort: pp.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: cp
      });
      if (429 === Op.status) return "busy";
      if (!Op.ok) return console.warn(`Studio AI: ${pp.name} answered ${Op.status}`), "failed";
      const op = await Op.json().catch((() => null)),
        Ip = function(pp) {
          var ip, cp, Op;
          const op = null === pp || void 0 === pp || null === (ip = pp.choices) || void 0 === ip || null === (cp = ip[0]) || void 0 === cp || null === (Op = cp.message) || void 0 === Op ? void 0 : Op.content;
          if ("string" !== typeof op) return null;
          const Ip = op.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Ip ? null : Ip
        }(op);
      return null !== Ip && function(pp) {
        const ip = Ap(pp);
        return ip.length >= Dp || ip.some((pp => xp(pp)))
      }(Ip) ? (console.warn(`Studio AI: ${pp.name} thought out loud instead of answering`), "failed") : null === Ip ? null : {
        text: Ip,
        isCutOff: dp(op)
      }
    }
  },
  6575: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => dp,
      C: () => jp,
      D: () => wp,
      E: () => Hp,
      I: () => ep,
      K: () => tp,
      L: () => Ap,
      N: () => Yp,
      P: () => Wp,
      c: () => yp,
      g: () => xp,
      i: () => Sp,
      l: () => Up,
      n: () => Pp,
      r: () => Dp,
      s: () => Ip,
      w: () => op
    });
    var Op = cp(4984);
    const op = 2e3,
      Ip = 2e4;

    function Sp(pp) {
      return pp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function xp(pp) {
      return pp.replace(/\$/g, "\\$")
    }
    const Lp = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Yp(pp, ip) {
      Lp.lastIndex = ip;
      const cp = Lp.exec(pp);
      return cp.index + cp[0].length
    }

    function Dp(pp) {
      return (0, Op.s)(pp, /\s+/g, (0, Op.p)(".!?")).flatMap((pp => pp.split("\n")))
    }

    function Ap(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip;
      const Op = [...pp.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((pp => pp.index)),
        op = Op.filter((pp => pp < ip)),
        Ip = Op.find((pp => pp >= cp));
      return [0 === op.length ? 0 : op.at(-1) + 1, void 0 === Ip ? pp.length : Ip + 1]
    }

    function Pp(pp, ip) {
      const cp = pp.charCodeAt(ip - 1);
      return pp.slice(0, ip > 0 && ip < pp.length && cp >= 55296 && cp <= 56319 ? ip - 1 : ip)
    }

    function Wp(pp, ip) {
      return `${ip}${pp.replace(/\\/g,"\\\\").split(ip).join(`\\${ip}`)}${ip}`
    }

    function yp(pp) {
      return pp.charAt(0).toUpperCase() + pp.slice(1)
    }

    function Up(pp) {
      return Math.round(pp).toLocaleString("en-US")
    }

    function wp(pp) {
      return pp.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((pp => "" !== pp))
    }
    const vp = 3;

    function tp(pp, ip) {
      return wp(pp).filter((pp => pp.length >= vp && !/\d/.test(pp))).map((pp => `${pp} ${ip}`))
    }

    function Hp(pp) {
      return pp.split(/[\s:_]+/).filter((pp => "" !== pp)).map(Sp).join("[`:_\\s]+")
    }

    function dp(pp) {
      return wp(pp.split(".").pop())
    }

    function ep(pp) {
      return pp.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function jp(pp) {
      let ip = null;
      return () => {
        const cp = ip ??= pp();
        return cp.catch((() => {
          ip === cp && (ip = null)
        })), cp
      }
    }
  },
  4984: (pp, ip, cp) => {
    function Op(pp) {
      return {
        notAfter: pp
      }
    }
    cp.d(ip, {
      c: () => Lp,
      f: () => Yp,
      j: () => xp,
      k: () => Op,
      m: () => op,
      n: () => Ip,
      p: () => Sp,
      r: () => Dp,
      s: () => Ap
    });
    const op = Op("\\w$."),
      Ip = Op("\\w.,");

    function Sp(pp) {
      return ip => Lp(ip, pp)
    }

    function xp(pp) {
      return ip => !pp.test(ip.input.slice(0, ip.index))
    }

    function Lp(pp, ip) {
      return pp.index > 0 && new RegExp(`[${ip}]`).test(pp.input[pp.index - 1])
    }

    function Yp(pp, ip, cp) {
      return function(pp) {
        return void 0 !== pp && "function" !== typeof pp
      }(cp) ? function(pp, ip, cp) {
        const Op = ip.flags.replace(/[gy]/g, ""),
          op = new RegExp(`[^${cp}](?:${ip.source})`, `${Op}g`),
          Ip = [],
          Sp = cp => {
            const Op = cp.index + cp[0].length;
            return ("" === cp[0] ? Pp(pp, ip, Op) : Op) - 1
          },
          xp = new RegExp(`(?:${ip.source})`, `${Op}y`).exec(pp);
        if (xp) {
          if (Ip.push(xp), !ip.global) return Ip;
          op.lastIndex = Sp(xp)
        }
        for (let Lp = op.exec(pp); Lp; Lp = op.exec(pp)) {
          const cp = Pp(pp, ip, Lp.index) - Lp.index;
          if (Lp[0] = Lp[0].slice(cp), Lp.index += cp, Ip.push(Lp), !ip.global) break;
          op.lastIndex = Sp(Lp)
        }
        return Ip
      }(pp, ip, cp.notAfter) : function(pp, ip, cp) {
        const Op = new RegExp(ip.source, `${ip.flags.replace(/[gy]/g,"")}g`),
          op = [];
        for (let Ip = Op.exec(pp); Ip; Ip = Op.exec(pp))
          if (!cp || cp(Ip)) {
            if (op.push(Ip), !ip.global) break;
            "" === Ip[0] && (Op.lastIndex = Pp(pp, ip, Op.lastIndex))
          } else Op.lastIndex = Pp(pp, ip, Ip.index);
        return op
      }(pp, ip, cp)
    }

    function Dp(pp, ip, cp, Op) {
      let op = "",
        Ip = 0;
      for (const Sp of Yp(pp, ip, cp)) op += pp.slice(Ip, Sp.index) + Op(Sp), Ip = Sp.index + Sp[0].length;
      return op + pp.slice(Ip)
    }

    function Ap(pp, ip, cp) {
      const Op = [];
      let op = 0;
      for (const Ip of Yp(pp, ip, cp)) Op.push(pp.slice(op, Ip.index)), op = Ip.index + Ip[0].length;
      return [...Op, pp.slice(op)]
    }

    function Pp(pp, ip, cp) {
      var Op;
      return cp + (ip.unicode && (null !== (Op = pp.codePointAt(cp)) && void 0 !== Op ? Op : 0) > 65535 ? 2 : 1)
    }
  },
  6630: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);