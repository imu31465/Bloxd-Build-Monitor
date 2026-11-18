export const id = 71;
export const ids = [71];
export const modules = {
  4131: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      f: () => lB,
      g: () => HB,
      i: () => uB,
      j: () => JB,
      k: () => yB,
      m: () => pB,
      n: () => DB,
      p: () => OB,
      s: () => LB
    });
    const VB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function yB(BB) {
      try {
        return decodeURIComponent(BB.slice(1))
      } catch {
        return BB.slice(1)
      }
    }

    function pB(BB) {
      return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const lB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${VB.source}`, "g");

    function JB(BB, TB) {
      return 2 === BB.length ? TB.replace(/^ (.*) $/, "$1") : TB
    }

    function YB(BB) {
      return "" === BB.trim()
    }

    function gB(BB) {
      const TB = [];
      for (const dB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) TB.length > 0 && TB[TB.length - 1].endsWith("\\") ? TB[TB.length - 1] += `|${dB}` : TB.push(dB);
      return TB.map((BB => BB.trim().replaceAll("\\|", "|")))
    }
    const oB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function kB(BB) {
      const TB = [],
        dB = [{
          indent: -1,
          items: TB
        }];
      let VB = null;
      for (const yB of BB) {
        const BB = yB.match(oB);
        if (!BB) {
          VB && (VB.text += ` ${yB.trim()}`);
          continue
        }
        const TB = BB[1].replace(/\t/g, "  ").length;
        for (; TB <= dB[dB.length - 1].indent;) dB.pop();
        VB = {
          text: BB[3].trim(),
          children: []
        }, dB[dB.length - 1].items.push(VB), dB.push({
          indent: TB,
          items: VB.children
        })
      }
      return TB
    }

    function LB(BB) {
      const TB = BB.replace(/\r\n/g, "\n").split("\n"),
        dB = [];
      let VB = 0;
      for (; VB < TB.length;) {
        const BB = TB[VB];
        if (YB(BB)) {
          VB++;
          continue
        }
        const yB = BB.match(/^\s*```\s*(\w*)\s*$/);
        if (yB) {
          const BB = [];
          for (VB++; VB < TB.length && !/^\s*```\s*$/.test(TB[VB]);) BB.push(TB[VB]), VB++;
          VB++, dB.push({
            kind: "code",
            lang: yB[1] || "text",
            code: BB.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const lB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (lB) {
          const BB = lB[2].trim();
          dB.push({
            kind: "heading",
            level: lB[1].length,
            text: BB,
            anchor: pB(BB)
          }), VB++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
          dB.push({
            kind: "rule"
          }), VB++;
          continue
        }
        if (BB.trim().startsWith("|") && VB + 1 < TB.length && /^\s*\|[\s:|-]+\|\s*$/.test(TB[VB + 1])) {
          const yB = gB(BB),
            pB = [];
          for (VB += 2; VB < TB.length && TB[VB].trim().startsWith("|");) pB.push(gB(TB[VB])), VB++;
          dB.push({
            kind: "table",
            header: yB,
            rows: pB
          });
          continue
        }
        if (BB.startsWith(">")) {
          const BB = [];
          for (; VB < TB.length && TB[VB].startsWith(">");) BB.push(TB[VB].replace(/^>\s?/, "")), VB++;
          dB.push({
            kind: "quote",
            blocks: LB(BB.join("\n"))
          });
          continue
        }
        if (oB.test(BB)) {
          const yB = [],
            pB = /^\s*\d+\./.test(BB);
          for (; VB < TB.length && !YB(TB[VB]) && (oB.test(TB[VB]) || /^\s+\S/.test(TB[VB]));) yB.push(TB[VB]), VB++;
          dB.push({
            kind: "list",
            ordered: pB,
            items: kB(yB)
          });
          continue
        }
        const JB = [];
        for (; VB < TB.length && !YB(TB[VB]) && !/^\s*```/.test(TB[VB]) && !/^#{1,6}\s/.test(TB[VB]) && !TB[VB].startsWith(">") && !oB.test(TB[VB]) && (!TB[VB].trim().startsWith("|") || 0 !== JB.length);) JB.push(TB[VB].trim()), VB++;
        0 === JB.length && (JB.push(TB[VB].trim()), VB++), dB.push({
          kind: "paragraph",
          text: JB.join(" ")
        })
      }
      return dB
    }

    function OB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const dB = LB(BB);
      let VB = "";
      const yB = [],
        pB = [],
        lB = new Map;
      for (const gB of dB) {
        if ("heading" === gB.kind) {
          var JB;
          const BB = (null !== (JB = lB.get(gB.anchor)) && void 0 !== JB ? JB : 0) + 1;
          lB.set(gB.anchor, BB), BB > 1 && (gB.anchor = `${gB.anchor}-${BB}`)
        }
        if ("heading" === gB.kind && 1 === gB.level && !VB) {
          VB = gB.text;
          continue
        }
        if ("heading" === gB.kind && gB.level <= TB) {
          pB.push({
            heading: gB,
            blocks: []
          });
          continue
        }
        const BB = pB.at(-1);
        BB ? BB.blocks.push(gB) : yB.push(gB)
      }
      const YB = BB => {
        for (;
          "rule" === (null === (TB = BB.at(-1)) || void 0 === TB ? void 0 : TB.kind);) {
          var TB;
          BB.pop()
        }
      };
      YB(yB);
      for (const gB of pB) YB(gB.blocks);
      return {
        title: VB,
        intro: yB,
        sections: pB
      }
    }

    function DB(BB) {
      return [{
        heading: null,
        blocks: BB.intro
      }, ...BB.sections.map((BB => ({
        heading: BB.heading,
        blocks: BB.blocks
      })))]
    }

    function uB(BB) {
      return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? uB(BB.blocks) : []))
    }

    function HB(BB) {
      switch (BB.kind) {
        case "heading":
        case "paragraph":
          return BB.text;
        case "code":
          return BB.code;
        case "table":
          return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
        case "list": {
          const TB = BB => BB.map((BB => `${BB.text} ${TB(BB.children)}`)).join(" ");
          return TB(BB.items)
        }
        case "quote":
          return BB.blocks.map(HB).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5853: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB,
      f: () => lB,
      i: () => JB
    });
    dB(5849);
    var VB = dB(62),
      yB = dB(4131),
      pB = dB(980);
    const lB = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function JB(BB, TB) {
      return BB === TB ? BB : `${BB} (${TB})`
    }

    function YB(BB) {
      const TB = [];
      let dB = 0;
      for (const VB of BB.matchAll(lB)) {
        VB.index > dB && TB.push(BB.slice(dB, VB.index));
        const [, yB, lB, YB, gB, oB, kB] = VB;
        void 0 !== yB ? TB.push(JB(yB, lB)) : void 0 !== YB || void 0 !== gB ? TB.push((0, pB.jsx)("strong", {
          children: null !== YB && void 0 !== YB ? YB : gB
        }, VB.index)) : void 0 !== oB ? TB.push((0, pB.jsx)("em", {
          children: oB
        }, VB.index)) : TB.push((0, pB.jsx)("code", {
          children: kB
        }, VB.index)), dB = VB.index + VB[0].length
      }
      return dB < BB.length && TB.push(BB.slice(dB)), TB
    }

    function gB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const VB = BB.map(((BB, TB) => (0, pB.jsxs)("li", {
        children: [YB(BB.text), BB.children.length > 0 && gB(BB.children, !1)]
      }, TB)));
      return TB ? (0, pB.jsx)("ol", {
        start: dB,
        children: VB
      }) : (0, pB.jsx)("ul", {
        children: VB
      })
    }

    function oB(BB, TB) {
      switch (BB.kind) {
        case "heading":
          return BB.level <= 2 ? (0, pB.jsx)("h3", {
            children: YB(BB.text)
          }, TB) : (0, pB.jsx)("h4", {
            children: YB(BB.text)
          }, TB);
        case "paragraph":
          return (0, pB.jsx)("p", {
            children: YB(BB.text)
          }, TB);
        case "list":
          return (0, pB.jsx)(VB.Fragment, {
            children: gB(BB.items, BB.ordered)
          }, TB);
        case "quote":
          return (0, pB.jsx)("blockquote", {
            children: BB.blocks.map(((BB, TB) => oB(BB, TB)))
          }, TB);
        case "code":
          return (0, pB.jsx)("pre", {
            children: (0, pB.jsx)("code", {
              children: BB.code
            })
          }, TB);
        case "table":
          return (0, pB.jsxs)("table", {
            children: [(0, pB.jsx)("thead", {
              children: (0, pB.jsx)("tr", {
                children: BB.header.map(((BB, TB) => (0, pB.jsx)("th", {
                  children: YB(BB)
                }, TB)))
              })
            }), (0, pB.jsx)("tbody", {
              children: BB.rows.map(((BB, TB) => (0, pB.jsx)("tr", {
                children: BB.map(((BB, TB) => (0, pB.jsx)("td", {
                  children: YB(BB)
                }, TB)))
              }, TB)))
            })]
          }, TB);
        case "rule":
          return (0, pB.jsx)("hr", {}, TB)
      }
    }

    function kB(BB) {
      let {
        markdown: TB
      } = BB, dB = 0;
      return (0, pB.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, yB.s)(TB).map(((BB, TB) => {
          if ("list" !== BB.kind || !BB.ordered) return dB = 0, oB(BB, TB);
          const yB = dB + 1;
          return dB += BB.items.length, (0, pB.jsx)(VB.Fragment, {
            children: gB(BB.items, !0, yB)
          }, TB)
        }))
      })
    }
  },
  5844: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => vB,
      h: () => mB,
      f: () => NB,
      i: () => DB
    });
    var VB = dB(3138),
      yB = dB(5809),
      pB = dB(4265);
    const lB = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function JB(BB) {
      return (0, pB.d)(BB, lB, (TB => !/^my/i.test(TB[0]) || !/follow $/i.test(BB.slice(0, TB.index)))).length > 0
    }
    const YB = /\byou(?:r|'re|'ll)?\b/i,
      gB = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      oB = 2;

    function kB(BB) {
      return function(BB) {
        const TB = [];
        let dB = !1;
        for (const VB of BB.split("\n")) {
          if (/^\s*(```|~~~)/.test(VB)) {
            dB = !dB;
            continue
          }
          if (dB || /^\s*>/.test(VB)) continue;
          const BB = VB.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          TB.push(...(0, yB.o)(BB))
        }
        return TB
      }(BB).filter((BB => JB(BB) || gB.test(BB) && !YB.test(BB)))
    }
    const LB = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      OB = [{
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

    function DB(BB) {
      const TB = OB.findIndex((TB => TB.name === BB));
      return -1 === TB ? OB.length : TB
    }
    const uB = 2500,
      HB = 12e4;
    class EB extends Error {
      constructor(BB) {
        super(`Studio AI chat ${BB}`), this.reason = BB
      }
    }

    function vB(BB, TB) {
      const dB = new AbortController,
        VB = () => {
          dB.abort()
        },
        yB = setTimeout(VB, BB);
      return null !== TB && void 0 !== TB && TB.aborted && VB(), null === TB || void 0 === TB || TB.addEventListener("abort", VB, {
        once: !0
      }), {
        signal: dB.signal,
        clear: () => {
          clearTimeout(yB), null === TB || void 0 === TB || TB.removeEventListener("abort", VB)
        }
      }
    }

    function mB(BB, TB, dB) {
      return new Promise(((yB, pB) => {
        const lB = new AbortController,
          JB = () => {
            lB.abort(), pB((0, VB.c)(dB))
          };
        if (null !== dB && void 0 !== dB && dB.aborted) return void JB();
        null === dB || void 0 === dB || dB.addEventListener("abort", JB, {
          once: !0
        });
        const YB = OB.map((() => !1));
        let gB = null;
        const oB = OB.map((() => !1)),
          kB = OB.map((() => !1));
        OB.forEach(((VB, LB) => {
          const DB = vB(HB, lB.signal);
          tB(VB, [{
            role: "user",
            content: BB
          }], DB.signal).then((BB => {
            lB.signal.aborted || ("busy" === BB || "failed" === BB ? (oB[LB] = "busy" === BB, kB[LB] = !0) : null !== BB && (null === gB || LB < gB.rank) && (gB = {
              rank: LB,
              answer: {
                text: BB.text,
                model: VB.name
              }
            }, TB(gB.answer)))
          }), (BB => {
            lB.signal.aborted || (kB[LB] = !0, console.warn(`Studio AI: ${VB.name} couldn't be reached`, BB))
          })).finally((() => {
            DB.clear(), YB[LB] = !0, lB.signal.aborted || (() => {
              var BB, TB;
              const VB = null !== (BB = null === (TB = gB) || void 0 === TB ? void 0 : TB.rank) && void 0 !== BB ? BB : OB.length;
              YB.slice(0, VB).includes(!1) || (null === dB || void 0 === dB || dB.removeEventListener("abort", JB), lB.abort(), null !== gB ? yB({
                ...gB.answer,
                isFinal: !kB.slice(0, gB.rank).includes(!0)
              }) : pB(new EB(oB.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((BB => {
            console.error("Studio AI: showing an answer failed", BB)
          }))
        }))
      }))
    }

    function iB(BB) {
      var TB, dB;
      return "length" === (null === BB || void 0 === BB || null === (TB = BB.choices) || void 0 === TB || null === (dB = TB[0]) || void 0 === dB ? void 0 : dB.finish_reason)
    }
    async function NB(BB, TB, dB) {
      const VB = OB.find((TB => TB.name === BB));
      if (void 0 === VB) return "failed";
      const yB = vB(HB, dB);
      try {
        const BB = await tB(VB, TB, yB.signal);
        return null !== BB && "object" === typeof BB ? BB.isCutOff ? (console.warn(`Studio AI: ${VB.name}'s answer was cut off at the token limit`), null) : {
          text: BB.text
        } : BB
      } finally {
        yB.clear()
      }
    }
    async function tB(BB, TB, dB) {
      const VB = await fetch(LB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: BB.name,
          messages: TB,
          max_tokens: uB,
          temperature: BB.temperature,
          reasoning_effort: BB.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: dB
      });
      if (429 === VB.status) return "busy";
      if (!VB.ok) return console.warn(`Studio AI: ${BB.name} answered ${VB.status}`), "failed";
      const yB = await VB.json().catch((() => null)),
        pB = function(BB) {
          var TB, dB, VB;
          const yB = null === BB || void 0 === BB || null === (TB = BB.choices) || void 0 === TB || null === (dB = TB[0]) || void 0 === dB || null === (VB = dB.message) || void 0 === VB ? void 0 : VB.content;
          if ("string" !== typeof yB) return null;
          const pB = yB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === pB ? null : pB
        }(yB);
      return null !== pB && function(BB) {
        const TB = kB(BB);
        return TB.length >= oB || TB.some((BB => JB(BB)))
      }(pB) ? (console.warn(`Studio AI: ${BB.name} thought out loud instead of answering`), "failed") : null === pB ? null : {
        text: pB,
        isCutOff: iB(yB)
      }
    }
  },
  5809: (BB, TB, dB) => {
    dB.d(TB, {
      D: () => NB,
      F: () => vB,
      J: () => kB,
      N: () => gB,
      R: () => OB,
      b: () => DB,
      d: () => JB,
      h: () => lB,
      i: () => uB,
      l: () => LB,
      o: () => oB,
      p: () => pB,
      q: () => yB,
      s: () => iB,
      t: () => tB,
      x: () => HB,
      z: () => mB
    });
    var VB = dB(4265);
    const yB = 2e3,
      pB = 2e4;

    function lB(BB) {
      return BB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function JB(BB) {
      return BB.replace(/\$/g, "\\$")
    }
    const YB = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function gB(BB, TB) {
      YB.lastIndex = TB;
      const dB = YB.exec(BB);
      return dB.index + dB[0].length
    }

    function oB(BB) {
      return (0, VB.B)(BB, /\s+/g, (0, VB.t)(".!?")).flatMap((BB => BB.split("\n")))
    }

    function kB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB;
      const VB = [...BB.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((BB => BB.index)),
        yB = VB.filter((BB => BB < TB)),
        pB = VB.find((BB => BB >= dB));
      return [0 === yB.length ? 0 : yB.at(-1) + 1, void 0 === pB ? BB.length : pB + 1]
    }

    function LB(BB, TB) {
      const dB = BB.charCodeAt(TB - 1);
      return BB.slice(0, TB > 0 && TB < BB.length && dB >= 55296 && dB <= 56319 ? TB - 1 : TB)
    }

    function OB(BB, TB) {
      return `${TB}${BB.replace(/\\/g,"\\\\").split(TB).join(`\\${TB}`)}${TB}`
    }

    function DB(BB) {
      return BB.charAt(0).toUpperCase() + BB.slice(1)
    }

    function uB(BB) {
      return Math.round(BB).toLocaleString("en-US")
    }

    function HB(BB) {
      return BB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((BB => "" !== BB))
    }
    const EB = 3;

    function vB(BB, TB) {
      return HB(BB).filter((BB => BB.length >= EB && !/\d/.test(BB))).map((BB => `${BB} ${TB}`))
    }

    function mB(BB) {
      return BB.split(/[\s:_]+/).filter((BB => "" !== BB)).map(lB).join("[`:_\\s]+")
    }

    function iB(BB) {
      return HB(BB.split(".").pop())
    }

    function NB(BB) {
      return BB.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function tB(BB) {
      let TB = null;
      return () => {
        const dB = TB ??= BB();
        return dB.catch((() => {
          TB === dB && (TB = null)
        })), dB
      }
    }
  },
  4265: (BB, TB, dB) => {
    function VB(BB) {
      return {
        notAfter: BB
      }
    }
    dB.d(TB, {
      B: () => kB,
      b: () => YB,
      d: () => gB,
      h: () => JB,
      j: () => VB,
      l: () => yB,
      p: () => pB,
      t: () => lB,
      x: () => oB
    });
    const yB = VB("\\w$."),
      pB = VB("\\w.,");

    function lB(BB) {
      return TB => YB(TB, BB)
    }

    function JB(BB) {
      return TB => !BB.test(TB.input.slice(0, TB.index))
    }

    function YB(BB, TB) {
      return BB.index > 0 && new RegExp(`[${TB}]`).test(BB.input[BB.index - 1])
    }

    function gB(BB, TB, dB) {
      return function(BB) {
        return void 0 !== BB && "function" !== typeof BB
      }(dB) ? function(BB, TB, dB) {
        const VB = TB.flags.replace(/[gy]/g, ""),
          yB = new RegExp(`[^${dB}](?:${TB.source})`, `${VB}g`),
          pB = [],
          lB = dB => {
            const VB = dB.index + dB[0].length;
            return ("" === dB[0] ? LB(BB, TB, VB) : VB) - 1
          },
          JB = new RegExp(`(?:${TB.source})`, `${VB}y`).exec(BB);
        if (JB) {
          if (pB.push(JB), !TB.global) return pB;
          yB.lastIndex = lB(JB)
        }
        for (let YB = yB.exec(BB); YB; YB = yB.exec(BB)) {
          const dB = LB(BB, TB, YB.index) - YB.index;
          if (YB[0] = YB[0].slice(dB), YB.index += dB, pB.push(YB), !TB.global) break;
          yB.lastIndex = lB(YB)
        }
        return pB
      }(BB, TB, dB.notAfter) : function(BB, TB, dB) {
        const VB = new RegExp(TB.source, `${TB.flags.replace(/[gy]/g,"")}g`),
          yB = [];
        for (let pB = VB.exec(BB); pB; pB = VB.exec(BB))
          if (!dB || dB(pB)) {
            if (yB.push(pB), !TB.global) break;
            "" === pB[0] && (VB.lastIndex = LB(BB, TB, VB.lastIndex))
          } else VB.lastIndex = LB(BB, TB, pB.index);
        return yB
      }(BB, TB, dB)
    }

    function oB(BB, TB, dB, VB) {
      let yB = "",
        pB = 0;
      for (const lB of gB(BB, TB, dB)) yB += BB.slice(pB, lB.index) + VB(lB), pB = lB.index + lB[0].length;
      return yB + BB.slice(pB)
    }

    function kB(BB, TB, dB) {
      const VB = [];
      let yB = 0;
      for (const pB of gB(BB, TB, dB)) VB.push(BB.slice(yB, pB.index)), yB = pB.index + pB[0].length;
      return [...VB, BB.slice(yB)]
    }

    function LB(BB, TB, dB) {
      var VB;
      return dB + (TB.unicode && (null !== (VB = BB.codePointAt(dB)) && void 0 !== VB ? VB : 0) > 65535 ? 2 : 1)
    }
  },
  5849: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);