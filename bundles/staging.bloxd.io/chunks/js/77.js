export const id = 77;
export const ids = [77];
export const modules = {
  4534: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => MD,
      C: () => yD,
      e: () => ID,
      i: () => fD,
      j: () => oD,
      l: () => ZD,
      o: () => bD,
      s: () => pD,
      u: () => iD,
      y: () => tD
    });
    const ID = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function pD(DD) {
      try {
        return decodeURIComponent(DD.slice(1))
      } catch {
        return DD.slice(1)
      }
    }

    function iD(DD) {
      return DD.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const fD = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${ID.source}`, "g");

    function bD(DD, CD) {
      return 2 === DD.length ? CD.replace(/^ (.*) $/, "$1") : CD
    }

    function QD(DD) {
      return "" === DD.trim()
    }

    function wD(DD) {
      const CD = [];
      for (const cD of DD.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) CD.length > 0 && CD[CD.length - 1].endsWith("\\") ? CD[CD.length - 1] += `|${cD}` : CD.push(cD);
      return CD.map((DD => DD.trim().replaceAll("\\|", "|")))
    }
    const SD = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function BD(DD) {
      const CD = [],
        cD = [{
          indent: -1,
          items: CD
        }];
      let ID = null;
      for (const pD of DD) {
        const DD = pD.match(SD);
        if (!DD) {
          ID && (ID.text += ` ${pD.trim()}`);
          continue
        }
        const CD = DD[1].replace(/\t/g, "  ").length;
        for (; CD <= cD[cD.length - 1].indent;) cD.pop();
        ID = {
          text: DD[3].trim(),
          children: []
        }, cD[cD.length - 1].items.push(ID), cD.push({
          indent: CD,
          items: ID.children
        })
      }
      return CD
    }

    function yD(DD) {
      const CD = DD.replace(/\r\n/g, "\n").split("\n"),
        cD = [];
      let ID = 0;
      for (; ID < CD.length;) {
        const DD = CD[ID];
        if (QD(DD)) {
          ID++;
          continue
        }
        const pD = DD.match(/^\s*```\s*(\w*)\s*$/);
        if (pD) {
          const DD = [];
          for (ID++; ID < CD.length && !/^\s*```\s*$/.test(CD[ID]);) DD.push(CD[ID]), ID++;
          ID++, cD.push({
            kind: "code",
            lang: pD[1] || "text",
            code: DD.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const fD = DD.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (fD) {
          const DD = fD[2].trim();
          cD.push({
            kind: "heading",
            level: fD[1].length,
            text: DD,
            anchor: iD(DD)
          }), ID++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(DD)) {
          cD.push({
            kind: "rule"
          }), ID++;
          continue
        }
        if (DD.trim().startsWith("|") && ID + 1 < CD.length && /^\s*\|[\s:|-]+\|\s*$/.test(CD[ID + 1])) {
          const pD = wD(DD),
            iD = [];
          for (ID += 2; ID < CD.length && CD[ID].trim().startsWith("|");) iD.push(wD(CD[ID])), ID++;
          cD.push({
            kind: "table",
            header: pD,
            rows: iD
          });
          continue
        }
        if (DD.startsWith(">")) {
          const DD = [];
          for (; ID < CD.length && CD[ID].startsWith(">");) DD.push(CD[ID].replace(/^>\s?/, "")), ID++;
          cD.push({
            kind: "quote",
            blocks: yD(DD.join("\n"))
          });
          continue
        }
        if (SD.test(DD)) {
          const pD = [],
            iD = /^\s*\d+\./.test(DD);
          for (; ID < CD.length && !QD(CD[ID]) && (SD.test(CD[ID]) || /^\s+\S/.test(CD[ID]));) pD.push(CD[ID]), ID++;
          cD.push({
            kind: "list",
            ordered: iD,
            items: BD(pD)
          });
          continue
        }
        const bD = [];
        for (; ID < CD.length && !QD(CD[ID]) && !/^\s*```/.test(CD[ID]) && !/^#{1,6}\s/.test(CD[ID]) && !CD[ID].startsWith(">") && !SD.test(CD[ID]) && (!CD[ID].trim().startsWith("|") || 0 !== bD.length);) bD.push(CD[ID].trim()), ID++;
        0 === bD.length && (bD.push(CD[ID].trim()), ID++), cD.push({
          kind: "paragraph",
          text: bD.join(" ")
        })
      }
      return cD
    }

    function MD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cD = yD(DD);
      let ID = "";
      const pD = [],
        iD = [],
        fD = new Map;
      for (const wD of cD) {
        if ("heading" === wD.kind) {
          var bD;
          const DD = (null !== (bD = fD.get(wD.anchor)) && void 0 !== bD ? bD : 0) + 1;
          fD.set(wD.anchor, DD), DD > 1 && (wD.anchor = `${wD.anchor}-${DD}`)
        }
        if ("heading" === wD.kind && 1 === wD.level && !ID) {
          ID = wD.text;
          continue
        }
        if ("heading" === wD.kind && wD.level <= CD) {
          iD.push({
            heading: wD,
            blocks: []
          });
          continue
        }
        const DD = iD.at(-1);
        DD ? DD.blocks.push(wD) : pD.push(wD)
      }
      const QD = DD => {
        for (;
          "rule" === (null === (CD = DD.at(-1)) || void 0 === CD ? void 0 : CD.kind);) {
          var CD;
          DD.pop()
        }
      };
      QD(pD);
      for (const wD of iD) QD(wD.blocks);
      return {
        title: ID,
        intro: pD,
        sections: iD
      }
    }

    function tD(DD) {
      return [{
        heading: null,
        blocks: DD.intro
      }, ...DD.sections.map((DD => ({
        heading: DD.heading,
        blocks: DD.blocks
      })))]
    }

    function ZD(DD) {
      return DD.flatMap((DD => "code" === DD.kind ? [DD] : "quote" === DD.kind ? ZD(DD.blocks) : []))
    }

    function oD(DD) {
      switch (DD.kind) {
        case "heading":
        case "paragraph":
          return DD.text;
        case "code":
          return DD.code;
        case "table":
          return [DD.header, ...DD.rows].map((DD => DD.join(" "))).join(" ");
        case "list": {
          const CD = DD => DD.map((DD => `${DD.text} ${CD(DD.children)}`)).join(" ");
          return CD(DD.items)
        }
        case "quote":
          return DD.blocks.map(oD).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6235: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => BD,
      g: () => fD,
      h: () => bD
    });
    cD(6233);
    var ID = cD(53),
      pD = cD(4534),
      iD = cD(1093);
    const fD = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function bD(DD, CD) {
      return DD === CD ? DD : `${DD} (${CD})`
    }

    function QD(DD) {
      const CD = [];
      let cD = 0;
      for (const ID of DD.matchAll(fD)) {
        ID.index > cD && CD.push(DD.slice(cD, ID.index));
        const [, pD, fD, QD, wD, SD, BD] = ID;
        void 0 !== pD ? CD.push(bD(pD, fD)) : void 0 !== QD || void 0 !== wD ? CD.push((0, iD.jsx)("strong", {
          children: null !== QD && void 0 !== QD ? QD : wD
        }, ID.index)) : void 0 !== SD ? CD.push((0, iD.jsx)("em", {
          children: SD
        }, ID.index)) : CD.push((0, iD.jsx)("code", {
          children: BD
        }, ID.index)), cD = ID.index + ID[0].length
      }
      return cD < DD.length && CD.push(DD.slice(cD)), CD
    }

    function wD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const ID = DD.map(((DD, CD) => (0, iD.jsxs)("li", {
        children: [QD(DD.text), DD.children.length > 0 && wD(DD.children, !1)]
      }, CD)));
      return CD ? (0, iD.jsx)("ol", {
        start: cD,
        children: ID
      }) : (0, iD.jsx)("ul", {
        children: ID
      })
    }

    function SD(DD, CD) {
      switch (DD.kind) {
        case "heading":
          return DD.level <= 2 ? (0, iD.jsx)("h3", {
            children: QD(DD.text)
          }, CD) : (0, iD.jsx)("h4", {
            children: QD(DD.text)
          }, CD);
        case "paragraph":
          return (0, iD.jsx)("p", {
            children: QD(DD.text)
          }, CD);
        case "list":
          return (0, iD.jsx)(ID.Fragment, {
            children: wD(DD.items, DD.ordered)
          }, CD);
        case "quote":
          return (0, iD.jsx)("blockquote", {
            children: DD.blocks.map(((DD, CD) => SD(DD, CD)))
          }, CD);
        case "code":
          return (0, iD.jsx)("pre", {
            children: (0, iD.jsx)("code", {
              children: DD.code
            })
          }, CD);
        case "table":
          return (0, iD.jsxs)("table", {
            children: [(0, iD.jsx)("thead", {
              children: (0, iD.jsx)("tr", {
                children: DD.header.map(((DD, CD) => (0, iD.jsx)("th", {
                  children: QD(DD)
                }, CD)))
              })
            }), (0, iD.jsx)("tbody", {
              children: DD.rows.map(((DD, CD) => (0, iD.jsx)("tr", {
                children: DD.map(((DD, CD) => (0, iD.jsx)("td", {
                  children: QD(DD)
                }, CD)))
              }, CD)))
            })]
          }, CD);
        case "rule":
          return (0, iD.jsx)("hr", {}, CD)
      }
    }

    function BD(DD) {
      let {
        markdown: CD
      } = DD, cD = 0;
      return (0, iD.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, pD.C)(CD).map(((DD, CD) => {
          if ("list" !== DD.kind || !DD.ordered) return cD = 0, SD(DD, CD);
          const pD = cD + 1;
          return cD += DD.items.length, (0, iD.jsx)(ID.Fragment, {
            children: wD(DD.items, !0, pD)
          }, CD)
        }))
      })
    }
  },
  6224: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ND,
      j: () => gD,
      h: () => mD,
      l: () => tD
    });
    var ID = cD(1796),
      pD = cD(6184),
      iD = cD(4630);
    const fD = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function bD(DD) {
      return (0, iD.f)(DD, fD, (CD => !/^my/i.test(CD[0]) || !/follow $/i.test(DD.slice(0, CD.index)))).length > 0
    }
    const QD = /\byou(?:r|'re|'ll)?\b/i,
      wD = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      SD = 2;

    function BD(DD) {
      return function(DD) {
        const CD = [];
        let cD = !1;
        for (const ID of DD.split("\n")) {
          if (/^\s*(```|~~~)/.test(ID)) {
            cD = !cD;
            continue
          }
          if (cD || /^\s*>/.test(ID)) continue;
          const DD = ID.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          CD.push(...(0, pD.n)(DD))
        }
        return CD
      }(DD).filter((DD => bD(DD) || wD.test(DD) && !QD.test(DD)))
    }
    const yD = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      MD = [{
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

    function tD(DD) {
      const CD = MD.findIndex((CD => CD.name === DD));
      return -1 === CD ? MD.length : CD
    }
    const ZD = 2500,
      oD = 12e4;
    class vD extends Error {
      constructor(DD) {
        super(`Studio AI chat ${DD}`), this.reason = DD
      }
    }

    function ND(DD, CD) {
      const cD = new AbortController,
        ID = () => {
          cD.abort()
        },
        pD = setTimeout(ID, DD);
      return null !== CD && void 0 !== CD && CD.aborted && ID(), null === CD || void 0 === CD || CD.addEventListener("abort", ID, {
        once: !0
      }), {
        signal: cD.signal,
        clear: () => {
          clearTimeout(pD), null === CD || void 0 === CD || CD.removeEventListener("abort", ID)
        }
      }
    }

    function gD(DD, CD, cD) {
      return new Promise(((pD, iD) => {
        const fD = new AbortController,
          bD = () => {
            fD.abort(), iD((0, ID.g)(cD))
          };
        if (null !== cD && void 0 !== cD && cD.aborted) return void bD();
        null === cD || void 0 === cD || cD.addEventListener("abort", bD, {
          once: !0
        });
        const QD = MD.map((() => !1));
        let wD = null;
        const SD = MD.map((() => !1)),
          BD = MD.map((() => !1));
        MD.forEach(((ID, yD) => {
          const tD = ND(oD, fD.signal);
          nD(ID, [{
            role: "user",
            content: DD
          }], tD.signal).then((DD => {
            fD.signal.aborted || ("busy" === DD || "failed" === DD ? (SD[yD] = "busy" === DD, BD[yD] = !0) : null !== DD && (null === wD || yD < wD.rank) && (wD = {
              rank: yD,
              answer: {
                text: DD.text,
                model: ID.name
              }
            }, CD(wD.answer)))
          }), (DD => {
            fD.signal.aborted || (BD[yD] = !0, console.warn(`Studio AI: ${ID.name} couldn't be reached`, DD))
          })).finally((() => {
            tD.clear(), QD[yD] = !0, fD.signal.aborted || (() => {
              var DD, CD;
              const ID = null !== (DD = null === (CD = wD) || void 0 === CD ? void 0 : CD.rank) && void 0 !== DD ? DD : MD.length;
              QD.slice(0, ID).includes(!1) || (null === cD || void 0 === cD || cD.removeEventListener("abort", bD), fD.abort(), null !== wD ? pD({
                ...wD.answer,
                isFinal: !BD.slice(0, wD.rank).includes(!0)
              }) : iD(new vD(SD.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((DD => {
            console.error("Studio AI: showing an answer failed", DD)
          }))
        }))
      }))
    }

    function XD(DD) {
      var CD, cD;
      return "length" === (null === DD || void 0 === DD || null === (CD = DD.choices) || void 0 === CD || null === (cD = CD[0]) || void 0 === cD ? void 0 : cD.finish_reason)
    }
    async function mD(DD, CD, cD) {
      const ID = MD.find((CD => CD.name === DD));
      if (void 0 === ID) return "failed";
      const pD = ND(oD, cD);
      try {
        const DD = await nD(ID, CD, pD.signal);
        return null !== DD && "object" === typeof DD ? DD.isCutOff ? (console.warn(`Studio AI: ${ID.name}'s answer was cut off at the token limit`), null) : {
          text: DD.text
        } : DD
      } finally {
        pD.clear()
      }
    }
    async function nD(DD, CD, cD) {
      const ID = await fetch(yD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: DD.name,
          messages: CD,
          max_tokens: ZD,
          temperature: DD.temperature,
          reasoning_effort: DD.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: cD
      });
      if (429 === ID.status) return "busy";
      if (!ID.ok) return console.warn(`Studio AI: ${DD.name} answered ${ID.status}`), "failed";
      const pD = await ID.json().catch((() => null)),
        iD = function(DD) {
          var CD, cD, ID;
          const pD = null === DD || void 0 === DD || null === (CD = DD.choices) || void 0 === CD || null === (cD = CD[0]) || void 0 === cD || null === (ID = cD.message) || void 0 === ID ? void 0 : ID.content;
          if ("string" !== typeof pD) return null;
          const iD = pD.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === iD ? null : iD
        }(pD);
      return null !== iD && function(DD) {
        const CD = BD(DD);
        return CD.length >= SD || CD.some((DD => bD(DD)))
      }(iD) ? (console.warn(`Studio AI: ${DD.name} thought out loud instead of answering`), "failed") : null === iD ? null : {
        text: iD,
        isCutOff: XD(pD)
      }
    }
  },
  6184: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => ND,
      E: () => BD,
      I: () => wD,
      M: () => MD,
      b: () => tD,
      f: () => bD,
      h: () => fD,
      j: () => ZD,
      l: () => yD,
      n: () => SD,
      o: () => iD,
      q: () => pD,
      r: () => XD,
      t: () => nD,
      u: () => oD,
      y: () => gD,
      z: () => mD
    });
    var ID = cD(4630);
    const pD = 2e3,
      iD = 2e4;

    function fD(DD) {
      return DD.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function bD(DD) {
      return DD.replace(/\$/g, "\\$")
    }
    const QD = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function wD(DD, CD) {
      QD.lastIndex = CD;
      const cD = QD.exec(DD);
      return cD.index + cD[0].length
    }

    function SD(DD) {
      return (0, ID.F)(DD, /\s+/g, (0, ID.y)(".!?")).flatMap((DD => DD.split("\n")))
    }

    function BD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD;
      const ID = [...DD.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((DD => DD.index)),
        pD = ID.filter((DD => DD < CD)),
        iD = ID.find((DD => DD >= cD));
      return [0 === pD.length ? 0 : pD.at(-1) + 1, void 0 === iD ? DD.length : iD + 1]
    }

    function yD(DD, CD) {
      const cD = DD.charCodeAt(CD - 1);
      return DD.slice(0, CD > 0 && CD < DD.length && cD >= 55296 && cD <= 56319 ? CD - 1 : CD)
    }

    function MD(DD, CD) {
      return `${CD}${DD.replace(/\\/g,"\\\\").split(CD).join(`\\${CD}`)}${CD}`
    }

    function tD(DD) {
      return DD.charAt(0).toUpperCase() + DD.slice(1)
    }

    function ZD(DD) {
      return Math.round(DD).toLocaleString("en-US")
    }

    function oD(DD) {
      return DD.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((DD => "" !== DD))
    }
    const vD = 3;

    function ND(DD, CD) {
      return oD(DD).filter((DD => DD.length >= vD && !/\d/.test(DD))).map((DD => `${DD} ${CD}`))
    }

    function gD(DD) {
      return DD.split(/[\s:_]+/).filter((DD => "" !== DD)).map(fD).join("[`:_\\s]+")
    }

    function XD(DD) {
      return oD(DD.split(".").pop())
    }

    function mD(DD) {
      return DD.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function nD(DD) {
      let CD = null;
      return () => {
        const cD = CD ??= DD();
        return cD.catch((() => {
          CD === cD && (CD = null)
        })), cD
      }
    }
  },
  4630: (DD, CD, cD) => {
    function ID(DD) {
      return {
        notAfter: DD
      }
    }
    cD.d(CD, {
      C: () => SD,
      F: () => BD,
      e: () => QD,
      f: () => wD,
      j: () => bD,
      n: () => ID,
      q: () => pD,
      u: () => iD,
      y: () => fD
    });
    const pD = ID("\\w$."),
      iD = ID("\\w.,");

    function fD(DD) {
      return CD => QD(CD, DD)
    }

    function bD(DD) {
      return CD => !DD.test(CD.input.slice(0, CD.index))
    }

    function QD(DD, CD) {
      return DD.index > 0 && new RegExp(`[${CD}]`).test(DD.input[DD.index - 1])
    }

    function wD(DD, CD, cD) {
      return function(DD) {
        return void 0 !== DD && "function" !== typeof DD
      }(cD) ? function(DD, CD, cD) {
        const ID = CD.flags.replace(/[gy]/g, ""),
          pD = new RegExp(`[^${cD}](?:${CD.source})`, `${ID}g`),
          iD = [],
          fD = cD => {
            const ID = cD.index + cD[0].length;
            return ("" === cD[0] ? yD(DD, CD, ID) : ID) - 1
          },
          bD = new RegExp(`(?:${CD.source})`, `${ID}y`).exec(DD);
        if (bD) {
          if (iD.push(bD), !CD.global) return iD;
          pD.lastIndex = fD(bD)
        }
        for (let QD = pD.exec(DD); QD; QD = pD.exec(DD)) {
          const cD = yD(DD, CD, QD.index) - QD.index;
          if (QD[0] = QD[0].slice(cD), QD.index += cD, iD.push(QD), !CD.global) break;
          pD.lastIndex = fD(QD)
        }
        return iD
      }(DD, CD, cD.notAfter) : function(DD, CD, cD) {
        const ID = new RegExp(CD.source, `${CD.flags.replace(/[gy]/g,"")}g`),
          pD = [];
        for (let iD = ID.exec(DD); iD; iD = ID.exec(DD))
          if (!cD || cD(iD)) {
            if (pD.push(iD), !CD.global) break;
            "" === iD[0] && (ID.lastIndex = yD(DD, CD, ID.lastIndex))
          } else ID.lastIndex = yD(DD, CD, iD.index);
        return pD
      }(DD, CD, cD)
    }

    function SD(DD, CD, cD, ID) {
      let pD = "",
        iD = 0;
      for (const fD of wD(DD, CD, cD)) pD += DD.slice(iD, fD.index) + ID(fD), iD = fD.index + fD[0].length;
      return pD + DD.slice(iD)
    }

    function BD(DD, CD, cD) {
      const ID = [];
      let pD = 0;
      for (const iD of wD(DD, CD, cD)) ID.push(DD.slice(pD, iD.index)), pD = iD.index + iD[0].length;
      return [...ID, DD.slice(pD)]
    }

    function yD(DD, CD, cD) {
      var ID;
      return cD + (CD.unicode && (null !== (ID = DD.codePointAt(cD)) && void 0 !== ID ? ID : 0) > 65535 ? 2 : 1)
    }
  },
  6233: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);