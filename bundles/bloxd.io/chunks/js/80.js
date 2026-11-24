export const id = 80;
export const ids = [80];
export const modules = {
  4768: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => fD,
      D: () => UD,
      d: () => pD,
      f: () => rD,
      j: () => GD,
      l: () => BD,
      o: () => LD,
      r: () => sD,
      v: () => KD,
      w: () => ID
    });
    const pD = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function sD(DD) {
      try {
        return decodeURIComponent(DD.slice(1))
      } catch {
        return DD.slice(1)
      }
    }

    function KD(DD) {
      return DD.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const rD = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${pD.source}`, "g");

    function LD(DD, zD) {
      return 2 === DD.length ? zD.replace(/^ (.*) $/, "$1") : zD
    }

    function cD(DD) {
      return "" === DD.trim()
    }

    function gD(DD) {
      const zD = [];
      for (const wD of DD.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zD.length > 0 && zD[zD.length - 1].endsWith("\\") ? zD[zD.length - 1] += `|${wD}` : zD.push(wD);
      return zD.map((DD => DD.trim().replaceAll("\\|", "|")))
    }
    const RD = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function AD(DD) {
      const zD = [],
        wD = [{
          indent: -1,
          items: zD
        }];
      let pD = null;
      for (const sD of DD) {
        const DD = sD.match(RD);
        if (!DD) {
          pD && (pD.text += ` ${sD.trim()}`);
          continue
        }
        const zD = DD[1].replace(/\t/g, "  ").length;
        for (; zD <= wD[wD.length - 1].indent;) wD.pop();
        pD = {
          text: DD[3].trim(),
          children: []
        }, wD[wD.length - 1].items.push(pD), wD.push({
          indent: zD,
          items: pD.children
        })
      }
      return zD
    }

    function UD(DD) {
      const zD = DD.replace(/\r\n/g, "\n").split("\n"),
        wD = [];
      let pD = 0;
      for (; pD < zD.length;) {
        const DD = zD[pD];
        if (cD(DD)) {
          pD++;
          continue
        }
        const sD = DD.match(/^\s*```\s*(\w*)\s*$/);
        if (sD) {
          const DD = [];
          for (pD++; pD < zD.length && !/^\s*```\s*$/.test(zD[pD]);) DD.push(zD[pD]), pD++;
          pD++, wD.push({
            kind: "code",
            lang: sD[1] || "text",
            code: DD.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const rD = DD.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (rD) {
          const DD = rD[2].trim();
          wD.push({
            kind: "heading",
            level: rD[1].length,
            text: DD,
            anchor: KD(DD)
          }), pD++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(DD)) {
          wD.push({
            kind: "rule"
          }), pD++;
          continue
        }
        if (DD.trim().startsWith("|") && pD + 1 < zD.length && /^\s*\|[\s:|-]+\|\s*$/.test(zD[pD + 1])) {
          const sD = gD(DD),
            KD = [];
          for (pD += 2; pD < zD.length && zD[pD].trim().startsWith("|");) KD.push(gD(zD[pD])), pD++;
          wD.push({
            kind: "table",
            header: sD,
            rows: KD
          });
          continue
        }
        if (DD.startsWith(">")) {
          const DD = [];
          for (; pD < zD.length && zD[pD].startsWith(">");) DD.push(zD[pD].replace(/^>\s?/, "")), pD++;
          wD.push({
            kind: "quote",
            blocks: UD(DD.join("\n"))
          });
          continue
        }
        if (RD.test(DD)) {
          const sD = [],
            KD = /^\s*\d+\./.test(DD);
          for (; pD < zD.length && !cD(zD[pD]) && (RD.test(zD[pD]) || /^\s+\S/.test(zD[pD]));) sD.push(zD[pD]), pD++;
          wD.push({
            kind: "list",
            ordered: KD,
            items: AD(sD)
          });
          continue
        }
        const LD = [];
        for (; pD < zD.length && !cD(zD[pD]) && !/^\s*```/.test(zD[pD]) && !/^#{1,6}\s/.test(zD[pD]) && !zD[pD].startsWith(">") && !RD.test(zD[pD]) && (!zD[pD].trim().startsWith("|") || 0 !== LD.length);) LD.push(zD[pD].trim()), pD++;
        0 === LD.length && (LD.push(zD[pD].trim()), pD++), wD.push({
          kind: "paragraph",
          text: LD.join(" ")
        })
      }
      return wD
    }

    function fD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const wD = UD(DD);
      let pD = "";
      const sD = [],
        KD = [],
        rD = new Map;
      for (const gD of wD) {
        if ("heading" === gD.kind) {
          var LD;
          const DD = (null !== (LD = rD.get(gD.anchor)) && void 0 !== LD ? LD : 0) + 1;
          rD.set(gD.anchor, DD), DD > 1 && (gD.anchor = `${gD.anchor}-${DD}`)
        }
        if ("heading" === gD.kind && 1 === gD.level && !pD) {
          pD = gD.text;
          continue
        }
        if ("heading" === gD.kind && gD.level <= zD) {
          KD.push({
            heading: gD,
            blocks: []
          });
          continue
        }
        const DD = KD.at(-1);
        DD ? DD.blocks.push(gD) : sD.push(gD)
      }
      const cD = DD => {
        for (;
          "rule" === (null === (zD = DD.at(-1)) || void 0 === zD ? void 0 : zD.kind);) {
          var zD;
          DD.pop()
        }
      };
      cD(sD);
      for (const gD of KD) cD(gD.blocks);
      return {
        title: pD,
        intro: sD,
        sections: KD
      }
    }

    function ID(DD) {
      return [{
        heading: null,
        blocks: DD.intro
      }, ...DD.sections.map((DD => ({
        heading: DD.heading,
        blocks: DD.blocks
      })))]
    }

    function BD(DD) {
      return DD.flatMap((DD => "code" === DD.kind ? [DD] : "quote" === DD.kind ? BD(DD.blocks) : []))
    }

    function GD(DD) {
      switch (DD.kind) {
        case "heading":
        case "paragraph":
          return DD.text;
        case "code":
          return DD.code;
        case "table":
          return [DD.header, ...DD.rows].map((DD => DD.join(" "))).join(" ");
        case "list": {
          const zD = DD => DD.map((DD => `${DD.text} ${zD(DD.children)}`)).join(" ");
          return zD(DD.items)
        }
        case "quote":
          return DD.blocks.map(GD).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6542: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      g: () => rD,
      h: () => LD
    });
    wD(6534);
    var pD = wD(58),
      sD = wD(4768),
      KD = wD(1096);
    const rD = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function LD(DD, zD) {
      return DD === zD ? DD : `${DD} (${zD})`
    }

    function cD(DD) {
      const zD = [];
      let wD = 0;
      for (const pD of DD.matchAll(rD)) {
        pD.index > wD && zD.push(DD.slice(wD, pD.index));
        const [, sD, rD, cD, gD, RD, AD] = pD;
        void 0 !== sD ? zD.push(LD(sD, rD)) : void 0 !== cD || void 0 !== gD ? zD.push((0, KD.jsx)("strong", {
          children: null !== cD && void 0 !== cD ? cD : gD
        }, pD.index)) : void 0 !== RD ? zD.push((0, KD.jsx)("em", {
          children: RD
        }, pD.index)) : zD.push((0, KD.jsx)("code", {
          children: AD
        }, pD.index)), wD = pD.index + pD[0].length
      }
      return wD < DD.length && zD.push(DD.slice(wD)), zD
    }

    function gD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const pD = DD.map(((DD, zD) => (0, KD.jsxs)("li", {
        children: [cD(DD.text), DD.children.length > 0 && gD(DD.children, !1)]
      }, zD)));
      return zD ? (0, KD.jsx)("ol", {
        start: wD,
        children: pD
      }) : (0, KD.jsx)("ul", {
        children: pD
      })
    }

    function RD(DD, zD) {
      switch (DD.kind) {
        case "heading":
          return DD.level <= 2 ? (0, KD.jsx)("h3", {
            children: cD(DD.text)
          }, zD) : (0, KD.jsx)("h4", {
            children: cD(DD.text)
          }, zD);
        case "paragraph":
          return (0, KD.jsx)("p", {
            children: cD(DD.text)
          }, zD);
        case "list":
          return (0, KD.jsx)(pD.Fragment, {
            children: gD(DD.items, DD.ordered)
          }, zD);
        case "quote":
          return (0, KD.jsx)("blockquote", {
            children: DD.blocks.map(((DD, zD) => RD(DD, zD)))
          }, zD);
        case "code":
          return (0, KD.jsx)("pre", {
            children: (0, KD.jsx)("code", {
              children: DD.code
            })
          }, zD);
        case "table":
          return (0, KD.jsxs)("table", {
            children: [(0, KD.jsx)("thead", {
              children: (0, KD.jsx)("tr", {
                children: DD.header.map(((DD, zD) => (0, KD.jsx)("th", {
                  children: cD(DD)
                }, zD)))
              })
            }), (0, KD.jsx)("tbody", {
              children: DD.rows.map(((DD, zD) => (0, KD.jsx)("tr", {
                children: DD.map(((DD, zD) => (0, KD.jsx)("td", {
                  children: cD(DD)
                }, zD)))
              }, zD)))
            })]
          }, zD);
        case "rule":
          return (0, KD.jsx)("hr", {}, zD)
      }
    }

    function AD(DD) {
      let {
        markdown: zD
      } = DD, wD = 0;
      return (0, KD.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, sD.D)(zD).map(((DD, zD) => {
          if ("list" !== DD.kind || !DD.ordered) return wD = 0, RD(DD, zD);
          const sD = wD + 1;
          return wD += DD.items.length, (0, KD.jsx)(pD.Fragment, {
            children: gD(DD.items, !0, sD)
          }, zD)
        }))
      })
    }
  },
  6529: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => nD,
      j: () => MD,
      h: () => JD,
      n: () => ID
    });
    var pD = wD(1217),
      sD = wD(6499),
      KD = wD(4884);
    const rD = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function LD(DD) {
      return (0, KD.f)(DD, rD, (zD => !/^my/i.test(zD[0]) || !/follow $/i.test(DD.slice(0, zD.index)))).length > 0
    }
    const cD = /\byou(?:r|'re|'ll)?\b/i,
      gD = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      RD = 2;

    function AD(DD) {
      return function(DD) {
        const zD = [];
        let wD = !1;
        for (const pD of DD.split("\n")) {
          if (/^\s*(```|~~~)/.test(pD)) {
            wD = !wD;
            continue
          }
          if (wD || /^\s*>/.test(pD)) continue;
          const DD = pD.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          zD.push(...(0, sD.m)(DD))
        }
        return zD
      }(DD).filter((DD => LD(DD) || gD.test(DD) && !cD.test(DD)))
    }
    const UD = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      fD = [{
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

    function ID(DD) {
      const zD = fD.findIndex((zD => zD.name === DD));
      return -1 === zD ? fD.length : zD
    }
    const BD = 2500,
      GD = 12e4;
    class hD extends Error {
      constructor(DD) {
        super(`Studio AI chat ${DD}`), this.reason = DD
      }
    }

    function nD(DD, zD) {
      const wD = new AbortController,
        pD = () => {
          wD.abort()
        },
        sD = setTimeout(pD, DD);
      return null !== zD && void 0 !== zD && zD.aborted && pD(), null === zD || void 0 === zD || zD.addEventListener("abort", pD, {
        once: !0
      }), {
        signal: wD.signal,
        clear: () => {
          clearTimeout(sD), null === zD || void 0 === zD || zD.removeEventListener("abort", pD)
        }
      }
    }

    function MD(DD, zD, wD) {
      return new Promise(((sD, KD) => {
        const rD = new AbortController,
          LD = () => {
            rD.abort(), KD((0, pD.d)(wD))
          };
        if (null !== wD && void 0 !== wD && wD.aborted) return void LD();
        null === wD || void 0 === wD || wD.addEventListener("abort", LD, {
          once: !0
        });
        const cD = fD.map((() => !1));
        let gD = null;
        const RD = fD.map((() => !1)),
          AD = fD.map((() => !1));
        fD.forEach(((pD, UD) => {
          const ID = nD(GD, rD.signal);
          ED(pD, [{
            role: "user",
            content: DD
          }], ID.signal).then((DD => {
            rD.signal.aborted || ("busy" === DD || "failed" === DD ? (RD[UD] = "busy" === DD, AD[UD] = !0) : null !== DD && (null === gD || UD < gD.rank) && (gD = {
              rank: UD,
              answer: {
                text: DD.text,
                model: pD.name
              }
            }, zD(gD.answer)))
          }), (DD => {
            rD.signal.aborted || (AD[UD] = !0, console.warn(`Studio AI: ${pD.name} couldn't be reached`, DD))
          })).finally((() => {
            ID.clear(), cD[UD] = !0, rD.signal.aborted || (() => {
              var DD, zD;
              const pD = null !== (DD = null === (zD = gD) || void 0 === zD ? void 0 : zD.rank) && void 0 !== DD ? DD : fD.length;
              cD.slice(0, pD).includes(!1) || (null === wD || void 0 === wD || wD.removeEventListener("abort", LD), rD.abort(), null !== gD ? sD({
                ...gD.answer,
                isFinal: !AD.slice(0, gD.rank).includes(!0)
              }) : KD(new hD(RD.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((DD => {
            console.error("Studio AI: showing an answer failed", DD)
          }))
        }))
      }))
    }

    function OD(DD) {
      var zD, wD;
      return "length" === (null === DD || void 0 === DD || null === (zD = DD.choices) || void 0 === zD || null === (wD = zD[0]) || void 0 === wD ? void 0 : wD.finish_reason)
    }
    async function JD(DD, zD, wD) {
      const pD = fD.find((zD => zD.name === DD));
      if (void 0 === pD) return "failed";
      const sD = nD(GD, wD);
      try {
        const DD = await ED(pD, zD, sD.signal);
        return null !== DD && "object" === typeof DD ? DD.isCutOff ? (console.warn(`Studio AI: ${pD.name}'s answer was cut off at the token limit`), null) : {
          text: DD.text
        } : DD
      } finally {
        sD.clear()
      }
    }
    async function ED(DD, zD, wD) {
      const pD = await fetch(UD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: DD.name,
          messages: zD,
          max_tokens: BD,
          temperature: DD.temperature,
          reasoning_effort: DD.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: wD
      });
      if (429 === pD.status) return "busy";
      if (!pD.ok) return console.warn(`Studio AI: ${DD.name} answered ${pD.status}`), "failed";
      const sD = await pD.json().catch((() => null)),
        KD = function(DD) {
          var zD, wD, pD;
          const sD = null === DD || void 0 === DD || null === (zD = DD.choices) || void 0 === zD || null === (wD = zD[0]) || void 0 === wD || null === (pD = wD.message) || void 0 === pD ? void 0 : pD.content;
          if ("string" !== typeof sD) return null;
          const KD = sD.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === KD ? null : KD
        }(sD);
      return null !== KD && function(DD) {
        const zD = AD(DD);
        return zD.length >= RD || zD.some((DD => LD(DD)))
      }(KD) ? (console.warn(`Studio AI: ${DD.name} thought out loud instead of answering`), "failed") : null === KD ? null : {
        text: KD,
        isCutOff: OD(sD)
      }
    }
  },
  6499: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => MD,
      D: () => JD,
      F: () => nD,
      I: () => AD,
      J: () => gD,
      M: () => fD,
      c: () => ID,
      f: () => LD,
      h: () => rD,
      j: () => BD,
      l: () => UD,
      m: () => RD,
      o: () => KD,
      p: () => sD,
      t: () => OD,
      w: () => ED,
      x: () => GD
    });
    var pD = wD(4884);
    const sD = 2e3,
      KD = 2e4;

    function rD(DD) {
      return DD.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function LD(DD) {
      return DD.replace(/\$/g, "\\$")
    }
    const cD = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function gD(DD, zD) {
      cD.lastIndex = zD;
      const wD = cD.exec(DD);
      return wD.index + wD[0].length
    }

    function RD(DD) {
      return (0, pD.C)(DD, /\s+/g, (0, pD.w)(".!?")).flatMap((DD => DD.split("\n")))
    }

    function AD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD;
      const pD = [...DD.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((DD => DD.index)),
        sD = pD.filter((DD => DD < zD)),
        KD = pD.find((DD => DD >= wD));
      return [0 === sD.length ? 0 : sD.at(-1) + 1, void 0 === KD ? DD.length : KD + 1]
    }

    function UD(DD, zD) {
      const wD = DD.charCodeAt(zD - 1);
      return DD.slice(0, zD > 0 && zD < DD.length && wD >= 55296 && wD <= 56319 ? zD - 1 : zD)
    }

    function fD(DD, zD) {
      return `${zD}${DD.replace(/\\/g,"\\\\").split(zD).join(`\\${zD}`)}${zD}`
    }

    function ID(DD) {
      return DD.charAt(0).toUpperCase() + DD.slice(1)
    }

    function BD(DD) {
      return Math.round(DD).toLocaleString("en-US")
    }

    function GD(DD) {
      return DD.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((DD => "" !== DD))
    }
    const hD = 3;

    function nD(DD, zD) {
      return GD(DD).filter((DD => DD.length >= hD && !/\d/.test(DD))).map((DD => `${DD} ${zD}`))
    }

    function MD(DD) {
      return DD.split(/[\s:_]+/).filter((DD => "" !== DD)).map(rD).join("[`:_\\s]+")
    }

    function OD(DD) {
      return GD(DD.split(".").pop())
    }

    function JD(DD) {
      return DD.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function ED(DD) {
      let zD = null;
      return () => {
        const wD = zD ??= DD();
        return wD.catch((() => {
          zD === wD && (zD = null)
        })), wD
      }
    }
  },
  4884: (DD, zD, wD) => {
    function pD(DD) {
      return {
        notAfter: DD
      }
    }
    wD.d(zD, {
      C: () => AD,
      c: () => cD,
      f: () => gD,
      j: () => LD,
      l: () => pD,
      o: () => sD,
      s: () => KD,
      w: () => rD,
      z: () => RD
    });
    const sD = pD("\\w$."),
      KD = pD("\\w.,");

    function rD(DD) {
      return zD => cD(zD, DD)
    }

    function LD(DD) {
      return zD => !DD.test(zD.input.slice(0, zD.index))
    }

    function cD(DD, zD) {
      return DD.index > 0 && new RegExp(`[${zD}]`).test(DD.input[DD.index - 1])
    }

    function gD(DD, zD, wD) {
      return function(DD) {
        return void 0 !== DD && "function" !== typeof DD
      }(wD) ? function(DD, zD, wD) {
        const pD = zD.flags.replace(/[gy]/g, ""),
          sD = new RegExp(`[^${wD}](?:${zD.source})`, `${pD}g`),
          KD = [],
          rD = wD => {
            const pD = wD.index + wD[0].length;
            return ("" === wD[0] ? UD(DD, zD, pD) : pD) - 1
          },
          LD = new RegExp(`(?:${zD.source})`, `${pD}y`).exec(DD);
        if (LD) {
          if (KD.push(LD), !zD.global) return KD;
          sD.lastIndex = rD(LD)
        }
        for (let cD = sD.exec(DD); cD; cD = sD.exec(DD)) {
          const wD = UD(DD, zD, cD.index) - cD.index;
          if (cD[0] = cD[0].slice(wD), cD.index += wD, KD.push(cD), !zD.global) break;
          sD.lastIndex = rD(cD)
        }
        return KD
      }(DD, zD, wD.notAfter) : function(DD, zD, wD) {
        const pD = new RegExp(zD.source, `${zD.flags.replace(/[gy]/g,"")}g`),
          sD = [];
        for (let KD = pD.exec(DD); KD; KD = pD.exec(DD))
          if (!wD || wD(KD)) {
            if (sD.push(KD), !zD.global) break;
            "" === KD[0] && (pD.lastIndex = UD(DD, zD, pD.lastIndex))
          } else pD.lastIndex = UD(DD, zD, KD.index);
        return sD
      }(DD, zD, wD)
    }

    function RD(DD, zD, wD, pD) {
      let sD = "",
        KD = 0;
      for (const rD of gD(DD, zD, wD)) sD += DD.slice(KD, rD.index) + pD(rD), KD = rD.index + rD[0].length;
      return sD + DD.slice(KD)
    }

    function AD(DD, zD, wD) {
      const pD = [];
      let sD = 0;
      for (const KD of gD(DD, zD, wD)) pD.push(DD.slice(sD, KD.index)), sD = KD.index + KD[0].length;
      return [...pD, DD.slice(sD)]
    }

    function UD(DD, zD, wD) {
      var pD;
      return wD + (zD.unicode && (null !== (pD = DD.codePointAt(wD)) && void 0 !== pD ? pD : 0) > 65535 ? 2 : 1)
    }
  },
  6534: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);