export const id = 78;
export const ids = [78];
export const modules = {
  4507: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      f: () => Ub,
      i: () => ob,
      j: () => pb,
      n: () => Lb,
      r: () => Ob,
      s: () => Gb,
      v: () => Xb,
      x: () => Zb,
      y: () => wb
    });
    const Bb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Ob(bb) {
      try {
        return decodeURIComponent(bb.slice(1))
      } catch {
        return bb.slice(1)
      }
    }

    function Gb(bb) {
      return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Ub = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Bb.source}`, "g");

    function Lb(bb, ub) {
      return 2 === bb.length ? ub.replace(/^ (.*) $/, "$1") : ub
    }

    function Yb(bb) {
      return "" === bb.trim()
    }

    function Sb(bb) {
      const ub = [];
      for (const hb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ub.length > 0 && ub[ub.length - 1].endsWith("\\") ? ub[ub.length - 1] += `|${hb}` : ub.push(hb);
      return ub.map((bb => bb.trim().replaceAll("\\|", "|")))
    }
    const ab = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Hb(bb) {
      const ub = [],
        hb = [{
          indent: -1,
          items: ub
        }];
      let Bb = null;
      for (const Ob of bb) {
        const bb = Ob.match(ab);
        if (!bb) {
          Bb && (Bb.text += ` ${Ob.trim()}`);
          continue
        }
        const ub = bb[1].replace(/\t/g, "  ").length;
        for (; ub <= hb[hb.length - 1].indent;) hb.pop();
        Bb = {
          text: bb[3].trim(),
          children: []
        }, hb[hb.length - 1].items.push(Bb), hb.push({
          indent: ub,
          items: Bb.children
        })
      }
      return ub
    }

    function wb(bb) {
      const ub = bb.replace(/\r\n/g, "\n").split("\n"),
        hb = [];
      let Bb = 0;
      for (; Bb < ub.length;) {
        const bb = ub[Bb];
        if (Yb(bb)) {
          Bb++;
          continue
        }
        const Ob = bb.match(/^\s*```\s*(\w*)\s*$/);
        if (Ob) {
          const bb = [];
          for (Bb++; Bb < ub.length && !/^\s*```\s*$/.test(ub[Bb]);) bb.push(ub[Bb]), Bb++;
          Bb++, hb.push({
            kind: "code",
            lang: Ob[1] || "text",
            code: bb.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Ub = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Ub) {
          const bb = Ub[2].trim();
          hb.push({
            kind: "heading",
            level: Ub[1].length,
            text: bb,
            anchor: Gb(bb)
          }), Bb++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
          hb.push({
            kind: "rule"
          }), Bb++;
          continue
        }
        if (bb.trim().startsWith("|") && Bb + 1 < ub.length && /^\s*\|[\s:|-]+\|\s*$/.test(ub[Bb + 1])) {
          const Ob = Sb(bb),
            Gb = [];
          for (Bb += 2; Bb < ub.length && ub[Bb].trim().startsWith("|");) Gb.push(Sb(ub[Bb])), Bb++;
          hb.push({
            kind: "table",
            header: Ob,
            rows: Gb
          });
          continue
        }
        if (bb.startsWith(">")) {
          const bb = [];
          for (; Bb < ub.length && ub[Bb].startsWith(">");) bb.push(ub[Bb].replace(/^>\s?/, "")), Bb++;
          hb.push({
            kind: "quote",
            blocks: wb(bb.join("\n"))
          });
          continue
        }
        if (ab.test(bb)) {
          const Ob = [],
            Gb = /^\s*\d+\./.test(bb);
          for (; Bb < ub.length && !Yb(ub[Bb]) && (ab.test(ub[Bb]) || /^\s+\S/.test(ub[Bb]));) Ob.push(ub[Bb]), Bb++;
          hb.push({
            kind: "list",
            ordered: Gb,
            items: Hb(Ob)
          });
          continue
        }
        const Lb = [];
        for (; Bb < ub.length && !Yb(ub[Bb]) && !/^\s*```/.test(ub[Bb]) && !/^#{1,6}\s/.test(ub[Bb]) && !ub[Bb].startsWith(">") && !ab.test(ub[Bb]) && (!ub[Bb].trim().startsWith("|") || 0 !== Lb.length);) Lb.push(ub[Bb].trim()), Bb++;
        0 === Lb.length && (Lb.push(ub[Bb].trim()), Bb++), hb.push({
          kind: "paragraph",
          text: Lb.join(" ")
        })
      }
      return hb
    }

    function Zb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const hb = wb(bb);
      let Bb = "";
      const Ob = [],
        Gb = [],
        Ub = new Map;
      for (const Sb of hb) {
        if ("heading" === Sb.kind) {
          var Lb;
          const bb = (null !== (Lb = Ub.get(Sb.anchor)) && void 0 !== Lb ? Lb : 0) + 1;
          Ub.set(Sb.anchor, bb), bb > 1 && (Sb.anchor = `${Sb.anchor}-${bb}`)
        }
        if ("heading" === Sb.kind && 1 === Sb.level && !Bb) {
          Bb = Sb.text;
          continue
        }
        if ("heading" === Sb.kind && Sb.level <= ub) {
          Gb.push({
            heading: Sb,
            blocks: []
          });
          continue
        }
        const bb = Gb.at(-1);
        bb ? bb.blocks.push(Sb) : Ob.push(Sb)
      }
      const Yb = bb => {
        for (;
          "rule" === (null === (ub = bb.at(-1)) || void 0 === ub ? void 0 : ub.kind);) {
          var ub;
          bb.pop()
        }
      };
      Yb(Ob);
      for (const Sb of Gb) Yb(Sb.blocks);
      return {
        title: Bb,
        intro: Ob,
        sections: Gb
      }
    }

    function Xb(bb) {
      return [{
        heading: null,
        blocks: bb.intro
      }, ...bb.sections.map((bb => ({
        heading: bb.heading,
        blocks: bb.blocks
      })))]
    }

    function pb(bb) {
      return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? pb(bb.blocks) : []))
    }

    function ob(bb) {
      switch (bb.kind) {
        case "heading":
        case "paragraph":
          return bb.text;
        case "code":
          return bb.code;
        case "table":
          return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
        case "list": {
          const ub = bb => bb.map((bb => `${bb.text} ${ub(bb.children)}`)).join(" ");
          return ub(bb.items)
        }
        case "quote":
          return bb.blocks.map(ob).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6229: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Hb,
      d: () => Ub,
      f: () => Lb
    });
    hb(6227);
    var Bb = hb(49),
      Ob = hb(4507),
      Gb = hb(1007);
    const Ub = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Lb(bb, ub) {
      return bb === ub ? bb : `${bb} (${ub})`
    }

    function Yb(bb) {
      const ub = [];
      let hb = 0;
      for (const Bb of bb.matchAll(Ub)) {
        Bb.index > hb && ub.push(bb.slice(hb, Bb.index));
        const [, Ob, Ub, Yb, Sb, ab, Hb] = Bb;
        void 0 !== Ob ? ub.push(Lb(Ob, Ub)) : void 0 !== Yb || void 0 !== Sb ? ub.push((0, Gb.jsx)("strong", {
          children: null !== Yb && void 0 !== Yb ? Yb : Sb
        }, Bb.index)) : void 0 !== ab ? ub.push((0, Gb.jsx)("em", {
          children: ab
        }, Bb.index)) : ub.push((0, Gb.jsx)("code", {
          children: Hb
        }, Bb.index)), hb = Bb.index + Bb[0].length
      }
      return hb < bb.length && ub.push(bb.slice(hb)), ub
    }

    function Sb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Bb = bb.map(((bb, ub) => (0, Gb.jsxs)("li", {
        children: [Yb(bb.text), bb.children.length > 0 && Sb(bb.children, !1)]
      }, ub)));
      return ub ? (0, Gb.jsx)("ol", {
        start: hb,
        children: Bb
      }) : (0, Gb.jsx)("ul", {
        children: Bb
      })
    }

    function ab(bb, ub) {
      switch (bb.kind) {
        case "heading":
          return bb.level <= 2 ? (0, Gb.jsx)("h3", {
            children: Yb(bb.text)
          }, ub) : (0, Gb.jsx)("h4", {
            children: Yb(bb.text)
          }, ub);
        case "paragraph":
          return (0, Gb.jsx)("p", {
            children: Yb(bb.text)
          }, ub);
        case "list":
          return (0, Gb.jsx)(Bb.Fragment, {
            children: Sb(bb.items, bb.ordered)
          }, ub);
        case "quote":
          return (0, Gb.jsx)("blockquote", {
            children: bb.blocks.map(((bb, ub) => ab(bb, ub)))
          }, ub);
        case "code":
          return (0, Gb.jsx)("pre", {
            children: (0, Gb.jsx)("code", {
              children: bb.code
            })
          }, ub);
        case "table":
          return (0, Gb.jsxs)("table", {
            children: [(0, Gb.jsx)("thead", {
              children: (0, Gb.jsx)("tr", {
                children: bb.header.map(((bb, ub) => (0, Gb.jsx)("th", {
                  children: Yb(bb)
                }, ub)))
              })
            }), (0, Gb.jsx)("tbody", {
              children: bb.rows.map(((bb, ub) => (0, Gb.jsx)("tr", {
                children: bb.map(((bb, ub) => (0, Gb.jsx)("td", {
                  children: Yb(bb)
                }, ub)))
              }, ub)))
            })]
          }, ub);
        case "rule":
          return (0, Gb.jsx)("hr", {}, ub)
      }
    }

    function Hb(bb) {
      let {
        markdown: ub
      } = bb, hb = 0;
      return (0, Gb.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Ob.y)(ub).map(((bb, ub) => {
          if ("list" !== bb.kind || !bb.ordered) return hb = 0, ab(bb, ub);
          const Ob = hb + 1;
          return hb += bb.items.length, (0, Gb.jsx)(Bb.Fragment, {
            children: Sb(bb.items, !0, Ob)
          }, ub)
        }))
      })
    }
  },
  6218: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => lb,
      j: () => Kb,
      g: () => Cb,
      k: () => Xb
    });
    var Bb = hb(1713),
      Ob = hb(6183),
      Gb = hb(4637);
    const Ub = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Lb(bb) {
      return (0, Gb.f)(bb, Ub, (ub => !/^my/i.test(ub[0]) || !/follow $/i.test(bb.slice(0, ub.index)))).length > 0
    }
    const Yb = /\byou(?:r|'re|'ll)?\b/i,
      Sb = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      ab = 2;

    function Hb(bb) {
      return function(bb) {
        const ub = [];
        let hb = !1;
        for (const Bb of bb.split("\n")) {
          if (/^\s*(```|~~~)/.test(Bb)) {
            hb = !hb;
            continue
          }
          if (hb || /^\s*>/.test(Bb)) continue;
          const bb = Bb.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          ub.push(...(0, Ob.o)(bb))
        }
        return ub
      }(bb).filter((bb => Lb(bb) || Sb.test(bb) && !Yb.test(bb)))
    }
    const wb = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Zb = [{
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

    function Xb(bb) {
      const ub = Zb.findIndex((ub => ub.name === bb));
      return -1 === ub ? Zb.length : ub
    }
    const pb = 2500,
      ob = 12e4;
    class Ab extends Error {
      constructor(bb) {
        super(`Studio AI chat ${bb}`), this.reason = bb
      }
    }

    function lb(bb, ub) {
      const hb = new AbortController,
        Bb = () => {
          hb.abort()
        },
        Ob = setTimeout(Bb, bb);
      return null !== ub && void 0 !== ub && ub.aborted && Bb(), null === ub || void 0 === ub || ub.addEventListener("abort", Bb, {
        once: !0
      }), {
        signal: hb.signal,
        clear: () => {
          clearTimeout(Ob), null === ub || void 0 === ub || ub.removeEventListener("abort", Bb)
        }
      }
    }

    function Kb(bb, ub, hb) {
      return new Promise(((Ob, Gb) => {
        const Ub = new AbortController,
          Lb = () => {
            Ub.abort(), Gb((0, Bb.f)(hb))
          };
        if (null !== hb && void 0 !== hb && hb.aborted) return void Lb();
        null === hb || void 0 === hb || hb.addEventListener("abort", Lb, {
          once: !0
        });
        const Yb = Zb.map((() => !1));
        let Sb = null;
        const ab = Zb.map((() => !1)),
          Hb = Zb.map((() => !1));
        Zb.forEach(((Bb, wb) => {
          const Xb = lb(ob, Ub.signal);
          db(Bb, [{
            role: "user",
            content: bb
          }], Xb.signal).then((bb => {
            Ub.signal.aborted || ("busy" === bb || "failed" === bb ? (ab[wb] = "busy" === bb, Hb[wb] = !0) : null !== bb && (null === Sb || wb < Sb.rank) && (Sb = {
              rank: wb,
              answer: {
                text: bb.text,
                model: Bb.name
              }
            }, ub(Sb.answer)))
          }), (bb => {
            Ub.signal.aborted || (Hb[wb] = !0, console.warn(`Studio AI: ${Bb.name} couldn't be reached`, bb))
          })).finally((() => {
            Xb.clear(), Yb[wb] = !0, Ub.signal.aborted || (() => {
              var bb, ub;
              const Bb = null !== (bb = null === (ub = Sb) || void 0 === ub ? void 0 : ub.rank) && void 0 !== bb ? bb : Zb.length;
              Yb.slice(0, Bb).includes(!1) || (null === hb || void 0 === hb || hb.removeEventListener("abort", Lb), Ub.abort(), null !== Sb ? Ob({
                ...Sb.answer,
                isFinal: !Hb.slice(0, Sb.rank).includes(!0)
              }) : Gb(new Ab(ab.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((bb => {
            console.error("Studio AI: showing an answer failed", bb)
          }))
        }))
      }))
    }

    function Wb(bb) {
      var ub, hb;
      return "length" === (null === bb || void 0 === bb || null === (ub = bb.choices) || void 0 === ub || null === (hb = ub[0]) || void 0 === hb ? void 0 : hb.finish_reason)
    }
    async function Cb(bb, ub, hb) {
      const Bb = Zb.find((ub => ub.name === bb));
      if (void 0 === Bb) return "failed";
      const Ob = lb(ob, hb);
      try {
        const bb = await db(Bb, ub, Ob.signal);
        return null !== bb && "object" === typeof bb ? bb.isCutOff ? (console.warn(`Studio AI: ${Bb.name}'s answer was cut off at the token limit`), null) : {
          text: bb.text
        } : bb
      } finally {
        Ob.clear()
      }
    }
    async function db(bb, ub, hb) {
      const Bb = await fetch(wb, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: bb.name,
          messages: ub,
          max_tokens: pb,
          temperature: bb.temperature,
          reasoning_effort: bb.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: hb
      });
      if (429 === Bb.status) return "busy";
      if (!Bb.ok) return console.warn(`Studio AI: ${bb.name} answered ${Bb.status}`), "failed";
      const Ob = await Bb.json().catch((() => null)),
        Gb = function(bb) {
          var ub, hb, Bb;
          const Ob = null === bb || void 0 === bb || null === (ub = bb.choices) || void 0 === ub || null === (hb = ub[0]) || void 0 === hb || null === (Bb = hb.message) || void 0 === Bb ? void 0 : Bb.content;
          if ("string" !== typeof Ob) return null;
          const Gb = Ob.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Gb ? null : Gb
        }(Ob);
      return null !== Gb && function(bb) {
        const ub = Hb(bb);
        return ub.length >= ab || ub.some((bb => Lb(bb)))
      }(Gb) ? (console.warn(`Studio AI: ${bb.name} thought out loud instead of answering`), "failed") : null === Gb ? null : {
        text: Gb,
        isCutOff: Wb(Ob)
      }
    }
  },
  6183: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => db,
      E: () => ob,
      H: () => Kb,
      I: () => Cb,
      J: () => lb,
      N: () => Hb,
      R: () => Sb,
      V: () => Zb,
      b: () => Xb,
      f: () => Lb,
      i: () => Ub,
      l: () => pb,
      m: () => wb,
      o: () => ab,
      r: () => Gb,
      v: () => Ob,
      z: () => Wb
    });
    var Bb = hb(4637);
    const Ob = 2e3,
      Gb = 2e4;

    function Ub(bb) {
      return bb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Lb(bb) {
      return bb.replace(/\$/g, "\\$")
    }
    const Yb = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Sb(bb, ub) {
      Yb.lastIndex = ub;
      const hb = Yb.exec(bb);
      return hb.index + hb[0].length
    }

    function ab(bb) {
      return (0, Bb.z)(bb, /\s+/g, (0, Bb.r)(".!?")).flatMap((bb => bb.split("\n")))
    }

    function Hb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub;
      const Bb = [...bb.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((bb => bb.index)),
        Ob = Bb.filter((bb => bb < ub)),
        Gb = Bb.find((bb => bb >= hb));
      return [0 === Ob.length ? 0 : Ob.at(-1) + 1, void 0 === Gb ? bb.length : Gb + 1]
    }

    function wb(bb, ub) {
      const hb = bb.charCodeAt(ub - 1);
      return bb.slice(0, ub > 0 && ub < bb.length && hb >= 55296 && hb <= 56319 ? ub - 1 : ub)
    }

    function Zb(bb, ub) {
      return `${ub}${bb.replace(/\\/g,"\\\\").split(ub).join(`\\${ub}`)}${ub}`
    }

    function Xb(bb) {
      return bb.charAt(0).toUpperCase() + bb.slice(1)
    }

    function pb(bb) {
      return Math.round(bb).toLocaleString("en-US")
    }

    function ob(bb) {
      return bb.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((bb => "" !== bb))
    }
    const Ab = 3;

    function lb(bb, ub) {
      return ob(bb).filter((bb => bb.length >= Ab && !/\d/.test(bb))).map((bb => `${bb} ${ub}`))
    }

    function Kb(bb) {
      return bb.split(/[\s:_]+/).filter((bb => "" !== bb)).map(Ub).join("[`:_\\s]+")
    }

    function Wb(bb) {
      return ob(bb.split(".").pop())
    }

    function Cb(bb) {
      return bb.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function db(bb) {
      let ub = null;
      return () => {
        const hb = ub ??= bb();
        return hb.catch((() => {
          ub === hb && (ub = null)
        })), hb
      }
    }
  },
  4637: (bb, ub, hb) => {
    function Bb(bb) {
      return {
        notAfter: bb
      }
    }
    hb.d(ub, {
      b: () => Yb,
      f: () => Sb,
      i: () => Lb,
      j: () => Bb,
      m: () => Ob,
      p: () => Gb,
      r: () => Ub,
      v: () => ab,
      z: () => Hb
    });
    const Ob = Bb("\\w$."),
      Gb = Bb("\\w.,");

    function Ub(bb) {
      return ub => Yb(ub, bb)
    }

    function Lb(bb) {
      return ub => !bb.test(ub.input.slice(0, ub.index))
    }

    function Yb(bb, ub) {
      return bb.index > 0 && new RegExp(`[${ub}]`).test(bb.input[bb.index - 1])
    }

    function Sb(bb, ub, hb) {
      return function(bb) {
        return void 0 !== bb && "function" !== typeof bb
      }(hb) ? function(bb, ub, hb) {
        const Bb = ub.flags.replace(/[gy]/g, ""),
          Ob = new RegExp(`[^${hb}](?:${ub.source})`, `${Bb}g`),
          Gb = [],
          Ub = hb => {
            const Bb = hb.index + hb[0].length;
            return ("" === hb[0] ? wb(bb, ub, Bb) : Bb) - 1
          },
          Lb = new RegExp(`(?:${ub.source})`, `${Bb}y`).exec(bb);
        if (Lb) {
          if (Gb.push(Lb), !ub.global) return Gb;
          Ob.lastIndex = Ub(Lb)
        }
        for (let Yb = Ob.exec(bb); Yb; Yb = Ob.exec(bb)) {
          const hb = wb(bb, ub, Yb.index) - Yb.index;
          if (Yb[0] = Yb[0].slice(hb), Yb.index += hb, Gb.push(Yb), !ub.global) break;
          Ob.lastIndex = Ub(Yb)
        }
        return Gb
      }(bb, ub, hb.notAfter) : function(bb, ub, hb) {
        const Bb = new RegExp(ub.source, `${ub.flags.replace(/[gy]/g,"")}g`),
          Ob = [];
        for (let Gb = Bb.exec(bb); Gb; Gb = Bb.exec(bb))
          if (!hb || hb(Gb)) {
            if (Ob.push(Gb), !ub.global) break;
            "" === Gb[0] && (Bb.lastIndex = wb(bb, ub, Bb.lastIndex))
          } else Bb.lastIndex = wb(bb, ub, Gb.index);
        return Ob
      }(bb, ub, hb)
    }

    function ab(bb, ub, hb, Bb) {
      let Ob = "",
        Gb = 0;
      for (const Ub of Sb(bb, ub, hb)) Ob += bb.slice(Gb, Ub.index) + Bb(Ub), Gb = Ub.index + Ub[0].length;
      return Ob + bb.slice(Gb)
    }

    function Hb(bb, ub, hb) {
      const Bb = [];
      let Ob = 0;
      for (const Gb of Sb(bb, ub, hb)) Bb.push(bb.slice(Ob, Gb.index)), Ob = Gb.index + Gb[0].length;
      return [...Bb, bb.slice(Ob)]
    }

    function wb(bb, ub, hb) {
      var Bb;
      return hb + (ub.unicode && (null !== (Bb = bb.codePointAt(hb)) && void 0 !== Bb ? Bb : 0) > 65535 ? 2 : 1)
    }
  },
  6227: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);