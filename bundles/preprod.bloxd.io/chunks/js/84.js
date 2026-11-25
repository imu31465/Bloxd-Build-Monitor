export const id = 84;
export const ids = [84];
export const modules = {
  5062: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => rQ,
      d: () => wQ,
      g: () => zQ,
      j: () => yQ,
      k: () => BQ,
      m: () => sQ,
      p: () => qQ,
      s: () => TQ,
      t: () => jQ,
      x: () => IQ
    });
    const wQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function qQ(QQ) {
      try {
        return decodeURIComponent(QQ.slice(1))
      } catch {
        return QQ.slice(1)
      }
    }

    function TQ(QQ) {
      return QQ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const zQ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wQ.source}`, "g");

    function sQ(QQ, WQ) {
      return 2 === QQ.length ? WQ.replace(/^ (.*) $/, "$1") : WQ
    }

    function FQ(QQ) {
      return "" === QQ.trim()
    }

    function PQ(QQ) {
      const WQ = [];
      for (const XQ of QQ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) WQ.length > 0 && WQ[WQ.length - 1].endsWith("\\") ? WQ[WQ.length - 1] += `|${XQ}` : WQ.push(XQ);
      return WQ.map((QQ => QQ.trim().replaceAll("\\|", "|")))
    }
    const gQ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function JQ(QQ) {
      const WQ = [],
        XQ = [{
          indent: -1,
          items: WQ
        }];
      let wQ = null;
      for (const qQ of QQ) {
        const QQ = qQ.match(gQ);
        if (!QQ) {
          wQ && (wQ.text += ` ${qQ.trim()}`);
          continue
        }
        const WQ = QQ[1].replace(/\t/g, "  ").length;
        for (; WQ <= XQ[XQ.length - 1].indent;) XQ.pop();
        wQ = {
          text: QQ[3].trim(),
          children: []
        }, XQ[XQ.length - 1].items.push(wQ), XQ.push({
          indent: WQ,
          items: wQ.children
        })
      }
      return WQ
    }

    function rQ(QQ) {
      const WQ = QQ.replace(/\r\n/g, "\n").split("\n"),
        XQ = [];
      let wQ = 0;
      for (; wQ < WQ.length;) {
        const QQ = WQ[wQ];
        if (FQ(QQ)) {
          wQ++;
          continue
        }
        const qQ = QQ.match(/^\s*```\s*(\w*)\s*$/);
        if (qQ) {
          const QQ = [];
          for (wQ++; wQ < WQ.length && !/^\s*```\s*$/.test(WQ[wQ]);) QQ.push(WQ[wQ]), wQ++;
          wQ++, XQ.push({
            kind: "code",
            lang: qQ[1] || "text",
            code: QQ.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const zQ = QQ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (zQ) {
          const QQ = zQ[2].trim();
          XQ.push({
            kind: "heading",
            level: zQ[1].length,
            text: QQ,
            anchor: TQ(QQ)
          }), wQ++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(QQ)) {
          XQ.push({
            kind: "rule"
          }), wQ++;
          continue
        }
        if (QQ.trim().startsWith("|") && wQ + 1 < WQ.length && /^\s*\|[\s:|-]+\|\s*$/.test(WQ[wQ + 1])) {
          const qQ = PQ(QQ),
            TQ = [];
          for (wQ += 2; wQ < WQ.length && WQ[wQ].trim().startsWith("|");) TQ.push(PQ(WQ[wQ])), wQ++;
          XQ.push({
            kind: "table",
            header: qQ,
            rows: TQ
          });
          continue
        }
        if (QQ.startsWith(">")) {
          const QQ = [];
          for (; wQ < WQ.length && WQ[wQ].startsWith(">");) QQ.push(WQ[wQ].replace(/^>\s?/, "")), wQ++;
          XQ.push({
            kind: "quote",
            blocks: rQ(QQ.join("\n"))
          });
          continue
        }
        if (gQ.test(QQ)) {
          const qQ = [],
            TQ = /^\s*\d+\./.test(QQ);
          for (; wQ < WQ.length && !FQ(WQ[wQ]) && (gQ.test(WQ[wQ]) || /^\s+\S/.test(WQ[wQ]));) qQ.push(WQ[wQ]), wQ++;
          XQ.push({
            kind: "list",
            ordered: TQ,
            items: JQ(qQ)
          });
          continue
        }
        const sQ = [];
        for (; wQ < WQ.length && !FQ(WQ[wQ]) && !/^\s*```/.test(WQ[wQ]) && !/^#{1,6}\s/.test(WQ[wQ]) && !WQ[wQ].startsWith(">") && !gQ.test(WQ[wQ]) && (!WQ[wQ].trim().startsWith("|") || 0 !== sQ.length);) sQ.push(WQ[wQ].trim()), wQ++;
        0 === sQ.length && (sQ.push(WQ[wQ].trim()), wQ++), XQ.push({
          kind: "paragraph",
          text: sQ.join(" ")
        })
      }
      return XQ
    }

    function IQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const XQ = rQ(QQ);
      let wQ = "";
      const qQ = [],
        TQ = [],
        zQ = new Map;
      for (const PQ of XQ) {
        if ("heading" === PQ.kind) {
          var sQ;
          const QQ = (null !== (sQ = zQ.get(PQ.anchor)) && void 0 !== sQ ? sQ : 0) + 1;
          zQ.set(PQ.anchor, QQ), QQ > 1 && (PQ.anchor = `${PQ.anchor}-${QQ}`)
        }
        if ("heading" === PQ.kind && 1 === PQ.level && !wQ) {
          wQ = PQ.text;
          continue
        }
        if ("heading" === PQ.kind && PQ.level <= WQ) {
          TQ.push({
            heading: PQ,
            blocks: []
          });
          continue
        }
        const QQ = TQ.at(-1);
        QQ ? QQ.blocks.push(PQ) : qQ.push(PQ)
      }
      const FQ = QQ => {
        for (;
          "rule" === (null === (WQ = QQ.at(-1)) || void 0 === WQ ? void 0 : WQ.kind);) {
          var WQ;
          QQ.pop()
        }
      };
      FQ(qQ);
      for (const PQ of TQ) FQ(PQ.blocks);
      return {
        title: wQ,
        intro: qQ,
        sections: TQ
      }
    }

    function jQ(QQ) {
      return [{
        heading: null,
        blocks: QQ.intro
      }, ...QQ.sections.map((QQ => ({
        heading: QQ.heading,
        blocks: QQ.blocks
      })))]
    }

    function BQ(QQ) {
      return QQ.flatMap((QQ => "code" === QQ.kind ? [QQ] : "quote" === QQ.kind ? BQ(QQ.blocks) : []))
    }

    function yQ(QQ) {
      switch (QQ.kind) {
        case "heading":
        case "paragraph":
          return QQ.text;
        case "code":
          return QQ.code;
        case "table":
          return [QQ.header, ...QQ.rows].map((QQ => QQ.join(" "))).join(" ");
        case "list": {
          const WQ = QQ => QQ.map((QQ => `${QQ.text} ${WQ(QQ.children)}`)).join(" ");
          return WQ(QQ.items)
        }
        case "quote":
          return QQ.blocks.map(yQ).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6890: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => JQ,
      h: () => zQ,
      k: () => sQ
    });
    XQ(6888);
    var wQ = XQ(61),
      qQ = XQ(5062),
      TQ = XQ(1145);
    const zQ = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function sQ(QQ, WQ) {
      return QQ === WQ ? QQ : `${QQ} (${WQ})`
    }

    function FQ(QQ) {
      const WQ = [];
      let XQ = 0;
      for (const wQ of QQ.matchAll(zQ)) {
        wQ.index > XQ && WQ.push(QQ.slice(XQ, wQ.index));
        const [, qQ, zQ, FQ, PQ, gQ, JQ] = wQ;
        void 0 !== qQ ? WQ.push(sQ(qQ, zQ)) : void 0 !== FQ || void 0 !== PQ ? WQ.push((0, TQ.jsx)("strong", {
          children: null !== FQ && void 0 !== FQ ? FQ : PQ
        }, wQ.index)) : void 0 !== gQ ? WQ.push((0, TQ.jsx)("em", {
          children: gQ
        }, wQ.index)) : WQ.push((0, TQ.jsx)("code", {
          children: JQ
        }, wQ.index)), XQ = wQ.index + wQ[0].length
      }
      return XQ < QQ.length && WQ.push(QQ.slice(XQ)), WQ
    }

    function PQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const wQ = QQ.map(((QQ, WQ) => (0, TQ.jsxs)("li", {
        children: [FQ(QQ.text), QQ.children.length > 0 && PQ(QQ.children, !1)]
      }, WQ)));
      return WQ ? (0, TQ.jsx)("ol", {
        start: XQ,
        children: wQ
      }) : (0, TQ.jsx)("ul", {
        children: wQ
      })
    }

    function gQ(QQ, WQ) {
      switch (QQ.kind) {
        case "heading":
          return QQ.level <= 2 ? (0, TQ.jsx)("h3", {
            children: FQ(QQ.text)
          }, WQ) : (0, TQ.jsx)("h4", {
            children: FQ(QQ.text)
          }, WQ);
        case "paragraph":
          return (0, TQ.jsx)("p", {
            children: FQ(QQ.text)
          }, WQ);
        case "list":
          return (0, TQ.jsx)(wQ.Fragment, {
            children: PQ(QQ.items, QQ.ordered)
          }, WQ);
        case "quote":
          return (0, TQ.jsx)("blockquote", {
            children: QQ.blocks.map(((QQ, WQ) => gQ(QQ, WQ)))
          }, WQ);
        case "code":
          return (0, TQ.jsx)("pre", {
            children: (0, TQ.jsx)("code", {
              children: QQ.code
            })
          }, WQ);
        case "table":
          return (0, TQ.jsxs)("table", {
            children: [(0, TQ.jsx)("thead", {
              children: (0, TQ.jsx)("tr", {
                children: QQ.header.map(((QQ, WQ) => (0, TQ.jsx)("th", {
                  children: FQ(QQ)
                }, WQ)))
              })
            }), (0, TQ.jsx)("tbody", {
              children: QQ.rows.map(((QQ, WQ) => (0, TQ.jsx)("tr", {
                children: QQ.map(((QQ, WQ) => (0, TQ.jsx)("td", {
                  children: FQ(QQ)
                }, WQ)))
              }, WQ)))
            })]
          }, WQ);
        case "rule":
          return (0, TQ.jsx)("hr", {}, WQ)
      }
    }

    function JQ(QQ) {
      let {
        markdown: WQ
      } = QQ, XQ = 0;
      return (0, TQ.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, qQ.B)(WQ).map(((QQ, WQ) => {
          if ("list" !== QQ.kind || !QQ.ordered) return XQ = 0, gQ(QQ, WQ);
          const qQ = XQ + 1;
          return XQ += QQ.items.length, (0, TQ.jsx)(wQ.Fragment, {
            children: PQ(QQ.items, !0, qQ)
          }, WQ)
        }))
      })
    }
  },
  6886: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => DQ,
      k: () => pQ,
      h: () => UQ,
      o: () => jQ
    });
    var wQ = XQ(1243),
      qQ = XQ(6840),
      TQ = XQ(5223);
    const zQ = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function sQ(QQ) {
      return (0, TQ.h)(QQ, zQ, (WQ => !/^my/i.test(WQ[0]) || !/follow $/i.test(QQ.slice(0, WQ.index)))).length > 0
    }
    const FQ = /\byou(?:r|'re|'ll)?\b/i,
      PQ = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      gQ = 2;

    function JQ(QQ) {
      return function(QQ) {
        const WQ = [];
        let XQ = !1;
        for (const wQ of QQ.split("\n")) {
          if (/^\s*(```|~~~)/.test(wQ)) {
            XQ = !XQ;
            continue
          }
          if (XQ || /^\s*>/.test(wQ)) continue;
          const QQ = wQ.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          WQ.push(...(0, qQ.n)(QQ))
        }
        return WQ
      }(QQ).filter((QQ => sQ(QQ) || PQ.test(QQ) && !FQ.test(QQ)))
    }
    const rQ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      IQ = [{
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

    function jQ(QQ) {
      const WQ = IQ.findIndex((WQ => WQ.name === QQ));
      return -1 === WQ ? IQ.length : WQ
    }
    const BQ = 2500,
      yQ = 12e4;
    class VQ extends Error {
      constructor(QQ) {
        super(`Studio AI chat ${QQ}`), this.reason = QQ
      }
    }

    function DQ(QQ, WQ) {
      const XQ = new AbortController,
        wQ = () => {
          XQ.abort()
        },
        qQ = setTimeout(wQ, QQ);
      return null !== WQ && void 0 !== WQ && WQ.aborted && wQ(), null === WQ || void 0 === WQ || WQ.addEventListener("abort", wQ, {
        once: !0
      }), {
        signal: XQ.signal,
        clear: () => {
          clearTimeout(qQ), null === WQ || void 0 === WQ || WQ.removeEventListener("abort", wQ)
        }
      }
    }

    function pQ(QQ, WQ, XQ) {
      return new Promise(((qQ, TQ) => {
        const zQ = new AbortController,
          sQ = () => {
            zQ.abort(), TQ((0, wQ.i)(XQ))
          };
        if (null !== XQ && void 0 !== XQ && XQ.aborted) return void sQ();
        null === XQ || void 0 === XQ || XQ.addEventListener("abort", sQ, {
          once: !0
        });
        const FQ = IQ.map((() => !1));
        let PQ = null;
        const gQ = IQ.map((() => !1)),
          JQ = IQ.map((() => !1));
        IQ.forEach(((wQ, rQ) => {
          const jQ = DQ(yQ, zQ.signal);
          bQ(wQ, [{
            role: "user",
            content: QQ
          }], jQ.signal).then((QQ => {
            zQ.signal.aborted || ("busy" === QQ || "failed" === QQ ? (gQ[rQ] = "busy" === QQ, JQ[rQ] = !0) : null !== QQ && (null === PQ || rQ < PQ.rank) && (PQ = {
              rank: rQ,
              answer: {
                text: QQ.text,
                model: wQ.name
              }
            }, WQ(PQ.answer)))
          }), (QQ => {
            zQ.signal.aborted || (JQ[rQ] = !0, console.warn(`Studio AI: ${wQ.name} couldn't be reached`, QQ))
          })).finally((() => {
            jQ.clear(), FQ[rQ] = !0, zQ.signal.aborted || (() => {
              var QQ, WQ;
              const wQ = null !== (QQ = null === (WQ = PQ) || void 0 === WQ ? void 0 : WQ.rank) && void 0 !== QQ ? QQ : IQ.length;
              FQ.slice(0, wQ).includes(!1) || (null === XQ || void 0 === XQ || XQ.removeEventListener("abort", sQ), zQ.abort(), null !== PQ ? qQ({
                ...PQ.answer,
                isFinal: !JQ.slice(0, PQ.rank).includes(!0)
              }) : TQ(new VQ(gQ.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((QQ => {
            console.error("Studio AI: showing an answer failed", QQ)
          }))
        }))
      }))
    }

    function GQ(QQ) {
      var WQ, XQ;
      return "length" === (null === QQ || void 0 === QQ || null === (WQ = QQ.choices) || void 0 === WQ || null === (XQ = WQ[0]) || void 0 === XQ ? void 0 : XQ.finish_reason)
    }
    async function UQ(QQ, WQ, XQ) {
      const wQ = IQ.find((WQ => WQ.name === QQ));
      if (void 0 === wQ) return "failed";
      const qQ = DQ(yQ, XQ);
      try {
        const QQ = await bQ(wQ, WQ, qQ.signal);
        return null !== QQ && "object" === typeof QQ ? QQ.isCutOff ? (console.warn(`Studio AI: ${wQ.name}'s answer was cut off at the token limit`), null) : {
          text: QQ.text
        } : QQ
      } finally {
        qQ.clear()
      }
    }
    async function bQ(QQ, WQ, XQ) {
      const wQ = await fetch(rQ, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: QQ.name,
          messages: WQ,
          max_tokens: BQ,
          temperature: QQ.temperature,
          reasoning_effort: QQ.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: XQ
      });
      if (429 === wQ.status) return "busy";
      if (!wQ.ok) return console.warn(`Studio AI: ${QQ.name} answered ${wQ.status}`), "failed";
      const qQ = await wQ.json().catch((() => null)),
        TQ = function(QQ) {
          var WQ, XQ, wQ;
          const qQ = null === QQ || void 0 === QQ || null === (WQ = QQ.choices) || void 0 === WQ || null === (XQ = WQ[0]) || void 0 === XQ || null === (wQ = XQ.message) || void 0 === wQ ? void 0 : wQ.content;
          if ("string" !== typeof qQ) return null;
          const TQ = qQ.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === TQ ? null : TQ
        }(qQ);
      return null !== TQ && function(QQ) {
        const WQ = JQ(QQ);
        return WQ.length >= gQ || WQ.some((QQ => sQ(QQ)))
      }(TQ) ? (console.warn(`Studio AI: ${QQ.name} thought out loud instead of answering`), "failed") : null === TQ ? null : {
        text: TQ,
        isCutOff: GQ(qQ)
      }
    }
  },
  6840: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => pQ,
      E: () => UQ,
      G: () => DQ,
      H: () => JQ,
      K: () => PQ,
      M: () => IQ,
      c: () => jQ,
      e: () => sQ,
      g: () => zQ,
      h: () => BQ,
      l: () => rQ,
      n: () => gQ,
      p: () => TQ,
      r: () => qQ,
      v: () => GQ,
      x: () => bQ,
      y: () => yQ
    });
    var wQ = XQ(5223);
    const qQ = 2e3,
      TQ = 2e4;

    function zQ(QQ) {
      return QQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function sQ(QQ) {
      return QQ.replace(/\$/g, "\\$")
    }
    const FQ = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function PQ(QQ, WQ) {
      FQ.lastIndex = WQ;
      const XQ = FQ.exec(QQ);
      return XQ.index + XQ[0].length
    }

    function gQ(QQ) {
      return (0, wQ.y)(QQ, /\s+/g, (0, wQ.u)(".!?")).flatMap((QQ => QQ.split("\n")))
    }

    function JQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ;
      const wQ = [...QQ.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((QQ => QQ.index)),
        qQ = wQ.filter((QQ => QQ < WQ)),
        TQ = wQ.find((QQ => QQ >= XQ));
      return [0 === qQ.length ? 0 : qQ.at(-1) + 1, void 0 === TQ ? QQ.length : TQ + 1]
    }

    function rQ(QQ, WQ) {
      const XQ = QQ.charCodeAt(WQ - 1);
      return QQ.slice(0, WQ > 0 && WQ < QQ.length && XQ >= 55296 && XQ <= 56319 ? WQ - 1 : WQ)
    }

    function IQ(QQ, WQ) {
      return `${WQ}${QQ.replace(/\\/g,"\\\\").split(WQ).join(`\\${WQ}`)}${WQ}`
    }

    function jQ(QQ) {
      return QQ.charAt(0).toUpperCase() + QQ.slice(1)
    }

    function BQ(QQ) {
      return Math.round(QQ).toLocaleString("en-US")
    }

    function yQ(QQ) {
      return QQ.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((QQ => "" !== QQ))
    }
    const VQ = 3;

    function DQ(QQ, WQ) {
      return yQ(QQ).filter((QQ => QQ.length >= VQ && !/\d/.test(QQ))).map((QQ => `${QQ} ${WQ}`))
    }

    function pQ(QQ) {
      return QQ.split(/[\s:_]+/).filter((QQ => "" !== QQ)).map(zQ).join("[`:_\\s]+")
    }

    function GQ(QQ) {
      return yQ(QQ.split(".").pop())
    }

    function UQ(QQ) {
      return QQ.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function bQ(QQ) {
      let WQ = null;
      return () => {
        const XQ = WQ ??= QQ();
        return XQ.catch((() => {
          WQ === XQ && (WQ = null)
        })), XQ
      }
    }
  },
  5223: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return {
        notAfter: QQ
      }
    }
    XQ.d(WQ, {
      e: () => FQ,
      h: () => PQ,
      l: () => sQ,
      o: () => wQ,
      p: () => qQ,
      q: () => TQ,
      u: () => zQ,
      v: () => gQ,
      y: () => JQ
    });
    const qQ = wQ("\\w$."),
      TQ = wQ("\\w.,");

    function zQ(QQ) {
      return WQ => FQ(WQ, QQ)
    }

    function sQ(QQ) {
      return WQ => !QQ.test(WQ.input.slice(0, WQ.index))
    }

    function FQ(QQ, WQ) {
      return QQ.index > 0 && new RegExp(`[${WQ}]`).test(QQ.input[QQ.index - 1])
    }

    function PQ(QQ, WQ, XQ) {
      return function(QQ) {
        return void 0 !== QQ && "function" !== typeof QQ
      }(XQ) ? function(QQ, WQ, XQ) {
        const wQ = WQ.flags.replace(/[gy]/g, ""),
          qQ = new RegExp(`[^${XQ}](?:${WQ.source})`, `${wQ}g`),
          TQ = [],
          zQ = XQ => {
            const wQ = XQ.index + XQ[0].length;
            return ("" === XQ[0] ? rQ(QQ, WQ, wQ) : wQ) - 1
          },
          sQ = new RegExp(`(?:${WQ.source})`, `${wQ}y`).exec(QQ);
        if (sQ) {
          if (TQ.push(sQ), !WQ.global) return TQ;
          qQ.lastIndex = zQ(sQ)
        }
        for (let FQ = qQ.exec(QQ); FQ; FQ = qQ.exec(QQ)) {
          const XQ = rQ(QQ, WQ, FQ.index) - FQ.index;
          if (FQ[0] = FQ[0].slice(XQ), FQ.index += XQ, TQ.push(FQ), !WQ.global) break;
          qQ.lastIndex = zQ(FQ)
        }
        return TQ
      }(QQ, WQ, XQ.notAfter) : function(QQ, WQ, XQ) {
        const wQ = new RegExp(WQ.source, `${WQ.flags.replace(/[gy]/g,"")}g`),
          qQ = [];
        for (let TQ = wQ.exec(QQ); TQ; TQ = wQ.exec(QQ))
          if (!XQ || XQ(TQ)) {
            if (qQ.push(TQ), !WQ.global) break;
            "" === TQ[0] && (wQ.lastIndex = rQ(QQ, WQ, wQ.lastIndex))
          } else wQ.lastIndex = rQ(QQ, WQ, TQ.index);
        return qQ
      }(QQ, WQ, XQ)
    }

    function gQ(QQ, WQ, XQ, wQ) {
      let qQ = "",
        TQ = 0;
      for (const zQ of PQ(QQ, WQ, XQ)) qQ += QQ.slice(TQ, zQ.index) + wQ(zQ), TQ = zQ.index + zQ[0].length;
      return qQ + QQ.slice(TQ)
    }

    function JQ(QQ, WQ, XQ) {
      const wQ = [];
      let qQ = 0;
      for (const TQ of PQ(QQ, WQ, XQ)) wQ.push(QQ.slice(qQ, TQ.index)), qQ = TQ.index + TQ[0].length;
      return [...wQ, QQ.slice(qQ)]
    }

    function rQ(QQ, WQ, XQ) {
      var wQ;
      return XQ + (WQ.unicode && (null !== (wQ = QQ.codePointAt(XQ)) && void 0 !== wQ ? wQ : 0) > 65535 ? 2 : 1)
    }
  },
  6888: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);