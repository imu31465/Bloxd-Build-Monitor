export const id = 77;
export const ids = [77];
export const modules = {
  4396: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      g: () => PU,
      h: () => QU,
      k: () => hU,
      l: () => TU,
      m: () => pU,
      n: () => EU,
      o: () => CU,
      q: () => uU,
      u: () => jU
    });
    const tU = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function pU(UU) {
      try {
        return decodeURIComponent(UU.slice(1))
      } catch {
        return UU.slice(1)
      }
    }

    function EU(UU) {
      return UU.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const PU = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${tU.source}`, "g");

    function TU(UU, RU) {
      return 2 === UU.length ? RU.replace(/^ (.*) $/, "$1") : RU
    }

    function qU(UU) {
      return "" === UU.trim()
    }

    function KU(UU) {
      const RU = [];
      for (const gU of UU.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) RU.length > 0 && RU[RU.length - 1].endsWith("\\") ? RU[RU.length - 1] += `|${gU}` : RU.push(gU);
      return RU.map((UU => UU.trim().replaceAll("\\|", "|")))
    }
    const cU = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function GU(UU) {
      const RU = [],
        gU = [{
          indent: -1,
          items: RU
        }];
      let tU = null;
      for (const pU of UU) {
        const UU = pU.match(cU);
        if (!UU) {
          tU && (tU.text += ` ${pU.trim()}`);
          continue
        }
        const RU = UU[1].replace(/\t/g, "  ").length;
        for (; RU <= gU[gU.length - 1].indent;) gU.pop();
        tU = {
          text: UU[3].trim(),
          children: []
        }, gU[gU.length - 1].items.push(tU), gU.push({
          indent: RU,
          items: tU.children
        })
      }
      return RU
    }

    function jU(UU) {
      const RU = UU.replace(/\r\n/g, "\n").split("\n"),
        gU = [];
      let tU = 0;
      for (; tU < RU.length;) {
        const UU = RU[tU];
        if (qU(UU)) {
          tU++;
          continue
        }
        const pU = UU.match(/^\s*```\s*(\w*)\s*$/);
        if (pU) {
          const UU = [];
          for (tU++; tU < RU.length && !/^\s*```\s*$/.test(RU[tU]);) UU.push(RU[tU]), tU++;
          tU++, gU.push({
            kind: "code",
            lang: pU[1] || "text",
            code: UU.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const PU = UU.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (PU) {
          const UU = PU[2].trim();
          gU.push({
            kind: "heading",
            level: PU[1].length,
            text: UU,
            anchor: EU(UU)
          }), tU++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(UU)) {
          gU.push({
            kind: "rule"
          }), tU++;
          continue
        }
        if (UU.trim().startsWith("|") && tU + 1 < RU.length && /^\s*\|[\s:|-]+\|\s*$/.test(RU[tU + 1])) {
          const pU = KU(UU),
            EU = [];
          for (tU += 2; tU < RU.length && RU[tU].trim().startsWith("|");) EU.push(KU(RU[tU])), tU++;
          gU.push({
            kind: "table",
            header: pU,
            rows: EU
          });
          continue
        }
        if (UU.startsWith(">")) {
          const UU = [];
          for (; tU < RU.length && RU[tU].startsWith(">");) UU.push(RU[tU].replace(/^>\s?/, "")), tU++;
          gU.push({
            kind: "quote",
            blocks: jU(UU.join("\n"))
          });
          continue
        }
        if (cU.test(UU)) {
          const pU = [],
            EU = /^\s*\d+\./.test(UU);
          for (; tU < RU.length && !qU(RU[tU]) && (cU.test(RU[tU]) || /^\s+\S/.test(RU[tU]));) pU.push(RU[tU]), tU++;
          gU.push({
            kind: "list",
            ordered: EU,
            items: GU(pU)
          });
          continue
        }
        const TU = [];
        for (; tU < RU.length && !qU(RU[tU]) && !/^\s*```/.test(RU[tU]) && !/^#{1,6}\s/.test(RU[tU]) && !RU[tU].startsWith(">") && !cU.test(RU[tU]) && (!RU[tU].trim().startsWith("|") || 0 !== TU.length);) TU.push(RU[tU].trim()), tU++;
        0 === TU.length && (TU.push(RU[tU].trim()), tU++), gU.push({
          kind: "paragraph",
          text: TU.join(" ")
        })
      }
      return gU
    }

    function uU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gU = jU(UU);
      let tU = "";
      const pU = [],
        EU = [],
        PU = new Map;
      for (const KU of gU) {
        if ("heading" === KU.kind) {
          var TU;
          const UU = (null !== (TU = PU.get(KU.anchor)) && void 0 !== TU ? TU : 0) + 1;
          PU.set(KU.anchor, UU), UU > 1 && (KU.anchor = `${KU.anchor}-${UU}`)
        }
        if ("heading" === KU.kind && 1 === KU.level && !tU) {
          tU = KU.text;
          continue
        }
        if ("heading" === KU.kind && KU.level <= RU) {
          EU.push({
            heading: KU,
            blocks: []
          });
          continue
        }
        const UU = EU.at(-1);
        UU ? UU.blocks.push(KU) : pU.push(KU)
      }
      const qU = UU => {
        for (;
          "rule" === (null === (RU = UU.at(-1)) || void 0 === RU ? void 0 : RU.kind);) {
          var RU;
          UU.pop()
        }
      };
      qU(pU);
      for (const KU of EU) qU(KU.blocks);
      return {
        title: tU,
        intro: pU,
        sections: EU
      }
    }

    function CU(UU) {
      return [{
        heading: null,
        blocks: UU.intro
      }, ...UU.sections.map((UU => ({
        heading: UU.heading,
        blocks: UU.blocks
      })))]
    }

    function hU(UU) {
      return UU.flatMap((UU => "code" === UU.kind ? [UU] : "quote" === UU.kind ? hU(UU.blocks) : []))
    }

    function QU(UU) {
      switch (UU.kind) {
        case "heading":
        case "paragraph":
          return UU.text;
        case "code":
          return UU.code;
        case "table":
          return [UU.header, ...UU.rows].map((UU => UU.join(" "))).join(" ");
        case "list": {
          const RU = UU => UU.map((UU => `${UU.text} ${RU(UU.children)}`)).join(" ");
          return RU(UU.items)
        }
        case "quote":
          return UU.blocks.map(QU).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6180: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      e: () => PU,
      h: () => TU
    });
    gU(6171);
    var tU = gU(56),
      pU = gU(4396),
      EU = gU(1090);
    const PU = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function TU(UU, RU) {
      return UU === RU ? UU : `${UU} (${RU})`
    }

    function qU(UU) {
      const RU = [];
      let gU = 0;
      for (const tU of UU.matchAll(PU)) {
        tU.index > gU && RU.push(UU.slice(gU, tU.index));
        const [, pU, PU, qU, KU, cU, GU] = tU;
        void 0 !== pU ? RU.push(TU(pU, PU)) : void 0 !== qU || void 0 !== KU ? RU.push((0, EU.jsx)("strong", {
          children: null !== qU && void 0 !== qU ? qU : KU
        }, tU.index)) : void 0 !== cU ? RU.push((0, EU.jsx)("em", {
          children: cU
        }, tU.index)) : RU.push((0, EU.jsx)("code", {
          children: GU
        }, tU.index)), gU = tU.index + tU[0].length
      }
      return gU < UU.length && RU.push(UU.slice(gU)), RU
    }

    function KU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const tU = UU.map(((UU, RU) => (0, EU.jsxs)("li", {
        children: [qU(UU.text), UU.children.length > 0 && KU(UU.children, !1)]
      }, RU)));
      return RU ? (0, EU.jsx)("ol", {
        start: gU,
        children: tU
      }) : (0, EU.jsx)("ul", {
        children: tU
      })
    }

    function cU(UU, RU) {
      switch (UU.kind) {
        case "heading":
          return UU.level <= 2 ? (0, EU.jsx)("h3", {
            children: qU(UU.text)
          }, RU) : (0, EU.jsx)("h4", {
            children: qU(UU.text)
          }, RU);
        case "paragraph":
          return (0, EU.jsx)("p", {
            children: qU(UU.text)
          }, RU);
        case "list":
          return (0, EU.jsx)(tU.Fragment, {
            children: KU(UU.items, UU.ordered)
          }, RU);
        case "quote":
          return (0, EU.jsx)("blockquote", {
            children: UU.blocks.map(((UU, RU) => cU(UU, RU)))
          }, RU);
        case "code":
          return (0, EU.jsx)("pre", {
            children: (0, EU.jsx)("code", {
              children: UU.code
            })
          }, RU);
        case "table":
          return (0, EU.jsxs)("table", {
            children: [(0, EU.jsx)("thead", {
              children: (0, EU.jsx)("tr", {
                children: UU.header.map(((UU, RU) => (0, EU.jsx)("th", {
                  children: qU(UU)
                }, RU)))
              })
            }), (0, EU.jsx)("tbody", {
              children: UU.rows.map(((UU, RU) => (0, EU.jsx)("tr", {
                children: UU.map(((UU, RU) => (0, EU.jsx)("td", {
                  children: qU(UU)
                }, RU)))
              }, RU)))
            })]
          }, RU);
        case "rule":
          return (0, EU.jsx)("hr", {}, RU)
      }
    }

    function GU(UU) {
      let {
        markdown: RU
      } = UU, gU = 0;
      return (0, EU.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, pU.u)(RU).map(((UU, RU) => {
          if ("list" !== UU.kind || !UU.ordered) return gU = 0, cU(UU, RU);
          const pU = gU + 1;
          return gU += UU.items.length, (0, EU.jsx)(tU.Fragment, {
            children: KU(UU.items, !0, pU)
          }, RU)
        }))
      })
    }
  },
  6164: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => WU,
      k: () => fU,
      g: () => mU,
      l: () => CU
    });
    var tU = gU(1704),
      pU = gU(6133),
      EU = gU(4525);
    const PU = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function TU(UU) {
      return (0, EU.c)(UU, PU, (RU => !/^my/i.test(RU[0]) || !/follow $/i.test(UU.slice(0, RU.index)))).length > 0
    }
    const qU = /\byou(?:r|'re|'ll)?\b/i,
      KU = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      cU = 2;

    function GU(UU) {
      return function(UU) {
        const RU = [];
        let gU = !1;
        for (const tU of UU.split("\n")) {
          if (/^\s*(```|~~~)/.test(tU)) {
            gU = !gU;
            continue
          }
          if (gU || /^\s*>/.test(tU)) continue;
          const UU = tU.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          RU.push(...(0, pU.p)(UU))
        }
        return RU
      }(UU).filter((UU => TU(UU) || KU.test(UU) && !qU.test(UU)))
    }
    const jU = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      uU = [{
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

    function CU(UU) {
      const RU = uU.findIndex((RU => RU.name === UU));
      return -1 === RU ? uU.length : RU
    }
    const hU = 2500,
      QU = 12e4;
    class eU extends Error {
      constructor(UU) {
        super(`Studio AI chat ${UU}`), this.reason = UU
      }
    }

    function WU(UU, RU) {
      const gU = new AbortController,
        tU = () => {
          gU.abort()
        },
        pU = setTimeout(tU, UU);
      return null !== RU && void 0 !== RU && RU.aborted && tU(), null === RU || void 0 === RU || RU.addEventListener("abort", tU, {
        once: !0
      }), {
        signal: gU.signal,
        clear: () => {
          clearTimeout(pU), null === RU || void 0 === RU || RU.removeEventListener("abort", tU)
        }
      }
    }

    function fU(UU, RU, gU) {
      return new Promise(((pU, EU) => {
        const PU = new AbortController,
          TU = () => {
            PU.abort(), EU((0, tU.g)(gU))
          };
        if (null !== gU && void 0 !== gU && gU.aborted) return void TU();
        null === gU || void 0 === gU || gU.addEventListener("abort", TU, {
          once: !0
        });
        const qU = uU.map((() => !1));
        let KU = null;
        const cU = uU.map((() => !1)),
          GU = uU.map((() => !1));
        uU.forEach(((tU, jU) => {
          const CU = WU(QU, PU.signal);
          IU(tU, [{
            role: "user",
            content: UU
          }], CU.signal).then((UU => {
            PU.signal.aborted || ("busy" === UU || "failed" === UU ? (cU[jU] = "busy" === UU, GU[jU] = !0) : null !== UU && (null === KU || jU < KU.rank) && (KU = {
              rank: jU,
              answer: {
                text: UU.text,
                model: tU.name
              }
            }, RU(KU.answer)))
          }), (UU => {
            PU.signal.aborted || (GU[jU] = !0, console.warn(`Studio AI: ${tU.name} couldn't be reached`, UU))
          })).finally((() => {
            CU.clear(), qU[jU] = !0, PU.signal.aborted || (() => {
              var UU, RU;
              const tU = null !== (UU = null === (RU = KU) || void 0 === RU ? void 0 : RU.rank) && void 0 !== UU ? UU : uU.length;
              qU.slice(0, tU).includes(!1) || (null === gU || void 0 === gU || gU.removeEventListener("abort", TU), PU.abort(), null !== KU ? pU({
                ...KU.answer,
                isFinal: !GU.slice(0, KU.rank).includes(!0)
              }) : EU(new eU(cU.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((UU => {
            console.error("Studio AI: showing an answer failed", UU)
          }))
        }))
      }))
    }

    function xU(UU) {
      var RU, gU;
      return "length" === (null === UU || void 0 === UU || null === (RU = UU.choices) || void 0 === RU || null === (gU = RU[0]) || void 0 === gU ? void 0 : gU.finish_reason)
    }
    async function mU(UU, RU, gU) {
      const tU = uU.find((RU => RU.name === UU));
      if (void 0 === tU) return "failed";
      const pU = WU(QU, gU);
      try {
        const UU = await IU(tU, RU, pU.signal);
        return null !== UU && "object" === typeof UU ? UU.isCutOff ? (console.warn(`Studio AI: ${tU.name}'s answer was cut off at the token limit`), null) : {
          text: UU.text
        } : UU
      } finally {
        pU.clear()
      }
    }
    async function IU(UU, RU, gU) {
      const tU = await fetch(jU, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: UU.name,
          messages: RU,
          max_tokens: hU,
          temperature: UU.temperature,
          reasoning_effort: UU.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: gU
      });
      if (429 === tU.status) return "busy";
      if (!tU.ok) return console.warn(`Studio AI: ${UU.name} answered ${tU.status}`), "failed";
      const pU = await tU.json().catch((() => null)),
        EU = function(UU) {
          var RU, gU, tU;
          const pU = null === UU || void 0 === UU || null === (RU = UU.choices) || void 0 === RU || null === (gU = RU[0]) || void 0 === gU || null === (tU = gU.message) || void 0 === tU ? void 0 : tU.content;
          if ("string" !== typeof pU) return null;
          const EU = pU.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === EU ? null : EU
        }(pU);
      return null !== EU && function(UU) {
        const RU = GU(UU);
        return RU.length >= cU || RU.some((UU => TU(UU)))
      }(EU) ? (console.warn(`Studio AI: ${UU.name} thought out loud instead of answering`), "failed") : null === EU ? null : {
        text: EU,
        isCutOff: xU(pU)
      }
    }
  },
  6133: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => IU,
      G: () => QU,
      I: () => fU,
      J: () => mU,
      L: () => WU,
      M: () => GU,
      Q: () => KU,
      U: () => uU,
      b: () => CU,
      e: () => TU,
      h: () => PU,
      i: () => hU,
      m: () => jU,
      p: () => cU,
      t: () => EU,
      v: () => pU,
      z: () => xU
    });
    var tU = gU(4525);
    const pU = 2e3,
      EU = 2e4;

    function PU(UU) {
      return UU.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function TU(UU) {
      return UU.replace(/\$/g, "\\$")
    }
    const qU = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function KU(UU, RU) {
      qU.lastIndex = RU;
      const gU = qU.exec(UU);
      return gU.index + gU[0].length
    }

    function cU(UU) {
      return (0, tU.p)(UU, /\s+/g, (0, tU.m)(".!?")).flatMap((UU => UU.split("\n")))
    }

    function GU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU;
      const tU = [...UU.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((UU => UU.index)),
        pU = tU.filter((UU => UU < RU)),
        EU = tU.find((UU => UU >= gU));
      return [0 === pU.length ? 0 : pU.at(-1) + 1, void 0 === EU ? UU.length : EU + 1]
    }

    function jU(UU, RU) {
      const gU = UU.charCodeAt(RU - 1);
      return UU.slice(0, RU > 0 && RU < UU.length && gU >= 55296 && gU <= 56319 ? RU - 1 : RU)
    }

    function uU(UU, RU) {
      return `${RU}${UU.replace(/\\/g,"\\\\").split(RU).join(`\\${RU}`)}${RU}`
    }

    function CU(UU) {
      return UU.charAt(0).toUpperCase() + UU.slice(1)
    }

    function hU(UU) {
      return Math.round(UU).toLocaleString("en-US")
    }

    function QU(UU) {
      return UU.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((UU => "" !== UU))
    }
    const eU = 3;

    function WU(UU, RU) {
      return QU(UU).filter((UU => UU.length >= eU && !/\d/.test(UU))).map((UU => `${UU} ${RU}`))
    }

    function fU(UU) {
      return UU.split(/[\s:_]+/).filter((UU => "" !== UU)).map(PU).join("[`:_\\s]+")
    }

    function xU(UU) {
      return QU(UU.split(".").pop())
    }

    function mU(UU) {
      return UU.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function IU(UU) {
      let RU = null;
      return () => {
        const gU = RU ??= UU();
        return gU.catch((() => {
          RU === gU && (RU = null)
        })), gU
      }
    }
  },
  4525: (UU, RU, gU) => {
    function tU(UU) {
      return {
        notAfter: UU
      }
    }
    gU.d(RU, {
      b: () => qU,
      c: () => KU,
      e: () => TU,
      f: () => tU,
      h: () => pU,
      k: () => EU,
      m: () => PU,
      o: () => cU,
      p: () => GU
    });
    const pU = tU("\\w$."),
      EU = tU("\\w.,");

    function PU(UU) {
      return RU => qU(RU, UU)
    }

    function TU(UU) {
      return RU => !UU.test(RU.input.slice(0, RU.index))
    }

    function qU(UU, RU) {
      return UU.index > 0 && new RegExp(`[${RU}]`).test(UU.input[UU.index - 1])
    }

    function KU(UU, RU, gU) {
      return function(UU) {
        return void 0 !== UU && "function" !== typeof UU
      }(gU) ? function(UU, RU, gU) {
        const tU = RU.flags.replace(/[gy]/g, ""),
          pU = new RegExp(`[^${gU}](?:${RU.source})`, `${tU}g`),
          EU = [],
          PU = gU => {
            const tU = gU.index + gU[0].length;
            return ("" === gU[0] ? jU(UU, RU, tU) : tU) - 1
          },
          TU = new RegExp(`(?:${RU.source})`, `${tU}y`).exec(UU);
        if (TU) {
          if (EU.push(TU), !RU.global) return EU;
          pU.lastIndex = PU(TU)
        }
        for (let qU = pU.exec(UU); qU; qU = pU.exec(UU)) {
          const gU = jU(UU, RU, qU.index) - qU.index;
          if (qU[0] = qU[0].slice(gU), qU.index += gU, EU.push(qU), !RU.global) break;
          pU.lastIndex = PU(qU)
        }
        return EU
      }(UU, RU, gU.notAfter) : function(UU, RU, gU) {
        const tU = new RegExp(RU.source, `${RU.flags.replace(/[gy]/g,"")}g`),
          pU = [];
        for (let EU = tU.exec(UU); EU; EU = tU.exec(UU))
          if (!gU || gU(EU)) {
            if (pU.push(EU), !RU.global) break;
            "" === EU[0] && (tU.lastIndex = jU(UU, RU, tU.lastIndex))
          } else tU.lastIndex = jU(UU, RU, EU.index);
        return pU
      }(UU, RU, gU)
    }

    function cU(UU, RU, gU, tU) {
      let pU = "",
        EU = 0;
      for (const PU of KU(UU, RU, gU)) pU += UU.slice(EU, PU.index) + tU(PU), EU = PU.index + PU[0].length;
      return pU + UU.slice(EU)
    }

    function GU(UU, RU, gU) {
      const tU = [];
      let pU = 0;
      for (const EU of KU(UU, RU, gU)) tU.push(UU.slice(pU, EU.index)), pU = EU.index + EU[0].length;
      return [...tU, UU.slice(pU)]
    }

    function jU(UU, RU, gU) {
      var tU;
      return gU + (RU.unicode && (null !== (tU = UU.codePointAt(gU)) && void 0 !== tU ? tU : 0) > 65535 ? 2 : 1)
    }
  },
  6171: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);