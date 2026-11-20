export const id = 75;
export const ids = [75, 91];
export const modules = {
    4553: (bb, cb, sb) => {
      sb.d(cb, {
        d: () => Qb,
        e: () => eb
      });
      var kb = sb(1033),
        Wb = sb.n(kb),
        ab = sb(64),
        Tb = sb(1197),
        Ub = sb(4556),
        Ib = sb(1839),
        Hb = sb(2337),
        fb = sb(4561),
        Mb = sb(1087);
      const Xb = new WeakMap;
      let nb = 0;

      function mb(bb) {
        let cb = Xb.get(bb);
        return void 0 === cb && (cb = nb++, Xb.set(bb, cb)), cb
      }

      function lb(bb) {
        let {
          piece: cb
        } = bb;
        return "space" === cb.kind ? (0, Mb.jsx)(Mb.Fragment, {
          children: cb.text
        }) : (0, Mb.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${cb.delayMs}ms`
          },
          children: (0, Mb.jsx)(Ub.b, {
            text: "icon" === cb.kind ? `[[${cb.icon}]]` : cb.text
          })
        })
      }

      function Qb(bb) {
        let {
          display: cb
        } = bb;
        const {
          selectedLanguage: sb
        } = (0, Tb.E)(), kb = (0, ab.useMemo)((() => (0, fb.e)((0, fb.h)(cb).plan.pieces)), [cb, sb.code]);
        return (0, Mb.jsxs)("div", {
          className: Wb()("Dialogue", {
            DialogueAnimateIn: !1 !== cb.animateIn
          }),
          children: [cb.speakerName && (0, Mb.jsx)(Ib.d, {
            text: cb.speakerName,
            className: "DialogueSpeaker"
          }), (0, Mb.jsx)("p", {
            className: "DialogueLine",
            children: kb.map(((bb, cb) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Mb.jsx)("span", {
              className: "DialogueGlue",
              children: bb.map(((bb, cb) => (0, Mb.jsx)(lb, {
                piece: bb
              }, cb)))
            }, cb)))
          })]
        })
      }
      const eb = (0, ab.memo)((function() {
        const bb = (0, Hb.d)("dialogue");
        return (0, Mb.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: bb && (0, Mb.jsx)(Qb, {
            display: bb
          }, mb(bb))
        })
      }))
    },
    4436: (bb, cb, sb) => {
        sb.r(cb), sb.d(cb, {
          default: () => cT
        });
        var kb = sb(64),
          Wb = sb(1033),
          ab = sb.n(Wb),
          Tb = sb(1504),
          Ub = sb(1511),
          Ib = sb(19),
          Hb = sb(89),
          fb = sb(4441),
          Mb = sb(4451),
          Xb = sb(4456),
          nb = sb(4124),
          mb = sb(1087);
        const lb = "/textures/docs/icons";

        function Qb(bb) {
          let {
            name: cb,
            isTinted: sb,
            className: kb,
            style: Wb
          } = bb;
          const Tb = `${lb}/${cb}.png`;
          return sb ? (0, mb.jsxs)("span", {
            className: ab()("DocsPixelIcon", "Tinted", kb),
            "aria-hidden": "true",
            style: Wb,
            children: [(0, mb.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Tb}")`,
                WebkitMaskImage: `url("${Tb}")`
              }
            }), (0, mb.jsx)("img", {
              src: Tb,
              alt: ""
            })]
          }) : (0, mb.jsx)("img", {
            className: ab()("DocsPixelIcon", kb),
            src: Tb,
            alt: "",
            "aria-hidden": "true",
            style: Wb
          })
        }
        const eb = 1500;

        function Cb() {
          const [bb, cb] = (0, kb.useState)(null);
          (0, kb.useEffect)((() => {
            if (null === bb) return;
            const sb = setTimeout((() => {
              cb(null)
            }), eb);
            return () => {
              clearTimeout(sb)
            }
          }), [bb]);
          return [bb, bb => {
            (0, nb.b)(bb).then((() => {
              cb({
                text: bb,
                failed: !1
              })
            }), (sb => {
              console.error("Could not copy to the clipboard", sb), cb({
                text: bb,
                failed: !0
              })
            }))
          }]
        }

        function Nb(bb) {
          let {
            text: cb,
            label: sb,
            className: kb
          } = bb;
          const [Wb, Tb] = Cb(), Ub = !1 === (null === Wb || void 0 === Wb ? void 0 : Wb.failed);
          return (0, mb.jsxs)("button", {
            type: "button",
            className: ab()("DocsCopyButton", kb, {
              Copied: Ub
            }),
            title: `Copy ${cb.length>40?"to clipboard":cb}`,
            "aria-label": sb ? void 0 : `Copy ${cb}`,
            onClick: bb => {
              bb.stopPropagation(), Tb(cb)
            },
            children: [(0, mb.jsx)(Qb, {
              name: Ub ? "check" : "copy"
            }), sb && (0, mb.jsx)("span", {
              children: Ub ? "Copied" : null !== Wb && void 0 !== Wb && Wb.failed ? "Copy failed" : sb
            })]
          })
        }
        fb.d.registerLanguage("javascript", Mb.d), fb.d.registerLanguage("typescript", Xb.c);
        const Vb = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Lb = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          ub = 24;

        function Yb(bb) {
          let {
            code: cb,
            lang: sb,
            compact: Wb = !1
          } = bb;
          const Tb = (0, kb.useMemo)((() => function(bb, cb) {
              const sb = Vb[cb];
              return sb ? fb.d.highlight(bb, {
                language: sb
              }).value : bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(cb, sb)), [cb, sb]),
            Ub = cb.split("\n").length,
            Ib = !Wb && Ub > ub + 6,
            [Hb, Mb] = (0, kb.useState)(!1),
            Xb = Vb[sb];
          return (0, mb.jsxs)("div", {
            className: ab()("DocsCodeBlock", {
              Compact: Wb,
              Collapsed: Ib && !Hb
            }),
            children: [!Wb && (0, mb.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, mb.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Xb ? Lb[Xb] : "Text"
              }), (0, mb.jsx)(Nb, {
                text: cb,
                label: "Copy"
              })]
            }), (0, mb.jsx)("pre", {
              children: (0, mb.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Tb
                }
              })
            }), Ib && (0, mb.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Hb,
              onClick: () => {
                Mb(!Hb)
              },
              children: [(0, mb.jsx)(Qb, {
                name: Hb ? "chevron-up" : "chevron-down"
              }), Hb ? "Show less" : `Show all ${Ub} lines`]
            })]
          })
        }
        var hb = sb(4461);
        var Jb = sb(4469);
        const gb = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Bb(bb) {
          const cb = new Map;
          let sb, kb = [],
            Wb = !1;
          const ab = () => {
            sb && cb.set(sb.name, sb.lines.join("\n").trimEnd())
          };
          for (const Tb of bb.split("\n")) {
            const bb = Tb.match(gb);
            Wb || Tb.startsWith("/*") ? (Wb || (ab(), sb = void 0), kb.push(Tb), Wb = !Tb.includes("*/")) : bb ? (ab(), sb = {
              name: bb[1],
              lines: [...kb, Tb]
            }, kb = []) : sb && (Tb.startsWith(" ") || Tb.startsWith("\t") || /^[}\])|]/.test(Tb)) ? sb.lines.push(Tb) : sb && "" !== Tb.trim() && (ab(), sb = void 0)
          }
          return ab(), cb
        }

        function tb(bb) {
          return "methods" === bb || "callbacks" === bb || "settings" === bb
        }
        const yb = {
            readme: {
              icon: "code-block",
              summary: "Code blocks, boards and World Code, and the globals your code can use.",
              layout: "article"
            },
            snippets: {
              icon: "scroll",
              summary: "Ready-made code for common jobs, from moving players to running code every second.",
              layout: "snippets"
            },
            howTo: {
              icon: "book",
              summary: "Step-by-step guides for variations, plugins and full games.",
              layout: "article",
              navTitle: "All how-tos"
            },
            changelog: {
              icon: "calendar",
              summary: "What changed in the Code API, newest first.",
              layout: "changelog"
            },
            apiReference: {
              icon: "prompt",
              summary: "Every method on the api object, with parameters and return types.",
              layout: "methods"
            },
            callbacks: {
              icon: "bolt",
              summary: "Functions your world code defines to react to game events.",
              layout: "callbacks"
            },
            clientOptions: {
              icon: "player",
              summary: "Per-player options such as speed, health and camera.",
              layout: "settings",
              setterSnippet: (bb, cb) => `api.setClientOption(playerId, "${bb}", ${cb})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (bb, cb) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${bb}", ${cb})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (bb, cb) => `api.setMobSetting(mobId, "${bb}", ${cb})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (bb, cb) => `api.setVehicleSetting(vehicleId, "${bb}", ${cb})`
            },
            meshEntities: {
              icon: "mesh",
              summary: "Spawn mesh entities and throwables, and attach meshes to nodes.",
              layout: "article"
            },
            qte: {
              icon: "stopwatch",
              summary: "Quick time events: progress bars, timed clicks and rhythm games.",
              layout: "article"
            },
            dialogueVoices: {
              icon: "speech-bubble",
              summary: "The voices dialogue is read out in, with a playground for making voices of your own.",
              layout: "article",
              hasVoicePlayground: !0
            },
            particles: {
              icon: "sparkle",
              summary: "Particle textures and presets, with a live effect playground.",
              layout: "article",
              gallery: "particles",
              hasParticlePlayground: !0
            },
            sounds: {
              icon: "music",
              summary: "Every sound effect and song you can play.",
              layout: "article",
              gallery: "sounds"
            },
            icons: {
              icon: "heart",
              summary: "Icons for styled text, from Bloxd icons to Font Awesome.",
              layout: "article",
              gallery: "icons",
              hasTextPlayground: !0
            },
            skins: {
              icon: "shirt",
              summary: "Skin parts, NPC skins and poses for players.",
              layout: "article",
              gallery: "skins"
            },
            blockNames: {
              icon: "grass-block",
              summary: "Every block name, with its texture and variants.",
              layout: "article",
              gallery: "blocks"
            },
            itemNames: {
              icon: "pickaxe",
              summary: "Every item name, with its texture.",
              layout: "article",
              gallery: "items"
            }
          },
          Pb = {
            Variations: {
              icon: "layers",
              summary: "Alternate versions of a custom game, and matchmaking players between them."
            },
            Plugins: {
              icon: "puzzle",
              summary: "Reusable first-party World Code features, imported from @plugins."
            },
            "Building a SessionBasedGame": {
              icon: "trophy",
              summary: "A full team game: lobby, teams, map voting, rounds and a winner."
            },
            "Interactable NPCs": {
              icon: "speech-bubble",
              summary: "Entities players talk to or use, such as shopkeepers and guards."
            },
            Dialogue: {
              icon: "volume",
              summary: "Lines of dialogue below the crosshair, read out a syllable at a time in a voice."
            },
            "Project schematics": {
              icon: "blueprint",
              summary: "Build whole chunks from schematics stored with your project."
            }
          };

        function Db(bb) {
          return bb.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Eb(bb) {
          let cb = !1;
          return bb.split("\n").map((bb => (bb.startsWith("```") && (cb = !cb), !cb && /^#{3,} /.test(bb) ? bb.slice(1) : bb))).join("\n")
        }

        function ib(bb) {
          return "readme" === bb ? "getting-started" : Db(bb)
        }
        const Ob = "## Glossary of Referenced Types";
        const Gb = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Jb.c.flatMap((bb => {
            const cb = {
              id: bb.id,
              slug: ib(bb.id),
              title: bb.title,
              markdown: bb.content,
              ...yb[bb.id]
            };
            if ("readme" === bb.id) return function(bb) {
              const cb = bb.markdown.indexOf(Ob),
                sb = bb.markdown.indexOf("\n```", cb),
                kb = bb.markdown.indexOf("\n```", sb + 1);
              if (-1 === cb || -1 === sb || -1 === kb) throw new Error(`Getting started has no "${Ob}" section with a code block`);
              const Wb = bb.markdown.slice(cb + 31, sb).trim(),
                ab = [...Bb(bb.markdown.slice(bb.markdown.indexOf("\n", sb + 1) + 1, kb))].map((bb => {
                  let [cb, sb] = bb;
                  return `## ${cb}\n\n\`\`\`ts\n${sb}\n\`\`\`\n`
                })),
                Tb = bb.markdown.slice(bb.markdown.indexOf("\n", kb + 1) + 1);
              return [{
                ...bb,
                markdown: `${bb.markdown.slice(0,cb)}${Tb}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Wb}\n\n${ab.join("\n")}`
              }]
            }(cb);
            if ("howTo" === bb.id) {
              const {
                parent: bb,
                guides: sb
              } = function(bb) {
                const [cb, ...sb] = bb.markdown.split(/^(?=## )/m), kb = [cb], Wb = [];
                for (const Tb of sb) {
                  var ab;
                  const cb = Tb.indexOf("\n"),
                    sb = Tb.slice(3, cb).trim(),
                    Ub = Tb.slice(cb + 1);
                  if (!Ub.includes("```")) {
                    kb.push(Tb);
                    continue
                  }
                  const Ib = null !== (ab = Pb[sb]) && void 0 !== ab ? ab : {
                    icon: "lightbulb",
                    summary: `How to use ${sb.toLowerCase()} in World Code.`
                  };
                  Wb.push({
                    id: `${bb.id}${sb.split(/[^A-Za-z0-9]+/).map((bb=>bb.charAt(0).toUpperCase()+bb.slice(1))).join("")}`,
                    slug: `${bb.slug}-${Db(sb)}`,
                    title: sb,
                    layout: "article",
                    sourceAnchor: (0, hb.x)(sb),
                    markdown: `# ${sb}\n\n${Eb(Ub)}`,
                    ...Ib
                  })
                }
                return {
                  parent: {
                    ...bb,
                    markdown: kb.join(""),
                    childPageIds: Wb.map((bb => bb.id))
                  },
                  guides: Wb
                }
              }(cb);
              return [bb, ...sb]
            }
            return [cb]
          }))],
          Kb = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Gb.filter((bb => void 0 !== bb.sourceAnchor)).map((bb => bb.id))]
          }, {
            title: "Reference",
            pageIds: ["apiReference", "callbacks", "clientOptions", "types"]
          }, {
            title: "Settings",
            pageIds: ["entitySettings", "mobSettings", "vehicleSettings"]
          }, {
            title: "Systems",
            pageIds: ["meshEntities", "qte", "dialogueVoices"]
          }, {
            title: "Assets",
            pageIds: ["particles", "sounds", "icons", "skins", "blockNames", "itemNames"]
          }];

        function Zb(bb) {
          return Gb.find((cb => cb.id === bb))
        }
        const zb = new Map;

        function qb(bb) {
          let cb = zb.get(bb.id);
          return cb || (cb = (0, hb.D)(bb.markdown, "changelog" === bb.layout ? 3 : 2), zb.set(bb.id, cb)), cb
        }

        function db(bb, cb) {
          return qb(bb).sections.some((bb => bb.heading.anchor === cb || bb.blocks.some((bb => "heading" === bb.kind && bb.anchor === cb))))
        }

        function Ab(bb) {
          const [cb, ...sb] = bb.replace(/^#/, "").split("-"), kb = Gb.find((bb => bb.id === cb));
          if (!kb) return null;
          const Wb = sb.length > 0 ? (0, hb.x)(sb.join("-")) : "";
          for (const Tb of null !== (ab = kb.childPageIds) && void 0 !== ab ? ab : []) {
            var ab;
            const bb = Zb(Tb);
            if (bb.sourceAnchor === Wb) return {
              page: bb,
              anchor: ""
            };
            if (db(bb, Wb)) return {
              page: bb,
              anchor: Wb
            }
          }
          return {
            page: kb,
            anchor: Wb
          }
        }
        const wb = {
          Examples: {
            pageId: "snippets",
            anchor: ""
          },
          Notes: {
            pageId: "readme",
            anchor: "Globals"
          },
          "Glossary-of-Referenced-Types": {
            pageId: "types",
            anchor: ""
          }
        };

        function rb(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const kb = cb.slug ? `${bb}/${cb.slug}` : bb;
          return sb ? `${kb}#${sb}` : kb
        }
        var ob = sb(4482);
        const Sb = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Rb = new Set(["GameApi", "Console", "_TypeOf"]),
          vb = 4;

        function Fb(bb) {
          let cb = bb.length;
          for (; cb > 0 && "" === bb[cb - 1].trim();) cb--;
          return bb.slice(0, cb)
        }

        function xb(bb) {
          var cb;
          const sb = Fb(bb);
          if (null === (cb = sb.at(-1)) || void 0 === cb || !cb.trimEnd().endsWith("*/")) return {
            lines: sb,
            doc: ""
          };
          const kb = sb.findLastIndex((bb => bb.startsWith("/**")));
          return -1 === kb ? {
            lines: sb,
            doc: ""
          } : {
            lines: Fb(sb.slice(0, kb)),
            doc: sb.slice(kb).join("\n")
          }
        }

        function jb(bb) {
          var cb;
          const sb = bb.split("\n"),
            kb = sb.flatMap(((bb, cb) => Sb.test(bb) ? [cb] : []));
          let Wb = xb(sb.slice(0, null !== (cb = kb[0]) && void 0 !== cb ? cb : sb.length)).doc;
          return kb.map(((bb, cb) => {
            var ab;
            const Tb = xb(sb.slice(bb, null !== (ab = kb[cb + 1]) && void 0 !== ab ? ab : sb.length)),
              Ub = {
                name: sb[bb].match(Sb)[1],
                doc: Wb,
                lines: Tb.lines
              };
            return Wb = Tb.doc, Ub
          }))
        }

        function pb(bb) {
          var cb;
          const sb = bb.match(/^readonly \[([\s\S]*)\]$/);
          return sb ? null !== (cb = sb[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== cb ? cb : [] : null
        }

        function bc(bb) {
          if (!bb.startsWith("{") || !bb.endsWith("}")) return null;
          const cb = {
              keys: [],
              values: []
            },
            sb = bb => {
              const sb = bb.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              sb && (cb.keys.push(sb[1].startsWith('"') ? sb[1] : `"${sb[1]}"`), cb.values.push(sb[2].trim()))
            };
          let kb = 0,
            Wb = "";
          for (const ab of bb.slice(1, -1)) "{[(".includes(ab) ? kb++ : "}])".includes(ab) && kb--, ";" === ab && 0 === kb ? (sb(Wb), Wb = "") : Wb += ab;
          return sb(Wb), cb
        }

        function cc(bb) {
          return bb.length > vb ? `\n\t| ${bb.join("\n\t| ")}` : bb.join(" | ")
        }

        function sc(bb, cb) {
          const sb = function(bb, cb) {
            return bb.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((bb, sb) => {
              var kb;
              const Wb = null === (kb = cb.get(sb)) || void 0 === kb ? void 0 : kb.object;
              return Wb ? cc(Wb.values) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((bb, sb) => {
              var kb, Wb;
              const ab = null === (kb = cb.get(sb)) || void 0 === kb || null === (Wb = kb.object) || void 0 === Wb ? void 0 : Wb.values.map(pb);
              return null !== ab && void 0 !== ab && ab.every((bb => null !== bb)) ? cc([...new Set(ab.flat())]) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((bb, sb) => {
              var kb;
              const Wb = null === (kb = cb.get(sb)) || void 0 === kb ? void 0 : kb.members;
              return Wb ? cc(Wb) : bb
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((bb, sb) => {
              var kb;
              const Wb = null === (kb = cb.get(sb)) || void 0 === kb ? void 0 : kb.object;
              return Wb ? cc(Wb.keys) : bb
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((bb, sb) => {
              var kb, Wb;
              return null !== (kb = null === (Wb = cb.get(sb)) || void 0 === Wb ? void 0 : Wb.text) && void 0 !== kb ? kb : bb
            }))
          }(bb.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), cb);
          return [bb.doc, sb].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function kc(bb) {
          const cb = jb(bb),
            sb = function(bb) {
              const cb = new Map,
                sb = bb.find((bb => "_TypeOf" === bb.name));
              let kb = null;
              const Wb = () => {
                if (kb) {
                  const bb = kb.lines.join("\n");
                  cb.set(kb.name, {
                    text: bb,
                    members: pb(bb),
                    object: bc(bb)
                  })
                }
              };
              for (const ab of sb.lines.slice(1, -1)) {
                const bb = ab.match(/^\t([\w$]+): (.+)$/);
                bb ? (Wb(), kb = {
                  name: bb[1],
                  lines: [bb[2]]
                }) : kb && kb.lines.push(ab.replace(/^\t/, ""))
              }
              return Wb(), cb
            }(cb),
            kb = new Map;
          for (const Wb of cb) Rb.has(Wb.name) || kb.has(Wb.name) || kb.set(Wb.name, sc(Wb, sb));
          return kb
        }
        let Wc, ac, Tc;

        function Uc() {
          return ac ??= function(bb) {
            const cb = jb(bb).find((bb => "GameApi" === bb.name)),
              sb = new Map,
              kb = cb.lines;
            for (let ab = 0; ab < kb.length; ab++) {
              var Wb;
              if (!kb[ab].trimStart().startsWith("/**")) continue;
              const bb = ab;
              for (; ab < kb.length && !kb[ab].includes("*/");) ab++;
              const cb = null === (Wb = kb[ab + 1]) || void 0 === Wb ? void 0 : Wb.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!cb) continue;
              let Tb = null;
              const Ub = [];
              let Ib = "description",
                Hb = !1;
              for (const sb of kb.slice(bb, ab + 1).join("\n").split("\n").map((bb => bb.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const bb = sb.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                bb ? (Tb = bb[1].trim(), Ib = "deprecation") : sb.startsWith("@") ? (Ib = "otherTag", Hb = !0) : "" === sb.trim() ? Hb || (Ib = "description", Ub.push(sb)) : "deprecation" !== Ib || /^[A-Z]/.test(sb.trim()) ? "otherTag" !== Ib && (Ib = "description", Ub.push(sb)) : Tb = `${Tb} ${sb.trim()}`.trim()
              }
              sb.set(cb[1], {
                deprecation: Tb,
                description: Ub.join("\n").trim()
              })
            }
            return sb
          }(ob.default), ac
        }

        function Ic() {
          if (!Tc) {
            Tc = new Map;
            for (const bb of Gb) {
              const cb = (0, hb.z)(qb(bb)).flatMap((bb => bb.blocks));
              for (const bb of (0, hb.o)(cb))
                if ("ts" === bb.lang || "typescript" === bb.lang)
                  for (const [cb, sb] of Bb(bb.code)) Tc.set(cb, sb)
            }
            for (const [bb, cb] of(Wc ??= kc(ob.default), Wc)) Tc.has(bb) || Tc.set(bb, cb)
          }
          return Tc
        }
        const Hc = {
          BlockName: "blockNames",
          BlockNameOrId: "blockNames",
          ItemName: "itemNames",
          Song: "sounds",
          ParticlePresetId: "particles",
          PlayerPose: "skins",
          IngameIconName: "icons",
          ClientOptions: "clientOptions",
          ClientOption: "clientOptions",
          OtherEntitySettings: "entitySettings",
          OtherEntitySetting: "entitySettings",
          MobSettings: "mobSettings",
          MobSetting: "mobSettings",
          VehicleSetting: "vehicleSettings",
          SettableVehicleSetting: "vehicleSettings"
        };
        let fc;

        function Mc() {
          if (!fc) {
            fc = new Map;
            for (const bb of Gb)
              if (tb(bb.layout))
                for (const cb of qb(bb).sections) fc.has(cb.heading.text) || fc.set(cb.heading.text, {
                  pageId: bb.id,
                  anchor: cb.heading.anchor
                })
          }
          return fc
        }

        function Xc(bb) {
          const cb = bb.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return cb ? Mc().get(cb[1]) : void 0
        }
        const nc = (0, kb.createContext)("/docs"),
          mc = (0, kb.createContext)(null),
          lc = (0, kb.createContext)(!1),
          Qc = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function ec(bb) {
          const cb = bb.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return cb ? cb[1] : null
        }

        function Cc(bb) {
          let {
            colour: cb
          } = bb;
          return (0, mb.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: cb
            },
            "aria-hidden": "true"
          })
        }

        function Nc(bb) {
          const cb = [];
          let sb = 0;
          for (const kb of bb.matchAll(Qc)) cb.push(bb.slice(sb, kb.index), (0, mb.jsx)(Cc, {
            colour: kb[0]
          }), kb[0]), sb = kb.index + kb[0].length;
          return cb.push(bb.slice(sb)), cb
        }

        function Vc(bb) {
          let {
            href: cb,
            children: sb
          } = bb;
          const Wb = (0, kb.useContext)(nc);
          if (cb.startsWith("#")) {
            const bb = Ab(cb);
            if (bb) return (0, mb.jsx)(Tb.d, {
              to: rb(Wb, bb.page, bb.anchor),
              children: (0, mb.jsx)(lc.Provider, {
                value: !0,
                children: sb
              })
            })
          }
          return (0, mb.jsx)("a", {
            href: cb,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, mb.jsx)(lc.Provider, {
              value: !0,
              children: sb
            })
          })
        }

        function Lc(bb) {
          let {
            code: cb
          } = bb;
          const sb = (0, kb.useContext)(nc);
          if ((0, kb.useContext)(lc)) return (0, mb.jsx)("code", {
            className: "DocsInlineCode",
            children: cb
          });
          if (Ic().has(cb)) return (0, mb.jsx)(Jc, {
            type: cb
          });
          const Wb = Xc(cb);
          if (Wb) return (0, mb.jsx)(Tb.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: rb(sb, Zb(Wb.pageId), Wb.anchor),
            children: cb
          });
          const ab = ec(cb);
          return (0, mb.jsxs)("code", {
            className: "DocsInlineCode",
            children: [ab && (0, mb.jsx)(Cc, {
              colour: ab
            }), cb]
          })
        }

        function uc(bb) {
          let {
            text: cb
          } = bb;
          const sb = [];
          let Wb = 0;
          for (const kb of cb.matchAll(hb.h)) {
            kb.index > Wb && sb.push(...Nc(cb.slice(Wb, kb.index)));
            const [, bb, ab, Tb, Ub, Ib] = kb;
            bb ? sb.push((0, mb.jsx)(Lc, {
              code: (0, hb.s)(bb, ab)
            })) : Tb ? sb.push((0, mb.jsx)("strong", {
              children: (0, mb.jsx)(uc, {
                text: Tb
              })
            })) : sb.push((0, mb.jsx)(Vc, {
              href: Ib,
              children: (0, mb.jsx)(uc, {
                text: Ub
              })
            })), Wb = kb.index + kb[0].length
          }
          return Wb < cb.length && sb.push(...Nc(cb.slice(Wb))), (0, mb.jsx)(mb.Fragment, {
            children: sb.map(((bb, cb) => (0, mb.jsx)(kb.Fragment, {
              children: bb
            }, cb)))
          })
        }
        const Yc = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          hc = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Jc(bb) {
          let {
            type: cb
          } = bb;
          const sb = Ic(),
            Wb = [];
          for (const kb of cb.trim().matchAll(Yc)) {
            const [bb, cb, ab, Tb, Ub] = kb;
            cb ? Wb.push((0, mb.jsx)("span", {
              className: "DocsTypeString",
              children: bb
            })) : ab && sb.has(ab) ? Wb.push((0, mb.jsx)(Pc, {
              name: ab,
              definition: sb.get(ab)
            })) : ab ? Wb.push((0, mb.jsx)("span", {
              className: hc.has(ab) ? "DocsTypeKeyword" : "DocsTypeName",
              children: bb
            })) : Tb ? Wb.push((0, mb.jsx)("span", {
              className: "DocsTypeNumber",
              children: bb
            })) : Ub ? Wb.push(" ") : Wb.push((0, mb.jsx)("span", {
              className: "DocsTypePunctuation",
              children: bb
            }))
          }
          return (0, mb.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Wb.map(((bb, cb) => (0, mb.jsx)(kb.Fragment, {
              children: bb
            }, cb)))
          })
        }
        const gc = 480,
          Bc = 6,
          tc = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let yc = 0;

        function Pc(bb) {
          let {
            name: cb,
            definition: sb
          } = bb;
          const Wb = (0, kb.useContext)(nc),
            ab = Hc[cb],
            Ub = (0, kb.useRef)(null),
            Ib = (0, kb.useRef)(null),
            fb = (0, kb.useRef)(null),
            [Mb, Xb] = (0, kb.useState)(!1),
            [nb, lb] = (0, kb.useState)(null),
            eb = (0, kb.useRef)(),
            Cb = (0, kb.useContext)(mc),
            [Nb] = (0, kb.useState)((() => "DocsTypePopover-" + yc++)),
            Vb = () => {
              clearTimeout(eb.current), Xb(!0)
            },
            Lb = () => {
              clearTimeout(eb.current), eb.current = setTimeout((() => {
                Xb(!1)
              }), 120)
            };
          return (0, kb.useEffect)((() => {
            if (!Mb) return;
            const bb = bb => {
              if ("Escape" === bb.key) {
                var cb, sb;
                if (null !== (cb = Ib.current) && void 0 !== cb && cb.contains(document.activeElement)) null === (sb = Ub.current) || void 0 === sb || sb.focus();
                Xb(!1)
              }
            };
            return document.addEventListener("keydown", bb), () => {
              document.removeEventListener("keydown", bb)
            }
          }), [Mb]), (0, kb.useEffect)((() => () => {
            clearTimeout(eb.current)
          }), []), (0, kb.useLayoutEffect)((() => {
            if (!Mb || !Ub.current || !Ib.current) return void lb(null);
            const bb = Ub.current.getBoundingClientRect(),
              cb = Ib.current.offsetHeight,
              sb = Math.min(gc, window.innerWidth - 32),
              kb = Math.min(Math.max(16, bb.left), window.innerWidth - sb - 16),
              Wb = bb.bottom + Bc + cb < window.innerHeight;
            lb({
              left: kb,
              top: Wb ? bb.bottom + Bc : Math.max(16, bb.top - Bc - cb)
            })
          }), [Mb]), (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsx)("button", {
              type: "button",
              ref: Ub,
              className: "DocsTypeLink",
              "aria-expanded": Mb,
              "aria-describedby": Mb ? Nb : void 0,
              onMouseEnter: Vb,
              onMouseLeave: Lb,
              onFocus: Vb,
              onBlur: Lb,
              onKeyDown: bb => {
                "Tab" === bb.key && !bb.shiftKey && fb.current && (bb.preventDefault(), fb.current.focus())
              },
              onClick: Vb,
              children: cb
            }), Mb && (0, Hb.createPortal)((0, mb.jsxs)("span", {
              ref: Ib,
              id: Nb,
              className: "DocsTypePopover",
              role: "tooltip",
              style: nb ? {
                left: nb.left,
                top: nb.top,
                maxWidth: gc
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Vb,
              onMouseLeave: Lb,
              onFocus: Vb,
              onBlur: Lb,
              children: [(0, mb.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, mb.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: cb
                }), ab && (0, mb.jsxs)(Tb.d, {
                  ref: fb,
                  className: "DocsTypePopoverLink",
                  to: rb(Wb, Zb(ab)),
                  onClick: () => {
                    Xb(!1)
                  },
                  onKeyDown: bb => {
                    if ("Tab" === bb.key) {
                      var cb;
                      if (bb.preventDefault(), bb.shiftKey || !Ub.current || ! function(bb, cb) {
                          const sb = [...document.querySelectorAll(tc)],
                            kb = sb.slice(sb.indexOf(bb) + 1).find((bb => bb.getClientRects().length > 0 && !(null !== cb && void 0 !== cb && cb.contains(bb))));
                          return null === kb || void 0 === kb || kb.focus(), void 0 !== kb
                        }(Ub.current, Ib.current)) null === (cb = Ub.current) || void 0 === cb || cb.focus();
                      bb.shiftKey || Xb(!1)
                    }
                  },
                  children: [Zb(ab).title, (0, mb.jsx)(Qb, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, mb.jsx)(Yb, {
                lang: "ts",
                code: sb,
                compact: !0
              })]
            }), null !== Cb && void 0 !== Cb ? Cb : document.body)]
          })
        }
        var Dc = sb(223),
          Ec = sb(4484),
          ic = sb(4486),
          Oc = sb(4493);
        const Gc = {
          progressBar: {
            Gb: 30,
            Kb: .075,
            Zb: 5,
            zb: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            ob: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Rb: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Fb: !0,
            scale: 3,
            rotation: 15,
            xb: !1
          },
          gravityBar: {
            Gb: 30,
            pb: .25,
            bc: 3,
            sc: .8,
            gravity: 1,
            kc: 1.5,
            Wc: 8,
            ac: 4,
            zb: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Uc: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Hc: 5,
            fc: 1200,
            Mc: .15,
            Xc: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Kc = sb(334),
          Zc = sb(1927);

        function zc(bb) {
          return bb.startsWith("fa-")
        }
        const qc = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          dc = {
            text: "Text",
            icon: {
              icon: "Pixelated Heart"
            },
            progressBar: {
              type: "ProgressBar",
              progress: .5
            },
            keyBinding: {
              type: "StyledKeyBinding",
              action: "jump"
            }
          };

        function Ac(bb) {
          return "string" === typeof bb ? "text" : "entityName" in bb || "translationKey" in bb ? "other" : (0, Kc.Bb)(bb) ? "progressBar" : (0, Kc.Ab)(bb) ? "keyBinding" : "icon" in bb ? "icon" : "str" in bb && "string" === typeof bb.str ? "text" : "other"
        }
        const wc = [{
            path: ["style", "color"],
            label: "Colour",
            field: {
              kind: "colour"
            },
            defaultText: "The surrounding text's"
          }, {
            path: ["style", "fontSize"],
            label: "Font size",
            field: {
              kind: "size"
            },
            defaultText: "1em"
          }, {
            path: ["style", "fontWeight"],
            label: "Font weight",
            field: {
              kind: "choice",
              options: ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
            },
            defaultText: "normal"
          }, {
            path: ["style", "fontStyle"],
            label: "Font style",
            field: {
              kind: "choice",
              options: ["normal", "italic"]
            },
            defaultText: "normal"
          }, {
            path: ["style", "opacity"],
            label: "Opacity",
            field: {
              kind: "fraction"
            },
            defaultText: "1"
          }],
          rc = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...wc],
            icon: [{
              path: ["icon"],
              label: "Icon",
              field: {
                kind: "icon"
              },
              isRequired: !0
            }, {
              path: ["style", "color"],
              label: "Colour",
              field: {
                kind: "colour"
              },
              defaultText: "None, or the text's for Font Awesome"
            }, {
              path: ["style", "fontSize"],
              label: "Size",
              field: {
                kind: "size"
              },
              defaultText: "1.8em"
            }, {
              path: ["style", "opacity"],
              label: "Opacity",
              field: {
                kind: "fraction"
              },
              defaultText: "1"
            }],
            progressBar: [{
              path: ["progress"],
              label: "Progress",
              field: {
                kind: "fraction"
              },
              isRequired: !0
            }, {
              path: ["width"],
              label: "Width",
              field: {
                kind: "size"
              },
              defaultText: "4em"
            }, {
              path: ["height"],
              label: "Height",
              field: {
                kind: "size"
              },
              defaultText: "0.7em"
            }, {
              path: ["colours"],
              label: "Fill colours",
              field: {
                kind: "colours"
              },
              defaultText: "#ffffff"
            }, {
              path: ["backgroundColour"],
              label: "Track colour",
              field: {
                kind: "colour"
              },
              defaultText: "rgba(0, 0, 0, 0.45)"
            }],
            keyBinding: [{
              path: ["action"],
              label: "Action",
              field: {
                kind: "choice",
                options: Zc.m
              },
              isRequired: !0
            }, ...wc],
            other: []
          };

        function oc(bb) {
          return "string" === typeof bb ? {
            str: bb
          } : bb
        }

        function Sc(bb, cb) {
          let sb = oc(bb);
          for (const kb of cb) sb = sb && "object" === typeof sb ? sb[kb] : void 0;
          return sb
        }

        function Rc(bb, cb, sb) {
          const kb = (bb, Wb) => {
            var ab;
            const Tb = cb[Wb],
              Ub = {
                ...bb
              };
            if (Wb === cb.length - 1) return void 0 === sb ? delete Ub[Tb] : Ub[Tb] = sb, Ub;
            const Ib = kb(null !== (ab = bb[Tb]) && void 0 !== ab ? ab : {}, Wb + 1);
            return 0 === Object.keys(Ib).length ? delete Ub[Tb] : Ub[Tb] = Ib, Ub
          };
          return function(bb) {
            const cb = Object.keys(bb);
            return "string" === typeof bb.str && 1 === cb.length ? bb.str : bb
          }(kb(oc(bb), 0))
        }

        function vc(bb, cb) {
          const sb = Ac(bb),
            kb = rc[sb].find((bb => bb.path.join(".") === cb.join("."))),
            Wb = null !== kb && void 0 !== kb && kb.isRequired && "other" !== sb ? Sc(dc[sb], cb) : void 0;
          return Rc(bb, cb, Wb)
        }

        function Fc(bb) {
          switch (Ac(bb)) {
            case "text":
              return String(Sc(bb, ["str"]));
            case "icon":
              return String(Sc(bb, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Sc(bb,["progress"])))}%`;
            case "keyBinding":
              return String(Sc(bb, ["action"]));
            case "other":
              return JSON.stringify(bb)
          }
        }
        const xc = /^[A-Za-z_$][\w$]*$/;

        function jc(bb) {
          if (Array.isArray(bb)) return `[${bb.map(jc).join(", ")}]`;
          if (bb && "object" === typeof bb) {
            const cb = Object.entries(bb).map((bb => {
              let [cb, sb] = bb;
              return `${xc.test(cb)?cb:JSON.stringify(cb)}: ${jc(sb)}`
            }));
            return 0 === cb.length ? "{}" : `{ ${cb.join(", ")} }`
          }
          return JSON.stringify(bb)
        }

        function pc(bb) {
          const cb = bb.map(jc),
            sb = `[${cb.join(", ")}]`;
          return sb.length <= 60 ? sb : `[\n${cb.map((bb=>`    ${bb},`)).join("\n")}\n]`
        }
        const bs = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function cs(bb) {
          let cb = "";
          for (let Wb = 0; Wb < bb.length; Wb++) {
            const ab = bb[Wb];
            if ("\\" === ab) {
              var sb;
              const kb = null !== (sb = bb[Wb + 1]) && void 0 !== sb ? sb : "";
              cb += "'" === kb ? "'" : ab + kb, Wb++
            } else if ('"' === ab) cb += '\\"';
            else {
              var kb;
              cb += null !== (kb = bs[ab]) && void 0 !== kb ? kb : ab
            }
          }
          return `"${cb}"`
        }

        function ss(bb) {
          if ("string" === typeof bb) return !0;
          if (!bb || "object" !== typeof bb || Array.isArray(bb)) return !1;
          const cb = bb;
          return "ProgressBar" === cb.type ? "number" === typeof cb.progress : "StyledKeyBinding" === cb.type ? Zc.m.includes(cb.action) : "string" === typeof cb.icon || "string" === typeof cb.str || "string" === typeof cb.entityName || "string" === typeof cb.translationKey
        }

        function ks(bb) {
          let cb;
          try {
            cb = function(bb) {
              let cb = "",
                sb = "",
                kb = 0;
              const Wb = () => {
                cb += sb.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), sb = ""
              };
              for (; kb < bb.length;) {
                const ab = bb.slice(kb).search(/["'`]|\/\//);
                if (-1 === ab) {
                  sb += bb.slice(kb);
                  break
                }
                sb += bb.slice(kb, kb + ab);
                const Tb = kb + ab,
                  Ub = bb[Tb];
                if ("/" === Ub) {
                  const cb = bb.indexOf("\n", Tb);
                  kb = -1 === cb ? bb.length : cb;
                  continue
                }
                if (Wb(), "`" === Ub) throw new Error("Use quotes rather than template strings.");
                let Ib = Tb + 1;
                for (; Ib < bb.length && bb[Ib] !== Ub;) Ib += "\\" === bb[Ib] ? 2 : 1;
                if (Ib >= bb.length) throw new Error("A string is missing its closing quote.");
                const Hb = bb.slice(Tb + 1, Ib);
                cb += cs(Hb), kb = Ib + 1
              }
              return Wb(), JSON.parse(cb)
            }(bb.trim())
          } catch (kb) {
            return {
              parts: null,
              error: kb instanceof SyntaxError ? "This isn't a valid array yet." : kb.message
            }
          }
          if (!Array.isArray(cb)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const sb = cb.findIndex((bb => !ss(bb)));
          return -1 !== sb ? {
            parts: null,
            error: `Part ${sb+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: cb,
            error: null
          }
        }
        const Ws = 1 / Dc.e.clientTicksPerSecond,
          as = 700,
          Ts = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Us = {
            progressBar: Gc.progressBar.ob,
            timedClick: Gc.timedClick.icon,
            gravityBar: Gc.gravityBar.icon,
            precisionBar: Gc.precisionBar.icon,
            rhythmClick: Gc.rhythmClick.icon
          };

        function Is(bb) {
          let {
            type: cb
          } = bb;
          const [sb, Wb] = (0, kb.useState)("ready"), [Tb, Ub] = (0, kb.useState)(1), [Ib, Hb] = (0, kb.useState)(!0), fb = (0, kb.useRef)(null), Mb = (0, kb.useRef)(null), Xb = (0, kb.useRef)(null), nb = (0, kb.useRef)(new Set), lb = (0, kb.useRef)(!1), eb = Us[cb], Cb = (0, kb.useMemo)((() => ({
            getState: () => {
              var bb, cb;
              return null !== (bb = null === (cb = Xb.current) || void 0 === cb ? void 0 : cb.getState()) && void 0 !== bb ? bb : Ts
            },
            onFrame: bb => (nb.current.add(bb), () => {
              nb.current.delete(bb)
            })
          })), []);
          (0, kb.useEffect)((() => {
            const bb = fb.current,
              cb = Mb.current;
            if (!bb || !cb) return;
            const sb = new ResizeObserver((() => {
              Ub(bb.clientWidth / Math.max(1, cb.offsetWidth))
            }));
            return sb.observe(bb), () => {
              sb.disconnect()
            }
          }), []), (0, kb.useEffect)((() => {
            var bb;
            if ("playing" !== sb) return;
            let kb = !1;
            const ab = new Oc.g[cb](Gc[cb], (bb => {
              kb = !0, Hb(!1), Wb(bb ? "succeeded" : "failed")
            }), (() => {}));
            Xb.current = ab;
            let Tb = 0,
              Ub = performance.now(),
              Ib = requestAnimationFrame((function bb(cb) {
                for (Tb += Math.min(.25, (cb - Ub) / 1e3), Ub = cb; Tb >= Ws && !kb;) Tb -= Ws, ab.handleTick(Ws);
                for (const sb of nb.current) sb();
                kb || (Ib = requestAnimationFrame(bb))
              }));
            return null === (bb = fb.current) || void 0 === bb || bb.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Ib), ab.tearDown(), Xb.current = null, lb.current = !1
            }
          }), [sb, cb]), (0, kb.useEffect)((() => {
            if (Ib) return;
            const bb = setTimeout((() => {
              Hb(!0)
            }), as);
            return () => {
              clearTimeout(bb)
            }
          }), [Ib]);
          const Nb = bb => {
            var cb;
            "playing" === sb && lb.current !== bb && (lb.current = bb, null === (cb = Xb.current) || void 0 === cb || cb.handleMouseInput(bb))
          };
          return (0, mb.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, mb.jsxs)("div", {
              ref: fb,
              className: ab()("DocsQteStage", {
                Playing: "playing" === sb
              }),
              tabIndex: "playing" === sb ? 0 : -1,
              role: "playing" === sb ? "button" : void 0,
              "aria-label": "playing" === sb ? `${cb} quick time event: click or press Space` : void 0,
              onPointerDown: bb => {
                0 === bb.button && Nb(!0)
              },
              onPointerUp: () => {
                Nb(!1)
              },
              onPointerLeave: () => {
                Nb(!1)
              },
              onPointerCancel: () => {
                Nb(!1)
              },
              onKeyDown: bb => {
                "playing" !== sb || " " !== bb.key && "Enter" !== bb.key || (bb.preventDefault(), Nb(!0))
              },
              onKeyUp: bb => {
                "playing" !== sb || " " !== bb.key && "Enter" !== bb.key || Nb(!1)
              },
              children: [(0, mb.jsx)("div", {
                ref: Mb,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Tb})`
                },
                children: "playing" === sb && (0, mb.jsx)(ic.d.Provider, {
                  value: Cb,
                  children: (0, mb.jsx)(Ec.c, {
                    qte: {
                      type: cb,
                      parameters: Gc[cb]
                    }
                  })
                })
              }), "playing" !== sb && (0, mb.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== sb && (0, mb.jsxs)("div", {
                  className: ab()("DocsQteResult", "succeeded" === sb ? "Succeeded" : "Failed"),
                  children: [(0, mb.jsx)(Qb, {
                    name: "succeeded" === sb ? "check" : "cross",
                    isTinted: !0
                  }), (0, mb.jsx)("span", {
                    children: "succeeded" === sb ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, mb.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Ib,
                  onClick: () => {
                    Wb("playing")
                  },
                  children: [(0, mb.jsx)(Qb, {
                    name: "ready" === sb ? "play" : "replay"
                  }), (0, mb.jsx)("span", {
                    children: "ready" === sb ? `Try ${cb}` : "Play again"
                  })]
                })]
              })]
            }), eb && !zc(eb) && (0, mb.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, mb.jsx)("code", {
                children: eb
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Hs(bb) {
          let {
            level: cb,
            text: sb,
            anchor: kb,
            className: Wb
          } = bb;
          const Tb = `h${Math.min(cb,6)}`;
          return (0, mb.jsxs)(Tb, {
                id: kb,
                className: ab()("DocsHeading", Wb),
                children: [(0, mb.jsx)(uc, {
                      text: sb
                    }), (0, mb.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${kb}`,
                        "aria-label": `Link to ${sb.replace(/`/g,"")}`,children:"#"})]})}function fs(bb){let{items:cb,ordered:sb}=bb;const kb=sb?"ol":"ul";return(0,mb.jsx)(kb,{className:"DocsList",children:cb.map(((bb,cb)=>(0,mb.jsxs)("li",{children:[(0,mb.jsx)(uc,{text:bb.text}),bb.children.length>0&&(0,mb.jsx)(fs,{items:bb.children,ordered:sb})]},cb)))})}function Ms(bb){const cb=bb[0],sb="paragraph"===(null===cb||void 0===cb?void 0:cb.kind)?cb.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(sb)?"warning":/^\*\*(tip|prefer)/.test(sb)?"tip":"note"}function Xs(bb){let{block:cb}=bb;switch(cb.kind){case"heading":return(0,mb.jsx)(Hs,{level:cb.level,text:cb.text,anchor:cb.anchor});case"paragraph":return(0,mb.jsx)("p",{children:(0,mb.jsx)(uc,{text:cb.text})});case"code":{const bb="ts"===cb.lang?function(bb){const cb=bb.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return cb&&Object.hasOwn(Gc,cb[1])?cb[1]:null}(cb.code):null;return(0,mb.jsxs)(mb.Fragment,{children:[(0,mb.jsx)(Yb,{code:cb.code,lang:cb.lang}),bb&&(0,mb.jsx)(Is,{type:bb})]})}case"table":return(0,mb.jsx)("div",{className:"DocsTableScroll",children:(0,mb.jsxs)("table",{className:"DocsTable",children:[(0,mb.jsx)("thead",{children:(0,mb.jsx)("tr",{children:cb.header.map(((bb,cb)=>(0,mb.jsx)("th",{children:(0,mb.jsx)(uc,{text:bb})},cb)))})}),(0,mb.jsx)("tbody",{children:cb.rows.map(((bb,cb)=>(0,mb.jsx)("tr",{children:bb.map(((bb,cb)=>(0,mb.jsx)("td",{children:(0,mb.jsx)(uc,{text:bb})},cb)))},cb)))})]})});case"list":return(0,mb.jsx)(fs,{items:cb.items,ordered:cb.ordered});case"quote":return(0,mb.jsx)("aside",{className:ab()("DocsCallout",Ms(cb.blocks)),children:(0,mb.jsx)(ns,{blocks:cb.blocks})});case"rule":return(0,mb.jsx)("hr",{className:"DocsRule"})}}function ns(bb){let{blocks:cb}=bb;return(0,mb.jsx)(mb.Fragment,{children:cb.map(((bb,cb)=>(0,mb.jsx)(Xs,{block:bb},cb)))})}var ms=sb(4476),ls=sb(4479);function Qs(bb){return"blocks"===bb||"items"===bb}const es=new Map;function Cs(bb){let cb=es.get(bb);return cb||(cb=function(bb){const cb={entries:[],legend:[],notes:[],examples:[]};let sb=!1;for(const ab of bb.split(/\r?\n/).slice(1)){if(ab.startsWith("#")){const bb=ab.replace(/^# ?/,""),kb=bb.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);kb?cb.legend.push({code:kb[1],meaning:kb[2],usage:kb[3].trim()}):/^Examples:/.test(bb.trim())?sb=!0:sb&&bb.trim()?cb.examples.push(bb.trim()):bb.trim()&&!/^\s/.test(bb)&&cb.notes.push(bb.trim());continue}const bb=ab.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var kb,Wb;bb&&cb.entries.push({name:bb[1],variants:null!==(kb=null===(Wb=bb[2])||void 0===Wb?void 0:Wb.split(","))&&void 0!==kb?kb:[]})}return cb}("blocks"===bb?ms:ls),es.set(bb,cb)),cb}function Ns(bb){let{className:cb,value:sb,placeholder:kb,label:Wb,onChange:ab,count:Tb,children:Ub}=bb;return(0,mb.jsxs)("div",{className:cb,children:[(0,mb.jsx)(Qb,{name:"magnifying-glass"}),(0,mb.jsx)("input",{type:"search",value:sb,placeholder:kb,"aria-label":Wb,onChange:bb=>{ab(bb.target.value)}}),Ub,Tb&&(0,mb.jsxs)("span",{className:"DocsFilterCount",children:[Tb.visible," of ",Tb.total]})]})}var Vs=sb(1039);function Ls(bb){const cb=bb.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return cb?cb[2]:null}function us(bb){return"paragraph"===bb.kind&&""===bb.text.trim()}function Ys(bb){const cb={name:bb.heading.text,description:[],params:[],returns:null};let sb="description";for(const Wb of bb.blocks)if(!us(Wb))if("heading"===Wb.kind&&/^Parameters:?$/.test(Wb.text))sb="params";else if("heading"===Wb.kind&&/^Returns:?$/.test(Wb.text))sb="returns",cb.returns={type:"",description:[]};else if("params"!==sb||"table"!==Wb.kind){if("returns"===sb&&"paragraph"===Wb.kind&&""===cb.returns.type){const bb=Ls(Wb.text);if(null!==bb){cb.returns.type=bb.replaceAll("\\|","|");continue}}"returns"===sb?cb.returns.description.push(Wb):cb.description.push(Wb)}else for(const[bb,sb,ab]of Wb.rows){var kb;cb.params.push({name:bb,type:null!==(kb=Ls(sb))&&void 0!==kb?kb:sb,description:null!==ab&&void 0!==ab?ab:""})}return cb}const hs=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function gs(bb){return bb.filter((bb=>!us(bb)))}const Bs=/^[\w][\w .'&!:()-]*$/,ts=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function ys(bb){var cb;if("code"===bb.kind&&"text"===bb.lang){const cb=bb.code.split("\n").map((bb=>bb.trim())).filter(Boolean);return cb.length>0&&cb.every((bb=>Bs.test(bb)))?cb.map((bb=>({name:bb}))):null}return"paragraph"===bb.kind&&ts.test(bb.text.trim())?[...bb.text.matchAll(/`([ ^ `]+)` / g)].flatMap((bb => bb[1].split(/,\s*/).map((bb => ({
                              name: bb.trim()
                            }))))): "table" === bb.kind && null !== (cb = bb.header[0]) && void 0 !== cb && cb.startsWith("Song") ? bb.rows.map((bb => {
                              let [cb, sb] = bb;
                              return {
                                name: cb.replace(/`/g, ""),
                                caption: sb
                              }
                            })) : null
                          }

                          function Ps(bb) {
                            const cb = [];
                            for (const sb of bb) {
                              const bb = ys(sb),
                                kb = cb.at(-1),
                                Wb = "table" === sb.kind;
                              bb ? "names" === (null === kb || void 0 === kb ? void 0 : kb.kind) && kb.isSongs === Wb ? kb.names.push(...bb) : cb.push({
                                kind: "names",
                                names: bb,
                                isSongs: Wb
                              }) : cb.push({
                                kind: "block",
                                block: sb
                              })
                            }
                            return cb
                          }
                          const Ds = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Es(bb, cb) {
                            return `${Ds[bb]}-${(0,hb.x)(cb)}`
                          }
                          const is = new WeakMap;

                          function Os(bb, cb, sb) {
                            let kb = is.get(cb);
                            if (!kb) {
                              kb = new Map;
                              const sb = new Set;
                              for (const Wb of (0, hb.z)(cb)) {
                                const cb = Ps(gs(Wb.blocks)).map((cb => {
                                  if ("block" === cb.kind) return cb;
                                  return {
                                    kind: "names",
                                    names: cb.names.map((cb => {
                                      var kb, ab;
                                      const Tb = Es(bb, cb.name);
                                      let Ub = Tb;
                                      for (let bb = 2; sb.has(Ub); bb++) Ub = `${Tb}-${bb}`;
                                      return sb.add(Ub), {
                                        ...cb,
                                        anchor: Ub,
                                        heading: null !== (kb = null === (ab = Wb.heading) || void 0 === ab ? void 0 : ab.text) && void 0 !== kb ? kb : ""
                                      }
                                    })),
                                    isSongs: cb.isSongs
                                  }
                                }));
                                kb.set(Wb.blocks, cb)
                              }
                              is.set(cb, kb)
                            }
                            const Wb = kb.get(sb);
                            if (!Wb) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Wb
                          }
                          const Gs = "/textures/docs/skinPreviews",
                            Ks = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Zs = sb(4003),
                            zs = sb(4023);

                          function qs(bb) {
                            return Object.hasOwn(Zs.f, bb) ? Zs.f[bb] : null
                          }
                          const ds = {
                            dir1: [-1, -1, -1],
                            dir2: [1, 1, 1],
                            texture: "bubble",
                            minLifeTime: .2,
                            maxLifeTime: .6,
                            minEmitPower: 2,
                            maxEmitPower: 2,
                            minSize: .25,
                            maxSize: .35,
                            manualEmitCount: 20,
                            gravity: [0, -10, 0],
                            colorGradients: [{
                              timeFraction: 0,
                              minColor: [60, 60, 150, 1],
                              maxColor: [200, 200, 255, 1]
                            }],
                            velocityGradients: [{
                              timeFraction: 0,
                              factor: 1,
                              factor2: 1
                            }],
                            blendMode: zs.f.Standard
                          };

                          function As(bb, cb, sb) {
                            return cb + (sb - cb) * bb()
                          }

                          function ws(bb, cb, sb) {
                            return bb + (cb - bb) * sb
                          }

                          function rs(bb) {
                            return bb.length > 0 && "timeFraction" in bb[0]
                          }

                          function os(bb, cb) {
                            if (0 === bb.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!rs(bb.colorGradients)) {
                              const sb = bb.colorGradients,
                                {
                                  color: kb
                                } = sb[Math.floor(cb() * sb.length) % sb.length];
                              return [{
                                at: 0,
                                colour: [kb[0] / 255, kb[1] / 255, kb[2] / 255, 1]
                              }]
                            }
                            return [...bb.colorGradients].sort(((bb, cb) => bb.timeFraction - cb.timeFraction)).map((bb => {
                              var sb, kb, Wb;
                              const ab = bb.minColor,
                                Tb = null !== (sb = bb.maxColor) && void 0 !== sb ? sb : ab,
                                Ub = cb(),
                                Ib = [ws(ab[0], Tb[0], Ub) / 255, ws(ab[1], Tb[1], Ub) / 255, ws(ab[2], Tb[2], Ub) / 255, ws(null !== (kb = ab[3]) && void 0 !== kb ? kb : 1, null !== (Wb = Tb[3]) && void 0 !== Wb ? Wb : 1, Ub)];
                              return {
                                at: bb.timeFraction,
                                colour: Ib
                              }
                            }))
                          }

                          function Ss(bb, cb, sb, kb) {
                            const Wb = As(kb, bb.minEmitPower, bb.maxEmitPower),
                              ab = cb => As(kb, Math.min(bb.dir1[cb], bb.dir2[cb]), Math.max(bb.dir1[cb], bb.dir2[cb])) * Wb,
                              Tb = [...bb.velocityGradients].sort(((bb, cb) => bb.timeFraction - cb.timeFraction)).map((bb => ({
                                at: bb.timeFraction,
                                factor: As(kb, bb.factor, bb.factor2)
                              })));
                            return {
                              pos: [As(kb, cb[0], sb[0]), As(kb, cb[1], sb[1]), As(kb, cb[2], sb[2])],
                              dir: [ab(0), ab(1), ab(2)],
                              age: 0,
                              life: As(kb, bb.minLifeTime, bb.maxLifeTime),
                              size: As(kb, bb.minSize, bb.maxSize),
                              colours: os(bb, kb),
                              velocityFactors: Tb
                            }
                          }

                          function Rs(bb, cb, sb, kb) {
                            if (cb < bb[0].at) return sb(Math.min(1, bb.length - 1));
                            for (let Wb = 0; Wb < bb.length - 1; Wb++)
                              if (cb <= bb[Wb + 1].at) {
                                const ab = bb[Wb + 1].at - bb[Wb].at;
                                return kb(sb(Wb), sb(Wb + 1), ab > 0 ? (cb - bb[Wb].at) / ab : 1)
                              } return sb(bb.length - 1)
                          }

                          function vs(bb) {
                            return Rs(bb.colours, bb.age / bb.life, (cb => bb.colours[cb].colour), ((bb, cb, sb) => [ws(bb[0], cb[0], sb), ws(bb[1], cb[1], sb), ws(bb[2], cb[2], sb), ws(bb[3], cb[3], sb)]))
                          }

                          function Fs(bb, cb, sb) {
                            if (bb.age += sb, bb.age >= bb.life) return !1;
                            const kb = function(bb) {
                              return 0 === bb.velocityFactors.length ? 1 : Rs(bb.velocityFactors, bb.age / bb.life, (cb => bb.velocityFactors[cb].factor), ws)
                            }(bb) * sb;
                            for (let ab = 0; ab < 3; ab++) {
                              var Wb;
                              bb.pos[ab] += bb.dir[ab] * kb, bb.dir[ab] += (null !== (Wb = cb[ab]) && void 0 !== Wb ? Wb : 0) * sb
                            }
                            return !0
                          }

                          function xs(bb) {
                            return String(Math.round(1e6 * bb) / 1e6)
                          }

                          function ps(bb) {
                            return `[${bb.map(xs).join(", ")}]`
                          }

                          function bk(bb, cb) {
                            const sb = `${cb}    `;
                            return `[\n${(rs(bb)?bb.map((bb=>{const cb=[`${sb}    timeFraction: ${xs(bb.timeFraction)},`,`${sb}    minColor: ${ps(bb.minColor)},`];return bb.maxColor&&cb.push(`${sb}    maxColor: ${ps(bb.maxColor)},`),`${sb}{\n${cb.join("\n")}\n${sb}},`})):bb.map((bb=>`
                            $ {
                              sb
                            } {
                              color: $ {
                                ps(bb.color)
                              }
                            }, `))).join("\n")}\n${cb}]`
                          }
                          const ck = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            sk = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const kk = .6;

                          function Wk(bb, cb) {
                            return `${cb?"song":"sound"}:${bb}`
                          }
                          let ak = {
                              track: null,
                              volume: kk
                            },
                            Tk = null,
                            Uk = 0,
                            Ik = 0;
                          const Hk = new Set;

                          function fk(bb) {
                            ak = {
                              ...ak,
                              ...bb
                            }, Hk.forEach((bb => {
                              bb()
                            }))
                          }

                          function Mk(bb) {
                            ak.track && fk({
                              track: {
                                ...ak.track,
                                ...bb
                              }
                            })
                          }

                          function Xk(bb) {
                            const [cb, sb] = (0, kb.useState)((() => bb(ak))), Wb = (0, kb.useRef)(bb);
                            return Wb.current = bb, (0, kb.useEffect)((() => {
                              const bb = () => {
                                sb((() => Wb.current(ak)))
                              };
                              return Hk.add(bb), bb(), () => {
                                Hk.delete(bb)
                              }
                            }), []), cb
                          }

                          function nk() {
                            Uk++;
                            const bb = Tk;
                            Tk = null, null === bb || void 0 === bb || bb.stop()
                          }

                          function mk(bb, cb) {
                            let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            nk();
                            const Wb = Uk,
                              {
                                track: ab
                              } = ak,
                              Tb = ab && ab.name === bb && ab.isSong === cb ? ab.duration : 0;
                            Ik = kb, fk({
                              track: {
                                name: bb,
                                isSong: cb,
                                status: "loading",
                                duration: Tb
                              }
                            }), Promise.all([sb.e(215), sb.e(239)]).then((() => sb(39221))).then((sb => {
                              let {
                                playDocsSound: ab
                              } = sb;
                              Wb === Uk && (Tk = ab(bb, cb, ak.volume, kb, {
                                onPlay: bb => {
                                  Wb === Uk && Mk({
                                    status: "playing",
                                    duration: bb
                                  })
                                },
                                onEnd: bb => {
                                  var cb, sb;
                                  Wb === Uk && (Tk = null, bb ? fk({
                                    track: null
                                  }) : (Ik = null !== (cb = null === (sb = ak.track) || void 0 === sb ? void 0 : sb.duration) && void 0 !== cb ? cb : 0, Mk({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((cb => {
                              console.error(`Could not play docs sound ${bb}`, cb), Wb === Uk && fk({
                                track: null
                              })
                            }))
                          }

                          function lk() {
                            const {
                              track: bb
                            } = ak;
                            if (!bb) return;
                            if ("playing" === bb.status && Tk) return Ik = Tk.aN(), Tk.pause(), void Mk({
                              status: "paused"
                            });
                            if ("loading" === bb.status) return nk(), void Mk({
                              status: "paused"
                            });
                            if (Tk) return void Tk.resume();
                            const cb = bb.duration > 0 && Ik >= bb.duration - .05;
                            mk(bb.name, bb.isSong, cb ? 0 : Ik)
                          }

                          function Qk() {
                            var bb;
                            return Tk && "playing" === (null === (bb = ak.track) || void 0 === bb ? void 0 : bb.status) ? Tk.aN() : Ik
                          }

                          function ek(bb) {
                            var cb;
                            null === (cb = Tk) || void 0 === cb || cb.setVolume(bb), fk({
                              volume: bb
                            })
                          }

                          function Ck() {
                            nk(), Ik = 0, fk({
                              track: null
                            })
                          }
                          const Nk = (0, kb.createContext)(null);
                          let Vk = null;

                          function Lk() {
                            const [bb, cb] = (0, kb.useState)(null);
                            return (0, kb.useEffect)((() => {
                              let bb = !1;
                              return Vk ??= Promise.all([sb.e(69), sb.e(72), sb.e(71), sb.e(70), sb.e(196), sb.e(96), sb.e(220)]).then((() => sb(39219))), Vk.then((sb => {
                                bb || cb(sb)
                              }), (bb => {
                                console.error("Could not load the docs gallery's textures", bb), Vk = null
                              })), () => {
                                bb = !0
                              }
                            }), []), bb
                          }
                          const uk = 24,
                            Yk = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function hk(bb, cb) {
                            const sb = "skins" === bb ? function(bb, cb) {
                              const sb = Ks.find((cb => bb.startsWith(cb.heading)));
                              return sb ? function(bb, cb) {
                                return `${bb}-${cb}`
                              }(sb.prefix, cb) : null
                            }(cb.heading, cb.name) : null;
                            return null === sb ? null : `${Gs}/${sb}.webp`
                          }

                          function Jk(bb) {
                            let {
                              kind: cb,
                              entry: sb,
                              assets: Wb,
                              renderedUrl: Tb
                            } = bb;
                            const {
                              name: Ub
                            } = sb, [Ib, Hb] = (0, kb.useState)(!1);
                            if ("icons" === cb && zc(Ub)) return (0, mb.jsx)(Vs.b, {
                              className: "DocsTileIcon",
                              name: Ub
                            });
                            let fb = null;
                            var Mb;
                            if ("icons" === cb) fb = null !== (Mb = null === Wb || void 0 === Wb ? void 0 : Wb.getIngameIconUrl(Ub)) && void 0 !== Mb ? Mb : null;
                            else if ("particles" === cb) {
                              var Xb, nb, lb;
                              fb = null !== (Xb = null === Wb || void 0 === Wb ? void 0 : Wb.getParticleTextureUrl(null !== (nb = null === (lb = qs(Ub)) || void 0 === lb ? void 0 : lb.texture) && void 0 !== nb ? nb : Ub)) && void 0 !== Xb ? Xb : null
                            } else "skins" === cb && (fb = null !== Tb && void 0 !== Tb ? Tb : Yk.test(Ub) ? `/textures/charSkins/previews/${Ub}_preview.png` : null);
                            return !fb || Ib ? (0, mb.jsx)(Qb, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === cb ? "person" : "image"
                            }) : (0, mb.jsx)("img", {
                              className: ab()("DocsTileImage", {
                                Pixelated: "skins" !== cb
                              }),
                              src: fb,
                              srcSet: fb === Tb ? `${fb} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${fb}`), Hb(!0)
                              }
                            })
                          }

                          function gk(bb) {
                            let {
                              entry: cb,
                              isSong: sb
                            } = bb;
                            const kb = Xk((bb => {
                                let {
                                  track: kb
                                } = bb;
                                return (null === kb || void 0 === kb ? void 0 : kb.name) === cb.name && kb.isSong === sb ? kb.status : null
                              })),
                              Wb = null !== kb && "paused" !== kb;
                            return (0, mb.jsxs)("button", {
                              type: "button",
                              id: cb.anchor,
                              className: ab()("DocsSoundTile", {
                                Playing: Wb
                              }),
                              "data-docs-track": Wk(cb.name, sb),
                              "aria-label": Wb ? `Pause ${cb.name}` : `Play ${cb.name}`,
                              onClick: () => {
                                null !== kb ? lk() : mk(cb.name, sb)
                              },
                              children: [(0, mb.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, mb.jsx)(Qb, {
                                  name: Wb ? "pause" : "play"
                                })
                              }), (0, mb.jsx)("code", {
                                className: "DocsSoundName",
                                children: cb.name
                              }), cb.caption && (0, mb.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: cb.caption
                              })]
                            })
                          }

                          function Bk(bb) {
                            let {
                              kind: cb,
                              names: sb,
                              isSongs: Wb
                            } = bb;
                            const Tb = Lk(),
                              [Ub, Ib] = Cb(),
                              Hb = !1 === (null === Ub || void 0 === Ub ? void 0 : Ub.failed) ? Ub.text : null,
                              fb = (0, kb.useContext)(Nk),
                              [Mb, Xb] = (0, kb.useState)(""),
                              nb = Mb.trim().toLowerCase(),
                              lb = nb ? sb.filter((bb => bb.name.toLowerCase().includes(nb))) : sb;
                            return (0, mb.jsxs)("div", {
                              className: "DocsGallery",
                              children: [sb.length > uk && (0, mb.jsx)(Ns, {
                                className: "DocsGalleryFilter",
                                value: Mb,
                                placeholder: `Filter ${sb.length} names\u2026`,
                                label: "Filter names",
                                onChange: Xb,
                                count: nb ? {
                                  visible: lb.length,
                                  total: sb.length
                                } : null
                              }), (0, mb.jsx)("div", {
                                className: ab()("DocsGalleryGrid", `Kind-${cb}`, {
                                  Songs: Wb
                                }),
                                children: lb.map((bb => {
                                  if ("sounds" === cb) return (0, mb.jsx)(gk, {
                                    entry: bb,
                                    isSong: Wb
                                  }, bb.anchor);
                                  if (fb && "particles" === cb && qs(bb.name)) return (0, mb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: ab()("DocsTile Previewable", {
                                      Copied: Hb === bb.name
                                    }),
                                    title: `Play "${bb.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      fb(bb.name), Ib(bb.name)
                                    },
                                    children: [(0, mb.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, mb.jsx)(Jk, {
                                        kind: cb,
                                        entry: bb,
                                        assets: Tb,
                                        renderedUrl: null
                                      }), (0, mb.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, mb.jsx)(Qb, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, mb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Hb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor);
                                  const sb = hk(cb, bb);
                                  return (0, mb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: ab()("DocsTile", {
                                      Copied: Hb === bb.name
                                    }),
                                    title: `Copy "${bb.name}"`,
                                    onClick: () => {
                                      Ib(bb.name)
                                    },
                                    children: [(0, mb.jsx)("span", {
                                      className: ab()("DocsTilePreview", {
                                        Rendered: null !== sb
                                      }),
                                      children: (0, mb.jsx)(Jk, {
                                        kind: cb,
                                        entry: bb,
                                        assets: Tb,
                                        renderedUrl: sb
                                      })
                                    }), (0, mb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Hb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor)
                                }))
                              })]
                            })
                          }

                          function tk(bb) {
                            let {
                              kind: cb,
                              content: sb,
                              blocks: kb
                            } = bb;
                            return (0, mb.jsx)(mb.Fragment, {
                              children: Os(cb, sb, kb).map(((bb, sb) => "block" === bb.kind ? (0, mb.jsx)(Xs, {
                                block: bb.block
                              }, sb) : (0, mb.jsx)(Bk, {
                                kind: cb,
                                names: bb.names,
                                isSongs: bb.isSongs
                              }, sb)))
                            })
                          }
                          const yk = [{
                            pageId: "readme"
                          }, {
                            pageId: "snippets",
                            countNoun: "snippets"
                          }, {
                            pageId: "apiReference",
                            countNoun: "methods"
                          }, {
                            pageId: "callbacks",
                            countNoun: "callbacks"
                          }, {
                            pageId: "howTo"
                          }, {
                            pageId: "clientOptions",
                            countNoun: "options"
                          }];

                          function Pk(bb) {
                            let {
                              cards: cb = yk,
                              label: sb = "Start here"
                            } = bb;
                            const Wb = (0, kb.useContext)(nc);
                            return (0, mb.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": sb,
                              children: cb.map((bb => {
                                let {
                                  pageId: cb,
                                  countNoun: sb
                                } = bb;
                                const kb = Zb(cb);
                                return (0, mb.jsxs)(Tb.d, {
                                  to: rb(Wb, kb),
                                  className: "DocsLandingCard",
                                  children: [(0, mb.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, mb.jsx)(Qb, {
                                      name: kb.icon
                                    })
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: kb.title
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: kb.summary
                                  }), sb && (0, mb.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [qb(kb).sections.length, " ", sb]
                                  })]
                                }, cb)
                              }))
                            })
                          }
                          const Dk = 240;

                          function Ek(bb) {
                            let {
                              faces: cb
                            } = bb;
                            return (0, mb.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, mb.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${cb.top}")`
                                }
                              }), (0, mb.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${cb.left}")`
                                }
                              }), (0, mb.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${cb.right}")`
                                }
                              })]
                            })
                          }

                          function ik(bb) {
                            let {
                              src: cb
                            } = bb;
                            const [sb, Wb] = (0, kb.useState)(!1);
                            return sb ? null : (0, mb.jsx)("img", {
                              src: cb,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${cb}`), Wb(!0)
                              }
                            })
                          }

                          function Ok(bb) {
                            let {
                              kind: cb
                            } = bb;
                            const sb = Cs(cb),
                              Wb = Lk(),
                              Tb = (0, Ub.r)(),
                              [Ib, Hb] = (0, kb.useState)(""),
                              [fb, Mb] = (0, kb.useState)(null),
                              [Xb, nb] = (0, kb.useState)(Dk),
                              [lb, eb] = (0, kb.useState)(null),
                              Cb = (0, kb.useRef)(null),
                              Vb = Ib.trim().toLowerCase();
                            (0, kb.useEffect)((() => {
                              const bb = (0, hb.v)(Tb.hash),
                                kb = sb.entries.find((sb => Es(cb, sb.name) === bb));
                              if (kb) Cb.current = kb.name, Hb(kb.name), Mb(null), eb(kb.name);
                              else if (null !== Cb.current) {
                                const bb = Cb.current;
                                Cb.current = null, Hb((cb => cb === bb ? "" : cb)), eb(null)
                              }
                            }), [sb, cb, Tb.hash, Tb.key]), (0, kb.useEffect)((() => {
                              var bb;
                              null !== lb && (null === (bb = document.getElementById(Es(cb, lb))) || void 0 === bb || bb.scrollIntoView({
                                block: "center"
                              }))
                            }), [cb, lb]);
                            const Lb = sb.entries.filter((bb => (!Vb || bb.name.toLowerCase().includes(Vb)) && (!fb || bb.variants.includes(fb))));
                            return (0, mb.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [sb.notes.length > 0 && (0, mb.jsx)("div", {
                                className: "DocsProse",
                                children: sb.notes.map((bb => (0, mb.jsx)("p", {
                                  children: bb
                                }, bb)))
                              }), sb.legend.length > 0 && (0, mb.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, mb.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, mb.jsx)("thead", {
                                    children: (0, mb.jsxs)("tr", {
                                      children: [(0, mb.jsx)("th", {
                                        children: "Code"
                                      }), (0, mb.jsx)("th", {
                                        children: "Variant"
                                      }), (0, mb.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, mb.jsx)("tbody", {
                                    children: sb.legend.map((bb => (0, mb.jsxs)("tr", {
                                      children: [(0, mb.jsx)("td", {
                                        children: (0, mb.jsx)("button", {
                                          type: "button",
                                          className: ab()("DocsVariantChip", {
                                            Active: fb === bb.code
                                          }),
                                          "aria-pressed": fb === bb.code,
                                          title: `Show only ${cb} with ${bb.meaning} variants`,
                                          onClick: () => {
                                            Mb(fb === bb.code ? null : bb.code)
                                          },
                                          children: bb.code
                                        })
                                      }), (0, mb.jsx)("td", {
                                        children: bb.meaning
                                      }), (0, mb.jsx)("td", {
                                        children: (0, mb.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: bb.usage
                                        })
                                      })]
                                    }, bb.code)))
                                  })]
                                })
                              }), sb.examples.length > 0 && (0, mb.jsx)(Yb, {
                                lang: "text",
                                code: sb.examples.join("\n")
                              }), (0, mb.jsx)(Ns, {
                                className: "DocsFilterBar",
                                value: Ib,
                                placeholder: `Search ${sb.entries.length} ${cb}\u2026`,
                                label: `Search ${cb}`,
                                onChange: bb => {
                                  Hb(bb), nb(Dk)
                                },
                                count: Vb || fb ? {
                                  visible: Lb.length,
                                  total: sb.entries.length
                                } : null,
                                children: fb && (0, mb.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Mb(null)
                                  },
                                  children: [fb, " ", (0, mb.jsx)(Qb, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, mb.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Lb.slice(0, Xb).map((bb => {
                                  const sb = "blocks" === cb ? null === Wb || void 0 === Wb ? void 0 : Wb.getBlockFaces(bb.name) : null,
                                    kb = Wb && !sb ? Wb.getItemTextureUrl(bb.name) : null;
                                  return (0, mb.jsxs)("div", {
                                    id: Es(cb, bb.name),
                                    className: ab()("DocsCatalogueTile", {
                                      Linked: bb.name === lb
                                    }),
                                    children: [(0, mb.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [sb && (0, mb.jsx)(Ek, {
                                        faces: sb
                                      }), kb && (0, mb.jsx)(ik, {
                                        src: kb
                                      })]
                                    }), (0, mb.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: bb.name
                                    }), bb.variants.length > 0 && (0, mb.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: bb.variants.map((bb => (0, mb.jsx)("span", {
                                        children: bb
                                      }, bb)))
                                    }), (0, mb.jsx)(Nb, {
                                      text: bb.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, bb.name)
                                }))
                              }), Lb.length > Xb && (0, mb.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  nb(Lb.length)
                                },
                                children: ["Show all ", Lb.length]
                              }), 0 === Lb.length && (0, mb.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", cb, " match."]
                              })]
                            })
                          }
                          var Gk = sb(4545),
                            Kk = sb(1572);
                          const Zk = .95 * Gk.e;

                          function zk(bb) {
                            return /^\s*```/.test(bb)
                          }

                          function qk(bb, cb) {
                            const sb = [
                              []
                            ];
                            let kb = !1;
                            for (const Wb of bb.split("\n")) !kb && cb(Wb) && sb.at(-1).length > 0 && sb.push([]), zk(Wb) && (kb = !kb), sb.at(-1).push(Wb);
                            return sb.map((bb => bb.join("\n").trim())).filter(Boolean)
                          }

                          function dk(bb, cb) {
                            const sb = `${"#".repeat(cb)} `,
                              kb = [];
                            let Wb = !1;
                            for (const ab of bb.split("\n")) zk(ab) ? Wb = !Wb : !Wb && ab.startsWith(sb) && kb.push(ab.slice(sb.length).trim());
                            return kb
                          }

                          function Ak(bb) {
                            return bb.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class wk {
                            constructor(bb, cb) {
                              this.origin = cb, this.pages = void 0, this.partPaths = new Map;
                              const sb = bb.map((bb => {
                                const cb = cb => this.resolveLinks(bb, cb).length,
                                  sb = function(bb, cb) {
                                    const sb = bb.map((bb => cb(bb.markdown) + 2)),
                                      kb = sb.reduce(((bb, cb) => bb + cb), 0),
                                      Wb = kb / Math.ceil(kb / Zk),
                                      ab = [];
                                    let Tb = 0;
                                    return bb.forEach(((bb, cb) => {
                                      const kb = sb[cb];
                                      (0 === ab.length || Tb + kb > Zk || Tb + kb / 2 > Wb) && (ab.push([]), Tb = 0), ab.at(-1).push(bb), Tb += kb
                                    })), ab
                                  }(function(bb, cb) {
                                    return qk(bb, (bb => bb.startsWith("## "))).flatMap((bb => {
                                      var sb;
                                      const kb = null !== (sb = dk(bb, 2)[0]) && void 0 !== sb ? sb : "";
                                      if (cb(bb) <= Zk) return [{
                                        markdown: bb,
                                        section: kb
                                      }];
                                      let Wb = !1,
                                        ab = "";
                                      return qk(bb, (bb => {
                                        const cb = Wb && "" !== bb.trim();
                                        return Wb = "" === bb.trim(), cb
                                      })).map((bb => {
                                        var cb;
                                        const sb = dk(bb, 3),
                                          Wb = bb.startsWith("### ") ? sb[0] : ab;
                                        return ab = null !== (cb = sb.at(-1)) && void 0 !== cb ? cb : ab, {
                                          markdown: bb,
                                          section: kb || Wb
                                        }
                                      }))
                                    }))
                                  }(Ak(bb), cb), cb);
                                return {
                                  page: bb,
                                  groups: sb.length > 1 ? sb : []
                                }
                              }));
                              for (const {
                                  page: kb,
                                  groups: Wb
                                }
                                of sb) Wb.forEach(((bb, cb) => {
                                const sb = (0, Gk.x)(kb.slug, cb);
                                for (const Wb of bb.flatMap((bb => [...dk(bb.markdown, 2), ...dk(bb.markdown, 3)]))) {
                                  const bb = `${kb.id}#${(0,hb.x)(Wb)}`;
                                  this.partPaths.has(bb) || this.partPaths.set(bb, sb)
                                }
                              }));
                              this.pages = sb.map((bb => {
                                let {
                                  page: cb,
                                  groups: sb
                                } = bb;
                                return {
                                  page: cb,
                                  path: (0, Gk.v)(cb.slug),
                                  markdown: `# ${cb.title}\n\n${this.resolveLinks(cb,Ak(cb))}\n`,
                                  parts: sb.map(((bb, kb) => this.renderPart(cb, bb, kb, sb.length)))
                                }
                              }))
                            }
                            url(bb) {
                              return `${this.origin}${bb}`
                            }
                            getPage(bb) {
                              return this.pages.find((cb => cb.page.id === bb))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((bb => (bb.parts.length > 0 ? bb.parts : [{
                                path: bb.path,
                                label: "",
                                markdown: bb.markdown
                              }]).filter((bb => bb.markdown.length > Gk.e))))
                            }
                            markdownUrl(bb, cb) {
                              const sb = cb && this.partPaths.get(`${bb.id}#${cb}`) || (0, Gk.v)(bb.slug);
                              return this.url(cb ? `${sb}#${cb}` : sb)
                            }
                            resolveLinks(bb, cb) {
                              return cb.replace(/\]\((#[^)]+)\)/g, ((cb, sb) => {
                                var kb;
                                const Wb = null !== (kb = Ab(sb)) && void 0 !== kb ? kb : this.samePageTarget(bb, sb);
                                return Wb ? `](${this.markdownUrl(Wb.page,Wb.anchor)})` : cb
                              }))
                            }
                            samePageTarget(bb, cb) {
                              const sb = (0, hb.x)(cb.slice(1));
                              return db(bb, sb) ? {
                                page: bb,
                                anchor: sb
                              } : null
                            }
                            renderPart(bb, cb, sb, kb) {
                              const Wb = function(bb) {
                                  const cb = bb.map((bb => bb.section)).filter(Boolean);
                                  if (0 === cb.length) return "";
                                  const sb = cb[0],
                                    kb = cb.at(-1);
                                  return sb === kb ? sb : `${sb} to ${kb}`
                                }(cb),
                                ab = cb.map((bb => bb.markdown)).join("\n\n"),
                                Tb = Wb ? `It covers ${Wb}. ` : "",
                                Ub = `Part ${sb+1} of ${kb} of [${bb.title}](${this.url((0,Gk.v)(bb.slug))}). ${Tb}[llms.txt](${this.url(Gk.j)}) lists every part.`;
                              return {
                                path: (0, Gk.x)(bb.slug, sb),
                                label: Wb,
                                markdown: `# ${bb.title}, part ${sb+1} of ${kb}\n\n${Ub}\n\n${this.resolveLinks(bb,ab)}\n`
                              }
                            }
                            llmsTxt(bb) {
                              const cb = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${rk(Gk.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const sb of Kb) {
                                cb.push("", `## ${sb.title}`, "");
                                for (const bb of sb.pageIds) {
                                  const sb = this.getPage(bb),
                                    {
                                      page: kb,
                                      parts: Wb
                                    } = sb,
                                    ab = `About ${rk(sb.markdown.length)} tokens${Wb.length>0?`, in ${Wb.length} parts:`:"."}`;
                                  cb.push(`- [${kb.title}](${this.url(sb.path)}): ${kb.summary} ${ab}`), Wb.forEach(((bb, sb) => {
                                    cb.push(`  - [Part ${sb+1}${bb.label?`: ${bb.label}`:""}](${this.url(bb.path)})`)
                                  }))
                                }
                              }
                              return cb.push("", "## Optional", "", `- [Every page in one file](${this.url(Gk.h)}): About ${rk(bb.length)} tokens, for a model with a large context window.`, ""), cb.join("\n")
                            }
                            llmsFullTxt() {
                              return Kb.flatMap((bb => bb.pageIds.map((bb => this.getPage(bb).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const bb = this.llmsFullTxt(),
                                cb = this.llmsTxt(bb),
                                sb = new Map([
                                  [Gk.n, cb],
                                  [Gk.j, cb],
                                  [Gk.h, bb]
                                ]);
                              for (const kb of this.pages) {
                                sb.set(kb.path, kb.markdown);
                                for (const bb of kb.parts) sb.set(bb.path, bb.markdown)
                              }
                              return sb
                            }
                          }

                          function rk(bb) {
                            return `${Math.max(1,Math.round(bb/4e3))}K`
                          }
                          let Sk = null;

                          function Rk() {
                            return Sk ??= new wk(Gb, Kk.e), Sk
                          }
                          const vk = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Fk(bb) {
                            return Rk().getPage(bb.id).parts.length > 0 ? `Read ${Gk.m}, then the parts of the Bloxd Code API's ${bb.title} page it lists, so I can ask questions about it.` : `Read ${Kk.e}${(0,Gk.v)(bb.slug)} so I can ask questions about it. ${Gk.m} lists every page of the Bloxd Code API docs.`
                          }

                          function xk(bb) {
                            let {
                              page: cb
                            } = bb;
                            const [sb, kb] = Cb();
                            return (0, mb.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, mb.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  kb(Rk().getPage(cb.id).markdown)
                                },
                                children: [(0, mb.jsx)(Qb, {
                                  name: !1 === (null === sb || void 0 === sb ? void 0 : sb.failed) ? "check" : "copy"
                                }), (0, mb.jsx)("span", {
                                  children: sb ? sb.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), vk.map((bb => (0, mb.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${bb.url}${encodeURIComponent(Fk(cb))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, mb.jsx)(Qb, {
                                  name: "external-link"
                                }), (0, mb.jsxs)("span", {
                                  children: ["Open in ", bb.name]
                                })]
                              }, bb.name)))]
                            })
                          }

                          function jk(bb) {
                            return `#${[0,1,2].map((cb=>Math.round(Math.min(255,Math.max(0,bb[cb]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function pk(bb) {
                            return [parseInt(bb.slice(1, 3), 16), parseInt(bb.slice(3, 5), 16), parseInt(bb.slice(5, 7), 16)]
                          }

                          function bW(bb) {
                            let {
                              label: cb,
                              min: sb,
                              max: kb,
                              step: Wb,
                              low: ab,
                              high: Tb,
                              onChange: Ub
                            } = bb;
                            return (0, mb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mb.jsx)("span", {
                                  children: cb
                                }), (0, mb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: ab === Tb ? ab : `${ab}\u2013${Tb}`
                                })]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, mb.jsx)("input", {
                                  type: "range",
                                  min: sb,
                                  max: kb,
                                  step: Wb,
                                  value: Math.min(kb, ab),
                                  "aria-label": `Minimum ${cb.toLowerCase()}`,
                                  onChange: bb => {
                                    const cb = Number(bb.target.value);
                                    Ub(cb, Math.max(cb, Tb))
                                  }
                                }), (0, mb.jsx)("input", {
                                  type: "range",
                                  min: sb,
                                  max: kb,
                                  step: Wb,
                                  value: Math.min(kb, Tb),
                                  "aria-label": `Maximum ${cb.toLowerCase()}`,
                                  onChange: bb => {
                                    const cb = Number(bb.target.value);
                                    Ub(Math.min(cb, ab), cb)
                                  }
                                })]
                              })]
                            })
                          }

                          function cW(bb) {
                            let {
                              label: cb,
                              min: sb,
                              max: kb,
                              step: Wb,
                              value: ab,
                              onChange: Tb,
                              format: Ub = String
                            } = bb;
                            return (0, mb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mb.jsx)("span", {
                                  children: cb
                                }), (0, mb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Ub(ab)
                                })]
                              }), (0, mb.jsx)("input", {
                                type: "range",
                                min: sb,
                                max: kb,
                                step: Wb,
                                value: Math.min(kb, Math.max(sb, ab)),
                                "aria-label": cb,
                                onChange: bb => {
                                  Tb(Number(bb.target.value))
                                }
                              })]
                            })
                          }

                          function sW(bb) {
                            let {
                              opts: cb,
                              onChange: sb
                            } = bb;
                            const kb = cb.colorGradients;
                            if (!rs(kb)) return (0, mb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mb.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, mb.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, mb.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: kb.map(((bb, cb) => (0, mb.jsx)("input", {
                                  type: "color",
                                  value: jk(bb.color),
                                  "aria-label": `Colour ${cb+1}`,
                                  onChange: bb => {
                                    const Wb = [...kb];
                                    Wb[cb] = {
                                      color: pk(bb.target.value)
                                    }, sb(Wb)
                                  }
                                }, cb)))
                              })]
                            });
                            const Wb = (bb, cb) => {
                              const Wb = [...kb];
                              Wb[bb] = cb, sb(Wb)
                            };
                            return (0, mb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mb.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, mb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), kb.map(((bb, cb) => {
                                var sb;
                                const kb = null !== (sb = bb.maxColor) && void 0 !== sb ? sb : bb.minColor;
                                return (0, mb.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, mb.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * bb.timeFraction), "%"]
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${jk(bb.minColor)}, ${jk(kb)})`
                                    }
                                  }), (0, mb.jsx)("input", {
                                    type: "color",
                                    value: jk(bb.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: sb => {
                                      Wb(cb, {
                                        ...bb,
                                        minColor: [...pk(sb.target.value), bb.minColor[3]]
                                      })
                                    }
                                  }), (0, mb.jsx)("input", {
                                    type: "color",
                                    value: jk(kb),
                                    "aria-label": `Maximum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: sb => {
                                      Wb(cb, {
                                        ...bb,
                                        maxColor: [...pk(sb.target.value), kb[3]]
                                      })
                                    }
                                  })]
                                }, cb)
                              }))]
                            })
                          }
                          const kW = [-.5, -.5, -.5],
                            WW = [.5, .5, .5],
                            aW = [0, 1, 2, 3, 4, 5, 6, 7].map((bb => [1 & bb ? WW[0] : kW[0], 2 & bb ? WW[1] : kW[1], 4 & bb ? WW[2] : kW[2]]));class TW {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(bb, cb, sb, kb) {
                              const Wb = Math.round(31 * cb),
                                ab = Math.round(31 * sb),
                                Tb = Math.round(31 * kb),
                                Ub = `${Wb}|${ab}|${Tb}`;
                              let Ib = this.tints.get(bb);
                              (!Ib || Ib.size > 2e3) && (Ib = new Map, this.tints.set(bb, Ib));
                              let Hb = Ib.get(Ub);
                              if (Hb) return Hb;
                              Hb = document.createElement("canvas"), Hb.width = bb.naturalWidth || 16, Hb.height = bb.naturalHeight || 16;
                              const fb = Hb.getContext("2d");
                              return fb ? (fb.imageSmoothingEnabled = !1, fb.drawImage(bb, 0, 0, Hb.width, Hb.height), fb.globalCompositeOperation = "multiply", fb.fillStyle = `rgb(${Wb/31*255}, ${ab/31*255}, ${Tb/31*255})`, fb.fillRect(0, 0, Hb.width, Hb.height), fb.globalCompositeOperation = "destination-in", fb.drawImage(bb, 0, 0, Hb.width, Hb.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Ib.set(Ub, Hb), Hb
                            }
                          }

                          function UW(bb) {
                            let {
                              opts: cb,
                              textureUrl: sb,
                              burst: Wb,
                              paused: ab
                            } = bb;
                            const Tb = (0, kb.useRef)(null),
                              Ub = (0, kb.useRef)(cb);
                            Ub.current = cb;
                            const Ib = (0, kb.useRef)(ab);
                            Ib.current = ab;
                            const Hb = (0, kb.useRef)(null),
                              fb = (0, kb.useRef)(null),
                              Mb = (0, kb.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(bb) {
                                let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const sb = [-.5, -.5, -.5],
                                  kb = [.5, .5, .5];
                                let Wb = .5;
                                for (let ab = 0; ab < 40; ab++) {
                                  const ab = Ss(bb, sb, kb, cb),
                                    Tb = Math.max(ab.life / 30, .001);
                                  for (; Fs(ab, bb.gravity, Tb);) Wb = Math.max(Wb, Math.hypot(ab.pos[0], ab.pos[1], ab.pos[2]) + ab.size / 2)
                                }
                                return Wb
                              }(cb)))), [cb]),
                              Xb = (0, kb.useRef)(Mb);
                            return Xb.current = Mb, (0, kb.useEffect)((() => {
                              if (Hb.current = null, !sb) return;
                              const bb = new Image;
                              let cb = !1;
                              return bb.onload = () => {
                                cb || (Hb.current = bb)
                              }, bb.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${sb}`)
                              }, bb.src = sb, () => {
                                cb = !0
                              }
                            }), [sb]), (0, kb.useEffect)((() => {
                              var bb;
                              null === (bb = fb.current) || void 0 === bb || bb.call(fb)
                            }), [cb, Wb]), (0, kb.useEffect)((() => {
                              const bb = Tb.current,
                                cb = null === bb || void 0 === bb ? void 0 : bb.getContext("2d");
                              if (!bb || !cb) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const sb = new TW;
                              let kb = [],
                                Wb = 0,
                                ab = -.7,
                                Mb = Xb.current,
                                nb = performance.now(),
                                mb = 0,
                                lb = !0,
                                Qb = null;
                              const eb = () => {
                                const bb = Ub.current,
                                  cb = Math.min(400, Math.max(0, Math.ceil(bb.manualEmitCount)));
                                kb = [];
                                for (let sb = 0; sb < cb; sb++) kb.push(Ss(bb, kW, WW, Math.random));
                                Wb = 0
                              };
                              fb.current = eb, eb();
                              const Cb = Tb => {
                                mb = requestAnimationFrame(Cb);
                                const fb = Math.min(.05, (Tb - nb) / 1e3);
                                if (nb = Tb, !lb) return;
                                const Nb = window.devicePixelRatio || 1,
                                  Vb = Math.round(bb.clientWidth * Nb),
                                  Lb = Math.round(bb.clientHeight * Nb);
                                if (0 === Vb || 0 === Lb) return;
                                bb.width === Vb && bb.height === Lb || (bb.width = Vb, bb.height = Lb);
                                const ub = Ub.current;
                                null === Qb && (ab += .18 * fb), Mb += (Xb.current - Mb) * Math.min(1, 4 * fb);
                                const Yb = .6 * fb;
                                kb = kb.filter((bb => Fs(bb, ub.gravity, Yb))), 0 !== kb.length || Ib.current || (Wb += fb, Wb > .6 && eb());
                                const hb = function(bb, cb, sb, kb) {
                                  const Wb = 3.2 * kb,
                                    ab = .44 * Math.min(bb, cb) * Wb / kb,
                                    Tb = Math.cos(sb),
                                    Ub = Math.sin(sb),
                                    Ib = Math.cos(.42),
                                    Hb = Math.sin(.42);
                                  return (sb, kb, fb) => {
                                    const Mb = sb * Ub + fb * Tb,
                                      Xb = Wb - (kb * Hb + Mb * Ib);
                                    if (Xb < .05) return null;
                                    const nb = ab / Xb;
                                    return {
                                      x: bb / 2 + (sb * Tb - fb * Ub) * nb,
                                      y: cb / 2 - (kb * Ib - Mb * Hb) * nb,
                                      scale: nb,
                                      depth: Xb
                                    }
                                  }
                                }(Vb, Lb, ab, Mb);
                                ! function(bb, cb, sb, kb, Wb) {
                                  const ab = bb.createLinearGradient(0, 0, 0, sb);
                                  ab.addColorStop(0, "#23262d"), ab.addColorStop(1, "#16181c"), bb.globalCompositeOperation = "source-over", bb.globalAlpha = 1, bb.fillStyle = ab, bb.fillRect(0, 0, cb, sb);
                                  const Tb = (cb, sb) => {
                                      const Wb = kb(cb[0], cb[1], cb[2]),
                                        ab = kb(sb[0], sb[1], sb[2]);
                                      Wb && ab && (bb.beginPath(), bb.moveTo(Wb.x, Wb.y), bb.lineTo(ab.x, ab.y), bb.stroke())
                                    },
                                    Ub = Math.ceil(Wb) + 1,
                                    Ib = kW[1];
                                  bb.lineWidth = 1, bb.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Hb = -Ub; Hb <= Ub; Hb++) Tb([Hb + .5, Ib, .5 - Ub], [Hb + .5, Ib, Ub + .5]), Tb([.5 - Ub, Ib, Hb + .5], [Ub + .5, Ib, Hb + .5]);
                                  bb.strokeStyle = "rgba(255, 255, 255, 0.28)", bb.setLineDash([4, 4]);
                                  for (const Hb of aW)
                                    for (const bb of aW) {
                                      const cb = [0, 1, 2].filter((cb => Hb[cb] !== bb[cb]));
                                      1 === cb.length && Hb[cb[0]] < bb[cb[0]] && Tb(Hb, bb)
                                    }
                                  bb.setLineDash([])
                                }(cb, Vb, Lb, hb, Mb);
                                const Jb = Hb.current,
                                  gb = kb.map((bb => ({
                                    particle: bb,
                                    at: hb(bb.pos[0], bb.pos[1], bb.pos[2])
                                  }))).filter((bb => null !== bb.at)).sort(((bb, cb) => cb.at.depth - bb.at.depth));
                                cb.imageSmoothingEnabled = !1;
                                for (const bb of function(bb) {
                                    switch (bb) {
                                      case zs.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case zs.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case zs.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case zs.f.MultiplyAdd:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }, {
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      default:
                                        return [{
                                          operation: "source-over",
                                          usesAlpha: !0
                                        }]
                                    }
                                  }(ub.blendMode)) {
                                  cb.globalCompositeOperation = bb.operation;
                                  for (const {
                                      particle: kb,
                                      at: Wb
                                    }
                                    of gb) {
                                    const [ab, Tb, Ub, Ib] = vs(kb), Hb = Math.max(1, kb.size * Wb.scale);
                                    cb.globalAlpha = bb.usesAlpha ? Math.min(1, Math.max(0, Ib)) : 1, Jb ? cb.drawImage(sb.get(Jb, ab, Tb, Ub), Wb.x - Hb / 2, Wb.y - Hb / 2, Hb, Hb) : (cb.fillStyle = `rgb(${255*ab}, ${255*Tb}, ${255*Ub})`, cb.fillRect(Wb.x - Hb / 2, Wb.y - Hb / 2, Hb, Hb))
                                  }
                                }
                                cb.globalCompositeOperation = "source-over", cb.globalAlpha = 1
                              };
                              mb = requestAnimationFrame(Cb);
                              const Nb = new IntersectionObserver((bb => {
                                let [cb] = bb;
                                lb = cb.isIntersecting
                              }));
                              Nb.observe(bb);
                              const Vb = cb => {
                                  Qb = cb.clientX, bb.setPointerCapture(cb.pointerId)
                                },
                                Lb = bb => {
                                  null !== Qb && (ab += .01 * (bb.clientX - Qb), Qb = bb.clientX)
                                },
                                ub = () => {
                                  Qb = null
                                };
                              return bb.addEventListener("pointerdown", Vb), bb.addEventListener("pointermove", Lb), bb.addEventListener("pointerup", ub), bb.addEventListener("pointercancel", ub), () => {
                                cancelAnimationFrame(mb), Nb.disconnect(), fb.current = null, bb.removeEventListener("pointerdown", Vb), bb.removeEventListener("pointermove", Lb), bb.removeEventListener("pointerup", ub), bb.removeEventListener("pointercancel", ub)
                              }
                            }), []), (0, mb.jsx)("canvas", {
                              ref: Tb,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${cb.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const IW = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            HW = [{
                              mode: zs.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: zs.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: zs.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: zs.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: zs.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            fW = (0, kb.forwardRef)((function(bb, cb) {
                              var sb, Wb;
                              let {
                                textures: Tb
                              } = bb;
                              const Ub = Lk(),
                                Ib = (0, kb.useRef)(null),
                                [Hb, fb] = (0, kb.useState)(ds),
                                [Mb, Xb] = (0, kb.useState)("example"),
                                [nb, lb] = (0, kb.useState)(0),
                                [eb, Cb] = (0, kb.useState)(!1),
                                Vb = bb => {
                                  const cb = "example" === bb ? ds : qs(bb);
                                  cb && (fb(cb), Xb(bb))
                                };
                              (0, kb.useImperativeHandle)(cb, (() => ({
                                preview: bb => {
                                  var cb;
                                  Vb(bb), null === (cb = Ib.current) || void 0 === cb || cb.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Lb = bb => {
                                  fb({
                                    ...Hb,
                                    ...bb
                                  }), Xb(null)
                                },
                                ub = function(bb, cb) {
                                  if (null !== cb) return `${ck}    presetId: "${cb}",\n${sk}\n})`;
                                  const sb = bb.velocityGradients.map((bb => `        {\n            timeFraction: ${xs(bb.timeFraction)},\n            factor: ${xs(bb.factor)},\n            factor2: ${xs(bb.factor2)},\n        },`)),
                                    kb = [`    dir1: ${ps(bb.dir1)},`, `    dir2: ${ps(bb.dir2)},`, sk, `    texture: "${bb.texture}",`, `    minLifeTime: ${xs(bb.minLifeTime)},`, `    maxLifeTime: ${xs(bb.maxLifeTime)},`, `    minEmitPower: ${xs(bb.minEmitPower)},`, `    maxEmitPower: ${xs(bb.maxEmitPower)},`, `    minSize: ${xs(bb.minSize)},`, `    maxSize: ${xs(bb.maxSize)},`, `    manualEmitCount: ${xs(bb.manualEmitCount)},`, `    gravity: ${ps(bb.gravity)},`, `    colorGradients: ${bk(bb.colorGradients,"    ")},`, `    velocityGradients: ${sb.length>0?`[\n${sb.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${xs(bb.blendMode)},`];
                                  return void 0 !== bb.hideDist && kb.push(`    hideDist: ${xs(bb.hideDist)},`), `${ck}${kb.join("\n")}\n})`
                                }(Hb, null === Mb || "example" === Mb ? null : Mb),
                                hb = Tb.includes(Hb.texture) ? Tb : [...Tb, Hb.texture];
                              return (0, mb.jsxs)("section", {
                                ref: Ib,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, mb.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, mb.jsxs)("div", {
                                    children: [(0, mb.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, mb.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, mb.jsx)(Nb, {
                                    text: ub,
                                    label: "Copy code"
                                  })]
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, mb.jsx)("button", {
                                    type: "button",
                                    className: ab()("DocsVariantChip", {
                                      Active: "example" === Mb
                                    }),
                                    onClick: () => {
                                      Vb("example")
                                    },
                                    children: "Example"
                                  }), IW.filter((bb => null !== qs(bb))).map((bb => (0, mb.jsx)("button", {
                                    type: "button",
                                    className: ab()("DocsVariantChip", {
                                      Active: Mb === bb
                                    }),
                                    onClick: () => {
                                      Vb(bb)
                                    },
                                    children: bb
                                  }, bb))), (0, mb.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Mb && void 0 !== Mb ? Mb : "custom",
                                    "aria-label": "Preset",
                                    onChange: bb => {
                                      Vb(bb.target.value)
                                    },
                                    children: [(0, mb.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Mb && (0, mb.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Zs.e.map((bb => (0, mb.jsx)("option", {
                                      value: bb,
                                      children: bb
                                    }, bb)))]
                                  })]
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, mb.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, mb.jsx)(UW, {
                                      opts: Hb,
                                      textureUrl: null !== (sb = null === Ub || void 0 === Ub ? void 0 : Ub.getParticleTextureUrl(Hb.texture)) && void 0 !== sb ? sb : null,
                                      burst: nb,
                                      paused: eb
                                    }), (0, mb.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, mb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          lb(nb + 1)
                                        },
                                        children: [(0, mb.jsx)(Qb, {
                                          name: "replay"
                                        }), (0, mb.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, mb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": eb,
                                        onClick: () => {
                                          Cb(!eb)
                                        },
                                        children: [(0, mb.jsx)(Qb, {
                                          name: eb ? "play" : "pause"
                                        }), (0, mb.jsx)("span", {
                                          children: eb ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, mb.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, mb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, mb.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, mb.jsx)("span", {
                                          children: "Texture"
                                        }), (0, mb.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Hb.texture
                                        })]
                                      }), (0, mb.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: hb.map((bb => {
                                          var cb;
                                          const sb = null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.getParticleTextureUrl(bb)) && void 0 !== cb ? cb : null;
                                          return (0, mb.jsx)("button", {
                                            type: "button",
                                            className: ab()("DocsParticleTexture", {
                                              Active: Hb.texture === bb
                                            }),
                                            title: bb,
                                            "aria-label": bb,
                                            "aria-pressed": Hb.texture === bb,
                                            onClick: () => {
                                              Lb({
                                                texture: bb
                                              })
                                            },
                                            children: sb ? (0, mb.jsx)("img", {
                                              src: sb,
                                              alt: ""
                                            }) : (0, mb.jsx)(Qb, {
                                              name: "image"
                                            })
                                          }, bb)
                                        }))
                                      })]
                                    }), (0, mb.jsx)(cW, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Hb.manualEmitCount,
                                      onChange: bb => {
                                        Lb({
                                          manualEmitCount: bb
                                        })
                                      }
                                    }), (0, mb.jsx)(bW, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Hb.minLifeTime,
                                      high: Hb.maxLifeTime,
                                      onChange: (bb, cb) => {
                                        Lb({
                                          minLifeTime: bb,
                                          maxLifeTime: cb
                                        })
                                      }
                                    }), (0, mb.jsx)(bW, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Hb.minEmitPower,
                                      high: Hb.maxEmitPower,
                                      onChange: (bb, cb) => {
                                        Lb({
                                          minEmitPower: bb,
                                          maxEmitPower: cb
                                        })
                                      }
                                    }), (0, mb.jsx)(bW, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Hb.minSize,
                                      high: Hb.maxSize,
                                      onChange: (bb, cb) => {
                                        Lb({
                                          minSize: bb,
                                          maxSize: cb
                                        })
                                      }
                                    }), (0, mb.jsx)(cW, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Wb = Hb.gravity[1]) && void 0 !== Wb ? Wb : 0,
                                      onChange: bb => {
                                        var cb, sb;
                                        Lb({
                                          gravity: [null !== (cb = Hb.gravity[0]) && void 0 !== cb ? cb : 0, bb, null !== (sb = Hb.gravity[2]) && void 0 !== sb ? sb : 0]
                                        })
                                      }
                                    }), (0, mb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, mb.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, mb.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, mb.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Hb.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: bb => {
                                          Lb({
                                            blendMode: Number(bb.target.value)
                                          })
                                        },
                                        children: HW.map((bb => {
                                          let {
                                            mode: cb,
                                            label: sb
                                          } = bb;
                                          return (0, mb.jsx)("option", {
                                            value: cb,
                                            children: sb
                                          }, cb)
                                        }))
                                      })]
                                    }), (0, mb.jsx)(sW, {
                                      opts: Hb,
                                      onChange: bb => {
                                        Lb({
                                          colorGradients: bb
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, mb.jsx)(Yb, {
                                  code: ub,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var MW = sb(4210),
                            XW = sb(1839);

                          function nW(bb, cb) {
                            return bb ? MW.d.includes(cb) ? bb.getIngameIconUrl(cb) : bb.getItemIconUrl(cb) : null
                          }

                          function mW(bb) {
                            var cb, sb, kb;
                            let {
                              part: Wb,
                              assets: Tb
                            } = bb;
                            const Ub = nW(Tb, Wb.icon),
                              Ib = null !== (cb = null === (sb = Wb.style) || void 0 === sb ? void 0 : sb.fontSize) && void 0 !== cb ? cb : "1.8em",
                              Hb = (0, Kc.ac)(Wb.style);
                            return (0, mb.jsxs)("span", {
                              className: ab()("DocsBloxdTextIcon", {
                                Missing: !Ub
                              }),
                              style: {
                                width: Ib,
                                height: Ib,
                                opacity: null === (kb = Wb.style) || void 0 === kb ? void 0 : kb.opacity
                              },
                              title: Ub ? void 0 : `No Bloxd icon, item or block is called "${Wb.icon}"`,
                              children: [Ub && Hb && (0, mb.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Hb,
                                  maskImage: `url("${Ub}")`,
                                  WebkitMaskImage: `url("${Ub}")`
                                }
                              }), Ub ? (0, mb.jsx)("img", {
                                src: Ub,
                                alt: "",
                                className: ab()({
                                  Tinted: Hb
                                })
                              }) : (0, mb.jsx)(Qb, {
                                name: "image"
                              })]
                            })
                          }

                          function lW(bb) {
                            let {
                              parts: cb,
                              className: sb
                            } = bb;
                            const kb = Lk(),
                              Wb = [];
                            let Tb = [];
                            const Ub = bb => {
                              Tb.length > 0 && (Wb.push((0, mb.jsx)(XW.d, {
                                text: Tb
                              }, `run-${bb}`)), Tb = [])
                            };
                            return cb.forEach(((bb, cb) => {
                              "icon" !== Ac(bb) || zc(bb.icon) ? Tb.push(bb) : (Ub(cb), Wb.push((0, mb.jsx)(mW, {
                                part: bb,
                                assets: kb
                              }, `icon-${cb}`)))
                            })), Ub(cb.length), (0, mb.jsx)("div", {
                              className: ab()("DocsStyledTextPreview", sb),
                              children: Wb
                            })
                          }
                          const QW = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let eW = null;

                          function CW(bb) {
                            if (eW ??= document.createElement("canvas").getContext("2d"), !eW) return "#000000";
                            eW.fillStyle = "#000000", eW.fillStyle = bb;
                            const cb = eW.fillStyle;
                            return cb.startsWith("#") ? cb : "#000000"
                          }

                          function NW(bb) {
                            let {
                              value: cb,
                              label: sb,
                              onChange: kb
                            } = bb;
                            return (0, mb.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, mb.jsx)("input", {
                                type: "color",
                                value: CW(cb),
                                "aria-label": `${sb} picker`,
                                onChange: bb => {
                                  kb(bb.target.value)
                                }
                              }), (0, mb.jsx)("input", {
                                type: "text",
                                value: cb,
                                placeholder: "#ffb914 or gold",
                                "aria-label": sb,
                                spellCheck: !1,
                                onChange: bb => {
                                  kb(bb.target.value)
                                }
                              })]
                            })
                          }

                          function VW(bb) {
                            let {
                              value: cb,
                              fontAwesomeIcons: sb,
                              onChange: Wb
                            } = bb;
                            const Tb = Lk(),
                              [Ub, Ib] = (0, kb.useState)(zc(cb) ? "fontAwesome" : "bloxd"),
                              [Hb, fb] = (0, kb.useState)(""),
                              Mb = Hb.trim().toLowerCase(),
                              Xb = "bloxd" === Ub ? MW.d : sb,
                              nb = Mb ? Xb.filter((bb => bb.toLowerCase().includes(Mb))) : Xb;
                            return (0, mb.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, mb.jsx)("input", {
                                type: "text",
                                value: cb,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: bb => {
                                  Wb(bb.target.value)
                                }
                              }), (0, mb.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, mb.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((bb => (0, mb.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Ub === bb,
                                    className: ab()("DocsVariantChip", {
                                      Active: Ub === bb
                                    }),
                                    onClick: () => {
                                      Ib(bb)
                                    },
                                    children: "bloxd" === bb ? `Bloxd icons (${MW.d.length})` : `Font Awesome (${sb.length})`
                                  }, bb))), (0, mb.jsx)("input", {
                                    type: "search",
                                    value: Hb,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: bb => {
                                      fb(bb.target.value)
                                    }
                                  })
                                ]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [nb.map((bb => {
                                  const sb = "bloxd" === Ub ? nW(Tb, bb) : null;
                                  return (0, mb.jsx)("button", {
                                    type: "button",
                                    title: bb,
                                    "aria-label": bb,
                                    "aria-pressed": bb === cb,
                                    className: ab()("DocsIconPickerOption", {
                                      Active: bb === cb
                                    }),
                                    onClick: () => {
                                      Wb(bb)
                                    },
                                    children: "fontAwesome" === Ub ? (0, mb.jsx)(Vs.b, {
                                      name: bb
                                    }) : sb ? (0, mb.jsx)("img", {
                                      src: sb,
                                      alt: ""
                                    }) : (0, mb.jsx)(Qb, {
                                      name: "image"
                                    })
                                  }, bb)
                                })), 0 === nb.length && (0, mb.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Hb, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function LW(bb) {
                            let {
                              property: cb,
                              value: sb,
                              fontAwesomeIcons: kb,
                              onChange: Wb
                            } = bb;
                            const {
                              field: ab,
                              label: Tb
                            } = cb, Ub = bb => "" !== bb || cb.isRequired ? bb : void 0;
                            switch (ab.kind) {
                              case "text":
                                return ab.multiline ? (0, mb.jsx)("textarea", {
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  rows: 2,
                                  "aria-label": Tb,
                                  onChange: bb => {
                                    Wb(bb.target.value)
                                  }
                                }) : (0, mb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  "aria-label": Tb,
                                  onChange: bb => {
                                    Wb(Ub(bb.target.value))
                                  }
                                });
                              case "size":
                                return (0, mb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  placeholder: cb.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Tb,
                                  spellCheck: !1,
                                  onChange: bb => {
                                    Wb(Ub(bb.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, mb.jsx)(NW, {
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  label: Tb,
                                  onChange: bb => {
                                    Wb(Ub(bb))
                                  }
                                });
                              case "colours": {
                                const bb = Array.isArray(sb) ? sb : [],
                                  cb = bb => {
                                    Wb(bb.length > 0 ? bb : void 0)
                                  };
                                return (0, mb.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [bb.map(((sb, kb) => (0, mb.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, mb.jsx)(NW, {
                                      value: sb,
                                      label: `${Tb} ${kb+1}`,
                                      onChange: sb => {
                                        cb(bb.map(((bb, cb) => cb === kb ? sb : bb)))
                                      }
                                    }), (0, mb.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${kb+1}`,
                                      onClick: () => {
                                        cb(bb.filter(((bb, cb) => cb !== kb)))
                                      },
                                      children: (0, mb.jsx)(Qb, {
                                        name: "cross"
                                      })
                                    })]
                                  }, kb))), (0, mb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var sb;
                                      cb([...bb, null !== (sb = bb.at(-1)) && void 0 !== sb ? sb : "#ffffff"])
                                    },
                                    children: [(0, mb.jsx)(Qb, {
                                      name: "plus"
                                    }), 0 === bb.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Ib;
                                const bb = "number" === typeof sb ? sb : Number(null !== (Ib = cb.defaultText) && void 0 !== Ib ? Ib : 0);
                                return (0, mb.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, mb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bb,
                                    "aria-label": Tb,
                                    onChange: bb => {
                                      Wb(Number(bb.target.value))
                                    }
                                  }), (0, mb.jsx)("output", {
                                    children: bb.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, mb.jsxs)("select", {
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  "aria-label": Tb,
                                  onChange: bb => {
                                    Wb(Ub(bb.target.value))
                                  },
                                  children: [!cb.isRequired && (0, mb.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", cb.defaultText, ")"]
                                  }), ab.options.map((bb => (0, mb.jsx)("option", {
                                    value: bb,
                                    children: bb
                                  }, bb)))]
                                });
                              case "icon":
                                return (0, mb.jsx)(VW, {
                                  value: String(null !== sb && void 0 !== sb ? sb : ""),
                                  fontAwesomeIcons: kb,
                                  onChange: Wb
                                })
                            }
                          }

                          function uW(bb) {
                            let cb;
                            try {
                              cb = JSON.parse(bb)
                            } catch (sb) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${sb.message}`
                              }
                            }
                            return ss(cb) ? {
                              part: cb,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function YW(bb) {
                            let {
                              parts: cb,
                              index: sb,
                              fontAwesomeIcons: Wb,
                              onChange: ab,
                              wL: Tb,
                              onClose: Ub
                            } = bb;
                            const Ib = (0, kb.useContext)(mc),
                              fb = (0, kb.useRef)(null),
                              Mb = cb[sb],
                              Xb = Ac(Mb),
                              [nb, lb] = (0, kb.useState)((() => JSON.stringify(Mb, null, 2))),
                              eb = (0, kb.useMemo)((() => "other" === Xb ? uW(nb).error : null), [Xb, nb]);
                            (0, kb.useEffect)((() => {
                              var bb;
                              null === (bb = fb.current) || void 0 === bb || bb.focus()
                            }), []);
                            const Cb = (0, mb.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && Ub()
                              },
                              children: (0, mb.jsxs)("div", {
                                ref: fb,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${sb+1}: ${qc[Xb]}`,
                                tabIndex: -1,
                                onKeyDown: bb => {
                                  "Escape" === bb.key ? (bb.stopPropagation(), Ub()) : "Tab" === bb.key && fb.current && function(bb, cb) {
                                    const sb = Array.from(bb.querySelectorAll(tc)),
                                      kb = sb[0],
                                      Wb = sb.at(-1);
                                    if (!kb || !Wb) return;
                                    const ab = document.activeElement;
                                    !cb.shiftKey || ab !== kb && ab !== bb ? cb.shiftKey || ab !== Wb || (cb.preventDefault(), kb.focus()) : (cb.preventDefault(), Wb.focus())
                                  }(fb.current, bb)
                                },
                                children: [(0, mb.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, mb.jsxs)("div", {
                                    children: [(0, mb.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", sb + 1]
                                    }), (0, mb.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: qc[Xb]
                                    })]
                                  }), (0, mb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Ub,
                                    children: (0, mb.jsx)(Qb, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, mb.jsx)(lW, {
                                  parts: cb,
                                  className: "DocsTextDialogPreview"
                                }), (0, mb.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Xb ? (0, mb.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, mb.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, mb.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: nb,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: bb => {
                                        lb(bb.target.value);
                                        const cb = uW(bb.target.value);
                                        null !== cb.part && ab(cb.part)
                                      }
                                    }), eb && (0, mb.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: eb
                                    })]
                                  }) : rc[Xb].map((bb => {
                                    const cb = Sc(Mb, bb.path),
                                      sb = bb.isRequired ? JSON.stringify(vc(Mb, bb.path)) === JSON.stringify(Mb) : void 0 === cb;
                                    return (0, mb.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, mb.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, mb.jsx)("span", {
                                          children: bb.label
                                        }), (0, mb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: sb,
                                          "aria-label": `Reset ${bb.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            ab(vc(Mb, bb.path))
                                          },
                                          children: [(0, mb.jsx)(Qb, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, mb.jsx)(LW, {
                                        property: bb,
                                        value: cb,
                                        fontAwesomeIcons: Wb,
                                        onChange: cb => {
                                          ab(Rc(Mb, bb.path, cb))
                                        }
                                      }), !bb.isRequired && (0, mb.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", bb.defaultText]
                                      })]
                                    }, bb.path.join("."))
                                  }))
                                }), (0, mb.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, mb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Tb,
                                    children: [(0, mb.jsx)(Qb, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, mb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Ub,
                                    children: "Done"
                                  })]
                                }), (0, mb.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: QW.map((bb => (0, mb.jsx)("option", {
                                    value: bb
                                  }, bb)))
                                })]
                              })
                            });
                            return Ib ? (0, Hb.createPortal)(Cb, Ib) : Cb
                          }
                          const hW = [{
                              label: "Icon and text",
                              parts: [{
                                icon: "Pixelated Heart"
                              }, " You gained a life!"]
                            }, {
                              label: "Coloured words",
                              parts: ["Welcome to ", {
                                str: "Sky Castle",
                                style: {
                                  color: "#ffb914",
                                  fontWeight: "bold"
                                }
                              }, ", adventurer!"]
                            }, {
                              label: "Achievement",
                              parts: [{
                                icon: "fa-solid fa-trophy",
                                style: {
                                  color: "gold"
                                }
                              }, {
                                str: " Achievement unlocked: ",
                                style: {
                                  opacity: .8
                                }
                              }, {
                                str: "Master Builder",
                                style: {
                                  color: "#4f94f1",
                                  fontStyle: "italic"
                                }
                              }]
                            }, {
                              label: "Loading bar",
                              parts: ["Charging ", {
                                type: "ProgressBar",
                                progress: .65,
                                colours: ["#4f94f1", "#9be15d"]
                              }, " Press ", {
                                type: "StyledKeyBinding",
                                action: "jump"
                              }]
                            }],
                            JW = Object.keys(dc);

                          function gW(bb) {
                            let {
                              fontAwesomeIcons: cb
                            } = bb;
                            const [sb, Wb] = (0, kb.useState)(hW[0].parts), [Tb, Ub] = (0, kb.useState)((() => pc(hW[0].parts))), [Ib, Hb] = (0, kb.useState)(null), [fb, Mb] = (0, kb.useState)(!1), [Xb, nb] = (0, kb.useState)(null), [lb, eb] = (0, kb.useState)(!1), [Cb, Nb] = (0, kb.useState)(null), Vb = (0, kb.useRef)(null), Lb = pc(sb);
                            (0, kb.useLayoutEffect)((() => {
                              var bb;
                              if (!Cb) return;
                              const cb = bb => {
                                  var cb;
                                  return null === (cb = Vb.current) || void 0 === cb ? void 0 : cb.querySelector(`[data-focus-key="${bb}"]`)
                                },
                                sb = cb(Cb.key);
                              null === (bb = sb && !sb.disabled ? sb : cb(Cb.fallback)) || void 0 === bb || bb.focus(), Nb(null)
                            }), [Cb]);
                            const ub = bb => {
                                Wb(bb), Ub(pc(bb)), Hb(null)
                              },
                              hb = bb => {
                                ub(sb.filter(((cb, sb) => sb !== bb))), Nb({
                                  key: `edit-${Math.min(bb,sb.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Jb = (bb, cb) => {
                                const kb = [...sb],
                                  [Wb] = kb.splice(bb, 1);
                                kb.splice(bb + cb, 0, Wb), ub(kb);
                                Nb({
                                  key: `${cb<0?"up":"down"}-${bb+cb}`,
                                  fallback: `edit-${bb+cb}`
                                })
                              };
                            return (0, mb.jsxs)("section", {
                              ref: Vb,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, mb.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, mb.jsxs)("div", {
                                  children: [(0, mb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, mb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, mb.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: hW.map((bb => (0, mb.jsx)("button", {
                                  type: "button",
                                  className: ab()("DocsVariantChip", {
                                    Active: Lb === pc(bb.parts)
                                  }),
                                  onClick: () => {
                                    ub(bb.parts)
                                  },
                                  children: bb.label
                                }, bb.label)))
                              }), (0, mb.jsx)(lW, {
                                parts: sb,
                                className: "DocsTextEditorPreview"
                              }), (0, mb.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, mb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, mb.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, mb.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [sb.map(((bb, cb) => {
                                      const kb = Ac(bb);
                                      return (0, mb.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, mb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${cb}`,
                                          "aria-label": `Edit part ${cb+1}, ${qc[kb]}`,
                                          onClick: () => {
                                            nb(cb)
                                          },
                                          children: [(0, mb.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: qc[kb]
                                          }), (0, mb.jsx)(lW, {
                                            parts: [bb],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== kb && (0, mb.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Fc(bb)
                                          })]
                                        }), (0, mb.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, mb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${cb+1} up`,
                                            "data-focus-key": `up-${cb}`,
                                            disabled: 0 === cb,
                                            onClick: () => {
                                              Jb(cb, -1)
                                            },
                                            children: (0, mb.jsx)(Qb, {
                                              name: "chevron-up"
                                            })
                                          }), (0, mb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${cb+1} down`,
                                            "data-focus-key": `down-${cb}`,
                                            disabled: cb === sb.length - 1,
                                            onClick: () => {
                                              Jb(cb, 1)
                                            },
                                            children: (0, mb.jsx)(Qb, {
                                              name: "chevron-down"
                                            })
                                          }), (0, mb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${cb+1}`,
                                            onClick: () => {
                                              hb(cb)
                                            },
                                            children: (0, mb.jsx)(Qb, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, cb)
                                    })), 0 === sb.length && (0, mb.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, mb.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: bb => {
                                      "Escape" === bb.key && lb && (bb.stopPropagation(), eb(!1), Nb({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, mb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": lb,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        eb(!lb)
                                      },
                                      children: [(0, mb.jsx)(Qb, {
                                        name: "plus"
                                      }), "Add a part", (0, mb.jsx)(Qb, {
                                        name: lb ? "chevron-up" : "chevron-down"
                                      })]
                                    }), lb && (0, mb.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: JW.map((bb => (0, mb.jsx)("li", {
                                        children: (0, mb.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (bb => {
                                              ub([...sb, dc[bb]]), eb(!1), nb(sb.length)
                                            })(bb)
                                          },
                                          children: qc[bb]
                                        })
                                      }, bb)))
                                    })]
                                  })]
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, mb.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, mb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": fb,
                                      onClick: () => {
                                        Mb(!fb)
                                      },
                                      children: [(0, mb.jsx)(Qb, {
                                        name: fb ? "check" : "pencil"
                                      }), fb ? "Done" : "Edit"]
                                    })]
                                  }), fb ? (0, mb.jsxs)(mb.Fragment, {
                                    children: [(0, mb.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Tb,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: bb => {
                                        Ub(bb.target.value);
                                        const cb = ks(bb.target.value);
                                        Hb(cb.error), cb.parts && Wb(cb.parts)
                                      }
                                    }), Ib && (0, mb.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Ib
                                    })]
                                  }) : (0, mb.jsx)(Yb, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Lb})`
                                  })]
                                })]
                              }), null !== Xb && Xb < sb.length && (0, mb.jsx)(YW, {
                                parts: sb,
                                index: Xb,
                                fontAwesomeIcons: cb,
                                onChange: bb => {
                                  ((bb, cb) => {
                                    ub(sb.map(((sb, kb) => kb === bb ? cb : sb)))
                                  })(Xb, bb)
                                },
                                wL: () => {
                                  hb(Xb), nb(null)
                                },
                                onClose: () => {
                                  nb(null), Nb({
                                    key: `edit-${Xb}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var BW = sb(4569),
                            tW = sb(4553),
                            yW = sb(4561),
                            PW = sb(4576);
                          const DW = 40,
                            EW = 800,
                            iW = 150,
                            OW = 8e3,
                            GW = 2e3;

                          function KW(bb, cb) {
                            return 12 * Math.log2(cb / bb)
                          }

                          function ZW(bb, cb) {
                            return Math.round(bb * 2 ** (cb / 12) * 10) / 10
                          }

                          function zW(bb) {
                            return `${bb} ms`
                          }

                          function qW(bb) {
                            return `${bb} st`
                          }
                          const dW = [{
                            key: "variationSemitones",
                            label: "Word variation",
                            max: 6
                          }, {
                            key: "declineSemitones",
                            label: "Fall over a sentence",
                            max: 12
                          }, {
                            key: "questionRiseSemitones",
                            label: "Question rise",
                            max: 12
                          }, {
                            key: "exclaimLiftSemitones",
                            label: "Exclamation lift",
                            max: 12
                          }];

                          function AW(bb) {
                            let {
                              synth: cb,
                              onChange: sb
                            } = bb;
                            const kb = (0, BW.g)(cb);
                            return (0, mb.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, mb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, mb.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, mb.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, mb.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: BW.e.map((bb => (0, mb.jsx)("button", {
                                      type: "button",
                                      className: ab()("DocsVariantChip", {
                                        Active: cb.waveform === bb
                                      }),
                                      "aria-pressed": cb.waveform === bb,
                                      onClick: () => {
                                        sb({
                                          waveform: bb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  })]
                                }), (0, mb.jsx)(cW, {
                                  label: "Pitch",
                                  min: 0,
                                  max: KW(DW, EW),
                                  step: .1,
                                  value: KW(DW, cb.pitchHz),
                                  format: () => `${cb.pitchHz} Hz`,
                                  onChange: bb => {
                                    sb({
                                      pitchHz: ZW(DW, bb)
                                    })
                                  }
                                }), (0, mb.jsx)(cW, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: cb.syllableMs,
                                  format: zW,
                                  onChange: bb => {
                                    sb({
                                      syllableMs: bb
                                    })
                                  }
                                }), (0, mb.jsx)(cW, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: cb.volume,
                                  onChange: bb => {
                                    sb({
                                      volume: bb
                                    })
                                  }
                                })]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, mb.jsx)(cW, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: cb.durationMs,
                                  format: zW,
                                  onChange: bb => {
                                    sb({
                                      durationMs: bb
                                    })
                                  }
                                }), (0, mb.jsx)(cW, {
                                  label: "Fade in",
                                  min: 0,
                                  max: kb.durationMs,
                                  step: 1,
                                  value: kb.attackMs,
                                  format: zW,
                                  onChange: bb => {
                                    sb({
                                      attackMs: bb
                                    })
                                  }
                                }), (0, mb.jsx)(cW, {
                                  label: "Fade out",
                                  min: 0,
                                  max: kb.durationMs - kb.attackMs,
                                  step: 1,
                                  value: kb.releaseMs,
                                  format: zW,
                                  onChange: bb => {
                                    sb({
                                      releaseMs: bb
                                    })
                                  }
                                }), (0, mb.jsx)(cW, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: cb.glideSemitones,
                                  format: qW,
                                  onChange: bb => {
                                    sb({
                                      glideSemitones: bb
                                    })
                                  }
                                }), (0, mb.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, mb.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== cb.lowpassHz,
                                    onChange: bb => {
                                      sb({
                                        lowpassHz: bb.target.checked ? GW : null
                                      })
                                    }
                                  }), (0, mb.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== cb.lowpassHz && (0, mb.jsx)(cW, {
                                  label: "Filter",
                                  min: 0,
                                  max: KW(iW, OW),
                                  step: .1,
                                  value: KW(iW, cb.lowpassHz),
                                  format: () => `${cb.lowpassHz} Hz`,
                                  onChange: bb => {
                                    sb({
                                      lowpassHz: ZW(iW, bb)
                                    })
                                  }
                                })]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), dW.map((bb => {
                                  let {
                                    key: kb,
                                    label: Wb,
                                    max: ab
                                  } = bb;
                                  return (0, mb.jsx)(cW, {
                                    label: Wb,
                                    min: 0,
                                    max: ab,
                                    step: .1,
                                    value: cb.intonation[kb],
                                    format: qW,
                                    onChange: bb => {
                                      sb({
                                        intonation: {
                                          ...cb.intonation,
                                          [kb]: bb
                                        }
                                      })
                                    }
                                  }, kb)
                                }))]
                              })]
                            })
                          }
                          const wW = Object.keys(BW.f),
                            rW = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function oW(bb) {
                            var cb;
                            const sb = JSON.stringify((0, BW.g)(bb));
                            return null !== (cb = wW.find((bb => JSON.stringify((0, BW.g)(BW.f[bb])) === sb))) && void 0 !== cb ? cb : null
                          }

                          function SW(bb) {
                            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof bb || null === bb) return JSON.stringify(bb);
                            return `{\n${Object.entries(bb).map((bb=>{let[sb,kb]=bb;return`${cb}    ${sb}: ${SW(kb,`${cb}    `)},`})).join("\n")}\n${cb}}`
                          }

                          function RW(bb, cb, sb) {
                            const kb = oW(bb),
                              Wb = [`    line: ${JSON.stringify(cb)},`];
                            return sb && Wb.push(`    speakerName: ${JSON.stringify(sb)},`), Wb.push("    voice,"), `const voice = ${kb?JSON.stringify(kb):SW((0,BW.g)(bb))}\n\napi.setClientOption(playerId, "dialogue", {\n${Wb.join("\n")}\n})`
                          }
                          const vW = 400,
                            FW = 90;
                          let xW = null;

                          function jW(bb, cb, sb) {
                            return xW ??= new AudioContext, xW.resume(), (0, PW.d)(xW, xW.destination, bb, cb, sb, (() => {}))
                          }

                          function pW() {
                            const [bb, cb] = (0, kb.useState)(BW.f.regular), [sb, Wb] = (0, kb.useState)(rW[0]), [Tb, Ub] = (0, kb.useState)("Innkeeper"), [Ib, Hb] = (0, kb.useState)(0), fb = Xk((bb => bb.volume)), Mb = (0, kb.useRef)(null), Xb = (0, kb.useRef)(0), nb = (0, kb.useRef)(0), lb = () => {
                              var bb;
                              null === (bb = Mb.current) || void 0 === bb || bb.call(Mb), Mb.current = null
                            };
                            (0, kb.useEffect)((() => () => {
                              var bb;
                              null === (bb = Mb.current) || void 0 === bb || bb.call(Mb), window.clearTimeout(Xb.current)
                            }), []);
                            const eb = (0, kb.useMemo)((() => ({
                                line: sb,
                                speakerName: Tb || void 0,
                                voice: bb
                              })), [sb, Tb, bb]),
                              Cb = (0, kb.useRef)(eb);
                            Cb.current = eb;
                            const Vb = oW(bb),
                              Lb = bb => {
                                window.clearTimeout(Xb.current), lb();
                                const {
                                  plan: cb,
                                  synth: sb
                                } = (0, yW.h)(bb);
                                sb && (Mb.current = jW(sb, cb.blips, fb)), Hb((bb => bb + 1))
                              },
                              ub = RW(bb, sb, Tb);
                            return (0, mb.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, mb.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, mb.jsxs)("div", {
                                  children: [(0, mb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, mb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, mb.jsx)(Nb, {
                                  text: ub,
                                  label: "Copy code"
                                })]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [wW.map((bb => (0, mb.jsx)("button", {
                                  type: "button",
                                  className: ab()("DocsVariantChip", {
                                    Active: Vb === bb
                                  }),
                                  "aria-pressed": Vb === bb,
                                  onClick: () => {
                                    (bb => {
                                      const sb = BW.f[bb];
                                      cb(sb), Lb({
                                        ...eb,
                                        voice: sb
                                      })
                                    })(bb)
                                  },
                                  children: bb
                                }, bb))), !Vb && (0, mb.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, mb.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, mb.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, mb.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, mb.jsx)(tW.d, {
                                      display: eb
                                    }, Ib)
                                  }), (0, mb.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: bb => {
                                      bb.preventDefault(), Lb(eb)
                                    },
                                    children: [(0, mb.jsx)("input", {
                                      value: sb,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: bb => {
                                        Wb(bb.target.value)
                                      }
                                    }), (0, mb.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, mb.jsx)(Qb, {
                                        name: "play"
                                      }), (0, mb.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, mb.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: rW.map((bb => (0, mb.jsx)("button", {
                                      type: "button",
                                      className: ab()("DocsVariantChip", {
                                        Active: sb === bb
                                      }),
                                      onClick: () => {
                                        var cb;
                                        Wb(cb = bb), Lb({
                                          ...eb,
                                          line: cb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  }), (0, mb.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, mb.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, mb.jsx)("input", {
                                      value: Tb,
                                      placeholder: "No name",
                                      onChange: bb => {
                                        Ub(bb.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, mb.jsx)(AW, {
                                  synth: bb,
                                  onChange: sb => {
                                    const kb = {
                                      ...bb,
                                      ...sb
                                    };
                                    cb(kb);
                                    const Wb = {
                                        ...eb,
                                        voice: kb
                                      },
                                      ab = performance.now();
                                    if (ab - nb.current >= FW) {
                                      nb.current = ab, lb();
                                      const bb = (0, yW.h)(Wb).plan.blips[0];
                                      bb && (Mb.current = jW((0, BW.g)(kb), [{
                                        ...bb,
                                        atMs: 0
                                      }], fb))
                                    }
                                    window.clearTimeout(Xb.current), Xb.current = window.setTimeout((() => {
                                      Lb(Cb.current)
                                    }), vW)
                                  }
                                })]
                              }), (0, mb.jsx)(Yb, {
                                code: ub,
                                lang: "ts"
                              })]
                            })
                          }
                          var ba = sb(4588);
                          const ca = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            sa = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            ka = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${sa}`, "g"), ba.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ba.m]
                            ];

                          function Wa(bb) {
                            return `${bb.pageId}#${bb.anchor}`
                          }
                          let aa, Ta, Ua;

                          function Ia(bb) {
                            const cb = (0, hb.k)(bb),
                              sb = new Set;
                            for (const [, , kb] of cb.matchAll(hb.e)) {
                              const bb = kb.startsWith("#") ? Ab(kb) : null,
                                cb = bb ? Wa({
                                  pageId: bb.page.id,
                                  anchor: bb.anchor
                                }) : null;
                              null !== cb && (aa || (aa = new Set(Gb.flatMap((bb => tb(bb.layout) ? qb(bb).sections.map((cb => Wa({
                                pageId: bb.id,
                                anchor: cb.heading.anchor
                              }))) : [])))), aa).has(cb) && sb.add(cb)
                            }
                            for (const [, , kb] of cb.matchAll(ca)) {
                              const bb = Xc(kb);
                              bb && sb.add(Wa(bb))
                            }
                            return sb
                          }

                          function Ha(bb, cb) {
                            const sb = new Set,
                              kb = function(bb) {
                                return bb.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(bb);
                            for (const [, Wb] of kb.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) sb.add(Wb);
                            for (const [Wb, ab] of ka)
                              for (const [, bb] of(0, ba.e)(kb, Wb, ab)) cb.has(bb) && sb.add(bb);
                            return sb
                          }

                          function fa(bb, cb, sb, kb) {
                            const Wb = bb.get(cb);
                            Wb ? !kb && Wb.some((bb => bb.pageId === sb.pageId)) || Wb.push(sb) : bb.set(cb, [sb])
                          }
                          const Ma = /^[A-Za-z_$][\w$]*$/;

                          function Xa(bb) {
                            return Ma.test(bb.name) ? bb.name : "options"
                          }

                          function na(bb, cb) {
                            const sb = bb.params.map(Xa).join(", ");
                            return cb ? `${bb.name} = (${sb}) => {\n\t\n}` : `api.${bb.name}(${sb})`
                          }

                          function ma(bb) {
                            let {
                              method: cb,
                              isCallback: sb
                            } = bb;
                            return (0, mb.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, mb.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [sb ? (0, mb.jsxs)(mb.Fragment, {
                                  children: [(0, mb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: cb.name
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, mb.jsxs)(mb.Fragment, {
                                  children: [(0, mb.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: cb.name
                                  }), (0, mb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), cb.params.map(((bb, sb) => (0, mb.jsxs)(kb.Fragment, {
                                  children: [sb > 0 && (0, mb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, mb.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${cb.name}-${Xa(bb)}`,
                                    children: bb.name
                                  })]
                                }, bb.name))), (0, mb.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: sb ? ") => " : ")"
                                }), sb && !cb.returns && (0, mb.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), cb.returns && cb.returns.type && (0, mb.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!sb && (0, mb.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, mb.jsx)(Jc, {
                                  type: cb.returns.type
                                })]
                              })]
                            })
                          }

                          function la(bb) {
                            let {
                              title: cb,
                              references: sb
                            } = bb;
                            const Wb = (0, kb.useContext)(nc);
                            return (0, mb.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, mb.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: cb
                              }), sb.map((bb => (0, mb.jsx)(Tb.d, {
                                to: rb(Wb, Zb(bb.pageId), bb.anchor),
                                children: bb.label
                              }, `${bb.pageId}#${bb.anchor}`)))]
                            })
                          }

                          function Qa(bb) {
                            var cb, sb;
                            let {
                              pageId: kb,
                              anchor: Wb
                            } = bb;
                            const ab = Wa({
                                pageId: kb,
                                anchor: Wb
                              }),
                              Tb = null !== (cb = function() {
                                if (!Ua) {
                                  Ua = new Map;
                                  const kb = new Set(Gb.filter((bb => "callbacks" === bb.layout)).flatMap((bb => qb(bb).sections.map((bb => bb.heading.text)))));
                                  for (const Wb of Gb)
                                    if ("article" === Wb.layout || "snippets" === Wb.layout)
                                      for (const ab of (0, hb.z)(qb(Wb)))
                                        for (const {
                                            code: Tb
                                          }
                                          of(0, hb.o)(ab.blocks))
                                          for (const Ub of Ha(Tb, kb)) {
                                            const kb = Mc().get(Ub);
                                            if (kb) {
                                              var bb, cb, sb;
                                              const Tb = {
                                                pageId: Wb.id,
                                                anchor: null !== (bb = null === (cb = ab.heading) || void 0 === cb ? void 0 : cb.anchor) && void 0 !== bb ? bb : "",
                                                label: null !== (sb = Wb.navTitle) && void 0 !== sb ? sb : Wb.title
                                              };
                                              fa(Ua, Wa(kb), Tb, !1)
                                            }
                                          }
                                }
                                return Ua
                              }().get(ab)) && void 0 !== cb ? cb : [],
                              Ub = null !== (sb = function() {
                                if (!Ta) {
                                  Ta = new Map;
                                  const bb = Zb("changelog");
                                  for (const cb of qb(bb).sections) {
                                    const sb = new Set(cb.blocks.flatMap((bb => [...Ia(bb)])));
                                    for (const kb of sb) {
                                      const sb = {
                                        pageId: bb.id,
                                        anchor: cb.heading.anchor,
                                        label: cb.heading.text
                                      };
                                      fa(Ta, kb, sb, !0)
                                    }
                                  }
                                }
                                return Ta
                              }().get(ab)) && void 0 !== sb ? sb : [];
                            return 0 === Tb.length && 0 === Ub.length ? null : (0, mb.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Tb.length > 0 && (0, mb.jsx)(la, {
                                title: "Used in",
                                references: Tb
                              }), Ub.length > 0 && (0, mb.jsx)(la, {
                                title: "Changelog",
                                references: Ub
                              })]
                            })
                          }

                          function ea(bb) {
                            let {
                              method: cb,
                              pageId: sb,
                              anchor: kb,
                              isCallback: Wb
                            } = bb;
                            const ab = Wb ? void 0 : Uc().get(cb.name),
                              Tb = cb.description.length > 0 || null === ab || void 0 === ab || !ab.description ? cb.description : (0, hb.G)(ab.description);
                            return (0, mb.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, mb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, mb.jsx)(Hs, {
                                  level: 2,
                                  text: cb.name,
                                  anchor: kb,
                                  className: "DocsCardTitle"
                                }), (0, mb.jsx)(Nb, {
                                  text: na(cb, Wb),
                                  label: Wb ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, mb.jsx)(ma, {
                                method: cb,
                                isCallback: Wb
                              }), ab && null !== ab.deprecation && (0, mb.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, mb.jsx)("strong", {
                                  children: "Deprecated"
                                }), ab.deprecation && (0, mb.jsxs)(mb.Fragment, {
                                  children: [": ", (0, mb.jsx)(uc, {
                                    text: (Ub = ab.deprecation, (0, ba.t)(Ub, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ba.i)("`\\w"), (bb => {
                                      let [cb] = bb;
                                      return Mc().has(cb) ? `\`${cb}\`` : cb
                                    })))
                                  })]
                                })]
                              }), Tb.length > 0 && (0, mb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, mb.jsx)(ns, {
                                  blocks: Tb
                                })
                              }), cb.params.length > 0 && (0, mb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, mb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, mb.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: cb.params.map((bb => (0, mb.jsxs)("div", {
                                    id: `${cb.name}-${Xa(bb)}`,
                                    className: "DocsParam",
                                    children: [(0, mb.jsxs)("dt", {
                                      children: [(0, mb.jsx)("code", {
                                        className: "DocsParamName",
                                        children: bb.name
                                      }), (0, mb.jsx)(Jc, {
                                        type: bb.type
                                      })]
                                    }), bb.description && (0, mb.jsx)("dd", {
                                      children: (0, mb.jsx)(uc, {
                                        text: bb.description
                                      })
                                    })]
                                  }, bb.name)))
                                })]
                              }), cb.returns && (cb.returns.type || cb.returns.description.length > 0) && (0, mb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, mb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [cb.returns.type && (0, mb.jsx)(Jc, {
                                    type: cb.returns.type
                                  }), cb.returns.description.length > 0 && (0, mb.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, mb.jsx)(ns, {
                                      blocks: cb.returns.description
                                    })
                                  })]
                                })]
                              }), (0, mb.jsx)(Qa, {
                                pageId: sb,
                                anchor: kb
                              })]
                            });
                            var Ub
                          }

                          function Ca(bb) {
                            var cb;
                            return null !== bb.defaultValue && "undefined" !== bb.defaultValue ? bb.defaultValue : null !== (cb = bb.example) && void 0 !== cb ? cb : "value"
                          }

                          function Na(bb) {
                            let {
                              setting: cb,
                              pageId: sb,
                              anchor: kb,
                              setterSnippet: Wb
                            } = bb;
                            const ab = null === cb.defaultValue ? null : ec(cb.defaultValue);
                            return (0, mb.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, mb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, mb.jsx)(Hs, {
                                  level: 2,
                                  text: cb.name,
                                  anchor: kb,
                                  className: "DocsCardTitle"
                                }), (0, mb.jsx)(Nb, {
                                  text: Wb(cb.name, Ca(cb)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, mb.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, mb.jsxs)("div", {
                                  children: [(0, mb.jsx)("dt", {
                                    children: "Type"
                                  }), (0, mb.jsx)("dd", {
                                    children: (0, mb.jsx)(Jc, {
                                      type: cb.type
                                    })
                                  })]
                                }), null !== cb.defaultValue && (0, mb.jsxs)("div", {
                                  children: [(0, mb.jsx)("dt", {
                                    children: "Default"
                                  }), (0, mb.jsx)("dd", {
                                    children: (0, mb.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [ab && (0, mb.jsx)(Cc, {
                                        colour: ab
                                      }), cb.defaultValue]
                                    })
                                  })]
                                }), null !== cb.example && (0, mb.jsxs)("div", {
                                  children: [(0, mb.jsx)("dt", {
                                    children: "Example"
                                  }), (0, mb.jsx)("dd", {
                                    children: (0, mb.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: cb.example
                                    })
                                  })]
                                })]
                              }), cb.description.length > 0 && (0, mb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, mb.jsx)(ns, {
                                  blocks: cb.description
                                })
                              }), (0, mb.jsx)(Qa, {
                                pageId: sb,
                                anchor: kb
                              })]
                            })
                          }

                          function Va(bb) {
                            let {
                              section: cb
                            } = bb;
                            return (0, mb.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, mb.jsx)(Hs, {
                                level: 2,
                                text: cb.heading.text,
                                anchor: cb.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, mb.jsx)("div", {
                                className: "DocsProse",
                                children: (0, mb.jsx)(ns, {
                                  blocks: cb.blocks
                                })
                              })]
                            })
                          }

                          function La(bb) {
                            let {
                              section: cb
                            } = bb;
                            return (0, mb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, mb.jsx)(Hs, {
                                level: cb.heading.level,
                                text: cb.heading.text,
                                anchor: cb.heading.anchor
                              }), (0, mb.jsx)(ns, {
                                blocks: cb.blocks
                              })]
                            })
                          }
                          const ua = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Ya(bb) {
                            let {
                              page: cb,
                              section: sb
                            } = bb;
                            if ("methods" === cb.layout || "callbacks" === cb.layout) return (0, mb.jsx)(ea, {
                              method: Ys(sb),
                              pageId: cb.id,
                              anchor: sb.heading.anchor,
                              isCallback: "callbacks" === cb.layout
                            });
                            if ("settings" === cb.layout) {
                              const bb = function(bb) {
                                const cb = {
                                  name: bb.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const kb of bb.blocks) {
                                  var sb;
                                  if (us(kb)) continue;
                                  const bb = "paragraph" === kb.kind ? kb.text.match(hs) : null;
                                  if (!bb) {
                                    cb.description.push(kb);
                                    continue
                                  }
                                  const Wb = null !== (sb = Ls(bb[2])) && void 0 !== sb ? sb : bb[2];
                                  "Type" === bb[1] ? cb.type = Wb : "Default" === bb[1] ? cb.defaultValue = Wb : "" !== Wb && (cb.example = Wb)
                                }
                                return cb.type ? cb : null
                              }(sb);
                              if (bb) return (0, mb.jsx)(Na, {
                                setting: bb,
                                pageId: cb.id,
                                anchor: sb.heading.anchor,
                                setterSnippet: cb.setterSnippet
                              })
                            }
                            return "snippets" === cb.layout ? (0, mb.jsx)(Va, {
                              section: sb
                            }) : "changelog" === cb.layout ? (0, mb.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, mb.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, mb.jsx)(Hs, {
                                  level: 2,
                                  text: sb.heading.text,
                                  anchor: sb.heading.anchor
                                })
                              }), (0, mb.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, mb.jsx)(ns, {
                                  blocks: gs(sb.blocks)
                                })
                              })]
                            }) : cb.gallery ? (0, mb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, mb.jsx)(Hs, {
                                level: sb.heading.level,
                                text: sb.heading.text,
                                anchor: sb.heading.anchor
                              }), (0, mb.jsx)(tk, {
                                kind: cb.gallery,
                                content: qb(cb),
                                blocks: sb.blocks
                              })]
                            }) : (0, mb.jsx)(La, {
                              section: sb
                            })
                          }

                          function ha(bb) {
                            let {
                              page: cb,
                              onTocChange: sb
                            } = bb;
                            const Wb = qb(cb),
                              [ab, Tb] = (0, kb.useState)(""),
                              Ub = "article" !== cb.layout,
                              Ib = Qs(cb.gallery) ? cb.gallery : null,
                              Hb = null !== Ib,
                              fb = ab.trim().toLowerCase(),
                              Mb = (0, kb.useRef)(null),
                              Xb = (0, kb.useCallback)((bb => {
                                var cb;
                                null === (cb = Mb.current) || void 0 === cb || cb.preview(bb)
                              }), []),
                              nb = (0, kb.useMemo)((() => {
                                if (!cb.hasParticlePlayground) return [];
                                const bb = Ps(Wb.intro).find((bb => "names" === bb.kind && !bb.names.some((bb => null !== qs(bb.name)))));
                                return "names" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.names.map((bb => bb.name)) : []
                              }), [cb, Wb]),
                              lb = (0, kb.useMemo)((() => {
                                if (!cb.hasTextPlayground) return [];
                                const bb = Wb.sections.flatMap((bb => bb.blocks.flatMap((bb => {
                                  var cb;
                                  return (null !== (cb = ys(bb)) && void 0 !== cb ? cb : []).flatMap((bb => zc(bb.name) ? [bb.name] : []))
                                }))));
                                return [...new Set(bb)]
                              }), [cb, Wb]),
                              Qb = (0, kb.useMemo)((() => fb ? Wb.sections.filter((bb => function(bb, cb) {
                                return !!bb.heading.text.toLowerCase().includes(cb) || bb.blocks.some((bb => (0, hb.k)(bb).toLowerCase().includes(cb)))
                              }(bb, fb))) : Wb.sections), [Wb, fb]),
                              eb = (0, kb.useMemo)((() => function(bb, cb) {
                                return "article" !== bb.layout ? cb.map((bb => ({
                                  anchor: bb.heading.anchor,
                                  text: bb.heading.text,
                                  level: 2
                                }))) : cb.flatMap((bb => {
                                  const cb = bb.blocks.flatMap((bb => "heading" === bb.kind && 3 === bb.level ? [{
                                    anchor: bb.anchor,
                                    text: bb.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: bb.heading.anchor,
                                    text: bb.heading.text,
                                    level: 2
                                  }, ...cb]
                                }))
                              }(cb, Qb)), [cb, Qb]);
                            return (0, kb.useEffect)((() => {
                              sb(eb)
                            }), [eb, sb]), (0, mb.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, mb.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, mb.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Wb.title || cb.title
                                }), (0, mb.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: cb.summary
                                }), (0, mb.jsx)(xk, {
                                  page: cb
                                }), Ub && (0, mb.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, mb.jsxs)("span", {
                                    children: [(0, mb.jsx)("strong", {
                                      children: Wb.sections.length
                                    }), " ", ua[cb.layout]]
                                  })
                                })]
                              }), "" === cb.slug && (0, mb.jsx)(Pk, {}), Ib && (0, mb.jsx)(Ok, {
                                kind: Ib
                              }, Ib), cb.hasParticlePlayground && (0, mb.jsx)(fW, {
                                ref: Mb,
                                textures: nb
                              }), !Hb && Wb.intro.length > 0 && (0, mb.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: cb.gallery ? (0, mb.jsx)(Nk.Provider, {
                                  value: cb.hasParticlePlayground ? Xb : null,
                                  children: (0, mb.jsx)(tk, {
                                    kind: cb.gallery,
                                    content: Wb,
                                    blocks: Wb.intro
                                  })
                                }) : (0, mb.jsx)(ns, {
                                  blocks: gs(Wb.intro)
                                })
                              }), cb.hasTextPlayground && (0, mb.jsx)(gW, {
                                fontAwesomeIcons: lb
                              }), cb.hasVoicePlayground && (0, mb.jsx)(pW, {}), cb.childPageIds && (0, mb.jsx)(Pk, {
                                cards: cb.childPageIds.map((bb => ({
                                  pageId: bb
                                }))),
                                label: cb.title
                              }), Ub && (0, mb.jsx)(Ns, {
                                className: "DocsFilterBar",
                                value: ab,
                                placeholder: `Filter ${Wb.sections.length} ${ua[cb.layout]}\u2026`,
                                label: `Filter ${ua[cb.layout]}`,
                                onChange: Tb,
                                count: fb ? {
                                  visible: Qb.length,
                                  total: Wb.sections.length
                                } : null
                              }), !Hb && (0, mb.jsxs)("div", {
                                className: `DocsSections Layout-${cb.layout}`,
                                children: [Qb.map((bb => (0, mb.jsx)(Ya, {
                                  page: cb,
                                  section: bb
                                }, bb.heading.anchor))), 0 === Qb.length && (0, mb.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", ua[cb.layout], " match \u201c", ab, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ja = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function ga(bb) {
                            let {
                              entry: cb,
                              isActive: sb,
                              onNavigate: kb,
                              label: Wb,
                              children: Tb
                            } = bb;
                            return (0, mb.jsx)("a", {
                              href: `#${cb.anchor}`,
                              "aria-label": Wb,
                              className: ab()(`Level${cb.level}`, {
                                Active: sb
                              }),
                              "aria-current": sb ? "location" : void 0,
                              onClick: bb => {
                                bb.preventDefault(), kb(cb.anchor)
                              },
                              children: Tb
                            })
                          }

                          function Ba(bb) {
                            let {
                              toc: cb,
                              activeAnchor: sb,
                              onNavigate: Wb
                            } = bb;
                            const Tb = Math.max(0, cb.findIndex((bb => bb.anchor === sb))),
                              Ub = (0, kb.useRef)(null),
                              Ib = (0, kb.useRef)(!1);
                            (0, kb.useEffect)((() => {
                              var bb, sb;
                              const kb = null === (bb = Ub.current) || void 0 === bb ? void 0 : bb.closest(".DocsToc"),
                                Wb = null === (sb = Ub.current) || void 0 === sb ? void 0 : sb.querySelector(".DocsTimelineNotch.Active");
                              if (!kb || !Wb) return;
                              let ab = 0;
                              if (Tb === cb.length - 1) ab = kb.scrollHeight;
                              else if (Tb > 0) {
                                const bb = kb.getBoundingClientRect(),
                                  cb = Wb.getBoundingClientRect();
                                ab = kb.scrollTop + cb.top + cb.height / 2 - (bb.top + kb.clientHeight / 2)
                              }
                              kb.scrollTo({
                                top: ab,
                                behavior: Ib.current ? "smooth" : "auto"
                              }), Ib.current = !0
                            }), [Tb, cb.length]);
                            const Hb = [];
                            return cb.forEach(((bb, cb) => {
                              var sb, kb, Wb;
                              const ab = function(bb) {
                                  const cb = bb.trim().match(Ja);
                                  return cb ? {
                                    day: cb[1],
                                    month: `${cb[2]} ${cb[3]}`
                                  } : null
                                }(bb.text),
                                Tb = null !== (sb = null === ab || void 0 === ab ? void 0 : ab.month) && void 0 !== sb ? sb : null;
                              null !== Tb && (null === (kb = Hb.at(-1)) || void 0 === kb ? void 0 : kb.month) === Tb || Hb.push({
                                month: Tb,
                                entries: []
                              }), Hb.at(-1).entries.push({
                                entry: bb,
                                day: null !== (Wb = null === ab || void 0 === ab ? void 0 : ab.day) && void 0 !== Wb ? Wb : null,
                                index: cb
                              })
                            })), (0, mb.jsx)("ol", {
                              ref: Ub,
                              className: "DocsTimeline",
                              children: Hb.map((bb => {
                                let {
                                  month: cb,
                                  entries: sb
                                } = bb;
                                return (0, mb.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [cb && (0, mb.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: cb
                                  }), (0, mb.jsx)("ol", {
                                    children: sb.map((bb => {
                                      let {
                                        entry: cb,
                                        day: sb,
                                        index: kb
                                      } = bb;
                                      return (0, mb.jsx)("li", {
                                        className: ab()("DocsTimelineNotch", {
                                          Passed: kb < Tb,
                                          Active: kb === Tb
                                        }),
                                        children: (0, mb.jsx)(ga, {
                                          entry: cb,
                                          isActive: kb === Tb,
                                          onNavigate: Wb,
                                          label: cb.text,
                                          children: (0, mb.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== sb && void 0 !== sb ? sb : cb.text
                                          })
                                        })
                                      }, cb.anchor)
                                    }))
                                  })]
                                }, sb[0].entry.anchor)
                              }))
                            })
                          }

                          function ta(bb) {
                            let {
                              isChangelog: cb,
                              toc: sb,
                              activeAnchor: kb,
                              onNavigate: Wb
                            } = bb;
                            return 0 === sb.length ? null : (0, mb.jsxs)(mb.Fragment, {
                              children: [(0, mb.jsx)("div", {
                                className: "DocsTocTitle",
                                children: cb ? "Updates" : "On this page"
                              }), cb ? (0, mb.jsx)(Ba, {
                                toc: sb,
                                activeAnchor: kb,
                                onNavigate: Wb
                              }) : (0, mb.jsx)("ul", {
                                children: sb.map((bb => (0, mb.jsx)("li", {
                                  children: (0, mb.jsx)(ga, {
                                    entry: bb,
                                    isActive: bb.anchor === kb,
                                    onNavigate: Wb,
                                    children: bb.text.replace(/`/g, "")
                                  })
                                }, bb.anchor)))
                              })]
                            })
                          }
                          const ya = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Pa = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Da = 20,
                            Ea = 10,
                            ia = 40,
                            Oa = 120;
                          let Ga;

                          function Ka(bb) {
                            const cb = bb.gallery;
                            if (!cb) return [];
                            if (Qs(cb)) return function(bb) {
                              return Cs(bb).entries.map((bb => bb.name))
                            }(cb).map((sb => ({
                              page: bb,
                              anchor: Es(cb, sb),
                              title: sb,
                              kind: Pa[cb],
                              text: "",
                              listedUnder: bb.title
                            })));
                            const sb = qb(bb);
                            return (0, hb.z)(sb).flatMap((kb => {
                              const Wb = kb.heading ? `${bb.title} \u203a ${kb.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : bb.title;
                              return Os(cb, sb, kb.blocks).flatMap((sb => "names" !== sb.kind ? [] : sb.names.map((kb => {
                                const ab = sb.isSongs ? "Song" : Pa[cb];
                                return {
                                  page: bb,
                                  anchor: kb.anchor,
                                  title: kb.name,
                                  kind: ab,
                                  text: "",
                                  listedUnder: Wb
                                }
                              }))))
                            }))
                          }

                          function Za(bb, cb, sb) {
                            const kb = bb.title.toLowerCase();
                            let Wb = 0;
                            if (kb === cb) Wb = 100;
                            else if (kb.startsWith(cb)) Wb = 80;
                            else if (kb.includes(cb)) Wb = 60;
                            else if (sb.every((bb => kb.includes(bb)))) Wb = 45;
                            else {
                              if (!bb.text.toLowerCase().includes(cb)) return 0;
                              Wb = 20
                            }
                            return Wb - Math.min(kb.length / 10, 9) + ("Page" === bb.kind ? 8 : "Method" === bb.kind ? 3 : 0) - (bb.listedUnder ? Da : 0)
                          }

                          function za(bb, cb) {
                            const sb = bb.toLowerCase().indexOf(cb),
                              kb = Math.max(0, sb - Oa / 3);
                            return `${kb>0?"\u2026":""}${bb.slice(kb,kb+Oa)}${kb+Oa<bb.length?"\u2026":""}`
                          }

                          function qa(bb) {
                            let {
                              text: cb,
                              query: sb
                            } = bb;
                            const kb = sb ? cb.toLowerCase().indexOf(sb) : -1;
                            return -1 === kb ? (0, mb.jsx)(mb.Fragment, {
                              children: cb
                            }) : (0, mb.jsxs)(mb.Fragment, {
                              children: [cb.slice(0, kb), (0, mb.jsx)("mark", {
                                children: cb.slice(kb, kb + sb.length)
                              }), cb.slice(kb + sb.length)]
                            })
                          }

                          function da(bb) {
                            let {
                              basePath: cb,
                              onClose: sb
                            } = bb;
                            const Wb = (0, Ub.v)(),
                              [Tb, Ib] = (0, kb.useState)(""),
                              [Hb, fb] = (0, kb.useState)(0),
                              Mb = (0, kb.useRef)(null),
                              Xb = (0, kb.useRef)(null),
                              nb = Tb.trim().toLowerCase(),
                              lb = (0, kb.useMemo)((() => {
                                const bb = (Ga || (Ga = Gb.flatMap((bb => {
                                  const cb = qb(bb);
                                  return [{
                                    page: bb,
                                    anchor: "",
                                    title: bb.title,
                                    kind: "Page",
                                    text: bb.summary
                                  }, ...cb.sections.flatMap((cb => {
                                    const sb = cb.blocks.filter((bb => "paragraph" === bb.kind)).map(hb.k).join(" ").replace(/[`*]/g, ""),
                                      kb = {
                                        page: bb,
                                        anchor: cb.heading.anchor,
                                        title: cb.heading.text.replace(/`/g, ""),
                                        kind: ya[bb.layout],
                                        text: sb
                                      },
                                      Wb = cb.blocks.flatMap((cb => "article" === bb.layout && "heading" === cb.kind && 3 === cb.level ? [{
                                        page: bb,
                                        anchor: cb.anchor,
                                        title: cb.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: kb.title
                                      }] : []));
                                    return [kb, ...Wb]
                                  })), ...Ka(bb)]
                                }))), Ga);
                                if (!nb) return bb.filter((bb => "Page" === bb.kind));
                                const cb = nb.split(/\s+/);
                                let sb = 0;
                                return bb.map((bb => ({
                                  entry: bb,
                                  score: Za(bb, nb, cb)
                                }))).filter((bb => bb.score > 0)).sort(((bb, cb) => cb.score - bb.score)).filter((bb => !bb.entry.listedUnder || (sb++, sb <= Ea))).slice(0, ia).map((bb => bb.entry))
                              }), [nb]);
                            (0, kb.useEffect)((() => {
                              fb(0)
                            }), [nb]), (0, kb.useEffect)((() => {
                              const bb = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === bb || void 0 === bb || bb.focus()
                              }
                            }), []), (0, kb.useEffect)((() => {
                              var bb, cb;
                              null === (bb = Mb.current) || void 0 === bb || null === (cb = bb.querySelector(".Active")) || void 0 === cb || cb.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Hb]);
                            const eb = bb => {
                              Wb(rb(cb, bb.page, bb.anchor)), sb()
                            };
                            return (0, mb.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && sb()
                              },
                              children: (0, mb.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: bb => {
                                  bb.target !== Xb.current && bb.preventDefault()
                                },
                                onKeyDown: bb => {
                                  if ("Escape" === bb.key) sb();
                                  else if ("Tab" === bb.key) {
                                    var cb;
                                    bb.preventDefault(), null === (cb = Xb.current) || void 0 === cb || cb.focus()
                                  }
                                },
                                children: [(0, mb.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, mb.jsx)(Qb, {
                                    name: "magnifying-glass"
                                  }), (0, mb.jsx)("input", {
                                    ref: Xb,
                                    autoFocus: !0,
                                    value: Tb,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": lb.length > 0 ? `DocsSearchResult-${Hb}` : void 0,
                                    onChange: bb => {
                                      Ib(bb.target.value)
                                    },
                                    onKeyDown: bb => {
                                      if ("ArrowDown" === bb.key || "ArrowUp" === bb.key) {
                                        bb.preventDefault();
                                        const cb = "ArrowDown" === bb.key ? 1 : -1;
                                        fb((Hb + cb + lb.length) % Math.max(lb.length, 1))
                                      } else "Enter" === bb.key && lb[Hb] && eb(lb[Hb])
                                    }
                                  }), (0, mb.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, mb.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Mb,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!nb && (0, mb.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), lb.map(((bb, cb) => {
                                    var sb;
                                    return (0, mb.jsxs)("li", {
                                      id: `DocsSearchResult-${cb}`,
                                      role: "option",
                                      "aria-selected": cb === Hb,
                                      className: ab()("DocsSearchResult", {
                                        Active: cb === Hb
                                      }),
                                      onMouseMove: () => {
                                        fb(cb)
                                      },
                                      onClick: () => {
                                        eb(bb)
                                      },
                                      children: [(0, mb.jsx)(Qb, {
                                        name: bb.page.icon
                                      }), (0, mb.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, mb.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, mb.jsx)(qa, {
                                            text: bb.title,
                                            query: nb
                                          })
                                        }), bb.text && (0, mb.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, mb.jsx)(qa, {
                                            text: za(bb.text, nb),
                                            query: nb
                                          })
                                        })]
                                      }), (0, mb.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === bb.kind ? "Page" : null !== (sb = bb.listedUnder) && void 0 !== sb ? sb : `${bb.kind} \xb7 ${bb.page.title}`
                                      })]
                                    }, `${bb.page.id}#${bb.anchor}`)
                                  })), nb && 0 === lb.length && (0, mb.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Tb, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Aa(bb, cb) {
                            if (cb < 10) return `${bb.toFixed(1)}s`;
                            const sb = Math.floor(bb);
                            return `${Math.floor(sb/60)}:${String(sb%60).padStart(2,"0")}`
                          }

                          function wa() {
                            const bb = Xk((bb => bb.track)),
                              cb = Xk((bb => bb.volume)),
                              [sb, Wb] = (0, kb.useState)(0),
                              Tb = (0, kb.useRef)(kk);
                            if ((0, kb.useEffect)((() => {
                                if (!bb) return;
                                if (Wb(Qk()), "playing" !== bb.status) return;
                                let cb = 0;
                                const sb = () => {
                                  Wb(Qk()), cb = requestAnimationFrame(sb)
                                };
                                return cb = requestAnimationFrame(sb), () => {
                                  cancelAnimationFrame(cb)
                                }
                              }), [bb]), !bb) return null;
                            const Ub = "paused" !== bb.status,
                              Ib = Math.min(sb, bb.duration);
                            return (0, mb.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, mb.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, mb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Ub ? `Pause ${bb.name}` : `Play ${bb.name}`,
                                  onClick: lk,
                                  children: (0, mb.jsx)(Qb, {
                                    name: Ub ? "pause" : "play"
                                  })
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, mb.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, mb.jsx)("code", {
                                      children: bb.name
                                    }), (0, mb.jsx)("span", {
                                      children: bb.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, mb.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, mb.jsx)("span", {
                                      children: Aa(Ib, bb.duration)
                                    }), (0, mb.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: bb.duration || 1,
                                      step: .01,
                                      value: Ib,
                                      disabled: 0 === bb.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Aa(Ib,bb.duration)} of ${Aa(bb.duration,bb.duration)}`,
                                      onChange: bb => {
                                        const cb = Number(bb.target.value);
                                        ! function(bb) {
                                          var cb;
                                          Ik = bb, null === (cb = Tk) || void 0 === cb || cb.seek(bb)
                                        }(cb), Wb(cb)
                                      }
                                    }), (0, mb.jsx)("span", {
                                      children: bb.duration > 0 ? Aa(bb.duration, bb.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, mb.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, mb.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === cb ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === cb ? ek(Tb.current) : (Tb.current = cb, ek(0))
                                    },
                                    children: (0, mb.jsx)(Qb, {
                                      name: "volume",
                                      className: ab()({
                                        Muted: 0 === cb
                                      })
                                    })
                                  }), (0, mb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: cb,
                                    "aria-label": "Volume",
                                    onChange: bb => {
                                      ek(Number(bb.target.value))
                                    }
                                  })]
                                }), (0, mb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var cb;
                                    null === (cb = document.querySelector(`[data-docs-track="${CSS.escape(Wk(bb.name,bb.isSong))}"]`)) || void 0 === cb || cb.focus(), Ck()
                                  },
                                  children: (0, mb.jsx)(Qb, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ra = sb(37);
                          const oa = "docsTheme",
                            Sa = window.matchMedia("(prefers-color-scheme: light)");

                          function Ra(bb) {
                            let {
                              theme: cb,
                              onChange: sb
                            } = bb;
                            const kb = "dark" === cb ? "light" : "dark";
                            return (0, mb.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${kb} theme`,
                              title: `Switch to ${kb} theme`,
                              onClick: () => {
                                sb(kb)
                              },
                              children: (0, mb.jsx)(Qb, {
                                name: "dark" === cb ? "moon" : "sun"
                              })
                            })
                          }
                          const va = "https://github.com/Bloxdy/code-api",
                            Fa = "https://discord.gg/playbloxd",
                            xa = 180,
                            ja = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function pa(bb) {
                            let {
                              basePath: cb,
                              activePageId: sb,
                              onNavigate: kb
                            } = bb;
                            return (0, mb.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Kb.map((bb => (0, mb.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, mb.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: bb.title
                                }), bb.pageIds.map((bb => {
                                  var Wb;
                                  const Ub = Zb(bb);
                                  return (0, mb.jsxs)(Tb.d, {
                                    to: rb(cb, Ub),
                                    className: ab()("DocsNavLink", {
                                      Active: Ub.id === sb
                                    }),
                                    "aria-current": Ub.id === sb ? "page" : void 0,
                                    onClick: kb,
                                    children: [(0, mb.jsx)(Qb, {
                                      name: Ub.icon
                                    }), (0, mb.jsx)("span", {
                                      children: null !== (Wb = Ub.navTitle) && void 0 !== Wb ? Wb : Ub.title
                                    })]
                                  }, Ub.id)
                                }))]
                              }, bb.title)))
                            })
                          }

                          function bT(bb) {
                            let {
                              basePath: cb,
                              pageId: sb
                            } = bb;
                            const kb = Kb.flatMap((bb => bb.pageIds)),
                              Wb = kb.indexOf(sb),
                              ab = Wb > 0 ? Zb(kb[Wb - 1]) : null,
                              Ub = Wb < kb.length - 1 ? Zb(kb[Wb + 1]) : null;
                            return (0, mb.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [ab ? (0, mb.jsxs)(Tb.d, {
                                className: "DocsPagerLink Previous",
                                to: rb(cb, ab),
                                children: [(0, mb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, mb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: ab.title
                                })]
                              }) : (0, mb.jsx)("span", {}), Ub && (0, mb.jsxs)(Tb.d, {
                                className: "DocsPagerLink Next",
                                to: rb(cb, Ub),
                                children: [(0, mb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, mb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Ub.title
                                })]
                              })]
                            })
                          }

                          function cT(bb) {
                            let {
                              basePath: cb,
                              embedded: sb = !1
                            } = bb;
                            const {
                              pageSlug: Wb = ""
                            } = (0, Ub.D)(), Hb = (0, Ub.r)(), fb = (0, Ub.v)(), Mb = (Xb = Wb, Gb.find((bb => bb.slug === Xb)));
                            var Xb;
                            const [nb, lb] = function() {
                              const [bb, cb] = (0, kb.useState)((() => {
                                const bb = ra.h.getItem(oa);
                                return "dark" === bb || "light" === bb ? bb : null
                              })), [sb, Wb] = (0, kb.useState)(Sa.matches ? "light" : "dark");
                              return (0, kb.useEffect)((() => {
                                const bb = () => {
                                  Wb(Sa.matches ? "light" : "dark")
                                };
                                return Sa.addEventListener("change", bb), () => {
                                  Sa.removeEventListener("change", bb)
                                }
                              }), []), [null !== bb && void 0 !== bb ? bb : sb, bb => {
                                ra.h.setItem(oa, bb), cb(bb)
                              }]
                            }(), [eb, Cb] = (0, kb.useState)(null), [Nb, Vb] = (0, kb.useState)(!1), [Lb, ub] = (0, kb.useState)(!1), [Yb, Jb] = (0, kb.useState)([]), gb = function(bb, cb) {
                              const [sb, Wb] = (0, kb.useState)("");
                              return (0, kb.useEffect)((() => {
                                if (!cb) return;
                                let sb = 0;
                                const kb = () => {
                                    var kb, ab;
                                    sb = 0;
                                    const Tb = cb.getBoundingClientRect().top + xa;
                                    let Ub = null !== (kb = null === (ab = bb[0]) || void 0 === ab ? void 0 : ab.anchor) && void 0 !== kb ? kb : "";
                                    for (const cb of bb) {
                                      const bb = document.getElementById(cb.anchor);
                                      bb && bb.getBoundingClientRect().top <= Tb && (Ub = cb.anchor)
                                    }
                                    cb.scrollTop + cb.clientHeight >= cb.scrollHeight - 2 && cb.scrollTop > 0 && bb.length > 0 && (Ub = bb[bb.length - 1].anchor), Wb(Ub)
                                  },
                                  ab = () => {
                                    sb || (sb = requestAnimationFrame(kb))
                                  };
                                return kb(), cb.addEventListener("scroll", ab, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(sb), cb.removeEventListener("scroll", ab)
                                }
                              }), [bb, cb]), sb
                            }(Yb, eb), Bb = "" === Wb && Hb.hash ? function(bb) {
                              const cb = (0, hb.v)(bb);
                              if (db(Zb("welcome"), cb)) return null;
                              const sb = Object.hasOwn(wb, cb) ? wb[cb] : null;
                              if (sb) return {
                                page: Zb(sb.pageId),
                                anchor: sb.anchor
                              };
                              const kb = Zb("readme");
                              return db(kb, cb) ? {
                                page: kb,
                                anchor: cb
                              } : Ab(`#${cb}`)
                            }(Hb.hash) : null;
                            (0, kb.useEffect)((() => (Ib.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              Ib.d.set({
                                musicOnFromPage: !0
                              }), Ck()
                            })), []), (0, kb.useEffect)((() => {
                              const bb = bb => {
                                const cb = bb.target;
                                if (cb.closest(".DocsTextDialog")) return;
                                const sb = cb.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(cb.tagName);
                                "k" === bb.key && (bb.metaKey || bb.ctrlKey) || "/" === bb.key && !sb ? (bb.preventDefault(), ub(!0)) : "Escape" === bb.key && Vb(!1)
                              };
                              return window.addEventListener("keydown", bb), () => {
                                window.removeEventListener("keydown", bb)
                              }
                            }), []);
                            const tb = (0, kb.useRef)(null);
                            (0, kb.useLayoutEffect)((() => {
                              var bb, cb;
                              if (!eb) return;
                              const sb = tb.current === Hb.pathname;
                              tb.current = Hb.pathname;
                              const kb = (0, hb.v)(Hb.hash),
                                Wb = kb ? document.getElementById(kb) : null;
                              if (null === (bb = eb.querySelector(".DocsTargeted")) || void 0 === bb || bb.classList.remove("DocsTargeted"), null === Wb || void 0 === Wb || null === (cb = Wb.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === cb || cb.classList.add("DocsTargeted"), Wb) {
                                var ab;
                                const bb = Wb.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (ab = Wb.closest(".DocsChangelogEntry")) && void 0 !== ab ? ab : Wb).scrollIntoView({
                                  block: bb ? "center" : "start",
                                  behavior: sb ? "smooth" : "auto"
                                })
                              } else sb || eb.scrollTo({
                                top: 0
                              })
                            }), [eb, Hb.pathname, Hb.hash, Hb.key]);
                            const yb = (0, kb.useCallback)((() => {
                                Vb(!1)
                              }), []),
                              Pb = (0, kb.useCallback)((bb => {
                                fb({
                                  hash: bb
                                })
                              }), [fb]);
                            if (Bb) return (0, mb.jsx)(Ub.d, {
                              replace: !0,
                              to: rb(cb, Bb.page, Bb.anchor)
                            });
                            if (!Mb) return (0, mb.jsx)(Ub.d, {
                              replace: !0,
                              to: cb
                            });
                            const Db = sb ? "div" : "main";
                            return (0, mb.jsx)(nc.Provider, {
                              value: cb,
                              children: (0, mb.jsx)(mc.Provider, {
                                value: eb,
                                children: (0, mb.jsxs)("div", {
                                  ref: Cb,
                                  className: ab()("DocsSite", {
                                    Embedded: sb,
                                    NavOpen: Nb
                                  }),
                                  "data-theme": nb,
                                  children: [(0, mb.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, mb.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Nb ? "Close menu" : "Open menu",
                                      "aria-expanded": Nb,
                                      onClick: () => {
                                        Vb(!Nb)
                                      },
                                      children: (0, mb.jsx)(Qb, {
                                        name: Nb ? "cross" : "menu"
                                      })
                                    }), (0, mb.jsxs)(Tb.d, {
                                      to: cb,
                                      className: "DocsBrand",
                                      children: [(0, mb.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, mb.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, mb.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, mb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        ub(!0)
                                      },
                                      children: [(0, mb.jsx)(Qb, {
                                        name: "magnifying-glass"
                                      }), (0, mb.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, mb.jsxs)("kbd", {
                                        children: [ja ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, mb.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, mb.jsxs)("a", {
                                        href: Fa,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, mb.jsx)(Qb, {
                                          name: "discord"
                                        }), (0, mb.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, mb.jsxs)("a", {
                                        href: va,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, mb.jsx)(Qb, {
                                          name: "external-link"
                                        }), (0, mb.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !sb && (0, mb.jsxs)(Tb.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, mb.jsx)(Qb, {
                                          name: "play"
                                        }), (0, mb.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, mb.jsx)(Ra, {
                                        theme: nb,
                                        onChange: lb
                                      })]
                                    })]
                                  }), (0, mb.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, mb.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, mb.jsx)(pa, {
                                        basePath: cb,
                                        activePageId: Mb.id,
                                        onNavigate: yb
                                      })
                                    }), (0, mb.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: yb
                                    }), (0, mb.jsxs)(Db, {
                                      className: "DocsMain",
                                      children: [(0, mb.jsx)(ha, {
                                        page: Mb,
                                        onTocChange: Jb
                                      }, Mb.id), (0, mb.jsx)(bT, {
                                        basePath: cb,
                                        pageId: Mb.id
                                      })]
                                    }), (0, mb.jsx)("aside", {
                                      className: ab()("DocsToc", {
                                        Timeline: "changelog" === Mb.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, mb.jsx)(ta, {
                                        isChangelog: "changelog" === Mb.layout,
                                        toc: Yb,
                                        activeAnchor: gb,
                                        onNavigate: Pb
                                      })
                                    })]
                                  }), (0, mb.jsx)(wa, {}), Lb && (0, mb.jsx)(da, {
                                    basePath: cb,
                                    onClose: () => {
                                      ub(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4461: (bb, cb, sb) => {
                          sb.d(cb, {
                            D: () => nb,
                            G: () => Xb,
                            e: () => kb,
                            h: () => Tb,
                            k: () => Qb,
                            o: () => lb,
                            s: () => Ub,
                            v: () => Wb,
                            x: () => ab,
                            z: () => mb
                          });
                          const kb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Wb(bb) {
                            try {
                              return decodeURIComponent(bb.slice(1))
                            } catch {
                              return bb.slice(1)
                            }
                          }

                          function ab(bb) {
                            return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Tb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${kb.source}`, "g");

                          function Ub(bb, cb) {
                            return 2 === bb.length ? cb.replace(/^ (.*) $/, "$1") : cb
                          }

                          function Ib(bb) {
                            return "" === bb.trim()
                          }

                          function Hb(bb) {
                            const cb = [];
                            for (const sb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) cb.length > 0 && cb[cb.length - 1].endsWith("\\") ? cb[cb.length - 1] += `|${sb}` : cb.push(sb);
                            return cb.map((bb => bb.trim().replaceAll("\\|", "|")))
                          }
                          const fb = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Mb(bb) {
                            const cb = [],
                              sb = [{
                                indent: -1,
                                items: cb
                              }];
                            let kb = null;
                            for (const Wb of bb) {
                              const bb = Wb.match(fb);
                              if (!bb) {
                                kb && (kb.text += ` ${Wb.trim()}`);
                                continue
                              }
                              const cb = bb[1].replace(/\t/g, "  ").length;
                              for (; cb <= sb[sb.length - 1].indent;) sb.pop();
                              kb = {
                                text: bb[3].trim(),
                                children: []
                              }, sb[sb.length - 1].items.push(kb), sb.push({
                                indent: cb,
                                items: kb.children
                              })
                            }
                            return cb
                          }

                          function Xb(bb) {
                            const cb = bb.replace(/\r\n/g, "\n").split("\n"),
                              sb = [];
                            let kb = 0;
                            for (; kb < cb.length;) {
                              const bb = cb[kb];
                              if (Ib(bb)) {
                                kb++;
                                continue
                              }
                              const Wb = bb.match(/^\s*```\s*(\w*)\s*$/);
                              if (Wb) {
                                const bb = [];
                                for (kb++; kb < cb.length && !/^\s*```\s*$/.test(cb[kb]);) bb.push(cb[kb]), kb++;
                                kb++, sb.push({
                                  kind: "code",
                                  lang: Wb[1] || "text",
                                  code: bb.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Tb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Tb) {
                                const bb = Tb[2].trim();
                                sb.push({
                                  kind: "heading",
                                  level: Tb[1].length,
                                  text: bb,
                                  anchor: ab(bb)
                                }), kb++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
                                sb.push({
                                  kind: "rule"
                                }), kb++;
                                continue
                              }
                              if (bb.trim().startsWith("|") && kb + 1 < cb.length && /^\s*\|[\s:|-]+\|\s*$/.test(cb[kb + 1])) {
                                const Wb = Hb(bb),
                                  ab = [];
                                for (kb += 2; kb < cb.length && cb[kb].trim().startsWith("|");) ab.push(Hb(cb[kb])), kb++;
                                sb.push({
                                  kind: "table",
                                  header: Wb,
                                  rows: ab
                                });
                                continue
                              }
                              if (bb.startsWith(">")) {
                                const bb = [];
                                for (; kb < cb.length && cb[kb].startsWith(">");) bb.push(cb[kb].replace(/^>\s?/, "")), kb++;
                                sb.push({
                                  kind: "quote",
                                  blocks: Xb(bb.join("\n"))
                                });
                                continue
                              }
                              if (fb.test(bb)) {
                                const Wb = [],
                                  ab = /^\s*\d+\./.test(bb);
                                for (; kb < cb.length && !Ib(cb[kb]) && (fb.test(cb[kb]) || /^\s+\S/.test(cb[kb]));) Wb.push(cb[kb]), kb++;
                                sb.push({
                                  kind: "list",
                                  ordered: ab,
                                  items: Mb(Wb)
                                });
                                continue
                              }
                              const Ub = [];
                              for (; kb < cb.length && !Ib(cb[kb]) && !/^\s*```/.test(cb[kb]) && !/^#{1,6}\s/.test(cb[kb]) && !cb[kb].startsWith(">") && !fb.test(cb[kb]) && (!cb[kb].trim().startsWith("|") || 0 !== Ub.length);) Ub.push(cb[kb].trim()), kb++;
                              0 === Ub.length && (Ub.push(cb[kb].trim()), kb++), sb.push({
                                kind: "paragraph",
                                text: Ub.join(" ")
                              })
                            }
                            return sb
                          }

                          function nb(bb) {
                            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const sb = Xb(bb);
                            let kb = "";
                            const Wb = [],
                              ab = [],
                              Tb = new Map;
                            for (const Hb of sb) {
                              if ("heading" === Hb.kind) {
                                var Ub;
                                const bb = (null !== (Ub = Tb.get(Hb.anchor)) && void 0 !== Ub ? Ub : 0) + 1;
                                Tb.set(Hb.anchor, bb), bb > 1 && (Hb.anchor = `${Hb.anchor}-${bb}`)
                              }
                              if ("heading" === Hb.kind && 1 === Hb.level && !kb) {
                                kb = Hb.text;
                                continue
                              }
                              if ("heading" === Hb.kind && Hb.level <= cb) {
                                ab.push({
                                  heading: Hb,
                                  blocks: []
                                });
                                continue
                              }
                              const bb = ab.at(-1);
                              bb ? bb.blocks.push(Hb) : Wb.push(Hb)
                            }
                            const Ib = bb => {
                              for (;
                                "rule" === (null === (cb = bb.at(-1)) || void 0 === cb ? void 0 : cb.kind);) {
                                var cb;
                                bb.pop()
                              }
                            };
                            Ib(Wb);
                            for (const Hb of ab) Ib(Hb.blocks);
                            return {
                              title: kb,
                              intro: Wb,
                              sections: ab
                            }
                          }

                          function mb(bb) {
                            return [{
                              heading: null,
                              blocks: bb.intro
                            }, ...bb.sections.map((bb => ({
                              heading: bb.heading,
                              blocks: bb.blocks
                            })))]
                          }

                          function lb(bb) {
                            return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? lb(bb.blocks) : []))
                          }

                          function Qb(bb) {
                            switch (bb.kind) {
                              case "heading":
                              case "paragraph":
                                return bb.text;
                              case "code":
                                return bb.code;
                              case "table":
                                return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
                              case "list": {
                                const cb = bb => bb.map((bb => `${bb.text} ${cb(bb.children)}`)).join(" ");
                                return cb(bb.items)
                              }
                              case "quote":
                                return bb.blocks.map(Qb).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4556: (bb, cb, sb) => {
                          sb.d(cb, {
                            b: () => Ub
                          });
                          var kb = sb(64),
                            Wb = sb(334),
                            ab = sb(1858),
                            Tb = sb(1087);

                          function Ub(bb) {
                            let {
                              text: cb
                            } = bb;
                            const sb = [];
                            let Ub = "";
                            return (0, Wb.ic)(cb).forEach(((bb, cb) => {
                              if ("string" === typeof bb || !(0, ab.e)(bb.icon)) return void(Ub += "string" === typeof bb ? bb : bb.icon);
                              const Wb = Math.max(0, Ub.trimEnd().search(/\S{1,12}$/));
                              sb.push((0, Tb.jsxs)(kb.Fragment, {
                                children: [Ub.slice(0, Wb), (0, Tb.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Ub.slice(Wb), (0, Tb.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": bb.icon,
                                    children: (0, Tb.jsx)(ab.d, {
                                      itemName: bb.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, cb)), Ub = ""
                            })), sb.push(Ub), (0, Tb.jsx)(Tb.Fragment, {
                              children: sb
                            })
                          }
                        }, 4484: (bb, cb, sb) => {
                          sb.d(cb, {
                            f: () => Cb,
                            c: () => eb
                          });
                          var kb = sb(64),
                            Wb = sb(1423),
                            ab = sb(1839),
                            Tb = sb(4486),
                            Ub = sb(1087);
                          const Ib = (0, kb.memo)((function(bb) {
                            let {
                              initialParameters: cb
                            } = bb;
                            const sb = (0, kb.useRef)(null),
                              Wb = (0, kb.useRef)(null),
                              Ib = (0, kb.useRef)(0),
                              Hb = (0, kb.useRef)(null),
                              fb = cb.description,
                              Mb = cb.ob,
                              {
                                scale: Xb,
                                rotation: nb
                              } = null !== cb && void 0 !== cb ? cb : {},
                              mb = (0, Tb.f)();
                            return (0, kb.useEffect)((() => {
                              const bb = mb.onFrame((() => {
                                const bb = mb.getState();
                                if (!bb.isActive || !sb.current || !Wb.current) return;
                                const cb = bb.state;
                                if (sb.current.value = cb.progress, cb.clickCount > Ib.current) {
                                  Ib.current = cb.clickCount;
                                  const bb = Wb.current;
                                  bb.classList.add("pulse"), Hb.current = setTimeout((() => {
                                    bb.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Hb.current), bb()
                              }
                            }), [mb]), (0, Ub.jsx)(Ub.Fragment, {
                              children: (0, Ub.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Xb && {
                                    "--scale": Xb
                                  },
                                  ...null !== nb && {
                                    "--rotation": `${nb}deg`
                                  }
                                },
                                children: [(0, Ub.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: sb
                                }), (0, Ub.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Wb,
                                  children: (0, Ub.jsx)(ab.d, {
                                    text: [{
                                      icon: Mb
                                    }]
                                  })
                                }), (0, Ub.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Ub.jsx)(ab.d, {
                                    text: fb
                                  })
                                })]
                              })
                            })
                          }));
                          var Hb = sb(1033),
                            fb = sb.n(Hb);
                          const Mb = 2 * Math.PI * 90,
                            Xb = (0, kb.memo)((function(bb) {
                              let {
                                initialParameters: cb
                              } = bb;
                              const sb = (0, kb.useRef)(null),
                                Wb = (0, kb.useRef)(null),
                                Ib = (0, kb.useRef)(null),
                                Hb = cb.label,
                                Xb = cb.icon,
                                nb = cb.Fb,
                                {
                                  scale: mb,
                                  rotation: lb,
                                  xb: Qb
                                } = null !== cb && void 0 !== cb ? cb : {},
                                eb = (0, Tb.f)();
                              return (0, kb.useEffect)((() => {
                                const bb = eb.onFrame((() => {
                                  var bb, cb;
                                  const kb = eb.getState();
                                  if (!kb.isActive || !Wb.current) return;
                                  const ab = kb.state,
                                    Tb = null !== (bb = ab.timeRemaining) && void 0 !== bb ? bb : 0,
                                    Ub = null !== (cb = ab.Rb) && void 0 !== cb ? cb : 1,
                                    Hb = Mb * (1 - Tb / Ub);
                                  Wb.current.style.strokeDashoffset = `${Hb}`, sb.current && (sb.current.style.opacity = Tb > 0 ? "1" : "0"), Ib.current && nb && (Ib.current.textContent = `${(Tb/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [eb, nb]), (0, Ub.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: sb,
                                style: {
                                  ...null !== mb && {
                                    "--scale": mb
                                  },
                                  ...null !== lb && {
                                    "--rotation": `${lb}deg`
                                  }
                                },
                                children: [(0, Ub.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Ub.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ub.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Ub.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Mb,
                                      ref: Wb
                                    })]
                                  }), (0, Ub.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Ub.jsx)(ab.d, {
                                      text: [{
                                        icon: Xb
                                      }],
                                      className: fb()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Qb
                                      })
                                    })
                                  })]
                                }), (0, Ub.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Ub.jsx)(ab.d, {
                                    text: Hb,
                                    className: "QTETimedClickLabelText"
                                  }), nb && (0, Ub.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Ib
                                  })]
                                })]
                              })
                            })),
                            nb = (0, kb.memo)((function(bb) {
                              let {
                                initialParameters: cb
                              } = bb;
                              const sb = (0, kb.useRef)(null),
                                Wb = (0, kb.useRef)(null),
                                Ib = (0, kb.useRef)(null),
                                Hb = (0, kb.useRef)(!1),
                                fb = cb.description,
                                Mb = null === cb || void 0 === cb ? void 0 : cb.icon,
                                Xb = (0, Tb.f)();
                              return (0, kb.useEffect)((() => {
                                const bb = Xb.onFrame((() => {
                                  const bb = Xb.getState();
                                  if (!bb.isActive) return;
                                  const cb = bb.state;
                                  if (sb.current) {
                                    const bb = 100 * (cb.catchZonePosition - cb.pb / 2);
                                    sb.current.style.left = `${bb}%`, sb.current.style.width = 100 * cb.pb + "%", cb.isCatching !== Hb.current && (Hb.current = cb.isCatching, cb.isCatching ? sb.current.classList.add("catching") : sb.current.classList.remove("catching"))
                                  }
                                  Wb.current && (Wb.current.style.left = 100 * cb.moverPosition + "%"), Ib.current && (Ib.current.value = cb.progress)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Xb]), (0, Ub.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Ub.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Ub.jsx)(ab.d, {
                                    text: fb
                                  })
                                }), (0, Ub.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Ib
                                }), (0, Ub.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Ub.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: sb
                                  }), (0, Ub.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Wb,
                                    children: (0, Ub.jsx)("span", {
                                      children: Mb && (0, Ub.jsx)(ab.d, {
                                        text: [{
                                          icon: Mb,
                                          style: {
                                            fontSize: "4rem"
                                          }
                                        }]
                                      })
                                    })
                                  })]
                                })]
                              })
                            }));
                          var mb = sb(628);
                          const lb = (0, kb.memo)((function(bb) {
                              let {
                                initialParameters: cb
                              } = bb;
                              const sb = (0, kb.useRef)(null),
                                Wb = cb.label,
                                Ib = cb.Uc,
                                {
                                  icon: Hb,
                                  scale: fb,
                                  rotation: Mb
                                } = null !== cb && void 0 !== cb ? cb : {},
                                Xb = 100 * (.5 - Ib / 2),
                                nb = 100 * Ib,
                                lb = (0, Tb.f)();
                              return (0, kb.useEffect)((() => {
                                const bb = lb.onFrame((() => {
                                  const bb = lb.getState();
                                  if (!bb.isActive || !sb.current) return;
                                  const cb = bb.state;
                                  sb.current.style.left = 100 * cb.markerPosition + "%"
                                }));
                                return () => {
                                  bb()
                                }
                              }), [lb]), (0, Ub.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, mb.L)(fb) && {
                                    "--scale": fb
                                  },
                                  ...!(0, mb.L)(Mb) && {
                                    "--rotation": `${Mb}deg`
                                  }
                                },
                                children: [Hb && (0, Ub.jsx)(ab.d, {
                                  text: [{
                                    icon: Hb
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Ub.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Ub.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Xb}%`,
                                      width: `${nb}%`
                                    }
                                  }), (0, Ub.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: sb
                                  })]
                                }), (0, Ub.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Ub.jsx)(ab.d, {
                                    text: Wb
                                  })
                                })]
                              })
                            })),
                            Qb = (0, kb.memo)((function(bb) {
                              let {
                                initialParameters: cb
                              } = bb;
                              const sb = (0, kb.useRef)(null),
                                [Wb, Ib] = (0, kb.useState)((() => new Array(cb.Hc).fill("pending"))),
                                [Hb, fb] = (0, kb.useState)((() => {
                                  const bb = cb.Xc;
                                  return (0, mb.L)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
                                })),
                                Mb = cb.label,
                                {
                                  icon: Xb
                                } = cb,
                                nb = (0, kb.useRef)(0),
                                lb = (0, kb.useRef)(0),
                                Qb = (0, kb.useRef)([]),
                                eb = (0, Tb.f)();
                              return (0, kb.useEffect)((() => {
                                const bb = eb.onFrame((() => {
                                  const bb = eb.getState();
                                  if (!bb.isActive || !sb.current) return;
                                  const cb = bb.state,
                                    kb = 30 + 60 * cb.outerCircleProgress;
                                  if (sb.current.setAttribute("r", String(kb)), !0 === cb.lastClickResult && cb.successes > nb.current) {
                                    sb.current.classList.remove("QTERhythmClickOuterCircle--miss"), sb.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = sb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Qb.current.push(bb)
                                  } else if (!1 === cb.lastClickResult && cb.misses > lb.current) {
                                    sb.current.classList.remove("QTERhythmClickOuterCircle--hit"), sb.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = sb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Qb.current.push(bb)
                                  }
                                  cb.successes === nb.current && cb.misses === lb.current || (nb.current = cb.successes, lb.current = cb.misses, Ib((bb => {
                                    const sb = [...bb];
                                    for (let kb = 0; kb < cb.Hc; kb++) sb[kb] = kb < cb.successes ? "success" : "pending";
                                    return sb
                                  })), fb((bb => {
                                    if (0 === bb.length) return bb;
                                    const sb = [...bb];
                                    for (let kb = 0; kb < sb.length; kb++) sb[kb] = kb < cb.misses ? "miss" : "pending";
                                    return sb
                                  })))
                                }));
                                return () => {
                                  bb();
                                  for (const bb of Qb.current) clearTimeout(bb);
                                  Qb.current = []
                                }
                              }), [eb]), (0, Ub.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Ub.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Wb.map(((bb, cb) => (0, Ub.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, cb)))
                                }), (0, Ub.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Ub.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ub.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Ub.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: sb
                                    })]
                                  }), Xb && (0, Ub.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Ub.jsx)(ab.d, {
                                      text: [{
                                        icon: Xb
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Hb.length > 0 && (0, Ub.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Hb.map(((bb, cb) => (0, Ub.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, cb)))
                                }), (0, Ub.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Ub.jsx)(ab.d, {
                                    text: Mb
                                  })
                                })]
                              })
                            }));

                          function eb(bb) {
                            let {
                              qte: cb
                            } = bb;
                            switch (cb.type) {
                              case "progressBar":
                                return (0, Ub.jsx)(Ib, {
                                  initialParameters: cb.parameters
                                });
                              case "timedClick":
                                return (0, Ub.jsx)(Xb, {
                                  initialParameters: cb.parameters
                                });
                              case "gravityBar":
                                return (0, Ub.jsx)(nb, {
                                  initialParameters: cb.parameters
                                });
                              case "precisionBar":
                                return (0, Ub.jsx)(lb, {
                                  initialParameters: cb.parameters
                                });
                              case "rhythmClick":
                                return (0, Ub.jsx)(Qb, {
                                  initialParameters: cb.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Cb = (0, kb.memo)((function() {
                            const [bb, cb] = (0, kb.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Wb.f)("qteStateUpdated", (bb => {
                              cb(bb)
                            })), bb.isActive && bb.type ? (0, Ub.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Ub.jsx)(eb, {
                                qte: bb
                              })
                            }) : null
                          }))
                        }, 4486: (bb, cb, sb) => {
                          sb.d(cb, {
                            d: () => Ub,
                            f: () => Ib
                          });
                          var kb = sb(64),
                            Wb = sb(1291),
                            ab = sb(4493);
                          const Tb = {
                              getState: () => ab.c.getCurrentState(),
                              onFrame: Wb.k
                            },
                            Ub = (0, kb.createContext)(Tb);

                          function Ib() {
                            return (0, kb.useContext)(Ub)
                          }
                        }, 4561: (bb, cb, sb) => {
                          sb.d(cb, {
                            e: () => ib,
                            h: () => Eb
                          });
                          var kb = sb(4569),
                            Wb = sb(334);
                          const ab = 120,
                            Tb = 260,
                            Ub = 1.15,
                            Ib = 1.2,
                            Hb = 2,
                            fb = 1.08,
                            Mb = .8,
                            Xb = .95,
                            nb = 8,
                            mb = "[\"')\\]\u300d\u300f\uff09]*",
                            lb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mb}$`),
                            Qb = new RegExp(`[?\uff1f]${mb}$`),
                            eb = new RegExp(`[!\uff01]${mb}$`),
                            Cb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Nb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Vb = new RegExp(`[${Nb}]`),
                            Lb = new RegExp(`[${Nb}]|[^${Nb}]+`, "g"),
                            ub = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Yb(bb) {
                            let cb = 2166136261;
                            for (let sb = 0; sb < bb.length; sb++) cb ^= bb.charCodeAt(sb), cb = Math.imul(cb, 16777619);
                            return (cb >>> 0) / 4294967295 * 2 - 1
                          }

                          function hb(bb) {
                            var cb;
                            if (Vb.test(bb)) return 1;
                            const sb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              kb = sb.replace(/[^0-9]/g, "");
                            if (kb.length > 0 && !/\p{L}/u.test(sb)) return Math.min(kb.length, 4);
                            const Wb = null !== (cb = sb.match(ub)) && void 0 !== cb ? cb : [];
                            if (0 === Wb.length) {
                              var ab, Tb;
                              const bb = null !== (ab = null === (Tb = sb.match(/\p{L}/gu)) || void 0 === Tb ? void 0 : Tb.length) && void 0 !== ab ? ab : 0;
                              return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), nb)
                            }
                            const Ub = sb.replace(/[^\p{L}]/gu, ""),
                              Ib = Wb.length > 1 && "e" === Wb.at(-1) && Ub.endsWith("e") && !Ub.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Wb.length - (Ib ? 1 : 0), nb)
                          }

                          function Jb(bb) {
                            return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function gb(bb) {
                            const cb = bb.replace(/[^\p{L}]/gu, "");
                            return cb.length >= 2 && cb === cb.toUpperCase() && cb !== cb.toLowerCase()
                          }

                          function Bb(bb, cb) {
                            var sb;
                            const nb = cb && (0, kb.g)(cb),
                              mb = null !== (sb = null === nb || void 0 === nb ? void 0 : nb.syllableMs) && void 0 !== sb ? sb : kb.b,
                              Nb = function(bb) {
                                const cb = [];
                                for (const kb of (0, Wb.ic)(bb))
                                  if ("string" === typeof kb)
                                    for (const bb of kb.split(/(\s+)/)) {
                                      if ("" === bb) continue;
                                      if (/^\s+$/.test(bb)) {
                                        cb.push({
                                          kind: "space",
                                          text: bb
                                        });
                                        continue
                                      }
                                      if (!Vb.test(bb)) {
                                        cb.push({
                                          kind: "word",
                                          text: bb,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let kb = !0;
                                      for (const Wb of null !== (sb = bb.match(Lb)) && void 0 !== sb ? sb : []) {
                                        var sb;
                                        const bb = cb.at(-1);
                                        kb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Vb.test(Wb) || /[\p{L}\p{N}]/u.test(Wb) ? (kb || cb.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), cb.push({
                                          kind: "word",
                                          text: Wb,
                                          delayMs: 0
                                        }), kb = !1) : bb.text += Wb
                                      }
                                    } else cb.push({
                                      kind: "icon",
                                      text: kb.icon,
                                      delayMs: 0
                                    });
                                return cb
                              }(bb),
                              ub = [];
                            let Bb = [];
                            for (const kb of Nb) "space" !== kb.kind && (Bb.push(kb), lb.test(kb.text) && (ub.push(Bb), Bb = []));
                            ub.push(Bb);
                            const tb = [];
                            let yb = 0;
                            for (const kb of ub) {
                              var Pb, Db;
                              const bb = null !== (Pb = null === (Db = kb.at(-1)) || void 0 === Db ? void 0 : Db.text) && void 0 !== Pb ? Pb : "",
                                cb = Qb.test(bb),
                                sb = eb.test(bb),
                                Wb = kb.map((bb => "word" === bb.kind ? hb(bb.text) : 1)),
                                Nb = Wb.findLastIndex((bb => bb > 0));
                              for (const [Qb, eb] of kb.entries()) {
                                const bb = "word" === eb.kind,
                                  kb = Wb[Qb];
                                eb.delayMs = yb;
                                for (let Wb = 0; nb && Wb < kb; Wb++) {
                                  const {
                                    intonation: ab
                                  } = nb;
                                  let Tb = Nb > 0 ? -ab.declineSemitones * (Qb / Nb) : 0;
                                  Tb += Yb(`${Jb(eb.text)}|${Wb}`) * ab.variationSemitones;
                                  const lb = Math.min(1, ab.variationSemitones);
                                  let Cb = nb.glideSemitones,
                                    Vb = 1;
                                  sb && (Tb += ab.exclaimLiftSemitones, Vb *= Ub), cb && Qb === Nb && (Tb += ab.questionRiseSemitones * (kb > 1 ? .5 + .5 * Wb / (kb - 1) : 1), Wb === kb - 1 && (Cb = Math.abs(Cb) + ab.questionRiseSemitones / 2)), bb && gb(eb.text) && (Tb += Hb * lb, Vb *= Ib), kb > 1 && 0 === Wb && (Tb += Mb * lb, Vb *= fb), tb.push({
                                    atMs: yb + Wb * mb,
                                    semitones: Tb,
                                    glideSemitones: Cb,
                                    durationMs: Wb < kb - 1 ? Math.min(nb.durationMs, mb * Xb) : nb.durationMs,
                                    level: Vb
                                  })
                                }
                                yb += kb * mb + (lb.test(eb.text) ? Tb : Cb.test(eb.text) ? ab : 0)
                              }
                            }
                            return {
                              pieces: Nb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
                                kind: "icon",
                                icon: bb.text,
                                delayMs: bb.delayMs
                              } : {
                                kind: "word",
                                text: bb.text,
                                delayMs: bb.delayMs
                              })),
                              blips: tb
                            }
                          }
                          var tb = sb(1197),
                            yb = sb(1258),
                            Pb = sb(1876);

                          function Db(bb) {
                            if ("string" === typeof bb) return bb;
                            const cb = yb.e.get().getCurrentLanguageCode();
                            return (0, tb.q)(cb, bb.translationKey, (0, tb.p)(bb.params, Pb.b.shown))
                          }

                          function Eb(bb) {
                            const cb = void 0 === bb.voice ? null : (0, kb.i)(bb.voice),
                              sb = cb && (0, kb.g)(cb);
                            return {
                              plan: Bb(Db(bb.line), sb),
                              synth: sb
                            }
                          }

                          function ib(bb) {
                            const cb = [];
                            let sb = [];
                            for (const [Wb, ab] of bb.entries()) {
                              var kb;
                              "space" === ab.kind && (" " !== ab.text || "icon" !== (null === (kb = bb[Wb + 1]) || void 0 === kb ? void 0 : kb.kind)) ? (sb.length > 0 && cb.push(sb), cb.push([ab]), sb = []) : sb.push(ab)
                            }
                            return sb.length > 0 && cb.push(sb), cb
                          }
                        }, 4576: (bb, cb, sb) => {
                          sb.d(cb, {
                            d: () => fb,
                            g: () => Mb
                          });
                          var kb = sb(4579),
                            Wb = sb(19);
                          const ab = .25,
                            Tb = .85,
                            Ub = .02,
                            Ib = .01;

                          function Hb(bb, cb, sb, kb, Wb, ab, Ub) {
                            const {
                              waveform: Ib,
                              pitchHz: Hb,
                              attackMs: fb,
                              releaseMs: Mb,
                              lowpassHz: Xb
                            } = sb, nb = Wb + kb.durationMs / 1e3, mb = Hb * 2 ** (kb.semitones / 12), lb = bb.createOscillator();
                            lb.type = Ib, lb.frequency.setValueAtTime(mb, Wb), lb.frequency.exponentialRampToValueAtTime(mb * 2 ** (kb.glideSemitones / 12), nb);
                            const Qb = Wb + Math.min(fb, kb.durationMs) / 1e3,
                              eb = bb.createGain();
                            eb.gain.setValueAtTime(0, Wb), eb.gain.linearRampToValueAtTime(ab, Qb), eb.gain.linearRampToValueAtTime(ab * Tb, Math.max(Qb, nb - Mb / 1e3)), eb.gain.linearRampToValueAtTime(0, nb);
                            const Cb = [lb];
                            if (null !== Xb) {
                              const cb = bb.createBiquadFilter();
                              cb.type = "lowpass", cb.frequency.value = Xb, Cb.push(cb)
                            }
                            Cb.push(eb, cb);
                            for (let Tb = 1; Tb < Cb.length; Tb++) Cb[Tb - 1].connect(Cb[Tb]);
                            return lb.onended = () => {
                              for (const bb of Cb.slice(0, -1)) bb.disconnect();
                              Ub()
                            }, lb.start(Wb), lb.stop(nb), lb
                          }

                          function fb(bb, cb, sb, kb, Wb, Tb) {
                            if (0 === kb.length) return Tb(), () => {};
                            const fb = ab * sb.volume * Wb,
                              Mb = bb.createGain();
                            Mb.connect(cb);
                            const Xb = bb.currentTime + Ub,
                              nb = new Set;
                            for (const ab of kb) {
                              const cb = Hb(bb, Mb, sb, ab, Xb + ab.atMs / 1e3, fb * ab.level, (() => {
                                nb.delete(cb), 0 === nb.size && (Mb.disconnect(), Tb())
                              }));
                              nb.add(cb)
                            }
                            return () => {
                              const cb = bb.currentTime;
                              Mb.gain.setTargetAtTime(0, cb, Ib);
                              for (const bb of nb) try {
                                bb.stop(cb + 5 * Ib)
                              } catch {}
                            }
                          }

                          function Mb(bb, cb) {
                            var sb;
                            const ab = kb.Howler.ctx,
                              Tb = kb.Howler.masterGain;
                            if (!ab || !Tb || !Wb.d.get("soundOnFromAd")) return () => {};
                            const Ub = kb.Howler;
                            return null === (sb = Ub._autoResume) || void 0 === sb || sb.call(Ub), fb(ab, Tb, bb, cb, Wb.d.get("soundVolume"), (() => {
                              var bb;
                              null === (bb = Ub._autoSuspend) || void 0 === bb || bb.call(Ub)
                            }))
                          }
                        }, 4579: (bb, cb, sb) => {
                          sb.r(cb), sb.d(cb, {
                            Howl: () => Wb.Howl,
                            Howler: () => Wb.Howler,
                            iosAudio: () => Ib,
                            musicOutput: () => Qb,
                            readyAudioContext: () => eb
                          });
                          var kb, Wb = sb(4585),
                            ab = sb(117);
                          const Tb = Wb.Howler;
                          let Ub;

                          function Ib() {
                            return Ub ??= "ios" === (0, ab.getOperatingSystem)(), Ub
                          }

                          function Hb() {
                            var bb, cb;
                            if (Tb.ctx || !Tb.usingWebAudio || "undefined" === typeof AudioContext || !Ib()) return;
                            const sb = navigator.audioSession;
                            let kb;
                            "auto" === (null === sb || void 0 === sb ? void 0 : sb.type) && (sb.type = "ambient");
                            try {
                              kb = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Wb = kb.createGain();
                            Wb.gain.setValueAtTime(Tb._muted ? 0 : null !== (bb = Tb._volume) && void 0 !== bb ? bb : 1, kb.currentTime), Wb.connect(kb.destination), Tb.ctx = kb, Tb.masterGain = Wb, null === (cb = Tb._setup) || void 0 === cb || cb.call(Tb)
                          }
                          Tb._mobileUnloaded = !0;
                          const fb = Tb.volume.bind(Wb.Howler);
                          Tb.volume = function() {
                            return Hb(), fb(...arguments)
                          };
                          const Mb = Tb.mute.bind(Wb.Howler);
                          Tb.mute = bb => (Hb(), Mb(bb));
                          const Xb = Wb.Howl.prototype,
                            nb = Xb.init;
                          Xb.init = function(bb) {
                            return Hb(), nb.call(this, bb)
                          };
                          let mb = 0;
                          const lb = null === (kb = Tb._autoSuspend) || void 0 === kb ? void 0 : kb.bind(Wb.Howler);

                          function Qb() {
                            eb();
                            const {
                              ctx: bb,
                              masterGain: cb
                            } = Tb;
                            return bb && cb ? {
                              ctx: bb,
                              destination: cb,
                              holdAwake: bb => {
                                var cb, sb;
                                (mb += bb ? 1 : -1, bb) ? null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb): null === (sb = Tb._autoSuspend) || void 0 === sb || sb.call(Tb)
                              },
                              wake: () => {
                                var cb;
                                "running" !== bb.state && (null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb), bb.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function eb() {
                            var bb;
                            (Tb.volume(), Tb.ctx && Tb.autoUnlock) && (null === (bb = Tb._unlockAudio) || void 0 === bb || bb.call(Tb))
                          }
                          lb && (Tb._autoSuspend = () => mb > 0 ? Wb.Howler : lb())
                        }, 4588: (bb, cb, sb) => {
                          function kb(bb) {
                            return {
                              notAfter: bb
                            }
                          }
                          sb.d(cb, {
                            d: () => Ib,
                            e: () => Hb,
                            h: () => Ub,
                            i: () => kb,
                            m: () => Wb,
                            o: () => ab,
                            q: () => Tb,
                            t: () => fb,
                            u: () => Mb
                          });
                          const Wb = kb("\\w$."),
                            ab = kb("\\w.,");

                          function Tb(bb) {
                            return cb => Ib(cb, bb)
                          }

                          function Ub(bb) {
                            return cb => !bb.test(cb.input.slice(0, cb.index))
                          }

                          function Ib(bb, cb) {
                            return bb.index > 0 && new RegExp(`[${cb}]`).test(bb.input[bb.index - 1])
                          }

                          function Hb(bb, cb, sb) {
                            return function(bb) {
                              return void 0 !== bb && "function" !== typeof bb
                            }(sb) ? function(bb, cb, sb) {
                              const kb = cb.flags.replace(/[gy]/g, ""),
                                Wb = new RegExp(`[^${sb}](?:${cb.source})`, `${kb}g`),
                                ab = [],
                                Tb = sb => {
                                  const kb = sb.index + sb[0].length;
                                  return ("" === sb[0] ? Xb(bb, cb, kb) : kb) - 1
                                },
                                Ub = new RegExp(`(?:${cb.source})`, `${kb}y`).exec(bb);
                              if (Ub) {
                                if (ab.push(Ub), !cb.global) return ab;
                                Wb.lastIndex = Tb(Ub)
                              }
                              for (let Ib = Wb.exec(bb); Ib; Ib = Wb.exec(bb)) {
                                const sb = Xb(bb, cb, Ib.index) - Ib.index;
                                if (Ib[0] = Ib[0].slice(sb), Ib.index += sb, ab.push(Ib), !cb.global) break;
                                Wb.lastIndex = Tb(Ib)
                              }
                              return ab
                            }(bb, cb, sb.notAfter) : function(bb, cb, sb) {
                              const kb = new RegExp(cb.source, `${cb.flags.replace(/[gy]/g,"")}g`),
                                Wb = [];
                              for (let ab = kb.exec(bb); ab; ab = kb.exec(bb))
                                if (!sb || sb(ab)) {
                                  if (Wb.push(ab), !cb.global) break;
                                  "" === ab[0] && (kb.lastIndex = Xb(bb, cb, kb.lastIndex))
                                } else kb.lastIndex = Xb(bb, cb, ab.index);
                              return Wb
                            }(bb, cb, sb)
                          }

                          function fb(bb, cb, sb, kb) {
                            let Wb = "",
                              ab = 0;
                            for (const Tb of Hb(bb, cb, sb)) Wb += bb.slice(ab, Tb.index) + kb(Tb), ab = Tb.index + Tb[0].length;
                            return Wb + bb.slice(ab)
                          }

                          function Mb(bb, cb, sb) {
                            const kb = [];
                            let Wb = 0;
                            for (const ab of Hb(bb, cb, sb)) kb.push(bb.slice(Wb, ab.index)), Wb = ab.index + ab[0].length;
                            return [...kb, bb.slice(Wb)]
                          }

                          function Xb(bb, cb, sb) {
                            var kb;
                            return sb + (cb.unicode && (null !== (kb = bb.codePointAt(sb)) && void 0 !== kb ? kb : 0) > 65535 ? 2 : 1)
                          }
                        }, 4545: (bb, cb, sb) => {
                          sb.d(cb, {
                            B: () => nb,
                            e: () => Wb,
                            h: () => Ib,
                            j: () => ab,
                            m: () => Tb,
                            n: () => Ub,
                            r: () => Qb,
                            v: () => fb,
                            x: () => Mb,
                            z: () => lb
                          });
                          var kb = sb(1572);
                          const Wb = 24e3,
                            ab = "/docs/llms.txt",
                            Tb = `${kb.e}${ab}`,
                            Ub = "/llms.txt",
                            Ib = "/docs/llms-full.txt";

                          function Hb(bb) {
                            return bb || "index"
                          }

                          function fb(bb) {
                            return `/docs/${Hb(bb)}.md`
                          }

                          function Mb(bb, cb) {
                            return `/docs/${Hb(bb)}/${cb+1}.md`
                          }
                          const Xb = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function nb(bb) {
                            const cb = Xb.exec(bb);
                            return null === cb ? null : {
                              name: cb[1],
                              part: void 0 === cb[2] ? null : Number(cb[2])
                            }
                          }
                          const mb = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function lb(bb) {
                            const cb = mb.exec(bb);
                            if (null === cb) return null;
                            const [, sb = "", kb] = cb;
                            return void 0 === kb ? fb(sb) : Mb(sb, Number(kb) - 1)
                          }

                          function Qb(bb) {
                            return `/docsHtml/${Hb(bb)}.html`
                          }
                        }, 4569: (bb, cb, sb) => {
                          sb.d(cb, {
                            b: () => Wb,
                            e: () => kb,
                            f: () => ab,
                            g: () => Ib,
                            i: () => Tb
                          });
                          const kb = ["sine", "triangle", "square", "sawtooth"],
                            Wb = 55,
                            ab = {
                              soft: {
                                waveform: "sine",
                                pitchHz: 300,
                                glideSemitones: -.5,
                                durationMs: 80,
                                attackMs: 6,
                                releaseMs: 18,
                                lowpassHz: null,
                                volume: .6,
                                intonation: {
                                  variationSemitones: 1.2,
                                  declineSemitones: 1.5,
                                  questionRiseSemitones: 3.5,
                                  exclaimLiftSemitones: 1.5
                                },
                                syllableMs: 60
                              },
                              regular: {
                                waveform: "triangle",
                                pitchHz: 195,
                                glideSemitones: -.6,
                                durationMs: 70,
                                attackMs: 2,
                                releaseMs: 12,
                                lowpassHz: null,
                                volume: 1,
                                intonation: {
                                  variationSemitones: 1.5,
                                  declineSemitones: 2,
                                  questionRiseSemitones: 4,
                                  exclaimLiftSemitones: 2
                                },
                                syllableMs: 52
                              },
                              dark: {
                                waveform: "sawtooth",
                                pitchHz: 80,
                                glideSemitones: -.6,
                                durationMs: 85,
                                attackMs: 6,
                                releaseMs: 16,
                                lowpassHz: 420,
                                volume: 1.05,
                                intonation: {
                                  variationSemitones: 1,
                                  declineSemitones: 3.5,
                                  questionRiseSemitones: 2.5,
                                  exclaimLiftSemitones: 1
                                },
                                syllableMs: 64
                              },
                              "high-pitched": {
                                waveform: "triangle",
                                pitchHz: 300,
                                glideSemitones: -.8,
                                durationMs: 55,
                                attackMs: 2,
                                releaseMs: 10,
                                lowpassHz: null,
                                volume: .8,
                                intonation: {
                                  variationSemitones: 2.2,
                                  declineSemitones: 2,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 3
                                },
                                syllableMs: 44
                              },
                              gruff: {
                                waveform: "sawtooth",
                                pitchHz: 105,
                                glideSemitones: -.8,
                                durationMs: 75,
                                attackMs: 4,
                                releaseMs: 14,
                                lowpassHz: 900,
                                volume: .85,
                                intonation: {
                                  variationSemitones: 1.2,
                                  declineSemitones: 3,
                                  questionRiseSemitones: 3,
                                  exclaimLiftSemitones: 2
                                },
                                syllableMs: 58
                              },
                              lively: {
                                waveform: "square",
                                pitchHz: 230,
                                glideSemitones: .6,
                                durationMs: 55,
                                attackMs: 2,
                                releaseMs: 10,
                                lowpassHz: 2400,
                                volume: .5,
                                intonation: {
                                  variationSemitones: 2.6,
                                  declineSemitones: 1.5,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 3.5
                                },
                                syllableMs: 44
                              },
                              posh: {
                                waveform: "triangle",
                                pitchHz: 175,
                                glideSemitones: 1.2,
                                durationMs: 90,
                                attackMs: 6,
                                releaseMs: 20,
                                lowpassHz: 2e3,
                                volume: 1,
                                intonation: {
                                  variationSemitones: 2,
                                  declineSemitones: 4,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 2.5
                                },
                                syllableMs: 60
                              },
                              mechanical: {
                                waveform: "square",
                                pitchHz: 140,
                                glideSemitones: 0,
                                durationMs: 60,
                                attackMs: 0,
                                releaseMs: 4,
                                lowpassHz: 1400,
                                volume: .55,
                                intonation: {
                                  variationSemitones: 0,
                                  declineSemitones: 0,
                                  questionRiseSemitones: 0,
                                  exclaimLiftSemitones: 0
                                },
                                syllableMs: 62
                              }
                            };

                          function Tb(bb) {
                            return "string" !== typeof bb ? bb : Object.hasOwn(ab, bb) ? ab[bb] : null
                          }

                          function Ub(bb, cb, sb) {
                            return Math.min(sb, Math.max(cb, bb))
                          }

                          function Ib(bb) {
                            const cb = Ub(bb.durationMs, 10, 500),
                              sb = Ub(bb.attackMs, 0, cb),
                              {
                                intonation: Wb
                              } = bb;
                            return {
                              waveform: kb.includes(bb.waveform) ? bb.waveform : "sine",
                              pitchHz: Ub(bb.pitchHz, 20, 4e3),
                              glideSemitones: Ub(bb.glideSemitones, -24, 24),
                              durationMs: cb,
                              attackMs: sb,
                              releaseMs: Ub(bb.releaseMs, 0, cb - sb),
                              lowpassHz: null === bb.lowpassHz ? null : Ub(bb.lowpassHz, 20, 2e4),
                              volume: Ub(bb.volume, 0, 2),
                              intonation: {
                                variationSemitones: Ub(Wb.variationSemitones, 0, 6),
                                declineSemitones: Ub(Wb.declineSemitones, 0, 12),
                                questionRiseSemitones: Ub(Wb.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Ub(Wb.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Ub(bb.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const bb in modules) Object.freeze(modules[bb]);