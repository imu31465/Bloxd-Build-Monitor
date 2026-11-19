export const id = 77;
export const ids = [77];
export const modules = {
  4489: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      c: () => lz,
      e: () => Kz,
      f: () => Rz,
      g: () => Mz,
      h: () => nz,
      k: () => iz,
      n: () => Zz,
      q: () => Fz,
      t: () => dz
    });
    const Ez = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

    function nz(zz) {
      try {
        return decodeURIComponent(zz.slice(1))
      } catch {
        return zz.slice(1)
      }
    }

    function iz(zz) {
      return zz.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
    }
    const lz = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ez.source}`, "g");

    function Mz(zz, uz) {
      return 2 === zz.length ? uz.replace(/^ (.*) $/, "$1") : uz
    }

    function tz(zz) {
      return "" === zz.trim()
    }

    function Hz(zz) {
      const uz = [];
      for (const bz of zz.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) uz.length > 0 && uz[uz.length - 1].endsWith("\\") ? uz[uz.length - 1] += `|${bz}` : uz.push(bz);
      return uz.map((zz => zz.trim().replaceAll("\\|", "|")))
    }
    const Oz = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

    function pz(zz) {
      const uz = [],
        bz = [{
          indent: -1,
          items: uz
        }];
      let Ez = null;
      for (const nz of zz) {
        const zz = nz.match(Oz);
        if (!zz) {
          Ez && (Ez.text += ` ${nz.trim()}`);
          continue
        }
        const uz = zz[1].replace(/\t/g, "  ").length;
        for (; uz <= bz[bz.length - 1].indent;) bz.pop();
        Ez = {
          text: zz[3].trim(),
          children: []
        }, bz[bz.length - 1].items.push(Ez), bz.push({
          indent: uz,
          items: Ez.children
        })
      }
      return uz
    }

    function dz(zz) {
      const uz = zz.replace(/\r\n/g, "\n").split("\n"),
        bz = [];
      let Ez = 0;
      for (; Ez < uz.length;) {
        const zz = uz[Ez];
        if (tz(zz)) {
          Ez++;
          continue
        }
        const nz = zz.match(/^\s*```\s*(\w*)\s*$/);
        if (nz) {
          const zz = [];
          for (Ez++; Ez < uz.length && !/^\s*```\s*$/.test(uz[Ez]);) zz.push(uz[Ez]), Ez++;
          Ez++, bz.push({
            kind: "code",
            lang: nz[1] || "text",
            code: zz.join("\n").replace(/\s+$/, "")
          });
          continue
        }
        const lz = zz.match(/^(#{1,6})\s+(.+?)\s*#*$/);
        if (lz) {
          const zz = lz[2].trim();
          bz.push({
            kind: "heading",
            level: lz[1].length,
            text: zz,
            anchor: iz(zz)
          }), Ez++;
          continue
        }
        if (/^\s*(-{3,}|\*{3,})\s*$/.test(zz)) {
          bz.push({
            kind: "rule"
          }), Ez++;
          continue
        }
        if (zz.trim().startsWith("|") && Ez + 1 < uz.length && /^\s*\|[\s:|-]+\|\s*$/.test(uz[Ez + 1])) {
          const nz = Hz(zz),
            iz = [];
          for (Ez += 2; Ez < uz.length && uz[Ez].trim().startsWith("|");) iz.push(Hz(uz[Ez])), Ez++;
          bz.push({
            kind: "table",
            header: nz,
            rows: iz
          });
          continue
        }
        if (zz.startsWith(">")) {
          const zz = [];
          for (; Ez < uz.length && uz[Ez].startsWith(">");) zz.push(uz[Ez].replace(/^>\s?/, "")), Ez++;
          bz.push({
            kind: "quote",
            blocks: dz(zz.join("\n"))
          });
          continue
        }
        if (Oz.test(zz)) {
          const nz = [],
            iz = /^\s*\d+\./.test(zz);
          for (; Ez < uz.length && !tz(uz[Ez]) && (Oz.test(uz[Ez]) || /^\s+\S/.test(uz[Ez]));) nz.push(uz[Ez]), Ez++;
          bz.push({
            kind: "list",
            ordered: iz,
            items: pz(nz)
          });
          continue
        }
        const Mz = [];
        for (; Ez < uz.length && !tz(uz[Ez]) && !/^\s*```/.test(uz[Ez]) && !/^#{1,6}\s/.test(uz[Ez]) && !uz[Ez].startsWith(">") && !Oz.test(uz[Ez]) && (!uz[Ez].trim().startsWith("|") || 0 !== Mz.length);) Mz.push(uz[Ez].trim()), Ez++;
        0 === Mz.length && (Mz.push(uz[Ez].trim()), Ez++), bz.push({
          kind: "paragraph",
          text: Mz.join(" ")
        })
      }
      return bz
    }

    function Fz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const bz = dz(zz);
      let Ez = "";
      const nz = [],
        iz = [],
        lz = new Map;
      for (const Hz of bz) {
        if ("heading" === Hz.kind) {
          var Mz;
          const zz = (null !== (Mz = lz.get(Hz.anchor)) && void 0 !== Mz ? Mz : 0) + 1;
          lz.set(Hz.anchor, zz), zz > 1 && (Hz.anchor = `${Hz.anchor}-${zz}`)
        }
        if ("heading" === Hz.kind && 1 === Hz.level && !Ez) {
          Ez = Hz.text;
          continue
        }
        if ("heading" === Hz.kind && Hz.level <= uz) {
          iz.push({
            heading: Hz,
            blocks: []
          });
          continue
        }
        const zz = iz.at(-1);
        zz ? zz.blocks.push(Hz) : nz.push(Hz)
      }
      const tz = zz => {
        for (;
          "rule" === (null === (uz = zz.at(-1)) || void 0 === uz ? void 0 : uz.kind);) {
          var uz;
          zz.pop()
        }
      };
      tz(nz);
      for (const Hz of iz) tz(Hz.blocks);
      return {
        title: Ez,
        intro: nz,
        sections: iz
      }
    }

    function Zz(zz) {
      return [{
        heading: null,
        blocks: zz.intro
      }, ...zz.sections.map((zz => ({
        heading: zz.heading,
        blocks: zz.blocks
      })))]
    }

    function Rz(zz) {
      return zz.flatMap((zz => "code" === zz.kind ? [zz] : "quote" === zz.kind ? Rz(zz.blocks) : []))
    }

    function Kz(zz) {
      switch (zz.kind) {
        case "heading":
        case "paragraph":
          return zz.text;
        case "code":
          return zz.code;
        case "table":
          return [zz.header, ...zz.rows].map((zz => zz.join(" "))).join(" ");
        case "list": {
          const uz = zz => zz.map((zz => `${zz.text} ${uz(zz.children)}`)).join(" ");
          return uz(zz.items)
        }
        case "quote":
          return zz.blocks.map(Kz).join(" ");
        case "rule":
          return ""
      }
    }
  },
  6226: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz,
      h: () => lz,
      l: () => Mz
    });
    bz(6220);
    var Ez = bz(56),
      nz = bz(4489),
      iz = bz(1089);
    const lz = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;

    function Mz(zz, uz) {
      return zz === uz ? zz : `${zz} (${uz})`
    }

    function tz(zz) {
      const uz = [];
      let bz = 0;
      for (const Ez of zz.matchAll(lz)) {
        Ez.index > bz && uz.push(zz.slice(bz, Ez.index));
        const [, nz, lz, tz, Hz, Oz, pz] = Ez;
        void 0 !== nz ? uz.push(Mz(nz, lz)) : void 0 !== tz || void 0 !== Hz ? uz.push((0, iz.jsx)("strong", {
          children: null !== tz && void 0 !== tz ? tz : Hz
        }, Ez.index)) : void 0 !== Oz ? uz.push((0, iz.jsx)("em", {
          children: Oz
        }, Ez.index)) : uz.push((0, iz.jsx)("code", {
          children: pz
        }, Ez.index)), bz = Ez.index + Ez[0].length
      }
      return bz < zz.length && uz.push(zz.slice(bz)), uz
    }

    function Hz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      const Ez = zz.map(((zz, uz) => (0, iz.jsxs)("li", {
        children: [tz(zz.text), zz.children.length > 0 && Hz(zz.children, !1)]
      }, uz)));
      return uz ? (0, iz.jsx)("ol", {
        start: bz,
        children: Ez
      }) : (0, iz.jsx)("ul", {
        children: Ez
      })
    }

    function Oz(zz, uz) {
      switch (zz.kind) {
        case "heading":
          return zz.level <= 2 ? (0, iz.jsx)("h3", {
            children: tz(zz.text)
          }, uz) : (0, iz.jsx)("h4", {
            children: tz(zz.text)
          }, uz);
        case "paragraph":
          return (0, iz.jsx)("p", {
            children: tz(zz.text)
          }, uz);
        case "list":
          return (0, iz.jsx)(Ez.Fragment, {
            children: Hz(zz.items, zz.ordered)
          }, uz);
        case "quote":
          return (0, iz.jsx)("blockquote", {
            children: zz.blocks.map(((zz, uz) => Oz(zz, uz)))
          }, uz);
        case "code":
          return (0, iz.jsx)("pre", {
            children: (0, iz.jsx)("code", {
              children: zz.code
            })
          }, uz);
        case "table":
          return (0, iz.jsxs)("table", {
            children: [(0, iz.jsx)("thead", {
              children: (0, iz.jsx)("tr", {
                children: zz.header.map(((zz, uz) => (0, iz.jsx)("th", {
                  children: tz(zz)
                }, uz)))
              })
            }), (0, iz.jsx)("tbody", {
              children: zz.rows.map(((zz, uz) => (0, iz.jsx)("tr", {
                children: zz.map(((zz, uz) => (0, iz.jsx)("td", {
                  children: tz(zz)
                }, uz)))
              }, uz)))
            })]
          }, uz);
        case "rule":
          return (0, iz.jsx)("hr", {}, uz)
      }
    }

    function pz(zz) {
      let {
        markdown: uz
      } = zz, bz = 0;
      return (0, iz.jsx)("div", {
        className: "StudioAiAnswerText",
        children: (0, nz.t)(uz).map(((zz, uz) => {
          if ("list" !== zz.kind || !zz.ordered) return bz = 0, Oz(zz, uz);
          const nz = bz + 1;
          return bz += zz.items.length, (0, iz.jsx)(Ez.Fragment, {
            children: Hz(zz.items, !0, nz)
          }, uz)
        }))
      })
    }
  },
  6214: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Xz,
      k: () => fz,
      g: () => rz,
      l: () => Zz
    });
    var Ez = bz(1768),
      nz = bz(6176),
      iz = bz(4629);
    const lz = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;

    function Mz(zz) {
      return (0, iz.e)(zz, lz, (uz => !/^my/i.test(uz[0]) || !/follow $/i.test(zz.slice(0, uz.index)))).length > 0
    }
    const tz = /\byou(?:r|'re|'ll)?\b/i,
      Hz = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so\b)/i,
      Oz = 2;

    function pz(zz) {
      return function(zz) {
        const uz = [];
        let bz = !1;
        for (const Ez of zz.split("\n")) {
          if (/^\s*(```|~~~)/.test(Ez)) {
            bz = !bz;
            continue
          }
          if (bz || /^\s*>/.test(Ez)) continue;
          const zz = Ez.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
          uz.push(...(0, nz.l)(zz))
        }
        return uz
      }(zz).filter((zz => Mz(zz) || Hz.test(zz) && !tz.test(zz)))
    }
    const dz = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      Fz = [{
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

    function Zz(zz) {
      const uz = Fz.findIndex((uz => uz.name === zz));
      return -1 === uz ? Fz.length : uz
    }
    const Rz = 2500,
      Kz = 12e4;
    class wz extends Error {
      constructor(zz) {
        super(`Studio AI chat ${zz}`), this.reason = zz
      }
    }

    function Xz(zz, uz) {
      const bz = new AbortController,
        Ez = () => {
          bz.abort()
        },
        nz = setTimeout(Ez, zz);
      return null !== uz && void 0 !== uz && uz.aborted && Ez(), null === uz || void 0 === uz || uz.addEventListener("abort", Ez, {
        once: !0
      }), {
        signal: bz.signal,
        clear: () => {
          clearTimeout(nz), null === uz || void 0 === uz || uz.removeEventListener("abort", Ez)
        }
      }
    }

    function fz(zz, uz, bz) {
      return new Promise(((nz, iz) => {
        const lz = new AbortController,
          Mz = () => {
            lz.abort(), iz((0, Ez.g)(bz))
          };
        if (null !== bz && void 0 !== bz && bz.aborted) return void Mz();
        null === bz || void 0 === bz || bz.addEventListener("abort", Mz, {
          once: !0
        });
        const tz = Fz.map((() => !1));
        let Hz = null;
        const Oz = Fz.map((() => !1)),
          pz = Fz.map((() => !1));
        Fz.forEach(((Ez, dz) => {
          const Zz = Xz(Kz, lz.signal);
          oz(Ez, [{
            role: "user",
            content: zz
          }], Zz.signal).then((zz => {
            lz.signal.aborted || ("busy" === zz || "failed" === zz ? (Oz[dz] = "busy" === zz, pz[dz] = !0) : null !== zz && (null === Hz || dz < Hz.rank) && (Hz = {
              rank: dz,
              answer: {
                text: zz.text,
                model: Ez.name
              }
            }, uz(Hz.answer)))
          }), (zz => {
            lz.signal.aborted || (pz[dz] = !0, console.warn(`Studio AI: ${Ez.name} couldn't be reached`, zz))
          })).finally((() => {
            Zz.clear(), tz[dz] = !0, lz.signal.aborted || (() => {
              var zz, uz;
              const Ez = null !== (zz = null === (uz = Hz) || void 0 === uz ? void 0 : uz.rank) && void 0 !== zz ? zz : Fz.length;
              tz.slice(0, Ez).includes(!1) || (null === bz || void 0 === bz || bz.removeEventListener("abort", Mz), lz.abort(), null !== Hz ? nz({
                ...Hz.answer,
                isFinal: !pz.slice(0, Hz.rank).includes(!0)
              }) : iz(new wz(Oz.includes(!0) ? "busy" : "failed")))
            })()
          })).catch((zz => {
            console.error("Studio AI: showing an answer failed", zz)
          }))
        }))
      }))
    }

    function sz(zz) {
      var uz, bz;
      return "length" === (null === zz || void 0 === zz || null === (uz = zz.choices) || void 0 === uz || null === (bz = uz[0]) || void 0 === bz ? void 0 : bz.finish_reason)
    }
    async function rz(zz, uz, bz) {
      const Ez = Fz.find((uz => uz.name === zz));
      if (void 0 === Ez) return "failed";
      const nz = Xz(Kz, bz);
      try {
        const zz = await oz(Ez, uz, nz.signal);
        return null !== zz && "object" === typeof zz ? zz.isCutOff ? (console.warn(`Studio AI: ${Ez.name}'s answer was cut off at the token limit`), null) : {
          text: zz.text
        } : zz
      } finally {
        nz.clear()
      }
    }
    async function oz(zz, uz, bz) {
      const Ez = await fetch(dz, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: zz.name,
          messages: uz,
          max_tokens: Rz,
          temperature: zz.temperature,
          reasoning_effort: zz.reasoningEffort
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: bz
      });
      if (429 === Ez.status) return "busy";
      if (!Ez.ok) return console.warn(`Studio AI: ${zz.name} answered ${Ez.status}`), "failed";
      const nz = await Ez.json().catch((() => null)),
        iz = function(zz) {
          var uz, bz, Ez;
          const nz = null === zz || void 0 === zz || null === (uz = zz.choices) || void 0 === uz || null === (bz = uz[0]) || void 0 === bz || null === (Ez = bz.message) || void 0 === Ez ? void 0 : Ez.content;
          if ("string" !== typeof nz) return null;
          const iz = nz.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return "" === iz ? null : iz
        }(nz);
      return null !== iz && function(zz) {
        const uz = pz(zz);
        return uz.length >= Oz || uz.some((zz => Mz(zz)))
      }(iz) ? (console.warn(`Studio AI: ${zz.name} thought out loud instead of answering`), "failed") : null === iz ? null : {
        text: iz,
        isCutOff: sz(nz)
      }
    }
  },
  6176: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => fz,
      B: () => rz,
      D: () => Xz,
      F: () => pz,
      I: () => Hz,
      K: () => Fz,
      b: () => Zz,
      c: () => Mz,
      d: () => lz,
      g: () => Rz,
      k: () => dz,
      l: () => Oz,
      m: () => iz,
      q: () => nz,
      t: () => sz,
      v: () => oz,
      x: () => Kz
    });
    var Ez = bz(4629);
    const nz = 2e3,
      iz = 2e4;

    function lz(zz) {
      return zz.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Mz(zz) {
      return zz.replace(/\$/g, "\\$")
    }
    const tz = /[.!?](?=\s|\*|_|$)|\n|$/g;

    function Hz(zz, uz) {
      tz.lastIndex = uz;
      const bz = tz.exec(zz);
      return bz.index + bz[0].length
    }

    function Oz(zz) {
      return (0, Ez.u)(zz, /\s+/g, (0, Ez.q)(".!?")).flatMap((zz => zz.split("\n")))
    }

    function pz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz;
      const Ez = [...zz.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((zz => zz.index)),
        nz = Ez.filter((zz => zz < uz)),
        iz = Ez.find((zz => zz >= bz));
      return [0 === nz.length ? 0 : nz.at(-1) + 1, void 0 === iz ? zz.length : iz + 1]
    }

    function dz(zz, uz) {
      const bz = zz.charCodeAt(uz - 1);
      return zz.slice(0, uz > 0 && uz < zz.length && bz >= 55296 && bz <= 56319 ? uz - 1 : uz)
    }

    function Fz(zz, uz) {
      return `${uz}${zz.replace(/\\/g,"\\\\").split(uz).join(`\\${uz}`)}${uz}`
    }

    function Zz(zz) {
      return zz.charAt(0).toUpperCase() + zz.slice(1)
    }

    function Rz(zz) {
      return Math.round(zz).toLocaleString("en-US")
    }

    function Kz(zz) {
      return zz.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((zz => "" !== zz))
    }
    const wz = 3;

    function Xz(zz, uz) {
      return Kz(zz).filter((zz => zz.length >= wz && !/\d/.test(zz))).map((zz => `${zz} ${uz}`))
    }

    function fz(zz) {
      return zz.split(/[\s:_]+/).filter((zz => "" !== zz)).map(lz).join("[`:_\\s]+")
    }

    function sz(zz) {
      return Kz(zz.split(".").pop())
    }

    function rz(zz) {
      return zz.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    }

    function oz(zz) {
      let uz = null;
      return () => {
        const bz = uz ??= zz();
        return bz.catch((() => {
          uz === bz && (uz = null)
        })), bz
      }
    }
  },
  4629: (zz, uz, bz) => {
    function Ez(zz) {
      return {
        notAfter: zz
      }
    }
    bz.d(uz, {
      c: () => tz,
      e: () => Hz,
      i: () => Mz,
      j: () => Ez,
      l: () => nz,
      m: () => iz,
      q: () => lz,
      t: () => Oz,
      u: () => pz
    });
    const nz = Ez("\\w$."),
      iz = Ez("\\w.,");

    function lz(zz) {
      return uz => tz(uz, zz)
    }

    function Mz(zz) {
      return uz => !zz.test(uz.input.slice(0, uz.index))
    }

    function tz(zz, uz) {
      return zz.index > 0 && new RegExp(`[${uz}]`).test(zz.input[zz.index - 1])
    }

    function Hz(zz, uz, bz) {
      return function(zz) {
        return void 0 !== zz && "function" !== typeof zz
      }(bz) ? function(zz, uz, bz) {
        const Ez = uz.flags.replace(/[gy]/g, ""),
          nz = new RegExp(`[^${bz}](?:${uz.source})`, `${Ez}g`),
          iz = [],
          lz = bz => {
            const Ez = bz.index + bz[0].length;
            return ("" === bz[0] ? dz(zz, uz, Ez) : Ez) - 1
          },
          Mz = new RegExp(`(?:${uz.source})`, `${Ez}y`).exec(zz);
        if (Mz) {
          if (iz.push(Mz), !uz.global) return iz;
          nz.lastIndex = lz(Mz)
        }
        for (let tz = nz.exec(zz); tz; tz = nz.exec(zz)) {
          const bz = dz(zz, uz, tz.index) - tz.index;
          if (tz[0] = tz[0].slice(bz), tz.index += bz, iz.push(tz), !uz.global) break;
          nz.lastIndex = lz(tz)
        }
        return iz
      }(zz, uz, bz.notAfter) : function(zz, uz, bz) {
        const Ez = new RegExp(uz.source, `${uz.flags.replace(/[gy]/g,"")}g`),
          nz = [];
        for (let iz = Ez.exec(zz); iz; iz = Ez.exec(zz))
          if (!bz || bz(iz)) {
            if (nz.push(iz), !uz.global) break;
            "" === iz[0] && (Ez.lastIndex = dz(zz, uz, Ez.lastIndex))
          } else Ez.lastIndex = dz(zz, uz, iz.index);
        return nz
      }(zz, uz, bz)
    }

    function Oz(zz, uz, bz, Ez) {
      let nz = "",
        iz = 0;
      for (const lz of Hz(zz, uz, bz)) nz += zz.slice(iz, lz.index) + Ez(lz), iz = lz.index + lz[0].length;
      return nz + zz.slice(iz)
    }

    function pz(zz, uz, bz) {
      const Ez = [];
      let nz = 0;
      for (const iz of Hz(zz, uz, bz)) Ez.push(zz.slice(nz, iz.index)), nz = iz.index + iz[0].length;
      return [...Ez, zz.slice(nz)]
    }

    function dz(zz, uz, bz) {
      var Ez;
      return bz + (uz.unicode && (null !== (Ez = zz.codePointAt(bz)) && void 0 !== Ez ? Ez : 0) > 65535 ? 2 : 1)
    }
  },
  6220: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);