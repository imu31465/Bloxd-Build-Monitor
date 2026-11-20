export const id = 77;
export const ids = [77];
export const modules = {
  4460: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      d: () => Xk,
      e: () => fk,
      g: () => yk,
      h: () => bk,
      k: () => tk,
      m: () => ak,
      q: () => ek,
      r: () => Ak,
      s: () => Jk
    });
    const Rk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function tk(kk) {
      try {
        return decodeURIComponent(kk.slice(1))
      } catch {
        return kk.slice(1)
      }
    }

    function ak(kk) {
      return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Xk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Rk.source}`, "g");

    function bk(kk, Fk) {
      return 2 === kk.length ? Fk.replace(/^ (.*) $/, "$1") : Fk
    }

    function wk(kk) {
      return "" === kk.trim()
    }

    function dk(kk) {
      const Fk = [];
      for (const Bk of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Fk.length > 0 && Fk[Fk.length - 1].endsWith("\\") ? Fk[Fk.length - 1] += `|${Bk}` : Fk.push(Bk);
      return Fk.map((kk => kk.trim().replaceAll("\\|", "|")))
    }
    const sk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Vk(kk) {
      const Fk = [],
        Bk = [{
          indent: -1,
          items: Fk
        }];
      let Rk = null;
      for (const tk of kk) {
        const kk = tk.match(sk);
        if (!kk) {
          Rk && (Rk.text += ` ${tk.trim()}`);
          continue
        }
        const Fk = kk[1].replace(/\t/g, "  ").length;
        for (; Fk <= Bk[Bk.length - 1].indent;) Bk.pop();
        Rk = {
          text: kk[3].trim(),
          children: []
        }, Bk[Bk.length - 1].items.push(Rk), Bk.push({
          indent: Fk,
          items: Rk.children
        })
      }
      return Fk
    }

    function Jk(kk) {
      const Fk = kk.replace(/\r\n/g, "\n").split("\n"),
        Bk = [];
      let Rk = 0;
      for (; Rk < Fk.length;) {
        const kk = Fk[Rk];
        if (wk(kk)) {
          Rk++;
          continue
        }
        const tk = kk.match(/^\s*```\s*(\w*)\s*$/);
        if (tk) {
          const kk = [];
          for (Rk++; Rk < Fk.length && !/^\s*```\s*$/.test(Fk[Rk]);) kk.push(Fk[Rk]), Rk++;
          Rk++, Bk.push({
            kind: "code",
            lang: tk[1] || "text",
            code: kk.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Xk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Xk) {
          const kk = Xk[2].trim();
          Bk.push({
            kind: "heading",
            level: Xk[1].length,
            text: kk,
            anchor: ak(kk)
          }), Rk++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
          Bk.push({
            kind: "rule"
          }), Rk++;
          continue
        }
        if (kk.trim().startsWith("|") && Rk + 1 < Fk.length && /^\s*\|[\s:|-]+\|\s*$/.test(Fk[Rk + 1])) {
          const tk = dk(kk),
            ak = [];
          for (Rk += 2; Rk < Fk.length && Fk[Rk].trim().startsWith("|");) ak.push(dk(Fk[Rk])), Rk++;
          Bk.push({
            kind: "table",
            header: tk,
            rows: ak
          });
          continue
        }
        if (kk.startsWith(">")) {
          const kk = [];
          for (; Rk < Fk.length && Fk[Rk].startsWith(">");) kk.push(Fk[Rk].replace(/^>\s?/, "")), Rk++;
          Bk.push({
            kind: "quote",
            blocks: Jk(kk.join("\n"))
          });
          continue
        }
        if (sk.test(kk)) {
          const tk = [],
            ak = /^\s*\d+\./.test(kk);
          for (; Rk < Fk.length && !wk(Fk[Rk]) && (sk.test(Fk[Rk]) || /^\s+\S/.test(Fk[Rk]));) tk.push(Fk[Rk]), Rk++;
          Bk.push({
            kind: "list",
            ordered: ak,
            items: Vk(tk)
          });
          continue
        }
        const bk = [];
        for (; Rk < Fk.length && !wk(Fk[Rk]) && !/^\s*```/.test(Fk[Rk]) && !/^#{1,6}\s/.test(Fk[Rk]) && !Fk[Rk].startsWith(">") && !sk.test(Fk[Rk]) && (!Fk[Rk].trim().startsWith("|") || 0 !== bk.length);) bk.push(Fk[Rk].trim()), Rk++;
        0 === bk.length && (bk.push(Fk[Rk].trim()), Rk++), Bk.push({
          kind: "paragraph",
          text: bk.join(" ")
        })
      }
      return Bk
    }

    function Ak(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Bk = Jk(kk);
      let Rk = "";
      const tk = [],
        ak = [],
        Xk = new Map;
      for (const dk of Bk) {
        if ("heading" === dk.kind) {
          var bk;
          const kk = (null !== (bk = Xk.get(dk.anchor)) && void 0 !== bk ? bk : 0) + 1;
          Xk.set(dk.anchor, kk), kk > 1 && (dk.anchor = `${dk.anchor}-${kk}`)
        }
        if ("heading" === dk.kind && 1 === dk.level && !Rk) {
          Rk = dk.text;
          continue
        }
        if ("heading" === dk.kind && dk.level <= Fk) {
          ak.push({
            heading: dk,
            blocks: []
          });
          continue
        }
        const kk = ak.at(-1);
        kk ? kk.blocks.push(dk) : tk.push(dk)
      }
      const wk = kk => {
        for (;
          "rule" === (null === (Fk = kk.at(-1)) || void 0 === Fk ? void 0 : Fk.kind);) {
          var Fk;
          kk.pop()
        }
      };
      wk(tk);
      for (const dk of ak) wk(dk.blocks);
      return {
        title: Rk,
        intro: tk,
        sections: ak
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

    function yk(kk) {
      return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? yk(kk.blocks) : []))
    }

    function fk(kk) {
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
          return kk.blocks.map(fk).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6193: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk,
      f: () => Xk,
      h: () => bk
    });
    Bk(6184);
    var Rk = Bk(61),
      tk = Bk(4460),
      ak = Bk(1069);
    const Xk = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function bk(kk, Fk) {
      return kk === Fk ? kk : `${kk} (${Fk})`
    }

    function wk(kk) {
      const Fk = [];
      let Bk = 0;
      for (const Rk of kk.matchAll(Xk)) {
        Rk.index > Bk && Fk.push(kk.slice(Bk, Rk.index));
        const [, tk, Xk, wk, dk, sk, Vk] = Rk;
        void 0 !== tk ? Fk.push(bk(tk, Xk)) : void 0 !== wk || void 0 !== dk ? Fk.push((0, ak.jsx)("strong", {
          children: null !== wk && void 0 !== wk ? wk : dk
        }, Rk.index)) : void 0 !== sk ? Fk.push((0, ak.jsx)("em", {
          children: sk
        }, Rk.index)) : Fk.push((0, ak.jsx)("code", {
          children: Vk
        }, Rk.index)), Bk = Rk.index + Rk[0].length
      }
      return Bk < kk.length && Fk.push(kk.slice(Bk)), Fk
    }

    function dk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Rk = kk.map(((kk, Fk) => (0, ak.jsxs)("li", {
        children: [wk(kk.text), kk.children.length > 0 && dk(kk.children, !1)]
      }, Fk)));
      return Fk ? (0, ak.jsx)("ol", {
        start: Bk,
        children: Rk
      }) : (0, ak.jsx)("ul", {
        children: Rk
      })
    }

    function sk(kk, Fk) {
      switch (kk.kind) {
        case "heading":
          return kk.level <= 2 ? (0, ak.jsx)("h3", {
            children: wk(kk.text)
          }, Fk) : (0, ak.jsx)("h4", {
            children: wk(kk.text)
          }, Fk);
        case "paragraph":
          return (0, ak.jsx)("p", {
            children: wk(kk.text)
          }, Fk);
        case "list":
          return (0, ak.jsx)(Rk.Fragment, {
            children: dk(kk.items, kk.ordered)
          }, Fk);
        case "quote":
          return (0, ak.jsx)("blockquote", {
            children: kk.blocks.map(((kk, Fk) => sk(kk, Fk)))
          }, Fk);
        case "code":
          return (0, ak.jsx)("pre", {
            children: (0, ak.jsx)("code", {
              children: kk.code
            })
          }, Fk);
        case "table":
          return (0, ak.jsxs)("table", {
            children: [(0, ak.jsx)("thead", {
              children: (0, ak.jsx)("tr", {
                children: kk.header.map(((kk, Fk) => (0, ak.jsx)("th", {
                  children: wk(kk)
                }, Fk)))
              })
            }), (0, ak.jsx)("tbody", {
              children: kk.rows.map(((kk, Fk) => (0, ak.jsx)("tr", {
                children: kk.map(((kk, Fk) => (0, ak.jsx)("td", {
                  children: wk(kk)
                }, Fk)))
              }, Fk)))
            })]
          }, Fk);
        case "rule":
          return (0, ak.jsx)("hr", {}, Fk)
      }
    }

    function Vk(kk) {
      let {
        markdown: Fk
      } = kk, Bk = 0;
      return (0, ak.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, tk.s)(Fk).map(((kk, Fk) => {
          if ("list" !== kk.kind || !kk.ordered) return Bk = 0, sk(kk, Fk);
          const tk = Bk + 1;
          return Bk += kk.items.length, (0, ak.jsx)(Rk.Fragment, {
            children: dk(kk.items, !0, tk)
          }, Fk)
        }))
      })
    }
  },
  6175: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Wk,
      i: () => vk,
      g: () => Yk,
      m: () => ek
    });
    var Rk = Bk(1733),
      tk = Bk(6137),
      ak = Bk(4583);
    const Xk = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function bk(kk) {
      return (0, ak.i)(kk, Xk, (Fk => !/^my/i.test(Fk[0]) || !/follow $/i.test(kk.slice(0, Fk.index)))).length > 0
    }
    const wk = /\byou(?:r|'re|'ll)?\b/i,
      dk = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      sk = 2;

    function Vk(kk) {
      return function(kk) {
        const Fk = [];
        let Bk = !1;
        for (const Rk of kk.split("\n")) {
          if (/^\s*(```|~~~)/.test(Rk)) {
            Bk = !Bk;
            continue
          }
          if (Bk || /^\s*>/.test(Rk)) continue;
          const kk = Rk.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Fk.push(...(0, tk.r)(kk))
        }
        return Fk
      }(kk).filter((kk => bk(kk) || dk.test(kk) && !wk.test(kk)))
    }
    const Jk = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Ak = [{
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
      const Fk = Ak.findIndex((Fk => Fk.name === kk));
      return -1 === Fk ? Ak.length : Fk
    }
    const yk = 2500,
      fk = 12e4;
    class mk extends Error {
      constructor(kk) {
        super(`Studio AI chat ${kk}`), this.reason = kk
      }
    }

    function Wk(kk, Fk) {
      const Bk = new AbortController,
        Rk = () => {
          Bk.abort()
        },
        tk = setTimeout(Rk, kk);
      return null !== Fk && void 0 !== Fk && Fk.aborted && Rk(), null === Fk || void 0 === Fk || Fk.addEventListener("abort", Rk, {
        once: !0
      }), {
        signal: Bk.signal,
        clear: () => {
          clearTimeout(tk), null === Fk || void 0 === Fk || Fk.removeEventListener("abort", Rk)
        }
      }
    }

    function vk(kk, Fk, Bk) {
      return new Promise(((tk, ak) => {
        const Xk = new AbortController,
          bk = () => {
            Xk.abort(), ak((0, Rk.e)(Bk))
          };
        if (null !== Bk && void 0 !== Bk && Bk.aborted) return void bk();
        null === Bk || void 0 === Bk || Bk.addEventListener("abort", bk, {
          once: !0
        });
        const wk = Ak.map((() => !1));
        let dk = null;
        const sk = Ak.map((() => !1)),
          Vk = Ak.map((() => !1));
        Ak.forEach(((Rk, Jk) => {
          const ek = Wk(fk, Xk.signal);
          Lk(Rk, [{
            role: "user",
            content: kk
          }], ek.signal).then((kk => {
            Xk.signal.aborted || ("busy" === kk || "failed" === kk ? (sk[Jk] = "busy" === kk, Vk[Jk] = !0) : null !== kk && (null === dk || Jk < dk.rank) && (dk = {
              rank: Jk,
              answer: {
                text: kk.text,
                model: Rk.name
              }
            }, Fk(dk.answer)))
          }), (kk => {
            Xk.signal.aborted || (Vk[Jk] = !0, console.warn(`Studio AI: ${Rk.name} couldn't be reached`, kk))
          })).finally((() => {
            ek.clear(), wk[Jk] = !0, Xk.signal.aborted || (() => {
              var kk, Fk;
              const Rk = null !== (kk = null === (Fk = dk) || void 0 === Fk ? void 0 : Fk.rank) && void 0 !== kk ? kk : Ak.length;
              wk.slice(0, Rk).includes(!1) || (null === Bk || void 0 === Bk || Bk.removeEventListener("abort", bk), Xk.abort(), null !== dk ? tk({
                ...dk.answer,
                isFinal: !Vk.slice(0, dk.rank).includes(!0)
              }) : ak(new mk(sk.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((kk => {
            console.error("Studio AI: showing an answer failed", kk)
          }))
        }))
      }))
    }

    function ik(kk) {
      var Fk, Bk;
      return "length" === (null === kk || void 0 === kk || null === (Fk = kk.choices) || void 0 === Fk || null === (Bk = Fk[0]) || void 0 === Bk ? void 0 : Bk.finish_reason)
    }
    async function Yk(kk, Fk, Bk) {
      const Rk = Ak.find((Fk => Fk.name === kk));
      if (void 0 === Rk) return "failed";
      const tk = Wk(fk, Bk);
      try {
        const kk = await Lk(Rk, Fk, tk.signal);
        return null !== kk && "object" === typeof kk ? kk.isCutOff ? (console.warn(`Studio AI: ${Rk.name}'s answer was cut off at the token limit`), null) : {
          text: kk.text
        } : kk
      } finally {
        tk.clear()
      }
    }
    async function Lk(kk, Fk, Bk) {
      const Rk = await fetch(Jk, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: kk.name,
          messages: Fk,
          max_tokens: yk,
          temperature: kk.temperature,
          reasoning_effort: kk.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Bk
      });
      if (429 === Rk.status) return "busy";
      if (!Rk.ok) return console.warn(`Studio AI: ${kk.name} answered ${Rk.status}`), "failed";
      const tk = await Rk.json().catch((() => null)),
        ak = function(kk) {
          var Fk, Bk, Rk;
          const tk = null === kk || void 0 === kk || null === (Fk = kk.choices) || void 0 === Fk || null === (Bk = Fk[0]) || void 0 === Bk || null === (Rk = Bk.message) || void 0 === Rk ? void 0 : Rk.content;
          if ("string" !== typeof tk) return null;
          const ak = tk.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === ak ? null : ak
        }(tk);
      return null !== ak && function(kk) {
        const Fk = Vk(kk);
        return Fk.length >= sk || Fk.some((kk => bk(kk)))
      }(ak) ? (console.warn(`Studio AI: ${kk.name} thought out loud instead of answering`), "failed") : null === ak ? null : {
        text: ak,
        isCutOff: ik(tk)
      }
    }
  },
  6137: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Lk,
      D: () => fk,
      E: () => vk,
      H: () => Yk,
      J: () => Wk,
      M: () => Vk,
      N: () => dk,
      O: () => Ak,
      e: () => ek,
      h: () => bk,
      l: () => Xk,
      n: () => yk,
      q: () => Jk,
      r: () => sk,
      u: () => ak,
      v: () => tk,
      z: () => ik
    });
    var Rk = Bk(4583);
    const tk = 2e3,
      ak = 2e4;

    function Xk(kk) {
      return kk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function bk(kk) {
      return kk.replace(/\$/g, "\\$")
    }
    const wk = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function dk(kk, Fk) {
      wk.lastIndex = Fk;
      const Bk = wk.exec(kk);
      return Bk.index + Bk[0].length
    }

    function sk(kk) {
      return (0, Rk.B)(kk, /\s+/g, (0, Rk.w)(".!?")).flatMap((kk => kk.split("\n")))
    }

    function Vk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk;
      const Rk = [...kk.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((kk => kk.index)),
        tk = Rk.filter((kk => kk < Fk)),
        ak = Rk.find((kk => kk >= Bk));
      return [0 === tk.length ? 0 : tk.at(-1) + 1, void 0 === ak ? kk.length : ak + 1]
    }

    function Jk(kk, Fk) {
      const Bk = kk.charCodeAt(Fk - 1);
      return kk.slice(0, Fk > 0 && Fk < kk.length && Bk >= 55296 && Bk <= 56319 ? Fk - 1 : Fk)
    }

    function Ak(kk, Fk) {
      return `${Fk}${kk.replace(/\\/g,"\\\\").split(Fk).join(`\\${Fk}`)}${Fk}`
    }

    function ek(kk) {
      return kk.charAt(0).toUpperCase() + kk.slice(1)
    }

    function yk(kk) {
      return Math.round(kk).toLocaleString("en-US")
    }

    function fk(kk) {
      return kk.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((kk => "" !== kk))
    }
    const mk = 3;

    function Wk(kk, Fk) {
      return fk(kk).filter((kk => kk.length >= mk && !/\d/.test(kk))).map((kk => `${kk} ${Fk}`))
    }

    function vk(kk) {
      return kk.split(/[\s:_]+/).filter((kk => "" !== kk)).map(Xk).join("[`:_\\s]+")
    }

    function ik(kk) {
      return fk(kk.split(".").pop())
    }

    function Yk(kk) {
      return kk.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Lk(kk) {
      let Fk = null;
      return () => {
        const Bk = Fk ??= kk();
        return Bk.catch((() => {
          Fk === Bk && (Fk = null)
        })), Bk
      }
    }
  },
  4583: (kk, Fk, Bk) => {
    function Rk(kk) {
      return {
        notAfter: kk
      }
    }
    Bk.d(Fk, {
      B: () => Vk,
      e: () => wk,
      i: () => dk,
      l: () => bk,
      n: () => Rk,
      r: () => tk,
      s: () => ak,
      w: () => Xk,
      y: () => sk
    });
    const tk = Rk("\\w$."),
      ak = Rk("\\w.,");

    function Xk(kk) {
      return Fk => wk(Fk, kk)
    }

    function bk(kk) {
      return Fk => !kk.test(Fk.input.slice(0, Fk.index))
    }

    function wk(kk, Fk) {
      return kk.index > 0 && new RegExp(`[${Fk}]`).test(kk.input[kk.index - 1])
    }

    function dk(kk, Fk, Bk) {
      return function(kk) {
        return void 0 !== kk && "function" !== typeof kk
      }(Bk) ? function(kk, Fk, Bk) {
        const Rk = Fk.flags.replace(/[gy]/g, ""),
          tk = new RegExp(`[^${Bk}](?:${Fk.source})`, `${Rk}g`),
          ak = [],
          Xk = Bk => {
            const Rk = Bk.index + Bk[0].length;
            return ("" === Bk[0] ? Jk(kk, Fk, Rk) : Rk) - 1
          },
          bk = new RegExp(`(?:${Fk.source})`, `${Rk}y`).exec(kk);
        if (bk) {
          if (ak.push(bk), !Fk.global) return ak;
          tk.lastIndex = Xk(bk)
        }
        for (let wk = tk.exec(kk); wk; wk = tk.exec(kk)) {
          const Bk = Jk(kk, Fk, wk.index) - wk.index;
          if (wk[0] = wk[0].slice(Bk), wk.index += Bk, ak.push(wk), !Fk.global) break;
          tk.lastIndex = Xk(wk)
        }
        return ak
      }(kk, Fk, Bk.notAfter) : function(kk, Fk, Bk) {
        const Rk = new RegExp(Fk.source, `${Fk.flags.replace(/[gy]/g,"")}g`),
          tk = [];
        for (let ak = Rk.exec(kk); ak; ak = Rk.exec(kk))
          if (!Bk || Bk(ak)) {
            if (tk.push(ak), !Fk.global) break;
            "" === ak[0] && (Rk.lastIndex = Jk(kk, Fk, Rk.lastIndex))
          } else Rk.lastIndex = Jk(kk, Fk, ak.index);
        return tk
      }(kk, Fk, Bk)
    }

    function sk(kk, Fk, Bk, Rk) {
      let tk = "",
        ak = 0;
      for (const Xk of dk(kk, Fk, Bk)) tk += kk.slice(ak, Xk.index) + Rk(Xk), ak = Xk.index + Xk[0].length;
      return tk + kk.slice(ak)
    }

    function Vk(kk, Fk, Bk) {
      const Rk = [];
      let tk = 0;
      for (const ak of dk(kk, Fk, Bk)) Rk.push(kk.slice(tk, ak.index)), tk = ak.index + ak[0].length;
      return [...Rk, kk.slice(tk)]
    }

    function Jk(kk, Fk, Bk) {
      var Rk;
      return Bk + (Fk.unicode && (null !== (Rk = kk.codePointAt(Bk)) && void 0 !== Rk ? Rk : 0) > 65535 ? 2 : 1)
    }
  },
  6184: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);