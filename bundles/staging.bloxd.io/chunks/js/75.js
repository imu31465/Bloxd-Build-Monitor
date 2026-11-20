export const id = 75;
export const ids = [75, 91];
export const modules = {
    4487: (UU, RU, gU) => {
      gU.d(RU, {
        d: () => QU,
        e: () => eU
      });
      var tU = gU(1037),
        pU = gU.n(tU),
        EU = gU(56),
        PU = gU(1181),
        TU = gU(4495),
        qU = gU(1777),
        KU = gU(2254),
        cU = gU(4501),
        GU = gU(1090);
      const jU = new WeakMap;
      let uU = 0;

      function CU(UU) {
        let RU = jU.get(UU);
        return void 0 === RU && (RU = uU++, jU.set(UU, RU)), RU
      }

      function hU(UU) {
        let {
          piece: RU
        } = UU;
        return "space" === RU.kind ? (0, GU.jsx)(GU.Fragment, {
          children: RU.text
        }) : (0, GU.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${RU.delayMs}ms`
          },
          children: (0, GU.jsx)(TU.c, {
            text: "icon" === RU.kind ? `[[${RU.icon}]]` : RU.text
          })
        })
      }

      function QU(UU) {
        let {
          display: RU
        } = UU;
        const {
          selectedLanguage: gU
        } = (0, PU.B)(), tU = (0, EU.useMemo)((() => (0, cU.b)((0, cU.c)(RU).plan.pieces)), [RU, gU.code]);
        return (0, GU.jsxs)("div", {
          className: pU()("Dialogue", {
            DialogueAnimateIn: !1 !== RU.animateIn
          }),
          children: [RU.speakerName && (0, GU.jsx)(qU.e, {
            text: RU.speakerName,
            className: "DialogueSpeaker"
          }), (0, GU.jsx)("p", {
            className: "DialogueLine",
            children: tU.map(((UU, RU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, GU.jsx)("span", {
              className: "DialogueGlue",
              children: UU.map(((UU, RU) => (0, GU.jsx)(hU, {
                piece: UU
              }, RU)))
            }, RU)))
          })]
        })
      }
      const eU = (0, EU.memo)((function() {
        const UU = (0, KU.g)("dialogue");
        return (0, GU.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: UU && (0, GU.jsx)(QU, {
            display: UU
          }, CU(UU))
        })
      }))
    },
    4360: (UU, RU, gU) => {
        gU.r(RU), gU.d(RU, {
          default: () => UP
        });
        var tU = gU(56),
          pU = gU(1037),
          EU = gU.n(pU),
          PU = gU(1479),
          TU = gU(1481),
          qU = gU(21),
          KU = gU(74),
          cU = gU(4365),
          GU = gU(4378),
          jU = gU(4387),
          uU = gU(4037),
          CU = gU(1090);
        const hU = "/textures/docs/icons";

        function QU(UU) {
          let {
            name: RU,
            isTinted: gU,
            className: tU,
            style: pU
          } = UU;
          const PU = `${hU}/${RU}.png`;
          return gU ? (0, CU.jsxs)("span", {
            className: EU()("DocsPixelIcon", "Tinted", tU),
            "aria-hidden": "true",
            style: pU,
            children: [(0, CU.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${PU}")`,
                WebkitMaskImage: `url("${PU}")`
              }
            }), (0, CU.jsx)("img", {
              src: PU,
              alt: ""
            })]
          }) : (0, CU.jsx)("img", {
            className: EU()("DocsPixelIcon", tU),
            src: PU,
            alt: "",
            "aria-hidden": "true",
            style: pU
          })
        }
        const eU = 1500;

        function WU() {
          const [UU, RU] = (0, tU.useState)(null);
          (0, tU.useEffect)((() => {
            if (null === UU) return;
            const gU = setTimeout((() => {
              RU(null)
            }), eU);
            return () => {
              clearTimeout(gU)
            }
          }), [UU]);
          return [UU, UU => {
            (0, uU.e)(UU).then((() => {
              RU({
                text: UU,
                failed: !1
              })
            }), (gU => {
              console.error("Could not copy to the clipboard", gU), RU({
                text: UU,
                failed: !0
              })
            }))
          }]
        }

        function fU(UU) {
          let {
            text: RU,
            label: gU,
            className: tU
          } = UU;
          const [pU, PU] = WU(), TU = !1 === (null === pU || void 0 === pU ? void 0 : pU.failed);
          return (0, CU.jsxs)("button", {
            type: "button",
            className: EU()("DocsCopyButton", tU, {
              Copied: TU
            }),
            title: `Copy ${RU.length>40?"to clipboard":RU}`,
            "aria-label": gU ? void 0 : `Copy ${RU}`,
            onClick: UU => {
              UU.stopPropagation(), PU(RU)
            },
            children: [(0, CU.jsx)(QU, {
              name: TU ? "check" : "copy"
            }), gU && (0, CU.jsx)("span", {
              children: TU ? "Copied" : null !== pU && void 0 !== pU && pU.failed ? "Copy failed" : gU
            })]
          })
        }
        cU.d.registerLanguage("javascript", GU.b), cU.d.registerLanguage("typescript", jU.c);
        const xU = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          mU = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          IU = 24;

        function JU(UU) {
          let {
            code: RU,
            lang: gU,
            compact: pU = !1
          } = UU;
          const PU = (0, tU.useMemo)((() => function(UU, RU) {
              const gU = xU[RU];
              return gU ? cU.d.highlight(UU, {
                language: gU
              }).value : UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(RU, gU)), [RU, gU]),
            TU = RU.split("\n").length,
            qU = !pU && TU > IU + 6,
            [KU, GU] = (0, tU.useState)(!1),
            jU = xU[gU];
          return (0, CU.jsxs)("div", {
            className: EU()("DocsCodeBlock", {
              Compact: pU,
              Collapsed: qU && !KU
            }),
            children: [!pU && (0, CU.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, CU.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: jU ? mU[jU] : "Text"
              }), (0, CU.jsx)(fU, {
                text: RU,
                label: "Copy"
              })]
            }), (0, CU.jsx)("pre", {
              children: (0, CU.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: PU
                }
              })
            }), qU && (0, CU.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": KU,
              onClick: () => {
                GU(!KU)
              },
              children: [(0, CU.jsx)(QU, {
                name: KU ? "chevron-up" : "chevron-down"
              }), KU ? "Show less" : `Show all ${TU} lines`]
            })]
          })
        }
        var wU = gU(4396);
        var nU = gU(4405);
        const bU = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function oU(UU) {
          const RU = new Map;
          let gU, tU = [],
            pU = !1;
          const EU = () => {
            gU && RU.set(gU.name, gU.lines.join("\n").trimEnd())
          };
          for (const PU of UU.split("\n")) {
            const UU = PU.match(bU);
            pU || PU.startsWith("/*") ? (pU || (EU(), gU = void 0), tU.push(PU), pU = !PU.includes("*/")) : UU ? (EU(), gU = {
              name: UU[1],
              lines: [...tU, PU]
            }, tU = []) : gU && (PU.startsWith(" ") || PU.startsWith("\t") || /^[}\])|]/.test(PU)) ? gU.lines.push(PU) : gU && "" !== PU.trim() && (EU(), gU = void 0)
          }
          return EU(), RU
        }

        function ZU(UU) {
          return "methods" === UU || "callbacks" === UU || "settings" === UU
        }
        const aU = {
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
              setterSnippet: (UU, RU) => `api.setClientOption(playerId, "${UU}", ${RU})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (UU, RU) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${UU}", ${RU})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (UU, RU) => `api.setMobSetting(mobId, "${UU}", ${RU})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (UU, RU) => `api.setVehicleSetting(vehicleId, "${UU}", ${RU})`
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
          YU = {
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

        function BU(UU) {
          return UU.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function VU(UU) {
          let RU = !1;
          return UU.split("\n").map((UU => (UU.startsWith("```") && (RU = !RU), !RU && /^#{3,} /.test(UU) ? UU.slice(1) : UU))).join("\n")
        }

        function rU(UU) {
          return "readme" === UU ? "getting-started" : BU(UU)
        }
        const XU = "## Glossary of Referenced Types";
        const vU = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...nU.e.flatMap((UU => {
            const RU = {
              id: UU.id,
              slug: rU(UU.id),
              title: UU.title,
              markdown: UU.content,
              ...aU[UU.id]
            };
            if ("readme" === UU.id) return function(UU) {
              const RU = UU.markdown.indexOf(XU),
                gU = UU.markdown.indexOf("\n```", RU),
                tU = UU.markdown.indexOf("\n```", gU + 1);
              if (-1 === RU || -1 === gU || -1 === tU) throw new Error(`Getting started has no "${XU}" section with a code block`);
              const pU = UU.markdown.slice(RU + 31, gU).trim(),
                EU = [...oU(UU.markdown.slice(UU.markdown.indexOf("\n", gU + 1) + 1, tU))].map((UU => {
                  let [RU, gU] = UU;
                  return `## ${RU}\n\n\`\`\`ts\n${gU}\n\`\`\`\n`
                })),
                PU = UU.markdown.slice(UU.markdown.indexOf("\n", tU + 1) + 1);
              return [{
                ...UU,
                markdown: `${UU.markdown.slice(0,RU)}${PU}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${pU}\n\n${EU.join("\n")}`
              }]
            }(RU);
            if ("howTo" === UU.id) {
              const {
                parent: UU,
                guides: gU
              } = function(UU) {
                const [RU, ...gU] = UU.markdown.split(/^(?=## )/m), tU = [RU], pU = [];
                for (const PU of gU) {
                  var EU;
                  const RU = PU.indexOf("\n"),
                    gU = PU.slice(3, RU).trim(),
                    TU = PU.slice(RU + 1);
                  if (!TU.includes("```")) {
                    tU.push(PU);
                    continue
                  }
                  const qU = null !== (EU = YU[gU]) && void 0 !== EU ? EU : {
                    icon: "lightbulb",
                    summary: `How to use ${gU.toLowerCase()} in World Code.`
                  };
                  pU.push({
                    id: `${UU.id}${gU.split(/[^A-Za-z0-9]+/).map((UU=>UU.charAt(0).toUpperCase()+UU.slice(1))).join("")}`,
                    slug: `${UU.slug}-${BU(gU)}`,
                    title: gU,
                    layout: "article",
                    sourceAnchor: (0, wU.n)(gU),
                    markdown: `# ${gU}\n\n${VU(TU)}`,
                    ...qU
                  })
                }
                return {
                  parent: {
                    ...UU,
                    markdown: tU.join(""),
                    childPageIds: pU.map((UU => UU.id))
                  },
                  guides: pU
                }
              }(RU);
              return [UU, ...gU]
            }
            return [RU]
          }))],
          dU = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...vU.filter((UU => void 0 !== UU.sourceAnchor)).map((UU => UU.id))]
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

        function HU(UU) {
          return vU.find((RU => RU.id === UU))
        }
        const SU = new Map;

        function sU(UU) {
          let RU = SU.get(UU.id);
          return RU || (RU = (0, wU.q)(UU.markdown, "changelog" === UU.layout ? 3 : 2), SU.set(UU.id, RU)), RU
        }

        function yU(UU, RU) {
          return sU(UU).sections.some((UU => UU.heading.anchor === RU || UU.blocks.some((UU => "heading" === UU.kind && UU.anchor === RU))))
        }

        function kU(UU) {
          const [RU, ...gU] = UU.replace(/^#/, "").split("-"), tU = vU.find((UU => UU.id === RU));
          if (!tU) return null;
          const pU = gU.length > 0 ? (0, wU.n)(gU.join("-")) : "";
          for (const PU of null !== (EU = tU.childPageIds) && void 0 !== EU ? EU : []) {
            var EU;
            const UU = HU(PU);
            if (UU.sourceAnchor === pU) return {
              page: UU,
              anchor: ""
            };
            if (yU(UU, pU)) return {
              page: UU,
              anchor: pU
            }
          }
          return {
            page: tU,
            anchor: pU
          }
        }
        const FU = {
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

        function iU(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tU = RU.slug ? `${UU}/${RU.slug}` : UU;
          return gU ? `${tU}#${gU}` : tU
        }
        var AU = gU(4417);
        const zU = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          MU = new Set(["GameApi", "Console", "_TypeOf"]),
          DU = 4;

        function LU(UU) {
          let RU = UU.length;
          for (; RU > 0 && "" === UU[RU - 1].trim();) RU--;
          return UU.slice(0, RU)
        }

        function NU(UU) {
          var RU;
          const gU = LU(UU);
          if (null === (RU = gU.at(-1)) || void 0 === RU || !RU.trimEnd().endsWith("*/")) return {
            lines: gU,
            doc: ""
          };
          const tU = gU.findLastIndex((UU => UU.startsWith("/**")));
          return -1 === tU ? {
            lines: gU,
            doc: ""
          } : {
            lines: LU(gU.slice(0, tU)),
            doc: gU.slice(tU).join("\n")
          }
        }

        function lU(UU) {
          var RU;
          const gU = UU.split("\n"),
            tU = gU.flatMap(((UU, RU) => zU.test(UU) ? [RU] : []));
          let pU = NU(gU.slice(0, null !== (RU = tU[0]) && void 0 !== RU ? RU : gU.length)).doc;
          return tU.map(((UU, RU) => {
            var EU;
            const PU = NU(gU.slice(UU, null !== (EU = tU[RU + 1]) && void 0 !== EU ? EU : gU.length)),
              TU = {
                name: gU[UU].match(zU)[1],
                doc: pU,
                lines: PU.lines
              };
            return pU = PU.doc, TU
          }))
        }

        function OU(UU) {
          var RU;
          const gU = UU.match(/^readonly \[([\s\S]*)\]$/);
          return gU ? null !== (RU = gU[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== RU ? RU : [] : null
        }

        function UR(UU) {
          if (!UU.startsWith("{") || !UU.endsWith("}")) return null;
          const RU = {
              keys: [],
              values: []
            },
            gU = UU => {
              const gU = UU.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              gU && (RU.keys.push(gU[1].startsWith('"') ? gU[1] : `"${gU[1]}"`), RU.values.push(gU[2].trim()))
            };
          let tU = 0,
            pU = "";
          for (const EU of UU.slice(1, -1)) "{[(".includes(EU) ? tU++ : "}])".includes(EU) && tU--, ";" === EU && 0 === tU ? (gU(pU), pU = "") : pU += EU;
          return gU(pU), RU
        }

        function RR(UU) {
          return UU.length > DU ? `\n\t| ${UU.join("\n\t| ")}` : UU.join(" | ")
        }

        function gR(UU, RU) {
          const gU = function(UU, RU) {
            return UU.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((UU, gU) => {
              var tU;
              const pU = null === (tU = RU.get(gU)) || void 0 === tU ? void 0 : tU.object;
              return pU ? RR(pU.values) : UU
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((UU, gU) => {
              var tU, pU;
              const EU = null === (tU = RU.get(gU)) || void 0 === tU || null === (pU = tU.object) || void 0 === pU ? void 0 : pU.values.map(OU);
              return null !== EU && void 0 !== EU && EU.every((UU => null !== UU)) ? RR([...new Set(EU.flat())]) : UU
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((UU, gU) => {
              var tU;
              const pU = null === (tU = RU.get(gU)) || void 0 === tU ? void 0 : tU.members;
              return pU ? RR(pU) : UU
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((UU, gU) => {
              var tU;
              const pU = null === (tU = RU.get(gU)) || void 0 === tU ? void 0 : tU.object;
              return pU ? RR(pU.keys) : UU
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((UU, gU) => {
              var tU, pU;
              return null !== (tU = null === (pU = RU.get(gU)) || void 0 === pU ? void 0 : pU.text) && void 0 !== tU ? tU : UU
            }))
          }(UU.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), RU);
          return [UU.doc, gU].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function tR(UU) {
          const RU = lU(UU),
            gU = function(UU) {
              const RU = new Map,
                gU = UU.find((UU => "_TypeOf" === UU.name));
              let tU = null;
              const pU = () => {
                if (tU) {
                  const UU = tU.lines.join("\n");
                  RU.set(tU.name, {
                    text: UU,
                    members: OU(UU),
                    object: UR(UU)
                  })
                }
              };
              for (const EU of gU.lines.slice(1, -1)) {
                const UU = EU.match(/^\t([\w$]+): (.+)$/);
                UU ? (pU(), tU = {
                  name: UU[1],
                  lines: [UU[2]]
                }) : tU && tU.lines.push(EU.replace(/^\t/, ""))
              }
              return pU(), RU
            }(RU),
            tU = new Map;
          for (const pU of RU) MU.has(pU.name) || tU.has(pU.name) || tU.set(pU.name, gR(pU, gU));
          return tU
        }
        let pR, ER, PR;

        function TR() {
          return ER ??= function(UU) {
            const RU = lU(UU).find((UU => "GameApi" === UU.name)),
              gU = new Map,
              tU = RU.lines;
            for (let EU = 0; EU < tU.length; EU++) {
              var pU;
              if (!tU[EU].trimStart().startsWith("/**")) continue;
              const UU = EU;
              for (; EU < tU.length && !tU[EU].includes("*/");) EU++;
              const RU = null === (pU = tU[EU + 1]) || void 0 === pU ? void 0 : pU.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!RU) continue;
              let PU = null;
              const TU = [];
              let qU = "description",
                KU = !1;
              for (const gU of tU.slice(UU, EU + 1).join("\n").split("\n").map((UU => UU.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const UU = gU.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                UU ? (PU = UU[1].trim(), qU = "deprecation") : gU.startsWith("@") ? (qU = "otherTag", KU = !0) : "" === gU.trim() ? KU || (qU = "description", TU.push(gU)) : "deprecation" !== qU || /^[A-Z]/.test(gU.trim()) ? "otherTag" !== qU && (qU = "description", TU.push(gU)) : PU = `${PU} ${gU.trim()}`.trim()
              }
              gU.set(RU[1], {
                deprecation: PU,
                description: TU.join("\n").trim()
              })
            }
            return gU
          }(AU.default), ER
        }

        function qR() {
          if (!PR) {
            PR = new Map;
            for (const UU of vU) {
              const RU = (0, wU.o)(sU(UU)).flatMap((UU => UU.blocks));
              for (const UU of (0, wU.k)(RU))
                if ("ts" === UU.lang || "typescript" === UU.lang)
                  for (const [RU, gU] of oU(UU.code)) PR.set(RU, gU)
            }
            for (const [UU, RU] of(pR ??= tR(AU.default), pR)) PR.has(UU) || PR.set(UU, RU)
          }
          return PR
        }
        const KR = {
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
        let cR;

        function GR() {
          if (!cR) {
            cR = new Map;
            for (const UU of vU)
              if (ZU(UU.layout))
                for (const RU of sU(UU).sections) cR.has(RU.heading.text) || cR.set(RU.heading.text, {
                  pageId: UU.id,
                  anchor: RU.heading.anchor
                })
          }
          return cR
        }

        function jR(UU) {
          const RU = UU.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return RU ? GR().get(RU[1]) : void 0
        }
        const uR = (0, tU.createContext)("/docs"),
          CR = (0, tU.createContext)(null),
          hR = (0, tU.createContext)(!1),
          QR = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function eR(UU) {
          const RU = UU.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return RU ? RU[1] : null
        }

        function WR(UU) {
          let {
            colour: RU
          } = UU;
          return (0, CU.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: RU
            },
            "aria-hidden": "true"
          })
        }

        function fR(UU) {
          const RU = [];
          let gU = 0;
          for (const tU of UU.matchAll(QR)) RU.push(UU.slice(gU, tU.index), (0, CU.jsx)(WR, {
            colour: tU[0]
          }), tU[0]), gU = tU.index + tU[0].length;
          return RU.push(UU.slice(gU)), RU
        }

        function xR(UU) {
          let {
            href: RU,
            children: gU
          } = UU;
          const pU = (0, tU.useContext)(uR);
          if (RU.startsWith("#")) {
            const UU = kU(RU);
            if (UU) return (0, CU.jsx)(PU.c, {
              to: iU(pU, UU.page, UU.anchor),
              children: (0, CU.jsx)(hR.Provider, {
                value: !0,
                children: gU
              })
            })
          }
          return (0, CU.jsx)("a", {
            href: RU,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, CU.jsx)(hR.Provider, {
              value: !0,
              children: gU
            })
          })
        }

        function mR(UU) {
          let {
            code: RU
          } = UU;
          const gU = (0, tU.useContext)(uR);
          if ((0, tU.useContext)(hR)) return (0, CU.jsx)("code", {
            className: "DocsInlineCode",
            children: RU
          });
          if (qR().has(RU)) return (0, CU.jsx)(nR, {
            type: RU
          });
          const pU = jR(RU);
          if (pU) return (0, CU.jsx)(PU.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: iU(gU, HU(pU.pageId), pU.anchor),
            children: RU
          });
          const EU = eR(RU);
          return (0, CU.jsxs)("code", {
            className: "DocsInlineCode",
            children: [EU && (0, CU.jsx)(WR, {
              colour: EU
            }), RU]
          })
        }

        function IR(UU) {
          let {
            text: RU
          } = UU;
          const gU = [];
          let pU = 0;
          for (const tU of RU.matchAll(wU.g)) {
            tU.index > pU && gU.push(...fR(RU.slice(pU, tU.index)));
            const [, UU, EU, PU, TU, qU] = tU;
            UU ? gU.push((0, CU.jsx)(mR, {
              code: (0, wU.l)(UU, EU)
            })) : PU ? gU.push((0, CU.jsx)("strong", {
              children: (0, CU.jsx)(IR, {
                text: PU
              })
            })) : gU.push((0, CU.jsx)(xR, {
              href: qU,
              children: (0, CU.jsx)(IR, {
                text: TU
              })
            })), pU = tU.index + tU[0].length
          }
          return pU < RU.length && gU.push(...fR(RU.slice(pU))), (0, CU.jsx)(CU.Fragment, {
            children: gU.map(((UU, RU) => (0, CU.jsx)(tU.Fragment, {
              children: UU
            }, RU)))
          })
        }
        const JR = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          wR = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function nR(UU) {
          let {
            type: RU
          } = UU;
          const gU = qR(),
            pU = [];
          for (const tU of RU.trim().matchAll(JR)) {
            const [UU, RU, EU, PU, TU] = tU;
            RU ? pU.push((0, CU.jsx)("span", {
              className: "DocsTypeString",
              children: UU
            })) : EU && gU.has(EU) ? pU.push((0, CU.jsx)(YR, {
              name: EU,
              definition: gU.get(EU)
            })) : EU ? pU.push((0, CU.jsx)("span", {
              className: wR.has(EU) ? "DocsTypeKeyword" : "DocsTypeName",
              children: UU
            })) : PU ? pU.push((0, CU.jsx)("span", {
              className: "DocsTypeNumber",
              children: UU
            })) : TU ? pU.push(" ") : pU.push((0, CU.jsx)("span", {
              className: "DocsTypePunctuation",
              children: UU
            }))
          }
          return (0, CU.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: pU.map(((UU, RU) => (0, CU.jsx)(tU.Fragment, {
              children: UU
            }, RU)))
          })
        }
        const bR = 480,
          oR = 6,
          ZR = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let aR = 0;

        function YR(UU) {
          let {
            name: RU,
            definition: gU
          } = UU;
          const pU = (0, tU.useContext)(uR),
            EU = KR[RU],
            TU = (0, tU.useRef)(null),
            qU = (0, tU.useRef)(null),
            cU = (0, tU.useRef)(null),
            [GU, jU] = (0, tU.useState)(!1),
            [uU, hU] = (0, tU.useState)(null),
            eU = (0, tU.useRef)(),
            WU = (0, tU.useContext)(CR),
            [fU] = (0, tU.useState)((() => "DocsTypePopover-" + aR++)),
            xU = () => {
              clearTimeout(eU.current), jU(!0)
            },
            mU = () => {
              clearTimeout(eU.current), eU.current = setTimeout((() => {
                jU(!1)
              }), 120)
            };
          return (0, tU.useEffect)((() => {
            if (!GU) return;
            const UU = UU => {
              if ("Escape" === UU.key) {
                var RU, gU;
                if (null !== (RU = qU.current) && void 0 !== RU && RU.contains(document.activeElement)) null === (gU = TU.current) || void 0 === gU || gU.focus();
                jU(!1)
              }
            };
            return document.addEventListener("keydown", UU), () => {
              document.removeEventListener("keydown", UU)
            }
          }), [GU]), (0, tU.useEffect)((() => () => {
            clearTimeout(eU.current)
          }), []), (0, tU.useLayoutEffect)((() => {
            if (!GU || !TU.current || !qU.current) return void hU(null);
            const UU = TU.current.getBoundingClientRect(),
              RU = qU.current.offsetHeight,
              gU = Math.min(bR, window.innerWidth - 32),
              tU = Math.min(Math.max(16, UU.left), window.innerWidth - gU - 16),
              pU = UU.bottom + oR + RU < window.innerHeight;
            hU({
              left: tU,
              top: pU ? UU.bottom + oR : Math.max(16, UU.top - oR - RU)
            })
          }), [GU]), (0, CU.jsxs)(CU.Fragment, {
            children: [(0, CU.jsx)("button", {
              type: "button",
              ref: TU,
              className: "DocsTypeLink",
              "aria-expanded": GU,
              "aria-describedby": GU ? fU : void 0,
              onMouseEnter: xU,
              onMouseLeave: mU,
              onFocus: xU,
              onBlur: mU,
              onKeyDown: UU => {
                "Tab" === UU.key && !UU.shiftKey && cU.current && (UU.preventDefault(), cU.current.focus())
              },
              onClick: xU,
              children: RU
            }), GU && (0, KU.createPortal)((0, CU.jsxs)("span", {
              ref: qU,
              id: fU,
              className: "DocsTypePopover",
              role: "tooltip",
              style: uU ? {
                left: uU.left,
                top: uU.top,
                maxWidth: bR
              } : {
                visibility: "hidden"
              },
              onMouseEnter: xU,
              onMouseLeave: mU,
              onFocus: xU,
              onBlur: mU,
              children: [(0, CU.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, CU.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: RU
                }), EU && (0, CU.jsxs)(PU.c, {
                  ref: cU,
                  className: "DocsTypePopoverLink",
                  to: iU(pU, HU(EU)),
                  onClick: () => {
                    jU(!1)
                  },
                  onKeyDown: UU => {
                    if ("Tab" === UU.key) {
                      var RU;
                      if (UU.preventDefault(), UU.shiftKey || !TU.current || ! function(UU, RU) {
                          const gU = [...document.querySelectorAll(ZR)],
                            tU = gU.slice(gU.indexOf(UU) + 1).find((UU => UU.getClientRects().length > 0 && !(null !== RU && void 0 !== RU && RU.contains(UU))));
                          return null === tU || void 0 === tU || tU.focus(), void 0 !== tU
                        }(TU.current, qU.current)) null === (RU = TU.current) || void 0 === RU || RU.focus();
                      UU.shiftKey || jU(!1)
                    }
                  },
                  children: [HU(EU).title, (0, CU.jsx)(QU, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, CU.jsx)(JU, {
                lang: "ts",
                code: gU,
                compact: !0
              })]
            }), null !== WU && void 0 !== WU ? WU : document.body)]
          })
        }
        var BR = gU(189),
          VR = gU(4422),
          rR = gU(4430),
          XR = gU(4438);
        const vR = {
          progressBar: {
            aU: 30,
            YU: .075,
            BU: 5,
            VU: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            vU: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            HU: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            SU: !0,
            scale: 3,
            rotation: 15,
            sU: !1
          },
          gravityBar: {
            aU: 30,
            kU: .25,
            FU: 3,
            iU: .8,
            gravity: 1,
            AU: 1.5,
            zU: 8,
            MU: 4,
            VU: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            LU: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            lU: 5,
            OU: 1200,
            UR: .15,
            RR: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var dR = gU(299),
          HR = gU(1849);

        function SR(UU) {
          return UU.startsWith("fa-")
        }
        const sR = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          yR = {
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

        function kR(UU) {
          return "string" === typeof UU ? "text" : "entityName" in UU || "translationKey" in UU ? "other" : (0, dR.vb)(UU) ? "progressBar" : (0, dR.ub)(UU) ? "keyBinding" : "icon" in UU ? "icon" : "str" in UU && "string" === typeof UU.str ? "text" : "other"
        }
        const FR = [{
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
          iR = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...FR],
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
                options: HR.k
              },
              isRequired: !0
            }, ...FR],
            other: []
          };

        function AR(UU) {
          return "string" === typeof UU ? {
            str: UU
          } : UU
        }

        function zR(UU, RU) {
          let gU = AR(UU);
          for (const tU of RU) gU = gU && "object" === typeof gU ? gU[tU] : void 0;
          return gU
        }

        function MR(UU, RU, gU) {
          const tU = (UU, pU) => {
            var EU;
            const PU = RU[pU],
              TU = {
                ...UU
              };
            if (pU === RU.length - 1) return void 0 === gU ? delete TU[PU] : TU[PU] = gU, TU;
            const qU = tU(null !== (EU = UU[PU]) && void 0 !== EU ? EU : {}, pU + 1);
            return 0 === Object.keys(qU).length ? delete TU[PU] : TU[PU] = qU, TU
          };
          return function(UU) {
            const RU = Object.keys(UU);
            return "string" === typeof UU.str && 1 === RU.length ? UU.str : UU
          }(tU(AR(UU), 0))
        }

        function DR(UU, RU) {
          const gU = kR(UU),
            tU = iR[gU].find((UU => UU.path.join(".") === RU.join("."))),
            pU = null !== tU && void 0 !== tU && tU.isRequired && "other" !== gU ? zR(yR[gU], RU) : void 0;
          return MR(UU, RU, pU)
        }

        function LR(UU) {
          switch (kR(UU)) {
            case "text":
              return String(zR(UU, ["str"]));
            case "icon":
              return String(zR(UU, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(zR(UU,["progress"])))}%`;
            case "keyBinding":
              return String(zR(UU, ["action"]));
            case "other":
              return JSON.stringify(UU)
          }
        }
        const NR = /^[A-Za-z_$][\w$]*$/;

        function lR(UU) {
          if (Array.isArray(UU)) return `[${UU.map(lR).join(", ")}]`;
          if (UU && "object" === typeof UU) {
            const RU = Object.entries(UU).map((UU => {
              let [RU, gU] = UU;
              return `${NR.test(RU)?RU:JSON.stringify(RU)}: ${lR(gU)}`
            }));
            return 0 === RU.length ? "{}" : `{ ${RU.join(", ")} }`
          }
          return JSON.stringify(UU)
        }

        function OR(UU) {
          const RU = UU.map(lR),
            gU = `[${RU.join(", ")}]`;
          return gU.length <= 60 ? gU : `[\n${RU.map((UU=>`    ${UU},`)).join("\n")}\n]`
        }
        const Ug = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Rg(UU) {
          let RU = "";
          for (let pU = 0; pU < UU.length; pU++) {
            const EU = UU[pU];
            if ("\\" === EU) {
              var gU;
              const tU = null !== (gU = UU[pU + 1]) && void 0 !== gU ? gU : "";
              RU += "'" === tU ? "'" : EU + tU, pU++
            } else if ('"' === EU) RU += '\\"';
            else {
              var tU;
              RU += null !== (tU = Ug[EU]) && void 0 !== tU ? tU : EU
            }
          }
          return `"${RU}"`
        }

        function gg(UU) {
          if ("string" === typeof UU) return !0;
          if (!UU || "object" !== typeof UU || Array.isArray(UU)) return !1;
          const RU = UU;
          return "ProgressBar" === RU.type ? "number" === typeof RU.progress : "StyledKeyBinding" === RU.type ? HR.k.includes(RU.action) : "string" === typeof RU.icon || "string" === typeof RU.str || "string" === typeof RU.entityName || "string" === typeof RU.translationKey
        }

        function tg(UU) {
          let RU;
          try {
            RU = function(UU) {
              let RU = "",
                gU = "",
                tU = 0;
              const pU = () => {
                RU += gU.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), gU = ""
              };
              for (; tU < UU.length;) {
                const EU = UU.slice(tU).search(/["'`]|\/\//);
                if (-1 === EU) {
                  gU += UU.slice(tU);
                  break
                }
                gU += UU.slice(tU, tU + EU);
                const PU = tU + EU,
                  TU = UU[PU];
                if ("/" === TU) {
                  const RU = UU.indexOf("\n", PU);
                  tU = -1 === RU ? UU.length : RU;
                  continue
                }
                if (pU(), "`" === TU) throw new Error("Use quotes rather than template strings.");
                let qU = PU + 1;
                for (; qU < UU.length && UU[qU] !== TU;) qU += "\\" === UU[qU] ? 2 : 1;
                if (qU >= UU.length) throw new Error("A string is missing its closing quote.");
                const KU = UU.slice(PU + 1, qU);
                RU += Rg(KU), tU = qU + 1
              }
              return pU(), JSON.parse(RU)
            }(UU.trim())
          } catch (tU) {
            return {
              parts: null,
              error: tU instanceof SyntaxError ? "This isn't a valid array yet." : tU.message
            }
          }
          if (!Array.isArray(RU)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const gU = RU.findIndex((UU => !gg(UU)));
          return -1 !== gU ? {
            parts: null,
            error: `Part ${gU+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: RU,
            error: null
          }
        }
        const pg = 1 / BR.e.clientTicksPerSecond,
          Eg = 700,
          Pg = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Tg = {
            progressBar: vR.progressBar.vU,
            timedClick: vR.timedClick.icon,
            gravityBar: vR.gravityBar.icon,
            precisionBar: vR.precisionBar.icon,
            rhythmClick: vR.rhythmClick.icon
          };

        function qg(UU) {
          let {
            type: RU
          } = UU;
          const [gU, pU] = (0, tU.useState)("ready"), [PU, TU] = (0, tU.useState)(1), [qU, KU] = (0, tU.useState)(!0), cU = (0, tU.useRef)(null), GU = (0, tU.useRef)(null), jU = (0, tU.useRef)(null), uU = (0, tU.useRef)(new Set), hU = (0, tU.useRef)(!1), eU = Tg[RU], WU = (0, tU.useMemo)((() => ({
            getState: () => {
              var UU, RU;
              return null !== (UU = null === (RU = jU.current) || void 0 === RU ? void 0 : RU.getState()) && void 0 !== UU ? UU : Pg
            },
            onFrame: UU => (uU.current.add(UU), () => {
              uU.current.delete(UU)
            })
          })), []);
          (0, tU.useEffect)((() => {
            const UU = cU.current,
              RU = GU.current;
            if (!UU || !RU) return;
            const gU = new ResizeObserver((() => {
              TU(UU.clientWidth / Math.max(1, RU.offsetWidth))
            }));
            return gU.observe(UU), () => {
              gU.disconnect()
            }
          }), []), (0, tU.useEffect)((() => {
            var UU;
            if ("playing" !== gU) return;
            let tU = !1;
            const EU = new XR.d[RU](vR[RU], (UU => {
              tU = !0, KU(!1), pU(UU ? "succeeded" : "failed")
            }), (() => {}));
            jU.current = EU;
            let PU = 0,
              TU = performance.now(),
              qU = requestAnimationFrame((function UU(RU) {
                for (PU += Math.min(.25, (RU - TU) / 1e3), TU = RU; PU >= pg && !tU;) PU -= pg, EU.handleTick(pg);
                for (const gU of uU.current) gU();
                tU || (qU = requestAnimationFrame(UU))
              }));
            return null === (UU = cU.current) || void 0 === UU || UU.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(qU), EU.tearDown(), jU.current = null, hU.current = !1
            }
          }), [gU, RU]), (0, tU.useEffect)((() => {
            if (qU) return;
            const UU = setTimeout((() => {
              KU(!0)
            }), Eg);
            return () => {
              clearTimeout(UU)
            }
          }), [qU]);
          const fU = UU => {
            var RU;
            "playing" === gU && hU.current !== UU && (hU.current = UU, null === (RU = jU.current) || void 0 === RU || RU.handleMouseInput(UU))
          };
          return (0, CU.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, CU.jsxs)("div", {
              ref: cU,
              className: EU()("DocsQteStage", {
                Playing: "playing" === gU
              }),
              tabIndex: "playing" === gU ? 0 : -1,
              role: "playing" === gU ? "button" : void 0,
              "aria-label": "playing" === gU ? `${RU} quick time event: click or press Space` : void 0,
              onPointerDown: UU => {
                0 === UU.button && fU(!0)
              },
              onPointerUp: () => {
                fU(!1)
              },
              onPointerLeave: () => {
                fU(!1)
              },
              onPointerCancel: () => {
                fU(!1)
              },
              onKeyDown: UU => {
                "playing" !== gU || " " !== UU.key && "Enter" !== UU.key || (UU.preventDefault(), fU(!0))
              },
              onKeyUp: UU => {
                "playing" !== gU || " " !== UU.key && "Enter" !== UU.key || fU(!1)
              },
              children: [(0, CU.jsx)("div", {
                ref: GU,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${PU})`
                },
                children: "playing" === gU && (0, CU.jsx)(rR.e.Provider, {
                  value: WU,
                  children: (0, CU.jsx)(VR.b, {
                    qte: {
                      type: RU,
                      parameters: vR[RU]
                    }
                  })
                })
              }), "playing" !== gU && (0, CU.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== gU && (0, CU.jsxs)("div", {
                  className: EU()("DocsQteResult", "succeeded" === gU ? "Succeeded" : "Failed"),
                  children: [(0, CU.jsx)(QU, {
                    name: "succeeded" === gU ? "check" : "cross",
                    isTinted: !0
                  }), (0, CU.jsx)("span", {
                    children: "succeeded" === gU ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, CU.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !qU,
                  onClick: () => {
                    pU("playing")
                  },
                  children: [(0, CU.jsx)(QU, {
                    name: "ready" === gU ? "play" : "replay"
                  }), (0, CU.jsx)("span", {
                    children: "ready" === gU ? `Try ${RU}` : "Play again"
                  })]
                })]
              })]
            }), eU && !SR(eU) && (0, CU.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, CU.jsx)("code", {
                children: eU
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Kg(UU) {
          let {
            level: RU,
            text: gU,
            anchor: tU,
            className: pU
          } = UU;
          const PU = `h${Math.min(RU,6)}`;
          return (0, CU.jsxs)(PU, {
                id: tU,
                className: EU()("DocsHeading", pU),
                children: [(0, CU.jsx)(IR, {
                      text: gU
                    }), (0, CU.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${tU}`,
                        "aria-label": `Link to ${gU.replace(/`/g,"")}`,children:"#"})]})}function cg(UU){let{items:RU,ordered:gU}=UU;const tU=gU?"ol":"ul";return(0,CU.jsx)(tU,{className:"DocsList",children:RU.map(((UU,RU)=>(0,CU.jsxs)("li",{children:[(0,CU.jsx)(IR,{text:UU.text}),UU.children.length>0&&(0,CU.jsx)(cg,{items:UU.children,ordered:gU})]},RU)))})}function Gg(UU){const RU=UU[0],gU="paragraph"===(null===RU||void 0===RU?void 0:RU.kind)?RU.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(gU)?"warning":/^\*\*(tip|prefer)/.test(gU)?"tip":"note"}function jg(UU){let{block:RU}=UU;switch(RU.kind){case"heading":return(0,CU.jsx)(Kg,{level:RU.level,text:RU.text,anchor:RU.anchor});case"paragraph":return(0,CU.jsx)("p",{children:(0,CU.jsx)(IR,{text:RU.text})});case"code":{const UU="ts"===RU.lang?function(UU){const RU=UU.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return RU&&Object.hasOwn(vR,RU[1])?RU[1]:null}(RU.code):null;return(0,CU.jsxs)(CU.Fragment,{children:[(0,CU.jsx)(JU,{code:RU.code,lang:RU.lang}),UU&&(0,CU.jsx)(qg,{type:UU})]})}case"table":return(0,CU.jsx)("div",{className:"DocsTableScroll",children:(0,CU.jsxs)("table",{className:"DocsTable",children:[(0,CU.jsx)("thead",{children:(0,CU.jsx)("tr",{children:RU.header.map(((UU,RU)=>(0,CU.jsx)("th",{children:(0,CU.jsx)(IR,{text:UU})},RU)))})}),(0,CU.jsx)("tbody",{children:RU.rows.map(((UU,RU)=>(0,CU.jsx)("tr",{children:UU.map(((UU,RU)=>(0,CU.jsx)("td",{children:(0,CU.jsx)(IR,{text:UU})},RU)))},RU)))})]})});case"list":return(0,CU.jsx)(cg,{items:RU.items,ordered:RU.ordered});case"quote":return(0,CU.jsx)("aside",{className:EU()("DocsCallout",Gg(RU.blocks)),children:(0,CU.jsx)(ug,{blocks:RU.blocks})});case"rule":return(0,CU.jsx)("hr",{className:"DocsRule"})}}function ug(UU){let{blocks:RU}=UU;return(0,CU.jsx)(CU.Fragment,{children:RU.map(((UU,RU)=>(0,CU.jsx)(jg,{block:UU},RU)))})}var Cg=gU(4408),hg=gU(4412);function Qg(UU){return"blocks"===UU||"items"===UU}const eg=new Map;function Wg(UU){let RU=eg.get(UU);return RU||(RU=function(UU){const RU={entries:[],legend:[],notes:[],examples:[]};let gU=!1;for(const EU of UU.split(/\r?\n/).slice(1)){if(EU.startsWith("#")){const UU=EU.replace(/^# ?/,""),tU=UU.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);tU?RU.legend.push({code:tU[1],meaning:tU[2],usage:tU[3].trim()}):/^Examples:/.test(UU.trim())?gU=!0:gU&&UU.trim()?RU.examples.push(UU.trim()):UU.trim()&&!/^\s/.test(UU)&&RU.notes.push(UU.trim());continue}const UU=EU.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var tU,pU;UU&&RU.entries.push({name:UU[1],variants:null!==(tU=null===(pU=UU[2])||void 0===pU?void 0:pU.split(","))&&void 0!==tU?tU:[]})}return RU}("blocks"===UU?Cg:hg),eg.set(UU,RU)),RU}function fg(UU){let{className:RU,value:gU,placeholder:tU,label:pU,onChange:EU,count:PU,children:TU}=UU;return(0,CU.jsxs)("div",{className:RU,children:[(0,CU.jsx)(QU,{name:"magnifying-glass"}),(0,CU.jsx)("input",{type:"search",value:gU,placeholder:tU,"aria-label":pU,onChange:UU=>{EU(UU.target.value)}}),TU,PU&&(0,CU.jsxs)("span",{className:"DocsFilterCount",children:[PU.visible," of ",PU.total]})]})}var xg=gU(1049);function mg(UU){const RU=UU.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return RU?RU[2]:null}function Ig(UU){return"paragraph"===UU.kind&&""===UU.text.trim()}function Jg(UU){const RU={name:UU.heading.text,description:[],params:[],returns:null};let gU="description";for(const pU of UU.blocks)if(!Ig(pU))if("heading"===pU.kind&&/^Parameters:?$/.test(pU.text))gU="params";else if("heading"===pU.kind&&/^Returns:?$/.test(pU.text))gU="returns",RU.returns={type:"",description:[]};else if("params"!==gU||"table"!==pU.kind){if("returns"===gU&&"paragraph"===pU.kind&&""===RU.returns.type){const UU=mg(pU.text);if(null!==UU){RU.returns.type=UU.replaceAll("\\|","|");continue}}"returns"===gU?RU.returns.description.push(pU):RU.description.push(pU)}else for(const[UU,gU,EU]of pU.rows){var tU;RU.params.push({name:UU,type:null!==(tU=mg(gU))&&void 0!==tU?tU:gU,description:null!==EU&&void 0!==EU?EU:""})}return RU}const wg=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function ng(UU){return UU.filter((UU=>!Ig(UU)))}const bg=/^[\w][\w .'&!:()-]*$/,og=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Zg(UU){var RU;if("code"===UU.kind&&"text"===UU.lang){const RU=UU.code.split("\n").map((UU=>UU.trim())).filter(Boolean);return RU.length>0&&RU.every((UU=>bg.test(UU)))?RU.map((UU=>({name:UU}))):null}return"paragraph"===UU.kind&&og.test(UU.text.trim())?[...UU.text.matchAll(/`([ ^ `]+)` / g)].flatMap((UU => UU[1].split(/,\s*/).map((UU => ({
                              name: UU.trim()
                            }))))): "table" === UU.kind && null !== (RU = UU.header[0]) && void 0 !== RU && RU.startsWith("Song") ? UU.rows.map((UU => {
                              let [RU, gU] = UU;
                              return {
                                name: RU.replace(/`/g, ""),
                                caption: gU
                              }
                            })) : null
                          }

                          function ag(UU) {
                            const RU = [];
                            for (const gU of UU) {
                              const UU = Zg(gU),
                                tU = RU.at(-1),
                                pU = "table" === gU.kind;
                              UU ? "names" === (null === tU || void 0 === tU ? void 0 : tU.kind) && tU.isSongs === pU ? tU.names.push(...UU) : RU.push({
                                kind: "names",
                                names: UU,
                                isSongs: pU
                              }) : RU.push({
                                kind: "block",
                                block: gU
                              })
                            }
                            return RU
                          }
                          const Yg = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Bg(UU, RU) {
                            return `${Yg[UU]}-${(0,wU.n)(RU)}`
                          }
                          const Vg = new WeakMap;

                          function rg(UU, RU, gU) {
                            let tU = Vg.get(RU);
                            if (!tU) {
                              tU = new Map;
                              const gU = new Set;
                              for (const pU of (0, wU.o)(RU)) {
                                const RU = ag(ng(pU.blocks)).map((RU => {
                                  if ("block" === RU.kind) return RU;
                                  return {
                                    kind: "names",
                                    names: RU.names.map((RU => {
                                      var tU, EU;
                                      const PU = Bg(UU, RU.name);
                                      let TU = PU;
                                      for (let UU = 2; gU.has(TU); UU++) TU = `${PU}-${UU}`;
                                      return gU.add(TU), {
                                        ...RU,
                                        anchor: TU,
                                        heading: null !== (tU = null === (EU = pU.heading) || void 0 === EU ? void 0 : EU.text) && void 0 !== tU ? tU : ""
                                      }
                                    })),
                                    isSongs: RU.isSongs
                                  }
                                }));
                                tU.set(pU.blocks, RU)
                              }
                              Vg.set(RU, tU)
                            }
                            const pU = tU.get(gU);
                            if (!pU) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return pU
                          }
                          const Xg = "/textures/docs/skinPreviews",
                            vg = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var dg = gU(3924),
                            Hg = gU(3937);

                          function Sg(UU) {
                            return Object.hasOwn(dg.g, UU) ? dg.g[UU] : null
                          }
                          const sg = {
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
                            blendMode: Hg.g.Standard
                          };

                          function yg(UU, RU, gU) {
                            return RU + (gU - RU) * UU()
                          }

                          function kg(UU, RU, gU) {
                            return UU + (RU - UU) * gU
                          }

                          function Fg(UU) {
                            return UU.length > 0 && "timeFraction" in UU[0]
                          }

                          function ig(UU, RU) {
                            if (0 === UU.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Fg(UU.colorGradients)) {
                              const gU = UU.colorGradients,
                                {
                                  color: tU
                                } = gU[Math.floor(RU() * gU.length) % gU.length];
                              return [{
                                at: 0,
                                colour: [tU[0] / 255, tU[1] / 255, tU[2] / 255, 1]
                              }]
                            }
                            return [...UU.colorGradients].sort(((UU, RU) => UU.timeFraction - RU.timeFraction)).map((UU => {
                              var gU, tU, pU;
                              const EU = UU.minColor,
                                PU = null !== (gU = UU.maxColor) && void 0 !== gU ? gU : EU,
                                TU = RU(),
                                qU = [kg(EU[0], PU[0], TU) / 255, kg(EU[1], PU[1], TU) / 255, kg(EU[2], PU[2], TU) / 255, kg(null !== (tU = EU[3]) && void 0 !== tU ? tU : 1, null !== (pU = PU[3]) && void 0 !== pU ? pU : 1, TU)];
                              return {
                                at: UU.timeFraction,
                                colour: qU
                              }
                            }))
                          }

                          function Ag(UU, RU, gU, tU) {
                            const pU = yg(tU, UU.minEmitPower, UU.maxEmitPower),
                              EU = RU => yg(tU, Math.min(UU.dir1[RU], UU.dir2[RU]), Math.max(UU.dir1[RU], UU.dir2[RU])) * pU,
                              PU = [...UU.velocityGradients].sort(((UU, RU) => UU.timeFraction - RU.timeFraction)).map((UU => ({
                                at: UU.timeFraction,
                                factor: yg(tU, UU.factor, UU.factor2)
                              })));
                            return {
                              pos: [yg(tU, RU[0], gU[0]), yg(tU, RU[1], gU[1]), yg(tU, RU[2], gU[2])],
                              dir: [EU(0), EU(1), EU(2)],
                              age: 0,
                              life: yg(tU, UU.minLifeTime, UU.maxLifeTime),
                              size: yg(tU, UU.minSize, UU.maxSize),
                              colours: ig(UU, tU),
                              velocityFactors: PU
                            }
                          }

                          function zg(UU, RU, gU, tU) {
                            if (RU < UU[0].at) return gU(Math.min(1, UU.length - 1));
                            for (let pU = 0; pU < UU.length - 1; pU++)
                              if (RU <= UU[pU + 1].at) {
                                const EU = UU[pU + 1].at - UU[pU].at;
                                return tU(gU(pU), gU(pU + 1), EU > 0 ? (RU - UU[pU].at) / EU : 1)
                              } return gU(UU.length - 1)
                          }

                          function Mg(UU) {
                            return zg(UU.colours, UU.age / UU.life, (RU => UU.colours[RU].colour), ((UU, RU, gU) => [kg(UU[0], RU[0], gU), kg(UU[1], RU[1], gU), kg(UU[2], RU[2], gU), kg(UU[3], RU[3], gU)]))
                          }

                          function Dg(UU, RU, gU) {
                            if (UU.age += gU, UU.age >= UU.life) return !1;
                            const tU = function(UU) {
                              return 0 === UU.velocityFactors.length ? 1 : zg(UU.velocityFactors, UU.age / UU.life, (RU => UU.velocityFactors[RU].factor), kg)
                            }(UU) * gU;
                            for (let EU = 0; EU < 3; EU++) {
                              var pU;
                              UU.pos[EU] += UU.dir[EU] * tU, UU.dir[EU] += (null !== (pU = RU[EU]) && void 0 !== pU ? pU : 0) * gU
                            }
                            return !0
                          }

                          function Lg(UU) {
                            return String(Math.round(1e6 * UU) / 1e6)
                          }

                          function Ng(UU) {
                            return `[${UU.map(Lg).join(", ")}]`
                          }

                          function lg(UU, RU) {
                            const gU = `${RU}    `;
                            return `[\n${(Fg(UU)?UU.map((UU=>{const RU=[`${gU}    timeFraction: ${Lg(UU.timeFraction)},`,`${gU}    minColor: ${Ng(UU.minColor)},`];return UU.maxColor&&RU.push(`${gU}    maxColor: ${Ng(UU.maxColor)},`),`${gU}{\n${RU.join("\n")}\n${gU}},`})):UU.map((UU=>`
                            $ {
                              gU
                            } {
                              color: $ {
                                Ng(UU.color)
                              }
                            }, `))).join("\n")}\n${RU}]`
                          }
                          const Og = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Ut = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Rt = .6;

                          function gt(UU, RU) {
                            return `${RU?"song":"sound"}:${UU}`
                          }
                          let tt = {
                              track: null,
                              volume: Rt
                            },
                            pt = null,
                            Et = 0,
                            Pt = 0;
                          const Tt = new Set;

                          function qt(UU) {
                            tt = {
                              ...tt,
                              ...UU
                            }, Tt.forEach((UU => {
                              UU()
                            }))
                          }

                          function Kt(UU) {
                            tt.track && qt({
                              track: {
                                ...tt.track,
                                ...UU
                              }
                            })
                          }

                          function ct(UU) {
                            const [RU, gU] = (0, tU.useState)((() => UU(tt))), pU = (0, tU.useRef)(UU);
                            return pU.current = UU, (0, tU.useEffect)((() => {
                              const UU = () => {
                                gU((() => pU.current(tt)))
                              };
                              return Tt.add(UU), UU(), () => {
                                Tt.delete(UU)
                              }
                            }), []), RU
                          }

                          function Gt() {
                            Et++;
                            const UU = pt;
                            pt = null, null === UU || void 0 === UU || UU.stop()
                          }

                          function jt(UU, RU) {
                            let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Gt();
                            const pU = Et,
                              {
                                track: EU
                              } = tt,
                              PU = EU && EU.name === UU && EU.isSong === RU ? EU.duration : 0;
                            Pt = tU, qt({
                              track: {
                                name: UU,
                                isSong: RU,
                                status: "loading",
                                duration: PU
                              }
                            }), Promise.all([gU.e(215), gU.e(239)]).then((() => gU(39188))).then((gU => {
                              let {
                                playDocsSound: EU
                              } = gU;
                              pU === Et && (pt = EU(UU, RU, tt.volume, tU, {
                                onPlay: UU => {
                                  pU === Et && Kt({
                                    status: "playing",
                                    duration: UU
                                  })
                                },
                                onEnd: UU => {
                                  var RU, gU;
                                  pU === Et && (pt = null, UU ? qt({
                                    track: null
                                  }) : (Pt = null !== (RU = null === (gU = tt.track) || void 0 === gU ? void 0 : gU.duration) && void 0 !== RU ? RU : 0, Kt({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((RU => {
                              console.error(`Could not play docs sound ${UU}`, RU), pU === Et && qt({
                                track: null
                              })
                            }))
                          }

                          function ut() {
                            const {
                              track: UU
                            } = tt;
                            if (!UU) return;
                            if ("playing" === UU.status && pt) return Pt = pt.Hx(), pt.pause(), void Kt({
                              status: "paused"
                            });
                            if ("loading" === UU.status) return Gt(), void Kt({
                              status: "paused"
                            });
                            if (pt) return void pt.resume();
                            const RU = UU.duration > 0 && Pt >= UU.duration - .05;
                            jt(UU.name, UU.isSong, RU ? 0 : Pt)
                          }

                          function Ct() {
                            var UU;
                            return pt && "playing" === (null === (UU = tt.track) || void 0 === UU ? void 0 : UU.status) ? pt.Hx() : Pt
                          }

                          function ht(UU) {
                            var RU;
                            null === (RU = pt) || void 0 === RU || RU.setVolume(UU), qt({
                              volume: UU
                            })
                          }

                          function Qt() {
                            Gt(), Pt = 0, qt({
                              track: null
                            })
                          }
                          const et = (0, tU.createContext)(null);
                          let Wt = null;

                          function ft() {
                            const [UU, RU] = (0, tU.useState)(null);
                            return (0, tU.useEffect)((() => {
                              let UU = !1;
                              return Wt ??= Promise.all([gU.e(69), gU.e(72), gU.e(71), gU.e(70), gU.e(196), gU.e(96), gU.e(220)]).then((() => gU(39183))), Wt.then((gU => {
                                UU || RU(gU)
                              }), (UU => {
                                console.error("Could not load the docs gallery's textures", UU), Wt = null
                              })), () => {
                                UU = !0
                              }
                            }), []), UU
                          }
                          const xt = 24,
                            mt = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function It(UU, RU) {
                            const gU = "skins" === UU ? function(UU, RU) {
                              const gU = vg.find((RU => UU.startsWith(RU.heading)));
                              return gU ? function(UU, RU) {
                                return `${UU}-${RU}`
                              }(gU.prefix, RU) : null
                            }(RU.heading, RU.name) : null;
                            return null === gU ? null : `${Xg}/${gU}.webp`
                          }

                          function Jt(UU) {
                            let {
                              kind: RU,
                              entry: gU,
                              assets: pU,
                              renderedUrl: PU
                            } = UU;
                            const {
                              name: TU
                            } = gU, [qU, KU] = (0, tU.useState)(!1);
                            if ("icons" === RU && SR(TU)) return (0, CU.jsx)(xg.c, {
                              className: "DocsTileIcon",
                              name: TU
                            });
                            let cU = null;
                            var GU;
                            if ("icons" === RU) cU = null !== (GU = null === pU || void 0 === pU ? void 0 : pU.getIngameIconUrl(TU)) && void 0 !== GU ? GU : null;
                            else if ("particles" === RU) {
                              var jU, uU, hU;
                              cU = null !== (jU = null === pU || void 0 === pU ? void 0 : pU.getParticleTextureUrl(null !== (uU = null === (hU = Sg(TU)) || void 0 === hU ? void 0 : hU.texture) && void 0 !== uU ? uU : TU)) && void 0 !== jU ? jU : null
                            } else "skins" === RU && (cU = null !== PU && void 0 !== PU ? PU : mt.test(TU) ? `/textures/charSkins/previews/${TU}_preview.png` : null);
                            return !cU || qU ? (0, CU.jsx)(QU, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === RU ? "person" : "image"
                            }) : (0, CU.jsx)("img", {
                              className: EU()("DocsTileImage", {
                                Pixelated: "skins" !== RU
                              }),
                              src: cU,
                              srcSet: cU === PU ? `${cU} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${cU}`), KU(!0)
                              }
                            })
                          }

                          function wt(UU) {
                            let {
                              entry: RU,
                              isSong: gU
                            } = UU;
                            const tU = ct((UU => {
                                let {
                                  track: tU
                                } = UU;
                                return (null === tU || void 0 === tU ? void 0 : tU.name) === RU.name && tU.isSong === gU ? tU.status : null
                              })),
                              pU = null !== tU && "paused" !== tU;
                            return (0, CU.jsxs)("button", {
                              type: "button",
                              id: RU.anchor,
                              className: EU()("DocsSoundTile", {
                                Playing: pU
                              }),
                              "data-docs-track": gt(RU.name, gU),
                              "aria-label": pU ? `Pause ${RU.name}` : `Play ${RU.name}`,
                              onClick: () => {
                                null !== tU ? ut() : jt(RU.name, gU)
                              },
                              children: [(0, CU.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, CU.jsx)(QU, {
                                  name: pU ? "pause" : "play"
                                })
                              }), (0, CU.jsx)("code", {
                                className: "DocsSoundName",
                                children: RU.name
                              }), RU.caption && (0, CU.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: RU.caption
                              })]
                            })
                          }

                          function nt(UU) {
                            let {
                              kind: RU,
                              names: gU,
                              isSongs: pU
                            } = UU;
                            const PU = ft(),
                              [TU, qU] = WU(),
                              KU = !1 === (null === TU || void 0 === TU ? void 0 : TU.failed) ? TU.text : null,
                              cU = (0, tU.useContext)(et),
                              [GU, jU] = (0, tU.useState)(""),
                              uU = GU.trim().toLowerCase(),
                              hU = uU ? gU.filter((UU => UU.name.toLowerCase().includes(uU))) : gU;
                            return (0, CU.jsxs)("div", {
                              className: "DocsGallery",
                              children: [gU.length > xt && (0, CU.jsx)(fg, {
                                className: "DocsGalleryFilter",
                                value: GU,
                                placeholder: `Filter ${gU.length} names\u2026`,
                                label: "Filter names",
                                onChange: jU,
                                count: uU ? {
                                  visible: hU.length,
                                  total: gU.length
                                } : null
                              }), (0, CU.jsx)("div", {
                                className: EU()("DocsGalleryGrid", `Kind-${RU}`, {
                                  Songs: pU
                                }),
                                children: hU.map((UU => {
                                  if ("sounds" === RU) return (0, CU.jsx)(wt, {
                                    entry: UU,
                                    isSong: pU
                                  }, UU.anchor);
                                  if (cU && "particles" === RU && Sg(UU.name)) return (0, CU.jsxs)("button", {
                                    type: "button",
                                    id: UU.anchor,
                                    className: EU()("DocsTile Previewable", {
                                      Copied: KU === UU.name
                                    }),
                                    title: `Play "${UU.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      cU(UU.name), qU(UU.name)
                                    },
                                    children: [(0, CU.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, CU.jsx)(Jt, {
                                        kind: RU,
                                        entry: UU,
                                        assets: PU,
                                        renderedUrl: null
                                      }), (0, CU.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, CU.jsx)(QU, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, CU.jsx)("span", {
                                      className: "DocsTileName",
                                      children: KU === UU.name ? "Copied!" : UU.name
                                    })]
                                  }, UU.anchor);
                                  const gU = It(RU, UU);
                                  return (0, CU.jsxs)("button", {
                                    type: "button",
                                    id: UU.anchor,
                                    className: EU()("DocsTile", {
                                      Copied: KU === UU.name
                                    }),
                                    title: `Copy "${UU.name}"`,
                                    onClick: () => {
                                      qU(UU.name)
                                    },
                                    children: [(0, CU.jsx)("span", {
                                      className: EU()("DocsTilePreview", {
                                        Rendered: null !== gU
                                      }),
                                      children: (0, CU.jsx)(Jt, {
                                        kind: RU,
                                        entry: UU,
                                        assets: PU,
                                        renderedUrl: gU
                                      })
                                    }), (0, CU.jsx)("span", {
                                      className: "DocsTileName",
                                      children: KU === UU.name ? "Copied!" : UU.name
                                    })]
                                  }, UU.anchor)
                                }))
                              })]
                            })
                          }

                          function bt(UU) {
                            let {
                              kind: RU,
                              content: gU,
                              blocks: tU
                            } = UU;
                            return (0, CU.jsx)(CU.Fragment, {
                              children: rg(RU, gU, tU).map(((UU, gU) => "block" === UU.kind ? (0, CU.jsx)(jg, {
                                block: UU.block
                              }, gU) : (0, CU.jsx)(nt, {
                                kind: RU,
                                names: UU.names,
                                isSongs: UU.isSongs
                              }, gU)))
                            })
                          }
                          const ot = [{
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

                          function Zt(UU) {
                            let {
                              cards: RU = ot,
                              label: gU = "Start here"
                            } = UU;
                            const pU = (0, tU.useContext)(uR);
                            return (0, CU.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": gU,
                              children: RU.map((UU => {
                                let {
                                  pageId: RU,
                                  countNoun: gU
                                } = UU;
                                const tU = HU(RU);
                                return (0, CU.jsxs)(PU.c, {
                                  to: iU(pU, tU),
                                  className: "DocsLandingCard",
                                  children: [(0, CU.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, CU.jsx)(QU, {
                                      name: tU.icon
                                    })
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: tU.title
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: tU.summary
                                  }), gU && (0, CU.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [sU(tU).sections.length, " ", gU]
                                  })]
                                }, RU)
                              }))
                            })
                          }
                          const Yt = 240;

                          function Bt(UU) {
                            let {
                              faces: RU
                            } = UU;
                            return (0, CU.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, CU.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${RU.top}")`
                                }
                              }), (0, CU.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${RU.left}")`
                                }
                              }), (0, CU.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${RU.right}")`
                                }
                              })]
                            })
                          }

                          function Vt(UU) {
                            let {
                              src: RU
                            } = UU;
                            const [gU, pU] = (0, tU.useState)(!1);
                            return gU ? null : (0, CU.jsx)("img", {
                              src: RU,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${RU}`), pU(!0)
                              }
                            })
                          }

                          function rt(UU) {
                            let {
                              kind: RU
                            } = UU;
                            const gU = Wg(RU),
                              pU = ft(),
                              PU = (0, TU.s)(),
                              [qU, KU] = (0, tU.useState)(""),
                              [cU, GU] = (0, tU.useState)(null),
                              [jU, uU] = (0, tU.useState)(Yt),
                              [hU, eU] = (0, tU.useState)(null),
                              WU = (0, tU.useRef)(null),
                              xU = qU.trim().toLowerCase();
                            (0, tU.useEffect)((() => {
                              const UU = (0, wU.m)(PU.hash),
                                tU = gU.entries.find((gU => Bg(RU, gU.name) === UU));
                              if (tU) WU.current = tU.name, KU(tU.name), GU(null), eU(tU.name);
                              else if (null !== WU.current) {
                                const UU = WU.current;
                                WU.current = null, KU((RU => RU === UU ? "" : RU)), eU(null)
                              }
                            }), [gU, RU, PU.hash, PU.key]), (0, tU.useEffect)((() => {
                              var UU;
                              null !== hU && (null === (UU = document.getElementById(Bg(RU, hU))) || void 0 === UU || UU.scrollIntoView({
                                block: "center"
                              }))
                            }), [RU, hU]);
                            const mU = gU.entries.filter((UU => (!xU || UU.name.toLowerCase().includes(xU)) && (!cU || UU.variants.includes(cU))));
                            return (0, CU.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [gU.notes.length > 0 && (0, CU.jsx)("div", {
                                className: "DocsProse",
                                children: gU.notes.map((UU => (0, CU.jsx)("p", {
                                  children: UU
                                }, UU)))
                              }), gU.legend.length > 0 && (0, CU.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, CU.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, CU.jsx)("thead", {
                                    children: (0, CU.jsxs)("tr", {
                                      children: [(0, CU.jsx)("th", {
                                        children: "Code"
                                      }), (0, CU.jsx)("th", {
                                        children: "Variant"
                                      }), (0, CU.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, CU.jsx)("tbody", {
                                    children: gU.legend.map((UU => (0, CU.jsxs)("tr", {
                                      children: [(0, CU.jsx)("td", {
                                        children: (0, CU.jsx)("button", {
                                          type: "button",
                                          className: EU()("DocsVariantChip", {
                                            Active: cU === UU.code
                                          }),
                                          "aria-pressed": cU === UU.code,
                                          title: `Show only ${RU} with ${UU.meaning} variants`,
                                          onClick: () => {
                                            GU(cU === UU.code ? null : UU.code)
                                          },
                                          children: UU.code
                                        })
                                      }), (0, CU.jsx)("td", {
                                        children: UU.meaning
                                      }), (0, CU.jsx)("td", {
                                        children: (0, CU.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: UU.usage
                                        })
                                      })]
                                    }, UU.code)))
                                  })]
                                })
                              }), gU.examples.length > 0 && (0, CU.jsx)(JU, {
                                lang: "text",
                                code: gU.examples.join("\n")
                              }), (0, CU.jsx)(fg, {
                                className: "DocsFilterBar",
                                value: qU,
                                placeholder: `Search ${gU.entries.length} ${RU}\u2026`,
                                label: `Search ${RU}`,
                                onChange: UU => {
                                  KU(UU), uU(Yt)
                                },
                                count: xU || cU ? {
                                  visible: mU.length,
                                  total: gU.entries.length
                                } : null,
                                children: cU && (0, CU.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    GU(null)
                                  },
                                  children: [cU, " ", (0, CU.jsx)(QU, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, CU.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: mU.slice(0, jU).map((UU => {
                                  const gU = "blocks" === RU ? null === pU || void 0 === pU ? void 0 : pU.getBlockFaces(UU.name) : null,
                                    tU = pU && !gU ? pU.getItemTextureUrl(UU.name) : null;
                                  return (0, CU.jsxs)("div", {
                                    id: Bg(RU, UU.name),
                                    className: EU()("DocsCatalogueTile", {
                                      Linked: UU.name === hU
                                    }),
                                    children: [(0, CU.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [gU && (0, CU.jsx)(Bt, {
                                        faces: gU
                                      }), tU && (0, CU.jsx)(Vt, {
                                        src: tU
                                      })]
                                    }), (0, CU.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: UU.name
                                    }), UU.variants.length > 0 && (0, CU.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: UU.variants.map((UU => (0, CU.jsx)("span", {
                                        children: UU
                                      }, UU)))
                                    }), (0, CU.jsx)(fU, {
                                      text: UU.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, UU.name)
                                }))
                              }), mU.length > jU && (0, CU.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  uU(mU.length)
                                },
                                children: ["Show all ", mU.length]
                              }), 0 === mU.length && (0, CU.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", RU, " match."]
                              })]
                            })
                          }
                          var Xt = gU(4480),
                            vt = gU(1535);
                          const dt = .95 * Xt.e;

                          function Ht(UU) {
                            return /^\s*```/.test(UU)
                          }

                          function St(UU, RU) {
                            const gU = [
                              []
                            ];
                            let tU = !1;
                            for (const pU of UU.split("\n")) !tU && RU(pU) && gU.at(-1).length > 0 && gU.push([]), Ht(pU) && (tU = !tU), gU.at(-1).push(pU);
                            return gU.map((UU => UU.join("\n").trim())).filter(Boolean)
                          }

                          function st(UU, RU) {
                            const gU = `${"#".repeat(RU)} `,
                              tU = [];
                            let pU = !1;
                            for (const EU of UU.split("\n")) Ht(EU) ? pU = !pU : !pU && EU.startsWith(gU) && tU.push(EU.slice(gU.length).trim());
                            return tU
                          }

                          function yt(UU) {
                            return UU.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class kt {
                            constructor(UU, RU) {
                              this.origin = RU, this.pages = void 0, this.partPaths = new Map;
                              const gU = UU.map((UU => {
                                const RU = RU => this.resolveLinks(UU, RU).length,
                                  gU = function(UU, RU) {
                                    const gU = UU.map((UU => RU(UU.markdown) + 2)),
                                      tU = gU.reduce(((UU, RU) => UU + RU), 0),
                                      pU = tU / Math.ceil(tU / dt),
                                      EU = [];
                                    let PU = 0;
                                    return UU.forEach(((UU, RU) => {
                                      const tU = gU[RU];
                                      (0 === EU.length || PU + tU > dt || PU + tU / 2 > pU) && (EU.push([]), PU = 0), EU.at(-1).push(UU), PU += tU
                                    })), EU
                                  }(function(UU, RU) {
                                    return St(UU, (UU => UU.startsWith("## "))).flatMap((UU => {
                                      var gU;
                                      const tU = null !== (gU = st(UU, 2)[0]) && void 0 !== gU ? gU : "";
                                      if (RU(UU) <= dt) return [{
                                        markdown: UU,
                                        section: tU
                                      }];
                                      let pU = !1,
                                        EU = "";
                                      return St(UU, (UU => {
                                        const RU = pU && "" !== UU.trim();
                                        return pU = "" === UU.trim(), RU
                                      })).map((UU => {
                                        var RU;
                                        const gU = st(UU, 3),
                                          pU = UU.startsWith("### ") ? gU[0] : EU;
                                        return EU = null !== (RU = gU.at(-1)) && void 0 !== RU ? RU : EU, {
                                          markdown: UU,
                                          section: tU || pU
                                        }
                                      }))
                                    }))
                                  }(yt(UU), RU), RU);
                                return {
                                  page: UU,
                                  groups: gU.length > 1 ? gU : []
                                }
                              }));
                              for (const {
                                  page: tU,
                                  groups: pU
                                }
                                of gU) pU.forEach(((UU, RU) => {
                                const gU = (0, Xt.s)(tU.slug, RU);
                                for (const pU of UU.flatMap((UU => [...st(UU.markdown, 2), ...st(UU.markdown, 3)]))) {
                                  const UU = `${tU.id}#${(0,wU.n)(pU)}`;
                                  this.partPaths.has(UU) || this.partPaths.set(UU, gU)
                                }
                              }));
                              this.pages = gU.map((UU => {
                                let {
                                  page: RU,
                                  groups: gU
                                } = UU;
                                return {
                                  page: RU,
                                  path: (0, Xt.q)(RU.slug),
                                  markdown: `# ${RU.title}\n\n${this.resolveLinks(RU,yt(RU))}\n`,
                                  parts: gU.map(((UU, tU) => this.renderPart(RU, UU, tU, gU.length)))
                                }
                              }))
                            }
                            url(UU) {
                              return `${this.origin}${UU}`
                            }
                            getPage(UU) {
                              return this.pages.find((RU => RU.page.id === UU))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((UU => (UU.parts.length > 0 ? UU.parts : [{
                                path: UU.path,
                                label: "",
                                markdown: UU.markdown
                              }]).filter((UU => UU.markdown.length > Xt.e))))
                            }
                            markdownUrl(UU, RU) {
                              const gU = RU && this.partPaths.get(`${UU.id}#${RU}`) || (0, Xt.q)(UU.slug);
                              return this.url(RU ? `${gU}#${RU}` : gU)
                            }
                            resolveLinks(UU, RU) {
                              return RU.replace(/\]\((#[^)]+)\)/g, ((RU, gU) => {
                                var tU;
                                const pU = null !== (tU = kU(gU)) && void 0 !== tU ? tU : this.samePageTarget(UU, gU);
                                return pU ? `](${this.markdownUrl(pU.page,pU.anchor)})` : RU
                              }))
                            }
                            samePageTarget(UU, RU) {
                              const gU = (0, wU.n)(RU.slice(1));
                              return yU(UU, gU) ? {
                                page: UU,
                                anchor: gU
                              } : null
                            }
                            renderPart(UU, RU, gU, tU) {
                              const pU = function(UU) {
                                  const RU = UU.map((UU => UU.section)).filter(Boolean);
                                  if (0 === RU.length) return "";
                                  const gU = RU[0],
                                    tU = RU.at(-1);
                                  return gU === tU ? gU : `${gU} to ${tU}`
                                }(RU),
                                EU = RU.map((UU => UU.markdown)).join("\n\n"),
                                PU = pU ? `It covers ${pU}. ` : "",
                                TU = `Part ${gU+1} of ${tU} of [${UU.title}](${this.url((0,Xt.q)(UU.slug))}). ${PU}[llms.txt](${this.url(Xt.j)}) lists every part.`;
                              return {
                                path: (0, Xt.s)(UU.slug, gU),
                                label: pU,
                                markdown: `# ${UU.title}, part ${gU+1} of ${tU}\n\n${TU}\n\n${this.resolveLinks(UU,EU)}\n`
                              }
                            }
                            llmsTxt(UU) {
                              const RU = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Ft(Xt.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const gU of dU) {
                                RU.push("", `## ${gU.title}`, "");
                                for (const UU of gU.pageIds) {
                                  const gU = this.getPage(UU),
                                    {
                                      page: tU,
                                      parts: pU
                                    } = gU,
                                    EU = `About ${Ft(gU.markdown.length)} tokens${pU.length>0?`, in ${pU.length} parts:`:"."}`;
                                  RU.push(`- [${tU.title}](${this.url(gU.path)}): ${tU.summary} ${EU}`), pU.forEach(((UU, gU) => {
                                    RU.push(`  - [Part ${gU+1}${UU.label?`: ${UU.label}`:""}](${this.url(UU.path)})`)
                                  }))
                                }
                              }
                              return RU.push("", "## Optional", "", `- [Every page in one file](${this.url(Xt.h)}): About ${Ft(UU.length)} tokens, for a model with a large context window.`, ""), RU.join("\n")
                            }
                            llmsFullTxt() {
                              return dU.flatMap((UU => UU.pageIds.map((UU => this.getPage(UU).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const UU = this.llmsFullTxt(),
                                RU = this.llmsTxt(UU),
                                gU = new Map([
                                  [Xt.n, RU],
                                  [Xt.j, RU],
                                  [Xt.h, UU]
                                ]);
                              for (const tU of this.pages) {
                                gU.set(tU.path, tU.markdown);
                                for (const UU of tU.parts) gU.set(UU.path, UU.markdown)
                              }
                              return gU
                            }
                          }

                          function Ft(UU) {
                            return `${Math.max(1,Math.round(UU/4e3))}K`
                          }
                          let it = null;

                          function At() {
                            return it ??= new kt(vU, vt.b), it
                          }
                          const zt = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Mt(UU) {
                            return At().getPage(UU.id).parts.length > 0 ? `Read ${Xt.m}, then the parts of the Bloxd Code API's ${UU.title} page it lists, so I can ask questions about it.` : `Read ${vt.b}${(0,Xt.q)(UU.slug)} so I can ask questions about it. ${Xt.m} lists every page of the Bloxd Code API docs.`
                          }

                          function Dt(UU) {
                            let {
                              page: RU
                            } = UU;
                            const [gU, tU] = WU();
                            return (0, CU.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, CU.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  tU(At().getPage(RU.id).markdown)
                                },
                                children: [(0, CU.jsx)(QU, {
                                  name: !1 === (null === gU || void 0 === gU ? void 0 : gU.failed) ? "check" : "copy"
                                }), (0, CU.jsx)("span", {
                                  children: gU ? gU.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), zt.map((UU => (0, CU.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${UU.url}${encodeURIComponent(Mt(RU))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, CU.jsx)(QU, {
                                  name: "external-link"
                                }), (0, CU.jsxs)("span", {
                                  children: ["Open in ", UU.name]
                                })]
                              }, UU.name)))]
                            })
                          }

                          function Lt(UU) {
                            return `#${[0,1,2].map((RU=>Math.round(Math.min(255,Math.max(0,UU[RU]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Nt(UU) {
                            return [parseInt(UU.slice(1, 3), 16), parseInt(UU.slice(3, 5), 16), parseInt(UU.slice(5, 7), 16)]
                          }

                          function lt(UU) {
                            let {
                              label: RU,
                              min: gU,
                              max: tU,
                              step: pU,
                              low: EU,
                              high: PU,
                              onChange: TU
                            } = UU;
                            return (0, CU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, CU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, CU.jsx)("span", {
                                  children: RU
                                }), (0, CU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: EU === PU ? EU : `${EU}\u2013${PU}`
                                })]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, CU.jsx)("input", {
                                  type: "range",
                                  min: gU,
                                  max: tU,
                                  step: pU,
                                  value: Math.min(tU, EU),
                                  "aria-label": `Minimum ${RU.toLowerCase()}`,
                                  onChange: UU => {
                                    const RU = Number(UU.target.value);
                                    TU(RU, Math.max(RU, PU))
                                  }
                                }), (0, CU.jsx)("input", {
                                  type: "range",
                                  min: gU,
                                  max: tU,
                                  step: pU,
                                  value: Math.min(tU, PU),
                                  "aria-label": `Maximum ${RU.toLowerCase()}`,
                                  onChange: UU => {
                                    const RU = Number(UU.target.value);
                                    TU(Math.min(RU, EU), RU)
                                  }
                                })]
                              })]
                            })
                          }

                          function Ot(UU) {
                            let {
                              label: RU,
                              min: gU,
                              max: tU,
                              step: pU,
                              value: EU,
                              onChange: PU,
                              format: TU = String
                            } = UU;
                            return (0, CU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, CU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, CU.jsx)("span", {
                                  children: RU
                                }), (0, CU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: TU(EU)
                                })]
                              }), (0, CU.jsx)("input", {
                                type: "range",
                                min: gU,
                                max: tU,
                                step: pU,
                                value: Math.min(tU, Math.max(gU, EU)),
                                "aria-label": RU,
                                onChange: UU => {
                                  PU(Number(UU.target.value))
                                }
                              })]
                            })
                          }

                          function Up(UU) {
                            let {
                              opts: RU,
                              onChange: gU
                            } = UU;
                            const tU = RU.colorGradients;
                            if (!Fg(tU)) return (0, CU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, CU.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, CU.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, CU.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: tU.map(((UU, RU) => (0, CU.jsx)("input", {
                                  type: "color",
                                  value: Lt(UU.color),
                                  "aria-label": `Colour ${RU+1}`,
                                  onChange: UU => {
                                    const pU = [...tU];
                                    pU[RU] = {
                                      color: Nt(UU.target.value)
                                    }, gU(pU)
                                  }
                                }, RU)))
                              })]
                            });
                            const pU = (UU, RU) => {
                              const pU = [...tU];
                              pU[UU] = RU, gU(pU)
                            };
                            return (0, CU.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, CU.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, CU.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, CU.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), tU.map(((UU, RU) => {
                                var gU;
                                const tU = null !== (gU = UU.maxColor) && void 0 !== gU ? gU : UU.minColor;
                                return (0, CU.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, CU.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * UU.timeFraction), "%"]
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Lt(UU.minColor)}, ${Lt(tU)})`
                                    }
                                  }), (0, CU.jsx)("input", {
                                    type: "color",
                                    value: Lt(UU.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*UU.timeFraction)}%`,
                                    onChange: gU => {
                                      pU(RU, {
                                        ...UU,
                                        minColor: [...Nt(gU.target.value), UU.minColor[3]]
                                      })
                                    }
                                  }), (0, CU.jsx)("input", {
                                    type: "color",
                                    value: Lt(tU),
                                    "aria-label": `Maximum colour at ${Math.round(100*UU.timeFraction)}%`,
                                    onChange: gU => {
                                      pU(RU, {
                                        ...UU,
                                        maxColor: [...Nt(gU.target.value), tU[3]]
                                      })
                                    }
                                  })]
                                }, RU)
                              }))]
                            })
                          }
                          const Rp = [-.5, -.5, -.5],
                            gp = [.5, .5, .5],
                            tp = [0, 1, 2, 3, 4, 5, 6, 7].map((UU => [1 & UU ? gp[0] : Rp[0], 2 & UU ? gp[1] : Rp[1], 4 & UU ? gp[2] : Rp[2]]));class pp {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(UU, RU, gU, tU) {
                              const pU = Math.round(31 * RU),
                                EU = Math.round(31 * gU),
                                PU = Math.round(31 * tU),
                                TU = `${pU}|${EU}|${PU}`;
                              let qU = this.tints.get(UU);
                              (!qU || qU.size > 2e3) && (qU = new Map, this.tints.set(UU, qU));
                              let KU = qU.get(TU);
                              if (KU) return KU;
                              KU = document.createElement("canvas"), KU.width = UU.naturalWidth || 16, KU.height = UU.naturalHeight || 16;
                              const cU = KU.getContext("2d");
                              return cU ? (cU.imageSmoothingEnabled = !1, cU.drawImage(UU, 0, 0, KU.width, KU.height), cU.globalCompositeOperation = "multiply", cU.fillStyle = `rgb(${pU/31*255}, ${EU/31*255}, ${PU/31*255})`, cU.fillRect(0, 0, KU.width, KU.height), cU.globalCompositeOperation = "destination-in", cU.drawImage(UU, 0, 0, KU.width, KU.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), qU.set(TU, KU), KU
                            }
                          }

                          function Ep(UU) {
                            let {
                              opts: RU,
                              textureUrl: gU,
                              burst: pU,
                              paused: EU
                            } = UU;
                            const PU = (0, tU.useRef)(null),
                              TU = (0, tU.useRef)(RU);
                            TU.current = RU;
                            const qU = (0, tU.useRef)(EU);
                            qU.current = EU;
                            const KU = (0, tU.useRef)(null),
                              cU = (0, tU.useRef)(null),
                              GU = (0, tU.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(UU) {
                                let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const gU = [-.5, -.5, -.5],
                                  tU = [.5, .5, .5];
                                let pU = .5;
                                for (let EU = 0; EU < 40; EU++) {
                                  const EU = Ag(UU, gU, tU, RU),
                                    PU = Math.max(EU.life / 30, .001);
                                  for (; Dg(EU, UU.gravity, PU);) pU = Math.max(pU, Math.hypot(EU.pos[0], EU.pos[1], EU.pos[2]) + EU.size / 2)
                                }
                                return pU
                              }(RU)))), [RU]),
                              jU = (0, tU.useRef)(GU);
                            return jU.current = GU, (0, tU.useEffect)((() => {
                              if (KU.current = null, !gU) return;
                              const UU = new Image;
                              let RU = !1;
                              return UU.onload = () => {
                                RU || (KU.current = UU)
                              }, UU.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${gU}`)
                              }, UU.src = gU, () => {
                                RU = !0
                              }
                            }), [gU]), (0, tU.useEffect)((() => {
                              var UU;
                              null === (UU = cU.current) || void 0 === UU || UU.call(cU)
                            }), [RU, pU]), (0, tU.useEffect)((() => {
                              const UU = PU.current,
                                RU = null === UU || void 0 === UU ? void 0 : UU.getContext("2d");
                              if (!UU || !RU) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const gU = new pp;
                              let tU = [],
                                pU = 0,
                                EU = -.7,
                                GU = jU.current,
                                uU = performance.now(),
                                CU = 0,
                                hU = !0,
                                QU = null;
                              const eU = () => {
                                const UU = TU.current,
                                  RU = Math.min(400, Math.max(0, Math.ceil(UU.manualEmitCount)));
                                tU = [];
                                for (let gU = 0; gU < RU; gU++) tU.push(Ag(UU, Rp, gp, Math.random));
                                pU = 0
                              };
                              cU.current = eU, eU();
                              const WU = PU => {
                                CU = requestAnimationFrame(WU);
                                const cU = Math.min(.05, (PU - uU) / 1e3);
                                if (uU = PU, !hU) return;
                                const fU = window.devicePixelRatio || 1,
                                  xU = Math.round(UU.clientWidth * fU),
                                  mU = Math.round(UU.clientHeight * fU);
                                if (0 === xU || 0 === mU) return;
                                UU.width === xU && UU.height === mU || (UU.width = xU, UU.height = mU);
                                const IU = TU.current;
                                null === QU && (EU += .18 * cU), GU += (jU.current - GU) * Math.min(1, 4 * cU);
                                const JU = .6 * cU;
                                tU = tU.filter((UU => Dg(UU, IU.gravity, JU))), 0 !== tU.length || qU.current || (pU += cU, pU > .6 && eU());
                                const wU = function(UU, RU, gU, tU) {
                                  const pU = 3.2 * tU,
                                    EU = .44 * Math.min(UU, RU) * pU / tU,
                                    PU = Math.cos(gU),
                                    TU = Math.sin(gU),
                                    qU = Math.cos(.42),
                                    KU = Math.sin(.42);
                                  return (gU, tU, cU) => {
                                    const GU = gU * TU + cU * PU,
                                      jU = pU - (tU * KU + GU * qU);
                                    if (jU < .05) return null;
                                    const uU = EU / jU;
                                    return {
                                      x: UU / 2 + (gU * PU - cU * TU) * uU,
                                      y: RU / 2 - (tU * qU - GU * KU) * uU,
                                      scale: uU,
                                      depth: jU
                                    }
                                  }
                                }(xU, mU, EU, GU);
                                ! function(UU, RU, gU, tU, pU) {
                                  const EU = UU.createLinearGradient(0, 0, 0, gU);
                                  EU.addColorStop(0, "#23262d"), EU.addColorStop(1, "#16181c"), UU.globalCompositeOperation = "source-over", UU.globalAlpha = 1, UU.fillStyle = EU, UU.fillRect(0, 0, RU, gU);
                                  const PU = (RU, gU) => {
                                      const pU = tU(RU[0], RU[1], RU[2]),
                                        EU = tU(gU[0], gU[1], gU[2]);
                                      pU && EU && (UU.beginPath(), UU.moveTo(pU.x, pU.y), UU.lineTo(EU.x, EU.y), UU.stroke())
                                    },
                                    TU = Math.ceil(pU) + 1,
                                    qU = Rp[1];
                                  UU.lineWidth = 1, UU.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let KU = -TU; KU <= TU; KU++) PU([KU + .5, qU, .5 - TU], [KU + .5, qU, TU + .5]), PU([.5 - TU, qU, KU + .5], [TU + .5, qU, KU + .5]);
                                  UU.strokeStyle = "rgba(255, 255, 255, 0.28)", UU.setLineDash([4, 4]);
                                  for (const KU of tp)
                                    for (const UU of tp) {
                                      const RU = [0, 1, 2].filter((RU => KU[RU] !== UU[RU]));
                                      1 === RU.length && KU[RU[0]] < UU[RU[0]] && PU(KU, UU)
                                    }
                                  UU.setLineDash([])
                                }(RU, xU, mU, wU, GU);
                                const nU = KU.current,
                                  bU = tU.map((UU => ({
                                    particle: UU,
                                    at: wU(UU.pos[0], UU.pos[1], UU.pos[2])
                                  }))).filter((UU => null !== UU.at)).sort(((UU, RU) => RU.at.depth - UU.at.depth));
                                RU.imageSmoothingEnabled = !1;
                                for (const UU of function(UU) {
                                    switch (UU) {
                                      case Hg.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Hg.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Hg.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Hg.g.MultiplyAdd:
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
                                  }(IU.blendMode)) {
                                  RU.globalCompositeOperation = UU.operation;
                                  for (const {
                                      particle: tU,
                                      at: pU
                                    }
                                    of bU) {
                                    const [EU, PU, TU, qU] = Mg(tU), KU = Math.max(1, tU.size * pU.scale);
                                    RU.globalAlpha = UU.usesAlpha ? Math.min(1, Math.max(0, qU)) : 1, nU ? RU.drawImage(gU.get(nU, EU, PU, TU), pU.x - KU / 2, pU.y - KU / 2, KU, KU) : (RU.fillStyle = `rgb(${255*EU}, ${255*PU}, ${255*TU})`, RU.fillRect(pU.x - KU / 2, pU.y - KU / 2, KU, KU))
                                  }
                                }
                                RU.globalCompositeOperation = "source-over", RU.globalAlpha = 1
                              };
                              CU = requestAnimationFrame(WU);
                              const fU = new IntersectionObserver((UU => {
                                let [RU] = UU;
                                hU = RU.isIntersecting
                              }));
                              fU.observe(UU);
                              const xU = RU => {
                                  QU = RU.clientX, UU.setPointerCapture(RU.pointerId)
                                },
                                mU = UU => {
                                  null !== QU && (EU += .01 * (UU.clientX - QU), QU = UU.clientX)
                                },
                                IU = () => {
                                  QU = null
                                };
                              return UU.addEventListener("pointerdown", xU), UU.addEventListener("pointermove", mU), UU.addEventListener("pointerup", IU), UU.addEventListener("pointercancel", IU), () => {
                                cancelAnimationFrame(CU), fU.disconnect(), cU.current = null, UU.removeEventListener("pointerdown", xU), UU.removeEventListener("pointermove", mU), UU.removeEventListener("pointerup", IU), UU.removeEventListener("pointercancel", IU)
                              }
                            }), []), (0, CU.jsx)("canvas", {
                              ref: PU,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${RU.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Pp = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Tp = [{
                              mode: Hg.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Hg.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Hg.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Hg.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Hg.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            qp = (0, tU.forwardRef)((function(UU, RU) {
                              var gU, pU;
                              let {
                                textures: PU
                              } = UU;
                              const TU = ft(),
                                qU = (0, tU.useRef)(null),
                                [KU, cU] = (0, tU.useState)(sg),
                                [GU, jU] = (0, tU.useState)("example"),
                                [uU, hU] = (0, tU.useState)(0),
                                [eU, WU] = (0, tU.useState)(!1),
                                xU = UU => {
                                  const RU = "example" === UU ? sg : Sg(UU);
                                  RU && (cU(RU), jU(UU))
                                };
                              (0, tU.useImperativeHandle)(RU, (() => ({
                                preview: UU => {
                                  var RU;
                                  xU(UU), null === (RU = qU.current) || void 0 === RU || RU.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const mU = UU => {
                                  cU({
                                    ...KU,
                                    ...UU
                                  }), jU(null)
                                },
                                IU = function(UU, RU) {
                                  if (null !== RU) return `${Og}    presetId: "${RU}",\n${Ut}\n})`;
                                  const gU = UU.velocityGradients.map((UU => `        {\n            timeFraction: ${Lg(UU.timeFraction)},\n            factor: ${Lg(UU.factor)},\n            factor2: ${Lg(UU.factor2)},\n        },`)),
                                    tU = [`    dir1: ${Ng(UU.dir1)},`, `    dir2: ${Ng(UU.dir2)},`, Ut, `    texture: "${UU.texture}",`, `    minLifeTime: ${Lg(UU.minLifeTime)},`, `    maxLifeTime: ${Lg(UU.maxLifeTime)},`, `    minEmitPower: ${Lg(UU.minEmitPower)},`, `    maxEmitPower: ${Lg(UU.maxEmitPower)},`, `    minSize: ${Lg(UU.minSize)},`, `    maxSize: ${Lg(UU.maxSize)},`, `    manualEmitCount: ${Lg(UU.manualEmitCount)},`, `    gravity: ${Ng(UU.gravity)},`, `    colorGradients: ${lg(UU.colorGradients,"    ")},`, `    velocityGradients: ${gU.length>0?`[\n${gU.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Lg(UU.blendMode)},`];
                                  return void 0 !== UU.hideDist && tU.push(`    hideDist: ${Lg(UU.hideDist)},`), `${Og}${tU.join("\n")}\n})`
                                }(KU, null === GU || "example" === GU ? null : GU),
                                wU = PU.includes(KU.texture) ? PU : [...PU, KU.texture];
                              return (0, CU.jsxs)("section", {
                                ref: qU,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, CU.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, CU.jsxs)("div", {
                                    children: [(0, CU.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, CU.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, CU.jsx)(fU, {
                                    text: IU,
                                    label: "Copy code"
                                  })]
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, CU.jsx)("button", {
                                    type: "button",
                                    className: EU()("DocsVariantChip", {
                                      Active: "example" === GU
                                    }),
                                    onClick: () => {
                                      xU("example")
                                    },
                                    children: "Example"
                                  }), Pp.filter((UU => null !== Sg(UU))).map((UU => (0, CU.jsx)("button", {
                                    type: "button",
                                    className: EU()("DocsVariantChip", {
                                      Active: GU === UU
                                    }),
                                    onClick: () => {
                                      xU(UU)
                                    },
                                    children: UU
                                  }, UU))), (0, CU.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== GU && void 0 !== GU ? GU : "custom",
                                    "aria-label": "Preset",
                                    onChange: UU => {
                                      xU(UU.target.value)
                                    },
                                    children: [(0, CU.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === GU && (0, CU.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), dg.d.map((UU => (0, CU.jsx)("option", {
                                      value: UU,
                                      children: UU
                                    }, UU)))]
                                  })]
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, CU.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, CU.jsx)(Ep, {
                                      opts: KU,
                                      textureUrl: null !== (gU = null === TU || void 0 === TU ? void 0 : TU.getParticleTextureUrl(KU.texture)) && void 0 !== gU ? gU : null,
                                      burst: uU,
                                      paused: eU
                                    }), (0, CU.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, CU.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          hU(uU + 1)
                                        },
                                        children: [(0, CU.jsx)(QU, {
                                          name: "replay"
                                        }), (0, CU.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, CU.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": eU,
                                        onClick: () => {
                                          WU(!eU)
                                        },
                                        children: [(0, CU.jsx)(QU, {
                                          name: eU ? "play" : "pause"
                                        }), (0, CU.jsx)("span", {
                                          children: eU ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, CU.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, CU.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, CU.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, CU.jsx)("span", {
                                          children: "Texture"
                                        }), (0, CU.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: KU.texture
                                        })]
                                      }), (0, CU.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: wU.map((UU => {
                                          var RU;
                                          const gU = null !== (RU = null === TU || void 0 === TU ? void 0 : TU.getParticleTextureUrl(UU)) && void 0 !== RU ? RU : null;
                                          return (0, CU.jsx)("button", {
                                            type: "button",
                                            className: EU()("DocsParticleTexture", {
                                              Active: KU.texture === UU
                                            }),
                                            title: UU,
                                            "aria-label": UU,
                                            "aria-pressed": KU.texture === UU,
                                            onClick: () => {
                                              mU({
                                                texture: UU
                                              })
                                            },
                                            children: gU ? (0, CU.jsx)("img", {
                                              src: gU,
                                              alt: ""
                                            }) : (0, CU.jsx)(QU, {
                                              name: "image"
                                            })
                                          }, UU)
                                        }))
                                      })]
                                    }), (0, CU.jsx)(Ot, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: KU.manualEmitCount,
                                      onChange: UU => {
                                        mU({
                                          manualEmitCount: UU
                                        })
                                      }
                                    }), (0, CU.jsx)(lt, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: KU.minLifeTime,
                                      high: KU.maxLifeTime,
                                      onChange: (UU, RU) => {
                                        mU({
                                          minLifeTime: UU,
                                          maxLifeTime: RU
                                        })
                                      }
                                    }), (0, CU.jsx)(lt, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: KU.minEmitPower,
                                      high: KU.maxEmitPower,
                                      onChange: (UU, RU) => {
                                        mU({
                                          minEmitPower: UU,
                                          maxEmitPower: RU
                                        })
                                      }
                                    }), (0, CU.jsx)(lt, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: KU.minSize,
                                      high: KU.maxSize,
                                      onChange: (UU, RU) => {
                                        mU({
                                          minSize: UU,
                                          maxSize: RU
                                        })
                                      }
                                    }), (0, CU.jsx)(Ot, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (pU = KU.gravity[1]) && void 0 !== pU ? pU : 0,
                                      onChange: UU => {
                                        var RU, gU;
                                        mU({
                                          gravity: [null !== (RU = KU.gravity[0]) && void 0 !== RU ? RU : 0, UU, null !== (gU = KU.gravity[2]) && void 0 !== gU ? gU : 0]
                                        })
                                      }
                                    }), (0, CU.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, CU.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, CU.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, CU.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: KU.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: UU => {
                                          mU({
                                            blendMode: Number(UU.target.value)
                                          })
                                        },
                                        children: Tp.map((UU => {
                                          let {
                                            mode: RU,
                                            label: gU
                                          } = UU;
                                          return (0, CU.jsx)("option", {
                                            value: RU,
                                            children: gU
                                          }, RU)
                                        }))
                                      })]
                                    }), (0, CU.jsx)(Up, {
                                      opts: KU,
                                      onChange: UU => {
                                        mU({
                                          colorGradients: UU
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, CU.jsx)(JU, {
                                  code: IU,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Kp = gU(4139),
                            cp = gU(1777);

                          function Gp(UU, RU) {
                            return UU ? Kp.e.includes(RU) ? UU.getIngameIconUrl(RU) : UU.getItemIconUrl(RU) : null
                          }

                          function jp(UU) {
                            var RU, gU, tU;
                            let {
                              part: pU,
                              assets: PU
                            } = UU;
                            const TU = Gp(PU, pU.icon),
                              qU = null !== (RU = null === (gU = pU.style) || void 0 === gU ? void 0 : gU.fontSize) && void 0 !== RU ? RU : "1.8em",
                              KU = (0, dR.Wb)(pU.style);
                            return (0, CU.jsxs)("span", {
                              className: EU()("DocsBloxdTextIcon", {
                                Missing: !TU
                              }),
                              style: {
                                width: qU,
                                height: qU,
                                opacity: null === (tU = pU.style) || void 0 === tU ? void 0 : tU.opacity
                              },
                              title: TU ? void 0 : `No Bloxd icon, item or block is called "${pU.icon}"`,
                              children: [TU && KU && (0, CU.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: KU,
                                  maskImage: `url("${TU}")`,
                                  WebkitMaskImage: `url("${TU}")`
                                }
                              }), TU ? (0, CU.jsx)("img", {
                                src: TU,
                                alt: "",
                                className: EU()({
                                  Tinted: KU
                                })
                              }) : (0, CU.jsx)(QU, {
                                name: "image"
                              })]
                            })
                          }

                          function Cp(UU) {
                            let {
                              parts: RU,
                              className: gU
                            } = UU;
                            const tU = ft(),
                              pU = [];
                            let PU = [];
                            const TU = UU => {
                              PU.length > 0 && (pU.push((0, CU.jsx)(cp.e, {
                                text: PU
                              }, `run-${UU}`)), PU = [])
                            };
                            return RU.forEach(((UU, RU) => {
                              "icon" !== kR(UU) || SR(UU.icon) ? PU.push(UU) : (TU(RU), pU.push((0, CU.jsx)(jp, {
                                part: UU,
                                assets: tU
                              }, `icon-${RU}`)))
                            })), TU(RU.length), (0, CU.jsx)("div", {
                              className: EU()("DocsStyledTextPreview", gU),
                              children: pU
                            })
                          }
                          const hp = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Qp = null;

                          function ep(UU) {
                            if (Qp ??= document.createElement("canvas").getContext("2d"), !Qp) return "#000000";
                            Qp.fillStyle = "#000000", Qp.fillStyle = UU;
                            const RU = Qp.fillStyle;
                            return RU.startsWith("#") ? RU : "#000000"
                          }

                          function Wp(UU) {
                            let {
                              value: RU,
                              label: gU,
                              onChange: tU
                            } = UU;
                            return (0, CU.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, CU.jsx)("input", {
                                type: "color",
                                value: ep(RU),
                                "aria-label": `${gU} picker`,
                                onChange: UU => {
                                  tU(UU.target.value)
                                }
                              }), (0, CU.jsx)("input", {
                                type: "text",
                                value: RU,
                                placeholder: "#ffb914 or gold",
                                "aria-label": gU,
                                spellCheck: !1,
                                onChange: UU => {
                                  tU(UU.target.value)
                                }
                              })]
                            })
                          }

                          function fp(UU) {
                            let {
                              value: RU,
                              fontAwesomeIcons: gU,
                              onChange: pU
                            } = UU;
                            const PU = ft(),
                              [TU, qU] = (0, tU.useState)(SR(RU) ? "fontAwesome" : "bloxd"),
                              [KU, cU] = (0, tU.useState)(""),
                              GU = KU.trim().toLowerCase(),
                              jU = "bloxd" === TU ? Kp.e : gU,
                              uU = GU ? jU.filter((UU => UU.toLowerCase().includes(GU))) : jU;
                            return (0, CU.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, CU.jsx)("input", {
                                type: "text",
                                value: RU,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: UU => {
                                  pU(UU.target.value)
                                }
                              }), (0, CU.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, CU.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((UU => (0, CU.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": TU === UU,
                                    className: EU()("DocsVariantChip", {
                                      Active: TU === UU
                                    }),
                                    onClick: () => {
                                      qU(UU)
                                    },
                                    children: "bloxd" === UU ? `Bloxd icons (${Kp.e.length})` : `Font Awesome (${gU.length})`
                                  }, UU))), (0, CU.jsx)("input", {
                                    type: "search",
                                    value: KU,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: UU => {
                                      cU(UU.target.value)
                                    }
                                  })
                                ]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [uU.map((UU => {
                                  const gU = "bloxd" === TU ? Gp(PU, UU) : null;
                                  return (0, CU.jsx)("button", {
                                    type: "button",
                                    title: UU,
                                    "aria-label": UU,
                                    "aria-pressed": UU === RU,
                                    className: EU()("DocsIconPickerOption", {
                                      Active: UU === RU
                                    }),
                                    onClick: () => {
                                      pU(UU)
                                    },
                                    children: "fontAwesome" === TU ? (0, CU.jsx)(xg.c, {
                                      name: UU
                                    }) : gU ? (0, CU.jsx)("img", {
                                      src: gU,
                                      alt: ""
                                    }) : (0, CU.jsx)(QU, {
                                      name: "image"
                                    })
                                  }, UU)
                                })), 0 === uU.length && (0, CU.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", KU, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function xp(UU) {
                            let {
                              property: RU,
                              value: gU,
                              fontAwesomeIcons: tU,
                              onChange: pU
                            } = UU;
                            const {
                              field: EU,
                              label: PU
                            } = RU, TU = UU => "" !== UU || RU.isRequired ? UU : void 0;
                            switch (EU.kind) {
                              case "text":
                                return EU.multiline ? (0, CU.jsx)("textarea", {
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  rows: 2,
                                  "aria-label": PU,
                                  onChange: UU => {
                                    pU(UU.target.value)
                                  }
                                }) : (0, CU.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  "aria-label": PU,
                                  onChange: UU => {
                                    pU(TU(UU.target.value))
                                  }
                                });
                              case "size":
                                return (0, CU.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  placeholder: RU.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": PU,
                                  spellCheck: !1,
                                  onChange: UU => {
                                    pU(TU(UU.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, CU.jsx)(Wp, {
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  label: PU,
                                  onChange: UU => {
                                    pU(TU(UU))
                                  }
                                });
                              case "colours": {
                                const UU = Array.isArray(gU) ? gU : [],
                                  RU = UU => {
                                    pU(UU.length > 0 ? UU : void 0)
                                  };
                                return (0, CU.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [UU.map(((gU, tU) => (0, CU.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, CU.jsx)(Wp, {
                                      value: gU,
                                      label: `${PU} ${tU+1}`,
                                      onChange: gU => {
                                        RU(UU.map(((UU, RU) => RU === tU ? gU : UU)))
                                      }
                                    }), (0, CU.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${tU+1}`,
                                      onClick: () => {
                                        RU(UU.filter(((UU, RU) => RU !== tU)))
                                      },
                                      children: (0, CU.jsx)(QU, {
                                        name: "cross"
                                      })
                                    })]
                                  }, tU))), (0, CU.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var gU;
                                      RU([...UU, null !== (gU = UU.at(-1)) && void 0 !== gU ? gU : "#ffffff"])
                                    },
                                    children: [(0, CU.jsx)(QU, {
                                      name: "plus"
                                    }), 0 === UU.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var qU;
                                const UU = "number" === typeof gU ? gU : Number(null !== (qU = RU.defaultText) && void 0 !== qU ? qU : 0);
                                return (0, CU.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, CU.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: UU,
                                    "aria-label": PU,
                                    onChange: UU => {
                                      pU(Number(UU.target.value))
                                    }
                                  }), (0, CU.jsx)("output", {
                                    children: UU.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, CU.jsxs)("select", {
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  "aria-label": PU,
                                  onChange: UU => {
                                    pU(TU(UU.target.value))
                                  },
                                  children: [!RU.isRequired && (0, CU.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", RU.defaultText, ")"]
                                  }), EU.options.map((UU => (0, CU.jsx)("option", {
                                    value: UU,
                                    children: UU
                                  }, UU)))]
                                });
                              case "icon":
                                return (0, CU.jsx)(fp, {
                                  value: String(null !== gU && void 0 !== gU ? gU : ""),
                                  fontAwesomeIcons: tU,
                                  onChange: pU
                                })
                            }
                          }

                          function mp(UU) {
                            let RU;
                            try {
                              RU = JSON.parse(UU)
                            } catch (gU) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${gU.message}`
                              }
                            }
                            return gg(RU) ? {
                              part: RU,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Ip(UU) {
                            let {
                              parts: RU,
                              index: gU,
                              fontAwesomeIcons: pU,
                              onChange: EU,
                              Kw: PU,
                              onClose: TU
                            } = UU;
                            const qU = (0, tU.useContext)(CR),
                              cU = (0, tU.useRef)(null),
                              GU = RU[gU],
                              jU = kR(GU),
                              [uU, hU] = (0, tU.useState)((() => JSON.stringify(GU, null, 2))),
                              eU = (0, tU.useMemo)((() => "other" === jU ? mp(uU).error : null), [jU, uU]);
                            (0, tU.useEffect)((() => {
                              var UU;
                              null === (UU = cU.current) || void 0 === UU || UU.focus()
                            }), []);
                            const WU = (0, CU.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: UU => {
                                UU.target === UU.currentTarget && TU()
                              },
                              children: (0, CU.jsxs)("div", {
                                ref: cU,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${gU+1}: ${sR[jU]}`,
                                tabIndex: -1,
                                onKeyDown: UU => {
                                  "Escape" === UU.key ? (UU.stopPropagation(), TU()) : "Tab" === UU.key && cU.current && function(UU, RU) {
                                    const gU = Array.from(UU.querySelectorAll(ZR)),
                                      tU = gU[0],
                                      pU = gU.at(-1);
                                    if (!tU || !pU) return;
                                    const EU = document.activeElement;
                                    !RU.shiftKey || EU !== tU && EU !== UU ? RU.shiftKey || EU !== pU || (RU.preventDefault(), tU.focus()) : (RU.preventDefault(), pU.focus())
                                  }(cU.current, UU)
                                },
                                children: [(0, CU.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, CU.jsxs)("div", {
                                    children: [(0, CU.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", gU + 1]
                                    }), (0, CU.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: sR[jU]
                                    })]
                                  }), (0, CU.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: TU,
                                    children: (0, CU.jsx)(QU, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, CU.jsx)(Cp, {
                                  parts: RU,
                                  className: "DocsTextDialogPreview"
                                }), (0, CU.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === jU ? (0, CU.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, CU.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, CU.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: uU,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: UU => {
                                        hU(UU.target.value);
                                        const RU = mp(UU.target.value);
                                        null !== RU.part && EU(RU.part)
                                      }
                                    }), eU && (0, CU.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: eU
                                    })]
                                  }) : iR[jU].map((UU => {
                                    const RU = zR(GU, UU.path),
                                      gU = UU.isRequired ? JSON.stringify(DR(GU, UU.path)) === JSON.stringify(GU) : void 0 === RU;
                                    return (0, CU.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, CU.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, CU.jsx)("span", {
                                          children: UU.label
                                        }), (0, CU.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: gU,
                                          "aria-label": `Reset ${UU.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            EU(DR(GU, UU.path))
                                          },
                                          children: [(0, CU.jsx)(QU, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, CU.jsx)(xp, {
                                        property: UU,
                                        value: RU,
                                        fontAwesomeIcons: pU,
                                        onChange: RU => {
                                          EU(MR(GU, UU.path, RU))
                                        }
                                      }), !UU.isRequired && (0, CU.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", UU.defaultText]
                                      })]
                                    }, UU.path.join("."))
                                  }))
                                }), (0, CU.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, CU.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: PU,
                                    children: [(0, CU.jsx)(QU, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, CU.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: TU,
                                    children: "Done"
                                  })]
                                }), (0, CU.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: hp.map((UU => (0, CU.jsx)("option", {
                                    value: UU
                                  }, UU)))
                                })]
                              })
                            });
                            return qU ? (0, KU.createPortal)(WU, qU) : WU
                          }
                          const Jp = [{
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
                            wp = Object.keys(yR);

                          function np(UU) {
                            let {
                              fontAwesomeIcons: RU
                            } = UU;
                            const [gU, pU] = (0, tU.useState)(Jp[0].parts), [PU, TU] = (0, tU.useState)((() => OR(Jp[0].parts))), [qU, KU] = (0, tU.useState)(null), [cU, GU] = (0, tU.useState)(!1), [jU, uU] = (0, tU.useState)(null), [hU, eU] = (0, tU.useState)(!1), [WU, fU] = (0, tU.useState)(null), xU = (0, tU.useRef)(null), mU = OR(gU);
                            (0, tU.useLayoutEffect)((() => {
                              var UU;
                              if (!WU) return;
                              const RU = UU => {
                                  var RU;
                                  return null === (RU = xU.current) || void 0 === RU ? void 0 : RU.querySelector(`[data-focus-key="${UU}"]`)
                                },
                                gU = RU(WU.key);
                              null === (UU = gU && !gU.disabled ? gU : RU(WU.fallback)) || void 0 === UU || UU.focus(), fU(null)
                            }), [WU]);
                            const IU = UU => {
                                pU(UU), TU(OR(UU)), KU(null)
                              },
                              wU = UU => {
                                IU(gU.filter(((RU, gU) => gU !== UU))), fU({
                                  key: `edit-${Math.min(UU,gU.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              nU = (UU, RU) => {
                                const tU = [...gU],
                                  [pU] = tU.splice(UU, 1);
                                tU.splice(UU + RU, 0, pU), IU(tU);
                                fU({
                                  key: `${RU<0?"up":"down"}-${UU+RU}`,
                                  fallback: `edit-${UU+RU}`
                                })
                              };
                            return (0, CU.jsxs)("section", {
                              ref: xU,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, CU.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, CU.jsxs)("div", {
                                  children: [(0, CU.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, CU.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, CU.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Jp.map((UU => (0, CU.jsx)("button", {
                                  type: "button",
                                  className: EU()("DocsVariantChip", {
                                    Active: mU === OR(UU.parts)
                                  }),
                                  onClick: () => {
                                    IU(UU.parts)
                                  },
                                  children: UU.label
                                }, UU.label)))
                              }), (0, CU.jsx)(Cp, {
                                parts: gU,
                                className: "DocsTextEditorPreview"
                              }), (0, CU.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, CU.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, CU.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, CU.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [gU.map(((UU, RU) => {
                                      const tU = kR(UU);
                                      return (0, CU.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, CU.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${RU}`,
                                          "aria-label": `Edit part ${RU+1}, ${sR[tU]}`,
                                          onClick: () => {
                                            uU(RU)
                                          },
                                          children: [(0, CU.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: sR[tU]
                                          }), (0, CU.jsx)(Cp, {
                                            parts: [UU],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== tU && (0, CU.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: LR(UU)
                                          })]
                                        }), (0, CU.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, CU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${RU+1} up`,
                                            "data-focus-key": `up-${RU}`,
                                            disabled: 0 === RU,
                                            onClick: () => {
                                              nU(RU, -1)
                                            },
                                            children: (0, CU.jsx)(QU, {
                                              name: "chevron-up"
                                            })
                                          }), (0, CU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${RU+1} down`,
                                            "data-focus-key": `down-${RU}`,
                                            disabled: RU === gU.length - 1,
                                            onClick: () => {
                                              nU(RU, 1)
                                            },
                                            children: (0, CU.jsx)(QU, {
                                              name: "chevron-down"
                                            })
                                          }), (0, CU.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${RU+1}`,
                                            onClick: () => {
                                              wU(RU)
                                            },
                                            children: (0, CU.jsx)(QU, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, RU)
                                    })), 0 === gU.length && (0, CU.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, CU.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: UU => {
                                      "Escape" === UU.key && hU && (UU.stopPropagation(), eU(!1), fU({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, CU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": hU,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        eU(!hU)
                                      },
                                      children: [(0, CU.jsx)(QU, {
                                        name: "plus"
                                      }), "Add a part", (0, CU.jsx)(QU, {
                                        name: hU ? "chevron-up" : "chevron-down"
                                      })]
                                    }), hU && (0, CU.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: wp.map((UU => (0, CU.jsx)("li", {
                                        children: (0, CU.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (UU => {
                                              IU([...gU, yR[UU]]), eU(!1), uU(gU.length)
                                            })(UU)
                                          },
                                          children: sR[UU]
                                        })
                                      }, UU)))
                                    })]
                                  })]
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, CU.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, CU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": cU,
                                      onClick: () => {
                                        GU(!cU)
                                      },
                                      children: [(0, CU.jsx)(QU, {
                                        name: cU ? "check" : "pencil"
                                      }), cU ? "Done" : "Edit"]
                                    })]
                                  }), cU ? (0, CU.jsxs)(CU.Fragment, {
                                    children: [(0, CU.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: PU,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: UU => {
                                        TU(UU.target.value);
                                        const RU = tg(UU.target.value);
                                        KU(RU.error), RU.parts && pU(RU.parts)
                                      }
                                    }), qU && (0, CU.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: qU
                                    })]
                                  }) : (0, CU.jsx)(JU, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${mU})`
                                  })]
                                })]
                              }), null !== jU && jU < gU.length && (0, CU.jsx)(Ip, {
                                parts: gU,
                                index: jU,
                                fontAwesomeIcons: RU,
                                onChange: UU => {
                                  ((UU, RU) => {
                                    IU(gU.map(((gU, tU) => tU === UU ? RU : gU)))
                                  })(jU, UU)
                                },
                                Kw: () => {
                                  wU(jU), uU(null)
                                },
                                onClose: () => {
                                  uU(null), fU({
                                    key: `edit-${jU}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var bp = gU(4503),
                            op = gU(4487),
                            Zp = gU(4501),
                            ap = gU(4508);
                          const Yp = 40,
                            Bp = 800,
                            Vp = 150,
                            rp = 8e3,
                            Xp = 2e3;

                          function vp(UU, RU) {
                            return 12 * Math.log2(RU / UU)
                          }

                          function dp(UU, RU) {
                            return Math.round(UU * 2 ** (RU / 12) * 10) / 10
                          }

                          function Hp(UU) {
                            return `${UU} ms`
                          }

                          function Sp(UU) {
                            return `${UU} st`
                          }
                          const sp = [{
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

                          function yp(UU) {
                            let {
                              synth: RU,
                              onChange: gU
                            } = UU;
                            const tU = (0, bp.k)(RU);
                            return (0, CU.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, CU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, CU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, CU.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, CU.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, CU.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: bp.f.map((UU => (0, CU.jsx)("button", {
                                      type: "button",
                                      className: EU()("DocsVariantChip", {
                                        Active: RU.waveform === UU
                                      }),
                                      "aria-pressed": RU.waveform === UU,
                                      onClick: () => {
                                        gU({
                                          waveform: UU
                                        })
                                      },
                                      children: UU
                                    }, UU)))
                                  })]
                                }), (0, CU.jsx)(Ot, {
                                  label: "Pitch",
                                  min: 0,
                                  max: vp(Yp, Bp),
                                  step: .1,
                                  value: vp(Yp, RU.pitchHz),
                                  format: () => `${RU.pitchHz} Hz`,
                                  onChange: UU => {
                                    gU({
                                      pitchHz: dp(Yp, UU)
                                    })
                                  }
                                }), (0, CU.jsx)(Ot, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: RU.syllableMs,
                                  format: Hp,
                                  onChange: UU => {
                                    gU({
                                      syllableMs: UU
                                    })
                                  }
                                }), (0, CU.jsx)(Ot, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: RU.volume,
                                  onChange: UU => {
                                    gU({
                                      volume: UU
                                    })
                                  }
                                })]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, CU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, CU.jsx)(Ot, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: RU.durationMs,
                                  format: Hp,
                                  onChange: UU => {
                                    gU({
                                      durationMs: UU
                                    })
                                  }
                                }), (0, CU.jsx)(Ot, {
                                  label: "Fade in",
                                  min: 0,
                                  max: tU.durationMs,
                                  step: 1,
                                  value: tU.attackMs,
                                  format: Hp,
                                  onChange: UU => {
                                    gU({
                                      attackMs: UU
                                    })
                                  }
                                }), (0, CU.jsx)(Ot, {
                                  label: "Fade out",
                                  min: 0,
                                  max: tU.durationMs - tU.attackMs,
                                  step: 1,
                                  value: tU.releaseMs,
                                  format: Hp,
                                  onChange: UU => {
                                    gU({
                                      releaseMs: UU
                                    })
                                  }
                                }), (0, CU.jsx)(Ot, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: RU.glideSemitones,
                                  format: Sp,
                                  onChange: UU => {
                                    gU({
                                      glideSemitones: UU
                                    })
                                  }
                                }), (0, CU.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, CU.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== RU.lowpassHz,
                                    onChange: UU => {
                                      gU({
                                        lowpassHz: UU.target.checked ? Xp : null
                                      })
                                    }
                                  }), (0, CU.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== RU.lowpassHz && (0, CU.jsx)(Ot, {
                                  label: "Filter",
                                  min: 0,
                                  max: vp(Vp, rp),
                                  step: .1,
                                  value: vp(Vp, RU.lowpassHz),
                                  format: () => `${RU.lowpassHz} Hz`,
                                  onChange: UU => {
                                    gU({
                                      lowpassHz: dp(Vp, UU)
                                    })
                                  }
                                })]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, CU.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), sp.map((UU => {
                                  let {
                                    key: tU,
                                    label: pU,
                                    max: EU
                                  } = UU;
                                  return (0, CU.jsx)(Ot, {
                                    label: pU,
                                    min: 0,
                                    max: EU,
                                    step: .1,
                                    value: RU.intonation[tU],
                                    format: Sp,
                                    onChange: UU => {
                                      gU({
                                        intonation: {
                                          ...RU.intonation,
                                          [tU]: UU
                                        }
                                      })
                                    }
                                  }, tU)
                                }))]
                              })]
                            })
                          }
                          const kp = Object.keys(bp.j),
                            Fp = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function ip(UU) {
                            var RU;
                            const gU = JSON.stringify((0, bp.k)(UU));
                            return null !== (RU = kp.find((UU => JSON.stringify((0, bp.k)(bp.j[UU])) === gU))) && void 0 !== RU ? RU : null
                          }

                          function Ap(UU) {
                            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof UU || null === UU) return JSON.stringify(UU);
                            return `{\n${Object.entries(UU).map((UU=>{let[gU,tU]=UU;return`${RU}    ${gU}: ${Ap(tU,`${RU}    `)},`})).join("\n")}\n${RU}}`
                          }

                          function zp(UU, RU, gU) {
                            const tU = ip(UU),
                              pU = [`    line: ${JSON.stringify(RU)},`];
                            return gU && pU.push(`    speakerName: ${JSON.stringify(gU)},`), pU.push("    voice,"), `const voice = ${tU?JSON.stringify(tU):Ap((0,bp.k)(UU))}\n\napi.setClientOption(playerId, "dialogue", {\n${pU.join("\n")}\n})`
                          }
                          const Mp = 400,
                            Dp = 90;
                          let Lp = null;

                          function Np(UU, RU, gU) {
                            return Lp ??= new AudioContext, Lp.resume(), (0, ap.d)(Lp, Lp.destination, UU, RU, gU, (() => {}))
                          }

                          function lp() {
                            const [UU, RU] = (0, tU.useState)(bp.j.regular), [gU, pU] = (0, tU.useState)(Fp[0]), [PU, TU] = (0, tU.useState)("Innkeeper"), [qU, KU] = (0, tU.useState)(0), cU = ct((UU => UU.volume)), GU = (0, tU.useRef)(null), jU = (0, tU.useRef)(0), uU = (0, tU.useRef)(0), hU = () => {
                              var UU;
                              null === (UU = GU.current) || void 0 === UU || UU.call(GU), GU.current = null
                            };
                            (0, tU.useEffect)((() => () => {
                              var UU;
                              null === (UU = GU.current) || void 0 === UU || UU.call(GU), window.clearTimeout(jU.current)
                            }), []);
                            const eU = (0, tU.useMemo)((() => ({
                                line: gU,
                                speakerName: PU || void 0,
                                voice: UU
                              })), [gU, PU, UU]),
                              WU = (0, tU.useRef)(eU);
                            WU.current = eU;
                            const xU = ip(UU),
                              mU = UU => {
                                window.clearTimeout(jU.current), hU();
                                const {
                                  plan: RU,
                                  synth: gU
                                } = (0, Zp.c)(UU);
                                gU && (GU.current = Np(gU, RU.blips, cU)), KU((UU => UU + 1))
                              },
                              IU = zp(UU, gU, PU);
                            return (0, CU.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, CU.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, CU.jsxs)("div", {
                                  children: [(0, CU.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, CU.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, CU.jsx)(fU, {
                                  text: IU,
                                  label: "Copy code"
                                })]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [kp.map((UU => (0, CU.jsx)("button", {
                                  type: "button",
                                  className: EU()("DocsVariantChip", {
                                    Active: xU === UU
                                  }),
                                  "aria-pressed": xU === UU,
                                  onClick: () => {
                                    (UU => {
                                      const gU = bp.j[UU];
                                      RU(gU), mU({
                                        ...eU,
                                        voice: gU
                                      })
                                    })(UU)
                                  },
                                  children: UU
                                }, UU))), !xU && (0, CU.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, CU.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, CU.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, CU.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, CU.jsx)(op.d, {
                                      display: eU
                                    }, qU)
                                  }), (0, CU.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: UU => {
                                      UU.preventDefault(), mU(eU)
                                    },
                                    children: [(0, CU.jsx)("input", {
                                      value: gU,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: UU => {
                                        pU(UU.target.value)
                                      }
                                    }), (0, CU.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, CU.jsx)(QU, {
                                        name: "play"
                                      }), (0, CU.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, CU.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Fp.map((UU => (0, CU.jsx)("button", {
                                      type: "button",
                                      className: EU()("DocsVariantChip", {
                                        Active: gU === UU
                                      }),
                                      onClick: () => {
                                        var RU;
                                        pU(RU = UU), mU({
                                          ...eU,
                                          line: RU
                                        })
                                      },
                                      children: UU
                                    }, UU)))
                                  }), (0, CU.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, CU.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, CU.jsx)("input", {
                                      value: PU,
                                      placeholder: "No name",
                                      onChange: UU => {
                                        TU(UU.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, CU.jsx)(yp, {
                                  synth: UU,
                                  onChange: gU => {
                                    const tU = {
                                      ...UU,
                                      ...gU
                                    };
                                    RU(tU);
                                    const pU = {
                                        ...eU,
                                        voice: tU
                                      },
                                      EU = performance.now();
                                    if (EU - uU.current >= Dp) {
                                      uU.current = EU, hU();
                                      const UU = (0, Zp.c)(pU).plan.blips[0];
                                      UU && (GU.current = Np((0, bp.k)(tU), [{
                                        ...UU,
                                        atMs: 0
                                      }], cU))
                                    }
                                    window.clearTimeout(jU.current), jU.current = window.setTimeout((() => {
                                      mU(WU.current)
                                    }), Mp)
                                  }
                                })]
                              }), (0, CU.jsx)(JU, {
                                code: IU,
                                lang: "ts"
                              })]
                            })
                          }
                          var Op = gU(4525);
                          const UE = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            RE = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            gE = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${RE}`, "g"), Op.h],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Op.h]
                            ];

                          function tE(UU) {
                            return `${UU.pageId}#${UU.anchor}`
                          }
                          let pE, EE, PE;

                          function TE(UU) {
                            const RU = (0, wU.h)(UU),
                              gU = new Set;
                            for (const [, , tU] of RU.matchAll(wU.e)) {
                              const UU = tU.startsWith("#") ? kU(tU) : null,
                                RU = UU ? tE({
                                  pageId: UU.page.id,
                                  anchor: UU.anchor
                                }) : null;
                              null !== RU && (pE || (pE = new Set(vU.flatMap((UU => ZU(UU.layout) ? sU(UU).sections.map((RU => tE({
                                pageId: UU.id,
                                anchor: RU.heading.anchor
                              }))) : [])))), pE).has(RU) && gU.add(RU)
                            }
                            for (const [, , tU] of RU.matchAll(UE)) {
                              const UU = jR(tU);
                              UU && gU.add(tE(UU))
                            }
                            return gU
                          }

                          function qE(UU, RU) {
                            const gU = new Set,
                              tU = function(UU) {
                                return UU.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(UU);
                            for (const [, pU] of tU.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) gU.add(pU);
                            for (const [pU, EU] of gE)
                              for (const [, UU] of(0, Op.c)(tU, pU, EU)) RU.has(UU) && gU.add(UU);
                            return gU
                          }

                          function KE(UU, RU, gU, tU) {
                            const pU = UU.get(RU);
                            pU ? !tU && pU.some((UU => UU.pageId === gU.pageId)) || pU.push(gU) : UU.set(RU, [gU])
                          }
                          const cE = /^[A-Za-z_$][\w$]*$/;

                          function GE(UU) {
                            return cE.test(UU.name) ? UU.name : "options"
                          }

                          function jE(UU, RU) {
                            const gU = UU.params.map(GE).join(", ");
                            return RU ? `${UU.name} = (${gU}) => {\n\t\n}` : `api.${UU.name}(${gU})`
                          }

                          function uE(UU) {
                            let {
                              method: RU,
                              isCallback: gU
                            } = UU;
                            return (0, CU.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, CU.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [gU ? (0, CU.jsxs)(CU.Fragment, {
                                  children: [(0, CU.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: RU.name
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, CU.jsxs)(CU.Fragment, {
                                  children: [(0, CU.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: RU.name
                                  }), (0, CU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), RU.params.map(((UU, gU) => (0, CU.jsxs)(tU.Fragment, {
                                  children: [gU > 0 && (0, CU.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, CU.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${RU.name}-${GE(UU)}`,
                                    children: UU.name
                                  })]
                                }, UU.name))), (0, CU.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: gU ? ") => " : ")"
                                }), gU && !RU.returns && (0, CU.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), RU.returns && RU.returns.type && (0, CU.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!gU && (0, CU.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, CU.jsx)(nR, {
                                  type: RU.returns.type
                                })]
                              })]
                            })
                          }

                          function CE(UU) {
                            let {
                              title: RU,
                              references: gU
                            } = UU;
                            const pU = (0, tU.useContext)(uR);
                            return (0, CU.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, CU.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: RU
                              }), gU.map((UU => (0, CU.jsx)(PU.c, {
                                to: iU(pU, HU(UU.pageId), UU.anchor),
                                children: UU.label
                              }, `${UU.pageId}#${UU.anchor}`)))]
                            })
                          }

                          function hE(UU) {
                            var RU, gU;
                            let {
                              pageId: tU,
                              anchor: pU
                            } = UU;
                            const EU = tE({
                                pageId: tU,
                                anchor: pU
                              }),
                              PU = null !== (RU = function() {
                                if (!PE) {
                                  PE = new Map;
                                  const tU = new Set(vU.filter((UU => "callbacks" === UU.layout)).flatMap((UU => sU(UU).sections.map((UU => UU.heading.text)))));
                                  for (const pU of vU)
                                    if ("article" === pU.layout || "snippets" === pU.layout)
                                      for (const EU of (0, wU.o)(sU(pU)))
                                        for (const {
                                            code: PU
                                          }
                                          of(0, wU.k)(EU.blocks))
                                          for (const TU of qE(PU, tU)) {
                                            const tU = GR().get(TU);
                                            if (tU) {
                                              var UU, RU, gU;
                                              const PU = {
                                                pageId: pU.id,
                                                anchor: null !== (UU = null === (RU = EU.heading) || void 0 === RU ? void 0 : RU.anchor) && void 0 !== UU ? UU : "",
                                                label: null !== (gU = pU.navTitle) && void 0 !== gU ? gU : pU.title
                                              };
                                              KE(PE, tE(tU), PU, !1)
                                            }
                                          }
                                }
                                return PE
                              }().get(EU)) && void 0 !== RU ? RU : [],
                              TU = null !== (gU = function() {
                                if (!EE) {
                                  EE = new Map;
                                  const UU = HU("changelog");
                                  for (const RU of sU(UU).sections) {
                                    const gU = new Set(RU.blocks.flatMap((UU => [...TE(UU)])));
                                    for (const tU of gU) {
                                      const gU = {
                                        pageId: UU.id,
                                        anchor: RU.heading.anchor,
                                        label: RU.heading.text
                                      };
                                      KE(EE, tU, gU, !0)
                                    }
                                  }
                                }
                                return EE
                              }().get(EU)) && void 0 !== gU ? gU : [];
                            return 0 === PU.length && 0 === TU.length ? null : (0, CU.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [PU.length > 0 && (0, CU.jsx)(CE, {
                                title: "Used in",
                                references: PU
                              }), TU.length > 0 && (0, CU.jsx)(CE, {
                                title: "Changelog",
                                references: TU
                              })]
                            })
                          }

                          function QE(UU) {
                            let {
                              method: RU,
                              pageId: gU,
                              anchor: tU,
                              isCallback: pU
                            } = UU;
                            const EU = pU ? void 0 : TR().get(RU.name),
                              PU = RU.description.length > 0 || null === EU || void 0 === EU || !EU.description ? RU.description : (0, wU.u)(EU.description);
                            return (0, CU.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, CU.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, CU.jsx)(Kg, {
                                  level: 2,
                                  text: RU.name,
                                  anchor: tU,
                                  className: "DocsCardTitle"
                                }), (0, CU.jsx)(fU, {
                                  text: jE(RU, pU),
                                  label: pU ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, CU.jsx)(uE, {
                                method: RU,
                                isCallback: pU
                              }), EU && null !== EU.deprecation && (0, CU.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, CU.jsx)("strong", {
                                  children: "Deprecated"
                                }), EU.deprecation && (0, CU.jsxs)(CU.Fragment, {
                                  children: [": ", (0, CU.jsx)(IR, {
                                    text: (TU = EU.deprecation, (0, Op.o)(TU, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Op.f)("`\\w"), (UU => {
                                      let [RU] = UU;
                                      return GR().has(RU) ? `\`${RU}\`` : RU
                                    })))
                                  })]
                                })]
                              }), PU.length > 0 && (0, CU.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, CU.jsx)(ug, {
                                  blocks: PU
                                })
                              }), RU.params.length > 0 && (0, CU.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, CU.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, CU.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: RU.params.map((UU => (0, CU.jsxs)("div", {
                                    id: `${RU.name}-${GE(UU)}`,
                                    className: "DocsParam",
                                    children: [(0, CU.jsxs)("dt", {
                                      children: [(0, CU.jsx)("code", {
                                        className: "DocsParamName",
                                        children: UU.name
                                      }), (0, CU.jsx)(nR, {
                                        type: UU.type
                                      })]
                                    }), UU.description && (0, CU.jsx)("dd", {
                                      children: (0, CU.jsx)(IR, {
                                        text: UU.description
                                      })
                                    })]
                                  }, UU.name)))
                                })]
                              }), RU.returns && (RU.returns.type || RU.returns.description.length > 0) && (0, CU.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, CU.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [RU.returns.type && (0, CU.jsx)(nR, {
                                    type: RU.returns.type
                                  }), RU.returns.description.length > 0 && (0, CU.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, CU.jsx)(ug, {
                                      blocks: RU.returns.description
                                    })
                                  })]
                                })]
                              }), (0, CU.jsx)(hE, {
                                pageId: gU,
                                anchor: tU
                              })]
                            });
                            var TU
                          }

                          function eE(UU) {
                            var RU;
                            return null !== UU.defaultValue && "undefined" !== UU.defaultValue ? UU.defaultValue : null !== (RU = UU.example) && void 0 !== RU ? RU : "value"
                          }

                          function WE(UU) {
                            let {
                              setting: RU,
                              pageId: gU,
                              anchor: tU,
                              setterSnippet: pU
                            } = UU;
                            const EU = null === RU.defaultValue ? null : eR(RU.defaultValue);
                            return (0, CU.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, CU.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, CU.jsx)(Kg, {
                                  level: 2,
                                  text: RU.name,
                                  anchor: tU,
                                  className: "DocsCardTitle"
                                }), (0, CU.jsx)(fU, {
                                  text: pU(RU.name, eE(RU)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, CU.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, CU.jsxs)("div", {
                                  children: [(0, CU.jsx)("dt", {
                                    children: "Type"
                                  }), (0, CU.jsx)("dd", {
                                    children: (0, CU.jsx)(nR, {
                                      type: RU.type
                                    })
                                  })]
                                }), null !== RU.defaultValue && (0, CU.jsxs)("div", {
                                  children: [(0, CU.jsx)("dt", {
                                    children: "Default"
                                  }), (0, CU.jsx)("dd", {
                                    children: (0, CU.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [EU && (0, CU.jsx)(WR, {
                                        colour: EU
                                      }), RU.defaultValue]
                                    })
                                  })]
                                }), null !== RU.example && (0, CU.jsxs)("div", {
                                  children: [(0, CU.jsx)("dt", {
                                    children: "Example"
                                  }), (0, CU.jsx)("dd", {
                                    children: (0, CU.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: RU.example
                                    })
                                  })]
                                })]
                              }), RU.description.length > 0 && (0, CU.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, CU.jsx)(ug, {
                                  blocks: RU.description
                                })
                              }), (0, CU.jsx)(hE, {
                                pageId: gU,
                                anchor: tU
                              })]
                            })
                          }

                          function fE(UU) {
                            let {
                              section: RU
                            } = UU;
                            return (0, CU.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, CU.jsx)(Kg, {
                                level: 2,
                                text: RU.heading.text,
                                anchor: RU.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, CU.jsx)("div", {
                                className: "DocsProse",
                                children: (0, CU.jsx)(ug, {
                                  blocks: RU.blocks
                                })
                              })]
                            })
                          }

                          function xE(UU) {
                            let {
                              section: RU
                            } = UU;
                            return (0, CU.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, CU.jsx)(Kg, {
                                level: RU.heading.level,
                                text: RU.heading.text,
                                anchor: RU.heading.anchor
                              }), (0, CU.jsx)(ug, {
                                blocks: RU.blocks
                              })]
                            })
                          }
                          const mE = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function IE(UU) {
                            let {
                              page: RU,
                              section: gU
                            } = UU;
                            if ("methods" === RU.layout || "callbacks" === RU.layout) return (0, CU.jsx)(QE, {
                              method: Jg(gU),
                              pageId: RU.id,
                              anchor: gU.heading.anchor,
                              isCallback: "callbacks" === RU.layout
                            });
                            if ("settings" === RU.layout) {
                              const UU = function(UU) {
                                const RU = {
                                  name: UU.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const tU of UU.blocks) {
                                  var gU;
                                  if (Ig(tU)) continue;
                                  const UU = "paragraph" === tU.kind ? tU.text.match(wg) : null;
                                  if (!UU) {
                                    RU.description.push(tU);
                                    continue
                                  }
                                  const pU = null !== (gU = mg(UU[2])) && void 0 !== gU ? gU : UU[2];
                                  "Type" === UU[1] ? RU.type = pU : "Default" === UU[1] ? RU.defaultValue = pU : "" !== pU && (RU.example = pU)
                                }
                                return RU.type ? RU : null
                              }(gU);
                              if (UU) return (0, CU.jsx)(WE, {
                                setting: UU,
                                pageId: RU.id,
                                anchor: gU.heading.anchor,
                                setterSnippet: RU.setterSnippet
                              })
                            }
                            return "snippets" === RU.layout ? (0, CU.jsx)(fE, {
                              section: gU
                            }) : "changelog" === RU.layout ? (0, CU.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, CU.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, CU.jsx)(Kg, {
                                  level: 2,
                                  text: gU.heading.text,
                                  anchor: gU.heading.anchor
                                })
                              }), (0, CU.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, CU.jsx)(ug, {
                                  blocks: ng(gU.blocks)
                                })
                              })]
                            }) : RU.gallery ? (0, CU.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, CU.jsx)(Kg, {
                                level: gU.heading.level,
                                text: gU.heading.text,
                                anchor: gU.heading.anchor
                              }), (0, CU.jsx)(bt, {
                                kind: RU.gallery,
                                content: sU(RU),
                                blocks: gU.blocks
                              })]
                            }) : (0, CU.jsx)(xE, {
                              section: gU
                            })
                          }

                          function JE(UU) {
                            let {
                              page: RU,
                              onTocChange: gU
                            } = UU;
                            const pU = sU(RU),
                              [EU, PU] = (0, tU.useState)(""),
                              TU = "article" !== RU.layout,
                              qU = Qg(RU.gallery) ? RU.gallery : null,
                              KU = null !== qU,
                              cU = EU.trim().toLowerCase(),
                              GU = (0, tU.useRef)(null),
                              jU = (0, tU.useCallback)((UU => {
                                var RU;
                                null === (RU = GU.current) || void 0 === RU || RU.preview(UU)
                              }), []),
                              uU = (0, tU.useMemo)((() => {
                                if (!RU.hasParticlePlayground) return [];
                                const UU = ag(pU.intro).find((UU => "names" === UU.kind && !UU.names.some((UU => null !== Sg(UU.name)))));
                                return "names" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.names.map((UU => UU.name)) : []
                              }), [RU, pU]),
                              hU = (0, tU.useMemo)((() => {
                                if (!RU.hasTextPlayground) return [];
                                const UU = pU.sections.flatMap((UU => UU.blocks.flatMap((UU => {
                                  var RU;
                                  return (null !== (RU = Zg(UU)) && void 0 !== RU ? RU : []).flatMap((UU => SR(UU.name) ? [UU.name] : []))
                                }))));
                                return [...new Set(UU)]
                              }), [RU, pU]),
                              QU = (0, tU.useMemo)((() => cU ? pU.sections.filter((UU => function(UU, RU) {
                                return !!UU.heading.text.toLowerCase().includes(RU) || UU.blocks.some((UU => (0, wU.h)(UU).toLowerCase().includes(RU)))
                              }(UU, cU))) : pU.sections), [pU, cU]),
                              eU = (0, tU.useMemo)((() => function(UU, RU) {
                                return "article" !== UU.layout ? RU.map((UU => ({
                                  anchor: UU.heading.anchor,
                                  text: UU.heading.text,
                                  level: 2
                                }))) : RU.flatMap((UU => {
                                  const RU = UU.blocks.flatMap((UU => "heading" === UU.kind && 3 === UU.level ? [{
                                    anchor: UU.anchor,
                                    text: UU.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: UU.heading.anchor,
                                    text: UU.heading.text,
                                    level: 2
                                  }, ...RU]
                                }))
                              }(RU, QU)), [RU, QU]);
                            return (0, tU.useEffect)((() => {
                              gU(eU)
                            }), [eU, gU]), (0, CU.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, CU.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, CU.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: pU.title || RU.title
                                }), (0, CU.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: RU.summary
                                }), (0, CU.jsx)(Dt, {
                                  page: RU
                                }), TU && (0, CU.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, CU.jsxs)("span", {
                                    children: [(0, CU.jsx)("strong", {
                                      children: pU.sections.length
                                    }), " ", mE[RU.layout]]
                                  })
                                })]
                              }), "" === RU.slug && (0, CU.jsx)(Zt, {}), qU && (0, CU.jsx)(rt, {
                                kind: qU
                              }, qU), RU.hasParticlePlayground && (0, CU.jsx)(qp, {
                                ref: GU,
                                textures: uU
                              }), !KU && pU.intro.length > 0 && (0, CU.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: RU.gallery ? (0, CU.jsx)(et.Provider, {
                                  value: RU.hasParticlePlayground ? jU : null,
                                  children: (0, CU.jsx)(bt, {
                                    kind: RU.gallery,
                                    content: pU,
                                    blocks: pU.intro
                                  })
                                }) : (0, CU.jsx)(ug, {
                                  blocks: ng(pU.intro)
                                })
                              }), RU.hasTextPlayground && (0, CU.jsx)(np, {
                                fontAwesomeIcons: hU
                              }), RU.hasVoicePlayground && (0, CU.jsx)(lp, {}), RU.childPageIds && (0, CU.jsx)(Zt, {
                                cards: RU.childPageIds.map((UU => ({
                                  pageId: UU
                                }))),
                                label: RU.title
                              }), TU && (0, CU.jsx)(fg, {
                                className: "DocsFilterBar",
                                value: EU,
                                placeholder: `Filter ${pU.sections.length} ${mE[RU.layout]}\u2026`,
                                label: `Filter ${mE[RU.layout]}`,
                                onChange: PU,
                                count: cU ? {
                                  visible: QU.length,
                                  total: pU.sections.length
                                } : null
                              }), !KU && (0, CU.jsxs)("div", {
                                className: `DocsSections Layout-${RU.layout}`,
                                children: [QU.map((UU => (0, CU.jsx)(IE, {
                                  page: RU,
                                  section: UU
                                }, UU.heading.anchor))), 0 === QU.length && (0, CU.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", mE[RU.layout], " match \u201c", EU, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const wE = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function nE(UU) {
                            let {
                              entry: RU,
                              isActive: gU,
                              onNavigate: tU,
                              label: pU,
                              children: PU
                            } = UU;
                            return (0, CU.jsx)("a", {
                              href: `#${RU.anchor}`,
                              "aria-label": pU,
                              className: EU()(`Level${RU.level}`, {
                                Active: gU
                              }),
                              "aria-current": gU ? "location" : void 0,
                              onClick: UU => {
                                UU.preventDefault(), tU(RU.anchor)
                              },
                              children: PU
                            })
                          }

                          function bE(UU) {
                            let {
                              toc: RU,
                              activeAnchor: gU,
                              onNavigate: pU
                            } = UU;
                            const PU = Math.max(0, RU.findIndex((UU => UU.anchor === gU))),
                              TU = (0, tU.useRef)(null),
                              qU = (0, tU.useRef)(!1);
                            (0, tU.useEffect)((() => {
                              var UU, gU;
                              const tU = null === (UU = TU.current) || void 0 === UU ? void 0 : UU.closest(".DocsToc"),
                                pU = null === (gU = TU.current) || void 0 === gU ? void 0 : gU.querySelector(".DocsTimelineNotch.Active");
                              if (!tU || !pU) return;
                              let EU = 0;
                              if (PU === RU.length - 1) EU = tU.scrollHeight;
                              else if (PU > 0) {
                                const UU = tU.getBoundingClientRect(),
                                  RU = pU.getBoundingClientRect();
                                EU = tU.scrollTop + RU.top + RU.height / 2 - (UU.top + tU.clientHeight / 2)
                              }
                              tU.scrollTo({
                                top: EU,
                                behavior: qU.current ? "smooth" : "auto"
                              }), qU.current = !0
                            }), [PU, RU.length]);
                            const KU = [];
                            return RU.forEach(((UU, RU) => {
                              var gU, tU, pU;
                              const EU = function(UU) {
                                  const RU = UU.trim().match(wE);
                                  return RU ? {
                                    day: RU[1],
                                    month: `${RU[2]} ${RU[3]}`
                                  } : null
                                }(UU.text),
                                PU = null !== (gU = null === EU || void 0 === EU ? void 0 : EU.month) && void 0 !== gU ? gU : null;
                              null !== PU && (null === (tU = KU.at(-1)) || void 0 === tU ? void 0 : tU.month) === PU || KU.push({
                                month: PU,
                                entries: []
                              }), KU.at(-1).entries.push({
                                entry: UU,
                                day: null !== (pU = null === EU || void 0 === EU ? void 0 : EU.day) && void 0 !== pU ? pU : null,
                                index: RU
                              })
                            })), (0, CU.jsx)("ol", {
                              ref: TU,
                              className: "DocsTimeline",
                              children: KU.map((UU => {
                                let {
                                  month: RU,
                                  entries: gU
                                } = UU;
                                return (0, CU.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [RU && (0, CU.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: RU
                                  }), (0, CU.jsx)("ol", {
                                    children: gU.map((UU => {
                                      let {
                                        entry: RU,
                                        day: gU,
                                        index: tU
                                      } = UU;
                                      return (0, CU.jsx)("li", {
                                        className: EU()("DocsTimelineNotch", {
                                          Passed: tU < PU,
                                          Active: tU === PU
                                        }),
                                        children: (0, CU.jsx)(nE, {
                                          entry: RU,
                                          isActive: tU === PU,
                                          onNavigate: pU,
                                          label: RU.text,
                                          children: (0, CU.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== gU && void 0 !== gU ? gU : RU.text
                                          })
                                        })
                                      }, RU.anchor)
                                    }))
                                  })]
                                }, gU[0].entry.anchor)
                              }))
                            })
                          }

                          function oE(UU) {
                            let {
                              isChangelog: RU,
                              toc: gU,
                              activeAnchor: tU,
                              onNavigate: pU
                            } = UU;
                            return 0 === gU.length ? null : (0, CU.jsxs)(CU.Fragment, {
                              children: [(0, CU.jsx)("div", {
                                className: "DocsTocTitle",
                                children: RU ? "Updates" : "On this page"
                              }), RU ? (0, CU.jsx)(bE, {
                                toc: gU,
                                activeAnchor: tU,
                                onNavigate: pU
                              }) : (0, CU.jsx)("ul", {
                                children: gU.map((UU => (0, CU.jsx)("li", {
                                  children: (0, CU.jsx)(nE, {
                                    entry: UU,
                                    isActive: UU.anchor === tU,
                                    onNavigate: pU,
                                    children: UU.text.replace(/`/g, "")
                                  })
                                }, UU.anchor)))
                              })]
                            })
                          }
                          const ZE = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            aE = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            YE = 20,
                            BE = 10,
                            VE = 40,
                            rE = 120;
                          let XE;

                          function vE(UU) {
                            const RU = UU.gallery;
                            if (!RU) return [];
                            if (Qg(RU)) return function(UU) {
                              return Wg(UU).entries.map((UU => UU.name))
                            }(RU).map((gU => ({
                              page: UU,
                              anchor: Bg(RU, gU),
                              title: gU,
                              kind: aE[RU],
                              text: "",
                              listedUnder: UU.title
                            })));
                            const gU = sU(UU);
                            return (0, wU.o)(gU).flatMap((tU => {
                              const pU = tU.heading ? `${UU.title} \u203a ${tU.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : UU.title;
                              return rg(RU, gU, tU.blocks).flatMap((gU => "names" !== gU.kind ? [] : gU.names.map((tU => {
                                const EU = gU.isSongs ? "Song" : aE[RU];
                                return {
                                  page: UU,
                                  anchor: tU.anchor,
                                  title: tU.name,
                                  kind: EU,
                                  text: "",
                                  listedUnder: pU
                                }
                              }))))
                            }))
                          }

                          function dE(UU, RU, gU) {
                            const tU = UU.title.toLowerCase();
                            let pU = 0;
                            if (tU === RU) pU = 100;
                            else if (tU.startsWith(RU)) pU = 80;
                            else if (tU.includes(RU)) pU = 60;
                            else if (gU.every((UU => tU.includes(UU)))) pU = 45;
                            else {
                              if (!UU.text.toLowerCase().includes(RU)) return 0;
                              pU = 20
                            }
                            return pU - Math.min(tU.length / 10, 9) + ("Page" === UU.kind ? 8 : "Method" === UU.kind ? 3 : 0) - (UU.listedUnder ? YE : 0)
                          }

                          function HE(UU, RU) {
                            const gU = UU.toLowerCase().indexOf(RU),
                              tU = Math.max(0, gU - rE / 3);
                            return `${tU>0?"\u2026":""}${UU.slice(tU,tU+rE)}${tU+rE<UU.length?"\u2026":""}`
                          }

                          function SE(UU) {
                            let {
                              text: RU,
                              query: gU
                            } = UU;
                            const tU = gU ? RU.toLowerCase().indexOf(gU) : -1;
                            return -1 === tU ? (0, CU.jsx)(CU.Fragment, {
                              children: RU
                            }) : (0, CU.jsxs)(CU.Fragment, {
                              children: [RU.slice(0, tU), (0, CU.jsx)("mark", {
                                children: RU.slice(tU, tU + gU.length)
                              }), RU.slice(tU + gU.length)]
                            })
                          }

                          function sE(UU) {
                            let {
                              basePath: RU,
                              onClose: gU
                            } = UU;
                            const pU = (0, TU.u)(),
                              [PU, qU] = (0, tU.useState)(""),
                              [KU, cU] = (0, tU.useState)(0),
                              GU = (0, tU.useRef)(null),
                              jU = (0, tU.useRef)(null),
                              uU = PU.trim().toLowerCase(),
                              hU = (0, tU.useMemo)((() => {
                                const UU = (XE || (XE = vU.flatMap((UU => {
                                  const RU = sU(UU);
                                  return [{
                                    page: UU,
                                    anchor: "",
                                    title: UU.title,
                                    kind: "Page",
                                    text: UU.summary
                                  }, ...RU.sections.flatMap((RU => {
                                    const gU = RU.blocks.filter((UU => "paragraph" === UU.kind)).map(wU.h).join(" ").replace(/[`*]/g, ""),
                                      tU = {
                                        page: UU,
                                        anchor: RU.heading.anchor,
                                        title: RU.heading.text.replace(/`/g, ""),
                                        kind: ZE[UU.layout],
                                        text: gU
                                      },
                                      pU = RU.blocks.flatMap((RU => "article" === UU.layout && "heading" === RU.kind && 3 === RU.level ? [{
                                        page: UU,
                                        anchor: RU.anchor,
                                        title: RU.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: tU.title
                                      }] : []));
                                    return [tU, ...pU]
                                  })), ...vE(UU)]
                                }))), XE);
                                if (!uU) return UU.filter((UU => "Page" === UU.kind));
                                const RU = uU.split(/\s+/);
                                let gU = 0;
                                return UU.map((UU => ({
                                  entry: UU,
                                  score: dE(UU, uU, RU)
                                }))).filter((UU => UU.score > 0)).sort(((UU, RU) => RU.score - UU.score)).filter((UU => !UU.entry.listedUnder || (gU++, gU <= BE))).slice(0, VE).map((UU => UU.entry))
                              }), [uU]);
                            (0, tU.useEffect)((() => {
                              cU(0)
                            }), [uU]), (0, tU.useEffect)((() => {
                              const UU = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === UU || void 0 === UU || UU.focus()
                              }
                            }), []), (0, tU.useEffect)((() => {
                              var UU, RU;
                              null === (UU = GU.current) || void 0 === UU || null === (RU = UU.querySelector(".Active")) || void 0 === RU || RU.scrollIntoView({
                                block: "nearest"
                              })
                            }), [KU]);
                            const eU = UU => {
                              pU(iU(RU, UU.page, UU.anchor)), gU()
                            };
                            return (0, CU.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: UU => {
                                UU.target === UU.currentTarget && gU()
                              },
                              children: (0, CU.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: UU => {
                                  UU.target !== jU.current && UU.preventDefault()
                                },
                                onKeyDown: UU => {
                                  if ("Escape" === UU.key) gU();
                                  else if ("Tab" === UU.key) {
                                    var RU;
                                    UU.preventDefault(), null === (RU = jU.current) || void 0 === RU || RU.focus()
                                  }
                                },
                                children: [(0, CU.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, CU.jsx)(QU, {
                                    name: "magnifying-glass"
                                  }), (0, CU.jsx)("input", {
                                    ref: jU,
                                    autoFocus: !0,
                                    value: PU,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": hU.length > 0 ? `DocsSearchResult-${KU}` : void 0,
                                    onChange: UU => {
                                      qU(UU.target.value)
                                    },
                                    onKeyDown: UU => {
                                      if ("ArrowDown" === UU.key || "ArrowUp" === UU.key) {
                                        UU.preventDefault();
                                        const RU = "ArrowDown" === UU.key ? 1 : -1;
                                        cU((KU + RU + hU.length) % Math.max(hU.length, 1))
                                      } else "Enter" === UU.key && hU[KU] && eU(hU[KU])
                                    }
                                  }), (0, CU.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, CU.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: GU,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!uU && (0, CU.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), hU.map(((UU, RU) => {
                                    var gU;
                                    return (0, CU.jsxs)("li", {
                                      id: `DocsSearchResult-${RU}`,
                                      role: "option",
                                      "aria-selected": RU === KU,
                                      className: EU()("DocsSearchResult", {
                                        Active: RU === KU
                                      }),
                                      onMouseMove: () => {
                                        cU(RU)
                                      },
                                      onClick: () => {
                                        eU(UU)
                                      },
                                      children: [(0, CU.jsx)(QU, {
                                        name: UU.page.icon
                                      }), (0, CU.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, CU.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, CU.jsx)(SE, {
                                            text: UU.title,
                                            query: uU
                                          })
                                        }), UU.text && (0, CU.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, CU.jsx)(SE, {
                                            text: HE(UU.text, uU),
                                            query: uU
                                          })
                                        })]
                                      }), (0, CU.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === UU.kind ? "Page" : null !== (gU = UU.listedUnder) && void 0 !== gU ? gU : `${UU.kind} \xb7 ${UU.page.title}`
                                      })]
                                    }, `${UU.page.id}#${UU.anchor}`)
                                  })), uU && 0 === hU.length && (0, CU.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", PU, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function yE(UU, RU) {
                            if (RU < 10) return `${UU.toFixed(1)}s`;
                            const gU = Math.floor(UU);
                            return `${Math.floor(gU/60)}:${String(gU%60).padStart(2,"0")}`
                          }

                          function kE() {
                            const UU = ct((UU => UU.track)),
                              RU = ct((UU => UU.volume)),
                              [gU, pU] = (0, tU.useState)(0),
                              PU = (0, tU.useRef)(Rt);
                            if ((0, tU.useEffect)((() => {
                                if (!UU) return;
                                if (pU(Ct()), "playing" !== UU.status) return;
                                let RU = 0;
                                const gU = () => {
                                  pU(Ct()), RU = requestAnimationFrame(gU)
                                };
                                return RU = requestAnimationFrame(gU), () => {
                                  cancelAnimationFrame(RU)
                                }
                              }), [UU]), !UU) return null;
                            const TU = "paused" !== UU.status,
                              qU = Math.min(gU, UU.duration);
                            return (0, CU.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, CU.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, CU.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": TU ? `Pause ${UU.name}` : `Play ${UU.name}`,
                                  onClick: ut,
                                  children: (0, CU.jsx)(QU, {
                                    name: TU ? "pause" : "play"
                                  })
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, CU.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, CU.jsx)("code", {
                                      children: UU.name
                                    }), (0, CU.jsx)("span", {
                                      children: UU.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, CU.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, CU.jsx)("span", {
                                      children: yE(qU, UU.duration)
                                    }), (0, CU.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: UU.duration || 1,
                                      step: .01,
                                      value: qU,
                                      disabled: 0 === UU.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${yE(qU,UU.duration)} of ${yE(UU.duration,UU.duration)}`,
                                      onChange: UU => {
                                        const RU = Number(UU.target.value);
                                        ! function(UU) {
                                          var RU;
                                          Pt = UU, null === (RU = pt) || void 0 === RU || RU.seek(UU)
                                        }(RU), pU(RU)
                                      }
                                    }), (0, CU.jsx)("span", {
                                      children: UU.duration > 0 ? yE(UU.duration, UU.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, CU.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, CU.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === RU ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === RU ? ht(PU.current) : (PU.current = RU, ht(0))
                                    },
                                    children: (0, CU.jsx)(QU, {
                                      name: "volume",
                                      className: EU()({
                                        Muted: 0 === RU
                                      })
                                    })
                                  }), (0, CU.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: RU,
                                    "aria-label": "Volume",
                                    onChange: UU => {
                                      ht(Number(UU.target.value))
                                    }
                                  })]
                                }), (0, CU.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var RU;
                                    null === (RU = document.querySelector(`[data-docs-track="${CSS.escape(gt(UU.name,UU.isSong))}"]`)) || void 0 === RU || RU.focus(), Qt()
                                  },
                                  children: (0, CU.jsx)(QU, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var FE = gU(34);
                          const iE = "docsTheme",
                            AE = window.matchMedia("(prefers-color-scheme: light)");

                          function zE(UU) {
                            let {
                              theme: RU,
                              onChange: gU
                            } = UU;
                            const tU = "dark" === RU ? "light" : "dark";
                            return (0, CU.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${tU} theme`,
                              title: `Switch to ${tU} theme`,
                              onClick: () => {
                                gU(tU)
                              },
                              children: (0, CU.jsx)(QU, {
                                name: "dark" === RU ? "moon" : "sun"
                              })
                            })
                          }
                          const ME = "https://github.com/Bloxdy/code-api",
                            DE = "https://discord.gg/playbloxd",
                            LE = 180,
                            NE = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function lE(UU) {
                            let {
                              basePath: RU,
                              activePageId: gU,
                              onNavigate: tU
                            } = UU;
                            return (0, CU.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: dU.map((UU => (0, CU.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, CU.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: UU.title
                                }), UU.pageIds.map((UU => {
                                  var pU;
                                  const TU = HU(UU);
                                  return (0, CU.jsxs)(PU.c, {
                                    to: iU(RU, TU),
                                    className: EU()("DocsNavLink", {
                                      Active: TU.id === gU
                                    }),
                                    "aria-current": TU.id === gU ? "page" : void 0,
                                    onClick: tU,
                                    children: [(0, CU.jsx)(QU, {
                                      name: TU.icon
                                    }), (0, CU.jsx)("span", {
                                      children: null !== (pU = TU.navTitle) && void 0 !== pU ? pU : TU.title
                                    })]
                                  }, TU.id)
                                }))]
                              }, UU.title)))
                            })
                          }

                          function OE(UU) {
                            let {
                              basePath: RU,
                              pageId: gU
                            } = UU;
                            const tU = dU.flatMap((UU => UU.pageIds)),
                              pU = tU.indexOf(gU),
                              EU = pU > 0 ? HU(tU[pU - 1]) : null,
                              TU = pU < tU.length - 1 ? HU(tU[pU + 1]) : null;
                            return (0, CU.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [EU ? (0, CU.jsxs)(PU.c, {
                                className: "DocsPagerLink Previous",
                                to: iU(RU, EU),
                                children: [(0, CU.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, CU.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: EU.title
                                })]
                              }) : (0, CU.jsx)("span", {}), TU && (0, CU.jsxs)(PU.c, {
                                className: "DocsPagerLink Next",
                                to: iU(RU, TU),
                                children: [(0, CU.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, CU.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: TU.title
                                })]
                              })]
                            })
                          }

                          function UP(UU) {
                            let {
                              basePath: RU,
                              embedded: gU = !1
                            } = UU;
                            const {
                              pageSlug: pU = ""
                            } = (0, TU.y)(), KU = (0, TU.s)(), cU = (0, TU.u)(), GU = (jU = pU, vU.find((UU => UU.slug === jU)));
                            var jU;
                            const [uU, hU] = function() {
                              const [UU, RU] = (0, tU.useState)((() => {
                                const UU = FE.k.getItem(iE);
                                return "dark" === UU || "light" === UU ? UU : null
                              })), [gU, pU] = (0, tU.useState)(AE.matches ? "light" : "dark");
                              return (0, tU.useEffect)((() => {
                                const UU = () => {
                                  pU(AE.matches ? "light" : "dark")
                                };
                                return AE.addEventListener("change", UU), () => {
                                  AE.removeEventListener("change", UU)
                                }
                              }), []), [null !== UU && void 0 !== UU ? UU : gU, UU => {
                                FE.k.setItem(iE, UU), RU(UU)
                              }]
                            }(), [eU, WU] = (0, tU.useState)(null), [fU, xU] = (0, tU.useState)(!1), [mU, IU] = (0, tU.useState)(!1), [JU, nU] = (0, tU.useState)([]), bU = function(UU, RU) {
                              const [gU, pU] = (0, tU.useState)("");
                              return (0, tU.useEffect)((() => {
                                if (!RU) return;
                                let gU = 0;
                                const tU = () => {
                                    var tU, EU;
                                    gU = 0;
                                    const PU = RU.getBoundingClientRect().top + LE;
                                    let TU = null !== (tU = null === (EU = UU[0]) || void 0 === EU ? void 0 : EU.anchor) && void 0 !== tU ? tU : "";
                                    for (const RU of UU) {
                                      const UU = document.getElementById(RU.anchor);
                                      UU && UU.getBoundingClientRect().top <= PU && (TU = RU.anchor)
                                    }
                                    RU.scrollTop + RU.clientHeight >= RU.scrollHeight - 2 && RU.scrollTop > 0 && UU.length > 0 && (TU = UU[UU.length - 1].anchor), pU(TU)
                                  },
                                  EU = () => {
                                    gU || (gU = requestAnimationFrame(tU))
                                  };
                                return tU(), RU.addEventListener("scroll", EU, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(gU), RU.removeEventListener("scroll", EU)
                                }
                              }), [UU, RU]), gU
                            }(JU, eU), oU = "" === pU && KU.hash ? function(UU) {
                              const RU = (0, wU.m)(UU);
                              if (yU(HU("welcome"), RU)) return null;
                              const gU = Object.hasOwn(FU, RU) ? FU[RU] : null;
                              if (gU) return {
                                page: HU(gU.pageId),
                                anchor: gU.anchor
                              };
                              const tU = HU("readme");
                              return yU(tU, RU) ? {
                                page: tU,
                                anchor: RU
                              } : kU(`#${RU}`)
                            }(KU.hash) : null;
                            (0, tU.useEffect)((() => (qU.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              qU.b.set({
                                musicOnFromPage: !0
                              }), Qt()
                            })), []), (0, tU.useEffect)((() => {
                              const UU = UU => {
                                const RU = UU.target;
                                if (RU.closest(".DocsTextDialog")) return;
                                const gU = RU.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(RU.tagName);
                                "k" === UU.key && (UU.metaKey || UU.ctrlKey) || "/" === UU.key && !gU ? (UU.preventDefault(), IU(!0)) : "Escape" === UU.key && xU(!1)
                              };
                              return window.addEventListener("keydown", UU), () => {
                                window.removeEventListener("keydown", UU)
                              }
                            }), []);
                            const ZU = (0, tU.useRef)(null);
                            (0, tU.useLayoutEffect)((() => {
                              var UU, RU;
                              if (!eU) return;
                              const gU = ZU.current === KU.pathname;
                              ZU.current = KU.pathname;
                              const tU = (0, wU.m)(KU.hash),
                                pU = tU ? document.getElementById(tU) : null;
                              if (null === (UU = eU.querySelector(".DocsTargeted")) || void 0 === UU || UU.classList.remove("DocsTargeted"), null === pU || void 0 === pU || null === (RU = pU.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === RU || RU.classList.add("DocsTargeted"), pU) {
                                var EU;
                                const UU = pU.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (EU = pU.closest(".DocsChangelogEntry")) && void 0 !== EU ? EU : pU).scrollIntoView({
                                  block: UU ? "center" : "start",
                                  behavior: gU ? "smooth" : "auto"
                                })
                              } else gU || eU.scrollTo({
                                top: 0
                              })
                            }), [eU, KU.pathname, KU.hash, KU.key]);
                            const aU = (0, tU.useCallback)((() => {
                                xU(!1)
                              }), []),
                              YU = (0, tU.useCallback)((UU => {
                                cU({
                                  hash: UU
                                })
                              }), [cU]);
                            if (oU) return (0, CU.jsx)(TU.d, {
                              replace: !0,
                              to: iU(RU, oU.page, oU.anchor)
                            });
                            if (!GU) return (0, CU.jsx)(TU.d, {
                              replace: !0,
                              to: RU
                            });
                            const BU = gU ? "div" : "main";
                            return (0, CU.jsx)(uR.Provider, {
                              value: RU,
                              children: (0, CU.jsx)(CR.Provider, {
                                value: eU,
                                children: (0, CU.jsxs)("div", {
                                  ref: WU,
                                  className: EU()("DocsSite", {
                                    Embedded: gU,
                                    NavOpen: fU
                                  }),
                                  "data-theme": uU,
                                  children: [(0, CU.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, CU.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": fU ? "Close menu" : "Open menu",
                                      "aria-expanded": fU,
                                      onClick: () => {
                                        xU(!fU)
                                      },
                                      children: (0, CU.jsx)(QU, {
                                        name: fU ? "cross" : "menu"
                                      })
                                    }), (0, CU.jsxs)(PU.c, {
                                      to: RU,
                                      className: "DocsBrand",
                                      children: [(0, CU.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, CU.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, CU.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, CU.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        IU(!0)
                                      },
                                      children: [(0, CU.jsx)(QU, {
                                        name: "magnifying-glass"
                                      }), (0, CU.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, CU.jsxs)("kbd", {
                                        children: [NE ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, CU.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, CU.jsxs)("a", {
                                        href: DE,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, CU.jsx)(QU, {
                                          name: "discord"
                                        }), (0, CU.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, CU.jsxs)("a", {
                                        href: ME,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, CU.jsx)(QU, {
                                          name: "external-link"
                                        }), (0, CU.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !gU && (0, CU.jsxs)(PU.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, CU.jsx)(QU, {
                                          name: "play"
                                        }), (0, CU.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, CU.jsx)(zE, {
                                        theme: uU,
                                        onChange: hU
                                      })]
                                    })]
                                  }), (0, CU.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, CU.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, CU.jsx)(lE, {
                                        basePath: RU,
                                        activePageId: GU.id,
                                        onNavigate: aU
                                      })
                                    }), (0, CU.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: aU
                                    }), (0, CU.jsxs)(BU, {
                                      className: "DocsMain",
                                      children: [(0, CU.jsx)(JE, {
                                        page: GU,
                                        onTocChange: nU
                                      }, GU.id), (0, CU.jsx)(OE, {
                                        basePath: RU,
                                        pageId: GU.id
                                      })]
                                    }), (0, CU.jsx)("aside", {
                                      className: EU()("DocsToc", {
                                        Timeline: "changelog" === GU.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, CU.jsx)(oE, {
                                        isChangelog: "changelog" === GU.layout,
                                        toc: JU,
                                        activeAnchor: bU,
                                        onNavigate: YU
                                      })
                                    })]
                                  }), (0, CU.jsx)(kE, {}), mU && (0, CU.jsx)(sE, {
                                    basePath: RU,
                                    onClose: () => {
                                      IU(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4396: (UU, RU, gU) => {
                          gU.d(RU, {
                            e: () => tU,
                            g: () => PU,
                            h: () => QU,
                            k: () => hU,
                            l: () => TU,
                            m: () => pU,
                            n: () => EU,
                            o: () => CU,
                            q: () => uU,
                            u: () => jU
                          });
                          const tU = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function pU(UU) {
                            try {
                              return decodeURIComponent(UU.slice(1))
                            } catch {
                              return UU.slice(1)
                            }
                          }

                          function EU(UU) {
                            return UU.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const PU = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${tU.source}`, "g");

                          function TU(UU, RU) {
                            return 2 === UU.length ? RU.replace(/^ (.*) $/, "$1") : RU
                          }

                          function qU(UU) {
                            return "" === UU.trim()
                          }

                          function KU(UU) {
                            const RU = [];
                            for (const gU of UU.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) RU.length > 0 && RU[RU.length - 1].endsWith("\\") ? RU[RU.length - 1] += `|${gU}` : RU.push(gU);
                            return RU.map((UU => UU.trim().replaceAll("\\|", "|")))
                          }
                          const cU = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function GU(UU) {
                            const RU = [],
                              gU = [{
                                indent: -1,
                                items: RU
                              }];
                            let tU = null;
                            for (const pU of UU) {
                              const UU = pU.match(cU);
                              if (!UU) {
                                tU && (tU.text += ` ${pU.trim()}`);
                                continue
                              }
                              const RU = UU[1].replace(/\t/g, "  ").length;
                              for (; RU <= gU[gU.length - 1].indent;) gU.pop();
                              tU = {
                                text: UU[3].trim(),
                                children: []
                              }, gU[gU.length - 1].items.push(tU), gU.push({
                                indent: RU,
                                items: tU.children
                              })
                            }
                            return RU
                          }

                          function jU(UU) {
                            const RU = UU.replace(/\r\n/g, "\n").split("\n"),
                              gU = [];
                            let tU = 0;
                            for (; tU < RU.length;) {
                              const UU = RU[tU];
                              if (qU(UU)) {
                                tU++;
                                continue
                              }
                              const pU = UU.match(/^\s*```\s*(\w*)\s*$/);
                              if (pU) {
                                const UU = [];
                                for (tU++; tU < RU.length && !/^\s*```\s*$/.test(RU[tU]);) UU.push(RU[tU]), tU++;
                                tU++, gU.push({
                                  kind: "code",
                                  lang: pU[1] || "text",
                                  code: UU.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const PU = UU.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (PU) {
                                const UU = PU[2].trim();
                                gU.push({
                                  kind: "heading",
                                  level: PU[1].length,
                                  text: UU,
                                  anchor: EU(UU)
                                }), tU++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(UU)) {
                                gU.push({
                                  kind: "rule"
                                }), tU++;
                                continue
                              }
                              if (UU.trim().startsWith("|") && tU + 1 < RU.length && /^\s*\|[\s:|-]+\|\s*$/.test(RU[tU + 1])) {
                                const pU = KU(UU),
                                  EU = [];
                                for (tU += 2; tU < RU.length && RU[tU].trim().startsWith("|");) EU.push(KU(RU[tU])), tU++;
                                gU.push({
                                  kind: "table",
                                  header: pU,
                                  rows: EU
                                });
                                continue
                              }
                              if (UU.startsWith(">")) {
                                const UU = [];
                                for (; tU < RU.length && RU[tU].startsWith(">");) UU.push(RU[tU].replace(/^>\s?/, "")), tU++;
                                gU.push({
                                  kind: "quote",
                                  blocks: jU(UU.join("\n"))
                                });
                                continue
                              }
                              if (cU.test(UU)) {
                                const pU = [],
                                  EU = /^\s*\d+\./.test(UU);
                                for (; tU < RU.length && !qU(RU[tU]) && (cU.test(RU[tU]) || /^\s+\S/.test(RU[tU]));) pU.push(RU[tU]), tU++;
                                gU.push({
                                  kind: "list",
                                  ordered: EU,
                                  items: GU(pU)
                                });
                                continue
                              }
                              const TU = [];
                              for (; tU < RU.length && !qU(RU[tU]) && !/^\s*```/.test(RU[tU]) && !/^#{1,6}\s/.test(RU[tU]) && !RU[tU].startsWith(">") && !cU.test(RU[tU]) && (!RU[tU].trim().startsWith("|") || 0 !== TU.length);) TU.push(RU[tU].trim()), tU++;
                              0 === TU.length && (TU.push(RU[tU].trim()), tU++), gU.push({
                                kind: "paragraph",
                                text: TU.join(" ")
                              })
                            }
                            return gU
                          }

                          function uU(UU) {
                            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const gU = jU(UU);
                            let tU = "";
                            const pU = [],
                              EU = [],
                              PU = new Map;
                            for (const KU of gU) {
                              if ("heading" === KU.kind) {
                                var TU;
                                const UU = (null !== (TU = PU.get(KU.anchor)) && void 0 !== TU ? TU : 0) + 1;
                                PU.set(KU.anchor, UU), UU > 1 && (KU.anchor = `${KU.anchor}-${UU}`)
                              }
                              if ("heading" === KU.kind && 1 === KU.level && !tU) {
                                tU = KU.text;
                                continue
                              }
                              if ("heading" === KU.kind && KU.level <= RU) {
                                EU.push({
                                  heading: KU,
                                  blocks: []
                                });
                                continue
                              }
                              const UU = EU.at(-1);
                              UU ? UU.blocks.push(KU) : pU.push(KU)
                            }
                            const qU = UU => {
                              for (;
                                "rule" === (null === (RU = UU.at(-1)) || void 0 === RU ? void 0 : RU.kind);) {
                                var RU;
                                UU.pop()
                              }
                            };
                            qU(pU);
                            for (const KU of EU) qU(KU.blocks);
                            return {
                              title: tU,
                              intro: pU,
                              sections: EU
                            }
                          }

                          function CU(UU) {
                            return [{
                              heading: null,
                              blocks: UU.intro
                            }, ...UU.sections.map((UU => ({
                              heading: UU.heading,
                              blocks: UU.blocks
                            })))]
                          }

                          function hU(UU) {
                            return UU.flatMap((UU => "code" === UU.kind ? [UU] : "quote" === UU.kind ? hU(UU.blocks) : []))
                          }

                          function QU(UU) {
                            switch (UU.kind) {
                              case "heading":
                              case "paragraph":
                                return UU.text;
                              case "code":
                                return UU.code;
                              case "table":
                                return [UU.header, ...UU.rows].map((UU => UU.join(" "))).join(" ");
                              case "list": {
                                const RU = UU => UU.map((UU => `${UU.text} ${RU(UU.children)}`)).join(" ");
                                return RU(UU.items)
                              }
                              case "quote":
                                return UU.blocks.map(QU).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4495: (UU, RU, gU) => {
                          gU.d(RU, {
                            c: () => TU
                          });
                          var tU = gU(56),
                            pU = gU(299),
                            EU = gU(1790),
                            PU = gU(1090);

                          function TU(UU) {
                            let {
                              text: RU
                            } = UU;
                            const gU = [];
                            let TU = "";
                            return (0, pU.dc)(RU).forEach(((UU, RU) => {
                              if ("string" === typeof UU || !(0, EU.f)(UU.icon)) return void(TU += "string" === typeof UU ? UU : UU.icon);
                              const pU = Math.max(0, TU.trimEnd().search(/\S{1,12}$/));
                              gU.push((0, PU.jsxs)(tU.Fragment, {
                                children: [TU.slice(0, pU), (0, PU.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [TU.slice(pU), (0, PU.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": UU.icon,
                                    children: (0, PU.jsx)(EU.c, {
                                      itemName: UU.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, RU)), TU = ""
                            })), gU.push(TU), (0, PU.jsx)(PU.Fragment, {
                              children: gU
                            })
                          }
                        }, 4422: (UU, RU, gU) => {
                          gU.d(RU, {
                            e: () => WU,
                            b: () => eU
                          });
                          var tU = gU(56),
                            pU = gU(1410),
                            EU = gU(1777),
                            PU = gU(4430),
                            TU = gU(1090);
                          const qU = (0, tU.memo)((function(UU) {
                            let {
                              initialParameters: RU
                            } = UU;
                            const gU = (0, tU.useRef)(null),
                              pU = (0, tU.useRef)(null),
                              qU = (0, tU.useRef)(0),
                              KU = (0, tU.useRef)(null),
                              cU = RU.description,
                              GU = RU.vU,
                              {
                                scale: jU,
                                rotation: uU
                              } = null !== RU && void 0 !== RU ? RU : {},
                              CU = (0, PU.f)();
                            return (0, tU.useEffect)((() => {
                              const UU = CU.onFrame((() => {
                                const UU = CU.getState();
                                if (!UU.isActive || !gU.current || !pU.current) return;
                                const RU = UU.state;
                                if (gU.current.value = RU.progress, RU.clickCount > qU.current) {
                                  qU.current = RU.clickCount;
                                  const UU = pU.current;
                                  UU.classList.add("pulse"), KU.current = setTimeout((() => {
                                    UU.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(KU.current), UU()
                              }
                            }), [CU]), (0, TU.jsx)(TU.Fragment, {
                              children: (0, TU.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== jU && {
                                    "--scale": jU
                                  },
                                  ...null !== uU && {
                                    "--rotation": `${uU}deg`
                                  }
                                },
                                children: [(0, TU.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: gU
                                }), (0, TU.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: pU,
                                  children: (0, TU.jsx)(EU.e, {
                                    text: [{
                                      icon: GU
                                    }]
                                  })
                                }), (0, TU.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, TU.jsx)(EU.e, {
                                    text: cU
                                  })
                                })]
                              })
                            })
                          }));
                          var KU = gU(1037),
                            cU = gU.n(KU);
                          const GU = 2 * Math.PI * 90,
                            jU = (0, tU.memo)((function(UU) {
                              let {
                                initialParameters: RU
                              } = UU;
                              const gU = (0, tU.useRef)(null),
                                pU = (0, tU.useRef)(null),
                                qU = (0, tU.useRef)(null),
                                KU = RU.label,
                                jU = RU.icon,
                                uU = RU.SU,
                                {
                                  scale: CU,
                                  rotation: hU,
                                  sU: QU
                                } = null !== RU && void 0 !== RU ? RU : {},
                                eU = (0, PU.f)();
                              return (0, tU.useEffect)((() => {
                                const UU = eU.onFrame((() => {
                                  var UU, RU;
                                  const tU = eU.getState();
                                  if (!tU.isActive || !pU.current) return;
                                  const EU = tU.state,
                                    PU = null !== (UU = EU.timeRemaining) && void 0 !== UU ? UU : 0,
                                    TU = null !== (RU = EU.HU) && void 0 !== RU ? RU : 1,
                                    KU = GU * (1 - PU / TU);
                                  pU.current.style.strokeDashoffset = `${KU}`, gU.current && (gU.current.style.opacity = PU > 0 ? "1" : "0"), qU.current && uU && (qU.current.textContent = `${(PU/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  UU()
                                }
                              }), [eU, uU]), (0, TU.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: gU,
                                style: {
                                  ...null !== CU && {
                                    "--scale": CU
                                  },
                                  ...null !== hU && {
                                    "--rotation": `${hU}deg`
                                  }
                                },
                                children: [(0, TU.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, TU.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, TU.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, TU.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: GU,
                                      ref: pU
                                    })]
                                  }), (0, TU.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, TU.jsx)(EU.e, {
                                      text: [{
                                        icon: jU
                                      }],
                                      className: cU()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: QU
                                      })
                                    })
                                  })]
                                }), (0, TU.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, TU.jsx)(EU.e, {
                                    text: KU,
                                    className: "QTETimedClickLabelText"
                                  }), uU && (0, TU.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: qU
                                  })]
                                })]
                              })
                            })),
                            uU = (0, tU.memo)((function(UU) {
                              let {
                                initialParameters: RU
                              } = UU;
                              const gU = (0, tU.useRef)(null),
                                pU = (0, tU.useRef)(null),
                                qU = (0, tU.useRef)(null),
                                KU = (0, tU.useRef)(!1),
                                cU = RU.description,
                                GU = null === RU || void 0 === RU ? void 0 : RU.icon,
                                jU = (0, PU.f)();
                              return (0, tU.useEffect)((() => {
                                const UU = jU.onFrame((() => {
                                  const UU = jU.getState();
                                  if (!UU.isActive) return;
                                  const RU = UU.state;
                                  if (gU.current) {
                                    const UU = 100 * (RU.catchZonePosition - RU.kU / 2);
                                    gU.current.style.left = `${UU}%`, gU.current.style.width = 100 * RU.kU + "%", RU.isCatching !== KU.current && (KU.current = RU.isCatching, RU.isCatching ? gU.current.classList.add("catching") : gU.current.classList.remove("catching"))
                                  }
                                  pU.current && (pU.current.style.left = 100 * RU.moverPosition + "%"), qU.current && (qU.current.value = RU.progress)
                                }));
                                return () => {
                                  UU()
                                }
                              }), [jU]), (0, TU.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, TU.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, TU.jsx)(EU.e, {
                                    text: cU
                                  })
                                }), (0, TU.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: qU
                                }), (0, TU.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, TU.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: gU
                                  }), (0, TU.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: pU,
                                    children: (0, TU.jsx)("span", {
                                      children: GU && (0, TU.jsx)(EU.e, {
                                        text: [{
                                          icon: GU,
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
                          var CU = gU(581);
                          const hU = (0, tU.memo)((function(UU) {
                              let {
                                initialParameters: RU
                              } = UU;
                              const gU = (0, tU.useRef)(null),
                                pU = RU.label,
                                qU = RU.LU,
                                {
                                  icon: KU,
                                  scale: cU,
                                  rotation: GU
                                } = null !== RU && void 0 !== RU ? RU : {},
                                jU = 100 * (.5 - qU / 2),
                                uU = 100 * qU,
                                hU = (0, PU.f)();
                              return (0, tU.useEffect)((() => {
                                const UU = hU.onFrame((() => {
                                  const UU = hU.getState();
                                  if (!UU.isActive || !gU.current) return;
                                  const RU = UU.state;
                                  gU.current.style.left = 100 * RU.markerPosition + "%"
                                }));
                                return () => {
                                  UU()
                                }
                              }), [hU]), (0, TU.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, CU.E)(cU) && {
                                    "--scale": cU
                                  },
                                  ...!(0, CU.E)(GU) && {
                                    "--rotation": `${GU}deg`
                                  }
                                },
                                children: [KU && (0, TU.jsx)(EU.e, {
                                  text: [{
                                    icon: KU
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, TU.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, TU.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${jU}%`,
                                      width: `${uU}%`
                                    }
                                  }), (0, TU.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: gU
                                  })]
                                }), (0, TU.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, TU.jsx)(EU.e, {
                                    text: pU
                                  })
                                })]
                              })
                            })),
                            QU = (0, tU.memo)((function(UU) {
                              let {
                                initialParameters: RU
                              } = UU;
                              const gU = (0, tU.useRef)(null),
                                [pU, qU] = (0, tU.useState)((() => new Array(RU.lU).fill("pending"))),
                                [KU, cU] = (0, tU.useState)((() => {
                                  const UU = RU.RR;
                                  return (0, CU.E)(UU) || UU <= 0 ? [] : new Array(UU).fill("pending")
                                })),
                                GU = RU.label,
                                {
                                  icon: jU
                                } = RU,
                                uU = (0, tU.useRef)(0),
                                hU = (0, tU.useRef)(0),
                                QU = (0, tU.useRef)([]),
                                eU = (0, PU.f)();
                              return (0, tU.useEffect)((() => {
                                const UU = eU.onFrame((() => {
                                  const UU = eU.getState();
                                  if (!UU.isActive || !gU.current) return;
                                  const RU = UU.state,
                                    tU = 30 + 60 * RU.outerCircleProgress;
                                  if (gU.current.setAttribute("r", String(tU)), !0 === RU.lastClickResult && RU.successes > uU.current) {
                                    gU.current.classList.remove("QTERhythmClickOuterCircle--miss"), gU.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const UU = setTimeout((() => {
                                      var UU;
                                      null === (UU = gU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    QU.current.push(UU)
                                  } else if (!1 === RU.lastClickResult && RU.misses > hU.current) {
                                    gU.current.classList.remove("QTERhythmClickOuterCircle--hit"), gU.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const UU = setTimeout((() => {
                                      var UU;
                                      null === (UU = gU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    QU.current.push(UU)
                                  }
                                  RU.successes === uU.current && RU.misses === hU.current || (uU.current = RU.successes, hU.current = RU.misses, qU((UU => {
                                    const gU = [...UU];
                                    for (let tU = 0; tU < RU.lU; tU++) gU[tU] = tU < RU.successes ? "success" : "pending";
                                    return gU
                                  })), cU((UU => {
                                    if (0 === UU.length) return UU;
                                    const gU = [...UU];
                                    for (let tU = 0; tU < gU.length; tU++) gU[tU] = tU < RU.misses ? "miss" : "pending";
                                    return gU
                                  })))
                                }));
                                return () => {
                                  UU();
                                  for (const UU of QU.current) clearTimeout(UU);
                                  QU.current = []
                                }
                              }), [eU]), (0, TU.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, TU.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: pU.map(((UU, RU) => (0, TU.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === UU ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, RU)))
                                }), (0, TU.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, TU.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, TU.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, TU.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: gU
                                    })]
                                  }), jU && (0, TU.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, TU.jsx)(EU.e, {
                                      text: [{
                                        icon: jU
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), KU.length > 0 && (0, TU.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: KU.map(((UU, RU) => (0, TU.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === UU ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, RU)))
                                }), (0, TU.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, TU.jsx)(EU.e, {
                                    text: GU
                                  })
                                })]
                              })
                            }));

                          function eU(UU) {
                            let {
                              qte: RU
                            } = UU;
                            switch (RU.type) {
                              case "progressBar":
                                return (0, TU.jsx)(qU, {
                                  initialParameters: RU.parameters
                                });
                              case "timedClick":
                                return (0, TU.jsx)(jU, {
                                  initialParameters: RU.parameters
                                });
                              case "gravityBar":
                                return (0, TU.jsx)(uU, {
                                  initialParameters: RU.parameters
                                });
                              case "precisionBar":
                                return (0, TU.jsx)(hU, {
                                  initialParameters: RU.parameters
                                });
                              case "rhythmClick":
                                return (0, TU.jsx)(QU, {
                                  initialParameters: RU.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const WU = (0, tU.memo)((function() {
                            const [UU, RU] = (0, tU.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, pU.e)("qteStateUpdated", (UU => {
                              RU(UU)
                            })), UU.isActive && UU.type ? (0, TU.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, TU.jsx)(eU, {
                                qte: UU
                              })
                            }) : null
                          }))
                        }, 4430: (UU, RU, gU) => {
                          gU.d(RU, {
                            e: () => TU,
                            f: () => qU
                          });
                          var tU = gU(56),
                            pU = gU(1293),
                            EU = gU(4438);
                          const PU = {
                              getState: () => EU.c.getCurrentState(),
                              onFrame: pU.p
                            },
                            TU = (0, tU.createContext)(PU);

                          function qU() {
                            return (0, tU.useContext)(TU)
                          }
                        }, 4501: (UU, RU, gU) => {
                          gU.d(RU, {
                            b: () => rU,
                            c: () => VU
                          });
                          var tU = gU(4503),
                            pU = gU(299);
                          const EU = 120,
                            PU = 260,
                            TU = 1.15,
                            qU = 1.2,
                            KU = 2,
                            cU = 1.08,
                            GU = .8,
                            jU = .95,
                            uU = 8,
                            CU = "[\"')\\]\u300d\u300f\uff09]*",
                            hU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${CU}$`),
                            QU = new RegExp(`[?\uff1f]${CU}$`),
                            eU = new RegExp(`[!\uff01]${CU}$`),
                            WU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            fU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            xU = new RegExp(`[${fU}]`),
                            mU = new RegExp(`[${fU}]|[^${fU}]+`, "g"),
                            IU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function JU(UU) {
                            let RU = 2166136261;
                            for (let gU = 0; gU < UU.length; gU++) RU ^= UU.charCodeAt(gU), RU = Math.imul(RU, 16777619);
                            return (RU >>> 0) / 4294967295 * 2 - 1
                          }

                          function wU(UU) {
                            var RU;
                            if (xU.test(UU)) return 1;
                            const gU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              tU = gU.replace(/[^0-9]/g, "");
                            if (tU.length > 0 && !/\p{L}/u.test(gU)) return Math.min(tU.length, 4);
                            const pU = null !== (RU = gU.match(IU)) && void 0 !== RU ? RU : [];
                            if (0 === pU.length) {
                              var EU, PU;
                              const UU = null !== (EU = null === (PU = gU.match(/\p{L}/gu)) || void 0 === PU ? void 0 : PU.length) && void 0 !== EU ? EU : 0;
                              return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), uU)
                            }
                            const TU = gU.replace(/[^\p{L}]/gu, ""),
                              qU = pU.length > 1 && "e" === pU.at(-1) && TU.endsWith("e") && !TU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
                            return Math.min(pU.length - (qU ? 1 : 0), uU)
                          }

                          function nU(UU) {
                            return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function bU(UU) {
                            const RU = UU.replace(/[^\p{L}]/gu, "");
                            return RU.length >= 2 && RU === RU.toUpperCase() && RU !== RU.toLowerCase()
                          }

                          function oU(UU, RU) {
                            var gU;
                            const uU = RU && (0, tU.k)(RU),
                              CU = null !== (gU = null === uU || void 0 === uU ? void 0 : uU.syllableMs) && void 0 !== gU ? gU : tU.c,
                              fU = function(UU) {
                                const RU = [];
                                for (const tU of (0, pU.dc)(UU))
                                  if ("string" === typeof tU)
                                    for (const UU of tU.split(/(\s+)/)) {
                                      if ("" === UU) continue;
                                      if (/^\s+$/.test(UU)) {
                                        RU.push({
                                          kind: "space",
                                          text: UU
                                        });
                                        continue
                                      }
                                      if (!xU.test(UU)) {
                                        RU.push({
                                          kind: "word",
                                          text: UU,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let tU = !0;
                                      for (const pU of null !== (gU = UU.match(mU)) && void 0 !== gU ? gU : []) {
                                        var gU;
                                        const UU = RU.at(-1);
                                        tU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || xU.test(pU) || /[\p{L}\p{N}]/u.test(pU) ? (tU || RU.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), RU.push({
                                          kind: "word",
                                          text: pU,
                                          delayMs: 0
                                        }), tU = !1) : UU.text += pU
                                      }
                                    } else RU.push({
                                      kind: "icon",
                                      text: tU.icon,
                                      delayMs: 0
                                    });
                                return RU
                              }(UU),
                              IU = [];
                            let oU = [];
                            for (const tU of fU) "space" !== tU.kind && (oU.push(tU), hU.test(tU.text) && (IU.push(oU), oU = []));
                            IU.push(oU);
                            const ZU = [];
                            let aU = 0;
                            for (const tU of IU) {
                              var YU, BU;
                              const UU = null !== (YU = null === (BU = tU.at(-1)) || void 0 === BU ? void 0 : BU.text) && void 0 !== YU ? YU : "",
                                RU = QU.test(UU),
                                gU = eU.test(UU),
                                pU = tU.map((UU => "word" === UU.kind ? wU(UU.text) : 1)),
                                fU = pU.findLastIndex((UU => UU > 0));
                              for (const [QU, eU] of tU.entries()) {
                                const UU = "word" === eU.kind,
                                  tU = pU[QU];
                                eU.delayMs = aU;
                                for (let pU = 0; uU && pU < tU; pU++) {
                                  const {
                                    intonation: EU
                                  } = uU;
                                  let PU = fU > 0 ? -EU.declineSemitones * (QU / fU) : 0;
                                  PU += JU(`${nU(eU.text)}|${pU}`) * EU.variationSemitones;
                                  const hU = Math.min(1, EU.variationSemitones);
                                  let WU = uU.glideSemitones,
                                    xU = 1;
                                  gU && (PU += EU.exclaimLiftSemitones, xU *= TU), RU && QU === fU && (PU += EU.questionRiseSemitones * (tU > 1 ? .5 + .5 * pU / (tU - 1) : 1), pU === tU - 1 && (WU = Math.abs(WU) + EU.questionRiseSemitones / 2)), UU && bU(eU.text) && (PU += KU * hU, xU *= qU), tU > 1 && 0 === pU && (PU += GU * hU, xU *= cU), ZU.push({
                                    atMs: aU + pU * CU,
                                    semitones: PU,
                                    glideSemitones: WU,
                                    durationMs: pU < tU - 1 ? Math.min(uU.durationMs, CU * jU) : uU.durationMs,
                                    level: xU
                                  })
                                }
                                aU += tU * CU + (hU.test(eU.text) ? PU : WU.test(eU.text) ? EU : 0)
                              }
                            }
                            return {
                              pieces: fU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
                                kind: "icon",
                                icon: UU.text,
                                delayMs: UU.delayMs
                              } : {
                                kind: "word",
                                text: UU.text,
                                delayMs: UU.delayMs
                              })),
                              blips: ZU
                            }
                          }
                          var ZU = gU(1181),
                            aU = gU(1249),
                            YU = gU(1802);

                          function BU(UU) {
                            if ("string" === typeof UU) return UU;
                            const RU = aU.g.get().getCurrentLanguageCode();
                            return (0, ZU.s)(RU, UU.translationKey, (0, ZU.r)(UU.params, YU.b.shown))
                          }

                          function VU(UU) {
                            const RU = void 0 === UU.voice ? null : (0, tU.n)(UU.voice),
                              gU = RU && (0, tU.k)(RU);
                            return {
                              plan: oU(BU(UU.line), gU),
                              synth: gU
                            }
                          }

                          function rU(UU) {
                            const RU = [];
                            let gU = [];
                            for (const [pU, EU] of UU.entries()) {
                              var tU;
                              "space" === EU.kind && (" " !== EU.text || "icon" !== (null === (tU = UU[pU + 1]) || void 0 === tU ? void 0 : tU.kind)) ? (gU.length > 0 && RU.push(gU), RU.push([EU]), gU = []) : gU.push(EU)
                            }
                            return gU.length > 0 && RU.push(gU), RU
                          }
                        }, 4508: (UU, RU, gU) => {
                          gU.d(RU, {
                            d: () => cU,
                            f: () => GU
                          });
                          var tU = gU(4512),
                            pU = gU(21);
                          const EU = .25,
                            PU = .85,
                            TU = .02,
                            qU = .01;

                          function KU(UU, RU, gU, tU, pU, EU, TU) {
                            const {
                              waveform: qU,
                              pitchHz: KU,
                              attackMs: cU,
                              releaseMs: GU,
                              lowpassHz: jU
                            } = gU, uU = pU + tU.durationMs / 1e3, CU = KU * 2 ** (tU.semitones / 12), hU = UU.createOscillator();
                            hU.type = qU, hU.frequency.setValueAtTime(CU, pU), hU.frequency.exponentialRampToValueAtTime(CU * 2 ** (tU.glideSemitones / 12), uU);
                            const QU = pU + Math.min(cU, tU.durationMs) / 1e3,
                              eU = UU.createGain();
                            eU.gain.setValueAtTime(0, pU), eU.gain.linearRampToValueAtTime(EU, QU), eU.gain.linearRampToValueAtTime(EU * PU, Math.max(QU, uU - GU / 1e3)), eU.gain.linearRampToValueAtTime(0, uU);
                            const WU = [hU];
                            if (null !== jU) {
                              const RU = UU.createBiquadFilter();
                              RU.type = "lowpass", RU.frequency.value = jU, WU.push(RU)
                            }
                            WU.push(eU, RU);
                            for (let PU = 1; PU < WU.length; PU++) WU[PU - 1].connect(WU[PU]);
                            return hU.onended = () => {
                              for (const UU of WU.slice(0, -1)) UU.disconnect();
                              TU()
                            }, hU.start(pU), hU.stop(uU), hU
                          }

                          function cU(UU, RU, gU, tU, pU, PU) {
                            if (0 === tU.length) return PU(), () => {};
                            const cU = EU * gU.volume * pU,
                              GU = UU.createGain();
                            GU.connect(RU);
                            const jU = UU.currentTime + TU,
                              uU = new Set;
                            for (const EU of tU) {
                              const RU = KU(UU, GU, gU, EU, jU + EU.atMs / 1e3, cU * EU.level, (() => {
                                uU.delete(RU), 0 === uU.size && (GU.disconnect(), PU())
                              }));
                              uU.add(RU)
                            }
                            return () => {
                              const RU = UU.currentTime;
                              GU.gain.setTargetAtTime(0, RU, qU);
                              for (const UU of uU) try {
                                UU.stop(RU + 5 * qU)
                              } catch {}
                            }
                          }

                          function GU(UU, RU) {
                            var gU;
                            const EU = tU.Howler.ctx,
                              PU = tU.Howler.masterGain;
                            if (!EU || !PU || !pU.b.get("soundOnFromAd")) return () => {};
                            const TU = tU.Howler;
                            return null === (gU = TU._autoResume) || void 0 === gU || gU.call(TU), cU(EU, PU, UU, RU, pU.b.get("soundVolume"), (() => {
                              var UU;
                              null === (UU = TU._autoSuspend) || void 0 === UU || UU.call(TU)
                            }))
                          }
                        }, 4512: (UU, RU, gU) => {
                          gU.r(RU), gU.d(RU, {
                            Howl: () => pU.Howl,
                            Howler: () => pU.Howler,
                            iosAudio: () => qU,
                            musicOutput: () => QU,
                            readyAudioContext: () => eU
                          });
                          var tU, pU = gU(4518),
                            EU = gU(96);
                          const PU = pU.Howler;
                          let TU;

                          function qU() {
                            return TU ??= "ios" === (0, EU.getOperatingSystem)(), TU
                          }

                          function KU() {
                            var UU, RU;
                            if (PU.ctx || !PU.usingWebAudio || "undefined" === typeof AudioContext || !qU()) return;
                            const gU = navigator.audioSession;
                            let tU;
                            "auto" === (null === gU || void 0 === gU ? void 0 : gU.type) && (gU.type = "ambient");
                            try {
                              tU = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const pU = tU.createGain();
                            pU.gain.setValueAtTime(PU._muted ? 0 : null !== (UU = PU._volume) && void 0 !== UU ? UU : 1, tU.currentTime), pU.connect(tU.destination), PU.ctx = tU, PU.masterGain = pU, null === (RU = PU._setup) || void 0 === RU || RU.call(PU)
                          }
                          PU._mobileUnloaded = !0;
                          const cU = PU.volume.bind(pU.Howler);
                          PU.volume = function() {
                            return KU(), cU(...arguments)
                          };
                          const GU = PU.mute.bind(pU.Howler);
                          PU.mute = UU => (KU(), GU(UU));
                          const jU = pU.Howl.prototype,
                            uU = jU.init;
                          jU.init = function(UU) {
                            return KU(), uU.call(this, UU)
                          };
                          let CU = 0;
                          const hU = null === (tU = PU._autoSuspend) || void 0 === tU ? void 0 : tU.bind(pU.Howler);

                          function QU() {
                            eU();
                            const {
                              ctx: UU,
                              masterGain: RU
                            } = PU;
                            return UU && RU ? {
                              ctx: UU,
                              destination: RU,
                              holdAwake: UU => {
                                var RU, gU;
                                (CU += UU ? 1 : -1, UU) ? null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU): null === (gU = PU._autoSuspend) || void 0 === gU || gU.call(PU)
                              },
                              wake: () => {
                                var RU;
                                "running" !== UU.state && (null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU), UU.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function eU() {
                            var UU;
                            (PU.volume(), PU.ctx && PU.autoUnlock) && (null === (UU = PU._unlockAudio) || void 0 === UU || UU.call(PU))
                          }
                          hU && (PU._autoSuspend = () => CU > 0 ? pU.Howler : hU())
                        }, 4525: (UU, RU, gU) => {
                          function tU(UU) {
                            return {
                              notAfter: UU
                            }
                          }
                          gU.d(RU, {
                            b: () => qU,
                            c: () => KU,
                            e: () => TU,
                            f: () => tU,
                            h: () => pU,
                            k: () => EU,
                            m: () => PU,
                            o: () => cU,
                            p: () => GU
                          });
                          const pU = tU("\\w$."),
                            EU = tU("\\w.,");

                          function PU(UU) {
                            return RU => qU(RU, UU)
                          }

                          function TU(UU) {
                            return RU => !UU.test(RU.input.slice(0, RU.index))
                          }

                          function qU(UU, RU) {
                            return UU.index > 0 && new RegExp(`[${RU}]`).test(UU.input[UU.index - 1])
                          }

                          function KU(UU, RU, gU) {
                            return function(UU) {
                              return void 0 !== UU && "function" !== typeof UU
                            }(gU) ? function(UU, RU, gU) {
                              const tU = RU.flags.replace(/[gy]/g, ""),
                                pU = new RegExp(`[^${gU}](?:${RU.source})`, `${tU}g`),
                                EU = [],
                                PU = gU => {
                                  const tU = gU.index + gU[0].length;
                                  return ("" === gU[0] ? jU(UU, RU, tU) : tU) - 1
                                },
                                TU = new RegExp(`(?:${RU.source})`, `${tU}y`).exec(UU);
                              if (TU) {
                                if (EU.push(TU), !RU.global) return EU;
                                pU.lastIndex = PU(TU)
                              }
                              for (let qU = pU.exec(UU); qU; qU = pU.exec(UU)) {
                                const gU = jU(UU, RU, qU.index) - qU.index;
                                if (qU[0] = qU[0].slice(gU), qU.index += gU, EU.push(qU), !RU.global) break;
                                pU.lastIndex = PU(qU)
                              }
                              return EU
                            }(UU, RU, gU.notAfter) : function(UU, RU, gU) {
                              const tU = new RegExp(RU.source, `${RU.flags.replace(/[gy]/g,"")}g`),
                                pU = [];
                              for (let EU = tU.exec(UU); EU; EU = tU.exec(UU))
                                if (!gU || gU(EU)) {
                                  if (pU.push(EU), !RU.global) break;
                                  "" === EU[0] && (tU.lastIndex = jU(UU, RU, tU.lastIndex))
                                } else tU.lastIndex = jU(UU, RU, EU.index);
                              return pU
                            }(UU, RU, gU)
                          }

                          function cU(UU, RU, gU, tU) {
                            let pU = "",
                              EU = 0;
                            for (const PU of KU(UU, RU, gU)) pU += UU.slice(EU, PU.index) + tU(PU), EU = PU.index + PU[0].length;
                            return pU + UU.slice(EU)
                          }

                          function GU(UU, RU, gU) {
                            const tU = [];
                            let pU = 0;
                            for (const EU of KU(UU, RU, gU)) tU.push(UU.slice(pU, EU.index)), pU = EU.index + EU[0].length;
                            return [...tU, UU.slice(pU)]
                          }

                          function jU(UU, RU, gU) {
                            var tU;
                            return gU + (RU.unicode && (null !== (tU = UU.codePointAt(gU)) && void 0 !== tU ? tU : 0) > 65535 ? 2 : 1)
                          }
                        }, 4480: (UU, RU, gU) => {
                          gU.d(RU, {
                            e: () => pU,
                            h: () => qU,
                            j: () => EU,
                            m: () => PU,
                            n: () => TU,
                            p: () => QU,
                            q: () => cU,
                            s: () => GU,
                            u: () => hU,
                            v: () => uU
                          });
                          var tU = gU(1535);
                          const pU = 24e3,
                            EU = "/docs/llms.txt",
                            PU = `${tU.b}${EU}`,
                            TU = "/llms.txt",
                            qU = "/docs/llms-full.txt";

                          function KU(UU) {
                            return UU || "index"
                          }

                          function cU(UU) {
                            return `/docs/${KU(UU)}.md`
                          }

                          function GU(UU, RU) {
                            return `/docs/${KU(UU)}/${RU+1}.md`
                          }
                          const jU = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function uU(UU) {
                            const RU = jU.exec(UU);
                            return null === RU ? null : {
                              name: RU[1],
                              part: void 0 === RU[2] ? null : Number(RU[2])
                            }
                          }
                          const CU = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function hU(UU) {
                            const RU = CU.exec(UU);
                            if (null === RU) return null;
                            const [, gU = "", tU] = RU;
                            return void 0 === tU ? cU(gU) : GU(gU, Number(tU) - 1)
                          }

                          function QU(UU) {
                            return `/docsHtml/${KU(UU)}.html`
                          }
                        }, 4503: (UU, RU, gU) => {
                          gU.d(RU, {
                            c: () => pU,
                            f: () => tU,
                            j: () => EU,
                            k: () => qU,
                            n: () => PU
                          });
                          const tU = ["sine", "triangle", "square", "sawtooth"],
                            pU = 55,
                            EU = {
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

                          function PU(UU) {
                            return "string" !== typeof UU ? UU : Object.hasOwn(EU, UU) ? EU[UU] : null
                          }

                          function TU(UU, RU, gU) {
                            return Math.min(gU, Math.max(RU, UU))
                          }

                          function qU(UU) {
                            const RU = TU(UU.durationMs, 10, 500),
                              gU = TU(UU.attackMs, 0, RU),
                              {
                                intonation: pU
                              } = UU;
                            return {
                              waveform: tU.includes(UU.waveform) ? UU.waveform : "sine",
                              pitchHz: TU(UU.pitchHz, 20, 4e3),
                              glideSemitones: TU(UU.glideSemitones, -24, 24),
                              durationMs: RU,
                              attackMs: gU,
                              releaseMs: TU(UU.releaseMs, 0, RU - gU),
                              lowpassHz: null === UU.lowpassHz ? null : TU(UU.lowpassHz, 20, 2e4),
                              volume: TU(UU.volume, 0, 2),
                              intonation: {
                                variationSemitones: TU(pU.variationSemitones, 0, 6),
                                declineSemitones: TU(pU.declineSemitones, 0, 12),
                                questionRiseSemitones: TU(pU.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: TU(pU.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: TU(UU.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const UU in modules) Object.freeze(modules[UU]);