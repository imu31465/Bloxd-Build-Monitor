export const id = 96;
export const ids = [96];
export const modules = {
  5479: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => xW,
      d: () => mW,
      e: () => PW,
      i: () => jW,
      j: () => bW,
      l: () => LW,
      o: () => EW,
      s: () => NW,
      v: () => AW,
      y: () => lW
    });
    const mW = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function EW(WW) {
      try {
        return decodeURIComponent(WW.slice(1))
      } catch {
        return WW.slice(1)
      }
    }

    function NW(WW) {
      return WW.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const PW = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${mW.source}`, "g");

    function LW(WW, iW) {
      return 2 === WW.length ? iW.replace(/^ (.*) $/, "$1") : iW
    }

    function cW(WW) {
      return "" === WW.trim()
    }

    function wW(WW) {
      const iW = [];
      for (const OW of WW.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) iW.length > 0 && iW[iW.length - 1].endsWith("\\") ? iW[iW.length - 1] += `|${OW}` : iW.push(OW);
      return iW.map((WW => WW.trim().replaceAll("\\|", "|")))
    }
    const tW = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function ZW(WW) {
      const iW = [],
        OW = [{
          indent: -1,
          items: iW
        }];
      let mW = null;
      for (const EW of WW) {
        const WW = EW.match(tW);
        if (!WW) {
          mW && (mW.text += ` ${EW.trim()}`);
          continue
        }
        const iW = WW[1].replace(/\t/g, "  ").length;
        for (; iW <= OW[OW.length - 1].indent;) OW.pop();
        mW = {
          text: WW[3].trim(),
          children: []
        }, OW[OW.length - 1].items.push(mW), OW.push({
          indent: iW,
          items: mW.children
        })
      }
      return iW
    }

    function xW(WW) {
      const iW = WW.replace(/\r\n/g, "\n").split("\n"),
        OW = [];
      let mW = 0;
      for (; mW < iW.length;) {
        const WW = iW[mW];
        if (cW(WW)) {
          mW++;
          continue
        }
        const EW = WW.match(/^\s*```\s*(\w*)\s*$/);
        if (EW) {
          const WW = [];
          for (mW++; mW < iW.length && !/^\s*```\s*$/.test(iW[mW]);) WW.push(iW[mW]), mW++;
          mW++, OW.push({
            kind: "code",
            lang: EW[1] || "text",
            code: WW.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const PW = WW.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (PW) {
          const WW = PW[2].trim();
          OW.push({
            kind: "heading",
            level: PW[1].length,
            text: WW,
            anchor: NW(WW)
          }), mW++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(WW)) {
          OW.push({
            kind: "rule"
          }), mW++;
          continue
        }
        if (WW.trim().startsWith("|") && mW + 1 < iW.length && /^\s*\|[\s:|-]+\|\s*$/.test(iW[mW + 1])) {
          const EW = wW(WW),
            NW = [];
          for (mW += 2; mW < iW.length && iW[mW].trim().startsWith("|");) NW.push(wW(iW[mW])), mW++;
          OW.push({
            kind: "table",
            header: EW,
            rows: NW
          });
          continue
        }
        if (WW.startsWith(">")) {
          const WW = [];
          for (; mW < iW.length && iW[mW].startsWith(">");) WW.push(iW[mW].replace(/^>\s?/, "")), mW++;
          OW.push({
            kind: "quote",
            blocks: xW(WW.join("\n"))
          });
          continue
        }
        if (tW.test(WW)) {
          const EW = [],
            NW = /^\s*\d+\./.test(WW);
          for (; mW < iW.length && !cW(iW[mW]) && (tW.test(iW[mW]) || /^\s+\S/.test(iW[mW]));) EW.push(iW[mW]), mW++;
          OW.push({
            kind: "list",
            ordered: NW,
            items: ZW(EW)
          });
          continue
        }
        const LW = [];
        for (; mW < iW.length && !cW(iW[mW]) && !/^\s*```/.test(iW[mW]) && !/^#{1,6}\s/.test(iW[mW]) && !iW[mW].startsWith(">") && !tW.test(iW[mW]) && (!iW[mW].trim().startsWith("|") || 0 !== LW.length);) LW.push(iW[mW].trim()), mW++;
        0 === LW.length && (LW.push(iW[mW].trim()), mW++), OW.push({
          kind: "paragraph",
          text: LW.join(" ")
        })
      }
      return OW
    }

    function lW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const OW = xW(WW);
      let mW = "";
      const EW = [],
        NW = [],
        PW = new Map;
      for (const wW of OW) {
        if ("heading" === wW.kind) {
          var LW;
          const WW = (null !== (LW = PW.get(wW.anchor)) && void 0 !== LW ? LW : 0) + 1;
          PW.set(wW.anchor, WW), WW > 1 && (wW.anchor = `${wW.anchor}-${WW}`)
        }
        if ("heading" === wW.kind && 1 === wW.level && !mW) {
          mW = wW.text;
          continue
        }
        if ("heading" === wW.kind && wW.level <= iW) {
          NW.push({
            heading: wW,
            blocks: []
          });
          continue
        }
        const WW = NW.at(-1);
        WW ? WW.blocks.push(wW) : EW.push(wW)
      }
      const cW = WW => {
        for (;
          "rule" === (null === (iW = WW.at(-1)) || void 0 === iW ? void 0 : iW.kind);) {
          var iW;
          WW.pop()
        }
      };
      cW(EW);
      for (const wW of NW) cW(wW.blocks);
      return {
        title: mW,
        intro: EW,
        sections: NW
      }
    }

    function AW(WW) {
      return [{
        heading: null,
        blocks: WW.intro
      }, ...WW.sections.map((WW => ({
        heading: WW.heading,
        blocks: WW.blocks
      })))]
    }

    function bW(WW) {
      return WW.flatMap((WW => "code" === WW.kind ? [WW] : "quote" === WW.kind ? bW(WW.blocks) : []))
    }

    function jW(WW) {
      switch (WW.kind) {
        case "heading":
        case "paragraph":
          return WW.text;
        case "code":
          return WW.code;
        case "table":
          return [WW.header, ...WW.rows].map((WW => WW.join(" "))).join(" ");
        case "list": {
          const iW = WW => WW.map((WW => `${WW.text} ${iW(WW.children)}`)).join(" ");
          return iW(WW.items)
        }
        case "quote":
          return WW.blocks.map(jW).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7473: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW,
      f: () => PW,
      i: () => LW
    });
    OW(7468);
    var mW = OW(62),
      EW = OW(5479),
      NW = OW(1283);
    const PW = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function LW(WW, iW) {
      return WW === iW ? WW : `${WW} (${iW})`
    }

    function cW(WW) {
      const iW = [];
      let OW = 0;
      for (const mW of WW.matchAll(PW)) {
        mW.index > OW && iW.push(WW.slice(OW, mW.index));
        const [, EW, PW, cW, wW, tW, ZW] = mW;
        void 0 !== EW ? iW.push(LW(EW, PW)) : void 0 !== cW || void 0 !== wW ? iW.push((0, NW.jsx)("strong", {
          children: null !== cW && void 0 !== cW ? cW : wW
        }, mW.index)) : void 0 !== tW ? iW.push((0, NW.jsx)("em", {
          children: tW
        }, mW.index)) : iW.push((0, NW.jsx)("code", {
          children: ZW
        }, mW.index)), OW = mW.index + mW[0].length
      }
      return OW < WW.length && iW.push(WW.slice(OW)), iW
    }

    function wW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const mW = WW.map(((WW, iW) => (0, NW.jsxs)("li", {
        children: [cW(WW.text), WW.children.length > 0 && wW(WW.children, !1)]
      }, iW)));
      return iW ? (0, NW.jsx)("ol", {
        start: OW,
        children: mW
      }) : (0, NW.jsx)("ul", {
        children: mW
      })
    }

    function tW(WW, iW) {
      switch (WW.kind) {
        case "heading":
          return WW.level <= 2 ? (0, NW.jsx)("h3", {
            children: cW(WW.text)
          }, iW) : (0, NW.jsx)("h4", {
            children: cW(WW.text)
          }, iW);
        case "paragraph":
          return (0, NW.jsx)("p", {
            children: cW(WW.text)
          }, iW);
        case "list":
          return (0, NW.jsx)(mW.Fragment, {
            children: wW(WW.items, WW.ordered)
          }, iW);
        case "quote":
          return (0, NW.jsx)("blockquote", {
            children: WW.blocks.map(((WW, iW) => tW(WW, iW)))
          }, iW);
        case "code":
          return (0, NW.jsx)("pre", {
            children: (0, NW.jsx)("code", {
              children: WW.code
            })
          }, iW);
        case "table":
          return (0, NW.jsxs)("table", {
            children: [(0, NW.jsx)("thead", {
              children: (0, NW.jsx)("tr", {
                children: WW.header.map(((WW, iW) => (0, NW.jsx)("th", {
                  children: cW(WW)
                }, iW)))
              })
            }), (0, NW.jsx)("tbody", {
              children: WW.rows.map(((WW, iW) => (0, NW.jsx)("tr", {
                children: WW.map(((WW, iW) => (0, NW.jsx)("td", {
                  children: cW(WW)
                }, iW)))
              }, iW)))
            })]
          }, iW);
        case "rule":
          return (0, NW.jsx)("hr", {}, iW)
      }
    }

    function ZW(WW) {
      let {
        markdown: iW
      } = WW, OW = 0;
      return (0, NW.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, EW.B)(iW).map(((WW, iW) => {
          if ("list" !== WW.kind || !WW.ordered) return OW = 0, tW(WW, iW);
          const EW = OW + 1;
          return OW += WW.items.length, (0, NW.jsx)(mW.Fragment, {
            children: wW(WW.items, !0, EW)
          }, iW)
        }))
      })
    }
  },
  7463: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => kW,
      k: () => sW,
      g: () => KW,
      n: () => AW
    });
    var mW = OW(1194),
      EW = OW(7429),
      NW = OW(5622);
    const PW = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function LW(WW) {
      return (0, NW.e)(WW, PW, (iW => !/^my/i.test(iW[0]) || !/follow $/i.test(WW.slice(0, iW.index)))).length > 0
    }
    const cW = /\byou(?:r|'re|'ll)?\b/i,
      wW = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      tW = 2;

    function ZW(WW) {
      return function(WW) {
        const iW = [];
        let OW = !1;
        for (const mW of WW.split("\n")) {
          if (/^\s*(```|~~~)/.test(mW)) {
            OW = !OW;
            continue
          }
          if (OW || /^\s*>/.test(mW)) continue;
          const WW = mW.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          iW.push(...(0, EW.s)(WW))
        }
        return iW
      }(WW).filter((WW => LW(WW) || wW.test(WW) && !cW.test(WW)))
    }
    const xW = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      lW = [{
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

    function AW(WW) {
      const iW = lW.findIndex((iW => iW.name === WW));
      return -1 === iW ? lW.length : iW
    }
    const bW = 2500,
      jW = 12e4;
    class UW extends Error {
      constructor(WW) {
        super(`Studio AI chat ${WW}`), this.reason = WW
      }
    }

    function kW(WW, iW) {
      const OW = new AbortController,
        mW = () => {
          OW.abort()
        },
        EW = setTimeout(mW, WW);
      return null !== iW && void 0 !== iW && iW.aborted && mW(), null === iW || void 0 === iW || iW.addEventListener("abort", mW, {
        once: !0
      }), {
        signal: OW.signal,
        clear: () => {
          clearTimeout(EW), null === iW || void 0 === iW || iW.removeEventListener("abort", mW)
        }
      }
    }

    function sW(WW, iW, OW) {
      return new Promise(((EW, NW) => {
        const PW = new AbortController,
          LW = () => {
            PW.abort(), NW((0, mW.f)(OW))
          };
        if (null !== OW && void 0 !== OW && OW.aborted) return void LW();
        null === OW || void 0 === OW || OW.addEventListener("abort", LW, {
          once: !0
        });
        const cW = lW.map((() => !1));
        let wW = null;
        const tW = lW.map((() => !1)),
          ZW = lW.map((() => !1));
        lW.forEach(((mW, xW) => {
          const AW = kW(jW, PW.signal);
          SW(mW, [{
            role: "user",
            content: WW
          }], AW.signal).then((WW => {
            PW.signal.aborted || ("busy" === WW || "failed" === WW ? (tW[xW] = "busy" === WW, ZW[xW] = !0) : null !== WW && (null === wW || xW < wW.rank) && (wW = {
              rank: xW,
              answer: {
                text: WW.text,
                model: mW.name
              }
            }, iW(wW.answer)))
          }), (WW => {
            PW.signal.aborted || (ZW[xW] = !0, console.warn(`Studio AI: ${mW.name} couldn't be reached`, WW))
          })).finally((() => {
            AW.clear(), cW[xW] = !0, PW.signal.aborted || (() => {
              var WW, iW;
              const mW = null !== (WW = null === (iW = wW) || void 0 === iW ? void 0 : iW.rank) && void 0 !== WW ? WW : lW.length;
              cW.slice(0, mW).includes(!1) || (null === OW || void 0 === OW || OW.removeEventListener("abort", LW), PW.abort(), null !== wW ? EW({
                ...wW.answer,
                isFinal: !ZW.slice(0, wW.rank).includes(!0)
              }) : NW(new UW(tW.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((WW => {
            console.error("Studio AI: showing an answer failed", WW)
          }))
        }))
      }))
    }

    function MW(WW) {
      var iW, OW;
      return "length" === (null === WW || void 0 === WW || null === (iW = WW.choices) || void 0 === iW || null === (OW = iW[0]) || void 0 === OW ? void 0 : OW.finish_reason)
    }
    async function KW(WW, iW, OW) {
      const mW = lW.find((iW => iW.name === WW));
      if (void 0 === mW) return "failed";
      const EW = kW(jW, OW);
      try {
        const WW = await SW(mW, iW, EW.signal);
        return null !== WW && "object" === typeof WW ? WW.isCutOff ? (console.warn(`Studio AI: ${mW.name}'s answer was cut off at the token limit`), null) : {
          text: WW.text
        } : WW
      } finally {
        EW.clear()
      }
    }
    async function SW(WW, iW, OW) {
      const mW = await fetch(xW, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: WW.name,
          messages: iW,
          max_tokens: bW,
          temperature: WW.temperature,
          reasoning_effort: WW.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: OW
      });
      if (429 === mW.status) return "busy";
      if (!mW.ok) return console.warn(`Studio AI: ${WW.name} answered ${mW.status}`), "failed";
      const EW = await mW.json().catch((() => null)),
        NW = function(WW) {
          var iW, OW, mW;
          const EW = null === WW || void 0 === WW || null === (iW = WW.choices) || void 0 === iW || null === (OW = iW[0]) || void 0 === OW || null === (mW = OW.message) || void 0 === mW ? void 0 : mW.content;
          if ("string" !== typeof EW) return null;
          const NW = EW.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === NW ? null : NW
        }(EW);
      return null !== NW && function(WW) {
        const iW = ZW(WW);
        return iW.length >= tW || iW.some((WW => LW(WW)))
      }(NW) ? (console.warn(`Studio AI: ${WW.name} thought out loud instead of answering`), "failed") : null === NW ? null : {
        text: NW,
        isCutOff: MW(EW)
      }
    }
  },
  7429: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => MW,
      E: () => SW,
      G: () => jW,
      J: () => sW,
      L: () => KW,
      N: () => kW,
      R: () => ZW,
      T: () => wW,
      W: () => lW,
      e: () => AW,
      f: () => LW,
      i: () => PW,
      k: () => bW,
      o: () => xW,
      s: () => tW,
      v: () => NW,
      z: () => EW
    });
    var mW = OW(5622);
    const EW = 2e3,
      NW = 2e4;

    function PW(WW) {
      return WW.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function LW(WW) {
      return WW.replace(/\$/g, "\\$")
    }
    const cW = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function wW(WW, iW) {
      cW.lastIndex = iW;
      const OW = cW.exec(WW);
      return OW.index + OW[0].length
    }

    function tW(WW) {
      return (0, mW.r)(WW, /\s+/g, (0, mW.o)(".!?")).flatMap((WW => WW.split("\n")))
    }

    function ZW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW;
      const mW = [...WW.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((WW => WW.index)),
        EW = mW.filter((WW => WW < iW)),
        NW = mW.find((WW => WW >= OW));
      return [0 === EW.length ? 0 : EW.at(-1) + 1, void 0 === NW ? WW.length : NW + 1]
    }

    function xW(WW, iW) {
      const OW = WW.charCodeAt(iW - 1);
      return WW.slice(0, iW > 0 && iW < WW.length && OW >= 55296 && OW <= 56319 ? iW - 1 : iW)
    }

    function lW(WW, iW) {
      return `${iW}${WW.replace(/\\/g,"\\\\").split(iW).join(`\\${iW}`)}${iW}`
    }

    function AW(WW) {
      return WW.charAt(0).toUpperCase() + WW.slice(1)
    }

    function bW(WW) {
      return Math.round(WW).toLocaleString("en-US")
    }

    function jW(WW) {
      return WW.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((WW => "" !== WW))
    }
    const UW = 3;

    function kW(WW, iW) {
      return jW(WW).filter((WW => WW.length >= UW && !/\d/.test(WW))).map((WW => `${WW} ${iW}`))
    }

    function sW(WW) {
      return WW.split(/[\s:_]+/).filter((WW => "" !== WW)).map(PW).join("[`:_\\s]+")
    }

    function MW(WW) {
      return jW(WW.split(".").pop())
    }

    function KW(WW) {
      return WW.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function SW(WW) {
      let iW = null;
      return () => {
        const OW = iW ??= WW();
        return OW.catch((() => {
          iW === OW && (iW = null)
        })), OW
      }
    }
  },
  5622: (WW, iW, OW) => {
    function mW(WW) {
      return {
        notAfter: WW
      }
    }
    OW.d(iW, {
      c: () => cW,
      e: () => wW,
      f: () => LW,
      j: () => mW,
      k: () => EW,
      n: () => NW,
      o: () => PW,
      q: () => tW,
      r: () => ZW
    });
    const EW = mW("\\w$."),
      NW = mW("\\w.,");

    function PW(WW) {
      return iW => cW(iW, WW)
    }

    function LW(WW) {
      return iW => !WW.test(iW.input.slice(0, iW.index))
    }

    function cW(WW, iW) {
      return WW.index > 0 && new RegExp(`[${iW}]`).test(WW.input[WW.index - 1])
    }

    function wW(WW, iW, OW) {
      return function(WW) {
        return void 0 !== WW && "function" !== typeof WW
      }(OW) ? function(WW, iW, OW) {
        const mW = iW.flags.replace(/[gy]/g, ""),
          EW = new RegExp(`[^${OW}](?:${iW.source})`, `${mW}g`),
          NW = [],
          PW = OW => {
            const mW = OW.index + OW[0].length;
            return ("" === OW[0] ? xW(WW, iW, mW) : mW) - 1
          },
          LW = new RegExp(`(?:${iW.source})`, `${mW}y`).exec(WW);
        if (LW) {
          if (NW.push(LW), !iW.global) return NW;
          EW.lastIndex = PW(LW)
        }
        for (let cW = EW.exec(WW); cW; cW = EW.exec(WW)) {
          const OW = xW(WW, iW, cW.index) - cW.index;
          if (cW[0] = cW[0].slice(OW), cW.index += OW, NW.push(cW), !iW.global) break;
          EW.lastIndex = PW(cW)
        }
        return NW
      }(WW, iW, OW.notAfter) : function(WW, iW, OW) {
        const mW = new RegExp(iW.source, `${iW.flags.replace(/[gy]/g,"")}g`),
          EW = [];
        for (let NW = mW.exec(WW); NW; NW = mW.exec(WW))
          if (!OW || OW(NW)) {
            if (EW.push(NW), !iW.global) break;
            "" === NW[0] && (mW.lastIndex = xW(WW, iW, mW.lastIndex))
          } else mW.lastIndex = xW(WW, iW, NW.index);
        return EW
      }(WW, iW, OW)
    }

    function tW(WW, iW, OW, mW) {
      let EW = "",
        NW = 0;
      for (const PW of wW(WW, iW, OW)) EW += WW.slice(NW, PW.index) + mW(PW), NW = PW.index + PW[0].length;
      return EW + WW.slice(NW)
    }

    function ZW(WW, iW, OW) {
      const mW = [];
      let EW = 0;
      for (const NW of wW(WW, iW, OW)) mW.push(WW.slice(EW, NW.index)), EW = NW.index + NW[0].length;
      return [...mW, WW.slice(EW)]
    }

    function xW(WW, iW, OW) {
      var mW;
      return OW + (iW.unicode && (null !== (mW = WW.codePointAt(OW)) && void 0 !== mW ? mW : 0) > 65535 ? 2 : 1)
    }
  },
  7468: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);