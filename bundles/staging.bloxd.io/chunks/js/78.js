export const id = 78;
export const ids = [78];
export const modules = {
  4585: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => YQ,
      F: () => bQ,
      c: () => LQ,
      f: () => DQ,
      h: () => tQ,
      l: () => AQ,
      m: () => kQ,
      q: () => qQ,
      u: () => oQ,
      y: () => xQ
    });
    const LQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function qQ(QQ) {
      try {
        return decodeURIComponent(QQ.slice(1))
      } catch {
        return QQ.slice(1)
      }
    }

    function oQ(QQ) {
      return QQ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const DQ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${LQ.source}`, "g");

    function kQ(QQ, FQ) {
      return 2 === QQ.length ? FQ.replace(/^ (.*) $/, "$1") : FQ
    }

    function vQ(QQ) {
      return "" === QQ.trim()
    }

    function mQ(QQ) {
      const FQ = [];
      for (const wQ of QQ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) FQ.length > 0 && FQ[FQ.length - 1].endsWith("\\") ? FQ[FQ.length - 1] += `|${wQ}` : FQ.push(wQ);
      return FQ.map((QQ => QQ.trim().replaceAll("\\|", "|")))
    }
    const uQ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function HQ(QQ) {
      const FQ = [],
        wQ = [{
          indent: -1,
          items: FQ
        }];
      let LQ = null;
      for (const qQ of QQ) {
        const QQ = qQ.match(uQ);
        if (!QQ) {
          LQ && (LQ.text += ` ${qQ.trim()}`);
          continue
        }
        const FQ = QQ[1].replace(/\t/g, "  ").length;
        for (; FQ <= wQ[wQ.length - 1].indent;) wQ.pop();
        LQ = {
          text: QQ[3].trim(),
          children: []
        }, wQ[wQ.length - 1].items.push(LQ), wQ.push({
          indent: FQ,
          items: LQ.children
        })
      }
      return FQ
    }

    function bQ(QQ) {
      const FQ = QQ.replace(/\r\n/g, "\n").split("\n"),
        wQ = [];
      let LQ = 0;
      for (; LQ < FQ.length;) {
        const QQ = FQ[LQ];
        if (vQ(QQ)) {
          LQ++;
          continue
        }
        const qQ = QQ.match(/^\s*```\s*(\w*)\s*$/);
        if (qQ) {
          const QQ = [];
          for (LQ++; LQ < FQ.length && !/^\s*```\s*$/.test(FQ[LQ]);) QQ.push(FQ[LQ]), LQ++;
          LQ++, wQ.push({
            kind: "code",
            lang: qQ[1] || "text",
            code: QQ.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const DQ = QQ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (DQ) {
          const QQ = DQ[2].trim();
          wQ.push({
            kind: "heading",
            level: DQ[1].length,
            text: QQ,
            anchor: oQ(QQ)
          }), LQ++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(QQ)) {
          wQ.push({
            kind: "rule"
          }), LQ++;
          continue
        }
        if (QQ.trim().startsWith("|") && LQ + 1 < FQ.length && /^\s*\|[\s:|-]+\|\s*$/.test(FQ[LQ + 1])) {
          const qQ = mQ(QQ),
            oQ = [];
          for (LQ += 2; LQ < FQ.length && FQ[LQ].trim().startsWith("|");) oQ.push(mQ(FQ[LQ])), LQ++;
          wQ.push({
            kind: "table",
            header: qQ,
            rows: oQ
          });
          continue
        }
        if (QQ.startsWith(">")) {
          const QQ = [];
          for (; LQ < FQ.length && FQ[LQ].startsWith(">");) QQ.push(FQ[LQ].replace(/^>\s?/, "")), LQ++;
          wQ.push({
            kind: "quote",
            blocks: bQ(QQ.join("\n"))
          });
          continue
        }
        if (uQ.test(QQ)) {
          const qQ = [],
            oQ = /^\s*\d+\./.test(QQ);
          for (; LQ < FQ.length && !vQ(FQ[LQ]) && (uQ.test(FQ[LQ]) || /^\s+\S/.test(FQ[LQ]));) qQ.push(FQ[LQ]), LQ++;
          wQ.push({
            kind: "list",
            ordered: oQ,
            items: HQ(qQ)
          });
          continue
        }
        const kQ = [];
        for (; LQ < FQ.length && !vQ(FQ[LQ]) && !/^\s*```/.test(FQ[LQ]) && !/^#{1,6}\s/.test(FQ[LQ]) && !FQ[LQ].startsWith(">") && !uQ.test(FQ[LQ]) && (!FQ[LQ].trim().startsWith("|") || 0 !== kQ.length);) kQ.push(FQ[LQ].trim()), LQ++;
        0 === kQ.length && (kQ.push(FQ[LQ].trim()), LQ++), wQ.push({
          kind: "paragraph",
          text: kQ.join(" ")
        })
      }
      return wQ
    }

    function YQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const wQ = bQ(QQ);
      let LQ = "";
      const qQ = [],
        oQ = [],
        DQ = new Map;
      for (const mQ of wQ) {
        if ("heading" === mQ.kind) {
          var kQ;
          const QQ = (null !== (kQ = DQ.get(mQ.anchor)) && void 0 !== kQ ? kQ : 0) + 1;
          DQ.set(mQ.anchor, QQ), QQ > 1 && (mQ.anchor = `${mQ.anchor}-${QQ}`)
        }
        if ("heading" === mQ.kind && 1 === mQ.level && !LQ) {
          LQ = mQ.text;
          continue
        }
        if ("heading" === mQ.kind && mQ.level <= FQ) {
          oQ.push({
            heading: mQ,
            blocks: []
          });
          continue
        }
        const QQ = oQ.at(-1);
        QQ ? QQ.blocks.push(mQ) : qQ.push(mQ)
      }
      const vQ = QQ => {
        for (;
          "rule" === (null === (FQ = QQ.at(-1)) || void 0 === FQ ? void 0 : FQ.kind);) {
          var FQ;
          QQ.pop()
        }
      };
      vQ(qQ);
      for (const mQ of oQ) vQ(mQ.blocks);
      return {
        title: LQ,
        intro: qQ,
        sections: oQ
      }
    }

    function xQ(QQ) {
      return [{
        heading: null,
        blocks: QQ.intro
      }, ...QQ.sections.map((QQ => ({
        heading: QQ.heading,
        blocks: QQ.blocks
      })))]
    }

    function AQ(QQ) {
      return QQ.flatMap((QQ => "code" === QQ.kind ? [QQ] : "quote" === QQ.kind ? AQ(QQ.blocks) : []))
    }

    function tQ(QQ) {
      switch (QQ.kind) {
        case "heading":
        case "paragraph":
          return QQ.text;
        case "code":
          return QQ.code;
        case "table":
          return [QQ.header, ...QQ.rows].map((QQ => QQ.join(" "))).join(" ");
        case "list": {
          const FQ = QQ => QQ.map((QQ => `${QQ.text} ${FQ(QQ.children)}`)).join(" ");
          return FQ(QQ.items)
        }
        case "quote":
          return QQ.blocks.map(tQ).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6336: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => HQ,
      d: () => DQ,
      h: () => kQ
    });
    wQ(6332);
    var LQ = wQ(53),
      qQ = wQ(4585),
      oQ = wQ(1107);
    const DQ = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function kQ(QQ, FQ) {
      return QQ === FQ ? QQ : `${QQ} (${FQ})`
    }

    function vQ(QQ) {
      const FQ = [];
      let wQ = 0;
      for (const LQ of QQ.matchAll(DQ)) {
        LQ.index > wQ && FQ.push(QQ.slice(wQ, LQ.index));
        const [, qQ, DQ, vQ, mQ, uQ, HQ] = LQ;
        void 0 !== qQ ? FQ.push(kQ(qQ, DQ)) : void 0 !== vQ || void 0 !== mQ ? FQ.push((0, oQ.jsx)("strong", {
          children: null !== vQ && void 0 !== vQ ? vQ : mQ
        }, LQ.index)) : void 0 !== uQ ? FQ.push((0, oQ.jsx)("em", {
          children: uQ
        }, LQ.index)) : FQ.push((0, oQ.jsx)("code", {
          children: HQ
        }, LQ.index)), wQ = LQ.index + LQ[0].length
      }
      return wQ < QQ.length && FQ.push(QQ.slice(wQ)), FQ
    }

    function mQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const LQ = QQ.map(((QQ, FQ) => (0, oQ.jsxs)("li", {
        children: [vQ(QQ.text), QQ.children.length > 0 && mQ(QQ.children, !1)]
      }, FQ)));
      return FQ ? (0, oQ.jsx)("ol", {
        start: wQ,
        children: LQ
      }) : (0, oQ.jsx)("ul", {
        children: LQ
      })
    }

    function uQ(QQ, FQ) {
      switch (QQ.kind) {
        case "heading":
          return QQ.level <= 2 ? (0, oQ.jsx)("h3", {
            children: vQ(QQ.text)
          }, FQ) : (0, oQ.jsx)("h4", {
            children: vQ(QQ.text)
          }, FQ);
        case "paragraph":
          return (0, oQ.jsx)("p", {
            children: vQ(QQ.text)
          }, FQ);
        case "list":
          return (0, oQ.jsx)(LQ.Fragment, {
            children: mQ(QQ.items, QQ.ordered)
          }, FQ);
        case "quote":
          return (0, oQ.jsx)("blockquote", {
            children: QQ.blocks.map(((QQ, FQ) => uQ(QQ, FQ)))
          }, FQ);
        case "code":
          return (0, oQ.jsx)("pre", {
            children: (0, oQ.jsx)("code", {
              children: QQ.code
            })
          }, FQ);
        case "table":
          return (0, oQ.jsxs)("table", {
            children: [(0, oQ.jsx)("thead", {
              children: (0, oQ.jsx)("tr", {
                children: QQ.header.map(((QQ, FQ) => (0, oQ.jsx)("th", {
                  children: vQ(QQ)
                }, FQ)))
              })
            }), (0, oQ.jsx)("tbody", {
              children: QQ.rows.map(((QQ, FQ) => (0, oQ.jsx)("tr", {
                children: QQ.map(((QQ, FQ) => (0, oQ.jsx)("td", {
                  children: vQ(QQ)
                }, FQ)))
              }, FQ)))
            })]
          }, FQ);
        case "rule":
          return (0, oQ.jsx)("hr", {}, FQ)
      }
    }

    function HQ(QQ) {
      let {
        markdown: FQ
      } = QQ, wQ = 0;
      return (0, oQ.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, qQ.F)(FQ).map(((QQ, FQ) => {
          if ("list" !== QQ.kind || !QQ.ordered) return wQ = 0, uQ(QQ, FQ);
          const qQ = wQ + 1;
          return wQ += QQ.items.length, (0, oQ.jsx)(LQ.Fragment, {
            children: mQ(QQ.items, !0, qQ)
          }, FQ)
        }))
      })
    }
  },
  6325: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => MQ,
      f: () => GQ,
      c: () => cQ,
      j: () => xQ
    });
    var LQ = wQ(1804),
      qQ = wQ(6291),
      oQ = wQ(4705);
    const DQ = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function kQ(QQ) {
      return (0, oQ.d)(QQ, DQ, (FQ => !/^my/i.test(FQ[0]) || !/follow $/i.test(QQ.slice(0, FQ.index)))).length > 0
    }
    const vQ = /\byou(?:r|'re|'ll)?\b/i,
      mQ = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      uQ = 2;

    function HQ(QQ) {
      return function(QQ) {
        const FQ = [];
        let wQ = !1;
        for (const LQ of QQ.split("\n")) {
          if (/^\s*(```|~~~)/.test(LQ)) {
            wQ = !wQ;
            continue
          }
          if (wQ || /^\s*>/.test(LQ)) continue;
          const QQ = LQ.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          FQ.push(...(0, qQ.r)(QQ))
        }
        return FQ
      }(QQ).filter((QQ => kQ(QQ) || mQ.test(QQ) && !vQ.test(QQ)))
    }
    const bQ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      YQ = [{
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

    function xQ(QQ) {
      const FQ = YQ.findIndex((FQ => FQ.name === QQ));
      return -1 === FQ ? YQ.length : FQ
    }
    const AQ = 2500,
      tQ = 12e4;
    class eQ extends Error {
      constructor(QQ) {
        super(`Studio AI chat ${QQ}`), this.reason = QQ
      }
    }

    function MQ(QQ, FQ) {
      const wQ = new AbortController,
        LQ = () => {
          wQ.abort()
        },
        qQ = setTimeout(LQ, QQ);
      return null !== FQ && void 0 !== FQ && FQ.aborted && LQ(), null === FQ || void 0 === FQ || FQ.addEventListener("abort", LQ, {
        once: !0
      }), {
        signal: wQ.signal,
        clear: () => {
          clearTimeout(qQ), null === FQ || void 0 === FQ || FQ.removeEventListener("abort", LQ)
        }
      }
    }

    function GQ(QQ, FQ, wQ) {
      return new Promise(((qQ, oQ) => {
        const DQ = new AbortController,
          kQ = () => {
            DQ.abort(), oQ((0, LQ.e)(wQ))
          };
        if (null !== wQ && void 0 !== wQ && wQ.aborted) return void kQ();
        null === wQ || void 0 === wQ || wQ.addEventListener("abort", kQ, {
          once: !0
        });
        const vQ = YQ.map((() => !1));
        let mQ = null;
        const uQ = YQ.map((() => !1)),
          HQ = YQ.map((() => !1));
        YQ.forEach(((LQ, bQ) => {
          const xQ = MQ(tQ, DQ.signal);
          CQ(LQ, [{
            role: "user",
            content: QQ
          }], xQ.signal).then((QQ => {
            DQ.signal.aborted || ("busy" === QQ || "failed" === QQ ? (uQ[bQ] = "busy" === QQ, HQ[bQ] = !0) : null !== QQ && (null === mQ || bQ < mQ.rank) && (mQ = {
              rank: bQ,
              answer: {
                text: QQ.text,
                model: LQ.name
              }
            }, FQ(mQ.answer)))
          }), (QQ => {
            DQ.signal.aborted || (HQ[bQ] = !0, console.warn(`Studio AI: ${LQ.name} couldn't be reached`, QQ))
          })).finally((() => {
            xQ.clear(), vQ[bQ] = !0, DQ.signal.aborted || (() => {
              var QQ, FQ;
              const LQ = null !== (QQ = null === (FQ = mQ) || void 0 === FQ ? void 0 : FQ.rank) && void 0 !== QQ ? QQ : YQ.length;
              vQ.slice(0, LQ).includes(!1) || (null === wQ || void 0 === wQ || wQ.removeEventListener("abort", kQ), DQ.abort(), null !== mQ ? qQ({
                ...mQ.answer,
                isFinal: !HQ.slice(0, mQ.rank).includes(!0)
              }) : oQ(new eQ(uQ.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((QQ => {
            console.error("Studio AI: showing an answer failed", QQ)
          }))
        }))
      }))
    }

    function pQ(QQ) {
      var FQ, wQ;
      return "length" === (null === QQ || void 0 === QQ || null === (FQ = QQ.choices) || void 0 === FQ || null === (wQ = FQ[0]) || void 0 === wQ ? void 0 : wQ.finish_reason)
    }
    async function cQ(QQ, FQ, wQ) {
      const LQ = YQ.find((FQ => FQ.name === QQ));
      if (void 0 === LQ) return "failed";
      const qQ = MQ(tQ, wQ);
      try {
        const QQ = await CQ(LQ, FQ, qQ.signal);
        return null !== QQ && "object" === typeof QQ ? QQ.isCutOff ? (console.warn(`Studio AI: ${LQ.name}'s answer was cut off at the token limit`), null) : {
          text: QQ.text
        } : QQ
      } finally {
        qQ.clear()
      }
    }
    async function CQ(QQ, FQ, wQ) {
      const LQ = await fetch(bQ, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: QQ.name,
          messages: FQ,
          max_tokens: AQ,
          temperature: QQ.temperature,
          reasoning_effort: QQ.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: wQ
      });
      if (429 === LQ.status) return "busy";
      if (!LQ.ok) return console.warn(`Studio AI: ${QQ.name} answered ${LQ.status}`), "failed";
      const qQ = await LQ.json().catch((() => null)),
        oQ = function(QQ) {
          var FQ, wQ, LQ;
          const qQ = null === QQ || void 0 === QQ || null === (FQ = QQ.choices) || void 0 === FQ || null === (wQ = FQ[0]) || void 0 === wQ || null === (LQ = wQ.message) || void 0 === LQ ? void 0 : LQ.content;
          if ("string" !== typeof qQ) return null;
          const oQ = qQ.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === oQ ? null : oQ
        }(qQ);
      return null !== oQ && function(QQ) {
        const FQ = HQ(QQ);
        return FQ.length >= uQ || FQ.some((QQ => kQ(QQ)))
      }(oQ) ? (console.warn(`Studio AI: ${QQ.name} thought out loud instead of answering`), "failed") : null === oQ ? null : {
        text: oQ,
        isCutOff: pQ(qQ)
      }
    }
  },
  6291: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => tQ,
      C: () => GQ,
      G: () => cQ,
      H: () => MQ,
      K: () => HQ,
      L: () => mQ,
      O: () => YQ,
      e: () => xQ,
      i: () => kQ,
      j: () => DQ,
      m: () => AQ,
      n: () => bQ,
      r: () => uQ,
      u: () => oQ,
      v: () => qQ,
      x: () => pQ,
      y: () => CQ
    });
    var LQ = wQ(4705);
    const qQ = 2e3,
      oQ = 2e4;

    function DQ(QQ) {
      return QQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function kQ(QQ) {
      return QQ.replace(/\$/g, "\\$")
    }
    const vQ = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function mQ(QQ, FQ) {
      vQ.lastIndex = FQ;
      const wQ = vQ.exec(QQ);
      return wQ.index + wQ[0].length
    }

    function uQ(QQ) {
      return (0, LQ.y)(QQ, /\s+/g, (0, LQ.u)(".!?")).flatMap((QQ => QQ.split("\n")))
    }

    function HQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ;
      const LQ = [...QQ.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((QQ => QQ.index)),
        qQ = LQ.filter((QQ => QQ < FQ)),
        oQ = LQ.find((QQ => QQ >= wQ));
      return [0 === qQ.length ? 0 : qQ.at(-1) + 1, void 0 === oQ ? QQ.length : oQ + 1]
    }

    function bQ(QQ, FQ) {
      const wQ = QQ.charCodeAt(FQ - 1);
      return QQ.slice(0, FQ > 0 && FQ < QQ.length && wQ >= 55296 && wQ <= 56319 ? FQ - 1 : FQ)
    }

    function YQ(QQ, FQ) {
      return `${FQ}${QQ.replace(/\\/g,"\\\\").split(FQ).join(`\\${FQ}`)}${FQ}`
    }

    function xQ(QQ) {
      return QQ.charAt(0).toUpperCase() + QQ.slice(1)
    }

    function AQ(QQ) {
      return Math.round(QQ).toLocaleString("en-US")
    }

    function tQ(QQ) {
      return QQ.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((QQ => "" !== QQ))
    }
    const eQ = 3;

    function MQ(QQ, FQ) {
      return tQ(QQ).filter((QQ => QQ.length >= eQ && !/\d/.test(QQ))).map((QQ => `${QQ} ${FQ}`))
    }

    function GQ(QQ) {
      return QQ.split(/[\s:_]+/).filter((QQ => "" !== QQ)).map(DQ).join("[`:_\\s]+")
    }

    function pQ(QQ) {
      return tQ(QQ.split(".").pop())
    }

    function cQ(QQ) {
      return QQ.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function CQ(QQ) {
      let FQ = null;
      return () => {
        const wQ = FQ ??= QQ();
        return wQ.catch((() => {
          FQ === wQ && (FQ = null)
        })), wQ
      }
    }
  },
  4705: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return {
        notAfter: QQ
      }
    }
    wQ.d(FQ, {
      c: () => vQ,
      d: () => mQ,
      g: () => kQ,
      i: () => LQ,
      m: () => qQ,
      q: () => oQ,
      u: () => DQ,
      x: () => uQ,
      y: () => HQ
    });
    const qQ = LQ("\\w$."),
      oQ = LQ("\\w.,");

    function DQ(QQ) {
      return FQ => vQ(FQ, QQ)
    }

    function kQ(QQ) {
      return FQ => !QQ.test(FQ.input.slice(0, FQ.index))
    }

    function vQ(QQ, FQ) {
      return QQ.index > 0 && new RegExp(`[${FQ}]`).test(QQ.input[QQ.index - 1])
    }

    function mQ(QQ, FQ, wQ) {
      return function(QQ) {
        return void 0 !== QQ && "function" !== typeof QQ
      }(wQ) ? function(QQ, FQ, wQ) {
        const LQ = FQ.flags.replace(/[gy]/g, ""),
          qQ = new RegExp(`[^${wQ}](?:${FQ.source})`, `${LQ}g`),
          oQ = [],
          DQ = wQ => {
            const LQ = wQ.index + wQ[0].length;
            return ("" === wQ[0] ? bQ(QQ, FQ, LQ) : LQ) - 1
          },
          kQ = new RegExp(`(?:${FQ.source})`, `${LQ}y`).exec(QQ);
        if (kQ) {
          if (oQ.push(kQ), !FQ.global) return oQ;
          qQ.lastIndex = DQ(kQ)
        }
        for (let vQ = qQ.exec(QQ); vQ; vQ = qQ.exec(QQ)) {
          const wQ = bQ(QQ, FQ, vQ.index) - vQ.index;
          if (vQ[0] = vQ[0].slice(wQ), vQ.index += wQ, oQ.push(vQ), !FQ.global) break;
          qQ.lastIndex = DQ(vQ)
        }
        return oQ
      }(QQ, FQ, wQ.notAfter) : function(QQ, FQ, wQ) {
        const LQ = new RegExp(FQ.source, `${FQ.flags.replace(/[gy]/g,"")}g`),
          qQ = [];
        for (let oQ = LQ.exec(QQ); oQ; oQ = LQ.exec(QQ))
          if (!wQ || wQ(oQ)) {
            if (qQ.push(oQ), !FQ.global) break;
            "" === oQ[0] && (LQ.lastIndex = bQ(QQ, FQ, LQ.lastIndex))
          } else LQ.lastIndex = bQ(QQ, FQ, oQ.index);
        return qQ
      }(QQ, FQ, wQ)
    }

    function uQ(QQ, FQ, wQ, LQ) {
      let qQ = "",
        oQ = 0;
      for (const DQ of mQ(QQ, FQ, wQ)) qQ += QQ.slice(oQ, DQ.index) + LQ(DQ), oQ = DQ.index + DQ[0].length;
      return qQ + QQ.slice(oQ)
    }

    function HQ(QQ, FQ, wQ) {
      const LQ = [];
      let qQ = 0;
      for (const oQ of mQ(QQ, FQ, wQ)) LQ.push(QQ.slice(qQ, oQ.index)), qQ = oQ.index + oQ[0].length;
      return [...LQ, QQ.slice(qQ)]
    }

    function bQ(QQ, FQ, wQ) {
      var LQ;
      return wQ + (FQ.unicode && (null !== (LQ = QQ.codePointAt(wQ)) && void 0 !== LQ ? LQ : 0) > 65535 ? 2 : 1)
    }
  },
  6332: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);