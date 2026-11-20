export const id = 78;
export const ids = [78];
export const modules = {
  4707: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => OT,
      j: () => hT,
      k: () => tT,
      l: () => yT,
      o: () => MT,
      p: () => KT,
      q: () => vT,
      s: () => jT,
      v: () => CT
    });
    const lT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function MT(TT) {
      try {
        return decodeURIComponent(TT.slice(1))
      } catch {
        return TT.slice(1)
      }
    }

    function KT(TT) {
      return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const OT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${lT.source}`, "g");

    function yT(TT, kT) {
      return 2 === TT.length ? kT.replace(/^ (.*) $/, "$1") : kT
    }

    function fT(TT) {
      return "" === TT.trim()
    }

    function xT(TT) {
      const kT = [];
      for (const cT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) kT.length > 0 && kT[kT.length - 1].endsWith("\\") ? kT[kT.length - 1] += `|${cT}` : kT.push(cT);
      return kT.map((TT => TT.trim().replaceAll("\\|", "|")))
    }
    const IT = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function AT(TT) {
      const kT = [],
        cT = [{
          indent: -1,
          items: kT
        }];
      let lT = null;
      for (const MT of TT) {
        const TT = MT.match(IT);
        if (!TT) {
          lT && (lT.text += ` ${MT.trim()}`);
          continue
        }
        const kT = TT[1].replace(/\t/g, "  ").length;
        for (; kT <= cT[cT.length - 1].indent;) cT.pop();
        lT = {
          text: TT[3].trim(),
          children: []
        }, cT[cT.length - 1].items.push(lT), cT.push({
          indent: kT,
          items: lT.children
        })
      }
      return kT
    }

    function CT(TT) {
      const kT = TT.replace(/\r\n/g, "\n").split("\n"),
        cT = [];
      let lT = 0;
      for (; lT < kT.length;) {
        const TT = kT[lT];
        if (fT(TT)) {
          lT++;
          continue
        }
        const MT = TT.match(/^\s*```\s*(\w*)\s*$/);
        if (MT) {
          const TT = [];
          for (lT++; lT < kT.length && !/^\s*```\s*$/.test(kT[lT]);) TT.push(kT[lT]), lT++;
          lT++, cT.push({
            kind: "code",
            lang: MT[1] || "text",
            code: TT.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const OT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (OT) {
          const TT = OT[2].trim();
          cT.push({
            kind: "heading",
            level: OT[1].length,
            text: TT,
            anchor: KT(TT)
          }), lT++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
          cT.push({
            kind: "rule"
          }), lT++;
          continue
        }
        if (TT.trim().startsWith("|") && lT + 1 < kT.length && /^\s*\|[\s:|-]+\|\s*$/.test(kT[lT + 1])) {
          const MT = xT(TT),
            KT = [];
          for (lT += 2; lT < kT.length && kT[lT].trim().startsWith("|");) KT.push(xT(kT[lT])), lT++;
          cT.push({
            kind: "table",
            header: MT,
            rows: KT
          });
          continue
        }
        if (TT.startsWith(">")) {
          const TT = [];
          for (; lT < kT.length && kT[lT].startsWith(">");) TT.push(kT[lT].replace(/^>\s?/, "")), lT++;
          cT.push({
            kind: "quote",
            blocks: CT(TT.join("\n"))
          });
          continue
        }
        if (IT.test(TT)) {
          const MT = [],
            KT = /^\s*\d+\./.test(TT);
          for (; lT < kT.length && !fT(kT[lT]) && (IT.test(kT[lT]) || /^\s+\S/.test(kT[lT]));) MT.push(kT[lT]), lT++;
          cT.push({
            kind: "list",
            ordered: KT,
            items: AT(MT)
          });
          continue
        }
        const yT = [];
        for (; lT < kT.length && !fT(kT[lT]) && !/^\s*```/.test(kT[lT]) && !/^#{1,6}\s/.test(kT[lT]) && !kT[lT].startsWith(">") && !IT.test(kT[lT]) && (!kT[lT].trim().startsWith("|") || 0 !== yT.length);) yT.push(kT[lT].trim()), lT++;
        0 === yT.length && (yT.push(kT[lT].trim()), lT++), cT.push({
          kind: "paragraph",
          text: yT.join(" ")
        })
      }
      return cT
    }

    function jT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cT = CT(TT);
      let lT = "";
      const MT = [],
        KT = [],
        OT = new Map;
      for (const xT of cT) {
        if ("heading" === xT.kind) {
          var yT;
          const TT = (null !== (yT = OT.get(xT.anchor)) && void 0 !== yT ? yT : 0) + 1;
          OT.set(xT.anchor, TT), TT > 1 && (xT.anchor = `${xT.anchor}-${TT}`)
        }
        if ("heading" === xT.kind && 1 === xT.level && !lT) {
          lT = xT.text;
          continue
        }
        if ("heading" === xT.kind && xT.level <= kT) {
          KT.push({
            heading: xT,
            blocks: []
          });
          continue
        }
        const TT = KT.at(-1);
        TT ? TT.blocks.push(xT) : MT.push(xT)
      }
      const fT = TT => {
        for (;
          "rule" === (null === (kT = TT.at(-1)) || void 0 === kT ? void 0 : kT.kind);) {
          var kT;
          TT.pop()
        }
      };
      fT(MT);
      for (const xT of KT) fT(xT.blocks);
      return {
        title: lT,
        intro: MT,
        sections: KT
      }
    }

    function vT(TT) {
      return [{
        heading: null,
        blocks: TT.intro
      }, ...TT.sections.map((TT => ({
        heading: TT.heading,
        blocks: TT.blocks
      })))]
    }

    function tT(TT) {
      return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? tT(TT.blocks) : []))
    }

    function hT(TT) {
      switch (TT.kind) {
        case "heading":
        case "paragraph":
          return TT.text;
        case "code":
          return TT.code;
        case "table":
          return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
        case "list": {
          const kT = TT => TT.map((TT => `${TT.text} ${kT(TT.children)}`)).join(" ");
          return kT(TT.items)
        }
        case "quote":
          return TT.blocks.map(hT).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6511: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => AT,
      g: () => OT,
      i: () => yT
    });
    cT(6505);
    var lT = cT(71),
      MT = cT(4707),
      KT = cT(1099);
    const OT = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function yT(TT, kT) {
      return TT === kT ? TT : `${TT} (${kT})`
    }

    function fT(TT) {
      const kT = [];
      let cT = 0;
      for (const lT of TT.matchAll(OT)) {
        lT.index > cT && kT.push(TT.slice(cT, lT.index));
        const [, MT, OT, fT, xT, IT, AT] = lT;
        void 0 !== MT ? kT.push(yT(MT, OT)) : void 0 !== fT || void 0 !== xT ? kT.push((0, KT.jsx)("strong", {
          children: null !== fT && void 0 !== fT ? fT : xT
        }, lT.index)) : void 0 !== IT ? kT.push((0, KT.jsx)("em", {
          children: IT
        }, lT.index)) : kT.push((0, KT.jsx)("code", {
          children: AT
        }, lT.index)), cT = lT.index + lT[0].length
      }
      return cT < TT.length && kT.push(TT.slice(cT)), kT
    }

    function xT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const lT = TT.map(((TT, kT) => (0, KT.jsxs)("li", {
        children: [fT(TT.text), TT.children.length > 0 && xT(TT.children, !1)]
      }, kT)));
      return kT ? (0, KT.jsx)("ol", {
        start: cT,
        children: lT
      }) : (0, KT.jsx)("ul", {
        children: lT
      })
    }

    function IT(TT, kT) {
      switch (TT.kind) {
        case "heading":
          return TT.level <= 2 ? (0, KT.jsx)("h3", {
            children: fT(TT.text)
          }, kT) : (0, KT.jsx)("h4", {
            children: fT(TT.text)
          }, kT);
        case "paragraph":
          return (0, KT.jsx)("p", {
            children: fT(TT.text)
          }, kT);
        case "list":
          return (0, KT.jsx)(lT.Fragment, {
            children: xT(TT.items, TT.ordered)
          }, kT);
        case "quote":
          return (0, KT.jsx)("blockquote", {
            children: TT.blocks.map(((TT, kT) => IT(TT, kT)))
          }, kT);
        case "code":
          return (0, KT.jsx)("pre", {
            children: (0, KT.jsx)("code", {
              children: TT.code
            })
          }, kT);
        case "table":
          return (0, KT.jsxs)("table", {
            children: [(0, KT.jsx)("thead", {
              children: (0, KT.jsx)("tr", {
                children: TT.header.map(((TT, kT) => (0, KT.jsx)("th", {
                  children: fT(TT)
                }, kT)))
              })
            }), (0, KT.jsx)("tbody", {
              children: TT.rows.map(((TT, kT) => (0, KT.jsx)("tr", {
                children: TT.map(((TT, kT) => (0, KT.jsx)("td", {
                  children: fT(TT)
                }, kT)))
              }, kT)))
            })]
          }, kT);
        case "rule":
          return (0, KT.jsx)("hr", {}, kT)
      }
    }

    function AT(TT) {
      let {
        markdown: kT
      } = TT, cT = 0;
      return (0, KT.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, MT.v)(kT).map(((TT, kT) => {
          if ("list" !== TT.kind || !TT.ordered) return cT = 0, IT(TT, kT);
          const MT = cT + 1;
          return cT += TT.items.length, (0, KT.jsx)(lT.Fragment, {
            children: xT(TT.items, !0, MT)
          }, kT)
        }))
      })
    }
  },
  6498: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => QT,
      j: () => ST,
      h: () => aT,
      n: () => vT
    });
    var lT = cT(1833),
      MT = cT(6449),
      KT = cT(4831);
    const OT = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function yT(TT) {
      return (0, KT.h)(TT, OT, (kT => !/^my/i.test(kT[0]) || !/follow $/i.test(TT.slice(0, kT.index)))).length > 0
    }
    const fT = /\byou(?:r|'re|'ll)?\b/i,
      xT = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      IT = 2;

    function AT(TT) {
      return function(TT) {
        const kT = [];
        let cT = !1;
        for (const lT of TT.split("\n")) {
          if (/^\s*(```|~~~)/.test(lT)) {
            cT = !cT;
            continue
          }
          if (cT || /^\s*>/.test(lT)) continue;
          const TT = lT.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          kT.push(...(0, MT.q)(TT))
        }
        return kT
      }(TT).filter((TT => yT(TT) || xT.test(TT) && !fT.test(TT)))
    }
    const CT = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      jT = [{
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

    function vT(TT) {
      const kT = jT.findIndex((kT => kT.name === TT));
      return -1 === kT ? jT.length : kT
    }
    const tT = 2500,
      hT = 12e4;
    class NT extends Error {
      constructor(TT) {
        super(`Studio AI chat ${TT}`), this.reason = TT
      }
    }

    function QT(TT, kT) {
      const cT = new AbortController,
        lT = () => {
          cT.abort()
        },
        MT = setTimeout(lT, TT);
      return null !== kT && void 0 !== kT && kT.aborted && lT(), null === kT || void 0 === kT || kT.addEventListener("abort", lT, {
        once: !0
      }), {
        signal: cT.signal,
        clear: () => {
          clearTimeout(MT), null === kT || void 0 === kT || kT.removeEventListener("abort", lT)
        }
      }
    }

    function ST(TT, kT, cT) {
      return new Promise(((MT, KT) => {
        const OT = new AbortController,
          yT = () => {
            OT.abort(), KT((0, lT.e)(cT))
          };
        if (null !== cT && void 0 !== cT && cT.aborted) return void yT();
        null === cT || void 0 === cT || cT.addEventListener("abort", yT, {
          once: !0
        });
        const fT = jT.map((() => !1));
        let xT = null;
        const IT = jT.map((() => !1)),
          AT = jT.map((() => !1));
        jT.forEach(((lT, CT) => {
          const vT = QT(hT, OT.signal);
          FT(lT, [{
            role: "user",
            content: TT
          }], vT.signal).then((TT => {
            OT.signal.aborted || ("busy" === TT || "failed" === TT ? (IT[CT] = "busy" === TT, AT[CT] = !0) : null !== TT && (null === xT || CT < xT.rank) && (xT = {
              rank: CT,
              answer: {
                text: TT.text,
                model: lT.name
              }
            }, kT(xT.answer)))
          }), (TT => {
            OT.signal.aborted || (AT[CT] = !0, console.warn(`Studio AI: ${lT.name} couldn't be reached`, TT))
          })).finally((() => {
            vT.clear(), fT[CT] = !0, OT.signal.aborted || (() => {
              var TT, kT;
              const lT = null !== (TT = null === (kT = xT) || void 0 === kT ? void 0 : kT.rank) && void 0 !== TT ? TT : jT.length;
              fT.slice(0, lT).includes(!1) || (null === cT || void 0 === cT || cT.removeEventListener("abort", yT), OT.abort(), null !== xT ? MT({
                ...xT.answer,
                isFinal: !AT.slice(0, xT.rank).includes(!0)
              }) : KT(new NT(IT.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((TT => {
            console.error("Studio AI: showing an answer failed", TT)
          }))
        }))
      }))
    }

    function DT(TT) {
      var kT, cT;
      return "length" === (null === TT || void 0 === TT || null === (kT = TT.choices) || void 0 === kT || null === (cT = kT[0]) || void 0 === cT ? void 0 : cT.finish_reason)
    }
    async function aT(TT, kT, cT) {
      const lT = jT.find((kT => kT.name === TT));
      if (void 0 === lT) return "failed";
      const MT = QT(hT, cT);
      try {
        const TT = await FT(lT, kT, MT.signal);
        return null !== TT && "object" === typeof TT ? TT.isCutOff ? (console.warn(`Studio AI: ${lT.name}'s answer was cut off at the token limit`), null) : {
          text: TT.text
        } : TT
      } finally {
        MT.clear()
      }
    }
    async function FT(TT, kT, cT) {
      const lT = await fetch(CT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: TT.name,
          messages: kT,
          max_tokens: tT,
          temperature: TT.temperature,
          reasoning_effort: TT.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: cT
      });
      if (429 === lT.status) return "busy";
      if (!lT.ok) return console.warn(`Studio AI: ${TT.name} answered ${lT.status}`), "failed";
      const MT = await lT.json().catch((() => null)),
        KT = function(TT) {
          var kT, cT, lT;
          const MT = null === TT || void 0 === TT || null === (kT = TT.choices) || void 0 === kT || null === (cT = kT[0]) || void 0 === cT || null === (lT = cT.message) || void 0 === lT ? void 0 : lT.content;
          if ("string" !== typeof MT) return null;
          const KT = MT.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === KT ? null : KT
        }(MT);
      return null !== KT && function(TT) {
        const kT = AT(TT);
        return kT.length >= IT || kT.some((TT => yT(TT)))
      }(KT) ? (console.warn(`Studio AI: ${TT.name} thought out loud instead of answering`), "failed") : null === KT ? null : {
        text: KT,
        isCutOff: DT(MT)
      }
    }
  },
  6449: (TT, kT, cT) => {
    cT.d(kT, {
      C: () => FT,
      G: () => hT,
      H: () => ST,
      J: () => aT,
      L: () => QT,
      P: () => AT,
      S: () => xT,
      T: () => jT,
      e: () => vT,
      h: () => yT,
      j: () => OT,
      m: () => tT,
      o: () => CT,
      q: () => IT,
      s: () => KT,
      u: () => MT,
      y: () => DT
    });
    var lT = cT(4831);
    const MT = 2e3,
      KT = 2e4;

    function OT(TT) {
      return TT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function yT(TT) {
      return TT.replace(/\$/g, "\\$")
    }
    const fT = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function xT(TT, kT) {
      fT.lastIndex = kT;
      const cT = fT.exec(TT);
      return cT.index + cT[0].length
    }

    function IT(TT) {
      return (0, lT.x)(TT, /\s+/g, (0, lT.r)(".!?")).flatMap((TT => TT.split("\n")))
    }

    function AT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT;
      const lT = [...TT.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((TT => TT.index)),
        MT = lT.filter((TT => TT < kT)),
        KT = lT.find((TT => TT >= cT));
      return [0 === MT.length ? 0 : MT.at(-1) + 1, void 0 === KT ? TT.length : KT + 1]
    }

    function CT(TT, kT) {
      const cT = TT.charCodeAt(kT - 1);
      return TT.slice(0, kT > 0 && kT < TT.length && cT >= 55296 && cT <= 56319 ? kT - 1 : kT)
    }

    function jT(TT, kT) {
      return `${kT}${TT.replace(/\\/g,"\\\\").split(kT).join(`\\${kT}`)}${kT}`
    }

    function vT(TT) {
      return TT.charAt(0).toUpperCase() + TT.slice(1)
    }

    function tT(TT) {
      return Math.round(TT).toLocaleString("en-US")
    }

    function hT(TT) {
      return TT.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((TT => "" !== TT))
    }
    const NT = 3;

    function QT(TT, kT) {
      return hT(TT).filter((TT => TT.length >= NT && !/\d/.test(TT))).map((TT => `${TT} ${kT}`))
    }

    function ST(TT) {
      return TT.split(/[\s:_]+/).filter((TT => "" !== TT)).map(OT).join("[`:_\\s]+")
    }

    function DT(TT) {
      return hT(TT.split(".").pop())
    }

    function aT(TT) {
      return TT.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function FT(TT) {
      let kT = null;
      return () => {
        const cT = kT ??= TT();
        return cT.catch((() => {
          kT === cT && (kT = null)
        })), cT
      }
    }
  },
  4831: (TT, kT, cT) => {
    function lT(TT) {
      return {
        notAfter: TT
      }
    }
    cT.d(kT, {
      d: () => fT,
      h: () => xT,
      k: () => yT,
      m: () => lT,
      p: () => MT,
      q: () => KT,
      r: () => OT,
      v: () => IT,
      x: () => AT
    });
    const MT = lT("\\w$."),
      KT = lT("\\w.,");

    function OT(TT) {
      return kT => fT(kT, TT)
    }

    function yT(TT) {
      return kT => !TT.test(kT.input.slice(0, kT.index))
    }

    function fT(TT, kT) {
      return TT.index > 0 && new RegExp(`[${kT}]`).test(TT.input[TT.index - 1])
    }

    function xT(TT, kT, cT) {
      return function(TT) {
        return void 0 !== TT && "function" !== typeof TT
      }(cT) ? function(TT, kT, cT) {
        const lT = kT.flags.replace(/[gy]/g, ""),
          MT = new RegExp(`[^${cT}](?:${kT.source})`, `${lT}g`),
          KT = [],
          OT = cT => {
            const lT = cT.index + cT[0].length;
            return ("" === cT[0] ? CT(TT, kT, lT) : lT) - 1
          },
          yT = new RegExp(`(?:${kT.source})`, `${lT}y`).exec(TT);
        if (yT) {
          if (KT.push(yT), !kT.global) return KT;
          MT.lastIndex = OT(yT)
        }
        for (let fT = MT.exec(TT); fT; fT = MT.exec(TT)) {
          const cT = CT(TT, kT, fT.index) - fT.index;
          if (fT[0] = fT[0].slice(cT), fT.index += cT, KT.push(fT), !kT.global) break;
          MT.lastIndex = OT(fT)
        }
        return KT
      }(TT, kT, cT.notAfter) : function(TT, kT, cT) {
        const lT = new RegExp(kT.source, `${kT.flags.replace(/[gy]/g,"")}g`),
          MT = [];
        for (let KT = lT.exec(TT); KT; KT = lT.exec(TT))
          if (!cT || cT(KT)) {
            if (MT.push(KT), !kT.global) break;
            "" === KT[0] && (lT.lastIndex = CT(TT, kT, lT.lastIndex))
          } else lT.lastIndex = CT(TT, kT, KT.index);
        return MT
      }(TT, kT, cT)
    }

    function IT(TT, kT, cT, lT) {
      let MT = "",
        KT = 0;
      for (const OT of xT(TT, kT, cT)) MT += TT.slice(KT, OT.index) + lT(OT), KT = OT.index + OT[0].length;
      return MT + TT.slice(KT)
    }

    function AT(TT, kT, cT) {
      const lT = [];
      let MT = 0;
      for (const KT of xT(TT, kT, cT)) lT.push(TT.slice(MT, KT.index)), MT = KT.index + KT[0].length;
      return [...lT, TT.slice(MT)]
    }

    function CT(TT, kT, cT) {
      var lT;
      return cT + (kT.unicode && (null !== (lT = TT.codePointAt(cT)) && void 0 !== lT ? lT : 0) > 65535 ? 2 : 1)
    }
  },
  6505: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);