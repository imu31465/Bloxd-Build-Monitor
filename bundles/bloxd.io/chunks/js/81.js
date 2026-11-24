export const id = 81;
export const ids = [81];
export const modules = {
  4842: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => BT,
      E: () => pT,
      I: () => LT,
      e: () => WT,
      h: () => gT,
      l: () => cT,
      n: () => ZT,
      p: () => nT,
      t: () => zT,
      w: () => MT
    });
    const WT = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function zT(TT) {
      try {
        return decodeURIComponent(TT.slice(1))
      } catch {
        return TT.slice(1)
      }
    }

    function MT(TT) {
      return TT.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const gT = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${WT.source}`, "g");

    function nT(TT, UT) {
      return 2 === TT.length ? UT.replace(/^ (.*) $/, "$1") : UT
    }

    function HT(TT) {
      return "" === TT.trim()
    }

    function kT(TT) {
      const UT = [];
      for (const mT of TT.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) UT.length > 0 && UT[UT.length - 1].endsWith("\\") ? UT[UT.length - 1] += `|${mT}` : UT.push(mT);
      return UT.map((TT => TT.trim().replaceAll("\\|", "|")))
    }
    const jT = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function lT(TT) {
      const UT = [],
        mT = [{
          indent: -1,
          items: UT
        }];
      let WT = null;
      for (const zT of TT) {
        const TT = zT.match(jT);
        if (!TT) {
          WT && (WT.text += ` ${zT.trim()}`);
          continue
        }
        const UT = TT[1].replace(/\t/g, "  ").length;
        for (; UT <= mT[mT.length - 1].indent;) mT.pop();
        WT = {
          text: TT[3].trim(),
          children: []
        }, mT[mT.length - 1].items.push(WT), mT.push({
          indent: UT,
          items: WT.children
        })
      }
      return UT
    }

    function LT(TT) {
      const UT = TT.replace(/\r\n/g, "\n").split("\n"),
        mT = [];
      let WT = 0;
      for (; WT < UT.length;) {
        const TT = UT[WT];
        if (HT(TT)) {
          WT++;
          continue
        }
        const zT = TT.match(/^\s*```\s*(\w*)\s*$/);
        if (zT) {
          const TT = [];
          for (WT++; WT < UT.length && !/^\s*```\s*$/.test(UT[WT]);) TT.push(UT[WT]), WT++;
          WT++, mT.push({
            kind: "code",
            lang: zT[1] || "text",
            code: TT.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const gT = TT.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (gT) {
          const TT = gT[2].trim();
          mT.push({
            kind: "heading",
            level: gT[1].length,
            text: TT,
            anchor: MT(TT)
          }), WT++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(TT)) {
          mT.push({
            kind: "rule"
          }), WT++;
          continue
        }
        if (TT.trim().startsWith("|") && WT + 1 < UT.length && /^\s*\|[\s:|-]+\|\s*$/.test(UT[WT + 1])) {
          const zT = kT(TT),
            MT = [];
          for (WT += 2; WT < UT.length && UT[WT].trim().startsWith("|");) MT.push(kT(UT[WT])), WT++;
          mT.push({
            kind: "table",
            header: zT,
            rows: MT
          });
          continue
        }
        if (TT.startsWith(">")) {
          const TT = [];
          for (; WT < UT.length && UT[WT].startsWith(">");) TT.push(UT[WT].replace(/^>\s?/, "")), WT++;
          mT.push({
            kind: "quote",
            blocks: LT(TT.join("\n"))
          });
          continue
        }
        if (jT.test(TT)) {
          const zT = [],
            MT = /^\s*\d+\./.test(TT);
          for (; WT < UT.length && !HT(UT[WT]) && (jT.test(UT[WT]) || /^\s+\S/.test(UT[WT]));) zT.push(UT[WT]), WT++;
          mT.push({
            kind: "list",
            ordered: MT,
            items: lT(zT)
          });
          continue
        }
        const nT = [];
        for (; WT < UT.length && !HT(UT[WT]) && !/^\s*```/.test(UT[WT]) && !/^#{1,6}\s/.test(UT[WT]) && !UT[WT].startsWith(">") && !jT.test(UT[WT]) && (!UT[WT].trim().startsWith("|") || 0 !== nT.length);) nT.push(UT[WT].trim()), WT++;
        0 === nT.length && (nT.push(UT[WT].trim()), WT++), mT.push({
          kind: "paragraph",
          text: nT.join(" ")
        })
      }
      return mT
    }

    function pT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const mT = LT(TT);
      let WT = "";
      const zT = [],
        MT = [],
        gT = new Map;
      for (const kT of mT) {
        if ("heading" === kT.kind) {
          var nT;
          const TT = (null !== (nT = gT.get(kT.anchor)) && void 0 !== nT ? nT : 0) + 1;
          gT.set(kT.anchor, TT), TT > 1 && (kT.anchor = `${kT.anchor}-${TT}`)
        }
        if ("heading" === kT.kind && 1 === kT.level && !WT) {
          WT = kT.text;
          continue
        }
        if ("heading" === kT.kind && kT.level <= UT) {
          MT.push({
            heading: kT,
            blocks: []
          });
          continue
        }
        const TT = MT.at(-1);
        TT ? TT.blocks.push(kT) : zT.push(kT)
      }
      const HT = TT => {
        for (;
          "rule" === (null === (UT = TT.at(-1)) || void 0 === UT ? void 0 : UT.kind);) {
          var UT;
          TT.pop()
        }
      };
      HT(zT);
      for (const kT of MT) HT(kT.blocks);
      return {
        title: WT,
        intro: zT,
        sections: MT
      }
    }

    function BT(TT) {
      return [{
        heading: null,
        blocks: TT.intro
      }, ...TT.sections.map((TT => ({
        heading: TT.heading,
        blocks: TT.blocks
      })))]
    }

    function ZT(TT) {
      return TT.flatMap((TT => "code" === TT.kind ? [TT] : "quote" === TT.kind ? ZT(TT.blocks) : []))
    }

    function cT(TT) {
      switch (TT.kind) {
        case "heading":
        case "paragraph":
          return TT.text;
        case "code":
          return TT.code;
        case "table":
          return [TT.header, ...TT.rows].map((TT => TT.join(" "))).join(" ");
        case "list": {
          const UT = TT => TT.map((TT => `${TT.text} ${UT(TT.children)}`)).join(" ");
          return UT(TT.items)
        }
        case "quote":
          return TT.blocks.map(cT).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6562: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT,
      d: () => gT,
      h: () => nT
    });
    mT(6559);
    var WT = mT(63),
      zT = mT(4842),
      MT = mT(1188);
    const gT = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function nT(TT, UT) {
      return TT === UT ? TT : `${TT} (${UT})`
    }

    function HT(TT) {
      const UT = [];
      let mT = 0;
      for (const WT of TT.matchAll(gT)) {
        WT.index > mT && UT.push(TT.slice(mT, WT.index));
        const [, zT, gT, HT, kT, jT, lT] = WT;
        void 0 !== zT ? UT.push(nT(zT, gT)) : void 0 !== HT || void 0 !== kT ? UT.push((0, MT.jsx)("strong", {
          children: null !== HT && void 0 !== HT ? HT : kT
        }, WT.index)) : void 0 !== jT ? UT.push((0, MT.jsx)("em", {
          children: jT
        }, WT.index)) : UT.push((0, MT.jsx)("code", {
          children: lT
        }, WT.index)), mT = WT.index + WT[0].length
      }
      return mT < TT.length && UT.push(TT.slice(mT)), UT
    }

    function kT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const WT = TT.map(((TT, UT) => (0, MT.jsxs)("li", {
        children: [HT(TT.text), TT.children.length > 0 && kT(TT.children, !1)]
      }, UT)));
      return UT ? (0, MT.jsx)("ol", {
        start: mT,
        children: WT
      }) : (0, MT.jsx)("ul", {
        children: WT
      })
    }

    function jT(TT, UT) {
      switch (TT.kind) {
        case "heading":
          return TT.level <= 2 ? (0, MT.jsx)("h3", {
            children: HT(TT.text)
          }, UT) : (0, MT.jsx)("h4", {
            children: HT(TT.text)
          }, UT);
        case "paragraph":
          return (0, MT.jsx)("p", {
            children: HT(TT.text)
          }, UT);
        case "list":
          return (0, MT.jsx)(WT.Fragment, {
            children: kT(TT.items, TT.ordered)
          }, UT);
        case "quote":
          return (0, MT.jsx)("blockquote", {
            children: TT.blocks.map(((TT, UT) => jT(TT, UT)))
          }, UT);
        case "code":
          return (0, MT.jsx)("pre", {
            children: (0, MT.jsx)("code", {
              children: TT.code
            })
          }, UT);
        case "table":
          return (0, MT.jsxs)("table", {
            children: [(0, MT.jsx)("thead", {
              children: (0, MT.jsx)("tr", {
                children: TT.header.map(((TT, UT) => (0, MT.jsx)("th", {
                  children: HT(TT)
                }, UT)))
              })
            }), (0, MT.jsx)("tbody", {
              children: TT.rows.map(((TT, UT) => (0, MT.jsx)("tr", {
                children: TT.map(((TT, UT) => (0, MT.jsx)("td", {
                  children: HT(TT)
                }, UT)))
              }, UT)))
            })]
          }, UT);
        case "rule":
          return (0, MT.jsx)("hr", {}, UT)
      }
    }

    function lT(TT) {
      let {
        markdown: UT
      } = TT, mT = 0;
      return (0, MT.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, zT.I)(UT).map(((TT, UT) => {
          if ("list" !== TT.kind || !TT.ordered) return mT = 0, jT(TT, UT);
          const zT = mT + 1;
          return mT += TT.items.length, (0, MT.jsx)(WT.Fragment, {
            children: kT(TT.items, !0, zT)
          }, UT)
        }))
      })
    }
  },
  6552: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => fT,
      g: () => qT,
      d: () => bT,
      j: () => BT
    });
    var WT = mT(1308),
      zT = mT(6515),
      MT = mT(4972);
    const gT = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function nT(TT) {
      return (0, MT.e)(TT, gT, (UT => !/^my/i.test(UT[0]) || !/follow $/i.test(TT.slice(0, UT.index)))).length > 0
    }
    const HT = /\byou(?:r|'re|'ll)?\b/i,
      kT = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      jT = 2;

    function lT(TT) {
      return function(TT) {
        const UT = [];
        let mT = !1;
        for (const WT of TT.split("\n")) {
          if (/^\s*(```|~~~)/.test(WT)) {
            mT = !mT;
            continue
          }
          if (mT || /^\s*>/.test(WT)) continue;
          const TT = WT.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          UT.push(...(0, zT.q)(TT))
        }
        return UT
      }(TT).filter((TT => nT(TT) || kT.test(TT) && !HT.test(TT)))
    }
    const LT = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      pT = [{
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

    function BT(TT) {
      const UT = pT.findIndex((UT => UT.name === TT));
      return -1 === UT ? pT.length : UT
    }
    const ZT = 2500,
      cT = 12e4;
    class vT extends Error {
      constructor(TT) {
        super(`Studio AI chat ${TT}`), this.reason = TT
      }
    }

    function fT(TT, UT) {
      const mT = new AbortController,
        WT = () => {
          mT.abort()
        },
        zT = setTimeout(WT, TT);
      return null !== UT && void 0 !== UT && UT.aborted && WT(), null === UT || void 0 === UT || UT.addEventListener("abort", WT, {
        once: !0
      }), {
        signal: mT.signal,
        clear: () => {
          clearTimeout(zT), null === UT || void 0 === UT || UT.removeEventListener("abort", WT)
        }
      }
    }

    function qT(TT, UT, mT) {
      return new Promise(((zT, MT) => {
        const gT = new AbortController,
          nT = () => {
            gT.abort(), MT((0, WT.i)(mT))
          };
        if (null !== mT && void 0 !== mT && mT.aborted) return void nT();
        null === mT || void 0 === mT || mT.addEventListener("abort", nT, {
          once: !0
        });
        const HT = pT.map((() => !1));
        let kT = null;
        const jT = pT.map((() => !1)),
          lT = pT.map((() => !1));
        pT.forEach(((WT, LT) => {
          const BT = fT(cT, gT.signal);
          OT(WT, [{
            role: "user",
            content: TT
          }], BT.signal).then((TT => {
            gT.signal.aborted || ("busy" === TT || "failed" === TT ? (jT[LT] = "busy" === TT, lT[LT] = !0) : null !== TT && (null === kT || LT < kT.rank) && (kT = {
              rank: LT,
              answer: {
                text: TT.text,
                model: WT.name
              }
            }, UT(kT.answer)))
          }), (TT => {
            gT.signal.aborted || (lT[LT] = !0, console.warn(`Studio AI: ${WT.name} couldn't be reached`, TT))
          })).finally((() => {
            BT.clear(), HT[LT] = !0, gT.signal.aborted || (() => {
              var TT, UT;
              const WT = null !== (TT = null === (UT = kT) || void 0 === UT ? void 0 : UT.rank) && void 0 !== TT ? TT : pT.length;
              HT.slice(0, WT).includes(!1) || (null === mT || void 0 === mT || mT.removeEventListener("abort", nT), gT.abort(), null !== kT ? zT({
                ...kT.answer,
                isFinal: !lT.slice(0, kT.rank).includes(!0)
              }) : MT(new vT(jT.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((TT => {
            console.error("Studio AI: showing an answer failed", TT)
          }))
        }))
      }))
    }

    function iT(TT) {
      var UT, mT;
      return "length" === (null === TT || void 0 === TT || null === (UT = TT.choices) || void 0 === UT || null === (mT = UT[0]) || void 0 === mT ? void 0 : mT.finish_reason)
    }
    async function bT(TT, UT, mT) {
      const WT = pT.find((UT => UT.name === TT));
      if (void 0 === WT) return "failed";
      const zT = fT(cT, mT);
      try {
        const TT = await OT(WT, UT, zT.signal);
        return null !== TT && "object" === typeof TT ? TT.isCutOff ? (console.warn(`Studio AI: ${WT.name}'s answer was cut off at the token limit`), null) : {
          text: TT.text
        } : TT
      } finally {
        zT.clear()
      }
    }
    async function OT(TT, UT, mT) {
      const WT = await fetch(LT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: TT.name,
          messages: UT,
          max_tokens: ZT,
          temperature: TT.temperature,
          reasoning_effort: TT.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: mT
      });
      if (429 === WT.status) return "busy";
      if (!WT.ok) return console.warn(`Studio AI: ${TT.name} answered ${WT.status}`), "failed";
      const zT = await WT.json().catch((() => null)),
        MT = function(TT) {
          var UT, mT, WT;
          const zT = null === TT || void 0 === TT || null === (UT = TT.choices) || void 0 === UT || null === (mT = UT[0]) || void 0 === mT || null === (WT = mT.message) || void 0 === WT ? void 0 : WT.content;
          if ("string" !== typeof zT) return null;
          const MT = zT.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === MT ? null : MT
        }(zT);
      return null !== MT && function(TT) {
        const UT = lT(TT);
        return UT.length >= jT || UT.some((TT => nT(TT)))
      }(MT) ? (console.warn(`Studio AI: ${TT.name} thought out loud instead of answering`), "failed") : null === MT ? null : {
        text: MT,
        isCutOff: iT(zT)
      }
    }
  },
  6515: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => qT,
      B: () => bT,
      E: () => fT,
      I: () => lT,
      M: () => kT,
      N: () => pT,
      c: () => BT,
      f: () => nT,
      j: () => gT,
      n: () => ZT,
      p: () => LT,
      q: () => jT,
      r: () => MT,
      s: () => zT,
      t: () => iT,
      w: () => OT,
      y: () => cT
    });
    var WT = mT(4972);
    const zT = 2e3,
      MT = 2e4;

    function gT(TT) {
      return TT.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function nT(TT) {
      return TT.replace(/\$/g, "\\$")
    }
    const HT = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function kT(TT, UT) {
      HT.lastIndex = UT;
      const mT = HT.exec(TT);
      return mT.index + mT[0].length
    }

    function jT(TT) {
      return (0, WT.v)(TT, /\s+/g, (0, WT.p)(".!?")).flatMap((TT => TT.split("\n")))
    }

    function lT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT;
      const WT = [...TT.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((TT => TT.index)),
        zT = WT.filter((TT => TT < UT)),
        MT = WT.find((TT => TT >= mT));
      return [0 === zT.length ? 0 : zT.at(-1) + 1, void 0 === MT ? TT.length : MT + 1]
    }

    function LT(TT, UT) {
      const mT = TT.charCodeAt(UT - 1);
      return TT.slice(0, UT > 0 && UT < TT.length && mT >= 55296 && mT <= 56319 ? UT - 1 : UT)
    }

    function pT(TT, UT) {
      return `${UT}${TT.replace(/\\/g,"\\\\").split(UT).join(`\\${UT}`)}${UT}`
    }

    function BT(TT) {
      return TT.charAt(0).toUpperCase() + TT.slice(1)
    }

    function ZT(TT) {
      return Math.round(TT).toLocaleString("en-US")
    }

    function cT(TT) {
      return TT.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((TT => "" !== TT))
    }
    const vT = 3;

    function fT(TT, UT) {
      return cT(TT).filter((TT => TT.length >= vT && !/\d/.test(TT))).map((TT => `${TT} ${UT}`))
    }

    function qT(TT) {
      return TT.split(/[\s:_]+/).filter((TT => "" !== TT)).map(gT).join("[`:_\\s]+")
    }

    function iT(TT) {
      return cT(TT.split(".").pop())
    }

    function bT(TT) {
      return TT.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function OT(TT) {
      let UT = null;
      return () => {
        const mT = UT ??= TT();
        return mT.catch((() => {
          UT === mT && (UT = null)
        })), mT
      }
    }
  },
  4972: (TT, UT, mT) => {
    function WT(TT) {
      return {
        notAfter: TT
      }
    }
    mT.d(UT, {
      d: () => HT,
      e: () => kT,
      f: () => nT,
      j: () => WT,
      n: () => zT,
      o: () => MT,
      p: () => gT,
      s: () => jT,
      v: () => lT
    });
    const zT = WT("\\w$."),
      MT = WT("\\w.,");

    function gT(TT) {
      return UT => HT(UT, TT)
    }

    function nT(TT) {
      return UT => !TT.test(UT.input.slice(0, UT.index))
    }

    function HT(TT, UT) {
      return TT.index > 0 && new RegExp(`[${UT}]`).test(TT.input[TT.index - 1])
    }

    function kT(TT, UT, mT) {
      return function(TT) {
        return void 0 !== TT && "function" !== typeof TT
      }(mT) ? function(TT, UT, mT) {
        const WT = UT.flags.replace(/[gy]/g, ""),
          zT = new RegExp(`[^${mT}](?:${UT.source})`, `${WT}g`),
          MT = [],
          gT = mT => {
            const WT = mT.index + mT[0].length;
            return ("" === mT[0] ? LT(TT, UT, WT) : WT) - 1
          },
          nT = new RegExp(`(?:${UT.source})`, `${WT}y`).exec(TT);
        if (nT) {
          if (MT.push(nT), !UT.global) return MT;
          zT.lastIndex = gT(nT)
        }
        for (let HT = zT.exec(TT); HT; HT = zT.exec(TT)) {
          const mT = LT(TT, UT, HT.index) - HT.index;
          if (HT[0] = HT[0].slice(mT), HT.index += mT, MT.push(HT), !UT.global) break;
          zT.lastIndex = gT(HT)
        }
        return MT
      }(TT, UT, mT.notAfter) : function(TT, UT, mT) {
        const WT = new RegExp(UT.source, `${UT.flags.replace(/[gy]/g,"")}g`),
          zT = [];
        for (let MT = WT.exec(TT); MT; MT = WT.exec(TT))
          if (!mT || mT(MT)) {
            if (zT.push(MT), !UT.global) break;
            "" === MT[0] && (WT.lastIndex = LT(TT, UT, WT.lastIndex))
          } else WT.lastIndex = LT(TT, UT, MT.index);
        return zT
      }(TT, UT, mT)
    }

    function jT(TT, UT, mT, WT) {
      let zT = "",
        MT = 0;
      for (const gT of kT(TT, UT, mT)) zT += TT.slice(MT, gT.index) + WT(gT), MT = gT.index + gT[0].length;
      return zT + TT.slice(MT)
    }

    function lT(TT, UT, mT) {
      const WT = [];
      let zT = 0;
      for (const MT of kT(TT, UT, mT)) WT.push(TT.slice(zT, MT.index)), zT = MT.index + MT[0].length;
      return [...WT, TT.slice(zT)]
    }

    function LT(TT, UT, mT) {
      var WT;
      return mT + (UT.unicode && (null !== (WT = TT.codePointAt(mT)) && void 0 !== WT ? WT : 0) > 65535 ? 2 : 1)
    }
  },
  6559: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);