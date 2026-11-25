export const id = 79;
export const ids = [79, 95];
export const modules = {
    4851: (GG, bG, ZG) => {
      ZG.d(bG, {
        d: () => dG,
        e: () => JG
      });
      var wG = ZG(1006),
        SG = ZG.n(wG),
        LG = ZG(51),
        yG = ZG(1151),
        kG = ZG(4858),
        UG = ZG(1876),
        YG = ZG(2409),
        VG = ZG(4864),
        pG = ZG(1067);
      const fG = new WeakMap;
      let QG = 0;

      function KG(GG) {
        let bG = fG.get(GG);
        return void 0 === bG && (bG = QG++, fG.set(GG, bG)), bG
      }

      function hG(GG) {
        let {
          piece: bG
        } = GG;
        return "space" === bG.kind ? (0, pG.jsx)(pG.Fragment, {
          children: bG.text
        }) : (0, pG.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${bG.delayMs}ms`
          },
          children: (0, pG.jsx)(kG.b, {
            text: "icon" === bG.kind ? `[[${bG.icon}]]` : bG.text
          })
        })
      }

      function dG(GG) {
        let {
          display: bG
        } = GG;
        const {
          selectedLanguage: ZG
        } = (0, yG.w)(), wG = (0, LG.useMemo)((() => (0, VG.d)((0, VG.f)(bG).plan.pieces)), [bG, ZG.code]);
        return (0, pG.jsxs)("div", {
          className: SG()("Dialogue", {
            DialogueAnimateIn: !1 !== bG.animateIn
          }),
          children: [bG.speakerName && (0, pG.jsx)(UG.c, {
            text: bG.speakerName,
            className: "DialogueSpeaker"
          }), (0, pG.jsx)("p", {
            className: "DialogueLine",
            children: wG.map(((GG, bG) => 1 === GG.length && "space" === GG[0].kind ? GG[0].text : (0, pG.jsx)("span", {
              className: "DialogueGlue",
              children: GG.map(((GG, bG) => (0, pG.jsx)(hG, {
                piece: GG
              }, bG)))
            }, bG)))
          })]
        })
      }
      const JG = (0, LG.memo)((function() {
        const GG = (0, YG.i)("dialogue");
        return (0, pG.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: GG && (0, pG.jsx)(dG, {
            display: GG
          }, KG(GG))
        })
      }))
    },
    4729: (GG, bG, ZG) => {
        ZG.r(bG), ZG.d(bG, {
          default: () => Gy
        });
        var wG = ZG(51),
          SG = ZG(1006),
          LG = ZG.n(SG),
          yG = ZG(1448),
          kG = ZG(1457),
          UG = ZG(17),
          YG = ZG(59),
          VG = ZG(4734),
          pG = ZG(4745),
          fG = ZG(4750),
          QG = ZG(4387),
          KG = ZG(1067);
        const hG = "/textures/docs/icons";

        function dG(GG) {
          let {
            name: bG,
            isTinted: ZG,
            className: wG,
            style: SG
          } = GG;
          const yG = `${hG}/${bG}.png`;
          return ZG ? (0, KG.jsxs)("span", {
            className: LG()("DocsPixelIcon", "Tinted", wG),
            "aria-hidden": "true",
            style: SG,
            children: [(0, KG.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${yG}")`,
                WebkitMaskImage: `url("${yG}")`
              }
            }), (0, KG.jsx)("img", {
              src: yG,
              alt: ""
            })]
          }) : (0, KG.jsx)("img", {
            className: LG()("DocsPixelIcon", wG),
            src: yG,
            alt: "",
            "aria-hidden": "true",
            style: SG
          })
        }
        const JG = 1500;

        function rG() {
          const [GG, bG] = (0, wG.useState)(null);
          (0, wG.useEffect)((() => {
            if (null === GG) return;
            const ZG = setTimeout((() => {
              bG(null)
            }), JG);
            return () => {
              clearTimeout(ZG)
            }
          }), [GG]);
          return [GG, GG => {
            (0, QG.b)(GG).then((() => {
              bG({
                text: GG,
                failed: !1
              })
            }), (ZG => {
              console.error("Could not copy to the clipboard", ZG), bG({
                text: GG,
                failed: !0
              })
            }))
          }]
        }

        function zG(GG) {
          let {
            text: bG,
            label: ZG,
            className: wG
          } = GG;
          const [SG, yG] = rG(), kG = !1 === (null === SG || void 0 === SG ? void 0 : SG.failed);
          return (0, KG.jsxs)("button", {
            type: "button",
            className: LG()("DocsCopyButton", wG, {
              Copied: kG
            }),
            title: `Copy ${bG.length>40?"to clipboard":bG}`,
            "aria-label": ZG ? void 0 : `Copy ${bG}`,
            onClick: GG => {
              GG.stopPropagation(), yG(bG)
            },
            children: [(0, KG.jsx)(dG, {
              name: kG ? "check" : "copy"
            }), ZG && (0, KG.jsx)("span", {
              children: kG ? "Copied" : null !== SG && void 0 !== SG && SG.failed ? "Copy failed" : ZG
            })]
          })
        }
        VG.e.registerLanguage("javascript", pG.e), VG.e.registerLanguage("typescript", fG.c);
        const EG = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          oG = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          XG = 24;

        function uG(GG) {
          let {
            code: bG,
            lang: ZG,
            compact: SG = !1
          } = GG;
          const yG = (0, wG.useMemo)((() => function(GG, bG) {
              const ZG = EG[bG];
              return ZG ? VG.e.highlight(GG, {
                language: ZG
              }).value : GG.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(bG, ZG)), [bG, ZG]),
            kG = bG.split("\n").length,
            UG = !SG && kG > XG + 6,
            [YG, pG] = (0, wG.useState)(!1),
            fG = EG[ZG];
          return (0, KG.jsxs)("div", {
            className: LG()("DocsCodeBlock", {
              Compact: SG,
              Collapsed: UG && !YG
            }),
            children: [!SG && (0, KG.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, KG.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: fG ? oG[fG] : "Text"
              }), (0, KG.jsx)(zG, {
                text: bG,
                label: "Copy"
              })]
            }), (0, KG.jsx)("pre", {
              children: (0, KG.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: yG
                }
              })
            }), UG && (0, KG.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": YG,
              onClick: () => {
                pG(!YG)
              },
              children: [(0, KG.jsx)(dG, {
                name: YG ? "chevron-up" : "chevron-down"
              }), YG ? "Show less" : `Show all ${kG} lines`]
            })]
          })
        }
        var iG = ZG(4758);
        var CG = ZG(4760);
        const WG = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function mG(GG) {
          const bG = new Map;
          let ZG, wG = [],
            SG = !1;
          const LG = () => {
            ZG && bG.set(ZG.name, ZG.lines.join("\n").trimEnd())
          };
          for (const yG of GG.split("\n")) {
            const GG = yG.match(WG);
            SG || yG.startsWith("/*") ? (SG || (LG(), ZG = void 0), wG.push(yG), SG = !yG.includes("*/")) : GG ? (LG(), ZG = {
              name: GG[1],
              lines: [...wG, yG]
            }, wG = []) : ZG && (yG.startsWith(" ") || yG.startsWith("\t") || /^[}\])|]/.test(yG)) ? ZG.lines.push(yG) : ZG && "" !== yG.trim() && (LG(), ZG = void 0)
          }
          return LG(), bG
        }

        function IG(GG) {
          return "methods" === GG || "callbacks" === GG || "settings" === GG
        }
        const FG = {
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
              setterSnippet: (GG, bG) => `api.setClientOption(playerId, "${GG}", ${bG})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (GG, bG) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${GG}", ${bG})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (GG, bG) => `api.setMobSetting(mobId, "${GG}", ${bG})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (GG, bG) => `api.setVehicleSetting(vehicleId, "${GG}", ${bG})`
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
          vG = {
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

        function aG(GG) {
          return GG.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function cG(GG) {
          let bG = !1;
          return GG.split("\n").map((GG => (GG.startsWith("```") && (bG = !bG), !bG && /^#{3,} /.test(GG) ? GG.slice(1) : GG))).join("\n")
        }

        function lG(GG) {
          return "readme" === GG ? "getting-started" : aG(GG)
        }
        const jG = "## Glossary of Referenced Types";
        const PG = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...CG.e.flatMap((GG => {
            const bG = {
              id: GG.id,
              slug: lG(GG.id),
              title: GG.title,
              markdown: GG.content,
              ...FG[GG.id]
            };
            if ("readme" === GG.id) return function(GG) {
              const bG = GG.markdown.indexOf(jG),
                ZG = GG.markdown.indexOf("\n```", bG),
                wG = GG.markdown.indexOf("\n```", ZG + 1);
              if (-1 === bG || -1 === ZG || -1 === wG) throw new Error(`Getting started has no "${jG}" section with a code block`);
              const SG = GG.markdown.slice(bG + 31, ZG).trim(),
                LG = [...mG(GG.markdown.slice(GG.markdown.indexOf("\n", ZG + 1) + 1, wG))].map((GG => {
                  let [bG, ZG] = GG;
                  return `## ${bG}\n\n\`\`\`ts\n${ZG}\n\`\`\`\n`
                })),
                yG = GG.markdown.slice(GG.markdown.indexOf("\n", wG + 1) + 1);
              return [{
                ...GG,
                markdown: `${GG.markdown.slice(0,bG)}${yG}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${SG}\n\n${LG.join("\n")}`
              }]
            }(bG);
            if ("howTo" === GG.id) {
              const {
                parent: GG,
                guides: ZG
              } = function(GG) {
                const [bG, ...ZG] = GG.markdown.split(/^(?=## )/m), wG = [bG], SG = [];
                for (const yG of ZG) {
                  var LG;
                  const bG = yG.indexOf("\n"),
                    ZG = yG.slice(3, bG).trim(),
                    kG = yG.slice(bG + 1);
                  if (!kG.includes("```")) {
                    wG.push(yG);
                    continue
                  }
                  const UG = null !== (LG = vG[ZG]) && void 0 !== LG ? LG : {
                    icon: "lightbulb",
                    summary: `How to use ${ZG.toLowerCase()} in World Code.`
                  };
                  SG.push({
                    id: `${GG.id}${ZG.split(/[^A-Za-z0-9]+/).map((GG=>GG.charAt(0).toUpperCase()+GG.slice(1))).join("")}`,
                    slug: `${GG.slug}-${aG(ZG)}`,
                    title: ZG,
                    layout: "article",
                    sourceAnchor: (0, iG.r)(ZG),
                    markdown: `# ${ZG}\n\n${cG(kG)}`,
                    ...UG
                  })
                }
                return {
                  parent: {
                    ...GG,
                    markdown: wG.join(""),
                    childPageIds: SG.map((GG => GG.id))
                  },
                  guides: SG
                }
              }(bG);
              return [GG, ...ZG]
            }
            return [bG]
          }))],
          MG = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...PG.filter((GG => void 0 !== GG.sourceAnchor)).map((GG => GG.id))]
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

        function AG(GG) {
          return PG.find((bG => bG.id === GG))
        }
        const sG = new Map;

        function qG(GG) {
          let bG = sG.get(GG.id);
          return bG || (bG = (0, iG.w)(GG.markdown, "changelog" === GG.layout ? 3 : 2), sG.set(GG.id, bG)), bG
        }

        function nG(GG, bG) {
          return qG(GG).sections.some((GG => GG.heading.anchor === bG || GG.blocks.some((GG => "heading" === GG.kind && GG.anchor === bG))))
        }

        function gG(GG) {
          const [bG, ...ZG] = GG.replace(/^#/, "").split("-"), wG = PG.find((GG => GG.id === bG));
          if (!wG) return null;
          const SG = ZG.length > 0 ? (0, iG.r)(ZG.join("-")) : "";
          for (const yG of null !== (LG = wG.childPageIds) && void 0 !== LG ? LG : []) {
            var LG;
            const GG = AG(yG);
            if (GG.sourceAnchor === SG) return {
              page: GG,
              anchor: ""
            };
            if (nG(GG, SG)) return {
              page: GG,
              anchor: SG
            }
          }
          return {
            page: wG,
            anchor: SG
          }
        }
        const eG = {
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

        function RG(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const wG = bG.slug ? `${GG}/${bG.slug}` : GG;
          return ZG ? `${wG}#${ZG}` : wG
        }
        var TG = ZG(4779);
        const HG = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          tG = new Set(["GameApi", "Console", "_TypeOf"]),
          DG = 4;

        function NG(GG) {
          let bG = GG.length;
          for (; bG > 0 && "" === GG[bG - 1].trim();) bG--;
          return GG.slice(0, bG)
        }

        function OG(GG) {
          var bG;
          const ZG = NG(GG);
          if (null === (bG = ZG.at(-1)) || void 0 === bG || !bG.trimEnd().endsWith("*/")) return {
            lines: ZG,
            doc: ""
          };
          const wG = ZG.findLastIndex((GG => GG.startsWith("/**")));
          return -1 === wG ? {
            lines: ZG,
            doc: ""
          } : {
            lines: NG(ZG.slice(0, wG)),
            doc: ZG.slice(wG).join("\n")
          }
        }

        function xG(GG) {
          var bG;
          const ZG = GG.split("\n"),
            wG = ZG.flatMap(((GG, bG) => HG.test(GG) ? [bG] : []));
          let SG = OG(ZG.slice(0, null !== (bG = wG[0]) && void 0 !== bG ? bG : ZG.length)).doc;
          return wG.map(((GG, bG) => {
            var LG;
            const yG = OG(ZG.slice(GG, null !== (LG = wG[bG + 1]) && void 0 !== LG ? LG : ZG.length)),
              kG = {
                name: ZG[GG].match(HG)[1],
                doc: SG,
                lines: yG.lines
              };
            return SG = yG.doc, kG
          }))
        }

        function BG(GG) {
          var bG;
          const ZG = GG.match(/^readonly \[([\s\S]*)\]$/);
          return ZG ? null !== (bG = ZG[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== bG ? bG : [] : null
        }

        function Gb(GG) {
          if (!GG.startsWith("{") || !GG.endsWith("}")) return null;
          const bG = {
              keys: [],
              values: []
            },
            ZG = GG => {
              const ZG = GG.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ZG && (bG.keys.push(ZG[1].startsWith('"') ? ZG[1] : `"${ZG[1]}"`), bG.values.push(ZG[2].trim()))
            };
          let wG = 0,
            SG = "";
          for (const LG of GG.slice(1, -1)) "{[(".includes(LG) ? wG++ : "}])".includes(LG) && wG--, ";" === LG && 0 === wG ? (ZG(SG), SG = "") : SG += LG;
          return ZG(SG), bG
        }

        function bb(GG) {
          return GG.length > DG ? `\n\t| ${GG.join("\n\t| ")}` : GG.join(" | ")
        }

        function Zb(GG, bG) {
          const ZG = function(GG, bG) {
            return GG.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((GG, ZG) => {
              var wG;
              const SG = null === (wG = bG.get(ZG)) || void 0 === wG ? void 0 : wG.object;
              return SG ? bb(SG.values) : GG
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((GG, ZG) => {
              var wG, SG;
              const LG = null === (wG = bG.get(ZG)) || void 0 === wG || null === (SG = wG.object) || void 0 === SG ? void 0 : SG.values.map(BG);
              return null !== LG && void 0 !== LG && LG.every((GG => null !== GG)) ? bb([...new Set(LG.flat())]) : GG
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((GG, ZG) => {
              var wG;
              const SG = null === (wG = bG.get(ZG)) || void 0 === wG ? void 0 : wG.members;
              return SG ? bb(SG) : GG
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((GG, ZG) => {
              var wG;
              const SG = null === (wG = bG.get(ZG)) || void 0 === wG ? void 0 : wG.object;
              return SG ? bb(SG.keys) : GG
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((GG, ZG) => {
              var wG, SG;
              return null !== (wG = null === (SG = bG.get(ZG)) || void 0 === SG ? void 0 : SG.text) && void 0 !== wG ? wG : GG
            }))
          }(GG.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), bG);
          return [GG.doc, ZG].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function wb(GG) {
          const bG = xG(GG),
            ZG = function(GG) {
              const bG = new Map,
                ZG = GG.find((GG => "_TypeOf" === GG.name));
              let wG = null;
              const SG = () => {
                if (wG) {
                  const GG = wG.lines.join("\n");
                  bG.set(wG.name, {
                    text: GG,
                    members: BG(GG),
                    object: Gb(GG)
                  })
                }
              };
              for (const LG of ZG.lines.slice(1, -1)) {
                const GG = LG.match(/^\t([\w$]+): (.+)$/);
                GG ? (SG(), wG = {
                  name: GG[1],
                  lines: [GG[2]]
                }) : wG && wG.lines.push(LG.replace(/^\t/, ""))
              }
              return SG(), bG
            }(bG),
            wG = new Map;
          for (const SG of bG) tG.has(SG.name) || wG.has(SG.name) || wG.set(SG.name, Zb(SG, ZG));
          return wG
        }
        let Sb, Lb, yb;

        function kb() {
          return Lb ??= function(GG) {
            const bG = xG(GG).find((GG => "GameApi" === GG.name)),
              ZG = new Map,
              wG = bG.lines;
            for (let LG = 0; LG < wG.length; LG++) {
              var SG;
              if (!wG[LG].trimStart().startsWith("/**")) continue;
              const GG = LG;
              for (; LG < wG.length && !wG[LG].includes("*/");) LG++;
              const bG = null === (SG = wG[LG + 1]) || void 0 === SG ? void 0 : SG.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!bG) continue;
              let yG = null;
              const kG = [];
              let UG = "description",
                YG = !1;
              for (const ZG of wG.slice(GG, LG + 1).join("\n").split("\n").map((GG => GG.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const GG = ZG.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                GG ? (yG = GG[1].trim(), UG = "deprecation") : ZG.startsWith("@") ? (UG = "otherTag", YG = !0) : "" === ZG.trim() ? YG || (UG = "description", kG.push(ZG)) : "deprecation" !== UG || /^[A-Z]/.test(ZG.trim()) ? "otherTag" !== UG && (UG = "description", kG.push(ZG)) : yG = `${yG} ${ZG.trim()}`.trim()
              }
              ZG.set(bG[1], {
                deprecation: yG,
                description: kG.join("\n").trim()
              })
            }
            return ZG
          }(TG.default), Lb
        }

        function Ub() {
          if (!yb) {
            yb = new Map;
            for (const GG of PG) {
              const bG = (0, iG.t)(qG(GG)).flatMap((GG => GG.blocks));
              for (const GG of (0, iG.k)(bG))
                if ("ts" === GG.lang || "typescript" === GG.lang)
                  for (const [bG, ZG] of mG(GG.code)) yb.set(bG, ZG)
            }
            for (const [GG, bG] of(Sb ??= wb(TG.default), Sb)) yb.has(GG) || yb.set(GG, bG)
          }
          return yb
        }
        const Yb = {
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
        let Vb;

        function pb() {
          if (!Vb) {
            Vb = new Map;
            for (const GG of PG)
              if (IG(GG.layout))
                for (const bG of qG(GG).sections) Vb.has(bG.heading.text) || Vb.set(bG.heading.text, {
                  pageId: GG.id,
                  anchor: bG.heading.anchor
                })
          }
          return Vb
        }

        function fb(GG) {
          const bG = GG.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return bG ? pb().get(bG[1]) : void 0
        }
        const Qb = (0, wG.createContext)("/docs"),
          Kb = (0, wG.createContext)(null),
          hb = (0, wG.createContext)(!1),
          db = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Jb(GG) {
          const bG = GG.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return bG ? bG[1] : null
        }

        function rb(GG) {
          let {
            colour: bG
          } = GG;
          return (0, KG.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: bG
            },
            "aria-hidden": "true"
          })
        }

        function zb(GG) {
          const bG = [];
          let ZG = 0;
          for (const wG of GG.matchAll(db)) bG.push(GG.slice(ZG, wG.index), (0, KG.jsx)(rb, {
            colour: wG[0]
          }), wG[0]), ZG = wG.index + wG[0].length;
          return bG.push(GG.slice(ZG)), bG
        }

        function Eb(GG) {
          let {
            href: bG,
            children: ZG
          } = GG;
          const SG = (0, wG.useContext)(Qb);
          if (bG.startsWith("#")) {
            const GG = gG(bG);
            if (GG) return (0, KG.jsx)(yG.c, {
              to: RG(SG, GG.page, GG.anchor),
              children: (0, KG.jsx)(hb.Provider, {
                value: !0,
                children: ZG
              })
            })
          }
          return (0, KG.jsx)("a", {
            href: bG,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, KG.jsx)(hb.Provider, {
              value: !0,
              children: ZG
            })
          })
        }

        function ob(GG) {
          let {
            code: bG
          } = GG;
          const ZG = (0, wG.useContext)(Qb);
          if ((0, wG.useContext)(hb)) return (0, KG.jsx)("code", {
            className: "DocsInlineCode",
            children: bG
          });
          if (Ub().has(bG)) return (0, KG.jsx)(Cb, {
            type: bG
          });
          const SG = fb(bG);
          if (SG) return (0, KG.jsx)(yG.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: RG(ZG, AG(SG.pageId), SG.anchor),
            children: bG
          });
          const LG = Jb(bG);
          return (0, KG.jsxs)("code", {
            className: "DocsInlineCode",
            children: [LG && (0, KG.jsx)(rb, {
              colour: LG
            }), bG]
          })
        }

        function Xb(GG) {
          let {
            text: bG
          } = GG;
          const ZG = [];
          let SG = 0;
          for (const wG of bG.matchAll(iG.f)) {
            wG.index > SG && ZG.push(...zb(bG.slice(SG, wG.index)));
            const [, GG, LG, yG, kG, UG] = wG;
            GG ? ZG.push((0, KG.jsx)(ob, {
              code: (0, iG.m)(GG, LG)
            })) : yG ? ZG.push((0, KG.jsx)("strong", {
              children: (0, KG.jsx)(Xb, {
                text: yG
              })
            })) : ZG.push((0, KG.jsx)(Eb, {
              href: UG,
              children: (0, KG.jsx)(Xb, {
                text: kG
              })
            })), SG = wG.index + wG[0].length
          }
          return SG < bG.length && ZG.push(...zb(bG.slice(SG))), (0, KG.jsx)(KG.Fragment, {
            children: ZG.map(((GG, bG) => (0, KG.jsx)(wG.Fragment, {
              children: GG
            }, bG)))
          })
        }
        const ub = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          ib = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Cb(GG) {
          let {
            type: bG
          } = GG;
          const ZG = Ub(),
            SG = [];
          for (const wG of bG.trim().matchAll(ub)) {
            const [GG, bG, LG, yG, kG] = wG;
            bG ? SG.push((0, KG.jsx)("span", {
              className: "DocsTypeString",
              children: GG
            })) : LG && ZG.has(LG) ? SG.push((0, KG.jsx)(vb, {
              name: LG,
              definition: ZG.get(LG)
            })) : LG ? SG.push((0, KG.jsx)("span", {
              className: ib.has(LG) ? "DocsTypeKeyword" : "DocsTypeName",
              children: GG
            })) : yG ? SG.push((0, KG.jsx)("span", {
              className: "DocsTypeNumber",
              children: GG
            })) : kG ? SG.push(" ") : SG.push((0, KG.jsx)("span", {
              className: "DocsTypePunctuation",
              children: GG
            }))
          }
          return (0, KG.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: SG.map(((GG, bG) => (0, KG.jsx)(wG.Fragment, {
              children: GG
            }, bG)))
          })
        }
        const Wb = 480,
          mb = 6,
          Ib = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Fb = 0;

        function vb(GG) {
          let {
            name: bG,
            definition: ZG
          } = GG;
          const SG = (0, wG.useContext)(Qb),
            LG = Yb[bG],
            kG = (0, wG.useRef)(null),
            UG = (0, wG.useRef)(null),
            VG = (0, wG.useRef)(null),
            [pG, fG] = (0, wG.useState)(!1),
            [QG, hG] = (0, wG.useState)(null),
            JG = (0, wG.useRef)(),
            rG = (0, wG.useContext)(Kb),
            [zG] = (0, wG.useState)((() => "DocsTypePopover-" + Fb++)),
            EG = () => {
              clearTimeout(JG.current), fG(!0)
            },
            oG = () => {
              clearTimeout(JG.current), JG.current = setTimeout((() => {
                fG(!1)
              }), 120)
            };
          return (0, wG.useEffect)((() => {
            if (!pG) return;
            const GG = GG => {
              if ("Escape" === GG.key) {
                var bG, ZG;
                if (null !== (bG = UG.current) && void 0 !== bG && bG.contains(document.activeElement)) null === (ZG = kG.current) || void 0 === ZG || ZG.focus();
                fG(!1)
              }
            };
            return document.addEventListener("keydown", GG), () => {
              document.removeEventListener("keydown", GG)
            }
          }), [pG]), (0, wG.useEffect)((() => () => {
            clearTimeout(JG.current)
          }), []), (0, wG.useLayoutEffect)((() => {
            if (!pG || !kG.current || !UG.current) return void hG(null);
            const GG = kG.current.getBoundingClientRect(),
              bG = UG.current.offsetHeight,
              ZG = Math.min(Wb, window.innerWidth - 32),
              wG = Math.min(Math.max(16, GG.left), window.innerWidth - ZG - 16),
              SG = GG.bottom + mb + bG < window.innerHeight;
            hG({
              left: wG,
              top: SG ? GG.bottom + mb : Math.max(16, GG.top - mb - bG)
            })
          }), [pG]), (0, KG.jsxs)(KG.Fragment, {
            children: [(0, KG.jsx)("button", {
              type: "button",
              ref: kG,
              className: "DocsTypeLink",
              "aria-expanded": pG,
              "aria-describedby": pG ? zG : void 0,
              onMouseEnter: EG,
              onMouseLeave: oG,
              onFocus: EG,
              onBlur: oG,
              onKeyDown: GG => {
                "Tab" === GG.key && !GG.shiftKey && VG.current && (GG.preventDefault(), VG.current.focus())
              },
              onClick: EG,
              children: bG
            }), pG && (0, YG.createPortal)((0, KG.jsxs)("span", {
              ref: UG,
              id: zG,
              className: "DocsTypePopover",
              role: "tooltip",
              style: QG ? {
                left: QG.left,
                top: QG.top,
                maxWidth: Wb
              } : {
                visibility: "hidden"
              },
              onMouseEnter: EG,
              onMouseLeave: oG,
              onFocus: EG,
              onBlur: oG,
              children: [(0, KG.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, KG.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: bG
                }), LG && (0, KG.jsxs)(yG.c, {
                  ref: VG,
                  className: "DocsTypePopoverLink",
                  to: RG(SG, AG(LG)),
                  onClick: () => {
                    fG(!1)
                  },
                  onKeyDown: GG => {
                    if ("Tab" === GG.key) {
                      var bG;
                      if (GG.preventDefault(), GG.shiftKey || !kG.current || ! function(GG, bG) {
                          const ZG = [...document.querySelectorAll(Ib)],
                            wG = ZG.slice(ZG.indexOf(GG) + 1).find((GG => GG.getClientRects().length > 0 && !(null !== bG && void 0 !== bG && bG.contains(GG))));
                          return null === wG || void 0 === wG || wG.focus(), void 0 !== wG
                        }(kG.current, UG.current)) null === (bG = kG.current) || void 0 === bG || bG.focus();
                      GG.shiftKey || fG(!1)
                    }
                  },
                  children: [AG(LG).title, (0, KG.jsx)(dG, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, KG.jsx)(uG, {
                lang: "ts",
                code: ZG,
                compact: !0
              })]
            }), null !== rG && void 0 !== rG ? rG : document.body)]
          })
        }
        var ab = ZG(188),
          cb = ZG(4786),
          lb = ZG(4790),
          jb = ZG(4792);
        const Pb = {
          progressBar: {
            NG: 30,
            OG: .075,
            xG: 5,
            BG: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Zb: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Lb: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            yb: !0,
            scale: 3,
            rotation: 15,
            kb: !1
          },
          gravityBar: {
            NG: 30,
            Yb: .25,
            Vb: 3,
            pb: .8,
            gravity: 1,
            fb: 1.5,
            Qb: 8,
            Kb: 4,
            BG: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Jb: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            zb: 5,
            Eb: 1200,
            ob: .15,
            Xb: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Mb = ZG(333),
          Ab = ZG(1972);

        function sb(GG) {
          return GG.startsWith("fa-")
        }
        const qb = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          nb = {
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

        function gb(GG) {
          return "string" === typeof GG ? "text" : "entityName" in GG || "translationKey" in GG ? "other" : (0, Mb.Tb)(GG) ? "progressBar" : (0, Mb.Qb)(GG) ? "keyBinding" : "icon" in GG ? "icon" : "str" in GG && "string" === typeof GG.str ? "text" : "other"
        }
        const eb = [{
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
          Rb = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...eb],
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
                options: Ab.k
              },
              isRequired: !0
            }, ...eb],
            other: []
          };

        function Tb(GG) {
          return "string" === typeof GG ? {
            str: GG
          } : GG
        }

        function Hb(GG, bG) {
          let ZG = Tb(GG);
          for (const wG of bG) ZG = ZG && "object" === typeof ZG ? ZG[wG] : void 0;
          return ZG
        }

        function tb(GG, bG, ZG) {
          const wG = (GG, SG) => {
            var LG;
            const yG = bG[SG],
              kG = {
                ...GG
              };
            if (SG === bG.length - 1) return void 0 === ZG ? delete kG[yG] : kG[yG] = ZG, kG;
            const UG = wG(null !== (LG = GG[yG]) && void 0 !== LG ? LG : {}, SG + 1);
            return 0 === Object.keys(UG).length ? delete kG[yG] : kG[yG] = UG, kG
          };
          return function(GG) {
            const bG = Object.keys(GG);
            return "string" === typeof GG.str && 1 === bG.length ? GG.str : GG
          }(wG(Tb(GG), 0))
        }

        function Db(GG, bG) {
          const ZG = gb(GG),
            wG = Rb[ZG].find((GG => GG.path.join(".") === bG.join("."))),
            SG = null !== wG && void 0 !== wG && wG.isRequired && "other" !== ZG ? Hb(nb[ZG], bG) : void 0;
          return tb(GG, bG, SG)
        }

        function Nb(GG) {
          switch (gb(GG)) {
            case "text":
              return String(Hb(GG, ["str"]));
            case "icon":
              return String(Hb(GG, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Hb(GG,["progress"])))}%`;
            case "keyBinding":
              return String(Hb(GG, ["action"]));
            case "other":
              return JSON.stringify(GG)
          }
        }
        const Ob = /^[A-Za-z_$][\w$]*$/;

        function xb(GG) {
          if (Array.isArray(GG)) return `[${GG.map(xb).join(", ")}]`;
          if (GG && "object" === typeof GG) {
            const bG = Object.entries(GG).map((GG => {
              let [bG, ZG] = GG;
              return `${Ob.test(bG)?bG:JSON.stringify(bG)}: ${xb(ZG)}`
            }));
            return 0 === bG.length ? "{}" : `{ ${bG.join(", ")} }`
          }
          return JSON.stringify(GG)
        }

        function Bb(GG) {
          const bG = GG.map(xb),
            ZG = `[${bG.join(", ")}]`;
          return ZG.length <= 60 ? ZG : `[\n${bG.map((GG=>`    ${GG},`)).join("\n")}\n]`
        }
        const GZ = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function bZ(GG) {
          let bG = "";
          for (let SG = 0; SG < GG.length; SG++) {
            const LG = GG[SG];
            if ("\\" === LG) {
              var ZG;
              const wG = null !== (ZG = GG[SG + 1]) && void 0 !== ZG ? ZG : "";
              bG += "'" === wG ? "'" : LG + wG, SG++
            } else if ('"' === LG) bG += '\\"';
            else {
              var wG;
              bG += null !== (wG = GZ[LG]) && void 0 !== wG ? wG : LG
            }
          }
          return `"${bG}"`
        }

        function ZZ(GG) {
          if ("string" === typeof GG) return !0;
          if (!GG || "object" !== typeof GG || Array.isArray(GG)) return !1;
          const bG = GG;
          return "ProgressBar" === bG.type ? "number" === typeof bG.progress : "StyledKeyBinding" === bG.type ? Ab.k.includes(bG.action) : "string" === typeof bG.icon || "string" === typeof bG.str || "string" === typeof bG.entityName || "string" === typeof bG.translationKey
        }

        function wZ(GG) {
          let bG;
          try {
            bG = function(GG) {
              let bG = "",
                ZG = "",
                wG = 0;
              const SG = () => {
                bG += ZG.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ZG = ""
              };
              for (; wG < GG.length;) {
                const LG = GG.slice(wG).search(/["'`]|\/\//);
                if (-1 === LG) {
                  ZG += GG.slice(wG);
                  break
                }
                ZG += GG.slice(wG, wG + LG);
                const yG = wG + LG,
                  kG = GG[yG];
                if ("/" === kG) {
                  const bG = GG.indexOf("\n", yG);
                  wG = -1 === bG ? GG.length : bG;
                  continue
                }
                if (SG(), "`" === kG) throw new Error("Use quotes rather than template strings.");
                let UG = yG + 1;
                for (; UG < GG.length && GG[UG] !== kG;) UG += "\\" === GG[UG] ? 2 : 1;
                if (UG >= GG.length) throw new Error("A string is missing its closing quote.");
                const YG = GG.slice(yG + 1, UG);
                bG += bZ(YG), wG = UG + 1
              }
              return SG(), JSON.parse(bG)
            }(GG.trim())
          } catch (wG) {
            return {
              parts: null,
              error: wG instanceof SyntaxError ? "This isn't a valid array yet." : wG.message
            }
          }
          if (!Array.isArray(bG)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ZG = bG.findIndex((GG => !ZZ(GG)));
          return -1 !== ZG ? {
            parts: null,
            error: `Part ${ZG+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: bG,
            error: null
          }
        }
        const SZ = 1 / ab.d.clientTicksPerSecond,
          LZ = 700,
          yZ = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          kZ = {
            progressBar: Pb.progressBar.Zb,
            timedClick: Pb.timedClick.icon,
            gravityBar: Pb.gravityBar.icon,
            precisionBar: Pb.precisionBar.icon,
            rhythmClick: Pb.rhythmClick.icon
          };

        function UZ(GG) {
          let {
            type: bG
          } = GG;
          const [ZG, SG] = (0, wG.useState)("ready"), [yG, kG] = (0, wG.useState)(1), [UG, YG] = (0, wG.useState)(!0), VG = (0, wG.useRef)(null), pG = (0, wG.useRef)(null), fG = (0, wG.useRef)(null), QG = (0, wG.useRef)(new Set), hG = (0, wG.useRef)(!1), JG = kZ[bG], rG = (0, wG.useMemo)((() => ({
            getState: () => {
              var GG, bG;
              return null !== (GG = null === (bG = fG.current) || void 0 === bG ? void 0 : bG.getState()) && void 0 !== GG ? GG : yZ
            },
            onFrame: GG => (QG.current.add(GG), () => {
              QG.current.delete(GG)
            })
          })), []);
          (0, wG.useEffect)((() => {
            const GG = VG.current,
              bG = pG.current;
            if (!GG || !bG) return;
            const ZG = new ResizeObserver((() => {
              kG(GG.clientWidth / Math.max(1, bG.offsetWidth))
            }));
            return ZG.observe(GG), () => {
              ZG.disconnect()
            }
          }), []), (0, wG.useEffect)((() => {
            var GG;
            if ("playing" !== ZG) return;
            let wG = !1;
            const LG = new jb.g[bG](Pb[bG], (GG => {
              wG = !0, YG(!1), SG(GG ? "succeeded" : "failed")
            }), (() => {}));
            fG.current = LG;
            let yG = 0,
              kG = performance.now(),
              UG = requestAnimationFrame((function GG(bG) {
                for (yG += Math.min(.25, (bG - kG) / 1e3), kG = bG; yG >= SZ && !wG;) yG -= SZ, LG.handleTick(SZ);
                for (const ZG of QG.current) ZG();
                wG || (UG = requestAnimationFrame(GG))
              }));
            return null === (GG = VG.current) || void 0 === GG || GG.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(UG), LG.tearDown(), fG.current = null, hG.current = !1
            }
          }), [ZG, bG]), (0, wG.useEffect)((() => {
            if (UG) return;
            const GG = setTimeout((() => {
              YG(!0)
            }), LZ);
            return () => {
              clearTimeout(GG)
            }
          }), [UG]);
          const zG = GG => {
            var bG;
            "playing" === ZG && hG.current !== GG && (hG.current = GG, null === (bG = fG.current) || void 0 === bG || bG.handleMouseInput(GG))
          };
          return (0, KG.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, KG.jsxs)("div", {
              ref: VG,
              className: LG()("DocsQteStage", {
                Playing: "playing" === ZG
              }),
              tabIndex: "playing" === ZG ? 0 : -1,
              role: "playing" === ZG ? "button" : void 0,
              "aria-label": "playing" === ZG ? `${bG} quick time event: click or press Space` : void 0,
              onPointerDown: GG => {
                0 === GG.button && zG(!0)
              },
              onPointerUp: () => {
                zG(!1)
              },
              onPointerLeave: () => {
                zG(!1)
              },
              onPointerCancel: () => {
                zG(!1)
              },
              onKeyDown: GG => {
                "playing" !== ZG || " " !== GG.key && "Enter" !== GG.key || (GG.preventDefault(), zG(!0))
              },
              onKeyUp: GG => {
                "playing" !== ZG || " " !== GG.key && "Enter" !== GG.key || zG(!1)
              },
              children: [(0, KG.jsx)("div", {
                ref: pG,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${yG})`
                },
                children: "playing" === ZG && (0, KG.jsx)(lb.b.Provider, {
                  value: rG,
                  children: (0, KG.jsx)(cb.e, {
                    qte: {
                      type: bG,
                      parameters: Pb[bG]
                    }
                  })
                })
              }), "playing" !== ZG && (0, KG.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ZG && (0, KG.jsxs)("div", {
                  className: LG()("DocsQteResult", "succeeded" === ZG ? "Succeeded" : "Failed"),
                  children: [(0, KG.jsx)(dG, {
                    name: "succeeded" === ZG ? "check" : "cross",
                    isTinted: !0
                  }), (0, KG.jsx)("span", {
                    children: "succeeded" === ZG ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, KG.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !UG,
                  onClick: () => {
                    SG("playing")
                  },
                  children: [(0, KG.jsx)(dG, {
                    name: "ready" === ZG ? "play" : "replay"
                  }), (0, KG.jsx)("span", {
                    children: "ready" === ZG ? `Try ${bG}` : "Play again"
                  })]
                })]
              })]
            }), JG && !sb(JG) && (0, KG.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, KG.jsx)("code", {
                children: JG
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function YZ(GG) {
          let {
            level: bG,
            text: ZG,
            anchor: wG,
            className: SG
          } = GG;
          const yG = `h${Math.min(bG,6)}`;
          return (0, KG.jsxs)(yG, {
                id: wG,
                className: LG()("DocsHeading", SG),
                children: [(0, KG.jsx)(Xb, {
                      text: ZG
                    }), (0, KG.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${wG}`,
                        "aria-label": `Link to ${ZG.replace(/`/g,"")}`,children:"#"})]})}function VZ(GG){let{items:bG,ordered:ZG}=GG;const wG=ZG?"ol":"ul";return(0,KG.jsx)(wG,{className:"DocsList",children:bG.map(((GG,bG)=>(0,KG.jsxs)("li",{children:[(0,KG.jsx)(Xb,{text:GG.text}),GG.children.length>0&&(0,KG.jsx)(VZ,{items:GG.children,ordered:ZG})]},bG)))})}function pZ(GG){const bG=GG[0],ZG="paragraph"===(null===bG||void 0===bG?void 0:bG.kind)?bG.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ZG)?"warning":/^\*\*(tip|prefer)/.test(ZG)?"tip":"note"}function fZ(GG){let{block:bG}=GG;switch(bG.kind){case"heading":return(0,KG.jsx)(YZ,{level:bG.level,text:bG.text,anchor:bG.anchor});case"paragraph":return(0,KG.jsx)("p",{children:(0,KG.jsx)(Xb,{text:bG.text})});case"code":{const GG="ts"===bG.lang?function(GG){const bG=GG.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return bG&&Object.hasOwn(Pb,bG[1])?bG[1]:null}(bG.code):null;return(0,KG.jsxs)(KG.Fragment,{children:[(0,KG.jsx)(uG,{code:bG.code,lang:bG.lang}),GG&&(0,KG.jsx)(UZ,{type:GG})]})}case"table":return(0,KG.jsx)("div",{className:"DocsTableScroll",children:(0,KG.jsxs)("table",{className:"DocsTable",children:[(0,KG.jsx)("thead",{children:(0,KG.jsx)("tr",{children:bG.header.map(((GG,bG)=>(0,KG.jsx)("th",{children:(0,KG.jsx)(Xb,{text:GG})},bG)))})}),(0,KG.jsx)("tbody",{children:bG.rows.map(((GG,bG)=>(0,KG.jsx)("tr",{children:GG.map(((GG,bG)=>(0,KG.jsx)("td",{children:(0,KG.jsx)(Xb,{text:GG})},bG)))},bG)))})]})});case"list":return(0,KG.jsx)(VZ,{items:bG.items,ordered:bG.ordered});case"quote":return(0,KG.jsx)("aside",{className:LG()("DocsCallout",pZ(bG.blocks)),children:(0,KG.jsx)(QZ,{blocks:bG.blocks})});case"rule":return(0,KG.jsx)("hr",{className:"DocsRule"})}}function QZ(GG){let{blocks:bG}=GG;return(0,KG.jsx)(KG.Fragment,{children:bG.map(((GG,bG)=>(0,KG.jsx)(fZ,{block:GG},bG)))})}var KZ=ZG(4768),hZ=ZG(4772);function dZ(GG){return"blocks"===GG||"items"===GG}const JZ=new Map;function rZ(GG){let bG=JZ.get(GG);return bG||(bG=function(GG){const bG={entries:[],legend:[],notes:[],examples:[]};let ZG=!1;for(const LG of GG.split(/\r?\n/).slice(1)){if(LG.startsWith("#")){const GG=LG.replace(/^# ?/,""),wG=GG.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);wG?bG.legend.push({code:wG[1],meaning:wG[2],usage:wG[3].trim()}):/^Examples:/.test(GG.trim())?ZG=!0:ZG&&GG.trim()?bG.examples.push(GG.trim()):GG.trim()&&!/^\s/.test(GG)&&bG.notes.push(GG.trim());continue}const GG=LG.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var wG,SG;GG&&bG.entries.push({name:GG[1],variants:null!==(wG=null===(SG=GG[2])||void 0===SG?void 0:SG.split(","))&&void 0!==wG?wG:[]})}return bG}("blocks"===GG?KZ:hZ),JZ.set(GG,bG)),bG}function zZ(GG){let{className:bG,value:ZG,placeholder:wG,label:SG,onChange:LG,count:yG,children:kG}=GG;return(0,KG.jsxs)("div",{className:bG,children:[(0,KG.jsx)(dG,{name:"magnifying-glass"}),(0,KG.jsx)("input",{type:"search",value:ZG,placeholder:wG,"aria-label":SG,onChange:GG=>{LG(GG.target.value)}}),kG,yG&&(0,KG.jsxs)("span",{className:"DocsFilterCount",children:[yG.visible," of ",yG.total]})]})}var EZ=ZG(1016);function oZ(GG){const bG=GG.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return bG?bG[2]:null}function XZ(GG){return"paragraph"===GG.kind&&""===GG.text.trim()}function uZ(GG){const bG={name:GG.heading.text,description:[],params:[],returns:null};let ZG="description";for(const SG of GG.blocks)if(!XZ(SG))if("heading"===SG.kind&&/^Parameters:?$/.test(SG.text))ZG="params";else if("heading"===SG.kind&&/^Returns:?$/.test(SG.text))ZG="returns",bG.returns={type:"",description:[]};else if("params"!==ZG||"table"!==SG.kind){if("returns"===ZG&&"paragraph"===SG.kind&&""===bG.returns.type){const GG=oZ(SG.text);if(null!==GG){bG.returns.type=GG.replaceAll("\\|","|");continue}}"returns"===ZG?bG.returns.description.push(SG):bG.description.push(SG)}else for(const[GG,ZG,LG]of SG.rows){var wG;bG.params.push({name:GG,type:null!==(wG=oZ(ZG))&&void 0!==wG?wG:ZG,description:null!==LG&&void 0!==LG?LG:""})}return bG}const iZ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function CZ(GG){return GG.filter((GG=>!XZ(GG)))}const WZ=/^[\w][\w .'&!:()-]*$/,mZ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function IZ(GG){var bG;if("code"===GG.kind&&"text"===GG.lang){const bG=GG.code.split("\n").map((GG=>GG.trim())).filter(Boolean);return bG.length>0&&bG.every((GG=>WZ.test(GG)))?bG.map((GG=>({name:GG}))):null}return"paragraph"===GG.kind&&mZ.test(GG.text.trim())?[...GG.text.matchAll(/`([ ^ `]+)` / g)].flatMap((GG => GG[1].split(/,\s*/).map((GG => ({
                              name: GG.trim()
                            }))))): "table" === GG.kind && null !== (bG = GG.header[0]) && void 0 !== bG && bG.startsWith("Song") ? GG.rows.map((GG => {
                              let [bG, ZG] = GG;
                              return {
                                name: bG.replace(/`/g, ""),
                                caption: ZG
                              }
                            })) : null
                          }

                          function FZ(GG) {
                            const bG = [];
                            for (const ZG of GG) {
                              const GG = IZ(ZG),
                                wG = bG.at(-1),
                                SG = "table" === ZG.kind;
                              GG ? "names" === (null === wG || void 0 === wG ? void 0 : wG.kind) && wG.isSongs === SG ? wG.names.push(...GG) : bG.push({
                                kind: "names",
                                names: GG,
                                isSongs: SG
                              }) : bG.push({
                                kind: "block",
                                block: ZG
                              })
                            }
                            return bG
                          }
                          const vZ = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function aZ(GG, bG) {
                            return `${vZ[GG]}-${(0,iG.r)(bG)}`
                          }
                          const cZ = new WeakMap;

                          function lZ(GG, bG, ZG) {
                            let wG = cZ.get(bG);
                            if (!wG) {
                              wG = new Map;
                              const ZG = new Set;
                              for (const SG of (0, iG.t)(bG)) {
                                const bG = FZ(CZ(SG.blocks)).map((bG => {
                                  if ("block" === bG.kind) return bG;
                                  return {
                                    kind: "names",
                                    names: bG.names.map((bG => {
                                      var wG, LG;
                                      const yG = aZ(GG, bG.name);
                                      let kG = yG;
                                      for (let GG = 2; ZG.has(kG); GG++) kG = `${yG}-${GG}`;
                                      return ZG.add(kG), {
                                        ...bG,
                                        anchor: kG,
                                        heading: null !== (wG = null === (LG = SG.heading) || void 0 === LG ? void 0 : LG.text) && void 0 !== wG ? wG : ""
                                      }
                                    })),
                                    isSongs: bG.isSongs
                                  }
                                }));
                                wG.set(SG.blocks, bG)
                              }
                              cZ.set(bG, wG)
                            }
                            const SG = wG.get(ZG);
                            if (!SG) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return SG
                          }
                          const jZ = "/textures/docs/skinPreviews",
                            PZ = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var MZ = ZG(4241),
                            AZ = ZG(4255);

                          function sZ(GG) {
                            return Object.hasOwn(MZ.h, GG) ? MZ.h[GG] : null
                          }
                          const qZ = {
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
                            blendMode: AZ.c.Standard
                          };

                          function nZ(GG, bG, ZG) {
                            return bG + (ZG - bG) * GG()
                          }

                          function gZ(GG, bG, ZG) {
                            return GG + (bG - GG) * ZG
                          }

                          function eZ(GG) {
                            return GG.length > 0 && "timeFraction" in GG[0]
                          }

                          function RZ(GG, bG) {
                            if (0 === GG.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!eZ(GG.colorGradients)) {
                              const ZG = GG.colorGradients,
                                {
                                  color: wG
                                } = ZG[Math.floor(bG() * ZG.length) % ZG.length];
                              return [{
                                at: 0,
                                colour: [wG[0] / 255, wG[1] / 255, wG[2] / 255, 1]
                              }]
                            }
                            return [...GG.colorGradients].sort(((GG, bG) => GG.timeFraction - bG.timeFraction)).map((GG => {
                              var ZG, wG, SG;
                              const LG = GG.minColor,
                                yG = null !== (ZG = GG.maxColor) && void 0 !== ZG ? ZG : LG,
                                kG = bG(),
                                UG = [gZ(LG[0], yG[0], kG) / 255, gZ(LG[1], yG[1], kG) / 255, gZ(LG[2], yG[2], kG) / 255, gZ(null !== (wG = LG[3]) && void 0 !== wG ? wG : 1, null !== (SG = yG[3]) && void 0 !== SG ? SG : 1, kG)];
                              return {
                                at: GG.timeFraction,
                                colour: UG
                              }
                            }))
                          }

                          function TZ(GG, bG, ZG, wG) {
                            const SG = nZ(wG, GG.minEmitPower, GG.maxEmitPower),
                              LG = bG => nZ(wG, Math.min(GG.dir1[bG], GG.dir2[bG]), Math.max(GG.dir1[bG], GG.dir2[bG])) * SG,
                              yG = [...GG.velocityGradients].sort(((GG, bG) => GG.timeFraction - bG.timeFraction)).map((GG => ({
                                at: GG.timeFraction,
                                factor: nZ(wG, GG.factor, GG.factor2)
                              })));
                            return {
                              pos: [nZ(wG, bG[0], ZG[0]), nZ(wG, bG[1], ZG[1]), nZ(wG, bG[2], ZG[2])],
                              dir: [LG(0), LG(1), LG(2)],
                              age: 0,
                              life: nZ(wG, GG.minLifeTime, GG.maxLifeTime),
                              size: nZ(wG, GG.minSize, GG.maxSize),
                              colours: RZ(GG, wG),
                              velocityFactors: yG
                            }
                          }

                          function HZ(GG, bG, ZG, wG) {
                            if (bG < GG[0].at) return ZG(Math.min(1, GG.length - 1));
                            for (let SG = 0; SG < GG.length - 1; SG++)
                              if (bG <= GG[SG + 1].at) {
                                const LG = GG[SG + 1].at - GG[SG].at;
                                return wG(ZG(SG), ZG(SG + 1), LG > 0 ? (bG - GG[SG].at) / LG : 1)
                              } return ZG(GG.length - 1)
                          }

                          function tZ(GG) {
                            return HZ(GG.colours, GG.age / GG.life, (bG => GG.colours[bG].colour), ((GG, bG, ZG) => [gZ(GG[0], bG[0], ZG), gZ(GG[1], bG[1], ZG), gZ(GG[2], bG[2], ZG), gZ(GG[3], bG[3], ZG)]))
                          }

                          function DZ(GG, bG, ZG) {
                            if (GG.age += ZG, GG.age >= GG.life) return !1;
                            const wG = function(GG) {
                              return 0 === GG.velocityFactors.length ? 1 : HZ(GG.velocityFactors, GG.age / GG.life, (bG => GG.velocityFactors[bG].factor), gZ)
                            }(GG) * ZG;
                            for (let LG = 0; LG < 3; LG++) {
                              var SG;
                              GG.pos[LG] += GG.dir[LG] * wG, GG.dir[LG] += (null !== (SG = bG[LG]) && void 0 !== SG ? SG : 0) * ZG
                            }
                            return !0
                          }

                          function NZ(GG) {
                            return String(Math.round(1e6 * GG) / 1e6)
                          }

                          function OZ(GG) {
                            return `[${GG.map(NZ).join(", ")}]`
                          }

                          function xZ(GG, bG) {
                            const ZG = `${bG}    `;
                            return `[\n${(eZ(GG)?GG.map((GG=>{const bG=[`${ZG}    timeFraction: ${NZ(GG.timeFraction)},`,`${ZG}    minColor: ${OZ(GG.minColor)},`];return GG.maxColor&&bG.push(`${ZG}    maxColor: ${OZ(GG.maxColor)},`),`${ZG}{\n${bG.join("\n")}\n${ZG}},`})):GG.map((GG=>`
                            $ {
                              ZG
                            } {
                              color: $ {
                                OZ(GG.color)
                              }
                            }, `))).join("\n")}\n${bG}]`
                          }
                          const BZ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Gw = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const bw = .6;

                          function Zw(GG, bG) {
                            return `${bG?"song":"sound"}:${GG}`
                          }
                          let ww = {
                              track: null,
                              volume: bw
                            },
                            Sw = null,
                            Lw = 0,
                            yw = 0;
                          const kw = new Set;

                          function Uw(GG) {
                            ww = {
                              ...ww,
                              ...GG
                            }, kw.forEach((GG => {
                              GG()
                            }))
                          }

                          function Yw(GG) {
                            ww.track && Uw({
                              track: {
                                ...ww.track,
                                ...GG
                              }
                            })
                          }

                          function Vw(GG) {
                            const [bG, ZG] = (0, wG.useState)((() => GG(ww))), SG = (0, wG.useRef)(GG);
                            return SG.current = GG, (0, wG.useEffect)((() => {
                              const GG = () => {
                                ZG((() => SG.current(ww)))
                              };
                              return kw.add(GG), GG(), () => {
                                kw.delete(GG)
                              }
                            }), []), bG
                          }

                          function pw() {
                            Lw++;
                            const GG = Sw;
                            Sw = null, null === GG || void 0 === GG || GG.stop()
                          }

                          function fw(GG, bG) {
                            let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            pw();
                            const SG = Lw,
                              {
                                track: LG
                              } = ww,
                              yG = LG && LG.name === GG && LG.isSong === bG ? LG.duration : 0;
                            yw = wG, Uw({
                              track: {
                                name: GG,
                                isSong: bG,
                                status: "loading",
                                duration: yG
                              }
                            }), Promise.all([ZG.e(227), ZG.e(253)]).then((() => ZG(40183))).then((ZG => {
                              let {
                                playDocsSound: LG
                              } = ZG;
                              SG === Lw && (Sw = LG(GG, bG, ww.volume, wG, {
                                onPlay: GG => {
                                  SG === Lw && Yw({
                                    status: "playing",
                                    duration: GG
                                  })
                                },
                                onEnd: GG => {
                                  var bG, ZG;
                                  SG === Lw && (Sw = null, GG ? Uw({
                                    track: null
                                  }) : (yw = null !== (bG = null === (ZG = ww.track) || void 0 === ZG ? void 0 : ZG.duration) && void 0 !== bG ? bG : 0, Yw({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((bG => {
                              console.error(`Could not play docs sound ${GG}`, bG), SG === Lw && Uw({
                                track: null
                              })
                            }))
                          }

                          function Qw() {
                            const {
                              track: GG
                            } = ww;
                            if (!GG) return;
                            if ("playing" === GG.status && Sw) return yw = Sw.HJ(), Sw.pause(), void Yw({
                              status: "paused"
                            });
                            if ("loading" === GG.status) return pw(), void Yw({
                              status: "paused"
                            });
                            if (Sw) return void Sw.resume();
                            const bG = GG.duration > 0 && yw >= GG.duration - .05;
                            fw(GG.name, GG.isSong, bG ? 0 : yw)
                          }

                          function Kw() {
                            var GG;
                            return Sw && "playing" === (null === (GG = ww.track) || void 0 === GG ? void 0 : GG.status) ? Sw.HJ() : yw
                          }

                          function hw(GG) {
                            var bG;
                            null === (bG = Sw) || void 0 === bG || bG.setVolume(GG), Uw({
                              volume: GG
                            })
                          }

                          function dw() {
                            pw(), yw = 0, Uw({
                              track: null
                            })
                          }
                          const Jw = (0, wG.createContext)(null);
                          let rw = null;

                          function zw() {
                            const [GG, bG] = (0, wG.useState)(null);
                            return (0, wG.useEffect)((() => {
                              let GG = !1;
                              return rw ??= Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(188), ZG.e(100), ZG.e(231)]).then((() => ZG(40175))), rw.then((ZG => {
                                GG || bG(ZG)
                              }), (GG => {
                                console.error("Could not load the docs gallery's textures", GG), rw = null
                              })), () => {
                                GG = !0
                              }
                            }), []), GG
                          }
                          const Ew = 24,
                            ow = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Xw(GG, bG) {
                            const ZG = "skins" === GG ? function(GG, bG) {
                              const ZG = PZ.find((bG => GG.startsWith(bG.heading)));
                              return ZG ? function(GG, bG) {
                                return `${GG}-${bG}`
                              }(ZG.prefix, bG) : null
                            }(bG.heading, bG.name) : null;
                            return null === ZG ? null : `${jZ}/${ZG}.webp`
                          }

                          function uw(GG) {
                            let {
                              kind: bG,
                              entry: ZG,
                              assets: SG,
                              renderedUrl: yG
                            } = GG;
                            const {
                              name: kG
                            } = ZG, [UG, YG] = (0, wG.useState)(!1);
                            if ("icons" === bG && sb(kG)) return (0, KG.jsx)(EZ.c, {
                              className: "DocsTileIcon",
                              name: kG
                            });
                            let VG = null;
                            var pG;
                            if ("icons" === bG) VG = null !== (pG = null === SG || void 0 === SG ? void 0 : SG.getIngameIconUrl(kG)) && void 0 !== pG ? pG : null;
                            else if ("particles" === bG) {
                              var fG, QG, hG;
                              VG = null !== (fG = null === SG || void 0 === SG ? void 0 : SG.getParticleTextureUrl(null !== (QG = null === (hG = sZ(kG)) || void 0 === hG ? void 0 : hG.texture) && void 0 !== QG ? QG : kG)) && void 0 !== fG ? fG : null
                            } else "skins" === bG && (VG = null !== yG && void 0 !== yG ? yG : ow.test(kG) ? `/textures/charSkins/previews/${kG}_preview.png` : null);
                            return !VG || UG ? (0, KG.jsx)(dG, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === bG ? "person" : "image"
                            }) : (0, KG.jsx)("img", {
                              className: LG()("DocsTileImage", {
                                Pixelated: "skins" !== bG
                              }),
                              src: VG,
                              srcSet: VG === yG ? `${VG} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${VG}`), YG(!0)
                              }
                            })
                          }

                          function iw(GG) {
                            let {
                              entry: bG,
                              isSong: ZG
                            } = GG;
                            const wG = Vw((GG => {
                                let {
                                  track: wG
                                } = GG;
                                return (null === wG || void 0 === wG ? void 0 : wG.name) === bG.name && wG.isSong === ZG ? wG.status : null
                              })),
                              SG = null !== wG && "paused" !== wG;
                            return (0, KG.jsxs)("button", {
                              type: "button",
                              id: bG.anchor,
                              className: LG()("DocsSoundTile", {
                                Playing: SG
                              }),
                              "data-docs-track": Zw(bG.name, ZG),
                              "aria-label": SG ? `Pause ${bG.name}` : `Play ${bG.name}`,
                              onClick: () => {
                                null !== wG ? Qw() : fw(bG.name, ZG)
                              },
                              children: [(0, KG.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, KG.jsx)(dG, {
                                  name: SG ? "pause" : "play"
                                })
                              }), (0, KG.jsx)("code", {
                                className: "DocsSoundName",
                                children: bG.name
                              }), bG.caption && (0, KG.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: bG.caption
                              })]
                            })
                          }

                          function Cw(GG) {
                            let {
                              kind: bG,
                              names: ZG,
                              isSongs: SG
                            } = GG;
                            const yG = zw(),
                              [kG, UG] = rG(),
                              YG = !1 === (null === kG || void 0 === kG ? void 0 : kG.failed) ? kG.text : null,
                              VG = (0, wG.useContext)(Jw),
                              [pG, fG] = (0, wG.useState)(""),
                              QG = pG.trim().toLowerCase(),
                              hG = QG ? ZG.filter((GG => GG.name.toLowerCase().includes(QG))) : ZG;
                            return (0, KG.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ZG.length > Ew && (0, KG.jsx)(zZ, {
                                className: "DocsGalleryFilter",
                                value: pG,
                                placeholder: `Filter ${ZG.length} names\u2026`,
                                label: "Filter names",
                                onChange: fG,
                                count: QG ? {
                                  visible: hG.length,
                                  total: ZG.length
                                } : null
                              }), (0, KG.jsx)("div", {
                                className: LG()("DocsGalleryGrid", `Kind-${bG}`, {
                                  Songs: SG
                                }),
                                children: hG.map((GG => {
                                  if ("sounds" === bG) return (0, KG.jsx)(iw, {
                                    entry: GG,
                                    isSong: SG
                                  }, GG.anchor);
                                  if (VG && "particles" === bG && sZ(GG.name)) return (0, KG.jsxs)("button", {
                                    type: "button",
                                    id: GG.anchor,
                                    className: LG()("DocsTile Previewable", {
                                      Copied: YG === GG.name
                                    }),
                                    title: `Play "${GG.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      VG(GG.name), UG(GG.name)
                                    },
                                    children: [(0, KG.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, KG.jsx)(uw, {
                                        kind: bG,
                                        entry: GG,
                                        assets: yG,
                                        renderedUrl: null
                                      }), (0, KG.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, KG.jsx)(dG, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, KG.jsx)("span", {
                                      className: "DocsTileName",
                                      children: YG === GG.name ? "Copied!" : GG.name
                                    })]
                                  }, GG.anchor);
                                  const ZG = Xw(bG, GG);
                                  return (0, KG.jsxs)("button", {
                                    type: "button",
                                    id: GG.anchor,
                                    className: LG()("DocsTile", {
                                      Copied: YG === GG.name
                                    }),
                                    title: `Copy "${GG.name}"`,
                                    onClick: () => {
                                      UG(GG.name)
                                    },
                                    children: [(0, KG.jsx)("span", {
                                      className: LG()("DocsTilePreview", {
                                        Rendered: null !== ZG
                                      }),
                                      children: (0, KG.jsx)(uw, {
                                        kind: bG,
                                        entry: GG,
                                        assets: yG,
                                        renderedUrl: ZG
                                      })
                                    }), (0, KG.jsx)("span", {
                                      className: "DocsTileName",
                                      children: YG === GG.name ? "Copied!" : GG.name
                                    })]
                                  }, GG.anchor)
                                }))
                              })]
                            })
                          }

                          function Ww(GG) {
                            let {
                              kind: bG,
                              content: ZG,
                              blocks: wG
                            } = GG;
                            return (0, KG.jsx)(KG.Fragment, {
                              children: lZ(bG, ZG, wG).map(((GG, ZG) => "block" === GG.kind ? (0, KG.jsx)(fZ, {
                                block: GG.block
                              }, ZG) : (0, KG.jsx)(Cw, {
                                kind: bG,
                                names: GG.names,
                                isSongs: GG.isSongs
                              }, ZG)))
                            })
                          }
                          const mw = [{
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

                          function Iw(GG) {
                            let {
                              cards: bG = mw,
                              label: ZG = "Start here"
                            } = GG;
                            const SG = (0, wG.useContext)(Qb);
                            return (0, KG.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ZG,
                              children: bG.map((GG => {
                                let {
                                  pageId: bG,
                                  countNoun: ZG
                                } = GG;
                                const wG = AG(bG);
                                return (0, KG.jsxs)(yG.c, {
                                  to: RG(SG, wG),
                                  className: "DocsLandingCard",
                                  children: [(0, KG.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, KG.jsx)(dG, {
                                      name: wG.icon
                                    })
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: wG.title
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: wG.summary
                                  }), ZG && (0, KG.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [qG(wG).sections.length, " ", ZG]
                                  })]
                                }, bG)
                              }))
                            })
                          }
                          const Fw = 240;

                          function vw(GG) {
                            let {
                              faces: bG
                            } = GG;
                            return (0, KG.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, KG.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${bG.top}")`
                                }
                              }), (0, KG.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${bG.left}")`
                                }
                              }), (0, KG.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${bG.right}")`
                                }
                              })]
                            })
                          }

                          function aw(GG) {
                            let {
                              src: bG
                            } = GG;
                            const [ZG, SG] = (0, wG.useState)(!1);
                            return ZG ? null : (0, KG.jsx)("img", {
                              src: bG,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${bG}`), SG(!0)
                              }
                            })
                          }

                          function lw(GG) {
                            let {
                              kind: bG
                            } = GG;
                            const ZG = rZ(bG),
                              SG = zw(),
                              yG = (0, kG.n)(),
                              [UG, YG] = (0, wG.useState)(""),
                              [VG, pG] = (0, wG.useState)(null),
                              [fG, QG] = (0, wG.useState)(Fw),
                              [hG, JG] = (0, wG.useState)(null),
                              rG = (0, wG.useRef)(null),
                              EG = UG.trim().toLowerCase();
                            (0, wG.useEffect)((() => {
                              const GG = (0, iG.p)(yG.hash),
                                wG = ZG.entries.find((ZG => aZ(bG, ZG.name) === GG));
                              if (wG) rG.current = wG.name, YG(wG.name), pG(null), JG(wG.name);
                              else if (null !== rG.current) {
                                const GG = rG.current;
                                rG.current = null, YG((bG => bG === GG ? "" : bG)), JG(null)
                              }
                            }), [ZG, bG, yG.hash, yG.key]), (0, wG.useEffect)((() => {
                              var GG;
                              null !== hG && (null === (GG = document.getElementById(aZ(bG, hG))) || void 0 === GG || GG.scrollIntoView({
                                block: "center"
                              }))
                            }), [bG, hG]);
                            const oG = ZG.entries.filter((GG => (!EG || GG.name.toLowerCase().includes(EG)) && (!VG || GG.variants.includes(VG))));
                            return (0, KG.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ZG.notes.length > 0 && (0, KG.jsx)("div", {
                                className: "DocsProse",
                                children: ZG.notes.map((GG => (0, KG.jsx)("p", {
                                  children: GG
                                }, GG)))
                              }), ZG.legend.length > 0 && (0, KG.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, KG.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, KG.jsx)("thead", {
                                    children: (0, KG.jsxs)("tr", {
                                      children: [(0, KG.jsx)("th", {
                                        children: "Code"
                                      }), (0, KG.jsx)("th", {
                                        children: "Variant"
                                      }), (0, KG.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, KG.jsx)("tbody", {
                                    children: ZG.legend.map((GG => (0, KG.jsxs)("tr", {
                                      children: [(0, KG.jsx)("td", {
                                        children: (0, KG.jsx)("button", {
                                          type: "button",
                                          className: LG()("DocsVariantChip", {
                                            Active: VG === GG.code
                                          }),
                                          "aria-pressed": VG === GG.code,
                                          title: `Show only ${bG} with ${GG.meaning} variants`,
                                          onClick: () => {
                                            pG(VG === GG.code ? null : GG.code)
                                          },
                                          children: GG.code
                                        })
                                      }), (0, KG.jsx)("td", {
                                        children: GG.meaning
                                      }), (0, KG.jsx)("td", {
                                        children: (0, KG.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: GG.usage
                                        })
                                      })]
                                    }, GG.code)))
                                  })]
                                })
                              }), ZG.examples.length > 0 && (0, KG.jsx)(uG, {
                                lang: "text",
                                code: ZG.examples.join("\n")
                              }), (0, KG.jsx)(zZ, {
                                className: "DocsFilterBar",
                                value: UG,
                                placeholder: `Search ${ZG.entries.length} ${bG}\u2026`,
                                label: `Search ${bG}`,
                                onChange: GG => {
                                  YG(GG), QG(Fw)
                                },
                                count: EG || VG ? {
                                  visible: oG.length,
                                  total: ZG.entries.length
                                } : null,
                                children: VG && (0, KG.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    pG(null)
                                  },
                                  children: [VG, " ", (0, KG.jsx)(dG, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, KG.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: oG.slice(0, fG).map((GG => {
                                  const ZG = "blocks" === bG ? null === SG || void 0 === SG ? void 0 : SG.getBlockFaces(GG.name) : null,
                                    wG = SG && !ZG ? SG.getItemTextureUrl(GG.name) : null;
                                  return (0, KG.jsxs)("div", {
                                    id: aZ(bG, GG.name),
                                    className: LG()("DocsCatalogueTile", {
                                      Linked: GG.name === hG
                                    }),
                                    children: [(0, KG.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ZG && (0, KG.jsx)(vw, {
                                        faces: ZG
                                      }), wG && (0, KG.jsx)(aw, {
                                        src: wG
                                      })]
                                    }), (0, KG.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: GG.name
                                    }), GG.variants.length > 0 && (0, KG.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: GG.variants.map((GG => (0, KG.jsx)("span", {
                                        children: GG
                                      }, GG)))
                                    }), (0, KG.jsx)(zG, {
                                      text: GG.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, GG.name)
                                }))
                              }), oG.length > fG && (0, KG.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  QG(oG.length)
                                },
                                children: ["Show all ", oG.length]
                              }), 0 === oG.length && (0, KG.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", bG, " match."]
                              })]
                            })
                          }
                          var jw = ZG(4847),
                            Pw = ZG(1527);
                          const Mw = .95 * jw.b;

                          function Aw(GG) {
                            return /^\s*```/.test(GG)
                          }

                          function sw(GG, bG) {
                            const ZG = [
                              []
                            ];
                            let wG = !1;
                            for (const SG of GG.split("\n")) !wG && bG(SG) && ZG.at(-1).length > 0 && ZG.push([]), Aw(SG) && (wG = !wG), ZG.at(-1).push(SG);
                            return ZG.map((GG => GG.join("\n").trim())).filter(Boolean)
                          }

                          function qw(GG, bG) {
                            const ZG = `${"#".repeat(bG)} `,
                              wG = [];
                            let SG = !1;
                            for (const LG of GG.split("\n")) Aw(LG) ? SG = !SG : !SG && LG.startsWith(ZG) && wG.push(LG.slice(ZG.length).trim());
                            return wG
                          }

                          function nw(GG) {
                            return GG.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class gw {
                            constructor(GG, bG) {
                              this.origin = bG, this.pages = void 0, this.partPaths = new Map;
                              const ZG = GG.map((GG => {
                                const bG = bG => this.resolveLinks(GG, bG).length,
                                  ZG = function(GG, bG) {
                                    const ZG = GG.map((GG => bG(GG.markdown) + 2)),
                                      wG = ZG.reduce(((GG, bG) => GG + bG), 0),
                                      SG = wG / Math.ceil(wG / Mw),
                                      LG = [];
                                    let yG = 0;
                                    return GG.forEach(((GG, bG) => {
                                      const wG = ZG[bG];
                                      (0 === LG.length || yG + wG > Mw || yG + wG / 2 > SG) && (LG.push([]), yG = 0), LG.at(-1).push(GG), yG += wG
                                    })), LG
                                  }(function(GG, bG) {
                                    return sw(GG, (GG => GG.startsWith("## "))).flatMap((GG => {
                                      var ZG;
                                      const wG = null !== (ZG = qw(GG, 2)[0]) && void 0 !== ZG ? ZG : "";
                                      if (bG(GG) <= Mw) return [{
                                        markdown: GG,
                                        section: wG
                                      }];
                                      let SG = !1,
                                        LG = "";
                                      return sw(GG, (GG => {
                                        const bG = SG && "" !== GG.trim();
                                        return SG = "" === GG.trim(), bG
                                      })).map((GG => {
                                        var bG;
                                        const ZG = qw(GG, 3),
                                          SG = GG.startsWith("### ") ? ZG[0] : LG;
                                        return LG = null !== (bG = ZG.at(-1)) && void 0 !== bG ? bG : LG, {
                                          markdown: GG,
                                          section: wG || SG
                                        }
                                      }))
                                    }))
                                  }(nw(GG), bG), bG);
                                return {
                                  page: GG,
                                  groups: ZG.length > 1 ? ZG : []
                                }
                              }));
                              for (const {
                                  page: wG,
                                  groups: SG
                                }
                                of ZG) SG.forEach(((GG, bG) => {
                                const ZG = (0, jw.q)(wG.slug, bG);
                                for (const SG of GG.flatMap((GG => [...qw(GG.markdown, 2), ...qw(GG.markdown, 3)]))) {
                                  const GG = `${wG.id}#${(0,iG.r)(SG)}`;
                                  this.partPaths.has(GG) || this.partPaths.set(GG, ZG)
                                }
                              }));
                              this.pages = ZG.map((GG => {
                                let {
                                  page: bG,
                                  groups: ZG
                                } = GG;
                                return {
                                  page: bG,
                                  path: (0, jw.m)(bG.slug),
                                  markdown: `# ${bG.title}\n\n${this.resolveLinks(bG,nw(bG))}\n`,
                                  parts: ZG.map(((GG, wG) => this.renderPart(bG, GG, wG, ZG.length)))
                                }
                              }))
                            }
                            url(GG) {
                              return `${this.origin}${GG}`
                            }
                            getPage(GG) {
                              return this.pages.find((bG => bG.page.id === GG))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((GG => (GG.parts.length > 0 ? GG.parts : [{
                                path: GG.path,
                                label: "",
                                markdown: GG.markdown
                              }]).filter((GG => GG.markdown.length > jw.b))))
                            }
                            markdownUrl(GG, bG) {
                              const ZG = bG && this.partPaths.get(`${GG.id}#${bG}`) || (0, jw.m)(GG.slug);
                              return this.url(bG ? `${ZG}#${bG}` : ZG)
                            }
                            resolveLinks(GG, bG) {
                              return bG.replace(/\]\((#[^)]+)\)/g, ((bG, ZG) => {
                                var wG;
                                const SG = null !== (wG = gG(ZG)) && void 0 !== wG ? wG : this.samePageTarget(GG, ZG);
                                return SG ? `](${this.markdownUrl(SG.page,SG.anchor)})` : bG
                              }))
                            }
                            samePageTarget(GG, bG) {
                              const ZG = (0, iG.r)(bG.slice(1));
                              return nG(GG, ZG) ? {
                                page: GG,
                                anchor: ZG
                              } : null
                            }
                            renderPart(GG, bG, ZG, wG) {
                              const SG = function(GG) {
                                  const bG = GG.map((GG => GG.section)).filter(Boolean);
                                  if (0 === bG.length) return "";
                                  const ZG = bG[0],
                                    wG = bG.at(-1);
                                  return ZG === wG ? ZG : `${ZG} to ${wG}`
                                }(bG),
                                LG = bG.map((GG => GG.markdown)).join("\n\n"),
                                yG = SG ? `It covers ${SG}. ` : "",
                                kG = `Part ${ZG+1} of ${wG} of [${GG.title}](${this.url((0,jw.m)(GG.slug))}). ${yG}[llms.txt](${this.url(jw.e)}) lists every part.`;
                              return {
                                path: (0, jw.q)(GG.slug, ZG),
                                label: SG,
                                markdown: `# ${GG.title}, part ${ZG+1} of ${wG}\n\n${kG}\n\n${this.resolveLinks(GG,LG)}\n`
                              }
                            }
                            llmsTxt(GG) {
                              const bG = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ew(jw.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ZG of MG) {
                                bG.push("", `## ${ZG.title}`, "");
                                for (const GG of ZG.pageIds) {
                                  const ZG = this.getPage(GG),
                                    {
                                      page: wG,
                                      parts: SG
                                    } = ZG,
                                    LG = `About ${ew(ZG.markdown.length)} tokens${SG.length>0?`, in ${SG.length} parts:`:"."}`;
                                  bG.push(`- [${wG.title}](${this.url(ZG.path)}): ${wG.summary} ${LG}`), SG.forEach(((GG, ZG) => {
                                    bG.push(`  - [Part ${ZG+1}${GG.label?`: ${GG.label}`:""}](${this.url(GG.path)})`)
                                  }))
                                }
                              }
                              return bG.push("", "## Optional", "", `- [Every page in one file](${this.url(jw.c)}): About ${ew(GG.length)} tokens, for a model with a large context window.`, ""), bG.join("\n")
                            }
                            llmsFullTxt() {
                              return MG.flatMap((GG => GG.pageIds.map((GG => this.getPage(GG).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const GG = this.llmsFullTxt(),
                                bG = this.llmsTxt(GG),
                                ZG = new Map([
                                  [jw.h, bG],
                                  [jw.e, bG],
                                  [jw.c, GG]
                                ]);
                              for (const wG of this.pages) {
                                ZG.set(wG.path, wG.markdown);
                                for (const GG of wG.parts) ZG.set(GG.path, GG.markdown)
                              }
                              return ZG
                            }
                          }

                          function ew(GG) {
                            return `${Math.max(1,Math.round(GG/4e3))}K`
                          }
                          let Rw = null;

                          function Tw() {
                            return Rw ??= new gw(PG, Pw.d), Rw
                          }
                          var Hw = ZG(4849);
                          const tw = [Hw.i, Hw.p];

                          function Dw(GG) {
                            return Tw().getPage(GG.id).parts.length > 0 ? `Read ${jw.f}, then the parts of the Bloxd Code API's ${GG.title} page it lists, so I can ask questions about it.` : `Read ${Pw.d}${(0,jw.m)(GG.slug)} so I can ask questions about it. ${Hw.n}`
                          }

                          function Nw(GG) {
                            let {
                              page: bG
                            } = GG;
                            const [ZG, wG] = rG();
                            return (0, KG.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, KG.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  wG(Tw().getPage(bG.id).markdown)
                                },
                                children: [(0, KG.jsx)(dG, {
                                  name: !1 === (null === ZG || void 0 === ZG ? void 0 : ZG.failed) ? "check" : "copy"
                                }), (0, KG.jsx)("span", {
                                  children: ZG ? ZG.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), tw.map((GG => (0, KG.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, Hw.e)(GG, Dw(bG)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, KG.jsx)(dG, {
                                  name: "external-link"
                                }), (0, KG.jsxs)("span", {
                                  children: ["Open in ", GG.name]
                                })]
                              }, GG.name)))]
                            })
                          }

                          function Ow(GG) {
                            return `#${[0,1,2].map((bG=>Math.round(Math.min(255,Math.max(0,GG[bG]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function xw(GG) {
                            return [parseInt(GG.slice(1, 3), 16), parseInt(GG.slice(3, 5), 16), parseInt(GG.slice(5, 7), 16)]
                          }

                          function Bw(GG) {
                            let {
                              label: bG,
                              min: ZG,
                              max: wG,
                              step: SG,
                              low: LG,
                              high: yG,
                              onChange: kG
                            } = GG;
                            return (0, KG.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KG.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KG.jsx)("span", {
                                  children: bG
                                }), (0, KG.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: LG === yG ? LG : `${LG}\u2013${yG}`
                                })]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, KG.jsx)("input", {
                                  type: "range",
                                  min: ZG,
                                  max: wG,
                                  step: SG,
                                  value: Math.min(wG, LG),
                                  "aria-label": `Minimum ${bG.toLowerCase()}`,
                                  onChange: GG => {
                                    const bG = Number(GG.target.value);
                                    kG(bG, Math.max(bG, yG))
                                  }
                                }), (0, KG.jsx)("input", {
                                  type: "range",
                                  min: ZG,
                                  max: wG,
                                  step: SG,
                                  value: Math.min(wG, yG),
                                  "aria-label": `Maximum ${bG.toLowerCase()}`,
                                  onChange: GG => {
                                    const bG = Number(GG.target.value);
                                    kG(Math.min(bG, LG), bG)
                                  }
                                })]
                              })]
                            })
                          }

                          function GS(GG) {
                            let {
                              label: bG,
                              min: ZG,
                              max: wG,
                              step: SG,
                              value: LG,
                              onChange: yG,
                              format: kG = String
                            } = GG;
                            return (0, KG.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KG.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KG.jsx)("span", {
                                  children: bG
                                }), (0, KG.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: kG(LG)
                                })]
                              }), (0, KG.jsx)("input", {
                                type: "range",
                                min: ZG,
                                max: wG,
                                step: SG,
                                value: Math.min(wG, Math.max(ZG, LG)),
                                "aria-label": bG,
                                onChange: GG => {
                                  yG(Number(GG.target.value))
                                }
                              })]
                            })
                          }

                          function bS(GG) {
                            let {
                              opts: bG,
                              onChange: ZG
                            } = GG;
                            const wG = bG.colorGradients;
                            if (!eZ(wG)) return (0, KG.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KG.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, KG.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, KG.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: wG.map(((GG, bG) => (0, KG.jsx)("input", {
                                  type: "color",
                                  value: Ow(GG.color),
                                  "aria-label": `Colour ${bG+1}`,
                                  onChange: GG => {
                                    const SG = [...wG];
                                    SG[bG] = {
                                      color: xw(GG.target.value)
                                    }, ZG(SG)
                                  }
                                }, bG)))
                              })]
                            });
                            const SG = (GG, bG) => {
                              const SG = [...wG];
                              SG[GG] = bG, ZG(SG)
                            };
                            return (0, KG.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, KG.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, KG.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, KG.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), wG.map(((GG, bG) => {
                                var ZG;
                                const wG = null !== (ZG = GG.maxColor) && void 0 !== ZG ? ZG : GG.minColor;
                                return (0, KG.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, KG.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * GG.timeFraction), "%"]
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Ow(GG.minColor)}, ${Ow(wG)})`
                                    }
                                  }), (0, KG.jsx)("input", {
                                    type: "color",
                                    value: Ow(GG.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*GG.timeFraction)}%`,
                                    onChange: ZG => {
                                      SG(bG, {
                                        ...GG,
                                        minColor: [...xw(ZG.target.value), GG.minColor[3]]
                                      })
                                    }
                                  }), (0, KG.jsx)("input", {
                                    type: "color",
                                    value: Ow(wG),
                                    "aria-label": `Maximum colour at ${Math.round(100*GG.timeFraction)}%`,
                                    onChange: ZG => {
                                      SG(bG, {
                                        ...GG,
                                        maxColor: [...xw(ZG.target.value), wG[3]]
                                      })
                                    }
                                  })]
                                }, bG)
                              }))]
                            })
                          }
                          const ZS = [-.5, -.5, -.5],
                            wS = [.5, .5, .5],
                            SS = [0, 1, 2, 3, 4, 5, 6, 7].map((GG => [1 & GG ? wS[0] : ZS[0], 2 & GG ? wS[1] : ZS[1], 4 & GG ? wS[2] : ZS[2]]));class LS {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(GG, bG, ZG, wG) {
                              const SG = Math.round(31 * bG),
                                LG = Math.round(31 * ZG),
                                yG = Math.round(31 * wG),
                                kG = `${SG}|${LG}|${yG}`;
                              let UG = this.tints.get(GG);
                              (!UG || UG.size > 2e3) && (UG = new Map, this.tints.set(GG, UG));
                              let YG = UG.get(kG);
                              if (YG) return YG;
                              YG = document.createElement("canvas"), YG.width = GG.naturalWidth || 16, YG.height = GG.naturalHeight || 16;
                              const VG = YG.getContext("2d");
                              return VG ? (VG.imageSmoothingEnabled = !1, VG.drawImage(GG, 0, 0, YG.width, YG.height), VG.globalCompositeOperation = "multiply", VG.fillStyle = `rgb(${SG/31*255}, ${LG/31*255}, ${yG/31*255})`, VG.fillRect(0, 0, YG.width, YG.height), VG.globalCompositeOperation = "destination-in", VG.drawImage(GG, 0, 0, YG.width, YG.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), UG.set(kG, YG), YG
                            }
                          }

                          function yS(GG) {
                            let {
                              opts: bG,
                              textureUrl: ZG,
                              burst: SG,
                              paused: LG
                            } = GG;
                            const yG = (0, wG.useRef)(null),
                              kG = (0, wG.useRef)(bG);
                            kG.current = bG;
                            const UG = (0, wG.useRef)(LG);
                            UG.current = LG;
                            const YG = (0, wG.useRef)(null),
                              VG = (0, wG.useRef)(null),
                              pG = (0, wG.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(GG) {
                                let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ZG = [-.5, -.5, -.5],
                                  wG = [.5, .5, .5];
                                let SG = .5;
                                for (let LG = 0; LG < 40; LG++) {
                                  const LG = TZ(GG, ZG, wG, bG),
                                    yG = Math.max(LG.life / 30, .001);
                                  for (; DZ(LG, GG.gravity, yG);) SG = Math.max(SG, Math.hypot(LG.pos[0], LG.pos[1], LG.pos[2]) + LG.size / 2)
                                }
                                return SG
                              }(bG)))), [bG]),
                              fG = (0, wG.useRef)(pG);
                            return fG.current = pG, (0, wG.useEffect)((() => {
                              if (YG.current = null, !ZG) return;
                              const GG = new Image;
                              let bG = !1;
                              return GG.onload = () => {
                                bG || (YG.current = GG)
                              }, GG.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ZG}`)
                              }, GG.src = ZG, () => {
                                bG = !0
                              }
                            }), [ZG]), (0, wG.useEffect)((() => {
                              var GG;
                              null === (GG = VG.current) || void 0 === GG || GG.call(VG)
                            }), [bG, SG]), (0, wG.useEffect)((() => {
                              const GG = yG.current,
                                bG = null === GG || void 0 === GG ? void 0 : GG.getContext("2d");
                              if (!GG || !bG) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ZG = new LS;
                              let wG = [],
                                SG = 0,
                                LG = -.7,
                                pG = fG.current,
                                QG = performance.now(),
                                KG = 0,
                                hG = !0,
                                dG = null;
                              const JG = () => {
                                const GG = kG.current,
                                  bG = Math.min(400, Math.max(0, Math.ceil(GG.manualEmitCount)));
                                wG = [];
                                for (let ZG = 0; ZG < bG; ZG++) wG.push(TZ(GG, ZS, wS, Math.random));
                                SG = 0
                              };
                              VG.current = JG, JG();
                              const rG = yG => {
                                KG = requestAnimationFrame(rG);
                                const VG = Math.min(.05, (yG - QG) / 1e3);
                                if (QG = yG, !hG) return;
                                const zG = window.devicePixelRatio || 1,
                                  EG = Math.round(GG.clientWidth * zG),
                                  oG = Math.round(GG.clientHeight * zG);
                                if (0 === EG || 0 === oG) return;
                                GG.width === EG && GG.height === oG || (GG.width = EG, GG.height = oG);
                                const XG = kG.current;
                                null === dG && (LG += .18 * VG), pG += (fG.current - pG) * Math.min(1, 4 * VG);
                                const uG = .6 * VG;
                                wG = wG.filter((GG => DZ(GG, XG.gravity, uG))), 0 !== wG.length || UG.current || (SG += VG, SG > .6 && JG());
                                const iG = function(GG, bG, ZG, wG) {
                                  const SG = 3.2 * wG,
                                    LG = .44 * Math.min(GG, bG) * SG / wG,
                                    yG = Math.cos(ZG),
                                    kG = Math.sin(ZG),
                                    UG = Math.cos(.42),
                                    YG = Math.sin(.42);
                                  return (ZG, wG, VG) => {
                                    const pG = ZG * kG + VG * yG,
                                      fG = SG - (wG * YG + pG * UG);
                                    if (fG < .05) return null;
                                    const QG = LG / fG;
                                    return {
                                      x: GG / 2 + (ZG * yG - VG * kG) * QG,
                                      y: bG / 2 - (wG * UG - pG * YG) * QG,
                                      scale: QG,
                                      depth: fG
                                    }
                                  }
                                }(EG, oG, LG, pG);
                                ! function(GG, bG, ZG, wG, SG) {
                                  const LG = GG.createLinearGradient(0, 0, 0, ZG);
                                  LG.addColorStop(0, "#23262d"), LG.addColorStop(1, "#16181c"), GG.globalCompositeOperation = "source-over", GG.globalAlpha = 1, GG.fillStyle = LG, GG.fillRect(0, 0, bG, ZG);
                                  const yG = (bG, ZG) => {
                                      const SG = wG(bG[0], bG[1], bG[2]),
                                        LG = wG(ZG[0], ZG[1], ZG[2]);
                                      SG && LG && (GG.beginPath(), GG.moveTo(SG.x, SG.y), GG.lineTo(LG.x, LG.y), GG.stroke())
                                    },
                                    kG = Math.ceil(SG) + 1,
                                    UG = ZS[1];
                                  GG.lineWidth = 1, GG.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let YG = -kG; YG <= kG; YG++) yG([YG + .5, UG, .5 - kG], [YG + .5, UG, kG + .5]), yG([.5 - kG, UG, YG + .5], [kG + .5, UG, YG + .5]);
                                  GG.strokeStyle = "rgba(255, 255, 255, 0.28)", GG.setLineDash([4, 4]);
                                  for (const YG of SS)
                                    for (const GG of SS) {
                                      const bG = [0, 1, 2].filter((bG => YG[bG] !== GG[bG]));
                                      1 === bG.length && YG[bG[0]] < GG[bG[0]] && yG(YG, GG)
                                    }
                                  GG.setLineDash([])
                                }(bG, EG, oG, iG, pG);
                                const CG = YG.current,
                                  WG = wG.map((GG => ({
                                    particle: GG,
                                    at: iG(GG.pos[0], GG.pos[1], GG.pos[2])
                                  }))).filter((GG => null !== GG.at)).sort(((GG, bG) => bG.at.depth - GG.at.depth));
                                bG.imageSmoothingEnabled = !1;
                                for (const GG of function(GG) {
                                    switch (GG) {
                                      case AZ.c.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case AZ.c.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case AZ.c.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case AZ.c.MultiplyAdd:
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
                                  }(XG.blendMode)) {
                                  bG.globalCompositeOperation = GG.operation;
                                  for (const {
                                      particle: wG,
                                      at: SG
                                    }
                                    of WG) {
                                    const [LG, yG, kG, UG] = tZ(wG), YG = Math.max(1, wG.size * SG.scale);
                                    bG.globalAlpha = GG.usesAlpha ? Math.min(1, Math.max(0, UG)) : 1, CG ? bG.drawImage(ZG.get(CG, LG, yG, kG), SG.x - YG / 2, SG.y - YG / 2, YG, YG) : (bG.fillStyle = `rgb(${255*LG}, ${255*yG}, ${255*kG})`, bG.fillRect(SG.x - YG / 2, SG.y - YG / 2, YG, YG))
                                  }
                                }
                                bG.globalCompositeOperation = "source-over", bG.globalAlpha = 1
                              };
                              KG = requestAnimationFrame(rG);
                              const zG = new IntersectionObserver((GG => {
                                let [bG] = GG;
                                hG = bG.isIntersecting
                              }));
                              zG.observe(GG);
                              const EG = bG => {
                                  dG = bG.clientX, GG.setPointerCapture(bG.pointerId)
                                },
                                oG = GG => {
                                  null !== dG && (LG += .01 * (GG.clientX - dG), dG = GG.clientX)
                                },
                                XG = () => {
                                  dG = null
                                };
                              return GG.addEventListener("pointerdown", EG), GG.addEventListener("pointermove", oG), GG.addEventListener("pointerup", XG), GG.addEventListener("pointercancel", XG), () => {
                                cancelAnimationFrame(KG), zG.disconnect(), VG.current = null, GG.removeEventListener("pointerdown", EG), GG.removeEventListener("pointermove", oG), GG.removeEventListener("pointerup", XG), GG.removeEventListener("pointercancel", XG)
                              }
                            }), []), (0, KG.jsx)("canvas", {
                              ref: yG,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${bG.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const kS = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            US = [{
                              mode: AZ.c.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: AZ.c.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: AZ.c.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: AZ.c.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: AZ.c.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            YS = (0, wG.forwardRef)((function(GG, bG) {
                              var ZG, SG;
                              let {
                                textures: yG
                              } = GG;
                              const kG = zw(),
                                UG = (0, wG.useRef)(null),
                                [YG, VG] = (0, wG.useState)(qZ),
                                [pG, fG] = (0, wG.useState)("example"),
                                [QG, hG] = (0, wG.useState)(0),
                                [JG, rG] = (0, wG.useState)(!1),
                                EG = GG => {
                                  const bG = "example" === GG ? qZ : sZ(GG);
                                  bG && (VG(bG), fG(GG))
                                };
                              (0, wG.useImperativeHandle)(bG, (() => ({
                                preview: GG => {
                                  var bG;
                                  EG(GG), null === (bG = UG.current) || void 0 === bG || bG.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const oG = GG => {
                                  VG({
                                    ...YG,
                                    ...GG
                                  }), fG(null)
                                },
                                XG = function(GG, bG) {
                                  if (null !== bG) return `${BZ}    presetId: "${bG}",\n${Gw}\n})`;
                                  const ZG = GG.velocityGradients.map((GG => `        {\n            timeFraction: ${NZ(GG.timeFraction)},\n            factor: ${NZ(GG.factor)},\n            factor2: ${NZ(GG.factor2)},\n        },`)),
                                    wG = [`    dir1: ${OZ(GG.dir1)},`, `    dir2: ${OZ(GG.dir2)},`, Gw, `    texture: "${GG.texture}",`, `    minLifeTime: ${NZ(GG.minLifeTime)},`, `    maxLifeTime: ${NZ(GG.maxLifeTime)},`, `    minEmitPower: ${NZ(GG.minEmitPower)},`, `    maxEmitPower: ${NZ(GG.maxEmitPower)},`, `    minSize: ${NZ(GG.minSize)},`, `    maxSize: ${NZ(GG.maxSize)},`, `    manualEmitCount: ${NZ(GG.manualEmitCount)},`, `    gravity: ${OZ(GG.gravity)},`, `    colorGradients: ${xZ(GG.colorGradients,"    ")},`, `    velocityGradients: ${ZG.length>0?`[\n${ZG.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${NZ(GG.blendMode)},`];
                                  return void 0 !== GG.hideDist && wG.push(`    hideDist: ${NZ(GG.hideDist)},`), `${BZ}${wG.join("\n")}\n})`
                                }(YG, null === pG || "example" === pG ? null : pG),
                                iG = yG.includes(YG.texture) ? yG : [...yG, YG.texture];
                              return (0, KG.jsxs)("section", {
                                ref: UG,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, KG.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, KG.jsxs)("div", {
                                    children: [(0, KG.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, KG.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, KG.jsx)(zG, {
                                    text: XG,
                                    label: "Copy code"
                                  })]
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, KG.jsx)("button", {
                                    type: "button",
                                    className: LG()("DocsVariantChip", {
                                      Active: "example" === pG
                                    }),
                                    onClick: () => {
                                      EG("example")
                                    },
                                    children: "Example"
                                  }), kS.filter((GG => null !== sZ(GG))).map((GG => (0, KG.jsx)("button", {
                                    type: "button",
                                    className: LG()("DocsVariantChip", {
                                      Active: pG === GG
                                    }),
                                    onClick: () => {
                                      EG(GG)
                                    },
                                    children: GG
                                  }, GG))), (0, KG.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== pG && void 0 !== pG ? pG : "custom",
                                    "aria-label": "Preset",
                                    onChange: GG => {
                                      EG(GG.target.value)
                                    },
                                    children: [(0, KG.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === pG && (0, KG.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), MZ.e.map((GG => (0, KG.jsx)("option", {
                                      value: GG,
                                      children: GG
                                    }, GG)))]
                                  })]
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, KG.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, KG.jsx)(yS, {
                                      opts: YG,
                                      textureUrl: null !== (ZG = null === kG || void 0 === kG ? void 0 : kG.getParticleTextureUrl(YG.texture)) && void 0 !== ZG ? ZG : null,
                                      burst: QG,
                                      paused: JG
                                    }), (0, KG.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, KG.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          hG(QG + 1)
                                        },
                                        children: [(0, KG.jsx)(dG, {
                                          name: "replay"
                                        }), (0, KG.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, KG.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": JG,
                                        onClick: () => {
                                          rG(!JG)
                                        },
                                        children: [(0, KG.jsx)(dG, {
                                          name: JG ? "play" : "pause"
                                        }), (0, KG.jsx)("span", {
                                          children: JG ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, KG.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, KG.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, KG.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, KG.jsx)("span", {
                                          children: "Texture"
                                        }), (0, KG.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: YG.texture
                                        })]
                                      }), (0, KG.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: iG.map((GG => {
                                          var bG;
                                          const ZG = null !== (bG = null === kG || void 0 === kG ? void 0 : kG.getParticleTextureUrl(GG)) && void 0 !== bG ? bG : null;
                                          return (0, KG.jsx)("button", {
                                            type: "button",
                                            className: LG()("DocsParticleTexture", {
                                              Active: YG.texture === GG
                                            }),
                                            title: GG,
                                            "aria-label": GG,
                                            "aria-pressed": YG.texture === GG,
                                            onClick: () => {
                                              oG({
                                                texture: GG
                                              })
                                            },
                                            children: ZG ? (0, KG.jsx)("img", {
                                              src: ZG,
                                              alt: ""
                                            }) : (0, KG.jsx)(dG, {
                                              name: "image"
                                            })
                                          }, GG)
                                        }))
                                      })]
                                    }), (0, KG.jsx)(GS, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: YG.manualEmitCount,
                                      onChange: GG => {
                                        oG({
                                          manualEmitCount: GG
                                        })
                                      }
                                    }), (0, KG.jsx)(Bw, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: YG.minLifeTime,
                                      high: YG.maxLifeTime,
                                      onChange: (GG, bG) => {
                                        oG({
                                          minLifeTime: GG,
                                          maxLifeTime: bG
                                        })
                                      }
                                    }), (0, KG.jsx)(Bw, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: YG.minEmitPower,
                                      high: YG.maxEmitPower,
                                      onChange: (GG, bG) => {
                                        oG({
                                          minEmitPower: GG,
                                          maxEmitPower: bG
                                        })
                                      }
                                    }), (0, KG.jsx)(Bw, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: YG.minSize,
                                      high: YG.maxSize,
                                      onChange: (GG, bG) => {
                                        oG({
                                          minSize: GG,
                                          maxSize: bG
                                        })
                                      }
                                    }), (0, KG.jsx)(GS, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (SG = YG.gravity[1]) && void 0 !== SG ? SG : 0,
                                      onChange: GG => {
                                        var bG, ZG;
                                        oG({
                                          gravity: [null !== (bG = YG.gravity[0]) && void 0 !== bG ? bG : 0, GG, null !== (ZG = YG.gravity[2]) && void 0 !== ZG ? ZG : 0]
                                        })
                                      }
                                    }), (0, KG.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, KG.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, KG.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, KG.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: YG.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: GG => {
                                          oG({
                                            blendMode: Number(GG.target.value)
                                          })
                                        },
                                        children: US.map((GG => {
                                          let {
                                            mode: bG,
                                            label: ZG
                                          } = GG;
                                          return (0, KG.jsx)("option", {
                                            value: bG,
                                            children: ZG
                                          }, bG)
                                        }))
                                      })]
                                    }), (0, KG.jsx)(bS, {
                                      opts: YG,
                                      onChange: GG => {
                                        oG({
                                          colorGradients: GG
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, KG.jsx)(uG, {
                                  code: XG,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var VS = ZG(4487),
                            pS = ZG(1876);

                          function fS(GG, bG) {
                            return GG ? VS.b.includes(bG) ? GG.getIngameIconUrl(bG) : GG.getItemIconUrl(bG) : null
                          }

                          function QS(GG) {
                            var bG, ZG, wG;
                            let {
                              part: SG,
                              assets: yG
                            } = GG;
                            const kG = fS(yG, SG.icon),
                              UG = null !== (bG = null === (ZG = SG.style) || void 0 === ZG ? void 0 : ZG.fontSize) && void 0 !== bG ? bG : "1.8em",
                              YG = (0, Mb.qc)(SG.style);
                            return (0, KG.jsxs)("span", {
                              className: LG()("DocsBloxdTextIcon", {
                                Missing: !kG
                              }),
                              style: {
                                width: UG,
                                height: UG,
                                opacity: null === (wG = SG.style) || void 0 === wG ? void 0 : wG.opacity
                              },
                              title: kG ? void 0 : `No Bloxd icon, item or block is called "${SG.icon}"`,
                              children: [kG && YG && (0, KG.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: YG,
                                  maskImage: `url("${kG}")`,
                                  WebkitMaskImage: `url("${kG}")`
                                }
                              }), kG ? (0, KG.jsx)("img", {
                                src: kG,
                                alt: "",
                                className: LG()({
                                  Tinted: YG
                                })
                              }) : (0, KG.jsx)(dG, {
                                name: "image"
                              })]
                            })
                          }

                          function KS(GG) {
                            let {
                              parts: bG,
                              className: ZG
                            } = GG;
                            const wG = zw(),
                              SG = [];
                            let yG = [];
                            const kG = GG => {
                              yG.length > 0 && (SG.push((0, KG.jsx)(pS.c, {
                                text: yG
                              }, `run-${GG}`)), yG = [])
                            };
                            return bG.forEach(((GG, bG) => {
                              "icon" !== gb(GG) || sb(GG.icon) ? yG.push(GG) : (kG(bG), SG.push((0, KG.jsx)(QS, {
                                part: GG,
                                assets: wG
                              }, `icon-${bG}`)))
                            })), kG(bG.length), (0, KG.jsx)("div", {
                              className: LG()("DocsStyledTextPreview", ZG),
                              children: SG
                            })
                          }
                          const hS = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let dS = null;

                          function JS(GG) {
                            if (dS ??= document.createElement("canvas").getContext("2d"), !dS) return "#000000";
                            dS.fillStyle = "#000000", dS.fillStyle = GG;
                            const bG = dS.fillStyle;
                            return bG.startsWith("#") ? bG : "#000000"
                          }

                          function rS(GG) {
                            let {
                              value: bG,
                              label: ZG,
                              onChange: wG
                            } = GG;
                            return (0, KG.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, KG.jsx)("input", {
                                type: "color",
                                value: JS(bG),
                                "aria-label": `${ZG} picker`,
                                onChange: GG => {
                                  wG(GG.target.value)
                                }
                              }), (0, KG.jsx)("input", {
                                type: "text",
                                value: bG,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ZG,
                                spellCheck: !1,
                                onChange: GG => {
                                  wG(GG.target.value)
                                }
                              })]
                            })
                          }

                          function zS(GG) {
                            let {
                              value: bG,
                              fontAwesomeIcons: ZG,
                              onChange: SG
                            } = GG;
                            const yG = zw(),
                              [kG, UG] = (0, wG.useState)(sb(bG) ? "fontAwesome" : "bloxd"),
                              [YG, VG] = (0, wG.useState)(""),
                              pG = YG.trim().toLowerCase(),
                              fG = "bloxd" === kG ? VS.b : ZG,
                              QG = pG ? fG.filter((GG => GG.toLowerCase().includes(pG))) : fG;
                            return (0, KG.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, KG.jsx)("input", {
                                type: "text",
                                value: bG,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: GG => {
                                  SG(GG.target.value)
                                }
                              }), (0, KG.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, KG.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((GG => (0, KG.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": kG === GG,
                                    className: LG()("DocsVariantChip", {
                                      Active: kG === GG
                                    }),
                                    onClick: () => {
                                      UG(GG)
                                    },
                                    children: "bloxd" === GG ? `Bloxd icons (${VS.b.length})` : `Font Awesome (${ZG.length})`
                                  }, GG))), (0, KG.jsx)("input", {
                                    type: "search",
                                    value: YG,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: GG => {
                                      VG(GG.target.value)
                                    }
                                  })
                                ]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [QG.map((GG => {
                                  const ZG = "bloxd" === kG ? fS(yG, GG) : null;
                                  return (0, KG.jsx)("button", {
                                    type: "button",
                                    title: GG,
                                    "aria-label": GG,
                                    "aria-pressed": GG === bG,
                                    className: LG()("DocsIconPickerOption", {
                                      Active: GG === bG
                                    }),
                                    onClick: () => {
                                      SG(GG)
                                    },
                                    children: "fontAwesome" === kG ? (0, KG.jsx)(EZ.c, {
                                      name: GG
                                    }) : ZG ? (0, KG.jsx)("img", {
                                      src: ZG,
                                      alt: ""
                                    }) : (0, KG.jsx)(dG, {
                                      name: "image"
                                    })
                                  }, GG)
                                })), 0 === QG.length && (0, KG.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", YG, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function ES(GG) {
                            let {
                              property: bG,
                              value: ZG,
                              fontAwesomeIcons: wG,
                              onChange: SG
                            } = GG;
                            const {
                              field: LG,
                              label: yG
                            } = bG, kG = GG => "" !== GG || bG.isRequired ? GG : void 0;
                            switch (LG.kind) {
                              case "text":
                                return LG.multiline ? (0, KG.jsx)("textarea", {
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  rows: 2,
                                  "aria-label": yG,
                                  onChange: GG => {
                                    SG(GG.target.value)
                                  }
                                }) : (0, KG.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  "aria-label": yG,
                                  onChange: GG => {
                                    SG(kG(GG.target.value))
                                  }
                                });
                              case "size":
                                return (0, KG.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  placeholder: bG.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": yG,
                                  spellCheck: !1,
                                  onChange: GG => {
                                    SG(kG(GG.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, KG.jsx)(rS, {
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  label: yG,
                                  onChange: GG => {
                                    SG(kG(GG))
                                  }
                                });
                              case "colours": {
                                const GG = Array.isArray(ZG) ? ZG : [],
                                  bG = GG => {
                                    SG(GG.length > 0 ? GG : void 0)
                                  };
                                return (0, KG.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [GG.map(((ZG, wG) => (0, KG.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, KG.jsx)(rS, {
                                      value: ZG,
                                      label: `${yG} ${wG+1}`,
                                      onChange: ZG => {
                                        bG(GG.map(((GG, bG) => bG === wG ? ZG : GG)))
                                      }
                                    }), (0, KG.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${wG+1}`,
                                      onClick: () => {
                                        bG(GG.filter(((GG, bG) => bG !== wG)))
                                      },
                                      children: (0, KG.jsx)(dG, {
                                        name: "cross"
                                      })
                                    })]
                                  }, wG))), (0, KG.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ZG;
                                      bG([...GG, null !== (ZG = GG.at(-1)) && void 0 !== ZG ? ZG : "#ffffff"])
                                    },
                                    children: [(0, KG.jsx)(dG, {
                                      name: "plus"
                                    }), 0 === GG.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var UG;
                                const GG = "number" === typeof ZG ? ZG : Number(null !== (UG = bG.defaultText) && void 0 !== UG ? UG : 0);
                                return (0, KG.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, KG.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: GG,
                                    "aria-label": yG,
                                    onChange: GG => {
                                      SG(Number(GG.target.value))
                                    }
                                  }), (0, KG.jsx)("output", {
                                    children: GG.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, KG.jsxs)("select", {
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  "aria-label": yG,
                                  onChange: GG => {
                                    SG(kG(GG.target.value))
                                  },
                                  children: [!bG.isRequired && (0, KG.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", bG.defaultText, ")"]
                                  }), LG.options.map((GG => (0, KG.jsx)("option", {
                                    value: GG,
                                    children: GG
                                  }, GG)))]
                                });
                              case "icon":
                                return (0, KG.jsx)(zS, {
                                  value: String(null !== ZG && void 0 !== ZG ? ZG : ""),
                                  fontAwesomeIcons: wG,
                                  onChange: SG
                                })
                            }
                          }

                          function oS(GG) {
                            let bG;
                            try {
                              bG = JSON.parse(GG)
                            } catch (ZG) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ZG.message}`
                              }
                            }
                            return ZZ(bG) ? {
                              part: bG,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function XS(GG) {
                            let {
                              parts: bG,
                              index: ZG,
                              fontAwesomeIcons: SG,
                              onChange: LG,
                              MI: yG,
                              onClose: kG
                            } = GG;
                            const UG = (0, wG.useContext)(Kb),
                              VG = (0, wG.useRef)(null),
                              pG = bG[ZG],
                              fG = gb(pG),
                              [QG, hG] = (0, wG.useState)((() => JSON.stringify(pG, null, 2))),
                              JG = (0, wG.useMemo)((() => "other" === fG ? oS(QG).error : null), [fG, QG]);
                            (0, wG.useEffect)((() => {
                              var GG;
                              null === (GG = VG.current) || void 0 === GG || GG.focus()
                            }), []);
                            const rG = (0, KG.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: GG => {
                                GG.target === GG.currentTarget && kG()
                              },
                              children: (0, KG.jsxs)("div", {
                                ref: VG,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ZG+1}: ${qb[fG]}`,
                                tabIndex: -1,
                                onKeyDown: GG => {
                                  "Escape" === GG.key ? (GG.stopPropagation(), kG()) : "Tab" === GG.key && VG.current && function(GG, bG) {
                                    const ZG = Array.from(GG.querySelectorAll(Ib)),
                                      wG = ZG[0],
                                      SG = ZG.at(-1);
                                    if (!wG || !SG) return;
                                    const LG = document.activeElement;
                                    !bG.shiftKey || LG !== wG && LG !== GG ? bG.shiftKey || LG !== SG || (bG.preventDefault(), wG.focus()) : (bG.preventDefault(), SG.focus())
                                  }(VG.current, GG)
                                },
                                children: [(0, KG.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, KG.jsxs)("div", {
                                    children: [(0, KG.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ZG + 1]
                                    }), (0, KG.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: qb[fG]
                                    })]
                                  }), (0, KG.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: kG,
                                    children: (0, KG.jsx)(dG, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, KG.jsx)(KS, {
                                  parts: bG,
                                  className: "DocsTextDialogPreview"
                                }), (0, KG.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === fG ? (0, KG.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, KG.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, KG.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: QG,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: GG => {
                                        hG(GG.target.value);
                                        const bG = oS(GG.target.value);
                                        null !== bG.part && LG(bG.part)
                                      }
                                    }), JG && (0, KG.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: JG
                                    })]
                                  }) : Rb[fG].map((GG => {
                                    const bG = Hb(pG, GG.path),
                                      ZG = GG.isRequired ? JSON.stringify(Db(pG, GG.path)) === JSON.stringify(pG) : void 0 === bG;
                                    return (0, KG.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, KG.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, KG.jsx)("span", {
                                          children: GG.label
                                        }), (0, KG.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ZG,
                                          "aria-label": `Reset ${GG.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            LG(Db(pG, GG.path))
                                          },
                                          children: [(0, KG.jsx)(dG, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, KG.jsx)(ES, {
                                        property: GG,
                                        value: bG,
                                        fontAwesomeIcons: SG,
                                        onChange: bG => {
                                          LG(tb(pG, GG.path, bG))
                                        }
                                      }), !GG.isRequired && (0, KG.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", GG.defaultText]
                                      })]
                                    }, GG.path.join("."))
                                  }))
                                }), (0, KG.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, KG.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: yG,
                                    children: [(0, KG.jsx)(dG, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, KG.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: kG,
                                    children: "Done"
                                  })]
                                }), (0, KG.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: hS.map((GG => (0, KG.jsx)("option", {
                                    value: GG
                                  }, GG)))
                                })]
                              })
                            });
                            return UG ? (0, YG.createPortal)(rG, UG) : rG
                          }
                          const uS = [{
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
                            iS = Object.keys(nb);

                          function CS(GG) {
                            let {
                              fontAwesomeIcons: bG
                            } = GG;
                            const [ZG, SG] = (0, wG.useState)(uS[0].parts), [yG, kG] = (0, wG.useState)((() => Bb(uS[0].parts))), [UG, YG] = (0, wG.useState)(null), [VG, pG] = (0, wG.useState)(!1), [fG, QG] = (0, wG.useState)(null), [hG, JG] = (0, wG.useState)(!1), [rG, zG] = (0, wG.useState)(null), EG = (0, wG.useRef)(null), oG = Bb(ZG);
                            (0, wG.useLayoutEffect)((() => {
                              var GG;
                              if (!rG) return;
                              const bG = GG => {
                                  var bG;
                                  return null === (bG = EG.current) || void 0 === bG ? void 0 : bG.querySelector(`[data-focus-key="${GG}"]`)
                                },
                                ZG = bG(rG.key);
                              null === (GG = ZG && !ZG.disabled ? ZG : bG(rG.fallback)) || void 0 === GG || GG.focus(), zG(null)
                            }), [rG]);
                            const XG = GG => {
                                SG(GG), kG(Bb(GG)), YG(null)
                              },
                              iG = GG => {
                                XG(ZG.filter(((bG, ZG) => ZG !== GG))), zG({
                                  key: `edit-${Math.min(GG,ZG.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              CG = (GG, bG) => {
                                const wG = [...ZG],
                                  [SG] = wG.splice(GG, 1);
                                wG.splice(GG + bG, 0, SG), XG(wG);
                                zG({
                                  key: `${bG<0?"up":"down"}-${GG+bG}`,
                                  fallback: `edit-${GG+bG}`
                                })
                              };
                            return (0, KG.jsxs)("section", {
                              ref: EG,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, KG.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, KG.jsxs)("div", {
                                  children: [(0, KG.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, KG.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, KG.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: uS.map((GG => (0, KG.jsx)("button", {
                                  type: "button",
                                  className: LG()("DocsVariantChip", {
                                    Active: oG === Bb(GG.parts)
                                  }),
                                  onClick: () => {
                                    XG(GG.parts)
                                  },
                                  children: GG.label
                                }, GG.label)))
                              }), (0, KG.jsx)(KS, {
                                parts: ZG,
                                className: "DocsTextEditorPreview"
                              }), (0, KG.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, KG.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, KG.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, KG.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ZG.map(((GG, bG) => {
                                      const wG = gb(GG);
                                      return (0, KG.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, KG.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${bG}`,
                                          "aria-label": `Edit part ${bG+1}, ${qb[wG]}`,
                                          onClick: () => {
                                            QG(bG)
                                          },
                                          children: [(0, KG.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: qb[wG]
                                          }), (0, KG.jsx)(KS, {
                                            parts: [GG],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== wG && (0, KG.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Nb(GG)
                                          })]
                                        }), (0, KG.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, KG.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${bG+1} up`,
                                            "data-focus-key": `up-${bG}`,
                                            disabled: 0 === bG,
                                            onClick: () => {
                                              CG(bG, -1)
                                            },
                                            children: (0, KG.jsx)(dG, {
                                              name: "chevron-up"
                                            })
                                          }), (0, KG.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${bG+1} down`,
                                            "data-focus-key": `down-${bG}`,
                                            disabled: bG === ZG.length - 1,
                                            onClick: () => {
                                              CG(bG, 1)
                                            },
                                            children: (0, KG.jsx)(dG, {
                                              name: "chevron-down"
                                            })
                                          }), (0, KG.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${bG+1}`,
                                            onClick: () => {
                                              iG(bG)
                                            },
                                            children: (0, KG.jsx)(dG, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, bG)
                                    })), 0 === ZG.length && (0, KG.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, KG.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: GG => {
                                      "Escape" === GG.key && hG && (GG.stopPropagation(), JG(!1), zG({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, KG.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": hG,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        JG(!hG)
                                      },
                                      children: [(0, KG.jsx)(dG, {
                                        name: "plus"
                                      }), "Add a part", (0, KG.jsx)(dG, {
                                        name: hG ? "chevron-up" : "chevron-down"
                                      })]
                                    }), hG && (0, KG.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: iS.map((GG => (0, KG.jsx)("li", {
                                        children: (0, KG.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (GG => {
                                              XG([...ZG, nb[GG]]), JG(!1), QG(ZG.length)
                                            })(GG)
                                          },
                                          children: qb[GG]
                                        })
                                      }, GG)))
                                    })]
                                  })]
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, KG.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, KG.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": VG,
                                      onClick: () => {
                                        pG(!VG)
                                      },
                                      children: [(0, KG.jsx)(dG, {
                                        name: VG ? "check" : "pencil"
                                      }), VG ? "Done" : "Edit"]
                                    })]
                                  }), VG ? (0, KG.jsxs)(KG.Fragment, {
                                    children: [(0, KG.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: yG,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: GG => {
                                        kG(GG.target.value);
                                        const bG = wZ(GG.target.value);
                                        YG(bG.error), bG.parts && SG(bG.parts)
                                      }
                                    }), UG && (0, KG.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: UG
                                    })]
                                  }) : (0, KG.jsx)(uG, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${oG})`
                                  })]
                                })]
                              }), null !== fG && fG < ZG.length && (0, KG.jsx)(XS, {
                                parts: ZG,
                                index: fG,
                                fontAwesomeIcons: bG,
                                onChange: GG => {
                                  ((GG, bG) => {
                                    XG(ZG.map(((ZG, wG) => wG === GG ? bG : ZG)))
                                  })(fG, GG)
                                },
                                MI: () => {
                                  iG(fG), QG(null)
                                },
                                onClose: () => {
                                  QG(null), zG({
                                    key: `edit-${fG}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var WS = ZG(4871),
                            mS = ZG(4851),
                            IS = ZG(4864),
                            FS = ZG(4874);
                          const vS = 40,
                            aS = 800,
                            cS = 150,
                            lS = 8e3,
                            jS = 2e3;

                          function PS(GG, bG) {
                            return 12 * Math.log2(bG / GG)
                          }

                          function MS(GG, bG) {
                            return Math.round(GG * 2 ** (bG / 12) * 10) / 10
                          }

                          function AS(GG) {
                            return `${GG} ms`
                          }

                          function sS(GG) {
                            return `${GG} st`
                          }
                          const qS = [{
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

                          function nS(GG) {
                            let {
                              synth: bG,
                              onChange: ZG
                            } = GG;
                            const wG = (0, WS.i)(bG);
                            return (0, KG.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, KG.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KG.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, KG.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, KG.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, KG.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: WS.e.map((GG => (0, KG.jsx)("button", {
                                      type: "button",
                                      className: LG()("DocsVariantChip", {
                                        Active: bG.waveform === GG
                                      }),
                                      "aria-pressed": bG.waveform === GG,
                                      onClick: () => {
                                        ZG({
                                          waveform: GG
                                        })
                                      },
                                      children: GG
                                    }, GG)))
                                  })]
                                }), (0, KG.jsx)(GS, {
                                  label: "Pitch",
                                  min: 0,
                                  max: PS(vS, aS),
                                  step: .1,
                                  value: PS(vS, bG.pitchHz),
                                  format: () => `${bG.pitchHz} Hz`,
                                  onChange: GG => {
                                    ZG({
                                      pitchHz: MS(vS, GG)
                                    })
                                  }
                                }), (0, KG.jsx)(GS, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: bG.syllableMs,
                                  format: AS,
                                  onChange: GG => {
                                    ZG({
                                      syllableMs: GG
                                    })
                                  }
                                }), (0, KG.jsx)(GS, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: bG.volume,
                                  onChange: GG => {
                                    ZG({
                                      volume: GG
                                    })
                                  }
                                })]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KG.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, KG.jsx)(GS, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: bG.durationMs,
                                  format: AS,
                                  onChange: GG => {
                                    ZG({
                                      durationMs: GG
                                    })
                                  }
                                }), (0, KG.jsx)(GS, {
                                  label: "Fade in",
                                  min: 0,
                                  max: wG.durationMs,
                                  step: 1,
                                  value: wG.attackMs,
                                  format: AS,
                                  onChange: GG => {
                                    ZG({
                                      attackMs: GG
                                    })
                                  }
                                }), (0, KG.jsx)(GS, {
                                  label: "Fade out",
                                  min: 0,
                                  max: wG.durationMs - wG.attackMs,
                                  step: 1,
                                  value: wG.releaseMs,
                                  format: AS,
                                  onChange: GG => {
                                    ZG({
                                      releaseMs: GG
                                    })
                                  }
                                }), (0, KG.jsx)(GS, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: bG.glideSemitones,
                                  format: sS,
                                  onChange: GG => {
                                    ZG({
                                      glideSemitones: GG
                                    })
                                  }
                                }), (0, KG.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, KG.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== bG.lowpassHz,
                                    onChange: GG => {
                                      ZG({
                                        lowpassHz: GG.target.checked ? jS : null
                                      })
                                    }
                                  }), (0, KG.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== bG.lowpassHz && (0, KG.jsx)(GS, {
                                  label: "Filter",
                                  min: 0,
                                  max: PS(cS, lS),
                                  step: .1,
                                  value: PS(cS, bG.lowpassHz),
                                  format: () => `${bG.lowpassHz} Hz`,
                                  onChange: GG => {
                                    ZG({
                                      lowpassHz: MS(cS, GG)
                                    })
                                  }
                                })]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, KG.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), qS.map((GG => {
                                  let {
                                    key: wG,
                                    label: SG,
                                    max: LG
                                  } = GG;
                                  return (0, KG.jsx)(GS, {
                                    label: SG,
                                    min: 0,
                                    max: LG,
                                    step: .1,
                                    value: bG.intonation[wG],
                                    format: sS,
                                    onChange: GG => {
                                      ZG({
                                        intonation: {
                                          ...bG.intonation,
                                          [wG]: GG
                                        }
                                      })
                                    }
                                  }, wG)
                                }))]
                              })]
                            })
                          }
                          const gS = Object.keys(WS.g),
                            eS = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function RS(GG) {
                            var bG;
                            const ZG = JSON.stringify((0, WS.i)(GG));
                            return null !== (bG = gS.find((GG => JSON.stringify((0, WS.i)(WS.g[GG])) === ZG))) && void 0 !== bG ? bG : null
                          }

                          function TS(GG) {
                            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof GG || null === GG) return JSON.stringify(GG);
                            return `{\n${Object.entries(GG).map((GG=>{let[ZG,wG]=GG;return`${bG}    ${ZG}: ${TS(wG,`${bG}    `)},`})).join("\n")}\n${bG}}`
                          }

                          function HS(GG, bG, ZG) {
                            const wG = RS(GG),
                              SG = [`    line: ${JSON.stringify(bG)},`];
                            return ZG && SG.push(`    speakerName: ${JSON.stringify(ZG)},`), SG.push("    voice,"), `const voice = ${wG?JSON.stringify(wG):TS((0,WS.i)(GG))}\n\napi.setClientOption(playerId, "dialogue", {\n${SG.join("\n")}\n})`
                          }
                          const tS = 400,
                            DS = 90;
                          let NS = null;

                          function OS(GG, bG, ZG) {
                            return NS ??= new AudioContext, NS.resume(), (0, FS.b)(NS, NS.destination, GG, bG, ZG, (() => {}))
                          }

                          function xS() {
                            const [GG, bG] = (0, wG.useState)(WS.g.regular), [ZG, SG] = (0, wG.useState)(eS[0]), [yG, kG] = (0, wG.useState)("Innkeeper"), [UG, YG] = (0, wG.useState)(0), VG = Vw((GG => GG.volume)), pG = (0, wG.useRef)(null), fG = (0, wG.useRef)(0), QG = (0, wG.useRef)(0), hG = () => {
                              var GG;
                              null === (GG = pG.current) || void 0 === GG || GG.call(pG), pG.current = null
                            };
                            (0, wG.useEffect)((() => () => {
                              var GG;
                              null === (GG = pG.current) || void 0 === GG || GG.call(pG), window.clearTimeout(fG.current)
                            }), []);
                            const JG = (0, wG.useMemo)((() => ({
                                line: ZG,
                                speakerName: yG || void 0,
                                voice: GG
                              })), [ZG, yG, GG]),
                              rG = (0, wG.useRef)(JG);
                            rG.current = JG;
                            const EG = RS(GG),
                              oG = GG => {
                                window.clearTimeout(fG.current), hG();
                                const {
                                  plan: bG,
                                  synth: ZG
                                } = (0, IS.f)(GG);
                                ZG && (pG.current = OS(ZG, bG.blips, VG)), YG((GG => GG + 1))
                              },
                              XG = HS(GG, ZG, yG);
                            return (0, KG.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, KG.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, KG.jsxs)("div", {
                                  children: [(0, KG.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, KG.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, KG.jsx)(zG, {
                                  text: XG,
                                  label: "Copy code"
                                })]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [gS.map((GG => (0, KG.jsx)("button", {
                                  type: "button",
                                  className: LG()("DocsVariantChip", {
                                    Active: EG === GG
                                  }),
                                  "aria-pressed": EG === GG,
                                  onClick: () => {
                                    (GG => {
                                      const ZG = WS.g[GG];
                                      bG(ZG), oG({
                                        ...JG,
                                        voice: ZG
                                      })
                                    })(GG)
                                  },
                                  children: GG
                                }, GG))), !EG && (0, KG.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, KG.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, KG.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, KG.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, KG.jsx)(mS.d, {
                                      display: JG
                                    }, UG)
                                  }), (0, KG.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: GG => {
                                      GG.preventDefault(), oG(JG)
                                    },
                                    children: [(0, KG.jsx)("input", {
                                      value: ZG,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: GG => {
                                        SG(GG.target.value)
                                      }
                                    }), (0, KG.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, KG.jsx)(dG, {
                                        name: "play"
                                      }), (0, KG.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, KG.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: eS.map((GG => (0, KG.jsx)("button", {
                                      type: "button",
                                      className: LG()("DocsVariantChip", {
                                        Active: ZG === GG
                                      }),
                                      onClick: () => {
                                        var bG;
                                        SG(bG = GG), oG({
                                          ...JG,
                                          line: bG
                                        })
                                      },
                                      children: GG
                                    }, GG)))
                                  }), (0, KG.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, KG.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, KG.jsx)("input", {
                                      value: yG,
                                      placeholder: "No name",
                                      onChange: GG => {
                                        kG(GG.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, KG.jsx)(nS, {
                                  synth: GG,
                                  onChange: ZG => {
                                    const wG = {
                                      ...GG,
                                      ...ZG
                                    };
                                    bG(wG);
                                    const SG = {
                                        ...JG,
                                        voice: wG
                                      },
                                      LG = performance.now();
                                    if (LG - QG.current >= DS) {
                                      QG.current = LG, hG();
                                      const GG = (0, IS.f)(SG).plan.blips[0];
                                      GG && (pG.current = OS((0, WS.i)(wG), [{
                                        ...GG,
                                        atMs: 0
                                      }], VG))
                                    }
                                    window.clearTimeout(fG.current), fG.current = window.setTimeout((() => {
                                      oG(rG.current)
                                    }), tS)
                                  }
                                })]
                              }), (0, KG.jsx)(uG, {
                                code: XG,
                                lang: "ts"
                              })]
                            })
                          }
                          var BS = ZG(4894);
                          const GL = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            bL = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            ZL = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${bL}`, "g"), BS.r],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, BS.r]
                            ];

                          function wL(GG) {
                            return `${GG.pageId}#${GG.anchor}`
                          }
                          let SL, LL, yL;

                          function kL(GG) {
                            const bG = (0, iG.g)(GG),
                              ZG = new Set;
                            for (const [, , wG] of bG.matchAll(iG.e)) {
                              const GG = wG.startsWith("#") ? gG(wG) : null,
                                bG = GG ? wL({
                                  pageId: GG.page.id,
                                  anchor: GG.anchor
                                }) : null;
                              null !== bG && (SL || (SL = new Set(PG.flatMap((GG => IG(GG.layout) ? qG(GG).sections.map((bG => wL({
                                pageId: GG.id,
                                anchor: bG.heading.anchor
                              }))) : [])))), SL).has(bG) && ZG.add(bG)
                            }
                            for (const [, , wG] of bG.matchAll(GL)) {
                              const GG = fb(wG);
                              GG && ZG.add(wL(GG))
                            }
                            return ZG
                          }

                          function UL(GG, bG) {
                            const ZG = new Set,
                              wG = function(GG) {
                                return GG.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(GG);
                            for (const [, SG] of wG.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ZG.add(SG);
                            for (const [SG, LG] of ZL)
                              for (const [, GG] of(0, BS.g)(wG, SG, LG)) bG.has(GG) && ZG.add(GG);
                            return ZG
                          }

                          function YL(GG, bG, ZG, wG) {
                            const SG = GG.get(bG);
                            SG ? !wG && SG.some((GG => GG.pageId === ZG.pageId)) || SG.push(ZG) : GG.set(bG, [ZG])
                          }
                          const VL = /^[A-Za-z_$][\w$]*$/;

                          function pL(GG) {
                            return VL.test(GG.name) ? GG.name : "options"
                          }

                          function fL(GG, bG) {
                            const ZG = GG.params.map(pL).join(", ");
                            return bG ? `${GG.name} = (${ZG}) => {\n\t\n}` : `api.${GG.name}(${ZG})`
                          }

                          function QL(GG) {
                            let {
                              method: bG,
                              isCallback: ZG
                            } = GG;
                            return (0, KG.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, KG.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ZG ? (0, KG.jsxs)(KG.Fragment, {
                                  children: [(0, KG.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: bG.name
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, KG.jsxs)(KG.Fragment, {
                                  children: [(0, KG.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: bG.name
                                  }), (0, KG.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), bG.params.map(((GG, ZG) => (0, KG.jsxs)(wG.Fragment, {
                                  children: [ZG > 0 && (0, KG.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, KG.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${bG.name}-${pL(GG)}`,
                                    children: GG.name
                                  })]
                                }, GG.name))), (0, KG.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ZG ? ") => " : ")"
                                }), ZG && !bG.returns && (0, KG.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), bG.returns && bG.returns.type && (0, KG.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ZG && (0, KG.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, KG.jsx)(Cb, {
                                  type: bG.returns.type
                                })]
                              })]
                            })
                          }

                          function KL(GG) {
                            let {
                              title: bG,
                              references: ZG
                            } = GG;
                            const SG = (0, wG.useContext)(Qb);
                            return (0, KG.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, KG.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: bG
                              }), ZG.map((GG => (0, KG.jsx)(yG.c, {
                                to: RG(SG, AG(GG.pageId), GG.anchor),
                                children: GG.label
                              }, `${GG.pageId}#${GG.anchor}`)))]
                            })
                          }

                          function hL(GG) {
                            var bG, ZG;
                            let {
                              pageId: wG,
                              anchor: SG
                            } = GG;
                            const LG = wL({
                                pageId: wG,
                                anchor: SG
                              }),
                              yG = null !== (bG = function() {
                                if (!yL) {
                                  yL = new Map;
                                  const wG = new Set(PG.filter((GG => "callbacks" === GG.layout)).flatMap((GG => qG(GG).sections.map((GG => GG.heading.text)))));
                                  for (const SG of PG)
                                    if ("article" === SG.layout || "snippets" === SG.layout)
                                      for (const LG of (0, iG.t)(qG(SG)))
                                        for (const {
                                            code: yG
                                          }
                                          of(0, iG.k)(LG.blocks))
                                          for (const kG of UL(yG, wG)) {
                                            const wG = pb().get(kG);
                                            if (wG) {
                                              var GG, bG, ZG;
                                              const yG = {
                                                pageId: SG.id,
                                                anchor: null !== (GG = null === (bG = LG.heading) || void 0 === bG ? void 0 : bG.anchor) && void 0 !== GG ? GG : "",
                                                label: null !== (ZG = SG.navTitle) && void 0 !== ZG ? ZG : SG.title
                                              };
                                              YL(yL, wL(wG), yG, !1)
                                            }
                                          }
                                }
                                return yL
                              }().get(LG)) && void 0 !== bG ? bG : [],
                              kG = null !== (ZG = function() {
                                if (!LL) {
                                  LL = new Map;
                                  const GG = AG("changelog");
                                  for (const bG of qG(GG).sections) {
                                    const ZG = new Set(bG.blocks.flatMap((GG => [...kL(GG)])));
                                    for (const wG of ZG) {
                                      const ZG = {
                                        pageId: GG.id,
                                        anchor: bG.heading.anchor,
                                        label: bG.heading.text
                                      };
                                      YL(LL, wG, ZG, !0)
                                    }
                                  }
                                }
                                return LL
                              }().get(LG)) && void 0 !== ZG ? ZG : [];
                            return 0 === yG.length && 0 === kG.length ? null : (0, KG.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [yG.length > 0 && (0, KG.jsx)(KL, {
                                title: "Used in",
                                references: yG
                              }), kG.length > 0 && (0, KG.jsx)(KL, {
                                title: "Changelog",
                                references: kG
                              })]
                            })
                          }

                          function dL(GG) {
                            let {
                              method: bG,
                              pageId: ZG,
                              anchor: wG,
                              isCallback: SG
                            } = GG;
                            const LG = SG ? void 0 : kb().get(bG.name),
                              yG = bG.description.length > 0 || null === LG || void 0 === LG || !LG.description ? bG.description : (0, iG.z)(LG.description);
                            return (0, KG.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, KG.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, KG.jsx)(YZ, {
                                  level: 2,
                                  text: bG.name,
                                  anchor: wG,
                                  className: "DocsCardTitle"
                                }), (0, KG.jsx)(zG, {
                                  text: fL(bG, SG),
                                  label: SG ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, KG.jsx)(QL, {
                                method: bG,
                                isCallback: SG
                              }), LG && null !== LG.deprecation && (0, KG.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, KG.jsx)("strong", {
                                  children: "Deprecated"
                                }), LG.deprecation && (0, KG.jsxs)(KG.Fragment, {
                                  children: [": ", (0, KG.jsx)(Xb, {
                                    text: (kG = LG.deprecation, (0, BS.y)(kG, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, BS.n)("`\\w"), (GG => {
                                      let [bG] = GG;
                                      return pb().has(bG) ? `\`${bG}\`` : bG
                                    })))
                                  })]
                                })]
                              }), yG.length > 0 && (0, KG.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, KG.jsx)(QZ, {
                                  blocks: yG
                                })
                              }), bG.params.length > 0 && (0, KG.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, KG.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, KG.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: bG.params.map((GG => (0, KG.jsxs)("div", {
                                    id: `${bG.name}-${pL(GG)}`,
                                    className: "DocsParam",
                                    children: [(0, KG.jsxs)("dt", {
                                      children: [(0, KG.jsx)("code", {
                                        className: "DocsParamName",
                                        children: GG.name
                                      }), (0, KG.jsx)(Cb, {
                                        type: GG.type
                                      })]
                                    }), GG.description && (0, KG.jsx)("dd", {
                                      children: (0, KG.jsx)(Xb, {
                                        text: GG.description
                                      })
                                    })]
                                  }, GG.name)))
                                })]
                              }), bG.returns && (bG.returns.type || bG.returns.description.length > 0) && (0, KG.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, KG.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [bG.returns.type && (0, KG.jsx)(Cb, {
                                    type: bG.returns.type
                                  }), bG.returns.description.length > 0 && (0, KG.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, KG.jsx)(QZ, {
                                      blocks: bG.returns.description
                                    })
                                  })]
                                })]
                              }), (0, KG.jsx)(hL, {
                                pageId: ZG,
                                anchor: wG
                              })]
                            });
                            var kG
                          }

                          function JL(GG) {
                            var bG;
                            return null !== GG.defaultValue && "undefined" !== GG.defaultValue ? GG.defaultValue : null !== (bG = GG.example) && void 0 !== bG ? bG : "value"
                          }

                          function rL(GG) {
                            let {
                              setting: bG,
                              pageId: ZG,
                              anchor: wG,
                              setterSnippet: SG
                            } = GG;
                            const LG = null === bG.defaultValue ? null : Jb(bG.defaultValue);
                            return (0, KG.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, KG.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, KG.jsx)(YZ, {
                                  level: 2,
                                  text: bG.name,
                                  anchor: wG,
                                  className: "DocsCardTitle"
                                }), (0, KG.jsx)(zG, {
                                  text: SG(bG.name, JL(bG)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, KG.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, KG.jsxs)("div", {
                                  children: [(0, KG.jsx)("dt", {
                                    children: "Type"
                                  }), (0, KG.jsx)("dd", {
                                    children: (0, KG.jsx)(Cb, {
                                      type: bG.type
                                    })
                                  })]
                                }), null !== bG.defaultValue && (0, KG.jsxs)("div", {
                                  children: [(0, KG.jsx)("dt", {
                                    children: "Default"
                                  }), (0, KG.jsx)("dd", {
                                    children: (0, KG.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [LG && (0, KG.jsx)(rb, {
                                        colour: LG
                                      }), bG.defaultValue]
                                    })
                                  })]
                                }), null !== bG.example && (0, KG.jsxs)("div", {
                                  children: [(0, KG.jsx)("dt", {
                                    children: "Example"
                                  }), (0, KG.jsx)("dd", {
                                    children: (0, KG.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: bG.example
                                    })
                                  })]
                                })]
                              }), bG.description.length > 0 && (0, KG.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, KG.jsx)(QZ, {
                                  blocks: bG.description
                                })
                              }), (0, KG.jsx)(hL, {
                                pageId: ZG,
                                anchor: wG
                              })]
                            })
                          }

                          function zL(GG) {
                            let {
                              section: bG
                            } = GG;
                            return (0, KG.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, KG.jsx)(YZ, {
                                level: 2,
                                text: bG.heading.text,
                                anchor: bG.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, KG.jsx)("div", {
                                className: "DocsProse",
                                children: (0, KG.jsx)(QZ, {
                                  blocks: bG.blocks
                                })
                              })]
                            })
                          }

                          function EL(GG) {
                            let {
                              section: bG
                            } = GG;
                            return (0, KG.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, KG.jsx)(YZ, {
                                level: bG.heading.level,
                                text: bG.heading.text,
                                anchor: bG.heading.anchor
                              }), (0, KG.jsx)(QZ, {
                                blocks: bG.blocks
                              })]
                            })
                          }
                          const oL = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function XL(GG) {
                            let {
                              page: bG,
                              section: ZG
                            } = GG;
                            if ("methods" === bG.layout || "callbacks" === bG.layout) return (0, KG.jsx)(dL, {
                              method: uZ(ZG),
                              pageId: bG.id,
                              anchor: ZG.heading.anchor,
                              isCallback: "callbacks" === bG.layout
                            });
                            if ("settings" === bG.layout) {
                              const GG = function(GG) {
                                const bG = {
                                  name: GG.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const wG of GG.blocks) {
                                  var ZG;
                                  if (XZ(wG)) continue;
                                  const GG = "paragraph" === wG.kind ? wG.text.match(iZ) : null;
                                  if (!GG) {
                                    bG.description.push(wG);
                                    continue
                                  }
                                  const SG = null !== (ZG = oZ(GG[2])) && void 0 !== ZG ? ZG : GG[2];
                                  "Type" === GG[1] ? bG.type = SG : "Default" === GG[1] ? bG.defaultValue = SG : "" !== SG && (bG.example = SG)
                                }
                                return bG.type ? bG : null
                              }(ZG);
                              if (GG) return (0, KG.jsx)(rL, {
                                setting: GG,
                                pageId: bG.id,
                                anchor: ZG.heading.anchor,
                                setterSnippet: bG.setterSnippet
                              })
                            }
                            return "snippets" === bG.layout ? (0, KG.jsx)(zL, {
                              section: ZG
                            }) : "changelog" === bG.layout ? (0, KG.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, KG.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, KG.jsx)(YZ, {
                                  level: 2,
                                  text: ZG.heading.text,
                                  anchor: ZG.heading.anchor
                                })
                              }), (0, KG.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, KG.jsx)(QZ, {
                                  blocks: CZ(ZG.blocks)
                                })
                              })]
                            }) : bG.gallery ? (0, KG.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, KG.jsx)(YZ, {
                                level: ZG.heading.level,
                                text: ZG.heading.text,
                                anchor: ZG.heading.anchor
                              }), (0, KG.jsx)(Ww, {
                                kind: bG.gallery,
                                content: qG(bG),
                                blocks: ZG.blocks
                              })]
                            }) : (0, KG.jsx)(EL, {
                              section: ZG
                            })
                          }

                          function uL(GG) {
                            let {
                              page: bG,
                              onTocChange: ZG
                            } = GG;
                            const SG = qG(bG),
                              [LG, yG] = (0, wG.useState)(""),
                              kG = "article" !== bG.layout,
                              UG = dZ(bG.gallery) ? bG.gallery : null,
                              YG = null !== UG,
                              VG = LG.trim().toLowerCase(),
                              pG = (0, wG.useRef)(null),
                              fG = (0, wG.useCallback)((GG => {
                                var bG;
                                null === (bG = pG.current) || void 0 === bG || bG.preview(GG)
                              }), []),
                              QG = (0, wG.useMemo)((() => {
                                if (!bG.hasParticlePlayground) return [];
                                const GG = FZ(SG.intro).find((GG => "names" === GG.kind && !GG.names.some((GG => null !== sZ(GG.name)))));
                                return "names" === (null === GG || void 0 === GG ? void 0 : GG.kind) ? GG.names.map((GG => GG.name)) : []
                              }), [bG, SG]),
                              hG = (0, wG.useMemo)((() => {
                                if (!bG.hasTextPlayground) return [];
                                const GG = SG.sections.flatMap((GG => GG.blocks.flatMap((GG => {
                                  var bG;
                                  return (null !== (bG = IZ(GG)) && void 0 !== bG ? bG : []).flatMap((GG => sb(GG.name) ? [GG.name] : []))
                                }))));
                                return [...new Set(GG)]
                              }), [bG, SG]),
                              dG = (0, wG.useMemo)((() => VG ? SG.sections.filter((GG => function(GG, bG) {
                                return !!GG.heading.text.toLowerCase().includes(bG) || GG.blocks.some((GG => (0, iG.g)(GG).toLowerCase().includes(bG)))
                              }(GG, VG))) : SG.sections), [SG, VG]),
                              JG = (0, wG.useMemo)((() => function(GG, bG) {
                                return "article" !== GG.layout ? bG.map((GG => ({
                                  anchor: GG.heading.anchor,
                                  text: GG.heading.text,
                                  level: 2
                                }))) : bG.flatMap((GG => {
                                  const bG = GG.blocks.flatMap((GG => "heading" === GG.kind && 3 === GG.level ? [{
                                    anchor: GG.anchor,
                                    text: GG.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: GG.heading.anchor,
                                    text: GG.heading.text,
                                    level: 2
                                  }, ...bG]
                                }))
                              }(bG, dG)), [bG, dG]);
                            return (0, wG.useEffect)((() => {
                              ZG(JG)
                            }), [JG, ZG]), (0, KG.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, KG.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, KG.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: SG.title || bG.title
                                }), (0, KG.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: bG.summary
                                }), (0, KG.jsx)(Nw, {
                                  page: bG
                                }), kG && (0, KG.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, KG.jsxs)("span", {
                                    children: [(0, KG.jsx)("strong", {
                                      children: SG.sections.length
                                    }), " ", oL[bG.layout]]
                                  })
                                })]
                              }), "" === bG.slug && (0, KG.jsx)(Iw, {}), UG && (0, KG.jsx)(lw, {
                                kind: UG
                              }, UG), bG.hasParticlePlayground && (0, KG.jsx)(YS, {
                                ref: pG,
                                textures: QG
                              }), !YG && SG.intro.length > 0 && (0, KG.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: bG.gallery ? (0, KG.jsx)(Jw.Provider, {
                                  value: bG.hasParticlePlayground ? fG : null,
                                  children: (0, KG.jsx)(Ww, {
                                    kind: bG.gallery,
                                    content: SG,
                                    blocks: SG.intro
                                  })
                                }) : (0, KG.jsx)(QZ, {
                                  blocks: CZ(SG.intro)
                                })
                              }), bG.hasTextPlayground && (0, KG.jsx)(CS, {
                                fontAwesomeIcons: hG
                              }), bG.hasVoicePlayground && (0, KG.jsx)(xS, {}), bG.childPageIds && (0, KG.jsx)(Iw, {
                                cards: bG.childPageIds.map((GG => ({
                                  pageId: GG
                                }))),
                                label: bG.title
                              }), kG && (0, KG.jsx)(zZ, {
                                className: "DocsFilterBar",
                                value: LG,
                                placeholder: `Filter ${SG.sections.length} ${oL[bG.layout]}\u2026`,
                                label: `Filter ${oL[bG.layout]}`,
                                onChange: yG,
                                count: VG ? {
                                  visible: dG.length,
                                  total: SG.sections.length
                                } : null
                              }), !YG && (0, KG.jsxs)("div", {
                                className: `DocsSections Layout-${bG.layout}`,
                                children: [dG.map((GG => (0, KG.jsx)(XL, {
                                  page: bG,
                                  section: GG
                                }, GG.heading.anchor))), 0 === dG.length && (0, KG.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", oL[bG.layout], " match \u201c", LG, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const iL = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function CL(GG) {
                            let {
                              entry: bG,
                              isActive: ZG,
                              onNavigate: wG,
                              label: SG,
                              children: yG
                            } = GG;
                            return (0, KG.jsx)("a", {
                              href: `#${bG.anchor}`,
                              "aria-label": SG,
                              className: LG()(`Level${bG.level}`, {
                                Active: ZG
                              }),
                              "aria-current": ZG ? "location" : void 0,
                              onClick: GG => {
                                GG.preventDefault(), wG(bG.anchor)
                              },
                              children: yG
                            })
                          }

                          function WL(GG) {
                            let {
                              toc: bG,
                              activeAnchor: ZG,
                              onNavigate: SG
                            } = GG;
                            const yG = Math.max(0, bG.findIndex((GG => GG.anchor === ZG))),
                              kG = (0, wG.useRef)(null),
                              UG = (0, wG.useRef)(!1);
                            (0, wG.useEffect)((() => {
                              var GG, ZG;
                              const wG = null === (GG = kG.current) || void 0 === GG ? void 0 : GG.closest(".DocsToc"),
                                SG = null === (ZG = kG.current) || void 0 === ZG ? void 0 : ZG.querySelector(".DocsTimelineNotch.Active");
                              if (!wG || !SG) return;
                              let LG = 0;
                              if (yG === bG.length - 1) LG = wG.scrollHeight;
                              else if (yG > 0) {
                                const GG = wG.getBoundingClientRect(),
                                  bG = SG.getBoundingClientRect();
                                LG = wG.scrollTop + bG.top + bG.height / 2 - (GG.top + wG.clientHeight / 2)
                              }
                              wG.scrollTo({
                                top: LG,
                                behavior: UG.current ? "smooth" : "auto"
                              }), UG.current = !0
                            }), [yG, bG.length]);
                            const YG = [];
                            return bG.forEach(((GG, bG) => {
                              var ZG, wG, SG;
                              const LG = function(GG) {
                                  const bG = GG.trim().match(iL);
                                  return bG ? {
                                    day: bG[1],
                                    month: `${bG[2]} ${bG[3]}`
                                  } : null
                                }(GG.text),
                                yG = null !== (ZG = null === LG || void 0 === LG ? void 0 : LG.month) && void 0 !== ZG ? ZG : null;
                              null !== yG && (null === (wG = YG.at(-1)) || void 0 === wG ? void 0 : wG.month) === yG || YG.push({
                                month: yG,
                                entries: []
                              }), YG.at(-1).entries.push({
                                entry: GG,
                                day: null !== (SG = null === LG || void 0 === LG ? void 0 : LG.day) && void 0 !== SG ? SG : null,
                                index: bG
                              })
                            })), (0, KG.jsx)("ol", {
                              ref: kG,
                              className: "DocsTimeline",
                              children: YG.map((GG => {
                                let {
                                  month: bG,
                                  entries: ZG
                                } = GG;
                                return (0, KG.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [bG && (0, KG.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: bG
                                  }), (0, KG.jsx)("ol", {
                                    children: ZG.map((GG => {
                                      let {
                                        entry: bG,
                                        day: ZG,
                                        index: wG
                                      } = GG;
                                      return (0, KG.jsx)("li", {
                                        className: LG()("DocsTimelineNotch", {
                                          Passed: wG < yG,
                                          Active: wG === yG
                                        }),
                                        children: (0, KG.jsx)(CL, {
                                          entry: bG,
                                          isActive: wG === yG,
                                          onNavigate: SG,
                                          label: bG.text,
                                          children: (0, KG.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ZG && void 0 !== ZG ? ZG : bG.text
                                          })
                                        })
                                      }, bG.anchor)
                                    }))
                                  })]
                                }, ZG[0].entry.anchor)
                              }))
                            })
                          }

                          function mL(GG) {
                            let {
                              isChangelog: bG,
                              toc: ZG,
                              activeAnchor: wG,
                              onNavigate: SG
                            } = GG;
                            return 0 === ZG.length ? null : (0, KG.jsxs)(KG.Fragment, {
                              children: [(0, KG.jsx)("div", {
                                className: "DocsTocTitle",
                                children: bG ? "Updates" : "On this page"
                              }), bG ? (0, KG.jsx)(WL, {
                                toc: ZG,
                                activeAnchor: wG,
                                onNavigate: SG
                              }) : (0, KG.jsx)("ul", {
                                children: ZG.map((GG => (0, KG.jsx)("li", {
                                  children: (0, KG.jsx)(CL, {
                                    entry: GG,
                                    isActive: GG.anchor === wG,
                                    onNavigate: SG,
                                    children: GG.text.replace(/`/g, "")
                                  })
                                }, GG.anchor)))
                              })]
                            })
                          }
                          const IL = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            FL = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            vL = 20,
                            aL = 10,
                            cL = 40,
                            lL = 120;
                          let jL;

                          function PL(GG) {
                            const bG = GG.gallery;
                            if (!bG) return [];
                            if (dZ(bG)) return function(GG) {
                              return rZ(GG).entries.map((GG => GG.name))
                            }(bG).map((ZG => ({
                              page: GG,
                              anchor: aZ(bG, ZG),
                              title: ZG,
                              kind: FL[bG],
                              text: "",
                              listedUnder: GG.title
                            })));
                            const ZG = qG(GG);
                            return (0, iG.t)(ZG).flatMap((wG => {
                              const SG = wG.heading ? `${GG.title} \u203a ${wG.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : GG.title;
                              return lZ(bG, ZG, wG.blocks).flatMap((ZG => "names" !== ZG.kind ? [] : ZG.names.map((wG => {
                                const LG = ZG.isSongs ? "Song" : FL[bG];
                                return {
                                  page: GG,
                                  anchor: wG.anchor,
                                  title: wG.name,
                                  kind: LG,
                                  text: "",
                                  listedUnder: SG
                                }
                              }))))
                            }))
                          }

                          function ML(GG, bG, ZG) {
                            const wG = GG.title.toLowerCase();
                            let SG = 0;
                            if (wG === bG) SG = 100;
                            else if (wG.startsWith(bG)) SG = 80;
                            else if (wG.includes(bG)) SG = 60;
                            else if (ZG.every((GG => wG.includes(GG)))) SG = 45;
                            else {
                              if (!GG.text.toLowerCase().includes(bG)) return 0;
                              SG = 20
                            }
                            return SG - Math.min(wG.length / 10, 9) + ("Page" === GG.kind ? 8 : "Method" === GG.kind ? 3 : 0) - (GG.listedUnder ? vL : 0)
                          }

                          function AL(GG, bG) {
                            const ZG = GG.toLowerCase().indexOf(bG),
                              wG = Math.max(0, ZG - lL / 3);
                            return `${wG>0?"\u2026":""}${GG.slice(wG,wG+lL)}${wG+lL<GG.length?"\u2026":""}`
                          }

                          function sL(GG) {
                            let {
                              text: bG,
                              query: ZG
                            } = GG;
                            const wG = ZG ? bG.toLowerCase().indexOf(ZG) : -1;
                            return -1 === wG ? (0, KG.jsx)(KG.Fragment, {
                              children: bG
                            }) : (0, KG.jsxs)(KG.Fragment, {
                              children: [bG.slice(0, wG), (0, KG.jsx)("mark", {
                                children: bG.slice(wG, wG + ZG.length)
                              }), bG.slice(wG + ZG.length)]
                            })
                          }

                          function qL(GG) {
                            let {
                              basePath: bG,
                              onClose: ZG
                            } = GG;
                            const SG = (0, kG.q)(),
                              [yG, UG] = (0, wG.useState)(""),
                              [YG, VG] = (0, wG.useState)(0),
                              pG = (0, wG.useRef)(null),
                              fG = (0, wG.useRef)(null),
                              QG = yG.trim().toLowerCase(),
                              hG = (0, wG.useMemo)((() => {
                                const GG = (jL || (jL = PG.flatMap((GG => {
                                  const bG = qG(GG);
                                  return [{
                                    page: GG,
                                    anchor: "",
                                    title: GG.title,
                                    kind: "Page",
                                    text: GG.summary
                                  }, ...bG.sections.flatMap((bG => {
                                    const ZG = bG.blocks.filter((GG => "paragraph" === GG.kind)).map(iG.g).join(" ").replace(/[`*]/g, ""),
                                      wG = {
                                        page: GG,
                                        anchor: bG.heading.anchor,
                                        title: bG.heading.text.replace(/`/g, ""),
                                        kind: IL[GG.layout],
                                        text: ZG
                                      },
                                      SG = bG.blocks.flatMap((bG => "article" === GG.layout && "heading" === bG.kind && 3 === bG.level ? [{
                                        page: GG,
                                        anchor: bG.anchor,
                                        title: bG.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: wG.title
                                      }] : []));
                                    return [wG, ...SG]
                                  })), ...PL(GG)]
                                }))), jL);
                                if (!QG) return GG.filter((GG => "Page" === GG.kind));
                                const bG = QG.split(/\s+/);
                                let ZG = 0;
                                return GG.map((GG => ({
                                  entry: GG,
                                  score: ML(GG, QG, bG)
                                }))).filter((GG => GG.score > 0)).sort(((GG, bG) => bG.score - GG.score)).filter((GG => !GG.entry.listedUnder || (ZG++, ZG <= aL))).slice(0, cL).map((GG => GG.entry))
                              }), [QG]);
                            (0, wG.useEffect)((() => {
                              VG(0)
                            }), [QG]), (0, wG.useEffect)((() => {
                              const GG = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === GG || void 0 === GG || GG.focus()
                              }
                            }), []), (0, wG.useEffect)((() => {
                              var GG, bG;
                              null === (GG = pG.current) || void 0 === GG || null === (bG = GG.querySelector(".Active")) || void 0 === bG || bG.scrollIntoView({
                                block: "nearest"
                              })
                            }), [YG]);
                            const JG = GG => {
                              SG(RG(bG, GG.page, GG.anchor)), ZG()
                            };
                            return (0, KG.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: GG => {
                                GG.target === GG.currentTarget && ZG()
                              },
                              children: (0, KG.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: GG => {
                                  GG.target !== fG.current && GG.preventDefault()
                                },
                                onKeyDown: GG => {
                                  if ("Escape" === GG.key) ZG();
                                  else if ("Tab" === GG.key) {
                                    var bG;
                                    GG.preventDefault(), null === (bG = fG.current) || void 0 === bG || bG.focus()
                                  }
                                },
                                children: [(0, KG.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, KG.jsx)(dG, {
                                    name: "magnifying-glass"
                                  }), (0, KG.jsx)("input", {
                                    ref: fG,
                                    autoFocus: !0,
                                    value: yG,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": hG.length > 0 ? `DocsSearchResult-${YG}` : void 0,
                                    onChange: GG => {
                                      UG(GG.target.value)
                                    },
                                    onKeyDown: GG => {
                                      if ("ArrowDown" === GG.key || "ArrowUp" === GG.key) {
                                        GG.preventDefault();
                                        const bG = "ArrowDown" === GG.key ? 1 : -1;
                                        VG((YG + bG + hG.length) % Math.max(hG.length, 1))
                                      } else "Enter" === GG.key && hG[YG] && JG(hG[YG])
                                    }
                                  }), (0, KG.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, KG.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: pG,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!QG && (0, KG.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), hG.map(((GG, bG) => {
                                    var ZG;
                                    return (0, KG.jsxs)("li", {
                                      id: `DocsSearchResult-${bG}`,
                                      role: "option",
                                      "aria-selected": bG === YG,
                                      className: LG()("DocsSearchResult", {
                                        Active: bG === YG
                                      }),
                                      onMouseMove: () => {
                                        VG(bG)
                                      },
                                      onClick: () => {
                                        JG(GG)
                                      },
                                      children: [(0, KG.jsx)(dG, {
                                        name: GG.page.icon
                                      }), (0, KG.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, KG.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, KG.jsx)(sL, {
                                            text: GG.title,
                                            query: QG
                                          })
                                        }), GG.text && (0, KG.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, KG.jsx)(sL, {
                                            text: AL(GG.text, QG),
                                            query: QG
                                          })
                                        })]
                                      }), (0, KG.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === GG.kind ? "Page" : null !== (ZG = GG.listedUnder) && void 0 !== ZG ? ZG : `${GG.kind} \xb7 ${GG.page.title}`
                                      })]
                                    }, `${GG.page.id}#${GG.anchor}`)
                                  })), QG && 0 === hG.length && (0, KG.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", yG, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function nL(GG, bG) {
                            if (bG < 10) return `${GG.toFixed(1)}s`;
                            const ZG = Math.floor(GG);
                            return `${Math.floor(ZG/60)}:${String(ZG%60).padStart(2,"0")}`
                          }

                          function gL() {
                            const GG = Vw((GG => GG.track)),
                              bG = Vw((GG => GG.volume)),
                              [ZG, SG] = (0, wG.useState)(0),
                              yG = (0, wG.useRef)(bw);
                            if ((0, wG.useEffect)((() => {
                                if (!GG) return;
                                if (SG(Kw()), "playing" !== GG.status) return;
                                let bG = 0;
                                const ZG = () => {
                                  SG(Kw()), bG = requestAnimationFrame(ZG)
                                };
                                return bG = requestAnimationFrame(ZG), () => {
                                  cancelAnimationFrame(bG)
                                }
                              }), [GG]), !GG) return null;
                            const kG = "paused" !== GG.status,
                              UG = Math.min(ZG, GG.duration);
                            return (0, KG.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, KG.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, KG.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": kG ? `Pause ${GG.name}` : `Play ${GG.name}`,
                                  onClick: Qw,
                                  children: (0, KG.jsx)(dG, {
                                    name: kG ? "pause" : "play"
                                  })
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, KG.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, KG.jsx)("code", {
                                      children: GG.name
                                    }), (0, KG.jsx)("span", {
                                      children: GG.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, KG.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, KG.jsx)("span", {
                                      children: nL(UG, GG.duration)
                                    }), (0, KG.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: GG.duration || 1,
                                      step: .01,
                                      value: UG,
                                      disabled: 0 === GG.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${nL(UG,GG.duration)} of ${nL(GG.duration,GG.duration)}`,
                                      onChange: GG => {
                                        const bG = Number(GG.target.value);
                                        ! function(GG) {
                                          var bG;
                                          yw = GG, null === (bG = Sw) || void 0 === bG || bG.seek(GG)
                                        }(bG), SG(bG)
                                      }
                                    }), (0, KG.jsx)("span", {
                                      children: GG.duration > 0 ? nL(GG.duration, GG.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, KG.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, KG.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === bG ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === bG ? hw(yG.current) : (yG.current = bG, hw(0))
                                    },
                                    children: (0, KG.jsx)(dG, {
                                      name: "volume",
                                      className: LG()({
                                        Muted: 0 === bG
                                      })
                                    })
                                  }), (0, KG.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bG,
                                    "aria-label": "Volume",
                                    onChange: GG => {
                                      hw(Number(GG.target.value))
                                    }
                                  })]
                                }), (0, KG.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var bG;
                                    null === (bG = document.querySelector(`[data-docs-track="${CSS.escape(Zw(GG.name,GG.isSong))}"]`)) || void 0 === bG || bG.focus(), dw()
                                  },
                                  children: (0, KG.jsx)(dG, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var eL = ZG(29);
                          const RL = "docsTheme",
                            TL = window.matchMedia("(prefers-color-scheme: light)");

                          function HL(GG) {
                            let {
                              theme: bG,
                              onChange: ZG
                            } = GG;
                            const wG = "dark" === bG ? "light" : "dark";
                            return (0, KG.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${wG} theme`,
                              title: `Switch to ${wG} theme`,
                              onClick: () => {
                                ZG(wG)
                              },
                              children: (0, KG.jsx)(dG, {
                                name: "dark" === bG ? "moon" : "sun"
                              })
                            })
                          }
                          const tL = "https://github.com/Bloxdy/code-api",
                            DL = "https://discord.gg/playbloxd",
                            NL = 180,
                            OL = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function xL(GG) {
                            let {
                              basePath: bG,
                              activePageId: ZG,
                              onNavigate: wG
                            } = GG;
                            return (0, KG.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: MG.map((GG => (0, KG.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, KG.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: GG.title
                                }), GG.pageIds.map((GG => {
                                  var SG;
                                  const kG = AG(GG);
                                  return (0, KG.jsxs)(yG.c, {
                                    to: RG(bG, kG),
                                    className: LG()("DocsNavLink", {
                                      Active: kG.id === ZG
                                    }),
                                    "aria-current": kG.id === ZG ? "page" : void 0,
                                    onClick: wG,
                                    children: [(0, KG.jsx)(dG, {
                                      name: kG.icon
                                    }), (0, KG.jsx)("span", {
                                      children: null !== (SG = kG.navTitle) && void 0 !== SG ? SG : kG.title
                                    })]
                                  }, kG.id)
                                }))]
                              }, GG.title)))
                            })
                          }

                          function BL(GG) {
                            let {
                              basePath: bG,
                              pageId: ZG
                            } = GG;
                            const wG = MG.flatMap((GG => GG.pageIds)),
                              SG = wG.indexOf(ZG),
                              LG = SG > 0 ? AG(wG[SG - 1]) : null,
                              kG = SG < wG.length - 1 ? AG(wG[SG + 1]) : null;
                            return (0, KG.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [LG ? (0, KG.jsxs)(yG.c, {
                                className: "DocsPagerLink Previous",
                                to: RG(bG, LG),
                                children: [(0, KG.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, KG.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: LG.title
                                })]
                              }) : (0, KG.jsx)("span", {}), kG && (0, KG.jsxs)(yG.c, {
                                className: "DocsPagerLink Next",
                                to: RG(bG, kG),
                                children: [(0, KG.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, KG.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: kG.title
                                })]
                              })]
                            })
                          }

                          function Gy(GG) {
                            let {
                              basePath: bG,
                              embedded: ZG = !1
                            } = GG;
                            const {
                              pageSlug: SG = ""
                            } = (0, kG.v)(), YG = (0, kG.n)(), VG = (0, kG.q)(), pG = (fG = SG, PG.find((GG => GG.slug === fG)));
                            var fG;
                            const [QG, hG] = function() {
                              const [GG, bG] = (0, wG.useState)((() => {
                                const GG = eL.h.getItem(RL);
                                return "dark" === GG || "light" === GG ? GG : null
                              })), [ZG, SG] = (0, wG.useState)(TL.matches ? "light" : "dark");
                              return (0, wG.useEffect)((() => {
                                const GG = () => {
                                  SG(TL.matches ? "light" : "dark")
                                };
                                return TL.addEventListener("change", GG), () => {
                                  TL.removeEventListener("change", GG)
                                }
                              }), []), [null !== GG && void 0 !== GG ? GG : ZG, GG => {
                                eL.h.setItem(RL, GG), bG(GG)
                              }]
                            }(), [JG, rG] = (0, wG.useState)(null), [zG, EG] = (0, wG.useState)(!1), [oG, XG] = (0, wG.useState)(!1), [uG, CG] = (0, wG.useState)([]), WG = function(GG, bG) {
                              const [ZG, SG] = (0, wG.useState)("");
                              return (0, wG.useEffect)((() => {
                                if (!bG) return;
                                let ZG = 0;
                                const wG = () => {
                                    var wG, LG;
                                    ZG = 0;
                                    const yG = bG.getBoundingClientRect().top + NL;
                                    let kG = null !== (wG = null === (LG = GG[0]) || void 0 === LG ? void 0 : LG.anchor) && void 0 !== wG ? wG : "";
                                    for (const bG of GG) {
                                      const GG = document.getElementById(bG.anchor);
                                      GG && GG.getBoundingClientRect().top <= yG && (kG = bG.anchor)
                                    }
                                    bG.scrollTop + bG.clientHeight >= bG.scrollHeight - 2 && bG.scrollTop > 0 && GG.length > 0 && (kG = GG[GG.length - 1].anchor), SG(kG)
                                  },
                                  LG = () => {
                                    ZG || (ZG = requestAnimationFrame(wG))
                                  };
                                return wG(), bG.addEventListener("scroll", LG, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ZG), bG.removeEventListener("scroll", LG)
                                }
                              }), [GG, bG]), ZG
                            }(uG, JG), mG = "" === SG && YG.hash ? function(GG) {
                              const bG = (0, iG.p)(GG);
                              if (nG(AG("welcome"), bG)) return null;
                              const ZG = Object.hasOwn(eG, bG) ? eG[bG] : null;
                              if (ZG) return {
                                page: AG(ZG.pageId),
                                anchor: ZG.anchor
                              };
                              const wG = AG("readme");
                              return nG(wG, bG) ? {
                                page: wG,
                                anchor: bG
                              } : gG(`#${bG}`)
                            }(YG.hash) : null;
                            (0, wG.useEffect)((() => (UG.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              UG.e.set({
                                musicOnFromPage: !0
                              }), dw()
                            })), []), (0, wG.useEffect)((() => {
                              const GG = GG => {
                                const bG = GG.target;
                                if (bG.closest(".DocsTextDialog")) return;
                                const ZG = bG.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(bG.tagName);
                                "k" === GG.key && (GG.metaKey || GG.ctrlKey) || "/" === GG.key && !ZG ? (GG.preventDefault(), XG(!0)) : "Escape" === GG.key && EG(!1)
                              };
                              return window.addEventListener("keydown", GG), () => {
                                window.removeEventListener("keydown", GG)
                              }
                            }), []);
                            const IG = (0, wG.useRef)(null);
                            (0, wG.useLayoutEffect)((() => {
                              var GG, bG;
                              if (!JG) return;
                              const ZG = IG.current === YG.pathname;
                              IG.current = YG.pathname;
                              const wG = (0, iG.p)(YG.hash),
                                SG = wG ? document.getElementById(wG) : null;
                              if (null === (GG = JG.querySelector(".DocsTargeted")) || void 0 === GG || GG.classList.remove("DocsTargeted"), null === SG || void 0 === SG || null === (bG = SG.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === bG || bG.classList.add("DocsTargeted"), SG) {
                                var LG;
                                const GG = SG.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (LG = SG.closest(".DocsChangelogEntry")) && void 0 !== LG ? LG : SG).scrollIntoView({
                                  block: GG ? "center" : "start",
                                  behavior: ZG ? "smooth" : "auto"
                                })
                              } else ZG || JG.scrollTo({
                                top: 0
                              })
                            }), [JG, YG.pathname, YG.hash, YG.key]);
                            const FG = (0, wG.useCallback)((() => {
                                EG(!1)
                              }), []),
                              vG = (0, wG.useCallback)((GG => {
                                VG({
                                  hash: GG
                                })
                              }), [VG]);
                            if (mG) return (0, KG.jsx)(kG.c, {
                              replace: !0,
                              to: RG(bG, mG.page, mG.anchor)
                            });
                            if (!pG) return (0, KG.jsx)(kG.c, {
                              replace: !0,
                              to: bG
                            });
                            const aG = ZG ? "div" : "main";
                            return (0, KG.jsx)(Qb.Provider, {
                              value: bG,
                              children: (0, KG.jsx)(Kb.Provider, {
                                value: JG,
                                children: (0, KG.jsxs)("div", {
                                  ref: rG,
                                  className: LG()("DocsSite", {
                                    Embedded: ZG,
                                    NavOpen: zG
                                  }),
                                  "data-theme": QG,
                                  children: [(0, KG.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, KG.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": zG ? "Close menu" : "Open menu",
                                      "aria-expanded": zG,
                                      onClick: () => {
                                        EG(!zG)
                                      },
                                      children: (0, KG.jsx)(dG, {
                                        name: zG ? "cross" : "menu"
                                      })
                                    }), (0, KG.jsxs)(yG.c, {
                                      to: bG,
                                      className: "DocsBrand",
                                      children: [(0, KG.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, KG.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, KG.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, KG.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        XG(!0)
                                      },
                                      children: [(0, KG.jsx)(dG, {
                                        name: "magnifying-glass"
                                      }), (0, KG.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, KG.jsxs)("kbd", {
                                        children: [OL ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, KG.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, KG.jsxs)("a", {
                                        href: DL,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, KG.jsx)(dG, {
                                          name: "discord"
                                        }), (0, KG.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, KG.jsxs)("a", {
                                        href: tL,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, KG.jsx)(dG, {
                                          name: "external-link"
                                        }), (0, KG.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ZG && (0, KG.jsxs)(yG.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, KG.jsx)(dG, {
                                          name: "play"
                                        }), (0, KG.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, KG.jsx)(HL, {
                                        theme: QG,
                                        onChange: hG
                                      })]
                                    })]
                                  }), (0, KG.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, KG.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, KG.jsx)(xL, {
                                        basePath: bG,
                                        activePageId: pG.id,
                                        onNavigate: FG
                                      })
                                    }), (0, KG.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: FG
                                    }), (0, KG.jsxs)(aG, {
                                      className: "DocsMain",
                                      children: [(0, KG.jsx)(uL, {
                                        page: pG,
                                        onTocChange: CG
                                      }, pG.id), (0, KG.jsx)(BL, {
                                        basePath: bG,
                                        pageId: pG.id
                                      })]
                                    }), (0, KG.jsx)("aside", {
                                      className: LG()("DocsToc", {
                                        Timeline: "changelog" === pG.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, KG.jsx)(mL, {
                                        isChangelog: "changelog" === pG.layout,
                                        toc: uG,
                                        activeAnchor: WG,
                                        onNavigate: vG
                                      })
                                    })]
                                  }), (0, KG.jsx)(gL, {}), oG && (0, KG.jsx)(qL, {
                                    basePath: bG,
                                    onClose: () => {
                                      XG(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4758: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            e: () => wG,
                            f: () => yG,
                            g: () => dG,
                            k: () => hG,
                            m: () => kG,
                            p: () => SG,
                            r: () => LG,
                            t: () => KG,
                            w: () => QG,
                            z: () => fG
                          });
                          const wG = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function SG(GG) {
                            try {
                              return decodeURIComponent(GG.slice(1))
                            } catch {
                              return GG.slice(1)
                            }
                          }

                          function LG(GG) {
                            return GG.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const yG = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wG.source}`, "g");

                          function kG(GG, bG) {
                            return 2 === GG.length ? bG.replace(/^ (.*) $/, "$1") : bG
                          }

                          function UG(GG) {
                            return "" === GG.trim()
                          }

                          function YG(GG) {
                            const bG = [];
                            for (const ZG of GG.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) bG.length > 0 && bG[bG.length - 1].endsWith("\\") ? bG[bG.length - 1] += `|${ZG}` : bG.push(ZG);
                            return bG.map((GG => GG.trim().replaceAll("\\|", "|")))
                          }
                          const VG = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function pG(GG) {
                            const bG = [],
                              ZG = [{
                                indent: -1,
                                items: bG
                              }];
                            let wG = null;
                            for (const SG of GG) {
                              const GG = SG.match(VG);
                              if (!GG) {
                                wG && (wG.text += ` ${SG.trim()}`);
                                continue
                              }
                              const bG = GG[1].replace(/\t/g, "  ").length;
                              for (; bG <= ZG[ZG.length - 1].indent;) ZG.pop();
                              wG = {
                                text: GG[3].trim(),
                                children: []
                              }, ZG[ZG.length - 1].items.push(wG), ZG.push({
                                indent: bG,
                                items: wG.children
                              })
                            }
                            return bG
                          }

                          function fG(GG) {
                            const bG = GG.replace(/\r\n/g, "\n").split("\n"),
                              ZG = [];
                            let wG = 0;
                            for (; wG < bG.length;) {
                              const GG = bG[wG];
                              if (UG(GG)) {
                                wG++;
                                continue
                              }
                              const SG = GG.match(/^\s*```\s*(\w*)\s*$/);
                              if (SG) {
                                const GG = [];
                                for (wG++; wG < bG.length && !/^\s*```\s*$/.test(bG[wG]);) GG.push(bG[wG]), wG++;
                                wG++, ZG.push({
                                  kind: "code",
                                  lang: SG[1] || "text",
                                  code: GG.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const yG = GG.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (yG) {
                                const GG = yG[2].trim();
                                ZG.push({
                                  kind: "heading",
                                  level: yG[1].length,
                                  text: GG,
                                  anchor: LG(GG)
                                }), wG++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(GG)) {
                                ZG.push({
                                  kind: "rule"
                                }), wG++;
                                continue
                              }
                              if (GG.trim().startsWith("|") && wG + 1 < bG.length && /^\s*\|[\s:|-]+\|\s*$/.test(bG[wG + 1])) {
                                const SG = YG(GG),
                                  LG = [];
                                for (wG += 2; wG < bG.length && bG[wG].trim().startsWith("|");) LG.push(YG(bG[wG])), wG++;
                                ZG.push({
                                  kind: "table",
                                  header: SG,
                                  rows: LG
                                });
                                continue
                              }
                              if (GG.startsWith(">")) {
                                const GG = [];
                                for (; wG < bG.length && bG[wG].startsWith(">");) GG.push(bG[wG].replace(/^>\s?/, "")), wG++;
                                ZG.push({
                                  kind: "quote",
                                  blocks: fG(GG.join("\n"))
                                });
                                continue
                              }
                              if (VG.test(GG)) {
                                const SG = [],
                                  LG = /^\s*\d+\./.test(GG);
                                for (; wG < bG.length && !UG(bG[wG]) && (VG.test(bG[wG]) || /^\s+\S/.test(bG[wG]));) SG.push(bG[wG]), wG++;
                                ZG.push({
                                  kind: "list",
                                  ordered: LG,
                                  items: pG(SG)
                                });
                                continue
                              }
                              const kG = [];
                              for (; wG < bG.length && !UG(bG[wG]) && !/^\s*```/.test(bG[wG]) && !/^#{1,6}\s/.test(bG[wG]) && !bG[wG].startsWith(">") && !VG.test(bG[wG]) && (!bG[wG].trim().startsWith("|") || 0 !== kG.length);) kG.push(bG[wG].trim()), wG++;
                              0 === kG.length && (kG.push(bG[wG].trim()), wG++), ZG.push({
                                kind: "paragraph",
                                text: kG.join(" ")
                              })
                            }
                            return ZG
                          }

                          function QG(GG) {
                            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ZG = fG(GG);
                            let wG = "";
                            const SG = [],
                              LG = [],
                              yG = new Map;
                            for (const YG of ZG) {
                              if ("heading" === YG.kind) {
                                var kG;
                                const GG = (null !== (kG = yG.get(YG.anchor)) && void 0 !== kG ? kG : 0) + 1;
                                yG.set(YG.anchor, GG), GG > 1 && (YG.anchor = `${YG.anchor}-${GG}`)
                              }
                              if ("heading" === YG.kind && 1 === YG.level && !wG) {
                                wG = YG.text;
                                continue
                              }
                              if ("heading" === YG.kind && YG.level <= bG) {
                                LG.push({
                                  heading: YG,
                                  blocks: []
                                });
                                continue
                              }
                              const GG = LG.at(-1);
                              GG ? GG.blocks.push(YG) : SG.push(YG)
                            }
                            const UG = GG => {
                              for (;
                                "rule" === (null === (bG = GG.at(-1)) || void 0 === bG ? void 0 : bG.kind);) {
                                var bG;
                                GG.pop()
                              }
                            };
                            UG(SG);
                            for (const YG of LG) UG(YG.blocks);
                            return {
                              title: wG,
                              intro: SG,
                              sections: LG
                            }
                          }

                          function KG(GG) {
                            return [{
                              heading: null,
                              blocks: GG.intro
                            }, ...GG.sections.map((GG => ({
                              heading: GG.heading,
                              blocks: GG.blocks
                            })))]
                          }

                          function hG(GG) {
                            return GG.flatMap((GG => "code" === GG.kind ? [GG] : "quote" === GG.kind ? hG(GG.blocks) : []))
                          }

                          function dG(GG) {
                            switch (GG.kind) {
                              case "heading":
                              case "paragraph":
                                return GG.text;
                              case "code":
                                return GG.code;
                              case "table":
                                return [GG.header, ...GG.rows].map((GG => GG.join(" "))).join(" ");
                              case "list": {
                                const bG = GG => GG.map((GG => `${GG.text} ${bG(GG.children)}`)).join(" ");
                                return bG(GG.items)
                              }
                              case "quote":
                                return GG.blocks.map(dG).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4858: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            b: () => kG
                          });
                          var wG = ZG(51),
                            SG = ZG(333),
                            LG = ZG(1889),
                            yG = ZG(1067);

                          function kG(GG) {
                            let {
                              text: bG
                            } = GG;
                            const ZG = [];
                            let kG = "";
                            return (0, SG.xc)(bG).forEach(((GG, bG) => {
                              if ("string" === typeof GG || !(0, LG.e)(GG.icon)) return void(kG += "string" === typeof GG ? GG : GG.icon);
                              const SG = Math.max(0, kG.trimEnd().search(/\S{1,12}$/));
                              ZG.push((0, yG.jsxs)(wG.Fragment, {
                                children: [kG.slice(0, SG), (0, yG.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [kG.slice(SG), (0, yG.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": GG.icon,
                                    children: (0, yG.jsx)(LG.b, {
                                      itemName: GG.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, bG)), kG = ""
                            })), ZG.push(kG), (0, yG.jsx)(yG.Fragment, {
                              children: ZG
                            })
                          }
                        }, 4786: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            g: () => rG,
                            e: () => JG
                          });
                          var wG = ZG(51),
                            SG = ZG(1389),
                            LG = ZG(1876),
                            yG = ZG(4790),
                            kG = ZG(1067);
                          const UG = (0, wG.memo)((function(GG) {
                            let {
                              initialParameters: bG
                            } = GG;
                            const ZG = (0, wG.useRef)(null),
                              SG = (0, wG.useRef)(null),
                              UG = (0, wG.useRef)(0),
                              YG = (0, wG.useRef)(null),
                              VG = bG.description,
                              pG = bG.Zb,
                              {
                                scale: fG,
                                rotation: QG
                              } = null !== bG && void 0 !== bG ? bG : {},
                              KG = (0, yG.f)();
                            return (0, wG.useEffect)((() => {
                              const GG = KG.onFrame((() => {
                                const GG = KG.getState();
                                if (!GG.isActive || !ZG.current || !SG.current) return;
                                const bG = GG.state;
                                if (ZG.current.value = bG.progress, bG.clickCount > UG.current) {
                                  UG.current = bG.clickCount;
                                  const GG = SG.current;
                                  GG.classList.add("pulse"), YG.current = setTimeout((() => {
                                    GG.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(YG.current), GG()
                              }
                            }), [KG]), (0, kG.jsx)(kG.Fragment, {
                              children: (0, kG.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== fG && {
                                    "--scale": fG
                                  },
                                  ...null !== QG && {
                                    "--rotation": `${QG}deg`
                                  }
                                },
                                children: [(0, kG.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ZG
                                }), (0, kG.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: SG,
                                  children: (0, kG.jsx)(LG.c, {
                                    text: [{
                                      icon: pG
                                    }]
                                  })
                                }), (0, kG.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, kG.jsx)(LG.c, {
                                    text: VG
                                  })
                                })]
                              })
                            })
                          }));
                          var YG = ZG(1006),
                            VG = ZG.n(YG);
                          const pG = 2 * Math.PI * 90,
                            fG = (0, wG.memo)((function(GG) {
                              let {
                                initialParameters: bG
                              } = GG;
                              const ZG = (0, wG.useRef)(null),
                                SG = (0, wG.useRef)(null),
                                UG = (0, wG.useRef)(null),
                                YG = bG.label,
                                fG = bG.icon,
                                QG = bG.yb,
                                {
                                  scale: KG,
                                  rotation: hG,
                                  kb: dG
                                } = null !== bG && void 0 !== bG ? bG : {},
                                JG = (0, yG.f)();
                              return (0, wG.useEffect)((() => {
                                const GG = JG.onFrame((() => {
                                  var GG, bG;
                                  const wG = JG.getState();
                                  if (!wG.isActive || !SG.current) return;
                                  const LG = wG.state,
                                    yG = null !== (GG = LG.timeRemaining) && void 0 !== GG ? GG : 0,
                                    kG = null !== (bG = LG.Lb) && void 0 !== bG ? bG : 1,
                                    YG = pG * (1 - yG / kG);
                                  SG.current.style.strokeDashoffset = `${YG}`, ZG.current && (ZG.current.style.opacity = yG > 0 ? "1" : "0"), UG.current && QG && (UG.current.textContent = `${(yG/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  GG()
                                }
                              }), [JG, QG]), (0, kG.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ZG,
                                style: {
                                  ...null !== KG && {
                                    "--scale": KG
                                  },
                                  ...null !== hG && {
                                    "--rotation": `${hG}deg`
                                  }
                                },
                                children: [(0, kG.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, kG.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, kG.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, kG.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: pG,
                                      ref: SG
                                    })]
                                  }), (0, kG.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, kG.jsx)(LG.c, {
                                      text: [{
                                        icon: fG
                                      }],
                                      className: VG()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: dG
                                      })
                                    })
                                  })]
                                }), (0, kG.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, kG.jsx)(LG.c, {
                                    text: YG,
                                    className: "QTETimedClickLabelText"
                                  }), QG && (0, kG.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: UG
                                  })]
                                })]
                              })
                            })),
                            QG = (0, wG.memo)((function(GG) {
                              let {
                                initialParameters: bG
                              } = GG;
                              const ZG = (0, wG.useRef)(null),
                                SG = (0, wG.useRef)(null),
                                UG = (0, wG.useRef)(null),
                                YG = (0, wG.useRef)(!1),
                                VG = bG.description,
                                pG = null === bG || void 0 === bG ? void 0 : bG.icon,
                                fG = (0, yG.f)();
                              return (0, wG.useEffect)((() => {
                                const GG = fG.onFrame((() => {
                                  const GG = fG.getState();
                                  if (!GG.isActive) return;
                                  const bG = GG.state;
                                  if (ZG.current) {
                                    const GG = 100 * (bG.catchZonePosition - bG.Yb / 2);
                                    ZG.current.style.left = `${GG}%`, ZG.current.style.width = 100 * bG.Yb + "%", bG.isCatching !== YG.current && (YG.current = bG.isCatching, bG.isCatching ? ZG.current.classList.add("catching") : ZG.current.classList.remove("catching"))
                                  }
                                  SG.current && (SG.current.style.left = 100 * bG.moverPosition + "%"), UG.current && (UG.current.value = bG.progress)
                                }));
                                return () => {
                                  GG()
                                }
                              }), [fG]), (0, kG.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, kG.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, kG.jsx)(LG.c, {
                                    text: VG
                                  })
                                }), (0, kG.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: UG
                                }), (0, kG.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, kG.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ZG
                                  }), (0, kG.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: SG,
                                    children: (0, kG.jsx)("span", {
                                      children: pG && (0, kG.jsx)(LG.c, {
                                        text: [{
                                          icon: pG,
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
                          var KG = ZG(604);
                          const hG = (0, wG.memo)((function(GG) {
                              let {
                                initialParameters: bG
                              } = GG;
                              const ZG = (0, wG.useRef)(null),
                                SG = bG.label,
                                UG = bG.Jb,
                                {
                                  icon: YG,
                                  scale: VG,
                                  rotation: pG
                                } = null !== bG && void 0 !== bG ? bG : {},
                                fG = 100 * (.5 - UG / 2),
                                QG = 100 * UG,
                                hG = (0, yG.f)();
                              return (0, wG.useEffect)((() => {
                                const GG = hG.onFrame((() => {
                                  const GG = hG.getState();
                                  if (!GG.isActive || !ZG.current) return;
                                  const bG = GG.state;
                                  ZG.current.style.left = 100 * bG.markerPosition + "%"
                                }));
                                return () => {
                                  GG()
                                }
                              }), [hG]), (0, kG.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, KG.L)(VG) && {
                                    "--scale": VG
                                  },
                                  ...!(0, KG.L)(pG) && {
                                    "--rotation": `${pG}deg`
                                  }
                                },
                                children: [YG && (0, kG.jsx)(LG.c, {
                                  text: [{
                                    icon: YG
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, kG.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, kG.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${fG}%`,
                                      width: `${QG}%`
                                    }
                                  }), (0, kG.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ZG
                                  })]
                                }), (0, kG.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, kG.jsx)(LG.c, {
                                    text: SG
                                  })
                                })]
                              })
                            })),
                            dG = (0, wG.memo)((function(GG) {
                              let {
                                initialParameters: bG
                              } = GG;
                              const ZG = (0, wG.useRef)(null),
                                [SG, UG] = (0, wG.useState)((() => new Array(bG.zb).fill("pending"))),
                                [YG, VG] = (0, wG.useState)((() => {
                                  const GG = bG.Xb;
                                  return (0, KG.L)(GG) || GG <= 0 ? [] : new Array(GG).fill("pending")
                                })),
                                pG = bG.label,
                                {
                                  icon: fG
                                } = bG,
                                QG = (0, wG.useRef)(0),
                                hG = (0, wG.useRef)(0),
                                dG = (0, wG.useRef)([]),
                                JG = (0, yG.f)();
                              return (0, wG.useEffect)((() => {
                                const GG = JG.onFrame((() => {
                                  const GG = JG.getState();
                                  if (!GG.isActive || !ZG.current) return;
                                  const bG = GG.state,
                                    wG = 30 + 60 * bG.outerCircleProgress;
                                  if (ZG.current.setAttribute("r", String(wG)), !0 === bG.lastClickResult && bG.successes > QG.current) {
                                    ZG.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZG.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const GG = setTimeout((() => {
                                      var GG;
                                      null === (GG = ZG.current) || void 0 === GG || GG.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    dG.current.push(GG)
                                  } else if (!1 === bG.lastClickResult && bG.misses > hG.current) {
                                    ZG.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZG.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const GG = setTimeout((() => {
                                      var GG;
                                      null === (GG = ZG.current) || void 0 === GG || GG.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    dG.current.push(GG)
                                  }
                                  bG.successes === QG.current && bG.misses === hG.current || (QG.current = bG.successes, hG.current = bG.misses, UG((GG => {
                                    const ZG = [...GG];
                                    for (let wG = 0; wG < bG.zb; wG++) ZG[wG] = wG < bG.successes ? "success" : "pending";
                                    return ZG
                                  })), VG((GG => {
                                    if (0 === GG.length) return GG;
                                    const ZG = [...GG];
                                    for (let wG = 0; wG < ZG.length; wG++) ZG[wG] = wG < bG.misses ? "miss" : "pending";
                                    return ZG
                                  })))
                                }));
                                return () => {
                                  GG();
                                  for (const GG of dG.current) clearTimeout(GG);
                                  dG.current = []
                                }
                              }), [JG]), (0, kG.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, kG.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: SG.map(((GG, bG) => (0, kG.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === GG ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, bG)))
                                }), (0, kG.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, kG.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, kG.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, kG.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ZG
                                    })]
                                  }), fG && (0, kG.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, kG.jsx)(LG.c, {
                                      text: [{
                                        icon: fG
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), YG.length > 0 && (0, kG.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: YG.map(((GG, bG) => (0, kG.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === GG ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, bG)))
                                }), (0, kG.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, kG.jsx)(LG.c, {
                                    text: pG
                                  })
                                })]
                              })
                            }));

                          function JG(GG) {
                            let {
                              qte: bG
                            } = GG;
                            switch (bG.type) {
                              case "progressBar":
                                return (0, kG.jsx)(UG, {
                                  initialParameters: bG.parameters
                                });
                              case "timedClick":
                                return (0, kG.jsx)(fG, {
                                  initialParameters: bG.parameters
                                });
                              case "gravityBar":
                                return (0, kG.jsx)(QG, {
                                  initialParameters: bG.parameters
                                });
                              case "precisionBar":
                                return (0, kG.jsx)(hG, {
                                  initialParameters: bG.parameters
                                });
                              case "rhythmClick":
                                return (0, kG.jsx)(dG, {
                                  initialParameters: bG.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const rG = (0, wG.memo)((function() {
                            const [GG, bG] = (0, wG.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, SG.g)("qteStateUpdated", (GG => {
                              bG(GG)
                            })), GG.isActive && GG.type ? (0, kG.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, kG.jsx)(JG, {
                                qte: GG
                              })
                            }) : null
                          }))
                        }, 4790: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            b: () => kG,
                            f: () => UG
                          });
                          var wG = ZG(51),
                            SG = ZG(1260),
                            LG = ZG(4792);
                          const yG = {
                              getState: () => LG.e.getCurrentState(),
                              onFrame: SG.q
                            },
                            kG = (0, wG.createContext)(yG);

                          function UG() {
                            return (0, wG.useContext)(kG)
                          }
                        }, 4864: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            d: () => lG,
                            f: () => cG
                          });
                          var wG = ZG(4871),
                            SG = ZG(333);
                          const LG = 120,
                            yG = 260,
                            kG = 1.15,
                            UG = 1.2,
                            YG = 2,
                            VG = 1.08,
                            pG = .8,
                            fG = .95,
                            QG = 8,
                            KG = "[\"')\\]\u300d\u300f\uff09]*",
                            hG = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KG}$`),
                            dG = new RegExp(`[?\uff1f]${KG}$`),
                            JG = new RegExp(`[!\uff01]${KG}$`),
                            rG = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            zG = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            EG = new RegExp(`[${zG}]`),
                            oG = new RegExp(`[${zG}]|[^${zG}]+`, "g"),
                            XG = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function uG(GG) {
                            let bG = 2166136261;
                            for (let ZG = 0; ZG < GG.length; ZG++) bG ^= GG.charCodeAt(ZG), bG = Math.imul(bG, 16777619);
                            return (bG >>> 0) / 4294967295 * 2 - 1
                          }

                          function iG(GG) {
                            var bG;
                            if (EG.test(GG)) return 1;
                            const ZG = GG.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              wG = ZG.replace(/[^0-9]/g, "");
                            if (wG.length > 0 && !/\p{L}/u.test(ZG)) return Math.min(wG.length, 4);
                            const SG = null !== (bG = ZG.match(XG)) && void 0 !== bG ? bG : [];
                            if (0 === SG.length) {
                              var LG, yG;
                              const GG = null !== (LG = null === (yG = ZG.match(/\p{L}/gu)) || void 0 === yG ? void 0 : yG.length) && void 0 !== LG ? LG : 0;
                              return 0 === GG ? 0 : Math.min(Math.max(1, Math.round(GG / 2.5)), QG)
                            }
                            const kG = ZG.replace(/[^\p{L}]/gu, ""),
                              UG = SG.length > 1 && "e" === SG.at(-1) && kG.endsWith("e") && !kG.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(GG.replace(/[^\p{L}]/gu, ""));
                            return Math.min(SG.length - (UG ? 1 : 0), QG)
                          }

                          function CG(GG) {
                            return GG.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function WG(GG) {
                            const bG = GG.replace(/[^\p{L}]/gu, "");
                            return bG.length >= 2 && bG === bG.toUpperCase() && bG !== bG.toLowerCase()
                          }

                          function mG(GG, bG) {
                            var ZG;
                            const QG = bG && (0, wG.i)(bG),
                              KG = null !== (ZG = null === QG || void 0 === QG ? void 0 : QG.syllableMs) && void 0 !== ZG ? ZG : wG.d,
                              zG = function(GG) {
                                const bG = [];
                                for (const wG of (0, SG.xc)(GG))
                                  if ("string" === typeof wG)
                                    for (const GG of wG.split(/(\s+)/)) {
                                      if ("" === GG) continue;
                                      if (/^\s+$/.test(GG)) {
                                        bG.push({
                                          kind: "space",
                                          text: GG
                                        });
                                        continue
                                      }
                                      if (!EG.test(GG)) {
                                        bG.push({
                                          kind: "word",
                                          text: GG,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let wG = !0;
                                      for (const SG of null !== (ZG = GG.match(oG)) && void 0 !== ZG ? ZG : []) {
                                        var ZG;
                                        const GG = bG.at(-1);
                                        wG || "word" !== (null === GG || void 0 === GG ? void 0 : GG.kind) || EG.test(SG) || /[\p{L}\p{N}]/u.test(SG) ? (wG || bG.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), bG.push({
                                          kind: "word",
                                          text: SG,
                                          delayMs: 0
                                        }), wG = !1) : GG.text += SG
                                      }
                                    } else bG.push({
                                      kind: "icon",
                                      text: wG.icon,
                                      delayMs: 0
                                    });
                                return bG
                              }(GG),
                              XG = [];
                            let mG = [];
                            for (const wG of zG) "space" !== wG.kind && (mG.push(wG), hG.test(wG.text) && (XG.push(mG), mG = []));
                            XG.push(mG);
                            const IG = [];
                            let FG = 0;
                            for (const wG of XG) {
                              var vG, aG;
                              const GG = null !== (vG = null === (aG = wG.at(-1)) || void 0 === aG ? void 0 : aG.text) && void 0 !== vG ? vG : "",
                                bG = dG.test(GG),
                                ZG = JG.test(GG),
                                SG = wG.map((GG => "word" === GG.kind ? iG(GG.text) : 1)),
                                zG = SG.findLastIndex((GG => GG > 0));
                              for (const [dG, JG] of wG.entries()) {
                                const GG = "word" === JG.kind,
                                  wG = SG[dG];
                                JG.delayMs = FG;
                                for (let SG = 0; QG && SG < wG; SG++) {
                                  const {
                                    intonation: LG
                                  } = QG;
                                  let yG = zG > 0 ? -LG.declineSemitones * (dG / zG) : 0;
                                  yG += uG(`${CG(JG.text)}|${SG}`) * LG.variationSemitones;
                                  const hG = Math.min(1, LG.variationSemitones);
                                  let rG = QG.glideSemitones,
                                    EG = 1;
                                  ZG && (yG += LG.exclaimLiftSemitones, EG *= kG), bG && dG === zG && (yG += LG.questionRiseSemitones * (wG > 1 ? .5 + .5 * SG / (wG - 1) : 1), SG === wG - 1 && (rG = Math.abs(rG) + LG.questionRiseSemitones / 2)), GG && WG(JG.text) && (yG += YG * hG, EG *= UG), wG > 1 && 0 === SG && (yG += pG * hG, EG *= VG), IG.push({
                                    atMs: FG + SG * KG,
                                    semitones: yG,
                                    glideSemitones: rG,
                                    durationMs: SG < wG - 1 ? Math.min(QG.durationMs, KG * fG) : QG.durationMs,
                                    level: EG
                                  })
                                }
                                FG += wG * KG + (hG.test(JG.text) ? yG : rG.test(JG.text) ? LG : 0)
                              }
                            }
                            return {
                              pieces: zG.map((GG => "space" === GG.kind ? GG : "icon" === GG.kind ? {
                                kind: "icon",
                                icon: GG.text,
                                delayMs: GG.delayMs
                              } : {
                                kind: "word",
                                text: GG.text,
                                delayMs: GG.delayMs
                              })),
                              blips: IG
                            }
                          }
                          var IG = ZG(1151),
                            FG = ZG(1204),
                            vG = ZG(1903);

                          function aG(GG) {
                            if ("string" === typeof GG) return GG;
                            const bG = FG.d.get().getCurrentLanguageCode();
                            return (0, IG.o)(bG, GG.translationKey, (0, IG.k)(GG.params, vG.b.shown))
                          }

                          function cG(GG) {
                            const bG = void 0 === GG.voice ? null : (0, wG.j)(GG.voice),
                              ZG = bG && (0, wG.i)(bG);
                            return {
                              plan: mG(aG(GG.line), ZG),
                              synth: ZG
                            }
                          }

                          function lG(GG) {
                            const bG = [];
                            let ZG = [];
                            for (const [SG, LG] of GG.entries()) {
                              var wG;
                              "space" === LG.kind && (" " !== LG.text || "icon" !== (null === (wG = GG[SG + 1]) || void 0 === wG ? void 0 : wG.kind)) ? (ZG.length > 0 && bG.push(ZG), bG.push([LG]), ZG = []) : ZG.push(LG)
                            }
                            return ZG.length > 0 && bG.push(ZG), bG
                          }
                        }, 4874: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            b: () => VG,
                            d: () => pG
                          });
                          var wG = ZG(4883),
                            SG = ZG(17);
                          const LG = .25,
                            yG = .85,
                            kG = .02,
                            UG = .01;

                          function YG(GG, bG, ZG, wG, SG, LG, kG) {
                            const {
                              waveform: UG,
                              pitchHz: YG,
                              attackMs: VG,
                              releaseMs: pG,
                              lowpassHz: fG
                            } = ZG, QG = SG + wG.durationMs / 1e3, KG = YG * 2 ** (wG.semitones / 12), hG = GG.createOscillator();
                            hG.type = UG, hG.frequency.setValueAtTime(KG, SG), hG.frequency.exponentialRampToValueAtTime(KG * 2 ** (wG.glideSemitones / 12), QG);
                            const dG = SG + Math.min(VG, wG.durationMs) / 1e3,
                              JG = GG.createGain();
                            JG.gain.setValueAtTime(0, SG), JG.gain.linearRampToValueAtTime(LG, dG), JG.gain.linearRampToValueAtTime(LG * yG, Math.max(dG, QG - pG / 1e3)), JG.gain.linearRampToValueAtTime(0, QG);
                            const rG = [hG];
                            if (null !== fG) {
                              const bG = GG.createBiquadFilter();
                              bG.type = "lowpass", bG.frequency.value = fG, rG.push(bG)
                            }
                            rG.push(JG, bG);
                            for (let yG = 1; yG < rG.length; yG++) rG[yG - 1].connect(rG[yG]);
                            return hG.onended = () => {
                              for (const GG of rG.slice(0, -1)) GG.disconnect();
                              kG()
                            }, hG.start(SG), hG.stop(QG), hG
                          }

                          function VG(GG, bG, ZG, wG, SG, yG) {
                            if (0 === wG.length) return yG(), () => {};
                            const VG = LG * ZG.volume * SG,
                              pG = GG.createGain();
                            pG.connect(bG);
                            const fG = GG.currentTime + kG,
                              QG = new Set;
                            for (const LG of wG) {
                              const bG = YG(GG, pG, ZG, LG, fG + LG.atMs / 1e3, VG * LG.level, (() => {
                                QG.delete(bG), 0 === QG.size && (pG.disconnect(), yG())
                              }));
                              QG.add(bG)
                            }
                            return () => {
                              const bG = GG.currentTime;
                              pG.gain.setTargetAtTime(0, bG, UG);
                              for (const GG of QG) try {
                                GG.stop(bG + 5 * UG)
                              } catch {}
                            }
                          }

                          function pG(GG, bG) {
                            var ZG;
                            const LG = wG.Howler.ctx,
                              yG = wG.Howler.masterGain;
                            if (!LG || !yG || !SG.e.get("soundOnFromAd")) return () => {};
                            const kG = wG.Howler;
                            return null === (ZG = kG._autoResume) || void 0 === ZG || ZG.call(kG), VG(LG, yG, GG, bG, SG.e.get("soundVolume"), (() => {
                              var GG;
                              null === (GG = kG._autoSuspend) || void 0 === GG || GG.call(kG)
                            }))
                          }
                        }, 4849: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            e: () => kG,
                            i: () => SG,
                            k: () => UG,
                            n: () => yG,
                            p: () => LG
                          });
                          var wG = ZG(4847);
                          const SG = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            LG = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            yG = `${wG.f} lists every page of the Bloxd Code API docs.`;

                          function kG(GG, bG) {
                            return `${GG.url}${encodeURIComponent(bG.toWellFormed())}`
                          }

                          function UG(GG) {
                            const bG = kG(SG, GG);
                            return bG.length <= 3e4 ? {
                              url: bG,
                              sendsPrompt: !0
                            } : {
                              url: new URL(SG.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 4883: (GG, bG, ZG) => {
                          ZG.r(bG), ZG.d(bG, {
                            Howl: () => SG.Howl,
                            Howler: () => SG.Howler,
                            musicOutput: () => dG,
                            readyAudioContext: () => JG
                          });
                          var wG, SG = ZG(4889),
                            LG = ZG(3423),
                            yG = ZG(4672);
                          const kG = SG.Howler;

                          function UG() {
                            var GG, bG;
                            if (kG.ctx || !kG.usingWebAudio || "undefined" === typeof AudioContext || !(0, yG.h)()) return;
                            const ZG = navigator.audioSession;
                            let wG;
                            "auto" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && (ZG.type = "ambient");
                            try {
                              wG = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const SG = wG.createGain();
                            SG.gain.setValueAtTime(kG._muted ? 0 : null !== (GG = kG._volume) && void 0 !== GG ? GG : 1, wG.currentTime), SG.connect(wG.destination), kG.ctx = wG, kG.masterGain = SG, null === (bG = kG._setup) || void 0 === bG || bG.call(kG)
                          }
                          kG._mobileUnloaded = !0;
                          const YG = kG.volume.bind(SG.Howler);
                          kG.volume = function() {
                            return UG(), YG(...arguments)
                          };
                          const VG = kG.mute.bind(SG.Howler);
                          kG.mute = GG => (UG(), VG(GG));
                          const pG = SG.Howl.prototype,
                            fG = pG.init;

                          function QG() {
                            for (; kG._html5AudioPool.length < kG.html5PoolSize;) {
                              const GG = new Audio;
                              GG._unlocked = !0, kG._releaseHtml5Audio(GG)
                            }
                            for (const bG of kG._howls)
                              if (!bG._webAudio)
                                for (const ZG of bG._getSoundIds()) {
                                  var GG;
                                  const wG = null === (GG = bG._soundById(ZG)) || void 0 === GG ? void 0 : GG._node;
                                  wG && !wG._unlocked && (wG._unlocked = !0, wG.load())
                                }
                          }
                          pG.init = function(GG) {
                            return UG(), fG.call(this, GG)
                          }, (0, yG.h)() && (kG._unlockAudio = () => {
                            const GG = kG.ctx;
                            if (kG._audioUnlocked || !GG) return;
                            kG.autoUnlock = !1;
                            const bG = GG.createBuffer(1, 1, 22050);
                            kG._scratchBuffer = bG;
                            const ZG = new AbortController;
                            let wG = "afterPaint";
                            const SG = () => {
                                var wG;
                                if (kG._audioUnlocked) return;
                                null === (wG = kG._autoResume) || void 0 === wG || wG.call(kG);
                                const SG = GG.createBufferSource();
                                SG.buffer = bG, SG.connect(GG.destination), SG.start(0), GG.resume().catch((() => {})), SG.onended = () => {
                                  SG.disconnect(0), kG._audioUnlocked = !0, ZG.abort();
                                  for (const GG of kG._howls) GG._emit("unlock")
                                }
                              },
                              UG = () => {
                                QG(), SG()
                              },
                              YG = bG => {
                                if (QG(), "inTap" === wG) {
                                  if ("running" === GG.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SG()
                                } else "afterPaint" === wG && (wG = "queued", (0, LG.d)(bG.timeStamp, (() => {
                                  wG = "inTap", SG()
                                })))
                              };
                            for (const LG of ["touchstart", "touchend"]) document.addEventListener(LG, UG, {
                              capture: !0,
                              signal: ZG.signal
                            });
                            for (const LG of yG.d) document.addEventListener(LG, YG, {
                              capture: !0,
                              signal: ZG.signal
                            })
                          });
                          let KG = 0;
                          const hG = null === (wG = kG._autoSuspend) || void 0 === wG ? void 0 : wG.bind(SG.Howler);

                          function dG() {
                            JG();
                            const {
                              ctx: GG,
                              masterGain: bG
                            } = kG;
                            return GG && bG ? {
                              ctx: GG,
                              destination: bG,
                              holdAwake: GG => {
                                var bG, ZG;
                                (KG += GG ? 1 : -1, GG) ? null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG): null === (ZG = kG._autoSuspend) || void 0 === ZG || ZG.call(kG)
                              },
                              wake: () => {
                                var bG;
                                "running" !== GG.state && (null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG), GG.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function JG() {
                            var GG;
                            (kG.volume(), kG.ctx && kG.autoUnlock) && (null === (GG = kG._unlockAudio) || void 0 === GG || GG.call(kG))
                          }
                          hG && (kG._autoSuspend = () => KG > 0 ? SG.Howler : hG())
                        }, 4894: (GG, bG, ZG) => {
                          function wG(GG) {
                            return {
                              notAfter: GG
                            }
                          }
                          ZG.d(bG, {
                            e: () => UG,
                            g: () => YG,
                            j: () => kG,
                            n: () => wG,
                            r: () => SG,
                            u: () => LG,
                            x: () => yG,
                            y: () => VG,
                            z: () => pG
                          });
                          const SG = wG("\\w$."),
                            LG = wG("\\w.,");

                          function yG(GG) {
                            return bG => UG(bG, GG)
                          }

                          function kG(GG) {
                            return bG => !GG.test(bG.input.slice(0, bG.index))
                          }

                          function UG(GG, bG) {
                            return GG.index > 0 && new RegExp(`[${bG}]`).test(GG.input[GG.index - 1])
                          }

                          function YG(GG, bG, ZG) {
                            return function(GG) {
                              return void 0 !== GG && "function" !== typeof GG
                            }(ZG) ? function(GG, bG, ZG) {
                              const wG = bG.flags.replace(/[gy]/g, ""),
                                SG = new RegExp(`[^${ZG}](?:${bG.source})`, `${wG}g`),
                                LG = [],
                                yG = ZG => {
                                  const wG = ZG.index + ZG[0].length;
                                  return ("" === ZG[0] ? fG(GG, bG, wG) : wG) - 1
                                },
                                kG = new RegExp(`(?:${bG.source})`, `${wG}y`).exec(GG);
                              if (kG) {
                                if (LG.push(kG), !bG.global) return LG;
                                SG.lastIndex = yG(kG)
                              }
                              for (let UG = SG.exec(GG); UG; UG = SG.exec(GG)) {
                                const ZG = fG(GG, bG, UG.index) - UG.index;
                                if (UG[0] = UG[0].slice(ZG), UG.index += ZG, LG.push(UG), !bG.global) break;
                                SG.lastIndex = yG(UG)
                              }
                              return LG
                            }(GG, bG, ZG.notAfter) : function(GG, bG, ZG) {
                              const wG = new RegExp(bG.source, `${bG.flags.replace(/[gy]/g,"")}g`),
                                SG = [];
                              for (let LG = wG.exec(GG); LG; LG = wG.exec(GG))
                                if (!ZG || ZG(LG)) {
                                  if (SG.push(LG), !bG.global) break;
                                  "" === LG[0] && (wG.lastIndex = fG(GG, bG, wG.lastIndex))
                                } else wG.lastIndex = fG(GG, bG, LG.index);
                              return SG
                            }(GG, bG, ZG)
                          }

                          function VG(GG, bG, ZG, wG) {
                            let SG = "",
                              LG = 0;
                            for (const yG of YG(GG, bG, ZG)) SG += GG.slice(LG, yG.index) + wG(yG), LG = yG.index + yG[0].length;
                            return SG + GG.slice(LG)
                          }

                          function pG(GG, bG, ZG) {
                            const wG = [];
                            let SG = 0;
                            for (const LG of YG(GG, bG, ZG)) wG.push(GG.slice(SG, LG.index)), SG = LG.index + LG[0].length;
                            return [...wG, GG.slice(SG)]
                          }

                          function fG(GG, bG, ZG) {
                            var wG;
                            return ZG + (bG.unicode && (null !== (wG = GG.codePointAt(ZG)) && void 0 !== wG ? wG : 0) > 65535 ? 2 : 1)
                          }
                        }, 4847: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            b: () => SG,
                            c: () => UG,
                            e: () => LG,
                            f: () => yG,
                            h: () => kG,
                            l: () => dG,
                            m: () => VG,
                            q: () => pG,
                            s: () => hG,
                            t: () => QG
                          });
                          var wG = ZG(1527);
                          const SG = 24e3,
                            LG = "/docs/llms.txt",
                            yG = `${wG.d}${LG}`,
                            kG = "/llms.txt",
                            UG = "/docs/llms-full.txt";

                          function YG(GG) {
                            return GG || "index"
                          }

                          function VG(GG) {
                            return `/docs/${YG(GG)}.md`
                          }

                          function pG(GG, bG) {
                            return `/docs/${YG(GG)}/${bG+1}.md`
                          }
                          const fG = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function QG(GG) {
                            const bG = fG.exec(GG);
                            return null === bG ? null : {
                              name: bG[1],
                              part: void 0 === bG[2] ? null : Number(bG[2])
                            }
                          }
                          const KG = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function hG(GG) {
                            const bG = KG.exec(GG);
                            if (null === bG) return null;
                            const [, ZG = "", wG] = bG;
                            return void 0 === wG ? VG(ZG) : pG(ZG, Number(wG) - 1)
                          }

                          function dG(GG) {
                            return `/docsHtml/${YG(GG)}.html`
                          }
                        }, 4871: (GG, bG, ZG) => {
                          ZG.d(bG, {
                            d: () => SG,
                            e: () => wG,
                            g: () => LG,
                            i: () => UG,
                            j: () => yG
                          });
                          const wG = ["sine", "triangle", "square", "sawtooth"],
                            SG = 55,
                            LG = {
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

                          function yG(GG) {
                            return "string" !== typeof GG ? GG : Object.hasOwn(LG, GG) ? LG[GG] : null
                          }

                          function kG(GG, bG, ZG) {
                            return Math.min(ZG, Math.max(bG, GG))
                          }

                          function UG(GG) {
                            const bG = kG(GG.durationMs, 10, 500),
                              ZG = kG(GG.attackMs, 0, bG),
                              {
                                intonation: SG
                              } = GG;
                            return {
                              waveform: wG.includes(GG.waveform) ? GG.waveform : "sine",
                              pitchHz: kG(GG.pitchHz, 20, 4e3),
                              glideSemitones: kG(GG.glideSemitones, -24, 24),
                              durationMs: bG,
                              attackMs: ZG,
                              releaseMs: kG(GG.releaseMs, 0, bG - ZG),
                              lowpassHz: null === GG.lowpassHz ? null : kG(GG.lowpassHz, 20, 2e4),
                              volume: kG(GG.volume, 0, 2),
                              intonation: {
                                variationSemitones: kG(SG.variationSemitones, 0, 6),
                                declineSemitones: kG(SG.declineSemitones, 0, 12),
                                questionRiseSemitones: kG(SG.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: kG(SG.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: kG(GG.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const GG in modules) Object.freeze(modules[GG]);