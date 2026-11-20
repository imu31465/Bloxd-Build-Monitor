export const id = 78;
export const ids = [78];
export const modules = {
  4565: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Wq,
      d: () => Yq,
      g: () => mq,
      j: () => dq,
      n: () => Vq,
      p: () => xq,
      s: () => lq,
      t: () => Oq,
      u: () => aq,
      w: () => Nq
    });
    const Yq = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function lq(qq) {
      try {
        return decodeURIComponent(qq.slice(1))
      } catch {
        return qq.slice(1)
      }
    }

    function Oq(qq) {
      return qq.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const mq = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Yq.source}`, "g");

    function xq(qq, Eq) {
      return 2 === qq.length ? Eq.replace(/^ (.*) $/, "$1") : Eq
    }

    function Aq(qq) {
      return "" === qq.trim()
    }

    function cq(qq) {
      const Eq = [];
      for (const gq of qq.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Eq.length > 0 && Eq[Eq.length - 1].endsWith("\\") ? Eq[Eq.length - 1] += `|${gq}` : Eq.push(gq);
      return Eq.map((qq => qq.trim().replaceAll("\\|", "|")))
    }
    const uq = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Bq(qq) {
      const Eq = [],
        gq = [{
          indent: -1,
          items: Eq
        }];
      let Yq = null;
      for (const lq of qq) {
        const qq = lq.match(uq);
        if (!qq) {
          Yq && (Yq.text += ` ${lq.trim()}`);
          continue
        }
        const Eq = qq[1].replace(/\t/g, "  ").length;
        for (; Eq <= gq[gq.length - 1].indent;) gq.pop();
        Yq = {
          text: qq[3].trim(),
          children: []
        }, gq[gq.length - 1].items.push(Yq), gq.push({
          indent: Eq,
          items: Yq.children
        })
      }
      return Eq
    }

    function Wq(qq) {
      const Eq = qq.replace(/\r\n/g, "\n").split("\n"),
        gq = [];
      let Yq = 0;
      for (; Yq < Eq.length;) {
        const qq = Eq[Yq];
        if (Aq(qq)) {
          Yq++;
          continue
        }
        const lq = qq.match(/^\s*```\s*(\w*)\s*$/);
        if (lq) {
          const qq = [];
          for (Yq++; Yq < Eq.length && !/^\s*```\s*$/.test(Eq[Yq]);) qq.push(Eq[Yq]), Yq++;
          Yq++, gq.push({
            kind: "code",
            lang: lq[1] || "text",
            code: qq.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const mq = qq.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (mq) {
          const qq = mq[2].trim();
          gq.push({
            kind: "heading",
            level: mq[1].length,
            text: qq,
            anchor: Oq(qq)
          }), Yq++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(qq)) {
          gq.push({
            kind: "rule"
          }), Yq++;
          continue
        }
        if (qq.trim().startsWith("|") && Yq + 1 < Eq.length && /^\s*\|[\s:|-]+\|\s*$/.test(Eq[Yq + 1])) {
          const lq = cq(qq),
            Oq = [];
          for (Yq += 2; Yq < Eq.length && Eq[Yq].trim().startsWith("|");) Oq.push(cq(Eq[Yq])), Yq++;
          gq.push({
            kind: "table",
            header: lq,
            rows: Oq
          });
          continue
        }
        if (qq.startsWith(">")) {
          const qq = [];
          for (; Yq < Eq.length && Eq[Yq].startsWith(">");) qq.push(Eq[Yq].replace(/^>\s?/, "")), Yq++;
          gq.push({
            kind: "quote",
            blocks: Wq(qq.join("\n"))
          });
          continue
        }
        if (uq.test(qq)) {
          const lq = [],
            Oq = /^\s*\d+\./.test(qq);
          for (; Yq < Eq.length && !Aq(Eq[Yq]) && (uq.test(Eq[Yq]) || /^\s+\S/.test(Eq[Yq]));) lq.push(Eq[Yq]), Yq++;
          gq.push({
            kind: "list",
            ordered: Oq,
            items: Bq(lq)
          });
          continue
        }
        const xq = [];
        for (; Yq < Eq.length && !Aq(Eq[Yq]) && !/^\s*```/.test(Eq[Yq]) && !/^#{1,6}\s/.test(Eq[Yq]) && !Eq[Yq].startsWith(">") && !uq.test(Eq[Yq]) && (!Eq[Yq].trim().startsWith("|") || 0 !== xq.length);) xq.push(Eq[Yq].trim()), Yq++;
        0 === xq.length && (xq.push(Eq[Yq].trim()), Yq++), gq.push({
          kind: "paragraph",
          text: xq.join(" ")
        })
      }
      return gq
    }

    function Nq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gq = Wq(qq);
      let Yq = "";
      const lq = [],
        Oq = [],
        mq = new Map;
      for (const cq of gq) {
        if ("heading" === cq.kind) {
          var xq;
          const qq = (null !== (xq = mq.get(cq.anchor)) && void 0 !== xq ? xq : 0) + 1;
          mq.set(cq.anchor, qq), qq > 1 && (cq.anchor = `${cq.anchor}-${qq}`)
        }
        if ("heading" === cq.kind && 1 === cq.level && !Yq) {
          Yq = cq.text;
          continue
        }
        if ("heading" === cq.kind && cq.level <= Eq) {
          Oq.push({
            heading: cq,
            blocks: []
          });
          continue
        }
        const qq = Oq.at(-1);
        qq ? qq.blocks.push(cq) : lq.push(cq)
      }
      const Aq = qq => {
        for (;
          "rule" === (null === (Eq = qq.at(-1)) || void 0 === Eq ? void 0 : Eq.kind);) {
          var Eq;
          qq.pop()
        }
      };
      Aq(lq);
      for (const cq of Oq) Aq(cq.blocks);
      return {
        title: Yq,
        intro: lq,
        sections: Oq
      }
    }

    function aq(qq) {
      return [{
        heading: null,
        blocks: qq.intro
      }, ...qq.sections.map((qq => ({
        heading: qq.heading,
        blocks: qq.blocks
      })))]
    }

    function Vq(qq) {
      return qq.flatMap((qq => "code" === qq.kind ? [qq] : "quote" === qq.kind ? Vq(qq.blocks) : []))
    }

    function dq(qq) {
      switch (qq.kind) {
        case "heading":
        case "paragraph":
          return qq.text;
        case "code":
          return qq.code;
        case "table":
          return [qq.header, ...qq.rows].map((qq => qq.join(" "))).join(" ");
        case "list": {
          const Eq = qq => qq.map((qq => `${qq.text} ${Eq(qq.children)}`)).join(" ");
          return Eq(qq.items)
        }
        case "quote":
          return qq.blocks.map(dq).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6370: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Bq,
      h: () => mq,
      j: () => xq
    });
    gq(6366);
    var Yq = gq(57),
      lq = gq(4565),
      Oq = gq(1070);
    const mq = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function xq(qq, Eq) {
      return qq === Eq ? qq : `${qq} (${Eq})`
    }

    function Aq(qq) {
      const Eq = [];
      let gq = 0;
      for (const Yq of qq.matchAll(mq)) {
        Yq.index > gq && Eq.push(qq.slice(gq, Yq.index));
        const [, lq, mq, Aq, cq, uq, Bq] = Yq;
        void 0 !== lq ? Eq.push(xq(lq, mq)) : void 0 !== Aq || void 0 !== cq ? Eq.push((0, Oq.jsx)("strong", {
          children: null !== Aq && void 0 !== Aq ? Aq : cq
        }, Yq.index)) : void 0 !== uq ? Eq.push((0, Oq.jsx)("em", {
          children: uq
        }, Yq.index)) : Eq.push((0, Oq.jsx)("code", {
          children: Bq
        }, Yq.index)), gq = Yq.index + Yq[0].length
      }
      return gq < qq.length && Eq.push(qq.slice(gq)), Eq
    }

    function cq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Yq = qq.map(((qq, Eq) => (0, Oq.jsxs)("li", {
        children: [Aq(qq.text), qq.children.length > 0 && cq(qq.children, !1)]
      }, Eq)));
      return Eq ? (0, Oq.jsx)("ol", {
        start: gq,
        children: Yq
      }) : (0, Oq.jsx)("ul", {
        children: Yq
      })
    }

    function uq(qq, Eq) {
      switch (qq.kind) {
        case "heading":
          return qq.level <= 2 ? (0, Oq.jsx)("h3", {
            children: Aq(qq.text)
          }, Eq) : (0, Oq.jsx)("h4", {
            children: Aq(qq.text)
          }, Eq);
        case "paragraph":
          return (0, Oq.jsx)("p", {
            children: Aq(qq.text)
          }, Eq);
        case "list":
          return (0, Oq.jsx)(Yq.Fragment, {
            children: cq(qq.items, qq.ordered)
          }, Eq);
        case "quote":
          return (0, Oq.jsx)("blockquote", {
            children: qq.blocks.map(((qq, Eq) => uq(qq, Eq)))
          }, Eq);
        case "code":
          return (0, Oq.jsx)("pre", {
            children: (0, Oq.jsx)("code", {
              children: qq.code
            })
          }, Eq);
        case "table":
          return (0, Oq.jsxs)("table", {
            children: [(0, Oq.jsx)("thead", {
              children: (0, Oq.jsx)("tr", {
                children: qq.header.map(((qq, Eq) => (0, Oq.jsx)("th", {
                  children: Aq(qq)
                }, Eq)))
              })
            }), (0, Oq.jsx)("tbody", {
              children: qq.rows.map(((qq, Eq) => (0, Oq.jsx)("tr", {
                children: qq.map(((qq, Eq) => (0, Oq.jsx)("td", {
                  children: Aq(qq)
                }, Eq)))
              }, Eq)))
            })]
          }, Eq);
        case "rule":
          return (0, Oq.jsx)("hr", {}, Eq)
      }
    }

    function Bq(qq) {
      let {
        markdown: Eq
      } = qq, gq = 0;
      return (0, Oq.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, lq.A)(Eq).map(((qq, Eq) => {
          if ("list" !== qq.kind || !qq.ordered) return gq = 0, uq(qq, Eq);
          const lq = gq + 1;
          return gq += qq.items.length, (0, Oq.jsx)(Yq.Fragment, {
            children: cq(qq.items, !0, lq)
          }, Eq)
        }))
      })
    }
  },
  6357: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Hq,
      i: () => oq,
      g: () => Qq,
      k: () => aq
    });
    var Yq = gq(1792),
      lq = gq(6317),
      Oq = gq(4701);
    const mq = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function xq(qq) {
      return (0, Oq.d)(qq, mq, (Eq => !/^my/i.test(Eq[0]) || !/follow $/i.test(qq.slice(0, Eq.index)))).length > 0
    }
    const Aq = /\byou(?:r|'re|'ll)?\b/i,
      cq = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      uq = 2;

    function Bq(qq) {
      return function(qq) {
        const Eq = [];
        let gq = !1;
        for (const Yq of qq.split("\n")) {
          if (/^\s*(```|~~~)/.test(Yq)) {
            gq = !gq;
            continue
          }
          if (gq || /^\s*>/.test(Yq)) continue;
          const qq = Yq.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Eq.push(...(0, lq.v)(qq))
        }
        return Eq
      }(qq).filter((qq => xq(qq) || cq.test(qq) && !Aq.test(qq)))
    }
    const Wq = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Nq = [{
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

    function aq(qq) {
      const Eq = Nq.findIndex((Eq => Eq.name === qq));
      return -1 === Eq ? Nq.length : Eq
    }
    const Vq = 2500,
      dq = 12e4;
    class jq extends Error {
      constructor(qq) {
        super(`Studio AI chat ${qq}`), this.reason = qq
      }
    }

    function Hq(qq, Eq) {
      const gq = new AbortController,
        Yq = () => {
          gq.abort()
        },
        lq = setTimeout(Yq, qq);
      return null !== Eq && void 0 !== Eq && Eq.aborted && Yq(), null === Eq || void 0 === Eq || Eq.addEventListener("abort", Yq, {
        once: !0
      }), {
        signal: gq.signal,
        clear: () => {
          clearTimeout(lq), null === Eq || void 0 === Eq || Eq.removeEventListener("abort", Yq)
        }
      }
    }

    function oq(qq, Eq, gq) {
      return new Promise(((lq, Oq) => {
        const mq = new AbortController,
          xq = () => {
            mq.abort(), Oq((0, Yq.e)(gq))
          };
        if (null !== gq && void 0 !== gq && gq.aborted) return void xq();
        null === gq || void 0 === gq || gq.addEventListener("abort", xq, {
          once: !0
        });
        const Aq = Nq.map((() => !1));
        let cq = null;
        const uq = Nq.map((() => !1)),
          Bq = Nq.map((() => !1));
        Nq.forEach(((Yq, Wq) => {
          const aq = Hq(dq, mq.signal);
          yq(Yq, [{
            role: "user",
            content: qq
          }], aq.signal).then((qq => {
            mq.signal.aborted || ("busy" === qq || "failed" === qq ? (uq[Wq] = "busy" === qq, Bq[Wq] = !0) : null !== qq && (null === cq || Wq < cq.rank) && (cq = {
              rank: Wq,
              answer: {
                text: qq.text,
                model: Yq.name
              }
            }, Eq(cq.answer)))
          }), (qq => {
            mq.signal.aborted || (Bq[Wq] = !0, console.warn(`Studio AI: ${Yq.name} couldn't be reached`, qq))
          })).finally((() => {
            aq.clear(), Aq[Wq] = !0, mq.signal.aborted || (() => {
              var qq, Eq;
              const Yq = null !== (qq = null === (Eq = cq) || void 0 === Eq ? void 0 : Eq.rank) && void 0 !== qq ? qq : Nq.length;
              Aq.slice(0, Yq).includes(!1) || (null === gq || void 0 === gq || gq.removeEventListener("abort", xq), mq.abort(), null !== cq ? lq({
                ...cq.answer,
                isFinal: !Bq.slice(0, cq.rank).includes(!0)
              }) : Oq(new jq(uq.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((qq => {
            console.error("Studio AI: showing an answer failed", qq)
          }))
        }))
      }))
    }

    function Pq(qq) {
      var Eq, gq;
      return "length" === (null === qq || void 0 === qq || null === (Eq = qq.choices) || void 0 === Eq || null === (gq = Eq[0]) || void 0 === gq ? void 0 : gq.finish_reason)
    }
    async function Qq(qq, Eq, gq) {
      const Yq = Nq.find((Eq => Eq.name === qq));
      if (void 0 === Yq) return "failed";
      const lq = Hq(dq, gq);
      try {
        const qq = await yq(Yq, Eq, lq.signal);
        return null !== qq && "object" === typeof qq ? qq.isCutOff ? (console.warn(`Studio AI: ${Yq.name}'s answer was cut off at the token limit`), null) : {
          text: qq.text
        } : qq
      } finally {
        lq.clear()
      }
    }
    async function yq(qq, Eq, gq) {
      const Yq = await fetch(Wq, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: qq.name,
          messages: Eq,
          max_tokens: Vq,
          temperature: qq.temperature,
          reasoning_effort: qq.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: gq
      });
      if (429 === Yq.status) return "busy";
      if (!Yq.ok) return console.warn(`Studio AI: ${qq.name} answered ${Yq.status}`), "failed";
      const lq = await Yq.json().catch((() => null)),
        Oq = function(qq) {
          var Eq, gq, Yq;
          const lq = null === qq || void 0 === qq || null === (Eq = qq.choices) || void 0 === Eq || null === (gq = Eq[0]) || void 0 === gq || null === (Yq = gq.message) || void 0 === Yq ? void 0 : Yq.content;
          if ("string" !== typeof lq) return null;
          const Oq = lq.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Oq ? null : Oq
        }(lq);
      return null !== Oq && function(qq) {
        const Eq = Bq(qq);
        return Eq.length >= uq || Eq.some((qq => xq(qq)))
      }(Oq) ? (console.warn(`Studio AI: ${qq.name} thought out loud instead of answering`), "failed") : null === Oq ? null : {
        text: Oq,
        isCutOff: Pq(lq)
      }
    }
  },
  6317: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => Pq,
      D: () => yq,
      H: () => dq,
      J: () => oq,
      N: () => Qq,
      O: () => Hq,
      P: () => Bq,
      Q: () => cq,
      T: () => Nq,
      e: () => aq,
      h: () => xq,
      l: () => mq,
      p: () => Vq,
      t: () => Wq,
      v: () => uq,
      w: () => Oq,
      y: () => lq
    });
    var Yq = gq(4701);
    const lq = 2e3,
      Oq = 2e4;

    function mq(qq) {
      return qq.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function xq(qq) {
      return qq.replace(/\$/g, "\\$")
    }
    const Aq = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function cq(qq, Eq) {
      Aq.lastIndex = Eq;
      const gq = Aq.exec(qq);
      return gq.index + gq[0].length
    }

    function uq(qq) {
      return (0, Yq.x)(qq, /\s+/g, (0, Yq.s)(".!?")).flatMap((qq => qq.split("\n")))
    }

    function Bq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq;
      const Yq = [...qq.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((qq => qq.index)),
        lq = Yq.filter((qq => qq < Eq)),
        Oq = Yq.find((qq => qq >= gq));
      return [0 === lq.length ? 0 : lq.at(-1) + 1, void 0 === Oq ? qq.length : Oq + 1]
    }

    function Wq(qq, Eq) {
      const gq = qq.charCodeAt(Eq - 1);
      return qq.slice(0, Eq > 0 && Eq < qq.length && gq >= 55296 && gq <= 56319 ? Eq - 1 : Eq)
    }

    function Nq(qq, Eq) {
      return `${Eq}${qq.replace(/\\/g,"\\\\").split(Eq).join(`\\${Eq}`)}${Eq}`
    }

    function aq(qq) {
      return qq.charAt(0).toUpperCase() + qq.slice(1)
    }

    function Vq(qq) {
      return Math.round(qq).toLocaleString("en-US")
    }

    function dq(qq) {
      return qq.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((qq => "" !== qq))
    }
    const jq = 3;

    function Hq(qq, Eq) {
      return dq(qq).filter((qq => qq.length >= jq && !/\d/.test(qq))).map((qq => `${qq} ${Eq}`))
    }

    function oq(qq) {
      return qq.split(/[\s:_]+/).filter((qq => "" !== qq)).map(mq).join("[`:_\\s]+")
    }

    function Pq(qq) {
      return dq(qq.split(".").pop())
    }

    function Qq(qq) {
      return qq.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function yq(qq) {
      let Eq = null;
      return () => {
        const gq = Eq ??= qq();
        return gq.catch((() => {
          Eq === gq && (Eq = null)
        })), gq
      }
    }
  },
  4701: (qq, Eq, gq) => {
    function Yq(qq) {
      return {
        notAfter: qq
      }
    }
    gq.d(Eq, {
      b: () => Aq,
      d: () => cq,
      f: () => xq,
      i: () => Yq,
      l: () => lq,
      p: () => Oq,
      s: () => mq,
      t: () => uq,
      x: () => Bq
    });
    const lq = Yq("\\w$."),
      Oq = Yq("\\w.,");

    function mq(qq) {
      return Eq => Aq(Eq, qq)
    }

    function xq(qq) {
      return Eq => !qq.test(Eq.input.slice(0, Eq.index))
    }

    function Aq(qq, Eq) {
      return qq.index > 0 && new RegExp(`[${Eq}]`).test(qq.input[qq.index - 1])
    }

    function cq(qq, Eq, gq) {
      return function(qq) {
        return void 0 !== qq && "function" !== typeof qq
      }(gq) ? function(qq, Eq, gq) {
        const Yq = Eq.flags.replace(/[gy]/g, ""),
          lq = new RegExp(`[^${gq}](?:${Eq.source})`, `${Yq}g`),
          Oq = [],
          mq = gq => {
            const Yq = gq.index + gq[0].length;
            return ("" === gq[0] ? Wq(qq, Eq, Yq) : Yq) - 1
          },
          xq = new RegExp(`(?:${Eq.source})`, `${Yq}y`).exec(qq);
        if (xq) {
          if (Oq.push(xq), !Eq.global) return Oq;
          lq.lastIndex = mq(xq)
        }
        for (let Aq = lq.exec(qq); Aq; Aq = lq.exec(qq)) {
          const gq = Wq(qq, Eq, Aq.index) - Aq.index;
          if (Aq[0] = Aq[0].slice(gq), Aq.index += gq, Oq.push(Aq), !Eq.global) break;
          lq.lastIndex = mq(Aq)
        }
        return Oq
      }(qq, Eq, gq.notAfter) : function(qq, Eq, gq) {
        const Yq = new RegExp(Eq.source, `${Eq.flags.replace(/[gy]/g,"")}g`),
          lq = [];
        for (let Oq = Yq.exec(qq); Oq; Oq = Yq.exec(qq))
          if (!gq || gq(Oq)) {
            if (lq.push(Oq), !Eq.global) break;
            "" === Oq[0] && (Yq.lastIndex = Wq(qq, Eq, Yq.lastIndex))
          } else Yq.lastIndex = Wq(qq, Eq, Oq.index);
        return lq
      }(qq, Eq, gq)
    }

    function uq(qq, Eq, gq, Yq) {
      let lq = "",
        Oq = 0;
      for (const mq of cq(qq, Eq, gq)) lq += qq.slice(Oq, mq.index) + Yq(mq), Oq = mq.index + mq[0].length;
      return lq + qq.slice(Oq)
    }

    function Bq(qq, Eq, gq) {
      const Yq = [];
      let lq = 0;
      for (const Oq of cq(qq, Eq, gq)) Yq.push(qq.slice(lq, Oq.index)), lq = Oq.index + Oq[0].length;
      return [...Yq, qq.slice(lq)]
    }

    function Wq(qq, Eq, gq) {
      var Yq;
      return gq + (Eq.unicode && (null !== (Yq = qq.codePointAt(gq)) && void 0 !== Yq ? Yq : 0) > 65535 ? 2 : 1)
    }
  },
  6366: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);