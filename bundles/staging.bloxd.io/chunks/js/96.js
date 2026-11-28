export const id = 96;
export const ids = [96];
export const modules = {
  5629: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => tb,
      E: () => Ub,
      b: () => eb,
      d: () => Vb,
      g: () => Fb,
      k: () => Eb,
      n: () => gb,
      q: () => Hb,
      s: () => pb,
      w: () => Cb
    });
    const eb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Hb(bb) {
      try {
        return decodeURIComponent(bb.slice(1))
      } catch {
        return bb.slice(1)
      }
    }

    function pb(bb) {
      return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Vb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${eb.source}`, "g");

    function gb(bb, wb) {
      return 2 === bb.length ? wb.replace(/^ (.*) $/, "$1") : wb
    }

    function lb(bb) {
      return "" === bb.trim()
    }

    function Lb(bb) {
      const wb = [];
      for (const Mb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) wb.length > 0 && wb[wb.length - 1].endsWith("\\") ? wb[wb.length - 1] += `|${Mb}` : wb.push(Mb);
      return wb.map((bb => bb.trim().replaceAll("\\|", "|")))
    }
    const Ib = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Ob(bb) {
      const wb = [],
        Mb = [{
          indent: -1,
          items: wb
        }];
      let eb = null;
      for (const Hb of bb) {
        const bb = Hb.match(Ib);
        if (!bb) {
          eb && (eb.text += ` ${Hb.trim()}`);
          continue
        }
        const wb = bb[1].replace(/\t/g, "  ").length;
        for (; wb <= Mb[Mb.length - 1].indent;) Mb.pop();
        eb = {
          text: bb[3].trim(),
          children: []
        }, Mb[Mb.length - 1].items.push(eb), Mb.push({
          indent: wb,
          items: eb.children
        })
      }
      return wb
    }

    function Ub(bb) {
      const wb = bb.replace(/\r\n/g, "\n").split("\n"),
        Mb = [];
      let eb = 0;
      for (; eb < wb.length;) {
        const bb = wb[eb];
        if (lb(bb)) {
          eb++;
          continue
        }
        const Hb = bb.match(/^\s*```\s*(\w*)\s*$/);
        if (Hb) {
          const bb = [];
          for (eb++; eb < wb.length && !/^\s*```\s*$/.test(wb[eb]);) bb.push(wb[eb]), eb++;
          eb++, Mb.push({
            kind: "code",
            lang: Hb[1] || "text",
            code: bb.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Vb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Vb) {
          const bb = Vb[2].trim();
          Mb.push({
            kind: "heading",
            level: Vb[1].length,
            text: bb,
            anchor: pb(bb)
          }), eb++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
          Mb.push({
            kind: "rule"
          }), eb++;
          continue
        }
        if (bb.trim().startsWith("|") && eb + 1 < wb.length && /^\s*\|[\s:|-]+\|\s*$/.test(wb[eb + 1])) {
          const Hb = Lb(bb),
            pb = [];
          for (eb += 2; eb < wb.length && wb[eb].trim().startsWith("|");) pb.push(Lb(wb[eb])), eb++;
          Mb.push({
            kind: "table",
            header: Hb,
            rows: pb
          });
          continue
        }
        if (bb.startsWith(">")) {
          const bb = [];
          for (; eb < wb.length && wb[eb].startsWith(">");) bb.push(wb[eb].replace(/^>\s?/, "")), eb++;
          Mb.push({
            kind: "quote",
            blocks: Ub(bb.join("\n"))
          });
          continue
        }
        if (Ib.test(bb)) {
          const Hb = [],
            pb = /^\s*\d+\./.test(bb);
          for (; eb < wb.length && !lb(wb[eb]) && (Ib.test(wb[eb]) || /^\s+\S/.test(wb[eb]));) Hb.push(wb[eb]), eb++;
          Mb.push({
            kind: "list",
            ordered: pb,
            items: Ob(Hb)
          });
          continue
        }
        const gb = [];
        for (; eb < wb.length && !lb(wb[eb]) && !/^\s*```/.test(wb[eb]) && !/^#{1,6}\s/.test(wb[eb]) && !wb[eb].startsWith(">") && !Ib.test(wb[eb]) && (!wb[eb].trim().startsWith("|") || 0 !== gb.length);) gb.push(wb[eb].trim()), eb++;
        0 === gb.length && (gb.push(wb[eb].trim()), eb++), Mb.push({
          kind: "paragraph",
          text: gb.join(" ")
        })
      }
      return Mb
    }

    function tb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Mb = Ub(bb);
      let eb = "";
      const Hb = [],
        pb = [],
        Vb = new Map;
      for (const Lb of Mb) {
        if ("heading" === Lb.kind) {
          var gb;
          const bb = (null !== (gb = Vb.get(Lb.anchor)) && void 0 !== gb ? gb : 0) + 1;
          Vb.set(Lb.anchor, bb), bb > 1 && (Lb.anchor = `${Lb.anchor}-${bb}`)
        }
        if ("heading" === Lb.kind && 1 === Lb.level && !eb) {
          eb = Lb.text;
          continue
        }
        if ("heading" === Lb.kind && Lb.level <= wb) {
          pb.push({
            heading: Lb,
            blocks: []
          });
          continue
        }
        const bb = pb.at(-1);
        bb ? bb.blocks.push(Lb) : Hb.push(Lb)
      }
      const lb = bb => {
        for (;
          "rule" === (null === (wb = bb.at(-1)) || void 0 === wb ? void 0 : wb.kind);) {
          var wb;
          bb.pop()
        }
      };
      lb(Hb);
      for (const Lb of pb) lb(Lb.blocks);
      return {
        title: eb,
        intro: Hb,
        sections: pb
      }
    }

    function Cb(bb) {
      return [{
        heading: null,
        blocks: bb.intro
      }, ...bb.sections.map((bb => ({
        heading: bb.heading,
        blocks: bb.blocks
      })))]
    }

    function Eb(bb) {
      return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? Eb(bb.blocks) : []))
    }

    function Fb(bb) {
      switch (bb.kind) {
        case "heading":
        case "paragraph":
          return bb.text;
        case "code":
          return bb.code;
        case "table":
          return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
        case "list": {
          const wb = bb => bb.map((bb => `${bb.text} ${wb(bb.children)}`)).join(" ");
          return wb(bb.items)
        }
        case "quote":
          return bb.blocks.map(Fb).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7661: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ob,
      g: () => Vb,
      j: () => gb
    });
    Mb(7653);
    var eb = Mb(64),
      Hb = Mb(5629),
      pb = Mb(1364);
    const Vb = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function gb(bb, wb) {
      return bb === wb ? bb : `${bb} (${wb})`
    }

    function lb(bb) {
      const wb = [];
      let Mb = 0;
      for (const eb of bb.matchAll(Vb)) {
        eb.index > Mb && wb.push(bb.slice(Mb, eb.index));
        const [, Hb, Vb, lb, Lb, Ib, Ob] = eb;
        void 0 !== Hb ? wb.push(gb(Hb, Vb)) : void 0 !== lb || void 0 !== Lb ? wb.push((0, pb.jsx)("strong", {
          children: null !== lb && void 0 !== lb ? lb : Lb
        }, eb.index)) : void 0 !== Ib ? wb.push((0, pb.jsx)("em", {
          children: Ib
        }, eb.index)) : wb.push((0, pb.jsx)("code", {
          children: Ob
        }, eb.index)), Mb = eb.index + eb[0].length
      }
      return Mb < bb.length && wb.push(bb.slice(Mb)), wb
    }

    function Lb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const eb = bb.map(((bb, wb) => (0, pb.jsxs)("li", {
        children: [lb(bb.text), bb.children.length > 0 && Lb(bb.children, !1)]
      }, wb)));
      return wb ? (0, pb.jsx)("ol", {
        start: Mb,
        children: eb
      }) : (0, pb.jsx)("ul", {
        children: eb
      })
    }

    function Ib(bb, wb) {
      switch (bb.kind) {
        case "heading":
          return bb.level <= 2 ? (0, pb.jsx)("h3", {
            children: lb(bb.text)
          }, wb) : (0, pb.jsx)("h4", {
            children: lb(bb.text)
          }, wb);
        case "paragraph":
          return (0, pb.jsx)("p", {
            children: lb(bb.text)
          }, wb);
        case "list":
          return (0, pb.jsx)(eb.Fragment, {
            children: Lb(bb.items, bb.ordered)
          }, wb);
        case "quote":
          return (0, pb.jsx)("blockquote", {
            children: bb.blocks.map(((bb, wb) => Ib(bb, wb)))
          }, wb);
        case "code":
          return (0, pb.jsx)("pre", {
            children: (0, pb.jsx)("code", {
              children: bb.code
            })
          }, wb);
        case "table":
          return (0, pb.jsxs)("table", {
            children: [(0, pb.jsx)("thead", {
              children: (0, pb.jsx)("tr", {
                children: bb.header.map(((bb, wb) => (0, pb.jsx)("th", {
                  children: lb(bb)
                }, wb)))
              })
            }), (0, pb.jsx)("tbody", {
              children: bb.rows.map(((bb, wb) => (0, pb.jsx)("tr", {
                children: bb.map(((bb, wb) => (0, pb.jsx)("td", {
                  children: lb(bb)
                }, wb)))
              }, wb)))
            })]
          }, wb);
        case "rule":
          return (0, pb.jsx)("hr", {}, wb)
      }
    }

    function Ob(bb) {
      let {
        markdown: wb
      } = bb, Mb = 0;
      return (0, pb.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Hb.E)(wb).map(((bb, wb) => {
          if ("list" !== bb.kind || !bb.ordered) return Mb = 0, Ib(bb, wb);
          const Hb = Mb + 1;
          return Mb += bb.items.length, (0, pb.jsx)(eb.Fragment, {
            children: Lb(bb.items, !0, Hb)
          }, wb)
        }))
      })
    }
  },
  7645: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => sb,
      g: () => mb,
      e: () => zb,
      i: () => Cb
    });
    var eb = Mb(1280),
      Hb = Mb(7613),
      pb = Mb(5773);
    const Vb = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function gb(bb) {
      return (0, pb.d)(bb, Vb, (wb => !/^my/i.test(wb[0]) || !/follow $/i.test(bb.slice(0, wb.index)))).length > 0
    }
    const lb = /\byou(?:r|'re|'ll)?\b/i,
      Lb = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Ib = 2;

    function Ob(bb) {
      return function(bb) {
        const wb = [];
        let Mb = !1;
        for (const eb of bb.split("\n")) {
          if (/^\s*(```|~~~)/.test(eb)) {
            Mb = !Mb;
            continue
          }
          if (Mb || /^\s*>/.test(eb)) continue;
          const bb = eb.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          wb.push(...(0, Hb.r)(bb))
        }
        return wb
      }(bb).filter((bb => gb(bb) || Lb.test(bb) && !lb.test(bb)))
    }
    const Ub = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      tb = [{
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

    function Cb(bb) {
      const wb = tb.findIndex((wb => wb.name === bb));
      return -1 === wb ? tb.length : wb
    }
    const Eb = 2500,
      Fb = 12e4;
    class Bb extends Error {
      constructor(bb) {
        super(`Studio AI chat ${bb}`), this.reason = bb
      }
    }

    function sb(bb, wb) {
      const Mb = new AbortController,
        eb = () => {
          Mb.abort()
        },
        Hb = setTimeout(eb, bb);
      return null !== wb && void 0 !== wb && wb.aborted && eb(), null === wb || void 0 === wb || wb.addEventListener("abort", eb, {
        once: !0
      }), {
        signal: Mb.signal,
        clear: () => {
          clearTimeout(Hb), null === wb || void 0 === wb || wb.removeEventListener("abort", eb)
        }
      }
    }

    function mb(bb, wb, Mb) {
      return new Promise(((Hb, pb) => {
        const Vb = new AbortController,
          gb = () => {
            Vb.abort(), pb((0, eb.h)(Mb))
          };
        if (null !== Mb && void 0 !== Mb && Mb.aborted) return void gb();
        null === Mb || void 0 === Mb || Mb.addEventListener("abort", gb, {
          once: !0
        });
        const lb = tb.map((() => !1));
        let Lb = null;
        const Ib = tb.map((() => !1)),
          Ob = tb.map((() => !1));
        tb.forEach(((eb, Ub) => {
          const Cb = sb(Fb, Vb.signal);
          Xb(eb, [{
            role: "user",
            content: bb
          }], Cb.signal).then((bb => {
            Vb.signal.aborted || ("busy" === bb || "failed" === bb ? (Ib[Ub] = "busy" === bb, Ob[Ub] = !0) : null !== bb && (null === Lb || Ub < Lb.rank) && (Lb = {
              rank: Ub,
              answer: {
                text: bb.text,
                model: eb.name
              }
            }, wb(Lb.answer)))
          }), (bb => {
            Vb.signal.aborted || (Ob[Ub] = !0, console.warn(`Studio AI: ${eb.name} couldn't be reached`, bb))
          })).finally((() => {
            Cb.clear(), lb[Ub] = !0, Vb.signal.aborted || (() => {
              var bb, wb;
              const eb = null !== (bb = null === (wb = Lb) || void 0 === wb ? void 0 : wb.rank) && void 0 !== bb ? bb : tb.length;
              lb.slice(0, eb).includes(!1) || (null === Mb || void 0 === Mb || Mb.removeEventListener("abort", gb), Vb.abort(), null !== Lb ? Hb({
                ...Lb.answer,
                isFinal: !Ob.slice(0, Lb.rank).includes(!0)
              }) : pb(new Bb(Ib.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((bb => {
            console.error("Studio AI: showing an answer failed", bb)
          }))
        }))
      }))
    }

    function hb(bb) {
      var wb, Mb;
      return "length" === (null === bb || void 0 === bb || null === (wb = bb.choices) || void 0 === wb || null === (Mb = wb[0]) || void 0 === Mb ? void 0 : Mb.finish_reason)
    }
    async function zb(bb, wb, Mb) {
      const eb = tb.find((wb => wb.name === bb));
      if (void 0 === eb) return "failed";
      const Hb = sb(Fb, Mb);
      try {
        const bb = await Xb(eb, wb, Hb.signal);
        return null !== bb && "object" === typeof bb ? bb.isCutOff ? (console.warn(`Studio AI: ${eb.name}'s answer was cut off at the token limit`), null) : {
          text: bb.text
        } : bb
      } finally {
        Hb.clear()
      }
    }
    async function Xb(bb, wb, Mb) {
      const eb = await fetch(Ub, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: bb.name,
          messages: wb,
          max_tokens: Eb,
          temperature: bb.temperature,
          reasoning_effort: bb.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Mb
      });
      if (429 === eb.status) return "busy";
      if (!eb.ok) return console.warn(`Studio AI: ${bb.name} answered ${eb.status}`), "failed";
      const Hb = await eb.json().catch((() => null)),
        pb = function(bb) {
          var wb, Mb, eb;
          const Hb = null === bb || void 0 === bb || null === (wb = bb.choices) || void 0 === wb || null === (Mb = wb[0]) || void 0 === Mb || null === (eb = Mb.message) || void 0 === eb ? void 0 : eb.content;
          if ("string" !== typeof Hb) return null;
          const pb = Hb.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === pb ? null : pb
        }(Hb);
      return null !== pb && function(bb) {
        const wb = Ob(bb);
        return wb.length >= Ib || wb.some((bb => gb(bb)))
      }(pb) ? (console.warn(`Studio AI: ${bb.name} thought out loud instead of answering`), "failed") : null === pb ? null : {
        text: pb,
        isCutOff: hb(Hb)
      }
    }
  },
  7613: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Fb,
      D: () => mb,
      E: () => zb,
      I: () => sb,
      M: () => Ob,
      Q: () => Lb,
      U: () => tb,
      e: () => Cb,
      g: () => gb,
      j: () => Vb,
      l: () => Eb,
      o: () => Ub,
      r: () => Ib,
      u: () => pb,
      w: () => Hb,
      x: () => hb,
      z: () => Xb
    });
    var eb = Mb(5773);
    const Hb = 2e3,
      pb = 2e4;

    function Vb(bb) {
      return bb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function gb(bb) {
      return bb.replace(/\$/g, "\\$")
    }
    const lb = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Lb(bb, wb) {
      lb.lastIndex = wb;
      const Mb = lb.exec(bb);
      return Mb.index + Mb[0].length
    }

    function Ib(bb) {
      return (0, eb.v)(bb, /\s+/g, (0, eb.q)(".!?")).flatMap((bb => bb.split("\n")))
    }

    function Ob(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb;
      const eb = [...bb.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((bb => bb.index)),
        Hb = eb.filter((bb => bb < wb)),
        pb = eb.find((bb => bb >= Mb));
      return [0 === Hb.length ? 0 : Hb.at(-1) + 1, void 0 === pb ? bb.length : pb + 1]
    }

    function Ub(bb, wb) {
      const Mb = bb.charCodeAt(wb - 1);
      return bb.slice(0, wb > 0 && wb < bb.length && Mb >= 55296 && Mb <= 56319 ? wb - 1 : wb)
    }

    function tb(bb, wb) {
      return `${wb}${bb.replace(/\\/g,"\\\\").split(wb).join(`\\${wb}`)}${wb}`
    }

    function Cb(bb) {
      return bb.charAt(0).toUpperCase() + bb.slice(1)
    }

    function Eb(bb) {
      return Math.round(bb).toLocaleString("en-US")
    }

    function Fb(bb) {
      return bb.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((bb => "" !== bb))
    }
    const Bb = 3;

    function sb(bb, wb) {
      return Fb(bb).filter((bb => bb.length >= Bb && !/\d/.test(bb))).map((bb => `${bb} ${wb}`))
    }

    function mb(bb) {
      return bb.split(/[\s:_]+/).filter((bb => "" !== bb)).map(Vb).join("[`:_\\s]+")
    }

    function hb(bb) {
      return Fb(bb.split(".").pop())
    }

    function zb(bb) {
      return bb.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Xb(bb) {
      let wb = null;
      return () => {
        const Mb = wb ??= bb();
        return Mb.catch((() => {
          wb === Mb && (wb = null)
        })), Mb
      }
    }
  },
  5773: (bb, wb, Mb) => {
    function eb(bb) {
      return {
        notAfter: bb
      }
    }
    Mb.d(wb, {
      c: () => lb,
      d: () => Lb,
      g: () => gb,
      h: () => eb,
      i: () => Hb,
      m: () => pb,
      q: () => Vb,
      t: () => Ib,
      v: () => Ob
    });
    const Hb = eb("\\w$."),
      pb = eb("\\w.,");

    function Vb(bb) {
      return wb => lb(wb, bb)
    }

    function gb(bb) {
      return wb => !bb.test(wb.input.slice(0, wb.index))
    }

    function lb(bb, wb) {
      return bb.index > 0 && new RegExp(`[${wb}]`).test(bb.input[bb.index - 1])
    }

    function Lb(bb, wb, Mb) {
      return function(bb) {
        return void 0 !== bb && "function" !== typeof bb
      }(Mb) ? function(bb, wb, Mb) {
        const eb = wb.flags.replace(/[gy]/g, ""),
          Hb = new RegExp(`[^${Mb}](?:${wb.source})`, `${eb}g`),
          pb = [],
          Vb = Mb => {
            const eb = Mb.index + Mb[0].length;
            return ("" === Mb[0] ? Ub(bb, wb, eb) : eb) - 1
          },
          gb = new RegExp(`(?:${wb.source})`, `${eb}y`).exec(bb);
        if (gb) {
          if (pb.push(gb), !wb.global) return pb;
          Hb.lastIndex = Vb(gb)
        }
        for (let lb = Hb.exec(bb); lb; lb = Hb.exec(bb)) {
          const Mb = Ub(bb, wb, lb.index) - lb.index;
          if (lb[0] = lb[0].slice(Mb), lb.index += Mb, pb.push(lb), !wb.global) break;
          Hb.lastIndex = Vb(lb)
        }
        return pb
      }(bb, wb, Mb.notAfter) : function(bb, wb, Mb) {
        const eb = new RegExp(wb.source, `${wb.flags.replace(/[gy]/g,"")}g`),
          Hb = [];
        for (let pb = eb.exec(bb); pb; pb = eb.exec(bb))
          if (!Mb || Mb(pb)) {
            if (Hb.push(pb), !wb.global) break;
            "" === pb[0] && (eb.lastIndex = Ub(bb, wb, eb.lastIndex))
          } else eb.lastIndex = Ub(bb, wb, pb.index);
        return Hb
      }(bb, wb, Mb)
    }

    function Ib(bb, wb, Mb, eb) {
      let Hb = "",
        pb = 0;
      for (const Vb of Lb(bb, wb, Mb)) Hb += bb.slice(pb, Vb.index) + eb(Vb), pb = Vb.index + Vb[0].length;
      return Hb + bb.slice(pb)
    }

    function Ob(bb, wb, Mb) {
      const eb = [];
      let Hb = 0;
      for (const pb of Lb(bb, wb, Mb)) eb.push(bb.slice(Hb, pb.index)), Hb = pb.index + pb[0].length;
      return [...eb, bb.slice(Hb)]
    }

    function Ub(bb, wb, Mb) {
      var eb;
      return Mb + (wb.unicode && (null !== (eb = bb.codePointAt(Mb)) && void 0 !== eb ? eb : 0) > 65535 ? 2 : 1)
    }
  },
  7653: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);