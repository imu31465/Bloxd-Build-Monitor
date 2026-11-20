export const id = 78;
export const ids = [78];
export const modules = {
  4491: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv,
      f: () => gv,
      i: () => Cv,
      l: () => sv,
      n: () => pv,
      q: () => Sv,
      r: () => ev,
      u: () => av,
      y: () => wv,
      z: () => Wv
    });
    const hv = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Sv(vv) {
      try {
        return decodeURIComponent(vv.slice(1))
      } catch {
        return vv.slice(1)
      }
    }

    function ev(vv) {
      return vv.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const gv = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${hv.source}`, "g");

    function pv(vv, zv) {
      return 2 === vv.length ? zv.replace(/^ (.*) $/, "$1") : zv
    }

    function dv(vv) {
      return "" === vv.trim()
    }

    function Nv(vv) {
      const zv = [];
      for (const Pv of vv.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zv.length > 0 && zv[zv.length - 1].endsWith("\\") ? zv[zv.length - 1] += `|${Pv}` : zv.push(Pv);
      return zv.map((vv => vv.trim().replaceAll("\\|", "|")))
    }
    const lv = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Tv(vv) {
      const zv = [],
        Pv = [{
          indent: -1,
          items: zv
        }];
      let hv = null;
      for (const Sv of vv) {
        const vv = Sv.match(lv);
        if (!vv) {
          hv && (hv.text += ` ${Sv.trim()}`);
          continue
        }
        const zv = vv[1].replace(/\t/g, "  ").length;
        for (; zv <= Pv[Pv.length - 1].indent;) Pv.pop();
        hv = {
          text: vv[3].trim(),
          children: []
        }, Pv[Pv.length - 1].items.push(hv), Pv.push({
          indent: zv,
          items: hv.children
        })
      }
      return zv
    }

    function Wv(vv) {
      const zv = vv.replace(/\r\n/g, "\n").split("\n"),
        Pv = [];
      let hv = 0;
      for (; hv < zv.length;) {
        const vv = zv[hv];
        if (dv(vv)) {
          hv++;
          continue
        }
        const Sv = vv.match(/^\s*```\s*(\w*)\s*$/);
        if (Sv) {
          const vv = [];
          for (hv++; hv < zv.length && !/^\s*```\s*$/.test(zv[hv]);) vv.push(zv[hv]), hv++;
          hv++, Pv.push({
            kind: "code",
            lang: Sv[1] || "text",
            code: vv.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const gv = vv.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (gv) {
          const vv = gv[2].trim();
          Pv.push({
            kind: "heading",
            level: gv[1].length,
            text: vv,
            anchor: ev(vv)
          }), hv++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(vv)) {
          Pv.push({
            kind: "rule"
          }), hv++;
          continue
        }
        if (vv.trim().startsWith("|") && hv + 1 < zv.length && /^\s*\|[\s:|-]+\|\s*$/.test(zv[hv + 1])) {
          const Sv = Nv(vv),
            ev = [];
          for (hv += 2; hv < zv.length && zv[hv].trim().startsWith("|");) ev.push(Nv(zv[hv])), hv++;
          Pv.push({
            kind: "table",
            header: Sv,
            rows: ev
          });
          continue
        }
        if (vv.startsWith(">")) {
          const vv = [];
          for (; hv < zv.length && zv[hv].startsWith(">");) vv.push(zv[hv].replace(/^>\s?/, "")), hv++;
          Pv.push({
            kind: "quote",
            blocks: Wv(vv.join("\n"))
          });
          continue
        }
        if (lv.test(vv)) {
          const Sv = [],
            ev = /^\s*\d+\./.test(vv);
          for (; hv < zv.length && !dv(zv[hv]) && (lv.test(zv[hv]) || /^\s+\S/.test(zv[hv]));) Sv.push(zv[hv]), hv++;
          Pv.push({
            kind: "list",
            ordered: ev,
            items: Tv(Sv)
          });
          continue
        }
        const pv = [];
        for (; hv < zv.length && !dv(zv[hv]) && !/^\s*```/.test(zv[hv]) && !/^#{1,6}\s/.test(zv[hv]) && !zv[hv].startsWith(">") && !lv.test(zv[hv]) && (!zv[hv].trim().startsWith("|") || 0 !== pv.length);) pv.push(zv[hv].trim()), hv++;
        0 === pv.length && (pv.push(zv[hv].trim()), hv++), Pv.push({
          kind: "paragraph",
          text: pv.join(" ")
        })
      }
      return Pv
    }

    function wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Pv = Wv(vv);
      let hv = "";
      const Sv = [],
        ev = [],
        gv = new Map;
      for (const Nv of Pv) {
        if ("heading" === Nv.kind) {
          var pv;
          const vv = (null !== (pv = gv.get(Nv.anchor)) && void 0 !== pv ? pv : 0) + 1;
          gv.set(Nv.anchor, vv), vv > 1 && (Nv.anchor = `${Nv.anchor}-${vv}`)
        }
        if ("heading" === Nv.kind && 1 === Nv.level && !hv) {
          hv = Nv.text;
          continue
        }
        if ("heading" === Nv.kind && Nv.level <= zv) {
          ev.push({
            heading: Nv,
            blocks: []
          });
          continue
        }
        const vv = ev.at(-1);
        vv ? vv.blocks.push(Nv) : Sv.push(Nv)
      }
      const dv = vv => {
        for (;
          "rule" === (null === (zv = vv.at(-1)) || void 0 === zv ? void 0 : zv.kind);) {
          var zv;
          vv.pop()
        }
      };
      dv(Sv);
      for (const Nv of ev) dv(Nv.blocks);
      return {
        title: hv,
        intro: Sv,
        sections: ev
      }
    }

    function av(vv) {
      return [{
        heading: null,
        blocks: vv.intro
      }, ...vv.sections.map((vv => ({
        heading: vv.heading,
        blocks: vv.blocks
      })))]
    }

    function sv(vv) {
      return vv.flatMap((vv => "code" === vv.kind ? [vv] : "quote" === vv.kind ? sv(vv.blocks) : []))
    }

    function Cv(vv) {
      switch (vv.kind) {
        case "heading":
        case "paragraph":
          return vv.text;
        case "code":
          return vv.code;
        case "table":
          return [vv.header, ...vv.rows].map((vv => vv.join(" "))).join(" ");
        case "list": {
          const zv = vv => vv.map((vv => `${vv.text} ${zv(vv.children)}`)).join(" ");
          return zv(vv.items)
        }
        case "quote":
          return vv.blocks.map(Cv).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6216: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv,
      g: () => gv,
      j: () => pv
    });
    Pv(6208);
    var hv = Pv(52),
      Sv = Pv(4491),
      ev = Pv(1082);
    const gv = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function pv(vv, zv) {
      return vv === zv ? vv : `${vv} (${zv})`
    }

    function dv(vv) {
      const zv = [];
      let Pv = 0;
      for (const hv of vv.matchAll(gv)) {
        hv.index > Pv && zv.push(vv.slice(Pv, hv.index));
        const [, Sv, gv, dv, Nv, lv, Tv] = hv;
        void 0 !== Sv ? zv.push(pv(Sv, gv)) : void 0 !== dv || void 0 !== Nv ? zv.push((0, ev.jsx)("strong", {
          children: null !== dv && void 0 !== dv ? dv : Nv
        }, hv.index)) : void 0 !== lv ? zv.push((0, ev.jsx)("em", {
          children: lv
        }, hv.index)) : zv.push((0, ev.jsx)("code", {
          children: Tv
        }, hv.index)), Pv = hv.index + hv[0].length
      }
      return Pv < vv.length && zv.push(vv.slice(Pv)), zv
    }

    function Nv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const hv = vv.map(((vv, zv) => (0, ev.jsxs)("li", {
        children: [dv(vv.text), vv.children.length > 0 && Nv(vv.children, !1)]
      }, zv)));
      return zv ? (0, ev.jsx)("ol", {
        start: Pv,
        children: hv
      }) : (0, ev.jsx)("ul", {
        children: hv
      })
    }

    function lv(vv, zv) {
      switch (vv.kind) {
        case "heading":
          return vv.level <= 2 ? (0, ev.jsx)("h3", {
            children: dv(vv.text)
          }, zv) : (0, ev.jsx)("h4", {
            children: dv(vv.text)
          }, zv);
        case "paragraph":
          return (0, ev.jsx)("p", {
            children: dv(vv.text)
          }, zv);
        case "list":
          return (0, ev.jsx)(hv.Fragment, {
            children: Nv(vv.items, vv.ordered)
          }, zv);
        case "quote":
          return (0, ev.jsx)("blockquote", {
            children: vv.blocks.map(((vv, zv) => lv(vv, zv)))
          }, zv);
        case "code":
          return (0, ev.jsx)("pre", {
            children: (0, ev.jsx)("code", {
              children: vv.code
            })
          }, zv);
        case "table":
          return (0, ev.jsxs)("table", {
            children: [(0, ev.jsx)("thead", {
              children: (0, ev.jsx)("tr", {
                children: vv.header.map(((vv, zv) => (0, ev.jsx)("th", {
                  children: dv(vv)
                }, zv)))
              })
            }), (0, ev.jsx)("tbody", {
              children: vv.rows.map(((vv, zv) => (0, ev.jsx)("tr", {
                children: vv.map(((vv, zv) => (0, ev.jsx)("td", {
                  children: dv(vv)
                }, zv)))
              }, zv)))
            })]
          }, zv);
        case "rule":
          return (0, ev.jsx)("hr", {}, zv)
      }
    }

    function Tv(vv) {
      let {
        markdown: zv
      } = vv, Pv = 0;
      return (0, ev.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Sv.z)(zv).map(((vv, zv) => {
          if ("list" !== vv.kind || !vv.ordered) return Pv = 0, lv(vv, zv);
          const Sv = Pv + 1;
          return Pv += vv.items.length, (0, ev.jsx)(hv.Fragment, {
            children: Nv(vv.items, !0, Sv)
          }, zv)
        }))
      })
    }
  },
  6204: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => cv,
      j: () => Gv,
      f: () => jv,
      n: () => av
    });
    var hv = Pv(1779),
      Sv = Pv(6172),
      ev = Pv(4615);
    const gv = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function pv(vv) {
      return (0, ev.f)(vv, gv, (zv => !/^my/i.test(zv[0]) || !/follow $/i.test(vv.slice(0, zv.index)))).length > 0
    }
    const dv = /\byou(?:r|'re|'ll)?\b/i,
      Nv = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      lv = 2;

    function Tv(vv) {
      return function(vv) {
        const zv = [];
        let Pv = !1;
        for (const hv of vv.split("\n")) {
          if (/^\s*(```|~~~)/.test(hv)) {
            Pv = !Pv;
            continue
          }
          if (Pv || /^\s*>/.test(hv)) continue;
          const vv = hv.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          zv.push(...(0, Sv.t)(vv))
        }
        return zv
      }(vv).filter((vv => pv(vv) || Nv.test(vv) && !dv.test(vv)))
    }
    const Wv = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      wv = [{
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

    function av(vv) {
      const zv = wv.findIndex((zv => zv.name === vv));
      return -1 === zv ? wv.length : zv
    }
    const sv = 2500,
      Cv = 12e4;
    class iv extends Error {
      constructor(vv) {
        super(`Studio AI chat ${vv}`), this.reason = vv
      }
    }

    function cv(vv, zv) {
      const Pv = new AbortController,
        hv = () => {
          Pv.abort()
        },
        Sv = setTimeout(hv, vv);
      return null !== zv && void 0 !== zv && zv.aborted && hv(), null === zv || void 0 === zv || zv.addEventListener("abort", hv, {
        once: !0
      }), {
        signal: Pv.signal,
        clear: () => {
          clearTimeout(Sv), null === zv || void 0 === zv || zv.removeEventListener("abort", hv)
        }
      }
    }

    function Gv(vv, zv, Pv) {
      return new Promise(((Sv, ev) => {
        const gv = new AbortController,
          pv = () => {
            gv.abort(), ev((0, hv.g)(Pv))
          };
        if (null !== Pv && void 0 !== Pv && Pv.aborted) return void pv();
        null === Pv || void 0 === Pv || Pv.addEventListener("abort", pv, {
          once: !0
        });
        const dv = wv.map((() => !1));
        let Nv = null;
        const lv = wv.map((() => !1)),
          Tv = wv.map((() => !1));
        wv.forEach(((hv, Wv) => {
          const av = cv(Cv, gv.signal);
          fv(hv, [{
            role: "user",
            content: vv
          }], av.signal).then((vv => {
            gv.signal.aborted || ("busy" === vv || "failed" === vv ? (lv[Wv] = "busy" === vv, Tv[Wv] = !0) : null !== vv && (null === Nv || Wv < Nv.rank) && (Nv = {
              rank: Wv,
              answer: {
                text: vv.text,
                model: hv.name
              }
            }, zv(Nv.answer)))
          }), (vv => {
            gv.signal.aborted || (Tv[Wv] = !0, console.warn(`Studio AI: ${hv.name} couldn't be reached`, vv))
          })).finally((() => {
            av.clear(), dv[Wv] = !0, gv.signal.aborted || (() => {
              var vv, zv;
              const hv = null !== (vv = null === (zv = Nv) || void 0 === zv ? void 0 : zv.rank) && void 0 !== vv ? vv : wv.length;
              dv.slice(0, hv).includes(!1) || (null === Pv || void 0 === Pv || Pv.removeEventListener("abort", pv), gv.abort(), null !== Nv ? Sv({
                ...Nv.answer,
                isFinal: !Tv.slice(0, Nv.rank).includes(!0)
              }) : ev(new iv(lv.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((vv => {
            console.error("Studio AI: showing an answer failed", vv)
          }))
        }))
      }))
    }

    function mv(vv) {
      var zv, Pv;
      return "length" === (null === vv || void 0 === vv || null === (zv = vv.choices) || void 0 === zv || null === (Pv = zv[0]) || void 0 === Pv ? void 0 : Pv.finish_reason)
    }
    async function jv(vv, zv, Pv) {
      const hv = wv.find((zv => zv.name === vv));
      if (void 0 === hv) return "failed";
      const Sv = cv(Cv, Pv);
      try {
        const vv = await fv(hv, zv, Sv.signal);
        return null !== vv && "object" === typeof vv ? vv.isCutOff ? (console.warn(`Studio AI: ${hv.name}'s answer was cut off at the token limit`), null) : {
          text: vv.text
        } : vv
      } finally {
        Sv.clear()
      }
    }
    async function fv(vv, zv, Pv) {
      const hv = await fetch(Wv, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: vv.name,
          messages: zv,
          max_tokens: sv,
          temperature: vv.temperature,
          reasoning_effort: vv.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Pv
      });
      if (429 === hv.status) return "busy";
      if (!hv.ok) return console.warn(`Studio AI: ${vv.name} answered ${hv.status}`), "failed";
      const Sv = await hv.json().catch((() => null)),
        ev = function(vv) {
          var zv, Pv, hv;
          const Sv = null === vv || void 0 === vv || null === (zv = vv.choices) || void 0 === zv || null === (Pv = zv[0]) || void 0 === Pv || null === (hv = Pv.message) || void 0 === hv ? void 0 : hv.content;
          if ("string" !== typeof Sv) return null;
          const ev = Sv.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === ev ? null : ev
        }(Sv);
      return null !== ev && function(vv) {
        const zv = Tv(vv);
        return zv.length >= lv || zv.some((vv => pv(vv)))
      }(ev) ? (console.warn(`Studio AI: ${vv.name} thought out loud instead of answering`), "failed") : null === ev ? null : {
        text: ev,
        isCutOff: mv(Sv)
      }
    }
  },
  6172: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => mv,
      D: () => fv,
      H: () => Cv,
      L: () => Gv,
      M: () => jv,
      Q: () => cv,
      R: () => Tv,
      V: () => Nv,
      W: () => wv,
      e: () => av,
      h: () => pv,
      l: () => gv,
      n: () => sv,
      r: () => Wv,
      t: () => lv,
      v: () => ev,
      y: () => Sv
    });
    var hv = Pv(4615);
    const Sv = 2e3,
      ev = 2e4;

    function gv(vv) {
      return vv.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function pv(vv) {
      return vv.replace(/\$/g, "\\$")
    }
    const dv = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Nv(vv, zv) {
      dv.lastIndex = zv;
      const Pv = dv.exec(vv);
      return Pv.index + Pv[0].length
    }

    function lv(vv) {
      return (0, hv.t)(vv, /\s+/g, (0, hv.q)(".!?")).flatMap((vv => vv.split("\n")))
    }

    function Tv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv;
      const hv = [...vv.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((vv => vv.index)),
        Sv = hv.filter((vv => vv < zv)),
        ev = hv.find((vv => vv >= Pv));
      return [0 === Sv.length ? 0 : Sv.at(-1) + 1, void 0 === ev ? vv.length : ev + 1]
    }

    function Wv(vv, zv) {
      const Pv = vv.charCodeAt(zv - 1);
      return vv.slice(0, zv > 0 && zv < vv.length && Pv >= 55296 && Pv <= 56319 ? zv - 1 : zv)
    }

    function wv(vv, zv) {
      return `${zv}${vv.replace(/\\/g,"\\\\").split(zv).join(`\\${zv}`)}${zv}`
    }

    function av(vv) {
      return vv.charAt(0).toUpperCase() + vv.slice(1)
    }

    function sv(vv) {
      return Math.round(vv).toLocaleString("en-US")
    }

    function Cv(vv) {
      return vv.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((vv => "" !== vv))
    }
    const iv = 3;

    function cv(vv, zv) {
      return Cv(vv).filter((vv => vv.length >= iv && !/\d/.test(vv))).map((vv => `${vv} ${zv}`))
    }

    function Gv(vv) {
      return vv.split(/[\s:_]+/).filter((vv => "" !== vv)).map(gv).join("[`:_\\s]+")
    }

    function mv(vv) {
      return Cv(vv.split(".").pop())
    }

    function jv(vv) {
      return vv.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function fv(vv) {
      let zv = null;
      return () => {
        const Pv = zv ??= vv();
        return Pv.catch((() => {
          zv === Pv && (zv = null)
        })), Pv
      }
    }
  },
  4615: (vv, zv, Pv) => {
    function hv(vv) {
      return {
        notAfter: vv
      }
    }
    Pv.d(zv, {
      c: () => dv,
      f: () => Nv,
      g: () => pv,
      h: () => hv,
      l: () => Sv,
      m: () => ev,
      q: () => gv,
      s: () => lv,
      t: () => Tv
    });
    const Sv = hv("\\w$."),
      ev = hv("\\w.,");

    function gv(vv) {
      return zv => dv(zv, vv)
    }

    function pv(vv) {
      return zv => !vv.test(zv.input.slice(0, zv.index))
    }

    function dv(vv, zv) {
      return vv.index > 0 && new RegExp(`[${zv}]`).test(vv.input[vv.index - 1])
    }

    function Nv(vv, zv, Pv) {
      return function(vv) {
        return void 0 !== vv && "function" !== typeof vv
      }(Pv) ? function(vv, zv, Pv) {
        const hv = zv.flags.replace(/[gy]/g, ""),
          Sv = new RegExp(`[^${Pv}](?:${zv.source})`, `${hv}g`),
          ev = [],
          gv = Pv => {
            const hv = Pv.index + Pv[0].length;
            return ("" === Pv[0] ? Wv(vv, zv, hv) : hv) - 1
          },
          pv = new RegExp(`(?:${zv.source})`, `${hv}y`).exec(vv);
        if (pv) {
          if (ev.push(pv), !zv.global) return ev;
          Sv.lastIndex = gv(pv)
        }
        for (let dv = Sv.exec(vv); dv; dv = Sv.exec(vv)) {
          const Pv = Wv(vv, zv, dv.index) - dv.index;
          if (dv[0] = dv[0].slice(Pv), dv.index += Pv, ev.push(dv), !zv.global) break;
          Sv.lastIndex = gv(dv)
        }
        return ev
      }(vv, zv, Pv.notAfter) : function(vv, zv, Pv) {
        const hv = new RegExp(zv.source, `${zv.flags.replace(/[gy]/g,"")}g`),
          Sv = [];
        for (let ev = hv.exec(vv); ev; ev = hv.exec(vv))
          if (!Pv || Pv(ev)) {
            if (Sv.push(ev), !zv.global) break;
            "" === ev[0] && (hv.lastIndex = Wv(vv, zv, hv.lastIndex))
          } else hv.lastIndex = Wv(vv, zv, ev.index);
        return Sv
      }(vv, zv, Pv)
    }

    function lv(vv, zv, Pv, hv) {
      let Sv = "",
        ev = 0;
      for (const gv of Nv(vv, zv, Pv)) Sv += vv.slice(ev, gv.index) + hv(gv), ev = gv.index + gv[0].length;
      return Sv + vv.slice(ev)
    }

    function Tv(vv, zv, Pv) {
      const hv = [];
      let Sv = 0;
      for (const ev of Nv(vv, zv, Pv)) hv.push(vv.slice(Sv, ev.index)), Sv = ev.index + ev[0].length;
      return [...hv, vv.slice(Sv)]
    }

    function Wv(vv, zv, Pv) {
      var hv;
      return Pv + (zv.unicode && (null !== (hv = vv.codePointAt(Pv)) && void 0 !== hv ? hv : 0) > 65535 ? 2 : 1)
    }
  },
  6208: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);