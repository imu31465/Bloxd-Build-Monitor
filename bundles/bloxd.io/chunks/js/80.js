export const id = 80;
export const ids = [80];
export const modules = {
  4672: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      f: () => xm,
      j: () => qm,
      k: () => Ym,
      n: () => wm,
      o: () => Am,
      q: () => am,
      r: () => Om,
      v: () => om,
      x: () => Em
    });
    const hm = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Am(mm) {
      try {
        return decodeURIComponent(mm.slice(1))
      } catch {
        return mm.slice(1)
      }
    }

    function am(mm) {
      return mm.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const xm = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${hm.source}`, "g");

    function wm(mm, Tm) {
      return 2 === mm.length ? Tm.replace(/^ (.*) $/, "$1") : Tm
    }

    function Dm(mm) {
      return "" === mm.trim()
    }

    function im(mm) {
      const Tm = [];
      for (const fm of mm.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Tm.length > 0 && Tm[Tm.length - 1].endsWith("\\") ? Tm[Tm.length - 1] += `|${fm}` : Tm.push(fm);
      return Tm.map((mm => mm.trim().replaceAll("\\|", "|")))
    }
    const Rm = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function pm(mm) {
      const Tm = [],
        fm = [{
          indent: -1,
          items: Tm
        }];
      let hm = null;
      for (const Am of mm) {
        const mm = Am.match(Rm);
        if (!mm) {
          hm && (hm.text += ` ${Am.trim()}`);
          continue
        }
        const Tm = mm[1].replace(/\t/g, "  ").length;
        for (; Tm <= fm[fm.length - 1].indent;) fm.pop();
        hm = {
          text: mm[3].trim(),
          children: []
        }, fm[fm.length - 1].items.push(hm), fm.push({
          indent: Tm,
          items: hm.children
        })
      }
      return Tm
    }

    function Em(mm) {
      const Tm = mm.replace(/\r\n/g, "\n").split("\n"),
        fm = [];
      let hm = 0;
      for (; hm < Tm.length;) {
        const mm = Tm[hm];
        if (Dm(mm)) {
          hm++;
          continue
        }
        const Am = mm.match(/^\s*```\s*(\w*)\s*$/);
        if (Am) {
          const mm = [];
          for (hm++; hm < Tm.length && !/^\s*```\s*$/.test(Tm[hm]);) mm.push(Tm[hm]), hm++;
          hm++, fm.push({
            kind: "code",
            lang: Am[1] || "text",
            code: mm.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const xm = mm.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (xm) {
          const mm = xm[2].trim();
          fm.push({
            kind: "heading",
            level: xm[1].length,
            text: mm,
            anchor: am(mm)
          }), hm++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(mm)) {
          fm.push({
            kind: "rule"
          }), hm++;
          continue
        }
        if (mm.trim().startsWith("|") && hm + 1 < Tm.length && /^\s*\|[\s:|-]+\|\s*$/.test(Tm[hm + 1])) {
          const Am = im(mm),
            am = [];
          for (hm += 2; hm < Tm.length && Tm[hm].trim().startsWith("|");) am.push(im(Tm[hm])), hm++;
          fm.push({
            kind: "table",
            header: Am,
            rows: am
          });
          continue
        }
        if (mm.startsWith(">")) {
          const mm = [];
          for (; hm < Tm.length && Tm[hm].startsWith(">");) mm.push(Tm[hm].replace(/^>\s?/, "")), hm++;
          fm.push({
            kind: "quote",
            blocks: Em(mm.join("\n"))
          });
          continue
        }
        if (Rm.test(mm)) {
          const Am = [],
            am = /^\s*\d+\./.test(mm);
          for (; hm < Tm.length && !Dm(Tm[hm]) && (Rm.test(Tm[hm]) || /^\s+\S/.test(Tm[hm]));) Am.push(Tm[hm]), hm++;
          fm.push({
            kind: "list",
            ordered: am,
            items: pm(Am)
          });
          continue
        }
        const wm = [];
        for (; hm < Tm.length && !Dm(Tm[hm]) && !/^\s*```/.test(Tm[hm]) && !/^#{1,6}\s/.test(Tm[hm]) && !Tm[hm].startsWith(">") && !Rm.test(Tm[hm]) && (!Tm[hm].trim().startsWith("|") || 0 !== wm.length);) wm.push(Tm[hm].trim()), hm++;
        0 === wm.length && (wm.push(Tm[hm].trim()), hm++), fm.push({
          kind: "paragraph",
          text: wm.join(" ")
        })
      }
      return fm
    }

    function om(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const fm = Em(mm);
      let hm = "";
      const Am = [],
        am = [],
        xm = new Map;
      for (const im of fm) {
        if ("heading" === im.kind) {
          var wm;
          const mm = (null !== (wm = xm.get(im.anchor)) && void 0 !== wm ? wm : 0) + 1;
          xm.set(im.anchor, mm), mm > 1 && (im.anchor = `${im.anchor}-${mm}`)
        }
        if ("heading" === im.kind && 1 === im.level && !hm) {
          hm = im.text;
          continue
        }
        if ("heading" === im.kind && im.level <= Tm) {
          am.push({
            heading: im,
            blocks: []
          });
          continue
        }
        const mm = am.at(-1);
        mm ? mm.blocks.push(im) : Am.push(im)
      }
      const Dm = mm => {
        for (;
          "rule" === (null === (Tm = mm.at(-1)) || void 0 === Tm ? void 0 : Tm.kind);) {
          var Tm;
          mm.pop()
        }
      };
      Dm(Am);
      for (const im of am) Dm(im.blocks);
      return {
        title: hm,
        intro: Am,
        sections: am
      }
    }

    function Om(mm) {
      return [{
        heading: null,
        blocks: mm.intro
      }, ...mm.sections.map((mm => ({
        heading: mm.heading,
        blocks: mm.blocks
      })))]
    }

    function Ym(mm) {
      return mm.flatMap((mm => "code" === mm.kind ? [mm] : "quote" === mm.kind ? Ym(mm.blocks) : []))
    }

    function qm(mm) {
      switch (mm.kind) {
        case "heading":
        case "paragraph":
          return mm.text;
        case "code":
          return mm.code;
        case "table":
          return [mm.header, ...mm.rows].map((mm => mm.join(" "))).join(" ");
        case "list": {
          const Tm = mm => mm.map((mm => `${mm.text} ${Tm(mm.children)}`)).join(" ");
          return Tm(mm.items)
        }
        case "quote":
          return mm.blocks.map(qm).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6464: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      g: () => xm,
      i: () => wm
    });
    fm(6460);
    var hm = fm(59),
      Am = fm(4672),
      am = fm(1135);
    const xm = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function wm(mm, Tm) {
      return mm === Tm ? mm : `${mm} (${Tm})`
    }

    function Dm(mm) {
      const Tm = [];
      let fm = 0;
      for (const hm of mm.matchAll(xm)) {
        hm.index > fm && Tm.push(mm.slice(fm, hm.index));
        const [, Am, xm, Dm, im, Rm, pm] = hm;
        void 0 !== Am ? Tm.push(wm(Am, xm)) : void 0 !== Dm || void 0 !== im ? Tm.push((0, am.jsx)("strong", {
          children: null !== Dm && void 0 !== Dm ? Dm : im
        }, hm.index)) : void 0 !== Rm ? Tm.push((0, am.jsx)("em", {
          children: Rm
        }, hm.index)) : Tm.push((0, am.jsx)("code", {
          children: pm
        }, hm.index)), fm = hm.index + hm[0].length
      }
      return fm < mm.length && Tm.push(mm.slice(fm)), Tm
    }

    function im(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const hm = mm.map(((mm, Tm) => (0, am.jsxs)("li", {
        children: [Dm(mm.text), mm.children.length > 0 && im(mm.children, !1)]
      }, Tm)));
      return Tm ? (0, am.jsx)("ol", {
        start: fm,
        children: hm
      }) : (0, am.jsx)("ul", {
        children: hm
      })
    }

    function Rm(mm, Tm) {
      switch (mm.kind) {
        case "heading":
          return mm.level <= 2 ? (0, am.jsx)("h3", {
            children: Dm(mm.text)
          }, Tm) : (0, am.jsx)("h4", {
            children: Dm(mm.text)
          }, Tm);
        case "paragraph":
          return (0, am.jsx)("p", {
            children: Dm(mm.text)
          }, Tm);
        case "list":
          return (0, am.jsx)(hm.Fragment, {
            children: im(mm.items, mm.ordered)
          }, Tm);
        case "quote":
          return (0, am.jsx)("blockquote", {
            children: mm.blocks.map(((mm, Tm) => Rm(mm, Tm)))
          }, Tm);
        case "code":
          return (0, am.jsx)("pre", {
            children: (0, am.jsx)("code", {
              children: mm.code
            })
          }, Tm);
        case "table":
          return (0, am.jsxs)("table", {
            children: [(0, am.jsx)("thead", {
              children: (0, am.jsx)("tr", {
                children: mm.header.map(((mm, Tm) => (0, am.jsx)("th", {
                  children: Dm(mm)
                }, Tm)))
              })
            }), (0, am.jsx)("tbody", {
              children: mm.rows.map(((mm, Tm) => (0, am.jsx)("tr", {
                children: mm.map(((mm, Tm) => (0, am.jsx)("td", {
                  children: Dm(mm)
                }, Tm)))
              }, Tm)))
            })]
          }, Tm);
        case "rule":
          return (0, am.jsx)("hr", {}, Tm)
      }
    }

    function pm(mm) {
      let {
        markdown: Tm
      } = mm, fm = 0;
      return (0, am.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Am.x)(Tm).map(((mm, Tm) => {
          if ("list" !== mm.kind || !mm.ordered) return fm = 0, Rm(mm, Tm);
          const Am = fm + 1;
          return fm += mm.items.length, (0, am.jsx)(hm.Fragment, {
            children: im(mm.items, !0, Am)
          }, Tm)
        }))
      })
    }
  },
  6456: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Vm,
      k: () => Im,
      g: () => Qm,
      l: () => Om
    });
    var hm = fm(1223),
      Am = fm(6432),
      am = fm(4809);
    const xm = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function wm(mm) {
      return (0, am.g)(mm, xm, (Tm => !/^my/i.test(Tm[0]) || !/follow $/i.test(mm.slice(0, Tm.index)))).length > 0
    }
    const Dm = /\byou(?:r|'re|'ll)?\b/i,
      im = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Rm = 2;

    function pm(mm) {
      return function(mm) {
        const Tm = [];
        let fm = !1;
        for (const hm of mm.split("\n")) {
          if (/^\s*(```|~~~)/.test(hm)) {
            fm = !fm;
            continue
          }
          if (fm || /^\s*>/.test(hm)) continue;
          const mm = hm.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          Tm.push(...(0, Am.n)(mm))
        }
        return Tm
      }(mm).filter((mm => wm(mm) || im.test(mm) && !Dm.test(mm)))
    }
    const Em = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      om = [{
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

    function Om(mm) {
      const Tm = om.findIndex((Tm => Tm.name === mm));
      return -1 === Tm ? om.length : Tm
    }
    const Ym = 2500,
      qm = 12e4;
    class jm extends Error {
      constructor(mm) {
        super(`Studio AI chat ${mm}`), this.reason = mm
      }
    }

    function Vm(mm, Tm) {
      const fm = new AbortController,
        hm = () => {
          fm.abort()
        },
        Am = setTimeout(hm, mm);
      return null !== Tm && void 0 !== Tm && Tm.aborted && hm(), null === Tm || void 0 === Tm || Tm.addEventListener("abort", hm, {
        once: !0
      }), {
        signal: fm.signal,
        clear: () => {
          clearTimeout(Am), null === Tm || void 0 === Tm || Tm.removeEventListener("abort", hm)
        }
      }
    }

    function Im(mm, Tm, fm) {
      return new Promise(((Am, am) => {
        const xm = new AbortController,
          wm = () => {
            xm.abort(), am((0, hm.c)(fm))
          };
        if (null !== fm && void 0 !== fm && fm.aborted) return void wm();
        null === fm || void 0 === fm || fm.addEventListener("abort", wm, {
          once: !0
        });
        const Dm = om.map((() => !1));
        let im = null;
        const Rm = om.map((() => !1)),
          pm = om.map((() => !1));
        om.forEach(((hm, Em) => {
          const Om = Vm(qm, xm.signal);
          nm(hm, [{
            role: "user",
            content: mm
          }], Om.signal).then((mm => {
            xm.signal.aborted || ("busy" === mm || "failed" === mm ? (Rm[Em] = "busy" === mm, pm[Em] = !0) : null !== mm && (null === im || Em < im.rank) && (im = {
              rank: Em,
              answer: {
                text: mm.text,
                model: hm.name
              }
            }, Tm(im.answer)))
          }), (mm => {
            xm.signal.aborted || (pm[Em] = !0, console.warn(`Studio AI: ${hm.name} couldn't be reached`, mm))
          })).finally((() => {
            Om.clear(), Dm[Em] = !0, xm.signal.aborted || (() => {
              var mm, Tm;
              const hm = null !== (mm = null === (Tm = im) || void 0 === Tm ? void 0 : Tm.rank) && void 0 !== mm ? mm : om.length;
              Dm.slice(0, hm).includes(!1) || (null === fm || void 0 === fm || fm.removeEventListener("abort", wm), xm.abort(), null !== im ? Am({
                ...im.answer,
                isFinal: !pm.slice(0, im.rank).includes(!0)
              }) : am(new jm(Rm.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((mm => {
            console.error("Studio AI: showing an answer failed", mm)
          }))
        }))
      }))
    }

    function Km(mm) {
      var Tm, fm;
      return "length" === (null === mm || void 0 === mm || null === (Tm = mm.choices) || void 0 === Tm || null === (fm = Tm[0]) || void 0 === fm ? void 0 : fm.finish_reason)
    }
    async function Qm(mm, Tm, fm) {
      const hm = om.find((Tm => Tm.name === mm));
      if (void 0 === hm) return "failed";
      const Am = Vm(qm, fm);
      try {
        const mm = await nm(hm, Tm, Am.signal);
        return null !== mm && "object" === typeof mm ? mm.isCutOff ? (console.warn(`Studio AI: ${hm.name}'s answer was cut off at the token limit`), null) : {
          text: mm.text
        } : mm
      } finally {
        Am.clear()
      }
    }
    async function nm(mm, Tm, fm) {
      const hm = await fetch(Em, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: mm.name,
          messages: Tm,
          max_tokens: Ym,
          temperature: mm.temperature,
          reasoning_effort: mm.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: fm
      });
      if (429 === hm.status) return "busy";
      if (!hm.ok) return console.warn(`Studio AI: ${mm.name} answered ${hm.status}`), "failed";
      const Am = await hm.json().catch((() => null)),
        am = function(mm) {
          var Tm, fm, hm;
          const Am = null === mm || void 0 === mm || null === (Tm = mm.choices) || void 0 === Tm || null === (fm = Tm[0]) || void 0 === fm || null === (hm = fm.message) || void 0 === hm ? void 0 : hm.content;
          if ("string" !== typeof Am) return null;
          const am = Am.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === am ? null : am
        }(Am);
      return null !== am && function(mm) {
        const Tm = pm(mm);
        return Tm.length >= Rm || Tm.some((mm => wm(mm)))
      }(am) ? (console.warn(`Studio AI: ${mm.name} thought out loud instead of answering`), "failed") : null === am ? null : {
        text: am,
        isCutOff: Km(Am)
      }
    }
  },
  6432: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => nm,
      E: () => qm,
      I: () => Im,
      K: () => Qm,
      N: () => Vm,
      R: () => pm,
      S: () => im,
      W: () => om,
      d: () => Om,
      f: () => wm,
      i: () => xm,
      k: () => Ym,
      m: () => Em,
      n: () => Rm,
      q: () => am,
      s: () => Am,
      w: () => Km
    });
    var hm = fm(4809);
    const Am = 2e3,
      am = 2e4;

    function xm(mm) {
      return mm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function wm(mm) {
      return mm.replace(/\$/g, "\\$")
    }
    const Dm = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function im(mm, Tm) {
      Dm.lastIndex = Tm;
      const fm = Dm.exec(mm);
      return fm.index + fm[0].length
    }

    function Rm(mm) {
      return (0, hm.w)(mm, /\s+/g, (0, hm.q)(".!?")).flatMap((mm => mm.split("\n")))
    }

    function pm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm;
      const hm = [...mm.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((mm => mm.index)),
        Am = hm.filter((mm => mm < Tm)),
        am = hm.find((mm => mm >= fm));
      return [0 === Am.length ? 0 : Am.at(-1) + 1, void 0 === am ? mm.length : am + 1]
    }

    function Em(mm, Tm) {
      const fm = mm.charCodeAt(Tm - 1);
      return mm.slice(0, Tm > 0 && Tm < mm.length && fm >= 55296 && fm <= 56319 ? Tm - 1 : Tm)
    }

    function om(mm, Tm) {
      return `${Tm}${mm.replace(/\\/g,"\\\\").split(Tm).join(`\\${Tm}`)}${Tm}`
    }

    function Om(mm) {
      return mm.charAt(0).toUpperCase() + mm.slice(1)
    }

    function Ym(mm) {
      return Math.round(mm).toLocaleString("en-US")
    }

    function qm(mm) {
      return mm.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((mm => "" !== mm))
    }
    const jm = 3;

    function Vm(mm, Tm) {
      return qm(mm).filter((mm => mm.length >= jm && !/\d/.test(mm))).map((mm => `${mm} ${Tm}`))
    }

    function Im(mm) {
      return mm.split(/[\s:_]+/).filter((mm => "" !== mm)).map(xm).join("[`:_\\s]+")
    }

    function Km(mm) {
      return qm(mm.split(".").pop())
    }

    function Qm(mm) {
      return mm.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function nm(mm) {
      let Tm = null;
      return () => {
        const fm = Tm ??= mm();
        return fm.catch((() => {
          Tm === fm && (Tm = null)
        })), fm
      }
    }
  },
  4809: (mm, Tm, fm) => {
    function hm(mm) {
      return {
        notAfter: mm
      }
    }
    fm.d(Tm, {
      c: () => Dm,
      g: () => im,
      j: () => wm,
      l: () => hm,
      n: () => Am,
      p: () => am,
      q: () => xm,
      s: () => Rm,
      w: () => pm
    });
    const Am = hm("\\w$."),
      am = hm("\\w.,");

    function xm(mm) {
      return Tm => Dm(Tm, mm)
    }

    function wm(mm) {
      return Tm => !mm.test(Tm.input.slice(0, Tm.index))
    }

    function Dm(mm, Tm) {
      return mm.index > 0 && new RegExp(`[${Tm}]`).test(mm.input[mm.index - 1])
    }

    function im(mm, Tm, fm) {
      return function(mm) {
        return void 0 !== mm && "function" !== typeof mm
      }(fm) ? function(mm, Tm, fm) {
        const hm = Tm.flags.replace(/[gy]/g, ""),
          Am = new RegExp(`[^${fm}](?:${Tm.source})`, `${hm}g`),
          am = [],
          xm = fm => {
            const hm = fm.index + fm[0].length;
            return ("" === fm[0] ? Em(mm, Tm, hm) : hm) - 1
          },
          wm = new RegExp(`(?:${Tm.source})`, `${hm}y`).exec(mm);
        if (wm) {
          if (am.push(wm), !Tm.global) return am;
          Am.lastIndex = xm(wm)
        }
        for (let Dm = Am.exec(mm); Dm; Dm = Am.exec(mm)) {
          const fm = Em(mm, Tm, Dm.index) - Dm.index;
          if (Dm[0] = Dm[0].slice(fm), Dm.index += fm, am.push(Dm), !Tm.global) break;
          Am.lastIndex = xm(Dm)
        }
        return am
      }(mm, Tm, fm.notAfter) : function(mm, Tm, fm) {
        const hm = new RegExp(Tm.source, `${Tm.flags.replace(/[gy]/g,"")}g`),
          Am = [];
        for (let am = hm.exec(mm); am; am = hm.exec(mm))
          if (!fm || fm(am)) {
            if (Am.push(am), !Tm.global) break;
            "" === am[0] && (hm.lastIndex = Em(mm, Tm, hm.lastIndex))
          } else hm.lastIndex = Em(mm, Tm, am.index);
        return Am
      }(mm, Tm, fm)
    }

    function Rm(mm, Tm, fm, hm) {
      let Am = "",
        am = 0;
      for (const xm of im(mm, Tm, fm)) Am += mm.slice(am, xm.index) + hm(xm), am = xm.index + xm[0].length;
      return Am + mm.slice(am)
    }

    function pm(mm, Tm, fm) {
      const hm = [];
      let Am = 0;
      for (const am of im(mm, Tm, fm)) hm.push(mm.slice(Am, am.index)), Am = am.index + am[0].length;
      return [...hm, mm.slice(Am)]
    }

    function Em(mm, Tm, fm) {
      var hm;
      return fm + (Tm.unicode && (null !== (hm = mm.codePointAt(fm)) && void 0 !== hm ? hm : 0) > 65535 ? 2 : 1)
    }
  },
  6460: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);