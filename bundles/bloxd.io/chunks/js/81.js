export const id = 81;
export const ids = [81];
export const modules = {
  4928: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => cu,
      d: () => su,
      h: () => Xu,
      j: () => hu,
      l: () => Yu,
      n: () => lu,
      r: () => Uu,
      u: () => Zu,
      y: () => Ou,
      z: () => Nu
    });
    const su = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Uu(uu) {
      try {
        return decodeURIComponent(uu.slice(1))
      } catch {
        return uu.slice(1)
      }
    }

    function Zu(uu) {
      return uu.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Xu = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${su.source}`, "g");

    function lu(uu, Eu) {
      return 2 === uu.length ? Eu.replace(/^ (.*) $/, "$1") : Eu
    }

    function qu(uu) {
      return "" === uu.trim()
    }

    function fu(uu) {
      const Eu = [];
      for (const ju of uu.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Eu.length > 0 && Eu[Eu.length - 1].endsWith("\\") ? Eu[Eu.length - 1] += `|${ju}` : Eu.push(ju);
      return Eu.map((uu => uu.trim().replaceAll("\\|", "|")))
    }
    const Cu = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function bu(uu) {
      const Eu = [],
        ju = [{
          indent: -1,
          items: Eu
        }];
      let su = null;
      for (const Uu of uu) {
        const uu = Uu.match(Cu);
        if (!uu) {
          su && (su.text += ` ${Uu.trim()}`);
          continue
        }
        const Eu = uu[1].replace(/\t/g, "  ").length;
        for (; Eu <= ju[ju.length - 1].indent;) ju.pop();
        su = {
          text: uu[3].trim(),
          children: []
        }, ju[ju.length - 1].items.push(su), ju.push({
          indent: Eu,
          items: su.children
        })
      }
      return Eu
    }

    function cu(uu) {
      const Eu = uu.replace(/\r\n/g, "\n").split("\n"),
        ju = [];
      let su = 0;
      for (; su < Eu.length;) {
        const uu = Eu[su];
        if (qu(uu)) {
          su++;
          continue
        }
        const Uu = uu.match(/^\s*```\s*(\w*)\s*$/);
        if (Uu) {
          const uu = [];
          for (su++; su < Eu.length && !/^\s*```\s*$/.test(Eu[su]);) uu.push(Eu[su]), su++;
          su++, ju.push({
            kind: "code",
            lang: Uu[1] || "text",
            code: uu.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Xu = uu.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Xu) {
          const uu = Xu[2].trim();
          ju.push({
            kind: "heading",
            level: Xu[1].length,
            text: uu,
            anchor: Zu(uu)
          }), su++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(uu)) {
          ju.push({
            kind: "rule"
          }), su++;
          continue
        }
        if (uu.trim().startsWith("|") && su + 1 < Eu.length && /^\s*\|[\s:|-]+\|\s*$/.test(Eu[su + 1])) {
          const Uu = fu(uu),
            Zu = [];
          for (su += 2; su < Eu.length && Eu[su].trim().startsWith("|");) Zu.push(fu(Eu[su])), su++;
          ju.push({
            kind: "table",
            header: Uu,
            rows: Zu
          });
          continue
        }
        if (uu.startsWith(">")) {
          const uu = [];
          for (; su < Eu.length && Eu[su].startsWith(">");) uu.push(Eu[su].replace(/^>\s?/, "")), su++;
          ju.push({
            kind: "quote",
            blocks: cu(uu.join("\n"))
          });
          continue
        }
        if (Cu.test(uu)) {
          const Uu = [],
            Zu = /^\s*\d+\./.test(uu);
          for (; su < Eu.length && !qu(Eu[su]) && (Cu.test(Eu[su]) || /^\s+\S/.test(Eu[su]));) Uu.push(Eu[su]), su++;
          ju.push({
            kind: "list",
            ordered: Zu,
            items: bu(Uu)
          });
          continue
        }
        const lu = [];
        for (; su < Eu.length && !qu(Eu[su]) && !/^\s*```/.test(Eu[su]) && !/^#{1,6}\s/.test(Eu[su]) && !Eu[su].startsWith(">") && !Cu.test(Eu[su]) && (!Eu[su].trim().startsWith("|") || 0 !== lu.length);) lu.push(Eu[su].trim()), su++;
        0 === lu.length && (lu.push(Eu[su].trim()), su++), ju.push({
          kind: "paragraph",
          text: lu.join(" ")
        })
      }
      return ju
    }

    function Nu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ju = cu(uu);
      let su = "";
      const Uu = [],
        Zu = [],
        Xu = new Map;
      for (const fu of ju) {
        if ("heading" === fu.kind) {
          var lu;
          const uu = (null !== (lu = Xu.get(fu.anchor)) && void 0 !== lu ? lu : 0) + 1;
          Xu.set(fu.anchor, uu), uu > 1 && (fu.anchor = `${fu.anchor}-${uu}`)
        }
        if ("heading" === fu.kind && 1 === fu.level && !su) {
          su = fu.text;
          continue
        }
        if ("heading" === fu.kind && fu.level <= Eu) {
          Zu.push({
            heading: fu,
            blocks: []
          });
          continue
        }
        const uu = Zu.at(-1);
        uu ? uu.blocks.push(fu) : Uu.push(fu)
      }
      const qu = uu => {
        for (;
          "rule" === (null === (Eu = uu.at(-1)) || void 0 === Eu ? void 0 : Eu.kind);) {
          var Eu;
          uu.pop()
        }
      };
      qu(Uu);
      for (const fu of Zu) qu(fu.blocks);
      return {
        title: su,
        intro: Uu,
        sections: Zu
      }
    }

    function Ou(uu) {
      return [{
        heading: null,
        blocks: uu.intro
      }, ...uu.sections.map((uu => ({
        heading: uu.heading,
        blocks: uu.blocks
      })))]
    }

    function Yu(uu) {
      return uu.flatMap((uu => "code" === uu.kind ? [uu] : "quote" === uu.kind ? Yu(uu.blocks) : []))
    }

    function hu(uu) {
      switch (uu.kind) {
        case "heading":
        case "paragraph":
          return uu.text;
        case "code":
          return uu.code;
        case "table":
          return [uu.header, ...uu.rows].map((uu => uu.join(" "))).join(" ");
        case "list": {
          const Eu = uu => uu.map((uu => `${uu.text} ${Eu(uu.children)}`)).join(" ");
          return Eu(uu.items)
        }
        case "quote":
          return uu.blocks.map(hu).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6705: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu,
      d: () => Xu,
      f: () => lu
    });
    ju(6700);
    var su = ju(58),
      Uu = ju(4928),
      Zu = ju(1154);
    const Xu = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function lu(uu, Eu) {
      return uu === Eu ? uu : `${uu} (${Eu})`
    }

    function qu(uu) {
      const Eu = [];
      let ju = 0;
      for (const su of uu.matchAll(Xu)) {
        su.index > ju && Eu.push(uu.slice(ju, su.index));
        const [, Uu, Xu, qu, fu, Cu, bu] = su;
        void 0 !== Uu ? Eu.push(lu(Uu, Xu)) : void 0 !== qu || void 0 !== fu ? Eu.push((0, Zu.jsx)("strong", {
          children: null !== qu && void 0 !== qu ? qu : fu
        }, su.index)) : void 0 !== Cu ? Eu.push((0, Zu.jsx)("em", {
          children: Cu
        }, su.index)) : Eu.push((0, Zu.jsx)("code", {
          children: bu
        }, su.index)), ju = su.index + su[0].length
      }
      return ju < uu.length && Eu.push(uu.slice(ju)), Eu
    }

    function fu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const su = uu.map(((uu, Eu) => (0, Zu.jsxs)("li", {
        children: [qu(uu.text), uu.children.length > 0 && fu(uu.children, !1)]
      }, Eu)));
      return Eu ? (0, Zu.jsx)("ol", {
        start: ju,
        children: su
      }) : (0, Zu.jsx)("ul", {
        children: su
      })
    }

    function Cu(uu, Eu) {
      switch (uu.kind) {
        case "heading":
          return uu.level <= 2 ? (0, Zu.jsx)("h3", {
            children: qu(uu.text)
          }, Eu) : (0, Zu.jsx)("h4", {
            children: qu(uu.text)
          }, Eu);
        case "paragraph":
          return (0, Zu.jsx)("p", {
            children: qu(uu.text)
          }, Eu);
        case "list":
          return (0, Zu.jsx)(su.Fragment, {
            children: fu(uu.items, uu.ordered)
          }, Eu);
        case "quote":
          return (0, Zu.jsx)("blockquote", {
            children: uu.blocks.map(((uu, Eu) => Cu(uu, Eu)))
          }, Eu);
        case "code":
          return (0, Zu.jsx)("pre", {
            children: (0, Zu.jsx)("code", {
              children: uu.code
            })
          }, Eu);
        case "table":
          return (0, Zu.jsxs)("table", {
            children: [(0, Zu.jsx)("thead", {
              children: (0, Zu.jsx)("tr", {
                children: uu.header.map(((uu, Eu) => (0, Zu.jsx)("th", {
                  children: qu(uu)
                }, Eu)))
              })
            }), (0, Zu.jsx)("tbody", {
              children: uu.rows.map(((uu, Eu) => (0, Zu.jsx)("tr", {
                children: uu.map(((uu, Eu) => (0, Zu.jsx)("td", {
                  children: qu(uu)
                }, Eu)))
              }, Eu)))
            })]
          }, Eu);
        case "rule":
          return (0, Zu.jsx)("hr", {}, Eu)
      }
    }

    function bu(uu) {
      let {
        markdown: Eu
      } = uu, ju = 0;
      return (0, Zu.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Uu.B)(Eu).map(((uu, Eu) => {
          if ("list" !== uu.kind || !uu.ordered) return ju = 0, Cu(uu, Eu);
          const Uu = ju + 1;
          return ju += uu.items.length, (0, Zu.jsx)(su.Fragment, {
            children: fu(uu.items, !0, Uu)
          }, Eu)
        }))
      })
    }
  },
  6691: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => gu,
      j: () => Mu,
      f: () => Gu,
      n: () => Ou
    });
    var su = ju(1259),
      Uu = ju(6648),
      Zu = ju(5041);
    const Xu = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function lu(uu) {
      return (0, Zu.e)(uu, Xu, (Eu => !/^my/i.test(Eu[0]) || !/follow $/i.test(uu.slice(0, Eu.index)))).length > 0
    }
    const qu = /\byou(?:r|'re|'ll)?\b/i,
      fu = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Cu = 2;

    function bu(uu) {
      return function(uu) {
        const Eu = [];
        let ju = !1;
        for (const su of uu.split("\n")) {
          if (/^\s*(```|~~~)/.test(su)) {
            ju = !ju;
            continue
          }
          if (ju || /^\s*>/.test(su)) continue;
          const uu = su.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Eu.push(...(0, Uu.n)(uu))
        }
        return Eu
      }(uu).filter((uu => lu(uu) || fu.test(uu) && !qu.test(uu)))
    }
    const cu = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Nu = [{
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

    function Ou(uu) {
      const Eu = Nu.findIndex((Eu => Eu.name === uu));
      return -1 === Eu ? Nu.length : Eu
    }
    const Yu = 2500,
      hu = 12e4;
    class Du extends Error {
      constructor(uu) {
        super(`Studio AI chat ${uu}`), this.reason = uu
      }
    }

    function gu(uu, Eu) {
      const ju = new AbortController,
        su = () => {
          ju.abort()
        },
        Uu = setTimeout(su, uu);
      return null !== Eu && void 0 !== Eu && Eu.aborted && su(), null === Eu || void 0 === Eu || Eu.addEventListener("abort", su, {
        once: !0
      }), {
        signal: ju.signal,
        clear: () => {
          clearTimeout(Uu), null === Eu || void 0 === Eu || Eu.removeEventListener("abort", su)
        }
      }
    }

    function Mu(uu, Eu, ju) {
      return new Promise(((Uu, Zu) => {
        const Xu = new AbortController,
          lu = () => {
            Xu.abort(), Zu((0, su.f)(ju))
          };
        if (null !== ju && void 0 !== ju && ju.aborted) return void lu();
        null === ju || void 0 === ju || ju.addEventListener("abort", lu, {
          once: !0
        });
        const qu = Nu.map((() => !1));
        let fu = null;
        const Cu = Nu.map((() => !1)),
          bu = Nu.map((() => !1));
        Nu.forEach(((su, cu) => {
          const Ou = gu(hu, Xu.signal);
          pu(su, [{
            role: "user",
            content: uu
          }], Ou.signal).then((uu => {
            Xu.signal.aborted || ("busy" === uu || "failed" === uu ? (Cu[cu] = "busy" === uu, bu[cu] = !0) : null !== uu && (null === fu || cu < fu.rank) && (fu = {
              rank: cu,
              answer: {
                text: uu.text,
                model: su.name
              }
            }, Eu(fu.answer)))
          }), (uu => {
            Xu.signal.aborted || (bu[cu] = !0, console.warn(`Studio AI: ${su.name} couldn't be reached`, uu))
          })).finally((() => {
            Ou.clear(), qu[cu] = !0, Xu.signal.aborted || (() => {
              var uu, Eu;
              const su = null !== (uu = null === (Eu = fu) || void 0 === Eu ? void 0 : Eu.rank) && void 0 !== uu ? uu : Nu.length;
              qu.slice(0, su).includes(!1) || (null === ju || void 0 === ju || ju.removeEventListener("abort", lu), Xu.abort(), null !== fu ? Uu({
                ...fu.answer,
                isFinal: !bu.slice(0, fu.rank).includes(!0)
              }) : Zu(new Du(Cu.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((uu => {
            console.error("Studio AI: showing an answer failed", uu)
          }))
        }))
      }))
    }

    function eu(uu) {
      var Eu, ju;
      return "length" === (null === uu || void 0 === uu || null === (Eu = uu.choices) || void 0 === Eu || null === (ju = Eu[0]) || void 0 === ju ? void 0 : ju.finish_reason)
    }
    async function Gu(uu, Eu, ju) {
      const su = Nu.find((Eu => Eu.name === uu));
      if (void 0 === su) return "failed";
      const Uu = gu(hu, ju);
      try {
        const uu = await pu(su, Eu, Uu.signal);
        return null !== uu && "object" === typeof uu ? uu.isCutOff ? (console.warn(`Studio AI: ${su.name}'s answer was cut off at the token limit`), null) : {
          text: uu.text
        } : uu
      } finally {
        Uu.clear()
      }
    }
    async function pu(uu, Eu, ju) {
      const su = await fetch(cu, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: uu.name,
          messages: Eu,
          max_tokens: Yu,
          temperature: uu.temperature,
          reasoning_effort: uu.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: ju
      });
      if (429 === su.status) return "busy";
      if (!su.ok) return console.warn(`Studio AI: ${uu.name} answered ${su.status}`), "failed";
      const Uu = await su.json().catch((() => null)),
        Zu = function(uu) {
          var Eu, ju, su;
          const Uu = null === uu || void 0 === uu || null === (Eu = uu.choices) || void 0 === Eu || null === (ju = Eu[0]) || void 0 === ju || null === (su = ju.message) || void 0 === su ? void 0 : su.content;
          if ("string" !== typeof Uu) return null;
          const Zu = Uu.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Zu ? null : Zu
        }(Uu);
      return null !== Zu && function(uu) {
        const Eu = bu(uu);
        return Eu.length >= Cu || Eu.some((uu => lu(uu)))
      }(Zu) ? (console.warn(`Studio AI: ${uu.name} thought out loud instead of answering`), "failed") : null === Zu ? null : {
        text: Zu,
        isCutOff: eu(Uu)
      }
    }
  },
  6648: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => pu,
      D: () => hu,
      E: () => Mu,
      F: () => Gu,
      J: () => gu,
      L: () => bu,
      M: () => fu,
      N: () => Nu,
      b: () => Ou,
      d: () => lu,
      g: () => Xu,
      k: () => Yu,
      m: () => cu,
      n: () => Cu,
      q: () => Zu,
      u: () => Uu,
      x: () => eu
    });
    var su = ju(5041);
    const Uu = 2e3,
      Zu = 2e4;

    function Xu(uu) {
      return uu.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function lu(uu) {
      return uu.replace(/\$/g, "\\$")
    }
    const qu = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function fu(uu, Eu) {
      qu.lastIndex = Eu;
      const ju = qu.exec(uu);
      return ju.index + ju[0].length
    }

    function Cu(uu) {
      return (0, su.x)(uu, /\s+/g, (0, su.q)(".!?")).flatMap((uu => uu.split("\n")))
    }

    function bu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu;
      const su = [...uu.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((uu => uu.index)),
        Uu = su.filter((uu => uu < Eu)),
        Zu = su.find((uu => uu >= ju));
      return [0 === Uu.length ? 0 : Uu.at(-1) + 1, void 0 === Zu ? uu.length : Zu + 1]
    }

    function cu(uu, Eu) {
      const ju = uu.charCodeAt(Eu - 1);
      return uu.slice(0, Eu > 0 && Eu < uu.length && ju >= 55296 && ju <= 56319 ? Eu - 1 : Eu)
    }

    function Nu(uu, Eu) {
      return `${Eu}${uu.replace(/\\/g,"\\\\").split(Eu).join(`\\${Eu}`)}${Eu}`
    }

    function Ou(uu) {
      return uu.charAt(0).toUpperCase() + uu.slice(1)
    }

    function Yu(uu) {
      return Math.round(uu).toLocaleString("en-US")
    }

    function hu(uu) {
      return uu.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((uu => "" !== uu))
    }
    const Du = 3;

    function gu(uu, Eu) {
      return hu(uu).filter((uu => uu.length >= Du && !/\d/.test(uu))).map((uu => `${uu} ${Eu}`))
    }

    function Mu(uu) {
      return uu.split(/[\s:_]+/).filter((uu => "" !== uu)).map(Xu).join("[`:_\\s]+")
    }

    function eu(uu) {
      return hu(uu.split(".").pop())
    }

    function Gu(uu) {
      return uu.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function pu(uu) {
      let Eu = null;
      return () => {
        const ju = Eu ??= uu();
        return ju.catch((() => {
          Eu === ju && (Eu = null)
        })), ju
      }
    }
  },
  5041: (uu, Eu, ju) => {
    function su(uu) {
      return {
        notAfter: uu
      }
    }
    ju.d(Eu, {
      d: () => qu,
      e: () => fu,
      h: () => lu,
      i: () => su,
      j: () => Uu,
      n: () => Zu,
      q: () => Xu,
      u: () => Cu,
      x: () => bu
    });
    const Uu = su("\\w$."),
      Zu = su("\\w.,");

    function Xu(uu) {
      return Eu => qu(Eu, uu)
    }

    function lu(uu) {
      return Eu => !uu.test(Eu.input.slice(0, Eu.index))
    }

    function qu(uu, Eu) {
      return uu.index > 0 && new RegExp(`[${Eu}]`).test(uu.input[uu.index - 1])
    }

    function fu(uu, Eu, ju) {
      return function(uu) {
        return void 0 !== uu && "function" !== typeof uu
      }(ju) ? function(uu, Eu, ju) {
        const su = Eu.flags.replace(/[gy]/g, ""),
          Uu = new RegExp(`[^${ju}](?:${Eu.source})`, `${su}g`),
          Zu = [],
          Xu = ju => {
            const su = ju.index + ju[0].length;
            return ("" === ju[0] ? cu(uu, Eu, su) : su) - 1
          },
          lu = new RegExp(`(?:${Eu.source})`, `${su}y`).exec(uu);
        if (lu) {
          if (Zu.push(lu), !Eu.global) return Zu;
          Uu.lastIndex = Xu(lu)
        }
        for (let qu = Uu.exec(uu); qu; qu = Uu.exec(uu)) {
          const ju = cu(uu, Eu, qu.index) - qu.index;
          if (qu[0] = qu[0].slice(ju), qu.index += ju, Zu.push(qu), !Eu.global) break;
          Uu.lastIndex = Xu(qu)
        }
        return Zu
      }(uu, Eu, ju.notAfter) : function(uu, Eu, ju) {
        const su = new RegExp(Eu.source, `${Eu.flags.replace(/[gy]/g,"")}g`),
          Uu = [];
        for (let Zu = su.exec(uu); Zu; Zu = su.exec(uu))
          if (!ju || ju(Zu)) {
            if (Uu.push(Zu), !Eu.global) break;
            "" === Zu[0] && (su.lastIndex = cu(uu, Eu, su.lastIndex))
          } else su.lastIndex = cu(uu, Eu, Zu.index);
        return Uu
      }(uu, Eu, ju)
    }

    function Cu(uu, Eu, ju, su) {
      let Uu = "",
        Zu = 0;
      for (const Xu of fu(uu, Eu, ju)) Uu += uu.slice(Zu, Xu.index) + su(Xu), Zu = Xu.index + Xu[0].length;
      return Uu + uu.slice(Zu)
    }

    function bu(uu, Eu, ju) {
      const su = [];
      let Uu = 0;
      for (const Zu of fu(uu, Eu, ju)) su.push(uu.slice(Uu, Zu.index)), Uu = Zu.index + Zu[0].length;
      return [...su, uu.slice(Uu)]
    }

    function cu(uu, Eu, ju) {
      var su;
      return ju + (Eu.unicode && (null !== (su = uu.codePointAt(ju)) && void 0 !== su ? su : 0) > 65535 ? 2 : 1)
    }
  },
  6700: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);