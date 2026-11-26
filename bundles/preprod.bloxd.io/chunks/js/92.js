export const id = 92;
export const ids = [92, 108];
export const modules = {
    5326: (BB, OB, GB) => {
      GB.d(OB, {
        e: () => ZB,
        i: () => NB
      });
      var YB = GB(1090),
        DB = GB.n(YB),
        QB = GB(56),
        oB = GB(1175),
        jB = GB(5335),
        yB = GB(2e3),
        JB = GB(2653),
        MB = GB(5337),
        PB = GB(1282);
      const zB = new WeakMap;
      let lB = 0;

      function pB(BB) {
        let OB = zB.get(BB);
        return void 0 === OB && (OB = lB++, zB.set(BB, OB)), OB
      }

      function qB(BB) {
        let {
          piece: OB
        } = BB;
        return "space" === OB.kind ? (0, PB.jsx)(PB.Fragment, {
          children: OB.text
        }) : (0, PB.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${OB.delayMs}ms`
          },
          children: (0, PB.jsx)(jB.c, {
            text: "icon" === OB.kind ? `[[${OB.icon}]]` : OB.text
          })
        })
      }

      function ZB(BB) {
        let {
          display: OB
        } = BB;
        const {
          selectedLanguage: GB
        } = (0, oB.H)(), YB = (0, QB.useMemo)((() => (0, MB.b)((0, MB.c)(OB).plan.pieces)), [OB, GB.code]);
        return (0, PB.jsxs)("div", {
          className: DB()("Dialogue", {
            DialogueAnimateIn: !1 !== OB.animateIn
          }),
          children: [OB.speakerName && (0, PB.jsx)(yB.b, {
            text: OB.speakerName,
            className: "DialogueSpeaker"
          }), (0, PB.jsx)("p", {
            className: "DialogueLine",
            children: YB.map(((BB, OB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, PB.jsx)("span", {
              className: "DialogueGlue",
              children: BB.map(((BB, OB) => (0, PB.jsx)(qB, {
                piece: BB
              }, OB)))
            }, OB)))
          })]
        })
      }
      const NB = (0, QB.memo)((function() {
        const BB = (0, JB.g)("dialogue");
        return (0, PB.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: BB && (0, PB.jsx)(ZB, {
            display: BB
          }, pB(BB))
        })
      }))
    },
    5203: (BB, OB, GB) => {
        GB.r(OB), GB.d(OB, {
          default: () => tQ
        });
        var YB = GB(56),
          DB = GB(1090),
          QB = GB.n(DB),
          oB = GB(1566),
          jB = GB(1571),
          yB = GB(16),
          JB = GB(70),
          MB = GB(5207),
          PB = GB(5217),
          zB = GB(5224),
          lB = GB(4773),
          pB = GB(1282);
        const qB = "/textures/docs/icons";

        function ZB(BB) {
          let {
            name: OB,
            isTinted: GB,
            className: YB,
            style: DB
          } = BB;
          const oB = `${qB}/${OB}.png`;
          return GB ? (0, pB.jsxs)("span", {
            className: QB()("DocsPixelIcon", "Tinted", YB),
            "aria-hidden": "true",
            style: DB,
            children: [(0, pB.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${oB}")`,
                WebkitMaskImage: `url("${oB}")`
              }
            }), (0, pB.jsx)("img", {
              src: oB,
              alt: ""
            })]
          }) : (0, pB.jsx)("img", {
            className: QB()("DocsPixelIcon", YB),
            src: oB,
            alt: "",
            "aria-hidden": "true",
            style: DB
          })
        }
        const NB = 1500;

        function RB() {
          const [BB, OB] = (0, YB.useState)(null);
          (0, YB.useEffect)((() => {
            if (null === BB) return;
            const GB = setTimeout((() => {
              OB(null)
            }), NB);
            return () => {
              clearTimeout(GB)
            }
          }), [BB]);
          return [BB, BB => {
            (0, lB.b)(BB).then((() => {
              OB({
                text: BB,
                failed: !1
              })
            }), (GB => {
              console.error("Could not copy to the clipboard", GB), OB({
                text: BB,
                failed: !0
              })
            }))
          }]
        }

        function WB(BB) {
          let {
            text: OB,
            label: GB,
            className: YB
          } = BB;
          const [DB, oB] = RB(), jB = !1 === (null === DB || void 0 === DB ? void 0 : DB.failed);
          return (0, pB.jsxs)("button", {
            type: "button",
            className: QB()("DocsCopyButton", YB, {
              Copied: jB
            }),
            title: "Copy to clipboard",
            "aria-label": GB ? void 0 : `Copy ${OB}`,
            onClick: BB => {
              BB.stopPropagation(), oB(OB)
            },
            children: [(0, pB.jsx)(ZB, {
              name: jB ? "check" : "copy"
            }), GB && (0, pB.jsx)("span", {
              children: jB ? "Copied" : null !== DB && void 0 !== DB && DB.failed ? "Copy failed" : GB
            })]
          })
        }
        MB.d.registerLanguage("javascript", PB.c), MB.d.registerLanguage("typescript", zB.c);
        const AB = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          VB = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          SB = 24;

        function nB(BB) {
          let {
            code: OB,
            lang: GB,
            compact: DB = !1
          } = BB;
          const oB = (0, YB.useMemo)((() => function(BB, OB) {
              const GB = AB[OB];
              return GB ? MB.d.highlight(BB, {
                language: GB
              }).value : BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(OB, GB)), [OB, GB]),
            jB = OB.split("\n").length,
            yB = !DB && jB > SB + 6,
            [JB, PB] = (0, YB.useState)(!1),
            zB = AB[GB];
          return (0, pB.jsxs)("div", {
            className: QB()("DocsCodeBlock", {
              Compact: DB,
              Collapsed: yB && !JB
            }),
            children: [!DB && (0, pB.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, pB.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: zB ? VB[zB] : "Text"
              }), (0, pB.jsx)(WB, {
                text: OB,
                label: "Copy"
              })]
            }), (0, pB.jsx)("pre", {
              children: (0, pB.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: oB
                }
              })
            }), yB && (0, pB.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": JB,
              onClick: () => {
                PB(!JB)
              },
              children: [(0, pB.jsx)(ZB, {
                name: JB ? "chevron-up" : "chevron-down"
              }), JB ? "Show less" : `Show all ${jB} lines`]
            })]
          })
        }
        var UB = GB(5228);
        var fB = GB(5234);
        const kB = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function dB(BB) {
          const OB = new Map;
          let GB, YB = [],
            DB = !1;
          const QB = () => {
            GB && OB.set(GB.name, GB.lines.join("\n").trimEnd())
          };
          for (const oB of BB.split("\n")) {
            const BB = oB.match(kB);
            DB || oB.startsWith("/*") ? (DB || (QB(), GB = void 0), YB.push(oB), DB = !oB.includes("*/")) : BB ? (QB(), GB = {
              name: BB[1],
              lines: [...YB, oB]
            }, YB = []) : GB && (oB.startsWith(" ") || oB.startsWith("\t") || /^[}\])|]/.test(oB)) ? GB.lines.push(oB) : GB && "" !== oB.trim() && (QB(), GB = void 0)
          }
          return QB(), OB
        }

        function KB(BB) {
          return "methods" === BB || "callbacks" === BB || "settings" === BB
        }
        const uB = {
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
              setterSnippet: (BB, OB) => `api.setClientOption(playerId, "${BB}", ${OB})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (BB, OB) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${BB}", ${OB})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (BB, OB) => `api.setMobSetting(mobId, "${BB}", ${OB})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (BB, OB) => `api.setVehicleSetting(vehicleId, "${BB}", ${OB})`
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
          mB = {
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

        function IB(BB) {
          return BB.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function FB(BB) {
          let OB = !1;
          return BB.split("\n").map((BB => (BB.startsWith("```") && (OB = !OB), !OB && /^#{3,} /.test(BB) ? BB.slice(1) : BB))).join("\n")
        }

        function iB(BB) {
          return "readme" === BB ? "getting-started" : IB(BB)
        }
        const LB = "## Glossary of Referenced Types";
        const gB = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...fB.b.flatMap((BB => {
            const OB = {
              id: BB.id,
              slug: iB(BB.id),
              title: BB.title,
              markdown: BB.content,
              ...uB[BB.id]
            };
            if ("readme" === BB.id) return function(BB) {
              const OB = BB.markdown.indexOf(LB),
                GB = BB.markdown.indexOf("\n```", OB),
                YB = BB.markdown.indexOf("\n```", GB + 1);
              if (-1 === OB || -1 === GB || -1 === YB) throw new Error(`Getting started has no "${LB}" section with a code block`);
              const DB = BB.markdown.slice(OB + 31, GB).trim(),
                QB = [...dB(BB.markdown.slice(BB.markdown.indexOf("\n", GB + 1) + 1, YB))].map((BB => {
                  let [OB, GB] = BB;
                  return `## ${OB}\n\n\`\`\`ts\n${GB}\n\`\`\`\n`
                })),
                oB = BB.markdown.slice(BB.markdown.indexOf("\n", YB + 1) + 1);
              return [{
                ...BB,
                markdown: `${BB.markdown.slice(0,OB)}${oB}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${DB}\n\n${QB.join("\n")}`
              }]
            }(OB);
            if ("howTo" === BB.id) {
              const {
                parent: BB,
                guides: GB
              } = function(BB) {
                const [OB, ...GB] = BB.markdown.split(/^(?=## )/m), YB = [OB], DB = [];
                for (const oB of GB) {
                  var QB;
                  const OB = oB.indexOf("\n"),
                    GB = oB.slice(3, OB).trim(),
                    jB = oB.slice(OB + 1);
                  if (!jB.includes("```")) {
                    YB.push(oB);
                    continue
                  }
                  const yB = null !== (QB = mB[GB]) && void 0 !== QB ? QB : {
                    icon: "lightbulb",
                    summary: `How to use ${GB.toLowerCase()} in World Code.`
                  };
                  DB.push({
                    id: `${BB.id}${GB.split(/[^A-Za-z0-9]+/).map((BB=>BB.charAt(0).toUpperCase()+BB.slice(1))).join("")}`,
                    slug: `${BB.slug}-${IB(GB)}`,
                    title: GB,
                    layout: "article",
                    sourceAnchor: (0, UB.s)(GB),
                    markdown: `# ${GB}\n\n${FB(jB)}`,
                    ...yB
                  })
                }
                return {
                  parent: {
                    ...BB,
                    markdown: YB.join(""),
                    childPageIds: DB.map((BB => BB.id))
                  },
                  guides: DB
                }
              }(OB);
              return [BB, ...GB]
            }
            return [OB]
          }))],
          rB = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...gB.filter((BB => void 0 !== BB.sourceAnchor)).map((BB => BB.id))]
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

        function XB(BB) {
          return gB.find((OB => OB.id === BB))
        }
        const wB = new Map;

        function EB(BB) {
          let OB = wB.get(BB.id);
          return OB || (OB = (0, UB.u)(BB.markdown, "changelog" === BB.layout ? 3 : 2), wB.set(BB.id, OB)), OB
        }

        function cB(BB, OB) {
          return EB(BB).sections.some((BB => BB.heading.anchor === OB || BB.blocks.some((BB => "heading" === BB.kind && BB.anchor === OB))))
        }

        function hB(BB) {
          const [OB, ...GB] = BB.replace(/^#/, "").split("-"), YB = gB.find((BB => BB.id === OB));
          if (!YB) return null;
          const DB = GB.length > 0 ? (0, UB.s)(GB.join("-")) : "";
          for (const oB of null !== (QB = YB.childPageIds) && void 0 !== QB ? QB : []) {
            var QB;
            const BB = XB(oB);
            if (BB.sourceAnchor === DB) return {
              page: BB,
              anchor: ""
            };
            if (cB(BB, DB)) return {
              page: BB,
              anchor: DB
            }
          }
          return {
            page: YB,
            anchor: DB
          }
        }
        const aB = {
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

        function eB(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const YB = OB.slug ? `${BB}/${OB.slug}` : BB;
          return GB ? `${YB}#${GB}` : YB
        }
        var TB = GB(5253);
        const bB = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          CB = new Set(["GameApi", "Console", "_TypeOf"]),
          HB = 4;

        function vB(BB) {
          let OB = BB.length;
          for (; OB > 0 && "" === BB[OB - 1].trim();) OB--;
          return BB.slice(0, OB)
        }

        function sB(BB) {
          var OB;
          const GB = vB(BB);
          if (null === (OB = GB.at(-1)) || void 0 === OB || !OB.trimEnd().endsWith("*/")) return {
            lines: GB,
            doc: ""
          };
          const YB = GB.findLastIndex((BB => BB.startsWith("/**")));
          return -1 === YB ? {
            lines: GB,
            doc: ""
          } : {
            lines: vB(GB.slice(0, YB)),
            doc: GB.slice(YB).join("\n")
          }
        }

        function xB(BB) {
          var OB;
          const GB = BB.split("\n"),
            YB = GB.flatMap(((BB, OB) => bB.test(BB) ? [OB] : []));
          let DB = sB(GB.slice(0, null !== (OB = YB[0]) && void 0 !== OB ? OB : GB.length)).doc;
          return YB.map(((BB, OB) => {
            var QB;
            const oB = sB(GB.slice(BB, null !== (QB = YB[OB + 1]) && void 0 !== QB ? QB : GB.length)),
              jB = {
                name: GB[BB].match(bB)[1],
                doc: DB,
                lines: oB.lines
              };
            return DB = oB.doc, jB
          }))
        }

        function tB(BB) {
          var OB;
          const GB = BB.match(/^readonly \[([\s\S]*)\]$/);
          return GB ? null !== (OB = GB[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== OB ? OB : [] : null
        }

        function BO(BB) {
          if (!BB.startsWith("{") || !BB.endsWith("}")) return null;
          const OB = {
              keys: [],
              values: []
            },
            GB = BB => {
              const GB = BB.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              GB && (OB.keys.push(GB[1].startsWith('"') ? GB[1] : `"${GB[1]}"`), OB.values.push(GB[2].trim()))
            };
          let YB = 0,
            DB = "";
          for (const QB of BB.slice(1, -1)) "{[(".includes(QB) ? YB++ : "}])".includes(QB) && YB--, ";" === QB && 0 === YB ? (GB(DB), DB = "") : DB += QB;
          return GB(DB), OB
        }

        function OO(BB) {
          return BB.length > HB ? `\n\t| ${BB.join("\n\t| ")}` : BB.join(" | ")
        }

        function GO(BB, OB) {
          const GB = function(BB, OB) {
            return BB.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((BB, GB) => {
              var YB;
              const DB = null === (YB = OB.get(GB)) || void 0 === YB ? void 0 : YB.object;
              return DB ? OO(DB.values) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((BB, GB) => {
              var YB, DB;
              const QB = null === (YB = OB.get(GB)) || void 0 === YB || null === (DB = YB.object) || void 0 === DB ? void 0 : DB.values.map(tB);
              return null !== QB && void 0 !== QB && QB.every((BB => null !== BB)) ? OO([...new Set(QB.flat())]) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((BB, GB) => {
              var YB;
              const DB = null === (YB = OB.get(GB)) || void 0 === YB ? void 0 : YB.members;
              return DB ? OO(DB) : BB
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((BB, GB) => {
              var YB;
              const DB = null === (YB = OB.get(GB)) || void 0 === YB ? void 0 : YB.object;
              return DB ? OO(DB.keys) : BB
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((BB, GB) => {
              var YB, DB;
              return null !== (YB = null === (DB = OB.get(GB)) || void 0 === DB ? void 0 : DB.text) && void 0 !== YB ? YB : BB
            }))
          }(BB.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), OB);
          return [BB.doc, GB].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function YO(BB) {
          const OB = xB(BB),
            GB = function(BB) {
              const OB = new Map,
                GB = BB.find((BB => "_TypeOf" === BB.name));
              let YB = null;
              const DB = () => {
                if (YB) {
                  const BB = YB.lines.join("\n");
                  OB.set(YB.name, {
                    text: BB,
                    members: tB(BB),
                    object: BO(BB)
                  })
                }
              };
              for (const QB of GB.lines.slice(1, -1)) {
                const BB = QB.match(/^\t([\w$]+): (.+)$/);
                BB ? (DB(), YB = {
                  name: BB[1],
                  lines: [BB[2]]
                }) : YB && YB.lines.push(QB.replace(/^\t/, ""))
              }
              return DB(), OB
            }(OB),
            YB = new Map;
          for (const DB of OB) CB.has(DB.name) || YB.has(DB.name) || YB.set(DB.name, GO(DB, GB));
          return YB
        }
        let DO, QO, oO;

        function jO() {
          return QO ??= function(BB) {
            const OB = xB(BB).find((BB => "GameApi" === BB.name)),
              GB = new Map,
              YB = OB.lines;
            for (let QB = 0; QB < YB.length; QB++) {
              var DB;
              if (!YB[QB].trimStart().startsWith("/**")) continue;
              const BB = QB;
              for (; QB < YB.length && !YB[QB].includes("*/");) QB++;
              const OB = null === (DB = YB[QB + 1]) || void 0 === DB ? void 0 : DB.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!OB) continue;
              let oB = null;
              const jB = [];
              let yB = "description",
                JB = !1;
              for (const GB of YB.slice(BB, QB + 1).join("\n").split("\n").map((BB => BB.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const BB = GB.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                BB ? (oB = BB[1].trim(), yB = "deprecation") : GB.startsWith("@") ? (yB = "otherTag", JB = !0) : "" === GB.trim() ? JB || (yB = "description", jB.push(GB)) : "deprecation" !== yB || /^[A-Z]/.test(GB.trim()) ? "otherTag" !== yB && (yB = "description", jB.push(GB)) : oB = `${oB} ${GB.trim()}`.trim()
              }
              GB.set(OB[1], {
                deprecation: oB,
                description: jB.join("\n").trim()
              })
            }
            return GB
          }(TB.default), QO
        }

        function yO() {
          if (!oO) {
            oO = new Map;
            for (const BB of gB) {
              const OB = (0, UB.t)(EB(BB)).flatMap((BB => BB.blocks));
              for (const BB of (0, UB.l)(OB))
                if ("ts" === BB.lang || "typescript" === BB.lang)
                  for (const [OB, GB] of dB(BB.code)) oO.set(OB, GB)
            }
            for (const [BB, OB] of(DO ??= YO(TB.default), DO)) oO.has(BB) || oO.set(BB, OB)
          }
          return oO
        }
        const JO = {
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
        let MO;

        function PO() {
          if (!MO) {
            MO = new Map;
            for (const BB of gB)
              if (KB(BB.layout))
                for (const OB of EB(BB).sections) MO.has(OB.heading.text) || MO.set(OB.heading.text, {
                  pageId: BB.id,
                  anchor: OB.heading.anchor
                })
          }
          return MO
        }

        function zO(BB) {
          const OB = BB.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return OB ? PO().get(OB[1]) : void 0
        }
        const lO = (0, YB.createContext)("/docs"),
          pO = (0, YB.createContext)(null),
          qO = (0, YB.createContext)(!1),
          ZO = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function NO(BB) {
          const OB = BB.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return OB ? OB[1] : null
        }

        function RO(BB) {
          let {
            colour: OB
          } = BB;
          return (0, pB.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: OB
            },
            "aria-hidden": "true"
          })
        }

        function WO(BB) {
          const OB = [];
          let GB = 0;
          for (const YB of BB.matchAll(ZO)) OB.push(BB.slice(GB, YB.index), (0, pB.jsx)(RO, {
            colour: YB[0]
          }), YB[0]), GB = YB.index + YB[0].length;
          return OB.push(BB.slice(GB)), OB
        }

        function AO(BB) {
          let {
            href: OB,
            children: GB
          } = BB;
          const DB = (0, YB.useContext)(lO);
          if (OB.startsWith("#")) {
            const BB = hB(OB);
            if (BB) return (0, pB.jsx)(oB.d, {
              to: eB(DB, BB.page, BB.anchor),
              children: (0, pB.jsx)(qO.Provider, {
                value: !0,
                children: GB
              })
            })
          }
          return (0, pB.jsx)("a", {
            href: OB,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, pB.jsx)(qO.Provider, {
              value: !0,
              children: GB
            })
          })
        }

        function VO(BB) {
          let {
            code: OB
          } = BB;
          const GB = (0, YB.useContext)(lO);
          if ((0, YB.useContext)(qO)) return (0, pB.jsx)("code", {
            className: "DocsInlineCode",
            children: OB
          });
          if (yO().has(OB)) return (0, pB.jsx)(fO, {
            type: OB
          });
          const DB = zO(OB);
          if (DB) return (0, pB.jsx)(oB.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: eB(GB, XB(DB.pageId), DB.anchor),
            children: OB
          });
          const QB = NO(OB);
          return (0, pB.jsxs)("code", {
            className: "DocsInlineCode",
            children: [QB && (0, pB.jsx)(RO, {
              colour: QB
            }), OB]
          })
        }

        function SO(BB) {
          let {
            text: OB
          } = BB;
          const GB = [];
          let DB = 0;
          for (const YB of OB.matchAll(UB.g)) {
            YB.index > DB && GB.push(...WO(OB.slice(DB, YB.index)));
            const [, BB, QB, oB, jB, yB] = YB;
            BB ? GB.push((0, pB.jsx)(VO, {
              code: (0, UB.p)(BB, QB)
            })) : oB ? GB.push((0, pB.jsx)("strong", {
              children: (0, pB.jsx)(SO, {
                text: oB
              })
            })) : GB.push((0, pB.jsx)(AO, {
              href: yB,
              children: (0, pB.jsx)(SO, {
                text: jB
              })
            })), DB = YB.index + YB[0].length
          }
          return DB < OB.length && GB.push(...WO(OB.slice(DB))), (0, pB.jsx)(pB.Fragment, {
            children: GB.map(((BB, OB) => (0, pB.jsx)(YB.Fragment, {
              children: BB
            }, OB)))
          })
        }
        const nO = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          UO = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function fO(BB) {
          let {
            type: OB
          } = BB;
          const GB = yO(),
            DB = [];
          for (const YB of OB.trim().matchAll(nO)) {
            const [BB, OB, QB, oB, jB] = YB;
            OB ? DB.push((0, pB.jsx)("span", {
              className: "DocsTypeString",
              children: BB
            })) : QB && GB.has(QB) ? DB.push((0, pB.jsx)(mO, {
              name: QB,
              definition: GB.get(QB)
            })) : QB ? DB.push((0, pB.jsx)("span", {
              className: UO.has(QB) ? "DocsTypeKeyword" : "DocsTypeName",
              children: BB
            })) : oB ? DB.push((0, pB.jsx)("span", {
              className: "DocsTypeNumber",
              children: BB
            })) : jB ? DB.push(" ") : DB.push((0, pB.jsx)("span", {
              className: "DocsTypePunctuation",
              children: BB
            }))
          }
          return (0, pB.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: DB.map(((BB, OB) => (0, pB.jsx)(YB.Fragment, {
              children: BB
            }, OB)))
          })
        }
        const kO = 480,
          dO = 6,
          KO = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let uO = 0;

        function mO(BB) {
          let {
            name: OB,
            definition: GB
          } = BB;
          const DB = (0, YB.useContext)(lO),
            QB = JO[OB],
            jB = (0, YB.useRef)(null),
            yB = (0, YB.useRef)(null),
            MB = (0, YB.useRef)(null),
            [PB, zB] = (0, YB.useState)(!1),
            [lB, qB] = (0, YB.useState)(null),
            NB = (0, YB.useRef)(),
            RB = (0, YB.useContext)(pO),
            [WB] = (0, YB.useState)((() => "DocsTypePopover-" + uO++)),
            AB = () => {
              clearTimeout(NB.current), zB(!0)
            },
            VB = () => {
              clearTimeout(NB.current), NB.current = setTimeout((() => {
                zB(!1)
              }), 120)
            };
          return (0, YB.useEffect)((() => {
            if (!PB) return;
            const BB = BB => {
              if ("Escape" === BB.key) {
                var OB, GB;
                if (null !== (OB = yB.current) && void 0 !== OB && OB.contains(document.activeElement)) null === (GB = jB.current) || void 0 === GB || GB.focus();
                zB(!1)
              }
            };
            return document.addEventListener("keydown", BB), () => {
              document.removeEventListener("keydown", BB)
            }
          }), [PB]), (0, YB.useEffect)((() => () => {
            clearTimeout(NB.current)
          }), []), (0, YB.useLayoutEffect)((() => {
            if (!PB || !jB.current || !yB.current) return void qB(null);
            const BB = jB.current.getBoundingClientRect(),
              OB = yB.current.offsetHeight,
              GB = Math.min(kO, window.innerWidth - 32),
              YB = Math.min(Math.max(16, BB.left), window.innerWidth - GB - 16),
              DB = BB.bottom + dO + OB < window.innerHeight;
            qB({
              left: YB,
              top: DB ? BB.bottom + dO : Math.max(16, BB.top - dO - OB)
            })
          }), [PB]), (0, pB.jsxs)(pB.Fragment, {
            children: [(0, pB.jsx)("button", {
              type: "button",
              ref: jB,
              className: "DocsTypeLink",
              "aria-expanded": PB,
              "aria-describedby": PB ? WB : void 0,
              onMouseEnter: AB,
              onMouseLeave: VB,
              onFocus: AB,
              onBlur: VB,
              onKeyDown: BB => {
                "Tab" === BB.key && !BB.shiftKey && MB.current && (BB.preventDefault(), MB.current.focus())
              },
              onClick: AB,
              children: OB
            }), PB && (0, JB.createPortal)((0, pB.jsxs)("span", {
              ref: yB,
              id: WB,
              className: "DocsTypePopover",
              role: "tooltip",
              style: lB ? {
                left: lB.left,
                top: lB.top,
                maxWidth: kO
              } : {
                visibility: "hidden"
              },
              onMouseEnter: AB,
              onMouseLeave: VB,
              onFocus: AB,
              onBlur: VB,
              children: [(0, pB.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, pB.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: OB
                }), QB && (0, pB.jsxs)(oB.d, {
                  ref: MB,
                  className: "DocsTypePopoverLink",
                  to: eB(DB, XB(QB)),
                  onClick: () => {
                    zB(!1)
                  },
                  onKeyDown: BB => {
                    if ("Tab" === BB.key) {
                      var OB;
                      if (BB.preventDefault(), BB.shiftKey || !jB.current || ! function(BB, OB) {
                          const GB = [...document.querySelectorAll(KO)],
                            YB = GB.slice(GB.indexOf(BB) + 1).find((BB => BB.getClientRects().length > 0 && !(null !== OB && void 0 !== OB && OB.contains(BB))));
                          return null === YB || void 0 === YB || YB.focus(), void 0 !== YB
                        }(jB.current, yB.current)) null === (OB = jB.current) || void 0 === OB || OB.focus();
                      BB.shiftKey || zB(!1)
                    }
                  },
                  children: [XB(QB).title, (0, pB.jsx)(ZB, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, pB.jsx)(nB, {
                lang: "ts",
                code: GB,
                compact: !0
              })]
            }), null !== RB && void 0 !== RB ? RB : document.body)]
          })
        }
        var IO = GB(192),
          FO = GB(5261),
          iO = GB(5266),
          LO = GB(5269);
        const gO = {
          progressBar: {
            gO: 30,
            rO: .075,
            XO: 5,
            wO: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            EO: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            hO: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            aO: !0,
            scale: 3,
            rotation: 15,
            eO: !1
          },
          gravityBar: {
            gO: 30,
            CO: .25,
            HO: 3,
            vO: .8,
            gravity: 1,
            sO: 1.5,
            xO: 8,
            tO: 4,
            wO: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            GG: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            DG: 5,
            QG: 1200,
            oG: .15,
            jG: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var rO = GB(331),
          XO = GB(2098);

        function wO(BB) {
          return BB.startsWith("fa-")
        }
        const EO = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          cO = {
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

        function hO(BB) {
          return "string" === typeof BB ? "text" : "entityName" in BB || "translationKey" in BB ? "other" : (0, rO.zb)(BB) ? "progressBar" : (0, rO.wb)(BB) ? "keyBinding" : "icon" in BB ? "icon" : "str" in BB && "string" === typeof BB.str ? "text" : "other"
        }
        const aO = [{
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
          eO = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...aO],
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
                options: XO.j
              },
              isRequired: !0
            }, ...aO],
            other: []
          };

        function TO(BB) {
          return "string" === typeof BB ? {
            str: BB
          } : BB
        }

        function bO(BB, OB) {
          let GB = TO(BB);
          for (const YB of OB) GB = GB && "object" === typeof GB ? GB[YB] : void 0;
          return GB
        }

        function CO(BB, OB, GB) {
          const YB = (BB, DB) => {
            var QB;
            const oB = OB[DB],
              jB = {
                ...BB
              };
            if (DB === OB.length - 1) return void 0 === GB ? delete jB[oB] : jB[oB] = GB, jB;
            const yB = YB(null !== (QB = BB[oB]) && void 0 !== QB ? QB : {}, DB + 1);
            return 0 === Object.keys(yB).length ? delete jB[oB] : jB[oB] = yB, jB
          };
          return function(BB) {
            const OB = Object.keys(BB);
            return "string" === typeof BB.str && 1 === OB.length ? BB.str : BB
          }(YB(TO(BB), 0))
        }

        function HO(BB, OB) {
          const GB = hO(BB),
            YB = eO[GB].find((BB => BB.path.join(".") === OB.join("."))),
            DB = null !== YB && void 0 !== YB && YB.isRequired && "other" !== GB ? bO(cO[GB], OB) : void 0;
          return CO(BB, OB, DB)
        }

        function vO(BB) {
          switch (hO(BB)) {
            case "text":
              return String(bO(BB, ["str"]));
            case "icon":
              return String(bO(BB, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(bO(BB,["progress"])))}%`;
            case "keyBinding":
              return String(bO(BB, ["action"]));
            case "other":
              return JSON.stringify(BB)
          }
        }
        const sO = /^[A-Za-z_$][\w$]*$/;

        function xO(BB) {
          if (Array.isArray(BB)) return `[${BB.map(xO).join(", ")}]`;
          if (BB && "object" === typeof BB) {
            const OB = Object.entries(BB).map((BB => {
              let [OB, GB] = BB;
              return `${sO.test(OB)?OB:JSON.stringify(OB)}: ${xO(GB)}`
            }));
            return 0 === OB.length ? "{}" : `{ ${OB.join(", ")} }`
          }
          return JSON.stringify(BB)
        }

        function tO(BB) {
          const OB = BB.map(xO),
            GB = `[${OB.join(", ")}]`;
          return GB.length <= 60 ? GB : `[\n${OB.map((BB=>`    ${BB},`)).join("\n")}\n]`
        }
        const BG = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function OG(BB) {
          let OB = "";
          for (let DB = 0; DB < BB.length; DB++) {
            const QB = BB[DB];
            if ("\\" === QB) {
              var GB;
              const YB = null !== (GB = BB[DB + 1]) && void 0 !== GB ? GB : "";
              OB += "'" === YB ? "'" : QB + YB, DB++
            } else if ('"' === QB) OB += '\\"';
            else {
              var YB;
              OB += null !== (YB = BG[QB]) && void 0 !== YB ? YB : QB
            }
          }
          return `"${OB}"`
        }

        function GG(BB) {
          if ("string" === typeof BB) return !0;
          if (!BB || "object" !== typeof BB || Array.isArray(BB)) return !1;
          const OB = BB;
          return "ProgressBar" === OB.type ? "number" === typeof OB.progress : "StyledKeyBinding" === OB.type ? XO.j.includes(OB.action) : "string" === typeof OB.icon || "string" === typeof OB.str || "string" === typeof OB.entityName || "string" === typeof OB.translationKey
        }

        function YG(BB) {
          let OB;
          try {
            OB = function(BB) {
              let OB = "",
                GB = "",
                YB = 0;
              const DB = () => {
                OB += GB.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), GB = ""
              };
              for (; YB < BB.length;) {
                const QB = BB.slice(YB).search(/["'`]|\/\//);
                if (-1 === QB) {
                  GB += BB.slice(YB);
                  break
                }
                GB += BB.slice(YB, YB + QB);
                const oB = YB + QB,
                  jB = BB[oB];
                if ("/" === jB) {
                  const OB = BB.indexOf("\n", oB);
                  YB = -1 === OB ? BB.length : OB;
                  continue
                }
                if (DB(), "`" === jB) throw new Error("Use quotes rather than template strings.");
                let yB = oB + 1;
                for (; yB < BB.length && BB[yB] !== jB;) yB += "\\" === BB[yB] ? 2 : 1;
                if (yB >= BB.length) throw new Error("A string is missing its closing quote.");
                const JB = BB.slice(oB + 1, yB);
                OB += OG(JB), YB = yB + 1
              }
              return DB(), JSON.parse(OB)
            }(BB.trim())
          } catch (YB) {
            return {
              parts: null,
              error: YB instanceof SyntaxError ? "This isn't a valid array yet." : YB.message
            }
          }
          if (!Array.isArray(OB)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const GB = OB.findIndex((BB => !GG(BB)));
          return -1 !== GB ? {
            parts: null,
            error: `Part ${GB+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: OB,
            error: null
          }
        }
        const DG = 1 / IO.f.clientTicksPerSecond,
          QG = 700,
          oG = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          jG = {
            progressBar: gO.progressBar.EO,
            timedClick: gO.timedClick.icon,
            gravityBar: gO.gravityBar.icon,
            precisionBar: gO.precisionBar.icon,
            rhythmClick: gO.rhythmClick.icon
          };

        function yG(BB) {
          let {
            type: OB
          } = BB;
          const [GB, DB] = (0, YB.useState)("ready"), [oB, jB] = (0, YB.useState)(1), [yB, JB] = (0, YB.useState)(!0), MB = (0, YB.useRef)(null), PB = (0, YB.useRef)(null), zB = (0, YB.useRef)(null), lB = (0, YB.useRef)(new Set), qB = (0, YB.useRef)(!1), NB = jG[OB], RB = (0, YB.useMemo)((() => ({
            getState: () => {
              var BB, OB;
              return null !== (BB = null === (OB = zB.current) || void 0 === OB ? void 0 : OB.getState()) && void 0 !== BB ? BB : oG
            },
            onFrame: BB => (lB.current.add(BB), () => {
              lB.current.delete(BB)
            })
          })), []);
          (0, YB.useEffect)((() => {
            const BB = MB.current,
              OB = PB.current;
            if (!BB || !OB) return;
            const GB = new ResizeObserver((() => {
              jB(BB.clientWidth / Math.max(1, OB.offsetWidth))
            }));
            return GB.observe(BB), () => {
              GB.disconnect()
            }
          }), []), (0, YB.useEffect)((() => {
            var BB;
            if ("playing" !== GB) return;
            let YB = !1;
            const QB = new LO.g[OB](gO[OB], (BB => {
              YB = !0, JB(!1), DB(BB ? "succeeded" : "failed")
            }), (() => {}));
            zB.current = QB;
            let oB = 0,
              jB = performance.now(),
              yB = requestAnimationFrame((function BB(OB) {
                for (oB += Math.min(.25, (OB - jB) / 1e3), jB = OB; oB >= DG && !YB;) oB -= DG, QB.handleTick(DG);
                for (const GB of lB.current) GB();
                YB || (yB = requestAnimationFrame(BB))
              }));
            return null === (BB = MB.current) || void 0 === BB || BB.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(yB), QB.tearDown(), zB.current = null, qB.current = !1
            }
          }), [GB, OB]), (0, YB.useEffect)((() => {
            if (yB) return;
            const BB = setTimeout((() => {
              JB(!0)
            }), QG);
            return () => {
              clearTimeout(BB)
            }
          }), [yB]);
          const WB = BB => {
            var OB;
            "playing" === GB && qB.current !== BB && (qB.current = BB, null === (OB = zB.current) || void 0 === OB || OB.handleMouseInput(BB))
          };
          return (0, pB.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, pB.jsxs)("div", {
              ref: MB,
              className: QB()("DocsQteStage", {
                Playing: "playing" === GB
              }),
              tabIndex: "playing" === GB ? 0 : -1,
              role: "playing" === GB ? "button" : void 0,
              "aria-label": "playing" === GB ? `${OB} quick time event: click or press Space` : void 0,
              onPointerDown: BB => {
                0 === BB.button && WB(!0)
              },
              onPointerUp: () => {
                WB(!1)
              },
              onPointerLeave: () => {
                WB(!1)
              },
              onPointerCancel: () => {
                WB(!1)
              },
              onKeyDown: BB => {
                "playing" !== GB || " " !== BB.key && "Enter" !== BB.key || (BB.preventDefault(), WB(!0))
              },
              onKeyUp: BB => {
                "playing" !== GB || " " !== BB.key && "Enter" !== BB.key || WB(!1)
              },
              children: [(0, pB.jsx)("div", {
                ref: PB,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${oB})`
                },
                children: "playing" === GB && (0, pB.jsx)(iO.c.Provider, {
                  value: RB,
                  children: (0, pB.jsx)(FO.b, {
                    qte: {
                      type: OB,
                      parameters: gO[OB]
                    }
                  })
                })
              }), "playing" !== GB && (0, pB.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== GB && (0, pB.jsxs)("div", {
                  className: QB()("DocsQteResult", "succeeded" === GB ? "Succeeded" : "Failed"),
                  children: [(0, pB.jsx)(ZB, {
                    name: "succeeded" === GB ? "check" : "cross",
                    isTinted: !0
                  }), (0, pB.jsx)("span", {
                    children: "succeeded" === GB ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, pB.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !yB,
                  onClick: () => {
                    DB("playing")
                  },
                  children: [(0, pB.jsx)(ZB, {
                    name: "ready" === GB ? "play" : "replay"
                  }), (0, pB.jsx)("span", {
                    children: "ready" === GB ? `Try ${OB}` : "Play again"
                  })]
                })]
              })]
            }), NB && !wO(NB) && (0, pB.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, pB.jsx)("code", {
                children: NB
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function JG(BB) {
          let {
            level: OB,
            text: GB,
            anchor: YB,
            className: DB
          } = BB;
          const oB = `h${Math.min(OB,6)}`;
          return (0, pB.jsxs)(oB, {
                id: YB,
                className: QB()("DocsHeading", DB),
                children: [(0, pB.jsx)(SO, {
                      text: GB
                    }), (0, pB.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${YB}`,
                        "aria-label": `Link to ${GB.replace(/`/g,"")}`,children:"#"})]})}function MG(BB){let{items:OB,ordered:GB}=BB;const YB=GB?"ol":"ul";return(0,pB.jsx)(YB,{className:"DocsList",children:OB.map(((BB,OB)=>(0,pB.jsxs)("li",{children:[(0,pB.jsx)(SO,{text:BB.text}),BB.children.length>0&&(0,pB.jsx)(MG,{items:BB.children,ordered:GB})]},OB)))})}function PG(BB){const OB=BB[0],GB="paragraph"===(null===OB||void 0===OB?void 0:OB.kind)?OB.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(GB)?"warning":/^\*\*(tip|prefer)/.test(GB)?"tip":"note"}function zG(BB){let{block:OB}=BB;switch(OB.kind){case"heading":return(0,pB.jsx)(JG,{level:OB.level,text:OB.text,anchor:OB.anchor});case"paragraph":return(0,pB.jsx)("p",{children:(0,pB.jsx)(SO,{text:OB.text})});case"code":{const BB="ts"===OB.lang?function(BB){const OB=BB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return OB&&Object.hasOwn(gO,OB[1])?OB[1]:null}(OB.code):null;return(0,pB.jsxs)(pB.Fragment,{children:[(0,pB.jsx)(nB,{code:OB.code,lang:OB.lang}),BB&&(0,pB.jsx)(yG,{type:BB})]})}case"table":return(0,pB.jsx)("div",{className:"DocsTableScroll",children:(0,pB.jsxs)("table",{className:"DocsTable",children:[(0,pB.jsx)("thead",{children:(0,pB.jsx)("tr",{children:OB.header.map(((BB,OB)=>(0,pB.jsx)("th",{children:(0,pB.jsx)(SO,{text:BB})},OB)))})}),(0,pB.jsx)("tbody",{children:OB.rows.map(((BB,OB)=>(0,pB.jsx)("tr",{children:BB.map(((BB,OB)=>(0,pB.jsx)("td",{children:(0,pB.jsx)(SO,{text:BB})},OB)))},OB)))})]})});case"list":return(0,pB.jsx)(MG,{items:OB.items,ordered:OB.ordered});case"quote":return(0,pB.jsx)("aside",{className:QB()("DocsCallout",PG(OB.blocks)),children:(0,pB.jsx)(lG,{blocks:OB.blocks})});case"rule":return(0,pB.jsx)("hr",{className:"DocsRule"})}}function lG(BB){let{blocks:OB}=BB;return(0,pB.jsx)(pB.Fragment,{children:OB.map(((BB,OB)=>(0,pB.jsx)(zG,{block:BB},OB)))})}var pG=GB(5242),qG=GB(5247);function ZG(BB){return"blocks"===BB||"items"===BB}const NG=new Map;function RG(BB){let OB=NG.get(BB);return OB||(OB=function(BB){const OB={entries:[],legend:[],notes:[],examples:[]};let GB=!1;for(const QB of BB.split(/\r?\n/).slice(1)){if(QB.startsWith("#")){const BB=QB.replace(/^# ?/,""),YB=BB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);YB?OB.legend.push({code:YB[1],meaning:YB[2],usage:YB[3].trim()}):/^Examples:/.test(BB.trim())?GB=!0:GB&&BB.trim()?OB.examples.push(BB.trim()):BB.trim()&&!/^\s/.test(BB)&&OB.notes.push(BB.trim());continue}const BB=QB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var YB,DB;BB&&OB.entries.push({name:BB[1],variants:null!==(YB=null===(DB=BB[2])||void 0===DB?void 0:DB.split(","))&&void 0!==YB?YB:[]})}return OB}("blocks"===BB?pG:qG),NG.set(BB,OB)),OB}function WG(BB){let{className:OB,value:GB,placeholder:YB,label:DB,onChange:QB,count:oB,children:jB}=BB;return(0,pB.jsxs)("div",{className:OB,children:[(0,pB.jsx)(ZB,{name:"magnifying-glass"}),(0,pB.jsx)("input",{type:"search",value:GB,placeholder:YB,"aria-label":DB,onChange:BB=>{QB(BB.target.value)}}),jB,oB&&(0,pB.jsxs)("span",{className:"DocsFilterCount",children:[oB.visible," of ",oB.total]})]})}var AG=GB(1383);function VG(BB){const OB=BB.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return OB?OB[2]:null}function SG(BB){return"paragraph"===BB.kind&&""===BB.text.trim()}function nG(BB){const OB={name:BB.heading.text,description:[],params:[],returns:null};let GB="description";for(const DB of BB.blocks)if(!SG(DB))if("heading"===DB.kind&&/^Parameters:?$/.test(DB.text))GB="params";else if("heading"===DB.kind&&/^Returns:?$/.test(DB.text))GB="returns",OB.returns={type:"",description:[]};else if("params"!==GB||"table"!==DB.kind){if("returns"===GB&&"paragraph"===DB.kind&&""===OB.returns.type){const BB=VG(DB.text);if(null!==BB){OB.returns.type=BB.replaceAll("\\|","|");continue}}"returns"===GB?OB.returns.description.push(DB):OB.description.push(DB)}else for(const[BB,GB,QB]of DB.rows){var YB;OB.params.push({name:BB,type:null!==(YB=VG(GB))&&void 0!==YB?YB:GB,description:null!==QB&&void 0!==QB?QB:""})}return OB}const UG=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function fG(BB){return BB.filter((BB=>!SG(BB)))}const kG=/^[\w][\w .'&!:()-]*$/,dG=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function KG(BB){var OB;if("code"===BB.kind&&"text"===BB.lang){const OB=BB.code.split("\n").map((BB=>BB.trim())).filter(Boolean);return OB.length>0&&OB.every((BB=>kG.test(BB)))?OB.map((BB=>({name:BB}))):null}return"paragraph"===BB.kind&&dG.test(BB.text.trim())?[...BB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((BB => BB[1].split(/,\s*/).map((BB => ({
                              name: BB.trim()
                            }))))): "table" === BB.kind && null !== (OB = BB.header[0]) && void 0 !== OB && OB.startsWith("Song") ? BB.rows.map((BB => {
                              let [OB, GB] = BB;
                              return {
                                name: OB.replace(/`/g, ""),
                                caption: GB
                              }
                            })) : null
                          }

                          function uG(BB) {
                            const OB = [];
                            for (const GB of BB) {
                              const BB = KG(GB),
                                YB = OB.at(-1),
                                DB = "table" === GB.kind;
                              BB ? "names" === (null === YB || void 0 === YB ? void 0 : YB.kind) && YB.isSongs === DB ? YB.names.push(...BB) : OB.push({
                                kind: "names",
                                names: BB,
                                isSongs: DB
                              }) : OB.push({
                                kind: "block",
                                block: GB
                              })
                            }
                            return OB
                          }
                          const mG = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function IG(BB, OB) {
                            return `${mG[BB]}-${(0,UB.s)(OB)}`
                          }
                          const FG = new WeakMap;

                          function iG(BB, OB, GB) {
                            let YB = FG.get(OB);
                            if (!YB) {
                              YB = new Map;
                              const GB = new Set;
                              for (const DB of (0, UB.t)(OB)) {
                                const OB = uG(fG(DB.blocks)).map((OB => {
                                  if ("block" === OB.kind) return OB;
                                  return {
                                    kind: "names",
                                    names: OB.names.map((OB => {
                                      var YB, QB;
                                      const oB = IG(BB, OB.name);
                                      let jB = oB;
                                      for (let BB = 2; GB.has(jB); BB++) jB = `${oB}-${BB}`;
                                      return GB.add(jB), {
                                        ...OB,
                                        anchor: jB,
                                        heading: null !== (YB = null === (QB = DB.heading) || void 0 === QB ? void 0 : QB.text) && void 0 !== YB ? YB : ""
                                      }
                                    })),
                                    isSongs: OB.isSongs
                                  }
                                }));
                                YB.set(DB.blocks, OB)
                              }
                              FG.set(OB, YB)
                            }
                            const DB = YB.get(GB);
                            if (!DB) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return DB
                          }
                          const LG = "/textures/docs/skinPreviews",
                            gG = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var rG = GB(4631),
                            XG = GB(4642);

                          function wG(BB) {
                            return Object.hasOwn(rG.i, BB) ? rG.i[BB] : null
                          }
                          const EG = {
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
                            blendMode: XG.f.Standard
                          };

                          function cG(BB, OB, GB) {
                            return OB + (GB - OB) * BB()
                          }

                          function hG(BB, OB, GB) {
                            return BB + (OB - BB) * GB
                          }

                          function aG(BB) {
                            return BB.length > 0 && "timeFraction" in BB[0]
                          }

                          function eG(BB, OB) {
                            if (0 === BB.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!aG(BB.colorGradients)) {
                              const GB = BB.colorGradients,
                                {
                                  color: YB
                                } = GB[Math.floor(OB() * GB.length) % GB.length];
                              return [{
                                at: 0,
                                colour: [YB[0] / 255, YB[1] / 255, YB[2] / 255, 1]
                              }]
                            }
                            return [...BB.colorGradients].sort(((BB, OB) => BB.timeFraction - OB.timeFraction)).map((BB => {
                              var GB, YB, DB;
                              const QB = BB.minColor,
                                oB = null !== (GB = BB.maxColor) && void 0 !== GB ? GB : QB,
                                jB = OB(),
                                yB = [hG(QB[0], oB[0], jB) / 255, hG(QB[1], oB[1], jB) / 255, hG(QB[2], oB[2], jB) / 255, hG(null !== (YB = QB[3]) && void 0 !== YB ? YB : 1, null !== (DB = oB[3]) && void 0 !== DB ? DB : 1, jB)];
                              return {
                                at: BB.timeFraction,
                                colour: yB
                              }
                            }))
                          }

                          function TG(BB, OB, GB, YB) {
                            const DB = cG(YB, BB.minEmitPower, BB.maxEmitPower),
                              QB = OB => cG(YB, Math.min(BB.dir1[OB], BB.dir2[OB]), Math.max(BB.dir1[OB], BB.dir2[OB])) * DB,
                              oB = [...BB.velocityGradients].sort(((BB, OB) => BB.timeFraction - OB.timeFraction)).map((BB => ({
                                at: BB.timeFraction,
                                factor: cG(YB, BB.factor, BB.factor2)
                              })));
                            return {
                              pos: [cG(YB, OB[0], GB[0]), cG(YB, OB[1], GB[1]), cG(YB, OB[2], GB[2])],
                              dir: [QB(0), QB(1), QB(2)],
                              age: 0,
                              life: cG(YB, BB.minLifeTime, BB.maxLifeTime),
                              size: cG(YB, BB.minSize, BB.maxSize),
                              colours: eG(BB, YB),
                              velocityFactors: oB
                            }
                          }

                          function bG(BB, OB, GB, YB) {
                            if (OB < BB[0].at) return GB(Math.min(1, BB.length - 1));
                            for (let DB = 0; DB < BB.length - 1; DB++)
                              if (OB <= BB[DB + 1].at) {
                                const QB = BB[DB + 1].at - BB[DB].at;
                                return YB(GB(DB), GB(DB + 1), QB > 0 ? (OB - BB[DB].at) / QB : 1)
                              } return GB(BB.length - 1)
                          }

                          function CG(BB) {
                            return bG(BB.colours, BB.age / BB.life, (OB => BB.colours[OB].colour), ((BB, OB, GB) => [hG(BB[0], OB[0], GB), hG(BB[1], OB[1], GB), hG(BB[2], OB[2], GB), hG(BB[3], OB[3], GB)]))
                          }

                          function HG(BB, OB, GB) {
                            if (BB.age += GB, BB.age >= BB.life) return !1;
                            const YB = function(BB) {
                              return 0 === BB.velocityFactors.length ? 1 : bG(BB.velocityFactors, BB.age / BB.life, (OB => BB.velocityFactors[OB].factor), hG)
                            }(BB) * GB;
                            for (let QB = 0; QB < 3; QB++) {
                              var DB;
                              BB.pos[QB] += BB.dir[QB] * YB, BB.dir[QB] += (null !== (DB = OB[QB]) && void 0 !== DB ? DB : 0) * GB
                            }
                            return !0
                          }

                          function vG(BB) {
                            return String(Math.round(1e6 * BB) / 1e6)
                          }

                          function sG(BB) {
                            return `[${BB.map(vG).join(", ")}]`
                          }

                          function xG(BB, OB) {
                            const GB = `${OB}    `;
                            return `[\n${(aG(BB)?BB.map((BB=>{const OB=[`${GB}    timeFraction: ${vG(BB.timeFraction)},`,`${GB}    minColor: ${sG(BB.minColor)},`];return BB.maxColor&&OB.push(`${GB}    maxColor: ${sG(BB.maxColor)},`),`${GB}{\n${OB.join("\n")}\n${GB}},`})):BB.map((BB=>`
                            $ {
                              GB
                            } {
                              color: $ {
                                sG(BB.color)
                              }
                            }, `))).join("\n")}\n${OB}]`
                          }
                          const tG = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            BY = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const OY = .6;

                          function GY(BB, OB) {
                            return `${OB?"song":"sound"}:${BB}`
                          }
                          let YY = {
                              track: null,
                              volume: OY
                            },
                            DY = null,
                            QY = 0,
                            oY = 0;
                          const jY = new Set;

                          function yY(BB) {
                            YY = {
                              ...YY,
                              ...BB
                            }, jY.forEach((BB => {
                              BB()
                            }))
                          }

                          function JY(BB) {
                            YY.track && yY({
                              track: {
                                ...YY.track,
                                ...BB
                              }
                            })
                          }

                          function MY(BB) {
                            const [OB, GB] = (0, YB.useState)((() => BB(YY))), DB = (0, YB.useRef)(BB);
                            return DB.current = BB, (0, YB.useEffect)((() => {
                              const BB = () => {
                                GB((() => DB.current(YY)))
                              };
                              return jY.add(BB), BB(), () => {
                                jY.delete(BB)
                              }
                            }), []), OB
                          }

                          function PY() {
                            QY++;
                            const BB = DY;
                            DY = null, null === BB || void 0 === BB || BB.stop()
                          }

                          function zY(BB, OB) {
                            let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            PY();
                            const DB = QY,
                              {
                                track: QB
                              } = YY,
                              oB = QB && QB.name === BB && QB.isSong === OB ? QB.duration : 0;
                            oY = YB, yY({
                              track: {
                                name: BB,
                                isSong: OB,
                                status: "loading",
                                duration: oB
                              }
                            }), Promise.all([GB.e(249), GB.e(278)]).then((() => GB(40812))).then((GB => {
                              let {
                                playDocsSound: QB
                              } = GB;
                              DB === QY && (DY = QB(BB, OB, YY.volume, YB, {
                                onPlay: BB => {
                                  DB === QY && JY({
                                    status: "playing",
                                    duration: BB
                                  })
                                },
                                onEnd: BB => {
                                  var OB, GB;
                                  DB === QY && (DY = null, BB ? yY({
                                    track: null
                                  }) : (oY = null !== (OB = null === (GB = YY.track) || void 0 === GB ? void 0 : GB.duration) && void 0 !== OB ? OB : 0, JY({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((OB => {
                              console.error(`Could not play docs sound ${BB}`, OB), DB === QY && yY({
                                track: null
                              })
                            }))
                          }

                          function lY() {
                            const {
                              track: BB
                            } = YY;
                            if (!BB) return;
                            if ("playing" === BB.status && DY) return oY = DY.pR(), DY.pause(), void JY({
                              status: "paused"
                            });
                            if ("loading" === BB.status) return PY(), void JY({
                              status: "paused"
                            });
                            if (DY) return void DY.resume();
                            const OB = BB.duration > 0 && oY >= BB.duration - .05;
                            zY(BB.name, BB.isSong, OB ? 0 : oY)
                          }

                          function pY() {
                            var BB;
                            return DY && "playing" === (null === (BB = YY.track) || void 0 === BB ? void 0 : BB.status) ? DY.pR() : oY
                          }

                          function qY(BB) {
                            var OB;
                            null === (OB = DY) || void 0 === OB || OB.setVolume(BB), yY({
                              volume: BB
                            })
                          }

                          function ZY() {
                            PY(), oY = 0, yY({
                              track: null
                            })
                          }
                          const NY = (0, YB.createContext)(null);
                          let RY = null;

                          function WY() {
                            const [BB, OB] = (0, YB.useState)(null);
                            return (0, YB.useEffect)((() => {
                              let BB = !1;
                              return RY ??= Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(204), GB.e(35), GB.e(253)]).then((() => GB(40803))), RY.then((GB => {
                                BB || OB(GB)
                              }), (BB => {
                                console.error("Could not load the docs gallery's textures", BB), RY = null
                              })), () => {
                                BB = !0
                              }
                            }), []), BB
                          }
                          const AY = 24,
                            VY = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function SY(BB, OB) {
                            const GB = "skins" === BB ? function(BB, OB) {
                              const GB = gG.find((OB => BB.startsWith(OB.heading)));
                              return GB ? function(BB, OB) {
                                return `${BB}-${OB}`
                              }(GB.prefix, OB) : null
                            }(OB.heading, OB.name) : null;
                            return null === GB ? null : `${LG}/${GB}.webp`
                          }

                          function nY(BB) {
                            let {
                              kind: OB,
                              entry: GB,
                              assets: DB,
                              renderedUrl: oB
                            } = BB;
                            const {
                              name: jB
                            } = GB, [yB, JB] = (0, YB.useState)(!1);
                            if ("icons" === OB && wO(jB)) return (0, pB.jsx)(AG.b, {
                              className: "DocsTileIcon",
                              name: jB
                            });
                            let MB = null;
                            var PB;
                            if ("icons" === OB) MB = null !== (PB = null === DB || void 0 === DB ? void 0 : DB.getIngameIconUrl(jB)) && void 0 !== PB ? PB : null;
                            else if ("particles" === OB) {
                              var zB, lB, qB;
                              MB = null !== (zB = null === DB || void 0 === DB ? void 0 : DB.getParticleTextureUrl(null !== (lB = null === (qB = wG(jB)) || void 0 === qB ? void 0 : qB.texture) && void 0 !== lB ? lB : jB)) && void 0 !== zB ? zB : null
                            } else "skins" === OB && (MB = null !== oB && void 0 !== oB ? oB : VY.test(jB) ? `/textures/charSkins/previews/${jB}_preview.png` : null);
                            return !MB || yB ? (0, pB.jsx)(ZB, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === OB ? "person" : "image"
                            }) : (0, pB.jsx)("img", {
                              className: QB()("DocsTileImage", {
                                Pixelated: "skins" !== OB
                              }),
                              src: MB,
                              srcSet: MB === oB ? `${MB} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${MB}`), JB(!0)
                              }
                            })
                          }

                          function UY(BB) {
                            let {
                              entry: OB,
                              isSong: GB
                            } = BB;
                            const YB = MY((BB => {
                                let {
                                  track: YB
                                } = BB;
                                return (null === YB || void 0 === YB ? void 0 : YB.name) === OB.name && YB.isSong === GB ? YB.status : null
                              })),
                              DB = null !== YB && "paused" !== YB;
                            return (0, pB.jsxs)("button", {
                              type: "button",
                              id: OB.anchor,
                              className: QB()("DocsSoundTile", {
                                Playing: DB
                              }),
                              "data-docs-track": GY(OB.name, GB),
                              "aria-label": DB ? `Pause ${OB.name}` : `Play ${OB.name}`,
                              onClick: () => {
                                null !== YB ? lY() : zY(OB.name, GB)
                              },
                              children: [(0, pB.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, pB.jsx)(ZB, {
                                  name: DB ? "pause" : "play"
                                })
                              }), (0, pB.jsx)("code", {
                                className: "DocsSoundName",
                                children: OB.name
                              }), OB.caption && (0, pB.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: OB.caption
                              })]
                            })
                          }

                          function fY(BB) {
                            let {
                              kind: OB,
                              names: GB,
                              isSongs: DB
                            } = BB;
                            const oB = WY(),
                              [jB, yB] = RB(),
                              JB = !1 === (null === jB || void 0 === jB ? void 0 : jB.failed) ? jB.text : null,
                              MB = (0, YB.useContext)(NY),
                              [PB, zB] = (0, YB.useState)(""),
                              lB = PB.trim().toLowerCase(),
                              qB = lB ? GB.filter((BB => BB.name.toLowerCase().includes(lB))) : GB;
                            return (0, pB.jsxs)("div", {
                              className: "DocsGallery",
                              children: [GB.length > AY && (0, pB.jsx)(WG, {
                                className: "DocsGalleryFilter",
                                value: PB,
                                placeholder: `Filter ${GB.length} names\u2026`,
                                label: "Filter names",
                                onChange: zB,
                                count: lB ? {
                                  visible: qB.length,
                                  total: GB.length
                                } : null
                              }), (0, pB.jsx)("div", {
                                className: QB()("DocsGalleryGrid", `Kind-${OB}`, {
                                  Songs: DB
                                }),
                                children: qB.map((BB => {
                                  if ("sounds" === OB) return (0, pB.jsx)(UY, {
                                    entry: BB,
                                    isSong: DB
                                  }, BB.anchor);
                                  if (MB && "particles" === OB && wG(BB.name)) return (0, pB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: QB()("DocsTile Previewable", {
                                      Copied: JB === BB.name
                                    }),
                                    title: `Play "${BB.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      MB(BB.name), yB(BB.name)
                                    },
                                    children: [(0, pB.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, pB.jsx)(nY, {
                                        kind: OB,
                                        entry: BB,
                                        assets: oB,
                                        renderedUrl: null
                                      }), (0, pB.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, pB.jsx)(ZB, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, pB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: JB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor);
                                  const GB = SY(OB, BB);
                                  return (0, pB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: QB()("DocsTile", {
                                      Copied: JB === BB.name
                                    }),
                                    title: `Copy "${BB.name}"`,
                                    onClick: () => {
                                      yB(BB.name)
                                    },
                                    children: [(0, pB.jsx)("span", {
                                      className: QB()("DocsTilePreview", {
                                        Rendered: null !== GB
                                      }),
                                      children: (0, pB.jsx)(nY, {
                                        kind: OB,
                                        entry: BB,
                                        assets: oB,
                                        renderedUrl: GB
                                      })
                                    }), (0, pB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: JB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor)
                                }))
                              })]
                            })
                          }

                          function kY(BB) {
                            let {
                              kind: OB,
                              content: GB,
                              blocks: YB
                            } = BB;
                            return (0, pB.jsx)(pB.Fragment, {
                              children: iG(OB, GB, YB).map(((BB, GB) => "block" === BB.kind ? (0, pB.jsx)(zG, {
                                block: BB.block
                              }, GB) : (0, pB.jsx)(fY, {
                                kind: OB,
                                names: BB.names,
                                isSongs: BB.isSongs
                              }, GB)))
                            })
                          }
                          const dY = [{
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

                          function KY(BB) {
                            let {
                              cards: OB = dY,
                              label: GB = "Start here"
                            } = BB;
                            const DB = (0, YB.useContext)(lO);
                            return (0, pB.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": GB,
                              children: OB.map((BB => {
                                let {
                                  pageId: OB,
                                  countNoun: GB
                                } = BB;
                                const YB = XB(OB);
                                return (0, pB.jsxs)(oB.d, {
                                  to: eB(DB, YB),
                                  className: "DocsLandingCard",
                                  children: [(0, pB.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, pB.jsx)(ZB, {
                                      name: YB.icon
                                    })
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: YB.title
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: YB.summary
                                  }), GB && (0, pB.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [EB(YB).sections.length, " ", GB]
                                  })]
                                }, OB)
                              }))
                            })
                          }
                          const uY = 240;

                          function mY(BB) {
                            let {
                              faces: OB
                            } = BB;
                            return (0, pB.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, pB.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${OB.top}")`
                                }
                              }), (0, pB.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${OB.left}")`
                                }
                              }), (0, pB.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${OB.right}")`
                                }
                              })]
                            })
                          }

                          function IY(BB) {
                            let {
                              src: OB
                            } = BB;
                            const [GB, DB] = (0, YB.useState)(!1);
                            return GB ? null : (0, pB.jsx)("img", {
                              src: OB,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${OB}`), DB(!0)
                              }
                            })
                          }

                          function FY(BB) {
                            let {
                              kind: OB
                            } = BB;
                            const GB = RG(OB),
                              DB = WY(),
                              oB = (0, jB.r)(),
                              [yB, JB] = (0, YB.useState)(""),
                              [MB, PB] = (0, YB.useState)(null),
                              [zB, lB] = (0, YB.useState)(uY),
                              [qB, NB] = (0, YB.useState)(null),
                              RB = (0, YB.useRef)(null),
                              AB = yB.trim().toLowerCase();
                            (0, YB.useEffect)((() => {
                              const BB = (0, UB.r)(oB.hash),
                                YB = GB.entries.find((GB => IG(OB, GB.name) === BB));
                              if (YB) RB.current = YB.name, JB(YB.name), PB(null), NB(YB.name);
                              else if (null !== RB.current) {
                                const BB = RB.current;
                                RB.current = null, JB((OB => OB === BB ? "" : OB)), NB(null)
                              }
                            }), [GB, OB, oB.hash, oB.key]), (0, YB.useEffect)((() => {
                              var BB;
                              null !== qB && (null === (BB = document.getElementById(IG(OB, qB))) || void 0 === BB || BB.scrollIntoView({
                                block: "center"
                              }))
                            }), [OB, qB]);
                            const VB = GB.entries.filter((BB => (!AB || BB.name.toLowerCase().includes(AB)) && (!MB || BB.variants.includes(MB))));
                            return (0, pB.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [GB.notes.length > 0 && (0, pB.jsx)("div", {
                                className: "DocsProse",
                                children: GB.notes.map((BB => (0, pB.jsx)("p", {
                                  children: BB
                                }, BB)))
                              }), GB.legend.length > 0 && (0, pB.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, pB.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, pB.jsx)("thead", {
                                    children: (0, pB.jsxs)("tr", {
                                      children: [(0, pB.jsx)("th", {
                                        children: "Code"
                                      }), (0, pB.jsx)("th", {
                                        children: "Variant"
                                      }), (0, pB.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, pB.jsx)("tbody", {
                                    children: GB.legend.map((BB => (0, pB.jsxs)("tr", {
                                      children: [(0, pB.jsx)("td", {
                                        children: (0, pB.jsx)("button", {
                                          type: "button",
                                          className: QB()("DocsVariantChip", {
                                            Active: MB === BB.code
                                          }),
                                          "aria-pressed": MB === BB.code,
                                          title: `Show only ${OB} with ${BB.meaning} variants`,
                                          onClick: () => {
                                            PB(MB === BB.code ? null : BB.code)
                                          },
                                          children: BB.code
                                        })
                                      }), (0, pB.jsx)("td", {
                                        children: BB.meaning
                                      }), (0, pB.jsx)("td", {
                                        children: (0, pB.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: BB.usage
                                        })
                                      })]
                                    }, BB.code)))
                                  })]
                                })
                              }), GB.examples.length > 0 && (0, pB.jsx)(nB, {
                                lang: "text",
                                code: GB.examples.join("\n")
                              }), (0, pB.jsx)(WG, {
                                className: "DocsFilterBar",
                                value: yB,
                                placeholder: `Search ${GB.entries.length} ${OB}\u2026`,
                                label: `Search ${OB}`,
                                onChange: BB => {
                                  JB(BB), lB(uY)
                                },
                                count: AB || MB ? {
                                  visible: VB.length,
                                  total: GB.entries.length
                                } : null,
                                children: MB && (0, pB.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    PB(null)
                                  },
                                  children: [MB, " ", (0, pB.jsx)(ZB, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, pB.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: VB.slice(0, zB).map((BB => {
                                  const GB = "blocks" === OB ? null === DB || void 0 === DB ? void 0 : DB.getBlockFaces(BB.name) : null,
                                    YB = DB && !GB ? DB.getItemTextureUrl(BB.name) : null;
                                  return (0, pB.jsxs)("div", {
                                    id: IG(OB, BB.name),
                                    className: QB()("DocsCatalogueTile", {
                                      Linked: BB.name === qB
                                    }),
                                    children: [(0, pB.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [GB && (0, pB.jsx)(mY, {
                                        faces: GB
                                      }), YB && (0, pB.jsx)(IY, {
                                        src: YB
                                      })]
                                    }), (0, pB.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: BB.name
                                    }), BB.variants.length > 0 && (0, pB.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: BB.variants.map((BB => (0, pB.jsx)("span", {
                                        children: BB
                                      }, BB)))
                                    }), (0, pB.jsx)(WB, {
                                      text: BB.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, BB.name)
                                }))
                              }), VB.length > zB && (0, pB.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  lB(VB.length)
                                },
                                children: ["Show all ", VB.length]
                              }), 0 === VB.length && (0, pB.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", OB, " match."]
                              })]
                            })
                          }
                          var iY = GB(5320),
                            LY = GB(1650);
                          const gY = .95 * iY.c;

                          function rY(BB) {
                            return /^\s*```/.test(BB)
                          }

                          function XY(BB, OB) {
                            const GB = [
                              []
                            ];
                            let YB = !1;
                            for (const DB of BB.split("\n")) !YB && OB(DB) && GB.at(-1).length > 0 && GB.push([]), rY(DB) && (YB = !YB), GB.at(-1).push(DB);
                            return GB.map((BB => BB.join("\n").trim())).filter(Boolean)
                          }

                          function wY(BB, OB) {
                            const GB = `${"#".repeat(OB)} `,
                              YB = [];
                            let DB = !1;
                            for (const QB of BB.split("\n")) rY(QB) ? DB = !DB : !DB && QB.startsWith(GB) && YB.push(QB.slice(GB.length).trim());
                            return YB
                          }

                          function EY(BB) {
                            return BB.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class cY {
                            constructor(BB, OB) {
                              this.origin = OB, this.pages = void 0, this.partPaths = new Map;
                              const GB = BB.map((BB => {
                                const OB = OB => this.resolveLinks(BB, OB).length,
                                  GB = function(BB, OB) {
                                    const GB = BB.map((BB => OB(BB.markdown) + 2)),
                                      YB = GB.reduce(((BB, OB) => BB + OB), 0),
                                      DB = YB / Math.ceil(YB / gY),
                                      QB = [];
                                    let oB = 0;
                                    return BB.forEach(((BB, OB) => {
                                      const YB = GB[OB];
                                      (0 === QB.length || oB + YB > gY || oB + YB / 2 > DB) && (QB.push([]), oB = 0), QB.at(-1).push(BB), oB += YB
                                    })), QB
                                  }(function(BB, OB) {
                                    return XY(BB, (BB => BB.startsWith("## "))).flatMap((BB => {
                                      var GB;
                                      const YB = null !== (GB = wY(BB, 2)[0]) && void 0 !== GB ? GB : "";
                                      if (OB(BB) <= gY) return [{
                                        markdown: BB,
                                        section: YB
                                      }];
                                      let DB = !1,
                                        QB = "";
                                      return XY(BB, (BB => {
                                        const OB = DB && "" !== BB.trim();
                                        return DB = "" === BB.trim(), OB
                                      })).map((BB => {
                                        var OB;
                                        const GB = wY(BB, 3),
                                          DB = BB.startsWith("### ") ? GB[0] : QB;
                                        return QB = null !== (OB = GB.at(-1)) && void 0 !== OB ? OB : QB, {
                                          markdown: BB,
                                          section: YB || DB
                                        }
                                      }))
                                    }))
                                  }(EY(BB), OB), OB);
                                return {
                                  page: BB,
                                  groups: GB.length > 1 ? GB : []
                                }
                              }));
                              for (const {
                                  page: YB,
                                  groups: DB
                                }
                                of GB) DB.forEach(((BB, OB) => {
                                const GB = (0, iY.s)(YB.slug, OB);
                                for (const DB of BB.flatMap((BB => [...wY(BB.markdown, 2), ...wY(BB.markdown, 3)]))) {
                                  const BB = `${YB.id}#${(0,UB.s)(DB)}`;
                                  this.partPaths.has(BB) || this.partPaths.set(BB, GB)
                                }
                              }));
                              this.pages = GB.map((BB => {
                                let {
                                  page: OB,
                                  groups: GB
                                } = BB;
                                return {
                                  page: OB,
                                  path: (0, iY.r)(OB.slug),
                                  markdown: `# ${OB.title}\n\n${this.resolveLinks(OB,EY(OB))}\n`,
                                  parts: GB.map(((BB, YB) => this.renderPart(OB, BB, YB, GB.length)))
                                }
                              }))
                            }
                            url(BB) {
                              return `${this.origin}${BB}`
                            }
                            getPage(BB) {
                              return this.pages.find((OB => OB.page.id === BB))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((BB => (BB.parts.length > 0 ? BB.parts : [{
                                path: BB.path,
                                label: "",
                                markdown: BB.markdown
                              }]).filter((BB => BB.markdown.length > iY.c))))
                            }
                            markdownUrl(BB, OB) {
                              const GB = OB && this.partPaths.get(`${BB.id}#${OB}`) || (0, iY.r)(BB.slug);
                              return this.url(OB ? `${GB}#${OB}` : GB)
                            }
                            resolveLinks(BB, OB) {
                              return OB.replace(/\]\((#[^)]+)\)/g, ((OB, GB) => {
                                var YB;
                                const DB = null !== (YB = hB(GB)) && void 0 !== YB ? YB : this.samePageTarget(BB, GB);
                                return DB ? `](${this.markdownUrl(DB.page,DB.anchor)})` : OB
                              }))
                            }
                            samePageTarget(BB, OB) {
                              const GB = (0, UB.s)(OB.slice(1));
                              return cB(BB, GB) ? {
                                page: BB,
                                anchor: GB
                              } : null
                            }
                            renderPart(BB, OB, GB, YB) {
                              const DB = function(BB) {
                                  const OB = BB.map((BB => BB.section)).filter(Boolean);
                                  if (0 === OB.length) return "";
                                  const GB = OB[0],
                                    YB = OB.at(-1);
                                  return GB === YB ? GB : `${GB} to ${YB}`
                                }(OB),
                                QB = OB.map((BB => BB.markdown)).join("\n\n"),
                                oB = DB ? `It covers ${DB}. ` : "",
                                jB = `Part ${GB+1} of ${YB} of [${BB.title}](${this.url((0,iY.r)(BB.slug))}). ${oB}[llms.txt](${this.url(iY.h)}) lists every part.`;
                              return {
                                path: (0, iY.s)(BB.slug, GB),
                                label: DB,
                                markdown: `# ${BB.title}, part ${GB+1} of ${YB}\n\n${jB}\n\n${this.resolveLinks(BB,QB)}\n`
                              }
                            }
                            llmsTxt(BB) {
                              const OB = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${hY(iY.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const GB of rB) {
                                OB.push("", `## ${GB.title}`, "");
                                for (const BB of GB.pageIds) {
                                  const GB = this.getPage(BB),
                                    {
                                      page: YB,
                                      parts: DB
                                    } = GB,
                                    QB = `About ${hY(GB.markdown.length)} tokens${DB.length>0?`, in ${DB.length} parts:`:"."}`;
                                  OB.push(`- [${YB.title}](${this.url(GB.path)}): ${YB.summary} ${QB}`), DB.forEach(((BB, GB) => {
                                    OB.push(`  - [Part ${GB+1}${BB.label?`: ${BB.label}`:""}](${this.url(BB.path)})`)
                                  }))
                                }
                              }
                              return OB.push("", "## Optional", "", `- [Every page in one file](${this.url(iY.e)}): About ${hY(BB.length)} tokens, for a model with a large context window.`, ""), OB.join("\n")
                            }
                            llmsFullTxt() {
                              return rB.flatMap((BB => BB.pageIds.map((BB => this.getPage(BB).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const BB = this.llmsFullTxt(),
                                OB = this.llmsTxt(BB),
                                GB = new Map([
                                  [iY.n, OB],
                                  [iY.h, OB],
                                  [iY.e, BB]
                                ]);
                              for (const YB of this.pages) {
                                GB.set(YB.path, YB.markdown);
                                for (const BB of YB.parts) GB.set(BB.path, BB.markdown)
                              }
                              return GB
                            }
                          }

                          function hY(BB) {
                            return `${Math.max(1,Math.round(BB/4e3))}K`
                          }
                          let aY = null;

                          function eY() {
                            return aY ??= new cY(gB, LY.d), aY
                          }
                          var TY = GB(5322);
                          const bY = [TY.d, TY.i];

                          function CY(BB) {
                            return eY().getPage(BB.id).parts.length > 0 ? `Read ${iY.l}, then the parts of the Bloxd Code API's ${BB.title} page it lists, so I can ask questions about it.` : `Read ${LY.d}${(0,iY.r)(BB.slug)} so I can ask questions about it. ${TY.h}`
                          }

                          function HY(BB) {
                            let {
                              page: OB
                            } = BB;
                            const [GB, YB] = RB();
                            return (0, pB.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, pB.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  YB(eY().getPage(OB.id).markdown)
                                },
                                children: [(0, pB.jsx)(ZB, {
                                  name: !1 === (null === GB || void 0 === GB ? void 0 : GB.failed) ? "check" : "copy"
                                }), (0, pB.jsx)("span", {
                                  children: GB ? GB.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), bY.map((BB => (0, pB.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, TY.b)(BB, CY(OB)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, pB.jsx)(ZB, {
                                  name: "external-link"
                                }), (0, pB.jsxs)("span", {
                                  children: ["Open in ", BB.name]
                                })]
                              }, BB.name)))]
                            })
                          }

                          function vY(BB) {
                            return `#${[0,1,2].map((OB=>Math.round(Math.min(255,Math.max(0,BB[OB]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function sY(BB) {
                            return [parseInt(BB.slice(1, 3), 16), parseInt(BB.slice(3, 5), 16), parseInt(BB.slice(5, 7), 16)]
                          }

                          function xY(BB) {
                            let {
                              label: OB,
                              min: GB,
                              max: YB,
                              step: DB,
                              low: QB,
                              high: oB,
                              onChange: jB
                            } = BB;
                            return (0, pB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pB.jsx)("span", {
                                  children: OB
                                }), (0, pB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: QB === oB ? QB : `${QB}\u2013${oB}`
                                })]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, pB.jsx)("input", {
                                  type: "range",
                                  min: GB,
                                  max: YB,
                                  step: DB,
                                  value: Math.min(YB, QB),
                                  "aria-label": `Minimum ${OB.toLowerCase()}`,
                                  onChange: BB => {
                                    const OB = Number(BB.target.value);
                                    jB(OB, Math.max(OB, oB))
                                  }
                                }), (0, pB.jsx)("input", {
                                  type: "range",
                                  min: GB,
                                  max: YB,
                                  step: DB,
                                  value: Math.min(YB, oB),
                                  "aria-label": `Maximum ${OB.toLowerCase()}`,
                                  onChange: BB => {
                                    const OB = Number(BB.target.value);
                                    jB(Math.min(OB, QB), OB)
                                  }
                                })]
                              })]
                            })
                          }

                          function tY(BB) {
                            let {
                              label: OB,
                              min: GB,
                              max: YB,
                              step: DB,
                              value: QB,
                              onChange: oB,
                              format: jB = String
                            } = BB;
                            return (0, pB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pB.jsx)("span", {
                                  children: OB
                                }), (0, pB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: jB(QB)
                                })]
                              }), (0, pB.jsx)("input", {
                                type: "range",
                                min: GB,
                                max: YB,
                                step: DB,
                                value: Math.min(YB, Math.max(GB, QB)),
                                "aria-label": OB,
                                onChange: BB => {
                                  oB(Number(BB.target.value))
                                }
                              })]
                            })
                          }

                          function BD(BB) {
                            let {
                              opts: OB,
                              onChange: GB
                            } = BB;
                            const YB = OB.colorGradients;
                            if (!aG(YB)) return (0, pB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pB.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, pB.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, pB.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: YB.map(((BB, OB) => (0, pB.jsx)("input", {
                                  type: "color",
                                  value: vY(BB.color),
                                  "aria-label": `Colour ${OB+1}`,
                                  onChange: BB => {
                                    const DB = [...YB];
                                    DB[OB] = {
                                      color: sY(BB.target.value)
                                    }, GB(DB)
                                  }
                                }, OB)))
                              })]
                            });
                            const DB = (BB, OB) => {
                              const DB = [...YB];
                              DB[BB] = OB, GB(DB)
                            };
                            return (0, pB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, pB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, pB.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, pB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), YB.map(((BB, OB) => {
                                var GB;
                                const YB = null !== (GB = BB.maxColor) && void 0 !== GB ? GB : BB.minColor;
                                return (0, pB.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, pB.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * BB.timeFraction), "%"]
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${vY(BB.minColor)}, ${vY(YB)})`
                                    }
                                  }), (0, pB.jsx)("input", {
                                    type: "color",
                                    value: vY(BB.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: GB => {
                                      DB(OB, {
                                        ...BB,
                                        minColor: [...sY(GB.target.value), BB.minColor[3]]
                                      })
                                    }
                                  }), (0, pB.jsx)("input", {
                                    type: "color",
                                    value: vY(YB),
                                    "aria-label": `Maximum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: GB => {
                                      DB(OB, {
                                        ...BB,
                                        maxColor: [...sY(GB.target.value), YB[3]]
                                      })
                                    }
                                  })]
                                }, OB)
                              }))]
                            })
                          }
                          const OD = [-.5, -.5, -.5],
                            GD = [.5, .5, .5],
                            YD = [0, 1, 2, 3, 4, 5, 6, 7].map((BB => [1 & BB ? GD[0] : OD[0], 2 & BB ? GD[1] : OD[1], 4 & BB ? GD[2] : OD[2]]));class DD {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(BB, OB, GB, YB) {
                              const DB = Math.round(31 * OB),
                                QB = Math.round(31 * GB),
                                oB = Math.round(31 * YB),
                                jB = `${DB}|${QB}|${oB}`;
                              let yB = this.tints.get(BB);
                              (!yB || yB.size > 2e3) && (yB = new Map, this.tints.set(BB, yB));
                              let JB = yB.get(jB);
                              if (JB) return JB;
                              JB = document.createElement("canvas"), JB.width = BB.naturalWidth || 16, JB.height = BB.naturalHeight || 16;
                              const MB = JB.getContext("2d");
                              return MB ? (MB.imageSmoothingEnabled = !1, MB.drawImage(BB, 0, 0, JB.width, JB.height), MB.globalCompositeOperation = "multiply", MB.fillStyle = `rgb(${DB/31*255}, ${QB/31*255}, ${oB/31*255})`, MB.fillRect(0, 0, JB.width, JB.height), MB.globalCompositeOperation = "destination-in", MB.drawImage(BB, 0, 0, JB.width, JB.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), yB.set(jB, JB), JB
                            }
                          }

                          function QD(BB) {
                            let {
                              opts: OB,
                              textureUrl: GB,
                              burst: DB,
                              paused: QB
                            } = BB;
                            const oB = (0, YB.useRef)(null),
                              jB = (0, YB.useRef)(OB);
                            jB.current = OB;
                            const yB = (0, YB.useRef)(QB);
                            yB.current = QB;
                            const JB = (0, YB.useRef)(null),
                              MB = (0, YB.useRef)(null),
                              PB = (0, YB.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(BB) {
                                let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const GB = [-.5, -.5, -.5],
                                  YB = [.5, .5, .5];
                                let DB = .5;
                                for (let QB = 0; QB < 40; QB++) {
                                  const QB = TG(BB, GB, YB, OB),
                                    oB = Math.max(QB.life / 30, .001);
                                  for (; HG(QB, BB.gravity, oB);) DB = Math.max(DB, Math.hypot(QB.pos[0], QB.pos[1], QB.pos[2]) + QB.size / 2)
                                }
                                return DB
                              }(OB)))), [OB]),
                              zB = (0, YB.useRef)(PB);
                            return zB.current = PB, (0, YB.useEffect)((() => {
                              if (JB.current = null, !GB) return;
                              const BB = new Image;
                              let OB = !1;
                              return BB.onload = () => {
                                OB || (JB.current = BB)
                              }, BB.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${GB}`)
                              }, BB.src = GB, () => {
                                OB = !0
                              }
                            }), [GB]), (0, YB.useEffect)((() => {
                              var BB;
                              null === (BB = MB.current) || void 0 === BB || BB.call(MB)
                            }), [OB, DB]), (0, YB.useEffect)((() => {
                              const BB = oB.current,
                                OB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
                              if (!BB || !OB) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const GB = new DD;
                              let YB = [],
                                DB = 0,
                                QB = -.7,
                                PB = zB.current,
                                lB = performance.now(),
                                pB = 0,
                                qB = !0,
                                ZB = null;
                              const NB = () => {
                                const BB = jB.current,
                                  OB = Math.min(400, Math.max(0, Math.ceil(BB.manualEmitCount)));
                                YB = [];
                                for (let GB = 0; GB < OB; GB++) YB.push(TG(BB, OD, GD, Math.random));
                                DB = 0
                              };
                              MB.current = NB, NB();
                              const RB = oB => {
                                pB = requestAnimationFrame(RB);
                                const MB = Math.min(.05, (oB - lB) / 1e3);
                                if (lB = oB, !qB) return;
                                const WB = window.devicePixelRatio || 1,
                                  AB = Math.round(BB.clientWidth * WB),
                                  VB = Math.round(BB.clientHeight * WB);
                                if (0 === AB || 0 === VB) return;
                                BB.width === AB && BB.height === VB || (BB.width = AB, BB.height = VB);
                                const SB = jB.current;
                                null === ZB && (QB += .18 * MB), PB += (zB.current - PB) * Math.min(1, 4 * MB);
                                const nB = .6 * MB;
                                YB = YB.filter((BB => HG(BB, SB.gravity, nB))), 0 !== YB.length || yB.current || (DB += MB, DB > .6 && NB());
                                const UB = function(BB, OB, GB, YB) {
                                  const DB = 3.2 * YB,
                                    QB = .44 * Math.min(BB, OB) * DB / YB,
                                    oB = Math.cos(GB),
                                    jB = Math.sin(GB),
                                    yB = Math.cos(.42),
                                    JB = Math.sin(.42);
                                  return (GB, YB, MB) => {
                                    const PB = GB * jB + MB * oB,
                                      zB = DB - (YB * JB + PB * yB);
                                    if (zB < .05) return null;
                                    const lB = QB / zB;
                                    return {
                                      x: BB / 2 + (GB * oB - MB * jB) * lB,
                                      y: OB / 2 - (YB * yB - PB * JB) * lB,
                                      scale: lB,
                                      depth: zB
                                    }
                                  }
                                }(AB, VB, QB, PB);
                                ! function(BB, OB, GB, YB, DB) {
                                  const QB = BB.createLinearGradient(0, 0, 0, GB);
                                  QB.addColorStop(0, "#23262d"), QB.addColorStop(1, "#16181c"), BB.globalCompositeOperation = "source-over", BB.globalAlpha = 1, BB.fillStyle = QB, BB.fillRect(0, 0, OB, GB);
                                  const oB = (OB, GB) => {
                                      const DB = YB(OB[0], OB[1], OB[2]),
                                        QB = YB(GB[0], GB[1], GB[2]);
                                      DB && QB && (BB.beginPath(), BB.moveTo(DB.x, DB.y), BB.lineTo(QB.x, QB.y), BB.stroke())
                                    },
                                    jB = Math.ceil(DB) + 1,
                                    yB = OD[1];
                                  BB.lineWidth = 1, BB.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let JB = -jB; JB <= jB; JB++) oB([JB + .5, yB, .5 - jB], [JB + .5, yB, jB + .5]), oB([.5 - jB, yB, JB + .5], [jB + .5, yB, JB + .5]);
                                  BB.strokeStyle = "rgba(255, 255, 255, 0.28)", BB.setLineDash([4, 4]);
                                  for (const JB of YD)
                                    for (const BB of YD) {
                                      const OB = [0, 1, 2].filter((OB => JB[OB] !== BB[OB]));
                                      1 === OB.length && JB[OB[0]] < BB[OB[0]] && oB(JB, BB)
                                    }
                                  BB.setLineDash([])
                                }(OB, AB, VB, UB, PB);
                                const fB = JB.current,
                                  kB = YB.map((BB => ({
                                    particle: BB,
                                    at: UB(BB.pos[0], BB.pos[1], BB.pos[2])
                                  }))).filter((BB => null !== BB.at)).sort(((BB, OB) => OB.at.depth - BB.at.depth));
                                OB.imageSmoothingEnabled = !1;
                                for (const BB of function(BB) {
                                    switch (BB) {
                                      case XG.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case XG.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case XG.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case XG.f.MultiplyAdd:
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
                                  }(SB.blendMode)) {
                                  OB.globalCompositeOperation = BB.operation;
                                  for (const {
                                      particle: YB,
                                      at: DB
                                    }
                                    of kB) {
                                    const [QB, oB, jB, yB] = CG(YB), JB = Math.max(1, YB.size * DB.scale);
                                    OB.globalAlpha = BB.usesAlpha ? Math.min(1, Math.max(0, yB)) : 1, fB ? OB.drawImage(GB.get(fB, QB, oB, jB), DB.x - JB / 2, DB.y - JB / 2, JB, JB) : (OB.fillStyle = `rgb(${255*QB}, ${255*oB}, ${255*jB})`, OB.fillRect(DB.x - JB / 2, DB.y - JB / 2, JB, JB))
                                  }
                                }
                                OB.globalCompositeOperation = "source-over", OB.globalAlpha = 1
                              };
                              pB = requestAnimationFrame(RB);
                              const WB = new IntersectionObserver((BB => {
                                let [OB] = BB;
                                qB = OB.isIntersecting
                              }));
                              WB.observe(BB);
                              const AB = OB => {
                                  ZB = OB.clientX, BB.setPointerCapture(OB.pointerId)
                                },
                                VB = BB => {
                                  null !== ZB && (QB += .01 * (BB.clientX - ZB), ZB = BB.clientX)
                                },
                                SB = () => {
                                  ZB = null
                                };
                              return BB.addEventListener("pointerdown", AB), BB.addEventListener("pointermove", VB), BB.addEventListener("pointerup", SB), BB.addEventListener("pointercancel", SB), () => {
                                cancelAnimationFrame(pB), WB.disconnect(), MB.current = null, BB.removeEventListener("pointerdown", AB), BB.removeEventListener("pointermove", VB), BB.removeEventListener("pointerup", SB), BB.removeEventListener("pointercancel", SB)
                              }
                            }), []), (0, pB.jsx)("canvas", {
                              ref: oB,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${OB.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const oD = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            jD = [{
                              mode: XG.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: XG.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: XG.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: XG.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: XG.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            yD = (0, YB.forwardRef)((function(BB, OB) {
                              var GB, DB;
                              let {
                                textures: oB
                              } = BB;
                              const jB = WY(),
                                yB = (0, YB.useRef)(null),
                                [JB, MB] = (0, YB.useState)(EG),
                                [PB, zB] = (0, YB.useState)("example"),
                                [lB, qB] = (0, YB.useState)(0),
                                [NB, RB] = (0, YB.useState)(!1),
                                AB = BB => {
                                  const OB = "example" === BB ? EG : wG(BB);
                                  OB && (MB(OB), zB(BB))
                                };
                              (0, YB.useImperativeHandle)(OB, (() => ({
                                preview: BB => {
                                  var OB;
                                  AB(BB), null === (OB = yB.current) || void 0 === OB || OB.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const VB = BB => {
                                  MB({
                                    ...JB,
                                    ...BB
                                  }), zB(null)
                                },
                                SB = function(BB, OB) {
                                  if (null !== OB) return `${tG}    presetId: "${OB}",\n${BY}\n})`;
                                  const GB = BB.velocityGradients.map((BB => `        {\n            timeFraction: ${vG(BB.timeFraction)},\n            factor: ${vG(BB.factor)},\n            factor2: ${vG(BB.factor2)},\n        },`)),
                                    YB = [`    dir1: ${sG(BB.dir1)},`, `    dir2: ${sG(BB.dir2)},`, BY, `    texture: "${BB.texture}",`, `    minLifeTime: ${vG(BB.minLifeTime)},`, `    maxLifeTime: ${vG(BB.maxLifeTime)},`, `    minEmitPower: ${vG(BB.minEmitPower)},`, `    maxEmitPower: ${vG(BB.maxEmitPower)},`, `    minSize: ${vG(BB.minSize)},`, `    maxSize: ${vG(BB.maxSize)},`, `    manualEmitCount: ${vG(BB.manualEmitCount)},`, `    gravity: ${sG(BB.gravity)},`, `    colorGradients: ${xG(BB.colorGradients,"    ")},`, `    velocityGradients: ${GB.length>0?`[\n${GB.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${vG(BB.blendMode)},`];
                                  return void 0 !== BB.hideDist && YB.push(`    hideDist: ${vG(BB.hideDist)},`), `${tG}${YB.join("\n")}\n})`
                                }(JB, null === PB || "example" === PB ? null : PB),
                                UB = oB.includes(JB.texture) ? oB : [...oB, JB.texture];
                              return (0, pB.jsxs)("section", {
                                ref: yB,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, pB.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, pB.jsxs)("div", {
                                    children: [(0, pB.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, pB.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, pB.jsx)(WB, {
                                    text: SB,
                                    label: "Copy code"
                                  })]
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, pB.jsx)("button", {
                                    type: "button",
                                    className: QB()("DocsVariantChip", {
                                      Active: "example" === PB
                                    }),
                                    onClick: () => {
                                      AB("example")
                                    },
                                    children: "Example"
                                  }), oD.filter((BB => null !== wG(BB))).map((BB => (0, pB.jsx)("button", {
                                    type: "button",
                                    className: QB()("DocsVariantChip", {
                                      Active: PB === BB
                                    }),
                                    onClick: () => {
                                      AB(BB)
                                    },
                                    children: BB
                                  }, BB))), (0, pB.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== PB && void 0 !== PB ? PB : "custom",
                                    "aria-label": "Preset",
                                    onChange: BB => {
                                      AB(BB.target.value)
                                    },
                                    children: [(0, pB.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === PB && (0, pB.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), rG.e.map((BB => (0, pB.jsx)("option", {
                                      value: BB,
                                      children: BB
                                    }, BB)))]
                                  })]
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, pB.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, pB.jsx)(QD, {
                                      opts: JB,
                                      textureUrl: null !== (GB = null === jB || void 0 === jB ? void 0 : jB.getParticleTextureUrl(JB.texture)) && void 0 !== GB ? GB : null,
                                      burst: lB,
                                      paused: NB
                                    }), (0, pB.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, pB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          qB(lB + 1)
                                        },
                                        children: [(0, pB.jsx)(ZB, {
                                          name: "replay"
                                        }), (0, pB.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, pB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": NB,
                                        onClick: () => {
                                          RB(!NB)
                                        },
                                        children: [(0, pB.jsx)(ZB, {
                                          name: NB ? "play" : "pause"
                                        }), (0, pB.jsx)("span", {
                                          children: NB ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, pB.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, pB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, pB.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, pB.jsx)("span", {
                                          children: "Texture"
                                        }), (0, pB.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: JB.texture
                                        })]
                                      }), (0, pB.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: UB.map((BB => {
                                          var OB;
                                          const GB = null !== (OB = null === jB || void 0 === jB ? void 0 : jB.getParticleTextureUrl(BB)) && void 0 !== OB ? OB : null;
                                          return (0, pB.jsx)("button", {
                                            type: "button",
                                            className: QB()("DocsParticleTexture", {
                                              Active: JB.texture === BB
                                            }),
                                            title: BB,
                                            "aria-label": BB,
                                            "aria-pressed": JB.texture === BB,
                                            onClick: () => {
                                              VB({
                                                texture: BB
                                              })
                                            },
                                            children: GB ? (0, pB.jsx)("img", {
                                              src: GB,
                                              alt: ""
                                            }) : (0, pB.jsx)(ZB, {
                                              name: "image"
                                            })
                                          }, BB)
                                        }))
                                      })]
                                    }), (0, pB.jsx)(tY, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: JB.manualEmitCount,
                                      onChange: BB => {
                                        VB({
                                          manualEmitCount: BB
                                        })
                                      }
                                    }), (0, pB.jsx)(xY, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: JB.minLifeTime,
                                      high: JB.maxLifeTime,
                                      onChange: (BB, OB) => {
                                        VB({
                                          minLifeTime: BB,
                                          maxLifeTime: OB
                                        })
                                      }
                                    }), (0, pB.jsx)(xY, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: JB.minEmitPower,
                                      high: JB.maxEmitPower,
                                      onChange: (BB, OB) => {
                                        VB({
                                          minEmitPower: BB,
                                          maxEmitPower: OB
                                        })
                                      }
                                    }), (0, pB.jsx)(xY, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: JB.minSize,
                                      high: JB.maxSize,
                                      onChange: (BB, OB) => {
                                        VB({
                                          minSize: BB,
                                          maxSize: OB
                                        })
                                      }
                                    }), (0, pB.jsx)(tY, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (DB = JB.gravity[1]) && void 0 !== DB ? DB : 0,
                                      onChange: BB => {
                                        var OB, GB;
                                        VB({
                                          gravity: [null !== (OB = JB.gravity[0]) && void 0 !== OB ? OB : 0, BB, null !== (GB = JB.gravity[2]) && void 0 !== GB ? GB : 0]
                                        })
                                      }
                                    }), (0, pB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, pB.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, pB.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, pB.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: JB.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: BB => {
                                          VB({
                                            blendMode: Number(BB.target.value)
                                          })
                                        },
                                        children: jD.map((BB => {
                                          let {
                                            mode: OB,
                                            label: GB
                                          } = BB;
                                          return (0, pB.jsx)("option", {
                                            value: OB,
                                            children: GB
                                          }, OB)
                                        }))
                                      })]
                                    }), (0, pB.jsx)(BD, {
                                      opts: JB,
                                      onChange: BB => {
                                        VB({
                                          colorGradients: BB
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, pB.jsx)(nB, {
                                  code: SB,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var JD = GB(4893),
                            MD = GB(2e3);

                          function PD(BB, OB) {
                            return BB ? JD.d.includes(OB) ? BB.getIngameIconUrl(OB) : BB.getItemIconUrl(OB) : null
                          }

                          function zD(BB) {
                            var OB, GB, YB;
                            let {
                              part: DB,
                              assets: oB
                            } = BB;
                            const jB = PD(oB, DB.icon),
                              yB = null !== (OB = null === (GB = DB.style) || void 0 === GB ? void 0 : GB.fontSize) && void 0 !== OB ? OB : "1.8em",
                              JB = (0, rO.cc)(DB.style);
                            return (0, pB.jsxs)("span", {
                              className: QB()("DocsBloxdTextIcon", {
                                Missing: !jB
                              }),
                              style: {
                                width: yB,
                                height: yB,
                                opacity: null === (YB = DB.style) || void 0 === YB ? void 0 : YB.opacity
                              },
                              title: jB ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [jB && JB && (0, pB.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: JB,
                                  maskImage: `url("${jB}")`,
                                  WebkitMaskImage: `url("${jB}")`
                                }
                              }), jB ? (0, pB.jsx)("img", {
                                src: jB,
                                alt: "",
                                className: QB()({
                                  Tinted: JB
                                })
                              }) : (0, pB.jsx)(ZB, {
                                name: "image"
                              })]
                            })
                          }

                          function lD(BB) {
                            let {
                              parts: OB,
                              className: GB
                            } = BB;
                            const YB = WY(),
                              DB = [];
                            let oB = [];
                            const jB = BB => {
                              oB.length > 0 && (DB.push((0, pB.jsx)(MD.b, {
                                text: oB
                              }, `run-${BB}`)), oB = [])
                            };
                            return OB.forEach(((BB, OB) => {
                              "icon" !== hO(BB) || wO(BB.icon) ? oB.push(BB) : (jB(OB), DB.push((0, pB.jsx)(zD, {
                                part: BB,
                                assets: YB
                              }, `icon-${OB}`)))
                            })), jB(OB.length), (0, pB.jsx)("div", {
                              className: QB()("DocsStyledTextPreview", GB),
                              children: DB
                            })
                          }
                          const pD = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let qD = null;

                          function ZD(BB) {
                            if (qD ??= document.createElement("canvas").getContext("2d"), !qD) return "#000000";
                            qD.fillStyle = "#000000", qD.fillStyle = BB;
                            const OB = qD.fillStyle;
                            return OB.startsWith("#") ? OB : "#000000"
                          }

                          function ND(BB) {
                            let {
                              value: OB,
                              label: GB,
                              onChange: YB
                            } = BB;
                            return (0, pB.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, pB.jsx)("input", {
                                type: "color",
                                value: ZD(OB),
                                "aria-label": `${GB} picker`,
                                onChange: BB => {
                                  YB(BB.target.value)
                                }
                              }), (0, pB.jsx)("input", {
                                type: "text",
                                value: OB,
                                placeholder: "#ffb914 or gold",
                                "aria-label": GB,
                                spellCheck: !1,
                                onChange: BB => {
                                  YB(BB.target.value)
                                }
                              })]
                            })
                          }

                          function RD(BB) {
                            let {
                              value: OB,
                              fontAwesomeIcons: GB,
                              onChange: DB
                            } = BB;
                            const oB = WY(),
                              [jB, yB] = (0, YB.useState)(wO(OB) ? "fontAwesome" : "bloxd"),
                              [JB, MB] = (0, YB.useState)(""),
                              PB = JB.trim().toLowerCase(),
                              zB = "bloxd" === jB ? JD.d : GB,
                              lB = PB ? zB.filter((BB => BB.toLowerCase().includes(PB))) : zB;
                            return (0, pB.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, pB.jsx)("input", {
                                type: "text",
                                value: OB,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: BB => {
                                  DB(BB.target.value)
                                }
                              }), (0, pB.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, pB.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((BB => (0, pB.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": jB === BB,
                                    className: QB()("DocsVariantChip", {
                                      Active: jB === BB
                                    }),
                                    onClick: () => {
                                      yB(BB)
                                    },
                                    children: "bloxd" === BB ? `Bloxd icons (${JD.d.length})` : `Font Awesome (${GB.length})`
                                  }, BB))), (0, pB.jsx)("input", {
                                    type: "search",
                                    value: JB,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: BB => {
                                      MB(BB.target.value)
                                    }
                                  })
                                ]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [lB.map((BB => {
                                  const GB = "bloxd" === jB ? PD(oB, BB) : null;
                                  return (0, pB.jsx)("button", {
                                    type: "button",
                                    title: BB,
                                    "aria-label": BB,
                                    "aria-pressed": BB === OB,
                                    className: QB()("DocsIconPickerOption", {
                                      Active: BB === OB
                                    }),
                                    onClick: () => {
                                      DB(BB)
                                    },
                                    children: "fontAwesome" === jB ? (0, pB.jsx)(AG.b, {
                                      name: BB
                                    }) : GB ? (0, pB.jsx)("img", {
                                      src: GB,
                                      alt: ""
                                    }) : (0, pB.jsx)(ZB, {
                                      name: "image"
                                    })
                                  }, BB)
                                })), 0 === lB.length && (0, pB.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", JB, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function WD(BB) {
                            let {
                              property: OB,
                              value: GB,
                              fontAwesomeIcons: YB,
                              onChange: DB
                            } = BB;
                            const {
                              field: QB,
                              label: oB
                            } = OB, jB = BB => "" !== BB || OB.isRequired ? BB : void 0;
                            switch (QB.kind) {
                              case "text":
                                return QB.multiline ? (0, pB.jsx)("textarea", {
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  rows: 2,
                                  "aria-label": oB,
                                  onChange: BB => {
                                    DB(BB.target.value)
                                  }
                                }) : (0, pB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  "aria-label": oB,
                                  onChange: BB => {
                                    DB(jB(BB.target.value))
                                  }
                                });
                              case "size":
                                return (0, pB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  placeholder: OB.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": oB,
                                  spellCheck: !1,
                                  onChange: BB => {
                                    DB(jB(BB.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, pB.jsx)(ND, {
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  label: oB,
                                  onChange: BB => {
                                    DB(jB(BB))
                                  }
                                });
                              case "colours": {
                                const BB = Array.isArray(GB) ? GB : [],
                                  OB = BB => {
                                    DB(BB.length > 0 ? BB : void 0)
                                  };
                                return (0, pB.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [BB.map(((GB, YB) => (0, pB.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, pB.jsx)(ND, {
                                      value: GB,
                                      label: `${oB} ${YB+1}`,
                                      onChange: GB => {
                                        OB(BB.map(((BB, OB) => OB === YB ? GB : BB)))
                                      }
                                    }), (0, pB.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${YB+1}`,
                                      onClick: () => {
                                        OB(BB.filter(((BB, OB) => OB !== YB)))
                                      },
                                      children: (0, pB.jsx)(ZB, {
                                        name: "cross"
                                      })
                                    })]
                                  }, YB))), (0, pB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var GB;
                                      OB([...BB, null !== (GB = BB.at(-1)) && void 0 !== GB ? GB : "#ffffff"])
                                    },
                                    children: [(0, pB.jsx)(ZB, {
                                      name: "plus"
                                    }), 0 === BB.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var yB;
                                const BB = "number" === typeof GB ? GB : Number(null !== (yB = OB.defaultText) && void 0 !== yB ? yB : 0);
                                return (0, pB.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, pB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: BB,
                                    "aria-label": oB,
                                    onChange: BB => {
                                      DB(Number(BB.target.value))
                                    }
                                  }), (0, pB.jsx)("output", {
                                    children: BB.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, pB.jsxs)("select", {
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  "aria-label": oB,
                                  onChange: BB => {
                                    DB(jB(BB.target.value))
                                  },
                                  children: [!OB.isRequired && (0, pB.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", OB.defaultText, ")"]
                                  }), QB.options.map((BB => (0, pB.jsx)("option", {
                                    value: BB,
                                    children: BB
                                  }, BB)))]
                                });
                              case "icon":
                                return (0, pB.jsx)(RD, {
                                  value: String(null !== GB && void 0 !== GB ? GB : ""),
                                  fontAwesomeIcons: YB,
                                  onChange: DB
                                })
                            }
                          }

                          function AD(BB) {
                            let OB;
                            try {
                              OB = JSON.parse(BB)
                            } catch (GB) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${GB.message}`
                              }
                            }
                            return GG(OB) ? {
                              part: OB,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function VD(BB) {
                            let {
                              parts: OB,
                              index: GB,
                              fontAwesomeIcons: DB,
                              onChange: QB,
                              Qm: oB,
                              onClose: jB
                            } = BB;
                            const yB = (0, YB.useContext)(pO),
                              MB = (0, YB.useRef)(null),
                              PB = OB[GB],
                              zB = hO(PB),
                              [lB, qB] = (0, YB.useState)((() => JSON.stringify(PB, null, 2))),
                              NB = (0, YB.useMemo)((() => "other" === zB ? AD(lB).error : null), [zB, lB]);
                            (0, YB.useEffect)((() => {
                              var BB;
                              null === (BB = MB.current) || void 0 === BB || BB.focus()
                            }), []);
                            const RB = (0, pB.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && jB()
                              },
                              children: (0, pB.jsxs)("div", {
                                ref: MB,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${GB+1}: ${EO[zB]}`,
                                tabIndex: -1,
                                onKeyDown: BB => {
                                  "Escape" === BB.key ? (BB.stopPropagation(), jB()) : "Tab" === BB.key && MB.current && function(BB, OB) {
                                    const GB = Array.from(BB.querySelectorAll(KO)),
                                      YB = GB[0],
                                      DB = GB.at(-1);
                                    if (!YB || !DB) return;
                                    const QB = document.activeElement;
                                    !OB.shiftKey || QB !== YB && QB !== BB ? OB.shiftKey || QB !== DB || (OB.preventDefault(), YB.focus()) : (OB.preventDefault(), DB.focus())
                                  }(MB.current, BB)
                                },
                                children: [(0, pB.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, pB.jsxs)("div", {
                                    children: [(0, pB.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", GB + 1]
                                    }), (0, pB.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: EO[zB]
                                    })]
                                  }), (0, pB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: jB,
                                    children: (0, pB.jsx)(ZB, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, pB.jsx)(lD, {
                                  parts: OB,
                                  className: "DocsTextDialogPreview"
                                }), (0, pB.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === zB ? (0, pB.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, pB.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, pB.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: lB,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: BB => {
                                        qB(BB.target.value);
                                        const OB = AD(BB.target.value);
                                        null !== OB.part && QB(OB.part)
                                      }
                                    }), NB && (0, pB.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: NB
                                    })]
                                  }) : eO[zB].map((BB => {
                                    const OB = bO(PB, BB.path),
                                      GB = BB.isRequired ? JSON.stringify(HO(PB, BB.path)) === JSON.stringify(PB) : void 0 === OB;
                                    return (0, pB.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, pB.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, pB.jsx)("span", {
                                          children: BB.label
                                        }), (0, pB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: GB,
                                          "aria-label": `Reset ${BB.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            QB(HO(PB, BB.path))
                                          },
                                          children: [(0, pB.jsx)(ZB, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, pB.jsx)(WD, {
                                        property: BB,
                                        value: OB,
                                        fontAwesomeIcons: DB,
                                        onChange: OB => {
                                          QB(CO(PB, BB.path, OB))
                                        }
                                      }), !BB.isRequired && (0, pB.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", BB.defaultText]
                                      })]
                                    }, BB.path.join("."))
                                  }))
                                }), (0, pB.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, pB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: oB,
                                    children: [(0, pB.jsx)(ZB, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, pB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: jB,
                                    children: "Done"
                                  })]
                                }), (0, pB.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: pD.map((BB => (0, pB.jsx)("option", {
                                    value: BB
                                  }, BB)))
                                })]
                              })
                            });
                            return yB ? (0, JB.createPortal)(RB, yB) : RB
                          }
                          const SD = [{
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
                            nD = Object.keys(cO);

                          function UD(BB) {
                            let {
                              fontAwesomeIcons: OB
                            } = BB;
                            const [GB, DB] = (0, YB.useState)(SD[0].parts), [oB, jB] = (0, YB.useState)((() => tO(SD[0].parts))), [yB, JB] = (0, YB.useState)(null), [MB, PB] = (0, YB.useState)(!1), [zB, lB] = (0, YB.useState)(null), [qB, NB] = (0, YB.useState)(!1), [RB, WB] = (0, YB.useState)(null), AB = (0, YB.useRef)(null), VB = tO(GB);
                            (0, YB.useLayoutEffect)((() => {
                              var BB;
                              if (!RB) return;
                              const OB = BB => {
                                  var OB;
                                  return null === (OB = AB.current) || void 0 === OB ? void 0 : OB.querySelector(`[data-focus-key="${BB}"]`)
                                },
                                GB = OB(RB.key);
                              null === (BB = GB && !GB.disabled ? GB : OB(RB.fallback)) || void 0 === BB || BB.focus(), WB(null)
                            }), [RB]);
                            const SB = BB => {
                                DB(BB), jB(tO(BB)), JB(null)
                              },
                              UB = BB => {
                                SB(GB.filter(((OB, GB) => GB !== BB))), WB({
                                  key: `edit-${Math.min(BB,GB.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              fB = (BB, OB) => {
                                const YB = [...GB],
                                  [DB] = YB.splice(BB, 1);
                                YB.splice(BB + OB, 0, DB), SB(YB);
                                WB({
                                  key: `${OB<0?"up":"down"}-${BB+OB}`,
                                  fallback: `edit-${BB+OB}`
                                })
                              };
                            return (0, pB.jsxs)("section", {
                              ref: AB,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, pB.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, pB.jsxs)("div", {
                                  children: [(0, pB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, pB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, pB.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: SD.map((BB => (0, pB.jsx)("button", {
                                  type: "button",
                                  className: QB()("DocsVariantChip", {
                                    Active: VB === tO(BB.parts)
                                  }),
                                  onClick: () => {
                                    SB(BB.parts)
                                  },
                                  children: BB.label
                                }, BB.label)))
                              }), (0, pB.jsx)(lD, {
                                parts: GB,
                                className: "DocsTextEditorPreview"
                              }), (0, pB.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, pB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, pB.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, pB.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [GB.map(((BB, OB) => {
                                      const YB = hO(BB);
                                      return (0, pB.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, pB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${OB}`,
                                          "aria-label": `Edit part ${OB+1}, ${EO[YB]}`,
                                          onClick: () => {
                                            lB(OB)
                                          },
                                          children: [(0, pB.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: EO[YB]
                                          }), (0, pB.jsx)(lD, {
                                            parts: [BB],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== YB && (0, pB.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: vO(BB)
                                          })]
                                        }), (0, pB.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, pB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${OB+1} up`,
                                            "data-focus-key": `up-${OB}`,
                                            disabled: 0 === OB,
                                            onClick: () => {
                                              fB(OB, -1)
                                            },
                                            children: (0, pB.jsx)(ZB, {
                                              name: "chevron-up"
                                            })
                                          }), (0, pB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${OB+1} down`,
                                            "data-focus-key": `down-${OB}`,
                                            disabled: OB === GB.length - 1,
                                            onClick: () => {
                                              fB(OB, 1)
                                            },
                                            children: (0, pB.jsx)(ZB, {
                                              name: "chevron-down"
                                            })
                                          }), (0, pB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${OB+1}`,
                                            onClick: () => {
                                              UB(OB)
                                            },
                                            children: (0, pB.jsx)(ZB, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, OB)
                                    })), 0 === GB.length && (0, pB.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, pB.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: BB => {
                                      "Escape" === BB.key && qB && (BB.stopPropagation(), NB(!1), WB({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, pB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": qB,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        NB(!qB)
                                      },
                                      children: [(0, pB.jsx)(ZB, {
                                        name: "plus"
                                      }), "Add a part", (0, pB.jsx)(ZB, {
                                        name: qB ? "chevron-up" : "chevron-down"
                                      })]
                                    }), qB && (0, pB.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: nD.map((BB => (0, pB.jsx)("li", {
                                        children: (0, pB.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (BB => {
                                              SB([...GB, cO[BB]]), NB(!1), lB(GB.length)
                                            })(BB)
                                          },
                                          children: EO[BB]
                                        })
                                      }, BB)))
                                    })]
                                  })]
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, pB.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, pB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": MB,
                                      onClick: () => {
                                        PB(!MB)
                                      },
                                      children: [(0, pB.jsx)(ZB, {
                                        name: MB ? "check" : "pencil"
                                      }), MB ? "Done" : "Edit"]
                                    })]
                                  }), MB ? (0, pB.jsxs)(pB.Fragment, {
                                    children: [(0, pB.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: oB,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: BB => {
                                        jB(BB.target.value);
                                        const OB = YG(BB.target.value);
                                        JB(OB.error), OB.parts && DB(OB.parts)
                                      }
                                    }), yB && (0, pB.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: yB
                                    })]
                                  }) : (0, pB.jsx)(nB, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${VB})`
                                  })]
                                })]
                              }), null !== zB && zB < GB.length && (0, pB.jsx)(VD, {
                                parts: GB,
                                index: zB,
                                fontAwesomeIcons: OB,
                                onChange: BB => {
                                  ((BB, OB) => {
                                    SB(GB.map(((GB, YB) => YB === BB ? OB : GB)))
                                  })(zB, BB)
                                },
                                Qm: () => {
                                  UB(zB), lB(null)
                                },
                                onClose: () => {
                                  lB(null), WB({
                                    key: `edit-${zB}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var fD = GB(5345),
                            kD = GB(5326),
                            dD = GB(5337),
                            KD = GB(5349);
                          const uD = 40,
                            mD = 800,
                            ID = 150,
                            FD = 8e3,
                            iD = 2e3;

                          function LD(BB, OB) {
                            return 12 * Math.log2(OB / BB)
                          }

                          function gD(BB, OB) {
                            return Math.round(BB * 2 ** (OB / 12) * 10) / 10
                          }

                          function rD(BB) {
                            return `${BB} ms`
                          }

                          function XD(BB) {
                            return `${BB} st`
                          }
                          const wD = [{
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

                          function ED(BB) {
                            let {
                              synth: OB,
                              onChange: GB
                            } = BB;
                            const YB = (0, fD.j)(OB);
                            return (0, pB.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, pB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, pB.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, pB.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, pB.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: fD.e.map((BB => (0, pB.jsx)("button", {
                                      type: "button",
                                      className: QB()("DocsVariantChip", {
                                        Active: OB.waveform === BB
                                      }),
                                      "aria-pressed": OB.waveform === BB,
                                      onClick: () => {
                                        GB({
                                          waveform: BB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  })]
                                }), (0, pB.jsx)(tY, {
                                  label: "Pitch",
                                  min: 0,
                                  max: LD(uD, mD),
                                  step: .1,
                                  value: LD(uD, OB.pitchHz),
                                  format: () => `${OB.pitchHz} Hz`,
                                  onChange: BB => {
                                    GB({
                                      pitchHz: gD(uD, BB)
                                    })
                                  }
                                }), (0, pB.jsx)(tY, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: OB.syllableMs,
                                  format: rD,
                                  onChange: BB => {
                                    GB({
                                      syllableMs: BB
                                    })
                                  }
                                }), (0, pB.jsx)(tY, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: OB.volume,
                                  onChange: BB => {
                                    GB({
                                      volume: BB
                                    })
                                  }
                                })]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, pB.jsx)(tY, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: OB.durationMs,
                                  format: rD,
                                  onChange: BB => {
                                    GB({
                                      durationMs: BB
                                    })
                                  }
                                }), (0, pB.jsx)(tY, {
                                  label: "Fade in",
                                  min: 0,
                                  max: YB.durationMs,
                                  step: 1,
                                  value: YB.attackMs,
                                  format: rD,
                                  onChange: BB => {
                                    GB({
                                      attackMs: BB
                                    })
                                  }
                                }), (0, pB.jsx)(tY, {
                                  label: "Fade out",
                                  min: 0,
                                  max: YB.durationMs - YB.attackMs,
                                  step: 1,
                                  value: YB.releaseMs,
                                  format: rD,
                                  onChange: BB => {
                                    GB({
                                      releaseMs: BB
                                    })
                                  }
                                }), (0, pB.jsx)(tY, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: OB.glideSemitones,
                                  format: XD,
                                  onChange: BB => {
                                    GB({
                                      glideSemitones: BB
                                    })
                                  }
                                }), (0, pB.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, pB.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== OB.lowpassHz,
                                    onChange: BB => {
                                      GB({
                                        lowpassHz: BB.target.checked ? iD : null
                                      })
                                    }
                                  }), (0, pB.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== OB.lowpassHz && (0, pB.jsx)(tY, {
                                  label: "Filter",
                                  min: 0,
                                  max: LD(ID, FD),
                                  step: .1,
                                  value: LD(ID, OB.lowpassHz),
                                  format: () => `${OB.lowpassHz} Hz`,
                                  onChange: BB => {
                                    GB({
                                      lowpassHz: gD(ID, BB)
                                    })
                                  }
                                })]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, pB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), wD.map((BB => {
                                  let {
                                    key: YB,
                                    label: DB,
                                    max: QB
                                  } = BB;
                                  return (0, pB.jsx)(tY, {
                                    label: DB,
                                    min: 0,
                                    max: QB,
                                    step: .1,
                                    value: OB.intonation[YB],
                                    format: XD,
                                    onChange: BB => {
                                      GB({
                                        intonation: {
                                          ...OB.intonation,
                                          [YB]: BB
                                        }
                                      })
                                    }
                                  }, YB)
                                }))]
                              })]
                            })
                          }
                          const cD = Object.keys(fD.g),
                            hD = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function aD(BB) {
                            var OB;
                            const GB = JSON.stringify((0, fD.j)(BB));
                            return null !== (OB = cD.find((BB => JSON.stringify((0, fD.j)(fD.g[BB])) === GB))) && void 0 !== OB ? OB : null
                          }

                          function eD(BB) {
                            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof BB || null === BB) return JSON.stringify(BB);
                            return `{\n${Object.entries(BB).map((BB=>{let[GB,YB]=BB;return`${OB}    ${GB}: ${eD(YB,`${OB}    `)},`})).join("\n")}\n${OB}}`
                          }

                          function TD(BB, OB, GB) {
                            const YB = aD(BB),
                              DB = [`    line: ${JSON.stringify(OB)},`];
                            return GB && DB.push(`    speakerName: ${JSON.stringify(GB)},`), DB.push("    voice,"), `const voice = ${YB?JSON.stringify(YB):eD((0,fD.j)(BB))}\n\napi.setClientOption(playerId, "dialogue", {\n${DB.join("\n")}\n})`
                          }
                          const bD = 400,
                            CD = 90;
                          let HD = null;

                          function vD(BB, OB, GB) {
                            return HD ??= new AudioContext, HD.resume(), (0, KD.c)(HD, HD.destination, BB, OB, GB, (() => {}))
                          }

                          function sD() {
                            const [BB, OB] = (0, YB.useState)(fD.g.regular), [GB, DB] = (0, YB.useState)(hD[0]), [oB, jB] = (0, YB.useState)("Innkeeper"), [yB, JB] = (0, YB.useState)(0), MB = MY((BB => BB.volume)), PB = (0, YB.useRef)(null), zB = (0, YB.useRef)(0), lB = (0, YB.useRef)(0), qB = () => {
                              var BB;
                              null === (BB = PB.current) || void 0 === BB || BB.call(PB), PB.current = null
                            };
                            (0, YB.useEffect)((() => () => {
                              var BB;
                              null === (BB = PB.current) || void 0 === BB || BB.call(PB), window.clearTimeout(zB.current)
                            }), []);
                            const NB = (0, YB.useMemo)((() => ({
                                line: GB,
                                speakerName: oB || void 0,
                                voice: BB
                              })), [GB, oB, BB]),
                              RB = (0, YB.useRef)(NB);
                            RB.current = NB;
                            const AB = aD(BB),
                              VB = BB => {
                                window.clearTimeout(zB.current), qB();
                                const {
                                  plan: OB,
                                  synth: GB
                                } = (0, dD.c)(BB);
                                GB && (PB.current = vD(GB, OB.blips, MB)), JB((BB => BB + 1))
                              },
                              SB = TD(BB, GB, oB);
                            return (0, pB.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, pB.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, pB.jsxs)("div", {
                                  children: [(0, pB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, pB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, pB.jsx)(WB, {
                                  text: SB,
                                  label: "Copy code"
                                })]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [cD.map((BB => (0, pB.jsx)("button", {
                                  type: "button",
                                  className: QB()("DocsVariantChip", {
                                    Active: AB === BB
                                  }),
                                  "aria-pressed": AB === BB,
                                  onClick: () => {
                                    (BB => {
                                      const GB = fD.g[BB];
                                      OB(GB), VB({
                                        ...NB,
                                        voice: GB
                                      })
                                    })(BB)
                                  },
                                  children: BB
                                }, BB))), !AB && (0, pB.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, pB.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, pB.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, pB.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, pB.jsx)(kD.e, {
                                      display: NB
                                    }, yB)
                                  }), (0, pB.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: BB => {
                                      BB.preventDefault(), VB(NB)
                                    },
                                    children: [(0, pB.jsx)("input", {
                                      value: GB,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: BB => {
                                        DB(BB.target.value)
                                      }
                                    }), (0, pB.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, pB.jsx)(ZB, {
                                        name: "play"
                                      }), (0, pB.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, pB.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: hD.map((BB => (0, pB.jsx)("button", {
                                      type: "button",
                                      className: QB()("DocsVariantChip", {
                                        Active: GB === BB
                                      }),
                                      onClick: () => {
                                        var OB;
                                        DB(OB = BB), VB({
                                          ...NB,
                                          line: OB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  }), (0, pB.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, pB.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, pB.jsx)("input", {
                                      value: oB,
                                      placeholder: "No name",
                                      onChange: BB => {
                                        jB(BB.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, pB.jsx)(ED, {
                                  synth: BB,
                                  onChange: GB => {
                                    const YB = {
                                      ...BB,
                                      ...GB
                                    };
                                    OB(YB);
                                    const DB = {
                                        ...NB,
                                        voice: YB
                                      },
                                      QB = performance.now();
                                    if (QB - lB.current >= CD) {
                                      lB.current = QB, qB();
                                      const BB = (0, dD.c)(DB).plan.blips[0];
                                      BB && (PB.current = vD((0, fD.j)(YB), [{
                                        ...BB,
                                        atMs: 0
                                      }], MB))
                                    }
                                    window.clearTimeout(zB.current), zB.current = window.setTimeout((() => {
                                      VB(RB.current)
                                    }), bD)
                                  }
                                })]
                              }), (0, pB.jsx)(nB, {
                                code: SB,
                                lang: "ts"
                              })]
                            })
                          }
                          var xD = GB(5366);
                          const tD = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            BQ = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            OQ = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${BQ}`, "g"), xD.p],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, xD.p]
                            ];

                          function GQ(BB) {
                            return `${BB.pageId}#${BB.anchor}`
                          }
                          let YQ, DQ, QQ;

                          function oQ(BB) {
                            const OB = (0, UB.k)(BB),
                              GB = new Set;
                            for (const [, , YB] of OB.matchAll(UB.d)) {
                              const BB = YB.startsWith("#") ? hB(YB) : null,
                                OB = BB ? GQ({
                                  pageId: BB.page.id,
                                  anchor: BB.anchor
                                }) : null;
                              null !== OB && (YQ || (YQ = new Set(gB.flatMap((BB => KB(BB.layout) ? EB(BB).sections.map((OB => GQ({
                                pageId: BB.id,
                                anchor: OB.heading.anchor
                              }))) : [])))), YQ).has(OB) && GB.add(OB)
                            }
                            for (const [, , YB] of OB.matchAll(tD)) {
                              const BB = zO(YB);
                              BB && GB.add(GQ(BB))
                            }
                            return GB
                          }

                          function jQ(BB, OB) {
                            const GB = new Set,
                              YB = function(BB) {
                                return BB.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(BB);
                            for (const [, DB] of YB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) GB.add(DB);
                            for (const [DB, QB] of OQ)
                              for (const [, BB] of(0, xD.f)(YB, DB, QB)) OB.has(BB) && GB.add(BB);
                            return GB
                          }

                          function yQ(BB, OB, GB, YB) {
                            const DB = BB.get(OB);
                            DB ? !YB && DB.some((BB => BB.pageId === GB.pageId)) || DB.push(GB) : BB.set(OB, [GB])
                          }
                          const JQ = /^[A-Za-z_$][\w$]*$/;

                          function MQ(BB) {
                            return JQ.test(BB.name) ? BB.name : "options"
                          }

                          function PQ(BB, OB) {
                            const GB = BB.params.map(MQ).join(", ");
                            return OB ? `${BB.name} = (${GB}) => {\n\t\n}` : `api.${BB.name}(${GB})`
                          }

                          function zQ(BB) {
                            let {
                              method: OB,
                              isCallback: GB
                            } = BB;
                            return (0, pB.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, pB.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [GB ? (0, pB.jsxs)(pB.Fragment, {
                                  children: [(0, pB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: OB.name
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, pB.jsxs)(pB.Fragment, {
                                  children: [(0, pB.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: OB.name
                                  }), (0, pB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), OB.params.map(((BB, GB) => (0, pB.jsxs)(YB.Fragment, {
                                  children: [GB > 0 && (0, pB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, pB.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${OB.name}-${MQ(BB)}`,
                                    children: BB.name
                                  })]
                                }, BB.name))), (0, pB.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: GB ? ") => " : ")"
                                }), GB && !OB.returns && (0, pB.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), OB.returns && OB.returns.type && (0, pB.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!GB && (0, pB.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, pB.jsx)(fO, {
                                  type: OB.returns.type
                                })]
                              })]
                            })
                          }

                          function lQ(BB) {
                            let {
                              title: OB,
                              references: GB
                            } = BB;
                            const DB = (0, YB.useContext)(lO);
                            return (0, pB.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, pB.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: OB
                              }), GB.map((BB => (0, pB.jsx)(oB.d, {
                                to: eB(DB, XB(BB.pageId), BB.anchor),
                                children: BB.label
                              }, `${BB.pageId}#${BB.anchor}`)))]
                            })
                          }

                          function pQ(BB) {
                            var OB, GB;
                            let {
                              pageId: YB,
                              anchor: DB
                            } = BB;
                            const QB = GQ({
                                pageId: YB,
                                anchor: DB
                              }),
                              oB = null !== (OB = function() {
                                if (!QQ) {
                                  QQ = new Map;
                                  const YB = new Set(gB.filter((BB => "callbacks" === BB.layout)).flatMap((BB => EB(BB).sections.map((BB => BB.heading.text)))));
                                  for (const DB of gB)
                                    if ("article" === DB.layout || "snippets" === DB.layout)
                                      for (const QB of (0, UB.t)(EB(DB)))
                                        for (const {
                                            code: oB
                                          }
                                          of(0, UB.l)(QB.blocks))
                                          for (const jB of jQ(oB, YB)) {
                                            const YB = PO().get(jB);
                                            if (YB) {
                                              var BB, OB, GB;
                                              const oB = {
                                                pageId: DB.id,
                                                anchor: null !== (BB = null === (OB = QB.heading) || void 0 === OB ? void 0 : OB.anchor) && void 0 !== BB ? BB : "",
                                                label: null !== (GB = DB.navTitle) && void 0 !== GB ? GB : DB.title
                                              };
                                              yQ(QQ, GQ(YB), oB, !1)
                                            }
                                          }
                                }
                                return QQ
                              }().get(QB)) && void 0 !== OB ? OB : [],
                              jB = null !== (GB = function() {
                                if (!DQ) {
                                  DQ = new Map;
                                  const BB = XB("changelog");
                                  for (const OB of EB(BB).sections) {
                                    const GB = new Set(OB.blocks.flatMap((BB => [...oQ(BB)])));
                                    for (const YB of GB) {
                                      const GB = {
                                        pageId: BB.id,
                                        anchor: OB.heading.anchor,
                                        label: OB.heading.text
                                      };
                                      yQ(DQ, YB, GB, !0)
                                    }
                                  }
                                }
                                return DQ
                              }().get(QB)) && void 0 !== GB ? GB : [];
                            return 0 === oB.length && 0 === jB.length ? null : (0, pB.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [oB.length > 0 && (0, pB.jsx)(lQ, {
                                title: "Used in",
                                references: oB
                              }), jB.length > 0 && (0, pB.jsx)(lQ, {
                                title: "Changelog",
                                references: jB
                              })]
                            })
                          }

                          function qQ(BB) {
                            let {
                              method: OB,
                              pageId: GB,
                              anchor: YB,
                              isCallback: DB
                            } = BB;
                            const QB = DB ? void 0 : jO().get(OB.name),
                              oB = OB.description.length > 0 || null === QB || void 0 === QB || !QB.description ? OB.description : (0, UB.v)(QB.description);
                            return (0, pB.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, pB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, pB.jsx)(JG, {
                                  level: 2,
                                  text: OB.name,
                                  anchor: YB,
                                  className: "DocsCardTitle"
                                }), (0, pB.jsx)(WB, {
                                  text: PQ(OB, DB),
                                  label: DB ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, pB.jsx)(zQ, {
                                method: OB,
                                isCallback: DB
                              }), QB && null !== QB.deprecation && (0, pB.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, pB.jsx)("strong", {
                                  children: "Deprecated"
                                }), QB.deprecation && (0, pB.jsxs)(pB.Fragment, {
                                  children: [": ", (0, pB.jsx)(SO, {
                                    text: (jB = QB.deprecation, (0, xD.z)(jB, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, xD.n)("`\\w"), (BB => {
                                      let [OB] = BB;
                                      return PO().has(OB) ? `\`${OB}\`` : OB
                                    })))
                                  })]
                                })]
                              }), oB.length > 0 && (0, pB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, pB.jsx)(lG, {
                                  blocks: oB
                                })
                              }), OB.params.length > 0 && (0, pB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, pB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, pB.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: OB.params.map((BB => (0, pB.jsxs)("div", {
                                    id: `${OB.name}-${MQ(BB)}`,
                                    className: "DocsParam",
                                    children: [(0, pB.jsxs)("dt", {
                                      children: [(0, pB.jsx)("code", {
                                        className: "DocsParamName",
                                        children: BB.name
                                      }), (0, pB.jsx)(fO, {
                                        type: BB.type
                                      })]
                                    }), BB.description && (0, pB.jsx)("dd", {
                                      children: (0, pB.jsx)(SO, {
                                        text: BB.description
                                      })
                                    })]
                                  }, BB.name)))
                                })]
                              }), OB.returns && (OB.returns.type || OB.returns.description.length > 0) && (0, pB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, pB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [OB.returns.type && (0, pB.jsx)(fO, {
                                    type: OB.returns.type
                                  }), OB.returns.description.length > 0 && (0, pB.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, pB.jsx)(lG, {
                                      blocks: OB.returns.description
                                    })
                                  })]
                                })]
                              }), (0, pB.jsx)(pQ, {
                                pageId: GB,
                                anchor: YB
                              })]
                            });
                            var jB
                          }

                          function ZQ(BB) {
                            var OB;
                            return null !== BB.defaultValue && "undefined" !== BB.defaultValue ? BB.defaultValue : null !== (OB = BB.example) && void 0 !== OB ? OB : "value"
                          }

                          function NQ(BB) {
                            let {
                              setting: OB,
                              pageId: GB,
                              anchor: YB,
                              setterSnippet: DB
                            } = BB;
                            const QB = null === OB.defaultValue ? null : NO(OB.defaultValue);
                            return (0, pB.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, pB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, pB.jsx)(JG, {
                                  level: 2,
                                  text: OB.name,
                                  anchor: YB,
                                  className: "DocsCardTitle"
                                }), (0, pB.jsx)(WB, {
                                  text: DB(OB.name, ZQ(OB)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, pB.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, pB.jsxs)("div", {
                                  children: [(0, pB.jsx)("dt", {
                                    children: "Type"
                                  }), (0, pB.jsx)("dd", {
                                    children: (0, pB.jsx)(fO, {
                                      type: OB.type
                                    })
                                  })]
                                }), null !== OB.defaultValue && (0, pB.jsxs)("div", {
                                  children: [(0, pB.jsx)("dt", {
                                    children: "Default"
                                  }), (0, pB.jsx)("dd", {
                                    children: (0, pB.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [QB && (0, pB.jsx)(RO, {
                                        colour: QB
                                      }), OB.defaultValue]
                                    })
                                  })]
                                }), null !== OB.example && (0, pB.jsxs)("div", {
                                  children: [(0, pB.jsx)("dt", {
                                    children: "Example"
                                  }), (0, pB.jsx)("dd", {
                                    children: (0, pB.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: OB.example
                                    })
                                  })]
                                })]
                              }), OB.description.length > 0 && (0, pB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, pB.jsx)(lG, {
                                  blocks: OB.description
                                })
                              }), (0, pB.jsx)(pQ, {
                                pageId: GB,
                                anchor: YB
                              })]
                            })
                          }

                          function RQ(BB) {
                            let {
                              section: OB
                            } = BB;
                            return (0, pB.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, pB.jsx)(JG, {
                                level: 2,
                                text: OB.heading.text,
                                anchor: OB.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, pB.jsx)("div", {
                                className: "DocsProse",
                                children: (0, pB.jsx)(lG, {
                                  blocks: OB.blocks
                                })
                              })]
                            })
                          }

                          function WQ(BB) {
                            let {
                              section: OB
                            } = BB;
                            return (0, pB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, pB.jsx)(JG, {
                                level: OB.heading.level,
                                text: OB.heading.text,
                                anchor: OB.heading.anchor
                              }), (0, pB.jsx)(lG, {
                                blocks: OB.blocks
                              })]
                            })
                          }
                          const AQ = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function VQ(BB) {
                            let {
                              page: OB,
                              section: GB
                            } = BB;
                            if ("methods" === OB.layout || "callbacks" === OB.layout) return (0, pB.jsx)(qQ, {
                              method: nG(GB),
                              pageId: OB.id,
                              anchor: GB.heading.anchor,
                              isCallback: "callbacks" === OB.layout
                            });
                            if ("settings" === OB.layout) {
                              const BB = function(BB) {
                                const OB = {
                                  name: BB.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const YB of BB.blocks) {
                                  var GB;
                                  if (SG(YB)) continue;
                                  const BB = "paragraph" === YB.kind ? YB.text.match(UG) : null;
                                  if (!BB) {
                                    OB.description.push(YB);
                                    continue
                                  }
                                  const DB = null !== (GB = VG(BB[2])) && void 0 !== GB ? GB : BB[2];
                                  "Type" === BB[1] ? OB.type = DB : "Default" === BB[1] ? OB.defaultValue = DB : "" !== DB && (OB.example = DB)
                                }
                                return OB.type ? OB : null
                              }(GB);
                              if (BB) return (0, pB.jsx)(NQ, {
                                setting: BB,
                                pageId: OB.id,
                                anchor: GB.heading.anchor,
                                setterSnippet: OB.setterSnippet
                              })
                            }
                            return "snippets" === OB.layout ? (0, pB.jsx)(RQ, {
                              section: GB
                            }) : "changelog" === OB.layout ? (0, pB.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, pB.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, pB.jsx)(JG, {
                                  level: 2,
                                  text: GB.heading.text,
                                  anchor: GB.heading.anchor
                                })
                              }), (0, pB.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, pB.jsx)(lG, {
                                  blocks: fG(GB.blocks)
                                })
                              })]
                            }) : OB.gallery ? (0, pB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, pB.jsx)(JG, {
                                level: GB.heading.level,
                                text: GB.heading.text,
                                anchor: GB.heading.anchor
                              }), (0, pB.jsx)(kY, {
                                kind: OB.gallery,
                                content: EB(OB),
                                blocks: GB.blocks
                              })]
                            }) : (0, pB.jsx)(WQ, {
                              section: GB
                            })
                          }

                          function SQ(BB) {
                            let {
                              page: OB,
                              onTocChange: GB
                            } = BB;
                            const DB = EB(OB),
                              [QB, oB] = (0, YB.useState)(""),
                              jB = "article" !== OB.layout,
                              yB = ZG(OB.gallery) ? OB.gallery : null,
                              JB = null !== yB,
                              MB = QB.trim().toLowerCase(),
                              PB = (0, YB.useRef)(null),
                              zB = (0, YB.useCallback)((BB => {
                                var OB;
                                null === (OB = PB.current) || void 0 === OB || OB.preview(BB)
                              }), []),
                              lB = (0, YB.useMemo)((() => {
                                if (!OB.hasParticlePlayground) return [];
                                const BB = uG(DB.intro).find((BB => "names" === BB.kind && !BB.names.some((BB => null !== wG(BB.name)))));
                                return "names" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.names.map((BB => BB.name)) : []
                              }), [OB, DB]),
                              qB = (0, YB.useMemo)((() => {
                                if (!OB.hasTextPlayground) return [];
                                const BB = DB.sections.flatMap((BB => BB.blocks.flatMap((BB => {
                                  var OB;
                                  return (null !== (OB = KG(BB)) && void 0 !== OB ? OB : []).flatMap((BB => wO(BB.name) ? [BB.name] : []))
                                }))));
                                return [...new Set(BB)]
                              }), [OB, DB]),
                              ZB = (0, YB.useMemo)((() => MB ? DB.sections.filter((BB => function(BB, OB) {
                                return !!BB.heading.text.toLowerCase().includes(OB) || BB.blocks.some((BB => (0, UB.k)(BB).toLowerCase().includes(OB)))
                              }(BB, MB))) : DB.sections), [DB, MB]),
                              NB = (0, YB.useMemo)((() => function(BB, OB) {
                                return "article" !== BB.layout ? OB.map((BB => ({
                                  anchor: BB.heading.anchor,
                                  text: BB.heading.text,
                                  level: 2
                                }))) : OB.flatMap((BB => {
                                  const OB = BB.blocks.flatMap((BB => "heading" === BB.kind && 3 === BB.level ? [{
                                    anchor: BB.anchor,
                                    text: BB.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: BB.heading.anchor,
                                    text: BB.heading.text,
                                    level: 2
                                  }, ...OB]
                                }))
                              }(OB, ZB)), [OB, ZB]);
                            return (0, YB.useEffect)((() => {
                              GB(NB)
                            }), [NB, GB]), (0, pB.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, pB.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, pB.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: DB.title || OB.title
                                }), (0, pB.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: OB.summary
                                }), (0, pB.jsx)(HY, {
                                  page: OB
                                }), jB && (0, pB.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, pB.jsxs)("span", {
                                    children: [(0, pB.jsx)("strong", {
                                      children: DB.sections.length
                                    }), " ", AQ[OB.layout]]
                                  })
                                })]
                              }), "" === OB.slug && (0, pB.jsx)(KY, {}), yB && (0, pB.jsx)(FY, {
                                kind: yB
                              }, yB), OB.hasParticlePlayground && (0, pB.jsx)(yD, {
                                ref: PB,
                                textures: lB
                              }), !JB && DB.intro.length > 0 && (0, pB.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: OB.gallery ? (0, pB.jsx)(NY.Provider, {
                                  value: OB.hasParticlePlayground ? zB : null,
                                  children: (0, pB.jsx)(kY, {
                                    kind: OB.gallery,
                                    content: DB,
                                    blocks: DB.intro
                                  })
                                }) : (0, pB.jsx)(lG, {
                                  blocks: fG(DB.intro)
                                })
                              }), OB.hasTextPlayground && (0, pB.jsx)(UD, {
                                fontAwesomeIcons: qB
                              }), OB.hasVoicePlayground && (0, pB.jsx)(sD, {}), OB.childPageIds && (0, pB.jsx)(KY, {
                                cards: OB.childPageIds.map((BB => ({
                                  pageId: BB
                                }))),
                                label: OB.title
                              }), jB && (0, pB.jsx)(WG, {
                                className: "DocsFilterBar",
                                value: QB,
                                placeholder: `Filter ${DB.sections.length} ${AQ[OB.layout]}\u2026`,
                                label: `Filter ${AQ[OB.layout]}`,
                                onChange: oB,
                                count: MB ? {
                                  visible: ZB.length,
                                  total: DB.sections.length
                                } : null
                              }), !JB && (0, pB.jsxs)("div", {
                                className: `DocsSections Layout-${OB.layout}`,
                                children: [ZB.map((BB => (0, pB.jsx)(VQ, {
                                  page: OB,
                                  section: BB
                                }, BB.heading.anchor))), 0 === ZB.length && (0, pB.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", AQ[OB.layout], " match \u201c", QB, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const nQ = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function UQ(BB) {
                            let {
                              entry: OB,
                              isActive: GB,
                              onNavigate: YB,
                              label: DB,
                              children: oB
                            } = BB;
                            return (0, pB.jsx)("a", {
                              href: `#${OB.anchor}`,
                              "aria-label": DB,
                              className: QB()(`Level${OB.level}`, {
                                Active: GB
                              }),
                              "aria-current": GB ? "location" : void 0,
                              onClick: BB => {
                                BB.preventDefault(), YB(OB.anchor)
                              },
                              children: oB
                            })
                          }

                          function fQ(BB) {
                            let {
                              toc: OB,
                              activeAnchor: GB,
                              onNavigate: DB
                            } = BB;
                            const oB = Math.max(0, OB.findIndex((BB => BB.anchor === GB))),
                              jB = (0, YB.useRef)(null),
                              yB = (0, YB.useRef)(!1);
                            (0, YB.useEffect)((() => {
                              var BB, GB;
                              const YB = null === (BB = jB.current) || void 0 === BB ? void 0 : BB.closest(".DocsToc"),
                                DB = null === (GB = jB.current) || void 0 === GB ? void 0 : GB.querySelector(".DocsTimelineNotch.Active");
                              if (!YB || !DB) return;
                              let QB = 0;
                              if (oB === OB.length - 1) QB = YB.scrollHeight;
                              else if (oB > 0) {
                                const BB = YB.getBoundingClientRect(),
                                  OB = DB.getBoundingClientRect();
                                QB = YB.scrollTop + OB.top + OB.height / 2 - (BB.top + YB.clientHeight / 2)
                              }
                              YB.scrollTo({
                                top: QB,
                                behavior: yB.current ? "smooth" : "auto"
                              }), yB.current = !0
                            }), [oB, OB.length]);
                            const JB = [];
                            return OB.forEach(((BB, OB) => {
                              var GB, YB, DB;
                              const QB = function(BB) {
                                  const OB = BB.trim().match(nQ);
                                  return OB ? {
                                    day: OB[1],
                                    month: `${OB[2]} ${OB[3]}`
                                  } : null
                                }(BB.text),
                                oB = null !== (GB = null === QB || void 0 === QB ? void 0 : QB.month) && void 0 !== GB ? GB : null;
                              null !== oB && (null === (YB = JB.at(-1)) || void 0 === YB ? void 0 : YB.month) === oB || JB.push({
                                month: oB,
                                entries: []
                              }), JB.at(-1).entries.push({
                                entry: BB,
                                day: null !== (DB = null === QB || void 0 === QB ? void 0 : QB.day) && void 0 !== DB ? DB : null,
                                index: OB
                              })
                            })), (0, pB.jsx)("ol", {
                              ref: jB,
                              className: "DocsTimeline",
                              children: JB.map((BB => {
                                let {
                                  month: OB,
                                  entries: GB
                                } = BB;
                                return (0, pB.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [OB && (0, pB.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: OB
                                  }), (0, pB.jsx)("ol", {
                                    children: GB.map((BB => {
                                      let {
                                        entry: OB,
                                        day: GB,
                                        index: YB
                                      } = BB;
                                      return (0, pB.jsx)("li", {
                                        className: QB()("DocsTimelineNotch", {
                                          Passed: YB < oB,
                                          Active: YB === oB
                                        }),
                                        children: (0, pB.jsx)(UQ, {
                                          entry: OB,
                                          isActive: YB === oB,
                                          onNavigate: DB,
                                          label: OB.text,
                                          children: (0, pB.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== GB && void 0 !== GB ? GB : OB.text
                                          })
                                        })
                                      }, OB.anchor)
                                    }))
                                  })]
                                }, GB[0].entry.anchor)
                              }))
                            })
                          }

                          function kQ(BB) {
                            let {
                              isChangelog: OB,
                              toc: GB,
                              activeAnchor: YB,
                              onNavigate: DB
                            } = BB;
                            return 0 === GB.length ? null : (0, pB.jsxs)(pB.Fragment, {
                              children: [(0, pB.jsx)("div", {
                                className: "DocsTocTitle",
                                children: OB ? "Updates" : "On this page"
                              }), OB ? (0, pB.jsx)(fQ, {
                                toc: GB,
                                activeAnchor: YB,
                                onNavigate: DB
                              }) : (0, pB.jsx)("ul", {
                                children: GB.map((BB => (0, pB.jsx)("li", {
                                  children: (0, pB.jsx)(UQ, {
                                    entry: BB,
                                    isActive: BB.anchor === YB,
                                    onNavigate: DB,
                                    children: BB.text.replace(/`/g, "")
                                  })
                                }, BB.anchor)))
                              })]
                            })
                          }
                          const dQ = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            KQ = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            uQ = 20,
                            mQ = 10,
                            IQ = 40,
                            FQ = 120;
                          let iQ;

                          function LQ(BB) {
                            const OB = BB.gallery;
                            if (!OB) return [];
                            if (ZG(OB)) return function(BB) {
                              return RG(BB).entries.map((BB => BB.name))
                            }(OB).map((GB => ({
                              page: BB,
                              anchor: IG(OB, GB),
                              title: GB,
                              kind: KQ[OB],
                              text: "",
                              listedUnder: BB.title
                            })));
                            const GB = EB(BB);
                            return (0, UB.t)(GB).flatMap((YB => {
                              const DB = YB.heading ? `${BB.title} \u203a ${YB.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : BB.title;
                              return iG(OB, GB, YB.blocks).flatMap((GB => "names" !== GB.kind ? [] : GB.names.map((YB => {
                                const QB = GB.isSongs ? "Song" : KQ[OB];
                                return {
                                  page: BB,
                                  anchor: YB.anchor,
                                  title: YB.name,
                                  kind: QB,
                                  text: "",
                                  listedUnder: DB
                                }
                              }))))
                            }))
                          }

                          function gQ(BB, OB, GB) {
                            const YB = BB.title.toLowerCase();
                            let DB = 0;
                            if (YB === OB) DB = 100;
                            else if (YB.startsWith(OB)) DB = 80;
                            else if (YB.includes(OB)) DB = 60;
                            else if (GB.every((BB => YB.includes(BB)))) DB = 45;
                            else {
                              if (!BB.text.toLowerCase().includes(OB)) return 0;
                              DB = 20
                            }
                            return DB - Math.min(YB.length / 10, 9) + ("Page" === BB.kind ? 8 : "Method" === BB.kind ? 3 : 0) - (BB.listedUnder ? uQ : 0)
                          }

                          function rQ(BB, OB) {
                            const GB = BB.toLowerCase().indexOf(OB),
                              YB = Math.max(0, GB - FQ / 3);
                            return `${YB>0?"\u2026":""}${BB.slice(YB,YB+FQ)}${YB+FQ<BB.length?"\u2026":""}`
                          }

                          function XQ(BB) {
                            let {
                              text: OB,
                              query: GB
                            } = BB;
                            const YB = GB ? OB.toLowerCase().indexOf(GB) : -1;
                            return -1 === YB ? (0, pB.jsx)(pB.Fragment, {
                              children: OB
                            }) : (0, pB.jsxs)(pB.Fragment, {
                              children: [OB.slice(0, YB), (0, pB.jsx)("mark", {
                                children: OB.slice(YB, YB + GB.length)
                              }), OB.slice(YB + GB.length)]
                            })
                          }

                          function wQ(BB) {
                            let {
                              basePath: OB,
                              onClose: GB
                            } = BB;
                            const DB = (0, jB.v)(),
                              [oB, yB] = (0, YB.useState)(""),
                              [JB, MB] = (0, YB.useState)(0),
                              PB = (0, YB.useRef)(null),
                              zB = (0, YB.useRef)(null),
                              lB = oB.trim().toLowerCase(),
                              qB = (0, YB.useMemo)((() => {
                                const BB = (iQ || (iQ = gB.flatMap((BB => {
                                  const OB = EB(BB);
                                  return [{
                                    page: BB,
                                    anchor: "",
                                    title: BB.title,
                                    kind: "Page",
                                    text: BB.summary
                                  }, ...OB.sections.flatMap((OB => {
                                    const GB = OB.blocks.filter((BB => "paragraph" === BB.kind)).map(UB.k).join(" ").replace(/[`*]/g, ""),
                                      YB = {
                                        page: BB,
                                        anchor: OB.heading.anchor,
                                        title: OB.heading.text.replace(/`/g, ""),
                                        kind: dQ[BB.layout],
                                        text: GB
                                      },
                                      DB = OB.blocks.flatMap((OB => "article" === BB.layout && "heading" === OB.kind && 3 === OB.level ? [{
                                        page: BB,
                                        anchor: OB.anchor,
                                        title: OB.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: YB.title
                                      }] : []));
                                    return [YB, ...DB]
                                  })), ...LQ(BB)]
                                }))), iQ);
                                if (!lB) return BB.filter((BB => "Page" === BB.kind));
                                const OB = lB.split(/\s+/);
                                let GB = 0;
                                return BB.map((BB => ({
                                  entry: BB,
                                  score: gQ(BB, lB, OB)
                                }))).filter((BB => BB.score > 0)).sort(((BB, OB) => OB.score - BB.score)).filter((BB => !BB.entry.listedUnder || (GB++, GB <= mQ))).slice(0, IQ).map((BB => BB.entry))
                              }), [lB]);
                            (0, YB.useEffect)((() => {
                              MB(0)
                            }), [lB]), (0, YB.useEffect)((() => {
                              const BB = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === BB || void 0 === BB || BB.focus()
                              }
                            }), []), (0, YB.useEffect)((() => {
                              var BB, OB;
                              null === (BB = PB.current) || void 0 === BB || null === (OB = BB.querySelector(".Active")) || void 0 === OB || OB.scrollIntoView({
                                block: "nearest"
                              })
                            }), [JB]);
                            const NB = BB => {
                              DB(eB(OB, BB.page, BB.anchor)), GB()
                            };
                            return (0, pB.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && GB()
                              },
                              children: (0, pB.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: BB => {
                                  BB.target !== zB.current && BB.preventDefault()
                                },
                                onKeyDown: BB => {
                                  if ("Escape" === BB.key) GB();
                                  else if ("Tab" === BB.key) {
                                    var OB;
                                    BB.preventDefault(), null === (OB = zB.current) || void 0 === OB || OB.focus()
                                  }
                                },
                                children: [(0, pB.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, pB.jsx)(ZB, {
                                    name: "magnifying-glass"
                                  }), (0, pB.jsx)("input", {
                                    ref: zB,
                                    autoFocus: !0,
                                    value: oB,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": qB.length > 0 ? `DocsSearchResult-${JB}` : void 0,
                                    onChange: BB => {
                                      yB(BB.target.value)
                                    },
                                    onKeyDown: BB => {
                                      if ("ArrowDown" === BB.key || "ArrowUp" === BB.key) {
                                        BB.preventDefault();
                                        const OB = "ArrowDown" === BB.key ? 1 : -1;
                                        MB((JB + OB + qB.length) % Math.max(qB.length, 1))
                                      } else "Enter" === BB.key && qB[JB] && NB(qB[JB])
                                    }
                                  }), (0, pB.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, pB.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: PB,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!lB && (0, pB.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), qB.map(((BB, OB) => {
                                    var GB;
                                    return (0, pB.jsxs)("li", {
                                      id: `DocsSearchResult-${OB}`,
                                      role: "option",
                                      "aria-selected": OB === JB,
                                      className: QB()("DocsSearchResult", {
                                        Active: OB === JB
                                      }),
                                      onMouseMove: () => {
                                        MB(OB)
                                      },
                                      onClick: () => {
                                        NB(BB)
                                      },
                                      children: [(0, pB.jsx)(ZB, {
                                        name: BB.page.icon
                                      }), (0, pB.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, pB.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, pB.jsx)(XQ, {
                                            text: BB.title,
                                            query: lB
                                          })
                                        }), BB.text && (0, pB.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, pB.jsx)(XQ, {
                                            text: rQ(BB.text, lB),
                                            query: lB
                                          })
                                        })]
                                      }), (0, pB.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === BB.kind ? "Page" : null !== (GB = BB.listedUnder) && void 0 !== GB ? GB : `${BB.kind} \xb7 ${BB.page.title}`
                                      })]
                                    }, `${BB.page.id}#${BB.anchor}`)
                                  })), lB && 0 === qB.length && (0, pB.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", oB, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function EQ(BB, OB) {
                            if (OB < 10) return `${BB.toFixed(1)}s`;
                            const GB = Math.floor(BB);
                            return `${Math.floor(GB/60)}:${String(GB%60).padStart(2,"0")}`
                          }

                          function cQ() {
                            const BB = MY((BB => BB.track)),
                              OB = MY((BB => BB.volume)),
                              [GB, DB] = (0, YB.useState)(0),
                              oB = (0, YB.useRef)(OY);
                            if ((0, YB.useEffect)((() => {
                                if (!BB) return;
                                if (DB(pY()), "playing" !== BB.status) return;
                                let OB = 0;
                                const GB = () => {
                                  DB(pY()), OB = requestAnimationFrame(GB)
                                };
                                return OB = requestAnimationFrame(GB), () => {
                                  cancelAnimationFrame(OB)
                                }
                              }), [BB]), !BB) return null;
                            const jB = "paused" !== BB.status,
                              yB = Math.min(GB, BB.duration);
                            return (0, pB.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, pB.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, pB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": jB ? `Pause ${BB.name}` : `Play ${BB.name}`,
                                  onClick: lY,
                                  children: (0, pB.jsx)(ZB, {
                                    name: jB ? "pause" : "play"
                                  })
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, pB.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, pB.jsx)("code", {
                                      children: BB.name
                                    }), (0, pB.jsx)("span", {
                                      children: BB.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, pB.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, pB.jsx)("span", {
                                      children: EQ(yB, BB.duration)
                                    }), (0, pB.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: BB.duration || 1,
                                      step: .01,
                                      value: yB,
                                      disabled: 0 === BB.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${EQ(yB,BB.duration)} of ${EQ(BB.duration,BB.duration)}`,
                                      onChange: BB => {
                                        const OB = Number(BB.target.value);
                                        ! function(BB) {
                                          var OB;
                                          oY = BB, null === (OB = DY) || void 0 === OB || OB.seek(BB)
                                        }(OB), DB(OB)
                                      }
                                    }), (0, pB.jsx)("span", {
                                      children: BB.duration > 0 ? EQ(BB.duration, BB.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, pB.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, pB.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === OB ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === OB ? qY(oB.current) : (oB.current = OB, qY(0))
                                    },
                                    children: (0, pB.jsx)(ZB, {
                                      name: "volume",
                                      className: QB()({
                                        Muted: 0 === OB
                                      })
                                    })
                                  }), (0, pB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: OB,
                                    "aria-label": "Volume",
                                    onChange: BB => {
                                      qY(Number(BB.target.value))
                                    }
                                  })]
                                }), (0, pB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var OB;
                                    null === (OB = document.querySelector(`[data-docs-track="${CSS.escape(GY(BB.name,BB.isSong))}"]`)) || void 0 === OB || OB.focus(), ZY()
                                  },
                                  children: (0, pB.jsx)(ZB, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var hQ = GB(31);
                          const aQ = "docsTheme",
                            eQ = window.matchMedia("(prefers-color-scheme: light)");

                          function TQ(BB) {
                            let {
                              theme: OB,
                              onChange: GB
                            } = BB;
                            const YB = "dark" === OB ? "light" : "dark";
                            return (0, pB.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${YB} theme`,
                              title: `Switch to ${YB} theme`,
                              onClick: () => {
                                GB(YB)
                              },
                              children: (0, pB.jsx)(ZB, {
                                name: "dark" === OB ? "moon" : "sun"
                              })
                            })
                          }
                          const bQ = "https://github.com/Bloxdy/code-api",
                            CQ = "https://discord.gg/playbloxd",
                            HQ = 180,
                            vQ = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function sQ(BB) {
                            let {
                              basePath: OB,
                              activePageId: GB,
                              onNavigate: YB
                            } = BB;
                            return (0, pB.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: rB.map((BB => (0, pB.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, pB.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: BB.title
                                }), BB.pageIds.map((BB => {
                                  var DB;
                                  const jB = XB(BB);
                                  return (0, pB.jsxs)(oB.d, {
                                    to: eB(OB, jB),
                                    className: QB()("DocsNavLink", {
                                      Active: jB.id === GB
                                    }),
                                    "aria-current": jB.id === GB ? "page" : void 0,
                                    onClick: YB,
                                    children: [(0, pB.jsx)(ZB, {
                                      name: jB.icon
                                    }), (0, pB.jsx)("span", {
                                      children: null !== (DB = jB.navTitle) && void 0 !== DB ? DB : jB.title
                                    })]
                                  }, jB.id)
                                }))]
                              }, BB.title)))
                            })
                          }

                          function xQ(BB) {
                            let {
                              basePath: OB,
                              pageId: GB
                            } = BB;
                            const YB = rB.flatMap((BB => BB.pageIds)),
                              DB = YB.indexOf(GB),
                              QB = DB > 0 ? XB(YB[DB - 1]) : null,
                              jB = DB < YB.length - 1 ? XB(YB[DB + 1]) : null;
                            return (0, pB.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [QB ? (0, pB.jsxs)(oB.d, {
                                className: "DocsPagerLink Previous",
                                to: eB(OB, QB),
                                children: [(0, pB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, pB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: QB.title
                                })]
                              }) : (0, pB.jsx)("span", {}), jB && (0, pB.jsxs)(oB.d, {
                                className: "DocsPagerLink Next",
                                to: eB(OB, jB),
                                children: [(0, pB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, pB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: jB.title
                                })]
                              })]
                            })
                          }

                          function tQ(BB) {
                            let {
                              basePath: OB,
                              embedded: GB = !1
                            } = BB;
                            const {
                              pageSlug: DB = ""
                            } = (0, jB.A)(), JB = (0, jB.r)(), MB = (0, jB.v)(), PB = (zB = DB, gB.find((BB => BB.slug === zB)));
                            var zB;
                            const [lB, qB] = function() {
                              const [BB, OB] = (0, YB.useState)((() => {
                                const BB = hQ.g.getItem(aQ);
                                return "dark" === BB || "light" === BB ? BB : null
                              })), [GB, DB] = (0, YB.useState)(eQ.matches ? "light" : "dark");
                              return (0, YB.useEffect)((() => {
                                const BB = () => {
                                  DB(eQ.matches ? "light" : "dark")
                                };
                                return eQ.addEventListener("change", BB), () => {
                                  eQ.removeEventListener("change", BB)
                                }
                              }), []), [null !== BB && void 0 !== BB ? BB : GB, BB => {
                                hQ.g.setItem(aQ, BB), OB(BB)
                              }]
                            }(), [NB, RB] = (0, YB.useState)(null), [WB, AB] = (0, YB.useState)(!1), [VB, SB] = (0, YB.useState)(!1), [nB, fB] = (0, YB.useState)([]), kB = function(BB, OB) {
                              const [GB, DB] = (0, YB.useState)("");
                              return (0, YB.useEffect)((() => {
                                if (!OB) return;
                                let GB = 0;
                                const YB = () => {
                                    var YB, QB;
                                    GB = 0;
                                    const oB = OB.getBoundingClientRect().top + HQ;
                                    let jB = null !== (YB = null === (QB = BB[0]) || void 0 === QB ? void 0 : QB.anchor) && void 0 !== YB ? YB : "";
                                    for (const OB of BB) {
                                      const BB = document.getElementById(OB.anchor);
                                      BB && BB.getBoundingClientRect().top <= oB && (jB = OB.anchor)
                                    }
                                    OB.scrollTop + OB.clientHeight >= OB.scrollHeight - 2 && OB.scrollTop > 0 && BB.length > 0 && (jB = BB[BB.length - 1].anchor), DB(jB)
                                  },
                                  QB = () => {
                                    GB || (GB = requestAnimationFrame(YB))
                                  };
                                return YB(), OB.addEventListener("scroll", QB, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(GB), OB.removeEventListener("scroll", QB)
                                }
                              }), [BB, OB]), GB
                            }(nB, NB), dB = "" === DB && JB.hash ? function(BB) {
                              const OB = (0, UB.r)(BB);
                              if (cB(XB("welcome"), OB)) return null;
                              const GB = Object.hasOwn(aB, OB) ? aB[OB] : null;
                              if (GB) return {
                                page: XB(GB.pageId),
                                anchor: GB.anchor
                              };
                              const YB = XB("readme");
                              return cB(YB, OB) ? {
                                page: YB,
                                anchor: OB
                              } : hB(`#${OB}`)
                            }(JB.hash) : null;
                            (0, YB.useEffect)((() => (yB.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              yB.c.set({
                                musicOnFromPage: !0
                              }), ZY()
                            })), []), (0, YB.useEffect)((() => {
                              const BB = BB => {
                                const OB = BB.target;
                                if (OB.closest(".DocsTextDialog")) return;
                                const GB = OB.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(OB.tagName);
                                "k" === BB.key && (BB.metaKey || BB.ctrlKey) || "/" === BB.key && !GB ? (BB.preventDefault(), SB(!0)) : "Escape" === BB.key && AB(!1)
                              };
                              return window.addEventListener("keydown", BB), () => {
                                window.removeEventListener("keydown", BB)
                              }
                            }), []);
                            const KB = (0, YB.useRef)(null);
                            (0, YB.useLayoutEffect)((() => {
                              var BB, OB;
                              if (!NB) return;
                              const GB = KB.current === JB.pathname;
                              KB.current = JB.pathname;
                              const YB = (0, UB.r)(JB.hash),
                                DB = YB ? document.getElementById(YB) : null;
                              if (null === (BB = NB.querySelector(".DocsTargeted")) || void 0 === BB || BB.classList.remove("DocsTargeted"), null === DB || void 0 === DB || null === (OB = DB.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === OB || OB.classList.add("DocsTargeted"), DB) {
                                var QB;
                                const BB = DB.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (QB = DB.closest(".DocsChangelogEntry")) && void 0 !== QB ? QB : DB).scrollIntoView({
                                  block: BB ? "center" : "start",
                                  behavior: GB ? "smooth" : "auto"
                                })
                              } else GB || NB.scrollTo({
                                top: 0
                              })
                            }), [NB, JB.pathname, JB.hash, JB.key]);
                            const uB = (0, YB.useCallback)((() => {
                                AB(!1)
                              }), []),
                              mB = (0, YB.useCallback)((BB => {
                                MB({
                                  hash: BB
                                })
                              }), [MB]);
                            if (dB) return (0, pB.jsx)(jB.e, {
                              replace: !0,
                              to: eB(OB, dB.page, dB.anchor)
                            });
                            if (!PB) return (0, pB.jsx)(jB.e, {
                              replace: !0,
                              to: OB
                            });
                            const IB = GB ? "div" : "main";
                            return (0, pB.jsx)(lO.Provider, {
                              value: OB,
                              children: (0, pB.jsx)(pO.Provider, {
                                value: NB,
                                children: (0, pB.jsxs)("div", {
                                  ref: RB,
                                  className: QB()("DocsSite", {
                                    Embedded: GB,
                                    NavOpen: WB
                                  }),
                                  "data-theme": lB,
                                  children: [(0, pB.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, pB.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": WB ? "Close menu" : "Open menu",
                                      "aria-expanded": WB,
                                      onClick: () => {
                                        AB(!WB)
                                      },
                                      children: (0, pB.jsx)(ZB, {
                                        name: WB ? "cross" : "menu"
                                      })
                                    }), (0, pB.jsxs)(oB.d, {
                                      to: OB,
                                      className: "DocsBrand",
                                      children: [(0, pB.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, pB.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, pB.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, pB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        SB(!0)
                                      },
                                      children: [(0, pB.jsx)(ZB, {
                                        name: "magnifying-glass"
                                      }), (0, pB.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, pB.jsxs)("kbd", {
                                        children: [vQ ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, pB.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, pB.jsxs)("a", {
                                        href: CQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, pB.jsx)(ZB, {
                                          name: "discord"
                                        }), (0, pB.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, pB.jsxs)("a", {
                                        href: bQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, pB.jsx)(ZB, {
                                          name: "external-link"
                                        }), (0, pB.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !GB && (0, pB.jsxs)(oB.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, pB.jsx)(ZB, {
                                          name: "play"
                                        }), (0, pB.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, pB.jsx)(TQ, {
                                        theme: lB,
                                        onChange: qB
                                      })]
                                    })]
                                  }), (0, pB.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, pB.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, pB.jsx)(sQ, {
                                        basePath: OB,
                                        activePageId: PB.id,
                                        onNavigate: uB
                                      })
                                    }), (0, pB.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: uB
                                    }), (0, pB.jsxs)(IB, {
                                      className: "DocsMain",
                                      children: [(0, pB.jsx)(SQ, {
                                        page: PB,
                                        onTocChange: fB
                                      }, PB.id), (0, pB.jsx)(xQ, {
                                        basePath: OB,
                                        pageId: PB.id
                                      })]
                                    }), (0, pB.jsx)("aside", {
                                      className: QB()("DocsToc", {
                                        Timeline: "changelog" === PB.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, pB.jsx)(kQ, {
                                        isChangelog: "changelog" === PB.layout,
                                        toc: nB,
                                        activeAnchor: kB,
                                        onNavigate: mB
                                      })
                                    })]
                                  }), (0, pB.jsx)(cQ, {}), VB && (0, pB.jsx)(wQ, {
                                    basePath: OB,
                                    onClose: () => {
                                      SB(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5228: (BB, OB, GB) => {
                          GB.d(OB, {
                            d: () => YB,
                            g: () => oB,
                            k: () => ZB,
                            l: () => qB,
                            p: () => jB,
                            r: () => DB,
                            s: () => QB,
                            t: () => pB,
                            u: () => lB,
                            v: () => zB
                          });
                          const YB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function DB(BB) {
                            try {
                              return decodeURIComponent(BB.slice(1))
                            } catch {
                              return BB.slice(1)
                            }
                          }

                          function QB(BB) {
                            return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const oB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${YB.source}`, "g");

                          function jB(BB, OB) {
                            return 2 === BB.length ? OB.replace(/^ (.*) $/, "$1") : OB
                          }

                          function yB(BB) {
                            return "" === BB.trim()
                          }

                          function JB(BB) {
                            const OB = [];
                            for (const GB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) OB.length > 0 && OB[OB.length - 1].endsWith("\\") ? OB[OB.length - 1] += `|${GB}` : OB.push(GB);
                            return OB.map((BB => BB.trim().replaceAll("\\|", "|")))
                          }
                          const MB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function PB(BB) {
                            const OB = [],
                              GB = [{
                                indent: -1,
                                items: OB
                              }];
                            let YB = null;
                            for (const DB of BB) {
                              const BB = DB.match(MB);
                              if (!BB) {
                                YB && (YB.text += ` ${DB.trim()}`);
                                continue
                              }
                              const OB = BB[1].replace(/\t/g, "  ").length;
                              for (; OB <= GB[GB.length - 1].indent;) GB.pop();
                              YB = {
                                text: BB[3].trim(),
                                children: []
                              }, GB[GB.length - 1].items.push(YB), GB.push({
                                indent: OB,
                                items: YB.children
                              })
                            }
                            return OB
                          }

                          function zB(BB) {
                            const OB = BB.replace(/\r\n/g, "\n").split("\n"),
                              GB = [];
                            let YB = 0;
                            for (; YB < OB.length;) {
                              const BB = OB[YB];
                              if (yB(BB)) {
                                YB++;
                                continue
                              }
                              const DB = BB.match(/^\s*```\s*(\w*)\s*$/);
                              if (DB) {
                                const BB = [];
                                for (YB++; YB < OB.length && !/^\s*```\s*$/.test(OB[YB]);) BB.push(OB[YB]), YB++;
                                YB++, GB.push({
                                  kind: "code",
                                  lang: DB[1] || "text",
                                  code: BB.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const oB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (oB) {
                                const BB = oB[2].trim();
                                GB.push({
                                  kind: "heading",
                                  level: oB[1].length,
                                  text: BB,
                                  anchor: QB(BB)
                                }), YB++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
                                GB.push({
                                  kind: "rule"
                                }), YB++;
                                continue
                              }
                              if (BB.trim().startsWith("|") && YB + 1 < OB.length && /^\s*\|[\s:|-]+\|\s*$/.test(OB[YB + 1])) {
                                const DB = JB(BB),
                                  QB = [];
                                for (YB += 2; YB < OB.length && OB[YB].trim().startsWith("|");) QB.push(JB(OB[YB])), YB++;
                                GB.push({
                                  kind: "table",
                                  header: DB,
                                  rows: QB
                                });
                                continue
                              }
                              if (BB.startsWith(">")) {
                                const BB = [];
                                for (; YB < OB.length && OB[YB].startsWith(">");) BB.push(OB[YB].replace(/^>\s?/, "")), YB++;
                                GB.push({
                                  kind: "quote",
                                  blocks: zB(BB.join("\n"))
                                });
                                continue
                              }
                              if (MB.test(BB)) {
                                const DB = [],
                                  QB = /^\s*\d+\./.test(BB);
                                for (; YB < OB.length && !yB(OB[YB]) && (MB.test(OB[YB]) || /^\s+\S/.test(OB[YB]));) DB.push(OB[YB]), YB++;
                                GB.push({
                                  kind: "list",
                                  ordered: QB,
                                  items: PB(DB)
                                });
                                continue
                              }
                              const jB = [];
                              for (; YB < OB.length && !yB(OB[YB]) && !/^\s*```/.test(OB[YB]) && !/^#{1,6}\s/.test(OB[YB]) && !OB[YB].startsWith(">") && !MB.test(OB[YB]) && (!OB[YB].trim().startsWith("|") || 0 !== jB.length);) jB.push(OB[YB].trim()), YB++;
                              0 === jB.length && (jB.push(OB[YB].trim()), YB++), GB.push({
                                kind: "paragraph",
                                text: jB.join(" ")
                              })
                            }
                            return GB
                          }

                          function lB(BB) {
                            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const GB = zB(BB);
                            let YB = "";
                            const DB = [],
                              QB = [],
                              oB = new Map;
                            for (const JB of GB) {
                              if ("heading" === JB.kind) {
                                var jB;
                                const BB = (null !== (jB = oB.get(JB.anchor)) && void 0 !== jB ? jB : 0) + 1;
                                oB.set(JB.anchor, BB), BB > 1 && (JB.anchor = `${JB.anchor}-${BB}`)
                              }
                              if ("heading" === JB.kind && 1 === JB.level && !YB) {
                                YB = JB.text;
                                continue
                              }
                              if ("heading" === JB.kind && JB.level <= OB) {
                                QB.push({
                                  heading: JB,
                                  blocks: []
                                });
                                continue
                              }
                              const BB = QB.at(-1);
                              BB ? BB.blocks.push(JB) : DB.push(JB)
                            }
                            const yB = BB => {
                              for (;
                                "rule" === (null === (OB = BB.at(-1)) || void 0 === OB ? void 0 : OB.kind);) {
                                var OB;
                                BB.pop()
                              }
                            };
                            yB(DB);
                            for (const JB of QB) yB(JB.blocks);
                            return {
                              title: YB,
                              intro: DB,
                              sections: QB
                            }
                          }

                          function pB(BB) {
                            return [{
                              heading: null,
                              blocks: BB.intro
                            }, ...BB.sections.map((BB => ({
                              heading: BB.heading,
                              blocks: BB.blocks
                            })))]
                          }

                          function qB(BB) {
                            return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? qB(BB.blocks) : []))
                          }

                          function ZB(BB) {
                            switch (BB.kind) {
                              case "heading":
                              case "paragraph":
                                return BB.text;
                              case "code":
                                return BB.code;
                              case "table":
                                return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
                              case "list": {
                                const OB = BB => BB.map((BB => `${BB.text} ${OB(BB.children)}`)).join(" ");
                                return OB(BB.items)
                              }
                              case "quote":
                                return BB.blocks.map(ZB).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5335: (BB, OB, GB) => {
                          GB.d(OB, {
                            c: () => jB
                          });
                          var YB = GB(56),
                            DB = GB(331),
                            QB = GB(2012),
                            oB = GB(1282);

                          function jB(BB) {
                            let {
                              text: OB
                            } = BB;
                            const GB = [];
                            let jB = "";
                            return (0, DB.hc)(OB).forEach(((BB, OB) => {
                              if ("string" === typeof BB || !(0, QB.d)(BB.icon)) return void(jB += "string" === typeof BB ? BB : BB.icon);
                              const DB = Math.max(0, jB.trimEnd().search(/\S{1,12}$/));
                              GB.push((0, oB.jsxs)(YB.Fragment, {
                                children: [jB.slice(0, DB), (0, oB.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [jB.slice(DB), (0, oB.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": BB.icon,
                                    children: (0, oB.jsx)(QB.c, {
                                      itemName: BB.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, OB)), jB = ""
                            })), GB.push(jB), (0, oB.jsx)(oB.Fragment, {
                              children: GB
                            })
                          }
                        }, 5261: (BB, OB, GB) => {
                          GB.d(OB, {
                            f: () => RB,
                            b: () => NB
                          });
                          var YB = GB(56),
                            DB = GB(1480),
                            QB = GB(2e3),
                            oB = GB(5266),
                            jB = GB(1282);
                          const yB = (0, YB.memo)((function(BB) {
                            let {
                              initialParameters: OB
                            } = BB;
                            const GB = (0, YB.useRef)(null),
                              DB = (0, YB.useRef)(null),
                              yB = (0, YB.useRef)(0),
                              JB = (0, YB.useRef)(null),
                              MB = OB.description,
                              PB = OB.EO,
                              {
                                scale: zB,
                                rotation: lB
                              } = null !== OB && void 0 !== OB ? OB : {},
                              pB = (0, oB.f)();
                            return (0, YB.useEffect)((() => {
                              const BB = pB.onFrame((() => {
                                const BB = pB.getState();
                                if (!BB.isActive || !GB.current || !DB.current) return;
                                const OB = BB.state;
                                if (GB.current.value = OB.progress, OB.clickCount > yB.current) {
                                  yB.current = OB.clickCount;
                                  const BB = DB.current;
                                  BB.classList.add("pulse"), JB.current = setTimeout((() => {
                                    BB.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(JB.current), BB()
                              }
                            }), [pB]), (0, jB.jsx)(jB.Fragment, {
                              children: (0, jB.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== zB && {
                                    "--scale": zB
                                  },
                                  ...null !== lB && {
                                    "--rotation": `${lB}deg`
                                  }
                                },
                                children: [(0, jB.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: GB
                                }), (0, jB.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: DB,
                                  children: (0, jB.jsx)(QB.b, {
                                    text: [{
                                      icon: PB
                                    }]
                                  })
                                }), (0, jB.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, jB.jsx)(QB.b, {
                                    text: MB
                                  })
                                })]
                              })
                            })
                          }));
                          var JB = GB(1090),
                            MB = GB.n(JB);
                          const PB = 2 * Math.PI * 90,
                            zB = (0, YB.memo)((function(BB) {
                              let {
                                initialParameters: OB
                              } = BB;
                              const GB = (0, YB.useRef)(null),
                                DB = (0, YB.useRef)(null),
                                yB = (0, YB.useRef)(null),
                                JB = OB.label,
                                zB = OB.icon,
                                lB = OB.aO,
                                {
                                  scale: pB,
                                  rotation: qB,
                                  eO: ZB
                                } = null !== OB && void 0 !== OB ? OB : {},
                                NB = (0, oB.f)();
                              return (0, YB.useEffect)((() => {
                                const BB = NB.onFrame((() => {
                                  var BB, OB;
                                  const YB = NB.getState();
                                  if (!YB.isActive || !DB.current) return;
                                  const QB = YB.state,
                                    oB = null !== (BB = QB.timeRemaining) && void 0 !== BB ? BB : 0,
                                    jB = null !== (OB = QB.hO) && void 0 !== OB ? OB : 1,
                                    JB = PB * (1 - oB / jB);
                                  DB.current.style.strokeDashoffset = `${JB}`, GB.current && (GB.current.style.opacity = oB > 0 ? "1" : "0"), yB.current && lB && (yB.current.textContent = `${(oB/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [NB, lB]), (0, jB.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: GB,
                                style: {
                                  ...null !== pB && {
                                    "--scale": pB
                                  },
                                  ...null !== qB && {
                                    "--rotation": `${qB}deg`
                                  }
                                },
                                children: [(0, jB.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, jB.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, jB.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, jB.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: PB,
                                      ref: DB
                                    })]
                                  }), (0, jB.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, jB.jsx)(QB.b, {
                                      text: [{
                                        icon: zB
                                      }],
                                      className: MB()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: ZB
                                      })
                                    })
                                  })]
                                }), (0, jB.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, jB.jsx)(QB.b, {
                                    text: JB,
                                    className: "QTETimedClickLabelText"
                                  }), lB && (0, jB.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: yB
                                  })]
                                })]
                              })
                            })),
                            lB = (0, YB.memo)((function(BB) {
                              let {
                                initialParameters: OB
                              } = BB;
                              const GB = (0, YB.useRef)(null),
                                DB = (0, YB.useRef)(null),
                                yB = (0, YB.useRef)(null),
                                JB = (0, YB.useRef)(!1),
                                MB = OB.description,
                                PB = null === OB || void 0 === OB ? void 0 : OB.icon,
                                zB = (0, oB.f)();
                              return (0, YB.useEffect)((() => {
                                const BB = zB.onFrame((() => {
                                  const BB = zB.getState();
                                  if (!BB.isActive) return;
                                  const OB = BB.state;
                                  if (GB.current) {
                                    const BB = 100 * (OB.catchZonePosition - OB.CO / 2);
                                    GB.current.style.left = `${BB}%`, GB.current.style.width = 100 * OB.CO + "%", OB.isCatching !== JB.current && (JB.current = OB.isCatching, OB.isCatching ? GB.current.classList.add("catching") : GB.current.classList.remove("catching"))
                                  }
                                  DB.current && (DB.current.style.left = 100 * OB.moverPosition + "%"), yB.current && (yB.current.value = OB.progress)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [zB]), (0, jB.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, jB.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, jB.jsx)(QB.b, {
                                    text: MB
                                  })
                                }), (0, jB.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: yB
                                }), (0, jB.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, jB.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: GB
                                  }), (0, jB.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: DB,
                                    children: (0, jB.jsx)("span", {
                                      children: PB && (0, jB.jsx)(QB.b, {
                                        text: [{
                                          icon: PB,
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
                          var pB = GB(641);
                          const qB = (0, YB.memo)((function(BB) {
                              let {
                                initialParameters: OB
                              } = BB;
                              const GB = (0, YB.useRef)(null),
                                DB = OB.label,
                                yB = OB.GG,
                                {
                                  icon: JB,
                                  scale: MB,
                                  rotation: PB
                                } = null !== OB && void 0 !== OB ? OB : {},
                                zB = 100 * (.5 - yB / 2),
                                lB = 100 * yB,
                                qB = (0, oB.f)();
                              return (0, YB.useEffect)((() => {
                                const BB = qB.onFrame((() => {
                                  const BB = qB.getState();
                                  if (!BB.isActive || !GB.current) return;
                                  const OB = BB.state;
                                  GB.current.style.left = 100 * OB.markerPosition + "%"
                                }));
                                return () => {
                                  BB()
                                }
                              }), [qB]), (0, jB.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, pB.Q)(MB) && {
                                    "--scale": MB
                                  },
                                  ...!(0, pB.Q)(PB) && {
                                    "--rotation": `${PB}deg`
                                  }
                                },
                                children: [JB && (0, jB.jsx)(QB.b, {
                                  text: [{
                                    icon: JB
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, jB.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, jB.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${zB}%`,
                                      width: `${lB}%`
                                    }
                                  }), (0, jB.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: GB
                                  })]
                                }), (0, jB.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, jB.jsx)(QB.b, {
                                    text: DB
                                  })
                                })]
                              })
                            })),
                            ZB = (0, YB.memo)((function(BB) {
                              let {
                                initialParameters: OB
                              } = BB;
                              const GB = (0, YB.useRef)(null),
                                [DB, yB] = (0, YB.useState)((() => new Array(OB.DG).fill("pending"))),
                                [JB, MB] = (0, YB.useState)((() => {
                                  const BB = OB.jG;
                                  return (0, pB.Q)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
                                })),
                                PB = OB.label,
                                {
                                  icon: zB
                                } = OB,
                                lB = (0, YB.useRef)(0),
                                qB = (0, YB.useRef)(0),
                                ZB = (0, YB.useRef)([]),
                                NB = (0, oB.f)();
                              return (0, YB.useEffect)((() => {
                                const BB = NB.onFrame((() => {
                                  const BB = NB.getState();
                                  if (!BB.isActive || !GB.current) return;
                                  const OB = BB.state,
                                    YB = 30 + 60 * OB.outerCircleProgress;
                                  if (GB.current.setAttribute("r", String(YB)), !0 === OB.lastClickResult && OB.successes > lB.current) {
                                    GB.current.classList.remove("QTERhythmClickOuterCircle--miss"), GB.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = GB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    ZB.current.push(BB)
                                  } else if (!1 === OB.lastClickResult && OB.misses > qB.current) {
                                    GB.current.classList.remove("QTERhythmClickOuterCircle--hit"), GB.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = GB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    ZB.current.push(BB)
                                  }
                                  OB.successes === lB.current && OB.misses === qB.current || (lB.current = OB.successes, qB.current = OB.misses, yB((BB => {
                                    const GB = [...BB];
                                    for (let YB = 0; YB < OB.DG; YB++) GB[YB] = YB < OB.successes ? "success" : "pending";
                                    return GB
                                  })), MB((BB => {
                                    if (0 === BB.length) return BB;
                                    const GB = [...BB];
                                    for (let YB = 0; YB < GB.length; YB++) GB[YB] = YB < OB.misses ? "miss" : "pending";
                                    return GB
                                  })))
                                }));
                                return () => {
                                  BB();
                                  for (const BB of ZB.current) clearTimeout(BB);
                                  ZB.current = []
                                }
                              }), [NB]), (0, jB.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, jB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: DB.map(((BB, OB) => (0, jB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, OB)))
                                }), (0, jB.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, jB.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, jB.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, jB.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: GB
                                    })]
                                  }), zB && (0, jB.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, jB.jsx)(QB.b, {
                                      text: [{
                                        icon: zB
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), JB.length > 0 && (0, jB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: JB.map(((BB, OB) => (0, jB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, OB)))
                                }), (0, jB.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, jB.jsx)(QB.b, {
                                    text: PB
                                  })
                                })]
                              })
                            }));

                          function NB(BB) {
                            let {
                              qte: OB
                            } = BB;
                            switch (OB.type) {
                              case "progressBar":
                                return (0, jB.jsx)(yB, {
                                  initialParameters: OB.parameters
                                });
                              case "timedClick":
                                return (0, jB.jsx)(zB, {
                                  initialParameters: OB.parameters
                                });
                              case "gravityBar":
                                return (0, jB.jsx)(lB, {
                                  initialParameters: OB.parameters
                                });
                              case "precisionBar":
                                return (0, jB.jsx)(qB, {
                                  initialParameters: OB.parameters
                                });
                              case "rhythmClick":
                                return (0, jB.jsx)(ZB, {
                                  initialParameters: OB.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const RB = (0, YB.memo)((function() {
                            const [BB, OB] = (0, YB.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, DB.f)("qteStateUpdated", (BB => {
                              OB(BB)
                            })), BB.isActive && BB.type ? (0, jB.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, jB.jsx)(NB, {
                                qte: BB
                              })
                            }) : null
                          }))
                        }, 5266: (BB, OB, GB) => {
                          GB.d(OB, {
                            c: () => jB,
                            f: () => yB
                          });
                          var YB = GB(56),
                            DB = GB(1299),
                            QB = GB(5269);
                          const oB = {
                              getState: () => QB.d.getCurrentState(),
                              onFrame: DB.q
                            },
                            jB = (0, YB.createContext)(oB);

                          function yB() {
                            return (0, YB.useContext)(jB)
                          }
                        }, 5337: (BB, OB, GB) => {
                          GB.d(OB, {
                            b: () => iB,
                            c: () => FB
                          });
                          var YB = GB(5345),
                            DB = GB(331);
                          const QB = 120,
                            oB = 260,
                            jB = 1.15,
                            yB = 1.2,
                            JB = 2,
                            MB = 1.08,
                            PB = .8,
                            zB = .95,
                            lB = 8,
                            pB = "[\"')\\]\u300d\u300f\uff09]*",
                            qB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pB}$`),
                            ZB = new RegExp(`[?\uff1f]${pB}$`),
                            NB = new RegExp(`[!\uff01]${pB}$`),
                            RB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            AB = new RegExp(`[${WB}]`),
                            VB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
                            SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function nB(BB) {
                            let OB = 2166136261;
                            for (let GB = 0; GB < BB.length; GB++) OB ^= BB.charCodeAt(GB), OB = Math.imul(OB, 16777619);
                            return (OB >>> 0) / 4294967295 * 2 - 1
                          }

                          function UB(BB) {
                            var OB;
                            if (AB.test(BB)) return 1;
                            const GB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              YB = GB.replace(/[^0-9]/g, "");
                            if (YB.length > 0 && !/\p{L}/u.test(GB)) return Math.min(YB.length, 4);
                            const DB = null !== (OB = GB.match(SB)) && void 0 !== OB ? OB : [];
                            if (0 === DB.length) {
                              var QB, oB;
                              const BB = null !== (QB = null === (oB = GB.match(/\p{L}/gu)) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0;
                              return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), lB)
                            }
                            const jB = GB.replace(/[^\p{L}]/gu, ""),
                              yB = DB.length > 1 && "e" === DB.at(-1) && jB.endsWith("e") && !jB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
                            return Math.min(DB.length - (yB ? 1 : 0), lB)
                          }

                          function fB(BB) {
                            return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function kB(BB) {
                            const OB = BB.replace(/[^\p{L}]/gu, "");
                            return OB.length >= 2 && OB === OB.toUpperCase() && OB !== OB.toLowerCase()
                          }

                          function dB(BB, OB) {
                            var GB;
                            const lB = OB && (0, YB.j)(OB),
                              pB = null !== (GB = null === lB || void 0 === lB ? void 0 : lB.syllableMs) && void 0 !== GB ? GB : YB.d,
                              WB = function(BB) {
                                const OB = [];
                                for (const YB of (0, DB.hc)(BB))
                                  if ("string" === typeof YB)
                                    for (const BB of YB.split(/(\s+)/)) {
                                      if ("" === BB) continue;
                                      if (/^\s+$/.test(BB)) {
                                        OB.push({
                                          kind: "space",
                                          text: BB
                                        });
                                        continue
                                      }
                                      if (!AB.test(BB)) {
                                        OB.push({
                                          kind: "word",
                                          text: BB,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let YB = !0;
                                      for (const DB of null !== (GB = BB.match(VB)) && void 0 !== GB ? GB : []) {
                                        var GB;
                                        const BB = OB.at(-1);
                                        YB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || AB.test(DB) || /[\p{L}\p{N}]/u.test(DB) ? (YB || OB.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), OB.push({
                                          kind: "word",
                                          text: DB,
                                          delayMs: 0
                                        }), YB = !1) : BB.text += DB
                                      }
                                    } else OB.push({
                                      kind: "icon",
                                      text: YB.icon,
                                      delayMs: 0
                                    });
                                return OB
                              }(BB),
                              SB = [];
                            let dB = [];
                            for (const YB of WB) "space" !== YB.kind && (dB.push(YB), qB.test(YB.text) && (SB.push(dB), dB = []));
                            SB.push(dB);
                            const KB = [];
                            let uB = 0;
                            for (const YB of SB) {
                              var mB, IB;
                              const BB = null !== (mB = null === (IB = YB.at(-1)) || void 0 === IB ? void 0 : IB.text) && void 0 !== mB ? mB : "",
                                OB = ZB.test(BB),
                                GB = NB.test(BB),
                                DB = YB.map((BB => "word" === BB.kind ? UB(BB.text) : 1)),
                                WB = DB.findLastIndex((BB => BB > 0));
                              for (const [ZB, NB] of YB.entries()) {
                                const BB = "word" === NB.kind,
                                  YB = DB[ZB];
                                NB.delayMs = uB;
                                for (let DB = 0; lB && DB < YB; DB++) {
                                  const {
                                    intonation: QB
                                  } = lB;
                                  let oB = WB > 0 ? -QB.declineSemitones * (ZB / WB) : 0;
                                  oB += nB(`${fB(NB.text)}|${DB}`) * QB.variationSemitones;
                                  const qB = Math.min(1, QB.variationSemitones);
                                  let RB = lB.glideSemitones,
                                    AB = 1;
                                  GB && (oB += QB.exclaimLiftSemitones, AB *= jB), OB && ZB === WB && (oB += QB.questionRiseSemitones * (YB > 1 ? .5 + .5 * DB / (YB - 1) : 1), DB === YB - 1 && (RB = Math.abs(RB) + QB.questionRiseSemitones / 2)), BB && kB(NB.text) && (oB += JB * qB, AB *= yB), YB > 1 && 0 === DB && (oB += PB * qB, AB *= MB), KB.push({
                                    atMs: uB + DB * pB,
                                    semitones: oB,
                                    glideSemitones: RB,
                                    durationMs: DB < YB - 1 ? Math.min(lB.durationMs, pB * zB) : lB.durationMs,
                                    level: AB
                                  })
                                }
                                uB += YB * pB + (qB.test(NB.text) ? oB : RB.test(NB.text) ? QB : 0)
                              }
                            }
                            return {
                              pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
                                kind: "icon",
                                icon: BB.text,
                                delayMs: BB.delayMs
                              } : {
                                kind: "word",
                                text: BB.text,
                                delayMs: BB.delayMs
                              })),
                              blips: KB
                            }
                          }
                          var KB = GB(1175),
                            uB = GB(1253),
                            mB = GB(2027);

                          function IB(BB) {
                            if ("string" === typeof BB) return BB;
                            const OB = uB.e.get().getCurrentLanguageCode();
                            return (0, KB.x)(OB, BB.translationKey, (0, KB.v)(BB.params, mB.d.shown))
                          }

                          function FB(BB) {
                            const OB = void 0 === BB.voice ? null : (0, YB.k)(BB.voice),
                              GB = OB && (0, YB.j)(OB);
                            return {
                              plan: dB(IB(BB.line), GB),
                              synth: GB
                            }
                          }

                          function iB(BB) {
                            const OB = [];
                            let GB = [];
                            for (const [DB, QB] of BB.entries()) {
                              var YB;
                              "space" === QB.kind && (" " !== QB.text || "icon" !== (null === (YB = BB[DB + 1]) || void 0 === YB ? void 0 : YB.kind)) ? (GB.length > 0 && OB.push(GB), OB.push([QB]), GB = []) : GB.push(QB)
                            }
                            return GB.length > 0 && OB.push(GB), OB
                          }
                        }, 5349: (BB, OB, GB) => {
                          GB.d(OB, {
                            c: () => MB,
                            f: () => PB
                          });
                          var YB = GB(5353),
                            DB = GB(16);
                          const QB = .25,
                            oB = .85,
                            jB = .02,
                            yB = .01;

                          function JB(BB, OB, GB, YB, DB, QB, jB) {
                            const {
                              waveform: yB,
                              pitchHz: JB,
                              attackMs: MB,
                              releaseMs: PB,
                              lowpassHz: zB
                            } = GB, lB = DB + YB.durationMs / 1e3, pB = JB * 2 ** (YB.semitones / 12), qB = BB.createOscillator();
                            qB.type = yB, qB.frequency.setValueAtTime(pB, DB), qB.frequency.exponentialRampToValueAtTime(pB * 2 ** (YB.glideSemitones / 12), lB);
                            const ZB = DB + Math.min(MB, YB.durationMs) / 1e3,
                              NB = BB.createGain();
                            NB.gain.setValueAtTime(0, DB), NB.gain.linearRampToValueAtTime(QB, ZB), NB.gain.linearRampToValueAtTime(QB * oB, Math.max(ZB, lB - PB / 1e3)), NB.gain.linearRampToValueAtTime(0, lB);
                            const RB = [qB];
                            if (null !== zB) {
                              const OB = BB.createBiquadFilter();
                              OB.type = "lowpass", OB.frequency.value = zB, RB.push(OB)
                            }
                            RB.push(NB, OB);
                            for (let oB = 1; oB < RB.length; oB++) RB[oB - 1].connect(RB[oB]);
                            return qB.onended = () => {
                              for (const BB of RB.slice(0, -1)) BB.disconnect();
                              jB()
                            }, qB.start(DB), qB.stop(lB), qB
                          }

                          function MB(BB, OB, GB, YB, DB, oB) {
                            if (0 === YB.length) return oB(), () => {};
                            const MB = QB * GB.volume * DB,
                              PB = BB.createGain();
                            PB.connect(OB);
                            const zB = BB.currentTime + jB,
                              lB = new Set;
                            for (const QB of YB) {
                              const OB = JB(BB, PB, GB, QB, zB + QB.atMs / 1e3, MB * QB.level, (() => {
                                lB.delete(OB), 0 === lB.size && (PB.disconnect(), oB())
                              }));
                              lB.add(OB)
                            }
                            return () => {
                              const OB = BB.currentTime;
                              PB.gain.setTargetAtTime(0, OB, yB);
                              for (const BB of lB) try {
                                BB.stop(OB + 5 * yB)
                              } catch {}
                            }
                          }

                          function PB(BB, OB) {
                            var GB;
                            const QB = YB.Howler.ctx,
                              oB = YB.Howler.masterGain;
                            if (!QB || !oB || !DB.c.get("soundOnFromAd")) return () => {};
                            const jB = YB.Howler;
                            return null === (GB = jB._autoResume) || void 0 === GB || GB.call(jB), MB(QB, oB, BB, OB, DB.c.get("soundVolume"), (() => {
                              var BB;
                              null === (BB = jB._autoSuspend) || void 0 === BB || BB.call(jB)
                            }))
                          }
                        }, 5322: (BB, OB, GB) => {
                          GB.d(OB, {
                            b: () => jB,
                            d: () => DB,
                            g: () => yB,
                            h: () => oB,
                            i: () => QB
                          });
                          var YB = GB(5320);
                          const DB = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            QB = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            oB = `${YB.l} lists every page of the Bloxd Code API docs.`;

                          function jB(BB, OB) {
                            return `${BB.url}${encodeURIComponent(OB.toWellFormed())}`
                          }

                          function yB(BB) {
                            const OB = jB(DB, BB);
                            return OB.length <= 3e4 ? {
                              url: OB,
                              sendsPrompt: !0
                            } : {
                              url: new URL(DB.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5353: (BB, OB, GB) => {
                          GB.r(OB), GB.d(OB, {
                            Howl: () => DB.Howl,
                            Howler: () => DB.Howler,
                            musicOutput: () => ZB,
                            readyAudioContext: () => NB
                          });
                          var YB, DB = GB(5362),
                            QB = GB(3873),
                            oB = GB(5073);
                          const jB = DB.Howler;

                          function yB() {
                            var BB, OB;
                            if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
                            const GB = navigator.audioSession;
                            let YB;
                            "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
                            try {
                              YB = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const DB = YB.createGain();
                            DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
                          }
                          jB._mobileUnloaded = !0;
                          const JB = jB.volume.bind(DB.Howler);
                          jB.volume = function() {
                            return yB(), JB(...arguments)
                          };
                          const MB = jB.mute.bind(DB.Howler);
                          jB.mute = BB => (yB(), MB(BB));
                          const PB = DB.Howl.prototype,
                            zB = PB.init;

                          function lB() {
                            for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
                              const BB = new Audio;
                              BB._unlocked = !0, jB._releaseHtml5Audio(BB)
                            }
                            for (const OB of jB._howls)
                              if (!OB._webAudio)
                                for (const GB of OB._getSoundIds()) {
                                  var BB;
                                  const YB = null === (BB = OB._soundById(GB)) || void 0 === BB ? void 0 : BB._node;
                                  YB && !YB._unlocked && (YB._unlocked = !0, YB.load())
                                }
                          }
                          PB.init = function(BB) {
                            return yB(), zB.call(this, BB)
                          }, (0, oB.h)() && (jB._unlockAudio = () => {
                            const BB = jB.ctx;
                            if (jB._audioUnlocked || !BB) return;
                            jB.autoUnlock = !1;
                            const OB = BB.createBuffer(1, 1, 22050);
                            jB._scratchBuffer = OB;
                            const GB = new AbortController;
                            let YB = "afterPaint";
                            const DB = () => {
                                var YB;
                                if (jB._audioUnlocked) return;
                                null === (YB = jB._autoResume) || void 0 === YB || YB.call(jB);
                                const DB = BB.createBufferSource();
                                DB.buffer = OB, DB.connect(BB.destination), DB.start(0), BB.resume().catch((() => {})), DB.onended = () => {
                                  DB.disconnect(0), jB._audioUnlocked = !0, GB.abort();
                                  for (const BB of jB._howls) BB._emit("unlock")
                                }
                              },
                              yB = () => {
                                lB(), DB()
                              },
                              JB = OB => {
                                if (lB(), "inTap" === YB) {
                                  if ("running" === BB.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), DB()
                                } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
                                  YB = "inTap", DB()
                                })))
                              };
                            for (const QB of ["touchstart", "touchend"]) document.addEventListener(QB, yB, {
                              capture: !0,
                              signal: GB.signal
                            });
                            for (const QB of oB.c) document.addEventListener(QB, JB, {
                              capture: !0,
                              signal: GB.signal
                            })
                          });
                          let pB = 0;
                          const qB = null === (YB = jB._autoSuspend) || void 0 === YB ? void 0 : YB.bind(DB.Howler);

                          function ZB() {
                            NB();
                            const {
                              ctx: BB,
                              masterGain: OB
                            } = jB;
                            return BB && OB ? {
                              ctx: BB,
                              destination: OB,
                              holdAwake: BB => {
                                var OB, GB;
                                (pB += BB ? 1 : -1, BB) ? null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB): null === (GB = jB._autoSuspend) || void 0 === GB || GB.call(jB)
                              },
                              wake: () => {
                                var OB;
                                "running" !== BB.state && (null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB), BB.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function NB() {
                            var BB;
                            (jB.volume(), jB.ctx && jB.autoUnlock) && (null === (BB = jB._unlockAudio) || void 0 === BB || BB.call(jB))
                          }
                          qB && (jB._autoSuspend = () => pB > 0 ? DB.Howler : qB())
                        }, 5366: (BB, OB, GB) => {
                          function YB(BB) {
                            return {
                              notAfter: BB
                            }
                          }
                          GB.d(OB, {
                            C: () => PB,
                            b: () => yB,
                            f: () => JB,
                            j: () => jB,
                            n: () => YB,
                            p: () => DB,
                            t: () => QB,
                            w: () => oB,
                            z: () => MB
                          });
                          const DB = YB("\\w$."),
                            QB = YB("\\w.,");

                          function oB(BB) {
                            return OB => yB(OB, BB)
                          }

                          function jB(BB) {
                            return OB => !BB.test(OB.input.slice(0, OB.index))
                          }

                          function yB(BB, OB) {
                            return BB.index > 0 && new RegExp(`[${OB}]`).test(BB.input[BB.index - 1])
                          }

                          function JB(BB, OB, GB) {
                            return function(BB) {
                              return void 0 !== BB && "function" !== typeof BB
                            }(GB) ? function(BB, OB, GB) {
                              const YB = OB.flags.replace(/[gy]/g, ""),
                                DB = new RegExp(`[^${GB}](?:${OB.source})`, `${YB}g`),
                                QB = [],
                                oB = GB => {
                                  const YB = GB.index + GB[0].length;
                                  return ("" === GB[0] ? zB(BB, OB, YB) : YB) - 1
                                },
                                jB = new RegExp(`(?:${OB.source})`, `${YB}y`).exec(BB);
                              if (jB) {
                                if (QB.push(jB), !OB.global) return QB;
                                DB.lastIndex = oB(jB)
                              }
                              for (let yB = DB.exec(BB); yB; yB = DB.exec(BB)) {
                                const GB = zB(BB, OB, yB.index) - yB.index;
                                if (yB[0] = yB[0].slice(GB), yB.index += GB, QB.push(yB), !OB.global) break;
                                DB.lastIndex = oB(yB)
                              }
                              return QB
                            }(BB, OB, GB.notAfter) : function(BB, OB, GB) {
                              const YB = new RegExp(OB.source, `${OB.flags.replace(/[gy]/g,"")}g`),
                                DB = [];
                              for (let QB = YB.exec(BB); QB; QB = YB.exec(BB))
                                if (!GB || GB(QB)) {
                                  if (DB.push(QB), !OB.global) break;
                                  "" === QB[0] && (YB.lastIndex = zB(BB, OB, YB.lastIndex))
                                } else YB.lastIndex = zB(BB, OB, QB.index);
                              return DB
                            }(BB, OB, GB)
                          }

                          function MB(BB, OB, GB, YB) {
                            let DB = "",
                              QB = 0;
                            for (const oB of JB(BB, OB, GB)) DB += BB.slice(QB, oB.index) + YB(oB), QB = oB.index + oB[0].length;
                            return DB + BB.slice(QB)
                          }

                          function PB(BB, OB, GB) {
                            const YB = [];
                            let DB = 0;
                            for (const QB of JB(BB, OB, GB)) YB.push(BB.slice(DB, QB.index)), DB = QB.index + QB[0].length;
                            return [...YB, BB.slice(DB)]
                          }

                          function zB(BB, OB, GB) {
                            var YB;
                            return GB + (OB.unicode && (null !== (YB = BB.codePointAt(GB)) && void 0 !== YB ? YB : 0) > 65535 ? 2 : 1)
                          }
                        }, 5320: (BB, OB, GB) => {
                          GB.d(OB, {
                            c: () => DB,
                            e: () => yB,
                            h: () => QB,
                            l: () => oB,
                            n: () => jB,
                            q: () => ZB,
                            r: () => MB,
                            s: () => PB,
                            v: () => qB,
                            y: () => lB
                          });
                          var YB = GB(1650);
                          const DB = 24e3,
                            QB = "/docs/llms.txt",
                            oB = `${YB.d}${QB}`,
                            jB = "/llms.txt",
                            yB = "/docs/llms-full.txt";

                          function JB(BB) {
                            return BB || "index"
                          }

                          function MB(BB) {
                            return `/docs/${JB(BB)}.md`
                          }

                          function PB(BB, OB) {
                            return `/docs/${JB(BB)}/${OB+1}.md`
                          }
                          const zB = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function lB(BB) {
                            const OB = zB.exec(BB);
                            return null === OB ? null : {
                              name: OB[1],
                              part: void 0 === OB[2] ? null : Number(OB[2])
                            }
                          }
                          const pB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function qB(BB) {
                            const OB = pB.exec(BB);
                            if (null === OB) return null;
                            const [, GB = "", YB] = OB;
                            return void 0 === YB ? MB(GB) : PB(GB, Number(YB) - 1)
                          }

                          function ZB(BB) {
                            return `/docsHtml/${JB(BB)}.html`
                          }
                        }, 5345: (BB, OB, GB) => {
                          GB.d(OB, {
                            d: () => DB,
                            e: () => YB,
                            g: () => QB,
                            j: () => yB,
                            k: () => oB
                          });
                          const YB = ["sine", "triangle", "square", "sawtooth"],
                            DB = 55,
                            QB = {
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

                          function oB(BB) {
                            return "string" !== typeof BB ? BB : Object.hasOwn(QB, BB) ? QB[BB] : null
                          }

                          function jB(BB, OB, GB) {
                            return Math.min(GB, Math.max(OB, BB))
                          }

                          function yB(BB) {
                            const OB = jB(BB.durationMs, 10, 500),
                              GB = jB(BB.attackMs, 0, OB),
                              {
                                intonation: DB
                              } = BB;
                            return {
                              waveform: YB.includes(BB.waveform) ? BB.waveform : "sine",
                              pitchHz: jB(BB.pitchHz, 20, 4e3),
                              glideSemitones: jB(BB.glideSemitones, -24, 24),
                              durationMs: OB,
                              attackMs: GB,
                              releaseMs: jB(BB.releaseMs, 0, OB - GB),
                              lowpassHz: null === BB.lowpassHz ? null : jB(BB.lowpassHz, 20, 2e4),
                              volume: jB(BB.volume, 0, 2),
                              intonation: {
                                variationSemitones: jB(DB.variationSemitones, 0, 6),
                                declineSemitones: jB(DB.declineSemitones, 0, 12),
                                questionRiseSemitones: jB(DB.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: jB(DB.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: jB(BB.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const BB in modules) Object.freeze(modules[BB]);