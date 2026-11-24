export const id = 81;
export const ids = [81];
export const modules = {
  4913: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB,
      f: () => GB,
      g: () => qB,
      j: () => gB,
      n: () => vB,
      o: () => JB,
      s: () => oB,
      t: () => NB,
      u: () => FB,
      w: () => zB
    });
    const TB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function JB(BB) {
      try {
        return decodeURIComponent(BB.slice(1))
      } catch {
        return BB.slice(1)
      }
    }

    function oB(BB) {
      return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const GB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${TB.source}`, "g");

    function vB(BB, IB) {
      return 2 === BB.length ? IB.replace(/^ (.*) $/, "$1") : IB
    }

    function kB(BB) {
      return "" === BB.trim()
    }

    function cB(BB) {
      const IB = [];
      for (const ZB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) IB.length > 0 && IB[IB.length - 1].endsWith("\\") ? IB[IB.length - 1] += `|${ZB}` : IB.push(ZB);
      return IB.map((BB => BB.trim().replaceAll("\\|", "|")))
    }
    const nB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function hB(BB) {
      const IB = [],
        ZB = [{
          indent: -1,
          items: IB
        }];
      let TB = null;
      for (const JB of BB) {
        const BB = JB.match(nB);
        if (!BB) {
          TB && (TB.text += ` ${JB.trim()}`);
          continue
        }
        const IB = BB[1].replace(/\t/g, "  ").length;
        for (; IB <= ZB[ZB.length - 1].indent;) ZB.pop();
        TB = {
          text: BB[3].trim(),
          children: []
        }, ZB[ZB.length - 1].items.push(TB), ZB.push({
          indent: IB,
          items: TB.children
        })
      }
      return IB
    }

    function zB(BB) {
      const IB = BB.replace(/\r\n/g, "\n").split("\n"),
        ZB = [];
      let TB = 0;
      for (; TB < IB.length;) {
        const BB = IB[TB];
        if (kB(BB)) {
          TB++;
          continue
        }
        const JB = BB.match(/^\s*```\s*(\w*)\s*$/);
        if (JB) {
          const BB = [];
          for (TB++; TB < IB.length && !/^\s*```\s*$/.test(IB[TB]);) BB.push(IB[TB]), TB++;
          TB++, ZB.push({
            kind: "code",
            lang: JB[1] || "text",
            code: BB.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const GB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (GB) {
          const BB = GB[2].trim();
          ZB.push({
            kind: "heading",
            level: GB[1].length,
            text: BB,
            anchor: oB(BB)
          }), TB++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
          ZB.push({
            kind: "rule"
          }), TB++;
          continue
        }
        if (BB.trim().startsWith("|") && TB + 1 < IB.length && /^\s*\|[\s:|-]+\|\s*$/.test(IB[TB + 1])) {
          const JB = cB(BB),
            oB = [];
          for (TB += 2; TB < IB.length && IB[TB].trim().startsWith("|");) oB.push(cB(IB[TB])), TB++;
          ZB.push({
            kind: "table",
            header: JB,
            rows: oB
          });
          continue
        }
        if (BB.startsWith(">")) {
          const BB = [];
          for (; TB < IB.length && IB[TB].startsWith(">");) BB.push(IB[TB].replace(/^>\s?/, "")), TB++;
          ZB.push({
            kind: "quote",
            blocks: zB(BB.join("\n"))
          });
          continue
        }
        if (nB.test(BB)) {
          const JB = [],
            oB = /^\s*\d+\./.test(BB);
          for (; TB < IB.length && !kB(IB[TB]) && (nB.test(IB[TB]) || /^\s+\S/.test(IB[TB]));) JB.push(IB[TB]), TB++;
          ZB.push({
            kind: "list",
            ordered: oB,
            items: hB(JB)
          });
          continue
        }
        const vB = [];
        for (; TB < IB.length && !kB(IB[TB]) && !/^\s*```/.test(IB[TB]) && !/^#{1,6}\s/.test(IB[TB]) && !IB[TB].startsWith(">") && !nB.test(IB[TB]) && (!IB[TB].trim().startsWith("|") || 0 !== vB.length);) vB.push(IB[TB].trim()), TB++;
        0 === vB.length && (vB.push(IB[TB].trim()), TB++), ZB.push({
          kind: "paragraph",
          text: vB.join(" ")
        })
      }
      return ZB
    }

    function FB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZB = zB(BB);
      let TB = "";
      const JB = [],
        oB = [],
        GB = new Map;
      for (const cB of ZB) {
        if ("heading" === cB.kind) {
          var vB;
          const BB = (null !== (vB = GB.get(cB.anchor)) && void 0 !== vB ? vB : 0) + 1;
          GB.set(cB.anchor, BB), BB > 1 && (cB.anchor = `${cB.anchor}-${BB}`)
        }
        if ("heading" === cB.kind && 1 === cB.level && !TB) {
          TB = cB.text;
          continue
        }
        if ("heading" === cB.kind && cB.level <= IB) {
          oB.push({
            heading: cB,
            blocks: []
          });
          continue
        }
        const BB = oB.at(-1);
        BB ? BB.blocks.push(cB) : JB.push(cB)
      }
      const kB = BB => {
        for (;
          "rule" === (null === (IB = BB.at(-1)) || void 0 === IB ? void 0 : IB.kind);) {
          var IB;
          BB.pop()
        }
      };
      kB(JB);
      for (const cB of oB) kB(cB.blocks);
      return {
        title: TB,
        intro: JB,
        sections: oB
      }
    }

    function NB(BB) {
      return [{
        heading: null,
        blocks: BB.intro
      }, ...BB.sections.map((BB => ({
        heading: BB.heading,
        blocks: BB.blocks
      })))]
    }

    function gB(BB) {
      return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? gB(BB.blocks) : []))
    }

    function qB(BB) {
      switch (BB.kind) {
        case "heading":
        case "paragraph":
          return BB.text;
        case "code":
          return BB.code;
        case "table":
          return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
        case "list": {
          const IB = BB => BB.map((BB => `${BB.text} ${IB(BB.children)}`)).join(" ");
          return IB(BB.items)
        }
        case "quote":
          return BB.blocks.map(qB).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6655: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB,
      f: () => GB,
      i: () => vB
    });
    ZB(6652);
    var TB = ZB(63),
      JB = ZB(4913),
      oB = ZB(1153);
    const GB = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function vB(BB, IB) {
      return BB === IB ? BB : `${BB} (${IB})`
    }

    function kB(BB) {
      const IB = [];
      let ZB = 0;
      for (const TB of BB.matchAll(GB)) {
        TB.index > ZB && IB.push(BB.slice(ZB, TB.index));
        const [, JB, GB, kB, cB, nB, hB] = TB;
        void 0 !== JB ? IB.push(vB(JB, GB)) : void 0 !== kB || void 0 !== cB ? IB.push((0, oB.jsx)("strong", {
          children: null !== kB && void 0 !== kB ? kB : cB
        }, TB.index)) : void 0 !== nB ? IB.push((0, oB.jsx)("em", {
          children: nB
        }, TB.index)) : IB.push((0, oB.jsx)("code", {
          children: hB
        }, TB.index)), ZB = TB.index + TB[0].length
      }
      return ZB < BB.length && IB.push(BB.slice(ZB)), IB
    }

    function cB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const TB = BB.map(((BB, IB) => (0, oB.jsxs)("li", {
        children: [kB(BB.text), BB.children.length > 0 && cB(BB.children, !1)]
      }, IB)));
      return IB ? (0, oB.jsx)("ol", {
        start: ZB,
        children: TB
      }) : (0, oB.jsx)("ul", {
        children: TB
      })
    }

    function nB(BB, IB) {
      switch (BB.kind) {
        case "heading":
          return BB.level <= 2 ? (0, oB.jsx)("h3", {
            children: kB(BB.text)
          }, IB) : (0, oB.jsx)("h4", {
            children: kB(BB.text)
          }, IB);
        case "paragraph":
          return (0, oB.jsx)("p", {
            children: kB(BB.text)
          }, IB);
        case "list":
          return (0, oB.jsx)(TB.Fragment, {
            children: cB(BB.items, BB.ordered)
          }, IB);
        case "quote":
          return (0, oB.jsx)("blockquote", {
            children: BB.blocks.map(((BB, IB) => nB(BB, IB)))
          }, IB);
        case "code":
          return (0, oB.jsx)("pre", {
            children: (0, oB.jsx)("code", {
              children: BB.code
            })
          }, IB);
        case "table":
          return (0, oB.jsxs)("table", {
            children: [(0, oB.jsx)("thead", {
              children: (0, oB.jsx)("tr", {
                children: BB.header.map(((BB, IB) => (0, oB.jsx)("th", {
                  children: kB(BB)
                }, IB)))
              })
            }), (0, oB.jsx)("tbody", {
              children: BB.rows.map(((BB, IB) => (0, oB.jsx)("tr", {
                children: BB.map(((BB, IB) => (0, oB.jsx)("td", {
                  children: kB(BB)
                }, IB)))
              }, IB)))
            })]
          }, IB);
        case "rule":
          return (0, oB.jsx)("hr", {}, IB)
      }
    }

    function hB(BB) {
      let {
        markdown: IB
      } = BB, ZB = 0;
      return (0, oB.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, JB.w)(IB).map(((BB, IB) => {
          if ("list" !== BB.kind || !BB.ordered) return ZB = 0, nB(BB, IB);
          const JB = ZB + 1;
          return ZB += BB.items.length, (0, oB.jsx)(TB.Fragment, {
            children: cB(BB.items, !0, JB)
          }, IB)
        }))
      })
    }
  },
  6648: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => UB,
      g: () => WB,
      d: () => CB,
      j: () => NB
    });
    var TB = ZB(1261),
      JB = ZB(6604),
      oB = ZB(5036);
    const GB = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function vB(BB) {
      return (0, oB.f)(BB, GB, (IB => !/^my/i.test(IB[0]) || !/follow $/i.test(BB.slice(0, IB.index)))).length > 0
    }
    const kB = /\byou(?:r|'re|'ll)?\b/i,
      cB = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      nB = 2;

    function hB(BB) {
      return function(BB) {
        const IB = [];
        let ZB = !1;
        for (const TB of BB.split("\n")) {
          if (/^\s*(```|~~~)/.test(TB)) {
            ZB = !ZB;
            continue
          }
          if (ZB || /^\s*>/.test(TB)) continue;
          const BB = TB.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          IB.push(...(0, JB.p)(BB))
        }
        return IB
      }(BB).filter((BB => vB(BB) || cB.test(BB) && !kB.test(BB)))
    }
    const zB = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      FB = [{
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

    function NB(BB) {
      const IB = FB.findIndex((IB => IB.name === BB));
      return -1 === IB ? FB.length : IB
    }
    const gB = 2500,
      qB = 12e4;
    class yB extends Error {
      constructor(BB) {
        super(`Studio AI chat ${BB}`), this.reason = BB
      }
    }

    function UB(BB, IB) {
      const ZB = new AbortController,
        TB = () => {
          ZB.abort()
        },
        JB = setTimeout(TB, BB);
      return null !== IB && void 0 !== IB && IB.aborted && TB(), null === IB || void 0 === IB || IB.addEventListener("abort", TB, {
        once: !0
      }), {
        signal: ZB.signal,
        clear: () => {
          clearTimeout(JB), null === IB || void 0 === IB || IB.removeEventListener("abort", TB)
        }
      }
    }

    function WB(BB, IB, ZB) {
      return new Promise(((JB, oB) => {
        const GB = new AbortController,
          vB = () => {
            GB.abort(), oB((0, TB.e)(ZB))
          };
        if (null !== ZB && void 0 !== ZB && ZB.aborted) return void vB();
        null === ZB || void 0 === ZB || ZB.addEventListener("abort", vB, {
          once: !0
        });
        const kB = FB.map((() => !1));
        let cB = null;
        const nB = FB.map((() => !1)),
          hB = FB.map((() => !1));
        FB.forEach(((TB, zB) => {
          const NB = UB(qB, GB.signal);
          QB(TB, [{
            role: "user",
            content: BB
          }], NB.signal).then((BB => {
            GB.signal.aborted || ("busy" === BB || "failed" === BB ? (nB[zB] = "busy" === BB, hB[zB] = !0) : null !== BB && (null === cB || zB < cB.rank) && (cB = {
              rank: zB,
              answer: {
                text: BB.text,
                model: TB.name
              }
            }, IB(cB.answer)))
          }), (BB => {
            GB.signal.aborted || (hB[zB] = !0, console.warn(`Studio AI: ${TB.name} couldn't be reached`, BB))
          })).finally((() => {
            NB.clear(), kB[zB] = !0, GB.signal.aborted || (() => {
              var BB, IB;
              const TB = null !== (BB = null === (IB = cB) || void 0 === IB ? void 0 : IB.rank) && void 0 !== BB ? BB : FB.length;
              kB.slice(0, TB).includes(!1) || (null === ZB || void 0 === ZB || ZB.removeEventListener("abort", vB), GB.abort(), null !== cB ? JB({
                ...cB.answer,
                isFinal: !hB.slice(0, cB.rank).includes(!0)
              }) : oB(new yB(nB.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((BB => {
            console.error("Studio AI: showing an answer failed", BB)
          }))
        }))
      }))
    }

    function dB(BB) {
      var IB, ZB;
      return "length" === (null === BB || void 0 === BB || null === (IB = BB.choices) || void 0 === IB || null === (ZB = IB[0]) || void 0 === ZB ? void 0 : ZB.finish_reason)
    }
    async function CB(BB, IB, ZB) {
      const TB = FB.find((IB => IB.name === BB));
      if (void 0 === TB) return "failed";
      const JB = UB(qB, ZB);
      try {
        const BB = await QB(TB, IB, JB.signal);
        return null !== BB && "object" === typeof BB ? BB.isCutOff ? (console.warn(`Studio AI: ${TB.name}'s answer was cut off at the token limit`), null) : {
          text: BB.text
        } : BB
      } finally {
        JB.clear()
      }
    }
    async function QB(BB, IB, ZB) {
      const TB = await fetch(zB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: BB.name,
          messages: IB,
          max_tokens: gB,
          temperature: BB.temperature,
          reasoning_effort: BB.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ZB
      });
      if (429 === TB.status) return "busy";
      if (!TB.ok) return console.warn(`Studio AI: ${BB.name} answered ${TB.status}`), "failed";
      const JB = await TB.json().catch((() => null)),
        oB = function(BB) {
          var IB, ZB, TB;
          const JB = null === BB || void 0 === BB || null === (IB = BB.choices) || void 0 === IB || null === (ZB = IB[0]) || void 0 === ZB || null === (TB = ZB.message) || void 0 === TB ? void 0 : TB.content;
          if ("string" !== typeof JB) return null;
          const oB = JB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === oB ? null : oB
        }(JB);
      return null !== oB && function(BB) {
        const IB = hB(BB);
        return IB.length >= nB || IB.some((BB => vB(BB)))
      }(oB) ? (console.warn(`Studio AI: ${BB.name} thought out loud instead of answering`), "failed") : null === oB ? null : {
        text: oB,
        isCutOff: dB(JB)
      }
    }
  },
  6604: (BB, IB, ZB) => {
    ZB.d(IB, {
      D: () => WB,
      F: () => CB,
      G: () => UB,
      K: () => hB,
      O: () => cB,
      R: () => FB,
      e: () => NB,
      h: () => vB,
      i: () => GB,
      k: () => gB,
      m: () => zB,
      p: () => nB,
      r: () => oB,
      t: () => JB,
      x: () => dB,
      y: () => QB,
      z: () => qB
    });
    var TB = ZB(5036);
    const JB = 2e3,
      oB = 2e4;

    function GB(BB) {
      return BB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function vB(BB) {
      return BB.replace(/\$/g, "\\$")
    }
    const kB = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function cB(BB, IB) {
      kB.lastIndex = IB;
      const ZB = kB.exec(BB);
      return ZB.index + ZB[0].length
    }

    function nB(BB) {
      return (0, TB.t)(BB, /\s+/g, (0, TB.r)(".!?")).flatMap((BB => BB.split("\n")))
    }

    function hB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB;
      const TB = [...BB.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((BB => BB.index)),
        JB = TB.filter((BB => BB < IB)),
        oB = TB.find((BB => BB >= ZB));
      return [0 === JB.length ? 0 : JB.at(-1) + 1, void 0 === oB ? BB.length : oB + 1]
    }

    function zB(BB, IB) {
      const ZB = BB.charCodeAt(IB - 1);
      return BB.slice(0, IB > 0 && IB < BB.length && ZB >= 55296 && ZB <= 56319 ? IB - 1 : IB)
    }

    function FB(BB, IB) {
      return `${IB}${BB.replace(/\\/g,"\\\\").split(IB).join(`\\${IB}`)}${IB}`
    }

    function NB(BB) {
      return BB.charAt(0).toUpperCase() + BB.slice(1)
    }

    function gB(BB) {
      return Math.round(BB).toLocaleString("en-US")
    }

    function qB(BB) {
      return BB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((BB => "" !== BB))
    }
    const yB = 3;

    function UB(BB, IB) {
      return qB(BB).filter((BB => BB.length >= yB && !/\d/.test(BB))).map((BB => `${BB} ${IB}`))
    }

    function WB(BB) {
      return BB.split(/[\s:_]+/).filter((BB => "" !== BB)).map(GB).join("[`:_\\s]+")
    }

    function dB(BB) {
      return qB(BB.split(".").pop())
    }

    function CB(BB) {
      return BB.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function QB(BB) {
      let IB = null;
      return () => {
        const ZB = IB ??= BB();
        return ZB.catch((() => {
          IB === ZB && (IB = null)
        })), ZB
      }
    }
  },
  5036: (BB, IB, ZB) => {
    function TB(BB) {
      return {
        notAfter: BB
      }
    }
    ZB.d(IB, {
      b: () => kB,
      f: () => cB,
      j: () => vB,
      l: () => TB,
      o: () => JB,
      q: () => oB,
      r: () => GB,
      s: () => nB,
      t: () => hB
    });
    const JB = TB("\\w$."),
      oB = TB("\\w.,");

    function GB(BB) {
      return IB => kB(IB, BB)
    }

    function vB(BB) {
      return IB => !BB.test(IB.input.slice(0, IB.index))
    }

    function kB(BB, IB) {
      return BB.index > 0 && new RegExp(`[${IB}]`).test(BB.input[BB.index - 1])
    }

    function cB(BB, IB, ZB) {
      return function(BB) {
        return void 0 !== BB && "function" !== typeof BB
      }(ZB) ? function(BB, IB, ZB) {
        const TB = IB.flags.replace(/[gy]/g, ""),
          JB = new RegExp(`[^${ZB}](?:${IB.source})`, `${TB}g`),
          oB = [],
          GB = ZB => {
            const TB = ZB.index + ZB[0].length;
            return ("" === ZB[0] ? zB(BB, IB, TB) : TB) - 1
          },
          vB = new RegExp(`(?:${IB.source})`, `${TB}y`).exec(BB);
        if (vB) {
          if (oB.push(vB), !IB.global) return oB;
          JB.lastIndex = GB(vB)
        }
        for (let kB = JB.exec(BB); kB; kB = JB.exec(BB)) {
          const ZB = zB(BB, IB, kB.index) - kB.index;
          if (kB[0] = kB[0].slice(ZB), kB.index += ZB, oB.push(kB), !IB.global) break;
          JB.lastIndex = GB(kB)
        }
        return oB
      }(BB, IB, ZB.notAfter) : function(BB, IB, ZB) {
        const TB = new RegExp(IB.source, `${IB.flags.replace(/[gy]/g,"")}g`),
          JB = [];
        for (let oB = TB.exec(BB); oB; oB = TB.exec(BB))
          if (!ZB || ZB(oB)) {
            if (JB.push(oB), !IB.global) break;
            "" === oB[0] && (TB.lastIndex = zB(BB, IB, TB.lastIndex))
          } else TB.lastIndex = zB(BB, IB, oB.index);
        return JB
      }(BB, IB, ZB)
    }

    function nB(BB, IB, ZB, TB) {
      let JB = "",
        oB = 0;
      for (const GB of cB(BB, IB, ZB)) JB += BB.slice(oB, GB.index) + TB(GB), oB = GB.index + GB[0].length;
      return JB + BB.slice(oB)
    }

    function hB(BB, IB, ZB) {
      const TB = [];
      let JB = 0;
      for (const oB of cB(BB, IB, ZB)) TB.push(BB.slice(JB, oB.index)), JB = oB.index + oB[0].length;
      return [...TB, BB.slice(JB)]
    }

    function zB(BB, IB, ZB) {
      var TB;
      return ZB + (IB.unicode && (null !== (TB = BB.codePointAt(ZB)) && void 0 !== TB ? TB : 0) > 65535 ? 2 : 1)
    }
  },
  6652: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);