export const id = 96;
export const ids = [96];
export const modules = {
  5635: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => wR,
      d: () => yR,
      e: () => ZR,
      i: () => LR,
      l: () => aR,
      p: () => qR,
      r: () => tR,
      s: () => uR,
      v: () => eR,
      x: () => rR
    });
    const yR = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function tR(RR) {
      try {
        return decodeURIComponent(RR.slice(1))
      } catch {
        return RR.slice(1)
      }
    }

    function uR(RR) {
      return RR.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const ZR = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${yR.source}`, "g");

    function qR(RR, JR) {
      return 2 === RR.length ? JR.replace(/^ (.*) $/, "$1") : JR
    }

    function iR(RR) {
      return "" === RR.trim()
    }

    function fR(RR) {
      const JR = [];
      for (const GR of RR.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) JR.length > 0 && JR[JR.length - 1].endsWith("\\") ? JR[JR.length - 1] += `|${GR}` : JR.push(GR);
      return JR.map((RR => RR.trim().replaceAll("\\|", "|")))
    }
    const VR = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function KR(RR) {
      const JR = [],
        GR = [{
          indent: -1,
          items: JR
        }];
      let yR = null;
      for (const tR of RR) {
        const RR = tR.match(VR);
        if (!RR) {
          yR && (yR.text += ` ${tR.trim()}`);
          continue
        }
        const JR = RR[1].replace(/\t/g, "  ").length;
        for (; JR <= GR[GR.length - 1].indent;) GR.pop();
        yR = {
          text: RR[3].trim(),
          children: []
        }, GR[GR.length - 1].items.push(yR), GR.push({
          indent: JR,
          items: yR.children
        })
      }
      return JR
    }

    function wR(RR) {
      const JR = RR.replace(/\r\n/g, "\n").split("\n"),
        GR = [];
      let yR = 0;
      for (; yR < JR.length;) {
        const RR = JR[yR];
        if (iR(RR)) {
          yR++;
          continue
        }
        const tR = RR.match(/^\s*```\s*(\w*)\s*$/);
        if (tR) {
          const RR = [];
          for (yR++; yR < JR.length && !/^\s*```\s*$/.test(JR[yR]);) RR.push(JR[yR]), yR++;
          yR++, GR.push({
            kind: "code",
            lang: tR[1] || "text",
            code: RR.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const ZR = RR.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (ZR) {
          const RR = ZR[2].trim();
          GR.push({
            kind: "heading",
            level: ZR[1].length,
            text: RR,
            anchor: uR(RR)
          }), yR++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(RR)) {
          GR.push({
            kind: "rule"
          }), yR++;
          continue
        }
        if (RR.trim().startsWith("|") && yR + 1 < JR.length && /^\s*\|[\s:|-]+\|\s*$/.test(JR[yR + 1])) {
          const tR = fR(RR),
            uR = [];
          for (yR += 2; yR < JR.length && JR[yR].trim().startsWith("|");) uR.push(fR(JR[yR])), yR++;
          GR.push({
            kind: "table",
            header: tR,
            rows: uR
          });
          continue
        }
        if (RR.startsWith(">")) {
          const RR = [];
          for (; yR < JR.length && JR[yR].startsWith(">");) RR.push(JR[yR].replace(/^>\s?/, "")), yR++;
          GR.push({
            kind: "quote",
            blocks: wR(RR.join("\n"))
          });
          continue
        }
        if (VR.test(RR)) {
          const tR = [],
            uR = /^\s*\d+\./.test(RR);
          for (; yR < JR.length && !iR(JR[yR]) && (VR.test(JR[yR]) || /^\s+\S/.test(JR[yR]));) tR.push(JR[yR]), yR++;
          GR.push({
            kind: "list",
            ordered: uR,
            items: KR(tR)
          });
          continue
        }
        const qR = [];
        for (; yR < JR.length && !iR(JR[yR]) && !/^\s*```/.test(JR[yR]) && !/^#{1,6}\s/.test(JR[yR]) && !JR[yR].startsWith(">") && !VR.test(JR[yR]) && (!JR[yR].trim().startsWith("|") || 0 !== qR.length);) qR.push(JR[yR].trim()), yR++;
        0 === qR.length && (qR.push(JR[yR].trim()), yR++), GR.push({
          kind: "paragraph",
          text: qR.join(" ")
        })
      }
      return GR
    }

    function rR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const GR = wR(RR);
      let yR = "";
      const tR = [],
        uR = [],
        ZR = new Map;
      for (const fR of GR) {
        if ("heading" === fR.kind) {
          var qR;
          const RR = (null !== (qR = ZR.get(fR.anchor)) && void 0 !== qR ? qR : 0) + 1;
          ZR.set(fR.anchor, RR), RR > 1 && (fR.anchor = `${fR.anchor}-${RR}`)
        }
        if ("heading" === fR.kind && 1 === fR.level && !yR) {
          yR = fR.text;
          continue
        }
        if ("heading" === fR.kind && fR.level <= JR) {
          uR.push({
            heading: fR,
            blocks: []
          });
          continue
        }
        const RR = uR.at(-1);
        RR ? RR.blocks.push(fR) : tR.push(fR)
      }
      const iR = RR => {
        for (;
          "rule" === (null === (JR = RR.at(-1)) || void 0 === JR ? void 0 : JR.kind);) {
          var JR;
          RR.pop()
        }
      };
      iR(tR);
      for (const fR of uR) iR(fR.blocks);
      return {
        title: yR,
        intro: tR,
        sections: uR
      }
    }

    function eR(RR) {
      return [{
        heading: null,
        blocks: RR.intro
      }, ...RR.sections.map((RR => ({
        heading: RR.heading,
        blocks: RR.blocks
      })))]
    }

    function aR(RR) {
      return RR.flatMap((RR => "code" === RR.kind ? [RR] : "quote" === RR.kind ? aR(RR.blocks) : []))
    }

    function LR(RR) {
      switch (RR.kind) {
        case "heading":
        case "paragraph":
          return RR.text;
        case "code":
          return RR.code;
        case "table":
          return [RR.header, ...RR.rows].map((RR => RR.join(" "))).join(" ");
        case "list": {
          const JR = RR => RR.map((RR => `${RR.text} ${JR(RR.children)}`)).join(" ");
          return JR(RR.items)
        }
        case "quote":
          return RR.blocks.map(LR).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7608: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => KR,
      d: () => ZR,
      g: () => qR
    });
    GR(7602);
    var yR = GR(66),
      tR = GR(5635),
      uR = GR(1378);
    const ZR = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function qR(RR, JR) {
      return RR === JR ? RR : `${RR} (${JR})`
    }

    function iR(RR) {
      const JR = [];
      let GR = 0;
      for (const yR of RR.matchAll(ZR)) {
        yR.index > GR && JR.push(RR.slice(GR, yR.index));
        const [, tR, ZR, iR, fR, VR, KR] = yR;
        void 0 !== tR ? JR.push(qR(tR, ZR)) : void 0 !== iR || void 0 !== fR ? JR.push((0, uR.jsx)("strong", {
          children: null !== iR && void 0 !== iR ? iR : fR
        }, yR.index)) : void 0 !== VR ? JR.push((0, uR.jsx)("em", {
          children: VR
        }, yR.index)) : JR.push((0, uR.jsx)("code", {
          children: KR
        }, yR.index)), GR = yR.index + yR[0].length
      }
      return GR < RR.length && JR.push(RR.slice(GR)), JR
    }

    function fR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const yR = RR.map(((RR, JR) => (0, uR.jsxs)("li", {
        children: [iR(RR.text), RR.children.length > 0 && fR(RR.children, !1)]
      }, JR)));
      return JR ? (0, uR.jsx)("ol", {
        start: GR,
        children: yR
      }) : (0, uR.jsx)("ul", {
        children: yR
      })
    }

    function VR(RR, JR) {
      switch (RR.kind) {
        case "heading":
          return RR.level <= 2 ? (0, uR.jsx)("h3", {
            children: iR(RR.text)
          }, JR) : (0, uR.jsx)("h4", {
            children: iR(RR.text)
          }, JR);
        case "paragraph":
          return (0, uR.jsx)("p", {
            children: iR(RR.text)
          }, JR);
        case "list":
          return (0, uR.jsx)(yR.Fragment, {
            children: fR(RR.items, RR.ordered)
          }, JR);
        case "quote":
          return (0, uR.jsx)("blockquote", {
            children: RR.blocks.map(((RR, JR) => VR(RR, JR)))
          }, JR);
        case "code":
          return (0, uR.jsx)("pre", {
            children: (0, uR.jsx)("code", {
              children: RR.code
            })
          }, JR);
        case "table":
          return (0, uR.jsxs)("table", {
            children: [(0, uR.jsx)("thead", {
              children: (0, uR.jsx)("tr", {
                children: RR.header.map(((RR, JR) => (0, uR.jsx)("th", {
                  children: iR(RR)
                }, JR)))
              })
            }), (0, uR.jsx)("tbody", {
              children: RR.rows.map(((RR, JR) => (0, uR.jsx)("tr", {
                children: RR.map(((RR, JR) => (0, uR.jsx)("td", {
                  children: iR(RR)
                }, JR)))
              }, JR)))
            })]
          }, JR);
        case "rule":
          return (0, uR.jsx)("hr", {}, JR)
      }
    }

    function KR(RR) {
      let {
        markdown: JR
      } = RR, GR = 0;
      return (0, uR.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, tR.A)(JR).map(((RR, JR) => {
          if ("list" !== RR.kind || !RR.ordered) return GR = 0, VR(RR, JR);
          const tR = GR + 1;
          return GR += RR.items.length, (0, uR.jsx)(yR.Fragment, {
            children: fR(RR.items, !0, tR)
          }, JR)
        }))
      })
    }
  },
  7599: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => UR,
      j: () => WR,
      f: () => CR,
      l: () => eR
    });
    var yR = GR(1295),
      tR = GR(7555),
      uR = GR(5751);
    const ZR = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function qR(RR) {
      return (0, uR.d)(RR, ZR, (JR => !/^my/i.test(JR[0]) || !/follow $/i.test(RR.slice(0, JR.index)))).length > 0
    }
    const iR = /\byou(?:r|'re|'ll)?\b/i,
      fR = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      VR = 2;

    function KR(RR) {
      return function(RR) {
        const JR = [];
        let GR = !1;
        for (const yR of RR.split("\n")) {
          if (/^\s*(```|~~~)/.test(yR)) {
            GR = !GR;
            continue
          }
          if (GR || /^\s*>/.test(yR)) continue;
          const RR = yR.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          JR.push(...(0, tR.p)(RR))
        }
        return JR
      }(RR).filter((RR => qR(RR) || fR.test(RR) && !iR.test(RR)))
    }
    const wR = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      rR = [{
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

    function eR(RR) {
      const JR = rR.findIndex((JR => JR.name === RR));
      return -1 === JR ? rR.length : JR
    }
    const aR = 2500,
      LR = 12e4;
    class nR extends Error {
      constructor(RR) {
        super(`Studio AI chat ${RR}`), this.reason = RR
      }
    }

    function UR(RR, JR) {
      const GR = new AbortController,
        yR = () => {
          GR.abort()
        },
        tR = setTimeout(yR, RR);
      return null !== JR && void 0 !== JR && JR.aborted && yR(), null === JR || void 0 === JR || JR.addEventListener("abort", yR, {
        once: !0
      }), {
        signal: GR.signal,
        clear: () => {
          clearTimeout(tR), null === JR || void 0 === JR || JR.removeEventListener("abort", yR)
        }
      }
    }

    function WR(RR, JR, GR) {
      return new Promise(((tR, uR) => {
        const ZR = new AbortController,
          qR = () => {
            ZR.abort(), uR((0, yR.g)(GR))
          };
        if (null !== GR && void 0 !== GR && GR.aborted) return void qR();
        null === GR || void 0 === GR || GR.addEventListener("abort", qR, {
          once: !0
        });
        const iR = rR.map((() => !1));
        let fR = null;
        const VR = rR.map((() => !1)),
          KR = rR.map((() => !1));
        rR.forEach(((yR, wR) => {
          const eR = UR(LR, ZR.signal);
          XR(yR, [{
            role: "user",
            content: RR
          }], eR.signal).then((RR => {
            ZR.signal.aborted || ("busy" === RR || "failed" === RR ? (VR[wR] = "busy" === RR, KR[wR] = !0) : null !== RR && (null === fR || wR < fR.rank) && (fR = {
              rank: wR,
              answer: {
                text: RR.text,
                model: yR.name
              }
            }, JR(fR.answer)))
          }), (RR => {
            ZR.signal.aborted || (KR[wR] = !0, console.warn(`Studio AI: ${yR.name} couldn't be reached`, RR))
          })).finally((() => {
            eR.clear(), iR[wR] = !0, ZR.signal.aborted || (() => {
              var RR, JR;
              const yR = null !== (RR = null === (JR = fR) || void 0 === JR ? void 0 : JR.rank) && void 0 !== RR ? RR : rR.length;
              iR.slice(0, yR).includes(!1) || (null === GR || void 0 === GR || GR.removeEventListener("abort", qR), ZR.abort(), null !== fR ? tR({
                ...fR.answer,
                isFinal: !KR.slice(0, fR.rank).includes(!0)
              }) : uR(new nR(VR.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((RR => {
            console.error("Studio AI: showing an answer failed", RR)
          }))
        }))
      }))
    }

    function AR(RR) {
      var JR, GR;
      return "length" === (null === RR || void 0 === RR || null === (JR = RR.choices) || void 0 === JR || null === (GR = JR[0]) || void 0 === GR ? void 0 : GR.finish_reason)
    }
    async function CR(RR, JR, GR) {
      const yR = rR.find((JR => JR.name === RR));
      if (void 0 === yR) return "failed";
      const tR = UR(LR, GR);
      try {
        const RR = await XR(yR, JR, tR.signal);
        return null !== RR && "object" === typeof RR ? RR.isCutOff ? (console.warn(`Studio AI: ${yR.name}'s answer was cut off at the token limit`), null) : {
          text: RR.text
        } : RR
      } finally {
        tR.clear()
      }
    }
    async function XR(RR, JR, GR) {
      const yR = await fetch(wR, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: RR.name,
          messages: JR,
          max_tokens: aR,
          temperature: RR.temperature,
          reasoning_effort: RR.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: GR
      });
      if (429 === yR.status) return "busy";
      if (!yR.ok) return console.warn(`Studio AI: ${RR.name} answered ${yR.status}`), "failed";
      const tR = await yR.json().catch((() => null)),
        uR = function(RR) {
          var JR, GR, yR;
          const tR = null === RR || void 0 === RR || null === (JR = RR.choices) || void 0 === JR || null === (GR = JR[0]) || void 0 === GR || null === (yR = GR.message) || void 0 === yR ? void 0 : yR.content;
          if ("string" !== typeof tR) return null;
          const uR = tR.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === uR ? null : uR
        }(tR);
      return null !== uR && function(RR) {
        const JR = KR(RR);
        return JR.length >= VR || JR.some((RR => qR(RR)))
      }(uR) ? (console.warn(`Studio AI: ${RR.name} thought out loud instead of answering`), "failed") : null === uR ? null : {
        text: uR,
        isCutOff: AR(tR)
      }
    }
  },
  7555: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => LR,
      E: () => WR,
      H: () => CR,
      I: () => UR,
      J: () => KR,
      L: () => fR,
      N: () => rR,
      c: () => eR,
      g: () => qR,
      k: () => ZR,
      l: () => aR,
      n: () => wR,
      p: () => VR,
      q: () => uR,
      t: () => tR,
      v: () => AR,
      y: () => XR
    });
    var yR = GR(5751);
    const tR = 2e3,
      uR = 2e4;

    function ZR(RR) {
      return RR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function qR(RR) {
      return RR.replace(/\$/g, "\\$")
    }
    const iR = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function fR(RR, JR) {
      iR.lastIndex = JR;
      const GR = iR.exec(RR);
      return GR.index + GR[0].length
    }

    function VR(RR) {
      return (0, yR.v)(RR, /\s+/g, (0, yR.r)(".!?")).flatMap((RR => RR.split("\n")))
    }

    function KR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR;
      const yR = [...RR.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((RR => RR.index)),
        tR = yR.filter((RR => RR < JR)),
        uR = yR.find((RR => RR >= GR));
      return [0 === tR.length ? 0 : tR.at(-1) + 1, void 0 === uR ? RR.length : uR + 1]
    }

    function wR(RR, JR) {
      const GR = RR.charCodeAt(JR - 1);
      return RR.slice(0, JR > 0 && JR < RR.length && GR >= 55296 && GR <= 56319 ? JR - 1 : JR)
    }

    function rR(RR, JR) {
      return `${JR}${RR.replace(/\\/g,"\\\\").split(JR).join(`\\${JR}`)}${JR}`
    }

    function eR(RR) {
      return RR.charAt(0).toUpperCase() + RR.slice(1)
    }

    function aR(RR) {
      return Math.round(RR).toLocaleString("en-US")
    }

    function LR(RR) {
      return RR.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((RR => "" !== RR))
    }
    const nR = 3;

    function UR(RR, JR) {
      return LR(RR).filter((RR => RR.length >= nR && !/\d/.test(RR))).map((RR => `${RR} ${JR}`))
    }

    function WR(RR) {
      return RR.split(/[\s:_]+/).filter((RR => "" !== RR)).map(ZR).join("[`:_\\s]+")
    }

    function AR(RR) {
      return LR(RR.split(".").pop())
    }

    function CR(RR) {
      return RR.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function XR(RR) {
      let JR = null;
      return () => {
        const GR = JR ??= RR();
        return GR.catch((() => {
          JR === GR && (JR = null)
        })), GR
      }
    }
  },
  5751: (RR, JR, GR) => {
    function yR(RR) {
      return {
        notAfter: RR
      }
    }
    GR.d(JR, {
      c: () => iR,
      d: () => fR,
      g: () => qR,
      k: () => yR,
      n: () => tR,
      p: () => uR,
      r: () => ZR,
      s: () => VR,
      v: () => KR
    });
    const tR = yR("\\w$."),
      uR = yR("\\w.,");

    function ZR(RR) {
      return JR => iR(JR, RR)
    }

    function qR(RR) {
      return JR => !RR.test(JR.input.slice(0, JR.index))
    }

    function iR(RR, JR) {
      return RR.index > 0 && new RegExp(`[${JR}]`).test(RR.input[RR.index - 1])
    }

    function fR(RR, JR, GR) {
      return function(RR) {
        return void 0 !== RR && "function" !== typeof RR
      }(GR) ? function(RR, JR, GR) {
        const yR = JR.flags.replace(/[gy]/g, ""),
          tR = new RegExp(`[^${GR}](?:${JR.source})`, `${yR}g`),
          uR = [],
          ZR = GR => {
            const yR = GR.index + GR[0].length;
            return ("" === GR[0] ? wR(RR, JR, yR) : yR) - 1
          },
          qR = new RegExp(`(?:${JR.source})`, `${yR}y`).exec(RR);
        if (qR) {
          if (uR.push(qR), !JR.global) return uR;
          tR.lastIndex = ZR(qR)
        }
        for (let iR = tR.exec(RR); iR; iR = tR.exec(RR)) {
          const GR = wR(RR, JR, iR.index) - iR.index;
          if (iR[0] = iR[0].slice(GR), iR.index += GR, uR.push(iR), !JR.global) break;
          tR.lastIndex = ZR(iR)
        }
        return uR
      }(RR, JR, GR.notAfter) : function(RR, JR, GR) {
        const yR = new RegExp(JR.source, `${JR.flags.replace(/[gy]/g,"")}g`),
          tR = [];
        for (let uR = yR.exec(RR); uR; uR = yR.exec(RR))
          if (!GR || GR(uR)) {
            if (tR.push(uR), !JR.global) break;
            "" === uR[0] && (yR.lastIndex = wR(RR, JR, yR.lastIndex))
          } else yR.lastIndex = wR(RR, JR, uR.index);
        return tR
      }(RR, JR, GR)
    }

    function VR(RR, JR, GR, yR) {
      let tR = "",
        uR = 0;
      for (const ZR of fR(RR, JR, GR)) tR += RR.slice(uR, ZR.index) + yR(ZR), uR = ZR.index + ZR[0].length;
      return tR + RR.slice(uR)
    }

    function KR(RR, JR, GR) {
      const yR = [];
      let tR = 0;
      for (const uR of fR(RR, JR, GR)) yR.push(RR.slice(tR, uR.index)), tR = uR.index + uR[0].length;
      return [...yR, RR.slice(tR)]
    }

    function wR(RR, JR, GR) {
      var yR;
      return GR + (JR.unicode && (null !== (yR = RR.codePointAt(GR)) && void 0 !== yR ? yR : 0) > 65535 ? 2 : 1)
    }
  },
  7602: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);