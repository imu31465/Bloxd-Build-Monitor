export const id = 79;
export const ids = [79, 95];
export const modules = {
    5001: (BB, IB, ZB) => {
      ZB.d(IB, {
        c: () => qB,
        d: () => yB
      });
      var TB = ZB(1091),
        JB = ZB.n(TB),
        oB = ZB(63),
        GB = ZB(1248),
        vB = ZB(5007),
        kB = ZB(1960),
        cB = ZB(2526),
        nB = ZB(5011),
        hB = ZB(1153);
      const zB = new WeakMap;
      let FB = 0;

      function NB(BB) {
        let IB = zB.get(BB);
        return void 0 === IB && (IB = FB++, zB.set(BB, IB)), IB
      }

      function gB(BB) {
        let {
          piece: IB
        } = BB;
        return "space" === IB.kind ? (0, hB.jsx)(hB.Fragment, {
          children: IB.text
        }) : (0, hB.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${IB.delayMs}ms`
          },
          children: (0, hB.jsx)(vB.c, {
            text: "icon" === IB.kind ? `[[${IB.icon}]]` : IB.text
          })
        })
      }

      function qB(BB) {
        let {
          display: IB
        } = BB;
        const {
          selectedLanguage: ZB
        } = (0, GB.G)(), TB = (0, oB.useMemo)((() => (0, nB.b)((0, nB.c)(IB).plan.pieces)), [IB, ZB.code]);
        return (0, hB.jsxs)("div", {
          className: JB()("Dialogue", {
            DialogueAnimateIn: !1 !== IB.animateIn
          }),
          children: [IB.speakerName && (0, hB.jsx)(kB.e, {
            text: IB.speakerName,
            className: "DialogueSpeaker"
          }), (0, hB.jsx)("p", {
            className: "DialogueLine",
            children: TB.map(((BB, IB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, hB.jsx)("span", {
              className: "DialogueGlue",
              children: BB.map(((BB, IB) => (0, hB.jsx)(gB, {
                piece: BB
              }, IB)))
            }, IB)))
          })]
        })
      }
      const yB = (0, oB.memo)((function() {
        const BB = (0, cB.d)("dialogue");
        return (0, hB.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: BB && (0, hB.jsx)(qB, {
            display: BB
          }, NB(BB))
        })
      }))
    },
    4898: (BB, IB, ZB) => {
        ZB.r(IB), ZB.d(IB, {
          default: () => IG
        });
        var TB = ZB(63),
          JB = ZB(1091),
          oB = ZB.n(JB),
          GB = ZB(1583),
          vB = ZB(1591),
          kB = ZB(20),
          cB = ZB(82),
          nB = ZB(4902),
          hB = ZB(4908),
          zB = ZB(4910),
          FB = ZB(4542),
          NB = ZB(1153);
        const gB = "/textures/docs/icons";

        function qB(BB) {
          let {
            name: IB,
            isTinted: ZB,
            className: TB,
            style: JB
          } = BB;
          const GB = `${gB}/${IB}.png`;
          return ZB ? (0, NB.jsxs)("span", {
            className: oB()("DocsPixelIcon", "Tinted", TB),
            "aria-hidden": "true",
            style: JB,
            children: [(0, NB.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${GB}")`,
                WebkitMaskImage: `url("${GB}")`
              }
            }), (0, NB.jsx)("img", {
              src: GB,
              alt: ""
            })]
          }) : (0, NB.jsx)("img", {
            className: oB()("DocsPixelIcon", TB),
            src: GB,
            alt: "",
            "aria-hidden": "true",
            style: JB
          })
        }
        const yB = 1500;

        function UB() {
          const [BB, IB] = (0, TB.useState)(null);
          (0, TB.useEffect)((() => {
            if (null === BB) return;
            const ZB = setTimeout((() => {
              IB(null)
            }), yB);
            return () => {
              clearTimeout(ZB)
            }
          }), [BB]);
          return [BB, BB => {
            (0, FB.e)(BB).then((() => {
              IB({
                text: BB,
                failed: !1
              })
            }), (ZB => {
              console.error("Could not copy to the clipboard", ZB), IB({
                text: BB,
                failed: !0
              })
            }))
          }]
        }

        function WB(BB) {
          let {
            text: IB,
            label: ZB,
            className: TB
          } = BB;
          const [JB, GB] = UB(), vB = !1 === (null === JB || void 0 === JB ? void 0 : JB.failed);
          return (0, NB.jsxs)("button", {
            type: "button",
            className: oB()("DocsCopyButton", TB, {
              Copied: vB
            }),
            title: `Copy ${IB.length>40?"to clipboard":IB}`,
            "aria-label": ZB ? void 0 : `Copy ${IB}`,
            onClick: BB => {
              BB.stopPropagation(), GB(IB)
            },
            children: [(0, NB.jsx)(qB, {
              name: vB ? "check" : "copy"
            }), ZB && (0, NB.jsx)("span", {
              children: vB ? "Copied" : null !== JB && void 0 !== JB && JB.failed ? "Copy failed" : ZB
            })]
          })
        }
        nB.c.registerLanguage("javascript", hB.d), nB.c.registerLanguage("typescript", zB.c);
        const dB = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          CB = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          QB = 24;

        function sB(BB) {
          let {
            code: IB,
            lang: ZB,
            compact: JB = !1
          } = BB;
          const GB = (0, TB.useMemo)((() => function(BB, IB) {
              const ZB = dB[IB];
              return ZB ? nB.c.highlight(BB, {
                language: ZB
              }).value : BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(IB, ZB)), [IB, ZB]),
            vB = IB.split("\n").length,
            kB = !JB && vB > QB + 6,
            [cB, hB] = (0, TB.useState)(!1),
            zB = dB[ZB];
          return (0, NB.jsxs)("div", {
            className: oB()("DocsCodeBlock", {
              Compact: JB,
              Collapsed: kB && !cB
            }),
            children: [!JB && (0, NB.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, NB.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: zB ? CB[zB] : "Text"
              }), (0, NB.jsx)(WB, {
                text: IB,
                label: "Copy"
              })]
            }), (0, NB.jsx)("pre", {
              children: (0, NB.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: GB
                }
              })
            }), kB && (0, NB.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": cB,
              onClick: () => {
                hB(!cB)
              },
              children: [(0, NB.jsx)(qB, {
                name: cB ? "chevron-up" : "chevron-down"
              }), cB ? "Show less" : `Show all ${vB} lines`]
            })]
          })
        }
        var wB = ZB(4913);
        var OB = ZB(4922);
        const YB = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function iB(BB) {
          const IB = new Map;
          let ZB, TB = [],
            JB = !1;
          const oB = () => {
            ZB && IB.set(ZB.name, ZB.lines.join("\n").trimEnd())
          };
          for (const GB of BB.split("\n")) {
            const BB = GB.match(YB);
            JB || GB.startsWith("/*") ? (JB || (oB(), ZB = void 0), TB.push(GB), JB = !GB.includes("*/")) : BB ? (oB(), ZB = {
              name: BB[1],
              lines: [...TB, GB]
            }, TB = []) : ZB && (GB.startsWith(" ") || GB.startsWith("\t") || /^[}\])|]/.test(GB)) ? ZB.lines.push(GB) : ZB && "" !== GB.trim() && (oB(), ZB = void 0)
          }
          return oB(), IB
        }

        function pB(BB) {
          return "methods" === BB || "callbacks" === BB || "settings" === BB
        }
        const aB = {
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
              setterSnippet: (BB, IB) => `api.setClientOption(playerId, "${BB}", ${IB})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (BB, IB) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${BB}", ${IB})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (BB, IB) => `api.setMobSetting(mobId, "${BB}", ${IB})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (BB, IB) => `api.setVehicleSetting(vehicleId, "${BB}", ${IB})`
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
          HB = {
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

        function MB(BB) {
          return BB.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function jB(BB) {
          let IB = !1;
          return BB.split("\n").map((BB => (BB.startsWith("```") && (IB = !IB), !IB && /^#{3,} /.test(BB) ? BB.slice(1) : BB))).join("\n")
        }

        function PB(BB) {
          return "readme" === BB ? "getting-started" : MB(BB)
        }
        const RB = "## Glossary of Referenced Types";
        const rB = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...OB.b.flatMap((BB => {
            const IB = {
              id: BB.id,
              slug: PB(BB.id),
              title: BB.title,
              markdown: BB.content,
              ...aB[BB.id]
            };
            if ("readme" === BB.id) return function(BB) {
              const IB = BB.markdown.indexOf(RB),
                ZB = BB.markdown.indexOf("\n```", IB),
                TB = BB.markdown.indexOf("\n```", ZB + 1);
              if (-1 === IB || -1 === ZB || -1 === TB) throw new Error(`Getting started has no "${RB}" section with a code block`);
              const JB = BB.markdown.slice(IB + 31, ZB).trim(),
                oB = [...iB(BB.markdown.slice(BB.markdown.indexOf("\n", ZB + 1) + 1, TB))].map((BB => {
                  let [IB, ZB] = BB;
                  return `## ${IB}\n\n\`\`\`ts\n${ZB}\n\`\`\`\n`
                })),
                GB = BB.markdown.slice(BB.markdown.indexOf("\n", TB + 1) + 1);
              return [{
                ...BB,
                markdown: `${BB.markdown.slice(0,IB)}${GB}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${JB}\n\n${oB.join("\n")}`
              }]
            }(IB);
            if ("howTo" === BB.id) {
              const {
                parent: BB,
                guides: ZB
              } = function(BB) {
                const [IB, ...ZB] = BB.markdown.split(/^(?=## )/m), TB = [IB], JB = [];
                for (const GB of ZB) {
                  var oB;
                  const IB = GB.indexOf("\n"),
                    ZB = GB.slice(3, IB).trim(),
                    vB = GB.slice(IB + 1);
                  if (!vB.includes("```")) {
                    TB.push(GB);
                    continue
                  }
                  const kB = null !== (oB = HB[ZB]) && void 0 !== oB ? oB : {
                    icon: "lightbulb",
                    summary: `How to use ${ZB.toLowerCase()} in World Code.`
                  };
                  JB.push({
                    id: `${BB.id}${ZB.split(/[^A-Za-z0-9]+/).map((BB=>BB.charAt(0).toUpperCase()+BB.slice(1))).join("")}`,
                    slug: `${BB.slug}-${MB(ZB)}`,
                    title: ZB,
                    layout: "article",
                    sourceAnchor: (0, wB.s)(ZB),
                    markdown: `# ${ZB}\n\n${jB(vB)}`,
                    ...kB
                  })
                }
                return {
                  parent: {
                    ...BB,
                    markdown: TB.join(""),
                    childPageIds: JB.map((BB => BB.id))
                  },
                  guides: JB
                }
              }(IB);
              return [BB, ...ZB]
            }
            return [IB]
          }))],
          mB = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...rB.filter((BB => void 0 !== BB.sourceAnchor)).map((BB => BB.id))]
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
          return rB.find((IB => IB.id === BB))
        }
        const LB = new Map;

        function eB(BB) {
          let IB = LB.get(BB.id);
          return IB || (IB = (0, wB.u)(BB.markdown, "changelog" === BB.layout ? 3 : 2), LB.set(BB.id, IB)), IB
        }

        function uB(BB, IB) {
          return eB(BB).sections.some((BB => BB.heading.anchor === IB || BB.blocks.some((BB => "heading" === BB.kind && BB.anchor === IB))))
        }

        function fB(BB) {
          const [IB, ...ZB] = BB.replace(/^#/, "").split("-"), TB = rB.find((BB => BB.id === IB));
          if (!TB) return null;
          const JB = ZB.length > 0 ? (0, wB.s)(ZB.join("-")) : "";
          for (const GB of null !== (oB = TB.childPageIds) && void 0 !== oB ? oB : []) {
            var oB;
            const BB = XB(GB);
            if (BB.sourceAnchor === JB) return {
              page: BB,
              anchor: ""
            };
            if (uB(BB, JB)) return {
              page: BB,
              anchor: JB
            }
          }
          return {
            page: TB,
            anchor: JB
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

        function AB(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const TB = IB.slug ? `${BB}/${IB.slug}` : BB;
          return ZB ? `${TB}#${ZB}` : TB
        }
        var tB = ZB(4937);
        const bB = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          xB = new Set(["GameApi", "Console", "_TypeOf"]),
          EB = 4;

        function DB(BB) {
          let IB = BB.length;
          for (; IB > 0 && "" === BB[IB - 1].trim();) IB--;
          return BB.slice(0, IB)
        }

        function KB(BB) {
          var IB;
          const ZB = DB(BB);
          if (null === (IB = ZB.at(-1)) || void 0 === IB || !IB.trimEnd().endsWith("*/")) return {
            lines: ZB,
            doc: ""
          };
          const TB = ZB.findLastIndex((BB => BB.startsWith("/**")));
          return -1 === TB ? {
            lines: ZB,
            doc: ""
          } : {
            lines: DB(ZB.slice(0, TB)),
            doc: ZB.slice(TB).join("\n")
          }
        }

        function VB(BB) {
          var IB;
          const ZB = BB.split("\n"),
            TB = ZB.flatMap(((BB, IB) => bB.test(BB) ? [IB] : []));
          let JB = KB(ZB.slice(0, null !== (IB = TB[0]) && void 0 !== IB ? IB : ZB.length)).doc;
          return TB.map(((BB, IB) => {
            var oB;
            const GB = KB(ZB.slice(BB, null !== (oB = TB[IB + 1]) && void 0 !== oB ? oB : ZB.length)),
              vB = {
                name: ZB[BB].match(bB)[1],
                doc: JB,
                lines: GB.lines
              };
            return JB = GB.doc, vB
          }))
        }

        function SB(BB) {
          var IB;
          const ZB = BB.match(/^readonly \[([\s\S]*)\]$/);
          return ZB ? null !== (IB = ZB[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== IB ? IB : [] : null
        }

        function BI(BB) {
          if (!BB.startsWith("{") || !BB.endsWith("}")) return null;
          const IB = {
              keys: [],
              values: []
            },
            ZB = BB => {
              const ZB = BB.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ZB && (IB.keys.push(ZB[1].startsWith('"') ? ZB[1] : `"${ZB[1]}"`), IB.values.push(ZB[2].trim()))
            };
          let TB = 0,
            JB = "";
          for (const oB of BB.slice(1, -1)) "{[(".includes(oB) ? TB++ : "}])".includes(oB) && TB--, ";" === oB && 0 === TB ? (ZB(JB), JB = "") : JB += oB;
          return ZB(JB), IB
        }

        function II(BB) {
          return BB.length > EB ? `\n\t| ${BB.join("\n\t| ")}` : BB.join(" | ")
        }

        function ZI(BB, IB) {
          const ZB = function(BB, IB) {
            return BB.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((BB, ZB) => {
              var TB;
              const JB = null === (TB = IB.get(ZB)) || void 0 === TB ? void 0 : TB.object;
              return JB ? II(JB.values) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((BB, ZB) => {
              var TB, JB;
              const oB = null === (TB = IB.get(ZB)) || void 0 === TB || null === (JB = TB.object) || void 0 === JB ? void 0 : JB.values.map(SB);
              return null !== oB && void 0 !== oB && oB.every((BB => null !== BB)) ? II([...new Set(oB.flat())]) : BB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((BB, ZB) => {
              var TB;
              const JB = null === (TB = IB.get(ZB)) || void 0 === TB ? void 0 : TB.members;
              return JB ? II(JB) : BB
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((BB, ZB) => {
              var TB;
              const JB = null === (TB = IB.get(ZB)) || void 0 === TB ? void 0 : TB.object;
              return JB ? II(JB.keys) : BB
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((BB, ZB) => {
              var TB, JB;
              return null !== (TB = null === (JB = IB.get(ZB)) || void 0 === JB ? void 0 : JB.text) && void 0 !== TB ? TB : BB
            }))
          }(BB.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), IB);
          return [BB.doc, ZB].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function TI(BB) {
          const IB = VB(BB),
            ZB = function(BB) {
              const IB = new Map,
                ZB = BB.find((BB => "_TypeOf" === BB.name));
              let TB = null;
              const JB = () => {
                if (TB) {
                  const BB = TB.lines.join("\n");
                  IB.set(TB.name, {
                    text: BB,
                    members: SB(BB),
                    object: BI(BB)
                  })
                }
              };
              for (const oB of ZB.lines.slice(1, -1)) {
                const BB = oB.match(/^\t([\w$]+): (.+)$/);
                BB ? (JB(), TB = {
                  name: BB[1],
                  lines: [BB[2]]
                }) : TB && TB.lines.push(oB.replace(/^\t/, ""))
              }
              return JB(), IB
            }(IB),
            TB = new Map;
          for (const JB of IB) xB.has(JB.name) || TB.has(JB.name) || TB.set(JB.name, ZI(JB, ZB));
          return TB
        }
        let JI, oI, GI;

        function vI() {
          return oI ??= function(BB) {
            const IB = VB(BB).find((BB => "GameApi" === BB.name)),
              ZB = new Map,
              TB = IB.lines;
            for (let oB = 0; oB < TB.length; oB++) {
              var JB;
              if (!TB[oB].trimStart().startsWith("/**")) continue;
              const BB = oB;
              for (; oB < TB.length && !TB[oB].includes("*/");) oB++;
              const IB = null === (JB = TB[oB + 1]) || void 0 === JB ? void 0 : JB.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!IB) continue;
              let GB = null;
              const vB = [];
              let kB = "description",
                cB = !1;
              for (const ZB of TB.slice(BB, oB + 1).join("\n").split("\n").map((BB => BB.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const BB = ZB.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                BB ? (GB = BB[1].trim(), kB = "deprecation") : ZB.startsWith("@") ? (kB = "otherTag", cB = !0) : "" === ZB.trim() ? cB || (kB = "description", vB.push(ZB)) : "deprecation" !== kB || /^[A-Z]/.test(ZB.trim()) ? "otherTag" !== kB && (kB = "description", vB.push(ZB)) : GB = `${GB} ${ZB.trim()}`.trim()
              }
              ZB.set(IB[1], {
                deprecation: GB,
                description: vB.join("\n").trim()
              })
            }
            return ZB
          }(tB.default), oI
        }

        function kI() {
          if (!GI) {
            GI = new Map;
            for (const BB of rB) {
              const IB = (0, wB.t)(eB(BB)).flatMap((BB => BB.blocks));
              for (const BB of (0, wB.j)(IB))
                if ("ts" === BB.lang || "typescript" === BB.lang)
                  for (const [IB, ZB] of iB(BB.code)) GI.set(IB, ZB)
            }
            for (const [BB, IB] of(JI ??= TI(tB.default), JI)) GI.has(BB) || GI.set(BB, IB)
          }
          return GI
        }
        const cI = {
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
        let nI;

        function hI() {
          if (!nI) {
            nI = new Map;
            for (const BB of rB)
              if (pB(BB.layout))
                for (const IB of eB(BB).sections) nI.has(IB.heading.text) || nI.set(IB.heading.text, {
                  pageId: BB.id,
                  anchor: IB.heading.anchor
                })
          }
          return nI
        }

        function zI(BB) {
          const IB = BB.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return IB ? hI().get(IB[1]) : void 0
        }
        const FI = (0, TB.createContext)("/docs"),
          NI = (0, TB.createContext)(null),
          gI = (0, TB.createContext)(!1),
          qI = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function yI(BB) {
          const IB = BB.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return IB ? IB[1] : null
        }

        function UI(BB) {
          let {
            colour: IB
          } = BB;
          return (0, NB.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: IB
            },
            "aria-hidden": "true"
          })
        }

        function WI(BB) {
          const IB = [];
          let ZB = 0;
          for (const TB of BB.matchAll(qI)) IB.push(BB.slice(ZB, TB.index), (0, NB.jsx)(UI, {
            colour: TB[0]
          }), TB[0]), ZB = TB.index + TB[0].length;
          return IB.push(BB.slice(ZB)), IB
        }

        function dI(BB) {
          let {
            href: IB,
            children: ZB
          } = BB;
          const JB = (0, TB.useContext)(FI);
          if (IB.startsWith("#")) {
            const BB = fB(IB);
            if (BB) return (0, NB.jsx)(GB.c, {
              to: AB(JB, BB.page, BB.anchor),
              children: (0, NB.jsx)(gI.Provider, {
                value: !0,
                children: ZB
              })
            })
          }
          return (0, NB.jsx)("a", {
            href: IB,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, NB.jsx)(gI.Provider, {
              value: !0,
              children: ZB
            })
          })
        }

        function CI(BB) {
          let {
            code: IB
          } = BB;
          const ZB = (0, TB.useContext)(FI);
          if ((0, TB.useContext)(gI)) return (0, NB.jsx)("code", {
            className: "DocsInlineCode",
            children: IB
          });
          if (kI().has(IB)) return (0, NB.jsx)(OI, {
            type: IB
          });
          const JB = zI(IB);
          if (JB) return (0, NB.jsx)(GB.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: AB(ZB, XB(JB.pageId), JB.anchor),
            children: IB
          });
          const oB = yI(IB);
          return (0, NB.jsxs)("code", {
            className: "DocsInlineCode",
            children: [oB && (0, NB.jsx)(UI, {
              colour: oB
            }), IB]
          })
        }

        function QI(BB) {
          let {
            text: IB
          } = BB;
          const ZB = [];
          let JB = 0;
          for (const TB of IB.matchAll(wB.f)) {
            TB.index > JB && ZB.push(...WI(IB.slice(JB, TB.index)));
            const [, BB, oB, GB, vB, kB] = TB;
            BB ? ZB.push((0, NB.jsx)(CI, {
              code: (0, wB.n)(BB, oB)
            })) : GB ? ZB.push((0, NB.jsx)("strong", {
              children: (0, NB.jsx)(QI, {
                text: GB
              })
            })) : ZB.push((0, NB.jsx)(dI, {
              href: kB,
              children: (0, NB.jsx)(QI, {
                text: vB
              })
            })), JB = TB.index + TB[0].length
          }
          return JB < IB.length && ZB.push(...WI(IB.slice(JB))), (0, NB.jsx)(NB.Fragment, {
            children: ZB.map(((BB, IB) => (0, NB.jsx)(TB.Fragment, {
              children: BB
            }, IB)))
          })
        }
        const sI = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          wI = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function OI(BB) {
          let {
            type: IB
          } = BB;
          const ZB = kI(),
            JB = [];
          for (const TB of IB.trim().matchAll(sI)) {
            const [BB, IB, oB, GB, vB] = TB;
            IB ? JB.push((0, NB.jsx)("span", {
              className: "DocsTypeString",
              children: BB
            })) : oB && ZB.has(oB) ? JB.push((0, NB.jsx)(HI, {
              name: oB,
              definition: ZB.get(oB)
            })) : oB ? JB.push((0, NB.jsx)("span", {
              className: wI.has(oB) ? "DocsTypeKeyword" : "DocsTypeName",
              children: BB
            })) : GB ? JB.push((0, NB.jsx)("span", {
              className: "DocsTypeNumber",
              children: BB
            })) : vB ? JB.push(" ") : JB.push((0, NB.jsx)("span", {
              className: "DocsTypePunctuation",
              children: BB
            }))
          }
          return (0, NB.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: JB.map(((BB, IB) => (0, NB.jsx)(TB.Fragment, {
              children: BB
            }, IB)))
          })
        }
        const YI = 480,
          iI = 6,
          pI = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let aI = 0;

        function HI(BB) {
          let {
            name: IB,
            definition: ZB
          } = BB;
          const JB = (0, TB.useContext)(FI),
            oB = cI[IB],
            vB = (0, TB.useRef)(null),
            kB = (0, TB.useRef)(null),
            nB = (0, TB.useRef)(null),
            [hB, zB] = (0, TB.useState)(!1),
            [FB, gB] = (0, TB.useState)(null),
            yB = (0, TB.useRef)(),
            UB = (0, TB.useContext)(NI),
            [WB] = (0, TB.useState)((() => "DocsTypePopover-" + aI++)),
            dB = () => {
              clearTimeout(yB.current), zB(!0)
            },
            CB = () => {
              clearTimeout(yB.current), yB.current = setTimeout((() => {
                zB(!1)
              }), 120)
            };
          return (0, TB.useEffect)((() => {
            if (!hB) return;
            const BB = BB => {
              if ("Escape" === BB.key) {
                var IB, ZB;
                if (null !== (IB = kB.current) && void 0 !== IB && IB.contains(document.activeElement)) null === (ZB = vB.current) || void 0 === ZB || ZB.focus();
                zB(!1)
              }
            };
            return document.addEventListener("keydown", BB), () => {
              document.removeEventListener("keydown", BB)
            }
          }), [hB]), (0, TB.useEffect)((() => () => {
            clearTimeout(yB.current)
          }), []), (0, TB.useLayoutEffect)((() => {
            if (!hB || !vB.current || !kB.current) return void gB(null);
            const BB = vB.current.getBoundingClientRect(),
              IB = kB.current.offsetHeight,
              ZB = Math.min(YI, window.innerWidth - 32),
              TB = Math.min(Math.max(16, BB.left), window.innerWidth - ZB - 16),
              JB = BB.bottom + iI + IB < window.innerHeight;
            gB({
              left: TB,
              top: JB ? BB.bottom + iI : Math.max(16, BB.top - iI - IB)
            })
          }), [hB]), (0, NB.jsxs)(NB.Fragment, {
            children: [(0, NB.jsx)("button", {
              type: "button",
              ref: vB,
              className: "DocsTypeLink",
              "aria-expanded": hB,
              "aria-describedby": hB ? WB : void 0,
              onMouseEnter: dB,
              onMouseLeave: CB,
              onFocus: dB,
              onBlur: CB,
              onKeyDown: BB => {
                "Tab" === BB.key && !BB.shiftKey && nB.current && (BB.preventDefault(), nB.current.focus())
              },
              onClick: dB,
              children: IB
            }), hB && (0, cB.createPortal)((0, NB.jsxs)("span", {
              ref: kB,
              id: WB,
              className: "DocsTypePopover",
              role: "tooltip",
              style: FB ? {
                left: FB.left,
                top: FB.top,
                maxWidth: YI
              } : {
                visibility: "hidden"
              },
              onMouseEnter: dB,
              onMouseLeave: CB,
              onFocus: dB,
              onBlur: CB,
              children: [(0, NB.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, NB.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: IB
                }), oB && (0, NB.jsxs)(GB.c, {
                  ref: nB,
                  className: "DocsTypePopoverLink",
                  to: AB(JB, XB(oB)),
                  onClick: () => {
                    zB(!1)
                  },
                  onKeyDown: BB => {
                    if ("Tab" === BB.key) {
                      var IB;
                      if (BB.preventDefault(), BB.shiftKey || !vB.current || ! function(BB, IB) {
                          const ZB = [...document.querySelectorAll(pI)],
                            TB = ZB.slice(ZB.indexOf(BB) + 1).find((BB => BB.getClientRects().length > 0 && !(null !== IB && void 0 !== IB && IB.contains(BB))));
                          return null === TB || void 0 === TB || TB.focus(), void 0 !== TB
                        }(vB.current, kB.current)) null === (IB = vB.current) || void 0 === IB || IB.focus();
                      BB.shiftKey || zB(!1)
                    }
                  },
                  children: [XB(oB).title, (0, NB.jsx)(qB, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, NB.jsx)(sB, {
                lang: "ts",
                code: ZB,
                compact: !0
              })]
            }), null !== UB && void 0 !== UB ? UB : document.body)]
          })
        }
        var MI = ZB(201),
          jI = ZB(4944),
          PI = ZB(4950),
          RI = ZB(4952);
        const rI = {
          progressBar: {
            DB: 30,
            VB: .075,
            SB: 5,
            BI: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            TI: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            oI: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            GI: !0,
            scale: 3,
            rotation: 15,
            vI: !1
          },
          gravityBar: {
            DB: 30,
            cI: .25,
            nI: 3,
            hI: .8,
            gravity: 1,
            zI: 1.5,
            FI: 8,
            NI: 4,
            BI: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            qI: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            UI: 5,
            WI: 1200,
            dI: .15,
            CI: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var mI = ZB(342),
          XI = ZB(2074);

        function LI(BB) {
          return BB.startsWith("fa-")
        }
        const eI = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          uI = {
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

        function fI(BB) {
          return "string" === typeof BB ? "text" : "entityName" in BB || "translationKey" in BB ? "other" : (0, mI.Db)(BB) ? "progressBar" : (0, mI.Bb)(BB) ? "keyBinding" : "icon" in BB ? "icon" : "str" in BB && "string" === typeof BB.str ? "text" : "other"
        }
        const lI = [{
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
          AI = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...lI],
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
                options: XI.k
              },
              isRequired: !0
            }, ...lI],
            other: []
          };

        function tI(BB) {
          return "string" === typeof BB ? {
            str: BB
          } : BB
        }

        function bI(BB, IB) {
          let ZB = tI(BB);
          for (const TB of IB) ZB = ZB && "object" === typeof ZB ? ZB[TB] : void 0;
          return ZB
        }

        function xI(BB, IB, ZB) {
          const TB = (BB, JB) => {
            var oB;
            const GB = IB[JB],
              vB = {
                ...BB
              };
            if (JB === IB.length - 1) return void 0 === ZB ? delete vB[GB] : vB[GB] = ZB, vB;
            const kB = TB(null !== (oB = BB[GB]) && void 0 !== oB ? oB : {}, JB + 1);
            return 0 === Object.keys(kB).length ? delete vB[GB] : vB[GB] = kB, vB
          };
          return function(BB) {
            const IB = Object.keys(BB);
            return "string" === typeof BB.str && 1 === IB.length ? BB.str : BB
          }(TB(tI(BB), 0))
        }

        function EI(BB, IB) {
          const ZB = fI(BB),
            TB = AI[ZB].find((BB => BB.path.join(".") === IB.join("."))),
            JB = null !== TB && void 0 !== TB && TB.isRequired && "other" !== ZB ? bI(uI[ZB], IB) : void 0;
          return xI(BB, IB, JB)
        }

        function DI(BB) {
          switch (fI(BB)) {
            case "text":
              return String(bI(BB, ["str"]));
            case "icon":
              return String(bI(BB, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(bI(BB,["progress"])))}%`;
            case "keyBinding":
              return String(bI(BB, ["action"]));
            case "other":
              return JSON.stringify(BB)
          }
        }
        const KI = /^[A-Za-z_$][\w$]*$/;

        function VI(BB) {
          if (Array.isArray(BB)) return `[${BB.map(VI).join(", ")}]`;
          if (BB && "object" === typeof BB) {
            const IB = Object.entries(BB).map((BB => {
              let [IB, ZB] = BB;
              return `${KI.test(IB)?IB:JSON.stringify(IB)}: ${VI(ZB)}`
            }));
            return 0 === IB.length ? "{}" : `{ ${IB.join(", ")} }`
          }
          return JSON.stringify(BB)
        }

        function SI(BB) {
          const IB = BB.map(VI),
            ZB = `[${IB.join(", ")}]`;
          return ZB.length <= 60 ? ZB : `[\n${IB.map((BB=>`    ${BB},`)).join("\n")}\n]`
        }
        const BZ = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function IZ(BB) {
          let IB = "";
          for (let JB = 0; JB < BB.length; JB++) {
            const oB = BB[JB];
            if ("\\" === oB) {
              var ZB;
              const TB = null !== (ZB = BB[JB + 1]) && void 0 !== ZB ? ZB : "";
              IB += "'" === TB ? "'" : oB + TB, JB++
            } else if ('"' === oB) IB += '\\"';
            else {
              var TB;
              IB += null !== (TB = BZ[oB]) && void 0 !== TB ? TB : oB
            }
          }
          return `"${IB}"`
        }

        function ZZ(BB) {
          if ("string" === typeof BB) return !0;
          if (!BB || "object" !== typeof BB || Array.isArray(BB)) return !1;
          const IB = BB;
          return "ProgressBar" === IB.type ? "number" === typeof IB.progress : "StyledKeyBinding" === IB.type ? XI.k.includes(IB.action) : "string" === typeof IB.icon || "string" === typeof IB.str || "string" === typeof IB.entityName || "string" === typeof IB.translationKey
        }

        function TZ(BB) {
          let IB;
          try {
            IB = function(BB) {
              let IB = "",
                ZB = "",
                TB = 0;
              const JB = () => {
                IB += ZB.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ZB = ""
              };
              for (; TB < BB.length;) {
                const oB = BB.slice(TB).search(/["'`]|\/\//);
                if (-1 === oB) {
                  ZB += BB.slice(TB);
                  break
                }
                ZB += BB.slice(TB, TB + oB);
                const GB = TB + oB,
                  vB = BB[GB];
                if ("/" === vB) {
                  const IB = BB.indexOf("\n", GB);
                  TB = -1 === IB ? BB.length : IB;
                  continue
                }
                if (JB(), "`" === vB) throw new Error("Use quotes rather than template strings.");
                let kB = GB + 1;
                for (; kB < BB.length && BB[kB] !== vB;) kB += "\\" === BB[kB] ? 2 : 1;
                if (kB >= BB.length) throw new Error("A string is missing its closing quote.");
                const cB = BB.slice(GB + 1, kB);
                IB += IZ(cB), TB = kB + 1
              }
              return JB(), JSON.parse(IB)
            }(BB.trim())
          } catch (TB) {
            return {
              parts: null,
              error: TB instanceof SyntaxError ? "This isn't a valid array yet." : TB.message
            }
          }
          if (!Array.isArray(IB)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ZB = IB.findIndex((BB => !ZZ(BB)));
          return -1 !== ZB ? {
            parts: null,
            error: `Part ${ZB+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: IB,
            error: null
          }
        }
        const JZ = 1 / MI.f.clientTicksPerSecond,
          oZ = 700,
          GZ = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          vZ = {
            progressBar: rI.progressBar.TI,
            timedClick: rI.timedClick.icon,
            gravityBar: rI.gravityBar.icon,
            precisionBar: rI.precisionBar.icon,
            rhythmClick: rI.rhythmClick.icon
          };

        function kZ(BB) {
          let {
            type: IB
          } = BB;
          const [ZB, JB] = (0, TB.useState)("ready"), [GB, vB] = (0, TB.useState)(1), [kB, cB] = (0, TB.useState)(!0), nB = (0, TB.useRef)(null), hB = (0, TB.useRef)(null), zB = (0, TB.useRef)(null), FB = (0, TB.useRef)(new Set), gB = (0, TB.useRef)(!1), yB = vZ[IB], UB = (0, TB.useMemo)((() => ({
            getState: () => {
              var BB, IB;
              return null !== (BB = null === (IB = zB.current) || void 0 === IB ? void 0 : IB.getState()) && void 0 !== BB ? BB : GZ
            },
            onFrame: BB => (FB.current.add(BB), () => {
              FB.current.delete(BB)
            })
          })), []);
          (0, TB.useEffect)((() => {
            const BB = nB.current,
              IB = hB.current;
            if (!BB || !IB) return;
            const ZB = new ResizeObserver((() => {
              vB(BB.clientWidth / Math.max(1, IB.offsetWidth))
            }));
            return ZB.observe(BB), () => {
              ZB.disconnect()
            }
          }), []), (0, TB.useEffect)((() => {
            var BB;
            if ("playing" !== ZB) return;
            let TB = !1;
            const oB = new RI.g[IB](rI[IB], (BB => {
              TB = !0, cB(!1), JB(BB ? "succeeded" : "failed")
            }), (() => {}));
            zB.current = oB;
            let GB = 0,
              vB = performance.now(),
              kB = requestAnimationFrame((function BB(IB) {
                for (GB += Math.min(.25, (IB - vB) / 1e3), vB = IB; GB >= JZ && !TB;) GB -= JZ, oB.handleTick(JZ);
                for (const ZB of FB.current) ZB();
                TB || (kB = requestAnimationFrame(BB))
              }));
            return null === (BB = nB.current) || void 0 === BB || BB.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(kB), oB.tearDown(), zB.current = null, gB.current = !1
            }
          }), [ZB, IB]), (0, TB.useEffect)((() => {
            if (kB) return;
            const BB = setTimeout((() => {
              cB(!0)
            }), oZ);
            return () => {
              clearTimeout(BB)
            }
          }), [kB]);
          const WB = BB => {
            var IB;
            "playing" === ZB && gB.current !== BB && (gB.current = BB, null === (IB = zB.current) || void 0 === IB || IB.handleMouseInput(BB))
          };
          return (0, NB.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, NB.jsxs)("div", {
              ref: nB,
              className: oB()("DocsQteStage", {
                Playing: "playing" === ZB
              }),
              tabIndex: "playing" === ZB ? 0 : -1,
              role: "playing" === ZB ? "button" : void 0,
              "aria-label": "playing" === ZB ? `${IB} quick time event: click or press Space` : void 0,
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
                "playing" !== ZB || " " !== BB.key && "Enter" !== BB.key || (BB.preventDefault(), WB(!0))
              },
              onKeyUp: BB => {
                "playing" !== ZB || " " !== BB.key && "Enter" !== BB.key || WB(!1)
              },
              children: [(0, NB.jsx)("div", {
                ref: hB,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${GB})`
                },
                children: "playing" === ZB && (0, NB.jsx)(PI.c.Provider, {
                  value: UB,
                  children: (0, NB.jsx)(jI.d, {
                    qte: {
                      type: IB,
                      parameters: rI[IB]
                    }
                  })
                })
              }), "playing" !== ZB && (0, NB.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ZB && (0, NB.jsxs)("div", {
                  className: oB()("DocsQteResult", "succeeded" === ZB ? "Succeeded" : "Failed"),
                  children: [(0, NB.jsx)(qB, {
                    name: "succeeded" === ZB ? "check" : "cross",
                    isTinted: !0
                  }), (0, NB.jsx)("span", {
                    children: "succeeded" === ZB ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, NB.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !kB,
                  onClick: () => {
                    JB("playing")
                  },
                  children: [(0, NB.jsx)(qB, {
                    name: "ready" === ZB ? "play" : "replay"
                  }), (0, NB.jsx)("span", {
                    children: "ready" === ZB ? `Try ${IB}` : "Play again"
                  })]
                })]
              })]
            }), yB && !LI(yB) && (0, NB.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, NB.jsx)("code", {
                children: yB
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function cZ(BB) {
          let {
            level: IB,
            text: ZB,
            anchor: TB,
            className: JB
          } = BB;
          const GB = `h${Math.min(IB,6)}`;
          return (0, NB.jsxs)(GB, {
                id: TB,
                className: oB()("DocsHeading", JB),
                children: [(0, NB.jsx)(QI, {
                      text: ZB
                    }), (0, NB.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${TB}`,
                        "aria-label": `Link to ${ZB.replace(/`/g,"")}`,children:"#"})]})}function nZ(BB){let{items:IB,ordered:ZB}=BB;const TB=ZB?"ol":"ul";return(0,NB.jsx)(TB,{className:"DocsList",children:IB.map(((BB,IB)=>(0,NB.jsxs)("li",{children:[(0,NB.jsx)(QI,{text:BB.text}),BB.children.length>0&&(0,NB.jsx)(nZ,{items:BB.children,ordered:ZB})]},IB)))})}function hZ(BB){const IB=BB[0],ZB="paragraph"===(null===IB||void 0===IB?void 0:IB.kind)?IB.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ZB)?"warning":/^\*\*(tip|prefer)/.test(ZB)?"tip":"note"}function zZ(BB){let{block:IB}=BB;switch(IB.kind){case"heading":return(0,NB.jsx)(cZ,{level:IB.level,text:IB.text,anchor:IB.anchor});case"paragraph":return(0,NB.jsx)("p",{children:(0,NB.jsx)(QI,{text:IB.text})});case"code":{const BB="ts"===IB.lang?function(BB){const IB=BB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return IB&&Object.hasOwn(rI,IB[1])?IB[1]:null}(IB.code):null;return(0,NB.jsxs)(NB.Fragment,{children:[(0,NB.jsx)(sB,{code:IB.code,lang:IB.lang}),BB&&(0,NB.jsx)(kZ,{type:BB})]})}case"table":return(0,NB.jsx)("div",{className:"DocsTableScroll",children:(0,NB.jsxs)("table",{className:"DocsTable",children:[(0,NB.jsx)("thead",{children:(0,NB.jsx)("tr",{children:IB.header.map(((BB,IB)=>(0,NB.jsx)("th",{children:(0,NB.jsx)(QI,{text:BB})},IB)))})}),(0,NB.jsx)("tbody",{children:IB.rows.map(((BB,IB)=>(0,NB.jsx)("tr",{children:BB.map(((BB,IB)=>(0,NB.jsx)("td",{children:(0,NB.jsx)(QI,{text:BB})},IB)))},IB)))})]})});case"list":return(0,NB.jsx)(nZ,{items:IB.items,ordered:IB.ordered});case"quote":return(0,NB.jsx)("aside",{className:oB()("DocsCallout",hZ(IB.blocks)),children:(0,NB.jsx)(FZ,{blocks:IB.blocks})});case"rule":return(0,NB.jsx)("hr",{className:"DocsRule"})}}function FZ(BB){let{blocks:IB}=BB;return(0,NB.jsx)(NB.Fragment,{children:IB.map(((BB,IB)=>(0,NB.jsx)(zZ,{block:BB},IB)))})}var NZ=ZB(4927),gZ=ZB(4930);function qZ(BB){return"blocks"===BB||"items"===BB}const yZ=new Map;function UZ(BB){let IB=yZ.get(BB);return IB||(IB=function(BB){const IB={entries:[],legend:[],notes:[],examples:[]};let ZB=!1;for(const oB of BB.split(/\r?\n/).slice(1)){if(oB.startsWith("#")){const BB=oB.replace(/^# ?/,""),TB=BB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);TB?IB.legend.push({code:TB[1],meaning:TB[2],usage:TB[3].trim()}):/^Examples:/.test(BB.trim())?ZB=!0:ZB&&BB.trim()?IB.examples.push(BB.trim()):BB.trim()&&!/^\s/.test(BB)&&IB.notes.push(BB.trim());continue}const BB=oB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var TB,JB;BB&&IB.entries.push({name:BB[1],variants:null!==(TB=null===(JB=BB[2])||void 0===JB?void 0:JB.split(","))&&void 0!==TB?TB:[]})}return IB}("blocks"===BB?NZ:gZ),yZ.set(BB,IB)),IB}function WZ(BB){let{className:IB,value:ZB,placeholder:TB,label:JB,onChange:oB,count:GB,children:vB}=BB;return(0,NB.jsxs)("div",{className:IB,children:[(0,NB.jsx)(qB,{name:"magnifying-glass"}),(0,NB.jsx)("input",{type:"search",value:ZB,placeholder:TB,"aria-label":JB,onChange:BB=>{oB(BB.target.value)}}),vB,GB&&(0,NB.jsxs)("span",{className:"DocsFilterCount",children:[GB.visible," of ",GB.total]})]})}var dZ=ZB(1102);function CZ(BB){const IB=BB.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return IB?IB[2]:null}function QZ(BB){return"paragraph"===BB.kind&&""===BB.text.trim()}function sZ(BB){const IB={name:BB.heading.text,description:[],params:[],returns:null};let ZB="description";for(const JB of BB.blocks)if(!QZ(JB))if("heading"===JB.kind&&/^Parameters:?$/.test(JB.text))ZB="params";else if("heading"===JB.kind&&/^Returns:?$/.test(JB.text))ZB="returns",IB.returns={type:"",description:[]};else if("params"!==ZB||"table"!==JB.kind){if("returns"===ZB&&"paragraph"===JB.kind&&""===IB.returns.type){const BB=CZ(JB.text);if(null!==BB){IB.returns.type=BB.replaceAll("\\|","|");continue}}"returns"===ZB?IB.returns.description.push(JB):IB.description.push(JB)}else for(const[BB,ZB,oB]of JB.rows){var TB;IB.params.push({name:BB,type:null!==(TB=CZ(ZB))&&void 0!==TB?TB:ZB,description:null!==oB&&void 0!==oB?oB:""})}return IB}const wZ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function OZ(BB){return BB.filter((BB=>!QZ(BB)))}const YZ=/^[\w][\w .'&!:()-]*$/,iZ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function pZ(BB){var IB;if("code"===BB.kind&&"text"===BB.lang){const IB=BB.code.split("\n").map((BB=>BB.trim())).filter(Boolean);return IB.length>0&&IB.every((BB=>YZ.test(BB)))?IB.map((BB=>({name:BB}))):null}return"paragraph"===BB.kind&&iZ.test(BB.text.trim())?[...BB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((BB => BB[1].split(/,\s*/).map((BB => ({
                              name: BB.trim()
                            }))))): "table" === BB.kind && null !== (IB = BB.header[0]) && void 0 !== IB && IB.startsWith("Song") ? BB.rows.map((BB => {
                              let [IB, ZB] = BB;
                              return {
                                name: IB.replace(/`/g, ""),
                                caption: ZB
                              }
                            })) : null
                          }

                          function aZ(BB) {
                            const IB = [];
                            for (const ZB of BB) {
                              const BB = pZ(ZB),
                                TB = IB.at(-1),
                                JB = "table" === ZB.kind;
                              BB ? "names" === (null === TB || void 0 === TB ? void 0 : TB.kind) && TB.isSongs === JB ? TB.names.push(...BB) : IB.push({
                                kind: "names",
                                names: BB,
                                isSongs: JB
                              }) : IB.push({
                                kind: "block",
                                block: ZB
                              })
                            }
                            return IB
                          }
                          const HZ = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function MZ(BB, IB) {
                            return `${HZ[BB]}-${(0,wB.s)(IB)}`
                          }
                          const jZ = new WeakMap;

                          function PZ(BB, IB, ZB) {
                            let TB = jZ.get(IB);
                            if (!TB) {
                              TB = new Map;
                              const ZB = new Set;
                              for (const JB of (0, wB.t)(IB)) {
                                const IB = aZ(OZ(JB.blocks)).map((IB => {
                                  if ("block" === IB.kind) return IB;
                                  return {
                                    kind: "names",
                                    names: IB.names.map((IB => {
                                      var TB, oB;
                                      const GB = MZ(BB, IB.name);
                                      let vB = GB;
                                      for (let BB = 2; ZB.has(vB); BB++) vB = `${GB}-${BB}`;
                                      return ZB.add(vB), {
                                        ...IB,
                                        anchor: vB,
                                        heading: null !== (TB = null === (oB = JB.heading) || void 0 === oB ? void 0 : oB.text) && void 0 !== TB ? TB : ""
                                      }
                                    })),
                                    isSongs: IB.isSongs
                                  }
                                }));
                                TB.set(JB.blocks, IB)
                              }
                              jZ.set(IB, TB)
                            }
                            const JB = TB.get(ZB);
                            if (!JB) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return JB
                          }
                          const RZ = "/textures/docs/skinPreviews",
                            rZ = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var mZ = ZB(4403),
                            XZ = ZB(4416);

                          function LZ(BB) {
                            return Object.hasOwn(mZ.f, BB) ? mZ.f[BB] : null
                          }
                          const eZ = {
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
                            blendMode: XZ.g.Standard
                          };

                          function uZ(BB, IB, ZB) {
                            return IB + (ZB - IB) * BB()
                          }

                          function fZ(BB, IB, ZB) {
                            return BB + (IB - BB) * ZB
                          }

                          function lZ(BB) {
                            return BB.length > 0 && "timeFraction" in BB[0]
                          }

                          function AZ(BB, IB) {
                            if (0 === BB.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!lZ(BB.colorGradients)) {
                              const ZB = BB.colorGradients,
                                {
                                  color: TB
                                } = ZB[Math.floor(IB() * ZB.length) % ZB.length];
                              return [{
                                at: 0,
                                colour: [TB[0] / 255, TB[1] / 255, TB[2] / 255, 1]
                              }]
                            }
                            return [...BB.colorGradients].sort(((BB, IB) => BB.timeFraction - IB.timeFraction)).map((BB => {
                              var ZB, TB, JB;
                              const oB = BB.minColor,
                                GB = null !== (ZB = BB.maxColor) && void 0 !== ZB ? ZB : oB,
                                vB = IB(),
                                kB = [fZ(oB[0], GB[0], vB) / 255, fZ(oB[1], GB[1], vB) / 255, fZ(oB[2], GB[2], vB) / 255, fZ(null !== (TB = oB[3]) && void 0 !== TB ? TB : 1, null !== (JB = GB[3]) && void 0 !== JB ? JB : 1, vB)];
                              return {
                                at: BB.timeFraction,
                                colour: kB
                              }
                            }))
                          }

                          function tZ(BB, IB, ZB, TB) {
                            const JB = uZ(TB, BB.minEmitPower, BB.maxEmitPower),
                              oB = IB => uZ(TB, Math.min(BB.dir1[IB], BB.dir2[IB]), Math.max(BB.dir1[IB], BB.dir2[IB])) * JB,
                              GB = [...BB.velocityGradients].sort(((BB, IB) => BB.timeFraction - IB.timeFraction)).map((BB => ({
                                at: BB.timeFraction,
                                factor: uZ(TB, BB.factor, BB.factor2)
                              })));
                            return {
                              pos: [uZ(TB, IB[0], ZB[0]), uZ(TB, IB[1], ZB[1]), uZ(TB, IB[2], ZB[2])],
                              dir: [oB(0), oB(1), oB(2)],
                              age: 0,
                              life: uZ(TB, BB.minLifeTime, BB.maxLifeTime),
                              size: uZ(TB, BB.minSize, BB.maxSize),
                              colours: AZ(BB, TB),
                              velocityFactors: GB
                            }
                          }

                          function bZ(BB, IB, ZB, TB) {
                            if (IB < BB[0].at) return ZB(Math.min(1, BB.length - 1));
                            for (let JB = 0; JB < BB.length - 1; JB++)
                              if (IB <= BB[JB + 1].at) {
                                const oB = BB[JB + 1].at - BB[JB].at;
                                return TB(ZB(JB), ZB(JB + 1), oB > 0 ? (IB - BB[JB].at) / oB : 1)
                              } return ZB(BB.length - 1)
                          }

                          function xZ(BB) {
                            return bZ(BB.colours, BB.age / BB.life, (IB => BB.colours[IB].colour), ((BB, IB, ZB) => [fZ(BB[0], IB[0], ZB), fZ(BB[1], IB[1], ZB), fZ(BB[2], IB[2], ZB), fZ(BB[3], IB[3], ZB)]))
                          }

                          function EZ(BB, IB, ZB) {
                            if (BB.age += ZB, BB.age >= BB.life) return !1;
                            const TB = function(BB) {
                              return 0 === BB.velocityFactors.length ? 1 : bZ(BB.velocityFactors, BB.age / BB.life, (IB => BB.velocityFactors[IB].factor), fZ)
                            }(BB) * ZB;
                            for (let oB = 0; oB < 3; oB++) {
                              var JB;
                              BB.pos[oB] += BB.dir[oB] * TB, BB.dir[oB] += (null !== (JB = IB[oB]) && void 0 !== JB ? JB : 0) * ZB
                            }
                            return !0
                          }

                          function DZ(BB) {
                            return String(Math.round(1e6 * BB) / 1e6)
                          }

                          function KZ(BB) {
                            return `[${BB.map(DZ).join(", ")}]`
                          }

                          function VZ(BB, IB) {
                            const ZB = `${IB}    `;
                            return `[\n${(lZ(BB)?BB.map((BB=>{const IB=[`${ZB}    timeFraction: ${DZ(BB.timeFraction)},`,`${ZB}    minColor: ${KZ(BB.minColor)},`];return BB.maxColor&&IB.push(`${ZB}    maxColor: ${KZ(BB.maxColor)},`),`${ZB}{\n${IB.join("\n")}\n${ZB}},`})):BB.map((BB=>`
                            $ {
                              ZB
                            } {
                              color: $ {
                                KZ(BB.color)
                              }
                            }, `))).join("\n")}\n${IB}]`
                          }
                          const SZ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            BT = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const IT = .6;

                          function ZT(BB, IB) {
                            return `${IB?"song":"sound"}:${BB}`
                          }
                          let TT = {
                              track: null,
                              volume: IT
                            },
                            JT = null,
                            oT = 0,
                            GT = 0;
                          const vT = new Set;

                          function kT(BB) {
                            TT = {
                              ...TT,
                              ...BB
                            }, vT.forEach((BB => {
                              BB()
                            }))
                          }

                          function cT(BB) {
                            TT.track && kT({
                              track: {
                                ...TT.track,
                                ...BB
                              }
                            })
                          }

                          function nT(BB) {
                            const [IB, ZB] = (0, TB.useState)((() => BB(TT))), JB = (0, TB.useRef)(BB);
                            return JB.current = BB, (0, TB.useEffect)((() => {
                              const BB = () => {
                                ZB((() => JB.current(TT)))
                              };
                              return vT.add(BB), BB(), () => {
                                vT.delete(BB)
                              }
                            }), []), IB
                          }

                          function hT() {
                            oT++;
                            const BB = JT;
                            JT = null, null === BB || void 0 === BB || BB.stop()
                          }

                          function zT(BB, IB) {
                            let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            hT();
                            const JB = oT,
                              {
                                track: oB
                              } = TT,
                              GB = oB && oB.name === BB && oB.isSong === IB ? oB.duration : 0;
                            GT = TB, kT({
                              track: {
                                name: BB,
                                isSong: IB,
                                status: "loading",
                                duration: GB
                              }
                            }), Promise.all([ZB.e(227), ZB.e(253)]).then((() => ZB(39861))).then((ZB => {
                              let {
                                playDocsSound: oB
                              } = ZB;
                              JB === oT && (JT = oB(BB, IB, TT.volume, TB, {
                                onPlay: BB => {
                                  JB === oT && cT({
                                    status: "playing",
                                    duration: BB
                                  })
                                },
                                onEnd: BB => {
                                  var IB, ZB;
                                  JB === oT && (JT = null, BB ? kT({
                                    track: null
                                  }) : (GT = null !== (IB = null === (ZB = TT.track) || void 0 === ZB ? void 0 : ZB.duration) && void 0 !== IB ? IB : 0, cT({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((IB => {
                              console.error(`Could not play docs sound ${BB}`, IB), JB === oT && kT({
                                track: null
                              })
                            }))
                          }

                          function FT() {
                            const {
                              track: BB
                            } = TT;
                            if (!BB) return;
                            if ("playing" === BB.status && JT) return GT = JT.aU(), JT.pause(), void cT({
                              status: "paused"
                            });
                            if ("loading" === BB.status) return hT(), void cT({
                              status: "paused"
                            });
                            if (JT) return void JT.resume();
                            const IB = BB.duration > 0 && GT >= BB.duration - .05;
                            zT(BB.name, BB.isSong, IB ? 0 : GT)
                          }

                          function NT() {
                            var BB;
                            return JT && "playing" === (null === (BB = TT.track) || void 0 === BB ? void 0 : BB.status) ? JT.aU() : GT
                          }

                          function gT(BB) {
                            var IB;
                            null === (IB = JT) || void 0 === IB || IB.setVolume(BB), kT({
                              volume: BB
                            })
                          }

                          function qT() {
                            hT(), GT = 0, kT({
                              track: null
                            })
                          }
                          const yT = (0, TB.createContext)(null);
                          let UT = null;

                          function WT() {
                            const [BB, IB] = (0, TB.useState)(null);
                            return (0, TB.useEffect)((() => {
                              let BB = !1;
                              return UT ??= Promise.all([ZB.e(73), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(188), ZB.e(100), ZB.e(231)]).then((() => ZB(39858))), UT.then((ZB => {
                                BB || IB(ZB)
                              }), (BB => {
                                console.error("Could not load the docs gallery's textures", BB), UT = null
                              })), () => {
                                BB = !0
                              }
                            }), []), BB
                          }
                          const dT = 24,
                            CT = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function QT(BB, IB) {
                            const ZB = "skins" === BB ? function(BB, IB) {
                              const ZB = rZ.find((IB => BB.startsWith(IB.heading)));
                              return ZB ? function(BB, IB) {
                                return `${BB}-${IB}`
                              }(ZB.prefix, IB) : null
                            }(IB.heading, IB.name) : null;
                            return null === ZB ? null : `${RZ}/${ZB}.webp`
                          }

                          function sT(BB) {
                            let {
                              kind: IB,
                              entry: ZB,
                              assets: JB,
                              renderedUrl: GB
                            } = BB;
                            const {
                              name: vB
                            } = ZB, [kB, cB] = (0, TB.useState)(!1);
                            if ("icons" === IB && LI(vB)) return (0, NB.jsx)(dZ.d, {
                              className: "DocsTileIcon",
                              name: vB
                            });
                            let nB = null;
                            var hB;
                            if ("icons" === IB) nB = null !== (hB = null === JB || void 0 === JB ? void 0 : JB.getIngameIconUrl(vB)) && void 0 !== hB ? hB : null;
                            else if ("particles" === IB) {
                              var zB, FB, gB;
                              nB = null !== (zB = null === JB || void 0 === JB ? void 0 : JB.getParticleTextureUrl(null !== (FB = null === (gB = LZ(vB)) || void 0 === gB ? void 0 : gB.texture) && void 0 !== FB ? FB : vB)) && void 0 !== zB ? zB : null
                            } else "skins" === IB && (nB = null !== GB && void 0 !== GB ? GB : CT.test(vB) ? `/textures/charSkins/previews/${vB}_preview.png` : null);
                            return !nB || kB ? (0, NB.jsx)(qB, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === IB ? "person" : "image"
                            }) : (0, NB.jsx)("img", {
                              className: oB()("DocsTileImage", {
                                Pixelated: "skins" !== IB
                              }),
                              src: nB,
                              srcSet: nB === GB ? `${nB} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${nB}`), cB(!0)
                              }
                            })
                          }

                          function wT(BB) {
                            let {
                              entry: IB,
                              isSong: ZB
                            } = BB;
                            const TB = nT((BB => {
                                let {
                                  track: TB
                                } = BB;
                                return (null === TB || void 0 === TB ? void 0 : TB.name) === IB.name && TB.isSong === ZB ? TB.status : null
                              })),
                              JB = null !== TB && "paused" !== TB;
                            return (0, NB.jsxs)("button", {
                              type: "button",
                              id: IB.anchor,
                              className: oB()("DocsSoundTile", {
                                Playing: JB
                              }),
                              "data-docs-track": ZT(IB.name, ZB),
                              "aria-label": JB ? `Pause ${IB.name}` : `Play ${IB.name}`,
                              onClick: () => {
                                null !== TB ? FT() : zT(IB.name, ZB)
                              },
                              children: [(0, NB.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, NB.jsx)(qB, {
                                  name: JB ? "pause" : "play"
                                })
                              }), (0, NB.jsx)("code", {
                                className: "DocsSoundName",
                                children: IB.name
                              }), IB.caption && (0, NB.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: IB.caption
                              })]
                            })
                          }

                          function OT(BB) {
                            let {
                              kind: IB,
                              names: ZB,
                              isSongs: JB
                            } = BB;
                            const GB = WT(),
                              [vB, kB] = UB(),
                              cB = !1 === (null === vB || void 0 === vB ? void 0 : vB.failed) ? vB.text : null,
                              nB = (0, TB.useContext)(yT),
                              [hB, zB] = (0, TB.useState)(""),
                              FB = hB.trim().toLowerCase(),
                              gB = FB ? ZB.filter((BB => BB.name.toLowerCase().includes(FB))) : ZB;
                            return (0, NB.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ZB.length > dT && (0, NB.jsx)(WZ, {
                                className: "DocsGalleryFilter",
                                value: hB,
                                placeholder: `Filter ${ZB.length} names\u2026`,
                                label: "Filter names",
                                onChange: zB,
                                count: FB ? {
                                  visible: gB.length,
                                  total: ZB.length
                                } : null
                              }), (0, NB.jsx)("div", {
                                className: oB()("DocsGalleryGrid", `Kind-${IB}`, {
                                  Songs: JB
                                }),
                                children: gB.map((BB => {
                                  if ("sounds" === IB) return (0, NB.jsx)(wT, {
                                    entry: BB,
                                    isSong: JB
                                  }, BB.anchor);
                                  if (nB && "particles" === IB && LZ(BB.name)) return (0, NB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: oB()("DocsTile Previewable", {
                                      Copied: cB === BB.name
                                    }),
                                    title: `Play "${BB.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      nB(BB.name), kB(BB.name)
                                    },
                                    children: [(0, NB.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, NB.jsx)(sT, {
                                        kind: IB,
                                        entry: BB,
                                        assets: GB,
                                        renderedUrl: null
                                      }), (0, NB.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, NB.jsx)(qB, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, NB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: cB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor);
                                  const ZB = QT(IB, BB);
                                  return (0, NB.jsxs)("button", {
                                    type: "button",
                                    id: BB.anchor,
                                    className: oB()("DocsTile", {
                                      Copied: cB === BB.name
                                    }),
                                    title: `Copy "${BB.name}"`,
                                    onClick: () => {
                                      kB(BB.name)
                                    },
                                    children: [(0, NB.jsx)("span", {
                                      className: oB()("DocsTilePreview", {
                                        Rendered: null !== ZB
                                      }),
                                      children: (0, NB.jsx)(sT, {
                                        kind: IB,
                                        entry: BB,
                                        assets: GB,
                                        renderedUrl: ZB
                                      })
                                    }), (0, NB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: cB === BB.name ? "Copied!" : BB.name
                                    })]
                                  }, BB.anchor)
                                }))
                              })]
                            })
                          }

                          function YT(BB) {
                            let {
                              kind: IB,
                              content: ZB,
                              blocks: TB
                            } = BB;
                            return (0, NB.jsx)(NB.Fragment, {
                              children: PZ(IB, ZB, TB).map(((BB, ZB) => "block" === BB.kind ? (0, NB.jsx)(zZ, {
                                block: BB.block
                              }, ZB) : (0, NB.jsx)(OT, {
                                kind: IB,
                                names: BB.names,
                                isSongs: BB.isSongs
                              }, ZB)))
                            })
                          }
                          const iT = [{
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

                          function pT(BB) {
                            let {
                              cards: IB = iT,
                              label: ZB = "Start here"
                            } = BB;
                            const JB = (0, TB.useContext)(FI);
                            return (0, NB.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ZB,
                              children: IB.map((BB => {
                                let {
                                  pageId: IB,
                                  countNoun: ZB
                                } = BB;
                                const TB = XB(IB);
                                return (0, NB.jsxs)(GB.c, {
                                  to: AB(JB, TB),
                                  className: "DocsLandingCard",
                                  children: [(0, NB.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, NB.jsx)(qB, {
                                      name: TB.icon
                                    })
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: TB.title
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: TB.summary
                                  }), ZB && (0, NB.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [eB(TB).sections.length, " ", ZB]
                                  })]
                                }, IB)
                              }))
                            })
                          }
                          const aT = 240;

                          function HT(BB) {
                            let {
                              faces: IB
                            } = BB;
                            return (0, NB.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, NB.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${IB.top}")`
                                }
                              }), (0, NB.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${IB.left}")`
                                }
                              }), (0, NB.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${IB.right}")`
                                }
                              })]
                            })
                          }

                          function MT(BB) {
                            let {
                              src: IB
                            } = BB;
                            const [ZB, JB] = (0, TB.useState)(!1);
                            return ZB ? null : (0, NB.jsx)("img", {
                              src: IB,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${IB}`), JB(!0)
                              }
                            })
                          }

                          function jT(BB) {
                            let {
                              kind: IB
                            } = BB;
                            const ZB = UZ(IB),
                              JB = WT(),
                              GB = (0, vB.r)(),
                              [kB, cB] = (0, TB.useState)(""),
                              [nB, hB] = (0, TB.useState)(null),
                              [zB, FB] = (0, TB.useState)(aT),
                              [gB, yB] = (0, TB.useState)(null),
                              UB = (0, TB.useRef)(null),
                              dB = kB.trim().toLowerCase();
                            (0, TB.useEffect)((() => {
                              const BB = (0, wB.o)(GB.hash),
                                TB = ZB.entries.find((ZB => MZ(IB, ZB.name) === BB));
                              if (TB) UB.current = TB.name, cB(TB.name), hB(null), yB(TB.name);
                              else if (null !== UB.current) {
                                const BB = UB.current;
                                UB.current = null, cB((IB => IB === BB ? "" : IB)), yB(null)
                              }
                            }), [ZB, IB, GB.hash, GB.key]), (0, TB.useEffect)((() => {
                              var BB;
                              null !== gB && (null === (BB = document.getElementById(MZ(IB, gB))) || void 0 === BB || BB.scrollIntoView({
                                block: "center"
                              }))
                            }), [IB, gB]);
                            const CB = ZB.entries.filter((BB => (!dB || BB.name.toLowerCase().includes(dB)) && (!nB || BB.variants.includes(nB))));
                            return (0, NB.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ZB.notes.length > 0 && (0, NB.jsx)("div", {
                                className: "DocsProse",
                                children: ZB.notes.map((BB => (0, NB.jsx)("p", {
                                  children: BB
                                }, BB)))
                              }), ZB.legend.length > 0 && (0, NB.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, NB.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, NB.jsx)("thead", {
                                    children: (0, NB.jsxs)("tr", {
                                      children: [(0, NB.jsx)("th", {
                                        children: "Code"
                                      }), (0, NB.jsx)("th", {
                                        children: "Variant"
                                      }), (0, NB.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, NB.jsx)("tbody", {
                                    children: ZB.legend.map((BB => (0, NB.jsxs)("tr", {
                                      children: [(0, NB.jsx)("td", {
                                        children: (0, NB.jsx)("button", {
                                          type: "button",
                                          className: oB()("DocsVariantChip", {
                                            Active: nB === BB.code
                                          }),
                                          "aria-pressed": nB === BB.code,
                                          title: `Show only ${IB} with ${BB.meaning} variants`,
                                          onClick: () => {
                                            hB(nB === BB.code ? null : BB.code)
                                          },
                                          children: BB.code
                                        })
                                      }), (0, NB.jsx)("td", {
                                        children: BB.meaning
                                      }), (0, NB.jsx)("td", {
                                        children: (0, NB.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: BB.usage
                                        })
                                      })]
                                    }, BB.code)))
                                  })]
                                })
                              }), ZB.examples.length > 0 && (0, NB.jsx)(sB, {
                                lang: "text",
                                code: ZB.examples.join("\n")
                              }), (0, NB.jsx)(WZ, {
                                className: "DocsFilterBar",
                                value: kB,
                                placeholder: `Search ${ZB.entries.length} ${IB}\u2026`,
                                label: `Search ${IB}`,
                                onChange: BB => {
                                  cB(BB), FB(aT)
                                },
                                count: dB || nB ? {
                                  visible: CB.length,
                                  total: ZB.entries.length
                                } : null,
                                children: nB && (0, NB.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    hB(null)
                                  },
                                  children: [nB, " ", (0, NB.jsx)(qB, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, NB.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: CB.slice(0, zB).map((BB => {
                                  const ZB = "blocks" === IB ? null === JB || void 0 === JB ? void 0 : JB.getBlockFaces(BB.name) : null,
                                    TB = JB && !ZB ? JB.getItemTextureUrl(BB.name) : null;
                                  return (0, NB.jsxs)("div", {
                                    id: MZ(IB, BB.name),
                                    className: oB()("DocsCatalogueTile", {
                                      Linked: BB.name === gB
                                    }),
                                    children: [(0, NB.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ZB && (0, NB.jsx)(HT, {
                                        faces: ZB
                                      }), TB && (0, NB.jsx)(MT, {
                                        src: TB
                                      })]
                                    }), (0, NB.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: BB.name
                                    }), BB.variants.length > 0 && (0, NB.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: BB.variants.map((BB => (0, NB.jsx)("span", {
                                        children: BB
                                      }, BB)))
                                    }), (0, NB.jsx)(WB, {
                                      text: BB.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, BB.name)
                                }))
                              }), CB.length > zB && (0, NB.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  FB(CB.length)
                                },
                                children: ["Show all ", CB.length]
                              }), 0 === CB.length && (0, NB.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", IB, " match."]
                              })]
                            })
                          }
                          var PT = ZB(4995),
                            RT = ZB(1651);
                          const rT = .95 * PT.b;

                          function mT(BB) {
                            return /^\s*```/.test(BB)
                          }

                          function XT(BB, IB) {
                            const ZB = [
                              []
                            ];
                            let TB = !1;
                            for (const JB of BB.split("\n")) !TB && IB(JB) && ZB.at(-1).length > 0 && ZB.push([]), mT(JB) && (TB = !TB), ZB.at(-1).push(JB);
                            return ZB.map((BB => BB.join("\n").trim())).filter(Boolean)
                          }

                          function LT(BB, IB) {
                            const ZB = `${"#".repeat(IB)} `,
                              TB = [];
                            let JB = !1;
                            for (const oB of BB.split("\n")) mT(oB) ? JB = !JB : !JB && oB.startsWith(ZB) && TB.push(oB.slice(ZB.length).trim());
                            return TB
                          }

                          function eT(BB) {
                            return BB.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class uT {
                            constructor(BB, IB) {
                              this.origin = IB, this.pages = void 0, this.partPaths = new Map;
                              const ZB = BB.map((BB => {
                                const IB = IB => this.resolveLinks(BB, IB).length,
                                  ZB = function(BB, IB) {
                                    const ZB = BB.map((BB => IB(BB.markdown) + 2)),
                                      TB = ZB.reduce(((BB, IB) => BB + IB), 0),
                                      JB = TB / Math.ceil(TB / rT),
                                      oB = [];
                                    let GB = 0;
                                    return BB.forEach(((BB, IB) => {
                                      const TB = ZB[IB];
                                      (0 === oB.length || GB + TB > rT || GB + TB / 2 > JB) && (oB.push([]), GB = 0), oB.at(-1).push(BB), GB += TB
                                    })), oB
                                  }(function(BB, IB) {
                                    return XT(BB, (BB => BB.startsWith("## "))).flatMap((BB => {
                                      var ZB;
                                      const TB = null !== (ZB = LT(BB, 2)[0]) && void 0 !== ZB ? ZB : "";
                                      if (IB(BB) <= rT) return [{
                                        markdown: BB,
                                        section: TB
                                      }];
                                      let JB = !1,
                                        oB = "";
                                      return XT(BB, (BB => {
                                        const IB = JB && "" !== BB.trim();
                                        return JB = "" === BB.trim(), IB
                                      })).map((BB => {
                                        var IB;
                                        const ZB = LT(BB, 3),
                                          JB = BB.startsWith("### ") ? ZB[0] : oB;
                                        return oB = null !== (IB = ZB.at(-1)) && void 0 !== IB ? IB : oB, {
                                          markdown: BB,
                                          section: TB || JB
                                        }
                                      }))
                                    }))
                                  }(eT(BB), IB), IB);
                                return {
                                  page: BB,
                                  groups: ZB.length > 1 ? ZB : []
                                }
                              }));
                              for (const {
                                  page: TB,
                                  groups: JB
                                }
                                of ZB) JB.forEach(((BB, IB) => {
                                const ZB = (0, PT.q)(TB.slug, IB);
                                for (const JB of BB.flatMap((BB => [...LT(BB.markdown, 2), ...LT(BB.markdown, 3)]))) {
                                  const BB = `${TB.id}#${(0,wB.s)(JB)}`;
                                  this.partPaths.has(BB) || this.partPaths.set(BB, ZB)
                                }
                              }));
                              this.pages = ZB.map((BB => {
                                let {
                                  page: IB,
                                  groups: ZB
                                } = BB;
                                return {
                                  page: IB,
                                  path: (0, PT.m)(IB.slug),
                                  markdown: `# ${IB.title}\n\n${this.resolveLinks(IB,eT(IB))}\n`,
                                  parts: ZB.map(((BB, TB) => this.renderPart(IB, BB, TB, ZB.length)))
                                }
                              }))
                            }
                            url(BB) {
                              return `${this.origin}${BB}`
                            }
                            getPage(BB) {
                              return this.pages.find((IB => IB.page.id === BB))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((BB => (BB.parts.length > 0 ? BB.parts : [{
                                path: BB.path,
                                label: "",
                                markdown: BB.markdown
                              }]).filter((BB => BB.markdown.length > PT.b))))
                            }
                            markdownUrl(BB, IB) {
                              const ZB = IB && this.partPaths.get(`${BB.id}#${IB}`) || (0, PT.m)(BB.slug);
                              return this.url(IB ? `${ZB}#${IB}` : ZB)
                            }
                            resolveLinks(BB, IB) {
                              return IB.replace(/\]\((#[^)]+)\)/g, ((IB, ZB) => {
                                var TB;
                                const JB = null !== (TB = fB(ZB)) && void 0 !== TB ? TB : this.samePageTarget(BB, ZB);
                                return JB ? `](${this.markdownUrl(JB.page,JB.anchor)})` : IB
                              }))
                            }
                            samePageTarget(BB, IB) {
                              const ZB = (0, wB.s)(IB.slice(1));
                              return uB(BB, ZB) ? {
                                page: BB,
                                anchor: ZB
                              } : null
                            }
                            renderPart(BB, IB, ZB, TB) {
                              const JB = function(BB) {
                                  const IB = BB.map((BB => BB.section)).filter(Boolean);
                                  if (0 === IB.length) return "";
                                  const ZB = IB[0],
                                    TB = IB.at(-1);
                                  return ZB === TB ? ZB : `${ZB} to ${TB}`
                                }(IB),
                                oB = IB.map((BB => BB.markdown)).join("\n\n"),
                                GB = JB ? `It covers ${JB}. ` : "",
                                vB = `Part ${ZB+1} of ${TB} of [${BB.title}](${this.url((0,PT.m)(BB.slug))}). ${GB}[llms.txt](${this.url(PT.h)}) lists every part.`;
                              return {
                                path: (0, PT.q)(BB.slug, ZB),
                                label: JB,
                                markdown: `# ${BB.title}, part ${ZB+1} of ${TB}\n\n${vB}\n\n${this.resolveLinks(BB,oB)}\n`
                              }
                            }
                            llmsTxt(BB) {
                              const IB = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${fT(PT.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ZB of mB) {
                                IB.push("", `## ${ZB.title}`, "");
                                for (const BB of ZB.pageIds) {
                                  const ZB = this.getPage(BB),
                                    {
                                      page: TB,
                                      parts: JB
                                    } = ZB,
                                    oB = `About ${fT(ZB.markdown.length)} tokens${JB.length>0?`, in ${JB.length} parts:`:"."}`;
                                  IB.push(`- [${TB.title}](${this.url(ZB.path)}): ${TB.summary} ${oB}`), JB.forEach(((BB, ZB) => {
                                    IB.push(`  - [Part ${ZB+1}${BB.label?`: ${BB.label}`:""}](${this.url(BB.path)})`)
                                  }))
                                }
                              }
                              return IB.push("", "## Optional", "", `- [Every page in one file](${this.url(PT.e)}): About ${fT(BB.length)} tokens, for a model with a large context window.`, ""), IB.join("\n")
                            }
                            llmsFullTxt() {
                              return mB.flatMap((BB => BB.pageIds.map((BB => this.getPage(BB).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const BB = this.llmsFullTxt(),
                                IB = this.llmsTxt(BB),
                                ZB = new Map([
                                  [PT.k, IB],
                                  [PT.h, IB],
                                  [PT.e, BB]
                                ]);
                              for (const TB of this.pages) {
                                ZB.set(TB.path, TB.markdown);
                                for (const BB of TB.parts) ZB.set(BB.path, BB.markdown)
                              }
                              return ZB
                            }
                          }

                          function fT(BB) {
                            return `${Math.max(1,Math.round(BB/4e3))}K`
                          }
                          let lT = null;

                          function AT() {
                            return lT ??= new uT(rB, RT.b), lT
                          }
                          var tT = ZB(4999);
                          const bT = [tT.g, tT.l];

                          function xT(BB) {
                            return AT().getPage(BB.id).parts.length > 0 ? `Read ${PT.i}, then the parts of the Bloxd Code API's ${BB.title} page it lists, so I can ask questions about it.` : `Read ${RT.b}${(0,PT.m)(BB.slug)} so I can ask questions about it. ${tT.j}`
                          }

                          function ET(BB) {
                            let {
                              page: IB
                            } = BB;
                            const [ZB, TB] = UB();
                            return (0, NB.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, NB.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  TB(AT().getPage(IB.id).markdown)
                                },
                                children: [(0, NB.jsx)(qB, {
                                  name: !1 === (null === ZB || void 0 === ZB ? void 0 : ZB.failed) ? "check" : "copy"
                                }), (0, NB.jsx)("span", {
                                  children: ZB ? ZB.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), bT.map((BB => (0, NB.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, tT.e)(BB, xT(IB)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, NB.jsx)(qB, {
                                  name: "external-link"
                                }), (0, NB.jsxs)("span", {
                                  children: ["Open in ", BB.name]
                                })]
                              }, BB.name)))]
                            })
                          }

                          function DT(BB) {
                            return `#${[0,1,2].map((IB=>Math.round(Math.min(255,Math.max(0,BB[IB]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function KT(BB) {
                            return [parseInt(BB.slice(1, 3), 16), parseInt(BB.slice(3, 5), 16), parseInt(BB.slice(5, 7), 16)]
                          }

                          function VT(BB) {
                            let {
                              label: IB,
                              min: ZB,
                              max: TB,
                              step: JB,
                              low: oB,
                              high: GB,
                              onChange: vB
                            } = BB;
                            return (0, NB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, NB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, NB.jsx)("span", {
                                  children: IB
                                }), (0, NB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: oB === GB ? oB : `${oB}\u2013${GB}`
                                })]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, NB.jsx)("input", {
                                  type: "range",
                                  min: ZB,
                                  max: TB,
                                  step: JB,
                                  value: Math.min(TB, oB),
                                  "aria-label": `Minimum ${IB.toLowerCase()}`,
                                  onChange: BB => {
                                    const IB = Number(BB.target.value);
                                    vB(IB, Math.max(IB, GB))
                                  }
                                }), (0, NB.jsx)("input", {
                                  type: "range",
                                  min: ZB,
                                  max: TB,
                                  step: JB,
                                  value: Math.min(TB, GB),
                                  "aria-label": `Maximum ${IB.toLowerCase()}`,
                                  onChange: BB => {
                                    const IB = Number(BB.target.value);
                                    vB(Math.min(IB, oB), IB)
                                  }
                                })]
                              })]
                            })
                          }

                          function ST(BB) {
                            let {
                              label: IB,
                              min: ZB,
                              max: TB,
                              step: JB,
                              value: oB,
                              onChange: GB,
                              format: vB = String
                            } = BB;
                            return (0, NB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, NB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, NB.jsx)("span", {
                                  children: IB
                                }), (0, NB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: vB(oB)
                                })]
                              }), (0, NB.jsx)("input", {
                                type: "range",
                                min: ZB,
                                max: TB,
                                step: JB,
                                value: Math.min(TB, Math.max(ZB, oB)),
                                "aria-label": IB,
                                onChange: BB => {
                                  GB(Number(BB.target.value))
                                }
                              })]
                            })
                          }

                          function BJ(BB) {
                            let {
                              opts: IB,
                              onChange: ZB
                            } = BB;
                            const TB = IB.colorGradients;
                            if (!lZ(TB)) return (0, NB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, NB.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, NB.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, NB.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: TB.map(((BB, IB) => (0, NB.jsx)("input", {
                                  type: "color",
                                  value: DT(BB.color),
                                  "aria-label": `Colour ${IB+1}`,
                                  onChange: BB => {
                                    const JB = [...TB];
                                    JB[IB] = {
                                      color: KT(BB.target.value)
                                    }, ZB(JB)
                                  }
                                }, IB)))
                              })]
                            });
                            const JB = (BB, IB) => {
                              const JB = [...TB];
                              JB[BB] = IB, ZB(JB)
                            };
                            return (0, NB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, NB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, NB.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, NB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), TB.map(((BB, IB) => {
                                var ZB;
                                const TB = null !== (ZB = BB.maxColor) && void 0 !== ZB ? ZB : BB.minColor;
                                return (0, NB.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, NB.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * BB.timeFraction), "%"]
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${DT(BB.minColor)}, ${DT(TB)})`
                                    }
                                  }), (0, NB.jsx)("input", {
                                    type: "color",
                                    value: DT(BB.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: ZB => {
                                      JB(IB, {
                                        ...BB,
                                        minColor: [...KT(ZB.target.value), BB.minColor[3]]
                                      })
                                    }
                                  }), (0, NB.jsx)("input", {
                                    type: "color",
                                    value: DT(TB),
                                    "aria-label": `Maximum colour at ${Math.round(100*BB.timeFraction)}%`,
                                    onChange: ZB => {
                                      JB(IB, {
                                        ...BB,
                                        maxColor: [...KT(ZB.target.value), TB[3]]
                                      })
                                    }
                                  })]
                                }, IB)
                              }))]
                            })
                          }
                          const IJ = [-.5, -.5, -.5],
                            ZJ = [.5, .5, .5],
                            TJ = [0, 1, 2, 3, 4, 5, 6, 7].map((BB => [1 & BB ? ZJ[0] : IJ[0], 2 & BB ? ZJ[1] : IJ[1], 4 & BB ? ZJ[2] : IJ[2]]));class JJ {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(BB, IB, ZB, TB) {
                              const JB = Math.round(31 * IB),
                                oB = Math.round(31 * ZB),
                                GB = Math.round(31 * TB),
                                vB = `${JB}|${oB}|${GB}`;
                              let kB = this.tints.get(BB);
                              (!kB || kB.size > 2e3) && (kB = new Map, this.tints.set(BB, kB));
                              let cB = kB.get(vB);
                              if (cB) return cB;
                              cB = document.createElement("canvas"), cB.width = BB.naturalWidth || 16, cB.height = BB.naturalHeight || 16;
                              const nB = cB.getContext("2d");
                              return nB ? (nB.imageSmoothingEnabled = !1, nB.drawImage(BB, 0, 0, cB.width, cB.height), nB.globalCompositeOperation = "multiply", nB.fillStyle = `rgb(${JB/31*255}, ${oB/31*255}, ${GB/31*255})`, nB.fillRect(0, 0, cB.width, cB.height), nB.globalCompositeOperation = "destination-in", nB.drawImage(BB, 0, 0, cB.width, cB.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), kB.set(vB, cB), cB
                            }
                          }

                          function oJ(BB) {
                            let {
                              opts: IB,
                              textureUrl: ZB,
                              burst: JB,
                              paused: oB
                            } = BB;
                            const GB = (0, TB.useRef)(null),
                              vB = (0, TB.useRef)(IB);
                            vB.current = IB;
                            const kB = (0, TB.useRef)(oB);
                            kB.current = oB;
                            const cB = (0, TB.useRef)(null),
                              nB = (0, TB.useRef)(null),
                              hB = (0, TB.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(BB) {
                                let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ZB = [-.5, -.5, -.5],
                                  TB = [.5, .5, .5];
                                let JB = .5;
                                for (let oB = 0; oB < 40; oB++) {
                                  const oB = tZ(BB, ZB, TB, IB),
                                    GB = Math.max(oB.life / 30, .001);
                                  for (; EZ(oB, BB.gravity, GB);) JB = Math.max(JB, Math.hypot(oB.pos[0], oB.pos[1], oB.pos[2]) + oB.size / 2)
                                }
                                return JB
                              }(IB)))), [IB]),
                              zB = (0, TB.useRef)(hB);
                            return zB.current = hB, (0, TB.useEffect)((() => {
                              if (cB.current = null, !ZB) return;
                              const BB = new Image;
                              let IB = !1;
                              return BB.onload = () => {
                                IB || (cB.current = BB)
                              }, BB.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ZB}`)
                              }, BB.src = ZB, () => {
                                IB = !0
                              }
                            }), [ZB]), (0, TB.useEffect)((() => {
                              var BB;
                              null === (BB = nB.current) || void 0 === BB || BB.call(nB)
                            }), [IB, JB]), (0, TB.useEffect)((() => {
                              const BB = GB.current,
                                IB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
                              if (!BB || !IB) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ZB = new JJ;
                              let TB = [],
                                JB = 0,
                                oB = -.7,
                                hB = zB.current,
                                FB = performance.now(),
                                NB = 0,
                                gB = !0,
                                qB = null;
                              const yB = () => {
                                const BB = vB.current,
                                  IB = Math.min(400, Math.max(0, Math.ceil(BB.manualEmitCount)));
                                TB = [];
                                for (let ZB = 0; ZB < IB; ZB++) TB.push(tZ(BB, IJ, ZJ, Math.random));
                                JB = 0
                              };
                              nB.current = yB, yB();
                              const UB = GB => {
                                NB = requestAnimationFrame(UB);
                                const nB = Math.min(.05, (GB - FB) / 1e3);
                                if (FB = GB, !gB) return;
                                const WB = window.devicePixelRatio || 1,
                                  dB = Math.round(BB.clientWidth * WB),
                                  CB = Math.round(BB.clientHeight * WB);
                                if (0 === dB || 0 === CB) return;
                                BB.width === dB && BB.height === CB || (BB.width = dB, BB.height = CB);
                                const QB = vB.current;
                                null === qB && (oB += .18 * nB), hB += (zB.current - hB) * Math.min(1, 4 * nB);
                                const sB = .6 * nB;
                                TB = TB.filter((BB => EZ(BB, QB.gravity, sB))), 0 !== TB.length || kB.current || (JB += nB, JB > .6 && yB());
                                const wB = function(BB, IB, ZB, TB) {
                                  const JB = 3.2 * TB,
                                    oB = .44 * Math.min(BB, IB) * JB / TB,
                                    GB = Math.cos(ZB),
                                    vB = Math.sin(ZB),
                                    kB = Math.cos(.42),
                                    cB = Math.sin(.42);
                                  return (ZB, TB, nB) => {
                                    const hB = ZB * vB + nB * GB,
                                      zB = JB - (TB * cB + hB * kB);
                                    if (zB < .05) return null;
                                    const FB = oB / zB;
                                    return {
                                      x: BB / 2 + (ZB * GB - nB * vB) * FB,
                                      y: IB / 2 - (TB * kB - hB * cB) * FB,
                                      scale: FB,
                                      depth: zB
                                    }
                                  }
                                }(dB, CB, oB, hB);
                                ! function(BB, IB, ZB, TB, JB) {
                                  const oB = BB.createLinearGradient(0, 0, 0, ZB);
                                  oB.addColorStop(0, "#23262d"), oB.addColorStop(1, "#16181c"), BB.globalCompositeOperation = "source-over", BB.globalAlpha = 1, BB.fillStyle = oB, BB.fillRect(0, 0, IB, ZB);
                                  const GB = (IB, ZB) => {
                                      const JB = TB(IB[0], IB[1], IB[2]),
                                        oB = TB(ZB[0], ZB[1], ZB[2]);
                                      JB && oB && (BB.beginPath(), BB.moveTo(JB.x, JB.y), BB.lineTo(oB.x, oB.y), BB.stroke())
                                    },
                                    vB = Math.ceil(JB) + 1,
                                    kB = IJ[1];
                                  BB.lineWidth = 1, BB.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let cB = -vB; cB <= vB; cB++) GB([cB + .5, kB, .5 - vB], [cB + .5, kB, vB + .5]), GB([.5 - vB, kB, cB + .5], [vB + .5, kB, cB + .5]);
                                  BB.strokeStyle = "rgba(255, 255, 255, 0.28)", BB.setLineDash([4, 4]);
                                  for (const cB of TJ)
                                    for (const BB of TJ) {
                                      const IB = [0, 1, 2].filter((IB => cB[IB] !== BB[IB]));
                                      1 === IB.length && cB[IB[0]] < BB[IB[0]] && GB(cB, BB)
                                    }
                                  BB.setLineDash([])
                                }(IB, dB, CB, wB, hB);
                                const OB = cB.current,
                                  YB = TB.map((BB => ({
                                    particle: BB,
                                    at: wB(BB.pos[0], BB.pos[1], BB.pos[2])
                                  }))).filter((BB => null !== BB.at)).sort(((BB, IB) => IB.at.depth - BB.at.depth));
                                IB.imageSmoothingEnabled = !1;
                                for (const BB of function(BB) {
                                    switch (BB) {
                                      case XZ.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case XZ.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case XZ.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case XZ.g.MultiplyAdd:
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
                                  }(QB.blendMode)) {
                                  IB.globalCompositeOperation = BB.operation;
                                  for (const {
                                      particle: TB,
                                      at: JB
                                    }
                                    of YB) {
                                    const [oB, GB, vB, kB] = xZ(TB), cB = Math.max(1, TB.size * JB.scale);
                                    IB.globalAlpha = BB.usesAlpha ? Math.min(1, Math.max(0, kB)) : 1, OB ? IB.drawImage(ZB.get(OB, oB, GB, vB), JB.x - cB / 2, JB.y - cB / 2, cB, cB) : (IB.fillStyle = `rgb(${255*oB}, ${255*GB}, ${255*vB})`, IB.fillRect(JB.x - cB / 2, JB.y - cB / 2, cB, cB))
                                  }
                                }
                                IB.globalCompositeOperation = "source-over", IB.globalAlpha = 1
                              };
                              NB = requestAnimationFrame(UB);
                              const WB = new IntersectionObserver((BB => {
                                let [IB] = BB;
                                gB = IB.isIntersecting
                              }));
                              WB.observe(BB);
                              const dB = IB => {
                                  qB = IB.clientX, BB.setPointerCapture(IB.pointerId)
                                },
                                CB = BB => {
                                  null !== qB && (oB += .01 * (BB.clientX - qB), qB = BB.clientX)
                                },
                                QB = () => {
                                  qB = null
                                };
                              return BB.addEventListener("pointerdown", dB), BB.addEventListener("pointermove", CB), BB.addEventListener("pointerup", QB), BB.addEventListener("pointercancel", QB), () => {
                                cancelAnimationFrame(NB), WB.disconnect(), nB.current = null, BB.removeEventListener("pointerdown", dB), BB.removeEventListener("pointermove", CB), BB.removeEventListener("pointerup", QB), BB.removeEventListener("pointercancel", QB)
                              }
                            }), []), (0, NB.jsx)("canvas", {
                              ref: GB,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${IB.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const GJ = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            vJ = [{
                              mode: XZ.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: XZ.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: XZ.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: XZ.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: XZ.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            kJ = (0, TB.forwardRef)((function(BB, IB) {
                              var ZB, JB;
                              let {
                                textures: GB
                              } = BB;
                              const vB = WT(),
                                kB = (0, TB.useRef)(null),
                                [cB, nB] = (0, TB.useState)(eZ),
                                [hB, zB] = (0, TB.useState)("example"),
                                [FB, gB] = (0, TB.useState)(0),
                                [yB, UB] = (0, TB.useState)(!1),
                                dB = BB => {
                                  const IB = "example" === BB ? eZ : LZ(BB);
                                  IB && (nB(IB), zB(BB))
                                };
                              (0, TB.useImperativeHandle)(IB, (() => ({
                                preview: BB => {
                                  var IB;
                                  dB(BB), null === (IB = kB.current) || void 0 === IB || IB.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const CB = BB => {
                                  nB({
                                    ...cB,
                                    ...BB
                                  }), zB(null)
                                },
                                QB = function(BB, IB) {
                                  if (null !== IB) return `${SZ}    presetId: "${IB}",\n${BT}\n})`;
                                  const ZB = BB.velocityGradients.map((BB => `        {\n            timeFraction: ${DZ(BB.timeFraction)},\n            factor: ${DZ(BB.factor)},\n            factor2: ${DZ(BB.factor2)},\n        },`)),
                                    TB = [`    dir1: ${KZ(BB.dir1)},`, `    dir2: ${KZ(BB.dir2)},`, BT, `    texture: "${BB.texture}",`, `    minLifeTime: ${DZ(BB.minLifeTime)},`, `    maxLifeTime: ${DZ(BB.maxLifeTime)},`, `    minEmitPower: ${DZ(BB.minEmitPower)},`, `    maxEmitPower: ${DZ(BB.maxEmitPower)},`, `    minSize: ${DZ(BB.minSize)},`, `    maxSize: ${DZ(BB.maxSize)},`, `    manualEmitCount: ${DZ(BB.manualEmitCount)},`, `    gravity: ${KZ(BB.gravity)},`, `    colorGradients: ${VZ(BB.colorGradients,"    ")},`, `    velocityGradients: ${ZB.length>0?`[\n${ZB.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${DZ(BB.blendMode)},`];
                                  return void 0 !== BB.hideDist && TB.push(`    hideDist: ${DZ(BB.hideDist)},`), `${SZ}${TB.join("\n")}\n})`
                                }(cB, null === hB || "example" === hB ? null : hB),
                                wB = GB.includes(cB.texture) ? GB : [...GB, cB.texture];
                              return (0, NB.jsxs)("section", {
                                ref: kB,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, NB.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, NB.jsxs)("div", {
                                    children: [(0, NB.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, NB.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, NB.jsx)(WB, {
                                    text: QB,
                                    label: "Copy code"
                                  })]
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, NB.jsx)("button", {
                                    type: "button",
                                    className: oB()("DocsVariantChip", {
                                      Active: "example" === hB
                                    }),
                                    onClick: () => {
                                      dB("example")
                                    },
                                    children: "Example"
                                  }), GJ.filter((BB => null !== LZ(BB))).map((BB => (0, NB.jsx)("button", {
                                    type: "button",
                                    className: oB()("DocsVariantChip", {
                                      Active: hB === BB
                                    }),
                                    onClick: () => {
                                      dB(BB)
                                    },
                                    children: BB
                                  }, BB))), (0, NB.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== hB && void 0 !== hB ? hB : "custom",
                                    "aria-label": "Preset",
                                    onChange: BB => {
                                      dB(BB.target.value)
                                    },
                                    children: [(0, NB.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === hB && (0, NB.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), mZ.b.map((BB => (0, NB.jsx)("option", {
                                      value: BB,
                                      children: BB
                                    }, BB)))]
                                  })]
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, NB.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, NB.jsx)(oJ, {
                                      opts: cB,
                                      textureUrl: null !== (ZB = null === vB || void 0 === vB ? void 0 : vB.getParticleTextureUrl(cB.texture)) && void 0 !== ZB ? ZB : null,
                                      burst: FB,
                                      paused: yB
                                    }), (0, NB.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, NB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          gB(FB + 1)
                                        },
                                        children: [(0, NB.jsx)(qB, {
                                          name: "replay"
                                        }), (0, NB.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, NB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": yB,
                                        onClick: () => {
                                          UB(!yB)
                                        },
                                        children: [(0, NB.jsx)(qB, {
                                          name: yB ? "play" : "pause"
                                        }), (0, NB.jsx)("span", {
                                          children: yB ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, NB.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, NB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, NB.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, NB.jsx)("span", {
                                          children: "Texture"
                                        }), (0, NB.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: cB.texture
                                        })]
                                      }), (0, NB.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: wB.map((BB => {
                                          var IB;
                                          const ZB = null !== (IB = null === vB || void 0 === vB ? void 0 : vB.getParticleTextureUrl(BB)) && void 0 !== IB ? IB : null;
                                          return (0, NB.jsx)("button", {
                                            type: "button",
                                            className: oB()("DocsParticleTexture", {
                                              Active: cB.texture === BB
                                            }),
                                            title: BB,
                                            "aria-label": BB,
                                            "aria-pressed": cB.texture === BB,
                                            onClick: () => {
                                              CB({
                                                texture: BB
                                              })
                                            },
                                            children: ZB ? (0, NB.jsx)("img", {
                                              src: ZB,
                                              alt: ""
                                            }) : (0, NB.jsx)(qB, {
                                              name: "image"
                                            })
                                          }, BB)
                                        }))
                                      })]
                                    }), (0, NB.jsx)(ST, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: cB.manualEmitCount,
                                      onChange: BB => {
                                        CB({
                                          manualEmitCount: BB
                                        })
                                      }
                                    }), (0, NB.jsx)(VT, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: cB.minLifeTime,
                                      high: cB.maxLifeTime,
                                      onChange: (BB, IB) => {
                                        CB({
                                          minLifeTime: BB,
                                          maxLifeTime: IB
                                        })
                                      }
                                    }), (0, NB.jsx)(VT, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: cB.minEmitPower,
                                      high: cB.maxEmitPower,
                                      onChange: (BB, IB) => {
                                        CB({
                                          minEmitPower: BB,
                                          maxEmitPower: IB
                                        })
                                      }
                                    }), (0, NB.jsx)(VT, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: cB.minSize,
                                      high: cB.maxSize,
                                      onChange: (BB, IB) => {
                                        CB({
                                          minSize: BB,
                                          maxSize: IB
                                        })
                                      }
                                    }), (0, NB.jsx)(ST, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (JB = cB.gravity[1]) && void 0 !== JB ? JB : 0,
                                      onChange: BB => {
                                        var IB, ZB;
                                        CB({
                                          gravity: [null !== (IB = cB.gravity[0]) && void 0 !== IB ? IB : 0, BB, null !== (ZB = cB.gravity[2]) && void 0 !== ZB ? ZB : 0]
                                        })
                                      }
                                    }), (0, NB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, NB.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, NB.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, NB.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: cB.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: BB => {
                                          CB({
                                            blendMode: Number(BB.target.value)
                                          })
                                        },
                                        children: vJ.map((BB => {
                                          let {
                                            mode: IB,
                                            label: ZB
                                          } = BB;
                                          return (0, NB.jsx)("option", {
                                            value: IB,
                                            children: ZB
                                          }, IB)
                                        }))
                                      })]
                                    }), (0, NB.jsx)(BJ, {
                                      opts: cB,
                                      onChange: BB => {
                                        CB({
                                          colorGradients: BB
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, NB.jsx)(sB, {
                                  code: QB,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var cJ = ZB(4657),
                            nJ = ZB(1960);

                          function hJ(BB, IB) {
                            return BB ? cJ.d.includes(IB) ? BB.getIngameIconUrl(IB) : BB.getItemIconUrl(IB) : null
                          }

                          function zJ(BB) {
                            var IB, ZB, TB;
                            let {
                              part: JB,
                              assets: GB
                            } = BB;
                            const vB = hJ(GB, JB.icon),
                              kB = null !== (IB = null === (ZB = JB.style) || void 0 === ZB ? void 0 : ZB.fontSize) && void 0 !== IB ? IB : "1.8em",
                              cB = (0, mI.gc)(JB.style);
                            return (0, NB.jsxs)("span", {
                              className: oB()("DocsBloxdTextIcon", {
                                Missing: !vB
                              }),
                              style: {
                                width: kB,
                                height: kB,
                                opacity: null === (TB = JB.style) || void 0 === TB ? void 0 : TB.opacity
                              },
                              title: vB ? void 0 : `No Bloxd icon, item or block is called "${JB.icon}"`,
                              children: [vB && cB && (0, NB.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: cB,
                                  maskImage: `url("${vB}")`,
                                  WebkitMaskImage: `url("${vB}")`
                                }
                              }), vB ? (0, NB.jsx)("img", {
                                src: vB,
                                alt: "",
                                className: oB()({
                                  Tinted: cB
                                })
                              }) : (0, NB.jsx)(qB, {
                                name: "image"
                              })]
                            })
                          }

                          function FJ(BB) {
                            let {
                              parts: IB,
                              className: ZB
                            } = BB;
                            const TB = WT(),
                              JB = [];
                            let GB = [];
                            const vB = BB => {
                              GB.length > 0 && (JB.push((0, NB.jsx)(nJ.e, {
                                text: GB
                              }, `run-${BB}`)), GB = [])
                            };
                            return IB.forEach(((BB, IB) => {
                              "icon" !== fI(BB) || LI(BB.icon) ? GB.push(BB) : (vB(IB), JB.push((0, NB.jsx)(zJ, {
                                part: BB,
                                assets: TB
                              }, `icon-${IB}`)))
                            })), vB(IB.length), (0, NB.jsx)("div", {
                              className: oB()("DocsStyledTextPreview", ZB),
                              children: JB
                            })
                          }
                          const NJ = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let gJ = null;

                          function qJ(BB) {
                            if (gJ ??= document.createElement("canvas").getContext("2d"), !gJ) return "#000000";
                            gJ.fillStyle = "#000000", gJ.fillStyle = BB;
                            const IB = gJ.fillStyle;
                            return IB.startsWith("#") ? IB : "#000000"
                          }

                          function yJ(BB) {
                            let {
                              value: IB,
                              label: ZB,
                              onChange: TB
                            } = BB;
                            return (0, NB.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, NB.jsx)("input", {
                                type: "color",
                                value: qJ(IB),
                                "aria-label": `${ZB} picker`,
                                onChange: BB => {
                                  TB(BB.target.value)
                                }
                              }), (0, NB.jsx)("input", {
                                type: "text",
                                value: IB,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ZB,
                                spellCheck: !1,
                                onChange: BB => {
                                  TB(BB.target.value)
                                }
                              })]
                            })
                          }

                          function UJ(BB) {
                            let {
                              value: IB,
                              fontAwesomeIcons: ZB,
                              onChange: JB
                            } = BB;
                            const GB = WT(),
                              [vB, kB] = (0, TB.useState)(LI(IB) ? "fontAwesome" : "bloxd"),
                              [cB, nB] = (0, TB.useState)(""),
                              hB = cB.trim().toLowerCase(),
                              zB = "bloxd" === vB ? cJ.d : ZB,
                              FB = hB ? zB.filter((BB => BB.toLowerCase().includes(hB))) : zB;
                            return (0, NB.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, NB.jsx)("input", {
                                type: "text",
                                value: IB,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: BB => {
                                  JB(BB.target.value)
                                }
                              }), (0, NB.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, NB.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((BB => (0, NB.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": vB === BB,
                                    className: oB()("DocsVariantChip", {
                                      Active: vB === BB
                                    }),
                                    onClick: () => {
                                      kB(BB)
                                    },
                                    children: "bloxd" === BB ? `Bloxd icons (${cJ.d.length})` : `Font Awesome (${ZB.length})`
                                  }, BB))), (0, NB.jsx)("input", {
                                    type: "search",
                                    value: cB,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: BB => {
                                      nB(BB.target.value)
                                    }
                                  })
                                ]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [FB.map((BB => {
                                  const ZB = "bloxd" === vB ? hJ(GB, BB) : null;
                                  return (0, NB.jsx)("button", {
                                    type: "button",
                                    title: BB,
                                    "aria-label": BB,
                                    "aria-pressed": BB === IB,
                                    className: oB()("DocsIconPickerOption", {
                                      Active: BB === IB
                                    }),
                                    onClick: () => {
                                      JB(BB)
                                    },
                                    children: "fontAwesome" === vB ? (0, NB.jsx)(dZ.d, {
                                      name: BB
                                    }) : ZB ? (0, NB.jsx)("img", {
                                      src: ZB,
                                      alt: ""
                                    }) : (0, NB.jsx)(qB, {
                                      name: "image"
                                    })
                                  }, BB)
                                })), 0 === FB.length && (0, NB.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", cB, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function WJ(BB) {
                            let {
                              property: IB,
                              value: ZB,
                              fontAwesomeIcons: TB,
                              onChange: JB
                            } = BB;
                            const {
                              field: oB,
                              label: GB
                            } = IB, vB = BB => "" !== BB || IB.isRequired ? BB : void 0;
                            switch (oB.kind) {
                              case "text":
                                return oB.multiline ? (0, NB.jsx)("textarea", {
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  rows: 2,
                                  "aria-label": GB,
                                  onChange: BB => {
                                    JB(BB.target.value)
                                  }
                                }) : (0, NB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  "aria-label": GB,
                                  onChange: BB => {
                                    JB(vB(BB.target.value))
                                  }
                                });
                              case "size":
                                return (0, NB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  placeholder: IB.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": GB,
                                  spellCheck: !1,
                                  onChange: BB => {
                                    JB(vB(BB.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, NB.jsx)(yJ, {
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  label: GB,
                                  onChange: BB => {
                                    JB(vB(BB))
                                  }
                                });
                              case "colours": {
                                const BB = Array.isArray(ZB) ? ZB : [],
                                  IB = BB => {
                                    JB(BB.length > 0 ? BB : void 0)
                                  };
                                return (0, NB.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [BB.map(((ZB, TB) => (0, NB.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, NB.jsx)(yJ, {
                                      value: ZB,
                                      label: `${GB} ${TB+1}`,
                                      onChange: ZB => {
                                        IB(BB.map(((BB, IB) => IB === TB ? ZB : BB)))
                                      }
                                    }), (0, NB.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${TB+1}`,
                                      onClick: () => {
                                        IB(BB.filter(((BB, IB) => IB !== TB)))
                                      },
                                      children: (0, NB.jsx)(qB, {
                                        name: "cross"
                                      })
                                    })]
                                  }, TB))), (0, NB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ZB;
                                      IB([...BB, null !== (ZB = BB.at(-1)) && void 0 !== ZB ? ZB : "#ffffff"])
                                    },
                                    children: [(0, NB.jsx)(qB, {
                                      name: "plus"
                                    }), 0 === BB.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var kB;
                                const BB = "number" === typeof ZB ? ZB : Number(null !== (kB = IB.defaultText) && void 0 !== kB ? kB : 0);
                                return (0, NB.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, NB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: BB,
                                    "aria-label": GB,
                                    onChange: BB => {
                                      JB(Number(BB.target.value))
                                    }
                                  }), (0, NB.jsx)("output", {
                                    children: BB.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, NB.jsxs)("select", {
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  "aria-label": GB,
                                  onChange: BB => {
                                    JB(vB(BB.target.value))
                                  },
                                  children: [!IB.isRequired && (0, NB.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", IB.defaultText, ")"]
                                  }), oB.options.map((BB => (0, NB.jsx)("option", {
                                    value: BB,
                                    children: BB
                                  }, BB)))]
                                });
                              case "icon":
                                return (0, NB.jsx)(UJ, {
                                  value: String(null !== ZB && void 0 !== ZB ? ZB : ""),
                                  fontAwesomeIcons: TB,
                                  onChange: JB
                                })
                            }
                          }

                          function dJ(BB) {
                            let IB;
                            try {
                              IB = JSON.parse(BB)
                            } catch (ZB) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ZB.message}`
                              }
                            }
                            return ZZ(IB) ? {
                              part: IB,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function CJ(BB) {
                            let {
                              parts: IB,
                              index: ZB,
                              fontAwesomeIcons: JB,
                              onChange: oB,
                              nH: GB,
                              onClose: vB
                            } = BB;
                            const kB = (0, TB.useContext)(NI),
                              nB = (0, TB.useRef)(null),
                              hB = IB[ZB],
                              zB = fI(hB),
                              [FB, gB] = (0, TB.useState)((() => JSON.stringify(hB, null, 2))),
                              yB = (0, TB.useMemo)((() => "other" === zB ? dJ(FB).error : null), [zB, FB]);
                            (0, TB.useEffect)((() => {
                              var BB;
                              null === (BB = nB.current) || void 0 === BB || BB.focus()
                            }), []);
                            const UB = (0, NB.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && vB()
                              },
                              children: (0, NB.jsxs)("div", {
                                ref: nB,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ZB+1}: ${eI[zB]}`,
                                tabIndex: -1,
                                onKeyDown: BB => {
                                  "Escape" === BB.key ? (BB.stopPropagation(), vB()) : "Tab" === BB.key && nB.current && function(BB, IB) {
                                    const ZB = Array.from(BB.querySelectorAll(pI)),
                                      TB = ZB[0],
                                      JB = ZB.at(-1);
                                    if (!TB || !JB) return;
                                    const oB = document.activeElement;
                                    !IB.shiftKey || oB !== TB && oB !== BB ? IB.shiftKey || oB !== JB || (IB.preventDefault(), TB.focus()) : (IB.preventDefault(), JB.focus())
                                  }(nB.current, BB)
                                },
                                children: [(0, NB.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, NB.jsxs)("div", {
                                    children: [(0, NB.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ZB + 1]
                                    }), (0, NB.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: eI[zB]
                                    })]
                                  }), (0, NB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: vB,
                                    children: (0, NB.jsx)(qB, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, NB.jsx)(FJ, {
                                  parts: IB,
                                  className: "DocsTextDialogPreview"
                                }), (0, NB.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === zB ? (0, NB.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, NB.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, NB.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: FB,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: BB => {
                                        gB(BB.target.value);
                                        const IB = dJ(BB.target.value);
                                        null !== IB.part && oB(IB.part)
                                      }
                                    }), yB && (0, NB.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: yB
                                    })]
                                  }) : AI[zB].map((BB => {
                                    const IB = bI(hB, BB.path),
                                      ZB = BB.isRequired ? JSON.stringify(EI(hB, BB.path)) === JSON.stringify(hB) : void 0 === IB;
                                    return (0, NB.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, NB.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, NB.jsx)("span", {
                                          children: BB.label
                                        }), (0, NB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ZB,
                                          "aria-label": `Reset ${BB.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            oB(EI(hB, BB.path))
                                          },
                                          children: [(0, NB.jsx)(qB, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, NB.jsx)(WJ, {
                                        property: BB,
                                        value: IB,
                                        fontAwesomeIcons: JB,
                                        onChange: IB => {
                                          oB(xI(hB, BB.path, IB))
                                        }
                                      }), !BB.isRequired && (0, NB.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", BB.defaultText]
                                      })]
                                    }, BB.path.join("."))
                                  }))
                                }), (0, NB.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, NB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: GB,
                                    children: [(0, NB.jsx)(qB, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, NB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: vB,
                                    children: "Done"
                                  })]
                                }), (0, NB.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: NJ.map((BB => (0, NB.jsx)("option", {
                                    value: BB
                                  }, BB)))
                                })]
                              })
                            });
                            return kB ? (0, cB.createPortal)(UB, kB) : UB
                          }
                          const QJ = [{
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
                            sJ = Object.keys(uI);

                          function wJ(BB) {
                            let {
                              fontAwesomeIcons: IB
                            } = BB;
                            const [ZB, JB] = (0, TB.useState)(QJ[0].parts), [GB, vB] = (0, TB.useState)((() => SI(QJ[0].parts))), [kB, cB] = (0, TB.useState)(null), [nB, hB] = (0, TB.useState)(!1), [zB, FB] = (0, TB.useState)(null), [gB, yB] = (0, TB.useState)(!1), [UB, WB] = (0, TB.useState)(null), dB = (0, TB.useRef)(null), CB = SI(ZB);
                            (0, TB.useLayoutEffect)((() => {
                              var BB;
                              if (!UB) return;
                              const IB = BB => {
                                  var IB;
                                  return null === (IB = dB.current) || void 0 === IB ? void 0 : IB.querySelector(`[data-focus-key="${BB}"]`)
                                },
                                ZB = IB(UB.key);
                              null === (BB = ZB && !ZB.disabled ? ZB : IB(UB.fallback)) || void 0 === BB || BB.focus(), WB(null)
                            }), [UB]);
                            const QB = BB => {
                                JB(BB), vB(SI(BB)), cB(null)
                              },
                              wB = BB => {
                                QB(ZB.filter(((IB, ZB) => ZB !== BB))), WB({
                                  key: `edit-${Math.min(BB,ZB.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              OB = (BB, IB) => {
                                const TB = [...ZB],
                                  [JB] = TB.splice(BB, 1);
                                TB.splice(BB + IB, 0, JB), QB(TB);
                                WB({
                                  key: `${IB<0?"up":"down"}-${BB+IB}`,
                                  fallback: `edit-${BB+IB}`
                                })
                              };
                            return (0, NB.jsxs)("section", {
                              ref: dB,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, NB.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, NB.jsxs)("div", {
                                  children: [(0, NB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, NB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, NB.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: QJ.map((BB => (0, NB.jsx)("button", {
                                  type: "button",
                                  className: oB()("DocsVariantChip", {
                                    Active: CB === SI(BB.parts)
                                  }),
                                  onClick: () => {
                                    QB(BB.parts)
                                  },
                                  children: BB.label
                                }, BB.label)))
                              }), (0, NB.jsx)(FJ, {
                                parts: ZB,
                                className: "DocsTextEditorPreview"
                              }), (0, NB.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, NB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, NB.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, NB.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ZB.map(((BB, IB) => {
                                      const TB = fI(BB);
                                      return (0, NB.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, NB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${IB}`,
                                          "aria-label": `Edit part ${IB+1}, ${eI[TB]}`,
                                          onClick: () => {
                                            FB(IB)
                                          },
                                          children: [(0, NB.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: eI[TB]
                                          }), (0, NB.jsx)(FJ, {
                                            parts: [BB],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== TB && (0, NB.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: DI(BB)
                                          })]
                                        }), (0, NB.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, NB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${IB+1} up`,
                                            "data-focus-key": `up-${IB}`,
                                            disabled: 0 === IB,
                                            onClick: () => {
                                              OB(IB, -1)
                                            },
                                            children: (0, NB.jsx)(qB, {
                                              name: "chevron-up"
                                            })
                                          }), (0, NB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${IB+1} down`,
                                            "data-focus-key": `down-${IB}`,
                                            disabled: IB === ZB.length - 1,
                                            onClick: () => {
                                              OB(IB, 1)
                                            },
                                            children: (0, NB.jsx)(qB, {
                                              name: "chevron-down"
                                            })
                                          }), (0, NB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${IB+1}`,
                                            onClick: () => {
                                              wB(IB)
                                            },
                                            children: (0, NB.jsx)(qB, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, IB)
                                    })), 0 === ZB.length && (0, NB.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, NB.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: BB => {
                                      "Escape" === BB.key && gB && (BB.stopPropagation(), yB(!1), WB({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, NB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": gB,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        yB(!gB)
                                      },
                                      children: [(0, NB.jsx)(qB, {
                                        name: "plus"
                                      }), "Add a part", (0, NB.jsx)(qB, {
                                        name: gB ? "chevron-up" : "chevron-down"
                                      })]
                                    }), gB && (0, NB.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: sJ.map((BB => (0, NB.jsx)("li", {
                                        children: (0, NB.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (BB => {
                                              QB([...ZB, uI[BB]]), yB(!1), FB(ZB.length)
                                            })(BB)
                                          },
                                          children: eI[BB]
                                        })
                                      }, BB)))
                                    })]
                                  })]
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, NB.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, NB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": nB,
                                      onClick: () => {
                                        hB(!nB)
                                      },
                                      children: [(0, NB.jsx)(qB, {
                                        name: nB ? "check" : "pencil"
                                      }), nB ? "Done" : "Edit"]
                                    })]
                                  }), nB ? (0, NB.jsxs)(NB.Fragment, {
                                    children: [(0, NB.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: GB,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: BB => {
                                        vB(BB.target.value);
                                        const IB = TZ(BB.target.value);
                                        cB(IB.error), IB.parts && JB(IB.parts)
                                      }
                                    }), kB && (0, NB.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: kB
                                    })]
                                  }) : (0, NB.jsx)(sB, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${CB})`
                                  })]
                                })]
                              }), null !== zB && zB < ZB.length && (0, NB.jsx)(CJ, {
                                parts: ZB,
                                index: zB,
                                fontAwesomeIcons: IB,
                                onChange: BB => {
                                  ((BB, IB) => {
                                    QB(ZB.map(((ZB, TB) => TB === BB ? IB : ZB)))
                                  })(zB, BB)
                                },
                                nH: () => {
                                  wB(zB), FB(null)
                                },
                                onClose: () => {
                                  FB(null), WB({
                                    key: `edit-${zB}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var OJ = ZB(5016),
                            YJ = ZB(5001),
                            iJ = ZB(5011),
                            pJ = ZB(5019);
                          const aJ = 40,
                            HJ = 800,
                            MJ = 150,
                            jJ = 8e3,
                            PJ = 2e3;

                          function RJ(BB, IB) {
                            return 12 * Math.log2(IB / BB)
                          }

                          function rJ(BB, IB) {
                            return Math.round(BB * 2 ** (IB / 12) * 10) / 10
                          }

                          function mJ(BB) {
                            return `${BB} ms`
                          }

                          function XJ(BB) {
                            return `${BB} st`
                          }
                          const LJ = [{
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

                          function eJ(BB) {
                            let {
                              synth: IB,
                              onChange: ZB
                            } = BB;
                            const TB = (0, OJ.j)(IB);
                            return (0, NB.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, NB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, NB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, NB.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, NB.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, NB.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: OJ.f.map((BB => (0, NB.jsx)("button", {
                                      type: "button",
                                      className: oB()("DocsVariantChip", {
                                        Active: IB.waveform === BB
                                      }),
                                      "aria-pressed": IB.waveform === BB,
                                      onClick: () => {
                                        ZB({
                                          waveform: BB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  })]
                                }), (0, NB.jsx)(ST, {
                                  label: "Pitch",
                                  min: 0,
                                  max: RJ(aJ, HJ),
                                  step: .1,
                                  value: RJ(aJ, IB.pitchHz),
                                  format: () => `${IB.pitchHz} Hz`,
                                  onChange: BB => {
                                    ZB({
                                      pitchHz: rJ(aJ, BB)
                                    })
                                  }
                                }), (0, NB.jsx)(ST, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: IB.syllableMs,
                                  format: mJ,
                                  onChange: BB => {
                                    ZB({
                                      syllableMs: BB
                                    })
                                  }
                                }), (0, NB.jsx)(ST, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: IB.volume,
                                  onChange: BB => {
                                    ZB({
                                      volume: BB
                                    })
                                  }
                                })]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, NB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, NB.jsx)(ST, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: IB.durationMs,
                                  format: mJ,
                                  onChange: BB => {
                                    ZB({
                                      durationMs: BB
                                    })
                                  }
                                }), (0, NB.jsx)(ST, {
                                  label: "Fade in",
                                  min: 0,
                                  max: TB.durationMs,
                                  step: 1,
                                  value: TB.attackMs,
                                  format: mJ,
                                  onChange: BB => {
                                    ZB({
                                      attackMs: BB
                                    })
                                  }
                                }), (0, NB.jsx)(ST, {
                                  label: "Fade out",
                                  min: 0,
                                  max: TB.durationMs - TB.attackMs,
                                  step: 1,
                                  value: TB.releaseMs,
                                  format: mJ,
                                  onChange: BB => {
                                    ZB({
                                      releaseMs: BB
                                    })
                                  }
                                }), (0, NB.jsx)(ST, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: IB.glideSemitones,
                                  format: XJ,
                                  onChange: BB => {
                                    ZB({
                                      glideSemitones: BB
                                    })
                                  }
                                }), (0, NB.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, NB.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== IB.lowpassHz,
                                    onChange: BB => {
                                      ZB({
                                        lowpassHz: BB.target.checked ? PJ : null
                                      })
                                    }
                                  }), (0, NB.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== IB.lowpassHz && (0, NB.jsx)(ST, {
                                  label: "Filter",
                                  min: 0,
                                  max: RJ(MJ, jJ),
                                  step: .1,
                                  value: RJ(MJ, IB.lowpassHz),
                                  format: () => `${IB.lowpassHz} Hz`,
                                  onChange: BB => {
                                    ZB({
                                      lowpassHz: rJ(MJ, BB)
                                    })
                                  }
                                })]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, NB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), LJ.map((BB => {
                                  let {
                                    key: TB,
                                    label: JB,
                                    max: oB
                                  } = BB;
                                  return (0, NB.jsx)(ST, {
                                    label: JB,
                                    min: 0,
                                    max: oB,
                                    step: .1,
                                    value: IB.intonation[TB],
                                    format: XJ,
                                    onChange: BB => {
                                      ZB({
                                        intonation: {
                                          ...IB.intonation,
                                          [TB]: BB
                                        }
                                      })
                                    }
                                  }, TB)
                                }))]
                              })]
                            })
                          }
                          const uJ = Object.keys(OJ.i),
                            fJ = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function lJ(BB) {
                            var IB;
                            const ZB = JSON.stringify((0, OJ.j)(BB));
                            return null !== (IB = uJ.find((BB => JSON.stringify((0, OJ.j)(OJ.i[BB])) === ZB))) && void 0 !== IB ? IB : null
                          }

                          function AJ(BB) {
                            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof BB || null === BB) return JSON.stringify(BB);
                            return `{\n${Object.entries(BB).map((BB=>{let[ZB,TB]=BB;return`${IB}    ${ZB}: ${AJ(TB,`${IB}    `)},`})).join("\n")}\n${IB}}`
                          }

                          function tJ(BB, IB, ZB) {
                            const TB = lJ(BB),
                              JB = [`    line: ${JSON.stringify(IB)},`];
                            return ZB && JB.push(`    speakerName: ${JSON.stringify(ZB)},`), JB.push("    voice,"), `const voice = ${TB?JSON.stringify(TB):AJ((0,OJ.j)(BB))}\n\napi.setClientOption(playerId, "dialogue", {\n${JB.join("\n")}\n})`
                          }
                          const bJ = 400,
                            xJ = 90;
                          let EJ = null;

                          function DJ(BB, IB, ZB) {
                            return EJ ??= new AudioContext, EJ.resume(), (0, pJ.d)(EJ, EJ.destination, BB, IB, ZB, (() => {}))
                          }

                          function KJ() {
                            const [BB, IB] = (0, TB.useState)(OJ.i.regular), [ZB, JB] = (0, TB.useState)(fJ[0]), [GB, vB] = (0, TB.useState)("Innkeeper"), [kB, cB] = (0, TB.useState)(0), nB = nT((BB => BB.volume)), hB = (0, TB.useRef)(null), zB = (0, TB.useRef)(0), FB = (0, TB.useRef)(0), gB = () => {
                              var BB;
                              null === (BB = hB.current) || void 0 === BB || BB.call(hB), hB.current = null
                            };
                            (0, TB.useEffect)((() => () => {
                              var BB;
                              null === (BB = hB.current) || void 0 === BB || BB.call(hB), window.clearTimeout(zB.current)
                            }), []);
                            const yB = (0, TB.useMemo)((() => ({
                                line: ZB,
                                speakerName: GB || void 0,
                                voice: BB
                              })), [ZB, GB, BB]),
                              UB = (0, TB.useRef)(yB);
                            UB.current = yB;
                            const dB = lJ(BB),
                              CB = BB => {
                                window.clearTimeout(zB.current), gB();
                                const {
                                  plan: IB,
                                  synth: ZB
                                } = (0, iJ.c)(BB);
                                ZB && (hB.current = DJ(ZB, IB.blips, nB)), cB((BB => BB + 1))
                              },
                              QB = tJ(BB, ZB, GB);
                            return (0, NB.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, NB.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, NB.jsxs)("div", {
                                  children: [(0, NB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, NB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, NB.jsx)(WB, {
                                  text: QB,
                                  label: "Copy code"
                                })]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [uJ.map((BB => (0, NB.jsx)("button", {
                                  type: "button",
                                  className: oB()("DocsVariantChip", {
                                    Active: dB === BB
                                  }),
                                  "aria-pressed": dB === BB,
                                  onClick: () => {
                                    (BB => {
                                      const ZB = OJ.i[BB];
                                      IB(ZB), CB({
                                        ...yB,
                                        voice: ZB
                                      })
                                    })(BB)
                                  },
                                  children: BB
                                }, BB))), !dB && (0, NB.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, NB.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, NB.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, NB.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, NB.jsx)(YJ.c, {
                                      display: yB
                                    }, kB)
                                  }), (0, NB.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: BB => {
                                      BB.preventDefault(), CB(yB)
                                    },
                                    children: [(0, NB.jsx)("input", {
                                      value: ZB,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: BB => {
                                        JB(BB.target.value)
                                      }
                                    }), (0, NB.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, NB.jsx)(qB, {
                                        name: "play"
                                      }), (0, NB.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, NB.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: fJ.map((BB => (0, NB.jsx)("button", {
                                      type: "button",
                                      className: oB()("DocsVariantChip", {
                                        Active: ZB === BB
                                      }),
                                      onClick: () => {
                                        var IB;
                                        JB(IB = BB), CB({
                                          ...yB,
                                          line: IB
                                        })
                                      },
                                      children: BB
                                    }, BB)))
                                  }), (0, NB.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, NB.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, NB.jsx)("input", {
                                      value: GB,
                                      placeholder: "No name",
                                      onChange: BB => {
                                        vB(BB.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, NB.jsx)(eJ, {
                                  synth: BB,
                                  onChange: ZB => {
                                    const TB = {
                                      ...BB,
                                      ...ZB
                                    };
                                    IB(TB);
                                    const JB = {
                                        ...yB,
                                        voice: TB
                                      },
                                      oB = performance.now();
                                    if (oB - FB.current >= xJ) {
                                      FB.current = oB, gB();
                                      const BB = (0, iJ.c)(JB).plan.blips[0];
                                      BB && (hB.current = DJ((0, OJ.j)(TB), [{
                                        ...BB,
                                        atMs: 0
                                      }], nB))
                                    }
                                    window.clearTimeout(zB.current), zB.current = window.setTimeout((() => {
                                      CB(UB.current)
                                    }), bJ)
                                  }
                                })]
                              }), (0, NB.jsx)(sB, {
                                code: QB,
                                lang: "ts"
                              })]
                            })
                          }
                          var VJ = ZB(5036);
                          const SJ = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Bo = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Io = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Bo}`, "g"), VJ.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, VJ.o]
                            ];

                          function Zo(BB) {
                            return `${BB.pageId}#${BB.anchor}`
                          }
                          let To, Jo, oo;

                          function Go(BB) {
                            const IB = (0, wB.g)(BB),
                              ZB = new Set;
                            for (const [, , TB] of IB.matchAll(wB.c)) {
                              const BB = TB.startsWith("#") ? fB(TB) : null,
                                IB = BB ? Zo({
                                  pageId: BB.page.id,
                                  anchor: BB.anchor
                                }) : null;
                              null !== IB && (To || (To = new Set(rB.flatMap((BB => pB(BB.layout) ? eB(BB).sections.map((IB => Zo({
                                pageId: BB.id,
                                anchor: IB.heading.anchor
                              }))) : [])))), To).has(IB) && ZB.add(IB)
                            }
                            for (const [, , TB] of IB.matchAll(SJ)) {
                              const BB = zI(TB);
                              BB && ZB.add(Zo(BB))
                            }
                            return ZB
                          }

                          function vo(BB, IB) {
                            const ZB = new Set,
                              TB = function(BB) {
                                return BB.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(BB);
                            for (const [, JB] of TB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ZB.add(JB);
                            for (const [JB, oB] of Io)
                              for (const [, BB] of(0, VJ.f)(TB, JB, oB)) IB.has(BB) && ZB.add(BB);
                            return ZB
                          }

                          function ko(BB, IB, ZB, TB) {
                            const JB = BB.get(IB);
                            JB ? !TB && JB.some((BB => BB.pageId === ZB.pageId)) || JB.push(ZB) : BB.set(IB, [ZB])
                          }
                          const co = /^[A-Za-z_$][\w$]*$/;

                          function no(BB) {
                            return co.test(BB.name) ? BB.name : "options"
                          }

                          function ho(BB, IB) {
                            const ZB = BB.params.map(no).join(", ");
                            return IB ? `${BB.name} = (${ZB}) => {\n\t\n}` : `api.${BB.name}(${ZB})`
                          }

                          function zo(BB) {
                            let {
                              method: IB,
                              isCallback: ZB
                            } = BB;
                            return (0, NB.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, NB.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ZB ? (0, NB.jsxs)(NB.Fragment, {
                                  children: [(0, NB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: IB.name
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, NB.jsxs)(NB.Fragment, {
                                  children: [(0, NB.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: IB.name
                                  }), (0, NB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), IB.params.map(((BB, ZB) => (0, NB.jsxs)(TB.Fragment, {
                                  children: [ZB > 0 && (0, NB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, NB.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${IB.name}-${no(BB)}`,
                                    children: BB.name
                                  })]
                                }, BB.name))), (0, NB.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ZB ? ") => " : ")"
                                }), ZB && !IB.returns && (0, NB.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), IB.returns && IB.returns.type && (0, NB.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ZB && (0, NB.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, NB.jsx)(OI, {
                                  type: IB.returns.type
                                })]
                              })]
                            })
                          }

                          function Fo(BB) {
                            let {
                              title: IB,
                              references: ZB
                            } = BB;
                            const JB = (0, TB.useContext)(FI);
                            return (0, NB.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, NB.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: IB
                              }), ZB.map((BB => (0, NB.jsx)(GB.c, {
                                to: AB(JB, XB(BB.pageId), BB.anchor),
                                children: BB.label
                              }, `${BB.pageId}#${BB.anchor}`)))]
                            })
                          }

                          function No(BB) {
                            var IB, ZB;
                            let {
                              pageId: TB,
                              anchor: JB
                            } = BB;
                            const oB = Zo({
                                pageId: TB,
                                anchor: JB
                              }),
                              GB = null !== (IB = function() {
                                if (!oo) {
                                  oo = new Map;
                                  const TB = new Set(rB.filter((BB => "callbacks" === BB.layout)).flatMap((BB => eB(BB).sections.map((BB => BB.heading.text)))));
                                  for (const JB of rB)
                                    if ("article" === JB.layout || "snippets" === JB.layout)
                                      for (const oB of (0, wB.t)(eB(JB)))
                                        for (const {
                                            code: GB
                                          }
                                          of(0, wB.j)(oB.blocks))
                                          for (const vB of vo(GB, TB)) {
                                            const TB = hI().get(vB);
                                            if (TB) {
                                              var BB, IB, ZB;
                                              const GB = {
                                                pageId: JB.id,
                                                anchor: null !== (BB = null === (IB = oB.heading) || void 0 === IB ? void 0 : IB.anchor) && void 0 !== BB ? BB : "",
                                                label: null !== (ZB = JB.navTitle) && void 0 !== ZB ? ZB : JB.title
                                              };
                                              ko(oo, Zo(TB), GB, !1)
                                            }
                                          }
                                }
                                return oo
                              }().get(oB)) && void 0 !== IB ? IB : [],
                              vB = null !== (ZB = function() {
                                if (!Jo) {
                                  Jo = new Map;
                                  const BB = XB("changelog");
                                  for (const IB of eB(BB).sections) {
                                    const ZB = new Set(IB.blocks.flatMap((BB => [...Go(BB)])));
                                    for (const TB of ZB) {
                                      const ZB = {
                                        pageId: BB.id,
                                        anchor: IB.heading.anchor,
                                        label: IB.heading.text
                                      };
                                      ko(Jo, TB, ZB, !0)
                                    }
                                  }
                                }
                                return Jo
                              }().get(oB)) && void 0 !== ZB ? ZB : [];
                            return 0 === GB.length && 0 === vB.length ? null : (0, NB.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [GB.length > 0 && (0, NB.jsx)(Fo, {
                                title: "Used in",
                                references: GB
                              }), vB.length > 0 && (0, NB.jsx)(Fo, {
                                title: "Changelog",
                                references: vB
                              })]
                            })
                          }

                          function go(BB) {
                            let {
                              method: IB,
                              pageId: ZB,
                              anchor: TB,
                              isCallback: JB
                            } = BB;
                            const oB = JB ? void 0 : vI().get(IB.name),
                              GB = IB.description.length > 0 || null === oB || void 0 === oB || !oB.description ? IB.description : (0, wB.w)(oB.description);
                            return (0, NB.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, NB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, NB.jsx)(cZ, {
                                  level: 2,
                                  text: IB.name,
                                  anchor: TB,
                                  className: "DocsCardTitle"
                                }), (0, NB.jsx)(WB, {
                                  text: ho(IB, JB),
                                  label: JB ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, NB.jsx)(zo, {
                                method: IB,
                                isCallback: JB
                              }), oB && null !== oB.deprecation && (0, NB.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, NB.jsx)("strong", {
                                  children: "Deprecated"
                                }), oB.deprecation && (0, NB.jsxs)(NB.Fragment, {
                                  children: [": ", (0, NB.jsx)(QI, {
                                    text: (vB = oB.deprecation, (0, VJ.s)(vB, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, VJ.l)("`\\w"), (BB => {
                                      let [IB] = BB;
                                      return hI().has(IB) ? `\`${IB}\`` : IB
                                    })))
                                  })]
                                })]
                              }), GB.length > 0 && (0, NB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, NB.jsx)(FZ, {
                                  blocks: GB
                                })
                              }), IB.params.length > 0 && (0, NB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, NB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, NB.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: IB.params.map((BB => (0, NB.jsxs)("div", {
                                    id: `${IB.name}-${no(BB)}`,
                                    className: "DocsParam",
                                    children: [(0, NB.jsxs)("dt", {
                                      children: [(0, NB.jsx)("code", {
                                        className: "DocsParamName",
                                        children: BB.name
                                      }), (0, NB.jsx)(OI, {
                                        type: BB.type
                                      })]
                                    }), BB.description && (0, NB.jsx)("dd", {
                                      children: (0, NB.jsx)(QI, {
                                        text: BB.description
                                      })
                                    })]
                                  }, BB.name)))
                                })]
                              }), IB.returns && (IB.returns.type || IB.returns.description.length > 0) && (0, NB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, NB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [IB.returns.type && (0, NB.jsx)(OI, {
                                    type: IB.returns.type
                                  }), IB.returns.description.length > 0 && (0, NB.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, NB.jsx)(FZ, {
                                      blocks: IB.returns.description
                                    })
                                  })]
                                })]
                              }), (0, NB.jsx)(No, {
                                pageId: ZB,
                                anchor: TB
                              })]
                            });
                            var vB
                          }

                          function qo(BB) {
                            var IB;
                            return null !== BB.defaultValue && "undefined" !== BB.defaultValue ? BB.defaultValue : null !== (IB = BB.example) && void 0 !== IB ? IB : "value"
                          }

                          function yo(BB) {
                            let {
                              setting: IB,
                              pageId: ZB,
                              anchor: TB,
                              setterSnippet: JB
                            } = BB;
                            const oB = null === IB.defaultValue ? null : yI(IB.defaultValue);
                            return (0, NB.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, NB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, NB.jsx)(cZ, {
                                  level: 2,
                                  text: IB.name,
                                  anchor: TB,
                                  className: "DocsCardTitle"
                                }), (0, NB.jsx)(WB, {
                                  text: JB(IB.name, qo(IB)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, NB.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, NB.jsxs)("div", {
                                  children: [(0, NB.jsx)("dt", {
                                    children: "Type"
                                  }), (0, NB.jsx)("dd", {
                                    children: (0, NB.jsx)(OI, {
                                      type: IB.type
                                    })
                                  })]
                                }), null !== IB.defaultValue && (0, NB.jsxs)("div", {
                                  children: [(0, NB.jsx)("dt", {
                                    children: "Default"
                                  }), (0, NB.jsx)("dd", {
                                    children: (0, NB.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [oB && (0, NB.jsx)(UI, {
                                        colour: oB
                                      }), IB.defaultValue]
                                    })
                                  })]
                                }), null !== IB.example && (0, NB.jsxs)("div", {
                                  children: [(0, NB.jsx)("dt", {
                                    children: "Example"
                                  }), (0, NB.jsx)("dd", {
                                    children: (0, NB.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: IB.example
                                    })
                                  })]
                                })]
                              }), IB.description.length > 0 && (0, NB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, NB.jsx)(FZ, {
                                  blocks: IB.description
                                })
                              }), (0, NB.jsx)(No, {
                                pageId: ZB,
                                anchor: TB
                              })]
                            })
                          }

                          function Uo(BB) {
                            let {
                              section: IB
                            } = BB;
                            return (0, NB.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, NB.jsx)(cZ, {
                                level: 2,
                                text: IB.heading.text,
                                anchor: IB.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, NB.jsx)("div", {
                                className: "DocsProse",
                                children: (0, NB.jsx)(FZ, {
                                  blocks: IB.blocks
                                })
                              })]
                            })
                          }

                          function Wo(BB) {
                            let {
                              section: IB
                            } = BB;
                            return (0, NB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, NB.jsx)(cZ, {
                                level: IB.heading.level,
                                text: IB.heading.text,
                                anchor: IB.heading.anchor
                              }), (0, NB.jsx)(FZ, {
                                blocks: IB.blocks
                              })]
                            })
                          }
                          const Co = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Qo(BB) {
                            let {
                              page: IB,
                              section: ZB
                            } = BB;
                            if ("methods" === IB.layout || "callbacks" === IB.layout) return (0, NB.jsx)(go, {
                              method: sZ(ZB),
                              pageId: IB.id,
                              anchor: ZB.heading.anchor,
                              isCallback: "callbacks" === IB.layout
                            });
                            if ("settings" === IB.layout) {
                              const BB = function(BB) {
                                const IB = {
                                  name: BB.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const TB of BB.blocks) {
                                  var ZB;
                                  if (QZ(TB)) continue;
                                  const BB = "paragraph" === TB.kind ? TB.text.match(wZ) : null;
                                  if (!BB) {
                                    IB.description.push(TB);
                                    continue
                                  }
                                  const JB = null !== (ZB = CZ(BB[2])) && void 0 !== ZB ? ZB : BB[2];
                                  "Type" === BB[1] ? IB.type = JB : "Default" === BB[1] ? IB.defaultValue = JB : "" !== JB && (IB.example = JB)
                                }
                                return IB.type ? IB : null
                              }(ZB);
                              if (BB) return (0, NB.jsx)(yo, {
                                setting: BB,
                                pageId: IB.id,
                                anchor: ZB.heading.anchor,
                                setterSnippet: IB.setterSnippet
                              })
                            }
                            return "snippets" === IB.layout ? (0, NB.jsx)(Uo, {
                              section: ZB
                            }) : "changelog" === IB.layout ? (0, NB.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, NB.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, NB.jsx)(cZ, {
                                  level: 2,
                                  text: ZB.heading.text,
                                  anchor: ZB.heading.anchor
                                })
                              }), (0, NB.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, NB.jsx)(FZ, {
                                  blocks: OZ(ZB.blocks)
                                })
                              })]
                            }) : IB.gallery ? (0, NB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, NB.jsx)(cZ, {
                                level: ZB.heading.level,
                                text: ZB.heading.text,
                                anchor: ZB.heading.anchor
                              }), (0, NB.jsx)(YT, {
                                kind: IB.gallery,
                                content: eB(IB),
                                blocks: ZB.blocks
                              })]
                            }) : (0, NB.jsx)(Wo, {
                              section: ZB
                            })
                          }

                          function so(BB) {
                            let {
                              page: IB,
                              onTocChange: ZB
                            } = BB;
                            const JB = eB(IB),
                              [oB, GB] = (0, TB.useState)(""),
                              vB = "article" !== IB.layout,
                              kB = qZ(IB.gallery) ? IB.gallery : null,
                              cB = null !== kB,
                              nB = oB.trim().toLowerCase(),
                              hB = (0, TB.useRef)(null),
                              zB = (0, TB.useCallback)((BB => {
                                var IB;
                                null === (IB = hB.current) || void 0 === IB || IB.preview(BB)
                              }), []),
                              FB = (0, TB.useMemo)((() => {
                                if (!IB.hasParticlePlayground) return [];
                                const BB = aZ(JB.intro).find((BB => "names" === BB.kind && !BB.names.some((BB => null !== LZ(BB.name)))));
                                return "names" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.names.map((BB => BB.name)) : []
                              }), [IB, JB]),
                              gB = (0, TB.useMemo)((() => {
                                if (!IB.hasTextPlayground) return [];
                                const BB = JB.sections.flatMap((BB => BB.blocks.flatMap((BB => {
                                  var IB;
                                  return (null !== (IB = pZ(BB)) && void 0 !== IB ? IB : []).flatMap((BB => LI(BB.name) ? [BB.name] : []))
                                }))));
                                return [...new Set(BB)]
                              }), [IB, JB]),
                              qB = (0, TB.useMemo)((() => nB ? JB.sections.filter((BB => function(BB, IB) {
                                return !!BB.heading.text.toLowerCase().includes(IB) || BB.blocks.some((BB => (0, wB.g)(BB).toLowerCase().includes(IB)))
                              }(BB, nB))) : JB.sections), [JB, nB]),
                              yB = (0, TB.useMemo)((() => function(BB, IB) {
                                return "article" !== BB.layout ? IB.map((BB => ({
                                  anchor: BB.heading.anchor,
                                  text: BB.heading.text,
                                  level: 2
                                }))) : IB.flatMap((BB => {
                                  const IB = BB.blocks.flatMap((BB => "heading" === BB.kind && 3 === BB.level ? [{
                                    anchor: BB.anchor,
                                    text: BB.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: BB.heading.anchor,
                                    text: BB.heading.text,
                                    level: 2
                                  }, ...IB]
                                }))
                              }(IB, qB)), [IB, qB]);
                            return (0, TB.useEffect)((() => {
                              ZB(yB)
                            }), [yB, ZB]), (0, NB.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, NB.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, NB.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: JB.title || IB.title
                                }), (0, NB.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: IB.summary
                                }), (0, NB.jsx)(ET, {
                                  page: IB
                                }), vB && (0, NB.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, NB.jsxs)("span", {
                                    children: [(0, NB.jsx)("strong", {
                                      children: JB.sections.length
                                    }), " ", Co[IB.layout]]
                                  })
                                })]
                              }), "" === IB.slug && (0, NB.jsx)(pT, {}), kB && (0, NB.jsx)(jT, {
                                kind: kB
                              }, kB), IB.hasParticlePlayground && (0, NB.jsx)(kJ, {
                                ref: hB,
                                textures: FB
                              }), !cB && JB.intro.length > 0 && (0, NB.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: IB.gallery ? (0, NB.jsx)(yT.Provider, {
                                  value: IB.hasParticlePlayground ? zB : null,
                                  children: (0, NB.jsx)(YT, {
                                    kind: IB.gallery,
                                    content: JB,
                                    blocks: JB.intro
                                  })
                                }) : (0, NB.jsx)(FZ, {
                                  blocks: OZ(JB.intro)
                                })
                              }), IB.hasTextPlayground && (0, NB.jsx)(wJ, {
                                fontAwesomeIcons: gB
                              }), IB.hasVoicePlayground && (0, NB.jsx)(KJ, {}), IB.childPageIds && (0, NB.jsx)(pT, {
                                cards: IB.childPageIds.map((BB => ({
                                  pageId: BB
                                }))),
                                label: IB.title
                              }), vB && (0, NB.jsx)(WZ, {
                                className: "DocsFilterBar",
                                value: oB,
                                placeholder: `Filter ${JB.sections.length} ${Co[IB.layout]}\u2026`,
                                label: `Filter ${Co[IB.layout]}`,
                                onChange: GB,
                                count: nB ? {
                                  visible: qB.length,
                                  total: JB.sections.length
                                } : null
                              }), !cB && (0, NB.jsxs)("div", {
                                className: `DocsSections Layout-${IB.layout}`,
                                children: [qB.map((BB => (0, NB.jsx)(Qo, {
                                  page: IB,
                                  section: BB
                                }, BB.heading.anchor))), 0 === qB.length && (0, NB.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Co[IB.layout], " match \u201c", oB, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const wo = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Oo(BB) {
                            let {
                              entry: IB,
                              isActive: ZB,
                              onNavigate: TB,
                              label: JB,
                              children: GB
                            } = BB;
                            return (0, NB.jsx)("a", {
                              href: `#${IB.anchor}`,
                              "aria-label": JB,
                              className: oB()(`Level${IB.level}`, {
                                Active: ZB
                              }),
                              "aria-current": ZB ? "location" : void 0,
                              onClick: BB => {
                                BB.preventDefault(), TB(IB.anchor)
                              },
                              children: GB
                            })
                          }

                          function Yo(BB) {
                            let {
                              toc: IB,
                              activeAnchor: ZB,
                              onNavigate: JB
                            } = BB;
                            const GB = Math.max(0, IB.findIndex((BB => BB.anchor === ZB))),
                              vB = (0, TB.useRef)(null),
                              kB = (0, TB.useRef)(!1);
                            (0, TB.useEffect)((() => {
                              var BB, ZB;
                              const TB = null === (BB = vB.current) || void 0 === BB ? void 0 : BB.closest(".DocsToc"),
                                JB = null === (ZB = vB.current) || void 0 === ZB ? void 0 : ZB.querySelector(".DocsTimelineNotch.Active");
                              if (!TB || !JB) return;
                              let oB = 0;
                              if (GB === IB.length - 1) oB = TB.scrollHeight;
                              else if (GB > 0) {
                                const BB = TB.getBoundingClientRect(),
                                  IB = JB.getBoundingClientRect();
                                oB = TB.scrollTop + IB.top + IB.height / 2 - (BB.top + TB.clientHeight / 2)
                              }
                              TB.scrollTo({
                                top: oB,
                                behavior: kB.current ? "smooth" : "auto"
                              }), kB.current = !0
                            }), [GB, IB.length]);
                            const cB = [];
                            return IB.forEach(((BB, IB) => {
                              var ZB, TB, JB;
                              const oB = function(BB) {
                                  const IB = BB.trim().match(wo);
                                  return IB ? {
                                    day: IB[1],
                                    month: `${IB[2]} ${IB[3]}`
                                  } : null
                                }(BB.text),
                                GB = null !== (ZB = null === oB || void 0 === oB ? void 0 : oB.month) && void 0 !== ZB ? ZB : null;
                              null !== GB && (null === (TB = cB.at(-1)) || void 0 === TB ? void 0 : TB.month) === GB || cB.push({
                                month: GB,
                                entries: []
                              }), cB.at(-1).entries.push({
                                entry: BB,
                                day: null !== (JB = null === oB || void 0 === oB ? void 0 : oB.day) && void 0 !== JB ? JB : null,
                                index: IB
                              })
                            })), (0, NB.jsx)("ol", {
                              ref: vB,
                              className: "DocsTimeline",
                              children: cB.map((BB => {
                                let {
                                  month: IB,
                                  entries: ZB
                                } = BB;
                                return (0, NB.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [IB && (0, NB.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: IB
                                  }), (0, NB.jsx)("ol", {
                                    children: ZB.map((BB => {
                                      let {
                                        entry: IB,
                                        day: ZB,
                                        index: TB
                                      } = BB;
                                      return (0, NB.jsx)("li", {
                                        className: oB()("DocsTimelineNotch", {
                                          Passed: TB < GB,
                                          Active: TB === GB
                                        }),
                                        children: (0, NB.jsx)(Oo, {
                                          entry: IB,
                                          isActive: TB === GB,
                                          onNavigate: JB,
                                          label: IB.text,
                                          children: (0, NB.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ZB && void 0 !== ZB ? ZB : IB.text
                                          })
                                        })
                                      }, IB.anchor)
                                    }))
                                  })]
                                }, ZB[0].entry.anchor)
                              }))
                            })
                          }

                          function io(BB) {
                            let {
                              isChangelog: IB,
                              toc: ZB,
                              activeAnchor: TB,
                              onNavigate: JB
                            } = BB;
                            return 0 === ZB.length ? null : (0, NB.jsxs)(NB.Fragment, {
                              children: [(0, NB.jsx)("div", {
                                className: "DocsTocTitle",
                                children: IB ? "Updates" : "On this page"
                              }), IB ? (0, NB.jsx)(Yo, {
                                toc: ZB,
                                activeAnchor: TB,
                                onNavigate: JB
                              }) : (0, NB.jsx)("ul", {
                                children: ZB.map((BB => (0, NB.jsx)("li", {
                                  children: (0, NB.jsx)(Oo, {
                                    entry: BB,
                                    isActive: BB.anchor === TB,
                                    onNavigate: JB,
                                    children: BB.text.replace(/`/g, "")
                                  })
                                }, BB.anchor)))
                              })]
                            })
                          }
                          const po = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            ao = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Ho = 20,
                            Mo = 10,
                            jo = 40,
                            Po = 120;
                          let Ro;

                          function ro(BB) {
                            const IB = BB.gallery;
                            if (!IB) return [];
                            if (qZ(IB)) return function(BB) {
                              return UZ(BB).entries.map((BB => BB.name))
                            }(IB).map((ZB => ({
                              page: BB,
                              anchor: MZ(IB, ZB),
                              title: ZB,
                              kind: ao[IB],
                              text: "",
                              listedUnder: BB.title
                            })));
                            const ZB = eB(BB);
                            return (0, wB.t)(ZB).flatMap((TB => {
                              const JB = TB.heading ? `${BB.title} \u203a ${TB.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : BB.title;
                              return PZ(IB, ZB, TB.blocks).flatMap((ZB => "names" !== ZB.kind ? [] : ZB.names.map((TB => {
                                const oB = ZB.isSongs ? "Song" : ao[IB];
                                return {
                                  page: BB,
                                  anchor: TB.anchor,
                                  title: TB.name,
                                  kind: oB,
                                  text: "",
                                  listedUnder: JB
                                }
                              }))))
                            }))
                          }

                          function mo(BB, IB, ZB) {
                            const TB = BB.title.toLowerCase();
                            let JB = 0;
                            if (TB === IB) JB = 100;
                            else if (TB.startsWith(IB)) JB = 80;
                            else if (TB.includes(IB)) JB = 60;
                            else if (ZB.every((BB => TB.includes(BB)))) JB = 45;
                            else {
                              if (!BB.text.toLowerCase().includes(IB)) return 0;
                              JB = 20
                            }
                            return JB - Math.min(TB.length / 10, 9) + ("Page" === BB.kind ? 8 : "Method" === BB.kind ? 3 : 0) - (BB.listedUnder ? Ho : 0)
                          }

                          function Xo(BB, IB) {
                            const ZB = BB.toLowerCase().indexOf(IB),
                              TB = Math.max(0, ZB - Po / 3);
                            return `${TB>0?"\u2026":""}${BB.slice(TB,TB+Po)}${TB+Po<BB.length?"\u2026":""}`
                          }

                          function Lo(BB) {
                            let {
                              text: IB,
                              query: ZB
                            } = BB;
                            const TB = ZB ? IB.toLowerCase().indexOf(ZB) : -1;
                            return -1 === TB ? (0, NB.jsx)(NB.Fragment, {
                              children: IB
                            }) : (0, NB.jsxs)(NB.Fragment, {
                              children: [IB.slice(0, TB), (0, NB.jsx)("mark", {
                                children: IB.slice(TB, TB + ZB.length)
                              }), IB.slice(TB + ZB.length)]
                            })
                          }

                          function eo(BB) {
                            let {
                              basePath: IB,
                              onClose: ZB
                            } = BB;
                            const JB = (0, vB.v)(),
                              [GB, kB] = (0, TB.useState)(""),
                              [cB, nB] = (0, TB.useState)(0),
                              hB = (0, TB.useRef)(null),
                              zB = (0, TB.useRef)(null),
                              FB = GB.trim().toLowerCase(),
                              gB = (0, TB.useMemo)((() => {
                                const BB = (Ro || (Ro = rB.flatMap((BB => {
                                  const IB = eB(BB);
                                  return [{
                                    page: BB,
                                    anchor: "",
                                    title: BB.title,
                                    kind: "Page",
                                    text: BB.summary
                                  }, ...IB.sections.flatMap((IB => {
                                    const ZB = IB.blocks.filter((BB => "paragraph" === BB.kind)).map(wB.g).join(" ").replace(/[`*]/g, ""),
                                      TB = {
                                        page: BB,
                                        anchor: IB.heading.anchor,
                                        title: IB.heading.text.replace(/`/g, ""),
                                        kind: po[BB.layout],
                                        text: ZB
                                      },
                                      JB = IB.blocks.flatMap((IB => "article" === BB.layout && "heading" === IB.kind && 3 === IB.level ? [{
                                        page: BB,
                                        anchor: IB.anchor,
                                        title: IB.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: TB.title
                                      }] : []));
                                    return [TB, ...JB]
                                  })), ...ro(BB)]
                                }))), Ro);
                                if (!FB) return BB.filter((BB => "Page" === BB.kind));
                                const IB = FB.split(/\s+/);
                                let ZB = 0;
                                return BB.map((BB => ({
                                  entry: BB,
                                  score: mo(BB, FB, IB)
                                }))).filter((BB => BB.score > 0)).sort(((BB, IB) => IB.score - BB.score)).filter((BB => !BB.entry.listedUnder || (ZB++, ZB <= Mo))).slice(0, jo).map((BB => BB.entry))
                              }), [FB]);
                            (0, TB.useEffect)((() => {
                              nB(0)
                            }), [FB]), (0, TB.useEffect)((() => {
                              const BB = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === BB || void 0 === BB || BB.focus()
                              }
                            }), []), (0, TB.useEffect)((() => {
                              var BB, IB;
                              null === (BB = hB.current) || void 0 === BB || null === (IB = BB.querySelector(".Active")) || void 0 === IB || IB.scrollIntoView({
                                block: "nearest"
                              })
                            }), [cB]);
                            const yB = BB => {
                              JB(AB(IB, BB.page, BB.anchor)), ZB()
                            };
                            return (0, NB.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: BB => {
                                BB.target === BB.currentTarget && ZB()
                              },
                              children: (0, NB.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: BB => {
                                  BB.target !== zB.current && BB.preventDefault()
                                },
                                onKeyDown: BB => {
                                  if ("Escape" === BB.key) ZB();
                                  else if ("Tab" === BB.key) {
                                    var IB;
                                    BB.preventDefault(), null === (IB = zB.current) || void 0 === IB || IB.focus()
                                  }
                                },
                                children: [(0, NB.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, NB.jsx)(qB, {
                                    name: "magnifying-glass"
                                  }), (0, NB.jsx)("input", {
                                    ref: zB,
                                    autoFocus: !0,
                                    value: GB,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": gB.length > 0 ? `DocsSearchResult-${cB}` : void 0,
                                    onChange: BB => {
                                      kB(BB.target.value)
                                    },
                                    onKeyDown: BB => {
                                      if ("ArrowDown" === BB.key || "ArrowUp" === BB.key) {
                                        BB.preventDefault();
                                        const IB = "ArrowDown" === BB.key ? 1 : -1;
                                        nB((cB + IB + gB.length) % Math.max(gB.length, 1))
                                      } else "Enter" === BB.key && gB[cB] && yB(gB[cB])
                                    }
                                  }), (0, NB.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, NB.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: hB,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!FB && (0, NB.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), gB.map(((BB, IB) => {
                                    var ZB;
                                    return (0, NB.jsxs)("li", {
                                      id: `DocsSearchResult-${IB}`,
                                      role: "option",
                                      "aria-selected": IB === cB,
                                      className: oB()("DocsSearchResult", {
                                        Active: IB === cB
                                      }),
                                      onMouseMove: () => {
                                        nB(IB)
                                      },
                                      onClick: () => {
                                        yB(BB)
                                      },
                                      children: [(0, NB.jsx)(qB, {
                                        name: BB.page.icon
                                      }), (0, NB.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, NB.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, NB.jsx)(Lo, {
                                            text: BB.title,
                                            query: FB
                                          })
                                        }), BB.text && (0, NB.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, NB.jsx)(Lo, {
                                            text: Xo(BB.text, FB),
                                            query: FB
                                          })
                                        })]
                                      }), (0, NB.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === BB.kind ? "Page" : null !== (ZB = BB.listedUnder) && void 0 !== ZB ? ZB : `${BB.kind} \xb7 ${BB.page.title}`
                                      })]
                                    }, `${BB.page.id}#${BB.anchor}`)
                                  })), FB && 0 === gB.length && (0, NB.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", GB, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function uo(BB, IB) {
                            if (IB < 10) return `${BB.toFixed(1)}s`;
                            const ZB = Math.floor(BB);
                            return `${Math.floor(ZB/60)}:${String(ZB%60).padStart(2,"0")}`
                          }

                          function fo() {
                            const BB = nT((BB => BB.track)),
                              IB = nT((BB => BB.volume)),
                              [ZB, JB] = (0, TB.useState)(0),
                              GB = (0, TB.useRef)(IT);
                            if ((0, TB.useEffect)((() => {
                                if (!BB) return;
                                if (JB(NT()), "playing" !== BB.status) return;
                                let IB = 0;
                                const ZB = () => {
                                  JB(NT()), IB = requestAnimationFrame(ZB)
                                };
                                return IB = requestAnimationFrame(ZB), () => {
                                  cancelAnimationFrame(IB)
                                }
                              }), [BB]), !BB) return null;
                            const vB = "paused" !== BB.status,
                              kB = Math.min(ZB, BB.duration);
                            return (0, NB.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, NB.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, NB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": vB ? `Pause ${BB.name}` : `Play ${BB.name}`,
                                  onClick: FT,
                                  children: (0, NB.jsx)(qB, {
                                    name: vB ? "pause" : "play"
                                  })
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, NB.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, NB.jsx)("code", {
                                      children: BB.name
                                    }), (0, NB.jsx)("span", {
                                      children: BB.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, NB.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, NB.jsx)("span", {
                                      children: uo(kB, BB.duration)
                                    }), (0, NB.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: BB.duration || 1,
                                      step: .01,
                                      value: kB,
                                      disabled: 0 === BB.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${uo(kB,BB.duration)} of ${uo(BB.duration,BB.duration)}`,
                                      onChange: BB => {
                                        const IB = Number(BB.target.value);
                                        ! function(BB) {
                                          var IB;
                                          GT = BB, null === (IB = JT) || void 0 === IB || IB.seek(BB)
                                        }(IB), JB(IB)
                                      }
                                    }), (0, NB.jsx)("span", {
                                      children: BB.duration > 0 ? uo(BB.duration, BB.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, NB.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, NB.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === IB ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === IB ? gT(GB.current) : (GB.current = IB, gT(0))
                                    },
                                    children: (0, NB.jsx)(qB, {
                                      name: "volume",
                                      className: oB()({
                                        Muted: 0 === IB
                                      })
                                    })
                                  }), (0, NB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: IB,
                                    "aria-label": "Volume",
                                    onChange: BB => {
                                      gT(Number(BB.target.value))
                                    }
                                  })]
                                }), (0, NB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var IB;
                                    null === (IB = document.querySelector(`[data-docs-track="${CSS.escape(ZT(BB.name,BB.isSong))}"]`)) || void 0 === IB || IB.focus(), qT()
                                  },
                                  children: (0, NB.jsx)(qB, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Ao = ZB(36);
                          const to = "docsTheme",
                            bo = window.matchMedia("(prefers-color-scheme: light)");

                          function xo(BB) {
                            let {
                              theme: IB,
                              onChange: ZB
                            } = BB;
                            const TB = "dark" === IB ? "light" : "dark";
                            return (0, NB.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${TB} theme`,
                              title: `Switch to ${TB} theme`,
                              onClick: () => {
                                ZB(TB)
                              },
                              children: (0, NB.jsx)(qB, {
                                name: "dark" === IB ? "moon" : "sun"
                              })
                            })
                          }
                          const Eo = "https://github.com/Bloxdy/code-api",
                            Do = "https://discord.gg/playbloxd",
                            Ko = 180,
                            Vo = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function So(BB) {
                            let {
                              basePath: IB,
                              activePageId: ZB,
                              onNavigate: TB
                            } = BB;
                            return (0, NB.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: mB.map((BB => (0, NB.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, NB.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: BB.title
                                }), BB.pageIds.map((BB => {
                                  var JB;
                                  const vB = XB(BB);
                                  return (0, NB.jsxs)(GB.c, {
                                    to: AB(IB, vB),
                                    className: oB()("DocsNavLink", {
                                      Active: vB.id === ZB
                                    }),
                                    "aria-current": vB.id === ZB ? "page" : void 0,
                                    onClick: TB,
                                    children: [(0, NB.jsx)(qB, {
                                      name: vB.icon
                                    }), (0, NB.jsx)("span", {
                                      children: null !== (JB = vB.navTitle) && void 0 !== JB ? JB : vB.title
                                    })]
                                  }, vB.id)
                                }))]
                              }, BB.title)))
                            })
                          }

                          function BG(BB) {
                            let {
                              basePath: IB,
                              pageId: ZB
                            } = BB;
                            const TB = mB.flatMap((BB => BB.pageIds)),
                              JB = TB.indexOf(ZB),
                              oB = JB > 0 ? XB(TB[JB - 1]) : null,
                              vB = JB < TB.length - 1 ? XB(TB[JB + 1]) : null;
                            return (0, NB.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [oB ? (0, NB.jsxs)(GB.c, {
                                className: "DocsPagerLink Previous",
                                to: AB(IB, oB),
                                children: [(0, NB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, NB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: oB.title
                                })]
                              }) : (0, NB.jsx)("span", {}), vB && (0, NB.jsxs)(GB.c, {
                                className: "DocsPagerLink Next",
                                to: AB(IB, vB),
                                children: [(0, NB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, NB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: vB.title
                                })]
                              })]
                            })
                          }

                          function IG(BB) {
                            let {
                              basePath: IB,
                              embedded: ZB = !1
                            } = BB;
                            const {
                              pageSlug: JB = ""
                            } = (0, vB.B)(), cB = (0, vB.r)(), nB = (0, vB.v)(), hB = (zB = JB, rB.find((BB => BB.slug === zB)));
                            var zB;
                            const [FB, gB] = function() {
                              const [BB, IB] = (0, TB.useState)((() => {
                                const BB = Ao.m.getItem(to);
                                return "dark" === BB || "light" === BB ? BB : null
                              })), [ZB, JB] = (0, TB.useState)(bo.matches ? "light" : "dark");
                              return (0, TB.useEffect)((() => {
                                const BB = () => {
                                  JB(bo.matches ? "light" : "dark")
                                };
                                return bo.addEventListener("change", BB), () => {
                                  bo.removeEventListener("change", BB)
                                }
                              }), []), [null !== BB && void 0 !== BB ? BB : ZB, BB => {
                                Ao.m.setItem(to, BB), IB(BB)
                              }]
                            }(), [yB, UB] = (0, TB.useState)(null), [WB, dB] = (0, TB.useState)(!1), [CB, QB] = (0, TB.useState)(!1), [sB, OB] = (0, TB.useState)([]), YB = function(BB, IB) {
                              const [ZB, JB] = (0, TB.useState)("");
                              return (0, TB.useEffect)((() => {
                                if (!IB) return;
                                let ZB = 0;
                                const TB = () => {
                                    var TB, oB;
                                    ZB = 0;
                                    const GB = IB.getBoundingClientRect().top + Ko;
                                    let vB = null !== (TB = null === (oB = BB[0]) || void 0 === oB ? void 0 : oB.anchor) && void 0 !== TB ? TB : "";
                                    for (const IB of BB) {
                                      const BB = document.getElementById(IB.anchor);
                                      BB && BB.getBoundingClientRect().top <= GB && (vB = IB.anchor)
                                    }
                                    IB.scrollTop + IB.clientHeight >= IB.scrollHeight - 2 && IB.scrollTop > 0 && BB.length > 0 && (vB = BB[BB.length - 1].anchor), JB(vB)
                                  },
                                  oB = () => {
                                    ZB || (ZB = requestAnimationFrame(TB))
                                  };
                                return TB(), IB.addEventListener("scroll", oB, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ZB), IB.removeEventListener("scroll", oB)
                                }
                              }), [BB, IB]), ZB
                            }(sB, yB), iB = "" === JB && cB.hash ? function(BB) {
                              const IB = (0, wB.o)(BB);
                              if (uB(XB("welcome"), IB)) return null;
                              const ZB = Object.hasOwn(lB, IB) ? lB[IB] : null;
                              if (ZB) return {
                                page: XB(ZB.pageId),
                                anchor: ZB.anchor
                              };
                              const TB = XB("readme");
                              return uB(TB, IB) ? {
                                page: TB,
                                anchor: IB
                              } : fB(`#${IB}`)
                            }(cB.hash) : null;
                            (0, TB.useEffect)((() => (kB.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              kB.d.set({
                                musicOnFromPage: !0
                              }), qT()
                            })), []), (0, TB.useEffect)((() => {
                              const BB = BB => {
                                const IB = BB.target;
                                if (IB.closest(".DocsTextDialog")) return;
                                const ZB = IB.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(IB.tagName);
                                "k" === BB.key && (BB.metaKey || BB.ctrlKey) || "/" === BB.key && !ZB ? (BB.preventDefault(), QB(!0)) : "Escape" === BB.key && dB(!1)
                              };
                              return window.addEventListener("keydown", BB), () => {
                                window.removeEventListener("keydown", BB)
                              }
                            }), []);
                            const pB = (0, TB.useRef)(null);
                            (0, TB.useLayoutEffect)((() => {
                              var BB, IB;
                              if (!yB) return;
                              const ZB = pB.current === cB.pathname;
                              pB.current = cB.pathname;
                              const TB = (0, wB.o)(cB.hash),
                                JB = TB ? document.getElementById(TB) : null;
                              if (null === (BB = yB.querySelector(".DocsTargeted")) || void 0 === BB || BB.classList.remove("DocsTargeted"), null === JB || void 0 === JB || null === (IB = JB.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === IB || IB.classList.add("DocsTargeted"), JB) {
                                var oB;
                                const BB = JB.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (oB = JB.closest(".DocsChangelogEntry")) && void 0 !== oB ? oB : JB).scrollIntoView({
                                  block: BB ? "center" : "start",
                                  behavior: ZB ? "smooth" : "auto"
                                })
                              } else ZB || yB.scrollTo({
                                top: 0
                              })
                            }), [yB, cB.pathname, cB.hash, cB.key]);
                            const aB = (0, TB.useCallback)((() => {
                                dB(!1)
                              }), []),
                              HB = (0, TB.useCallback)((BB => {
                                nB({
                                  hash: BB
                                })
                              }), [nB]);
                            if (iB) return (0, NB.jsx)(vB.e, {
                              replace: !0,
                              to: AB(IB, iB.page, iB.anchor)
                            });
                            if (!hB) return (0, NB.jsx)(vB.e, {
                              replace: !0,
                              to: IB
                            });
                            const MB = ZB ? "div" : "main";
                            return (0, NB.jsx)(FI.Provider, {
                              value: IB,
                              children: (0, NB.jsx)(NI.Provider, {
                                value: yB,
                                children: (0, NB.jsxs)("div", {
                                  ref: UB,
                                  className: oB()("DocsSite", {
                                    Embedded: ZB,
                                    NavOpen: WB
                                  }),
                                  "data-theme": FB,
                                  children: [(0, NB.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, NB.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": WB ? "Close menu" : "Open menu",
                                      "aria-expanded": WB,
                                      onClick: () => {
                                        dB(!WB)
                                      },
                                      children: (0, NB.jsx)(qB, {
                                        name: WB ? "cross" : "menu"
                                      })
                                    }), (0, NB.jsxs)(GB.c, {
                                      to: IB,
                                      className: "DocsBrand",
                                      children: [(0, NB.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, NB.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, NB.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, NB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        QB(!0)
                                      },
                                      children: [(0, NB.jsx)(qB, {
                                        name: "magnifying-glass"
                                      }), (0, NB.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, NB.jsxs)("kbd", {
                                        children: [Vo ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, NB.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, NB.jsxs)("a", {
                                        href: Do,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, NB.jsx)(qB, {
                                          name: "discord"
                                        }), (0, NB.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, NB.jsxs)("a", {
                                        href: Eo,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, NB.jsx)(qB, {
                                          name: "external-link"
                                        }), (0, NB.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ZB && (0, NB.jsxs)(GB.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, NB.jsx)(qB, {
                                          name: "play"
                                        }), (0, NB.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, NB.jsx)(xo, {
                                        theme: FB,
                                        onChange: gB
                                      })]
                                    })]
                                  }), (0, NB.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, NB.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, NB.jsx)(So, {
                                        basePath: IB,
                                        activePageId: hB.id,
                                        onNavigate: aB
                                      })
                                    }), (0, NB.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: aB
                                    }), (0, NB.jsxs)(MB, {
                                      className: "DocsMain",
                                      children: [(0, NB.jsx)(so, {
                                        page: hB,
                                        onTocChange: OB
                                      }, hB.id), (0, NB.jsx)(BG, {
                                        basePath: IB,
                                        pageId: hB.id
                                      })]
                                    }), (0, NB.jsx)("aside", {
                                      className: oB()("DocsToc", {
                                        Timeline: "changelog" === hB.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, NB.jsx)(io, {
                                        isChangelog: "changelog" === hB.layout,
                                        toc: sB,
                                        activeAnchor: YB,
                                        onNavigate: HB
                                      })
                                    })]
                                  }), (0, NB.jsx)(fo, {}), CB && (0, NB.jsx)(eo, {
                                    basePath: IB,
                                    onClose: () => {
                                      QB(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4913: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            c: () => TB,
                            f: () => GB,
                            g: () => qB,
                            j: () => gB,
                            n: () => vB,
                            o: () => JB,
                            s: () => oB,
                            t: () => NB,
                            u: () => FB,
                            w: () => zB
                          });
                          const TB = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function JB(BB) {
                            try {
                              return decodeURIComponent(BB.slice(1))
                            } catch {
                              return BB.slice(1)
                            }
                          }

                          function oB(BB) {
                            return BB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const GB = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${TB.source}`, "g");

                          function vB(BB, IB) {
                            return 2 === BB.length ? IB.replace(/^ (.*) $/, "$1") : IB
                          }

                          function kB(BB) {
                            return "" === BB.trim()
                          }

                          function cB(BB) {
                            const IB = [];
                            for (const ZB of BB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) IB.length > 0 && IB[IB.length - 1].endsWith("\\") ? IB[IB.length - 1] += `|${ZB}` : IB.push(ZB);
                            return IB.map((BB => BB.trim().replaceAll("\\|", "|")))
                          }
                          const nB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function hB(BB) {
                            const IB = [],
                              ZB = [{
                                indent: -1,
                                items: IB
                              }];
                            let TB = null;
                            for (const JB of BB) {
                              const BB = JB.match(nB);
                              if (!BB) {
                                TB && (TB.text += ` ${JB.trim()}`);
                                continue
                              }
                              const IB = BB[1].replace(/\t/g, "  ").length;
                              for (; IB <= ZB[ZB.length - 1].indent;) ZB.pop();
                              TB = {
                                text: BB[3].trim(),
                                children: []
                              }, ZB[ZB.length - 1].items.push(TB), ZB.push({
                                indent: IB,
                                items: TB.children
                              })
                            }
                            return IB
                          }

                          function zB(BB) {
                            const IB = BB.replace(/\r\n/g, "\n").split("\n"),
                              ZB = [];
                            let TB = 0;
                            for (; TB < IB.length;) {
                              const BB = IB[TB];
                              if (kB(BB)) {
                                TB++;
                                continue
                              }
                              const JB = BB.match(/^\s*```\s*(\w*)\s*$/);
                              if (JB) {
                                const BB = [];
                                for (TB++; TB < IB.length && !/^\s*```\s*$/.test(IB[TB]);) BB.push(IB[TB]), TB++;
                                TB++, ZB.push({
                                  kind: "code",
                                  lang: JB[1] || "text",
                                  code: BB.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const GB = BB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (GB) {
                                const BB = GB[2].trim();
                                ZB.push({
                                  kind: "heading",
                                  level: GB[1].length,
                                  text: BB,
                                  anchor: oB(BB)
                                }), TB++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(BB)) {
                                ZB.push({
                                  kind: "rule"
                                }), TB++;
                                continue
                              }
                              if (BB.trim().startsWith("|") && TB + 1 < IB.length && /^\s*\|[\s:|-]+\|\s*$/.test(IB[TB + 1])) {
                                const JB = cB(BB),
                                  oB = [];
                                for (TB += 2; TB < IB.length && IB[TB].trim().startsWith("|");) oB.push(cB(IB[TB])), TB++;
                                ZB.push({
                                  kind: "table",
                                  header: JB,
                                  rows: oB
                                });
                                continue
                              }
                              if (BB.startsWith(">")) {
                                const BB = [];
                                for (; TB < IB.length && IB[TB].startsWith(">");) BB.push(IB[TB].replace(/^>\s?/, "")), TB++;
                                ZB.push({
                                  kind: "quote",
                                  blocks: zB(BB.join("\n"))
                                });
                                continue
                              }
                              if (nB.test(BB)) {
                                const JB = [],
                                  oB = /^\s*\d+\./.test(BB);
                                for (; TB < IB.length && !kB(IB[TB]) && (nB.test(IB[TB]) || /^\s+\S/.test(IB[TB]));) JB.push(IB[TB]), TB++;
                                ZB.push({
                                  kind: "list",
                                  ordered: oB,
                                  items: hB(JB)
                                });
                                continue
                              }
                              const vB = [];
                              for (; TB < IB.length && !kB(IB[TB]) && !/^\s*```/.test(IB[TB]) && !/^#{1,6}\s/.test(IB[TB]) && !IB[TB].startsWith(">") && !nB.test(IB[TB]) && (!IB[TB].trim().startsWith("|") || 0 !== vB.length);) vB.push(IB[TB].trim()), TB++;
                              0 === vB.length && (vB.push(IB[TB].trim()), TB++), ZB.push({
                                kind: "paragraph",
                                text: vB.join(" ")
                              })
                            }
                            return ZB
                          }

                          function FB(BB) {
                            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ZB = zB(BB);
                            let TB = "";
                            const JB = [],
                              oB = [],
                              GB = new Map;
                            for (const cB of ZB) {
                              if ("heading" === cB.kind) {
                                var vB;
                                const BB = (null !== (vB = GB.get(cB.anchor)) && void 0 !== vB ? vB : 0) + 1;
                                GB.set(cB.anchor, BB), BB > 1 && (cB.anchor = `${cB.anchor}-${BB}`)
                              }
                              if ("heading" === cB.kind && 1 === cB.level && !TB) {
                                TB = cB.text;
                                continue
                              }
                              if ("heading" === cB.kind && cB.level <= IB) {
                                oB.push({
                                  heading: cB,
                                  blocks: []
                                });
                                continue
                              }
                              const BB = oB.at(-1);
                              BB ? BB.blocks.push(cB) : JB.push(cB)
                            }
                            const kB = BB => {
                              for (;
                                "rule" === (null === (IB = BB.at(-1)) || void 0 === IB ? void 0 : IB.kind);) {
                                var IB;
                                BB.pop()
                              }
                            };
                            kB(JB);
                            for (const cB of oB) kB(cB.blocks);
                            return {
                              title: TB,
                              intro: JB,
                              sections: oB
                            }
                          }

                          function NB(BB) {
                            return [{
                              heading: null,
                              blocks: BB.intro
                            }, ...BB.sections.map((BB => ({
                              heading: BB.heading,
                              blocks: BB.blocks
                            })))]
                          }

                          function gB(BB) {
                            return BB.flatMap((BB => "code" === BB.kind ? [BB] : "quote" === BB.kind ? gB(BB.blocks) : []))
                          }

                          function qB(BB) {
                            switch (BB.kind) {
                              case "heading":
                              case "paragraph":
                                return BB.text;
                              case "code":
                                return BB.code;
                              case "table":
                                return [BB.header, ...BB.rows].map((BB => BB.join(" "))).join(" ");
                              case "list": {
                                const IB = BB => BB.map((BB => `${BB.text} ${IB(BB.children)}`)).join(" ");
                                return IB(BB.items)
                              }
                              case "quote":
                                return BB.blocks.map(qB).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5007: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            c: () => vB
                          });
                          var TB = ZB(63),
                            JB = ZB(342),
                            oB = ZB(1979),
                            GB = ZB(1153);

                          function vB(BB) {
                            let {
                              text: IB
                            } = BB;
                            const ZB = [];
                            let vB = "";
                            return (0, JB.rc)(IB).forEach(((BB, IB) => {
                              if ("string" === typeof BB || !(0, oB.g)(BB.icon)) return void(vB += "string" === typeof BB ? BB : BB.icon);
                              const JB = Math.max(0, vB.trimEnd().search(/\S{1,12}$/));
                              ZB.push((0, GB.jsxs)(TB.Fragment, {
                                children: [vB.slice(0, JB), (0, GB.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [vB.slice(JB), (0, GB.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": BB.icon,
                                    children: (0, GB.jsx)(oB.e, {
                                      itemName: BB.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, IB)), vB = ""
                            })), ZB.push(vB), (0, GB.jsx)(GB.Fragment, {
                              children: ZB
                            })
                          }
                        }, 4944: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            h: () => UB,
                            d: () => yB
                          });
                          var TB = ZB(63),
                            JB = ZB(1507),
                            oB = ZB(1960),
                            GB = ZB(4950),
                            vB = ZB(1153);
                          const kB = (0, TB.memo)((function(BB) {
                            let {
                              initialParameters: IB
                            } = BB;
                            const ZB = (0, TB.useRef)(null),
                              JB = (0, TB.useRef)(null),
                              kB = (0, TB.useRef)(0),
                              cB = (0, TB.useRef)(null),
                              nB = IB.description,
                              hB = IB.TI,
                              {
                                scale: zB,
                                rotation: FB
                              } = null !== IB && void 0 !== IB ? IB : {},
                              NB = (0, GB.f)();
                            return (0, TB.useEffect)((() => {
                              const BB = NB.onFrame((() => {
                                const BB = NB.getState();
                                if (!BB.isActive || !ZB.current || !JB.current) return;
                                const IB = BB.state;
                                if (ZB.current.value = IB.progress, IB.clickCount > kB.current) {
                                  kB.current = IB.clickCount;
                                  const BB = JB.current;
                                  BB.classList.add("pulse"), cB.current = setTimeout((() => {
                                    BB.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(cB.current), BB()
                              }
                            }), [NB]), (0, vB.jsx)(vB.Fragment, {
                              children: (0, vB.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== zB && {
                                    "--scale": zB
                                  },
                                  ...null !== FB && {
                                    "--rotation": `${FB}deg`
                                  }
                                },
                                children: [(0, vB.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ZB
                                }), (0, vB.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: JB,
                                  children: (0, vB.jsx)(oB.e, {
                                    text: [{
                                      icon: hB
                                    }]
                                  })
                                }), (0, vB.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, vB.jsx)(oB.e, {
                                    text: nB
                                  })
                                })]
                              })
                            })
                          }));
                          var cB = ZB(1091),
                            nB = ZB.n(cB);
                          const hB = 2 * Math.PI * 90,
                            zB = (0, TB.memo)((function(BB) {
                              let {
                                initialParameters: IB
                              } = BB;
                              const ZB = (0, TB.useRef)(null),
                                JB = (0, TB.useRef)(null),
                                kB = (0, TB.useRef)(null),
                                cB = IB.label,
                                zB = IB.icon,
                                FB = IB.GI,
                                {
                                  scale: NB,
                                  rotation: gB,
                                  vI: qB
                                } = null !== IB && void 0 !== IB ? IB : {},
                                yB = (0, GB.f)();
                              return (0, TB.useEffect)((() => {
                                const BB = yB.onFrame((() => {
                                  var BB, IB;
                                  const TB = yB.getState();
                                  if (!TB.isActive || !JB.current) return;
                                  const oB = TB.state,
                                    GB = null !== (BB = oB.timeRemaining) && void 0 !== BB ? BB : 0,
                                    vB = null !== (IB = oB.oI) && void 0 !== IB ? IB : 1,
                                    cB = hB * (1 - GB / vB);
                                  JB.current.style.strokeDashoffset = `${cB}`, ZB.current && (ZB.current.style.opacity = GB > 0 ? "1" : "0"), kB.current && FB && (kB.current.textContent = `${(GB/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [yB, FB]), (0, vB.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ZB,
                                style: {
                                  ...null !== NB && {
                                    "--scale": NB
                                  },
                                  ...null !== gB && {
                                    "--rotation": `${gB}deg`
                                  }
                                },
                                children: [(0, vB.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, vB.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, vB.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, vB.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: hB,
                                      ref: JB
                                    })]
                                  }), (0, vB.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, vB.jsx)(oB.e, {
                                      text: [{
                                        icon: zB
                                      }],
                                      className: nB()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: qB
                                      })
                                    })
                                  })]
                                }), (0, vB.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, vB.jsx)(oB.e, {
                                    text: cB,
                                    className: "QTETimedClickLabelText"
                                  }), FB && (0, vB.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: kB
                                  })]
                                })]
                              })
                            })),
                            FB = (0, TB.memo)((function(BB) {
                              let {
                                initialParameters: IB
                              } = BB;
                              const ZB = (0, TB.useRef)(null),
                                JB = (0, TB.useRef)(null),
                                kB = (0, TB.useRef)(null),
                                cB = (0, TB.useRef)(!1),
                                nB = IB.description,
                                hB = null === IB || void 0 === IB ? void 0 : IB.icon,
                                zB = (0, GB.f)();
                              return (0, TB.useEffect)((() => {
                                const BB = zB.onFrame((() => {
                                  const BB = zB.getState();
                                  if (!BB.isActive) return;
                                  const IB = BB.state;
                                  if (ZB.current) {
                                    const BB = 100 * (IB.catchZonePosition - IB.cI / 2);
                                    ZB.current.style.left = `${BB}%`, ZB.current.style.width = 100 * IB.cI + "%", IB.isCatching !== cB.current && (cB.current = IB.isCatching, IB.isCatching ? ZB.current.classList.add("catching") : ZB.current.classList.remove("catching"))
                                  }
                                  JB.current && (JB.current.style.left = 100 * IB.moverPosition + "%"), kB.current && (kB.current.value = IB.progress)
                                }));
                                return () => {
                                  BB()
                                }
                              }), [zB]), (0, vB.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, vB.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, vB.jsx)(oB.e, {
                                    text: nB
                                  })
                                }), (0, vB.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: kB
                                }), (0, vB.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, vB.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ZB
                                  }), (0, vB.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: JB,
                                    children: (0, vB.jsx)("span", {
                                      children: hB && (0, vB.jsx)(oB.e, {
                                        text: [{
                                          icon: hB,
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
                          var NB = ZB(665);
                          const gB = (0, TB.memo)((function(BB) {
                              let {
                                initialParameters: IB
                              } = BB;
                              const ZB = (0, TB.useRef)(null),
                                JB = IB.label,
                                kB = IB.qI,
                                {
                                  icon: cB,
                                  scale: nB,
                                  rotation: hB
                                } = null !== IB && void 0 !== IB ? IB : {},
                                zB = 100 * (.5 - kB / 2),
                                FB = 100 * kB,
                                gB = (0, GB.f)();
                              return (0, TB.useEffect)((() => {
                                const BB = gB.onFrame((() => {
                                  const BB = gB.getState();
                                  if (!BB.isActive || !ZB.current) return;
                                  const IB = BB.state;
                                  ZB.current.style.left = 100 * IB.markerPosition + "%"
                                }));
                                return () => {
                                  BB()
                                }
                              }), [gB]), (0, vB.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, NB.L)(nB) && {
                                    "--scale": nB
                                  },
                                  ...!(0, NB.L)(hB) && {
                                    "--rotation": `${hB}deg`
                                  }
                                },
                                children: [cB && (0, vB.jsx)(oB.e, {
                                  text: [{
                                    icon: cB
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, vB.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, vB.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${zB}%`,
                                      width: `${FB}%`
                                    }
                                  }), (0, vB.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ZB
                                  })]
                                }), (0, vB.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, vB.jsx)(oB.e, {
                                    text: JB
                                  })
                                })]
                              })
                            })),
                            qB = (0, TB.memo)((function(BB) {
                              let {
                                initialParameters: IB
                              } = BB;
                              const ZB = (0, TB.useRef)(null),
                                [JB, kB] = (0, TB.useState)((() => new Array(IB.UI).fill("pending"))),
                                [cB, nB] = (0, TB.useState)((() => {
                                  const BB = IB.CI;
                                  return (0, NB.L)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
                                })),
                                hB = IB.label,
                                {
                                  icon: zB
                                } = IB,
                                FB = (0, TB.useRef)(0),
                                gB = (0, TB.useRef)(0),
                                qB = (0, TB.useRef)([]),
                                yB = (0, GB.f)();
                              return (0, TB.useEffect)((() => {
                                const BB = yB.onFrame((() => {
                                  const BB = yB.getState();
                                  if (!BB.isActive || !ZB.current) return;
                                  const IB = BB.state,
                                    TB = 30 + 60 * IB.outerCircleProgress;
                                  if (ZB.current.setAttribute("r", String(TB)), !0 === IB.lastClickResult && IB.successes > FB.current) {
                                    ZB.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZB.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = ZB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    qB.current.push(BB)
                                  } else if (!1 === IB.lastClickResult && IB.misses > gB.current) {
                                    ZB.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZB.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const BB = setTimeout((() => {
                                      var BB;
                                      null === (BB = ZB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    qB.current.push(BB)
                                  }
                                  IB.successes === FB.current && IB.misses === gB.current || (FB.current = IB.successes, gB.current = IB.misses, kB((BB => {
                                    const ZB = [...BB];
                                    for (let TB = 0; TB < IB.UI; TB++) ZB[TB] = TB < IB.successes ? "success" : "pending";
                                    return ZB
                                  })), nB((BB => {
                                    if (0 === BB.length) return BB;
                                    const ZB = [...BB];
                                    for (let TB = 0; TB < ZB.length; TB++) ZB[TB] = TB < IB.misses ? "miss" : "pending";
                                    return ZB
                                  })))
                                }));
                                return () => {
                                  BB();
                                  for (const BB of qB.current) clearTimeout(BB);
                                  qB.current = []
                                }
                              }), [yB]), (0, vB.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, vB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: JB.map(((BB, IB) => (0, vB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, IB)))
                                }), (0, vB.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, vB.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, vB.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, vB.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ZB
                                    })]
                                  }), zB && (0, vB.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, vB.jsx)(oB.e, {
                                      text: [{
                                        icon: zB
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), cB.length > 0 && (0, vB.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: cB.map(((BB, IB) => (0, vB.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, IB)))
                                }), (0, vB.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, vB.jsx)(oB.e, {
                                    text: hB
                                  })
                                })]
                              })
                            }));

                          function yB(BB) {
                            let {
                              qte: IB
                            } = BB;
                            switch (IB.type) {
                              case "progressBar":
                                return (0, vB.jsx)(kB, {
                                  initialParameters: IB.parameters
                                });
                              case "timedClick":
                                return (0, vB.jsx)(zB, {
                                  initialParameters: IB.parameters
                                });
                              case "gravityBar":
                                return (0, vB.jsx)(FB, {
                                  initialParameters: IB.parameters
                                });
                              case "precisionBar":
                                return (0, vB.jsx)(gB, {
                                  initialParameters: IB.parameters
                                });
                              case "rhythmClick":
                                return (0, vB.jsx)(qB, {
                                  initialParameters: IB.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const UB = (0, TB.memo)((function() {
                            const [BB, IB] = (0, TB.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, JB.d)("qteStateUpdated", (BB => {
                              IB(BB)
                            })), BB.isActive && BB.type ? (0, vB.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, vB.jsx)(yB, {
                                qte: BB
                              })
                            }) : null
                          }))
                        }, 4950: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            c: () => vB,
                            f: () => kB
                          });
                          var TB = ZB(63),
                            JB = ZB(1362),
                            oB = ZB(4952);
                          const GB = {
                              getState: () => oB.d.getCurrentState(),
                              onFrame: JB.o
                            },
                            vB = (0, TB.createContext)(GB);

                          function kB() {
                            return (0, TB.useContext)(vB)
                          }
                        }, 5011: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            b: () => PB,
                            c: () => jB
                          });
                          var TB = ZB(5016),
                            JB = ZB(342);
                          const oB = 120,
                            GB = 260,
                            vB = 1.15,
                            kB = 1.2,
                            cB = 2,
                            nB = 1.08,
                            hB = .8,
                            zB = .95,
                            FB = 8,
                            NB = "[\"')\\]\u300d\u300f\uff09]*",
                            gB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${NB}$`),
                            qB = new RegExp(`[?\uff1f]${NB}$`),
                            yB = new RegExp(`[!\uff01]${NB}$`),
                            UB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            dB = new RegExp(`[${WB}]`),
                            CB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
                            QB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function sB(BB) {
                            let IB = 2166136261;
                            for (let ZB = 0; ZB < BB.length; ZB++) IB ^= BB.charCodeAt(ZB), IB = Math.imul(IB, 16777619);
                            return (IB >>> 0) / 4294967295 * 2 - 1
                          }

                          function wB(BB) {
                            var IB;
                            if (dB.test(BB)) return 1;
                            const ZB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              TB = ZB.replace(/[^0-9]/g, "");
                            if (TB.length > 0 && !/\p{L}/u.test(ZB)) return Math.min(TB.length, 4);
                            const JB = null !== (IB = ZB.match(QB)) && void 0 !== IB ? IB : [];
                            if (0 === JB.length) {
                              var oB, GB;
                              const BB = null !== (oB = null === (GB = ZB.match(/\p{L}/gu)) || void 0 === GB ? void 0 : GB.length) && void 0 !== oB ? oB : 0;
                              return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), FB)
                            }
                            const vB = ZB.replace(/[^\p{L}]/gu, ""),
                              kB = JB.length > 1 && "e" === JB.at(-1) && vB.endsWith("e") && !vB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
                            return Math.min(JB.length - (kB ? 1 : 0), FB)
                          }

                          function OB(BB) {
                            return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function YB(BB) {
                            const IB = BB.replace(/[^\p{L}]/gu, "");
                            return IB.length >= 2 && IB === IB.toUpperCase() && IB !== IB.toLowerCase()
                          }

                          function iB(BB, IB) {
                            var ZB;
                            const FB = IB && (0, TB.j)(IB),
                              NB = null !== (ZB = null === FB || void 0 === FB ? void 0 : FB.syllableMs) && void 0 !== ZB ? ZB : TB.c,
                              WB = function(BB) {
                                const IB = [];
                                for (const TB of (0, JB.rc)(BB))
                                  if ("string" === typeof TB)
                                    for (const BB of TB.split(/(\s+)/)) {
                                      if ("" === BB) continue;
                                      if (/^\s+$/.test(BB)) {
                                        IB.push({
                                          kind: "space",
                                          text: BB
                                        });
                                        continue
                                      }
                                      if (!dB.test(BB)) {
                                        IB.push({
                                          kind: "word",
                                          text: BB,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let TB = !0;
                                      for (const JB of null !== (ZB = BB.match(CB)) && void 0 !== ZB ? ZB : []) {
                                        var ZB;
                                        const BB = IB.at(-1);
                                        TB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || dB.test(JB) || /[\p{L}\p{N}]/u.test(JB) ? (TB || IB.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), IB.push({
                                          kind: "word",
                                          text: JB,
                                          delayMs: 0
                                        }), TB = !1) : BB.text += JB
                                      }
                                    } else IB.push({
                                      kind: "icon",
                                      text: TB.icon,
                                      delayMs: 0
                                    });
                                return IB
                              }(BB),
                              QB = [];
                            let iB = [];
                            for (const TB of WB) "space" !== TB.kind && (iB.push(TB), gB.test(TB.text) && (QB.push(iB), iB = []));
                            QB.push(iB);
                            const pB = [];
                            let aB = 0;
                            for (const TB of QB) {
                              var HB, MB;
                              const BB = null !== (HB = null === (MB = TB.at(-1)) || void 0 === MB ? void 0 : MB.text) && void 0 !== HB ? HB : "",
                                IB = qB.test(BB),
                                ZB = yB.test(BB),
                                JB = TB.map((BB => "word" === BB.kind ? wB(BB.text) : 1)),
                                WB = JB.findLastIndex((BB => BB > 0));
                              for (const [qB, yB] of TB.entries()) {
                                const BB = "word" === yB.kind,
                                  TB = JB[qB];
                                yB.delayMs = aB;
                                for (let JB = 0; FB && JB < TB; JB++) {
                                  const {
                                    intonation: oB
                                  } = FB;
                                  let GB = WB > 0 ? -oB.declineSemitones * (qB / WB) : 0;
                                  GB += sB(`${OB(yB.text)}|${JB}`) * oB.variationSemitones;
                                  const gB = Math.min(1, oB.variationSemitones);
                                  let UB = FB.glideSemitones,
                                    dB = 1;
                                  ZB && (GB += oB.exclaimLiftSemitones, dB *= vB), IB && qB === WB && (GB += oB.questionRiseSemitones * (TB > 1 ? .5 + .5 * JB / (TB - 1) : 1), JB === TB - 1 && (UB = Math.abs(UB) + oB.questionRiseSemitones / 2)), BB && YB(yB.text) && (GB += cB * gB, dB *= kB), TB > 1 && 0 === JB && (GB += hB * gB, dB *= nB), pB.push({
                                    atMs: aB + JB * NB,
                                    semitones: GB,
                                    glideSemitones: UB,
                                    durationMs: JB < TB - 1 ? Math.min(FB.durationMs, NB * zB) : FB.durationMs,
                                    level: dB
                                  })
                                }
                                aB += TB * NB + (gB.test(yB.text) ? GB : UB.test(yB.text) ? oB : 0)
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
                              blips: pB
                            }
                          }
                          var pB = ZB(1248),
                            aB = ZB(1310),
                            HB = ZB(2003);

                          function MB(BB) {
                            if ("string" === typeof BB) return BB;
                            const IB = aB.h.get().getCurrentLanguageCode();
                            return (0, pB.w)(IB, BB.translationKey, (0, pB.s)(BB.params, HB.b.shown))
                          }

                          function jB(BB) {
                            const IB = void 0 === BB.voice ? null : (0, TB.k)(BB.voice),
                              ZB = IB && (0, TB.j)(IB);
                            return {
                              plan: iB(MB(BB.line), ZB),
                              synth: ZB
                            }
                          }

                          function PB(BB) {
                            const IB = [];
                            let ZB = [];
                            for (const [JB, oB] of BB.entries()) {
                              var TB;
                              "space" === oB.kind && (" " !== oB.text || "icon" !== (null === (TB = BB[JB + 1]) || void 0 === TB ? void 0 : TB.kind)) ? (ZB.length > 0 && IB.push(ZB), IB.push([oB]), ZB = []) : ZB.push(oB)
                            }
                            return ZB.length > 0 && IB.push(ZB), IB
                          }
                        }, 5019: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            d: () => nB,
                            g: () => hB
                          });
                          var TB = ZB(5028),
                            JB = ZB(20);
                          const oB = .25,
                            GB = .85,
                            vB = .02,
                            kB = .01;

                          function cB(BB, IB, ZB, TB, JB, oB, vB) {
                            const {
                              waveform: kB,
                              pitchHz: cB,
                              attackMs: nB,
                              releaseMs: hB,
                              lowpassHz: zB
                            } = ZB, FB = JB + TB.durationMs / 1e3, NB = cB * 2 ** (TB.semitones / 12), gB = BB.createOscillator();
                            gB.type = kB, gB.frequency.setValueAtTime(NB, JB), gB.frequency.exponentialRampToValueAtTime(NB * 2 ** (TB.glideSemitones / 12), FB);
                            const qB = JB + Math.min(nB, TB.durationMs) / 1e3,
                              yB = BB.createGain();
                            yB.gain.setValueAtTime(0, JB), yB.gain.linearRampToValueAtTime(oB, qB), yB.gain.linearRampToValueAtTime(oB * GB, Math.max(qB, FB - hB / 1e3)), yB.gain.linearRampToValueAtTime(0, FB);
                            const UB = [gB];
                            if (null !== zB) {
                              const IB = BB.createBiquadFilter();
                              IB.type = "lowpass", IB.frequency.value = zB, UB.push(IB)
                            }
                            UB.push(yB, IB);
                            for (let GB = 1; GB < UB.length; GB++) UB[GB - 1].connect(UB[GB]);
                            return gB.onended = () => {
                              for (const BB of UB.slice(0, -1)) BB.disconnect();
                              vB()
                            }, gB.start(JB), gB.stop(FB), gB
                          }

                          function nB(BB, IB, ZB, TB, JB, GB) {
                            if (0 === TB.length) return GB(), () => {};
                            const nB = oB * ZB.volume * JB,
                              hB = BB.createGain();
                            hB.connect(IB);
                            const zB = BB.currentTime + vB,
                              FB = new Set;
                            for (const oB of TB) {
                              const IB = cB(BB, hB, ZB, oB, zB + oB.atMs / 1e3, nB * oB.level, (() => {
                                FB.delete(IB), 0 === FB.size && (hB.disconnect(), GB())
                              }));
                              FB.add(IB)
                            }
                            return () => {
                              const IB = BB.currentTime;
                              hB.gain.setTargetAtTime(0, IB, kB);
                              for (const BB of FB) try {
                                BB.stop(IB + 5 * kB)
                              } catch {}
                            }
                          }

                          function hB(BB, IB) {
                            var ZB;
                            const oB = TB.Howler.ctx,
                              GB = TB.Howler.masterGain;
                            if (!oB || !GB || !JB.d.get("soundOnFromAd")) return () => {};
                            const vB = TB.Howler;
                            return null === (ZB = vB._autoResume) || void 0 === ZB || ZB.call(vB), nB(oB, GB, BB, IB, JB.d.get("soundVolume"), (() => {
                              var BB;
                              null === (BB = vB._autoSuspend) || void 0 === BB || BB.call(vB)
                            }))
                          }
                        }, 4999: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            e: () => vB,
                            g: () => JB,
                            h: () => kB,
                            j: () => GB,
                            l: () => oB
                          });
                          var TB = ZB(4995);
                          const JB = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            oB = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            GB = `${TB.i} lists every page of the Bloxd Code API docs.`;

                          function vB(BB, IB) {
                            return `${BB.url}${encodeURIComponent(IB.toWellFormed())}`
                          }

                          function kB(BB) {
                            const IB = vB(JB, BB);
                            return IB.length <= 3e4 ? {
                              url: IB,
                              sendsPrompt: !0
                            } : {
                              url: new URL(JB.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5028: (BB, IB, ZB) => {
                          ZB.r(IB), ZB.d(IB, {
                            Howl: () => JB.Howl,
                            Howler: () => JB.Howler,
                            musicOutput: () => qB,
                            readyAudioContext: () => yB
                          });
                          var TB, JB = ZB(5031),
                            oB = ZB(3625),
                            GB = ZB(4824);
                          const vB = JB.Howler;

                          function kB() {
                            var BB, IB;
                            if (vB.ctx || !vB.usingWebAudio || "undefined" === typeof AudioContext || !(0, GB.i)()) return;
                            const ZB = navigator.audioSession;
                            let TB;
                            "auto" === (null === ZB || void 0 === ZB ? void 0 : ZB.type) && (ZB.type = "ambient");
                            try {
                              TB = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const JB = TB.createGain();
                            JB.gain.setValueAtTime(vB._muted ? 0 : null !== (BB = vB._volume) && void 0 !== BB ? BB : 1, TB.currentTime), JB.connect(TB.destination), vB.ctx = TB, vB.masterGain = JB, null === (IB = vB._setup) || void 0 === IB || IB.call(vB)
                          }
                          vB._mobileUnloaded = !0;
                          const cB = vB.volume.bind(JB.Howler);
                          vB.volume = function() {
                            return kB(), cB(...arguments)
                          };
                          const nB = vB.mute.bind(JB.Howler);
                          vB.mute = BB => (kB(), nB(BB));
                          const hB = JB.Howl.prototype,
                            zB = hB.init;

                          function FB() {
                            for (; vB._html5AudioPool.length < vB.html5PoolSize;) {
                              const BB = new Audio;
                              BB._unlocked = !0, vB._releaseHtml5Audio(BB)
                            }
                            for (const IB of vB._howls)
                              if (!IB._webAudio)
                                for (const ZB of IB._getSoundIds()) {
                                  var BB;
                                  const TB = null === (BB = IB._soundById(ZB)) || void 0 === BB ? void 0 : BB._node;
                                  TB && !TB._unlocked && (TB._unlocked = !0, TB.load())
                                }
                          }
                          hB.init = function(BB) {
                            return kB(), zB.call(this, BB)
                          }, (0, GB.i)() && (vB._unlockAudio = () => {
                            const BB = vB.ctx;
                            if (vB._audioUnlocked || !BB) return;
                            vB.autoUnlock = !1;
                            const IB = BB.createBuffer(1, 1, 22050);
                            vB._scratchBuffer = IB;
                            const ZB = new AbortController;
                            let TB = "afterPaint";
                            const JB = () => {
                                var TB;
                                if (vB._audioUnlocked) return;
                                null === (TB = vB._autoResume) || void 0 === TB || TB.call(vB);
                                const JB = BB.createBufferSource();
                                JB.buffer = IB, JB.connect(BB.destination), JB.start(0), BB.resume().catch((() => {})), JB.onended = () => {
                                  JB.disconnect(0), vB._audioUnlocked = !0, ZB.abort();
                                  for (const BB of vB._howls) BB._emit("unlock")
                                }
                              },
                              kB = () => {
                                FB(), JB()
                              },
                              cB = IB => {
                                if (FB(), "inTap" === TB) {
                                  if ("running" === BB.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), JB()
                                } else "afterPaint" === TB && (TB = "queued", (0, oB.d)(IB.timeStamp, (() => {
                                  TB = "inTap", JB()
                                })))
                              };
                            for (const oB of ["touchstart", "touchend"]) document.addEventListener(oB, kB, {
                              capture: !0,
                              signal: ZB.signal
                            });
                            for (const oB of GB.e) document.addEventListener(oB, cB, {
                              capture: !0,
                              signal: ZB.signal
                            })
                          });
                          let NB = 0;
                          const gB = null === (TB = vB._autoSuspend) || void 0 === TB ? void 0 : TB.bind(JB.Howler);

                          function qB() {
                            yB();
                            const {
                              ctx: BB,
                              masterGain: IB
                            } = vB;
                            return BB && IB ? {
                              ctx: BB,
                              destination: IB,
                              holdAwake: BB => {
                                var IB, ZB;
                                (NB += BB ? 1 : -1, BB) ? null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB): null === (ZB = vB._autoSuspend) || void 0 === ZB || ZB.call(vB)
                              },
                              wake: () => {
                                var IB;
                                "running" !== BB.state && (null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB), BB.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function yB() {
                            var BB;
                            (vB.volume(), vB.ctx && vB.autoUnlock) && (null === (BB = vB._unlockAudio) || void 0 === BB || BB.call(vB))
                          }
                          gB && (vB._autoSuspend = () => NB > 0 ? JB.Howler : gB())
                        }, 5036: (BB, IB, ZB) => {
                          function TB(BB) {
                            return {
                              notAfter: BB
                            }
                          }
                          ZB.d(IB, {
                            b: () => kB,
                            f: () => cB,
                            j: () => vB,
                            l: () => TB,
                            o: () => JB,
                            q: () => oB,
                            r: () => GB,
                            s: () => nB,
                            t: () => hB
                          });
                          const JB = TB("\\w$."),
                            oB = TB("\\w.,");

                          function GB(BB) {
                            return IB => kB(IB, BB)
                          }

                          function vB(BB) {
                            return IB => !BB.test(IB.input.slice(0, IB.index))
                          }

                          function kB(BB, IB) {
                            return BB.index > 0 && new RegExp(`[${IB}]`).test(BB.input[BB.index - 1])
                          }

                          function cB(BB, IB, ZB) {
                            return function(BB) {
                              return void 0 !== BB && "function" !== typeof BB
                            }(ZB) ? function(BB, IB, ZB) {
                              const TB = IB.flags.replace(/[gy]/g, ""),
                                JB = new RegExp(`[^${ZB}](?:${IB.source})`, `${TB}g`),
                                oB = [],
                                GB = ZB => {
                                  const TB = ZB.index + ZB[0].length;
                                  return ("" === ZB[0] ? zB(BB, IB, TB) : TB) - 1
                                },
                                vB = new RegExp(`(?:${IB.source})`, `${TB}y`).exec(BB);
                              if (vB) {
                                if (oB.push(vB), !IB.global) return oB;
                                JB.lastIndex = GB(vB)
                              }
                              for (let kB = JB.exec(BB); kB; kB = JB.exec(BB)) {
                                const ZB = zB(BB, IB, kB.index) - kB.index;
                                if (kB[0] = kB[0].slice(ZB), kB.index += ZB, oB.push(kB), !IB.global) break;
                                JB.lastIndex = GB(kB)
                              }
                              return oB
                            }(BB, IB, ZB.notAfter) : function(BB, IB, ZB) {
                              const TB = new RegExp(IB.source, `${IB.flags.replace(/[gy]/g,"")}g`),
                                JB = [];
                              for (let oB = TB.exec(BB); oB; oB = TB.exec(BB))
                                if (!ZB || ZB(oB)) {
                                  if (JB.push(oB), !IB.global) break;
                                  "" === oB[0] && (TB.lastIndex = zB(BB, IB, TB.lastIndex))
                                } else TB.lastIndex = zB(BB, IB, oB.index);
                              return JB
                            }(BB, IB, ZB)
                          }

                          function nB(BB, IB, ZB, TB) {
                            let JB = "",
                              oB = 0;
                            for (const GB of cB(BB, IB, ZB)) JB += BB.slice(oB, GB.index) + TB(GB), oB = GB.index + GB[0].length;
                            return JB + BB.slice(oB)
                          }

                          function hB(BB, IB, ZB) {
                            const TB = [];
                            let JB = 0;
                            for (const oB of cB(BB, IB, ZB)) TB.push(BB.slice(JB, oB.index)), JB = oB.index + oB[0].length;
                            return [...TB, BB.slice(JB)]
                          }

                          function zB(BB, IB, ZB) {
                            var TB;
                            return ZB + (IB.unicode && (null !== (TB = BB.codePointAt(ZB)) && void 0 !== TB ? TB : 0) > 65535 ? 2 : 1)
                          }
                        }, 4995: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            b: () => JB,
                            e: () => kB,
                            h: () => oB,
                            i: () => GB,
                            k: () => vB,
                            l: () => qB,
                            m: () => nB,
                            q: () => hB,
                            u: () => gB,
                            v: () => FB
                          });
                          var TB = ZB(1651);
                          const JB = 24e3,
                            oB = "/docs/llms.txt",
                            GB = `${TB.b}${oB}`,
                            vB = "/llms.txt",
                            kB = "/docs/llms-full.txt";

                          function cB(BB) {
                            return BB || "index"
                          }

                          function nB(BB) {
                            return `/docs/${cB(BB)}.md`
                          }

                          function hB(BB, IB) {
                            return `/docs/${cB(BB)}/${IB+1}.md`
                          }
                          const zB = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function FB(BB) {
                            const IB = zB.exec(BB);
                            return null === IB ? null : {
                              name: IB[1],
                              part: void 0 === IB[2] ? null : Number(IB[2])
                            }
                          }
                          const NB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function gB(BB) {
                            const IB = NB.exec(BB);
                            if (null === IB) return null;
                            const [, ZB = "", TB] = IB;
                            return void 0 === TB ? nB(ZB) : hB(ZB, Number(TB) - 1)
                          }

                          function qB(BB) {
                            return `/docsHtml/${cB(BB)}.html`
                          }
                        }, 5016: (BB, IB, ZB) => {
                          ZB.d(IB, {
                            c: () => JB,
                            f: () => TB,
                            i: () => oB,
                            j: () => kB,
                            k: () => GB
                          });
                          const TB = ["sine", "triangle", "square", "sawtooth"],
                            JB = 55,
                            oB = {
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

                          function GB(BB) {
                            return "string" !== typeof BB ? BB : Object.hasOwn(oB, BB) ? oB[BB] : null
                          }

                          function vB(BB, IB, ZB) {
                            return Math.min(ZB, Math.max(IB, BB))
                          }

                          function kB(BB) {
                            const IB = vB(BB.durationMs, 10, 500),
                              ZB = vB(BB.attackMs, 0, IB),
                              {
                                intonation: JB
                              } = BB;
                            return {
                              waveform: TB.includes(BB.waveform) ? BB.waveform : "sine",
                              pitchHz: vB(BB.pitchHz, 20, 4e3),
                              glideSemitones: vB(BB.glideSemitones, -24, 24),
                              durationMs: IB,
                              attackMs: ZB,
                              releaseMs: vB(BB.releaseMs, 0, IB - ZB),
                              lowpassHz: null === BB.lowpassHz ? null : vB(BB.lowpassHz, 20, 2e4),
                              volume: vB(BB.volume, 0, 2),
                              intonation: {
                                variationSemitones: vB(JB.variationSemitones, 0, 6),
                                declineSemitones: vB(JB.declineSemitones, 0, 12),
                                questionRiseSemitones: vB(JB.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: vB(JB.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: vB(BB.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const BB in modules) Object.freeze(modules[BB]);