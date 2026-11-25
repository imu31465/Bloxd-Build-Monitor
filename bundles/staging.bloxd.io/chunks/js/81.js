export const id = 81;
export const ids = [81];
export const modules = {
  4909: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Et,
      G: () => lt,
      d: () => Ot,
      g: () => mt,
      h: () => yt,
      l: () => wt,
      p: () => dt,
      t: () => qt,
      v: () => Dt,
      z: () => ft
    });
    const Ot = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function qt(tt) {
      try {
        return decodeURIComponent(tt.slice(1))
      } catch {
        return tt.slice(1)
      }
    }

    function Dt(tt) {
      return tt.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const mt = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ot.source}`, "g");

    function dt(tt, et) {
      return 2 === tt.length ? et.replace(/^ (.*) $/, "$1") : et
    }

    function jt(tt) {
      return "" === tt.trim()
    }

    function Ht(tt) {
      const et = [];
      for (const Vt of tt.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) et.length > 0 && et[et.length - 1].endsWith("\\") ? et[et.length - 1] += `|${Vt}` : et.push(Vt);
      return et.map((tt => tt.trim().replaceAll("\\|", "|")))
    }
    const Xt = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Qt(tt) {
      const et = [],
        Vt = [{
          indent: -1,
          items: et
        }];
      let Ot = null;
      for (const qt of tt) {
        const tt = qt.match(Xt);
        if (!tt) {
          Ot && (Ot.text += ` ${qt.trim()}`);
          continue
        }
        const et = tt[1].replace(/\t/g, "  ").length;
        for (; et <= Vt[Vt.length - 1].indent;) Vt.pop();
        Ot = {
          text: tt[3].trim(),
          children: []
        }, Vt[Vt.length - 1].items.push(Ot), Vt.push({
          indent: et,
          items: Ot.children
        })
      }
      return et
    }

    function lt(tt) {
      const et = tt.replace(/\r\n/g, "\n").split("\n"),
        Vt = [];
      let Ot = 0;
      for (; Ot < et.length;) {
        const tt = et[Ot];
        if (jt(tt)) {
          Ot++;
          continue
        }
        const qt = tt.match(/^\s*```\s*(\w*)\s*$/);
        if (qt) {
          const tt = [];
          for (Ot++; Ot < et.length && !/^\s*```\s*$/.test(et[Ot]);) tt.push(et[Ot]), Ot++;
          Ot++, Vt.push({
            kind: "code",
            lang: qt[1] || "text",
            code: tt.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const mt = tt.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (mt) {
          const tt = mt[2].trim();
          Vt.push({
            kind: "heading",
            level: mt[1].length,
            text: tt,
            anchor: Dt(tt)
          }), Ot++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(tt)) {
          Vt.push({
            kind: "rule"
          }), Ot++;
          continue
        }
        if (tt.trim().startsWith("|") && Ot + 1 < et.length && /^\s*\|[\s:|-]+\|\s*$/.test(et[Ot + 1])) {
          const qt = Ht(tt),
            Dt = [];
          for (Ot += 2; Ot < et.length && et[Ot].trim().startsWith("|");) Dt.push(Ht(et[Ot])), Ot++;
          Vt.push({
            kind: "table",
            header: qt,
            rows: Dt
          });
          continue
        }
        if (tt.startsWith(">")) {
          const tt = [];
          for (; Ot < et.length && et[Ot].startsWith(">");) tt.push(et[Ot].replace(/^>\s?/, "")), Ot++;
          Vt.push({
            kind: "quote",
            blocks: lt(tt.join("\n"))
          });
          continue
        }
        if (Xt.test(tt)) {
          const qt = [],
            Dt = /^\s*\d+\./.test(tt);
          for (; Ot < et.length && !jt(et[Ot]) && (Xt.test(et[Ot]) || /^\s+\S/.test(et[Ot]));) qt.push(et[Ot]), Ot++;
          Vt.push({
            kind: "list",
            ordered: Dt,
            items: Qt(qt)
          });
          continue
        }
        const dt = [];
        for (; Ot < et.length && !jt(et[Ot]) && !/^\s*```/.test(et[Ot]) && !/^#{1,6}\s/.test(et[Ot]) && !et[Ot].startsWith(">") && !Xt.test(et[Ot]) && (!et[Ot].trim().startsWith("|") || 0 !== dt.length);) dt.push(et[Ot].trim()), Ot++;
        0 === dt.length && (dt.push(et[Ot].trim()), Ot++), Vt.push({
          kind: "paragraph",
          text: dt.join(" ")
        })
      }
      return Vt
    }

    function Et(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Vt = lt(tt);
      let Ot = "";
      const qt = [],
        Dt = [],
        mt = new Map;
      for (const Ht of Vt) {
        if ("heading" === Ht.kind) {
          var dt;
          const tt = (null !== (dt = mt.get(Ht.anchor)) && void 0 !== dt ? dt : 0) + 1;
          mt.set(Ht.anchor, tt), tt > 1 && (Ht.anchor = `${Ht.anchor}-${tt}`)
        }
        if ("heading" === Ht.kind && 1 === Ht.level && !Ot) {
          Ot = Ht.text;
          continue
        }
        if ("heading" === Ht.kind && Ht.level <= et) {
          Dt.push({
            heading: Ht,
            blocks: []
          });
          continue
        }
        const tt = Dt.at(-1);
        tt ? tt.blocks.push(Ht) : qt.push(Ht)
      }
      const jt = tt => {
        for (;
          "rule" === (null === (et = tt.at(-1)) || void 0 === et ? void 0 : et.kind);) {
          var et;
          tt.pop()
        }
      };
      jt(qt);
      for (const Ht of Dt) jt(Ht.blocks);
      return {
        title: Ot,
        intro: qt,
        sections: Dt
      }
    }

    function ft(tt) {
      return [{
        heading: null,
        blocks: tt.intro
      }, ...tt.sections.map((tt => ({
        heading: tt.heading,
        blocks: tt.blocks
      })))]
    }

    function wt(tt) {
      return tt.flatMap((tt => "code" === tt.kind ? [tt] : "quote" === tt.kind ? wt(tt.blocks) : []))
    }

    function yt(tt) {
      switch (tt.kind) {
        case "heading":
        case "paragraph":
          return tt.text;
        case "code":
          return tt.code;
        case "table":
          return [tt.header, ...tt.rows].map((tt => tt.join(" "))).join(" ");
        case "list": {
          const et = tt => tt.map((tt => `${tt.text} ${et(tt.children)}`)).join(" ");
          return et(tt.items)
        }
        case "quote":
          return tt.blocks.map(yt).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6687: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt,
      h: () => mt,
      l: () => dt
    });
    Vt(6685);
    var Ot = Vt(63),
      qt = Vt(4909),
      Dt = Vt(1188);
    const mt = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function dt(tt, et) {
      return tt === et ? tt : `${tt} (${et})`
    }

    function jt(tt) {
      const et = [];
      let Vt = 0;
      for (const Ot of tt.matchAll(mt)) {
        Ot.index > Vt && et.push(tt.slice(Vt, Ot.index));
        const [, qt, mt, jt, Ht, Xt, Qt] = Ot;
        void 0 !== qt ? et.push(dt(qt, mt)) : void 0 !== jt || void 0 !== Ht ? et.push((0, Dt.jsx)("strong", {
          children: null !== jt && void 0 !== jt ? jt : Ht
        }, Ot.index)) : void 0 !== Xt ? et.push((0, Dt.jsx)("em", {
          children: Xt
        }, Ot.index)) : et.push((0, Dt.jsx)("code", {
          children: Qt
        }, Ot.index)), Vt = Ot.index + Ot[0].length
      }
      return Vt < tt.length && et.push(tt.slice(Vt)), et
    }

    function Ht(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Ot = tt.map(((tt, et) => (0, Dt.jsxs)("li", {
        children: [jt(tt.text), tt.children.length > 0 && Ht(tt.children, !1)]
      }, et)));
      return et ? (0, Dt.jsx)("ol", {
        start: Vt,
        children: Ot
      }) : (0, Dt.jsx)("ul", {
        children: Ot
      })
    }

    function Xt(tt, et) {
      switch (tt.kind) {
        case "heading":
          return tt.level <= 2 ? (0, Dt.jsx)("h3", {
            children: jt(tt.text)
          }, et) : (0, Dt.jsx)("h4", {
            children: jt(tt.text)
          }, et);
        case "paragraph":
          return (0, Dt.jsx)("p", {
            children: jt(tt.text)
          }, et);
        case "list":
          return (0, Dt.jsx)(Ot.Fragment, {
            children: Ht(tt.items, tt.ordered)
          }, et);
        case "quote":
          return (0, Dt.jsx)("blockquote", {
            children: tt.blocks.map(((tt, et) => Xt(tt, et)))
          }, et);
        case "code":
          return (0, Dt.jsx)("pre", {
            children: (0, Dt.jsx)("code", {
              children: tt.code
            })
          }, et);
        case "table":
          return (0, Dt.jsxs)("table", {
            children: [(0, Dt.jsx)("thead", {
              children: (0, Dt.jsx)("tr", {
                children: tt.header.map(((tt, et) => (0, Dt.jsx)("th", {
                  children: jt(tt)
                }, et)))
              })
            }), (0, Dt.jsx)("tbody", {
              children: tt.rows.map(((tt, et) => (0, Dt.jsx)("tr", {
                children: tt.map(((tt, et) => (0, Dt.jsx)("td", {
                  children: jt(tt)
                }, et)))
              }, et)))
            })]
          }, et);
        case "rule":
          return (0, Dt.jsx)("hr", {}, et)
      }
    }

    function Qt(tt) {
      let {
        markdown: et
      } = tt, Vt = 0;
      return (0, Dt.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, qt.G)(et).map(((tt, et) => {
          if ("list" !== tt.kind || !tt.ordered) return Vt = 0, Xt(tt, et);
          const qt = Vt + 1;
          return Vt += tt.items.length, (0, Dt.jsx)(Ot.Fragment, {
            children: Ht(tt.items, !0, qt)
          }, et)
        }))
      })
    }
  },
  6680: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt,
      h: () => bt,
      f: () => Ct,
      i: () => ft
    });
    var Ot = Vt(1298),
      qt = Vt(6639),
      Dt = Vt(5038);
    const mt = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function dt(tt) {
      return (0, Dt.f)(tt, mt, (et => !/^my/i.test(et[0]) || !/follow $/i.test(tt.slice(0, et.index)))).length > 0
    }
    const jt = /\byou(?:r|'re|'ll)?\b/i,
      Ht = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Xt = 2;

    function Qt(tt) {
      return function(tt) {
        const et = [];
        let Vt = !1;
        for (const Ot of tt.split("\n")) {
          if (/^\s*(```|~~~)/.test(Ot)) {
            Vt = !Vt;
            continue
          }
          if (Vt || /^\s*>/.test(Ot)) continue;
          const tt = Ot.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          et.push(...(0, qt.u)(tt))
        }
        return et
      }(tt).filter((tt => dt(tt) || Ht.test(tt) && !jt.test(tt)))
    }
    const lt = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Et = [{
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

    function ft(tt) {
      const et = Et.findIndex((et => et.name === tt));
      return -1 === et ? Et.length : et
    }
    const wt = 2500,
      yt = 12e4;
    class Nt extends Error {
      constructor(tt) {
        super(`Studio AI chat ${tt}`), this.reason = tt
      }
    }

    function Mt(tt, et) {
      const Vt = new AbortController,
        Ot = () => {
          Vt.abort()
        },
        qt = setTimeout(Ot, tt);
      return null !== et && void 0 !== et && et.aborted && Ot(), null === et || void 0 === et || et.addEventListener("abort", Ot, {
        once: !0
      }), {
        signal: Vt.signal,
        clear: () => {
          clearTimeout(qt), null === et || void 0 === et || et.removeEventListener("abort", Ot)
        }
      }
    }

    function bt(tt, et, Vt) {
      return new Promise(((qt, Dt) => {
        const mt = new AbortController,
          dt = () => {
            mt.abort(), Dt((0, Ot.f)(Vt))
          };
        if (null !== Vt && void 0 !== Vt && Vt.aborted) return void dt();
        null === Vt || void 0 === Vt || Vt.addEventListener("abort", dt, {
          once: !0
        });
        const jt = Et.map((() => !1));
        let Ht = null;
        const Xt = Et.map((() => !1)),
          Qt = Et.map((() => !1));
        Et.forEach(((Ot, lt) => {
          const ft = Mt(yt, mt.signal);
          ut(Ot, [{
            role: "user",
            content: tt
          }], ft.signal).then((tt => {
            mt.signal.aborted || ("busy" === tt || "failed" === tt ? (Xt[lt] = "busy" === tt, Qt[lt] = !0) : null !== tt && (null === Ht || lt < Ht.rank) && (Ht = {
              rank: lt,
              answer: {
                text: tt.text,
                model: Ot.name
              }
            }, et(Ht.answer)))
          }), (tt => {
            mt.signal.aborted || (Qt[lt] = !0, console.warn(`Studio AI: ${Ot.name} couldn't be reached`, tt))
          })).finally((() => {
            ft.clear(), jt[lt] = !0, mt.signal.aborted || (() => {
              var tt, et;
              const Ot = null !== (tt = null === (et = Ht) || void 0 === et ? void 0 : et.rank) && void 0 !== tt ? tt : Et.length;
              jt.slice(0, Ot).includes(!1) || (null === Vt || void 0 === Vt || Vt.removeEventListener("abort", dt), mt.abort(), null !== Ht ? qt({
                ...Ht.answer,
                isFinal: !Qt.slice(0, Ht.rank).includes(!0)
              }) : Dt(new Nt(Xt.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((tt => {
            console.error("Studio AI: showing an answer failed", tt)
          }))
        }))
      }))
    }

    function Jt(tt) {
      var et, Vt;
      return "length" === (null === tt || void 0 === tt || null === (et = tt.choices) || void 0 === et || null === (Vt = et[0]) || void 0 === Vt ? void 0 : Vt.finish_reason)
    }
    async function Ct(tt, et, Vt) {
      const Ot = Et.find((et => et.name === tt));
      if (void 0 === Ot) return "failed";
      const qt = Mt(yt, Vt);
      try {
        const tt = await ut(Ot, et, qt.signal);
        return null !== tt && "object" === typeof tt ? tt.isCutOff ? (console.warn(`Studio AI: ${Ot.name}'s answer was cut off at the token limit`), null) : {
          text: tt.text
        } : tt
      } finally {
        qt.clear()
      }
    }
    async function ut(tt, et, Vt) {
      const Ot = await fetch(lt, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: tt.name,
          messages: et,
          max_tokens: wt,
          temperature: tt.temperature,
          reasoning_effort: tt.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Vt
      });
      if (429 === Ot.status) return "busy";
      if (!Ot.ok) return console.warn(`Studio AI: ${tt.name} answered ${Ot.status}`), "failed";
      const qt = await Ot.json().catch((() => null)),
        Dt = function(tt) {
          var et, Vt, Ot;
          const qt = null === tt || void 0 === tt || null === (et = tt.choices) || void 0 === et || null === (Vt = et[0]) || void 0 === Vt || null === (Ot = Vt.message) || void 0 === Ot ? void 0 : Ot.content;
          if ("string" !== typeof qt) return null;
          const Dt = qt.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Dt ? null : Dt
        }(qt);
      return null !== Dt && function(tt) {
        const et = Qt(tt);
        return et.length >= Xt || et.some((tt => dt(tt)))
      }(Dt) ? (console.warn(`Studio AI: ${tt.name} thought out loud instead of answering`), "failed") : null === Dt ? null : {
        text: Dt,
        isCutOff: Jt(qt)
      }
    }
  },
  6639: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => qt,
      E: () => Jt,
      H: () => ut,
      L: () => yt,
      O: () => bt,
      P: () => Ct,
      S: () => Mt,
      W: () => Qt,
      Y: () => Ht,
      Z: () => Et,
      d: () => ft,
      h: () => dt,
      l: () => mt,
      m: () => wt,
      q: () => lt,
      u: () => Xt,
      y: () => Dt
    });
    var Ot = Vt(5038);
    const qt = 2e3,
      Dt = 2e4;

    function mt(tt) {
      return tt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function dt(tt) {
      return tt.replace(/\$/g, "\\$")
    }
    const jt = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Ht(tt, et) {
      jt.lastIndex = et;
      const Vt = jt.exec(tt);
      return Vt.index + Vt[0].length
    }

    function Xt(tt) {
      return (0, Ot.w)(tt, /\s+/g, (0, Ot.p)(".!?")).flatMap((tt => tt.split("\n")))
    }

    function Qt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et;
      const Ot = [...tt.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((tt => tt.index)),
        qt = Ot.filter((tt => tt < et)),
        Dt = Ot.find((tt => tt >= Vt));
      return [0 === qt.length ? 0 : qt.at(-1) + 1, void 0 === Dt ? tt.length : Dt + 1]
    }

    function lt(tt, et) {
      const Vt = tt.charCodeAt(et - 1);
      return tt.slice(0, et > 0 && et < tt.length && Vt >= 55296 && Vt <= 56319 ? et - 1 : et)
    }

    function Et(tt, et) {
      return `${et}${tt.replace(/\\/g,"\\\\").split(et).join(`\\${et}`)}${et}`
    }

    function ft(tt) {
      return tt.charAt(0).toUpperCase() + tt.slice(1)
    }

    function wt(tt) {
      return Math.round(tt).toLocaleString("en-US")
    }

    function yt(tt) {
      return tt.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((tt => "" !== tt))
    }
    const Nt = 3;

    function Mt(tt, et) {
      return yt(tt).filter((tt => tt.length >= Nt && !/\d/.test(tt))).map((tt => `${tt} ${et}`))
    }

    function bt(tt) {
      return tt.split(/[\s:_]+/).filter((tt => "" !== tt)).map(mt).join("[`:_\\s]+")
    }

    function Jt(tt) {
      return yt(tt.split(".").pop())
    }

    function Ct(tt) {
      return tt.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function ut(tt) {
      let et = null;
      return () => {
        const Vt = et ??= tt();
        return Vt.catch((() => {
          et === Vt && (et = null)
        })), Vt
      }
    }
  },
  5038: (tt, et, Vt) => {
    function Ot(tt) {
      return {
        notAfter: tt
      }
    }
    Vt.d(et, {
      b: () => jt,
      f: () => Ht,
      h: () => dt,
      j: () => Ot,
      l: () => qt,
      n: () => Dt,
      p: () => mt,
      s: () => Xt,
      w: () => Qt
    });
    const qt = Ot("\\w$."),
      Dt = Ot("\\w.,");

    function mt(tt) {
      return et => jt(et, tt)
    }

    function dt(tt) {
      return et => !tt.test(et.input.slice(0, et.index))
    }

    function jt(tt, et) {
      return tt.index > 0 && new RegExp(`[${et}]`).test(tt.input[tt.index - 1])
    }

    function Ht(tt, et, Vt) {
      return function(tt) {
        return void 0 !== tt && "function" !== typeof tt
      }(Vt) ? function(tt, et, Vt) {
        const Ot = et.flags.replace(/[gy]/g, ""),
          qt = new RegExp(`[^${Vt}](?:${et.source})`, `${Ot}g`),
          Dt = [],
          mt = Vt => {
            const Ot = Vt.index + Vt[0].length;
            return ("" === Vt[0] ? lt(tt, et, Ot) : Ot) - 1
          },
          dt = new RegExp(`(?:${et.source})`, `${Ot}y`).exec(tt);
        if (dt) {
          if (Dt.push(dt), !et.global) return Dt;
          qt.lastIndex = mt(dt)
        }
        for (let jt = qt.exec(tt); jt; jt = qt.exec(tt)) {
          const Vt = lt(tt, et, jt.index) - jt.index;
          if (jt[0] = jt[0].slice(Vt), jt.index += Vt, Dt.push(jt), !et.global) break;
          qt.lastIndex = mt(jt)
        }
        return Dt
      }(tt, et, Vt.notAfter) : function(tt, et, Vt) {
        const Ot = new RegExp(et.source, `${et.flags.replace(/[gy]/g,"")}g`),
          qt = [];
        for (let Dt = Ot.exec(tt); Dt; Dt = Ot.exec(tt))
          if (!Vt || Vt(Dt)) {
            if (qt.push(Dt), !et.global) break;
            "" === Dt[0] && (Ot.lastIndex = lt(tt, et, Ot.lastIndex))
          } else Ot.lastIndex = lt(tt, et, Dt.index);
        return qt
      }(tt, et, Vt)
    }

    function Xt(tt, et, Vt, Ot) {
      let qt = "",
        Dt = 0;
      for (const mt of Ht(tt, et, Vt)) qt += tt.slice(Dt, mt.index) + Ot(mt), Dt = mt.index + mt[0].length;
      return qt + tt.slice(Dt)
    }

    function Qt(tt, et, Vt) {
      const Ot = [];
      let qt = 0;
      for (const Dt of Ht(tt, et, Vt)) Ot.push(tt.slice(qt, Dt.index)), qt = Dt.index + Dt[0].length;
      return [...Ot, tt.slice(qt)]
    }

    function lt(tt, et, Vt) {
      var Ot;
      return Vt + (et.unicode && (null !== (Ot = tt.codePointAt(Vt)) && void 0 !== Ot ? Ot : 0) > 65535 ? 2 : 1)
    }
  },
  6685: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);