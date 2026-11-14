export const id = 66;
export const ids = [66];
export const modules = {
  3786: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc,
      d: () => uc,
      g: () => tB,
      i: () => ec,
      k: () => sc,
      o: () => Ic,
      r: () => rB,
      u: () => mB,
      y: () => fc,
      z: () => Tc
    });
    const Vc = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Ic(cB) {
      try {
        return decodeURIComponent(cB.slice(1))
      } catch {
        return cB.slice(1)
      }
    }

    function rB(cB) {
      return cB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const uc = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Vc.source}`, "g");

    function sc(cB, Bc) {
      return 2 === cB.length ? Bc.replace(/^ (.*) $/, "$1") : Bc
    }

    function Mc(cB) {
      return "" === cB.trim()
    }

    function Pc(cB) {
      const Bc = [];
      for (const nc of cB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Bc.length > 0 && Bc[Bc.length - 1].endsWith("\\") ? Bc[Bc.length - 1] += `|${nc}` : Bc.push(nc);
      return Bc.map((cB => cB.trim().replaceAll("\\|", "|")))
    }
    const qB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Oc(cB) {
      const Bc = [],
        nc = [{
          indent: -1,
          items: Bc
        }];
      let Vc = null;
      for (const Ic of cB) {
        const cB = Ic.match(qB);
        if (!cB) {
          Vc && (Vc.text += ` ${Ic.trim()}`);
          continue
        }
        const Bc = cB[1].replace(/\t/g, "  ").length;
        for (; Bc <= nc[nc.length - 1].indent;) nc.pop();
        Vc = {
          text: cB[3].trim(),
          children: []
        }, nc[nc.length - 1].items.push(Vc), nc.push({
          indent: Bc,
          items: Vc.children
        })
      }
      return Bc
    }

    function Tc(cB) {
      const Bc = cB.replace(/\r\n/g, "\n").split("\n"),
        nc = [];
      let Vc = 0;
      for (; Vc < Bc.length;) {
        const cB = Bc[Vc];
        if (Mc(cB)) {
          Vc++;
          continue
        }
        const Ic = cB.match(/^\s*```\s*(\w*)\s*$/);
        if (Ic) {
          const cB = [];
          for (Vc++; Vc < Bc.length && !/^\s*```\s*$/.test(Bc[Vc]);) cB.push(Bc[Vc]), Vc++;
          Vc++, nc.push({
            kind: "code",
            lang: Ic[1] || "text",
            code: cB.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const uc = cB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (uc) {
          const cB = uc[2].trim();
          nc.push({
            kind: "heading",
            level: uc[1].length,
            text: cB,
            anchor: rB(cB)
          }), Vc++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(cB)) {
          nc.push({
            kind: "rule"
          }), Vc++;
          continue
        }
        if (cB.trim().startsWith("|") && Vc + 1 < Bc.length && /^\s*\|[\s:|-]+\|\s*$/.test(Bc[Vc + 1])) {
          const Ic = Pc(cB),
            rB = [];
          for (Vc += 2; Vc < Bc.length && Bc[Vc].trim().startsWith("|");) rB.push(Pc(Bc[Vc])), Vc++;
          nc.push({
            kind: "table",
            header: Ic,
            rows: rB
          });
          continue
        }
        if (cB.startsWith(">")) {
          const cB = [];
          for (; Vc < Bc.length && Bc[Vc].startsWith(">");) cB.push(Bc[Vc].replace(/^>\s?/, "")), Vc++;
          nc.push({
            kind: "quote",
            blocks: Tc(cB.join("\n"))
          });
          continue
        }
        if (qB.test(cB)) {
          const Ic = [],
            rB = /^\s*\d+\./.test(cB);
          for (; Vc < Bc.length && !Mc(Bc[Vc]) && (qB.test(Bc[Vc]) || /^\s+\S/.test(Bc[Vc]));) Ic.push(Bc[Vc]), Vc++;
          nc.push({
            kind: "list",
            ordered: rB,
            items: Oc(Ic)
          });
          continue
        }
        const sc = [];
        for (; Vc < Bc.length && !Mc(Bc[Vc]) && !/^\s*```/.test(Bc[Vc]) && !/^#{1,6}\s/.test(Bc[Vc]) && !Bc[Vc].startsWith(">") && !qB.test(Bc[Vc]) && (!Bc[Vc].trim().startsWith("|") || 0 !== sc.length);) sc.push(Bc[Vc].trim()), Vc++;
        0 === sc.length && (sc.push(Bc[Vc].trim()), Vc++), nc.push({
          kind: "paragraph",
          text: sc.join(" ")
        })
      }
      return nc
    }

    function fc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const nc = Tc(cB);
      let Vc = "";
      const Ic = [],
        rB = [],
        uc = new Map;
      for (const Pc of nc) {
        if ("heading" === Pc.kind) {
          var sc;
          const cB = (null !== (sc = uc.get(Pc.anchor)) && void 0 !== sc ? sc : 0) + 1;
          uc.set(Pc.anchor, cB), cB > 1 && (Pc.anchor = `${Pc.anchor}-${cB}`)
        }
        if ("heading" === Pc.kind && 1 === Pc.level && !Vc) {
          Vc = Pc.text;
          continue
        }
        if ("heading" === Pc.kind && Pc.level <= Bc) {
          rB.push({
            heading: Pc,
            blocks: []
          });
          continue
        }
        const cB = rB.at(-1);
        cB ? cB.blocks.push(Pc) : Ic.push(Pc)
      }
      const Mc = cB => {
        for (;
          "rule" === (null === (Bc = cB.at(-1)) || void 0 === Bc ? void 0 : Bc.kind);) {
          var Bc;
          cB.pop()
        }
      };
      Mc(Ic);
      for (const Pc of rB) Mc(Pc.blocks);
      return {
        title: Vc,
        intro: Ic,
        sections: rB
      }
    }

    function mB(cB) {
      return [{
        heading: null,
        blocks: cB.intro
      }, ...cB.sections.map((cB => ({
        heading: cB.heading,
        blocks: cB.blocks
      })))]
    }

    function ec(cB) {
      return cB.flatMap((cB => "code" === cB.kind ? [cB] : "quote" === cB.kind ? ec(cB.blocks) : []))
    }

    function tB(cB) {
      switch (cB.kind) {
        case "heading":
        case "paragraph":
          return cB.text;
        case "code":
          return cB.code;
        case "table":
          return [cB.header, ...cB.rows].map((cB => cB.join(" "))).join(" ");
        case "list": {
          const Bc = cB => cB.map((cB => `${cB.text} ${Bc(cB.children)}`)).join(" ");
          return Bc(cB.items)
        }
        case "quote":
          return cB.blocks.map(tB).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5477: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Oc,
      g: () => uc,
      j: () => sc
    });
    nc(5474);
    var Vc = nc(73),
      Ic = nc(3786),
      rB = nc(957);
    const uc = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function sc(cB, Bc) {
      return cB === Bc ? cB : `${cB} (${Bc})`
    }

    function Mc(cB) {
      const Bc = [];
      let nc = 0;
      for (const Vc of cB.matchAll(uc)) {
        Vc.index > nc && Bc.push(cB.slice(nc, Vc.index));
        const [, Ic, uc, Mc, Pc, qB, Oc] = Vc;
        void 0 !== Ic ? Bc.push(sc(Ic, uc)) : void 0 !== Mc || void 0 !== Pc ? Bc.push((0, rB.jsx)("strong", {
          children: null !== Mc && void 0 !== Mc ? Mc : Pc
        }, Vc.index)) : void 0 !== qB ? Bc.push((0, rB.jsx)("em", {
          children: qB
        }, Vc.index)) : Bc.push((0, rB.jsx)("code", {
          children: Oc
        }, Vc.index)), nc = Vc.index + Vc[0].length
      }
      return nc < cB.length && Bc.push(cB.slice(nc)), Bc
    }

    function Pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Vc = cB.map(((cB, Bc) => (0, rB.jsxs)("li", {
        children: [Mc(cB.text), cB.children.length > 0 && Pc(cB.children, !1)]
      }, Bc)));
      return Bc ? (0, rB.jsx)("ol", {
        start: nc,
        children: Vc
      }) : (0, rB.jsx)("ul", {
        children: Vc
      })
    }

    function qB(cB, Bc) {
      switch (cB.kind) {
        case "heading":
          return cB.level <= 2 ? (0, rB.jsx)("h3", {
            children: Mc(cB.text)
          }, Bc) : (0, rB.jsx)("h4", {
            children: Mc(cB.text)
          }, Bc);
        case "paragraph":
          return (0, rB.jsx)("p", {
            children: Mc(cB.text)
          }, Bc);
        case "list":
          return (0, rB.jsx)(Vc.Fragment, {
            children: Pc(cB.items, cB.ordered)
          }, Bc);
        case "quote":
          return (0, rB.jsx)("blockquote", {
            children: cB.blocks.map(((cB, Bc) => qB(cB, Bc)))
          }, Bc);
        case "code":
          return (0, rB.jsx)("pre", {
            children: (0, rB.jsx)("code", {
              children: cB.code
            })
          }, Bc);
        case "table":
          return (0, rB.jsxs)("table", {
            children: [(0, rB.jsx)("thead", {
              children: (0, rB.jsx)("tr", {
                children: cB.header.map(((cB, Bc) => (0, rB.jsx)("th", {
                  children: Mc(cB)
                }, Bc)))
              })
            }), (0, rB.jsx)("tbody", {
              children: cB.rows.map(((cB, Bc) => (0, rB.jsx)("tr", {
                children: cB.map(((cB, Bc) => (0, rB.jsx)("td", {
                  children: Mc(cB)
                }, Bc)))
              }, Bc)))
            })]
          }, Bc);
        case "rule":
          return (0, rB.jsx)("hr", {}, Bc)
      }
    }

    function Oc(cB) {
      let {
        markdown: Bc
      } = cB, nc = 0;
      return (0, rB.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Ic.z)(Bc).map(((cB, Bc) => {
          if ("list" !== cB.kind || !cB.ordered) return nc = 0, qB(cB, Bc);
          const Ic = nc + 1;
          return nc += cB.items.length, (0, rB.jsx)(Vc.Fragment, {
            children: Pc(cB.items, !0, Ic)
          }, Bc)
        }))
      })
    }
  },
  5468: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => yB,
      l: () => zB,
      h: () => hc,
      p: () => mB
    });
    var Vc = nc(5465),
      Ic = nc(5429),
      rB = nc(3914);
    const uc = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function sc(cB) {
      return (0, rB.e)(cB, uc, (Bc => !/^my/i.test(Bc[0]) || !/follow $/i.test(cB.slice(0, Bc.index)))).length > 0
    }
    const Mc = /\byou(?:r|'re|'ll)?\b/i,
      Pc = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      qB = 2;

    function Oc(cB) {
      return function(cB) {
        const Bc = [];
        let nc = !1;
        for (const Vc of cB.split("\n")) {
          if (/^\s*(```|~~~)/.test(Vc)) {
            nc = !nc;
            continue
          }
          if (nc || /^\s*>/.test(Vc)) continue;
          const cB = Vc.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Bc.push(...(0, Ic.q)(cB))
        }
        return Bc
      }(cB).filter((cB => sc(cB) || Pc.test(cB) && !Mc.test(cB)))
    }
    const Tc = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      fc = [{
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

    function mB(cB) {
      const Bc = fc.findIndex((Bc => Bc.name === cB));
      return -1 === Bc ? fc.length : Bc
    }
    const ec = 2500,
      tB = 12e4;
    class Sc extends Error {
      constructor(cB) {
        super(`Studio AI chat ${cB}`), this.reason = cB
      }
    }

    function yB(cB, Bc) {
      const nc = new AbortController,
        Vc = () => {
          nc.abort()
        },
        Ic = setTimeout(Vc, cB);
      return null !== Bc && void 0 !== Bc && Bc.aborted && Vc(), null === Bc || void 0 === Bc || Bc.addEventListener("abort", Vc, {
        once: !0
      }), {
        signal: nc.signal,
        clear: () => {
          clearTimeout(Ic), null === Bc || void 0 === Bc || Bc.removeEventListener("abort", Vc)
        }
      }
    }

    function zB(cB, Bc, nc) {
      return new Promise(((Ic, rB) => {
        const uc = new AbortController,
          sc = () => {
            uc.abort(), rB((0, Vc.d)(nc))
          };
        if (null !== nc && void 0 !== nc && nc.aborted) return void sc();
        null === nc || void 0 === nc || nc.addEventListener("abort", sc, {
          once: !0
        });
        const Mc = fc.map((() => !1));
        let Pc = null;
        const qB = fc.map((() => !1)),
          Oc = fc.map((() => !1));
        fc.forEach(((Vc, Tc) => {
          const mB = yB(tB, uc.signal);
          aB(Vc, [{
            role: "user",
            content: cB
          }], mB.signal).then((cB => {
            uc.signal.aborted || ("busy" === cB || "failed" === cB ? (qB[Tc] = "busy" === cB, Oc[Tc] = !0) : null !== cB && (null === Pc || Tc < Pc.rank) && (Pc = {
              rank: Tc,
              answer: {
                text: cB.text,
                model: Vc.name
              }
            }, Bc(Pc.answer)))
          }), (cB => {
            uc.signal.aborted || (Oc[Tc] = !0, console.warn(`Studio AI: ${Vc.name} couldn't be reached`, cB))
          })).finally((() => {
            mB.clear(), Mc[Tc] = !0, uc.signal.aborted || (() => {
              var cB, Bc;
              const Vc = null !== (cB = null === (Bc = Pc) || void 0 === Bc ? void 0 : Bc.rank) && void 0 !== cB ? cB : fc.length;
              Mc.slice(0, Vc).includes(!1) || (null === nc || void 0 === nc || nc.removeEventListener("abort", sc), uc.abort(), null !== Pc ? Ic({
                ...Pc.answer,
                isFinal: !Oc.slice(0, Pc.rank).includes(!0)
              }) : rB(new Sc(qB.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((cB => {
            console.error("Studio AI: showing an answer failed", cB)
          }))
        }))
      }))
    }

    function pc(cB) {
      var Bc, nc;
      return "length" === (null === cB || void 0 === cB || null === (Bc = cB.choices) || void 0 === Bc || null === (nc = Bc[0]) || void 0 === nc ? void 0 : nc.finish_reason)
    }
    async function hc(cB, Bc, nc) {
      const Vc = fc.find((Bc => Bc.name === cB));
      if (void 0 === Vc) return "failed";
      const Ic = yB(tB, nc);
      try {
        const cB = await aB(Vc, Bc, Ic.signal);
        return null !== cB && "object" === typeof cB ? cB.isCutOff ? (console.warn(`Studio AI: ${Vc.name}'s answer was cut off at the token limit`), null) : {
          text: cB.text
        } : cB
      } finally {
        Ic.clear()
      }
    }
    async function aB(cB, Bc, nc) {
      const Vc = await fetch(Tc, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: cB.name,
          messages: Bc,
          max_tokens: ec,
          temperature: cB.temperature,
          reasoning_effort: cB.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: nc
      });
      if (429 === Vc.status) return "busy";
      if (!Vc.ok) return console.warn(`Studio AI: ${cB.name} answered ${Vc.status}`), "failed";
      const Ic = await Vc.json().catch((() => null)),
        rB = function(cB) {
          var Bc, nc, Vc;
          const Ic = null === cB || void 0 === cB || null === (Bc = cB.choices) || void 0 === Bc || null === (nc = Bc[0]) || void 0 === nc || null === (Vc = nc.message) || void 0 === Vc ? void 0 : Vc.content;
          if ("string" !== typeof Ic) return null;
          const rB = Ic.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === rB ? null : rB
        }(Ic);
      return null !== rB && function(cB) {
        const Bc = Oc(cB);
        return Bc.length >= qB || Bc.some((cB => sc(cB)))
      }(rB) ? (console.warn(`Studio AI: ${cB.name} thought out loud instead of answering`), "failed") : null === rB ? null : {
        text: rB,
        isCutOff: pc(Ic)
      }
    }
  },
  5429: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => aB,
      E: () => tB,
      F: () => zB,
      J: () => hc,
      K: () => yB,
      M: () => Oc,
      N: () => Pc,
      P: () => fc,
      d: () => mB,
      h: () => sc,
      j: () => uc,
      m: () => ec,
      p: () => Tc,
      q: () => qB,
      t: () => rB,
      v: () => Ic,
      w: () => pc
    });
    var Vc = nc(3914);
    const Ic = 2e3,
      rB = 2e4;

    function uc(cB) {
      return cB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function sc(cB) {
      return cB.replace(/\$/g, "\\$")
    }
    const Mc = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Pc(cB, Bc) {
      Mc.lastIndex = Bc;
      const nc = Mc.exec(cB);
      return nc.index + nc[0].length
    }

    function qB(cB) {
      return (0, Vc.y)(cB, /\s+/g, (0, Vc.s)(".!?")).flatMap((cB => cB.split("\n")))
    }

    function Oc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc;
      const Vc = [...cB.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((cB => cB.index)),
        Ic = Vc.filter((cB => cB < Bc)),
        rB = Vc.find((cB => cB >= nc));
      return [0 === Ic.length ? 0 : Ic.at(-1) + 1, void 0 === rB ? cB.length : rB + 1]
    }

    function Tc(cB, Bc) {
      const nc = cB.charCodeAt(Bc - 1);
      return cB.slice(0, Bc > 0 && Bc < cB.length && nc >= 55296 && nc <= 56319 ? Bc - 1 : Bc)
    }

    function fc(cB, Bc) {
      return `${Bc}${cB.replace(/\\/g,"\\\\").split(Bc).join(`\\${Bc}`)}${Bc}`
    }

    function mB(cB) {
      return cB.charAt(0).toUpperCase() + cB.slice(1)
    }

    function ec(cB) {
      return Math.round(cB).toLocaleString("en-US")
    }

    function tB(cB) {
      return cB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((cB => "" !== cB))
    }
    const Sc = 3;

    function yB(cB, Bc) {
      return tB(cB).filter((cB => cB.length >= Sc && !/\d/.test(cB))).map((cB => `${cB} ${Bc}`))
    }

    function zB(cB) {
      return cB.split(/[\s:_]+/).filter((cB => "" !== cB)).map(uc).join("[`:_\\s]+")
    }

    function pc(cB) {
      return tB(cB.split(".").pop())
    }

    function hc(cB) {
      return cB.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function aB(cB) {
      let Bc = null;
      return () => {
        const nc = Bc ??= cB();
        return nc.catch((() => {
          Bc === nc && (Bc = null)
        })), nc
      }
    }
  },
  5465: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => Ic,
      l: () => uc
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      cB.signal.aborted || Vc.set(cB.signal, Bc), cB.abort(Bc)
    }

    function rB(cB) {
      var Bc;
      const nc = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.reason) && void 0 !== Bc ? Bc : cB && Vc.get(cB);
      if (void 0 !== nc && null !== nc) return nc;
      const Ic = new DOMException("signal is aborted without reason", "AbortError");
      return null !== cB && void 0 !== cB && cB.aborted && Vc.set(cB, Ic), Ic
    }

    function uc(cB) {
      if (null !== cB && void 0 !== cB && cB.aborted) throw rB(cB)
    }
  },
  3914: (cB, Bc, nc) => {
    function Vc(cB) {
      return {
        notAfter: cB
      }
    }
    nc.d(Bc, {
      c: () => Mc,
      e: () => Pc,
      f: () => sc,
      i: () => Vc,
      l: () => Ic,
      p: () => rB,
      s: () => uc,
      v: () => qB,
      y: () => Oc
    });
    const Ic = Vc("\\w$."),
      rB = Vc("\\w.,");

    function uc(cB) {
      return Bc => Mc(Bc, cB)
    }

    function sc(cB) {
      return Bc => !cB.test(Bc.input.slice(0, Bc.index))
    }

    function Mc(cB, Bc) {
      return cB.index > 0 && new RegExp(`[${Bc}]`).test(cB.input[cB.index - 1])
    }

    function Pc(cB, Bc, nc) {
      return function(cB) {
        return void 0 !== cB && "function" !== typeof cB
      }(nc) ? function(cB, Bc, nc) {
        const Vc = Bc.flags.replace(/[gy]/g, ""),
          Ic = new RegExp(`[^${nc}](?:${Bc.source})`, `${Vc}g`),
          rB = [],
          uc = nc => {
            const Vc = nc.index + nc[0].length;
            return ("" === nc[0] ? Tc(cB, Bc, Vc) : Vc) - 1
          },
          sc = new RegExp(`(?:${Bc.source})`, `${Vc}y`).exec(cB);
        if (sc) {
          if (rB.push(sc), !Bc.global) return rB;
          Ic.lastIndex = uc(sc)
        }
        for (let Mc = Ic.exec(cB); Mc; Mc = Ic.exec(cB)) {
          const nc = Tc(cB, Bc, Mc.index) - Mc.index;
          if (Mc[0] = Mc[0].slice(nc), Mc.index += nc, rB.push(Mc), !Bc.global) break;
          Ic.lastIndex = uc(Mc)
        }
        return rB
      }(cB, Bc, nc.notAfter) : function(cB, Bc, nc) {
        const Vc = new RegExp(Bc.source, `${Bc.flags.replace(/[gy]/g,"")}g`),
          Ic = [];
        for (let rB = Vc.exec(cB); rB; rB = Vc.exec(cB))
          if (!nc || nc(rB)) {
            if (Ic.push(rB), !Bc.global) break;
            "" === rB[0] && (Vc.lastIndex = Tc(cB, Bc, Vc.lastIndex))
          } else Vc.lastIndex = Tc(cB, Bc, rB.index);
        return Ic
      }(cB, Bc, nc)
    }

    function qB(cB, Bc, nc, Vc) {
      let Ic = "",
        rB = 0;
      for (const uc of Pc(cB, Bc, nc)) Ic += cB.slice(rB, uc.index) + Vc(uc), rB = uc.index + uc[0].length;
      return Ic + cB.slice(rB)
    }

    function Oc(cB, Bc, nc) {
      const Vc = [];
      let Ic = 0;
      for (const rB of Pc(cB, Bc, nc)) Vc.push(cB.slice(Ic, rB.index)), Ic = rB.index + rB[0].length;
      return [...Vc, cB.slice(Ic)]
    }

    function Tc(cB, Bc, nc) {
      var Vc;
      return nc + (Bc.unicode && (null !== (Vc = cB.codePointAt(nc)) && void 0 !== Vc ? Vc : 0) > 65535 ? 2 : 1)
    }
  },
  5474: () => {}
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);