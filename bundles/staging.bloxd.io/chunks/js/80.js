export const id = 80;
export const ids = [80];
export const modules = {
  4859: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => kS,
      d: () => tS,
      e: () => xS,
      f: () => GS,
      h: () => jS,
      l: () => NS,
      n: () => bS,
      r: () => XS,
      u: () => KS,
      y: () => aS
    });
    const tS = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function bS(SS) {
      try {
        return decodeURIComponent(SS.slice(1))
      } catch {
        return SS.slice(1)
      }
    }

    function XS(SS) {
      return SS.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const xS = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${tS.source}`, "g");

    function NS(SS, HS) {
      return 2 === SS.length ? HS.replace(/^ (.*) $/, "$1") : HS
    }

    function qS(SS) {
      return "" === SS.trim()
    }

    function uS(SS) {
      const HS = [];
      for (const gS of SS.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) HS.length > 0 && HS[HS.length - 1].endsWith("\\") ? HS[HS.length - 1] += `|${gS}` : HS.push(gS);
      return HS.map((SS => SS.trim().replaceAll("\\|", "|")))
    }
    const IS = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function fS(SS) {
      const HS = [],
        gS = [{
          indent: -1,
          items: HS
        }];
      let tS = null;
      for (const bS of SS) {
        const SS = bS.match(IS);
        if (!SS) {
          tS && (tS.text += ` ${bS.trim()}`);
          continue
        }
        const HS = SS[1].replace(/\t/g, "  ").length;
        for (; HS <= gS[gS.length - 1].indent;) gS.pop();
        tS = {
          text: SS[3].trim(),
          children: []
        }, gS[gS.length - 1].items.push(tS), gS.push({
          indent: HS,
          items: tS.children
        })
      }
      return HS
    }

    function kS(SS) {
      const HS = SS.replace(/\r\n/g, "\n").split("\n"),
        gS = [];
      let tS = 0;
      for (; tS < HS.length;) {
        const SS = HS[tS];
        if (qS(SS)) {
          tS++;
          continue
        }
        const bS = SS.match(/^\s*```\s*(\w*)\s*$/);
        if (bS) {
          const SS = [];
          for (tS++; tS < HS.length && !/^\s*```\s*$/.test(HS[tS]);) SS.push(HS[tS]), tS++;
          tS++, gS.push({
            kind: "code",
            lang: bS[1] || "text",
            code: SS.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const xS = SS.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (xS) {
          const SS = xS[2].trim();
          gS.push({
            kind: "heading",
            level: xS[1].length,
            text: SS,
            anchor: XS(SS)
          }), tS++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(SS)) {
          gS.push({
            kind: "rule"
          }), tS++;
          continue
        }
        if (SS.trim().startsWith("|") && tS + 1 < HS.length && /^\s*\|[\s:|-]+\|\s*$/.test(HS[tS + 1])) {
          const bS = uS(SS),
            XS = [];
          for (tS += 2; tS < HS.length && HS[tS].trim().startsWith("|");) XS.push(uS(HS[tS])), tS++;
          gS.push({
            kind: "table",
            header: bS,
            rows: XS
          });
          continue
        }
        if (SS.startsWith(">")) {
          const SS = [];
          for (; tS < HS.length && HS[tS].startsWith(">");) SS.push(HS[tS].replace(/^>\s?/, "")), tS++;
          gS.push({
            kind: "quote",
            blocks: kS(SS.join("\n"))
          });
          continue
        }
        if (IS.test(SS)) {
          const bS = [],
            XS = /^\s*\d+\./.test(SS);
          for (; tS < HS.length && !qS(HS[tS]) && (IS.test(HS[tS]) || /^\s+\S/.test(HS[tS]));) bS.push(HS[tS]), tS++;
          gS.push({
            kind: "list",
            ordered: XS,
            items: fS(bS)
          });
          continue
        }
        const NS = [];
        for (; tS < HS.length && !qS(HS[tS]) && !/^\s*```/.test(HS[tS]) && !/^#{1,6}\s/.test(HS[tS]) && !HS[tS].startsWith(">") && !IS.test(HS[tS]) && (!HS[tS].trim().startsWith("|") || 0 !== NS.length);) NS.push(HS[tS].trim()), tS++;
        0 === NS.length && (NS.push(HS[tS].trim()), tS++), gS.push({
          kind: "paragraph",
          text: NS.join(" ")
        })
      }
      return gS
    }

    function aS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gS = kS(SS);
      let tS = "";
      const bS = [],
        XS = [],
        xS = new Map;
      for (const uS of gS) {
        if ("heading" === uS.kind) {
          var NS;
          const SS = (null !== (NS = xS.get(uS.anchor)) && void 0 !== NS ? NS : 0) + 1;
          xS.set(uS.anchor, SS), SS > 1 && (uS.anchor = `${uS.anchor}-${SS}`)
        }
        if ("heading" === uS.kind && 1 === uS.level && !tS) {
          tS = uS.text;
          continue
        }
        if ("heading" === uS.kind && uS.level <= HS) {
          XS.push({
            heading: uS,
            blocks: []
          });
          continue
        }
        const SS = XS.at(-1);
        SS ? SS.blocks.push(uS) : bS.push(uS)
      }
      const qS = SS => {
        for (;
          "rule" === (null === (HS = SS.at(-1)) || void 0 === HS ? void 0 : HS.kind);) {
          var HS;
          SS.pop()
        }
      };
      qS(bS);
      for (const uS of XS) qS(uS.blocks);
      return {
        title: tS,
        intro: bS,
        sections: XS
      }
    }

    function KS(SS) {
      return [{
        heading: null,
        blocks: SS.intro
      }, ...SS.sections.map((SS => ({
        heading: SS.heading,
        blocks: SS.blocks
      })))]
    }

    function jS(SS) {
      return SS.flatMap((SS => "code" === SS.kind ? [SS] : "quote" === SS.kind ? jS(SS.blocks) : []))
    }

    function GS(SS) {
      switch (SS.kind) {
        case "heading":
        case "paragraph":
          return SS.text;
        case "code":
          return SS.code;
        case "table":
          return [SS.header, ...SS.rows].map((SS => SS.join(" "))).join(" ");
        case "list": {
          const HS = SS => SS.map((SS => `${SS.text} ${HS(SS.children)}`)).join(" ");
          return HS(SS.items)
        }
        case "quote":
          return SS.blocks.map(GS).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6699: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      e: () => xS,
      i: () => NS
    });
    gS(6691);
    var tS = gS(64),
      bS = gS(4859),
      XS = gS(1181);
    const xS = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function NS(SS, HS) {
      return SS === HS ? SS : `${SS} (${HS})`
    }

    function qS(SS) {
      const HS = [];
      let gS = 0;
      for (const tS of SS.matchAll(xS)) {
        tS.index > gS && HS.push(SS.slice(gS, tS.index));
        const [, bS, xS, qS, uS, IS, fS] = tS;
        void 0 !== bS ? HS.push(NS(bS, xS)) : void 0 !== qS || void 0 !== uS ? HS.push((0, XS.jsx)("strong", {
          children: null !== qS && void 0 !== qS ? qS : uS
        }, tS.index)) : void 0 !== IS ? HS.push((0, XS.jsx)("em", {
          children: IS
        }, tS.index)) : HS.push((0, XS.jsx)("code", {
          children: fS
        }, tS.index)), gS = tS.index + tS[0].length
      }
      return gS < SS.length && HS.push(SS.slice(gS)), HS
    }

    function uS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const tS = SS.map(((SS, HS) => (0, XS.jsxs)("li", {
        children: [qS(SS.text), SS.children.length > 0 && uS(SS.children, !1)]
      }, HS)));
      return HS ? (0, XS.jsx)("ol", {
        start: gS,
        children: tS
      }) : (0, XS.jsx)("ul", {
        children: tS
      })
    }

    function IS(SS, HS) {
      switch (SS.kind) {
        case "heading":
          return SS.level <= 2 ? (0, XS.jsx)("h3", {
            children: qS(SS.text)
          }, HS) : (0, XS.jsx)("h4", {
            children: qS(SS.text)
          }, HS);
        case "paragraph":
          return (0, XS.jsx)("p", {
            children: qS(SS.text)
          }, HS);
        case "list":
          return (0, XS.jsx)(tS.Fragment, {
            children: uS(SS.items, SS.ordered)
          }, HS);
        case "quote":
          return (0, XS.jsx)("blockquote", {
            children: SS.blocks.map(((SS, HS) => IS(SS, HS)))
          }, HS);
        case "code":
          return (0, XS.jsx)("pre", {
            children: (0, XS.jsx)("code", {
              children: SS.code
            })
          }, HS);
        case "table":
          return (0, XS.jsxs)("table", {
            children: [(0, XS.jsx)("thead", {
              children: (0, XS.jsx)("tr", {
                children: SS.header.map(((SS, HS) => (0, XS.jsx)("th", {
                  children: qS(SS)
                }, HS)))
              })
            }), (0, XS.jsx)("tbody", {
              children: SS.rows.map(((SS, HS) => (0, XS.jsx)("tr", {
                children: SS.map(((SS, HS) => (0, XS.jsx)("td", {
                  children: qS(SS)
                }, HS)))
              }, HS)))
            })]
          }, HS);
        case "rule":
          return (0, XS.jsx)("hr", {}, HS)
      }
    }

    function fS(SS) {
      let {
        markdown: HS
      } = SS, gS = 0;
      return (0, XS.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, bS.A)(HS).map(((SS, HS) => {
          if ("list" !== SS.kind || !SS.ordered) return gS = 0, IS(SS, HS);
          const bS = gS + 1;
          return gS += SS.items.length, (0, XS.jsx)(tS.Fragment, {
            children: uS(SS.items, !0, bS)
          }, HS)
        }))
      })
    }
  },
  6688: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => nS,
      i: () => PS,
      g: () => DS,
      m: () => KS
    });
    var tS = gS(1290),
      bS = gS(6644),
      XS = gS(5017);
    const xS = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function NS(SS) {
      return (0, XS.f)(SS, xS, (HS => !/^my/i.test(HS[0]) || !/follow $/i.test(SS.slice(0, HS.index)))).length > 0
    }
    const qS = /\byou(?:r|'re|'ll)?\b/i,
      uS = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      IS = 2;

    function fS(SS) {
      return function(SS) {
        const HS = [];
        let gS = !1;
        for (const tS of SS.split("\n")) {
          if (/^\s*(```|~~~)/.test(tS)) {
            gS = !gS;
            continue
          }
          if (gS || /^\s*>/.test(tS)) continue;
          const SS = tS.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          HS.push(...(0, bS.q)(SS))
        }
        return HS
      }(SS).filter((SS => NS(SS) || uS.test(SS) && !qS.test(SS)))
    }
    const kS = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      aS = [{
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

    function KS(SS) {
      const HS = aS.findIndex((HS => HS.name === SS));
      return -1 === HS ? aS.length : HS
    }
    const jS = 2500,
      GS = 12e4;
    class CS extends Error {
      constructor(SS) {
        super(`Studio AI chat ${SS}`), this.reason = SS
      }
    }

    function nS(SS, HS) {
      const gS = new AbortController,
        tS = () => {
          gS.abort()
        },
        bS = setTimeout(tS, SS);
      return null !== HS && void 0 !== HS && HS.aborted && tS(), null === HS || void 0 === HS || HS.addEventListener("abort", tS, {
        once: !0
      }), {
        signal: gS.signal,
        clear: () => {
          clearTimeout(bS), null === HS || void 0 === HS || HS.removeEventListener("abort", tS)
        }
      }
    }

    function PS(SS, HS, gS) {
      return new Promise(((bS, XS) => {
        const xS = new AbortController,
          NS = () => {
            xS.abort(), XS((0, tS.c)(gS))
          };
        if (null !== gS && void 0 !== gS && gS.aborted) return void NS();
        null === gS || void 0 === gS || gS.addEventListener("abort", NS, {
          once: !0
        });
        const qS = aS.map((() => !1));
        let uS = null;
        const IS = aS.map((() => !1)),
          fS = aS.map((() => !1));
        aS.forEach(((tS, kS) => {
          const KS = nS(GS, xS.signal);
          wS(tS, [{
            role: "user",
            content: SS
          }], KS.signal).then((SS => {
            xS.signal.aborted || ("busy" === SS || "failed" === SS ? (IS[kS] = "busy" === SS, fS[kS] = !0) : null !== SS && (null === uS || kS < uS.rank) && (uS = {
              rank: kS,
              answer: {
                text: SS.text,
                model: tS.name
              }
            }, HS(uS.answer)))
          }), (SS => {
            xS.signal.aborted || (fS[kS] = !0, console.warn(`Studio AI: ${tS.name} couldn't be reached`, SS))
          })).finally((() => {
            KS.clear(), qS[kS] = !0, xS.signal.aborted || (() => {
              var SS, HS;
              const tS = null !== (SS = null === (HS = uS) || void 0 === HS ? void 0 : HS.rank) && void 0 !== SS ? SS : aS.length;
              qS.slice(0, tS).includes(!1) || (null === gS || void 0 === gS || gS.removeEventListener("abort", NS), xS.abort(), null !== uS ? bS({
                ...uS.answer,
                isFinal: !fS.slice(0, uS.rank).includes(!0)
              }) : XS(new CS(IS.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((SS => {
            console.error("Studio AI: showing an answer failed", SS)
          }))
        }))
      }))
    }

    function QS(SS) {
      var HS, gS;
      return "length" === (null === SS || void 0 === SS || null === (HS = SS.choices) || void 0 === HS || null === (gS = HS[0]) || void 0 === gS ? void 0 : gS.finish_reason)
    }
    async function DS(SS, HS, gS) {
      const tS = aS.find((HS => HS.name === SS));
      if (void 0 === tS) return "failed";
      const bS = nS(GS, gS);
      try {
        const SS = await wS(tS, HS, bS.signal);
        return null !== SS && "object" === typeof SS ? SS.isCutOff ? (console.warn(`Studio AI: ${tS.name}'s answer was cut off at the token limit`), null) : {
          text: SS.text
        } : SS
      } finally {
        bS.clear()
      }
    }
    async function wS(SS, HS, gS) {
      const tS = await fetch(kS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: SS.name,
          messages: HS,
          max_tokens: jS,
          temperature: SS.temperature,
          reasoning_effort: SS.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: gS
      });
      if (429 === tS.status) return "busy";
      if (!tS.ok) return console.warn(`Studio AI: ${SS.name} answered ${tS.status}`), "failed";
      const bS = await tS.json().catch((() => null)),
        XS = function(SS) {
          var HS, gS, tS;
          const bS = null === SS || void 0 === SS || null === (HS = SS.choices) || void 0 === HS || null === (gS = HS[0]) || void 0 === gS || null === (tS = gS.message) || void 0 === tS ? void 0 : tS.content;
          if ("string" !== typeof bS) return null;
          const XS = bS.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === XS ? null : XS
        }(bS);
      return null !== XS && function(SS) {
        const HS = fS(SS);
        return HS.length >= IS || HS.some((SS => NS(SS)))
      }(XS) ? (console.warn(`Studio AI: ${SS.name} thought out loud instead of answering`), "failed") : null === XS ? null : {
        text: XS,
        isCutOff: QS(bS)
      }
    }
  },
  6644: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => QS,
      C: () => wS,
      D: () => GS,
      F: () => PS,
      I: () => DS,
      M: () => nS,
      P: () => fS,
      Q: () => uS,
      U: () => aS,
      b: () => KS,
      f: () => NS,
      i: () => xS,
      l: () => jS,
      p: () => kS,
      q: () => IS,
      t: () => XS,
      x: () => bS
    });
    var tS = gS(5017);
    const bS = 2e3,
      XS = 2e4;

    function xS(SS) {
      return SS.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function NS(SS) {
      return SS.replace(/\$/g, "\\$")
    }
    const qS = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function uS(SS, HS) {
      qS.lastIndex = HS;
      const gS = qS.exec(SS);
      return gS.index + gS[0].length
    }

    function IS(SS) {
      return (0, tS.z)(SS, /\s+/g, (0, tS.r)(".!?")).flatMap((SS => SS.split("\n")))
    }

    function fS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS;
      const tS = [...SS.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((SS => SS.index)),
        bS = tS.filter((SS => SS < HS)),
        XS = tS.find((SS => SS >= gS));
      return [0 === bS.length ? 0 : bS.at(-1) + 1, void 0 === XS ? SS.length : XS + 1]
    }

    function kS(SS, HS) {
      const gS = SS.charCodeAt(HS - 1);
      return SS.slice(0, HS > 0 && HS < SS.length && gS >= 55296 && gS <= 56319 ? HS - 1 : HS)
    }

    function aS(SS, HS) {
      return `${HS}${SS.replace(/\\/g,"\\\\").split(HS).join(`\\${HS}`)}${HS}`
    }

    function KS(SS) {
      return SS.charAt(0).toUpperCase() + SS.slice(1)
    }

    function jS(SS) {
      return Math.round(SS).toLocaleString("en-US")
    }

    function GS(SS) {
      return SS.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((SS => "" !== SS))
    }
    const CS = 3;

    function nS(SS, HS) {
      return GS(SS).filter((SS => SS.length >= CS && !/\d/.test(SS))).map((SS => `${SS} ${HS}`))
    }

    function PS(SS) {
      return SS.split(/[\s:_]+/).filter((SS => "" !== SS)).map(xS).join("[`:_\\s]+")
    }

    function QS(SS) {
      return GS(SS.split(".").pop())
    }

    function DS(SS) {
      return SS.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function wS(SS) {
      let HS = null;
      return () => {
        const gS = HS ??= SS();
        return gS.catch((() => {
          HS === gS && (HS = null)
        })), gS
      }
    }
  },
  5017: (SS, HS, gS) => {
    function tS(SS) {
      return {
        notAfter: SS
      }
    }
    gS.d(HS, {
      b: () => qS,
      f: () => uS,
      j: () => NS,
      k: () => tS,
      m: () => bS,
      q: () => XS,
      r: () => xS,
      v: () => IS,
      z: () => fS
    });
    const bS = tS("\\w$."),
      XS = tS("\\w.,");

    function xS(SS) {
      return HS => qS(HS, SS)
    }

    function NS(SS) {
      return HS => !SS.test(HS.input.slice(0, HS.index))
    }

    function qS(SS, HS) {
      return SS.index > 0 && new RegExp(`[${HS}]`).test(SS.input[SS.index - 1])
    }

    function uS(SS, HS, gS) {
      return function(SS) {
        return void 0 !== SS && "function" !== typeof SS
      }(gS) ? function(SS, HS, gS) {
        const tS = HS.flags.replace(/[gy]/g, ""),
          bS = new RegExp(`[^${gS}](?:${HS.source})`, `${tS}g`),
          XS = [],
          xS = gS => {
            const tS = gS.index + gS[0].length;
            return ("" === gS[0] ? kS(SS, HS, tS) : tS) - 1
          },
          NS = new RegExp(`(?:${HS.source})`, `${tS}y`).exec(SS);
        if (NS) {
          if (XS.push(NS), !HS.global) return XS;
          bS.lastIndex = xS(NS)
        }
        for (let qS = bS.exec(SS); qS; qS = bS.exec(SS)) {
          const gS = kS(SS, HS, qS.index) - qS.index;
          if (qS[0] = qS[0].slice(gS), qS.index += gS, XS.push(qS), !HS.global) break;
          bS.lastIndex = xS(qS)
        }
        return XS
      }(SS, HS, gS.notAfter) : function(SS, HS, gS) {
        const tS = new RegExp(HS.source, `${HS.flags.replace(/[gy]/g,"")}g`),
          bS = [];
        for (let XS = tS.exec(SS); XS; XS = tS.exec(SS))
          if (!gS || gS(XS)) {
            if (bS.push(XS), !HS.global) break;
            "" === XS[0] && (tS.lastIndex = kS(SS, HS, tS.lastIndex))
          } else tS.lastIndex = kS(SS, HS, XS.index);
        return bS
      }(SS, HS, gS)
    }

    function IS(SS, HS, gS, tS) {
      let bS = "",
        XS = 0;
      for (const xS of uS(SS, HS, gS)) bS += SS.slice(XS, xS.index) + tS(xS), XS = xS.index + xS[0].length;
      return bS + SS.slice(XS)
    }

    function fS(SS, HS, gS) {
      const tS = [];
      let bS = 0;
      for (const XS of uS(SS, HS, gS)) tS.push(SS.slice(bS, XS.index)), bS = XS.index + XS[0].length;
      return [...tS, SS.slice(bS)]
    }

    function kS(SS, HS, gS) {
      var tS;
      return gS + (HS.unicode && (null !== (tS = SS.codePointAt(gS)) && void 0 !== tS ? tS : 0) > 65535 ? 2 : 1)
    }
  },
  6691: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);