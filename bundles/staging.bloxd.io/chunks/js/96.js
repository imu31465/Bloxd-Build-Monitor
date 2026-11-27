export const id = 96;
export const ids = [96];
export const modules = {
  5564: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      e: () => jr,
      f: () => hr,
      i: () => tr,
      j: () => Ir,
      k: () => Wr,
      o: () => ar,
      r: () => Ur,
      t: () => Nr,
      v: () => mr
    });
    const Zr = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Wr(rr) {
      try {
        return decodeURIComponent(rr.slice(1))
      } catch {
        return rr.slice(1)
      }
    }

    function ar(rr) {
      return rr.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const jr = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Zr.source}`, "g");

    function Ir(rr, Sr) {
      return 2 === rr.length ? Sr.replace(/^ (.*) $/, "$1") : Sr
    }

    function fr(rr) {
      return "" === rr.trim()
    }

    function Er(rr) {
      const Sr = [];
      for (const Qr of rr.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Sr.length > 0 && Sr[Sr.length - 1].endsWith("\\") ? Sr[Sr.length - 1] += `|${Qr}` : Sr.push(Qr);
      return Sr.map((rr => rr.trim().replaceAll("\\|", "|")))
    }
    const pr = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function xr(rr) {
      const Sr = [],
        Qr = [{
          indent: -1,
          items: Sr
        }];
      let Zr = null;
      for (const Wr of rr) {
        const rr = Wr.match(pr);
        if (!rr) {
          Zr && (Zr.text += ` ${Wr.trim()}`);
          continue
        }
        const Sr = rr[1].replace(/\t/g, "  ").length;
        for (; Sr <= Qr[Qr.length - 1].indent;) Qr.pop();
        Zr = {
          text: rr[3].trim(),
          children: []
        }, Qr[Qr.length - 1].items.push(Zr), Qr.push({
          indent: Sr,
          items: Zr.children
        })
      }
      return Sr
    }

    function mr(rr) {
      const Sr = rr.replace(/\r\n/g, "\n").split("\n"),
        Qr = [];
      let Zr = 0;
      for (; Zr < Sr.length;) {
        const rr = Sr[Zr];
        if (fr(rr)) {
          Zr++;
          continue
        }
        const Wr = rr.match(/^\s*```\s*(\w*)\s*$/);
        if (Wr) {
          const rr = [];
          for (Zr++; Zr < Sr.length && !/^\s*```\s*$/.test(Sr[Zr]);) rr.push(Sr[Zr]), Zr++;
          Zr++, Qr.push({
            kind: "code",
            lang: Wr[1] || "text",
            code: rr.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const jr = rr.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (jr) {
          const rr = jr[2].trim();
          Qr.push({
            kind: "heading",
            level: jr[1].length,
            text: rr,
            anchor: ar(rr)
          }), Zr++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(rr)) {
          Qr.push({
            kind: "rule"
          }), Zr++;
          continue
        }
        if (rr.trim().startsWith("|") && Zr + 1 < Sr.length && /^\s*\|[\s:|-]+\|\s*$/.test(Sr[Zr + 1])) {
          const Wr = Er(rr),
            ar = [];
          for (Zr += 2; Zr < Sr.length && Sr[Zr].trim().startsWith("|");) ar.push(Er(Sr[Zr])), Zr++;
          Qr.push({
            kind: "table",
            header: Wr,
            rows: ar
          });
          continue
        }
        if (rr.startsWith(">")) {
          const rr = [];
          for (; Zr < Sr.length && Sr[Zr].startsWith(">");) rr.push(Sr[Zr].replace(/^>\s?/, "")), Zr++;
          Qr.push({
            kind: "quote",
            blocks: mr(rr.join("\n"))
          });
          continue
        }
        if (pr.test(rr)) {
          const Wr = [],
            ar = /^\s*\d+\./.test(rr);
          for (; Zr < Sr.length && !fr(Sr[Zr]) && (pr.test(Sr[Zr]) || /^\s+\S/.test(Sr[Zr]));) Wr.push(Sr[Zr]), Zr++;
          Qr.push({
            kind: "list",
            ordered: ar,
            items: xr(Wr)
          });
          continue
        }
        const Ir = [];
        for (; Zr < Sr.length && !fr(Sr[Zr]) && !/^\s*```/.test(Sr[Zr]) && !/^#{1,6}\s/.test(Sr[Zr]) && !Sr[Zr].startsWith(">") && !pr.test(Sr[Zr]) && (!Sr[Zr].trim().startsWith("|") || 0 !== Ir.length);) Ir.push(Sr[Zr].trim()), Zr++;
        0 === Ir.length && (Ir.push(Sr[Zr].trim()), Zr++), Qr.push({
          kind: "paragraph",
          text: Ir.join(" ")
        })
      }
      return Qr
    }

    function Nr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Qr = mr(rr);
      let Zr = "";
      const Wr = [],
        ar = [],
        jr = new Map;
      for (const Er of Qr) {
        if ("heading" === Er.kind) {
          var Ir;
          const rr = (null !== (Ir = jr.get(Er.anchor)) && void 0 !== Ir ? Ir : 0) + 1;
          jr.set(Er.anchor, rr), rr > 1 && (Er.anchor = `${Er.anchor}-${rr}`)
        }
        if ("heading" === Er.kind && 1 === Er.level && !Zr) {
          Zr = Er.text;
          continue
        }
        if ("heading" === Er.kind && Er.level <= Sr) {
          ar.push({
            heading: Er,
            blocks: []
          });
          continue
        }
        const rr = ar.at(-1);
        rr ? rr.blocks.push(Er) : Wr.push(Er)
      }
      const fr = rr => {
        for (;
          "rule" === (null === (Sr = rr.at(-1)) || void 0 === Sr ? void 0 : Sr.kind);) {
          var Sr;
          rr.pop()
        }
      };
      fr(Wr);
      for (const Er of ar) fr(Er.blocks);
      return {
        title: Zr,
        intro: Wr,
        sections: ar
      }
    }

    function Ur(rr) {
      return [{
        heading: null,
        blocks: rr.intro
      }, ...rr.sections.map((rr => ({
        heading: rr.heading,
        blocks: rr.blocks
      })))]
    }

    function tr(rr) {
      return rr.flatMap((rr => "code" === rr.kind ? [rr] : "quote" === rr.kind ? tr(rr.blocks) : []))
    }

    function hr(rr) {
      switch (rr.kind) {
        case "heading":
        case "paragraph":
          return rr.text;
        case "code":
          return rr.code;
        case "table":
          return [rr.header, ...rr.rows].map((rr => rr.join(" "))).join(" ");
        case "list": {
          const Sr = rr => rr.map((rr => `${rr.text} ${Sr(rr.children)}`)).join(" ");
          return Sr(rr.items)
        }
        case "quote":
          return rr.blocks.map(hr).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7447: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      d: () => jr,
      g: () => Ir
    });
    Qr(7443);
    var Zr = Qr(72),
      Wr = Qr(5564),
      ar = Qr(1338);
    const jr = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Ir(rr, Sr) {
      return rr === Sr ? rr : `${rr} (${Sr})`
    }

    function fr(rr) {
      const Sr = [];
      let Qr = 0;
      for (const Zr of rr.matchAll(jr)) {
        Zr.index > Qr && Sr.push(rr.slice(Qr, Zr.index));
        const [, Wr, jr, fr, Er, pr, xr] = Zr;
        void 0 !== Wr ? Sr.push(Ir(Wr, jr)) : void 0 !== fr || void 0 !== Er ? Sr.push((0, ar.jsx)("strong", {
          children: null !== fr && void 0 !== fr ? fr : Er
        }, Zr.index)) : void 0 !== pr ? Sr.push((0, ar.jsx)("em", {
          children: pr
        }, Zr.index)) : Sr.push((0, ar.jsx)("code", {
          children: xr
        }, Zr.index)), Qr = Zr.index + Zr[0].length
      }
      return Qr < rr.length && Sr.push(rr.slice(Qr)), Sr
    }

    function Er(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Zr = rr.map(((rr, Sr) => (0, ar.jsxs)("li", {
        children: [fr(rr.text), rr.children.length > 0 && Er(rr.children, !1)]
      }, Sr)));
      return Sr ? (0, ar.jsx)("ol", {
        start: Qr,
        children: Zr
      }) : (0, ar.jsx)("ul", {
        children: Zr
      })
    }

    function pr(rr, Sr) {
      switch (rr.kind) {
        case "heading":
          return rr.level <= 2 ? (0, ar.jsx)("h3", {
            children: fr(rr.text)
          }, Sr) : (0, ar.jsx)("h4", {
            children: fr(rr.text)
          }, Sr);
        case "paragraph":
          return (0, ar.jsx)("p", {
            children: fr(rr.text)
          }, Sr);
        case "list":
          return (0, ar.jsx)(Zr.Fragment, {
            children: Er(rr.items, rr.ordered)
          }, Sr);
        case "quote":
          return (0, ar.jsx)("blockquote", {
            children: rr.blocks.map(((rr, Sr) => pr(rr, Sr)))
          }, Sr);
        case "code":
          return (0, ar.jsx)("pre", {
            children: (0, ar.jsx)("code", {
              children: rr.code
            })
          }, Sr);
        case "table":
          return (0, ar.jsxs)("table", {
            children: [(0, ar.jsx)("thead", {
              children: (0, ar.jsx)("tr", {
                children: rr.header.map(((rr, Sr) => (0, ar.jsx)("th", {
                  children: fr(rr)
                }, Sr)))
              })
            }), (0, ar.jsx)("tbody", {
              children: rr.rows.map(((rr, Sr) => (0, ar.jsx)("tr", {
                children: rr.map(((rr, Sr) => (0, ar.jsx)("td", {
                  children: fr(rr)
                }, Sr)))
              }, Sr)))
            })]
          }, Sr);
        case "rule":
          return (0, ar.jsx)("hr", {}, Sr)
      }
    }

    function xr(rr) {
      let {
        markdown: Sr
      } = rr, Qr = 0;
      return (0, ar.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Wr.v)(Sr).map(((rr, Sr) => {
          if ("list" !== rr.kind || !rr.ordered) return Qr = 0, pr(rr, Sr);
          const Wr = Qr + 1;
          return Qr += rr.items.length, (0, ar.jsx)(Zr.Fragment, {
            children: Er(rr.items, !0, Wr)
          }, Sr)
        }))
      })
    }
  },
  7434: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Yr,
      i: () => nr,
      f: () => Kr,
      l: () => Ur
    });
    var Zr = Qr(1267),
      Wr = Qr(7391),
      ar = Qr(5692);
    const jr = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Ir(rr) {
      return (0, ar.e)(rr, jr, (Sr => !/^my/i.test(Sr[0]) || !/follow $/i.test(rr.slice(0, Sr.index)))).length > 0
    }
    const fr = /\byou(?:r|'re|'ll)?\b/i,
      Er = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      pr = 2;

    function xr(rr) {
      return function(rr) {
        const Sr = [];
        let Qr = !1;
        for (const Zr of rr.split("\n")) {
          if (/^\s*(```|~~~)/.test(Zr)) {
            Qr = !Qr;
            continue
          }
          if (Qr || /^\s*>/.test(Zr)) continue;
          const rr = Zr.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Sr.push(...(0, Wr.p)(rr))
        }
        return Sr
      }(rr).filter((rr => Ir(rr) || Er.test(rr) && !fr.test(rr)))
    }
    const mr = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Nr = [{
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

    function Ur(rr) {
      const Sr = Nr.findIndex((Sr => Sr.name === rr));
      return -1 === Sr ? Nr.length : Sr
    }
    const tr = 2500,
      hr = 12e4;
    class zr extends Error {
      constructor(rr) {
        super(`Studio AI chat ${rr}`), this.reason = rr
      }
    }

    function Yr(rr, Sr) {
      const Qr = new AbortController,
        Zr = () => {
          Qr.abort()
        },
        Wr = setTimeout(Zr, rr);
      return null !== Sr && void 0 !== Sr && Sr.aborted && Zr(), null === Sr || void 0 === Sr || Sr.addEventListener("abort", Zr, {
        once: !0
      }), {
        signal: Qr.signal,
        clear: () => {
          clearTimeout(Wr), null === Sr || void 0 === Sr || Sr.removeEventListener("abort", Zr)
        }
      }
    }

    function nr(rr, Sr, Qr) {
      return new Promise(((Wr, ar) => {
        const jr = new AbortController,
          Ir = () => {
            jr.abort(), ar((0, Zr.f)(Qr))
          };
        if (null !== Qr && void 0 !== Qr && Qr.aborted) return void Ir();
        null === Qr || void 0 === Qr || Qr.addEventListener("abort", Ir, {
          once: !0
        });
        const fr = Nr.map((() => !1));
        let Er = null;
        const pr = Nr.map((() => !1)),
          xr = Nr.map((() => !1));
        Nr.forEach(((Zr, mr) => {
          const Ur = Yr(hr, jr.signal);
          yr(Zr, [{
            role: "user",
            content: rr
          }], Ur.signal).then((rr => {
            jr.signal.aborted || ("busy" === rr || "failed" === rr ? (pr[mr] = "busy" === rr, xr[mr] = !0) : null !== rr && (null === Er || mr < Er.rank) && (Er = {
              rank: mr,
              answer: {
                text: rr.text,
                model: Zr.name
              }
            }, Sr(Er.answer)))
          }), (rr => {
            jr.signal.aborted || (xr[mr] = !0, console.warn(`Studio AI: ${Zr.name} couldn't be reached`, rr))
          })).finally((() => {
            Ur.clear(), fr[mr] = !0, jr.signal.aborted || (() => {
              var rr, Sr;
              const Zr = null !== (rr = null === (Sr = Er) || void 0 === Sr ? void 0 : Sr.rank) && void 0 !== rr ? rr : Nr.length;
              fr.slice(0, Zr).includes(!1) || (null === Qr || void 0 === Qr || Qr.removeEventListener("abort", Ir), jr.abort(), null !== Er ? Wr({
                ...Er.answer,
                isFinal: !xr.slice(0, Er.rank).includes(!0)
              }) : ar(new zr(pr.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((rr => {
            console.error("Studio AI: showing an answer failed", rr)
          }))
        }))
      }))
    }

    function er(rr) {
      var Sr, Qr;
      return "length" === (null === rr || void 0 === rr || null === (Sr = rr.choices) || void 0 === Sr || null === (Qr = Sr[0]) || void 0 === Qr ? void 0 : Qr.finish_reason)
    }
    async function Kr(rr, Sr, Qr) {
      const Zr = Nr.find((Sr => Sr.name === rr));
      if (void 0 === Zr) return "failed";
      const Wr = Yr(hr, Qr);
      try {
        const rr = await yr(Zr, Sr, Wr.signal);
        return null !== rr && "object" === typeof rr ? rr.isCutOff ? (console.warn(`Studio AI: ${Zr.name}'s answer was cut off at the token limit`), null) : {
          text: rr.text
        } : rr
      } finally {
        Wr.clear()
      }
    }
    async function yr(rr, Sr, Qr) {
      const Zr = await fetch(mr, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: rr.name,
          messages: Sr,
          max_tokens: tr,
          temperature: rr.temperature,
          reasoning_effort: rr.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Qr
      });
      if (429 === Zr.status) return "busy";
      if (!Zr.ok) return console.warn(`Studio AI: ${rr.name} answered ${Zr.status}`), "failed";
      const Wr = await Zr.json().catch((() => null)),
        ar = function(rr) {
          var Sr, Qr, Zr;
          const Wr = null === rr || void 0 === rr || null === (Sr = rr.choices) || void 0 === Sr || null === (Qr = Sr[0]) || void 0 === Qr || null === (Zr = Qr.message) || void 0 === Zr ? void 0 : Zr.content;
          if ("string" !== typeof Wr) return null;
          const ar = Wr.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === ar ? null : ar
        }(Wr);
      return null !== ar && function(rr) {
        const Sr = xr(rr);
        return Sr.length >= pr || Sr.some((rr => Ir(rr)))
      }(ar) ? (console.warn(`Studio AI: ${rr.name} thought out loud instead of answering`), "failed") : null === ar ? null : {
        text: ar,
        isCutOff: er(Wr)
      }
    }
  },
  7391: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      D: () => hr,
      H: () => nr,
      K: () => Kr,
      O: () => Yr,
      R: () => xr,
      U: () => Er,
      Y: () => Nr,
      b: () => Ur,
      f: () => Ir,
      i: () => jr,
      k: () => tr,
      m: () => mr,
      p: () => pr,
      q: () => ar,
      u: () => Wr,
      y: () => er,
      z: () => yr
    });
    var Zr = Qr(5692);
    const Wr = 2e3,
      ar = 2e4;

    function jr(rr) {
      return rr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Ir(rr) {
      return rr.replace(/\$/g, "\\$")
    }
    const fr = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Er(rr, Sr) {
      fr.lastIndex = Sr;
      const Qr = fr.exec(rr);
      return Qr.index + Qr[0].length
    }

    function pr(rr) {
      return (0, Zr.u)(rr, /\s+/g, (0, Zr.s)(".!?")).flatMap((rr => rr.split("\n")))
    }

    function xr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr;
      const Zr = [...rr.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((rr => rr.index)),
        Wr = Zr.filter((rr => rr < Sr)),
        ar = Zr.find((rr => rr >= Qr));
      return [0 === Wr.length ? 0 : Wr.at(-1) + 1, void 0 === ar ? rr.length : ar + 1]
    }

    function mr(rr, Sr) {
      const Qr = rr.charCodeAt(Sr - 1);
      return rr.slice(0, Sr > 0 && Sr < rr.length && Qr >= 55296 && Qr <= 56319 ? Sr - 1 : Sr)
    }

    function Nr(rr, Sr) {
      return `${Sr}${rr.replace(/\\/g,"\\\\").split(Sr).join(`\\${Sr}`)}${Sr}`
    }

    function Ur(rr) {
      return rr.charAt(0).toUpperCase() + rr.slice(1)
    }

    function tr(rr) {
      return Math.round(rr).toLocaleString("en-US")
    }

    function hr(rr) {
      return rr.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((rr => "" !== rr))
    }
    const zr = 3;

    function Yr(rr, Sr) {
      return hr(rr).filter((rr => rr.length >= zr && !/\d/.test(rr))).map((rr => `${rr} ${Sr}`))
    }

    function nr(rr) {
      return rr.split(/[\s:_]+/).filter((rr => "" !== rr)).map(jr).join("[`:_\\s]+")
    }

    function er(rr) {
      return hr(rr.split(".").pop())
    }

    function Kr(rr) {
      return rr.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function yr(rr) {
      let Sr = null;
      return () => {
        const Qr = Sr ??= rr();
        return Qr.catch((() => {
          Sr === Qr && (Sr = null)
        })), Qr
      }
    }
  },
  5692: (rr, Sr, Qr) => {
    function Zr(rr) {
      return {
        notAfter: rr
      }
    }
    Qr.d(Sr, {
      c: () => fr,
      e: () => Er,
      g: () => Ir,
      k: () => Zr,
      o: () => Wr,
      p: () => ar,
      s: () => jr,
      t: () => pr,
      u: () => xr
    });
    const Wr = Zr("\\w$."),
      ar = Zr("\\w.,");

    function jr(rr) {
      return Sr => fr(Sr, rr)
    }

    function Ir(rr) {
      return Sr => !rr.test(Sr.input.slice(0, Sr.index))
    }

    function fr(rr, Sr) {
      return rr.index > 0 && new RegExp(`[${Sr}]`).test(rr.input[rr.index - 1])
    }

    function Er(rr, Sr, Qr) {
      return function(rr) {
        return void 0 !== rr && "function" !== typeof rr
      }(Qr) ? function(rr, Sr, Qr) {
        const Zr = Sr.flags.replace(/[gy]/g, ""),
          Wr = new RegExp(`[^${Qr}](?:${Sr.source})`, `${Zr}g`),
          ar = [],
          jr = Qr => {
            const Zr = Qr.index + Qr[0].length;
            return ("" === Qr[0] ? mr(rr, Sr, Zr) : Zr) - 1
          },
          Ir = new RegExp(`(?:${Sr.source})`, `${Zr}y`).exec(rr);
        if (Ir) {
          if (ar.push(Ir), !Sr.global) return ar;
          Wr.lastIndex = jr(Ir)
        }
        for (let fr = Wr.exec(rr); fr; fr = Wr.exec(rr)) {
          const Qr = mr(rr, Sr, fr.index) - fr.index;
          if (fr[0] = fr[0].slice(Qr), fr.index += Qr, ar.push(fr), !Sr.global) break;
          Wr.lastIndex = jr(fr)
        }
        return ar
      }(rr, Sr, Qr.notAfter) : function(rr, Sr, Qr) {
        const Zr = new RegExp(Sr.source, `${Sr.flags.replace(/[gy]/g,"")}g`),
          Wr = [];
        for (let ar = Zr.exec(rr); ar; ar = Zr.exec(rr))
          if (!Qr || Qr(ar)) {
            if (Wr.push(ar), !Sr.global) break;
            "" === ar[0] && (Zr.lastIndex = mr(rr, Sr, Zr.lastIndex))
          } else Zr.lastIndex = mr(rr, Sr, ar.index);
        return Wr
      }(rr, Sr, Qr)
    }

    function pr(rr, Sr, Qr, Zr) {
      let Wr = "",
        ar = 0;
      for (const jr of Er(rr, Sr, Qr)) Wr += rr.slice(ar, jr.index) + Zr(jr), ar = jr.index + jr[0].length;
      return Wr + rr.slice(ar)
    }

    function xr(rr, Sr, Qr) {
      const Zr = [];
      let Wr = 0;
      for (const ar of Er(rr, Sr, Qr)) Zr.push(rr.slice(Wr, ar.index)), Wr = ar.index + ar[0].length;
      return [...Zr, rr.slice(Wr)]
    }

    function mr(rr, Sr, Qr) {
      var Zr;
      return Qr + (Sr.unicode && (null !== (Zr = rr.codePointAt(Qr)) && void 0 !== Zr ? Zr : 0) > 65535 ? 2 : 1)
    }
  },
  7443: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);