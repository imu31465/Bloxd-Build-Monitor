export const id = 80;
export const ids = [80];
export const modules = {
  4739: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => Zk,
      d: () => Xk,
      h: () => yk,
      l: () => Hk,
      n: () => wk,
      p: () => lk,
      s: () => Tk,
      t: () => ik,
      u: () => ek,
      w: () => jk
    });
    const Xk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Tk(kk) {
      try {
        return decodeURIComponent(kk.slice(1))
      } catch {
        return kk.slice(1)
      }
    }

    function ik(kk) {
      return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const yk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Xk.source}`, "g");

    function lk(kk, Fk) {
      return 2 === kk.length ? Fk.replace(/^ (.*) $/, "$1") : Fk
    }

    function ak(kk) {
      return "" === kk.trim()
    }

    function qk(kk) {
      const Fk = [];
      for (const Ik of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Fk.length > 0 && Fk[Fk.length - 1].endsWith("\\") ? Fk[Fk.length - 1] += `|${Ik}` : Fk.push(Ik);
      return Fk.map((kk => kk.trim().replaceAll("\\|", "|")))
    }
    const Lk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function tk(kk) {
      const Fk = [],
        Ik = [{
          indent: -1,
          items: Fk
        }];
      let Xk = null;
      for (const Tk of kk) {
        const kk = Tk.match(Lk);
        if (!kk) {
          Xk && (Xk.text += ` ${Tk.trim()}`);
          continue
        }
        const Fk = kk[1].replace(/\t/g, "  ").length;
        for (; Fk <= Ik[Ik.length - 1].indent;) Ik.pop();
        Xk = {
          text: kk[3].trim(),
          children: []
        }, Ik[Ik.length - 1].items.push(Xk), Ik.push({
          indent: Fk,
          items: Xk.children
        })
      }
      return Fk
    }

    function Zk(kk) {
      const Fk = kk.replace(/\r\n/g, "\n").split("\n"),
        Ik = [];
      let Xk = 0;
      for (; Xk < Fk.length;) {
        const kk = Fk[Xk];
        if (ak(kk)) {
          Xk++;
          continue
        }
        const Tk = kk.match(/^\s*```\s*(\w*)\s*$/);
        if (Tk) {
          const kk = [];
          for (Xk++; Xk < Fk.length && !/^\s*```\s*$/.test(Fk[Xk]);) kk.push(Fk[Xk]), Xk++;
          Xk++, Ik.push({
            kind: "code",
            lang: Tk[1] || "text",
            code: kk.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const yk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (yk) {
          const kk = yk[2].trim();
          Ik.push({
            kind: "heading",
            level: yk[1].length,
            text: kk,
            anchor: ik(kk)
          }), Xk++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
          Ik.push({
            kind: "rule"
          }), Xk++;
          continue
        }
        if (kk.trim().startsWith("|") && Xk + 1 < Fk.length && /^\s*\|[\s:|-]+\|\s*$/.test(Fk[Xk + 1])) {
          const Tk = qk(kk),
            ik = [];
          for (Xk += 2; Xk < Fk.length && Fk[Xk].trim().startsWith("|");) ik.push(qk(Fk[Xk])), Xk++;
          Ik.push({
            kind: "table",
            header: Tk,
            rows: ik
          });
          continue
        }
        if (kk.startsWith(">")) {
          const kk = [];
          for (; Xk < Fk.length && Fk[Xk].startsWith(">");) kk.push(Fk[Xk].replace(/^>\s?/, "")), Xk++;
          Ik.push({
            kind: "quote",
            blocks: Zk(kk.join("\n"))
          });
          continue
        }
        if (Lk.test(kk)) {
          const Tk = [],
            ik = /^\s*\d+\./.test(kk);
          for (; Xk < Fk.length && !ak(Fk[Xk]) && (Lk.test(Fk[Xk]) || /^\s+\S/.test(Fk[Xk]));) Tk.push(Fk[Xk]), Xk++;
          Ik.push({
            kind: "list",
            ordered: ik,
            items: tk(Tk)
          });
          continue
        }
        const lk = [];
        for (; Xk < Fk.length && !ak(Fk[Xk]) && !/^\s*```/.test(Fk[Xk]) && !/^#{1,6}\s/.test(Fk[Xk]) && !Fk[Xk].startsWith(">") && !Lk.test(Fk[Xk]) && (!Fk[Xk].trim().startsWith("|") || 0 !== lk.length);) lk.push(Fk[Xk].trim()), Xk++;
        0 === lk.length && (lk.push(Fk[Xk].trim()), Xk++), Ik.push({
          kind: "paragraph",
          text: lk.join(" ")
        })
      }
      return Ik
    }

    function jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Ik = Zk(kk);
      let Xk = "";
      const Tk = [],
        ik = [],
        yk = new Map;
      for (const qk of Ik) {
        if ("heading" === qk.kind) {
          var lk;
          const kk = (null !== (lk = yk.get(qk.anchor)) && void 0 !== lk ? lk : 0) + 1;
          yk.set(qk.anchor, kk), kk > 1 && (qk.anchor = `${qk.anchor}-${kk}`)
        }
        if ("heading" === qk.kind && 1 === qk.level && !Xk) {
          Xk = qk.text;
          continue
        }
        if ("heading" === qk.kind && qk.level <= Fk) {
          ik.push({
            heading: qk,
            blocks: []
          });
          continue
        }
        const kk = ik.at(-1);
        kk ? kk.blocks.push(qk) : Tk.push(qk)
      }
      const ak = kk => {
        for (;
          "rule" === (null === (Fk = kk.at(-1)) || void 0 === Fk ? void 0 : Fk.kind);) {
          var Fk;
          kk.pop()
        }
      };
      ak(Tk);
      for (const qk of ik) ak(qk.blocks);
      return {
        title: Xk,
        intro: Tk,
        sections: ik
      }
    }

    function ek(kk) {
      return [{
        heading: null,
        blocks: kk.intro
      }, ...kk.sections.map((kk => ({
        heading: kk.heading,
        blocks: kk.blocks
      })))]
    }

    function wk(kk) {
      return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? wk(kk.blocks) : []))
    }

    function Hk(kk) {
      switch (kk.kind) {
        case "heading":
        case "paragraph":
          return kk.text;
        case "code":
          return kk.code;
        case "table":
          return [kk.header, ...kk.rows].map((kk => kk.join(" "))).join(" ");
        case "list": {
          const Fk = kk => kk.map((kk => `${kk.text} ${Fk(kk.children)}`)).join(" ");
          return Fk(kk.items)
        }
        case "quote":
          return kk.blocks.map(Hk).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6491: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk,
      f: () => yk,
      j: () => lk
    });
    Ik(6489);
    var Xk = Ik(58),
      Tk = Ik(4739),
      ik = Ik(1096);
    const yk = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function lk(kk, Fk) {
      return kk === Fk ? kk : `${kk} (${Fk})`
    }

    function ak(kk) {
      const Fk = [];
      let Ik = 0;
      for (const Xk of kk.matchAll(yk)) {
        Xk.index > Ik && Fk.push(kk.slice(Ik, Xk.index));
        const [, Tk, yk, ak, qk, Lk, tk] = Xk;
        void 0 !== Tk ? Fk.push(lk(Tk, yk)) : void 0 !== ak || void 0 !== qk ? Fk.push((0, ik.jsx)("strong", {
          children: null !== ak && void 0 !== ak ? ak : qk
        }, Xk.index)) : void 0 !== Lk ? Fk.push((0, ik.jsx)("em", {
          children: Lk
        }, Xk.index)) : Fk.push((0, ik.jsx)("code", {
          children: tk
        }, Xk.index)), Ik = Xk.index + Xk[0].length
      }
      return Ik < kk.length && Fk.push(kk.slice(Ik)), Fk
    }

    function qk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Xk = kk.map(((kk, Fk) => (0, ik.jsxs)("li", {
        children: [ak(kk.text), kk.children.length > 0 && qk(kk.children, !1)]
      }, Fk)));
      return Fk ? (0, ik.jsx)("ol", {
        start: Ik,
        children: Xk
      }) : (0, ik.jsx)("ul", {
        children: Xk
      })
    }

    function Lk(kk, Fk) {
      switch (kk.kind) {
        case "heading":
          return kk.level <= 2 ? (0, ik.jsx)("h3", {
            children: ak(kk.text)
          }, Fk) : (0, ik.jsx)("h4", {
            children: ak(kk.text)
          }, Fk);
        case "paragraph":
          return (0, ik.jsx)("p", {
            children: ak(kk.text)
          }, Fk);
        case "list":
          return (0, ik.jsx)(Xk.Fragment, {
            children: qk(kk.items, kk.ordered)
          }, Fk);
        case "quote":
          return (0, ik.jsx)("blockquote", {
            children: kk.blocks.map(((kk, Fk) => Lk(kk, Fk)))
          }, Fk);
        case "code":
          return (0, ik.jsx)("pre", {
            children: (0, ik.jsx)("code", {
              children: kk.code
            })
          }, Fk);
        case "table":
          return (0, ik.jsxs)("table", {
            children: [(0, ik.jsx)("thead", {
              children: (0, ik.jsx)("tr", {
                children: kk.header.map(((kk, Fk) => (0, ik.jsx)("th", {
                  children: ak(kk)
                }, Fk)))
              })
            }), (0, ik.jsx)("tbody", {
              children: kk.rows.map(((kk, Fk) => (0, ik.jsx)("tr", {
                children: kk.map(((kk, Fk) => (0, ik.jsx)("td", {
                  children: ak(kk)
                }, Fk)))
              }, Fk)))
            })]
          }, Fk);
        case "rule":
          return (0, ik.jsx)("hr", {}, Fk)
      }
    }

    function tk(kk) {
      let {
        markdown: Fk
      } = kk, Ik = 0;
      return (0, ik.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Tk.A)(Fk).map(((kk, Fk) => {
          if ("list" !== kk.kind || !kk.ordered) return Ik = 0, Lk(kk, Fk);
          const Tk = Ik + 1;
          return Ik += kk.items.length, (0, ik.jsx)(Xk.Fragment, {
            children: qk(kk.items, !0, Tk)
          }, Fk)
        }))
      })
    }
  },
  6486: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => xk,
      h: () => Pk,
      d: () => Qk,
      k: () => ek
    });
    var Xk = Ik(1199),
      Tk = Ik(6457),
      ik = Ik(4866);
    const yk = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function lk(kk) {
      return (0, ik.e)(kk, yk, (Fk => !/^my/i.test(Fk[0]) || !/follow $/i.test(kk.slice(0, Fk.index)))).length > 0
    }
    const ak = /\byou(?:r|'re|'ll)?\b/i,
      qk = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Lk = 2;

    function tk(kk) {
      return function(kk) {
        const Fk = [];
        let Ik = !1;
        for (const Xk of kk.split("\n")) {
          if (/^\s*(```|~~~)/.test(Xk)) {
            Ik = !Ik;
            continue
          }
          if (Ik || /^\s*>/.test(Xk)) continue;
          const kk = Xk.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Fk.push(...(0, Tk.n)(kk))
        }
        return Fk
      }(kk).filter((kk => lk(kk) || qk.test(kk) && !ak.test(kk)))
    }
    const Zk = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      jk = [{
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

    function ek(kk) {
      const Fk = jk.findIndex((Fk => Fk.name === kk));
      return -1 === Fk ? jk.length : Fk
    }
    const wk = 2500,
      Hk = 12e4;
    class Jk extends Error {
      constructor(kk) {
        super(`Studio AI chat ${kk}`), this.reason = kk
      }
    }

    function xk(kk, Fk) {
      const Ik = new AbortController,
        Xk = () => {
          Ik.abort()
        },
        Tk = setTimeout(Xk, kk);
      return null !== Fk && void 0 !== Fk && Fk.aborted && Xk(), null === Fk || void 0 === Fk || Fk.addEventListener("abort", Xk, {
        once: !0
      }), {
        signal: Ik.signal,
        clear: () => {
          clearTimeout(Tk), null === Fk || void 0 === Fk || Fk.removeEventListener("abort", Xk)
        }
      }
    }

    function Pk(kk, Fk, Ik) {
      return new Promise(((Tk, ik) => {
        const yk = new AbortController,
          lk = () => {
            yk.abort(), ik((0, Xk.e)(Ik))
          };
        if (null !== Ik && void 0 !== Ik && Ik.aborted) return void lk();
        null === Ik || void 0 === Ik || Ik.addEventListener("abort", lk, {
          once: !0
        });
        const ak = jk.map((() => !1));
        let qk = null;
        const Lk = jk.map((() => !1)),
          tk = jk.map((() => !1));
        jk.forEach(((Xk, Zk) => {
          const ek = xk(Hk, yk.signal);
          sk(Xk, [{
            role: "user",
            content: kk
          }], ek.signal).then((kk => {
            yk.signal.aborted || ("busy" === kk || "failed" === kk ? (Lk[Zk] = "busy" === kk, tk[Zk] = !0) : null !== kk && (null === qk || Zk < qk.rank) && (qk = {
              rank: Zk,
              answer: {
                text: kk.text,
                model: Xk.name
              }
            }, Fk(qk.answer)))
          }), (kk => {
            yk.signal.aborted || (tk[Zk] = !0, console.warn(`Studio AI: ${Xk.name} couldn't be reached`, kk))
          })).finally((() => {
            ek.clear(), ak[Zk] = !0, yk.signal.aborted || (() => {
              var kk, Fk;
              const Xk = null !== (kk = null === (Fk = qk) || void 0 === Fk ? void 0 : Fk.rank) && void 0 !== kk ? kk : jk.length;
              ak.slice(0, Xk).includes(!1) || (null === Ik || void 0 === Ik || Ik.removeEventListener("abort", lk), yk.abort(), null !== qk ? Tk({
                ...qk.answer,
                isFinal: !tk.slice(0, qk.rank).includes(!0)
              }) : ik(new Jk(Lk.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((kk => {
            console.error("Studio AI: showing an answer failed", kk)
          }))
        }))
      }))
    }

    function Kk(kk) {
      var Fk, Ik;
      return "length" === (null === kk || void 0 === kk || null === (Fk = kk.choices) || void 0 === Fk || null === (Ik = Fk[0]) || void 0 === Ik ? void 0 : Ik.finish_reason)
    }
    async function Qk(kk, Fk, Ik) {
      const Xk = jk.find((Fk => Fk.name === kk));
      if (void 0 === Xk) return "failed";
      const Tk = xk(Hk, Ik);
      try {
        const kk = await sk(Xk, Fk, Tk.signal);
        return null !== kk && "object" === typeof kk ? kk.isCutOff ? (console.warn(`Studio AI: ${Xk.name}'s answer was cut off at the token limit`), null) : {
          text: kk.text
        } : kk
      } finally {
        Tk.clear()
      }
    }
    async function sk(kk, Fk, Ik) {
      const Xk = await fetch(Zk, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: kk.name,
          messages: Fk,
          max_tokens: wk,
          temperature: kk.temperature,
          reasoning_effort: kk.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Ik
      });
      if (429 === Xk.status) return "busy";
      if (!Xk.ok) return console.warn(`Studio AI: ${kk.name} answered ${Xk.status}`), "failed";
      const Tk = await Xk.json().catch((() => null)),
        ik = function(kk) {
          var Fk, Ik, Xk;
          const Tk = null === kk || void 0 === kk || null === (Fk = kk.choices) || void 0 === Fk || null === (Ik = Fk[0]) || void 0 === Ik || null === (Xk = Ik.message) || void 0 === Xk ? void 0 : Xk.content;
          if ("string" !== typeof Tk) return null;
          const ik = Tk.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === ik ? null : ik
        }(Tk);
      return null !== ik && function(kk) {
        const Fk = tk(kk);
        return Fk.length >= Lk || Fk.some((kk => lk(kk)))
      }(ik) ? (console.warn(`Studio AI: ${kk.name} thought out loud instead of answering`), "failed") : null === ik ? null : {
        text: ik,
        isCutOff: Kk(Tk)
      }
    }
  },
  6457: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => Hk,
      D: () => Pk,
      G: () => Qk,
      I: () => xk,
      L: () => tk,
      P: () => qk,
      S: () => jk,
      b: () => ek,
      d: () => lk,
      g: () => yk,
      k: () => wk,
      l: () => Zk,
      n: () => Lk,
      p: () => ik,
      t: () => Tk,
      u: () => Kk,
      y: () => sk
    });
    var Xk = Ik(4866);
    const Tk = 2e3,
      ik = 2e4;

    function yk(kk) {
      return kk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function lk(kk) {
      return kk.replace(/\$/g, "\\$")
    }
    const ak = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function qk(kk, Fk) {
      ak.lastIndex = Fk;
      const Ik = ak.exec(kk);
      return Ik.index + Ik[0].length
    }

    function Lk(kk) {
      return (0, Xk.u)(kk, /\s+/g, (0, Xk.o)(".!?")).flatMap((kk => kk.split("\n")))
    }

    function tk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk;
      const Xk = [...kk.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((kk => kk.index)),
        Tk = Xk.filter((kk => kk < Fk)),
        ik = Xk.find((kk => kk >= Ik));
      return [0 === Tk.length ? 0 : Tk.at(-1) + 1, void 0 === ik ? kk.length : ik + 1]
    }

    function Zk(kk, Fk) {
      const Ik = kk.charCodeAt(Fk - 1);
      return kk.slice(0, Fk > 0 && Fk < kk.length && Ik >= 55296 && Ik <= 56319 ? Fk - 1 : Fk)
    }

    function jk(kk, Fk) {
      return `${Fk}${kk.replace(/\\/g,"\\\\").split(Fk).join(`\\${Fk}`)}${Fk}`
    }

    function ek(kk) {
      return kk.charAt(0).toUpperCase() + kk.slice(1)
    }

    function wk(kk) {
      return Math.round(kk).toLocaleString("en-US")
    }

    function Hk(kk) {
      return kk.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((kk => "" !== kk))
    }
    const Jk = 3;

    function xk(kk, Fk) {
      return Hk(kk).filter((kk => kk.length >= Jk && !/\d/.test(kk))).map((kk => `${kk} ${Fk}`))
    }

    function Pk(kk) {
      return kk.split(/[\s:_]+/).filter((kk => "" !== kk)).map(yk).join("[`:_\\s]+")
    }

    function Kk(kk) {
      return Hk(kk.split(".").pop())
    }

    function Qk(kk) {
      return kk.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function sk(kk) {
      let Fk = null;
      return () => {
        const Ik = Fk ??= kk();
        return Ik.catch((() => {
          Fk === Ik && (Fk = null)
        })), Ik
      }
    }
  },
  4866: (kk, Fk, Ik) => {
    function Xk(kk) {
      return {
        notAfter: kk
      }
    }
    Ik.d(Fk, {
      b: () => ak,
      e: () => qk,
      g: () => lk,
      j: () => Xk,
      l: () => Tk,
      m: () => ik,
      o: () => yk,
      s: () => Lk,
      u: () => tk
    });
    const Tk = Xk("\\w$."),
      ik = Xk("\\w.,");

    function yk(kk) {
      return Fk => ak(Fk, kk)
    }

    function lk(kk) {
      return Fk => !kk.test(Fk.input.slice(0, Fk.index))
    }

    function ak(kk, Fk) {
      return kk.index > 0 && new RegExp(`[${Fk}]`).test(kk.input[kk.index - 1])
    }

    function qk(kk, Fk, Ik) {
      return function(kk) {
        return void 0 !== kk && "function" !== typeof kk
      }(Ik) ? function(kk, Fk, Ik) {
        const Xk = Fk.flags.replace(/[gy]/g, ""),
          Tk = new RegExp(`[^${Ik}](?:${Fk.source})`, `${Xk}g`),
          ik = [],
          yk = Ik => {
            const Xk = Ik.index + Ik[0].length;
            return ("" === Ik[0] ? Zk(kk, Fk, Xk) : Xk) - 1
          },
          lk = new RegExp(`(?:${Fk.source})`, `${Xk}y`).exec(kk);
        if (lk) {
          if (ik.push(lk), !Fk.global) return ik;
          Tk.lastIndex = yk(lk)
        }
        for (let ak = Tk.exec(kk); ak; ak = Tk.exec(kk)) {
          const Ik = Zk(kk, Fk, ak.index) - ak.index;
          if (ak[0] = ak[0].slice(Ik), ak.index += Ik, ik.push(ak), !Fk.global) break;
          Tk.lastIndex = yk(ak)
        }
        return ik
      }(kk, Fk, Ik.notAfter) : function(kk, Fk, Ik) {
        const Xk = new RegExp(Fk.source, `${Fk.flags.replace(/[gy]/g,"")}g`),
          Tk = [];
        for (let ik = Xk.exec(kk); ik; ik = Xk.exec(kk))
          if (!Ik || Ik(ik)) {
            if (Tk.push(ik), !Fk.global) break;
            "" === ik[0] && (Xk.lastIndex = Zk(kk, Fk, Xk.lastIndex))
          } else Xk.lastIndex = Zk(kk, Fk, ik.index);
        return Tk
      }(kk, Fk, Ik)
    }

    function Lk(kk, Fk, Ik, Xk) {
      let Tk = "",
        ik = 0;
      for (const yk of qk(kk, Fk, Ik)) Tk += kk.slice(ik, yk.index) + Xk(yk), ik = yk.index + yk[0].length;
      return Tk + kk.slice(ik)
    }

    function tk(kk, Fk, Ik) {
      const Xk = [];
      let Tk = 0;
      for (const ik of qk(kk, Fk, Ik)) Xk.push(kk.slice(Tk, ik.index)), Tk = ik.index + ik[0].length;
      return [...Xk, kk.slice(Tk)]
    }

    function Zk(kk, Fk, Ik) {
      var Xk;
      return Ik + (Fk.unicode && (null !== (Xk = kk.codePointAt(Ik)) && void 0 !== Xk ? Xk : 0) > 65535 ? 2 : 1)
    }
  },
  6489: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);