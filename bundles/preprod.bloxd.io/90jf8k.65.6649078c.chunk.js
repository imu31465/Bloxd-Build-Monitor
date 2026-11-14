export const id = 65;
export const ids = [65];
export const modules = {
  3725: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF,
      g: () => hF,
      i: () => gW,
      j: () => rW,
      l: () => bW,
      m: () => AF,
      o: () => uF,
      s: () => QF,
      u: () => EF,
      v: () => eF
    });
    const CF = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function AF(FF) {
      try {
        return decodeURIComponent(FF.slice(1))
      } catch {
        return FF.slice(1)
      }
    }

    function uF(FF) {
      return FF.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const hF = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${CF.source}`, "g");

    function bW(FF, WF) {
      return 2 === FF.length ? WF.replace(/^ (.*) $/, "$1") : WF
    }

    function dF(FF) {
      return "" === FF.trim()
    }

    function PF(FF) {
      const WF = [];
      for (const SF of FF.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) WF.length > 0 && WF[WF.length - 1].endsWith("\\") ? WF[WF.length - 1] += `|${SF}` : WF.push(SF);
      return WF.map((FF => FF.trim().replaceAll("\\|", "|")))
    }
    const RF = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function iW(FF) {
      const WF = [],
        SF = [{
          indent: -1,
          items: WF
        }];
      let CF = null;
      for (const AF of FF) {
        const FF = AF.match(RF);
        if (!FF) {
          CF && (CF.text += ` ${AF.trim()}`);
          continue
        }
        const WF = FF[1].replace(/\t/g, "  ").length;
        for (; WF <= SF[SF.length - 1].indent;) SF.pop();
        CF = {
          text: FF[3].trim(),
          children: []
        }, SF[SF.length - 1].items.push(CF), SF.push({
          indent: WF,
          items: CF.children
        })
      }
      return WF
    }

    function eF(FF) {
      const WF = FF.replace(/\r\n/g, "\n").split("\n"),
        SF = [];
      let CF = 0;
      for (; CF < WF.length;) {
        const FF = WF[CF];
        if (dF(FF)) {
          CF++;
          continue
        }
        const AF = FF.match(/^\s*```\s*(\w*)\s*$/);
        if (AF) {
          const FF = [];
          for (CF++; CF < WF.length && !/^\s*```\s*$/.test(WF[CF]);) FF.push(WF[CF]), CF++;
          CF++, SF.push({
            kind: "code",
            lang: AF[1] || "text",
            code: FF.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const hF = FF.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (hF) {
          const FF = hF[2].trim();
          SF.push({
            kind: "heading",
            level: hF[1].length,
            text: FF,
            anchor: uF(FF)
          }), CF++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(FF)) {
          SF.push({
            kind: "rule"
          }), CF++;
          continue
        }
        if (FF.trim().startsWith("|") && CF + 1 < WF.length && /^\s*\|[\s:|-]+\|\s*$/.test(WF[CF + 1])) {
          const AF = PF(FF),
            uF = [];
          for (CF += 2; CF < WF.length && WF[CF].trim().startsWith("|");) uF.push(PF(WF[CF])), CF++;
          SF.push({
            kind: "table",
            header: AF,
            rows: uF
          });
          continue
        }
        if (FF.startsWith(">")) {
          const FF = [];
          for (; CF < WF.length && WF[CF].startsWith(">");) FF.push(WF[CF].replace(/^>\s?/, "")), CF++;
          SF.push({
            kind: "quote",
            blocks: eF(FF.join("\n"))
          });
          continue
        }
        if (RF.test(FF)) {
          const AF = [],
            uF = /^\s*\d+\./.test(FF);
          for (; CF < WF.length && !dF(WF[CF]) && (RF.test(WF[CF]) || /^\s+\S/.test(WF[CF]));) AF.push(WF[CF]), CF++;
          SF.push({
            kind: "list",
            ordered: uF,
            items: iW(AF)
          });
          continue
        }
        const bW = [];
        for (; CF < WF.length && !dF(WF[CF]) && !/^\s*```/.test(WF[CF]) && !/^#{1,6}\s/.test(WF[CF]) && !WF[CF].startsWith(">") && !RF.test(WF[CF]) && (!WF[CF].trim().startsWith("|") || 0 !== bW.length);) bW.push(WF[CF].trim()), CF++;
        0 === bW.length && (bW.push(WF[CF].trim()), CF++), SF.push({
          kind: "paragraph",
          text: bW.join(" ")
        })
      }
      return SF
    }

    function EF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const SF = eF(FF);
      let CF = "";
      const AF = [],
        uF = [],
        hF = new Map;
      for (const PF of SF) {
        if ("heading" === PF.kind) {
          var bW;
          const FF = (null !== (bW = hF.get(PF.anchor)) && void 0 !== bW ? bW : 0) + 1;
          hF.set(PF.anchor, FF), FF > 1 && (PF.anchor = `${PF.anchor}-${FF}`)
        }
        if ("heading" === PF.kind && 1 === PF.level && !CF) {
          CF = PF.text;
          continue
        }
        if ("heading" === PF.kind && PF.level <= WF) {
          uF.push({
            heading: PF,
            blocks: []
          });
          continue
        }
        const FF = uF.at(-1);
        FF ? FF.blocks.push(PF) : AF.push(PF)
      }
      const dF = FF => {
        for (;
          "rule" === (null === (WF = FF.at(-1)) || void 0 === WF ? void 0 : WF.kind);) {
          var WF;
          FF.pop()
        }
      };
      dF(AF);
      for (const PF of uF) dF(PF.blocks);
      return {
        title: CF,
        intro: AF,
        sections: uF
      }
    }

    function QF(FF) {
      return [{
        heading: null,
        blocks: FF.intro
      }, ...FF.sections.map((FF => ({
        heading: FF.heading,
        blocks: FF.blocks
      })))]
    }

    function rW(FF) {
      return FF.flatMap((FF => "code" === FF.kind ? [FF] : "quote" === FF.kind ? rW(FF.blocks) : []))
    }

    function gW(FF) {
      switch (FF.kind) {
        case "heading":
        case "paragraph":
          return FF.text;
        case "code":
          return FF.code;
        case "table":
          return [FF.header, ...FF.rows].map((FF => FF.join(" "))).join(" ");
        case "list": {
          const WF = FF => FF.map((FF => `${FF.text} ${WF(FF.children)}`)).join(" ");
          return WF(FF.items)
        }
        case "quote":
          return FF.blocks.map(gW).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5470: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => iW,
      e: () => hF,
      i: () => bW
    });
    SF(5464);
    var CF = SF(46),
      AF = SF(3725),
      uF = SF(971);
    const hF = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function bW(FF, WF) {
      return FF === WF ? FF : `${FF} (${WF})`
    }

    function dF(FF) {
      const WF = [];
      let SF = 0;
      for (const CF of FF.matchAll(hF)) {
        CF.index > SF && WF.push(FF.slice(SF, CF.index));
        const [, AF, hF, dF, PF, RF, iW] = CF;
        void 0 !== AF ? WF.push(bW(AF, hF)) : void 0 !== dF || void 0 !== PF ? WF.push((0, uF.jsx)("strong", {
          children: null !== dF && void 0 !== dF ? dF : PF
        }, CF.index)) : void 0 !== RF ? WF.push((0, uF.jsx)("em", {
          children: RF
        }, CF.index)) : WF.push((0, uF.jsx)("code", {
          children: iW
        }, CF.index)), SF = CF.index + CF[0].length
      }
      return SF < FF.length && WF.push(FF.slice(SF)), WF
    }

    function PF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const CF = FF.map(((FF, WF) => (0, uF.jsxs)("li", {
        children: [dF(FF.text), FF.children.length > 0 && PF(FF.children, !1)]
      }, WF)));
      return WF ? (0, uF.jsx)("ol", {
        start: SF,
        children: CF
      }) : (0, uF.jsx)("ul", {
        children: CF
      })
    }

    function RF(FF, WF) {
      switch (FF.kind) {
        case "heading":
          return FF.level <= 2 ? (0, uF.jsx)("h3", {
            children: dF(FF.text)
          }, WF) : (0, uF.jsx)("h4", {
            children: dF(FF.text)
          }, WF);
        case "paragraph":
          return (0, uF.jsx)("p", {
            children: dF(FF.text)
          }, WF);
        case "list":
          return (0, uF.jsx)(CF.Fragment, {
            children: PF(FF.items, FF.ordered)
          }, WF);
        case "quote":
          return (0, uF.jsx)("blockquote", {
            children: FF.blocks.map(((FF, WF) => RF(FF, WF)))
          }, WF);
        case "code":
          return (0, uF.jsx)("pre", {
            children: (0, uF.jsx)("code", {
              children: FF.code
            })
          }, WF);
        case "table":
          return (0, uF.jsxs)("table", {
            children: [(0, uF.jsx)("thead", {
              children: (0, uF.jsx)("tr", {
                children: FF.header.map(((FF, WF) => (0, uF.jsx)("th", {
                  children: dF(FF)
                }, WF)))
              })
            }), (0, uF.jsx)("tbody", {
              children: FF.rows.map(((FF, WF) => (0, uF.jsx)("tr", {
                children: FF.map(((FF, WF) => (0, uF.jsx)("td", {
                  children: dF(FF)
                }, WF)))
              }, WF)))
            })]
          }, WF);
        case "rule":
          return (0, uF.jsx)("hr", {}, WF)
      }
    }

    function iW(FF) {
      let {
        markdown: WF
      } = FF, SF = 0;
      return (0, uF.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, AF.v)(WF).map(((FF, WF) => {
          if ("list" !== FF.kind || !FF.ordered) return SF = 0, RF(FF, WF);
          const AF = SF + 1;
          return SF += FF.items.length, (0, uF.jsx)(CF.Fragment, {
            children: PF(FF.items, !0, AF)
          }, WF)
        }))
      })
    }
  },
  5462: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => TF,
      k: () => aW,
      g: () => qW,
      l: () => QF
    });
    var CF = SF(5458),
      AF = SF(5418),
      uF = SF(3869);
    const hF = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function bW(FF) {
      return (0, uF.f)(FF, hF, (WF => !/^my/i.test(WF[0]) || !/follow $/i.test(FF.slice(0, WF.index)))).length > 0
    }
    const dF = /\byou(?:r|'re|'ll)?\b/i,
      PF = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      RF = 2;

    function iW(FF) {
      return function(FF) {
        const WF = [];
        let SF = !1;
        for (const CF of FF.split("\n")) {
          if (/^\s*(```|~~~)/.test(CF)) {
            SF = !SF;
            continue
          }
          if (SF || /^\s*>/.test(CF)) continue;
          const FF = CF.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          WF.push(...(0, AF.s)(FF))
        }
        return WF
      }(FF).filter((FF => bW(FF) || PF.test(FF) && !dF.test(FF)))
    }
    const eF = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      EF = [{
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

    function QF(FF) {
      const WF = EF.findIndex((WF => WF.name === FF));
      return -1 === WF ? EF.length : WF
    }
    const rW = 2500,
      gW = 12e4;
    class tW extends Error {
      constructor(FF) {
        super(`Studio AI chat ${FF}`), this.reason = FF
      }
    }

    function TF(FF, WF) {
      const SF = new AbortController,
        CF = () => {
          SF.abort()
        },
        AF = setTimeout(CF, FF);
      return null !== WF && void 0 !== WF && WF.aborted && CF(), null === WF || void 0 === WF || WF.addEventListener("abort", CF, {
        once: !0
      }), {
        signal: SF.signal,
        clear: () => {
          clearTimeout(AF), null === WF || void 0 === WF || WF.removeEventListener("abort", CF)
        }
      }
    }

    function aW(FF, WF, SF) {
      return new Promise(((AF, uF) => {
        const hF = new AbortController,
          bW = () => {
            hF.abort(), uF((0, CF.b)(SF))
          };
        if (null !== SF && void 0 !== SF && SF.aborted) return void bW();
        null === SF || void 0 === SF || SF.addEventListener("abort", bW, {
          once: !0
        });
        const dF = EF.map((() => !1));
        let PF = null;
        const RF = EF.map((() => !1)),
          iW = EF.map((() => !1));
        EF.forEach(((CF, eF) => {
          const QF = TF(gW, hF.signal);
          VF(CF, [{
            role: "user",
            content: FF
          }], QF.signal).then((FF => {
            hF.signal.aborted || ("busy" === FF || "failed" === FF ? (RF[eF] = "busy" === FF, iW[eF] = !0) : null !== FF && (null === PF || eF < PF.rank) && (PF = {
              rank: eF,
              answer: {
                text: FF.text,
                model: CF.name
              }
            }, WF(PF.answer)))
          }), (FF => {
            hF.signal.aborted || (iW[eF] = !0, console.warn(`Studio AI: ${CF.name} couldn't be reached`, FF))
          })).finally((() => {
            QF.clear(), dF[eF] = !0, hF.signal.aborted || (() => {
              var FF, WF;
              const CF = null !== (FF = null === (WF = PF) || void 0 === WF ? void 0 : WF.rank) && void 0 !== FF ? FF : EF.length;
              dF.slice(0, CF).includes(!1) || (null === SF || void 0 === SF || SF.removeEventListener("abort", bW), hF.abort(), null !== PF ? AF({
                ...PF.answer,
                isFinal: !iW.slice(0, PF.rank).includes(!0)
              }) : uF(new tW(RF.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((FF => {
            console.error("Studio AI: showing an answer failed", FF)
          }))
        }))
      }))
    }

    function kW(FF) {
      var WF, SF;
      return "length" === (null === FF || void 0 === FF || null === (WF = FF.choices) || void 0 === WF || null === (SF = WF[0]) || void 0 === SF ? void 0 : SF.finish_reason)
    }
    async function qW(FF, WF, SF) {
      const CF = EF.find((WF => WF.name === FF));
      if (void 0 === CF) return "failed";
      const AF = TF(gW, SF);
      try {
        const FF = await VF(CF, WF, AF.signal);
        return null !== FF && "object" === typeof FF ? FF.isCutOff ? (console.warn(`Studio AI: ${CF.name}'s answer was cut off at the token limit`), null) : {
          text: FF.text
        } : FF
      } finally {
        AF.clear()
      }
    }
    async function VF(FF, WF, SF) {
      const CF = await fetch(eF, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: FF.name,
          messages: WF,
          max_tokens: rW,
          temperature: FF.temperature,
          reasoning_effort: FF.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: SF
      });
      if (429 === CF.status) return "busy";
      if (!CF.ok) return console.warn(`Studio AI: ${FF.name} answered ${CF.status}`), "failed";
      const AF = await CF.json().catch((() => null)),
        uF = function(FF) {
          var WF, SF, CF;
          const AF = null === FF || void 0 === FF || null === (WF = FF.choices) || void 0 === WF || null === (SF = WF[0]) || void 0 === SF || null === (CF = SF.message) || void 0 === CF ? void 0 : CF.content;
          if ("string" !== typeof AF) return null;
          const uF = AF.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === uF ? null : uF
        }(AF);
      return null !== uF && function(FF) {
        const WF = iW(FF);
        return WF.length >= RF || WF.some((FF => bW(FF)))
      }(uF) ? (console.warn(`Studio AI: ${FF.name} thought out loud instead of answering`), "failed") : null === uF ? null : {
        text: uF,
        isCutOff: kW(AF)
      }
    }
  },
  5418: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => AF,
      D: () => kW,
      E: () => VF,
      F: () => gW,
      J: () => aW,
      M: () => qW,
      O: () => TF,
      R: () => iW,
      T: () => PF,
      W: () => EF,
      d: () => QF,
      h: () => bW,
      j: () => hF,
      k: () => rW,
      o: () => eF,
      s: () => RF,
      w: () => uF
    });
    var CF = SF(3869);
    const AF = 2e3,
      uF = 2e4;

    function hF(FF) {
      return FF.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function bW(FF) {
      return FF.replace(/\$/g, "\\$")
    }
    const dF = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function PF(FF, WF) {
      dF.lastIndex = WF;
      const SF = dF.exec(FF);
      return SF.index + SF[0].length
    }

    function RF(FF) {
      return (0, CF.z)(FF, /\s+/g, (0, CF.u)(".!?")).flatMap((FF => FF.split("\n")))
    }

    function iW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF;
      const CF = [...FF.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((FF => FF.index)),
        AF = CF.filter((FF => FF < WF)),
        uF = CF.find((FF => FF >= SF));
      return [0 === AF.length ? 0 : AF.at(-1) + 1, void 0 === uF ? FF.length : uF + 1]
    }

    function eF(FF, WF) {
      const SF = FF.charCodeAt(WF - 1);
      return FF.slice(0, WF > 0 && WF < FF.length && SF >= 55296 && SF <= 56319 ? WF - 1 : WF)
    }

    function EF(FF, WF) {
      return `${WF}${FF.replace(/\\/g,"\\\\").split(WF).join(`\\${WF}`)}${WF}`
    }

    function QF(FF) {
      return FF.charAt(0).toUpperCase() + FF.slice(1)
    }

    function rW(FF) {
      return Math.round(FF).toLocaleString("en-US")
    }

    function gW(FF) {
      return FF.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((FF => "" !== FF))
    }
    const tW = 3;

    function TF(FF, WF) {
      return gW(FF).filter((FF => FF.length >= tW && !/\d/.test(FF))).map((FF => `${FF} ${WF}`))
    }

    function aW(FF) {
      return FF.split(/[\s:_]+/).filter((FF => "" !== FF)).map(hF).join("[`:_\\s]+")
    }

    function kW(FF) {
      return gW(FF.split(".").pop())
    }

    function qW(FF) {
      return FF.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function VF(FF) {
      let WF = null;
      return () => {
        const SF = WF ??= FF();
        return SF.catch((() => {
          WF === SF && (WF = null)
        })), SF
      }
    }
  },
  5458: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      h: () => hF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      FF.signal.aborted || CF.set(FF.signal, WF), FF.abort(WF)
    }

    function uF(FF) {
      var WF;
      const SF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.reason) && void 0 !== WF ? WF : FF && CF.get(FF);
      if (void 0 !== SF && null !== SF) return SF;
      const AF = new DOMException("signal is aborted without reason", "AbortError");
      return null !== FF && void 0 !== FF && FF.aborted && CF.set(FF, AF), AF
    }

    function hF(FF) {
      if (null !== FF && void 0 !== FF && FF.aborted) throw uF(FF)
    }
  },
  3869: (FF, WF, SF) => {
    function CF(FF) {
      return {
        notAfter: FF
      }
    }
    SF.d(WF, {
      d: () => dF,
      f: () => PF,
      i: () => bW,
      k: () => CF,
      o: () => AF,
      r: () => uF,
      u: () => hF,
      w: () => RF,
      z: () => iW
    });
    const AF = CF("\\w$."),
      uF = CF("\\w.,");

    function hF(FF) {
      return WF => dF(WF, FF)
    }

    function bW(FF) {
      return WF => !FF.test(WF.input.slice(0, WF.index))
    }

    function dF(FF, WF) {
      return FF.index > 0 && new RegExp(`[${WF}]`).test(FF.input[FF.index - 1])
    }

    function PF(FF, WF, SF) {
      return function(FF) {
        return void 0 !== FF && "function" !== typeof FF
      }(SF) ? function(FF, WF, SF) {
        const CF = WF.flags.replace(/[gy]/g, ""),
          AF = new RegExp(`[^${SF}](?:${WF.source})`, `${CF}g`),
          uF = [],
          hF = SF => {
            const CF = SF.index + SF[0].length;
            return ("" === SF[0] ? eF(FF, WF, CF) : CF) - 1
          },
          bW = new RegExp(`(?:${WF.source})`, `${CF}y`).exec(FF);
        if (bW) {
          if (uF.push(bW), !WF.global) return uF;
          AF.lastIndex = hF(bW)
        }
        for (let dF = AF.exec(FF); dF; dF = AF.exec(FF)) {
          const SF = eF(FF, WF, dF.index) - dF.index;
          if (dF[0] = dF[0].slice(SF), dF.index += SF, uF.push(dF), !WF.global) break;
          AF.lastIndex = hF(dF)
        }
        return uF
      }(FF, WF, SF.notAfter) : function(FF, WF, SF) {
        const CF = new RegExp(WF.source, `${WF.flags.replace(/[gy]/g,"")}g`),
          AF = [];
        for (let uF = CF.exec(FF); uF; uF = CF.exec(FF))
          if (!SF || SF(uF)) {
            if (AF.push(uF), !WF.global) break;
            "" === uF[0] && (CF.lastIndex = eF(FF, WF, CF.lastIndex))
          } else CF.lastIndex = eF(FF, WF, uF.index);
        return AF
      }(FF, WF, SF)
    }

    function RF(FF, WF, SF, CF) {
      let AF = "",
        uF = 0;
      for (const hF of PF(FF, WF, SF)) AF += FF.slice(uF, hF.index) + CF(hF), uF = hF.index + hF[0].length;
      return AF + FF.slice(uF)
    }

    function iW(FF, WF, SF) {
      const CF = [];
      let AF = 0;
      for (const uF of PF(FF, WF, SF)) CF.push(FF.slice(AF, uF.index)), AF = uF.index + uF[0].length;
      return [...CF, FF.slice(AF)]
    }

    function eF(FF, WF, SF) {
      var CF;
      return SF + (WF.unicode && (null !== (CF = FF.codePointAt(SF)) && void 0 !== CF ? CF : 0) > 65535 ? 2 : 1)
    }
  },
  5464: () => {}
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);