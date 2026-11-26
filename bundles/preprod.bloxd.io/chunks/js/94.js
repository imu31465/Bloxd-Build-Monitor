export const id = 94;
export const ids = [94];
export const modules = {
  5262: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      e: () => AU,
      i: () => tU,
      k: () => aU,
      l: () => FU,
      n: () => yU,
      r: () => QU,
      u: () => pU,
      w: () => IU,
      y: () => NU
    });
    const cU = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function yU(UU) {
      try {
        return decodeURIComponent(UU.slice(1))
      } catch {
        return UU.slice(1)
      }
    }

    function QU(UU) {
      return UU.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const AU = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${cU.source}`, "g");

    function FU(UU, XU) {
      return 2 === UU.length ? XU.replace(/^ (.*) $/, "$1") : XU
    }

    function oU(UU) {
      return "" === UU.trim()
    }

    function DU(UU) {
      const XU = [];
      for (const zU of UU.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) XU.length > 0 && XU[XU.length - 1].endsWith("\\") ? XU[XU.length - 1] += `|${zU}` : XU.push(zU);
      return XU.map((UU => UU.trim().replaceAll("\\|", "|")))
    }
    const EU = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function YU(UU) {
      const XU = [],
        zU = [{
          indent: -1,
          items: XU
        }];
      let cU = null;
      for (const yU of UU) {
        const UU = yU.match(EU);
        if (!UU) {
          cU && (cU.text += ` ${yU.trim()}`);
          continue
        }
        const XU = UU[1].replace(/\t/g, "  ").length;
        for (; XU <= zU[zU.length - 1].indent;) zU.pop();
        cU = {
          text: UU[3].trim(),
          children: []
        }, zU[zU.length - 1].items.push(cU), zU.push({
          indent: XU,
          items: cU.children
        })
      }
      return XU
    }

    function NU(UU) {
      const XU = UU.replace(/\r\n/g, "\n").split("\n"),
        zU = [];
      let cU = 0;
      for (; cU < XU.length;) {
        const UU = XU[cU];
        if (oU(UU)) {
          cU++;
          continue
        }
        const yU = UU.match(/^\s*```\s*(\w*)\s*$/);
        if (yU) {
          const UU = [];
          for (cU++; cU < XU.length && !/^\s*```\s*$/.test(XU[cU]);) UU.push(XU[cU]), cU++;
          cU++, zU.push({
            kind: "code",
            lang: yU[1] || "text",
            code: UU.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const AU = UU.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (AU) {
          const UU = AU[2].trim();
          zU.push({
            kind: "heading",
            level: AU[1].length,
            text: UU,
            anchor: QU(UU)
          }), cU++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(UU)) {
          zU.push({
            kind: "rule"
          }), cU++;
          continue
        }
        if (UU.trim().startsWith("|") && cU + 1 < XU.length && /^\s*\|[\s:|-]+\|\s*$/.test(XU[cU + 1])) {
          const yU = DU(UU),
            QU = [];
          for (cU += 2; cU < XU.length && XU[cU].trim().startsWith("|");) QU.push(DU(XU[cU])), cU++;
          zU.push({
            kind: "table",
            header: yU,
            rows: QU
          });
          continue
        }
        if (UU.startsWith(">")) {
          const UU = [];
          for (; cU < XU.length && XU[cU].startsWith(">");) UU.push(XU[cU].replace(/^>\s?/, "")), cU++;
          zU.push({
            kind: "quote",
            blocks: NU(UU.join("\n"))
          });
          continue
        }
        if (EU.test(UU)) {
          const yU = [],
            QU = /^\s*\d+\./.test(UU);
          for (; cU < XU.length && !oU(XU[cU]) && (EU.test(XU[cU]) || /^\s+\S/.test(XU[cU]));) yU.push(XU[cU]), cU++;
          zU.push({
            kind: "list",
            ordered: QU,
            items: YU(yU)
          });
          continue
        }
        const FU = [];
        for (; cU < XU.length && !oU(XU[cU]) && !/^\s*```/.test(XU[cU]) && !/^#{1,6}\s/.test(XU[cU]) && !XU[cU].startsWith(">") && !EU.test(XU[cU]) && (!XU[cU].trim().startsWith("|") || 0 !== FU.length);) FU.push(XU[cU].trim()), cU++;
        0 === FU.length && (FU.push(XU[cU].trim()), cU++), zU.push({
          kind: "paragraph",
          text: FU.join(" ")
        })
      }
      return zU
    }

    function IU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const zU = NU(UU);
      let cU = "";
      const yU = [],
        QU = [],
        AU = new Map;
      for (const DU of zU) {
        if ("heading" === DU.kind) {
          var FU;
          const UU = (null !== (FU = AU.get(DU.anchor)) && void 0 !== FU ? FU : 0) + 1;
          AU.set(DU.anchor, UU), UU > 1 && (DU.anchor = `${DU.anchor}-${UU}`)
        }
        if ("heading" === DU.kind && 1 === DU.level && !cU) {
          cU = DU.text;
          continue
        }
        if ("heading" === DU.kind && DU.level <= XU) {
          QU.push({
            heading: DU,
            blocks: []
          });
          continue
        }
        const UU = QU.at(-1);
        UU ? UU.blocks.push(DU) : yU.push(DU)
      }
      const oU = UU => {
        for (;
          "rule" === (null === (XU = UU.at(-1)) || void 0 === XU ? void 0 : XU.kind);) {
          var XU;
          UU.pop()
        }
      };
      oU(yU);
      for (const DU of QU) oU(DU.blocks);
      return {
        title: cU,
        intro: yU,
        sections: QU
      }
    }

    function pU(UU) {
      return [{
        heading: null,
        blocks: UU.intro
      }, ...UU.sections.map((UU => ({
        heading: UU.heading,
        blocks: UU.blocks
      })))]
    }

    function aU(UU) {
      return UU.flatMap((UU => "code" === UU.kind ? [UU] : "quote" === UU.kind ? aU(UU.blocks) : []))
    }

    function tU(UU) {
      switch (UU.kind) {
        case "heading":
        case "paragraph":
          return UU.text;
        case "code":
          return UU.code;
        case "table":
          return [UU.header, ...UU.rows].map((UU => UU.join(" "))).join(" ");
        case "list": {
          const XU = UU => UU.map((UU => `${UU.text} ${XU(UU.children)}`)).join(" ");
          return XU(UU.items)
        }
        case "quote":
          return UU.blocks.map(tU).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7082: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU,
      g: () => AU,
      j: () => FU
    });
    zU(7079);
    var cU = zU(61),
      yU = zU(5262),
      QU = zU(1305);
    const AU = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function FU(UU, XU) {
      return UU === XU ? UU : `${UU} (${XU})`
    }

    function oU(UU) {
      const XU = [];
      let zU = 0;
      for (const cU of UU.matchAll(AU)) {
        cU.index > zU && XU.push(UU.slice(zU, cU.index));
        const [, yU, AU, oU, DU, EU, YU] = cU;
        void 0 !== yU ? XU.push(FU(yU, AU)) : void 0 !== oU || void 0 !== DU ? XU.push((0, QU.jsx)("strong", {
          children: null !== oU && void 0 !== oU ? oU : DU
        }, cU.index)) : void 0 !== EU ? XU.push((0, QU.jsx)("em", {
          children: EU
        }, cU.index)) : XU.push((0, QU.jsx)("code", {
          children: YU
        }, cU.index)), zU = cU.index + cU[0].length
      }
      return zU < UU.length && XU.push(UU.slice(zU)), XU
    }

    function DU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const cU = UU.map(((UU, XU) => (0, QU.jsxs)("li", {
        children: [oU(UU.text), UU.children.length > 0 && DU(UU.children, !1)]
      }, XU)));
      return XU ? (0, QU.jsx)("ol", {
        start: zU,
        children: cU
      }) : (0, QU.jsx)("ul", {
        children: cU
      })
    }

    function EU(UU, XU) {
      switch (UU.kind) {
        case "heading":
          return UU.level <= 2 ? (0, QU.jsx)("h3", {
            children: oU(UU.text)
          }, XU) : (0, QU.jsx)("h4", {
            children: oU(UU.text)
          }, XU);
        case "paragraph":
          return (0, QU.jsx)("p", {
            children: oU(UU.text)
          }, XU);
        case "list":
          return (0, QU.jsx)(cU.Fragment, {
            children: DU(UU.items, UU.ordered)
          }, XU);
        case "quote":
          return (0, QU.jsx)("blockquote", {
            children: UU.blocks.map(((UU, XU) => EU(UU, XU)))
          }, XU);
        case "code":
          return (0, QU.jsx)("pre", {
            children: (0, QU.jsx)("code", {
              children: UU.code
            })
          }, XU);
        case "table":
          return (0, QU.jsxs)("table", {
            children: [(0, QU.jsx)("thead", {
              children: (0, QU.jsx)("tr", {
                children: UU.header.map(((UU, XU) => (0, QU.jsx)("th", {
                  children: oU(UU)
                }, XU)))
              })
            }), (0, QU.jsx)("tbody", {
              children: UU.rows.map(((UU, XU) => (0, QU.jsx)("tr", {
                children: UU.map(((UU, XU) => (0, QU.jsx)("td", {
                  children: oU(UU)
                }, XU)))
              }, XU)))
            })]
          }, XU);
        case "rule":
          return (0, QU.jsx)("hr", {}, XU)
      }
    }

    function YU(UU) {
      let {
        markdown: XU
      } = UU, zU = 0;
      return (0, QU.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, yU.y)(XU).map(((UU, XU) => {
          if ("list" !== UU.kind || !UU.ordered) return zU = 0, EU(UU, XU);
          const yU = zU + 1;
          return zU += UU.items.length, (0, QU.jsx)(cU.Fragment, {
            children: DU(UU.items, !0, yU)
          }, XU)
        }))
      })
    }
  },
  7070: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => kU,
      h: () => GU,
      e: () => ZU,
      k: () => pU
    });
    var cU = zU(1220),
      yU = zU(7031),
      QU = zU(5387);
    const AU = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function FU(UU) {
      return (0, QU.e)(UU, AU, (XU => !/^my/i.test(XU[0]) || !/follow $/i.test(UU.slice(0, XU.index)))).length > 0
    }
    const oU = /\byou(?:r|'re|'ll)?\b/i,
      DU = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      EU = 2;

    function YU(UU) {
      return function(UU) {
        const XU = [];
        let zU = !1;
        for (const cU of UU.split("\n")) {
          if (/^\s*(```|~~~)/.test(cU)) {
            zU = !zU;
            continue
          }
          if (zU || /^\s*>/.test(cU)) continue;
          const UU = cU.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          XU.push(...(0, yU.p)(UU))
        }
        return XU
      }(UU).filter((UU => FU(UU) || DU.test(UU) && !oU.test(UU)))
    }
    const NU = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      IU = [{
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

    function pU(UU) {
      const XU = IU.findIndex((XU => XU.name === UU));
      return -1 === XU ? IU.length : XU
    }
    const aU = 2500,
      tU = 12e4;
    class gU extends Error {
      constructor(UU) {
        super(`Studio AI chat ${UU}`), this.reason = UU
      }
    }

    function kU(UU, XU) {
      const zU = new AbortController,
        cU = () => {
          zU.abort()
        },
        yU = setTimeout(cU, UU);
      return null !== XU && void 0 !== XU && XU.aborted && cU(), null === XU || void 0 === XU || XU.addEventListener("abort", cU, {
        once: !0
      }), {
        signal: zU.signal,
        clear: () => {
          clearTimeout(yU), null === XU || void 0 === XU || XU.removeEventListener("abort", cU)
        }
      }
    }

    function GU(UU, XU, zU) {
      return new Promise(((yU, QU) => {
        const AU = new AbortController,
          FU = () => {
            AU.abort(), QU((0, cU.e)(zU))
          };
        if (null !== zU && void 0 !== zU && zU.aborted) return void FU();
        null === zU || void 0 === zU || zU.addEventListener("abort", FU, {
          once: !0
        });
        const oU = IU.map((() => !1));
        let DU = null;
        const EU = IU.map((() => !1)),
          YU = IU.map((() => !1));
        IU.forEach(((cU, NU) => {
          const pU = kU(tU, AU.signal);
          RU(cU, [{
            role: "user",
            content: UU
          }], pU.signal).then((UU => {
            AU.signal.aborted || ("busy" === UU || "failed" === UU ? (EU[NU] = "busy" === UU, YU[NU] = !0) : null !== UU && (null === DU || NU < DU.rank) && (DU = {
              rank: NU,
              answer: {
                text: UU.text,
                model: cU.name
              }
            }, XU(DU.answer)))
          }), (UU => {
            AU.signal.aborted || (YU[NU] = !0, console.warn(`Studio AI: ${cU.name} couldn't be reached`, UU))
          })).finally((() => {
            pU.clear(), oU[NU] = !0, AU.signal.aborted || (() => {
              var UU, XU;
              const cU = null !== (UU = null === (XU = DU) || void 0 === XU ? void 0 : XU.rank) && void 0 !== UU ? UU : IU.length;
              oU.slice(0, cU).includes(!1) || (null === zU || void 0 === zU || zU.removeEventListener("abort", FU), AU.abort(), null !== DU ? yU({
                ...DU.answer,
                isFinal: !YU.slice(0, DU.rank).includes(!0)
              }) : QU(new gU(EU.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((UU => {
            console.error("Studio AI: showing an answer failed", UU)
          }))
        }))
      }))
    }

    function BU(UU) {
      var XU, zU;
      return "length" === (null === UU || void 0 === UU || null === (XU = UU.choices) || void 0 === XU || null === (zU = XU[0]) || void 0 === zU ? void 0 : zU.finish_reason)
    }
    async function ZU(UU, XU, zU) {
      const cU = IU.find((XU => XU.name === UU));
      if (void 0 === cU) return "failed";
      const yU = kU(tU, zU);
      try {
        const UU = await RU(cU, XU, yU.signal);
        return null !== UU && "object" === typeof UU ? UU.isCutOff ? (console.warn(`Studio AI: ${cU.name}'s answer was cut off at the token limit`), null) : {
          text: UU.text
        } : UU
      } finally {
        yU.clear()
      }
    }
    async function RU(UU, XU, zU) {
      const cU = await fetch(NU, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: UU.name,
          messages: XU,
          max_tokens: aU,
          temperature: UU.temperature,
          reasoning_effort: UU.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: zU
      });
      if (429 === cU.status) return "busy";
      if (!cU.ok) return console.warn(`Studio AI: ${UU.name} answered ${cU.status}`), "failed";
      const yU = await cU.json().catch((() => null)),
        QU = function(UU) {
          var XU, zU, cU;
          const yU = null === UU || void 0 === UU || null === (XU = UU.choices) || void 0 === XU || null === (zU = XU[0]) || void 0 === zU || null === (cU = zU.message) || void 0 === cU ? void 0 : cU.content;
          if ("string" !== typeof yU) return null;
          const QU = yU.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === QU ? null : QU
        }(yU);
      return null !== QU && function(UU) {
        const XU = YU(UU);
        return XU.length >= EU || XU.some((UU => FU(UU)))
      }(QU) ? (console.warn(`Studio AI: ${UU.name} thought out loud instead of answering`), "failed") : null === QU ? null : {
        text: QU,
        isCutOff: BU(yU)
      }
    }
  },
  7031: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => RU,
      E: () => tU,
      G: () => GU,
      K: () => ZU,
      O: () => kU,
      R: () => YU,
      U: () => DU,
      W: () => IU,
      b: () => pU,
      f: () => FU,
      h: () => AU,
      l: () => aU,
      n: () => NU,
      p: () => EU,
      t: () => QU,
      x: () => yU,
      z: () => BU
    });
    var cU = zU(5387);
    const yU = 2e3,
      QU = 2e4;

    function AU(UU) {
      return UU.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function FU(UU) {
      return UU.replace(/\$/g, "\\$")
    }
    const oU = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function DU(UU, XU) {
      oU.lastIndex = XU;
      const zU = oU.exec(UU);
      return zU.index + zU[0].length
    }

    function EU(UU) {
      return (0, cU.C)(UU, /\s+/g, (0, cU.v)(".!?")).flatMap((UU => UU.split("\n")))
    }

    function YU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU;
      const cU = [...UU.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((UU => UU.index)),
        yU = cU.filter((UU => UU < XU)),
        QU = cU.find((UU => UU >= zU));
      return [0 === yU.length ? 0 : yU.at(-1) + 1, void 0 === QU ? UU.length : QU + 1]
    }

    function NU(UU, XU) {
      const zU = UU.charCodeAt(XU - 1);
      return UU.slice(0, XU > 0 && XU < UU.length && zU >= 55296 && zU <= 56319 ? XU - 1 : XU)
    }

    function IU(UU, XU) {
      return `${XU}${UU.replace(/\\/g,"\\\\").split(XU).join(`\\${XU}`)}${XU}`
    }

    function pU(UU) {
      return UU.charAt(0).toUpperCase() + UU.slice(1)
    }

    function aU(UU) {
      return Math.round(UU).toLocaleString("en-US")
    }

    function tU(UU) {
      return UU.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((UU => "" !== UU))
    }
    const gU = 3;

    function kU(UU, XU) {
      return tU(UU).filter((UU => UU.length >= gU && !/\d/.test(UU))).map((UU => `${UU} ${XU}`))
    }

    function GU(UU) {
      return UU.split(/[\s:_]+/).filter((UU => "" !== UU)).map(AU).join("[`:_\\s]+")
    }

    function BU(UU) {
      return tU(UU.split(".").pop())
    }

    function ZU(UU) {
      return UU.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function RU(UU) {
      let XU = null;
      return () => {
        const zU = XU ??= UU();
        return zU.catch((() => {
          XU === zU && (XU = null)
        })), zU
      }
    }
  },
  5387: (UU, XU, zU) => {
    function cU(UU) {
      return {
        notAfter: UU
      }
    }
    zU.d(XU, {
      C: () => YU,
      d: () => oU,
      e: () => DU,
      i: () => FU,
      j: () => cU,
      n: () => yU,
      r: () => QU,
      v: () => AU,
      z: () => EU
    });
    const yU = cU("\\w$."),
      QU = cU("\\w.,");

    function AU(UU) {
      return XU => oU(XU, UU)
    }

    function FU(UU) {
      return XU => !UU.test(XU.input.slice(0, XU.index))
    }

    function oU(UU, XU) {
      return UU.index > 0 && new RegExp(`[${XU}]`).test(UU.input[UU.index - 1])
    }

    function DU(UU, XU, zU) {
      return function(UU) {
        return void 0 !== UU && "function" !== typeof UU
      }(zU) ? function(UU, XU, zU) {
        const cU = XU.flags.replace(/[gy]/g, ""),
          yU = new RegExp(`[^${zU}](?:${XU.source})`, `${cU}g`),
          QU = [],
          AU = zU => {
            const cU = zU.index + zU[0].length;
            return ("" === zU[0] ? NU(UU, XU, cU) : cU) - 1
          },
          FU = new RegExp(`(?:${XU.source})`, `${cU}y`).exec(UU);
        if (FU) {
          if (QU.push(FU), !XU.global) return QU;
          yU.lastIndex = AU(FU)
        }
        for (let oU = yU.exec(UU); oU; oU = yU.exec(UU)) {
          const zU = NU(UU, XU, oU.index) - oU.index;
          if (oU[0] = oU[0].slice(zU), oU.index += zU, QU.push(oU), !XU.global) break;
          yU.lastIndex = AU(oU)
        }
        return QU
      }(UU, XU, zU.notAfter) : function(UU, XU, zU) {
        const cU = new RegExp(XU.source, `${XU.flags.replace(/[gy]/g,"")}g`),
          yU = [];
        for (let QU = cU.exec(UU); QU; QU = cU.exec(UU))
          if (!zU || zU(QU)) {
            if (yU.push(QU), !XU.global) break;
            "" === QU[0] && (cU.lastIndex = NU(UU, XU, cU.lastIndex))
          } else cU.lastIndex = NU(UU, XU, QU.index);
        return yU
      }(UU, XU, zU)
    }

    function EU(UU, XU, zU, cU) {
      let yU = "",
        QU = 0;
      for (const AU of DU(UU, XU, zU)) yU += UU.slice(QU, AU.index) + cU(AU), QU = AU.index + AU[0].length;
      return yU + UU.slice(QU)
    }

    function YU(UU, XU, zU) {
      const cU = [];
      let yU = 0;
      for (const QU of DU(UU, XU, zU)) cU.push(UU.slice(yU, QU.index)), yU = QU.index + QU[0].length;
      return [...cU, UU.slice(yU)]
    }

    function NU(UU, XU, zU) {
      var cU;
      return zU + (XU.unicode && (null !== (cU = UU.codePointAt(zU)) && void 0 !== cU ? cU : 0) > 65535 ? 2 : 1)
    }
  },
  7079: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);