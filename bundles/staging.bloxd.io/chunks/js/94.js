export const id = 94;
export const ids = [94];
export const modules = {
  5218: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => GH,
      c: () => AH,
      e: () => hH,
      f: () => WH,
      j: () => QH,
      l: () => tH,
      p: () => rH,
      r: () => SH,
      v: () => uH,
      z: () => YH
    });
    const AH = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function rH(HH) {
      try {
        return decodeURIComponent(HH.slice(1))
      } catch {
        return HH.slice(1)
      }
    }

    function SH(HH) {
      return HH.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const hH = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${AH.source}`, "g");

    function tH(HH, BH) {
      return 2 === HH.length ? BH.replace(/^ (.*) $/, "$1") : BH
    }

    function zH(HH) {
      return "" === HH.trim()
    }

    function CH(HH) {
      const BH = [];
      for (const LH of HH.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) BH.length > 0 && BH[BH.length - 1].endsWith("\\") ? BH[BH.length - 1] += `|${LH}` : BH.push(LH);
      return BH.map((HH => HH.trim().replaceAll("\\|", "|")))
    }
    const EH = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function XH(HH) {
      const BH = [],
        LH = [{
          indent: -1,
          items: BH
        }];
      let AH = null;
      for (const rH of HH) {
        const HH = rH.match(EH);
        if (!HH) {
          AH && (AH.text += ` ${rH.trim()}`);
          continue
        }
        const BH = HH[1].replace(/\t/g, "  ").length;
        for (; BH <= LH[LH.length - 1].indent;) LH.pop();
        AH = {
          text: HH[3].trim(),
          children: []
        }, LH[LH.length - 1].items.push(AH), LH.push({
          indent: BH,
          items: AH.children
        })
      }
      return BH
    }

    function GH(HH) {
      const BH = HH.replace(/\r\n/g, "\n").split("\n"),
        LH = [];
      let AH = 0;
      for (; AH < BH.length;) {
        const HH = BH[AH];
        if (zH(HH)) {
          AH++;
          continue
        }
        const rH = HH.match(/^\s*```\s*(\w*)\s*$/);
        if (rH) {
          const HH = [];
          for (AH++; AH < BH.length && !/^\s*```\s*$/.test(BH[AH]);) HH.push(BH[AH]), AH++;
          AH++, LH.push({
            kind: "code",
            lang: rH[1] || "text",
            code: HH.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const hH = HH.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (hH) {
          const HH = hH[2].trim();
          LH.push({
            kind: "heading",
            level: hH[1].length,
            text: HH,
            anchor: SH(HH)
          }), AH++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(HH)) {
          LH.push({
            kind: "rule"
          }), AH++;
          continue
        }
        if (HH.trim().startsWith("|") && AH + 1 < BH.length && /^\s*\|[\s:|-]+\|\s*$/.test(BH[AH + 1])) {
          const rH = CH(HH),
            SH = [];
          for (AH += 2; AH < BH.length && BH[AH].trim().startsWith("|");) SH.push(CH(BH[AH])), AH++;
          LH.push({
            kind: "table",
            header: rH,
            rows: SH
          });
          continue
        }
        if (HH.startsWith(">")) {
          const HH = [];
          for (; AH < BH.length && BH[AH].startsWith(">");) HH.push(BH[AH].replace(/^>\s?/, "")), AH++;
          LH.push({
            kind: "quote",
            blocks: GH(HH.join("\n"))
          });
          continue
        }
        if (EH.test(HH)) {
          const rH = [],
            SH = /^\s*\d+\./.test(HH);
          for (; AH < BH.length && !zH(BH[AH]) && (EH.test(BH[AH]) || /^\s+\S/.test(BH[AH]));) rH.push(BH[AH]), AH++;
          LH.push({
            kind: "list",
            ordered: SH,
            items: XH(rH)
          });
          continue
        }
        const tH = [];
        for (; AH < BH.length && !zH(BH[AH]) && !/^\s*```/.test(BH[AH]) && !/^#{1,6}\s/.test(BH[AH]) && !BH[AH].startsWith(">") && !EH.test(BH[AH]) && (!BH[AH].trim().startsWith("|") || 0 !== tH.length);) tH.push(BH[AH].trim()), AH++;
        0 === tH.length && (tH.push(BH[AH].trim()), AH++), LH.push({
          kind: "paragraph",
          text: tH.join(" ")
        })
      }
      return LH
    }

    function YH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const LH = GH(HH);
      let AH = "";
      const rH = [],
        SH = [],
        hH = new Map;
      for (const CH of LH) {
        if ("heading" === CH.kind) {
          var tH;
          const HH = (null !== (tH = hH.get(CH.anchor)) && void 0 !== tH ? tH : 0) + 1;
          hH.set(CH.anchor, HH), HH > 1 && (CH.anchor = `${CH.anchor}-${HH}`)
        }
        if ("heading" === CH.kind && 1 === CH.level && !AH) {
          AH = CH.text;
          continue
        }
        if ("heading" === CH.kind && CH.level <= BH) {
          SH.push({
            heading: CH,
            blocks: []
          });
          continue
        }
        const HH = SH.at(-1);
        HH ? HH.blocks.push(CH) : rH.push(CH)
      }
      const zH = HH => {
        for (;
          "rule" === (null === (BH = HH.at(-1)) || void 0 === BH ? void 0 : BH.kind);) {
          var BH;
          HH.pop()
        }
      };
      zH(rH);
      for (const CH of SH) zH(CH.blocks);
      return {
        title: AH,
        intro: rH,
        sections: SH
      }
    }

    function uH(HH) {
      return [{
        heading: null,
        blocks: HH.intro
      }, ...HH.sections.map((HH => ({
        heading: HH.heading,
        blocks: HH.blocks
      })))]
    }

    function QH(HH) {
      return HH.flatMap((HH => "code" === HH.kind ? [HH] : "quote" === HH.kind ? QH(HH.blocks) : []))
    }

    function WH(HH) {
      switch (HH.kind) {
        case "heading":
        case "paragraph":
          return HH.text;
        case "code":
          return HH.code;
        case "table":
          return [HH.header, ...HH.rows].map((HH => HH.join(" "))).join(" ");
        case "list": {
          const BH = HH => HH.map((HH => `${HH.text} ${BH(HH.children)}`)).join(" ");
          return BH(HH.items)
        }
        case "quote":
          return HH.blocks.map(WH).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7029: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      h: () => hH,
      l: () => tH
    });
    LH(7025);
    var AH = LH(45),
      rH = LH(5218),
      SH = LH(1225);
    const hH = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function tH(HH, BH) {
      return HH === BH ? HH : `${HH} (${BH})`
    }

    function zH(HH) {
      const BH = [];
      let LH = 0;
      for (const AH of HH.matchAll(hH)) {
        AH.index > LH && BH.push(HH.slice(LH, AH.index));
        const [, rH, hH, zH, CH, EH, XH] = AH;
        void 0 !== rH ? BH.push(tH(rH, hH)) : void 0 !== zH || void 0 !== CH ? BH.push((0, SH.jsx)("strong", {
          children: null !== zH && void 0 !== zH ? zH : CH
        }, AH.index)) : void 0 !== EH ? BH.push((0, SH.jsx)("em", {
          children: EH
        }, AH.index)) : BH.push((0, SH.jsx)("code", {
          children: XH
        }, AH.index)), LH = AH.index + AH[0].length
      }
      return LH < HH.length && BH.push(HH.slice(LH)), BH
    }

    function CH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const AH = HH.map(((HH, BH) => (0, SH.jsxs)("li", {
        children: [zH(HH.text), HH.children.length > 0 && CH(HH.children, !1)]
      }, BH)));
      return BH ? (0, SH.jsx)("ol", {
        start: LH,
        children: AH
      }) : (0, SH.jsx)("ul", {
        children: AH
      })
    }

    function EH(HH, BH) {
      switch (HH.kind) {
        case "heading":
          return HH.level <= 2 ? (0, SH.jsx)("h3", {
            children: zH(HH.text)
          }, BH) : (0, SH.jsx)("h4", {
            children: zH(HH.text)
          }, BH);
        case "paragraph":
          return (0, SH.jsx)("p", {
            children: zH(HH.text)
          }, BH);
        case "list":
          return (0, SH.jsx)(AH.Fragment, {
            children: CH(HH.items, HH.ordered)
          }, BH);
        case "quote":
          return (0, SH.jsx)("blockquote", {
            children: HH.blocks.map(((HH, BH) => EH(HH, BH)))
          }, BH);
        case "code":
          return (0, SH.jsx)("pre", {
            children: (0, SH.jsx)("code", {
              children: HH.code
            })
          }, BH);
        case "table":
          return (0, SH.jsxs)("table", {
            children: [(0, SH.jsx)("thead", {
              children: (0, SH.jsx)("tr", {
                children: HH.header.map(((HH, BH) => (0, SH.jsx)("th", {
                  children: zH(HH)
                }, BH)))
              })
            }), (0, SH.jsx)("tbody", {
              children: HH.rows.map(((HH, BH) => (0, SH.jsx)("tr", {
                children: HH.map(((HH, BH) => (0, SH.jsx)("td", {
                  children: zH(HH)
                }, BH)))
              }, BH)))
            })]
          }, BH);
        case "rule":
          return (0, SH.jsx)("hr", {}, BH)
      }
    }

    function XH(HH) {
      let {
        markdown: BH
      } = HH, LH = 0;
      return (0, SH.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, rH.D)(BH).map(((HH, BH) => {
          if ("list" !== HH.kind || !HH.ordered) return LH = 0, EH(HH, BH);
          const rH = LH + 1;
          return LH += HH.items.length, (0, SH.jsx)(AH.Fragment, {
            children: CH(HH.items, !0, rH)
          }, BH)
        }))
      })
    }
  },
  7017: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => xH,
      f: () => vH,
      e: () => TH,
      h: () => uH
    });
    var AH = LH(1148),
      rH = LH(6987),
      SH = LH(5347);
    const hH = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function tH(HH) {
      return (0, SH.c)(HH, hH, (BH => !/^my/i.test(BH[0]) || !/follow $/i.test(HH.slice(0, BH.index)))).length > 0
    }
    const zH = /\byou(?:r|'re|'ll)?\b/i,
      CH = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      EH = 2;

    function XH(HH) {
      return function(HH) {
        const BH = [];
        let LH = !1;
        for (const AH of HH.split("\n")) {
          if (/^\s*(```|~~~)/.test(AH)) {
            LH = !LH;
            continue
          }
          if (LH || /^\s*>/.test(AH)) continue;
          const HH = AH.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          BH.push(...(0, rH.l)(HH))
        }
        return BH
      }(HH).filter((HH => tH(HH) || CH.test(HH) && !zH.test(HH)))
    }
    const GH = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      YH = [{
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

    function uH(HH) {
      const BH = YH.findIndex((BH => BH.name === HH));
      return -1 === BH ? YH.length : BH
    }
    const QH = 2500,
      WH = 12e4;
    class MH extends Error {
      constructor(HH) {
        super(`Studio AI chat ${HH}`), this.reason = HH
      }
    }

    function xH(HH, BH) {
      const LH = new AbortController,
        AH = () => {
          LH.abort()
        },
        rH = setTimeout(AH, HH);
      return null !== BH && void 0 !== BH && BH.aborted && AH(), null === BH || void 0 === BH || BH.addEventListener("abort", AH, {
        once: !0
      }), {
        signal: LH.signal,
        clear: () => {
          clearTimeout(rH), null === BH || void 0 === BH || BH.removeEventListener("abort", AH)
        }
      }
    }

    function vH(HH, BH, LH) {
      return new Promise(((rH, SH) => {
        const hH = new AbortController,
          tH = () => {
            hH.abort(), SH((0, AH.g)(LH))
          };
        if (null !== LH && void 0 !== LH && LH.aborted) return void tH();
        null === LH || void 0 === LH || LH.addEventListener("abort", tH, {
          once: !0
        });
        const zH = YH.map((() => !1));
        let CH = null;
        const EH = YH.map((() => !1)),
          XH = YH.map((() => !1));
        YH.forEach(((AH, GH) => {
          const uH = xH(WH, hH.signal);
          UH(AH, [{
            role: "user",
            content: HH
          }], uH.signal).then((HH => {
            hH.signal.aborted || ("busy" === HH || "failed" === HH ? (EH[GH] = "busy" === HH, XH[GH] = !0) : null !== HH && (null === CH || GH < CH.rank) && (CH = {
              rank: GH,
              answer: {
                text: HH.text,
                model: AH.name
              }
            }, BH(CH.answer)))
          }), (HH => {
            hH.signal.aborted || (XH[GH] = !0, console.warn(`Studio AI: ${AH.name} couldn't be reached`, HH))
          })).finally((() => {
            uH.clear(), zH[GH] = !0, hH.signal.aborted || (() => {
              var HH, BH;
              const AH = null !== (HH = null === (BH = CH) || void 0 === BH ? void 0 : BH.rank) && void 0 !== HH ? HH : YH.length;
              zH.slice(0, AH).includes(!1) || (null === LH || void 0 === LH || LH.removeEventListener("abort", tH), hH.abort(), null !== CH ? rH({
                ...CH.answer,
                isFinal: !XH.slice(0, CH.rank).includes(!0)
              }) : SH(new MH(EH.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((HH => {
            console.error("Studio AI: showing an answer failed", HH)
          }))
        }))
      }))
    }

    function PH(HH) {
      var BH, LH;
      return "length" === (null === HH || void 0 === HH || null === (BH = HH.choices) || void 0 === BH || null === (LH = BH[0]) || void 0 === LH ? void 0 : LH.finish_reason)
    }
    async function TH(HH, BH, LH) {
      const AH = YH.find((BH => BH.name === HH));
      if (void 0 === AH) return "failed";
      const rH = xH(WH, LH);
      try {
        const HH = await UH(AH, BH, rH.signal);
        return null !== HH && "object" === typeof HH ? HH.isCutOff ? (console.warn(`Studio AI: ${AH.name}'s answer was cut off at the token limit`), null) : {
          text: HH.text
        } : HH
      } finally {
        rH.clear()
      }
    }
    async function UH(HH, BH, LH) {
      const AH = await fetch(GH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: HH.name,
          messages: BH,
          max_tokens: QH,
          temperature: HH.temperature,
          reasoning_effort: HH.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: LH
      });
      if (429 === AH.status) return "busy";
      if (!AH.ok) return console.warn(`Studio AI: ${HH.name} answered ${AH.status}`), "failed";
      const rH = await AH.json().catch((() => null)),
        SH = function(HH) {
          var BH, LH, AH;
          const rH = null === HH || void 0 === HH || null === (BH = HH.choices) || void 0 === BH || null === (LH = BH[0]) || void 0 === LH || null === (AH = LH.message) || void 0 === AH ? void 0 : AH.content;
          if ("string" !== typeof rH) return null;
          const SH = rH.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === SH ? null : SH
        }(rH);
      return null !== SH && function(HH) {
        const BH = XH(HH);
        return BH.length >= EH || BH.some((HH => tH(HH)))
      }(SH) ? (console.warn(`Studio AI: ${HH.name} thought out loud instead of answering`), "failed") : null === SH ? null : {
        text: SH,
        isCutOff: PH(rH)
      }
    }
  },
  6987: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => TH,
      E: () => xH,
      F: () => XH,
      I: () => CH,
      L: () => YH,
      b: () => uH,
      d: () => tH,
      e: () => hH,
      f: () => QH,
      h: () => GH,
      l: () => EH,
      n: () => SH,
      p: () => rH,
      t: () => PH,
      u: () => UH,
      w: () => WH,
      y: () => vH
    });
    var AH = LH(5347);
    const rH = 2e3,
      SH = 2e4;

    function hH(HH) {
      return HH.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function tH(HH) {
      return HH.replace(/\$/g, "\\$")
    }
    const zH = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function CH(HH, BH) {
      zH.lastIndex = BH;
      const LH = zH.exec(HH);
      return LH.index + LH[0].length
    }

    function EH(HH) {
      return (0, AH.s)(HH, /\s+/g, (0, AH.n)(".!?")).flatMap((HH => HH.split("\n")))
    }

    function XH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH;
      const AH = [...HH.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((HH => HH.index)),
        rH = AH.filter((HH => HH < BH)),
        SH = AH.find((HH => HH >= LH));
      return [0 === rH.length ? 0 : rH.at(-1) + 1, void 0 === SH ? HH.length : SH + 1]
    }

    function GH(HH, BH) {
      const LH = HH.charCodeAt(BH - 1);
      return HH.slice(0, BH > 0 && BH < HH.length && LH >= 55296 && LH <= 56319 ? BH - 1 : BH)
    }

    function YH(HH, BH) {
      return `${BH}${HH.replace(/\\/g,"\\\\").split(BH).join(`\\${BH}`)}${BH}`
    }

    function uH(HH) {
      return HH.charAt(0).toUpperCase() + HH.slice(1)
    }

    function QH(HH) {
      return Math.round(HH).toLocaleString("en-US")
    }

    function WH(HH) {
      return HH.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((HH => "" !== HH))
    }
    const MH = 3;

    function xH(HH, BH) {
      return WH(HH).filter((HH => HH.length >= MH && !/\d/.test(HH))).map((HH => `${HH} ${BH}`))
    }

    function vH(HH) {
      return HH.split(/[\s:_]+/).filter((HH => "" !== HH)).map(hH).join("[`:_\\s]+")
    }

    function PH(HH) {
      return WH(HH.split(".").pop())
    }

    function TH(HH) {
      return HH.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function UH(HH) {
      let BH = null;
      return () => {
        const LH = BH ??= HH();
        return LH.catch((() => {
          BH === LH && (BH = null)
        })), LH
      }
    }
  },
  5347: (HH, BH, LH) => {
    function AH(HH) {
      return {
        notAfter: HH
      }
    }
    LH.d(BH, {
      b: () => zH,
      c: () => CH,
      g: () => tH,
      i: () => AH,
      j: () => rH,
      k: () => SH,
      n: () => hH,
      o: () => EH,
      s: () => XH
    });
    const rH = AH("\\w$."),
      SH = AH("\\w.,");

    function hH(HH) {
      return BH => zH(BH, HH)
    }

    function tH(HH) {
      return BH => !HH.test(BH.input.slice(0, BH.index))
    }

    function zH(HH, BH) {
      return HH.index > 0 && new RegExp(`[${BH}]`).test(HH.input[HH.index - 1])
    }

    function CH(HH, BH, LH) {
      return function(HH) {
        return void 0 !== HH && "function" !== typeof HH
      }(LH) ? function(HH, BH, LH) {
        const AH = BH.flags.replace(/[gy]/g, ""),
          rH = new RegExp(`[^${LH}](?:${BH.source})`, `${AH}g`),
          SH = [],
          hH = LH => {
            const AH = LH.index + LH[0].length;
            return ("" === LH[0] ? GH(HH, BH, AH) : AH) - 1
          },
          tH = new RegExp(`(?:${BH.source})`, `${AH}y`).exec(HH);
        if (tH) {
          if (SH.push(tH), !BH.global) return SH;
          rH.lastIndex = hH(tH)
        }
        for (let zH = rH.exec(HH); zH; zH = rH.exec(HH)) {
          const LH = GH(HH, BH, zH.index) - zH.index;
          if (zH[0] = zH[0].slice(LH), zH.index += LH, SH.push(zH), !BH.global) break;
          rH.lastIndex = hH(zH)
        }
        return SH
      }(HH, BH, LH.notAfter) : function(HH, BH, LH) {
        const AH = new RegExp(BH.source, `${BH.flags.replace(/[gy]/g,"")}g`),
          rH = [];
        for (let SH = AH.exec(HH); SH; SH = AH.exec(HH))
          if (!LH || LH(SH)) {
            if (rH.push(SH), !BH.global) break;
            "" === SH[0] && (AH.lastIndex = GH(HH, BH, AH.lastIndex))
          } else AH.lastIndex = GH(HH, BH, SH.index);
        return rH
      }(HH, BH, LH)
    }

    function EH(HH, BH, LH, AH) {
      let rH = "",
        SH = 0;
      for (const hH of CH(HH, BH, LH)) rH += HH.slice(SH, hH.index) + AH(hH), SH = hH.index + hH[0].length;
      return rH + HH.slice(SH)
    }

    function XH(HH, BH, LH) {
      const AH = [];
      let rH = 0;
      for (const SH of CH(HH, BH, LH)) AH.push(HH.slice(rH, SH.index)), rH = SH.index + SH[0].length;
      return [...AH, HH.slice(rH)]
    }

    function GH(HH, BH, LH) {
      var AH;
      return LH + (BH.unicode && (null !== (AH = HH.codePointAt(LH)) && void 0 !== AH ? AH : 0) > 65535 ? 2 : 1)
    }
  },
  7025: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);