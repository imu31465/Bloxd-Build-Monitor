export const id = 69;
export const ids = [69];
export const modules = {
  3938: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      e: () => Zy,
      g: () => Ey,
      i: () => Sy,
      k: () => cb,
      l: () => hy,
      p: () => fy,
      s: () => sy,
      u: () => qb,
      x: () => ey
    });
    const Uy = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function hy(yb) {
      try {
        return decodeURIComponent(yb.slice(1))
      } catch {
        return yb.slice(1)
      }
    }

    function fy(yb) {
      return yb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Zy = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Uy.source}`, "g");

    function cb(yb, bb) {
      return 2 === yb.length ? bb.replace(/^ (.*) $/, "$1") : bb
    }

    function Py(yb) {
      return "" === yb.trim()
    }

    function oy(yb) {
      const bb = [];
      for (const Wy of yb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) bb.length > 0 && bb[bb.length - 1].endsWith("\\") ? bb[bb.length - 1] += `|${Wy}` : bb.push(Wy);
      return bb.map((yb => yb.trim().replaceAll("\\|", "|")))
    }
    const By = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function Ky(yb) {
      const bb = [],
        Wy = [{
          indent: -1,
          items: bb
        }];
      let Uy = null;
      for (const hy of yb) {
        const yb = hy.match(By);
        if (!yb) {
          Uy && (Uy.text += ` ${hy.trim()}`);
          continue
        }
        const bb = yb[1].replace(/\t/g, "  ").length;
        for (; bb <= Wy[Wy.length - 1].indent;) Wy.pop();
        Uy = {
          text: yb[3].trim(),
          children: []
        }, Wy[Wy.length - 1].items.push(Uy), Wy.push({
          indent: bb,
          items: Uy.children
        })
      }
      return bb
    }

    function ey(yb) {
      const bb = yb.replace(/\r\n/g, "\n").split("\n"),
        Wy = [];
      let Uy = 0;
      for (; Uy < bb.length;) {
        const yb = bb[Uy];
        if (Py(yb)) {
          Uy++;
          continue
        }
        const hy = yb.match(/^\s*```\s*(\w*)\s*$/);
        if (hy) {
          const yb = [];
          for (Uy++; Uy < bb.length && !/^\s*```\s*$/.test(bb[Uy]);) yb.push(bb[Uy]), Uy++;
          Uy++, Wy.push({
            kind: "code",
            lang: hy[1] || "text",
            code: yb.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Zy = yb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Zy) {
          const yb = Zy[2].trim();
          Wy.push({
            kind: "heading",
            level: Zy[1].length,
            text: yb,
            anchor: fy(yb)
          }), Uy++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(yb)) {
          Wy.push({
            kind: "rule"
          }), Uy++;
          continue
        }
        if (yb.trim().startsWith("|") && Uy + 1 < bb.length && /^\s*\|[\s:|-]+\|\s*$/.test(bb[Uy + 1])) {
          const hy = oy(yb),
            fy = [];
          for (Uy += 2; Uy < bb.length && bb[Uy].trim().startsWith("|");) fy.push(oy(bb[Uy])), Uy++;
          Wy.push({
            kind: "table",
            header: hy,
            rows: fy
          });
          continue
        }
        if (yb.startsWith(">")) {
          const yb = [];
          for (; Uy < bb.length && bb[Uy].startsWith(">");) yb.push(bb[Uy].replace(/^>\s?/, "")), Uy++;
          Wy.push({
            kind: "quote",
            blocks: ey(yb.join("\n"))
          });
          continue
        }
        if (By.test(yb)) {
          const hy = [],
            fy = /^\s*\d+\./.test(yb);
          for (; Uy < bb.length && !Py(bb[Uy]) && (By.test(bb[Uy]) || /^\s+\S/.test(bb[Uy]));) hy.push(bb[Uy]), Uy++;
          Wy.push({
            kind: "list",
            ordered: fy,
            items: Ky(hy)
          });
          continue
        }
        const cb = [];
        for (; Uy < bb.length && !Py(bb[Uy]) && !/^\s*```/.test(bb[Uy]) && !/^#{1,6}\s/.test(bb[Uy]) && !bb[Uy].startsWith(">") && !By.test(bb[Uy]) && (!bb[Uy].trim().startsWith("|") || 0 !== cb.length);) cb.push(bb[Uy].trim()), Uy++;
        0 === cb.length && (cb.push(bb[Uy].trim()), Uy++), Wy.push({
          kind: "paragraph",
          text: cb.join(" ")
        })
      }
      return Wy
    }

    function qb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Wy = ey(yb);
      let Uy = "";
      const hy = [],
        fy = [],
        Zy = new Map;
      for (const oy of Wy) {
        if ("heading" === oy.kind) {
          var cb;
          const yb = (null !== (cb = Zy.get(oy.anchor)) && void 0 !== cb ? cb : 0) + 1;
          Zy.set(oy.anchor, yb), yb > 1 && (oy.anchor = `${oy.anchor}-${yb}`)
        }
        if ("heading" === oy.kind && 1 === oy.level && !Uy) {
          Uy = oy.text;
          continue
        }
        if ("heading" === oy.kind && oy.level <= bb) {
          fy.push({
            heading: oy,
            blocks: []
          });
          continue
        }
        const yb = fy.at(-1);
        yb ? yb.blocks.push(oy) : hy.push(oy)
      }
      const Py = yb => {
        for (;
          "rule" === (null === (bb = yb.at(-1)) || void 0 === bb ? void 0 : bb.kind);) {
          var bb;
          yb.pop()
        }
      };
      Py(hy);
      for (const oy of fy) Py(oy.blocks);
      return {
        title: Uy,
        intro: hy,
        sections: fy
      }
    }

    function sy(yb) {
      return [{
        heading: null,
        blocks: yb.intro
      }, ...yb.sections.map((yb => ({
        heading: yb.heading,
        blocks: yb.blocks
      })))]
    }

    function Sy(yb) {
      return yb.flatMap((yb => "code" === yb.kind ? [yb] : "quote" === yb.kind ? Sy(yb.blocks) : []))
    }

    function Ey(yb) {
      switch (yb.kind) {
        case "heading":
        case "paragraph":
          return yb.text;
        case "code":
          return yb.code;
        case "table":
          return [yb.header, ...yb.rows].map((yb => yb.join(" "))).join(" ");
        case "list": {
          const bb = yb => yb.map((yb => `${yb.text} ${bb(yb.children)}`)).join(" ");
          return bb(yb.items)
        }
        case "quote":
          return yb.blocks.map(Ey).join(" ");
        case "rule":
          return ""
      }
    }
  },
  5748: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky,
      g: () => Zy,
      j: () => cb
    });
    Wy(5746);
    var Uy = Wy(55),
      hy = Wy(3938),
      fy = Wy(952);
    const Zy = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function cb(yb, bb) {
      return yb === bb ? yb : `${yb} (${bb})`
    }

    function Py(yb) {
      const bb = [];
      let Wy = 0;
      for (const Uy of yb.matchAll(Zy)) {
        Uy.index > Wy && bb.push(yb.slice(Wy, Uy.index));
        const [, hy, Zy, Py, oy, By, Ky] = Uy;
        void 0 !== hy ? bb.push(cb(hy, Zy)) : void 0 !== Py || void 0 !== oy ? bb.push((0, fy.jsx)("strong", {
          children: null !== Py && void 0 !== Py ? Py : oy
        }, Uy.index)) : void 0 !== By ? bb.push((0, fy.jsx)("em", {
          children: By
        }, Uy.index)) : bb.push((0, fy.jsx)("code", {
          children: Ky
        }, Uy.index)), Wy = Uy.index + Uy[0].length
      }
      return Wy < yb.length && bb.push(yb.slice(Wy)), bb
    }

    function oy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Uy = yb.map(((yb, bb) => (0, fy.jsxs)("li", {
        children: [Py(yb.text), yb.children.length > 0 && oy(yb.children, !1)]
      }, bb)));
      return bb ? (0, fy.jsx)("ol", {
        start: Wy,
        children: Uy
      }) : (0, fy.jsx)("ul", {
        children: Uy
      })
    }

    function By(yb, bb) {
      switch (yb.kind) {
        case "heading":
          return yb.level <= 2 ? (0, fy.jsx)("h3", {
            children: Py(yb.text)
          }, bb) : (0, fy.jsx)("h4", {
            children: Py(yb.text)
          }, bb);
        case "paragraph":
          return (0, fy.jsx)("p", {
            children: Py(yb.text)
          }, bb);
        case "list":
          return (0, fy.jsx)(Uy.Fragment, {
            children: oy(yb.items, yb.ordered)
          }, bb);
        case "quote":
          return (0, fy.jsx)("blockquote", {
            children: yb.blocks.map(((yb, bb) => By(yb, bb)))
          }, bb);
        case "code":
          return (0, fy.jsx)("pre", {
            children: (0, fy.jsx)("code", {
              children: yb.code
            })
          }, bb);
        case "table":
          return (0, fy.jsxs)("table", {
            children: [(0, fy.jsx)("thead", {
              children: (0, fy.jsx)("tr", {
                children: yb.header.map(((yb, bb) => (0, fy.jsx)("th", {
                  children: Py(yb)
                }, bb)))
              })
            }), (0, fy.jsx)("tbody", {
              children: yb.rows.map(((yb, bb) => (0, fy.jsx)("tr", {
                children: yb.map(((yb, bb) => (0, fy.jsx)("td", {
                  children: Py(yb)
                }, bb)))
              }, bb)))
            })]
          }, bb);
        case "rule":
          return (0, fy.jsx)("hr", {}, bb)
      }
    }

    function Ky(yb) {
      let {
        markdown: bb
      } = yb, Wy = 0;
      return (0, fy.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, hy.x)(bb).map(((yb, bb) => {
          if ("list" !== yb.kind || !yb.ordered) return Wy = 0, By(yb, bb);
          const hy = Wy + 1;
          return Wy += yb.items.length, (0, fy.jsx)(Uy.Fragment, {
            children: oy(yb.items, !0, hy)
          }, bb)
        }))
      })
    }
  },
  5743: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => mb,
      g: () => Cy,
      f: () => Vy,
      h: () => sy
    });
    var Uy = Wy(5740),
      hy = Wy(5700),
      fy = Wy(4074);
    const Zy = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function cb(yb) {
      return (0, fy.g)(yb, Zy, (bb => !/^my/i.test(bb[0]) || !/follow $/i.test(yb.slice(0, bb.index)))).length > 0
    }
    const Py = /\byou(?:r|'re|'ll)?\b/i,
      oy = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      By = 2;

    function Ky(yb) {
      return function(yb) {
        const bb = [];
        let Wy = !1;
        for (const Uy of yb.split("\n")) {
          if (/^\s*(```|~~~)/.test(Uy)) {
            Wy = !Wy;
            continue
          }
          if (Wy || /^\s*>/.test(Uy)) continue;
          const yb = Uy.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          bb.push(...(0, hy.p)(yb))
        }
        return bb
      }(yb).filter((yb => cb(yb) || oy.test(yb) && !Py.test(yb)))
    }
    const ey = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      qb = [{
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

    function sy(yb) {
      const bb = qb.findIndex((bb => bb.name === yb));
      return -1 === bb ? qb.length : bb
    }
    const Sy = 2500,
      Ey = 12e4;
    class ly extends Error {
      constructor(yb) {
        super(`Studio AI chat ${yb}`), this.reason = yb
      }
    }

    function mb(yb, bb) {
      const Wy = new AbortController,
        Uy = () => {
          Wy.abort()
        },
        hy = setTimeout(Uy, yb);
      return null !== bb && void 0 !== bb && bb.aborted && Uy(), null === bb || void 0 === bb || bb.addEventListener("abort", Uy, {
        once: !0
      }), {
        signal: Wy.signal,
        clear: () => {
          clearTimeout(hy), null === bb || void 0 === bb || bb.removeEventListener("abort", Uy)
        }
      }
    }

    function Cy(yb, bb, Wy) {
      return new Promise(((hy, fy) => {
        const Zy = new AbortController,
          cb = () => {
            Zy.abort(), fy((0, Uy.e)(Wy))
          };
        if (null !== Wy && void 0 !== Wy && Wy.aborted) return void cb();
        null === Wy || void 0 === Wy || Wy.addEventListener("abort", cb, {
          once: !0
        });
        const Py = qb.map((() => !1));
        let oy = null;
        const By = qb.map((() => !1)),
          Ky = qb.map((() => !1));
        qb.forEach(((Uy, ey) => {
          const sy = mb(Ey, Zy.signal);
          Jy(Uy, [{
            role: "user",
            content: yb
          }], sy.signal).then((yb => {
            Zy.signal.aborted || ("busy" === yb || "failed" === yb ? (By[ey] = "busy" === yb, Ky[ey] = !0) : null !== yb && (null === oy || ey < oy.rank) && (oy = {
              rank: ey,
              answer: {
                text: yb.text,
                model: Uy.name
              }
            }, bb(oy.answer)))
          }), (yb => {
            Zy.signal.aborted || (Ky[ey] = !0, console.warn(`Studio AI: ${Uy.name} couldn't be reached`, yb))
          })).finally((() => {
            sy.clear(), Py[ey] = !0, Zy.signal.aborted || (() => {
              var yb, bb;
              const Uy = null !== (yb = null === (bb = oy) || void 0 === bb ? void 0 : bb.rank) && void 0 !== yb ? yb : qb.length;
              Py.slice(0, Uy).includes(!1) || (null === Wy || void 0 === Wy || Wy.removeEventListener("abort", cb), Zy.abort(), null !== oy ? hy({
                ...oy.answer,
                isFinal: !Ky.slice(0, oy.rank).includes(!0)
              }) : fy(new ly(By.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((yb => {
            console.error("Studio AI: showing an answer failed", yb)
          }))
        }))
      }))
    }

    function Ty(yb) {
      var bb, Wy;
      return "length" === (null === yb || void 0 === yb || null === (bb = yb.choices) || void 0 === bb || null === (Wy = bb[0]) || void 0 === Wy ? void 0 : Wy.finish_reason)
    }
    async function Vy(yb, bb, Wy) {
      const Uy = qb.find((bb => bb.name === yb));
      if (void 0 === Uy) return "failed";
      const hy = mb(Ey, Wy);
      try {
        const yb = await Jy(Uy, bb, hy.signal);
        return null !== yb && "object" === typeof yb ? yb.isCutOff ? (console.warn(`Studio AI: ${Uy.name}'s answer was cut off at the token limit`), null) : {
          text: yb.text
        } : yb
      } finally {
        hy.clear()
      }
    }
    async function Jy(yb, bb, Wy) {
      const Uy = await fetch(ey, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: yb.name,
          messages: bb,
          max_tokens: Sy,
          temperature: yb.temperature,
          reasoning_effort: yb.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Wy
      });
      if (429 === Uy.status) return "busy";
      if (!Uy.ok) return console.warn(`Studio AI: ${yb.name} answered ${Uy.status}`), "failed";
      const hy = await Uy.json().catch((() => null)),
        fy = function(yb) {
          var bb, Wy, Uy;
          const hy = null === yb || void 0 === yb || null === (bb = yb.choices) || void 0 === bb || null === (Wy = bb[0]) || void 0 === Wy || null === (Uy = Wy.message) || void 0 === Uy ? void 0 : Uy.content;
          if ("string" !== typeof hy) return null;
          const fy = hy.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === fy ? null : fy
        }(hy);
      return null !== fy && function(yb) {
        const bb = Ky(yb);
        return bb.length >= By || bb.some((yb => cb(yb)))
      }(fy) ? (console.warn(`Studio AI: ${yb.name} thought out loud instead of answering`), "failed") : null === fy ? null : {
        text: fy,
        isCutOff: Ty(hy)
      }
    }
  },
  5700: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => Jy,
      D: () => Ey,
      G: () => Cy,
      I: () => Vy,
      K: () => mb,
      L: () => Ky,
      P: () => oy,
      Q: () => qb,
      c: () => sy,
      g: () => cb,
      h: () => Zy,
      l: () => Sy,
      m: () => ey,
      p: () => By,
      q: () => fy,
      t: () => hy,
      w: () => Ty
    });
    var Uy = Wy(4074);
    const hy = 2e3,
      fy = 2e4;

    function Zy(yb) {
      return yb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function cb(yb) {
      return yb.replace(/\$/g, "\\$")
    }
    const Py = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function oy(yb, bb) {
      Py.lastIndex = bb;
      const Wy = Py.exec(yb);
      return Wy.index + Wy[0].length
    }

    function By(yb) {
      return (0, Uy.x)(yb, /\s+/g, (0, Uy.r)(".!?")).flatMap((yb => yb.split("\n")))
    }

    function Ky(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
      const Uy = [...yb.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((yb => yb.index)),
        hy = Uy.filter((yb => yb < bb)),
        fy = Uy.find((yb => yb >= Wy));
      return [0 === hy.length ? 0 : hy.at(-1) + 1, void 0 === fy ? yb.length : fy + 1]
    }

    function ey(yb, bb) {
      const Wy = yb.charCodeAt(bb - 1);
      return yb.slice(0, bb > 0 && bb < yb.length && Wy >= 55296 && Wy <= 56319 ? bb - 1 : bb)
    }

    function qb(yb, bb) {
      return `${bb}${yb.replace(/\\/g,"\\\\").split(bb).join(`\\${bb}`)}${bb}`
    }

    function sy(yb) {
      return yb.charAt(0).toUpperCase() + yb.slice(1)
    }

    function Sy(yb) {
      return Math.round(yb).toLocaleString("en-US")
    }

    function Ey(yb) {
      return yb.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((yb => "" !== yb))
    }
    const ly = 3;

    function mb(yb, bb) {
      return Ey(yb).filter((yb => yb.length >= ly && !/\d/.test(yb))).map((yb => `${yb} ${bb}`))
    }

    function Cy(yb) {
      return yb.split(/[\s:_]+/).filter((yb => "" !== yb)).map(Zy).join("[`:_\\s]+")
    }

    function Ty(yb) {
      return Ey(yb.split(".").pop())
    }

    function Vy(yb) {
      return yb.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function Jy(yb) {
      let bb = null;
      return () => {
        const Wy = bb ??= yb();
        return Wy.catch((() => {
          bb === Wy && (bb = null)
        })), Wy
      }
    }
  },
  5740: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => fy,
      f: () => hy,
      j: () => Zy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      yb.signal.aborted || Uy.set(yb.signal, bb), yb.abort(bb)
    }

    function fy(yb) {
      var bb;
      const Wy = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.reason) && void 0 !== bb ? bb : yb && Uy.get(yb);
      if (void 0 !== Wy && null !== Wy) return Wy;
      const hy = new DOMException("signal is aborted without reason", "AbortError");
      return null !== yb && void 0 !== yb && yb.aborted && Uy.set(yb, hy), hy
    }

    function Zy(yb) {
      if (null !== yb && void 0 !== yb && yb.aborted) throw fy(yb)
    }
    class cb {
      constructor(yb) {
        this.outer = yb, this.controller = new AbortController, this.onOuterAbort = () => {
          hy(this.controller, fy(this.outer))
        }, null !== yb && void 0 !== yb && yb.aborted ? this.onOuterAbort() : null === yb || void 0 === yb || yb.addEventListener("abort", this.onOuterAbort, {
          once: !0
        })
      }
      get signal() {
        return this.controller.signal
      }
      unfollow() {
        var yb;
        null === (yb = this.outer) || void 0 === yb || yb.removeEventListener("abort", this.onOuterAbort)
      }
    }
  },
  4074: (yb, bb, Wy) => {
    function Uy(yb) {
      return {
        notAfter: yb
      }
    }
    Wy.d(bb, {
      e: () => Py,
      g: () => oy,
      i: () => cb,
      j: () => Uy,
      m: () => hy,
      o: () => fy,
      r: () => Zy,
      u: () => By,
      x: () => Ky
    });
    const hy = Uy("\\w$."),
      fy = Uy("\\w.,");

    function Zy(yb) {
      return bb => Py(bb, yb)
    }

    function cb(yb) {
      return bb => !yb.test(bb.input.slice(0, bb.index))
    }

    function Py(yb, bb) {
      return yb.index > 0 && new RegExp(`[${bb}]`).test(yb.input[yb.index - 1])
    }

    function oy(yb, bb, Wy) {
      return function(yb) {
        return void 0 !== yb && "function" !== typeof yb
      }(Wy) ? function(yb, bb, Wy) {
        const Uy = bb.flags.replace(/[gy]/g, ""),
          hy = new RegExp(`[^${Wy}](?:${bb.source})`, `${Uy}g`),
          fy = [],
          Zy = Wy => {
            const Uy = Wy.index + Wy[0].length;
            return ("" === Wy[0] ? ey(yb, bb, Uy) : Uy) - 1
          },
          cb = new RegExp(`(?:${bb.source})`, `${Uy}y`).exec(yb);
        if (cb) {
          if (fy.push(cb), !bb.global) return fy;
          hy.lastIndex = Zy(cb)
        }
        for (let Py = hy.exec(yb); Py; Py = hy.exec(yb)) {
          const Wy = ey(yb, bb, Py.index) - Py.index;
          if (Py[0] = Py[0].slice(Wy), Py.index += Wy, fy.push(Py), !bb.global) break;
          hy.lastIndex = Zy(Py)
        }
        return fy
      }(yb, bb, Wy.notAfter) : function(yb, bb, Wy) {
        const Uy = new RegExp(bb.source, `${bb.flags.replace(/[gy]/g,"")}g`),
          hy = [];
        for (let fy = Uy.exec(yb); fy; fy = Uy.exec(yb))
          if (!Wy || Wy(fy)) {
            if (hy.push(fy), !bb.global) break;
            "" === fy[0] && (Uy.lastIndex = ey(yb, bb, Uy.lastIndex))
          } else Uy.lastIndex = ey(yb, bb, fy.index);
        return hy
      }(yb, bb, Wy)
    }

    function By(yb, bb, Wy, Uy) {
      let hy = "",
        fy = 0;
      for (const Zy of oy(yb, bb, Wy)) hy += yb.slice(fy, Zy.index) + Uy(Zy), fy = Zy.index + Zy[0].length;
      return hy + yb.slice(fy)
    }

    function Ky(yb, bb, Wy) {
      const Uy = [];
      let hy = 0;
      for (const fy of oy(yb, bb, Wy)) Uy.push(yb.slice(hy, fy.index)), hy = fy.index + fy[0].length;
      return [...Uy, yb.slice(hy)]
    }

    function ey(yb, bb, Wy) {
      var Uy;
      return Wy + (bb.unicode && (null !== (Uy = yb.codePointAt(Wy)) && void 0 !== Uy ? Uy : 0) > 65535 ? 2 : 1)
    }
  },
  5746: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);