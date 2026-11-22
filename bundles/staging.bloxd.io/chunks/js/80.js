export const id = 80;
export const ids = [80];
export const modules = {
  4685: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      g: () => bk,
      h: () => wk,
      i: () => Hk,
      m: () => rk,
      p: () => fk,
      q: () => Sk,
      u: () => Uk,
      v: () => nk,
      w: () => xk
    });
    const Dk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function fk(kk) {
      try {
        return decodeURIComponent(kk.slice(1))
      } catch {
        return kk.slice(1)
      }
    }

    function Sk(kk) {
      return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const bk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Dk.source}`, "g");

    function rk(kk, ek) {
      return 2 === kk.length ? ek.replace(/^ (.*) $/, "$1") : ek
    }

    function Pk(kk) {
      return "" === kk.trim()
    }

    function mk(kk) {
      const ek = [];
      for (const ik of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ek.length > 0 && ek[ek.length - 1].endsWith("\\") ? ek[ek.length - 1] += `|${ik}` : ek.push(ik);
      return ek.map((kk => kk.trim().replaceAll("\\|", "|")))
    }
    const Mk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Kk(kk) {
      const ek = [],
        ik = [{
          indent: -1,
          items: ek
        }];
      let Dk = null;
      for (const fk of kk) {
        const kk = fk.match(Mk);
        if (!kk) {
          Dk && (Dk.text += ` ${fk.trim()}`);
          continue
        }
        const ek = kk[1].replace(/\t/g, "  ").length;
        for (; ek <= ik[ik.length - 1].indent;) ik.pop();
        Dk = {
          text: kk[3].trim(),
          children: []
        }, ik[ik.length - 1].items.push(Dk), ik.push({
          indent: ek,
          items: Dk.children
        })
      }
      return ek
    }

    function xk(kk) {
      const ek = kk.replace(/\r\n/g, "\n").split("\n"),
        ik = [];
      let Dk = 0;
      for (; Dk < ek.length;) {
        const kk = ek[Dk];
        if (Pk(kk)) {
          Dk++;
          continue
        }
        const fk = kk.match(/^\s*```\s*(\w*)\s*$/);
        if (fk) {
          const kk = [];
          for (Dk++; Dk < ek.length && !/^\s*```\s*$/.test(ek[Dk]);) kk.push(ek[Dk]), Dk++;
          Dk++, ik.push({
            kind: "code",
            lang: fk[1] || "text",
            code: kk.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const bk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (bk) {
          const kk = bk[2].trim();
          ik.push({
            kind: "heading",
            level: bk[1].length,
            text: kk,
            anchor: Sk(kk)
          }), Dk++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
          ik.push({
            kind: "rule"
          }), Dk++;
          continue
        }
        if (kk.trim().startsWith("|") && Dk + 1 < ek.length && /^\s*\|[\s:|-]+\|\s*$/.test(ek[Dk + 1])) {
          const fk = mk(kk),
            Sk = [];
          for (Dk += 2; Dk < ek.length && ek[Dk].trim().startsWith("|");) Sk.push(mk(ek[Dk])), Dk++;
          ik.push({
            kind: "table",
            header: fk,
            rows: Sk
          });
          continue
        }
        if (kk.startsWith(">")) {
          const kk = [];
          for (; Dk < ek.length && ek[Dk].startsWith(">");) kk.push(ek[Dk].replace(/^>\s?/, "")), Dk++;
          ik.push({
            kind: "quote",
            blocks: xk(kk.join("\n"))
          });
          continue
        }
        if (Mk.test(kk)) {
          const fk = [],
            Sk = /^\s*\d+\./.test(kk);
          for (; Dk < ek.length && !Pk(ek[Dk]) && (Mk.test(ek[Dk]) || /^\s+\S/.test(ek[Dk]));) fk.push(ek[Dk]), Dk++;
          ik.push({
            kind: "list",
            ordered: Sk,
            items: Kk(fk)
          });
          continue
        }
        const rk = [];
        for (; Dk < ek.length && !Pk(ek[Dk]) && !/^\s*```/.test(ek[Dk]) && !/^#{1,6}\s/.test(ek[Dk]) && !ek[Dk].startsWith(">") && !Mk.test(ek[Dk]) && (!ek[Dk].trim().startsWith("|") || 0 !== rk.length);) rk.push(ek[Dk].trim()), Dk++;
        0 === rk.length && (rk.push(ek[Dk].trim()), Dk++), ik.push({
          kind: "paragraph",
          text: rk.join(" ")
        })
      }
      return ik
    }

    function nk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ik = xk(kk);
      let Dk = "";
      const fk = [],
        Sk = [],
        bk = new Map;
      for (const mk of ik) {
        if ("heading" === mk.kind) {
          var rk;
          const kk = (null !== (rk = bk.get(mk.anchor)) && void 0 !== rk ? rk : 0) + 1;
          bk.set(mk.anchor, kk), kk > 1 && (mk.anchor = `${mk.anchor}-${kk}`)
        }
        if ("heading" === mk.kind && 1 === mk.level && !Dk) {
          Dk = mk.text;
          continue
        }
        if ("heading" === mk.kind && mk.level <= ek) {
          Sk.push({
            heading: mk,
            blocks: []
          });
          continue
        }
        const kk = Sk.at(-1);
        kk ? kk.blocks.push(mk) : fk.push(mk)
      }
      const Pk = kk => {
        for (;
          "rule" === (null === (ek = kk.at(-1)) || void 0 === ek ? void 0 : ek.kind);) {
          var ek;
          kk.pop()
        }
      };
      Pk(fk);
      for (const mk of Sk) Pk(mk.blocks);
      return {
        title: Dk,
        intro: fk,
        sections: Sk
      }
    }

    function Uk(kk) {
      return [{
        heading: null,
        blocks: kk.intro
      }, ...kk.sections.map((kk => ({
        heading: kk.heading,
        blocks: kk.blocks
      })))]
    }

    function Hk(kk) {
      return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? Hk(kk.blocks) : []))
    }

    function wk(kk) {
      switch (kk.kind) {
        case "heading":
        case "paragraph":
          return kk.text;
        case "code":
          return kk.code;
        case "table":
          return [kk.header, ...kk.rows].map((kk => kk.join(" "))).join(" ");
        case "list": {
          const ek = kk => kk.map((kk => `${kk.text} ${ek(kk.children)}`)).join(" ");
          return ek(kk.items)
        }
        case "quote":
          return kk.blocks.map(wk).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6348: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      e: () => bk,
      i: () => rk
    });
    ik(6343);
    var Dk = ik(60),
      fk = ik(4685),
      Sk = ik(1066);
    const bk = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function rk(kk, ek) {
      return kk === ek ? kk : `${kk} (${ek})`
    }

    function Pk(kk) {
      const ek = [];
      let ik = 0;
      for (const Dk of kk.matchAll(bk)) {
        Dk.index > ik && ek.push(kk.slice(ik, Dk.index));
        const [, fk, bk, Pk, mk, Mk, Kk] = Dk;
        void 0 !== fk ? ek.push(rk(fk, bk)) : void 0 !== Pk || void 0 !== mk ? ek.push((0, Sk.jsx)("strong", {
          children: null !== Pk && void 0 !== Pk ? Pk : mk
        }, Dk.index)) : void 0 !== Mk ? ek.push((0, Sk.jsx)("em", {
          children: Mk
        }, Dk.index)) : ek.push((0, Sk.jsx)("code", {
          children: Kk
        }, Dk.index)), ik = Dk.index + Dk[0].length
      }
      return ik < kk.length && ek.push(kk.slice(ik)), ek
    }

    function mk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Dk = kk.map(((kk, ek) => (0, Sk.jsxs)("li", {
        children: [Pk(kk.text), kk.children.length > 0 && mk(kk.children, !1)]
      }, ek)));
      return ek ? (0, Sk.jsx)("ol", {
        start: ik,
        children: Dk
      }) : (0, Sk.jsx)("ul", {
        children: Dk
      })
    }

    function Mk(kk, ek) {
      switch (kk.kind) {
        case "heading":
          return kk.level <= 2 ? (0, Sk.jsx)("h3", {
            children: Pk(kk.text)
          }, ek) : (0, Sk.jsx)("h4", {
            children: Pk(kk.text)
          }, ek);
        case "paragraph":
          return (0, Sk.jsx)("p", {
            children: Pk(kk.text)
          }, ek);
        case "list":
          return (0, Sk.jsx)(Dk.Fragment, {
            children: mk(kk.items, kk.ordered)
          }, ek);
        case "quote":
          return (0, Sk.jsx)("blockquote", {
            children: kk.blocks.map(((kk, ek) => Mk(kk, ek)))
          }, ek);
        case "code":
          return (0, Sk.jsx)("pre", {
            children: (0, Sk.jsx)("code", {
              children: kk.code
            })
          }, ek);
        case "table":
          return (0, Sk.jsxs)("table", {
            children: [(0, Sk.jsx)("thead", {
              children: (0, Sk.jsx)("tr", {
                children: kk.header.map(((kk, ek) => (0, Sk.jsx)("th", {
                  children: Pk(kk)
                }, ek)))
              })
            }), (0, Sk.jsx)("tbody", {
              children: kk.rows.map(((kk, ek) => (0, Sk.jsx)("tr", {
                children: kk.map(((kk, ek) => (0, Sk.jsx)("td", {
                  children: Pk(kk)
                }, ek)))
              }, ek)))
            })]
          }, ek);
        case "rule":
          return (0, Sk.jsx)("hr", {}, ek)
      }
    }

    function Kk(kk) {
      let {
        markdown: ek
      } = kk, ik = 0;
      return (0, Sk.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, fk.w)(ek).map(((kk, ek) => {
          if ("list" !== kk.kind || !kk.ordered) return ik = 0, Mk(kk, ek);
          const fk = ik + 1;
          return ik += kk.items.length, (0, Sk.jsx)(Dk.Fragment, {
            children: mk(kk.items, !0, fk)
          }, ek)
        }))
      })
    }
  },
  6336: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => pk,
      k: () => yk,
      i: () => Lk,
      o: () => Uk
    });
    var Dk = ik(1187),
      fk = ik(6304),
      Sk = ik(4813);
    const bk = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function rk(kk) {
      return (0, Sk.e)(kk, bk, (ek => !/^my/i.test(ek[0]) || !/follow $/i.test(kk.slice(0, ek.index)))).length > 0
    }
    const Pk = /\byou(?:r|'re|'ll)?\b/i,
      mk = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Mk = 2;

    function Kk(kk) {
      return function(kk) {
        const ek = [];
        let ik = !1;
        for (const Dk of kk.split("\n")) {
          if (/^\s*(```|~~~)/.test(Dk)) {
            ik = !ik;
            continue
          }
          if (ik || /^\s*>/.test(Dk)) continue;
          const kk = Dk.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          ek.push(...(0, fk.l)(kk))
        }
        return ek
      }(kk).filter((kk => rk(kk) || mk.test(kk) && !Pk.test(kk)))
    }
    const xk = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      nk = [{
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

    function Uk(kk) {
      const ek = nk.findIndex((ek => ek.name === kk));
      return -1 === ek ? nk.length : ek
    }
    const Hk = 2500,
      wk = 12e4;
    class lk extends Error {
      constructor(kk) {
        super(`Studio AI chat ${kk}`), this.reason = kk
      }
    }

    function pk(kk, ek) {
      const ik = new AbortController,
        Dk = () => {
          ik.abort()
        },
        fk = setTimeout(Dk, kk);
      return null !== ek && void 0 !== ek && ek.aborted && Dk(), null === ek || void 0 === ek || ek.addEventListener("abort", Dk, {
        once: !0
      }), {
        signal: ik.signal,
        clear: () => {
          clearTimeout(fk), null === ek || void 0 === ek || ek.removeEventListener("abort", Dk)
        }
      }
    }

    function yk(kk, ek, ik) {
      return new Promise(((fk, Sk) => {
        const bk = new AbortController,
          rk = () => {
            bk.abort(), Sk((0, Dk.i)(ik))
          };
        if (null !== ik && void 0 !== ik && ik.aborted) return void rk();
        null === ik || void 0 === ik || ik.addEventListener("abort", rk, {
          once: !0
        });
        const Pk = nk.map((() => !1));
        let mk = null;
        const Mk = nk.map((() => !1)),
          Kk = nk.map((() => !1));
        nk.forEach(((Dk, xk) => {
          const Uk = pk(wk, bk.signal);
          Ck(Dk, [{
            role: "user",
            content: kk
          }], Uk.signal).then((kk => {
            bk.signal.aborted || ("busy" === kk || "failed" === kk ? (Mk[xk] = "busy" === kk, Kk[xk] = !0) : null !== kk && (null === mk || xk < mk.rank) && (mk = {
              rank: xk,
              answer: {
                text: kk.text,
                model: Dk.name
              }
            }, ek(mk.answer)))
          }), (kk => {
            bk.signal.aborted || (Kk[xk] = !0, console.warn(`Studio AI: ${Dk.name} couldn't be reached`, kk))
          })).finally((() => {
            Uk.clear(), Pk[xk] = !0, bk.signal.aborted || (() => {
              var kk, ek;
              const Dk = null !== (kk = null === (ek = mk) || void 0 === ek ? void 0 : ek.rank) && void 0 !== kk ? kk : nk.length;
              Pk.slice(0, Dk).includes(!1) || (null === ik || void 0 === ik || ik.removeEventListener("abort", rk), bk.abort(), null !== mk ? fk({
                ...mk.answer,
                isFinal: !Kk.slice(0, mk.rank).includes(!0)
              }) : Sk(new lk(Mk.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((kk => {
            console.error("Studio AI: showing an answer failed", kk)
          }))
        }))
      }))
    }

    function Yk(kk) {
      var ek, ik;
      return "length" === (null === kk || void 0 === kk || null === (ek = kk.choices) || void 0 === ek || null === (ik = ek[0]) || void 0 === ik ? void 0 : ik.finish_reason)
    }
    async function Lk(kk, ek, ik) {
      const Dk = nk.find((ek => ek.name === kk));
      if (void 0 === Dk) return "failed";
      const fk = pk(wk, ik);
      try {
        const kk = await Ck(Dk, ek, fk.signal);
        return null !== kk && "object" === typeof kk ? kk.isCutOff ? (console.warn(`Studio AI: ${Dk.name}'s answer was cut off at the token limit`), null) : {
          text: kk.text
        } : kk
      } finally {
        fk.clear()
      }
    }
    async function Ck(kk, ek, ik) {
      const Dk = await fetch(xk, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: kk.name,
          messages: ek,
          max_tokens: Hk,
          temperature: kk.temperature,
          reasoning_effort: kk.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ik
      });
      if (429 === Dk.status) return "busy";
      if (!Dk.ok) return console.warn(`Studio AI: ${kk.name} answered ${Dk.status}`), "failed";
      const fk = await Dk.json().catch((() => null)),
        Sk = function(kk) {
          var ek, ik, Dk;
          const fk = null === kk || void 0 === kk || null === (ek = kk.choices) || void 0 === ek || null === (ik = ek[0]) || void 0 === ik || null === (Dk = ik.message) || void 0 === Dk ? void 0 : Dk.content;
          if ("string" !== typeof fk) return null;
          const Sk = fk.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Sk ? null : Sk
        }(fk);
      return null !== Sk && function(kk) {
        const ek = Kk(kk);
        return ek.length >= Mk || ek.some((kk => rk(kk)))
      }(Sk) ? (console.warn(`Studio AI: ${kk.name} thought out loud instead of answering`), "failed") : null === Sk ? null : {
        text: Sk,
        isCutOff: Yk(fk)
      }
    }
  },
  6304: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Lk,
      E: () => pk,
      F: () => Kk,
      J: () => mk,
      M: () => nk,
      b: () => Uk,
      c: () => rk,
      e: () => bk,
      i: () => Hk,
      j: () => xk,
      l: () => Mk,
      m: () => Sk,
      o: () => fk,
      p: () => Yk,
      q: () => Ck,
      u: () => wk,
      y: () => yk
    });
    var Dk = ik(4813);
    const fk = 2e3,
      Sk = 2e4;

    function bk(kk) {
      return kk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function rk(kk) {
      return kk.replace(/\$/g, "\\$")
    }
    const Pk = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function mk(kk, ek) {
      Pk.lastIndex = ek;
      const ik = Pk.exec(kk);
      return ik.index + ik[0].length
    }

    function Mk(kk) {
      return (0, Dk.r)(kk, /\s+/g, (0, Dk.l)(".!?")).flatMap((kk => kk.split("\n")))
    }

    function Kk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek;
      const Dk = [...kk.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((kk => kk.index)),
        fk = Dk.filter((kk => kk < ek)),
        Sk = Dk.find((kk => kk >= ik));
      return [0 === fk.length ? 0 : fk.at(-1) + 1, void 0 === Sk ? kk.length : Sk + 1]
    }

    function xk(kk, ek) {
      const ik = kk.charCodeAt(ek - 1);
      return kk.slice(0, ek > 0 && ek < kk.length && ik >= 55296 && ik <= 56319 ? ek - 1 : ek)
    }

    function nk(kk, ek) {
      return `${ek}${kk.replace(/\\/g,"\\\\").split(ek).join(`\\${ek}`)}${ek}`
    }

    function Uk(kk) {
      return kk.charAt(0).toUpperCase() + kk.slice(1)
    }

    function Hk(kk) {
      return Math.round(kk).toLocaleString("en-US")
    }

    function wk(kk) {
      return kk.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((kk => "" !== kk))
    }
    const lk = 3;

    function pk(kk, ek) {
      return wk(kk).filter((kk => kk.length >= lk && !/\d/.test(kk))).map((kk => `${kk} ${ek}`))
    }

    function yk(kk) {
      return kk.split(/[\s:_]+/).filter((kk => "" !== kk)).map(bk).join("[`:_\\s]+")
    }

    function Yk(kk) {
      return wk(kk.split(".").pop())
    }

    function Lk(kk) {
      return kk.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Ck(kk) {
      let ek = null;
      return () => {
        const ik = ek ??= kk();
        return ik.catch((() => {
          ek === ik && (ek = null)
        })), ik
      }
    }
  },
  4813: (kk, ek, ik) => {
    function Dk(kk) {
      return {
        notAfter: kk
      }
    }
    ik.d(ek, {
      d: () => Pk,
      e: () => mk,
      f: () => rk,
      h: () => Dk,
      i: () => fk,
      j: () => Sk,
      l: () => bk,
      p: () => Mk,
      r: () => Kk
    });
    const fk = Dk("\\w$."),
      Sk = Dk("\\w.,");

    function bk(kk) {
      return ek => Pk(ek, kk)
    }

    function rk(kk) {
      return ek => !kk.test(ek.input.slice(0, ek.index))
    }

    function Pk(kk, ek) {
      return kk.index > 0 && new RegExp(`[${ek}]`).test(kk.input[kk.index - 1])
    }

    function mk(kk, ek, ik) {
      return function(kk) {
        return void 0 !== kk && "function" !== typeof kk
      }(ik) ? function(kk, ek, ik) {
        const Dk = ek.flags.replace(/[gy]/g, ""),
          fk = new RegExp(`[^${ik}](?:${ek.source})`, `${Dk}g`),
          Sk = [],
          bk = ik => {
            const Dk = ik.index + ik[0].length;
            return ("" === ik[0] ? xk(kk, ek, Dk) : Dk) - 1
          },
          rk = new RegExp(`(?:${ek.source})`, `${Dk}y`).exec(kk);
        if (rk) {
          if (Sk.push(rk), !ek.global) return Sk;
          fk.lastIndex = bk(rk)
        }
        for (let Pk = fk.exec(kk); Pk; Pk = fk.exec(kk)) {
          const ik = xk(kk, ek, Pk.index) - Pk.index;
          if (Pk[0] = Pk[0].slice(ik), Pk.index += ik, Sk.push(Pk), !ek.global) break;
          fk.lastIndex = bk(Pk)
        }
        return Sk
      }(kk, ek, ik.notAfter) : function(kk, ek, ik) {
        const Dk = new RegExp(ek.source, `${ek.flags.replace(/[gy]/g,"")}g`),
          fk = [];
        for (let Sk = Dk.exec(kk); Sk; Sk = Dk.exec(kk))
          if (!ik || ik(Sk)) {
            if (fk.push(Sk), !ek.global) break;
            "" === Sk[0] && (Dk.lastIndex = xk(kk, ek, Dk.lastIndex))
          } else Dk.lastIndex = xk(kk, ek, Sk.index);
        return fk
      }(kk, ek, ik)
    }

    function Mk(kk, ek, ik, Dk) {
      let fk = "",
        Sk = 0;
      for (const bk of mk(kk, ek, ik)) fk += kk.slice(Sk, bk.index) + Dk(bk), Sk = bk.index + bk[0].length;
      return fk + kk.slice(Sk)
    }

    function Kk(kk, ek, ik) {
      const Dk = [];
      let fk = 0;
      for (const Sk of mk(kk, ek, ik)) Dk.push(kk.slice(fk, Sk.index)), fk = Sk.index + Sk[0].length;
      return [...Dk, kk.slice(fk)]
    }

    function xk(kk, ek, ik) {
      var Dk;
      return ik + (ek.unicode && (null !== (Dk = kk.codePointAt(ik)) && void 0 !== Dk ? Dk : 0) > 65535 ? 2 : 1)
    }
  },
  6343: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);