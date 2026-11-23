export const id = 80;
export const ids = [80];
export const modules = {
  4674: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      e: () => nC,
      g: () => pC,
      h: () => SC,
      j: () => fC,
      n: () => wC,
      p: () => bC,
      r: () => gC,
      s: () => MC,
      u: () => NC
    });
    const QC = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function wC(CC) {
      try {
        return decodeURIComponent(CC.slice(1))
      } catch {
        return CC.slice(1)
      }
    }

    function bC(CC) {
      return CC.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const nC = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${QC.source}`, "g");

    function fC(CC, zC) {
      return 2 === CC.length ? zC.replace(/^ (.*) $/, "$1") : zC
    }

    function oC(CC) {
      return "" === CC.trim()
    }

    function qC(CC) {
      const zC = [];
      for (const ZC of CC.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zC.length > 0 && zC[zC.length - 1].endsWith("\\") ? zC[zC.length - 1] += `|${ZC}` : zC.push(ZC);
      return zC.map((CC => CC.trim().replaceAll("\\|", "|")))
    }
    const FC = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function WC(CC) {
      const zC = [],
        ZC = [{
          indent: -1,
          items: zC
        }];
      let QC = null;
      for (const wC of CC) {
        const CC = wC.match(FC);
        if (!CC) {
          QC && (QC.text += ` ${wC.trim()}`);
          continue
        }
        const zC = CC[1].replace(/\t/g, "  ").length;
        for (; zC <= ZC[ZC.length - 1].indent;) ZC.pop();
        QC = {
          text: CC[3].trim(),
          children: []
        }, ZC[ZC.length - 1].items.push(QC), ZC.push({
          indent: zC,
          items: QC.children
        })
      }
      return zC
    }

    function NC(CC) {
      const zC = CC.replace(/\r\n/g, "\n").split("\n"),
        ZC = [];
      let QC = 0;
      for (; QC < zC.length;) {
        const CC = zC[QC];
        if (oC(CC)) {
          QC++;
          continue
        }
        const wC = CC.match(/^\s*```\s*(\w*)\s*$/);
        if (wC) {
          const CC = [];
          for (QC++; QC < zC.length && !/^\s*```\s*$/.test(zC[QC]);) CC.push(zC[QC]), QC++;
          QC++, ZC.push({
            kind: "code",
            lang: wC[1] || "text",
            code: CC.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const nC = CC.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (nC) {
          const CC = nC[2].trim();
          ZC.push({
            kind: "heading",
            level: nC[1].length,
            text: CC,
            anchor: bC(CC)
          }), QC++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(CC)) {
          ZC.push({
            kind: "rule"
          }), QC++;
          continue
        }
        if (CC.trim().startsWith("|") && QC + 1 < zC.length && /^\s*\|[\s:|-]+\|\s*$/.test(zC[QC + 1])) {
          const wC = qC(CC),
            bC = [];
          for (QC += 2; QC < zC.length && zC[QC].trim().startsWith("|");) bC.push(qC(zC[QC])), QC++;
          ZC.push({
            kind: "table",
            header: wC,
            rows: bC
          });
          continue
        }
        if (CC.startsWith(">")) {
          const CC = [];
          for (; QC < zC.length && zC[QC].startsWith(">");) CC.push(zC[QC].replace(/^>\s?/, "")), QC++;
          ZC.push({
            kind: "quote",
            blocks: NC(CC.join("\n"))
          });
          continue
        }
        if (FC.test(CC)) {
          const wC = [],
            bC = /^\s*\d+\./.test(CC);
          for (; QC < zC.length && !oC(zC[QC]) && (FC.test(zC[QC]) || /^\s+\S/.test(zC[QC]));) wC.push(zC[QC]), QC++;
          ZC.push({
            kind: "list",
            ordered: bC,
            items: WC(wC)
          });
          continue
        }
        const fC = [];
        for (; QC < zC.length && !oC(zC[QC]) && !/^\s*```/.test(zC[QC]) && !/^#{1,6}\s/.test(zC[QC]) && !zC[QC].startsWith(">") && !FC.test(zC[QC]) && (!zC[QC].trim().startsWith("|") || 0 !== fC.length);) fC.push(zC[QC].trim()), QC++;
        0 === fC.length && (fC.push(zC[QC].trim()), QC++), ZC.push({
          kind: "paragraph",
          text: fC.join(" ")
        })
      }
      return ZC
    }

    function MC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZC = NC(CC);
      let QC = "";
      const wC = [],
        bC = [],
        nC = new Map;
      for (const qC of ZC) {
        if ("heading" === qC.kind) {
          var fC;
          const CC = (null !== (fC = nC.get(qC.anchor)) && void 0 !== fC ? fC : 0) + 1;
          nC.set(qC.anchor, CC), CC > 1 && (qC.anchor = `${qC.anchor}-${CC}`)
        }
        if ("heading" === qC.kind && 1 === qC.level && !QC) {
          QC = qC.text;
          continue
        }
        if ("heading" === qC.kind && qC.level <= zC) {
          bC.push({
            heading: qC,
            blocks: []
          });
          continue
        }
        const CC = bC.at(-1);
        CC ? CC.blocks.push(qC) : wC.push(qC)
      }
      const oC = CC => {
        for (;
          "rule" === (null === (zC = CC.at(-1)) || void 0 === zC ? void 0 : zC.kind);) {
          var zC;
          CC.pop()
        }
      };
      oC(wC);
      for (const qC of bC) oC(qC.blocks);
      return {
        title: QC,
        intro: wC,
        sections: bC
      }
    }

    function gC(CC) {
      return [{
        heading: null,
        blocks: CC.intro
      }, ...CC.sections.map((CC => ({
        heading: CC.heading,
        blocks: CC.blocks
      })))]
    }

    function SC(CC) {
      return CC.flatMap((CC => "code" === CC.kind ? [CC] : "quote" === CC.kind ? SC(CC.blocks) : []))
    }

    function pC(CC) {
      switch (CC.kind) {
        case "heading":
        case "paragraph":
          return CC.text;
        case "code":
          return CC.code;
        case "table":
          return [CC.header, ...CC.rows].map((CC => CC.join(" "))).join(" ");
        case "list": {
          const zC = CC => CC.map((CC => `${CC.text} ${zC(CC.children)}`)).join(" ");
          return zC(CC.items)
        }
        case "quote":
          return CC.blocks.map(pC).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6499: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => WC,
      d: () => nC,
      g: () => fC
    });
    ZC(6495);
    var QC = ZC(48),
      wC = ZC(4674),
      bC = ZC(1056);
    const nC = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function fC(CC, zC) {
      return CC === zC ? CC : `${CC} (${zC})`
    }

    function oC(CC) {
      const zC = [];
      let ZC = 0;
      for (const QC of CC.matchAll(nC)) {
        QC.index > ZC && zC.push(CC.slice(ZC, QC.index));
        const [, wC, nC, oC, qC, FC, WC] = QC;
        void 0 !== wC ? zC.push(fC(wC, nC)) : void 0 !== oC || void 0 !== qC ? zC.push((0, bC.jsx)("strong", {
          children: null !== oC && void 0 !== oC ? oC : qC
        }, QC.index)) : void 0 !== FC ? zC.push((0, bC.jsx)("em", {
          children: FC
        }, QC.index)) : zC.push((0, bC.jsx)("code", {
          children: WC
        }, QC.index)), ZC = QC.index + QC[0].length
      }
      return ZC < CC.length && zC.push(CC.slice(ZC)), zC
    }

    function qC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const QC = CC.map(((CC, zC) => (0, bC.jsxs)("li", {
        children: [oC(CC.text), CC.children.length > 0 && qC(CC.children, !1)]
      }, zC)));
      return zC ? (0, bC.jsx)("ol", {
        start: ZC,
        children: QC
      }) : (0, bC.jsx)("ul", {
        children: QC
      })
    }

    function FC(CC, zC) {
      switch (CC.kind) {
        case "heading":
          return CC.level <= 2 ? (0, bC.jsx)("h3", {
            children: oC(CC.text)
          }, zC) : (0, bC.jsx)("h4", {
            children: oC(CC.text)
          }, zC);
        case "paragraph":
          return (0, bC.jsx)("p", {
            children: oC(CC.text)
          }, zC);
        case "list":
          return (0, bC.jsx)(QC.Fragment, {
            children: qC(CC.items, CC.ordered)
          }, zC);
        case "quote":
          return (0, bC.jsx)("blockquote", {
            children: CC.blocks.map(((CC, zC) => FC(CC, zC)))
          }, zC);
        case "code":
          return (0, bC.jsx)("pre", {
            children: (0, bC.jsx)("code", {
              children: CC.code
            })
          }, zC);
        case "table":
          return (0, bC.jsxs)("table", {
            children: [(0, bC.jsx)("thead", {
              children: (0, bC.jsx)("tr", {
                children: CC.header.map(((CC, zC) => (0, bC.jsx)("th", {
                  children: oC(CC)
                }, zC)))
              })
            }), (0, bC.jsx)("tbody", {
              children: CC.rows.map(((CC, zC) => (0, bC.jsx)("tr", {
                children: CC.map(((CC, zC) => (0, bC.jsx)("td", {
                  children: oC(CC)
                }, zC)))
              }, zC)))
            })]
          }, zC);
        case "rule":
          return (0, bC.jsx)("hr", {}, zC)
      }
    }

    function WC(CC) {
      let {
        markdown: zC
      } = CC, ZC = 0;
      return (0, bC.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, wC.u)(zC).map(((CC, zC) => {
          if ("list" !== CC.kind || !CC.ordered) return ZC = 0, FC(CC, zC);
          const wC = ZC + 1;
          return ZC += CC.items.length, (0, bC.jsx)(QC.Fragment, {
            children: qC(CC.items, !0, wC)
          }, zC)
        }))
      })
    }
  },
  6492: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => GC,
      i: () => RC,
      f: () => xC,
      k: () => gC
    });
    var QC = ZC(1152),
      wC = ZC(6459),
      bC = ZC(4804);
    const nC = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function fC(CC) {
      return (0, bC.f)(CC, nC, (zC => !/^my/i.test(zC[0]) || !/follow $/i.test(CC.slice(0, zC.index)))).length > 0
    }
    const oC = /\byou(?:r|'re|'ll)?\b/i,
      qC = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      FC = 2;

    function WC(CC) {
      return function(CC) {
        const zC = [];
        let ZC = !1;
        for (const QC of CC.split("\n")) {
          if (/^\s*(```|~~~)/.test(QC)) {
            ZC = !ZC;
            continue
          }
          if (ZC || /^\s*>/.test(QC)) continue;
          const CC = QC.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          zC.push(...(0, wC.o)(CC))
        }
        return zC
      }(CC).filter((CC => fC(CC) || qC.test(CC) && !oC.test(CC)))
    }
    const NC = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      MC = [{
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

    function gC(CC) {
      const zC = MC.findIndex((zC => zC.name === CC));
      return -1 === zC ? MC.length : zC
    }
    const SC = 2500,
      pC = 12e4;
    class PC extends Error {
      constructor(CC) {
        super(`Studio AI chat ${CC}`), this.reason = CC
      }
    }

    function GC(CC, zC) {
      const ZC = new AbortController,
        QC = () => {
          ZC.abort()
        },
        wC = setTimeout(QC, CC);
      return null !== zC && void 0 !== zC && zC.aborted && QC(), null === zC || void 0 === zC || zC.addEventListener("abort", QC, {
        once: !0
      }), {
        signal: ZC.signal,
        clear: () => {
          clearTimeout(wC), null === zC || void 0 === zC || zC.removeEventListener("abort", QC)
        }
      }
    }

    function RC(CC, zC, ZC) {
      return new Promise(((wC, bC) => {
        const nC = new AbortController,
          fC = () => {
            nC.abort(), bC((0, QC.g)(ZC))
          };
        if (null !== ZC && void 0 !== ZC && ZC.aborted) return void fC();
        null === ZC || void 0 === ZC || ZC.addEventListener("abort", fC, {
          once: !0
        });
        const oC = MC.map((() => !1));
        let qC = null;
        const FC = MC.map((() => !1)),
          WC = MC.map((() => !1));
        MC.forEach(((QC, NC) => {
          const gC = GC(pC, nC.signal);
          JC(QC, [{
            role: "user",
            content: CC
          }], gC.signal).then((CC => {
            nC.signal.aborted || ("busy" === CC || "failed" === CC ? (FC[NC] = "busy" === CC, WC[NC] = !0) : null !== CC && (null === qC || NC < qC.rank) && (qC = {
              rank: NC,
              answer: {
                text: CC.text,
                model: QC.name
              }
            }, zC(qC.answer)))
          }), (CC => {
            nC.signal.aborted || (WC[NC] = !0, console.warn(`Studio AI: ${QC.name} couldn't be reached`, CC))
          })).finally((() => {
            gC.clear(), oC[NC] = !0, nC.signal.aborted || (() => {
              var CC, zC;
              const QC = null !== (CC = null === (zC = qC) || void 0 === zC ? void 0 : zC.rank) && void 0 !== CC ? CC : MC.length;
              oC.slice(0, QC).includes(!1) || (null === ZC || void 0 === ZC || ZC.removeEventListener("abort", fC), nC.abort(), null !== qC ? wC({
                ...qC.answer,
                isFinal: !WC.slice(0, qC.rank).includes(!0)
              }) : bC(new PC(FC.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((CC => {
            console.error("Studio AI: showing an answer failed", CC)
          }))
        }))
      }))
    }

    function AC(CC) {
      var zC, ZC;
      return "length" === (null === CC || void 0 === CC || null === (zC = CC.choices) || void 0 === zC || null === (ZC = zC[0]) || void 0 === ZC ? void 0 : ZC.finish_reason)
    }
    async function xC(CC, zC, ZC) {
      const QC = MC.find((zC => zC.name === CC));
      if (void 0 === QC) return "failed";
      const wC = GC(pC, ZC);
      try {
        const CC = await JC(QC, zC, wC.signal);
        return null !== CC && "object" === typeof CC ? CC.isCutOff ? (console.warn(`Studio AI: ${QC.name}'s answer was cut off at the token limit`), null) : {
          text: CC.text
        } : CC
      } finally {
        wC.clear()
      }
    }
    async function JC(CC, zC, ZC) {
      const QC = await fetch(NC, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: CC.name,
          messages: zC,
          max_tokens: SC,
          temperature: CC.temperature,
          reasoning_effort: CC.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ZC
      });
      if (429 === QC.status) return "busy";
      if (!QC.ok) return console.warn(`Studio AI: ${CC.name} answered ${QC.status}`), "failed";
      const wC = await QC.json().catch((() => null)),
        bC = function(CC) {
          var zC, ZC, QC;
          const wC = null === CC || void 0 === CC || null === (zC = CC.choices) || void 0 === zC || null === (ZC = zC[0]) || void 0 === ZC || null === (QC = ZC.message) || void 0 === QC ? void 0 : QC.content;
          if ("string" !== typeof wC) return null;
          const bC = wC.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === bC ? null : bC
        }(wC);
      return null !== bC && function(CC) {
        const zC = WC(CC);
        return zC.length >= FC || zC.some((CC => fC(CC)))
      }(bC) ? (console.warn(`Studio AI: ${CC.name} thought out loud instead of answering`), "failed") : null === bC ? null : {
        text: bC,
        isCutOff: AC(wC)
      }
    }
  },
  6459: (CC, zC, ZC) => {
    ZC.d(zC, {
      D: () => pC,
      G: () => RC,
      I: () => xC,
      M: () => GC,
      P: () => WC,
      S: () => qC,
      U: () => MC,
      b: () => gC,
      c: () => fC,
      d: () => nC,
      h: () => SC,
      l: () => NC,
      o: () => FC,
      r: () => bC,
      u: () => wC,
      y: () => AC,
      z: () => JC
    });
    var QC = ZC(4804);
    const wC = 2e3,
      bC = 2e4;

    function nC(CC) {
      return CC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function fC(CC) {
      return CC.replace(/\$/g, "\\$")
    }
    const oC = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function qC(CC, zC) {
      oC.lastIndex = zC;
      const ZC = oC.exec(CC);
      return ZC.index + ZC[0].length
    }

    function FC(CC) {
      return (0, QC.z)(CC, /\s+/g, (0, QC.s)(".!?")).flatMap((CC => CC.split("\n")))
    }

    function WC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC;
      const QC = [...CC.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((CC => CC.index)),
        wC = QC.filter((CC => CC < zC)),
        bC = QC.find((CC => CC >= ZC));
      return [0 === wC.length ? 0 : wC.at(-1) + 1, void 0 === bC ? CC.length : bC + 1]
    }

    function NC(CC, zC) {
      const ZC = CC.charCodeAt(zC - 1);
      return CC.slice(0, zC > 0 && zC < CC.length && ZC >= 55296 && ZC <= 56319 ? zC - 1 : zC)
    }

    function MC(CC, zC) {
      return `${zC}${CC.replace(/\\/g,"\\\\").split(zC).join(`\\${zC}`)}${zC}`
    }

    function gC(CC) {
      return CC.charAt(0).toUpperCase() + CC.slice(1)
    }

    function SC(CC) {
      return Math.round(CC).toLocaleString("en-US")
    }

    function pC(CC) {
      return CC.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((CC => "" !== CC))
    }
    const PC = 3;

    function GC(CC, zC) {
      return pC(CC).filter((CC => CC.length >= PC && !/\d/.test(CC))).map((CC => `${CC} ${zC}`))
    }

    function RC(CC) {
      return CC.split(/[\s:_]+/).filter((CC => "" !== CC)).map(nC).join("[`:_\\s]+")
    }

    function AC(CC) {
      return pC(CC.split(".").pop())
    }

    function xC(CC) {
      return CC.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function JC(CC) {
      let zC = null;
      return () => {
        const ZC = zC ??= CC();
        return ZC.catch((() => {
          zC === ZC && (zC = null)
        })), ZC
      }
    }
  },
  4804: (CC, zC, ZC) => {
    function QC(CC) {
      return {
        notAfter: CC
      }
    }
    ZC.d(zC, {
      d: () => oC,
      f: () => qC,
      h: () => fC,
      l: () => QC,
      n: () => wC,
      q: () => bC,
      s: () => nC,
      v: () => FC,
      z: () => WC
    });
    const wC = QC("\\w$."),
      bC = QC("\\w.,");

    function nC(CC) {
      return zC => oC(zC, CC)
    }

    function fC(CC) {
      return zC => !CC.test(zC.input.slice(0, zC.index))
    }

    function oC(CC, zC) {
      return CC.index > 0 && new RegExp(`[${zC}]`).test(CC.input[CC.index - 1])
    }

    function qC(CC, zC, ZC) {
      return function(CC) {
        return void 0 !== CC && "function" !== typeof CC
      }(ZC) ? function(CC, zC, ZC) {
        const QC = zC.flags.replace(/[gy]/g, ""),
          wC = new RegExp(`[^${ZC}](?:${zC.source})`, `${QC}g`),
          bC = [],
          nC = ZC => {
            const QC = ZC.index + ZC[0].length;
            return ("" === ZC[0] ? NC(CC, zC, QC) : QC) - 1
          },
          fC = new RegExp(`(?:${zC.source})`, `${QC}y`).exec(CC);
        if (fC) {
          if (bC.push(fC), !zC.global) return bC;
          wC.lastIndex = nC(fC)
        }
        for (let oC = wC.exec(CC); oC; oC = wC.exec(CC)) {
          const ZC = NC(CC, zC, oC.index) - oC.index;
          if (oC[0] = oC[0].slice(ZC), oC.index += ZC, bC.push(oC), !zC.global) break;
          wC.lastIndex = nC(oC)
        }
        return bC
      }(CC, zC, ZC.notAfter) : function(CC, zC, ZC) {
        const QC = new RegExp(zC.source, `${zC.flags.replace(/[gy]/g,"")}g`),
          wC = [];
        for (let bC = QC.exec(CC); bC; bC = QC.exec(CC))
          if (!ZC || ZC(bC)) {
            if (wC.push(bC), !zC.global) break;
            "" === bC[0] && (QC.lastIndex = NC(CC, zC, QC.lastIndex))
          } else QC.lastIndex = NC(CC, zC, bC.index);
        return wC
      }(CC, zC, ZC)
    }

    function FC(CC, zC, ZC, QC) {
      let wC = "",
        bC = 0;
      for (const nC of qC(CC, zC, ZC)) wC += CC.slice(bC, nC.index) + QC(nC), bC = nC.index + nC[0].length;
      return wC + CC.slice(bC)
    }

    function WC(CC, zC, ZC) {
      const QC = [];
      let wC = 0;
      for (const bC of qC(CC, zC, ZC)) QC.push(CC.slice(wC, bC.index)), wC = bC.index + bC[0].length;
      return [...QC, CC.slice(wC)]
    }

    function NC(CC, zC, ZC) {
      var QC;
      return ZC + (zC.unicode && (null !== (QC = CC.codePointAt(ZC)) && void 0 !== QC ? QC : 0) > 65535 ? 2 : 1)
    }
  },
  6495: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);