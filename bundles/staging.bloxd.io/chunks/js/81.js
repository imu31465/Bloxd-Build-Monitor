export const id = 81;
export const ids = [81];
export const modules = {
  4758: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      f: () => yG,
      g: () => dG,
      k: () => hG,
      m: () => kG,
      p: () => SG,
      r: () => LG,
      t: () => KG,
      w: () => QG,
      z: () => fG
    });
    const wG = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function SG(GG) {
      try {
        return decodeURIComponent(GG.slice(1))
      } catch {
        return GG.slice(1)
      }
    }

    function LG(GG) {
      return GG.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const yG = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wG.source}`, "g");

    function kG(GG, bG) {
      return 2 === GG.length ? bG.replace(/^ (.*) $/, "$1") : bG
    }

    function UG(GG) {
      return "" === GG.trim()
    }

    function YG(GG) {
      const bG = [];
      for (const ZG of GG.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) bG.length > 0 && bG[bG.length - 1].endsWith("\\") ? bG[bG.length - 1] += `|${ZG}` : bG.push(ZG);
      return bG.map((GG => GG.trim().replaceAll("\\|", "|")))
    }
    const VG = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function pG(GG) {
      const bG = [],
        ZG = [{
          indent: -1,
          items: bG
        }];
      let wG = null;
      for (const SG of GG) {
        const GG = SG.match(VG);
        if (!GG) {
          wG && (wG.text += ` ${SG.trim()}`);
          continue
        }
        const bG = GG[1].replace(/\t/g, "  ").length;
        for (; bG <= ZG[ZG.length - 1].indent;) ZG.pop();
        wG = {
          text: GG[3].trim(),
          children: []
        }, ZG[ZG.length - 1].items.push(wG), ZG.push({
          indent: bG,
          items: wG.children
        })
      }
      return bG
    }

    function fG(GG) {
      const bG = GG.replace(/\r\n/g, "\n").split("\n"),
        ZG = [];
      let wG = 0;
      for (; wG < bG.length;) {
        const GG = bG[wG];
        if (UG(GG)) {
          wG++;
          continue
        }
        const SG = GG.match(/^\s*```\s*(\w*)\s*$/);
        if (SG) {
          const GG = [];
          for (wG++; wG < bG.length && !/^\s*```\s*$/.test(bG[wG]);) GG.push(bG[wG]), wG++;
          wG++, ZG.push({
            kind: "code",
            lang: SG[1] || "text",
            code: GG.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const yG = GG.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (yG) {
          const GG = yG[2].trim();
          ZG.push({
            kind: "heading",
            level: yG[1].length,
            text: GG,
            anchor: LG(GG)
          }), wG++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(GG)) {
          ZG.push({
            kind: "rule"
          }), wG++;
          continue
        }
        if (GG.trim().startsWith("|") && wG + 1 < bG.length && /^\s*\|[\s:|-]+\|\s*$/.test(bG[wG + 1])) {
          const SG = YG(GG),
            LG = [];
          for (wG += 2; wG < bG.length && bG[wG].trim().startsWith("|");) LG.push(YG(bG[wG])), wG++;
          ZG.push({
            kind: "table",
            header: SG,
            rows: LG
          });
          continue
        }
        if (GG.startsWith(">")) {
          const GG = [];
          for (; wG < bG.length && bG[wG].startsWith(">");) GG.push(bG[wG].replace(/^>\s?/, "")), wG++;
          ZG.push({
            kind: "quote",
            blocks: fG(GG.join("\n"))
          });
          continue
        }
        if (VG.test(GG)) {
          const SG = [],
            LG = /^\s*\d+\./.test(GG);
          for (; wG < bG.length && !UG(bG[wG]) && (VG.test(bG[wG]) || /^\s+\S/.test(bG[wG]));) SG.push(bG[wG]), wG++;
          ZG.push({
            kind: "list",
            ordered: LG,
            items: pG(SG)
          });
          continue
        }
        const kG = [];
        for (; wG < bG.length && !UG(bG[wG]) && !/^\s*```/.test(bG[wG]) && !/^#{1,6}\s/.test(bG[wG]) && !bG[wG].startsWith(">") && !VG.test(bG[wG]) && (!bG[wG].trim().startsWith("|") || 0 !== kG.length);) kG.push(bG[wG].trim()), wG++;
        0 === kG.length && (kG.push(bG[wG].trim()), wG++), ZG.push({
          kind: "paragraph",
          text: kG.join(" ")
        })
      }
      return ZG
    }

    function QG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZG = fG(GG);
      let wG = "";
      const SG = [],
        LG = [],
        yG = new Map;
      for (const YG of ZG) {
        if ("heading" === YG.kind) {
          var kG;
          const GG = (null !== (kG = yG.get(YG.anchor)) && void 0 !== kG ? kG : 0) + 1;
          yG.set(YG.anchor, GG), GG > 1 && (YG.anchor = `${YG.anchor}-${GG}`)
        }
        if ("heading" === YG.kind && 1 === YG.level && !wG) {
          wG = YG.text;
          continue
        }
        if ("heading" === YG.kind && YG.level <= bG) {
          LG.push({
            heading: YG,
            blocks: []
          });
          continue
        }
        const GG = LG.at(-1);
        GG ? GG.blocks.push(YG) : SG.push(YG)
      }
      const UG = GG => {
        for (;
          "rule" === (null === (bG = GG.at(-1)) || void 0 === bG ? void 0 : bG.kind);) {
          var bG;
          GG.pop()
        }
      };
      UG(SG);
      for (const YG of LG) UG(YG.blocks);
      return {
        title: wG,
        intro: SG,
        sections: LG
      }
    }

    function KG(GG) {
      return [{
        heading: null,
        blocks: GG.intro
      }, ...GG.sections.map((GG => ({
        heading: GG.heading,
        blocks: GG.blocks
      })))]
    }

    function hG(GG) {
      return GG.flatMap((GG => "code" === GG.kind ? [GG] : "quote" === GG.kind ? hG(GG.blocks) : []))
    }

    function dG(GG) {
      switch (GG.kind) {
        case "heading":
        case "paragraph":
          return GG.text;
        case "code":
          return GG.code;
        case "table":
          return [GG.header, ...GG.rows].map((GG => GG.join(" "))).join(" ");
        case "list": {
          const bG = GG => GG.map((GG => `${GG.text} ${bG(GG.children)}`)).join(" ");
          return bG(GG.items)
        }
        case "quote":
          return GG.blocks.map(dG).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6502: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      g: () => yG,
      k: () => kG
    });
    ZG(6497);
    var wG = ZG(51),
      SG = ZG(4758),
      LG = ZG(1067);
    const yG = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function kG(GG, bG) {
      return GG === bG ? GG : `${GG} (${bG})`
    }

    function UG(GG) {
      const bG = [];
      let ZG = 0;
      for (const wG of GG.matchAll(yG)) {
        wG.index > ZG && bG.push(GG.slice(ZG, wG.index));
        const [, SG, yG, UG, YG, VG, pG] = wG;
        void 0 !== SG ? bG.push(kG(SG, yG)) : void 0 !== UG || void 0 !== YG ? bG.push((0, LG.jsx)("strong", {
          children: null !== UG && void 0 !== UG ? UG : YG
        }, wG.index)) : void 0 !== VG ? bG.push((0, LG.jsx)("em", {
          children: VG
        }, wG.index)) : bG.push((0, LG.jsx)("code", {
          children: pG
        }, wG.index)), ZG = wG.index + wG[0].length
      }
      return ZG < GG.length && bG.push(GG.slice(ZG)), bG
    }

    function YG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const wG = GG.map(((GG, bG) => (0, LG.jsxs)("li", {
        children: [UG(GG.text), GG.children.length > 0 && YG(GG.children, !1)]
      }, bG)));
      return bG ? (0, LG.jsx)("ol", {
        start: ZG,
        children: wG
      }) : (0, LG.jsx)("ul", {
        children: wG
      })
    }

    function VG(GG, bG) {
      switch (GG.kind) {
        case "heading":
          return GG.level <= 2 ? (0, LG.jsx)("h3", {
            children: UG(GG.text)
          }, bG) : (0, LG.jsx)("h4", {
            children: UG(GG.text)
          }, bG);
        case "paragraph":
          return (0, LG.jsx)("p", {
            children: UG(GG.text)
          }, bG);
        case "list":
          return (0, LG.jsx)(wG.Fragment, {
            children: YG(GG.items, GG.ordered)
          }, bG);
        case "quote":
          return (0, LG.jsx)("blockquote", {
            children: GG.blocks.map(((GG, bG) => VG(GG, bG)))
          }, bG);
        case "code":
          return (0, LG.jsx)("pre", {
            children: (0, LG.jsx)("code", {
              children: GG.code
            })
          }, bG);
        case "table":
          return (0, LG.jsxs)("table", {
            children: [(0, LG.jsx)("thead", {
              children: (0, LG.jsx)("tr", {
                children: GG.header.map(((GG, bG) => (0, LG.jsx)("th", {
                  children: UG(GG)
                }, bG)))
              })
            }), (0, LG.jsx)("tbody", {
              children: GG.rows.map(((GG, bG) => (0, LG.jsx)("tr", {
                children: GG.map(((GG, bG) => (0, LG.jsx)("td", {
                  children: UG(GG)
                }, bG)))
              }, bG)))
            })]
          }, bG);
        case "rule":
          return (0, LG.jsx)("hr", {}, bG)
      }
    }

    function pG(GG) {
      let {
        markdown: bG
      } = GG, ZG = 0;
      return (0, LG.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, SG.z)(bG).map(((GG, bG) => {
          if ("list" !== GG.kind || !GG.ordered) return ZG = 0, VG(GG, bG);
          const SG = ZG + 1;
          return ZG += GG.items.length, (0, LG.jsx)(wG.Fragment, {
            children: YG(GG.items, !0, SG)
          }, bG)
        }))
      })
    }
  },
  6493: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => rG,
      j: () => zG,
      f: () => oG,
      n: () => KG
    });
    var wG = ZG(1169),
      SG = ZG(6456),
      LG = ZG(4894);
    const yG = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function kG(GG) {
      return (0, LG.g)(GG, yG, (bG => !/^my/i.test(bG[0]) || !/follow $/i.test(GG.slice(0, bG.index)))).length > 0
    }
    const UG = /\byou(?:r|'re|'ll)?\b/i,
      YG = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      VG = 2;

    function pG(GG) {
      return function(GG) {
        const bG = [];
        let ZG = !1;
        for (const wG of GG.split("\n")) {
          if (/^\s*(```|~~~)/.test(wG)) {
            ZG = !ZG;
            continue
          }
          if (ZG || /^\s*>/.test(wG)) continue;
          const GG = wG.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          bG.push(...(0, SG.q)(GG))
        }
        return bG
      }(GG).filter((GG => kG(GG) || YG.test(GG) && !UG.test(GG)))
    }
    const fG = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      QG = [{
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

    function KG(GG) {
      const bG = QG.findIndex((bG => bG.name === GG));
      return -1 === bG ? QG.length : bG
    }
    const hG = 2500,
      dG = 12e4;
    class JG extends Error {
      constructor(GG) {
        super(`Studio AI chat ${GG}`), this.reason = GG
      }
    }

    function rG(GG, bG) {
      const ZG = new AbortController,
        wG = () => {
          ZG.abort()
        },
        SG = setTimeout(wG, GG);
      return null !== bG && void 0 !== bG && bG.aborted && wG(), null === bG || void 0 === bG || bG.addEventListener("abort", wG, {
        once: !0
      }), {
        signal: ZG.signal,
        clear: () => {
          clearTimeout(SG), null === bG || void 0 === bG || bG.removeEventListener("abort", wG)
        }
      }
    }

    function zG(GG, bG, ZG) {
      return new Promise(((SG, LG) => {
        const yG = new AbortController,
          kG = () => {
            yG.abort(), LG((0, wG.h)(ZG))
          };
        if (null !== ZG && void 0 !== ZG && ZG.aborted) return void kG();
        null === ZG || void 0 === ZG || ZG.addEventListener("abort", kG, {
          once: !0
        });
        const UG = QG.map((() => !1));
        let YG = null;
        const VG = QG.map((() => !1)),
          pG = QG.map((() => !1));
        QG.forEach(((wG, fG) => {
          const KG = rG(dG, yG.signal);
          XG(wG, [{
            role: "user",
            content: GG
          }], KG.signal).then((GG => {
            yG.signal.aborted || ("busy" === GG || "failed" === GG ? (VG[fG] = "busy" === GG, pG[fG] = !0) : null !== GG && (null === YG || fG < YG.rank) && (YG = {
              rank: fG,
              answer: {
                text: GG.text,
                model: wG.name
              }
            }, bG(YG.answer)))
          }), (GG => {
            yG.signal.aborted || (pG[fG] = !0, console.warn(`Studio AI: ${wG.name} couldn't be reached`, GG))
          })).finally((() => {
            KG.clear(), UG[fG] = !0, yG.signal.aborted || (() => {
              var GG, bG;
              const wG = null !== (GG = null === (bG = YG) || void 0 === bG ? void 0 : bG.rank) && void 0 !== GG ? GG : QG.length;
              UG.slice(0, wG).includes(!1) || (null === ZG || void 0 === ZG || ZG.removeEventListener("abort", kG), yG.abort(), null !== YG ? SG({
                ...YG.answer,
                isFinal: !pG.slice(0, YG.rank).includes(!0)
              }) : LG(new JG(VG.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((GG => {
            console.error("Studio AI: showing an answer failed", GG)
          }))
        }))
      }))
    }

    function EG(GG) {
      var bG, ZG;
      return "length" === (null === GG || void 0 === GG || null === (bG = GG.choices) || void 0 === bG || null === (ZG = bG[0]) || void 0 === ZG ? void 0 : ZG.finish_reason)
    }
    async function oG(GG, bG, ZG) {
      const wG = QG.find((bG => bG.name === GG));
      if (void 0 === wG) return "failed";
      const SG = rG(dG, ZG);
      try {
        const GG = await XG(wG, bG, SG.signal);
        return null !== GG && "object" === typeof GG ? GG.isCutOff ? (console.warn(`Studio AI: ${wG.name}'s answer was cut off at the token limit`), null) : {
          text: GG.text
        } : GG
      } finally {
        SG.clear()
      }
    }
    async function XG(GG, bG, ZG) {
      const wG = await fetch(fG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: GG.name,
          messages: bG,
          max_tokens: hG,
          temperature: GG.temperature,
          reasoning_effort: GG.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ZG
      });
      if (429 === wG.status) return "busy";
      if (!wG.ok) return console.warn(`Studio AI: ${GG.name} answered ${wG.status}`), "failed";
      const SG = await wG.json().catch((() => null)),
        LG = function(GG) {
          var bG, ZG, wG;
          const SG = null === GG || void 0 === GG || null === (bG = GG.choices) || void 0 === bG || null === (ZG = bG[0]) || void 0 === ZG || null === (wG = ZG.message) || void 0 === wG ? void 0 : wG.content;
          if ("string" !== typeof SG) return null;
          const LG = SG.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === LG ? null : LG
        }(SG);
      return null !== LG && function(GG) {
        const bG = pG(GG);
        return bG.length >= VG || bG.some((GG => kG(GG)))
      }(LG) ? (console.warn(`Studio AI: ${GG.name} thought out loud instead of answering`), "failed") : null === LG ? null : {
        text: LG,
        isCutOff: EG(SG)
      }
    }
  },
  6456: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => XG,
      D: () => dG,
      E: () => zG,
      G: () => oG,
      H: () => rG,
      L: () => pG,
      O: () => YG,
      Q: () => QG,
      d: () => KG,
      g: () => kG,
      k: () => yG,
      n: () => hG,
      p: () => fG,
      q: () => VG,
      t: () => LG,
      w: () => SG,
      z: () => EG
    });
    var wG = ZG(4894);
    const SG = 2e3,
      LG = 2e4;

    function yG(GG) {
      return GG.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function kG(GG) {
      return GG.replace(/\$/g, "\\$")
    }
    const UG = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function YG(GG, bG) {
      UG.lastIndex = bG;
      const ZG = UG.exec(GG);
      return ZG.index + ZG[0].length
    }

    function VG(GG) {
      return (0, wG.z)(GG, /\s+/g, (0, wG.x)(".!?")).flatMap((GG => GG.split("\n")))
    }

    function pG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG;
      const wG = [...GG.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((GG => GG.index)),
        SG = wG.filter((GG => GG < bG)),
        LG = wG.find((GG => GG >= ZG));
      return [0 === SG.length ? 0 : SG.at(-1) + 1, void 0 === LG ? GG.length : LG + 1]
    }

    function fG(GG, bG) {
      const ZG = GG.charCodeAt(bG - 1);
      return GG.slice(0, bG > 0 && bG < GG.length && ZG >= 55296 && ZG <= 56319 ? bG - 1 : bG)
    }

    function QG(GG, bG) {
      return `${bG}${GG.replace(/\\/g,"\\\\").split(bG).join(`\\${bG}`)}${bG}`
    }

    function KG(GG) {
      return GG.charAt(0).toUpperCase() + GG.slice(1)
    }

    function hG(GG) {
      return Math.round(GG).toLocaleString("en-US")
    }

    function dG(GG) {
      return GG.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((GG => "" !== GG))
    }
    const JG = 3;

    function rG(GG, bG) {
      return dG(GG).filter((GG => GG.length >= JG && !/\d/.test(GG))).map((GG => `${GG} ${bG}`))
    }

    function zG(GG) {
      return GG.split(/[\s:_]+/).filter((GG => "" !== GG)).map(yG).join("[`:_\\s]+")
    }

    function EG(GG) {
      return dG(GG.split(".").pop())
    }

    function oG(GG) {
      return GG.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function XG(GG) {
      let bG = null;
      return () => {
        const ZG = bG ??= GG();
        return ZG.catch((() => {
          bG === ZG && (bG = null)
        })), ZG
      }
    }
  },
  4894: (GG, bG, ZG) => {
    function wG(GG) {
      return {
        notAfter: GG
      }
    }
    ZG.d(bG, {
      e: () => UG,
      g: () => YG,
      j: () => kG,
      n: () => wG,
      r: () => SG,
      u: () => LG,
      x: () => yG,
      y: () => VG,
      z: () => pG
    });
    const SG = wG("\\w$."),
      LG = wG("\\w.,");

    function yG(GG) {
      return bG => UG(bG, GG)
    }

    function kG(GG) {
      return bG => !GG.test(bG.input.slice(0, bG.index))
    }

    function UG(GG, bG) {
      return GG.index > 0 && new RegExp(`[${bG}]`).test(GG.input[GG.index - 1])
    }

    function YG(GG, bG, ZG) {
      return function(GG) {
        return void 0 !== GG && "function" !== typeof GG
      }(ZG) ? function(GG, bG, ZG) {
        const wG = bG.flags.replace(/[gy]/g, ""),
          SG = new RegExp(`[^${ZG}](?:${bG.source})`, `${wG}g`),
          LG = [],
          yG = ZG => {
            const wG = ZG.index + ZG[0].length;
            return ("" === ZG[0] ? fG(GG, bG, wG) : wG) - 1
          },
          kG = new RegExp(`(?:${bG.source})`, `${wG}y`).exec(GG);
        if (kG) {
          if (LG.push(kG), !bG.global) return LG;
          SG.lastIndex = yG(kG)
        }
        for (let UG = SG.exec(GG); UG; UG = SG.exec(GG)) {
          const ZG = fG(GG, bG, UG.index) - UG.index;
          if (UG[0] = UG[0].slice(ZG), UG.index += ZG, LG.push(UG), !bG.global) break;
          SG.lastIndex = yG(UG)
        }
        return LG
      }(GG, bG, ZG.notAfter) : function(GG, bG, ZG) {
        const wG = new RegExp(bG.source, `${bG.flags.replace(/[gy]/g,"")}g`),
          SG = [];
        for (let LG = wG.exec(GG); LG; LG = wG.exec(GG))
          if (!ZG || ZG(LG)) {
            if (SG.push(LG), !bG.global) break;
            "" === LG[0] && (wG.lastIndex = fG(GG, bG, wG.lastIndex))
          } else wG.lastIndex = fG(GG, bG, LG.index);
        return SG
      }(GG, bG, ZG)
    }

    function VG(GG, bG, ZG, wG) {
      let SG = "",
        LG = 0;
      for (const yG of YG(GG, bG, ZG)) SG += GG.slice(LG, yG.index) + wG(yG), LG = yG.index + yG[0].length;
      return SG + GG.slice(LG)
    }

    function pG(GG, bG, ZG) {
      const wG = [];
      let SG = 0;
      for (const LG of YG(GG, bG, ZG)) wG.push(GG.slice(SG, LG.index)), SG = LG.index + LG[0].length;
      return [...wG, GG.slice(SG)]
    }

    function fG(GG, bG, ZG) {
      var wG;
      return ZG + (bG.unicode && (null !== (wG = GG.codePointAt(ZG)) && void 0 !== wG ? wG : 0) > 65535 ? 2 : 1)
    }
  },
  6497: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);