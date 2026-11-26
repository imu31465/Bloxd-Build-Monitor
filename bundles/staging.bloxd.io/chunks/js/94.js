export const id = 94;
export const ids = [94];
export const modules = {
  5243: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => kV,
      E: () => rV,
      I: () => vV,
      d: () => JV,
      h: () => yV,
      l: () => EV,
      n: () => bV,
      r: () => pV,
      v: () => YV,
      w: () => UV
    });
    const JV = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function YV(VV) {
      try {
        return decodeURIComponent(VV.slice(1))
      } catch {
        return VV.slice(1)
      }
    }

    function UV(VV) {
      return VV.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const yV = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${JV.source}`, "g");

    function pV(VV, eV) {
      return 2 === VV.length ? eV.replace(/^ (.*) $/, "$1") : eV
    }

    function QV(VV) {
      return "" === VV.trim()
    }

    function nV(VV) {
      const eV = [];
      for (const xV of VV.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) eV.length > 0 && eV[eV.length - 1].endsWith("\\") ? eV[eV.length - 1] += `|${xV}` : eV.push(xV);
      return eV.map((VV => VV.trim().replaceAll("\\|", "|")))
    }
    const wV = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function ZV(VV) {
      const eV = [],
        xV = [{
          indent: -1,
          items: eV
        }];
      let JV = null;
      for (const YV of VV) {
        const VV = YV.match(wV);
        if (!VV) {
          JV && (JV.text += ` ${YV.trim()}`);
          continue
        }
        const eV = VV[1].replace(/\t/g, "  ").length;
        for (; eV <= xV[xV.length - 1].indent;) xV.pop();
        JV = {
          text: VV[3].trim(),
          children: []
        }, xV[xV.length - 1].items.push(JV), xV.push({
          indent: eV,
          items: JV.children
        })
      }
      return eV
    }

    function vV(VV) {
      const eV = VV.replace(/\r\n/g, "\n").split("\n"),
        xV = [];
      let JV = 0;
      for (; JV < eV.length;) {
        const VV = eV[JV];
        if (QV(VV)) {
          JV++;
          continue
        }
        const YV = VV.match(/^\s*```\s*(\w*)\s*$/);
        if (YV) {
          const VV = [];
          for (JV++; JV < eV.length && !/^\s*```\s*$/.test(eV[JV]);) VV.push(eV[JV]), JV++;
          JV++, xV.push({
            kind: "code",
            lang: YV[1] || "text",
            code: VV.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const yV = VV.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (yV) {
          const VV = yV[2].trim();
          xV.push({
            kind: "heading",
            level: yV[1].length,
            text: VV,
            anchor: UV(VV)
          }), JV++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(VV)) {
          xV.push({
            kind: "rule"
          }), JV++;
          continue
        }
        if (VV.trim().startsWith("|") && JV + 1 < eV.length && /^\s*\|[\s:|-]+\|\s*$/.test(eV[JV + 1])) {
          const YV = nV(VV),
            UV = [];
          for (JV += 2; JV < eV.length && eV[JV].trim().startsWith("|");) UV.push(nV(eV[JV])), JV++;
          xV.push({
            kind: "table",
            header: YV,
            rows: UV
          });
          continue
        }
        if (VV.startsWith(">")) {
          const VV = [];
          for (; JV < eV.length && eV[JV].startsWith(">");) VV.push(eV[JV].replace(/^>\s?/, "")), JV++;
          xV.push({
            kind: "quote",
            blocks: vV(VV.join("\n"))
          });
          continue
        }
        if (wV.test(VV)) {
          const YV = [],
            UV = /^\s*\d+\./.test(VV);
          for (; JV < eV.length && !QV(eV[JV]) && (wV.test(eV[JV]) || /^\s+\S/.test(eV[JV]));) YV.push(eV[JV]), JV++;
          xV.push({
            kind: "list",
            ordered: UV,
            items: ZV(YV)
          });
          continue
        }
        const pV = [];
        for (; JV < eV.length && !QV(eV[JV]) && !/^\s*```/.test(eV[JV]) && !/^#{1,6}\s/.test(eV[JV]) && !eV[JV].startsWith(">") && !wV.test(eV[JV]) && (!eV[JV].trim().startsWith("|") || 0 !== pV.length);) pV.push(eV[JV].trim()), JV++;
        0 === pV.length && (pV.push(eV[JV].trim()), JV++), xV.push({
          kind: "paragraph",
          text: pV.join(" ")
        })
      }
      return xV
    }

    function rV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const xV = vV(VV);
      let JV = "";
      const YV = [],
        UV = [],
        yV = new Map;
      for (const nV of xV) {
        if ("heading" === nV.kind) {
          var pV;
          const VV = (null !== (pV = yV.get(nV.anchor)) && void 0 !== pV ? pV : 0) + 1;
          yV.set(nV.anchor, VV), VV > 1 && (nV.anchor = `${nV.anchor}-${VV}`)
        }
        if ("heading" === nV.kind && 1 === nV.level && !JV) {
          JV = nV.text;
          continue
        }
        if ("heading" === nV.kind && nV.level <= eV) {
          UV.push({
            heading: nV,
            blocks: []
          });
          continue
        }
        const VV = UV.at(-1);
        VV ? VV.blocks.push(nV) : YV.push(nV)
      }
      const QV = VV => {
        for (;
          "rule" === (null === (eV = VV.at(-1)) || void 0 === eV ? void 0 : eV.kind);) {
          var eV;
          VV.pop()
        }
      };
      QV(YV);
      for (const nV of UV) QV(nV.blocks);
      return {
        title: JV,
        intro: YV,
        sections: UV
      }
    }

    function kV(VV) {
      return [{
        heading: null,
        blocks: VV.intro
      }, ...VV.sections.map((VV => ({
        heading: VV.heading,
        blocks: VV.blocks
      })))]
    }

    function bV(VV) {
      return VV.flatMap((VV => "code" === VV.kind ? [VV] : "quote" === VV.kind ? bV(VV.blocks) : []))
    }

    function EV(VV) {
      switch (VV.kind) {
        case "heading":
        case "paragraph":
          return VV.text;
        case "code":
          return VV.code;
        case "table":
          return [VV.header, ...VV.rows].map((VV => VV.join(" "))).join(" ");
        case "list": {
          const eV = VV => VV.map((VV => `${VV.text} ${eV(VV.children)}`)).join(" ");
          return eV(VV.items)
        }
        case "quote":
          return VV.blocks.map(EV).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7054: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV,
      g: () => yV,
      k: () => pV
    });
    xV(7046);
    var JV = xV(62),
      YV = xV(5243),
      UV = xV(1321);
    const yV = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function pV(VV, eV) {
      return VV === eV ? VV : `${VV} (${eV})`
    }

    function QV(VV) {
      const eV = [];
      let xV = 0;
      for (const JV of VV.matchAll(yV)) {
        JV.index > xV && eV.push(VV.slice(xV, JV.index));
        const [, YV, yV, QV, nV, wV, ZV] = JV;
        void 0 !== YV ? eV.push(pV(YV, yV)) : void 0 !== QV || void 0 !== nV ? eV.push((0, UV.jsx)("strong", {
          children: null !== QV && void 0 !== QV ? QV : nV
        }, JV.index)) : void 0 !== wV ? eV.push((0, UV.jsx)("em", {
          children: wV
        }, JV.index)) : eV.push((0, UV.jsx)("code", {
          children: ZV
        }, JV.index)), xV = JV.index + JV[0].length
      }
      return xV < VV.length && eV.push(VV.slice(xV)), eV
    }

    function nV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const JV = VV.map(((VV, eV) => (0, UV.jsxs)("li", {
        children: [QV(VV.text), VV.children.length > 0 && nV(VV.children, !1)]
      }, eV)));
      return eV ? (0, UV.jsx)("ol", {
        start: xV,
        children: JV
      }) : (0, UV.jsx)("ul", {
        children: JV
      })
    }

    function wV(VV, eV) {
      switch (VV.kind) {
        case "heading":
          return VV.level <= 2 ? (0, UV.jsx)("h3", {
            children: QV(VV.text)
          }, eV) : (0, UV.jsx)("h4", {
            children: QV(VV.text)
          }, eV);
        case "paragraph":
          return (0, UV.jsx)("p", {
            children: QV(VV.text)
          }, eV);
        case "list":
          return (0, UV.jsx)(JV.Fragment, {
            children: nV(VV.items, VV.ordered)
          }, eV);
        case "quote":
          return (0, UV.jsx)("blockquote", {
            children: VV.blocks.map(((VV, eV) => wV(VV, eV)))
          }, eV);
        case "code":
          return (0, UV.jsx)("pre", {
            children: (0, UV.jsx)("code", {
              children: VV.code
            })
          }, eV);
        case "table":
          return (0, UV.jsxs)("table", {
            children: [(0, UV.jsx)("thead", {
              children: (0, UV.jsx)("tr", {
                children: VV.header.map(((VV, eV) => (0, UV.jsx)("th", {
                  children: QV(VV)
                }, eV)))
              })
            }), (0, UV.jsx)("tbody", {
              children: VV.rows.map(((VV, eV) => (0, UV.jsx)("tr", {
                children: VV.map(((VV, eV) => (0, UV.jsx)("td", {
                  children: QV(VV)
                }, eV)))
              }, eV)))
            })]
          }, eV);
        case "rule":
          return (0, UV.jsx)("hr", {}, eV)
      }
    }

    function ZV(VV) {
      let {
        markdown: eV
      } = VV, xV = 0;
      return (0, UV.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, YV.I)(eV).map(((VV, eV) => {
          if ("list" !== VV.kind || !VV.ordered) return xV = 0, wV(VV, eV);
          const YV = xV + 1;
          return xV += VV.items.length, (0, UV.jsx)(JV.Fragment, {
            children: nV(VV.items, !0, YV)
          }, eV)
        }))
      })
    }
  },
  7039: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => jV,
      i: () => qV,
      e: () => FV,
      l: () => kV
    });
    var JV = xV(1241),
      YV = xV(7003),
      UV = xV(5364);
    const yV = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function pV(VV) {
      return (0, UV.h)(VV, yV, (eV => !/^my/i.test(eV[0]) || !/follow $/i.test(VV.slice(0, eV.index)))).length > 0
    }
    const QV = /\byou(?:r|'re|'ll)?\b/i,
      nV = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      wV = 2;

    function ZV(VV) {
      return function(VV) {
        const eV = [];
        let xV = !1;
        for (const JV of VV.split("\n")) {
          if (/^\s*(```|~~~)/.test(JV)) {
            xV = !xV;
            continue
          }
          if (xV || /^\s*>/.test(JV)) continue;
          const VV = JV.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          eV.push(...(0, YV.s)(VV))
        }
        return eV
      }(VV).filter((VV => pV(VV) || nV.test(VV) && !QV.test(VV)))
    }
    const vV = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      rV = [{
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

    function kV(VV) {
      const eV = rV.findIndex((eV => eV.name === VV));
      return -1 === eV ? rV.length : eV
    }
    const bV = 2500,
      EV = 12e4;
    class BV extends Error {
      constructor(VV) {
        super(`Studio AI chat ${VV}`), this.reason = VV
      }
    }

    function jV(VV, eV) {
      const xV = new AbortController,
        JV = () => {
          xV.abort()
        },
        YV = setTimeout(JV, VV);
      return null !== eV && void 0 !== eV && eV.aborted && JV(), null === eV || void 0 === eV || eV.addEventListener("abort", JV, {
        once: !0
      }), {
        signal: xV.signal,
        clear: () => {
          clearTimeout(YV), null === eV || void 0 === eV || eV.removeEventListener("abort", JV)
        }
      }
    }

    function qV(VV, eV, xV) {
      return new Promise(((YV, UV) => {
        const yV = new AbortController,
          pV = () => {
            yV.abort(), UV((0, JV.g)(xV))
          };
        if (null !== xV && void 0 !== xV && xV.aborted) return void pV();
        null === xV || void 0 === xV || xV.addEventListener("abort", pV, {
          once: !0
        });
        const QV = rV.map((() => !1));
        let nV = null;
        const wV = rV.map((() => !1)),
          ZV = rV.map((() => !1));
        rV.forEach(((JV, vV) => {
          const kV = jV(EV, yV.signal);
          TV(JV, [{
            role: "user",
            content: VV
          }], kV.signal).then((VV => {
            yV.signal.aborted || ("busy" === VV || "failed" === VV ? (wV[vV] = "busy" === VV, ZV[vV] = !0) : null !== VV && (null === nV || vV < nV.rank) && (nV = {
              rank: vV,
              answer: {
                text: VV.text,
                model: JV.name
              }
            }, eV(nV.answer)))
          }), (VV => {
            yV.signal.aborted || (ZV[vV] = !0, console.warn(`Studio AI: ${JV.name} couldn't be reached`, VV))
          })).finally((() => {
            kV.clear(), QV[vV] = !0, yV.signal.aborted || (() => {
              var VV, eV;
              const JV = null !== (VV = null === (eV = nV) || void 0 === eV ? void 0 : eV.rank) && void 0 !== VV ? VV : rV.length;
              QV.slice(0, JV).includes(!1) || (null === xV || void 0 === xV || xV.removeEventListener("abort", pV), yV.abort(), null !== nV ? YV({
                ...nV.answer,
                isFinal: !ZV.slice(0, nV.rank).includes(!0)
              }) : UV(new BV(wV.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((VV => {
            console.error("Studio AI: showing an answer failed", VV)
          }))
        }))
      }))
    }

    function tV(VV) {
      var eV, xV;
      return "length" === (null === VV || void 0 === VV || null === (eV = VV.choices) || void 0 === eV || null === (xV = eV[0]) || void 0 === xV ? void 0 : xV.finish_reason)
    }
    async function FV(VV, eV, xV) {
      const JV = rV.find((eV => eV.name === VV));
      if (void 0 === JV) return "failed";
      const YV = jV(EV, xV);
      try {
        const VV = await TV(JV, eV, YV.signal);
        return null !== VV && "object" === typeof VV ? VV.isCutOff ? (console.warn(`Studio AI: ${JV.name}'s answer was cut off at the token limit`), null) : {
          text: VV.text
        } : VV
      } finally {
        YV.clear()
      }
    }
    async function TV(VV, eV, xV) {
      const JV = await fetch(vV, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: VV.name,
          messages: eV,
          max_tokens: bV,
          temperature: VV.temperature,
          reasoning_effort: VV.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: xV
      });
      if (429 === JV.status) return "busy";
      if (!JV.ok) return console.warn(`Studio AI: ${VV.name} answered ${JV.status}`), "failed";
      const YV = await JV.json().catch((() => null)),
        UV = function(VV) {
          var eV, xV, JV;
          const YV = null === VV || void 0 === VV || null === (eV = VV.choices) || void 0 === eV || null === (xV = eV[0]) || void 0 === xV || null === (JV = xV.message) || void 0 === JV ? void 0 : JV.content;
          if ("string" !== typeof YV) return null;
          const UV = YV.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === UV ? null : UV
        }(YV);
      return null !== UV && function(VV) {
        const eV = ZV(VV);
        return eV.length >= wV || eV.some((VV => pV(VV)))
      }(UV) ? (console.warn(`Studio AI: ${VV.name} thought out loud instead of answering`), "failed") : null === UV ? null : {
        text: UV,
        isCutOff: tV(YV)
      }
    }
  },
  7003: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => tV,
      G: () => TV,
      H: () => EV,
      J: () => qV,
      K: () => FV,
      M: () => jV,
      N: () => ZV,
      R: () => nV,
      V: () => rV,
      e: () => kV,
      g: () => pV,
      i: () => yV,
      m: () => bV,
      o: () => vV,
      s: () => wV,
      v: () => UV,
      z: () => YV
    });
    var JV = xV(5364);
    const YV = 2e3,
      UV = 2e4;

    function yV(VV) {
      return VV.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function pV(VV) {
      return VV.replace(/\$/g, "\\$")
    }
    const QV = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function nV(VV, eV) {
      QV.lastIndex = eV;
      const xV = QV.exec(VV);
      return xV.index + xV[0].length
    }

    function wV(VV) {
      return (0, JV.B)(VV, /\s+/g, (0, JV.w)(".!?")).flatMap((VV => VV.split("\n")))
    }

    function ZV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV;
      const JV = [...VV.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((VV => VV.index)),
        YV = JV.filter((VV => VV < eV)),
        UV = JV.find((VV => VV >= xV));
      return [0 === YV.length ? 0 : YV.at(-1) + 1, void 0 === UV ? VV.length : UV + 1]
    }

    function vV(VV, eV) {
      const xV = VV.charCodeAt(eV - 1);
      return VV.slice(0, eV > 0 && eV < VV.length && xV >= 55296 && xV <= 56319 ? eV - 1 : eV)
    }

    function rV(VV, eV) {
      return `${eV}${VV.replace(/\\/g,"\\\\").split(eV).join(`\\${eV}`)}${eV}`
    }

    function kV(VV) {
      return VV.charAt(0).toUpperCase() + VV.slice(1)
    }

    function bV(VV) {
      return Math.round(VV).toLocaleString("en-US")
    }

    function EV(VV) {
      return VV.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((VV => "" !== VV))
    }
    const BV = 3;

    function jV(VV, eV) {
      return EV(VV).filter((VV => VV.length >= BV && !/\d/.test(VV))).map((VV => `${VV} ${eV}`))
    }

    function qV(VV) {
      return VV.split(/[\s:_]+/).filter((VV => "" !== VV)).map(yV).join("[`:_\\s]+")
    }

    function tV(VV) {
      return EV(VV.split(".").pop())
    }

    function FV(VV) {
      return VV.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function TV(VV) {
      let eV = null;
      return () => {
        const xV = eV ??= VV();
        return xV.catch((() => {
          eV === xV && (eV = null)
        })), xV
      }
    }
  },
  5364: (VV, eV, xV) => {
    function JV(VV) {
      return {
        notAfter: VV
      }
    }
    xV.d(eV, {
      B: () => ZV,
      e: () => QV,
      h: () => nV,
      k: () => pV,
      l: () => JV,
      o: () => YV,
      s: () => UV,
      w: () => yV,
      z: () => wV
    });
    const YV = JV("\\w$."),
      UV = JV("\\w.,");

    function yV(VV) {
      return eV => QV(eV, VV)
    }

    function pV(VV) {
      return eV => !VV.test(eV.input.slice(0, eV.index))
    }

    function QV(VV, eV) {
      return VV.index > 0 && new RegExp(`[${eV}]`).test(VV.input[VV.index - 1])
    }

    function nV(VV, eV, xV) {
      return function(VV) {
        return void 0 !== VV && "function" !== typeof VV
      }(xV) ? function(VV, eV, xV) {
        const JV = eV.flags.replace(/[gy]/g, ""),
          YV = new RegExp(`[^${xV}](?:${eV.source})`, `${JV}g`),
          UV = [],
          yV = xV => {
            const JV = xV.index + xV[0].length;
            return ("" === xV[0] ? vV(VV, eV, JV) : JV) - 1
          },
          pV = new RegExp(`(?:${eV.source})`, `${JV}y`).exec(VV);
        if (pV) {
          if (UV.push(pV), !eV.global) return UV;
          YV.lastIndex = yV(pV)
        }
        for (let QV = YV.exec(VV); QV; QV = YV.exec(VV)) {
          const xV = vV(VV, eV, QV.index) - QV.index;
          if (QV[0] = QV[0].slice(xV), QV.index += xV, UV.push(QV), !eV.global) break;
          YV.lastIndex = yV(QV)
        }
        return UV
      }(VV, eV, xV.notAfter) : function(VV, eV, xV) {
        const JV = new RegExp(eV.source, `${eV.flags.replace(/[gy]/g,"")}g`),
          YV = [];
        for (let UV = JV.exec(VV); UV; UV = JV.exec(VV))
          if (!xV || xV(UV)) {
            if (YV.push(UV), !eV.global) break;
            "" === UV[0] && (JV.lastIndex = vV(VV, eV, JV.lastIndex))
          } else JV.lastIndex = vV(VV, eV, UV.index);
        return YV
      }(VV, eV, xV)
    }

    function wV(VV, eV, xV, JV) {
      let YV = "",
        UV = 0;
      for (const yV of nV(VV, eV, xV)) YV += VV.slice(UV, yV.index) + JV(yV), UV = yV.index + yV[0].length;
      return YV + VV.slice(UV)
    }

    function ZV(VV, eV, xV) {
      const JV = [];
      let YV = 0;
      for (const UV of nV(VV, eV, xV)) JV.push(VV.slice(YV, UV.index)), YV = UV.index + UV[0].length;
      return [...JV, VV.slice(YV)]
    }

    function vV(VV, eV, xV) {
      var JV;
      return xV + (eV.unicode && (null !== (JV = VV.codePointAt(xV)) && void 0 !== JV ? JV : 0) > 65535 ? 2 : 1)
    }
  },
  7046: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);