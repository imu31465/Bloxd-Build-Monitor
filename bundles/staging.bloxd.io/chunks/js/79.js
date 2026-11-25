export const id = 79;
export const ids = [79, 95];
export const modules = {
    5e3: (tt, et, Vt) => {
      Vt.d(et, {
        e: () => yt,
        f: () => Nt
      });
      var Ot = Vt(1140),
        qt = Vt.n(Ot),
        Dt = Vt(63),
        mt = Vt(1286),
        dt = Vt(5003),
        jt = Vt(2001),
        Ht = Vt(2498),
        Xt = Vt(5010),
        Qt = Vt(1188);
      const lt = new WeakMap;
      let Et = 0;

      function ft(tt) {
        let et = lt.get(tt);
        return void 0 === et && (et = Et++, lt.set(tt, et)), et
      }

      function wt(tt) {
        let {
          piece: et
        } = tt;
        return "space" === et.kind ? (0, Qt.jsx)(Qt.Fragment, {
          children: et.text
        }) : (0, Qt.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${et.delayMs}ms`
          },
          children: (0, Qt.jsx)(dt.d, {
            text: "icon" === et.kind ? `[[${et.icon}]]` : et.text
          })
        })
      }

      function yt(tt) {
        let {
          display: et
        } = tt;
        const {
          selectedLanguage: Vt
        } = (0, mt.H)(), Ot = (0, Dt.useMemo)((() => (0, Xt.e)((0, Xt.f)(et).plan.pieces)), [et, Vt.code]);
        return (0, Qt.jsxs)("div", {
          className: qt()("Dialogue", {
            DialogueAnimateIn: !1 !== et.animateIn
          }),
          children: [et.speakerName && (0, Qt.jsx)(jt.e, {
            text: et.speakerName,
            className: "DialogueSpeaker"
          }), (0, Qt.jsx)("p", {
            className: "DialogueLine",
            children: Ot.map(((tt, et) => 1 === tt.length && "space" === tt[0].kind ? tt[0].text : (0, Qt.jsx)("span", {
              className: "DialogueGlue",
              children: tt.map(((tt, et) => (0, Qt.jsx)(wt, {
                piece: tt
              }, et)))
            }, et)))
          })]
        })
      }
      const Nt = (0, Dt.memo)((function() {
        const tt = (0, Ht.i)("dialogue");
        return (0, Qt.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: tt && (0, Qt.jsx)(yt, {
            display: tt
          }, ft(tt))
        })
      }))
    },
    4875: (tt, et, Vt) => {
        Vt.r(et), Vt.d(et, {
          default: () => tm
        });
        var Ot = Vt(63),
          qt = Vt(1140),
          Dt = Vt.n(qt),
          mt = Vt(1617),
          dt = Vt(1623),
          jt = Vt(26),
          Ht = Vt(83),
          Xt = Vt(4882),
          Qt = Vt(4894),
          lt = Vt(4903),
          Et = Vt(4472),
          ft = Vt(1188);
        const wt = "/textures/docs/icons";

        function yt(tt) {
          let {
            name: et,
            isTinted: Vt,
            className: Ot,
            style: qt
          } = tt;
          const mt = `${wt}/${et}.png`;
          return Vt ? (0, ft.jsxs)("span", {
            className: Dt()("DocsPixelIcon", "Tinted", Ot),
            "aria-hidden": "true",
            style: qt,
            children: [(0, ft.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${mt}")`,
                WebkitMaskImage: `url("${mt}")`
              }
            }), (0, ft.jsx)("img", {
              src: mt,
              alt: ""
            })]
          }) : (0, ft.jsx)("img", {
            className: Dt()("DocsPixelIcon", Ot),
            src: mt,
            alt: "",
            "aria-hidden": "true",
            style: qt
          })
        }
        const Nt = 1500;

        function Mt() {
          const [tt, et] = (0, Ot.useState)(null);
          (0, Ot.useEffect)((() => {
            if (null === tt) return;
            const Vt = setTimeout((() => {
              et(null)
            }), Nt);
            return () => {
              clearTimeout(Vt)
            }
          }), [tt]);
          return [tt, tt => {
            (0, Et.d)(tt).then((() => {
              et({
                text: tt,
                failed: !1
              })
            }), (Vt => {
              console.error("Could not copy to the clipboard", Vt), et({
                text: tt,
                failed: !0
              })
            }))
          }]
        }

        function bt(tt) {
          let {
            text: et,
            label: Vt,
            className: Ot
          } = tt;
          const [qt, mt] = Mt(), dt = !1 === (null === qt || void 0 === qt ? void 0 : qt.failed);
          return (0, ft.jsxs)("button", {
            type: "button",
            className: Dt()("DocsCopyButton", Ot, {
              Copied: dt
            }),
            title: `Copy ${et.length>40?"to clipboard":et}`,
            "aria-label": Vt ? void 0 : `Copy ${et}`,
            onClick: tt => {
              tt.stopPropagation(), mt(et)
            },
            children: [(0, ft.jsx)(yt, {
              name: dt ? "check" : "copy"
            }), Vt && (0, ft.jsx)("span", {
              children: dt ? "Copied" : null !== qt && void 0 !== qt && qt.failed ? "Copy failed" : Vt
            })]
          })
        }
        Xt.c.registerLanguage("javascript", Qt.e), Xt.c.registerLanguage("typescript", lt.b);
        const Jt = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Ct = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          ut = 24;

        function Kt(tt) {
          let {
            code: et,
            lang: Vt,
            compact: qt = !1
          } = tt;
          const mt = (0, Ot.useMemo)((() => function(tt, et) {
              const Vt = Jt[et];
              return Vt ? Xt.c.highlight(tt, {
                language: Vt
              }).value : tt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(et, Vt)), [et, Vt]),
            dt = et.split("\n").length,
            jt = !qt && dt > ut + 6,
            [Ht, Qt] = (0, Ot.useState)(!1),
            lt = Jt[Vt];
          return (0, ft.jsxs)("div", {
            className: Dt()("DocsCodeBlock", {
              Compact: qt,
              Collapsed: jt && !Ht
            }),
            children: [!qt && (0, ft.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, ft.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: lt ? Ct[lt] : "Text"
              }), (0, ft.jsx)(bt, {
                text: et,
                label: "Copy"
              })]
            }), (0, ft.jsx)("pre", {
              children: (0, ft.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: mt
                }
              })
            }), jt && (0, ft.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Ht,
              onClick: () => {
                Qt(!Ht)
              },
              children: [(0, ft.jsx)(yt, {
                name: Ht ? "chevron-up" : "chevron-down"
              }), Ht ? "Show less" : `Show all ${dt} lines`]
            })]
          })
        }
        var ht = Vt(4909);
        var vt = Vt(4914);
        const Wt = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function St(tt) {
          const et = new Map;
          let Vt, Ot = [],
            qt = !1;
          const Dt = () => {
            Vt && et.set(Vt.name, Vt.lines.join("\n").trimEnd())
          };
          for (const mt of tt.split("\n")) {
            const tt = mt.match(Wt);
            qt || mt.startsWith("/*") ? (qt || (Dt(), Vt = void 0), Ot.push(mt), qt = !mt.includes("*/")) : tt ? (Dt(), Vt = {
              name: tt[1],
              lines: [...Ot, mt]
            }, Ot = []) : Vt && (mt.startsWith(" ") || mt.startsWith("\t") || /^[}\])|]/.test(mt)) ? Vt.lines.push(mt) : Vt && "" !== mt.trim() && (Dt(), Vt = void 0)
          }
          return Dt(), et
        }

        function ct(tt) {
          return "methods" === tt || "callbacks" === tt || "settings" === tt
        }
        const Rt = {
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
              setterSnippet: (tt, et) => `api.setClientOption(playerId, "${tt}", ${et})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (tt, et) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${tt}", ${et})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (tt, et) => `api.setMobSetting(mobId, "${tt}", ${et})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (tt, et) => `api.setVehicleSetting(vehicleId, "${tt}", ${et})`
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
          It = {
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

        function Pt(tt) {
          return tt.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Zt(tt) {
          let et = !1;
          return tt.split("\n").map((tt => (tt.startsWith("```") && (et = !et), !et && /^#{3,} /.test(tt) ? tt.slice(1) : tt))).join("\n")
        }

        function Lt(tt) {
          return "readme" === tt ? "getting-started" : Pt(tt)
        }
        const Ft = "## Glossary of Referenced Types";
        const kt = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...vt.d.flatMap((tt => {
            const et = {
              id: tt.id,
              slug: Lt(tt.id),
              title: tt.title,
              markdown: tt.content,
              ...Rt[tt.id]
            };
            if ("readme" === tt.id) return function(tt) {
              const et = tt.markdown.indexOf(Ft),
                Vt = tt.markdown.indexOf("\n```", et),
                Ot = tt.markdown.indexOf("\n```", Vt + 1);
              if (-1 === et || -1 === Vt || -1 === Ot) throw new Error(`Getting started has no "${Ft}" section with a code block`);
              const qt = tt.markdown.slice(et + 31, Vt).trim(),
                Dt = [...St(tt.markdown.slice(tt.markdown.indexOf("\n", Vt + 1) + 1, Ot))].map((tt => {
                  let [et, Vt] = tt;
                  return `## ${et}\n\n\`\`\`ts\n${Vt}\n\`\`\`\n`
                })),
                mt = tt.markdown.slice(tt.markdown.indexOf("\n", Ot + 1) + 1);
              return [{
                ...tt,
                markdown: `${tt.markdown.slice(0,et)}${mt}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${qt}\n\n${Dt.join("\n")}`
              }]
            }(et);
            if ("howTo" === tt.id) {
              const {
                parent: tt,
                guides: Vt
              } = function(tt) {
                const [et, ...Vt] = tt.markdown.split(/^(?=## )/m), Ot = [et], qt = [];
                for (const mt of Vt) {
                  var Dt;
                  const et = mt.indexOf("\n"),
                    Vt = mt.slice(3, et).trim(),
                    dt = mt.slice(et + 1);
                  if (!dt.includes("```")) {
                    Ot.push(mt);
                    continue
                  }
                  const jt = null !== (Dt = It[Vt]) && void 0 !== Dt ? Dt : {
                    icon: "lightbulb",
                    summary: `How to use ${Vt.toLowerCase()} in World Code.`
                  };
                  qt.push({
                    id: `${tt.id}${Vt.split(/[^A-Za-z0-9]+/).map((tt=>tt.charAt(0).toUpperCase()+tt.slice(1))).join("")}`,
                    slug: `${tt.slug}-${Pt(Vt)}`,
                    title: Vt,
                    layout: "article",
                    sourceAnchor: (0, ht.v)(Vt),
                    markdown: `# ${Vt}\n\n${Zt(dt)}`,
                    ...jt
                  })
                }
                return {
                  parent: {
                    ...tt,
                    markdown: Ot.join(""),
                    childPageIds: qt.map((tt => tt.id))
                  },
                  guides: qt
                }
              }(et);
              return [tt, ...Vt]
            }
            return [et]
          }))],
          Gt = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...kt.filter((tt => void 0 !== tt.sourceAnchor)).map((tt => tt.id))]
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

        function zt(tt) {
          return kt.find((et => et.id === tt))
        }
        const ot = new Map;

        function rt(tt) {
          let et = ot.get(tt.id);
          return et || (et = (0, ht.C)(tt.markdown, "changelog" === tt.layout ? 3 : 2), ot.set(tt.id, et)), et
        }

        function Ut(tt, et) {
          return rt(tt).sections.some((tt => tt.heading.anchor === et || tt.blocks.some((tt => "heading" === tt.kind && tt.anchor === et))))
        }

        function At(tt) {
          const [et, ...Vt] = tt.replace(/^#/, "").split("-"), Ot = kt.find((tt => tt.id === et));
          if (!Ot) return null;
          const qt = Vt.length > 0 ? (0, ht.v)(Vt.join("-")) : "";
          for (const mt of null !== (Dt = Ot.childPageIds) && void 0 !== Dt ? Dt : []) {
            var Dt;
            const tt = zt(mt);
            if (tt.sourceAnchor === qt) return {
              page: tt,
              anchor: ""
            };
            if (Ut(tt, qt)) return {
              page: tt,
              anchor: qt
            }
          }
          return {
            page: Ot,
            anchor: qt
          }
        }
        const it = {
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

        function Yt(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ot = et.slug ? `${tt}/${et.slug}` : tt;
          return Vt ? `${Ot}#${Vt}` : Ot
        }
        var Bt = Vt(4935);
        const pt = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          xt = new Set(["GameApi", "Console", "_TypeOf"]),
          Tt = 4;

        function gt(tt) {
          let et = tt.length;
          for (; et > 0 && "" === tt[et - 1].trim();) et--;
          return tt.slice(0, et)
        }

        function st(tt) {
          var et;
          const Vt = gt(tt);
          if (null === (et = Vt.at(-1)) || void 0 === et || !et.trimEnd().endsWith("*/")) return {
            lines: Vt,
            doc: ""
          };
          const Ot = Vt.findLastIndex((tt => tt.startsWith("/**")));
          return -1 === Ot ? {
            lines: Vt,
            doc: ""
          } : {
            lines: gt(Vt.slice(0, Ot)),
            doc: Vt.slice(Ot).join("\n")
          }
        }

        function nt(tt) {
          var et;
          const Vt = tt.split("\n"),
            Ot = Vt.flatMap(((tt, et) => pt.test(tt) ? [et] : []));
          let qt = st(Vt.slice(0, null !== (et = Ot[0]) && void 0 !== et ? et : Vt.length)).doc;
          return Ot.map(((tt, et) => {
            var Dt;
            const mt = st(Vt.slice(tt, null !== (Dt = Ot[et + 1]) && void 0 !== Dt ? Dt : Vt.length)),
              dt = {
                name: Vt[tt].match(pt)[1],
                doc: qt,
                lines: mt.lines
              };
            return qt = mt.doc, dt
          }))
        }

        function te(tt) {
          var et;
          const Vt = tt.match(/^readonly \[([\s\S]*)\]$/);
          return Vt ? null !== (et = Vt[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== et ? et : [] : null
        }

        function ee(tt) {
          if (!tt.startsWith("{") || !tt.endsWith("}")) return null;
          const et = {
              keys: [],
              values: []
            },
            Vt = tt => {
              const Vt = tt.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Vt && (et.keys.push(Vt[1].startsWith('"') ? Vt[1] : `"${Vt[1]}"`), et.values.push(Vt[2].trim()))
            };
          let Ot = 0,
            qt = "";
          for (const Dt of tt.slice(1, -1)) "{[(".includes(Dt) ? Ot++ : "}])".includes(Dt) && Ot--, ";" === Dt && 0 === Ot ? (Vt(qt), qt = "") : qt += Dt;
          return Vt(qt), et
        }

        function Ve(tt) {
          return tt.length > Tt ? `\n\t| ${tt.join("\n\t| ")}` : tt.join(" | ")
        }

        function Oe(tt, et) {
          const Vt = function(tt, et) {
            return tt.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((tt, Vt) => {
              var Ot;
              const qt = null === (Ot = et.get(Vt)) || void 0 === Ot ? void 0 : Ot.object;
              return qt ? Ve(qt.values) : tt
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((tt, Vt) => {
              var Ot, qt;
              const Dt = null === (Ot = et.get(Vt)) || void 0 === Ot || null === (qt = Ot.object) || void 0 === qt ? void 0 : qt.values.map(te);
              return null !== Dt && void 0 !== Dt && Dt.every((tt => null !== tt)) ? Ve([...new Set(Dt.flat())]) : tt
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((tt, Vt) => {
              var Ot;
              const qt = null === (Ot = et.get(Vt)) || void 0 === Ot ? void 0 : Ot.members;
              return qt ? Ve(qt) : tt
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((tt, Vt) => {
              var Ot;
              const qt = null === (Ot = et.get(Vt)) || void 0 === Ot ? void 0 : Ot.object;
              return qt ? Ve(qt.keys) : tt
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((tt, Vt) => {
              var Ot, qt;
              return null !== (Ot = null === (qt = et.get(Vt)) || void 0 === qt ? void 0 : qt.text) && void 0 !== Ot ? Ot : tt
            }))
          }(tt.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), et);
          return [tt.doc, Vt].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function qe(tt) {
          const et = nt(tt),
            Vt = function(tt) {
              const et = new Map,
                Vt = tt.find((tt => "_TypeOf" === tt.name));
              let Ot = null;
              const qt = () => {
                if (Ot) {
                  const tt = Ot.lines.join("\n");
                  et.set(Ot.name, {
                    text: tt,
                    members: te(tt),
                    object: ee(tt)
                  })
                }
              };
              for (const Dt of Vt.lines.slice(1, -1)) {
                const tt = Dt.match(/^\t([\w$]+): (.+)$/);
                tt ? (qt(), Ot = {
                  name: tt[1],
                  lines: [tt[2]]
                }) : Ot && Ot.lines.push(Dt.replace(/^\t/, ""))
              }
              return qt(), et
            }(et),
            Ot = new Map;
          for (const qt of et) xt.has(qt.name) || Ot.has(qt.name) || Ot.set(qt.name, Oe(qt, Vt));
          return Ot
        }
        let De, me, de;

        function je() {
          return me ??= function(tt) {
            const et = nt(tt).find((tt => "GameApi" === tt.name)),
              Vt = new Map,
              Ot = et.lines;
            for (let Dt = 0; Dt < Ot.length; Dt++) {
              var qt;
              if (!Ot[Dt].trimStart().startsWith("/**")) continue;
              const tt = Dt;
              for (; Dt < Ot.length && !Ot[Dt].includes("*/");) Dt++;
              const et = null === (qt = Ot[Dt + 1]) || void 0 === qt ? void 0 : qt.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!et) continue;
              let mt = null;
              const dt = [];
              let jt = "description",
                Ht = !1;
              for (const Vt of Ot.slice(tt, Dt + 1).join("\n").split("\n").map((tt => tt.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const tt = Vt.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                tt ? (mt = tt[1].trim(), jt = "deprecation") : Vt.startsWith("@") ? (jt = "otherTag", Ht = !0) : "" === Vt.trim() ? Ht || (jt = "description", dt.push(Vt)) : "deprecation" !== jt || /^[A-Z]/.test(Vt.trim()) ? "otherTag" !== jt && (jt = "description", dt.push(Vt)) : mt = `${mt} ${Vt.trim()}`.trim()
              }
              Vt.set(et[1], {
                deprecation: mt,
                description: dt.join("\n").trim()
              })
            }
            return Vt
          }(Bt.default), me
        }

        function He() {
          if (!de) {
            de = new Map;
            for (const tt of kt) {
              const et = (0, ht.z)(rt(tt)).flatMap((tt => tt.blocks));
              for (const tt of (0, ht.l)(et))
                if ("ts" === tt.lang || "typescript" === tt.lang)
                  for (const [et, Vt] of St(tt.code)) de.set(et, Vt)
            }
            for (const [tt, et] of(De ??= qe(Bt.default), De)) de.has(tt) || de.set(tt, et)
          }
          return de
        }
        const Xe = {
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
        let Qe;

        function le() {
          if (!Qe) {
            Qe = new Map;
            for (const tt of kt)
              if (ct(tt.layout))
                for (const et of rt(tt).sections) Qe.has(et.heading.text) || Qe.set(et.heading.text, {
                  pageId: tt.id,
                  anchor: et.heading.anchor
                })
          }
          return Qe
        }

        function Ee(tt) {
          const et = tt.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return et ? le().get(et[1]) : void 0
        }
        const fe = (0, Ot.createContext)("/docs"),
          we = (0, Ot.createContext)(null),
          ye = (0, Ot.createContext)(!1),
          Ne = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function ae(tt) {
          const et = tt.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return et ? et[1] : null
        }

        function Me(tt) {
          let {
            colour: et
          } = tt;
          return (0, ft.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: et
            },
            "aria-hidden": "true"
          })
        }

        function be(tt) {
          const et = [];
          let Vt = 0;
          for (const Ot of tt.matchAll(Ne)) et.push(tt.slice(Vt, Ot.index), (0, ft.jsx)(Me, {
            colour: Ot[0]
          }), Ot[0]), Vt = Ot.index + Ot[0].length;
          return et.push(tt.slice(Vt)), et
        }

        function Je(tt) {
          let {
            href: et,
            children: Vt
          } = tt;
          const qt = (0, Ot.useContext)(fe);
          if (et.startsWith("#")) {
            const tt = At(et);
            if (tt) return (0, ft.jsx)(mt.b, {
              to: Yt(qt, tt.page, tt.anchor),
              children: (0, ft.jsx)(ye.Provider, {
                value: !0,
                children: Vt
              })
            })
          }
          return (0, ft.jsx)("a", {
            href: et,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, ft.jsx)(ye.Provider, {
              value: !0,
              children: Vt
            })
          })
        }

        function Ce(tt) {
          let {
            code: et
          } = tt;
          const Vt = (0, Ot.useContext)(fe);
          if ((0, Ot.useContext)(ye)) return (0, ft.jsx)("code", {
            className: "DocsInlineCode",
            children: et
          });
          if (He().has(et)) return (0, ft.jsx)(ve, {
            type: et
          });
          const qt = Ee(et);
          if (qt) return (0, ft.jsx)(mt.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Yt(Vt, zt(qt.pageId), qt.anchor),
            children: et
          });
          const Dt = ae(et);
          return (0, ft.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Dt && (0, ft.jsx)(Me, {
              colour: Dt
            }), et]
          })
        }

        function ue(tt) {
          let {
            text: et
          } = tt;
          const Vt = [];
          let qt = 0;
          for (const Ot of et.matchAll(ht.g)) {
            Ot.index > qt && Vt.push(...be(et.slice(qt, Ot.index)));
            const [, tt, Dt, mt, dt, jt] = Ot;
            tt ? Vt.push((0, ft.jsx)(Ce, {
              code: (0, ht.p)(tt, Dt)
            })) : mt ? Vt.push((0, ft.jsx)("strong", {
              children: (0, ft.jsx)(ue, {
                text: mt
              })
            })) : Vt.push((0, ft.jsx)(Je, {
              href: jt,
              children: (0, ft.jsx)(ue, {
                text: dt
              })
            })), qt = Ot.index + Ot[0].length
          }
          return qt < et.length && Vt.push(...be(et.slice(qt))), (0, ft.jsx)(ft.Fragment, {
            children: Vt.map(((tt, et) => (0, ft.jsx)(Ot.Fragment, {
              children: tt
            }, et)))
          })
        }
        const Ke = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          he = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function ve(tt) {
          let {
            type: et
          } = tt;
          const Vt = He(),
            qt = [];
          for (const Ot of et.trim().matchAll(Ke)) {
            const [tt, et, Dt, mt, dt] = Ot;
            et ? qt.push((0, ft.jsx)("span", {
              className: "DocsTypeString",
              children: tt
            })) : Dt && Vt.has(Dt) ? qt.push((0, ft.jsx)(Ie, {
              name: Dt,
              definition: Vt.get(Dt)
            })) : Dt ? qt.push((0, ft.jsx)("span", {
              className: he.has(Dt) ? "DocsTypeKeyword" : "DocsTypeName",
              children: tt
            })) : mt ? qt.push((0, ft.jsx)("span", {
              className: "DocsTypeNumber",
              children: tt
            })) : dt ? qt.push(" ") : qt.push((0, ft.jsx)("span", {
              className: "DocsTypePunctuation",
              children: tt
            }))
          }
          return (0, ft.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: qt.map(((tt, et) => (0, ft.jsx)(Ot.Fragment, {
              children: tt
            }, et)))
          })
        }
        const We = 480,
          Se = 6,
          ce = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Re = 0;

        function Ie(tt) {
          let {
            name: et,
            definition: Vt
          } = tt;
          const qt = (0, Ot.useContext)(fe),
            Dt = Xe[et],
            dt = (0, Ot.useRef)(null),
            jt = (0, Ot.useRef)(null),
            Xt = (0, Ot.useRef)(null),
            [Qt, lt] = (0, Ot.useState)(!1),
            [Et, wt] = (0, Ot.useState)(null),
            Nt = (0, Ot.useRef)(),
            Mt = (0, Ot.useContext)(we),
            [bt] = (0, Ot.useState)((() => "DocsTypePopover-" + Re++)),
            Jt = () => {
              clearTimeout(Nt.current), lt(!0)
            },
            Ct = () => {
              clearTimeout(Nt.current), Nt.current = setTimeout((() => {
                lt(!1)
              }), 120)
            };
          return (0, Ot.useEffect)((() => {
            if (!Qt) return;
            const tt = tt => {
              if ("Escape" === tt.key) {
                var et, Vt;
                if (null !== (et = jt.current) && void 0 !== et && et.contains(document.activeElement)) null === (Vt = dt.current) || void 0 === Vt || Vt.focus();
                lt(!1)
              }
            };
            return document.addEventListener("keydown", tt), () => {
              document.removeEventListener("keydown", tt)
            }
          }), [Qt]), (0, Ot.useEffect)((() => () => {
            clearTimeout(Nt.current)
          }), []), (0, Ot.useLayoutEffect)((() => {
            if (!Qt || !dt.current || !jt.current) return void wt(null);
            const tt = dt.current.getBoundingClientRect(),
              et = jt.current.offsetHeight,
              Vt = Math.min(We, window.innerWidth - 32),
              Ot = Math.min(Math.max(16, tt.left), window.innerWidth - Vt - 16),
              qt = tt.bottom + Se + et < window.innerHeight;
            wt({
              left: Ot,
              top: qt ? tt.bottom + Se : Math.max(16, tt.top - Se - et)
            })
          }), [Qt]), (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsx)("button", {
              type: "button",
              ref: dt,
              className: "DocsTypeLink",
              "aria-expanded": Qt,
              "aria-describedby": Qt ? bt : void 0,
              onMouseEnter: Jt,
              onMouseLeave: Ct,
              onFocus: Jt,
              onBlur: Ct,
              onKeyDown: tt => {
                "Tab" === tt.key && !tt.shiftKey && Xt.current && (tt.preventDefault(), Xt.current.focus())
              },
              onClick: Jt,
              children: et
            }), Qt && (0, Ht.createPortal)((0, ft.jsxs)("span", {
              ref: jt,
              id: bt,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Et ? {
                left: Et.left,
                top: Et.top,
                maxWidth: We
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Jt,
              onMouseLeave: Ct,
              onFocus: Jt,
              onBlur: Ct,
              children: [(0, ft.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, ft.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: et
                }), Dt && (0, ft.jsxs)(mt.b, {
                  ref: Xt,
                  className: "DocsTypePopoverLink",
                  to: Yt(qt, zt(Dt)),
                  onClick: () => {
                    lt(!1)
                  },
                  onKeyDown: tt => {
                    if ("Tab" === tt.key) {
                      var et;
                      if (tt.preventDefault(), tt.shiftKey || !dt.current || ! function(tt, et) {
                          const Vt = [...document.querySelectorAll(ce)],
                            Ot = Vt.slice(Vt.indexOf(tt) + 1).find((tt => tt.getClientRects().length > 0 && !(null !== et && void 0 !== et && et.contains(tt))));
                          return null === Ot || void 0 === Ot || Ot.focus(), void 0 !== Ot
                        }(dt.current, jt.current)) null === (et = dt.current) || void 0 === et || et.focus();
                      tt.shiftKey || lt(!1)
                    }
                  },
                  children: [zt(Dt).title, (0, ft.jsx)(yt, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, ft.jsx)(Kt, {
                lang: "ts",
                code: Vt,
                compact: !0
              })]
            }), null !== Mt && void 0 !== Mt ? Mt : document.body)]
          })
        }
        var Pe = Vt(229),
          Ze = Vt(4938),
          Le = Vt(4943),
          Fe = Vt(4948);
        const ke = {
          progressBar: {
            Ve: 30,
            Oe: .075,
            qe: 5,
            De: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            He: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Qe: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            le: !0,
            scale: 3,
            rotation: 15,
            Ee: !1
          },
          gravityBar: {
            Ve: 30,
            ye: .25,
            Ne: 3,
            ae: .8,
            gravity: 1,
            Me: 1.5,
            Je: 8,
            Ce: 4,
            De: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Ke: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            ve: 5,
            Se: 1200,
            ce: .15,
            Ie: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Ge = Vt(377),
          ze = Vt(2082);

        function oe(tt) {
          return tt.startsWith("fa-")
        }
        const re = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Ue = {
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

        function Ae(tt) {
          return "string" === typeof tt ? "text" : "entityName" in tt || "translationKey" in tt ? "other" : (0, Ge.lb)(tt) ? "progressBar" : (0, Ge.ib)(tt) ? "keyBinding" : "icon" in tt ? "icon" : "str" in tt && "string" === typeof tt.str ? "text" : "other"
        }
        const ie = [{
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
          Ye = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...ie],
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
                options: ze.m
              },
              isRequired: !0
            }, ...ie],
            other: []
          };

        function Be(tt) {
          return "string" === typeof tt ? {
            str: tt
          } : tt
        }

        function pe(tt, et) {
          let Vt = Be(tt);
          for (const Ot of et) Vt = Vt && "object" === typeof Vt ? Vt[Ot] : void 0;
          return Vt
        }

        function xe(tt, et, Vt) {
          const Ot = (tt, qt) => {
            var Dt;
            const mt = et[qt],
              dt = {
                ...tt
              };
            if (qt === et.length - 1) return void 0 === Vt ? delete dt[mt] : dt[mt] = Vt, dt;
            const jt = Ot(null !== (Dt = tt[mt]) && void 0 !== Dt ? Dt : {}, qt + 1);
            return 0 === Object.keys(jt).length ? delete dt[mt] : dt[mt] = jt, dt
          };
          return function(tt) {
            const et = Object.keys(tt);
            return "string" === typeof tt.str && 1 === et.length ? tt.str : tt
          }(Ot(Be(tt), 0))
        }

        function Te(tt, et) {
          const Vt = Ae(tt),
            Ot = Ye[Vt].find((tt => tt.path.join(".") === et.join("."))),
            qt = null !== Ot && void 0 !== Ot && Ot.isRequired && "other" !== Vt ? pe(Ue[Vt], et) : void 0;
          return xe(tt, et, qt)
        }

        function ge(tt) {
          switch (Ae(tt)) {
            case "text":
              return String(pe(tt, ["str"]));
            case "icon":
              return String(pe(tt, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(pe(tt,["progress"])))}%`;
            case "keyBinding":
              return String(pe(tt, ["action"]));
            case "other":
              return JSON.stringify(tt)
          }
        }
        const se = /^[A-Za-z_$][\w$]*$/;

        function ne(tt) {
          if (Array.isArray(tt)) return `[${tt.map(ne).join(", ")}]`;
          if (tt && "object" === typeof tt) {
            const et = Object.entries(tt).map((tt => {
              let [et, Vt] = tt;
              return `${se.test(et)?et:JSON.stringify(et)}: ${ne(Vt)}`
            }));
            return 0 === et.length ? "{}" : `{ ${et.join(", ")} }`
          }
          return JSON.stringify(tt)
        }

        function tV(tt) {
          const et = tt.map(ne),
            Vt = `[${et.join(", ")}]`;
          return Vt.length <= 60 ? Vt : `[\n${et.map((tt=>`    ${tt},`)).join("\n")}\n]`
        }
        const eV = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function VV(tt) {
          let et = "";
          for (let qt = 0; qt < tt.length; qt++) {
            const Dt = tt[qt];
            if ("\\" === Dt) {
              var Vt;
              const Ot = null !== (Vt = tt[qt + 1]) && void 0 !== Vt ? Vt : "";
              et += "'" === Ot ? "'" : Dt + Ot, qt++
            } else if ('"' === Dt) et += '\\"';
            else {
              var Ot;
              et += null !== (Ot = eV[Dt]) && void 0 !== Ot ? Ot : Dt
            }
          }
          return `"${et}"`
        }

        function OV(tt) {
          if ("string" === typeof tt) return !0;
          if (!tt || "object" !== typeof tt || Array.isArray(tt)) return !1;
          const et = tt;
          return "ProgressBar" === et.type ? "number" === typeof et.progress : "StyledKeyBinding" === et.type ? ze.m.includes(et.action) : "string" === typeof et.icon || "string" === typeof et.str || "string" === typeof et.entityName || "string" === typeof et.translationKey
        }

        function qV(tt) {
          let et;
          try {
            et = function(tt) {
              let et = "",
                Vt = "",
                Ot = 0;
              const qt = () => {
                et += Vt.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Vt = ""
              };
              for (; Ot < tt.length;) {
                const Dt = tt.slice(Ot).search(/["'`]|\/\//);
                if (-1 === Dt) {
                  Vt += tt.slice(Ot);
                  break
                }
                Vt += tt.slice(Ot, Ot + Dt);
                const mt = Ot + Dt,
                  dt = tt[mt];
                if ("/" === dt) {
                  const et = tt.indexOf("\n", mt);
                  Ot = -1 === et ? tt.length : et;
                  continue
                }
                if (qt(), "`" === dt) throw new Error("Use quotes rather than template strings.");
                let jt = mt + 1;
                for (; jt < tt.length && tt[jt] !== dt;) jt += "\\" === tt[jt] ? 2 : 1;
                if (jt >= tt.length) throw new Error("A string is missing its closing quote.");
                const Ht = tt.slice(mt + 1, jt);
                et += VV(Ht), Ot = jt + 1
              }
              return qt(), JSON.parse(et)
            }(tt.trim())
          } catch (Ot) {
            return {
              parts: null,
              error: Ot instanceof SyntaxError ? "This isn't a valid array yet." : Ot.message
            }
          }
          if (!Array.isArray(et)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Vt = et.findIndex((tt => !OV(tt)));
          return -1 !== Vt ? {
            parts: null,
            error: `Part ${Vt+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: et,
            error: null
          }
        }
        const DV = 1 / Pe.e.clientTicksPerSecond,
          mV = 700,
          dV = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          jV = {
            progressBar: ke.progressBar.He,
            timedClick: ke.timedClick.icon,
            gravityBar: ke.gravityBar.icon,
            precisionBar: ke.precisionBar.icon,
            rhythmClick: ke.rhythmClick.icon
          };

        function HV(tt) {
          let {
            type: et
          } = tt;
          const [Vt, qt] = (0, Ot.useState)("ready"), [mt, dt] = (0, Ot.useState)(1), [jt, Ht] = (0, Ot.useState)(!0), Xt = (0, Ot.useRef)(null), Qt = (0, Ot.useRef)(null), lt = (0, Ot.useRef)(null), Et = (0, Ot.useRef)(new Set), wt = (0, Ot.useRef)(!1), Nt = jV[et], Mt = (0, Ot.useMemo)((() => ({
            getState: () => {
              var tt, et;
              return null !== (tt = null === (et = lt.current) || void 0 === et ? void 0 : et.getState()) && void 0 !== tt ? tt : dV
            },
            onFrame: tt => (Et.current.add(tt), () => {
              Et.current.delete(tt)
            })
          })), []);
          (0, Ot.useEffect)((() => {
            const tt = Xt.current,
              et = Qt.current;
            if (!tt || !et) return;
            const Vt = new ResizeObserver((() => {
              dt(tt.clientWidth / Math.max(1, et.offsetWidth))
            }));
            return Vt.observe(tt), () => {
              Vt.disconnect()
            }
          }), []), (0, Ot.useEffect)((() => {
            var tt;
            if ("playing" !== Vt) return;
            let Ot = !1;
            const Dt = new Fe.h[et](ke[et], (tt => {
              Ot = !0, Ht(!1), qt(tt ? "succeeded" : "failed")
            }), (() => {}));
            lt.current = Dt;
            let mt = 0,
              dt = performance.now(),
              jt = requestAnimationFrame((function tt(et) {
                for (mt += Math.min(.25, (et - dt) / 1e3), dt = et; mt >= DV && !Ot;) mt -= DV, Dt.handleTick(DV);
                for (const Vt of Et.current) Vt();
                Ot || (jt = requestAnimationFrame(tt))
              }));
            return null === (tt = Xt.current) || void 0 === tt || tt.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(jt), Dt.tearDown(), lt.current = null, wt.current = !1
            }
          }), [Vt, et]), (0, Ot.useEffect)((() => {
            if (jt) return;
            const tt = setTimeout((() => {
              Ht(!0)
            }), mV);
            return () => {
              clearTimeout(tt)
            }
          }), [jt]);
          const bt = tt => {
            var et;
            "playing" === Vt && wt.current !== tt && (wt.current = tt, null === (et = lt.current) || void 0 === et || et.handleMouseInput(tt))
          };
          return (0, ft.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, ft.jsxs)("div", {
              ref: Xt,
              className: Dt()("DocsQteStage", {
                Playing: "playing" === Vt
              }),
              tabIndex: "playing" === Vt ? 0 : -1,
              role: "playing" === Vt ? "button" : void 0,
              "aria-label": "playing" === Vt ? `${et} quick time event: click or press Space` : void 0,
              onPointerDown: tt => {
                0 === tt.button && bt(!0)
              },
              onPointerUp: () => {
                bt(!1)
              },
              onPointerLeave: () => {
                bt(!1)
              },
              onPointerCancel: () => {
                bt(!1)
              },
              onKeyDown: tt => {
                "playing" !== Vt || " " !== tt.key && "Enter" !== tt.key || (tt.preventDefault(), bt(!0))
              },
              onKeyUp: tt => {
                "playing" !== Vt || " " !== tt.key && "Enter" !== tt.key || bt(!1)
              },
              children: [(0, ft.jsx)("div", {
                ref: Qt,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${mt})`
                },
                children: "playing" === Vt && (0, ft.jsx)(Le.b.Provider, {
                  value: Mt,
                  children: (0, ft.jsx)(Ze.b, {
                    qte: {
                      type: et,
                      parameters: ke[et]
                    }
                  })
                })
              }), "playing" !== Vt && (0, ft.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Vt && (0, ft.jsxs)("div", {
                  className: Dt()("DocsQteResult", "succeeded" === Vt ? "Succeeded" : "Failed"),
                  children: [(0, ft.jsx)(yt, {
                    name: "succeeded" === Vt ? "check" : "cross",
                    isTinted: !0
                  }), (0, ft.jsx)("span", {
                    children: "succeeded" === Vt ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, ft.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !jt,
                  onClick: () => {
                    qt("playing")
                  },
                  children: [(0, ft.jsx)(yt, {
                    name: "ready" === Vt ? "play" : "replay"
                  }), (0, ft.jsx)("span", {
                    children: "ready" === Vt ? `Try ${et}` : "Play again"
                  })]
                })]
              })]
            }), Nt && !oe(Nt) && (0, ft.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, ft.jsx)("code", {
                children: Nt
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function XV(tt) {
          let {
            level: et,
            text: Vt,
            anchor: Ot,
            className: qt
          } = tt;
          const mt = `h${Math.min(et,6)}`;
          return (0, ft.jsxs)(mt, {
                id: Ot,
                className: Dt()("DocsHeading", qt),
                children: [(0, ft.jsx)(ue, {
                      text: Vt
                    }), (0, ft.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Ot}`,
                        "aria-label": `Link to ${Vt.replace(/`/g,"")}`,children:"#"})]})}function QV(tt){let{items:et,ordered:Vt}=tt;const Ot=Vt?"ol":"ul";return(0,ft.jsx)(Ot,{className:"DocsList",children:et.map(((tt,et)=>(0,ft.jsxs)("li",{children:[(0,ft.jsx)(ue,{text:tt.text}),tt.children.length>0&&(0,ft.jsx)(QV,{items:tt.children,ordered:Vt})]},et)))})}function lV(tt){const et=tt[0],Vt="paragraph"===(null===et||void 0===et?void 0:et.kind)?et.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Vt)?"warning":/^\*\*(tip|prefer)/.test(Vt)?"tip":"note"}function EV(tt){let{block:et}=tt;switch(et.kind){case"heading":return(0,ft.jsx)(XV,{level:et.level,text:et.text,anchor:et.anchor});case"paragraph":return(0,ft.jsx)("p",{children:(0,ft.jsx)(ue,{text:et.text})});case"code":{const tt="ts"===et.lang?function(tt){const et=tt.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return et&&Object.hasOwn(ke,et[1])?et[1]:null}(et.code):null;return(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)(Kt,{code:et.code,lang:et.lang}),tt&&(0,ft.jsx)(HV,{type:tt})]})}case"table":return(0,ft.jsx)("div",{className:"DocsTableScroll",children:(0,ft.jsxs)("table",{className:"DocsTable",children:[(0,ft.jsx)("thead",{children:(0,ft.jsx)("tr",{children:et.header.map(((tt,et)=>(0,ft.jsx)("th",{children:(0,ft.jsx)(ue,{text:tt})},et)))})}),(0,ft.jsx)("tbody",{children:et.rows.map(((tt,et)=>(0,ft.jsx)("tr",{children:tt.map(((tt,et)=>(0,ft.jsx)("td",{children:(0,ft.jsx)(ue,{text:tt})},et)))},et)))})]})});case"list":return(0,ft.jsx)(QV,{items:et.items,ordered:et.ordered});case"quote":return(0,ft.jsx)("aside",{className:Dt()("DocsCallout",lV(et.blocks)),children:(0,ft.jsx)(fV,{blocks:et.blocks})});case"rule":return(0,ft.jsx)("hr",{className:"DocsRule"})}}function fV(tt){let{blocks:et}=tt;return(0,ft.jsx)(ft.Fragment,{children:et.map(((tt,et)=>(0,ft.jsx)(EV,{block:tt},et)))})}var wV=Vt(4923),yV=Vt(4931);function NV(tt){return"blocks"===tt||"items"===tt}const aV=new Map;function MV(tt){let et=aV.get(tt);return et||(et=function(tt){const et={entries:[],legend:[],notes:[],examples:[]};let Vt=!1;for(const Dt of tt.split(/\r?\n/).slice(1)){if(Dt.startsWith("#")){const tt=Dt.replace(/^# ?/,""),Ot=tt.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Ot?et.legend.push({code:Ot[1],meaning:Ot[2],usage:Ot[3].trim()}):/^Examples:/.test(tt.trim())?Vt=!0:Vt&&tt.trim()?et.examples.push(tt.trim()):tt.trim()&&!/^\s/.test(tt)&&et.notes.push(tt.trim());continue}const tt=Dt.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Ot,qt;tt&&et.entries.push({name:tt[1],variants:null!==(Ot=null===(qt=tt[2])||void 0===qt?void 0:qt.split(","))&&void 0!==Ot?Ot:[]})}return et}("blocks"===tt?wV:yV),aV.set(tt,et)),et}function bV(tt){let{className:et,value:Vt,placeholder:Ot,label:qt,onChange:Dt,count:mt,children:dt}=tt;return(0,ft.jsxs)("div",{className:et,children:[(0,ft.jsx)(yt,{name:"magnifying-glass"}),(0,ft.jsx)("input",{type:"search",value:Vt,placeholder:Ot,"aria-label":qt,onChange:tt=>{Dt(tt.target.value)}}),dt,mt&&(0,ft.jsxs)("span",{className:"DocsFilterCount",children:[mt.visible," of ",mt.total]})]})}var JV=Vt(1152);function CV(tt){const et=tt.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return et?et[2]:null}function uV(tt){return"paragraph"===tt.kind&&""===tt.text.trim()}function KV(tt){const et={name:tt.heading.text,description:[],params:[],returns:null};let Vt="description";for(const qt of tt.blocks)if(!uV(qt))if("heading"===qt.kind&&/^Parameters:?$/.test(qt.text))Vt="params";else if("heading"===qt.kind&&/^Returns:?$/.test(qt.text))Vt="returns",et.returns={type:"",description:[]};else if("params"!==Vt||"table"!==qt.kind){if("returns"===Vt&&"paragraph"===qt.kind&&""===et.returns.type){const tt=CV(qt.text);if(null!==tt){et.returns.type=tt.replaceAll("\\|","|");continue}}"returns"===Vt?et.returns.description.push(qt):et.description.push(qt)}else for(const[tt,Vt,Dt]of qt.rows){var Ot;et.params.push({name:tt,type:null!==(Ot=CV(Vt))&&void 0!==Ot?Ot:Vt,description:null!==Dt&&void 0!==Dt?Dt:""})}return et}const hV=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function vV(tt){return tt.filter((tt=>!uV(tt)))}const WV=/^[\w][\w .'&!:()-]*$/,SV=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function cV(tt){var et;if("code"===tt.kind&&"text"===tt.lang){const et=tt.code.split("\n").map((tt=>tt.trim())).filter(Boolean);return et.length>0&&et.every((tt=>WV.test(tt)))?et.map((tt=>({name:tt}))):null}return"paragraph"===tt.kind&&SV.test(tt.text.trim())?[...tt.text.matchAll(/`([ ^ `]+)` / g)].flatMap((tt => tt[1].split(/,\s*/).map((tt => ({
                              name: tt.trim()
                            }))))): "table" === tt.kind && null !== (et = tt.header[0]) && void 0 !== et && et.startsWith("Song") ? tt.rows.map((tt => {
                              let [et, Vt] = tt;
                              return {
                                name: et.replace(/`/g, ""),
                                caption: Vt
                              }
                            })) : null
                          }

                          function RV(tt) {
                            const et = [];
                            for (const Vt of tt) {
                              const tt = cV(Vt),
                                Ot = et.at(-1),
                                qt = "table" === Vt.kind;
                              tt ? "names" === (null === Ot || void 0 === Ot ? void 0 : Ot.kind) && Ot.isSongs === qt ? Ot.names.push(...tt) : et.push({
                                kind: "names",
                                names: tt,
                                isSongs: qt
                              }) : et.push({
                                kind: "block",
                                block: Vt
                              })
                            }
                            return et
                          }
                          const IV = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function PV(tt, et) {
                            return `${IV[tt]}-${(0,ht.v)(et)}`
                          }
                          const ZV = new WeakMap;

                          function LV(tt, et, Vt) {
                            let Ot = ZV.get(et);
                            if (!Ot) {
                              Ot = new Map;
                              const Vt = new Set;
                              for (const qt of (0, ht.z)(et)) {
                                const et = RV(vV(qt.blocks)).map((et => {
                                  if ("block" === et.kind) return et;
                                  return {
                                    kind: "names",
                                    names: et.names.map((et => {
                                      var Ot, Dt;
                                      const mt = PV(tt, et.name);
                                      let dt = mt;
                                      for (let tt = 2; Vt.has(dt); tt++) dt = `${mt}-${tt}`;
                                      return Vt.add(dt), {
                                        ...et,
                                        anchor: dt,
                                        heading: null !== (Ot = null === (Dt = qt.heading) || void 0 === Dt ? void 0 : Dt.text) && void 0 !== Ot ? Ot : ""
                                      }
                                    })),
                                    isSongs: et.isSongs
                                  }
                                }));
                                Ot.set(qt.blocks, et)
                              }
                              ZV.set(et, Ot)
                            }
                            const qt = Ot.get(Vt);
                            if (!qt) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return qt
                          }
                          const FV = "/textures/docs/skinPreviews",
                            kV = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var GV = Vt(4322),
                            zV = Vt(4339);

                          function oV(tt) {
                            return Object.hasOwn(GV.g, tt) ? GV.g[tt] : null
                          }
                          const rV = {
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
                            blendMode: zV.f.Standard
                          };

                          function UV(tt, et, Vt) {
                            return et + (Vt - et) * tt()
                          }

                          function AV(tt, et, Vt) {
                            return tt + (et - tt) * Vt
                          }

                          function iV(tt) {
                            return tt.length > 0 && "timeFraction" in tt[0]
                          }

                          function YV(tt, et) {
                            if (0 === tt.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!iV(tt.colorGradients)) {
                              const Vt = tt.colorGradients,
                                {
                                  color: Ot
                                } = Vt[Math.floor(et() * Vt.length) % Vt.length];
                              return [{
                                at: 0,
                                colour: [Ot[0] / 255, Ot[1] / 255, Ot[2] / 255, 1]
                              }]
                            }
                            return [...tt.colorGradients].sort(((tt, et) => tt.timeFraction - et.timeFraction)).map((tt => {
                              var Vt, Ot, qt;
                              const Dt = tt.minColor,
                                mt = null !== (Vt = tt.maxColor) && void 0 !== Vt ? Vt : Dt,
                                dt = et(),
                                jt = [AV(Dt[0], mt[0], dt) / 255, AV(Dt[1], mt[1], dt) / 255, AV(Dt[2], mt[2], dt) / 255, AV(null !== (Ot = Dt[3]) && void 0 !== Ot ? Ot : 1, null !== (qt = mt[3]) && void 0 !== qt ? qt : 1, dt)];
                              return {
                                at: tt.timeFraction,
                                colour: jt
                              }
                            }))
                          }

                          function BV(tt, et, Vt, Ot) {
                            const qt = UV(Ot, tt.minEmitPower, tt.maxEmitPower),
                              Dt = et => UV(Ot, Math.min(tt.dir1[et], tt.dir2[et]), Math.max(tt.dir1[et], tt.dir2[et])) * qt,
                              mt = [...tt.velocityGradients].sort(((tt, et) => tt.timeFraction - et.timeFraction)).map((tt => ({
                                at: tt.timeFraction,
                                factor: UV(Ot, tt.factor, tt.factor2)
                              })));
                            return {
                              pos: [UV(Ot, et[0], Vt[0]), UV(Ot, et[1], Vt[1]), UV(Ot, et[2], Vt[2])],
                              dir: [Dt(0), Dt(1), Dt(2)],
                              age: 0,
                              life: UV(Ot, tt.minLifeTime, tt.maxLifeTime),
                              size: UV(Ot, tt.minSize, tt.maxSize),
                              colours: YV(tt, Ot),
                              velocityFactors: mt
                            }
                          }

                          function pV(tt, et, Vt, Ot) {
                            if (et < tt[0].at) return Vt(Math.min(1, tt.length - 1));
                            for (let qt = 0; qt < tt.length - 1; qt++)
                              if (et <= tt[qt + 1].at) {
                                const Dt = tt[qt + 1].at - tt[qt].at;
                                return Ot(Vt(qt), Vt(qt + 1), Dt > 0 ? (et - tt[qt].at) / Dt : 1)
                              } return Vt(tt.length - 1)
                          }

                          function xV(tt) {
                            return pV(tt.colours, tt.age / tt.life, (et => tt.colours[et].colour), ((tt, et, Vt) => [AV(tt[0], et[0], Vt), AV(tt[1], et[1], Vt), AV(tt[2], et[2], Vt), AV(tt[3], et[3], Vt)]))
                          }

                          function TV(tt, et, Vt) {
                            if (tt.age += Vt, tt.age >= tt.life) return !1;
                            const Ot = function(tt) {
                              return 0 === tt.velocityFactors.length ? 1 : pV(tt.velocityFactors, tt.age / tt.life, (et => tt.velocityFactors[et].factor), AV)
                            }(tt) * Vt;
                            for (let Dt = 0; Dt < 3; Dt++) {
                              var qt;
                              tt.pos[Dt] += tt.dir[Dt] * Ot, tt.dir[Dt] += (null !== (qt = et[Dt]) && void 0 !== qt ? qt : 0) * Vt
                            }
                            return !0
                          }

                          function gV(tt) {
                            return String(Math.round(1e6 * tt) / 1e6)
                          }

                          function sV(tt) {
                            return `[${tt.map(gV).join(", ")}]`
                          }

                          function nV(tt, et) {
                            const Vt = `${et}    `;
                            return `[\n${(iV(tt)?tt.map((tt=>{const et=[`${Vt}    timeFraction: ${gV(tt.timeFraction)},`,`${Vt}    minColor: ${sV(tt.minColor)},`];return tt.maxColor&&et.push(`${Vt}    maxColor: ${sV(tt.maxColor)},`),`${Vt}{\n${et.join("\n")}\n${Vt}},`})):tt.map((tt=>`
                            $ {
                              Vt
                            } {
                              color: $ {
                                sV(tt.color)
                              }
                            }, `))).join("\n")}\n${et}]`
                          }
                          const tO = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            eO = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const VO = .6;

                          function OO(tt, et) {
                            return `${et?"song":"sound"}:${tt}`
                          }
                          let qO = {
                              track: null,
                              volume: VO
                            },
                            DO = null,
                            mO = 0,
                            dO = 0;
                          const jO = new Set;

                          function HO(tt) {
                            qO = {
                              ...qO,
                              ...tt
                            }, jO.forEach((tt => {
                              tt()
                            }))
                          }

                          function XO(tt) {
                            qO.track && HO({
                              track: {
                                ...qO.track,
                                ...tt
                              }
                            })
                          }

                          function QO(tt) {
                            const [et, Vt] = (0, Ot.useState)((() => tt(qO))), qt = (0, Ot.useRef)(tt);
                            return qt.current = tt, (0, Ot.useEffect)((() => {
                              const tt = () => {
                                Vt((() => qt.current(qO)))
                              };
                              return jO.add(tt), tt(), () => {
                                jO.delete(tt)
                              }
                            }), []), et
                          }

                          function lO() {
                            mO++;
                            const tt = DO;
                            DO = null, null === tt || void 0 === tt || tt.stop()
                          }

                          function EO(tt, et) {
                            let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            lO();
                            const qt = mO,
                              {
                                track: Dt
                              } = qO,
                              mt = Dt && Dt.name === tt && Dt.isSong === et ? Dt.duration : 0;
                            dO = Ot, HO({
                              track: {
                                name: tt,
                                isSong: et,
                                status: "loading",
                                duration: mt
                              }
                            }), Promise.all([Vt.e(227), Vt.e(253)]).then((() => Vt(40008))).then((Vt => {
                              let {
                                playDocsSound: Dt
                              } = Vt;
                              qt === mO && (DO = Dt(tt, et, qO.volume, Ot, {
                                onPlay: tt => {
                                  qt === mO && XO({
                                    status: "playing",
                                    duration: tt
                                  })
                                },
                                onEnd: tt => {
                                  var et, Vt;
                                  qt === mO && (DO = null, tt ? HO({
                                    track: null
                                  }) : (dO = null !== (et = null === (Vt = qO.track) || void 0 === Vt ? void 0 : Vt.duration) && void 0 !== et ? et : 0, XO({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((et => {
                              console.error(`Could not play docs sound ${tt}`, et), qt === mO && HO({
                                track: null
                              })
                            }))
                          }

                          function fO() {
                            const {
                              track: tt
                            } = qO;
                            if (!tt) return;
                            if ("playing" === tt.status && DO) return dO = DO.YM(), DO.pause(), void XO({
                              status: "paused"
                            });
                            if ("loading" === tt.status) return lO(), void XO({
                              status: "paused"
                            });
                            if (DO) return void DO.resume();
                            const et = tt.duration > 0 && dO >= tt.duration - .05;
                            EO(tt.name, tt.isSong, et ? 0 : dO)
                          }

                          function wO() {
                            var tt;
                            return DO && "playing" === (null === (tt = qO.track) || void 0 === tt ? void 0 : tt.status) ? DO.YM() : dO
                          }

                          function yO(tt) {
                            var et;
                            null === (et = DO) || void 0 === et || et.setVolume(tt), HO({
                              volume: tt
                            })
                          }

                          function NO() {
                            lO(), dO = 0, HO({
                              track: null
                            })
                          }
                          const aO = (0, Ot.createContext)(null);
                          let MO = null;

                          function bO() {
                            const [tt, et] = (0, Ot.useState)(null);
                            return (0, Ot.useEffect)((() => {
                              let tt = !1;
                              return MO ??= Promise.all([Vt.e(73), Vt.e(76), Vt.e(75), Vt.e(74), Vt.e(188), Vt.e(100), Vt.e(231)]).then((() => Vt(40001))), MO.then((Vt => {
                                tt || et(Vt)
                              }), (tt => {
                                console.error("Could not load the docs gallery's textures", tt), MO = null
                              })), () => {
                                tt = !0
                              }
                            }), []), tt
                          }
                          const JO = 24,
                            CO = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function uO(tt, et) {
                            const Vt = "skins" === tt ? function(tt, et) {
                              const Vt = kV.find((et => tt.startsWith(et.heading)));
                              return Vt ? function(tt, et) {
                                return `${tt}-${et}`
                              }(Vt.prefix, et) : null
                            }(et.heading, et.name) : null;
                            return null === Vt ? null : `${FV}/${Vt}.webp`
                          }

                          function KO(tt) {
                            let {
                              kind: et,
                              entry: Vt,
                              assets: qt,
                              renderedUrl: mt
                            } = tt;
                            const {
                              name: dt
                            } = Vt, [jt, Ht] = (0, Ot.useState)(!1);
                            if ("icons" === et && oe(dt)) return (0, ft.jsx)(JV.b, {
                              className: "DocsTileIcon",
                              name: dt
                            });
                            let Xt = null;
                            var Qt;
                            if ("icons" === et) Xt = null !== (Qt = null === qt || void 0 === qt ? void 0 : qt.getIngameIconUrl(dt)) && void 0 !== Qt ? Qt : null;
                            else if ("particles" === et) {
                              var lt, Et, wt;
                              Xt = null !== (lt = null === qt || void 0 === qt ? void 0 : qt.getParticleTextureUrl(null !== (Et = null === (wt = oV(dt)) || void 0 === wt ? void 0 : wt.texture) && void 0 !== Et ? Et : dt)) && void 0 !== lt ? lt : null
                            } else "skins" === et && (Xt = null !== mt && void 0 !== mt ? mt : CO.test(dt) ? `/textures/charSkins/previews/${dt}_preview.png` : null);
                            return !Xt || jt ? (0, ft.jsx)(yt, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === et ? "person" : "image"
                            }) : (0, ft.jsx)("img", {
                              className: Dt()("DocsTileImage", {
                                Pixelated: "skins" !== et
                              }),
                              src: Xt,
                              srcSet: Xt === mt ? `${Xt} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Xt}`), Ht(!0)
                              }
                            })
                          }

                          function hO(tt) {
                            let {
                              entry: et,
                              isSong: Vt
                            } = tt;
                            const Ot = QO((tt => {
                                let {
                                  track: Ot
                                } = tt;
                                return (null === Ot || void 0 === Ot ? void 0 : Ot.name) === et.name && Ot.isSong === Vt ? Ot.status : null
                              })),
                              qt = null !== Ot && "paused" !== Ot;
                            return (0, ft.jsxs)("button", {
                              type: "button",
                              id: et.anchor,
                              className: Dt()("DocsSoundTile", {
                                Playing: qt
                              }),
                              "data-docs-track": OO(et.name, Vt),
                              "aria-label": qt ? `Pause ${et.name}` : `Play ${et.name}`,
                              onClick: () => {
                                null !== Ot ? fO() : EO(et.name, Vt)
                              },
                              children: [(0, ft.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, ft.jsx)(yt, {
                                  name: qt ? "pause" : "play"
                                })
                              }), (0, ft.jsx)("code", {
                                className: "DocsSoundName",
                                children: et.name
                              }), et.caption && (0, ft.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: et.caption
                              })]
                            })
                          }

                          function vO(tt) {
                            let {
                              kind: et,
                              names: Vt,
                              isSongs: qt
                            } = tt;
                            const mt = bO(),
                              [dt, jt] = Mt(),
                              Ht = !1 === (null === dt || void 0 === dt ? void 0 : dt.failed) ? dt.text : null,
                              Xt = (0, Ot.useContext)(aO),
                              [Qt, lt] = (0, Ot.useState)(""),
                              Et = Qt.trim().toLowerCase(),
                              wt = Et ? Vt.filter((tt => tt.name.toLowerCase().includes(Et))) : Vt;
                            return (0, ft.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Vt.length > JO && (0, ft.jsx)(bV, {
                                className: "DocsGalleryFilter",
                                value: Qt,
                                placeholder: `Filter ${Vt.length} names\u2026`,
                                label: "Filter names",
                                onChange: lt,
                                count: Et ? {
                                  visible: wt.length,
                                  total: Vt.length
                                } : null
                              }), (0, ft.jsx)("div", {
                                className: Dt()("DocsGalleryGrid", `Kind-${et}`, {
                                  Songs: qt
                                }),
                                children: wt.map((tt => {
                                  if ("sounds" === et) return (0, ft.jsx)(hO, {
                                    entry: tt,
                                    isSong: qt
                                  }, tt.anchor);
                                  if (Xt && "particles" === et && oV(tt.name)) return (0, ft.jsxs)("button", {
                                    type: "button",
                                    id: tt.anchor,
                                    className: Dt()("DocsTile Previewable", {
                                      Copied: Ht === tt.name
                                    }),
                                    title: `Play "${tt.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Xt(tt.name), jt(tt.name)
                                    },
                                    children: [(0, ft.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, ft.jsx)(KO, {
                                        kind: et,
                                        entry: tt,
                                        assets: mt,
                                        renderedUrl: null
                                      }), (0, ft.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, ft.jsx)(yt, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, ft.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Ht === tt.name ? "Copied!" : tt.name
                                    })]
                                  }, tt.anchor);
                                  const Vt = uO(et, tt);
                                  return (0, ft.jsxs)("button", {
                                    type: "button",
                                    id: tt.anchor,
                                    className: Dt()("DocsTile", {
                                      Copied: Ht === tt.name
                                    }),
                                    title: `Copy "${tt.name}"`,
                                    onClick: () => {
                                      jt(tt.name)
                                    },
                                    children: [(0, ft.jsx)("span", {
                                      className: Dt()("DocsTilePreview", {
                                        Rendered: null !== Vt
                                      }),
                                      children: (0, ft.jsx)(KO, {
                                        kind: et,
                                        entry: tt,
                                        assets: mt,
                                        renderedUrl: Vt
                                      })
                                    }), (0, ft.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Ht === tt.name ? "Copied!" : tt.name
                                    })]
                                  }, tt.anchor)
                                }))
                              })]
                            })
                          }

                          function WO(tt) {
                            let {
                              kind: et,
                              content: Vt,
                              blocks: Ot
                            } = tt;
                            return (0, ft.jsx)(ft.Fragment, {
                              children: LV(et, Vt, Ot).map(((tt, Vt) => "block" === tt.kind ? (0, ft.jsx)(EV, {
                                block: tt.block
                              }, Vt) : (0, ft.jsx)(vO, {
                                kind: et,
                                names: tt.names,
                                isSongs: tt.isSongs
                              }, Vt)))
                            })
                          }
                          const SO = [{
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

                          function cO(tt) {
                            let {
                              cards: et = SO,
                              label: Vt = "Start here"
                            } = tt;
                            const qt = (0, Ot.useContext)(fe);
                            return (0, ft.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Vt,
                              children: et.map((tt => {
                                let {
                                  pageId: et,
                                  countNoun: Vt
                                } = tt;
                                const Ot = zt(et);
                                return (0, ft.jsxs)(mt.b, {
                                  to: Yt(qt, Ot),
                                  className: "DocsLandingCard",
                                  children: [(0, ft.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, ft.jsx)(yt, {
                                      name: Ot.icon
                                    })
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Ot.title
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Ot.summary
                                  }), Vt && (0, ft.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [rt(Ot).sections.length, " ", Vt]
                                  })]
                                }, et)
                              }))
                            })
                          }
                          const RO = 240;

                          function IO(tt) {
                            let {
                              faces: et
                            } = tt;
                            return (0, ft.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, ft.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${et.top}")`
                                }
                              }), (0, ft.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${et.left}")`
                                }
                              }), (0, ft.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${et.right}")`
                                }
                              })]
                            })
                          }

                          function PO(tt) {
                            let {
                              src: et
                            } = tt;
                            const [Vt, qt] = (0, Ot.useState)(!1);
                            return Vt ? null : (0, ft.jsx)("img", {
                              src: et,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${et}`), qt(!0)
                              }
                            })
                          }

                          function ZO(tt) {
                            let {
                              kind: et
                            } = tt;
                            const Vt = MV(et),
                              qt = bO(),
                              mt = (0, dt.s)(),
                              [jt, Ht] = (0, Ot.useState)(""),
                              [Xt, Qt] = (0, Ot.useState)(null),
                              [lt, Et] = (0, Ot.useState)(RO),
                              [wt, Nt] = (0, Ot.useState)(null),
                              Mt = (0, Ot.useRef)(null),
                              Jt = jt.trim().toLowerCase();
                            (0, Ot.useEffect)((() => {
                              const tt = (0, ht.t)(mt.hash),
                                Ot = Vt.entries.find((Vt => PV(et, Vt.name) === tt));
                              if (Ot) Mt.current = Ot.name, Ht(Ot.name), Qt(null), Nt(Ot.name);
                              else if (null !== Mt.current) {
                                const tt = Mt.current;
                                Mt.current = null, Ht((et => et === tt ? "" : et)), Nt(null)
                              }
                            }), [Vt, et, mt.hash, mt.key]), (0, Ot.useEffect)((() => {
                              var tt;
                              null !== wt && (null === (tt = document.getElementById(PV(et, wt))) || void 0 === tt || tt.scrollIntoView({
                                block: "center"
                              }))
                            }), [et, wt]);
                            const Ct = Vt.entries.filter((tt => (!Jt || tt.name.toLowerCase().includes(Jt)) && (!Xt || tt.variants.includes(Xt))));
                            return (0, ft.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Vt.notes.length > 0 && (0, ft.jsx)("div", {
                                className: "DocsProse",
                                children: Vt.notes.map((tt => (0, ft.jsx)("p", {
                                  children: tt
                                }, tt)))
                              }), Vt.legend.length > 0 && (0, ft.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, ft.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, ft.jsx)("thead", {
                                    children: (0, ft.jsxs)("tr", {
                                      children: [(0, ft.jsx)("th", {
                                        children: "Code"
                                      }), (0, ft.jsx)("th", {
                                        children: "Variant"
                                      }), (0, ft.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, ft.jsx)("tbody", {
                                    children: Vt.legend.map((tt => (0, ft.jsxs)("tr", {
                                      children: [(0, ft.jsx)("td", {
                                        children: (0, ft.jsx)("button", {
                                          type: "button",
                                          className: Dt()("DocsVariantChip", {
                                            Active: Xt === tt.code
                                          }),
                                          "aria-pressed": Xt === tt.code,
                                          title: `Show only ${et} with ${tt.meaning} variants`,
                                          onClick: () => {
                                            Qt(Xt === tt.code ? null : tt.code)
                                          },
                                          children: tt.code
                                        })
                                      }), (0, ft.jsx)("td", {
                                        children: tt.meaning
                                      }), (0, ft.jsx)("td", {
                                        children: (0, ft.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: tt.usage
                                        })
                                      })]
                                    }, tt.code)))
                                  })]
                                })
                              }), Vt.examples.length > 0 && (0, ft.jsx)(Kt, {
                                lang: "text",
                                code: Vt.examples.join("\n")
                              }), (0, ft.jsx)(bV, {
                                className: "DocsFilterBar",
                                value: jt,
                                placeholder: `Search ${Vt.entries.length} ${et}\u2026`,
                                label: `Search ${et}`,
                                onChange: tt => {
                                  Ht(tt), Et(RO)
                                },
                                count: Jt || Xt ? {
                                  visible: Ct.length,
                                  total: Vt.entries.length
                                } : null,
                                children: Xt && (0, ft.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Qt(null)
                                  },
                                  children: [Xt, " ", (0, ft.jsx)(yt, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, ft.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Ct.slice(0, lt).map((tt => {
                                  const Vt = "blocks" === et ? null === qt || void 0 === qt ? void 0 : qt.getBlockFaces(tt.name) : null,
                                    Ot = qt && !Vt ? qt.getItemTextureUrl(tt.name) : null;
                                  return (0, ft.jsxs)("div", {
                                    id: PV(et, tt.name),
                                    className: Dt()("DocsCatalogueTile", {
                                      Linked: tt.name === wt
                                    }),
                                    children: [(0, ft.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Vt && (0, ft.jsx)(IO, {
                                        faces: Vt
                                      }), Ot && (0, ft.jsx)(PO, {
                                        src: Ot
                                      })]
                                    }), (0, ft.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: tt.name
                                    }), tt.variants.length > 0 && (0, ft.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: tt.variants.map((tt => (0, ft.jsx)("span", {
                                        children: tt
                                      }, tt)))
                                    }), (0, ft.jsx)(bt, {
                                      text: tt.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, tt.name)
                                }))
                              }), Ct.length > lt && (0, ft.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Et(Ct.length)
                                },
                                children: ["Show all ", Ct.length]
                              }), 0 === Ct.length && (0, ft.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", et, " match."]
                              })]
                            })
                          }
                          var LO = Vt(4986),
                            FO = Vt(1676);
                          const kO = .95 * LO.b;

                          function GO(tt) {
                            return /^\s*```/.test(tt)
                          }

                          function zO(tt, et) {
                            const Vt = [
                              []
                            ];
                            let Ot = !1;
                            for (const qt of tt.split("\n")) !Ot && et(qt) && Vt.at(-1).length > 0 && Vt.push([]), GO(qt) && (Ot = !Ot), Vt.at(-1).push(qt);
                            return Vt.map((tt => tt.join("\n").trim())).filter(Boolean)
                          }

                          function oO(tt, et) {
                            const Vt = `${"#".repeat(et)} `,
                              Ot = [];
                            let qt = !1;
                            for (const Dt of tt.split("\n")) GO(Dt) ? qt = !qt : !qt && Dt.startsWith(Vt) && Ot.push(Dt.slice(Vt.length).trim());
                            return Ot
                          }

                          function rO(tt) {
                            return tt.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class UO {
                            constructor(tt, et) {
                              this.origin = et, this.pages = void 0, this.partPaths = new Map;
                              const Vt = tt.map((tt => {
                                const et = et => this.resolveLinks(tt, et).length,
                                  Vt = function(tt, et) {
                                    const Vt = tt.map((tt => et(tt.markdown) + 2)),
                                      Ot = Vt.reduce(((tt, et) => tt + et), 0),
                                      qt = Ot / Math.ceil(Ot / kO),
                                      Dt = [];
                                    let mt = 0;
                                    return tt.forEach(((tt, et) => {
                                      const Ot = Vt[et];
                                      (0 === Dt.length || mt + Ot > kO || mt + Ot / 2 > qt) && (Dt.push([]), mt = 0), Dt.at(-1).push(tt), mt += Ot
                                    })), Dt
                                  }(function(tt, et) {
                                    return zO(tt, (tt => tt.startsWith("## "))).flatMap((tt => {
                                      var Vt;
                                      const Ot = null !== (Vt = oO(tt, 2)[0]) && void 0 !== Vt ? Vt : "";
                                      if (et(tt) <= kO) return [{
                                        markdown: tt,
                                        section: Ot
                                      }];
                                      let qt = !1,
                                        Dt = "";
                                      return zO(tt, (tt => {
                                        const et = qt && "" !== tt.trim();
                                        return qt = "" === tt.trim(), et
                                      })).map((tt => {
                                        var et;
                                        const Vt = oO(tt, 3),
                                          qt = tt.startsWith("### ") ? Vt[0] : Dt;
                                        return Dt = null !== (et = Vt.at(-1)) && void 0 !== et ? et : Dt, {
                                          markdown: tt,
                                          section: Ot || qt
                                        }
                                      }))
                                    }))
                                  }(rO(tt), et), et);
                                return {
                                  page: tt,
                                  groups: Vt.length > 1 ? Vt : []
                                }
                              }));
                              for (const {
                                  page: Ot,
                                  groups: qt
                                }
                                of Vt) qt.forEach(((tt, et) => {
                                const Vt = (0, LO.r)(Ot.slug, et);
                                for (const qt of tt.flatMap((tt => [...oO(tt.markdown, 2), ...oO(tt.markdown, 3)]))) {
                                  const tt = `${Ot.id}#${(0,ht.v)(qt)}`;
                                  this.partPaths.has(tt) || this.partPaths.set(tt, Vt)
                                }
                              }));
                              this.pages = Vt.map((tt => {
                                let {
                                  page: et,
                                  groups: Vt
                                } = tt;
                                return {
                                  page: et,
                                  path: (0, LO.p)(et.slug),
                                  markdown: `# ${et.title}\n\n${this.resolveLinks(et,rO(et))}\n`,
                                  parts: Vt.map(((tt, Ot) => this.renderPart(et, tt, Ot, Vt.length)))
                                }
                              }))
                            }
                            url(tt) {
                              return `${this.origin}${tt}`
                            }
                            getPage(tt) {
                              return this.pages.find((et => et.page.id === tt))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((tt => (tt.parts.length > 0 ? tt.parts : [{
                                path: tt.path,
                                label: "",
                                markdown: tt.markdown
                              }]).filter((tt => tt.markdown.length > LO.b))))
                            }
                            markdownUrl(tt, et) {
                              const Vt = et && this.partPaths.get(`${tt.id}#${et}`) || (0, LO.p)(tt.slug);
                              return this.url(et ? `${Vt}#${et}` : Vt)
                            }
                            resolveLinks(tt, et) {
                              return et.replace(/\]\((#[^)]+)\)/g, ((et, Vt) => {
                                var Ot;
                                const qt = null !== (Ot = At(Vt)) && void 0 !== Ot ? Ot : this.samePageTarget(tt, Vt);
                                return qt ? `](${this.markdownUrl(qt.page,qt.anchor)})` : et
                              }))
                            }
                            samePageTarget(tt, et) {
                              const Vt = (0, ht.v)(et.slice(1));
                              return Ut(tt, Vt) ? {
                                page: tt,
                                anchor: Vt
                              } : null
                            }
                            renderPart(tt, et, Vt, Ot) {
                              const qt = function(tt) {
                                  const et = tt.map((tt => tt.section)).filter(Boolean);
                                  if (0 === et.length) return "";
                                  const Vt = et[0],
                                    Ot = et.at(-1);
                                  return Vt === Ot ? Vt : `${Vt} to ${Ot}`
                                }(et),
                                Dt = et.map((tt => tt.markdown)).join("\n\n"),
                                mt = qt ? `It covers ${qt}. ` : "",
                                dt = `Part ${Vt+1} of ${Ot} of [${tt.title}](${this.url((0,LO.p)(tt.slug))}). ${mt}[llms.txt](${this.url(LO.h)}) lists every part.`;
                              return {
                                path: (0, LO.r)(tt.slug, Vt),
                                label: qt,
                                markdown: `# ${tt.title}, part ${Vt+1} of ${Ot}\n\n${dt}\n\n${this.resolveLinks(tt,Dt)}\n`
                              }
                            }
                            llmsTxt(tt) {
                              const et = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${AO(LO.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Vt of Gt) {
                                et.push("", `## ${Vt.title}`, "");
                                for (const tt of Vt.pageIds) {
                                  const Vt = this.getPage(tt),
                                    {
                                      page: Ot,
                                      parts: qt
                                    } = Vt,
                                    Dt = `About ${AO(Vt.markdown.length)} tokens${qt.length>0?`, in ${qt.length} parts:`:"."}`;
                                  et.push(`- [${Ot.title}](${this.url(Vt.path)}): ${Ot.summary} ${Dt}`), qt.forEach(((tt, Vt) => {
                                    et.push(`  - [Part ${Vt+1}${tt.label?`: ${tt.label}`:""}](${this.url(tt.path)})`)
                                  }))
                                }
                              }
                              return et.push("", "## Optional", "", `- [Every page in one file](${this.url(LO.d)}): About ${AO(tt.length)} tokens, for a model with a large context window.`, ""), et.join("\n")
                            }
                            llmsFullTxt() {
                              return Gt.flatMap((tt => tt.pageIds.map((tt => this.getPage(tt).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const tt = this.llmsFullTxt(),
                                et = this.llmsTxt(tt),
                                Vt = new Map([
                                  [LO.l, et],
                                  [LO.h, et],
                                  [LO.d, tt]
                                ]);
                              for (const Ot of this.pages) {
                                Vt.set(Ot.path, Ot.markdown);
                                for (const tt of Ot.parts) Vt.set(tt.path, tt.markdown)
                              }
                              return Vt
                            }
                          }

                          function AO(tt) {
                            return `${Math.max(1,Math.round(tt/4e3))}K`
                          }
                          let iO = null;

                          function YO() {
                            return iO ??= new UO(kt, FO.c), iO
                          }
                          var BO = Vt(4995);
                          const pO = [BO.f, BO.q];

                          function xO(tt) {
                            return YO().getPage(tt.id).parts.length > 0 ? `Read ${LO.k}, then the parts of the Bloxd Code API's ${tt.title} page it lists, so I can ask questions about it.` : `Read ${FO.c}${(0,LO.p)(tt.slug)} so I can ask questions about it. ${BO.m}`
                          }

                          function TO(tt) {
                            let {
                              page: et
                            } = tt;
                            const [Vt, Ot] = Mt();
                            return (0, ft.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, ft.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Ot(YO().getPage(et.id).markdown)
                                },
                                children: [(0, ft.jsx)(yt, {
                                  name: !1 === (null === Vt || void 0 === Vt ? void 0 : Vt.failed) ? "check" : "copy"
                                }), (0, ft.jsx)("span", {
                                  children: Vt ? Vt.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), pO.map((tt => (0, ft.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, BO.d)(tt, xO(et)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, ft.jsx)(yt, {
                                  name: "external-link"
                                }), (0, ft.jsxs)("span", {
                                  children: ["Open in ", tt.name]
                                })]
                              }, tt.name)))]
                            })
                          }

                          function gO(tt) {
                            return `#${[0,1,2].map((et=>Math.round(Math.min(255,Math.max(0,tt[et]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function sO(tt) {
                            return [parseInt(tt.slice(1, 3), 16), parseInt(tt.slice(3, 5), 16), parseInt(tt.slice(5, 7), 16)]
                          }

                          function nO(tt) {
                            let {
                              label: et,
                              min: Vt,
                              max: Ot,
                              step: qt,
                              low: Dt,
                              high: mt,
                              onChange: dt
                            } = tt;
                            return (0, ft.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ft.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ft.jsx)("span", {
                                  children: et
                                }), (0, ft.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Dt === mt ? Dt : `${Dt}\u2013${mt}`
                                })]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, ft.jsx)("input", {
                                  type: "range",
                                  min: Vt,
                                  max: Ot,
                                  step: qt,
                                  value: Math.min(Ot, Dt),
                                  "aria-label": `Minimum ${et.toLowerCase()}`,
                                  onChange: tt => {
                                    const et = Number(tt.target.value);
                                    dt(et, Math.max(et, mt))
                                  }
                                }), (0, ft.jsx)("input", {
                                  type: "range",
                                  min: Vt,
                                  max: Ot,
                                  step: qt,
                                  value: Math.min(Ot, mt),
                                  "aria-label": `Maximum ${et.toLowerCase()}`,
                                  onChange: tt => {
                                    const et = Number(tt.target.value);
                                    dt(Math.min(et, Dt), et)
                                  }
                                })]
                              })]
                            })
                          }

                          function tq(tt) {
                            let {
                              label: et,
                              min: Vt,
                              max: Ot,
                              step: qt,
                              value: Dt,
                              onChange: mt,
                              format: dt = String
                            } = tt;
                            return (0, ft.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ft.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ft.jsx)("span", {
                                  children: et
                                }), (0, ft.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: dt(Dt)
                                })]
                              }), (0, ft.jsx)("input", {
                                type: "range",
                                min: Vt,
                                max: Ot,
                                step: qt,
                                value: Math.min(Ot, Math.max(Vt, Dt)),
                                "aria-label": et,
                                onChange: tt => {
                                  mt(Number(tt.target.value))
                                }
                              })]
                            })
                          }

                          function eq(tt) {
                            let {
                              opts: et,
                              onChange: Vt
                            } = tt;
                            const Ot = et.colorGradients;
                            if (!iV(Ot)) return (0, ft.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ft.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, ft.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, ft.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Ot.map(((tt, et) => (0, ft.jsx)("input", {
                                  type: "color",
                                  value: gO(tt.color),
                                  "aria-label": `Colour ${et+1}`,
                                  onChange: tt => {
                                    const qt = [...Ot];
                                    qt[et] = {
                                      color: sO(tt.target.value)
                                    }, Vt(qt)
                                  }
                                }, et)))
                              })]
                            });
                            const qt = (tt, et) => {
                              const qt = [...Ot];
                              qt[tt] = et, Vt(qt)
                            };
                            return (0, ft.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ft.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ft.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, ft.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Ot.map(((tt, et) => {
                                var Vt;
                                const Ot = null !== (Vt = tt.maxColor) && void 0 !== Vt ? Vt : tt.minColor;
                                return (0, ft.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, ft.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * tt.timeFraction), "%"]
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${gO(tt.minColor)}, ${gO(Ot)})`
                                    }
                                  }), (0, ft.jsx)("input", {
                                    type: "color",
                                    value: gO(tt.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*tt.timeFraction)}%`,
                                    onChange: Vt => {
                                      qt(et, {
                                        ...tt,
                                        minColor: [...sO(Vt.target.value), tt.minColor[3]]
                                      })
                                    }
                                  }), (0, ft.jsx)("input", {
                                    type: "color",
                                    value: gO(Ot),
                                    "aria-label": `Maximum colour at ${Math.round(100*tt.timeFraction)}%`,
                                    onChange: Vt => {
                                      qt(et, {
                                        ...tt,
                                        maxColor: [...sO(Vt.target.value), Ot[3]]
                                      })
                                    }
                                  })]
                                }, et)
                              }))]
                            })
                          }
                          const Vq = [-.5, -.5, -.5],
                            Oq = [.5, .5, .5],
                            qq = [0, 1, 2, 3, 4, 5, 6, 7].map((tt => [1 & tt ? Oq[0] : Vq[0], 2 & tt ? Oq[1] : Vq[1], 4 & tt ? Oq[2] : Vq[2]]));class Dq {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(tt, et, Vt, Ot) {
                              const qt = Math.round(31 * et),
                                Dt = Math.round(31 * Vt),
                                mt = Math.round(31 * Ot),
                                dt = `${qt}|${Dt}|${mt}`;
                              let jt = this.tints.get(tt);
                              (!jt || jt.size > 2e3) && (jt = new Map, this.tints.set(tt, jt));
                              let Ht = jt.get(dt);
                              if (Ht) return Ht;
                              Ht = document.createElement("canvas"), Ht.width = tt.naturalWidth || 16, Ht.height = tt.naturalHeight || 16;
                              const Xt = Ht.getContext("2d");
                              return Xt ? (Xt.imageSmoothingEnabled = !1, Xt.drawImage(tt, 0, 0, Ht.width, Ht.height), Xt.globalCompositeOperation = "multiply", Xt.fillStyle = `rgb(${qt/31*255}, ${Dt/31*255}, ${mt/31*255})`, Xt.fillRect(0, 0, Ht.width, Ht.height), Xt.globalCompositeOperation = "destination-in", Xt.drawImage(tt, 0, 0, Ht.width, Ht.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), jt.set(dt, Ht), Ht
                            }
                          }

                          function mq(tt) {
                            let {
                              opts: et,
                              textureUrl: Vt,
                              burst: qt,
                              paused: Dt
                            } = tt;
                            const mt = (0, Ot.useRef)(null),
                              dt = (0, Ot.useRef)(et);
                            dt.current = et;
                            const jt = (0, Ot.useRef)(Dt);
                            jt.current = Dt;
                            const Ht = (0, Ot.useRef)(null),
                              Xt = (0, Ot.useRef)(null),
                              Qt = (0, Ot.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(tt) {
                                let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Vt = [-.5, -.5, -.5],
                                  Ot = [.5, .5, .5];
                                let qt = .5;
                                for (let Dt = 0; Dt < 40; Dt++) {
                                  const Dt = BV(tt, Vt, Ot, et),
                                    mt = Math.max(Dt.life / 30, .001);
                                  for (; TV(Dt, tt.gravity, mt);) qt = Math.max(qt, Math.hypot(Dt.pos[0], Dt.pos[1], Dt.pos[2]) + Dt.size / 2)
                                }
                                return qt
                              }(et)))), [et]),
                              lt = (0, Ot.useRef)(Qt);
                            return lt.current = Qt, (0, Ot.useEffect)((() => {
                              if (Ht.current = null, !Vt) return;
                              const tt = new Image;
                              let et = !1;
                              return tt.onload = () => {
                                et || (Ht.current = tt)
                              }, tt.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Vt}`)
                              }, tt.src = Vt, () => {
                                et = !0
                              }
                            }), [Vt]), (0, Ot.useEffect)((() => {
                              var tt;
                              null === (tt = Xt.current) || void 0 === tt || tt.call(Xt)
                            }), [et, qt]), (0, Ot.useEffect)((() => {
                              const tt = mt.current,
                                et = null === tt || void 0 === tt ? void 0 : tt.getContext("2d");
                              if (!tt || !et) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Vt = new Dq;
                              let Ot = [],
                                qt = 0,
                                Dt = -.7,
                                Qt = lt.current,
                                Et = performance.now(),
                                ft = 0,
                                wt = !0,
                                yt = null;
                              const Nt = () => {
                                const tt = dt.current,
                                  et = Math.min(400, Math.max(0, Math.ceil(tt.manualEmitCount)));
                                Ot = [];
                                for (let Vt = 0; Vt < et; Vt++) Ot.push(BV(tt, Vq, Oq, Math.random));
                                qt = 0
                              };
                              Xt.current = Nt, Nt();
                              const Mt = mt => {
                                ft = requestAnimationFrame(Mt);
                                const Xt = Math.min(.05, (mt - Et) / 1e3);
                                if (Et = mt, !wt) return;
                                const bt = window.devicePixelRatio || 1,
                                  Jt = Math.round(tt.clientWidth * bt),
                                  Ct = Math.round(tt.clientHeight * bt);
                                if (0 === Jt || 0 === Ct) return;
                                tt.width === Jt && tt.height === Ct || (tt.width = Jt, tt.height = Ct);
                                const ut = dt.current;
                                null === yt && (Dt += .18 * Xt), Qt += (lt.current - Qt) * Math.min(1, 4 * Xt);
                                const Kt = .6 * Xt;
                                Ot = Ot.filter((tt => TV(tt, ut.gravity, Kt))), 0 !== Ot.length || jt.current || (qt += Xt, qt > .6 && Nt());
                                const ht = function(tt, et, Vt, Ot) {
                                  const qt = 3.2 * Ot,
                                    Dt = .44 * Math.min(tt, et) * qt / Ot,
                                    mt = Math.cos(Vt),
                                    dt = Math.sin(Vt),
                                    jt = Math.cos(.42),
                                    Ht = Math.sin(.42);
                                  return (Vt, Ot, Xt) => {
                                    const Qt = Vt * dt + Xt * mt,
                                      lt = qt - (Ot * Ht + Qt * jt);
                                    if (lt < .05) return null;
                                    const Et = Dt / lt;
                                    return {
                                      x: tt / 2 + (Vt * mt - Xt * dt) * Et,
                                      y: et / 2 - (Ot * jt - Qt * Ht) * Et,
                                      scale: Et,
                                      depth: lt
                                    }
                                  }
                                }(Jt, Ct, Dt, Qt);
                                ! function(tt, et, Vt, Ot, qt) {
                                  const Dt = tt.createLinearGradient(0, 0, 0, Vt);
                                  Dt.addColorStop(0, "#23262d"), Dt.addColorStop(1, "#16181c"), tt.globalCompositeOperation = "source-over", tt.globalAlpha = 1, tt.fillStyle = Dt, tt.fillRect(0, 0, et, Vt);
                                  const mt = (et, Vt) => {
                                      const qt = Ot(et[0], et[1], et[2]),
                                        Dt = Ot(Vt[0], Vt[1], Vt[2]);
                                      qt && Dt && (tt.beginPath(), tt.moveTo(qt.x, qt.y), tt.lineTo(Dt.x, Dt.y), tt.stroke())
                                    },
                                    dt = Math.ceil(qt) + 1,
                                    jt = Vq[1];
                                  tt.lineWidth = 1, tt.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Ht = -dt; Ht <= dt; Ht++) mt([Ht + .5, jt, .5 - dt], [Ht + .5, jt, dt + .5]), mt([.5 - dt, jt, Ht + .5], [dt + .5, jt, Ht + .5]);
                                  tt.strokeStyle = "rgba(255, 255, 255, 0.28)", tt.setLineDash([4, 4]);
                                  for (const Ht of qq)
                                    for (const tt of qq) {
                                      const et = [0, 1, 2].filter((et => Ht[et] !== tt[et]));
                                      1 === et.length && Ht[et[0]] < tt[et[0]] && mt(Ht, tt)
                                    }
                                  tt.setLineDash([])
                                }(et, Jt, Ct, ht, Qt);
                                const vt = Ht.current,
                                  Wt = Ot.map((tt => ({
                                    particle: tt,
                                    at: ht(tt.pos[0], tt.pos[1], tt.pos[2])
                                  }))).filter((tt => null !== tt.at)).sort(((tt, et) => et.at.depth - tt.at.depth));
                                et.imageSmoothingEnabled = !1;
                                for (const tt of function(tt) {
                                    switch (tt) {
                                      case zV.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case zV.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case zV.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case zV.f.MultiplyAdd:
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
                                  }(ut.blendMode)) {
                                  et.globalCompositeOperation = tt.operation;
                                  for (const {
                                      particle: Ot,
                                      at: qt
                                    }
                                    of Wt) {
                                    const [Dt, mt, dt, jt] = xV(Ot), Ht = Math.max(1, Ot.size * qt.scale);
                                    et.globalAlpha = tt.usesAlpha ? Math.min(1, Math.max(0, jt)) : 1, vt ? et.drawImage(Vt.get(vt, Dt, mt, dt), qt.x - Ht / 2, qt.y - Ht / 2, Ht, Ht) : (et.fillStyle = `rgb(${255*Dt}, ${255*mt}, ${255*dt})`, et.fillRect(qt.x - Ht / 2, qt.y - Ht / 2, Ht, Ht))
                                  }
                                }
                                et.globalCompositeOperation = "source-over", et.globalAlpha = 1
                              };
                              ft = requestAnimationFrame(Mt);
                              const bt = new IntersectionObserver((tt => {
                                let [et] = tt;
                                wt = et.isIntersecting
                              }));
                              bt.observe(tt);
                              const Jt = et => {
                                  yt = et.clientX, tt.setPointerCapture(et.pointerId)
                                },
                                Ct = tt => {
                                  null !== yt && (Dt += .01 * (tt.clientX - yt), yt = tt.clientX)
                                },
                                ut = () => {
                                  yt = null
                                };
                              return tt.addEventListener("pointerdown", Jt), tt.addEventListener("pointermove", Ct), tt.addEventListener("pointerup", ut), tt.addEventListener("pointercancel", ut), () => {
                                cancelAnimationFrame(ft), bt.disconnect(), Xt.current = null, tt.removeEventListener("pointerdown", Jt), tt.removeEventListener("pointermove", Ct), tt.removeEventListener("pointerup", ut), tt.removeEventListener("pointercancel", ut)
                              }
                            }), []), (0, ft.jsx)("canvas", {
                              ref: mt,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${et.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const dq = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            jq = [{
                              mode: zV.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: zV.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: zV.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: zV.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: zV.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Hq = (0, Ot.forwardRef)((function(tt, et) {
                              var Vt, qt;
                              let {
                                textures: mt
                              } = tt;
                              const dt = bO(),
                                jt = (0, Ot.useRef)(null),
                                [Ht, Xt] = (0, Ot.useState)(rV),
                                [Qt, lt] = (0, Ot.useState)("example"),
                                [Et, wt] = (0, Ot.useState)(0),
                                [Nt, Mt] = (0, Ot.useState)(!1),
                                Jt = tt => {
                                  const et = "example" === tt ? rV : oV(tt);
                                  et && (Xt(et), lt(tt))
                                };
                              (0, Ot.useImperativeHandle)(et, (() => ({
                                preview: tt => {
                                  var et;
                                  Jt(tt), null === (et = jt.current) || void 0 === et || et.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Ct = tt => {
                                  Xt({
                                    ...Ht,
                                    ...tt
                                  }), lt(null)
                                },
                                ut = function(tt, et) {
                                  if (null !== et) return `${tO}    presetId: "${et}",\n${eO}\n})`;
                                  const Vt = tt.velocityGradients.map((tt => `        {\n            timeFraction: ${gV(tt.timeFraction)},\n            factor: ${gV(tt.factor)},\n            factor2: ${gV(tt.factor2)},\n        },`)),
                                    Ot = [`    dir1: ${sV(tt.dir1)},`, `    dir2: ${sV(tt.dir2)},`, eO, `    texture: "${tt.texture}",`, `    minLifeTime: ${gV(tt.minLifeTime)},`, `    maxLifeTime: ${gV(tt.maxLifeTime)},`, `    minEmitPower: ${gV(tt.minEmitPower)},`, `    maxEmitPower: ${gV(tt.maxEmitPower)},`, `    minSize: ${gV(tt.minSize)},`, `    maxSize: ${gV(tt.maxSize)},`, `    manualEmitCount: ${gV(tt.manualEmitCount)},`, `    gravity: ${sV(tt.gravity)},`, `    colorGradients: ${nV(tt.colorGradients,"    ")},`, `    velocityGradients: ${Vt.length>0?`[\n${Vt.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${gV(tt.blendMode)},`];
                                  return void 0 !== tt.hideDist && Ot.push(`    hideDist: ${gV(tt.hideDist)},`), `${tO}${Ot.join("\n")}\n})`
                                }(Ht, null === Qt || "example" === Qt ? null : Qt),
                                ht = mt.includes(Ht.texture) ? mt : [...mt, Ht.texture];
                              return (0, ft.jsxs)("section", {
                                ref: jt,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, ft.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, ft.jsxs)("div", {
                                    children: [(0, ft.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, ft.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, ft.jsx)(bt, {
                                    text: ut,
                                    label: "Copy code"
                                  })]
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, ft.jsx)("button", {
                                    type: "button",
                                    className: Dt()("DocsVariantChip", {
                                      Active: "example" === Qt
                                    }),
                                    onClick: () => {
                                      Jt("example")
                                    },
                                    children: "Example"
                                  }), dq.filter((tt => null !== oV(tt))).map((tt => (0, ft.jsx)("button", {
                                    type: "button",
                                    className: Dt()("DocsVariantChip", {
                                      Active: Qt === tt
                                    }),
                                    onClick: () => {
                                      Jt(tt)
                                    },
                                    children: tt
                                  }, tt))), (0, ft.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Qt && void 0 !== Qt ? Qt : "custom",
                                    "aria-label": "Preset",
                                    onChange: tt => {
                                      Jt(tt.target.value)
                                    },
                                    children: [(0, ft.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Qt && (0, ft.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), GV.c.map((tt => (0, ft.jsx)("option", {
                                      value: tt,
                                      children: tt
                                    }, tt)))]
                                  })]
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, ft.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, ft.jsx)(mq, {
                                      opts: Ht,
                                      textureUrl: null !== (Vt = null === dt || void 0 === dt ? void 0 : dt.getParticleTextureUrl(Ht.texture)) && void 0 !== Vt ? Vt : null,
                                      burst: Et,
                                      paused: Nt
                                    }), (0, ft.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, ft.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          wt(Et + 1)
                                        },
                                        children: [(0, ft.jsx)(yt, {
                                          name: "replay"
                                        }), (0, ft.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, ft.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Nt,
                                        onClick: () => {
                                          Mt(!Nt)
                                        },
                                        children: [(0, ft.jsx)(yt, {
                                          name: Nt ? "play" : "pause"
                                        }), (0, ft.jsx)("span", {
                                          children: Nt ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, ft.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, ft.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ft.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, ft.jsx)("span", {
                                          children: "Texture"
                                        }), (0, ft.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Ht.texture
                                        })]
                                      }), (0, ft.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: ht.map((tt => {
                                          var et;
                                          const Vt = null !== (et = null === dt || void 0 === dt ? void 0 : dt.getParticleTextureUrl(tt)) && void 0 !== et ? et : null;
                                          return (0, ft.jsx)("button", {
                                            type: "button",
                                            className: Dt()("DocsParticleTexture", {
                                              Active: Ht.texture === tt
                                            }),
                                            title: tt,
                                            "aria-label": tt,
                                            "aria-pressed": Ht.texture === tt,
                                            onClick: () => {
                                              Ct({
                                                texture: tt
                                              })
                                            },
                                            children: Vt ? (0, ft.jsx)("img", {
                                              src: Vt,
                                              alt: ""
                                            }) : (0, ft.jsx)(yt, {
                                              name: "image"
                                            })
                                          }, tt)
                                        }))
                                      })]
                                    }), (0, ft.jsx)(tq, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Ht.manualEmitCount,
                                      onChange: tt => {
                                        Ct({
                                          manualEmitCount: tt
                                        })
                                      }
                                    }), (0, ft.jsx)(nO, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Ht.minLifeTime,
                                      high: Ht.maxLifeTime,
                                      onChange: (tt, et) => {
                                        Ct({
                                          minLifeTime: tt,
                                          maxLifeTime: et
                                        })
                                      }
                                    }), (0, ft.jsx)(nO, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Ht.minEmitPower,
                                      high: Ht.maxEmitPower,
                                      onChange: (tt, et) => {
                                        Ct({
                                          minEmitPower: tt,
                                          maxEmitPower: et
                                        })
                                      }
                                    }), (0, ft.jsx)(nO, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Ht.minSize,
                                      high: Ht.maxSize,
                                      onChange: (tt, et) => {
                                        Ct({
                                          minSize: tt,
                                          maxSize: et
                                        })
                                      }
                                    }), (0, ft.jsx)(tq, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (qt = Ht.gravity[1]) && void 0 !== qt ? qt : 0,
                                      onChange: tt => {
                                        var et, Vt;
                                        Ct({
                                          gravity: [null !== (et = Ht.gravity[0]) && void 0 !== et ? et : 0, tt, null !== (Vt = Ht.gravity[2]) && void 0 !== Vt ? Vt : 0]
                                        })
                                      }
                                    }), (0, ft.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ft.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, ft.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, ft.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Ht.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: tt => {
                                          Ct({
                                            blendMode: Number(tt.target.value)
                                          })
                                        },
                                        children: jq.map((tt => {
                                          let {
                                            mode: et,
                                            label: Vt
                                          } = tt;
                                          return (0, ft.jsx)("option", {
                                            value: et,
                                            children: Vt
                                          }, et)
                                        }))
                                      })]
                                    }), (0, ft.jsx)(eq, {
                                      opts: Ht,
                                      onChange: tt => {
                                        Ct({
                                          colorGradients: tt
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, ft.jsx)(Kt, {
                                  code: ut,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Xq = Vt(4610),
                            Qq = Vt(2001);

                          function lq(tt, et) {
                            return tt ? Xq.e.includes(et) ? tt.getIngameIconUrl(et) : tt.getItemIconUrl(et) : null
                          }

                          function Eq(tt) {
                            var et, Vt, Ot;
                            let {
                              part: qt,
                              assets: mt
                            } = tt;
                            const dt = lq(mt, qt.icon),
                              jt = null !== (et = null === (Vt = qt.style) || void 0 === Vt ? void 0 : Vt.fontSize) && void 0 !== et ? et : "1.8em",
                              Ht = (0, Ge.Ib)(qt.style);
                            return (0, ft.jsxs)("span", {
                              className: Dt()("DocsBloxdTextIcon", {
                                Missing: !dt
                              }),
                              style: {
                                width: jt,
                                height: jt,
                                opacity: null === (Ot = qt.style) || void 0 === Ot ? void 0 : Ot.opacity
                              },
                              title: dt ? void 0 : `No Bloxd icon, item or block is called "${qt.icon}"`,
                              children: [dt && Ht && (0, ft.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Ht,
                                  maskImage: `url("${dt}")`,
                                  WebkitMaskImage: `url("${dt}")`
                                }
                              }), dt ? (0, ft.jsx)("img", {
                                src: dt,
                                alt: "",
                                className: Dt()({
                                  Tinted: Ht
                                })
                              }) : (0, ft.jsx)(yt, {
                                name: "image"
                              })]
                            })
                          }

                          function fq(tt) {
                            let {
                              parts: et,
                              className: Vt
                            } = tt;
                            const Ot = bO(),
                              qt = [];
                            let mt = [];
                            const dt = tt => {
                              mt.length > 0 && (qt.push((0, ft.jsx)(Qq.e, {
                                text: mt
                              }, `run-${tt}`)), mt = [])
                            };
                            return et.forEach(((tt, et) => {
                              "icon" !== Ae(tt) || oe(tt.icon) ? mt.push(tt) : (dt(et), qt.push((0, ft.jsx)(Eq, {
                                part: tt,
                                assets: Ot
                              }, `icon-${et}`)))
                            })), dt(et.length), (0, ft.jsx)("div", {
                              className: Dt()("DocsStyledTextPreview", Vt),
                              children: qt
                            })
                          }
                          const wq = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let yq = null;

                          function Nq(tt) {
                            if (yq ??= document.createElement("canvas").getContext("2d"), !yq) return "#000000";
                            yq.fillStyle = "#000000", yq.fillStyle = tt;
                            const et = yq.fillStyle;
                            return et.startsWith("#") ? et : "#000000"
                          }

                          function aq(tt) {
                            let {
                              value: et,
                              label: Vt,
                              onChange: Ot
                            } = tt;
                            return (0, ft.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, ft.jsx)("input", {
                                type: "color",
                                value: Nq(et),
                                "aria-label": `${Vt} picker`,
                                onChange: tt => {
                                  Ot(tt.target.value)
                                }
                              }), (0, ft.jsx)("input", {
                                type: "text",
                                value: et,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Vt,
                                spellCheck: !1,
                                onChange: tt => {
                                  Ot(tt.target.value)
                                }
                              })]
                            })
                          }

                          function Mq(tt) {
                            let {
                              value: et,
                              fontAwesomeIcons: Vt,
                              onChange: qt
                            } = tt;
                            const mt = bO(),
                              [dt, jt] = (0, Ot.useState)(oe(et) ? "fontAwesome" : "bloxd"),
                              [Ht, Xt] = (0, Ot.useState)(""),
                              Qt = Ht.trim().toLowerCase(),
                              lt = "bloxd" === dt ? Xq.e : Vt,
                              Et = Qt ? lt.filter((tt => tt.toLowerCase().includes(Qt))) : lt;
                            return (0, ft.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, ft.jsx)("input", {
                                type: "text",
                                value: et,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: tt => {
                                  qt(tt.target.value)
                                }
                              }), (0, ft.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, ft.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((tt => (0, ft.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": dt === tt,
                                    className: Dt()("DocsVariantChip", {
                                      Active: dt === tt
                                    }),
                                    onClick: () => {
                                      jt(tt)
                                    },
                                    children: "bloxd" === tt ? `Bloxd icons (${Xq.e.length})` : `Font Awesome (${Vt.length})`
                                  }, tt))), (0, ft.jsx)("input", {
                                    type: "search",
                                    value: Ht,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: tt => {
                                      Xt(tt.target.value)
                                    }
                                  })
                                ]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Et.map((tt => {
                                  const Vt = "bloxd" === dt ? lq(mt, tt) : null;
                                  return (0, ft.jsx)("button", {
                                    type: "button",
                                    title: tt,
                                    "aria-label": tt,
                                    "aria-pressed": tt === et,
                                    className: Dt()("DocsIconPickerOption", {
                                      Active: tt === et
                                    }),
                                    onClick: () => {
                                      qt(tt)
                                    },
                                    children: "fontAwesome" === dt ? (0, ft.jsx)(JV.b, {
                                      name: tt
                                    }) : Vt ? (0, ft.jsx)("img", {
                                      src: Vt,
                                      alt: ""
                                    }) : (0, ft.jsx)(yt, {
                                      name: "image"
                                    })
                                  }, tt)
                                })), 0 === Et.length && (0, ft.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Ht, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function bq(tt) {
                            let {
                              property: et,
                              value: Vt,
                              fontAwesomeIcons: Ot,
                              onChange: qt
                            } = tt;
                            const {
                              field: Dt,
                              label: mt
                            } = et, dt = tt => "" !== tt || et.isRequired ? tt : void 0;
                            switch (Dt.kind) {
                              case "text":
                                return Dt.multiline ? (0, ft.jsx)("textarea", {
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  rows: 2,
                                  "aria-label": mt,
                                  onChange: tt => {
                                    qt(tt.target.value)
                                  }
                                }) : (0, ft.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  "aria-label": mt,
                                  onChange: tt => {
                                    qt(dt(tt.target.value))
                                  }
                                });
                              case "size":
                                return (0, ft.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  placeholder: et.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": mt,
                                  spellCheck: !1,
                                  onChange: tt => {
                                    qt(dt(tt.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, ft.jsx)(aq, {
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  label: mt,
                                  onChange: tt => {
                                    qt(dt(tt))
                                  }
                                });
                              case "colours": {
                                const tt = Array.isArray(Vt) ? Vt : [],
                                  et = tt => {
                                    qt(tt.length > 0 ? tt : void 0)
                                  };
                                return (0, ft.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [tt.map(((Vt, Ot) => (0, ft.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, ft.jsx)(aq, {
                                      value: Vt,
                                      label: `${mt} ${Ot+1}`,
                                      onChange: Vt => {
                                        et(tt.map(((tt, et) => et === Ot ? Vt : tt)))
                                      }
                                    }), (0, ft.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Ot+1}`,
                                      onClick: () => {
                                        et(tt.filter(((tt, et) => et !== Ot)))
                                      },
                                      children: (0, ft.jsx)(yt, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Ot))), (0, ft.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Vt;
                                      et([...tt, null !== (Vt = tt.at(-1)) && void 0 !== Vt ? Vt : "#ffffff"])
                                    },
                                    children: [(0, ft.jsx)(yt, {
                                      name: "plus"
                                    }), 0 === tt.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var jt;
                                const tt = "number" === typeof Vt ? Vt : Number(null !== (jt = et.defaultText) && void 0 !== jt ? jt : 0);
                                return (0, ft.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, ft.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: tt,
                                    "aria-label": mt,
                                    onChange: tt => {
                                      qt(Number(tt.target.value))
                                    }
                                  }), (0, ft.jsx)("output", {
                                    children: tt.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, ft.jsxs)("select", {
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  "aria-label": mt,
                                  onChange: tt => {
                                    qt(dt(tt.target.value))
                                  },
                                  children: [!et.isRequired && (0, ft.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", et.defaultText, ")"]
                                  }), Dt.options.map((tt => (0, ft.jsx)("option", {
                                    value: tt,
                                    children: tt
                                  }, tt)))]
                                });
                              case "icon":
                                return (0, ft.jsx)(Mq, {
                                  value: String(null !== Vt && void 0 !== Vt ? Vt : ""),
                                  fontAwesomeIcons: Ot,
                                  onChange: qt
                                })
                            }
                          }

                          function Jq(tt) {
                            let et;
                            try {
                              et = JSON.parse(tt)
                            } catch (Vt) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Vt.message}`
                              }
                            }
                            return OV(et) ? {
                              part: et,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Cq(tt) {
                            let {
                              parts: et,
                              index: Vt,
                              fontAwesomeIcons: qt,
                              onChange: Dt,
                              nS: mt,
                              onClose: dt
                            } = tt;
                            const jt = (0, Ot.useContext)(we),
                              Xt = (0, Ot.useRef)(null),
                              Qt = et[Vt],
                              lt = Ae(Qt),
                              [Et, wt] = (0, Ot.useState)((() => JSON.stringify(Qt, null, 2))),
                              Nt = (0, Ot.useMemo)((() => "other" === lt ? Jq(Et).error : null), [lt, Et]);
                            (0, Ot.useEffect)((() => {
                              var tt;
                              null === (tt = Xt.current) || void 0 === tt || tt.focus()
                            }), []);
                            const Mt = (0, ft.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: tt => {
                                tt.target === tt.currentTarget && dt()
                              },
                              children: (0, ft.jsxs)("div", {
                                ref: Xt,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Vt+1}: ${re[lt]}`,
                                tabIndex: -1,
                                onKeyDown: tt => {
                                  "Escape" === tt.key ? (tt.stopPropagation(), dt()) : "Tab" === tt.key && Xt.current && function(tt, et) {
                                    const Vt = Array.from(tt.querySelectorAll(ce)),
                                      Ot = Vt[0],
                                      qt = Vt.at(-1);
                                    if (!Ot || !qt) return;
                                    const Dt = document.activeElement;
                                    !et.shiftKey || Dt !== Ot && Dt !== tt ? et.shiftKey || Dt !== qt || (et.preventDefault(), Ot.focus()) : (et.preventDefault(), qt.focus())
                                  }(Xt.current, tt)
                                },
                                children: [(0, ft.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, ft.jsxs)("div", {
                                    children: [(0, ft.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Vt + 1]
                                    }), (0, ft.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: re[lt]
                                    })]
                                  }), (0, ft.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: dt,
                                    children: (0, ft.jsx)(yt, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, ft.jsx)(fq, {
                                  parts: et,
                                  className: "DocsTextDialogPreview"
                                }), (0, ft.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === lt ? (0, ft.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, ft.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, ft.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Et,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: tt => {
                                        wt(tt.target.value);
                                        const et = Jq(tt.target.value);
                                        null !== et.part && Dt(et.part)
                                      }
                                    }), Nt && (0, ft.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Nt
                                    })]
                                  }) : Ye[lt].map((tt => {
                                    const et = pe(Qt, tt.path),
                                      Vt = tt.isRequired ? JSON.stringify(Te(Qt, tt.path)) === JSON.stringify(Qt) : void 0 === et;
                                    return (0, ft.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, ft.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, ft.jsx)("span", {
                                          children: tt.label
                                        }), (0, ft.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Vt,
                                          "aria-label": `Reset ${tt.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Dt(Te(Qt, tt.path))
                                          },
                                          children: [(0, ft.jsx)(yt, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, ft.jsx)(bq, {
                                        property: tt,
                                        value: et,
                                        fontAwesomeIcons: qt,
                                        onChange: et => {
                                          Dt(xe(Qt, tt.path, et))
                                        }
                                      }), !tt.isRequired && (0, ft.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", tt.defaultText]
                                      })]
                                    }, tt.path.join("."))
                                  }))
                                }), (0, ft.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, ft.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: mt,
                                    children: [(0, ft.jsx)(yt, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, ft.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: dt,
                                    children: "Done"
                                  })]
                                }), (0, ft.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: wq.map((tt => (0, ft.jsx)("option", {
                                    value: tt
                                  }, tt)))
                                })]
                              })
                            });
                            return jt ? (0, Ht.createPortal)(Mt, jt) : Mt
                          }
                          const uq = [{
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
                            Kq = Object.keys(Ue);

                          function hq(tt) {
                            let {
                              fontAwesomeIcons: et
                            } = tt;
                            const [Vt, qt] = (0, Ot.useState)(uq[0].parts), [mt, dt] = (0, Ot.useState)((() => tV(uq[0].parts))), [jt, Ht] = (0, Ot.useState)(null), [Xt, Qt] = (0, Ot.useState)(!1), [lt, Et] = (0, Ot.useState)(null), [wt, Nt] = (0, Ot.useState)(!1), [Mt, bt] = (0, Ot.useState)(null), Jt = (0, Ot.useRef)(null), Ct = tV(Vt);
                            (0, Ot.useLayoutEffect)((() => {
                              var tt;
                              if (!Mt) return;
                              const et = tt => {
                                  var et;
                                  return null === (et = Jt.current) || void 0 === et ? void 0 : et.querySelector(`[data-focus-key="${tt}"]`)
                                },
                                Vt = et(Mt.key);
                              null === (tt = Vt && !Vt.disabled ? Vt : et(Mt.fallback)) || void 0 === tt || tt.focus(), bt(null)
                            }), [Mt]);
                            const ut = tt => {
                                qt(tt), dt(tV(tt)), Ht(null)
                              },
                              ht = tt => {
                                ut(Vt.filter(((et, Vt) => Vt !== tt))), bt({
                                  key: `edit-${Math.min(tt,Vt.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              vt = (tt, et) => {
                                const Ot = [...Vt],
                                  [qt] = Ot.splice(tt, 1);
                                Ot.splice(tt + et, 0, qt), ut(Ot);
                                bt({
                                  key: `${et<0?"up":"down"}-${tt+et}`,
                                  fallback: `edit-${tt+et}`
                                })
                              };
                            return (0, ft.jsxs)("section", {
                              ref: Jt,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, ft.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, ft.jsxs)("div", {
                                  children: [(0, ft.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, ft.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, ft.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: uq.map((tt => (0, ft.jsx)("button", {
                                  type: "button",
                                  className: Dt()("DocsVariantChip", {
                                    Active: Ct === tV(tt.parts)
                                  }),
                                  onClick: () => {
                                    ut(tt.parts)
                                  },
                                  children: tt.label
                                }, tt.label)))
                              }), (0, ft.jsx)(fq, {
                                parts: Vt,
                                className: "DocsTextEditorPreview"
                              }), (0, ft.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, ft.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ft.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, ft.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Vt.map(((tt, et) => {
                                      const Ot = Ae(tt);
                                      return (0, ft.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, ft.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${et}`,
                                          "aria-label": `Edit part ${et+1}, ${re[Ot]}`,
                                          onClick: () => {
                                            Et(et)
                                          },
                                          children: [(0, ft.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: re[Ot]
                                          }), (0, ft.jsx)(fq, {
                                            parts: [tt],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Ot && (0, ft.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ge(tt)
                                          })]
                                        }), (0, ft.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, ft.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${et+1} up`,
                                            "data-focus-key": `up-${et}`,
                                            disabled: 0 === et,
                                            onClick: () => {
                                              vt(et, -1)
                                            },
                                            children: (0, ft.jsx)(yt, {
                                              name: "chevron-up"
                                            })
                                          }), (0, ft.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${et+1} down`,
                                            "data-focus-key": `down-${et}`,
                                            disabled: et === Vt.length - 1,
                                            onClick: () => {
                                              vt(et, 1)
                                            },
                                            children: (0, ft.jsx)(yt, {
                                              name: "chevron-down"
                                            })
                                          }), (0, ft.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${et+1}`,
                                            onClick: () => {
                                              ht(et)
                                            },
                                            children: (0, ft.jsx)(yt, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, et)
                                    })), 0 === Vt.length && (0, ft.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, ft.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: tt => {
                                      "Escape" === tt.key && wt && (tt.stopPropagation(), Nt(!1), bt({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, ft.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": wt,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Nt(!wt)
                                      },
                                      children: [(0, ft.jsx)(yt, {
                                        name: "plus"
                                      }), "Add a part", (0, ft.jsx)(yt, {
                                        name: wt ? "chevron-up" : "chevron-down"
                                      })]
                                    }), wt && (0, ft.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Kq.map((tt => (0, ft.jsx)("li", {
                                        children: (0, ft.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (tt => {
                                              ut([...Vt, Ue[tt]]), Nt(!1), Et(Vt.length)
                                            })(tt)
                                          },
                                          children: re[tt]
                                        })
                                      }, tt)))
                                    })]
                                  })]
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ft.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, ft.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Xt,
                                      onClick: () => {
                                        Qt(!Xt)
                                      },
                                      children: [(0, ft.jsx)(yt, {
                                        name: Xt ? "check" : "pencil"
                                      }), Xt ? "Done" : "Edit"]
                                    })]
                                  }), Xt ? (0, ft.jsxs)(ft.Fragment, {
                                    children: [(0, ft.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: mt,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: tt => {
                                        dt(tt.target.value);
                                        const et = qV(tt.target.value);
                                        Ht(et.error), et.parts && qt(et.parts)
                                      }
                                    }), jt && (0, ft.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: jt
                                    })]
                                  }) : (0, ft.jsx)(Kt, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Ct})`
                                  })]
                                })]
                              }), null !== lt && lt < Vt.length && (0, ft.jsx)(Cq, {
                                parts: Vt,
                                index: lt,
                                fontAwesomeIcons: et,
                                onChange: tt => {
                                  ((tt, et) => {
                                    ut(Vt.map(((Vt, Ot) => Ot === tt ? et : Vt)))
                                  })(lt, tt)
                                },
                                nS: () => {
                                  ht(lt), Et(null)
                                },
                                onClose: () => {
                                  Et(null), bt({
                                    key: `edit-${lt}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var vq = Vt(5015),
                            Wq = Vt(5e3),
                            Sq = Vt(5010),
                            cq = Vt(5021);
                          const Rq = 40,
                            Iq = 800,
                            Pq = 150,
                            Zq = 8e3,
                            Lq = 2e3;

                          function Fq(tt, et) {
                            return 12 * Math.log2(et / tt)
                          }

                          function kq(tt, et) {
                            return Math.round(tt * 2 ** (et / 12) * 10) / 10
                          }

                          function Gq(tt) {
                            return `${tt} ms`
                          }

                          function zq(tt) {
                            return `${tt} st`
                          }
                          const oq = [{
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

                          function rq(tt) {
                            let {
                              synth: et,
                              onChange: Vt
                            } = tt;
                            const Ot = (0, vq.i)(et);
                            return (0, ft.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, ft.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ft.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, ft.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, ft.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, ft.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: vq.d.map((tt => (0, ft.jsx)("button", {
                                      type: "button",
                                      className: Dt()("DocsVariantChip", {
                                        Active: et.waveform === tt
                                      }),
                                      "aria-pressed": et.waveform === tt,
                                      onClick: () => {
                                        Vt({
                                          waveform: tt
                                        })
                                      },
                                      children: tt
                                    }, tt)))
                                  })]
                                }), (0, ft.jsx)(tq, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Fq(Rq, Iq),
                                  step: .1,
                                  value: Fq(Rq, et.pitchHz),
                                  format: () => `${et.pitchHz} Hz`,
                                  onChange: tt => {
                                    Vt({
                                      pitchHz: kq(Rq, tt)
                                    })
                                  }
                                }), (0, ft.jsx)(tq, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: et.syllableMs,
                                  format: Gq,
                                  onChange: tt => {
                                    Vt({
                                      syllableMs: tt
                                    })
                                  }
                                }), (0, ft.jsx)(tq, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: et.volume,
                                  onChange: tt => {
                                    Vt({
                                      volume: tt
                                    })
                                  }
                                })]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ft.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, ft.jsx)(tq, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: et.durationMs,
                                  format: Gq,
                                  onChange: tt => {
                                    Vt({
                                      durationMs: tt
                                    })
                                  }
                                }), (0, ft.jsx)(tq, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Ot.durationMs,
                                  step: 1,
                                  value: Ot.attackMs,
                                  format: Gq,
                                  onChange: tt => {
                                    Vt({
                                      attackMs: tt
                                    })
                                  }
                                }), (0, ft.jsx)(tq, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Ot.durationMs - Ot.attackMs,
                                  step: 1,
                                  value: Ot.releaseMs,
                                  format: Gq,
                                  onChange: tt => {
                                    Vt({
                                      releaseMs: tt
                                    })
                                  }
                                }), (0, ft.jsx)(tq, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: et.glideSemitones,
                                  format: zq,
                                  onChange: tt => {
                                    Vt({
                                      glideSemitones: tt
                                    })
                                  }
                                }), (0, ft.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, ft.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== et.lowpassHz,
                                    onChange: tt => {
                                      Vt({
                                        lowpassHz: tt.target.checked ? Lq : null
                                      })
                                    }
                                  }), (0, ft.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== et.lowpassHz && (0, ft.jsx)(tq, {
                                  label: "Filter",
                                  min: 0,
                                  max: Fq(Pq, Zq),
                                  step: .1,
                                  value: Fq(Pq, et.lowpassHz),
                                  format: () => `${et.lowpassHz} Hz`,
                                  onChange: tt => {
                                    Vt({
                                      lowpassHz: kq(Pq, tt)
                                    })
                                  }
                                })]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ft.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), oq.map((tt => {
                                  let {
                                    key: Ot,
                                    label: qt,
                                    max: Dt
                                  } = tt;
                                  return (0, ft.jsx)(tq, {
                                    label: qt,
                                    min: 0,
                                    max: Dt,
                                    step: .1,
                                    value: et.intonation[Ot],
                                    format: zq,
                                    onChange: tt => {
                                      Vt({
                                        intonation: {
                                          ...et.intonation,
                                          [Ot]: tt
                                        }
                                      })
                                    }
                                  }, Ot)
                                }))]
                              })]
                            })
                          }
                          const Uq = Object.keys(vq.g),
                            Aq = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function iq(tt) {
                            var et;
                            const Vt = JSON.stringify((0, vq.i)(tt));
                            return null !== (et = Uq.find((tt => JSON.stringify((0, vq.i)(vq.g[tt])) === Vt))) && void 0 !== et ? et : null
                          }

                          function Yq(tt) {
                            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof tt || null === tt) return JSON.stringify(tt);
                            return `{\n${Object.entries(tt).map((tt=>{let[Vt,Ot]=tt;return`${et}    ${Vt}: ${Yq(Ot,`${et}    `)},`})).join("\n")}\n${et}}`
                          }

                          function Bq(tt, et, Vt) {
                            const Ot = iq(tt),
                              qt = [`    line: ${JSON.stringify(et)},`];
                            return Vt && qt.push(`    speakerName: ${JSON.stringify(Vt)},`), qt.push("    voice,"), `const voice = ${Ot?JSON.stringify(Ot):Yq((0,vq.i)(tt))}\n\napi.setClientOption(playerId, "dialogue", {\n${qt.join("\n")}\n})`
                          }
                          const pq = 400,
                            xq = 90;
                          let Tq = null;

                          function gq(tt, et, Vt) {
                            return Tq ??= new AudioContext, Tq.resume(), (0, cq.e)(Tq, Tq.destination, tt, et, Vt, (() => {}))
                          }

                          function sq() {
                            const [tt, et] = (0, Ot.useState)(vq.g.regular), [Vt, qt] = (0, Ot.useState)(Aq[0]), [mt, dt] = (0, Ot.useState)("Innkeeper"), [jt, Ht] = (0, Ot.useState)(0), Xt = QO((tt => tt.volume)), Qt = (0, Ot.useRef)(null), lt = (0, Ot.useRef)(0), Et = (0, Ot.useRef)(0), wt = () => {
                              var tt;
                              null === (tt = Qt.current) || void 0 === tt || tt.call(Qt), Qt.current = null
                            };
                            (0, Ot.useEffect)((() => () => {
                              var tt;
                              null === (tt = Qt.current) || void 0 === tt || tt.call(Qt), window.clearTimeout(lt.current)
                            }), []);
                            const Nt = (0, Ot.useMemo)((() => ({
                                line: Vt,
                                speakerName: mt || void 0,
                                voice: tt
                              })), [Vt, mt, tt]),
                              Mt = (0, Ot.useRef)(Nt);
                            Mt.current = Nt;
                            const Jt = iq(tt),
                              Ct = tt => {
                                window.clearTimeout(lt.current), wt();
                                const {
                                  plan: et,
                                  synth: Vt
                                } = (0, Sq.f)(tt);
                                Vt && (Qt.current = gq(Vt, et.blips, Xt)), Ht((tt => tt + 1))
                              },
                              ut = Bq(tt, Vt, mt);
                            return (0, ft.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, ft.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, ft.jsxs)("div", {
                                  children: [(0, ft.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, ft.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, ft.jsx)(bt, {
                                  text: ut,
                                  label: "Copy code"
                                })]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Uq.map((tt => (0, ft.jsx)("button", {
                                  type: "button",
                                  className: Dt()("DocsVariantChip", {
                                    Active: Jt === tt
                                  }),
                                  "aria-pressed": Jt === tt,
                                  onClick: () => {
                                    (tt => {
                                      const Vt = vq.g[tt];
                                      et(Vt), Ct({
                                        ...Nt,
                                        voice: Vt
                                      })
                                    })(tt)
                                  },
                                  children: tt
                                }, tt))), !Jt && (0, ft.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, ft.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, ft.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, ft.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, ft.jsx)(Wq.e, {
                                      display: Nt
                                    }, jt)
                                  }), (0, ft.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: tt => {
                                      tt.preventDefault(), Ct(Nt)
                                    },
                                    children: [(0, ft.jsx)("input", {
                                      value: Vt,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: tt => {
                                        qt(tt.target.value)
                                      }
                                    }), (0, ft.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, ft.jsx)(yt, {
                                        name: "play"
                                      }), (0, ft.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, ft.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Aq.map((tt => (0, ft.jsx)("button", {
                                      type: "button",
                                      className: Dt()("DocsVariantChip", {
                                        Active: Vt === tt
                                      }),
                                      onClick: () => {
                                        var et;
                                        qt(et = tt), Ct({
                                          ...Nt,
                                          line: et
                                        })
                                      },
                                      children: tt
                                    }, tt)))
                                  }), (0, ft.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, ft.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, ft.jsx)("input", {
                                      value: mt,
                                      placeholder: "No name",
                                      onChange: tt => {
                                        dt(tt.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, ft.jsx)(rq, {
                                  synth: tt,
                                  onChange: Vt => {
                                    const Ot = {
                                      ...tt,
                                      ...Vt
                                    };
                                    et(Ot);
                                    const qt = {
                                        ...Nt,
                                        voice: Ot
                                      },
                                      Dt = performance.now();
                                    if (Dt - Et.current >= xq) {
                                      Et.current = Dt, wt();
                                      const tt = (0, Sq.f)(qt).plan.blips[0];
                                      tt && (Qt.current = gq((0, vq.i)(Ot), [{
                                        ...tt,
                                        atMs: 0
                                      }], Xt))
                                    }
                                    window.clearTimeout(lt.current), lt.current = window.setTimeout((() => {
                                      Ct(Mt.current)
                                    }), pq)
                                  }
                                })]
                              }), (0, ft.jsx)(Kt, {
                                code: ut,
                                lang: "ts"
                              })]
                            })
                          }
                          var nq = Vt(5038);
                          const tD = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            eD = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            VD = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${eD}`, "g"), nq.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, nq.l]
                            ];

                          function OD(tt) {
                            return `${tt.pageId}#${tt.anchor}`
                          }
                          let qD, DD, mD;

                          function dD(tt) {
                            const et = (0, ht.h)(tt),
                              Vt = new Set;
                            for (const [, , Ot] of et.matchAll(ht.d)) {
                              const tt = Ot.startsWith("#") ? At(Ot) : null,
                                et = tt ? OD({
                                  pageId: tt.page.id,
                                  anchor: tt.anchor
                                }) : null;
                              null !== et && (qD || (qD = new Set(kt.flatMap((tt => ct(tt.layout) ? rt(tt).sections.map((et => OD({
                                pageId: tt.id,
                                anchor: et.heading.anchor
                              }))) : [])))), qD).has(et) && Vt.add(et)
                            }
                            for (const [, , Ot] of et.matchAll(tD)) {
                              const tt = Ee(Ot);
                              tt && Vt.add(OD(tt))
                            }
                            return Vt
                          }

                          function jD(tt, et) {
                            const Vt = new Set,
                              Ot = function(tt) {
                                return tt.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(tt);
                            for (const [, qt] of Ot.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Vt.add(qt);
                            for (const [qt, Dt] of VD)
                              for (const [, tt] of(0, nq.f)(Ot, qt, Dt)) et.has(tt) && Vt.add(tt);
                            return Vt
                          }

                          function HD(tt, et, Vt, Ot) {
                            const qt = tt.get(et);
                            qt ? !Ot && qt.some((tt => tt.pageId === Vt.pageId)) || qt.push(Vt) : tt.set(et, [Vt])
                          }
                          const XD = /^[A-Za-z_$][\w$]*$/;

                          function QD(tt) {
                            return XD.test(tt.name) ? tt.name : "options"
                          }

                          function lD(tt, et) {
                            const Vt = tt.params.map(QD).join(", ");
                            return et ? `${tt.name} = (${Vt}) => {\n\t\n}` : `api.${tt.name}(${Vt})`
                          }

                          function ED(tt) {
                            let {
                              method: et,
                              isCallback: Vt
                            } = tt;
                            return (0, ft.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, ft.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Vt ? (0, ft.jsxs)(ft.Fragment, {
                                  children: [(0, ft.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: et.name
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, ft.jsxs)(ft.Fragment, {
                                  children: [(0, ft.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: et.name
                                  }), (0, ft.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), et.params.map(((tt, Vt) => (0, ft.jsxs)(Ot.Fragment, {
                                  children: [Vt > 0 && (0, ft.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, ft.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${et.name}-${QD(tt)}`,
                                    children: tt.name
                                  })]
                                }, tt.name))), (0, ft.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Vt ? ") => " : ")"
                                }), Vt && !et.returns && (0, ft.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), et.returns && et.returns.type && (0, ft.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Vt && (0, ft.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, ft.jsx)(ve, {
                                  type: et.returns.type
                                })]
                              })]
                            })
                          }

                          function fD(tt) {
                            let {
                              title: et,
                              references: Vt
                            } = tt;
                            const qt = (0, Ot.useContext)(fe);
                            return (0, ft.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, ft.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: et
                              }), Vt.map((tt => (0, ft.jsx)(mt.b, {
                                to: Yt(qt, zt(tt.pageId), tt.anchor),
                                children: tt.label
                              }, `${tt.pageId}#${tt.anchor}`)))]
                            })
                          }

                          function wD(tt) {
                            var et, Vt;
                            let {
                              pageId: Ot,
                              anchor: qt
                            } = tt;
                            const Dt = OD({
                                pageId: Ot,
                                anchor: qt
                              }),
                              mt = null !== (et = function() {
                                if (!mD) {
                                  mD = new Map;
                                  const Ot = new Set(kt.filter((tt => "callbacks" === tt.layout)).flatMap((tt => rt(tt).sections.map((tt => tt.heading.text)))));
                                  for (const qt of kt)
                                    if ("article" === qt.layout || "snippets" === qt.layout)
                                      for (const Dt of (0, ht.z)(rt(qt)))
                                        for (const {
                                            code: mt
                                          }
                                          of(0, ht.l)(Dt.blocks))
                                          for (const dt of jD(mt, Ot)) {
                                            const Ot = le().get(dt);
                                            if (Ot) {
                                              var tt, et, Vt;
                                              const mt = {
                                                pageId: qt.id,
                                                anchor: null !== (tt = null === (et = Dt.heading) || void 0 === et ? void 0 : et.anchor) && void 0 !== tt ? tt : "",
                                                label: null !== (Vt = qt.navTitle) && void 0 !== Vt ? Vt : qt.title
                                              };
                                              HD(mD, OD(Ot), mt, !1)
                                            }
                                          }
                                }
                                return mD
                              }().get(Dt)) && void 0 !== et ? et : [],
                              dt = null !== (Vt = function() {
                                if (!DD) {
                                  DD = new Map;
                                  const tt = zt("changelog");
                                  for (const et of rt(tt).sections) {
                                    const Vt = new Set(et.blocks.flatMap((tt => [...dD(tt)])));
                                    for (const Ot of Vt) {
                                      const Vt = {
                                        pageId: tt.id,
                                        anchor: et.heading.anchor,
                                        label: et.heading.text
                                      };
                                      HD(DD, Ot, Vt, !0)
                                    }
                                  }
                                }
                                return DD
                              }().get(Dt)) && void 0 !== Vt ? Vt : [];
                            return 0 === mt.length && 0 === dt.length ? null : (0, ft.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [mt.length > 0 && (0, ft.jsx)(fD, {
                                title: "Used in",
                                references: mt
                              }), dt.length > 0 && (0, ft.jsx)(fD, {
                                title: "Changelog",
                                references: dt
                              })]
                            })
                          }

                          function yD(tt) {
                            let {
                              method: et,
                              pageId: Vt,
                              anchor: Ot,
                              isCallback: qt
                            } = tt;
                            const Dt = qt ? void 0 : je().get(et.name),
                              mt = et.description.length > 0 || null === Dt || void 0 === Dt || !Dt.description ? et.description : (0, ht.G)(Dt.description);
                            return (0, ft.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, ft.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ft.jsx)(XV, {
                                  level: 2,
                                  text: et.name,
                                  anchor: Ot,
                                  className: "DocsCardTitle"
                                }), (0, ft.jsx)(bt, {
                                  text: lD(et, qt),
                                  label: qt ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ft.jsx)(ED, {
                                method: et,
                                isCallback: qt
                              }), Dt && null !== Dt.deprecation && (0, ft.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, ft.jsx)("strong", {
                                  children: "Deprecated"
                                }), Dt.deprecation && (0, ft.jsxs)(ft.Fragment, {
                                  children: [": ", (0, ft.jsx)(ue, {
                                    text: (dt = Dt.deprecation, (0, nq.s)(dt, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, nq.j)("`\\w"), (tt => {
                                      let [et] = tt;
                                      return le().has(et) ? `\`${et}\`` : et
                                    })))
                                  })]
                                })]
                              }), mt.length > 0 && (0, ft.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ft.jsx)(fV, {
                                  blocks: mt
                                })
                              }), et.params.length > 0 && (0, ft.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ft.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, ft.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: et.params.map((tt => (0, ft.jsxs)("div", {
                                    id: `${et.name}-${QD(tt)}`,
                                    className: "DocsParam",
                                    children: [(0, ft.jsxs)("dt", {
                                      children: [(0, ft.jsx)("code", {
                                        className: "DocsParamName",
                                        children: tt.name
                                      }), (0, ft.jsx)(ve, {
                                        type: tt.type
                                      })]
                                    }), tt.description && (0, ft.jsx)("dd", {
                                      children: (0, ft.jsx)(ue, {
                                        text: tt.description
                                      })
                                    })]
                                  }, tt.name)))
                                })]
                              }), et.returns && (et.returns.type || et.returns.description.length > 0) && (0, ft.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ft.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [et.returns.type && (0, ft.jsx)(ve, {
                                    type: et.returns.type
                                  }), et.returns.description.length > 0 && (0, ft.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, ft.jsx)(fV, {
                                      blocks: et.returns.description
                                    })
                                  })]
                                })]
                              }), (0, ft.jsx)(wD, {
                                pageId: Vt,
                                anchor: Ot
                              })]
                            });
                            var dt
                          }

                          function ND(tt) {
                            var et;
                            return null !== tt.defaultValue && "undefined" !== tt.defaultValue ? tt.defaultValue : null !== (et = tt.example) && void 0 !== et ? et : "value"
                          }

                          function aD(tt) {
                            let {
                              setting: et,
                              pageId: Vt,
                              anchor: Ot,
                              setterSnippet: qt
                            } = tt;
                            const Dt = null === et.defaultValue ? null : ae(et.defaultValue);
                            return (0, ft.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, ft.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ft.jsx)(XV, {
                                  level: 2,
                                  text: et.name,
                                  anchor: Ot,
                                  className: "DocsCardTitle"
                                }), (0, ft.jsx)(bt, {
                                  text: qt(et.name, ND(et)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ft.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, ft.jsxs)("div", {
                                  children: [(0, ft.jsx)("dt", {
                                    children: "Type"
                                  }), (0, ft.jsx)("dd", {
                                    children: (0, ft.jsx)(ve, {
                                      type: et.type
                                    })
                                  })]
                                }), null !== et.defaultValue && (0, ft.jsxs)("div", {
                                  children: [(0, ft.jsx)("dt", {
                                    children: "Default"
                                  }), (0, ft.jsx)("dd", {
                                    children: (0, ft.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Dt && (0, ft.jsx)(Me, {
                                        colour: Dt
                                      }), et.defaultValue]
                                    })
                                  })]
                                }), null !== et.example && (0, ft.jsxs)("div", {
                                  children: [(0, ft.jsx)("dt", {
                                    children: "Example"
                                  }), (0, ft.jsx)("dd", {
                                    children: (0, ft.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: et.example
                                    })
                                  })]
                                })]
                              }), et.description.length > 0 && (0, ft.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ft.jsx)(fV, {
                                  blocks: et.description
                                })
                              }), (0, ft.jsx)(wD, {
                                pageId: Vt,
                                anchor: Ot
                              })]
                            })
                          }

                          function MD(tt) {
                            let {
                              section: et
                            } = tt;
                            return (0, ft.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, ft.jsx)(XV, {
                                level: 2,
                                text: et.heading.text,
                                anchor: et.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, ft.jsx)("div", {
                                className: "DocsProse",
                                children: (0, ft.jsx)(fV, {
                                  blocks: et.blocks
                                })
                              })]
                            })
                          }

                          function bD(tt) {
                            let {
                              section: et
                            } = tt;
                            return (0, ft.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ft.jsx)(XV, {
                                level: et.heading.level,
                                text: et.heading.text,
                                anchor: et.heading.anchor
                              }), (0, ft.jsx)(fV, {
                                blocks: et.blocks
                              })]
                            })
                          }
                          const JD = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function CD(tt) {
                            let {
                              page: et,
                              section: Vt
                            } = tt;
                            if ("methods" === et.layout || "callbacks" === et.layout) return (0, ft.jsx)(yD, {
                              method: KV(Vt),
                              pageId: et.id,
                              anchor: Vt.heading.anchor,
                              isCallback: "callbacks" === et.layout
                            });
                            if ("settings" === et.layout) {
                              const tt = function(tt) {
                                const et = {
                                  name: tt.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Ot of tt.blocks) {
                                  var Vt;
                                  if (uV(Ot)) continue;
                                  const tt = "paragraph" === Ot.kind ? Ot.text.match(hV) : null;
                                  if (!tt) {
                                    et.description.push(Ot);
                                    continue
                                  }
                                  const qt = null !== (Vt = CV(tt[2])) && void 0 !== Vt ? Vt : tt[2];
                                  "Type" === tt[1] ? et.type = qt : "Default" === tt[1] ? et.defaultValue = qt : "" !== qt && (et.example = qt)
                                }
                                return et.type ? et : null
                              }(Vt);
                              if (tt) return (0, ft.jsx)(aD, {
                                setting: tt,
                                pageId: et.id,
                                anchor: Vt.heading.anchor,
                                setterSnippet: et.setterSnippet
                              })
                            }
                            return "snippets" === et.layout ? (0, ft.jsx)(MD, {
                              section: Vt
                            }) : "changelog" === et.layout ? (0, ft.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, ft.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, ft.jsx)(XV, {
                                  level: 2,
                                  text: Vt.heading.text,
                                  anchor: Vt.heading.anchor
                                })
                              }), (0, ft.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, ft.jsx)(fV, {
                                  blocks: vV(Vt.blocks)
                                })
                              })]
                            }) : et.gallery ? (0, ft.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ft.jsx)(XV, {
                                level: Vt.heading.level,
                                text: Vt.heading.text,
                                anchor: Vt.heading.anchor
                              }), (0, ft.jsx)(WO, {
                                kind: et.gallery,
                                content: rt(et),
                                blocks: Vt.blocks
                              })]
                            }) : (0, ft.jsx)(bD, {
                              section: Vt
                            })
                          }

                          function uD(tt) {
                            let {
                              page: et,
                              onTocChange: Vt
                            } = tt;
                            const qt = rt(et),
                              [Dt, mt] = (0, Ot.useState)(""),
                              dt = "article" !== et.layout,
                              jt = NV(et.gallery) ? et.gallery : null,
                              Ht = null !== jt,
                              Xt = Dt.trim().toLowerCase(),
                              Qt = (0, Ot.useRef)(null),
                              lt = (0, Ot.useCallback)((tt => {
                                var et;
                                null === (et = Qt.current) || void 0 === et || et.preview(tt)
                              }), []),
                              Et = (0, Ot.useMemo)((() => {
                                if (!et.hasParticlePlayground) return [];
                                const tt = RV(qt.intro).find((tt => "names" === tt.kind && !tt.names.some((tt => null !== oV(tt.name)))));
                                return "names" === (null === tt || void 0 === tt ? void 0 : tt.kind) ? tt.names.map((tt => tt.name)) : []
                              }), [et, qt]),
                              wt = (0, Ot.useMemo)((() => {
                                if (!et.hasTextPlayground) return [];
                                const tt = qt.sections.flatMap((tt => tt.blocks.flatMap((tt => {
                                  var et;
                                  return (null !== (et = cV(tt)) && void 0 !== et ? et : []).flatMap((tt => oe(tt.name) ? [tt.name] : []))
                                }))));
                                return [...new Set(tt)]
                              }), [et, qt]),
                              yt = (0, Ot.useMemo)((() => Xt ? qt.sections.filter((tt => function(tt, et) {
                                return !!tt.heading.text.toLowerCase().includes(et) || tt.blocks.some((tt => (0, ht.h)(tt).toLowerCase().includes(et)))
                              }(tt, Xt))) : qt.sections), [qt, Xt]),
                              Nt = (0, Ot.useMemo)((() => function(tt, et) {
                                return "article" !== tt.layout ? et.map((tt => ({
                                  anchor: tt.heading.anchor,
                                  text: tt.heading.text,
                                  level: 2
                                }))) : et.flatMap((tt => {
                                  const et = tt.blocks.flatMap((tt => "heading" === tt.kind && 3 === tt.level ? [{
                                    anchor: tt.anchor,
                                    text: tt.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: tt.heading.anchor,
                                    text: tt.heading.text,
                                    level: 2
                                  }, ...et]
                                }))
                              }(et, yt)), [et, yt]);
                            return (0, Ot.useEffect)((() => {
                              Vt(Nt)
                            }), [Nt, Vt]), (0, ft.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, ft.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, ft.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: qt.title || et.title
                                }), (0, ft.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: et.summary
                                }), (0, ft.jsx)(TO, {
                                  page: et
                                }), dt && (0, ft.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, ft.jsxs)("span", {
                                    children: [(0, ft.jsx)("strong", {
                                      children: qt.sections.length
                                    }), " ", JD[et.layout]]
                                  })
                                })]
                              }), "" === et.slug && (0, ft.jsx)(cO, {}), jt && (0, ft.jsx)(ZO, {
                                kind: jt
                              }, jt), et.hasParticlePlayground && (0, ft.jsx)(Hq, {
                                ref: Qt,
                                textures: Et
                              }), !Ht && qt.intro.length > 0 && (0, ft.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: et.gallery ? (0, ft.jsx)(aO.Provider, {
                                  value: et.hasParticlePlayground ? lt : null,
                                  children: (0, ft.jsx)(WO, {
                                    kind: et.gallery,
                                    content: qt,
                                    blocks: qt.intro
                                  })
                                }) : (0, ft.jsx)(fV, {
                                  blocks: vV(qt.intro)
                                })
                              }), et.hasTextPlayground && (0, ft.jsx)(hq, {
                                fontAwesomeIcons: wt
                              }), et.hasVoicePlayground && (0, ft.jsx)(sq, {}), et.childPageIds && (0, ft.jsx)(cO, {
                                cards: et.childPageIds.map((tt => ({
                                  pageId: tt
                                }))),
                                label: et.title
                              }), dt && (0, ft.jsx)(bV, {
                                className: "DocsFilterBar",
                                value: Dt,
                                placeholder: `Filter ${qt.sections.length} ${JD[et.layout]}\u2026`,
                                label: `Filter ${JD[et.layout]}`,
                                onChange: mt,
                                count: Xt ? {
                                  visible: yt.length,
                                  total: qt.sections.length
                                } : null
                              }), !Ht && (0, ft.jsxs)("div", {
                                className: `DocsSections Layout-${et.layout}`,
                                children: [yt.map((tt => (0, ft.jsx)(CD, {
                                  page: et,
                                  section: tt
                                }, tt.heading.anchor))), 0 === yt.length && (0, ft.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", JD[et.layout], " match \u201c", Dt, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const KD = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function hD(tt) {
                            let {
                              entry: et,
                              isActive: Vt,
                              onNavigate: Ot,
                              label: qt,
                              children: mt
                            } = tt;
                            return (0, ft.jsx)("a", {
                              href: `#${et.anchor}`,
                              "aria-label": qt,
                              className: Dt()(`Level${et.level}`, {
                                Active: Vt
                              }),
                              "aria-current": Vt ? "location" : void 0,
                              onClick: tt => {
                                tt.preventDefault(), Ot(et.anchor)
                              },
                              children: mt
                            })
                          }

                          function vD(tt) {
                            let {
                              toc: et,
                              activeAnchor: Vt,
                              onNavigate: qt
                            } = tt;
                            const mt = Math.max(0, et.findIndex((tt => tt.anchor === Vt))),
                              dt = (0, Ot.useRef)(null),
                              jt = (0, Ot.useRef)(!1);
                            (0, Ot.useEffect)((() => {
                              var tt, Vt;
                              const Ot = null === (tt = dt.current) || void 0 === tt ? void 0 : tt.closest(".DocsToc"),
                                qt = null === (Vt = dt.current) || void 0 === Vt ? void 0 : Vt.querySelector(".DocsTimelineNotch.Active");
                              if (!Ot || !qt) return;
                              let Dt = 0;
                              if (mt === et.length - 1) Dt = Ot.scrollHeight;
                              else if (mt > 0) {
                                const tt = Ot.getBoundingClientRect(),
                                  et = qt.getBoundingClientRect();
                                Dt = Ot.scrollTop + et.top + et.height / 2 - (tt.top + Ot.clientHeight / 2)
                              }
                              Ot.scrollTo({
                                top: Dt,
                                behavior: jt.current ? "smooth" : "auto"
                              }), jt.current = !0
                            }), [mt, et.length]);
                            const Ht = [];
                            return et.forEach(((tt, et) => {
                              var Vt, Ot, qt;
                              const Dt = function(tt) {
                                  const et = tt.trim().match(KD);
                                  return et ? {
                                    day: et[1],
                                    month: `${et[2]} ${et[3]}`
                                  } : null
                                }(tt.text),
                                mt = null !== (Vt = null === Dt || void 0 === Dt ? void 0 : Dt.month) && void 0 !== Vt ? Vt : null;
                              null !== mt && (null === (Ot = Ht.at(-1)) || void 0 === Ot ? void 0 : Ot.month) === mt || Ht.push({
                                month: mt,
                                entries: []
                              }), Ht.at(-1).entries.push({
                                entry: tt,
                                day: null !== (qt = null === Dt || void 0 === Dt ? void 0 : Dt.day) && void 0 !== qt ? qt : null,
                                index: et
                              })
                            })), (0, ft.jsx)("ol", {
                              ref: dt,
                              className: "DocsTimeline",
                              children: Ht.map((tt => {
                                let {
                                  month: et,
                                  entries: Vt
                                } = tt;
                                return (0, ft.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [et && (0, ft.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: et
                                  }), (0, ft.jsx)("ol", {
                                    children: Vt.map((tt => {
                                      let {
                                        entry: et,
                                        day: Vt,
                                        index: Ot
                                      } = tt;
                                      return (0, ft.jsx)("li", {
                                        className: Dt()("DocsTimelineNotch", {
                                          Passed: Ot < mt,
                                          Active: Ot === mt
                                        }),
                                        children: (0, ft.jsx)(hD, {
                                          entry: et,
                                          isActive: Ot === mt,
                                          onNavigate: qt,
                                          label: et.text,
                                          children: (0, ft.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Vt && void 0 !== Vt ? Vt : et.text
                                          })
                                        })
                                      }, et.anchor)
                                    }))
                                  })]
                                }, Vt[0].entry.anchor)
                              }))
                            })
                          }

                          function WD(tt) {
                            let {
                              isChangelog: et,
                              toc: Vt,
                              activeAnchor: Ot,
                              onNavigate: qt
                            } = tt;
                            return 0 === Vt.length ? null : (0, ft.jsxs)(ft.Fragment, {
                              children: [(0, ft.jsx)("div", {
                                className: "DocsTocTitle",
                                children: et ? "Updates" : "On this page"
                              }), et ? (0, ft.jsx)(vD, {
                                toc: Vt,
                                activeAnchor: Ot,
                                onNavigate: qt
                              }) : (0, ft.jsx)("ul", {
                                children: Vt.map((tt => (0, ft.jsx)("li", {
                                  children: (0, ft.jsx)(hD, {
                                    entry: tt,
                                    isActive: tt.anchor === Ot,
                                    onNavigate: qt,
                                    children: tt.text.replace(/`/g, "")
                                  })
                                }, tt.anchor)))
                              })]
                            })
                          }
                          const SD = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            cD = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            RD = 20,
                            ID = 10,
                            PD = 40,
                            ZD = 120;
                          let LD;

                          function FD(tt) {
                            const et = tt.gallery;
                            if (!et) return [];
                            if (NV(et)) return function(tt) {
                              return MV(tt).entries.map((tt => tt.name))
                            }(et).map((Vt => ({
                              page: tt,
                              anchor: PV(et, Vt),
                              title: Vt,
                              kind: cD[et],
                              text: "",
                              listedUnder: tt.title
                            })));
                            const Vt = rt(tt);
                            return (0, ht.z)(Vt).flatMap((Ot => {
                              const qt = Ot.heading ? `${tt.title} \u203a ${Ot.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : tt.title;
                              return LV(et, Vt, Ot.blocks).flatMap((Vt => "names" !== Vt.kind ? [] : Vt.names.map((Ot => {
                                const Dt = Vt.isSongs ? "Song" : cD[et];
                                return {
                                  page: tt,
                                  anchor: Ot.anchor,
                                  title: Ot.name,
                                  kind: Dt,
                                  text: "",
                                  listedUnder: qt
                                }
                              }))))
                            }))
                          }

                          function kD(tt, et, Vt) {
                            const Ot = tt.title.toLowerCase();
                            let qt = 0;
                            if (Ot === et) qt = 100;
                            else if (Ot.startsWith(et)) qt = 80;
                            else if (Ot.includes(et)) qt = 60;
                            else if (Vt.every((tt => Ot.includes(tt)))) qt = 45;
                            else {
                              if (!tt.text.toLowerCase().includes(et)) return 0;
                              qt = 20
                            }
                            return qt - Math.min(Ot.length / 10, 9) + ("Page" === tt.kind ? 8 : "Method" === tt.kind ? 3 : 0) - (tt.listedUnder ? RD : 0)
                          }

                          function GD(tt, et) {
                            const Vt = tt.toLowerCase().indexOf(et),
                              Ot = Math.max(0, Vt - ZD / 3);
                            return `${Ot>0?"\u2026":""}${tt.slice(Ot,Ot+ZD)}${Ot+ZD<tt.length?"\u2026":""}`
                          }

                          function zD(tt) {
                            let {
                              text: et,
                              query: Vt
                            } = tt;
                            const Ot = Vt ? et.toLowerCase().indexOf(Vt) : -1;
                            return -1 === Ot ? (0, ft.jsx)(ft.Fragment, {
                              children: et
                            }) : (0, ft.jsxs)(ft.Fragment, {
                              children: [et.slice(0, Ot), (0, ft.jsx)("mark", {
                                children: et.slice(Ot, Ot + Vt.length)
                              }), et.slice(Ot + Vt.length)]
                            })
                          }

                          function oD(tt) {
                            let {
                              basePath: et,
                              onClose: Vt
                            } = tt;
                            const qt = (0, dt.w)(),
                              [mt, jt] = (0, Ot.useState)(""),
                              [Ht, Xt] = (0, Ot.useState)(0),
                              Qt = (0, Ot.useRef)(null),
                              lt = (0, Ot.useRef)(null),
                              Et = mt.trim().toLowerCase(),
                              wt = (0, Ot.useMemo)((() => {
                                const tt = (LD || (LD = kt.flatMap((tt => {
                                  const et = rt(tt);
                                  return [{
                                    page: tt,
                                    anchor: "",
                                    title: tt.title,
                                    kind: "Page",
                                    text: tt.summary
                                  }, ...et.sections.flatMap((et => {
                                    const Vt = et.blocks.filter((tt => "paragraph" === tt.kind)).map(ht.h).join(" ").replace(/[`*]/g, ""),
                                      Ot = {
                                        page: tt,
                                        anchor: et.heading.anchor,
                                        title: et.heading.text.replace(/`/g, ""),
                                        kind: SD[tt.layout],
                                        text: Vt
                                      },
                                      qt = et.blocks.flatMap((et => "article" === tt.layout && "heading" === et.kind && 3 === et.level ? [{
                                        page: tt,
                                        anchor: et.anchor,
                                        title: et.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Ot.title
                                      }] : []));
                                    return [Ot, ...qt]
                                  })), ...FD(tt)]
                                }))), LD);
                                if (!Et) return tt.filter((tt => "Page" === tt.kind));
                                const et = Et.split(/\s+/);
                                let Vt = 0;
                                return tt.map((tt => ({
                                  entry: tt,
                                  score: kD(tt, Et, et)
                                }))).filter((tt => tt.score > 0)).sort(((tt, et) => et.score - tt.score)).filter((tt => !tt.entry.listedUnder || (Vt++, Vt <= ID))).slice(0, PD).map((tt => tt.entry))
                              }), [Et]);
                            (0, Ot.useEffect)((() => {
                              Xt(0)
                            }), [Et]), (0, Ot.useEffect)((() => {
                              const tt = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === tt || void 0 === tt || tt.focus()
                              }
                            }), []), (0, Ot.useEffect)((() => {
                              var tt, et;
                              null === (tt = Qt.current) || void 0 === tt || null === (et = tt.querySelector(".Active")) || void 0 === et || et.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Ht]);
                            const Nt = tt => {
                              qt(Yt(et, tt.page, tt.anchor)), Vt()
                            };
                            return (0, ft.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: tt => {
                                tt.target === tt.currentTarget && Vt()
                              },
                              children: (0, ft.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: tt => {
                                  tt.target !== lt.current && tt.preventDefault()
                                },
                                onKeyDown: tt => {
                                  if ("Escape" === tt.key) Vt();
                                  else if ("Tab" === tt.key) {
                                    var et;
                                    tt.preventDefault(), null === (et = lt.current) || void 0 === et || et.focus()
                                  }
                                },
                                children: [(0, ft.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, ft.jsx)(yt, {
                                    name: "magnifying-glass"
                                  }), (0, ft.jsx)("input", {
                                    ref: lt,
                                    autoFocus: !0,
                                    value: mt,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": wt.length > 0 ? `DocsSearchResult-${Ht}` : void 0,
                                    onChange: tt => {
                                      jt(tt.target.value)
                                    },
                                    onKeyDown: tt => {
                                      if ("ArrowDown" === tt.key || "ArrowUp" === tt.key) {
                                        tt.preventDefault();
                                        const et = "ArrowDown" === tt.key ? 1 : -1;
                                        Xt((Ht + et + wt.length) % Math.max(wt.length, 1))
                                      } else "Enter" === tt.key && wt[Ht] && Nt(wt[Ht])
                                    }
                                  }), (0, ft.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, ft.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Qt,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Et && (0, ft.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), wt.map(((tt, et) => {
                                    var Vt;
                                    return (0, ft.jsxs)("li", {
                                      id: `DocsSearchResult-${et}`,
                                      role: "option",
                                      "aria-selected": et === Ht,
                                      className: Dt()("DocsSearchResult", {
                                        Active: et === Ht
                                      }),
                                      onMouseMove: () => {
                                        Xt(et)
                                      },
                                      onClick: () => {
                                        Nt(tt)
                                      },
                                      children: [(0, ft.jsx)(yt, {
                                        name: tt.page.icon
                                      }), (0, ft.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, ft.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, ft.jsx)(zD, {
                                            text: tt.title,
                                            query: Et
                                          })
                                        }), tt.text && (0, ft.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, ft.jsx)(zD, {
                                            text: GD(tt.text, Et),
                                            query: Et
                                          })
                                        })]
                                      }), (0, ft.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === tt.kind ? "Page" : null !== (Vt = tt.listedUnder) && void 0 !== Vt ? Vt : `${tt.kind} \xb7 ${tt.page.title}`
                                      })]
                                    }, `${tt.page.id}#${tt.anchor}`)
                                  })), Et && 0 === wt.length && (0, ft.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", mt, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function rD(tt, et) {
                            if (et < 10) return `${tt.toFixed(1)}s`;
                            const Vt = Math.floor(tt);
                            return `${Math.floor(Vt/60)}:${String(Vt%60).padStart(2,"0")}`
                          }

                          function UD() {
                            const tt = QO((tt => tt.track)),
                              et = QO((tt => tt.volume)),
                              [Vt, qt] = (0, Ot.useState)(0),
                              mt = (0, Ot.useRef)(VO);
                            if ((0, Ot.useEffect)((() => {
                                if (!tt) return;
                                if (qt(wO()), "playing" !== tt.status) return;
                                let et = 0;
                                const Vt = () => {
                                  qt(wO()), et = requestAnimationFrame(Vt)
                                };
                                return et = requestAnimationFrame(Vt), () => {
                                  cancelAnimationFrame(et)
                                }
                              }), [tt]), !tt) return null;
                            const dt = "paused" !== tt.status,
                              jt = Math.min(Vt, tt.duration);
                            return (0, ft.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, ft.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, ft.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": dt ? `Pause ${tt.name}` : `Play ${tt.name}`,
                                  onClick: fO,
                                  children: (0, ft.jsx)(yt, {
                                    name: dt ? "pause" : "play"
                                  })
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, ft.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, ft.jsx)("code", {
                                      children: tt.name
                                    }), (0, ft.jsx)("span", {
                                      children: tt.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, ft.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, ft.jsx)("span", {
                                      children: rD(jt, tt.duration)
                                    }), (0, ft.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: tt.duration || 1,
                                      step: .01,
                                      value: jt,
                                      disabled: 0 === tt.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${rD(jt,tt.duration)} of ${rD(tt.duration,tt.duration)}`,
                                      onChange: tt => {
                                        const et = Number(tt.target.value);
                                        ! function(tt) {
                                          var et;
                                          dO = tt, null === (et = DO) || void 0 === et || et.seek(tt)
                                        }(et), qt(et)
                                      }
                                    }), (0, ft.jsx)("span", {
                                      children: tt.duration > 0 ? rD(tt.duration, tt.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, ft.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, ft.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === et ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === et ? yO(mt.current) : (mt.current = et, yO(0))
                                    },
                                    children: (0, ft.jsx)(yt, {
                                      name: "volume",
                                      className: Dt()({
                                        Muted: 0 === et
                                      })
                                    })
                                  }), (0, ft.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: et,
                                    "aria-label": "Volume",
                                    onChange: tt => {
                                      yO(Number(tt.target.value))
                                    }
                                  })]
                                }), (0, ft.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var et;
                                    null === (et = document.querySelector(`[data-docs-track="${CSS.escape(OO(tt.name,tt.isSong))}"]`)) || void 0 === et || et.focus(), NO()
                                  },
                                  children: (0, ft.jsx)(yt, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var AD = Vt(39);
                          const iD = "docsTheme",
                            YD = window.matchMedia("(prefers-color-scheme: light)");

                          function BD(tt) {
                            let {
                              theme: et,
                              onChange: Vt
                            } = tt;
                            const Ot = "dark" === et ? "light" : "dark";
                            return (0, ft.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Ot} theme`,
                              title: `Switch to ${Ot} theme`,
                              onClick: () => {
                                Vt(Ot)
                              },
                              children: (0, ft.jsx)(yt, {
                                name: "dark" === et ? "moon" : "sun"
                              })
                            })
                          }
                          const pD = "https://github.com/Bloxdy/code-api",
                            xD = "https://discord.gg/playbloxd",
                            TD = 180,
                            gD = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function sD(tt) {
                            let {
                              basePath: et,
                              activePageId: Vt,
                              onNavigate: Ot
                            } = tt;
                            return (0, ft.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Gt.map((tt => (0, ft.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, ft.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: tt.title
                                }), tt.pageIds.map((tt => {
                                  var qt;
                                  const dt = zt(tt);
                                  return (0, ft.jsxs)(mt.b, {
                                    to: Yt(et, dt),
                                    className: Dt()("DocsNavLink", {
                                      Active: dt.id === Vt
                                    }),
                                    "aria-current": dt.id === Vt ? "page" : void 0,
                                    onClick: Ot,
                                    children: [(0, ft.jsx)(yt, {
                                      name: dt.icon
                                    }), (0, ft.jsx)("span", {
                                      children: null !== (qt = dt.navTitle) && void 0 !== qt ? qt : dt.title
                                    })]
                                  }, dt.id)
                                }))]
                              }, tt.title)))
                            })
                          }

                          function nD(tt) {
                            let {
                              basePath: et,
                              pageId: Vt
                            } = tt;
                            const Ot = Gt.flatMap((tt => tt.pageIds)),
                              qt = Ot.indexOf(Vt),
                              Dt = qt > 0 ? zt(Ot[qt - 1]) : null,
                              dt = qt < Ot.length - 1 ? zt(Ot[qt + 1]) : null;
                            return (0, ft.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Dt ? (0, ft.jsxs)(mt.b, {
                                className: "DocsPagerLink Previous",
                                to: Yt(et, Dt),
                                children: [(0, ft.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, ft.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Dt.title
                                })]
                              }) : (0, ft.jsx)("span", {}), dt && (0, ft.jsxs)(mt.b, {
                                className: "DocsPagerLink Next",
                                to: Yt(et, dt),
                                children: [(0, ft.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, ft.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: dt.title
                                })]
                              })]
                            })
                          }

                          function tm(tt) {
                            let {
                              basePath: et,
                              embedded: Vt = !1
                            } = tt;
                            const {
                              pageSlug: qt = ""
                            } = (0, dt.B)(), Ht = (0, dt.s)(), Xt = (0, dt.w)(), Qt = (lt = qt, kt.find((tt => tt.slug === lt)));
                            var lt;
                            const [Et, wt] = function() {
                              const [tt, et] = (0, Ot.useState)((() => {
                                const tt = AD.e.getItem(iD);
                                return "dark" === tt || "light" === tt ? tt : null
                              })), [Vt, qt] = (0, Ot.useState)(YD.matches ? "light" : "dark");
                              return (0, Ot.useEffect)((() => {
                                const tt = () => {
                                  qt(YD.matches ? "light" : "dark")
                                };
                                return YD.addEventListener("change", tt), () => {
                                  YD.removeEventListener("change", tt)
                                }
                              }), []), [null !== tt && void 0 !== tt ? tt : Vt, tt => {
                                AD.e.setItem(iD, tt), et(tt)
                              }]
                            }(), [Nt, Mt] = (0, Ot.useState)(null), [bt, Jt] = (0, Ot.useState)(!1), [Ct, ut] = (0, Ot.useState)(!1), [Kt, vt] = (0, Ot.useState)([]), Wt = function(tt, et) {
                              const [Vt, qt] = (0, Ot.useState)("");
                              return (0, Ot.useEffect)((() => {
                                if (!et) return;
                                let Vt = 0;
                                const Ot = () => {
                                    var Ot, Dt;
                                    Vt = 0;
                                    const mt = et.getBoundingClientRect().top + TD;
                                    let dt = null !== (Ot = null === (Dt = tt[0]) || void 0 === Dt ? void 0 : Dt.anchor) && void 0 !== Ot ? Ot : "";
                                    for (const et of tt) {
                                      const tt = document.getElementById(et.anchor);
                                      tt && tt.getBoundingClientRect().top <= mt && (dt = et.anchor)
                                    }
                                    et.scrollTop + et.clientHeight >= et.scrollHeight - 2 && et.scrollTop > 0 && tt.length > 0 && (dt = tt[tt.length - 1].anchor), qt(dt)
                                  },
                                  Dt = () => {
                                    Vt || (Vt = requestAnimationFrame(Ot))
                                  };
                                return Ot(), et.addEventListener("scroll", Dt, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Vt), et.removeEventListener("scroll", Dt)
                                }
                              }), [tt, et]), Vt
                            }(Kt, Nt), St = "" === qt && Ht.hash ? function(tt) {
                              const et = (0, ht.t)(tt);
                              if (Ut(zt("welcome"), et)) return null;
                              const Vt = Object.hasOwn(it, et) ? it[et] : null;
                              if (Vt) return {
                                page: zt(Vt.pageId),
                                anchor: Vt.anchor
                              };
                              const Ot = zt("readme");
                              return Ut(Ot, et) ? {
                                page: Ot,
                                anchor: et
                              } : At(`#${et}`)
                            }(Ht.hash) : null;
                            (0, Ot.useEffect)((() => (jt.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              jt.b.set({
                                musicOnFromPage: !0
                              }), NO()
                            })), []), (0, Ot.useEffect)((() => {
                              const tt = tt => {
                                const et = tt.target;
                                if (et.closest(".DocsTextDialog")) return;
                                const Vt = et.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(et.tagName);
                                "k" === tt.key && (tt.metaKey || tt.ctrlKey) || "/" === tt.key && !Vt ? (tt.preventDefault(), ut(!0)) : "Escape" === tt.key && Jt(!1)
                              };
                              return window.addEventListener("keydown", tt), () => {
                                window.removeEventListener("keydown", tt)
                              }
                            }), []);
                            const ct = (0, Ot.useRef)(null);
                            (0, Ot.useLayoutEffect)((() => {
                              var tt, et;
                              if (!Nt) return;
                              const Vt = ct.current === Ht.pathname;
                              ct.current = Ht.pathname;
                              const Ot = (0, ht.t)(Ht.hash),
                                qt = Ot ? document.getElementById(Ot) : null;
                              if (null === (tt = Nt.querySelector(".DocsTargeted")) || void 0 === tt || tt.classList.remove("DocsTargeted"), null === qt || void 0 === qt || null === (et = qt.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === et || et.classList.add("DocsTargeted"), qt) {
                                var Dt;
                                const tt = qt.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Dt = qt.closest(".DocsChangelogEntry")) && void 0 !== Dt ? Dt : qt).scrollIntoView({
                                  block: tt ? "center" : "start",
                                  behavior: Vt ? "smooth" : "auto"
                                })
                              } else Vt || Nt.scrollTo({
                                top: 0
                              })
                            }), [Nt, Ht.pathname, Ht.hash, Ht.key]);
                            const Rt = (0, Ot.useCallback)((() => {
                                Jt(!1)
                              }), []),
                              It = (0, Ot.useCallback)((tt => {
                                Xt({
                                  hash: tt
                                })
                              }), [Xt]);
                            if (St) return (0, ft.jsx)(dt.c, {
                              replace: !0,
                              to: Yt(et, St.page, St.anchor)
                            });
                            if (!Qt) return (0, ft.jsx)(dt.c, {
                              replace: !0,
                              to: et
                            });
                            const Pt = Vt ? "div" : "main";
                            return (0, ft.jsx)(fe.Provider, {
                              value: et,
                              children: (0, ft.jsx)(we.Provider, {
                                value: Nt,
                                children: (0, ft.jsxs)("div", {
                                  ref: Mt,
                                  className: Dt()("DocsSite", {
                                    Embedded: Vt,
                                    NavOpen: bt
                                  }),
                                  "data-theme": Et,
                                  children: [(0, ft.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, ft.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": bt ? "Close menu" : "Open menu",
                                      "aria-expanded": bt,
                                      onClick: () => {
                                        Jt(!bt)
                                      },
                                      children: (0, ft.jsx)(yt, {
                                        name: bt ? "cross" : "menu"
                                      })
                                    }), (0, ft.jsxs)(mt.b, {
                                      to: et,
                                      className: "DocsBrand",
                                      children: [(0, ft.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, ft.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, ft.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, ft.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        ut(!0)
                                      },
                                      children: [(0, ft.jsx)(yt, {
                                        name: "magnifying-glass"
                                      }), (0, ft.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, ft.jsxs)("kbd", {
                                        children: [gD ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, ft.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, ft.jsxs)("a", {
                                        href: xD,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ft.jsx)(yt, {
                                          name: "discord"
                                        }), (0, ft.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, ft.jsxs)("a", {
                                        href: pD,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ft.jsx)(yt, {
                                          name: "external-link"
                                        }), (0, ft.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Vt && (0, ft.jsxs)(mt.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, ft.jsx)(yt, {
                                          name: "play"
                                        }), (0, ft.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, ft.jsx)(BD, {
                                        theme: Et,
                                        onChange: wt
                                      })]
                                    })]
                                  }), (0, ft.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, ft.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, ft.jsx)(sD, {
                                        basePath: et,
                                        activePageId: Qt.id,
                                        onNavigate: Rt
                                      })
                                    }), (0, ft.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Rt
                                    }), (0, ft.jsxs)(Pt, {
                                      className: "DocsMain",
                                      children: [(0, ft.jsx)(uD, {
                                        page: Qt,
                                        onTocChange: vt
                                      }, Qt.id), (0, ft.jsx)(nD, {
                                        basePath: et,
                                        pageId: Qt.id
                                      })]
                                    }), (0, ft.jsx)("aside", {
                                      className: Dt()("DocsToc", {
                                        Timeline: "changelog" === Qt.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, ft.jsx)(WD, {
                                        isChangelog: "changelog" === Qt.layout,
                                        toc: Kt,
                                        activeAnchor: Wt,
                                        onNavigate: It
                                      })
                                    })]
                                  }), (0, ft.jsx)(UD, {}), Ct && (0, ft.jsx)(oD, {
                                    basePath: et,
                                    onClose: () => {
                                      ut(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4909: (tt, et, Vt) => {
                          Vt.d(et, {
                            C: () => Et,
                            G: () => lt,
                            d: () => Ot,
                            g: () => mt,
                            h: () => yt,
                            l: () => wt,
                            p: () => dt,
                            t: () => qt,
                            v: () => Dt,
                            z: () => ft
                          });
                          const Ot = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function qt(tt) {
                            try {
                              return decodeURIComponent(tt.slice(1))
                            } catch {
                              return tt.slice(1)
                            }
                          }

                          function Dt(tt) {
                            return tt.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const mt = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ot.source}`, "g");

                          function dt(tt, et) {
                            return 2 === tt.length ? et.replace(/^ (.*) $/, "$1") : et
                          }

                          function jt(tt) {
                            return "" === tt.trim()
                          }

                          function Ht(tt) {
                            const et = [];
                            for (const Vt of tt.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) et.length > 0 && et[et.length - 1].endsWith("\\") ? et[et.length - 1] += `|${Vt}` : et.push(Vt);
                            return et.map((tt => tt.trim().replaceAll("\\|", "|")))
                          }
                          const Xt = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Qt(tt) {
                            const et = [],
                              Vt = [{
                                indent: -1,
                                items: et
                              }];
                            let Ot = null;
                            for (const qt of tt) {
                              const tt = qt.match(Xt);
                              if (!tt) {
                                Ot && (Ot.text += ` ${qt.trim()}`);
                                continue
                              }
                              const et = tt[1].replace(/\t/g, "  ").length;
                              for (; et <= Vt[Vt.length - 1].indent;) Vt.pop();
                              Ot = {
                                text: tt[3].trim(),
                                children: []
                              }, Vt[Vt.length - 1].items.push(Ot), Vt.push({
                                indent: et,
                                items: Ot.children
                              })
                            }
                            return et
                          }

                          function lt(tt) {
                            const et = tt.replace(/\r\n/g, "\n").split("\n"),
                              Vt = [];
                            let Ot = 0;
                            for (; Ot < et.length;) {
                              const tt = et[Ot];
                              if (jt(tt)) {
                                Ot++;
                                continue
                              }
                              const qt = tt.match(/^\s*```\s*(\w*)\s*$/);
                              if (qt) {
                                const tt = [];
                                for (Ot++; Ot < et.length && !/^\s*```\s*$/.test(et[Ot]);) tt.push(et[Ot]), Ot++;
                                Ot++, Vt.push({
                                  kind: "code",
                                  lang: qt[1] || "text",
                                  code: tt.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const mt = tt.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (mt) {
                                const tt = mt[2].trim();
                                Vt.push({
                                  kind: "heading",
                                  level: mt[1].length,
                                  text: tt,
                                  anchor: Dt(tt)
                                }), Ot++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(tt)) {
                                Vt.push({
                                  kind: "rule"
                                }), Ot++;
                                continue
                              }
                              if (tt.trim().startsWith("|") && Ot + 1 < et.length && /^\s*\|[\s:|-]+\|\s*$/.test(et[Ot + 1])) {
                                const qt = Ht(tt),
                                  Dt = [];
                                for (Ot += 2; Ot < et.length && et[Ot].trim().startsWith("|");) Dt.push(Ht(et[Ot])), Ot++;
                                Vt.push({
                                  kind: "table",
                                  header: qt,
                                  rows: Dt
                                });
                                continue
                              }
                              if (tt.startsWith(">")) {
                                const tt = [];
                                for (; Ot < et.length && et[Ot].startsWith(">");) tt.push(et[Ot].replace(/^>\s?/, "")), Ot++;
                                Vt.push({
                                  kind: "quote",
                                  blocks: lt(tt.join("\n"))
                                });
                                continue
                              }
                              if (Xt.test(tt)) {
                                const qt = [],
                                  Dt = /^\s*\d+\./.test(tt);
                                for (; Ot < et.length && !jt(et[Ot]) && (Xt.test(et[Ot]) || /^\s+\S/.test(et[Ot]));) qt.push(et[Ot]), Ot++;
                                Vt.push({
                                  kind: "list",
                                  ordered: Dt,
                                  items: Qt(qt)
                                });
                                continue
                              }
                              const dt = [];
                              for (; Ot < et.length && !jt(et[Ot]) && !/^\s*```/.test(et[Ot]) && !/^#{1,6}\s/.test(et[Ot]) && !et[Ot].startsWith(">") && !Xt.test(et[Ot]) && (!et[Ot].trim().startsWith("|") || 0 !== dt.length);) dt.push(et[Ot].trim()), Ot++;
                              0 === dt.length && (dt.push(et[Ot].trim()), Ot++), Vt.push({
                                kind: "paragraph",
                                text: dt.join(" ")
                              })
                            }
                            return Vt
                          }

                          function Et(tt) {
                            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Vt = lt(tt);
                            let Ot = "";
                            const qt = [],
                              Dt = [],
                              mt = new Map;
                            for (const Ht of Vt) {
                              if ("heading" === Ht.kind) {
                                var dt;
                                const tt = (null !== (dt = mt.get(Ht.anchor)) && void 0 !== dt ? dt : 0) + 1;
                                mt.set(Ht.anchor, tt), tt > 1 && (Ht.anchor = `${Ht.anchor}-${tt}`)
                              }
                              if ("heading" === Ht.kind && 1 === Ht.level && !Ot) {
                                Ot = Ht.text;
                                continue
                              }
                              if ("heading" === Ht.kind && Ht.level <= et) {
                                Dt.push({
                                  heading: Ht,
                                  blocks: []
                                });
                                continue
                              }
                              const tt = Dt.at(-1);
                              tt ? tt.blocks.push(Ht) : qt.push(Ht)
                            }
                            const jt = tt => {
                              for (;
                                "rule" === (null === (et = tt.at(-1)) || void 0 === et ? void 0 : et.kind);) {
                                var et;
                                tt.pop()
                              }
                            };
                            jt(qt);
                            for (const Ht of Dt) jt(Ht.blocks);
                            return {
                              title: Ot,
                              intro: qt,
                              sections: Dt
                            }
                          }

                          function ft(tt) {
                            return [{
                              heading: null,
                              blocks: tt.intro
                            }, ...tt.sections.map((tt => ({
                              heading: tt.heading,
                              blocks: tt.blocks
                            })))]
                          }

                          function wt(tt) {
                            return tt.flatMap((tt => "code" === tt.kind ? [tt] : "quote" === tt.kind ? wt(tt.blocks) : []))
                          }

                          function yt(tt) {
                            switch (tt.kind) {
                              case "heading":
                              case "paragraph":
                                return tt.text;
                              case "code":
                                return tt.code;
                              case "table":
                                return [tt.header, ...tt.rows].map((tt => tt.join(" "))).join(" ");
                              case "list": {
                                const et = tt => tt.map((tt => `${tt.text} ${et(tt.children)}`)).join(" ");
                                return et(tt.items)
                              }
                              case "quote":
                                return tt.blocks.map(yt).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5003: (tt, et, Vt) => {
                          Vt.d(et, {
                            d: () => dt
                          });
                          var Ot = Vt(63),
                            qt = Vt(377),
                            Dt = Vt(2018),
                            mt = Vt(1188);

                          function dt(tt) {
                            let {
                              text: et
                            } = tt;
                            const Vt = [];
                            let dt = "";
                            return (0, qt.Ob)(et).forEach(((tt, et) => {
                              if ("string" === typeof tt || !(0, Dt.g)(tt.icon)) return void(dt += "string" === typeof tt ? tt : tt.icon);
                              const qt = Math.max(0, dt.trimEnd().search(/\S{1,12}$/));
                              Vt.push((0, mt.jsxs)(Ot.Fragment, {
                                children: [dt.slice(0, qt), (0, mt.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [dt.slice(qt), (0, mt.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": tt.icon,
                                    children: (0, mt.jsx)(Dt.e, {
                                      itemName: tt.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, et)), dt = ""
                            })), Vt.push(dt), (0, mt.jsx)(mt.Fragment, {
                              children: Vt
                            })
                          }
                        }, 4938: (tt, et, Vt) => {
                          Vt.d(et, {
                            e: () => Mt,
                            b: () => Nt
                          });
                          var Ot = Vt(63),
                            qt = Vt(1554),
                            Dt = Vt(2001),
                            mt = Vt(4943),
                            dt = Vt(1188);
                          const jt = (0, Ot.memo)((function(tt) {
                            let {
                              initialParameters: et
                            } = tt;
                            const Vt = (0, Ot.useRef)(null),
                              qt = (0, Ot.useRef)(null),
                              jt = (0, Ot.useRef)(0),
                              Ht = (0, Ot.useRef)(null),
                              Xt = et.description,
                              Qt = et.He,
                              {
                                scale: lt,
                                rotation: Et
                              } = null !== et && void 0 !== et ? et : {},
                              ft = (0, mt.d)();
                            return (0, Ot.useEffect)((() => {
                              const tt = ft.onFrame((() => {
                                const tt = ft.getState();
                                if (!tt.isActive || !Vt.current || !qt.current) return;
                                const et = tt.state;
                                if (Vt.current.value = et.progress, et.clickCount > jt.current) {
                                  jt.current = et.clickCount;
                                  const tt = qt.current;
                                  tt.classList.add("pulse"), Ht.current = setTimeout((() => {
                                    tt.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Ht.current), tt()
                              }
                            }), [ft]), (0, dt.jsx)(dt.Fragment, {
                              children: (0, dt.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== lt && {
                                    "--scale": lt
                                  },
                                  ...null !== Et && {
                                    "--rotation": `${Et}deg`
                                  }
                                },
                                children: [(0, dt.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Vt
                                }), (0, dt.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: qt,
                                  children: (0, dt.jsx)(Dt.e, {
                                    text: [{
                                      icon: Qt
                                    }]
                                  })
                                }), (0, dt.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, dt.jsx)(Dt.e, {
                                    text: Xt
                                  })
                                })]
                              })
                            })
                          }));
                          var Ht = Vt(1140),
                            Xt = Vt.n(Ht);
                          const Qt = 2 * Math.PI * 90,
                            lt = (0, Ot.memo)((function(tt) {
                              let {
                                initialParameters: et
                              } = tt;
                              const Vt = (0, Ot.useRef)(null),
                                qt = (0, Ot.useRef)(null),
                                jt = (0, Ot.useRef)(null),
                                Ht = et.label,
                                lt = et.icon,
                                Et = et.le,
                                {
                                  scale: ft,
                                  rotation: wt,
                                  Ee: yt
                                } = null !== et && void 0 !== et ? et : {},
                                Nt = (0, mt.d)();
                              return (0, Ot.useEffect)((() => {
                                const tt = Nt.onFrame((() => {
                                  var tt, et;
                                  const Ot = Nt.getState();
                                  if (!Ot.isActive || !qt.current) return;
                                  const Dt = Ot.state,
                                    mt = null !== (tt = Dt.timeRemaining) && void 0 !== tt ? tt : 0,
                                    dt = null !== (et = Dt.Qe) && void 0 !== et ? et : 1,
                                    Ht = Qt * (1 - mt / dt);
                                  qt.current.style.strokeDashoffset = `${Ht}`, Vt.current && (Vt.current.style.opacity = mt > 0 ? "1" : "0"), jt.current && Et && (jt.current.textContent = `${(mt/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  tt()
                                }
                              }), [Nt, Et]), (0, dt.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Vt,
                                style: {
                                  ...null !== ft && {
                                    "--scale": ft
                                  },
                                  ...null !== wt && {
                                    "--rotation": `${wt}deg`
                                  }
                                },
                                children: [(0, dt.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, dt.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, dt.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, dt.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Qt,
                                      ref: qt
                                    })]
                                  }), (0, dt.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, dt.jsx)(Dt.e, {
                                      text: [{
                                        icon: lt
                                      }],
                                      className: Xt()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: yt
                                      })
                                    })
                                  })]
                                }), (0, dt.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, dt.jsx)(Dt.e, {
                                    text: Ht,
                                    className: "QTETimedClickLabelText"
                                  }), Et && (0, dt.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: jt
                                  })]
                                })]
                              })
                            })),
                            Et = (0, Ot.memo)((function(tt) {
                              let {
                                initialParameters: et
                              } = tt;
                              const Vt = (0, Ot.useRef)(null),
                                qt = (0, Ot.useRef)(null),
                                jt = (0, Ot.useRef)(null),
                                Ht = (0, Ot.useRef)(!1),
                                Xt = et.description,
                                Qt = null === et || void 0 === et ? void 0 : et.icon,
                                lt = (0, mt.d)();
                              return (0, Ot.useEffect)((() => {
                                const tt = lt.onFrame((() => {
                                  const tt = lt.getState();
                                  if (!tt.isActive) return;
                                  const et = tt.state;
                                  if (Vt.current) {
                                    const tt = 100 * (et.catchZonePosition - et.ye / 2);
                                    Vt.current.style.left = `${tt}%`, Vt.current.style.width = 100 * et.ye + "%", et.isCatching !== Ht.current && (Ht.current = et.isCatching, et.isCatching ? Vt.current.classList.add("catching") : Vt.current.classList.remove("catching"))
                                  }
                                  qt.current && (qt.current.style.left = 100 * et.moverPosition + "%"), jt.current && (jt.current.value = et.progress)
                                }));
                                return () => {
                                  tt()
                                }
                              }), [lt]), (0, dt.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, dt.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, dt.jsx)(Dt.e, {
                                    text: Xt
                                  })
                                }), (0, dt.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: jt
                                }), (0, dt.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, dt.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Vt
                                  }), (0, dt.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: qt,
                                    children: (0, dt.jsx)("span", {
                                      children: Qt && (0, dt.jsx)(Dt.e, {
                                        text: [{
                                          icon: Qt,
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
                          var ft = Vt(710);
                          const wt = (0, Ot.memo)((function(tt) {
                              let {
                                initialParameters: et
                              } = tt;
                              const Vt = (0, Ot.useRef)(null),
                                qt = et.label,
                                jt = et.Ke,
                                {
                                  icon: Ht,
                                  scale: Xt,
                                  rotation: Qt
                                } = null !== et && void 0 !== et ? et : {},
                                lt = 100 * (.5 - jt / 2),
                                Et = 100 * jt,
                                wt = (0, mt.d)();
                              return (0, Ot.useEffect)((() => {
                                const tt = wt.onFrame((() => {
                                  const tt = wt.getState();
                                  if (!tt.isActive || !Vt.current) return;
                                  const et = tt.state;
                                  Vt.current.style.left = 100 * et.markerPosition + "%"
                                }));
                                return () => {
                                  tt()
                                }
                              }), [wt]), (0, dt.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, ft.B)(Xt) && {
                                    "--scale": Xt
                                  },
                                  ...!(0, ft.B)(Qt) && {
                                    "--rotation": `${Qt}deg`
                                  }
                                },
                                children: [Ht && (0, dt.jsx)(Dt.e, {
                                  text: [{
                                    icon: Ht
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, dt.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, dt.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${lt}%`,
                                      width: `${Et}%`
                                    }
                                  }), (0, dt.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Vt
                                  })]
                                }), (0, dt.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, dt.jsx)(Dt.e, {
                                    text: qt
                                  })
                                })]
                              })
                            })),
                            yt = (0, Ot.memo)((function(tt) {
                              let {
                                initialParameters: et
                              } = tt;
                              const Vt = (0, Ot.useRef)(null),
                                [qt, jt] = (0, Ot.useState)((() => new Array(et.ve).fill("pending"))),
                                [Ht, Xt] = (0, Ot.useState)((() => {
                                  const tt = et.Ie;
                                  return (0, ft.B)(tt) || tt <= 0 ? [] : new Array(tt).fill("pending")
                                })),
                                Qt = et.label,
                                {
                                  icon: lt
                                } = et,
                                Et = (0, Ot.useRef)(0),
                                wt = (0, Ot.useRef)(0),
                                yt = (0, Ot.useRef)([]),
                                Nt = (0, mt.d)();
                              return (0, Ot.useEffect)((() => {
                                const tt = Nt.onFrame((() => {
                                  const tt = Nt.getState();
                                  if (!tt.isActive || !Vt.current) return;
                                  const et = tt.state,
                                    Ot = 30 + 60 * et.outerCircleProgress;
                                  if (Vt.current.setAttribute("r", String(Ot)), !0 === et.lastClickResult && et.successes > Et.current) {
                                    Vt.current.classList.remove("QTERhythmClickOuterCircle--miss"), Vt.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const tt = setTimeout((() => {
                                      var tt;
                                      null === (tt = Vt.current) || void 0 === tt || tt.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    yt.current.push(tt)
                                  } else if (!1 === et.lastClickResult && et.misses > wt.current) {
                                    Vt.current.classList.remove("QTERhythmClickOuterCircle--hit"), Vt.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const tt = setTimeout((() => {
                                      var tt;
                                      null === (tt = Vt.current) || void 0 === tt || tt.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    yt.current.push(tt)
                                  }
                                  et.successes === Et.current && et.misses === wt.current || (Et.current = et.successes, wt.current = et.misses, jt((tt => {
                                    const Vt = [...tt];
                                    for (let Ot = 0; Ot < et.ve; Ot++) Vt[Ot] = Ot < et.successes ? "success" : "pending";
                                    return Vt
                                  })), Xt((tt => {
                                    if (0 === tt.length) return tt;
                                    const Vt = [...tt];
                                    for (let Ot = 0; Ot < Vt.length; Ot++) Vt[Ot] = Ot < et.misses ? "miss" : "pending";
                                    return Vt
                                  })))
                                }));
                                return () => {
                                  tt();
                                  for (const tt of yt.current) clearTimeout(tt);
                                  yt.current = []
                                }
                              }), [Nt]), (0, dt.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, dt.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: qt.map(((tt, et) => (0, dt.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === tt ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, et)))
                                }), (0, dt.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, dt.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, dt.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, dt.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Vt
                                    })]
                                  }), lt && (0, dt.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, dt.jsx)(Dt.e, {
                                      text: [{
                                        icon: lt
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Ht.length > 0 && (0, dt.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Ht.map(((tt, et) => (0, dt.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === tt ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, et)))
                                }), (0, dt.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, dt.jsx)(Dt.e, {
                                    text: Qt
                                  })
                                })]
                              })
                            }));

                          function Nt(tt) {
                            let {
                              qte: et
                            } = tt;
                            switch (et.type) {
                              case "progressBar":
                                return (0, dt.jsx)(jt, {
                                  initialParameters: et.parameters
                                });
                              case "timedClick":
                                return (0, dt.jsx)(lt, {
                                  initialParameters: et.parameters
                                });
                              case "gravityBar":
                                return (0, dt.jsx)(Et, {
                                  initialParameters: et.parameters
                                });
                              case "precisionBar":
                                return (0, dt.jsx)(wt, {
                                  initialParameters: et.parameters
                                });
                              case "rhythmClick":
                                return (0, dt.jsx)(yt, {
                                  initialParameters: et.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Mt = (0, Ot.memo)((function() {
                            const [tt, et] = (0, Ot.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, qt.f)("qteStateUpdated", (tt => {
                              et(tt)
                            })), tt.isActive && tt.type ? (0, dt.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, dt.jsx)(Nt, {
                                qte: tt
                              })
                            }) : null
                          }))
                        }, 4943: (tt, et, Vt) => {
                          Vt.d(et, {
                            b: () => dt,
                            d: () => jt
                          });
                          var Ot = Vt(63),
                            qt = Vt(1397),
                            Dt = Vt(4948);
                          const mt = {
                              getState: () => Dt.d.getCurrentState(),
                              onFrame: qt.r
                            },
                            dt = (0, Ot.createContext)(mt);

                          function jt() {
                            return (0, Ot.useContext)(dt)
                          }
                        }, 5010: (tt, et, Vt) => {
                          Vt.d(et, {
                            e: () => Lt,
                            f: () => Zt
                          });
                          var Ot = Vt(5015),
                            qt = Vt(377);
                          const Dt = 120,
                            mt = 260,
                            dt = 1.15,
                            jt = 1.2,
                            Ht = 2,
                            Xt = 1.08,
                            Qt = .8,
                            lt = .95,
                            Et = 8,
                            ft = "[\"')\\]\u300d\u300f\uff09]*",
                            wt = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ft}$`),
                            yt = new RegExp(`[?\uff1f]${ft}$`),
                            Nt = new RegExp(`[!\uff01]${ft}$`),
                            Mt = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            bt = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Jt = new RegExp(`[${bt}]`),
                            Ct = new RegExp(`[${bt}]|[^${bt}]+`, "g"),
                            ut = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Kt(tt) {
                            let et = 2166136261;
                            for (let Vt = 0; Vt < tt.length; Vt++) et ^= tt.charCodeAt(Vt), et = Math.imul(et, 16777619);
                            return (et >>> 0) / 4294967295 * 2 - 1
                          }

                          function ht(tt) {
                            var et;
                            if (Jt.test(tt)) return 1;
                            const Vt = tt.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Ot = Vt.replace(/[^0-9]/g, "");
                            if (Ot.length > 0 && !/\p{L}/u.test(Vt)) return Math.min(Ot.length, 4);
                            const qt = null !== (et = Vt.match(ut)) && void 0 !== et ? et : [];
                            if (0 === qt.length) {
                              var Dt, mt;
                              const tt = null !== (Dt = null === (mt = Vt.match(/\p{L}/gu)) || void 0 === mt ? void 0 : mt.length) && void 0 !== Dt ? Dt : 0;
                              return 0 === tt ? 0 : Math.min(Math.max(1, Math.round(tt / 2.5)), Et)
                            }
                            const dt = Vt.replace(/[^\p{L}]/gu, ""),
                              jt = qt.length > 1 && "e" === qt.at(-1) && dt.endsWith("e") && !dt.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(tt.replace(/[^\p{L}]/gu, ""));
                            return Math.min(qt.length - (jt ? 1 : 0), Et)
                          }

                          function vt(tt) {
                            return tt.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Wt(tt) {
                            const et = tt.replace(/[^\p{L}]/gu, "");
                            return et.length >= 2 && et === et.toUpperCase() && et !== et.toLowerCase()
                          }

                          function St(tt, et) {
                            var Vt;
                            const Et = et && (0, Ot.i)(et),
                              ft = null !== (Vt = null === Et || void 0 === Et ? void 0 : Et.syllableMs) && void 0 !== Vt ? Vt : Ot.c,
                              bt = function(tt) {
                                const et = [];
                                for (const Ot of (0, qt.Ob)(tt))
                                  if ("string" === typeof Ot)
                                    for (const tt of Ot.split(/(\s+)/)) {
                                      if ("" === tt) continue;
                                      if (/^\s+$/.test(tt)) {
                                        et.push({
                                          kind: "space",
                                          text: tt
                                        });
                                        continue
                                      }
                                      if (!Jt.test(tt)) {
                                        et.push({
                                          kind: "word",
                                          text: tt,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Ot = !0;
                                      for (const qt of null !== (Vt = tt.match(Ct)) && void 0 !== Vt ? Vt : []) {
                                        var Vt;
                                        const tt = et.at(-1);
                                        Ot || "word" !== (null === tt || void 0 === tt ? void 0 : tt.kind) || Jt.test(qt) || /[\p{L}\p{N}]/u.test(qt) ? (Ot || et.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), et.push({
                                          kind: "word",
                                          text: qt,
                                          delayMs: 0
                                        }), Ot = !1) : tt.text += qt
                                      }
                                    } else et.push({
                                      kind: "icon",
                                      text: Ot.icon,
                                      delayMs: 0
                                    });
                                return et
                              }(tt),
                              ut = [];
                            let St = [];
                            for (const Ot of bt) "space" !== Ot.kind && (St.push(Ot), wt.test(Ot.text) && (ut.push(St), St = []));
                            ut.push(St);
                            const ct = [];
                            let Rt = 0;
                            for (const Ot of ut) {
                              var It, Pt;
                              const tt = null !== (It = null === (Pt = Ot.at(-1)) || void 0 === Pt ? void 0 : Pt.text) && void 0 !== It ? It : "",
                                et = yt.test(tt),
                                Vt = Nt.test(tt),
                                qt = Ot.map((tt => "word" === tt.kind ? ht(tt.text) : 1)),
                                bt = qt.findLastIndex((tt => tt > 0));
                              for (const [yt, Nt] of Ot.entries()) {
                                const tt = "word" === Nt.kind,
                                  Ot = qt[yt];
                                Nt.delayMs = Rt;
                                for (let qt = 0; Et && qt < Ot; qt++) {
                                  const {
                                    intonation: Dt
                                  } = Et;
                                  let mt = bt > 0 ? -Dt.declineSemitones * (yt / bt) : 0;
                                  mt += Kt(`${vt(Nt.text)}|${qt}`) * Dt.variationSemitones;
                                  const wt = Math.min(1, Dt.variationSemitones);
                                  let Mt = Et.glideSemitones,
                                    Jt = 1;
                                  Vt && (mt += Dt.exclaimLiftSemitones, Jt *= dt), et && yt === bt && (mt += Dt.questionRiseSemitones * (Ot > 1 ? .5 + .5 * qt / (Ot - 1) : 1), qt === Ot - 1 && (Mt = Math.abs(Mt) + Dt.questionRiseSemitones / 2)), tt && Wt(Nt.text) && (mt += Ht * wt, Jt *= jt), Ot > 1 && 0 === qt && (mt += Qt * wt, Jt *= Xt), ct.push({
                                    atMs: Rt + qt * ft,
                                    semitones: mt,
                                    glideSemitones: Mt,
                                    durationMs: qt < Ot - 1 ? Math.min(Et.durationMs, ft * lt) : Et.durationMs,
                                    level: Jt
                                  })
                                }
                                Rt += Ot * ft + (wt.test(Nt.text) ? mt : Mt.test(Nt.text) ? Dt : 0)
                              }
                            }
                            return {
                              pieces: bt.map((tt => "space" === tt.kind ? tt : "icon" === tt.kind ? {
                                kind: "icon",
                                icon: tt.text,
                                delayMs: tt.delayMs
                              } : {
                                kind: "word",
                                text: tt.text,
                                delayMs: tt.delayMs
                              })),
                              blips: ct
                            }
                          }
                          var ct = Vt(1286),
                            Rt = Vt(1338),
                            It = Vt(2026);

                          function Pt(tt) {
                            if ("string" === typeof tt) return tt;
                            const et = Rt.e.get().getCurrentLanguageCode();
                            return (0, ct.t)(et, tt.translationKey, (0, ct.p)(tt.params, It.d.shown))
                          }

                          function Zt(tt) {
                            const et = void 0 === tt.voice ? null : (0, Ot.l)(tt.voice),
                              Vt = et && (0, Ot.i)(et);
                            return {
                              plan: St(Pt(tt.line), Vt),
                              synth: Vt
                            }
                          }

                          function Lt(tt) {
                            const et = [];
                            let Vt = [];
                            for (const [qt, Dt] of tt.entries()) {
                              var Ot;
                              "space" === Dt.kind && (" " !== Dt.text || "icon" !== (null === (Ot = tt[qt + 1]) || void 0 === Ot ? void 0 : Ot.kind)) ? (Vt.length > 0 && et.push(Vt), et.push([Dt]), Vt = []) : Vt.push(Dt)
                            }
                            return Vt.length > 0 && et.push(Vt), et
                          }
                        }, 5021: (tt, et, Vt) => {
                          Vt.d(et, {
                            e: () => Xt,
                            i: () => Qt
                          });
                          var Ot = Vt(5030),
                            qt = Vt(26);
                          const Dt = .25,
                            mt = .85,
                            dt = .02,
                            jt = .01;

                          function Ht(tt, et, Vt, Ot, qt, Dt, dt) {
                            const {
                              waveform: jt,
                              pitchHz: Ht,
                              attackMs: Xt,
                              releaseMs: Qt,
                              lowpassHz: lt
                            } = Vt, Et = qt + Ot.durationMs / 1e3, ft = Ht * 2 ** (Ot.semitones / 12), wt = tt.createOscillator();
                            wt.type = jt, wt.frequency.setValueAtTime(ft, qt), wt.frequency.exponentialRampToValueAtTime(ft * 2 ** (Ot.glideSemitones / 12), Et);
                            const yt = qt + Math.min(Xt, Ot.durationMs) / 1e3,
                              Nt = tt.createGain();
                            Nt.gain.setValueAtTime(0, qt), Nt.gain.linearRampToValueAtTime(Dt, yt), Nt.gain.linearRampToValueAtTime(Dt * mt, Math.max(yt, Et - Qt / 1e3)), Nt.gain.linearRampToValueAtTime(0, Et);
                            const Mt = [wt];
                            if (null !== lt) {
                              const et = tt.createBiquadFilter();
                              et.type = "lowpass", et.frequency.value = lt, Mt.push(et)
                            }
                            Mt.push(Nt, et);
                            for (let mt = 1; mt < Mt.length; mt++) Mt[mt - 1].connect(Mt[mt]);
                            return wt.onended = () => {
                              for (const tt of Mt.slice(0, -1)) tt.disconnect();
                              dt()
                            }, wt.start(qt), wt.stop(Et), wt
                          }

                          function Xt(tt, et, Vt, Ot, qt, mt) {
                            if (0 === Ot.length) return mt(), () => {};
                            const Xt = Dt * Vt.volume * qt,
                              Qt = tt.createGain();
                            Qt.connect(et);
                            const lt = tt.currentTime + dt,
                              Et = new Set;
                            for (const Dt of Ot) {
                              const et = Ht(tt, Qt, Vt, Dt, lt + Dt.atMs / 1e3, Xt * Dt.level, (() => {
                                Et.delete(et), 0 === Et.size && (Qt.disconnect(), mt())
                              }));
                              Et.add(et)
                            }
                            return () => {
                              const et = tt.currentTime;
                              Qt.gain.setTargetAtTime(0, et, jt);
                              for (const tt of Et) try {
                                tt.stop(et + 5 * jt)
                              } catch {}
                            }
                          }

                          function Qt(tt, et) {
                            var Vt;
                            const Dt = Ot.Howler.ctx,
                              mt = Ot.Howler.masterGain;
                            if (!Dt || !mt || !qt.b.get("soundOnFromAd")) return () => {};
                            const dt = Ot.Howler;
                            return null === (Vt = dt._autoResume) || void 0 === Vt || Vt.call(dt), Xt(Dt, mt, tt, et, qt.b.get("soundVolume"), (() => {
                              var tt;
                              null === (tt = dt._autoSuspend) || void 0 === tt || tt.call(dt)
                            }))
                          }
                        }, 4995: (tt, et, Vt) => {
                          Vt.d(et, {
                            d: () => dt,
                            f: () => qt,
                            j: () => jt,
                            m: () => mt,
                            q: () => Dt
                          });
                          var Ot = Vt(4986);
                          const qt = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            Dt = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            mt = `${Ot.k} lists every page of the Bloxd Code API docs.`;

                          function dt(tt, et) {
                            return `${tt.url}${encodeURIComponent(et.toWellFormed())}`
                          }

                          function jt(tt) {
                            const et = dt(qt, tt);
                            return et.length <= 3e4 ? {
                              url: et,
                              sendsPrompt: !0
                            } : {
                              url: new URL(qt.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5030: (tt, et, Vt) => {
                          Vt.r(et), Vt.d(et, {
                            Howl: () => qt.Howl,
                            Howler: () => qt.Howler,
                            musicOutput: () => yt,
                            readyAudioContext: () => Nt
                          });
                          var Ot, qt = Vt(5036),
                            Dt = Vt(3510),
                            mt = Vt(4796);
                          const dt = qt.Howler;

                          function jt() {
                            var tt, et;
                            if (dt.ctx || !dt.usingWebAudio || "undefined" === typeof AudioContext || !(0, mt.e)()) return;
                            const Vt = navigator.audioSession;
                            let Ot;
                            "auto" === (null === Vt || void 0 === Vt ? void 0 : Vt.type) && (Vt.type = "ambient");
                            try {
                              Ot = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const qt = Ot.createGain();
                            qt.gain.setValueAtTime(dt._muted ? 0 : null !== (tt = dt._volume) && void 0 !== tt ? tt : 1, Ot.currentTime), qt.connect(Ot.destination), dt.ctx = Ot, dt.masterGain = qt, null === (et = dt._setup) || void 0 === et || et.call(dt)
                          }
                          dt._mobileUnloaded = !0;
                          const Ht = dt.volume.bind(qt.Howler);
                          dt.volume = function() {
                            return jt(), Ht(...arguments)
                          };
                          const Xt = dt.mute.bind(qt.Howler);
                          dt.mute = tt => (jt(), Xt(tt));
                          const Qt = qt.Howl.prototype,
                            lt = Qt.init;

                          function Et() {
                            for (; dt._html5AudioPool.length < dt.html5PoolSize;) {
                              const tt = new Audio;
                              tt._unlocked = !0, dt._releaseHtml5Audio(tt)
                            }
                            for (const et of dt._howls)
                              if (!et._webAudio)
                                for (const Vt of et._getSoundIds()) {
                                  var tt;
                                  const Ot = null === (tt = et._soundById(Vt)) || void 0 === tt ? void 0 : tt._node;
                                  Ot && !Ot._unlocked && (Ot._unlocked = !0, Ot.load())
                                }
                          }
                          Qt.init = function(tt) {
                            return jt(), lt.call(this, tt)
                          }, (0, mt.e)() && (dt._unlockAudio = () => {
                            const tt = dt.ctx;
                            if (dt._audioUnlocked || !tt) return;
                            dt.autoUnlock = !1;
                            const et = tt.createBuffer(1, 1, 22050);
                            dt._scratchBuffer = et;
                            const Vt = new AbortController;
                            let Ot = "afterPaint";
                            const qt = () => {
                                var Ot;
                                if (dt._audioUnlocked) return;
                                null === (Ot = dt._autoResume) || void 0 === Ot || Ot.call(dt);
                                const qt = tt.createBufferSource();
                                qt.buffer = et, qt.connect(tt.destination), qt.start(0), tt.resume().catch((() => {})), qt.onended = () => {
                                  qt.disconnect(0), dt._audioUnlocked = !0, Vt.abort();
                                  for (const tt of dt._howls) tt._emit("unlock")
                                }
                              },
                              jt = () => {
                                Et(), qt()
                              },
                              Ht = et => {
                                if (Et(), "inTap" === Ot) {
                                  if ("running" === tt.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qt()
                                } else "afterPaint" === Ot && (Ot = "queued", (0, Dt.d)(et.timeStamp, (() => {
                                  Ot = "inTap", qt()
                                })))
                              };
                            for (const Dt of ["touchstart", "touchend"]) document.addEventListener(Dt, jt, {
                              capture: !0,
                              signal: Vt.signal
                            });
                            for (const Dt of mt.b) document.addEventListener(Dt, Ht, {
                              capture: !0,
                              signal: Vt.signal
                            })
                          });
                          let ft = 0;
                          const wt = null === (Ot = dt._autoSuspend) || void 0 === Ot ? void 0 : Ot.bind(qt.Howler);

                          function yt() {
                            Nt();
                            const {
                              ctx: tt,
                              masterGain: et
                            } = dt;
                            return tt && et ? {
                              ctx: tt,
                              destination: et,
                              holdAwake: tt => {
                                var et, Vt;
                                (ft += tt ? 1 : -1, tt) ? null === (et = dt._autoResume) || void 0 === et || et.call(dt): null === (Vt = dt._autoSuspend) || void 0 === Vt || Vt.call(dt)
                              },
                              wake: () => {
                                var et;
                                "running" !== tt.state && (null === (et = dt._autoResume) || void 0 === et || et.call(dt), tt.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Nt() {
                            var tt;
                            (dt.volume(), dt.ctx && dt.autoUnlock) && (null === (tt = dt._unlockAudio) || void 0 === tt || tt.call(dt))
                          }
                          wt && (dt._autoSuspend = () => ft > 0 ? qt.Howler : wt())
                        }, 5038: (tt, et, Vt) => {
                          function Ot(tt) {
                            return {
                              notAfter: tt
                            }
                          }
                          Vt.d(et, {
                            b: () => jt,
                            f: () => Ht,
                            h: () => dt,
                            j: () => Ot,
                            l: () => qt,
                            n: () => Dt,
                            p: () => mt,
                            s: () => Xt,
                            w: () => Qt
                          });
                          const qt = Ot("\\w$."),
                            Dt = Ot("\\w.,");

                          function mt(tt) {
                            return et => jt(et, tt)
                          }

                          function dt(tt) {
                            return et => !tt.test(et.input.slice(0, et.index))
                          }

                          function jt(tt, et) {
                            return tt.index > 0 && new RegExp(`[${et}]`).test(tt.input[tt.index - 1])
                          }

                          function Ht(tt, et, Vt) {
                            return function(tt) {
                              return void 0 !== tt && "function" !== typeof tt
                            }(Vt) ? function(tt, et, Vt) {
                              const Ot = et.flags.replace(/[gy]/g, ""),
                                qt = new RegExp(`[^${Vt}](?:${et.source})`, `${Ot}g`),
                                Dt = [],
                                mt = Vt => {
                                  const Ot = Vt.index + Vt[0].length;
                                  return ("" === Vt[0] ? lt(tt, et, Ot) : Ot) - 1
                                },
                                dt = new RegExp(`(?:${et.source})`, `${Ot}y`).exec(tt);
                              if (dt) {
                                if (Dt.push(dt), !et.global) return Dt;
                                qt.lastIndex = mt(dt)
                              }
                              for (let jt = qt.exec(tt); jt; jt = qt.exec(tt)) {
                                const Vt = lt(tt, et, jt.index) - jt.index;
                                if (jt[0] = jt[0].slice(Vt), jt.index += Vt, Dt.push(jt), !et.global) break;
                                qt.lastIndex = mt(jt)
                              }
                              return Dt
                            }(tt, et, Vt.notAfter) : function(tt, et, Vt) {
                              const Ot = new RegExp(et.source, `${et.flags.replace(/[gy]/g,"")}g`),
                                qt = [];
                              for (let Dt = Ot.exec(tt); Dt; Dt = Ot.exec(tt))
                                if (!Vt || Vt(Dt)) {
                                  if (qt.push(Dt), !et.global) break;
                                  "" === Dt[0] && (Ot.lastIndex = lt(tt, et, Ot.lastIndex))
                                } else Ot.lastIndex = lt(tt, et, Dt.index);
                              return qt
                            }(tt, et, Vt)
                          }

                          function Xt(tt, et, Vt, Ot) {
                            let qt = "",
                              Dt = 0;
                            for (const mt of Ht(tt, et, Vt)) qt += tt.slice(Dt, mt.index) + Ot(mt), Dt = mt.index + mt[0].length;
                            return qt + tt.slice(Dt)
                          }

                          function Qt(tt, et, Vt) {
                            const Ot = [];
                            let qt = 0;
                            for (const Dt of Ht(tt, et, Vt)) Ot.push(tt.slice(qt, Dt.index)), qt = Dt.index + Dt[0].length;
                            return [...Ot, tt.slice(qt)]
                          }

                          function lt(tt, et, Vt) {
                            var Ot;
                            return Vt + (et.unicode && (null !== (Ot = tt.codePointAt(Vt)) && void 0 !== Ot ? Ot : 0) > 65535 ? 2 : 1)
                          }
                        }, 4986: (tt, et, Vt) => {
                          Vt.d(et, {
                            b: () => qt,
                            d: () => jt,
                            h: () => Dt,
                            k: () => mt,
                            l: () => dt,
                            m: () => yt,
                            p: () => Xt,
                            r: () => Qt,
                            t: () => wt,
                            u: () => Et
                          });
                          var Ot = Vt(1676);
                          const qt = 24e3,
                            Dt = "/docs/llms.txt",
                            mt = `${Ot.c}${Dt}`,
                            dt = "/llms.txt",
                            jt = "/docs/llms-full.txt";

                          function Ht(tt) {
                            return tt || "index"
                          }

                          function Xt(tt) {
                            return `/docs/${Ht(tt)}.md`
                          }

                          function Qt(tt, et) {
                            return `/docs/${Ht(tt)}/${et+1}.md`
                          }
                          const lt = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Et(tt) {
                            const et = lt.exec(tt);
                            return null === et ? null : {
                              name: et[1],
                              part: void 0 === et[2] ? null : Number(et[2])
                            }
                          }
                          const ft = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function wt(tt) {
                            const et = ft.exec(tt);
                            if (null === et) return null;
                            const [, Vt = "", Ot] = et;
                            return void 0 === Ot ? Xt(Vt) : Qt(Vt, Number(Ot) - 1)
                          }

                          function yt(tt) {
                            return `/docsHtml/${Ht(tt)}.html`
                          }
                        }, 5015: (tt, et, Vt) => {
                          Vt.d(et, {
                            c: () => qt,
                            d: () => Ot,
                            g: () => Dt,
                            i: () => jt,
                            l: () => mt
                          });
                          const Ot = ["sine", "triangle", "square", "sawtooth"],
                            qt = 55,
                            Dt = {
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

                          function mt(tt) {
                            return "string" !== typeof tt ? tt : Object.hasOwn(Dt, tt) ? Dt[tt] : null
                          }

                          function dt(tt, et, Vt) {
                            return Math.min(Vt, Math.max(et, tt))
                          }

                          function jt(tt) {
                            const et = dt(tt.durationMs, 10, 500),
                              Vt = dt(tt.attackMs, 0, et),
                              {
                                intonation: qt
                              } = tt;
                            return {
                              waveform: Ot.includes(tt.waveform) ? tt.waveform : "sine",
                              pitchHz: dt(tt.pitchHz, 20, 4e3),
                              glideSemitones: dt(tt.glideSemitones, -24, 24),
                              durationMs: et,
                              attackMs: Vt,
                              releaseMs: dt(tt.releaseMs, 0, et - Vt),
                              lowpassHz: null === tt.lowpassHz ? null : dt(tt.lowpassHz, 20, 2e4),
                              volume: dt(tt.volume, 0, 2),
                              intonation: {
                                variationSemitones: dt(qt.variationSemitones, 0, 6),
                                declineSemitones: dt(qt.declineSemitones, 0, 12),
                                questionRiseSemitones: dt(qt.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: dt(qt.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: dt(tt.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const tt in modules) Object.freeze(modules[tt]);