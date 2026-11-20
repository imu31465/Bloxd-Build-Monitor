export const id = 77;
export const ids = [77];
export const modules = {
  4511: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu,
      c: () => mu,
      d: () => Tu,
      e: () => pu,
      h: () => Ju,
      i: () => Ku,
      l: () => Qu,
      p: () => Su,
      s: () => xu,
      v: () => Bu
    });
    const Eu = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Ku(uu) {
      try {
        return decodeURIComponent(uu.slice(1))
      } catch {
        return uu.slice(1)
      }
    }

    function Qu(uu) {
      return uu.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const mu = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Eu.source}`, "g");

    function Ju(uu, Ru) {
      return 2 === uu.length ? Ru.replace(/^ (.*) $/, "$1") : Ru
    }

    function Nu(uu) {
      return "" === uu.trim()
    }

    function Xu(uu) {
      const Ru = [];
      for (const yu of uu.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Ru.length > 0 && Ru[Ru.length - 1].endsWith("\\") ? Ru[Ru.length - 1] += `|${yu}` : Ru.push(yu);
      return Ru.map((uu => uu.trim().replaceAll("\\|", "|")))
    }
    const Vu = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function ru(uu) {
      const Ru = [],
        yu = [{
          indent: -1,
          items: Ru
        }];
      let Eu = null;
      for (const Ku of uu) {
        const uu = Ku.match(Vu);
        if (!uu) {
          Eu && (Eu.text += ` ${Ku.trim()}`);
          continue
        }
        const Ru = uu[1].replace(/\t/g, "  ").length;
        for (; Ru <= yu[yu.length - 1].indent;) yu.pop();
        Eu = {
          text: uu[3].trim(),
          children: []
        }, yu[yu.length - 1].items.push(Eu), yu.push({
          indent: Ru,
          items: Eu.children
        })
      }
      return Ru
    }

    function Bu(uu) {
      const Ru = uu.replace(/\r\n/g, "\n").split("\n"),
        yu = [];
      let Eu = 0;
      for (; Eu < Ru.length;) {
        const uu = Ru[Eu];
        if (Nu(uu)) {
          Eu++;
          continue
        }
        const Ku = uu.match(/^\s*```\s*(\w*)\s*$/);
        if (Ku) {
          const uu = [];
          for (Eu++; Eu < Ru.length && !/^\s*```\s*$/.test(Ru[Eu]);) uu.push(Ru[Eu]), Eu++;
          Eu++, yu.push({
            kind: "code",
            lang: Ku[1] || "text",
            code: uu.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const mu = uu.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (mu) {
          const uu = mu[2].trim();
          yu.push({
            kind: "heading",
            level: mu[1].length,
            text: uu,
            anchor: Qu(uu)
          }), Eu++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(uu)) {
          yu.push({
            kind: "rule"
          }), Eu++;
          continue
        }
        if (uu.trim().startsWith("|") && Eu + 1 < Ru.length && /^\s*\|[\s:|-]+\|\s*$/.test(Ru[Eu + 1])) {
          const Ku = Xu(uu),
            Qu = [];
          for (Eu += 2; Eu < Ru.length && Ru[Eu].trim().startsWith("|");) Qu.push(Xu(Ru[Eu])), Eu++;
          yu.push({
            kind: "table",
            header: Ku,
            rows: Qu
          });
          continue
        }
        if (uu.startsWith(">")) {
          const uu = [];
          for (; Eu < Ru.length && Ru[Eu].startsWith(">");) uu.push(Ru[Eu].replace(/^>\s?/, "")), Eu++;
          yu.push({
            kind: "quote",
            blocks: Bu(uu.join("\n"))
          });
          continue
        }
        if (Vu.test(uu)) {
          const Ku = [],
            Qu = /^\s*\d+\./.test(uu);
          for (; Eu < Ru.length && !Nu(Ru[Eu]) && (Vu.test(Ru[Eu]) || /^\s+\S/.test(Ru[Eu]));) Ku.push(Ru[Eu]), Eu++;
          yu.push({
            kind: "list",
            ordered: Qu,
            items: ru(Ku)
          });
          continue
        }
        const Ju = [];
        for (; Eu < Ru.length && !Nu(Ru[Eu]) && !/^\s*```/.test(Ru[Eu]) && !/^#{1,6}\s/.test(Ru[Eu]) && !Ru[Eu].startsWith(">") && !Vu.test(Ru[Eu]) && (!Ru[Eu].trim().startsWith("|") || 0 !== Ju.length);) Ju.push(Ru[Eu].trim()), Eu++;
        0 === Ju.length && (Ju.push(Ru[Eu].trim()), Eu++), yu.push({
          kind: "paragraph",
          text: Ju.join(" ")
        })
      }
      return yu
    }

    function xu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const yu = Bu(uu);
      let Eu = "";
      const Ku = [],
        Qu = [],
        mu = new Map;
      for (const Xu of yu) {
        if ("heading" === Xu.kind) {
          var Ju;
          const uu = (null !== (Ju = mu.get(Xu.anchor)) && void 0 !== Ju ? Ju : 0) + 1;
          mu.set(Xu.anchor, uu), uu > 1 && (Xu.anchor = `${Xu.anchor}-${uu}`)
        }
        if ("heading" === Xu.kind && 1 === Xu.level && !Eu) {
          Eu = Xu.text;
          continue
        }
        if ("heading" === Xu.kind && Xu.level <= Ru) {
          Qu.push({
            heading: Xu,
            blocks: []
          });
          continue
        }
        const uu = Qu.at(-1);
        uu ? uu.blocks.push(Xu) : Ku.push(Xu)
      }
      const Nu = uu => {
        for (;
          "rule" === (null === (Ru = uu.at(-1)) || void 0 === Ru ? void 0 : Ru.kind);) {
          var Ru;
          uu.pop()
        }
      };
      Nu(Ku);
      for (const Xu of Qu) Nu(Xu.blocks);
      return {
        title: Eu,
        intro: Ku,
        sections: Qu
      }
    }

    function Su(uu) {
      return [{
        heading: null,
        blocks: uu.intro
      }, ...uu.sections.map((uu => ({
        heading: uu.heading,
        blocks: uu.blocks
      })))]
    }

    function pu(uu) {
      return uu.flatMap((uu => "code" === uu.kind ? [uu] : "quote" === uu.kind ? pu(uu.blocks) : []))
    }

    function Tu(uu) {
      switch (uu.kind) {
        case "heading":
        case "paragraph":
          return uu.text;
        case "code":
          return uu.code;
        case "table":
          return [uu.header, ...uu.rows].map((uu => uu.join(" "))).join(" ");
        case "list": {
          const Ru = uu => uu.map((uu => `${uu.text} ${Ru(uu.children)}`)).join(" ");
          return Ru(uu.items)
        }
        case "quote":
          return uu.blocks.map(Tu).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6284: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ru,
      g: () => mu,
      j: () => Ju
    });
    yu(6278);
    var Eu = yu(64),
      Ku = yu(4511),
      Qu = yu(1079);
    const mu = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Ju(uu, Ru) {
      return uu === Ru ? uu : `${uu} (${Ru})`
    }

    function Nu(uu) {
      const Ru = [];
      let yu = 0;
      for (const Eu of uu.matchAll(mu)) {
        Eu.index > yu && Ru.push(uu.slice(yu, Eu.index));
        const [, Ku, mu, Nu, Xu, Vu, ru] = Eu;
        void 0 !== Ku ? Ru.push(Ju(Ku, mu)) : void 0 !== Nu || void 0 !== Xu ? Ru.push((0, Qu.jsx)("strong", {
          children: null !== Nu && void 0 !== Nu ? Nu : Xu
        }, Eu.index)) : void 0 !== Vu ? Ru.push((0, Qu.jsx)("em", {
          children: Vu
        }, Eu.index)) : Ru.push((0, Qu.jsx)("code", {
          children: ru
        }, Eu.index)), yu = Eu.index + Eu[0].length
      }
      return yu < uu.length && Ru.push(uu.slice(yu)), Ru
    }

    function Xu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Eu = uu.map(((uu, Ru) => (0, Qu.jsxs)("li", {
        children: [Nu(uu.text), uu.children.length > 0 && Xu(uu.children, !1)]
      }, Ru)));
      return Ru ? (0, Qu.jsx)("ol", {
        start: yu,
        children: Eu
      }) : (0, Qu.jsx)("ul", {
        children: Eu
      })
    }

    function Vu(uu, Ru) {
      switch (uu.kind) {
        case "heading":
          return uu.level <= 2 ? (0, Qu.jsx)("h3", {
            children: Nu(uu.text)
          }, Ru) : (0, Qu.jsx)("h4", {
            children: Nu(uu.text)
          }, Ru);
        case "paragraph":
          return (0, Qu.jsx)("p", {
            children: Nu(uu.text)
          }, Ru);
        case "list":
          return (0, Qu.jsx)(Eu.Fragment, {
            children: Xu(uu.items, uu.ordered)
          }, Ru);
        case "quote":
          return (0, Qu.jsx)("blockquote", {
            children: uu.blocks.map(((uu, Ru) => Vu(uu, Ru)))
          }, Ru);
        case "code":
          return (0, Qu.jsx)("pre", {
            children: (0, Qu.jsx)("code", {
              children: uu.code
            })
          }, Ru);
        case "table":
          return (0, Qu.jsxs)("table", {
            children: [(0, Qu.jsx)("thead", {
              children: (0, Qu.jsx)("tr", {
                children: uu.header.map(((uu, Ru) => (0, Qu.jsx)("th", {
                  children: Nu(uu)
                }, Ru)))
              })
            }), (0, Qu.jsx)("tbody", {
              children: uu.rows.map(((uu, Ru) => (0, Qu.jsx)("tr", {
                children: uu.map(((uu, Ru) => (0, Qu.jsx)("td", {
                  children: Nu(uu)
                }, Ru)))
              }, Ru)))
            })]
          }, Ru);
        case "rule":
          return (0, Qu.jsx)("hr", {}, Ru)
      }
    }

    function ru(uu) {
      let {
        markdown: Ru
      } = uu, yu = 0;
      return (0, Qu.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Ku.v)(Ru).map(((uu, Ru) => {
          if ("list" !== uu.kind || !uu.ordered) return yu = 0, Vu(uu, Ru);
          const Ku = yu + 1;
          return yu += uu.items.length, (0, Qu.jsx)(Eu.Fragment, {
            children: Xu(uu.items, !0, Ku)
          }, Ru)
        }))
      })
    }
  },
  6276: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ju,
      i: () => Hu,
      h: () => bu,
      j: () => Su
    });
    var Eu = yu(1739),
      Ku = yu(6239),
      Qu = yu(4640);
    const mu = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Ju(uu) {
      return (0, Qu.i)(uu, mu, (Ru => !/^my/i.test(Ru[0]) || !/follow $/i.test(uu.slice(0, Ru.index)))).length > 0
    }
    const Nu = /\byou(?:r|'re|'ll)?\b/i,
      Xu = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Vu = 2;

    function ru(uu) {
      return function(uu) {
        const Ru = [];
        let yu = !1;
        for (const Eu of uu.split("\n")) {
          if (/^\s*(```|~~~)/.test(Eu)) {
            yu = !yu;
            continue
          }
          if (yu || /^\s*>/.test(Eu)) continue;
          const uu = Eu.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Ru.push(...(0, Ku.p)(uu))
        }
        return Ru
      }(uu).filter((uu => Ju(uu) || Xu.test(uu) && !Nu.test(uu)))
    }
    const Bu = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      xu = [{
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

    function Su(uu) {
      const Ru = xu.findIndex((Ru => Ru.name === uu));
      return -1 === Ru ? xu.length : Ru
    }
    const pu = 2500,
      Tu = 12e4;
    class Wu extends Error {
      constructor(uu) {
        super(`Studio AI chat ${uu}`), this.reason = uu
      }
    }

    function ju(uu, Ru) {
      const yu = new AbortController,
        Eu = () => {
          yu.abort()
        },
        Ku = setTimeout(Eu, uu);
      return null !== Ru && void 0 !== Ru && Ru.aborted && Eu(), null === Ru || void 0 === Ru || Ru.addEventListener("abort", Eu, {
        once: !0
      }), {
        signal: yu.signal,
        clear: () => {
          clearTimeout(Ku), null === Ru || void 0 === Ru || Ru.removeEventListener("abort", Eu)
        }
      }
    }

    function Hu(uu, Ru, yu) {
      return new Promise(((Ku, Qu) => {
        const mu = new AbortController,
          Ju = () => {
            mu.abort(), Qu((0, Eu.e)(yu))
          };
        if (null !== yu && void 0 !== yu && yu.aborted) return void Ju();
        null === yu || void 0 === yu || yu.addEventListener("abort", Ju, {
          once: !0
        });
        const Nu = xu.map((() => !1));
        let Xu = null;
        const Vu = xu.map((() => !1)),
          ru = xu.map((() => !1));
        xu.forEach(((Eu, Bu) => {
          const Su = ju(Tu, mu.signal);
          Cu(Eu, [{
            role: "user",
            content: uu
          }], Su.signal).then((uu => {
            mu.signal.aborted || ("busy" === uu || "failed" === uu ? (Vu[Bu] = "busy" === uu, ru[Bu] = !0) : null !== uu && (null === Xu || Bu < Xu.rank) && (Xu = {
              rank: Bu,
              answer: {
                text: uu.text,
                model: Eu.name
              }
            }, Ru(Xu.answer)))
          }), (uu => {
            mu.signal.aborted || (ru[Bu] = !0, console.warn(`Studio AI: ${Eu.name} couldn't be reached`, uu))
          })).finally((() => {
            Su.clear(), Nu[Bu] = !0, mu.signal.aborted || (() => {
              var uu, Ru;
              const Eu = null !== (uu = null === (Ru = Xu) || void 0 === Ru ? void 0 : Ru.rank) && void 0 !== uu ? uu : xu.length;
              Nu.slice(0, Eu).includes(!1) || (null === yu || void 0 === yu || yu.removeEventListener("abort", Ju), mu.abort(), null !== Xu ? Ku({
                ...Xu.answer,
                isFinal: !ru.slice(0, Xu.rank).includes(!0)
              }) : Qu(new Wu(Vu.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((uu => {
            console.error("Studio AI: showing an answer failed", uu)
          }))
        }))
      }))
    }

    function du(uu) {
      var Ru, yu;
      return "length" === (null === uu || void 0 === uu || null === (Ru = uu.choices) || void 0 === Ru || null === (yu = Ru[0]) || void 0 === yu ? void 0 : yu.finish_reason)
    }
    async function bu(uu, Ru, yu) {
      const Eu = xu.find((Ru => Ru.name === uu));
      if (void 0 === Eu) return "failed";
      const Ku = ju(Tu, yu);
      try {
        const uu = await Cu(Eu, Ru, Ku.signal);
        return null !== uu && "object" === typeof uu ? uu.isCutOff ? (console.warn(`Studio AI: ${Eu.name}'s answer was cut off at the token limit`), null) : {
          text: uu.text
        } : uu
      } finally {
        Ku.clear()
      }
    }
    async function Cu(uu, Ru, yu) {
      const Eu = await fetch(Bu, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: uu.name,
          messages: Ru,
          max_tokens: pu,
          temperature: uu.temperature,
          reasoning_effort: uu.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: yu
      });
      if (429 === Eu.status) return "busy";
      if (!Eu.ok) return console.warn(`Studio AI: ${uu.name} answered ${Eu.status}`), "failed";
      const Ku = await Eu.json().catch((() => null)),
        Qu = function(uu) {
          var Ru, yu, Eu;
          const Ku = null === uu || void 0 === uu || null === (Ru = uu.choices) || void 0 === Ru || null === (yu = Ru[0]) || void 0 === yu || null === (Eu = yu.message) || void 0 === Eu ? void 0 : Eu.content;
          if ("string" !== typeof Ku) return null;
          const Qu = Ku.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Qu ? null : Qu
        }(Ku);
      return null !== Qu && function(uu) {
        const Ru = ru(uu);
        return Ru.length >= Vu || Ru.some((uu => Ju(uu)))
      }(Qu) ? (console.warn(`Studio AI: ${uu.name} thought out loud instead of answering`), "failed") : null === Qu ? null : {
        text: Qu,
        isCutOff: du(Ku)
      }
    }
  },
  6239: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Tu,
      E: () => Hu,
      G: () => bu,
      J: () => ju,
      K: () => ru,
      O: () => Xu,
      Q: () => xu,
      e: () => Su,
      f: () => Ju,
      g: () => mu,
      i: () => pu,
      l: () => Bu,
      p: () => Vu,
      q: () => Qu,
      r: () => Ku,
      v: () => du,
      x: () => Cu
    });
    var Eu = yu(4640);
    const Ku = 2e3,
      Qu = 2e4;

    function mu(uu) {
      return uu.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Ju(uu) {
      return uu.replace(/\$/g, "\\$")
    }
    const Nu = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Xu(uu, Ru) {
      Nu.lastIndex = Ru;
      const yu = Nu.exec(uu);
      return yu.index + yu[0].length
    }

    function Vu(uu) {
      return (0, Eu.x)(uu, /\s+/g, (0, Eu.r)(".!?")).flatMap((uu => uu.split("\n")))
    }

    function ru(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru;
      const Eu = [...uu.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((uu => uu.index)),
        Ku = Eu.filter((uu => uu < Ru)),
        Qu = Eu.find((uu => uu >= yu));
      return [0 === Ku.length ? 0 : Ku.at(-1) + 1, void 0 === Qu ? uu.length : Qu + 1]
    }

    function Bu(uu, Ru) {
      const yu = uu.charCodeAt(Ru - 1);
      return uu.slice(0, Ru > 0 && Ru < uu.length && yu >= 55296 && yu <= 56319 ? Ru - 1 : Ru)
    }

    function xu(uu, Ru) {
      return `${Ru}${uu.replace(/\\/g,"\\\\").split(Ru).join(`\\${Ru}`)}${Ru}`
    }

    function Su(uu) {
      return uu.charAt(0).toUpperCase() + uu.slice(1)
    }

    function pu(uu) {
      return Math.round(uu).toLocaleString("en-US")
    }

    function Tu(uu) {
      return uu.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((uu => "" !== uu))
    }
    const Wu = 3;

    function ju(uu, Ru) {
      return Tu(uu).filter((uu => uu.length >= Wu && !/\d/.test(uu))).map((uu => `${uu} ${Ru}`))
    }

    function Hu(uu) {
      return uu.split(/[\s:_]+/).filter((uu => "" !== uu)).map(mu).join("[`:_\\s]+")
    }

    function du(uu) {
      return Tu(uu.split(".").pop())
    }

    function bu(uu) {
      return uu.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Cu(uu) {
      let Ru = null;
      return () => {
        const yu = Ru ??= uu();
        return yu.catch((() => {
          Ru === yu && (Ru = null)
        })), yu
      }
    }
  },
  4640: (uu, Ru, yu) => {
    function Eu(uu) {
      return {
        notAfter: uu
      }
    }
    yu.d(Ru, {
      e: () => Nu,
      i: () => Xu,
      j: () => Ju,
      l: () => Eu,
      o: () => Ku,
      p: () => Qu,
      r: () => mu,
      u: () => Vu,
      x: () => ru
    });
    const Ku = Eu("\\w$."),
      Qu = Eu("\\w.,");

    function mu(uu) {
      return Ru => Nu(Ru, uu)
    }

    function Ju(uu) {
      return Ru => !uu.test(Ru.input.slice(0, Ru.index))
    }

    function Nu(uu, Ru) {
      return uu.index > 0 && new RegExp(`[${Ru}]`).test(uu.input[uu.index - 1])
    }

    function Xu(uu, Ru, yu) {
      return function(uu) {
        return void 0 !== uu && "function" !== typeof uu
      }(yu) ? function(uu, Ru, yu) {
        const Eu = Ru.flags.replace(/[gy]/g, ""),
          Ku = new RegExp(`[^${yu}](?:${Ru.source})`, `${Eu}g`),
          Qu = [],
          mu = yu => {
            const Eu = yu.index + yu[0].length;
            return ("" === yu[0] ? Bu(uu, Ru, Eu) : Eu) - 1
          },
          Ju = new RegExp(`(?:${Ru.source})`, `${Eu}y`).exec(uu);
        if (Ju) {
          if (Qu.push(Ju), !Ru.global) return Qu;
          Ku.lastIndex = mu(Ju)
        }
        for (let Nu = Ku.exec(uu); Nu; Nu = Ku.exec(uu)) {
          const yu = Bu(uu, Ru, Nu.index) - Nu.index;
          if (Nu[0] = Nu[0].slice(yu), Nu.index += yu, Qu.push(Nu), !Ru.global) break;
          Ku.lastIndex = mu(Nu)
        }
        return Qu
      }(uu, Ru, yu.notAfter) : function(uu, Ru, yu) {
        const Eu = new RegExp(Ru.source, `${Ru.flags.replace(/[gy]/g,"")}g`),
          Ku = [];
        for (let Qu = Eu.exec(uu); Qu; Qu = Eu.exec(uu))
          if (!yu || yu(Qu)) {
            if (Ku.push(Qu), !Ru.global) break;
            "" === Qu[0] && (Eu.lastIndex = Bu(uu, Ru, Eu.lastIndex))
          } else Eu.lastIndex = Bu(uu, Ru, Qu.index);
        return Ku
      }(uu, Ru, yu)
    }

    function Vu(uu, Ru, yu, Eu) {
      let Ku = "",
        Qu = 0;
      for (const mu of Xu(uu, Ru, yu)) Ku += uu.slice(Qu, mu.index) + Eu(mu), Qu = mu.index + mu[0].length;
      return Ku + uu.slice(Qu)
    }

    function ru(uu, Ru, yu) {
      const Eu = [];
      let Ku = 0;
      for (const Qu of Xu(uu, Ru, yu)) Eu.push(uu.slice(Ku, Qu.index)), Ku = Qu.index + Qu[0].length;
      return [...Eu, uu.slice(Ku)]
    }

    function Bu(uu, Ru, yu) {
      var Eu;
      return yu + (Ru.unicode && (null !== (Eu = uu.codePointAt(yu)) && void 0 !== Eu ? Eu : 0) > 65535 ? 2 : 1)
    }
  },
  6278: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);