export const id = 77;
export const ids = [77];
export const modules = {
  4379: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Nz,
      d: () => Fz,
      e: () => Oz,
      i: () => gz,
      l: () => Dz,
      n: () => oz,
      q: () => Wz,
      t: () => Xz,
      w: () => wz,
      x: () => bz
    });
    const Fz = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function Wz(zz) {
      try {
        return decodeURIComponent(zz.slice(1))
      } catch {
        return zz.slice(1)
      }
    }

    function Xz(zz) {
      return zz.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const Oz = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Fz.source}`, "g");

    function oz(zz, tz) {
      return 2 === zz.length ? tz.replace(/^ (.*) $/, "$1") : tz
    }

    function vz(zz) {
      return "" === zz.trim()
    }

    function Uz(zz) {
      const tz = [];
      for (const sz of zz.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) tz.length > 0 && tz[tz.length - 1].endsWith("\\") ? tz[tz.length - 1] += `|${sz}` : tz.push(sz);
      return tz.map((zz => zz.trim().replaceAll("\\|", "|")))
    }
    const Kz = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function uz(zz) {
      const tz = [],
        sz = [{
          indent: -1,
          items: tz
        }];
      let Fz = null;
      for (const Wz of zz) {
        const zz = Wz.match(Kz);
        if (!zz) {
          Fz && (Fz.text += ` ${Wz.trim()}`);
          continue
        }
        const tz = zz[1].replace(/\t/g, "  ").length;
        for (; tz <= sz[sz.length - 1].indent;) sz.pop();
        Fz = {
          text: zz[3].trim(),
          children: []
        }, sz[sz.length - 1].items.push(Fz), sz.push({
          indent: tz,
          items: Fz.children
        })
      }
      return tz
    }

    function Nz(zz) {
      const tz = zz.replace(/\r\n/g, "\n").split("\n"),
        sz = [];
      let Fz = 0;
      for (; Fz < tz.length;) {
        const zz = tz[Fz];
        if (vz(zz)) {
          Fz++;
          continue
        }
        const Wz = zz.match(/^\s*```\s*(\w*)\s*$/);
        if (Wz) {
          const zz = [];
          for (Fz++; Fz < tz.length && !/^\s*```\s*$/.test(tz[Fz]);) zz.push(tz[Fz]), Fz++;
          Fz++, sz.push({
            kind: "code",
            lang: Wz[1] || "text",
            code: zz.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const Oz = zz.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (Oz) {
          const zz = Oz[2].trim();
          sz.push({
            kind: "heading",
            level: Oz[1].length,
            text: zz,
            anchor: Xz(zz)
          }), Fz++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(zz)) {
          sz.push({
            kind: "rule"
          }), Fz++;
          continue
        }
        if (zz.trim().startsWith("|") && Fz + 1 < tz.length && /^\s*\|[\s:|-]+\|\s*$/.test(tz[Fz + 1])) {
          const Wz = Uz(zz),
            Xz = [];
          for (Fz += 2; Fz < tz.length && tz[Fz].trim().startsWith("|");) Xz.push(Uz(tz[Fz])), Fz++;
          sz.push({
            kind: "table",
            header: Wz,
            rows: Xz
          });
          continue
        }
        if (zz.startsWith(">")) {
          const zz = [];
          for (; Fz < tz.length && tz[Fz].startsWith(">");) zz.push(tz[Fz].replace(/^>\s?/, "")), Fz++;
          sz.push({
            kind: "quote",
            blocks: Nz(zz.join("\n"))
          });
          continue
        }
        if (Kz.test(zz)) {
          const Wz = [],
            Xz = /^\s*\d+\./.test(zz);
          for (; Fz < tz.length && !vz(tz[Fz]) && (Kz.test(tz[Fz]) || /^\s+\S/.test(tz[Fz]));) Wz.push(tz[Fz]), Fz++;
          sz.push({
            kind: "list",
            ordered: Xz,
            items: uz(Wz)
          });
          continue
        }
        const oz = [];
        for (; Fz < tz.length && !vz(tz[Fz]) && !/^\s*```/.test(tz[Fz]) && !/^#{1,6}\s/.test(tz[Fz]) && !tz[Fz].startsWith(">") && !Kz.test(tz[Fz]) && (!tz[Fz].trim().startsWith("|") || 0 !== oz.length);) oz.push(tz[Fz].trim()), Fz++;
        0 === oz.length && (oz.push(tz[Fz].trim()), Fz++), sz.push({
          kind: "paragraph",
          text: oz.join(" ")
        })
      }
      return sz
    }

    function bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const sz = Nz(zz);
      let Fz = "";
      const Wz = [],
        Xz = [],
        Oz = new Map;
      for (const Uz of sz) {
        if ("heading" === Uz.kind) {
          var oz;
          const zz = (null !== (oz = Oz.get(Uz.anchor)) && void 0 !== oz ? oz : 0) + 1;
          Oz.set(Uz.anchor, zz), zz > 1 && (Uz.anchor = `${Uz.anchor}-${zz}`)
        }
        if ("heading" === Uz.kind && 1 === Uz.level && !Fz) {
          Fz = Uz.text;
          continue
        }
        if ("heading" === Uz.kind && Uz.level <= tz) {
          Xz.push({
            heading: Uz,
            blocks: []
          });
          continue
        }
        const zz = Xz.at(-1);
        zz ? zz.blocks.push(Uz) : Wz.push(Uz)
      }
      const vz = zz => {
        for (;
          "rule" === (null === (tz = zz.at(-1)) || void 0 === tz ? void 0 : tz.kind);) {
          var tz;
          zz.pop()
        }
      };
      vz(Wz);
      for (const Uz of Xz) vz(Uz.blocks);
      return {
        title: Fz,
        intro: Wz,
        sections: Xz
      }
    }

    function wz(zz) {
      return [{
        heading: null,
        blocks: zz.intro
      }, ...zz.sections.map((zz => ({
        heading: zz.heading,
        blocks: zz.blocks
      })))]
    }

    function Dz(zz) {
      return zz.flatMap((zz => "code" === zz.kind ? [zz] : "quote" === zz.kind ? Dz(zz.blocks) : []))
    }

    function gz(zz) {
      switch (zz.kind) {
        case "heading":
        case "paragraph":
          return zz.text;
        case "code":
          return zz.code;
        case "table":
          return [zz.header, ...zz.rows].map((zz => zz.join(" "))).join(" ");
        case "list": {
          const tz = zz => zz.map((zz => `${zz.text} ${tz(zz.children)}`)).join(" ");
          return tz(zz.items)
        }
        case "quote":
          return zz.blocks.map(gz).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6082: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => uz,
      c: () => Oz,
      e: () => oz
    });
    sz(6078);
    var Fz = sz(65),
      Wz = sz(4379),
      Xz = sz(1087);
    const Oz = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function oz(zz, tz) {
      return zz === tz ? zz : `${zz} (${tz})`
    }

    function vz(zz) {
      const tz = [];
      let sz = 0;
      for (const Fz of zz.matchAll(Oz)) {
        Fz.index > sz && tz.push(zz.slice(sz, Fz.index));
        const [, Wz, Oz, vz, Uz, Kz, uz] = Fz;
        void 0 !== Wz ? tz.push(oz(Wz, Oz)) : void 0 !== vz || void 0 !== Uz ? tz.push((0, Xz.jsx)("strong", {
          children: null !== vz && void 0 !== vz ? vz : Uz
        }, Fz.index)) : void 0 !== Kz ? tz.push((0, Xz.jsx)("em", {
          children: Kz
        }, Fz.index)) : tz.push((0, Xz.jsx)("code", {
          children: uz
        }, Fz.index)), sz = Fz.index + Fz[0].length
      }
      return sz < zz.length && tz.push(zz.slice(sz)), tz
    }

    function Uz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Fz = zz.map(((zz, tz) => (0, Xz.jsxs)("li", {
        children: [vz(zz.text), zz.children.length > 0 && Uz(zz.children, !1)]
      }, tz)));
      return tz ? (0, Xz.jsx)("ol", {
        start: sz,
        children: Fz
      }) : (0, Xz.jsx)("ul", {
        children: Fz
      })
    }

    function Kz(zz, tz) {
      switch (zz.kind) {
        case "heading":
          return zz.level <= 2 ? (0, Xz.jsx)("h3", {
            children: vz(zz.text)
          }, tz) : (0, Xz.jsx)("h4", {
            children: vz(zz.text)
          }, tz);
        case "paragraph":
          return (0, Xz.jsx)("p", {
            children: vz(zz.text)
          }, tz);
        case "list":
          return (0, Xz.jsx)(Fz.Fragment, {
            children: Uz(zz.items, zz.ordered)
          }, tz);
        case "quote":
          return (0, Xz.jsx)("blockquote", {
            children: zz.blocks.map(((zz, tz) => Kz(zz, tz)))
          }, tz);
        case "code":
          return (0, Xz.jsx)("pre", {
            children: (0, Xz.jsx)("code", {
              children: zz.code
            })
          }, tz);
        case "table":
          return (0, Xz.jsxs)("table", {
            children: [(0, Xz.jsx)("thead", {
              children: (0, Xz.jsx)("tr", {
                children: zz.header.map(((zz, tz) => (0, Xz.jsx)("th", {
                  children: vz(zz)
                }, tz)))
              })
            }), (0, Xz.jsx)("tbody", {
              children: zz.rows.map(((zz, tz) => (0, Xz.jsx)("tr", {
                children: zz.map(((zz, tz) => (0, Xz.jsx)("td", {
                  children: vz(zz)
                }, tz)))
              }, tz)))
            })]
          }, tz);
        case "rule":
          return (0, Xz.jsx)("hr", {}, tz)
      }
    }

    function uz(zz) {
      let {
        markdown: tz
      } = zz, sz = 0;
      return (0, Xz.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, Wz.A)(tz).map(((zz, tz) => {
          if ("list" !== zz.kind || !zz.ordered) return sz = 0, Kz(zz, tz);
          const Wz = sz + 1;
          return sz += zz.items.length, (0, Xz.jsx)(Fz.Fragment, {
            children: Uz(zz.items, !0, Wz)
          }, tz)
        }))
      })
    }
  },
  6074: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Bz,
      f: () => Pz,
      e: () => Yz,
      i: () => wz
    });
    var Fz = sz(1750),
      Wz = sz(6035),
      Xz = sz(4495);
    const Oz = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function oz(zz) {
      return (0, Xz.e)(zz, Oz, (tz => !/^my/i.test(tz[0]) || !/follow $/i.test(zz.slice(0, tz.index)))).length > 0
    }
    const vz = /\byou(?:r|'re|'ll)?\b/i,
      Uz = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Kz = 2;

    function uz(zz) {
      return function(zz) {
        const tz = [];
        let sz = !1;
        for (const Fz of zz.split("\n")) {
          if (/^\s*(```|~~~)/.test(Fz)) {
            sz = !sz;
            continue
          }
          if (sz || /^\s*>/.test(Fz)) continue;
          const zz = Fz.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          tz.push(...(0, Wz.t)(zz))
        }
        return tz
      }(zz).filter((zz => oz(zz) || Uz.test(zz) && !vz.test(zz)))
    }
    const Nz = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      bz = [{
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

    function wz(zz) {
      const tz = bz.findIndex((tz => tz.name === zz));
      return -1 === tz ? bz.length : tz
    }
    const Dz = 2500,
      gz = 12e4;
    class Hz extends Error {
      constructor(zz) {
        super(`Studio AI chat ${zz}`), this.reason = zz
      }
    }

    function Bz(zz, tz) {
      const sz = new AbortController,
        Fz = () => {
          sz.abort()
        },
        Wz = setTimeout(Fz, zz);
      return null !== tz && void 0 !== tz && tz.aborted && Fz(), null === tz || void 0 === tz || tz.addEventListener("abort", Fz, {
        once: !0
      }), {
        signal: sz.signal,
        clear: () => {
          clearTimeout(Wz), null === tz || void 0 === tz || tz.removeEventListener("abort", Fz)
        }
      }
    }

    function Pz(zz, tz, sz) {
      return new Promise(((Wz, Xz) => {
        const Oz = new AbortController,
          oz = () => {
            Oz.abort(), Xz((0, Fz.f)(sz))
          };
        if (null !== sz && void 0 !== sz && sz.aborted) return void oz();
        null === sz || void 0 === sz || sz.addEventListener("abort", oz, {
          once: !0
        });
        const vz = bz.map((() => !1));
        let Uz = null;
        const Kz = bz.map((() => !1)),
          uz = bz.map((() => !1));
        bz.forEach(((Fz, Nz) => {
          const wz = Bz(gz, Oz.signal);
          xz(Fz, [{
            role: "user",
            content: zz
          }], wz.signal).then((zz => {
            Oz.signal.aborted || ("busy" === zz || "failed" === zz ? (Kz[Nz] = "busy" === zz, uz[Nz] = !0) : null !== zz && (null === Uz || Nz < Uz.rank) && (Uz = {
              rank: Nz,
              answer: {
                text: zz.text,
                model: Fz.name
              }
            }, tz(Uz.answer)))
          }), (zz => {
            Oz.signal.aborted || (uz[Nz] = !0, console.warn(`Studio AI: ${Fz.name} couldn't be reached`, zz))
          })).finally((() => {
            wz.clear(), vz[Nz] = !0, Oz.signal.aborted || (() => {
              var zz, tz;
              const Fz = null !== (zz = null === (tz = Uz) || void 0 === tz ? void 0 : tz.rank) && void 0 !== zz ? zz : bz.length;
              vz.slice(0, Fz).includes(!1) || (null === sz || void 0 === sz || sz.removeEventListener("abort", oz), Oz.abort(), null !== Uz ? Wz({
                ...Uz.answer,
                isFinal: !uz.slice(0, Uz.rank).includes(!0)
              }) : Xz(new Hz(Kz.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((zz => {
            console.error("Studio AI: showing an answer failed", zz)
          }))
        }))
      }))
    }

    function rz(zz) {
      var tz, sz;
      return "length" === (null === zz || void 0 === zz || null === (tz = zz.choices) || void 0 === tz || null === (sz = tz[0]) || void 0 === sz ? void 0 : sz.finish_reason)
    }
    async function Yz(zz, tz, sz) {
      const Fz = bz.find((tz => tz.name === zz));
      if (void 0 === Fz) return "failed";
      const Wz = Bz(gz, sz);
      try {
        const zz = await xz(Fz, tz, Wz.signal);
        return null !== zz && "object" === typeof zz ? zz.isCutOff ? (console.warn(`Studio AI: ${Fz.name}'s answer was cut off at the token limit`), null) : {
          text: zz.text
        } : zz
      } finally {
        Wz.clear()
      }
    }
    async function xz(zz, tz, sz) {
      const Fz = await fetch(Nz, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: zz.name,
          messages: tz,
          max_tokens: Dz,
          temperature: zz.temperature,
          reasoning_effort: zz.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: sz
      });
      if (429 === Fz.status) return "busy";
      if (!Fz.ok) return console.warn(`Studio AI: ${zz.name} answered ${Fz.status}`), "failed";
      const Wz = await Fz.json().catch((() => null)),
        Xz = function(zz) {
          var tz, sz, Fz;
          const Wz = null === zz || void 0 === zz || null === (tz = zz.choices) || void 0 === tz || null === (sz = tz[0]) || void 0 === sz || null === (Fz = sz.message) || void 0 === Fz ? void 0 : Fz.content;
          if ("string" !== typeof Wz) return null;
          const Xz = Wz.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === Xz ? null : Xz
        }(Wz);
      return null !== Xz && function(zz) {
        const tz = uz(zz);
        return tz.length >= Kz || tz.some((zz => oz(zz)))
      }(Xz) ? (console.warn(`Studio AI: ${zz.name} thought out loud instead of answering`), "failed") : null === Xz ? null : {
        text: Xz,
        isCutOff: rz(Wz)
      }
    }
  },
  6035: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Wz,
      D: () => rz,
      F: () => xz,
      H: () => gz,
      K: () => Pz,
      L: () => Yz,
      M: () => Bz,
      P: () => uz,
      T: () => Uz,
      W: () => bz,
      e: () => wz,
      g: () => oz,
      i: () => Oz,
      m: () => Dz,
      p: () => Nz,
      t: () => Kz,
      x: () => Xz
    });
    var Fz = sz(4495);
    const Wz = 2e3,
      Xz = 2e4;

    function Oz(zz) {
      return zz.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function oz(zz) {
      return zz.replace(/\$/g, "\\$")
    }
    const vz = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Uz(zz, tz) {
      vz.lastIndex = tz;
      const sz = vz.exec(zz);
      return sz.index + sz[0].length
    }

    function Kz(zz) {
      return (0, Fz.y)(zz, /\s+/g, (0, Fz.s)(".!?")).flatMap((zz => zz.split("\n")))
    }

    function uz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz;
      const Fz = [...zz.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((zz => zz.index)),
        Wz = Fz.filter((zz => zz < tz)),
        Xz = Fz.find((zz => zz >= sz));
      return [0 === Wz.length ? 0 : Wz.at(-1) + 1, void 0 === Xz ? zz.length : Xz + 1]
    }

    function Nz(zz, tz) {
      const sz = zz.charCodeAt(tz - 1);
      return zz.slice(0, tz > 0 && tz < zz.length && sz >= 55296 && sz <= 56319 ? tz - 1 : tz)
    }

    function bz(zz, tz) {
      return `${tz}${zz.replace(/\\/g,"\\\\").split(tz).join(`\\${tz}`)}${tz}`
    }

    function wz(zz) {
      return zz.charAt(0).toUpperCase() + zz.slice(1)
    }

    function Dz(zz) {
      return Math.round(zz).toLocaleString("en-US")
    }

    function gz(zz) {
      return zz.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((zz => "" !== zz))
    }
    const Hz = 3;

    function Bz(zz, tz) {
      return gz(zz).filter((zz => zz.length >= Hz && !/\d/.test(zz))).map((zz => `${zz} ${tz}`))
    }

    function Pz(zz) {
      return zz.split(/[\s:_]+/).filter((zz => "" !== zz)).map(Oz).join("[`:_\\s]+")
    }

    function rz(zz) {
      return gz(zz.split(".").pop())
    }

    function Yz(zz) {
      return zz.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function xz(zz) {
      let tz = null;
      return () => {
        const sz = tz ??= zz();
        return sz.catch((() => {
          tz === sz && (tz = null)
        })), sz
      }
    }
  },
  4495: (zz, tz, sz) => {
    function Fz(zz) {
      return {
        notAfter: zz
      }
    }
    sz.d(tz, {
      d: () => vz,
      e: () => Uz,
      h: () => oz,
      l: () => Fz,
      n: () => Wz,
      p: () => Xz,
      s: () => Oz,
      v: () => Kz,
      y: () => uz
    });
    const Wz = Fz("\\w$."),
      Xz = Fz("\\w.,");

    function Oz(zz) {
      return tz => vz(tz, zz)
    }

    function oz(zz) {
      return tz => !zz.test(tz.input.slice(0, tz.index))
    }

    function vz(zz, tz) {
      return zz.index > 0 && new RegExp(`[${tz}]`).test(zz.input[zz.index - 1])
    }

    function Uz(zz, tz, sz) {
      return function(zz) {
        return void 0 !== zz && "function" !== typeof zz
      }(sz) ? function(zz, tz, sz) {
        const Fz = tz.flags.replace(/[gy]/g, ""),
          Wz = new RegExp(`[^${sz}](?:${tz.source})`, `${Fz}g`),
          Xz = [],
          Oz = sz => {
            const Fz = sz.index + sz[0].length;
            return ("" === sz[0] ? Nz(zz, tz, Fz) : Fz) - 1
          },
          oz = new RegExp(`(?:${tz.source})`, `${Fz}y`).exec(zz);
        if (oz) {
          if (Xz.push(oz), !tz.global) return Xz;
          Wz.lastIndex = Oz(oz)
        }
        for (let vz = Wz.exec(zz); vz; vz = Wz.exec(zz)) {
          const sz = Nz(zz, tz, vz.index) - vz.index;
          if (vz[0] = vz[0].slice(sz), vz.index += sz, Xz.push(vz), !tz.global) break;
          Wz.lastIndex = Oz(vz)
        }
        return Xz
      }(zz, tz, sz.notAfter) : function(zz, tz, sz) {
        const Fz = new RegExp(tz.source, `${tz.flags.replace(/[gy]/g,"")}g`),
          Wz = [];
        for (let Xz = Fz.exec(zz); Xz; Xz = Fz.exec(zz))
          if (!sz || sz(Xz)) {
            if (Wz.push(Xz), !tz.global) break;
            "" === Xz[0] && (Fz.lastIndex = Nz(zz, tz, Fz.lastIndex))
          } else Fz.lastIndex = Nz(zz, tz, Xz.index);
        return Wz
      }(zz, tz, sz)
    }

    function Kz(zz, tz, sz, Fz) {
      let Wz = "",
        Xz = 0;
      for (const Oz of Uz(zz, tz, sz)) Wz += zz.slice(Xz, Oz.index) + Fz(Oz), Xz = Oz.index + Oz[0].length;
      return Wz + zz.slice(Xz)
    }

    function uz(zz, tz, sz) {
      const Fz = [];
      let Wz = 0;
      for (const Xz of Uz(zz, tz, sz)) Fz.push(zz.slice(Wz, Xz.index)), Wz = Xz.index + Xz[0].length;
      return [...Fz, zz.slice(Wz)]
    }

    function Nz(zz, tz, sz) {
      var Fz;
      return sz + (tz.unicode && (null !== (Fz = zz.codePointAt(sz)) && void 0 !== Fz ? Fz : 0) > 65535 ? 2 : 1)
    }
  },
  6078: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);