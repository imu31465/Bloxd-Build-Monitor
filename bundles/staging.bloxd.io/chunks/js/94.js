export const id = 94;
export const ids = [94];
export const modules = {
  5142: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => mM,
      d: () => OM,
      h: () => aM,
      j: () => dM,
      l: () => JM,
      n: () => PM,
      q: () => SM,
      r: () => jM,
      v: () => hM,
      z: () => HM
    });
    const OM = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function SM(MM) {
      try {
        return decodeURIComponent(MM.slice(1))
      } catch {
        return MM.slice(1)
      }
    }

    function jM(MM) {
      return MM.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const aM = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${OM.source}`, "g");

    function PM(MM, rM) {
      return 2 === MM.length ? rM.replace(/^ (.*) $/, "$1") : rM
    }

    function nM(MM) {
      return "" === MM.trim()
    }

    function QM(MM) {
      const rM = [];
      for (const iM of MM.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rM.length > 0 && rM[rM.length - 1].endsWith("\\") ? rM[rM.length - 1] += `|${iM}` : rM.push(iM);
      return rM.map((MM => MM.trim().replaceAll("\\|", "|")))
    }
    const zM = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function LM(MM) {
      const rM = [],
        iM = [{
          indent: -1,
          items: rM
        }];
      let OM = null;
      for (const SM of MM) {
        const MM = SM.match(zM);
        if (!MM) {
          OM && (OM.text += ` ${SM.trim()}`);
          continue
        }
        const rM = MM[1].replace(/\t/g, "  ").length;
        for (; rM <= iM[iM.length - 1].indent;) iM.pop();
        OM = {
          text: MM[3].trim(),
          children: []
        }, iM[iM.length - 1].items.push(OM), iM.push({
          indent: rM,
          items: OM.children
        })
      }
      return rM
    }

    function mM(MM) {
      const rM = MM.replace(/\r\n/g, "\n").split("\n"),
        iM = [];
      let OM = 0;
      for (; OM < rM.length;) {
        const MM = rM[OM];
        if (nM(MM)) {
          OM++;
          continue
        }
        const SM = MM.match(/^\s*```\s*(\w*)\s*$/);
        if (SM) {
          const MM = [];
          for (OM++; OM < rM.length && !/^\s*```\s*$/.test(rM[OM]);) MM.push(rM[OM]), OM++;
          OM++, iM.push({
            kind: "code",
            lang: SM[1] || "text",
            code: MM.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const aM = MM.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (aM) {
          const MM = aM[2].trim();
          iM.push({
            kind: "heading",
            level: aM[1].length,
            text: MM,
            anchor: jM(MM)
          }), OM++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(MM)) {
          iM.push({
            kind: "rule"
          }), OM++;
          continue
        }
        if (MM.trim().startsWith("|") && OM + 1 < rM.length && /^\s*\|[\s:|-]+\|\s*$/.test(rM[OM + 1])) {
          const SM = QM(MM),
            jM = [];
          for (OM += 2; OM < rM.length && rM[OM].trim().startsWith("|");) jM.push(QM(rM[OM])), OM++;
          iM.push({
            kind: "table",
            header: SM,
            rows: jM
          });
          continue
        }
        if (MM.startsWith(">")) {
          const MM = [];
          for (; OM < rM.length && rM[OM].startsWith(">");) MM.push(rM[OM].replace(/^>\s?/, "")), OM++;
          iM.push({
            kind: "quote",
            blocks: mM(MM.join("\n"))
          });
          continue
        }
        if (zM.test(MM)) {
          const SM = [],
            jM = /^\s*\d+\./.test(MM);
          for (; OM < rM.length && !nM(rM[OM]) && (zM.test(rM[OM]) || /^\s+\S/.test(rM[OM]));) SM.push(rM[OM]), OM++;
          iM.push({
            kind: "list",
            ordered: jM,
            items: LM(SM)
          });
          continue
        }
        const PM = [];
        for (; OM < rM.length && !nM(rM[OM]) && !/^\s*```/.test(rM[OM]) && !/^#{1,6}\s/.test(rM[OM]) && !rM[OM].startsWith(">") && !zM.test(rM[OM]) && (!rM[OM].trim().startsWith("|") || 0 !== PM.length);) PM.push(rM[OM].trim()), OM++;
        0 === PM.length && (PM.push(rM[OM].trim()), OM++), iM.push({
          kind: "paragraph",
          text: PM.join(" ")
        })
      }
      return iM
    }

    function HM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const iM = mM(MM);
      let OM = "";
      const SM = [],
        jM = [],
        aM = new Map;
      for (const QM of iM) {
        if ("heading" === QM.kind) {
          var PM;
          const MM = (null !== (PM = aM.get(QM.anchor)) && void 0 !== PM ? PM : 0) + 1;
          aM.set(QM.anchor, MM), MM > 1 && (QM.anchor = `${QM.anchor}-${MM}`)
        }
        if ("heading" === QM.kind && 1 === QM.level && !OM) {
          OM = QM.text;
          continue
        }
        if ("heading" === QM.kind && QM.level <= rM) {
          jM.push({
            heading: QM,
            blocks: []
          });
          continue
        }
        const MM = jM.at(-1);
        MM ? MM.blocks.push(QM) : SM.push(QM)
      }
      const nM = MM => {
        for (;
          "rule" === (null === (rM = MM.at(-1)) || void 0 === rM ? void 0 : rM.kind);) {
          var rM;
          MM.pop()
        }
      };
      nM(SM);
      for (const QM of jM) nM(QM.blocks);
      return {
        title: OM,
        intro: SM,
        sections: jM
      }
    }

    function hM(MM) {
      return [{
        heading: null,
        blocks: MM.intro
      }, ...MM.sections.map((MM => ({
        heading: MM.heading,
        blocks: MM.blocks
      })))]
    }

    function JM(MM) {
      return MM.flatMap((MM => "code" === MM.kind ? [MM] : "quote" === MM.kind ? JM(MM.blocks) : []))
    }

    function dM(MM) {
      switch (MM.kind) {
        case "heading":
        case "paragraph":
          return MM.text;
        case "code":
          return MM.code;
        case "table":
          return [MM.header, ...MM.rows].map((MM => MM.join(" "))).join(" ");
        case "list": {
          const rM = MM => MM.map((MM => `${MM.text} ${rM(MM.children)}`)).join(" ");
          return rM(MM.items)
        }
        case "quote":
          return MM.blocks.map(dM).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6966: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      f: () => aM,
      h: () => PM
    });
    iM(6963);
    var OM = iM(44),
      SM = iM(5142),
      jM = iM(1303);
    const aM = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function PM(MM, rM) {
      return MM === rM ? MM : `${MM} (${rM})`
    }

    function nM(MM) {
      const rM = [];
      let iM = 0;
      for (const OM of MM.matchAll(aM)) {
        OM.index > iM && rM.push(MM.slice(iM, OM.index));
        const [, SM, aM, nM, QM, zM, LM] = OM;
        void 0 !== SM ? rM.push(PM(SM, aM)) : void 0 !== nM || void 0 !== QM ? rM.push((0, jM.jsx)("strong", {
          children: null !== nM && void 0 !== nM ? nM : QM
        }, OM.index)) : void 0 !== zM ? rM.push((0, jM.jsx)("em", {
          children: zM
        }, OM.index)) : rM.push((0, jM.jsx)("code", {
          children: LM
        }, OM.index)), iM = OM.index + OM[0].length
      }
      return iM < MM.length && rM.push(MM.slice(iM)), rM
    }

    function QM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const OM = MM.map(((MM, rM) => (0, jM.jsxs)("li", {
        children: [nM(MM.text), MM.children.length > 0 && QM(MM.children, !1)]
      }, rM)));
      return rM ? (0, jM.jsx)("ol", {
        start: iM,
        children: OM
      }) : (0, jM.jsx)("ul", {
        children: OM
      })
    }

    function zM(MM, rM) {
      switch (MM.kind) {
        case "heading":
          return MM.level <= 2 ? (0, jM.jsx)("h3", {
            children: nM(MM.text)
          }, rM) : (0, jM.jsx)("h4", {
            children: nM(MM.text)
          }, rM);
        case "paragraph":
          return (0, jM.jsx)("p", {
            children: nM(MM.text)
          }, rM);
        case "list":
          return (0, jM.jsx)(OM.Fragment, {
            children: QM(MM.items, MM.ordered)
          }, rM);
        case "quote":
          return (0, jM.jsx)("blockquote", {
            children: MM.blocks.map(((MM, rM) => zM(MM, rM)))
          }, rM);
        case "code":
          return (0, jM.jsx)("pre", {
            children: (0, jM.jsx)("code", {
              children: MM.code
            })
          }, rM);
        case "table":
          return (0, jM.jsxs)("table", {
            children: [(0, jM.jsx)("thead", {
              children: (0, jM.jsx)("tr", {
                children: MM.header.map(((MM, rM) => (0, jM.jsx)("th", {
                  children: nM(MM)
                }, rM)))
              })
            }), (0, jM.jsx)("tbody", {
              children: MM.rows.map(((MM, rM) => (0, jM.jsx)("tr", {
                children: MM.map(((MM, rM) => (0, jM.jsx)("td", {
                  children: nM(MM)
                }, rM)))
              }, rM)))
            })]
          }, rM);
        case "rule":
          return (0, jM.jsx)("hr", {}, rM)
      }
    }

    function LM(MM) {
      let {
        markdown: rM
      } = MM, iM = 0;
      return (0, jM.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, SM.C)(rM).map(((MM, rM) => {
          if ("list" !== MM.kind || !MM.ordered) return iM = 0, zM(MM, rM);
          const SM = iM + 1;
          return iM += MM.items.length, (0, jM.jsx)(OM.Fragment, {
            children: QM(MM.items, !0, SM)
          }, rM)
        }))
      })
    }
  },
  6956: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => lM,
      g: () => EM,
      c: () => GM,
      k: () => hM
    });
    var OM = iM(1215),
      SM = iM(6905),
      jM = iM(5273);
    const aM = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function PM(MM) {
      return (0, jM.e)(MM, aM, (rM => !/^my/i.test(rM[0]) || !/follow $/i.test(MM.slice(0, rM.index)))).length > 0
    }
    const nM = /\byou(?:r|'re|'ll)?\b/i,
      QM = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      zM = 2;

    function LM(MM) {
      return function(MM) {
        const rM = [];
        let iM = !1;
        for (const OM of MM.split("\n")) {
          if (/^\s*(```|~~~)/.test(OM)) {
            iM = !iM;
            continue
          }
          if (iM || /^\s*>/.test(OM)) continue;
          const MM = OM.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          rM.push(...(0, SM.u)(MM))
        }
        return rM
      }(MM).filter((MM => PM(MM) || QM.test(MM) && !nM.test(MM)))
    }
    const mM = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      HM = [{
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

    function hM(MM) {
      const rM = HM.findIndex((rM => rM.name === MM));
      return -1 === rM ? HM.length : rM
    }
    const JM = 2500,
      dM = 12e4;
    class yM extends Error {
      constructor(MM) {
        super(`Studio AI chat ${MM}`), this.reason = MM
      }
    }

    function lM(MM, rM) {
      const iM = new AbortController,
        OM = () => {
          iM.abort()
        },
        SM = setTimeout(OM, MM);
      return null !== rM && void 0 !== rM && rM.aborted && OM(), null === rM || void 0 === rM || rM.addEventListener("abort", OM, {
        once: !0
      }), {
        signal: iM.signal,
        clear: () => {
          clearTimeout(SM), null === rM || void 0 === rM || rM.removeEventListener("abort", OM)
        }
      }
    }

    function EM(MM, rM, iM) {
      return new Promise(((SM, jM) => {
        const aM = new AbortController,
          PM = () => {
            aM.abort(), jM((0, OM.f)(iM))
          };
        if (null !== iM && void 0 !== iM && iM.aborted) return void PM();
        null === iM || void 0 === iM || iM.addEventListener("abort", PM, {
          once: !0
        });
        const nM = HM.map((() => !1));
        let QM = null;
        const zM = HM.map((() => !1)),
          LM = HM.map((() => !1));
        HM.forEach(((OM, mM) => {
          const hM = lM(dM, aM.signal);
          CM(OM, [{
            role: "user",
            content: MM
          }], hM.signal).then((MM => {
            aM.signal.aborted || ("busy" === MM || "failed" === MM ? (zM[mM] = "busy" === MM, LM[mM] = !0) : null !== MM && (null === QM || mM < QM.rank) && (QM = {
              rank: mM,
              answer: {
                text: MM.text,
                model: OM.name
              }
            }, rM(QM.answer)))
          }), (MM => {
            aM.signal.aborted || (LM[mM] = !0, console.warn(`Studio AI: ${OM.name} couldn't be reached`, MM))
          })).finally((() => {
            hM.clear(), nM[mM] = !0, aM.signal.aborted || (() => {
              var MM, rM;
              const OM = null !== (MM = null === (rM = QM) || void 0 === rM ? void 0 : rM.rank) && void 0 !== MM ? MM : HM.length;
              nM.slice(0, OM).includes(!1) || (null === iM || void 0 === iM || iM.removeEventListener("abort", PM), aM.abort(), null !== QM ? SM({
                ...QM.answer,
                isFinal: !LM.slice(0, QM.rank).includes(!0)
              }) : jM(new yM(zM.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((MM => {
            console.error("Studio AI: showing an answer failed", MM)
          }))
        }))
      }))
    }

    function UM(MM) {
      var rM, iM;
      return "length" === (null === MM || void 0 === MM || null === (rM = MM.choices) || void 0 === rM || null === (iM = rM[0]) || void 0 === iM ? void 0 : iM.finish_reason)
    }
    async function GM(MM, rM, iM) {
      const OM = HM.find((rM => rM.name === MM));
      if (void 0 === OM) return "failed";
      const SM = lM(dM, iM);
      try {
        const MM = await CM(OM, rM, SM.signal);
        return null !== MM && "object" === typeof MM ? MM.isCutOff ? (console.warn(`Studio AI: ${OM.name}'s answer was cut off at the token limit`), null) : {
          text: MM.text
        } : MM
      } finally {
        SM.clear()
      }
    }
    async function CM(MM, rM, iM) {
      const OM = await fetch(mM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MM.name,
          messages: rM,
          max_tokens: JM,
          temperature: MM.temperature,
          reasoning_effort: MM.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: iM
      });
      if (429 === OM.status) return "busy";
      if (!OM.ok) return console.warn(`Studio AI: ${MM.name} answered ${OM.status}`), "failed";
      const SM = await OM.json().catch((() => null)),
        jM = function(MM) {
          var rM, iM, OM;
          const SM = null === MM || void 0 === MM || null === (rM = MM.choices) || void 0 === rM || null === (iM = rM[0]) || void 0 === iM || null === (OM = iM.message) || void 0 === OM ? void 0 : OM.content;
          if ("string" !== typeof SM) return null;
          const jM = SM.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === jM ? null : jM
        }(SM);
      return null !== jM && function(MM) {
        const rM = LM(MM);
        return rM.length >= zM || rM.some((MM => PM(MM)))
      }(jM) ? (console.warn(`Studio AI: ${MM.name} thought out loud instead of answering`), "failed") : null === jM ? null : {
        text: jM,
        isCutOff: UM(SM)
      }
    }
  },
  6905: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => UM,
      E: () => CM,
      H: () => dM,
      I: () => EM,
      M: () => GM,
      Q: () => lM,
      S: () => LM,
      U: () => QM,
      W: () => HM,
      e: () => hM,
      i: () => PM,
      l: () => aM,
      p: () => JM,
      t: () => mM,
      u: () => zM,
      x: () => jM,
      z: () => SM
    });
    var OM = iM(5273);
    const SM = 2e3,
      jM = 2e4;

    function aM(MM) {
      return MM.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function PM(MM) {
      return MM.replace(/\$/g, "\\$")
    }
    const nM = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function QM(MM, rM) {
      nM.lastIndex = rM;
      const iM = nM.exec(MM);
      return iM.index + iM[0].length
    }

    function zM(MM) {
      return (0, OM.r)(MM, /\s+/g, (0, OM.n)(".!?")).flatMap((MM => MM.split("\n")))
    }

    function LM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM;
      const OM = [...MM.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((MM => MM.index)),
        SM = OM.filter((MM => MM < rM)),
        jM = OM.find((MM => MM >= iM));
      return [0 === SM.length ? 0 : SM.at(-1) + 1, void 0 === jM ? MM.length : jM + 1]
    }

    function mM(MM, rM) {
      const iM = MM.charCodeAt(rM - 1);
      return MM.slice(0, rM > 0 && rM < MM.length && iM >= 55296 && iM <= 56319 ? rM - 1 : rM)
    }

    function HM(MM, rM) {
      return `${rM}${MM.replace(/\\/g,"\\\\").split(rM).join(`\\${rM}`)}${rM}`
    }

    function hM(MM) {
      return MM.charAt(0).toUpperCase() + MM.slice(1)
    }

    function JM(MM) {
      return Math.round(MM).toLocaleString("en-US")
    }

    function dM(MM) {
      return MM.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((MM => "" !== MM))
    }
    const yM = 3;

    function lM(MM, rM) {
      return dM(MM).filter((MM => MM.length >= yM && !/\d/.test(MM))).map((MM => `${MM} ${rM}`))
    }

    function EM(MM) {
      return MM.split(/[\s:_]+/).filter((MM => "" !== MM)).map(aM).join("[`:_\\s]+")
    }

    function UM(MM) {
      return dM(MM.split(".").pop())
    }

    function GM(MM) {
      return MM.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function CM(MM) {
      let rM = null;
      return () => {
        const iM = rM ??= MM();
        return iM.catch((() => {
          rM === iM && (rM = null)
        })), iM
      }
    }
  },
  5273: (MM, rM, iM) => {
    function OM(MM) {
      return {
        notAfter: MM
      }
    }
    iM.d(rM, {
      c: () => nM,
      e: () => QM,
      f: () => PM,
      g: () => OM,
      h: () => SM,
      j: () => jM,
      n: () => aM,
      p: () => zM,
      r: () => LM
    });
    const SM = OM("\\w$."),
      jM = OM("\\w.,");

    function aM(MM) {
      return rM => nM(rM, MM)
    }

    function PM(MM) {
      return rM => !MM.test(rM.input.slice(0, rM.index))
    }

    function nM(MM, rM) {
      return MM.index > 0 && new RegExp(`[${rM}]`).test(MM.input[MM.index - 1])
    }

    function QM(MM, rM, iM) {
      return function(MM) {
        return void 0 !== MM && "function" !== typeof MM
      }(iM) ? function(MM, rM, iM) {
        const OM = rM.flags.replace(/[gy]/g, ""),
          SM = new RegExp(`[^${iM}](?:${rM.source})`, `${OM}g`),
          jM = [],
          aM = iM => {
            const OM = iM.index + iM[0].length;
            return ("" === iM[0] ? mM(MM, rM, OM) : OM) - 1
          },
          PM = new RegExp(`(?:${rM.source})`, `${OM}y`).exec(MM);
        if (PM) {
          if (jM.push(PM), !rM.global) return jM;
          SM.lastIndex = aM(PM)
        }
        for (let nM = SM.exec(MM); nM; nM = SM.exec(MM)) {
          const iM = mM(MM, rM, nM.index) - nM.index;
          if (nM[0] = nM[0].slice(iM), nM.index += iM, jM.push(nM), !rM.global) break;
          SM.lastIndex = aM(nM)
        }
        return jM
      }(MM, rM, iM.notAfter) : function(MM, rM, iM) {
        const OM = new RegExp(rM.source, `${rM.flags.replace(/[gy]/g,"")}g`),
          SM = [];
        for (let jM = OM.exec(MM); jM; jM = OM.exec(MM))
          if (!iM || iM(jM)) {
            if (SM.push(jM), !rM.global) break;
            "" === jM[0] && (OM.lastIndex = mM(MM, rM, OM.lastIndex))
          } else OM.lastIndex = mM(MM, rM, jM.index);
        return SM
      }(MM, rM, iM)
    }

    function zM(MM, rM, iM, OM) {
      let SM = "",
        jM = 0;
      for (const aM of QM(MM, rM, iM)) SM += MM.slice(jM, aM.index) + OM(aM), jM = aM.index + aM[0].length;
      return SM + MM.slice(jM)
    }

    function LM(MM, rM, iM) {
      const OM = [];
      let SM = 0;
      for (const jM of QM(MM, rM, iM)) OM.push(MM.slice(SM, jM.index)), SM = jM.index + jM[0].length;
      return [...OM, MM.slice(SM)]
    }

    function mM(MM, rM, iM) {
      var OM;
      return iM + (rM.unicode && (null !== (OM = MM.codePointAt(iM)) && void 0 !== OM ? OM : 0) > 65535 ? 2 : 1)
    }
  },
  6963: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);