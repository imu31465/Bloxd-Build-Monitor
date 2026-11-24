export const id = 79;
export const ids = [79, 95];
export const modules = {
    4925: (BB, jB, zB) => {
      zB.d(jB, {
        e: () => yB,
        f: () => kB
      });
      var QB = zB(1091),
        nB = zB.n(QB),
        dB = zB(62),
        IB = zB(1240),
        NB = zB(4928),
        uB = zB(1952),
        UB = zB(2516),
        aB = zB(4932),
        pB = zB(1148);
      const rB = new WeakMap;
      let sB = 0;

      function JB(BB) {
        let jB = rB.get(BB);
        return void 0 === jB && (jB = sB++, rB.set(BB, jB)), jB
      }

      function mB(BB) {
        let {
          piece: jB
        } = BB;
        return "space" === jB.kind ? (0, pB.jsx)(pB.Fragment, {
          children: jB.text
        }) : (0, pB.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${jB.delayMs}ms`
          },
          children: (0, pB.jsx)(NB.e, {
            text: "icon" === jB.kind ? `[[${jB.icon}]]` : jB.text
          })
        })
      }

      function yB(BB) {
        let {
          display: jB
        } = BB;
        const {
          selectedLanguage: zB
        } = (0, IB.D)(), QB = (0, dB.useMemo)((() => (0, aB.e)((0, aB.g)(jB).plan.pieces)), [jB, zB.code]);
        return (0, pB.jsxs)("div", {
          className: nB()("Dialogue", {
            DialogueAnimateIn: !1 !== jB.animateIn
          }),
          children: [jB.speakerName && (0, pB.jsx)(uB.e, {
            text: jB.speakerName,
            className: "DialogueSpeaker"
          }), (0, pB.jsx)("p", {
            className: "DialogueLine",
            children: QB.map(((BB, jB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, pB.jsx)("span", {
              className: "DialogueGlue",
              children: BB.map(((BB, jB) => (0, pB.jsx)(mB, {
                piece: BB
              }, jB)))
            }, jB)))
          })]
        })
      }
      const kB = (0, dB.memo)((function() {
        const BB = (0, UB.i)("dialogue");
        return (0, pB.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: BB && (0, pB.jsx)(yB, {
            display: BB
          }, JB(BB))
        })
      }))
    },
    4802: (BB, jB, zB) => {
        zB.r(jB), zB.d(jB, {
          default: () => nI
        });
        var QB = zB(62),
          nB = zB(1091),
          dB = zB.n(nB),
          IB = zB(1545),
          NB = zB(1547),
          uB = zB(28),
          UB = zB(83),
          aB = zB(4808),
          pB = zB(4817),
          rB = zB(4821),
          sB = zB(4474),
          JB = zB(1148);
        const mB = "/textures/docs/icons";

        function yB(BB) {
          let {
            name: jB,
            isTinted: zB,
            className: QB,
            style: nB
          } = BB;
          const IB = `${mB}/${jB}.png`;
          return zB ? (0, JB.jsxs)("span", {
            className: dB()("DocsPixelIcon", "Tinted", QB),
            "aria-hidden": "true",
            style: nB,
            children: [(0, JB.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${IB}")`,
                WebkitMaskImage: `url("${IB}")`
              }
            }), (0, JB.jsx)("img", {
              src: IB,
              alt: ""
            })]
          }) : (0, JB.jsx)("img", {
            className: dB()("DocsPixelIcon", QB),
            src: IB,
            alt: "",
            "aria-hidden": "true",
            style: nB
          })
        }
        const kB = 1500;

        function GB() {
          const [BB, jB] = (0, QB.useState)(null);
          (0, QB.useEffect)((() => {
            if (null === BB) return;
            const zB = setTimeout((() => {
              jB(null)
            }), kB);
            return () => {
              clearTimeout(zB)
            }
          }), [BB]);
          return [BB, BB => {
            (0, sB.b)(BB).then((() => {
              jB({
                text: BB,
                failed: !1
              })
            }), (zB => {
              console.error("Could not copy to the clipboard", zB), jB({
                text: BB,
                failed: !0
              })
            }))
          }]
        }

        function LB(BB) {
          let {
            text: jB,
            label: zB,
            className: QB
          } = BB;
          const [nB, IB] = GB(), NB = !1 === (null === nB || void 0 === nB ? void 0 : nB.failed);
          return (0, JB.jsxs)("button", {
            type: "button",
            className: dB()("DocsCopyButton", QB, {
              Copied: NB
            }),
            title: `Copy ${jB.length>40?"to clipboard":jB}`,
            "aria-label": zB ? void 0 : `Copy ${jB}`,
            onClick: BB => {
              BB.stopPropagation(), IB(jB)
            },
            children: [(0, JB.jsx)(yB, {
              name: NB ? "check" : "copy"
            }), zB && (0, JB.jsx)("span", {
              children: NB ? "Copied" : null !== nB && void 0 !== nB && nB.failed ? "Copy failed" : zB
            })]
          })
        }
        aB.c.registerLanguage("javascript", pB.c), aB.c.registerLanguage("typescript", rB.b);
        const gB = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          tB = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          SB = 24;

        function MB(BB) {
          let {
            code: jB,
            lang: zB,
            compact: nB = !1
          } = BB;
          const IB = (0, QB.useMemo)((() => function(BB, jB) {
              const zB = gB[jB];
              return zB ? aB.c.highlight(BB, {
                language: zB
              }).value : BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(jB, zB)), [jB, zB]),
            NB = jB.split("\n").length,
            uB = !nB && NB > SB + 6,
            [UB, pB] = (0, QB.useState)(!1),
            rB = gB[zB];
          return (0, JB.jsxs)("div", {
            className: dB()("DocsCodeBlock", {
              Compact: nB,
              Collapsed: uB && !UB
            }),
            children: [!nB && (0, JB.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, JB.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: rB ? tB[rB] : "Text"
              }), (0, JB.jsx)(LB, {
                text: jB,
                label: "Copy"
              })]
            }), (0, JB.jsx)("pre", {
              children: (0, JB.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: IB
                }
              })
            }), uB && (0, JB.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": UB,
              onClick: () => {
                pB(!UB)
              },
              children: [(0, JB.jsx)(yB, {
                name: UB ? "chevron-up" : "chevron-down"
              }), UB ? "Show less" : `Show all ${NB} lines`]
            })]
          })
        }
        var EB = zB(4824);
        var iB = zB(4829);
        const qB = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function fB(BB) {
          const jB = new Map;
          let zB, QB = [],
            nB = !1;
          const dB = () => {
            zB && jB.set(zB.name, zB.lines.join("\n").trimEnd())
          };
          for (const IB of BB.split("\n")) {
            const BB = IB.match(qB);
            nB || IB.startsWith("/*") ? (nB || (dB(), zB = void 0), QB.push(IB), nB = !IB.includes("*/")) : BB ? (dB(), zB = {
              name: BB[1],
              lines: [...QB, IB]
            }, QB = []) : zB && (IB.startsWith(" ") || IB.startsWith("\t") || /^[}\])|]/.test(IB)) ? zB.lines.push(IB) : zB && "" !== IB.trim() && (dB(), zB = void 0)
          }
          return dB(), jB
        }

        function oB(BB) {
          return "methods" === BB || "callbacks" === BB || "settings" === BB
        }
        const HB = {
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
              setterSnippet: (BB, jB) => `api.setClientOption(playerId, "${BB}", ${jB})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (BB, jB) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${BB}", ${jB})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (BB, jB) => `api.setMobSetting(mobId, "${BB}", ${jB})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (BB, jB) => `api.setVehicleSetting(vehicleId, "${BB}", ${jB})`
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
          DB = {
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

        function FB(BB) {
          return BB.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function YB(BB) {
          let jB = !1;
          return BB.split("\n").map((BB => (BB.startsWith("```") && (jB = !jB), !jB && /^#{3,} /.test(BB) ? BB.slice(1) : BB))).join("\n")
        }

        function VB(BB) {
          return "readme" === BB ? "getting-started" : FB(BB)
        }
        const hB = "## Glossary of Referenced Types";
        const XB = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...iB.c.flatMap((BB => {
            const jB = {
              id: BB.id,
              slug: VB(BB.id),
              title: BB.title,
              markdown: BB.content,
              ...HB[BB.id]
            };
            if ("readme" === BB.id) return function(BB) {
              const jB = BB.markdown.indexOf(hB),
                zB = BB.markdown.indexOf("\n```", jB),
                QB = BB.markdown.indexOf("\n```", zB + 1);
              if (-1 === jB || -1 === zB || -1 === QB) throw new Error(`Getting started has no "${hB}" section with a code block`);
              const nB = BB.markdown.slice(jB + 31, zB).trim(),
                dB = [...fB(BB.markdown.slice(BB.markdown.indexOf("\n", zB + 1) + 1, QB))].map((BB => {
                  let [jB, zB] = BB;
                  return `## ${jB}\n\n\`\`\`ts\n${zB}\n\`\`\`\n`
                })),
                IB = BB.markdown.slice(BB.markdown.indexOf("\n", QB + 1) + 1);
              return [{
                ...BB,
                markdown: `${BB.markdown.slice(0,jB)}${IB}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${nB}\n\n${dB.join("\n")}`
              }]
            }(jB);
            if ("howTo" === BB.id) {
              const {
                parent: BB,
                guides: zB
              } = function(BB) {
                const [jB, ...zB] = BB.markdown.split(/^(?=## )/m), QB = [jB], nB = [];
                for (const IB of zB) {
                  var dB;
                  const jB = IB.indexOf("\n"),
                    zB = IB.slice(3, jB).trim(),
                    NB = IB.slice(jB + 1);
                  if (!NB.includes("```")) {
                    QB.push(IB);
                    continue
                  }
                  const uB = null !== (dB = DB[zB]) && void 0 !== dB ? dB : {
                    icon: "lightbulb",
                    summary: `How to use ${zB.toLowerCase()} in World Code.`
                  };
                  nB.push({
                    id: `${BB.id}${zB.split(/[^A-Za-z0-9]+/).map((BB=>BB.charAt(0).toUpperCase()+BB.slice(1))).join("")}`,
                    slug: `${BB.slug}-${FB(zB)}`,
                    title: zB,
                    layout: "article",
                    sourceAnchor: (0, EB.t)(zB),
                    markdown: `# ${zB}\n\n${YB(NB)}`,
                    ...uB
                  })
                }
                return {
                  parent: {
                    ...BB,
                    markdown: QB.join(""),
                    childPageIds: nB.map((BB => BB.id))
                  },
                  guides: nB
                }
              }(jB);
              return [BB, ...zB]
            }
            return [jB]
          }))],
          ZB = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...XB.filter((BB => void 0 !== BB.sourceAnchor)).map((BB => BB.id))]
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

        function AB(BB) {
          return XB.find((jB => jB.id === BB))
        }
        const TB = new Map;

        function PB(BB) {
          let jB = TB.get(BB.id);
          return jB || (jB = (0, EB.y)(BB.markdown, "changelog" === BB.layout ? 3 : 2), TB.set(BB.id, jB)), jB
        }

        function WB(BB, jB) {
          return PB(BB).sections.some((BB => BB.heading.anchor === jB || BB.blocks.some((BB => "heading" === BB.kind && BB.anchor === jB))))
        }

        function eB(BB) {
          const [jB, ...zB] = BB.replace(/^#/, "").split("-"), QB = XB.find((BB => BB.id === jB));
          if (!QB) return null;
          const nB = zB.length > 0 ? (0, EB.t)(zB.join("-")) : "";
          for (const IB of null !== (dB = QB.childPageIds) && void 0 !== dB ? dB : []) {
            var dB;
            const BB = AB(IB);
            if (BB.sourceAnchor === nB) return {
              page: BB,
              anchor: ""
            };
            if (WB(BB, nB)) return {
              page: BB,
              anchor: nB
            }
          }
          return {
            page: QB,
            anchor: nB
          }
        }
        const lB = {
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

        function wB(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const QB = jB.slug ? `${BB}/${jB.slug}` : BB;
          return zB ? `${QB}#${zB}` : QB
        }
        var xB = zB(4853);
        const KB = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          CB = new Set(["GameApi", "Console", "_TypeOf"]),
          cB = 4;

        function bB(BB) {
          let jB = BB.length;
          for (; jB > 0 && "" === BB[jB - 1].trim();) jB--;
          return BB.slice(0, jB)
        }

        function vB(BB) {
          var jB;
          const zB = bB(BB);
          if (null === (jB = zB.at(-1)) || void 0 === jB || !jB.trimEnd().endsWith("*/")) return {
            lines: zB,
            doc: ""
          };
          const QB = zB.findLastIndex((BB => BB.startsWith("/**")));
          return -1 === QB ? {
            lines: zB,
            doc: ""
          } : {
            lines: bB(zB.slice(0, QB)),
            doc: zB.slice(QB).join("\n")
          }
        }

        function RB(BB) {
          var jB;
          const zB = BB.split("\n"),
            QB = zB.flatMap(((BB, jB) => KB.test(BB) ? [jB] : []));
          let nB = vB(zB.slice(0, null !== (jB = QB[0]) && void 0 !== jB ? jB : zB.length)).doc;
          return QB.map(((BB, jB) => {
            var dB;
            const IB = vB(zB.slice(BB, null !== (dB = QB[jB + 1]) && void 0 !== dB ? dB : zB.length)),
              NB = {
                name: zB[BB].match(KB)[1],
                doc: nB,
                lines: IB.lines
              };
            return nB = IB.doc, NB
          }))
        }

        function OB(BB) {
          var jB;
          const zB = BB.match(/^readonly \[([\s\S]*)\]$/);
          return zB ? null !== (jB = zB[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== jB ? jB : [] : null
        }

        function Bj(BB) {
          if (!BB.startsWith("{") || !BB.endsWith("}")) return null;
          const jB = {
              keys: [],
              values: []
            },
            zB = BB => {
              const zB = BB.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              zB && (jB.keys.push(zB[1].startsWith('"') ? zB[1] : `"${zB[1]}"`), jB.values.push(zB[2].trim()))
            };
          let QB = 0,
            nB = "";
          for (const dB of BB.slice(1, -1)) "{[(".includes(dB) ? QB++ : "}])".includes(dB) && QB--, ";" === dB && 0 === QB ? (zB(nB), nB = "") : nB += dB;
          return zB(nB), jB
        }

        function jj(BB) {
          return BB.length > cB ? `\n\t| ${BB.join("\n\t| ")}` : BB.join(" | ")
        }

        function zj(BB, jB) {
          const zB = function(BB, jB) {
            return BB.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((BB, zB) => {
              var QB;
              const nB = null === (QB = jB.get(zB)) || void 0 === QB ? void 0 : QB.object;
              return nB ? jj(nB.values) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((BB, zB) => {
              var QB, nB;
              const dB = null === (QB = jB.get(zB)) || void 0 === QB || null === (nB = QB.object) || void 0 === nB ? void 0 : nB.values.map(OB);
              return null !== dB && void 0 !== dB && dB.every((BB => null !== BB)) ? jj([...new Set(dB.flat())]) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((BB, zB) => {
              var QB;
              const nB = null === (QB = jB.get(zB)) || void 0 === QB ? void 0 : QB.members;
              return nB ? jj(nB) : BB
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((BB, zB) => {
              var QB;
              const nB = null === (QB = jB.get(zB)) || void 0 === QB ? void 0 : QB.object;
              return nB ? jj(nB.keys) : BB
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((BB, zB) => {
              var QB, nB;
              return null !== (QB = null === (nB = jB.get(zB)) || void 0 === nB ? void 0 : nB.text) && void 0 !== QB ? QB : BB
            }))
          }(BB.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), jB);
          return [BB.doc, zB].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Qj(BB) {
          const jB = RB(BB),
            zB = function(BB) {
              const jB = new Map,
                zB = BB.find((BB => "_TypeOf" === BB.name));
              let QB = null;
              const nB = () => {
                if (QB) {
                  const BB = QB.lines.join("\n");
                  jB.set(QB.name, {
                    text: BB,
                    members: OB(BB),
                    object: Bj(BB)
                  })
                }
              };
              for (const dB of zB.lines.slice(1, -1)) {
                const BB = dB.match(/^\t([\w$]+): (.+)$/);
                BB ? (nB(), QB = {
                  name: BB[1],
                  lines: [BB[2]]
                }) : QB && QB.lines.push(dB.replace(/^\t/, ""))
              }
              return nB(), jB
            }(jB),
            QB = new Map;
          for (const nB of jB) CB.has(nB.name) || QB.has(nB.name) || QB.set(nB.name, zj(nB, zB));
          return QB
        }
        let nj, dj, Ij;

        function Nj() {
          return dj ??= function(BB) {
            const jB = RB(BB).find((BB => "GameApi" === BB.name)),
              zB = new Map,
              QB = jB.lines;
            for (let dB = 0; dB < QB.length; dB++) {
              var nB;
              if (!QB[dB].trimStart().startsWith("/**")) continue;
              const BB = dB;
              for (; dB < QB.length && !QB[dB].includes("*/");) dB++;
              const jB = null === (nB = QB[dB + 1]) || void 0 === nB ? void 0 : nB.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!jB) continue;
              let IB = null;
              const NB = [];
              let uB = "description",
                UB = !1;
              for (const zB of QB.slice(BB, dB + 1).join("\n").split("\n").map((BB => BB.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const BB = zB.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                BB ? (IB = BB[1].trim(), uB = "deprecation") : zB.startsWith("@") ? (uB = "otherTag", UB = !0) : "" === zB.trim() ? UB || (uB = "description", NB.push(zB)) : "deprecation" !== uB || /^[A-Z]/.test(zB.trim()) ? "otherTag" !== uB && (uB = "description", NB.push(zB)) : IB = `${IB} ${zB.trim()}`.trim()
              }
              zB.set(jB[1], {
                deprecation: IB,
                description: NB.join("\n").trim()
              })
            }
            return zB
          }(xB.default), dj
        }

        function uj() {
          if (!Ij) {
            Ij = new Map;
            for (const BB of XB) {
              const jB = (0, EB.x)(PB(BB)).flatMap((BB => BB.blocks));
              for (const BB of (0, EB.m)(jB))
                if ("ts" === BB.lang || "typescript" === BB.lang)
                  for (const [jB, zB] of fB(BB.code)) Ij.set(jB, zB)
            }
            for (const [BB, jB] of(nj ??= Qj(xB.default), nj)) Ij.has(BB) || Ij.set(BB, jB)
          }
          return Ij
        }
        const Uj = {
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
        let aj;

        function pj() {
          if (!aj) {
            aj = new Map;
            for (const BB of XB)
              if (oB(BB.layout))
                for (const jB of PB(BB).sections) aj.has(jB.heading.text) || aj.set(jB.heading.text, {
                  pageId: BB.id,
                  anchor: jB.heading.anchor
                })
          }
          return aj
        }

        function rj(BB) {
          const jB = BB.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return jB ? pj().get(jB[1]) : void 0
        }
        const sj = (0, QB.createContext)("/docs"),
          Jj = (0, QB.createContext)(null),
          mj = (0, QB.createContext)(!1),
          yj = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function kj(BB) {
          const jB = BB.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return jB ? jB[1] : null
        }

        function Gj(BB) {
          let {
            colour: jB
          } = BB;
          return (0, JB.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: jB
            },
            "aria-hidden": "true"
          })
        }

        function Lj(BB) {
          const jB = [];
          let zB = 0;
          for (const QB of BB.matchAll(yj)) jB.push(BB.slice(zB, QB.index), (0, JB.jsx)(Gj, {
            colour: QB[0]
          }), QB[0]), zB = QB.index + QB[0].length;
          return jB.push(BB.slice(zB)), jB
        }

        function gj(BB) {
          let {
            href: jB,
            children: zB
          } = BB;
          const nB = (0, QB.useContext)(sj);
          if (jB.startsWith("#")) {
            const BB = eB(jB);
            if (BB) return (0, JB.jsx)(IB.c, {
              to: wB(nB, BB.page, BB.anchor),
              children: (0, JB.jsx)(mj.Provider, {
                value: !0,
                children: zB
              })
            })
          }
          return (0, JB.jsx)("a", {
            href: jB,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, JB.jsx)(mj.Provider, {
              value: !0,
              children: zB
            })
          })
        }

        function tj(BB) {
          let {
            code: jB
          } = BB;
          const zB = (0, QB.useContext)(sj);
          if ((0, QB.useContext)(mj)) return (0, JB.jsx)("code", {
            className: "DocsInlineCode",
            children: jB
          });
          if (uj().has(jB)) return (0, JB.jsx)(ij, {
            type: jB
          });
          const nB = rj(jB);
          if (nB) return (0, JB.jsx)(IB.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: wB(zB, AB(nB.pageId), nB.anchor),
            children: jB
          });
          const dB = kj(jB);
          return (0, JB.jsxs)("code", {
            className: "DocsInlineCode",
            children: [dB && (0, JB.jsx)(Gj, {
              colour: dB
            }), jB]
          })
        }

        function Sj(BB) {
          let {
            text: jB
          } = BB;
          const zB = [];
          let nB = 0;
          for (const QB of jB.matchAll(EB.f)) {
            QB.index > nB && zB.push(...Lj(jB.slice(nB, QB.index)));
            const [, BB, dB, IB, NB, uB] = QB;
            BB ? zB.push((0, JB.jsx)(tj, {
              code: (0, EB.q)(BB, dB)
            })) : IB ? zB.push((0, JB.jsx)("strong", {
              children: (0, JB.jsx)(Sj, {
                text: IB
              })
            })) : zB.push((0, JB.jsx)(gj, {
              href: uB,
              children: (0, JB.jsx)(Sj, {
                text: NB
              })
            })), nB = QB.index + QB[0].length
          }
          return nB < jB.length && zB.push(...Lj(jB.slice(nB))), (0, JB.jsx)(JB.Fragment, {
            children: zB.map(((BB, jB) => (0, JB.jsx)(QB.Fragment, {
              children: BB
            }, jB)))
          })
        }
        const Mj = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Ej = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function ij(BB) {
          let {
            type: jB
          } = BB;
          const zB = uj(),
            nB = [];
          for (const QB of jB.trim().matchAll(Mj)) {
            const [BB, jB, dB, IB, NB] = QB;
            jB ? nB.push((0, JB.jsx)("span", {
              className: "DocsTypeString",
              children: BB
            })) : dB && zB.has(dB) ? nB.push((0, JB.jsx)(Dj, {
              name: dB,
              definition: zB.get(dB)
            })) : dB ? nB.push((0, JB.jsx)("span", {
              className: Ej.has(dB) ? "DocsTypeKeyword" : "DocsTypeName",
              children: BB
            })) : IB ? nB.push((0, JB.jsx)("span", {
              className: "DocsTypeNumber",
              children: BB
            })) : NB ? nB.push(" ") : nB.push((0, JB.jsx)("span", {
              className: "DocsTypePunctuation",
              children: BB
            }))
          }
          return (0, JB.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: nB.map(((BB, jB) => (0, JB.jsx)(QB.Fragment, {
              children: BB
            }, jB)))
          })
        }
        const qj = 480,
          fj = 6,
          oj = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Hj = 0;

        function Dj(BB) {
          let {
            name: jB,
            definition: zB
          } = BB;
          const nB = (0, QB.useContext)(sj),
            dB = Uj[jB],
            NB = (0, QB.useRef)(null),
            uB = (0, QB.useRef)(null),
            aB = (0, QB.useRef)(null),
            [pB, rB] = (0, QB.useState)(!1),
            [sB, mB] = (0, QB.useState)(null),
            kB = (0, QB.useRef)(),
            GB = (0, QB.useContext)(Jj),
            [LB] = (0, QB.useState)((() => "DocsTypePopover-" + Hj++)),
            gB = () => {
              clearTimeout(kB.current), rB(!0)
            },
            tB = () => {
              clearTimeout(kB.current), kB.current = setTimeout((() => {
                rB(!1)
              }), 120)
            };
          return (0, QB.useEffect)((() => {
            if (!pB) return;
            const BB = BB => {
              if ("Escape" === BB.key) {
                var jB, zB;
                if (null !== (jB = uB.current) && void 0 !== jB && jB.contains(document.activeElement)) null === (zB = NB.current) || void 0 === zB || zB.focus();
                rB(!1)
              }
            };
            return document.addEventListener("keydown", BB), () => {
              document.removeEventListener("keydown", BB)
            }
          }), [pB]), (0, QB.useEffect)((() => () => {
            clearTimeout(kB.current)
          }), []), (0, QB.useLayoutEffect)((() => {
            if (!pB || !NB.current || !uB.current) return void mB(null);
            const BB = NB.current.getBoundingClientRect(),
              jB = uB.current.offsetHeight,
              zB = Math.min(qj, window.innerWidth - 32),
              QB = Math.min(Math.max(16, BB.left), window.innerWidth - zB - 16),
              nB = BB.bottom + fj + jB < window.innerHeight;
            mB({
              left: QB,
              top: nB ? BB.bottom + fj : Math.max(16, BB.top - fj - jB)
            })
          }), [pB]), (0, JB.jsxs)(JB.Fragment, {
            children: [(0, JB.jsx)("button", {
              type: "button",
              ref: NB,
              className: "DocsTypeLink",
              "aria-expanded": pB,
              "aria-describedby": pB ? LB : void 0,
              onMouseEnter: gB,
              onMouseLeave: tB,
              onFocus: gB,
              onBlur: tB,
              onKeyDown: BB => {
                "Tab" === BB.key && !BB.shiftKey && aB.current && (BB.preventDefault(), aB.current.focus())
              },
              onClick: gB,
              children: jB
            }), pB && (0, UB.createPortal)((0, JB.jsxs)("span", {
              ref: uB,
              id: LB,
              className: "DocsTypePopover",
              role: "tooltip",
              style: sB ? {
                left: sB.left,
                top: sB.top,
                maxWidth: qj
              } : {
                visibility: "hidden"
              },
              onMouseEnter: gB,
              onMouseLeave: tB,
              onFocus: gB,
              onBlur: tB,
              children: [(0, JB.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, JB.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: jB
                }), dB && (0, JB.jsxs)(IB.c, {
                  ref: aB,
                  className: "DocsTypePopoverLink",
                  to: wB(nB, AB(dB)),
                  onClick: () => {
                    rB(!1)
                  },
                  onKeyDown: BB => {
                    if ("Tab" === BB.key) {
                      var jB;
                      if (BB.preventDefault(), BB.shiftKey || !NB.current || ! function(BB, jB) {
                          const zB = [...document.querySelectorAll(oj)],
                            QB = zB.slice(zB.indexOf(BB) + 1).find((BB => BB.getClientRects().length > 0 && !(null !== jB && void 0 !== jB && jB.contains(BB))));
                          return null === QB || void 0 === QB || QB.focus(), void 0 !== QB
                        }(NB.current, uB.current)) null === (jB = NB.current) || void 0 === jB || jB.focus();
                      BB.shiftKey || rB(!1)
                    }
                  },
                  children: [AB(dB).title, (0, JB.jsx)(yB, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, JB.jsx)(MB, {
                lang: "ts",
                code: zB,
                compact: !0
              })]
            }), null !== GB && void 0 !== GB ? GB : document.body)]
          })
        }
        var Fj = zB(214),
          Yj = zB(4855),
          Vj = zB(4862),
          hj = zB(4866);
        const Xj = {
          progressBar: {
            vB: 30,
            RB: .075,
            OB: 5,
            Bj: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Qj: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Ij: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Nj: !0,
            scale: 3,
            rotation: 15,
            uj: !1
          },
          gravityBar: {
            vB: 30,
            aj: .25,
            pj: 3,
            rj: .8,
            gravity: 1,
            sj: 1.5,
            Jj: 8,
            mj: 4,
            Bj: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            kj: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Lj: 5,
            gj: 1200,
            tj: .15,
            Sj: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Zj = zB(363),
          Aj = zB(2046);

        function Tj(BB) {
          return BB.startsWith("fa-")
        }
        const Pj = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Wj = {
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

        function ej(BB) {
          return "string" === typeof BB ? "text" : "entityName" in BB || "translationKey" in BB ? "other" : (0, Zj.nb)(BB) ? "progressBar" : (0, Zj.mb)(BB) ? "keyBinding" : "icon" in BB ? "icon" : "str" in BB && "string" === typeof BB.str ? "text" : "other"
        }
        const lj = [{
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
          wj = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...lj],
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
                options: Aj.g
              },
              isRequired: !0
            }, ...lj],
            other: []
          };

        function xj(BB) {
          return "string" === typeof BB ? {
            str: BB
          } : BB
        }

        function Kj(BB, jB) {
          let zB = xj(BB);
          for (const QB of jB) zB = zB && "object" === typeof zB ? zB[QB] : void 0;
          return zB
        }

        function Cj(BB, jB, zB) {
          const QB = (BB, nB) => {
            var dB;
            const IB = jB[nB],
              NB = {
                ...BB
              };
            if (nB === jB.length - 1) return void 0 === zB ? delete NB[IB] : NB[IB] = zB, NB;
            const uB = QB(null !== (dB = BB[IB]) && void 0 !== dB ? dB : {}, nB + 1);
            return 0 === Object.keys(uB).length ? delete NB[IB] : NB[IB] = uB, NB
          };
          return function(BB) {
            const jB = Object.keys(BB);
            return "string" === typeof BB.str && 1 === jB.length ? BB.str : BB
          }(QB(xj(BB), 0))
        }

        function cj(BB, jB) {
          const zB = ej(BB),
            QB = wj[zB].find((BB => BB.path.join(".") === jB.join("."))),
            nB = null !== QB && void 0 !== QB && QB.isRequired && "other" !== zB ? Kj(Wj[zB], jB) : void 0;
          return Cj(BB, jB, nB)
        }

        function bj(BB) {
          switch (ej(BB)) {
            case "text":
              return String(Kj(BB, ["str"]));
            case "icon":
              return String(Kj(BB, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Kj(BB,["progress"])))}%`;
            case "keyBinding":
              return String(Kj(BB, ["action"]));
            case "other":
              return JSON.stringify(BB)
          }
        }
        const vj = /^[A-Za-z_$][\w$]*$/;

        function Rj(BB) {
          if (Array.isArray(BB)) return `[${BB.map(Rj).join(", ")}]`;
          if (BB && "object" === typeof BB) {
            const jB = Object.entries(BB).map((BB => {
              let [jB, zB] = BB;
              return `${vj.test(jB)?jB:JSON.stringify(jB)}: ${Rj(zB)}`
            }));
            return 0 === jB.length ? "{}" : `{ ${jB.join(", ")} }`
          }
          return JSON.stringify(BB)
        }

        function Oj(BB) {
          const jB = BB.map(Rj),
            zB = `[${jB.join(", ")}]`;
          return zB.length <= 60 ? zB : `[\n${jB.map((BB=>`    ${BB},`)).join("\n")}\n]`
        }
        const Bz = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function jz(BB) {
          let jB = "";
          for (let nB = 0; nB < BB.length; nB++) {
            const dB = BB[nB];
            if ("\\" === dB) {
              var zB;
              const QB = null !== (zB = BB[nB + 1]) && void 0 !== zB ? zB : "";
              jB += "'" === QB ? "'" : dB + QB, nB++
            } else if ('"' === dB) jB += '\\"';
            else {
              var QB;
              jB += null !== (QB = Bz[dB]) && void 0 !== QB ? QB : dB
            }
          }
          return `"${jB}"`
        }

        function zz(BB) {
          if ("string" === typeof BB) return !0;
          if (!BB || "object" !== typeof BB || Array.isArray(BB)) return !1;
          const jB = BB;
          return "ProgressBar" === jB.type ? "number" === typeof jB.progress : "StyledKeyBinding" === jB.type ? Aj.g.includes(jB.action) : "string" === typeof jB.icon || "string" === typeof jB.str || "string" === typeof jB.entityName || "string" === typeof jB.translationKey
        }

        function Qz(BB) {
          let jB;
          try {
            jB = function(BB) {
              let jB = "",
                zB = "",
                QB = 0;
              const nB = () => {
                jB += zB.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), zB = ""
              };
              for (; QB < BB.length;) {
                const dB = BB.slice(QB).search(/["'`]|\/\//);
                if (-1 === dB) {
                  zB += BB.slice(QB);
                  break
                }
                zB += BB.slice(QB, QB + dB);
                const IB = QB + dB,
                  NB = BB[IB];
                if ("/" === NB) {
                  const jB = BB.indexOf("\n", IB);
                  QB = -1 === jB ? BB.length : jB;
                  continue
                }
                if (nB(), "`" === NB) throw new Error("Use quotes rather than template strings.");
                let uB = IB + 1;
                for (; uB < BB.length && BB[uB] !== NB;) uB += "\\" === BB[uB] ? 2 : 1;
                if (uB >= BB.length) throw new Error("A string is missing its closing quote.");
                const UB = BB.slice(IB + 1, uB);
                jB += jz(UB), QB = uB + 1
              }
              return nB(), JSON.parse(jB)
            }(BB.trim())
          } catch (QB) {
            return {
              parts: null,
              error: QB instanceof SyntaxError ? "This isn't a valid array yet." : QB.message
            }
          }
          if (!Array.isArray(jB)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const zB = jB.findIndex((BB => !zz(BB)));
          return -1 !== zB ? {
            parts: null,
            error: `Part ${zB+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: jB,
            error: null
          }
        }
        const nz = 1 / Fj.e.clientTicksPerSecond,
          dz = 700,
          Iz = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Nz = {
            progressBar: Xj.progressBar.Qj,
            timedClick: Xj.timedClick.icon,
            gravityBar: Xj.gravityBar.icon,
            precisionBar: Xj.precisionBar.icon,
            rhythmClick: Xj.rhythmClick.icon
          };

        function uz(BB) {
          let {
            type: jB
          } = BB;
          const [zB, nB] = (0, QB.useState)("ready"), [IB, NB] = (0, QB.useState)(1), [uB, UB] = (0, QB.useState)(!0), aB = (0, QB.useRef)(null), pB = (0, QB.useRef)(null), rB = (0, QB.useRef)(null), sB = (0, QB.useRef)(new Set), mB = (0, QB.useRef)(!1), kB = Nz[jB], GB = (0, QB.useMemo)((() => ({
            getState: () => {
              var BB, jB;
              return null !== (BB = null === (jB = rB.current) || void 0 === jB ? void 0 : jB.getState()) && void 0 !== BB ? BB : Iz
            },
            onFrame: BB => (sB.current.add(BB), () => {
              sB.current.delete(BB)
            })
          })), []);
          (0, QB.useEffect)((() => {
            const BB = aB.current,
              jB = pB.current;
            if (!BB || !jB) return;
            const zB = new ResizeObserver((() => {
              NB(BB.clientWidth / Math.max(1, jB.offsetWidth))
            }));
            return zB.observe(BB), () => {
              zB.disconnect()
            }
          }), []), (0, QB.useEffect)((() => {
            var BB;
            if ("playing" !== zB) return;
            let QB = !1;
            const dB = new hj.e[jB](Xj[jB], (BB => {
              QB = !0, UB(!1), nB(BB ? "succeeded" : "failed")
            }), (() => {}));
            rB.current = dB;
            let IB = 0,
              NB = performance.now(),
              uB = requestAnimationFrame((function BB(jB) {
                for (IB += Math.min(.25, (jB - NB) / 1e3), NB = jB; IB >= nz && !QB;) IB -= nz, dB.handleTick(nz);
                for (const zB of sB.current) zB();
                QB || (uB = requestAnimationFrame(BB))
              }));
            return null === (BB = aB.current) || void 0 === BB || BB.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(uB), dB.tearDown(), rB.current = null, mB.current = !1
            }
          }), [zB, jB]), (0, QB.useEffect)((() => {
            if (uB) return;
            const BB = setTimeout((() => {
              UB(!0)
            }), dz);
            return () => {
              clearTimeout(BB)
            }
          }), [uB]);
          const LB = BB => {
            var jB;
            "playing" === zB && mB.current !== BB && (mB.current = BB, null === (jB = rB.current) || void 0 === jB || jB.handleMouseInput(BB))
          };
          return (0, JB.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, JB.jsxs)("div", {
              ref: aB,
              className: dB()("DocsQteStage", {
                Playing: "playing" === zB
              }),
              tabIndex: "playing" === zB ? 0 : -1,
              role: "playing" === zB ? "button" : void 0,
              "aria-label": "playing" === zB ? `${jB} quick time event: click or press Space` : void 0,
              onPointerDown: BB => {
                0 === BB.button && LB(!0)
              },
              onPointerUp: () => {
                LB(!1)
              },
              onPointerLeave: () => {
                LB(!1)
              },
              onPointerCancel: () => {
                LB(!1)
              },
              onKeyDown: BB => {
                "playing" !== zB || " " !== BB.key && "Enter" !== BB.key || (BB.preventDefault(), LB(!0))
              },
              onKeyUp: BB => {
                "playing" !== zB || " " !== BB.key && "Enter" !== BB.key || LB(!1)
              },
              children: [(0, JB.jsx)("div", {
                ref: pB,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${IB})`
                },
                children: "playing" === zB && (0, JB.jsx)(Vj.b.Provider, {
                  value: GB,
                  children: (0, JB.jsx)(Yj.d, {
                    qte: {
                      type: jB,
                      parameters: Xj[jB]
                    }
                  })
                })
              }), "playing" !== zB && (0, JB.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== zB && (0, JB.jsxs)("div", {
                  className: dB()("DocsQteResult", "succeeded" === zB ? "Succeeded" : "Failed"),
                  children: [(0, JB.jsx)(yB, {
                    name: "succeeded" === zB ? "check" : "cross",
                    isTinted: !0
                  }), (0, JB.jsx)("span", {
                    children: "succeeded" === zB ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, JB.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !uB,
                  onClick: () => {
                    nB("playing")
                  },
                  children: [(0, JB.jsx)(yB, {
                    name: "ready" === zB ? "play" : "replay"
                  }), (0, JB.jsx)("span", {
                    children: "ready" === zB ? `Try ${jB}` : "Play again"
                  })]
                })]
              })]
            }), kB && !Tj(kB) && (0, JB.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, JB.jsx)("code", {
                children: kB
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Uz(BB) {
          let {
            level: jB,
            text: zB,
            anchor: QB,
            className: nB
          } = BB;
          const IB = `h${Math.min(jB,6)}`;
          return (0, JB.jsxs)(IB, {
                id: QB,
                className: dB()("DocsHeading", nB),
                children: [(0, JB.jsx)(Sj, {
                      text: zB
                    }), (0, JB.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${QB}`,
                        "aria-label": `Link to ${zB.replace(/`/g,"")}`,children:"#"})]})}function az(BB){let{items:jB,ordered:zB}=BB;const QB=zB?"ol":"ul";return(0,JB.jsx)(QB,{className:"DocsList",children:jB.map(((BB,jB)=>(0,JB.jsxs)("li",{children:[(0,JB.jsx)(Sj,{text:BB.text}),BB.children.length>0&&(0,JB.jsx)(az,{items:BB.children,ordered:zB})]},jB)))})}function pz(BB){const jB=BB[0],zB="paragraph"===(null===jB||void 0===jB?void 0:jB.kind)?jB.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(zB)?"warning":/^\*\*(tip|prefer)/.test(zB)?"tip":"note"}function rz(BB){let{block:jB}=BB;switch(jB.kind){case"heading":return(0,JB.jsx)(Uz,{level:jB.level,text:jB.text,anchor:jB.anchor});case"paragraph":return(0,JB.jsx)("p",{children:(0,JB.jsx)(Sj,{text:jB.text})});case"code":{const BB="ts"===jB.lang?function(BB){const jB=BB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return jB&&Object.hasOwn(Xj,jB[1])?jB[1]:null}(jB.code):null;return(0,JB.jsxs)(JB.Fragment,{children:[(0,JB.jsx)(MB,{code:jB.code,lang:jB.lang}),BB&&(0,JB.jsx)(uz,{type:BB})]})}case"table":return(0,JB.jsx)("div",{className:"DocsTableScroll",children:(0,JB.jsxs)("table",{className:"DocsTable",children:[(0,JB.jsx)("thead",{children:(0,JB.jsx)("tr",{children:jB.header.map(((BB,jB)=>(0,JB.jsx)("th",{children:(0,JB.jsx)(Sj,{text:BB})},jB)))})}),(0,JB.jsx)("tbody",{children:jB.rows.map(((BB,jB)=>(0,JB.jsx)("tr",{children:BB.map(((BB,jB)=>(0,JB.jsx)("td",{children:(0,JB.jsx)(Sj,{text:BB})},jB)))},jB)))})]})});case"list":return(0,JB.jsx)(az,{items:jB.items,ordered:jB.ordered});case"quote":return(0,JB.jsx)("aside",{className:dB()("DocsCallout",pz(jB.blocks)),children:(0,JB.jsx)(sz,{blocks:jB.blocks})});case"rule":return(0,JB.jsx)("hr",{className:"DocsRule"})}}function sz(BB){let{blocks:jB}=BB;return(0,JB.jsx)(JB.Fragment,{children:jB.map(((BB,jB)=>(0,JB.jsx)(rz,{block:BB},jB)))})}var Jz=zB(4836),mz=zB(4845);function yz(BB){return"blocks"===BB||"items"===BB}const kz=new Map;function Gz(BB){let jB=kz.get(BB);return jB||(jB=function(BB){const jB={entries:[],legend:[],notes:[],examples:[]};let zB=!1;for(const dB of BB.split(/\r?\n/).slice(1)){if(dB.startsWith("#")){const BB=dB.replace(/^# ?/,""),QB=BB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);QB?jB.legend.push({code:QB[1],meaning:QB[2],usage:QB[3].trim()}):/^Examples:/.test(BB.trim())?zB=!0:zB&&BB.trim()?jB.examples.push(BB.trim()):BB.trim()&&!/^\s/.test(BB)&&jB.notes.push(BB.trim());continue}const BB=dB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var QB,nB;BB&&jB.entries.push({name:BB[1],variants:null!==(QB=null===(nB=BB[2])||void 0===nB?void 0:nB.split(","))&&void 0!==QB?QB:[]})}return jB}("blocks"===BB?Jz:mz),kz.set(BB,jB)),jB}function Lz(BB){let{className:jB,value:zB,placeholder:QB,label:nB,onChange:dB,count:IB,children:NB}=BB;return(0,JB.jsxs)("div",{className:jB,children:[(0,JB.jsx)(yB,{name:"magnifying-glass"}),(0,JB.jsx)("input",{type:"search",value:zB,placeholder:QB,"aria-label":nB,onChange:BB=>{dB(BB.target.value)}}),NB,IB&&(0,JB.jsxs)("span",{className:"DocsFilterCount",children:[IB.visible," of ",IB.total]})]})}var gz=zB(1108);function tz(BB){const jB=BB.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return jB?jB[2]:null}function Sz(BB){return"paragraph"===BB.kind&&""===BB.text.trim()}function Mz(BB){const jB={name:BB.heading.text,description:[],params:[],returns:null};let zB="description";for(const nB of BB.blocks)if(!Sz(nB))if("heading"===nB.kind&&/^Parameters:?$/.test(nB.text))zB="params";else if("heading"===nB.kind&&/^Returns:?$/.test(nB.text))zB="returns",jB.returns={type:"",description:[]};else if("params"!==zB||"table"!==nB.kind){if("returns"===zB&&"paragraph"===nB.kind&&""===jB.returns.type){const BB=tz(nB.text);if(null!==BB){jB.returns.type=BB.replaceAll("\\|","|");continue}}"returns"===zB?jB.returns.description.push(nB):jB.description.push(nB)}else for(const[BB,zB,dB]of nB.rows){var QB;jB.params.push({name:BB,type:null!==(QB=tz(zB))&&void 0!==QB?QB:zB,description:null!==dB&&void 0!==dB?dB:""})}return jB}const Ez=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function iz(BB){return BB.filter((BB=>!Sz(BB)))}const qz=/^[\w][\w .'&!:()-]*$/,fz=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function oz(BB){var jB;if("code"===BB.kind&&"text"===BB.lang){const jB=BB.code.split("\n").map((BB=>BB.trim())).filter(Boolean);return jB.length>0&&jB.every((BB=>qz.test(BB)))?jB.map((BB=>({name:BB}))):null}return"paragraph"===BB.kind&&fz.test(BB.text.trim())?[...BB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((BB => BB[1].split(/,\s*/).map((BB => ({
                              name: BB.trim()
                            }))))): "table" === BB.kind && null !== (jB = BB.header[0]) && void 0 !== jB && jB.startsWith("Song") ? BB.rows.map((BB => {
                              let [jB, zB] = BB;
                              return {
                                name: jB.replace(/`/g, ""),
                                caption: zB
                              }
                            })) : null
                          }

                          function Hz(BB) {
                            const jB = [];
                            for (const zB of BB) {
                              const BB = oz(zB),
                                QB = jB.at(-1),
                                nB = "table" === zB.kind;
                              BB ? "names" === (null === QB || void 0 === QB ? void 0 : QB.kind) && QB.isSongs === nB ? QB.names.push(...BB) : jB.push({
                                kind: "names",
                                names: BB,
                                isSongs: nB
                              }) : jB.push({
                                kind: "block",
                                block: zB
                              })
                            }
                            return jB
                          }
                          const Dz = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Fz(BB, jB) {
                            return `${Dz[BB]}-${(0,EB.t)(jB)}`
                          }
                          const Yz = new WeakMap;

                          function Vz(BB, jB, zB) {
                            let QB = Yz.get(jB);
                            if (!QB) {
                              QB = new Map;
                              const zB = new Set;
                              for (const nB of (0, EB.x)(jB)) {
                                const jB = Hz(iz(nB.blocks)).map((jB => {
                                  if ("block" === jB.kind) return jB;
                                  return {
                                    kind: "names",
                                    names: jB.names.map((jB => {
                                      var QB, dB;
                                      const IB = Fz(BB, jB.name);
                                      let NB = IB;
                                      for (let BB = 2; zB.has(NB); BB++) NB = `${IB}-${BB}`;
                                      return zB.add(NB), {
                                        ...jB,
                                        anchor: NB,
                                        heading: null !== (QB = null === (dB = nB.heading) || void 0 === dB ? void 0 : dB.text) && void 0 !== QB ? QB : ""
                                      }
                                    })),
                                    isSongs: jB.isSongs
                                  }
                                }));
                                QB.set(nB.blocks, jB)
                              }
                              Yz.set(jB, QB)
                            }
                            const nB = QB.get(zB);
                            if (!nB) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return nB
                          }
                          const hz = "/textures/docs/skinPreviews",
                            Xz = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Zz = zB(4315),
                            Az = zB(4334);

                          function Tz(BB) {
                            return Object.hasOwn(Zz.h, BB) ? Zz.h[BB] : null
                          }
                          const Pz = {
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
                            blendMode: Az.d.Standard
                          };

                          function Wz(BB, jB, zB) {
                            return jB + (zB - jB) * BB()
                          }

                          function ez(BB, jB, zB) {
                            return BB + (jB - BB) * zB
                          }

                          function lz(BB) {
                            return BB.length > 0 && "timeFraction" in BB[0]
                          }

                          function wz(BB, jB) {
                            if (0 === BB.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!lz(BB.colorGradients)) {
                              const zB = BB.colorGradients,
                                {
                                  color: QB
                                } = zB[Math.floor(jB() * zB.length) % zB.length];
                              return [{
                                at: 0,
                                colour: [QB[0] / 255, QB[1] / 255, QB[2] / 255, 1]
                              }]
                            }
                            return [...BB.colorGradients].sort(((BB, jB) => BB.timeFraction - jB.timeFraction)).map((BB => {
                              var zB, QB, nB;
                              const dB = BB.minColor,
                                IB = null !== (zB = BB.maxColor) && void 0 !== zB ? zB : dB,
                                NB = jB(),
                                uB = [ez(dB[0], IB[0], NB) / 255, ez(dB[1], IB[1], NB) / 255, ez(dB[2], IB[2], NB) / 255, ez(null !== (QB = dB[3]) && void 0 !== QB ? QB : 1, null !== (nB = IB[3]) && void 0 !== nB ? nB : 1, NB)];
                              return {
                                at: BB.timeFraction,
                                colour: uB
                              }
                            }))
                          }

                          function xz(BB, jB, zB, QB) {
                            const nB = Wz(QB, BB.minEmitPower, BB.maxEmitPower),
                              dB = jB => Wz(QB, Math.min(BB.dir1[jB], BB.dir2[jB]), Math.max(BB.dir1[jB], BB.dir2[jB])) * nB,
                              IB = [...BB.velocityGradients].sort(((BB, jB) => BB.timeFraction - jB.timeFraction)).map((BB => ({
                                at: BB.timeFraction,
                                factor: Wz(QB, BB.factor, BB.factor2)
                              })));
                            return {
                              pos: [Wz(QB, jB[0], zB[0]), Wz(QB, jB[1], zB[1]), Wz(QB, jB[2], zB[2])],
                              dir: [dB(0), dB(1), dB(2)],
                              age: 0,
                              life: Wz(QB, BB.minLifeTime, BB.maxLifeTime),
                              size: Wz(QB, BB.minSize, BB.maxSize),
                              colours: wz(BB, QB),
                              velocityFactors: IB
                            }
                          }

                          function Kz(BB, jB, zB, QB) {
                            if (jB < BB[0].at) return zB(Math.min(1, BB.length - 1));
                            for (let nB = 0; nB < BB.length - 1; nB++)
                              if (jB <= BB[nB + 1].at) {
                                const dB = BB[nB + 1].at - BB[nB].at;
                                return QB(zB(nB), zB(nB + 1), dB > 0 ? (jB - BB[nB].at) / dB : 1)
                              } return zB(BB.length - 1)
                          }

                          function Cz(BB) {
                            return Kz(BB.colours, BB.age / BB.life, (jB => BB.colours[jB].colour), ((BB, jB, zB) => [ez(BB[0], jB[0], zB), ez(BB[1], jB[1], zB), ez(BB[2], jB[2], zB), ez(BB[3], jB[3], zB)]))
                          }

                          function cz(BB, jB, zB) {
                            if (BB.age += zB, BB.age >= BB.life) return !1;
                            const QB = function(BB) {
                              return 0 === BB.velocityFactors.length ? 1 : Kz(BB.velocityFactors, BB.age / BB.life, (jB => BB.velocityFactors[jB].factor), ez)
                            }(BB) * zB;
                            for (let dB = 0; dB < 3; dB++) {
                              var nB;
                              BB.pos[dB] += BB.dir[dB] * QB, BB.dir[dB] += (null !== (nB = jB[dB]) && void 0 !== nB ? nB : 0) * zB
                            }
                            return !0
                          }

                          function bz(BB) {
                            return String(Math.round(1e6 * BB) / 1e6)
                          }

                          function vz(BB) {
                            return `[${BB.map(bz).join(", ")}]`
                          }

                          function Rz(BB, jB) {
                            const zB = `${jB}    `;
                            return `[\n${(lz(BB)?BB.map((BB=>{const jB=[`${zB}    timeFraction: ${bz(BB.timeFraction)},`,`${zB}    minColor: ${vz(BB.minColor)},`];return BB.maxColor&&jB.push(`${zB}    maxColor: ${vz(BB.maxColor)},`),`${zB}{\n${jB.join("\n")}\n${zB}},`})):BB.map((BB=>`
                            $ {
                              zB
                            } {
                              color: $ {
                                vz(BB.color)
                              }
                            }, `))).join("\n")}\n${jB}]`
                          }
                          const Oz = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            BQ = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const jQ = .6;

                          function zQ(BB, jB) {
                            return `${jB?"song":"sound"}:${BB}`
                          }
                          let QQ = {
                              track: null,
                              volume: jQ
                            },
                            nQ = null,
                            dQ = 0,
                            IQ = 0;
                          const NQ = new Set;

                          function uQ(BB) {
                            QQ = {
                              ...QQ,
                              ...BB
                            }, NQ.forEach((BB => {
                              BB()
                            }))
                          }

                          function UQ(BB) {
                            QQ.track && uQ({
                              track: {
                                ...QQ.track,
                                ...BB
                              }
                            })
                          }

                          function aQ(BB) {
                            const [jB, zB] = (0, QB.useState)((() => BB(QQ))), nB = (0, QB.useRef)(BB);
                            return nB.current = BB, (0, QB.useEffect)((() => {
                              const BB = () => {
                                zB((() => nB.current(QQ)))
                              };
                              return NQ.add(BB), BB(), () => {
                                NQ.delete(BB)
                              }
                            }), []), jB
                          }

                          function pQ() {
                            dQ++;
                            const BB = nQ;
                            nQ = null, null === BB || void 0 === BB || BB.stop()
                          }

                          function rQ(BB, jB) {
                            let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            pQ();
                            const nB = dQ,
                              {
                                track: dB
                              } = QQ,
                              IB = dB && dB.name === BB && dB.isSong === jB ? dB.duration : 0;
                            IQ = QB, uQ({
                              track: {
                                name: BB,
                                isSong: jB,
                                status: "loading",
                                duration: IB
                              }
                            }), Promise.all([zB.e(227), zB.e(253)]).then((() => zB(39882))).then((zB => {
                              let {
                                playDocsSound: dB
                              } = zB;
                              nB === dQ && (nQ = dB(BB, jB, QQ.volume, QB, {
                                onPlay: BB => {
                                  nB === dQ && UQ({
                                    status: "playing",
                                    duration: BB
                                  })
                                },
                                onEnd: BB => {
                                  var jB, zB;
                                  nB === dQ && (nQ = null, BB ? uQ({
                                    track: null
                                  }) : (IQ = null !== (jB = null === (zB = QQ.track) || void 0 === zB ? void 0 : zB.duration) && void 0 !== jB ? jB : 0, UQ({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((jB => {
                              console.error(`Could not play docs sound ${BB}`, jB), nB === dQ && uQ({
                                track: null
                              })
                            }))
                          }

                          function sQ() {
                            const {
                              track: BB
                            } = QQ;
                            if (!BB) return;
                            if ("playing" === BB.status && nQ) return IQ = nQ.iG(), nQ.pause(), void UQ({
                              status: "paused"
                            });
                            if ("loading" === BB.status) return pQ(), void UQ({
                              status: "paused"
                            });
                            if (nQ) return void nQ.resume();
                            const jB = BB.duration > 0 && IQ >= BB.duration - .05;
                            rQ(BB.name, BB.isSong, jB ? 0 : IQ)
                          }

                          function JQ() {
                            var BB;
                            return nQ && "playing" === (null === (BB = QQ.track) || void 0 === BB ? void 0 : BB.status) ? nQ.iG() : IQ
                          }

                          function mQ(BB) {
                            var jB;
                            null === (jB = nQ) || void 0 === jB || jB.setVolume(BB), uQ({
                              volume: BB
                            })
                          }

                          function yQ() {
                            pQ(), IQ = 0, uQ({
                              track: null
                            })
                          }
                          const kQ = (0, QB.createContext)(null);
                          let GQ = null;

                          function LQ() {
                            const [BB, jB] = (0, QB.useState)(null);
                            return (0, QB.useEffect)((() => {
                              let BB = !1;
                              return GQ ??= Promise.all([zB.e(73), zB.e(76), zB.e(75), zB.e(74), zB.e(188), zB.e(100), zB.e(231)]).then((() => zB(39874))), GQ.then((zB => {
                                BB || jB(zB)
                              }), (BB => {
                                console.error("Could not load the docs gallery's textures", BB), GQ = null
                              })), () => {
                                BB = !0
                              }
                            }), []), BB
                          }
                          const gQ = 24,
                            tQ = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function SQ(BB, jB) {
                            const zB = "skins" === BB ? function(BB, jB) {
                              const zB = Xz.find((jB => BB.startsWith(jB.heading)));
                              return zB ? function(BB, jB) {
                                return `${BB}-${jB}`
                              }(zB.prefix, jB) : null
                            }(jB.heading, jB.name) : null;
                            return null === zB ? null : `${hz}/${zB}.webp`
                          }

                          function MQ(BB) {
                            let {
                              kind: jB,
                              entry: zB,
                              assets: nB,
                              renderedUrl: IB
                            } = BB;
                            const {
                              name: NB
                            } = zB, [uB, UB] = (0, QB.useState)(!1);
                            if ("icons" === jB && Tj(NB)) return (0, JB.jsx)(gz.c, {
                              className: "DocsTileIcon",
                              name: NB
                            });
                            let aB = null;
                            var pB;
                            if ("icons" === jB) aB = null !== (pB = null === nB || void 0 === nB ? void 0 : nB.getIngameIconUrl(NB)) && void 0 !== pB ? pB : null;
                            else if ("particles" === jB) {
                              var rB, sB, mB;
                              aB = null !== (rB = null === nB || void 0 === nB ? void 0 : nB.getParticleTextureUrl(null !== (sB = null === (mB = Tz(NB)) || void 0 === mB ? void 0 : mB.texture) && void 0 !== sB ? sB : NB)) && void 0 !== rB ? rB : null
                            } else "skins" === jB && (aB = null !== IB && void 0 !== IB ? IB : tQ.test(NB) ? `/textures/charSkins/previews/${NB}_preview.png` : null);
                            return !aB || uB ? (0, JB.jsx)(yB, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === jB ? "person" : "image"
                            }) : (0, JB.jsx)("img", {
                              className: dB()("DocsTileImage", {
                                Pixelated: "skins" !== jB
                              }),
                              src: aB,
                              srcSet: aB === IB ? `${aB} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${aB}`), UB(!0)
                              }
                            })
                          }

                          function EQ(BB) {
                            let {
                              entry: jB,
                              isSong: zB
                            } = BB;
                            const QB = aQ((BB => {
                                let {
                                  track: QB
                                } = BB;
                                return (null === QB || void 0 === QB ? void 0 : QB.name) === jB.name && QB.isSong === zB ? QB.status : null
                              })),
                              nB = null !== QB && "paused" !== QB;
                            return (0, JB.jsxs)("button", {
                              type: "button",
                              id: jB.anchor,
                              className: dB()("DocsSoundTile", {
                                Playing: nB
                              }),
                              "data-docs-track": zQ(jB.name, zB),
                              "aria-label": nB ? `Pause ${jB.name}` : `Play ${jB.name}`,
                              onClick: () => {
                                null !== QB ? sQ() : rQ(jB.name, zB)
                              },
                              children: [(0, JB.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, JB.jsx)(yB, {
                                  name: nB ? "pause" : "play"
                                })
                              }), (0, JB.jsx)("code", {
                                className: "DocsSoundName",
                                children: jB.name
                              }), jB.caption && (0, JB.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: jB.caption
                              })]
                            })
                          }

                          function iQ(BB) {
                            let {
                              kind: jB,
                              names: zB,
                              isSongs: nB
                            } = BB;
                            const IB = LQ(),
                              [NB, uB] = GB(),
                              UB = !1 === (null === NB || void 0 === NB ? void 0 : NB.failed) ? NB.text : null,
                              aB = (0, QB.useContext)(kQ),
                              [pB, rB] = (0, QB.useState)(""),
                              sB = pB.trim().toLowerCase(),
                              mB = sB ? zB.filter((BB => BB.name.toLowerCase().includes(sB))) : zB;
                            return (0, JB.jsxs)("div", {
                              className: "DocsGallery",
                              children: [zB.length > gQ && (0, JB.jsx)(Lz, {
                                className: "DocsGalleryFilter",
                                value: pB,
                                placeholder: `Filter ${zB.length} names\u2026`,
                                label: "Filter names",
                                onChange: rB,
                                count: sB ? {
                                  visible: mB.length,
                                  total: zB.length
                                } : null
                              }), (0, JB.jsx)("div", {
                                className: dB()("DocsGalleryGrid", `Kind-${jB}`, {
                                  Songs: nB
                                }),
                                children: mB.map((BB => {
                                  if ("sounds" === jB) return (0, JB.jsx)(EQ, {
                                    entry: BB,
                                    isSong: nB
                                  }, BB.anchor);
                                  if (aB && "particles" === jB && Tz(BB.name)) return (0, JB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: dB()("DocsTile Previewable", {
                                      Copied: UB === BB.name
                                    }),
                                    title: `Play "${BB.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      aB(BB.name), uB(BB.name)
                                    },
                                    children: [(0, JB.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, JB.jsx)(MQ, {
                                        kind: jB,
                                        entry: BB,
                                        assets: IB,
                                        renderedUrl: null
                                      }), (0, JB.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, JB.jsx)(yB, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, JB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: UB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor);
                                  const zB = SQ(jB, BB);
                                  return (0, JB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: dB()("DocsTile", {
                                      Copied: UB === BB.name
                                    }),
                                    title: `Copy "${BB.name}"`,
                                    onClick: () => {
                                      uB(BB.name)
                                    },
                                    children: [(0, JB.jsx)("span", {
                                      className: dB()("DocsTilePreview", {
                                        Rendered: null !== zB
                                      }),
                                      children: (0, JB.jsx)(MQ, {
                                        kind: jB,
                                        entry: BB,
                                        assets: IB,
                                        renderedUrl: zB
                                      })
                                    }), (0, JB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: UB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor)
                                }))
                              })]
                            })
                          }

                          function qQ(BB) {
                            let {
                              kind: jB,
                              content: zB,
                              blocks: QB
                            } = BB;
                            return (0, JB.jsx)(JB.Fragment, {
                              children: Vz(jB, zB, QB).map(((BB, zB) => "block" === BB.kind ? (0, JB.jsx)(rz, {
                                block: BB.block
                              }, zB) : (0, JB.jsx)(iQ, {
                                kind: jB,
                                names: BB.names,
                                isSongs: BB.isSongs
                              }, zB)))
                            })
                          }
                          const fQ = [{
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

                          function oQ(BB) {
                            let {
                              cards: jB = fQ,
                              label: zB = "Start here"
                            } = BB;
                            const nB = (0, QB.useContext)(sj);
                            return (0, JB.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": zB,
                              children: jB.map((BB => {
                                let {
                                  pageId: jB,
                                  countNoun: zB
                                } = BB;
                                const QB = AB(jB);
                                return (0, JB.jsxs)(IB.c, {
                                  to: wB(nB, QB),
                                  className: "DocsLandingCard",
                                  children: [(0, JB.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, JB.jsx)(yB, {
                                      name: QB.icon
                                    })
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: QB.title
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: QB.summary
                                  }), zB && (0, JB.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [PB(QB).sections.length, " ", zB]
                                  })]
                                }, jB)
                              }))
                            })
                          }
                          const HQ = 240;

                          function DQ(BB) {
                            let {
                              faces: jB
                            } = BB;
                            return (0, JB.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, JB.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${jB.top}")`
                                }
                              }), (0, JB.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${jB.left}")`
                                }
                              }), (0, JB.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${jB.right}")`
                                }
                              })]
                            })
                          }

                          function FQ(BB) {
                            let {
                              src: jB
                            } = BB;
                            const [zB, nB] = (0, QB.useState)(!1);
                            return zB ? null : (0, JB.jsx)("img", {
                              src: jB,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${jB}`), nB(!0)
                              }
                            })
                          }

                          function YQ(BB) {
                            let {
                              kind: jB
                            } = BB;
                            const zB = Gz(jB),
                              nB = LQ(),
                              IB = (0, NB.n)(),
                              [uB, UB] = (0, QB.useState)(""),
                              [aB, pB] = (0, QB.useState)(null),
                              [rB, sB] = (0, QB.useState)(HQ),
                              [mB, kB] = (0, QB.useState)(null),
                              GB = (0, QB.useRef)(null),
                              gB = uB.trim().toLowerCase();
                            (0, QB.useEffect)((() => {
                              const BB = (0, EB.s)(IB.hash),
                                QB = zB.entries.find((zB => Fz(jB, zB.name) === BB));
                              if (QB) GB.current = QB.name, UB(QB.name), pB(null), kB(QB.name);
                              else if (null !== GB.current) {
                                const BB = GB.current;
                                GB.current = null, UB((jB => jB === BB ? "" : jB)), kB(null)
                              }
                            }), [zB, jB, IB.hash, IB.key]), (0, QB.useEffect)((() => {
                              var BB;
                              null !== mB && (null === (BB = document.getElementById(Fz(jB, mB))) || void 0 === BB || BB.scrollIntoView({
                                block: "center"
                              }))
                            }), [jB, mB]);
                            const tB = zB.entries.filter((BB => (!gB || BB.name.toLowerCase().includes(gB)) && (!aB || BB.variants.includes(aB))));
                            return (0, JB.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [zB.notes.length > 0 && (0, JB.jsx)("div", {
                                className: "DocsProse",
                                children: zB.notes.map((BB => (0, JB.jsx)("p", {
                                  children: BB
                                }, BB)))
                              }), zB.legend.length > 0 && (0, JB.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, JB.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, JB.jsx)("thead", {
                                    children: (0, JB.jsxs)("tr", {
                                      children: [(0, JB.jsx)("th", {
                                        children: "Code"
                                      }), (0, JB.jsx)("th", {
                                        children: "Variant"
                                      }), (0, JB.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, JB.jsx)("tbody", {
                                    children: zB.legend.map((BB => (0, JB.jsxs)("tr", {
                                      children: [(0, JB.jsx)("td", {
                                        children: (0, JB.jsx)("button", {
                                          type: "button",
                                          className: dB()("DocsVariantChip", {
                                            Active: aB === BB.code
                                          }),
                                          "aria-pressed": aB === BB.code,
                                          title: `Show only ${jB} with ${BB.meaning} variants`,
                                          onClick: () => {
                                            pB(aB === BB.code ? null : BB.code)
                                          },
                                          children: BB.code
                                        })
                                      }), (0, JB.jsx)("td", {
                                        children: BB.meaning
                                      }), (0, JB.jsx)("td", {
                                        children: (0, JB.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: BB.usage
                                        })
                                      })]
                                    }, BB.code)))
                                  })]
                                })
                              }), zB.examples.length > 0 && (0, JB.jsx)(MB, {
                                lang: "text",
                                code: zB.examples.join("\n")
                              }), (0, JB.jsx)(Lz, {
                                className: "DocsFilterBar",
                                value: uB,
                                placeholder: `Search ${zB.entries.length} ${jB}\u2026`,
                                label: `Search ${jB}`,
                                onChange: BB => {
                                  UB(BB), sB(HQ)
                                },
                                count: gB || aB ? {
                                  visible: tB.length,
                                  total: zB.entries.length
                                } : null,
                                children: aB && (0, JB.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    pB(null)
                                  },
                                  children: [aB, " ", (0, JB.jsx)(yB, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, JB.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: tB.slice(0, rB).map((BB => {
                                  const zB = "blocks" === jB ? null === nB || void 0 === nB ? void 0 : nB.getBlockFaces(BB.name) : null,
                                    QB = nB && !zB ? nB.getItemTextureUrl(BB.name) : null;
                                  return (0, JB.jsxs)("div", {
                                    id: Fz(jB, BB.name),
                                    className: dB()("DocsCatalogueTile", {
                                      Linked: BB.name === mB
                                    }),
                                    children: [(0, JB.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [zB && (0, JB.jsx)(DQ, {
                                        faces: zB
                                      }), QB && (0, JB.jsx)(FQ, {
                                        src: QB
                                      })]
                                    }), (0, JB.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: BB.name
                                    }), BB.variants.length > 0 && (0, JB.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: BB.variants.map((BB => (0, JB.jsx)("span", {
                                        children: BB
                                      }, BB)))
                                    }), (0, JB.jsx)(LB, {
                                      text: BB.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, BB.name)
                                }))
                              }), tB.length > rB && (0, JB.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  sB(tB.length)
                                },
                                children: ["Show all ", tB.length]
                              }), 0 === tB.length && (0, JB.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", jB, " match."]
                              })]
                            })
                          }
                          var VQ = zB(4918),
                            hQ = zB(1615);
                          const XQ = .95 * VQ.d;

                          function ZQ(BB) {
                            return /^\s*```/.test(BB)
                          }

                          function AQ(BB, jB) {
                            const zB = [
                              []
                            ];
                            let QB = !1;
                            for (const nB of BB.split("\n")) !QB && jB(nB) && zB.at(-1).length > 0 && zB.push([]), ZQ(nB) && (QB = !QB), zB.at(-1).push(nB);
                            return zB.map((BB => BB.join("\n").trim())).filter(Boolean)
                          }

                          function TQ(BB, jB) {
                            const zB = `${"#".repeat(jB)} `,
                              QB = [];
                            let nB = !1;
                            for (const dB of BB.split("\n")) ZQ(dB) ? nB = !nB : !nB && dB.startsWith(zB) && QB.push(dB.slice(zB.length).trim());
                            return QB
                          }

                          function PQ(BB) {
                            return BB.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class WQ {
                            constructor(BB, jB) {
                              this.origin = jB, this.pages = void 0, this.partPaths = new Map;
                              const zB = BB.map((BB => {
                                const jB = jB => this.resolveLinks(BB, jB).length,
                                  zB = function(BB, jB) {
                                    const zB = BB.map((BB => jB(BB.markdown) + 2)),
                                      QB = zB.reduce(((BB, jB) => BB + jB), 0),
                                      nB = QB / Math.ceil(QB / XQ),
                                      dB = [];
                                    let IB = 0;
                                    return BB.forEach(((BB, jB) => {
                                      const QB = zB[jB];
                                      (0 === dB.length || IB + QB > XQ || IB + QB / 2 > nB) && (dB.push([]), IB = 0), dB.at(-1).push(BB), IB += QB
                                    })), dB
                                  }(function(BB, jB) {
                                    return AQ(BB, (BB => BB.startsWith("## "))).flatMap((BB => {
                                      var zB;
                                      const QB = null !== (zB = TQ(BB, 2)[0]) && void 0 !== zB ? zB : "";
                                      if (jB(BB) <= XQ) return [{
                                        markdown: BB,
                                        section: QB
                                      }];
                                      let nB = !1,
                                        dB = "";
                                      return AQ(BB, (BB => {
                                        const jB = nB && "" !== BB.trim();
                                        return nB = "" === BB.trim(), jB
                                      })).map((BB => {
                                        var jB;
                                        const zB = TQ(BB, 3),
                                          nB = BB.startsWith("### ") ? zB[0] : dB;
                                        return dB = null !== (jB = zB.at(-1)) && void 0 !== jB ? jB : dB, {
                                          markdown: BB,
                                          section: QB || nB
                                        }
                                      }))
                                    }))
                                  }(PQ(BB), jB), jB);
                                return {
                                  page: BB,
                                  groups: zB.length > 1 ? zB : []
                                }
                              }));
                              for (const {
                                  page: QB,
                                  groups: nB
                                }
                                of zB) nB.forEach(((BB, jB) => {
                                const zB = (0, VQ.n)(QB.slug, jB);
                                for (const nB of BB.flatMap((BB => [...TQ(BB.markdown, 2), ...TQ(BB.markdown, 3)]))) {
                                  const BB = `${QB.id}#${(0,EB.t)(nB)}`;
                                  this.partPaths.has(BB) || this.partPaths.set(BB, zB)
                                }
                              }));
                              this.pages = zB.map((BB => {
                                let {
                                  page: jB,
                                  groups: zB
                                } = BB;
                                return {
                                  page: jB,
                                  path: (0, VQ.m)(jB.slug),
                                  markdown: `# ${jB.title}\n\n${this.resolveLinks(jB,PQ(jB))}\n`,
                                  parts: zB.map(((BB, QB) => this.renderPart(jB, BB, QB, zB.length)))
                                }
                              }))
                            }
                            url(BB) {
                              return `${this.origin}${BB}`
                            }
                            getPage(BB) {
                              return this.pages.find((jB => jB.page.id === BB))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((BB => (BB.parts.length > 0 ? BB.parts : [{
                                path: BB.path,
                                label: "",
                                markdown: BB.markdown
                              }]).filter((BB => BB.markdown.length > VQ.d))))
                            }
                            markdownUrl(BB, jB) {
                              const zB = jB && this.partPaths.get(`${BB.id}#${jB}`) || (0, VQ.m)(BB.slug);
                              return this.url(jB ? `${zB}#${jB}` : zB)
                            }
                            resolveLinks(BB, jB) {
                              return jB.replace(/\]\((#[^)]+)\)/g, ((jB, zB) => {
                                var QB;
                                const nB = null !== (QB = eB(zB)) && void 0 !== QB ? QB : this.samePageTarget(BB, zB);
                                return nB ? `](${this.markdownUrl(nB.page,nB.anchor)})` : jB
                              }))
                            }
                            samePageTarget(BB, jB) {
                              const zB = (0, EB.t)(jB.slice(1));
                              return WB(BB, zB) ? {
                                page: BB,
                                anchor: zB
                              } : null
                            }
                            renderPart(BB, jB, zB, QB) {
                              const nB = function(BB) {
                                  const jB = BB.map((BB => BB.section)).filter(Boolean);
                                  if (0 === jB.length) return "";
                                  const zB = jB[0],
                                    QB = jB.at(-1);
                                  return zB === QB ? zB : `${zB} to ${QB}`
                                }(jB),
                                dB = jB.map((BB => BB.markdown)).join("\n\n"),
                                IB = nB ? `It covers ${nB}. ` : "",
                                NB = `Part ${zB+1} of ${QB} of [${BB.title}](${this.url((0,VQ.m)(BB.slug))}). ${IB}[llms.txt](${this.url(VQ.g)}) lists every part.`;
                              return {
                                path: (0, VQ.n)(BB.slug, zB),
                                label: nB,
                                markdown: `# ${BB.title}, part ${zB+1} of ${QB}\n\n${NB}\n\n${this.resolveLinks(BB,dB)}\n`
                              }
                            }
                            llmsTxt(BB) {
                              const jB = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${eQ(VQ.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const zB of ZB) {
                                jB.push("", `## ${zB.title}`, "");
                                for (const BB of zB.pageIds) {
                                  const zB = this.getPage(BB),
                                    {
                                      page: QB,
                                      parts: nB
                                    } = zB,
                                    dB = `About ${eQ(zB.markdown.length)} tokens${nB.length>0?`, in ${nB.length} parts:`:"."}`;
                                  jB.push(`- [${QB.title}](${this.url(zB.path)}): ${QB.summary} ${dB}`), nB.forEach(((BB, zB) => {
                                    jB.push(`  - [Part ${zB+1}${BB.label?`: ${BB.label}`:""}](${this.url(BB.path)})`)
                                  }))
                                }
                              }
                              return jB.push("", "## Optional", "", `- [Every page in one file](${this.url(VQ.f)}): About ${eQ(BB.length)} tokens, for a model with a large context window.`, ""), jB.join("\n")
                            }
                            llmsFullTxt() {
                              return ZB.flatMap((BB => BB.pageIds.map((BB => this.getPage(BB).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const BB = this.llmsFullTxt(),
                                jB = this.llmsTxt(BB),
                                zB = new Map([
                                  [VQ.i, jB],
                                  [VQ.g, jB],
                                  [VQ.f, BB]
                                ]);
                              for (const QB of this.pages) {
                                zB.set(QB.path, QB.markdown);
                                for (const BB of QB.parts) zB.set(BB.path, BB.markdown)
                              }
                              return zB
                            }
                          }

                          function eQ(BB) {
                            return `${Math.max(1,Math.round(BB/4e3))}K`
                          }
                          let lQ = null;

                          function wQ() {
                            return lQ ??= new WQ(XB, hQ.e), lQ
                          }
                          var xQ = zB(4921);
                          const KQ = [xQ.f, xQ.l];

                          function CQ(BB) {
                            return wQ().getPage(BB.id).parts.length > 0 ? `Read ${VQ.h}, then the parts of the Bloxd Code API's ${BB.title} page it lists, so I can ask questions about it.` : `Read ${hQ.e}${(0,VQ.m)(BB.slug)} so I can ask questions about it. ${xQ.h}`
                          }

                          function cQ(BB) {
                            let {
                              page: jB
                            } = BB;
                            const [zB, QB] = GB();
                            return (0, JB.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, JB.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  QB(wQ().getPage(jB.id).markdown)
                                },
                                children: [(0, JB.jsx)(yB, {
                                  name: !1 === (null === zB || void 0 === zB ? void 0 : zB.failed) ? "check" : "copy"
                                }), (0, JB.jsx)("span", {
                                  children: zB ? zB.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), KQ.map((BB => (0, JB.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, xQ.b)(BB, CQ(jB)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, JB.jsx)(yB, {
                                  name: "external-link"
                                }), (0, JB.jsxs)("span", {
                                  children: ["Open in ", BB.name]
                                })]
                              }, BB.name)))]
                            })
                          }

                          function bQ(BB) {
                            return `#${[0,1,2].map((jB=>Math.round(Math.min(255,Math.max(0,BB[jB]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function vQ(BB) {
                            return [parseInt(BB.slice(1, 3), 16), parseInt(BB.slice(3, 5), 16), parseInt(BB.slice(5, 7), 16)]
                          }

                          function RQ(BB) {
                            let {
                              label: jB,
                              min: zB,
                              max: QB,
                              step: nB,
                              low: dB,
                              high: IB,
                              onChange: NB
                            } = BB;
                            return (0, JB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, JB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, JB.jsx)("span", {
                                  children: jB
                                }), (0, JB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: dB === IB ? dB : `${dB}\u2013${IB}`
                                })]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, JB.jsx)("input", {
                                  type: "range",
                                  min: zB,
                                  max: QB,
                                  step: nB,
                                  value: Math.min(QB, dB),
                                  "aria-label": `Minimum ${jB.toLowerCase()}`,
                                  onChange: BB => {
                                    const jB = Number(BB.target.value);
                                    NB(jB, Math.max(jB, IB))
                                  }
                                }), (0, JB.jsx)("input", {
                                  type: "range",
                                  min: zB,
                                  max: QB,
                                  step: nB,
                                  value: Math.min(QB, IB),
                                  "aria-label": `Maximum ${jB.toLowerCase()}`,
                                  onChange: BB => {
                                    const jB = Number(BB.target.value);
                                    NB(Math.min(jB, dB), jB)
                                  }
                                })]
                              })]
                            })
                          }

                          function OQ(BB) {
                            let {
                              label: jB,
                              min: zB,
                              max: QB,
                              step: nB,
                              value: dB,
                              onChange: IB,
                              format: NB = String
                            } = BB;
                            return (0, JB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, JB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, JB.jsx)("span", {
                                  children: jB
                                }), (0, JB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: NB(dB)
                                })]
                              }), (0, JB.jsx)("input", {
                                type: "range",
                                min: zB,
                                max: QB,
                                step: nB,
                                value: Math.min(QB, Math.max(zB, dB)),
                                "aria-label": jB,
                                onChange: BB => {
                                  IB(Number(BB.target.value))
                                }
                              })]
                            })
                          }

                          function Bn(BB) {
                            let {
                              opts: jB,
                              onChange: zB
                            } = BB;
                            const QB = jB.colorGradients;
                            if (!lz(QB)) return (0, JB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, JB.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, JB.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, JB.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: QB.map(((BB, jB) => (0, JB.jsx)("input", {
                                  type: "color",
                                  value: bQ(BB.color),
                                  "aria-label": `Colour ${jB+1}`,
                                  onChange: BB => {
                                    const nB = [...QB];
                                    nB[jB] = {
                                      color: vQ(BB.target.value)
                                    }, zB(nB)
                                  }
                                }, jB)))
                              })]
                            });
                            const nB = (BB, jB) => {
                              const nB = [...QB];
                              nB[BB] = jB, zB(nB)
                            };
                            return (0, JB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, JB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, JB.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, JB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), QB.map(((BB, jB) => {
                                var zB;
                                const QB = null !== (zB = BB.maxColor) && void 0 !== zB ? zB : BB.minColor;
                                return (0, JB.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, JB.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * BB.timeFraction), "%"]
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${bQ(BB.minColor)}, ${bQ(QB)})`
                                    }
                                  }), (0, JB.jsx)("input", {
                                    type: "color",
                                    value: bQ(BB.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: zB => {
                                      nB(jB, {
                                        ...BB,
                                        minColor: [...vQ(zB.target.value), BB.minColor[3]]
                                      })
                                    }
                                  }), (0, JB.jsx)("input", {
                                    type: "color",
                                    value: bQ(QB),
                                    "aria-label": `Maximum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: zB => {
                                      nB(jB, {
                                        ...BB,
                                        maxColor: [...vQ(zB.target.value), QB[3]]
                                      })
                                    }
                                  })]
                                }, jB)
                              }))]
                            })
                          }
                          const jn = [-.5, -.5, -.5],
                            zn = [.5, .5, .5],
                            Qn = [0, 1, 2, 3, 4, 5, 6, 7].map((BB => [1 & BB ? zn[0] : jn[0], 2 & BB ? zn[1] : jn[1], 4 & BB ? zn[2] : jn[2]]));class nn {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(BB, jB, zB, QB) {
                              const nB = Math.round(31 * jB),
                                dB = Math.round(31 * zB),
                                IB = Math.round(31 * QB),
                                NB = `${nB}|${dB}|${IB}`;
                              let uB = this.tints.get(BB);
                              (!uB || uB.size > 2e3) && (uB = new Map, this.tints.set(BB, uB));
                              let UB = uB.get(NB);
                              if (UB) return UB;
                              UB = document.createElement("canvas"), UB.width = BB.naturalWidth || 16, UB.height = BB.naturalHeight || 16;
                              const aB = UB.getContext("2d");
                              return aB ? (aB.imageSmoothingEnabled = !1, aB.drawImage(BB, 0, 0, UB.width, UB.height), aB.globalCompositeOperation = "multiply", aB.fillStyle = `rgb(${nB/31*255}, ${dB/31*255}, ${IB/31*255})`, aB.fillRect(0, 0, UB.width, UB.height), aB.globalCompositeOperation = "destination-in", aB.drawImage(BB, 0, 0, UB.width, UB.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), uB.set(NB, UB), UB
                            }
                          }

                          function dn(BB) {
                            let {
                              opts: jB,
                              textureUrl: zB,
                              burst: nB,
                              paused: dB
                            } = BB;
                            const IB = (0, QB.useRef)(null),
                              NB = (0, QB.useRef)(jB);
                            NB.current = jB;
                            const uB = (0, QB.useRef)(dB);
                            uB.current = dB;
                            const UB = (0, QB.useRef)(null),
                              aB = (0, QB.useRef)(null),
                              pB = (0, QB.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(BB) {
                                let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const zB = [-.5, -.5, -.5],
                                  QB = [.5, .5, .5];
                                let nB = .5;
                                for (let dB = 0; dB < 40; dB++) {
                                  const dB = xz(BB, zB, QB, jB),
                                    IB = Math.max(dB.life / 30, .001);
                                  for (; cz(dB, BB.gravity, IB);) nB = Math.max(nB, Math.hypot(dB.pos[0], dB.pos[1], dB.pos[2]) + dB.size / 2)
                                }
                                return nB
                              }(jB)))), [jB]),
                              rB = (0, QB.useRef)(pB);
                            return rB.current = pB, (0, QB.useEffect)((() => {
                              if (UB.current = null, !zB) return;
                              const BB = new Image;
                              let jB = !1;
                              return BB.onload = () => {
                                jB || (UB.current = BB)
                              }, BB.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${zB}`)
                              }, BB.src = zB, () => {
                                jB = !0
                              }
                            }), [zB]), (0, QB.useEffect)((() => {
                              var BB;
                              null === (BB = aB.current) || void 0 === BB || BB.call(aB)
                            }), [jB, nB]), (0, QB.useEffect)((() => {
                              const BB = IB.current,
                                jB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
                              if (!BB || !jB) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const zB = new nn;
                              let QB = [],
                                nB = 0,
                                dB = -.7,
                                pB = rB.current,
                                sB = performance.now(),
                                JB = 0,
                                mB = !0,
                                yB = null;
                              const kB = () => {
                                const BB = NB.current,
                                  jB = Math.min(400, Math.max(0, Math.ceil(BB.manualEmitCount)));
                                QB = [];
                                for (let zB = 0; zB < jB; zB++) QB.push(xz(BB, jn, zn, Math.random));
                                nB = 0
                              };
                              aB.current = kB, kB();
                              const GB = IB => {
                                JB = requestAnimationFrame(GB);
                                const aB = Math.min(.05, (IB - sB) / 1e3);
                                if (sB = IB, !mB) return;
                                const LB = window.devicePixelRatio || 1,
                                  gB = Math.round(BB.clientWidth * LB),
                                  tB = Math.round(BB.clientHeight * LB);
                                if (0 === gB || 0 === tB) return;
                                BB.width === gB && BB.height === tB || (BB.width = gB, BB.height = tB);
                                const SB = NB.current;
                                null === yB && (dB += .18 * aB), pB += (rB.current - pB) * Math.min(1, 4 * aB);
                                const MB = .6 * aB;
                                QB = QB.filter((BB => cz(BB, SB.gravity, MB))), 0 !== QB.length || uB.current || (nB += aB, nB > .6 && kB());
                                const EB = function(BB, jB, zB, QB) {
                                  const nB = 3.2 * QB,
                                    dB = .44 * Math.min(BB, jB) * nB / QB,
                                    IB = Math.cos(zB),
                                    NB = Math.sin(zB),
                                    uB = Math.cos(.42),
                                    UB = Math.sin(.42);
                                  return (zB, QB, aB) => {
                                    const pB = zB * NB + aB * IB,
                                      rB = nB - (QB * UB + pB * uB);
                                    if (rB < .05) return null;
                                    const sB = dB / rB;
                                    return {
                                      x: BB / 2 + (zB * IB - aB * NB) * sB,
                                      y: jB / 2 - (QB * uB - pB * UB) * sB,
                                      scale: sB,
                                      depth: rB
                                    }
                                  }
                                }(gB, tB, dB, pB);
                                ! function(BB, jB, zB, QB, nB) {
                                  const dB = BB.createLinearGradient(0, 0, 0, zB);
                                  dB.addColorStop(0, "#23262d"), dB.addColorStop(1, "#16181c"), BB.globalCompositeOperation = "source-over", BB.globalAlpha = 1, BB.fillStyle = dB, BB.fillRect(0, 0, jB, zB);
                                  const IB = (jB, zB) => {
                                      const nB = QB(jB[0], jB[1], jB[2]),
                                        dB = QB(zB[0], zB[1], zB[2]);
                                      nB && dB && (BB.beginPath(), BB.moveTo(nB.x, nB.y), BB.lineTo(dB.x, dB.y), BB.stroke())
                                    },
                                    NB = Math.ceil(nB) + 1,
                                    uB = jn[1];
                                  BB.lineWidth = 1, BB.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let UB = -NB; UB <= NB; UB++) IB([UB + .5, uB, .5 - NB], [UB + .5, uB, NB + .5]), IB([.5 - NB, uB, UB + .5], [NB + .5, uB, UB + .5]);
                                  BB.strokeStyle = "rgba(255, 255, 255, 0.28)", BB.setLineDash([4, 4]);
                                  for (const UB of Qn)
                                    for (const BB of Qn) {
                                      const jB = [0, 1, 2].filter((jB => UB[jB] !== BB[jB]));
                                      1 === jB.length && UB[jB[0]] < BB[jB[0]] && IB(UB, BB)
                                    }
                                  BB.setLineDash([])
                                }(jB, gB, tB, EB, pB);
                                const iB = UB.current,
                                  qB = QB.map((BB => ({
                                    particle: BB,
                                    at: EB(BB.pos[0], BB.pos[1], BB.pos[2])
                                  }))).filter((BB => null !== BB.at)).sort(((BB, jB) => jB.at.depth - BB.at.depth));
                                jB.imageSmoothingEnabled = !1;
                                for (const BB of function(BB) {
                                    switch (BB) {
                                      case Az.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Az.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Az.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Az.d.MultiplyAdd:
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
                                  jB.globalCompositeOperation = BB.operation;
                                  for (const {
                                      particle: QB,
                                      at: nB
                                    }
                                    of qB) {
                                    const [dB, IB, NB, uB] = Cz(QB), UB = Math.max(1, QB.size * nB.scale);
                                    jB.globalAlpha = BB.usesAlpha ? Math.min(1, Math.max(0, uB)) : 1, iB ? jB.drawImage(zB.get(iB, dB, IB, NB), nB.x - UB / 2, nB.y - UB / 2, UB, UB) : (jB.fillStyle = `rgb(${255*dB}, ${255*IB}, ${255*NB})`, jB.fillRect(nB.x - UB / 2, nB.y - UB / 2, UB, UB))
                                  }
                                }
                                jB.globalCompositeOperation = "source-over", jB.globalAlpha = 1
                              };
                              JB = requestAnimationFrame(GB);
                              const LB = new IntersectionObserver((BB => {
                                let [jB] = BB;
                                mB = jB.isIntersecting
                              }));
                              LB.observe(BB);
                              const gB = jB => {
                                  yB = jB.clientX, BB.setPointerCapture(jB.pointerId)
                                },
                                tB = BB => {
                                  null !== yB && (dB += .01 * (BB.clientX - yB), yB = BB.clientX)
                                },
                                SB = () => {
                                  yB = null
                                };
                              return BB.addEventListener("pointerdown", gB), BB.addEventListener("pointermove", tB), BB.addEventListener("pointerup", SB), BB.addEventListener("pointercancel", SB), () => {
                                cancelAnimationFrame(JB), LB.disconnect(), aB.current = null, BB.removeEventListener("pointerdown", gB), BB.removeEventListener("pointermove", tB), BB.removeEventListener("pointerup", SB), BB.removeEventListener("pointercancel", SB)
                              }
                            }), []), (0, JB.jsx)("canvas", {
                              ref: IB,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${jB.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const In = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Nn = [{
                              mode: Az.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Az.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Az.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Az.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Az.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            un = (0, QB.forwardRef)((function(BB, jB) {
                              var zB, nB;
                              let {
                                textures: IB
                              } = BB;
                              const NB = LQ(),
                                uB = (0, QB.useRef)(null),
                                [UB, aB] = (0, QB.useState)(Pz),
                                [pB, rB] = (0, QB.useState)("example"),
                                [sB, mB] = (0, QB.useState)(0),
                                [kB, GB] = (0, QB.useState)(!1),
                                gB = BB => {
                                  const jB = "example" === BB ? Pz : Tz(BB);
                                  jB && (aB(jB), rB(BB))
                                };
                              (0, QB.useImperativeHandle)(jB, (() => ({
                                preview: BB => {
                                  var jB;
                                  gB(BB), null === (jB = uB.current) || void 0 === jB || jB.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const tB = BB => {
                                  aB({
                                    ...UB,
                                    ...BB
                                  }), rB(null)
                                },
                                SB = function(BB, jB) {
                                  if (null !== jB) return `${Oz}    presetId: "${jB}",\n${BQ}\n})`;
                                  const zB = BB.velocityGradients.map((BB => `        {\n            timeFraction: ${bz(BB.timeFraction)},\n            factor: ${bz(BB.factor)},\n            factor2: ${bz(BB.factor2)},\n        },`)),
                                    QB = [`    dir1: ${vz(BB.dir1)},`, `    dir2: ${vz(BB.dir2)},`, BQ, `    texture: "${BB.texture}",`, `    minLifeTime: ${bz(BB.minLifeTime)},`, `    maxLifeTime: ${bz(BB.maxLifeTime)},`, `    minEmitPower: ${bz(BB.minEmitPower)},`, `    maxEmitPower: ${bz(BB.maxEmitPower)},`, `    minSize: ${bz(BB.minSize)},`, `    maxSize: ${bz(BB.maxSize)},`, `    manualEmitCount: ${bz(BB.manualEmitCount)},`, `    gravity: ${vz(BB.gravity)},`, `    colorGradients: ${Rz(BB.colorGradients,"    ")},`, `    velocityGradients: ${zB.length>0?`[\n${zB.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${bz(BB.blendMode)},`];
                                  return void 0 !== BB.hideDist && QB.push(`    hideDist: ${bz(BB.hideDist)},`), `${Oz}${QB.join("\n")}\n})`
                                }(UB, null === pB || "example" === pB ? null : pB),
                                EB = IB.includes(UB.texture) ? IB : [...IB, UB.texture];
                              return (0, JB.jsxs)("section", {
                                ref: uB,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, JB.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, JB.jsxs)("div", {
                                    children: [(0, JB.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, JB.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, JB.jsx)(LB, {
                                    text: SB,
                                    label: "Copy code"
                                  })]
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, JB.jsx)("button", {
                                    type: "button",
                                    className: dB()("DocsVariantChip", {
                                      Active: "example" === pB
                                    }),
                                    onClick: () => {
                                      gB("example")
                                    },
                                    children: "Example"
                                  }), In.filter((BB => null !== Tz(BB))).map((BB => (0, JB.jsx)("button", {
                                    type: "button",
                                    className: dB()("DocsVariantChip", {
                                      Active: pB === BB
                                    }),
                                    onClick: () => {
                                      gB(BB)
                                    },
                                    children: BB
                                  }, BB))), (0, JB.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== pB && void 0 !== pB ? pB : "custom",
                                    "aria-label": "Preset",
                                    onChange: BB => {
                                      gB(BB.target.value)
                                    },
                                    children: [(0, JB.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === pB && (0, JB.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Zz.d.map((BB => (0, JB.jsx)("option", {
                                      value: BB,
                                      children: BB
                                    }, BB)))]
                                  })]
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, JB.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, JB.jsx)(dn, {
                                      opts: UB,
                                      textureUrl: null !== (zB = null === NB || void 0 === NB ? void 0 : NB.getParticleTextureUrl(UB.texture)) && void 0 !== zB ? zB : null,
                                      burst: sB,
                                      paused: kB
                                    }), (0, JB.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, JB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          mB(sB + 1)
                                        },
                                        children: [(0, JB.jsx)(yB, {
                                          name: "replay"
                                        }), (0, JB.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, JB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": kB,
                                        onClick: () => {
                                          GB(!kB)
                                        },
                                        children: [(0, JB.jsx)(yB, {
                                          name: kB ? "play" : "pause"
                                        }), (0, JB.jsx)("span", {
                                          children: kB ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, JB.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, JB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, JB.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, JB.jsx)("span", {
                                          children: "Texture"
                                        }), (0, JB.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: UB.texture
                                        })]
                                      }), (0, JB.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: EB.map((BB => {
                                          var jB;
                                          const zB = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.getParticleTextureUrl(BB)) && void 0 !== jB ? jB : null;
                                          return (0, JB.jsx)("button", {
                                            type: "button",
                                            className: dB()("DocsParticleTexture", {
                                              Active: UB.texture === BB
                                            }),
                                            title: BB,
                                            "aria-label": BB,
                                            "aria-pressed": UB.texture === BB,
                                            onClick: () => {
                                              tB({
                                                texture: BB
                                              })
                                            },
                                            children: zB ? (0, JB.jsx)("img", {
                                              src: zB,
                                              alt: ""
                                            }) : (0, JB.jsx)(yB, {
                                              name: "image"
                                            })
                                          }, BB)
                                        }))
                                      })]
                                    }), (0, JB.jsx)(OQ, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: UB.manualEmitCount,
                                      onChange: BB => {
                                        tB({
                                          manualEmitCount: BB
                                        })
                                      }
                                    }), (0, JB.jsx)(RQ, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: UB.minLifeTime,
                                      high: UB.maxLifeTime,
                                      onChange: (BB, jB) => {
                                        tB({
                                          minLifeTime: BB,
                                          maxLifeTime: jB
                                        })
                                      }
                                    }), (0, JB.jsx)(RQ, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: UB.minEmitPower,
                                      high: UB.maxEmitPower,
                                      onChange: (BB, jB) => {
                                        tB({
                                          minEmitPower: BB,
                                          maxEmitPower: jB
                                        })
                                      }
                                    }), (0, JB.jsx)(RQ, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: UB.minSize,
                                      high: UB.maxSize,
                                      onChange: (BB, jB) => {
                                        tB({
                                          minSize: BB,
                                          maxSize: jB
                                        })
                                      }
                                    }), (0, JB.jsx)(OQ, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (nB = UB.gravity[1]) && void 0 !== nB ? nB : 0,
                                      onChange: BB => {
                                        var jB, zB;
                                        tB({
                                          gravity: [null !== (jB = UB.gravity[0]) && void 0 !== jB ? jB : 0, BB, null !== (zB = UB.gravity[2]) && void 0 !== zB ? zB : 0]
                                        })
                                      }
                                    }), (0, JB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, JB.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, JB.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, JB.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: UB.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: BB => {
                                          tB({
                                            blendMode: Number(BB.target.value)
                                          })
                                        },
                                        children: Nn.map((BB => {
                                          let {
                                            mode: jB,
                                            label: zB
                                          } = BB;
                                          return (0, JB.jsx)("option", {
                                            value: jB,
                                            children: zB
                                          }, jB)
                                        }))
                                      })]
                                    }), (0, JB.jsx)(Bn, {
                                      opts: UB,
                                      onChange: BB => {
                                        tB({
                                          colorGradients: BB
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, JB.jsx)(MB, {
                                  code: SB,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Un = zB(4593),
                            an = zB(1952);

                          function pn(BB, jB) {
                            return BB ? Un.c.includes(jB) ? BB.getIngameIconUrl(jB) : BB.getItemIconUrl(jB) : null
                          }

                          function rn(BB) {
                            var jB, zB, QB;
                            let {
                              part: nB,
                              assets: IB
                            } = BB;
                            const NB = pn(IB, nB.icon),
                              uB = null !== (jB = null === (zB = nB.style) || void 0 === zB ? void 0 : zB.fontSize) && void 0 !== jB ? jB : "1.8em",
                              UB = (0, Zj.Kb)(nB.style);
                            return (0, JB.jsxs)("span", {
                              className: dB()("DocsBloxdTextIcon", {
                                Missing: !NB
                              }),
                              style: {
                                width: uB,
                                height: uB,
                                opacity: null === (QB = nB.style) || void 0 === QB ? void 0 : QB.opacity
                              },
                              title: NB ? void 0 : `No Bloxd icon, item or block is called "${nB.icon}"`,
                              children: [NB && UB && (0, JB.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: UB,
                                  maskImage: `url("${NB}")`,
                                  WebkitMaskImage: `url("${NB}")`
                                }
                              }), NB ? (0, JB.jsx)("img", {
                                src: NB,
                                alt: "",
                                className: dB()({
                                  Tinted: UB
                                })
                              }) : (0, JB.jsx)(yB, {
                                name: "image"
                              })]
                            })
                          }

                          function sn(BB) {
                            let {
                              parts: jB,
                              className: zB
                            } = BB;
                            const QB = LQ(),
                              nB = [];
                            let IB = [];
                            const NB = BB => {
                              IB.length > 0 && (nB.push((0, JB.jsx)(an.e, {
                                text: IB
                              }, `run-${BB}`)), IB = [])
                            };
                            return jB.forEach(((BB, jB) => {
                              "icon" !== ej(BB) || Tj(BB.icon) ? IB.push(BB) : (NB(jB), nB.push((0, JB.jsx)(rn, {
                                part: BB,
                                assets: QB
                              }, `icon-${jB}`)))
                            })), NB(jB.length), (0, JB.jsx)("div", {
                              className: dB()("DocsStyledTextPreview", zB),
                              children: nB
                            })
                          }
                          const Jn = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let mn = null;

                          function yn(BB) {
                            if (mn ??= document.createElement("canvas").getContext("2d"), !mn) return "#000000";
                            mn.fillStyle = "#000000", mn.fillStyle = BB;
                            const jB = mn.fillStyle;
                            return jB.startsWith("#") ? jB : "#000000"
                          }

                          function kn(BB) {
                            let {
                              value: jB,
                              label: zB,
                              onChange: QB
                            } = BB;
                            return (0, JB.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, JB.jsx)("input", {
                                type: "color",
                                value: yn(jB),
                                "aria-label": `${zB} picker`,
                                onChange: BB => {
                                  QB(BB.target.value)
                                }
                              }), (0, JB.jsx)("input", {
                                type: "text",
                                value: jB,
                                placeholder: "#ffb914 or gold",
                                "aria-label": zB,
                                spellCheck: !1,
                                onChange: BB => {
                                  QB(BB.target.value)
                                }
                              })]
                            })
                          }

                          function Gn(BB) {
                            let {
                              value: jB,
                              fontAwesomeIcons: zB,
                              onChange: nB
                            } = BB;
                            const IB = LQ(),
                              [NB, uB] = (0, QB.useState)(Tj(jB) ? "fontAwesome" : "bloxd"),
                              [UB, aB] = (0, QB.useState)(""),
                              pB = UB.trim().toLowerCase(),
                              rB = "bloxd" === NB ? Un.c : zB,
                              sB = pB ? rB.filter((BB => BB.toLowerCase().includes(pB))) : rB;
                            return (0, JB.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, JB.jsx)("input", {
                                type: "text",
                                value: jB,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: BB => {
                                  nB(BB.target.value)
                                }
                              }), (0, JB.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, JB.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((BB => (0, JB.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": NB === BB,
                                    className: dB()("DocsVariantChip", {
                                      Active: NB === BB
                                    }),
                                    onClick: () => {
                                      uB(BB)
                                    },
                                    children: "bloxd" === BB ? `Bloxd icons (${Un.c.length})` : `Font Awesome (${zB.length})`
                                  }, BB))), (0, JB.jsx)("input", {
                                    type: "search",
                                    value: UB,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: BB => {
                                      aB(BB.target.value)
                                    }
                                  })
                                ]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [sB.map((BB => {
                                  const zB = "bloxd" === NB ? pn(IB, BB) : null;
                                  return (0, JB.jsx)("button", {
                                    type: "button",
                                    title: BB,
                                    "aria-label": BB,
                                    "aria-pressed": BB === jB,
                                    className: dB()("DocsIconPickerOption", {
                                      Active: BB === jB
                                    }),
                                    onClick: () => {
                                      nB(BB)
                                    },
                                    children: "fontAwesome" === NB ? (0, JB.jsx)(gz.c, {
                                      name: BB
                                    }) : zB ? (0, JB.jsx)("img", {
                                      src: zB,
                                      alt: ""
                                    }) : (0, JB.jsx)(yB, {
                                      name: "image"
                                    })
                                  }, BB)
                                })), 0 === sB.length && (0, JB.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", UB, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Ln(BB) {
                            let {
                              property: jB,
                              value: zB,
                              fontAwesomeIcons: QB,
                              onChange: nB
                            } = BB;
                            const {
                              field: dB,
                              label: IB
                            } = jB, NB = BB => "" !== BB || jB.isRequired ? BB : void 0;
                            switch (dB.kind) {
                              case "text":
                                return dB.multiline ? (0, JB.jsx)("textarea", {
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  rows: 2,
                                  "aria-label": IB,
                                  onChange: BB => {
                                    nB(BB.target.value)
                                  }
                                }) : (0, JB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  "aria-label": IB,
                                  onChange: BB => {
                                    nB(NB(BB.target.value))
                                  }
                                });
                              case "size":
                                return (0, JB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  placeholder: jB.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": IB,
                                  spellCheck: !1,
                                  onChange: BB => {
                                    nB(NB(BB.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, JB.jsx)(kn, {
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  label: IB,
                                  onChange: BB => {
                                    nB(NB(BB))
                                  }
                                });
                              case "colours": {
                                const BB = Array.isArray(zB) ? zB : [],
                                  jB = BB => {
                                    nB(BB.length > 0 ? BB : void 0)
                                  };
                                return (0, JB.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [BB.map(((zB, QB) => (0, JB.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, JB.jsx)(kn, {
                                      value: zB,
                                      label: `${IB} ${QB+1}`,
                                      onChange: zB => {
                                        jB(BB.map(((BB, jB) => jB === QB ? zB : BB)))
                                      }
                                    }), (0, JB.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${QB+1}`,
                                      onClick: () => {
                                        jB(BB.filter(((BB, jB) => jB !== QB)))
                                      },
                                      children: (0, JB.jsx)(yB, {
                                        name: "cross"
                                      })
                                    })]
                                  }, QB))), (0, JB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var zB;
                                      jB([...BB, null !== (zB = BB.at(-1)) && void 0 !== zB ? zB : "#ffffff"])
                                    },
                                    children: [(0, JB.jsx)(yB, {
                                      name: "plus"
                                    }), 0 === BB.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var uB;
                                const BB = "number" === typeof zB ? zB : Number(null !== (uB = jB.defaultText) && void 0 !== uB ? uB : 0);
                                return (0, JB.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, JB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: BB,
                                    "aria-label": IB,
                                    onChange: BB => {
                                      nB(Number(BB.target.value))
                                    }
                                  }), (0, JB.jsx)("output", {
                                    children: BB.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, JB.jsxs)("select", {
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  "aria-label": IB,
                                  onChange: BB => {
                                    nB(NB(BB.target.value))
                                  },
                                  children: [!jB.isRequired && (0, JB.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", jB.defaultText, ")"]
                                  }), dB.options.map((BB => (0, JB.jsx)("option", {
                                    value: BB,
                                    children: BB
                                  }, BB)))]
                                });
                              case "icon":
                                return (0, JB.jsx)(Gn, {
                                  value: String(null !== zB && void 0 !== zB ? zB : ""),
                                  fontAwesomeIcons: QB,
                                  onChange: nB
                                })
                            }
                          }

                          function gn(BB) {
                            let jB;
                            try {
                              jB = JSON.parse(BB)
                            } catch (zB) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${zB.message}`
                              }
                            }
                            return zz(jB) ? {
                              part: jB,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function tn(BB) {
                            let {
                              parts: jB,
                              index: zB,
                              fontAwesomeIcons: nB,
                              onChange: dB,
                              ZD: IB,
                              onClose: NB
                            } = BB;
                            const uB = (0, QB.useContext)(Jj),
                              aB = (0, QB.useRef)(null),
                              pB = jB[zB],
                              rB = ej(pB),
                              [sB, mB] = (0, QB.useState)((() => JSON.stringify(pB, null, 2))),
                              kB = (0, QB.useMemo)((() => "other" === rB ? gn(sB).error : null), [rB, sB]);
                            (0, QB.useEffect)((() => {
                              var BB;
                              null === (BB = aB.current) || void 0 === BB || BB.focus()
                            }), []);
                            const GB = (0, JB.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && NB()
                              },
                              children: (0, JB.jsxs)("div", {
                                ref: aB,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${zB+1}: ${Pj[rB]}`,
                                tabIndex: -1,
                                onKeyDown: BB => {
                                  "Escape" === BB.key ? (BB.stopPropagation(), NB()) : "Tab" === BB.key && aB.current && function(BB, jB) {
                                    const zB = Array.from(BB.querySelectorAll(oj)),
                                      QB = zB[0],
                                      nB = zB.at(-1);
                                    if (!QB || !nB) return;
                                    const dB = document.activeElement;
                                    !jB.shiftKey || dB !== QB && dB !== BB ? jB.shiftKey || dB !== nB || (jB.preventDefault(), QB.focus()) : (jB.preventDefault(), nB.focus())
                                  }(aB.current, BB)
                                },
                                children: [(0, JB.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, JB.jsxs)("div", {
                                    children: [(0, JB.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", zB + 1]
                                    }), (0, JB.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Pj[rB]
                                    })]
                                  }), (0, JB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: NB,
                                    children: (0, JB.jsx)(yB, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, JB.jsx)(sn, {
                                  parts: jB,
                                  className: "DocsTextDialogPreview"
                                }), (0, JB.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === rB ? (0, JB.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, JB.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, JB.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: sB,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: BB => {
                                        mB(BB.target.value);
                                        const jB = gn(BB.target.value);
                                        null !== jB.part && dB(jB.part)
                                      }
                                    }), kB && (0, JB.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: kB
                                    })]
                                  }) : wj[rB].map((BB => {
                                    const jB = Kj(pB, BB.path),
                                      zB = BB.isRequired ? JSON.stringify(cj(pB, BB.path)) === JSON.stringify(pB) : void 0 === jB;
                                    return (0, JB.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, JB.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, JB.jsx)("span", {
                                          children: BB.label
                                        }), (0, JB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: zB,
                                          "aria-label": `Reset ${BB.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            dB(cj(pB, BB.path))
                                          },
                                          children: [(0, JB.jsx)(yB, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, JB.jsx)(Ln, {
                                        property: BB,
                                        value: jB,
                                        fontAwesomeIcons: nB,
                                        onChange: jB => {
                                          dB(Cj(pB, BB.path, jB))
                                        }
                                      }), !BB.isRequired && (0, JB.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", BB.defaultText]
                                      })]
                                    }, BB.path.join("."))
                                  }))
                                }), (0, JB.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, JB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: IB,
                                    children: [(0, JB.jsx)(yB, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, JB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: NB,
                                    children: "Done"
                                  })]
                                }), (0, JB.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Jn.map((BB => (0, JB.jsx)("option", {
                                    value: BB
                                  }, BB)))
                                })]
                              })
                            });
                            return uB ? (0, UB.createPortal)(GB, uB) : GB
                          }
                          const Sn = [{
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
                            Mn = Object.keys(Wj);

                          function En(BB) {
                            let {
                              fontAwesomeIcons: jB
                            } = BB;
                            const [zB, nB] = (0, QB.useState)(Sn[0].parts), [IB, NB] = (0, QB.useState)((() => Oj(Sn[0].parts))), [uB, UB] = (0, QB.useState)(null), [aB, pB] = (0, QB.useState)(!1), [rB, sB] = (0, QB.useState)(null), [mB, kB] = (0, QB.useState)(!1), [GB, LB] = (0, QB.useState)(null), gB = (0, QB.useRef)(null), tB = Oj(zB);
                            (0, QB.useLayoutEffect)((() => {
                              var BB;
                              if (!GB) return;
                              const jB = BB => {
                                  var jB;
                                  return null === (jB = gB.current) || void 0 === jB ? void 0 : jB.querySelector(`[data-focus-key="${BB}"]`)
                                },
                                zB = jB(GB.key);
                              null === (BB = zB && !zB.disabled ? zB : jB(GB.fallback)) || void 0 === BB || BB.focus(), LB(null)
                            }), [GB]);
                            const SB = BB => {
                                nB(BB), NB(Oj(BB)), UB(null)
                              },
                              EB = BB => {
                                SB(zB.filter(((jB, zB) => zB !== BB))), LB({
                                  key: `edit-${Math.min(BB,zB.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              iB = (BB, jB) => {
                                const QB = [...zB],
                                  [nB] = QB.splice(BB, 1);
                                QB.splice(BB + jB, 0, nB), SB(QB);
                                LB({
                                  key: `${jB<0?"up":"down"}-${BB+jB}`,
                                  fallback: `edit-${BB+jB}`
                                })
                              };
                            return (0, JB.jsxs)("section", {
                              ref: gB,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, JB.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, JB.jsxs)("div", {
                                  children: [(0, JB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, JB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, JB.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Sn.map((BB => (0, JB.jsx)("button", {
                                  type: "button",
                                  className: dB()("DocsVariantChip", {
                                    Active: tB === Oj(BB.parts)
                                  }),
                                  onClick: () => {
                                    SB(BB.parts)
                                  },
                                  children: BB.label
                                }, BB.label)))
                              }), (0, JB.jsx)(sn, {
                                parts: zB,
                                className: "DocsTextEditorPreview"
                              }), (0, JB.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, JB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, JB.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, JB.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [zB.map(((BB, jB) => {
                                      const QB = ej(BB);
                                      return (0, JB.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, JB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${jB}`,
                                          "aria-label": `Edit part ${jB+1}, ${Pj[QB]}`,
                                          onClick: () => {
                                            sB(jB)
                                          },
                                          children: [(0, JB.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Pj[QB]
                                          }), (0, JB.jsx)(sn, {
                                            parts: [BB],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== QB && (0, JB.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: bj(BB)
                                          })]
                                        }), (0, JB.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, JB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${jB+1} up`,
                                            "data-focus-key": `up-${jB}`,
                                            disabled: 0 === jB,
                                            onClick: () => {
                                              iB(jB, -1)
                                            },
                                            children: (0, JB.jsx)(yB, {
                                              name: "chevron-up"
                                            })
                                          }), (0, JB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${jB+1} down`,
                                            "data-focus-key": `down-${jB}`,
                                            disabled: jB === zB.length - 1,
                                            onClick: () => {
                                              iB(jB, 1)
                                            },
                                            children: (0, JB.jsx)(yB, {
                                              name: "chevron-down"
                                            })
                                          }), (0, JB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${jB+1}`,
                                            onClick: () => {
                                              EB(jB)
                                            },
                                            children: (0, JB.jsx)(yB, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, jB)
                                    })), 0 === zB.length && (0, JB.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, JB.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: BB => {
                                      "Escape" === BB.key && mB && (BB.stopPropagation(), kB(!1), LB({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, JB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": mB,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        kB(!mB)
                                      },
                                      children: [(0, JB.jsx)(yB, {
                                        name: "plus"
                                      }), "Add a part", (0, JB.jsx)(yB, {
                                        name: mB ? "chevron-up" : "chevron-down"
                                      })]
                                    }), mB && (0, JB.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Mn.map((BB => (0, JB.jsx)("li", {
                                        children: (0, JB.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (BB => {
                                              SB([...zB, Wj[BB]]), kB(!1), sB(zB.length)
                                            })(BB)
                                          },
                                          children: Pj[BB]
                                        })
                                      }, BB)))
                                    })]
                                  })]
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, JB.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, JB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": aB,
                                      onClick: () => {
                                        pB(!aB)
                                      },
                                      children: [(0, JB.jsx)(yB, {
                                        name: aB ? "check" : "pencil"
                                      }), aB ? "Done" : "Edit"]
                                    })]
                                  }), aB ? (0, JB.jsxs)(JB.Fragment, {
                                    children: [(0, JB.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: IB,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: BB => {
                                        NB(BB.target.value);
                                        const jB = Qz(BB.target.value);
                                        UB(jB.error), jB.parts && nB(jB.parts)
                                      }
                                    }), uB && (0, JB.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: uB
                                    })]
                                  }) : (0, JB.jsx)(MB, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${tB})`
                                  })]
                                })]
                              }), null !== rB && rB < zB.length && (0, JB.jsx)(tn, {
                                parts: zB,
                                index: rB,
                                fontAwesomeIcons: jB,
                                onChange: BB => {
                                  ((BB, jB) => {
                                    SB(zB.map(((zB, QB) => QB === BB ? jB : zB)))
                                  })(rB, BB)
                                },
                                ZD: () => {
                                  EB(rB), sB(null)
                                },
                                onClose: () => {
                                  sB(null), LB({
                                    key: `edit-${rB}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var qn = zB(4939),
                            fn = zB(4925),
                            Hn = zB(4932),
                            Dn = zB(4947);
                          const Fn = 40,
                            Yn = 800,
                            Vn = 150,
                            hn = 8e3,
                            Xn = 2e3;

                          function Zn(BB, jB) {
                            return 12 * Math.log2(jB / BB)
                          }

                          function An(BB, jB) {
                            return Math.round(BB * 2 ** (jB / 12) * 10) / 10
                          }

                          function Tn(BB) {
                            return `${BB} ms`
                          }

                          function Pn(BB) {
                            return `${BB} st`
                          }
                          const Wn = [{
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

                          function en(BB) {
                            let {
                              synth: jB,
                              onChange: zB
                            } = BB;
                            const QB = (0, qn.i)(jB);
                            return (0, JB.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, JB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, JB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, JB.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, JB.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, JB.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: qn.e.map((BB => (0, JB.jsx)("button", {
                                      type: "button",
                                      className: dB()("DocsVariantChip", {
                                        Active: jB.waveform === BB
                                      }),
                                      "aria-pressed": jB.waveform === BB,
                                      onClick: () => {
                                        zB({
                                          waveform: BB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  })]
                                }), (0, JB.jsx)(OQ, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Zn(Fn, Yn),
                                  step: .1,
                                  value: Zn(Fn, jB.pitchHz),
                                  format: () => `${jB.pitchHz} Hz`,
                                  onChange: BB => {
                                    zB({
                                      pitchHz: An(Fn, BB)
                                    })
                                  }
                                }), (0, JB.jsx)(OQ, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: jB.syllableMs,
                                  format: Tn,
                                  onChange: BB => {
                                    zB({
                                      syllableMs: BB
                                    })
                                  }
                                }), (0, JB.jsx)(OQ, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: jB.volume,
                                  onChange: BB => {
                                    zB({
                                      volume: BB
                                    })
                                  }
                                })]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, JB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, JB.jsx)(OQ, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: jB.durationMs,
                                  format: Tn,
                                  onChange: BB => {
                                    zB({
                                      durationMs: BB
                                    })
                                  }
                                }), (0, JB.jsx)(OQ, {
                                  label: "Fade in",
                                  min: 0,
                                  max: QB.durationMs,
                                  step: 1,
                                  value: QB.attackMs,
                                  format: Tn,
                                  onChange: BB => {
                                    zB({
                                      attackMs: BB
                                    })
                                  }
                                }), (0, JB.jsx)(OQ, {
                                  label: "Fade out",
                                  min: 0,
                                  max: QB.durationMs - QB.attackMs,
                                  step: 1,
                                  value: QB.releaseMs,
                                  format: Tn,
                                  onChange: BB => {
                                    zB({
                                      releaseMs: BB
                                    })
                                  }
                                }), (0, JB.jsx)(OQ, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: jB.glideSemitones,
                                  format: Pn,
                                  onChange: BB => {
                                    zB({
                                      glideSemitones: BB
                                    })
                                  }
                                }), (0, JB.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, JB.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== jB.lowpassHz,
                                    onChange: BB => {
                                      zB({
                                        lowpassHz: BB.target.checked ? Xn : null
                                      })
                                    }
                                  }), (0, JB.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== jB.lowpassHz && (0, JB.jsx)(OQ, {
                                  label: "Filter",
                                  min: 0,
                                  max: Zn(Vn, hn),
                                  step: .1,
                                  value: Zn(Vn, jB.lowpassHz),
                                  format: () => `${jB.lowpassHz} Hz`,
                                  onChange: BB => {
                                    zB({
                                      lowpassHz: An(Vn, BB)
                                    })
                                  }
                                })]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, JB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Wn.map((BB => {
                                  let {
                                    key: QB,
                                    label: nB,
                                    max: dB
                                  } = BB;
                                  return (0, JB.jsx)(OQ, {
                                    label: nB,
                                    min: 0,
                                    max: dB,
                                    step: .1,
                                    value: jB.intonation[QB],
                                    format: Pn,
                                    onChange: BB => {
                                      zB({
                                        intonation: {
                                          ...jB.intonation,
                                          [QB]: BB
                                        }
                                      })
                                    }
                                  }, QB)
                                }))]
                              })]
                            })
                          }
                          const wn = Object.keys(qn.h),
                            xn = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Kn(BB) {
                            var jB;
                            const zB = JSON.stringify((0, qn.i)(BB));
                            return null !== (jB = wn.find((BB => JSON.stringify((0, qn.i)(qn.h[BB])) === zB))) && void 0 !== jB ? jB : null
                          }

                          function Cn(BB) {
                            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof BB || null === BB) return JSON.stringify(BB);
                            return `{\n${Object.entries(BB).map((BB=>{let[zB,QB]=BB;return`${jB}    ${zB}: ${Cn(QB,`${jB}    `)},`})).join("\n")}\n${jB}}`
                          }

                          function cn(BB, jB, zB) {
                            const QB = Kn(BB),
                              nB = [`    line: ${JSON.stringify(jB)},`];
                            return zB && nB.push(`    speakerName: ${JSON.stringify(zB)},`), nB.push("    voice,"), `const voice = ${QB?JSON.stringify(QB):Cn((0,qn.i)(BB))}\n\napi.setClientOption(playerId, "dialogue", {\n${nB.join("\n")}\n})`
                          }
                          const bn = 400,
                            vn = 90;
                          let Rn = null;

                          function On(BB, jB, zB) {
                            return Rn ??= new AudioContext, Rn.resume(), (0, Dn.c)(Rn, Rn.destination, BB, jB, zB, (() => {}))
                          }

                          function Bd() {
                            const [BB, jB] = (0, QB.useState)(qn.h.regular), [zB, nB] = (0, QB.useState)(xn[0]), [IB, NB] = (0, QB.useState)("Innkeeper"), [uB, UB] = (0, QB.useState)(0), aB = aQ((BB => BB.volume)), pB = (0, QB.useRef)(null), rB = (0, QB.useRef)(0), sB = (0, QB.useRef)(0), mB = () => {
                              var BB;
                              null === (BB = pB.current) || void 0 === BB || BB.call(pB), pB.current = null
                            };
                            (0, QB.useEffect)((() => () => {
                              var BB;
                              null === (BB = pB.current) || void 0 === BB || BB.call(pB), window.clearTimeout(rB.current)
                            }), []);
                            const kB = (0, QB.useMemo)((() => ({
                                line: zB,
                                speakerName: IB || void 0,
                                voice: BB
                              })), [zB, IB, BB]),
                              GB = (0, QB.useRef)(kB);
                            GB.current = kB;
                            const gB = Kn(BB),
                              tB = BB => {
                                window.clearTimeout(rB.current), mB();
                                const {
                                  plan: jB,
                                  synth: zB
                                } = (0, Hn.g)(BB);
                                zB && (pB.current = On(zB, jB.blips, aB)), UB((BB => BB + 1))
                              },
                              SB = cn(BB, zB, IB);
                            return (0, JB.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, JB.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, JB.jsxs)("div", {
                                  children: [(0, JB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, JB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, JB.jsx)(LB, {
                                  text: SB,
                                  label: "Copy code"
                                })]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [wn.map((BB => (0, JB.jsx)("button", {
                                  type: "button",
                                  className: dB()("DocsVariantChip", {
                                    Active: gB === BB
                                  }),
                                  "aria-pressed": gB === BB,
                                  onClick: () => {
                                    (BB => {
                                      const zB = qn.h[BB];
                                      jB(zB), tB({
                                        ...kB,
                                        voice: zB
                                      })
                                    })(BB)
                                  },
                                  children: BB
                                }, BB))), !gB && (0, JB.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, JB.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, JB.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, JB.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, JB.jsx)(fn.e, {
                                      display: kB
                                    }, uB)
                                  }), (0, JB.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: BB => {
                                      BB.preventDefault(), tB(kB)
                                    },
                                    children: [(0, JB.jsx)("input", {
                                      value: zB,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: BB => {
                                        nB(BB.target.value)
                                      }
                                    }), (0, JB.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, JB.jsx)(yB, {
                                        name: "play"
                                      }), (0, JB.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, JB.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: xn.map((BB => (0, JB.jsx)("button", {
                                      type: "button",
                                      className: dB()("DocsVariantChip", {
                                        Active: zB === BB
                                      }),
                                      onClick: () => {
                                        var jB;
                                        nB(jB = BB), tB({
                                          ...kB,
                                          line: jB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  }), (0, JB.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, JB.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, JB.jsx)("input", {
                                      value: IB,
                                      placeholder: "No name",
                                      onChange: BB => {
                                        NB(BB.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, JB.jsx)(en, {
                                  synth: BB,
                                  onChange: zB => {
                                    const QB = {
                                      ...BB,
                                      ...zB
                                    };
                                    jB(QB);
                                    const nB = {
                                        ...kB,
                                        voice: QB
                                      },
                                      dB = performance.now();
                                    if (dB - sB.current >= vn) {
                                      sB.current = dB, mB();
                                      const BB = (0, Hn.g)(nB).plan.blips[0];
                                      BB && (pB.current = On((0, qn.i)(QB), [{
                                        ...BB,
                                        atMs: 0
                                      }], aB))
                                    }
                                    window.clearTimeout(rB.current), rB.current = window.setTimeout((() => {
                                      tB(GB.current)
                                    }), bn)
                                  }
                                })]
                              }), (0, JB.jsx)(MB, {
                                code: SB,
                                lang: "ts"
                              })]
                            })
                          }
                          var jd = zB(4965);
                          const zd = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Qd = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            nd = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Qd}`, "g"), jd.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, jd.m]
                            ];

                          function dd(BB) {
                            return `${BB.pageId}#${BB.anchor}`
                          }
                          let Id, Nd, ud;

                          function Ud(BB) {
                            const jB = (0, EB.i)(BB),
                              zB = new Set;
                            for (const [, , QB] of jB.matchAll(EB.c)) {
                              const BB = QB.startsWith("#") ? eB(QB) : null,
                                jB = BB ? dd({
                                  pageId: BB.page.id,
                                  anchor: BB.anchor
                                }) : null;
                              null !== jB && (Id || (Id = new Set(XB.flatMap((BB => oB(BB.layout) ? PB(BB).sections.map((jB => dd({
                                pageId: BB.id,
                                anchor: jB.heading.anchor
                              }))) : [])))), Id).has(jB) && zB.add(jB)
                            }
                            for (const [, , QB] of jB.matchAll(zd)) {
                              const BB = rj(QB);
                              BB && zB.add(dd(BB))
                            }
                            return zB
                          }

                          function pd(BB, jB) {
                            const zB = new Set,
                              QB = function(BB) {
                                return BB.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(BB);
                            for (const [, nB] of QB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) zB.add(nB);
                            for (const [nB, dB] of nd)
                              for (const [, BB] of(0, jd.h)(QB, nB, dB)) jB.has(BB) && zB.add(BB);
                            return zB
                          }

                          function rd(BB, jB, zB, QB) {
                            const nB = BB.get(jB);
                            nB ? !QB && nB.some((BB => BB.pageId === zB.pageId)) || nB.push(zB) : BB.set(jB, [zB])
                          }
                          const sd = /^[A-Za-z_$][\w$]*$/;

                          function Jd(BB) {
                            return sd.test(BB.name) ? BB.name : "options"
                          }

                          function md(BB, jB) {
                            const zB = BB.params.map(Jd).join(", ");
                            return jB ? `${BB.name} = (${zB}) => {\n\t\n}` : `api.${BB.name}(${zB})`
                          }

                          function yd(BB) {
                            let {
                              method: jB,
                              isCallback: zB
                            } = BB;
                            return (0, JB.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, JB.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [zB ? (0, JB.jsxs)(JB.Fragment, {
                                  children: [(0, JB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: jB.name
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, JB.jsxs)(JB.Fragment, {
                                  children: [(0, JB.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: jB.name
                                  }), (0, JB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), jB.params.map(((BB, zB) => (0, JB.jsxs)(QB.Fragment, {
                                  children: [zB > 0 && (0, JB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, JB.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${jB.name}-${Jd(BB)}`,
                                    children: BB.name
                                  })]
                                }, BB.name))), (0, JB.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: zB ? ") => " : ")"
                                }), zB && !jB.returns && (0, JB.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), jB.returns && jB.returns.type && (0, JB.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!zB && (0, JB.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, JB.jsx)(ij, {
                                  type: jB.returns.type
                                })]
                              })]
                            })
                          }

                          function kd(BB) {
                            let {
                              title: jB,
                              references: zB
                            } = BB;
                            const nB = (0, QB.useContext)(sj);
                            return (0, JB.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, JB.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: jB
                              }), zB.map((BB => (0, JB.jsx)(IB.c, {
                                to: wB(nB, AB(BB.pageId), BB.anchor),
                                children: BB.label
                              }, `${BB.pageId}#${BB.anchor}`)))]
                            })
                          }

                          function Gd(BB) {
                            var jB, zB;
                            let {
                              pageId: QB,
                              anchor: nB
                            } = BB;
                            const dB = dd({
                                pageId: QB,
                                anchor: nB
                              }),
                              IB = null !== (jB = function() {
                                if (!ud) {
                                  ud = new Map;
                                  const QB = new Set(XB.filter((BB => "callbacks" === BB.layout)).flatMap((BB => PB(BB).sections.map((BB => BB.heading.text)))));
                                  for (const nB of XB)
                                    if ("article" === nB.layout || "snippets" === nB.layout)
                                      for (const dB of (0, EB.x)(PB(nB)))
                                        for (const {
                                            code: IB
                                          }
                                          of(0, EB.m)(dB.blocks))
                                          for (const NB of pd(IB, QB)) {
                                            const QB = pj().get(NB);
                                            if (QB) {
                                              var BB, jB, zB;
                                              const IB = {
                                                pageId: nB.id,
                                                anchor: null !== (BB = null === (jB = dB.heading) || void 0 === jB ? void 0 : jB.anchor) && void 0 !== BB ? BB : "",
                                                label: null !== (zB = nB.navTitle) && void 0 !== zB ? zB : nB.title
                                              };
                                              rd(ud, dd(QB), IB, !1)
                                            }
                                          }
                                }
                                return ud
                              }().get(dB)) && void 0 !== jB ? jB : [],
                              NB = null !== (zB = function() {
                                if (!Nd) {
                                  Nd = new Map;
                                  const BB = AB("changelog");
                                  for (const jB of PB(BB).sections) {
                                    const zB = new Set(jB.blocks.flatMap((BB => [...Ud(BB)])));
                                    for (const QB of zB) {
                                      const zB = {
                                        pageId: BB.id,
                                        anchor: jB.heading.anchor,
                                        label: jB.heading.text
                                      };
                                      rd(Nd, QB, zB, !0)
                                    }
                                  }
                                }
                                return Nd
                              }().get(dB)) && void 0 !== zB ? zB : [];
                            return 0 === IB.length && 0 === NB.length ? null : (0, JB.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [IB.length > 0 && (0, JB.jsx)(kd, {
                                title: "Used in",
                                references: IB
                              }), NB.length > 0 && (0, JB.jsx)(kd, {
                                title: "Changelog",
                                references: NB
                              })]
                            })
                          }

                          function Ld(BB) {
                            let {
                              method: jB,
                              pageId: zB,
                              anchor: QB,
                              isCallback: nB
                            } = BB;
                            const dB = nB ? void 0 : Nj().get(jB.name),
                              IB = jB.description.length > 0 || null === dB || void 0 === dB || !dB.description ? jB.description : (0, EB.B)(dB.description);
                            return (0, JB.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, JB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, JB.jsx)(Uz, {
                                  level: 2,
                                  text: jB.name,
                                  anchor: QB,
                                  className: "DocsCardTitle"
                                }), (0, JB.jsx)(LB, {
                                  text: md(jB, nB),
                                  label: nB ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, JB.jsx)(yd, {
                                method: jB,
                                isCallback: nB
                              }), dB && null !== dB.deprecation && (0, JB.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, JB.jsx)("strong", {
                                  children: "Deprecated"
                                }), dB.deprecation && (0, JB.jsxs)(JB.Fragment, {
                                  children: [": ", (0, JB.jsx)(Sj, {
                                    text: (NB = dB.deprecation, (0, jd.u)(NB, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, jd.k)("`\\w"), (BB => {
                                      let [jB] = BB;
                                      return pj().has(jB) ? `\`${jB}\`` : jB
                                    })))
                                  })]
                                })]
                              }), IB.length > 0 && (0, JB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, JB.jsx)(sz, {
                                  blocks: IB
                                })
                              }), jB.params.length > 0 && (0, JB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, JB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, JB.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: jB.params.map((BB => (0, JB.jsxs)("div", {
                                    id: `${jB.name}-${Jd(BB)}`,
                                    className: "DocsParam",
                                    children: [(0, JB.jsxs)("dt", {
                                      children: [(0, JB.jsx)("code", {
                                        className: "DocsParamName",
                                        children: BB.name
                                      }), (0, JB.jsx)(ij, {
                                        type: BB.type
                                      })]
                                    }), BB.description && (0, JB.jsx)("dd", {
                                      children: (0, JB.jsx)(Sj, {
                                        text: BB.description
                                      })
                                    })]
                                  }, BB.name)))
                                })]
                              }), jB.returns && (jB.returns.type || jB.returns.description.length > 0) && (0, JB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, JB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [jB.returns.type && (0, JB.jsx)(ij, {
                                    type: jB.returns.type
                                  }), jB.returns.description.length > 0 && (0, JB.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, JB.jsx)(sz, {
                                      blocks: jB.returns.description
                                    })
                                  })]
                                })]
                              }), (0, JB.jsx)(Gd, {
                                pageId: zB,
                                anchor: QB
                              })]
                            });
                            var NB
                          }

                          function gd(BB) {
                            var jB;
                            return null !== BB.defaultValue && "undefined" !== BB.defaultValue ? BB.defaultValue : null !== (jB = BB.example) && void 0 !== jB ? jB : "value"
                          }

                          function td(BB) {
                            let {
                              setting: jB,
                              pageId: zB,
                              anchor: QB,
                              setterSnippet: nB
                            } = BB;
                            const dB = null === jB.defaultValue ? null : kj(jB.defaultValue);
                            return (0, JB.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, JB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, JB.jsx)(Uz, {
                                  level: 2,
                                  text: jB.name,
                                  anchor: QB,
                                  className: "DocsCardTitle"
                                }), (0, JB.jsx)(LB, {
                                  text: nB(jB.name, gd(jB)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, JB.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, JB.jsxs)("div", {
                                  children: [(0, JB.jsx)("dt", {
                                    children: "Type"
                                  }), (0, JB.jsx)("dd", {
                                    children: (0, JB.jsx)(ij, {
                                      type: jB.type
                                    })
                                  })]
                                }), null !== jB.defaultValue && (0, JB.jsxs)("div", {
                                  children: [(0, JB.jsx)("dt", {
                                    children: "Default"
                                  }), (0, JB.jsx)("dd", {
                                    children: (0, JB.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [dB && (0, JB.jsx)(Gj, {
                                        colour: dB
                                      }), jB.defaultValue]
                                    })
                                  })]
                                }), null !== jB.example && (0, JB.jsxs)("div", {
                                  children: [(0, JB.jsx)("dt", {
                                    children: "Example"
                                  }), (0, JB.jsx)("dd", {
                                    children: (0, JB.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: jB.example
                                    })
                                  })]
                                })]
                              }), jB.description.length > 0 && (0, JB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, JB.jsx)(sz, {
                                  blocks: jB.description
                                })
                              }), (0, JB.jsx)(Gd, {
                                pageId: zB,
                                anchor: QB
                              })]
                            })
                          }

                          function Sd(BB) {
                            let {
                              section: jB
                            } = BB;
                            return (0, JB.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, JB.jsx)(Uz, {
                                level: 2,
                                text: jB.heading.text,
                                anchor: jB.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, JB.jsx)("div", {
                                className: "DocsProse",
                                children: (0, JB.jsx)(sz, {
                                  blocks: jB.blocks
                                })
                              })]
                            })
                          }

                          function Md(BB) {
                            let {
                              section: jB
                            } = BB;
                            return (0, JB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, JB.jsx)(Uz, {
                                level: jB.heading.level,
                                text: jB.heading.text,
                                anchor: jB.heading.anchor
                              }), (0, JB.jsx)(sz, {
                                blocks: jB.blocks
                              })]
                            })
                          }
                          const Ed = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function qd(BB) {
                            let {
                              page: jB,
                              section: zB
                            } = BB;
                            if ("methods" === jB.layout || "callbacks" === jB.layout) return (0, JB.jsx)(Ld, {
                              method: Mz(zB),
                              pageId: jB.id,
                              anchor: zB.heading.anchor,
                              isCallback: "callbacks" === jB.layout
                            });
                            if ("settings" === jB.layout) {
                              const BB = function(BB) {
                                const jB = {
                                  name: BB.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const QB of BB.blocks) {
                                  var zB;
                                  if (Sz(QB)) continue;
                                  const BB = "paragraph" === QB.kind ? QB.text.match(Ez) : null;
                                  if (!BB) {
                                    jB.description.push(QB);
                                    continue
                                  }
                                  const nB = null !== (zB = tz(BB[2])) && void 0 !== zB ? zB : BB[2];
                                  "Type" === BB[1] ? jB.type = nB : "Default" === BB[1] ? jB.defaultValue = nB : "" !== nB && (jB.example = nB)
                                }
                                return jB.type ? jB : null
                              }(zB);
                              if (BB) return (0, JB.jsx)(td, {
                                setting: BB,
                                pageId: jB.id,
                                anchor: zB.heading.anchor,
                                setterSnippet: jB.setterSnippet
                              })
                            }
                            return "snippets" === jB.layout ? (0, JB.jsx)(Sd, {
                              section: zB
                            }) : "changelog" === jB.layout ? (0, JB.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, JB.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, JB.jsx)(Uz, {
                                  level: 2,
                                  text: zB.heading.text,
                                  anchor: zB.heading.anchor
                                })
                              }), (0, JB.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, JB.jsx)(sz, {
                                  blocks: iz(zB.blocks)
                                })
                              })]
                            }) : jB.gallery ? (0, JB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, JB.jsx)(Uz, {
                                level: zB.heading.level,
                                text: zB.heading.text,
                                anchor: zB.heading.anchor
                              }), (0, JB.jsx)(qQ, {
                                kind: jB.gallery,
                                content: PB(jB),
                                blocks: zB.blocks
                              })]
                            }) : (0, JB.jsx)(Md, {
                              section: zB
                            })
                          }

                          function fd(BB) {
                            let {
                              page: jB,
                              onTocChange: zB
                            } = BB;
                            const nB = PB(jB),
                              [dB, IB] = (0, QB.useState)(""),
                              NB = "article" !== jB.layout,
                              uB = yz(jB.gallery) ? jB.gallery : null,
                              UB = null !== uB,
                              aB = dB.trim().toLowerCase(),
                              pB = (0, QB.useRef)(null),
                              rB = (0, QB.useCallback)((BB => {
                                var jB;
                                null === (jB = pB.current) || void 0 === jB || jB.preview(BB)
                              }), []),
                              sB = (0, QB.useMemo)((() => {
                                if (!jB.hasParticlePlayground) return [];
                                const BB = Hz(nB.intro).find((BB => "names" === BB.kind && !BB.names.some((BB => null !== Tz(BB.name)))));
                                return "names" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.names.map((BB => BB.name)) : []
                              }), [jB, nB]),
                              mB = (0, QB.useMemo)((() => {
                                if (!jB.hasTextPlayground) return [];
                                const BB = nB.sections.flatMap((BB => BB.blocks.flatMap((BB => {
                                  var jB;
                                  return (null !== (jB = oz(BB)) && void 0 !== jB ? jB : []).flatMap((BB => Tj(BB.name) ? [BB.name] : []))
                                }))));
                                return [...new Set(BB)]
                              }), [jB, nB]),
                              yB = (0, QB.useMemo)((() => aB ? nB.sections.filter((BB => function(BB, jB) {
                                return !!BB.heading.text.toLowerCase().includes(jB) || BB.blocks.some((BB => (0, EB.i)(BB).toLowerCase().includes(jB)))
                              }(BB, aB))) : nB.sections), [nB, aB]),
                              kB = (0, QB.useMemo)((() => function(BB, jB) {
                                return "article" !== BB.layout ? jB.map((BB => ({
                                  anchor: BB.heading.anchor,
                                  text: BB.heading.text,
                                  level: 2
                                }))) : jB.flatMap((BB => {
                                  const jB = BB.blocks.flatMap((BB => "heading" === BB.kind && 3 === BB.level ? [{
                                    anchor: BB.anchor,
                                    text: BB.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: BB.heading.anchor,
                                    text: BB.heading.text,
                                    level: 2
                                  }, ...jB]
                                }))
                              }(jB, yB)), [jB, yB]);
                            return (0, QB.useEffect)((() => {
                              zB(kB)
                            }), [kB, zB]), (0, JB.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, JB.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, JB.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: nB.title || jB.title
                                }), (0, JB.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: jB.summary
                                }), (0, JB.jsx)(cQ, {
                                  page: jB
                                }), NB && (0, JB.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, JB.jsxs)("span", {
                                    children: [(0, JB.jsx)("strong", {
                                      children: nB.sections.length
                                    }), " ", Ed[jB.layout]]
                                  })
                                })]
                              }), "" === jB.slug && (0, JB.jsx)(oQ, {}), uB && (0, JB.jsx)(YQ, {
                                kind: uB
                              }, uB), jB.hasParticlePlayground && (0, JB.jsx)(un, {
                                ref: pB,
                                textures: sB
                              }), !UB && nB.intro.length > 0 && (0, JB.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: jB.gallery ? (0, JB.jsx)(kQ.Provider, {
                                  value: jB.hasParticlePlayground ? rB : null,
                                  children: (0, JB.jsx)(qQ, {
                                    kind: jB.gallery,
                                    content: nB,
                                    blocks: nB.intro
                                  })
                                }) : (0, JB.jsx)(sz, {
                                  blocks: iz(nB.intro)
                                })
                              }), jB.hasTextPlayground && (0, JB.jsx)(En, {
                                fontAwesomeIcons: mB
                              }), jB.hasVoicePlayground && (0, JB.jsx)(Bd, {}), jB.childPageIds && (0, JB.jsx)(oQ, {
                                cards: jB.childPageIds.map((BB => ({
                                  pageId: BB
                                }))),
                                label: jB.title
                              }), NB && (0, JB.jsx)(Lz, {
                                className: "DocsFilterBar",
                                value: dB,
                                placeholder: `Filter ${nB.sections.length} ${Ed[jB.layout]}\u2026`,
                                label: `Filter ${Ed[jB.layout]}`,
                                onChange: IB,
                                count: aB ? {
                                  visible: yB.length,
                                  total: nB.sections.length
                                } : null
                              }), !UB && (0, JB.jsxs)("div", {
                                className: `DocsSections Layout-${jB.layout}`,
                                children: [yB.map((BB => (0, JB.jsx)(qd, {
                                  page: jB,
                                  section: BB
                                }, BB.heading.anchor))), 0 === yB.length && (0, JB.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ed[jB.layout], " match \u201c", dB, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const od = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Hd(BB) {
                            let {
                              entry: jB,
                              isActive: zB,
                              onNavigate: QB,
                              label: nB,
                              children: IB
                            } = BB;
                            return (0, JB.jsx)("a", {
                              href: `#${jB.anchor}`,
                              "aria-label": nB,
                              className: dB()(`Level${jB.level}`, {
                                Active: zB
                              }),
                              "aria-current": zB ? "location" : void 0,
                              onClick: BB => {
                                BB.preventDefault(), QB(jB.anchor)
                              },
                              children: IB
                            })
                          }

                          function Dd(BB) {
                            let {
                              toc: jB,
                              activeAnchor: zB,
                              onNavigate: nB
                            } = BB;
                            const IB = Math.max(0, jB.findIndex((BB => BB.anchor === zB))),
                              NB = (0, QB.useRef)(null),
                              uB = (0, QB.useRef)(!1);
                            (0, QB.useEffect)((() => {
                              var BB, zB;
                              const QB = null === (BB = NB.current) || void 0 === BB ? void 0 : BB.closest(".DocsToc"),
                                nB = null === (zB = NB.current) || void 0 === zB ? void 0 : zB.querySelector(".DocsTimelineNotch.Active");
                              if (!QB || !nB) return;
                              let dB = 0;
                              if (IB === jB.length - 1) dB = QB.scrollHeight;
                              else if (IB > 0) {
                                const BB = QB.getBoundingClientRect(),
                                  jB = nB.getBoundingClientRect();
                                dB = QB.scrollTop + jB.top + jB.height / 2 - (BB.top + QB.clientHeight / 2)
                              }
                              QB.scrollTo({
                                top: dB,
                                behavior: uB.current ? "smooth" : "auto"
                              }), uB.current = !0
                            }), [IB, jB.length]);
                            const UB = [];
                            return jB.forEach(((BB, jB) => {
                              var zB, QB, nB;
                              const dB = function(BB) {
                                  const jB = BB.trim().match(od);
                                  return jB ? {
                                    day: jB[1],
                                    month: `${jB[2]} ${jB[3]}`
                                  } : null
                                }(BB.text),
                                IB = null !== (zB = null === dB || void 0 === dB ? void 0 : dB.month) && void 0 !== zB ? zB : null;
                              null !== IB && (null === (QB = UB.at(-1)) || void 0 === QB ? void 0 : QB.month) === IB || UB.push({
                                month: IB,
                                entries: []
                              }), UB.at(-1).entries.push({
                                entry: BB,
                                day: null !== (nB = null === dB || void 0 === dB ? void 0 : dB.day) && void 0 !== nB ? nB : null,
                                index: jB
                              })
                            })), (0, JB.jsx)("ol", {
                              ref: NB,
                              className: "DocsTimeline",
                              children: UB.map((BB => {
                                let {
                                  month: jB,
                                  entries: zB
                                } = BB;
                                return (0, JB.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [jB && (0, JB.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: jB
                                  }), (0, JB.jsx)("ol", {
                                    children: zB.map((BB => {
                                      let {
                                        entry: jB,
                                        day: zB,
                                        index: QB
                                      } = BB;
                                      return (0, JB.jsx)("li", {
                                        className: dB()("DocsTimelineNotch", {
                                          Passed: QB < IB,
                                          Active: QB === IB
                                        }),
                                        children: (0, JB.jsx)(Hd, {
                                          entry: jB,
                                          isActive: QB === IB,
                                          onNavigate: nB,
                                          label: jB.text,
                                          children: (0, JB.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== zB && void 0 !== zB ? zB : jB.text
                                          })
                                        })
                                      }, jB.anchor)
                                    }))
                                  })]
                                }, zB[0].entry.anchor)
                              }))
                            })
                          }

                          function Fd(BB) {
                            let {
                              isChangelog: jB,
                              toc: zB,
                              activeAnchor: QB,
                              onNavigate: nB
                            } = BB;
                            return 0 === zB.length ? null : (0, JB.jsxs)(JB.Fragment, {
                              children: [(0, JB.jsx)("div", {
                                className: "DocsTocTitle",
                                children: jB ? "Updates" : "On this page"
                              }), jB ? (0, JB.jsx)(Dd, {
                                toc: zB,
                                activeAnchor: QB,
                                onNavigate: nB
                              }) : (0, JB.jsx)("ul", {
                                children: zB.map((BB => (0, JB.jsx)("li", {
                                  children: (0, JB.jsx)(Hd, {
                                    entry: BB,
                                    isActive: BB.anchor === QB,
                                    onNavigate: nB,
                                    children: BB.text.replace(/`/g, "")
                                  })
                                }, BB.anchor)))
                              })]
                            })
                          }
                          const Yd = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Vd = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            hd = 20,
                            Xd = 10,
                            Zd = 40,
                            Ad = 120;
                          let Td;

                          function Pd(BB) {
                            const jB = BB.gallery;
                            if (!jB) return [];
                            if (yz(jB)) return function(BB) {
                              return Gz(BB).entries.map((BB => BB.name))
                            }(jB).map((zB => ({
                              page: BB,
                              anchor: Fz(jB, zB),
                              title: zB,
                              kind: Vd[jB],
                              text: "",
                              listedUnder: BB.title
                            })));
                            const zB = PB(BB);
                            return (0, EB.x)(zB).flatMap((QB => {
                              const nB = QB.heading ? `${BB.title} \u203a ${QB.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : BB.title;
                              return Vz(jB, zB, QB.blocks).flatMap((zB => "names" !== zB.kind ? [] : zB.names.map((QB => {
                                const dB = zB.isSongs ? "Song" : Vd[jB];
                                return {
                                  page: BB,
                                  anchor: QB.anchor,
                                  title: QB.name,
                                  kind: dB,
                                  text: "",
                                  listedUnder: nB
                                }
                              }))))
                            }))
                          }

                          function Wd(BB, jB, zB) {
                            const QB = BB.title.toLowerCase();
                            let nB = 0;
                            if (QB === jB) nB = 100;
                            else if (QB.startsWith(jB)) nB = 80;
                            else if (QB.includes(jB)) nB = 60;
                            else if (zB.every((BB => QB.includes(BB)))) nB = 45;
                            else {
                              if (!BB.text.toLowerCase().includes(jB)) return 0;
                              nB = 20
                            }
                            return nB - Math.min(QB.length / 10, 9) + ("Page" === BB.kind ? 8 : "Method" === BB.kind ? 3 : 0) - (BB.listedUnder ? hd : 0)
                          }

                          function ed(BB, jB) {
                            const zB = BB.toLowerCase().indexOf(jB),
                              QB = Math.max(0, zB - Ad / 3);
                            return `${QB>0?"\u2026":""}${BB.slice(QB,QB+Ad)}${QB+Ad<BB.length?"\u2026":""}`
                          }

                          function ld(BB) {
                            let {
                              text: jB,
                              query: zB
                            } = BB;
                            const QB = zB ? jB.toLowerCase().indexOf(zB) : -1;
                            return -1 === QB ? (0, JB.jsx)(JB.Fragment, {
                              children: jB
                            }) : (0, JB.jsxs)(JB.Fragment, {
                              children: [jB.slice(0, QB), (0, JB.jsx)("mark", {
                                children: jB.slice(QB, QB + zB.length)
                              }), jB.slice(QB + zB.length)]
                            })
                          }

                          function wd(BB) {
                            let {
                              basePath: jB,
                              onClose: zB
                            } = BB;
                            const nB = (0, NB.q)(),
                              [IB, uB] = (0, QB.useState)(""),
                              [UB, aB] = (0, QB.useState)(0),
                              pB = (0, QB.useRef)(null),
                              rB = (0, QB.useRef)(null),
                              sB = IB.trim().toLowerCase(),
                              mB = (0, QB.useMemo)((() => {
                                const BB = (Td || (Td = XB.flatMap((BB => {
                                  const jB = PB(BB);
                                  return [{
                                    page: BB,
                                    anchor: "",
                                    title: BB.title,
                                    kind: "Page",
                                    text: BB.summary
                                  }, ...jB.sections.flatMap((jB => {
                                    const zB = jB.blocks.filter((BB => "paragraph" === BB.kind)).map(EB.i).join(" ").replace(/[`*]/g, ""),
                                      QB = {
                                        page: BB,
                                        anchor: jB.heading.anchor,
                                        title: jB.heading.text.replace(/`/g, ""),
                                        kind: Yd[BB.layout],
                                        text: zB
                                      },
                                      nB = jB.blocks.flatMap((jB => "article" === BB.layout && "heading" === jB.kind && 3 === jB.level ? [{
                                        page: BB,
                                        anchor: jB.anchor,
                                        title: jB.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: QB.title
                                      }] : []));
                                    return [QB, ...nB]
                                  })), ...Pd(BB)]
                                }))), Td);
                                if (!sB) return BB.filter((BB => "Page" === BB.kind));
                                const jB = sB.split(/\s+/);
                                let zB = 0;
                                return BB.map((BB => ({
                                  entry: BB,
                                  score: Wd(BB, sB, jB)
                                }))).filter((BB => BB.score > 0)).sort(((BB, jB) => jB.score - BB.score)).filter((BB => !BB.entry.listedUnder || (zB++, zB <= Xd))).slice(0, Zd).map((BB => BB.entry))
                              }), [sB]);
                            (0, QB.useEffect)((() => {
                              aB(0)
                            }), [sB]), (0, QB.useEffect)((() => {
                              const BB = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === BB || void 0 === BB || BB.focus()
                              }
                            }), []), (0, QB.useEffect)((() => {
                              var BB, jB;
                              null === (BB = pB.current) || void 0 === BB || null === (jB = BB.querySelector(".Active")) || void 0 === jB || jB.scrollIntoView({
                                block: "nearest"
                              })
                            }), [UB]);
                            const kB = BB => {
                              nB(wB(jB, BB.page, BB.anchor)), zB()
                            };
                            return (0, JB.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && zB()
                              },
                              children: (0, JB.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: BB => {
                                  BB.target !== rB.current && BB.preventDefault()
                                },
                                onKeyDown: BB => {
                                  if ("Escape" === BB.key) zB();
                                  else if ("Tab" === BB.key) {
                                    var jB;
                                    BB.preventDefault(), null === (jB = rB.current) || void 0 === jB || jB.focus()
                                  }
                                },
                                children: [(0, JB.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, JB.jsx)(yB, {
                                    name: "magnifying-glass"
                                  }), (0, JB.jsx)("input", {
                                    ref: rB,
                                    autoFocus: !0,
                                    value: IB,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": mB.length > 0 ? `DocsSearchResult-${UB}` : void 0,
                                    onChange: BB => {
                                      uB(BB.target.value)
                                    },
                                    onKeyDown: BB => {
                                      if ("ArrowDown" === BB.key || "ArrowUp" === BB.key) {
                                        BB.preventDefault();
                                        const jB = "ArrowDown" === BB.key ? 1 : -1;
                                        aB((UB + jB + mB.length) % Math.max(mB.length, 1))
                                      } else "Enter" === BB.key && mB[UB] && kB(mB[UB])
                                    }
                                  }), (0, JB.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, JB.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: pB,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!sB && (0, JB.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), mB.map(((BB, jB) => {
                                    var zB;
                                    return (0, JB.jsxs)("li", {
                                      id: `DocsSearchResult-${jB}`,
                                      role: "option",
                                      "aria-selected": jB === UB,
                                      className: dB()("DocsSearchResult", {
                                        Active: jB === UB
                                      }),
                                      onMouseMove: () => {
                                        aB(jB)
                                      },
                                      onClick: () => {
                                        kB(BB)
                                      },
                                      children: [(0, JB.jsx)(yB, {
                                        name: BB.page.icon
                                      }), (0, JB.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, JB.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, JB.jsx)(ld, {
                                            text: BB.title,
                                            query: sB
                                          })
                                        }), BB.text && (0, JB.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, JB.jsx)(ld, {
                                            text: ed(BB.text, sB),
                                            query: sB
                                          })
                                        })]
                                      }), (0, JB.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === BB.kind ? "Page" : null !== (zB = BB.listedUnder) && void 0 !== zB ? zB : `${BB.kind} \xb7 ${BB.page.title}`
                                      })]
                                    }, `${BB.page.id}#${BB.anchor}`)
                                  })), sB && 0 === mB.length && (0, JB.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", IB, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function xd(BB, jB) {
                            if (jB < 10) return `${BB.toFixed(1)}s`;
                            const zB = Math.floor(BB);
                            return `${Math.floor(zB/60)}:${String(zB%60).padStart(2,"0")}`
                          }

                          function Kd() {
                            const BB = aQ((BB => BB.track)),
                              jB = aQ((BB => BB.volume)),
                              [zB, nB] = (0, QB.useState)(0),
                              IB = (0, QB.useRef)(jQ);
                            if ((0, QB.useEffect)((() => {
                                if (!BB) return;
                                if (nB(JQ()), "playing" !== BB.status) return;
                                let jB = 0;
                                const zB = () => {
                                  nB(JQ()), jB = requestAnimationFrame(zB)
                                };
                                return jB = requestAnimationFrame(zB), () => {
                                  cancelAnimationFrame(jB)
                                }
                              }), [BB]), !BB) return null;
                            const NB = "paused" !== BB.status,
                              uB = Math.min(zB, BB.duration);
                            return (0, JB.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, JB.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, JB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": NB ? `Pause ${BB.name}` : `Play ${BB.name}`,
                                  onClick: sQ,
                                  children: (0, JB.jsx)(yB, {
                                    name: NB ? "pause" : "play"
                                  })
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, JB.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, JB.jsx)("code", {
                                      children: BB.name
                                    }), (0, JB.jsx)("span", {
                                      children: BB.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, JB.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, JB.jsx)("span", {
                                      children: xd(uB, BB.duration)
                                    }), (0, JB.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: BB.duration || 1,
                                      step: .01,
                                      value: uB,
                                      disabled: 0 === BB.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${xd(uB,BB.duration)} of ${xd(BB.duration,BB.duration)}`,
                                      onChange: BB => {
                                        const jB = Number(BB.target.value);
                                        ! function(BB) {
                                          var jB;
                                          IQ = BB, null === (jB = nQ) || void 0 === jB || jB.seek(BB)
                                        }(jB), nB(jB)
                                      }
                                    }), (0, JB.jsx)("span", {
                                      children: BB.duration > 0 ? xd(BB.duration, BB.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, JB.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, JB.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === jB ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === jB ? mQ(IB.current) : (IB.current = jB, mQ(0))
                                    },
                                    children: (0, JB.jsx)(yB, {
                                      name: "volume",
                                      className: dB()({
                                        Muted: 0 === jB
                                      })
                                    })
                                  }), (0, JB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: jB,
                                    "aria-label": "Volume",
                                    onChange: BB => {
                                      mQ(Number(BB.target.value))
                                    }
                                  })]
                                }), (0, JB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var jB;
                                    null === (jB = document.querySelector(`[data-docs-track="${CSS.escape(zQ(BB.name,BB.isSong))}"]`)) || void 0 === jB || jB.focus(), yQ()
                                  },
                                  children: (0, JB.jsx)(yB, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Cd = zB(41);
                          const cd = "docsTheme",
                            bd = window.matchMedia("(prefers-color-scheme: light)");

                          function vd(BB) {
                            let {
                              theme: jB,
                              onChange: zB
                            } = BB;
                            const QB = "dark" === jB ? "light" : "dark";
                            return (0, JB.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${QB} theme`,
                              title: `Switch to ${QB} theme`,
                              onClick: () => {
                                zB(QB)
                              },
                              children: (0, JB.jsx)(yB, {
                                name: "dark" === jB ? "moon" : "sun"
                              })
                            })
                          }
                          const Rd = "https://github.com/Bloxdy/code-api",
                            Od = "https://discord.gg/playbloxd",
                            BI = 180,
                            jI = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function zI(BB) {
                            let {
                              basePath: jB,
                              activePageId: zB,
                              onNavigate: QB
                            } = BB;
                            return (0, JB.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: ZB.map((BB => (0, JB.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, JB.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: BB.title
                                }), BB.pageIds.map((BB => {
                                  var nB;
                                  const NB = AB(BB);
                                  return (0, JB.jsxs)(IB.c, {
                                    to: wB(jB, NB),
                                    className: dB()("DocsNavLink", {
                                      Active: NB.id === zB
                                    }),
                                    "aria-current": NB.id === zB ? "page" : void 0,
                                    onClick: QB,
                                    children: [(0, JB.jsx)(yB, {
                                      name: NB.icon
                                    }), (0, JB.jsx)("span", {
                                      children: null !== (nB = NB.navTitle) && void 0 !== nB ? nB : NB.title
                                    })]
                                  }, NB.id)
                                }))]
                              }, BB.title)))
                            })
                          }

                          function QI(BB) {
                            let {
                              basePath: jB,
                              pageId: zB
                            } = BB;
                            const QB = ZB.flatMap((BB => BB.pageIds)),
                              nB = QB.indexOf(zB),
                              dB = nB > 0 ? AB(QB[nB - 1]) : null,
                              NB = nB < QB.length - 1 ? AB(QB[nB + 1]) : null;
                            return (0, JB.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [dB ? (0, JB.jsxs)(IB.c, {
                                className: "DocsPagerLink Previous",
                                to: wB(jB, dB),
                                children: [(0, JB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, JB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: dB.title
                                })]
                              }) : (0, JB.jsx)("span", {}), NB && (0, JB.jsxs)(IB.c, {
                                className: "DocsPagerLink Next",
                                to: wB(jB, NB),
                                children: [(0, JB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, JB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: NB.title
                                })]
                              })]
                            })
                          }

                          function nI(BB) {
                            let {
                              basePath: jB,
                              embedded: zB = !1
                            } = BB;
                            const {
                              pageSlug: nB = ""
                            } = (0, NB.w)(), UB = (0, NB.n)(), aB = (0, NB.q)(), pB = (rB = nB, XB.find((BB => BB.slug === rB)));
                            var rB;
                            const [sB, mB] = function() {
                              const [BB, jB] = (0, QB.useState)((() => {
                                const BB = Cd.j.getItem(cd);
                                return "dark" === BB || "light" === BB ? BB : null
                              })), [zB, nB] = (0, QB.useState)(bd.matches ? "light" : "dark");
                              return (0, QB.useEffect)((() => {
                                const BB = () => {
                                  nB(bd.matches ? "light" : "dark")
                                };
                                return bd.addEventListener("change", BB), () => {
                                  bd.removeEventListener("change", BB)
                                }
                              }), []), [null !== BB && void 0 !== BB ? BB : zB, BB => {
                                Cd.j.setItem(cd, BB), jB(BB)
                              }]
                            }(), [kB, GB] = (0, QB.useState)(null), [LB, gB] = (0, QB.useState)(!1), [tB, SB] = (0, QB.useState)(!1), [MB, iB] = (0, QB.useState)([]), qB = function(BB, jB) {
                              const [zB, nB] = (0, QB.useState)("");
                              return (0, QB.useEffect)((() => {
                                if (!jB) return;
                                let zB = 0;
                                const QB = () => {
                                    var QB, dB;
                                    zB = 0;
                                    const IB = jB.getBoundingClientRect().top + BI;
                                    let NB = null !== (QB = null === (dB = BB[0]) || void 0 === dB ? void 0 : dB.anchor) && void 0 !== QB ? QB : "";
                                    for (const jB of BB) {
                                      const BB = document.getElementById(jB.anchor);
                                      BB && BB.getBoundingClientRect().top <= IB && (NB = jB.anchor)
                                    }
                                    jB.scrollTop + jB.clientHeight >= jB.scrollHeight - 2 && jB.scrollTop > 0 && BB.length > 0 && (NB = BB[BB.length - 1].anchor), nB(NB)
                                  },
                                  dB = () => {
                                    zB || (zB = requestAnimationFrame(QB))
                                  };
                                return QB(), jB.addEventListener("scroll", dB, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(zB), jB.removeEventListener("scroll", dB)
                                }
                              }), [BB, jB]), zB
                            }(MB, kB), fB = "" === nB && UB.hash ? function(BB) {
                              const jB = (0, EB.s)(BB);
                              if (WB(AB("welcome"), jB)) return null;
                              const zB = Object.hasOwn(lB, jB) ? lB[jB] : null;
                              if (zB) return {
                                page: AB(zB.pageId),
                                anchor: zB.anchor
                              };
                              const QB = AB("readme");
                              return WB(QB, jB) ? {
                                page: QB,
                                anchor: jB
                              } : eB(`#${jB}`)
                            }(UB.hash) : null;
                            (0, QB.useEffect)((() => (uB.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              uB.c.set({
                                musicOnFromPage: !0
                              }), yQ()
                            })), []), (0, QB.useEffect)((() => {
                              const BB = BB => {
                                const jB = BB.target;
                                if (jB.closest(".DocsTextDialog")) return;
                                const zB = jB.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(jB.tagName);
                                "k" === BB.key && (BB.metaKey || BB.ctrlKey) || "/" === BB.key && !zB ? (BB.preventDefault(), SB(!0)) : "Escape" === BB.key && gB(!1)
                              };
                              return window.addEventListener("keydown", BB), () => {
                                window.removeEventListener("keydown", BB)
                              }
                            }), []);
                            const oB = (0, QB.useRef)(null);
                            (0, QB.useLayoutEffect)((() => {
                              var BB, jB;
                              if (!kB) return;
                              const zB = oB.current === UB.pathname;
                              oB.current = UB.pathname;
                              const QB = (0, EB.s)(UB.hash),
                                nB = QB ? document.getElementById(QB) : null;
                              if (null === (BB = kB.querySelector(".DocsTargeted")) || void 0 === BB || BB.classList.remove("DocsTargeted"), null === nB || void 0 === nB || null === (jB = nB.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === jB || jB.classList.add("DocsTargeted"), nB) {
                                var dB;
                                const BB = nB.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (dB = nB.closest(".DocsChangelogEntry")) && void 0 !== dB ? dB : nB).scrollIntoView({
                                  block: BB ? "center" : "start",
                                  behavior: zB ? "smooth" : "auto"
                                })
                              } else zB || kB.scrollTo({
                                top: 0
                              })
                            }), [kB, UB.pathname, UB.hash, UB.key]);
                            const HB = (0, QB.useCallback)((() => {
                                gB(!1)
                              }), []),
                              DB = (0, QB.useCallback)((BB => {
                                aB({
                                  hash: BB
                                })
                              }), [aB]);
                            if (fB) return (0, JB.jsx)(NB.b, {
                              replace: !0,
                              to: wB(jB, fB.page, fB.anchor)
                            });
                            if (!pB) return (0, JB.jsx)(NB.b, {
                              replace: !0,
                              to: jB
                            });
                            const FB = zB ? "div" : "main";
                            return (0, JB.jsx)(sj.Provider, {
                              value: jB,
                              children: (0, JB.jsx)(Jj.Provider, {
                                value: kB,
                                children: (0, JB.jsxs)("div", {
                                  ref: GB,
                                  className: dB()("DocsSite", {
                                    Embedded: zB,
                                    NavOpen: LB
                                  }),
                                  "data-theme": sB,
                                  children: [(0, JB.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, JB.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": LB ? "Close menu" : "Open menu",
                                      "aria-expanded": LB,
                                      onClick: () => {
                                        gB(!LB)
                                      },
                                      children: (0, JB.jsx)(yB, {
                                        name: LB ? "cross" : "menu"
                                      })
                                    }), (0, JB.jsxs)(IB.c, {
                                      to: jB,
                                      className: "DocsBrand",
                                      children: [(0, JB.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, JB.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, JB.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, JB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        SB(!0)
                                      },
                                      children: [(0, JB.jsx)(yB, {
                                        name: "magnifying-glass"
                                      }), (0, JB.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, JB.jsxs)("kbd", {
                                        children: [jI ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, JB.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, JB.jsxs)("a", {
                                        href: Od,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, JB.jsx)(yB, {
                                          name: "discord"
                                        }), (0, JB.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, JB.jsxs)("a", {
                                        href: Rd,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, JB.jsx)(yB, {
                                          name: "external-link"
                                        }), (0, JB.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !zB && (0, JB.jsxs)(IB.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, JB.jsx)(yB, {
                                          name: "play"
                                        }), (0, JB.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, JB.jsx)(vd, {
                                        theme: sB,
                                        onChange: mB
                                      })]
                                    })]
                                  }), (0, JB.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, JB.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, JB.jsx)(zI, {
                                        basePath: jB,
                                        activePageId: pB.id,
                                        onNavigate: HB
                                      })
                                    }), (0, JB.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: HB
                                    }), (0, JB.jsxs)(FB, {
                                      className: "DocsMain",
                                      children: [(0, JB.jsx)(fd, {
                                        page: pB,
                                        onTocChange: iB
                                      }, pB.id), (0, JB.jsx)(QI, {
                                        basePath: jB,
                                        pageId: pB.id
                                      })]
                                    }), (0, JB.jsx)("aside", {
                                      className: dB()("DocsToc", {
                                        Timeline: "changelog" === pB.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, JB.jsx)(Fd, {
                                        isChangelog: "changelog" === pB.layout,
                                        toc: MB,
                                        activeAnchor: qB,
                                        onNavigate: DB
                                      })
                                    })]
                                  }), (0, JB.jsx)(Kd, {}), tB && (0, JB.jsx)(wd, {
                                    basePath: jB,
                                    onClose: () => {
                                      SB(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4824: (BB, jB, zB) => {
                          zB.d(jB, {
                            B: () => rB,
                            c: () => QB,
                            f: () => IB,
                            i: () => yB,
                            m: () => mB,
                            q: () => NB,
                            s: () => nB,
                            t: () => dB,
                            x: () => JB,
                            y: () => sB
                          });
                          const QB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function nB(BB) {
                            try {
                              return decodeURIComponent(BB.slice(1))
                            } catch {
                              return BB.slice(1)
                            }
                          }

                          function dB(BB) {
                            return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const IB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${QB.source}`, "g");

                          function NB(BB, jB) {
                            return 2 === BB.length ? jB.replace(/^ (.*) $/, "$1") : jB
                          }

                          function uB(BB) {
                            return "" === BB.trim()
                          }

                          function UB(BB) {
                            const jB = [];
                            for (const zB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) jB.length > 0 && jB[jB.length - 1].endsWith("\\") ? jB[jB.length - 1] += `|${zB}` : jB.push(zB);
                            return jB.map((BB => BB.trim().replaceAll("\\|", "|")))
                          }
                          const aB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function pB(BB) {
                            const jB = [],
                              zB = [{
                                indent: -1,
                                items: jB
                              }];
                            let QB = null;
                            for (const nB of BB) {
                              const BB = nB.match(aB);
                              if (!BB) {
                                QB && (QB.text += ` ${nB.trim()}`);
                                continue
                              }
                              const jB = BB[1].replace(/\t/g, "  ").length;
                              for (; jB <= zB[zB.length - 1].indent;) zB.pop();
                              QB = {
                                text: BB[3].trim(),
                                children: []
                              }, zB[zB.length - 1].items.push(QB), zB.push({
                                indent: jB,
                                items: QB.children
                              })
                            }
                            return jB
                          }

                          function rB(BB) {
                            const jB = BB.replace(/\r\n/g, "\n").split("\n"),
                              zB = [];
                            let QB = 0;
                            for (; QB < jB.length;) {
                              const BB = jB[QB];
                              if (uB(BB)) {
                                QB++;
                                continue
                              }
                              const nB = BB.match(/^\s*```\s*(\w*)\s*$/);
                              if (nB) {
                                const BB = [];
                                for (QB++; QB < jB.length && !/^\s*```\s*$/.test(jB[QB]);) BB.push(jB[QB]), QB++;
                                QB++, zB.push({
                                  kind: "code",
                                  lang: nB[1] || "text",
                                  code: BB.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const IB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (IB) {
                                const BB = IB[2].trim();
                                zB.push({
                                  kind: "heading",
                                  level: IB[1].length,
                                  text: BB,
                                  anchor: dB(BB)
                                }), QB++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
                                zB.push({
                                  kind: "rule"
                                }), QB++;
                                continue
                              }
                              if (BB.trim().startsWith("|") && QB + 1 < jB.length && /^\s*\|[\s:|-]+\|\s*$/.test(jB[QB + 1])) {
                                const nB = UB(BB),
                                  dB = [];
                                for (QB += 2; QB < jB.length && jB[QB].trim().startsWith("|");) dB.push(UB(jB[QB])), QB++;
                                zB.push({
                                  kind: "table",
                                  header: nB,
                                  rows: dB
                                });
                                continue
                              }
                              if (BB.startsWith(">")) {
                                const BB = [];
                                for (; QB < jB.length && jB[QB].startsWith(">");) BB.push(jB[QB].replace(/^>\s?/, "")), QB++;
                                zB.push({
                                  kind: "quote",
                                  blocks: rB(BB.join("\n"))
                                });
                                continue
                              }
                              if (aB.test(BB)) {
                                const nB = [],
                                  dB = /^\s*\d+\./.test(BB);
                                for (; QB < jB.length && !uB(jB[QB]) && (aB.test(jB[QB]) || /^\s+\S/.test(jB[QB]));) nB.push(jB[QB]), QB++;
                                zB.push({
                                  kind: "list",
                                  ordered: dB,
                                  items: pB(nB)
                                });
                                continue
                              }
                              const NB = [];
                              for (; QB < jB.length && !uB(jB[QB]) && !/^\s*```/.test(jB[QB]) && !/^#{1,6}\s/.test(jB[QB]) && !jB[QB].startsWith(">") && !aB.test(jB[QB]) && (!jB[QB].trim().startsWith("|") || 0 !== NB.length);) NB.push(jB[QB].trim()), QB++;
                              0 === NB.length && (NB.push(jB[QB].trim()), QB++), zB.push({
                                kind: "paragraph",
                                text: NB.join(" ")
                              })
                            }
                            return zB
                          }

                          function sB(BB) {
                            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const zB = rB(BB);
                            let QB = "";
                            const nB = [],
                              dB = [],
                              IB = new Map;
                            for (const UB of zB) {
                              if ("heading" === UB.kind) {
                                var NB;
                                const BB = (null !== (NB = IB.get(UB.anchor)) && void 0 !== NB ? NB : 0) + 1;
                                IB.set(UB.anchor, BB), BB > 1 && (UB.anchor = `${UB.anchor}-${BB}`)
                              }
                              if ("heading" === UB.kind && 1 === UB.level && !QB) {
                                QB = UB.text;
                                continue
                              }
                              if ("heading" === UB.kind && UB.level <= jB) {
                                dB.push({
                                  heading: UB,
                                  blocks: []
                                });
                                continue
                              }
                              const BB = dB.at(-1);
                              BB ? BB.blocks.push(UB) : nB.push(UB)
                            }
                            const uB = BB => {
                              for (;
                                "rule" === (null === (jB = BB.at(-1)) || void 0 === jB ? void 0 : jB.kind);) {
                                var jB;
                                BB.pop()
                              }
                            };
                            uB(nB);
                            for (const UB of dB) uB(UB.blocks);
                            return {
                              title: QB,
                              intro: nB,
                              sections: dB
                            }
                          }

                          function JB(BB) {
                            return [{
                              heading: null,
                              blocks: BB.intro
                            }, ...BB.sections.map((BB => ({
                              heading: BB.heading,
                              blocks: BB.blocks
                            })))]
                          }

                          function mB(BB) {
                            return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? mB(BB.blocks) : []))
                          }

                          function yB(BB) {
                            switch (BB.kind) {
                              case "heading":
                              case "paragraph":
                                return BB.text;
                              case "code":
                                return BB.code;
                              case "table":
                                return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
                              case "list": {
                                const jB = BB => BB.map((BB => `${BB.text} ${jB(BB.children)}`)).join(" ");
                                return jB(BB.items)
                              }
                              case "quote":
                                return BB.blocks.map(yB).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4928: (BB, jB, zB) => {
                          zB.d(jB, {
                            e: () => NB
                          });
                          var QB = zB(62),
                            nB = zB(363),
                            dB = zB(1971),
                            IB = zB(1148);

                          function NB(BB) {
                            let {
                              text: jB
                            } = BB;
                            const zB = [];
                            let NB = "";
                            return (0, nB.Rb)(jB).forEach(((BB, jB) => {
                              if ("string" === typeof BB || !(0, dB.d)(BB.icon)) return void(NB += "string" === typeof BB ? BB : BB.icon);
                              const nB = Math.max(0, NB.trimEnd().search(/\S{1,12}$/));
                              zB.push((0, IB.jsxs)(QB.Fragment, {
                                children: [NB.slice(0, nB), (0, IB.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [NB.slice(nB), (0, IB.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": BB.icon,
                                    children: (0, IB.jsx)(dB.c, {
                                      itemName: BB.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, jB)), NB = ""
                            })), zB.push(NB), (0, IB.jsx)(IB.Fragment, {
                              children: zB
                            })
                          }
                        }, 4855: (BB, jB, zB) => {
                          zB.d(jB, {
                            h: () => GB,
                            d: () => kB
                          });
                          var QB = zB(62),
                            nB = zB(1471),
                            dB = zB(1952),
                            IB = zB(4862),
                            NB = zB(1148);
                          const uB = (0, QB.memo)((function(BB) {
                            let {
                              initialParameters: jB
                            } = BB;
                            const zB = (0, QB.useRef)(null),
                              nB = (0, QB.useRef)(null),
                              uB = (0, QB.useRef)(0),
                              UB = (0, QB.useRef)(null),
                              aB = jB.description,
                              pB = jB.Qj,
                              {
                                scale: rB,
                                rotation: sB
                              } = null !== jB && void 0 !== jB ? jB : {},
                              JB = (0, IB.f)();
                            return (0, QB.useEffect)((() => {
                              const BB = JB.onFrame((() => {
                                const BB = JB.getState();
                                if (!BB.isActive || !zB.current || !nB.current) return;
                                const jB = BB.state;
                                if (zB.current.value = jB.progress, jB.clickCount > uB.current) {
                                  uB.current = jB.clickCount;
                                  const BB = nB.current;
                                  BB.classList.add("pulse"), UB.current = setTimeout((() => {
                                    BB.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(UB.current), BB()
                              }
                            }), [JB]), (0, NB.jsx)(NB.Fragment, {
                              children: (0, NB.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== rB && {
                                    "--scale": rB
                                  },
                                  ...null !== sB && {
                                    "--rotation": `${sB}deg`
                                  }
                                },
                                children: [(0, NB.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: zB
                                }), (0, NB.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: nB,
                                  children: (0, NB.jsx)(dB.e, {
                                    text: [{
                                      icon: pB
                                    }]
                                  })
                                }), (0, NB.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, NB.jsx)(dB.e, {
                                    text: aB
                                  })
                                })]
                              })
                            })
                          }));
                          var UB = zB(1091),
                            aB = zB.n(UB);
                          const pB = 2 * Math.PI * 90,
                            rB = (0, QB.memo)((function(BB) {
                              let {
                                initialParameters: jB
                              } = BB;
                              const zB = (0, QB.useRef)(null),
                                nB = (0, QB.useRef)(null),
                                uB = (0, QB.useRef)(null),
                                UB = jB.label,
                                rB = jB.icon,
                                sB = jB.Nj,
                                {
                                  scale: JB,
                                  rotation: mB,
                                  uj: yB
                                } = null !== jB && void 0 !== jB ? jB : {},
                                kB = (0, IB.f)();
                              return (0, QB.useEffect)((() => {
                                const BB = kB.onFrame((() => {
                                  var BB, jB;
                                  const QB = kB.getState();
                                  if (!QB.isActive || !nB.current) return;
                                  const dB = QB.state,
                                    IB = null !== (BB = dB.timeRemaining) && void 0 !== BB ? BB : 0,
                                    NB = null !== (jB = dB.Ij) && void 0 !== jB ? jB : 1,
                                    UB = pB * (1 - IB / NB);
                                  nB.current.style.strokeDashoffset = `${UB}`, zB.current && (zB.current.style.opacity = IB > 0 ? "1" : "0"), uB.current && sB && (uB.current.textContent = `${(IB/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [kB, sB]), (0, NB.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: zB,
                                style: {
                                  ...null !== JB && {
                                    "--scale": JB
                                  },
                                  ...null !== mB && {
                                    "--rotation": `${mB}deg`
                                  }
                                },
                                children: [(0, NB.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, NB.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, NB.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, NB.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: pB,
                                      ref: nB
                                    })]
                                  }), (0, NB.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, NB.jsx)(dB.e, {
                                      text: [{
                                        icon: rB
                                      }],
                                      className: aB()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: yB
                                      })
                                    })
                                  })]
                                }), (0, NB.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, NB.jsx)(dB.e, {
                                    text: UB,
                                    className: "QTETimedClickLabelText"
                                  }), sB && (0, NB.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: uB
                                  })]
                                })]
                              })
                            })),
                            sB = (0, QB.memo)((function(BB) {
                              let {
                                initialParameters: jB
                              } = BB;
                              const zB = (0, QB.useRef)(null),
                                nB = (0, QB.useRef)(null),
                                uB = (0, QB.useRef)(null),
                                UB = (0, QB.useRef)(!1),
                                aB = jB.description,
                                pB = null === jB || void 0 === jB ? void 0 : jB.icon,
                                rB = (0, IB.f)();
                              return (0, QB.useEffect)((() => {
                                const BB = rB.onFrame((() => {
                                  const BB = rB.getState();
                                  if (!BB.isActive) return;
                                  const jB = BB.state;
                                  if (zB.current) {
                                    const BB = 100 * (jB.catchZonePosition - jB.aj / 2);
                                    zB.current.style.left = `${BB}%`, zB.current.style.width = 100 * jB.aj + "%", jB.isCatching !== UB.current && (UB.current = jB.isCatching, jB.isCatching ? zB.current.classList.add("catching") : zB.current.classList.remove("catching"))
                                  }
                                  nB.current && (nB.current.style.left = 100 * jB.moverPosition + "%"), uB.current && (uB.current.value = jB.progress)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [rB]), (0, NB.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, NB.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, NB.jsx)(dB.e, {
                                    text: aB
                                  })
                                }), (0, NB.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: uB
                                }), (0, NB.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, NB.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: zB
                                  }), (0, NB.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: nB,
                                    children: (0, NB.jsx)("span", {
                                      children: pB && (0, NB.jsx)(dB.e, {
                                        text: [{
                                          icon: pB,
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
                          var JB = zB(658);
                          const mB = (0, QB.memo)((function(BB) {
                              let {
                                initialParameters: jB
                              } = BB;
                              const zB = (0, QB.useRef)(null),
                                nB = jB.label,
                                uB = jB.kj,
                                {
                                  icon: UB,
                                  scale: aB,
                                  rotation: pB
                                } = null !== jB && void 0 !== jB ? jB : {},
                                rB = 100 * (.5 - uB / 2),
                                sB = 100 * uB,
                                mB = (0, IB.f)();
                              return (0, QB.useEffect)((() => {
                                const BB = mB.onFrame((() => {
                                  const BB = mB.getState();
                                  if (!BB.isActive || !zB.current) return;
                                  const jB = BB.state;
                                  zB.current.style.left = 100 * jB.markerPosition + "%"
                                }));
                                return () => {
                                  BB()
                                }
                              }), [mB]), (0, NB.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, JB.I)(aB) && {
                                    "--scale": aB
                                  },
                                  ...!(0, JB.I)(pB) && {
                                    "--rotation": `${pB}deg`
                                  }
                                },
                                children: [UB && (0, NB.jsx)(dB.e, {
                                  text: [{
                                    icon: UB
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, NB.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, NB.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${rB}%`,
                                      width: `${sB}%`
                                    }
                                  }), (0, NB.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: zB
                                  })]
                                }), (0, NB.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, NB.jsx)(dB.e, {
                                    text: nB
                                  })
                                })]
                              })
                            })),
                            yB = (0, QB.memo)((function(BB) {
                              let {
                                initialParameters: jB
                              } = BB;
                              const zB = (0, QB.useRef)(null),
                                [nB, uB] = (0, QB.useState)((() => new Array(jB.Lj).fill("pending"))),
                                [UB, aB] = (0, QB.useState)((() => {
                                  const BB = jB.Sj;
                                  return (0, JB.I)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
                                })),
                                pB = jB.label,
                                {
                                  icon: rB
                                } = jB,
                                sB = (0, QB.useRef)(0),
                                mB = (0, QB.useRef)(0),
                                yB = (0, QB.useRef)([]),
                                kB = (0, IB.f)();
                              return (0, QB.useEffect)((() => {
                                const BB = kB.onFrame((() => {
                                  const BB = kB.getState();
                                  if (!BB.isActive || !zB.current) return;
                                  const jB = BB.state,
                                    QB = 30 + 60 * jB.outerCircleProgress;
                                  if (zB.current.setAttribute("r", String(QB)), !0 === jB.lastClickResult && jB.successes > sB.current) {
                                    zB.current.classList.remove("QTERhythmClickOuterCircle--miss"), zB.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = zB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    yB.current.push(BB)
                                  } else if (!1 === jB.lastClickResult && jB.misses > mB.current) {
                                    zB.current.classList.remove("QTERhythmClickOuterCircle--hit"), zB.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = zB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    yB.current.push(BB)
                                  }
                                  jB.successes === sB.current && jB.misses === mB.current || (sB.current = jB.successes, mB.current = jB.misses, uB((BB => {
                                    const zB = [...BB];
                                    for (let QB = 0; QB < jB.Lj; QB++) zB[QB] = QB < jB.successes ? "success" : "pending";
                                    return zB
                                  })), aB((BB => {
                                    if (0 === BB.length) return BB;
                                    const zB = [...BB];
                                    for (let QB = 0; QB < zB.length; QB++) zB[QB] = QB < jB.misses ? "miss" : "pending";
                                    return zB
                                  })))
                                }));
                                return () => {
                                  BB();
                                  for (const BB of yB.current) clearTimeout(BB);
                                  yB.current = []
                                }
                              }), [kB]), (0, NB.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, NB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: nB.map(((BB, jB) => (0, NB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, jB)))
                                }), (0, NB.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, NB.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, NB.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, NB.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: zB
                                    })]
                                  }), rB && (0, NB.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, NB.jsx)(dB.e, {
                                      text: [{
                                        icon: rB
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), UB.length > 0 && (0, NB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: UB.map(((BB, jB) => (0, NB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, jB)))
                                }), (0, NB.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, NB.jsx)(dB.e, {
                                    text: pB
                                  })
                                })]
                              })
                            }));

                          function kB(BB) {
                            let {
                              qte: jB
                            } = BB;
                            switch (jB.type) {
                              case "progressBar":
                                return (0, NB.jsx)(uB, {
                                  initialParameters: jB.parameters
                                });
                              case "timedClick":
                                return (0, NB.jsx)(rB, {
                                  initialParameters: jB.parameters
                                });
                              case "gravityBar":
                                return (0, NB.jsx)(sB, {
                                  initialParameters: jB.parameters
                                });
                              case "precisionBar":
                                return (0, NB.jsx)(mB, {
                                  initialParameters: jB.parameters
                                });
                              case "rhythmClick":
                                return (0, NB.jsx)(yB, {
                                  initialParameters: jB.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const GB = (0, QB.memo)((function() {
                            const [BB, jB] = (0, QB.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, nB.f)("qteStateUpdated", (BB => {
                              jB(BB)
                            })), BB.isActive && BB.type ? (0, NB.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, NB.jsx)(kB, {
                                qte: BB
                              })
                            }) : null
                          }))
                        }, 4862: (BB, jB, zB) => {
                          zB.d(jB, {
                            b: () => NB,
                            f: () => uB
                          });
                          var QB = zB(62),
                            nB = zB(1325),
                            dB = zB(4866);
                          const IB = {
                              getState: () => dB.c.getCurrentState(),
                              onFrame: nB.u
                            },
                            NB = (0, QB.createContext)(IB);

                          function uB() {
                            return (0, QB.useContext)(NB)
                          }
                        }, 4932: (BB, jB, zB) => {
                          zB.d(jB, {
                            e: () => VB,
                            g: () => YB
                          });
                          var QB = zB(4939),
                            nB = zB(363);
                          const dB = 120,
                            IB = 260,
                            NB = 1.15,
                            uB = 1.2,
                            UB = 2,
                            aB = 1.08,
                            pB = .8,
                            rB = .95,
                            sB = 8,
                            JB = "[\"')\\]\u300d\u300f\uff09]*",
                            mB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${JB}$`),
                            yB = new RegExp(`[?\uff1f]${JB}$`),
                            kB = new RegExp(`[!\uff01]${JB}$`),
                            GB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            LB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            gB = new RegExp(`[${LB}]`),
                            tB = new RegExp(`[${LB}]|[^${LB}]+`, "g"),
                            SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function MB(BB) {
                            let jB = 2166136261;
                            for (let zB = 0; zB < BB.length; zB++) jB ^= BB.charCodeAt(zB), jB = Math.imul(jB, 16777619);
                            return (jB >>> 0) / 4294967295 * 2 - 1
                          }

                          function EB(BB) {
                            var jB;
                            if (gB.test(BB)) return 1;
                            const zB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              QB = zB.replace(/[^0-9]/g, "");
                            if (QB.length > 0 && !/\p{L}/u.test(zB)) return Math.min(QB.length, 4);
                            const nB = null !== (jB = zB.match(SB)) && void 0 !== jB ? jB : [];
                            if (0 === nB.length) {
                              var dB, IB;
                              const BB = null !== (dB = null === (IB = zB.match(/\p{L}/gu)) || void 0 === IB ? void 0 : IB.length) && void 0 !== dB ? dB : 0;
                              return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), sB)
                            }
                            const NB = zB.replace(/[^\p{L}]/gu, ""),
                              uB = nB.length > 1 && "e" === nB.at(-1) && NB.endsWith("e") && !NB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
                            return Math.min(nB.length - (uB ? 1 : 0), sB)
                          }

                          function iB(BB) {
                            return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function qB(BB) {
                            const jB = BB.replace(/[^\p{L}]/gu, "");
                            return jB.length >= 2 && jB === jB.toUpperCase() && jB !== jB.toLowerCase()
                          }

                          function fB(BB, jB) {
                            var zB;
                            const sB = jB && (0, QB.i)(jB),
                              JB = null !== (zB = null === sB || void 0 === sB ? void 0 : sB.syllableMs) && void 0 !== zB ? zB : QB.d,
                              LB = function(BB) {
                                const jB = [];
                                for (const QB of (0, nB.Rb)(BB))
                                  if ("string" === typeof QB)
                                    for (const BB of QB.split(/(\s+)/)) {
                                      if ("" === BB) continue;
                                      if (/^\s+$/.test(BB)) {
                                        jB.push({
                                          kind: "space",
                                          text: BB
                                        });
                                        continue
                                      }
                                      if (!gB.test(BB)) {
                                        jB.push({
                                          kind: "word",
                                          text: BB,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let QB = !0;
                                      for (const nB of null !== (zB = BB.match(tB)) && void 0 !== zB ? zB : []) {
                                        var zB;
                                        const BB = jB.at(-1);
                                        QB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || gB.test(nB) || /[\p{L}\p{N}]/u.test(nB) ? (QB || jB.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), jB.push({
                                          kind: "word",
                                          text: nB,
                                          delayMs: 0
                                        }), QB = !1) : BB.text += nB
                                      }
                                    } else jB.push({
                                      kind: "icon",
                                      text: QB.icon,
                                      delayMs: 0
                                    });
                                return jB
                              }(BB),
                              SB = [];
                            let fB = [];
                            for (const QB of LB) "space" !== QB.kind && (fB.push(QB), mB.test(QB.text) && (SB.push(fB), fB = []));
                            SB.push(fB);
                            const oB = [];
                            let HB = 0;
                            for (const QB of SB) {
                              var DB, FB;
                              const BB = null !== (DB = null === (FB = QB.at(-1)) || void 0 === FB ? void 0 : FB.text) && void 0 !== DB ? DB : "",
                                jB = yB.test(BB),
                                zB = kB.test(BB),
                                nB = QB.map((BB => "word" === BB.kind ? EB(BB.text) : 1)),
                                LB = nB.findLastIndex((BB => BB > 0));
                              for (const [yB, kB] of QB.entries()) {
                                const BB = "word" === kB.kind,
                                  QB = nB[yB];
                                kB.delayMs = HB;
                                for (let nB = 0; sB && nB < QB; nB++) {
                                  const {
                                    intonation: dB
                                  } = sB;
                                  let IB = LB > 0 ? -dB.declineSemitones * (yB / LB) : 0;
                                  IB += MB(`${iB(kB.text)}|${nB}`) * dB.variationSemitones;
                                  const mB = Math.min(1, dB.variationSemitones);
                                  let GB = sB.glideSemitones,
                                    gB = 1;
                                  zB && (IB += dB.exclaimLiftSemitones, gB *= NB), jB && yB === LB && (IB += dB.questionRiseSemitones * (QB > 1 ? .5 + .5 * nB / (QB - 1) : 1), nB === QB - 1 && (GB = Math.abs(GB) + dB.questionRiseSemitones / 2)), BB && qB(kB.text) && (IB += UB * mB, gB *= uB), QB > 1 && 0 === nB && (IB += pB * mB, gB *= aB), oB.push({
                                    atMs: HB + nB * JB,
                                    semitones: IB,
                                    glideSemitones: GB,
                                    durationMs: nB < QB - 1 ? Math.min(sB.durationMs, JB * rB) : sB.durationMs,
                                    level: gB
                                  })
                                }
                                HB += QB * JB + (mB.test(kB.text) ? IB : GB.test(kB.text) ? dB : 0)
                              }
                            }
                            return {
                              pieces: LB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
                                kind: "icon",
                                icon: BB.text,
                                delayMs: BB.delayMs
                              } : {
                                kind: "word",
                                text: BB.text,
                                delayMs: BB.delayMs
                              })),
                              blips: oB
                            }
                          }
                          var oB = zB(1240),
                            HB = zB(1284),
                            DB = zB(1991);

                          function FB(BB) {
                            if ("string" === typeof BB) return BB;
                            const jB = HB.c.get().getCurrentLanguageCode();
                            return (0, oB.t)(jB, BB.translationKey, (0, oB.p)(BB.params, DB.b.shown))
                          }

                          function YB(BB) {
                            const jB = void 0 === BB.voice ? null : (0, QB.k)(BB.voice),
                              zB = jB && (0, QB.i)(jB);
                            return {
                              plan: fB(FB(BB.line), zB),
                              synth: zB
                            }
                          }

                          function VB(BB) {
                            const jB = [];
                            let zB = [];
                            for (const [nB, dB] of BB.entries()) {
                              var QB;
                              "space" === dB.kind && (" " !== dB.text || "icon" !== (null === (QB = BB[nB + 1]) || void 0 === QB ? void 0 : QB.kind)) ? (zB.length > 0 && jB.push(zB), jB.push([dB]), zB = []) : zB.push(dB)
                            }
                            return zB.length > 0 && jB.push(zB), jB
                          }
                        }, 4947: (BB, jB, zB) => {
                          zB.d(jB, {
                            c: () => aB,
                            f: () => pB
                          });
                          var QB = zB(4950),
                            nB = zB(28);
                          const dB = .25,
                            IB = .85,
                            NB = .02,
                            uB = .01;

                          function UB(BB, jB, zB, QB, nB, dB, NB) {
                            const {
                              waveform: uB,
                              pitchHz: UB,
                              attackMs: aB,
                              releaseMs: pB,
                              lowpassHz: rB
                            } = zB, sB = nB + QB.durationMs / 1e3, JB = UB * 2 ** (QB.semitones / 12), mB = BB.createOscillator();
                            mB.type = uB, mB.frequency.setValueAtTime(JB, nB), mB.frequency.exponentialRampToValueAtTime(JB * 2 ** (QB.glideSemitones / 12), sB);
                            const yB = nB + Math.min(aB, QB.durationMs) / 1e3,
                              kB = BB.createGain();
                            kB.gain.setValueAtTime(0, nB), kB.gain.linearRampToValueAtTime(dB, yB), kB.gain.linearRampToValueAtTime(dB * IB, Math.max(yB, sB - pB / 1e3)), kB.gain.linearRampToValueAtTime(0, sB);
                            const GB = [mB];
                            if (null !== rB) {
                              const jB = BB.createBiquadFilter();
                              jB.type = "lowpass", jB.frequency.value = rB, GB.push(jB)
                            }
                            GB.push(kB, jB);
                            for (let IB = 1; IB < GB.length; IB++) GB[IB - 1].connect(GB[IB]);
                            return mB.onended = () => {
                              for (const BB of GB.slice(0, -1)) BB.disconnect();
                              NB()
                            }, mB.start(nB), mB.stop(sB), mB
                          }

                          function aB(BB, jB, zB, QB, nB, IB) {
                            if (0 === QB.length) return IB(), () => {};
                            const aB = dB * zB.volume * nB,
                              pB = BB.createGain();
                            pB.connect(jB);
                            const rB = BB.currentTime + NB,
                              sB = new Set;
                            for (const dB of QB) {
                              const jB = UB(BB, pB, zB, dB, rB + dB.atMs / 1e3, aB * dB.level, (() => {
                                sB.delete(jB), 0 === sB.size && (pB.disconnect(), IB())
                              }));
                              sB.add(jB)
                            }
                            return () => {
                              const jB = BB.currentTime;
                              pB.gain.setTargetAtTime(0, jB, uB);
                              for (const BB of sB) try {
                                BB.stop(jB + 5 * uB)
                              } catch {}
                            }
                          }

                          function pB(BB, jB) {
                            var zB;
                            const dB = QB.Howler.ctx,
                              IB = QB.Howler.masterGain;
                            if (!dB || !IB || !nB.c.get("soundOnFromAd")) return () => {};
                            const NB = QB.Howler;
                            return null === (zB = NB._autoResume) || void 0 === zB || zB.call(NB), aB(dB, IB, BB, jB, nB.c.get("soundVolume"), (() => {
                              var BB;
                              null === (BB = NB._autoSuspend) || void 0 === BB || BB.call(NB)
                            }))
                          }
                        }, 4921: (BB, jB, zB) => {
                          zB.d(jB, {
                            b: () => NB,
                            f: () => nB,
                            g: () => uB,
                            h: () => IB,
                            l: () => dB
                          });
                          var QB = zB(4918);
                          const nB = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            dB = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            IB = `${QB.h} lists every page of the Bloxd Code API docs.`;

                          function NB(BB, jB) {
                            return `${BB.url}${encodeURIComponent(jB.toWellFormed())}`
                          }

                          function uB(BB) {
                            const jB = NB(nB, BB);
                            return jB.length <= 3e4 ? {
                              url: jB,
                              sendsPrompt: !0
                            } : {
                              url: new URL(nB.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 4950: (BB, jB, zB) => {
                          zB.r(jB), zB.d(jB, {
                            Howl: () => nB.Howl,
                            Howler: () => nB.Howler,
                            musicOutput: () => yB,
                            readyAudioContext: () => kB
                          });
                          var QB, nB = zB(4958),
                            dB = zB(3551),
                            IB = zB(4741);
                          const NB = nB.Howler;

                          function uB() {
                            var BB, jB;
                            if (NB.ctx || !NB.usingWebAudio || "undefined" === typeof AudioContext || !(0, IB.h)()) return;
                            const zB = navigator.audioSession;
                            let QB;
                            "auto" === (null === zB || void 0 === zB ? void 0 : zB.type) && (zB.type = "ambient");
                            try {
                              QB = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const nB = QB.createGain();
                            nB.gain.setValueAtTime(NB._muted ? 0 : null !== (BB = NB._volume) && void 0 !== BB ? BB : 1, QB.currentTime), nB.connect(QB.destination), NB.ctx = QB, NB.masterGain = nB, null === (jB = NB._setup) || void 0 === jB || jB.call(NB)
                          }
                          NB._mobileUnloaded = !0;
                          const UB = NB.volume.bind(nB.Howler);
                          NB.volume = function() {
                            return uB(), UB(...arguments)
                          };
                          const aB = NB.mute.bind(nB.Howler);
                          NB.mute = BB => (uB(), aB(BB));
                          const pB = nB.Howl.prototype,
                            rB = pB.init;

                          function sB() {
                            for (; NB._html5AudioPool.length < NB.html5PoolSize;) {
                              const BB = new Audio;
                              BB._unlocked = !0, NB._releaseHtml5Audio(BB)
                            }
                            for (const jB of NB._howls)
                              if (!jB._webAudio)
                                for (const zB of jB._getSoundIds()) {
                                  var BB;
                                  const QB = null === (BB = jB._soundById(zB)) || void 0 === BB ? void 0 : BB._node;
                                  QB && !QB._unlocked && (QB._unlocked = !0, QB.load())
                                }
                          }
                          pB.init = function(BB) {
                            return uB(), rB.call(this, BB)
                          }, (0, IB.h)() && (NB._unlockAudio = () => {
                            const BB = NB.ctx;
                            if (NB._audioUnlocked || !BB) return;
                            NB.autoUnlock = !1;
                            const jB = BB.createBuffer(1, 1, 22050);
                            NB._scratchBuffer = jB;
                            const zB = new AbortController;
                            let QB = "afterPaint";
                            const nB = () => {
                                var QB;
                                if (NB._audioUnlocked) return;
                                null === (QB = NB._autoResume) || void 0 === QB || QB.call(NB);
                                const nB = BB.createBufferSource();
                                nB.buffer = jB, nB.connect(BB.destination), nB.start(0), BB.resume().catch((() => {})), nB.onended = () => {
                                  nB.disconnect(0), NB._audioUnlocked = !0, zB.abort();
                                  for (const BB of NB._howls) BB._emit("unlock")
                                }
                              },
                              uB = () => {
                                sB(), nB()
                              },
                              UB = jB => {
                                if (sB(), "inTap" === QB) {
                                  if ("running" === BB.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), nB()
                                } else "afterPaint" === QB && (QB = "queued", (0, dB.b)(jB.timeStamp, (() => {
                                  QB = "inTap", nB()
                                })))
                              };
                            for (const dB of ["touchstart", "touchend"]) document.addEventListener(dB, uB, {
                              capture: !0,
                              signal: zB.signal
                            });
                            for (const dB of IB.d) document.addEventListener(dB, UB, {
                              capture: !0,
                              signal: zB.signal
                            })
                          });
                          let JB = 0;
                          const mB = null === (QB = NB._autoSuspend) || void 0 === QB ? void 0 : QB.bind(nB.Howler);

                          function yB() {
                            kB();
                            const {
                              ctx: BB,
                              masterGain: jB
                            } = NB;
                            return BB && jB ? {
                              ctx: BB,
                              destination: jB,
                              holdAwake: BB => {
                                var jB, zB;
                                (JB += BB ? 1 : -1, BB) ? null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB): null === (zB = NB._autoSuspend) || void 0 === zB || zB.call(NB)
                              },
                              wake: () => {
                                var jB;
                                "running" !== BB.state && (null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB), BB.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function kB() {
                            var BB;
                            (NB.volume(), NB.ctx && NB.autoUnlock) && (null === (BB = NB._unlockAudio) || void 0 === BB || BB.call(NB))
                          }
                          mB && (NB._autoSuspend = () => JB > 0 ? nB.Howler : mB())
                        }, 4965: (BB, jB, zB) => {
                          function QB(BB) {
                            return {
                              notAfter: BB
                            }
                          }
                          zB.d(jB, {
                            e: () => uB,
                            h: () => UB,
                            i: () => NB,
                            k: () => QB,
                            m: () => nB,
                            p: () => dB,
                            s: () => IB,
                            u: () => aB,
                            x: () => pB
                          });
                          const nB = QB("\\w$."),
                            dB = QB("\\w.,");

                          function IB(BB) {
                            return jB => uB(jB, BB)
                          }

                          function NB(BB) {
                            return jB => !BB.test(jB.input.slice(0, jB.index))
                          }

                          function uB(BB, jB) {
                            return BB.index > 0 && new RegExp(`[${jB}]`).test(BB.input[BB.index - 1])
                          }

                          function UB(BB, jB, zB) {
                            return function(BB) {
                              return void 0 !== BB && "function" !== typeof BB
                            }(zB) ? function(BB, jB, zB) {
                              const QB = jB.flags.replace(/[gy]/g, ""),
                                nB = new RegExp(`[^${zB}](?:${jB.source})`, `${QB}g`),
                                dB = [],
                                IB = zB => {
                                  const QB = zB.index + zB[0].length;
                                  return ("" === zB[0] ? rB(BB, jB, QB) : QB) - 1
                                },
                                NB = new RegExp(`(?:${jB.source})`, `${QB}y`).exec(BB);
                              if (NB) {
                                if (dB.push(NB), !jB.global) return dB;
                                nB.lastIndex = IB(NB)
                              }
                              for (let uB = nB.exec(BB); uB; uB = nB.exec(BB)) {
                                const zB = rB(BB, jB, uB.index) - uB.index;
                                if (uB[0] = uB[0].slice(zB), uB.index += zB, dB.push(uB), !jB.global) break;
                                nB.lastIndex = IB(uB)
                              }
                              return dB
                            }(BB, jB, zB.notAfter) : function(BB, jB, zB) {
                              const QB = new RegExp(jB.source, `${jB.flags.replace(/[gy]/g,"")}g`),
                                nB = [];
                              for (let dB = QB.exec(BB); dB; dB = QB.exec(BB))
                                if (!zB || zB(dB)) {
                                  if (nB.push(dB), !jB.global) break;
                                  "" === dB[0] && (QB.lastIndex = rB(BB, jB, QB.lastIndex))
                                } else QB.lastIndex = rB(BB, jB, dB.index);
                              return nB
                            }(BB, jB, zB)
                          }

                          function aB(BB, jB, zB, QB) {
                            let nB = "",
                              dB = 0;
                            for (const IB of UB(BB, jB, zB)) nB += BB.slice(dB, IB.index) + QB(IB), dB = IB.index + IB[0].length;
                            return nB + BB.slice(dB)
                          }

                          function pB(BB, jB, zB) {
                            const QB = [];
                            let nB = 0;
                            for (const dB of UB(BB, jB, zB)) QB.push(BB.slice(nB, dB.index)), nB = dB.index + dB[0].length;
                            return [...QB, BB.slice(nB)]
                          }

                          function rB(BB, jB, zB) {
                            var QB;
                            return zB + (jB.unicode && (null !== (QB = BB.codePointAt(zB)) && void 0 !== QB ? QB : 0) > 65535 ? 2 : 1)
                          }
                        }, 4918: (BB, jB, zB) => {
                          zB.d(jB, {
                            d: () => nB,
                            f: () => uB,
                            g: () => dB,
                            h: () => IB,
                            i: () => NB,
                            j: () => yB,
                            m: () => aB,
                            n: () => pB,
                            o: () => mB,
                            r: () => sB
                          });
                          var QB = zB(1615);
                          const nB = 24e3,
                            dB = "/docs/llms.txt",
                            IB = `${QB.e}${dB}`,
                            NB = "/llms.txt",
                            uB = "/docs/llms-full.txt";

                          function UB(BB) {
                            return BB || "index"
                          }

                          function aB(BB) {
                            return `/docs/${UB(BB)}.md`
                          }

                          function pB(BB, jB) {
                            return `/docs/${UB(BB)}/${jB+1}.md`
                          }
                          const rB = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function sB(BB) {
                            const jB = rB.exec(BB);
                            return null === jB ? null : {
                              name: jB[1],
                              part: void 0 === jB[2] ? null : Number(jB[2])
                            }
                          }
                          const JB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function mB(BB) {
                            const jB = JB.exec(BB);
                            if (null === jB) return null;
                            const [, zB = "", QB] = jB;
                            return void 0 === QB ? aB(zB) : pB(zB, Number(QB) - 1)
                          }

                          function yB(BB) {
                            return `/docsHtml/${UB(BB)}.html`
                          }
                        }, 4939: (BB, jB, zB) => {
                          zB.d(jB, {
                            d: () => nB,
                            e: () => QB,
                            h: () => dB,
                            i: () => uB,
                            k: () => IB
                          });
                          const QB = ["sine", "triangle", "square", "sawtooth"],
                            nB = 55,
                            dB = {
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

                          function IB(BB) {
                            return "string" !== typeof BB ? BB : Object.hasOwn(dB, BB) ? dB[BB] : null
                          }

                          function NB(BB, jB, zB) {
                            return Math.min(zB, Math.max(jB, BB))
                          }

                          function uB(BB) {
                            const jB = NB(BB.durationMs, 10, 500),
                              zB = NB(BB.attackMs, 0, jB),
                              {
                                intonation: nB
                              } = BB;
                            return {
                              waveform: QB.includes(BB.waveform) ? BB.waveform : "sine",
                              pitchHz: NB(BB.pitchHz, 20, 4e3),
                              glideSemitones: NB(BB.glideSemitones, -24, 24),
                              durationMs: jB,
                              attackMs: zB,
                              releaseMs: NB(BB.releaseMs, 0, jB - zB),
                              lowpassHz: null === BB.lowpassHz ? null : NB(BB.lowpassHz, 20, 2e4),
                              volume: NB(BB.volume, 0, 2),
                              intonation: {
                                variationSemitones: NB(nB.variationSemitones, 0, 6),
                                declineSemitones: NB(nB.declineSemitones, 0, 12),
                                questionRiseSemitones: NB(nB.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: NB(nB.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: NB(BB.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const BB in modules) Object.freeze(modules[BB]);