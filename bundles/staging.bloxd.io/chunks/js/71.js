export const id = 71;
export const ids = [71];
export const modules = {
  4133: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => sJ,
      C: () => DJ,
      e: () => FJ,
      g: () => XJ,
      i: () => fJ,
      l: () => GJ,
      p: () => AJ,
      r: () => UJ,
      v: () => eJ,
      y: () => nJ
    });
    const FJ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function UJ(JJ) {
      try {
        return decodeURIComponent(JJ.slice(1))
      } catch {
        return JJ.slice(1)
      }
    }

    function eJ(JJ) {
      return JJ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const XJ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FJ.source}`, "g");

    function AJ(JJ, cJ) {
      return 2 === JJ.length ? cJ.replace(/^ (.*) $/, "$1") : cJ
    }

    function qJ(JJ) {
      return "" === JJ.trim()
    }

    function jJ(JJ) {
      const cJ = [];
      for (const ZJ of JJ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) cJ.length > 0 && cJ[cJ.length - 1].endsWith("\\") ? cJ[cJ.length - 1] += `|${ZJ}` : cJ.push(ZJ);
      return cJ.map((JJ => JJ.trim().replaceAll("\\|", "|")))
    }
    const YJ = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function hJ(JJ) {
      const cJ = [],
        ZJ = [{
          indent: -1,
          items: cJ
        }];
      let FJ = null;
      for (const UJ of JJ) {
        const JJ = UJ.match(YJ);
        if (!JJ) {
          FJ && (FJ.text += ` ${UJ.trim()}`);
          continue
        }
        const cJ = JJ[1].replace(/\t/g, "  ").length;
        for (; cJ <= ZJ[ZJ.length - 1].indent;) ZJ.pop();
        FJ = {
          text: JJ[3].trim(),
          children: []
        }, ZJ[ZJ.length - 1].items.push(FJ), ZJ.push({
          indent: cJ,
          items: FJ.children
        })
      }
      return cJ
    }

    function DJ(JJ) {
      const cJ = JJ.replace(/\r\n/g, "\n").split("\n"),
        ZJ = [];
      let FJ = 0;
      for (; FJ < cJ.length;) {
        const JJ = cJ[FJ];
        if (qJ(JJ)) {
          FJ++;
          continue
        }
        const UJ = JJ.match(/^\s*```\s*(\w*)\s*$/);
        if (UJ) {
          const JJ = [];
          for (FJ++; FJ < cJ.length && !/^\s*```\s*$/.test(cJ[FJ]);) JJ.push(cJ[FJ]), FJ++;
          FJ++, ZJ.push({
            kind: "code",
            lang: UJ[1] || "text",
            code: JJ.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const XJ = JJ.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (XJ) {
          const JJ = XJ[2].trim();
          ZJ.push({
            kind: "heading",
            level: XJ[1].length,
            text: JJ,
            anchor: eJ(JJ)
          }), FJ++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(JJ)) {
          ZJ.push({
            kind: "rule"
          }), FJ++;
          continue
        }
        if (JJ.trim().startsWith("|") && FJ + 1 < cJ.length && /^\s*\|[\s:|-]+\|\s*$/.test(cJ[FJ + 1])) {
          const UJ = jJ(JJ),
            eJ = [];
          for (FJ += 2; FJ < cJ.length && cJ[FJ].trim().startsWith("|");) eJ.push(jJ(cJ[FJ])), FJ++;
          ZJ.push({
            kind: "table",
            header: UJ,
            rows: eJ
          });
          continue
        }
        if (JJ.startsWith(">")) {
          const JJ = [];
          for (; FJ < cJ.length && cJ[FJ].startsWith(">");) JJ.push(cJ[FJ].replace(/^>\s?/, "")), FJ++;
          ZJ.push({
            kind: "quote",
            blocks: DJ(JJ.join("\n"))
          });
          continue
        }
        if (YJ.test(JJ)) {
          const UJ = [],
            eJ = /^\s*\d+\./.test(JJ);
          for (; FJ < cJ.length && !qJ(cJ[FJ]) && (YJ.test(cJ[FJ]) || /^\s+\S/.test(cJ[FJ]));) UJ.push(cJ[FJ]), FJ++;
          ZJ.push({
            kind: "list",
            ordered: eJ,
            items: hJ(UJ)
          });
          continue
        }
        const AJ = [];
        for (; FJ < cJ.length && !qJ(cJ[FJ]) && !/^\s*```/.test(cJ[FJ]) && !/^#{1,6}\s/.test(cJ[FJ]) && !cJ[FJ].startsWith(">") && !YJ.test(cJ[FJ]) && (!cJ[FJ].trim().startsWith("|") || 0 !== AJ.length);) AJ.push(cJ[FJ].trim()), FJ++;
        0 === AJ.length && (AJ.push(cJ[FJ].trim()), FJ++), ZJ.push({
          kind: "paragraph",
          text: AJ.join(" ")
        })
      }
      return ZJ
    }

    function sJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZJ = DJ(JJ);
      let FJ = "";
      const UJ = [],
        eJ = [],
        XJ = new Map;
      for (const jJ of ZJ) {
        if ("heading" === jJ.kind) {
          var AJ;
          const JJ = (null !== (AJ = XJ.get(jJ.anchor)) && void 0 !== AJ ? AJ : 0) + 1;
          XJ.set(jJ.anchor, JJ), JJ > 1 && (jJ.anchor = `${jJ.anchor}-${JJ}`)
        }
        if ("heading" === jJ.kind && 1 === jJ.level && !FJ) {
          FJ = jJ.text;
          continue
        }
        if ("heading" === jJ.kind && jJ.level <= cJ) {
          eJ.push({
            heading: jJ,
            blocks: []
          });
          continue
        }
        const JJ = eJ.at(-1);
        JJ ? JJ.blocks.push(jJ) : UJ.push(jJ)
      }
      const qJ = JJ => {
        for (;
          "rule" === (null === (cJ = JJ.at(-1)) || void 0 === cJ ? void 0 : cJ.kind);) {
          var cJ;
          JJ.pop()
        }
      };
      qJ(UJ);
      for (const jJ of eJ) qJ(jJ.blocks);
      return {
        title: FJ,
        intro: UJ,
        sections: eJ
      }
    }

    function nJ(JJ) {
      return [{
        heading: null,
        blocks: JJ.intro
      }, ...JJ.sections.map((JJ => ({
        heading: JJ.heading,
        blocks: JJ.blocks
      })))]
    }

    function GJ(JJ) {
      return JJ.flatMap((JJ => "code" === JJ.kind ? [JJ] : "quote" === JJ.kind ? GJ(JJ.blocks) : []))
    }

    function fJ(JJ) {
      switch (JJ.kind) {
        case "heading":
        case "paragraph":
          return JJ.text;
        case "code":
          return JJ.code;
        case "table":
          return [JJ.header, ...JJ.rows].map((JJ => JJ.join(" "))).join(" ");
        case "list": {
          const cJ = JJ => JJ.map((JJ => `${JJ.text} ${cJ(JJ.children)}`)).join(" ");
          return cJ(JJ.items)
        }
        case "quote":
          return JJ.blocks.map(fJ).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5835: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ,
      e: () => XJ,
      h: () => AJ
    });
    ZJ(5832);
    var FJ = ZJ(47),
      UJ = ZJ(4133),
      eJ = ZJ(990);
    const XJ = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function AJ(JJ, cJ) {
      return JJ === cJ ? JJ : `${JJ} (${cJ})`
    }

    function qJ(JJ) {
      const cJ = [];
      let ZJ = 0;
      for (const FJ of JJ.matchAll(XJ)) {
        FJ.index > ZJ && cJ.push(JJ.slice(ZJ, FJ.index));
        const [, UJ, XJ, qJ, jJ, YJ, hJ] = FJ;
        void 0 !== UJ ? cJ.push(AJ(UJ, XJ)) : void 0 !== qJ || void 0 !== jJ ? cJ.push((0, eJ.jsx)("strong", {
          children: null !== qJ && void 0 !== qJ ? qJ : jJ
        }, FJ.index)) : void 0 !== YJ ? cJ.push((0, eJ.jsx)("em", {
          children: YJ
        }, FJ.index)) : cJ.push((0, eJ.jsx)("code", {
          children: hJ
        }, FJ.index)), ZJ = FJ.index + FJ[0].length
      }
      return ZJ < JJ.length && cJ.push(JJ.slice(ZJ)), cJ
    }

    function jJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const FJ = JJ.map(((JJ, cJ) => (0, eJ.jsxs)("li", {
        children: [qJ(JJ.text), JJ.children.length > 0 && jJ(JJ.children, !1)]
      }, cJ)));
      return cJ ? (0, eJ.jsx)("ol", {
        start: ZJ,
        children: FJ
      }) : (0, eJ.jsx)("ul", {
        children: FJ
      })
    }

    function YJ(JJ, cJ) {
      switch (JJ.kind) {
        case "heading":
          return JJ.level <= 2 ? (0, eJ.jsx)("h3", {
            children: qJ(JJ.text)
          }, cJ) : (0, eJ.jsx)("h4", {
            children: qJ(JJ.text)
          }, cJ);
        case "paragraph":
          return (0, eJ.jsx)("p", {
            children: qJ(JJ.text)
          }, cJ);
        case "list":
          return (0, eJ.jsx)(FJ.Fragment, {
            children: jJ(JJ.items, JJ.ordered)
          }, cJ);
        case "quote":
          return (0, eJ.jsx)("blockquote", {
            children: JJ.blocks.map(((JJ, cJ) => YJ(JJ, cJ)))
          }, cJ);
        case "code":
          return (0, eJ.jsx)("pre", {
            children: (0, eJ.jsx)("code", {
              children: JJ.code
            })
          }, cJ);
        case "table":
          return (0, eJ.jsxs)("table", {
            children: [(0, eJ.jsx)("thead", {
              children: (0, eJ.jsx)("tr", {
                children: JJ.header.map(((JJ, cJ) => (0, eJ.jsx)("th", {
                  children: qJ(JJ)
                }, cJ)))
              })
            }), (0, eJ.jsx)("tbody", {
              children: JJ.rows.map(((JJ, cJ) => (0, eJ.jsx)("tr", {
                children: JJ.map(((JJ, cJ) => (0, eJ.jsx)("td", {
                  children: qJ(JJ)
                }, cJ)))
              }, cJ)))
            })]
          }, cJ);
        case "rule":
          return (0, eJ.jsx)("hr", {}, cJ)
      }
    }

    function hJ(JJ) {
      let {
        markdown: cJ
      } = JJ, ZJ = 0;
      return (0, eJ.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, UJ.C)(cJ).map(((JJ, cJ) => {
          if ("list" !== JJ.kind || !JJ.ordered) return ZJ = 0, YJ(JJ, cJ);
          const UJ = ZJ + 1;
          return ZJ += JJ.items.length, (0, eJ.jsx)(FJ.Fragment, {
            children: jJ(JJ.items, !0, UJ)
          }, cJ)
        }))
      })
    }
  },
  5830: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => rJ,
      f: () => vJ,
      e: () => QJ,
      h: () => nJ
    });
    var FJ = ZJ(3122),
      UJ = ZJ(5792),
      eJ = ZJ(4275);
    const XJ = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function AJ(JJ) {
      return (0, eJ.h)(JJ, XJ, (cJ => !/^my/i.test(cJ[0]) || !/follow $/i.test(JJ.slice(0, cJ.index)))).length > 0
    }
    const qJ = /\byou(?:r|'re|'ll)?\b/i,
      jJ = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      YJ = 2;

    function hJ(JJ) {
      return function(JJ) {
        const cJ = [];
        let ZJ = !1;
        for (const FJ of JJ.split("\n")) {
          if (/^\s*(```|~~~)/.test(FJ)) {
            ZJ = !ZJ;
            continue
          }
          if (ZJ || /^\s*>/.test(FJ)) continue;
          const JJ = FJ.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          cJ.push(...(0, UJ.m)(JJ))
        }
        return cJ
      }(JJ).filter((JJ => AJ(JJ) || jJ.test(JJ) && !qJ.test(JJ)))
    }
    const DJ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      sJ = [{
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

    function nJ(JJ) {
      const cJ = sJ.findIndex((cJ => cJ.name === JJ));
      return -1 === cJ ? sJ.length : cJ
    }
    const GJ = 2500,
      fJ = 12e4;
    class xJ extends Error {
      constructor(JJ) {
        super(`Studio AI chat ${JJ}`), this.reason = JJ
      }
    }

    function rJ(JJ, cJ) {
      const ZJ = new AbortController,
        FJ = () => {
          ZJ.abort()
        },
        UJ = setTimeout(FJ, JJ);
      return null !== cJ && void 0 !== cJ && cJ.aborted && FJ(), null === cJ || void 0 === cJ || cJ.addEventListener("abort", FJ, {
        once: !0
      }), {
        signal: ZJ.signal,
        clear: () => {
          clearTimeout(UJ), null === cJ || void 0 === cJ || cJ.removeEventListener("abort", FJ)
        }
      }
    }

    function vJ(JJ, cJ, ZJ) {
      return new Promise(((UJ, eJ) => {
        const XJ = new AbortController,
          AJ = () => {
            XJ.abort(), eJ((0, FJ.e)(ZJ))
          };
        if (null !== ZJ && void 0 !== ZJ && ZJ.aborted) return void AJ();
        null === ZJ || void 0 === ZJ || ZJ.addEventListener("abort", AJ, {
          once: !0
        });
        const qJ = sJ.map((() => !1));
        let jJ = null;
        const YJ = sJ.map((() => !1)),
          hJ = sJ.map((() => !1));
        sJ.forEach(((FJ, DJ) => {
          const nJ = rJ(fJ, XJ.signal);
          EJ(FJ, [{
            role: "user",
            content: JJ
          }], nJ.signal).then((JJ => {
            XJ.signal.aborted || ("busy" === JJ || "failed" === JJ ? (YJ[DJ] = "busy" === JJ, hJ[DJ] = !0) : null !== JJ && (null === jJ || DJ < jJ.rank) && (jJ = {
              rank: DJ,
              answer: {
                text: JJ.text,
                model: FJ.name
              }
            }, cJ(jJ.answer)))
          }), (JJ => {
            XJ.signal.aborted || (hJ[DJ] = !0, console.warn(`Studio AI: ${FJ.name} couldn't be reached`, JJ))
          })).finally((() => {
            nJ.clear(), qJ[DJ] = !0, XJ.signal.aborted || (() => {
              var JJ, cJ;
              const FJ = null !== (JJ = null === (cJ = jJ) || void 0 === cJ ? void 0 : cJ.rank) && void 0 !== JJ ? JJ : sJ.length;
              qJ.slice(0, FJ).includes(!1) || (null === ZJ || void 0 === ZJ || ZJ.removeEventListener("abort", AJ), XJ.abort(), null !== jJ ? UJ({
                ...jJ.answer,
                isFinal: !hJ.slice(0, jJ.rank).includes(!0)
              }) : eJ(new xJ(YJ.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((JJ => {
            console.error("Studio AI: showing an answer failed", JJ)
          }))
        }))
      }))
    }

    function mJ(JJ) {
      var cJ, ZJ;
      return "length" === (null === JJ || void 0 === JJ || null === (cJ = JJ.choices) || void 0 === cJ || null === (ZJ = cJ[0]) || void 0 === ZJ ? void 0 : ZJ.finish_reason)
    }
    async function QJ(JJ, cJ, ZJ) {
      const FJ = sJ.find((cJ => cJ.name === JJ));
      if (void 0 === FJ) return "failed";
      const UJ = rJ(fJ, ZJ);
      try {
        const JJ = await EJ(FJ, cJ, UJ.signal);
        return null !== JJ && "object" === typeof JJ ? JJ.isCutOff ? (console.warn(`Studio AI: ${FJ.name}'s answer was cut off at the token limit`), null) : {
          text: JJ.text
        } : JJ
      } finally {
        UJ.clear()
      }
    }
    async function EJ(JJ, cJ, ZJ) {
      const FJ = await fetch(DJ, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: JJ.name,
          messages: cJ,
          max_tokens: GJ,
          temperature: JJ.temperature,
          reasoning_effort: JJ.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ZJ
      });
      if (429 === FJ.status) return "busy";
      if (!FJ.ok) return console.warn(`Studio AI: ${JJ.name} answered ${FJ.status}`), "failed";
      const UJ = await FJ.json().catch((() => null)),
        eJ = function(JJ) {
          var cJ, ZJ, FJ;
          const UJ = null === JJ || void 0 === JJ || null === (cJ = JJ.choices) || void 0 === cJ || null === (ZJ = cJ[0]) || void 0 === ZJ || null === (FJ = ZJ.message) || void 0 === FJ ? void 0 : FJ.content;
          if ("string" !== typeof UJ) return null;
          const eJ = UJ.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === eJ ? null : eJ
        }(UJ);
      return null !== eJ && function(JJ) {
        const cJ = hJ(JJ);
        return cJ.length >= YJ || cJ.some((JJ => AJ(JJ)))
      }(eJ) ? (console.warn(`Studio AI: ${JJ.name} thought out loud instead of answering`), "failed") : null === eJ ? null : {
        text: eJ,
        isCutOff: mJ(UJ)
      }
    }
  },
  5792: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => QJ,
      F: () => rJ,
      J: () => hJ,
      N: () => jJ,
      P: () => sJ,
      b: () => nJ,
      f: () => AJ,
      i: () => XJ,
      j: () => GJ,
      l: () => DJ,
      m: () => YJ,
      n: () => eJ,
      r: () => UJ,
      s: () => mJ,
      t: () => EJ,
      x: () => fJ,
      z: () => vJ
    });
    var FJ = ZJ(4275);
    const UJ = 2e3,
      eJ = 2e4;

    function XJ(JJ) {
      return JJ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function AJ(JJ) {
      return JJ.replace(/\$/g, "\\$")
    }
    const qJ = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function jJ(JJ, cJ) {
      qJ.lastIndex = cJ;
      const ZJ = qJ.exec(JJ);
      return ZJ.index + ZJ[0].length
    }

    function YJ(JJ) {
      return (0, FJ.u)(JJ, /\s+/g, (0, FJ.p)(".!?")).flatMap((JJ => JJ.split("\n")))
    }

    function hJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ;
      const FJ = [...JJ.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((JJ => JJ.index)),
        UJ = FJ.filter((JJ => JJ < cJ)),
        eJ = FJ.find((JJ => JJ >= ZJ));
      return [0 === UJ.length ? 0 : UJ.at(-1) + 1, void 0 === eJ ? JJ.length : eJ + 1]
    }

    function DJ(JJ, cJ) {
      const ZJ = JJ.charCodeAt(cJ - 1);
      return JJ.slice(0, cJ > 0 && cJ < JJ.length && ZJ >= 55296 && ZJ <= 56319 ? cJ - 1 : cJ)
    }

    function sJ(JJ, cJ) {
      return `${cJ}${JJ.replace(/\\/g,"\\\\").split(cJ).join(`\\${cJ}`)}${cJ}`
    }

    function nJ(JJ) {
      return JJ.charAt(0).toUpperCase() + JJ.slice(1)
    }

    function GJ(JJ) {
      return Math.round(JJ).toLocaleString("en-US")
    }

    function fJ(JJ) {
      return JJ.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((JJ => "" !== JJ))
    }
    const xJ = 3;

    function rJ(JJ, cJ) {
      return fJ(JJ).filter((JJ => JJ.length >= xJ && !/\d/.test(JJ))).map((JJ => `${JJ} ${cJ}`))
    }

    function vJ(JJ) {
      return JJ.split(/[\s:_]+/).filter((JJ => "" !== JJ)).map(XJ).join("[`:_\\s]+")
    }

    function mJ(JJ) {
      return fJ(JJ.split(".").pop())
    }

    function QJ(JJ) {
      return JJ.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function EJ(JJ) {
      let cJ = null;
      return () => {
        const ZJ = cJ ??= JJ();
        return ZJ.catch((() => {
          cJ === ZJ && (cJ = null)
        })), ZJ
      }
    }
  },
  4275: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return {
        notAfter: JJ
      }
    }
    ZJ.d(cJ, {
      d: () => qJ,
      h: () => jJ,
      j: () => AJ,
      k: () => FJ,
      m: () => UJ,
      o: () => eJ,
      p: () => XJ,
      q: () => YJ,
      u: () => hJ
    });
    const UJ = FJ("\\w$."),
      eJ = FJ("\\w.,");

    function XJ(JJ) {
      return cJ => qJ(cJ, JJ)
    }

    function AJ(JJ) {
      return cJ => !JJ.test(cJ.input.slice(0, cJ.index))
    }

    function qJ(JJ, cJ) {
      return JJ.index > 0 && new RegExp(`[${cJ}]`).test(JJ.input[JJ.index - 1])
    }

    function jJ(JJ, cJ, ZJ) {
      return function(JJ) {
        return void 0 !== JJ && "function" !== typeof JJ
      }(ZJ) ? function(JJ, cJ, ZJ) {
        const FJ = cJ.flags.replace(/[gy]/g, ""),
          UJ = new RegExp(`[^${ZJ}](?:${cJ.source})`, `${FJ}g`),
          eJ = [],
          XJ = ZJ => {
            const FJ = ZJ.index + ZJ[0].length;
            return ("" === ZJ[0] ? DJ(JJ, cJ, FJ) : FJ) - 1
          },
          AJ = new RegExp(`(?:${cJ.source})`, `${FJ}y`).exec(JJ);
        if (AJ) {
          if (eJ.push(AJ), !cJ.global) return eJ;
          UJ.lastIndex = XJ(AJ)
        }
        for (let qJ = UJ.exec(JJ); qJ; qJ = UJ.exec(JJ)) {
          const ZJ = DJ(JJ, cJ, qJ.index) - qJ.index;
          if (qJ[0] = qJ[0].slice(ZJ), qJ.index += ZJ, eJ.push(qJ), !cJ.global) break;
          UJ.lastIndex = XJ(qJ)
        }
        return eJ
      }(JJ, cJ, ZJ.notAfter) : function(JJ, cJ, ZJ) {
        const FJ = new RegExp(cJ.source, `${cJ.flags.replace(/[gy]/g,"")}g`),
          UJ = [];
        for (let eJ = FJ.exec(JJ); eJ; eJ = FJ.exec(JJ))
          if (!ZJ || ZJ(eJ)) {
            if (UJ.push(eJ), !cJ.global) break;
            "" === eJ[0] && (FJ.lastIndex = DJ(JJ, cJ, FJ.lastIndex))
          } else FJ.lastIndex = DJ(JJ, cJ, eJ.index);
        return UJ
      }(JJ, cJ, ZJ)
    }

    function YJ(JJ, cJ, ZJ, FJ) {
      let UJ = "",
        eJ = 0;
      for (const XJ of jJ(JJ, cJ, ZJ)) UJ += JJ.slice(eJ, XJ.index) + FJ(XJ), eJ = XJ.index + XJ[0].length;
      return UJ + JJ.slice(eJ)
    }

    function hJ(JJ, cJ, ZJ) {
      const FJ = [];
      let UJ = 0;
      for (const eJ of jJ(JJ, cJ, ZJ)) FJ.push(JJ.slice(UJ, eJ.index)), UJ = eJ.index + eJ[0].length;
      return [...FJ, JJ.slice(UJ)]
    }

    function DJ(JJ, cJ, ZJ) {
      var FJ;
      return ZJ + (cJ.unicode && (null !== (FJ = JJ.codePointAt(ZJ)) && void 0 !== FJ ? FJ : 0) > 65535 ? 2 : 1)
    }
  },
  5832: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);