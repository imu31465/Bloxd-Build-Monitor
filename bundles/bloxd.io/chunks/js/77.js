export const id = 77;
export const ids = [77];
export const modules = {
  4313: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => sY,
      c: () => FY,
      f: () => RY,
      i: () => oY,
      l: () => QY,
      o: () => OY,
      s: () => AY,
      v: () => IY,
      x: () => yY,
      z: () => iY
    });
    const FY = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function AY(YY) {
      try {
        return decodeURIComponent(YY.slice(1))
      } catch {
        return YY.slice(1)
      }
    }

    function IY(YY) {
      return YY.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const RY = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${FY.source}`, "g");

    function OY(YY, rY) {
      return 2 === YY.length ? rY.replace(/^ (.*) $/, "$1") : rY
    }

    function gY(YY) {
      return "" === YY.trim()
    }

    function aY(YY) {
      const rY = [];
      for (const DY of YY.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rY.length > 0 && rY[rY.length - 1].endsWith("\\") ? rY[rY.length - 1] += `|${DY}` : rY.push(DY);
      return rY.map((YY => YY.trim().replaceAll("\\|", "|")))
    }
    const vY = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function uY(YY) {
      const rY = [],
        DY = [{
          indent: -1,
          items: rY
        }];
      let FY = null;
      for (const AY of YY) {
        const YY = AY.match(vY);
        if (!YY) {
          FY && (FY.text += ` ${AY.trim()}`);
          continue
        }
        const rY = YY[1].replace(/\t/g, "  ").length;
        for (; rY <= DY[DY.length - 1].indent;) DY.pop();
        FY = {
          text: YY[3].trim(),
          children: []
        }, DY[DY.length - 1].items.push(FY), DY.push({
          indent: rY,
          items: FY.children
        })
      }
      return rY
    }

    function sY(YY) {
      const rY = YY.replace(/\r\n/g, "\n").split("\n"),
        DY = [];
      let FY = 0;
      for (; FY < rY.length;) {
        const YY = rY[FY];
        if (gY(YY)) {
          FY++;
          continue
        }
        const AY = YY.match(/^\s*```\s*(\w*)\s*$/);
        if (AY) {
          const YY = [];
          for (FY++; FY < rY.length && !/^\s*```\s*$/.test(rY[FY]);) YY.push(rY[FY]), FY++;
          FY++, DY.push({
            kind: "code",
            lang: AY[1] || "text",
            code: YY.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const RY = YY.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (RY) {
          const YY = RY[2].trim();
          DY.push({
            kind: "heading",
            level: RY[1].length,
            text: YY,
            anchor: IY(YY)
          }), FY++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(YY)) {
          DY.push({
            kind: "rule"
          }), FY++;
          continue
        }
        if (YY.trim().startsWith("|") && FY + 1 < rY.length && /^\s*\|[\s:|-]+\|\s*$/.test(rY[FY + 1])) {
          const AY = aY(YY),
            IY = [];
          for (FY += 2; FY < rY.length && rY[FY].trim().startsWith("|");) IY.push(aY(rY[FY])), FY++;
          DY.push({
            kind: "table",
            header: AY,
            rows: IY
          });
          continue
        }
        if (YY.startsWith(">")) {
          const YY = [];
          for (; FY < rY.length && rY[FY].startsWith(">");) YY.push(rY[FY].replace(/^>\s?/, "")), FY++;
          DY.push({
            kind: "quote",
            blocks: sY(YY.join("\n"))
          });
          continue
        }
        if (vY.test(YY)) {
          const AY = [],
            IY = /^\s*\d+\./.test(YY);
          for (; FY < rY.length && !gY(rY[FY]) && (vY.test(rY[FY]) || /^\s+\S/.test(rY[FY]));) AY.push(rY[FY]), FY++;
          DY.push({
            kind: "list",
            ordered: IY,
            items: uY(AY)
          });
          continue
        }
        const OY = [];
        for (; FY < rY.length && !gY(rY[FY]) && !/^\s*```/.test(rY[FY]) && !/^#{1,6}\s/.test(rY[FY]) && !rY[FY].startsWith(">") && !vY.test(rY[FY]) && (!rY[FY].trim().startsWith("|") || 0 !== OY.length);) OY.push(rY[FY].trim()), FY++;
        0 === OY.length && (OY.push(rY[FY].trim()), FY++), DY.push({
          kind: "paragraph",
          text: OY.join(" ")
        })
      }
      return DY
    }

    function iY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const DY = sY(YY);
      let FY = "";
      const AY = [],
        IY = [],
        RY = new Map;
      for (const aY of DY) {
        if ("heading" === aY.kind) {
          var OY;
          const YY = (null !== (OY = RY.get(aY.anchor)) && void 0 !== OY ? OY : 0) + 1;
          RY.set(aY.anchor, YY), YY > 1 && (aY.anchor = `${aY.anchor}-${YY}`)
        }
        if ("heading" === aY.kind && 1 === aY.level && !FY) {
          FY = aY.text;
          continue
        }
        if ("heading" === aY.kind && aY.level <= rY) {
          IY.push({
            heading: aY,
            blocks: []
          });
          continue
        }
        const YY = IY.at(-1);
        YY ? YY.blocks.push(aY) : AY.push(aY)
      }
      const gY = YY => {
        for (;
          "rule" === (null === (rY = YY.at(-1)) || void 0 === rY ? void 0 : rY.kind);) {
          var rY;
          YY.pop()
        }
      };
      gY(AY);
      for (const aY of IY) gY(aY.blocks);
      return {
        title: FY,
        intro: AY,
        sections: IY
      }
    }

    function yY(YY) {
      return [{
        heading: null,
        blocks: YY.intro
      }, ...YY.sections.map((YY => ({
        heading: YY.heading,
        blocks: YY.blocks
      })))]
    }

    function QY(YY) {
      return YY.flatMap((YY => "code" === YY.kind ? [YY] : "quote" === YY.kind ? QY(YY.blocks) : []))
    }

    function oY(YY) {
      switch (YY.kind) {
        case "heading":
        case "paragraph":
          return YY.text;
        case "code":
          return YY.code;
        case "table":
          return [YY.header, ...YY.rows].map((YY => YY.join(" "))).join(" ");
        case "list": {
          const rY = YY => YY.map((YY => `${YY.text} ${rY(YY.children)}`)).join(" ");
          return rY(YY.items)
        }
        case "quote":
          return YY.blocks.map(oY).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6061: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => uY,
      f: () => RY,
      h: () => OY
    });
    DY(6057);
    var FY = DY(61),
      AY = DY(4313),
      IY = DY(1125);
    const RY = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function OY(YY, rY) {
      return YY === rY ? YY : `${YY} (${rY})`
    }

    function gY(YY) {
      const rY = [];
      let DY = 0;
      for (const FY of YY.matchAll(RY)) {
        FY.index > DY && rY.push(YY.slice(DY, FY.index));
        const [, AY, RY, gY, aY, vY, uY] = FY;
        void 0 !== AY ? rY.push(OY(AY, RY)) : void 0 !== gY || void 0 !== aY ? rY.push((0, IY.jsx)("strong", {
          children: null !== gY && void 0 !== gY ? gY : aY
        }, FY.index)) : void 0 !== vY ? rY.push((0, IY.jsx)("em", {
          children: vY
        }, FY.index)) : rY.push((0, IY.jsx)("code", {
          children: uY
        }, FY.index)), DY = FY.index + FY[0].length
      }
      return DY < YY.length && rY.push(YY.slice(DY)), rY
    }

    function aY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const FY = YY.map(((YY, rY) => (0, IY.jsxs)("li", {
        children: [gY(YY.text), YY.children.length > 0 && aY(YY.children, !1)]
      }, rY)));
      return rY ? (0, IY.jsx)("ol", {
        start: DY,
        children: FY
      }) : (0, IY.jsx)("ul", {
        children: FY
      })
    }

    function vY(YY, rY) {
      switch (YY.kind) {
        case "heading":
          return YY.level <= 2 ? (0, IY.jsx)("h3", {
            children: gY(YY.text)
          }, rY) : (0, IY.jsx)("h4", {
            children: gY(YY.text)
          }, rY);
        case "paragraph":
          return (0, IY.jsx)("p", {
            children: gY(YY.text)
          }, rY);
        case "list":
          return (0, IY.jsx)(FY.Fragment, {
            children: aY(YY.items, YY.ordered)
          }, rY);
        case "quote":
          return (0, IY.jsx)("blockquote", {
            children: YY.blocks.map(((YY, rY) => vY(YY, rY)))
          }, rY);
        case "code":
          return (0, IY.jsx)("pre", {
            children: (0, IY.jsx)("code", {
              children: YY.code
            })
          }, rY);
        case "table":
          return (0, IY.jsxs)("table", {
            children: [(0, IY.jsx)("thead", {
              children: (0, IY.jsx)("tr", {
                children: YY.header.map(((YY, rY) => (0, IY.jsx)("th", {
                  children: gY(YY)
                }, rY)))
              })
            }), (0, IY.jsx)("tbody", {
              children: YY.rows.map(((YY, rY) => (0, IY.jsx)("tr", {
                children: YY.map(((YY, rY) => (0, IY.jsx)("td", {
                  children: gY(YY)
                }, rY)))
              }, rY)))
            })]
          }, rY);
        case "rule":
          return (0, IY.jsx)("hr", {}, rY)
      }
    }

    function uY(YY) {
      let {
        markdown: rY
      } = YY, DY = 0;
      return (0, IY.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, AY.A)(rY).map(((YY, rY) => {
          if ("list" !== YY.kind || !YY.ordered) return DY = 0, vY(YY, rY);
          const AY = DY + 1;
          return DY += YY.items.length, (0, IY.jsx)(FY.Fragment, {
            children: aY(YY.items, !0, AY)
          }, rY)
        }))
      })
    }
  },
  6050: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => EY,
      h: () => mY,
      f: () => SY,
      j: () => yY
    });
    var FY = DY(3258),
      AY = DY(6011),
      IY = DY(4443);
    const RY = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function OY(YY) {
      return (0, IY.g)(YY, RY, (rY => !/^my/i.test(rY[0]) || !/follow $/i.test(YY.slice(0, rY.index)))).length > 0
    }
    const gY = /\byou(?:r|'re|'ll)?\b/i,
      aY = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      vY = 2;

    function uY(YY) {
      return function(YY) {
        const rY = [];
        let DY = !1;
        for (const FY of YY.split("\n")) {
          if (/^\s*(```|~~~)/.test(FY)) {
            DY = !DY;
            continue
          }
          if (DY || /^\s*>/.test(FY)) continue;
          const YY = FY.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          rY.push(...(0, AY.m)(YY))
        }
        return rY
      }(YY).filter((YY => OY(YY) || aY.test(YY) && !gY.test(YY)))
    }
    const sY = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      iY = [{
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

    function yY(YY) {
      const rY = iY.findIndex((rY => rY.name === YY));
      return -1 === rY ? iY.length : rY
    }
    const QY = 2500,
      oY = 12e4;
    class WY extends Error {
      constructor(YY) {
        super(`Studio AI chat ${YY}`), this.reason = YY
      }
    }

    function EY(YY, rY) {
      const DY = new AbortController,
        FY = () => {
          DY.abort()
        },
        AY = setTimeout(FY, YY);
      return null !== rY && void 0 !== rY && rY.aborted && FY(), null === rY || void 0 === rY || rY.addEventListener("abort", FY, {
        once: !0
      }), {
        signal: DY.signal,
        clear: () => {
          clearTimeout(AY), null === rY || void 0 === rY || rY.removeEventListener("abort", FY)
        }
      }
    }

    function mY(YY, rY, DY) {
      return new Promise(((AY, IY) => {
        const RY = new AbortController,
          OY = () => {
            RY.abort(), IY((0, FY.h)(DY))
          };
        if (null !== DY && void 0 !== DY && DY.aborted) return void OY();
        null === DY || void 0 === DY || DY.addEventListener("abort", OY, {
          once: !0
        });
        const gY = iY.map((() => !1));
        let aY = null;
        const vY = iY.map((() => !1)),
          uY = iY.map((() => !1));
        iY.forEach(((FY, sY) => {
          const yY = EY(oY, RY.signal);
          lY(FY, [{
            role: "user",
            content: YY
          }], yY.signal).then((YY => {
            RY.signal.aborted || ("busy" === YY || "failed" === YY ? (vY[sY] = "busy" === YY, uY[sY] = !0) : null !== YY && (null === aY || sY < aY.rank) && (aY = {
              rank: sY,
              answer: {
                text: YY.text,
                model: FY.name
              }
            }, rY(aY.answer)))
          }), (YY => {
            RY.signal.aborted || (uY[sY] = !0, console.warn(`Studio AI: ${FY.name} couldn't be reached`, YY))
          })).finally((() => {
            yY.clear(), gY[sY] = !0, RY.signal.aborted || (() => {
              var YY, rY;
              const FY = null !== (YY = null === (rY = aY) || void 0 === rY ? void 0 : rY.rank) && void 0 !== YY ? YY : iY.length;
              gY.slice(0, FY).includes(!1) || (null === DY || void 0 === DY || DY.removeEventListener("abort", OY), RY.abort(), null !== aY ? AY({
                ...aY.answer,
                isFinal: !uY.slice(0, aY.rank).includes(!0)
              }) : IY(new WY(vY.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((YY => {
            console.error("Studio AI: showing an answer failed", YY)
          }))
        }))
      }))
    }

    function VY(YY) {
      var rY, DY;
      return "length" === (null === YY || void 0 === YY || null === (rY = YY.choices) || void 0 === rY || null === (DY = rY[0]) || void 0 === DY ? void 0 : DY.finish_reason)
    }
    async function SY(YY, rY, DY) {
      const FY = iY.find((rY => rY.name === YY));
      if (void 0 === FY) return "failed";
      const AY = EY(oY, DY);
      try {
        const YY = await lY(FY, rY, AY.signal);
        return null !== YY && "object" === typeof YY ? YY.isCutOff ? (console.warn(`Studio AI: ${FY.name}'s answer was cut off at the token limit`), null) : {
          text: YY.text
        } : YY
      } finally {
        AY.clear()
      }
    }
    async function lY(YY, rY, DY) {
      const FY = await fetch(sY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: YY.name,
          messages: rY,
          max_tokens: QY,
          temperature: YY.temperature,
          reasoning_effort: YY.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: DY
      });
      if (429 === FY.status) return "busy";
      if (!FY.ok) return console.warn(`Studio AI: ${YY.name} answered ${FY.status}`), "failed";
      const AY = await FY.json().catch((() => null)),
        IY = function(YY) {
          var rY, DY, FY;
          const AY = null === YY || void 0 === YY || null === (rY = YY.choices) || void 0 === rY || null === (DY = rY[0]) || void 0 === DY || null === (FY = DY.message) || void 0 === FY ? void 0 : FY.content;
          if ("string" !== typeof AY) return null;
          const IY = AY.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === IY ? null : IY
        }(AY);
      return null !== IY && function(YY) {
        const rY = uY(YY);
        return rY.length >= vY || rY.some((YY => OY(YY)))
      }(IY) ? (console.warn(`Studio AI: ${YY.name} thought out loud instead of answering`), "failed") : null === IY ? null : {
        text: IY,
        isCutOff: VY(AY)
      }
    }
  },
  6011: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => oY,
      D: () => mY,
      G: () => SY,
      I: () => EY,
      J: () => uY,
      L: () => aY,
      O: () => iY,
      b: () => yY,
      f: () => OY,
      g: () => RY,
      j: () => QY,
      l: () => sY,
      m: () => vY,
      o: () => IY,
      r: () => AY,
      v: () => VY,
      x: () => lY
    });
    var FY = DY(4443);
    const AY = 2e3,
      IY = 2e4;

    function RY(YY) {
      return YY.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function OY(YY) {
      return YY.replace(/\$/g, "\\$")
    }
    const gY = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function aY(YY, rY) {
      gY.lastIndex = rY;
      const DY = gY.exec(YY);
      return DY.index + DY[0].length
    }

    function vY(YY) {
      return (0, FY.F)(YY, /\s+/g, (0, FY.y)(".!?")).flatMap((YY => YY.split("\n")))
    }

    function uY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY;
      const FY = [...YY.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((YY => YY.index)),
        AY = FY.filter((YY => YY < rY)),
        IY = FY.find((YY => YY >= DY));
      return [0 === AY.length ? 0 : AY.at(-1) + 1, void 0 === IY ? YY.length : IY + 1]
    }

    function sY(YY, rY) {
      const DY = YY.charCodeAt(rY - 1);
      return YY.slice(0, rY > 0 && rY < YY.length && DY >= 55296 && DY <= 56319 ? rY - 1 : rY)
    }

    function iY(YY, rY) {
      return `${rY}${YY.replace(/\\/g,"\\\\").split(rY).join(`\\${rY}`)}${rY}`
    }

    function yY(YY) {
      return YY.charAt(0).toUpperCase() + YY.slice(1)
    }

    function QY(YY) {
      return Math.round(YY).toLocaleString("en-US")
    }

    function oY(YY) {
      return YY.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((YY => "" !== YY))
    }
    const WY = 3;

    function EY(YY, rY) {
      return oY(YY).filter((YY => YY.length >= WY && !/\d/.test(YY))).map((YY => `${YY} ${rY}`))
    }

    function mY(YY) {
      return YY.split(/[\s:_]+/).filter((YY => "" !== YY)).map(RY).join("[`:_\\s]+")
    }

    function VY(YY) {
      return oY(YY.split(".").pop())
    }

    function SY(YY) {
      return YY.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function lY(YY) {
      let rY = null;
      return () => {
        const DY = rY ??= YY();
        return DY.catch((() => {
          rY === DY && (rY = null)
        })), DY
      }
    }
  },
  4443: (YY, rY, DY) => {
    function FY(YY) {
      return {
        notAfter: YY
      }
    }
    DY.d(rY, {
      C: () => vY,
      F: () => uY,
      d: () => gY,
      g: () => aY,
      j: () => OY,
      m: () => FY,
      q: () => AY,
      u: () => IY,
      y: () => RY
    });
    const AY = FY("\\w$."),
      IY = FY("\\w.,");

    function RY(YY) {
      return rY => gY(rY, YY)
    }

    function OY(YY) {
      return rY => !YY.test(rY.input.slice(0, rY.index))
    }

    function gY(YY, rY) {
      return YY.index > 0 && new RegExp(`[${rY}]`).test(YY.input[YY.index - 1])
    }

    function aY(YY, rY, DY) {
      return function(YY) {
        return void 0 !== YY && "function" !== typeof YY
      }(DY) ? function(YY, rY, DY) {
        const FY = rY.flags.replace(/[gy]/g, ""),
          AY = new RegExp(`[^${DY}](?:${rY.source})`, `${FY}g`),
          IY = [],
          RY = DY => {
            const FY = DY.index + DY[0].length;
            return ("" === DY[0] ? sY(YY, rY, FY) : FY) - 1
          },
          OY = new RegExp(`(?:${rY.source})`, `${FY}y`).exec(YY);
        if (OY) {
          if (IY.push(OY), !rY.global) return IY;
          AY.lastIndex = RY(OY)
        }
        for (let gY = AY.exec(YY); gY; gY = AY.exec(YY)) {
          const DY = sY(YY, rY, gY.index) - gY.index;
          if (gY[0] = gY[0].slice(DY), gY.index += DY, IY.push(gY), !rY.global) break;
          AY.lastIndex = RY(gY)
        }
        return IY
      }(YY, rY, DY.notAfter) : function(YY, rY, DY) {
        const FY = new RegExp(rY.source, `${rY.flags.replace(/[gy]/g,"")}g`),
          AY = [];
        for (let IY = FY.exec(YY); IY; IY = FY.exec(YY))
          if (!DY || DY(IY)) {
            if (AY.push(IY), !rY.global) break;
            "" === IY[0] && (FY.lastIndex = sY(YY, rY, FY.lastIndex))
          } else FY.lastIndex = sY(YY, rY, IY.index);
        return AY
      }(YY, rY, DY)
    }

    function vY(YY, rY, DY, FY) {
      let AY = "",
        IY = 0;
      for (const RY of aY(YY, rY, DY)) AY += YY.slice(IY, RY.index) + FY(RY), IY = RY.index + RY[0].length;
      return AY + YY.slice(IY)
    }

    function uY(YY, rY, DY) {
      const FY = [];
      let AY = 0;
      for (const IY of aY(YY, rY, DY)) FY.push(YY.slice(AY, IY.index)), AY = IY.index + IY[0].length;
      return [...FY, YY.slice(AY)]
    }

    function sY(YY, rY, DY) {
      var FY;
      return DY + (rY.unicode && (null !== (FY = YY.codePointAt(DY)) && void 0 !== FY ? FY : 0) > 65535 ? 2 : 1)
    }
  },
  6057: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);