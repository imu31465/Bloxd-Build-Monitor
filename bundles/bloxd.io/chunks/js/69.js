export const id = 69;
export const ids = [69, 85];
export const modules = {
    4226: (BB, TB, dB) => {
      dB.d(TB, {
        e: () => HB,
        h: () => EB
      });
      var VB = dB(933),
        yB = dB.n(VB),
        pB = dB(62),
        lB = dB(1078),
        JB = dB(4232),
        YB = dB(1657),
        gB = dB(2139),
        oB = dB(4240),
        kB = dB(980);
      const LB = new WeakMap;
      let OB = 0;

      function DB(BB) {
        let TB = LB.get(BB);
        return void 0 === TB && (TB = OB++, LB.set(BB, TB)), TB
      }

      function uB(BB) {
        let {
          piece: TB
        } = BB;
        return "space" === TB.kind ? (0, kB.jsx)(kB.Fragment, {
          children: TB.text
        }) : (0, kB.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${TB.delayMs}ms`
          },
          children: (0, kB.jsx)(JB.d, {
            text: "icon" === TB.kind ? `[[${TB.icon}]]` : TB.text
          })
        })
      }

      function HB(BB) {
        let {
          display: TB
        } = BB;
        const {
          selectedLanguage: dB
        } = (0, lB.z)(), VB = (0, pB.useMemo)((() => (0, oB.e)((0, oB.f)(TB).plan.pieces)), [TB, dB.code]);
        return (0, kB.jsxs)("div", {
          className: yB()("Dialogue", {
            DialogueAnimateIn: !1 !== TB.animateIn
          }),
          children: [TB.speakerName && (0, kB.jsx)(YB.e, {
            text: TB.speakerName,
            className: "DialogueSpeaker"
          }), (0, kB.jsx)("p", {
            className: "DialogueLine",
            children: VB.map(((BB, TB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, kB.jsx)("span", {
              className: "DialogueGlue",
              children: BB.map(((BB, TB) => (0, kB.jsx)(uB, {
                piece: BB
              }, TB)))
            }, TB)))
          })]
        })
      }
      const EB = (0, pB.memo)((function() {
        const BB = (0, gB.j)("dialogue");
        return (0, kB.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: BB && (0, kB.jsx)(HB, {
            display: BB
          }, DB(BB))
        })
      }))
    },
    4100: (BB, TB, dB) => {
        dB.r(TB), dB.d(TB, {
          default: () => Bl
        });
        var VB = dB(62),
          yB = dB(933),
          pB = dB.n(yB),
          lB = dB(1416),
          JB = dB(1422),
          YB = dB(21),
          gB = dB(72),
          oB = dB(4105),
          kB = dB(4117),
          LB = dB(4122),
          OB = dB(3817),
          DB = dB(980);
        const uB = "/textures/docs/icons";

        function HB(BB) {
          let {
            name: TB,
            isTinted: dB,
            className: VB,
            style: yB
          } = BB;
          const lB = `${uB}/${TB}.png`;
          return dB ? (0, DB.jsxs)("span", {
            className: pB()("DocsPixelIcon", "Tinted", VB),
            "aria-hidden": "true",
            style: yB,
            children: [(0, DB.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${lB}")`,
                WebkitMaskImage: `url("${lB}")`
              }
            }), (0, DB.jsx)("img", {
              src: lB,
              alt: ""
            })]
          }) : (0, DB.jsx)("img", {
            className: pB()("DocsPixelIcon", VB),
            src: lB,
            alt: "",
            "aria-hidden": "true",
            style: yB
          })
        }
        const EB = 1500;

        function vB() {
          const [BB, TB] = (0, VB.useState)(null);
          (0, VB.useEffect)((() => {
            if (null === BB) return;
            const dB = setTimeout((() => {
              TB(null)
            }), EB);
            return () => {
              clearTimeout(dB)
            }
          }), [BB]);
          return [BB, BB => {
            (0, OB.c)(BB).then((() => {
              TB({
                text: BB,
                failed: !1
              })
            }), (dB => {
              console.error("Could not copy to the clipboard", dB), TB({
                text: BB,
                failed: !0
              })
            }))
          }]
        }

        function mB(BB) {
          let {
            text: TB,
            label: dB,
            className: VB
          } = BB;
          const [yB, lB] = vB(), JB = !1 === (null === yB || void 0 === yB ? void 0 : yB.failed);
          return (0, DB.jsxs)("button", {
            type: "button",
            className: pB()("DocsCopyButton", VB, {
              Copied: JB
            }),
            title: `Copy ${TB.length>40?"to clipboard":TB}`,
            "aria-label": dB ? void 0 : `Copy ${TB}`,
            onClick: BB => {
              BB.stopPropagation(), lB(TB)
            },
            children: [(0, DB.jsx)(HB, {
              name: JB ? "check" : "copy"
            }), dB && (0, DB.jsx)("span", {
              children: JB ? "Copied" : null !== yB && void 0 !== yB && yB.failed ? "Copy failed" : dB
            })]
          })
        }
        oB.c.registerLanguage("javascript", kB.b), oB.c.registerLanguage("typescript", LB.d);
        const iB = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          NB = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          tB = 24;

        function fB(BB) {
          let {
            code: TB,
            lang: dB,
            compact: yB = !1
          } = BB;
          const lB = (0, VB.useMemo)((() => function(BB, TB) {
              const dB = iB[TB];
              return dB ? oB.c.highlight(BB, {
                language: dB
              }).value : BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(TB, dB)), [TB, dB]),
            JB = TB.split("\n").length,
            YB = !yB && JB > tB + 6,
            [gB, kB] = (0, VB.useState)(!1),
            LB = iB[dB];
          return (0, DB.jsxs)("div", {
            className: pB()("DocsCodeBlock", {
              Compact: yB,
              Collapsed: YB && !gB
            }),
            children: [!yB && (0, DB.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, DB.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: LB ? NB[LB] : "Text"
              }), (0, DB.jsx)(mB, {
                text: TB,
                label: "Copy"
              })]
            }), (0, DB.jsx)("pre", {
              children: (0, DB.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: lB
                }
              })
            }), YB && (0, DB.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": gB,
              onClick: () => {
                kB(!gB)
              },
              children: [(0, DB.jsx)(HB, {
                name: gB ? "chevron-up" : "chevron-down"
              }), gB ? "Show less" : `Show all ${JB} lines`]
            })]
          })
        }
        var sB = dB(4131);
        var MB = dB(4133);
        const zB = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function wB(BB) {
          const TB = new Map;
          let dB, VB = [],
            yB = !1;
          const pB = () => {
            dB && TB.set(dB.name, dB.lines.join("\n").trimEnd())
          };
          for (const lB of BB.split("\n")) {
            const BB = lB.match(zB);
            yB || lB.startsWith("/*") ? (yB || (pB(), dB = void 0), VB.push(lB), yB = !lB.includes("*/")) : BB ? (pB(), dB = {
              name: BB[1],
              lines: [...VB, lB]
            }, VB = []) : dB && (lB.startsWith(" ") || lB.startsWith("\t") || /^[}\])|]/.test(lB)) ? dB.lines.push(lB) : dB && "" !== lB.trim() && (pB(), dB = void 0)
          }
          return pB(), TB
        }

        function UB(BB) {
          return "methods" === BB || "callbacks" === BB || "settings" === BB
        }
        const FB = {
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
              setterSnippet: (BB, TB) => `api.setClientOption(playerId, "${BB}", ${TB})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (BB, TB) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${BB}", ${TB})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (BB, TB) => `api.setMobSetting(mobId, "${BB}", ${TB})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (BB, TB) => `api.setVehicleSetting(vehicleId, "${BB}", ${TB})`
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
          KB = {
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

        function rB(BB) {
          return BB.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function IB(BB) {
          let TB = !1;
          return BB.split("\n").map((BB => (BB.startsWith("```") && (TB = !TB), !TB && /^#{3,} /.test(BB) ? BB.slice(1) : BB))).join("\n")
        }

        function cB(BB) {
          return "readme" === BB ? "getting-started" : rB(BB)
        }
        const SB = "## Glossary of Referenced Types";
        const PB = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...MB.d.flatMap((BB => {
            const TB = {
              id: BB.id,
              slug: cB(BB.id),
              title: BB.title,
              markdown: BB.content,
              ...FB[BB.id]
            };
            if ("readme" === BB.id) return function(BB) {
              const TB = BB.markdown.indexOf(SB),
                dB = BB.markdown.indexOf("\n```", TB),
                VB = BB.markdown.indexOf("\n```", dB + 1);
              if (-1 === TB || -1 === dB || -1 === VB) throw new Error(`Getting started has no "${SB}" section with a code block`);
              const yB = BB.markdown.slice(TB + 31, dB).trim(),
                pB = [...wB(BB.markdown.slice(BB.markdown.indexOf("\n", dB + 1) + 1, VB))].map((BB => {
                  let [TB, dB] = BB;
                  return `## ${TB}\n\n\`\`\`ts\n${dB}\n\`\`\`\n`
                })),
                lB = BB.markdown.slice(BB.markdown.indexOf("\n", VB + 1) + 1);
              return [{
                ...BB,
                markdown: `${BB.markdown.slice(0,TB)}${lB}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${yB}\n\n${pB.join("\n")}`
              }]
            }(TB);
            if ("howTo" === BB.id) {
              const {
                parent: BB,
                guides: dB
              } = function(BB) {
                const [TB, ...dB] = BB.markdown.split(/^(?=## )/m), VB = [TB], yB = [];
                for (const lB of dB) {
                  var pB;
                  const TB = lB.indexOf("\n"),
                    dB = lB.slice(3, TB).trim(),
                    JB = lB.slice(TB + 1);
                  if (!JB.includes("```")) {
                    VB.push(lB);
                    continue
                  }
                  const YB = null !== (pB = KB[dB]) && void 0 !== pB ? pB : {
                    icon: "lightbulb",
                    summary: `How to use ${dB.toLowerCase()} in World Code.`
                  };
                  yB.push({
                    id: `${BB.id}${dB.split(/[^A-Za-z0-9]+/).map((BB=>BB.charAt(0).toUpperCase()+BB.slice(1))).join("")}`,
                    slug: `${BB.slug}-${rB(dB)}`,
                    title: dB,
                    layout: "article",
                    sourceAnchor: (0, sB.m)(dB),
                    markdown: `# ${dB}\n\n${IB(JB)}`,
                    ...YB
                  })
                }
                return {
                  parent: {
                    ...BB,
                    markdown: VB.join(""),
                    childPageIds: yB.map((BB => BB.id))
                  },
                  guides: yB
                }
              }(TB);
              return [BB, ...dB]
            }
            return [TB]
          }))],
          QB = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...PB.filter((BB => void 0 !== BB.sourceAnchor)).map((BB => BB.id))]
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

        function RB(BB) {
          return PB.find((TB => TB.id === BB))
        }
        const aB = new Map;

        function ZB(BB) {
          let TB = aB.get(BB.id);
          return TB || (TB = (0, sB.p)(BB.markdown, "changelog" === BB.layout ? 3 : 2), aB.set(BB.id, TB)), TB
        }

        function XB(BB, TB) {
          return ZB(BB).sections.some((BB => BB.heading.anchor === TB || BB.blocks.some((BB => "heading" === BB.kind && BB.anchor === TB))))
        }

        function WB(BB) {
          const [TB, ...dB] = BB.replace(/^#/, "").split("-"), VB = PB.find((BB => BB.id === TB));
          if (!VB) return null;
          const yB = dB.length > 0 ? (0, sB.m)(dB.join("-")) : "";
          for (const lB of null !== (pB = VB.childPageIds) && void 0 !== pB ? pB : []) {
            var pB;
            const BB = RB(lB);
            if (BB.sourceAnchor === yB) return {
              page: BB,
              anchor: ""
            };
            if (XB(BB, yB)) return {
              page: BB,
              anchor: yB
            }
          }
          return {
            page: VB,
            anchor: yB
          }
        }
        const hB = {
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

        function CB(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const VB = TB.slug ? `${BB}/${TB.slug}` : BB;
          return dB ? `${VB}#${dB}` : VB
        }
        var GB = dB(4147);
        const qB = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          xB = new Set(["GameApi", "Console", "_TypeOf"]),
          jB = 4;

        function AB(BB) {
          let TB = BB.length;
          for (; TB > 0 && "" === BB[TB - 1].trim();) TB--;
          return BB.slice(0, TB)
        }

        function bB(BB) {
          var TB;
          const dB = AB(BB);
          if (null === (TB = dB.at(-1)) || void 0 === TB || !TB.trimEnd().endsWith("*/")) return {
            lines: dB,
            doc: ""
          };
          const VB = dB.findLastIndex((BB => BB.startsWith("/**")));
          return -1 === VB ? {
            lines: dB,
            doc: ""
          } : {
            lines: AB(dB.slice(0, VB)),
            doc: dB.slice(VB).join("\n")
          }
        }

        function nB(BB) {
          var TB;
          const dB = BB.split("\n"),
            VB = dB.flatMap(((BB, TB) => qB.test(BB) ? [TB] : []));
          let yB = bB(dB.slice(0, null !== (TB = VB[0]) && void 0 !== TB ? TB : dB.length)).doc;
          return VB.map(((BB, TB) => {
            var pB;
            const lB = bB(dB.slice(BB, null !== (pB = VB[TB + 1]) && void 0 !== pB ? pB : dB.length)),
              JB = {
                name: dB[BB].match(qB)[1],
                doc: yB,
                lines: lB.lines
              };
            return yB = lB.doc, JB
          }))
        }

        function eB(BB) {
          var TB;
          const dB = BB.match(/^readonly \[([\s\S]*)\]$/);
          return dB ? null !== (TB = dB[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== TB ? TB : [] : null
        }

        function BT(BB) {
          if (!BB.startsWith("{") || !BB.endsWith("}")) return null;
          const TB = {
              keys: [],
              values: []
            },
            dB = BB => {
              const dB = BB.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              dB && (TB.keys.push(dB[1].startsWith('"') ? dB[1] : `"${dB[1]}"`), TB.values.push(dB[2].trim()))
            };
          let VB = 0,
            yB = "";
          for (const pB of BB.slice(1, -1)) "{[(".includes(pB) ? VB++ : "}])".includes(pB) && VB--, ";" === pB && 0 === VB ? (dB(yB), yB = "") : yB += pB;
          return dB(yB), TB
        }

        function TT(BB) {
          return BB.length > jB ? `\n\t| ${BB.join("\n\t| ")}` : BB.join(" | ")
        }

        function dT(BB, TB) {
          const dB = function(BB, TB) {
            return BB.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((BB, dB) => {
              var VB;
              const yB = null === (VB = TB.get(dB)) || void 0 === VB ? void 0 : VB.object;
              return yB ? TT(yB.values) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((BB, dB) => {
              var VB, yB;
              const pB = null === (VB = TB.get(dB)) || void 0 === VB || null === (yB = VB.object) || void 0 === yB ? void 0 : yB.values.map(eB);
              return null !== pB && void 0 !== pB && pB.every((BB => null !== BB)) ? TT([...new Set(pB.flat())]) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((BB, dB) => {
              var VB;
              const yB = null === (VB = TB.get(dB)) || void 0 === VB ? void 0 : VB.members;
              return yB ? TT(yB) : BB
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((BB, dB) => {
              var VB;
              const yB = null === (VB = TB.get(dB)) || void 0 === VB ? void 0 : VB.object;
              return yB ? TT(yB.keys) : BB
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((BB, dB) => {
              var VB, yB;
              return null !== (VB = null === (yB = TB.get(dB)) || void 0 === yB ? void 0 : yB.text) && void 0 !== VB ? VB : BB
            }))
          }(BB.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), TB);
          return [BB.doc, dB].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function VT(BB) {
          const TB = nB(BB),
            dB = function(BB) {
              const TB = new Map,
                dB = BB.find((BB => "_TypeOf" === BB.name));
              let VB = null;
              const yB = () => {
                if (VB) {
                  const BB = VB.lines.join("\n");
                  TB.set(VB.name, {
                    text: BB,
                    members: eB(BB),
                    object: BT(BB)
                  })
                }
              };
              for (const pB of dB.lines.slice(1, -1)) {
                const BB = pB.match(/^\t([\w$]+): (.+)$/);
                BB ? (yB(), VB = {
                  name: BB[1],
                  lines: [BB[2]]
                }) : VB && VB.lines.push(pB.replace(/^\t/, ""))
              }
              return yB(), TB
            }(TB),
            VB = new Map;
          for (const yB of TB) xB.has(yB.name) || VB.has(yB.name) || VB.set(yB.name, dT(yB, dB));
          return VB
        }
        let yT, pT, lT;

        function JT() {
          return pT ??= function(BB) {
            const TB = nB(BB).find((BB => "GameApi" === BB.name)),
              dB = new Map,
              VB = TB.lines;
            for (let pB = 0; pB < VB.length; pB++) {
              var yB;
              if (!VB[pB].trimStart().startsWith("/**")) continue;
              const BB = pB;
              for (; pB < VB.length && !VB[pB].includes("*/");) pB++;
              const TB = null === (yB = VB[pB + 1]) || void 0 === yB ? void 0 : yB.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!TB) continue;
              let lB = null;
              const JB = [];
              let YB = "description",
                gB = !1;
              for (const dB of VB.slice(BB, pB + 1).join("\n").split("\n").map((BB => BB.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const BB = dB.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                BB ? (lB = BB[1].trim(), YB = "deprecation") : dB.startsWith("@") ? (YB = "otherTag", gB = !0) : "" === dB.trim() ? gB || (YB = "description", JB.push(dB)) : "deprecation" !== YB || /^[A-Z]/.test(dB.trim()) ? "otherTag" !== YB && (YB = "description", JB.push(dB)) : lB = `${lB} ${dB.trim()}`.trim()
              }
              dB.set(TB[1], {
                deprecation: lB,
                description: JB.join("\n").trim()
              })
            }
            return dB
          }(GB.default), pT
        }

        function YT() {
          if (!lT) {
            lT = new Map;
            for (const BB of PB) {
              const TB = (0, sB.n)(ZB(BB)).flatMap((BB => BB.blocks));
              for (const BB of (0, sB.i)(TB))
                if ("ts" === BB.lang || "typescript" === BB.lang)
                  for (const [TB, dB] of wB(BB.code)) lT.set(TB, dB)
            }
            for (const [BB, TB] of(yT ??= VT(GB.default), yT)) lT.has(BB) || lT.set(BB, TB)
          }
          return lT
        }
        const gT = {
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
        let oT;

        function kT() {
          if (!oT) {
            oT = new Map;
            for (const BB of PB)
              if (UB(BB.layout))
                for (const TB of ZB(BB).sections) oT.has(TB.heading.text) || oT.set(TB.heading.text, {
                  pageId: BB.id,
                  anchor: TB.heading.anchor
                })
          }
          return oT
        }

        function LT(BB) {
          const TB = BB.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return TB ? kT().get(TB[1]) : void 0
        }
        const OT = (0, VB.createContext)("/docs"),
          DT = (0, VB.createContext)(null),
          uT = (0, VB.createContext)(!1),
          HT = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function ET(BB) {
          const TB = BB.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return TB ? TB[1] : null
        }

        function vT(BB) {
          let {
            colour: TB
          } = BB;
          return (0, DB.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: TB
            },
            "aria-hidden": "true"
          })
        }

        function mT(BB) {
          const TB = [];
          let dB = 0;
          for (const VB of BB.matchAll(HT)) TB.push(BB.slice(dB, VB.index), (0, DB.jsx)(vT, {
            colour: VB[0]
          }), VB[0]), dB = VB.index + VB[0].length;
          return TB.push(BB.slice(dB)), TB
        }

        function iT(BB) {
          let {
            href: TB,
            children: dB
          } = BB;
          const yB = (0, VB.useContext)(OT);
          if (TB.startsWith("#")) {
            const BB = WB(TB);
            if (BB) return (0, DB.jsx)(lB.d, {
              to: CB(yB, BB.page, BB.anchor),
              children: (0, DB.jsx)(uT.Provider, {
                value: !0,
                children: dB
              })
            })
          }
          return (0, DB.jsx)("a", {
            href: TB,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, DB.jsx)(uT.Provider, {
              value: !0,
              children: dB
            })
          })
        }

        function NT(BB) {
          let {
            code: TB
          } = BB;
          const dB = (0, VB.useContext)(OT);
          if ((0, VB.useContext)(uT)) return (0, DB.jsx)("code", {
            className: "DocsInlineCode",
            children: TB
          });
          if (YT().has(TB)) return (0, DB.jsx)(MT, {
            type: TB
          });
          const yB = LT(TB);
          if (yB) return (0, DB.jsx)(lB.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: CB(dB, RB(yB.pageId), yB.anchor),
            children: TB
          });
          const pB = ET(TB);
          return (0, DB.jsxs)("code", {
            className: "DocsInlineCode",
            children: [pB && (0, DB.jsx)(vT, {
              colour: pB
            }), TB]
          })
        }

        function tT(BB) {
          let {
            text: TB
          } = BB;
          const dB = [];
          let yB = 0;
          for (const VB of TB.matchAll(sB.f)) {
            VB.index > yB && dB.push(...mT(TB.slice(yB, VB.index)));
            const [, BB, pB, lB, JB, YB] = VB;
            BB ? dB.push((0, DB.jsx)(NT, {
              code: (0, sB.j)(BB, pB)
            })) : lB ? dB.push((0, DB.jsx)("strong", {
              children: (0, DB.jsx)(tT, {
                text: lB
              })
            })) : dB.push((0, DB.jsx)(iT, {
              href: YB,
              children: (0, DB.jsx)(tT, {
                text: JB
              })
            })), yB = VB.index + VB[0].length
          }
          return yB < TB.length && dB.push(...mT(TB.slice(yB))), (0, DB.jsx)(DB.Fragment, {
            children: dB.map(((BB, TB) => (0, DB.jsx)(VB.Fragment, {
              children: BB
            }, TB)))
          })
        }
        const fT = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          sT = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function MT(BB) {
          let {
            type: TB
          } = BB;
          const dB = YT(),
            yB = [];
          for (const VB of TB.trim().matchAll(fT)) {
            const [BB, TB, pB, lB, JB] = VB;
            TB ? yB.push((0, DB.jsx)("span", {
              className: "DocsTypeString",
              children: BB
            })) : pB && dB.has(pB) ? yB.push((0, DB.jsx)(KT, {
              name: pB,
              definition: dB.get(pB)
            })) : pB ? yB.push((0, DB.jsx)("span", {
              className: sT.has(pB) ? "DocsTypeKeyword" : "DocsTypeName",
              children: BB
            })) : lB ? yB.push((0, DB.jsx)("span", {
              className: "DocsTypeNumber",
              children: BB
            })) : JB ? yB.push(" ") : yB.push((0, DB.jsx)("span", {
              className: "DocsTypePunctuation",
              children: BB
            }))
          }
          return (0, DB.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: yB.map(((BB, TB) => (0, DB.jsx)(VB.Fragment, {
              children: BB
            }, TB)))
          })
        }
        const zT = 480,
          wT = 6,
          UT = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let FT = 0;

        function KT(BB) {
          let {
            name: TB,
            definition: dB
          } = BB;
          const yB = (0, VB.useContext)(OT),
            pB = gT[TB],
            JB = (0, VB.useRef)(null),
            YB = (0, VB.useRef)(null),
            oB = (0, VB.useRef)(null),
            [kB, LB] = (0, VB.useState)(!1),
            [OB, uB] = (0, VB.useState)(null),
            EB = (0, VB.useRef)(),
            vB = (0, VB.useContext)(DT),
            [mB] = (0, VB.useState)((() => "DocsTypePopover-" + FT++)),
            iB = () => {
              clearTimeout(EB.current), LB(!0)
            },
            NB = () => {
              clearTimeout(EB.current), EB.current = setTimeout((() => {
                LB(!1)
              }), 120)
            };
          return (0, VB.useEffect)((() => {
            if (!kB) return;
            const BB = BB => {
              if ("Escape" === BB.key) {
                var TB, dB;
                if (null !== (TB = YB.current) && void 0 !== TB && TB.contains(document.activeElement)) null === (dB = JB.current) || void 0 === dB || dB.focus();
                LB(!1)
              }
            };
            return document.addEventListener("keydown", BB), () => {
              document.removeEventListener("keydown", BB)
            }
          }), [kB]), (0, VB.useEffect)((() => () => {
            clearTimeout(EB.current)
          }), []), (0, VB.useLayoutEffect)((() => {
            if (!kB || !JB.current || !YB.current) return void uB(null);
            const BB = JB.current.getBoundingClientRect(),
              TB = YB.current.offsetHeight,
              dB = Math.min(zT, window.innerWidth - 32),
              VB = Math.min(Math.max(16, BB.left), window.innerWidth - dB - 16),
              yB = BB.bottom + wT + TB < window.innerHeight;
            uB({
              left: VB,
              top: yB ? BB.bottom + wT : Math.max(16, BB.top - wT - TB)
            })
          }), [kB]), (0, DB.jsxs)(DB.Fragment, {
            children: [(0, DB.jsx)("button", {
              type: "button",
              ref: JB,
              className: "DocsTypeLink",
              "aria-expanded": kB,
              "aria-describedby": kB ? mB : void 0,
              onMouseEnter: iB,
              onMouseLeave: NB,
              onFocus: iB,
              onBlur: NB,
              onKeyDown: BB => {
                "Tab" === BB.key && !BB.shiftKey && oB.current && (BB.preventDefault(), oB.current.focus())
              },
              onClick: iB,
              children: TB
            }), kB && (0, gB.createPortal)((0, DB.jsxs)("span", {
              ref: YB,
              id: mB,
              className: "DocsTypePopover",
              role: "tooltip",
              style: OB ? {
                left: OB.left,
                top: OB.top,
                maxWidth: zT
              } : {
                visibility: "hidden"
              },
              onMouseEnter: iB,
              onMouseLeave: NB,
              onFocus: iB,
              onBlur: NB,
              children: [(0, DB.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, DB.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: TB
                }), pB && (0, DB.jsxs)(lB.d, {
                  ref: oB,
                  className: "DocsTypePopoverLink",
                  to: CB(yB, RB(pB)),
                  onClick: () => {
                    LB(!1)
                  },
                  onKeyDown: BB => {
                    if ("Tab" === BB.key) {
                      var TB;
                      if (BB.preventDefault(), BB.shiftKey || !JB.current || ! function(BB, TB) {
                          const dB = [...document.querySelectorAll(UT)],
                            VB = dB.slice(dB.indexOf(BB) + 1).find((BB => BB.getClientRects().length > 0 && !(null !== TB && void 0 !== TB && TB.contains(BB))));
                          return null === VB || void 0 === VB || VB.focus(), void 0 !== VB
                        }(JB.current, YB.current)) null === (TB = JB.current) || void 0 === TB || TB.focus();
                      BB.shiftKey || LB(!1)
                    }
                  },
                  children: [RB(pB).title, (0, DB.jsx)(HB, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, DB.jsx)(fB, {
                lang: "ts",
                code: dB,
                compact: !0
              })]
            }), null !== vB && void 0 !== vB ? vB : document.body)]
          })
        }
        var rT = dB(184),
          IT = dB(4156),
          cT = dB(4162),
          ST = dB(4167);
        const PT = {
          progressBar: {
            VV: 30,
            yV: .075,
            pV: 5,
            lV: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            JV: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            gV: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            oV: !0,
            scale: 3,
            rotation: 15,
            kV: !1
          },
          gravityBar: {
            VV: 30,
            OV: .25,
            DV: 3,
            uV: .8,
            gravity: 1,
            HV: 1.5,
            EV: 8,
            vV: 4,
            lV: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            iV: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            tV: 5,
            fV: 1200,
            sV: .15,
            MV: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var QT = dB(270),
          RT = dB(1751);

        function aT(BB) {
          return BB.startsWith("fa-")
        }
        const ZT = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          XT = {
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

        function WT(BB) {
          return "string" === typeof BB ? "text" : "entityName" in BB || "translationKey" in BB ? "other" : (0, QT.ub)(BB) ? "progressBar" : (0, QT.tb)(BB) ? "keyBinding" : "icon" in BB ? "icon" : "str" in BB && "string" === typeof BB.str ? "text" : "other"
        }
        const hT = [{
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
          CT = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...hT],
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
                options: RT.m
              },
              isRequired: !0
            }, ...hT],
            other: []
          };

        function GT(BB) {
          return "string" === typeof BB ? {
            str: BB
          } : BB
        }

        function qT(BB, TB) {
          let dB = GT(BB);
          for (const VB of TB) dB = dB && "object" === typeof dB ? dB[VB] : void 0;
          return dB
        }

        function xT(BB, TB, dB) {
          const VB = (BB, yB) => {
            var pB;
            const lB = TB[yB],
              JB = {
                ...BB
              };
            if (yB === TB.length - 1) return void 0 === dB ? delete JB[lB] : JB[lB] = dB, JB;
            const YB = VB(null !== (pB = BB[lB]) && void 0 !== pB ? pB : {}, yB + 1);
            return 0 === Object.keys(YB).length ? delete JB[lB] : JB[lB] = YB, JB
          };
          return function(BB) {
            const TB = Object.keys(BB);
            return "string" === typeof BB.str && 1 === TB.length ? BB.str : BB
          }(VB(GT(BB), 0))
        }

        function jT(BB, TB) {
          const dB = WT(BB),
            VB = CT[dB].find((BB => BB.path.join(".") === TB.join("."))),
            yB = null !== VB && void 0 !== VB && VB.isRequired && "other" !== dB ? qT(XT[dB], TB) : void 0;
          return xT(BB, TB, yB)
        }

        function AT(BB) {
          switch (WT(BB)) {
            case "text":
              return String(qT(BB, ["str"]));
            case "icon":
              return String(qT(BB, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(qT(BB,["progress"])))}%`;
            case "keyBinding":
              return String(qT(BB, ["action"]));
            case "other":
              return JSON.stringify(BB)
          }
        }
        const bT = /^[A-Za-z_$][\w$]*$/;

        function nT(BB) {
          if (Array.isArray(BB)) return `[${BB.map(nT).join(", ")}]`;
          if (BB && "object" === typeof BB) {
            const TB = Object.entries(BB).map((BB => {
              let [TB, dB] = BB;
              return `${bT.test(TB)?TB:JSON.stringify(TB)}: ${nT(dB)}`
            }));
            return 0 === TB.length ? "{}" : `{ ${TB.join(", ")} }`
          }
          return JSON.stringify(BB)
        }

        function eT(BB) {
          const TB = BB.map(nT),
            dB = `[${TB.join(", ")}]`;
          return dB.length <= 60 ? dB : `[\n${TB.map((BB=>`    ${BB},`)).join("\n")}\n]`
        }
        const Bd = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Td(BB) {
          let TB = "";
          for (let yB = 0; yB < BB.length; yB++) {
            const pB = BB[yB];
            if ("\\" === pB) {
              var dB;
              const VB = null !== (dB = BB[yB + 1]) && void 0 !== dB ? dB : "";
              TB += "'" === VB ? "'" : pB + VB, yB++
            } else if ('"' === pB) TB += '\\"';
            else {
              var VB;
              TB += null !== (VB = Bd[pB]) && void 0 !== VB ? VB : pB
            }
          }
          return `"${TB}"`
        }

        function dd(BB) {
          if ("string" === typeof BB) return !0;
          if (!BB || "object" !== typeof BB || Array.isArray(BB)) return !1;
          const TB = BB;
          return "ProgressBar" === TB.type ? "number" === typeof TB.progress : "StyledKeyBinding" === TB.type ? RT.m.includes(TB.action) : "string" === typeof TB.icon || "string" === typeof TB.str || "string" === typeof TB.entityName || "string" === typeof TB.translationKey
        }

        function Vd(BB) {
          let TB;
          try {
            TB = function(BB) {
              let TB = "",
                dB = "",
                VB = 0;
              const yB = () => {
                TB += dB.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), dB = ""
              };
              for (; VB < BB.length;) {
                const pB = BB.slice(VB).search(/["'`]|\/\//);
                if (-1 === pB) {
                  dB += BB.slice(VB);
                  break
                }
                dB += BB.slice(VB, VB + pB);
                const lB = VB + pB,
                  JB = BB[lB];
                if ("/" === JB) {
                  const TB = BB.indexOf("\n", lB);
                  VB = -1 === TB ? BB.length : TB;
                  continue
                }
                if (yB(), "`" === JB) throw new Error("Use quotes rather than template strings.");
                let YB = lB + 1;
                for (; YB < BB.length && BB[YB] !== JB;) YB += "\\" === BB[YB] ? 2 : 1;
                if (YB >= BB.length) throw new Error("A string is missing its closing quote.");
                const gB = BB.slice(lB + 1, YB);
                TB += Td(gB), VB = YB + 1
              }
              return yB(), JSON.parse(TB)
            }(BB.trim())
          } catch (VB) {
            return {
              parts: null,
              error: VB instanceof SyntaxError ? "This isn't a valid array yet." : VB.message
            }
          }
          if (!Array.isArray(TB)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const dB = TB.findIndex((BB => !dd(BB)));
          return -1 !== dB ? {
            parts: null,
            error: `Part ${dB+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: TB,
            error: null
          }
        }
        const yd = 1 / rT.c.clientTicksPerSecond,
          pd = 700,
          ld = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Jd = {
            progressBar: PT.progressBar.JV,
            timedClick: PT.timedClick.icon,
            gravityBar: PT.gravityBar.icon,
            precisionBar: PT.precisionBar.icon,
            rhythmClick: PT.rhythmClick.icon
          };

        function Yd(BB) {
          let {
            type: TB
          } = BB;
          const [dB, yB] = (0, VB.useState)("ready"), [lB, JB] = (0, VB.useState)(1), [YB, gB] = (0, VB.useState)(!0), oB = (0, VB.useRef)(null), kB = (0, VB.useRef)(null), LB = (0, VB.useRef)(null), OB = (0, VB.useRef)(new Set), uB = (0, VB.useRef)(!1), EB = Jd[TB], vB = (0, VB.useMemo)((() => ({
            getState: () => {
              var BB, TB;
              return null !== (BB = null === (TB = LB.current) || void 0 === TB ? void 0 : TB.getState()) && void 0 !== BB ? BB : ld
            },
            onFrame: BB => (OB.current.add(BB), () => {
              OB.current.delete(BB)
            })
          })), []);
          (0, VB.useEffect)((() => {
            const BB = oB.current,
              TB = kB.current;
            if (!BB || !TB) return;
            const dB = new ResizeObserver((() => {
              JB(BB.clientWidth / Math.max(1, TB.offsetWidth))
            }));
            return dB.observe(BB), () => {
              dB.disconnect()
            }
          }), []), (0, VB.useEffect)((() => {
            var BB;
            if ("playing" !== dB) return;
            let VB = !1;
            const pB = new ST.f[TB](PT[TB], (BB => {
              VB = !0, gB(!1), yB(BB ? "succeeded" : "failed")
            }), (() => {}));
            LB.current = pB;
            let lB = 0,
              JB = performance.now(),
              YB = requestAnimationFrame((function BB(TB) {
                for (lB += Math.min(.25, (TB - JB) / 1e3), JB = TB; lB >= yd && !VB;) lB -= yd, pB.handleTick(yd);
                for (const dB of OB.current) dB();
                VB || (YB = requestAnimationFrame(BB))
              }));
            return null === (BB = oB.current) || void 0 === BB || BB.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(YB), pB.tearDown(), LB.current = null, uB.current = !1
            }
          }), [dB, TB]), (0, VB.useEffect)((() => {
            if (YB) return;
            const BB = setTimeout((() => {
              gB(!0)
            }), pd);
            return () => {
              clearTimeout(BB)
            }
          }), [YB]);
          const mB = BB => {
            var TB;
            "playing" === dB && uB.current !== BB && (uB.current = BB, null === (TB = LB.current) || void 0 === TB || TB.handleMouseInput(BB))
          };
          return (0, DB.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, DB.jsxs)("div", {
              ref: oB,
              className: pB()("DocsQteStage", {
                Playing: "playing" === dB
              }),
              tabIndex: "playing" === dB ? 0 : -1,
              role: "playing" === dB ? "button" : void 0,
              "aria-label": "playing" === dB ? `${TB} quick time event: click or press Space` : void 0,
              onPointerDown: BB => {
                0 === BB.button && mB(!0)
              },
              onPointerUp: () => {
                mB(!1)
              },
              onPointerLeave: () => {
                mB(!1)
              },
              onPointerCancel: () => {
                mB(!1)
              },
              onKeyDown: BB => {
                "playing" !== dB || " " !== BB.key && "Enter" !== BB.key || (BB.preventDefault(), mB(!0))
              },
              onKeyUp: BB => {
                "playing" !== dB || " " !== BB.key && "Enter" !== BB.key || mB(!1)
              },
              children: [(0, DB.jsx)("div", {
                ref: kB,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${lB})`
                },
                children: "playing" === dB && (0, DB.jsx)(cT.c.Provider, {
                  value: vB,
                  children: (0, DB.jsx)(IT.e, {
                    qte: {
                      type: TB,
                      parameters: PT[TB]
                    }
                  })
                })
              }), "playing" !== dB && (0, DB.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== dB && (0, DB.jsxs)("div", {
                  className: pB()("DocsQteResult", "succeeded" === dB ? "Succeeded" : "Failed"),
                  children: [(0, DB.jsx)(HB, {
                    name: "succeeded" === dB ? "check" : "cross",
                    isTinted: !0
                  }), (0, DB.jsx)("span", {
                    children: "succeeded" === dB ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, DB.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !YB,
                  onClick: () => {
                    yB("playing")
                  },
                  children: [(0, DB.jsx)(HB, {
                    name: "ready" === dB ? "play" : "replay"
                  }), (0, DB.jsx)("span", {
                    children: "ready" === dB ? `Try ${TB}` : "Play again"
                  })]
                })]
              })]
            }), EB && !aT(EB) && (0, DB.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, DB.jsx)("code", {
                children: EB
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function gd(BB) {
          let {
            level: TB,
            text: dB,
            anchor: VB,
            className: yB
          } = BB;
          const lB = `h${Math.min(TB,6)}`;
          return (0, DB.jsxs)(lB, {
                id: VB,
                className: pB()("DocsHeading", yB),
                children: [(0, DB.jsx)(tT, {
                      text: dB
                    }), (0, DB.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${VB}`,
                        "aria-label": `Link to ${dB.replace(/`/g,"")}`,children:"#"})]})}function od(BB){let{items:TB,ordered:dB}=BB;const VB=dB?"ol":"ul";return(0,DB.jsx)(VB,{className:"DocsList",children:TB.map(((BB,TB)=>(0,DB.jsxs)("li",{children:[(0,DB.jsx)(tT,{text:BB.text}),BB.children.length>0&&(0,DB.jsx)(od,{items:BB.children,ordered:dB})]},TB)))})}function kd(BB){const TB=BB[0],dB="paragraph"===(null===TB||void 0===TB?void 0:TB.kind)?TB.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(dB)?"warning":/^\*\*(tip|prefer)/.test(dB)?"tip":"note"}function Ld(BB){let{block:TB}=BB;switch(TB.kind){case"heading":return(0,DB.jsx)(gd,{level:TB.level,text:TB.text,anchor:TB.anchor});case"paragraph":return(0,DB.jsx)("p",{children:(0,DB.jsx)(tT,{text:TB.text})});case"code":{const BB="ts"===TB.lang?function(BB){const TB=BB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return TB&&Object.hasOwn(PT,TB[1])?TB[1]:null}(TB.code):null;return(0,DB.jsxs)(DB.Fragment,{children:[(0,DB.jsx)(fB,{code:TB.code,lang:TB.lang}),BB&&(0,DB.jsx)(Yd,{type:BB})]})}case"table":return(0,DB.jsx)("div",{className:"DocsTableScroll",children:(0,DB.jsxs)("table",{className:"DocsTable",children:[(0,DB.jsx)("thead",{children:(0,DB.jsx)("tr",{children:TB.header.map(((BB,TB)=>(0,DB.jsx)("th",{children:(0,DB.jsx)(tT,{text:BB})},TB)))})}),(0,DB.jsx)("tbody",{children:TB.rows.map(((BB,TB)=>(0,DB.jsx)("tr",{children:BB.map(((BB,TB)=>(0,DB.jsx)("td",{children:(0,DB.jsx)(tT,{text:BB})},TB)))},TB)))})]})});case"list":return(0,DB.jsx)(od,{items:TB.items,ordered:TB.ordered});case"quote":return(0,DB.jsx)("aside",{className:pB()("DocsCallout",kd(TB.blocks)),children:(0,DB.jsx)(Od,{blocks:TB.blocks})});case"rule":return(0,DB.jsx)("hr",{className:"DocsRule"})}}function Od(BB){let{blocks:TB}=BB;return(0,DB.jsx)(DB.Fragment,{children:TB.map(((BB,TB)=>(0,DB.jsx)(Ld,{block:BB},TB)))})}var Dd=dB(4138),ud=dB(4141);function Hd(BB){return"blocks"===BB||"items"===BB}const Ed=new Map;function vd(BB){let TB=Ed.get(BB);return TB||(TB=function(BB){const TB={entries:[],legend:[],notes:[],examples:[]};let dB=!1;for(const pB of BB.split(/\r?\n/).slice(1)){if(pB.startsWith("#")){const BB=pB.replace(/^# ?/,""),VB=BB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);VB?TB.legend.push({code:VB[1],meaning:VB[2],usage:VB[3].trim()}):/^Examples:/.test(BB.trim())?dB=!0:dB&&BB.trim()?TB.examples.push(BB.trim()):BB.trim()&&!/^\s/.test(BB)&&TB.notes.push(BB.trim());continue}const BB=pB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var VB,yB;BB&&TB.entries.push({name:BB[1],variants:null!==(VB=null===(yB=BB[2])||void 0===yB?void 0:yB.split(","))&&void 0!==VB?VB:[]})}return TB}("blocks"===BB?Dd:ud),Ed.set(BB,TB)),TB}function md(BB){let{className:TB,value:dB,placeholder:VB,label:yB,onChange:pB,count:lB,children:JB}=BB;return(0,DB.jsxs)("div",{className:TB,children:[(0,DB.jsx)(HB,{name:"magnifying-glass"}),(0,DB.jsx)("input",{type:"search",value:dB,placeholder:VB,"aria-label":yB,onChange:BB=>{pB(BB.target.value)}}),JB,lB&&(0,DB.jsxs)("span",{className:"DocsFilterCount",children:[lB.visible," of ",lB.total]})]})}var Nd=dB(946);function td(BB){const TB=BB.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return TB?TB[2]:null}function fd(BB){return"paragraph"===BB.kind&&""===BB.text.trim()}function sd(BB){const TB={name:BB.heading.text,description:[],params:[],returns:null};let dB="description";for(const yB of BB.blocks)if(!fd(yB))if("heading"===yB.kind&&/^Parameters:?$/.test(yB.text))dB="params";else if("heading"===yB.kind&&/^Returns:?$/.test(yB.text))dB="returns",TB.returns={type:"",description:[]};else if("params"!==dB||"table"!==yB.kind){if("returns"===dB&&"paragraph"===yB.kind&&""===TB.returns.type){const BB=td(yB.text);if(null!==BB){TB.returns.type=BB.replaceAll("\\|","|");continue}}"returns"===dB?TB.returns.description.push(yB):TB.description.push(yB)}else for(const[BB,dB,pB]of yB.rows){var VB;TB.params.push({name:BB,type:null!==(VB=td(dB))&&void 0!==VB?VB:dB,description:null!==pB&&void 0!==pB?pB:""})}return TB}const Md=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function zd(BB){return BB.filter((BB=>!fd(BB)))}const wd=/^[\w][\w .'&!:()-]*$/,Ud=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Fd(BB){var TB;if("code"===BB.kind&&"text"===BB.lang){const TB=BB.code.split("\n").map((BB=>BB.trim())).filter(Boolean);return TB.length>0&&TB.every((BB=>wd.test(BB)))?TB.map((BB=>({name:BB}))):null}return"paragraph"===BB.kind&&Ud.test(BB.text.trim())?[...BB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((BB => BB[1].split(/,\s*/).map((BB => ({
                              name: BB.trim()
                            }))))): "table" === BB.kind && null !== (TB = BB.header[0]) && void 0 !== TB && TB.startsWith("Song") ? BB.rows.map((BB => {
                              let [TB, dB] = BB;
                              return {
                                name: TB.replace(/`/g, ""),
                                caption: dB
                              }
                            })) : null
                          }

                          function Kd(BB) {
                            const TB = [];
                            for (const dB of BB) {
                              const BB = Fd(dB),
                                VB = TB.at(-1),
                                yB = "table" === dB.kind;
                              BB ? "names" === (null === VB || void 0 === VB ? void 0 : VB.kind) && VB.isSongs === yB ? VB.names.push(...BB) : TB.push({
                                kind: "names",
                                names: BB,
                                isSongs: yB
                              }) : TB.push({
                                kind: "block",
                                block: dB
                              })
                            }
                            return TB
                          }
                          const rd = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Id(BB, TB) {
                            return `${rd[BB]}-${(0,sB.m)(TB)}`
                          }
                          const cd = new WeakMap;

                          function Sd(BB, TB, dB) {
                            let VB = cd.get(TB);
                            if (!VB) {
                              VB = new Map;
                              const dB = new Set;
                              for (const yB of (0, sB.n)(TB)) {
                                const TB = Kd(zd(yB.blocks)).map((TB => {
                                  if ("block" === TB.kind) return TB;
                                  return {
                                    kind: "names",
                                    names: TB.names.map((TB => {
                                      var VB, pB;
                                      const lB = Id(BB, TB.name);
                                      let JB = lB;
                                      for (let BB = 2; dB.has(JB); BB++) JB = `${lB}-${BB}`;
                                      return dB.add(JB), {
                                        ...TB,
                                        anchor: JB,
                                        heading: null !== (VB = null === (pB = yB.heading) || void 0 === pB ? void 0 : pB.text) && void 0 !== VB ? VB : ""
                                      }
                                    })),
                                    isSongs: TB.isSongs
                                  }
                                }));
                                VB.set(yB.blocks, TB)
                              }
                              cd.set(TB, VB)
                            }
                            const yB = VB.get(dB);
                            if (!yB) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return yB
                          }
                          const Pd = "/textures/docs/skinPreviews",
                            Qd = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Rd = dB(3704),
                            ad = dB(3716);

                          function Zd(BB) {
                            return Object.hasOwn(Rd.f, BB) ? Rd.f[BB] : null
                          }
                          const Xd = {
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
                            blendMode: ad.e.Standard
                          };

                          function Wd(BB, TB, dB) {
                            return TB + (dB - TB) * BB()
                          }

                          function hd(BB, TB, dB) {
                            return BB + (TB - BB) * dB
                          }

                          function Cd(BB) {
                            return BB.length > 0 && "timeFraction" in BB[0]
                          }

                          function Gd(BB, TB) {
                            if (0 === BB.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Cd(BB.colorGradients)) {
                              const dB = BB.colorGradients,
                                {
                                  color: VB
                                } = dB[Math.floor(TB() * dB.length) % dB.length];
                              return [{
                                at: 0,
                                colour: [VB[0] / 255, VB[1] / 255, VB[2] / 255, 1]
                              }]
                            }
                            return [...BB.colorGradients].sort(((BB, TB) => BB.timeFraction - TB.timeFraction)).map((BB => {
                              var dB, VB, yB;
                              const pB = BB.minColor,
                                lB = null !== (dB = BB.maxColor) && void 0 !== dB ? dB : pB,
                                JB = TB(),
                                YB = [hd(pB[0], lB[0], JB) / 255, hd(pB[1], lB[1], JB) / 255, hd(pB[2], lB[2], JB) / 255, hd(null !== (VB = pB[3]) && void 0 !== VB ? VB : 1, null !== (yB = lB[3]) && void 0 !== yB ? yB : 1, JB)];
                              return {
                                at: BB.timeFraction,
                                colour: YB
                              }
                            }))
                          }

                          function qd(BB, TB, dB, VB) {
                            const yB = Wd(VB, BB.minEmitPower, BB.maxEmitPower),
                              pB = TB => Wd(VB, Math.min(BB.dir1[TB], BB.dir2[TB]), Math.max(BB.dir1[TB], BB.dir2[TB])) * yB,
                              lB = [...BB.velocityGradients].sort(((BB, TB) => BB.timeFraction - TB.timeFraction)).map((BB => ({
                                at: BB.timeFraction,
                                factor: Wd(VB, BB.factor, BB.factor2)
                              })));
                            return {
                              pos: [Wd(VB, TB[0], dB[0]), Wd(VB, TB[1], dB[1]), Wd(VB, TB[2], dB[2])],
                              dir: [pB(0), pB(1), pB(2)],
                              age: 0,
                              life: Wd(VB, BB.minLifeTime, BB.maxLifeTime),
                              size: Wd(VB, BB.minSize, BB.maxSize),
                              colours: Gd(BB, VB),
                              velocityFactors: lB
                            }
                          }

                          function xd(BB, TB, dB, VB) {
                            if (TB < BB[0].at) return dB(Math.min(1, BB.length - 1));
                            for (let yB = 0; yB < BB.length - 1; yB++)
                              if (TB <= BB[yB + 1].at) {
                                const pB = BB[yB + 1].at - BB[yB].at;
                                return VB(dB(yB), dB(yB + 1), pB > 0 ? (TB - BB[yB].at) / pB : 1)
                              } return dB(BB.length - 1)
                          }

                          function jd(BB) {
                            return xd(BB.colours, BB.age / BB.life, (TB => BB.colours[TB].colour), ((BB, TB, dB) => [hd(BB[0], TB[0], dB), hd(BB[1], TB[1], dB), hd(BB[2], TB[2], dB), hd(BB[3], TB[3], dB)]))
                          }

                          function Ad(BB, TB, dB) {
                            if (BB.age += dB, BB.age >= BB.life) return !1;
                            const VB = function(BB) {
                              return 0 === BB.velocityFactors.length ? 1 : xd(BB.velocityFactors, BB.age / BB.life, (TB => BB.velocityFactors[TB].factor), hd)
                            }(BB) * dB;
                            for (let pB = 0; pB < 3; pB++) {
                              var yB;
                              BB.pos[pB] += BB.dir[pB] * VB, BB.dir[pB] += (null !== (yB = TB[pB]) && void 0 !== yB ? yB : 0) * dB
                            }
                            return !0
                          }

                          function bd(BB) {
                            return String(Math.round(1e6 * BB) / 1e6)
                          }

                          function nd(BB) {
                            return `[${BB.map(bd).join(", ")}]`
                          }

                          function ed(BB, TB) {
                            const dB = `${TB}    `;
                            return `[\n${(Cd(BB)?BB.map((BB=>{const TB=[`${dB}    timeFraction: ${bd(BB.timeFraction)},`,`${dB}    minColor: ${nd(BB.minColor)},`];return BB.maxColor&&TB.push(`${dB}    maxColor: ${nd(BB.maxColor)},`),`${dB}{\n${TB.join("\n")}\n${dB}},`})):BB.map((BB=>`
                            $ {
                              dB
                            } {
                              color: $ {
                                nd(BB.color)
                              }
                            }, `))).join("\n")}\n${TB}]`
                          }
                          const BV = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            TV = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const dV = .6;

                          function VV(BB, TB) {
                            return `${TB?"song":"sound"}:${BB}`
                          }
                          let yV = {
                              track: null,
                              volume: dV
                            },
                            pV = null,
                            lV = 0,
                            JV = 0;
                          const YV = new Set;

                          function gV(BB) {
                            yV = {
                              ...yV,
                              ...BB
                            }, YV.forEach((BB => {
                              BB()
                            }))
                          }

                          function oV(BB) {
                            yV.track && gV({
                              track: {
                                ...yV.track,
                                ...BB
                              }
                            })
                          }

                          function kV(BB) {
                            const [TB, dB] = (0, VB.useState)((() => BB(yV))), yB = (0, VB.useRef)(BB);
                            return yB.current = BB, (0, VB.useEffect)((() => {
                              const BB = () => {
                                dB((() => yB.current(yV)))
                              };
                              return YV.add(BB), BB(), () => {
                                YV.delete(BB)
                              }
                            }), []), TB
                          }

                          function LV() {
                            lV++;
                            const BB = pV;
                            pV = null, null === BB || void 0 === BB || BB.stop()
                          }

                          function OV(BB, TB) {
                            let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            LV();
                            const yB = lV,
                              {
                                track: pB
                              } = yV,
                              lB = pB && pB.name === BB && pB.isSong === TB ? pB.duration : 0;
                            JV = VB, gV({
                              track: {
                                name: BB,
                                isSong: TB,
                                status: "loading",
                                duration: lB
                              }
                            }), Promise.all([dB.e(201), dB.e(229)]).then((() => dB(38545))).then((dB => {
                              let {
                                playDocsSound: pB
                              } = dB;
                              yB === lV && (pV = pB(BB, TB, yV.volume, VB, {
                                onPlay: BB => {
                                  yB === lV && oV({
                                    status: "playing",
                                    duration: BB
                                  })
                                },
                                onEnd: BB => {
                                  var TB, dB;
                                  yB === lV && (pV = null, BB ? gV({
                                    track: null
                                  }) : (JV = null !== (TB = null === (dB = yV.track) || void 0 === dB ? void 0 : dB.duration) && void 0 !== TB ? TB : 0, oV({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((TB => {
                              console.error(`Could not play docs sound ${BB}`, TB), yB === lV && gV({
                                track: null
                              })
                            }))
                          }

                          function DV() {
                            const {
                              track: BB
                            } = yV;
                            if (!BB) return;
                            if ("playing" === BB.status && pV) return JV = pV.Dv(), pV.pause(), void oV({
                              status: "paused"
                            });
                            if ("loading" === BB.status) return LV(), void oV({
                              status: "paused"
                            });
                            if (pV) return void pV.resume();
                            const TB = BB.duration > 0 && JV >= BB.duration - .05;
                            OV(BB.name, BB.isSong, TB ? 0 : JV)
                          }

                          function uV() {
                            var BB;
                            return pV && "playing" === (null === (BB = yV.track) || void 0 === BB ? void 0 : BB.status) ? pV.Dv() : JV
                          }

                          function HV(BB) {
                            var TB;
                            null === (TB = pV) || void 0 === TB || TB.setVolume(BB), gV({
                              volume: BB
                            })
                          }

                          function EV() {
                            LV(), JV = 0, gV({
                              track: null
                            })
                          }
                          const vV = (0, VB.createContext)(null);
                          let mV = null;

                          function iV() {
                            const [BB, TB] = (0, VB.useState)(null);
                            return (0, VB.useEffect)((() => {
                              let BB = !1;
                              return mV ??= Promise.all([dB.e(64), dB.e(67), dB.e(66), dB.e(65), dB.e(185), dB.e(90), dB.e(208)]).then((() => dB(38536))), mV.then((dB => {
                                BB || TB(dB)
                              }), (BB => {
                                console.error("Could not load the docs gallery's textures", BB), mV = null
                              })), () => {
                                BB = !0
                              }
                            }), []), BB
                          }
                          const NV = 24,
                            tV = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function fV(BB, TB) {
                            const dB = "skins" === BB ? function(BB, TB) {
                              const dB = Qd.find((TB => BB.startsWith(TB.heading)));
                              return dB ? function(BB, TB) {
                                return `${BB}-${TB}`
                              }(dB.prefix, TB) : null
                            }(TB.heading, TB.name) : null;
                            return null === dB ? null : `${Pd}/${dB}.webp`
                          }

                          function sV(BB) {
                            let {
                              kind: TB,
                              entry: dB,
                              assets: yB,
                              renderedUrl: lB
                            } = BB;
                            const {
                              name: JB
                            } = dB, [YB, gB] = (0, VB.useState)(!1);
                            if ("icons" === TB && aT(JB)) return (0, DB.jsx)(Nd.e, {
                              className: "DocsTileIcon",
                              name: JB
                            });
                            let oB = null;
                            var kB;
                            if ("icons" === TB) oB = null !== (kB = null === yB || void 0 === yB ? void 0 : yB.getIngameIconUrl(JB)) && void 0 !== kB ? kB : null;
                            else if ("particles" === TB) {
                              var LB, OB, uB;
                              oB = null !== (LB = null === yB || void 0 === yB ? void 0 : yB.getParticleTextureUrl(null !== (OB = null === (uB = Zd(JB)) || void 0 === uB ? void 0 : uB.texture) && void 0 !== OB ? OB : JB)) && void 0 !== LB ? LB : null
                            } else "skins" === TB && (oB = null !== lB && void 0 !== lB ? lB : tV.test(JB) ? `/textures/charSkins/previews/${JB}_preview.png` : null);
                            return !oB || YB ? (0, DB.jsx)(HB, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === TB ? "person" : "image"
                            }) : (0, DB.jsx)("img", {
                              className: pB()("DocsTileImage", {
                                Pixelated: "skins" !== TB
                              }),
                              src: oB,
                              srcSet: oB === lB ? `${oB} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${oB}`), gB(!0)
                              }
                            })
                          }

                          function MV(BB) {
                            let {
                              entry: TB,
                              isSong: dB
                            } = BB;
                            const VB = kV((BB => {
                                let {
                                  track: VB
                                } = BB;
                                return (null === VB || void 0 === VB ? void 0 : VB.name) === TB.name && VB.isSong === dB ? VB.status : null
                              })),
                              yB = null !== VB && "paused" !== VB;
                            return (0, DB.jsxs)("button", {
                              type: "button",
                              id: TB.anchor,
                              className: pB()("DocsSoundTile", {
                                Playing: yB
                              }),
                              "data-docs-track": VV(TB.name, dB),
                              "aria-label": yB ? `Pause ${TB.name}` : `Play ${TB.name}`,
                              onClick: () => {
                                null !== VB ? DV() : OV(TB.name, dB)
                              },
                              children: [(0, DB.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, DB.jsx)(HB, {
                                  name: yB ? "pause" : "play"
                                })
                              }), (0, DB.jsx)("code", {
                                className: "DocsSoundName",
                                children: TB.name
                              }), TB.caption && (0, DB.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: TB.caption
                              })]
                            })
                          }

                          function zV(BB) {
                            let {
                              kind: TB,
                              names: dB,
                              isSongs: yB
                            } = BB;
                            const lB = iV(),
                              [JB, YB] = vB(),
                              gB = !1 === (null === JB || void 0 === JB ? void 0 : JB.failed) ? JB.text : null,
                              oB = (0, VB.useContext)(vV),
                              [kB, LB] = (0, VB.useState)(""),
                              OB = kB.trim().toLowerCase(),
                              uB = OB ? dB.filter((BB => BB.name.toLowerCase().includes(OB))) : dB;
                            return (0, DB.jsxs)("div", {
                              className: "DocsGallery",
                              children: [dB.length > NV && (0, DB.jsx)(md, {
                                className: "DocsGalleryFilter",
                                value: kB,
                                placeholder: `Filter ${dB.length} names\u2026`,
                                label: "Filter names",
                                onChange: LB,
                                count: OB ? {
                                  visible: uB.length,
                                  total: dB.length
                                } : null
                              }), (0, DB.jsx)("div", {
                                className: pB()("DocsGalleryGrid", `Kind-${TB}`, {
                                  Songs: yB
                                }),
                                children: uB.map((BB => {
                                  if ("sounds" === TB) return (0, DB.jsx)(MV, {
                                    entry: BB,
                                    isSong: yB
                                  }, BB.anchor);
                                  if (oB && "particles" === TB && Zd(BB.name)) return (0, DB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: pB()("DocsTile Previewable", {
                                      Copied: gB === BB.name
                                    }),
                                    title: `Play "${BB.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      oB(BB.name), YB(BB.name)
                                    },
                                    children: [(0, DB.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, DB.jsx)(sV, {
                                        kind: TB,
                                        entry: BB,
                                        assets: lB,
                                        renderedUrl: null
                                      }), (0, DB.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, DB.jsx)(HB, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, DB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: gB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor);
                                  const dB = fV(TB, BB);
                                  return (0, DB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: pB()("DocsTile", {
                                      Copied: gB === BB.name
                                    }),
                                    title: `Copy "${BB.name}"`,
                                    onClick: () => {
                                      YB(BB.name)
                                    },
                                    children: [(0, DB.jsx)("span", {
                                      className: pB()("DocsTilePreview", {
                                        Rendered: null !== dB
                                      }),
                                      children: (0, DB.jsx)(sV, {
                                        kind: TB,
                                        entry: BB,
                                        assets: lB,
                                        renderedUrl: dB
                                      })
                                    }), (0, DB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: gB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor)
                                }))
                              })]
                            })
                          }

                          function wV(BB) {
                            let {
                              kind: TB,
                              content: dB,
                              blocks: VB
                            } = BB;
                            return (0, DB.jsx)(DB.Fragment, {
                              children: Sd(TB, dB, VB).map(((BB, dB) => "block" === BB.kind ? (0, DB.jsx)(Ld, {
                                block: BB.block
                              }, dB) : (0, DB.jsx)(zV, {
                                kind: TB,
                                names: BB.names,
                                isSongs: BB.isSongs
                              }, dB)))
                            })
                          }
                          const UV = [{
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

                          function FV(BB) {
                            let {
                              cards: TB = UV,
                              label: dB = "Start here"
                            } = BB;
                            const yB = (0, VB.useContext)(OT);
                            return (0, DB.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": dB,
                              children: TB.map((BB => {
                                let {
                                  pageId: TB,
                                  countNoun: dB
                                } = BB;
                                const VB = RB(TB);
                                return (0, DB.jsxs)(lB.d, {
                                  to: CB(yB, VB),
                                  className: "DocsLandingCard",
                                  children: [(0, DB.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, DB.jsx)(HB, {
                                      name: VB.icon
                                    })
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: VB.title
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: VB.summary
                                  }), dB && (0, DB.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [ZB(VB).sections.length, " ", dB]
                                  })]
                                }, TB)
                              }))
                            })
                          }
                          const KV = 240;

                          function rV(BB) {
                            let {
                              faces: TB
                            } = BB;
                            return (0, DB.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, DB.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${TB.top}")`
                                }
                              }), (0, DB.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${TB.left}")`
                                }
                              }), (0, DB.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${TB.right}")`
                                }
                              })]
                            })
                          }

                          function IV(BB) {
                            let {
                              src: TB
                            } = BB;
                            const [dB, yB] = (0, VB.useState)(!1);
                            return dB ? null : (0, DB.jsx)("img", {
                              src: TB,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${TB}`), yB(!0)
                              }
                            })
                          }

                          function cV(BB) {
                            let {
                              kind: TB
                            } = BB;
                            const dB = vd(TB),
                              yB = iV(),
                              lB = (0, JB.o)(),
                              [YB, gB] = (0, VB.useState)(""),
                              [oB, kB] = (0, VB.useState)(null),
                              [LB, OB] = (0, VB.useState)(KV),
                              [uB, EB] = (0, VB.useState)(null),
                              vB = (0, VB.useRef)(null),
                              iB = YB.trim().toLowerCase();
                            (0, VB.useEffect)((() => {
                              const BB = (0, sB.k)(lB.hash),
                                VB = dB.entries.find((dB => Id(TB, dB.name) === BB));
                              if (VB) vB.current = VB.name, gB(VB.name), kB(null), EB(VB.name);
                              else if (null !== vB.current) {
                                const BB = vB.current;
                                vB.current = null, gB((TB => TB === BB ? "" : TB)), EB(null)
                              }
                            }), [dB, TB, lB.hash, lB.key]), (0, VB.useEffect)((() => {
                              var BB;
                              null !== uB && (null === (BB = document.getElementById(Id(TB, uB))) || void 0 === BB || BB.scrollIntoView({
                                block: "center"
                              }))
                            }), [TB, uB]);
                            const NB = dB.entries.filter((BB => (!iB || BB.name.toLowerCase().includes(iB)) && (!oB || BB.variants.includes(oB))));
                            return (0, DB.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [dB.notes.length > 0 && (0, DB.jsx)("div", {
                                className: "DocsProse",
                                children: dB.notes.map((BB => (0, DB.jsx)("p", {
                                  children: BB
                                }, BB)))
                              }), dB.legend.length > 0 && (0, DB.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, DB.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, DB.jsx)("thead", {
                                    children: (0, DB.jsxs)("tr", {
                                      children: [(0, DB.jsx)("th", {
                                        children: "Code"
                                      }), (0, DB.jsx)("th", {
                                        children: "Variant"
                                      }), (0, DB.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, DB.jsx)("tbody", {
                                    children: dB.legend.map((BB => (0, DB.jsxs)("tr", {
                                      children: [(0, DB.jsx)("td", {
                                        children: (0, DB.jsx)("button", {
                                          type: "button",
                                          className: pB()("DocsVariantChip", {
                                            Active: oB === BB.code
                                          }),
                                          "aria-pressed": oB === BB.code,
                                          title: `Show only ${TB} with ${BB.meaning} variants`,
                                          onClick: () => {
                                            kB(oB === BB.code ? null : BB.code)
                                          },
                                          children: BB.code
                                        })
                                      }), (0, DB.jsx)("td", {
                                        children: BB.meaning
                                      }), (0, DB.jsx)("td", {
                                        children: (0, DB.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: BB.usage
                                        })
                                      })]
                                    }, BB.code)))
                                  })]
                                })
                              }), dB.examples.length > 0 && (0, DB.jsx)(fB, {
                                lang: "text",
                                code: dB.examples.join("\n")
                              }), (0, DB.jsx)(md, {
                                className: "DocsFilterBar",
                                value: YB,
                                placeholder: `Search ${dB.entries.length} ${TB}\u2026`,
                                label: `Search ${TB}`,
                                onChange: BB => {
                                  gB(BB), OB(KV)
                                },
                                count: iB || oB ? {
                                  visible: NB.length,
                                  total: dB.entries.length
                                } : null,
                                children: oB && (0, DB.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    kB(null)
                                  },
                                  children: [oB, " ", (0, DB.jsx)(HB, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, DB.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: NB.slice(0, LB).map((BB => {
                                  const dB = "blocks" === TB ? null === yB || void 0 === yB ? void 0 : yB.getBlockFaces(BB.name) : null,
                                    VB = yB && !dB ? yB.getItemTextureUrl(BB.name) : null;
                                  return (0, DB.jsxs)("div", {
                                    id: Id(TB, BB.name),
                                    className: pB()("DocsCatalogueTile", {
                                      Linked: BB.name === uB
                                    }),
                                    children: [(0, DB.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [dB && (0, DB.jsx)(rV, {
                                        faces: dB
                                      }), VB && (0, DB.jsx)(IV, {
                                        src: VB
                                      })]
                                    }), (0, DB.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: BB.name
                                    }), BB.variants.length > 0 && (0, DB.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: BB.variants.map((BB => (0, DB.jsx)("span", {
                                        children: BB
                                      }, BB)))
                                    }), (0, DB.jsx)(mB, {
                                      text: BB.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, BB.name)
                                }))
                              }), NB.length > LB && (0, DB.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  OB(NB.length)
                                },
                                children: ["Show all ", NB.length]
                              }), 0 === NB.length && (0, DB.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", TB, " match."]
                              })]
                            })
                          }
                          var SV = dB(4218),
                            PV = dB(1477);
                          const QV = .95 * SV.b;

                          function RV(BB) {
                            return /^\s*```/.test(BB)
                          }

                          function aV(BB, TB) {
                            const dB = [
                              []
                            ];
                            let VB = !1;
                            for (const yB of BB.split("\n")) !VB && TB(yB) && dB.at(-1).length > 0 && dB.push([]), RV(yB) && (VB = !VB), dB.at(-1).push(yB);
                            return dB.map((BB => BB.join("\n").trim())).filter(Boolean)
                          }

                          function ZV(BB, TB) {
                            const dB = `${"#".repeat(TB)} `,
                              VB = [];
                            let yB = !1;
                            for (const pB of BB.split("\n")) RV(pB) ? yB = !yB : !yB && pB.startsWith(dB) && VB.push(pB.slice(dB.length).trim());
                            return VB
                          }

                          function XV(BB) {
                            return BB.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class WV {
                            constructor(BB, TB) {
                              this.origin = TB, this.pages = void 0, this.partPaths = new Map;
                              const dB = BB.map((BB => {
                                const TB = TB => this.resolveLinks(BB, TB).length,
                                  dB = function(BB, TB) {
                                    const dB = BB.map((BB => TB(BB.markdown) + 2)),
                                      VB = dB.reduce(((BB, TB) => BB + TB), 0),
                                      yB = VB / Math.ceil(VB / QV),
                                      pB = [];
                                    let lB = 0;
                                    return BB.forEach(((BB, TB) => {
                                      const VB = dB[TB];
                                      (0 === pB.length || lB + VB > QV || lB + VB / 2 > yB) && (pB.push([]), lB = 0), pB.at(-1).push(BB), lB += VB
                                    })), pB
                                  }(function(BB, TB) {
                                    return aV(BB, (BB => BB.startsWith("## "))).flatMap((BB => {
                                      var dB;
                                      const VB = null !== (dB = ZV(BB, 2)[0]) && void 0 !== dB ? dB : "";
                                      if (TB(BB) <= QV) return [{
                                        markdown: BB,
                                        section: VB
                                      }];
                                      let yB = !1,
                                        pB = "";
                                      return aV(BB, (BB => {
                                        const TB = yB && "" !== BB.trim();
                                        return yB = "" === BB.trim(), TB
                                      })).map((BB => {
                                        var TB;
                                        const dB = ZV(BB, 3),
                                          yB = BB.startsWith("### ") ? dB[0] : pB;
                                        return pB = null !== (TB = dB.at(-1)) && void 0 !== TB ? TB : pB, {
                                          markdown: BB,
                                          section: VB || yB
                                        }
                                      }))
                                    }))
                                  }(XV(BB), TB), TB);
                                return {
                                  page: BB,
                                  groups: dB.length > 1 ? dB : []
                                }
                              }));
                              for (const {
                                  page: VB,
                                  groups: yB
                                }
                                of dB) yB.forEach(((BB, TB) => {
                                const dB = (0, SV.r)(VB.slug, TB);
                                for (const yB of BB.flatMap((BB => [...ZV(BB.markdown, 2), ...ZV(BB.markdown, 3)]))) {
                                  const BB = `${VB.id}#${(0,sB.m)(yB)}`;
                                  this.partPaths.has(BB) || this.partPaths.set(BB, dB)
                                }
                              }));
                              this.pages = dB.map((BB => {
                                let {
                                  page: TB,
                                  groups: dB
                                } = BB;
                                return {
                                  page: TB,
                                  path: (0, SV.q)(TB.slug),
                                  markdown: `# ${TB.title}\n\n${this.resolveLinks(TB,XV(TB))}\n`,
                                  parts: dB.map(((BB, VB) => this.renderPart(TB, BB, VB, dB.length)))
                                }
                              }))
                            }
                            url(BB) {
                              return `${this.origin}${BB}`
                            }
                            getPage(BB) {
                              return this.pages.find((TB => TB.page.id === BB))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((BB => (BB.parts.length > 0 ? BB.parts : [{
                                path: BB.path,
                                label: "",
                                markdown: BB.markdown
                              }]).filter((BB => BB.markdown.length > SV.b))))
                            }
                            markdownUrl(BB, TB) {
                              const dB = TB && this.partPaths.get(`${BB.id}#${TB}`) || (0, SV.q)(BB.slug);
                              return this.url(TB ? `${dB}#${TB}` : dB)
                            }
                            resolveLinks(BB, TB) {
                              return TB.replace(/\]\((#[^)]+)\)/g, ((TB, dB) => {
                                var VB;
                                const yB = null !== (VB = WB(dB)) && void 0 !== VB ? VB : this.samePageTarget(BB, dB);
                                return yB ? `](${this.markdownUrl(yB.page,yB.anchor)})` : TB
                              }))
                            }
                            samePageTarget(BB, TB) {
                              const dB = (0, sB.m)(TB.slice(1));
                              return XB(BB, dB) ? {
                                page: BB,
                                anchor: dB
                              } : null
                            }
                            renderPart(BB, TB, dB, VB) {
                              const yB = function(BB) {
                                  const TB = BB.map((BB => BB.section)).filter(Boolean);
                                  if (0 === TB.length) return "";
                                  const dB = TB[0],
                                    VB = TB.at(-1);
                                  return dB === VB ? dB : `${dB} to ${VB}`
                                }(TB),
                                pB = TB.map((BB => BB.markdown)).join("\n\n"),
                                lB = yB ? `It covers ${yB}. ` : "",
                                JB = `Part ${dB+1} of ${VB} of [${BB.title}](${this.url((0,SV.q)(BB.slug))}). ${lB}[llms.txt](${this.url(SV.g)}) lists every part.`;
                              return {
                                path: (0, SV.r)(BB.slug, dB),
                                label: yB,
                                markdown: `# ${BB.title}, part ${dB+1} of ${VB}\n\n${JB}\n\n${this.resolveLinks(BB,pB)}\n`
                              }
                            }
                            llmsTxt(BB) {
                              const TB = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${hV(SV.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const dB of QB) {
                                TB.push("", `## ${dB.title}`, "");
                                for (const BB of dB.pageIds) {
                                  const dB = this.getPage(BB),
                                    {
                                      page: VB,
                                      parts: yB
                                    } = dB,
                                    pB = `About ${hV(dB.markdown.length)} tokens${yB.length>0?`, in ${yB.length} parts:`:"."}`;
                                  TB.push(`- [${VB.title}](${this.url(dB.path)}): ${VB.summary} ${pB}`), yB.forEach(((BB, dB) => {
                                    TB.push(`  - [Part ${dB+1}${BB.label?`: ${BB.label}`:""}](${this.url(BB.path)})`)
                                  }))
                                }
                              }
                              return TB.push("", "## Optional", "", `- [Every page in one file](${this.url(SV.e)}): About ${hV(BB.length)} tokens, for a model with a large context window.`, ""), TB.join("\n")
                            }
                            llmsFullTxt() {
                              return QB.flatMap((BB => BB.pageIds.map((BB => this.getPage(BB).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const BB = this.llmsFullTxt(),
                                TB = this.llmsTxt(BB),
                                dB = new Map([
                                  [SV.n, TB],
                                  [SV.g, TB],
                                  [SV.e, BB]
                                ]);
                              for (const VB of this.pages) {
                                dB.set(VB.path, VB.markdown);
                                for (const BB of VB.parts) dB.set(BB.path, BB.markdown)
                              }
                              return dB
                            }
                          }

                          function hV(BB) {
                            return `${Math.max(1,Math.round(BB/4e3))}K`
                          }
                          let CV = null;

                          function GV() {
                            return CV ??= new WV(PB, PV.c), CV
                          }
                          const qV = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function xV(BB) {
                            return GV().getPage(BB.id).parts.length > 0 ? `Read ${SV.k}, then the parts of the Bloxd Code API's ${BB.title} page it lists, so I can ask questions about it.` : `Read ${PV.c}${(0,SV.q)(BB.slug)} so I can ask questions about it. ${SV.k} lists every page of the Bloxd Code API docs.`
                          }

                          function jV(BB) {
                            let {
                              page: TB
                            } = BB;
                            const [dB, VB] = vB();
                            return (0, DB.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, DB.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  VB(GV().getPage(TB.id).markdown)
                                },
                                children: [(0, DB.jsx)(HB, {
                                  name: !1 === (null === dB || void 0 === dB ? void 0 : dB.failed) ? "check" : "copy"
                                }), (0, DB.jsx)("span", {
                                  children: dB ? dB.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), qV.map((BB => (0, DB.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${BB.url}${encodeURIComponent(xV(TB))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, DB.jsx)(HB, {
                                  name: "external-link"
                                }), (0, DB.jsxs)("span", {
                                  children: ["Open in ", BB.name]
                                })]
                              }, BB.name)))]
                            })
                          }

                          function AV(BB) {
                            return `#${[0,1,2].map((TB=>Math.round(Math.min(255,Math.max(0,BB[TB]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function bV(BB) {
                            return [parseInt(BB.slice(1, 3), 16), parseInt(BB.slice(3, 5), 16), parseInt(BB.slice(5, 7), 16)]
                          }

                          function nV(BB) {
                            let {
                              label: TB,
                              min: dB,
                              max: VB,
                              step: yB,
                              low: pB,
                              high: lB,
                              onChange: JB
                            } = BB;
                            return (0, DB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, DB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, DB.jsx)("span", {
                                  children: TB
                                }), (0, DB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: pB === lB ? pB : `${pB}\u2013${lB}`
                                })]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, DB.jsx)("input", {
                                  type: "range",
                                  min: dB,
                                  max: VB,
                                  step: yB,
                                  value: Math.min(VB, pB),
                                  "aria-label": `Minimum ${TB.toLowerCase()}`,
                                  onChange: BB => {
                                    const TB = Number(BB.target.value);
                                    JB(TB, Math.max(TB, lB))
                                  }
                                }), (0, DB.jsx)("input", {
                                  type: "range",
                                  min: dB,
                                  max: VB,
                                  step: yB,
                                  value: Math.min(VB, lB),
                                  "aria-label": `Maximum ${TB.toLowerCase()}`,
                                  onChange: BB => {
                                    const TB = Number(BB.target.value);
                                    JB(Math.min(TB, pB), TB)
                                  }
                                })]
                              })]
                            })
                          }

                          function eV(BB) {
                            let {
                              label: TB,
                              min: dB,
                              max: VB,
                              step: yB,
                              value: pB,
                              onChange: lB,
                              format: JB = String
                            } = BB;
                            return (0, DB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, DB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, DB.jsx)("span", {
                                  children: TB
                                }), (0, DB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: JB(pB)
                                })]
                              }), (0, DB.jsx)("input", {
                                type: "range",
                                min: dB,
                                max: VB,
                                step: yB,
                                value: Math.min(VB, Math.max(dB, pB)),
                                "aria-label": TB,
                                onChange: BB => {
                                  lB(Number(BB.target.value))
                                }
                              })]
                            })
                          }

                          function By(BB) {
                            let {
                              opts: TB,
                              onChange: dB
                            } = BB;
                            const VB = TB.colorGradients;
                            if (!Cd(VB)) return (0, DB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, DB.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, DB.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, DB.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: VB.map(((BB, TB) => (0, DB.jsx)("input", {
                                  type: "color",
                                  value: AV(BB.color),
                                  "aria-label": `Colour ${TB+1}`,
                                  onChange: BB => {
                                    const yB = [...VB];
                                    yB[TB] = {
                                      color: bV(BB.target.value)
                                    }, dB(yB)
                                  }
                                }, TB)))
                              })]
                            });
                            const yB = (BB, TB) => {
                              const yB = [...VB];
                              yB[BB] = TB, dB(yB)
                            };
                            return (0, DB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, DB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, DB.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, DB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), VB.map(((BB, TB) => {
                                var dB;
                                const VB = null !== (dB = BB.maxColor) && void 0 !== dB ? dB : BB.minColor;
                                return (0, DB.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, DB.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * BB.timeFraction), "%"]
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${AV(BB.minColor)}, ${AV(VB)})`
                                    }
                                  }), (0, DB.jsx)("input", {
                                    type: "color",
                                    value: AV(BB.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: dB => {
                                      yB(TB, {
                                        ...BB,
                                        minColor: [...bV(dB.target.value), BB.minColor[3]]
                                      })
                                    }
                                  }), (0, DB.jsx)("input", {
                                    type: "color",
                                    value: AV(VB),
                                    "aria-label": `Maximum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: dB => {
                                      yB(TB, {
                                        ...BB,
                                        maxColor: [...bV(dB.target.value), VB[3]]
                                      })
                                    }
                                  })]
                                }, TB)
                              }))]
                            })
                          }
                          const Ty = [-.5, -.5, -.5],
                            dy = [.5, .5, .5],
                            Vy = [0, 1, 2, 3, 4, 5, 6, 7].map((BB => [1 & BB ? dy[0] : Ty[0], 2 & BB ? dy[1] : Ty[1], 4 & BB ? dy[2] : Ty[2]]));class yy {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(BB, TB, dB, VB) {
                              const yB = Math.round(31 * TB),
                                pB = Math.round(31 * dB),
                                lB = Math.round(31 * VB),
                                JB = `${yB}|${pB}|${lB}`;
                              let YB = this.tints.get(BB);
                              (!YB || YB.size > 2e3) && (YB = new Map, this.tints.set(BB, YB));
                              let gB = YB.get(JB);
                              if (gB) return gB;
                              gB = document.createElement("canvas"), gB.width = BB.naturalWidth || 16, gB.height = BB.naturalHeight || 16;
                              const oB = gB.getContext("2d");
                              return oB ? (oB.imageSmoothingEnabled = !1, oB.drawImage(BB, 0, 0, gB.width, gB.height), oB.globalCompositeOperation = "multiply", oB.fillStyle = `rgb(${yB/31*255}, ${pB/31*255}, ${lB/31*255})`, oB.fillRect(0, 0, gB.width, gB.height), oB.globalCompositeOperation = "destination-in", oB.drawImage(BB, 0, 0, gB.width, gB.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), YB.set(JB, gB), gB
                            }
                          }

                          function py(BB) {
                            let {
                              opts: TB,
                              textureUrl: dB,
                              burst: yB,
                              paused: pB
                            } = BB;
                            const lB = (0, VB.useRef)(null),
                              JB = (0, VB.useRef)(TB);
                            JB.current = TB;
                            const YB = (0, VB.useRef)(pB);
                            YB.current = pB;
                            const gB = (0, VB.useRef)(null),
                              oB = (0, VB.useRef)(null),
                              kB = (0, VB.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(BB) {
                                let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const dB = [-.5, -.5, -.5],
                                  VB = [.5, .5, .5];
                                let yB = .5;
                                for (let pB = 0; pB < 40; pB++) {
                                  const pB = qd(BB, dB, VB, TB),
                                    lB = Math.max(pB.life / 30, .001);
                                  for (; Ad(pB, BB.gravity, lB);) yB = Math.max(yB, Math.hypot(pB.pos[0], pB.pos[1], pB.pos[2]) + pB.size / 2)
                                }
                                return yB
                              }(TB)))), [TB]),
                              LB = (0, VB.useRef)(kB);
                            return LB.current = kB, (0, VB.useEffect)((() => {
                              if (gB.current = null, !dB) return;
                              const BB = new Image;
                              let TB = !1;
                              return BB.onload = () => {
                                TB || (gB.current = BB)
                              }, BB.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${dB}`)
                              }, BB.src = dB, () => {
                                TB = !0
                              }
                            }), [dB]), (0, VB.useEffect)((() => {
                              var BB;
                              null === (BB = oB.current) || void 0 === BB || BB.call(oB)
                            }), [TB, yB]), (0, VB.useEffect)((() => {
                              const BB = lB.current,
                                TB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
                              if (!BB || !TB) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const dB = new yy;
                              let VB = [],
                                yB = 0,
                                pB = -.7,
                                kB = LB.current,
                                OB = performance.now(),
                                DB = 0,
                                uB = !0,
                                HB = null;
                              const EB = () => {
                                const BB = JB.current,
                                  TB = Math.min(400, Math.max(0, Math.ceil(BB.manualEmitCount)));
                                VB = [];
                                for (let dB = 0; dB < TB; dB++) VB.push(qd(BB, Ty, dy, Math.random));
                                yB = 0
                              };
                              oB.current = EB, EB();
                              const vB = lB => {
                                DB = requestAnimationFrame(vB);
                                const oB = Math.min(.05, (lB - OB) / 1e3);
                                if (OB = lB, !uB) return;
                                const mB = window.devicePixelRatio || 1,
                                  iB = Math.round(BB.clientWidth * mB),
                                  NB = Math.round(BB.clientHeight * mB);
                                if (0 === iB || 0 === NB) return;
                                BB.width === iB && BB.height === NB || (BB.width = iB, BB.height = NB);
                                const tB = JB.current;
                                null === HB && (pB += .18 * oB), kB += (LB.current - kB) * Math.min(1, 4 * oB);
                                const fB = .6 * oB;
                                VB = VB.filter((BB => Ad(BB, tB.gravity, fB))), 0 !== VB.length || YB.current || (yB += oB, yB > .6 && EB());
                                const sB = function(BB, TB, dB, VB) {
                                  const yB = 3.2 * VB,
                                    pB = .44 * Math.min(BB, TB) * yB / VB,
                                    lB = Math.cos(dB),
                                    JB = Math.sin(dB),
                                    YB = Math.cos(.42),
                                    gB = Math.sin(.42);
                                  return (dB, VB, oB) => {
                                    const kB = dB * JB + oB * lB,
                                      LB = yB - (VB * gB + kB * YB);
                                    if (LB < .05) return null;
                                    const OB = pB / LB;
                                    return {
                                      x: BB / 2 + (dB * lB - oB * JB) * OB,
                                      y: TB / 2 - (VB * YB - kB * gB) * OB,
                                      scale: OB,
                                      depth: LB
                                    }
                                  }
                                }(iB, NB, pB, kB);
                                ! function(BB, TB, dB, VB, yB) {
                                  const pB = BB.createLinearGradient(0, 0, 0, dB);
                                  pB.addColorStop(0, "#23262d"), pB.addColorStop(1, "#16181c"), BB.globalCompositeOperation = "source-over", BB.globalAlpha = 1, BB.fillStyle = pB, BB.fillRect(0, 0, TB, dB);
                                  const lB = (TB, dB) => {
                                      const yB = VB(TB[0], TB[1], TB[2]),
                                        pB = VB(dB[0], dB[1], dB[2]);
                                      yB && pB && (BB.beginPath(), BB.moveTo(yB.x, yB.y), BB.lineTo(pB.x, pB.y), BB.stroke())
                                    },
                                    JB = Math.ceil(yB) + 1,
                                    YB = Ty[1];
                                  BB.lineWidth = 1, BB.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let gB = -JB; gB <= JB; gB++) lB([gB + .5, YB, .5 - JB], [gB + .5, YB, JB + .5]), lB([.5 - JB, YB, gB + .5], [JB + .5, YB, gB + .5]);
                                  BB.strokeStyle = "rgba(255, 255, 255, 0.28)", BB.setLineDash([4, 4]);
                                  for (const gB of Vy)
                                    for (const BB of Vy) {
                                      const TB = [0, 1, 2].filter((TB => gB[TB] !== BB[TB]));
                                      1 === TB.length && gB[TB[0]] < BB[TB[0]] && lB(gB, BB)
                                    }
                                  BB.setLineDash([])
                                }(TB, iB, NB, sB, kB);
                                const MB = gB.current,
                                  zB = VB.map((BB => ({
                                    particle: BB,
                                    at: sB(BB.pos[0], BB.pos[1], BB.pos[2])
                                  }))).filter((BB => null !== BB.at)).sort(((BB, TB) => TB.at.depth - BB.at.depth));
                                TB.imageSmoothingEnabled = !1;
                                for (const BB of function(BB) {
                                    switch (BB) {
                                      case ad.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case ad.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case ad.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case ad.e.MultiplyAdd:
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
                                  }(tB.blendMode)) {
                                  TB.globalCompositeOperation = BB.operation;
                                  for (const {
                                      particle: VB,
                                      at: yB
                                    }
                                    of zB) {
                                    const [pB, lB, JB, YB] = jd(VB), gB = Math.max(1, VB.size * yB.scale);
                                    TB.globalAlpha = BB.usesAlpha ? Math.min(1, Math.max(0, YB)) : 1, MB ? TB.drawImage(dB.get(MB, pB, lB, JB), yB.x - gB / 2, yB.y - gB / 2, gB, gB) : (TB.fillStyle = `rgb(${255*pB}, ${255*lB}, ${255*JB})`, TB.fillRect(yB.x - gB / 2, yB.y - gB / 2, gB, gB))
                                  }
                                }
                                TB.globalCompositeOperation = "source-over", TB.globalAlpha = 1
                              };
                              DB = requestAnimationFrame(vB);
                              const mB = new IntersectionObserver((BB => {
                                let [TB] = BB;
                                uB = TB.isIntersecting
                              }));
                              mB.observe(BB);
                              const iB = TB => {
                                  HB = TB.clientX, BB.setPointerCapture(TB.pointerId)
                                },
                                NB = BB => {
                                  null !== HB && (pB += .01 * (BB.clientX - HB), HB = BB.clientX)
                                },
                                tB = () => {
                                  HB = null
                                };
                              return BB.addEventListener("pointerdown", iB), BB.addEventListener("pointermove", NB), BB.addEventListener("pointerup", tB), BB.addEventListener("pointercancel", tB), () => {
                                cancelAnimationFrame(DB), mB.disconnect(), oB.current = null, BB.removeEventListener("pointerdown", iB), BB.removeEventListener("pointermove", NB), BB.removeEventListener("pointerup", tB), BB.removeEventListener("pointercancel", tB)
                              }
                            }), []), (0, DB.jsx)("canvas", {
                              ref: lB,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${TB.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const ly = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Jy = [{
                              mode: ad.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: ad.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: ad.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: ad.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: ad.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Yy = (0, VB.forwardRef)((function(BB, TB) {
                              var dB, yB;
                              let {
                                textures: lB
                              } = BB;
                              const JB = iV(),
                                YB = (0, VB.useRef)(null),
                                [gB, oB] = (0, VB.useState)(Xd),
                                [kB, LB] = (0, VB.useState)("example"),
                                [OB, uB] = (0, VB.useState)(0),
                                [EB, vB] = (0, VB.useState)(!1),
                                iB = BB => {
                                  const TB = "example" === BB ? Xd : Zd(BB);
                                  TB && (oB(TB), LB(BB))
                                };
                              (0, VB.useImperativeHandle)(TB, (() => ({
                                preview: BB => {
                                  var TB;
                                  iB(BB), null === (TB = YB.current) || void 0 === TB || TB.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const NB = BB => {
                                  oB({
                                    ...gB,
                                    ...BB
                                  }), LB(null)
                                },
                                tB = function(BB, TB) {
                                  if (null !== TB) return `${BV}    presetId: "${TB}",\n${TV}\n})`;
                                  const dB = BB.velocityGradients.map((BB => `        {\n            timeFraction: ${bd(BB.timeFraction)},\n            factor: ${bd(BB.factor)},\n            factor2: ${bd(BB.factor2)},\n        },`)),
                                    VB = [`    dir1: ${nd(BB.dir1)},`, `    dir2: ${nd(BB.dir2)},`, TV, `    texture: "${BB.texture}",`, `    minLifeTime: ${bd(BB.minLifeTime)},`, `    maxLifeTime: ${bd(BB.maxLifeTime)},`, `    minEmitPower: ${bd(BB.minEmitPower)},`, `    maxEmitPower: ${bd(BB.maxEmitPower)},`, `    minSize: ${bd(BB.minSize)},`, `    maxSize: ${bd(BB.maxSize)},`, `    manualEmitCount: ${bd(BB.manualEmitCount)},`, `    gravity: ${nd(BB.gravity)},`, `    colorGradients: ${ed(BB.colorGradients,"    ")},`, `    velocityGradients: ${dB.length>0?`[\n${dB.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${bd(BB.blendMode)},`];
                                  return void 0 !== BB.hideDist && VB.push(`    hideDist: ${bd(BB.hideDist)},`), `${BV}${VB.join("\n")}\n})`
                                }(gB, null === kB || "example" === kB ? null : kB),
                                sB = lB.includes(gB.texture) ? lB : [...lB, gB.texture];
                              return (0, DB.jsxs)("section", {
                                ref: YB,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, DB.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, DB.jsxs)("div", {
                                    children: [(0, DB.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, DB.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, DB.jsx)(mB, {
                                    text: tB,
                                    label: "Copy code"
                                  })]
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, DB.jsx)("button", {
                                    type: "button",
                                    className: pB()("DocsVariantChip", {
                                      Active: "example" === kB
                                    }),
                                    onClick: () => {
                                      iB("example")
                                    },
                                    children: "Example"
                                  }), ly.filter((BB => null !== Zd(BB))).map((BB => (0, DB.jsx)("button", {
                                    type: "button",
                                    className: pB()("DocsVariantChip", {
                                      Active: kB === BB
                                    }),
                                    onClick: () => {
                                      iB(BB)
                                    },
                                    children: BB
                                  }, BB))), (0, DB.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== kB && void 0 !== kB ? kB : "custom",
                                    "aria-label": "Preset",
                                    onChange: BB => {
                                      iB(BB.target.value)
                                    },
                                    children: [(0, DB.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === kB && (0, DB.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Rd.e.map((BB => (0, DB.jsx)("option", {
                                      value: BB,
                                      children: BB
                                    }, BB)))]
                                  })]
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, DB.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, DB.jsx)(py, {
                                      opts: gB,
                                      textureUrl: null !== (dB = null === JB || void 0 === JB ? void 0 : JB.getParticleTextureUrl(gB.texture)) && void 0 !== dB ? dB : null,
                                      burst: OB,
                                      paused: EB
                                    }), (0, DB.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, DB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          uB(OB + 1)
                                        },
                                        children: [(0, DB.jsx)(HB, {
                                          name: "replay"
                                        }), (0, DB.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, DB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": EB,
                                        onClick: () => {
                                          vB(!EB)
                                        },
                                        children: [(0, DB.jsx)(HB, {
                                          name: EB ? "play" : "pause"
                                        }), (0, DB.jsx)("span", {
                                          children: EB ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, DB.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, DB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, DB.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, DB.jsx)("span", {
                                          children: "Texture"
                                        }), (0, DB.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: gB.texture
                                        })]
                                      }), (0, DB.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: sB.map((BB => {
                                          var TB;
                                          const dB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.getParticleTextureUrl(BB)) && void 0 !== TB ? TB : null;
                                          return (0, DB.jsx)("button", {
                                            type: "button",
                                            className: pB()("DocsParticleTexture", {
                                              Active: gB.texture === BB
                                            }),
                                            title: BB,
                                            "aria-label": BB,
                                            "aria-pressed": gB.texture === BB,
                                            onClick: () => {
                                              NB({
                                                texture: BB
                                              })
                                            },
                                            children: dB ? (0, DB.jsx)("img", {
                                              src: dB,
                                              alt: ""
                                            }) : (0, DB.jsx)(HB, {
                                              name: "image"
                                            })
                                          }, BB)
                                        }))
                                      })]
                                    }), (0, DB.jsx)(eV, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: gB.manualEmitCount,
                                      onChange: BB => {
                                        NB({
                                          manualEmitCount: BB
                                        })
                                      }
                                    }), (0, DB.jsx)(nV, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: gB.minLifeTime,
                                      high: gB.maxLifeTime,
                                      onChange: (BB, TB) => {
                                        NB({
                                          minLifeTime: BB,
                                          maxLifeTime: TB
                                        })
                                      }
                                    }), (0, DB.jsx)(nV, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: gB.minEmitPower,
                                      high: gB.maxEmitPower,
                                      onChange: (BB, TB) => {
                                        NB({
                                          minEmitPower: BB,
                                          maxEmitPower: TB
                                        })
                                      }
                                    }), (0, DB.jsx)(nV, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: gB.minSize,
                                      high: gB.maxSize,
                                      onChange: (BB, TB) => {
                                        NB({
                                          minSize: BB,
                                          maxSize: TB
                                        })
                                      }
                                    }), (0, DB.jsx)(eV, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (yB = gB.gravity[1]) && void 0 !== yB ? yB : 0,
                                      onChange: BB => {
                                        var TB, dB;
                                        NB({
                                          gravity: [null !== (TB = gB.gravity[0]) && void 0 !== TB ? TB : 0, BB, null !== (dB = gB.gravity[2]) && void 0 !== dB ? dB : 0]
                                        })
                                      }
                                    }), (0, DB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, DB.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, DB.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, DB.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: gB.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: BB => {
                                          NB({
                                            blendMode: Number(BB.target.value)
                                          })
                                        },
                                        children: Jy.map((BB => {
                                          let {
                                            mode: TB,
                                            label: dB
                                          } = BB;
                                          return (0, DB.jsx)("option", {
                                            value: TB,
                                            children: dB
                                          }, TB)
                                        }))
                                      })]
                                    }), (0, DB.jsx)(By, {
                                      opts: gB,
                                      onChange: BB => {
                                        NB({
                                          colorGradients: BB
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, DB.jsx)(fB, {
                                  code: tB,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var gy = dB(3888),
                            oy = dB(1657);

                          function ky(BB, TB) {
                            return BB ? gy.c.includes(TB) ? BB.getIngameIconUrl(TB) : BB.getItemIconUrl(TB) : null
                          }

                          function Ly(BB) {
                            var TB, dB, VB;
                            let {
                              part: yB,
                              assets: lB
                            } = BB;
                            const JB = ky(lB, yB.icon),
                              YB = null !== (TB = null === (dB = yB.style) || void 0 === dB ? void 0 : dB.fontSize) && void 0 !== TB ? TB : "1.8em",
                              gB = (0, QT.Yb)(yB.style);
                            return (0, DB.jsxs)("span", {
                              className: pB()("DocsBloxdTextIcon", {
                                Missing: !JB
                              }),
                              style: {
                                width: YB,
                                height: YB,
                                opacity: null === (VB = yB.style) || void 0 === VB ? void 0 : VB.opacity
                              },
                              title: JB ? void 0 : `No Bloxd icon, item or block is called "${yB.icon}"`,
                              children: [JB && gB && (0, DB.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: gB,
                                  maskImage: `url("${JB}")`,
                                  WebkitMaskImage: `url("${JB}")`
                                }
                              }), JB ? (0, DB.jsx)("img", {
                                src: JB,
                                alt: "",
                                className: pB()({
                                  Tinted: gB
                                })
                              }) : (0, DB.jsx)(HB, {
                                name: "image"
                              })]
                            })
                          }

                          function Oy(BB) {
                            let {
                              parts: TB,
                              className: dB
                            } = BB;
                            const VB = iV(),
                              yB = [];
                            let lB = [];
                            const JB = BB => {
                              lB.length > 0 && (yB.push((0, DB.jsx)(oy.e, {
                                text: lB
                              }, `run-${BB}`)), lB = [])
                            };
                            return TB.forEach(((BB, TB) => {
                              "icon" !== WT(BB) || aT(BB.icon) ? lB.push(BB) : (JB(TB), yB.push((0, DB.jsx)(Ly, {
                                part: BB,
                                assets: VB
                              }, `icon-${TB}`)))
                            })), JB(TB.length), (0, DB.jsx)("div", {
                              className: pB()("DocsStyledTextPreview", dB),
                              children: yB
                            })
                          }
                          const Dy = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let uy = null;

                          function Hy(BB) {
                            if (uy ??= document.createElement("canvas").getContext("2d"), !uy) return "#000000";
                            uy.fillStyle = "#000000", uy.fillStyle = BB;
                            const TB = uy.fillStyle;
                            return TB.startsWith("#") ? TB : "#000000"
                          }

                          function Ey(BB) {
                            let {
                              value: TB,
                              label: dB,
                              onChange: VB
                            } = BB;
                            return (0, DB.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, DB.jsx)("input", {
                                type: "color",
                                value: Hy(TB),
                                "aria-label": `${dB} picker`,
                                onChange: BB => {
                                  VB(BB.target.value)
                                }
                              }), (0, DB.jsx)("input", {
                                type: "text",
                                value: TB,
                                placeholder: "#ffb914 or gold",
                                "aria-label": dB,
                                spellCheck: !1,
                                onChange: BB => {
                                  VB(BB.target.value)
                                }
                              })]
                            })
                          }

                          function vy(BB) {
                            let {
                              value: TB,
                              fontAwesomeIcons: dB,
                              onChange: yB
                            } = BB;
                            const lB = iV(),
                              [JB, YB] = (0, VB.useState)(aT(TB) ? "fontAwesome" : "bloxd"),
                              [gB, oB] = (0, VB.useState)(""),
                              kB = gB.trim().toLowerCase(),
                              LB = "bloxd" === JB ? gy.c : dB,
                              OB = kB ? LB.filter((BB => BB.toLowerCase().includes(kB))) : LB;
                            return (0, DB.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, DB.jsx)("input", {
                                type: "text",
                                value: TB,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: BB => {
                                  yB(BB.target.value)
                                }
                              }), (0, DB.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, DB.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((BB => (0, DB.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": JB === BB,
                                    className: pB()("DocsVariantChip", {
                                      Active: JB === BB
                                    }),
                                    onClick: () => {
                                      YB(BB)
                                    },
                                    children: "bloxd" === BB ? `Bloxd icons (${gy.c.length})` : `Font Awesome (${dB.length})`
                                  }, BB))), (0, DB.jsx)("input", {
                                    type: "search",
                                    value: gB,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: BB => {
                                      oB(BB.target.value)
                                    }
                                  })
                                ]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [OB.map((BB => {
                                  const dB = "bloxd" === JB ? ky(lB, BB) : null;
                                  return (0, DB.jsx)("button", {
                                    type: "button",
                                    title: BB,
                                    "aria-label": BB,
                                    "aria-pressed": BB === TB,
                                    className: pB()("DocsIconPickerOption", {
                                      Active: BB === TB
                                    }),
                                    onClick: () => {
                                      yB(BB)
                                    },
                                    children: "fontAwesome" === JB ? (0, DB.jsx)(Nd.e, {
                                      name: BB
                                    }) : dB ? (0, DB.jsx)("img", {
                                      src: dB,
                                      alt: ""
                                    }) : (0, DB.jsx)(HB, {
                                      name: "image"
                                    })
                                  }, BB)
                                })), 0 === OB.length && (0, DB.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", gB, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function my(BB) {
                            let {
                              property: TB,
                              value: dB,
                              fontAwesomeIcons: VB,
                              onChange: yB
                            } = BB;
                            const {
                              field: pB,
                              label: lB
                            } = TB, JB = BB => "" !== BB || TB.isRequired ? BB : void 0;
                            switch (pB.kind) {
                              case "text":
                                return pB.multiline ? (0, DB.jsx)("textarea", {
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  rows: 2,
                                  "aria-label": lB,
                                  onChange: BB => {
                                    yB(BB.target.value)
                                  }
                                }) : (0, DB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  "aria-label": lB,
                                  onChange: BB => {
                                    yB(JB(BB.target.value))
                                  }
                                });
                              case "size":
                                return (0, DB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  placeholder: TB.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": lB,
                                  spellCheck: !1,
                                  onChange: BB => {
                                    yB(JB(BB.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, DB.jsx)(Ey, {
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  label: lB,
                                  onChange: BB => {
                                    yB(JB(BB))
                                  }
                                });
                              case "colours": {
                                const BB = Array.isArray(dB) ? dB : [],
                                  TB = BB => {
                                    yB(BB.length > 0 ? BB : void 0)
                                  };
                                return (0, DB.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [BB.map(((dB, VB) => (0, DB.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, DB.jsx)(Ey, {
                                      value: dB,
                                      label: `${lB} ${VB+1}`,
                                      onChange: dB => {
                                        TB(BB.map(((BB, TB) => TB === VB ? dB : BB)))
                                      }
                                    }), (0, DB.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${VB+1}`,
                                      onClick: () => {
                                        TB(BB.filter(((BB, TB) => TB !== VB)))
                                      },
                                      children: (0, DB.jsx)(HB, {
                                        name: "cross"
                                      })
                                    })]
                                  }, VB))), (0, DB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var dB;
                                      TB([...BB, null !== (dB = BB.at(-1)) && void 0 !== dB ? dB : "#ffffff"])
                                    },
                                    children: [(0, DB.jsx)(HB, {
                                      name: "plus"
                                    }), 0 === BB.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var YB;
                                const BB = "number" === typeof dB ? dB : Number(null !== (YB = TB.defaultText) && void 0 !== YB ? YB : 0);
                                return (0, DB.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, DB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: BB,
                                    "aria-label": lB,
                                    onChange: BB => {
                                      yB(Number(BB.target.value))
                                    }
                                  }), (0, DB.jsx)("output", {
                                    children: BB.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, DB.jsxs)("select", {
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  "aria-label": lB,
                                  onChange: BB => {
                                    yB(JB(BB.target.value))
                                  },
                                  children: [!TB.isRequired && (0, DB.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", TB.defaultText, ")"]
                                  }), pB.options.map((BB => (0, DB.jsx)("option", {
                                    value: BB,
                                    children: BB
                                  }, BB)))]
                                });
                              case "icon":
                                return (0, DB.jsx)(vy, {
                                  value: String(null !== dB && void 0 !== dB ? dB : ""),
                                  fontAwesomeIcons: VB,
                                  onChange: yB
                                })
                            }
                          }

                          function iy(BB) {
                            let TB;
                            try {
                              TB = JSON.parse(BB)
                            } catch (dB) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${dB.message}`
                              }
                            }
                            return dd(TB) ? {
                              part: TB,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Ny(BB) {
                            let {
                              parts: TB,
                              index: dB,
                              fontAwesomeIcons: yB,
                              onChange: pB,
                              Kw: lB,
                              onClose: JB
                            } = BB;
                            const YB = (0, VB.useContext)(DT),
                              oB = (0, VB.useRef)(null),
                              kB = TB[dB],
                              LB = WT(kB),
                              [OB, uB] = (0, VB.useState)((() => JSON.stringify(kB, null, 2))),
                              EB = (0, VB.useMemo)((() => "other" === LB ? iy(OB).error : null), [LB, OB]);
                            (0, VB.useEffect)((() => {
                              var BB;
                              null === (BB = oB.current) || void 0 === BB || BB.focus()
                            }), []);
                            const vB = (0, DB.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && JB()
                              },
                              children: (0, DB.jsxs)("div", {
                                ref: oB,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${dB+1}: ${ZT[LB]}`,
                                tabIndex: -1,
                                onKeyDown: BB => {
                                  "Escape" === BB.key ? (BB.stopPropagation(), JB()) : "Tab" === BB.key && oB.current && function(BB, TB) {
                                    const dB = Array.from(BB.querySelectorAll(UT)),
                                      VB = dB[0],
                                      yB = dB.at(-1);
                                    if (!VB || !yB) return;
                                    const pB = document.activeElement;
                                    !TB.shiftKey || pB !== VB && pB !== BB ? TB.shiftKey || pB !== yB || (TB.preventDefault(), VB.focus()) : (TB.preventDefault(), yB.focus())
                                  }(oB.current, BB)
                                },
                                children: [(0, DB.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, DB.jsxs)("div", {
                                    children: [(0, DB.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", dB + 1]
                                    }), (0, DB.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: ZT[LB]
                                    })]
                                  }), (0, DB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: JB,
                                    children: (0, DB.jsx)(HB, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, DB.jsx)(Oy, {
                                  parts: TB,
                                  className: "DocsTextDialogPreview"
                                }), (0, DB.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === LB ? (0, DB.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, DB.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, DB.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: OB,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: BB => {
                                        uB(BB.target.value);
                                        const TB = iy(BB.target.value);
                                        null !== TB.part && pB(TB.part)
                                      }
                                    }), EB && (0, DB.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: EB
                                    })]
                                  }) : CT[LB].map((BB => {
                                    const TB = qT(kB, BB.path),
                                      dB = BB.isRequired ? JSON.stringify(jT(kB, BB.path)) === JSON.stringify(kB) : void 0 === TB;
                                    return (0, DB.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, DB.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, DB.jsx)("span", {
                                          children: BB.label
                                        }), (0, DB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: dB,
                                          "aria-label": `Reset ${BB.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            pB(jT(kB, BB.path))
                                          },
                                          children: [(0, DB.jsx)(HB, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, DB.jsx)(my, {
                                        property: BB,
                                        value: TB,
                                        fontAwesomeIcons: yB,
                                        onChange: TB => {
                                          pB(xT(kB, BB.path, TB))
                                        }
                                      }), !BB.isRequired && (0, DB.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", BB.defaultText]
                                      })]
                                    }, BB.path.join("."))
                                  }))
                                }), (0, DB.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, DB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: lB,
                                    children: [(0, DB.jsx)(HB, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, DB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: JB,
                                    children: "Done"
                                  })]
                                }), (0, DB.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Dy.map((BB => (0, DB.jsx)("option", {
                                    value: BB
                                  }, BB)))
                                })]
                              })
                            });
                            return YB ? (0, gB.createPortal)(vB, YB) : vB
                          }
                          const ty = [{
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
                            fy = Object.keys(XT);

                          function sy(BB) {
                            let {
                              fontAwesomeIcons: TB
                            } = BB;
                            const [dB, yB] = (0, VB.useState)(ty[0].parts), [lB, JB] = (0, VB.useState)((() => eT(ty[0].parts))), [YB, gB] = (0, VB.useState)(null), [oB, kB] = (0, VB.useState)(!1), [LB, OB] = (0, VB.useState)(null), [uB, EB] = (0, VB.useState)(!1), [vB, mB] = (0, VB.useState)(null), iB = (0, VB.useRef)(null), NB = eT(dB);
                            (0, VB.useLayoutEffect)((() => {
                              var BB;
                              if (!vB) return;
                              const TB = BB => {
                                  var TB;
                                  return null === (TB = iB.current) || void 0 === TB ? void 0 : TB.querySelector(`[data-focus-key="${BB}"]`)
                                },
                                dB = TB(vB.key);
                              null === (BB = dB && !dB.disabled ? dB : TB(vB.fallback)) || void 0 === BB || BB.focus(), mB(null)
                            }), [vB]);
                            const tB = BB => {
                                yB(BB), JB(eT(BB)), gB(null)
                              },
                              sB = BB => {
                                tB(dB.filter(((TB, dB) => dB !== BB))), mB({
                                  key: `edit-${Math.min(BB,dB.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              MB = (BB, TB) => {
                                const VB = [...dB],
                                  [yB] = VB.splice(BB, 1);
                                VB.splice(BB + TB, 0, yB), tB(VB);
                                mB({
                                  key: `${TB<0?"up":"down"}-${BB+TB}`,
                                  fallback: `edit-${BB+TB}`
                                })
                              };
                            return (0, DB.jsxs)("section", {
                              ref: iB,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, DB.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, DB.jsxs)("div", {
                                  children: [(0, DB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, DB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, DB.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: ty.map((BB => (0, DB.jsx)("button", {
                                  type: "button",
                                  className: pB()("DocsVariantChip", {
                                    Active: NB === eT(BB.parts)
                                  }),
                                  onClick: () => {
                                    tB(BB.parts)
                                  },
                                  children: BB.label
                                }, BB.label)))
                              }), (0, DB.jsx)(Oy, {
                                parts: dB,
                                className: "DocsTextEditorPreview"
                              }), (0, DB.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, DB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, DB.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, DB.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [dB.map(((BB, TB) => {
                                      const VB = WT(BB);
                                      return (0, DB.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, DB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${TB}`,
                                          "aria-label": `Edit part ${TB+1}, ${ZT[VB]}`,
                                          onClick: () => {
                                            OB(TB)
                                          },
                                          children: [(0, DB.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: ZT[VB]
                                          }), (0, DB.jsx)(Oy, {
                                            parts: [BB],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== VB && (0, DB.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: AT(BB)
                                          })]
                                        }), (0, DB.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, DB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${TB+1} up`,
                                            "data-focus-key": `up-${TB}`,
                                            disabled: 0 === TB,
                                            onClick: () => {
                                              MB(TB, -1)
                                            },
                                            children: (0, DB.jsx)(HB, {
                                              name: "chevron-up"
                                            })
                                          }), (0, DB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${TB+1} down`,
                                            "data-focus-key": `down-${TB}`,
                                            disabled: TB === dB.length - 1,
                                            onClick: () => {
                                              MB(TB, 1)
                                            },
                                            children: (0, DB.jsx)(HB, {
                                              name: "chevron-down"
                                            })
                                          }), (0, DB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${TB+1}`,
                                            onClick: () => {
                                              sB(TB)
                                            },
                                            children: (0, DB.jsx)(HB, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, TB)
                                    })), 0 === dB.length && (0, DB.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, DB.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: BB => {
                                      "Escape" === BB.key && uB && (BB.stopPropagation(), EB(!1), mB({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, DB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": uB,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        EB(!uB)
                                      },
                                      children: [(0, DB.jsx)(HB, {
                                        name: "plus"
                                      }), "Add a part", (0, DB.jsx)(HB, {
                                        name: uB ? "chevron-up" : "chevron-down"
                                      })]
                                    }), uB && (0, DB.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: fy.map((BB => (0, DB.jsx)("li", {
                                        children: (0, DB.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (BB => {
                                              tB([...dB, XT[BB]]), EB(!1), OB(dB.length)
                                            })(BB)
                                          },
                                          children: ZT[BB]
                                        })
                                      }, BB)))
                                    })]
                                  })]
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, DB.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, DB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": oB,
                                      onClick: () => {
                                        kB(!oB)
                                      },
                                      children: [(0, DB.jsx)(HB, {
                                        name: oB ? "check" : "pencil"
                                      }), oB ? "Done" : "Edit"]
                                    })]
                                  }), oB ? (0, DB.jsxs)(DB.Fragment, {
                                    children: [(0, DB.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: lB,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: BB => {
                                        JB(BB.target.value);
                                        const TB = Vd(BB.target.value);
                                        gB(TB.error), TB.parts && yB(TB.parts)
                                      }
                                    }), YB && (0, DB.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: YB
                                    })]
                                  }) : (0, DB.jsx)(fB, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${NB})`
                                  })]
                                })]
                              }), null !== LB && LB < dB.length && (0, DB.jsx)(Ny, {
                                parts: dB,
                                index: LB,
                                fontAwesomeIcons: TB,
                                onChange: BB => {
                                  ((BB, TB) => {
                                    tB(dB.map(((dB, VB) => VB === BB ? TB : dB)))
                                  })(LB, BB)
                                },
                                Kw: () => {
                                  sB(LB), OB(null)
                                },
                                onClose: () => {
                                  OB(null), mB({
                                    key: `edit-${LB}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var My = dB(4247),
                            zy = dB(4226),
                            wy = dB(4240),
                            Uy = dB(4252);
                          const Fy = 40,
                            Ky = 800,
                            ry = 150,
                            Iy = 8e3,
                            cy = 2e3;

                          function Sy(BB, TB) {
                            return 12 * Math.log2(TB / BB)
                          }

                          function Py(BB, TB) {
                            return Math.round(BB * 2 ** (TB / 12) * 10) / 10
                          }

                          function Qy(BB) {
                            return `${BB} ms`
                          }

                          function Ry(BB) {
                            return `${BB} st`
                          }
                          const ay = [{
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

                          function Zy(BB) {
                            let {
                              synth: TB,
                              onChange: dB
                            } = BB;
                            const VB = (0, My.i)(TB);
                            return (0, DB.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, DB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, DB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, DB.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, DB.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, DB.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: My.d.map((BB => (0, DB.jsx)("button", {
                                      type: "button",
                                      className: pB()("DocsVariantChip", {
                                        Active: TB.waveform === BB
                                      }),
                                      "aria-pressed": TB.waveform === BB,
                                      onClick: () => {
                                        dB({
                                          waveform: BB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  })]
                                }), (0, DB.jsx)(eV, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Sy(Fy, Ky),
                                  step: .1,
                                  value: Sy(Fy, TB.pitchHz),
                                  format: () => `${TB.pitchHz} Hz`,
                                  onChange: BB => {
                                    dB({
                                      pitchHz: Py(Fy, BB)
                                    })
                                  }
                                }), (0, DB.jsx)(eV, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: TB.syllableMs,
                                  format: Qy,
                                  onChange: BB => {
                                    dB({
                                      syllableMs: BB
                                    })
                                  }
                                }), (0, DB.jsx)(eV, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: TB.volume,
                                  onChange: BB => {
                                    dB({
                                      volume: BB
                                    })
                                  }
                                })]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, DB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, DB.jsx)(eV, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: TB.durationMs,
                                  format: Qy,
                                  onChange: BB => {
                                    dB({
                                      durationMs: BB
                                    })
                                  }
                                }), (0, DB.jsx)(eV, {
                                  label: "Fade in",
                                  min: 0,
                                  max: VB.durationMs,
                                  step: 1,
                                  value: VB.attackMs,
                                  format: Qy,
                                  onChange: BB => {
                                    dB({
                                      attackMs: BB
                                    })
                                  }
                                }), (0, DB.jsx)(eV, {
                                  label: "Fade out",
                                  min: 0,
                                  max: VB.durationMs - VB.attackMs,
                                  step: 1,
                                  value: VB.releaseMs,
                                  format: Qy,
                                  onChange: BB => {
                                    dB({
                                      releaseMs: BB
                                    })
                                  }
                                }), (0, DB.jsx)(eV, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: TB.glideSemitones,
                                  format: Ry,
                                  onChange: BB => {
                                    dB({
                                      glideSemitones: BB
                                    })
                                  }
                                }), (0, DB.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, DB.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== TB.lowpassHz,
                                    onChange: BB => {
                                      dB({
                                        lowpassHz: BB.target.checked ? cy : null
                                      })
                                    }
                                  }), (0, DB.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== TB.lowpassHz && (0, DB.jsx)(eV, {
                                  label: "Filter",
                                  min: 0,
                                  max: Sy(ry, Iy),
                                  step: .1,
                                  value: Sy(ry, TB.lowpassHz),
                                  format: () => `${TB.lowpassHz} Hz`,
                                  onChange: BB => {
                                    dB({
                                      lowpassHz: Py(ry, BB)
                                    })
                                  }
                                })]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, DB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), ay.map((BB => {
                                  let {
                                    key: VB,
                                    label: yB,
                                    max: pB
                                  } = BB;
                                  return (0, DB.jsx)(eV, {
                                    label: yB,
                                    min: 0,
                                    max: pB,
                                    step: .1,
                                    value: TB.intonation[VB],
                                    format: Ry,
                                    onChange: BB => {
                                      dB({
                                        intonation: {
                                          ...TB.intonation,
                                          [VB]: BB
                                        }
                                      })
                                    }
                                  }, VB)
                                }))]
                              })]
                            })
                          }
                          const Xy = Object.keys(My.e),
                            Wy = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function hy(BB) {
                            var TB;
                            const dB = JSON.stringify((0, My.i)(BB));
                            return null !== (TB = Xy.find((BB => JSON.stringify((0, My.i)(My.e[BB])) === dB))) && void 0 !== TB ? TB : null
                          }

                          function Cy(BB) {
                            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof BB || null === BB) return JSON.stringify(BB);
                            return `{\n${Object.entries(BB).map((BB=>{let[dB,VB]=BB;return`${TB}    ${dB}: ${Cy(VB,`${TB}    `)},`})).join("\n")}\n${TB}}`
                          }

                          function Gy(BB, TB, dB) {
                            const VB = hy(BB),
                              yB = [`    line: ${JSON.stringify(TB)},`];
                            return dB && yB.push(`    speakerName: ${JSON.stringify(dB)},`), yB.push("    voice,"), `const voice = ${VB?JSON.stringify(VB):Cy((0,My.i)(BB))}\n\napi.setClientOption(playerId, "dialogue", {\n${yB.join("\n")}\n})`
                          }
                          const qy = 400,
                            xy = 90;
                          let jy = null;

                          function Ay(BB, TB, dB) {
                            return jy ??= new AudioContext, jy.resume(), (0, Uy.e)(jy, jy.destination, BB, TB, dB, (() => {}))
                          }

                          function by() {
                            const [BB, TB] = (0, VB.useState)(My.e.regular), [dB, yB] = (0, VB.useState)(Wy[0]), [lB, JB] = (0, VB.useState)("Innkeeper"), [YB, gB] = (0, VB.useState)(0), oB = kV((BB => BB.volume)), kB = (0, VB.useRef)(null), LB = (0, VB.useRef)(0), OB = (0, VB.useRef)(0), uB = () => {
                              var BB;
                              null === (BB = kB.current) || void 0 === BB || BB.call(kB), kB.current = null
                            };
                            (0, VB.useEffect)((() => () => {
                              var BB;
                              null === (BB = kB.current) || void 0 === BB || BB.call(kB), window.clearTimeout(LB.current)
                            }), []);
                            const EB = (0, VB.useMemo)((() => ({
                                line: dB,
                                speakerName: lB || void 0,
                                voice: BB
                              })), [dB, lB, BB]),
                              vB = (0, VB.useRef)(EB);
                            vB.current = EB;
                            const iB = hy(BB),
                              NB = BB => {
                                window.clearTimeout(LB.current), uB();
                                const {
                                  plan: TB,
                                  synth: dB
                                } = (0, wy.f)(BB);
                                dB && (kB.current = Ay(dB, TB.blips, oB)), gB((BB => BB + 1))
                              },
                              tB = Gy(BB, dB, lB);
                            return (0, DB.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, DB.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, DB.jsxs)("div", {
                                  children: [(0, DB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, DB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, DB.jsx)(mB, {
                                  text: tB,
                                  label: "Copy code"
                                })]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Xy.map((BB => (0, DB.jsx)("button", {
                                  type: "button",
                                  className: pB()("DocsVariantChip", {
                                    Active: iB === BB
                                  }),
                                  "aria-pressed": iB === BB,
                                  onClick: () => {
                                    (BB => {
                                      const dB = My.e[BB];
                                      TB(dB), NB({
                                        ...EB,
                                        voice: dB
                                      })
                                    })(BB)
                                  },
                                  children: BB
                                }, BB))), !iB && (0, DB.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, DB.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, DB.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, DB.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, DB.jsx)(zy.e, {
                                      display: EB
                                    }, YB)
                                  }), (0, DB.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: BB => {
                                      BB.preventDefault(), NB(EB)
                                    },
                                    children: [(0, DB.jsx)("input", {
                                      value: dB,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: BB => {
                                        yB(BB.target.value)
                                      }
                                    }), (0, DB.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, DB.jsx)(HB, {
                                        name: "play"
                                      }), (0, DB.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, DB.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Wy.map((BB => (0, DB.jsx)("button", {
                                      type: "button",
                                      className: pB()("DocsVariantChip", {
                                        Active: dB === BB
                                      }),
                                      onClick: () => {
                                        var TB;
                                        yB(TB = BB), NB({
                                          ...EB,
                                          line: TB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  }), (0, DB.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, DB.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, DB.jsx)("input", {
                                      value: lB,
                                      placeholder: "No name",
                                      onChange: BB => {
                                        JB(BB.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, DB.jsx)(Zy, {
                                  synth: BB,
                                  onChange: dB => {
                                    const VB = {
                                      ...BB,
                                      ...dB
                                    };
                                    TB(VB);
                                    const yB = {
                                        ...EB,
                                        voice: VB
                                      },
                                      pB = performance.now();
                                    if (pB - OB.current >= xy) {
                                      OB.current = pB, uB();
                                      const BB = (0, wy.f)(yB).plan.blips[0];
                                      BB && (kB.current = Ay((0, My.i)(VB), [{
                                        ...BB,
                                        atMs: 0
                                      }], oB))
                                    }
                                    window.clearTimeout(LB.current), LB.current = window.setTimeout((() => {
                                      NB(vB.current)
                                    }), qy)
                                  }
                                })]
                              }), (0, DB.jsx)(fB, {
                                code: tB,
                                lang: "ts"
                              })]
                            })
                          }
                          var ny = dB(4265);
                          const ey = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Bp = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Tp = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Bp}`, "g"), ny.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ny.l]
                            ];

                          function dp(BB) {
                            return `${BB.pageId}#${BB.anchor}`
                          }
                          let Vp, yp, pp;

                          function lp(BB) {
                            const TB = (0, sB.g)(BB),
                              dB = new Set;
                            for (const [, , VB] of TB.matchAll(sB.b)) {
                              const BB = VB.startsWith("#") ? WB(VB) : null,
                                TB = BB ? dp({
                                  pageId: BB.page.id,
                                  anchor: BB.anchor
                                }) : null;
                              null !== TB && (Vp || (Vp = new Set(PB.flatMap((BB => UB(BB.layout) ? ZB(BB).sections.map((TB => dp({
                                pageId: BB.id,
                                anchor: TB.heading.anchor
                              }))) : [])))), Vp).has(TB) && dB.add(TB)
                            }
                            for (const [, , VB] of TB.matchAll(ey)) {
                              const BB = LT(VB);
                              BB && dB.add(dp(BB))
                            }
                            return dB
                          }

                          function Jp(BB, TB) {
                            const dB = new Set,
                              VB = function(BB) {
                                return BB.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(BB);
                            for (const [, yB] of VB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) dB.add(yB);
                            for (const [yB, pB] of Tp)
                              for (const [, BB] of(0, ny.d)(VB, yB, pB)) TB.has(BB) && dB.add(BB);
                            return dB
                          }

                          function Yp(BB, TB, dB, VB) {
                            const yB = BB.get(TB);
                            yB ? !VB && yB.some((BB => BB.pageId === dB.pageId)) || yB.push(dB) : BB.set(TB, [dB])
                          }
                          const gp = /^[A-Za-z_$][\w$]*$/;

                          function op(BB) {
                            return gp.test(BB.name) ? BB.name : "options"
                          }

                          function kp(BB, TB) {
                            const dB = BB.params.map(op).join(", ");
                            return TB ? `${BB.name} = (${dB}) => {\n\t\n}` : `api.${BB.name}(${dB})`
                          }

                          function Lp(BB) {
                            let {
                              method: TB,
                              isCallback: dB
                            } = BB;
                            return (0, DB.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, DB.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [dB ? (0, DB.jsxs)(DB.Fragment, {
                                  children: [(0, DB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: TB.name
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, DB.jsxs)(DB.Fragment, {
                                  children: [(0, DB.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: TB.name
                                  }), (0, DB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), TB.params.map(((BB, dB) => (0, DB.jsxs)(VB.Fragment, {
                                  children: [dB > 0 && (0, DB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, DB.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${TB.name}-${op(BB)}`,
                                    children: BB.name
                                  })]
                                }, BB.name))), (0, DB.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: dB ? ") => " : ")"
                                }), dB && !TB.returns && (0, DB.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), TB.returns && TB.returns.type && (0, DB.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!dB && (0, DB.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, DB.jsx)(MT, {
                                  type: TB.returns.type
                                })]
                              })]
                            })
                          }

                          function Op(BB) {
                            let {
                              title: TB,
                              references: dB
                            } = BB;
                            const yB = (0, VB.useContext)(OT);
                            return (0, DB.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, DB.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: TB
                              }), dB.map((BB => (0, DB.jsx)(lB.d, {
                                to: CB(yB, RB(BB.pageId), BB.anchor),
                                children: BB.label
                              }, `${BB.pageId}#${BB.anchor}`)))]
                            })
                          }

                          function Dp(BB) {
                            var TB, dB;
                            let {
                              pageId: VB,
                              anchor: yB
                            } = BB;
                            const pB = dp({
                                pageId: VB,
                                anchor: yB
                              }),
                              lB = null !== (TB = function() {
                                if (!pp) {
                                  pp = new Map;
                                  const VB = new Set(PB.filter((BB => "callbacks" === BB.layout)).flatMap((BB => ZB(BB).sections.map((BB => BB.heading.text)))));
                                  for (const yB of PB)
                                    if ("article" === yB.layout || "snippets" === yB.layout)
                                      for (const pB of (0, sB.n)(ZB(yB)))
                                        for (const {
                                            code: lB
                                          }
                                          of(0, sB.i)(pB.blocks))
                                          for (const JB of Jp(lB, VB)) {
                                            const VB = kT().get(JB);
                                            if (VB) {
                                              var BB, TB, dB;
                                              const lB = {
                                                pageId: yB.id,
                                                anchor: null !== (BB = null === (TB = pB.heading) || void 0 === TB ? void 0 : TB.anchor) && void 0 !== BB ? BB : "",
                                                label: null !== (dB = yB.navTitle) && void 0 !== dB ? dB : yB.title
                                              };
                                              Yp(pp, dp(VB), lB, !1)
                                            }
                                          }
                                }
                                return pp
                              }().get(pB)) && void 0 !== TB ? TB : [],
                              JB = null !== (dB = function() {
                                if (!yp) {
                                  yp = new Map;
                                  const BB = RB("changelog");
                                  for (const TB of ZB(BB).sections) {
                                    const dB = new Set(TB.blocks.flatMap((BB => [...lp(BB)])));
                                    for (const VB of dB) {
                                      const dB = {
                                        pageId: BB.id,
                                        anchor: TB.heading.anchor,
                                        label: TB.heading.text
                                      };
                                      Yp(yp, VB, dB, !0)
                                    }
                                  }
                                }
                                return yp
                              }().get(pB)) && void 0 !== dB ? dB : [];
                            return 0 === lB.length && 0 === JB.length ? null : (0, DB.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [lB.length > 0 && (0, DB.jsx)(Op, {
                                title: "Used in",
                                references: lB
                              }), JB.length > 0 && (0, DB.jsx)(Op, {
                                title: "Changelog",
                                references: JB
                              })]
                            })
                          }

                          function Hp(BB) {
                            let {
                              method: TB,
                              pageId: dB,
                              anchor: VB,
                              isCallback: yB
                            } = BB;
                            const pB = yB ? void 0 : JT().get(TB.name),
                              lB = TB.description.length > 0 || null === pB || void 0 === pB || !pB.description ? TB.description : (0, sB.s)(pB.description);
                            return (0, DB.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, DB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, DB.jsx)(gd, {
                                  level: 2,
                                  text: TB.name,
                                  anchor: VB,
                                  className: "DocsCardTitle"
                                }), (0, DB.jsx)(mB, {
                                  text: kp(TB, yB),
                                  label: yB ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, DB.jsx)(Lp, {
                                method: TB,
                                isCallback: yB
                              }), pB && null !== pB.deprecation && (0, DB.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, DB.jsx)("strong", {
                                  children: "Deprecated"
                                }), pB.deprecation && (0, DB.jsxs)(DB.Fragment, {
                                  children: [": ", (0, DB.jsx)(tT, {
                                    text: (JB = pB.deprecation, (0, ny.x)(JB, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ny.j)("`\\w"), (BB => {
                                      let [TB] = BB;
                                      return kT().has(TB) ? `\`${TB}\`` : TB
                                    })))
                                  })]
                                })]
                              }), lB.length > 0 && (0, DB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, DB.jsx)(Od, {
                                  blocks: lB
                                })
                              }), TB.params.length > 0 && (0, DB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, DB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, DB.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: TB.params.map((BB => (0, DB.jsxs)("div", {
                                    id: `${TB.name}-${op(BB)}`,
                                    className: "DocsParam",
                                    children: [(0, DB.jsxs)("dt", {
                                      children: [(0, DB.jsx)("code", {
                                        className: "DocsParamName",
                                        children: BB.name
                                      }), (0, DB.jsx)(MT, {
                                        type: BB.type
                                      })]
                                    }), BB.description && (0, DB.jsx)("dd", {
                                      children: (0, DB.jsx)(tT, {
                                        text: BB.description
                                      })
                                    })]
                                  }, BB.name)))
                                })]
                              }), TB.returns && (TB.returns.type || TB.returns.description.length > 0) && (0, DB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, DB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [TB.returns.type && (0, DB.jsx)(MT, {
                                    type: TB.returns.type
                                  }), TB.returns.description.length > 0 && (0, DB.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, DB.jsx)(Od, {
                                      blocks: TB.returns.description
                                    })
                                  })]
                                })]
                              }), (0, DB.jsx)(Dp, {
                                pageId: dB,
                                anchor: VB
                              })]
                            });
                            var JB
                          }

                          function Ep(BB) {
                            var TB;
                            return null !== BB.defaultValue && "undefined" !== BB.defaultValue ? BB.defaultValue : null !== (TB = BB.example) && void 0 !== TB ? TB : "value"
                          }

                          function vp(BB) {
                            let {
                              setting: TB,
                              pageId: dB,
                              anchor: VB,
                              setterSnippet: yB
                            } = BB;
                            const pB = null === TB.defaultValue ? null : ET(TB.defaultValue);
                            return (0, DB.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, DB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, DB.jsx)(gd, {
                                  level: 2,
                                  text: TB.name,
                                  anchor: VB,
                                  className: "DocsCardTitle"
                                }), (0, DB.jsx)(mB, {
                                  text: yB(TB.name, Ep(TB)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, DB.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, DB.jsxs)("div", {
                                  children: [(0, DB.jsx)("dt", {
                                    children: "Type"
                                  }), (0, DB.jsx)("dd", {
                                    children: (0, DB.jsx)(MT, {
                                      type: TB.type
                                    })
                                  })]
                                }), null !== TB.defaultValue && (0, DB.jsxs)("div", {
                                  children: [(0, DB.jsx)("dt", {
                                    children: "Default"
                                  }), (0, DB.jsx)("dd", {
                                    children: (0, DB.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [pB && (0, DB.jsx)(vT, {
                                        colour: pB
                                      }), TB.defaultValue]
                                    })
                                  })]
                                }), null !== TB.example && (0, DB.jsxs)("div", {
                                  children: [(0, DB.jsx)("dt", {
                                    children: "Example"
                                  }), (0, DB.jsx)("dd", {
                                    children: (0, DB.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: TB.example
                                    })
                                  })]
                                })]
                              }), TB.description.length > 0 && (0, DB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, DB.jsx)(Od, {
                                  blocks: TB.description
                                })
                              }), (0, DB.jsx)(Dp, {
                                pageId: dB,
                                anchor: VB
                              })]
                            })
                          }

                          function mp(BB) {
                            let {
                              section: TB
                            } = BB;
                            return (0, DB.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, DB.jsx)(gd, {
                                level: 2,
                                text: TB.heading.text,
                                anchor: TB.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, DB.jsx)("div", {
                                className: "DocsProse",
                                children: (0, DB.jsx)(Od, {
                                  blocks: TB.blocks
                                })
                              })]
                            })
                          }

                          function ip(BB) {
                            let {
                              section: TB
                            } = BB;
                            return (0, DB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, DB.jsx)(gd, {
                                level: TB.heading.level,
                                text: TB.heading.text,
                                anchor: TB.heading.anchor
                              }), (0, DB.jsx)(Od, {
                                blocks: TB.blocks
                              })]
                            })
                          }
                          const Np = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function tp(BB) {
                            let {
                              page: TB,
                              section: dB
                            } = BB;
                            if ("methods" === TB.layout || "callbacks" === TB.layout) return (0, DB.jsx)(Hp, {
                              method: sd(dB),
                              pageId: TB.id,
                              anchor: dB.heading.anchor,
                              isCallback: "callbacks" === TB.layout
                            });
                            if ("settings" === TB.layout) {
                              const BB = function(BB) {
                                const TB = {
                                  name: BB.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const VB of BB.blocks) {
                                  var dB;
                                  if (fd(VB)) continue;
                                  const BB = "paragraph" === VB.kind ? VB.text.match(Md) : null;
                                  if (!BB) {
                                    TB.description.push(VB);
                                    continue
                                  }
                                  const yB = null !== (dB = td(BB[2])) && void 0 !== dB ? dB : BB[2];
                                  "Type" === BB[1] ? TB.type = yB : "Default" === BB[1] ? TB.defaultValue = yB : "" !== yB && (TB.example = yB)
                                }
                                return TB.type ? TB : null
                              }(dB);
                              if (BB) return (0, DB.jsx)(vp, {
                                setting: BB,
                                pageId: TB.id,
                                anchor: dB.heading.anchor,
                                setterSnippet: TB.setterSnippet
                              })
                            }
                            return "snippets" === TB.layout ? (0, DB.jsx)(mp, {
                              section: dB
                            }) : "changelog" === TB.layout ? (0, DB.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, DB.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, DB.jsx)(gd, {
                                  level: 2,
                                  text: dB.heading.text,
                                  anchor: dB.heading.anchor
                                })
                              }), (0, DB.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, DB.jsx)(Od, {
                                  blocks: zd(dB.blocks)
                                })
                              })]
                            }) : TB.gallery ? (0, DB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, DB.jsx)(gd, {
                                level: dB.heading.level,
                                text: dB.heading.text,
                                anchor: dB.heading.anchor
                              }), (0, DB.jsx)(wV, {
                                kind: TB.gallery,
                                content: ZB(TB),
                                blocks: dB.blocks
                              })]
                            }) : (0, DB.jsx)(ip, {
                              section: dB
                            })
                          }

                          function fp(BB) {
                            let {
                              page: TB,
                              onTocChange: dB
                            } = BB;
                            const yB = ZB(TB),
                              [pB, lB] = (0, VB.useState)(""),
                              JB = "article" !== TB.layout,
                              YB = Hd(TB.gallery) ? TB.gallery : null,
                              gB = null !== YB,
                              oB = pB.trim().toLowerCase(),
                              kB = (0, VB.useRef)(null),
                              LB = (0, VB.useCallback)((BB => {
                                var TB;
                                null === (TB = kB.current) || void 0 === TB || TB.preview(BB)
                              }), []),
                              OB = (0, VB.useMemo)((() => {
                                if (!TB.hasParticlePlayground) return [];
                                const BB = Kd(yB.intro).find((BB => "names" === BB.kind && !BB.names.some((BB => null !== Zd(BB.name)))));
                                return "names" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.names.map((BB => BB.name)) : []
                              }), [TB, yB]),
                              uB = (0, VB.useMemo)((() => {
                                if (!TB.hasTextPlayground) return [];
                                const BB = yB.sections.flatMap((BB => BB.blocks.flatMap((BB => {
                                  var TB;
                                  return (null !== (TB = Fd(BB)) && void 0 !== TB ? TB : []).flatMap((BB => aT(BB.name) ? [BB.name] : []))
                                }))));
                                return [...new Set(BB)]
                              }), [TB, yB]),
                              HB = (0, VB.useMemo)((() => oB ? yB.sections.filter((BB => function(BB, TB) {
                                return !!BB.heading.text.toLowerCase().includes(TB) || BB.blocks.some((BB => (0, sB.g)(BB).toLowerCase().includes(TB)))
                              }(BB, oB))) : yB.sections), [yB, oB]),
                              EB = (0, VB.useMemo)((() => function(BB, TB) {
                                return "article" !== BB.layout ? TB.map((BB => ({
                                  anchor: BB.heading.anchor,
                                  text: BB.heading.text,
                                  level: 2
                                }))) : TB.flatMap((BB => {
                                  const TB = BB.blocks.flatMap((BB => "heading" === BB.kind && 3 === BB.level ? [{
                                    anchor: BB.anchor,
                                    text: BB.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: BB.heading.anchor,
                                    text: BB.heading.text,
                                    level: 2
                                  }, ...TB]
                                }))
                              }(TB, HB)), [TB, HB]);
                            return (0, VB.useEffect)((() => {
                              dB(EB)
                            }), [EB, dB]), (0, DB.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, DB.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, DB.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: yB.title || TB.title
                                }), (0, DB.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: TB.summary
                                }), (0, DB.jsx)(jV, {
                                  page: TB
                                }), JB && (0, DB.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, DB.jsxs)("span", {
                                    children: [(0, DB.jsx)("strong", {
                                      children: yB.sections.length
                                    }), " ", Np[TB.layout]]
                                  })
                                })]
                              }), "" === TB.slug && (0, DB.jsx)(FV, {}), YB && (0, DB.jsx)(cV, {
                                kind: YB
                              }, YB), TB.hasParticlePlayground && (0, DB.jsx)(Yy, {
                                ref: kB,
                                textures: OB
                              }), !gB && yB.intro.length > 0 && (0, DB.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: TB.gallery ? (0, DB.jsx)(vV.Provider, {
                                  value: TB.hasParticlePlayground ? LB : null,
                                  children: (0, DB.jsx)(wV, {
                                    kind: TB.gallery,
                                    content: yB,
                                    blocks: yB.intro
                                  })
                                }) : (0, DB.jsx)(Od, {
                                  blocks: zd(yB.intro)
                                })
                              }), TB.hasTextPlayground && (0, DB.jsx)(sy, {
                                fontAwesomeIcons: uB
                              }), TB.hasVoicePlayground && (0, DB.jsx)(by, {}), TB.childPageIds && (0, DB.jsx)(FV, {
                                cards: TB.childPageIds.map((BB => ({
                                  pageId: BB
                                }))),
                                label: TB.title
                              }), JB && (0, DB.jsx)(md, {
                                className: "DocsFilterBar",
                                value: pB,
                                placeholder: `Filter ${yB.sections.length} ${Np[TB.layout]}\u2026`,
                                label: `Filter ${Np[TB.layout]}`,
                                onChange: lB,
                                count: oB ? {
                                  visible: HB.length,
                                  total: yB.sections.length
                                } : null
                              }), !gB && (0, DB.jsxs)("div", {
                                className: `DocsSections Layout-${TB.layout}`,
                                children: [HB.map((BB => (0, DB.jsx)(tp, {
                                  page: TB,
                                  section: BB
                                }, BB.heading.anchor))), 0 === HB.length && (0, DB.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Np[TB.layout], " match \u201c", pB, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const sp = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Mp(BB) {
                            let {
                              entry: TB,
                              isActive: dB,
                              onNavigate: VB,
                              label: yB,
                              children: lB
                            } = BB;
                            return (0, DB.jsx)("a", {
                              href: `#${TB.anchor}`,
                              "aria-label": yB,
                              className: pB()(`Level${TB.level}`, {
                                Active: dB
                              }),
                              "aria-current": dB ? "location" : void 0,
                              onClick: BB => {
                                BB.preventDefault(), VB(TB.anchor)
                              },
                              children: lB
                            })
                          }

                          function zp(BB) {
                            let {
                              toc: TB,
                              activeAnchor: dB,
                              onNavigate: yB
                            } = BB;
                            const lB = Math.max(0, TB.findIndex((BB => BB.anchor === dB))),
                              JB = (0, VB.useRef)(null),
                              YB = (0, VB.useRef)(!1);
                            (0, VB.useEffect)((() => {
                              var BB, dB;
                              const VB = null === (BB = JB.current) || void 0 === BB ? void 0 : BB.closest(".DocsToc"),
                                yB = null === (dB = JB.current) || void 0 === dB ? void 0 : dB.querySelector(".DocsTimelineNotch.Active");
                              if (!VB || !yB) return;
                              let pB = 0;
                              if (lB === TB.length - 1) pB = VB.scrollHeight;
                              else if (lB > 0) {
                                const BB = VB.getBoundingClientRect(),
                                  TB = yB.getBoundingClientRect();
                                pB = VB.scrollTop + TB.top + TB.height / 2 - (BB.top + VB.clientHeight / 2)
                              }
                              VB.scrollTo({
                                top: pB,
                                behavior: YB.current ? "smooth" : "auto"
                              }), YB.current = !0
                            }), [lB, TB.length]);
                            const gB = [];
                            return TB.forEach(((BB, TB) => {
                              var dB, VB, yB;
                              const pB = function(BB) {
                                  const TB = BB.trim().match(sp);
                                  return TB ? {
                                    day: TB[1],
                                    month: `${TB[2]} ${TB[3]}`
                                  } : null
                                }(BB.text),
                                lB = null !== (dB = null === pB || void 0 === pB ? void 0 : pB.month) && void 0 !== dB ? dB : null;
                              null !== lB && (null === (VB = gB.at(-1)) || void 0 === VB ? void 0 : VB.month) === lB || gB.push({
                                month: lB,
                                entries: []
                              }), gB.at(-1).entries.push({
                                entry: BB,
                                day: null !== (yB = null === pB || void 0 === pB ? void 0 : pB.day) && void 0 !== yB ? yB : null,
                                index: TB
                              })
                            })), (0, DB.jsx)("ol", {
                              ref: JB,
                              className: "DocsTimeline",
                              children: gB.map((BB => {
                                let {
                                  month: TB,
                                  entries: dB
                                } = BB;
                                return (0, DB.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [TB && (0, DB.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: TB
                                  }), (0, DB.jsx)("ol", {
                                    children: dB.map((BB => {
                                      let {
                                        entry: TB,
                                        day: dB,
                                        index: VB
                                      } = BB;
                                      return (0, DB.jsx)("li", {
                                        className: pB()("DocsTimelineNotch", {
                                          Passed: VB < lB,
                                          Active: VB === lB
                                        }),
                                        children: (0, DB.jsx)(Mp, {
                                          entry: TB,
                                          isActive: VB === lB,
                                          onNavigate: yB,
                                          label: TB.text,
                                          children: (0, DB.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== dB && void 0 !== dB ? dB : TB.text
                                          })
                                        })
                                      }, TB.anchor)
                                    }))
                                  })]
                                }, dB[0].entry.anchor)
                              }))
                            })
                          }

                          function wp(BB) {
                            let {
                              isChangelog: TB,
                              toc: dB,
                              activeAnchor: VB,
                              onNavigate: yB
                            } = BB;
                            return 0 === dB.length ? null : (0, DB.jsxs)(DB.Fragment, {
                              children: [(0, DB.jsx)("div", {
                                className: "DocsTocTitle",
                                children: TB ? "Updates" : "On this page"
                              }), TB ? (0, DB.jsx)(zp, {
                                toc: dB,
                                activeAnchor: VB,
                                onNavigate: yB
                              }) : (0, DB.jsx)("ul", {
                                children: dB.map((BB => (0, DB.jsx)("li", {
                                  children: (0, DB.jsx)(Mp, {
                                    entry: BB,
                                    isActive: BB.anchor === VB,
                                    onNavigate: yB,
                                    children: BB.text.replace(/`/g, "")
                                  })
                                }, BB.anchor)))
                              })]
                            })
                          }
                          const Up = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Fp = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Kp = 20,
                            rp = 10,
                            Ip = 40,
                            cp = 120;
                          let Sp;

                          function Pp(BB) {
                            const TB = BB.gallery;
                            if (!TB) return [];
                            if (Hd(TB)) return function(BB) {
                              return vd(BB).entries.map((BB => BB.name))
                            }(TB).map((dB => ({
                              page: BB,
                              anchor: Id(TB, dB),
                              title: dB,
                              kind: Fp[TB],
                              text: "",
                              listedUnder: BB.title
                            })));
                            const dB = ZB(BB);
                            return (0, sB.n)(dB).flatMap((VB => {
                              const yB = VB.heading ? `${BB.title} \u203a ${VB.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : BB.title;
                              return Sd(TB, dB, VB.blocks).flatMap((dB => "names" !== dB.kind ? [] : dB.names.map((VB => {
                                const pB = dB.isSongs ? "Song" : Fp[TB];
                                return {
                                  page: BB,
                                  anchor: VB.anchor,
                                  title: VB.name,
                                  kind: pB,
                                  text: "",
                                  listedUnder: yB
                                }
                              }))))
                            }))
                          }

                          function Qp(BB, TB, dB) {
                            const VB = BB.title.toLowerCase();
                            let yB = 0;
                            if (VB === TB) yB = 100;
                            else if (VB.startsWith(TB)) yB = 80;
                            else if (VB.includes(TB)) yB = 60;
                            else if (dB.every((BB => VB.includes(BB)))) yB = 45;
                            else {
                              if (!BB.text.toLowerCase().includes(TB)) return 0;
                              yB = 20
                            }
                            return yB - Math.min(VB.length / 10, 9) + ("Page" === BB.kind ? 8 : "Method" === BB.kind ? 3 : 0) - (BB.listedUnder ? Kp : 0)
                          }

                          function Rp(BB, TB) {
                            const dB = BB.toLowerCase().indexOf(TB),
                              VB = Math.max(0, dB - cp / 3);
                            return `${VB>0?"\u2026":""}${BB.slice(VB,VB+cp)}${VB+cp<BB.length?"\u2026":""}`
                          }

                          function ap(BB) {
                            let {
                              text: TB,
                              query: dB
                            } = BB;
                            const VB = dB ? TB.toLowerCase().indexOf(dB) : -1;
                            return -1 === VB ? (0, DB.jsx)(DB.Fragment, {
                              children: TB
                            }) : (0, DB.jsxs)(DB.Fragment, {
                              children: [TB.slice(0, VB), (0, DB.jsx)("mark", {
                                children: TB.slice(VB, VB + dB.length)
                              }), TB.slice(VB + dB.length)]
                            })
                          }

                          function Zp(BB) {
                            let {
                              basePath: TB,
                              onClose: dB
                            } = BB;
                            const yB = (0, JB.q)(),
                              [lB, YB] = (0, VB.useState)(""),
                              [gB, oB] = (0, VB.useState)(0),
                              kB = (0, VB.useRef)(null),
                              LB = (0, VB.useRef)(null),
                              OB = lB.trim().toLowerCase(),
                              uB = (0, VB.useMemo)((() => {
                                const BB = (Sp || (Sp = PB.flatMap((BB => {
                                  const TB = ZB(BB);
                                  return [{
                                    page: BB,
                                    anchor: "",
                                    title: BB.title,
                                    kind: "Page",
                                    text: BB.summary
                                  }, ...TB.sections.flatMap((TB => {
                                    const dB = TB.blocks.filter((BB => "paragraph" === BB.kind)).map(sB.g).join(" ").replace(/[`*]/g, ""),
                                      VB = {
                                        page: BB,
                                        anchor: TB.heading.anchor,
                                        title: TB.heading.text.replace(/`/g, ""),
                                        kind: Up[BB.layout],
                                        text: dB
                                      },
                                      yB = TB.blocks.flatMap((TB => "article" === BB.layout && "heading" === TB.kind && 3 === TB.level ? [{
                                        page: BB,
                                        anchor: TB.anchor,
                                        title: TB.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: VB.title
                                      }] : []));
                                    return [VB, ...yB]
                                  })), ...Pp(BB)]
                                }))), Sp);
                                if (!OB) return BB.filter((BB => "Page" === BB.kind));
                                const TB = OB.split(/\s+/);
                                let dB = 0;
                                return BB.map((BB => ({
                                  entry: BB,
                                  score: Qp(BB, OB, TB)
                                }))).filter((BB => BB.score > 0)).sort(((BB, TB) => TB.score - BB.score)).filter((BB => !BB.entry.listedUnder || (dB++, dB <= rp))).slice(0, Ip).map((BB => BB.entry))
                              }), [OB]);
                            (0, VB.useEffect)((() => {
                              oB(0)
                            }), [OB]), (0, VB.useEffect)((() => {
                              const BB = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === BB || void 0 === BB || BB.focus()
                              }
                            }), []), (0, VB.useEffect)((() => {
                              var BB, TB;
                              null === (BB = kB.current) || void 0 === BB || null === (TB = BB.querySelector(".Active")) || void 0 === TB || TB.scrollIntoView({
                                block: "nearest"
                              })
                            }), [gB]);
                            const EB = BB => {
                              yB(CB(TB, BB.page, BB.anchor)), dB()
                            };
                            return (0, DB.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && dB()
                              },
                              children: (0, DB.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: BB => {
                                  BB.target !== LB.current && BB.preventDefault()
                                },
                                onKeyDown: BB => {
                                  if ("Escape" === BB.key) dB();
                                  else if ("Tab" === BB.key) {
                                    var TB;
                                    BB.preventDefault(), null === (TB = LB.current) || void 0 === TB || TB.focus()
                                  }
                                },
                                children: [(0, DB.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, DB.jsx)(HB, {
                                    name: "magnifying-glass"
                                  }), (0, DB.jsx)("input", {
                                    ref: LB,
                                    autoFocus: !0,
                                    value: lB,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": uB.length > 0 ? `DocsSearchResult-${gB}` : void 0,
                                    onChange: BB => {
                                      YB(BB.target.value)
                                    },
                                    onKeyDown: BB => {
                                      if ("ArrowDown" === BB.key || "ArrowUp" === BB.key) {
                                        BB.preventDefault();
                                        const TB = "ArrowDown" === BB.key ? 1 : -1;
                                        oB((gB + TB + uB.length) % Math.max(uB.length, 1))
                                      } else "Enter" === BB.key && uB[gB] && EB(uB[gB])
                                    }
                                  }), (0, DB.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, DB.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: kB,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!OB && (0, DB.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), uB.map(((BB, TB) => {
                                    var dB;
                                    return (0, DB.jsxs)("li", {
                                      id: `DocsSearchResult-${TB}`,
                                      role: "option",
                                      "aria-selected": TB === gB,
                                      className: pB()("DocsSearchResult", {
                                        Active: TB === gB
                                      }),
                                      onMouseMove: () => {
                                        oB(TB)
                                      },
                                      onClick: () => {
                                        EB(BB)
                                      },
                                      children: [(0, DB.jsx)(HB, {
                                        name: BB.page.icon
                                      }), (0, DB.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, DB.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, DB.jsx)(ap, {
                                            text: BB.title,
                                            query: OB
                                          })
                                        }), BB.text && (0, DB.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, DB.jsx)(ap, {
                                            text: Rp(BB.text, OB),
                                            query: OB
                                          })
                                        })]
                                      }), (0, DB.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === BB.kind ? "Page" : null !== (dB = BB.listedUnder) && void 0 !== dB ? dB : `${BB.kind} \xb7 ${BB.page.title}`
                                      })]
                                    }, `${BB.page.id}#${BB.anchor}`)
                                  })), OB && 0 === uB.length && (0, DB.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", lB, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Xp(BB, TB) {
                            if (TB < 10) return `${BB.toFixed(1)}s`;
                            const dB = Math.floor(BB);
                            return `${Math.floor(dB/60)}:${String(dB%60).padStart(2,"0")}`
                          }

                          function Wp() {
                            const BB = kV((BB => BB.track)),
                              TB = kV((BB => BB.volume)),
                              [dB, yB] = (0, VB.useState)(0),
                              lB = (0, VB.useRef)(dV);
                            if ((0, VB.useEffect)((() => {
                                if (!BB) return;
                                if (yB(uV()), "playing" !== BB.status) return;
                                let TB = 0;
                                const dB = () => {
                                  yB(uV()), TB = requestAnimationFrame(dB)
                                };
                                return TB = requestAnimationFrame(dB), () => {
                                  cancelAnimationFrame(TB)
                                }
                              }), [BB]), !BB) return null;
                            const JB = "paused" !== BB.status,
                              YB = Math.min(dB, BB.duration);
                            return (0, DB.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, DB.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, DB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": JB ? `Pause ${BB.name}` : `Play ${BB.name}`,
                                  onClick: DV,
                                  children: (0, DB.jsx)(HB, {
                                    name: JB ? "pause" : "play"
                                  })
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, DB.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, DB.jsx)("code", {
                                      children: BB.name
                                    }), (0, DB.jsx)("span", {
                                      children: BB.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, DB.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, DB.jsx)("span", {
                                      children: Xp(YB, BB.duration)
                                    }), (0, DB.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: BB.duration || 1,
                                      step: .01,
                                      value: YB,
                                      disabled: 0 === BB.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Xp(YB,BB.duration)} of ${Xp(BB.duration,BB.duration)}`,
                                      onChange: BB => {
                                        const TB = Number(BB.target.value);
                                        ! function(BB) {
                                          var TB;
                                          JV = BB, null === (TB = pV) || void 0 === TB || TB.seek(BB)
                                        }(TB), yB(TB)
                                      }
                                    }), (0, DB.jsx)("span", {
                                      children: BB.duration > 0 ? Xp(BB.duration, BB.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, DB.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, DB.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === TB ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === TB ? HV(lB.current) : (lB.current = TB, HV(0))
                                    },
                                    children: (0, DB.jsx)(HB, {
                                      name: "volume",
                                      className: pB()({
                                        Muted: 0 === TB
                                      })
                                    })
                                  }), (0, DB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: TB,
                                    "aria-label": "Volume",
                                    onChange: BB => {
                                      HV(Number(BB.target.value))
                                    }
                                  })]
                                }), (0, DB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var TB;
                                    null === (TB = document.querySelector(`[data-docs-track="${CSS.escape(VV(BB.name,BB.isSong))}"]`)) || void 0 === TB || TB.focus(), EV()
                                  },
                                  children: (0, DB.jsx)(HB, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var hp = dB(33);
                          const Cp = "docsTheme",
                            Gp = window.matchMedia("(prefers-color-scheme: light)");

                          function qp(BB) {
                            let {
                              theme: TB,
                              onChange: dB
                            } = BB;
                            const VB = "dark" === TB ? "light" : "dark";
                            return (0, DB.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${VB} theme`,
                              title: `Switch to ${VB} theme`,
                              onClick: () => {
                                dB(VB)
                              },
                              children: (0, DB.jsx)(HB, {
                                name: "dark" === TB ? "moon" : "sun"
                              })
                            })
                          }
                          const xp = "https://github.com/Bloxdy/code-api",
                            jp = "https://discord.gg/playbloxd",
                            Ap = 180,
                            bp = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function np(BB) {
                            let {
                              basePath: TB,
                              activePageId: dB,
                              onNavigate: VB
                            } = BB;
                            return (0, DB.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: QB.map((BB => (0, DB.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, DB.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: BB.title
                                }), BB.pageIds.map((BB => {
                                  var yB;
                                  const JB = RB(BB);
                                  return (0, DB.jsxs)(lB.d, {
                                    to: CB(TB, JB),
                                    className: pB()("DocsNavLink", {
                                      Active: JB.id === dB
                                    }),
                                    "aria-current": JB.id === dB ? "page" : void 0,
                                    onClick: VB,
                                    children: [(0, DB.jsx)(HB, {
                                      name: JB.icon
                                    }), (0, DB.jsx)("span", {
                                      children: null !== (yB = JB.navTitle) && void 0 !== yB ? yB : JB.title
                                    })]
                                  }, JB.id)
                                }))]
                              }, BB.title)))
                            })
                          }

                          function ep(BB) {
                            let {
                              basePath: TB,
                              pageId: dB
                            } = BB;
                            const VB = QB.flatMap((BB => BB.pageIds)),
                              yB = VB.indexOf(dB),
                              pB = yB > 0 ? RB(VB[yB - 1]) : null,
                              JB = yB < VB.length - 1 ? RB(VB[yB + 1]) : null;
                            return (0, DB.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [pB ? (0, DB.jsxs)(lB.d, {
                                className: "DocsPagerLink Previous",
                                to: CB(TB, pB),
                                children: [(0, DB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, DB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: pB.title
                                })]
                              }) : (0, DB.jsx)("span", {}), JB && (0, DB.jsxs)(lB.d, {
                                className: "DocsPagerLink Next",
                                to: CB(TB, JB),
                                children: [(0, DB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, DB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: JB.title
                                })]
                              })]
                            })
                          }

                          function Bl(BB) {
                            let {
                              basePath: TB,
                              embedded: dB = !1
                            } = BB;
                            const {
                              pageSlug: yB = ""
                            } = (0, JB.u)(), gB = (0, JB.o)(), oB = (0, JB.q)(), kB = (LB = yB, PB.find((BB => BB.slug === LB)));
                            var LB;
                            const [OB, uB] = function() {
                              const [BB, TB] = (0, VB.useState)((() => {
                                const BB = hp.j.getItem(Cp);
                                return "dark" === BB || "light" === BB ? BB : null
                              })), [dB, yB] = (0, VB.useState)(Gp.matches ? "light" : "dark");
                              return (0, VB.useEffect)((() => {
                                const BB = () => {
                                  yB(Gp.matches ? "light" : "dark")
                                };
                                return Gp.addEventListener("change", BB), () => {
                                  Gp.removeEventListener("change", BB)
                                }
                              }), []), [null !== BB && void 0 !== BB ? BB : dB, BB => {
                                hp.j.setItem(Cp, BB), TB(BB)
                              }]
                            }(), [EB, vB] = (0, VB.useState)(null), [mB, iB] = (0, VB.useState)(!1), [NB, tB] = (0, VB.useState)(!1), [fB, MB] = (0, VB.useState)([]), zB = function(BB, TB) {
                              const [dB, yB] = (0, VB.useState)("");
                              return (0, VB.useEffect)((() => {
                                if (!TB) return;
                                let dB = 0;
                                const VB = () => {
                                    var VB, pB;
                                    dB = 0;
                                    const lB = TB.getBoundingClientRect().top + Ap;
                                    let JB = null !== (VB = null === (pB = BB[0]) || void 0 === pB ? void 0 : pB.anchor) && void 0 !== VB ? VB : "";
                                    for (const TB of BB) {
                                      const BB = document.getElementById(TB.anchor);
                                      BB && BB.getBoundingClientRect().top <= lB && (JB = TB.anchor)
                                    }
                                    TB.scrollTop + TB.clientHeight >= TB.scrollHeight - 2 && TB.scrollTop > 0 && BB.length > 0 && (JB = BB[BB.length - 1].anchor), yB(JB)
                                  },
                                  pB = () => {
                                    dB || (dB = requestAnimationFrame(VB))
                                  };
                                return VB(), TB.addEventListener("scroll", pB, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(dB), TB.removeEventListener("scroll", pB)
                                }
                              }), [BB, TB]), dB
                            }(fB, EB), wB = "" === yB && gB.hash ? function(BB) {
                              const TB = (0, sB.k)(BB);
                              if (XB(RB("welcome"), TB)) return null;
                              const dB = Object.hasOwn(hB, TB) ? hB[TB] : null;
                              if (dB) return {
                                page: RB(dB.pageId),
                                anchor: dB.anchor
                              };
                              const VB = RB("readme");
                              return XB(VB, TB) ? {
                                page: VB,
                                anchor: TB
                              } : WB(`#${TB}`)
                            }(gB.hash) : null;
                            (0, VB.useEffect)((() => (YB.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              YB.d.set({
                                musicOnFromPage: !0
                              }), EV()
                            })), []), (0, VB.useEffect)((() => {
                              const BB = BB => {
                                const TB = BB.target;
                                if (TB.closest(".DocsTextDialog")) return;
                                const dB = TB.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(TB.tagName);
                                "k" === BB.key && (BB.metaKey || BB.ctrlKey) || "/" === BB.key && !dB ? (BB.preventDefault(), tB(!0)) : "Escape" === BB.key && iB(!1)
                              };
                              return window.addEventListener("keydown", BB), () => {
                                window.removeEventListener("keydown", BB)
                              }
                            }), []);
                            const UB = (0, VB.useRef)(null);
                            (0, VB.useLayoutEffect)((() => {
                              var BB, TB;
                              if (!EB) return;
                              const dB = UB.current === gB.pathname;
                              UB.current = gB.pathname;
                              const VB = (0, sB.k)(gB.hash),
                                yB = VB ? document.getElementById(VB) : null;
                              if (null === (BB = EB.querySelector(".DocsTargeted")) || void 0 === BB || BB.classList.remove("DocsTargeted"), null === yB || void 0 === yB || null === (TB = yB.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === TB || TB.classList.add("DocsTargeted"), yB) {
                                var pB;
                                const BB = yB.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (pB = yB.closest(".DocsChangelogEntry")) && void 0 !== pB ? pB : yB).scrollIntoView({
                                  block: BB ? "center" : "start",
                                  behavior: dB ? "smooth" : "auto"
                                })
                              } else dB || EB.scrollTo({
                                top: 0
                              })
                            }), [EB, gB.pathname, gB.hash, gB.key]);
                            const FB = (0, VB.useCallback)((() => {
                                iB(!1)
                              }), []),
                              KB = (0, VB.useCallback)((BB => {
                                oB({
                                  hash: BB
                                })
                              }), [oB]);
                            if (wB) return (0, DB.jsx)(JB.c, {
                              replace: !0,
                              to: CB(TB, wB.page, wB.anchor)
                            });
                            if (!kB) return (0, DB.jsx)(JB.c, {
                              replace: !0,
                              to: TB
                            });
                            const rB = dB ? "div" : "main";
                            return (0, DB.jsx)(OT.Provider, {
                              value: TB,
                              children: (0, DB.jsx)(DT.Provider, {
                                value: EB,
                                children: (0, DB.jsxs)("div", {
                                  ref: vB,
                                  className: pB()("DocsSite", {
                                    Embedded: dB,
                                    NavOpen: mB
                                  }),
                                  "data-theme": OB,
                                  children: [(0, DB.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, DB.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": mB ? "Close menu" : "Open menu",
                                      "aria-expanded": mB,
                                      onClick: () => {
                                        iB(!mB)
                                      },
                                      children: (0, DB.jsx)(HB, {
                                        name: mB ? "cross" : "menu"
                                      })
                                    }), (0, DB.jsxs)(lB.d, {
                                      to: TB,
                                      className: "DocsBrand",
                                      children: [(0, DB.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, DB.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, DB.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, DB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        tB(!0)
                                      },
                                      children: [(0, DB.jsx)(HB, {
                                        name: "magnifying-glass"
                                      }), (0, DB.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, DB.jsxs)("kbd", {
                                        children: [bp ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, DB.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, DB.jsxs)("a", {
                                        href: jp,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, DB.jsx)(HB, {
                                          name: "discord"
                                        }), (0, DB.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, DB.jsxs)("a", {
                                        href: xp,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, DB.jsx)(HB, {
                                          name: "external-link"
                                        }), (0, DB.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !dB && (0, DB.jsxs)(lB.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, DB.jsx)(HB, {
                                          name: "play"
                                        }), (0, DB.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, DB.jsx)(qp, {
                                        theme: OB,
                                        onChange: uB
                                      })]
                                    })]
                                  }), (0, DB.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, DB.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, DB.jsx)(np, {
                                        basePath: TB,
                                        activePageId: kB.id,
                                        onNavigate: FB
                                      })
                                    }), (0, DB.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: FB
                                    }), (0, DB.jsxs)(rB, {
                                      className: "DocsMain",
                                      children: [(0, DB.jsx)(fp, {
                                        page: kB,
                                        onTocChange: MB
                                      }, kB.id), (0, DB.jsx)(ep, {
                                        basePath: TB,
                                        pageId: kB.id
                                      })]
                                    }), (0, DB.jsx)("aside", {
                                      className: pB()("DocsToc", {
                                        Timeline: "changelog" === kB.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, DB.jsx)(wp, {
                                        isChangelog: "changelog" === kB.layout,
                                        toc: fB,
                                        activeAnchor: zB,
                                        onNavigate: KB
                                      })
                                    })]
                                  }), (0, DB.jsx)(Wp, {}), NB && (0, DB.jsx)(Zp, {
                                    basePath: TB,
                                    onClose: () => {
                                      tB(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4131: (BB, TB, dB) => {
                          dB.d(TB, {
                            b: () => VB,
                            f: () => lB,
                            g: () => HB,
                            i: () => uB,
                            j: () => JB,
                            k: () => yB,
                            m: () => pB,
                            n: () => DB,
                            p: () => OB,
                            s: () => LB
                          });
                          const VB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function yB(BB) {
                            try {
                              return decodeURIComponent(BB.slice(1))
                            } catch {
                              return BB.slice(1)
                            }
                          }

                          function pB(BB) {
                            return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const lB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${VB.source}`, "g");

                          function JB(BB, TB) {
                            return 2 === BB.length ? TB.replace(/^ (.*) $/, "$1") : TB
                          }

                          function YB(BB) {
                            return "" === BB.trim()
                          }

                          function gB(BB) {
                            const TB = [];
                            for (const dB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) TB.length > 0 && TB[TB.length - 1].endsWith("\\") ? TB[TB.length - 1] += `|${dB}` : TB.push(dB);
                            return TB.map((BB => BB.trim().replaceAll("\\|", "|")))
                          }
                          const oB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function kB(BB) {
                            const TB = [],
                              dB = [{
                                indent: -1,
                                items: TB
                              }];
                            let VB = null;
                            for (const yB of BB) {
                              const BB = yB.match(oB);
                              if (!BB) {
                                VB && (VB.text += ` ${yB.trim()}`);
                                continue
                              }
                              const TB = BB[1].replace(/\t/g, "  ").length;
                              for (; TB <= dB[dB.length - 1].indent;) dB.pop();
                              VB = {
                                text: BB[3].trim(),
                                children: []
                              }, dB[dB.length - 1].items.push(VB), dB.push({
                                indent: TB,
                                items: VB.children
                              })
                            }
                            return TB
                          }

                          function LB(BB) {
                            const TB = BB.replace(/\r\n/g, "\n").split("\n"),
                              dB = [];
                            let VB = 0;
                            for (; VB < TB.length;) {
                              const BB = TB[VB];
                              if (YB(BB)) {
                                VB++;
                                continue
                              }
                              const yB = BB.match(/^\s*```\s*(\w*)\s*$/);
                              if (yB) {
                                const BB = [];
                                for (VB++; VB < TB.length && !/^\s*```\s*$/.test(TB[VB]);) BB.push(TB[VB]), VB++;
                                VB++, dB.push({
                                  kind: "code",
                                  lang: yB[1] || "text",
                                  code: BB.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const lB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (lB) {
                                const BB = lB[2].trim();
                                dB.push({
                                  kind: "heading",
                                  level: lB[1].length,
                                  text: BB,
                                  anchor: pB(BB)
                                }), VB++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
                                dB.push({
                                  kind: "rule"
                                }), VB++;
                                continue
                              }
                              if (BB.trim().startsWith("|") && VB + 1 < TB.length && /^\s*\|[\s:|-]+\|\s*$/.test(TB[VB + 1])) {
                                const yB = gB(BB),
                                  pB = [];
                                for (VB += 2; VB < TB.length && TB[VB].trim().startsWith("|");) pB.push(gB(TB[VB])), VB++;
                                dB.push({
                                  kind: "table",
                                  header: yB,
                                  rows: pB
                                });
                                continue
                              }
                              if (BB.startsWith(">")) {
                                const BB = [];
                                for (; VB < TB.length && TB[VB].startsWith(">");) BB.push(TB[VB].replace(/^>\s?/, "")), VB++;
                                dB.push({
                                  kind: "quote",
                                  blocks: LB(BB.join("\n"))
                                });
                                continue
                              }
                              if (oB.test(BB)) {
                                const yB = [],
                                  pB = /^\s*\d+\./.test(BB);
                                for (; VB < TB.length && !YB(TB[VB]) && (oB.test(TB[VB]) || /^\s+\S/.test(TB[VB]));) yB.push(TB[VB]), VB++;
                                dB.push({
                                  kind: "list",
                                  ordered: pB,
                                  items: kB(yB)
                                });
                                continue
                              }
                              const JB = [];
                              for (; VB < TB.length && !YB(TB[VB]) && !/^\s*```/.test(TB[VB]) && !/^#{1,6}\s/.test(TB[VB]) && !TB[VB].startsWith(">") && !oB.test(TB[VB]) && (!TB[VB].trim().startsWith("|") || 0 !== JB.length);) JB.push(TB[VB].trim()), VB++;
                              0 === JB.length && (JB.push(TB[VB].trim()), VB++), dB.push({
                                kind: "paragraph",
                                text: JB.join(" ")
                              })
                            }
                            return dB
                          }

                          function OB(BB) {
                            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const dB = LB(BB);
                            let VB = "";
                            const yB = [],
                              pB = [],
                              lB = new Map;
                            for (const gB of dB) {
                              if ("heading" === gB.kind) {
                                var JB;
                                const BB = (null !== (JB = lB.get(gB.anchor)) && void 0 !== JB ? JB : 0) + 1;
                                lB.set(gB.anchor, BB), BB > 1 && (gB.anchor = `${gB.anchor}-${BB}`)
                              }
                              if ("heading" === gB.kind && 1 === gB.level && !VB) {
                                VB = gB.text;
                                continue
                              }
                              if ("heading" === gB.kind && gB.level <= TB) {
                                pB.push({
                                  heading: gB,
                                  blocks: []
                                });
                                continue
                              }
                              const BB = pB.at(-1);
                              BB ? BB.blocks.push(gB) : yB.push(gB)
                            }
                            const YB = BB => {
                              for (;
                                "rule" === (null === (TB = BB.at(-1)) || void 0 === TB ? void 0 : TB.kind);) {
                                var TB;
                                BB.pop()
                              }
                            };
                            YB(yB);
                            for (const gB of pB) YB(gB.blocks);
                            return {
                              title: VB,
                              intro: yB,
                              sections: pB
                            }
                          }

                          function DB(BB) {
                            return [{
                              heading: null,
                              blocks: BB.intro
                            }, ...BB.sections.map((BB => ({
                              heading: BB.heading,
                              blocks: BB.blocks
                            })))]
                          }

                          function uB(BB) {
                            return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? uB(BB.blocks) : []))
                          }

                          function HB(BB) {
                            switch (BB.kind) {
                              case "heading":
                              case "paragraph":
                                return BB.text;
                              case "code":
                                return BB.code;
                              case "table":
                                return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
                              case "list": {
                                const TB = BB => BB.map((BB => `${BB.text} ${TB(BB.children)}`)).join(" ");
                                return TB(BB.items)
                              }
                              case "quote":
                                return BB.blocks.map(HB).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4232: (BB, TB, dB) => {
                          dB.d(TB, {
                            d: () => JB
                          });
                          var VB = dB(62),
                            yB = dB(270),
                            pB = dB(1666),
                            lB = dB(980);

                          function JB(BB) {
                            let {
                              text: TB
                            } = BB;
                            const dB = [];
                            let JB = "";
                            return (0, yB.hc)(TB).forEach(((BB, TB) => {
                              if ("string" === typeof BB || !(0, pB.d)(BB.icon)) return void(JB += "string" === typeof BB ? BB : BB.icon);
                              const yB = Math.max(0, JB.trimEnd().search(/\S{1,12}$/));
                              dB.push((0, lB.jsxs)(VB.Fragment, {
                                children: [JB.slice(0, yB), (0, lB.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [JB.slice(yB), (0, lB.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": BB.icon,
                                    children: (0, lB.jsx)(pB.c, {
                                      itemName: BB.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, TB)), JB = ""
                            })), dB.push(JB), (0, lB.jsx)(lB.Fragment, {
                              children: dB
                            })
                          }
                        }, 4156: (BB, TB, dB) => {
                          dB.d(TB, {
                            f: () => vB,
                            e: () => EB
                          });
                          var VB = dB(62),
                            yB = dB(1317),
                            pB = dB(1657),
                            lB = dB(4162),
                            JB = dB(980);
                          const YB = (0, VB.memo)((function(BB) {
                            let {
                              initialParameters: TB
                            } = BB;
                            const dB = (0, VB.useRef)(null),
                              yB = (0, VB.useRef)(null),
                              YB = (0, VB.useRef)(0),
                              gB = (0, VB.useRef)(null),
                              oB = TB.description,
                              kB = TB.JV,
                              {
                                scale: LB,
                                rotation: OB
                              } = null !== TB && void 0 !== TB ? TB : {},
                              DB = (0, lB.f)();
                            return (0, VB.useEffect)((() => {
                              const BB = DB.onFrame((() => {
                                const BB = DB.getState();
                                if (!BB.isActive || !dB.current || !yB.current) return;
                                const TB = BB.state;
                                if (dB.current.value = TB.progress, TB.clickCount > YB.current) {
                                  YB.current = TB.clickCount;
                                  const BB = yB.current;
                                  BB.classList.add("pulse"), gB.current = setTimeout((() => {
                                    BB.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(gB.current), BB()
                              }
                            }), [DB]), (0, JB.jsx)(JB.Fragment, {
                              children: (0, JB.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== LB && {
                                    "--scale": LB
                                  },
                                  ...null !== OB && {
                                    "--rotation": `${OB}deg`
                                  }
                                },
                                children: [(0, JB.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: dB
                                }), (0, JB.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: yB,
                                  children: (0, JB.jsx)(pB.e, {
                                    text: [{
                                      icon: kB
                                    }]
                                  })
                                }), (0, JB.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, JB.jsx)(pB.e, {
                                    text: oB
                                  })
                                })]
                              })
                            })
                          }));
                          var gB = dB(933),
                            oB = dB.n(gB);
                          const kB = 2 * Math.PI * 90,
                            LB = (0, VB.memo)((function(BB) {
                              let {
                                initialParameters: TB
                              } = BB;
                              const dB = (0, VB.useRef)(null),
                                yB = (0, VB.useRef)(null),
                                YB = (0, VB.useRef)(null),
                                gB = TB.label,
                                LB = TB.icon,
                                OB = TB.oV,
                                {
                                  scale: DB,
                                  rotation: uB,
                                  kV: HB
                                } = null !== TB && void 0 !== TB ? TB : {},
                                EB = (0, lB.f)();
                              return (0, VB.useEffect)((() => {
                                const BB = EB.onFrame((() => {
                                  var BB, TB;
                                  const VB = EB.getState();
                                  if (!VB.isActive || !yB.current) return;
                                  const pB = VB.state,
                                    lB = null !== (BB = pB.timeRemaining) && void 0 !== BB ? BB : 0,
                                    JB = null !== (TB = pB.gV) && void 0 !== TB ? TB : 1,
                                    gB = kB * (1 - lB / JB);
                                  yB.current.style.strokeDashoffset = `${gB}`, dB.current && (dB.current.style.opacity = lB > 0 ? "1" : "0"), YB.current && OB && (YB.current.textContent = `${(lB/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [EB, OB]), (0, JB.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: dB,
                                style: {
                                  ...null !== DB && {
                                    "--scale": DB
                                  },
                                  ...null !== uB && {
                                    "--rotation": `${uB}deg`
                                  }
                                },
                                children: [(0, JB.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, JB.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, JB.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, JB.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: kB,
                                      ref: yB
                                    })]
                                  }), (0, JB.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, JB.jsx)(pB.e, {
                                      text: [{
                                        icon: LB
                                      }],
                                      className: oB()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: HB
                                      })
                                    })
                                  })]
                                }), (0, JB.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, JB.jsx)(pB.e, {
                                    text: gB,
                                    className: "QTETimedClickLabelText"
                                  }), OB && (0, JB.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: YB
                                  })]
                                })]
                              })
                            })),
                            OB = (0, VB.memo)((function(BB) {
                              let {
                                initialParameters: TB
                              } = BB;
                              const dB = (0, VB.useRef)(null),
                                yB = (0, VB.useRef)(null),
                                YB = (0, VB.useRef)(null),
                                gB = (0, VB.useRef)(!1),
                                oB = TB.description,
                                kB = null === TB || void 0 === TB ? void 0 : TB.icon,
                                LB = (0, lB.f)();
                              return (0, VB.useEffect)((() => {
                                const BB = LB.onFrame((() => {
                                  const BB = LB.getState();
                                  if (!BB.isActive) return;
                                  const TB = BB.state;
                                  if (dB.current) {
                                    const BB = 100 * (TB.catchZonePosition - TB.OV / 2);
                                    dB.current.style.left = `${BB}%`, dB.current.style.width = 100 * TB.OV + "%", TB.isCatching !== gB.current && (gB.current = TB.isCatching, TB.isCatching ? dB.current.classList.add("catching") : dB.current.classList.remove("catching"))
                                  }
                                  yB.current && (yB.current.style.left = 100 * TB.moverPosition + "%"), YB.current && (YB.current.value = TB.progress)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [LB]), (0, JB.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, JB.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, JB.jsx)(pB.e, {
                                    text: oB
                                  })
                                }), (0, JB.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: YB
                                }), (0, JB.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, JB.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: dB
                                  }), (0, JB.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: yB,
                                    children: (0, JB.jsx)("span", {
                                      children: kB && (0, JB.jsx)(pB.e, {
                                        text: [{
                                          icon: kB,
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
                          var DB = dB(572);
                          const uB = (0, VB.memo)((function(BB) {
                              let {
                                initialParameters: TB
                              } = BB;
                              const dB = (0, VB.useRef)(null),
                                yB = TB.label,
                                YB = TB.iV,
                                {
                                  icon: gB,
                                  scale: oB,
                                  rotation: kB
                                } = null !== TB && void 0 !== TB ? TB : {},
                                LB = 100 * (.5 - YB / 2),
                                OB = 100 * YB,
                                uB = (0, lB.f)();
                              return (0, VB.useEffect)((() => {
                                const BB = uB.onFrame((() => {
                                  const BB = uB.getState();
                                  if (!BB.isActive || !dB.current) return;
                                  const TB = BB.state;
                                  dB.current.style.left = 100 * TB.markerPosition + "%"
                                }));
                                return () => {
                                  BB()
                                }
                              }), [uB]), (0, JB.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, DB.M)(oB) && {
                                    "--scale": oB
                                  },
                                  ...!(0, DB.M)(kB) && {
                                    "--rotation": `${kB}deg`
                                  }
                                },
                                children: [gB && (0, JB.jsx)(pB.e, {
                                  text: [{
                                    icon: gB
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, JB.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, JB.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${LB}%`,
                                      width: `${OB}%`
                                    }
                                  }), (0, JB.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: dB
                                  })]
                                }), (0, JB.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, JB.jsx)(pB.e, {
                                    text: yB
                                  })
                                })]
                              })
                            })),
                            HB = (0, VB.memo)((function(BB) {
                              let {
                                initialParameters: TB
                              } = BB;
                              const dB = (0, VB.useRef)(null),
                                [yB, YB] = (0, VB.useState)((() => new Array(TB.tV).fill("pending"))),
                                [gB, oB] = (0, VB.useState)((() => {
                                  const BB = TB.MV;
                                  return (0, DB.M)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
                                })),
                                kB = TB.label,
                                {
                                  icon: LB
                                } = TB,
                                OB = (0, VB.useRef)(0),
                                uB = (0, VB.useRef)(0),
                                HB = (0, VB.useRef)([]),
                                EB = (0, lB.f)();
                              return (0, VB.useEffect)((() => {
                                const BB = EB.onFrame((() => {
                                  const BB = EB.getState();
                                  if (!BB.isActive || !dB.current) return;
                                  const TB = BB.state,
                                    VB = 30 + 60 * TB.outerCircleProgress;
                                  if (dB.current.setAttribute("r", String(VB)), !0 === TB.lastClickResult && TB.successes > OB.current) {
                                    dB.current.classList.remove("QTERhythmClickOuterCircle--miss"), dB.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = dB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    HB.current.push(BB)
                                  } else if (!1 === TB.lastClickResult && TB.misses > uB.current) {
                                    dB.current.classList.remove("QTERhythmClickOuterCircle--hit"), dB.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = dB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    HB.current.push(BB)
                                  }
                                  TB.successes === OB.current && TB.misses === uB.current || (OB.current = TB.successes, uB.current = TB.misses, YB((BB => {
                                    const dB = [...BB];
                                    for (let VB = 0; VB < TB.tV; VB++) dB[VB] = VB < TB.successes ? "success" : "pending";
                                    return dB
                                  })), oB((BB => {
                                    if (0 === BB.length) return BB;
                                    const dB = [...BB];
                                    for (let VB = 0; VB < dB.length; VB++) dB[VB] = VB < TB.misses ? "miss" : "pending";
                                    return dB
                                  })))
                                }));
                                return () => {
                                  BB();
                                  for (const BB of HB.current) clearTimeout(BB);
                                  HB.current = []
                                }
                              }), [EB]), (0, JB.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, JB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: yB.map(((BB, TB) => (0, JB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, TB)))
                                }), (0, JB.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, JB.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, JB.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, JB.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: dB
                                    })]
                                  }), LB && (0, JB.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, JB.jsx)(pB.e, {
                                      text: [{
                                        icon: LB
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), gB.length > 0 && (0, JB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: gB.map(((BB, TB) => (0, JB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, TB)))
                                }), (0, JB.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, JB.jsx)(pB.e, {
                                    text: kB
                                  })
                                })]
                              })
                            }));

                          function EB(BB) {
                            let {
                              qte: TB
                            } = BB;
                            switch (TB.type) {
                              case "progressBar":
                                return (0, JB.jsx)(YB, {
                                  initialParameters: TB.parameters
                                });
                              case "timedClick":
                                return (0, JB.jsx)(LB, {
                                  initialParameters: TB.parameters
                                });
                              case "gravityBar":
                                return (0, JB.jsx)(OB, {
                                  initialParameters: TB.parameters
                                });
                              case "precisionBar":
                                return (0, JB.jsx)(uB, {
                                  initialParameters: TB.parameters
                                });
                              case "rhythmClick":
                                return (0, JB.jsx)(HB, {
                                  initialParameters: TB.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const vB = (0, VB.memo)((function() {
                            const [BB, TB] = (0, VB.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, yB.e)("qteStateUpdated", (BB => {
                              TB(BB)
                            })), BB.isActive && BB.type ? (0, JB.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, JB.jsx)(EB, {
                                qte: BB
                              })
                            }) : null
                          }))
                        }, 4162: (BB, TB, dB) => {
                          dB.d(TB, {
                            c: () => JB,
                            f: () => YB
                          });
                          var VB = dB(62),
                            yB = dB(1185),
                            pB = dB(4167);
                          const lB = {
                              getState: () => pB.c.getCurrentState(),
                              onFrame: yB.m
                            },
                            JB = (0, VB.createContext)(lB);

                          function YB() {
                            return (0, VB.useContext)(JB)
                          }
                        }, 4240: (BB, TB, dB) => {
                          dB.d(TB, {
                            e: () => cB,
                            f: () => IB
                          });
                          var VB = dB(4247),
                            yB = dB(270);
                          const pB = 120,
                            lB = 260,
                            JB = 1.15,
                            YB = 1.2,
                            gB = 2,
                            oB = 1.08,
                            kB = .8,
                            LB = .95,
                            OB = 8,
                            DB = "[\"')\\]\u300d\u300f\uff09]*",
                            uB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${DB}$`),
                            HB = new RegExp(`[?\uff1f]${DB}$`),
                            EB = new RegExp(`[!\uff01]${DB}$`),
                            vB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            mB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            iB = new RegExp(`[${mB}]`),
                            NB = new RegExp(`[${mB}]|[^${mB}]+`, "g"),
                            tB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function fB(BB) {
                            let TB = 2166136261;
                            for (let dB = 0; dB < BB.length; dB++) TB ^= BB.charCodeAt(dB), TB = Math.imul(TB, 16777619);
                            return (TB >>> 0) / 4294967295 * 2 - 1
                          }

                          function sB(BB) {
                            var TB;
                            if (iB.test(BB)) return 1;
                            const dB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              VB = dB.replace(/[^0-9]/g, "");
                            if (VB.length > 0 && !/\p{L}/u.test(dB)) return Math.min(VB.length, 4);
                            const yB = null !== (TB = dB.match(tB)) && void 0 !== TB ? TB : [];
                            if (0 === yB.length) {
                              var pB, lB;
                              const BB = null !== (pB = null === (lB = dB.match(/\p{L}/gu)) || void 0 === lB ? void 0 : lB.length) && void 0 !== pB ? pB : 0;
                              return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), OB)
                            }
                            const JB = dB.replace(/[^\p{L}]/gu, ""),
                              YB = yB.length > 1 && "e" === yB.at(-1) && JB.endsWith("e") && !JB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
                            return Math.min(yB.length - (YB ? 1 : 0), OB)
                          }

                          function MB(BB) {
                            return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function zB(BB) {
                            const TB = BB.replace(/[^\p{L}]/gu, "");
                            return TB.length >= 2 && TB === TB.toUpperCase() && TB !== TB.toLowerCase()
                          }

                          function wB(BB, TB) {
                            var dB;
                            const OB = TB && (0, VB.i)(TB),
                              DB = null !== (dB = null === OB || void 0 === OB ? void 0 : OB.syllableMs) && void 0 !== dB ? dB : VB.b,
                              mB = function(BB) {
                                const TB = [];
                                for (const VB of (0, yB.hc)(BB))
                                  if ("string" === typeof VB)
                                    for (const BB of VB.split(/(\s+)/)) {
                                      if ("" === BB) continue;
                                      if (/^\s+$/.test(BB)) {
                                        TB.push({
                                          kind: "space",
                                          text: BB
                                        });
                                        continue
                                      }
                                      if (!iB.test(BB)) {
                                        TB.push({
                                          kind: "word",
                                          text: BB,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let VB = !0;
                                      for (const yB of null !== (dB = BB.match(NB)) && void 0 !== dB ? dB : []) {
                                        var dB;
                                        const BB = TB.at(-1);
                                        VB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || iB.test(yB) || /[\p{L}\p{N}]/u.test(yB) ? (VB || TB.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), TB.push({
                                          kind: "word",
                                          text: yB,
                                          delayMs: 0
                                        }), VB = !1) : BB.text += yB
                                      }
                                    } else TB.push({
                                      kind: "icon",
                                      text: VB.icon,
                                      delayMs: 0
                                    });
                                return TB
                              }(BB),
                              tB = [];
                            let wB = [];
                            for (const VB of mB) "space" !== VB.kind && (wB.push(VB), uB.test(VB.text) && (tB.push(wB), wB = []));
                            tB.push(wB);
                            const UB = [];
                            let FB = 0;
                            for (const VB of tB) {
                              var KB, rB;
                              const BB = null !== (KB = null === (rB = VB.at(-1)) || void 0 === rB ? void 0 : rB.text) && void 0 !== KB ? KB : "",
                                TB = HB.test(BB),
                                dB = EB.test(BB),
                                yB = VB.map((BB => "word" === BB.kind ? sB(BB.text) : 1)),
                                mB = yB.findLastIndex((BB => BB > 0));
                              for (const [HB, EB] of VB.entries()) {
                                const BB = "word" === EB.kind,
                                  VB = yB[HB];
                                EB.delayMs = FB;
                                for (let yB = 0; OB && yB < VB; yB++) {
                                  const {
                                    intonation: pB
                                  } = OB;
                                  let lB = mB > 0 ? -pB.declineSemitones * (HB / mB) : 0;
                                  lB += fB(`${MB(EB.text)}|${yB}`) * pB.variationSemitones;
                                  const uB = Math.min(1, pB.variationSemitones);
                                  let vB = OB.glideSemitones,
                                    iB = 1;
                                  dB && (lB += pB.exclaimLiftSemitones, iB *= JB), TB && HB === mB && (lB += pB.questionRiseSemitones * (VB > 1 ? .5 + .5 * yB / (VB - 1) : 1), yB === VB - 1 && (vB = Math.abs(vB) + pB.questionRiseSemitones / 2)), BB && zB(EB.text) && (lB += gB * uB, iB *= YB), VB > 1 && 0 === yB && (lB += kB * uB, iB *= oB), UB.push({
                                    atMs: FB + yB * DB,
                                    semitones: lB,
                                    glideSemitones: vB,
                                    durationMs: yB < VB - 1 ? Math.min(OB.durationMs, DB * LB) : OB.durationMs,
                                    level: iB
                                  })
                                }
                                FB += VB * DB + (uB.test(EB.text) ? lB : vB.test(EB.text) ? pB : 0)
                              }
                            }
                            return {
                              pieces: mB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
                                kind: "icon",
                                icon: BB.text,
                                delayMs: BB.delayMs
                              } : {
                                kind: "word",
                                text: BB.text,
                                delayMs: BB.delayMs
                              })),
                              blips: UB
                            }
                          }
                          var UB = dB(1078),
                            FB = dB(1133),
                            KB = dB(1685);

                          function rB(BB) {
                            if ("string" === typeof BB) return BB;
                            const TB = FB.f.get().getCurrentLanguageCode();
                            return (0, UB.r)(TB, BB.translationKey, (0, UB.o)(BB.params, KB.c.shown))
                          }

                          function IB(BB) {
                            const TB = void 0 === BB.voice ? null : (0, VB.j)(BB.voice),
                              dB = TB && (0, VB.i)(TB);
                            return {
                              plan: wB(rB(BB.line), dB),
                              synth: dB
                            }
                          }

                          function cB(BB) {
                            const TB = [];
                            let dB = [];
                            for (const [yB, pB] of BB.entries()) {
                              var VB;
                              "space" === pB.kind && (" " !== pB.text || "icon" !== (null === (VB = BB[yB + 1]) || void 0 === VB ? void 0 : VB.kind)) ? (dB.length > 0 && TB.push(dB), TB.push([pB]), dB = []) : dB.push(pB)
                            }
                            return dB.length > 0 && TB.push(dB), TB
                          }
                        }, 4252: (BB, TB, dB) => {
                          dB.d(TB, {
                            e: () => oB,
                            f: () => kB
                          });
                          var VB = dB(4258),
                            yB = dB(21);
                          const pB = .25,
                            lB = .85,
                            JB = .02,
                            YB = .01;

                          function gB(BB, TB, dB, VB, yB, pB, JB) {
                            const {
                              waveform: YB,
                              pitchHz: gB,
                              attackMs: oB,
                              releaseMs: kB,
                              lowpassHz: LB
                            } = dB, OB = yB + VB.durationMs / 1e3, DB = gB * 2 ** (VB.semitones / 12), uB = BB.createOscillator();
                            uB.type = YB, uB.frequency.setValueAtTime(DB, yB), uB.frequency.exponentialRampToValueAtTime(DB * 2 ** (VB.glideSemitones / 12), OB);
                            const HB = yB + Math.min(oB, VB.durationMs) / 1e3,
                              EB = BB.createGain();
                            EB.gain.setValueAtTime(0, yB), EB.gain.linearRampToValueAtTime(pB, HB), EB.gain.linearRampToValueAtTime(pB * lB, Math.max(HB, OB - kB / 1e3)), EB.gain.linearRampToValueAtTime(0, OB);
                            const vB = [uB];
                            if (null !== LB) {
                              const TB = BB.createBiquadFilter();
                              TB.type = "lowpass", TB.frequency.value = LB, vB.push(TB)
                            }
                            vB.push(EB, TB);
                            for (let lB = 1; lB < vB.length; lB++) vB[lB - 1].connect(vB[lB]);
                            return uB.onended = () => {
                              for (const BB of vB.slice(0, -1)) BB.disconnect();
                              JB()
                            }, uB.start(yB), uB.stop(OB), uB
                          }

                          function oB(BB, TB, dB, VB, yB, lB) {
                            if (0 === VB.length) return lB(), () => {};
                            const oB = pB * dB.volume * yB,
                              kB = BB.createGain();
                            kB.connect(TB);
                            const LB = BB.currentTime + JB,
                              OB = new Set;
                            for (const pB of VB) {
                              const TB = gB(BB, kB, dB, pB, LB + pB.atMs / 1e3, oB * pB.level, (() => {
                                OB.delete(TB), 0 === OB.size && (kB.disconnect(), lB())
                              }));
                              OB.add(TB)
                            }
                            return () => {
                              const TB = BB.currentTime;
                              kB.gain.setTargetAtTime(0, TB, YB);
                              for (const BB of OB) try {
                                BB.stop(TB + 5 * YB)
                              } catch {}
                            }
                          }

                          function kB(BB, TB) {
                            var dB;
                            const pB = VB.b.ctx,
                              lB = VB.b.masterGain;
                            if (!pB || !lB || !yB.d.get("soundOnFromAd")) return () => {};
                            const JB = VB.b;
                            return null === (dB = JB._autoResume) || void 0 === dB || dB.call(JB), oB(pB, lB, BB, TB, yB.d.get("soundVolume"), (() => {
                              var BB;
                              null === (BB = JB._autoSuspend) || void 0 === BB || BB.call(JB)
                            }))
                          }
                        }, 4258: (BB, TB, dB) => {
                          dB.d(TB, {
                            Howl: () => VB.Howl,
                            b: () => VB.Howler,
                            readyAudioContext: () => yB
                          });
                          var VB = dB(4262);

                          function yB() {
                            const BB = VB.Howler;
                            var TB;
                            (BB.volume(), BB.ctx && BB.autoUnlock) && (null === (TB = BB._unlockAudio) || void 0 === TB || TB.call(BB))
                          }
                          VB.Howler._mobileUnloaded = !0
                        }, 4265: (BB, TB, dB) => {
                          function VB(BB) {
                            return {
                              notAfter: BB
                            }
                          }
                          dB.d(TB, {
                            B: () => kB,
                            b: () => YB,
                            d: () => gB,
                            h: () => JB,
                            j: () => VB,
                            l: () => yB,
                            p: () => pB,
                            t: () => lB,
                            x: () => oB
                          });
                          const yB = VB("\\w$."),
                            pB = VB("\\w.,");

                          function lB(BB) {
                            return TB => YB(TB, BB)
                          }

                          function JB(BB) {
                            return TB => !BB.test(TB.input.slice(0, TB.index))
                          }

                          function YB(BB, TB) {
                            return BB.index > 0 && new RegExp(`[${TB}]`).test(BB.input[BB.index - 1])
                          }

                          function gB(BB, TB, dB) {
                            return function(BB) {
                              return void 0 !== BB && "function" !== typeof BB
                            }(dB) ? function(BB, TB, dB) {
                              const VB = TB.flags.replace(/[gy]/g, ""),
                                yB = new RegExp(`[^${dB}](?:${TB.source})`, `${VB}g`),
                                pB = [],
                                lB = dB => {
                                  const VB = dB.index + dB[0].length;
                                  return ("" === dB[0] ? LB(BB, TB, VB) : VB) - 1
                                },
                                JB = new RegExp(`(?:${TB.source})`, `${VB}y`).exec(BB);
                              if (JB) {
                                if (pB.push(JB), !TB.global) return pB;
                                yB.lastIndex = lB(JB)
                              }
                              for (let YB = yB.exec(BB); YB; YB = yB.exec(BB)) {
                                const dB = LB(BB, TB, YB.index) - YB.index;
                                if (YB[0] = YB[0].slice(dB), YB.index += dB, pB.push(YB), !TB.global) break;
                                yB.lastIndex = lB(YB)
                              }
                              return pB
                            }(BB, TB, dB.notAfter) : function(BB, TB, dB) {
                              const VB = new RegExp(TB.source, `${TB.flags.replace(/[gy]/g,"")}g`),
                                yB = [];
                              for (let pB = VB.exec(BB); pB; pB = VB.exec(BB))
                                if (!dB || dB(pB)) {
                                  if (yB.push(pB), !TB.global) break;
                                  "" === pB[0] && (VB.lastIndex = LB(BB, TB, VB.lastIndex))
                                } else VB.lastIndex = LB(BB, TB, pB.index);
                              return yB
                            }(BB, TB, dB)
                          }

                          function oB(BB, TB, dB, VB) {
                            let yB = "",
                              pB = 0;
                            for (const lB of gB(BB, TB, dB)) yB += BB.slice(pB, lB.index) + VB(lB), pB = lB.index + lB[0].length;
                            return yB + BB.slice(pB)
                          }

                          function kB(BB, TB, dB) {
                            const VB = [];
                            let yB = 0;
                            for (const pB of gB(BB, TB, dB)) VB.push(BB.slice(yB, pB.index)), yB = pB.index + pB[0].length;
                            return [...VB, BB.slice(yB)]
                          }

                          function LB(BB, TB, dB) {
                            var VB;
                            return dB + (TB.unicode && (null !== (VB = BB.codePointAt(dB)) && void 0 !== VB ? VB : 0) > 65535 ? 2 : 1)
                          }
                        }, 4218: (BB, TB, dB) => {
                          dB.d(TB, {
                            b: () => yB,
                            e: () => YB,
                            g: () => pB,
                            k: () => lB,
                            n: () => JB,
                            p: () => HB,
                            q: () => oB,
                            r: () => kB,
                            v: () => uB,
                            z: () => OB
                          });
                          var VB = dB(1477);
                          const yB = 24e3,
                            pB = "/docs/llms.txt",
                            lB = `${VB.c}${pB}`,
                            JB = "/llms.txt",
                            YB = "/docs/llms-full.txt";

                          function gB(BB) {
                            return BB || "index"
                          }

                          function oB(BB) {
                            return `/docs/${gB(BB)}.md`
                          }

                          function kB(BB, TB) {
                            return `/docs/${gB(BB)}/${TB+1}.md`
                          }
                          const LB = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function OB(BB) {
                            const TB = LB.exec(BB);
                            return null === TB ? null : {
                              name: TB[1],
                              part: void 0 === TB[2] ? null : Number(TB[2])
                            }
                          }
                          const DB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function uB(BB) {
                            const TB = DB.exec(BB);
                            if (null === TB) return null;
                            const [, dB = "", VB] = TB;
                            return void 0 === VB ? oB(dB) : kB(dB, Number(VB) - 1)
                          }

                          function HB(BB) {
                            return `/docsHtml/${gB(BB)}.html`
                          }
                        }, 4247: (BB, TB, dB) => {
                          dB.d(TB, {
                            b: () => yB,
                            d: () => VB,
                            e: () => pB,
                            i: () => YB,
                            j: () => lB
                          });
                          const VB = ["sine", "triangle", "square", "sawtooth"],
                            yB = 55,
                            pB = {
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

                          function lB(BB) {
                            return "string" !== typeof BB ? BB : Object.hasOwn(pB, BB) ? pB[BB] : null
                          }

                          function JB(BB, TB, dB) {
                            return Math.min(dB, Math.max(TB, BB))
                          }

                          function YB(BB) {
                            const TB = JB(BB.durationMs, 10, 500),
                              dB = JB(BB.attackMs, 0, TB),
                              {
                                intonation: yB
                              } = BB;
                            return {
                              waveform: VB.includes(BB.waveform) ? BB.waveform : "sine",
                              pitchHz: JB(BB.pitchHz, 20, 4e3),
                              glideSemitones: JB(BB.glideSemitones, -24, 24),
                              durationMs: TB,
                              attackMs: dB,
                              releaseMs: JB(BB.releaseMs, 0, TB - dB),
                              lowpassHz: null === BB.lowpassHz ? null : JB(BB.lowpassHz, 20, 2e4),
                              volume: JB(BB.volume, 0, 2),
                              intonation: {
                                variationSemitones: JB(yB.variationSemitones, 0, 6),
                                declineSemitones: JB(yB.declineSemitones, 0, 12),
                                questionRiseSemitones: JB(yB.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: JB(yB.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: JB(BB.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const BB in modules) Object.freeze(modules[BB]);