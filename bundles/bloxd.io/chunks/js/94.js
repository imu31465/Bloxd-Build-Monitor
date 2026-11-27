export const id = 94;
export const ids = [94];
export const modules = {
  5220: (ee, ie, He) => {
    He.d(ie, {
      C: () => ke,
      e: () => ye,
      h: () => Ke,
      i: () => pe,
      l: () => Te,
      n: () => Ue,
      q: () => be,
      t: () => Me,
      x: () => fe,
      y: () => qe
    });
    const ye = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function be(ee) {
      try {
        return decodeURIComponent(ee.slice(1))
      } catch {
        return ee.slice(1)
      }
    }

    function Me(ee) {
      return ee.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Ke = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${ye.source}`, "g");

    function Ue(ee, ie) {
      return 2 === ee.length ? ie.replace(/^ (.*) $/, "$1") : ie
    }

    function Fe(ee) {
      return "" === ee.trim()
    }

    function Je(ee) {
      const ie = [];
      for (const He of ee.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ie.length > 0 && ie[ie.length - 1].endsWith("\\") ? ie[ie.length - 1] += `|${He}` : ie.push(He);
      return ie.map((ee => ee.trim().replaceAll("\\|", "|")))
    }
    const oe = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Re(ee) {
      const ie = [],
        He = [{
          indent: -1,
          items: ie
        }];
      let ye = null;
      for (const be of ee) {
        const ee = be.match(oe);
        if (!ee) {
          ye && (ye.text += ` ${be.trim()}`);
          continue
        }
        const ie = ee[1].replace(/\t/g, "  ").length;
        for (; ie <= He[He.length - 1].indent;) He.pop();
        ye = {
          text: ee[3].trim(),
          children: []
        }, He[He.length - 1].items.push(ye), He.push({
          indent: ie,
          items: ye.children
        })
      }
      return ie
    }

    function ke(ee) {
      const ie = ee.replace(/\r\n/g, "\n").split("\n"),
        He = [];
      let ye = 0;
      for (; ye < ie.length;) {
        const ee = ie[ye];
        if (Fe(ee)) {
          ye++;
          continue
        }
        const be = ee.match(/^\s*```\s*(\w*)\s*$/);
        if (be) {
          const ee = [];
          for (ye++; ye < ie.length && !/^\s*```\s*$/.test(ie[ye]);) ee.push(ie[ye]), ye++;
          ye++, He.push({
            kind: "code",
            lang: be[1] || "text",
            code: ee.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Ke = ee.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Ke) {
          const ee = Ke[2].trim();
          He.push({
            kind: "heading",
            level: Ke[1].length,
            text: ee,
            anchor: Me(ee)
          }), ye++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(ee)) {
          He.push({
            kind: "rule"
          }), ye++;
          continue
        }
        if (ee.trim().startsWith("|") && ye + 1 < ie.length && /^\s*\|[\s:|-]+\|\s*$/.test(ie[ye + 1])) {
          const be = Je(ee),
            Me = [];
          for (ye += 2; ye < ie.length && ie[ye].trim().startsWith("|");) Me.push(Je(ie[ye])), ye++;
          He.push({
            kind: "table",
            header: be,
            rows: Me
          });
          continue
        }
        if (ee.startsWith(">")) {
          const ee = [];
          for (; ye < ie.length && ie[ye].startsWith(">");) ee.push(ie[ye].replace(/^>\s?/, "")), ye++;
          He.push({
            kind: "quote",
            blocks: ke(ee.join("\n"))
          });
          continue
        }
        if (oe.test(ee)) {
          const be = [],
            Me = /^\s*\d+\./.test(ee);
          for (; ye < ie.length && !Fe(ie[ye]) && (oe.test(ie[ye]) || /^\s+\S/.test(ie[ye]));) be.push(ie[ye]), ye++;
          He.push({
            kind: "list",
            ordered: Me,
            items: Re(be)
          });
          continue
        }
        const Ue = [];
        for (; ye < ie.length && !Fe(ie[ye]) && !/^\s*```/.test(ie[ye]) && !/^#{1,6}\s/.test(ie[ye]) && !ie[ye].startsWith(">") && !oe.test(ie[ye]) && (!ie[ye].trim().startsWith("|") || 0 !== Ue.length);) Ue.push(ie[ye].trim()), ye++;
        0 === Ue.length && (Ue.push(ie[ye].trim()), ye++), He.push({
          kind: "paragraph",
          text: Ue.join(" ")
        })
      }
      return He
    }

    function qe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const He = ke(ee);
      let ye = "";
      const be = [],
        Me = [],
        Ke = new Map;
      for (const Je of He) {
        if ("heading" === Je.kind) {
          var Ue;
          const ee = (null !== (Ue = Ke.get(Je.anchor)) && void 0 !== Ue ? Ue : 0) + 1;
          Ke.set(Je.anchor, ee), ee > 1 && (Je.anchor = `${Je.anchor}-${ee}`)
        }
        if ("heading" === Je.kind && 1 === Je.level && !ye) {
          ye = Je.text;
          continue
        }
        if ("heading" === Je.kind && Je.level <= ie) {
          Me.push({
            heading: Je,
            blocks: []
          });
          continue
        }
        const ee = Me.at(-1);
        ee ? ee.blocks.push(Je) : be.push(Je)
      }
      const Fe = ee => {
        for (;
          "rule" === (null === (ie = ee.at(-1)) || void 0 === ie ? void 0 : ie.kind);) {
          var ie;
          ee.pop()
        }
      };
      Fe(be);
      for (const Je of Me) Fe(Je.blocks);
      return {
        title: ye,
        intro: be,
        sections: Me
      }
    }

    function fe(ee) {
      return [{
        heading: null,
        blocks: ee.intro
      }, ...ee.sections.map((ee => ({
        heading: ee.heading,
        blocks: ee.blocks
      })))]
    }

    function Te(ee) {
      return ee.flatMap((ee => "code" === ee.kind ? [ee] : "quote" === ee.kind ? Te(ee.blocks) : []))
    }

    function pe(ee) {
      switch (ee.kind) {
        case "heading":
        case "paragraph":
          return ee.text;
        case "code":
          return ee.code;
        case "table":
          return [ee.header, ...ee.rows].map((ee => ee.join(" "))).join(" ");
        case "list": {
          const ie = ee => ee.map((ee => `${ee.text} ${ie(ee.children)}`)).join(" ");
          return ie(ee.items)
        }
        case "quote":
          return ee.blocks.map(pe).join(" ");
        case "rule":
          return ""
      }
    }
  },
  7107: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      f: () => Ke,
      j: () => Ue
    });
    He(7099);
    var ye = He(59),
      be = He(5220),
      Me = He(1228);
    const Ke = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Ue(ee, ie) {
      return ee === ie ? ee : `${ee} (${ie})`
    }

    function Fe(ee) {
      const ie = [];
      let He = 0;
      for (const ye of ee.matchAll(Ke)) {
        ye.index > He && ie.push(ee.slice(He, ye.index));
        const [, be, Ke, Fe, Je, oe, Re] = ye;
        void 0 !== be ? ie.push(Ue(be, Ke)) : void 0 !== Fe || void 0 !== Je ? ie.push((0, Me.jsx)("strong", {
          children: null !== Fe && void 0 !== Fe ? Fe : Je
        }, ye.index)) : void 0 !== oe ? ie.push((0, Me.jsx)("em", {
          children: oe
        }, ye.index)) : ie.push((0, Me.jsx)("code", {
          children: Re
        }, ye.index)), He = ye.index + ye[0].length
      }
      return He < ee.length && ie.push(ee.slice(He)), ie
    }

    function Je(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const ye = ee.map(((ee, ie) => (0, Me.jsxs)("li", {
        children: [Fe(ee.text), ee.children.length > 0 && Je(ee.children, !1)]
      }, ie)));
      return ie ? (0, Me.jsx)("ol", {
        start: He,
        children: ye
      }) : (0, Me.jsx)("ul", {
        children: ye
      })
    }

    function oe(ee, ie) {
      switch (ee.kind) {
        case "heading":
          return ee.level <= 2 ? (0, Me.jsx)("h3", {
            children: Fe(ee.text)
          }, ie) : (0, Me.jsx)("h4", {
            children: Fe(ee.text)
          }, ie);
        case "paragraph":
          return (0, Me.jsx)("p", {
            children: Fe(ee.text)
          }, ie);
        case "list":
          return (0, Me.jsx)(ye.Fragment, {
            children: Je(ee.items, ee.ordered)
          }, ie);
        case "quote":
          return (0, Me.jsx)("blockquote", {
            children: ee.blocks.map(((ee, ie) => oe(ee, ie)))
          }, ie);
        case "code":
          return (0, Me.jsx)("pre", {
            children: (0, Me.jsx)("code", {
              children: ee.code
            })
          }, ie);
        case "table":
          return (0, Me.jsxs)("table", {
            children: [(0, Me.jsx)("thead", {
              children: (0, Me.jsx)("tr", {
                children: ee.header.map(((ee, ie) => (0, Me.jsx)("th", {
                  children: Fe(ee)
                }, ie)))
              })
            }), (0, Me.jsx)("tbody", {
              children: ee.rows.map(((ee, ie) => (0, Me.jsx)("tr", {
                children: ee.map(((ee, ie) => (0, Me.jsx)("td", {
                  children: Fe(ee)
                }, ie)))
              }, ie)))
            })]
          }, ie);
        case "rule":
          return (0, Me.jsx)("hr", {}, ie)
      }
    }

    function Re(ee) {
      let {
        markdown: ie
      } = ee, He = 0;
      return (0, Me.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, be.C)(ie).map(((ee, ie) => {
          if ("list" !== ee.kind || !ee.ordered) return He = 0, oe(ee, ie);
          const be = He + 1;
          return He += ee.items.length, (0, Me.jsx)(ye.Fragment, {
            children: Je(ee.items, !0, be)
          }, ie)
        }))
      })
    }
  },
  7094: (ee, ie, He) => {
    He.d(ie, {
      e: () => ze,
      i: () => Be,
      g: () => ge,
      j: () => fe
    });
    var ye = He(1155),
      be = He(7052),
      Me = He(5343);
    const Ke = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Ue(ee) {
      return (0, Me.g)(ee, Ke, (ie => !/^my/i.test(ie[0]) || !/follow $/i.test(ee.slice(0, ie.index)))).length > 0
    }
    const Fe = /\byou(?:r|'re|'ll)?\b/i,
      Je = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      oe = 2;

    function Re(ee) {
      return function(ee) {
        const ie = [];
        let He = !1;
        for (const ye of ee.split("\n")) {
          if (/^\s*(```|~~~)/.test(ye)) {
            He = !He;
            continue
          }
          if (He || /^\s*>/.test(ye)) continue;
          const ee = ye.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          ie.push(...(0, be.q)(ee))
        }
        return ie
      }(ee).filter((ee => Ue(ee) || Je.test(ee) && !Fe.test(ee)))
    }
    const ke = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      qe = [{
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

    function fe(ee) {
      const ie = qe.findIndex((ie => ie.name === ee));
      return -1 === ie ? qe.length : ie
    }
    const Te = 2500,
      pe = 12e4;
    class Xe extends Error {
      constructor(ee) {
        super(`Studio AI chat ${ee}`), this.reason = ee
      }
    }

    function ze(ee, ie) {
      const He = new AbortController,
        ye = () => {
          He.abort()
        },
        be = setTimeout(ye, ee);
      return null !== ie && void 0 !== ie && ie.aborted && ye(), null === ie || void 0 === ie || ie.addEventListener("abort", ye, {
        once: !0
      }), {
        signal: He.signal,
        clear: () => {
          clearTimeout(be), null === ie || void 0 === ie || ie.removeEventListener("abort", ye)
        }
      }
    }

    function Be(ee, ie, He) {
      return new Promise(((be, Me) => {
        const Ke = new AbortController,
          Ue = () => {
            Ke.abort(), Me((0, ye.f)(He))
          };
        if (null !== He && void 0 !== He && He.aborted) return void Ue();
        null === He || void 0 === He || He.addEventListener("abort", Ue, {
          once: !0
        });
        const Fe = qe.map((() => !1));
        let Je = null;
        const oe = qe.map((() => !1)),
          Re = qe.map((() => !1));
        qe.forEach(((ye, ke) => {
          const fe = ze(pe, Ke.signal);
          Oe(ye, [{
            role: "user",
            content: ee
          }], fe.signal).then((ee => {
            Ke.signal.aborted || ("busy" === ee || "failed" === ee ? (oe[ke] = "busy" === ee, Re[ke] = !0) : null !== ee && (null === Je || ke < Je.rank) && (Je = {
              rank: ke,
              answer: {
                text: ee.text,
                model: ye.name
              }
            }, ie(Je.answer)))
          }), (ee => {
            Ke.signal.aborted || (Re[ke] = !0, console.warn(`Studio AI: ${ye.name} couldn't be reached`, ee))
          })).finally((() => {
            fe.clear(), Fe[ke] = !0, Ke.signal.aborted || (() => {
              var ee, ie;
              const ye = null !== (ee = null === (ie = Je) || void 0 === ie ? void 0 : ie.rank) && void 0 !== ee ? ee : qe.length;
              Fe.slice(0, ye).includes(!1) || (null === He || void 0 === He || He.removeEventListener("abort", Ue), Ke.abort(), null !== Je ? be({
                ...Je.answer,
                isFinal: !Re.slice(0, Je.rank).includes(!0)
              }) : Me(new Xe(oe.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((ee => {
            console.error("Studio AI: showing an answer failed", ee)
          }))
        }))
      }))
    }

    function Ee(ee) {
      var ie, He;
      return "length" === (null === ee || void 0 === ee || null === (ie = ee.choices) || void 0 === ie || null === (He = ie[0]) || void 0 === He ? void 0 : He.finish_reason)
    }
    async function ge(ee, ie, He) {
      const ye = qe.find((ie => ie.name === ee));
      if (void 0 === ye) return "failed";
      const be = ze(pe, He);
      try {
        const ee = await Oe(ye, ie, be.signal);
        return null !== ee && "object" === typeof ee ? ee.isCutOff ? (console.warn(`Studio AI: ${ye.name}'s answer was cut off at the token limit`), null) : {
          text: ee.text
        } : ee
      } finally {
        be.clear()
      }
    }
    async function Oe(ee, ie, He) {
      const ye = await fetch(ke, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: ee.name,
          messages: ie,
          max_tokens: Te,
          temperature: ee.temperature,
          reasoning_effort: ee.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: He
      });
      if (429 === ye.status) return "busy";
      if (!ye.ok) return console.warn(`Studio AI: ${ee.name} answered ${ye.status}`), "failed";
      const be = await ye.json().catch((() => null)),
        Me = function(ee) {
          var ie, He, ye;
          const be = null === ee || void 0 === ee || null === (ie = ee.choices) || void 0 === ie || null === (He = ie[0]) || void 0 === He || null === (ye = He.message) || void 0 === ye ? void 0 : ye.content;
          if ("string" !== typeof be) return null;
          const Me = be.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Me ? null : Me
        }(be);
      return null !== Me && function(ee) {
        const ie = Re(ee);
        return ie.length >= oe || ie.some((ee => Ue(ee)))
      }(Me) ? (console.warn(`Studio AI: ${ee.name} thought out loud instead of answering`), "failed") : null === Me ? null : {
        text: Me,
        isCutOff: Ee(be)
      }
    }
  },
  7052: (ee, ie, He) => {
    He.d(ie, {
      D: () => pe,
      G: () => Be,
      H: () => ge,
      I: () => ze,
      J: () => Re,
      K: () => Je,
      L: () => qe,
      b: () => fe,
      e: () => Ue,
      f: () => Ke,
      j: () => Te,
      n: () => ke,
      q: () => oe,
      s: () => Me,
      t: () => be,
      v: () => Ee,
      z: () => Oe
    });
    var ye = He(5343);
    const be = 2e3,
      Me = 2e4;

    function Ke(ee) {
      return ee.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Ue(ee) {
      return ee.replace(/\$/g, "\\$")
    }
    const Fe = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Je(ee, ie) {
      Fe.lastIndex = ie;
      const He = Fe.exec(ee);
      return He.index + He[0].length
    }

    function oe(ee) {
      return (0, ye.v)(ee, /\s+/g, (0, ye.s)(".!?")).flatMap((ee => ee.split("\n")))
    }

    function Re(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie;
      const ye = [...ee.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((ee => ee.index)),
        be = ye.filter((ee => ee < ie)),
        Me = ye.find((ee => ee >= He));
      return [0 === be.length ? 0 : be.at(-1) + 1, void 0 === Me ? ee.length : Me + 1]
    }

    function ke(ee, ie) {
      const He = ee.charCodeAt(ie - 1);
      return ee.slice(0, ie > 0 && ie < ee.length && He >= 55296 && He <= 56319 ? ie - 1 : ie)
    }

    function qe(ee, ie) {
      return `${ie}${ee.replace(/\\/g,"\\\\").split(ie).join(`\\${ie}`)}${ie}`
    }

    function fe(ee) {
      return ee.charAt(0).toUpperCase() + ee.slice(1)
    }

    function Te(ee) {
      return Math.round(ee).toLocaleString("en-US")
    }

    function pe(ee) {
      return ee.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((ee => "" !== ee))
    }
    const Xe = 3;

    function ze(ee, ie) {
      return pe(ee).filter((ee => ee.length >= Xe && !/\d/.test(ee))).map((ee => `${ee} ${ie}`))
    }

    function Be(ee) {
      return ee.split(/[\s:_]+/).filter((ee => "" !== ee)).map(Ke).join("[`:_\\s]+")
    }

    function Ee(ee) {
      return pe(ee.split(".").pop())
    }

    function ge(ee) {
      return ee.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Oe(ee) {
      let ie = null;
      return () => {
        const He = ie ??= ee();
        return He.catch((() => {
          ie === He && (ie = null)
        })), He
      }
    }
  },
  5343: (ee, ie, He) => {
    function ye(ee) {
      return {
        notAfter: ee
      }
    }
    He.d(ie, {
      e: () => Fe,
      g: () => Je,
      k: () => Ue,
      m: () => ye,
      n: () => be,
      p: () => Me,
      s: () => Ke,
      t: () => oe,
      v: () => Re
    });
    const be = ye("\\w$."),
      Me = ye("\\w.,");

    function Ke(ee) {
      return ie => Fe(ie, ee)
    }

    function Ue(ee) {
      return ie => !ee.test(ie.input.slice(0, ie.index))
    }

    function Fe(ee, ie) {
      return ee.index > 0 && new RegExp(`[${ie}]`).test(ee.input[ee.index - 1])
    }

    function Je(ee, ie, He) {
      return function(ee) {
        return void 0 !== ee && "function" !== typeof ee
      }(He) ? function(ee, ie, He) {
        const ye = ie.flags.replace(/[gy]/g, ""),
          be = new RegExp(`[^${He}](?:${ie.source})`, `${ye}g`),
          Me = [],
          Ke = He => {
            const ye = He.index + He[0].length;
            return ("" === He[0] ? ke(ee, ie, ye) : ye) - 1
          },
          Ue = new RegExp(`(?:${ie.source})`, `${ye}y`).exec(ee);
        if (Ue) {
          if (Me.push(Ue), !ie.global) return Me;
          be.lastIndex = Ke(Ue)
        }
        for (let Fe = be.exec(ee); Fe; Fe = be.exec(ee)) {
          const He = ke(ee, ie, Fe.index) - Fe.index;
          if (Fe[0] = Fe[0].slice(He), Fe.index += He, Me.push(Fe), !ie.global) break;
          be.lastIndex = Ke(Fe)
        }
        return Me
      }(ee, ie, He.notAfter) : function(ee, ie, He) {
        const ye = new RegExp(ie.source, `${ie.flags.replace(/[gy]/g,"")}g`),
          be = [];
        for (let Me = ye.exec(ee); Me; Me = ye.exec(ee))
          if (!He || He(Me)) {
            if (be.push(Me), !ie.global) break;
            "" === Me[0] && (ye.lastIndex = ke(ee, ie, ye.lastIndex))
          } else ye.lastIndex = ke(ee, ie, Me.index);
        return be
      }(ee, ie, He)
    }

    function oe(ee, ie, He, ye) {
      let be = "",
        Me = 0;
      for (const Ke of Je(ee, ie, He)) be += ee.slice(Me, Ke.index) + ye(Ke), Me = Ke.index + Ke[0].length;
      return be + ee.slice(Me)
    }

    function Re(ee, ie, He) {
      const ye = [];
      let be = 0;
      for (const Me of Je(ee, ie, He)) ye.push(ee.slice(be, Me.index)), be = Me.index + Me[0].length;
      return [...ye, ee.slice(be)]
    }

    function ke(ee, ie, He) {
      var ye;
      return He + (ie.unicode && (null !== (ye = ee.codePointAt(He)) && void 0 !== ye ? ye : 0) > 65535 ? 2 : 1)
    }
  },
  7099: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);