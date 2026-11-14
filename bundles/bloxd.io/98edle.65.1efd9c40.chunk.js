export const id = 65;
export const ids = [65];
export const modules = {
  3705: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => tR,
      e: () => wW,
      f: () => AW,
      i: () => YW,
      l: () => iR,
      n: () => bR,
      q: () => CW,
      s: () => zR,
      v: () => gR,
      y: () => TW
    });
    const wW = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function CW(WW) {
      try {
        return decodeURIComponent(WW.slice(1))
      } catch {
        return WW.slice(1)
      }
    }

    function zR(WW) {
      return WW.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const AW = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wW.source}`, "g");

    function bR(WW, RW) {
      return 2 === WW.length ? RW.replace(/^ (.*) $/, "$1") : RW
    }

    function yR(WW) {
      return "" === WW.trim()
    }

    function NW(WW) {
      const RW = [];
      for (const MW of WW.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) RW.length > 0 && RW[RW.length - 1].endsWith("\\") ? RW[RW.length - 1] += `|${MW}` : RW.push(MW);
      return RW.map((WW => WW.trim().replaceAll("\\|", "|")))
    }
    const eW = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function BW(WW) {
      const RW = [],
        MW = [{
          indent: -1,
          items: RW
        }];
      let wW = null;
      for (const CW of WW) {
        const WW = CW.match(eW);
        if (!WW) {
          wW && (wW.text += ` ${CW.trim()}`);
          continue
        }
        const RW = WW[1].replace(/\t/g, "  ").length;
        for (; RW <= MW[MW.length - 1].indent;) MW.pop();
        wW = {
          text: WW[3].trim(),
          children: []
        }, MW[MW.length - 1].items.push(wW), MW.push({
          indent: RW,
          items: wW.children
        })
      }
      return RW
    }

    function tR(WW) {
      const RW = WW.replace(/\r\n/g, "\n").split("\n"),
        MW = [];
      let wW = 0;
      for (; wW < RW.length;) {
        const WW = RW[wW];
        if (yR(WW)) {
          wW++;
          continue
        }
        const CW = WW.match(/^\s*```\s*(\w*)\s*$/);
        if (CW) {
          const WW = [];
          for (wW++; wW < RW.length && !/^\s*```\s*$/.test(RW[wW]);) WW.push(RW[wW]), wW++;
          wW++, MW.push({
            kind: "code",
            lang: CW[1] || "text",
            code: WW.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const AW = WW.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (AW) {
          const WW = AW[2].trim();
          MW.push({
            kind: "heading",
            level: AW[1].length,
            text: WW,
            anchor: zR(WW)
          }), wW++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(WW)) {
          MW.push({
            kind: "rule"
          }), wW++;
          continue
        }
        if (WW.trim().startsWith("|") && wW + 1 < RW.length && /^\s*\|[\s:|-]+\|\s*$/.test(RW[wW + 1])) {
          const CW = NW(WW),
            zR = [];
          for (wW += 2; wW < RW.length && RW[wW].trim().startsWith("|");) zR.push(NW(RW[wW])), wW++;
          MW.push({
            kind: "table",
            header: CW,
            rows: zR
          });
          continue
        }
        if (WW.startsWith(">")) {
          const WW = [];
          for (; wW < RW.length && RW[wW].startsWith(">");) WW.push(RW[wW].replace(/^>\s?/, "")), wW++;
          MW.push({
            kind: "quote",
            blocks: tR(WW.join("\n"))
          });
          continue
        }
        if (eW.test(WW)) {
          const CW = [],
            zR = /^\s*\d+\./.test(WW);
          for (; wW < RW.length && !yR(RW[wW]) && (eW.test(RW[wW]) || /^\s+\S/.test(RW[wW]));) CW.push(RW[wW]), wW++;
          MW.push({
            kind: "list",
            ordered: zR,
            items: BW(CW)
          });
          continue
        }
        const bR = [];
        for (; wW < RW.length && !yR(RW[wW]) && !/^\s*```/.test(RW[wW]) && !/^#{1,6}\s/.test(RW[wW]) && !RW[wW].startsWith(">") && !eW.test(RW[wW]) && (!RW[wW].trim().startsWith("|") || 0 !== bR.length);) bR.push(RW[wW].trim()), wW++;
        0 === bR.length && (bR.push(RW[wW].trim()), wW++), MW.push({
          kind: "paragraph",
          text: bR.join(" ")
        })
      }
      return MW
    }

    function TW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const MW = tR(WW);
      let wW = "";
      const CW = [],
        zR = [],
        AW = new Map;
      for (const NW of MW) {
        if ("heading" === NW.kind) {
          var bR;
          const WW = (null !== (bR = AW.get(NW.anchor)) && void 0 !== bR ? bR : 0) + 1;
          AW.set(NW.anchor, WW), WW > 1 && (NW.anchor = `${NW.anchor}-${WW}`)
        }
        if ("heading" === NW.kind && 1 === NW.level && !wW) {
          wW = NW.text;
          continue
        }
        if ("heading" === NW.kind && NW.level <= RW) {
          zR.push({
            heading: NW,
            blocks: []
          });
          continue
        }
        const WW = zR.at(-1);
        WW ? WW.blocks.push(NW) : CW.push(NW)
      }
      const yR = WW => {
        for (;
          "rule" === (null === (RW = WW.at(-1)) || void 0 === RW ? void 0 : RW.kind);) {
          var RW;
          WW.pop()
        }
      };
      yR(CW);
      for (const NW of zR) yR(NW.blocks);
      return {
        title: wW,
        intro: CW,
        sections: zR
      }
    }

    function gR(WW) {
      return [{
        heading: null,
        blocks: WW.intro
      }, ...WW.sections.map((WW => ({
        heading: WW.heading,
        blocks: WW.blocks
      })))]
    }

    function iR(WW) {
      return WW.flatMap((WW => "code" === WW.kind ? [WW] : "quote" === WW.kind ? iR(WW.blocks) : []))
    }

    function YW(WW) {
      switch (WW.kind) {
        case "heading":
        case "paragraph":
          return WW.text;
        case "code":
          return WW.code;
        case "table":
          return [WW.header, ...WW.rows].map((WW => WW.join(" "))).join(" ");
        case "list": {
          const RW = WW => WW.map((WW => `${WW.text} ${RW(WW.children)}`)).join(" ");
          return RW(WW.items)
        }
        case "quote":
          return WW.blocks.map(YW).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5499: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW,
      f: () => AW,
      g: () => bR
    });
    MW(5495);
    var wW = MW(75),
      CW = MW(3705),
      zR = MW(940);
    const AW = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function bR(WW, RW) {
      return WW === RW ? WW : `${WW} (${RW})`
    }

    function yR(WW) {
      const RW = [];
      let MW = 0;
      for (const wW of WW.matchAll(AW)) {
        wW.index > MW && RW.push(WW.slice(MW, wW.index));
        const [, CW, AW, yR, NW, eW, BW] = wW;
        void 0 !== CW ? RW.push(bR(CW, AW)) : void 0 !== yR || void 0 !== NW ? RW.push((0, zR.jsx)("strong", {
          children: null !== yR && void 0 !== yR ? yR : NW
        }, wW.index)) : void 0 !== eW ? RW.push((0, zR.jsx)("em", {
          children: eW
        }, wW.index)) : RW.push((0, zR.jsx)("code", {
          children: BW
        }, wW.index)), MW = wW.index + wW[0].length
      }
      return MW < WW.length && RW.push(WW.slice(MW)), RW
    }

    function NW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const wW = WW.map(((WW, RW) => (0, zR.jsxs)("li", {
        children: [yR(WW.text), WW.children.length > 0 && NW(WW.children, !1)]
      }, RW)));
      return RW ? (0, zR.jsx)("ol", {
        start: MW,
        children: wW
      }) : (0, zR.jsx)("ul", {
        children: wW
      })
    }

    function eW(WW, RW) {
      switch (WW.kind) {
        case "heading":
          return WW.level <= 2 ? (0, zR.jsx)("h3", {
            children: yR(WW.text)
          }, RW) : (0, zR.jsx)("h4", {
            children: yR(WW.text)
          }, RW);
        case "paragraph":
          return (0, zR.jsx)("p", {
            children: yR(WW.text)
          }, RW);
        case "list":
          return (0, zR.jsx)(wW.Fragment, {
            children: NW(WW.items, WW.ordered)
          }, RW);
        case "quote":
          return (0, zR.jsx)("blockquote", {
            children: WW.blocks.map(((WW, RW) => eW(WW, RW)))
          }, RW);
        case "code":
          return (0, zR.jsx)("pre", {
            children: (0, zR.jsx)("code", {
              children: WW.code
            })
          }, RW);
        case "table":
          return (0, zR.jsxs)("table", {
            children: [(0, zR.jsx)("thead", {
              children: (0, zR.jsx)("tr", {
                children: WW.header.map(((WW, RW) => (0, zR.jsx)("th", {
                  children: yR(WW)
                }, RW)))
              })
            }), (0, zR.jsx)("tbody", {
              children: WW.rows.map(((WW, RW) => (0, zR.jsx)("tr", {
                children: WW.map(((WW, RW) => (0, zR.jsx)("td", {
                  children: yR(WW)
                }, RW)))
              }, RW)))
            })]
          }, RW);
        case "rule":
          return (0, zR.jsx)("hr", {}, RW)
      }
    }

    function BW(WW) {
      let {
        markdown: RW
      } = WW, MW = 0;
      return (0, zR.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, CW.B)(RW).map(((WW, RW) => {
          if ("list" !== WW.kind || !WW.ordered) return MW = 0, eW(WW, RW);
          const CW = MW + 1;
          return MW += WW.items.length, (0, zR.jsx)(wW.Fragment, {
            children: NW(WW.items, !0, CW)
          }, RW)
        }))
      })
    }
  },
  5490: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => PW,
      k: () => IW,
      h: () => lW,
      m: () => gR
    });
    var wW = MW(5487),
      CW = MW(5441),
      zR = MW(3849);
    const AW = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function bR(WW) {
      return (0, zR.i)(WW, AW, (RW => !/^my/i.test(RW[0]) || !/follow $/i.test(WW.slice(0, RW.index)))).length > 0
    }
    const yR = /\byou(?:r|'re|'ll)?\b/i,
      NW = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      eW = 2;

    function BW(WW) {
      return function(WW) {
        const RW = [];
        let MW = !1;
        for (const wW of WW.split("\n")) {
          if (/^\s*(```|~~~)/.test(wW)) {
            MW = !MW;
            continue
          }
          if (MW || /^\s*>/.test(wW)) continue;
          const WW = wW.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          RW.push(...(0, CW.p)(WW))
        }
        return RW
      }(WW).filter((WW => bR(WW) || NW.test(WW) && !yR.test(WW)))
    }
    const tR = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      TW = [{
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

    function gR(WW) {
      const RW = TW.findIndex((RW => RW.name === WW));
      return -1 === RW ? TW.length : RW
    }
    const iR = 2500,
      YW = 12e4;
    class JW extends Error {
      constructor(WW) {
        super(`Studio AI chat ${WW}`), this.reason = WW
      }
    }

    function PW(WW, RW) {
      const MW = new AbortController,
        wW = () => {
          MW.abort()
        },
        CW = setTimeout(wW, WW);
      return null !== RW && void 0 !== RW && RW.aborted && wW(), null === RW || void 0 === RW || RW.addEventListener("abort", wW, {
        once: !0
      }), {
        signal: MW.signal,
        clear: () => {
          clearTimeout(CW), null === RW || void 0 === RW || RW.removeEventListener("abort", wW)
        }
      }
    }

    function IW(WW, RW, MW) {
      return new Promise(((CW, zR) => {
        const AW = new AbortController,
          bR = () => {
            AW.abort(), zR((0, wW.e)(MW))
          };
        if (null !== MW && void 0 !== MW && MW.aborted) return void bR();
        null === MW || void 0 === MW || MW.addEventListener("abort", bR, {
          once: !0
        });
        const yR = TW.map((() => !1));
        let NW = null;
        const eW = TW.map((() => !1)),
          BW = TW.map((() => !1));
        TW.forEach(((wW, tR) => {
          const gR = PW(YW, AW.signal);
          FW(wW, [{
            role: "user",
            content: WW
          }], gR.signal).then((WW => {
            AW.signal.aborted || ("busy" === WW || "failed" === WW ? (eW[tR] = "busy" === WW, BW[tR] = !0) : null !== WW && (null === NW || tR < NW.rank) && (NW = {
              rank: tR,
              answer: {
                text: WW.text,
                model: wW.name
              }
            }, RW(NW.answer)))
          }), (WW => {
            AW.signal.aborted || (BW[tR] = !0, console.warn(`Studio AI: ${wW.name} couldn't be reached`, WW))
          })).finally((() => {
            gR.clear(), yR[tR] = !0, AW.signal.aborted || (() => {
              var WW, RW;
              const wW = null !== (WW = null === (RW = NW) || void 0 === RW ? void 0 : RW.rank) && void 0 !== WW ? WW : TW.length;
              yR.slice(0, wW).includes(!1) || (null === MW || void 0 === MW || MW.removeEventListener("abort", bR), AW.abort(), null !== NW ? CW({
                ...NW.answer,
                isFinal: !BW.slice(0, NW.rank).includes(!0)
              }) : zR(new JW(eW.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((WW => {
            console.error("Studio AI: showing an answer failed", WW)
          }))
        }))
      }))
    }

    function oW(WW) {
      var RW, MW;
      return "length" === (null === WW || void 0 === WW || null === (RW = WW.choices) || void 0 === RW || null === (MW = RW[0]) || void 0 === MW ? void 0 : MW.finish_reason)
    }
    async function lW(WW, RW, MW) {
      const wW = TW.find((RW => RW.name === WW));
      if (void 0 === wW) return "failed";
      const CW = PW(YW, MW);
      try {
        const WW = await FW(wW, RW, CW.signal);
        return null !== WW && "object" === typeof WW ? WW.isCutOff ? (console.warn(`Studio AI: ${wW.name}'s answer was cut off at the token limit`), null) : {
          text: WW.text
        } : WW
      } finally {
        CW.clear()
      }
    }
    async function FW(WW, RW, MW) {
      const wW = await fetch(tR, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: WW.name,
          messages: RW,
          max_tokens: iR,
          temperature: WW.temperature,
          reasoning_effort: WW.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: MW
      });
      if (429 === wW.status) return "busy";
      if (!wW.ok) return console.warn(`Studio AI: ${WW.name} answered ${wW.status}`), "failed";
      const CW = await wW.json().catch((() => null)),
        zR = function(WW) {
          var RW, MW, wW;
          const CW = null === WW || void 0 === WW || null === (RW = WW.choices) || void 0 === RW || null === (MW = RW[0]) || void 0 === MW || null === (wW = MW.message) || void 0 === wW ? void 0 : wW.content;
          if ("string" !== typeof CW) return null;
          const zR = CW.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === zR ? null : zR
        }(CW);
      return null !== zR && function(WW) {
        const RW = BW(WW);
        return RW.length >= eW || RW.some((WW => bR(WW)))
      }(zR) ? (console.warn(`Studio AI: ${WW.name} thought out loud instead of answering`), "failed") : null === zR ? null : {
        text: zR,
        isCutOff: oW(CW)
      }
    }
  },
  5441: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => oW,
      E: () => FW,
      I: () => YW,
      K: () => IW,
      L: () => lW,
      P: () => PW,
      Q: () => BW,
      T: () => NW,
      W: () => TW,
      b: () => gR,
      e: () => bR,
      h: () => AW,
      k: () => iR,
      n: () => tR,
      p: () => eW,
      t: () => zR,
      x: () => CW
    });
    var wW = MW(3849);
    const CW = 2e3,
      zR = 2e4;

    function AW(WW) {
      return WW.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function bR(WW) {
      return WW.replace(/\$/g, "\\$")
    }
    const yR = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function NW(WW, RW) {
      yR.lastIndex = RW;
      const MW = yR.exec(WW);
      return MW.index + MW[0].length
    }

    function eW(WW) {
      return (0, wW.C)(WW, /\s+/g, (0, wW.v)(".!?")).flatMap((WW => WW.split("\n")))
    }

    function BW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW;
      const wW = [...WW.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((WW => WW.index)),
        CW = wW.filter((WW => WW < RW)),
        zR = wW.find((WW => WW >= MW));
      return [0 === CW.length ? 0 : CW.at(-1) + 1, void 0 === zR ? WW.length : zR + 1]
    }

    function tR(WW, RW) {
      const MW = WW.charCodeAt(RW - 1);
      return WW.slice(0, RW > 0 && RW < WW.length && MW >= 55296 && MW <= 56319 ? RW - 1 : RW)
    }

    function TW(WW, RW) {
      return `${RW}${WW.replace(/\\/g,"\\\\").split(RW).join(`\\${RW}`)}${RW}`
    }

    function gR(WW) {
      return WW.charAt(0).toUpperCase() + WW.slice(1)
    }

    function iR(WW) {
      return Math.round(WW).toLocaleString("en-US")
    }

    function YW(WW) {
      return WW.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((WW => "" !== WW))
    }
    const JW = 3;

    function PW(WW, RW) {
      return YW(WW).filter((WW => WW.length >= JW && !/\d/.test(WW))).map((WW => `${WW} ${RW}`))
    }

    function IW(WW) {
      return WW.split(/[\s:_]+/).filter((WW => "" !== WW)).map(AW).join("[`:_\\s]+")
    }

    function oW(WW) {
      return YW(WW.split(".").pop())
    }

    function lW(WW) {
      return WW.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function FW(WW) {
      let RW = null;
      return () => {
        const MW = RW ??= WW();
        return MW.catch((() => {
          RW === MW && (RW = null)
        })), MW
      }
    }
  },
  5487: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => CW,
      j: () => AW
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      WW.signal.aborted || wW.set(WW.signal, RW), WW.abort(RW)
    }

    function zR(WW) {
      var RW;
      const MW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== RW ? RW : WW && wW.get(WW);
      if (void 0 !== MW && null !== MW) return MW;
      const CW = new DOMException("signal is aborted without reason", "AbortError");
      return null !== WW && void 0 !== WW && WW.aborted && wW.set(WW, CW), CW
    }

    function AW(WW) {
      if (null !== WW && void 0 !== WW && WW.aborted) throw zR(WW)
    }
  },
  3849: (WW, RW, MW) => {
    function wW(WW) {
      return {
        notAfter: WW
      }
    }
    MW.d(RW, {
      C: () => BW,
      e: () => yR,
      i: () => NW,
      l: () => bR,
      n: () => wW,
      r: () => CW,
      t: () => zR,
      v: () => AW,
      y: () => eW
    });
    const CW = wW("\\w$."),
      zR = wW("\\w.,");

    function AW(WW) {
      return RW => yR(RW, WW)
    }

    function bR(WW) {
      return RW => !WW.test(RW.input.slice(0, RW.index))
    }

    function yR(WW, RW) {
      return WW.index > 0 && new RegExp(`[${RW}]`).test(WW.input[WW.index - 1])
    }

    function NW(WW, RW, MW) {
      return function(WW) {
        return void 0 !== WW && "function" !== typeof WW
      }(MW) ? function(WW, RW, MW) {
        const wW = RW.flags.replace(/[gy]/g, ""),
          CW = new RegExp(`[^${MW}](?:${RW.source})`, `${wW}g`),
          zR = [],
          AW = MW => {
            const wW = MW.index + MW[0].length;
            return ("" === MW[0] ? tR(WW, RW, wW) : wW) - 1
          },
          bR = new RegExp(`(?:${RW.source})`, `${wW}y`).exec(WW);
        if (bR) {
          if (zR.push(bR), !RW.global) return zR;
          CW.lastIndex = AW(bR)
        }
        for (let yR = CW.exec(WW); yR; yR = CW.exec(WW)) {
          const MW = tR(WW, RW, yR.index) - yR.index;
          if (yR[0] = yR[0].slice(MW), yR.index += MW, zR.push(yR), !RW.global) break;
          CW.lastIndex = AW(yR)
        }
        return zR
      }(WW, RW, MW.notAfter) : function(WW, RW, MW) {
        const wW = new RegExp(RW.source, `${RW.flags.replace(/[gy]/g,"")}g`),
          CW = [];
        for (let zR = wW.exec(WW); zR; zR = wW.exec(WW))
          if (!MW || MW(zR)) {
            if (CW.push(zR), !RW.global) break;
            "" === zR[0] && (wW.lastIndex = tR(WW, RW, wW.lastIndex))
          } else wW.lastIndex = tR(WW, RW, zR.index);
        return CW
      }(WW, RW, MW)
    }

    function eW(WW, RW, MW, wW) {
      let CW = "",
        zR = 0;
      for (const AW of NW(WW, RW, MW)) CW += WW.slice(zR, AW.index) + wW(AW), zR = AW.index + AW[0].length;
      return CW + WW.slice(zR)
    }

    function BW(WW, RW, MW) {
      const wW = [];
      let CW = 0;
      for (const zR of NW(WW, RW, MW)) wW.push(WW.slice(CW, zR.index)), CW = zR.index + zR[0].length;
      return [...wW, WW.slice(CW)]
    }

    function tR(WW, RW, MW) {
      var wW;
      return MW + (RW.unicode && (null !== (wW = WW.codePointAt(MW)) && void 0 !== wW ? wW : 0) > 65535 ? 2 : 1)
    }
  },
  5495: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);