export const id = 94;
export const ids = [94];
export const modules = {
  5228: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => oB,
      k: () => ZB,
      l: () => qB,
      p: () => jB,
      r: () => DB,
      s: () => QB,
      t: () => pB,
      u: () => lB,
      v: () => zB
    });
    const YB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function DB(BB) {
      try {
        return decodeURIComponent(BB.slice(1))
      } catch {
        return BB.slice(1)
      }
    }

    function QB(BB) {
      return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const oB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${YB.source}`, "g");

    function jB(BB, OB) {
      return 2 === BB.length ? OB.replace(/^ (.*) $/, "$1") : OB
    }

    function yB(BB) {
      return "" === BB.trim()
    }

    function JB(BB) {
      const OB = [];
      for (const GB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) OB.length > 0 && OB[OB.length - 1].endsWith("\\") ? OB[OB.length - 1] += `|${GB}` : OB.push(GB);
      return OB.map((BB => BB.trim().replaceAll("\\|", "|")))
    }
    const MB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function PB(BB) {
      const OB = [],
        GB = [{
          indent: -1,
          items: OB
        }];
      let YB = null;
      for (const DB of BB) {
        const BB = DB.match(MB);
        if (!BB) {
          YB && (YB.text += ` ${DB.trim()}`);
          continue
        }
        const OB = BB[1].replace(/\t/g, "  ").length;
        for (; OB <= GB[GB.length - 1].indent;) GB.pop();
        YB = {
          text: BB[3].trim(),
          children: []
        }, GB[GB.length - 1].items.push(YB), GB.push({
          indent: OB,
          items: YB.children
        })
      }
      return OB
    }

    function zB(BB) {
      const OB = BB.replace(/\r\n/g, "\n").split("\n"),
        GB = [];
      let YB = 0;
      for (; YB < OB.length;) {
        const BB = OB[YB];
        if (yB(BB)) {
          YB++;
          continue
        }
        const DB = BB.match(/^\s*```\s*(\w*)\s*$/);
        if (DB) {
          const BB = [];
          for (YB++; YB < OB.length && !/^\s*```\s*$/.test(OB[YB]);) BB.push(OB[YB]), YB++;
          YB++, GB.push({
            kind: "code",
            lang: DB[1] || "text",
            code: BB.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const oB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (oB) {
          const BB = oB[2].trim();
          GB.push({
            kind: "heading",
            level: oB[1].length,
            text: BB,
            anchor: QB(BB)
          }), YB++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
          GB.push({
            kind: "rule"
          }), YB++;
          continue
        }
        if (BB.trim().startsWith("|") && YB + 1 < OB.length && /^\s*\|[\s:|-]+\|\s*$/.test(OB[YB + 1])) {
          const DB = JB(BB),
            QB = [];
          for (YB += 2; YB < OB.length && OB[YB].trim().startsWith("|");) QB.push(JB(OB[YB])), YB++;
          GB.push({
            kind: "table",
            header: DB,
            rows: QB
          });
          continue
        }
        if (BB.startsWith(">")) {
          const BB = [];
          for (; YB < OB.length && OB[YB].startsWith(">");) BB.push(OB[YB].replace(/^>\s?/, "")), YB++;
          GB.push({
            kind: "quote",
            blocks: zB(BB.join("\n"))
          });
          continue
        }
        if (MB.test(BB)) {
          const DB = [],
            QB = /^\s*\d+\./.test(BB);
          for (; YB < OB.length && !yB(OB[YB]) && (MB.test(OB[YB]) || /^\s+\S/.test(OB[YB]));) DB.push(OB[YB]), YB++;
          GB.push({
            kind: "list",
            ordered: QB,
            items: PB(DB)
          });
          continue
        }
        const jB = [];
        for (; YB < OB.length && !yB(OB[YB]) && !/^\s*```/.test(OB[YB]) && !/^#{1,6}\s/.test(OB[YB]) && !OB[YB].startsWith(">") && !MB.test(OB[YB]) && (!OB[YB].trim().startsWith("|") || 0 !== jB.length);) jB.push(OB[YB].trim()), YB++;
        0 === jB.length && (jB.push(OB[YB].trim()), YB++), GB.push({
          kind: "paragraph",
          text: jB.join(" ")
        })
      }
      return GB
    }

    function lB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const GB = zB(BB);
      let YB = "";
      const DB = [],
        QB = [],
        oB = new Map;
      for (const JB of GB) {
        if ("heading" === JB.kind) {
          var jB;
          const BB = (null !== (jB = oB.get(JB.anchor)) && void 0 !== jB ? jB : 0) + 1;
          oB.set(JB.anchor, BB), BB > 1 && (JB.anchor = `${JB.anchor}-${BB}`)
        }
        if ("heading" === JB.kind && 1 === JB.level && !YB) {
          YB = JB.text;
          continue
        }
        if ("heading" === JB.kind && JB.level <= OB) {
          QB.push({
            heading: JB,
            blocks: []
          });
          continue
        }
        const BB = QB.at(-1);
        BB ? BB.blocks.push(JB) : DB.push(JB)
      }
      const yB = BB => {
        for (;
          "rule" === (null === (OB = BB.at(-1)) || void 0 === OB ? void 0 : OB.kind);) {
          var OB;
          BB.pop()
        }
      };
      yB(DB);
      for (const JB of QB) yB(JB.blocks);
      return {
        title: YB,
        intro: DB,
        sections: QB
      }
    }

    function pB(BB) {
      return [{
        heading: null,
        blocks: BB.intro
      }, ...BB.sections.map((BB => ({
        heading: BB.heading,
        blocks: BB.blocks
      })))]
    }

    function qB(BB) {
      return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? qB(BB.blocks) : []))
    }

    function ZB(BB) {
      switch (BB.kind) {
        case "heading":
        case "paragraph":
          return BB.text;
        case "code":
          return BB.code;
        case "table":
          return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
        case "list": {
          const OB = BB => BB.map((BB => `${BB.text} ${OB(BB.children)}`)).join(" ");
          return OB(BB.items)
        }
        case "quote":
          return BB.blocks.map(ZB).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7009: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB,
      i: () => oB,
      j: () => jB
    });
    GB(7006);
    var YB = GB(56),
      DB = GB(5228),
      QB = GB(1282);
    const oB = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function jB(BB, OB) {
      return BB === OB ? BB : `${BB} (${OB})`
    }

    function yB(BB) {
      const OB = [];
      let GB = 0;
      for (const YB of BB.matchAll(oB)) {
        YB.index > GB && OB.push(BB.slice(GB, YB.index));
        const [, DB, oB, yB, JB, MB, PB] = YB;
        void 0 !== DB ? OB.push(jB(DB, oB)) : void 0 !== yB || void 0 !== JB ? OB.push((0, QB.jsx)("strong", {
          children: null !== yB && void 0 !== yB ? yB : JB
        }, YB.index)) : void 0 !== MB ? OB.push((0, QB.jsx)("em", {
          children: MB
        }, YB.index)) : OB.push((0, QB.jsx)("code", {
          children: PB
        }, YB.index)), GB = YB.index + YB[0].length
      }
      return GB < BB.length && OB.push(BB.slice(GB)), OB
    }

    function JB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const YB = BB.map(((BB, OB) => (0, QB.jsxs)("li", {
        children: [yB(BB.text), BB.children.length > 0 && JB(BB.children, !1)]
      }, OB)));
      return OB ? (0, QB.jsx)("ol", {
        start: GB,
        children: YB
      }) : (0, QB.jsx)("ul", {
        children: YB
      })
    }

    function MB(BB, OB) {
      switch (BB.kind) {
        case "heading":
          return BB.level <= 2 ? (0, QB.jsx)("h3", {
            children: yB(BB.text)
          }, OB) : (0, QB.jsx)("h4", {
            children: yB(BB.text)
          }, OB);
        case "paragraph":
          return (0, QB.jsx)("p", {
            children: yB(BB.text)
          }, OB);
        case "list":
          return (0, QB.jsx)(YB.Fragment, {
            children: JB(BB.items, BB.ordered)
          }, OB);
        case "quote":
          return (0, QB.jsx)("blockquote", {
            children: BB.blocks.map(((BB, OB) => MB(BB, OB)))
          }, OB);
        case "code":
          return (0, QB.jsx)("pre", {
            children: (0, QB.jsx)("code", {
              children: BB.code
            })
          }, OB);
        case "table":
          return (0, QB.jsxs)("table", {
            children: [(0, QB.jsx)("thead", {
              children: (0, QB.jsx)("tr", {
                children: BB.header.map(((BB, OB) => (0, QB.jsx)("th", {
                  children: yB(BB)
                }, OB)))
              })
            }), (0, QB.jsx)("tbody", {
              children: BB.rows.map(((BB, OB) => (0, QB.jsx)("tr", {
                children: BB.map(((BB, OB) => (0, QB.jsx)("td", {
                  children: yB(BB)
                }, OB)))
              }, OB)))
            })]
          }, OB);
        case "rule":
          return (0, QB.jsx)("hr", {}, OB)
      }
    }

    function PB(BB) {
      let {
        markdown: OB
      } = BB, GB = 0;
      return (0, QB.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, DB.v)(OB).map(((BB, OB) => {
          if ("list" !== BB.kind || !BB.ordered) return GB = 0, MB(BB, OB);
          const DB = GB + 1;
          return GB += BB.items.length, (0, QB.jsx)(YB.Fragment, {
            children: JB(BB.items, !0, DB)
          }, OB)
        }))
      })
    }
  },
  7004: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => RB,
      l: () => WB,
      h: () => VB,
      m: () => pB
    });
    var YB = GB(1200),
      DB = GB(6960),
      QB = GB(5366);
    const oB = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function jB(BB) {
      return (0, QB.f)(BB, oB, (OB => !/^my/i.test(OB[0]) || !/follow $/i.test(BB.slice(0, OB.index)))).length > 0
    }
    const yB = /\byou(?:r|'re|'ll)?\b/i,
      JB = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      MB = 2;

    function PB(BB) {
      return function(BB) {
        const OB = [];
        let GB = !1;
        for (const YB of BB.split("\n")) {
          if (/^\s*(```|~~~)/.test(YB)) {
            GB = !GB;
            continue
          }
          if (GB || /^\s*>/.test(YB)) continue;
          const BB = YB.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          OB.push(...(0, DB.l)(BB))
        }
        return OB
      }(BB).filter((BB => jB(BB) || JB.test(BB) && !yB.test(BB)))
    }
    const zB = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      lB = [{
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

    function pB(BB) {
      const OB = lB.findIndex((OB => OB.name === BB));
      return -1 === OB ? lB.length : OB
    }
    const qB = 2500,
      ZB = 12e4;
    class NB extends Error {
      constructor(BB) {
        super(`Studio AI chat ${BB}`), this.reason = BB
      }
    }

    function RB(BB, OB) {
      const GB = new AbortController,
        YB = () => {
          GB.abort()
        },
        DB = setTimeout(YB, BB);
      return null !== OB && void 0 !== OB && OB.aborted && YB(), null === OB || void 0 === OB || OB.addEventListener("abort", YB, {
        once: !0
      }), {
        signal: GB.signal,
        clear: () => {
          clearTimeout(DB), null === OB || void 0 === OB || OB.removeEventListener("abort", YB)
        }
      }
    }

    function WB(BB, OB, GB) {
      return new Promise(((DB, QB) => {
        const oB = new AbortController,
          jB = () => {
            oB.abort(), QB((0, YB.i)(GB))
          };
        if (null !== GB && void 0 !== GB && GB.aborted) return void jB();
        null === GB || void 0 === GB || GB.addEventListener("abort", jB, {
          once: !0
        });
        const yB = lB.map((() => !1));
        let JB = null;
        const MB = lB.map((() => !1)),
          PB = lB.map((() => !1));
        lB.forEach(((YB, zB) => {
          const pB = RB(ZB, oB.signal);
          SB(YB, [{
            role: "user",
            content: BB
          }], pB.signal).then((BB => {
            oB.signal.aborted || ("busy" === BB || "failed" === BB ? (MB[zB] = "busy" === BB, PB[zB] = !0) : null !== BB && (null === JB || zB < JB.rank) && (JB = {
              rank: zB,
              answer: {
                text: BB.text,
                model: YB.name
              }
            }, OB(JB.answer)))
          }), (BB => {
            oB.signal.aborted || (PB[zB] = !0, console.warn(`Studio AI: ${YB.name} couldn't be reached`, BB))
          })).finally((() => {
            pB.clear(), yB[zB] = !0, oB.signal.aborted || (() => {
              var BB, OB;
              const YB = null !== (BB = null === (OB = JB) || void 0 === OB ? void 0 : OB.rank) && void 0 !== BB ? BB : lB.length;
              yB.slice(0, YB).includes(!1) || (null === GB || void 0 === GB || GB.removeEventListener("abort", jB), oB.abort(), null !== JB ? DB({
                ...JB.answer,
                isFinal: !PB.slice(0, JB.rank).includes(!0)
              }) : QB(new NB(MB.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((BB => {
            console.error("Studio AI: showing an answer failed", BB)
          }))
        }))
      }))
    }

    function AB(BB) {
      var OB, GB;
      return "length" === (null === BB || void 0 === BB || null === (OB = BB.choices) || void 0 === OB || null === (GB = OB[0]) || void 0 === GB ? void 0 : GB.finish_reason)
    }
    async function VB(BB, OB, GB) {
      const YB = lB.find((OB => OB.name === BB));
      if (void 0 === YB) return "failed";
      const DB = RB(ZB, GB);
      try {
        const BB = await SB(YB, OB, DB.signal);
        return null !== BB && "object" === typeof BB ? BB.isCutOff ? (console.warn(`Studio AI: ${YB.name}'s answer was cut off at the token limit`), null) : {
          text: BB.text
        } : BB
      } finally {
        DB.clear()
      }
    }
    async function SB(BB, OB, GB) {
      const YB = await fetch(zB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: BB.name,
          messages: OB,
          max_tokens: qB,
          temperature: BB.temperature,
          reasoning_effort: BB.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: GB
      });
      if (429 === YB.status) return "busy";
      if (!YB.ok) return console.warn(`Studio AI: ${BB.name} answered ${YB.status}`), "failed";
      const DB = await YB.json().catch((() => null)),
        QB = function(BB) {
          var OB, GB, YB;
          const DB = null === BB || void 0 === BB || null === (OB = BB.choices) || void 0 === OB || null === (GB = OB[0]) || void 0 === GB || null === (YB = GB.message) || void 0 === YB ? void 0 : YB.content;
          if ("string" !== typeof DB) return null;
          const QB = DB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === QB ? null : QB
        }(DB);
      return null !== QB && function(BB) {
        const OB = PB(BB);
        return OB.length >= MB || OB.some((BB => jB(BB)))
      }(QB) ? (console.warn(`Studio AI: ${BB.name} thought out loud instead of answering`), "failed") : null === QB ? null : {
        text: QB,
        isCutOff: AB(DB)
      }
    }
  },
  6960: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => RB,
      C: () => PB,
      D: () => JB,
      E: () => lB,
      e: () => pB,
      f: () => jB,
      h: () => oB,
      i: () => qB,
      k: () => zB,
      l: () => MB,
      n: () => QB,
      o: () => DB,
      q: () => AB,
      r: () => SB,
      u: () => ZB,
      v: () => WB,
      x: () => VB
    });
    var YB = GB(5366);
    const DB = 2e3,
      QB = 2e4;

    function oB(BB) {
      return BB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function jB(BB) {
      return BB.replace(/\$/g, "\\$")
    }
    const yB = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function JB(BB, OB) {
      yB.lastIndex = OB;
      const GB = yB.exec(BB);
      return GB.index + GB[0].length
    }

    function MB(BB) {
      return (0, YB.C)(BB, /\s+/g, (0, YB.w)(".!?")).flatMap((BB => BB.split("\n")))
    }

    function PB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB;
      const YB = [...BB.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((BB => BB.index)),
        DB = YB.filter((BB => BB < OB)),
        QB = YB.find((BB => BB >= GB));
      return [0 === DB.length ? 0 : DB.at(-1) + 1, void 0 === QB ? BB.length : QB + 1]
    }

    function zB(BB, OB) {
      const GB = BB.charCodeAt(OB - 1);
      return BB.slice(0, OB > 0 && OB < BB.length && GB >= 55296 && GB <= 56319 ? OB - 1 : OB)
    }

    function lB(BB, OB) {
      return `${OB}${BB.replace(/\\/g,"\\\\").split(OB).join(`\\${OB}`)}${OB}`
    }

    function pB(BB) {
      return BB.charAt(0).toUpperCase() + BB.slice(1)
    }

    function qB(BB) {
      return Math.round(BB).toLocaleString("en-US")
    }

    function ZB(BB) {
      return BB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((BB => "" !== BB))
    }
    const NB = 3;

    function RB(BB, OB) {
      return ZB(BB).filter((BB => BB.length >= NB && !/\d/.test(BB))).map((BB => `${BB} ${OB}`))
    }

    function WB(BB) {
      return BB.split(/[\s:_]+/).filter((BB => "" !== BB)).map(oB).join("[`:_\\s]+")
    }

    function AB(BB) {
      return ZB(BB.split(".").pop())
    }

    function VB(BB) {
      return BB.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function SB(BB) {
      let OB = null;
      return () => {
        const GB = OB ??= BB();
        return GB.catch((() => {
          OB === GB && (OB = null)
        })), GB
      }
    }
  },
  5366: (BB, OB, GB) => {
    function YB(BB) {
      return {
        notAfter: BB
      }
    }
    GB.d(OB, {
      C: () => PB,
      b: () => yB,
      f: () => JB,
      j: () => jB,
      n: () => YB,
      p: () => DB,
      t: () => QB,
      w: () => oB,
      z: () => MB
    });
    const DB = YB("\\w$."),
      QB = YB("\\w.,");

    function oB(BB) {
      return OB => yB(OB, BB)
    }

    function jB(BB) {
      return OB => !BB.test(OB.input.slice(0, OB.index))
    }

    function yB(BB, OB) {
      return BB.index > 0 && new RegExp(`[${OB}]`).test(BB.input[BB.index - 1])
    }

    function JB(BB, OB, GB) {
      return function(BB) {
        return void 0 !== BB && "function" !== typeof BB
      }(GB) ? function(BB, OB, GB) {
        const YB = OB.flags.replace(/[gy]/g, ""),
          DB = new RegExp(`[^${GB}](?:${OB.source})`, `${YB}g`),
          QB = [],
          oB = GB => {
            const YB = GB.index + GB[0].length;
            return ("" === GB[0] ? zB(BB, OB, YB) : YB) - 1
          },
          jB = new RegExp(`(?:${OB.source})`, `${YB}y`).exec(BB);
        if (jB) {
          if (QB.push(jB), !OB.global) return QB;
          DB.lastIndex = oB(jB)
        }
        for (let yB = DB.exec(BB); yB; yB = DB.exec(BB)) {
          const GB = zB(BB, OB, yB.index) - yB.index;
          if (yB[0] = yB[0].slice(GB), yB.index += GB, QB.push(yB), !OB.global) break;
          DB.lastIndex = oB(yB)
        }
        return QB
      }(BB, OB, GB.notAfter) : function(BB, OB, GB) {
        const YB = new RegExp(OB.source, `${OB.flags.replace(/[gy]/g,"")}g`),
          DB = [];
        for (let QB = YB.exec(BB); QB; QB = YB.exec(BB))
          if (!GB || GB(QB)) {
            if (DB.push(QB), !OB.global) break;
            "" === QB[0] && (YB.lastIndex = zB(BB, OB, YB.lastIndex))
          } else YB.lastIndex = zB(BB, OB, QB.index);
        return DB
      }(BB, OB, GB)
    }

    function MB(BB, OB, GB, YB) {
      let DB = "",
        QB = 0;
      for (const oB of JB(BB, OB, GB)) DB += BB.slice(QB, oB.index) + YB(oB), QB = oB.index + oB[0].length;
      return DB + BB.slice(QB)
    }

    function PB(BB, OB, GB) {
      const YB = [];
      let DB = 0;
      for (const QB of JB(BB, OB, GB)) YB.push(BB.slice(DB, QB.index)), DB = QB.index + QB[0].length;
      return [...YB, BB.slice(DB)]
    }

    function zB(BB, OB, GB) {
      var YB;
      return GB + (OB.unicode && (null !== (YB = BB.codePointAt(GB)) && void 0 !== YB ? YB : 0) > 65535 ? 2 : 1)
    }
  },
  7006: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);