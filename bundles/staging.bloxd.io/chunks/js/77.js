export const id = 77;
export const ids = [77];
export const modules = {
  4461: (bb, cb, sb) => {
    sb.d(cb, {
      D: () => nb,
      G: () => Xb,
      e: () => kb,
      h: () => Tb,
      k: () => Qb,
      o: () => lb,
      s: () => Ub,
      v: () => Wb,
      x: () => ab,
      z: () => mb
    });
    const kb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Wb(bb) {
      try {
        return decodeURIComponent(bb.slice(1))
      } catch {
        return bb.slice(1)
      }
    }

    function ab(bb) {
      return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Tb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${kb.source}`, "g");

    function Ub(bb, cb) {
      return 2 === bb.length ? cb.replace(/^ (.*) $/, "$1") : cb
    }

    function Ib(bb) {
      return "" === bb.trim()
    }

    function Hb(bb) {
      const cb = [];
      for (const sb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) cb.length > 0 && cb[cb.length - 1].endsWith("\\") ? cb[cb.length - 1] += `|${sb}` : cb.push(sb);
      return cb.map((bb => bb.trim().replaceAll("\\|", "|")))
    }
    const fb = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Mb(bb) {
      const cb = [],
        sb = [{
          indent: -1,
          items: cb
        }];
      let kb = null;
      for (const Wb of bb) {
        const bb = Wb.match(fb);
        if (!bb) {
          kb && (kb.text += ` ${Wb.trim()}`);
          continue
        }
        const cb = bb[1].replace(/\t/g, "  ").length;
        for (; cb <= sb[sb.length - 1].indent;) sb.pop();
        kb = {
          text: bb[3].trim(),
          children: []
        }, sb[sb.length - 1].items.push(kb), sb.push({
          indent: cb,
          items: kb.children
        })
      }
      return cb
    }

    function Xb(bb) {
      const cb = bb.replace(/\r\n/g, "\n").split("\n"),
        sb = [];
      let kb = 0;
      for (; kb < cb.length;) {
        const bb = cb[kb];
        if (Ib(bb)) {
          kb++;
          continue
        }
        const Wb = bb.match(/^\s*```\s*(\w*)\s*$/);
        if (Wb) {
          const bb = [];
          for (kb++; kb < cb.length && !/^\s*```\s*$/.test(cb[kb]);) bb.push(cb[kb]), kb++;
          kb++, sb.push({
            kind: "code",
            lang: Wb[1] || "text",
            code: bb.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Tb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Tb) {
          const bb = Tb[2].trim();
          sb.push({
            kind: "heading",
            level: Tb[1].length,
            text: bb,
            anchor: ab(bb)
          }), kb++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
          sb.push({
            kind: "rule"
          }), kb++;
          continue
        }
        if (bb.trim().startsWith("|") && kb + 1 < cb.length && /^\s*\|[\s:|-]+\|\s*$/.test(cb[kb + 1])) {
          const Wb = Hb(bb),
            ab = [];
          for (kb += 2; kb < cb.length && cb[kb].trim().startsWith("|");) ab.push(Hb(cb[kb])), kb++;
          sb.push({
            kind: "table",
            header: Wb,
            rows: ab
          });
          continue
        }
        if (bb.startsWith(">")) {
          const bb = [];
          for (; kb < cb.length && cb[kb].startsWith(">");) bb.push(cb[kb].replace(/^>\s?/, "")), kb++;
          sb.push({
            kind: "quote",
            blocks: Xb(bb.join("\n"))
          });
          continue
        }
        if (fb.test(bb)) {
          const Wb = [],
            ab = /^\s*\d+\./.test(bb);
          for (; kb < cb.length && !Ib(cb[kb]) && (fb.test(cb[kb]) || /^\s+\S/.test(cb[kb]));) Wb.push(cb[kb]), kb++;
          sb.push({
            kind: "list",
            ordered: ab,
            items: Mb(Wb)
          });
          continue
        }
        const Ub = [];
        for (; kb < cb.length && !Ib(cb[kb]) && !/^\s*```/.test(cb[kb]) && !/^#{1,6}\s/.test(cb[kb]) && !cb[kb].startsWith(">") && !fb.test(cb[kb]) && (!cb[kb].trim().startsWith("|") || 0 !== Ub.length);) Ub.push(cb[kb].trim()), kb++;
        0 === Ub.length && (Ub.push(cb[kb].trim()), kb++), sb.push({
          kind: "paragraph",
          text: Ub.join(" ")
        })
      }
      return sb
    }

    function nb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const sb = Xb(bb);
      let kb = "";
      const Wb = [],
        ab = [],
        Tb = new Map;
      for (const Hb of sb) {
        if ("heading" === Hb.kind) {
          var Ub;
          const bb = (null !== (Ub = Tb.get(Hb.anchor)) && void 0 !== Ub ? Ub : 0) + 1;
          Tb.set(Hb.anchor, bb), bb > 1 && (Hb.anchor = `${Hb.anchor}-${bb}`)
        }
        if ("heading" === Hb.kind && 1 === Hb.level && !kb) {
          kb = Hb.text;
          continue
        }
        if ("heading" === Hb.kind && Hb.level <= cb) {
          ab.push({
            heading: Hb,
            blocks: []
          });
          continue
        }
        const bb = ab.at(-1);
        bb ? bb.blocks.push(Hb) : Wb.push(Hb)
      }
      const Ib = bb => {
        for (;
          "rule" === (null === (cb = bb.at(-1)) || void 0 === cb ? void 0 : cb.kind);) {
          var cb;
          bb.pop()
        }
      };
      Ib(Wb);
      for (const Hb of ab) Ib(Hb.blocks);
      return {
        title: kb,
        intro: Wb,
        sections: ab
      }
    }

    function mb(bb) {
      return [{
        heading: null,
        blocks: bb.intro
      }, ...bb.sections.map((bb => ({
        heading: bb.heading,
        blocks: bb.blocks
      })))]
    }

    function lb(bb) {
      return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? lb(bb.blocks) : []))
    }

    function Qb(bb) {
      switch (bb.kind) {
        case "heading":
        case "paragraph":
          return bb.text;
        case "code":
          return bb.code;
        case "table":
          return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
        case "list": {
          const cb = bb => bb.map((bb => `${bb.text} ${cb(bb.children)}`)).join(" ");
          return cb(bb.items)
        }
        case "quote":
          return bb.blocks.map(Qb).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6153: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Mb,
      h: () => Tb,
      k: () => Ub
    });
    sb(6150);
    var kb = sb(64),
      Wb = sb(4461),
      ab = sb(1087);
    const Tb = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Ub(bb, cb) {
      return bb === cb ? bb : `${bb} (${cb})`
    }

    function Ib(bb) {
      const cb = [];
      let sb = 0;
      for (const kb of bb.matchAll(Tb)) {
        kb.index > sb && cb.push(bb.slice(sb, kb.index));
        const [, Wb, Tb, Ib, Hb, fb, Mb] = kb;
        void 0 !== Wb ? cb.push(Ub(Wb, Tb)) : void 0 !== Ib || void 0 !== Hb ? cb.push((0, ab.jsx)("strong", {
          children: null !== Ib && void 0 !== Ib ? Ib : Hb
        }, kb.index)) : void 0 !== fb ? cb.push((0, ab.jsx)("em", {
          children: fb
        }, kb.index)) : cb.push((0, ab.jsx)("code", {
          children: Mb
        }, kb.index)), sb = kb.index + kb[0].length
      }
      return sb < bb.length && cb.push(bb.slice(sb)), cb
    }

    function Hb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const kb = bb.map(((bb, cb) => (0, ab.jsxs)("li", {
        children: [Ib(bb.text), bb.children.length > 0 && Hb(bb.children, !1)]
      }, cb)));
      return cb ? (0, ab.jsx)("ol", {
        start: sb,
        children: kb
      }) : (0, ab.jsx)("ul", {
        children: kb
      })
    }

    function fb(bb, cb) {
      switch (bb.kind) {
        case "heading":
          return bb.level <= 2 ? (0, ab.jsx)("h3", {
            children: Ib(bb.text)
          }, cb) : (0, ab.jsx)("h4", {
            children: Ib(bb.text)
          }, cb);
        case "paragraph":
          return (0, ab.jsx)("p", {
            children: Ib(bb.text)
          }, cb);
        case "list":
          return (0, ab.jsx)(kb.Fragment, {
            children: Hb(bb.items, bb.ordered)
          }, cb);
        case "quote":
          return (0, ab.jsx)("blockquote", {
            children: bb.blocks.map(((bb, cb) => fb(bb, cb)))
          }, cb);
        case "code":
          return (0, ab.jsx)("pre", {
            children: (0, ab.jsx)("code", {
              children: bb.code
            })
          }, cb);
        case "table":
          return (0, ab.jsxs)("table", {
            children: [(0, ab.jsx)("thead", {
              children: (0, ab.jsx)("tr", {
                children: bb.header.map(((bb, cb) => (0, ab.jsx)("th", {
                  children: Ib(bb)
                }, cb)))
              })
            }), (0, ab.jsx)("tbody", {
              children: bb.rows.map(((bb, cb) => (0, ab.jsx)("tr", {
                children: bb.map(((bb, cb) => (0, ab.jsx)("td", {
                  children: Ib(bb)
                }, cb)))
              }, cb)))
            })]
          }, cb);
        case "rule":
          return (0, ab.jsx)("hr", {}, cb)
      }
    }

    function Mb(bb) {
      let {
        markdown: cb
      } = bb, sb = 0;
      return (0, ab.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Wb.G)(cb).map(((bb, cb) => {
          if ("list" !== bb.kind || !bb.ordered) return sb = 0, fb(bb, cb);
          const Wb = sb + 1;
          return sb += bb.items.length, (0, ab.jsx)(kb.Fragment, {
            children: Hb(bb.items, !0, Wb)
          }, cb)
        }))
      })
    }
  },
  6142: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Cb,
      h: () => Nb,
      d: () => Lb,
      j: () => mb
    });
    var kb = sb(1770),
      Wb = sb(6110),
      ab = sb(4588);
    const Tb = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Ub(bb) {
      return (0, ab.e)(bb, Tb, (cb => !/^my/i.test(cb[0]) || !/follow $/i.test(bb.slice(0, cb.index)))).length > 0
    }
    const Ib = /\byou(?:r|'re|'ll)?\b/i,
      Hb = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      fb = 2;

    function Mb(bb) {
      return function(bb) {
        const cb = [];
        let sb = !1;
        for (const kb of bb.split("\n")) {
          if (/^\s*(```|~~~)/.test(kb)) {
            sb = !sb;
            continue
          }
          if (sb || /^\s*>/.test(kb)) continue;
          const bb = kb.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          cb.push(...(0, Wb.p)(bb))
        }
        return cb
      }(bb).filter((bb => Ub(bb) || Hb.test(bb) && !Ib.test(bb)))
    }
    const Xb = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      nb = [{
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

    function mb(bb) {
      const cb = nb.findIndex((cb => cb.name === bb));
      return -1 === cb ? nb.length : cb
    }
    const lb = 2500,
      Qb = 12e4;
    class eb extends Error {
      constructor(bb) {
        super(`Studio AI chat ${bb}`), this.reason = bb
      }
    }

    function Cb(bb, cb) {
      const sb = new AbortController,
        kb = () => {
          sb.abort()
        },
        Wb = setTimeout(kb, bb);
      return null !== cb && void 0 !== cb && cb.aborted && kb(), null === cb || void 0 === cb || cb.addEventListener("abort", kb, {
        once: !0
      }), {
        signal: sb.signal,
        clear: () => {
          clearTimeout(Wb), null === cb || void 0 === cb || cb.removeEventListener("abort", kb)
        }
      }
    }

    function Nb(bb, cb, sb) {
      return new Promise(((Wb, ab) => {
        const Tb = new AbortController,
          Ub = () => {
            Tb.abort(), ab((0, kb.f)(sb))
          };
        if (null !== sb && void 0 !== sb && sb.aborted) return void Ub();
        null === sb || void 0 === sb || sb.addEventListener("abort", Ub, {
          once: !0
        });
        const Ib = nb.map((() => !1));
        let Hb = null;
        const fb = nb.map((() => !1)),
          Mb = nb.map((() => !1));
        nb.forEach(((kb, Xb) => {
          const mb = Cb(Qb, Tb.signal);
          ub(kb, [{
            role: "user",
            content: bb
          }], mb.signal).then((bb => {
            Tb.signal.aborted || ("busy" === bb || "failed" === bb ? (fb[Xb] = "busy" === bb, Mb[Xb] = !0) : null !== bb && (null === Hb || Xb < Hb.rank) && (Hb = {
              rank: Xb,
              answer: {
                text: bb.text,
                model: kb.name
              }
            }, cb(Hb.answer)))
          }), (bb => {
            Tb.signal.aborted || (Mb[Xb] = !0, console.warn(`Studio AI: ${kb.name} couldn't be reached`, bb))
          })).finally((() => {
            mb.clear(), Ib[Xb] = !0, Tb.signal.aborted || (() => {
              var bb, cb;
              const kb = null !== (bb = null === (cb = Hb) || void 0 === cb ? void 0 : cb.rank) && void 0 !== bb ? bb : nb.length;
              Ib.slice(0, kb).includes(!1) || (null === sb || void 0 === sb || sb.removeEventListener("abort", Ub), Tb.abort(), null !== Hb ? Wb({
                ...Hb.answer,
                isFinal: !Mb.slice(0, Hb.rank).includes(!0)
              }) : ab(new eb(fb.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((bb => {
            console.error("Studio AI: showing an answer failed", bb)
          }))
        }))
      }))
    }

    function Vb(bb) {
      var cb, sb;
      return "length" === (null === bb || void 0 === bb || null === (cb = bb.choices) || void 0 === cb || null === (sb = cb[0]) || void 0 === sb ? void 0 : sb.finish_reason)
    }
    async function Lb(bb, cb, sb) {
      const kb = nb.find((cb => cb.name === bb));
      if (void 0 === kb) return "failed";
      const Wb = Cb(Qb, sb);
      try {
        const bb = await ub(kb, cb, Wb.signal);
        return null !== bb && "object" === typeof bb ? bb.isCutOff ? (console.warn(`Studio AI: ${kb.name}'s answer was cut off at the token limit`), null) : {
          text: bb.text
        } : bb
      } finally {
        Wb.clear()
      }
    }
    async function ub(bb, cb, sb) {
      const kb = await fetch(Xb, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: bb.name,
          messages: cb,
          max_tokens: lb,
          temperature: bb.temperature,
          reasoning_effort: bb.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: sb
      });
      if (429 === kb.status) return "busy";
      if (!kb.ok) return console.warn(`Studio AI: ${bb.name} answered ${kb.status}`), "failed";
      const Wb = await kb.json().catch((() => null)),
        ab = function(bb) {
          var cb, sb, kb;
          const Wb = null === bb || void 0 === bb || null === (cb = bb.choices) || void 0 === cb || null === (sb = cb[0]) || void 0 === sb || null === (kb = sb.message) || void 0 === kb ? void 0 : kb.content;
          if ("string" !== typeof Wb) return null;
          const ab = Wb.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === ab ? null : ab
        }(Wb);
      return null !== ab && function(bb) {
        const cb = Mb(bb);
        return cb.length >= fb || cb.some((bb => Ub(bb)))
      }(ab) ? (console.warn(`Studio AI: ${bb.name} thought out loud instead of answering`), "failed") : null === ab ? null : {
        text: ab,
        isCutOff: Vb(Wb)
      }
    }
  },
  6110: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => Qb,
      E: () => Nb,
      F: () => Lb,
      H: () => Cb,
      J: () => Mb,
      L: () => Hb,
      M: () => nb,
      d: () => mb,
      e: () => Ub,
      i: () => Tb,
      k: () => lb,
      l: () => Xb,
      p: () => fb,
      r: () => ab,
      v: () => Wb,
      x: () => Vb,
      y: () => ub
    });
    var kb = sb(4588);
    const Wb = 2e3,
      ab = 2e4;

    function Tb(bb) {
      return bb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Ub(bb) {
      return bb.replace(/\$/g, "\\$")
    }
    const Ib = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Hb(bb, cb) {
      Ib.lastIndex = cb;
      const sb = Ib.exec(bb);
      return sb.index + sb[0].length
    }

    function fb(bb) {
      return (0, kb.u)(bb, /\s+/g, (0, kb.q)(".!?")).flatMap((bb => bb.split("\n")))
    }

    function Mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb;
      const kb = [...bb.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((bb => bb.index)),
        Wb = kb.filter((bb => bb < cb)),
        ab = kb.find((bb => bb >= sb));
      return [0 === Wb.length ? 0 : Wb.at(-1) + 1, void 0 === ab ? bb.length : ab + 1]
    }

    function Xb(bb, cb) {
      const sb = bb.charCodeAt(cb - 1);
      return bb.slice(0, cb > 0 && cb < bb.length && sb >= 55296 && sb <= 56319 ? cb - 1 : cb)
    }

    function nb(bb, cb) {
      return `${cb}${bb.replace(/\\/g,"\\\\").split(cb).join(`\\${cb}`)}${cb}`
    }

    function mb(bb) {
      return bb.charAt(0).toUpperCase() + bb.slice(1)
    }

    function lb(bb) {
      return Math.round(bb).toLocaleString("en-US")
    }

    function Qb(bb) {
      return bb.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((bb => "" !== bb))
    }
    const eb = 3;

    function Cb(bb, cb) {
      return Qb(bb).filter((bb => bb.length >= eb && !/\d/.test(bb))).map((bb => `${bb} ${cb}`))
    }

    function Nb(bb) {
      return bb.split(/[\s:_]+/).filter((bb => "" !== bb)).map(Tb).join("[`:_\\s]+")
    }

    function Vb(bb) {
      return Qb(bb.split(".").pop())
    }

    function Lb(bb) {
      return bb.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function ub(bb) {
      let cb = null;
      return () => {
        const sb = cb ??= bb();
        return sb.catch((() => {
          cb === sb && (cb = null)
        })), sb
      }
    }
  },
  4588: (bb, cb, sb) => {
    function kb(bb) {
      return {
        notAfter: bb
      }
    }
    sb.d(cb, {
      d: () => Ib,
      e: () => Hb,
      h: () => Ub,
      i: () => kb,
      m: () => Wb,
      o: () => ab,
      q: () => Tb,
      t: () => fb,
      u: () => Mb
    });
    const Wb = kb("\\w$."),
      ab = kb("\\w.,");

    function Tb(bb) {
      return cb => Ib(cb, bb)
    }

    function Ub(bb) {
      return cb => !bb.test(cb.input.slice(0, cb.index))
    }

    function Ib(bb, cb) {
      return bb.index > 0 && new RegExp(`[${cb}]`).test(bb.input[bb.index - 1])
    }

    function Hb(bb, cb, sb) {
      return function(bb) {
        return void 0 !== bb && "function" !== typeof bb
      }(sb) ? function(bb, cb, sb) {
        const kb = cb.flags.replace(/[gy]/g, ""),
          Wb = new RegExp(`[^${sb}](?:${cb.source})`, `${kb}g`),
          ab = [],
          Tb = sb => {
            const kb = sb.index + sb[0].length;
            return ("" === sb[0] ? Xb(bb, cb, kb) : kb) - 1
          },
          Ub = new RegExp(`(?:${cb.source})`, `${kb}y`).exec(bb);
        if (Ub) {
          if (ab.push(Ub), !cb.global) return ab;
          Wb.lastIndex = Tb(Ub)
        }
        for (let Ib = Wb.exec(bb); Ib; Ib = Wb.exec(bb)) {
          const sb = Xb(bb, cb, Ib.index) - Ib.index;
          if (Ib[0] = Ib[0].slice(sb), Ib.index += sb, ab.push(Ib), !cb.global) break;
          Wb.lastIndex = Tb(Ib)
        }
        return ab
      }(bb, cb, sb.notAfter) : function(bb, cb, sb) {
        const kb = new RegExp(cb.source, `${cb.flags.replace(/[gy]/g,"")}g`),
          Wb = [];
        for (let ab = kb.exec(bb); ab; ab = kb.exec(bb))
          if (!sb || sb(ab)) {
            if (Wb.push(ab), !cb.global) break;
            "" === ab[0] && (kb.lastIndex = Xb(bb, cb, kb.lastIndex))
          } else kb.lastIndex = Xb(bb, cb, ab.index);
        return Wb
      }(bb, cb, sb)
    }

    function fb(bb, cb, sb, kb) {
      let Wb = "",
        ab = 0;
      for (const Tb of Hb(bb, cb, sb)) Wb += bb.slice(ab, Tb.index) + kb(Tb), ab = Tb.index + Tb[0].length;
      return Wb + bb.slice(ab)
    }

    function Mb(bb, cb, sb) {
      const kb = [];
      let Wb = 0;
      for (const ab of Hb(bb, cb, sb)) kb.push(bb.slice(Wb, ab.index)), Wb = ab.index + ab[0].length;
      return [...kb, bb.slice(Wb)]
    }

    function Xb(bb, cb, sb) {
      var kb;
      return sb + (cb.unicode && (null !== (kb = bb.codePointAt(sb)) && void 0 !== kb ? kb : 0) > 65535 ? 2 : 1)
    }
  },
  6150: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);