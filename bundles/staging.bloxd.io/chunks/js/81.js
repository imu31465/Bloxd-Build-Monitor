export const id = 81;
export const ids = [81];
export const modules = {
  4824: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => rB,
      c: () => QB,
      f: () => IB,
      i: () => yB,
      m: () => mB,
      q: () => NB,
      s: () => nB,
      t: () => dB,
      x: () => JB,
      y: () => sB
    });
    const QB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function nB(BB) {
      try {
        return decodeURIComponent(BB.slice(1))
      } catch {
        return BB.slice(1)
      }
    }

    function dB(BB) {
      return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const IB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${QB.source}`, "g");

    function NB(BB, jB) {
      return 2 === BB.length ? jB.replace(/^ (.*) $/, "$1") : jB
    }

    function uB(BB) {
      return "" === BB.trim()
    }

    function UB(BB) {
      const jB = [];
      for (const zB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) jB.length > 0 && jB[jB.length - 1].endsWith("\\") ? jB[jB.length - 1] += `|${zB}` : jB.push(zB);
      return jB.map((BB => BB.trim().replaceAll("\\|", "|")))
    }
    const aB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function pB(BB) {
      const jB = [],
        zB = [{
          indent: -1,
          items: jB
        }];
      let QB = null;
      for (const nB of BB) {
        const BB = nB.match(aB);
        if (!BB) {
          QB && (QB.text += ` ${nB.trim()}`);
          continue
        }
        const jB = BB[1].replace(/\t/g, "  ").length;
        for (; jB <= zB[zB.length - 1].indent;) zB.pop();
        QB = {
          text: BB[3].trim(),
          children: []
        }, zB[zB.length - 1].items.push(QB), zB.push({
          indent: jB,
          items: QB.children
        })
      }
      return jB
    }

    function rB(BB) {
      const jB = BB.replace(/\r\n/g, "\n").split("\n"),
        zB = [];
      let QB = 0;
      for (; QB < jB.length;) {
        const BB = jB[QB];
        if (uB(BB)) {
          QB++;
          continue
        }
        const nB = BB.match(/^\s*```\s*(\w*)\s*$/);
        if (nB) {
          const BB = [];
          for (QB++; QB < jB.length && !/^\s*```\s*$/.test(jB[QB]);) BB.push(jB[QB]), QB++;
          QB++, zB.push({
            kind: "code",
            lang: nB[1] || "text",
            code: BB.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const IB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (IB) {
          const BB = IB[2].trim();
          zB.push({
            kind: "heading",
            level: IB[1].length,
            text: BB,
            anchor: dB(BB)
          }), QB++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
          zB.push({
            kind: "rule"
          }), QB++;
          continue
        }
        if (BB.trim().startsWith("|") && QB + 1 < jB.length && /^\s*\|[\s:|-]+\|\s*$/.test(jB[QB + 1])) {
          const nB = UB(BB),
            dB = [];
          for (QB += 2; QB < jB.length && jB[QB].trim().startsWith("|");) dB.push(UB(jB[QB])), QB++;
          zB.push({
            kind: "table",
            header: nB,
            rows: dB
          });
          continue
        }
        if (BB.startsWith(">")) {
          const BB = [];
          for (; QB < jB.length && jB[QB].startsWith(">");) BB.push(jB[QB].replace(/^>\s?/, "")), QB++;
          zB.push({
            kind: "quote",
            blocks: rB(BB.join("\n"))
          });
          continue
        }
        if (aB.test(BB)) {
          const nB = [],
            dB = /^\s*\d+\./.test(BB);
          for (; QB < jB.length && !uB(jB[QB]) && (aB.test(jB[QB]) || /^\s+\S/.test(jB[QB]));) nB.push(jB[QB]), QB++;
          zB.push({
            kind: "list",
            ordered: dB,
            items: pB(nB)
          });
          continue
        }
        const NB = [];
        for (; QB < jB.length && !uB(jB[QB]) && !/^\s*```/.test(jB[QB]) && !/^#{1,6}\s/.test(jB[QB]) && !jB[QB].startsWith(">") && !aB.test(jB[QB]) && (!jB[QB].trim().startsWith("|") || 0 !== NB.length);) NB.push(jB[QB].trim()), QB++;
        0 === NB.length && (NB.push(jB[QB].trim()), QB++), zB.push({
          kind: "paragraph",
          text: NB.join(" ")
        })
      }
      return zB
    }

    function sB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const zB = rB(BB);
      let QB = "";
      const nB = [],
        dB = [],
        IB = new Map;
      for (const UB of zB) {
        if ("heading" === UB.kind) {
          var NB;
          const BB = (null !== (NB = IB.get(UB.anchor)) && void 0 !== NB ? NB : 0) + 1;
          IB.set(UB.anchor, BB), BB > 1 && (UB.anchor = `${UB.anchor}-${BB}`)
        }
        if ("heading" === UB.kind && 1 === UB.level && !QB) {
          QB = UB.text;
          continue
        }
        if ("heading" === UB.kind && UB.level <= jB) {
          dB.push({
            heading: UB,
            blocks: []
          });
          continue
        }
        const BB = dB.at(-1);
        BB ? BB.blocks.push(UB) : nB.push(UB)
      }
      const uB = BB => {
        for (;
          "rule" === (null === (jB = BB.at(-1)) || void 0 === jB ? void 0 : jB.kind);) {
          var jB;
          BB.pop()
        }
      };
      uB(nB);
      for (const UB of dB) uB(UB.blocks);
      return {
        title: QB,
        intro: nB,
        sections: dB
      }
    }

    function JB(BB) {
      return [{
        heading: null,
        blocks: BB.intro
      }, ...BB.sections.map((BB => ({
        heading: BB.heading,
        blocks: BB.blocks
      })))]
    }

    function mB(BB) {
      return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? mB(BB.blocks) : []))
    }

    function yB(BB) {
      switch (BB.kind) {
        case "heading":
        case "paragraph":
          return BB.text;
        case "code":
          return BB.code;
        case "table":
          return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
        case "list": {
          const jB = BB => BB.map((BB => `${BB.text} ${jB(BB.children)}`)).join(" ");
          return jB(BB.items)
        }
        case "quote":
          return BB.blocks.map(yB).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6444: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => pB,
      g: () => IB,
      h: () => NB
    });
    zB(6436);
    var QB = zB(62),
      nB = zB(4824),
      dB = zB(1148);
    const IB = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function NB(BB, jB) {
      return BB === jB ? BB : `${BB} (${jB})`
    }

    function uB(BB) {
      const jB = [];
      let zB = 0;
      for (const QB of BB.matchAll(IB)) {
        QB.index > zB && jB.push(BB.slice(zB, QB.index));
        const [, nB, IB, uB, UB, aB, pB] = QB;
        void 0 !== nB ? jB.push(NB(nB, IB)) : void 0 !== uB || void 0 !== UB ? jB.push((0, dB.jsx)("strong", {
          children: null !== uB && void 0 !== uB ? uB : UB
        }, QB.index)) : void 0 !== aB ? jB.push((0, dB.jsx)("em", {
          children: aB
        }, QB.index)) : jB.push((0, dB.jsx)("code", {
          children: pB
        }, QB.index)), zB = QB.index + QB[0].length
      }
      return zB < BB.length && jB.push(BB.slice(zB)), jB
    }

    function UB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const QB = BB.map(((BB, jB) => (0, dB.jsxs)("li", {
        children: [uB(BB.text), BB.children.length > 0 && UB(BB.children, !1)]
      }, jB)));
      return jB ? (0, dB.jsx)("ol", {
        start: zB,
        children: QB
      }) : (0, dB.jsx)("ul", {
        children: QB
      })
    }

    function aB(BB, jB) {
      switch (BB.kind) {
        case "heading":
          return BB.level <= 2 ? (0, dB.jsx)("h3", {
            children: uB(BB.text)
          }, jB) : (0, dB.jsx)("h4", {
            children: uB(BB.text)
          }, jB);
        case "paragraph":
          return (0, dB.jsx)("p", {
            children: uB(BB.text)
          }, jB);
        case "list":
          return (0, dB.jsx)(QB.Fragment, {
            children: UB(BB.items, BB.ordered)
          }, jB);
        case "quote":
          return (0, dB.jsx)("blockquote", {
            children: BB.blocks.map(((BB, jB) => aB(BB, jB)))
          }, jB);
        case "code":
          return (0, dB.jsx)("pre", {
            children: (0, dB.jsx)("code", {
              children: BB.code
            })
          }, jB);
        case "table":
          return (0, dB.jsxs)("table", {
            children: [(0, dB.jsx)("thead", {
              children: (0, dB.jsx)("tr", {
                children: BB.header.map(((BB, jB) => (0, dB.jsx)("th", {
                  children: uB(BB)
                }, jB)))
              })
            }), (0, dB.jsx)("tbody", {
              children: BB.rows.map(((BB, jB) => (0, dB.jsx)("tr", {
                children: BB.map(((BB, jB) => (0, dB.jsx)("td", {
                  children: uB(BB)
                }, jB)))
              }, jB)))
            })]
          }, jB);
        case "rule":
          return (0, dB.jsx)("hr", {}, jB)
      }
    }

    function pB(BB) {
      let {
        markdown: jB
      } = BB, zB = 0;
      return (0, dB.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, nB.B)(jB).map(((BB, jB) => {
          if ("list" !== BB.kind || !BB.ordered) return zB = 0, aB(BB, jB);
          const nB = zB + 1;
          return zB += BB.items.length, (0, dB.jsx)(QB.Fragment, {
            children: UB(BB.items, !0, nB)
          }, jB)
        }))
      })
    }
  },
  6433: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => GB,
      j: () => LB,
      f: () => tB,
      n: () => JB
    });
    var QB = zB(1253),
      nB = zB(6410),
      dB = zB(4965);
    const IB = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function NB(BB) {
      return (0, dB.h)(BB, IB, (jB => !/^my/i.test(jB[0]) || !/follow $/i.test(BB.slice(0, jB.index)))).length > 0
    }
    const uB = /\byou(?:r|'re|'ll)?\b/i,
      UB = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      aB = 2;

    function pB(BB) {
      return function(BB) {
        const jB = [];
        let zB = !1;
        for (const QB of BB.split("\n")) {
          if (/^\s*(```|~~~)/.test(QB)) {
            zB = !zB;
            continue
          }
          if (zB || /^\s*>/.test(QB)) continue;
          const BB = QB.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          jB.push(...(0, nB.o)(BB))
        }
        return jB
      }(BB).filter((BB => NB(BB) || UB.test(BB) && !uB.test(BB)))
    }
    const rB = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      sB = [{
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

    function JB(BB) {
      const jB = sB.findIndex((jB => jB.name === BB));
      return -1 === jB ? sB.length : jB
    }
    const mB = 2500,
      yB = 12e4;
    class kB extends Error {
      constructor(BB) {
        super(`Studio AI chat ${BB}`), this.reason = BB
      }
    }

    function GB(BB, jB) {
      const zB = new AbortController,
        QB = () => {
          zB.abort()
        },
        nB = setTimeout(QB, BB);
      return null !== jB && void 0 !== jB && jB.aborted && QB(), null === jB || void 0 === jB || jB.addEventListener("abort", QB, {
        once: !0
      }), {
        signal: zB.signal,
        clear: () => {
          clearTimeout(nB), null === jB || void 0 === jB || jB.removeEventListener("abort", QB)
        }
      }
    }

    function LB(BB, jB, zB) {
      return new Promise(((nB, dB) => {
        const IB = new AbortController,
          NB = () => {
            IB.abort(), dB((0, QB.f)(zB))
          };
        if (null !== zB && void 0 !== zB && zB.aborted) return void NB();
        null === zB || void 0 === zB || zB.addEventListener("abort", NB, {
          once: !0
        });
        const uB = sB.map((() => !1));
        let UB = null;
        const aB = sB.map((() => !1)),
          pB = sB.map((() => !1));
        sB.forEach(((QB, rB) => {
          const JB = GB(yB, IB.signal);
          SB(QB, [{
            role: "user",
            content: BB
          }], JB.signal).then((BB => {
            IB.signal.aborted || ("busy" === BB || "failed" === BB ? (aB[rB] = "busy" === BB, pB[rB] = !0) : null !== BB && (null === UB || rB < UB.rank) && (UB = {
              rank: rB,
              answer: {
                text: BB.text,
                model: QB.name
              }
            }, jB(UB.answer)))
          }), (BB => {
            IB.signal.aborted || (pB[rB] = !0, console.warn(`Studio AI: ${QB.name} couldn't be reached`, BB))
          })).finally((() => {
            JB.clear(), uB[rB] = !0, IB.signal.aborted || (() => {
              var BB, jB;
              const QB = null !== (BB = null === (jB = UB) || void 0 === jB ? void 0 : jB.rank) && void 0 !== BB ? BB : sB.length;
              uB.slice(0, QB).includes(!1) || (null === zB || void 0 === zB || zB.removeEventListener("abort", NB), IB.abort(), null !== UB ? nB({
                ...UB.answer,
                isFinal: !pB.slice(0, UB.rank).includes(!0)
              }) : dB(new kB(aB.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((BB => {
            console.error("Studio AI: showing an answer failed", BB)
          }))
        }))
      }))
    }

    function gB(BB) {
      var jB, zB;
      return "length" === (null === BB || void 0 === BB || null === (jB = BB.choices) || void 0 === jB || null === (zB = jB[0]) || void 0 === zB ? void 0 : zB.finish_reason)
    }
    async function tB(BB, jB, zB) {
      const QB = sB.find((jB => jB.name === BB));
      if (void 0 === QB) return "failed";
      const nB = GB(yB, zB);
      try {
        const BB = await SB(QB, jB, nB.signal);
        return null !== BB && "object" === typeof BB ? BB.isCutOff ? (console.warn(`Studio AI: ${QB.name}'s answer was cut off at the token limit`), null) : {
          text: BB.text
        } : BB
      } finally {
        nB.clear()
      }
    }
    async function SB(BB, jB, zB) {
      const QB = await fetch(rB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: BB.name,
          messages: jB,
          max_tokens: mB,
          temperature: BB.temperature,
          reasoning_effort: BB.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: zB
      });
      if (429 === QB.status) return "busy";
      if (!QB.ok) return console.warn(`Studio AI: ${BB.name} answered ${QB.status}`), "failed";
      const nB = await QB.json().catch((() => null)),
        dB = function(BB) {
          var jB, zB, QB;
          const nB = null === BB || void 0 === BB || null === (jB = BB.choices) || void 0 === jB || null === (zB = jB[0]) || void 0 === zB || null === (QB = zB.message) || void 0 === QB ? void 0 : QB.content;
          if ("string" !== typeof nB) return null;
          const dB = nB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === dB ? null : dB
        }(nB);
      return null !== dB && function(BB) {
        const jB = pB(BB);
        return jB.length >= aB || jB.some((BB => NB(BB)))
      }(dB) ? (console.warn(`Studio AI: ${BB.name} thought out loud instead of answering`), "failed") : null === dB ? null : {
        text: dB,
        isCutOff: gB(nB)
      }
    }
  },
  6410: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => LB,
      F: () => tB,
      I: () => GB,
      J: () => pB,
      K: () => UB,
      M: () => sB,
      b: () => JB,
      c: () => NB,
      e: () => IB,
      i: () => mB,
      l: () => rB,
      o: () => aB,
      p: () => dB,
      s: () => nB,
      t: () => gB,
      v: () => SB,
      y: () => yB
    });
    var QB = zB(4965);
    const nB = 2e3,
      dB = 2e4;

    function IB(BB) {
      return BB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function NB(BB) {
      return BB.replace(/\$/g, "\\$")
    }
    const uB = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function UB(BB, jB) {
      uB.lastIndex = jB;
      const zB = uB.exec(BB);
      return zB.index + zB[0].length
    }

    function aB(BB) {
      return (0, QB.x)(BB, /\s+/g, (0, QB.s)(".!?")).flatMap((BB => BB.split("\n")))
    }

    function pB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB;
      const QB = [...BB.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((BB => BB.index)),
        nB = QB.filter((BB => BB < jB)),
        dB = QB.find((BB => BB >= zB));
      return [0 === nB.length ? 0 : nB.at(-1) + 1, void 0 === dB ? BB.length : dB + 1]
    }

    function rB(BB, jB) {
      const zB = BB.charCodeAt(jB - 1);
      return BB.slice(0, jB > 0 && jB < BB.length && zB >= 55296 && zB <= 56319 ? jB - 1 : jB)
    }

    function sB(BB, jB) {
      return `${jB}${BB.replace(/\\/g,"\\\\").split(jB).join(`\\${jB}`)}${jB}`
    }

    function JB(BB) {
      return BB.charAt(0).toUpperCase() + BB.slice(1)
    }

    function mB(BB) {
      return Math.round(BB).toLocaleString("en-US")
    }

    function yB(BB) {
      return BB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((BB => "" !== BB))
    }
    const kB = 3;

    function GB(BB, jB) {
      return yB(BB).filter((BB => BB.length >= kB && !/\d/.test(BB))).map((BB => `${BB} ${jB}`))
    }

    function LB(BB) {
      return BB.split(/[\s:_]+/).filter((BB => "" !== BB)).map(IB).join("[`:_\\s]+")
    }

    function gB(BB) {
      return yB(BB.split(".").pop())
    }

    function tB(BB) {
      return BB.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function SB(BB) {
      let jB = null;
      return () => {
        const zB = jB ??= BB();
        return zB.catch((() => {
          jB === zB && (jB = null)
        })), zB
      }
    }
  },
  4965: (BB, jB, zB) => {
    function QB(BB) {
      return {
        notAfter: BB
      }
    }
    zB.d(jB, {
      e: () => uB,
      h: () => UB,
      i: () => NB,
      k: () => QB,
      m: () => nB,
      p: () => dB,
      s: () => IB,
      u: () => aB,
      x: () => pB
    });
    const nB = QB("\\w$."),
      dB = QB("\\w.,");

    function IB(BB) {
      return jB => uB(jB, BB)
    }

    function NB(BB) {
      return jB => !BB.test(jB.input.slice(0, jB.index))
    }

    function uB(BB, jB) {
      return BB.index > 0 && new RegExp(`[${jB}]`).test(BB.input[BB.index - 1])
    }

    function UB(BB, jB, zB) {
      return function(BB) {
        return void 0 !== BB && "function" !== typeof BB
      }(zB) ? function(BB, jB, zB) {
        const QB = jB.flags.replace(/[gy]/g, ""),
          nB = new RegExp(`[^${zB}](?:${jB.source})`, `${QB}g`),
          dB = [],
          IB = zB => {
            const QB = zB.index + zB[0].length;
            return ("" === zB[0] ? rB(BB, jB, QB) : QB) - 1
          },
          NB = new RegExp(`(?:${jB.source})`, `${QB}y`).exec(BB);
        if (NB) {
          if (dB.push(NB), !jB.global) return dB;
          nB.lastIndex = IB(NB)
        }
        for (let uB = nB.exec(BB); uB; uB = nB.exec(BB)) {
          const zB = rB(BB, jB, uB.index) - uB.index;
          if (uB[0] = uB[0].slice(zB), uB.index += zB, dB.push(uB), !jB.global) break;
          nB.lastIndex = IB(uB)
        }
        return dB
      }(BB, jB, zB.notAfter) : function(BB, jB, zB) {
        const QB = new RegExp(jB.source, `${jB.flags.replace(/[gy]/g,"")}g`),
          nB = [];
        for (let dB = QB.exec(BB); dB; dB = QB.exec(BB))
          if (!zB || zB(dB)) {
            if (nB.push(dB), !jB.global) break;
            "" === dB[0] && (QB.lastIndex = rB(BB, jB, QB.lastIndex))
          } else QB.lastIndex = rB(BB, jB, dB.index);
        return nB
      }(BB, jB, zB)
    }

    function aB(BB, jB, zB, QB) {
      let nB = "",
        dB = 0;
      for (const IB of UB(BB, jB, zB)) nB += BB.slice(dB, IB.index) + QB(IB), dB = IB.index + IB[0].length;
      return nB + BB.slice(dB)
    }

    function pB(BB, jB, zB) {
      const QB = [];
      let nB = 0;
      for (const dB of UB(BB, jB, zB)) QB.push(BB.slice(nB, dB.index)), nB = dB.index + dB[0].length;
      return [...QB, BB.slice(nB)]
    }

    function rB(BB, jB, zB) {
      var QB;
      return zB + (jB.unicode && (null !== (QB = BB.codePointAt(zB)) && void 0 !== QB ? QB : 0) > 65535 ? 2 : 1)
    }
  },
  6436: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);