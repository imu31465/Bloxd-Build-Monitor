export const id = 77;
export const ids = [77];
export const modules = {
  4229: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      e: () => WT,
      f: () => MT,
      j: () => KT,
      l: () => XT,
      p: () => zT,
      r: () => kT,
      s: () => cT,
      v: () => xT,
      y: () => LT
    });
    const iT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function zT(TT) {
      try {
        return decodeURIComponent(TT.slice(1))
      } catch {
        return TT.slice(1)
      }
    }

    function kT(TT) {
      return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const WT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${iT.source}`, "g");

    function XT(TT, oT) {
      return 2 === TT.length ? oT.replace(/^ (.*) $/, "$1") : oT
    }

    function BT(TT) {
      return "" === TT.trim()
    }

    function FT(TT) {
      const oT = [];
      for (const IT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) oT.length > 0 && oT[oT.length - 1].endsWith("\\") ? oT[oT.length - 1] += `|${IT}` : oT.push(IT);
      return oT.map((TT => TT.trim().replaceAll("\\|", "|")))
    }
    const ST = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function DT(TT) {
      const oT = [],
        IT = [{
          indent: -1,
          items: oT
        }];
      let iT = null;
      for (const zT of TT) {
        const TT = zT.match(ST);
        if (!TT) {
          iT && (iT.text += ` ${zT.trim()}`);
          continue
        }
        const oT = TT[1].replace(/\t/g, "  ").length;
        for (; oT <= IT[IT.length - 1].indent;) IT.pop();
        iT = {
          text: TT[3].trim(),
          children: []
        }, IT[IT.length - 1].items.push(iT), IT.push({
          indent: oT,
          items: iT.children
        })
      }
      return oT
    }

    function LT(TT) {
      const oT = TT.replace(/\r\n/g, "\n").split("\n"),
        IT = [];
      let iT = 0;
      for (; iT < oT.length;) {
        const TT = oT[iT];
        if (BT(TT)) {
          iT++;
          continue
        }
        const zT = TT.match(/^\s*```\s*(\w*)\s*$/);
        if (zT) {
          const TT = [];
          for (iT++; iT < oT.length && !/^\s*```\s*$/.test(oT[iT]);) TT.push(oT[iT]), iT++;
          iT++, IT.push({
            kind: "code",
            lang: zT[1] || "text",
            code: TT.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const WT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (WT) {
          const TT = WT[2].trim();
          IT.push({
            kind: "heading",
            level: WT[1].length,
            text: TT,
            anchor: kT(TT)
          }), iT++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
          IT.push({
            kind: "rule"
          }), iT++;
          continue
        }
        if (TT.trim().startsWith("|") && iT + 1 < oT.length && /^\s*\|[\s:|-]+\|\s*$/.test(oT[iT + 1])) {
          const zT = FT(TT),
            kT = [];
          for (iT += 2; iT < oT.length && oT[iT].trim().startsWith("|");) kT.push(FT(oT[iT])), iT++;
          IT.push({
            kind: "table",
            header: zT,
            rows: kT
          });
          continue
        }
        if (TT.startsWith(">")) {
          const TT = [];
          for (; iT < oT.length && oT[iT].startsWith(">");) TT.push(oT[iT].replace(/^>\s?/, "")), iT++;
          IT.push({
            kind: "quote",
            blocks: LT(TT.join("\n"))
          });
          continue
        }
        if (ST.test(TT)) {
          const zT = [],
            kT = /^\s*\d+\./.test(TT);
          for (; iT < oT.length && !BT(oT[iT]) && (ST.test(oT[iT]) || /^\s+\S/.test(oT[iT]));) zT.push(oT[iT]), iT++;
          IT.push({
            kind: "list",
            ordered: kT,
            items: DT(zT)
          });
          continue
        }
        const XT = [];
        for (; iT < oT.length && !BT(oT[iT]) && !/^\s*```/.test(oT[iT]) && !/^#{1,6}\s/.test(oT[iT]) && !oT[iT].startsWith(">") && !ST.test(oT[iT]) && (!oT[iT].trim().startsWith("|") || 0 !== XT.length);) XT.push(oT[iT].trim()), iT++;
        0 === XT.length && (XT.push(oT[iT].trim()), iT++), IT.push({
          kind: "paragraph",
          text: XT.join(" ")
        })
      }
      return IT
    }

    function xT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const IT = LT(TT);
      let iT = "";
      const zT = [],
        kT = [],
        WT = new Map;
      for (const FT of IT) {
        if ("heading" === FT.kind) {
          var XT;
          const TT = (null !== (XT = WT.get(FT.anchor)) && void 0 !== XT ? XT : 0) + 1;
          WT.set(FT.anchor, TT), TT > 1 && (FT.anchor = `${FT.anchor}-${TT}`)
        }
        if ("heading" === FT.kind && 1 === FT.level && !iT) {
          iT = FT.text;
          continue
        }
        if ("heading" === FT.kind && FT.level <= oT) {
          kT.push({
            heading: FT,
            blocks: []
          });
          continue
        }
        const TT = kT.at(-1);
        TT ? TT.blocks.push(FT) : zT.push(FT)
      }
      const BT = TT => {
        for (;
          "rule" === (null === (oT = TT.at(-1)) || void 0 === oT ? void 0 : oT.kind);) {
          var oT;
          TT.pop()
        }
      };
      BT(zT);
      for (const FT of kT) BT(FT.blocks);
      return {
        title: iT,
        intro: zT,
        sections: kT
      }
    }

    function cT(TT) {
      return [{
        heading: null,
        blocks: TT.intro
      }, ...TT.sections.map((TT => ({
        heading: TT.heading,
        blocks: TT.blocks
      })))]
    }

    function KT(TT) {
      return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? KT(TT.blocks) : []))
    }

    function MT(TT) {
      switch (TT.kind) {
        case "heading":
        case "paragraph":
          return TT.text;
        case "code":
          return TT.code;
        case "table":
          return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
        case "list": {
          const oT = TT => TT.map((TT => `${TT.text} ${oT(TT.children)}`)).join(" ");
          return oT(TT.items)
        }
        case "quote":
          return TT.blocks.map(MT).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6001: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => DT,
      f: () => WT,
      i: () => XT
    });
    IT(5992);
    var iT = IT(46),
      zT = IT(4229),
      kT = IT(1083);
    const WT = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function XT(TT, oT) {
      return TT === oT ? TT : `${TT} (${oT})`
    }

    function BT(TT) {
      const oT = [];
      let IT = 0;
      for (const iT of TT.matchAll(WT)) {
        iT.index > IT && oT.push(TT.slice(IT, iT.index));
        const [, zT, WT, BT, FT, ST, DT] = iT;
        void 0 !== zT ? oT.push(XT(zT, WT)) : void 0 !== BT || void 0 !== FT ? oT.push((0, kT.jsx)("strong", {
          children: null !== BT && void 0 !== BT ? BT : FT
        }, iT.index)) : void 0 !== ST ? oT.push((0, kT.jsx)("em", {
          children: ST
        }, iT.index)) : oT.push((0, kT.jsx)("code", {
          children: DT
        }, iT.index)), IT = iT.index + iT[0].length
      }
      return IT < TT.length && oT.push(TT.slice(IT)), oT
    }

    function FT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const iT = TT.map(((TT, oT) => (0, kT.jsxs)("li", {
        children: [BT(TT.text), TT.children.length > 0 && FT(TT.children, !1)]
      }, oT)));
      return oT ? (0, kT.jsx)("ol", {
        start: IT,
        children: iT
      }) : (0, kT.jsx)("ul", {
        children: iT
      })
    }

    function ST(TT, oT) {
      switch (TT.kind) {
        case "heading":
          return TT.level <= 2 ? (0, kT.jsx)("h3", {
            children: BT(TT.text)
          }, oT) : (0, kT.jsx)("h4", {
            children: BT(TT.text)
          }, oT);
        case "paragraph":
          return (0, kT.jsx)("p", {
            children: BT(TT.text)
          }, oT);
        case "list":
          return (0, kT.jsx)(iT.Fragment, {
            children: FT(TT.items, TT.ordered)
          }, oT);
        case "quote":
          return (0, kT.jsx)("blockquote", {
            children: TT.blocks.map(((TT, oT) => ST(TT, oT)))
          }, oT);
        case "code":
          return (0, kT.jsx)("pre", {
            children: (0, kT.jsx)("code", {
              children: TT.code
            })
          }, oT);
        case "table":
          return (0, kT.jsxs)("table", {
            children: [(0, kT.jsx)("thead", {
              children: (0, kT.jsx)("tr", {
                children: TT.header.map(((TT, oT) => (0, kT.jsx)("th", {
                  children: BT(TT)
                }, oT)))
              })
            }), (0, kT.jsx)("tbody", {
              children: TT.rows.map(((TT, oT) => (0, kT.jsx)("tr", {
                children: TT.map(((TT, oT) => (0, kT.jsx)("td", {
                  children: BT(TT)
                }, oT)))
              }, oT)))
            })]
          }, oT);
        case "rule":
          return (0, kT.jsx)("hr", {}, oT)
      }
    }

    function DT(TT) {
      let {
        markdown: oT
      } = TT, IT = 0;
      return (0, kT.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, zT.y)(oT).map(((TT, oT) => {
          if ("list" !== TT.kind || !TT.ordered) return IT = 0, ST(TT, oT);
          const zT = IT + 1;
          return IT += TT.items.length, (0, kT.jsx)(iT.Fragment, {
            children: FT(TT.items, !0, zT)
          }, oT)
        }))
      })
    }
  },
  5986: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => AT,
      g: () => gT,
      d: () => wT,
      j: () => cT
    });
    var iT = IT(3210),
      zT = IT(5936),
      kT = IT(4355);
    const WT = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function XT(TT) {
      return (0, kT.f)(TT, WT, (oT => !/^my/i.test(oT[0]) || !/follow $/i.test(TT.slice(0, oT.index)))).length > 0
    }
    const BT = /\byou(?:r|'re|'ll)?\b/i,
      FT = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      ST = 2;

    function DT(TT) {
      return function(TT) {
        const oT = [];
        let IT = !1;
        for (const iT of TT.split("\n")) {
          if (/^\s*(```|~~~)/.test(iT)) {
            IT = !IT;
            continue
          }
          if (IT || /^\s*>/.test(iT)) continue;
          const TT = iT.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          oT.push(...(0, zT.q)(TT))
        }
        return oT
      }(TT).filter((TT => XT(TT) || FT.test(TT) && !BT.test(TT)))
    }
    const LT = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      xT = [{
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

    function cT(TT) {
      const oT = xT.findIndex((oT => oT.name === TT));
      return -1 === oT ? xT.length : oT
    }
    const KT = 2500,
      MT = 12e4;
    class rT extends Error {
      constructor(TT) {
        super(`Studio AI chat ${TT}`), this.reason = TT
      }
    }

    function AT(TT, oT) {
      const IT = new AbortController,
        iT = () => {
          IT.abort()
        },
        zT = setTimeout(iT, TT);
      return null !== oT && void 0 !== oT && oT.aborted && iT(), null === oT || void 0 === oT || oT.addEventListener("abort", iT, {
        once: !0
      }), {
        signal: IT.signal,
        clear: () => {
          clearTimeout(zT), null === oT || void 0 === oT || oT.removeEventListener("abort", iT)
        }
      }
    }

    function gT(TT, oT, IT) {
      return new Promise(((zT, kT) => {
        const WT = new AbortController,
          XT = () => {
            WT.abort(), kT((0, iT.f)(IT))
          };
        if (null !== IT && void 0 !== IT && IT.aborted) return void XT();
        null === IT || void 0 === IT || IT.addEventListener("abort", XT, {
          once: !0
        });
        const BT = xT.map((() => !1));
        let FT = null;
        const ST = xT.map((() => !1)),
          DT = xT.map((() => !1));
        xT.forEach(((iT, LT) => {
          const cT = AT(MT, WT.signal);
          mT(iT, [{
            role: "user",
            content: TT
          }], cT.signal).then((TT => {
            WT.signal.aborted || ("busy" === TT || "failed" === TT ? (ST[LT] = "busy" === TT, DT[LT] = !0) : null !== TT && (null === FT || LT < FT.rank) && (FT = {
              rank: LT,
              answer: {
                text: TT.text,
                model: iT.name
              }
            }, oT(FT.answer)))
          }), (TT => {
            WT.signal.aborted || (DT[LT] = !0, console.warn(`Studio AI: ${iT.name} couldn't be reached`, TT))
          })).finally((() => {
            cT.clear(), BT[LT] = !0, WT.signal.aborted || (() => {
              var TT, oT;
              const iT = null !== (TT = null === (oT = FT) || void 0 === oT ? void 0 : oT.rank) && void 0 !== TT ? TT : xT.length;
              BT.slice(0, iT).includes(!1) || (null === IT || void 0 === IT || IT.removeEventListener("abort", XT), WT.abort(), null !== FT ? zT({
                ...FT.answer,
                isFinal: !DT.slice(0, FT.rank).includes(!0)
              }) : kT(new rT(ST.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((TT => {
            console.error("Studio AI: showing an answer failed", TT)
          }))
        }))
      }))
    }

    function hT(TT) {
      var oT, IT;
      return "length" === (null === TT || void 0 === TT || null === (oT = TT.choices) || void 0 === oT || null === (IT = oT[0]) || void 0 === IT ? void 0 : IT.finish_reason)
    }
    async function wT(TT, oT, IT) {
      const iT = xT.find((oT => oT.name === TT));
      if (void 0 === iT) return "failed";
      const zT = AT(MT, IT);
      try {
        const TT = await mT(iT, oT, zT.signal);
        return null !== TT && "object" === typeof TT ? TT.isCutOff ? (console.warn(`Studio AI: ${iT.name}'s answer was cut off at the token limit`), null) : {
          text: TT.text
        } : TT
      } finally {
        zT.clear()
      }
    }
    async function mT(TT, oT, IT) {
      const iT = await fetch(LT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: TT.name,
          messages: oT,
          max_tokens: KT,
          temperature: TT.temperature,
          reasoning_effort: TT.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: IT
      });
      if (429 === iT.status) return "busy";
      if (!iT.ok) return console.warn(`Studio AI: ${TT.name} answered ${iT.status}`), "failed";
      const zT = await iT.json().catch((() => null)),
        kT = function(TT) {
          var oT, IT, iT;
          const zT = null === TT || void 0 === TT || null === (oT = TT.choices) || void 0 === oT || null === (IT = oT[0]) || void 0 === IT || null === (iT = IT.message) || void 0 === iT ? void 0 : iT.content;
          if ("string" !== typeof zT) return null;
          const kT = zT.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === kT ? null : kT
        }(zT);
      return null !== kT && function(TT) {
        const oT = DT(TT);
        return oT.length >= ST || oT.some((TT => XT(TT)))
      }(kT) ? (console.warn(`Studio AI: ${TT.name} thought out loud instead of answering`), "failed") : null === kT ? null : {
        text: kT,
        isCutOff: hT(zT)
      }
    }
  },
  5936: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => MT,
      D: () => gT,
      F: () => wT,
      G: () => AT,
      K: () => DT,
      N: () => FT,
      R: () => xT,
      c: () => cT,
      e: () => XT,
      g: () => WT,
      j: () => KT,
      m: () => LT,
      q: () => ST,
      s: () => kT,
      t: () => zT,
      w: () => hT,
      y: () => mT
    });
    var iT = IT(4355);
    const zT = 2e3,
      kT = 2e4;

    function WT(TT) {
      return TT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function XT(TT) {
      return TT.replace(/\$/g, "\\$")
    }
    const BT = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function FT(TT, oT) {
      BT.lastIndex = oT;
      const IT = BT.exec(TT);
      return IT.index + IT[0].length
    }

    function ST(TT) {
      return (0, iT.u)(TT, /\s+/g, (0, iT.p)(".!?")).flatMap((TT => TT.split("\n")))
    }

    function DT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT;
      const iT = [...TT.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((TT => TT.index)),
        zT = iT.filter((TT => TT < oT)),
        kT = iT.find((TT => TT >= IT));
      return [0 === zT.length ? 0 : zT.at(-1) + 1, void 0 === kT ? TT.length : kT + 1]
    }

    function LT(TT, oT) {
      const IT = TT.charCodeAt(oT - 1);
      return TT.slice(0, oT > 0 && oT < TT.length && IT >= 55296 && IT <= 56319 ? oT - 1 : oT)
    }

    function xT(TT, oT) {
      return `${oT}${TT.replace(/\\/g,"\\\\").split(oT).join(`\\${oT}`)}${oT}`
    }

    function cT(TT) {
      return TT.charAt(0).toUpperCase() + TT.slice(1)
    }

    function KT(TT) {
      return Math.round(TT).toLocaleString("en-US")
    }

    function MT(TT) {
      return TT.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((TT => "" !== TT))
    }
    const rT = 3;

    function AT(TT, oT) {
      return MT(TT).filter((TT => TT.length >= rT && !/\d/.test(TT))).map((TT => `${TT} ${oT}`))
    }

    function gT(TT) {
      return TT.split(/[\s:_]+/).filter((TT => "" !== TT)).map(WT).join("[`:_\\s]+")
    }

    function hT(TT) {
      return MT(TT.split(".").pop())
    }

    function wT(TT) {
      return TT.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function mT(TT) {
      let oT = null;
      return () => {
        const IT = oT ??= TT();
        return IT.catch((() => {
          oT === IT && (oT = null)
        })), IT
      }
    }
  },
  4355: (TT, oT, IT) => {
    function iT(TT) {
      return {
        notAfter: TT
      }
    }
    IT.d(oT, {
      d: () => BT,
      f: () => FT,
      g: () => XT,
      i: () => iT,
      k: () => zT,
      m: () => kT,
      p: () => WT,
      r: () => ST,
      u: () => DT
    });
    const zT = iT("\\w$."),
      kT = iT("\\w.,");

    function WT(TT) {
      return oT => BT(oT, TT)
    }

    function XT(TT) {
      return oT => !TT.test(oT.input.slice(0, oT.index))
    }

    function BT(TT, oT) {
      return TT.index > 0 && new RegExp(`[${oT}]`).test(TT.input[TT.index - 1])
    }

    function FT(TT, oT, IT) {
      return function(TT) {
        return void 0 !== TT && "function" !== typeof TT
      }(IT) ? function(TT, oT, IT) {
        const iT = oT.flags.replace(/[gy]/g, ""),
          zT = new RegExp(`[^${IT}](?:${oT.source})`, `${iT}g`),
          kT = [],
          WT = IT => {
            const iT = IT.index + IT[0].length;
            return ("" === IT[0] ? LT(TT, oT, iT) : iT) - 1
          },
          XT = new RegExp(`(?:${oT.source})`, `${iT}y`).exec(TT);
        if (XT) {
          if (kT.push(XT), !oT.global) return kT;
          zT.lastIndex = WT(XT)
        }
        for (let BT = zT.exec(TT); BT; BT = zT.exec(TT)) {
          const IT = LT(TT, oT, BT.index) - BT.index;
          if (BT[0] = BT[0].slice(IT), BT.index += IT, kT.push(BT), !oT.global) break;
          zT.lastIndex = WT(BT)
        }
        return kT
      }(TT, oT, IT.notAfter) : function(TT, oT, IT) {
        const iT = new RegExp(oT.source, `${oT.flags.replace(/[gy]/g,"")}g`),
          zT = [];
        for (let kT = iT.exec(TT); kT; kT = iT.exec(TT))
          if (!IT || IT(kT)) {
            if (zT.push(kT), !oT.global) break;
            "" === kT[0] && (iT.lastIndex = LT(TT, oT, iT.lastIndex))
          } else iT.lastIndex = LT(TT, oT, kT.index);
        return zT
      }(TT, oT, IT)
    }

    function ST(TT, oT, IT, iT) {
      let zT = "",
        kT = 0;
      for (const WT of FT(TT, oT, IT)) zT += TT.slice(kT, WT.index) + iT(WT), kT = WT.index + WT[0].length;
      return zT + TT.slice(kT)
    }

    function DT(TT, oT, IT) {
      const iT = [];
      let zT = 0;
      for (const kT of FT(TT, oT, IT)) iT.push(TT.slice(zT, kT.index)), zT = kT.index + kT[0].length;
      return [...iT, TT.slice(zT)]
    }

    function LT(TT, oT, IT) {
      var iT;
      return IT + (oT.unicode && (null !== (iT = TT.codePointAt(IT)) && void 0 !== iT ? iT : 0) > 65535 ? 2 : 1)
    }
  },
  5992: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);