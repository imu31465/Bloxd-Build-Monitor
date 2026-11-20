export const id = 77;
export const ids = [77];
export const modules = {
  4420: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      e: () => Eb,
      i: () => kb,
      m: () => Rb,
      o: () => Yb,
      p: () => Mb,
      r: () => Tb,
      u: () => jb,
      v: () => Xb,
      z: () => Pb
    });
    const Ab = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Mb(bb) {
      try {
        return decodeURIComponent(bb.slice(1))
      } catch {
        return bb.slice(1)
      }
    }

    function Tb(bb) {
      return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Eb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ab.source}`, "g");

    function Yb(bb, ab) {
      return 2 === bb.length ? ab.replace(/^ (.*) $/, "$1") : ab
    }

    function Bb(bb) {
      return "" === bb.trim()
    }

    function eb(bb) {
      const ab = [];
      for (const Ub of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ab.length > 0 && ab[ab.length - 1].endsWith("\\") ? ab[ab.length - 1] += `|${Ub}` : ab.push(Ub);
      return ab.map((bb => bb.trim().replaceAll("\\|", "|")))
    }
    const vb = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Lb(bb) {
      const ab = [],
        Ub = [{
          indent: -1,
          items: ab
        }];
      let Ab = null;
      for (const Mb of bb) {
        const bb = Mb.match(vb);
        if (!bb) {
          Ab && (Ab.text += ` ${Mb.trim()}`);
          continue
        }
        const ab = bb[1].replace(/\t/g, "  ").length;
        for (; ab <= Ub[Ub.length - 1].indent;) Ub.pop();
        Ab = {
          text: bb[3].trim(),
          children: []
        }, Ub[Ub.length - 1].items.push(Ab), Ub.push({
          indent: ab,
          items: Ab.children
        })
      }
      return ab
    }

    function Pb(bb) {
      const ab = bb.replace(/\r\n/g, "\n").split("\n"),
        Ub = [];
      let Ab = 0;
      for (; Ab < ab.length;) {
        const bb = ab[Ab];
        if (Bb(bb)) {
          Ab++;
          continue
        }
        const Mb = bb.match(/^\s*```\s*(\w*)\s*$/);
        if (Mb) {
          const bb = [];
          for (Ab++; Ab < ab.length && !/^\s*```\s*$/.test(ab[Ab]);) bb.push(ab[Ab]), Ab++;
          Ab++, Ub.push({
            kind: "code",
            lang: Mb[1] || "text",
            code: bb.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Eb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Eb) {
          const bb = Eb[2].trim();
          Ub.push({
            kind: "heading",
            level: Eb[1].length,
            text: bb,
            anchor: Tb(bb)
          }), Ab++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
          Ub.push({
            kind: "rule"
          }), Ab++;
          continue
        }
        if (bb.trim().startsWith("|") && Ab + 1 < ab.length && /^\s*\|[\s:|-]+\|\s*$/.test(ab[Ab + 1])) {
          const Mb = eb(bb),
            Tb = [];
          for (Ab += 2; Ab < ab.length && ab[Ab].trim().startsWith("|");) Tb.push(eb(ab[Ab])), Ab++;
          Ub.push({
            kind: "table",
            header: Mb,
            rows: Tb
          });
          continue
        }
        if (bb.startsWith(">")) {
          const bb = [];
          for (; Ab < ab.length && ab[Ab].startsWith(">");) bb.push(ab[Ab].replace(/^>\s?/, "")), Ab++;
          Ub.push({
            kind: "quote",
            blocks: Pb(bb.join("\n"))
          });
          continue
        }
        if (vb.test(bb)) {
          const Mb = [],
            Tb = /^\s*\d+\./.test(bb);
          for (; Ab < ab.length && !Bb(ab[Ab]) && (vb.test(ab[Ab]) || /^\s+\S/.test(ab[Ab]));) Mb.push(ab[Ab]), Ab++;
          Ub.push({
            kind: "list",
            ordered: Tb,
            items: Lb(Mb)
          });
          continue
        }
        const Yb = [];
        for (; Ab < ab.length && !Bb(ab[Ab]) && !/^\s*```/.test(ab[Ab]) && !/^#{1,6}\s/.test(ab[Ab]) && !ab[Ab].startsWith(">") && !vb.test(ab[Ab]) && (!ab[Ab].trim().startsWith("|") || 0 !== Yb.length);) Yb.push(ab[Ab].trim()), Ab++;
        0 === Yb.length && (Yb.push(ab[Ab].trim()), Ab++), Ub.push({
          kind: "paragraph",
          text: Yb.join(" ")
        })
      }
      return Ub
    }

    function Xb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Ub = Pb(bb);
      let Ab = "";
      const Mb = [],
        Tb = [],
        Eb = new Map;
      for (const eb of Ub) {
        if ("heading" === eb.kind) {
          var Yb;
          const bb = (null !== (Yb = Eb.get(eb.anchor)) && void 0 !== Yb ? Yb : 0) + 1;
          Eb.set(eb.anchor, bb), bb > 1 && (eb.anchor = `${eb.anchor}-${bb}`)
        }
        if ("heading" === eb.kind && 1 === eb.level && !Ab) {
          Ab = eb.text;
          continue
        }
        if ("heading" === eb.kind && eb.level <= ab) {
          Tb.push({
            heading: eb,
            blocks: []
          });
          continue
        }
        const bb = Tb.at(-1);
        bb ? bb.blocks.push(eb) : Mb.push(eb)
      }
      const Bb = bb => {
        for (;
          "rule" === (null === (ab = bb.at(-1)) || void 0 === ab ? void 0 : ab.kind);) {
          var ab;
          bb.pop()
        }
      };
      Bb(Mb);
      for (const eb of Tb) Bb(eb.blocks);
      return {
        title: Ab,
        intro: Mb,
        sections: Tb
      }
    }

    function jb(bb) {
      return [{
        heading: null,
        blocks: bb.intro
      }, ...bb.sections.map((bb => ({
        heading: bb.heading,
        blocks: bb.blocks
      })))]
    }

    function Rb(bb) {
      return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? Rb(bb.blocks) : []))
    }

    function kb(bb) {
      switch (bb.kind) {
        case "heading":
        case "paragraph":
          return bb.text;
        case "code":
          return bb.code;
        case "table":
          return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
        case "list": {
          const ab = bb => bb.map((bb => `${bb.text} ${ab(bb.children)}`)).join(" ");
          return ab(bb.items)
        }
        case "quote":
          return bb.blocks.map(kb).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6109: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Lb,
      i: () => Eb,
      l: () => Yb
    });
    Ub(6106);
    var Ab = Ub(52),
      Mb = Ub(4420),
      Tb = Ub(1023);
    const Eb = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Yb(bb, ab) {
      return bb === ab ? bb : `${bb} (${ab})`
    }

    function Bb(bb) {
      const ab = [];
      let Ub = 0;
      for (const Ab of bb.matchAll(Eb)) {
        Ab.index > Ub && ab.push(bb.slice(Ub, Ab.index));
        const [, Mb, Eb, Bb, eb, vb, Lb] = Ab;
        void 0 !== Mb ? ab.push(Yb(Mb, Eb)) : void 0 !== Bb || void 0 !== eb ? ab.push((0, Tb.jsx)("strong", {
          children: null !== Bb && void 0 !== Bb ? Bb : eb
        }, Ab.index)) : void 0 !== vb ? ab.push((0, Tb.jsx)("em", {
          children: vb
        }, Ab.index)) : ab.push((0, Tb.jsx)("code", {
          children: Lb
        }, Ab.index)), Ub = Ab.index + Ab[0].length
      }
      return Ub < bb.length && ab.push(bb.slice(Ub)), ab
    }

    function eb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Ab = bb.map(((bb, ab) => (0, Tb.jsxs)("li", {
        children: [Bb(bb.text), bb.children.length > 0 && eb(bb.children, !1)]
      }, ab)));
      return ab ? (0, Tb.jsx)("ol", {
        start: Ub,
        children: Ab
      }) : (0, Tb.jsx)("ul", {
        children: Ab
      })
    }

    function vb(bb, ab) {
      switch (bb.kind) {
        case "heading":
          return bb.level <= 2 ? (0, Tb.jsx)("h3", {
            children: Bb(bb.text)
          }, ab) : (0, Tb.jsx)("h4", {
            children: Bb(bb.text)
          }, ab);
        case "paragraph":
          return (0, Tb.jsx)("p", {
            children: Bb(bb.text)
          }, ab);
        case "list":
          return (0, Tb.jsx)(Ab.Fragment, {
            children: eb(bb.items, bb.ordered)
          }, ab);
        case "quote":
          return (0, Tb.jsx)("blockquote", {
            children: bb.blocks.map(((bb, ab) => vb(bb, ab)))
          }, ab);
        case "code":
          return (0, Tb.jsx)("pre", {
            children: (0, Tb.jsx)("code", {
              children: bb.code
            })
          }, ab);
        case "table":
          return (0, Tb.jsxs)("table", {
            children: [(0, Tb.jsx)("thead", {
              children: (0, Tb.jsx)("tr", {
                children: bb.header.map(((bb, ab) => (0, Tb.jsx)("th", {
                  children: Bb(bb)
                }, ab)))
              })
            }), (0, Tb.jsx)("tbody", {
              children: bb.rows.map(((bb, ab) => (0, Tb.jsx)("tr", {
                children: bb.map(((bb, ab) => (0, Tb.jsx)("td", {
                  children: Bb(bb)
                }, ab)))
              }, ab)))
            })]
          }, ab);
        case "rule":
          return (0, Tb.jsx)("hr", {}, ab)
      }
    }

    function Lb(bb) {
      let {
        markdown: ab
      } = bb, Ub = 0;
      return (0, Tb.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Mb.z)(ab).map(((bb, ab) => {
          if ("list" !== bb.kind || !bb.ordered) return Ub = 0, vb(bb, ab);
          const Mb = Ub + 1;
          return Ub += bb.items.length, (0, Tb.jsx)(Ab.Fragment, {
            children: eb(bb.items, !0, Mb)
          }, ab)
        }))
      })
    }
  },
  6104: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Zb,
      h: () => Db,
      f: () => xb,
      l: () => jb
    });
    var Ab = Ub(1710),
      Mb = Ub(6052),
      Tb = Ub(4553);
    const Eb = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Yb(bb) {
      return (0, Tb.f)(bb, Eb, (ab => !/^my/i.test(ab[0]) || !/follow $/i.test(bb.slice(0, ab.index)))).length > 0
    }
    const Bb = /\byou(?:r|'re|'ll)?\b/i,
      eb = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      vb = 2;

    function Lb(bb) {
      return function(bb) {
        const ab = [];
        let Ub = !1;
        for (const Ab of bb.split("\n")) {
          if (/^\s*(```|~~~)/.test(Ab)) {
            Ub = !Ub;
            continue
          }
          if (Ub || /^\s*>/.test(Ab)) continue;
          const bb = Ab.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          ab.push(...(0, Mb.p)(bb))
        }
        return ab
      }(bb).filter((bb => Yb(bb) || eb.test(bb) && !Bb.test(bb)))
    }
    const Pb = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Xb = [{
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

    function jb(bb) {
      const ab = Xb.findIndex((ab => ab.name === bb));
      return -1 === ab ? Xb.length : ab
    }
    const Rb = 2500,
      kb = 12e4;
    class yb extends Error {
      constructor(bb) {
        super(`Studio AI chat ${bb}`), this.reason = bb
      }
    }

    function Zb(bb, ab) {
      const Ub = new AbortController,
        Ab = () => {
          Ub.abort()
        },
        Mb = setTimeout(Ab, bb);
      return null !== ab && void 0 !== ab && ab.aborted && Ab(), null === ab || void 0 === ab || ab.addEventListener("abort", Ab, {
        once: !0
      }), {
        signal: Ub.signal,
        clear: () => {
          clearTimeout(Mb), null === ab || void 0 === ab || ab.removeEventListener("abort", Ab)
        }
      }
    }

    function Db(bb, ab, Ub) {
      return new Promise(((Mb, Tb) => {
        const Eb = new AbortController,
          Yb = () => {
            Eb.abort(), Tb((0, Ab.e)(Ub))
          };
        if (null !== Ub && void 0 !== Ub && Ub.aborted) return void Yb();
        null === Ub || void 0 === Ub || Ub.addEventListener("abort", Yb, {
          once: !0
        });
        const Bb = Xb.map((() => !1));
        let eb = null;
        const vb = Xb.map((() => !1)),
          Lb = Xb.map((() => !1));
        Xb.forEach(((Ab, Pb) => {
          const jb = Zb(kb, Eb.signal);
          ib(Ab, [{
            role: "user",
            content: bb
          }], jb.signal).then((bb => {
            Eb.signal.aborted || ("busy" === bb || "failed" === bb ? (vb[Pb] = "busy" === bb, Lb[Pb] = !0) : null !== bb && (null === eb || Pb < eb.rank) && (eb = {
              rank: Pb,
              answer: {
                text: bb.text,
                model: Ab.name
              }
            }, ab(eb.answer)))
          }), (bb => {
            Eb.signal.aborted || (Lb[Pb] = !0, console.warn(`Studio AI: ${Ab.name} couldn't be reached`, bb))
          })).finally((() => {
            jb.clear(), Bb[Pb] = !0, Eb.signal.aborted || (() => {
              var bb, ab;
              const Ab = null !== (bb = null === (ab = eb) || void 0 === ab ? void 0 : ab.rank) && void 0 !== bb ? bb : Xb.length;
              Bb.slice(0, Ab).includes(!1) || (null === Ub || void 0 === Ub || Ub.removeEventListener("abort", Yb), Eb.abort(), null !== eb ? Mb({
                ...eb.answer,
                isFinal: !Lb.slice(0, eb.rank).includes(!0)
              }) : Tb(new yb(vb.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((bb => {
            console.error("Studio AI: showing an answer failed", bb)
          }))
        }))
      }))
    }

    function zb(bb) {
      var ab, Ub;
      return "length" === (null === bb || void 0 === bb || null === (ab = bb.choices) || void 0 === ab || null === (Ub = ab[0]) || void 0 === Ub ? void 0 : Ub.finish_reason)
    }
    async function xb(bb, ab, Ub) {
      const Ab = Xb.find((ab => ab.name === bb));
      if (void 0 === Ab) return "failed";
      const Mb = Zb(kb, Ub);
      try {
        const bb = await ib(Ab, ab, Mb.signal);
        return null !== bb && "object" === typeof bb ? bb.isCutOff ? (console.warn(`Studio AI: ${Ab.name}'s answer was cut off at the token limit`), null) : {
          text: bb.text
        } : bb
      } finally {
        Mb.clear()
      }
    }
    async function ib(bb, ab, Ub) {
      const Ab = await fetch(Pb, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: bb.name,
          messages: ab,
          max_tokens: Rb,
          temperature: bb.temperature,
          reasoning_effort: bb.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Ub
      });
      if (429 === Ab.status) return "busy";
      if (!Ab.ok) return console.warn(`Studio AI: ${bb.name} answered ${Ab.status}`), "failed";
      const Mb = await Ab.json().catch((() => null)),
        Tb = function(bb) {
          var ab, Ub, Ab;
          const Mb = null === bb || void 0 === bb || null === (ab = bb.choices) || void 0 === ab || null === (Ub = ab[0]) || void 0 === Ub || null === (Ab = Ub.message) || void 0 === Ab ? void 0 : Ab.content;
          if ("string" !== typeof Mb) return null;
          const Tb = Mb.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Tb ? null : Tb
        }(Mb);
      return null !== Tb && function(bb) {
        const ab = Lb(bb);
        return ab.length >= vb || ab.some((bb => Yb(bb)))
      }(Tb) ? (console.warn(`Studio AI: ${bb.name} thought out loud instead of answering`), "failed") : null === Tb ? null : {
        text: Tb,
        isCutOff: zb(Mb)
      }
    }
  },
  6052: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => xb,
      C: () => Zb,
      D: () => Lb,
      E: () => eb,
      G: () => Xb,
      d: () => jb,
      f: () => Yb,
      h: () => Eb,
      k: () => Rb,
      m: () => Pb,
      p: () => vb,
      q: () => Tb,
      s: () => Mb,
      v: () => zb,
      x: () => ib,
      y: () => kb,
      z: () => Db
    });
    var Ab = Ub(4553);
    const Mb = 2e3,
      Tb = 2e4;

    function Eb(bb) {
      return bb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Yb(bb) {
      return bb.replace(/\$/g, "\\$")
    }
    const Bb = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function eb(bb, ab) {
      Bb.lastIndex = ab;
      const Ub = Bb.exec(bb);
      return Ub.index + Ub[0].length
    }

    function vb(bb) {
      return (0, Ab.w)(bb, /\s+/g, (0, Ab.p)(".!?")).flatMap((bb => bb.split("\n")))
    }

    function Lb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab;
      const Ab = [...bb.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((bb => bb.index)),
        Mb = Ab.filter((bb => bb < ab)),
        Tb = Ab.find((bb => bb >= Ub));
      return [0 === Mb.length ? 0 : Mb.at(-1) + 1, void 0 === Tb ? bb.length : Tb + 1]
    }

    function Pb(bb, ab) {
      const Ub = bb.charCodeAt(ab - 1);
      return bb.slice(0, ab > 0 && ab < bb.length && Ub >= 55296 && Ub <= 56319 ? ab - 1 : ab)
    }

    function Xb(bb, ab) {
      return `${ab}${bb.replace(/\\/g,"\\\\").split(ab).join(`\\${ab}`)}${ab}`
    }

    function jb(bb) {
      return bb.charAt(0).toUpperCase() + bb.slice(1)
    }

    function Rb(bb) {
      return Math.round(bb).toLocaleString("en-US")
    }

    function kb(bb) {
      return bb.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((bb => "" !== bb))
    }
    const yb = 3;

    function Zb(bb, ab) {
      return kb(bb).filter((bb => bb.length >= yb && !/\d/.test(bb))).map((bb => `${bb} ${ab}`))
    }

    function Db(bb) {
      return bb.split(/[\s:_]+/).filter((bb => "" !== bb)).map(Eb).join("[`:_\\s]+")
    }

    function zb(bb) {
      return kb(bb.split(".").pop())
    }

    function xb(bb) {
      return bb.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function ib(bb) {
      let ab = null;
      return () => {
        const Ub = ab ??= bb();
        return Ub.catch((() => {
          ab === Ub && (ab = null)
        })), Ub
      }
    }
  },
  4553: (bb, ab, Ub) => {
    function Ab(bb) {
      return {
        notAfter: bb
      }
    }
    Ub.d(ab, {
      d: () => Bb,
      f: () => eb,
      g: () => Yb,
      h: () => Ab,
      l: () => Mb,
      m: () => Tb,
      p: () => Eb,
      s: () => vb,
      w: () => Lb
    });
    const Mb = Ab("\\w$."),
      Tb = Ab("\\w.,");

    function Eb(bb) {
      return ab => Bb(ab, bb)
    }

    function Yb(bb) {
      return ab => !bb.test(ab.input.slice(0, ab.index))
    }

    function Bb(bb, ab) {
      return bb.index > 0 && new RegExp(`[${ab}]`).test(bb.input[bb.index - 1])
    }

    function eb(bb, ab, Ub) {
      return function(bb) {
        return void 0 !== bb && "function" !== typeof bb
      }(Ub) ? function(bb, ab, Ub) {
        const Ab = ab.flags.replace(/[gy]/g, ""),
          Mb = new RegExp(`[^${Ub}](?:${ab.source})`, `${Ab}g`),
          Tb = [],
          Eb = Ub => {
            const Ab = Ub.index + Ub[0].length;
            return ("" === Ub[0] ? Pb(bb, ab, Ab) : Ab) - 1
          },
          Yb = new RegExp(`(?:${ab.source})`, `${Ab}y`).exec(bb);
        if (Yb) {
          if (Tb.push(Yb), !ab.global) return Tb;
          Mb.lastIndex = Eb(Yb)
        }
        for (let Bb = Mb.exec(bb); Bb; Bb = Mb.exec(bb)) {
          const Ub = Pb(bb, ab, Bb.index) - Bb.index;
          if (Bb[0] = Bb[0].slice(Ub), Bb.index += Ub, Tb.push(Bb), !ab.global) break;
          Mb.lastIndex = Eb(Bb)
        }
        return Tb
      }(bb, ab, Ub.notAfter) : function(bb, ab, Ub) {
        const Ab = new RegExp(ab.source, `${ab.flags.replace(/[gy]/g,"")}g`),
          Mb = [];
        for (let Tb = Ab.exec(bb); Tb; Tb = Ab.exec(bb))
          if (!Ub || Ub(Tb)) {
            if (Mb.push(Tb), !ab.global) break;
            "" === Tb[0] && (Ab.lastIndex = Pb(bb, ab, Ab.lastIndex))
          } else Ab.lastIndex = Pb(bb, ab, Tb.index);
        return Mb
      }(bb, ab, Ub)
    }

    function vb(bb, ab, Ub, Ab) {
      let Mb = "",
        Tb = 0;
      for (const Eb of eb(bb, ab, Ub)) Mb += bb.slice(Tb, Eb.index) + Ab(Eb), Tb = Eb.index + Eb[0].length;
      return Mb + bb.slice(Tb)
    }

    function Lb(bb, ab, Ub) {
      const Ab = [];
      let Mb = 0;
      for (const Tb of eb(bb, ab, Ub)) Ab.push(bb.slice(Mb, Tb.index)), Mb = Tb.index + Tb[0].length;
      return [...Ab, bb.slice(Mb)]
    }

    function Pb(bb, ab, Ub) {
      var Ab;
      return Ub + (ab.unicode && (null !== (Ab = bb.codePointAt(Ub)) && void 0 !== Ab ? Ab : 0) > 65535 ? 2 : 1)
    }
  },
  6106: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);